import Image, { getImageProps } from 'next/image';
import { IMAGE_CATEGORIES, type ImageCategory } from '@/lib/images';

interface EditorialImageProps {
  category: ImageCategory;
  src: string;
  /**
   * Optional art-directed crop shown only below the `sm` breakpoint — a
   * different composition of the same subject, not just a smaller version
   * of `src`. Rendered via a real <picture>/getImageProps pair so the
   * browser fetches only the crop that matches, rather than downloading
   * both.
   */
  mobileSrc?: string;
  alt: string;
  /** Marks an above-the-fold image as eager-loaded; every other image lazy-loads (next/image's default). */
  priority?: boolean;
  sizes?: string;
  /** Overrides the category's default aspect-ratio/rounding — use sparingly, for bespoke layouts like the hero's full-bleed panel. */
  wrapperClassName?: string;
  imageClassName?: string;
}

// See .image-fade-in in globals.css for why this is a CSS animation rather
// than a JS onLoad-triggered opacity flag.
const FADE_IN = 'image-fade-in';

export default function EditorialImage({
  category,
  src,
  mobileSrc,
  alt,
  priority,
  sizes,
  wrapperClassName,
  imageClassName = 'object-cover',
}: EditorialImageProps) {
  const defaults = IMAGE_CATEGORIES[category];
  const effectiveSizes = sizes ?? defaults.sizes;

  if (mobileSrc) {
    const { props: mobileImgProps } = getImageProps({
      src: mobileSrc,
      alt,
      width: defaults.mobileWidth,
      height: defaults.mobileHeight,
      priority,
      sizes: '100vw',
      unoptimized: mobileSrc.endsWith('.svg'),
    });
    const { props: desktopImgProps } = getImageProps({
      src,
      alt,
      width: defaults.width,
      height: defaults.height,
      priority,
      sizes: effectiveSizes,
      unoptimized: src.endsWith('.svg'),
    });

    return (
      <div className={`relative ${wrapperClassName ?? defaults.wrapperClassName}`}>
        <picture>
          {/*
            getImageProps returns no srcSet at all for unoptimized sources
            (nothing to build a responsive set from), which left this
            <source> empty and inert — the browser always fell through to
            the mobile <img> regardless of screen width. Falling back to
            the raw src as a single-entry srcset keeps it working for the
            placeholder SVGs; real optimized photos get the full
            responsive srcSet from getImageProps as normal.
          */}
          <source
            media="(min-width: 640px)"
            srcSet={desktopImgProps.srcSet || src}
            sizes={desktopImgProps.sizes}
          />
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text -- required for true art-direction via <picture>/getImageProps; alt is included via the spread below, the linter just can't see through it */}
          <img
            {...mobileImgProps}
            className={`absolute inset-0 h-full w-full ${imageClassName} ${FADE_IN}`}
          />
        </picture>
      </div>
    );
  }

  return (
    <div className={`relative ${wrapperClassName ?? defaults.wrapperClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={effectiveSizes}
        unoptimized={src.endsWith('.svg')}
        className={`${imageClassName} ${FADE_IN}`}
      />
    </div>
  );
}

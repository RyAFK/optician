import type { ReactNode } from 'react';
import EditorialImage from './EditorialImage';
import type { ImageCategory } from '@/lib/images';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image?: {
    category: ImageCategory;
    src: string;
    alt: string;
  };
}

// Shared sub-page header — the homepage Hero's full-bleed, ghost-numeral
// treatment is deliberately a one-off "bold moment" (see CLAUDE.md), not a
// pattern to repeat on every page. This instead follows the centered
// eyebrow/heading/intro rhythm already used by every homepage section.
export default function PageHero({ eyebrow, title, intro, image }: PageHeroProps) {
  return (
    <section aria-labelledby="page-hero-heading" className="border-b border-sage-100 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-terracotta">{eyebrow}</p>
          <h1 id="page-hero-heading" className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-5 text-stone-600">{intro}</p>
        </div>

        {image && (
          <div className="mx-auto mt-12 max-w-3xl">
            <EditorialImage
              category={image.category}
              src={image.src}
              alt={image.alt}
              priority
              sizes="(min-width: 1024px) 60vw, 90vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}

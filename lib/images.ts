export type ImageCategory =
  | 'exterior'
  | 'interior'
  | 'examination'
  | 'styling-consultation'
  | 'eyewear-detail'
  | 'team-portrait'
  | 'customer-interaction';

interface CategoryDefaults {
  /** Tailwind aspect-ratio + rounding classes applied to the image wrapper unless overridden. */
  wrapperClassName: string;
  /** Default `sizes` for the desktop/default crop. */
  sizes: string;
  /** Base intrinsic dimensions used to generate the responsive srcset for the default crop. */
  width: number;
  height: number;
  /** Base intrinsic dimensions for the optional art-directed mobile crop. */
  mobileWidth: number;
  mobileHeight: number;
  /** What this category is for — shown in public/images/README.md, not in the UI. */
  description: string;
}

// Every photography slot on the site is assigned one of these categories so
// the same *kind* of shot always reads at the same aspect ratio wherever it
// appears: landscape for place shots, portrait for people/moment shots,
// square for close-up detail. Not every category is in use on the live site
// yet — see public/images/README.md for what's wired up today vs. reserved
// for future pages (a location/about page, a team page, etc).
export const IMAGE_CATEGORIES: Record<ImageCategory, CategoryDefaults> = {
  exterior: {
    wrapperClassName: 'aspect-[16/9] overflow-hidden rounded-3xl',
    sizes: '(min-width: 1024px) 50vw, 100vw',
    width: 1600,
    height: 900,
    mobileWidth: 800,
    mobileHeight: 1000,
    description: 'Establishing shot of the practice frontage.',
  },
  interior: {
    wrapperClassName: 'aspect-[4/3] overflow-hidden rounded-3xl',
    sizes: '(min-width: 1024px) 50vw, 100vw',
    width: 1200,
    height: 900,
    mobileWidth: 800,
    mobileHeight: 1000,
    description: 'The waiting area, testing room, or dispensing floor.',
  },
  examination: {
    wrapperClassName: 'aspect-[4/5] overflow-hidden rounded-3xl',
    sizes: '(min-width: 1024px) 46vw, 90vw',
    width: 960,
    height: 1200,
    mobileWidth: 800,
    mobileHeight: 1000,
    description: 'An eye examination in progress.',
  },
  'styling-consultation': {
    wrapperClassName: 'aspect-[4/5] overflow-hidden rounded-3xl',
    sizes: '(min-width: 1024px) 46vw, 90vw',
    width: 960,
    height: 1200,
    mobileWidth: 800,
    mobileHeight: 1000,
    description: 'A dispenser and patient choosing frames together.',
  },
  'eyewear-detail': {
    wrapperClassName: 'aspect-square overflow-hidden rounded-2xl',
    sizes: '(min-width: 1024px) 25vw, 50vw',
    width: 1000,
    height: 1000,
    mobileWidth: 800,
    mobileHeight: 800,
    description: 'A close-up of frame or lens craftsmanship.',
  },
  'team-portrait': {
    wrapperClassName: 'aspect-[3/4] overflow-hidden rounded-2xl',
    sizes: '(min-width: 1024px) 25vw, 50vw',
    width: 900,
    height: 1200,
    mobileWidth: 800,
    mobileHeight: 1000,
    description: 'A portrait of a team member.',
  },
  'customer-interaction': {
    wrapperClassName: 'aspect-[4/5] overflow-hidden rounded-3xl',
    sizes: '(min-width: 1024px) 46vw, 90vw',
    width: 960,
    height: 1200,
    mobileWidth: 800,
    mobileHeight: 1000,
    description: 'A natural, candid moment between staff and patient.',
  },
};

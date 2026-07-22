export type FrameShape = 'round' | 'rectangle' | 'cat-eye' | 'browline';

export interface FrameStyle {
  /** Descriptive shape + material, never a specific product/SKU name — see collection note below. */
  label: string;
  shape: FrameShape;
}

export interface EyewearCollection {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  /** Tailwind classes for the frame-shape tile background + icon color, kept within the existing palette. */
  accentClassName: string;
  styles: FrameStyle[];
}

// Deliberately no invented brand, product, or price data here. Naming a
// specific real-sounding product ("Skyline Aviator", $148) would be a
// factual claim about what this practice actually stocks and charges — the
// same category of thing CLAUDE.md says never to fabricate. `styles` below
// are descriptive shape/material previews, not SKUs, and every card links
// to a conversation (Ask a Question / Book) rather than a price — this is
// an appointment-led practice, not a self-checkout storefront (see the
// "not a sales assistant" positioning already established elsewhere).
export const EYEWEAR_COLLECTIONS: EyewearCollection[] = [
  {
    id: 'minimalist',
    name: 'Minimalist',
    description:
      'Clean lines and no branding on the front — frames built to disappear into your face, not announce themselves.',
    image: '/images/eyewear-detail-minimalist.svg',
    alt: 'Placeholder for a close-up of a minimalist, unbranded frame',
    accentClassName: 'bg-sage-50 text-sage-700',
    styles: [
      { label: 'Thin round metal', shape: 'round' },
      { label: 'Rimless rectangle', shape: 'rectangle' },
      { label: 'Fine browline', shape: 'browline' },
      { label: 'Slim square acetate', shape: 'rectangle' },
    ],
  },
  {
    id: 'colourful',
    name: 'Colourful',
    description:
      'Bold acetate and tortoiseshell, for anyone who treats glasses as a genuine accessory rather than a compromise.',
    image: '/images/eyewear-detail-colourful.svg',
    alt: 'Placeholder for a close-up of a bold, colourful acetate frame',
    accentClassName: 'bg-terracotta/10 text-terracotta-600',
    styles: [
      { label: 'Tortoiseshell round', shape: 'round' },
      { label: 'Amber acetate square', shape: 'rectangle' },
      { label: 'Two-tone cat-eye', shape: 'cat-eye' },
      { label: 'Terracotta rectangle', shape: 'rectangle' },
    ],
  },
  {
    id: 'handcrafted',
    name: 'Handcrafted',
    description:
      'Small workshops, hand-finished hinges and edges — the kind of detail you feel before you consciously notice it.',
    image: '/images/eyewear-detail-handcrafted.svg',
    alt: 'Placeholder for a close-up of a handcrafted frame hinge',
    accentClassName: 'bg-stone-600/10 text-stone-600',
    styles: [
      { label: 'Hand-finished acetate round', shape: 'round' },
      { label: 'Layered acetate square', shape: 'rectangle' },
      { label: 'Bevelled-edge cat-eye', shape: 'cat-eye' },
      { label: 'Hand-polished browline', shape: 'browline' },
    ],
  },
  {
    id: 'lightweight',
    name: 'Lightweight',
    description:
      'Titanium and thin acetate for all-day wear, especially if regular frames have ever left a mark on your nose.',
    image: '/images/eyewear-detail-lightweight.svg',
    alt: 'Placeholder for a close-up of a lightweight titanium frame',
    accentClassName: 'bg-sage-50 text-sage-700',
    styles: [
      { label: 'Titanium round', shape: 'round' },
      { label: 'Featherweight rectangle', shape: 'rectangle' },
      { label: 'Thin-rim cat-eye', shape: 'cat-eye' },
      { label: 'Flexible titanium browline', shape: 'browline' },
    ],
  },
];

export function getEyewearCollection(id: string): EyewearCollection | undefined {
  return EYEWEAR_COLLECTIONS.find((collection) => collection.id === id);
}

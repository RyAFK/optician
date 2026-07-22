import Link from 'next/link';
import EditorialImage from './EditorialImage';

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

// Deliberately no invented brand names here. Naming a specific real-sounding
// label would be a factual claim about who this practice actually stocks —
// the same category of thing CLAUDE.md says never to fabricate. Grouped by
// characteristic instead (as the brief itself suggests), with each card
// honestly marked as a slot waiting for a real brand partnership.
const COLLECTIONS: Collection[] = [
  {
    id: 'minimalist',
    name: 'Minimalist',
    description:
      'Clean lines and no branding on the front — frames built to disappear into your face, not announce themselves.',
    image: '/images/eyewear-detail-minimalist.svg',
    alt: 'Placeholder for a close-up of a minimalist, unbranded frame',
  },
  {
    id: 'colourful',
    name: 'Colourful',
    description:
      'Bold acetate and tortoiseshell, for anyone who treats glasses as a genuine accessory rather than a compromise.',
    image: '/images/eyewear-detail-colourful.svg',
    alt: 'Placeholder for a close-up of a bold, colourful acetate frame',
  },
  {
    id: 'handcrafted',
    name: 'Handcrafted',
    description:
      'Small workshops, hand-finished hinges and edges — the kind of detail you feel before you consciously notice it.',
    image: '/images/eyewear-detail-handcrafted.svg',
    alt: 'Placeholder for a close-up of a handcrafted frame hinge',
  },
  {
    id: 'lightweight',
    name: 'Lightweight',
    description:
      'Titanium and thin acetate for all-day wear, especially if regular frames have ever left a mark on your nose.',
    image: '/images/eyewear-detail-lightweight.svg',
    alt: 'Placeholder for a close-up of a lightweight titanium frame',
  },
];

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <div className="flex h-full w-full flex-col rounded-3xl border border-sage-100 bg-cream-50 p-6">
      <EditorialImage
        category="eyewear-detail"
        src={collection.image}
        alt={collection.alt}
        sizes="(min-width: 1024px) 22vw, 80vw"
      />

      {/*
        Brand partner slot — honestly marked as pending rather than naming a
        placeholder brand. When a real logo is added here, give its <Image>
        `imageClassName="object-contain"` instead of the photography
        default (`object-cover`): logos of any aspect ratio will then centre
        inside this same fixed square without being cropped or distorted.
      */}
      <p className="mt-5 font-sans text-xs font-medium uppercase tracking-[0.14em] text-stone-400">
        Brand partner — to be added
      </p>
      <h3 className="mt-2 font-display text-lg font-medium text-ink">{collection.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{collection.description}</p>

      <Link
        href={`/eyewear#${collection.id}`}
        className="focus-ring group mt-4 inline-flex w-fit items-center gap-1.5 font-sans text-sm font-medium text-terracotta transition-colors hover:text-terracotta-600"
      >
        View {collection.name.toLowerCase()} frames
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          &rarr;
        </span>
      </Link>
    </div>
  );
}

export default function EyewearBrands() {
  return (
    <section aria-labelledby="eyewear-brands-heading" className="border-t border-sage-100 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-terracotta">
            Frames, curated
          </p>
          <h2 id="eyewear-brands-heading" className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
            Small Labels, Chosen With Care
          </h2>
          <p className="mt-5 text-stone-600">
            We don&rsquo;t stock everything — we stock what&rsquo;s well made.
            Every collection here earns its place by how it&rsquo;s designed,
            not how fast it sells.
          </p>
        </div>

        {/* Tablet and up: static grid, no motion at all */}
        <ul className="mt-14 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {COLLECTIONS.map((collection) => (
            <li key={collection.id}>
              <CollectionCard collection={collection} />
            </li>
          ))}
        </ul>

        {/*
          Mobile only: a user-driven horizontal swipe, not an auto-scrolling
          strip — there's no autoplay here, just native scroll-snap. The
          `scroll-smooth` easing is already covered by the project's global
          prefers-reduced-motion override (app/globals.css forces
          scroll-behavior back to `auto` for every element), so it needs no
          extra handling here.
        */}
        <ul className="-mx-6 mt-14 flex snap-x snap-mandatory scroll-smooth gap-5 overflow-x-auto px-6 pb-2 sm:hidden">
          {COLLECTIONS.map((collection) => (
            <li key={collection.id} className="w-[78%] flex-none snap-center">
              <CollectionCard collection={collection} />
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <Link
            href="/eyewear"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-full border-2 border-terracotta px-7 font-sans text-sm font-semibold text-terracotta transition-colors hover:bg-terracotta hover:text-cream-50"
          >
            Explore Our Eyewear
          </Link>
        </div>
      </div>
    </section>
  );
}

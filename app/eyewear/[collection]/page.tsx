import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EYEWEAR_COLLECTIONS, getEyewearCollection } from '@/lib/eyewearCollections';
import EditorialImage from '@/components/EditorialImage';
import FrameShapeIcon from '@/components/FrameShapeIcons';
import AppointmentPrompt from '@/components/AppointmentPrompt';

interface CollectionPageProps {
  params: { collection: string };
}

export function generateStaticParams() {
  return EYEWEAR_COLLECTIONS.map((collection) => ({ collection: collection.id }));
}

export function generateMetadata({ params }: CollectionPageProps): Metadata {
  const collection = getEyewearCollection(params.collection);
  if (!collection) return {};
  return {
    title: `${collection.name} Frames — Optician`,
    description: collection.description,
  };
}

export default function EyewearCollectionPage({ params }: CollectionPageProps) {
  const collection = getEyewearCollection(params.collection);
  if (!collection) notFound();

  return (
    <main>
      <section aria-labelledby="collection-heading" className="border-b border-sage-100 bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <Link
            href="/eyewear"
            className="focus-ring group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-ink-700 transition-colors hover:text-terracotta"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">
              &larr;
            </span>
            All collections
          </Link>

          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-terracotta">
              Eyewear, curated
            </p>
            <h1 id="collection-heading" className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
              {collection.name} Frames
            </h1>
            <p className="mt-5 text-stone-600">{collection.description}</p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <EditorialImage
              category="eyewear-detail"
              src={collection.image}
              alt={collection.alt}
              priority
              sizes="(min-width: 1024px) 60vw, 90vw"
              wrapperClassName="aspect-[16/9] overflow-hidden rounded-3xl"
            />
          </div>

          {/*
            Collection switcher — same pill-row pattern as ServiceFinder's
            filter, repurposed here to jump between the four real
            collections rather than fabricated frame-shape filters.
          */}
          <nav aria-label="Browse collections" className="mt-10 flex flex-wrap justify-center gap-3">
            {EYEWEAR_COLLECTIONS.map((item) => {
              const active = item.id === collection.id;
              return (
                <Link
                  key={item.id}
                  href={`/eyewear/${item.id}`}
                  aria-current={active ? 'page' : undefined}
                  className={`focus-ring inline-flex h-10 items-center justify-center rounded-full border px-5 font-sans text-sm font-medium transition-colors ${
                    active
                      ? 'border-terracotta bg-terracotta text-cream-50'
                      : 'border-sage-200 text-ink-700 hover:border-terracotta hover:text-terracotta'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      <section aria-labelledby="styles-heading" className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
          <h2 id="styles-heading" className="sr-only">
            Styles in this collection
          </h2>

          <ul className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {collection.styles.map((style) => (
              <li key={style.label}>
                <div className="flex h-full flex-col rounded-3xl border border-sage-100 bg-cream-50 p-5">
                  <div className={`flex aspect-square items-center justify-center rounded-2xl ${collection.accentClassName}`}>
                    <FrameShapeIcon shape={style.shape} aria-hidden="true" className="h-16 w-16" />
                  </div>

                  <p className="mt-4 font-display text-base font-medium leading-snug text-ink">{style.label}</p>
                  <p className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.1em] text-stone-400">
                    Brand partner — to be added
                  </p>

                  <Link
                    href="/contact"
                    className="focus-ring group mt-3 inline-flex w-fit items-center gap-1.5 font-sans text-sm font-medium text-terracotta transition-colors hover:text-terracotta-600"
                  >
                    Ask about this style
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AppointmentPrompt
        message="Like what you see? Come try it on in person."
        secondaryLabel="Explore Our Eyewear"
        secondaryHref="/eyewear"
      />
    </main>
  );
}

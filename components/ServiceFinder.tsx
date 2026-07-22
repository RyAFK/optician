'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { CATEGORY_LABELS, SERVICES, type ServiceCategory } from '@/lib/services';

const FILTERS: { label: string; value: ServiceCategory | 'all' }[] = [
  { label: 'All services', value: 'all' },
  { label: CATEGORY_LABELS['eye-care'], value: 'eye-care' },
  { label: CATEGORY_LABELS.eyewear, value: 'eyewear' },
  { label: CATEGORY_LABELS['contact-lenses'], value: 'contact-lenses' },
];

export default function ServiceFinder() {
  const [category, setCategory] = useState<ServiceCategory | 'all'>('all');

  const filtered = useMemo(
    () => (category === 'all' ? SERVICES : SERVICES.filter((service) => service.category === category)),
    [category],
  );

  return (
    <section aria-labelledby="service-finder-heading" className="border-t border-sage-100 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-terracotta">
            Find the right service
          </p>
          <h2 id="service-finder-heading" className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
            Not sure what you need?
          </h2>
          <p className="mt-5 text-stone-600">
            Filter by what brought you in — everything below is available at
            the same practice, with the same unhurried approach.
          </p>
        </div>

        <div role="group" aria-label="Filter services by category" className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((filter) => {
            const active = category === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(filter.value)}
                className={`focus-ring inline-flex h-10 items-center justify-center rounded-full border px-5 font-sans text-sm font-medium transition-colors ${
                  active
                    ? 'border-terracotta bg-terracotta text-cream-50'
                    : 'border-sage-200 text-ink-700 hover:border-terracotta hover:text-terracotta'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Announces result-count changes to screen readers without moving focus or scroll position. */}
        <p aria-live="polite" className="sr-only">
          {filtered.length} service{filtered.length === 1 ? '' : 's'} shown
        </p>

        {filtered.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => (
              <li
                key={service.id}
                className="flex h-full flex-col justify-between rounded-3xl border border-sage-100 bg-cream-50 p-8"
              >
                <div>
                  <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-sage-700">
                    {CATEGORY_LABELS[service.category]}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-medium text-ink">{service.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{service.description}</p>
                </div>

                <div className="mt-6 flex items-center gap-5">
                  <Link
                    href="/book"
                    className="focus-ring inline-flex h-10 items-center justify-center rounded-full bg-terracotta px-5 font-sans text-sm font-semibold text-cream-50 transition-colors hover:bg-terracotta-600"
                  >
                    Book this
                  </Link>
                  <Link
                    href={service.href}
                    className="focus-ring group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-ink-700 transition-colors hover:text-terracotta"
                  >
                    Learn more
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-dashed border-sage-200 bg-cream-50 px-8 py-10 text-center">
            <p className="text-stone-600">
              We don&rsquo;t have an exact listing for that yet — tell us what
              you need and we&rsquo;ll point you the right way.
            </p>
            <Link
              href="/book"
              className="focus-ring mt-5 inline-flex h-11 items-center justify-center rounded-full bg-terracotta px-6 font-sans text-sm font-semibold text-cream-50 transition-colors hover:bg-terracotta-600"
            >
              Ask us directly
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

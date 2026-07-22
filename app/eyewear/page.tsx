import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import EyewearBrands from '@/components/EyewearBrands';
import AppointmentPrompt from '@/components/AppointmentPrompt';

export const metadata: Metadata = {
  title: 'Eyewear & Frame Styling — Optician',
  description:
    'Personal frame styling, independent eyewear collections, and professional fitting from a dispensing optician — not a sales assistant.',
};

const EYEWEAR_POINTS = [
  {
    label: 'Personal frame styling',
    detail: 'One-to-one sessions with a dispensing optician, not a sales assistant.',
  },
  {
    label: 'Independent eyewear collections',
    detail: "Small-batch frames you won't find on the high street.",
  },
  {
    label: 'Professional fitting and lens advice',
    detail: 'Precise adjustments and lens guidance for all-day comfort.',
  },
];

export default function EyewearPage() {
  return (
    <main>
      <PageHero
        eyebrow="Eyewear, styled"
        title="Frames Chosen for You, Not the Catalogue"
        intro="Personal styling, independent collections, and precise fitting — from a dispensing optician, not a sales assistant."
        image={{
          category: 'styling-consultation',
          src: '/images/eyewear-styling.svg',
          alt: 'A dispensing optician at Optician styling frames with a patient from the independent eyewear collection',
        }}
      />

      <section aria-labelledby="eyewear-points-heading" className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
          <h2 id="eyewear-points-heading" className="sr-only">
            What&rsquo;s included
          </h2>
          <ul className="space-y-8">
            {EYEWEAR_POINTS.map(({ label, detail }) => (
              <li key={label} className="flex gap-4 border-t border-sage-100 pt-8 first:border-t-0 first:pt-0">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-terracotta" />
                <p className="text-stone-600">
                  <strong className="font-medium text-ink">{label}</strong>
                  {' — '}
                  {detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EyewearBrands showCta={false} />

      <AppointmentPrompt
        message="Found a collection you like? The fitting takes it from there."
        secondaryLabel="Explore Eye Examinations"
        secondaryHref="/eye-care"
      />
    </main>
  );
}

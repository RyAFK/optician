import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AppointmentPrompt from '@/components/AppointmentPrompt';

export const metadata: Metadata = {
  title: 'Eye Examinations & Clinical Care — Optician',
  description:
    'Comprehensive eye examinations with OCT retinal imaging as standard, a full thirty minutes with the same optometrist, and support for complex prescriptions.',
};

const CLINICAL_POINTS = [
  {
    label: 'Comprehensive eye examinations',
    detail: 'A full assessment of eye health, not just a prescription check.',
  },
  {
    label: 'Advanced diagnostic technology',
    detail: 'OCT retinal scans and digital imaging, standard at every visit.',
  },
  {
    label: 'Complex prescription support',
    detail: 'High prescriptions, astigmatism and progressives, fitted with care.',
  },
];

export default function EyeCarePage() {
  return (
    <main>
      <PageHero
        eyebrow="Clinical eye care"
        title="Eye Care With Real Diagnostic Depth"
        intro="Every examination includes a full thirty minutes with the same optometrist, OCT retinal imaging as standard, and findings explained in plain language — not left as jargon on a form."
        image={{
          category: 'examination',
          src: '/images/clinical-diagnostics.svg',
          alt: 'An optometrist at Optician using OCT retinal imaging equipment during a clinical examination',
        }}
      />

      <section aria-labelledby="clinical-points-heading" className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
          <h2 id="clinical-points-heading" className="sr-only">
            What&rsquo;s included
          </h2>
          <ul className="space-y-8">
            {CLINICAL_POINTS.map(({ label, detail }) => (
              <li key={label} className="flex gap-4 border-t border-sage-100 pt-8 first:border-t-0 first:pt-0">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sage-500" />
                <p className="text-stone-600">
                  <strong className="font-medium text-ink">{label}</strong>
                  {' — '}
                  {detail}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-stone-600">
            Been told your prescription or eye health made things difficult
            elsewhere? Complex cases are exactly where the extra time in a
            thirty-minute exam tends to matter most. If something feels off
            between visits, our{' '}
            <a href="/eye-concerns" className="focus-ring rounded font-medium text-terracotta underline underline-offset-2">
              eye concerns
            </a>{' '}
            page covers same-week appointments, or if you&rsquo;re due a
            check on your lenses, see{' '}
            <a href="/contact-lenses" className="focus-ring rounded font-medium text-terracotta underline underline-offset-2">
              contact lenses
            </a>
            .
          </p>
        </div>
      </section>

      <AppointmentPrompt
        message="Ready for an exam that actually takes its time?"
        secondaryLabel="Explore Eyewear"
        secondaryHref="/eyewear"
      />
    </main>
  );
}

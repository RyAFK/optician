import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AppointmentPrompt from '@/components/AppointmentPrompt';

export const metadata: Metadata = {
  title: 'Eye Concerns & Same-Week Appointments — Optician',
  description:
    'Same-week appointments for irritation, injuries or sudden changes in vision — no referral needed.',
};

const POINTS = [
  {
    label: 'Same-week appointments',
    detail: 'Concerns like these usually get seen sooner than a routine exam slot.',
  },
  {
    label: 'No referral needed',
    detail: "Book directly — you don't need to go through a GP first.",
  },
  {
    label: 'Explained in plain language',
    detail: "Whatever we find, you'll understand it before you leave, not just be handed a form.",
  },
];

export default function EyeConcernsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Eye concerns"
        title="Something Doesn&rsquo;t Look Right?"
        intro="Same-week appointments for irritation, injuries or sudden changes in vision — no referral needed."
        image={{
          category: 'interior',
          src: '/images/interior.svg',
          alt: 'The calm interior of the testing room at Optician',
        }}
      />

      <section aria-labelledby="eye-concerns-points-heading" className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
          <h2 id="eye-concerns-points-heading" className="sr-only">
            What&rsquo;s included
          </h2>
          <ul className="space-y-8">
            {POINTS.map(({ label, detail }) => (
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
            If it turns out to be about your prescription rather than
            something urgent, that&rsquo;s exactly what a full{' '}
            <a href="/eye-care" className="focus-ring rounded font-medium text-terracotta underline underline-offset-2">
              eye examination
            </a>{' '}
            is for.
          </p>
        </div>
      </section>

      <AppointmentPrompt
        message="If something feels off, it's worth getting looked at properly."
        secondaryLabel="Ask a Question"
        secondaryHref="/contact"
      />
    </main>
  );
}

import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AppointmentPrompt from '@/components/AppointmentPrompt';

export const metadata: Metadata = {
  title: 'Contact Lenses — Optician',
  description:
    'Free trial lenses and a hands-on fitting session, whatever your prescription or lifestyle — including complex prescriptions.',
};

const POINTS = [
  {
    label: 'Free trial lenses',
    detail: "Try before you commit — there's no obligation to buy after a fitting.",
  },
  {
    label: 'Hands-on fitting session',
    detail: 'Time to practise putting lenses in and out, not just a quick handover.',
  },
  {
    label: 'Any prescription or lifestyle',
    detail: 'Including higher prescriptions and astigmatism that other places have found difficult.',
  },
];

export default function ContactLensesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact lenses"
        title="Curious About Contact Lenses?"
        intro="Free trial lenses and a hands-on fitting session, whatever your prescription or lifestyle — including complex prescriptions others have found difficult elsewhere."
        image={{
          category: 'customer-interaction',
          src: '/images/customer-interaction.svg',
          alt: 'A dispensing optician at Optician fitting a patient with trial contact lenses',
        }}
      />

      <section aria-labelledby="contact-lens-points-heading" className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 lg:px-8">
          <h2 id="contact-lens-points-heading" className="sr-only">
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
            Still deciding between contacts and glasses? Have a look at our{' '}
            <a href="/eyewear" className="focus-ring rounded font-medium text-terracotta underline underline-offset-2">
              eyewear collections
            </a>{' '}
            too — plenty of people end up keeping both.
          </p>
        </div>
      </section>

      <AppointmentPrompt
        message="Ready to try a pair for yourself?"
        secondaryLabel="Ask a Question"
        secondaryHref="/contact"
      />
    </main>
  );
}

import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import RequestForm from '@/components/RequestForm';

export const metadata: Metadata = {
  title: 'Book an Appointment — Optician',
  description:
    'Request an appointment — thirty unhurried minutes with the same optometrist, OCT retinal imaging included.',
};

export default function BookPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book an appointment"
        title="Thirty Minutes, No Rush"
        intro="Tell us a little about what you need and we'll get back to you within one working day to confirm a time — no automated booking system standing in the way."
      />

      <section aria-labelledby="request-form-heading" className="bg-cream">
        <div className="mx-auto max-w-2xl px-6 pb-20 lg:px-8">
          <h2 id="request-form-heading" className="sr-only">
            Request an appointment
          </h2>
          <RequestForm
            submitLabel="Request Appointment"
            confirmationHeading="Thanks — request received"
            confirmationMessage="We'll be in touch within one working day to confirm a time that works for you."
            showServiceField
            primaryCta
          />
        </div>
      </section>
    </main>
  );
}

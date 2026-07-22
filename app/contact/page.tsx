import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import RequestForm from '@/components/RequestForm';

export const metadata: Metadata = {
  title: 'Ask a Question — Optician',
  description: 'No pressure, no obligation — send a question and hear back directly.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Ask a question"
        title="Not Sure Yet? Just Ask"
        intro="No pressure, no obligation — send a question and we'll get back to you directly, not through a call centre."
      />

      <section aria-labelledby="contact-form-heading" className="bg-cream">
        <div className="mx-auto max-w-2xl px-6 pb-20 lg:px-8">
          <h2 id="contact-form-heading" className="sr-only">
            Send a question
          </h2>
          <RequestForm
            submitLabel="Send Question"
            confirmationHeading="Thanks — message received"
            confirmationMessage="We'll reply directly, usually within one working day."
          />
        </div>
      </section>
    </main>
  );
}

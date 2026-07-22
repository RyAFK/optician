import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function BalanceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M5 7l-3 6a3 3 0 006 0z" />
      <path d="M19 7l-3 6a3 3 0 006 0z" />
    </svg>
  );
}

function SpeechIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 5h16v10H9l-4 4v-4H4z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}

function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

const COMMITMENTS = [
  {
    Icon: BalanceIcon,
    heading: 'Advice, not a sales pitch',
    sentence:
      "We'll tell you when you don't need new glasses, new lenses, or an early repeat visit.",
    proof:
      'Every recommendation comes from a one-to-one session with a dispensing optician — not a commission-driven sales assistant.',
  },
  {
    Icon: SpeechIcon,
    heading: 'Findings explained, not just filed',
    sentence:
      'Every result is talked through in plain language, not left as shorthand on a form.',
    proof:
      "It's the same standard across every visit: findings explained in plain language, whichever side of the practice brought you in.",
  },
  {
    Icon: ClockIcon,
    heading: 'No rush to decide',
    sentence:
      "You won't be asked to choose lenses or frames on the spot, in the room, under pressure.",
    proof:
      'Every eye examination is a full thirty minutes with the same optometrist — enough time to ask questions before deciding anything.',
  },
] as const;

export default function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="border-t border-sage-100 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-sage-700">
            Honest, pressure-free eye care
          </p>
          <h2 id="trust-heading" className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
            Honest advice, no pressure
          </h2>
          <p className="mt-5 text-stone-600">
            Three things we hold ourselves to, whether you&rsquo;re booking an
            examination or choosing frames.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
          {COMMITMENTS.map(({ Icon, heading, sentence, proof }) => (
            <div key={heading}>
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-50 text-sage-700"
              >
                <Icon className="h-7 w-7" />
              </span>

              <h3 className="mt-6 font-display text-xl font-medium text-ink">{heading}</h3>
              <p className="mt-3 text-stone-600">{sentence}</p>

              <p className="mt-4 border-l-2 border-sage-200 pl-4 text-sm text-stone-600">
                <span className="font-medium uppercase tracking-wide text-sage-700">
                  In practice —{' '}
                </span>
                {proof}
              </p>
            </div>
          ))}
        </div>

        <figure className="mx-auto mt-16 max-w-2xl rounded-3xl border border-dashed border-sage-200 bg-cream-50 px-8 py-10 text-center sm:px-12">
          <svg aria-hidden="true" viewBox="0 0 32 24" className="mx-auto h-8 w-8 text-sage-300" fill="currentColor">
            <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 3.2C8.8 4.8 6.4 8 6.4 12.8h6.4V24H0zm17.6 0V14.4c0-8 4.8-13.2 12.8-14.4L32 3.2c-5.6 1.6-8 4.8-8 9.6h6.4V24H17.6z" />
          </svg>
          <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-ink/80">
            A genuine patient testimonial belongs here — we haven&rsquo;t
            invented one. Add a real quote once a patient has given consent
            to be featured.
          </blockquote>
          <figcaption className="mt-5 font-sans text-xs font-medium uppercase tracking-[0.14em] text-stone-400">
            Testimonial pending — content needed from the practice
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

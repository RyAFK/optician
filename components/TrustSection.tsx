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
      </div>
    </section>
  );
}

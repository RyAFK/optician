import Link from 'next/link';
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function EyeExamIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="2.75" />
    </svg>
  );
}

function EyewearIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6.5" cy="13" r="3.5" />
      <circle cx="17.5" cy="13" r="3.5" />
      <path d="M10 13h4" />
      <path d="M3 13c0-1.5.5-3 2-3.5" />
      <path d="M21 13c0-1.5-.5-3-2-3.5" />
    </svg>
  );
}

function ContactLensIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="7" />
      <path d="M9 8.5c-1.4 1.1-2.25 2.8-2.25 4.7" opacity={0.55} />
    </svg>
  );
}

function EyeConcernIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M1 12.5s3-5 8.5-5 8.5 5 8.5 5-3 5-8.5 5-8.5-5-8.5-5z" />
      <circle cx="9.5" cy="12.5" r="2.25" />
      <path d="M18.5 4v4M16.5 6h4" />
    </svg>
  );
}

const PATHWAYS = [
  {
    title: 'Time for an eye exam',
    benefit:
      'Thirty unhurried minutes and retinal imaging as standard, with the optometrist who already knows your eyes.',
    href: '/book',
    ariaLabel:
      'Book an eye examination — thirty unhurried minutes with retinal imaging included',
    Icon: EyeExamIcon,
  },
  {
    title: 'Looking for new frames',
    benefit:
      'Personal styling and precise fitting from dispensers who consider your face, prescription and everyday life.',
    href: '/eyewear',
    ariaLabel:
      'Find the right eyewear — personal styling and fitting from our dispensers',
    Icon: EyewearIcon,
  },
  {
    title: 'Curious about contacts',
    benefit:
      'Free trial lenses and a hands-on fitting session, whatever your prescription or lifestyle.',
    href: '/contact-lenses',
    ariaLabel:
      'Explore contact lenses — free trial lenses and a hands-on fitting session',
    Icon: ContactLensIcon,
  },
  {
    title: "Something doesn't look right",
    benefit:
      'Same-week appointments for irritation, injuries or sudden changes in vision — no referral needed.',
    href: '/eye-concerns',
    ariaLabel:
      'Get help with an eye concern — same-week appointments, no referral needed',
    Icon: EyeConcernIcon,
  },
] as const;

export default function VisitorPathways() {
  return (
    <section aria-labelledby="pathways-heading" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 id="pathways-heading" className="font-display text-3xl font-medium text-ink sm:text-4xl">
            Where would you like to start?
          </h2>
          <p className="mt-3 text-stone-600">
            Four ways in — pick whichever matches what brought you here today.
          </p>
        </div>

        <nav aria-label="Visitor pathways" className="mt-12">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PATHWAYS.map(({ title, benefit, href, ariaLabel, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-label={ariaLabel}
                  className="focus-ring group flex h-full flex-col gap-5 rounded-3xl border border-sage-100 bg-cream-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sage-300 hover:shadow-soft"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-50 text-sage-700 transition-colors duration-300 group-hover:bg-terracotta group-hover:text-cream-50"
                  >
                    <Icon className="h-7 w-7" />
                  </span>

                  <div>
                    <h3 className="font-display text-xl font-medium text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{benefit}</p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-terracotta transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Explore
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

import Link from 'next/link';
import EditorialImage from './EditorialImage';

// Swap points for real photography — see public/images/README.md.
const HERO_IMAGE_SRC = '/images/hero-practice.svg';
const HERO_IMAGE_MOBILE_SRC = '/images/hero-practice-mobile.svg';
const HERO_IMAGE_ALT =
  'An optometrist at Optician reviewing a retinal scan with a patient during an eye examination';

const TRUST_POINTS = [
  'GOC-registered optometrists',
  'OCT retinal imaging included',
  'The same optometrist, every visit',
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="grain relative overflow-hidden bg-cream">
      {/* Full-width positioning context so the photo panel can bleed to the true viewport edge on large screens */}
      <div className="relative lg:min-h-[760px]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
          <div className="relative z-0 lg:max-w-[min(36rem,50vw-3rem)]">
            {/* Decorative ghost numeral — purely atmospheric, echoes the "thirty minutes" claim */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-16 -z-10 select-none font-display text-[13rem] italic leading-none text-sage-700/[0.07] sm:-top-20 sm:text-[17rem] lg:-left-8 lg:-top-24 lg:text-[19rem]"
            >
              30
            </span>

            <p
              className="reveal font-sans text-sm font-medium uppercase tracking-[0.14em] text-terracotta"
              style={{ animationDelay: '0ms' }}
            >
              Independent eye care, not a chain
            </p>

            <h1
              id="hero-heading"
              className="reveal mt-5 font-display text-hero-xl font-medium text-ink"
              style={{ animationDelay: '90ms' }}
            >
              Thirty minutes.{' '}
              <span className="italic text-sage-700">One optometrist.</span> No
              rush.
            </h1>

            <p
              className="reveal mt-7 max-w-prose text-lg leading-relaxed text-stone-600"
              style={{ animationDelay: '220ms' }}
            >
              Every examination includes retinal imaging and a full thirty
              minutes with the same optometrist — not a queue. Independent,
              unhurried, and focused entirely on your eyes.
            </p>

            <div
              className="reveal mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: '340ms' }}
            >
              <Link
                href="/book"
                data-primary-cta
                className="focus-ring inline-flex h-14 items-center justify-center rounded-full bg-terracotta px-8 font-sans text-base font-semibold text-cream-50 shadow-soft transition-colors hover:bg-terracotta-600 active:bg-terracotta-700"
              >
                Book an Appointment
              </Link>

              <Link
                href="/services"
                className="focus-ring group inline-flex h-14 items-center justify-center gap-2 rounded-full px-6 font-sans text-base font-medium text-ink-700 transition-colors hover:text-terracotta"
              >
                Explore Our Services
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Link>
            </div>

            <ul
              className="reveal mt-10 flex flex-col gap-3 border-t border-sage-100 pt-8 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3"
              style={{ animationDelay: '460ms' }}
            >
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-stone-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-4 w-4 flex-none text-sage-500"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.414L8.5 12.086l6.79-6.796a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Photography — full-bleed to the viewport's right edge on large screens */}
        <div className="reveal relative mt-12 px-6 sm:px-0 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:w-[46vw] lg:px-0" style={{ animationDelay: '260ms' }}>
          <EditorialImage
            category="examination"
            src={HERO_IMAGE_SRC}
            mobileSrc={HERO_IMAGE_MOBILE_SRC}
            alt={HERO_IMAGE_ALT}
            priority
            sizes="(min-width: 1024px) 46vw, 90vw"
            wrapperClassName="shadow-soft aspect-[4/5] w-full overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-full lg:rounded-r-none lg:rounded-l-[2.5rem]"
          />

          <div
            className="reveal-rotate absolute bottom-8 left-6 w-fit max-w-xs rounded-2xl border border-dashed border-cream-50/30 bg-ink px-6 py-4 text-left shadow-soft lg:-left-10"
            style={{ animationDelay: '620ms' }}
          >
            <p className="font-display text-2xl italic text-cream-50">30 min</p>
            <p className="mt-0.5 font-sans text-xs text-sage-100">
              vs. roughly 10 on the high street
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

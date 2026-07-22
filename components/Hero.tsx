import Image from 'next/image';
import Link from 'next/link';

// Swap point for real photography — see public/images/README.md.
const HERO_IMAGE_SRC = '/images/hero-practice.svg';
const HERO_IMAGE_ALT =
  'An optometrist at Optician reviewing a retinal scan with a patient during an eye examination';

const TRUST_POINTS = [
  'GOC-registered optometrists',
  'OCT retinal imaging included',
  'The same optometrist, every visit',
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-28">
        {/* Copy */}
        <div className="order-1 lg:order-1 lg:col-span-6">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-terracotta">
            Independent eye care, not a chain
          </p>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-hero-lg font-medium text-ink"
          >
            Thirty minutes.{' '}
            <span className="italic text-sage-700">One optometrist.</span> No
            rush.
          </h1>

          <p className="mt-6 max-w-prose text-lg leading-relaxed text-stone-600">
            Every examination includes retinal imaging and a full thirty
            minutes with the same optometrist — not a queue. Independent,
            unhurried, and focused entirely on your eyes.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/book"
              className="focus-ring inline-flex h-14 items-center justify-center rounded-full bg-terracotta px-8 font-sans text-base font-semibold text-cream-50 shadow-soft transition-colors hover:bg-terracotta-600 active:bg-terracotta-700"
            >
              Book an Eye Examination
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

          <ul className="mt-10 flex flex-col gap-3 border-t border-sage-100 pt-8 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
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

        {/* Photography */}
        <div className="order-2 lg:order-2 lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-soft lg:max-w-none">
            <Image
              src={HERO_IMAGE_SRC}
              alt={HERO_IMAGE_ALT}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
              // Remove once HERO_IMAGE_SRC points at a raster photo —
              // only the placeholder SVG needs to skip optimization.
              unoptimized={HERO_IMAGE_SRC.endsWith('.svg')}
            />
          </div>

          <div className="relative mx-auto -mt-16 w-fit max-w-xs rounded-2xl bg-ink px-6 py-4 shadow-soft sm:-mt-20 lg:-ml-4 lg:mr-auto">
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

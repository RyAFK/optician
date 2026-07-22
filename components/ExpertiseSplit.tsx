import Image from 'next/image';
import Link from 'next/link';

// Swap points for real photography — see public/images/README.md.
const CLINICAL_IMAGE_SRC = '/images/clinical-diagnostics.svg';
const CLINICAL_IMAGE_ALT =
  'An optometrist at Optician using OCT retinal imaging equipment during a clinical examination';

const EYEWEAR_IMAGE_SRC = '/images/eyewear-styling.svg';
const EYEWEAR_IMAGE_ALT =
  'A dispensing optician at Optician styling frames with a patient from the independent eyewear collection';

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

const EYEWEAR_POINTS = [
  {
    label: 'Personal frame styling',
    detail: 'One-to-one sessions with a dispensing optician, not a sales assistant.',
  },
  {
    label: 'Independent eyewear collections',
    detail: "Small-batch frames you won't find on the high street.",
  },
  {
    label: 'Professional fitting and lens advice',
    detail: 'Precise adjustments and lens guidance for all-day comfort.',
  },
];

export default function ExpertiseSplit() {
  return (
    <section aria-labelledby="expertise-heading" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-terracotta">
            Two things, one practice
          </p>
          <h2
            id="expertise-heading"
            className="mt-4 font-display text-3xl italic leading-snug text-ink sm:text-4xl"
          >
            You shouldn&rsquo;t have to choose between excellent vision care and
            personal style — so here, you don&rsquo;t.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-sage-200">
          {/* Clinical */}
          <div className="lg:pr-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={CLINICAL_IMAGE_SRC}
                alt={CLINICAL_IMAGE_ALT}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                unoptimized={CLINICAL_IMAGE_SRC.endsWith('.svg')}
              />
            </div>

            <p className="mt-8 font-sans text-sm font-medium uppercase tracking-[0.14em] text-sage-700">
              Clinical expertise
            </p>
            <h3 className="mt-3 font-display text-2xl font-medium text-ink">
              Eye care with real diagnostic depth
            </h3>

            <ul className="mt-6 space-y-4">
              {CLINICAL_POINTS.map(({ label, detail }) => (
                <li key={label} className="flex gap-3 text-stone-600">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sage-500" />
                  <span>
                    <strong className="font-medium text-ink">{label}</strong>
                    {' — '}
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/eye-care"
              className="focus-ring mt-8 inline-flex h-12 items-center justify-center rounded-full border-2 border-sage-500 px-7 font-sans text-sm font-semibold text-sage-700 transition-colors hover:bg-sage-500 hover:text-cream-50"
            >
              View Clinical Services
            </Link>
          </div>

          {/* Eyewear */}
          <div className="lg:pl-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={EYEWEAR_IMAGE_SRC}
                alt={EYEWEAR_IMAGE_ALT}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                unoptimized={EYEWEAR_IMAGE_SRC.endsWith('.svg')}
              />
            </div>

            <p className="mt-8 font-sans text-sm font-medium uppercase tracking-[0.14em] text-terracotta">
              Eyewear, styled
            </p>
            <h3 className="mt-3 font-display text-2xl font-medium text-ink">
              Frames chosen for you, not the catalogue
            </h3>

            <ul className="mt-6 space-y-4">
              {EYEWEAR_POINTS.map(({ label, detail }) => (
                <li key={label} className="flex gap-3 text-stone-600">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-terracotta" />
                  <span>
                    <strong className="font-medium text-ink">{label}</strong>
                    {' — '}
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/eyewear"
              className="focus-ring mt-8 inline-flex h-12 items-center justify-center rounded-full border-2 border-terracotta px-7 font-sans text-sm font-semibold text-terracotta transition-colors hover:bg-terracotta hover:text-cream-50"
            >
              Explore Eyewear
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

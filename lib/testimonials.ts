export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  service: string;
  branch: string;
  /** Cites a concrete result, not just a general impression — used to prioritise featured placement. */
  mentionsOutcome: boolean;
}

// SAMPLE DATA ONLY. Every entry below is illustrative copy, not a real
// customer quote — replace all of it with real, consented testimonials
// before launch. Keep `mentionsOutcome` honest when you do: it's what
// pushes a testimonial toward the featured slot in components/Testimonials.tsx.
export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      "I'd been told my astigmatism made contact lenses impossible elsewhere. Got fitted with trial lenses here and they just worked.",
    name: 'J.M.',
    service: 'Contact lens fitting',
    branch: 'Optician',
    mentionsOutcome: true,
  },
  {
    id: 't2',
    quote:
      "The thirty minutes actually happened — no clock-watching, no upsell at the end. First varifocals that didn't leave me dizzy on stairs.",
    name: 'Priya',
    service: 'Varifocal eye examination',
    branch: 'Optician',
    mentionsOutcome: true,
  },
  {
    id: 't3',
    quote:
      "Explained exactly what the retinal scan showed and why it mattered, in plain terms. First time I've understood my own results.",
    name: 'R.K.',
    service: 'OCT retinal imaging',
    branch: 'Optician',
    mentionsOutcome: true,
  },
  {
    id: 't4',
    quote:
      'The dispenser talked me out of the frames I walked in wanting, into ones that actually suited my face. Still get compliments.',
    name: 'Tom',
    service: 'Frame styling',
    branch: 'Optician',
    mentionsOutcome: true,
  },
  {
    id: 't5',
    quote:
      'Straightforward and unhurried, with no pressure to add anything on. Exactly what an eye test should be.',
    name: 'Alina',
    service: 'Eye examination',
    branch: 'Optician',
    mentionsOutcome: false,
  },
];

/**
 * Prioritises testimonials that cite a concrete outcome, then optionally
 * scopes to one branch. `branchId` is unused today (single-practice site)
 * but kept so this selection logic can serve branch pages later without
 * a rewrite.
 */
export function selectTestimonials(
  all: Testimonial[] = SAMPLE_TESTIMONIALS,
  branchId?: string,
): Testimonial[] {
  const scoped = branchId ? all.filter((t) => t.branch === branchId) : all;
  return [...scoped].sort((a, b) => Number(b.mentionsOutcome) - Number(a.mentionsOutcome));
}

export type ServiceCategory = 'eye-care' | 'eyewear' | 'contact-lenses';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  href: string;
}

export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  'eye-care': 'Eye care',
  eyewear: 'Eyewear',
  'contact-lenses': 'Contact lenses',
};

// Single source of truth for what this practice offers. Every entry reuses
// a claim already established elsewhere on the site (Hero, ExpertiseSplit,
// VisitorPathways) rather than introducing new, unverified specifics.
export const SERVICES: Service[] = [
  {
    id: 'eye-exam',
    name: 'Comprehensive eye examination',
    category: 'eye-care',
    description: 'A full thirty minutes with the same optometrist, plus OCT retinal imaging as standard.',
    href: '/eye-care',
  },
  {
    id: 'complex-prescriptions',
    name: 'Complex prescription support',
    category: 'eye-care',
    description: 'High prescriptions, astigmatism and progressives, fitted with care.',
    href: '/eye-care',
  },
  {
    id: 'urgent-concerns',
    name: 'Same-week eye concerns',
    category: 'eye-care',
    description: 'Irritation, injuries or sudden changes in vision — no referral needed.',
    href: '/eye-concerns',
  },
  {
    id: 'frame-styling',
    name: 'Personal frame styling',
    category: 'eyewear',
    description: 'One-to-one styling sessions with a dispensing optician, not a sales assistant.',
    href: '/eyewear',
  },
  {
    id: 'independent-collections',
    name: 'Independent eyewear collections',
    category: 'eyewear',
    description: "Small-batch frames you won't find on the high street.",
    href: '/eyewear',
  },
  {
    id: 'lens-fitting',
    name: 'Professional fitting & lens advice',
    category: 'eyewear',
    description: 'Precise adjustments and lens guidance for all-day comfort.',
    href: '/eyewear',
  },
  {
    id: 'contact-lens-fitting',
    name: 'Contact lens fitting',
    category: 'contact-lenses',
    description: 'Free trial lenses and a hands-on fitting session, whatever your prescription or lifestyle.',
    href: '/contact-lenses',
  },
];

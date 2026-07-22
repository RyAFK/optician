import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServiceFinder from '@/components/ServiceFinder';

export const metadata: Metadata = {
  title: 'Our Services — Optician',
  description:
    'Eye examinations, eyewear styling, and contact lens fitting, all from one independent practice — filter by what you need.',
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Every service, one practice"
        title="Everything We Offer, in One Place"
        intro="Independent eye care and eyewear, under one roof — filter below by whatever brought you here."
        image={{
          category: 'exterior',
          src: '/images/exterior.svg',
          alt: 'The frontage of the Optician practice',
        }}
      />

      <ServiceFinder />
    </main>
  );
}

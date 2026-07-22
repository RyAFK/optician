import Hero from '@/components/Hero';
import VisitorPathways from '@/components/VisitorPathways';
import ExpertiseSplit from '@/components/ExpertiseSplit';
import ServiceFinder from '@/components/ServiceFinder';
import TrustSection from '@/components/TrustSection';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <VisitorPathways />
      <ExpertiseSplit />
      <ServiceFinder />
      <TrustSection />
      <Testimonials />
    </main>
  );
}

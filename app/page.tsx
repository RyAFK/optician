import Hero from '@/components/Hero';
import VisitorPathways from '@/components/VisitorPathways';
import ExpertiseSplit from '@/components/ExpertiseSplit';
import ServiceFinder from '@/components/ServiceFinder';
import EyewearBrands from '@/components/EyewearBrands';
import TrustSection from '@/components/TrustSection';
import Testimonials from '@/components/Testimonials';
import AppointmentPrompt from '@/components/AppointmentPrompt';

export default function Home() {
  return (
    <main>
      <Hero />
      <VisitorPathways />
      <AppointmentPrompt
        message="Whichever brought you here, the next step is the same."
        secondaryLabel="Ask a Question"
        secondaryHref="/contact"
      />
      <ExpertiseSplit />
      <AppointmentPrompt
        message="Care and style, in one thirty-minute visit."
        secondaryLabel="Explore Eye Examinations"
        secondaryHref="/eye-care"
      />
      <ServiceFinder />
      <EyewearBrands />
      <TrustSection />
      <Testimonials />
    </main>
  );
}

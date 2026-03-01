import { HeroSection } from "@/components/landing/hero-section";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { ServicesSection } from "@/components/landing/services-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CTASection } from "@/components/landing/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <HowItWorks />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

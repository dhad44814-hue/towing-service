import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  useEffect(() => {
    document.title = "Birmingham Towing | 24/7 Emergency Tow Truck Service";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Need a tow truck in Birmingham? 24/7 emergency towing, roadside assistance, jump starts & more. Fast 30-min response. Call now for affordable rates.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Need a tow truck in Birmingham? 24/7 emergency towing, roadside assistance, jump starts & more. Fast 30-min response. Call now for affordable rates.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <ServiceArea />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

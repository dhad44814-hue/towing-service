import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import FAQSchema from "@/components/FAQSchema";
import StickyCTA from "@/components/StickyCTA";

export default function HomePage() {

  return (
    <main>
      <Seo
        title="Birmingham Towing | 24/7 Emergency Tow Truck Service"
        description="Need a tow truck in Birmingham? 24/7 emergency towing, roadside assistance, jump starts & more. Fast 30-min response. Call now for affordable rates."
        canonical="https://birminghamtowing.co.uk/"
        url="https://birminghamtowing.co.uk/"
      />
      <FAQSchema
        items={[
          {
            question: "What towing services do you offer in Birmingham?",
            answer: "We offer 24/7 emergency towing, roadside assistance, vehicle recovery, jump starts, fuel delivery, lockout services, and tyre changes across Birmingham and surrounding areas.",
          },
          {
            question: "How fast can you respond to my breakdown?",
            answer: "We aim to arrive within 30 minutes for most locations in Birmingham. Our multiple tow trucks and strategic positioning ensure rapid response times, even during peak hours.",
          },
          {
            question: "Do you charge extra for night or weekend calls?",
            answer: "No, we charge the same rates 24/7. There are no hidden fees or surcharges for evening, night, or weekend callouts. We're always here when you need us.",
          },
          {
            question: "Can you help if I'm stranded outside Birmingham?",
            answer: "Yes, we provide towing services throughout the wider West Midlands region, including surrounding cities. Contact us for rates on long-distance recovery.",
          },
          {
            question: "Do you work with insurance companies?",
            answer: "Absolutely. We're approved by all major UK insurers and can handle claims directly. Just provide your policy details when you call.",
          },
        ]}
      />
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <ServiceArea />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}

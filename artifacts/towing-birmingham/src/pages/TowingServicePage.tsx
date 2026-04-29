import { useEffect } from "react";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";import HeroSection from "@/components/HeroSection";import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";

const PHONE = "+14386195732";
const WHATSAPP = "447210000000";

export default function TowingServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Seo
        title="Towing Service Santa Clarita CA | Professional Tow Truck | 24/7"
        description="Looking for a reliable towing service in Santa Clarita CA? We offer professional towing for all vehicles, 24/7. Fast response, affordable rates. Call now!"
        canonical="https://santaclaritacotowing.com/towing-service-santa-clarita-ca"
        url="https://santaclaritacotowing.com/towing-service-santa-clarita-ca"
      />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://santaclaritacotowing.com/" },
          { name: "Services", url: "https://santaclaritacotowing.com/services" },
          { name: "Towing Service", url: "https://santaclaritacotowing.com/towing-service-santa-clarita-ca" },
        ]}
      />
      <FAQSchema
        items={[
          {
            question: "How quickly can you arrive for towing?",
            answer: "We aim for a 30-minute response time across Santa Clarita CA. For emergency situations, we prioritise dispatch and use multiple tow trucks to ensure fast arrival. Call us immediately for the fastest service.",
          },
          {
            question: "Do you work with insurance companies?",
            answer: "Yes, we are approved by all major insurance providers. We can handle claim processing directly, so you don't need to worry about paperwork. Simply provide your insurance details when you call.",
          },
          {
            question: "What vehicles can you tow?",
            answer: "We can tow all types of vehicles including cars, vans, SUVs, motorcycles, and light commercial vehicles. We have flatbed and wheel-lift tow trucks suitable for different situations.",
          },
          {
            question: "What is your towing service cost?",
            answer: "Our towing service starts from £75 for standard local towing. Long-distance towing and special recovery services may incur additional charges. Call for a free quote based on your specific situation.",
          },
          {
            question: "Are you available 24/7?",
            answer: "Yes, we operate 24 hours a day, 7 days a week, including holidays. There are no extra charges for night or weekend callouts.",
          },
        ]}
      />
      <Navbar />

      <HeroSection
        title="Towing Service Santa Clarita CA"
        subtitle="Professional Tow Truck Service • All Vehicles Welcome"
        description="Professional tow truck service in Santa Clarita CA. We handle all vehicles — cars, vans, motorcycles, and commercial vehicles. Tow Truck Santa Clarita CA locals have trusted for over a decade."
        badgeText="🚛 Professional Towing Service"
        primaryButtonText="CALL NOW – 24/7"
        secondaryButtonText="WhatsApp"
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Your Trusted Towing Service in Birmingham
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                When your vehicle breaks down in Birmingham, you need a reliable <strong>towing service Birmingham</strong> residents can depend on — no matter the time of day or night. 
                Our professional tow trucks are stationed across Birmingham, ready to reach you fast.
              </p>
              <p>
                As a local <strong>tow truck Birmingham</strong> company, we understand the roads, the shortcuts, and the urgency. 
                Our fleet of modern flatbed and wheel-lift tow trucks can handle everything from small hatchbacks to large vans.
              </p>
              <p>
                We work with all insurance companies and can tow your vehicle to any garage in Birmingham or the wider West Midlands region.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-6">Our Towing Service Includes</h3>
            <ul className="space-y-3">
              {[
                "Local and long-distance vehicle towing",
                "Flatbed towing for low-clearance vehicles",
                "Accident and collision recovery",
                "Broken down vehicle recovery",
                "Car, van, motorcycle, and commercial towing",
                "Insurance-approved towing service",
                "24/7 availability — no extra charge",
                "All of Birmingham and West Midlands covered"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-12 px-4 bg-yellow-400">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-black">Towing Service Birmingham</h2>
            <p className="text-black/70">Starting from <strong>£75</strong> — No hidden fees. Get a free quote now.</p>
          </div>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-3 bg-black text-yellow-400 font-black text-xl px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors whitespace-nowrap pulse-btn"
          >
            <Phone className="w-6 h-6" />
            {PHONE}
          </a>
        </div>
      </section>

      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

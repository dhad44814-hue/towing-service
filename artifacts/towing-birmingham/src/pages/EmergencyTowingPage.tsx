import { useEffect } from "react";
import { Phone, MessageCircle, CheckCircle, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";

const PHONE = "+14386195732";
const WHATSAPP = "447210000000";

export default function EmergencyTowingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Seo
        title="Emergency Towing Santa Clarita CA | 24/7 Emergency Tow Truck | Fast Response"
        description="Emergency towing in Santa Clarita CA? We'll be there in 30 minutes. 24/7 emergency tow truck service. Call now — we never close!"
        canonical="https://santaclaritacotowing.com/emergency-towing-santa-clarita-ca"
        url="https://santaclaritacotowing.com/emergency-towing-santa-clarita-ca"
      />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://santaclaritacotowing.com/" },
          { name: "Services", url: "https://santaclaritacotowing.com/services" },
          { name: "Emergency Towing", url: "https://santaclaritacotowing.com/emergency-towing-santa-clarita-ca" },
        ]}
      />
      <FAQSchema
        items={[
          {
            question: "What should I do if my car breaks down on the motorway?",
            answer: "Move to a safe location away from traffic if possible. Turn on your hazard lights and stay in your vehicle with the seatbelts fastened. Call us immediately at +14386195732. We'll dispatch the nearest tow truck and provide guidance.",
          },
          {
            question: "Can you tow my car after an accident?",
            answer: "Yes, we specialise in accident recovery and damaged vehicle towing. We handle the situation carefully to prevent further damage and work directly with insurance companies for claims processing.",
          },
          {
            question: "What if my car won't start and I need immediate help?",
            answer: "We can help with jump starts if the battery is low. However, if it's a mechanical issue, we'll tow your vehicle to a trusted garage. Call us now and describe the symptoms.",
          },
          {
            question: "How much does emergency towing cost?",
            answer: "Emergency towing starts from £75 for local recovery. Accident recovery or long-distance towing may cost more. We'll provide a quote before towing your vehicle.",
          },
        ]}
      />
      <Navbar />

      <HeroSection
        title="Emergency Towing Santa Clarita CA"
        subtitle="Fast Response • 24/7 Emergency Tow Truck Service"
        description="Broken down? Accident? Stranded on the I-5 or CA-14? Our emergency towing Santa Clarita CA service reaches you in under 30 minutes — any time, any day."
        badgeText="🚨 Emergency? Call Now — We're Available 24/7"
        primaryButtonText="CALL NOW – 24/7"
        secondaryButtonText="Emergency WhatsApp"
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80"
      />

      <div className="text-center -mt-8 relative z-10">
        <p className="text-[#333333] text-sm">30-minute average response time across Birmingham</p>
      </div>

      {/* Steps */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-10">What Happens When You Call?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "You Call Us", desc: "Call our emergency line. We pick up 24/7, 365 days a year — instantly." },
              { step: "2", title: "We Dispatch Fast", desc: "We dispatch the nearest tow truck immediately. Our dispatcher tracks the driver to you." },
              { step: "3", title: "We Arrive in 30 Min", desc: "Our driver arrives, secures your vehicle, and tows it to your chosen garage or safe location." }
            ].map((s) => (
              <div key={s.step} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-yellow-400 text-black font-black text-xl rounded-full flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              24/7 Emergency Towing in Birmingham
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Emergencies don't follow office hours. That's why our <strong>emergency towing Birmingham</strong> service 
                is available around the clock — Monday to Sunday, including Christmas and Bank Holidays.
              </p>
              <p>
                Whether you've had a collision on the M6, broken down on the Aston Expressway, or your car won't start 
                in a Birmingham car park, one call to us gets a professional tow truck on the way immediately.
              </p>
              <p>
                We operate multiple emergency tow trucks positioned across Birmingham so we can respond to your 
                <strong> emergency towing</strong> call in the shortest possible time.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-6">Emergency Towing Situations We Handle</h3>
            <ul className="space-y-3">
              {[
                "Motorway and A-road breakdowns",
                "Accident and collision recovery",
                "Engine failure and mechanical breakdown",
                "Flooding/water damage recovery",
                "Fire damage recovery (safe distance)",
                "Off-road and ditch recovery",
                "Motorcycle emergency towing",
                "Commercial vehicle emergency recovery"
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

      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

import { useEffect } from "react";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";

const PHONE = "0121 000 0000";
const WHATSAPP = "447210000000";

export default function TowingServicePage() {
  useEffect(() => {
    document.title = "Towing Service Birmingham | Professional Tow Truck | 24/7";
    const desc = "Looking for a reliable towing service in Birmingham? We offer professional towing for all vehicles, 24/7. Fast response, affordable rates. Call now!";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            🚛 Professional Towing Service
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Towing Service <span className="text-yellow-400">Birmingham</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Professional tow truck service in Birmingham. We handle all vehicles — cars, vans, motorcycles, and commercial vehicles. 
            Tow Truck Birmingham locals have trusted for over a decade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-3 bg-yellow-400 text-black font-black text-xl px-8 py-5 rounded-xl hover:bg-yellow-300 transition-all pulse-btn"
            >
              <Phone className="w-6 h-6" />
              {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold text-lg px-8 py-5 rounded-xl hover:bg-green-400 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

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

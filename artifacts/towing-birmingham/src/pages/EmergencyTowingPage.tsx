import { useEffect } from "react";
import { Phone, MessageCircle, CheckCircle, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";

const PHONE = "0121 000 0000";
const WHATSAPP = "447210000000";

export default function EmergencyTowingPage() {
  useEffect(() => {
    document.title = "Emergency Towing Birmingham | 24/7 Emergency Tow Truck | Fast Response";
    const desc = "Emergency towing in Birmingham? We'll be there in 30 minutes. 24/7 emergency tow truck service. Call now — we never close!";
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
      <section
        className="text-white py-20 px-4 relative"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1c0a00 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white font-bold text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-wider animate-pulse">
            <AlertTriangle className="w-4 h-4" />
            Emergency? Call Now — We're Available 24/7
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Emergency Towing <span className="text-yellow-400">Birmingham</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Broken down? Accident? Stranded on the M6 or A38?
            Our <strong className="text-white">emergency towing Birmingham</strong> service reaches you in under 30 minutes — any time, any day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-3 bg-yellow-400 text-black font-black text-2xl px-8 py-6 rounded-xl hover:bg-yellow-300 transition-all pulse-btn"
            >
              <Phone className="w-7 h-7" />
              {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=EMERGENCY%3A%20I%20need%20a%20tow%20truck%20in%20Birmingham%20now!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white font-bold text-xl px-8 py-6 rounded-xl hover:bg-green-400 transition-all"
            >
              <MessageCircle className="w-7 h-7" />
              Emergency WhatsApp
            </a>
          </div>
          <p className="text-gray-400 mt-6 text-sm">30-minute average response time across Birmingham</p>
        </div>
      </section>

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

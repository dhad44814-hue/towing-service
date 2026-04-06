import { useEffect } from "react";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";

const PHONE = "0121 000 0000";
const WHATSAPP = "447210000000";

export default function RoadsideAssistancePage() {
  useEffect(() => {
    document.title = "Roadside Assistance Birmingham | Jump Start, Tire Change, Lockout | 24/7";
    const desc = "Need roadside assistance in Birmingham? Jump starts, tyre changes, lockouts, fuel delivery and more. 24/7 mobile mechanics across Birmingham. Call now!";
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

  const services = [
    {
      emoji: "⚡",
      title: "Jump Start",
      desc: "Dead battery is the #1 cause of breakdowns. We carry professional jump packs and will have your engine running in minutes.",
      price: "From £35"
    },
    {
      emoji: "🔧",
      title: "Tyre Change",
      desc: "Got a flat? We'll swap your wheel for your spare quickly and safely. No spare? We can tow you to the nearest tyre centre.",
      price: "From £30"
    },
    {
      emoji: "🔑",
      title: "Car Lockout",
      desc: "Locked out of your car? Our specialists use professional tools to get you back in without damaging your vehicle.",
      price: "From £40"
    },
    {
      emoji: "⛽",
      title: "Fuel Delivery",
      desc: "Run out of petrol or diesel? We'll bring the correct fuel to your location. Plus we can drain misfuelled tanks.",
      price: "From £30 + fuel"
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            🛠️ Roadside Assistance Available Now
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Roadside Assistance <span className="text-yellow-400">Birmingham</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Stuck on the road? Our <strong className="text-white">roadside assistance Birmingham</strong> team 
            will come to you and fix the problem on-site — no tow needed in most cases.
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
              href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20roadside%20assistance%20in%20Birmingham`}
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

      {/* Services grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">
              Roadside Assistance Services in Birmingham
            </h2>
            <p className="text-gray-500 mt-3">
              We try to fix it at the roadside first — saving you the cost of a tow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 hover:border-yellow-400 rounded-2xl p-6 transition-all">
                <div className="text-4xl mb-3">{svc.emoji}</div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-black text-gray-900 text-xl">{svc.title}</h3>
                  <span className="bg-yellow-400 text-black font-bold text-sm px-3 py-1 rounded-full whitespace-nowrap ml-3">{svc.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 bg-black text-yellow-400 font-bold text-sm px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call for {svc.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why use us */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6">
              Why Use Our Roadside Assistance in Birmingham?
            </h2>
            <ul className="space-y-3">
              {[
                "Arrive in under 30 minutes across Birmingham",
                "Try to fix at roadside first — saves you money",
                "One call — no membership required",
                "Cheaper than most breakdown clubs",
                "Licensed, insured, and DBS-checked technicians",
                "All vehicles — cars, vans, motorcycles",
                "Available 24/7 — no extra charge at night"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-yellow-400 rounded-2xl p-8 text-black">
            <h3 className="font-black text-2xl mb-4">Need Help Right Now?</h3>
            <p className="text-black/70 mb-6">
              Don't sit on the side of the road. One call and we're on our way to you anywhere in Birmingham.
            </p>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-3 bg-black text-yellow-400 font-black text-xl px-6 py-4 rounded-xl hover:bg-gray-900 transition-colors pulse-btn"
            >
              <Phone className="w-6 h-6" />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

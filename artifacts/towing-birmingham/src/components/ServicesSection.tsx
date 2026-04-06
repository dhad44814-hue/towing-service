import { Phone } from "lucide-react";

const PHONE = "0121 000 0000";

const services = [
  {
    emoji: "🚛",
    title: "Emergency Towing",
    desc: "Quick response towing for cars, vans, and vehicles across Birmingham. Available 24/7 — we reach you in under 30 minutes, no call-out fee.",
    keywords: "Emergency towing Birmingham"
  },
  {
    emoji: "🛠️",
    title: "Roadside Assistance",
    desc: "Battery jump start, tyre change, and fuel delivery anytime. We come to you first and try to fix the problem on the spot before towing.",
    keywords: "Roadside assistance Birmingham"
  },
  {
    emoji: "🔄",
    title: "Car Recovery",
    desc: "Safe and professional recovery for broken-down vehicles anywhere in Birmingham and the West Midlands. All makes and models covered.",
    keywords: "Car recovery Birmingham"
  },
  {
    emoji: "🚗",
    title: "Flatbed Towing",
    desc: "Secure flatbed transport for luxury, low-clearance, and damaged vehicles. Your car is safely loaded and delivered without further damage.",
    keywords: "Flatbed towing Birmingham"
  },
  {
    emoji: "⚡",
    title: "Jump Start",
    desc: "Dead battery? Our technicians provide fast jump start service across Birmingham. Back on the road in minutes.",
    keywords: "Jump start Birmingham"
  },
  {
    emoji: "🔑",
    title: "Car Lockout",
    desc: "Locked your keys inside? We use professional tools to get you back in without any damage to your vehicle.",
    keywords: "Car lockout Birmingham"
  },
  {
    emoji: "⛽",
    title: "Fuel Delivery",
    desc: "Run out of petrol or diesel? We'll bring the right fuel directly to your location anywhere in Birmingham.",
    keywords: "Fuel delivery Birmingham"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Full Towing &amp; Roadside Services in Birmingham
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            From emergency towing to fuel delivery — one call gets you sorted. We cover all of Birmingham and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="border border-gray-100 hover:border-yellow-400 bg-white hover:bg-yellow-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-4xl mb-4">{svc.emoji}</div>
              <h3 className="text-gray-900 font-bold text-xl mb-3 group-hover:text-yellow-600 transition-colors">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
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
  );
}

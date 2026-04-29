import { Phone } from "lucide-react";

const PHONE = "+14386195732";

const services = [
  {
    emoji: "🚛",
    title: "Emergency Towing",
    desc: "24/7 rapid response towing for cars, vans, and trucks across Birmingham. No hidden fees and professional handling."
  },
  {
    emoji: "🛠️",
    title: "Roadside Assistance",
    desc: "Battery jump starts, tyre changes, and fuel delivery to get you moving again without waiting hours."
  },
  {
    emoji: "🔄",
    title: "Vehicle Recovery",
    desc: "Safe recovery for breakdowns, accidents, and off-road incidents. We tow all makes and models securely."
  },
  {
    emoji: "🚗",
    title: "Flatbed Towing",
    desc: "Flatbed service for luxury cars, low-clearance vehicles, and those needing extra care during transport."
  },
  {
    emoji: "⚡",
    title: "Jump Start",
    desc: "Fast battery boost service so you can get back on the road quickly with no damage to your vehicle."
  },
  {
    emoji: "🔑",
    title: "Car Lockout",
    desc: "Professional lockout support to get you back inside your car safely and quickly."
  },
  {
    emoji: "⛽",
    title: "Fuel Delivery",
    desc: "Fuel delivered direct to your location anywhere in Birmingham so you can continue your journey."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#111111] font-semibold uppercase tracking-[0.35em] text-sm mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111]">
            Premium Towing & Roadside Support Across Birmingham
          </h2>
          <p className="mt-4 text-[#333333] max-w-2xl mx-auto text-base sm:text-lg leading-8">
            One call handles emergency towing, breakdown recovery, jump starts, flatbed transport, and more — built for speed and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#E11D2E]/20"
            >
              <div className="mb-6 text-4xl">{svc.emoji}</div>
              <h3 className="text-[#111111] font-bold text-xl mb-4 group-hover:text-[#E11D2E] transition-colors">{svc.title}</h3>
              <p className="text-[#333333] text-sm leading-relaxed mb-6">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:01210000000"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E11D2E] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#E11D2E]/20 transition hover:bg-[#C81A28] hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now – 24/7 Emergency Towing
          </a>
        </div>
      </div>
    </section>
  );
}

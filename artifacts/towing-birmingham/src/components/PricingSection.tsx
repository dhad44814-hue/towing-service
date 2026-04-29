import { Phone } from "lucide-react";

const PHONE = "+14386195732";

const pricing = [
  { service: "Emergency Towing", from: "£60", note: "Local Birmingham tow" },
  { service: "Car Recovery", from: "£70", note: "Safe vehicle recovery" },
  { service: "Flatbed Towing", from: "£80", note: "All vehicle types" },
  { service: "Roadside Assistance", from: "£40", note: "Fix on-site first" },
  { service: "Jump Start", from: "£35", note: "Battery boost service" },
  { service: "Tyre Change", from: "£30", note: "Spare tyre swap" },
  { service: "Car Lockout", from: "£40", note: "No damage guaranteed" },
  { service: "Fuel Delivery", from: "£30", note: "+ cost of fuel" }
];

export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#111111] font-semibold uppercase tracking-[0.35em] text-sm mb-3">Transparent Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111]">
            Affordable Towing Rates in Birmingham
          </h2>
          <p className="mt-4 text-[#333333] max-w-2xl mx-auto leading-7">
            No hidden fees, no surprise charges. Emergency towing from just <strong className="text-[#E11D2E]">£60</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {pricing.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#E11D2E]/20"
            >
              <div className="mb-4 text-sm uppercase tracking-[0.3em] text-[#111111] font-semibold">{p.service}</div>
              <p className="text-[#333333] text-sm leading-relaxed mb-6">{p.note}</p>
              <div className="text-right">
                <p className="text-slate-400 text-xs">From</p>
                <p className="text-[#E11D2E] font-black text-3xl">{p.from}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-xl text-center">
          <h3 className="text-3xl font-black text-[#111111] mb-4">Get a Fast, Free Quote</h3>
          <p className="text-[#333333] mb-8 max-w-2xl mx-auto leading-7">
            Call now for a no-obligation quote from our Birmingham towing dispatch team.
          </p>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
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

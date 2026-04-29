import { Clock, Shield, Star, DollarSign } from "lucide-react";

const trustItems = [
  {
    icon: <Clock className="w-7 h-7 text-[#333333]" />,
    title: "24/7 Availability",
    desc: "We're here at 3am on a Sunday, during holidays, and in the worst weather."
  },
  {
    icon: <Star className="w-7 h-7 text-[#333333]" />,
    title: "Fast Response Time",
    desc: "Tow trucks reach most Birmingham locations in under 30 minutes, every time."
  },
  {
    icon: <Shield className="w-7 h-7 text-[#333333]" />,
    title: "Licensed & Insured",
    desc: "Fully licensed and insured. Your vehicle is secure with our trained drivers."
  },
  {
    icon: <DollarSign className="w-7 h-7 text-[#333333]" />,
    title: "Transparent Pricing",
    desc: "Upfront quotes, no hidden fees, and emergency rates that keep you in control."
  }
];

export default function TrustSection() {
  return (
    <section className="bg-[#FFFFFF] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#111111] font-semibold uppercase tracking-[0.35em] text-sm mb-3">Why Birmingham Trusts Us</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111]">
            Built for Fast, Reliable Towing Coverage
          </h2>
          <p className="text-[#333333] mt-4 max-w-2xl mx-auto leading-7">
            Local drivers, premium equipment, and a reputation for fast response across Birmingham and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-[#E11D2E]/30"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-[#111111] transition duration-300 group-hover:bg-gradient-to-br group-hover:from-[#E11D2E]/20 group-hover:to-[#FECACA] group-hover:text-[#E11D2E]">
                {item.icon}
              </div>
              <h3 className="text-[#111111] font-bold text-xl mb-4 transition-colors duration-300 group-hover:text-[#E11D2E]">{item.title}</h3>
              <p className="text-[#333333] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

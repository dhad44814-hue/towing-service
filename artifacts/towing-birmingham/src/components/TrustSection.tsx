import { Clock, Shield, Star, DollarSign } from "lucide-react";

const trustItems = [
  {
    icon: <Clock className="w-7 h-7 text-yellow-400" />,
    title: "24/7 Availability",
    desc: "We're here for you at 3am on a Sunday, during holidays, and in the worst weather."
  },
  {
    icon: <Star className="w-7 h-7 text-yellow-400" />,
    title: "Fast Response Time",
    desc: "Our tow trucks reach most Birmingham locations in under 30 minutes. Guaranteed."
  },
  {
    icon: <Shield className="w-7 h-7 text-yellow-400" />,
    title: "Licensed & Insured",
    desc: "Fully licensed and insured. Your vehicle is in safe hands with our certified drivers."
  },
  {
    icon: <DollarSign className="w-7 h-7 text-yellow-400" />,
    title: "Affordable Pricing",
    desc: "Transparent, upfront pricing. No hidden fees. Emergency rates from just £75."
  }
];

export default function TrustSection() {
  return (
    <section className="bg-gray-950 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-3">Why Birmingham Trusts Us</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Trusted Local Towing Service in Birmingham
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            When you're stuck on the A38, M6, or anywhere across Birmingham, we're the towing company locals call first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 hover:border-yellow-400 rounded-2xl p-6 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

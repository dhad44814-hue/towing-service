import { Phone } from "lucide-react";

const PHONE = "0121 000 0000";

const pricing = [
  { service: "Emergency Towing", from: "£75", note: "Local Birmingham tow" },
  { service: "Flatbed Towing", from: "£95", note: "All vehicle types" },
  { service: "Roadside Assistance", from: "£45", note: "Fix on-site first" },
  { service: "Jump Start", from: "£35", note: "Battery boost service" },
  { service: "Tire Change", from: "£30", note: "Spare tyre swap" },
  { service: "Car Lockout", from: "£40", note: "No damage guaranteed" },
  { service: "Fuel Delivery", from: "£30", note: "+ cost of fuel" }
];

export default function PricingSection() {
  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-3">Transparent Pricing</p>
          <h2 className="text-3xl md:text-4xl font-black">
            Affordable Towing Rates in Birmingham
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            No hidden charges. No call-out fees. The price you're quoted is the price you pay.
            Emergency towing starting from just <strong className="text-yellow-400">£75</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {pricing.map((p, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 hover:border-yellow-400 rounded-2xl p-5 flex justify-between items-center transition-all"
            >
              <div>
                <h3 className="font-bold text-white">{p.service}</h3>
                <p className="text-gray-400 text-xs mt-1">{p.note}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs">From</p>
                <p className="text-yellow-400 font-black text-2xl">{p.from}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-400 rounded-2xl p-8 text-black text-center">
          <h3 className="font-black text-2xl md:text-3xl mb-2">Get an Instant Quote</h3>
          <p className="text-black/70 mb-6">
            Call us now for a free, no-obligation quote. Affordable emergency rates available 24/7 in Birmingham.
          </p>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 bg-black text-yellow-400 font-black text-xl px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors pulse-btn"
          >
            <Phone className="w-6 h-6" />
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

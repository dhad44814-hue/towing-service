import { Clock, Shield, Award, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Reliable 24/7 Support",
      desc: "Vehicle problems can happen at any time, which is why our team is available 24/7. Whether it’s late at night or early morning, you can count on us to be there when you need help the most.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Fast & Efficient Response",
      desc: "We understand the urgency of roadside emergencies. Our dispatch system is designed to respond quickly, ensuring help reaches you without unnecessary delays.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Skilled & Professional Team",
      desc: "Our experienced towing professionals are trained to handle vehicles with care and precision, ensuring safe, damage-free towing every time.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Transparent & Fair Pricing",
      desc: "We believe in honesty and transparency. Our pricing is clear and competitive, with no hidden charges. You’ll always know what to expect before we begin.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Shield,
      title: "Local Knowledge & Expertise",
      desc: "As a Birmingham-based towing service, we know the area inside and out. This allows us to reach you faster and choose the most efficient routes.",
      color: "from-slate-500 to-slate-700"
    },
    {
      icon: Zap,
      title: "Complete Roadside Solutions",
      desc: "We offer emergency towing, breakdown recovery, jump-start assistance, tire changes, and more—everything you need in one place.",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E11D2E]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#111111]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-[#E11D2E]/10 text-[#E11D2E] text-xs font-bold uppercase tracking-[0.35em]">
              Our Promise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] mb-4">
            Why Choose Us
          </h2>
          <p className="mt-4 text-[#333333] max-w-3xl mx-auto text-lg leading-8">
            Choosing the right towing service can make all the difference when you’re dealing with a stressful roadside situation. We are committed to delivering reliable, fast, and professional towing services in Birmingham, ensuring your safety and peace of mind at every step.
          </p>
        </div>

        {/* Modern Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="group relative rounded-xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-2"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E11D2E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-[#E11D2E]/20 to-transparent"></div>

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-6 bg-gradient-to-br ${r.color} text-white shadow-lg shadow-[#E11D2E]/20 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>

                  {/* Stats with enhanced typography */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-[#E11D2E] group-hover:text-[#C81A28] transition-colors duration-300">
                        {r.number}
                      </span>
                      {r.unit && (
                        <span className="text-2xl font-bold text-[#333333] group-hover:text-[#E11D2E] transition-colors duration-300">
                          {r.unit}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#E11D2E] transition-colors duration-300">
                    {r.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#333333] text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                {/* Subtle animated border */}
                <div className="absolute inset-0 rounded-xl border border-[#E11D2E]/0 group-hover:border-[#E11D2E]/30 transition-colors duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* New Modern Feature Boxes Section */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Box 1: Premium Support */}
          <div className="group relative rounded-2xl bg-gradient-to-br from-white to-[#F5F5F5] border border-slate-200 p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E11D2E]/10 rounded-full blur-2xl -z-10 group-hover:blur-3xl transition-all duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#E11D2E] to-[#C81A28] text-white">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#111111]">Premium Support</h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Rapid response across Birmingham",
                  "Experienced towing professionals",
                  "Affordable rates starting from £60",
                  "Available day & night",
                  "Licensed & insured drivers",
                  "No hidden charges — ever"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#E11D2E] text-white text-xs font-bold flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                      ✓
                    </span>
                    <span className="text-[#333333] font-medium group-hover/item:text-[#E11D2E] transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Box 2: Coverage Areas */}
          <div className="group relative rounded-2xl bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-slate-700 p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E11D2E]/20 rounded-full blur-2xl -z-10 group-hover:blur-3xl transition-all duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#E11D2E] to-[#C81A28] text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Service Coverage</h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Birmingham City Centre",
                  "Edgbaston & Harborne",
                  "Selly Oak & Bournville",
                  "Handsworth & Perry Barr",
                  "Aston & surrounding areas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#E11D2E] text-white text-xs font-bold flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                      📍
                    </span>
                    <span className="text-slate-300 font-medium group-hover/item:text-[#E11D2E] transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-8 mb-6">
            Need immediate assistance? If you’re stranded or need urgent towing services in Birmingham, don’t hesitate to reach out. Our team is ready to help you quickly and professionally—anytime, anywhere.
          </p>
          <a
            href="tel:+14386195732"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#E11D2E] text-white font-bold text-lg hover:bg-[#C81A28] shadow-lg shadow-[#E11D2E]/30 hover:shadow-xl hover:shadow-[#E11D2E]/40 transition-all duration-300 hover:scale-105"
          >
            Call Now +14386195732
            <span className="text-2xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}


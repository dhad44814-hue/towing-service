export default function WhyChooseUs() {
  const reasons = [
    {
      number: "30",
      unit: "min",
      title: "Fast Arrival Time",
      desc: "We aim to arrive within 30 minutes anywhere in Birmingham — day or night."
    },
    {
      number: "10+",
      unit: "yrs",
      title: "Local Experience",
      desc: "Over a decade serving Birmingham drivers. We know every road, every shortcut."
    },
    {
      number: "5★",
      unit: "",
      title: "Top-Rated Drivers",
      desc: "Professional, DBS-checked drivers who treat your vehicle with respect."
    },
    {
      number: "24",
      unit: "/7",
      title: "Always Open",
      desc: "Midnight on Christmas? We're still here. No extra charge for late-night calls."
    }
  ];

  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-3">Our Promise</p>
          <h2 className="text-3xl md:text-4xl font-black">
            Why Choose Birmingham Towing?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="text-center p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-yellow-400 transition-all">
              <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-1">
                {r.number}<span className="text-2xl">{r.unit}</span>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-400 rounded-2xl p-8">
            <h3 className="font-black text-black text-2xl mb-3">Professional &amp; Reliable</h3>
            <ul className="space-y-2 text-black">
              {[
                "Fully licensed and insured fleet",
                "All makes and models covered",
                "Motorcycles, vans &amp; commercial vehicles",
                "Accident recovery specialists",
                "No hidden charges — ever"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 font-medium">
                  <span className="text-black font-bold">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="font-black text-white text-2xl mb-3">Serving All of Birmingham</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "City Centre &amp; Digbeth",
                "Edgbaston &amp; Harborne",
                "Kings Heath &amp; Moseley",
                "Sutton Coldfield &amp; Erdington",
                "Solihull, Coventry &amp; beyond"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-yellow-400 font-bold">📍</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

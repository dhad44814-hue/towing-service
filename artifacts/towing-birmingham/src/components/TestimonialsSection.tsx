const testimonials = [
  {
    name: "Mark L.",
    location: "Birmingham City Centre",
    stars: 5,
    text: "Fast and reliable service! Arrived within 20 minutes. The driver was professional and got my car to the garage without any issues. Highly recommend Birmingham Towing for anyone who needs quick help."
  },
  {
    name: "Claire B.",
    location: "Edgbaston, Birmingham",
    stars: 5,
    text: "Very professional and affordable towing service. I called late at night expecting to wait hours, but they were there in under 30 minutes. Fair pricing, no hidden charges, and a friendly driver. Outstanding."
  },
  {
    name: "Tony R.",
    location: "Handsworth, Birmingham",
    stars: 5,
    text: "Highly recommended for emergency breakdowns. My van broke down on the A38 and they were with me in no time. The whole thing was handled smoothly from the call to drop-off. Five stars all round."
  },
  {
    name: "Sarah M.",
    location: "Selly Oak, Birmingham",
    stars: 5,
    text: "My battery died in a supermarket car park. These guys arrived quickly, jump-started my car, and stayed to make sure everything was fine before leaving. Brilliant service at a very fair price."
  },
  {
    name: "Dean K.",
    location: "Aston, Birmingham",
    stars: 5,
    text: "Used them for a flatbed transport of my car after an accident. They were careful, professional, and the price was fair. The driver knew exactly what he was doing. I wouldn't trust anyone else."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-3">Real Reviews</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            What Birmingham Drivers Say About Us
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">{"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-yellow-400 text-2xl">{s}</span>
            ))}</div>
            <span className="text-gray-500 font-medium">4.9/5 — Trusted by hundreds of Birmingham drivers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-yellow-200 transition-all duration-300"
            >
              <div className="flex mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-yellow-400 font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">📍 {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

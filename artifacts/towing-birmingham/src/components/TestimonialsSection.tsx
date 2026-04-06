const testimonials = [
  {
    name: "James T.",
    location: "Erdington, Birmingham",
    stars: 5,
    text: "Broke down on the A38 at 11pm on a Friday night. Called Birmingham Towing and they were with me in 25 minutes. Professional driver, clean truck, and my car was at the garage safely before midnight. Absolutely saved the day!"
  },
  {
    name: "Sarah M.",
    location: "Harborne, Birmingham",
    stars: 5,
    text: "My battery died in a Tesco car park and I had the kids with me. These guys arrived super fast, jump-started my car, and even stayed to make sure everything was fine before leaving. Fantastic service and very reasonably priced."
  },
  {
    name: "Dean R.",
    location: "Solihull",
    stars: 5,
    text: "Used Birmingham Towing for a flatbed transport of my classic car. They were careful, professional, and the price was fair. The driver knew exactly what he was doing. I wouldn't trust anyone else with it."
  },
  {
    name: "Priya K.",
    location: "Moseley, Birmingham",
    stars: 5,
    text: "Locked my keys in the car outside work on a rainy Wednesday. They came within 20 minutes and got me in without a scratch. Very polite and professional. Will definitely use again — hopefully not too soon!"
  },
  {
    name: "Mike O.",
    location: "Sutton Coldfield",
    stars: 5,
    text: "Called at 2am when my van broke down on the M6. Within half an hour a truck arrived. The driver was professional and reassuring. My van was recovered safely. Best towing service in Birmingham, full stop."
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

interface Testimonial {
  name: string;
  location: string;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isHighlighted?: boolean;
}

export function TestimonialCard({ testimonial, isHighlighted = false }: TestimonialCardProps) {
  return (
    <article className={`group h-full overflow-hidden rounded-2xl border p-6 transition-all duration-500 ${isHighlighted ? "border-[#E11D2E]/20 bg-white shadow-[0_32px_80px_-40px_rgba(225,29,46,0.35)] scale-105" : "border-slate-200 bg-white shadow-lg hover:shadow-2xl"}`}>
      <div className="relative mb-6 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F5F5] text-xl font-bold text-[#111111]">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-base font-bold text-slate-900">{testimonial.name}</p>
          <p className="text-sm text-slate-500">{testimonial.location}</p>
        </div>
        <div className="absolute right-0 top-0 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          Google
        </div>
      </div>

      <div className="mb-5 flex items-center gap-2 text-amber-400 text-sm font-semibold">
        <span>★★★★★</span>
        <span className="text-slate-500 font-normal">Verified Customer</span>
      </div>

      <div className="mb-6 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-[#111111] text-sm leading-7">
        <span className="text-3xl text-[#E11D2E] leading-none">"</span>
        <span className="ml-2 text-slate-700">{testimonial.text}</span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-emerald-700">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          Verified review
        </div>
        <span className="tracking-[0.25em] uppercase text-slate-400">Local Birmingham</span>
      </div>
    </article>
  );
}


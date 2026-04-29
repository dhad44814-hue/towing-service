import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+14386195732";
const WHATSAPP = "447210000000";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-[#111111] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200 mb-6">
          <span className="h-2 w-2 rounded-full bg-[#EF4444] animate-pulse" />
          Need a Tow Truck Now?
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
          Fast Emergency Tow Trucks in Birmingham
        </h2>
        <p className="mt-5 text-base sm:text-lg text-slate-200/90 max-w-3xl mx-auto leading-8">
          Every second matters in a breakdown. Call our 24/7 dispatch team now and get rapid assistance from trusted local drivers.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-9 py-4 text-base font-semibold text-white shadow-xl shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"
          >
            <Phone className="w-5 h-5" />
            CALL NOW
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20a%20tow%20truck%20in%20Birmingham`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-9 py-4 text-base font-semibold text-white transition hover:bg-white/20"
          >
            <MessageCircle className="w-5 h-5" />
            Get Help Fast
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-200/70">
          Tow Truck Birmingham • Emergency Towing • Roadside Assistance • Same-day Recovery
        </p>
      </div>
    </section>
  );
}

import { Phone, MessageCircle, ChevronDown } from "lucide-react";

const PHONE = "+14386195732";
const WHATSAPP = "447210000000";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  badgeText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title = "Need a Tow Truck in Birmingham?",
  subtitle = "Fast Response • Affordable Rates • Call Now",
  description = "Stranded in Birmingham? Our premium tow truck crew responds quickly with safe recovery, roadside assistance, and vehicle recovery for all vehicle types.",
  badgeText = "🚨 24/7 Emergency Towing • Fast Local Response",
  primaryButtonText = "CALL NOW – 24/7",
  secondaryButtonText = "WhatsApp Help",
  backgroundImage = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
}: HeroSectionProps) {

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url('${backgroundImage}')` }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.4em] text-slate-100 shadow-lg shadow-slate-950/20 mb-6">
          <span className="h-2 w-2 rounded-full bg-[#E11D2E] animate-pulse" />
          {badgeText}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
          {title}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-8">
          {subtitle}
        </p>

        <p className="mt-6 text-sm sm:text-base text-slate-200/85 max-w-2xl mx-auto leading-7">
          {description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E11D2E] px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-[#E11D2E]/30 transition hover:bg-[#C81A28] hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffffff] animate-pulse"
          >
            <Phone className="w-6 h-6" />
            {primaryButtonText}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20a%20tow%20truck%20in%20Birmingham`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#111111] bg-transparent px-8 py-4 text-base font-semibold text-[#111111] shadow-lg transition hover:bg-[#111111] hover:text-white"
          >
            <MessageCircle className="w-5 h-5" />
            {secondaryButtonText}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-[#10B981]">✓</span>
            <span>30-Min Response</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#10B981]">✓</span>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#10B981]">✓</span>
            <span>No Hidden Fees</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-200 opacity-90 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}

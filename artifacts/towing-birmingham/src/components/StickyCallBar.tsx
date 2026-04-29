import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+14386195732";
const WHATSAPP = "447210000000";

export default function StickyCallBar() {
  return (
    <div className="sticky-cta bg-white border-t border-slate-200 py-4 px-4 flex gap-3 md:hidden shadow-[0_-4px_30px_rgba(15,23,42,0.12)]">
      <a
        href={`tel:${PHONE.replace(/\s/g, "")}`}
        className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#E11D2E] px-4 py-3 text-sm font-bold text-white shadow-xl shadow-[#E11D2E]/20 transition hover:bg-[#C81A28] hover:scale-105"
        aria-label="Call now"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a
        href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20a%20tow%20truck%20in%20Birmingham`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 rounded-full border-2 border-[#111111] bg-transparent px-4 py-3 text-sm font-bold text-[#111111] shadow-xl transition hover:bg-[#111111] hover:text-white hover:scale-105"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-5 h-5" />
        Get Help
      </a>
    </div>
  );
}

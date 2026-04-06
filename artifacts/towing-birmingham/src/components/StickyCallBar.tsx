import { Phone, MessageCircle } from "lucide-react";

const PHONE = "0121 000 0000";
const WHATSAPP = "447210000000";

export default function StickyCallBar() {
  return (
    <div className="sticky-cta bg-black border-t-2 border-yellow-400 py-3 px-4 flex gap-3 md:hidden">
      <a
        href={`tel:${PHONE.replace(/\s/g, "")}`}
        className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold py-3 rounded-lg text-base pulse-btn"
        aria-label="Call now"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <a
        href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20a%20tow%20truck%20in%20Birmingham`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-lg text-base pulse-green"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
}

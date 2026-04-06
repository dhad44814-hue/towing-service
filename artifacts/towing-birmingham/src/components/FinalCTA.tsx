import { Phone, MessageCircle } from "lucide-react";

const PHONE = "0121 000 0000";
const WHATSAPP = "447210000000";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-yellow-400">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-black text-yellow-400 font-bold text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          Available Right Now — 24/7
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-black leading-tight mb-4">
          Need a Tow Truck in Birmingham Now?
        </h2>
        <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto">
          Don't wait — every minute counts in an emergency. 
          Call us now for the fastest tow truck service in Birmingham.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-3 bg-black text-yellow-400 font-black text-2xl px-10 py-6 rounded-2xl hover:bg-gray-900 transition-all transform hover:scale-105 pulse-btn"
          >
            <Phone className="w-7 h-7" />
            {PHONE}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20a%20tow%20truck%20in%20Birmingham`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-600 text-white font-bold text-xl px-10 py-6 rounded-2xl hover:bg-green-500 transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-7 h-7" />
            WhatsApp Now
          </a>
        </div>

        <p className="text-black/60 text-sm mt-8">
          Tow Truck Birmingham &bull; Emergency Towing Birmingham &bull; Roadside Assistance Birmingham
        </p>
      </div>
    </section>
  );
}

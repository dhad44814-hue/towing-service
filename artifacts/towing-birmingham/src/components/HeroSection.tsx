import { Phone, MessageCircle, ChevronDown } from "lucide-react";

const PHONE = "0121 000 0000";
const WHATSAPP = "447210000000";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d0d0d 100%)"
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(250,204,21,0.1) 40px,
            rgba(250,204,21,0.1) 41px
          )`
        }}
      />

      {/* Yellow accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
          <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
          24/7 Emergency Service Available Now
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
          24/7 Emergency{" "}
          <span className="text-yellow-400">Towing</span>
          <br />
          in Birmingham
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          <strong className="text-white">Fast Response</strong> &bull;{" "}
          <strong className="text-white">Affordable Rates</strong> &bull;{" "}
          <strong className="text-white">Licensed &amp; Insured</strong>
        </p>

        <p className="text-gray-400 text-base mb-10 max-w-xl mx-auto">
          Stranded in Birmingham? Our professional tow truck drivers arrive in under 30 minutes. 
          Emergency towing, roadside assistance, car recovery and more — day or night. 
          Rates starting from <strong className="text-yellow-400">£60</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xl px-8 py-5 rounded-2xl transition-all transform hover:scale-105 pulse-btn w-full sm:w-auto justify-center"
            aria-label="Call for emergency towing in Birmingham"
          >
            <Phone className="w-6 h-6" />
            Call Now: {PHONE}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20a%20tow%20truck%20in%20Birmingham`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-lg px-8 py-5 rounded-2xl transition-all transform hover:scale-105 pulse-green w-full sm:w-auto justify-center"
            aria-label="WhatsApp us for towing in Birmingham"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp Us
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 font-bold text-lg">✓</span>
            <span>30-Min Response</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 font-bold text-lg">✓</span>
            <span>Licensed &amp; Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 font-bold text-lg">✓</span>
            <span>Fixed Prices</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 font-bold text-lg">✓</span>
            <span>All Vehicles</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}

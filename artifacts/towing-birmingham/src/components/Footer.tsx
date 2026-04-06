import { Link } from "wouter";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const PHONE = "0121 000 0000";
const WHATSAPP = "447210000000";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white mt-16">
      {/* Schema markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Birmingham Towing",
            "description": "24/7 emergency towing and roadside assistance in Birmingham, UK",
            "telephone": PHONE,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Birmingham",
              "addressRegion": "West Midlands",
              "addressCountry": "GB"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 52.4862,
              "longitude": -1.8904
            },
            "openingHours": "Mo-Su 00:00-24:00",
            "priceRange": "££",
            "url": "https://birminghamtowing.co.uk",
            "areaServed": ["Birmingham", "Solihull", "Wolverhampton", "Coventry", "Walsall", "Dudley", "West Midlands"]
          })
        }}
      />

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <span className="text-yellow-400 font-black text-xl tracking-tight">
              BIRMINGHAM<span className="text-white">TOWING</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted 24/7 towing and roadside assistance service in Birmingham. Fast, affordable, and reliable.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-yellow-400 text-black font-bold px-3 py-2 rounded-lg text-sm hover:bg-yellow-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white font-bold px-3 py-2 rounded-lg text-sm hover:bg-green-400 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-yellow-400 mb-4 uppercase tracking-wider text-sm">Our Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#services" className="hover:text-yellow-400 transition-colors">Emergency Towing</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition-colors">Flatbed Towing</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition-colors">Roadside Assistance</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition-colors">Jump Start</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition-colors">Tire Change</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition-colors">Car Lockout</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition-colors">Fuel Delivery</a></li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-bold text-yellow-400 mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link href="/towing-service-birmingham" className="hover:text-yellow-400 transition-colors">Towing Service Birmingham</Link></li>
            <li><Link href="/emergency-towing-birmingham" className="hover:text-yellow-400 transition-colors">Emergency Towing Birmingham</Link></li>
            <li><Link href="/roadside-assistance-birmingham" className="hover:text-yellow-400 transition-colors">Roadside Assistance Birmingham</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-yellow-400 mb-4 uppercase tracking-wider text-sm">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-yellow-400 transition-colors">{PHONE}</a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
              <span>24/7 — We never close</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
              <span>Birmingham, West Midlands</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {currentYear} Birmingham Towing. All rights reserved.</p>
          <p>Towing Service Birmingham | Emergency Towing Birmingham | Roadside Assistance Birmingham</p>
        </div>
      </div>
    </footer>
  );
}

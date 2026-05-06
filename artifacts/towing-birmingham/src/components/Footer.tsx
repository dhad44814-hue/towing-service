import { Link } from "wouter";
import { Phone, MessageCircle, MapPin, Clock, Truck } from "lucide-react";

const PHONE = "+14386195732";
const WHATSAPP = "447210000000";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white mt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://birminghamtowing.co.uk/#localbusiness",
            "name": "Birmingham Towing",
            "description": "24/7 emergency towing and roadside assistance in Birmingham, UK",
            "url": "https://birminghamtowing.co.uk",
            "telephone": PHONE,
            "image": "https://birminghamtowing.co.uk/opengraph.jpg",
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
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            ],
            "priceRange": "$$",
            "areaServed": ["Birmingham", "West Midlands", "Solihull", "Sutton Coldfield", "Dudley", "Walsall", "Wolverhampton", "Coventry"]
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E11D2E] text-white shadow-sm shadow-[#E11D2E]/20">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Birmingham, UK</p>
              <p className="text-xl font-black text-white">Towing</p>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Trusted 24/7 towing and roadside assistance in Birmingham. Fast dispatch, premium service, and clear pricing.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#dc2626]"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[#E11D2E] font-semibold uppercase tracking-[0.35em] text-sm mb-4">Our Services</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li><a href="#services" className="transition hover:text-white">Emergency Towing</a></li>
            <li><a href="#services" className="transition hover:text-white">Flatbed Towing</a></li>
            <li><a href="#services" className="transition hover:text-white">Roadside Assistance</a></li>
            <li><a href="#services" className="transition hover:text-white">Jump Start</a></li>
            <li><a href="#services" className="transition hover:text-white">Car Lockout</a></li>
            <li><a href="#services" className="transition hover:text-white">Fuel Delivery</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#E11D2E] font-semibold uppercase tracking-[0.35em] text-sm mb-4">Quick Links</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li><Link href="/" className="transition hover:text-white">Home</Link></li>
            <li><Link href="/towing-service-birmingham" className="transition hover:text-white">Towing Service Birmingham</Link></li>
            <li><Link href="/emergency-towing-birmingham" className="transition hover:text-white">Emergency Towing Birmingham</Link></li>
            <li><Link href="/roadside-assistance-birmingham" className="transition hover:text-white">Roadside Assistance Birmingham</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#E11D2E] font-semibold uppercase tracking-[0.35em] text-sm mb-4">Contact</h3>
          <ul className="space-y-4 text-slate-300 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#E11D2E] mt-1" />
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="transition hover:text-white">{PHONE}</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#E11D2E] mt-1" />
              <span>24/7 emergency dispatch</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#E11D2E] mt-1" />
              <span>Birmingham, West Midlands</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 md:flex-row justify-between text-xs text-slate-500">
          <p>© {currentYear} Birmingham Towing. All rights reserved.</p>
          <p>Towing Service Birmingham • Emergency Towing Birmingham • Roadside Assistance Birmingham</p>
        </div>
      </div>
    </footer>
  );
}

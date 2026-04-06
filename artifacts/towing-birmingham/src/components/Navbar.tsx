import { useState } from "react";
import { Link } from "wouter";
import { Phone, Menu, X } from "lucide-react";

const PHONE = "0121 000 0000";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-yellow-400 font-black text-xl tracking-tight">
            BIRMINGHAM<span className="text-white">TOWING</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <Link href="/towing-service-birmingham" className="hover:text-yellow-400 transition-colors">Towing Service</Link>
          <Link href="/emergency-towing-birmingham" className="hover:text-yellow-400 transition-colors">Emergency Towing</Link>
          <Link href="/roadside-assistance-birmingham" className="hover:text-yellow-400 transition-colors">Roadside Assistance</Link>
        </div>

        <a
          href={`tel:${PHONE.replace(/\s/g, "")}`}
          className="hidden md:flex items-center gap-2 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          <Phone className="w-4 h-4" />
          {PHONE}
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)} className="py-2 border-b border-gray-700 hover:text-yellow-400 transition-colors">Home</Link>
          <Link href="/towing-service-birmingham" onClick={() => setOpen(false)} className="py-2 border-b border-gray-700 hover:text-yellow-400 transition-colors">Towing Service</Link>
          <Link href="/emergency-towing-birmingham" onClick={() => setOpen(false)} className="py-2 border-b border-gray-700 hover:text-yellow-400 transition-colors">Emergency Towing</Link>
          <Link href="/roadside-assistance-birmingham" onClick={() => setOpen(false)} className="py-2 hover:text-yellow-400 transition-colors">Roadside Assistance</Link>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold py-3 rounded-lg mt-2"
          >
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
        </div>
      )}
    </nav>
  );
}

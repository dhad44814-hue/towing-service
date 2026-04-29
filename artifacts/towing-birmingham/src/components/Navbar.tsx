import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";

const PHONE = "+14386195732";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) => location === href;

  const desktopLinkClass = (href: string) =>
    `transition text-sm font-medium ${isActive(href) ? "text-[#E11D2E]" : "text-white hover:text-[#E11D2E]"}`;

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E11D2E]">
          <div className="rounded-2xl bg-white/10 px-3 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white">Emergency</div>
          <div>
            <p className="font-black text-xl tracking-tight">Towing</p>
            <p className="text-sm text-slate-200/90">24/7 Fast & Reliable Tow Truck Service</p>
          </div>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link href="/" className={desktopLinkClass("/")}>
            Home
          </Link>

          <Link href="/services" className={desktopLinkClass("/services")}>
            Services
          </Link>

          <Link href="/why-choose-us" className={desktopLinkClass("/why-choose-us")}>
            Why Choose Us
          </Link>

          <Link href="/about-us" className={desktopLinkClass("/about-us")}>
            About Us
          </Link>
          <Link href="/contact-us" className={desktopLinkClass("/contact-us")}>
            Contact Us
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-3 text-white transition hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={`md:hidden border-t border-white/10 bg-[#0F172A] transition-all duration-300 ${open ? "max-h-[1000px]" : "max-h-0 overflow-hidden"}`}>
        <div className="space-y-1 px-4 pb-6 pt-4 text-sm">
          <Link href="/" className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#E11D2E]" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/services" className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#E11D2E]" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link href="/why-choose-us" className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#E11D2E]" onClick={() => setOpen(false)}>
            Why Choose Us
          </Link>

          <Link href="/about-us" className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#E11D2E]" onClick={() => setOpen(false)}>
            About Us
          </Link>
          <Link href="/contact-us" className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#E11D2E]" onClick={() => setOpen(false)}>
            Contact Us
          </Link>

          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#EF4444] px-4 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden px-4 pb-4">
        <a
          href={`tel:${PHONE.replace(/\s/g, "")}`}
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#EF4444] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#ef4444]/25 transition hover:bg-[#dc2626]"
        >
          <Phone className="h-4 w-4" />
          CALL NOW
        </a>
      </div>
    </nav>
  );
}

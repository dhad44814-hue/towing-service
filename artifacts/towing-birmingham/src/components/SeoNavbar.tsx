"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const PHONE = "+14386195732";

const serviceLinks = [
  { label: "Emergency Towing", href: "/emergency-towing-birmingham" },
  { label: "Roadside Assistance", href: "/roadside-assistance-birmingham" },
  { label: "Car Recovery", href: "/car-recovery-birmingham" },
  { label: "Flatbed Towing", href: "/flatbed-towing-birmingham" },
  { label: "Jump Start Service", href: "/jump-start-service-birmingham" },
  { label: "Tire Change Service", href: "/tire-change-service-birmingham" },
  { label: "Car Lockout Service", href: "/car-lockout-service-birmingham" },
  { label: "Fuel Delivery Service", href: "/fuel-delivery-service-birmingham" }
];

export default function SeoNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen((current) => !current);
    if (mobileOpen) {
      setServicesOpen(false);
    }
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#111111] text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E11D2E]">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl font-black text-white">B</span>
          <div>
            <p className="text-base font-semibold tracking-tight">Birmingham Tow</p>
            <p className="text-sm text-slate-200/80">24/7 emergency towing</p>
          </div>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li>
              <Link href="/" className="transition hover:text-[#E11D2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E11D2E]" onClick={closeMenus}>
                Home
              </Link>
            </li>

            <li className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                type="button"
                className="inline-flex items-center gap-2 transition hover:text-[#E11D2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E11D2E]"
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((current) => !current)}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>

              <div
                className={`absolute left-0 top-full mt-3 w-72 overflow-hidden rounded-3xl border border-white/10 bg-[#333333] shadow-2xl transition duration-300 ${servicesOpen ? "opacity-100 visible translate-y-0" : "pointer-events-none opacity-0 invisible -translate-y-2"}`}
                role="menu"
                aria-label="Services submenu"
              >
                <div className="space-y-1 p-3">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block rounded-2xl px-4 py-3 text-sm text-slate-100 transition hover:bg-[#E11D2E]/15 hover:text-[#E11D2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E11D2E]"
                      role="menuitem"
                      onClick={closeMenus}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link href="/about-us" className="transition hover:text-[#E11D2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E11D2E]" onClick={closeMenus}>
                About Us
              </Link>
            </li>

            <li>
              <Link href="/contact-us" className="transition hover:text-[#E11D2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E11D2E]" onClick={closeMenus}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#E11D2E] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#E11D2E]/20 transition hover:bg-[#C81A28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E11D2E]"
          >
            <Phone className="h-4 w-4" />
            CALL NOW
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-3 text-white transition hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={toggleMobileMenu}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div className={`md:hidden border-t border-white/10 bg-[#152541] transition-all duration-300 ${mobileOpen ? "max-h-[1000px]" : "max-h-0 overflow-hidden"}`}>
        <div className="space-y-1 px-4 pb-6 pt-4 text-sm">
          <Link href="/" className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#E11D2E]" onClick={closeMenus}>
            Home
          </Link>

          <button
            type="button"
            className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-white transition hover:bg-white/10 hover:text-[#E11D2E]"
            aria-haspopup="menu"
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((current) => !current)}
          >
            <span>Services</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`} />
          </button>

          <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-96" : "max-h-0"}`}>
            <div className="space-y-1 px-2 pt-2">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-2xl px-4 py-3 text-white transition hover:bg-[#E11D2E]/15 hover:text-[#E11D2E]"
                  onClick={closeMenus}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about-us" className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#E11D2E]" onClick={closeMenus}>
            About Us
          </Link>
          <Link href="/contact-us" className="block rounded-2xl px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#E11D2E]" onClick={closeMenus}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

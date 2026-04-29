import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceArea from "@/components/ServiceArea";
import { Button } from "@/components/ui/button";
import { Phone, Truck, Wrench, Battery, Fuel, Lock, RotateCcw, MapPin, ChevronDown } from "lucide-react";
import StickyCTA from "@/components/StickyCTA";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "+14386195732";

const services = [
  {
    icon: Truck,
    title: "Emergency Towing",
    desc: "24/7 rapid response towing for cars, vans, and trucks across Birmingham. No hidden fees and professional handling.",
    href: "#emergency-towing"
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    desc: "Battery jump starts, tyre changes, and fuel delivery to get you moving again without waiting hours.",
    href: "#roadside-assistance"
  },
  {
    icon: RotateCcw,
    title: "Car Recovery",
    desc: "Safe recovery for breakdowns, accidents, and off-road incidents. We tow all makes and models securely.",
    href: "#car-recovery"
  },
  {
    icon: Truck,
    title: "Flatbed Towing",
    desc: "Flatbed service for luxury cars, low-clearance vehicles, and those needing extra care during transport.",
    href: "#flatbed-towing"
  },
  {
    icon: Battery,
    title: "Jump Start Service",
    desc: "Fast battery boost service so you can get back on the road quickly with no damage to your vehicle.",
    href: "#jump-start"
  },
  {
    icon: RotateCcw,
    title: "Tire Change",
    desc: "Professional tire change service with spare tire installation and emergency tire repair.",
    href: "#tire-change"
  },
  {
    icon: Lock,
    title: "Car Lockout",
    desc: "Professional lockout support to get you back inside your car safely and quickly.",
    href: "#car-lockout"
  },
  {
    icon: Fuel,
    title: "Fuel Delivery",
    desc: "Fuel delivered direct to your location anywhere in Birmingham so you can continue your journey.",
    href: "#fuel-delivery"
  }
];

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceTitle: string) => {
    setExpandedService(expandedService === serviceTitle ? null : serviceTitle);
  };

  return (
    <main>
      <Seo
        title="Towing Services Birmingham | 24/7 Emergency Tow Truck"
        description="Professional towing services in Birmingham including emergency towing, roadside assistance, car recovery, flatbed towing, jump starts, and fuel delivery. 24/7 service."
        canonical="https://birminghamtowing.co.uk/services"
        url="https://birminghamtowing.co.uk/services"
      />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://birminghamtowing.co.uk/" },
          { name: "Services", url: "https://birminghamtowing.co.uk/services" },
        ]}
      />
      <Navbar />

      <HeroSection
        title="24/7 Towing & Roadside Assistance in Birmingham"
        subtitle="Fast, Reliable & Affordable Emergency Services"
        description="Professional towing services including emergency towing, roadside assistance, car recovery, flatbed towing, jump starts, and fuel delivery. 24/7 service."
        badgeText="🚨 24/7 Emergency Towing • 30-Min Response"
        primaryButtonText="Call Now"
        secondaryButtonText="View All Services"
      />

      {/* Intro Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Why Choose Birmingham Towing Services?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Birmingham Towing, we provide comprehensive towing and roadside assistance services across Birmingham and the West Midlands. Our professional team is available 24/7, ensuring you get the help you need when you need it most. With years of experience and a commitment to customer satisfaction, we handle everything from emergency towing to routine roadside assistance with care and efficiency.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-[#111111] font-semibold uppercase tracking-[0.35em] text-sm mb-3">Our Services</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111]">
              Complete Towing Solutions
            </h2>
            <p className="mt-4 text-[#333333] max-w-2xl mx-auto text-base sm:text-lg leading-8">
              From emergency towing to roadside assistance, we offer a full range of services to keep you moving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <button
                key={i}
                onClick={() => toggleService(svc.title)}
                className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#E11D2E]/20 text-left"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F5F5] text-3xl mb-6 group-hover:bg-gradient-to-br group-hover:from-[#E11D2E]/20 group-hover:to-[#FECACA] transition-all duration-300">
                  <svc.icon className="h-8 w-8 text-[#333333] group-hover:text-[#E11D2E] transition-colors" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#111111] mb-3 group-hover:text-[#E11D2E] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-[#333333] leading-relaxed">{svc.desc}</p>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-[#E11D2E] transition-transform duration-300 flex-shrink-0 mt-1 ${expandedService === svc.title ? 'rotate-180' : ''}`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            {expandedService && (
              <motion.div
                key={expandedService}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg space-y-6"
              >
                {expandedService === "Emergency Towing" && (
                  <>
                    <h2 className="text-3xl font-black text-slate-900">Emergency Towing in Birmingham</h2>
                    <p className="text-slate-600 leading-relaxed">When your vehicle breaks down unexpectedly, you need reliable emergency towing services in Birmingham that you can count on. Our 24/7 emergency towing service is designed to provide fast, professional assistance whenever and wherever you need it across Birmingham and the surrounding areas.</p>
                    <p className="text-slate-600 leading-relaxed">We understand that vehicle breakdowns can happen at the most inconvenient times, which is why our towing service Birmingham team is available around the clock. Whether you're stranded on the motorway, in a car park, or on a residential street, our experienced drivers will arrive quickly with the right equipment to safely tow your vehicle to your desired location.</p>
                    <p className="text-slate-600 leading-relaxed">Our emergency towing Birmingham service covers all types of vehicles, from cars and vans to trucks and motorcycles. We use modern towing equipment and techniques to ensure your vehicle is transported safely without causing any additional damage. With competitive pricing and no hidden fees, you can trust Birmingham Towing for all your emergency towing needs.</p>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"><Phone className="h-4 w-4" />Call for Emergency Towing</a>
                  </>
                )}
                {expandedService === "Roadside Assistance" && (
                  <>
                    <h2 className="text-3xl font-black text-slate-900">Roadside Assistance Birmingham</h2>
                    <p className="text-slate-600 leading-relaxed">Don't let a flat tire or dead battery ruin your day. Our roadside assistance Birmingham service provides comprehensive help for common vehicle issues, getting you back on the road quickly and safely.</p>
                    <p className="text-slate-600 leading-relaxed">Our roadside assistance team in Birmingham offers a wide range of services including battery jump starts, tire changes, fuel delivery, and minor repairs. We understand that time is critical when you're stranded, which is why we prioritize fast response times across Birmingham and the West Midlands.</p>
                    <p className="text-slate-600 leading-relaxed">Whether you have a flat tire, dead battery, or run out of fuel, our professional roadside assistance Birmingham service is here to help. We bring the tools and expertise needed to resolve common vehicle issues on the spot, saving you time and money compared to traditional towing services.</p>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"><Phone className="h-4 w-4" />Get Roadside Help</a>
                  </>
                )}
                {expandedService === "Car Recovery" && (
                  <>
                    <h2 className="text-3xl font-black text-slate-900">Car Recovery Services Birmingham</h2>
                    <p className="text-slate-600 leading-relaxed">Accidents and breakdowns can happen anywhere, and our car recovery Birmingham service ensures your vehicle is safely recovered and transported, no matter the circumstances.</p>
                    <p className="text-slate-600 leading-relaxed">Our car recovery team in Birmingham specializes in handling complex recovery situations, including vehicles that have been involved in accidents, rolled over, or become stuck in difficult terrain. We use specialized equipment and techniques to recover vehicles safely without causing additional damage.</p>
                    <p className="text-slate-600 leading-relaxed">From motorway incidents to off-road recoveries, our professional car recovery Birmingham service is equipped to handle any situation. We work closely with insurance companies and provide detailed documentation for claims, making the recovery process as smooth as possible for our customers.</p>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"><Phone className="h-4 w-4" />Call for Car Recovery</a>
                  </>
                )}
                {expandedService === "Flatbed Towing" && (
                  <>
                    <h2 className="text-3xl font-black text-slate-900">Flatbed Towing Birmingham</h2>
                    <p className="text-slate-600 leading-relaxed">For vehicles that require extra care during transport, our flatbed towing Birmingham service provides the safest and most secure towing option available.</p>
                    <p className="text-slate-600 leading-relaxed">Flatbed towing is ideal for luxury vehicles, low-clearance cars, motorcycles, and vehicles with damaged drivetrains. Our flatbed tow trucks in Birmingham feature hydraulic lift systems that gently load your vehicle onto a flat platform, eliminating any risk of damage during transport.</p>
                    <p className="text-slate-600 leading-relaxed">Whether you're transporting a classic car, sports vehicle, or simply want the peace of mind that comes with flatbed towing, our professional flatbed towing Birmingham service delivers your vehicle safely to its destination. We cover Birmingham and surrounding areas with reliable, insured service.</p>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"><Phone className="h-4 w-4" />Book Flatbed Towing</a>
                  </>
                )}
                {expandedService === "Jump Start Service" && (
                  <>
                    <h2 className="text-3xl font-black text-slate-900">Jump Start Service Birmingham</h2>
                    <p className="text-slate-600 leading-relaxed">A dead battery doesn't have to ruin your plans. Our jump start service Birmingham provides fast, professional battery assistance to get you back on the road quickly.</p>
                    <p className="text-slate-600 leading-relaxed">Our jump start technicians in Birmingham carry portable jump start equipment and battery chargers to revive your vehicle's battery on the spot. We can also test your battery and charging system to help prevent future issues.</p>
                    <p className="text-slate-600 leading-relaxed">Available 24/7 across Birmingham, our jump start service is perfect for emergency situations or when you simply need a quick boost. We use professional equipment to ensure safe and effective battery assistance without damaging your vehicle's electrical system.</p>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"><Phone className="h-4 w-4" />Jump Start Now</a>
                  </>
                )}
                {expandedService === "Tire Change" && (
                  <>
                    <h2 className="text-3xl font-black text-slate-900">Tire Change Service Birmingham</h2>
                    <p className="text-slate-600 leading-relaxed">Flat tires happen when you least expect them. Our tire change service Birmingham provides fast, professional assistance to get you safely back on the road.</p>
                    <p className="text-slate-600 leading-relaxed">Our roadside assistance team in Birmingham is equipped with the tools and expertise needed to change tires quickly and safely. We can also inspect your spare tire and provide advice on tire maintenance and replacement options.</p>
                    <p className="text-slate-600 leading-relaxed">Whether you have a puncture, blowout, or simply need your spare tire changed, our tire change service Birmingham is available 24/7. We work in all weather conditions and locations across Birmingham to ensure you're never stranded with a flat tire.</p>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"><Phone className="h-4 w-4" />Change Tire Now</a>
                  </>
                )}
                {expandedService === "Car Lockout" && (
                  <>
                    <h2 className="text-3xl font-black text-slate-900">Car Lockout Service Birmingham</h2>
                    <p className="text-slate-600 leading-relaxed">Locked your keys in your car? Our car lockout service Birmingham provides fast, professional assistance to get you back inside your vehicle without damage.</p>
                    <p className="text-slate-600 leading-relaxed">Our experienced technicians in Birmingham use specialized tools and techniques to unlock vehicles quickly and safely. We can handle all types of car locks, from traditional keys to modern keyless entry systems.</p>
                    <p className="text-slate-600 leading-relaxed">Available 24/7 across Birmingham, our car lockout service prioritizes speed and discretion. We understand how frustrating it can be to be locked out of your vehicle, and we work efficiently to resolve the situation with minimal stress.</p>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"><Phone className="h-4 w-4" />Unlock My Car</a>
                  </>
                )}
                {expandedService === "Fuel Delivery" && (
                  <>
                    <h2 className="text-3xl font-black text-slate-900">Fuel Delivery Service Birmingham</h2>
                    <p className="text-slate-600 leading-relaxed">Run out of fuel at an inconvenient time? Our fuel delivery service Birmingham brings petrol or diesel directly to your location, getting you back on the road quickly.</p>
                    <p className="text-slate-600 leading-relaxed">Our fuel delivery team in Birmingham carries both petrol and diesel and can deliver fuel anywhere in the city. We understand that running out of fuel can be both inconvenient and potentially dangerous, which is why we prioritize fast response times.</p>
                    <p className="text-slate-600 leading-relaxed">Available 24/7, our fuel delivery service Birmingham is perfect for emergency situations or when you're simply caught short. We deliver the exact amount of fuel you need, with transparent pricing and no hidden fees.</p>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"><Phone className="h-4 w-4" />Deliver Fuel Now</a>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <ServiceArea />

      {/* Service Areas CTA */}
      <section className="py-20 px-4 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-slate-200 bg-[#F5F5F5] p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-[#111111] font-semibold uppercase tracking-[0.35em] text-sm mb-3">Coverage</p>
                <h2 className="text-3xl sm:text-4xl font-black text-[#111111] mb-4">
                  View Our Complete Service Areas
                </h2>
                <p className="text-[#333333] leading-relaxed max-w-2xl">
                  We cover Birmingham and the surrounding West Midlands with fast, 24/7 response. Check if your location is included in our service zone or arrange special dispatch assistance.
                </p>
              </div>
              <a
                href="/service-areas"
                className="inline-flex items-center gap-2 rounded-full bg-[#E11D2E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#E11D2E]/20 transition hover:bg-[#C81A28] whitespace-nowrap"
              >
                View Service Areas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0F172A] text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            Need a Tow Truck Now?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Our professional team is ready to help 24/7 across Birmingham.
          </p>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 rounded-full bg-[#EF4444] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  );
}

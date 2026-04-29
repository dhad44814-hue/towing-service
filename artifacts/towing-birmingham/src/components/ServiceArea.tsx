import { Link } from "wouter";
import { MapPin, Truck, ArrowRight } from "lucide-react";

const areas = [
  { city: "Hoover, AL", href: "/service/hoover" },
  { city: "Vestavia Hills, AL", href: "/service/vestavia-hills" },
  { city: "Homewood, AL", href: "/service/homewood" },
  { city: "Mountain Brook, AL", href: "/service/mountain-brook" },
  { city: "Trussville, AL", href: "/service/trussville" },
  { city: "Gardendale, AL", href: "/service/gardendale" },
  { city: "Fultondale, AL", href: "/service/fultondale" },
  { city: "Irondale, AL", href: "/service/irondale" },
  { city: "Center Point, AL", href: "/service/center-point" },
  { city: "Bessemer, AL", href: "/service/bessemer" }
];

export default function ServiceArea() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F5F5F5] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E11D2E]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#111111]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-[#E11D2E]/10 text-[#E11D2E] text-xs font-bold uppercase tracking-[0.35em]">
              Service Coverage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] mb-4">
            Areas We Serve Near Birmingham, Alabama
          </h2>
          <p className="mt-4 text-[#333333] max-w-2xl mx-auto text-lg leading-7">
            We proudly provide 24/7 towing and roadside assistance services across Birmingham and surrounding areas. Our fast-response team is ready to help you wherever you are.
          </p>
        </div>

        {/* Modern Animated Service Area Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
          {areas.map((area, index) => (
            <Link
              key={area.city}
              href={area.href}
              className="group relative rounded-xl bg-white border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer"
              aria-label={`Towing service ${area.city}`}
            >
              {/* Animated gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E11D2E]/0 to-[#E11D2E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Top accent line animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E11D2E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-[#E11D2E]/20 via-transparent to-transparent"></div>

              {/* Card Content */}
              <div className="relative z-10 p-6">
                {/* Top Icon Section */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#E11D2E]/10 to-[#E11D2E]/5 text-[#E11D2E] group-hover:from-[#E11D2E] group-hover:to-[#C81A28] group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 group-hover:bg-[#E11D2E] group-hover:text-white transition-all duration-300 transform group-hover:rotate-45 opacity-0 group-hover:opacity-100">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Badge */}
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-400 group-hover:text-[#E11D2E] transition-colors duration-300 mb-3">
                  Service Area
                </p>

                {/* Heading */}
                <h3 className="text-lg font-black text-[#111111] mb-3 group-hover:text-[#E11D2E] transition-colors duration-300">
                  Towing service
                  <br />
                  <span className="text-xl">{area.city}</span>
                </h3>

                {/* Description */}
                <p className="text-[#333333] text-sm leading-6 group-hover:text-[#111111] transition-colors duration-300">
                  Fast local towing service in {area.city}, serving Birmingham and nearby communities.
                </p>

                {/* CTA with animation */}
                <div className="mt-5 flex items-center gap-2 text-[#E11D2E] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  <span>Get Service</span>
                  <Truck className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>

              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-[#E11D2E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
            </Link>
          ))}
        </div>

        {/* Embedded Map */}
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <iframe
            title="Birmingham Alabama Service Area Map"
            src="https://maps.google.com/maps?q=Birmingham%2C%20AL&t=&z=10&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

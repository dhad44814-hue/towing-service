import { Link } from "wouter";
import { MapPin, Truck, ArrowRight } from "lucide-react";

const areas = [
  { city: "Birmingham City Centre", description: "Central Birmingham towing services" },
  { city: "Sutton Coldfield", description: "North Birmingham area coverage" },
  { city: "Solihull", description: "East Birmingham suburbs" },
  { city: "Wolverhampton", description: "West Midlands region" },
  { city: "Coventry", description: "Nearby major city support" },
  { city: "West Bromwich", description: "Black Country area" },
  { city: "Dudley", description: "Dudley and surrounding areas" },
  { city: "Stourbridge", description: "Stourbridge service area" },
  { city: "Rubery", description: "Rubery and Rednal" },
  { city: "Solihull North", description: "North Solihull coverage" }
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
            Areas We Serve Near Birmingham
          </h2>
          <p className="mt-4 text-[#333333] max-w-2xl mx-auto text-lg leading-7">
            We proudly provide 24/7 towing and roadside assistance services across Birmingham and surrounding areas. Our fast-response team is ready to help you wherever you are.
          </p>
        </div>

        {/* Service Area List */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-16">
          {areas.map((area, index) => (
            <div
              key={area.city}
              className="group relative rounded-xl bg-white border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Animated gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E11D2E]/0 to-[#E11D2E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Top accent line animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E11D2E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Card Content */}
              <div className="relative z-10 p-6">
                {/* Top Icon Section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#E11D2E]/10 to-[#E11D2E]/5 text-[#E11D2E] group-hover:from-[#E11D2E] group-hover:to-[#C81A28] group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                {/* Heading */}
                <h3 className="text-lg font-black text-[#111111] mb-2 group-hover:text-[#E11D2E] transition-colors duration-300">
                  {area.city}
                </h3>

                {/* Description */}
                <p className="text-[#333333] text-sm leading-5 group-hover:text-[#111111] transition-colors duration-300">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Map */}
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <iframe
            title="Birmingham Service Area Map"
            src="https://maps.google.com/maps?q=Birmingham%2C%20UK&t=&z=10&ie=UTF8&iwloc=&output=embed"
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

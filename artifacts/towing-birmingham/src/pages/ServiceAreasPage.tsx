import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Seo from "@/components/Seo";
import { Phone, MapPin, Truck, Clock, Shield, CheckCircle } from "lucide-react";

const PHONE = "+14386195732";

const serviceAreas = [
  { name: "Birmingham City Centre", desc: "Fast response across the city hub with priority dispatch." },
  { name: "Solihull", desc: "Coverage across Solihull borough and surrounding neighbourhoods." },
  { name: "Wolverhampton", desc: "24/7 towing and assistance throughout Wolverhampton." },
  { name: "Coventry", desc: "Extended service area including Coventry and nearby towns." },
  { name: "Walsall", desc: "Professional towing services available in Walsall." },
  { name: "Dudley", desc: "Rapid response dispatch across Dudley borough." },
  { name: "West Bromwich", desc: "Comprehensive coverage of West Bromwich and West Midlands." },
  { name: "Sutton Coldfield", desc: "Fast local response for Sutton Coldfield residents." },
  { name: "Erdington", desc: "24/7 emergency towing available in Erdington." },
  { name: "Kings Heath", desc: "South Birmingham coverage including Kings Heath." },
  { name: "Moseley", desc: "Professional roadside assistance in Moseley area." },
  { name: "Harborne", desc: "Fast towing and roadside help for Harborne residents." }
];

export default function ServiceAreasPage() {

  return (
    <main>
      <Seo
        title="Service Areas | Birmingham Towing"
        description="Find out if Birmingham Towing covers your area. We provide 24/7 towing and roadside assistance across Birmingham, West Midlands, and surrounding regions."
        canonical="https://birminghamtowing.co.uk/service-areas"
        url="https://birminghamtowing.co.uk/service-areas"
      />
      <Navbar />

      <HeroSection
        title="Service Areas We Cover"
        subtitle="Fast, Reliable Towing & Roadside Assistance Across Birmingham & West Midlands"
        description="Find out if Birmingham Towing covers your area. We provide 24/7 towing and roadside assistance across Birmingham, West Midlands, and surrounding regions."
        badgeText="🚨 24/7 Emergency Towing • 30-Min Response"
        primaryButtonText="Call Now"
        secondaryButtonText="View All Services"
      />

      {/* Intro Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Coverage Across the West Midlands</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Birmingham Towing provides comprehensive 24/7 emergency towing and roadside assistance across Birmingham and the wider West Midlands region. Whether you're stranded in the city centre, a suburban neighbourhood, or a nearby town, our fast local dispatch ensures help arrives when you need it most.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We maintain strategically positioned response teams throughout our service areas, enabling us to deliver fast, professional assistance with minimal wait times. Every area we cover receives the same high standard of service, professional drivers, and transparent pricing.
          </p>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-[#111111] font-semibold uppercase tracking-[0.35em] text-sm mb-3">Areas</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111]">
              Locations We Serve
            </h2>
            <p className="mt-4 text-[#333333] max-w-2xl mx-auto text-base sm:text-lg leading-8">
              Fast, professional response across all these areas and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#E11D2E]/20"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F5F5] mb-6">
                  <MapPin className="h-8 w-8 text-[#333333]" />
                </div>
                <h3 className="text-xl font-semibold text-[#111111] mb-3 group-hover:text-[#E11D2E] transition-colors">
                  {area.name}
                </h3>
                <p className="text-[#333333] leading-relaxed mb-6">{area.desc}</p>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#111111] bg-transparent px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
                >
                  <Truck className="h-4 w-4" />
                  Call for Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Features */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
              Why Coverage Matters
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-8">
              Our wide service area ensures fast response regardless of where your breakdown occurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F5F5] mb-4">
                <Clock className="h-8 w-8 text-[#333333]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">Fast Local Response</h3>
              <p className="text-[#333333] leading-relaxed">
                With teams positioned across all areas, we guarantee 30-minute average response times throughout our service region.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F5F5] mb-4">
                <Shield className="h-8 w-8 text-[#333333]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">24/7 Coverage</h3>
              <p className="text-[#333333] leading-relaxed">
                Round-the-clock dispatch and response means help is available anytime, day or night, across all our service areas.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F5F5] mb-4">
                <CheckCircle className="h-8 w-8 text-[#333333]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">Professional Service</h3>
              <p className="text-[#333333] leading-relaxed">
                Experienced, fully trained drivers deliver consistent, professional service in every location we cover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Coverage Info */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8">Beyond Our Main Areas</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Extended Service Region</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                While the above areas represent our core coverage zone, we also service surrounding towns and villages throughout the wider West Midlands region. If your area isn't listed above, please call us to confirm coverage.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Special Dispatch</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                For locations outside our standard service areas, our dispatch team can arrange specialist recovery services and long-distance towing. Many have been successfully completed with advance planning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Motorway Assistance</h3>
              <p className="text-slate-600 leading-relaxed">
                We provide rapid response on major motorways and A-roads throughout the West Midlands, including the M5, M6, M42, and major A-roads, with professional recovery and safe vehicle transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0F172A] text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            Don't See Your Area?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Call us to confirm if we cover your location or arrange special dispatch assistance.
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
    </main>
  );
}

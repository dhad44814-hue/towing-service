import { Link, useRoute } from "wouter";
import { Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";

const PHONE = "+14386195732";

const CITY_MAP: Record<string, string> = {
  hoover: "Hoover, AL",
  "vestavia-hills": "Vestavia Hills, AL",
  homewood: "Homewood, AL",
  "mountain-brook": "Mountain Brook, AL",
  trussville: "Trussville, AL",
  gardendale: "Gardendale, AL",
  fultondale: "Fultondale, AL",
  irondale: "Irondale, AL",
  "center-point": "Center Point, AL",
  bessemer: "Bessemer, AL"
};

export default function CityServicePage() {
  const [match, params] = useRoute("/service/:city");
  const citySlug = ((params as { city?: string })?.city) ?? "";
  const cityName = citySlug ? CITY_MAP[citySlug] : undefined;

  const title = cityName
    ? `Towing Service ${cityName} | Birmingham Towing`
    : "Towing Service Area | Birmingham Towing";

  const description = cityName
    ? `24/7 towing service in ${cityName} with fast emergency towing, roadside assistance, and local support near Birmingham, AL.`
    : "Towing service near Birmingham, Alabama with reliable local support and fast response.";

  const canonical = cityName
    ? `https://birminghamtowing.co.uk/service/${citySlug}`
    : "https://birminghamtowing.co.uk/service-area";

  if (!match || !cityName) {
    return (
      <main>
        <Navbar />
        <section className="bg-[#0F172A] text-white py-28">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-black">City Service Area Not Found</h1>
            <p className="mt-6 text-lg text-slate-300">
              We currently serve Birmingham and the surrounding cities in Alabama. Please return to the home page or explore our main service areas.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[#E11D2E] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#C81A28]"
              >
                Return Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        url={canonical}
      />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://birminghamtowing.co.uk/" },
          { name: "Service Areas", url: "https://birminghamtowing.co.uk/service-areas" },
          { name: cityName, url: canonical },
        ]}
      />
      <Navbar />

      <section className="bg-[#0F172A] text-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_auto] lg:items-center">
            <div>
              <p className="text-[#E11D2E] font-semibold uppercase tracking-[0.35em] text-sm mb-4">
                Local Towing Service
              </p>
              <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">
                Towing Service {cityName}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Fast, 24/7 towing and roadside assistance in {cityName}. Our Birmingham team is ready to respond quickly to vehicle breakdowns, lockouts, fuel delivery needs, and emergency towing across the greater Birmingham area.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#EF4444] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#ef4444]/20 transition hover:bg-[#dc2626]"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
                <Link
                  href="/service-areas"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  View Full Coverage
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/10">
              <div className="flex items-center gap-3 text-slate-100 mb-5">
                <MapPin className="h-5 w-5 text-[#E11D2E]" />
                <p className="text-sm uppercase tracking-[0.35em]">Service Area</p>
              </div>
              <div className="space-y-4 text-slate-200">
                <p className="text-sm uppercase tracking-[0.35em] text-[#E11D2E]">Serving Nearby Cities</p>
                <p className="text-lg font-semibold">{cityName} & surrounding communities</p>
                <p className="leading-7 text-slate-300">
                  Same-day towing and roadside assistance for Hoover, Vestavia Hills, Homewood, Mountain Brook, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[#111111] font-semibold uppercase tracking-[0.35em] text-sm mb-3">Towing Service Near Birmingham, AL</p>
            <h2 className="text-3xl font-black text-[#111111] mb-6">Why Local Towing Service {cityName} Is Better</h2>
            <p className="text-[#333333] leading-relaxed mb-6">
              Our team knows the roads and neighborhoods around {cityName}, so we can reach you faster than non-local providers. We serve key local corridors, business parks, residential areas, and busy highways with experienced drivers and modern tow trucks.
            </p>
            <p className="text-[#333333] leading-relaxed mb-6">
              Whether you need emergency towing, car recovery, fuel delivery, or a jump start, our local Birmingham towing service delivers dependable help at competitive rates.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[
              "Emergency Towing",
              "Roadside Assistance",
              "Car Recovery",
              "Fuel Delivery",
              "Jump Starts",
              "Car Lockout Assistance"
            ].map((service) => (
              <div key={service} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#E11D2E]/20">
                <h3 className="text-xl font-semibold text-[#111111] mb-3">{service}</h3>
                <p className="text-[#333333] leading-relaxed">
                  Trusted local service in {cityName} for fast roadside support and safe towing when you need it most.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

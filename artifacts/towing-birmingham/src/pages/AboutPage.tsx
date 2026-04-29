import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ShieldCheck, Clock, Star, MapPin } from "lucide-react";
import StickyCTA from "@/components/StickyCTA";

export default function AboutPage() {

  return (
    <main>
      <Seo
        title="About Birmingham Towing | Trusted Tow Truck Service"
        description="Discover Birmingham Towing: trusted local tow truck service offering 24/7 emergency towing, roadside assistance, and fast vehicle recovery in Birmingham."
        canonical="https://birminghamtowing.co.uk/about-us"
        url="https://birminghamtowing.co.uk/about-us"
      />
      <Navbar />

      <HeroSection
        title="Local tow truck experts trusted across Birmingham."
        subtitle="Professional Recovery Team • Fast Response Fleet"
        description="We are a professional recovery team with a fast-response fleet serving Birmingham and the West Midlands. From emergency towing to roadside help, every request is handled with clear pricing, friendly communication, and dependable arrival times."
        badgeText="🚨 24/7 Emergency Towing • 30-Min Response"
        primaryButtonText="Call Now"
        secondaryButtonText="View Our Services"
      />

      {/* About Cards */}
      <section className="bg-[#0F172A] text-white -mt-16 relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
              <div className="flex items-center gap-3 text-[#E11D2E]">
                <ShieldCheck className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.25em]">Trusted service</p>
              </div>
              <p className="mt-4 text-2xl font-black text-white">Fully verified drivers</p>
              <p className="mt-3 text-sm text-slate-400">We deliver safe, courteous service with every tow.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
              <div className="flex items-center gap-3 text-[#E11D2E]">
                <Clock className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.25em]">Always available</p>
              </div>
              <p className="mt-4 text-2xl font-black text-white">24/7 rapid dispatch</p>
              <p className="mt-3 text-sm text-slate-400">Our team is ready whenever you need an urgent tow.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
              <div className="flex items-center gap-3 text-[#E11D2E]">
                <Star className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.25em]">Highly rated</p>
              </div>
              <p className="mt-4 text-2xl font-black text-white">5-star customer care</p>
              <p className="mt-3 text-sm text-slate-400">Fast support with honest quotes and no surprise charges.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/20">
              <div className="flex items-center gap-3 text-[#E11D2E]">
                <MapPin className="h-5 w-5" />
                <p className="text-sm font-semibold uppercase tracking-[0.25em]">Local coverage</p>
              </div>
              <p className="mt-4 text-2xl font-black text-white">Birmingham & West Midlands</p>
              <p className="mt-3 text-sm text-slate-400">Strategically positioned drivers for rapid response across the city.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              When your car breaks down, it rarely happens at a convenient time. It might be late at night, during heavy traffic, or in the middle of a busy day. That's exactly why we built Emergency Towing Birmingham—to be a reliable team people can count on when they need fast help. We provide dependable and professional emergency towing in Birmingham, making sure drivers are never left stranded without support.
            </p>
            <p>
              We are a local towing company based in Birmingham, Alabama, and we take pride in helping our community every single day. Over time, we've earned trust by showing up quickly, doing the job properly, and treating every customer with respect. Whether you need a tow truck in Birmingham AL for an unexpected breakdown or roadside assistance Birmingham drivers can rely on, we're always ready to respond.
            </p>
            <p>
              Our team understands the roads, traffic patterns, and challenges drivers face across Birmingham and nearby areas. Because we operate locally, we can reach you faster than many larger companies. When people search for towing near me Birmingham or need immediate help, they choose us because we deliver both speed and reliability.
            </p>
            <p>
              We handle a wide range of situations, from simple roadside issues to more serious vehicle recovery needs. Our services include emergency towing Birmingham drivers trust, roadside assistance Birmingham services, jump starts, flat tire changes, car lockout help, and fuel delivery. Every job is handled with urgency and care because we know how stressful these situations can be.
            </p>
            <p>
              One of the things that sets us apart is our fast response time. Waiting on the roadside can feel frustrating and unsafe, especially in difficult conditions. That's why we aim to reach most locations quickly and efficiently. If you need a 24/7 towing Birmingham service, our team is always available and ready to help without unnecessary delays.
            </p>
            <p>
              We also focus on professionalism in everything we do. From the moment you call us to the completion of the job, you'll notice clear communication and a respectful approach. We treat your vehicle with care and handle every situation with attention to detail. Our goal is to provide a towing service Birmingham AL drivers can truly trust.
            </p>
            <p>
              Safety is always our top priority. We use reliable equipment and follow proper procedures to ensure your vehicle is transported securely. Whether it's a short-distance tow or a full recovery, we make sure everything is done safely and correctly. When you choose our roadside assistance Birmingham service, you're choosing a team that values both your safety and your vehicle.
            </p>
            <p>
              We also believe in keeping things simple and honest. Many people worry about hidden costs or unclear pricing when calling a towing company. With us, you'll always get straightforward information and transparent service. We focus on making a stressful situation easier by being clear, fair, and dependable.
            </p>
            <p>
              Our service area covers Birmingham and surrounding locations, including Hoover, Vestavia Hills, Homewood, and nearby communities. Because we are a local towing service Birmingham AL drivers rely on, we are able to respond quickly and provide consistent service across the region.
            </p>
            <p>
              People continue to choose us not just because we offer emergency towing Birmingham services, but because we care about the experience we provide. We understand that every call comes from someone dealing with a problem, and we take that seriously. Our team works hard to make sure every customer feels supported and confident that help is on the way.
            </p>
            <p>
              As we continue to grow, our focus remains on improving our service, expanding our reach, and maintaining the trust we've built in the community. We aim to be known as the best towing service Birmingham has to offer by consistently delivering reliable and professional results.
            </p>
            <p>
              If you ever find yourself needing roadside assistance Birmingham or a fast tow truck Birmingham AL, you can count on us to be there. We're available around the clock, ready to respond when you need help the most. Our goal is simple—get you back on the road quickly, safely, and without added stress.
            </p>
          </div>
        </div>
      </section>
      <Footer />
      <StickyCTA />
    </main>
  );
}

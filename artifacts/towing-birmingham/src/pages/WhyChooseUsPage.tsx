import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import StickyCTA from "@/components/StickyCTA";

export default function WhyChooseUsPage() {
  return (
    <main>
      <Seo
        title="Why Choose Birmingham Towing | Trusted Tow Truck Service"
        description="Discover why Birmingham Towing is the top choice for towing services. 30-min response time, 10+ years experience, 5-star rated, 24/7 available service."
        canonical="https://birminghamtowing.co.uk/why-choose-us"
        url="https://birminghamtowing.co.uk/why-choose-us"
      />
      <Navbar />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Why Choose Us", href: "/why-choose-us", current: true }
        ]}
      />

      <HeroSection
        title="Why Birmingham drivers trust us for every tow."
        subtitle="Proven Experience • Premium Service • Local Excellence"
        description="We've been serving Birmingham for over a decade with fast response times, professional drivers, and transparent pricing. Here's what makes us different."
        badgeText="⭐ 4.9/5 Stars • 10+ Years Local Service"
        primaryButtonText="Call Now"
        secondaryButtonText="View Services"
      />

      {/* Why Choose Us Main Section */}
      <WhyChooseUs />

      {/* Additional Benefits Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto text-lg">
              We combine speed, professionalism, and customer care to deliver the best towing experience in Birmingham.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E11D2E] to-[#C81A28] rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                🚗
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">Modern Fleet</h3>
              <p className="text-[#333333]">
                Our tow trucks are regularly maintained and equipped with the latest technology to handle any situation safely.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E11D2E] to-[#C81A28] rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                👨‍💼
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">Expert Team</h3>
              <p className="text-[#333333]">
                All our drivers are fully trained, licensed, and insured with years of experience in vehicle recovery and towing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E11D2E] to-[#C81A28] rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">Transparent Pricing</h3>
              <p className="text-[#333333]">
                No hidden fees. We quote upfront and deliver exactly what we promise. Fair rates for every service.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E11D2E] to-[#C81A28] rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                📱
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">Easy Communication</h3>
              <p className="text-[#333333]">
                Real-time updates about your driver's location, estimated arrival time, and service details sent directly to you.
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E11D2E] to-[#C81A28] rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">Fully Insured</h3>
              <p className="text-[#333333]">
                Your vehicle is protected with comprehensive insurance coverage during every tow and recovery operation.
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#E11D2E] to-[#C81A28] rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                ⭐
              </div>
              <h3 className="text-xl font-bold text-[#111111] mb-3">Trusted Reviews</h3>
              <p className="text-[#333333]">
                Hundreds of 5-star customer reviews across Google, Yelp, and Facebook prove our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] text-center mb-12">
            How We Compare
          </h2>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-center font-bold">Birmingham Towing</th>
                  <th className="px-6 py-4 text-center font-bold">Other Services</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-[#111111]">Response Time</td>
                  <td className="px-6 py-4 text-center text-[#E11D2E] font-bold">30 minutes</td>
                  <td className="px-6 py-4 text-center text-[#666]">45-60 minutes</td>
                </tr>
                <tr className="border-t border-slate-200 hover:bg-slate-50 bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-[#111111]">24/7 Available</td>
                  <td className="px-6 py-4 text-center text-[#E11D2E] font-bold">✓ Yes</td>
                  <td className="px-6 py-4 text-center text-[#666]">Limited hours</td>
                </tr>
                <tr className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-[#111111]">Transparent Pricing</td>
                  <td className="px-6 py-4 text-center text-[#E11D2E] font-bold">✓ Upfront Quotes</td>
                  <td className="px-6 py-4 text-center text-[#666]">Hidden charges</td>
                </tr>
                <tr className="border-t border-slate-200 hover:bg-slate-50 bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-[#111111]">Local Knowledge</td>
                  <td className="px-6 py-4 text-center text-[#E11D2E] font-bold">✓ 10+ Years</td>
                  <td className="px-6 py-4 text-center text-[#666]">Chain companies</td>
                </tr>
                <tr className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-[#111111]">Insurance Coverage</td>
                  <td className="px-6 py-4 text-center text-[#E11D2E] font-bold">✓ Full Coverage</td>
                  <td className="px-6 py-4 text-center text-[#666]">Varies</td>
                </tr>
                <tr className="border-t border-slate-200 hover:bg-slate-50 bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-[#111111]">Customer Rating</td>
                  <td className="px-6 py-4 text-center text-[#E11D2E] font-bold">4.9/5 Stars</td>
                  <td className="px-6 py-4 text-center text-[#666]">3-4 Stars</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactSection />

      <Footer />
      <StickyCTA />
    </main>
  );
}

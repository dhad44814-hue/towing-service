import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactPage() {

  return (
    <main>
      <Seo
        title="Contact Birmingham Towing | 24/7 Tow Truck Service"
        description="Contact Birmingham Towing for immediate roadside assistance, emergency towing, fuel delivery, and vehicle recovery. Call now for fast, local support."
        canonical="https://birminghamtowing.co.uk/contact-us"
        url="https://birminghamtowing.co.uk/contact-us"
      />
      <Breadcrumbs
        items={[
          { name: "Home", url: "https://birminghamtowing.co.uk/" },
          { name: "Contact Us", url: "https://birminghamtowing.co.uk/contact-us" },
        ]}
      />
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}

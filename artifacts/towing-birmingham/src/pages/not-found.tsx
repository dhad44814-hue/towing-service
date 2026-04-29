import { Link } from "wouter";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PHONE = "+14386195732";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <div className="min-h-[60vh] flex items-center justify-center bg-black text-white px-4">
        <div className="text-center max-w-lg">
          <div className="text-8xl font-black text-yellow-400 mb-4">404</div>
          <h1 className="text-3xl font-black mb-4">Page Not Found</h1>
          <p className="text-gray-400 mb-8">
            That page doesn't exist — but if you need a tow truck in Birmingham, we're just a phone call away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </a>
            <Link
              href="/"
              className="flex items-center justify-center bg-gray-800 text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

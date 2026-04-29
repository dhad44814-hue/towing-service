import { Phone } from "lucide-react";

const PHONE = "+14386195732";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
        <a
          href={`tel:${PHONE.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-3 w-full rounded-full bg-[#E11D2E] px-6 py-3 text-base font-bold text-white shadow-xl shadow-[#E11D2E]/20 transition hover:bg-[#C81A28] hover:scale-105"
        >
          <Phone className="w-5 h-5" />
          Call Now – 24/7 Emergency
        </a>
      </div>
    </div>
  );
}

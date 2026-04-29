import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";

const SERVICE_OPTIONS = [
  "Emergency Towing",
  "Roadside Assistance",
  "Towing Service",
  "Flatbed Tow",
  "Jump Start",
  "Fuel Delivery",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.section
      id="contact"
      className="bg-slate-100 text-slate-900 py-20"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E11D2E] px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-white">
              <Sparkles className="h-4 w-4" />
              Fast response guaranteed
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-600">Contact our emergency team</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl text-slate-900">Ready to help now — send your request and we’ll dispatch the nearest tow truck immediately.</h2>
              <p className="max-w-2xl text-slate-700 leading-relaxed">
                Complete the form once and we’ll confirm your booking by phone or text in minutes.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
                <div className="flex items-center gap-3 text-sky-700">
                  <Phone className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.3em]">Call now</p>
                </div>
                <p className="mt-4 text-3xl font-black text-slate-900">+14386195732</p>
                <p className="mt-2 text-sm text-slate-600">24/7 Birmingham emergency towing dispatch.</p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40">
                <div className="flex items-center gap-3 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                  <p className="text-sm font-semibold uppercase tracking-[0.3em]">Trusted service</p>
                </div>
                <p className="mt-4 text-3xl font-black text-slate-900">5-Star Support</p>
                <p className="mt-2 text-sm text-slate-600">Local drivers, fast arrival, clear pricing.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_35px_80px_-32px_rgba(15,23,42,0.16)]">
            <div className="mb-8 space-y-2">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-700">Need urgent help?</p>
              <h3 className="text-2xl font-black text-slate-900">Book fast roadside support in seconds</h3>
              <p className="text-slate-700 leading-relaxed">Use the form below to secure same-day dispatch and immediate towing support.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
                  <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Your name" className="text-slate-900" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">Phone number</label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+14386195732" className="text-slate-900" />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email address</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="text-slate-900" />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700">Service required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="flex h-11 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E11D2E]"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option} className="bg-white text-slate-900">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us your location, vehicle type and issue" className="min-h-[150px] text-slate-900" />
              </div>

              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-sm text-slate-700">You’ll receive a confirmation call within minutes. No hidden fees, no waiting in the cold.</p>
                </div>
                <Button type="submit" className="w-full justify-center sm:w-auto bg-[#E11D2E] text-white shadow-lg shadow-[#E11D2E]/20 hover:bg-[#C81A28] transition-transform duration-200 hover:-translate-y-0.5">Send Request</Button>
              </div>
            </form>

            {submitted ? (
              <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
                <div className="flex items-center gap-3 text-emerald-700">
                  <CheckCircle className="h-5 w-5" />
                  <p className="text-sm font-semibold">Request submitted</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-emerald-800">Thanks! Our team will contact you shortly to confirm dispatch and arrival time.</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

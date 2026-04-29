import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial, allTestimonials } from '../data/testimonials';
import { TestimonialCard } from './TestimonialCard';

export default function TestimonialsSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>([]);
  const [scrollOffset, setScrollOffset] = useState(0);
  const VISIBLE_SLIDES = isDesktop ? 3 : 1;
  const CARD_WIDTH = isDesktop ? 300 : 280; // smaller card width for tighter layout
  const TOTAL_WIDTH = allTestimonials.length * CARD_WIDTH;
  const SPEED = 1.2; // faster scroll speed

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Duplicate testimonials 4x for seamless loop
    const duplicated = Array.from({ length: 4 }, () => [...allTestimonials]).flat();
    setTestimonialsList(duplicated);
  }, []);

  const updateScroll = useCallback(() => {
    setScrollOffset((prev) => {
      const newOffset = prev + SPEED;
      if (newOffset >= TOTAL_WIDTH) {
        return 0;
      }
      return newOffset;
    });
    requestAnimationFrame(updateScroll);
  }, [TOTAL_WIDTH]);

  useEffect(() => {
    if (testimonialsList.length > 0) {
      requestAnimationFrame(updateScroll);
    }
  }, [testimonialsList, updateScroll]);

  return (
    <section className="relative py-20 px-4 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#111111] font-semibold uppercase tracking-[0.35em] text-sm mb-3">
            Trusted by 100+ Customers Across Birmingham
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111]">
            What Birmingham Drivers Say About Us
          </h2>
          <p className="mt-4 text-[#333333] max-w-2xl mx-auto leading-8">
            Continuous stream of verified 5⭐ reviews from our satisfied towing clients.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <div className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#111111] shadow-sm border border-slate-200">
            <span className="text-[#E11D2E]">★★★★★</span> 4.9/5 average (100+ reviews)
          </div>
          <div className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#111111] shadow-sm border border-slate-200">
            Verified Google reviews from Birmingham drivers
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FFFFFF] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FFFFFF] to-transparent" />
          
          <div 
            className="flex gap-3"
            style={{
              transform: `translateX(-${scrollOffset}px)`,
              width: `${testimonialsList.length * (CARD_WIDTH + 12)}px`
            }}
          >
            <AnimatePresence>
              {testimonialsList.map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.name}-${idx}`}
                  className="min-w-[280px] md:min-w-[300px] flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 rounded-[24px] border border-slate-200 bg-white px-6 py-8 text-center shadow-sm sm:px-8">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Need Fast Towing Help?</p>
          <h3 className="mt-3 text-2xl font-black text-slate-900">Call now for immediate roadside assistance</h3>
          <a
            href="tel:01210000000"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#E11D2E] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#E11D2E]/20 transition hover:bg-[#C81A28]"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}


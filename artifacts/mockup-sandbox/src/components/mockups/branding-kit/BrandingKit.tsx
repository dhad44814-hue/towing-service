import React from "react";

const HookIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    <path d="M55 10H45v35.32a25 25 0 0 0-20 19.68h10.2A15 15 0 0 1 50 55a15 15 0 0 1 14.8 12.33 15 15 0 0 1-13.72 17.61h-6.08v10h6.08A25 25 0 0 0 75 65a25 25 0 0 0-20-24.68V10z" />
  </svg>
);

export function BrandingKit() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white overflow-y-auto selection:bg-[#FFC107] selection:text-black">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800;900&family=Roboto:wght@400;500;700&display=swap');
          
          .font-display {
            font-family: 'Montserrat', sans-serif;
          }
          .font-body {
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* Header */}
        <div className="border-b border-zinc-800 pb-12">
          <h1 className="font-display text-zinc-500 font-bold tracking-widest uppercase text-sm mb-4">
            Brand Identity Guidelines
          </h1>
          <div className="font-display font-black text-6xl tracking-tight mb-6">
            <span className="text-white">BIRMINGHAM</span>
            <br />
            <span className="text-zinc-400">CAR RECOVERY</span>
          </div>
          <p className="font-body text-xl text-[#FFC107] tracking-wide uppercase font-bold">
            24/7 Fast & Reliable Towing in Birmingham
          </p>
        </div>

        {/* Logo Variations */}
        <section className="space-y-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-zinc-400 border-l-4 border-[#FFC107] pl-4">
            1. Logo Variations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Horizontal */}
            <div className="bg-zinc-900 p-8 rounded-xl flex flex-col items-center justify-center min-h-[240px] border border-zinc-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[#FFC107]">
                  <HookIcon className="w-16 h-16" />
                </div>
                <div className="font-display leading-none">
                  <div className="text-2xl font-black text-white">BIRMINGHAM</div>
                  <div className="text-lg font-bold text-zinc-300">CAR RECOVERY</div>
                </div>
              </div>
              <span className="text-zinc-500 text-sm font-body mt-auto">Horizontal (Primary)</span>
            </div>

            {/* Square/Stacked */}
            <div className="bg-zinc-900 p-8 rounded-xl flex flex-col items-center justify-center min-h-[240px] border border-zinc-800">
              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="text-[#FFC107]">
                  <HookIcon className="w-20 h-20" />
                </div>
                <div className="font-display leading-none text-center">
                  <div className="text-xl font-black text-white">BIRMINGHAM</div>
                  <div className="text-sm font-bold text-zinc-300">CAR RECOVERY</div>
                </div>
              </div>
              <span className="text-zinc-500 text-sm font-body mt-auto">Stacked / Badge</span>
            </div>

            {/* Monochrome */}
            <div className="bg-white p-8 rounded-xl flex flex-col items-center justify-center min-h-[240px]">
              <div className="flex items-center gap-3 mb-6 text-[#0B0B0B]">
                <HookIcon className="w-12 h-12" />
                <div className="font-display leading-none">
                  <div className="text-xl font-black">BIRMINGHAM</div>
                  <div className="text-sm font-bold opacity-80">CAR RECOVERY</div>
                </div>
              </div>
              <span className="text-zinc-500 text-sm font-body mt-auto">Monochrome Light</span>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-zinc-400 border-l-4 border-[#FFC107] pl-4">
            2. Color Palette
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group">
              <div className="h-40 rounded-t-xl bg-[#0B0B0B] border border-zinc-800 border-b-0"></div>
              <div className="bg-zinc-900 p-4 rounded-b-xl border border-zinc-800">
                <div className="font-display font-bold text-lg">Midnight Black</div>
                <div className="font-body text-zinc-400 text-sm mb-2">Primary / Background</div>
                <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-zinc-300">#0B0B0B</code>
              </div>
            </div>

            <div className="group">
              <div className="h-40 rounded-t-xl bg-[#FFC107]"></div>
              <div className="bg-zinc-900 p-4 rounded-b-xl border border-zinc-800">
                <div className="font-display font-bold text-lg">Amber Yellow</div>
                <div className="font-body text-zinc-400 text-sm mb-2">Accent / Highlights</div>
                <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-zinc-300">#FFC107</code>
              </div>
            </div>

            <div className="group">
              <div className="h-40 rounded-t-xl bg-[#FFFFFF]"></div>
              <div className="bg-zinc-900 p-4 rounded-b-xl border border-zinc-800">
                <div className="font-display font-bold text-lg">Pure White</div>
                <div className="font-body text-zinc-400 text-sm mb-2">Text / Light</div>
                <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-zinc-300">#FFFFFF</code>
              </div>
            </div>

            <div className="group">
              <div className="h-40 rounded-t-xl bg-[#FF3B30]"></div>
              <div className="bg-zinc-900 p-4 rounded-b-xl border border-zinc-800">
                <div className="font-display font-bold text-lg">Rescue Red</div>
                <div className="font-body text-zinc-400 text-sm mb-2">Emergency / CTA</div>
                <code className="bg-zinc-800 px-2 py-1 rounded text-sm text-zinc-300">#FF3B30</code>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-zinc-400 border-l-4 border-[#FFC107] pl-4">
            3. Typography Pairing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-900 p-12 rounded-xl border border-zinc-800">
            <div>
              <div className="text-sm font-body text-[#FFC107] mb-2 uppercase tracking-widest font-bold">Heading Font</div>
              <div className="text-3xl font-display font-bold text-white mb-6">Montserrat 700</div>
              <div className="font-display font-bold text-5xl leading-tight text-white mb-4">
                Fast.<br/>Reliable.<br/>24/7.
              </div>
              <div className="font-display text-2xl text-zinc-500">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br/>
                a b c d e f g h i j k l m n o p q r s t u v w x y z<br/>
                0 1 2 3 4 5 6 7 8 9
              </div>
            </div>

            <div>
              <div className="text-sm font-body text-[#FFC107] mb-2 uppercase tracking-widest font-bold">Body Font</div>
              <div className="text-3xl font-body font-normal text-white mb-6">Roboto 400</div>
              <div className="font-body text-lg leading-relaxed text-zinc-300 mb-6">
                When you're stranded on the side of the road, every minute counts. Our fleet of state-of-the-art recovery vehicles is positioned throughout the Greater Birmingham area to ensure rapid response times, no matter the time of day or night.
              </div>
              <div className="font-body text-lg text-zinc-500">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br/>
                a b c d e f g h i j k l m n o p q r s t u v w x y z<br/>
                0 1 2 3 4 5 6 7 8 9
              </div>
            </div>
          </div>
        </section>

        {/* Components & Buttons */}
        <section className="space-y-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-zinc-400 border-l-4 border-[#FFC107] pl-4">
            4. Interface Elements
          </h2>
          
          <div className="bg-zinc-900 p-12 rounded-xl border border-zinc-800 flex flex-col md:flex-row gap-8 items-center justify-around">
            <div className="space-y-4 text-center">
              <div className="text-sm font-body text-zinc-500 mb-4">Primary Action</div>
              <button className="bg-[#FFC107] hover:bg-yellow-400 text-black font-display font-bold px-8 py-4 rounded-lg text-lg transition-colors w-full md:w-auto shadow-lg shadow-yellow-500/10">
                CALL NOW
              </button>
            </div>

            <div className="space-y-4 text-center">
              <div className="text-sm font-body text-zinc-500 mb-4">Emergency Action</div>
              <button className="bg-[#FF3B30] hover:bg-red-600 text-white font-display font-bold px-8 py-4 rounded-lg text-lg transition-colors w-full md:w-auto shadow-lg shadow-red-500/20">
                GET HELP FAST
              </button>
            </div>

            <div className="space-y-4 text-center">
              <div className="text-sm font-body text-zinc-500 mb-4">Secondary / Outline</div>
              <button className="bg-black hover:bg-zinc-900 border-2 border-[#FFC107] text-[#FFC107] font-display font-bold px-8 py-4 rounded-lg text-lg transition-colors w-full md:w-auto">
                LEARN MORE
              </button>
            </div>
          </div>
        </section>

        {/* Favicon */}
        <section className="space-y-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-zinc-400 border-l-4 border-[#FFC107] pl-4">
            5. App Icon / Favicon
          </h2>
          
          <div className="flex gap-8 items-end bg-zinc-900 p-8 rounded-xl border border-zinc-800 w-fit">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-[#FFC107] text-black flex items-center justify-center rounded-xl mx-auto shadow-lg">
                <HookIcon className="w-10 h-10" />
              </div>
              <div className="text-xs font-body text-zinc-500">64x64</div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-8 h-8 bg-[#FFC107] text-black flex items-center justify-center rounded-md mx-auto shadow">
                <HookIcon className="w-5 h-5" />
              </div>
              <div className="text-xs font-body text-zinc-500">32x32</div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-4 h-4 bg-[#FFC107] text-black flex items-center justify-center rounded-sm mx-auto">
                <HookIcon className="w-2.5 h-2.5" />
              </div>
              <div className="text-xs font-body text-zinc-500">16x16</div>
            </div>
          </div>
        </section>

        {/* Context Example */}
        <section className="space-y-8 pb-16">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-zinc-400 border-l-4 border-[#FFC107] pl-4">
            6. Usage Example (Hero Section)
          </h2>
          
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 h-[500px] flex flex-col items-center justify-center text-center px-6">
            {/* Background texture/overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-[#0B0B0B] opacity-50"></div>
            
            <div className="relative z-10 max-w-3xl flex flex-col items-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-[#FFC107]">
                  <HookIcon className="w-16 h-16 md:w-20 md:h-20" />
                </div>
                <div className="font-display leading-none text-left">
                  <div className="text-3xl md:text-4xl font-black text-white">BIRMINGHAM</div>
                  <div className="text-xl md:text-2xl font-bold text-zinc-300">CAR RECOVERY</div>
                </div>
              </div>
              
              <h3 className="font-display font-black text-4xl md:text-6xl text-white mb-6 uppercase tracking-tight">
                Stranded? We've <br/><span className="text-[#FFC107]">Got You Covered.</span>
              </h3>
              
              <p className="font-body text-xl text-zinc-300 mb-10 max-w-xl mx-auto">
                24/7 Fast & Reliable Towing in Birmingham. Professional recovery services arriving in 30 minutes or less.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <button className="bg-[#FFC107] hover:bg-yellow-400 text-black font-display font-bold px-10 py-5 rounded-lg text-xl transition-colors shadow-lg shadow-yellow-500/10">
                  CALL NOW
                </button>
                <button className="bg-[#FF3B30] hover:bg-red-600 text-white font-display font-bold px-10 py-5 rounded-lg text-xl transition-colors shadow-lg shadow-red-500/20">
                  GET HELP FAST
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

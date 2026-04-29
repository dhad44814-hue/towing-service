import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-700/80 bg-slate-950/80 p-10 shadow-glow backdrop-blur-lg">
        <div className="flex flex-col gap-6 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-slate-900/80 px-4 py-2 text-sm uppercase tracking-[0.32em] text-sky-300 shadow-sm ring-1 ring-slate-500/20">
            Admin Panel Ready
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Emergency Towing Admin Dashboard
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Manage leads, service pages, cities, SEO settings, media, and site content for your local towing business. Secure login protects every admin route.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/login" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
              Go to Login
            </Link>
            <a href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500">
              View Dashboard
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

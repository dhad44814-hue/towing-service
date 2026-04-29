'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Activity, FileText, Folder, Image, LayoutDashboard, MapPin, Settings, ShieldCheck, Trash2, Users } from 'lucide-react';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/leads', label: 'Leads / Inquiries', icon: Users },
  { href: '/services', label: 'Services Management', icon: FileText },
  { href: '/cities', label: 'Service Areas', icon: MapPin },
  { href: '/pages', label: 'Pages Content', icon: Folder },
  { href: '/seo', label: 'SEO Settings', icon: Activity },
  { href: '/media', label: 'Media', icon: Image },
  { href: '/settings', label: 'Settings', icon: Settings }
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  }

  return (
    <aside className="w-full border-b border-slate-800/70 bg-slate-950/95 px-4 py-6 shadow-[0_35px_80px_-40px_rgba(15,23,42,0.9)] lg:w-80 lg:border-r lg:border-b-0 lg:px-5 lg:py-8">
      <div className="mb-10 flex items-center gap-3 rounded-3xl bg-slate-900/80 p-4 shadow-sm ring-1 ring-slate-700/70">
        <div className="grid h-11 w-11 place-items-center rounded-3xl bg-sky-500/15 text-sky-300">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Admin</p>
          <h2 className="text-lg font-semibold text-white">Towing Control</h2>
        </div>
      </div>

      <nav className="space-y-1">
        {links.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${
                active ? 'bg-slate-800 text-white shadow-lg shadow-slate-950/20' : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-10 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-4 text-sm text-slate-300">
        <p className="font-semibold text-slate-100">Secure administration</p>
        <p className="mt-2 leading-6 text-slate-400">Only authorized team members can manage leads, pages, SEO, and service areas.</p>
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-3xl border border-slate-700/70 bg-slate-900/90 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-900"
      >
        <Trash2 className="h-4 w-4" />
        Logout
      </button>
    </aside>
  );
}

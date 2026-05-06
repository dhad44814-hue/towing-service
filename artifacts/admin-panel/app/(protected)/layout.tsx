import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Sidebar from '../../components/Sidebar';
import { verifySession } from '../../lib/auth';

export const metadata = {
  title: 'Admin Dashboard'
};

async function requireAdmin() {
  const token = (await cookies()).get('admin_token')?.value;
  if (!token) {
    redirect('/login');
  }

  try {
    verifySession(token);
  } catch {
    redirect('/login');
  }
}

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 border-l border-slate-800/70 bg-slate-950/95 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Towing Admin Panel',
  description: 'Admin dashboard for managing towing service content, leads, SEO and service areas.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

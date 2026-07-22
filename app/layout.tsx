import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import MobileBookingBar from '@/components/MobileBookingBar';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Optician — Independent Eye Care',
  description:
    'Thirty unhurried minutes, one optometrist, and retinal imaging as standard — independent eye care built around you, not a queue.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <SiteHeader />
        <div className="pb-20 lg:pb-0">{children}</div>
        <MobileBookingBar />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientComponentsWrapper from '../components/ClientComponentsWrapper';

// Define monospace font with fallback options and font-display: swap for faster rendering
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
  fallback: ['monospace', 'Courier New', 'Courier'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00FF66',
};

export const metadata: Metadata = {
  title: 'Hari Om Bhardwaj',
  description: 'Backend Developer and ML Engineer',
  icons: {
    icon: '/h-icon.svg',
    shortcut: '/h-icon.svg',
    apple: '/h-icon.svg',
  },
  // Removed viewport and themeColor as they now have a dedicated export
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        {/* Static server-rendered content with optimized rendering */}
        <div className="grid-background" aria-hidden="true"></div>

        {/* Navigation and main content */}
        <Navbar />
        {children}
        <Footer />

        {/* Client components rendered after hydration */}
        <ClientComponentsWrapper />
      </body>
    </html>
  );
}
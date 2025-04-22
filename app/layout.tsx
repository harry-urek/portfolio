import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientComponentsWrapper from '../components/ClientComponentsWrapper';

// Define monospace font with fallback options
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hari Om Bhardwaj',
  description: 'Backend Developer and ML Engineer',
  icons: {
    icon: '/h-icon.svg',
    shortcut: '/h-icon.svg',
    apple: '/h-icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        {/* Static server-rendered content */}
        <div className="grid-background"></div>

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
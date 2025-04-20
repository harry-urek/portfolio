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
  title: 'Developer Portfolio',
  description: 'Professional developer portfolio showcasing skills and projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} min-h-screen`}>
        <div className="grid-background"></div>
        <ClientComponentsWrapper />
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
} 
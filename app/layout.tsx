import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Define font with fallback options
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
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
      <body className={`${inter.className} min-h-screen`}>
        <div className="main-background fixed inset-0 -z-10"></div>
        {children}
      </body>
    </html>
  );
} 
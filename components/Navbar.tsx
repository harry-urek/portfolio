import Link from 'next/link';
import { ExternalLink, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-10 border-b">
      <Link href="/" className="text-2xl font-bold">YourName</Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="#home" className="hover:text-black/70 transition">Home</Link>
        <Link href="#portfolio" className="hover:text-black/70 transition">Portfolio</Link>
        <Link href="#experience" className="hover:text-black/70 transition">Experience</Link>
        <Link href="#blog" className="hover:text-black/70 transition">Blog</Link>
        <div className="relative">
          <Link 
            href="#contact" 
            className="px-4 py-2 bg-black text-white rounded-md flex items-center gap-2 hover:bg-black/80 transition"
          >
            <span>Contact Me</span>
            <ExternalLink size={18} />
          </Link>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            New
          </div>
        </div>
      </div>
      <button className="md:hidden">
        <Menu size={24} />
      </button>
    </nav>
  );
} 
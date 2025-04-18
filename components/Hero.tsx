import Link from 'next/link';
import { Download, ExternalLink, Github, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="py-20 px-6 md:px-10 flex flex-col md:flex-row md:items-center gap-10 md:gap-20">
      <div className="flex-1 space-y-6">
        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm">
          3+ Years Experience
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I&apos;m <span className="border-b-4 border-black">Your Name</span>
        </h1>
        
        <h2 className="text-2xl font-medium">Full Stack Developer</h2>
        
        <p className="text-gray-700 max-w-2xl">
          I&apos;m a Full Stack Developer focused on building SaaS products and AI-powered
          apps. I help startups turn their ideas into real, scalable products. I work on
          both frontend and backend using tools like Next.js, Tailwind CSS, and cloud
          services to build fast, reliable, and user-friendly experiences.
        </p>
        
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-black rounded-full">
              <Github className="text-white" size={20} />
            </div>
            <span className="font-bold">20+</span>
            <span className="text-gray-500">Projects</span>
          </div>
           
          <div className="flex items-center gap-2">
            <div className="p-2 bg-black rounded-full">
              <Users className="text-white" size={20} />
            </div>
            <span className="font-bold">15+</span>
            <span className="text-gray-500">Clients</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <Link 
            href="/cv.pdf" 
            className="px-5 py-3 bg-black text-white rounded-md flex items-center gap-2 hover:bg-black/80 transition"
          >
            <Download size={18} />
            <span>Download CV</span>
          </Link>
          
          <Link 
            href="#contact" 
            className="px-5 py-3 border border-black rounded-md flex items-center gap-2 hover:bg-gray-50 transition"
          >
            <span>Let&apos;s Talk</span>
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
      
      <div className="flex-1 relative">
        <div className="relative aspect-square max-w-[500px] mx-auto md:ml-auto overflow-hidden">
          <div className="absolute inset-0 border-8 border-black rounded-2xl bg-black transform rotate-3 z-10"></div>
          <div className="absolute inset-0 bg-white border-8 border-black rounded-2xl z-20 overflow-hidden">
            <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Profile Image</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-black text-white text-sm px-3 py-1 rounded-full z-30">
              3+ Years
            </div>
          </div>
          <div className="absolute top-5 left-5 bg-white p-2 rounded-lg shadow-lg z-30">
            <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center gap-1">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
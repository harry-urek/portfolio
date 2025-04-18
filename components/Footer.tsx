import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-10">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">YourName</h2>
          <p className="max-w-md text-gray-400">
            Professional full-stack developer specializing in building modern web applications.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Connect</h3>
          <div className="flex gap-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Twitter size={20} />
            </a>
            <a href="mailto:you@example.com" 
               className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-8 pt-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} YourName. All rights reserved.
      </div>
    </footer>
  );
} 
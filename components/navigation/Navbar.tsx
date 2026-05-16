"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all ${scrolled ? "glassmorphism shadow-lg border-white/10" : "bg-transparent"}`}>
          <a href="#" className="font-sora font-bold text-xl tracking-tighter">
            SJ<span className="text-ai-primary">.</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-slate-300 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href={portfolioData.contact.resumeUrl} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition-all">
              Resume
            </a>
            <a href="#contact" className="px-5 py-2 rounded-full bg-ai-primary hover:bg-ai-primary/80 text-white text-sm font-medium transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 bg-[#F8FAFC] text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="#hero" className="inline-block">
            <Image
              src="/sajida-javed-brand-logo.webp"
              alt="Sajida Javed Logo"
              width={150}
              height={36}
              className="h-7 w-auto object-contain"
            />
          </a>
          <span className="hidden sm:inline text-slate-300">|</span>
          <p className="text-sm text-slate-500 font-medium font-sans">
            © {new Date().getFullYear()} Sajida Javed — Full Stack Laravel Developer & Backend Engineer.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-600 transition-colors" title="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-600 transition-colors" title="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-purple-600 transition-colors" title="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

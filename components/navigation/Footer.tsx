import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 bg-[#F8FAFC] text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-sm text-slate-500 font-medium font-sans">
          © {new Date().getFullYear()} Sajida Javed. Built with clean, recruiter-optimized engineering.
        </p>
        
        <div className="flex items-center gap-5">
          <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors" title="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors" title="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-emerald-600 transition-colors" title="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

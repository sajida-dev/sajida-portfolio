import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-[#0B1120] text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Sajida Javed. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.portfolio} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

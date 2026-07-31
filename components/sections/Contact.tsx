"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Github, Linkedin, FileText, Copy, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-xl mx-auto px-4 relative z-10 text-center">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-slate-900 font-bold tracking-tight text-[32px] md:text-[36px]">
            Let's Connect
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.7] mt-1.5 max-w-md mx-auto">
            Open to Full-Stack and Backend Engineering opportunities. Reach out via email or any of my professional channels.
          </p>
        </div>

        {/* Centered Direct Channel Card */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md space-y-8">
          
          {/* Copyable Email Box */}
          <div className="space-y-2.5">
            <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
              Direct Email
            </span>
            <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800 truncate select-all">
                  {portfolioData.contact.email}
                </span>
              </div>
              <button 
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-purple-200 hover:border-purple-300 text-[11px] font-semibold text-purple-700 hover:bg-purple-50/50 transition-colors shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-purple-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="pt-6 border-t border-slate-100">
            <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
              Professional Channels
            </span>
            <div className="flex justify-center items-center gap-6">
              
              <a 
                href={portfolioData.contact.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="p-3.5 bg-purple-50/60 border border-purple-100 rounded-full group-hover:bg-purple-600 group-hover:border-purple-600 transition-all text-purple-600 group-hover:text-white shadow-xs">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold font-mono text-slate-500 group-hover:text-purple-600 transition-colors">LinkedIn</span>
              </a>

              <a 
                href={portfolioData.contact.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="p-3.5 bg-pink-50/60 border border-pink-100 rounded-full group-hover:bg-pink-500 group-hover:border-pink-500 transition-all text-pink-600 group-hover:text-white shadow-xs">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold font-mono text-slate-500 group-hover:text-pink-600 transition-colors">GitHub</span>
              </a>

              <a 
                href="/Sajida Javed - Associate Software Engineer.pdf"
                download="Sajida Javed - Associate Software Engineer.pdf"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="p-3.5 bg-amber-50/60 border border-amber-100 rounded-full group-hover:bg-amber-500 group-hover:border-amber-500 transition-all text-amber-600 group-hover:text-white shadow-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold font-mono text-slate-500 group-hover:text-amber-600 transition-colors">Resume</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

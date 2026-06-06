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
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-xl mx-auto px-4 relative z-10 text-center">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-slate-900 font-semibold tracking-tight text-[32px] md:text-[36px]">
            Let's Connect
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.7] mt-1.5 max-w-md mx-auto">
            Open to Full-Stack and Backend Engineering opportunities. Reach out via email or any of my professional channels.
          </p>
        </div>

        {/* Centered Direct Channel Card */}
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.015)] space-y-8">
          
          {/* Copyable Email Box */}
          <div className="space-y-2.5">
            <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
              Direct Email
            </span>
            <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-lg max-w-md mx-auto">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-800 truncate select-all">
                  {portfolioData.contact.email}
                </span>
              </div>
              <button 
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white border border-slate-250 hover:border-emerald-500 text-[11px] font-semibold text-slate-600 hover:text-emerald-700 transition-colors shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-450" />
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
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-full group-hover:bg-emerald-50 group-hover:border-emerald-300 transition-all text-slate-500 group-hover:text-emerald-700">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold font-mono text-slate-450 group-hover:text-emerald-750 transition-colors">LinkedIn</span>
              </a>

              <a 
                href={portfolioData.contact.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-full group-hover:bg-emerald-50 group-hover:border-emerald-300 transition-all text-slate-500 group-hover:text-emerald-700">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold font-mono text-slate-450 group-hover:text-emerald-750 transition-colors">GitHub</span>
              </a>

              <a 
                href="/api/download-resume"
                target="_blank" 
                rel="noreferrer" 
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-full group-hover:bg-emerald-50 group-hover:border-emerald-300 transition-all text-slate-500 group-hover:text-emerald-700">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-semibold font-mono text-slate-450 group-hover:text-emerald-750 transition-colors">Resume</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { FileText, ArrowRight, Server, Shield, CheckCircle2, X, Download } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section id="hero" className="relative flex items-center pt-28 lg:pt-36 pb-16 lg:pb-24 bg-white overflow-hidden border-b border-slate-200">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
          
          {/* Left Side: Text and Metrics (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-5 lg:gap-6 text-left"
          >
            {/* Stanford Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-mono text-[11px] md:text-[12px] font-medium uppercase tracking-[0.08em] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              {portfolioData.hero.stanfordBadge}
            </div>

            {/* Headline */}
            <h1 className="text-slate-900 font-semibold tracking-[-1.5px] md:tracking-[-2px] leading-[1.1] text-[34px] sm:text-[44px] lg:text-[52px] xl:text-[56px] font-sans">
              {portfolioData.hero.title}
            </h1>
            
            {/* Subheadline / Statement */}
            <p className="font-inter text-[14px] md:text-[15px] leading-[1.7] text-slate-600 max-w-xl">
              {portfolioData.hero.statement}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <a 
                href="#projects" 
                className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs md:text-sm transition-all shadow-sm hover:shadow flex items-center gap-2 cursor-pointer"
              >
                View Selected Work <ArrowRight className="w-4 h-4" />
              </a>
              <button 
                onClick={() => setIsResumeOpen(true)}
                className="px-5 py-3 rounded-lg border border-slate-200 hover:border-slate-350 text-slate-700 hover:bg-slate-50 font-semibold text-xs md:text-sm transition-all cursor-pointer bg-white flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-500" /> Resume
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
              {portfolioData.hero.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold tracking-tight text-slate-900 font-sans">{metric.value}</span>
                  <span className="font-mono text-[9px] md:text-[10px] font-medium text-slate-500 uppercase tracking-[0.08em] mt-1">{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Featured Project Card (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative hidden lg:block self-center"
          >
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Featured Production Project</span>
                <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-emerald-100 text-emerald-800 rounded">Commercial</span>
              </div>
              
              <h3 className="font-sans font-bold text-slate-900 text-lg mb-2">Load Masta Logistics</h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Logistics tracking and load management system built to modernize regional logistics workflows by replacing static permissions with a dynamic role-based access control (RBAC) architecture.
              </p>

              <div className="space-y-2.5 mb-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Optimized database query latency</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom multitenant Stripe subscriptions</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60">
                {["Laravel", "MySQL", "Redis", "Stripe"].map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-0.5 text-[9px] font-mono font-medium rounded bg-white text-slate-600 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Embedded Resume Preview Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-4xl w-full h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span className="font-sora font-semibold text-slate-800 text-sm">Sajida_Javed_Resume.pdf</span>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="/api/download-resume"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-all"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
                <button 
                  onClick={() => setIsResumeOpen(false)} 
                  className="p-1 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-650 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-slate-100 relative">
              <iframe 
                src="https://docs.google.com/document/d/1IGvG4b7Spj8dAmoRvLBO3Iah8ofvOIOhLI9ocD15H28/preview" 
                className="w-full h-full border-0 absolute inset-0"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

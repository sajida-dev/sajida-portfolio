"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { FileText, ArrowRight, ShieldCheck, Code2, Download, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section id="hero" className="relative flex items-center pt-28 lg:pt-36 pb-20 lg:pb-28 bg-[#FAFAFD] overflow-hidden border-b border-slate-200/80">
        {/* Soft background ambient light */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/20 via-pink-200/20 to-purple-200/20 blur-3xl rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-purple-200/20 via-slate-100 to-pink-200/20 blur-3xl rounded-full pointer-events-none -z-10 -translate-x-1/4 translate-y-1/4" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none opacity-50" />

        <div className="max-w-6xl mx-auto px-4 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">

          {/* Left Side: Content & CTAs (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-5 lg:gap-6 text-left relative"
          >
            {/* Main Headline */}
            <h1 className="text-slate-900 font-bold tracking-[-1.5px] md:tracking-[-2px] leading-[1.08] text-[38px] sm:text-[48px] lg:text-[56px] xl:text-[60px] font-sans">
              Full Stack <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">Laravel & AI</span> Systems Engineer
            </h1>

            {/* Statement */}
            <p className="font-inter text-[15px] md:text-[16.5px] leading-[1.7] text-slate-600 max-w-xl">
              {portfolioData.hero.statement}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 hover:from-purple-700 hover:via-pink-600 hover:to-amber-600 text-white font-semibold text-xs md:text-sm transition-all shadow-md hover:shadow-lg shadow-purple-500/20 flex items-center gap-2 cursor-pointer"
              >
                Explore Work <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-7 py-3.5 rounded-full border border-slate-250 hover:border-purple-300 text-slate-700 hover:bg-white font-semibold text-xs md:text-sm transition-all cursor-pointer bg-white/80 shadow-xs flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-purple-600" /> Resume
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200/80">
              {portfolioData.hero.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[22px] md:text-[26px] lg:text-[30px] font-bold tracking-tight text-slate-900 font-sans">
                    {metric.value}
                  </span>
                  <span className="font-mono text-[9px] md:text-[10px] font-semibold text-purple-600 uppercase tracking-[0.08em] mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Portrait with High 3D Pop-Out Effect (Matching Reference Image 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center items-center pt-4 sm:pt-6 pb-2"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] h-[400px] sm:h-[460px] flex items-end justify-center">

              {/* Outer decorative stroke rings (concentric around circle with small distance) */}
              <div className="absolute bottom-2 w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] rounded-full border border-purple-300/50 scale-[1.04] pointer-events-none" />
              <div className="absolute bottom-2 w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] rounded-full border border-pink-300/45 scale-[1.09] pointer-events-none" />
              <div className="absolute bottom-2 w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] rounded-full border border-amber-300/40 scale-[1.14] pointer-events-none" />
              <div className="absolute bottom-2 w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] rounded-full border border-purple-200/30 scale-[1.19] pointer-events-none" />

              {/* Bottom-left solid blue floating circle matching user reference */}
              <div className="absolute bottom-1 left-2 sm:left-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-sky-500 shadow-lg shadow-sky-500/30 z-30 animate-pulse" />


              {/* Glassmorphic Left Badge: Stanford Section Leader (Matching Image 2 style) */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-30 bg-white/85 backdrop-blur-xl p-3 sm:p-3.5 rounded-2xl border border-white/90 shadow-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-amber-500 flex items-center justify-center text-white shadow-md shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11.5px] sm:text-[12px] font-bold text-slate-900 leading-tight">Section Leader</span>
                  <span className="block text-[9.5px] sm:text-[10px] font-mono font-semibold text-purple-600 mt-0.5">Stanford Code in Place</span>
                </div>
              </motion.div>

              {/* Main Circular Gradient Backdrop - Positioned lower at chest/shoulder level */}
              <div className="absolute bottom-2 w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-500 shadow-2xl shadow-purple-500/30 overflow-hidden z-10">

                {/* Wavy Contour Lines Pattern inside circle background */}
                <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" viewBox="0 0 200 200" fill="none">
                  <path d="M -30,110 C 30,40 130,180 230,110" stroke="white" strokeWidth="1" />
                  <path d="M -30,145 C 30,75 130,215 230,145" stroke="white" strokeWidth="1" />
                  <path d="M -30,75 C 30,5 130,145 230,75" stroke="white" strokeWidth="1" />
                  <path d="M -30,180 C 30,110 130,250 230,180" stroke="white" strokeWidth="1" />
                  <path d="M -30,40 C 30,-30 130,110 230,40" stroke="white" strokeWidth="1" />
                </svg>

                {/* Subtle radial dot grid overlay */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                {/* Image Layer 1: Clipped at bottom & sides inside circle */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] h-[570px] sm:h-[570px] pointer-events-none flex items-end justify-center">
                  <Image
                    src="/gg.png"
                    alt="Sajida Javed - Full Stack & Backend Engineer"
                    width={810}
                    height={960}
                    priority
                    className="w-full h-full object-contain object-bottom drop-shadow-xl translate-y-10 sm:translate-y-14"
                  />
                </div>
              </div>

              {/* Image Layer 2 (Pop-Out Effect): Entire Head & Hijab pop high OUTWARD above top circle edge */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] h-[570px] sm:h-[570px] pointer-events-none z-20 [clip-path:inset(0_0_35%_0)] flex items-end justify-center">
                <Image
                  src="/gg.png"
                  alt="Sajida Javed - Full Stack & Backend Engineer"
                  width={810}
                  height={960}
                  priority
                  className="w-full h-full object-contain object-bottom drop-shadow-xl translate-y-10 sm:translate-y-14"
                />
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
                <FileText className="w-5 h-5 text-purple-600" />
                <span className="font-sora font-semibold text-slate-800 text-sm">Sajida_Javed_Resume.pdf</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/Sajida Javed - Associate Software Engineer.pdf"
                  download="Sajida Javed - Associate Software Engineer.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
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


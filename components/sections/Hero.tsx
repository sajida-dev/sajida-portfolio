"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ChevronRight, Download, Terminal, Database, Code2, Server } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = portfolioData.hero.specialization;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-ai-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-ai-secondary/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-success/10 border border-ai-success/20 text-ai-success text-sm w-fit font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-success"></span>
            </span>
            {portfolioData.hero.availability}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sora tracking-tight leading-tight">
            <span className="premium-gradient-text">AI Engineer</span> <br />
            & Laravel Full Stack Developer
          </h1>
          
          <div className="h-16 md:h-12">
            <p className="text-lg text-slate-300 font-geist-sans max-w-xl">
              {text}<span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {portfolioData.hero.badges.map((badge, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-ai-secondary" />
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a href="#contact" className="px-6 py-3 rounded-md bg-ai-primary hover:bg-ai-primary/80 text-white font-medium transition-all shadow-[0_0_20px_rgba(124,58,237,0.4)] flex items-center gap-2">
              Hire Me <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#projects" className="px-6 py-3 rounded-md glassmorphism hover:bg-white/10 text-white font-medium transition-all">
              View Projects
            </a>
            <a href={portfolioData.contact.resumeUrl} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md border border-ai-secondary/30 hover:bg-ai-secondary/10 text-white font-medium transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side: Architecture / Terminal Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[500px]"
        >
          {/* Main Glass Card */}
          <div className="absolute inset-0 glassmorphism rounded-2xl border-white/10 p-6 flex flex-col shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ai-primary via-ai-accent to-ai-secondary" />
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs font-mono text-slate-400">production_environment.ts</span>
            </div>
            
            <div className="flex-1 font-mono text-sm text-slate-300 flex flex-col gap-3">
              <div className="flex gap-2">
                <span className="text-ai-secondary">~</span>
                <span className="text-ai-success">deployment</span>
                <span className="text-slate-500">starting AI recommender pipeline...</span>
              </div>
              <div className="flex gap-2 text-slate-400 pl-4">
                <span>{'>'}</span>
                <span>Initializing Laravel queue workers... <span className="text-ai-success">[OK]</span></span>
              </div>
              <div className="flex gap-2 text-slate-400 pl-4">
                <span>{'>'}</span>
                <span>Connecting to AWS RDS... <span className="text-ai-success">[OK]</span></span>
              </div>
              <div className="flex gap-2 text-slate-400 pl-4">
                <span>{'>'}</span>
                <span>Loading transformer models into PyTorch... <span className="text-ai-success">[OK]</span></span>
              </div>
              <div className="flex gap-2 text-ai-accent pl-4 mt-2">
                <span>{'>'}</span>
                <span className="animate-pulse">System online. Processing events...</span>
              </div>
            </div>
          </div>

          {/* Floating Nodes */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -right-6 top-20 glassmorphism p-4 rounded-xl border-white/10 flex items-center gap-3 shadow-[0_0_30px_rgba(124,58,237,0.15)] bg-[#111827]/80 backdrop-blur-xl"
          >
            <div className="p-2 bg-red-500/20 rounded-lg text-red-400">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Laravel API</div>
              <div className="text-[10px] text-slate-400">99.9% Uptime</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -left-8 bottom-32 glassmorphism p-4 rounded-xl border-white/10 flex items-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.15)] bg-[#111827]/80 backdrop-blur-xl"
          >
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">AI Models</div>
              <div className="text-[10px] text-slate-400">PyTorch / Python</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

import { Code2, Server, BrainCircuit, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function WhatIBring() {
  const icons = [Terminal, Code2, BrainCircuit, Server];

  return (
    <section id="what-i-bring" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-sora text-slate-900 mb-2">What I Bring</h2>
          <p className="text-slate-500 text-sm font-medium">Core pillars of my technical and engineering background.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.whatIBring.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx} 
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm hover:bg-white hover:border-blue-400 hover:shadow-md transition-all group duration-300"
              >
                <div className="p-3 bg-white text-slate-700 group-hover:text-blue-600 rounded-lg w-fit border border-slate-200 shadow-sm mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-sora font-bold text-slate-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { portfolioData } from "@/data/portfolioData";
import { Server, Layout, BrainCircuit, Cloud, Database } from "lucide-react";

export default function TechnicalExpertise() {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Backend Engineering": 
        return <Server className="w-4.5 h-4.5 text-emerald-600" />;
      case "Frontend Engineering": 
        return <Layout className="w-4.5 h-4.5 text-slate-500" />;
      case "AI & Machine Learning": 
        return <BrainCircuit className="w-4.5 h-4.5 text-emerald-600" />;
      case "Cloud & DevOps": 
        return <Cloud className="w-4.5 h-4.5 text-slate-500" />;
      case "Databases": 
        return <Database className="w-4.5 h-4.5 text-slate-550" />;
      default: 
        return <Server className="w-4.5 h-4.5 text-slate-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-slate-900 font-semibold tracking-tight text-[32px] md:text-[36px]">
            Technical Expertise
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.7] mt-1.5 max-w-xl">
            A comprehensive overview of my core engineering domains, technology stacks, and database competencies.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((category, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2 bg-slate-50 border border-slate-100 rounded">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="font-sans font-semibold text-slate-900 text-[16px] leading-snug">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-2.5 py-1 text-[11px] font-mono font-medium uppercase tracking-[0.08em] rounded-md bg-slate-50 border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-300 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

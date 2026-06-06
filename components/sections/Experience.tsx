"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Server, ChevronDown, ChevronUp, Check } from "lucide-react";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getExperienceIcon = (company: string) => {
    if (company.includes("Stanford")) return <GraduationCap className="w-4 h-4" />;
    if (company.includes("AwazDo")) return <Server className="w-4 h-4" />;
    return <Briefcase className="w-4 h-4" />;
  };

  return (
    <section id="experience" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-slate-900 font-semibold tracking-tight text-[32px] md:text-[36px]">
            Work Experience
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.7] mt-1.5 max-w-xl">
            A chronological timeline of my professional roles and engineering contributions.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-6 space-y-12">
          {portfolioData.experience.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            const Icon = getExperienceIcon(exp.company);

            return (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                
                {/* Timeline Node */}
                <div 
                  className={`absolute -left-3 top-1.5 w-6 h-6 rounded-full border-2 bg-white flex items-center justify-center transition-all duration-300 z-10 ${
                    isExpanded 
                      ? "border-emerald-600 scale-110 shadow-sm" 
                      : "border-slate-250"
                  }`}
                >
                  <div 
                    className={`w-2 h-2 rounded-full transition-all duration-350 ${
                      isExpanded ? "bg-emerald-600" : "bg-slate-300"
                    }`}
                  />
                </div>

                {/* Timeline Card */}
                <div 
                  onClick={() => toggleExpand(idx)}
                  className={`bg-white p-5 rounded-xl border transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.01)] text-left cursor-pointer ${
                    isExpanded 
                      ? "border-emerald-600 ring-1 ring-emerald-600/10 bg-slate-50/20" 
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Card Header: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded bg-slate-50 border border-slate-100 transition-colors ${
                        isExpanded ? "text-emerald-600 bg-emerald-50/50 border-emerald-100" : "text-slate-500"
                      }`}>
                        {Icon}
                      </div>
                      <div>
                        <h3 className="font-sans font-semibold text-slate-900 text-[15px] md:text-[16px] leading-snug">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-[10px] md:text-[11px] font-medium text-slate-400 uppercase tracking-[0.08em]">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    
                    <span className="font-mono text-[10px] text-slate-400 font-medium sm:text-right shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Primary One-Line Impact (Always Visible) */}
                  <p className="text-[13px] md:text-[14px] leading-[1.6] text-slate-600 font-medium mt-3">
                    {exp.oneLineImpact}
                  </p>

                  {/* Toggle Indicator Button */}
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                    {isExpanded ? (
                      <>
                        Hide Details <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        View Deliverables <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </div>

                  {/* Expandable Details Container */}
                  {isExpanded && (
                    <div 
                      className="mt-5 pt-4 border-t border-slate-100 space-y-4 animate-in fade-in slide-in-from-top-1 duration-250"
                      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inner card contents
                    >
                      {/* Detailed Description */}
                      <p className="font-inter text-[13px] md:text-[13.5px] leading-[1.65] text-slate-500 font-medium">
                        {exp.description}
                      </p>

                      {/* Key Deliverables Bullet Points */}
                      <div className="space-y-2">
                        <h4 className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-[0.08em]">
                          Key Deliverables
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {exp.contributions.map((bullet, bulletIdx) => (
                            <div key={bulletIdx} className="flex items-start gap-2.5 p-2 bg-slate-50 border border-slate-150/50 rounded-lg text-[12px] text-slate-700 font-semibold">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-[0.08em]">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, techIdx) => (
                            <span 
                              key={techIdx}
                              className="px-2 py-0.5 text-[9px] font-mono font-medium rounded bg-slate-50 text-slate-600 border border-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

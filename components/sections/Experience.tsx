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
    if (company.includes("Stanford")) return <GraduationCap className="w-4 h-4 text-purple-600" />;
    if (company.includes("AwazDo")) return <Server className="w-4 h-4 text-amber-500" />;
    return <Briefcase className="w-4 h-4 text-pink-500" />;
  };

  return (
    <section id="experience" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-slate-900 font-bold tracking-tight text-[32px] md:text-[36px]">
            Work Experience
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.7] mt-1.5 max-w-xl">
            A chronological timeline of my professional roles, engineering contributions, and system deployments.
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
                      ? "border-purple-600 scale-110 shadow-sm" 
                      : "border-slate-300"
                  }`}
                >
                  <div 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isExpanded ? "bg-gradient-to-r from-purple-600 to-pink-500" : "bg-slate-300"
                    }`}
                  />
                </div>

                {/* Timeline Card */}
                <div 
                  onClick={() => toggleExpand(idx)}
                  className={`bg-white p-5 md:p-6 rounded-xl border transition-all duration-300 shadow-xs text-left cursor-pointer ${
                    isExpanded 
                      ? "border-purple-300 ring-1 ring-purple-500/20 bg-purple-50/10 shadow-md" 
                      : "border-slate-200 hover:border-purple-200"
                  }`}
                >
                  {/* Card Header: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg bg-slate-50 border border-slate-100 transition-colors ${
                        isExpanded ? "bg-purple-50 border-purple-100" : ""
                      }`}>
                        {Icon}
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-slate-900 text-[15px] md:text-[16px] leading-snug">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-[10px] md:text-[11px] font-semibold text-purple-600 uppercase tracking-[0.08em]">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    
                    <span className="font-mono text-[11px] text-slate-400 font-medium sm:text-right shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Primary One-Line Impact */}
                  <p className="text-[13.5px] md:text-[14px] leading-[1.6] text-slate-600 font-medium mt-3">
                    {exp.oneLineImpact}
                  </p>

                  {/* Toggle Indicator Button */}
                  <div className="mt-3.5 flex items-center gap-1.5 text-[11.5px] font-semibold text-purple-600 hover:text-purple-700">
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="font-inter text-[13px] md:text-[13.5px] leading-[1.65] text-slate-600">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-[0.08em]">
                          Key Deliverables
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {exp.contributions.map((bullet, bulletIdx) => (
                            <div key={bulletIdx} className="flex items-start gap-2.5 p-2.5 bg-slate-50/80 border border-slate-200/60 rounded-lg text-[12px] text-slate-700 font-medium">
                              <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-[0.08em]">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, techIdx) => (
                            <span 
                              key={techIdx}
                              className="px-2.5 py-1 text-[9px] font-mono font-medium rounded-md bg-purple-50/60 text-purple-700 border border-purple-100"
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

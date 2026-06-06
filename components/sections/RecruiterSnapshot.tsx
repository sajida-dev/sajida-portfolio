"use client";

import { Briefcase, FolderGit2, Globe, Award, Sparkles, Code2 } from "lucide-react";

export default function RecruiterSnapshot() {
  const cards = [
    {
      icon: Briefcase,
      value: "3+ Years",
      label: "Experience",
      sub: "Development focus"
    },
    {
      icon: FolderGit2,
      value: "7+ Commercial",
      label: "Projects",
      sub: "Built for businesses"
    },
    {
      icon: Globe,
      value: "4+ Production",
      label: "Deployments",
      sub: "Scalable cloud infra"
    },
    {
      icon: Award,
      value: "Stanford Leader",
      label: "Code in Place",
      sub: "Global mentorship"
    },
    {
      icon: Sparkles,
      value: "96.7 Percentile",
      label: "NSCT",
      sub: "National IT ranking"
    },
    {
      icon: Code2,
      value: "Laravel • Vue.js",
      label: "Python • AWS",
      sub: "Primary production stack"
    }
  ];

  return (
    <section id="snapshot" className="py-8 md:py-12 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-3.5 md:p-4.5 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.01)] min-h-[110px] md:min-h-[125px]"
              >
                <div>
                  <div className="flex items-center justify-between text-slate-400 mb-1.5 md:mb-2">
                    <Icon className="w-3.5 h-3.5 md:w-4 h-4 text-slate-500" />
                  </div>
                  <h3 className="font-sans font-semibold text-slate-900 text-[13px] sm:text-[14px] lg:text-[12px] xl:text-[15px] leading-snug">
                    {card.value}
                  </h3>
                  <p className="font-mono text-[9px] md:text-[10px] font-medium text-slate-455 uppercase tracking-[0.08em] mt-0.5">
                    {card.label}
                  </p>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-400 mt-2 font-medium leading-tight">
                  {card.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

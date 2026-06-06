"use client";

import { Trophy, Award, Landmark, Briefcase } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function FeaturedHighlights() {
  const icons = [Landmark, Award, Trophy, Briefcase];

  return (
    <section id="highlights" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-left">
          <h2 className="text-slate-900 font-semibold tracking-tight text-[32px] md:text-[36px]">
            Key Benchmarks
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.7] mt-1.5 max-w-xl">
            Verified performance, academic excellence, and leadership milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.featuredHighlights.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="p-2 bg-slate-50 text-slate-600 rounded w-fit mb-4">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-sans font-semibold text-slate-900 text-[18px] leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[11px] font-medium text-blue-600 uppercase tracking-[0.08em] mt-1.5">
                    {item.subtitle}
                  </p>
                </div>
                <p className="text-[13px] leading-[1.6] text-slate-500 font-medium mt-4">
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

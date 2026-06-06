"use client";

import { portfolioData } from "@/data/portfolioData";
import { Trophy, Award, Medal, Star, ExternalLink } from "lucide-react";

export default function Achievements() {
  const getAchievementIcon = (title: string) => {
    if (title.includes("Competency")) return <Award className="w-5 h-5 text-slate-500" />;
    if (title.includes("Scholarship")) return <Medal className="w-5 h-5 text-slate-500" />;
    if (title.includes("Speed Programming") || title.includes("1st")) return <Trophy className="w-5 h-5 text-emerald-600" />;
    return <Star className="w-5 h-5 text-slate-500" />;
  };

  return (
    <section id="achievements" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-slate-900 font-semibold tracking-tight text-[32px] md:text-[36px]">
            Honors & Achievements
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.7] mt-1.5 max-w-xl">
            Verified proof of technical excellence, academic performance, and competitive coding milestones.
          </p>
        </div>

        {/* Achievements Grid: Single row on desktop (lg:grid-cols-4) with centered layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.achievements.map((achievement, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 hover:shadow-sm transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Centered Icon Container at top */}
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-full group-hover:bg-emerald-50/50 transition-colors shrink-0 mb-4">
                {getAchievementIcon(achievement.title)}
              </div>
              
              {/* Centered Contents Below */}
              <div className="flex-1 flex flex-col justify-between w-full">
                <div>
                  <h3 className="font-sans font-bold text-slate-900 text-[14px] md:text-[15px] leading-snug">
                    {achievement.title}
                  </h3>
                  <p className="text-[12.5px] leading-[1.6] text-slate-500 font-medium mt-2">
                    {achievement.description}
                  </p>
                </div>

                {/* Render Verified Proof Links (HackerRank Leaderboards, etc.) Centered */}
                {achievement.links && achievement.links.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 pt-4 mt-auto">
                    {achievement.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-[0.06em] rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-100 transition-colors"
                      >
                        {link.label} <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

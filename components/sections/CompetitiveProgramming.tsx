"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Trophy, ExternalLink, Code2, FileText, Award, CheckCircle, ZoomIn, X } from "lucide-react";

export default function CompetitiveProgramming() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getBrandIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "leetcode":
        return (
          <img 
            src="https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png" 
            alt="LeetCode Logo" 
            className="w-5 h-5 object-contain shrink-0" 
          />
        );
      case "hackerrank":
        return (
          <img 
            src="https://cdn.prod.website-files.com/66b6d7fd4d3e9cef94717176/6765dc51a13e31531996cef3_logo-dark.svg" 
            alt="HackerRank Logo" 
            className="w-6.5 h-3.5 object-contain shrink-0" 
          />
        );
      case "geeksforgeeks":
        return (
          <img 
            src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" 
            alt="GeeksforGeeks Logo" 
            className="w-5.5 h-5.5 object-contain shrink-0" 
          />
        );
      case "kaggle":
        return (
          <img 
            src="https://www.kaggle.com/static/images/site-logo.svg" 
            alt="Kaggle Logo" 
            className="w-4 h-4 object-contain shrink-0" 
          />
        );
      case "hugging face":
        return (
          <img 
            src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" 
            alt="Hugging Face Logo" 
            className="w-5 h-5 object-contain shrink-0" 
          />
        );
      default:
        return <Code2 className="w-4 h-4 text-slate-500 shrink-0" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-slate-900 font-semibold tracking-tight text-[32px] md:text-[36px]">
            Competitive Programming
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.7] mt-1.5 max-w-xl">
            Active verification of algorithmic design, data structures, and competitive contest results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contest Log with clean PDF Certificate Preview Mockup (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-sans font-bold text-slate-900 text-[18px] mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-emerald-600" /> Contest Logs & Certificates
            </h3>
            
            {/* Cards Grid: Updated with generous p-6 padding to prevent text from touching walls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.competitiveProgramming.competitions.map((competition, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-sm transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Contest Header */}
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-sm font-bold text-slate-900 leading-snug truncate block max-w-[170px] sm:max-w-none">
                        {competition.name}
                      </span>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded bg-emerald-50 border border-emerald-100 text-emerald-800 shrink-0">
                        {competition.badge || "Participant"}
                      </span>
                    </div>

                    {/* Certificate Image or PDF Certificate Document Preview Mockup */}
                    {competition.image ? (
                      <div 
                        onClick={() => setSelectedImage(competition.image || null)}
                        className="w-full aspect-[16/10] rounded-lg border border-slate-200 overflow-hidden relative shadow-sm bg-white cursor-pointer group/img"
                      >
                        <img 
                          src={competition.image} 
                          alt={`${competition.name} Certificate`}
                          className="w-full h-full object-contain p-1 transition-transform duration-555 group-hover/img:scale-[1.03]"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                          <span className="bg-white/95 text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-md shadow flex items-center gap-1.5">
                            <ZoomIn className="w-3.5 h-3.5" /> View Certificate
                          </span>
                        </div>
                      </div>
                    ) : competition.url ? (
                      <div className="w-full aspect-[16/10] rounded-lg bg-white border border-slate-250 flex flex-col items-center justify-center p-4 relative overflow-hidden select-none shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)]">
                        {/* Document Details Overlay */}
                        <div className="absolute top-2 right-2 w-5 h-6 bg-slate-50 border border-slate-200 rounded flex items-center justify-center text-[7px] font-mono font-bold text-slate-400 uppercase select-none">
                          PDF
                        </div>
                        
                        <div className="flex flex-col items-center justify-center text-center space-y-2 z-10">
                          <div className="relative">
                            <FileText className="w-10 h-10 text-rose-500 shrink-0" />
                            <CheckCircle className="w-4.5 h-4.5 text-emerald-600 absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 border border-emerald-100" />
                          </div>
                          <div className="space-y-1">
                            <span className="text-[11px] font-bold text-slate-800 tracking-tight block max-w-[170px] truncate">
                              {competition.name.replace(/\(.*?\)/g, "").trim()}
                            </span>
                            <span className="text-[8.5px] font-mono font-medium text-slate-400 block tracking-widest uppercase">
                              Verified PDF Proof
                            </span>
                          </div>
                        </div>

                        {/* Mock signature block at bottom to look like a certificate layout */}
                        <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[6.5px] font-mono text-slate-350 border-t border-slate-100 pt-1.5 w-[calc(100%-2rem)]">
                          <span>ISSUED BY OFFICIAL CONTEST</span>
                          <span>STATUS: ACTIVE</span>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Verification CTA */}
                  {(competition.image || competition.url) && (
                    <div className="mt-5 pt-4 border-t border-slate-200/60">
                      {competition.image ? (
                        <button
                          onClick={() => setSelectedImage(competition.image || null)}
                          className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.06em] rounded bg-white hover:bg-slate-50 text-slate-700 hover:text-emerald-700 border border-slate-250 hover:border-emerald-500 shadow-sm transition-all text-center cursor-pointer font-sans"
                        >
                          View Certificate <ZoomIn className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <a
                          href={competition.url}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.06em] rounded bg-white hover:bg-slate-50 text-slate-700 hover:text-emerald-700 border border-slate-250 hover:border-emerald-500 shadow-sm transition-all text-center"
                        >
                          Verify PDF Certificate <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Verified Profiles (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-sans font-bold text-slate-900 text-[18px] mb-4">
              Verified Profiles
            </h3>
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.015)]">
              <div className="flex flex-col gap-3">
                {portfolioData.competitiveProgramming.profiles.map((profile, idx) => (
                  <a
                    key={idx}
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-emerald-500 hover:bg-slate-50/50 text-[12px] font-bold text-slate-700 hover:text-emerald-700 transition-all group"
                  >
                    <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-slate-50 border border-slate-100 rounded group-hover:bg-emerald-50 transition-colors">
                      {getBrandIcon(profile.name)}
                    </div>
                    <span>{profile.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-auto text-slate-400 group-hover:text-emerald-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden p-2 md:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-[10000] p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 hover:scale-105 transition-all shadow-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="w-full max-h-[80vh] flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Certificate Fullscreen Preview"
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

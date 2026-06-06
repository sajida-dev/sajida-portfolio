"use client";

import { useState } from "react";
import { portfolioData, Certification } from "@/data/portfolioData";
import { Award, ShieldCheck, Binary, Database, BookmarkCheck, ZoomIn, X } from "lucide-react";

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ["All", "AI & ML", "Programming", "Web & Database", "Other Professional"];

  const filteredCertifications = activeCategory === "All"
    ? portfolioData.certifications
    : portfolioData.certifications.filter(cert => cert.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI & ML":
        return <Binary className="w-4 h-4 text-emerald-600" />;
      case "Programming":
        return <Award className="w-4 h-4 text-emerald-600" />;
      case "Web & Database":
        return <Database className="w-4 h-4 text-emerald-600" />;
      default:
        return <BookmarkCheck className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <section id="certifications" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-slate-900 font-semibold tracking-tight text-[32px] md:text-[36px]">
            Professional Credentials & Certifications
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.7] mt-1.5 max-w-xl">
            A verified record of technical training, industry certifications, language proficiency, and academic qualifications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-[12px] font-bold uppercase tracking-[0.06em] rounded-md transition-all duration-200 flex items-center gap-2 border ${
                activeCategory === category
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-350 hover:bg-slate-50"
              }`}
            >
              {category !== "All" && getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-emerald-500 hover:shadow-sm transition-all duration-300 group"
            >
              <div>
                {/* Certificate Image Frame */}
                <div 
                  onClick={() => setSelectedImage(cert.image)}
                  className="w-full aspect-[16/10] rounded-lg border border-slate-200 bg-slate-50 overflow-hidden relative cursor-pointer shadow-sm mb-4.5 group/img"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover/img:scale-[1.03]"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <span className="bg-white/95 text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-md shadow flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5" /> View Certificate
                    </span>
                  </div>
                </div>

                {/* Title & Issuer Info */}
                <h3 className="font-sans font-bold text-slate-900 text-[14px] md:text-[15px] leading-snug group-hover:text-emerald-700 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-[12px] font-medium text-slate-500 mt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  {cert.issuer}
                </p>
              </div>

              {/* Tag / Category Badge at bottom */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                <span className="px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.08em] rounded border bg-slate-50 text-slate-500 border-slate-200">
                  {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden p-2 md:p-4 animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-[10000] p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 hover:scale-105 transition-all shadow-md"
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

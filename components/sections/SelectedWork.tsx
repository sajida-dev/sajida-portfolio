"use client";

import { portfolioData } from "@/data/portfolioData";
import { Shield, Server, Activity, Layout, Home, GraduationCap, Camera, Landmark, ExternalLink, Globe, Calculator } from "lucide-react";

export default function SelectedWork() {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "greenwindows":
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case "infinix-calculator":
        return <Calculator className="w-5 h-5 text-blue-600" />;
      case "load-masta":
        return <Shield className="w-5 h-5 text-purple-600" />;
      case "multi-school":
        return <Landmark className="w-5 h-5 text-pink-500" />;
      case "belauctions":
        return <Server className="w-5 h-5 text-amber-500" />;
      case "awazdo-project":
        return <Activity className="w-5 h-5 text-purple-600" />;
      case "real-estate":
        return <Home className="w-5 h-5 text-purple-600" />;
      case "university-system":
        return <GraduationCap className="w-5 h-5 text-pink-500" />;
      case "photography-studio":
        return <Camera className="w-5 h-5 text-amber-500" />;
      case "tusksol":
        return <Layout className="w-5 h-5 text-purple-600" />;
      default:
        return <Activity className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Heading */}
        <div className="mb-16 text-left">
          <h2 className="text-slate-900 font-bold tracking-tight text-[32px] md:text-[36px]">
            Selected Work & Projects
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.7] mt-1.5 max-w-xl">
            A verified portfolio of production engineering deployments, commercial SaaS platforms, and backend system enhancements.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200/80 p-6 md:p-8 flex flex-col justify-between hover:border-purple-300 hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start gap-4 mb-4.5">
                  <div className="p-3 bg-purple-50/60 border border-purple-100 rounded-xl group-hover:bg-purple-100/50 transition-colors shrink-0">
                    {getProjectIcon(project.id)}
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-sans font-bold text-slate-900 text-[16px] md:text-[18px] leading-snug group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-[0.08em]">
                      {project.role}
                    </p>
                  </div>
                </div>

                {/* Badge */}
                {project.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 my-3.5">
                    <span className="px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.08em] rounded border bg-purple-50 text-purple-700 border-purple-200">
                      {project.badges[0]}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-[13px] md:text-[13.5px] leading-[1.65] text-slate-600 font-medium mb-6">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-slate-100 flex items-start justify-between gap-4 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[9px] font-mono font-semibold rounded bg-slate-50 text-slate-600 border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                  >
                    <span>{project.type || "View Link"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Server, Globe, Shield, Activity } from "lucide-react";

export default function CommercialProjects() {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "load-masta": return <Shield className="w-5 h-5 text-blue-600" />;
      case "belauctions": return <Server className="w-5 h-5 text-teal-600" />;
      case "awazdo-project": return <Activity className="w-5 h-5 text-emerald-600" />;
      default: return <Globe className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-left">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Category 1
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-sora text-slate-900 mt-3 mb-2">
            Commercial & Production Experience
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            Real-world client projects and production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.commercial.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-slate-350 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg group-hover:scale-105 transition-transform duration-300">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <h3 className="font-sora font-bold text-slate-900 text-lg leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">
                        {project.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.badges.map((badge, idx) => (
                    <span 
                      key={idx} 
                      className={`px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md border ${
                        badge.includes("Production") || badge.includes("Live")
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200" 
                          : "bg-blue-50 text-blue-800 border-blue-200"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                  {/* Explicit Production Engineering label for Belauctions & AwazDo */}
                  {(project.id === "belauctions" || project.id === "awazdo-project") && (
                    <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md border bg-amber-50 text-amber-800 border-amber-200">
                      Production Engineering Experience
                    </span>
                  )}
                </div>

                {/* Outcomes & Impact */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Outcome & Impact</h4>
                  <ul className="space-y-2 text-xs font-medium text-slate-600">
                    {project.impact.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-[10px] font-semibold rounded bg-slate-100 text-slate-650 border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.link && project.link !== "#" && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-bold text-slate-600 hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    View Project <ArrowRight className="w-3.5 h-3.5" />
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

import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, BrainCircuit, Cpu, Binary } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  role: string;
  badges: string[];
  description: string;
  tech: string[];
  impact?: string[];
  link?: string;
  type?: "Live" | "GitHub" | "Demo";
}

export default function AIProjects() {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "ai-product-recommender": return <BrainCircuit className="w-5 h-5 text-blue-600" />;
      case "ai-playground": return <Cpu className="w-5 h-5 text-indigo-600" />;
      default: return <Binary className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="ai-projects" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-left">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
            Category 3
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-sora text-slate-900 mt-3 mb-2">
            AI Engineering Projects
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            AI-powered architectures, model fine-tuning, and research implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.projects.map((project: any) => (
            <div
              key={project.id}
              className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:bg-white hover:border-slate-350 hover:shadow-sm transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-white border border-slate-200 rounded-lg group-hover:scale-105 transition-transform duration-300">
                    {getProjectIcon(project.id)}
                  </div>
                  <div>
                    <h3 className="font-sora font-bold text-slate-900 text-base leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                      {project.role}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Highlights</h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                    {(project.impact ?? []).map((point: any, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3 mt-auto">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 text-[9px] font-semibold rounded bg-white text-slate-650 border border-slate-200"
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
                    className="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-0.5 transition-colors"
                  >
                    View <ArrowRight className="w-3 h-3" />
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

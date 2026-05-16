import { portfolioData } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const getColorClass = (color: string) => {
    switch (color) {
      case "emerald": return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
      case "red": return "text-red-400 bg-red-400/10 border-red-400/20";
      case "blue": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "orange": return "text-orange-400 bg-orange-400/10 border-orange-400/20";
      case "yellow": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      default: return "text-slate-400 bg-slate-400/10 border-slate-400/20";
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-sora mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Production-ready, scalable AI and Full Stack systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project) => (
            <div 
              key={project.id} 
              className="p-8 rounded-2xl bg-gradient-to-br from-[#111827] to-[#0F172A] border border-cyan-500/20 transition-all group relative overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ai-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold font-sora mb-3 group-hover:text-ai-secondary transition-colors">{project.title}</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">{project.shortDescription}</p>
                
                {/* Architecture Visuals */}
                <div className="mb-8 p-4 rounded-xl bg-black/20 border border-white/5">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Architecture Flow</h4>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.architecture.map((node, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className={`px-3 py-1.5 text-xs font-medium rounded-md border ${getColorClass(node.color)}`}>
                          {node.name}
                        </span>
                        {idx < project.architecture.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full bg-ai-primary/10 text-ai-primary border border-ai-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-1">
                      View Project <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

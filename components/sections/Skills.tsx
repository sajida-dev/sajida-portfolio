import { portfolioData } from "@/data/portfolioData";
import { Database, Layout, Server, Cloud, Cpu, Wrench } from "lucide-react";

const categoryConfig = {
  ai: { icon: Cpu, color: "text-ai-primary", bg: "bg-ai-primary/10", border: "border-ai-primary/20", title: "AI & Machine Learning" },
  backend: { icon: Server, color: "text-ai-secondary", bg: "bg-ai-secondary/10", border: "border-ai-secondary/20", title: "Backend Architecture" },
  frontend: { icon: Layout, color: "text-ai-accent", bg: "bg-ai-accent/10", border: "border-ai-accent/20", title: "Frontend & UI/UX" },
  cloud: { icon: Cloud, color: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/20", title: "Cloud & DevOps" },
  databases: { icon: Database, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", title: "Databases" },
  tools: { icon: Wrench, color: "text-slate-400", bg: "bg-slate-400/10", border: "border-slate-400/20", title: "Tools & Ecosystem" }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-ai-card/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-sora mb-4">Tech Stack I Use Daily</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, end-to-end production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>).map((categoryKey) => {
            const config = categoryConfig[categoryKey];
            const Icon = config.icon;
            
            return (
              <div key={categoryKey} className={`p-6 rounded-2xl bg-ai-card border ${config.border} hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all group`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${config.bg} ${config.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg">{config.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills[categoryKey].map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-slate-300 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

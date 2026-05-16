import { portfolioData } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-sora mb-4">Experience & Leadership</h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-ai-bg bg-ai-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-ai-primary group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all z-10">
                <Briefcase className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-ai-card border border-white/5 group-hover:border-white/10 transition-colors shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-medium text-ai-secondary px-2 py-1 rounded bg-ai-secondary/10">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-sora text-white mb-1">{exp.role}</h3>
                <h4 className="text-sm font-medium text-ai-primary mb-4">{exp.company}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

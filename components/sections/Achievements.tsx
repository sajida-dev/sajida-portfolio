import { portfolioData } from "@/data/portfolioData";
import { Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-ai-card/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-sora mb-4">Achievements & Competitions</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A track record of excellence in national and international technical arenas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.achievements.map((achievement, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-ai-card border border-white/5 hover:border-ai-primary/30 transition-all text-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-ai-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ai-primary/10 flex items-center justify-center text-ai-primary group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold font-sora text-white mb-2">{achievement.metric}</h3>
              <h4 className="text-lg font-medium text-slate-200 mb-2">{achievement.title}</h4>
              <p className="text-sm text-slate-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

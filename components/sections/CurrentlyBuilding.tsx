import { Rocket, Activity, BookOpen, BrainCircuit } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function CurrentlyBuilding() {
  return (
    <section id="currently-building" className="py-24 relative bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Currently Building */}
          <div className="md:w-1/2 p-8 rounded-2xl bg-[#111827] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ai-secondary/10 blur-[50px] rounded-full group-hover:bg-ai-secondary/20 transition-all" />
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-ai-secondary/10 text-ai-secondary">
                <Rocket className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-sora">Currently Building</h2>
            </div>
            
            <div className="space-y-4">
              {portfolioData.currentlyBuilding.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-full bg-ai-secondary/20 text-ai-secondary animate-pulse shrink-0">
                    <Activity className="w-3 h-3" />
                  </div>
                  <p className="text-slate-300 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="md:w-1/2 p-8 rounded-2xl bg-[#111827] border border-white/5 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-ai-primary/10 blur-[50px] rounded-full group-hover:bg-ai-primary/20 transition-all" />
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-ai-primary/10 text-ai-primary">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-sora">Currently Learning</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {portfolioData.currentlyLearning.map((item, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm font-medium text-slate-300 flex items-center gap-2 hover:bg-white/10 hover:text-white transition-all cursor-default">
                  <BookOpen className="w-3 h-3 text-ai-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

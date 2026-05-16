import { portfolioData } from "@/data/portfolioData";
import { GitBranch, BrainCircuit, ExternalLink } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="py-24 relative bg-ai-card border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ai-accent/10 border border-ai-accent/20 text-ai-accent text-sm font-medium mb-6">
              <BrainCircuit className="w-4 h-4" />
              Research & Open Source
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-sora mb-6">
              Active in the <br />
              <span className="text-ai-accent">AI Community</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {portfolioData.researchAndOpenSource.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {portfolioData.researchAndOpenSource.platforms.map((platform, idx) => (
                <a key={idx} href={platform.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-medium text-slate-300 hover:text-white transition-all cursor-pointer">
                  {platform.name}
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-ai-accent/20 to-transparent blur-3xl" />
            <div className="glassmorphism p-8 rounded-2xl border border-white/10 relative z-10 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-ai-accent/20 rounded-lg text-ai-accent">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Latest Experiment</h4>
                    <p className="text-xs text-slate-400">Graph Neural Networks</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="p-3 rounded bg-black/40 border border-white/5 text-slate-300">
                  <span className="text-ai-accent">import</span> torch<br />
                  <span className="text-ai-accent">import</span> torch_geometric
                </div>
                <div className="p-3 rounded bg-black/40 border border-white/5 text-slate-400">
                  <span className="text-ai-success"># Defining GNN layers for molecular embedding</span><br />
                  class HKGAT(torch.nn.Module):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super().__init__()<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

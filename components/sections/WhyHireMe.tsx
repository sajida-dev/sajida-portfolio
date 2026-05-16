import { CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="py-24 relative bg-[#0B1120] border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-sora mb-4">Why Hire Me?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to bring immediate value to an AI-driven startup or enterprise team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.whyHireMe.map((reason, idx) => (
            <div key={idx} className="flex gap-4 p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-ai-primary/30 transition-all group shadow-sm hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]">
              <div className="mt-1 shrink-0 text-ai-primary group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-ai-secondary transition-colors">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

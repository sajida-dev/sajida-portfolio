import { portfolioData } from "@/data/portfolioData";
import { Terminal, Award, Code2, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-6">
              Engineering <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">Scalable</span> <br />
              &amp; Intelligent Systems
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
              {portfolioData.about.description}
            </p>
            <div className="flex flex-col gap-3.5">
              {portfolioData.about.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3.5 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-800 text-sm md:text-base">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Visual Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <Terminal className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-lg mb-1.5 text-slate-900">Production Ready</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">Building robust multi-tenant architectures that scale securely.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <Code2 className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold text-lg mb-1.5 text-slate-900">Clean Code</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">Maintainable, strongly typed, and thoroughly documented.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <Award className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="font-bold text-lg mb-1.5 text-slate-900">Problem Solver</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed">Proven track record in algorithmic speed competitions.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-2xl border border-purple-400 text-white shadow-lg shadow-purple-500/20 relative overflow-hidden">
                <div className="text-4xl font-extrabold tracking-tight mb-1">
                  96.7<span className="text-2xl text-amber-300">%</span>
                </div>
                <p className="text-xs font-semibold text-purple-100 uppercase tracking-wider">National Skill Competency Percentile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

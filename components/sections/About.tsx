import { portfolioData } from "@/data/portfolioData";
import { Terminal, Award, Code2, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-sora mb-6">
              Engineering <span className="premium-gradient-text">Scalable</span> <span className="text-primary text-center"> &amp; </span><br />
              Intelligent Systems
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {portfolioData.about.description}
            </p>
            <div className="flex flex-col gap-4">
              {portfolioData.about.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Visual Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-card p-6 rounded-2xl border border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.15)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500" />
                <Terminal className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Production Ready</h3>
                <p className="text-sm text-muted-foreground">Building robust architectures that scale securely.</p>
              </div>
              <div className="glassmorphism p-6 rounded-2xl border border-border shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <Code2 className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-bold text-lg mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">Maintainable, strongly typed, and thoroughly documented.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glassmorphism p-6 rounded-2xl border border-border shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <Award className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Problem Solver</h3>
                <p className="text-sm text-muted-foreground">Proven track record in algorithmic optimization.</p>
              </div>
              <div className="bg-primary/30 p-6 rounded-2xl border border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.15)] relative overflow-hidden">
                <div className="text-4xl font-bold font-sora text-foreground mb-2">
                  96.7<span className="text-xl text-primary">%</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">National Skill Competency Percentile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

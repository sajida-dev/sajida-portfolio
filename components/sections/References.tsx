import { portfolioData } from "@/data/portfolioData";
import { Quote, Mail, ExternalLink, Linkedin, GraduationCap } from "lucide-react";

export default function References() {
  return (
    <section id="references" className="py-24 relative bg-ai-card/30 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-sora mb-4">References</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Supported by esteemed faculty and academic mentors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.references.map((ref, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-ai-card border border-white/5 relative group hover:border-ai-primary/30 transition-all">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-ai-primary/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-4">
                {ref.image && (
                  <img 
                    src={ref.image} 
                    alt={ref.name} 
                    className="w-16 h-16 rounded-full object-cover border border-white/10 shadow-lg"
                    loading="lazy"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold font-sora text-white mb-1">{ref.name}</h3>
                  <p className="text-ai-secondary text-sm font-medium">{ref.title}</p>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                <span className="text-slate-500 font-medium">Relationship:</span> {ref.relationship}
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${ref.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm text-slate-300 transition-colors">
                  <Mail className="w-4 h-4" />
                  {ref.email}
                </a>
                
                {/* Render Links */}
                {ref.links?.map((link, linkIdx) => (
                  <a key={linkIdx} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm text-slate-300 transition-colors">
                    {link.name === "LinkedIn" ? (
                      <Linkedin className="w-4 h-4" />
                    ) : link.name === "Google Scholar" ? (
                      <GraduationCap className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

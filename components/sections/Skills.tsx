import { portfolioData } from "@/data/portfolioData";
import { Server, Layout, BrainCircuit, Cloud, Database } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (title: string) => {
    if (title.includes("Laravel") || title.includes("Backend")) return <Server className="w-5 h-5 text-purple-600" />;
    if (title.includes("Full Stack") || title.includes("Frontend")) return <Layout className="w-5 h-5 text-pink-500" />;
    if (title.includes("Python") || title.includes("AI")) return <BrainCircuit className="w-5 h-5 text-amber-500" />;
    if (title.includes("Cloud") || title.includes("DevOps")) return <Cloud className="w-5 h-5 text-purple-600" />;
    if (title.includes("Database")) return <Database className="w-5 h-5 text-pink-500" />;
    return <Server className="w-5 h-5 text-purple-600" />;
  };

  return (
    <section id="skills" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-sans text-slate-900 mb-2">Technical Core Competency</h2>
          <p className="text-slate-500 text-sm font-medium">
            Categorized skills highlighting architecture, software development, and AI engineering depth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((category, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-slate-50/60 border border-slate-200/80 rounded-xl hover:border-purple-300 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-white border border-slate-200 rounded-lg">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="font-sans font-bold text-slate-900 text-base">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-purple-600 hover:border-purple-300 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

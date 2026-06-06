import { portfolioData } from "@/data/portfolioData";
import { Server, Layout, BrainCircuit, Cloud, Database } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Backend Engineering": return <Server className="w-5 h-5 text-blue-600" />;
      case "Frontend Engineering": return <Layout className="w-5 h-5 text-teal-600" />;
      case "AI & Machine Learning": return <BrainCircuit className="w-5 h-5 text-indigo-600" />;
      case "Cloud & DevOps": return <Cloud className="w-5 h-5 text-sky-600" />;
      case "Databases": return <Database className="w-5 h-5 text-emerald-600" />;
      default: return <Server className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-sora text-slate-900 mb-2">Technical Core Competency</h2>
          <p className="text-slate-500 text-sm font-medium">
            Categorized skills highlighting architecture, software development, and AI engineering depth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((category, idx) => (
            <div 
              key={idx} 
              className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-white border border-slate-200 rounded-lg">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="font-sora font-bold text-slate-900 text-base">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all cursor-default"
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

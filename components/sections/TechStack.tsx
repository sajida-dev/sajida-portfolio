"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Code2, Server, Database, Cloud, Layout, Braces } from "lucide-react";

export default function TechStack() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Frontend": return <Layout className="w-4 h-4" />;
      case "Backend": return <Server className="w-4 h-4" />;
      case "AI/ML": return <Braces className="w-4 h-4" />;
      case "Database": return <Database className="w-4 h-4" />;
      case "Deployment": return <Cloud className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-12 border-b border-white/5 relative z-10 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm font-medium text-slate-400 mb-6 text-center uppercase tracking-widest">
          Tech I Work With Daily
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {portfolioData.techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111827] border border-white/5 hover:border-ai-primary/50 transition-colors shadow-sm hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] group cursor-default"
            >
              <div className="text-slate-400 group-hover:text-ai-secondary transition-colors">
                {getIcon(tech.category)}
              </div>
              <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

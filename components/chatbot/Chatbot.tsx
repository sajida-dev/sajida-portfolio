"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "System initialized. How may I assist you with Sajida's portfolio?" }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const predefinedPrompts = [
    "Tell me about your AI projects",
    "Explain your Laravel experience",
    "Show deployment experience",
    "Download resume"
  ];

  const handlePrompt = (prompt: string) => {
    setMessages(prev => [...prev, { role: "user", content: prompt }]);
    setIsTyping(true);
    
    setTimeout(() => {
      let response = "I am a minimal AI routing module. In production, this connects to an LLM.";
      if (prompt.includes("AI projects")) {
        response = "Sajida builds production AI systems, including a DeBERTa-based Product Recommender and a GNN-based Molecule Generator.";
      } else if (prompt.includes("Laravel")) {
        response = "She has robust Laravel experience, building multi-tenant SaaS architectures, complex queue workers, and Stripe integrations.";
      } else if (prompt.includes("deployment")) {
        response = "She deploys scalable applications primarily using AWS (EC2, RDS, S3) and modern CI/CD pipelines.";
      } else if (prompt.includes("resume")) {
        response = `You can access the resume directly here: <a href="${portfolioData.contact.resumeUrl}" target="_blank" class="text-ai-secondary underline">View Resume PDF</a>`;
      }
      setIsTyping(false);
      setMessages(prev => [...prev, { role: "bot", content: response }]);
    }, 1500);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#111827] border border-ai-secondary/30 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all z-50 group hover:scale-105 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <div className="absolute inset-0 bg-ai-secondary/20 rounded-full blur-md group-hover:bg-ai-secondary/40 transition-colors" />
        <div className="relative w-4 h-4 rounded-full bg-ai-secondary shadow-[0_0_15px_rgba(6,182,212,1)] animate-pulse" />
      </button>

      <div className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-[#111827]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-all duration-300 z-50 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-ai-secondary/10 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-ai-secondary shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
            <h3 className="font-sora font-semibold text-sm tracking-wide">AI Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex-1 p-4 h-[350px] overflow-y-auto flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[85%] p-3 rounded-xl text-sm ${msg.role === 'bot' ? 'bg-white/5 border border-white/5 text-slate-300 rounded-tl-sm' : 'bg-ai-primary/20 border border-ai-primary/30 text-white rounded-tr-sm'}`}>
                {msg.role === 'bot' ? (
                   <span dangerouslySetInnerHTML={{ __html: msg.content }} />
                ) : msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex justify-start">
               <div className="bg-white/5 border border-white/5 p-3 rounded-xl rounded-tl-sm flex gap-1">
                 <div className="w-1.5 h-1.5 bg-ai-secondary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                 <div className="w-1.5 h-1.5 bg-ai-secondary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                 <div className="w-1.5 h-1.5 bg-ai-secondary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
               </div>
             </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="p-3 border-t border-white/10 flex flex-wrap gap-2 bg-black/20">
          {predefinedPrompts.map((prompt, i) => (
            <button key={i} onClick={() => handlePrompt(prompt)} className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 hover:bg-ai-secondary/20 hover:text-white hover:border-ai-secondary/30 border border-white/10 transition-all text-slate-400 text-left">
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

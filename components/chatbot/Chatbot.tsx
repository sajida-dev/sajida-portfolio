"use client";

import { useState, useRef, useEffect } from "react";
import { X, MessageSquare } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! I am Sajida's virtual assistant. How can I help you explore her portfolio?" }
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
      let response = "I am a mock AI routing module. In a live system, this connects directly to an LLM assistant.";
      if (prompt.includes("AI projects")) {
        response = "Sajida builds production AI systems, including a DeBERTa-based Product Recommender and a GNN-based Molecule Generator.";
      } else if (prompt.includes("Laravel")) {
        response = "She has commercial Laravel experience, building multi-tenant SaaS architectures, complex queue workers, dynamic RBAC systems, and Stripe integrations.";
      } else if (prompt.includes("deployment")) {
        response = "She deploys scalable applications primarily using AWS (EC2, SageMaker, S3), Hostinger, and modern CI/CD setups.";
      } else if (prompt.includes("resume")) {
        response = `You can download the resume directly here: <a href="/api/download-resume" class="text-blue-600 font-bold underline">Download Resume PDF</a>`;
      }
      setIsTyping(false);
      setMessages(prev => [...prev, { role: "bot", content: response }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg transition-all z-40 hover:scale-105 cursor-pointer ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <div className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl border border-slate-200 shadow-xl flex flex-col overflow-hidden transition-all duration-300 z-40 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-sora font-semibold text-slate-800 text-xs">Assistant (Mock AI)</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 p-4 h-[320px] overflow-y-auto flex flex-col gap-3.5 bg-slate-50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[85%] p-3 rounded-xl text-xs font-semibold leading-relaxed ${
                msg.role === 'bot' 
                  ? 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm' 
                  : 'bg-blue-600 text-white rounded-tr-none'
              }`}>
                {msg.role === 'bot' ? (
                   <span dangerouslySetInnerHTML={{ __html: msg.content }} />
                ) : msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="flex justify-start">
               <div className="bg-white border border-slate-200 p-3 rounded-xl rounded-tl-none flex gap-1 shadow-sm">
                 <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                 <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                 <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
               </div>
             </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Predefined Prompts */}
        <div className="p-3 border-t border-slate-200 flex flex-wrap gap-1.5 bg-white">
          {predefinedPrompts.map((prompt, i) => (
            <button 
              key={i} 
              onClick={() => handlePrompt(prompt)} 
              className="text-[10px] px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 font-bold transition-all text-left cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

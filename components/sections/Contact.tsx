import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-ai-primary/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-sora mb-4">Let's Connect</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Open to AI Internships, Laravel Roles, Remote Opportunities, and Freelance Work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl glassmorphism border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-ai-bg/50 border border-white/10 focus:border-ai-primary outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-ai-bg/50 border border-white/10 focus:border-ai-primary outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-ai-bg/50 border border-white/10 focus:border-ai-primary outline-none transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="button" className="w-full py-3 rounded-lg bg-ai-primary hover:bg-ai-primary/80 text-white font-bold transition-all shadow-[0_0_15px_rgba(124,58,237,0.4)]">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8 lg:pl-12">
            <div className="space-y-6">
              <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white group">
                <div className="p-4 rounded-xl bg-ai-card border border-white/5 group-hover:border-ai-primary/50 transition-colors">
                  <Mail className="w-6 h-6 text-ai-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-sm text-slate-400">{portfolioData.contact.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="p-4 rounded-xl bg-ai-card border border-white/5 group-hover:border-ai-secondary/50 transition-colors">
                  <Phone className="w-6 h-6 text-ai-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone / WhatsApp</h4>
                  <p className="text-sm text-slate-400">{portfolioData.contact.phone}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="font-bold text-lg mb-4 text-white">Social Profiles</h4>
              <div className="flex gap-4">
                <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={portfolioData.contact.portfolio} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-all">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

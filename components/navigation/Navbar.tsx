"use client";

import { useEffect, useState } from "react";
import { X, FileText, Download } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#hero", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Work", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Contact", href: "#contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === "hero" ? "home" : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className={`flex items-center justify-between rounded-full px-6 py-3 transition-all ${scrolled ? "bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm" : "bg-transparent border border-transparent"}`}>
            <a href="#hero" className="flex items-center gap-2 group">
              <Image
                src="/sajida-javed-brand-logo.webp"
                alt="Sajida Javed Logo"
                width={180}
                height={42}
                priority
                className="h-8 md:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </a>

            <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-slate-600">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative transition-colors duration-200 py-1 ${activeSection === item.id
                    ? "text-purple-600 font-bold"
                    : "hover:text-slate-900"
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white text-xs font-semibold transition-all shadow-sm hover:shadow cursor-pointer flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" /> Resume
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Embedded Resume Preview Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-4xl w-full h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                <span className="font-sora font-semibold text-slate-800 text-sm">Sajida_Javed_Resume.pdf</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/Sajida Javed - Associate Software Engineer.pdf"
                  download="Sajida Javed - Associate Software Engineer.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-xs font-semibold transition-all"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
                {/* PDF preview */}
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-slate-100 relative">
              <iframe
                src="https://docs.google.com/document/d/1IGvG4b7Spj8dAmoRvLBO3Iah8ofvOIOhLI9ocD15H28/preview"
                className="w-full h-full border-0 absolute inset-0"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

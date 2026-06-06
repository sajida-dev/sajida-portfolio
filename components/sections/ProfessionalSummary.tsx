"use client";

import { Award } from "lucide-react";

export default function ProfessionalSummary() {
  return (
    <section id="summary" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Section Icon */}
        <div className="mx-auto p-2.5 bg-blue-50 text-blue-600 rounded-full w-fit mb-6">
          <Award className="w-5 h-5" />
        </div>

        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-slate-900 font-semibold tracking-tight text-[28px] md:text-[32px]">
            Professional Focus
          </h2>
        </div>

        {/* Text Block */}
        <div className="max-w-3xl mx-auto">
          <p className="font-inter text-[16px] md:text-[18px] leading-[1.8] text-slate-650 font-medium text-center">
            Full-Stack Developer and AI Engineer specializing in production-ready Laravel web applications, multi-tenant SaaS architectures, and machine learning pipelines. Over 3 years of commercial experience resolving database bottlenecks, designing secure RBAC systems, and deploying scalable cloud infrastructures, combined with educational leadership as a Stanford Code in Place Section Leader.
          </p>
        </div>

      </div>
    </section>
  );
}

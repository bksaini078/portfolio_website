import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const OverviewTab = ({ profile }) => {
  return (
    <div className="space-y-24 animate-in fade-in duration-700">
      <section className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-8 space-y-8">
          <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-sm">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold italic">
              Applied AI Researcher
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-tight font-medium italic text-slate-800">
            Bridging <span className="text-black font-semibold not-italic underline decoration-slate-200 underline-offset-8">Industrial Digital Twins</span> and the fluid complexity of <span className="text-black font-semibold not-italic underline decoration-slate-200 underline-offset-8">Human Cognition.</span>
          </h2>
          <p className="text-xl leading-relaxed text-slate-600 font-sans max-w-2xl">
            Specializing in <span className="text-black font-medium">Multi-Agent Systems</span> and LLM-based behavioral simulation to transform how organizations interact with data and users.
          </p>
          <div className="flex space-x-6 font-sans text-xs pt-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center space-x-2 border-b border-black pb-1 hover:text-blue-600 transition-colors"
            >
              <Mail size={14} /> <span>{profile.email}</span>
            </a>
            <a
              href={`https://linkedin.com/in/${profile.linkedin}`}
              className="flex items-center space-x-2 border-b border-black pb-1 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={14} /> <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="aspect-[4/5] bg-slate-100 rounded-sm border border-slate-200 overflow-hidden grayscale shadow-inner transition-all hover:grayscale-0">
            <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverviewTab;

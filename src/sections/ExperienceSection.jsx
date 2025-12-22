import React from 'react';
import { MapPin } from 'lucide-react';

const ExperienceSection = ({ experience }) => (
  <div className="space-y-16 animate-in slide-in-from-bottom-4 duration-500">
    <div className="border-b border-black pb-4">
      <h2 className="text-xs font-black uppercase tracking-[0.4em] font-sans text-slate-400">Professional Experience</h2>
    </div>
    <div className="space-y-20">
      {experience.map((exp, idx) => (
        <div key={idx} className="grid md:grid-cols-12 gap-8 relative">
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center gap-3">
              {exp.icon}
              <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest">{exp.period}</span>
            </div>
            <h3 className="text-2xl font-bold font-sans leading-tight mt-2">{exp.role}</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest font-sans">{exp.company}</p>
            <p className="text-[10px] text-slate-400 flex items-center gap-1 font-sans"><MapPin size={10}/> {exp.location}</p>
            {exp.stats && (
              <div className="mt-4 p-3 bg-slate-50 border-l-2 border-slate-200">
                <p className="text-[9px] font-bold font-mono text-slate-600 uppercase leading-relaxed">{exp.stats}</p>
              </div>
            )}
          </div>
          <div className="md:col-span-8 space-y-4">
            <ul className="space-y-3">
              {exp.points.map((point, pIdx) => (
                <li key={pIdx} className="flex gap-4 text-[13px] text-slate-600 font-sans leading-relaxed">
                  <span className="text-slate-300 font-mono mt-0.5">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceSection;

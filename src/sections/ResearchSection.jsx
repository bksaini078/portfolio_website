import React from 'react';

const ResearchSection = ({ researchProjects }) => (
  <div className="space-y-16 animate-in slide-in-from-bottom-4 duration-500">
    <div className="border-b border-black pb-4">
      <h2 className="text-xs font-black uppercase tracking-[0.4em] font-sans text-slate-400">Research Portfolio</h2>
    </div>
    <div className="grid gap-16">
      {researchProjects.map((project, idx) => (
        <div key={idx} className="group border-b border-slate-100 pb-16 last:border-0">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-3">
                {project.icon}
                <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest">{project.period}</span>
              </div>
              <h4 className="text-[11px] font-bold font-sans text-slate-400 uppercase tracking-wider">{project.org}</h4>
              <div className="pt-2">
                <span className="px-2 py-0.5 border border-slate-200 text-[9px] font-mono text-slate-400 uppercase tracking-tighter rounded-sm">
                  {project.type}
                </span>
              </div>
            </div>
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-2xl font-bold font-sans tracking-tight group-hover:text-blue-700 transition-colors">
                {project.title}
              </h3>
              <ul className="space-y-3">
                {project.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-4 text-[13px] text-slate-600 font-sans leading-relaxed">
                    <span className="text-slate-300 font-mono mt-0.5">/</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ResearchSection;

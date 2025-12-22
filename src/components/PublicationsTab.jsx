import React from 'react';

const patents = [
  {
    id: "US11316748B2",
    title: "Generating and managing virtual industrial devices in an industrial network",
    assignee: "Siemens AG"
  },
  {
    id: "Pending",
    title: "Proactive Personalization based on appearance",
    assignee: "Lotus Tech"
  },
  {
    id: "Pending",
    title: "Proactive Smart Travel Checklist",
    assignee: "Lotus Tech"
  },
  {
    id: "WO2017076433A1",
    title: "Intelligent heat, ventilation, and air conditioning system",
    assignee: "Siemens AG"
  }
];

const PublicationsTab = () => {
  return (
    <div className="space-y-16 animate-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-10">
        <div className="border-b border-black pb-4">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] font-sans text-slate-400">
            Intellectual Property & Record
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {patents.map((patent, idx) => (
            <div
              key={idx}
              className="space-y-2 p-4 border border-slate-100 rounded-sm hover:border-slate-300 transition-colors"
            >
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                {patent.id}
              </span>
              <h4 className="font-sans font-bold text-sm leading-snug">{patent.title}</h4>
              <p className="text-[10px] text-slate-500 uppercase">{patent.assignee}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PublicationsTab;

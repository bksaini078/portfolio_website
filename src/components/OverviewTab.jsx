import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const researchFocus = [
  {
    title: 'LLM-based Multi-Agent Systems for Decision Support',
    description:
      'Design and evaluation of collaborative AI agents for complex decision-making. Focus on role-based reasoning, multi-criteria evaluation, and structured aggregation of agent outputs with human oversight.',
  },
  {
    title: 'Human-in-the-Loop and Explainable AI Systems',
    description:
      'Development of AI systems that keep humans in control through transparent reasoning, intermediate outputs, and adjustable autonomy. Emphasis on explainability, trust, and usability in enterprise contexts.',
  },
  {
    title: 'Behavioral Simulation and Digital Human Modeling',
    description:
      'Research on LLM-based agents that simulate human perspectives for market research, user studies, and strategic analysis. Focus on methodological evaluation, alignment limits, and reliability of agent-based behavioral approximations.',
  },
];

const OverviewTab = ({ profile }) => {
  return (
    <div className="space-y-24 animate-in fade-in duration-700">
      {/* Hero */}
      <section className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-8 space-y-8">
          <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-sm">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold italic">
              Applied AI Researcher
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl leading-tight font-medium text-slate-900">
            <span className="font-semibold">Multi-Agent Systems</span> &amp;{' '}
            <span className="font-semibold">Behavioral Simulation</span>
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-2xl">
            Focused on multi-agent systems and LLM-driven behavioral simulation, with an emphasis on designing and evaluating explainable, human-centered AI for decision support, market research, and enterprise solutions.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-2xl">
            Work centers on collaborative agent reasoning and contextual grounding, building mechanisms that ensure transparency, interpretability, and human oversight in complex, high-stakes environments.
          </p>
          <div className="flex space-x-6 font-sans text-xs pt-4">
            <a
              href={`https://linkedin.com/in/${profile.linkedin}`}
              className="flex items-center space-x-2 border-b border-black pb-1 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={14} /> <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/bksaini078"
              className="flex items-center space-x-2 border-b border-black pb-1 hover:text-blue-600 transition-colors"
            >
              <Github size={14} /> <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="max-w-xs ml-auto">
            <div className="aspect-square bg-slate-100 rounded-full border border-slate-200 overflow-hidden grayscale shadow-inner">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="space-y-6">
        <div className="space-y-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Research Focus
          </h3>
          <div className="space-y-6">
            {researchFocus.map((item, idx) => (
              <div key={idx} className="border-l-2 border-slate-200 pl-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverviewTab;

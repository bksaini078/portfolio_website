import React, { useState } from 'react';
import {
  Users,
  Fingerprint,
  Dna,
  BrainCircuit,
  FileText,
  Zap,
  Smartphone,
  Layers
} from 'lucide-react';

const researchProjects = [
  {
    title: 'SozioMimic',
    org: 'Research project with Ministry of Economic Affairs, Labour and Tourism',
    period: 'Feb 2025 – Oct 2025',
    type: 'Digital Human Simulation',
    icon: <Fingerprint size={20} className="text-purple-500" />,
    context:
      'Traditional market and user research methods face limitations in scalability, cost, and temporal consistency.',
    input: [
      'In-depth interviews',
      'Diary studies and longitudinal surveys',
      'Demographic and contextual metadata'
    ],
    approach: [
      'Designed LLM-based digital human representations using structured prompting and retrieval mechanisms',
      'Integrated multi-agent reasoning to simulate individual perspectives',
      'Evaluated alignment, consistency, and temporal variation in simulated responses'
    ],
    outcome: [
      'Research platform for digital human simulation',
      'Empirical insights into the limits of human–agent alignment',
      'Contributions to ongoing academic publications and research proposals'
    ]
  },
  {
    title: 'Conversational Analytics Platform',
    org: 'Industry Project with Automotive Company',
    period: 'Oct 2025 – Dec 2025',
    type: 'Industry Project',
    icon: <Users size={20} className="text-blue-500" />,
    context:
      'Organizations require scalable methods to analyze qualitative feedback and user opinions beyond traditional survey-based approaches.',
    input: [
      'Conversational feedback and survey responses',
      'Behavioral and contextual signals'
    ],
    approach: [
      'Developed LLM-based digital human simulations for behavioral analysis',
      'Personalized survey workflows using agentic reasoning strategies',
      'Investigated representativeness and methodological trade-offs'
    ],
    outcome: [
      'Scalable framework for AI-supported user research',
      'Reduced cost and effort of qualitative analysis',
      'Methodological insights into agent-based market and UX research'
    ]
  },
  {
    title: 'LLM-Based Multi-Agent System for Multi-Criteria Decision Support',
    org: 'Fraunhofer IAO',
    period: 'Nov 2023 – Present',
    type: 'Multi-Agent Decision Support',
    icon: <BrainCircuit size={20} className="text-indigo-500" />,
    context:
      'Decision-makers often evaluate ideas using multiple conflicting criteria while working with unstructured inputs.',
    input: [
      'Product and innovation ideas',
      'Unstructured documents such as PDFs and presentations',
      'Evaluation criteria and stakeholder constraints'
    ],
    approach: [
      'Designed a role-based multi-agent architecture using LLMs',
      'Implemented structured reasoning and aggregation mechanisms',
      'Integrated human-in-the-loop controls and explainability features'
    ],
    outcome: [
      'Decision support prototype and AI demonstrator',
      'Structured evaluation reports with transparent reasoning',
      'Used in Fraunhofer events, workshops, and AI summits'
    ]
  },
  {
    title: 'CARE-LLM: Interactive Dashboard for Medical Information Support',
    org: 'Fraunhofer FIT & University Hospital of Cologne',
    period: 'Aug 2024 – Dec 2024',
    type: 'Medical Decision Support',
    icon: <Dna size={20} className="text-green-500" />,
    context:
      'Patients with chronic kidney disease face difficulties understanding complex medical information after hospital discharge.',
    input: [
      'Medical reports and structured clinical data',
      'Patient-centered information requirements'
    ],
    approach: [
      'Designed a multi-agent LLM framework to simplify medical information',
      'Developed an interactive dashboard focused on patient comprehension',
      'Applied human-centered design principles in a healthcare context'
    ],
    outcome: [
      'Functional prototype for patient-facing medical explanations',
      'Reduced cognitive load for healthcare professionals',
      'Basis for future evaluation and clinical adaptation'
    ]
  },
  {
    title: 'Automatic Tender Document Processing and Offer Generation',
    org: 'Industry Project with FEGA & Schmitt Elektrogroßhandel GmbH',
    period: 'Aug 2023 – Nov 2024',
    type: 'Industry Project',
    icon: <FileText size={20} className="text-amber-600" />,
    context:
      'Manual processing of tender documents is slow and error-prone due to unstructured specifications.',
    input: [
      'Tender documents in PDF and text formats',
      'Product catalogs and internal databases'
    ],
    approach: [
      'Designed a semantic search and retrieval system using LLMs and vector databases',
      'Implemented document parsing, metadata extraction, and ranking strategies'
    ],
    outcome: [
      'Accuracy@3 of 95 percent and Precision@3 of 90 percent',
      'Significant reduction in search and offer preparation time',
      'Prototype prepared for cloud deployment'
    ]
  },
  {
    title: 'Smart Error Log System',
    org: 'Research Project with Tesat-Spacecom GmbH & Co. KG',
    period: 'Sep 2023 – Oct 2023',
    type: 'Space Research',
    icon: <Zap size={20} className="text-orange-500" />,
    context:
      'Complex system error logs are difficult to interpret quickly during fault analysis.',
    input: [
      'Technical error logs',
      'Engineering documentation and expert knowledge'
    ],
    approach: [
      'Identified key use cases through expert workshops',
      'Developed LLM-based prototypes for log interpretation and summarization'
    ],
    outcome: [
      'AI-assisted error analysis prototypes',
      'Improved interpretability of technical logs',
      'Knowledge transfer through training sessions'
    ]
  },
  {
    title: 'Proactive HMI for Luxury Cars',
    org: 'Research Project with Lotus Tech, Frankfurt',
    period: 'Aug 2022 – Jul 2023',
    type: 'Smart Car Research',
    icon: <Smartphone size={20} className="text-red-500" />,
    context:
      'Luxury vehicles increasingly rely on intelligent and personalized human–machine interfaces.',
    input: [
      'User interviews and workshops',
      'In-vehicle interaction scenarios'
    ],
    approach: [
      'Conducted qualitative user research to identify high-value HMI use cases',
      'Designed and iteratively refined AI-driven interaction concepts'
    ],
    outcome: [
      'Five validated HMI prototypes',
      'Four patentable ideas in the smart automotive HMI domain'
    ]
  },
  {
    title: 'Dynamic Virtualization of Industrial Devices (Patented)',
    org: 'Siemens',
    period: 'Jan 2017 – Dec 2018',
    type: 'Patented Innovation',
    icon: <Layers size={20} className="text-blue-900" />,
    context:
      'Industrial software testing relied heavily on physical hardware, limiting coverage and increasing costs.',
    input: [
      'Industrial device communication protocols',
      'Engineering station software'
    ],
    approach: [
      'Designed a system to generate and manage virtual industrial devices',
      'Enabled realistic software testing without physical hardware'
    ],
    outcome: [
      'Patented virtualization system',
      'Increased test coverage and reduced hardware dependency',
      'Supported shift-left testing strategies'
    ]
  }
];

const ResearchTab = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleIndex = (idx) => {
    setExpandedIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
      <div className="border-b border-black pb-3">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] font-sans text-slate-400">
          Project Portfolio
        </h2>
      </div>

      <div className="grid gap-10">
        {researchProjects.map((project, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              className="group border-b border-slate-100 pb-10 last:border-0 last:pb-0"
            >
              <div className="grid md:grid-cols-12 gap-8">
                {/* Meta */}
                <div className="md:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <span className="font-mono text-[11px] md:text-[12px] text-blue-600 uppercase tracking-widest">
                      {project.period}
                    </span>
                  </div>
                  <h4 className="text-[11px] font-bold font-sans text-slate-400 uppercase tracking-wider">
                    {project.org}
                  </h4>
                  {project.type && (
                    <div className="pt-2">
                      <span className="px-2 py-0.5 border border-slate-200 text-[9px] font-mono text-slate-400 uppercase tracking-tighter rounded-sm">
                        {project.type}
                      </span>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="mt-3 text-[11px] font-mono uppercase tracking-[0.16em] text-slate-600 hover:text-blue-700"
                  >
                    {isExpanded ? 'Hide details' : 'Show details'}
                  </button>
                </div>

                {/* Content */}
                <div className="md:col-span-8 space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>

                  {/* Always show context as overview */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Context
                    </p>
                    <p className="mt-1 text-[13px] text-slate-600 leading-relaxed">
                      {project.context}
                    </p>
                  </div>

                  {isExpanded && (
                    <div className="grid md:grid-cols-2 gap-5 mt-3">
                      <div className="space-y-3">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Input
                          </p>
                          <ul className="mt-2 space-y-2">
                            {project.input.map((item, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-[13px] text-slate-600 font-sans leading-relaxed"
                              >
                                <span className="text-slate-300 font-mono mt-0.5">/</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Approach
                          </p>
                          <ul className="mt-2 space-y-2">
                            {project.approach.map((item, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-[13px] text-slate-600 font-sans leading-relaxed"
                              >
                                <span className="text-slate-300 font-mono mt-0.5">/</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Output / Outcome
                          </p>
                          <ul className="mt-2 space-y-2">
                            {project.outcome.map((item, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-[13px] text-slate-600 font-sans leading-relaxed"
                              >
                                <span className="text-slate-300 font-mono mt-0.5">/</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* end content */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResearchTab;

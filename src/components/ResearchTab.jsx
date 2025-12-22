import React from 'react';
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
    title: "Conversational Analytics Platform",
    org: "Automotive Industry Collaboration",
    period: "Oct. 2025 - Dec. 2025",
    type: "Industry Project",
    icon: <Users size={20} className="text-blue-500" />,
    points: [
      "Developed AI-driven digital human twins to simulate individual behaviour for scalable user research.",
      "Integrated advanced LLM-based systems to personalise survey workflows.",
      "Contributed to methodological innovations by evaluating representativeness for AI-supported market analysis."
    ]
  },
  {
    title: "Soziomimic",
    org: "Fraunhofer IAO Research Initiative",
    period: "Feb. 2025 - Oct. 2025",
    type: "Research Initiative",
    icon: <Fingerprint size={20} className="text-purple-500" />,
    points: [
      "Simulating individual behaviour using digital human twins for strategic communication planning.",
      "Hybrid participatory design methods enabled through personalized LLM survey workflows.",
      "Designing cost-effective frameworks for UX testing using AI-driven agents."
    ]
  },
  {
    title: "CARE-LLM",
    org: "University Hospital of Cologne & Fraunhofer FIT",
    period: "Aug. 2024 - Present",
    type: "Medical Research",
    icon: <Dna size={20} className="text-green-500" />,
    points: [
      "Multi-agent framework to simplify complex medical data for kidney disease patients.",
      "Bridging communication gaps between healthcare professionals and patients post-discharge.",
      "Enhancing patient interaction with intricate medical documentation."
    ]
  },
  {
    title: "Multi-Agent System for Decision Support",
    org: "AI Summit / Fraunhofer Open Lab",
    period: "Nov. 2023 - Present",
    type: "AI Demonstrator",
    icon: <BrainCircuit size={20} className="text-indigo-500" />,
    points: [
      "Virtualizing product ideation process through stakeholder simulation.",
      "Automated suggestion generation and reporting for complex multi-criteria decisions.",
      "Primary demonstrator for AI awareness in the Stuttgart region."
    ]
  },
  {
    title: "Automatic Tender Document Processing",
    org: "FEGA & Schmitt Elektrogroßhandel GmbH",
    period: "Aug. 2023 - Nov. 2024",
    type: "Industry Deployment",
    icon: <FileText size={20} className="text-amber-600" />,
    points: [
      "Semantic search retrieval system for products based on complex tender descriptions.",
      "Achieved accuracy@3 of 95% and precision@3 of 90%.",
      "Significantly reduced manual search time for offer generation."
    ]
  },
  {
    title: "Smart Error Log System",
    org: "Tesat-Spacecom GmbH & Co. KG",
    period: "Sep. 2023 - Oct. 2023",
    type: "Space Research",
    icon: <Zap size={20} className="text-orange-500" />,
    points: [
      "Prototyping LLM-driven error log analysis for space communication infrastructure.",
      "Knowledge transfer workshops for organizational adoption of generative AI.",
      "Identification of high-impact AI use cases for technical log management."
    ]
  },
  {
    title: "Proactive HMI for Luxury Cars",
    org: "Lotus Tech, Frankfurt",
    period: "Aug. 2022 - Jul. 2023",
    type: "Smart Car Research",
    icon: <Smartphone size={20} className="text-red-500" />,
    points: [
      "Futuristic personalization and digital agent recommendation in the luxury segment.",
      "Developed 5 distinct use case prototypes validated through user testing.",
      "Directly led to 4 patentable ideas in the Smart Car HMI domain."
    ]
  },
  {
    title: "Dynamic Virtualization of Industrial Device",
    org: "SIEMENS",
    period: "Jan. 2017 - Dec. 2018",
    type: "Patented Innovation",
    icon: <Layers size={20} className="text-blue-900" />,
    points: [
      "Novel system to create and manage virtual industrial devices for software testing.",
      "Eliminated physical hardware dependencies, enabling 'shift left' testing strategies.",
      "Improved product quality by simulating rare and difficult-to-replicate hardware failure scenarios."
    ]
  }
];

const ResearchTab = () => {
  return (
    <div className="space-y-16 animate-in slide-in-from-bottom-4 duration-500">
      <div className="border-b border-black pb-4">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] font-sans text-slate-400">
          Research Portfolio
        </h2>
      </div>

      <div className="grid gap-16">
        {researchProjects.map((project, idx) => (
          <div key={idx} className="group border-b border-slate-100 pb-16 last:border-0">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  {project.icon}
                  <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest">
                    {project.period}
                  </span>
                </div>
                <h4 className="text-[11px] font-bold font-sans text-slate-400 uppercase tracking-wider">
                  {project.org}
                </h4>
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
                    <li
                      key={pIdx}
                      className="flex gap-4 text-[13px] text-slate-600 font-sans leading-relaxed"
                    >
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
};

export default ResearchTab;

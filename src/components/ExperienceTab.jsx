import React from 'react';
import { Microscope, BarChart3, GraduationCap, Award, MapPin } from 'lucide-react';

const experience = [
  {
    role: "Applied AI Researcher",
    company: "Fraunhofer IAO",
    location: "Stuttgart, Germany",
    period: "Jul. 2022 – Now",
    stats: "7 Prototypes | 4 Patent Applications | 1 Paper Co-author | 1 Product Deployed",
    points: [
      "Focused on developing and implementing solutions based on large language models and multi-agent systems.",
      "Designing and developing AI demonstrators to showcase during AI-Summit and Fraunhofer events in Germany.",
      "Partnering with industries across various domains to co-create innovative and practical solutions.",
      "Providing consultation to various industries and SMEs on AI strategy.",
      "Collaboration with the Baden-Württemberg Ministry to empower local businesses in AI adoption.",
      "Led knowledge-sharing sessions for Technology Management master's students and industry professionals."
    ],
    icon: <Microscope className="text-blue-600" size={20} />
  },
  {
    role: "Data Science and Engineering Intern",
    company: "Schaeffler Technologies AG & Co. KG",
    location: "Germany",
    period: "Feb. 2021 – Jul. 2021",
    points: [
      "Developed a comprehensive Power BI dashboard for shop floor and management, providing insights into precision bearing manufacturing.",
      "Developed strategic dashboards for real-time monitoring of IoT devices, enhancing operational insights.",
      "Managed extensive industrial data synthesis, implementing noise strategies to improve model accuracy and reliability."
    ],
    icon: <BarChart3 className="text-emerald-600" size={20} />
  },
  {
    role: "Research Assistant",
    company: "University of Koblenz and Landau",
    location: "Germany",
    period: "Sep. 2020 – Feb. 2021",
    points: [
      "Researched weakly supervised fake news detection methods (Mean Teacher, VAT, Pseudo-Labelling) with noise strategies.",
      "Conducted empirical study of transformer architectures (BERT/DistilBERT) and attention mechanisms for classification.",
      "Master Thesis: Assessment of Mean Teacher and Adversarial Unlabelled Data training approaches for language models."
    ],
    icon: <GraduationCap className="text-purple-600" size={20} />
  },
  {
    role: "Senior Consultant",
    company: "SIEMENS",
    location: "Bangalore, India",
    period: "May 2011 – Feb. 2019",
    stats: "2 Patents | 26 Ideas | 5 Awards | 500+ Bugs Found | 4 Prototypes | 6 Lean Initiatives",
    points: [
      "Patented a dynamic virtualization solution eliminating hardware dependencies, increasing test coverage by 38%.",
      "Designed a pluggable magnetic connector prototype that reduced manual effort by 98%.",
      "Built AR-based control prototype and formally recognized as a 'Tech Expert' by Siemens.",
      "Received 'LEAN Champion' recognition for successful automation of process bottlenecks."
    ],
    icon: <Award className="text-blue-900" size={20} />
  }
];

const ExperienceTab = () => {
  return (
    <div className="space-y-16 animate-in slide-in-from-bottom-4 duration-500">
      <div className="border-b border-black pb-4">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] font-sans text-slate-400">
          Professional Experience
        </h2>
      </div>

      <div className="space-y-20">
        {experience.map((exp, idx) => (
          <div key={idx} className="grid md:grid-cols-12 gap-8 relative">
            <div className="md:col-span-4 space-y-2">
              <div className="flex items-center gap-3">
                {exp.icon}
                <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest">
                  {exp.period}
                </span>
              </div>
              <h3 className="text-2xl font-bold font-sans leading-tight mt-2">{exp.role}</h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest font-sans">
                {exp.company}
              </p>
              <p className="text-[10px] text-slate-400 flex items-center gap-1 font-sans">
                <MapPin size={10} /> {exp.location}
              </p>
              {exp.stats && (
                <div className="mt-4 p-3 bg-slate-50 border-l-2 border-slate-200">
                  <p className="text-[9px] font-bold font-mono text-slate-600 uppercase leading-relaxed">
                    {exp.stats}
                  </p>
                </div>
              )}
            </div>
            <div className="md:col-span-8 space-y-4">
              <ul className="space-y-3">
                {exp.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex gap-4 text-[13px] text-slate-600 font-sans leading-relaxed"
                  >
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
};

export default ExperienceTab;

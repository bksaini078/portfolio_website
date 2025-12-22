import React, { useState, useEffect } from 'react';
import { 
  Mail, Github, Linkedin, ExternalLink, 
  Settings, Smartphone, Globe, 
  Dna, Terminal, GraduationCap,
  Zap, CheckCircle2,
  TrendingUp, Lightbulb, Fingerprint,
  Target, Calendar, Building2, MapPin,
  Users, Award, BarChart3, Search, 
  FileText, ShieldCheck, Microscope,
  BrainCircuit, Database, Layers
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profile = {
    name: "Bhupender Kumar Saini",
    title: "Applied AI Researcher",
    affiliation: "Fraunhofer IAO • Stuttgart, Germany",
    email: "bksaini078@gmail.com",
    linkedin: "bksaini078",
    github: "bksaini078",
    location: "Stuttgart, Germany",
    photo: "src/assets/bhupender_photo.png"
  };

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

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-serif selection:bg-blue-100">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 border-slate-200 shadow-sm' : 'bg-transparent py-8 border-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-baseline">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight uppercase font-sans">{profile.name}</h1>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{profile.affiliation}</span>
          </div>
          
          <nav className="flex space-x-8 font-sans text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {['overview', 'experience', 'research', 'publications'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`hover:text-black transition-colors ${activeTab === tab ? 'text-black border-b-2 border-black pb-1' : ''}`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-40 pb-24">
        {activeTab === 'overview' && (
          <div className="space-y-24 animate-in fade-in duration-700">
            <section className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8 space-y-8">
                <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-sm">
                  <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold italic">Applied AI Researcher</span>
                </div>
                <h2 className="text-4xl md:text-5xl leading-tight font-medium italic text-slate-800">
                  Bridging <span className="text-black font-semibold not-italic underline decoration-slate-200 underline-offset-8">Industrial Digital Twins</span> and the fluid complexity of <span className="text-black font-semibold not-italic underline decoration-slate-200 underline-offset-8">Human Cognition.</span>
                </h2>
                <p className="text-xl leading-relaxed text-slate-600 font-sans max-w-2xl">
                  Specializing in <span className="text-black font-medium">Multi-Agent Systems</span> and LLM-based behavioral simulation to transform how organizations interact with data and users.
                </p>
                <div className="flex space-x-6 font-sans text-xs pt-4">
                  <a href={`mailto:${profile.email}`} className="flex items-center space-x-2 border-b border-black pb-1 hover:text-blue-600 transition-colors">
                    <Mail size={14} /> <span>{profile.email}</span>
                  </a>
                  <a href={`https://linkedin.com/in/${profile.linkedin}`} className="flex items-center space-x-2 border-b border-black pb-1 hover:text-blue-600 transition-colors">
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
        )}

        {activeTab === 'experience' && (
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
        )}

        {activeTab === 'research' && (
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
        )}

        {activeTab === 'publications' && (
          <div className="space-y-16 animate-in slide-in-from-bottom-4 duration-500">
            <section className="space-y-10">
              <div className="border-b border-black pb-4">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] font-sans text-slate-400">Intellectual Property & Record</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                {[
                  { id: "US11316748B2", title: "Generating and managing virtual industrial devices in an industrial network", assignee: "Siemens AG" },
                  { id: "Pending", title: "Proactive Personalization based on appearance", assignee: "Lotus Tech" },
                  { id: "Pending", title: "Proactive Smart Travel Checklist", assignee: "Lotus Tech" },
                  { id: "WO2017076433A1", title: "Intelligent heat, ventilation, and air conditioning system", assignee: "Siemens AG" }
                ].map((patent, idx) => (
                  <div key={idx} className="space-y-2 p-4 border border-slate-100 rounded-sm hover:border-slate-300 transition-colors">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">{patent.id}</span>
                    <h4 className="font-sans font-bold text-sm leading-snug">{patent.title}</h4>
                    <p className="text-[10px] text-slate-500 uppercase">{patent.assignee}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-100 py-16 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">© {new Date().getFullYear()} Bhupender Kumar Saini</p>
          <div className="flex gap-6">
            <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-black transition-colors"><Mail size={16} /></a>
            <a href={`https://linkedin.com/in/${profile.linkedin}`} className="text-slate-400 hover:text-black transition-colors"><Linkedin size={16} /></a>
            <a href={`https://github.com/${profile.github}`} className="text-slate-400 hover:text-black transition-colors"><Github size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
import React from 'react';
import {
  Microscope, BarChart3, GraduationCap, Award,
  Users, Fingerprint, Dna, BrainCircuit,
  FileText, Zap, Smartphone, Layers
} from 'lucide-react';

export const profile = {
  name: "Bhupender Kumar Saini",
  title: "Applied AI Researcher",
  affiliation: "Fraunhofer IAO • Stuttgart, Germany",
  email: "bksaini078@gmail.com",
  linkedin: "bksaini078",
  github: "bksaini078",
  location: "Stuttgart, Germany",
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop"
};

export const experience = [
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

export const researchProjects = [
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

export const patents = [
  { id: "US11316748B2", title: "Generating and managing virtual industrial devices in an industrial network", assignee: "Siemens AG" },
  { id: "Pending", title: "Proactive Personalization based on appearance", assignee: "Lotus Tech" },
  { id: "Pending", title: "Proactive Smart Travel Checklist", assignee: "Lotus Tech" },
  { id: "WO2017076433A1", title: "Intelligent heat, ventilation, and air conditioning system", assignee: "Siemens AG" }
];

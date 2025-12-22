import React from 'react';
import { Microscope, BarChart3, GraduationCap, Award, MapPin } from 'lucide-react';

const experience = [
	{
		role: 'Applied AI Researcher',
		company: 'Fraunhofer IAO',
		location: 'Stuttgart, Germany',
		period: 'Jul. 2022 – Present',
		stats: '7 prototypes | 4 patent applications | 1 paper co-author | 1 product deployed',
		points: [
			'Developing and implementing solutions based on large language models and multi-agent systems for enterprise decision-making.',
			'Designing and developing AI demonstrators showcased at AI-Summit and Fraunhofer events in Germany.',
			'Partnering with industry across domains to co-create innovative and practical AI solutions.',
			'Providing AI strategy and adoption consultation to enterprises and SMEs.',
			'Collaborating with the Baden-Württemberg Ministry on tailored solutions that help local businesses adopt and leverage AI effectively.',
			'Leading knowledge-sharing sessions for Technology Management master’s students and industry professionals in Baden-Württemberg to raise AI awareness.',
		],
		icon: <Microscope className="text-blue-600" size={20} />,
	},
	{
		role: 'Data Science and Engineering Intern',
		company: 'Schaeffler Technologies AG & Co. KG',
		location: 'Germany',
		period: 'Feb. 2021 – Jul. 2021',
		points: [
			'Developed a comprehensive Power BI dashboard for shop floor and management, providing insights into precision bearing manufacturing.',
			'Built strategic Power BI dashboards for real-time monitoring of IoT devices, enhancing operational insights.',
			'Managed synthesis of extensive industrial data, applying noise strategies to improve model accuracy and reliability.',
		],
		icon: <BarChart3 className="text-emerald-600" size={20} />,
	},
	{
		role: 'Research Assistant',
		company: 'University of Koblenz and Landau',
		location: 'Germany',
		period: 'Sep. 2020 – Feb. 2021',
		points: [
			'Researched weakly supervised fake news detection methods (Mean Teacher, VAT, Pseudo-Labelling) with noise strategies to improve robustness.',
			'Conducted an empirical study of transformer architectures, attention mechanisms, and seq-to-seq / encoder–decoder models for fake news classification.',
			'Master thesis: Assessment of Mean Teacher and adversarial unlabeled data training approaches for language models (BERT / DistilBERT) for text classification.',
		],
		icon: <GraduationCap className="text-purple-600" size={20} />,
	},
	{
		role: 'Senior Consultant',
		company: 'SIEMENS',
		location: 'Bangalore, India',
		period: 'May 2011 – Feb. 2019',
		stats: '2 patents | 26 ideas proposed | 5 awards | 500+ hardware & software bugs | 4 prototypes | 6 lean initiatives',
		points: [
			'Invented and patented a dynamic virtualization solution eliminating hardware dependencies, increasing test coverage by 38% and uncovering 22 high-severity legacy issues.',
			'Designed a pluggable magnetic connector prototype that reduced manual effort by 98% and removed key process inefficiencies.',
			'Built an AR-based control and monitoring prototype to enhance device parameterization and was formally recognized as a “Tech Expert” by Siemens.',
			'Recognized as a LEAN champion for identifying process bottlenecks and implementing automation solutions.',
		],
		icon: <Award className="text-blue-900" size={20} />,
	},
];

const education = [
	{
		degree: 'M.Sc. in Web and Data Science',
		institution: 'University of Koblenz and Landau',
		location: 'Koblenz, Germany',
		period: 'Mar. 2019 – Mar. 2022',
		icon: <GraduationCap className="text-indigo-600" size={18} />,
	},
	{
		degree: 'B.Eng. in Electronics and Communication',
		institution: 'University of Rajasthan',
		location: 'Rajasthan, India',
		period: 'Jul. 2005 – Aug. 2009',
		icon: <GraduationCap className="text-slate-600" size={18} />,
	},
];

const ExperienceTab = () => {
	return (
		<div className="space-y-16 animate-in slide-in-from-bottom-4 duration-500">
			<div className="border-b border-black pb-4">
				<h2 className="text-xs font-black uppercase tracking-[0.4em] font-sans text-slate-400">
					Experience &amp; Education
				</h2>
			</div>

			{/* Professional Timeline (ResearchTab-like layout) */}
			<section className="space-y-8">
				<h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
					Professional Timeline
				</h3>
				<div className="grid gap-16">
					{experience.map((exp, idx) => (
						<div
							key={idx}
							className="group border-b border-slate-100 pb-16 last:border-0"
						>
							<div className="grid md:grid-cols-12 gap-8">
								{/* Left column: meta */}
								<div className="md:col-span-4 space-y-3">
									<div className="flex items-center gap-3">
										{exp.icon}
										<span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest">
											{exp.period}
										</span>
									</div>
									<h4 className="text-[11px] font-bold font-sans text-slate-400 uppercase tracking-wider">
										{exp.company}
									</h4>
									<p className="text-[10px] text-slate-400 flex items-center gap-1 font-sans">
										<MapPin size={10} /> {exp.location}
									</p>
									{exp.stats && (
										<div className="pt-2">
											<span className="px-2 py-0.5 border border-slate-200 text-[9px] font-mono text-slate-500 uppercase tracking-tighter rounded-sm">
												{exp.stats}
											</span>
										</div>
									)}
								</div>

								{/* Right column: content */}
								<div className="md:col-span-8 space-y-4">
									<h3 className="text-2xl font-bold font-sans tracking-tight group-hover:text-blue-700 transition-colors">
										{exp.role}
									</h3>
									<ul className="space-y-3">
										{exp.points.map((point, pIdx) => (
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
			</section>

			{/* Education (ResearchTab-like layout) */}
			<section className="space-y-8">
				<h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
					Education
				</h3>
				<div className="grid gap-16">
					{education.map((edu, idx) => (
						<div
							key={idx}
							className="group border-b border-slate-100 pb-16 last:border-0"
						>
							<div className="grid md:grid-cols-12 gap-8">
								{/* Left column: meta */}
								<div className="md:col-span-4 space-y-3">
									<div className="flex items-center gap-3">
										{edu.icon}
										<span className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
											{edu.period}
										</span>
									</div>
									<h4 className="text-[11px] font-bold font-sans text-slate-400 uppercase tracking-wider">
										{edu.institution}
									</h4>
									<p className="text-[10px] text-slate-400 flex items-center gap-1 font-sans">
										<MapPin size={10} /> {edu.location}
									</p>
								</div>

								{/* Right column: content */}
								<div className="md:col-span-8 space-y-4">
									<h3 className="text-2xl font-bold font-sans tracking-tight group-hover:text-blue-700 transition-colors">
										{edu.degree}
									</h3>
									{/* No bullet list for education; add later if needed */}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default ExperienceTab;

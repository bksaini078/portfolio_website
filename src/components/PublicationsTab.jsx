import React from 'react';

const peerReviewedPublications = [
	{
		citation:
			'Saini, B. K., Gürtler, L. I., Auspurg, D., Kumar, C., & Peissner, M. A Human-Centered Interaction Framework for Multi-Agent AI Reasoning in Enterprise Decision-Making. Accepted for presentation at HCI International 2026 and for publication in the Conference Proceedings, to be published by Springer in a multi-volume set.',
		note: 'Accepted conference paper (HCI International 2026, Springer proceedings).',
	},
	{
		citation:
			'Saini, B. K., Kumar, C., Guertler, L., Auspurg, D., Peissner, M., & Hölzle, K. Toward AI-Supported Decision Making in Innovation: Requirements and design of LLM-based multi-agent systems. IPDMC 2026: Under Review.',
		note: 'Peer-reviewed conference paper, under review (IPDMC 2026).',
	},
	{
		citation:
			'Saini, B. K., Pollmann, K., Bierkandt, J., Knecht, C., Janssen, D., Fronemann, N., & Kumar, C. Understanding Layers of Human-Agent Alignment: Methodological Variants of LLM Agents for Market Research. Unpublished Manuscript. CHI 2026: Under Review.',
		note: 'Unpublished manuscript, under review (CHI 2026).',
	},
	{
		citation:
			'Kumar, C., Saini, B. K., & Staab, S. (2024). Enhancing Online Meeting Experience through Shared Gaze-Attention. In Extended Abstracts of the 2024 CHI Conference on Human Factors in Computing Systems (CHI EA ’24), ACM, Article 128, 1–6.',
		link: 'https://doi.org/10.1145/3613905.3651068',
		note: 'Published extended abstract (CHI EA ’24).',
	},
];

const usPatents = [
	{
		id: 'US11316748B2',
		title:
			'Method and system for generating and managing virtual industrial devices in an industrial network.',
		inventors: 'Saini, Bhupender K. et al.',
		link: 'https://patents.google.com/patent/US11316748B2/en',
		summary:
			'Captures industrial network communication, analyzes requests/responses, and dynamically generates virtual industrial devices that emulate real devices for testing and simulation.',
	},
];

const internationalPatents = [
	{
		id: 'WO2017076433A1',
		title: 'Intelligent heat, ventilation, and air conditioning system.',
		inventors: 'Saini, Bhupender K. et al.',
		link: 'https://patents.google.com/patent/WO2017076433A1/en',
		summary:
			'HVAC system using sensors and an intelligent control unit (including neural network logic) to automatically control heating/cooling based on occupant conditions inside an enclosure.',
	},
];

const patentApplications = [
	{
		title: 'Proactive Personalization based on appearance',
		year: 2023,
	},
	{
		title: 'Proactive Combined Search for Navigation Points-of-Interest (POIs)',
		year: 2023,
	},
	{
		title: 'Proactive Media Immersion',
		year: 2023,
	},
	{
		title: 'Proactive Smart Travel Checklist',
		year: 2023,
	},
];

const PublicationsTab = () => {
	return (
		<div className="space-y-16 animate-in slide-in-from-bottom-4 duration-500">
			<section className="space-y-10">
				<div className="border-b border-black pb-4">
					<h2 className="text-xs font-black uppercase tracking-[0.4em] font-sans text-slate-400">
						Publications
					</h2>
				</div>

				{/* Peer-Reviewed Publications */}
				<div className="space-y-4">
					<h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
						Peer-Reviewed Publications
					</h3>
					<ol className="space-y-4 list-decimal list-inside text-xs text-slate-800">
						{peerReviewedPublications.map((pub, idx) => (
							<li key={idx} className="space-y-1">
								<span className="leading-relaxed inline">
									{pub.citation}
								</span>
								{pub.link && (
									<a
										href={pub.link}
										target="_blank"
										rel="noreferrer"
										className="block text-[10px] text-sky-600 hover:underline"
									>
										DOI / Link
									</a>
								)}
								{pub.note && (
									<p className="text-[10px] text-slate-500">
										{pub.note}
									</p>
								)}
							</li>
						))}
					</ol>
				</div>

				{/* Patents & Applications */}
				<div className="space-y-6 pt-8 border-t border-slate-200">
					<h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
						Patents &amp; Applications
					</h3>

					{/* US Patents */}
					<div className="space-y-3">
						<h4 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
							US Patents
						</h4>
						<div className="space-y-3 text-xs text-slate-800">
							{usPatents.map((patent) => (
								<div
									key={patent.id}
									className="space-y-1 p-3 border border-slate-100 rounded-sm hover:border-slate-300 transition-colors"
								>
									<span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
										{patent.id}
									</span>
									<p className="font-semibold leading-snug">
										{patent.title}
									</p>
									<p className="text-[10px] text-slate-500">
										{patent.inventors}
									</p>
									{patent.summary && (
										<p className="text-[11px] text-slate-700">
											{patent.summary}
										</p>
									)}
									{patent.link && (
										<a
											href={patent.link}
											target="_blank"
											rel="noreferrer"
											className="text-[10px] text-sky-600 hover:underline"
										>
											View on Google Patents
										</a>
									)}
								</div>
							))}
						</div>
					</div>

					{/* International (PCT) Publications */}
					<div className="space-y-3">
						<h4 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
							International (PCT) Publications
						</h4>
						<div className="space-y-3 text-xs text-slate-800">
							{internationalPatents.map((patent) => (
								<div
									key={patent.id}
									className="space-y-1 p-3 border border-slate-100 rounded-sm hover:border-slate-300 transition-colors"
								>
									<span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
										{patent.id}
									</span>
									<p className="font-semibold leading-snug">
										{patent.title}
									</p>
									<p className="text-[10px] text-slate-500">
										{patent.inventors}
									</p>
									{patent.summary && (
										<p className="text-[11px] text-slate-700">
											{patent.summary}
										</p>
									)}
									{patent.link && (
										<a
											href={patent.link}
											target="_blank"
											rel="noreferrer"
											className="text-[10px] text-sky-600 hover:underline"
										>
											View on Google Patents
										</a>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Patent Applications (Proactive Series) */}
					<div className="space-y-3">
						<h4 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
							Patent Applications (Proactive Series)
						</h4>
						<ul className="space-y-2 text-xs text-slate-800 list-disc list-inside">
							{patentApplications.map((app, idx) => (
								<li key={idx}>
									<span className="font-medium">{app.title}</span>
									{app.year && (
										<span className="text-[10px] text-slate-500">
											{' '}(Patent Application, {app.year})
										</span>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PublicationsTab;

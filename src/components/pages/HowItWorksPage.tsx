import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
	{
		num: "01",
		title: "Connect Knowledge Sources",
		body: "Link Notion, Confluence, Google Drive, Slack, CRM records, or any REST source. Nuerova ingests, chunks, and indexes content without manual tagging.",
		tags: ["Notion", "Slack", "Drive", "GitHub", "CRM"],
		icon: (
			<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
		)
	},
	{
		num: "02",
		title: "Create Scoped Clusters",
		body: "A cluster is a scoped knowledge pool: a team, client account, project, or department. Add members, set permissions, and Nuerova routes queries exclusively through that context.",
		tags: ["Team scope", "Permissions", "Isolation"],
		icon: (
			<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
		)
	},
	{
		num: "03",
		title: "Deploy Context-Aware Agents",
		body: "Agents inside a cluster inherit its knowledge automatically. Ask a question and the agent reasons over your team's actual context, not generic training data. All answers are cited.",
		tags: ["Cited responses", "No re-explaining"],
		icon: (
			<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
		)
	},
	{
		num: "04",
		title: "Build Agent-Native Automations",
		body: "Create workflows that trigger, reason over cluster knowledge, execute actions, and optionally wait for human approval before proceeding.",
		tags: ["Triggers", "Reasoning", "Approval gates"],
		icon: (
			<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
		)
	},
	{
		num: "05",
		title: "Govern and Scale",
		body: "The admin panel shows who used what, what agents did, and which automations ran. RBAC controls enforce boundaries and audit logs capture every critical action.",
		tags: ["RBAC", "Audit logs", "Visibility"],
		icon: (
			<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
		)
	},
];

export function HowItWorksPage() {
	useSEO({
		title: "How Nuerova Works — Context Ingestion to Governed Action | Nuerova",
		description: "See how Nuerova ingests team data, builds scoped knowledge clusters, deploys custom agents, and triggers governed visual workflows with full audit trails.",
		schemaOrg: {
			"@type": "HowTo",
			"name": "How to deploy team intelligence with Nuerova",
			"description": "A five-step process to go from fragmented team context to governed, context-aware AI automation.",
			"step": [
				{
					"@type": "HowToStep",
					"position": 1,
					"name": "Connect your sources",
					"text": "Sync Notion, Slack, Google Drive, CRM, GitHub, Jira, and internal file sources to build your team's raw knowledge base.",
				},
				{
					"@type": "HowToStep",
					"position": 2,
					"name": "Scope into clusters",
					"text": "Organize ingested knowledge into logical, permission-bounded clusters scoped by team, project, client account, or department.",
				},
				{
					"@type": "HowToStep",
					"position": 3,
					"name": "Deploy context-aware agents",
					"text": "Configure agent personas with custom instructions, model settings, and memory clearance so agents inherit the right cluster context before responding.",
				},
				{
					"@type": "HowToStep",
					"position": 4,
					"name": "Automate with reasoning workflows",
					"text": "Build trigger-action workflows that reason through conditions, branch on context, and request human approval before executing actions.",
				},
				{
					"@type": "HowToStep",
					"position": 5,
					"name": "Govern with audit trails and RBAC",
					"text": "Maintain visibility through immutable audit logs, granular role-based access control, and approval trails on every agent action.",
				},
			],
		},
	});

	useScrollReveal();
	
	const [activeStep, setActiveStep] = useState(0);

	// Auto-progress steps
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveStep((current) => (current + 1) % steps.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="bg-[#050505] text-white min-h-screen flex flex-col selection:bg-status-blue/30 selection:text-white font-sans">
			<Navigation />

			<main id="main" className="flex-grow pb-24 pt-32">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg mb-20 reveal text-center flex flex-col items-center">
					<span className="font-label-caps text-xs text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-6">
						THE INTELLIGENCE PIPELINE
					</span>
					<h1 className="font-headline-lg text-5xl md:text-6xl text-white mb-6 font-bold tracking-tight leading-tight max-w-4xl">
						Here is what happens after you connect your first source.
					</h1>
					<p className="font-body-md text-xl text-white/50 max-w-2xl leading-relaxed">
						Nuerova turns your team's scattered context into a governed intelligence layer in five distinct steps.
					</p>
				</section>

				{/* ── INTERACTIVE TIMELINE ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-12 reveal">
					<div className="flex flex-col md:flex-row gap-12 lg:gap-20">
						
						{/* Mobile: Horizontal scroll of steps, Desktop: Vertical List */}
						<div className="w-full md:w-1/2 flex flex-col relative">
							{/* Connecting line */}
							<div className="absolute left-6 top-10 bottom-10 w-0.5 bg-white/5 hidden md:block"></div>
							
							{steps.map((step, index) => {
								const isActive = index === activeStep;
								return (
									<div 
										key={step.num}
										className="flex items-start gap-6 relative z-10 mb-8 last:mb-0 cursor-pointer group"
										onClick={() => setActiveStep(index)}
									>
										{/* Number Badge */}
										<div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 border-2 ${
											isActive 
												? "bg-status-blue border-status-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] scale-110" 
												: "bg-[#0a0a0a] border-white/10 text-white/40 group-hover:border-white/30"
										}`}>
											<span className="font-bold text-sm">{step.num}</span>
										</div>

										{/* Content */}
										<div className={`pt-2 transition-all duration-300 ${isActive ? "opacity-100 translate-x-2" : "opacity-40"}`}>
											<h3 className={`text-2xl font-bold mb-3 ${isActive ? "text-white" : "text-white/60"}`}>
												{step.title}
											</h3>
											<p className="text-white/60 leading-relaxed mb-4 text-sm max-w-md">
												{step.body}
											</p>
											<div className="flex flex-wrap gap-2">
												{step.tags.map((tag) => (
													<span key={tag} className={`text-[10px] px-2.5 py-1 rounded-full border transition-colors ${
														isActive ? "border-status-blue/30 bg-status-blue/10 text-status-blue" : "border-white/10 text-white/30"
													}`}>
														{tag}
													</span>
												))}
											</div>
										</div>
									</div>
								);
							})}
						</div>

						{/* Right: Dynamic Visual Representation */}
						<div className="w-full md:w-1/2 relative">
							<div className="sticky top-32 w-full h-[500px] border border-white/10 bg-[#0a0a0a] rounded-2xl shadow-2xl flex items-center justify-center p-8 overflow-hidden">
								{/* Background Glow */}
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-status-blue/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-1000"></div>
								
								{/* Dynamic Content based on active step */}
								<div key={activeStep} className="animate-in fade-in zoom-in-95 duration-500 w-full h-full flex flex-col items-center justify-center text-center relative z-10">
									<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-status-blue/20 to-blue-600/20 border border-status-blue/30 flex items-center justify-center text-status-blue mb-8 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
										{steps[activeStep].icon}
									</div>
									<h3 className="text-2xl font-bold text-white mb-4">Step {steps[activeStep].num}</h3>
									<p className="text-white/50 max-w-xs">{steps[activeStep].title}</p>
									
									{/* Decorative flow lines */}
									<div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
										<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1/4 bg-gradient-to-b from-transparent to-status-blue/50"></div>
										<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1/4 bg-gradient-to-t from-transparent to-status-blue/50"></div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>

				{/* ── BOTTOM CTA ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg mt-24 reveal">
					<div className="bg-gradient-to-r from-[#0a0a0a] to-[#111] border border-white/10 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row gap-8 items-center justify-between relative overflow-hidden">
						<div className="absolute top-0 right-0 w-64 h-64 bg-status-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
						<div className="relative z-10 max-w-xl">
							<span className="font-label-caps text-xs text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block mb-4">LIVE WALKTHROUGH</span>
							<h2 className="font-headline-md text-3xl text-white mb-4 font-bold tracking-tight">Map this flow to one team process.</h2>
							<p className="font-body-md text-white/60">A focused demo is the fastest way to see whether Nuerova fits your stack.</p>
						</div>
						<Link
							to="/contact"
							className="relative z-10 flex-shrink-0 bg-gradient-to-r from-status-blue to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-[0_8px_24px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all font-bold text-sm"
						>
							Request a demo
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}

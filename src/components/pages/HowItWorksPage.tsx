import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
	{
		num: "01",
		title: "Connect Knowledge Sources",
		body: "Link Gmail, Slack, Google Drive, Salesforce, GitHub, Notion, Confluence, Outlook, or Shopify via OAuth. Nuerova ingests, chunks, and embeds content without manual tagging.",
		tags: ["Gmail", "Slack", "Drive", "GitHub", "Salesforce"],
		icon: (
			<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
		)
	},
	{
		num: "02",
		title: "Build Your Personal Twin",
		body: "Your Twin is your personal knowledge profile. As you connect sources, Nuerova builds a private, searchable index of your context - emails, docs, conversations, CRM records. This is the raw material clusters draw from.",
		tags: ["Personal context", "Private index", "Consent-based"],
		icon: (
			<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
		)
	},
	{
		num: "03",
		title: "Pool Twins into Clusters",
		body: "A cluster is a scoped knowledge pool: a team, client account, project, or department. Members consent to contributing their Twin's relevant sources. Nuerova routes queries across the pool, never outside it.",
		tags: ["Team scope", "Permissions", "Isolation"],
		icon: (
			<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
		)
	},
	{
		num: "04",
		title: "Deploy Context-Aware Agents",
		body: "Agents inside a cluster inherit its knowledge automatically. Ask a question and the agent reasons over your team's actual context, not generic training data. All answers are cited. Pair with Skills to extend what agents can do.",
		tags: ["Cited responses", "Skills", "No re-explaining"],
		icon: (
			<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
		)
	},
	{
		num: "05",
		title: "Build Agent-Native Automations",
		body: "Create workflows that trigger, reason over cluster knowledge, execute actions, and optionally wait for human approval before proceeding. Automations know your context before they run.",
		tags: ["Triggers", "Reasoning", "Approval gates"],
		icon: (
			<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
		)
	},
	{
		num: "06",
		title: "Govern and Scale",
		body: "The admin panel shows who used what, what agents did, and which automations ran. RBAC controls enforce boundaries. Run History and audit logs capture every critical action for compliance.",
		tags: ["RBAC", "Audit logs", "Run History"],
		icon: (
			<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
		)
	},
];

export function HowItWorksPage() {
	useSEO({
		title: "How Nuerova Works - Context Ingestion to Governed Action | Nuerova",
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
					"text": "Sync Gmail, Slack, Google Drive, Salesforce, GitHub, Notion, Confluence, Outlook, and Shopify via OAuth to build your team's raw knowledge base.",
				},
				{
					"@type": "HowToStep",
					"position": 2,
					"name": "Build your personal Twin",
					"text": "Nuerova creates a private knowledge profile (Twin) for each user from their connected sources - a personal, consent-gated index of their context.",
				},
				{
					"@type": "HowToStep",
					"position": 3,
					"name": "Pool Twins into Clusters",
					"text": "Organize members' Twins into permission-bounded clusters scoped by team, project, client account, or department. Members consent to which sources they share.",
				},
				{
					"@type": "HowToStep",
					"position": 4,
					"name": "Deploy context-aware agents",
					"text": "Configure agents with custom instructions and Skills so they inherit the right cluster context before responding. All answers are cited.",
				},
				{
					"@type": "HowToStep",
					"position": 5,
					"name": "Automate with reasoning workflows",
					"text": "Build trigger-action workflows that reason through conditions, branch on context, and request human approval before executing actions.",
				},
				{
					"@type": "HowToStep",
					"position": 6,
					"name": "Govern with audit trails and RBAC",
					"text": "Maintain visibility through Run History, immutable audit logs, granular role-based access control, and approval trails on every agent action.",
				},
			],
		},
	});

	useScrollReveal();

	const [activeStep, setActiveStep] = useState(0);
	const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Scroll-based step activation via IntersectionObserver
	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		stepRefs.current.forEach((el, index) => {
			if (!el) return;
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) setActiveStep(index);
					});
				},
				{ rootMargin: "-35% 0px -45% 0px", threshold: 0 }
			);
			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
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
						Nuerova turns your team's scattered context into a governed intelligence layer in six distinct steps.
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
										ref={(el) => { stepRefs.current[index] = el; }}
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

						{/* Right: Step-specific UI mockups */}
						<div className="w-full md:w-1/2 relative">
							<div className="sticky top-32 w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden border border-white/10" style={{ background: "#0d0d0d" }}>
								{/* Window chrome */}
								<div className="h-9 border-b border-white/10 flex items-center justify-between px-4 bg-[#131313] flex-shrink-0">
									<div className="flex gap-1.5 group">
										<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] flex items-center justify-center cursor-pointer">
											<svg className="opacity-0 group-hover:opacity-100 w-1.5 h-1.5 text-black/60" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2,2 L8,8 M8,2 L2,8"/></svg>
										</div>
										<div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] flex items-center justify-center cursor-pointer">
											<svg className="opacity-0 group-hover:opacity-100 w-1.5 h-1.5 text-black/60" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2,5 L8,5"/></svg>
										</div>
										<div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] flex items-center justify-center cursor-pointer">
											<svg className="opacity-0 group-hover:opacity-100 w-1.5 h-1.5 text-black/60" viewBox="0 0 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2,8 L8,2 M2,2 L2,8 L8,8"/></svg>
										</div>
									</div>
									<div className="text-[10px] text-white/35 font-medium tracking-wide">Nuerova - {steps[activeStep].title}</div>
									<div className="flex items-center gap-1.5">
										<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
										<span className="text-[10px] text-emerald-400">Live</span>
									</div>
								</div>

								{/* Step-specific content */}
								<div key={activeStep} className="animate-in fade-in duration-400 h-[calc(100%-36px)] overflow-hidden">

									{/* STEP 01 - Connect Knowledge Sources */}
									{activeStep === 0 && (
										<div className="h-full flex flex-col">
											<div className="px-4 pt-3 pb-2 border-b border-white/5">
												<div className="flex gap-3">
													{["Applications", "MCP Servers", "Agents"].map((t, i) => (
														<button key={t} className={`text-[11px] pb-1.5 font-medium transition-colors ${i === 0 ? "text-status-blue border-b border-status-blue" : "text-white/35"}`}>{t}</button>
													))}
												</div>
											</div>
											<div className="flex-1 p-4 grid grid-cols-2 gap-3 overflow-y-auto content-start">
												{[
													{ name: "Gmail", icon: "G", color: "text-red-400 bg-red-500/10", status: "Connected", dot: "bg-emerald-400" },
													{ name: "Slack", icon: "SL", color: "text-purple-400 bg-purple-500/10", status: "Connected", dot: "bg-emerald-400" },
													{ name: "Salesforce", icon: "SF", color: "text-blue-400 bg-blue-500/10", status: "Syncing…", dot: "bg-yellow-400 animate-pulse" },
													{ name: "GitHub", icon: "GH", color: "text-white/70 bg-white/10", status: "Connected", dot: "bg-emerald-400" },
													{ name: "Outlook 365", icon: "OL", color: "text-sky-400 bg-sky-500/10", status: "Connected", dot: "bg-emerald-400" },
													{ name: "Shopify", icon: "SH", color: "text-emerald-400 bg-emerald-500/10", status: "— Connect", dot: "" },
												].map((int) => (
													<div key={int.name} className="bg-[#111] border border-white/8 rounded-xl p-3 flex flex-col gap-2 hover:border-white/15 transition-colors">
														<div className="flex items-center justify-between">
															<div className={`w-8 h-8 rounded-lg ${int.color} flex items-center justify-center text-[10px] font-bold`}>{int.icon}</div>
															{int.dot && <div className={`w-1.5 h-1.5 rounded-full ${int.dot}`}></div>}
														</div>
														<div>
															<div className="text-[11px] font-semibold text-white/90">{int.name}</div>
															<div className={`text-[10px] mt-0.5 ${int.status === "— Connect" ? "text-white/30" : int.status.includes("Sync") ? "text-yellow-400" : "text-emerald-400"}`}>{int.status}</div>
														</div>
													</div>
												))}
											</div>
										</div>
									)}

									{/* STEP 02 - Build Your Personal Twin */}
									{activeStep === 1 && (
										<div className="h-full flex flex-col p-4 gap-3">
											<div className="flex items-center gap-3 pb-3 border-b border-white/8">
												<div className="w-10 h-10 rounded-full bg-status-blue/20 border border-status-blue/30 flex items-center justify-center text-sm font-bold text-status-blue">JD</div>
												<div>
													<div className="text-sm font-semibold text-white">Your Personal Twin</div>
													<div className="text-[10px] text-white/40">Private · Consent-gated · Always yours</div>
												</div>
												<div className="ml-auto text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded font-medium">Indexing</div>
											</div>
											<div className="flex flex-col gap-3 flex-1">
												{[
													{ name: "Gmail", chunks: 1247, total: 1312, pct: 95, color: "bg-red-400" },
													{ name: "Slack", chunks: 4891, total: 4891, pct: 100, color: "bg-purple-400" },
													{ name: "Salesforce", chunks: 203, total: 580, pct: 35, color: "bg-blue-400", active: true },
													{ name: "Google Drive", chunks: 41, total: 41, pct: 100, color: "bg-emerald-400" },
												].map((src) => (
													<div key={src.name}>
														<div className="flex justify-between items-center mb-1">
															<span className="text-[11px] font-medium text-white/80">{src.name}</span>
															<span className={`text-[10px] ${src.active ? "text-yellow-400" : "text-white/35"}`}>
																{src.active ? "indexing…" : `${src.chunks.toLocaleString()} chunks`}
															</span>
														</div>
														<div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
															<div className={`h-full rounded-full ${src.color} ${src.active ? "opacity-60" : "opacity-80"} transition-all duration-1000`} style={{ width: `${src.pct}%` }}></div>
														</div>
													</div>
												))}
											</div>
											<div className="border border-white/8 rounded-xl p-3 bg-[#111] flex items-center justify-between">
												<div className="text-[11px] text-white/50">Total indexed</div>
												<div className="text-[11px] font-mono text-status-blue font-semibold">6,382 chunks · 384-dim vectors</div>
											</div>
										</div>
									)}

									{/* STEP 03 - Pool Twins into Clusters */}
									{activeStep === 2 && (
										<div className="h-full flex">
											{/* Cluster list */}
											<div className="w-36 border-r border-white/8 flex flex-col p-2 gap-1 bg-[#0a0a0a]">
												<div className="text-[9px] font-bold tracking-widest text-white/25 px-2 py-1">CLUSTERS</div>
												{[
													{ name: "CS Operations", color: "bg-status-blue", active: true },
													{ name: "Engineering", color: "bg-purple-500", active: false },
													{ name: "Sales Playbook", color: "bg-orange-500", active: false },
												].map((c) => (
													<div key={c.name} className={`flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-colors ${c.active ? "bg-status-blue/10 border border-status-blue/20" : "hover:bg-white/5"}`}>
														<div className={`w-2 h-2 rounded-full ${c.color} flex-shrink-0`}></div>
														<span className={`text-[10px] font-medium leading-tight ${c.active ? "text-white" : "text-white/40"}`}>{c.name}</span>
													</div>
												))}
											</div>
											{/* Cluster workspace */}
											<div className="flex-1 flex flex-col p-3 gap-2 overflow-hidden">
												<div className="text-[10px] font-bold text-white/90">CS Operations</div>
												<div className="bg-status-blue/5 border border-status-blue/15 rounded-lg p-2.5 text-[10px]">
													<div className="text-status-blue font-bold mb-1">Charter</div>
													<div className="text-white/50 leading-relaxed">Customer escalations & renewals<br/><span className="text-white/30">Out-of-scope: salaries, HR, legal</span></div>
												</div>
												<div className="text-[10px] font-bold text-white/40 mt-1">MEMBERS (3)</div>
												{[
													{ init: "JD", name: "John D.", sources: "Gmail, Salesforce" },
													{ init: "SA", name: "Sarah A.", sources: "Slack, Drive" },
													{ init: "MK", name: "Mike K.", sources: "Salesforce" },
												].map((m) => (
													<div key={m.init} className="flex items-center gap-2 px-2 py-1.5 bg-[#111] border border-white/5 rounded-lg">
														<div className="w-6 h-6 rounded-full bg-status-blue/20 border border-status-blue/30 flex items-center justify-center text-[9px] font-bold text-status-blue flex-shrink-0">{m.init}</div>
														<div className="min-w-0">
															<div className="text-[10px] font-medium text-white/80">{m.name}</div>
															<div className="text-[9px] text-white/30 truncate">{m.sources} ✓</div>
														</div>
													</div>
												))}
											</div>
										</div>
									)}

									{/* STEP 04 - Deploy Context-Aware Agents */}
									{activeStep === 3 && (
										<div className="h-full flex">
											{/* Mini icon sidebar */}
											<div className="w-10 border-r border-white/8 flex flex-col items-center py-3 gap-3 bg-[#0a0a0a]">
												{[
													{ icon: <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>, active: true },
													{ icon: <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>, active: false },
													{ icon: <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><ellipse cx="8" cy="5" rx="5" ry="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M3 5v6c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V5" stroke="currentColor" strokeWidth="1.5"/></svg>, active: false },
												].map((btn, i) => (
													<div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${btn.active ? "bg-status-blue/20 border border-status-blue/30 text-status-blue" : "text-white/30"}`}>{btn.icon}</div>
												))}
											</div>
											{/* Chat */}
											<div className="flex-1 flex flex-col overflow-hidden">
												<div className="px-3 py-2 border-b border-white/5 flex items-center gap-2">
													<div className="w-5 h-5 rounded bg-status-blue/20 border border-status-blue/30 flex items-center justify-center text-[9px] font-bold text-status-blue">N</div>
													<span className="text-[11px] font-medium text-white/80">CS Support Agent</span>
													<span className="ml-auto text-[9px] text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">Online</span>
												</div>
												<div className="flex-1 p-3 flex flex-col gap-2.5 overflow-y-auto">
													<div className="flex justify-end">
														<div className="bg-status-blue/15 border border-status-blue/20 px-3 py-2 rounded-xl rounded-tr-sm max-w-[85%]">
															<p className="text-[11px] text-white leading-relaxed">What's the SLA for Enterprise tier?</p>
														</div>
													</div>
													<div className="bg-white/[0.03] border border-white/8 px-2.5 py-1.5 rounded-lg">
														<div className="flex items-center gap-1.5 mb-1">
															<div className="w-1 h-1 bg-status-blue rounded-full animate-ping"></div>
															<span className="text-[9px] text-status-blue font-mono font-medium">searching CS cluster…</span>
														</div>
														<code className="text-[9px] text-white/30 font-mono">query: enterprise sla uptime response time</code>
													</div>
													<div className="flex items-start gap-2">
														<div className="w-5 h-5 rounded bg-status-blue/20 border border-status-blue/30 flex-shrink-0 flex items-center justify-center text-[8px] text-status-blue font-bold mt-0.5">N</div>
														<div className="flex-1 bg-[#111] border border-white/8 px-3 py-2.5 rounded-xl rounded-tl-sm">
															<p className="text-[11px] text-white/85 leading-relaxed mb-2">Enterprise tier guarantees <strong className="text-white">99.9% uptime</strong> with a <strong className="text-white">1-hour priority response</strong> window.</p>
															<div className="flex gap-1.5 flex-wrap">
																<span className="text-[9px] text-status-blue bg-status-blue/10 border border-status-blue/20 px-1.5 py-0.5 rounded">SLA Policy 2024 ↗</span>
																<span className="text-[9px] text-status-blue bg-status-blue/10 border border-status-blue/20 px-1.5 py-0.5 rounded">CS Cluster ↗</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									)}

									{/* STEP 05 - Build Automations */}
									{activeStep === 4 && (
										<div className="h-full flex flex-col">
											<div className="px-3 py-2 border-b border-white/5 flex items-center gap-2">
												<span className="text-[10px] font-semibold text-white/60">CS Triage Flow</span>
												<span className="text-[9px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">saved</span>
												<span className="ml-auto text-[9px] text-white/30">Run History</span>
											</div>
											<div className="flex-1 relative overflow-hidden" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "16px 16px" }}>
												<div className="absolute inset-0 flex flex-col items-center justify-center gap-0 pointer-events-none select-none" style={{ paddingTop: "8px" }}>
													{/* Trigger */}
													<div className="bg-[#1a1a1a] border border-orange-500/40 rounded-lg px-4 py-2.5 w-52 shadow-[0_0_16px_rgba(249,115,22,0.12)] relative">
														<div className="flex items-center gap-2 mb-0.5">
															<div className="w-4 h-4 rounded bg-orange-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div></div>
															<span className="text-[10px] font-bold text-white">Webhook Trigger</span>
															<span className="ml-auto text-[8px] bg-orange-500/20 text-orange-400 px-1 py-0.5 rounded uppercase">trigger</span>
														</div>
														<div className="text-[9px] text-white/35 pl-6">Zendesk · Account health dropped</div>
														<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1a1a1a] border border-orange-500/40 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-orange-500/60 rounded-full animate-pulse"></div></div>
													</div>
													{/* Line */}
													<div className="w-px h-4 bg-gradient-to-b from-orange-500/40 to-status-blue/40"></div>
													{/* Agent */}
													<div className="bg-status-blue/[0.07] border border-status-blue/40 rounded-lg px-4 py-2.5 w-56 shadow-[0_0_20px_rgba(59,130,246,0.15)] relative">
														<div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#111] border border-status-blue/40 rounded-full"></div>
														<div className="flex items-center gap-2 mb-0.5">
															<div className="w-4 h-4 rounded bg-status-blue/20 flex items-center justify-center text-[8px] text-status-blue font-bold">N</div>
															<span className="text-[10px] font-bold text-white">Triage Agent</span>
															<span className="ml-auto text-[8px] bg-status-blue/20 text-status-blue px-1 py-0.5 rounded uppercase">reasoning</span>
														</div>
														<div className="text-[9px] text-white/35 pl-6">Evaluate vs CS cluster · route severity</div>
														<div className="bg-black/30 border border-white/5 rounded p-1.5 mt-2 flex flex-col gap-1">
															<div className="h-1 bg-status-blue/50 rounded w-full"></div>
															<div className="h-1 bg-status-blue/30 rounded w-3/4"></div>
														</div>
														<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#111] border border-status-blue/40 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-status-blue/60 rounded-full animate-pulse"></div></div>
													</div>
													{/* Split */}
													<div className="relative w-52 h-5 flex justify-center flex-shrink-0">
														<div className="w-px h-2.5 bg-white/10 absolute top-0"></div>
														<div className="absolute top-2.5 left-[20%] right-[20%] h-px bg-white/10"></div>
														<div className="absolute top-2.5 left-[20%] w-px h-2.5 bg-white/10"></div>
														<div className="absolute top-2.5 right-[20%] w-px h-2.5 bg-white/10"></div>
													</div>
													{/* Bottom actions */}
													<div className="flex gap-3">
														<div className="bg-[#1a1a1a] border border-emerald-500/30 rounded-lg px-3 py-2 text-center w-24">
															<div className="text-[9px] font-bold text-emerald-400">Send Email</div>
															<div className="text-[8px] text-white/25 mt-0.5">via Gmail</div>
														</div>
														<div className="bg-[#1a1a1a] border border-red-500/30 rounded-lg px-3 py-2 text-center w-24">
															<div className="text-[9px] font-bold text-red-400">Escalate</div>
															<div className="text-[8px] text-white/25 mt-0.5">+ approval gate</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									)}

									{/* STEP 06 - Govern and Scale */}
									{activeStep === 5 && (
										<div className="h-full flex flex-col p-3 gap-3">
											{/* Stats row */}
											<div className="grid grid-cols-3 gap-2">
												{[
													{ label: "Actions logged", value: "847", color: "text-status-blue" },
													{ label: "Error rate", value: "0.2%", color: "text-emerald-400" },
													{ label: "Retention", value: "90 days", color: "text-white/70" },
												].map((s) => (
													<div key={s.label} className="bg-[#111] border border-white/8 rounded-xl p-2.5 text-center">
														<div className={`text-sm font-bold ${s.color}`}>{s.value}</div>
														<div className="text-[9px] text-white/30 mt-0.5">{s.label}</div>
													</div>
												))}
											</div>
											{/* Audit log */}
											<div className="bg-[#0a0a0a] border border-white/8 rounded-xl flex-1 overflow-hidden">
												<div className="text-[9px] font-bold tracking-widest text-white/25 px-3 py-2 border-b border-white/5">AUDIT LOG</div>
												<div className="flex flex-col">
													{[
														{ actor: "ADMIN", action: "Updated CS cluster permissions", time: "2m", alert: false },
														{ actor: "SYSTEM", action: "Blocked unauthorized API key", time: "14m", alert: true },
														{ actor: "AGENT", action: "Generated Q3 report via PDF skill", time: "1h", alert: false },
														{ actor: "MEMBER", action: "Connected Salesforce OAuth", time: "3h", alert: false },
													].map((log, i) => (
														<div key={i} className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.04] hover:bg-white/[0.02]">
															<span className={`text-[8px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${log.alert ? "bg-red-500/20 text-red-400" : "bg-white/8 text-white/50"}`}>{log.actor}</span>
															<span className="text-[10px] text-white/65 flex-1 truncate">{log.action}</span>
															<span className="text-[9px] text-white/25 flex-shrink-0">{log.time}</span>
														</div>
													))}
												</div>
											</div>
											{/* RBAC pill row */}
											<div className="flex gap-2 flex-wrap">
												{[["Owners", "1", "text-amber-400 bg-amber-400/10"], ["Admins", "2", "text-status-blue bg-status-blue/10"], ["Members", "10", "text-white/60 bg-white/5"], ["Viewers", "3", "text-white/40 bg-white/5"]].map(([role, count, cls]) => (
													<div key={role} className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${cls}`}>{role} · {count}</div>
												))}
											</div>
										</div>
									)}

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

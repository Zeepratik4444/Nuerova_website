import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
	{
		id: "clusters",
		title: "Scoped Memory Clusters",
		description: "Team memory that survives turnover, silos, and one-off chats. Knowledge is scoped by team, project, client, or org.",
		points: [
			"Create clusters by team, department, or client",
			"Granular read, write, and contribute permissions",
			"Activity logs showing which knowledge an agent used",
		],
		mockUi: (
			<div className="flex flex-col h-full bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative">
				<div className="absolute top-0 right-0 w-32 h-32 bg-status-blue/10 rounded-full blur-3xl pointer-events-none"></div>
				<div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-black/40">
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
						<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
						<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
					</div>
					<div className="text-[10px] font-medium text-white/40 tracking-wider">KNOWLEDGE CLUSTERS</div>
				</div>
				<div className="p-5 flex flex-col gap-3 flex-1 overflow-y-auto">
					{[
						{ name: "CS Operations", items: 42, color: "bg-status-blue", active: true },
						{ name: "Engineering Docs", items: 128, color: "bg-purple-500", active: false },
						{ name: "Sales Playbooks", items: 15, color: "bg-orange-500", active: false },
					].map((cluster, i) => (
						<div key={i} className={`flex items-center justify-between p-3 rounded-lg border transition-all ${cluster.active ? 'border-status-blue/30 bg-status-blue/5' : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05]'}`}>
							<div className="flex items-center gap-3">
								<div className={`w-8 h-8 rounded-md ${cluster.color} flex items-center justify-center`}>
									<svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
								</div>
								<div>
									<div className="text-sm font-medium text-white">{cluster.name}</div>
									<div className="text-[10px] text-white/50">{cluster.items} sources synced</div>
								</div>
							</div>
							{cluster.active && <div className="text-[10px] font-bold text-status-blue bg-status-blue/10 px-2 py-1 rounded">ACTIVE</div>}
						</div>
					))}
					<div className="mt-4 border border-dashed border-white/20 rounded-lg p-4 flex flex-col items-center justify-center text-center opacity-70">
						<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mb-2">+</div>
						<div className="text-xs text-white/60">Connect new source</div>
					</div>
				</div>
			</div>
		)
	},
	{
		id: "agents",
		title: "Context-Aware Agents",
		description: "Agents that know your context, not just your question. They reason over team memory and cite their sources.",
		points: [
			"Context-aware responses backed by team memory",
			"Inline citations from actual connected documents",
			"Human escalation paths for low confidence answers",
		],
		mockUi: (
			<div className="flex flex-col h-full bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
				<div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-black/40">
					<div className="flex items-center gap-2">
						<div className="w-6 h-6 rounded bg-purple-500/20 border border-purple-500/30 flex items-center justify-center"><span className="text-[10px]">A</span></div>
						<span className="text-xs text-white/80 font-medium">Support Agent</span>
					</div>
					<div className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Online</div>
				</div>
				<div className="p-4 flex flex-col gap-4 flex-1">
					<div className="flex justify-end">
						<div className="bg-white/10 text-white text-sm p-3 rounded-2xl rounded-tr-sm max-w-[85%] border border-white/5">
							What is the standard SLA for Enterprise tier?
						</div>
					</div>
					<div className="flex items-start gap-3">
						<div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-status-blue flex-shrink-0"></div>
						<div className="flex flex-col gap-2 w-full">
							<div className="flex gap-1.5 items-center mb-1">
								<div className="w-1 h-1 bg-status-blue rounded-full animate-ping"></div>
								<span className="text-[10px] text-status-blue font-medium tracking-wider">SEARCHING CLUSTER...</span>
							</div>
							<div className="bg-black/60 border border-white/10 text-white/90 text-sm p-3.5 rounded-2xl rounded-tl-sm w-full">
								<p className="mb-2 leading-relaxed">Based on the current <span className="text-purple-400 font-medium underline decoration-purple-400/30 cursor-pointer">Service Level Agreements doc</span>, Enterprise tier guarantees a 99.9% uptime SLA with a 1-hour priority response time.</p>
								<div className="mt-3 pt-3 border-t border-white/10 flex gap-2">
									<span className="text-[10px] text-white/50 bg-white/5 px-2 py-1 rounded border border-white/10 flex items-center gap-1"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Cited: SLA.pdf</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	},
	{
		id: "workflows",
		title: "Agent-Native Workflows",
		description: "Automations that reason before they run. Nuerova workflows include intelligent decision nodes.",
		points: [
			"Visual workflow builder with reasoning nodes",
			"Schedule, webhook, and manual triggers",
			"Approval gates before critical actions",
		],
		mockUi: (
			<div className="flex flex-col h-full bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none"></div>
				<div className="p-6 flex flex-col items-center justify-center h-full relative z-10">
					{/* Node 1 */}
					<div className="bg-[#111] border border-white/10 rounded-lg p-3 w-48 shadow-lg flex items-center gap-3 relative z-10">
						<div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
						<div>
							<div className="text-xs text-white font-medium">Trigger</div>
							<div className="text-[10px] text-white/40">Zendesk Ticket</div>
						</div>
					</div>
					
					<div className="w-0.5 h-6 bg-gradient-to-b from-blue-500/50 to-orange-500/50"></div>
					
					{/* Node 2 - Agent */}
					<div className="bg-[#111] border border-orange-500/30 rounded-lg p-3 w-56 shadow-[0_0_15px_rgba(249,115,22,0.15)] flex flex-col gap-2 relative z-10 transform scale-105">
						<div className="flex items-center gap-3">
							<div className="w-6 h-6 rounded bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></div>
							<div>
								<div className="text-xs text-orange-400 font-bold tracking-wide">AI REASONING</div>
								<div className="text-[10px] text-white/60">Analyze intent & route</div>
							</div>
						</div>
						<div className="text-[9px] text-white/30 font-mono mt-1 pt-2 border-t border-white/5">Prompt: Categorize ticket urgency based on CS cluster...</div>
					</div>
					
					<div className="w-0.5 h-6 bg-gradient-to-b from-orange-500/50 to-emerald-500/50"></div>
					
					{/* Node 3 */}
					<div className="bg-[#111] border border-white/10 rounded-lg p-3 w-48 shadow-lg flex items-center gap-3 relative z-10">
						<div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
						<div>
							<div className="text-xs text-white font-medium">Action</div>
							<div className="text-[10px] text-white/40">Draft Response</div>
						</div>
					</div>
				</div>
			</div>
		)
	},
	{
		id: "admin",
		title: "Enterprise Governance",
		description: "Enterprise controls from day one. Audit logs, RBAC, and org-level data boundaries.",
		points: [
			"Role-based access control (Owner, Admin, Member, Viewer)",
			"Comprehensive audit logs for agent and automation actions",
			"Absolute data isolation between clusters",
		],
		mockUi: (
			<div className="flex flex-col h-full bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative">
				<div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-black/40">
					<span className="text-[10px] font-bold tracking-widest text-white/60">ADMIN CONSOLE</span>
					<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
				</div>
				<div className="p-4 flex-1 overflow-y-auto">
					<div className="text-[10px] font-medium tracking-widest text-white/40 mb-3">RECENT AUDIT LOGS</div>
					<div className="flex flex-col gap-2">
						{[
							{ role: "ADMIN", action: "Updated Sales cluster permissions", time: "2m ago", alert: false },
							{ role: "SYSTEM", action: "Blocked unauthorized API key", time: "14m ago", alert: true },
							{ role: "AGENT", action: "Drafted email via workflow", time: "1h ago", alert: false },
							{ role: "MEMBER", action: "Uploaded Q3 Financials.pdf", time: "3h ago", alert: false },
						].map((log, i) => (
							<div key={i} className="flex items-center justify-between p-2.5 rounded bg-white/[0.02] border border-white/5 text-xs">
								<div className="flex items-center gap-3">
									<span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${log.alert ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-white/70'}`}>{log.role}</span>
									<span className="text-white/80">{log.action}</span>
								</div>
								<span className="text-white/30 text-[10px]">{log.time}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
];

export function FeaturesPage() {
	useSEO({
		title: "Features — Scoped Clusters, Custom Agents & Governance | Nuerova",
		description: "Explore Nuerova features for team intelligence: scoped knowledge clusters, custom agent personas, visual workflow builders, validation queues, and audit logs.",
		schemaOrg: {
			"@type": "WebPage",
			"name": "Features — Scoped Clusters, Custom Agents & Governance | Nuerova",
			"description": "Explore Nuerova features for team intelligence: scoped knowledge clusters, custom agent personas, visual workflow builders, validation queues, and audit logs.",
			"about": {
				"@type": "SoftwareApplication",
				"name": "Nuerova Platform",
				"featureList": [
					"Memory Clusters",
					"Triage Agents",
					"Role-Based Access Control",
					"Action Approvals",
					"Audit Logs"
				]
			}
		}
	});

	useScrollReveal();

	const [activeFeature, setActiveFeature] = useState(0);

	return (
		<div className="bg-[#050505] text-white min-h-screen flex flex-col selection:bg-status-blue/30 selection:text-white font-sans">
			<Navigation />

			<main id="main" className="flex-grow pb-24 pt-32">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg mb-20 reveal">
					<div className="max-w-3xl">
						<span className="font-label-caps text-xs text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-6">
							FEATURE DEEP DIVE
						</span>
						<h1 className="font-headline-lg text-5xl md:text-6xl text-white mb-6 font-bold tracking-tight leading-tight">
							Built for the 20% of capabilities that define 80% of team performance.
						</h1>
						<p className="font-body-md text-xl text-white/50 max-w-2xl leading-relaxed">
							Every feature supports the same promise: shared memory, reusable skills, governed action, and team context that compounds.
						</p>
					</div>
				</section>

				{/* ── INTERACTIVE SIDEBAR SECTION ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-12 reveal">
					<div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
						{/* Left: Sticky Sidebar */}
						<div className="lg:w-1/3 flex flex-col gap-2 relative">
							<div className="sticky top-32 flex flex-col gap-2">
								{features.map((feature, idx) => (
									<button
										key={feature.id}
										onClick={() => setActiveFeature(idx)}
										className={`text-left p-5 rounded-xl transition-all duration-300 border ${
											activeFeature === idx 
												? "bg-white/[0.04] border-status-blue/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]" 
												: "bg-transparent border-transparent hover:bg-white/[0.02]"
										}`}
									>
										<div className="flex items-center justify-between mb-2">
											<h3 className={`text-lg font-bold transition-colors ${activeFeature === idx ? "text-white" : "text-white/60"}`}>
												{feature.title}
											</h3>
											{activeFeature === idx && (
												<svg className="w-5 h-5 text-status-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
												</svg>
											)}
										</div>
										<p className={`text-sm transition-colors ${activeFeature === idx ? "text-white/70" : "text-white/40"}`}>
											{feature.description.substring(0, 60)}...
										</p>
									</button>
								))}
							</div>
						</div>

						{/* Right: Active Content & Mock UI */}
						<div className="lg:w-2/3 flex flex-col">
							<div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500" key={features[activeFeature].id}>
								<h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
									{features[activeFeature].title}
								</h2>
								<p className="text-lg text-white/50 mb-8 leading-relaxed max-w-2xl">
									{features[activeFeature].description}
								</p>
								<ul className="space-y-4 mb-10">
									{features[activeFeature].points.map((point, i) => (
										<li key={i} className="flex items-start gap-3">
											<div className="mt-1 w-5 h-5 rounded-full bg-status-blue/20 text-status-blue flex items-center justify-center flex-shrink-0">
												<svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
											</div>
											<span className="text-white/80">{point}</span>
										</li>
									))}
								</ul>
								
								{/* Mock UI Container */}
								<div className="h-80 md:h-96 w-full max-w-2xl">
									{features[activeFeature].mockUi}
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
							<span className="font-label-caps text-xs text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block mb-4">NEXT STEP</span>
							<h2 className="font-headline-md text-3xl text-white mb-4 font-bold tracking-tight">See Nuerova with your team's workflow.</h2>
							<p className="font-body-md text-white/60">Bring one real context-heavy process. We'll show how clusters, agents, and automations connect.</p>
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

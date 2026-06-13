import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FeaturesPage() {
	useSEO({
		title: "Features | Nuerova",
		description: "Deep dive into Nuerova's team intelligence capabilities: scoped memory clusters, context-aware agents, visual automations, and skill registry.",
	});

	useScrollReveal();

	return (
		<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />

			<main id="main" className="flex-grow pb-section-gap pt-24">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pt-8 pb-section-gap reveal">
					<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
						FEATURE DEEP DIVE
					</span>
					<h1 className="font-headline-md text-4xl md:text-5xl text-primary mb-stack-lg leading-tight font-bold tracking-tight max-w-3xl">
						Built for the 20% of capabilities that define 80% of team performance.
					</h1>
					<p className="font-body-md text-body-md text-white/50 max-w-2xl mb-10">
						Every feature supports the same promise: shared memory, reusable skills, governed action, and team context that compounds.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{["Scoped clusters", "Contextual agents", "Reasoning workflows", "Audit-ready controls"].map((label) => (
							<div key={label} className="border border-white/10 px-4 py-3 rounded text-sm text-white/70 text-center">
								{label}
							</div>
						))}
					</div>
				</section>

				{/* ── WHO IT'S FOR ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-8 border-t border-white/10 reveal">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{[
							"Operations teams with repeated coordination overhead",
							"CS and RevOps teams that need durable account memory",
							"Engineering leaders who need controls without long rollouts",
						].map((text) => (
							<div key={text} className="border border-status-blue/20 bg-status-blue/5 px-6 py-4 rounded-lg text-sm text-white/70">
								{text}
							</div>
						))}
					</div>
				</section>

				{/* ── F1: SCOPED MEMORY CLUSTERS ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="flex flex-col md:flex-row gap-16 items-center">
						<div className="flex-1">
							<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
								KNOWLEDGE INFRASTRUCTURE
							</span>
							<h2 className="font-headline-md text-3xl text-primary mb-4 font-bold tracking-tight leading-snug">
								Team memory that survives turnover, silos, and one-off chats.
							</h2>
							<p className="font-body-md text-sm text-white/50 mb-6 leading-relaxed">
								Nuerova clusters scope knowledge by team, project, client, or org. Every agent operating inside a cluster inherits its context automatically.
							</p>
							<ul className="space-y-3">
								{[
									"Create clusters by team, department, or client",
									"Granular read, write, and contribute permissions",
									"Activity logs showing which knowledge an agent used",
									"Admin controls over retention and visibility",
								].map((item) => (
									<li key={item} className="flex items-center gap-3 text-sm text-white/70">
										<div className="w-1.5 h-1.5 rounded-full bg-status-blue flex-shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className="w-full md:w-80 border border-white/10 rounded-lg bg-[#0f0f0f] p-6 space-y-3">
							<div className="text-[10px] text-white/40 font-medium tracking-widest mb-4">CLUSTERS</div>
							{[
								{ color: "bg-status-blue", label: "CS Accounts", sub: "42 sources synced" },
								{ color: "bg-orange-600", label: "Ops Playbooks", sub: "18 skills published" },
								{ color: "bg-emerald-600", label: "Engineering", sub: "RBAC enforced" },
							].map((item) => (
								<div key={item.label} className="flex items-center gap-3 border border-white/10 p-3 rounded">
									<div className={`w-6 h-6 rounded ${item.color} flex-shrink-0`} />
									<div>
										<div className="text-sm font-medium text-white">{item.label}</div>
										<div className="text-[10px] text-white/50">{item.sub}</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── F2: CONTEXT-AWARE AGENTS ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="flex flex-col md:flex-row-reverse gap-16 items-center">
						<div className="flex-1">
							<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
								INTELLIGENT ASSISTANCE
							</span>
							<h2 className="font-headline-md text-3xl text-primary mb-4 font-bold tracking-tight leading-snug">
								Agents that know your context, not just your question.
							</h2>
							<p className="font-body-md text-sm text-white/50 mb-6 leading-relaxed">
								Every Nuerova agent is spawned with the scoped knowledge of its cluster. No copy-paste. No re-explaining the project every session.
							</p>
							<ul className="space-y-3">
								{[
									"Context-aware responses backed by team memory",
									"Inline citations from cluster knowledge",
									"Human escalation when confidence is low",
									"Session history preserved per agent and cluster",
								].map((item) => (
									<li key={item} className="flex items-center gap-3 text-sm text-white/70">
										<div className="w-1.5 h-1.5 rounded-full bg-status-blue flex-shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className="w-full md:w-80 border border-white/10 rounded-lg bg-[#0f0f0f] p-6 space-y-4">
							<div className="flex justify-end">
								<div className="bg-status-blue/20 border border-status-blue/30 text-white p-3 rounded-lg text-sm max-w-[220px]">
									What changed since the renewal review?
								</div>
							</div>
							<div className="bg-white/5 border border-white/10 text-white p-4 rounded-lg text-sm">
								<div className="w-full h-1 bg-white/10 rounded-full mb-3 overflow-hidden">
									<div className="w-full h-full bg-status-blue" />
								</div>
								<p className="leading-relaxed mb-3 text-white/70">
									Usage recovered. Security review remains the only blocker.
								</p>
								<div className="flex gap-2">
									<span className="text-[10px] text-status-blue bg-status-blue/10 px-2 py-0.5 rounded">QBR notes</span>
									<span className="text-[10px] text-status-blue bg-status-blue/10 px-2 py-0.5 rounded">Slack thread</span>
								</div>
							</div>
							<div className="text-[10px] text-white/30 text-center">Answers are fully cited.</div>
						</div>
					</div>
				</section>

				{/* ── F3: AUTOMATIONS ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="flex flex-col md:flex-row gap-16 items-center">
						<div className="flex-1">
							<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
								AGENT-NATIVE AUTOMATION
							</span>
							<h2 className="font-headline-md text-3xl text-primary mb-4 font-bold tracking-tight leading-snug">
								Workflows that reason before they run.
							</h2>
							<p className="font-body-md text-sm text-white/50 mb-6 leading-relaxed">
								Unlike rigid no-code tools, Nuerova automations include an agent reasoning step before execution or escalation.
							</p>
							<ul className="space-y-3">
								{[
									"Schedule, webhook, manual, and event triggers",
									"Scoped data-source selection",
									"Conditional paths and approval gates",
									"Run history, retries, and failure alerts",
								].map((item) => (
									<li key={item} className="flex items-center gap-3 text-sm text-white/70">
										<div className="w-1.5 h-1.5 rounded-full bg-status-blue flex-shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className="w-full md:w-72 space-y-2">
							{[
								{ label: "Trigger: Webhook inbound", cls: "border-white/10 text-white/70" },
								{ label: "Reason over cluster", cls: "border-status-blue/30 bg-status-blue/5 text-status-blue font-medium" },
								{ label: "Confidence check", cls: "border-white/10 text-white/70" },
								{ label: "Act or escalate for approval", cls: "border-orange-500/30 bg-orange-500/5 text-orange-500 font-medium" },
							].map((step, i) => (
								<div key={step.label}>
									<div className={`border p-3 rounded text-xs text-center ${step.cls}`}>{step.label}</div>
									{i < 3 && (
										<div className="flex justify-center my-1">
											<div className="w-px h-4 bg-white/10" />
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── F4: SKILL REGISTRY ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="flex flex-col md:flex-row-reverse gap-16 items-center">
						<div className="flex-1">
							<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
								REUSABLE INTELLIGENCE
							</span>
							<h2 className="font-headline-md text-3xl text-primary mb-4 font-bold tracking-tight leading-snug">
								Build once. Share across every team that needs it.
							</h2>
							<p className="font-body-md text-sm text-white/50 mb-6 leading-relaxed">
								Skills package prompts, workflows, and tools for publication inside your organization. The library gets stronger as teams contribute.
							</p>
							<ul className="space-y-3">
								{[
									"Create personal or org-level skills",
									"Publish to team or org libraries",
									"Version control and change history",
									"Usage analytics per skill",
								].map((item) => (
									<li key={item} className="flex items-center gap-3 text-sm text-white/70">
										<div className="w-1.5 h-1.5 rounded-full bg-status-blue flex-shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className="w-full md:w-80 border border-white/10 rounded-lg bg-[#0f0f0f] p-6 space-y-3">
							<div className="text-[10px] text-white/40 font-medium tracking-widest mb-4">SKILL REGISTRY</div>
							{[
								{ version: "V3", label: "Renewal Risk Brief", status: "Published", statusCls: "text-emerald-500 bg-emerald-500/10" },
								{ version: "V1", label: "Incident Summary", status: "Draft", statusCls: "text-white/50 bg-white/10" },
								{ version: "V2", label: "Handoff Plan", status: "Team", statusCls: "text-status-blue bg-status-blue/10" },
							].map((item) => (
								<div key={item.label} className="flex items-center gap-3 border border-white/10 p-3 rounded">
									<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
										{item.version}
									</div>
									<div className="flex-1 text-sm font-medium text-white">{item.label}</div>
									<span className={`text-[10px] px-2 py-0.5 rounded font-medium ${item.statusCls}`}>{item.status}</span>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ── F5: GOVERNANCE & TRUST ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="flex flex-col md:flex-row gap-16 items-center">
						<div className="flex-1">
							<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
								GOVERNANCE AND TRUST
							</span>
							<h2 className="font-headline-md text-3xl text-primary mb-4 font-bold tracking-tight leading-snug">
								Enterprise controls from day one. Not bolted on later.
							</h2>
							<p className="font-body-md text-sm text-white/50 mb-6 leading-relaxed">
								Nuerova was designed multi-tenant, scoped, and auditable from the first architectural decision.
							</p>
							<ul className="space-y-3">
								{[
									"Role-based access control for owners, admins, members, and viewers",
									"Org-level audit logs for agent and automation actions",
									"Data isolation between organizations and clusters",
									"Roadmap: SSO, MFA, and SOC 2 Type II",
								].map((item) => (
									<li key={item} className="flex items-center gap-3 text-sm text-white/70">
										<div className="w-1.5 h-1.5 rounded-full bg-status-blue flex-shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className="w-full md:w-80 border border-white/10 rounded-lg bg-[#0f0f0f] p-6">
							<div className="text-[10px] text-white/40 font-medium tracking-widest mb-4">AUDIT LOG</div>
							<div className="space-y-3 text-xs">
								{[
									{ badge: "ADMIN", badgeCls: "bg-white/10 text-white", action: "Updated role policy", time: "2m ago" },
									{ badge: "SYSTEM", badgeCls: "bg-red-500/10 text-red-500", action: "Blocked cross-cluster request", time: "9m ago" },
									{ badge: "AGENT", badgeCls: "bg-status-blue/10 text-status-blue", action: "Cited approved source", time: "1h ago" },
								].map((entry) => (
									<div key={entry.action} className="border-b border-white/5 pb-3 flex justify-between items-center last:border-0 last:pb-0">
										<div className="flex gap-2 items-center">
											<strong className={`px-1.5 py-0.5 rounded text-[10px] ${entry.badgeCls}`}>{entry.badge}</strong>
											<span className="text-white/70">{entry.action}</span>
										</div>
										<small className="text-white/40 flex-shrink-0 ml-4">{entry.time}</small>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* ── BOTTOM CTA ── */}
				<section className="w-full bg-[#111315] py-section-gap border-y border-white/[0.08] reveal">
					<div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row gap-8 items-center justify-between">
						<div>
							<span className="font-label-caps text-label-caps text-white/60 border border-white/20 px-3 py-1 rounded-full inline-block mb-4">NEXT STEP</span>
							<h2 className="font-headline-md text-3xl text-primary mb-2 font-bold tracking-tight">See Nuerova with your team's workflow.</h2>
							<p className="font-body-md text-sm text-white/60">Bring one real context-heavy process. We'll show how clusters, agents, and automations connect.</p>
						</div>
						<Link
							to="/contact"
							className="flex-shrink-0 bg-status-blue text-white px-8 py-3 rounded hover:opacity-90 transition-opacity font-bold text-sm"
						>
							Request a demo
						</Link>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

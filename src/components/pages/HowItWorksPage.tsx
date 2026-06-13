import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HowItWorksPage() {
	useSEO({
		title: "How It Works | Nuerova",
		description: "Learn how Nuerova connects your knowledge sources, builds scoped clusters, deploys agents, and automates workflows with enterprise controls.",
	});

	useScrollReveal();

	const steps = [
		{
			num: "01",
			title: "Connect your knowledge sources",
			body: "Link Notion, Confluence, Google Drive, Slack, CRM records, GitHub, or any REST source. Nuerova ingests, chunks, and indexes content without manual tagging.",
			note: "Setup: 1 to 2 days. Your sources stay authoritative.",
			tags: ["Notion", "Slack", "Drive", "GitHub", "CRM"],
		},
		{
			num: "02",
			title: "Create your first cluster",
			body: "A cluster is a scoped knowledge pool: a team, client account, project, or department. Add members, set permissions, and Nuerova routes queries through that context.",
			note: "No cluster is visible outside its permission boundary.",
			tags: ["Team scope", "Permissions", "Isolation"],
		},
		{
			num: "03",
			title: "Deploy agents against your clusters",
			body: "Agents inside a cluster inherit its knowledge automatically. Ask a question and the agent reasons over your team's actual context, not generic training data.",
			note: "Agents cite sources. Output is reviewable.",
			tags: ["Context-aware", "Cited responses", "No re-explaining"],
		},
		{
			num: "04",
			title: "Build automations on top of context",
			body: "Create workflows that trigger, reason over cluster knowledge, execute, and optionally wait for approval before taking action.",
			note: "Every automation has a run log.",
			tags: ["Triggers", "Reasoning", "Approval gates"],
		},
		{
			num: "05",
			title: "Govern, observe, and scale",
			body: "The admin panel shows who used what, what agents did, and which automations ran. RBAC controls enforce boundaries and audit logs capture key actions.",
			note: "Leaders get one source of truth.",
			tags: ["RBAC", "Audit logs", "Usage visibility"],
		},
	];

	return (
		<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />

			<main id="main" className="flex-grow pb-section-gap pt-24">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pt-8 pb-section-gap reveal">
					<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
						HOW IT WORKS
					</span>
					<h1 className="font-headline-md text-4xl md:text-5xl text-primary mb-stack-lg leading-tight font-bold tracking-tight max-w-3xl">
						Here is what happens after you connect your first knowledge source.
					</h1>
					<p className="font-body-md text-body-md text-white/50 max-w-2xl">
						Nuerova turns your team's scattered context into a governed intelligence layer in five steps.
					</p>
				</section>

				{/* ── TIMELINE ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg border-t border-white/10 reveal">
					<div className="relative">
						{steps.map((step, index) => (
							<div
								key={step.num}
								className={`flex flex-col md:flex-row gap-8 md:gap-16 py-section-gap ${index < steps.length - 1 ? "border-b border-white/10" : ""}`}
							>
								{/* Step number */}
								<div className="flex-shrink-0 md:w-24 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
									<div className="w-12 h-12 rounded-full border border-status-blue/30 bg-status-blue/5 flex items-center justify-center text-status-blue font-bold text-sm flex-shrink-0">
										{step.num}
									</div>
								</div>

								{/* Step content */}
								<div className="flex-1">
									<h2 className="font-headline-md text-2xl md:text-3xl text-primary mb-4 font-bold tracking-tight">
										{step.title}
									</h2>
									<p className="font-body-md text-sm text-white/50 mb-6 leading-relaxed max-w-2xl">
										{step.body}
									</p>
									<div className="flex flex-wrap gap-3 mb-4">
										{step.tags.map((tag) => (
											<span key={tag} className="text-[11px] text-white/60 border border-white/10 px-3 py-1 rounded-full">
												{tag}
											</span>
										))}
									</div>
									<p className="text-xs text-status-blue font-medium">{step.note}</p>
								</div>

								{/* Step connector line (desktop) */}
								<div className="hidden md:block flex-shrink-0 w-64">
									<div className="border border-white/10 rounded-lg bg-[#0f0f0f] p-4 h-full min-h-[80px] flex items-center justify-center">
										<div className="text-center">
											<div className="text-status-blue font-bold text-2xl mb-1">{step.num}</div>
											<div className="text-xs text-white/40">Step {parseInt(step.num)} of 5</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* ── BOTTOM CTA ── */}
				<section className="w-full bg-[#111315] py-section-gap border-y border-white/[0.08] reveal">
					<div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row gap-8 items-center justify-between">
						<div>
							<span className="font-label-caps text-label-caps text-white/60 border border-white/20 px-3 py-1 rounded-full inline-block mb-4">
								LIVE WALKTHROUGH
							</span>
							<h2 className="font-headline-md text-3xl text-primary mb-2 font-bold tracking-tight">
								Map this flow to one team process.
							</h2>
							<p className="font-body-md text-sm text-white/60">
								A focused demo is the fastest way to see whether Nuerova fits your stack.
							</p>
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

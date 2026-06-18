import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
	{
		group: "Setup and onboarding",
		icon: <svg className="w-5 h-5 text-status-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
		items: [
			{
				q: "How long does setup take?",
				a: "Most teams can connect initial sources and launch a first knowledge cluster within three days. Our onboarding team provides a white-glove setup experience to ensure you see value immediately.",
			},
			{
				q: "Do I need an IT team to get started?",
				a: "No, not for an initial pilot. Business users can easily authorize OAuth connections (like Google Drive, Slack, or Notion). IT typically joins when a company-wide security review, SSO implementation, or custom database integrations are required.",
			},
		],
	},
	{
		group: "Product and capabilities",
		icon: <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
		items: [
			{
				q: "What is the difference between a cluster and a workspace?",
				a: "A workspace is your company's broad environment. A cluster is a strictly scoped memory pool inside it—usually tied to a specific team, client account, project, or department. Agents operate securely within these clusters.",
			},
			{
				q: "Can agents use data from multiple clusters at once?",
				a: "Only if explicit cross-cluster permissions are granted by an Admin. By default, reasoning is kept in strict silos to prevent cross-contamination of sensitive data.",
			},
			{
				q: "What happens when an automation fails?",
				a: "All automation runs are captured in the Audit Log. Failures immediately alert the automation owners, and human-in-the-loop approval gates can be configured to stop risky actions from running silently.",
			},
		],
	},
	{
		group: "Security and data",
		icon: <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
		items: [
			{
				q: "Does Nuerova train on my data?",
				a: "Absolutely not. Customer data is strictly used for retrieval and context generation within your own workspace. We explicitly opt-out of data sharing with LLM providers.",
			},
			{
				q: "Where is my data stored?",
				a: "Storage depends on your deployment choice. Our multi-tenant cloud is hosted securely on AWS. We also offer hybrid and dedicated tenant architectures for enterprise customers with strict data residency requirements.",
			},
			{
				q: "How do I export everything if I leave?",
				a: "We don't lock your data away. One-click export and certified deletion workflows are part of responsible offboarding for all paid tier teams.",
			},
		],
	},
	{
		group: "Pricing and plans",
		icon: <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
		items: [
			{
				q: "Can I upgrade mid-cycle?",
				a: "Yes. Teams can smoothly move from Starter to Teams or Enterprise tiers as usage and governance needs grow. Upgrades are prorated.",
			},
			{
				q: "Is there a free trial?",
				a: "Instead of a generic free trial, our preferred path is a focused pilot program with a real workflow. We've found that shared memory value is easiest to judge when interacting with your team's actual context, rather than dummy data.",
			},
		],
	},
];

function FAQItem({ q, a }: { q: string; a: string }) {
	const [open, setOpen] = useState(false);
	return (
		<div className="border border-white/5 bg-[#0a0a0a] rounded-xl mb-4 overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
			<button
				type="button"
				className="w-full flex justify-between items-center p-6 text-left gap-4"
				onClick={() => setOpen(!open)}
				aria-expanded={open}
			>
				<span className="text-base text-white/90 font-medium pr-8">{q}</span>
				<div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-status-blue/20 border-status-blue/30 rotate-45" : "bg-[#111]"}`}>
					<svg className={`w-4 h-4 transition-colors duration-300 ${open ? "text-status-blue" : "text-white/70"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
				</div>
			</button>
			<div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
				<p className="px-6 pb-6 text-sm text-white/50 leading-relaxed">{a}</p>
			</div>
		</div>
	);
}

export function FAQPage() {
	useSEO({
		title: "FAQ - Nuerova Clusters, Agents & Security Questions",
		description: "Answers to Nuerova setup, data source integrations, pricing, security, and team intelligence automation questions.",
		schemaOrg: {
			"@type": "FAQPage",
			"mainEntity": faqs.flatMap(group => 
				group.items.map(item => ({
					"@type": "Question",
					"name": item.q,
					"acceptedAnswer": {
						"@type": "Answer",
						"text": item.a
					}
				}))
			)
		}
	});

	useScrollReveal();

	return (
		<div className="bg-[#050505] text-white min-h-screen flex flex-col selection:bg-status-blue/30 selection:text-white font-sans">
			<Navigation />

			<main id="main" className="flex-grow pb-24 pt-32">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg mb-20 text-center flex flex-col items-center reveal">
					<span className="font-label-caps text-xs text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-6">
						FREQUENTLY ASKED QUESTIONS
					</span>
					<h1 className="font-headline-lg text-5xl md:text-6xl text-white mb-6 font-bold tracking-tight leading-tight max-w-4xl">
						Clear answers for teams evaluating Nuerova.
					</h1>
					<p className="font-body-md text-xl text-white/50 max-w-2xl leading-relaxed">
						Everything you need to know about setup, architecture, security, and pricing before rolling out an intelligence layer.
					</p>
				</section>

				{/* ── FAQ GROUPS (Bento-style layout) ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-12 reveal">
					<div className="max-w-4xl mx-auto grid grid-cols-1 gap-12">
						{faqs.map((group) => (
							<div key={group.group} className="relative">
								<div className="flex items-center gap-3 mb-6">
									<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
										{group.icon}
									</div>
									<h2 className="text-2xl text-white font-bold tracking-tight">
										{group.group}
									</h2>
								</div>
								
								<div className="ml-0 md:ml-12">
									{group.items.map((item) => (
										<FAQItem key={item.q} q={item.q} a={item.a} />
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* ── BOTTOM CTA ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg mt-16 reveal">
					<div className="bg-gradient-to-r from-[#0a0a0a] to-[#111] border border-white/10 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row gap-8 items-center justify-between relative overflow-hidden max-w-4xl mx-auto">
						<div className="absolute top-0 right-0 w-64 h-64 bg-status-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
						<div className="relative z-10 max-w-xl">
							<span className="font-label-caps text-xs text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block mb-4">SUPPORT</span>
							<h2 className="font-headline-md text-3xl text-white mb-4 font-bold tracking-tight">Still have questions?</h2>
							<p className="font-body-md text-white/60">If you can't find what you're looking for, our team is happy to help answer any deep technical questions.</p>
						</div>
						<Link
							to="/contact"
							className="relative z-10 flex-shrink-0 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-bold text-sm"
						>
							Contact Support
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
	{
		group: "Setup and onboarding",
		items: [
			{
				q: "How long does setup take?",
				a: "Most teams can connect initial sources and launch a first cluster within three days.",
			},
			{
				q: "Do I need an IT team to get started?",
				a: "No for a pilot. IT usually joins when security review, SSO, or deeper integrations are required.",
			},
		],
	},
	{
		group: "Product",
		items: [
			{
				q: "What is the difference between a cluster and a workspace?",
				a: "A workspace is the broad environment. A cluster is a scoped memory pool inside it, usually tied to a team, account, project, or department.",
			},
			{
				q: "Can agents use data from multiple clusters at once?",
				a: "Only when permissions allow it. Cross-cluster reasoning is explicit and auditable.",
			},
			{
				q: "What happens when an automation fails?",
				a: "Runs are logged, failures can alert owners, and approval gates can stop risky actions from running silently.",
			},
		],
	},
	{
		group: "Security and data",
		items: [
			{
				q: "Does Nuerova train on my data?",
				a: "No. Customer data is not used to train external base models.",
			},
			{
				q: "Where is my data stored?",
				a: "Storage depends on deployment and customer requirements. The security page documents the architecture direction and controls.",
			},
			{
				q: "How do I export everything if I leave?",
				a: "Export and deletion workflows are part of responsible offboarding for paid teams.",
			},
		],
	},
	{
		group: "Pricing and plans",
		items: [
			{
				q: "Can I upgrade mid-cycle?",
				a: "Yes. Teams can move from Starter to Teams or Enterprise as usage and governance needs grow.",
			},
			{
				q: "Is there a free trial?",
				a: "The preferred path is a focused pilot with a real workflow, because shared memory value is easiest to judge with real context.",
			},
		],
	},
];

function FAQItem({ q, a }: { q: string; a: string }) {
	const [open, setOpen] = useState(false);
	return (
		<div className="border-b border-white/10 last:border-0">
			<button
				type="button"
				className="w-full flex justify-between items-center py-5 text-left gap-4 group"
				onClick={() => setOpen(!open)}
				aria-expanded={open}
			>
				<span className="font-body-md text-sm text-white/90 font-medium group-hover:text-white transition-colors">
					{q}
				</span>
				<span className={`text-status-blue text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
					+
				</span>
			</button>
			{open && (
				<p className="pb-5 font-body-md text-sm text-white/50 leading-relaxed">
					{a}
				</p>
			)}
		</div>
	);
}

export function FAQPage() {
	useSEO({
		title: "FAQ | Nuerova",
		description: "Setup, product, security, data, and pricing questions for teams evaluating shared AI memory.",
	});

	useScrollReveal();

	return (
		<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />

			<main id="main" className="flex-grow pb-section-gap pt-24">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pt-8 pb-section-gap reveal">
					<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
						FAQ
					</span>
					<h1 className="font-headline-md text-4xl md:text-5xl text-primary mb-stack-lg leading-tight font-bold tracking-tight max-w-3xl">
						Clear answers for teams evaluating shared AI memory.
					</h1>
					<p className="font-body-md text-body-md text-white/50 max-w-2xl mb-10">
						Setup, product, security, data, pricing, and rollout questions in one place.
					</p>
					<div className="flex flex-wrap gap-3">
						{["Setup", "Product", "Security", "Pricing"].map((label) => (
							<span key={label} className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
								{label}
							</span>
						))}
					</div>
				</section>

				{/* ── FAQ GROUPS ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg border-t border-white/10 reveal">
					<div className="max-w-3xl mx-auto">
						{faqs.map((group) => (
							<div key={group.group} className="py-section-gap border-b border-white/10 last:border-0">
								<h2 className="font-headline-sm text-xl text-primary font-bold mb-6">
									{group.group}
								</h2>
								<div>
									{group.items.map((item) => (
										<FAQItem key={item.q} q={item.q} a={item.a} />
									))}
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

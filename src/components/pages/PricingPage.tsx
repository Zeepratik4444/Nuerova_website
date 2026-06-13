import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const featureRows = [
	{ label: "Knowledge clusters", starter: "3", teams: "Unlimited", enterprise: "Unlimited" },
	{ label: "Automations", starter: "5", teams: "Unlimited", enterprise: "Unlimited + custom" },
	{ label: "Skill registry", starter: "Personal", teams: "Team publishing", enterprise: "Org governance" },
	{ label: "RBAC", starter: "Basic", teams: "3 roles", enterprise: "Custom roles" },
	{ label: "Audit logs", starter: "—", teams: "30 days", enterprise: "90 days + export" },
	{ label: "Support", starter: "Community", teams: "Email", enterprise: "Dedicated CSM" },
];

const pricingFaqs = [
	{ q: "Do agents use my data to train base models?", a: "No. Customer data is used to provide the product experience, not to train external base models." },
	{ q: "What happens to my data if I cancel?", a: "We support export and deletion workflows during offboarding." },
	{ q: "How long does setup take?", a: "Most teams can be live with an initial workspace and cluster within three days." },
	{ q: "Is Nuerova SOC 2 certified?", a: "Not yet. The security page documents the controls and roadmap." },
	{ q: "Can I self-host?", a: "Enterprise deployments can include architecture discussions for stricter data requirements." },
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
				<span className="font-body-md text-sm text-white/90 font-medium group-hover:text-white transition-colors">{q}</span>
				<span className={`text-status-blue text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
			</button>
			{open && <p className="pb-5 font-body-md text-sm text-white/50 leading-relaxed">{a}</p>}
		</div>
	);
}

export function PricingPage() {
	useSEO({
		title: "Pricing | Nuerova",
		description: "Start narrow and scale. Scoped memory, reusable skills, and agent-native automation plans for growing teams.",
	});

	useScrollReveal();

	const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
	const annual = billingPeriod === "annual";

	return (
		<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />

			<main id="main" className="flex-grow pb-section-gap pt-24">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pt-8 pb-section-gap text-center flex flex-col items-center reveal">
					<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
						PRICING
					</span>
					<h1 className="font-headline-md text-4xl md:text-5xl text-primary mb-stack-lg leading-tight font-bold tracking-tight max-w-3xl">
						Transparent pricing for teams that need AI to work at the enterprise level.
					</h1>
					<p className="font-body-md text-body-md text-white/50 max-w-2xl">
						Start with one workspace. Expand into clusters, automations, skill publishing, and governance as your team grows.
					</p>
				</section>

				{/* ── BILLING TOGGLE ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg border-t border-white/10 pt-section-gap reveal">
					<div className="flex justify-center mb-12">
						<div className="flex items-center gap-1 border border-white/10 rounded-lg p-1 bg-[#131313]">
							<button
								type="button"
								onClick={() => setBillingPeriod("monthly")}
								className={`px-5 py-2 rounded text-sm font-medium transition-all ${
									!annual ? "bg-status-blue text-white" : "text-white/60 hover:text-white"
								}`}
							>
								Monthly
							</button>
							<button
								type="button"
								onClick={() => setBillingPeriod("annual")}
								className={`px-5 py-2 rounded text-sm font-medium transition-all flex items-center gap-2 ${
									annual ? "bg-status-blue text-white" : "text-white/60 hover:text-white"
								}`}
							>
								Annual
								<span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${annual ? "bg-white/20 text-white" : "bg-emerald-500/20 text-emerald-400"}`}>
									-20%
								</span>
							</button>
						</div>
					</div>

					{/* ── PRICING CARDS ── */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Starter */}
						<div className="border border-white/10 rounded-xl p-8 bg-transparent flex flex-col">
							<span className="font-label-caps text-[10px] text-white/60 tracking-widest block mb-6">STARTER</span>
							<div className="mb-2">
								<span className="text-4xl font-bold text-white">{annual ? "$39" : "$49"}</span>
								<span className="text-white/50 text-sm ml-1">/mo</span>
							</div>
							{annual && <p className="text-[11px] text-emerald-500 mb-4">Billed annually — save $120/yr</p>}
							<p className="text-sm text-white/50 mb-6">Solo operators and micro-teams.</p>
							<ul className="space-y-2.5 mb-8 flex-1">
								{["1 workspace", "Up to 3 users", "3 knowledge clusters", "10 agent sessions/day", "5 automations", "Community support"].map((feat) => (
									<li key={feat} className="flex items-center gap-3 text-sm text-white/70">
										<div className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
										{feat}
									</li>
								))}
							</ul>
							<Link
								to="/contact"
								className="w-full text-center border border-white/20 text-white px-6 py-3 rounded hover:bg-white/5 transition-colors font-medium text-sm"
							>
								Start a pilot
							</Link>
						</div>

						{/* Teams (featured) */}
						<div className="border border-status-blue/40 rounded-xl p-8 bg-status-blue/5 flex flex-col relative">
							<div className="absolute -top-3 left-1/2 -translate-x-1/2">
								<span className="text-[10px] font-bold text-white bg-status-blue px-3 py-1 rounded-full">Most popular</span>
							</div>
							<span className="font-label-caps text-[10px] text-status-blue tracking-widest block mb-6">TEAMS</span>
							<div className="mb-2">
								<span className="text-4xl font-bold text-white">{annual ? "$159" : "$199"}</span>
								<span className="text-white/50 text-sm ml-1">/mo</span>
							</div>
							{annual && <p className="text-[11px] text-emerald-500 mb-4">Billed annually — save $480/yr</p>}
							<p className="text-sm text-white/50 mb-6">Teams of 5 to 50 building shared intelligence.</p>
							<ul className="space-y-2.5 mb-8 flex-1">
								{[
									"Up to 25 users",
									"Unlimited clusters",
									"Unlimited agent sessions",
									"Unlimited automations",
									"Skill registry",
									"RBAC and 30-day audit logs",
									"Email support and onboarding call",
								].map((feat) => (
									<li key={feat} className="flex items-center gap-3 text-sm text-white/70">
										<div className="w-1.5 h-1.5 rounded-full bg-status-blue flex-shrink-0" />
										{feat}
									</li>
								))}
							</ul>
							<Link
								to="/contact"
								className="w-full text-center bg-status-blue text-white px-6 py-3 rounded hover:opacity-90 transition-opacity font-bold text-sm"
							>
								Request demo
							</Link>
						</div>

						{/* Enterprise */}
						<div className="border border-white/10 rounded-xl p-8 bg-transparent flex flex-col">
							<span className="font-label-caps text-[10px] text-white/60 tracking-widest block mb-6">ENTERPRISE</span>
							<div className="mb-2">
								<span className="text-4xl font-bold text-white">Custom</span>
							</div>
							<p className="text-sm text-white/50 mb-6">Organizations that need governance, scale, and SLAs.</p>
							<ul className="space-y-2.5 mb-8 flex-1">
								{[
									"Unlimited workspaces and users",
									"Custom retention",
									"SSO and MFA roadmap",
									"90-day audit logs",
									"Dedicated CSM",
									"SLA and custom integrations",
								].map((feat) => (
									<li key={feat} className="flex items-center gap-3 text-sm text-white/70">
										<div className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
										{feat}
									</li>
								))}
							</ul>
							<Link
								to="/contact"
								className="w-full text-center border border-white/20 text-white px-6 py-3 rounded hover:bg-white/5 transition-colors font-medium text-sm"
							>
								Talk to sales
							</Link>
						</div>
					</div>
				</section>

				{/* ── FEATURE COMPARISON ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="text-center mb-12 flex flex-col items-center">
						<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
							FEATURE COMPARISON
						</span>
						<h2 className="font-headline-md text-headline-md text-primary font-bold tracking-tight">What each plan unlocks.</h2>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full text-sm">
							<thead>
								<tr className="border-b border-white/10">
									<th className="text-left py-4 pr-6 text-white/60 font-medium w-1/3">Feature</th>
									<th className="text-center py-4 px-4 text-white/60 font-medium">Starter</th>
									<th className="text-center py-4 px-4 text-status-blue font-semibold">Teams</th>
									<th className="text-center py-4 px-4 text-white/60 font-medium">Enterprise</th>
								</tr>
							</thead>
							<tbody>
								{featureRows.map((row, i) => (
									<tr key={row.label} className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
										<td className="py-4 pr-6 text-white/70">{row.label}</td>
										<td className="py-4 px-4 text-center text-white/50">{row.starter}</td>
										<td className="py-4 px-4 text-center text-status-blue font-medium">{row.teams}</td>
										<td className="py-4 px-4 text-center text-white/70">{row.enterprise}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>

				{/* ── FAQ ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="text-center mb-12 flex flex-col items-center">
						<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
							PRICING FAQ
						</span>
						<h2 className="font-headline-md text-headline-md text-primary font-bold tracking-tight">Common buying questions.</h2>
					</div>
					<div className="max-w-2xl mx-auto">
						{pricingFaqs.map((item) => (
							<FAQItem key={item.q} q={item.q} a={item.a} />
						))}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

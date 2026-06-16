import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const featureRows = [
	{ label: "Knowledge clusters", starter: "3", teams: "Unlimited", enterprise: "Unlimited" },
	{ label: "Automations", starter: "5", teams: "Unlimited", enterprise: "Unlimited + custom" },
	{ label: "Skill registry", starter: "Personal only", teams: "Team publishing", enterprise: "Org governance" },
	{ label: "Bring your own LLM keys (BYOK)", starter: "1 provider", teams: "OpenAI, Anthropic, Gemini", enterprise: "All providers incl. Azure & Bedrock" },
	{ label: "Role-based access", starter: "Basic", teams: "3 predefined roles", enterprise: "Custom roles" },
	{ label: "Audit logs", starter: "—", teams: "30 days", enterprise: "90 days + export" },
	{ label: "Integrations", starter: "2 OAuth sources", teams: "All 8 integrations", enterprise: "All + custom REST" },
	{ label: "Support", starter: "Community", teams: "Email & Onboarding", enterprise: "Dedicated CSM" },
];

const pricingFaqs = [
	{ q: "Do agents use my data to train base models?", a: "No. Customer data is used strictly to provide your product experience. We explicitly opt out of data sharing with LLM providers." },
	{ q: "What happens to my data if I cancel?", a: "We provide one-click export and automatic deletion workflows during offboarding. Your data remains yours." },
	{ q: "How long does setup take?", a: "Most teams connect their sources and have their first functional knowledge cluster live within three days." },
	{ q: "Is Nuerova SOC 2 certified?", a: "Not yet, but our architecture is ISO-aligned. The security page documents our current controls and roadmap." },
	{ q: "Can I self-host Nuerova?", a: "Enterprise deployments can include hybrid architecture discussions for stricter data residency requirements." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
	const [open, setOpen] = useState(false);
	return (
		<div className="border border-white/5 bg-[#0a0a0a] rounded-xl mb-4 overflow-hidden transition-colors hover:border-white/10">
			<button
				type="button"
				className="w-full flex justify-between items-center p-6 text-left gap-4"
				onClick={() => setOpen(!open)}
				aria-expanded={open}
			>
				<span className="text-base text-white/90 font-medium">{q}</span>
				<div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45 bg-white/10" : "bg-[#111]"}`}>
					<svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
				</div>
			</button>
			<div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
				<p className="px-6 pb-6 text-sm text-white/50 leading-relaxed">{a}</p>
			</div>
		</div>
	);
}

export function PricingPage() {
	useSEO({
		title: "Pricing — Scoped Knowledge Clusters & Team Intelligence | Nuerova",
		description: "Nuerova pricing for team intelligence and contextual agents. 7-day trial of Teams plan. Starter: up to 3 seats. Teams: up to 25 seats. Enterprise: unlimited.",
		schemaOrg: {
			"@type": "WebPage",
			"name": "Pricing — Scoped Knowledge Clusters & Team Intelligence | Nuerova",
			"description": "Nuerova pricing for team intelligence and contextual agents. 7-day trial of Teams plan. Starter: up to 3 seats. Teams: up to 25 seats. Enterprise: unlimited.",
			"mainEntity": {
				"@type": "ItemList",
				"itemListElement": [
					{
						"@type": "Offer",
						"name": "Starter",
						"price": "49",
						"priceCurrency": "USD"
					},
					{
						"@type": "Offer",
						"name": "Teams",
						"price": "149",
						"priceCurrency": "USD"
					},
					{
						"@type": "Offer",
						"name": "Enterprise",
						"price": "Custom",
						"priceCurrency": "USD"
					}
				]
			}
		}
	});

	useScrollReveal();

	const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
	const annual = billingPeriod === "annual";

	return (
		<div className="bg-[#050505] text-white min-h-screen flex flex-col selection:bg-status-blue/30 selection:text-white font-sans">
			<Navigation />

			<main id="main" className="flex-grow pb-24 pt-32">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg mb-16 text-center flex flex-col items-center reveal">
					<span className="font-label-caps text-xs text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-6">
						SIMPLE PRICING
					</span>
					<h1 className="font-headline-lg text-5xl md:text-6xl text-white mb-6 font-bold tracking-tight leading-tight max-w-4xl">
						Pricing that scales with your intelligence.
					</h1>
					<p className="font-body-md text-xl text-white/50 max-w-2xl leading-relaxed">
						Start with one workspace. Expand into clusters, automations, skill publishing, and governance as your team grows.
					</p>
				</section>

				{/* ── BILLING TOGGLE ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg reveal mb-16">
					<div className="flex justify-center">
						<div className="relative p-1.5 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center shadow-inner">
							<div 
								className={`absolute top-1.5 bottom-1.5 w-1/2 bg-white/10 border border-white/20 rounded-full transition-transform duration-300 ${annual ? "translate-x-full" : "translate-x-0"}`}
							></div>
							<button
								type="button"
								onClick={() => setBillingPeriod("monthly")}
								className={`relative z-10 w-32 py-2.5 text-sm font-medium transition-colors ${!annual ? "text-white" : "text-white/50 hover:text-white/80"}`}
							>
								Monthly
							</button>
							<button
								type="button"
								onClick={() => setBillingPeriod("annual")}
								className={`relative z-10 w-32 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${annual ? "text-white" : "text-white/50 hover:text-white/80"}`}
							>
								Annual
								<span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
									-20%
								</span>
							</button>
						</div>
					</div>
				</section>

				{/* ── PRICING CARDS ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg mb-24 reveal">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						
						{/* Starter */}
						<div className="border border-white/10 rounded-3xl p-8 bg-[#0a0a0a] flex flex-col hover:border-white/20 transition-colors">
							<span className="font-label-caps text-[10px] text-white/50 tracking-widest block mb-6 font-bold">STARTER</span>
							<div className="mb-2 flex items-end gap-1">
								<span className="text-5xl font-bold text-white tracking-tight">{annual ? "$39" : "$49"}</span>
								<span className="text-white/40 text-sm mb-1">/ user / mo</span>
							</div>
							<div className="h-5 mb-4">
								{annual && <p className="text-xs text-emerald-500 font-medium">Billed annually — save $120/yr</p>}
							</div>
							<p className="text-sm text-white/50 mb-8 pb-8 border-b border-white/10">Solo operators and micro-teams building a personal intelligence layer.</p>
							
							<ul className="space-y-4 mb-10 flex-1">
								{["1 workspace", "Up to 3 users", "3 knowledge clusters", "10 agent sessions/day", "5 automations", "Community support"].map((feat) => (
									<li key={feat} className="flex items-start gap-3 text-sm text-white/70">
										<svg className="w-5 h-5 text-status-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
										{feat}
									</li>
								))}
							</ul>
							<Link
								to="/contact"
								className="w-full text-center border border-white/20 bg-white/5 text-white px-6 py-4 rounded-xl hover:bg-white/10 transition-colors font-bold text-sm"
							>
								Start a pilot
							</Link>
						</div>

						{/* Teams (featured) */}
						<div className="border border-status-blue/30 rounded-3xl p-8 bg-[#0f1219] flex flex-col relative shadow-[0_0_40px_rgba(59,130,246,0.1)] transform md:-translate-y-4">
							<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
								<span className="text-[10px] font-bold tracking-wider text-white bg-status-blue border border-status-blue/50 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]">MOST POPULAR</span>
							</div>
							
							{/* Background glow */}
							<div className="absolute top-0 right-0 w-64 h-64 bg-status-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

							<span className="relative z-10 font-label-caps text-[10px] text-status-blue tracking-widest block mb-6 font-bold">TEAMS</span>
							<div className="relative z-10 mb-2 flex items-end gap-1">
								<span className="text-5xl font-bold text-white tracking-tight">{annual ? "$159" : "$199"}</span>
								<span className="text-white/40 text-sm mb-1">/ user / mo</span>
							</div>
							<div className="relative z-10 h-5 mb-4">
								{annual && <p className="text-xs text-emerald-500 font-medium">Billed annually — save $480/yr</p>}
							</div>
							<p className="relative z-10 text-sm text-white/50 mb-8 pb-8 border-b border-white/10">Teams of 5 to 50 who need shared context, workflows, and permissions.</p>
							
							<ul className="relative z-10 space-y-4 mb-10 flex-1">
								{[
									"Up to 25 users",
									"Unlimited knowledge clusters",
									"Unlimited agent sessions",
									"Unlimited automations",
									"Skill registry & publishing",
									"RBAC and 30-day audit logs",
									"Email support & onboarding call",
								].map((feat) => (
									<li key={feat} className="flex items-start gap-3 text-sm text-white/90">
										<svg className="w-5 h-5 text-status-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
										{feat}
									</li>
								))}
							</ul>
							<Link
								to="/contact"
								className="relative z-10 w-full text-center bg-gradient-to-r from-status-blue to-blue-600 text-white px-6 py-4 rounded-xl hover:shadow-[0_8px_24px_rgba(59,130,246,0.2)] hover:-translate-y-0.5 transition-all font-bold text-sm"
							>
								Request a demo
							</Link>
						</div>

						{/* Enterprise */}
						<div className="border border-white/10 rounded-3xl p-8 bg-[#0a0a0a] flex flex-col hover:border-white/20 transition-colors">
							<span className="font-label-caps text-[10px] text-white/50 tracking-widest block mb-6 font-bold">ENTERPRISE</span>
							<div className="mb-2 flex items-end gap-1">
								<span className="text-4xl font-bold text-white tracking-tight leading-[48px]">Custom</span>
							</div>
							<div className="h-5 mb-4"></div>
							<p className="text-sm text-white/50 mb-8 pb-8 border-b border-white/10">Organizations that need custom integrations, strict governance, and SLAs.</p>
							
							<ul className="space-y-4 mb-10 flex-1">
								{[
									"Unlimited workspaces and users",
									"Custom data retention policies",
									"SSO and MFA roadmap access",
									"90-day comprehensive audit logs",
									"Dedicated Customer Success Manager",
									"SLA and custom CRM integrations",
								].map((feat) => (
									<li key={feat} className="flex items-start gap-3 text-sm text-white/70">
										<svg className="w-5 h-5 text-white/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
										{feat}
									</li>
								))}
							</ul>
							<Link
								to="/contact"
								className="w-full text-center border border-white/20 bg-white/5 text-white px-6 py-4 rounded-xl hover:bg-white/10 transition-colors font-bold text-sm"
							>
								Talk to sales
							</Link>
						</div>

					</div>
				</section>

				{/* ── FEATURE COMPARISON ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-16 reveal">
					<div className="text-center mb-12 flex flex-col items-center">
						<h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Compare all features</h2>
						<p className="text-white/50 max-w-2xl text-lg">A detailed breakdown of what is included in each plan.</p>
					</div>
					
					<div className="border border-white/10 rounded-2xl bg-[#0a0a0a] overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse min-w-[700px]">
								<thead>
									<tr className="bg-black/40 border-b border-white/10">
										<th className="p-6 text-sm font-bold text-white/80 tracking-wider w-1/3">Feature</th>
										<th className="p-6 text-sm font-bold text-white/80 text-center border-l border-white/5 w-1/5">Starter</th>
										<th className="p-6 text-sm font-bold text-status-blue text-center border-l border-white/5 w-1/5 bg-status-blue/[0.03]">Teams</th>
										<th className="p-6 text-sm font-bold text-white/80 text-center border-l border-white/5 w-1/5">Enterprise</th>
									</tr>
								</thead>
								<tbody>
									{featureRows.map((row, i) => (
										<tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 text-sm text-white/80 font-medium">{row.label}</td>
											<td className="p-6 text-center text-sm text-white/50 border-l border-white/5">{row.starter}</td>
											<td className="p-6 text-center text-sm font-medium text-status-blue border-l border-white/5 bg-status-blue/[0.02]">{row.teams}</td>
											<td className="p-6 text-center text-sm text-white/50 border-l border-white/5">{row.enterprise}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* ── FAQ ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-16 reveal">
					<div className="text-center mb-12 flex flex-col items-center">
						<span className="font-label-caps text-xs text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-4">
							FAQ
						</span>
						<h2 className="text-3xl font-bold text-white tracking-tight">Common buying questions</h2>
					</div>
					<div className="max-w-3xl mx-auto">
						{pricingFaqs.map((item) => (
							<FAQItem key={item.q} q={item.q} a={item.a} />
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

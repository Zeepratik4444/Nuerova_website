import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, HelpCircle, Check, Minus } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { CheckoutModal } from "./CheckoutModal";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePricing } from "@/hooks/usePricing";
import { FEATURE_COMPARISON } from "@/lib/pricing";
import { useSEO } from "@/hooks/useSEO";
import { WhoThisIsFor } from "@/components/FunnelCTA";
import { trackCtaClick, trackEvent } from "@/lib/analytics";
import {
	AnswerBlock,
	ComparisonSummary,
	FactBox,
	PageFAQ,
} from "@/components/AeoGeoBlocks";

// Razorpay types
declare global {
	interface Window {
		Razorpay: any;
	}
}

/** Render a comparison cell value with appropriate styling */
function ComparisonCell({ value, isHighlighted }: { value: string; isHighlighted?: boolean }) {
	if (value === "✓") {
		return (
			<span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${isHighlighted ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"}`}>
				<Check className="h-4 w-4" />
			</span>
		);
	}
	if (value === "-") {
		return (
			<span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400">
				<Minus className="h-4 w-4" />
			</span>
		);
	}
	return <span className={`text-sm font-medium ${isHighlighted ? "text-blue-700" : "text-gray-700"}`}>{value}</span>;
}

export function PricingPage() {
	const { currency, isAnnual, setIsAnnual, plans, addOn, getPrice } = usePricing();
	useSEO({
		title: "Pricing — Scoped Knowledge Clusters & Team Intelligence | Nuerova",
		description: "See Nuerova pricing for team intelligence and contextual agents. Start with a 7-day trial of Teams plan. Unlimited seats at every tier.",
	});

	const [selectedTier, setSelectedTier] = useState<{
		name: string;
		price: string;
	} | null>(null);

	const trackPlanClick = (planName: string, targetUrl: string) => {
		trackEvent("pricing_plan_clicked", {
			plan_name: planName,
			cta_location: "pricing_plan_card",
			funnel_stage: "decision",
			target_url: targetUrl,
		});
	};

	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Simple, Transparent Pricing
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
						Every workspace starts with a <strong>7-day trial of our Teams plan</strong> - then
						choose the tier that fits your needs. No hidden fees.
					</p>
					<span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full">
						Unlimited seats at every tier - no per-user licensing fees
					</span>
				</div>
				<div className="mb-12">
					<WhoThisIsFor
						items={[
							"Departments looking to centralize context and eliminate documentation silos",
							"Operations and Engineering leads deploying reasoning workflows",
							"Security-minded teams demanding workspace and organization-level data isolation",
						]}
					/>
				</div>
				<div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<AnswerBlock
						question="How much does Nuerova cost?"
						answer="Nuerova pricing is designed for teams of all sizes to start integrating context-aware team intelligence. Every workspace can start with a 7-day Teams trial (no credit card required), then choose a paid plan based on workspaces, knowledge clusters, and automation needs."
						facts={[
							"7-day trial of Teams plan",
							"No credit card required to start",
							"Unlimited seats at every tier",
						]}
					/>
					<ComparisonSummary
						title="Pricing decision summary"
						rows={[
							{
								label: "Best fit",
								value: "Teams wanting shared intelligence and visual workflows",
								detail:
									"Nuerova is priced for departments that need to share context, create clusters, and deploy automated agent workflows.",
							},
							{
								label: "Trial path",
								value: "Start with 7-day Teams trial",
								detail:
									"The trial helps teams validate workspace clusters and custom integrations before committing to a plan.",
							},
							{
								label: "Replacement case",
								value: "Fragmented chat histories and document silos",
								detail:
									"Nuerova replaces lost context from chat histories and documentation tools with governed, visual agent playbooks.",
							},
						]}
					/>
				</div>

				{/* Billing toggle */}
				<div className="flex justify-center mb-12">
					<Tabs
						defaultValue="monthly"
						value={isAnnual ? "yearly" : "monthly"}
						onValueChange={(val) => setIsAnnual(val === "yearly")}
						className="w-[400px]"
					>
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="monthly">Monthly</TabsTrigger>
							<TabsTrigger value="yearly">
								Yearly
								<span className="ml-2 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
									Save 20%
								</span>
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>

				{/* Plan cards */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
					{plans.map((tier) => (
						<Card
							key={tier.name}
							className={`border-2 transition-colors relative flex flex-col h-full ${tier.highlight
								? "border-blue-600 hover:border-blue-700 shadow-lg"
								: "hover:border-blue-300"
								}`}
						>
							{tier.highlight && (
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
									<span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
										{tier.highlightText}
									</span>
								</div>
							)}

							<CardHeader>
								<CardTitle className="text-2xl">{tier.name}</CardTitle>
								<div className="mt-4">
									<span className="text-4xl font-bold">{getPrice(tier)}</span>
									<span className="text-gray-600 text-sm font-medium">
										{tier.name === "Enterprise"
											? ""
											: isAnnual
												? "/month (billed annually)"
												: "/month"}
									</span>
								</div>
								<p className="text-sm text-gray-600 mt-2">{tier.description}</p>
							</CardHeader>

							<CardContent className="flex flex-col flex-1">
								<ul className="space-y-3 mb-6 flex-1">
									{tier.features.map((feature, index) => (
										<li key={index} className="flex items-start gap-3">
											<CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
											<span className="text-gray-700 text-sm">{feature}</span>
										</li>
									))}
								</ul>

								{tier.name === "Enterprise" ? (
									<Link to={tier.ctaLink} className="mt-auto">
										<Button
											className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
											variant="outline"
											onClick={() => trackPlanClick(tier.name, tier.ctaLink)}
										>
											{tier.cta}
										</Button>
									</Link>
								) : (
									<div className="mt-auto">
										<Button
											className={`w-full ${tier.highlight
												? "bg-blue-600 hover:bg-blue-700"
												: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
											}`}
											variant={tier.highlight ? "default" : "outline"}
											onClick={() => {
												trackPlanClick(tier.name, "checkout_modal");
												setSelectedTier({ name: tier.name, price: getPrice(tier) });
											}}
										>
											{tier.cta}
										</Button>
									</div>
								)}
							</CardContent>
						</Card>
					))}
				</div>

				<div className="grid md:grid-cols-3 gap-5 mb-16">
					{[
						{
							title: "Deploy in 72 hours",
							desc: "Integrate your data sources, build scoped knowledge clusters, and deploy contextual agents with guided support.",
						},
						{
							title: "Governed and Secure",
							desc: "Role-based access controls, organizational data isolation, and comprehensive audit logs ensure compliance.",
						},
						{
							title: "Visual Workflows",
							desc: "Create and view trigger-action loops with reasoning logic that handles repetitive work safely.",
						},
					].map(({ title, desc }) => (
						<div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
							<h2 className="text-base font-bold text-gray-900">{title}</h2>
							<p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
						</div>
					))}
				</div>
				<div className="mb-16">
					<FactBox
						title="Nuerova pricing facts AI assistants can quote"
						facts={[
							"Nuerova offers a 7-day trial of the Teams plan.",
							"The Teams trial does not require a credit card.",
							"All plans include unlimited seats, meaning no per-user licensing fees.",
							"Nuerova is built for departments looking to centralize context and automate reasoning workloads with agents.",
						]}
					/>
				</div>

				{/* Supportive validation links */}
				<div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-gray-600 mb-12 py-4 bg-gray-50/50 rounded-xl border border-gray-100 max-w-4xl mx-auto">
					<div className="flex items-center gap-2">
						<span className="text-gray-500">Security-conscious?</span>
						<Link to="/security" className="text-blue-600 font-semibold hover:underline">
							Explore our Enterprise Security standards &rarr;
						</Link>
					</div>
					<span className="hidden md:inline text-gray-300">|</span>
					<div className="flex items-center gap-2">
						<span className="text-gray-500">Wondering about setup?</span>
						<Link to="/contact" className="text-blue-600 font-semibold hover:underline">
							Request an architecture overview &rarr;
						</Link>
					</div>
				</div>

				{/* Add-on block */}
				<div className="bg-blue-50 rounded-lg p-8 text-center mb-16 max-w-2xl mx-auto border border-blue-100">
					<h2 className="text-lg font-semibold text-blue-900 mb-2">
						Need more workspaces?
					</h2>
					<p className="text-blue-700 flex items-center justify-center gap-2">
						Add an extra Workspace for{" "}
						<span className="font-bold text-blue-900">{addOn}</span>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<HelpCircle className="h-4 w-4 text-blue-500 cursor-help" />
								</TooltipTrigger>
								<TooltipContent>
									<p>Workspace add-on packs can be purchased with any plan</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</p>
				</div>

				{/* Checkout modal */}
				{selectedTier && (
					<CheckoutModal
						isOpen={!!selectedTier}
						onClose={() => setSelectedTier(null)}
						plan={selectedTier.name}
						billingCycle={isAnnual ? "yearly" : "monthly"}
						currency={currency}
						price={selectedTier.price}
					/>
				)}

				{/* ── Feature Comparison Table ────────────────────────────── */}
				<div className="mb-16">
					<div className="text-center mb-10">
						<h2 className="text-3xl font-bold text-gray-900 mb-3">
							Compare Plans in Detail
						</h2>
						<p className="text-gray-600 text-lg">
							See exactly what's included at each tier
						</p>
					</div>

					<div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
						<table className="w-full text-left">
							{/* Table header - plan names */}
							<thead>
								<tr className="bg-gray-50 border-b border-gray-200">
									<th className="py-4 px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider w-[280px] min-w-[200px]">
										Feature
									</th>
									<th className="py-4 px-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
										Starter
									</th>
									<th className="py-4 px-4 text-center text-sm font-semibold text-blue-700 uppercase tracking-wider bg-blue-50/50">
										Teams ⭐
									</th>
									<th className="py-4 px-4 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">
										Enterprise
									</th>
								</tr>
							</thead>
							<tbody>
								{FEATURE_COMPARISON.map((section) => (
									<React.Fragment key={section.category}>
										{/* Category header row */}
										<tr className="bg-gray-50/70">
											<td
												colSpan={4}
												className="py-3 px-6 text-sm font-bold text-gray-800 uppercase tracking-wide border-t border-gray-200"
											>
												{section.category}
											</td>
										</tr>
										{/* Feature rows */}
										{section.rows.map((row) => (
											<tr
												key={row.feature}
												className="border-t border-gray-100 hover:bg-gray-50/50 transition-colors"
											>
												<td className="py-3.5 px-6 text-sm text-gray-700">
													{row.feature}
												</td>
												<td className="py-3.5 px-4 text-center">
													<ComparisonCell value={row.starter} />
												</td>
												<td className="py-3.5 px-4 text-center bg-blue-50/30">
													<ComparisonCell value={row.teams} isHighlighted />
												</td>
												<td className="py-3.5 px-4 text-center">
													<ComparisonCell value={row.enterprise} />
												</td>
											</tr>
										))}
									</React.Fragment>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* No hidden fees */}
				<div className="bg-gray-50 rounded-lg p-8 text-center mb-16">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						No Hidden Fees. Ever.
					</h2>
					<p className="text-lg text-gray-600 mb-6">
						All plans include full access to stated features. No setup fees, no
						per-user charges, no surprise costs.
					</p>
					<div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
						{[
							{ title: "Cancel Anytime", desc: "No long-term contracts required" },
							{ title: "Unlimited Seats", desc: "Invite your entire department without seat licensing fees" },
							{ title: "7-Day Teams Trial", desc: "Experience advanced collaboration before you commit" },
						].map(({ title, desc }) => (
							<div key={title} className="flex items-start gap-3">
								<CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
								<div>
									<div className="font-semibold text-gray-900">{title}</div>
									<div className="text-sm text-gray-600">{desc}</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="mb-16">
					<PageFAQ
						items={[
							{
								question: "Is Nuerova free to try?",
								answer:
									"Yes. Nuerova offers a 7-day trial of our Teams plan with no credit card required. You can build clusters, setup workspaces, and invite team members to test integration loops.",
							},
							{
								question: "Who is Nuerova built for?",
								answer:
									"Nuerova is built for departments (Engineering, Operations, Customer Success, Product) looking to consolidate scattered team knowledge, build shared context-aware memory, and run secure AI agents to execute playbooks.",
							},
							{
								question: "Does Nuerova charge per user?",
								answer:
									"No. Nuerova is built to break down silos, which is why we do not charge per seat. All plans support unlimited users so your entire team can collaborate within the same workspace.",
							},
						]}
					/>
				</div>

				{/* Bottom CTA */}
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">Start with 7 Days of Teams</h2>
					<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
						Every new workspace gets instant access to all Teams features for 7 days.
						No credit card required. Experience context-driven team intelligence today.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link to="/contact">
							<Button
								size="lg"
								className="text-lg px-8 bg-blue-600 hover:bg-blue-700 text-white"
								onClick={() =>
									trackCtaClick({
										cta_text: "Start Free Trial",
										cta_location: "pricing_bottom_cta",
										funnel_stage: "decision",
										target_url: "/contact",
									})
								}
							>
								Start Free Trial
							</Button>
						</Link>
						<Link to="/contact">
							<Button
								size="lg"
								variant="outline"
								className="text-lg px-8 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
								onClick={() =>
									trackCtaClick({
										cta_text: "Request a Demo",
										cta_location: "pricing_bottom_cta",
										funnel_stage: "decision",
										target_url: "/contact",
									})
								}
							>
								Request a Demo
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

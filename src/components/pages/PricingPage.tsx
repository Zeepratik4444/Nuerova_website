import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function PricingPage() {
	useSEO({
		title: "Pricing | Nuerova",
		description: "Start narrow and scale. Scoped memory, reusable skills, and agent-native automation plans for growing teams.",
	});

	useScrollReveal();

	const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

	return (
		<div className="js-enabled">
			<Navigation />

			<main id="main">
				{/* ── HERO ── */}
				<section className="page-hero">
					<div className="container">
						<div className="reveal">
							<span className="kicker">Pricing</span>
							<h1>Transparent pricing for teams that need AI to work at the enterprise level.</h1>
							<p>Start with one workspace. Expand into clusters, automations, skill publishing, and governance as your team grows.</p>
						</div>
						<div className="page-visual reveal">
							<div className="mini-metric-grid">
								<span>Starter: $49</span>
								<span>Teams: $199</span>
								<span>Enterprise: Custom</span>
								<span>Annual saves 20%</span>
							</div>
						</div>
					</div>
				</section>

				{/* ── PRICING MATRIX ── */}
				<section className="section">
					<div className="container">
						<div className="billing-toggle reveal" role="group" aria-label="Billing period">
							<button 
								className={billingPeriod === "monthly" ? "active" : ""} 
								type="button" 
								onClick={() => setBillingPeriod("monthly")}
							>
								Monthly
							</button>
							<button 
								className={billingPeriod === "annual" ? "active" : ""} 
								type="button" 
								onClick={() => setBillingPeriod("annual")}
							>
								Annual, save 20%
							</button>
						</div>

						<div className="pricing-grid reveal">
							<article className="price-card">
								<span className="plan-name">Starter</span>
								<strong>
									<span>{billingPeriod === "annual" ? "$39" : "$49"}</span>
									<small>/mo</small>
								</strong>
								<p>Solo operators and micro-teams.</p>
								<ul>
									<li>1 workspace</li>
									<li>Up to 3 users</li>
									<li>3 knowledge clusters</li>
									<li>10 agent sessions/day</li>
									<li>5 automations</li>
									<li>Community support</li>
								</ul>
								<Link className="button secondary full" to="/contact">Start a pilot</Link>
							</article>

							<article className="price-card featured">
								<span className="popular-badge">Most popular</span>
								<span className="plan-name">Teams</span>
								<strong>
									<span>{billingPeriod === "annual" ? "$159" : "$199"}</span>
									<small>/mo</small>
								</strong>
								<p>Teams of 5 to 50 building shared intelligence.</p>
								<ul>
									<li>Up to 25 users</li>
									<li>Unlimited clusters</li>
									<li>Unlimited agent sessions</li>
									<li>Unlimited automations</li>
									<li>Skill registry</li>
									<li>RBAC and 30-day audit logs</li>
									<li>Email support and onboarding call</li>
								</ul>
								<Link className="button primary full" to="/contact">Request demo</Link>
							</article>

							<article className="price-card">
								<span className="plan-name">Enterprise</span>
								<strong>Custom</strong>
								<p>Organizations that need governance, scale, and SLAs.</p>
								<ul>
									<li>Unlimited workspaces and users</li>
									<li>Custom retention</li>
									<li>SSO and MFA roadmap</li>
									<li>90-day audit logs</li>
									<li>Dedicated CSM</li>
									<li>SLA and custom integrations</li>
								</ul>
								<Link className="button secondary full" to="/contact">Talk to sales</Link>
							</article>
						</div>
					</div>
				</section>

				{/* ── FEATURE COMPARISON ── */}
				<section className="section product-section">
					<div className="container">
						<div className="section-heading reveal">
							<span className="kicker">Feature comparison</span>
							<h2>What each plan unlocks.</h2>
						</div>
						<div className="table-wrap reveal">
							<table>
								<thead>
									<tr>
										<th>Feature</th>
										<th>Starter</th>
										<th>Teams</th>
										<th>Enterprise</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Knowledge clusters</td>
										<td>3</td>
										<td className="winner">Unlimited</td>
										<td className="winner">Unlimited</td>
									</tr>
									<tr>
										<td>Automations</td>
										<td>5</td>
										<td className="winner">Unlimited</td>
										<td className="winner">Unlimited plus custom</td>
									</tr>
									<tr>
										<td>Skill registry</td>
										<td>Personal</td>
										<td className="winner">Team publishing</td>
										<td className="winner">Org governance</td>
									</tr>
									<tr>
										<td>RBAC</td>
										<td>Basic</td>
										<td className="winner">3 roles</td>
										<td className="winner">Custom roles</td>
									</tr>
									<tr>
										<td>Audit logs</td>
										<td>No</td>
										<td>30 days</td>
										<td className="winner">90 days plus export</td>
									</tr>
									<tr>
										<td>Support</td>
										<td>Community</td>
										<td>Email</td>
										<td className="winner">Dedicated CSM</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* ── FAQ INLINE SECTION ── */}
				<section className="section">
					<div className="container">
						<div className="section-heading reveal">
							<span className="kicker">Pricing FAQ</span>
							<h2>Common buying questions.</h2>
						</div>
						<div className="faq-list reveal">
							<details open>
								<summary>Do agents use my data to train base models?</summary>
								<p>No. Customer data is used to provide the product experience, not to train external base models.</p>
							</details>
							<details>
								<summary>What happens to my data if I cancel?</summary>
								<p>We support export and deletion workflows during offboarding.</p>
							</details>
							<details>
								<summary>How long does setup take?</summary>
								<p>Most teams can be live with an initial workspace and cluster within three days.</p>
							</details>
							<details>
								<summary>Is Nuerova SOC 2 certified?</summary>
								<p>Not yet. The security page documents the controls and roadmap.</p>
							</details>
							<details>
								<summary>Can I self-host?</summary>
								<p>Enterprise deployments can include architecture discussions for stricter data requirements.</p>
							</details>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

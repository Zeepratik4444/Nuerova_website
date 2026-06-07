import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FAQPage() {
	useSEO({
		title: "FAQ | Nuerova",
		description: "Setup, product, security, data, and pricing questions for teams evaluating shared AI memory.",
	});

	useScrollReveal();

	return (
		<div className="js-enabled">
			<Navigation />

			<main id="main">
				{/* ── HERO ── */}
				<section className="page-hero">
					<div className="container">
						<div className="reveal">
							<span className="kicker">FAQ</span>
							<h1>Clear answers for teams evaluating shared AI memory.</h1>
							<p>Setup, product, security, data, pricing, and rollout questions in one place.</p>
						</div>
						<div className="page-visual reveal">
							<div className="mini-metric-grid">
								<span>Setup</span>
								<span>Product</span>
								<span>Security</span>
								<span>Pricing</span>
							</div>
						</div>
					</div>
				</section>

				{/* ── FAQ LIST ── */}
				<section className="section">
					<div className="container">
						{/* Group 1: Setup and Onboarding */}
						<div className="faq-group reveal">
							<h2>Setup and onboarding</h2>
							<div className="faq-list">
								<details open>
									<summary>How long does setup take?</summary>
									<p>Most teams can connect initial sources and launch a first cluster within three days.</p>
								</details>
								<details>
									<summary>Do I need an IT team to get started?</summary>
									<p>No for a pilot. IT usually joins when security review, SSO, or deeper integrations are required.</p>
								</details>
							</div>
						</div>

						{/* Group 2: Product */}
						<div className="faq-group reveal">
							<h2>Product</h2>
							<div className="faq-list">
								<details>
									<summary>What is the difference between a cluster and a workspace?</summary>
									<p>A workspace is the broad environment. A cluster is a scoped memory pool inside it, usually tied to a team, account, project, or department.</p>
								</details>
								<details>
									<summary>Can agents use data from multiple clusters at once?</summary>
									<p>Only when permissions allow it. Cross-cluster reasoning should be explicit and auditable.</p>
								</details>
								<details>
									<summary>What happens when an automation fails?</summary>
									<p>Runs are logged, failures can alert owners, and approval gates can stop risky actions from running silently.</p>
								</details>
							</div>
						</div>

						{/* Group 3: Security and Data */}
						<div className="faq-group reveal">
							<h2>Security and data</h2>
							<div className="faq-list">
								<details>
									<summary>Does Nuerova train on my data?</summary>
									<p>No. Customer data is not used to train external base models.</p>
								</details>
								<details>
									<summary>Where is my data stored?</summary>
									<p>Storage depends on deployment and customer requirements. The security page documents the architecture direction and controls.</p>
								</details>
								<details>
									<summary>How do I export everything if I leave?</summary>
									<p>Export and deletion workflows are part of responsible offboarding for paid teams.</p>
								</details>
							</div>
						</div>

						{/* Group 4: Pricing and Plans */}
						<div className="faq-group reveal">
							<h2>Pricing and plans</h2>
							<div className="faq-list">
								<details>
									<summary>Can I upgrade mid-cycle?</summary>
									<p>Yes. Teams can move from Starter to Teams or Enterprise as usage and governance needs grow.</p>
								</details>
								<details>
									<summary>Is there a free trial?</summary>
									<p>The preferred path is a focused pilot with a real workflow, because shared memory value is easiest to judge with real context.</p>
								</details>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

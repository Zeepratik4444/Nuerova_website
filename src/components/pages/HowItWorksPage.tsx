import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HowItWorksPage() {
	useSEO({
		title: "How It Works | Nuerova",
		description: "Learn how Nuerova connects your knowledge sources, builds scoped clusters, deploys agents, and automates workflows with enterprise controls.",
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
							<span className="kicker">How it works</span>
							<h1>Here is what happens after you connect your first knowledge source.</h1>
							<p>Nuerova turns your team's scattered context into a governed intelligence layer in five steps.</p>
						</div>
						<div className="page-visual reveal">
							<div className="visual-stack">
								<div className="visual-row">
									<span className="card-icon">01</span>
									<strong>Connect</strong>
									<small>Sources</small>
								</div>
								<div className="visual-row">
									<span className="card-icon">03</span>
									<strong>Deploy</strong>
									<small>Agents</small>
								</div>
								<div className="visual-row">
									<span className="card-icon">05</span>
									<strong>Govern</strong>
									<small>Scale</small>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ── TIMELINE ── */}
				<section className="section">
					<div className="container timeline">
						<article className="timeline-item reveal">
							<span className="timeline-number">01</span>
							<div className="timeline-detail">
								<h2>Connect your knowledge sources</h2>
								<p>Link Notion, Confluence, Google Drive, Slack, CRM records, GitHub, or any REST source. Nuerova ingests, chunks, and indexes content without manual tagging.</p>
								<span className="detail-note">Setup: 1 to 2 days. Your sources stay authoritative.</span>
							</div>
						</article>

						<article className="timeline-item reveal">
							<span className="timeline-number">02</span>
							<div className="timeline-detail">
								<h2>Create your first cluster</h2>
								<p>A cluster is a scoped knowledge pool: a team, client account, project, or department. Add members, set permissions, and Nuerova routes queries through that context.</p>
								<span className="detail-note">No cluster is visible outside its permission boundary.</span>
							</div>
						</article>

						<article className="timeline-item reveal">
							<span className="timeline-number">03</span>
							<div className="timeline-detail">
								<h2>Deploy agents against your clusters</h2>
								<p>Agents inside a cluster inherit its knowledge automatically. Ask a question and the agent reasons over your team's actual context, not generic training data.</p>
								<span className="detail-note">Agents cite sources. Output is reviewable.</span>
							</div>
						</article>

						<article className="timeline-item reveal">
							<span className="timeline-number">04</span>
							<div className="timeline-detail">
								<h2>Build automations on top of context</h2>
								<p>Create workflows that trigger, reason over cluster knowledge, execute, and optionally wait for approval before taking action.</p>
								<span className="detail-note">Every automation has a run log.</span>
							</div>
						</article>

						<article className="timeline-item reveal">
							<span className="timeline-number">05</span>
							<div className="timeline-detail">
								<h2>Govern, observe, and scale</h2>
								<p>The admin panel shows who used what, what agents did, and which automations ran. RBAC controls enforce boundaries and audit logs capture key actions.</p>
								<span className="detail-note">Leaders get one source of truth.</span>
							</div>
						</article>
					</div>
				</section>

				{/* ── BOTTOM CTA ── */}
				<section className="section contact-section">
					<div className="container contact-grid">
						<div className="contact-copy reveal">
							<span className="kicker">Live walkthrough</span>
							<h2>Map this flow to one team process.</h2>
							<p>A focused demo is the fastest way to see whether Nuerova fits your stack.</p>
						</div>
						<Link className="button primary reveal" to="/contact">Request a demo</Link>
					</div>
				</section>
			</main>
		</div>
	);
}

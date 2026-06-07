import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FeaturesPage() {
	useSEO({
		title: "Features | Nuerova",
		description: "Deep dive into Nuerova's team intelligence capabilities: scoped memory clusters, context-aware agents, visual automations, and skill registry.",
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
							<span className="kicker">Feature deep dive</span>
							<h1>Built for the 20% of capabilities that define 80% of team performance.</h1>
							<p>Every feature below supports the same promise: shared memory, reusable skills, governed action, and team context that compounds.</p>
						</div>
						<div className="page-visual reveal">
							<div className="mini-metric-grid">
								<span>Scoped clusters</span>
								<span>Contextual agents</span>
								<span>Reasoning workflows</span>
								<span>Audit-ready controls</span>
							</div>
						</div>
					</div>
				</section>

				{/* ── FEATURE GRID BANNER ── */}
				<section className="section">
					<div className="container">
						<div className="banner-card reveal">
							<span>Operations teams with repeated coordination overhead</span>
							<span>CS and RevOps teams that need durable account memory</span>
							<span>Engineering leaders who need controls without long rollouts</span>
						</div>

						{/* ── F1: SCOPED MEMORY CLUSTERS ── */}
						<article className="deep-dive reveal">
							<div className="deep-copy">
								<span className="kicker">Knowledge infrastructure</span>
								<h2>Team memory that survives turnover, silos, and one-off chats.</h2>
								<p>Nuerova clusters scope knowledge by team, project, client, or org. Every agent operating inside a cluster inherits its context automatically.</p>
								<ul className="check-list">
									<li>Create clusters by team, department, or client</li>
									<li>Granular read, write, and contribute permissions</li>
									<li>Activity logs showing which knowledge an agent used</li>
									<li>Admin controls over retention and visibility</li>
								</ul>
							</div>
							<div className="deep-visual visual-stack">
								<div className="visual-row">
									<span className="cluster-icon blue"></span>
									<strong>CS Accounts</strong>
									<small>Shared</small>
								</div>
								<div className="visual-row">
									<span className="cluster-icon amber"></span>
									<strong>Ops Playbooks</strong>
									<small>Approved</small>
								</div>
								<div className="visual-row">
									<span className="cluster-icon green"></span>
									<strong>Engineering</strong>
									<small>Private</small>
								</div>
							</div>
						</article>

						{/* ── F2: CONTEXT-AWARE AGENTS ── */}
						<article className="deep-dive reverse reveal">
							<div className="deep-copy">
								<span className="kicker">Intelligent assistance</span>
								<h2>Agents that know your context, not just your question.</h2>
								<p>Every Nuerova agent is spawned with the scoped knowledge of its cluster. No copy-paste. No re-explaining the project every session.</p>
								<ul className="check-list">
									<li>Context-aware responses backed by team memory</li>
									<li>Inline citations from cluster knowledge</li>
									<li>Human escalation when confidence is low</li>
									<li>Session history preserved per agent and cluster</li>
								</ul>
							</div>
							<div className="deep-visual chat-dashboard">
								<div className="chat-row human">What changed since the renewal review?</div>
								<div className="chat-row ai">Usage recovered. Security review remains the only blocker.</div>
								<div className="source-stack">
									<span>QBR notes</span>
									<span>Slack thread</span>
								</div>
							</div>
						</article>

						{/* ── F3: AUTOMATIONS ── */}
						<article className="deep-dive reveal">
							<div className="deep-copy">
								<span className="kicker">Agent-native automation</span>
								<h2>Workflows that reason before they run.</h2>
								<p>Unlike rigid no-code tools, Nuerova automations include an agent reasoning step before execution or escalation.</p>
								<ul className="check-list">
									<li>Schedule, webhook, manual, and event triggers</li>
									<li>Scoped data-source selection</li>
									<li>Conditional paths and approval gates</li>
									<li>Run history, retries, and failure alerts</li>
								</ul>
							</div>
							<div className="deep-visual automation-canvas">
								<div className="canvas-block trigger">Trigger</div>
								<div className="canvas-block reason">Reason</div>
								<div className="canvas-block branch">Branch</div>
								<div className="canvas-block action">Act</div>
							</div>
						</article>

						{/* ── F4: SKILL REGISTRY ── */}
						<article className="deep-dive reverse reveal">
							<div className="deep-copy">
								<span className="kicker">Reusable intelligence</span>
								<h2>Build once. Share across every team that needs it.</h2>
								<p>Skills package prompts, workflows, and tools for publication inside your organization. The library gets stronger as teams contribute.</p>
								<ul className="check-list">
									<li>Create personal or org-level skills</li>
									<li>Publish to team or org libraries</li>
									<li>Version control and change history</li>
									<li>Usage analytics per skill</li>
								</ul>
							</div>
							<div className="deep-visual visual-stack">
								<div className="visual-row">
									<span className="card-icon">V3</span>
									<strong>Renewal Risk Brief</strong>
									<small>Published</small>
								</div>
								<div className="visual-row">
									<span className="card-icon">V1</span>
									<strong>Incident Summary</strong>
									<small>Draft</small>
								</div>
								<div className="visual-row">
									<span className="card-icon">V2</span>
									<strong>Handoff Plan</strong>
									<small>Team</small>
								</div>
							</div>
						</article>

						{/* ── F5: GOVERNANCE & TRUST ── */}
						<article className="deep-dive reveal">
							<div className="deep-copy">
								<span className="kicker">Governance and trust</span>
								<h2>Enterprise controls from day one. Not bolted on later.</h2>
								<p>Nuerova was designed multi-tenant, scoped, and auditable from the first architectural decision.</p>
								<ul className="check-list">
									<li>Role-based access control for owners, admins, members, and viewers</li>
									<li>Org-level audit logs for agent and automation actions</li>
									<li>Data isolation between organizations and clusters</li>
									<li>Roadmap: SSO, MFA, and SOC 2 Type II</li>
								</ul>
							</div>
							<div className="deep-visual audit-dashboard">
								<div className="audit-line">
									<strong>Admin</strong>
									<span>Updated role policy</span>
									<small>2m ago</small>
								</div>
								<div className="audit-line">
									<strong>System</strong>
									<span>Blocked cross-cluster request</span>
									<small>9m ago</small>
								</div>
								<div className="audit-line">
									<strong>Agent</strong>
									<span>Cited approved source</span>
									<small>1h ago</small>
								</div>
							</div>
						</article>
					</div>
				</section>

				{/* ── BOTTOM CTA SECTION ── */}
				<section className="section contact-section">
					<div className="container contact-grid">
						<div className="contact-copy reveal">
							<span className="kicker">Next step</span>
							<h2>See Nuerova with your team's workflow.</h2>
							<p>Bring one real context-heavy process. We will show how clusters, agents, and automations connect.</p>
						</div>
						<Link className="button primary reveal" to="/contact">Request a demo</Link>
					</div>
				</section>
			</main>
		</div>
	);
}

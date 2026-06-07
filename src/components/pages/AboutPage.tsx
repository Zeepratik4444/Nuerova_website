import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function AboutPage() {
	useSEO({
		title: "About | Nuerova",
		description: "Our mission is to make teams smarter than any individual within them by creating a durable, governed shared intelligence layer.",
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
							<span className="kicker">About</span>
							<h1>Make teams smarter than any individual within them.</h1>
							<p>Nuerova started from a simple frustration: the most valuable team knowledge usually lives in the places least prepared to preserve it.</p>
						</div>
						<div className="page-visual reveal">
							<div className="mini-metric-grid">
								<span>Trust first</span>
								<span>Team memory</span>
								<span>Reusable skills</span>
								<span>Governed action</span>
							</div>
						</div>
					</div>
				</section>

				{/* ── MISSION & STORY ── */}
				<section className="section">
					<div className="container">
						<div className="security-grid reveal">
							<article className="story-block">
								<span className="kicker">Founding story</span>
								<h2>Institutional knowledge should not walk out the door.</h2>
								<p>Teams repeat context, reconstruct decisions, and lose operating playbooks whenever work is trapped in individual chats or private workflows. Nuerova exists to make that context durable.</p>
							</article>
							<article className="story-block">
								<span className="kicker">Mission</span>
								<h2>A shared intelligence layer for serious work.</h2>
								<p>The goal is not another personal AI surface. It is a governed system where team memory, reusable skills, agents, and automations compound together.</p>
							</article>
						</div>

						{/* ── VALUES ── */}
						<div className="section-heading reveal" style={{ marginTop: "64px" }}>
							<span className="kicker">Values</span>
							<h2>Built for trust first, performance second.</h2>
						</div>

						<div className="values-grid reveal">
							<article className="story-card">
								<h3>Context should be owned by the team</h3>
								<p>Knowledge is most useful when it survives transitions and remains accessible to the right people.</p>
							</article>
							<article className="story-card">
								<h3>Automation needs judgment</h3>
								<p>Workflows should reason, branch, and escalate instead of blindly chaining actions.</p>
							</article>
							<article className="story-card">
								<h3>Security is product design</h3>
								<p>RBAC, audit logs, and scoped isolation are not late-stage enterprise checkboxes.</p>
							</article>
							<article className="story-card">
								<h3>Reusable intelligence compounds</h3>
								<p>Skills should become governed assets, not scattered prompt snippets.</p>
							</article>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

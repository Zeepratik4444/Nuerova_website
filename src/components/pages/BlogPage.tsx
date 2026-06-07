import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { blogPosts } from "@/lib/blogPosts";

export function BlogPage() {
	useSEO({
		title: "Insights | Nuerova",
		description: "Short, practical essays on shared memory, governed automations, and the operating layer that modern teams need.",
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
							<span className="kicker">Insights</span>
							<h1>Enterprise AI intelligence for teams who need it to work.</h1>
							<p>Short, practical essays on shared memory, governed automations, and the operating layer that modern teams need.</p>
						</div>
						<div className="page-visual reveal">
							<div className="mini-metric-grid">
								<span>Team memory</span>
								<span>Skill registry</span>
								<span>Operations</span>
								<span>Security</span>
							</div>
						</div>
					</div>
				</section>

				{/* ── BLOG INDEX GRID ── */}
				<section className="section">
					<div className="container blog-index-grid reveal">
						{blogPosts.map((post) => (
							<article className="blog-card" key={post.slug}>
								<span>{post.tags[0] || "Insight"}</span>
								<h3>{post.title}</h3>
								<p>{post.summary}</p>
								<Link to="/blog/$slug" params={{ slug: post.slug }}>
									Read article
								</Link>
							</article>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

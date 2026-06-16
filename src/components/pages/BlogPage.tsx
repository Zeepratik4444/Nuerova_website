import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { blogPosts } from "@/lib/blogPosts";
import { EarlyAccessCapture } from "@/components/EarlyAccessCapture";

const FEATURED_SLUG = "setup-guide-72-hours";

export function BlogPage() {
	useSEO({
		title: "Blog — Team Intelligence, Agent Workflows & Enterprise AI | Nuerova",
		description: "Insights on team memory, agent-native workflows, and the reality of enterprise AI for operations and CS teams.",
		schemaOrg: {
			"@type": "Blog",
			"name": "Nuerova Blog",
			"description": "Insights on team memory, agent-native workflows, and the reality of enterprise AI for operations and CS teams.",
			"url": "https://nuerova.xyz/blog",
			"publisher": {
				"@type": "Organization",
				"name": "Nuerova",
				"url": "https://nuerova.xyz",
				"logo": "https://nuerova.xyz/brand-logo.png"
			},
			"blogPost": blogPosts.map(p => ({
				"@type": "BlogPosting",
				"headline": p.title,
				"description": p.summary,
				"url": `https://nuerova.xyz/blog/${p.slug}`,
				"datePublished": p.date ?? "2026-06-07",
				"keywords": p.tags.join(", "),
			}))
		}
	});

	useScrollReveal();

	const featured = blogPosts.find((p) => p.slug === FEATURED_SLUG);
	const rest = blogPosts.filter((p) => p.slug !== FEATURED_SLUG);

	return (
		<div className="bg-[#050505] text-white min-h-screen flex flex-col selection:bg-status-blue/30 selection:text-white font-sans">
			<Navigation />

			<main id="main" className="flex-grow pb-24 pt-32">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg mb-20 reveal">
					<div className="max-w-3xl">
						<span className="font-label-caps text-xs text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-6">INSIGHTS & ESSAYS</span>
						<h1 className="font-headline-lg text-5xl md:text-6xl text-white mb-6 font-bold tracking-tight leading-tight">
							Enterprise AI intelligence for teams who need it to work.
						</h1>
						<p className="font-body-md text-xl text-white/50 max-w-2xl leading-relaxed">
							Short, practical essays on shared memory, governed automations, and the operating layer that modern teams need.
						</p>
					</div>
				</section>

				<div className="max-w-container-max mx-auto px-gutter md:px-stack-lg">
					{/* ── FEATURED POST ── */}
					{featured && (
						<section className="mb-14 reveal">
							<p
								style={{
									fontSize: "11px",
									fontWeight: 800,
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									color: "#60a5fa",
									marginBottom: "14px",
								}}
							>
								Featured
							</p>
							<Link
								to="/blog/$slug"
								params={{ slug: featured.slug }}
								style={{ textDecoration: "none" }}
								className="group"
							>
								<div
									style={{
										display: "grid",
										gridTemplateColumns: "1fr",
										gap: "0",
										borderRadius: "16px",
										border: "1px solid rgba(18,117,226,0.25)",
										background: "linear-gradient(135deg, rgba(18,117,226,0.08) 0%, rgba(255,255,255,0.02) 100%)",
										padding: "36px 40px",
										position: "relative",
										overflow: "hidden",
										transition: "border-color 0.2s, background 0.2s",
									}}
									className="group-hover:border-status-blue/50"
								>
									<div
										style={{
											position: "absolute",
											top: 0,
											right: 0,
											width: "320px",
											height: "320px",
											background: "radial-gradient(circle, rgba(18,117,226,0.12) 0%, transparent 70%)",
											pointerEvents: "none",
										}}
									/>
									<div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
										<span
											style={{
												fontSize: "10px",
												fontWeight: 700,
												textTransform: "uppercase",
												letterSpacing: "0.08em",
												color: "#60a5fa",
												background: "rgba(18,117,226,0.12)",
												padding: "4px 10px",
												borderRadius: "4px",
											}}
										>
											{featured.tags[0]}
										</span>
										<span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
											{featured.publishedAt} · {featured.readTime}
										</span>
									</div>
									<h2
										style={{
											margin: "0 0 14px",
											fontSize: "clamp(22px, 3vw, 32px)",
											fontWeight: 800,
											color: "rgba(255,255,255,0.96)",
											lineHeight: 1.25,
											fontFamily: "'Lora', Georgia, serif",
											maxWidth: "680px",
										}}
										className="group-hover:text-status-blue transition-colors"
									>
										{featured.title}
									</h2>
									<p
										style={{
											margin: "0 0 24px",
											fontSize: "16px",
											color: "rgba(255,255,255,0.52)",
											lineHeight: 1.65,
											maxWidth: "560px",
										}}
									>
										{featured.summary}
									</p>
									<span
										style={{
											display: "inline-flex",
											alignItems: "center",
											gap: "6px",
											fontSize: "14px",
											fontWeight: 700,
											color: "#60a5fa",
										}}
									>
										Read the guide
										<svg style={{ width: "14px", height: "14px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
									</span>
								</div>
							</Link>
						</section>
					)}

					{/* ── BLOG INDEX GRID ── */}
					<section>
						<p
							style={{
								fontSize: "11px",
								fontWeight: 800,
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								color: "rgba(255,255,255,0.35)",
								marginBottom: "20px",
							}}
						>
							All articles
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
							{rest.map((post) => (
								<Link
									to="/blog/$slug"
									params={{ slug: post.slug }}
									key={post.slug}
									className="group flex flex-col border border-white/10 rounded-2xl p-6 bg-[#0a0a0a] hover:bg-white/[0.03] hover:border-status-blue/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
									style={{ textDecoration: "none" }}
								>
									<div className="absolute top-0 right-0 w-32 h-32 bg-status-blue/5 rounded-full blur-3xl group-hover:bg-status-blue/20 transition-all duration-500" />

									<div className="flex items-center gap-3 mb-4">
										<span className="text-[10px] uppercase tracking-wider font-bold text-status-blue bg-status-blue/10 px-2.5 py-1 rounded">
											{post.tags[0] || "Insight"}
										</span>
										<span className="text-xs text-white/40">{post.readTime}</span>
									</div>

									<h3 className="text-xl font-bold text-white mb-3 group-hover:text-status-blue transition-colors leading-snug">
										{post.title}
									</h3>

									<p className="text-sm text-white/50 leading-relaxed mb-4 flex-grow">
										{post.summary}
									</p>

									<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
										<span style={{ fontSize: "12px", color: "rgba(255,255,255,0.30)" }}>
											{post.publishedAt}
										</span>
										<span className="text-sm font-medium text-white/60 group-hover:text-status-blue transition-colors flex items-center gap-1">
											Read
											<svg className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
										</span>
									</div>
								</Link>
							))}
						</div>
					</section>

					{/* ── EMAIL CAPTURE ── */}
					<div className="max-w-2xl reveal">
						<EarlyAccessCapture source="blog_listing_page" />
					</div>
				</div>
			</main>
		</div>
	);
}

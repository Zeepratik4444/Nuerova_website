import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { blogPosts } from "@/lib/blogPosts";

export function BlogPage() {
	useSEO({
		title: "Blog | Nuerova",
		description: "Insights on team memory, agent-native workflows, and the reality of enterprise AI.",
		schemaOrg: {
			"@type": "Blog",
			"name": "Nuerova Blog",
			"description": "Insights on team memory, agent-native workflows, and the reality of enterprise AI.",
			"publisher": {
				"@type": "Organization",
				"name": "Nuerova"
			}
		}
	});

	useScrollReveal();

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

				{/* ── BLOG INDEX GRID ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
						{blogPosts.map((post) => (
							<Link 
								to="/blog/$slug" 
								params={{ slug: post.slug }} 
								key={post.slug}
								className="group flex flex-col border border-white/10 rounded-2xl p-6 bg-[#0a0a0a] hover:bg-white/[0.03] hover:border-status-blue/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
							>
								{/* Accent glow effect */}
								<div className="absolute top-0 right-0 w-32 h-32 bg-status-blue/5 rounded-full blur-3xl group-hover:bg-status-blue/20 transition-all duration-500"></div>
								
								<div className="flex items-center gap-3 mb-4">
									<span className="text-[10px] uppercase tracking-wider font-bold text-status-blue bg-status-blue/10 px-2.5 py-1 rounded">
										{post.tags[0] || "Insight"}
									</span>
									<span className="text-xs text-white/40">{post.readTime}</span>
								</div>
								
								<h3 className="text-xl font-bold text-white mb-3 group-hover:text-status-blue transition-colors leading-snug">
									{post.title}
								</h3>
								
								<p className="text-sm text-white/50 leading-relaxed mb-6 flex-grow">
									{post.summary}
								</p>
								
								<div className="flex items-center text-sm font-medium text-white/70 group-hover:text-status-blue transition-colors mt-auto">
									Read article 
									<svg className="w-4 h-4 ml-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
								</div>
							</Link>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { blogPosts } from "@/lib/blogPosts";
import { trackEvent } from "@/lib/analytics";
import { BLOG_NEXT_STEPS, BLOG_RELATED_POSTS } from "@/lib/funnelNextSteps";
import { BLOG_ANSWER_BLOCKS } from "@/lib/aeoGeoContent";
import { ComparisonSummary } from "@/components/AeoGeoBlocks";
import { RelatedPosts } from "@/components/RelatedPosts";
import { EarlyAccessCapture } from "@/components/EarlyAccessCapture";

type BlogPostPageProps = {
	slug: string;
};

const LIGHT_TEXT_COLORS = [
	'#0f172a', '#1e293b', '#111827', '#1f2937', '#374151',
	'#4b5563', '#475569', '#6b7280', '#334155',
];

const BLUE_TO_READABLE: Record<string, string> = {
	'#1275e2': '#60a5fa',
	'#1d4ed8': '#60a5fa',
	'#1e40af': '#60a5fa',
	'#1e3a8a': '#60a5fa',
};

const LIGHT_BG_TO_DARK: Record<string, string> = {
	'#f0f7ff': 'rgba(18,117,226,0.1)',
	'#f8fafc': 'rgba(255,255,255,0.04)',
	'#eff6ff': 'rgba(18,117,226,0.08)',
	'#e8f0fe': 'rgba(18,117,226,0.1)',
	'#f1f5f9': 'rgba(255,255,255,0.04)',
	'#f9fafb': 'rgba(255,255,255,0.03)',
};

const LIGHT_BORDER_TO_DARK: Record<string, string> = {
	'#e5e7eb': 'rgba(255,255,255,0.1)',
	'#bfdbfe': 'rgba(18,117,226,0.3)',
	'#dbeafe': 'rgba(18,117,226,0.25)',
	'#cbd5e1': 'rgba(255,255,255,0.12)',
};

function transformInlineStylesForDarkTheme(html: string) {
	return html.replace(/style="([^"]+)"/gi, (_match, styleContent: string) => {
		let s = styleContent;

		for (const color of LIGHT_TEXT_COLORS) {
			s = s.replace(new RegExp(`color:\\s*${color}`, 'gi'), '');
		}

		for (const [from, to] of Object.entries(BLUE_TO_READABLE)) {
			s = s.replace(new RegExp(`color:\\s*${from}`, 'gi'), `color: ${to}`);
		}

		for (const [from, to] of Object.entries(LIGHT_BG_TO_DARK)) {
			s = s.replace(new RegExp(`background(?:-color)?:\\s*${from}`, 'gi'), `background: ${to}`);
		}

		for (const [from, to] of Object.entries(LIGHT_BORDER_TO_DARK)) {
			s = s.replace(new RegExp(from, 'gi'), to);
		}

		s = s.replace(/;?\s*;/g, ';').replace(/^;|;$/g, '').trim();
		return s ? `style="${s}"` : '';
	});
}

function extractArticleHtml(html: string) {
	let articleHtml = html.trim();

	articleHtml = articleHtml.replace(
		/<p[^>]*>\s*Related reading:\s*([\s\S]*?)\s*<\/p>/gi,
		(_, linksHtml) => {
			const links = linksHtml
				.split(/(?:Â·|·)/)
				.map((link: string) => link.trim())
				.filter(Boolean);

			return `<div class="related-reading-box">
				<h3>Related Reading</h3>
				<ul>
					${links.map((link: string) => `<li>${link}</li>`).join("")}
				</ul>
			</div>`;
		},
	);

	articleHtml = stripMicrodataAttributes(articleHtml);
	articleHtml = transformInlineStylesForDarkTheme(articleHtml);

	return articleHtml;
}

function stripMicrodataAttributes(html: string) {
	return html
		.replace(/\sitemscope(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?/gi, "")
		.replace(/\sitemtype=(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "")
		.replace(/\sitemprop=(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");
}

export function BlogPostPage({ slug }: BlogPostPageProps) {
	const post = blogPosts.find((item) => item.slug === slug);
	const nextStep = post ? BLOG_NEXT_STEPS[post.slug] : undefined;
	const answerBlock = post ? BLOG_ANSWER_BLOCKS[post.slug] : undefined;
	const relatedSlugs = post ? BLOG_RELATED_POSTS[post.slug] : undefined;
	const relatedPosts = relatedSlugs
		? relatedSlugs.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean) as [import("@/lib/blogPosts").BlogPost, import("@/lib/blogPosts").BlogPost]
		: undefined;

	useSEO({
		title: post
			? `${post.title} | Nuerova Blog`
			: "Blog article not found - Nuerova",
		description: post
			? post.summary
			: "The requested Nuerova blog article could not be found.",
		ogType: post ? "article" : "website",
		schemaOrg: post ? {
			"@type": "BlogPosting",
			"headline": post.title,
			"description": post.summary,
			"url": `https://nuerova.xyz/blog/${post.slug}`,
			"datePublished": post.date ?? "2026-06-07",
			"dateModified": post.date ?? "2026-06-07",
			"author": {
				"@type": "Organization",
				"name": "Nuerova",
				"url": "https://nuerova.xyz"
			},
			"publisher": {
				"@type": "Organization",
				"name": "Nuerova",
				"logo": {
					"@type": "ImageObject",
					"url": "https://nuerova.xyz/brand-logo.png"
				}
			},
			"keywords": post.tags.join(", ")
		} : undefined
	});

	useScrollReveal();

	if (!post) {
		return (
			<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
				<Navigation />
				<main className="flex-grow pb-section-gap pt-24">
					<div className="container article-shell reveal" style={{ textAlign: "center", padding: "80px 20px" }}>
						<h1>Article not found</h1>
						<p style={{ color: "var(--muted)", marginBottom: "32px" }}>
							The article may have moved, or the URL may be incorrect.
						</p>
						<Link to="/blog" className="button primary">
							Back to blog
						</Link>
					</div>
				</main>
			</div>
		);
	}

	return (
		<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />
			<main className="flex-grow pb-section-gap pt-24">
				<article className="max-w-4xl mx-auto px-gutter md:px-stack-lg article-shell reveal">
					<div style={{ marginBottom: "24px" }}>
						<Link
							to="/blog"
							className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors"
							style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "var(--muted)", fontWeight: 600 }}
						>
							<ArrowLeft className="h-4 w-4" style={{ width: "16px", height: "16px" }} />
							Back to blog
						</Link>
					</div>

					{answerBlock && (
						<div
							className="rounded-lg border border-slate-200 bg-slate-50 p-6"
							style={{
								marginBottom: "32px",
								borderRadius: "8px",
								border: "1px solid var(--outline)",
								background: "var(--surface-low)",
								padding: "24px",
							}}
						>
							<p className="text-xs font-bold uppercase tracking-wide text-slate-500" style={{ margin: 0, textTransform: "uppercase", fontSize: "12px", fontWeight: 800, color: "var(--muted)" }}>
								Direct answer
							</p>
							<h2 className="mt-2 text-2xl font-bold text-white" style={{ marginTop: "8px", fontSize: "24px", fontWeight: 700 }}>
								{answerBlock.question}
							</h2>
							<p className="mt-3 text-base leading-relaxed text-white/70" style={{ marginTop: "12px", fontSize: "16px", color: "var(--ink-soft)" }}>
								{answerBlock.answer}
							</p>
							{answerBlock.facts && (
								<ul className="mt-5 grid gap-3 md:grid-cols-3" style={{ marginTop: "20px", display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", paddingLeft: 0, listStyle: "none" }}>
									{answerBlock.facts.map((fact) => (
										<li key={fact} className="text-sm text-white/70" style={{ fontSize: "14px", color: "var(--ink-soft)" }}>
											• {fact}
										</li>
									))}
								</ul>
							)}
						</div>
					)}

					{answerBlock?.comparison && (
						<div style={{ marginBottom: "32px" }}>
							<ComparisonSummary
								title="AI-ready comparison summary"
								rows={answerBlock.comparison}
							/>
						</div>
					)}

					<div className="mb-10 text-center">
						<span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-status-blue uppercase bg-status-blue/10 border border-status-blue/20 rounded-full">
							{post.tags[0]}
						</span>
						<h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6" style={{ fontFamily: "'Lora', Georgia, serif" }}>{post.title}</h1>
						<div className="flex items-center justify-center gap-4 text-sm text-white/50">
							<span>{post.publishedAt}</span>
							<span>•</span>
							<span>{post.readTime}</span>
						</div>
					</div>

					<div
						className="blog-prose"
						dangerouslySetInnerHTML={{
							__html: extractArticleHtml(post.contentHtml),
						}}
					/>

					{relatedPosts && relatedPosts.length === 2 && (
						<RelatedPosts posts={relatedPosts as [import("@/lib/blogPosts").BlogPost, import("@/lib/blogPosts").BlogPost]} />
					)}

					<EarlyAccessCapture source={`blog_${post.slug}`} />

					{nextStep && (
						<div
							className="rounded-lg border border-blue-100 bg-blue-50 p-6"
							style={{
								marginTop: "48px",
								borderRadius: "8px",
								border: "1px solid var(--primary-soft)",
								background: "rgba(18, 117, 226, 0.05)",
								padding: "24px",
							}}
						>
							<p className="text-sm font-semibold text-blue-700" style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "var(--primary-deep)" }}>
								Recommended next step
							</p>
							<h2 className="mt-2 text-2xl font-bold text-white" style={{ marginTop: "8px", fontSize: "24px", fontWeight: 700 }}>
								{nextStep.title}
							</h2>
							<p className="mt-3 text-white/70 leading-relaxed" style={{ marginTop: "12px", fontSize: "16px", color: "var(--ink-soft)" }}>
								{nextStep.description}
							</p>
							<Link
								to={nextStep.to === "/contact/" ? "/contact" : nextStep.to}
								onClick={() =>
									trackEvent("blog_next_step_clicked", {
										blog_slug: post.slug,
										cta_text: nextStep.label,
										cta_location: "blog_next_step",
										funnel_stage: nextStep.stage,
										target_url: nextStep.to,
									})
								}
								className="button primary"
								style={{ display: "inline-block", marginTop: "20px" }}
							>
								{nextStep.label}
							</Link>
						</div>
					)}
				</article>
			</main>
		</div>
	);
}

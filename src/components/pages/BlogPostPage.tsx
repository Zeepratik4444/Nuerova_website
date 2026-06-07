import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { blogPosts } from "@/lib/blogPosts";
import { trackEvent } from "@/lib/analytics";
import { BLOG_NEXT_STEPS } from "@/lib/funnelNextSteps";
import { BLOG_ANSWER_BLOCKS } from "@/lib/aeoGeoContent";
import { ComparisonSummary } from "@/components/AeoGeoBlocks";

type BlogPostPageProps = {
	slug: string;
};

function extractArticleHtml(html: string) {
	const match = html.match(/<header[\s\S]*?(?=<footer|$)/i);
	let articleHtml = match ? match[0].trim() : "";

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

	useSEO({
		title: post
			? `${post.title} | Nuerova`
			: "Blog article not found - Nuerova",
		description: post
			? post.summary
			: "The requested Nuerova blog article could not be found.",
	});

	useScrollReveal();

	if (!post) {
		return (
			<div className="js-enabled">
				<Navigation />
				<main className="section">
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
		<div className="js-enabled">
			<Navigation />
			<main className="section">
				<article className="container article-shell reveal">
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
								background: "rgba(255, 255, 255, 0.4)",
								padding: "24px",
							}}
						>
							<p className="text-xs font-bold uppercase tracking-wide text-slate-500" style={{ margin: 0, textTransform: "uppercase", fontSize: "12px", fontWeight: 800, color: "var(--muted)" }}>
								Direct answer
							</p>
							<h2 className="mt-2 text-2xl font-bold text-slate-950" style={{ marginTop: "8px", fontSize: "24px", fontWeight: 700 }}>
								{answerBlock.question}
							</h2>
							<p className="mt-3 text-base leading-relaxed text-slate-700" style={{ marginTop: "12px", fontSize: "16px", color: "var(--ink-soft)" }}>
								{answerBlock.answer}
							</p>
							{answerBlock.facts && (
								<ul className="mt-5 grid gap-3 md:grid-cols-3" style={{ marginTop: "20px", display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", paddingLeft: 0, listStyle: "none" }}>
									{answerBlock.facts.map((fact) => (
										<li key={fact} className="text-sm text-slate-700" style={{ fontSize: "14px", color: "var(--ink-soft)" }}>
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

					<span className="article-meta">{post.tags[0]}</span>
					<h1>{post.title}</h1>

					<div
						dangerouslySetInnerHTML={{
							__html: extractArticleHtml(post.contentHtml),
						}}
					/>

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
							<h2 className="mt-2 text-2xl font-bold text-gray-900" style={{ marginTop: "8px", fontSize: "24px", fontWeight: 700 }}>
								{nextStep.title}
							</h2>
							<p className="mt-3 text-gray-600 leading-relaxed" style={{ marginTop: "12px", fontSize: "16px", color: "var(--ink-soft)" }}>
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

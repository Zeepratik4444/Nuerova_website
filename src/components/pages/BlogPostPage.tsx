import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
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
			? `${post.title} | Renewal360 Blog`
			: "Blog article not found - Renewal360",
		description: post
			? post.summary
			: "The requested Renewal360 blog article could not be found.",
	});

	if (!post) {
		return (
			<div className="min-h-screen bg-white">
				<Navigation />
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Article not found
					</h1>
					<p className="text-gray-600 mb-8">
						The article may have moved, or the URL may be incorrect.
					</p>
					<Link to="/blog">
						<Button>Back to blog</Button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			<div className="max-w-3xl mx-auto px-6 pt-8">
				<Link
					to="/blog"
					className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to blog
				</Link>
			</div>
			{answerBlock && (
				<section className="max-w-3xl mx-auto px-6 pt-8">
					<div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
						<p className="text-xs font-bold uppercase tracking-wide text-slate-500">
							Direct answer
						</p>
						<h2 className="mt-2 text-2xl font-bold text-slate-950">
							{answerBlock.question}
						</h2>
						<p className="mt-3 text-base leading-relaxed text-slate-700">
							{answerBlock.answer}
						</p>
						{answerBlock.facts && (
							<ul className="mt-5 grid gap-3 md:grid-cols-3">
								{answerBlock.facts.map((fact) => (
									<li key={fact} className="text-sm text-slate-700">
										{fact}
									</li>
								))}
							</ul>
						)}
					</div>
				</section>
			)}
			{answerBlock?.comparison && (
				<section className="max-w-3xl mx-auto px-6 pt-6">
					<ComparisonSummary
						title="AI-ready comparison summary"
						rows={answerBlock.comparison}
					/>
				</section>
			)}
			<div
				className="blog-article-shell"
				dangerouslySetInnerHTML={{
					__html: extractArticleHtml(post.contentHtml),
				}}
			/>
			{nextStep && (
				<section className="max-w-3xl mx-auto px-6 pb-20">
					<div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
						<p className="text-sm font-semibold text-blue-700">
							Recommended next step
						</p>
						<h2 className="mt-2 text-2xl font-bold text-gray-900">
							{nextStep.title}
						</h2>
						<p className="mt-3 text-gray-600 leading-relaxed">
							{nextStep.description}
						</p>
						<a
							href={nextStep.to}
							onClick={() =>
								trackEvent("blog_next_step_clicked", {
									blog_slug: post.slug,
									cta_text: nextStep.label,
									cta_location: "blog_next_step",
									funnel_stage: nextStep.stage,
									target_url: nextStep.to,
								})
							}
							className="mt-5 inline-flex"
						>
							<Button>{nextStep.label}</Button>
						</a>
					</div>
				</section>
			)}
		</div>
	);
}

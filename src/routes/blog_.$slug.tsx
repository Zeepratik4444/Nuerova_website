import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPostPage";

export const Route = createFileRoute("/blog_/$slug")({
	component: BlogPostRoute,
});

function BlogPostRoute() {
	const { slug } = Route.useParams();

	return <BlogPostPage slug={slug} />;
}

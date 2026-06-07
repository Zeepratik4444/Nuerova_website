import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPostPage";

export const Route = createFileRoute("/blog/gainsight-vs-totango-vs-renewal360")({
	component: () => <BlogPostPage slug="gainsight-vs-totango-vs-renewal360" />,
});

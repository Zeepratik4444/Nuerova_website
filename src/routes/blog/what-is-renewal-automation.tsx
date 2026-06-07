import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPostPage";

export const Route = createFileRoute("/blog/what-is-renewal-automation")({
	component: () => <BlogPostPage slug="what-is-renewal-automation" />,
});

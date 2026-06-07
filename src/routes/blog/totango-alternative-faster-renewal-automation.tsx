import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPostPage";

export const Route = createFileRoute("/blog/totango-alternative-faster-renewal-automation")({
	component: () => <BlogPostPage slug="totango-alternative-faster-renewal-automation" />,
});

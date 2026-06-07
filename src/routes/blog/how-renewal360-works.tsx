import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPostPage";

export const Route = createFileRoute("/blog/how-renewal360-works")({
	component: () => <BlogPostPage slug="how-renewal360-works" />,
});

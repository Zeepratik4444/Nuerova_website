import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPostPage";

export const Route = createFileRoute("/blog/churnzero-alternative-growing-saas-teams")({
	component: () => <BlogPostPage slug="churnzero-alternative-growing-saas-teams" />,
});

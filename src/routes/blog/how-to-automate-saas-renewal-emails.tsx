import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPostPage";

export const Route = createFileRoute("/blog/how-to-automate-saas-renewal-emails")({
	component: () => <BlogPostPage slug="how-to-automate-saas-renewal-emails" />,
});

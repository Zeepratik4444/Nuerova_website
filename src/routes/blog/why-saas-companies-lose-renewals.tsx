import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPostPage";

export const Route = createFileRoute("/blog/why-saas-companies-lose-renewals")({
	component: () => <BlogPostPage slug="why-saas-companies-lose-renewals" />,
});

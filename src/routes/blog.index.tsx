import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/pages/BlogPage";

export const Route = createFileRoute("/blog/")({
	component: BlogPage,
});

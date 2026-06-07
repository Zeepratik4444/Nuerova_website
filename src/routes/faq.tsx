import { createFileRoute } from "@tanstack/react-router";
import { FAQPage } from "@/components/pages/FAQPage";

export const Route = createFileRoute("/faq")({
	component: FAQPage,
});

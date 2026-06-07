import { createFileRoute } from "@tanstack/react-router";
import { SecurityPage } from "@/components/pages/SecurityPage";

export const Route = createFileRoute("/security")({
	component: SecurityPage,
});

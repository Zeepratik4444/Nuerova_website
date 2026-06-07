import { createFileRoute } from "@tanstack/react-router";
import { SetPasswordPage } from "@/components/pages/SetPasswordPage";

export const Route = createFileRoute("/set-password")({
	component: SetPasswordPage,
});

import { createFileRoute } from "@tanstack/react-router";
import { SetPasswordPage } from "@/components/pages/SetPasswordPage";

export const Route = createFileRoute("/set-password")({
	validateSearch: (search: Record<string, unknown>) => ({
		token: (search.token as string) ?? "",
	}),
	component: SetPasswordPage,
});

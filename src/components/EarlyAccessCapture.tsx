import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = {
	source?: string;
};

export function EarlyAccessCapture({ source = "blog_post" }: Props) {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;

		setStatus("submitting");
		setErrorMsg("");

		const emailParts = email.split("@");
		const localPart = emailParts[0] || "Early Access";
		const domainPart = emailParts[1] || "Participant";

		const contactName = localPart
			.split(/[._-]/)
			.map((p) => p.charAt(0).toUpperCase() + p.slice(1))
			.join(" ");

		const companyRaw = domainPart.split(".")[0] || "Early Access";
		const companyName = companyRaw.charAt(0).toUpperCase() + companyRaw.slice(1);

		try {
			const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
			const response = await fetch(`${API_BASE_URL}/api/request-demo`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					company_name: companyName,
					contact_person_name: contactName,
					email_address: email,
					phone_number: null,
					message: `Submitted via early access capture. Source: ${source}`,
					product: "nuerova",
				}),
			});

			const data = await response.json();
			if (!response.ok) throw new Error(data.message || "Submission failed");

			setStatus("success");
			trackEvent("form_submitted", { cta_location: source, funnel_stage: "awareness" });
			setEmail("");
		} catch (err) {
			setStatus("error");
			setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
		}
	};

	if (status === "success") {
		return (
			<div
				style={{
					marginTop: "48px",
					padding: "28px 32px",
					borderRadius: "12px",
					background: "rgba(18,117,226,0.07)",
					border: "1px solid rgba(18,117,226,0.2)",
					textAlign: "center",
				}}
			>
				<p style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "rgba(255,255,255,0.95)" }}>
					You're on the list.
				</p>
				<p style={{ margin: "8px 0 0", fontSize: "15px", color: "rgba(255,255,255,0.55)" }}>
					We'll reach out shortly with early access details.
				</p>
			</div>
		);
	}

	return (
		<div
			style={{
				marginTop: "48px",
				padding: "28px 32px",
				borderRadius: "12px",
				background: "rgba(255,255,255,0.03)",
				border: "1px solid rgba(255,255,255,0.08)",
			}}
		>
			<p
				style={{
					margin: "0 0 4px",
					fontSize: "11px",
					fontWeight: 800,
					textTransform: "uppercase",
					letterSpacing: "0.1em",
					color: "#60a5fa",
				}}
			>
				Early access
			</p>
			<p
				style={{
					margin: "0 0 20px",
					fontSize: "19px",
					fontWeight: 700,
					color: "rgba(255,255,255,0.92)",
					lineHeight: 1.35,
				}}
			>
				See Nuerova in your stack — no commitment.
			</p>
			<form
				onSubmit={handleSubmit}
				style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
			>
				<input
					type="email"
					required
					placeholder="you@company.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={status === "submitting"}
					style={{
						flex: "1 1 220px",
						padding: "11px 16px",
						borderRadius: "8px",
						border: "1px solid rgba(255,255,255,0.12)",
						background: "rgba(255,255,255,0.05)",
						color: "rgba(255,255,255,0.88)",
						fontSize: "15px",
						outline: "none",
					}}
				/>
				<button
					type="submit"
					disabled={status === "submitting"}
					style={{
						padding: "11px 24px",
						borderRadius: "8px",
						background: "#1275e2",
						color: "#fff",
						fontWeight: 700,
						fontSize: "15px",
						border: "none",
						cursor: status === "submitting" ? "not-allowed" : "pointer",
						opacity: status === "submitting" ? 0.7 : 1,
						whiteSpace: "nowrap",
					}}
				>
					{status === "submitting" ? "Sending…" : "Get early access →"}
				</button>
			</form>
			{status === "error" && (
				<p style={{ margin: "10px 0 0", fontSize: "13px", color: "#f87171" }}>
					{errorMsg}
				</p>
			)}
		</div>
	);
}

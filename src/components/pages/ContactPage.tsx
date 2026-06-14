import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { trackEvent } from "@/lib/analytics";

export function ContactPage() {
	useSEO({
		title: "Request Demo | Nuerova",
		description: "Request a demo of Nuerova's team intelligence platform. Map scoped clusters and agent-native automations to your workflows.",
	});

	useScrollReveal();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		teamSize: "",
		useCase: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
	const [submitMessage, setSubmitMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");
		setSubmitMessage("");

		const compiledMessage = `Use Case: ${formData.useCase}\nTeam Size: ${formData.teamSize}\nMessage: ${formData.message}`;

		try {
			const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
			const response = await fetch(`${API_BASE_URL}/api/request-demo`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					company_name: formData.company,
					contact_person_name: formData.name,
					email_address: formData.email,
					phone_number: null,
					message: compiledMessage,
					product: "nuerova",
				}),
			});

			const data = await response.json();

			if (!response.ok) throw new Error(data.message || "Form submission failed");

			setSubmitStatus("success");
			setSubmitMessage(data.message || "Thank you for requesting a demo! We will reach out shortly.");
			trackEvent("form_submitted", { cta_location: "contact_page_form", funnel_stage: "decision" });
			setFormData({ name: "", email: "", company: "", teamSize: "", useCase: "", message: "" });
		} catch (err) {
			setSubmitStatus("error");
			setSubmitMessage(err instanceof Error ? err.message : "An error occurred. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const inputCls = "w-full bg-[#2a2c2e] border-none rounded text-white text-sm focus:ring-1 focus:ring-status-blue py-2.5 px-3 outline-none disabled:opacity-50";
	const selectCls = "w-full bg-[#2a2c2e] border-none rounded text-white/70 text-sm focus:ring-1 focus:ring-status-blue py-2.5 px-3 outline-none disabled:opacity-50";
	const labelCls = "block text-xs font-medium text-white/70 mb-1";

	return (
		<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />

			<main id="main" className="flex-grow pb-section-gap pt-24">
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap">
					<div className="flex flex-col md:flex-row gap-16 items-start">
						{/* Left copy */}
						<div className="flex-1 reveal">
							<span className="font-label-caps text-label-caps text-white/80 border border-white/20 px-3 py-1 rounded-full inline-block mb-stack-md">
								REQUEST A DEMO
							</span>
							<h1 className="font-headline-lg text-4xl md:text-5xl text-primary mb-stack-md font-bold tracking-tight leading-tight">
								Your team's knowledge should not depend on one person being in the room.
							</h1>
							<p className="font-body-md text-body-md text-white/60 mb-stack-lg max-w-md leading-relaxed">
								Tell us the workflow you want to improve. A human reviews every request and helps map the right pilot path.
							</p>
							<ol className="space-y-4 mb-8">
								{[
									"A human reviews your request the same day.",
									"We schedule a focused 30-minute discovery call.",
									"You get a customized sandbox or pilot plan.",
								].map((step, i) => (
									<li key={step} className="flex items-start gap-4">
										<div className="w-6 h-6 rounded-full border border-status-blue/30 bg-status-blue/5 flex items-center justify-center text-status-blue text-xs font-bold flex-shrink-0 mt-0.5">
											{i + 1}
										</div>
										<span className="text-sm text-white/70 leading-relaxed">{step}</span>
									</li>
								))}
							</ol>
							<div className="flex flex-wrap gap-3">
								{["No lock-in", "Data stays yours", "Setup support included", "Enterprise controls built in"].map((tag) => (
									<span key={tag} className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
										{tag}
									</span>
								))}
							</div>
						</div>

						{/* Form card */}
						<div className="w-full md:w-[500px] bg-[#1a1c1e] border border-white/10 rounded-xl p-8 reveal">
							{submitStatus === "success" ? (
								<div className="flex flex-col items-center justify-center text-center py-12">
									<div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
										<div className="w-3 h-3 rounded-full bg-emerald-500" />
									</div>
									<h3 className="text-2xl font-bold text-white mb-4">Demo Requested!</h3>
									<p className="text-white/70">{submitMessage}</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} aria-label="Request a Nuerova demo" className="space-y-4">
									{submitStatus === "error" && (
										<div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
											{submitMessage}
										</div>
									)}

									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className={labelCls}>Name</label>
											<input
												name="name" type="text" required autoComplete="name"
												disabled={isSubmitting} className={inputCls}
												value={formData.name}
												onChange={(e) => setFormData({ ...formData, name: e.target.value })}
											/>
										</div>
										<div>
											<label className={labelCls}>Work email</label>
											<input
												name="email" type="email" required autoComplete="email"
												disabled={isSubmitting} className={inputCls}
												value={formData.email}
												onChange={(e) => setFormData({ ...formData, email: e.target.value })}
											/>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-4">
										<div>
											<label className={labelCls}>Company</label>
											<input
												name="company" type="text" required autoComplete="organization"
												disabled={isSubmitting} className={inputCls}
												value={formData.company}
												onChange={(e) => setFormData({ ...formData, company: e.target.value })}
											/>
										</div>
										<div>
											<label className={labelCls}>Team size</label>
											<select
												name="team-size" required disabled={isSubmitting}
												className={selectCls}
												value={formData.teamSize}
												onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
											>
												<option value="">Select team size</option>
												<option value="5-25">5–25</option>
												<option value="26-50">26–50</option>
												<option value="51-200">51–200</option>
												<option value="201-500">201–500</option>
												<option value="500+">500+</option>
											</select>
										</div>
									</div>

									<div>
										<label className={labelCls}>Primary use case</label>
										<select
											name="use-case" required disabled={isSubmitting}
											className={selectCls}
											value={formData.useCase}
											onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
										>
											<option value="">Select use case</option>
											<option value="Operations">Operations</option>
											<option value="Customer Success">Customer Success</option>
											<option value="Engineering">Engineering</option>
											<option value="RevOps">RevOps</option>
											<option value="Other">Other</option>
										</select>
									</div>

									<div>
										<label className={labelCls}>What should Nuerova help with?</label>
										<textarea
											name="message" rows={4} disabled={isSubmitting}
											className="w-full bg-[#2a2c2e] border-none rounded text-white text-sm focus:ring-1 focus:ring-status-blue py-2.5 px-3 outline-none resize-none disabled:opacity-50"
											value={formData.message}
											onChange={(e) => setFormData({ ...formData, message: e.target.value })}
										/>
									</div>

									<button
										type="submit" disabled={isSubmitting}
										className="w-full bg-[#0066cc] text-white font-medium py-3 rounded hover:bg-[#0052a3] transition-colors mt-2 disabled:opacity-50"
									>
										{isSubmitting ? "Requesting..." : "Request your demo"}
									</button>
									<p className="text-[10px] text-white/40 text-center">
										No sales pressure. Just showing the product around a real workflow.
									</p>
								</form>
							)}
						</div>
					</div>
				</section>
			</main>

		</div>
	);
}

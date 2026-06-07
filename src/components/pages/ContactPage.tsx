import { useState } from "react";
import { Link } from "@tanstack/react-router";
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

		// Combine team size, use case, and message for the database
		const compiledMessage = `Use Case: ${formData.useCase}\nTeam Size: ${formData.teamSize}\nMessage: ${formData.message}`;

		try {
			const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
			const response = await fetch(`${API_BASE_URL}/api/request-demo`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
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

			if (!response.ok) {
				throw new Error(data.message || "Form submission failed");
			}

			setSubmitStatus("success");
			setSubmitMessage(data.message || "Thank you for requesting a demo! We will reach out shortly.");
			trackEvent("form_submitted", {
				cta_location: "contact_page_form",
				funnel_stage: "decision",
			});
			setFormData({
				name: "",
				email: "",
				company: "",
				teamSize: "",
				useCase: "",
				message: "",
			});
		} catch (err) {
			console.error("Contact form submission error:", err);
			setSubmitStatus("error");
			setSubmitMessage(err instanceof Error ? err.message : "An error occurred. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="js-enabled">
			<Navigation />

			<main id="main">
				<section className="section contact-section">
					<div className="container contact-grid">
						<div className="contact-copy reveal">
							<span className="kicker">Request a demo</span>
							<h1>Your team's knowledge should not depend on one person being in the room.</h1>
							<p>Tell us the workflow you want to improve. A human reviews every request and helps map the right pilot path.</p>
							<ol className="contact-steps">
								<li>A human reviews your request the same day.</li>
								<li>We schedule a focused 30-minute discovery call.</li>
								<li>You get a customized sandbox or pilot plan.</li>
							</ol>
						</div>

						{submitStatus === "success" ? (
							<div className="demo-form reveal bg-white p-8 rounded-xl border border-outline shadow flex flex-col items-center justify-center text-center">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">Demo Requested!</h3>
								<p className="text-gray-600 mb-0">
									{submitMessage}
								</p>
							</div>
						) : (
							<form className="demo-form reveal" aria-label="Request a Nuerova demo" onSubmit={handleSubmit}>
								{submitStatus === "error" && (
									<div className="full-field p-4 bg-red-50 border border-red-200 rounded text-red-800 text-sm mb-4">
										{submitMessage}
									</div>
								)}

								<label>
									<span>Name</span>
									<input 
										name="name" 
										type="text" 
										autoComplete="name" 
										required 
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									/>
								</label>
								<label>
									<span>Work email</span>
									<input 
										name="email" 
										type="email" 
										autoComplete="email" 
										required 
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									/>
								</label>
								<label>
									<span>Company</span>
									<input 
										name="company" 
										type="text" 
										autoComplete="organization" 
										required 
										value={formData.company}
										onChange={(e) => setFormData({ ...formData, company: e.target.value })}
									/>
								</label>
								<label>
									<span>Team size</span>
									<select 
										name="team-size" 
										required 
										value={formData.teamSize}
										onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
									>
										<option value="">Select team size</option>
										<option value="5-25">5-25</option>
										<option value="26-50">26-50</option>
										<option value="51-200">51-200</option>
										<option value="201-500">201-500</option>
										<option value="500+">500+</option>
									</select>
								</label>
								<label className="full-field">
									<span>Primary use case</span>
									<select 
										name="use-case" 
										required 
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
								</label>
								<label className="full-field">
									<span>What should Nuerova help with?</span>
									<textarea 
										name="message" 
										rows={4}
										value={formData.message}
										onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									></textarea>
								</label>
								<button 
									className="button primary full full-field" 
									type="submit"
									disabled={isSubmitting}
								>
									{isSubmitting ? "Requesting..." : "Request your demo"}
								</button>
								<p className="form-note">No sales pressure. Just showing the product around a real workflow.</p>
							</form>
						)}
					</div>
				</section>
			</main>
		</div>
	);
}

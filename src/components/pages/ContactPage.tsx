import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useSEO } from "@/hooks/useSEO";
import { WhoThisIsFor } from "@/components/FunnelCTA";
import { trackEvent } from "@/lib/analytics";
import { AnswerBlock, FactBox } from "@/components/AeoGeoBlocks";

export function ContactPage() {
	useSEO({
		title: "Contact Nuerova — Start Your Team Intelligence Trial | Nuerova",
		description: "Talk to Nuerova about centralizing department knowledge in scoped clusters and setting up secure, context-aware agent workflows.",
	});

	const [formData, setFormData] = useState({
		companyName: "",
		contactPersonName: "",
		emailAddress: "",
		phoneNumber: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
	const [submitMessage, setSubmitMessage] = useState<string>("");
	const [acceptTerms, setAcceptTerms] = useState(false);
	const [hasStartedForm, setHasStartedForm] = useState(false);

	const trackFormStarted = () => {
		if (hasStartedForm) return;
		setHasStartedForm(true);
		trackEvent("form_started", {
			form_type: "trial_request",
			funnel_stage: "decision",
			cta_location: "contact_form",
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");
		setSubmitMessage("");

		try {
			const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';
			const response = await fetch(`${API_BASE_URL}/api/request-demo`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					company_name: formData.companyName,
					contact_person_name: formData.contactPersonName,
					email_address: formData.emailAddress,
					phone_number: formData.phoneNumber || null,
					message: formData.message || null,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Form submission failed");
			}

			setSubmitStatus("success");
			setSubmitMessage(data.message);
			trackEvent("form_submitted", {
				form_type: "trial_request",
				funnel_stage: "decision",
				cta_location: "contact_form",
			});
			setFormData({
				companyName: "",
				contactPersonName: "",
				emailAddress: "",
				phoneNumber: "",
				message: "",
			});
		} catch (error) {
			console.error("Form submission error:", error);
			setSubmitStatus("error");
			setSubmitMessage(error instanceof Error ? error.message : "An unknown error occurred.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Start your Nuerova free trial
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Test context-aware team intelligence. Organize sources, build custom agent playbooks, and secure data isolation with a 7-day Teams trial.
					</p>
				</div>
				<div className="mb-12 max-w-5xl mx-auto">
					<WhoThisIsFor
						items={[
							"Departments wanting to consolidate wiki data and Slack context",
							"Operations, CS, and Engineering leads building playbooks",
							"SaaS leaders demanding enterprise-grade data isolation",
						]}
					/>
				</div>
				<div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<AnswerBlock
						question="What is included in the Nuerova trial?"
						answer="The Nuerova Teams trial gives you 7 days of full access to create workspaces, organize unlimited knowledge clusters, connect core sources (Slack, Confluence, Jira), configure custom agent personas, and run visual automations."
						facts={[
							"7-day full Teams trial",
							"No credit card required to start",
							"Connect Slack, Confluence, and Gmail",
						]}
					/>
					<FactBox
						title="Trial fit signals"
						facts={[
							"You manage team documentation and scripts across fragmented channels.",
							"Onboarding or troubleshooting knowledge is held in wiki notes or memory.",
							"Leadership needs audit logs and logical data isolation policies.",
							"You want context-aware agents to handle repeated questions or tasks.",
						]}
					/>
				</div>

				<div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
					<div>
						<Card>
							<CardHeader>
								<CardTitle className="text-2xl">
									Request your free trial
								</CardTitle>
							</CardHeader>
							<CardContent>
								<form
									onSubmit={handleSubmit}
									onFocusCapture={trackFormStarted}
									className="space-y-6"
								>
									<div className="space-y-2">
										<Label htmlFor="companyName">
											Company Name <span className="text-red-500">*</span>
										</Label>
										<Input
											id="companyName"
											type="text"
											required
											value={formData.companyName}
											onChange={(e) =>
												setFormData({ ...formData, companyName: e.target.value })
											}
											placeholder="Your company name"
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="contactPersonName">
											Your Name <span className="text-red-500">*</span>
										</Label>
										<Input
											id="contactPersonName"
											type="text"
											required
											value={formData.contactPersonName}
											onChange={(e) =>
												setFormData({
													...formData,
													contactPersonName: e.target.value,
												})
											}
											placeholder="Your full name"
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="emailAddress">
											Email Address <span className="text-red-500">*</span>
										</Label>
										<Input
											id="emailAddress"
											type="email"
											required
											value={formData.emailAddress}
											onChange={(e) =>
												setFormData({ ...formData, emailAddress: e.target.value })
											}
											placeholder="you@company.com"
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="phoneNumber">
											Phone Number (Optional)
										</Label>
										<Input
											id="phoneNumber"
											type="tel"
											value={formData.phoneNumber}
											onChange={(e) =>
												setFormData({ ...formData, phoneNumber: e.target.value })
											}
											placeholder="Your phone number"
										/>
									</div>


									<div className="space-y-2">
										<Label htmlFor="message">
											Tell Us About Your Workflows (Optional)
										</Label>
										<Textarea
											id="message"
											value={formData.message}
											onChange={(e) =>
												setFormData({ ...formData, message: e.target.value })
											}
											placeholder="What channels or data sources do you want to organize? What tasks do you want to automate?"
											rows={4}
										/>
									</div>

									{submitStatus === "success" && (
										<div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
											{submitMessage}
										</div>
									)}

									{submitStatus === "error" && (
										<div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
											{submitMessage}
										</div>
									)}

									<div className="flex items-start gap-3">
										<input
											type="checkbox"
											id="acceptTerms"
											checked={acceptTerms}
											onChange={(e) => setAcceptTerms(e.target.checked)}
											className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
										/>
										<label htmlFor="acceptTerms" className="text-sm text-gray-600 cursor-pointer">
											I agree to the{" "}
											<Link to="/terms" target="_blank" className="text-blue-600 hover:underline font-medium">Terms of Service & Privacy Policy</Link>
											<span className="text-red-500 ml-0.5">*</span>
										</label>
									</div>

									<Button
										type="submit"
										size="lg"
										className="w-full bg-blue-600 hover:bg-blue-700 text-white"
										disabled={isSubmitting || !acceptTerms}
									>
										{isSubmitting ? "Submitting..." : "Start Free Trial"}
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>

					<div className="space-y-8">
						<Card className="bg-blue-50">
							<CardContent className="pt-6">
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									What Happens Next?
								</h3>
								<div className="space-y-4">
									<div className="flex gap-4">
										<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
											1
										</div>
										<div>
											<div className="font-semibold text-gray-900">
												We review your workspace needs
											</div>
											<div className="text-sm text-gray-600">
												We look at your team's size, operational channels, and custom tooling integrations.
											</div>
										</div>
									</div>

									<div className="flex gap-4">
										<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
											2
										</div>
										<div>
											<div className="font-semibold text-gray-900">
												You start a 7-day Teams trial
											</div>
											<div className="text-sm text-gray-600">
												No credit card required. Invite team members and begin indexing your first context clusters.
											</div>
										</div>
									</div>

									<div className="flex gap-4">
										<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
											3
										</div>
										<div>
											<div className="font-semibold text-gray-900">
												Your first custom agent goes live
											</div>
											<div className="text-sm text-gray-600">
												Deploy custom prompts and skills, and orchestrate visual trigger-action reasoning playbooks.
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Get in Touch</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-start gap-3">
									<Mail className="h-5 w-5 text-blue-600 mt-0.5" />
									<div>
										<div className="font-semibold text-gray-900">Email</div>
										<div className="text-sm text-gray-600">
											hello@nuerova.com
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="bg-gray-50">
							<CardContent className="pt-6">
								<h3 className="font-semibold text-gray-900 mb-3">
									Trial includes
								</h3>
								<ul className="space-y-3 text-sm text-gray-600">
									{[
										"7-day trial of Teams plan",
										"No credit card required",
										"Google Workspace & Slack integrations",
										"Granular role-based permissions",
										"Create unlimited knowledge clusters",
									].map((item) => (
										<li key={item} className="flex items-start gap-2">
											<CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

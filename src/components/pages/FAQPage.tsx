import { Navigation } from "@/components/Navigation";
import { FAQItem } from "@/components/sections/FAQ";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useSEO } from "@/hooks/useSEO";

export function FAQPage() {
	useSEO({
		title: "FAQ — Nuerova Clusters, Agents & Security Questions",
		description: "Answers to Nuerova setup, data source integrations, pricing, security, and team intelligence automation questions.",
	});

	const faqs = [
		{ q: "Is Nuerova a software or a managed service?", a: "It is a team intelligence software platform. We organize and index your scattered team files, code repositories, and chat threads into secure, scoped knowledge clusters, and deploy custom agent personas to run automated reasoning playbooks." },
		{ q: "Do I have to approve every action the agent drafts?", a: "Yes. Every automated action (emails, Slack updates, ticket creation, database queries) is held in the validation queue for your team to approve, edit, or reject before execution." },
		{ q: "How long does setup take?", a: "Onboarding is very rapid. You can link your data sources, configure your initial clusters, deploy custom agents, and design visual playbooks in under an hour." },
		{ q: "What happens to my data if I cancel?", a: "No lock-in. We export all your configurations, history, and workspace files in a standard format. Your data is deleted from our systems within 30 business days." },
		{ q: "Does it work for my department?", a: "Yes. Nuerova is built for Engineering, Operations, Customer Success, Product, and HR teams. Custom agent personas and scoped memory clusters adapt to your specific data repositories and guidelines." },
		{ q: "How is this different from just using static wikis?", a: "Static wikis immediately go out of date and require manual searching. Nuerova connects dynamically to your active tools, indexes changes in real-time, and has agents that can draft and execute actual tasks based on that knowledge." },
		{ q: "Is our data secure?", a: "Yes. We enforce strict data isolation at the workspace level, utilize TLS 1.3 and AES-256 encryption, and leverage enterprise commercial API channels with zero-retention parameters so your data is never used to train public LLM models." },
	];

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
			<Navigation />

			<div className="flex-grow py-20">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Frequently Asked Questions
						</h1>
						<p className="text-xl text-gray-600">
							Every question we hear from operations and engineering leads evaluating Nuerova.
						</p>
					</div>

					<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2 sm:p-6 mb-12">
						<div className="space-y-2">
							{faqs.map((faq, i) => (
								<FAQItem key={i} question={faq.q} answer={faq.a} />
							))}
						</div>
					</div>

					<div className="text-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
						<h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
						<p className="text-gray-600 mb-6">Our team is ready to provide the answers you need.</p>
						<Link to="/contact">
							<Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
								Contact Support
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

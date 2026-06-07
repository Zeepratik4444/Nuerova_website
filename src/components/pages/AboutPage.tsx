import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, ShieldAlert } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export function AboutPage() {
	useSEO({
		title: "About Nuerova — Built to Eliminate Team Knowledge Silos",
		description: "Read the story of Nuerova. Built by operational and engineering practitioners who outgrew fragmented Slack histories and document silos.",
	});

	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Built by Operations and Engineering Practitioners
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Nuerova was created by operators who understand that a team's execution speed is directly limited by how they share context.
					</p>
				</div>

				<div className="max-w-4xl mx-auto mb-16">
					<Card className="bg-blue-50">
						<CardContent className="pt-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								The Founders' Story
							</h2>
							<div className="space-y-4 text-lg text-gray-700">
								<p>
									As teams scale, critical information fragments. We spent years leading operations and engineering teams, and observed the same problem repeatedly: up to 73% of crucial context resides in isolated Slack direct messages, private emails, or outdated Confluence wikis.
								</p>
								<p>
									Every week, team members wasted hours repeating questions, searching thread history, or rewriting scripts because the original context owner was busy or had left the company.
								</p>
								<p>
									We looked for knowledge management solutions, but everything we found fell into two extremes: static wikis that immediately went out of date because they required manual maintenance, or generic AI chatbots that lacked company context, had no access controls, and couldn't trigger downstream workflows.
								</p>
								<p>
									That is why we built Nuerova: a team intelligence platform that connects with your existing stack, partitions data into secure knowledge clusters, and deploys custom-instructed agent helpers to automate reasoning playbooks with human oversight.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="mb-16">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Our Core Principles
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<Card>
							<CardContent className="pt-6">
								<Target className="h-12 w-12 text-blue-600 mb-4" />
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Practical AI Reasoning
								</h3>
								<p className="text-gray-600">
									We do not believe in autonomous agents running unchecked. Nuerova combines context-aware agents with human-in-the-loop validation queues to keep your output precise and safe.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="pt-6">
								<ShieldAlert className="h-12 w-12 text-blue-600 mb-4" />
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Governance by Design
								</h3>
								<p className="text-gray-600">
									Security is our starting primitive. Scoped clusters ensure data isolation, role-based access restricts operations, and tamper-resistant audit logs maintain SOC-2 standards.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="pt-6">
								<Users className="h-12 w-12 text-blue-600 mb-4" />
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Silo Elimination
								</h3>
								<p className="text-gray-600">
									We believe access to knowledge shouldn't carry a toll. Nuerova offers unlimited seat pricing on all plans so your entire organization can work from the same context.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				<div className="mb-16">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Why We Are Different
					</h2>
					<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
						<Card className="bg-gray-50">
							<CardContent className="pt-6">
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Grounded In Your Sources
								</h3>
								<p className="text-gray-600">
									Nuerova acts directly on files and communication threads you connect. We vectorize updates in real time, guaranteeing agents always reason over active parameters.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-gray-50">
							<CardContent className="pt-6">
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									No training on your data
								</h3>
								<p className="text-gray-600">
									Your team's intelligence stays proprietary. Nuerova utilizes enterprise channels and zero-data-retention prompts so your content never leaks to public LLM models.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-gray-50">
							<CardContent className="pt-6">
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Visual Workflows
								</h3>
								<p className="text-gray-600">
									Define trigger-action sequences using custom agents and logic checks. No complex programming or scripting required to build robust operational playbooks.
								</p>
							</CardContent>
						</Card>

						<Card className="bg-gray-50">
							<CardContent className="pt-6">
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Unlimited Seats
								</h3>
								<p className="text-gray-600">
									No per-seat charges. Keep engineering, operations, success, and product aligned under a unified data governance model without licensing friction.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				<div className="bg-blue-600 rounded-lg p-12 text-center text-white">
					<h2 className="text-3xl font-bold mb-4 font-sans tracking-tight">
						Let's Rebuild Your Team's Context
					</h2>
					<p className="text-xl mb-8 text-blue-100">
						Reach out to see how Nuerova can organize your department knowledge and deploy secure workflows.
					</p>
				</div>
			</div>
		</div>
	);
}

import { Navigation } from "@/components/Navigation";
import { Zap, Database, Cpu, Shield, BarChart3, HelpCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { WhoThisIsFor } from "@/components/FunnelCTA";
import { trackCtaClick } from "@/lib/analytics";
import { AnswerBlock, FactBox, PageFAQ } from "@/components/AeoGeoBlocks";

export function HowItWorksPage() {
	useSEO({
		title: "How Nuerova Works — Context Ingestion to Governed Action | Nuerova",
		description: "See how Nuerova ingests fragmented team data, organizes it into logical knowledge clusters, deploys custom-instructed agent helpers, and triggers visual workflows.",
	});

	const steps = [
		{
			step: "01",
			title: "You connect your operational stack",
			story: "Link your file systems, repository hosts, and communication hubs. Nuerova integrates with Google Workspace, Slack, Jira, Confluence, and custom REST API endpoints to centralize scattered context.",
			detail: "Setup takes under an hour. Your original files stay where they are.",
			icon: <Zap className="h-6 w-6 text-white" />,
			color: "bg-blue-600",
		},
		{
			step: "02",
			title: "Organize context into Scoped Clusters",
			story: "Instead of flat indices, partition your data into isolated knowledge clusters (e.g. #customer-support, #ops-playbooks, #eng-architecture). Real-time edits in original files are continuously vectorized and updated.",
			detail: " Granular RBAC permissions guarantee complete data isolation.",
			icon: <Database className="h-6 w-6 text-white" />,
			color: "bg-indigo-600",
		},
		{
			step: "03",
			title: "Configure custom Agent Personas",
			story: "Instruct custom agent personas with precise guidelines and workspace clearances. Define their roles, behavior, and API skills from your company's skill registry. They handle routine tasks using real, indexed context.",
			detail: "Supports custom prompts and dedicated model parameters.",
			icon: <Cpu className="h-6 w-6 text-white" />,
			color: "bg-violet-600",
		},
		{
			step: "04",
			title: "Build reasoning workflows in the visual canvas",
			story: "Create trigger-action playbooks using Nuerova's visual editor. Instead of simple rule-based loops, steps run logical context checks before firing down-stream. This ensures agents reason through queries before executing.",
			detail: "Define custom condition branches based on semantic values.",
			icon: <Shield className="h-6 w-6 text-white" />,
			color: "bg-emerald-600",
		},
		{
			step: "05",
			title: "Validate staged actions in the Human Queue",
			story: "No automated action fires without governance. Agent outputs (e.g., ticket responses, database entries, drafted outreach) are held in the workspace queue for approval. Track reasoning trails, edit, send, or reject in one click.",
			detail: "Workspace admins receive alerts for escalations and overrides.",
			icon: <BarChart3 className="h-6 w-6 text-white" />,
			color: "bg-blue-600",
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
			<Navigation />

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Here's what happens after you connect your data.
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Nuerova continuously ingests context edits, updates scoped clusters, triggers custom agents, and stages visual automation tasks for human review.
					</p>
				</div>
				<div className="mb-16">
					<WhoThisIsFor
						items={[
							"Teams ready to move from manual checklists to monitored reasoning workflows",
							"Operations and Engineering leaders who require strict data isolation policies",
							"SaaS teams that want guided, rapid setup rather than weeks of manual integration",
						]}
					/>
				</div>
				<div className="mb-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<AnswerBlock
						question="How does Nuerova work?"
						answer="Nuerova works by connecting with your team's existing tools, organizing data into logically isolated knowledge clusters, deploying custom agent personas, and executing reasoning-guided visual playbooks under strict human validation."
						facts={[
							"Connect files and communications in minutes",
							"Partition indices into isolated clusters",
							"Validate every agent action prior to execution",
						]}
					/>
					<FactBox
						title="Setup facts"
						facts={[
							"Typical department onboarding takes under an hour.",
							"Teams can begin with a 7-day Teams trial.",
							"Nuerova leaves your original documents in their existing hubs.",
							"Human validation is mandatory before any downstream API action.",
						]}
					/>
				</div>

				<div className="relative max-w-3xl mx-auto">
					{/* Vertical connector line */}
					<div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />

					{steps.map((s, i) => (
						<div key={s.step} className={`relative flex gap-6 ${i < 4 ? "mb-10" : ""}`}>
							{/* Step circle */}
							<div className={`shrink-0 w-12 h-12 rounded-full ${s.color} flex items-center justify-center z-10 shadow-lg mt-1`}>
								{s.icon}
							</div>
							{/* Content card */}
							<div className="bg-white rounded-xl shadow-sm border border-blue-100 p-8 flex-1">
								<div className="flex items-center gap-3 mb-3">
									<span className="text-sm font-bold text-blue-500 font-mono tracking-wide">STAGE {s.step}</span>
								</div>
								<h3 className="font-bold text-2xl text-gray-900 mb-3">{s.title}</h3>
								<p className="text-gray-600 text-base leading-relaxed mb-4">{s.story}</p>
								<div className="bg-blue-50 rounded-lg px-4 py-3 inline-block border border-blue-100">
									<p className="text-sm font-semibold text-blue-700">{s.detail}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-14 grid md:grid-cols-3 gap-5">
					{[
						{
							title: "Guided onboarding",
							desc: "Most departments go live in under an hour with guided support from Nuerova engineers.",
						},
						{
							title: "Stack integration",
							desc: "Plugs into Slack, Confluence, Gmail, Jira, and CRM tools so data stays in your source systems.",
						},
						{
							title: "Flexible transition",
							desc: "Start with a single workspace cluster, then scale to department-level visual playbooks.",
						},
					].map(({ title, desc }) => (
						<div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
							<h2 className="text-base font-bold text-gray-900">{title}</h2>
							<p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
						</div>
					))}
				</div>
				<div className="mt-14">
					<PageFAQ
						title="How-it-works questions buyers ask"
						items={[
							{
								question: "Does Nuerova execute actions without approval?",
								answer:
									"No. Nuerova can draft updates, stage tickets, and generate emails, but the visual playbook is built around strict human approval. You approve, edit, or reject before anything executes.",
							},
							{
								question: "What files and sources can Nuerova index?",
								answer:
									"Nuerova indexes text-based data from file drives (Google Workspace, Office 365), chat rooms (Slack, Teams), development boards (Jira, GitHub), wikis (Notion, Confluence), and CSV/JSON file uploads.",
							},
							{
								question: "How fast can we launch our first custom agent?",
								answer:
									"You can connect a source and configure a custom-instructed agent persona in under 15 minutes inside the console.",
							},
						]}
					/>
				</div>

				<div className="mt-16 text-center max-w-2xl mx-auto">
					<p className="text-gray-500 italic text-base leading-relaxed bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
						"Nuerova doesn't just run blind automation - it analyzes event inputs against our actual documentation to think through each task before proposing an action. It's like having a secure, 24/7 coordinator for every workflow."
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link to="/contact">
							<Button
								size="lg"
								className="text-lg px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
								onClick={() =>
									trackCtaClick({
										cta_text: "Start Free Trial",
										cta_location: "how_it_works_bottom_cta",
										funnel_stage: "decision",
										target_url: "/contact",
									})
								}
							>
								Start Free Trial &rarr;
							</Button>
						</Link>
						<Link to="/security">
							<Button
								size="lg"
								variant="outline"
								className="text-lg px-8 border-gray-300 text-gray-700 hover:bg-gray-50 bg-white shadow-sm"
								onClick={() =>
									trackCtaClick({
										cta_text: "View Security",
										cta_location: "how_it_works_bottom_cta",
										funnel_stage: "consideration",
										target_url: "/security",
									})
								}
							>
								View Security Standards
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

import { Navigation } from "@/components/Navigation";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Database, Cpu, GitBranch, Shield, Eye, Settings, HelpCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { SiSalesforce, SiHubspot, SiSlack, SiGooglesheets, SiGmail, SiGooglecalendar } from "react-icons/si";
import { WhoThisIsFor } from "@/components/FunnelCTA";
import { trackCtaClick } from "@/lib/analytics";
import { AnswerBlock, FactBox, PageFAQ } from "@/components/AeoGeoBlocks";
import * as React from "react";

/* ── Reusable check list ── */
function CheckList({ items, color = "text-blue-600" }: { items: string[]; color?: string }) {
	return (
		<ul className="space-y-3">
			{items.map((item) => (
				<li key={item} className="flex items-start gap-3">
					<CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 ${color}`} />
					<span className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: item }} />
				</li>
			))}
		</ul>
	);
}

/* ── Mock UI card ── */
function MockCard({ children, bg = "bg-blue-50" }: { children: React.ReactNode; bg?: string }) {
	return (
		<div className={`${bg} rounded-2xl p-6 border border-white/60 shadow-sm`}>
			{children}
		</div>
	);
}

export function FeaturesPage() {
	useSEO({
		title: "Features — Scoped Clusters, Custom Agents & Governance | Nuerova",
		description: "Explore Nuerova features for team intelligence: scoped knowledge clusters, custom agent personas, visual workflow builders, validation queues, and audit logs.",
	});

	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			{/* Hero */}
			<section className="bg-gradient-to-b from-blue-50 to-white py-20 text-center px-6">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Built on the core primitives that organize and act on your team context.
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Every feature below exists to prevent knowledge fragmentation and automate department reasoning playbooks.
					</p>
				</div>
			</section>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-28">
				<WhoThisIsFor
					items={[
						"Departments where critical knowledge is trapped in Slack history or outdated wiki docs",
						"Teams looking to delegate routine reasoning steps to secure, context-aware agents",
						"Leaders who want complete execution audit maps and SOC-2 data governance",
					]}
				/>
				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<AnswerBlock
						question="What does Nuerova do?"
						answer="Nuerova is a team intelligence platform. It connects to your existing software (Slack, Jira, Google Drive, Confluence), organizes data into logically isolated knowledge clusters, deploys custom-instructed agent personas to query that context, and executes visual trigger-action workflows under strict human approval."
						facts={[
							"Scoped knowledge clusters",
							"Custom-instructed agent personas",
							"Visual workflow builder & skill registry",
						]}
					/>
					<FactBox
						title="Quote-ready product facts"
						facts={[
							"Nuerova runs on context-aware agents and scoped knowledge clusters.",
							"The platform supports Slack, Gmail, Confluence, Jira, and CRM connectors.",
							"Teams can start with a 7-day Teams trial (no credit card required).",
							"Granular role-based access control (RBAC) secures cluster permissions.",
						]}
					/>
				</div>

				{/* ── 1. Scoped Knowledge Clusters ── */}
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-4">
							Context Isolation
						</span>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Scoped Knowledge Clusters - with logical isolation
						</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">
							Do not feed all your company's data into a single global AI index. Nuerova lets you partition your knowledge into scoped clusters. Securely ingest data from specific channels or repositories so agents only access authorized domain context.
						</p>
						<CheckList
							color="text-blue-500"
							items={[
								"<strong>Dynamic Ingestion</strong> - connect Google Workspace, Confluence wikis, or Slack threads",
								"<strong>Logical Isolation</strong> - data stays isolated within your designated workspace borders",
								"<strong>Automated Vectorization</strong> - real-time source edits are parsed and synced into vector memory",
								"<strong>Scope Boundaries</strong> - enforce which agent or team has clearance to query specific clusters",
							]}
						/>
					</div>
					<MockCard bg="bg-blue-50/50">
						<div className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
							<Database className="h-4 w-4 text-blue-600" /> Active Context Sources
						</div>
						{[
							{ label: "#support-queries (Slack)", type: "Slack Channel", status: "Online", details: "Last indexed 2 min ago" },
							{ label: "Architecture Specs (GitHub)", type: "Git Repository", status: "Online", details: "Last indexed 15 min ago" },
							{ label: "Ops Handbooks (Confluence)", type: "Wiki Docs", status: "Online", details: "Last indexed 1 hour ago" },
						].map(({ label, type, status, details }) => (
							<div key={label} className="bg-white rounded-lg p-3 border border-gray-200 mb-3 text-xs flex justify-between items-center shadow-sm">
								<div>
									<div className="font-bold text-gray-800">{label}</div>
									<div className="text-gray-400 mt-0.5">{type} · {details}</div>
								</div>
								<span className="px-2 py-0.5 bg-green-100 text-green-700 rounded font-semibold">{status}</span>
							</div>
						))}
						<div className="mt-4 border-t pt-4 flex justify-between items-center">
							<span className="text-sm font-bold text-gray-800">Cluster Status: SECURE</span>
							<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">Workspace isolated</span>
						</div>
					</MockCard>
				</div>

				{/* ── 2. Custom Agent Personas ── */}
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<MockCard bg="bg-indigo-50/50">
						<div className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
							<Cpu className="h-4 w-4 text-indigo-600" /> Agent Profile: TechnicalHelper
						</div>
						<div className="space-y-4">
							<div className="bg-white rounded-lg p-4 border border-gray-200 text-xs">
								<div className="font-bold text-gray-800 mb-1">System Prompt Context:</div>
								<p className="text-gray-600 italic">"You are an assistant for the engineering department. Query the #eng-architecture cluster to analyze root cause issues."</p>
							</div>
							<div className="bg-white rounded-lg p-4 border border-gray-200 text-xs space-y-2">
								<div className="font-bold text-gray-800">Assigned Skills:</div>
								<div className="flex flex-wrap gap-1.5 font-mono">
									<span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">QueryArchitectureIndex</span>
									<span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">DraftJiraTicket</span>
									<span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">PostSlackUpdate</span>
								</div>
							</div>
						</div>
					</MockCard>
					<div>
						<span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-widest mb-4">
							Agent Personas
						</span>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Custom Agent Personas - instructed with precise skills
						</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">
							Deploy specialized agents for distinct department goals. Define system prompts, specify memory scope accesses, and assign custom API skills from your company's registry.
						</p>
						<CheckList color="text-indigo-600" items={[
							"Custom system instructions to enforce alignment, response style, and tone",
							"Assign specific execution skills (e.g. database access, email drafts, calendar writes)",
							"Monitor latency, token usage, and costs directly in the workspace console",
							"Easily clone configurations to deploy multiple specialized agents in minutes",
						]} />
					</div>
				</div>

				{/* ── 3. Visual Workflow Builder ── */}
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-widest mb-4">
							Workflow Builder
						</span>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Visual drag-and-drop workflow builder with reasoning logic
						</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">
							Build your own playbooks without touching code. Triggers execute agent reasoning blocks that check conditions prior to calling downstream actions - no dumb automation loops.
						</p>
						<CheckList color="text-purple-600" items={[
							"<strong>Step types:</strong> Query Cluster, Run Reasoning, Stage Email, Trigger API, Slack DM",
							"<strong>Condition checks:</strong> Branch based on semantic classification (e.g., ticket complexity, priority)",
							"Clone and customize workflow templates or build from scratch in the canvas",
							"Variable syntax to pass event outputs between steps seamlessly",
						]} />
					</div>
					<MockCard bg="bg-purple-50">
						<div className="text-sm font-semibold text-gray-700 mb-4">Workflow Blueprint</div>
						<div className="space-y-2">
							{[
								{ icon: "⚡", label: "Trigger: New Customer Ticket", sub: "Zendesk API Hook", color: "border-blue-300" },
								{ icon: "🧠", label: "Agent Reason: Query Cluster", sub: "BillingHelper Persona", color: "border-purple-300" },
							].map((s, i) => (
								<div key={i} className={`flex items-center gap-3 p-3 bg-white rounded-lg border ${s.color} text-sm`}>
									<span className="text-lg">{s.icon}</span>
									<div>
										<div className="font-medium text-gray-800">{s.label}</div>
										<div className="text-xs text-gray-400">{s.sub}</div>
									</div>
								</div>
							))}
							<div className="grid grid-cols-2 gap-2 mt-1">
								<div className="p-3 bg-green-50 border border-green-300 rounded-lg text-xs">
									<div className="font-semibold text-green-700 mb-1">✓ Match: Billing</div>
									<div className="text-gray-600">Draft response email + stage in approval queue</div>
								</div>
								<div className="p-3 bg-orange-50 border border-orange-300 rounded-lg text-xs">
									<div className="font-semibold text-orange-700 mb-1">✗ No Match: Complex Tech</div>
									<div className="text-gray-600">Escalate & notify Support Leads on Slack</div>
								</div>
							</div>
						</div>
					</MockCard>
				</div>

				{/* ── 4. Human Approval Queue ── */}
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<MockCard bg="bg-teal-50">
						<div className="text-sm font-semibold text-gray-700 mb-4">Pending Validation Queue</div>
						{[
							{
								target: "Email draft to John Doe", arr: "Acme Corp", type: "Billing inquiry follow-up",
								preview: "Hi John, regarding invoice #4051, our records show the card token failed. Here is the link to update...",
								actions: [
									{ label: "Approve", cls: "bg-blue-600 text-white" },
									{ label: "Edit", cls: "bg-gray-100 text-gray-700" },
									{ label: "Reject", cls: "bg-gray-100 text-gray-500" },
								],
							},
							{
								target: "Post Slack Alert in #eng-ops", arr: "GitHub Hook", type: "Post-incident summary draft",
								preview: "Critical Alert: Postgres connection pool hit limits. Root cause: connection timeout setting in production...",
								actions: [
									{ label: "Approve", cls: "bg-blue-600 text-white" },
									{ label: "Edit", cls: "bg-gray-100 text-gray-700" },
									{ label: "Reject", cls: "bg-gray-100 text-gray-500" },
								],
							},
						].map(({ target, arr, type, preview, actions }) => (
							<div key={target} className="bg-white rounded-xl p-4 mb-3 border border-gray-100">
								<div className="flex justify-between items-start mb-2">
									<div>
										<div className="font-semibold text-sm text-gray-800">{target}</div>
										<div className="text-xs text-gray-500">{arr} · {type}</div>
									</div>
								</div>
								<p className="text-xs text-gray-600 italic mb-3 line-clamp-2">"{preview}"</p>
								<div className="flex gap-2">
									{actions.map(({ label, cls }) => (
										<button key={label} className={`text-xs px-3 py-1.5 rounded-lg font-semibold ${cls}`}>{label}</button>
									))}
								</div>
							</div>
						))}
					</MockCard>
					<div>
						<span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-widest mb-4">
							Governance Controls
						</span>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							AI drafts actions. Humans validate outcomes.
						</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">
							Ensure complete safety. Every action proposed by Nuerova agents (emails, Slack updates, ticket modifications) lands in a centralized workspace queue. Review the reasoning path and modify text before it fires.
						</p>
						<CheckList color="text-teal-600" items={[
							"Operator validation states: <strong>Approve, Edit, Reject, Escalate</strong>",
							"Escalated events notify workspace admins directly and halt downstream tasks",
							"Detailed reasoning trail exposes which clusters were queried to draft the action",
							"Comprehensive audit logging tracks who verified each event and when",
						]} />
					</div>
				</div>

				{/* ── 5. Governance & Audit Logs ── */}
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-widest mb-4">
							Audit Trail
						</span>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Complete traceability with tamper-resistant audit logs
						</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">
							Nuerova is built for governance-first organizations. Every trigger-action sequence creates an immutable timeline detailing sources queried, agents invoked, latency, and operators.
						</p>
						<CheckList color="text-orange-500" items={[
							"SOC2-ready compliance logs for security audits",
							"Searchable execution timelines with token cost tracking",
							"Custom log retention policies (30 days on Starter/Teams, 90 days on Enterprise)",
							"Admin permissions lock to restrict audit logs to certified officers",
						]} />
					</div>
					<MockCard bg="bg-orange-50/50">
						<div className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
							<Eye className="h-4 w-4 text-orange-600" /> Audit Log Console
						</div>
						<div className="bg-white rounded-xl p-4 border border-orange-100 mb-3 space-y-3 font-mono text-[11px] text-gray-600">
							<div className="flex justify-between border-b pb-1">
								<span className="text-gray-400">Timestamp</span>
								<span className="text-gray-400">Event / Agent</span>
							</div>
							<div className="flex justify-between">
								<span>2026-06-07 09:50:12</span>
								<span className="text-blue-600 font-semibold">ZendeskTrigger &rarr; Query #support</span>
							</div>
							<div className="flex justify-between">
								<span>2026-06-07 09:50:14</span>
								<span className="text-indigo-600 font-semibold">Agent:BillingHelper (24ms)</span>
							</div>
							<div className="flex justify-between">
								<span>2026-06-07 09:51:02</span>
								<span className="text-green-600 font-semibold">Operator:PriyaPatel Approved Email</span>
							</div>
							<div className="flex justify-between">
								<span>2026-06-07 09:51:03</span>
								<span className="text-gray-800">Email Dispatched Successfully</span>
							</div>
						</div>
					</MockCard>
				</div>

				{/* ── 6. Integrations Hub ── */}
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<MockCard bg="bg-indigo-50">
						<div className="text-sm font-semibold text-gray-700 mb-4">Integrations Hub</div>
						<div className="space-y-3">
							{[
								{ icon: <SiSlack className="w-6 h-6 text-[#E01E5A]" />, name: "Slack", status: "Active", detail: "Workspace alerts & slash-command indexing" },
								{ icon: <SiSalesforce className="w-6 h-6 text-[#00A1E0]" />, name: "Salesforce CRM", status: "Connected", detail: "Sync account metadata & renewal dates" },
								{ icon: <SiHubspot className="w-6 h-6 text-[#FF7A59]" />, name: "HubSpot", status: "Connected", detail: "Deal timelines & contact scopes" },
								{ icon: <SiGmail className="w-6 h-6 text-[#EA4335]" />, name: "Gmail API", status: "Active", detail: "Staging drafted outreach emails" },
								{ icon: <SiGooglecalendar className="w-6 h-6 text-[#4285F4]" />, name: "Google Calendar", status: "Connected", detail: "Auto-indexing team meeting recaps" },
							].map(({ icon, name, status, detail }) => (
								<div key={name} className="bg-white rounded-xl p-3 flex items-center gap-3 border border-white/60">
									<div className="flex-shrink-0 flex items-center justify-center w-8 h-8">{icon}</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-2">
											<span className="font-semibold text-sm text-gray-800">{name}</span>
											<span className="text-xs px-2 py-0.5 rounded-full font-semibold text-green-700 bg-green-50">{status}</span>
										</div>
										<div className="text-xs text-gray-400 truncate">{detail}</div>
									</div>
								</div>
							))}
						</div>
					</MockCard>
					<div>
						<span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-widest mb-4">
							Integrations
						</span>
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Plugs into your core operational stack
						</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">
							Nuerova is built to integrate directly with your existing infrastructure. Sync and index data from file stores, trackers, CRMs, and email hubs within minutes.
						</p>
						<CheckList color="text-indigo-600" items={[
							"<strong>Slack & Microsoft Teams</strong> - bi-directional alerts, event updates, and custom search triggers",
							"<strong>CRM Sync</strong> - import Salesforce opportunities, HubSpot deals, or Pipedrive profiles",
							"<strong>Documentation Wikis</strong> - index Confluence directories, Notion spaces, or Google Docs",
							"<strong>File Import</strong> - CSV and JSON file upload support built directly into workspace panels",
						]} />
					</div>
				</div>

				{/* ── Comparison table ── */}
				<div>
					<div className="text-center mb-10">
						<h2 className="text-3xl font-bold text-gray-900 mb-3">
							How Nuerova Stacks Up
						</h2>
						<p className="text-gray-600">See how Nuerova compares to static wikis and generic chatbots.</p>
					</div>
					<div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
						<table className="w-full text-left border-collapse min-w-[640px]">
							<thead>
								<tr className="bg-gray-50 border-b border-gray-200">
									<th className="p-5 text-sm font-semibold text-gray-500 w-1/3">Primitive / Feature</th>
									<th className="p-5 text-sm font-bold text-blue-600 bg-blue-50/60 w-1/3">Nuerova</th>
									<th className="p-5 text-sm font-semibold text-gray-500 w-1/3">Static Wikis (Notion / Confluence)</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100">
								{[
									["Scoped Memory Clusters", "✓ Logically isolated data indices", "✗ Flat file directories"],
									["Custom Agent Personas", "✓ Configured with specific prompts & skills", "✗ Static text reader"],
									["Visual Workflow Builder", "✓ Drag-and-drop triggers & checks", "✗ Static document templates"],
									["Human Validation Queue", "✓ Actions staged before firing", "✗ Manual copying and pasting"],
									["Downstream API Execution", "✓ Auto-send emails or Slack alerts", "✗ Manual updates required"],
									["Tamper-Resistant Audit Logs", "✓ SOC2-ready execution history", "✗ Standard revision history"],
									["Setup speed", "Under a hour", "Months of manual organization"],
									["Seat Licensing Fees", "✓ None (Unlimited seats included)", "Charged per user (High monthly cost)"],
								].map(([feature, r360, enterprise]) => (
									<tr key={feature}>
										<td className="p-5 text-sm font-medium text-gray-800">{feature}</td>
										<td className="p-5 bg-blue-50/30 text-sm font-semibold text-green-700">{r360}</td>
										<td className="p-5 text-sm text-gray-500">{enterprise}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div className="grid md:grid-cols-3 gap-5">
					{[
						{
							title: "Guided setup support",
							desc: "Integrate your data sources, configure clusters, and launch your first agent in under an hour.",
						},
						{
							title: "Context-first workflows",
							desc: "Keep your existing tools as the source of truth while Nuerova handles the automation reasoning layers.",
						},
						{
							title: "No seat fees",
							desc: "Invite your entire team, ops team, and management to collaborate without worrying about seat pricing.",
						},
					].map(({ title, desc }) => (
						<div key={title} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
							<h2 className="text-base font-bold text-gray-900">{title}</h2>
							<p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
						</div>
					))}
				</div>
				<PageFAQ
					title="Feature questions buyers ask"
					items={[
						{
							question: "What are Nuerova's core components?",
							answer:
								"Nuerova is built on four core components: scoped knowledge clusters, custom-instructed agent personas, a visual drag-and-drop workflow builder, and a human approval queue with complete audit trail maps.",
						},
						{
							question: "Does Nuerova train public models on my data?",
							answer:
								"No. We enforce strict data security. Nuerova utilizes commercial API channels with zero-data-retention options. Your knowledge clusters and inputs are never used to train public LLM models.",
						},
						{
							question: "How is Nuerova different from generic chat assistants?",
							answer:
								"Generic chatbots have no long-term memory, require manual copy-pasting, and cannot execute tasks. Nuerova creates secure, connected memory partitions (clusters) and links them to visual playbooks that draft and execute actual tasks.",
						},
					]}
				/>

				{/* ── CTA ── */}
				<div className="bg-gray-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
					<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
					<h2 className="text-3xl font-bold mb-4">See context-aware agents in action.</h2>
					<p className="text-gray-300 mb-8 max-w-xl mx-auto">
						Start a free trial - 7 days of Teams access, no credit card required. Invite your entire department and start organizing context today.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link to="/contact">
							<Button
								size="lg"
								className="text-lg px-8 bg-blue-500 hover:bg-blue-600 border-none text-white font-semibold shadow-lg"
								onClick={() =>
									trackCtaClick({
										cta_text: "Start Free Trial",
										cta_location: "features_bottom_cta",
										funnel_stage: "decision",
										target_url: "/contact",
									})
								}
							>
								Start Free Trial &rarr;
							</Button>
						</Link>
						<Link to="/pricing">
							<Button
								size="lg"
								variant="outline"
								className="text-lg px-8 border-white/30 text-white hover:bg-white/10 bg-transparent"
								onClick={() =>
									trackCtaClick({
										cta_text: "View pricing",
										cta_location: "features_bottom_cta",
										funnel_stage: "consideration",
										target_url: "/pricing",
									})
								}
							>
								View pricing
							</Button>
						</Link>
					</div>
				</div>

			</div>
		</div>
	);
}

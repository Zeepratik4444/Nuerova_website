import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	CheckCircle2, Clock, Target, Users, BookOpen, ArrowRight,
	Database, Cpu, GitBranch, ShieldAlert, Sparkles, Code
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { PersonaCards } from "@/components/sections/PersonaCards";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { Pricing } from "@/components/sections/Pricing";
import { useSEO } from "@/hooks/useSEO";
import { SiSalesforce, SiHubspot, SiSlack, SiGooglesheets, SiGooglecalendar, SiGmail } from "react-icons/si";

const TeamsIcon = () => (
	<svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.19 7.01C20.74 7.01 22 5.75 22 4.2S20.74 1.39 19.19 1.39 16.38 2.65 16.38 4.2s1.26 2.81 2.81 2.81z" fill="#1275e2" />
		<path d="M15 7.5H23v7.5a4 4 0 01-4 4h0a4 4 0 01-4-4V7.5z" fill="#1275e2" />
		<path d="M13.09 7.5H9.5v8.44A4.06 4.06 0 0013.56 20h0a4 4 0 003.44-1.94V11.5A4 4 0 0013.09 7.5z" fill="#0b58b0" />
		<circle cx="10.44" cy="4.44" r="2.94" fill="#0b58b0" />
		<path d="M2 8.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0z" fill="#1275e2" />
		<path d="M1 17c0 2.76 2.24 5 5 5h6c2.76 0 5-2.24 5-5v-1H1v1z" fill="#1275e2" />
		<path d="M12.5 8.5H1v8.5c0 2.76 2.24 5 5 5h6c2.76 0 5-2.24 5-5v-4a4.5 4.5 0 00-4.5-4.5z" fill="#0b58b0" />
	</svg>
);

const OutlookIcon = () => (
	<svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14 2H7a1 1 0 00-1 1v4H2v10h4v4a1 1 0 001 1h14a1 1 0 001-1V8l-8-6z" fill="#1275e2" />
		<path d="M14 2v6h6L14 2z" fill="#A0C3FF" />
		<path d="M2 7h10v10H2V7z" fill="#1275e2" />
		<path d="M7.5 9.5a3 3 0 100 5 3 3 0 000-5z" fill="white" />
	</svg>
);

export function HomePage() {
	useSEO({
		title: "Nuerova — Scoped Knowledge Clusters & Team Intelligence Platforms",
		description: "Nuerova centralizes department knowledge in scoped clusters, deploys context-aware agent helpers, and builds secure trigger-action automations so your momentum is never lost.",
	});

	// Active tab in mock console
	const [activeCluster, setActiveCluster] = useState<"support" | "ops" | "eng">("support");

	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			{/* ── HERO ── */}
			<section className="bg-gradient-to-b from-blue-50 to-white pt-20 pb-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					{/* Competitive badge */}
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8 border border-blue-200">
						<Sparkles className="h-4 w-4 text-blue-600 animate-pulse" />
						Shared Team Intelligence & Scoped Contextual Agents
					</div>

					<h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
						Your team's intelligence should not
						<br />
						<span className="text-blue-600">live in someone's chat history.</span>
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
						Nuerova centralizes department knowledge in scoped clusters, deploys context-aware agent helpers, and builds secure trigger-action automations so your momentum is never lost.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
						<Link to="/contact">
							<Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
								Start Free Trial - No Credit Card
							</Button>
						</Link>
						<Link to="/how-it-works">
							<Button size="lg" variant="outline" className="text-lg px-8 border-blue-200 hover:bg-blue-50">
								See how it works
							</Button>
						</Link>
					</div>

					{/* ── TEAM INTELLIGENCE CONSOLE PREVIEW ── */}
					<div className="max-w-5xl mx-auto bg-gray-950 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden text-left font-sans text-gray-300">
						{/* Window Header */}
						<div className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800">
							<div className="flex items-center gap-2">
								<span className="w-3 h-3 rounded-full bg-red-500"></span>
								<span className="w-3 h-3 rounded-full bg-yellow-500"></span>
								<span className="w-3 h-3 rounded-full bg-green-500"></span>
								<span className="ml-4 text-sm font-semibold text-gray-400">Nuerova Workspace Console</span>
							</div>
							<div className="text-xs bg-gray-800 px-3 py-1 rounded text-blue-400 border border-blue-900 font-mono">
								status: active (SOC-2 mode)
							</div>
						</div>

						{/* Console Layout */}
						<div className="grid md:grid-cols-[250px_1fr] min-h-[420px]">
							{/* Console Sidebar */}
							<div className="bg-gray-950 p-4 border-r border-gray-800 flex flex-col gap-6">
								<div>
									<div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Knowledge Clusters</div>
									<div className="space-y-1">
										{[
											{ id: "support", label: "#customer-support", icon: "📁" },
											{ id: "ops", label: "#ops-playbooks", icon: "📁" },
											{ id: "eng", label: "#eng-architecture", icon: "📁" }
										].map((cluster) => (
											<button
												key={cluster.id}
												onClick={() => setActiveCluster(cluster.id as any)}
												className={`w-full text-left px-3 py-2 rounded text-sm transition-colors flex items-center gap-2 ${
													activeCluster === cluster.id
														? "bg-blue-950/50 text-blue-400 border border-blue-900 font-semibold"
														: "hover:bg-gray-900 text-gray-400"
												}`}
											>
												<span>{cluster.icon}</span>
												{cluster.label}
											</button>
										))}
									</div>
								</div>

								<div>
									<div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Linked Sources</div>
									<div className="space-y-2 text-xs text-gray-400 px-2 font-mono">
										<div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Zendesk Guide</div>
										<div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Slack Support</div>
										<div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Jira Architecture</div>
									</div>
								</div>
							</div>

							{/* Console Content Area */}
							<div className="p-6 bg-gray-900/60 flex flex-col gap-6">
								{activeCluster === "support" && (
									<>
										<div className="border-b border-gray-800 pb-4">
											<h3 className="text-lg font-bold text-white mb-1">Cluster: #customer-support</h3>
											<p className="text-xs text-gray-400">Contextual index updated 3 minutes ago. Connected to Zendesk & Slack.</p>
										</div>

										<div className="bg-gray-900/90 rounded-xl border border-gray-800 p-4 space-y-4">
											<div className="flex items-center justify-between text-xs border-b border-gray-800 pb-2">
												<span className="font-mono text-gray-500">EVENT_TRIGGER: Incoming Billing Inquiry</span>
												<span className="bg-blue-900/40 text-blue-400 px-2 py-0.5 rounded border border-blue-800 text-[10px] font-mono">Agent: BillingHelper</span>
											</div>
											<div className="space-y-2 text-sm leading-relaxed">
												<div className="flex gap-2">
													<span className="text-blue-500 font-mono font-bold">&gt;_ REASONING:</span>
													<p className="text-gray-300">
														Analyzing query: customer is asking why invoice #4051 failed. Cross-referencing billing logs cluster. Found failed payment attempt due to expired card token on 2026-06-05.
													</p>
												</div>
												<div className="flex gap-2">
													<span className="text-emerald-500 font-mono font-bold">&gt;_ ACT:</span>
													<p className="text-gray-300">
														Drafted personalized response clarifying the failed transaction, linking secure self-service portal, and staging automated sequence holds. Pending review.
													</p>
												</div>
											</div>
										</div>

										{/* Automation preview */}
										<div className="bg-gray-950/60 rounded-xl border border-gray-800 p-4">
											<div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
												<GitBranch className="h-4 w-4 text-blue-500" /> Active Automation Flow
											</div>
											<div className="flex flex-wrap items-center gap-2 text-xs font-mono">
												<span className="bg-gray-800 px-2 py-1 rounded">Trigger: Billing Failure</span>
												<span className="text-gray-600">&rarr;</span>
												<span className="bg-gray-800 px-2 py-1 rounded text-blue-400 border border-blue-900">Query Cluster context</span>
												<span className="text-gray-600">&rarr;</span>
												<span className="bg-gray-800 px-2 py-1 rounded text-green-400 border border-green-950">Draft Slack notice & Email</span>
											</div>
										</div>
									</>
								)}

								{activeCluster === "ops" && (
									<>
										<div className="border-b border-gray-800 pb-4">
											<h3 className="text-lg font-bold text-white mb-1">Cluster: #ops-playbooks</h3>
											<p className="text-xs text-gray-400">Contextual index updated 12 minutes ago. Connected to Confluence & Notion.</p>
										</div>

										<div className="bg-gray-900/90 rounded-xl border border-gray-800 p-4 space-y-4">
											<div className="flex items-center justify-between text-xs border-b border-gray-800 pb-2">
												<span className="font-mono text-gray-500">EVENT_TRIGGER: Employee Onboarding</span>
												<span className="bg-blue-900/40 text-blue-400 px-2 py-0.5 rounded border border-blue-800 text-[10px] font-mono">Agent: OpsCoordinator</span>
											</div>
											<div className="space-y-2 text-sm leading-relaxed">
												<div className="flex gap-2">
													<span className="text-blue-500 font-mono font-bold">&gt;_ REASONING:</span>
													<p className="text-gray-300">
														Analyzing handbook cluster. Extracting system provisioning lists for engineering hires. Drafting ticket requests for hardware setup.
													</p>
												</div>
												<div className="flex gap-2">
													<span className="text-emerald-500 font-mono font-bold">&gt;_ ACT:</span>
													<p className="text-gray-300">
														Generated SaaS permission draft, created team introduction Slack message draft, and pinned IT access tickets.
													</p>
												</div>
											</div>
										</div>

										<div className="bg-gray-950/60 rounded-xl border border-gray-800 p-4">
											<div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
												<GitBranch className="h-4 w-4 text-blue-500" /> Active Automation Flow
											</div>
											<div className="flex flex-wrap items-center gap-2 text-xs font-mono">
												<span className="bg-gray-800 px-2 py-1 rounded">Trigger: HR Platform Hook</span>
												<span className="text-gray-600">&rarr;</span>
												<span className="bg-gray-800 px-2 py-1 rounded text-blue-400 border border-blue-900">Query Org Handbooks</span>
												<span className="text-gray-600">&rarr;</span>
												<span className="bg-gray-800 px-2 py-1 rounded text-green-400 border border-green-950">Provision Slack & Jira invite</span>
											</div>
										</div>
									</>
								)}

								{activeCluster === "eng" && (
									<>
										<div className="border-b border-gray-800 pb-4">
											<h3 className="text-lg font-bold text-white mb-1">Cluster: #eng-architecture</h3>
											<p className="text-xs text-gray-400">Contextual index updated 1 hour ago. Connected to GitHub & Jira.</p>
										</div>

										<div className="bg-gray-900/90 rounded-xl border border-gray-800 p-4 space-y-4">
											<div className="flex items-center justify-between text-xs border-b border-gray-800 pb-2">
												<span className="font-mono text-gray-500">EVENT_TRIGGER: New Critical Issue Created</span>
												<span className="bg-blue-900/40 text-blue-400 px-2 py-0.5 rounded border border-blue-800 text-[10px] font-mono">Agent: CodeArchitect</span>
											</div>
											<div className="space-y-2 text-sm leading-relaxed">
												<div className="flex gap-2">
													<span className="text-blue-500 font-mono font-bold">&gt;_ REASONING:</span>
													<p className="text-gray-300">
														Cross-referencing GitHub issue #891 regarding Postgres database pool timeouts. Checking the architecture docs cluster. Locating connection config schemas.
													</p>
												</div>
												<div className="flex gap-2">
													<span className="text-emerald-500 font-mono font-bold">&gt;_ ACT:</span>
													<p className="text-gray-300">
														Identified pool limit max settings (10 connections). Drafted root cause explanation with recommendations to double active pool size. Stage alert to Slack.
													</p>
												</div>
											</div>
										</div>

										<div className="bg-gray-950/60 rounded-xl border border-gray-800 p-4">
											<div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
												<GitBranch className="h-4 w-4 text-blue-500" /> Active Automation Flow
											</div>
											<div className="flex flex-wrap items-center gap-2 text-xs font-mono">
												<span className="bg-gray-800 px-2 py-1 rounded">Trigger: GitHub Bug Label</span>
												<span className="text-gray-600">&rarr;</span>
												<span className="bg-gray-800 px-2 py-1 rounded text-blue-400 border border-blue-900">Search DB config specs</span>
												<span className="text-gray-600">&rarr;</span>
												<span className="bg-gray-800 px-2 py-1 rounded text-green-400 border border-green-950">Post root-cause analysis</span>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── PERSONAS ── */}
			<PersonaCards />

			{/* ── PROBLEM / Current Reality ── */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-widest mb-4">
							The Fragmented Reality
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Momentum is lost when knowledge is fragmented.
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Modern departments communicate across dozen of tools - but the context needed to do actual work remains scattered and locked away.
						</p>
					</div>

					{/* Stats row */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
						{[
							{ num: "73%", label: "of critical department context remains trapped in private chat threads and inbox silos." },
							{ num: "40 hours", label: "per employee lost annually searching for documentation or recreating scripts." },
							{ num: "6 months", label: "of team momentum lost when a senior engineer or domain owner leaves the company." },
						].map((s) => (
							<div key={s.num} className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow">
								<div className="text-3xl font-extrabold text-blue-600 mb-3">{s.num}</div>
								<div className="text-sm text-gray-600 leading-snug">{s.label}</div>
							</div>
						))}
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-l-4 border-l-red-500 shadow-sm">
							<CardHeader>
								<Clock className="h-10 w-10 text-red-500 mb-2" />
								<CardTitle className="text-lg font-bold">Time Lost to Rediscovery</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 text-sm leading-relaxed">
									Teams waste hours searching Slack or Confluence trying to remember how a specific system behaves, how a process runs, or why a critical decision was made.
								</p>
							</CardContent>
						</Card>
						<Card className="border-l-4 border-l-amber-500 shadow-sm">
							<CardHeader>
								<Target className="h-10 w-10 text-amber-500 mb-2" />
								<CardTitle className="text-lg font-bold">Unreliable Automations</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 text-sm leading-relaxed">
									Generic workflows trigger without context, leading to spammy alerts and broken integrations. Nuerova ensures automations reasoning checks prior to taking action.
								</p>
							</CardContent>
						</Card>
						<Card className="border-l-4 border-l-slate-400 shadow-sm">
							<CardHeader>
								<Users className="h-10 w-10 text-slate-500 mb-2" />
								<CardTitle className="text-lg font-bold">Context Silos</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 text-sm leading-relaxed">
									Critical knowledge is hoarded by a few individuals. When they are busy or leave the organization, the rest of the department stalls trying to pick up the pieces.
								</p>
							</CardContent>
						</Card>
					</div>

					<div className="mt-16 text-center max-w-2xl mx-auto">
						<p className="text-2xl font-bold text-gray-900">You don't need to hire 3 more operations managers.</p>
						<p className="text-gray-600 mt-3 text-lg">
							You need a shared context platform. Nuerova gives your existing team AI-powered foresight and visual automations - so no information goes stale again.
						</p>
					</div>
				</div>
			</section>

			{/* ── HOW IT WORKS (Preview) ── */}
			<section className="py-20 bg-blue-50" id="how-it-works">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
						From context ingest to governed action in 5 stages.
					</h2>
					<div className="flex flex-wrap justify-center gap-4 mb-8">
						{[
							"1. Connect Stack",
							"2. Scoped Clusters",
							"3. Train Agents",
							"4. Design Workflows",
							"5. Governed Action"
						].map((step, i) => (
							<div key={i} className="bg-white px-5 py-3 rounded-full shadow-sm font-semibold text-gray-700 border border-blue-100 flex items-center gap-3">
								<span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">{i + 1}</span>
								{step}
							</div>
						))}
					</div>
					<Link to="/how-it-works">
						<Button variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50">
							See how it works under the hood &rarr;
						</Button>
					</Link>
				</div>
			</section>

			{/* ── FEATURES (Preview) ── */}
			<section className="py-20 bg-white" id="features">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Everything you need. Nothing you don't.
						</h2>
						<p className="text-gray-600 max-w-xl mx-auto">
							All the features you need to manage context clusters, configure custom agents, and govern integrations.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8 mb-12">
						{[
							{ icon: <Database className="h-8 w-8 text-blue-600" />, name: "Scoped Memory Clusters", desc: "Keep team knowledge segregated. Securely ingest data from specific repositories, channels, and logs." },
							{ icon: <Cpu className="h-8 w-8 text-blue-600" />, name: "Context-Aware Agents", desc: "Configure custom personas with precise instructions, skills, and memory scopes." },
							{ icon: <GitBranch className="h-8 w-8 text-blue-600" />, name: "Visual Automations", desc: "Build automated, audited workflows that run logic checks and draft actions before execution." },
						].map((f) => (
							<Card key={f.name} className="hover:-translate-y-1 transition-transform duration-200 border-gray-200 shadow-sm">
								<CardHeader>
									<div className="flex items-center gap-3 mb-1">
										{f.icon}
										<CardTitle className="text-lg font-bold">{f.name}</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="text-center">
						<Link to="/features">
							<Button variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50">
								Explore all features & comparison &rarr;
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* ── INTEGRATIONS ── */}
			<section className="py-20 bg-gray-900 text-white animate-fade-in" id="integrations">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Connects with the tools your team already uses.
					</h2>
					<p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
						Plug in your files, communication platforms, and development trackers in minutes.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
						{[
							{ name: "Salesforce", icon: <SiSalesforce className="w-8 h-8 text-[#00A1E0]" /> },
							{ name: "HubSpot", icon: <SiHubspot className="w-8 h-8 text-[#FF7A59]" /> },
							{ name: "Slack", icon: <SiSlack className="w-8 h-8 text-white" /> },
							{ name: "Microsoft Teams", icon: <TeamsIcon /> },
							{ name: "Google Sheets", icon: <SiGooglesheets className="w-8 h-8 text-[#34A853]" /> },
							{ name: "Google Calendar", icon: <SiGooglecalendar className="w-8 h-8 text-[#4285F4]" /> },
							{ name: "Gmail", icon: <SiGmail className="w-8 h-8 text-[#EA4335]" /> },
							{ name: "Outlook", icon: <OutlookIcon /> },
						].map((tool) => (
							<div key={tool.name} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center flex flex-col items-center justify-center">
								<div className="text-3xl mb-3">{tool.icon}</div>
								<div className="font-semibold text-white">{tool.name}</div>
							</div>
						))}
					</div>
					<div className="mt-8">
						<span className="inline-block px-4 py-2 rounded-full border border-gray-700 text-gray-400 text-sm font-medium">
							+ Developer API support
						</span>
					</div>
				</div>
			</section>

			{/* ── ROI CALCULATOR ── */}
			<RoiCalculator />

			{/* ── PRICING ── */}
			<Pricing />

			{/* ── TESTIMONIALS ── */}
			<section className="py-20 bg-white" id="testimonials">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Loved by scaling operations.
						</h2>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{ quote: "Nuerova is the missing link. We couldn't justify the price tag of legacy enterprise platforms, but letting context sit in fragmented Slack channels was a disaster. Scoped clusters resolved our access control issues.", author: "Priya Patel", role: "VP Revenue Operations", initials: "PP" },
							{ quote: "Our engineering support team used to waste 5 hours a week just searching for old tickets. Now they query the tech cluster directly, approve agent drafts, and speed up issue resolution times.", author: "Sarah Jenkins", role: "Director of Technical Support", initials: "SJ" },
							{ quote: "Before this, customer setup was a manual process of checking multiple Confluence files. Now our custom coordinator agent lists hardware provisioning specs automatically. Absolute game-changer.", author: "Raj Sharma", role: "Chief Executive Officer", initials: "RS" },
						].map((t) => (
							<Card key={t.author} className="bg-gray-50 border border-gray-200">
								<CardContent className="pt-6">
									<p className="text-gray-700 italic mb-6">"{t.quote}"</p>
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
											{t.initials}
										</div>
										<div>
											<div className="font-semibold text-sm text-gray-900">{t.author}</div>
											<div className="text-xs text-gray-500">{t.role}</div>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* ── FINAL CTA ── */}
			<section className="py-20 bg-gray-900 text-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
						Your next team milestone shouldn't depend on<br />someone manually searching chat history.
					</h2>
					<p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
						Start your free trial. Invite your team. Secure workspace setup in under a hour.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
						<Link to="/contact">
							<Button size="lg" className="text-lg px-10 bg-blue-600 hover:bg-blue-700 border-none text-white font-semibold shadow-lg">
								Start Free Trial &rarr;
							</Button>
						</Link>
						<Link to="/contact">
							<Button size="lg" variant="outline" className="text-lg px-10 border-white/30 text-white hover:bg-white/10 bg-transparent">
								Talk to a human first
							</Button>
						</Link>
					</div>
					<div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
						{["7-day free trial", "No credit card required", "Cancel anytime", "Enterprise-grade SOC-2 security"].map((t) => (
							<span key={t} className="flex items-center gap-1.5">
								<span className="text-green-500">✓</span> {t}
							</span>
						))}
					</div>
				</div>
			</section>

		</div>
	);
}

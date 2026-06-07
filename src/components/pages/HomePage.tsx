import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { trackEvent } from "@/lib/analytics";

export function HomePage() {
	useSEO({
		title: "Nuerova | Shared AI Memory and Automation for Teams",
		description: "Nuerova gives teams a shared AI brain, scoped knowledge clusters, reusable skills, and agent-native automation with enterprise controls.",
	});

	useScrollReveal();

	// Interactive states
	const [activeCluster, setActiveCluster] = useState<"support" | "ops" | "eng">("support");
	const [activeTab, setActiveTab] = useState<"clusters" | "agents" | "automation" | "audit">("clusters");
	const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
	
	// Demo Request form state
	const [demoSubmitted, setDemoSubmitted] = useState(false);
	const [isDemoSubmitting, setIsDemoSubmitting] = useState(false);
	const [demoMessage, setDemoMessage] = useState("");
	const [demoError, setDemoError] = useState<string | null>(null);

	const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formDataObj = new FormData(form);
		const name = formDataObj.get("name") as string;
		const email = formDataObj.get("email") as string;
		const company = formDataObj.get("company") as string;
		const teamSize = formDataObj.get("team-size") as string;
		const useCase = formDataObj.get("use-case") as string;
		const msgText = formDataObj.get("message") as string;

		try {
			setIsDemoSubmitting(true);
			setDemoError(null);

			const compiledMessage = `Team Size: ${teamSize || "Not specified"}\nUse Case: ${useCase || "Not specified"}\n\nMessage:\n${msgText || "No additional message"}`;

			const response = await fetch("/api/request-demo", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					company_name: company,
					contact_person_name: name,
					email_address: email,
					phone_number: null,
					message: compiledMessage,
					product: "nuerova",
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Submission failed");
			}

			setDemoSubmitted(true);
			setDemoMessage(data.message || "Thank you for requesting a demo! Your trial has been activated. Please check your email for instructions.");
			trackEvent("form_submitted", {
				cta_location: "home_footer_form",
				funnel_stage: "decision"
			});
		} catch (err) {
			console.error("Demo submission error:", err);
			setDemoError(err instanceof Error ? err.message : "An error occurred. Please try again.");
		} finally {
			setIsDemoSubmitting(false);
		}
	};

	// Early Access Waitlist form state
	const [waitlistEmail, setWaitlistEmail] = useState("");
	const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
	const [isWaitlistSubmitting, setIsWaitlistSubmitting] = useState(false);
	const [waitlistError, setWaitlistError] = useState<string | null>(null);

	const handleWaitlistSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!waitlistEmail) return;

		try {
			setIsWaitlistSubmitting(true);
			setWaitlistError(null);

			// Extract temporary contact and company names from email domain/username
			const emailParts = waitlistEmail.split("@");
			const localPart = emailParts[0] || "Early Access";
			const domainPart = emailParts[1] || "Participant";
			
			// Format name: "john.doe" -> "John Doe"
			const contactName = localPart
				.split(/[._-]/)
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join(" ");
			
			// Format company: "acme.com" -> "Acme"
			const companyName = domainPart.split(".")[0] || "Early Access";
			const formattedCompany = companyName.charAt(0).toUpperCase() + companyName.slice(1);

			const response = await fetch("/api/request-demo", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					company_name: formattedCompany,
					contact_person_name: contactName,
					email_address: waitlistEmail,
					phone_number: null,
					message: "Submitted via Early Access waitlist form.",
					product: "nuerova",
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Submission failed");
			}

			setWaitlistSubmitted(true);
			trackEvent("form_submitted", {
				cta_location: "early_access_waitlist_form",
				funnel_stage: "decision"
			});
		} catch (err) {
			console.error("Waitlist submission error:", err);
			setWaitlistError(err instanceof Error ? err.message : "An error occurred. Please try again.");
		} finally {
			setIsWaitlistSubmitting(false);
		}
	};

	return (
		<div className="js-enabled">
			<Navigation />

			<main id="main">
				{/* ── HERO ── */}
				<section className="hero section" id="top">
					<div className="hero-bg" aria-hidden="true"></div>
					<div className="container hero-grid">
						<div className="hero-copy reveal">
							<div className="eyebrow">
								<span className="pulse-dot"></span>
								Enterprise AI platform built for teams, not individuals
							</div>
							<h1>Your team's intelligence should not live in someone's chat history.</h1>
							<p className="hero-subhead">
								Nuerova gives every team a <strong>shared AI brain</strong>, a reusable skill library,
								and an automation layer that reasons over your own institutional knowledge.
							</p>
							<div className="hero-actions">
								<Link className="button primary" to="/contact">Request Demo</Link>
								<Link className="button secondary" to="/how-it-works">See how it works</Link>
							</div>
							<div className="trust-strip" aria-label="Enterprise trust signals">
								<span>RBAC and audit logs</span>
								<span>Org-scoped isolation</span>
								<span>SSO roadmap</span>
							</div>
						</div>

						<div className="hero-visual reveal" aria-label="Nuerova product preview">
							<div className="product-frame">
								<div className="window-bar">
									<span></span><span></span><span></span>
									<strong>Team Intelligence Console</strong>
								</div>
								<div className="console-grid">
									<aside className="console-panel">
										<div className="panel-label">Clusters</div>
										
										<div 
											className={`cluster-card ${activeCluster === "support" ? "active" : ""}`}
											onClick={() => setActiveCluster("support")}
											style={{ cursor: "pointer" }}
										>
											<span className="cluster-icon blue"></span>
											<div>
												<strong>CS Accounts</strong>
												<small>42 sources synced</small>
											</div>
										</div>
										
										<div 
											className={`cluster-card ${activeCluster === "ops" ? "active" : ""}`}
											onClick={() => setActiveCluster("ops")}
											style={{ cursor: "pointer" }}
										>
											<span className="cluster-icon amber"></span>
											<div>
												<strong>Ops Playbooks</strong>
												<small>18 skills published</small>
											</div>
										</div>
										
										<div 
											className={`cluster-card ${activeCluster === "eng" ? "active" : ""}`}
											onClick={() => setActiveCluster("eng")}
											style={{ cursor: "pointer" }}
										>
											<span className="cluster-icon green"></span>
											<div>
												<strong>Engineering</strong>
												<small>RBAC enforced</small>
											</div>
										</div>
									</aside>

									{activeCluster === "support" && (
										<section className="agent-panel">
											<div className="agent-question">Brief me on the Acme renewal risk.</div>
											<div className="agent-response">
												<div className="thinking-line"></div>
												<p>
													Risk is elevated. Usage dropped 22% after the API migration. Recommend a
													technical success call and executive recap.
												</p>
												<div className="citations">
													<span>Slack #acme</span>
													<span>QBR notes</span>
													<span>Jira API-118</span>
												</div>
											</div>
										</section>
									)}

									{activeCluster === "ops" && (
										<section className="agent-panel">
											<div className="agent-question">Draft the offboarding playbook for review.</div>
											<div className="agent-response">
												<div className="thinking-line"></div>
												<p>
													Playbook generated. Revoke SaaS tokens, schedule device shipping label, and archive home repository logs.
												</p>
												<div className="citations">
													<span>Handbook V2</span>
													<span>IT-Specs</span>
													<span>Slack #ops</span>
												</div>
											</div>
										</section>
									)}

									{activeCluster === "eng" && (
										<section className="agent-panel">
											<div className="agent-question">Show me DB connection logs timeouts context.</div>
											<div className="agent-response">
												<div className="thinking-line"></div>
												<p>
													Timeout detected. PostgreSQL pool capacity (10 connections) exceeded. Recommendation staged to double pool size config.
												</p>
												<div className="citations">
													<span>GitHub #891</span>
													<span>Arch Spec</span>
												</div>
											</div>
										</section>
									)}

									<aside className="automation-panel">
										<div className="panel-label">Automation</div>
										{activeCluster === "support" ? (
											<>
												<div className="flow-step">Trigger: Renewal 45 days out</div>
												<div className="flow-step reason">Reason over CS cluster</div>
												<div className="flow-step">Draft account plan</div>
												<div className="flow-step approve">Request manager approval</div>
											</>
										) : activeCluster === "ops" ? (
											<>
												<div className="flow-step">Trigger: BambooHR Hook</div>
												<div className="flow-step reason">Query Org Handbooks</div>
												<div className="flow-step">Provision access tokens</div>
												<div className="flow-step approve">IT checklist audit</div>
											</>
										) : (
											<>
												<div className="flow-step">Trigger: DB Timeout Label</div>
												<div className="flow-step reason">Search DB config specs</div>
												<div className="flow-step">Post analysis to Slack</div>
												<div className="flow-step approve">Stage DB settings fix</div>
											</>
										)}
									</aside>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ── PROBLEM SECTION ── */}
				<section className="section problem-section">
					<div className="container">
						<div className="section-heading narrow reveal">
							<span className="kicker">The current reality</span>
							<h2>Teams are running on scattered context and manual heroics.</h2>
							<p>Every tool captures knowledge. None of it compounds.</p>
						</div>

						<div className="stats-grid reveal">
							<article>
								<strong>73%</strong>
								<span>of critical context gets trapped in private threads, docs, and inboxes.</span>
							</article>
							<article>
								<strong>40 hrs</strong>
								<span>lost each month re-sharing background that should already be known.</span>
							</article>
							<article>
								<strong>6 mo</strong>
								<span>of momentum can disappear when a senior operator leaves.</span>
							</article>
						</div>

						<div className="pain-grid reveal">
							<article className="pain-card red">
								<span className="card-icon">01</span>
								<h3>Brain drain every time someone leaves</h3>
								<p>When your best people exit, they take the playbooks with them. Nuerova makes that knowledge durable.</p>
							</article>
							<article className="pain-card amber">
								<span className="card-icon">02</span>
								<h3>Agents with no memory are expensive search bars</h3>
								<p>Generic AI tools start from zero every session. Nuerova agents inherit team context automatically.</p>
							</article>
							<article className="pain-card slate">
								<span className="card-icon">03</span>
								<h3>Automation that cannot think cannot scale</h3>
								<p>Rigid rules break on edge cases. Nuerova workflows reason before they act or escalate.</p>
							</article>
						</div>

						<p className="center-statement">You do not need more tools. You need one layer that connects what your team already knows.</p>
					</div>
				</section>

				{/* ── PERSONAS SECTION ── */}
				<section className="section personas-section">
					<div className="container">
						<div className="section-heading reveal">
							<span className="kicker">Built for teams with context-heavy work</span>
							<h2>Make the operating layer smarter than any single person in it.</h2>
						</div>
						<div className="persona-grid reveal">
							<article>
								<span className="role-mark">Ops</span>
								<h3>Head of Operations</h3>
								<p>Coordination, handoffs, and tribal knowledge requests stop piling up on one person.</p>
								<strong>Automated workflows built on your team's real context.</strong>
							</article>
							<article>
								<span className="role-mark">CS</span>
								<h3>Customer Success Leader</h3>
								<p>Account memory stops living across six tools and three people's heads.</p>
								<strong>Every CSM walks into the call fully briefed.</strong>
							</article>
							<article>
								<span className="role-mark">Eng</span>
								<h3>VP Engineering / CTO</h3>
								<p>New AI tooling gets evaluated through compliance, isolation, and auditability.</p>
								<strong>Enterprise controls are built in from day one.</strong>
							</article>
						</div>
					</div>
				</section>

				{/* ── WORKFLOW SECTION (Timeline) ── */}
				<section className="section workflow-section" id="workflow">
					<div className="container">
						<div className="section-heading reveal">
							<span className="kicker">How it works</span>
							<h2>From scattered context to governed execution in five steps.</h2>
						</div>
						<div className="step-track reveal">
							<article>
								<span>01</span>
								<h3>Connect your stack</h3>
								<p>Sync Notion, Slack, Drive, CRM, GitHub, and internal sources.</p>
							</article>
							<article>
								<span>02</span>
								<h3>Build clusters</h3>
								<p>Scope memory by team, project, account, or organization.</p>
							</article>
							<article>
								<span>03</span>
								<h3>Deploy agents</h3>
								<p>Agents inherit the right cluster context before responding.</p>
							</article>
							<article>
								<span>04</span>
								<h3>Automate work</h3>
								<p>Trigger workflows that reason, branch, act, and escalate.</p>
							</article>
							<article>
								<span>05</span>
								<h3>Govern confidently</h3>
								<p>Review RBAC, approvals, audit logs, and usage visibility.</p>
							</article>
						</div>
					</div>
				</section>

				{/* ── PRODUCT SECTION (Glimpses) ── */}
				<section className="section product-section" id="features">
					<div className="container">
						<div className="section-heading reveal">
							<span className="kicker">Platform glimpses</span>
							<h2>A shared AI brain you can inspect, govern, and reuse.</h2>
							<p>Product visuals designed around the surfaces enterprise buyers need to see.</p>
						</div>

						<div className="tabs-shell reveal">
							<div className="tab-list" role="tablist" aria-label="Product previews">
								<button 
									className={`tab-button ${activeTab === "clusters" ? "active" : ""}`}
									type="button" 
									role="tab" 
									aria-selected={activeTab === "clusters"}
									onClick={() => setActiveTab("clusters")}
								>
									Knowledge Clusters
								</button>
								<button 
									className={`tab-button ${activeTab === "agents" ? "active" : ""}`}
									type="button" 
									role="tab" 
									aria-selected={activeTab === "agents"}
									onClick={() => setActiveTab("agents")}
								>
									Agent Workspace
								</button>
								<button 
									className={`tab-button ${activeTab === "automation" ? "active" : ""}`}
									type="button" 
									role="tab" 
									aria-selected={activeTab === "automation"}
									onClick={() => setActiveTab("automation")}
								>
									Automation Builder
								</button>
								<button 
									className={`tab-button ${activeTab === "audit" ? "active" : ""}`}
									type="button" 
									role="tab" 
									aria-selected={activeTab === "audit"}
									onClick={() => setActiveTab("audit")}
								>
									Admin and Audit
								</button>
							</div>

							<div className="tab-stage">
								{activeTab === "clusters" && (
									<article className="tab-panel active" data-panel="clusters">
										<div className="mock-dashboard cluster-dashboard">
											<div className="mock-header">
												<span>Cluster health</span>
												<strong>Org scoped</strong>
											</div>
											<div className="cluster-map">
												<div className="node core">Nuerova</div>
												<div className="node">CS</div>
												<div className="node">Ops</div>
												<div className="node">Eng</div>
												<div className="node">RevOps</div>
											</div>
											<div className="mock-list">
												<span>Permissions synced</span>
												<span>124 citations this week</span>
												<span>3 stale sources flagged</span>
											</div>
										</div>
										<div className="tab-copy">
											<h3>Every cluster scoped. Nothing bleeds across teams.</h3>
											<p>Knowledge is organized by permission boundary, so agents only reason over the context they are allowed to use.</p>
										</div>
									</article>
								)}

								{activeTab === "agents" && (
									<article className="tab-panel active" data-panel="agents">
										<div className="mock-dashboard chat-dashboard">
											<div className="chat-row human">What changed since the last QBR?</div>
											<div className="chat-row ai">Usage recovered after onboarding. Security review is the only open blocker.</div>
											<div className="source-stack">
												<span>Source: Gong recap</span>
												<span>Source: Salesforce opportunity</span>
											</div>
										</div>
										<div className="tab-copy">
											<h3>Agents that know your context, not just your question.</h3>
											<p>Responses cite cluster knowledge inline, making AI output reviewable instead of mysterious.</p>
										</div>
									</article>
								)}

								{activeTab === "automation" && (
									<article className="tab-panel active" data-panel="automation">
										<div className="mock-dashboard automation-canvas">
											<div className="canvas-block trigger">Webhook</div>
											<div className="canvas-block reason">Agent reasoning</div>
											<div className="canvas-block branch">Confidence check</div>
											<div className="canvas-block action">Draft and route</div>
										</div>
										<div className="tab-copy">
											<h3>Workflows that think before they run.</h3>
											<p>Triggers can consult scoped knowledge, choose a path, and request human approval before taking action.</p>
										</div>
									</article>
								)}

								{activeTab === "audit" && (
									<article className="tab-panel active" data-panel="audit">
										<div className="mock-dashboard audit-dashboard">
											<div className="audit-line"><strong>Admin</strong><span>Approved automation run</span><small>2m ago</small></div>
											<div className="audit-line"><strong>Agent</strong><span>Cited CS cluster source</span><small>8m ago</small></div>
											<div className="audit-line"><strong>Owner</strong><span>Updated RBAC role</span><small>1h ago</small></div>
											<div className="audit-line"><strong>System</strong><span>Blocked cross-cluster access</span><small>4h ago</small></div>
										</div>
										<div className="tab-copy">
											<h3>Full governance visibility.</h3>
											<p>Audit logs, scoped roles, and approval trails make AI activity easier to trust.</p>
										</div>
									</article>
								)}
							</div>
						</div>
					</div>
				</section>

				{/* ── FEATURES PREVIEW ── */}
				<section className="section feature-cards-section">
					<div className="container">
						<div className="section-heading reveal">
							<span className="kicker">Core capabilities</span>
							<h2>Everything enterprise teams need. Nothing that slows them down.</h2>
						</div>
						<div className="feature-grid reveal">
							<article>
								<span className="feature-icon memory"></span>
								<h3>Scoped Memory Clusters</h3>
								<p>Team knowledge that is searchable, permission-controlled, and always available to agents.</p>
							</article>
							<article>
								<span className="feature-icon automation"></span>
								<h3>Agent-Native Automations</h3>
								<p>Scheduled or triggered workflows that reason over shared context before acting.</p>
							</article>
							<article id="security">
								<span className="feature-icon security"></span>
								<h3>Enterprise Security Foundation</h3>
								<p>RBAC, audit logs, org scoping, data isolation, and a roadmap to SSO and SOC 2.</p>
							</article>
						</div>
					</div>
				</section>

				{/* ── INTEGRATIONS SECTION ── */}
				<section className="section integrations-section">
					<div className="container">
						<div className="section-heading light reveal">
							<span className="kicker">Integrations</span>
							<h2>Plugs into the stack your team already runs.</h2>
							<p>Connect knowledge sources in minutes, not months.</p>
						</div>
						<div className="integration-grid reveal" aria-label="Supported integrations">
							<span>Slack</span>
							<span>Notion</span>
							<span>Google Drive</span>
							<span>GitHub</span>
							<span>HubSpot</span>
							<span>Salesforce</span>
							<span>Jira</span>
							<span>Confluence</span>
						</div>
						<p className="api-note">REST API and webhooks for everything else.</p>
					</div>
				</section>

				{/* ── PRICING SECTION ── */}
				<section className="section pricing-section" id="pricing">
					<div className="container">
						<div className="section-heading reveal">
							<span className="kicker">Pricing</span>
							<h2>Start narrow. Scale into governed team intelligence.</h2>
						</div>
						<div className="billing-toggle reveal" role="group" aria-label="Billing period">
							<button 
								className={billingPeriod === "monthly" ? "active" : ""} 
								type="button" 
								onClick={() => setBillingPeriod("monthly")}
							>
								Monthly
							</button>
							<button 
								className={billingPeriod === "annual" ? "active" : ""} 
								type="button" 
								onClick={() => setBillingPeriod("annual")}
							>
								Annual, save 20%
							</button>
						</div>
						<div className="pricing-grid reveal">
							<article className="price-card">
								<span className="plan-name">Starter</span>
								<strong>
									<span>{billingPeriod === "annual" ? "$39" : "$49"}</span>
									<small>/mo</small>
								</strong>
								<p>Solo operators and micro-teams validating shared memory.</p>
								<ul>
									<li>Up to 3 users</li>
									<li>3 knowledge clusters</li>
									<li>5 automations</li>
									<li>Community support</li>
								</ul>
								<Link className="button secondary full" to="/contact">Start a pilot</Link>
							</article>
							<article className="price-card featured">
								<span className="popular-badge">Most popular</span>
								<span className="plan-name">Teams</span>
								<strong>
									<span>{billingPeriod === "annual" ? "$159" : "$199"}</span>
									<small>/mo</small>
								</strong>
								<p>Teams of 5 to 50 building a shared intelligence layer.</p>
								<ul>
									<li>Unlimited clusters</li>
									<li>Unlimited agent sessions</li>
									<li>Skill registry</li>
									<li>RBAC and audit logs</li>
								</ul>
								<Link className="button primary full" to="/contact">Request demo</Link>
							</article>
							<article className="price-card">
								<span className="plan-name">Enterprise</span>
								<strong>Custom</strong>
								<p>Organizations that need governance, scale, SLAs, and deeper support.</p>
								<ul>
									<li>Unlimited workspaces</li>
									<li>Custom data retention</li>
									<li>SSO and MFA roadmap</li>
									<li>Dedicated support</li>
								</ul>
								<Link className="button secondary full" to="/contact">Talk to sales</Link>
							</article>
						</div>
					</div>
				</section>

				{/* ── COMPARISON SECTION ── */}
				<section className="section comparison-section">
					<div className="container">
						<div className="section-heading reveal">
							<span className="kicker">Competitive context</span>
							<h2>The team intelligence layer. Not another chatbot wrapper.</h2>
						</div>
						<div className="table-wrap reveal">
							<table>
								<thead>
									<tr>
										<th>Capability</th>
										<th>Nuerova</th>
										<th>ChatGPT Teams</th>
										<th>Copilot</th>
										<th>Notion AI</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Scoped team memory</td>
										<td className="winner">Cluster-based</td>
										<td>Per-user</td>
										<td>M365-bound</td>
										<td>Workspace-wide</td>
									</tr>
									<tr>
										<td>Agent-native automation</td>
										<td className="winner">Visual builder</td>
										<td>No</td>
										<td>Limited</td>
										<td>No</td>
									</tr>
									<tr>
										<td>Reusable skill registry</td>
										<td className="winner">Team-publishable</td>
										<td>Limited</td>
										<td>Complex setup</td>
										<td>No</td>
									</tr>
									<tr>
										<td>RBAC and audit logs</td>
										<td className="winner">Built in</td>
										<td>Limited</td>
										<td>Available</td>
										<td>Limited</td>
									</tr>
									<tr>
										<td>Setup time</td>
										<td className="winner">Days</td>
										<td>Minutes</td>
										<td>Months</td>
										<td>Minutes</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* ── TESTIMONIALS SECTION ── */}
				<section className="section testimonial-section">
					<div className="container">
						<div className="section-heading reveal">
							<span className="kicker">Early signal</span>
							<h2>Trusted by teams who outgrew generic AI tools.</h2>
						</div>
						<div className="testimonial-grid reveal">
							<figure>
								<blockquote>We lost two years of knowledge when our ops lead left. Nuerova is the first tool that would have prevented that.</blockquote>
								<figcaption><span>HO</span> Head of Operations, Series B SaaS</figcaption>
							</figure>
							<figure>
								<blockquote>Our CSMs used to brief themselves from six different tabs. Now every account starts from a shared cluster.</blockquote>
								<figcaption><span>CS</span> VP Customer Success, Fintech</figcaption>
							</figure>
							<figure>
								<blockquote>The audit log and RBAC were the first things InfoSec asked about. Having both in the product story changed the conversation.</blockquote>
								<figcaption><span>VE</span> VP Engineering, Enterprise Software</figcaption>
							</figure>
						</div>
					</div>
				</section>

				{/* ── INSIGHTS (BLOGS) SECTION ── */}
				<section className="section insights-section" id="insights">
					<div className="container">
						<div className="section-heading reveal">
							<span className="kicker">Insights</span>
							<h2>Enterprise AI intelligence for teams who need it to work.</h2>
						</div>
						<div className="blog-grid reveal">
							<article>
								<span>Strategy</span>
								<h3>Why scoped team memory is the moat generic AI tools cannot copy</h3>
								<Link to="/blog/$slug" params={{ slug: "scoped-team-memory" }}>Read preview</Link>
							</article>
							<article>
								<span>Product</span>
								<h3>From prompt library to skill registry: what enterprise AI actually needs</h3>
								<Link to="/blog/$slug" params={{ slug: "skill-registry" }}>Read preview</Link>
							</article>
							<article>
								<span>Operations</span>
								<h3>Agent-native vs rule-based automation: why the difference matters</h3>
								<Link to="/blog/$slug" params={{ slug: "agent-native-automation" }}>Read preview</Link>
							</article>
						</div>
					</div>
				</section>

				{/* ── CONTACT SECTION ── */}
				<section className="section contact-section" id="contact">
					<div className="container contact-grid">
						<div className="contact-copy reveal">
							<span className="kicker">Request a demo</span>
							<h2>Your team's knowledge should not depend on one person being in the room.</h2>
							<p>Nuerova gives teams a shared AI brain that persists, scales, and can be governed.</p>
							<div className="contact-promises">
								<span>No lock-in</span>
								<span>Data stays yours</span>
								<span>Setup support included</span>
								<span>Enterprise controls built in</span>
							</div>
						</div>

						{demoSubmitted ? (
							<div className="demo-form reveal bg-white p-8 rounded-xl border border-outline shadow flex flex-col items-center justify-center text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(255, 255, 255, 0.95)", border: "1px solid var(--outline)", borderRadius: "12px", padding: "32px", textAlign: "center" }}>
								<h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: "var(--ink)", margin: "0 0 12px", fontSize: "24px" }}>Request Staged!</h3>
								<p className="text-gray-600 mb-0" style={{ color: "var(--ink-soft)", margin: 0 }}>
									{demoMessage || "We've recorded your demo request. Our team will reach out shortly."}
								</p>
							</div>
						) : (
							<form className="demo-form reveal" aria-label="Request a Nuerova demo" onSubmit={handleDemoSubmit}>
								<label>
									<span>Name</span>
									<input name="name" type="text" autoComplete="name" required disabled={isDemoSubmitting} />
								</label>
								<label>
									<span>Work email</span>
									<input name="email" type="email" autoComplete="email" required disabled={isDemoSubmitting} />
								</label>
								<label>
									<span>Company</span>
									<input name="company" type="text" autoComplete="organization" required disabled={isDemoSubmitting} />
								</label>
								<label>
									<span>Team size</span>
									<select name="team-size" required disabled={isDemoSubmitting}>
										<option value="">Select team size</option>
										<option>5-25</option>
										<option>26-50</option>
										<option>51-200</option>
										<option>201-500</option>
										<option>500+</option>
									</select>
								</label>
								<label className="full-field">
									<span>Primary use case</span>
									<select name="use-case" required disabled={isDemoSubmitting}>
										<option value="">Select use case</option>
										<option>Operations</option>
										<option>Customer Success</option>
										<option>Engineering</option>
										<option>RevOps</option>
										<option>Other</option>
									</select>
								</label>
								<label className="full-field">
									<span>What should Nuerova help with?</span>
									<textarea name="message" rows={4} disabled={isDemoSubmitting}></textarea>
								</label>
								{demoError && (
									<p className="full-field" style={{ color: "#ff5b5b", fontSize: "14px", margin: "4px 0 0" }}>
										{demoError}
									</p>
								)}
								<button className="button primary full full-field" type="submit" disabled={isDemoSubmitting}>
									{isDemoSubmitting ? "Requesting..." : "Request your demo"}
								</button>
								<p className="form-note">A human reviews every request. No pressure, no generic sales loop.</p>
							</form>
						)}
					</div>
				</section>

				{/* ── EARLY ACCESS CTA ── */}
				<section className="section cta-section">
					<div className="container cta-inner">
						<h2>Be first when we open the gates.</h2>
						<p>Limited pilot with 50 teams. No credit card required.</p>
						{!waitlistSubmitted ? (
							<form className="cta-form" onSubmit={handleWaitlistSubmit}>
								<input 
									type="email" 
									placeholder="Work email" 
									required 
									value={waitlistEmail}
									onChange={(e) => setWaitlistEmail(e.target.value)}
									disabled={isWaitlistSubmitting}
								/>
								<button type="submit" className="button primary" disabled={isWaitlistSubmitting}>
									{isWaitlistSubmitting ? "Requesting..." : "Request Access →"}
								</button>
							</form>
						) : (
							<p className="success-msg">You're on the list. We'll be in touch.</p>
						)}
						{waitlistError && (
							<p style={{ color: "#ff8b8b", fontSize: "14px", marginTop: "12px", marginBottom: 0 }}>
								{waitlistError}
							</p>
						)}
					</div>
				</section>
			</main>
		</div>
	);
}

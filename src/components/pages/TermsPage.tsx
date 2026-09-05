import { Navigation } from "@/components/Navigation";
import { Link } from "@tanstack/react-router";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const quickLinks = [
	{ href: "#terms", label: "Terms of Service" },
	{ href: "#privacy", label: "Privacy Policy" },
	{ href: "#tos-1", label: "1. Acceptance of Terms", sub: true },
	{ href: "#pp-1", label: "1. Information We Collect", sub: true },
	{ href: "#tos-7", label: "7. AI-Generated Output & Automations", sub: true },
	{ href: "#pp-3", label: "3. AI Data Processing", sub: true },
	{ href: "#pp-4", label: "4. Google Workspace Data", sub: true },
	{ href: "#pp-5", label: "5. Microsoft 365 Data", sub: true },
	{ href: "#pp-6", label: "6. Slack Data", sub: true },
	{ href: "#pp-7", label: "7. Salesforce Data", sub: true },
	{ href: "#pp-8", label: "8. GitHub & Notion Data", sub: true },
	{ href: "#pp-9", label: "9. Shopify Data", sub: true },
	{ href: "#tos-13", label: "13. Governing Law", sub: true },
	{ href: "#pp-14", label: "14. GDPR & Data Subject Rights", sub: true },
	{ href: "#pp-17", label: "17. Children's Privacy", sub: true },
];

export function TermsPage() {
	useSEO({
		title: "Terms of Service & Privacy Policy - Nuerova",
		description: "Terms of Service & Privacy Policy for Nuerova, including per-connector data handling for Google Workspace, Microsoft 365, Slack, Salesforce, GitHub, Notion, and Shopify.",
	});

	useScrollReveal();

	return (
		<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />

			<main id="main" className="flex-grow pb-section-gap pt-24">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pt-8 pb-section-gap reveal">
					<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
						TERMS AND PRIVACY
					</span>
					<h1 className="font-headline-md text-4xl md:text-5xl text-primary mb-stack-lg leading-tight font-bold tracking-tight max-w-3xl">
						Terms of Service & Privacy Policy
					</h1>
					<p className="font-body-md text-body-md text-white/50 max-w-2xl mb-2">
						Ganvix Technologies Pvt Ltd ("Company", "we", "us", "our"), B-128, Sector 2, Noida, Uttar Pradesh, India —{" "}
						<a href="mailto:hello@nuerova.xyz" className="text-status-blue hover:underline">hello@nuerova.xyz</a>
					</p>
					<p className="font-body-md text-sm text-white/30 max-w-2xl mb-10">
						Last updated: September 5, 2026. This page is provided for transparency and is not a substitute for advice from your own counsel.
					</p>
					<div className="flex flex-wrap gap-3">
						{["Data stays yours", "No training on customer data", "Export supported", "Org-scoped isolation"].map((label) => (
							<span key={label} className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
								{label}
							</span>
						))}
					</div>
				</section>

				{/* ── TABLE OF CONTENTS ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pb-section-gap reveal">
					<nav className="p-6 bg-white/[0.03] rounded-lg border border-white/10">
						<h2 className="font-label-caps text-xs text-white/40 tracking-widest mb-4">QUICK LINKS</h2>
						<div className="grid md:grid-cols-2 gap-x-8 gap-y-1 text-sm">
							{quickLinks.map((link) => (
								<a
									key={link.href + link.label}
									href={link.href}
									className={link.sub
										? "text-white/50 hover:text-status-blue transition-colors py-1 pl-3"
										: "text-status-blue hover:underline py-1 font-medium"}
								>
									{link.label}
								</a>
							))}
						</div>
					</nav>
				</section>

				{/* ══════════════════════════════════════════════════════════════
				    TERMS OF SERVICE
				    ══════════════════════════════════════════════════════════════ */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<h2 className="font-headline-sm text-2xl md:text-3xl text-primary mb-8 font-bold tracking-tight" id="terms">Terms of Service</h2>

					<div className="space-y-10 text-white/60 leading-relaxed max-w-3xl">

						<div id="tos-1">
							<h3 className="text-lg font-semibold text-white mb-2">1. Acceptance of Terms</h3>
							<p>
								By accessing or using Nuerova ("the Service"), operated by Ganvix Technologies Pvt Ltd, you agree to be
								bound by these Terms of Service ("Agreement"). If you are using the Service on behalf of an organization,
								you represent and warrant that you have the authority to bind that organization to this Agreement.
							</p>
							<p className="mt-3 text-sm font-semibold text-white/80 bg-white/5 p-3 rounded border border-white/10 uppercase">
								By accessing, browsing, or using the Service, you acknowledge that you have read, understood, and agree
								to be bound by this Agreement. If you do not agree, you must not use the Service.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">2. Service Description</h3>
							<p>
								Nuerova is a team intelligence platform. It centralizes department and team knowledge into
								organization-scoped "clusters", deploys context-aware AI agents that answer questions and take
								actions within those clusters, provides a registry of reusable "skills", and lets teams build
								trigger-action automations on top of connected data sources.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">3. Account Registration & Eligibility</h3>
							<p>
								To use the Service you must register for an account. You represent and warrant that: (i) you are at
								least 18 years of age; (ii) all registration information you submit is accurate, current, and
								complete; and (iii) you will maintain the accuracy of such information. You are responsible for
								safeguarding your password and for all activity on your account, and must notify us immediately of
								any unauthorized use.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">4. Plans, Trials & Subscriptions</h3>
							<p>
								Nuerova is offered under Starter, Teams, and Enterprise plans, billed monthly or annually as selected
								at checkout. Some plans may include a trial or pilot period at our discretion; the terms of any such
								trial or pilot will be presented at the time it is offered. Paid subscriptions are billed in advance
								and fees are non-refundable except as required by applicable law or stated in a separate agreement.
								We reserve the right to change pricing with 30 days' advance notice to existing subscribers. Upgrades
								between plans are prorated.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">5. Acceptable Use</h3>
							<p>You agree not to:</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li>Use the Service for any unlawful or unauthorized purpose</li>
								<li>Attempt to reverse engineer, decompile, or disassemble the Service</li>
								<li>Upload malicious code, viruses, or interfere with the Service's infrastructure</li>
								<li>Share account credentials or allow unauthorized access to a cluster you do not own</li>
								<li>Resell, sublicense, or redistribute the Service without written consent</li>
								<li>Use automated scripts to scrape data from the Service</li>
								<li>Connect a third-party account (Google, Microsoft, Slack, etc.) that you are not authorized to connect</li>
								<li>Approve or execute an automation action you have not reviewed, where the Service requires your confirmation</li>
							</ul>
							<p className="mt-2">
								We reserve the sole right to determine whether you are in violation of these restrictions and may
								suspend or terminate your access at our discretion.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">6. Intellectual Property</h3>
							<p>
								The Service, including its design, features, agent architecture, skill registry, documentation, and
								all associated intellectual property rights, are and remain the exclusive property of Ganvix
								Technologies Pvt Ltd. Your subscription grants a limited, non-exclusive, non-transferable, revocable
								license to use the Service for your internal business purposes during the subscription period.
							</p>
							<p className="mt-2">
								You retain all ownership rights to data you connect or upload to the platform ("Customer Data"). By
								connecting or uploading Customer Data, you grant us a limited license to process it solely to
								provide the Service to you.
							</p>
						</div>

						<div id="tos-7">
							<h3 className="text-lg font-semibold text-white mb-2">7. AI-Generated Output & Automations</h3>
							<p>
								The Service uses AI agents (see Privacy Policy Section 3) to answer questions, summarize connected
								knowledge, and, where enabled, take actions such as sending an email or posting a message.
								AI-generated output is provided as a suggestion or draft. Where an action would affect systems or
								people outside Nuerova (sending email, posting to Slack, creating a calendar event, writing to a
								connected third-party system), the Service is designed to require your explicit confirmation before
								the action is taken, and to keep a run log of what was executed. You are responsible for reviewing
								AI-generated output and confirmed actions before relying on them.
							</p>
							<p className="mt-2">
								We have not built, and do not operate, any process that uses your Customer Data to train,
								fine-tune, or otherwise improve our own AI models — this is true regardless of how you access the
								Service. Our AI processing runs on Google Cloud Vertex AI; what that means for the underlying model
								provider is addressed precisely in Privacy Policy Section 3, since that part rests on our
								agreement with Google Cloud rather than on something we can independently guarantee.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">8. Third-Party Services & Connectors</h3>
							<p>The Service can connect to third-party accounts and infrastructure you choose to authorize, including:</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li><strong>Amazon Web Services</strong> — infrastructure hosting and data storage</li>
								<li><strong>Google Cloud Platform (Vertex AI)</strong> — AI model processing and embeddings</li>
								<li><strong>Google Workspace (Gmail, Calendar, Drive, Docs, Sheets, Tasks)</strong> — optional integration; see Privacy Policy Section 4</li>
								<li><strong>Microsoft 365 (Outlook Mail, Calendar, SharePoint, OneDrive & Teams)</strong> — optional integration; see Privacy Policy Section 5</li>
								<li><strong>Slack</strong> — optional integration; see Privacy Policy Section 6</li>
								<li><strong>Salesforce</strong> — optional, organization-level integration; see Privacy Policy Section 7</li>
								<li><strong>GitHub and Notion</strong> — optional integrations relayed live through each provider's own hosted service; see Privacy Policy Section 8</li>
								<li><strong>Shopify</strong> — optional integration, with functionality still rolling out; see Privacy Policy Section 9</li>
							</ul>
							<p className="mt-2">
								We are not responsible for the availability, accuracy, or practices of third-party services. Your use
								of those services is subject to their own terms and privacy policies. Our use and transfer of
								information received from Google APIs adheres to the{" "}
								<a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-status-blue hover:underline">Google API Services User Data Policy</a>,
								including the Limited Use requirements. Our use of Microsoft Graph APIs adheres to the{" "}
								<a href="https://learn.microsoft.com/en-us/legal/microsoft-apis/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-status-blue hover:underline">Microsoft APIs Terms of Use</a>.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">9. Warranty Disclaimer</h3>
							<p className="text-sm font-semibold text-white/80 bg-white/5 p-4 rounded border border-white/10 uppercase leading-relaxed">
								The Service is provided on an "as is" and "as available" basis, without warranties of any kind,
								either express or implied, including implied warranties of merchantability, fitness for a
								particular purpose, title, and non-infringement. Ganvix Technologies Pvt Ltd does not warrant that
								the Service will be uninterrupted, error-free, or completely secure, or that AI-generated output
								will be accurate or complete.
							</p>
						</div>

						<div id="tos-10">
							<h3 className="text-lg font-semibold text-white mb-2">10. Indemnification</h3>
							<p>
								You agree to indemnify, defend, and hold harmless Ganvix Technologies Pvt Ltd, its officers,
								directors, employees, agents, and affiliates from and against any claims, damages, losses,
								liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of: (i) your use
								of the Service; (ii) your violation of this Agreement; (iii) your violation of any third-party
								rights; or (iv) any Customer Data or connected third-party account you use with the Service.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">11. Limitation of Liability</h3>
							<p className="text-sm font-semibold text-white/80 bg-white/5 p-4 rounded border border-white/10 uppercase leading-relaxed">
								To the maximum extent permitted by applicable law, in no event shall Ganvix Technologies Pvt Ltd, its
								officers, directors, employees, or agents be liable for any indirect, incidental, special,
								consequential, or punitive damages, including loss of revenue, data, business opportunities, or
								goodwill, arising from your use of the Service. In no event shall our total aggregate liability
								exceed the greater of (a) the amount you have paid us in the twelve (12) months preceding the claim,
								or (b) one hundred US dollars (US $100).
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">12. Termination</h3>
							<p>
								Either party may terminate this Agreement at any time. We may suspend or terminate your access
								immediately if you breach this Agreement or at our discretion. On termination or cancellation, the
								Service supports one-click export of your data, and your account and connected data enters our
								offboarding process for automatic deletion, as described in Privacy Policy Section 15. All
								provisions that by their nature should survive termination shall survive, including Sections 6, 9,
								10, 11, and 13.
							</p>
						</div>

						<div id="tos-13">
							<h3 className="text-lg font-semibold text-white mb-2">13. Governing Law & Dispute Resolution</h3>
							<p>
								This Agreement is governed by the laws of India, without regard to conflict-of-law principles. Any
								dispute arising out of or relating to this Agreement is subject to the exclusive jurisdiction of the
								courts located in Gautam Buddh Nagar, Uttar Pradesh, India.
							</p>
							<p className="mt-2">
								Before initiating legal proceedings, the parties agree to attempt to resolve any dispute through
								good-faith negotiation for at least thirty (30) days. If unresolved, either party may pursue
								arbitration under the Arbitration and Conciliation Act, 1996 of India, administered by a sole
								arbitrator mutually agreed upon, seated in Noida, Uttar Pradesh. The language of arbitration shall be
								English.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">14. Force Majeure</h3>
							<p>
								Neither party is liable for failure or delay in performing its obligations under this Agreement
								where such failure or delay results from circumstances beyond that party's reasonable control,
								including natural disasters, war, pandemics, government action, power or internet outages, or
								third-party service disruptions (including outages of connected providers such as Google, Microsoft,
								Slack, or AWS).
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">15. Assignment</h3>
							<p>
								You may not assign or transfer this Agreement without our prior written consent. We may assign this
								Agreement freely in connection with a merger, acquisition, corporate reorganization, or sale of all
								or substantially all of our assets.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">16. Severability & Entire Agreement</h3>
							<p>
								If any provision of this Agreement is held invalid or unenforceable, it shall be modified to the
								minimum extent necessary to make it valid, and the remaining provisions continue in full force. This
								Agreement, together with the Privacy Policy, constitutes the entire agreement between you and Ganvix
								Technologies Pvt Ltd regarding the Service.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">17. Modifications</h3>
							<p>
								We may modify this Agreement at any time. Material changes will be communicated by email or a
								prominent in-Service notice at least 15 days before taking effect. Continued use of the Service
								after the effective date constitutes acceptance of the modified terms.
							</p>
						</div>
					</div>
				</section>

				{/* ══════════════════════════════════════════════════════════════
				    PRIVACY POLICY
				    ══════════════════════════════════════════════════════════════ */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<h2 className="font-headline-sm text-2xl md:text-3xl text-primary mb-8 font-bold tracking-tight" id="privacy">Privacy Policy</h2>

					<div className="space-y-10 text-white/60 leading-relaxed max-w-3xl">

						<div id="pp-1">
							<h3 className="text-lg font-semibold text-white mb-2">1. Information We Collect</h3>
							<ul className="list-disc pl-6 space-y-1">
								<li><strong>Account Data:</strong> name, email address, organization name, and a hashed password provided at registration</li>
								<li><strong>Usage Data:</strong> feature usage, session activity, IP address, browser type, and device identifiers, collected for product improvement and security</li>
								<li><strong>Customer Data:</strong> knowledge, documents, messages, and records you connect or upload into your clusters</li>
								<li><strong>Payment Data:</strong> billing information processed by our payment processor; we do not store full card numbers on our servers</li>
								<li><strong>Communication Data:</strong> information you provide when contacting support or requesting a demo</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">2. How We Use Your Information</h3>
							<ul className="list-disc pl-6 space-y-1">
								<li>To provide, operate, and improve the Service, including agent answers and automations</li>
								<li>To process payments and manage your subscription</li>
								<li>To send service-related communications (onboarding, billing, security alerts, product updates)</li>
								<li>To detect and prevent fraud, abuse, or security incidents</li>
								<li>To comply with legal obligations and enforce our Terms</li>
							</ul>
							<p className="mt-2">
								We do not use your information for third-party advertising, and do not sell personal data.
							</p>
						</div>

						<div id="pp-3">
							<h3 className="text-lg font-semibold text-white mb-2">3. AI Data Processing</h3>
							<p>
								Agent responses, summaries, and embeddings are generated using Google Cloud Vertex AI (Gemini models
								and the <code className="text-white/50">text-embedding-005</code> embedding model).
							</p>
							<p className="mt-2">
								<strong>By Nuerova:</strong> we have not built, and do not operate, any process that uses your
								Customer Data to train, fine-tune, or otherwise improve our own AI models. This holds regardless of
								which plan or feature you use.
							</p>
							<p className="mt-2">
								<strong>By our model provider:</strong> AI processing routed through Google Cloud Vertex AI is
								governed by our enterprise data-processing terms with Google Cloud. Those terms — not this
								document alone — are the operative source for whether Google itself retains or uses inference
								inputs beyond serving the request; enterprise customers may request a copy of the relevant terms
								from us. We do not independently verify Google's practices beyond what those terms provide.
							</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li>AI processing runs in real time as part of answering a query or running an automation</li>
								<li>AI output that would affect anything outside Nuerova (sending a message, creating an event, writing to a connected system) requires your confirmation before it takes effect</li>
							</ul>
						</div>

						<div id="pp-4">
							<h3 className="text-lg font-semibold text-white mb-2">4. Google Workspace Data (Gmail, Calendar, Drive, Docs, Sheets & Tasks)</h3>
							<p>
								If you connect a Google account, you will be asked to grant one or more of the following scopes,
								each requested only for the feature it powers and only after you opt in: Gmail read/compose (to
								import email threads for your cluster's knowledge, and to send or reply to email — always with your
								confirmation before sending), Calendar (to read events and create new ones on request), Drive,
								Docs, Sheets (to read and index file content and sharing metadata), and Tasks.
							</p>
							<p className="mt-2">
								<strong>Storage & retention:</strong> connected content is processed, chunked, and stored in an
								encrypted form inside our own database so your agents and clusters can search it. It is
								automatically deleted by a scheduled job once it passes its retention window, and is deleted
								immediately (cascading to every stored chunk) when you disconnect the Google account or revoke the
								specific integration's access within Nuerova.
							</p>
							<p className="mt-2">
								<strong>Limited Use:</strong> our use and transfer of information received from Google APIs adheres
								to the{" "}
								<a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-status-blue hover:underline">Google API Services User Data Policy</a>,
								including the Limited Use requirements. We do not use Google data to serve ads, and do not sell or
								share it except to provide the feature you requested.
							</p>
							<p className="mt-2">
								<strong>Human access</strong> is limited to what is necessary to operate the Service, cases where
								you've given explicit consent, investigating abuse or security incidents, or complying with law. Any
								such access is logged and audited.
							</p>
							<p className="mt-2">
								<strong>Revocation:</strong> disconnecting inside Nuerova deletes our copy of your Google data, but
								does not itself revoke Google's own grant. To fully revoke access, also remove Nuerova at{" "}
								<a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-status-blue hover:underline">myaccount.google.com/permissions</a>.
							</p>
						</div>

						<div id="pp-5">
							<h3 className="text-lg font-semibold text-white mb-2">5. Microsoft 365 Data (Outlook Mail, Calendar, SharePoint, OneDrive & Teams)</h3>
							<p>
								If you connect a Microsoft 365 account, you will be asked to consent to Microsoft Graph permissions
								covering: Outlook Mail read and send (with your confirmation before any send or reply),
								Calendar read/write, SharePoint and OneDrive file read (including sharing metadata), and, if you
								connect Teams, chat and channel read plus the ability to send a channel message on your
								confirmation.
							</p>
							<p className="mt-2">
								Storage, retention, human access, and disconnection work the same way described for Google Workspace
								in Section 4 above — content is encrypted, retained only for as long as needed, and deleted on a
								retention schedule or immediately on disconnect. Our access is subject to the{" "}
								<a href="https://learn.microsoft.com/en-us/legal/microsoft-apis/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-status-blue hover:underline">Microsoft APIs Terms of Use</a>.
							</p>
							<p className="mt-2">
								<strong>Revocation:</strong> disconnecting inside Nuerova deletes our copy of the data, but full
								revocation of the grant itself is done from your Microsoft 365 account or by your administrator in
								the Microsoft Entra admin center.
							</p>
						</div>

						<div id="pp-6">
							<h3 className="text-lg font-semibold text-white mb-2">6. Slack Data</h3>
							<p>
								If you connect Slack, the integration uses your own Slack access token (rather than only a
								workspace-wide bot) so it can read the channels, private channels, and direct messages that you
								personally have access to, plus files and the user directory, in order to build your cluster's
								knowledge. Posting a message to Slack on your behalf always requires your confirmation before it is
								sent.
							</p>
							<p className="mt-2">
								Storage, retention, and disconnection work the same way described in Section 4 — content is
								encrypted, retained on a schedule, and deleted immediately when you disconnect Slack or revoke the
								integration.
							</p>
						</div>

						<div id="pp-7">
							<h3 className="text-lg font-semibold text-white mb-2">7. Salesforce Data</h3>
							<p>
								Salesforce works differently from the connectors above. It is connected once per organization using
								a shared, organization-level credential rather than an individual user's login. Salesforce records
								(such as Contacts, Accounts, Opportunities, and Cases) are queried live at the time they're needed
								and are <strong>not</strong> copied into our own database. Creating or updating a Salesforce record
								(for example a Case or Lead) requires the integration to be explicitly configured for write access
								and requires confirmation before the write happens.
							</p>
							<p className="mt-2">
								Because Salesforce data can contain another person's customer PII and is shared at the organization
								level, our systems specifically exclude Salesforce results from being surfaced in a shared-cluster
								answer to a user who has no independent relationship to that data, and every Salesforce access is
								separately audit-logged.
							</p>
						</div>

						<div id="pp-8">
							<h3 className="text-lg font-semibold text-white mb-2">8. GitHub & Notion Data</h3>
							<p>
								GitHub and Notion are connected using your own account credential (an OAuth token or, for GitHub,
								optionally a personal access token), but Nuerova does not run its own copy of your repository or
								workspace content. Requests are relayed live to GitHub's or Notion's own hosted service using your
								credential, and the response is returned to you without being separately stored in our database.
								Disconnecting removes the stored credential; for GitHub personal access tokens, which do not expire
								on their own, you should also revoke the token directly from your GitHub account settings.
							</p>
						</div>

						<div id="pp-9">
							<h3 className="text-lg font-semibold text-white mb-2">9. Shopify Data</h3>
							<p>
								A Shopify connection is available from your integrations settings; store, order, and product access
								is still being rolled out and is not yet generally available. We will update this section with the
								same level of detail as our other connectors (scopes, storage, and retention) once Shopify data
								access is live for customers. If you have connected or been offered a Shopify connection ahead of
								general availability, no order or product data is read or written until that functionality ships.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">10. Data Storage & Security</h3>
							<p>
								Nuerova is hosted on Amazon Web Services (AWS) in a multi-tenant architecture; hybrid and dedicated
								single-tenant deployments are available for enterprise customers with stricter data-residency
								requirements. We implement:
							</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li>Encryption at rest and in transit (TLS)</li>
								<li>Organization- and user-scoped data isolation, so one organization's clusters and connected data cannot be retrieved by another organization, and one member's connected accounts are not exposed to other members beyond what a cluster's sharing rules allow</li>
								<li>Role-based access control (Owner, Admin, Member, Viewer — see the Security & Governance page for the full permission matrix)</li>
								<li>Audit logging of administrative access and sensitive data reads (including every Salesforce access)</li>
							</ul>
							<p className="mt-2">
								We are not yet SOC 2 certified; SOC 2 Type II readiness, SSO (SAML/OIDC), MFA enforcement, and
								expanded audit export are on our roadmap, as described on our Security & Governance page. No method
								of transmission or storage is 100% secure, and we cannot guarantee absolute security.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">11. Data Sharing & Sub-Processors</h3>
							<p>We do not sell your personal data. We share information only with:</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li><strong>Amazon Web Services</strong> — infrastructure hosting and data storage</li>
								<li><strong>Google Cloud Platform (Vertex AI)</strong> — AI model processing and embeddings</li>
								<li><strong>Our payment processor</strong> — payment processing and subscription billing</li>
								<li><strong>Legal & compliance</strong> — when required by law, regulation, or valid legal process</li>
								<li><strong>Business transfers</strong> — in connection with a merger, acquisition, or asset sale, with advance notice to you</li>
							</ul>
							<p className="mt-2">
								All sub-processors are contractually obligated to protect your data and to process it only to
								provide the Service.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">12. Legal Basis for Processing (GDPR)</h3>
							<p>If you are located in the EEA, UK, or Switzerland, we process personal data on these legal bases:</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li><strong>Contract performance:</strong> to provide the Service you've subscribed to</li>
								<li><strong>Legitimate interests:</strong> to improve the Service, ensure security, and prevent fraud, where not overridden by your rights</li>
								<li><strong>Consent:</strong> for marketing communications and connecting optional third-party integrations — withdrawable at any time</li>
								<li><strong>Legal obligation:</strong> to comply with applicable law</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">13. International Data Transfers</h3>
							<p>
								Your data may be processed in India, the United States (via AWS and Google Cloud infrastructure),
								and other jurisdictions where our sub-processors operate. Where we transfer personal data outside
								the EEA, UK, or Switzerland, we rely on Standard Contractual Clauses or equivalent safeguards.
							</p>
						</div>

						<div id="pp-14">
							<h3 className="text-lg font-semibold text-white mb-2">14. GDPR & Data Subject Rights</h3>
							<p>
								Depending on your jurisdiction, you may have rights to access, correct, delete, export (data
								portability), restrict, or object to the processing of your personal data, and to withdraw consent
								at any time. If you are in the EEA or UK, we act as data controller for account and website data,
								and as data processor for Customer Data you connect to the Service on your organization's behalf.
							</p>
							<p className="mt-2">
								To exercise any of these rights, contact{" "}
								<a href="mailto:privacy@nuerova.xyz" className="text-status-blue hover:underline">privacy@nuerova.xyz</a>.
								We aim to respond within 30 days. Enterprise customers requiring a formal Data Processing Agreement
								(DPA) may request one at the same address.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">15. Data Retention & Deletion</h3>
							<p>
								Connected data (Google Workspace, Microsoft 365, Slack) is retained only as long as needed to serve
								your clusters and is purged on a schedule described in Sections 4-6 above. When you cancel or your
								account is deleted, the Service supports one-click export of your data, followed by an automatic
								deletion workflow during offboarding, including a bounded grace period before data is permanently
								and irreversibly purged. Billing records are retained as required by applicable tax and accounting
								law.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">16. Cookies & Tracking</h3>
							<p>
								We use essential cookies for authentication and session management, and analytics cookies to
								understand product usage. We do not use third-party advertising cookies or cross-site tracking
								pixels. You can manage cookies through your browser; disabling essential cookies may break the
								Service.
							</p>
						</div>

						<div id="pp-17">
							<h3 className="text-lg font-semibold text-white mb-2">17. Children's Privacy</h3>
							<p>
								The Service is not intended for individuals under 18. We do not knowingly collect personal data
								from children. If you believe a minor has provided us with personal data, contact{" "}
								<a href="mailto:privacy@nuerova.xyz" className="text-status-blue hover:underline">privacy@nuerova.xyz</a>.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">18. Data Breach Notification</h3>
							<p>
								If a personal data breach is likely to risk your rights and freedoms, we will notify you and any
								applicable regulator without undue delay, and where feasible within 72 hours of becoming aware of
								it, consistent with applicable law (including GDPR Article 33).
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">19. Changes to This Policy</h3>
							<p>
								We may update this Privacy Policy to reflect changes in our practices or legal requirements, and
								will notify you of material changes by email or in-Service notice at least 15 days before they take
								effect. The "Last updated" date at the top of this page reflects the most recent revision.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-white mb-2">20. Contact Us</h3>
							<div className="mt-3 bg-white/[0.03] rounded-lg p-4 border border-white/10 text-sm space-y-2">
								<p className="text-white/80 font-semibold">Ganvix Technologies Pvt Ltd</p>
								<p>B-128, Sector 2, Noida, Uttar Pradesh, India</p>
								<p>General inquiries: <a href="mailto:hello@nuerova.xyz" className="text-status-blue hover:underline">hello@nuerova.xyz</a></p>
								<p>Privacy & data requests: <a href="mailto:privacy@nuerova.xyz" className="text-status-blue hover:underline">privacy@nuerova.xyz</a></p>
								<p>Security: <a href="mailto:security@nuerova.xyz" className="text-status-blue hover:underline">security@nuerova.xyz</a></p>
							</div>
						</div>
					</div>
				</section>

				{/* Back link */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pt-4 reveal">
					<div className="text-center pt-8 border-t border-white/10">
						<Link to="/" className="text-status-blue hover:underline text-sm">
							← Back to Home
						</Link>
					</div>
				</section>
			</main>
		</div>
	);
}

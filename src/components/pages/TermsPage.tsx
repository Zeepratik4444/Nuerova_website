import { Navigation } from "@/components/Navigation";
import { Link } from "@tanstack/react-router";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const quickLinks = [
	{ href: "#tos-1", label: "1. Acceptance of Terms" },
	{ href: "#tos-2", label: "2. Service Description" },
	{ href: "#tos-3", label: "3. Account Registration & Eligibility" },
	{ href: "#tos-4", label: "4. Plans, Trials & Subscriptions" },
	{ href: "#tos-5", label: "5. Acceptable Use" },
	{ href: "#tos-6", label: "6. Intellectual Property" },
	{ href: "#tos-7", label: "7. AI-Generated Output & Automations" },
	{ href: "#tos-8", label: "8. Third-Party Services & Connectors" },
	{ href: "#tos-9", label: "9. Warranty Disclaimer" },
	{ href: "#tos-10", label: "10. Indemnification" },
	{ href: "#tos-11", label: "11. Limitation of Liability" },
	{ href: "#tos-12", label: "12. Termination" },
	{ href: "#tos-13", label: "13. Governing Law & Dispute Resolution" },
	{ href: "#tos-14", label: "14. Force Majeure" },
	{ href: "#tos-15", label: "15. Assignment" },
	{ href: "#tos-16", label: "16. Severability & Entire Agreement" },
	{ href: "#tos-17", label: "17. Modifications" },
];

export function TermsPage() {
	useSEO({
		title: "Terms of Service - Nuerova",
		description: "Read the Nuerova terms of service covering acceptable use, data ownership, subscription plans, AI-generated output, and governing legal terms.",
	});

	useScrollReveal();

	return (
		<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />

			<main id="main" className="flex-grow pb-section-gap pt-24">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pt-8 pb-section-gap reveal">
					<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
						LEGAL
					</span>
					<h1 className="font-headline-md text-4xl md:text-5xl text-primary mb-stack-lg leading-tight font-bold tracking-tight max-w-3xl">
						Terms of Service
					</h1>
					<p className="font-body-md text-body-md text-white/50 max-w-2xl mb-2">
						Ganvix Technologies Pvt Ltd ("Company", "we", "us", "our"), B-128, Sector 2, Noida, Uttar Pradesh, India —{" "}
						<a href="mailto:hello@nuerova.xyz" className="text-status-blue hover:underline">hello@nuerova.xyz</a>
					</p>
					<p className="font-body-md text-sm text-white/30 max-w-2xl mb-10">
						Last updated: September 5, 2026. This page is provided for transparency and is not a substitute for advice from your own counsel. See also our{" "}
						<Link to="/privacy" className="text-status-blue hover:underline">Privacy Policy</Link>.
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
									key={link.href}
									href={link.href}
									className="text-white/50 hover:text-status-blue transition-colors py-1"
								>
									{link.label}
								</a>
							))}
						</div>
					</nav>
				</section>

				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pb-section-gap reveal">
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

						<div id="tos-2">
							<h3 className="text-lg font-semibold text-white mb-2">2. Service Description</h3>
							<p>
								Nuerova is a team intelligence platform. It centralizes department and team knowledge into
								organization-scoped "clusters", deploys context-aware AI agents that answer questions and take
								actions within those clusters, provides a registry of reusable "skills", and lets teams build
								trigger-action automations on top of connected data sources.
							</p>
						</div>

						<div id="tos-3">
							<h3 className="text-lg font-semibold text-white mb-2">3. Account Registration & Eligibility</h3>
							<p>
								To use the Service you must register for an account. You represent and warrant that: (i) you are at
								least 18 years of age; (ii) all registration information you submit is accurate, current, and
								complete; and (iii) you will maintain the accuracy of such information. You are responsible for
								safeguarding your password and for all activity on your account, and must notify us immediately of
								any unauthorized use.
							</p>
						</div>

						<div id="tos-4">
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

						<div id="tos-5">
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

						<div id="tos-6">
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
								The Service uses AI agents (see{" "}
								<a href="/privacy#pp-3" className="text-status-blue hover:underline">Privacy Policy Section 3</a>) to
								answer questions, summarize connected knowledge, and, where enabled, take actions such as sending an
								email or posting a message. AI-generated output is provided as a suggestion or draft. Where an action
								would affect systems or people outside Nuerova (sending email, posting to Slack, creating a calendar
								event, writing to a connected third-party system), the Service is designed to require your explicit
								confirmation before the action is taken, and to keep a run log of what was executed. You are
								responsible for reviewing AI-generated output and confirmed actions before relying on them.
							</p>
							<p className="mt-2">
								We have not built, and do not operate, any process that uses your Customer Data to train,
								fine-tune, or otherwise improve our own AI models — this is true regardless of how you access the
								Service. Our AI processing runs on Google Cloud Vertex AI; what that means for the underlying model
								provider is addressed precisely in{" "}
								<a href="/privacy#pp-3" className="text-status-blue hover:underline">Privacy Policy Section 3</a>, since
								that part rests on our agreement with Google Cloud rather than on something we can independently
								guarantee.
							</p>
						</div>

						<div id="tos-8">
							<h3 className="text-lg font-semibold text-white mb-2">8. Third-Party Services & Connectors</h3>
							<p>The Service can connect to third-party accounts and infrastructure you choose to authorize, including:</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li><strong>Amazon Web Services</strong> — infrastructure hosting and data storage</li>
								<li><strong>Google Cloud Platform (Vertex AI)</strong> — AI model processing and embeddings</li>
								<li><strong>Google Workspace (Gmail, Calendar, Drive, Docs, Sheets, Tasks)</strong> — optional integration; see <a href="/privacy#pp-4" className="text-status-blue hover:underline">Privacy Policy Section 4</a></li>
								<li><strong>Microsoft 365 (Outlook Mail, Calendar, SharePoint, OneDrive & Teams)</strong> — optional integration; see <a href="/privacy#pp-5" className="text-status-blue hover:underline">Privacy Policy Section 5</a></li>
								<li><strong>Slack</strong> — optional integration; see <a href="/privacy#pp-6" className="text-status-blue hover:underline">Privacy Policy Section 6</a></li>
								<li><strong>Salesforce</strong> — optional, organization-level integration; see <a href="/privacy#pp-7" className="text-status-blue hover:underline">Privacy Policy Section 7</a></li>
								<li><strong>GitHub and Notion</strong> — optional integrations relayed live through each provider's own hosted service; see <a href="/privacy#pp-8" className="text-status-blue hover:underline">Privacy Policy Section 8</a></li>
								<li><strong>Shopify</strong> — optional integration, with functionality still rolling out; see <a href="/privacy#pp-9" className="text-status-blue hover:underline">Privacy Policy Section 9</a></li>
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

						<div id="tos-9">
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

						<div id="tos-11">
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

						<div id="tos-12">
							<h3 className="text-lg font-semibold text-white mb-2">12. Termination</h3>
							<p>
								Either party may terminate this Agreement at any time. We may suspend or terminate your access
								immediately if you breach this Agreement or at our discretion. On termination or cancellation, the
								Service supports one-click export of your data, and your account and connected data enters our
								offboarding process for automatic deletion, as described in{" "}
								<a href="/privacy#pp-15" className="text-status-blue hover:underline">Privacy Policy Section 15</a>. All
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

						<div id="tos-14">
							<h3 className="text-lg font-semibold text-white mb-2">14. Force Majeure</h3>
							<p>
								Neither party is liable for failure or delay in performing its obligations under this Agreement
								where such failure or delay results from circumstances beyond that party's reasonable control,
								including natural disasters, war, pandemics, government action, power or internet outages, or
								third-party service disruptions (including outages of connected providers such as Google, Microsoft,
								Slack, or AWS).
							</p>
						</div>

						<div id="tos-15">
							<h3 className="text-lg font-semibold text-white mb-2">15. Assignment</h3>
							<p>
								You may not assign or transfer this Agreement without our prior written consent. We may assign this
								Agreement freely in connection with a merger, acquisition, corporate reorganization, or sale of all
								or substantially all of our assets.
							</p>
						</div>

						<div id="tos-16">
							<h3 className="text-lg font-semibold text-white mb-2">16. Severability & Entire Agreement</h3>
							<p>
								If any provision of this Agreement is held invalid or unenforceable, it shall be modified to the
								minimum extent necessary to make it valid, and the remaining provisions continue in full force. This
								Agreement, together with the{" "}
								<Link to="/privacy" className="text-status-blue hover:underline">Privacy Policy</Link>, constitutes the
								entire agreement between you and Ganvix Technologies Pvt Ltd regarding the Service.
							</p>
						</div>

						<div id="tos-17">
							<h3 className="text-lg font-semibold text-white mb-2">17. Modifications</h3>
							<p>
								We may modify this Agreement at any time. Material changes will be communicated by email or a
								prominent in-Service notice at least 15 days before taking effect. Continued use of the Service
								after the effective date constitutes acceptance of the modified terms.
							</p>
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

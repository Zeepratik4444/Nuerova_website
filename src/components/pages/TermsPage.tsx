import { Navigation } from "@/components/Navigation";
import { Link } from "@tanstack/react-router";
import { useSEO } from "@/hooks/useSEO";

export function TermsPage() {
	useSEO({
		title: "Terms of Service & Privacy Policy - Nuerova",
		description: "Terms of Service & Privacy Policy for Nuerova.",
		noIndex: true,
	});

	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service & Privacy Policy</h1>
				<p className="text-sm text-gray-500 mb-4">Last updated: March 29, 2026</p>
				<p className="text-sm text-gray-600 mb-12">
					Nuero Technologies ("Company"), Bengaluru, Karnataka, India · <a href="mailto:hello@nuerova.com" className="text-blue-600 hover:underline">hello@nuerova.com</a>
				</p>

				{/* ── TABLE OF CONTENTS ── */}
				<nav className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
					<h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Links</h2>
					<div className="grid md:grid-cols-2 gap-x-8 gap-y-1 text-sm">
						<a href="#terms" className="text-blue-600 hover:underline py-1">Terms of Service</a>
						<a href="#privacy" className="text-blue-600 hover:underline py-1">Privacy Policy</a>
						<a href="#tos-1" className="text-gray-600 hover:text-blue-600 py-1 pl-3">1. Acceptance of Terms</a>
						<a href="#pp-1" className="text-gray-600 hover:text-blue-600 py-1 pl-3">1. Information We Collect</a>
						<a href="#tos-7" className="text-gray-600 hover:text-blue-600 py-1 pl-3">7. AI-Generated Content</a>
						<a href="#pp-3" className="text-gray-600 hover:text-blue-600 py-1 pl-3">3. AI Data Processing</a>
						<a href="#tos-9" className="text-gray-600 hover:text-blue-600 py-1 pl-3">9. Warranty Disclaimer</a>
						<a href="#pp-8" className="text-gray-600 hover:text-blue-600 py-1 pl-3">8. International Data Transfers</a>
						<a href="#tos-10" className="text-gray-600 hover:text-blue-600 py-1 pl-3">10. Indemnification</a>
						<a href="#pp-9" className="text-gray-600 hover:text-blue-600 py-1 pl-3">9. GDPR & Data Subject Rights</a>
						<a href="#tos-13" className="text-gray-600 hover:text-blue-600 py-1 pl-3">13. Governing Law</a>
						<a href="#pp-12" className="text-gray-600 hover:text-blue-600 py-1 pl-3">12. Children's Privacy</a>
					</div>
				</nav>

				{/* ══════════════════════════════════════════════════════════════════════
				    TERMS OF SERVICE
				    ══════════════════════════════════════════════════════════════════════ */}
				<section className="mb-16">
					<h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200" id="terms">Terms of Service</h2>

					<div className="space-y-8 text-gray-700 leading-relaxed">

						{/* 1 */}
						<div id="tos-1">
							<h3 className="text-lg font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h3>
							<p>
								By accessing or using Nuerova ("the Service"), operated by Nuero Technologies ("we", "us", "our"),
								you agree to be bound by these Terms of Service ("Agreement"). If you are using the Service on behalf of an organization,
								you represent and warrant that you have the authority to bind that organization to this Agreement.
							</p>
							<p className="mt-3 text-sm font-semibold text-gray-800 bg-gray-50 p-3 rounded border border-gray-200 uppercase">
								BY ACCESSING, BROWSING, OR USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD,
								AND AGREE TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT AGREE, YOU MUST NOT USE THE SERVICE.
							</p>
						</div>

						{/* 2 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">2. Service Description</h3>
							<p>
								Nuerova is a team intelligence platform that provides scoped knowledge clusters, context-aware
								agent helpers, and drag-and-drop visual workflows to centralize, process, and secure department knowledge.
							</p>
						</div>

						{/* 3 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">3. Account Registration & Eligibility</h3>
							<p>
								To use certain features of the Service, you must register for an account. You represent and warrant that:
								(i) you are at least 18 years of age; (ii) all registration information you submit is accurate, current, and complete;
								and (iii) you will maintain the accuracy of such information. You are responsible for safeguarding your
								password and for all activity on your account. You must notify us immediately of any unauthorized use.
							</p>
						</div>

						{/* 4 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">4. Free Trial & Subscriptions</h3>
							<p>
								We may offer a free trial period. Upon expiration, your access may be downgraded or suspended unless you
								subscribe to a paid plan. Paid subscriptions are billed in advance on a monthly or annual basis as selected
								at checkout. All fees are non-refundable except as required by applicable law or stated in our refund policy.
								We reserve the right to change pricing with 30 days' advance notice to existing subscribers.
							</p>
						</div>

						{/* 5 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">5. Acceptable Use</h3>
							<p>You agree not to:</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li>Use the Service for any unlawful or unauthorized purpose</li>
								<li>Attempt to reverse engineer, decompile, or disassemble the Service</li>
								<li>Upload malicious code, viruses, or interfere with the Service's infrastructure</li>
								<li>Share account credentials or allow unauthorized access</li>
								<li>Resell, sublicense, or redistribute the Service without written consent</li>
								<li>Use automated scripts to collect data from the Service ("scraping")</li>
								<li>Transmit spam, unsolicited messages, or misleading content through the Service</li>
								<li>Impersonate another person or entity, or falsely state your affiliation</li>
							</ul>
							<p className="mt-2">
								We reserve the sole right to determine whether you are in violation of these restrictions and may
								suspend or terminate your access at our discretion without prior notice.
							</p>
						</div>

						{/* 6 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">6. Intellectual Property</h3>
							<p>
								The Service, including its design, features, algorithms, AI models, documentation, and all associated
								intellectual property rights, are and shall remain the exclusive property of Nuero Technologies.
								Your subscription grants you a limited, non-exclusive, non-transferable, revocable license to use
								the Service solely for your internal business purposes during the subscription period.
							</p>
							<p className="mt-2">
								You retain all ownership rights to data you upload to the platform ("Customer Data"). By uploading
								Customer Data, you grant us a limited license to process it solely for the purpose of providing
								the Service to you.
							</p>
						</div>

						{/* 7 */}
						<div id="tos-7">
							<h3 className="text-lg font-semibold text-gray-900 mb-2">7. AI-Generated Content</h3>
							<p>
								The Service uses artificial intelligence (powered by Google Gemini) to query clusters, reason, and draft actions.
								AI-generated content is provided as suggestions only. You are solely responsible for reviewing, editing,
								and approving any content before it is dispatched or executed. We do not guarantee the accuracy,
								appropriateness, or completeness of AI-generated outputs.
							</p>
							<p className="mt-2">
								We do not use your Customer Data to train or improve third-party AI models. AI processing is conducted
								in accordance with Google Cloud's data processing agreements and enterprise-grade security certifications.
							</p>
						</div>

						{/* 8 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">8. Third-Party Services</h3>
							<p>
								The Service integrates with or relies on third-party services, including but not limited to:
							</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li><strong>Google Cloud Platform</strong> - Infrastructure hosting and AI processing</li>
								<li><strong>Razorpay</strong> - Payment processing and subscription billing</li>
								<li><strong>Email delivery services</strong> - Transactional and automated email dispatch</li>
							</ul>
							<p className="mt-2">
								We are not responsible for the availability, accuracy, or practices of third-party services.
								Your use of those services is subject to their respective terms and privacy policies.
								We do not endorse and shall not be liable for any third-party service.
							</p>
						</div>

						{/* 9 */}
						<div id="tos-9">
							<h3 className="text-lg font-semibold text-gray-900 mb-2">9. Warranty Disclaimer</h3>
							<p className="text-sm font-semibold text-gray-800 bg-gray-50 p-4 rounded border border-gray-200 uppercase leading-relaxed">
								THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND,
								EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY,
								FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. NUERO TECHNOLOGIES DOES NOT WARRANT
								THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE, OR THAT ANY DEFECTS WILL BE
								CORRECTED. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM THE COMPANY SHALL
								CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THIS AGREEMENT.
							</p>
						</div>

						{/* 10 */}
						<div id="tos-10">
							<h3 className="text-lg font-semibold text-gray-900 mb-2">10. Indemnification</h3>
							<p>
								You agree to indemnify, defend, and hold harmless Nuero Technologies, its officers, directors,
								employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities,
								costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with:
								(i) your use of the Service; (ii) your violation of this Agreement; (iii) your violation of any
								rights of any third party, including intellectual property rights; or (iv) any Customer Data you
								upload or process through the Service.
							</p>
						</div>

						{/* 11 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">11. Limitation of Liability</h3>
							<p className="text-sm font-semibold text-gray-800 bg-gray-50 p-4 rounded border border-gray-200 uppercase leading-relaxed">
								TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL NUERO TECHNOLOGIES, ITS OFFICERS,
								DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
								PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF REVENUE, DATA, BUSINESS OPPORTUNITIES, OR
								GOODWILL, ARISING FROM YOUR USE OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY
								OTHER LEGAL THEORY. IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY EXCEED THE GREATER OF (A) THE
								AMOUNT YOU HAVE PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS (US $100).
							</p>
						</div>

						{/* 12 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">12. Termination</h3>
							<p>
								Either party may terminate this Agreement at any time. We may terminate or suspend your access
								immediately, without prior notice, if you breach any provision of this Agreement or for any other
								reason at our sole discretion. Upon termination: (a) your right to use the Service ceases immediately;
								(b) we may retain your data for up to 30 days to facilitate reactivation; (c) after 30 days, your data
								will be permanently deleted unless retention is required by law. All provisions that by their nature
								should survive termination shall survive, including Sections 6, 9, 10, 11, and 13.
							</p>
						</div>

						{/* 13 */}
						<div id="tos-13">
							<h3 className="text-lg font-semibold text-gray-900 mb-2">13. Governing Law & Dispute Resolution</h3>
							<p>
								This Agreement shall be governed by and construed in accordance with the laws of India, without
								regard to conflict-of-law principles. Any dispute arising out of or relating to this Agreement
								shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.
							</p>
							<p className="mt-2">
								Before initiating any legal proceedings, the parties agree to attempt to resolve any dispute through
								good-faith negotiation for a period of at least thirty (30) days. If the dispute cannot be resolved
								through negotiation, either party may pursue arbitration under the Arbitration and Conciliation Act, 1996
								of India, administered by a sole arbitrator mutually agreed upon, seated in Bengaluru, India. The
								language of arbitration shall be English.
							</p>
						</div>

						{/* 14 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">14. Force Majeure</h3>
							<p>
								Neither party shall be liable for any failure or delay in performing its obligations under this Agreement
								if such failure or delay results from circumstances beyond the reasonable control of that party,
								including but not limited to acts of God, natural disasters, war, terrorism, pandemics, government
								actions, power failures, internet or telecommunications outages, or third-party service disruptions.
							</p>
						</div>

						{/* 15 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">15. Assignment</h3>
							<p>
								You may not assign or transfer this Agreement, or any rights or obligations hereunder, without our
								prior written consent. We may assign this Agreement freely in connection with a merger, acquisition,
								corporate reorganization, or sale of all or substantially all of our assets. Subject to the foregoing,
								this Agreement shall bind and inure to the benefit of the parties and their successors and permitted assigns.
							</p>
						</div>

						{/* 16 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">16. Severability & Entire Agreement</h3>
							<p>
								If any provision of this Agreement is held to be invalid or unenforceable, such provision shall be
								modified to the minimum extent necessary to make it valid, and the remaining provisions shall continue in
								full force and effect. This Agreement, together with the Privacy Policy, constitutes the entire agreement
								between you and Nuero Technologies regarding the Service, and supersedes all prior agreements,
								communications, and understandings.
							</p>
						</div>

						{/* 17 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">17. Modifications</h3>
							<p>
								We reserve the right to modify this Agreement at any time. Material changes will be communicated
								via email to the address associated with your account or through a prominent notice within the Service
								at least 15 days before the changes take effect. Your continued use of the Service after the effective
								date constitutes acceptance of the modified terms. If you disagree with the changes, you must stop
								using the Service and terminate your account.
							</p>
						</div>
					</div>
				</section>

				{/* ══════════════════════════════════════════════════════════════════════
				    PRIVACY POLICY
				    ══════════════════════════════════════════════════════════════════════ */}
				<section className="mb-16">
					<h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200" id="privacy">Privacy Policy</h2>

					<div className="space-y-8 text-gray-700 leading-relaxed">

						{/* PP-1 */}
						<div id="pp-1">
							<h3 className="text-lg font-semibold text-gray-900 mb-2">1. Information We Collect</h3>
							<p>We collect the following categories of information:</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li><strong>Account Data:</strong> Name, email address, company name, and password (stored as a cryptographic hash) provided during registration</li>
								<li><strong>Usage Data:</strong> Feature usage, session duration, pages visited, interaction patterns, IP address, browser type, and device identifiers - collected automatically for product improvement and security</li>
								<li><strong>Customer Data:</strong> Repository files, database tables, chat logs, meeting summaries, and other operational data you upload to or integrate with the platform</li>
								<li><strong>Payment Data:</strong> Billing information processed securely through Razorpay; we do not store credit card numbers, CVV codes, or full card details on our servers</li>
								<li><strong>Communication Data:</strong> Information you provide when contacting support, requesting demos, or responding to surveys</li>
							</ul>
						</div>

						{/* PP-2 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">2. How We Use Your Information</h3>
							<ul className="list-disc pl-6 space-y-1">
								<li>To provide, maintain, operate, and improve the Service</li>
								<li>To generate AI-powered cluster context matching, reasoning steps, and workflow draft suggestions</li>
								<li>To process payments and manage your subscription</li>
								<li>To send service-related communications (onboarding, billing, security alerts, product updates)</li>
								<li>To detect and prevent fraud, abuse, or security incidents</li>
								<li>To comply with legal obligations and enforce our terms</li>
								<li>To conduct analytics and research to improve user experience</li>
							</ul>
							<p className="mt-2">
								We do not use your information for third-party advertising. We may send promotional communications
								about our products, which you can opt out of at any time.
							</p>
						</div>

						{/* PP-3 */}
						<div id="pp-3">
							<h3 className="text-lg font-semibold text-gray-900 mb-2">3. AI Data Processing</h3>
							<p>
								Your Customer Data is processed by Google Gemini AI models hosted on Google Cloud Platform to generate
								insights, workflow actions, and agent responses. Key points:
							</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li>AI processing is performed in real-time and data is not retained by Google beyond the processing session</li>
								<li>We do <strong>not</strong> use your data to train or improve third-party AI models</li>
								<li>AI-generated outputs are suggestions only - you maintain full validation control</li>
								<li>All AI processing is subject to Google Cloud's enterprise data processing agreements and ISO 27001, SOC 2 security certifications</li>
							</ul>
						</div>

						{/* PP-4 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">4. Data Storage & Security</h3>
							<p>
								Your data is stored on Google Cloud Platform infrastructure. We implement industry-standard
								security measures including:
							</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li>Encryption at rest (AES-256) and in transit (TLS 1.2+)</li>
								<li>Role-based access controls with least-privilege principles</li>
								<li>Audit logging of administrative and data access events</li>
								<li>Regular security assessments and vulnerability scanning</li>
								<li>Hashed password storage using industry-standard algorithms (bcrypt)</li>
							</ul>
							<p className="mt-2">
								While we strive to protect your data, no method of transmission over the internet or electronic
								storage is 100% secure. We cannot guarantee absolute security.
							</p>
						</div>

						{/* PP-5 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">5. Data Sharing & Sub-Processors</h3>
							<p>We do not sell your personal data. We share information only with the following categories of recipients:</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li><strong>Google Cloud Platform</strong> - Infrastructure hosting, data storage, and AI processing (Gemini)</li>
								<li><strong>Razorpay</strong> - Payment processing and subscription management</li>
								<li><strong>Email delivery services</strong> - Transactional and automated email dispatch on your behalf</li>
								<li><strong>Legal & compliance</strong> - When required by law, regulation, subpoena, or valid legal process</li>
								<li><strong>Business transfers</strong> - In connection with a merger, acquisition, or sale of assets; you will be notified in advance</li>
							</ul>
							<p className="mt-2">
								All sub-processors are contractually obligated to maintain the confidentiality and security of your data
								and to process it only for the purposes of providing the Service.
							</p>
						</div>

						{/* PP-6 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">6. Legal Basis for Processing (GDPR)</h3>
							<p>If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we process your personal data on the following legal bases:</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li><strong>Contract performance:</strong> To provide the Service you have subscribed to</li>
								<li><strong>Legitimate interests:</strong> To improve the Service, ensure security, prevent fraud, and conduct analytics - where these interests are not overridden by your rights</li>
								<li><strong>Consent:</strong> For marketing communications and any optional data processing - you can withdraw consent at any time</li>
								<li><strong>Legal obligation:</strong> To comply with applicable laws and regulations</li>
							</ul>
						</div>

						{/* PP-7 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">7. Your Rights</h3>
							<p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
								<li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
								<li><strong>Erasure:</strong> Request deletion of your account and associated data ("right to be forgotten")</li>
								<li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
								<li><strong>Restriction:</strong> Request that we limit the processing of your data</li>
								<li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
								<li><strong>Withdraw consent:</strong> Withdraw consent at any time for consent-based processing</li>
								<li><strong>Opt out:</strong> Unsubscribe from non-essential marketing communications</li>
							</ul>
							<p className="mt-2">
								To exercise any of these rights, contact us at{" "}
								<a href="mailto:privacy@nuerova.com" className="text-blue-600 hover:underline">privacy@nuerova.com</a>.
								We will respond to your request within 30 days. If you are unsatisfied with our response, you have
								the right to lodge a complaint with your local data protection authority.
							</p>
						</div>

						{/* PP-8 */}
						<div id="pp-8">
							<h3 className="text-lg font-semibold text-gray-900 mb-2">8. International Data Transfers</h3>
							<p>
								Your data may be transferred to, stored in, and processed in countries other than your country of
								residence, including India, the United States (via Google Cloud infrastructure), and other jurisdictions
								where our service providers operate.
							</p>
							<p className="mt-2">
								When we transfer personal data outside of the EEA, UK, or Switzerland, we ensure appropriate safeguards
								are in place, including:
							</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
								<li>Adequacy decisions where applicable</li>
								<li>Contractual commitments with sub-processors that provide equivalent data protection</li>
							</ul>
						</div>

						{/* PP-9 */}
						<div id="pp-9">
							<h3 className="text-lg font-semibold text-gray-900 mb-2">9. GDPR & Data Subject Rights (EEA/UK)</h3>
							<p>
								If you are a resident of the European Economic Area or the United Kingdom, we act as the <strong>data controller</strong> for
								personal data collected through registration and website interactions. For Customer Data you upload
								to the Service, we act as a <strong>data processor</strong> on your behalf.
							</p>
							<p className="mt-2">
								You may exercise your data subject rights (listed in Section 7) by contacting us at{" "}
								<a href="mailto:privacy@nuerova.com" className="text-blue-600 hover:underline">privacy@nuerova.com</a>.
								We will verify your identity before processing any request. Enterprise customers requiring a formal
								Data Processing Agreement (DPA) may request one at the same address.
							</p>
						</div>

						{/* PP-10 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">10. Data Retention</h3>
							<p>
								We retain your personal data for the duration of your active subscription and for a period thereafter
								as necessary to fulfill the purposes outlined in this Privacy Policy. Specific retention periods:
							</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li><strong>Account data:</strong> Retained for the life of your account + 30 days after deletion request</li>
								<li><strong>Customer data:</strong> Deleted within 30 days of account termination</li>
								<li><strong>Usage/analytics data:</strong> Retained in anonymized or aggregated form indefinitely for product improvement</li>
								<li><strong>Billing records:</strong> Retained as required by applicable tax and accounting laws (typically 7 years)</li>
								<li><strong>Communication records:</strong> Retained for up to 2 years for quality and support purposes</li>
							</ul>
						</div>

						{/* PP-11 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">11. Cookies & Tracking Technologies</h3>
							<p>We use the following types of cookies and similar technologies:</p>
							<ul className="list-disc pl-6 mt-2 space-y-1">
								<li><strong>Essential cookies:</strong> Required for authentication, session management, and security - cannot be disabled</li>
								<li><strong>Analytics cookies:</strong> Help us understand usage patterns and improve the Service (e.g., page views, feature usage)</li>
								<li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
							</ul>
							<p className="mt-2">
								We do <strong>not</strong> use third-party advertising cookies or cross-site tracking pixels.
								You can manage cookie preferences through your browser settings. Disabling essential cookies may
								affect the functionality of the Service.
							</p>
						</div>

						{/* PP-12 */}
						<div id="pp-12">
							<h3 className="text-lg font-semibold text-gray-900 mb-2">12. Children's Privacy</h3>
							<p>
								The Service is not intended for individuals under the age of 18. We do not knowingly collect personal
								data from children under 18. If we become aware that we have inadvertently collected data from a minor,
								we will take steps to delete that information promptly. If you are a parent or guardian and believe
								your child has provided us with personal data, please contact us at{" "}
								<a href="mailto:privacy@nuerova.com" className="text-blue-600 hover:underline">privacy@nuerova.com</a>.
							</p>
						</div>

						{/* PP-13 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">13. Data Breach Notification</h3>
							<p>
								In the event of a personal data breach that is likely to result in a risk to your rights and freedoms,
								we will notify you and any applicable regulatory authorities without undue delay and, where feasible,
								within 72 hours of becoming aware of the breach, in accordance with applicable data protection laws
								(including GDPR Article 33). Notification will include the nature of the breach, likely consequences,
								and measures taken to address it.
							</p>
						</div>

						{/* PP-14 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">14. Changes to This Privacy Policy</h3>
							<p>
								We may update this Privacy Policy from time to time to reflect changes in our practices, technologies,
								or legal requirements. We will notify you of material changes by posting a notice within the Service
								or sending an email to your registered address at least 15 days before the changes take effect.
								The "Last updated" date at the top of this page indicates when this policy was last revised.
								Your continued use of the Service after changes constitutes acceptance of the updated policy.
							</p>
						</div>

						{/* PP-15 */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">15. Contact Us</h3>
							<p>
								If you have any questions, concerns, or requests regarding these Terms of Service or our Privacy Policy,
								please contact us:
							</p>
							<div className="mt-3 bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm space-y-2">
								<p><strong>Nuero Technologies</strong></p>
								<p>Bengaluru, Karnataka, India</p>
								<p>
									General inquiries:{" "}
									<a href="mailto:hello@nuerova.com" className="text-blue-600 hover:underline">hello@nuerova.com</a>
								</p>
								<p>
									Privacy & data requests:{" "}
									<a href="mailto:privacy@nuerova.com" className="text-blue-600 hover:underline">privacy@nuerova.com</a>
								</p>
							</div>
							<p className="mt-3 text-sm text-gray-600">
								We aim to respond to all inquiries within 5 business days. For data subject rights requests, we will
								respond within 30 days as required by applicable law.
							</p>
						</div>
					</div>
				</section>

				{/* Back link */}
				<div className="text-center pt-8 border-t border-gray-200">
					<Link to="/" className="text-blue-600 hover:underline text-sm">
						← Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}

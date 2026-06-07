import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mr-2 mb-2">
            {children}
        </span>
    );
}

function Callout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 my-8">
            {children}
        </div>
    );
}

function ReasonCard({ title, body, ctaText, ctaHref }: { title: string; body: string; ctaText: string; ctaHref: string }) {
    return (
        <div className="bg-gray-900 text-white rounded-xl p-8 my-10">
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-300 mb-4">{body}</p>
            <Link to={ctaHref} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
                {ctaText}
            </Link>
        </div>
    );
}

export function Blog10Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <div className="max-w-3xl mx-auto px-6 pt-8">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to blog
                </Link>
            </div>

            <header className="max-w-3xl mx-auto px-6 pt-16 pb-10">
                <div className="mb-5">
                    <Tag>Integrations</Tag>
                    <Tag>Technology</Tag>
                    <Tag>Buying Guide</Tag>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Zendesk, HubSpot and Salesforce:{" "}
                    <span className="text-blue-600">The Complete CS Platform Integration Guide</span>
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed">
                    Your CS platform is only as good as the data it can see. Here is how to build a unified customer view from your existing stack - and why the quality of your integrations determines whether your health scores actually predict churn.
                </p>
            </header>

            <main className="max-w-3xl mx-auto px-6 pb-20">
                <div className="prose prose-lg prose-gray max-w-none">
                    <p>
                        Most SaaS companies arrive at the same infrastructure by default: Salesforce or HubSpot for CRM, Zendesk for support, and Slack for internal communication. It is a reasonable stack. Each tool does its job well. The problem is that these tools do not talk to each other in a way that is useful for Customer Success.
                    </p>
                    <p>
                        Your sales team closes a deal in Salesforce. The contract data lives there. Your support team handles issues in Zendesk. The ticket history lives there. Your CS team is supposed to proactively manage account health - but their view of each customer is whatever they can manually piece together from two separate systems, plus whatever notes they have in a spreadsheet.
                    </p>
                    <p>
                        This is not a people problem. It is an integration problem. And the way you solve it determines whether your CS platform can actually prevent churn or just report on it after the fact.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Most CS Integrations Fail</h2>
                    <p>
                        The most common failure mode for CS platform integrations is the one-way sync. The CS platform reads data from your CRM or support tool at a set interval and displays it in a dashboard. The CSM sees the data. But nothing happens automatically based on what the data shows. The platform is a viewer, not an actor.
                    </p>
                    <p>
                        The second failure mode is signal isolation. The CS platform connects to each tool separately but treats each source as independent. It might show you Zendesk tickets in one column and CRM data in another - but it does not combine these signals into a unified health model. A customer with declining usage and three unresolved high-priority tickets looks different from a customer with declining usage and no recent support activity. The former is a churn risk. The latter might just need an activation nudge. A platform that shows both signals but does not combine them leaves that interpretation work to the CSM.
                    </p>
                    <p>
                        Renewal360's approach is different on both counts. The integration layer is bidirectional - Renewal360 reads from your tools and writes back to them. And the signal processing is composite - every data source feeds a unified health model, not separate displays.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Salesforce Integration</h2>
                    <p>
                        Salesforce is where your contract reality lives. ARR, renewal dates, account tier, contact records, opportunity history - this is the commercial foundation of every account in your CS portfolio. Renewal360 connects to Salesforce via OAuth, with no manual API key configuration required.
                    </p>
                    <p>What Renewal360 pulls from Salesforce:</p>
                    <ul className="space-y-2 my-4">
                        <li><strong>Account data:</strong> Company name, industry, tier, assigned CSM, custom fields</li>
                        <li><strong>Contract data:</strong> ARR, renewal date, contract start date, expansion opportunities</li>
                        <li><strong>Contact data:</strong> Decision-maker contacts, email addresses, title, last activity</li>
                        <li><strong>Custom objects:</strong> Any custom Salesforce object can be mapped to drive health score inputs or trigger automation rules</li>
                    </ul>
                    <p>
                        The bidirectional element: when a renewal is confirmed in Renewal360, that update writes back to the corresponding Salesforce opportunity. Your CRM stays current without requiring CSMs to update two systems. For health scoring, Salesforce data contributes the relationship recency signal and the contract urgency signal - how close is this account to its renewal date and what is the ARR at stake.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The HubSpot Integration</h2>
                    <p>
                        HubSpot is the CRM of choice for many growth-stage SaaS companies. The Renewal360 HubSpot integration covers the same commercial data layer as Salesforce - contacts, deals, renewal dates, company properties - via the same OAuth-based connection.
                    </p>
                    <p>
                        For teams on HubSpot, the bidirectional sync is particularly valuable for deal stage management. As accounts progress through renewal sequences in Renewal360, deal stage updates flow back to HubSpot automatically. Your RevOps team's pipeline reports stay accurate without requiring CSMs to maintain deal stages manually.
                    </p>
                    <p>
                        HubSpot's contact timeline also benefits from the integration. Every outreach email sent through Renewal360 - approved by a CSM and delivered to a customer - is logged as an activity on the corresponding HubSpot contact. Your full communication history is visible in both platforms without duplication of effort.
                    </p>

                    {/* Comparison Table */}
                    <div className="my-10 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="text-left px-5 py-4 font-semibold text-gray-700">Capability</th>
                                    <th className="text-left px-5 py-4 font-semibold text-gray-700">Salesforce Native</th>
                                    <th className="text-left px-5 py-4 font-semibold text-gray-700">HubSpot Native</th>
                                    <th className="text-left px-5 py-4 font-semibold text-blue-700 bg-blue-50/60">Renewal360</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    ["Multi-factor health scoring", "Manual / basic", "Manual / basic", "Automated, 5-signal composite"],
                                    ["AI-personalised outreach", "Generic templates", "Generic templates", "Account-specific AI drafts"],
                                    ["Reply detection & sequence pause", "Not available", "Not available", "Automatic, real-time"],
                                    ["Human approval before sending", "Not available", "Not available", "Built-in approval queue"],
                                    ["Support sentiment in health score", "Not available", "Not available", "Via Zendesk integration"],
                                    ["Executive ARR-at-risk dashboard", "Complex custom reports", "Complex custom reports", "Real-time, no configuration"],
                                ].map(([capability, sf, hs, r360]) => (
                                    <tr key={capability}>
                                        <td className="px-5 py-3.5 font-medium text-gray-800">{capability}</td>
                                        <td className="px-5 py-3.5 text-gray-500">{sf}</td>
                                        <td className="px-5 py-3.5 text-gray-500">{hs}</td>
                                        <td className="px-5 py-3.5 text-blue-700 font-medium bg-blue-50/40">{r360}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Zendesk Integration</h2>
                    <p>
                        Support tickets are one of the most underused signals in Customer Success. The volume, priority, and resolution time of a customer's recent tickets tells you something their usage data cannot - how frustrated they are right now, today.
                    </p>
                    <p>
                        Renewal360 connects to Zendesk via OAuth and processes ticket data in two ways. First, it analyses ticket sentiment to classify recent tickets as positive, neutral, or negative. Second, it monitors ticket volume and priority relative to that account's history and tier, flagging accounts where support load is anomalously high.
                    </p>
                    <p>
                        Both signals feed directly into the account's composite health score. An account with an NPS drop and four high-priority tickets in the last two weeks will see its health score decrease automatically - no manual intervention required. The CSM is alerted, and the renewal sequence can be configured to pause until support issues are resolved. This prevents the tone-deaf scenario where an automated renewal email fires while a customer is actively frustrated with unresolved issues.
                    </p>
                    <p>
                        The Zendesk integration also powers survey triggers. When a ticket is marked resolved, Renewal360 can automatically fire a CSAT survey to the ticket requester. The response updates the account health score and, if negative, triggers a CSM task - closing the support-to-success feedback loop entirely inside the platform.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Email Integrations: Gmail and Outlook</h2>
                    <p>
                        Renewal360's outreach is sent from your team's actual email accounts - not from a platform domain that customers can identify as automated. Gmail (Google OAuth) and Outlook (Microsoft Graph API) integrations mean that emails drafted and approved in Renewal360 are delivered from the CSM's real inbox. Replies land in that same inbox. The customer experience is indistinguishable from a manually written email.
                    </p>
                    <p>
                        Reply detection works by monitoring the connected inbox in real time. When a reply is received to any email that originated from a Renewal360 sequence, the platform identifies it, pauses the sequence for that account, notifies the assigned CSM in Slack or Teams, and logs the reply as a touchpoint in the account's interaction history. The entire loop completes in seconds.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Communication Integrations: Slack and Microsoft Teams</h2>
                    <p>
                        CS teams live in Slack or Teams. Renewal360 integrates with both to bring account alerts into the channels where your team already works, rather than requiring them to log in to a separate platform to see notifications.
                    </p>
                    <p>
                        You can configure which events trigger notifications: a health score dropping below your risk threshold, a reply received on an active sequence, a survey response below a defined NPS score, an account entering high-risk state within 30 days of renewal. Each notification includes the account name, the triggering event, the current health score, and a direct link to the account view in Renewal360.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Choosing Your CS Platform Based on Your Stack</h2>
                    <p>
                        The right CS platform for your team is the one that integrates most deeply with the tools you already rely on. If your organisation is Salesforce-first, you need a bidirectional Salesforce integration that keeps your CRM as the commercial record of truth. If you are HubSpot-first, you need deal stage sync and contact timeline activity logging. If your support team lives in Zendesk, you need sentiment analysis feeding your health model - not just a ticket count.
                    </p>
                    <p>
                        Renewal360 supports all of the above simultaneously. You do not have to choose which integration to prioritise. Connect all of your tools on day one and let the composite health model combine their signals into a single view of each account.
                    </p>

                    <Callout>
                        <strong className="text-gray-900">Integration setup time:</strong>
                        <p className="mt-2 text-gray-700">
                            All integrations in Renewal360 use OAuth - no API keys, no engineering work, no professional services engagement. Salesforce, HubSpot, and Zendesk connections typically take under 10 minutes each. Gmail and Outlook under 5 minutes. Your first health scores are available within hours of connecting your CRM.
                        </p>
                    </Callout>
                </div>

                <ReasonCard
                    title="Already using Salesforce, HubSpot or Zendesk?"
                    body="You are 10 minutes away from a unified customer health view. Connect your stack and see your first at-risk accounts before end of day."
                    ctaText="Start your free pilot - 25 accounts, no credit card"
                    ctaHref="/contact"
                />

                <div className="mt-12 pt-8 border-t border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Related Reading</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/blog/customer-success-platform-for-growing-saas" className="text-blue-600 hover:underline">
                                The CS Platform Built for Growing SaaS Teams
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog/how-to-run-your-entire-cs-operation-in-renewal360" className="text-blue-600 hover:underline">
                                How to Run Your Entire CS Operation in Renewal360
                            </Link>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
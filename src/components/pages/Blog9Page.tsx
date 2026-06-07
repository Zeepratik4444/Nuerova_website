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

export function Blog9Page() {
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
                    <Tag>Tutorial</Tag>
                    <Tag>Operations</Tag>
                    <Tag>Best Practices</Tag>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    How to Run Your Entire CS Operation in{" "}
                    <span className="text-blue-600">Renewal360</span>
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed">
                    You do not need five different tools to manage your customers. Here is the complete guide to using Renewal360 as your core Customer Success operating system - from day one onboarding through renewal and expansion.
                </p>
            </header>

            <main className="max-w-3xl mx-auto px-6 pb-20">
                <div className="prose prose-lg prose-gray max-w-none">
                    <p>
                        For most growing SaaS teams, Customer Success is not a platform - it is a collection of workarounds. Salesforce tracks contracts. Zendesk handles tickets. Slack carries escalations. Google Sheets holds the renewal calendar. And somewhere in between all of that, a CSM is supposed to proactively drive value for 80 to 150 accounts simultaneously.
                    </p>
                    <p>
                        The fragmentation is not just inefficient. It is where churn hides. When the signal that an account is at risk lives in three different tools, it rarely gets connected into a coherent picture until it is too late. Renewal360 was designed to be the platform that consolidates these signals and translates them into action - automatically, at scale, with humans in control of every customer touchpoint.
                    </p>
                    <p>Here is how to use it as your complete CS operating system.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 1: Build Your Intelligence Foundation</h2>
                    <p>
                        The first thing Renewal360 does when you connect your tools is build a per-account knowledge layer. This is not a simple data sync. It is an active intelligence model that combines signals from multiple sources into a single, continuously updated view of each customer.
                    </p>
                    <p>
                        Connect your CRM - Salesforce or HubSpot - via OAuth. Renewal360 pulls account details, contract values, renewal dates, and contact records automatically. Connect Zendesk and the platform begins ingesting support ticket history, analysing sentiment, and flagging accounts where support load is high relative to their tier or lifecycle stage.
                    </p>
                    <p>The result is a health score per account built on five composite signals:</p>
                    <ul className="space-y-2 my-4">
                        <li><strong>Product usage trends:</strong> Is adoption growing, flat, or declining over the last 30 and 90 days?</li>
                        <li><strong>Email engagement:</strong> Are your outreach emails being opened? Are replies coming back?</li>
                        <li><strong>Support sentiment:</strong> What is the tone and volume of recent Zendesk tickets?</li>
                        <li><strong>CRM relationship recency:</strong> When was the last meaningful touch with this account recorded?</li>
                        <li><strong>Survey responses:</strong> What did this customer say the last time you asked how things were going?</li>
                    </ul>
                    <p>
                        No single signal tells the full story. A customer who logs in daily but has three unresolved high-priority tickets is not healthy. A customer with low usage but a recent positive QBR and a signed expansion order is not at risk. The composite model is what separates Renewal360's health scoring from a simple usage dashboard.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 2: Configure Your Lifecycle Sequences</h2>
                    <p>
                        Once your intelligence foundation is in place, configure the automated sequences that drive proactive CS at scale. Renewal360 supports sequences for every stage of the customer lifecycle - not just renewals.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Onboarding Sequences</h3>
                    <p>
                        Configure check-in touchpoints at Day 7, Day 14, and Day 30 of a new customer's lifecycle. These sequences trigger automatically based on the account creation date synced from your CRM. Each touchpoint generates an AI-drafted email personalised to that account's industry, product tier, and onboarding progress - which lands in your approval queue before sending.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Adoption Sequences</h3>
                    <p>
                        Set usage thresholds that trigger automatic alerts and outreach when a customer's product engagement drops below a defined level. If a previously active account has not logged in for 14 days, the system flags it, drafts an adoption check-in email, and notifies the assigned CSM in Slack. The CSM reviews the draft, adjusts if needed, and approves - all without needing to manually identify the at-risk account first.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Renewal Sequences</h3>
                    <p>
                        The renewal engine fires outreach automatically at T-90, T-60, T-30, and T-7 before each account's renewal date. Each email is AI-drafted using account-specific context - their current health score, recent support interactions, expansion signals from your CRM, and the relationship history stored in the platform's knowledge layer. Nothing generic. Nothing that reads like a mass email.
                    </p>
                    <p>
                        Reply detection runs continuously across all active sequences. The moment a customer responds to any automated email, Renewal360 pauses all further automation for that account and notifies the CSM immediately via Slack or Teams. No follow-up fires into an active conversation.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Expansion Sequences</h3>
                    <p>
                        Renewal360 can trigger expansion outreach automatically when an account's health score crosses a positive threshold - high usage, positive NPS, recent successful support resolution - identifying the moment when a customer is most likely to respond positively to an upsell conversation.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 3: Close the Feedback Loop with Surveys</h2>
                    <p>
                        Customer feedback is only useful if it informs action. Renewal360's native survey engine is integrated directly with the health scoring and automation layers, meaning survey results do not sit in a separate reporting tool - they affect what happens next for each account.
                    </p>
                    <p>
                        Configure NPS surveys to trigger automatically 45 days before a renewal. Configure CSAT surveys to fire after a support ticket is marked resolved in Zendesk. Each survey response updates the account's health score in real time. A detractor response automatically creates a CSM task and can trigger a dedicated escalation sequence. A promoter response can feed into an expansion sequence or a referral request workflow.
                    </p>
                    <p>
                        The feedback loop is closed entirely inside the platform. No manual CSV exports. No cross-referencing spreadsheets. Your CSMs know how customers feel and the system adjusts its behaviour based on that feedback automatically.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 4: Manage Touchpoints and Relationship History</h2>
                    <p>
                        Every meaningful interaction with a customer - a call, a QBR, a check-in email, a support escalation, a product training session - should be recorded as a touchpoint inside Renewal360. Quick-log touchpoint entries take seconds to complete and attach automatically to the relevant account.
                    </p>
                    <p>
                        Over time, this builds a complete relationship history per account visible to every member of your CS team. When a CSM is on leave and a customer escalates, their colleague can see the full context of that relationship - every interaction, every survey response, every support ticket, every email in the renewal sequence - without asking anyone or digging through email threads.
                    </p>
                    <p>
                        Calendar integration with Google Calendar and Microsoft Outlook means that scheduled meetings, QBRs, and renewal calls sync automatically into Renewal360. The platform becomes the single source of truth for everything that happens with each customer.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 5: Run Leadership Reviews from the Executive Dashboard</h2>
                    <p>
                        The executive dashboard in Renewal360 replaces the weekly spreadsheet your VP CS currently prepares for the Monday morning sync. It shows, in real time:
                    </p>
                    <ul className="space-y-2 my-4">
                        <li><strong>ARR at risk:</strong> Total contract value tied to accounts with health scores below your defined risk threshold</li>
                        <li><strong>Renewal pipeline:</strong> A 12-month view of upcoming renewals organised by value, health score, and sequence status</li>
                        <li><strong>Team performance:</strong> Approval rates, email response rates, saved ARR per CSM, and sequence completion rates</li>
                        <li><strong>Sequence status:</strong> Which accounts are active, which have replied, which are awaiting approval, which are paused</li>
                    </ul>
                    <p>
                        Leadership gets the visibility they need without requiring CSMs to prepare manual reports. Investors and board members can see retention health in a format that makes the business case for CS investment clear and quantifiable.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step 6: Manage Team Access and Security</h2>
                    <p>
                        Renewal360 ships with Role-Based Access Control (RBAC) allowing you to define what different team members can see and do within the platform. A junior CSM manages their assigned accounts and approves emails in their queue. A VP CS sees all accounts, edits sequences, and views team performance metrics. An executive accesses the dashboard and reporting without seeing individual customer communications.
                    </p>
                    <p>
                        SSO (Single Sign-On) allows your team to log in through your existing identity provider - no new password to manage. MFA (Multi-Factor Authentication) adds a second layer of security for all accounts. Your customer data is stored in a fully isolated multi-tenant architecture - your organisation's data is never co-mingled with another customer's.
                    </p>

                    <Callout>
                        <strong className="text-gray-900">The result:</strong>
                        <p className="mt-2 text-gray-700">
                            A single CSM using Renewal360 can manage 3 to 5 times more accounts than they could with manual processes alone - without reducing the quality or personalisation of customer interactions. The platform handles the routine. Humans handle the relationships.
                        </p>
                    </Callout>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Stack You Replace</h2>
                    <p>Running your CS operation on Renewal360 replaces or consolidates:</p>
                    <ul className="space-y-2 my-4">
                        <li>Renewal tracking spreadsheets</li>
                        <li>Manual health score documents</li>
                        <li>Separate email sequence tools (Outreach, Salesloft used incorrectly for CS)</li>
                        <li>Standalone NPS tools (Delighted, Typeform)</li>
                        <li>Manual Slack notifications built in Zapier</li>
                        <li>Weekly CSV exports for executive reporting</li>
                    </ul>
                    <p>
                        The integrations with Salesforce, HubSpot, and Zendesk stay - Renewal360 sits on top of your existing stack, not in competition with it. Everything else consolidates into the platform.
                    </p>
                </div>

                <ReasonCard
                    title="Ready to consolidate your CS stack?"
                    body="Start your free pilot with 25 accounts. Connect your CRM on day one and have your first renewal sequences running by day five."
                    ctaText="Book a platform walkthrough"
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
                            <Link to="/blog/zendesk-hubspot-salesforce-cs-platform-comparison" className="text-blue-600 hover:underline">
                                Zendesk, HubSpot and Salesforce: The Modern CS Integration Guide
                            </Link>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
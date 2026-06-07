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

export function Blog8Page() {
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
          <Tag>Strategy</Tag>
          <Tag>Customer Success</Tag>
          <Tag>SaaS Growth</Tag>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          The Customer Success Platform Built for{" "}
          <span className="text-blue-600">Growing SaaS Teams</span>
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          Most CS platforms were built for the enterprise. We built one for the rest of us - the teams who need to prevent churn without a 6-month implementation project, a dedicated RevOps admin, or a six-figure annual contract.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-lg prose-gray max-w-none">
          <p>
            There is a trap that catches almost every SaaS company between $1M and $10M ARR. You have grown past the point where a spreadsheet can manage your customers. You know accounts are churning silently. Your CSMs are reactive, spending their days firefighting instead of driving value. But when you look at the tools designed to fix this - Gainsight, Totango, ChurnZero - you realise they were built for a company three times your size, at three times your budget, with three times your implementation capacity.
          </p>
          <p>
            This is the gap Renewal360 was built to fill. Not as a lightweight workaround, but as a full Customer Success platform with the depth of an enterprise system and the speed of a modern SaaS product. Here is what that actually means.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Growing Teams Get Stuck</h2>
          <p>
            The problem is not effort. CS teams at growing SaaS companies work incredibly hard. The problem is that the tools available force them into one of two bad positions: either managing everything manually in spreadsheets and CRM notes, or committing to an enterprise platform that requires months of configuration before delivering any value.
          </p>
          <p>
            Both paths lead to the same outcome: by the time a risk signal is visible, the customer has already mentally decided to leave. Usage drops. Support tickets stop being filed because the customer has given up. Outreach goes unanswered. And then the renewal call happens and everyone is surprised.
          </p>
          <p>
            The fix is not more dashboards. It is a platform that connects your existing tools, builds a real picture of account health across multiple signals, and then helps your team take action before it is too late - automatically, at scale, with humans staying in control of every customer touchpoint.
          </p>

          <Callout>
            <strong className="text-gray-900">The Renewal360 Principle:</strong>
            <p className="mt-2 text-gray-700">
              We believe the best CS platform is the one that adapts to your existing stack, not the one that forces you to rebuild your processes around it. Connect your CRM and support desk via OAuth. Be operational in 7 days. No custom engineering required.
            </p>
          </Callout>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">A Full CS Platform - Not Just Renewal Automation</h2>
          <p>
            One of the most common misconceptions about Renewal360 is that it only handles renewal emails. The name contributes to that confusion. In reality, the platform covers the entire customer success lifecycle - from onboarding through expansion, with renewals as the highest-stakes moment in that journey.
          </p>
          <p>Here is what the full platform includes:</p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Multi-Factor Health Scoring</h3>
          <p>
            A single health score built on one data point - say, product logins - is easy to game and easy to misread. Renewal360 calculates account health across five composite signals: product usage trends, email engagement rates, support ticket volume and sentiment, CRM relationship recency, and NPS/CSAT survey results. Each signal is weighted and combined into a single score that updates continuously as new data flows in from your connected tools.
          </p>
          <p>
            This means a customer who logs in weekly but has three open high-severity Zendesk tickets and hasn't opened your last four outreach emails will be correctly flagged as at-risk - even if their usage metric alone looks healthy.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Automated Renewal and Lifecycle Sequences</h3>
          <p>
            Renewal360 automates the touchpoints that protect your ARR. T-90, T-60, T-30, and T-7 renewal sequences fire automatically based on contract dates synced from your CRM. But the platform goes beyond renewals. You can configure onboarding check-in sequences, adoption nudges triggered by usage drops, QBR preparation workflows, and expansion opportunity alerts - all driven by the same health scoring engine.
          </p>
          <p>
            Every automated email is AI-drafted and personalised per account using that account's specific context: their industry, their usage pattern, their open support issues, their relationship history. Nothing generic. Nothing that reads like a template.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Human Approval Workflow</h3>
          <p>
            Automation without oversight is how CS teams lose trust with their customers. Every AI-drafted email in Renewal360 lands in an approval queue before it reaches any inbox. Your CSMs review, edit, or reject each draft in seconds. The system gives them the leverage to manage far more accounts than they could manually, while keeping them in control of every word that goes out under their name.
          </p>
          <p>
            The moment a customer replies to any sequence, Renewal360 stops all further automation for that account and notifies the assigned CSM immediately - via Slack, Teams, or email. No follow-up fires into an active conversation. No awkward automated message after a human exchange has already begun.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Native Survey Engine</h3>
          <p>
            Most CS platforms treat NPS and CSAT as bolt-ons. In Renewal360, the survey engine is a first-class feature. You can trigger surveys automatically - after a support ticket closes, at a specific point in the customer lifecycle, or a set number of days before renewal. Survey responses feed directly back into the account's health score. A detractor score automatically creates a CSM task. A promoter score can trigger an expansion sequence. The feedback loop is closed inside the platform, not across three different tools.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Touchpoint and Calendar Management</h3>
          <p>
            Every meaningful interaction with a customer - a call, a QBR, a check-in email, a support escalation - is logged as a touchpoint inside Renewal360. Calendar integrations with Google Calendar and Microsoft Outlook mean that scheduled meetings sync automatically, and renewal dates appear in your team's calendar without manual entry.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Custom Fields and Data Enrichment</h3>
          <p>
            Renewal360 supports custom fields at the account level, allowing you to track the metrics that matter for your specific business - whether that is a product-specific adoption score, a custom tier classification, or a field pulled from a data source unique to your stack. These custom fields can feed into health score calculations and trigger automation rules.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Enterprise-Grade Security</h3>
          <p>
            Renewal360 ships with SSO (Single Sign-On), MFA (Multi-Factor Authentication), and Role-Based Access Control as standard. Your data is isolated at the organisation level in a multi-tenant architecture. Billing and subscription management is built into the platform with no third-party tools required.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Integrations That Actually Work</h2>
          <p>Renewal360 connects to the tools your team already uses - not to replace them, but to unify the signals they produce into a single view of each customer.</p>
          <ul className="space-y-2 my-4">
            <li><strong>CRM:</strong> Salesforce (OAuth), HubSpot (OAuth) - bidirectional sync of contacts, deals, and renewal dates</li>
            <li><strong>Support:</strong> Zendesk (OAuth) - ticket sentiment analysis feeding health scores</li>
            <li><strong>Email:</strong> Gmail (OAuth), Outlook/Microsoft Graph - outreach sent from your own domain</li>
            <li><strong>Communication:</strong> Slack, Microsoft Teams - real-time alerts and reply notifications</li>
            <li><strong>Calendar:</strong> Google Calendar, Microsoft Calendar - renewal date sync and meeting scheduling</li>
          </ul>
          <p>
            All integrations use OAuth - no API keys stored in spreadsheets, no manual exports, no brittle Zapier chains. Connect once, stay connected.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7 Days to Value</h2>
          <p>The benchmark we hold ourselves to is 7 days from signup to a fully operational CS platform:</p>
          <ul className="space-y-3 my-4">
            <li><strong>Day 1:</strong> Connect your CRM and support desk. Accounts populate automatically with existing contract and support data.</li>
            <li><strong>Day 2–3:</strong> Health scoring activates. Your highest-risk accounts surface immediately based on composite signals.</li>
            <li><strong>Day 4–5:</strong> Configure your first renewal sequences. AI begins drafting outreach. First emails land in the approval queue.</li>
            <li><strong>Day 6:</strong> Connect Slack or Teams. CSMs receive real-time alerts for reply events and health score changes.</li>
            <li><strong>Day 7:</strong> Executive dashboard live. ARR-at-risk visible in real time. First week of AI-assisted outreach reviewed and sent.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Who Renewal360 Is Built For</h2>
          <p>
            Renewal360 is the right platform for SaaS companies managing between 50 and 2,000 customer accounts with a CS team of 1 to 20 people. If you are currently managing renewals in spreadsheets, running CS out of your CRM without a dedicated tool, or stuck in the gap between "too small for Gainsight" and "too big for manual processes" - this is the platform built for your stage.
          </p>
          <p>
            It is also the right platform for SaaS teams who tried an enterprise CS tool and found themselves spending more time configuring the platform than serving customers. Renewal360 does not require a dedicated admin. It does not require a 3-month onboarding project. It requires a CRM login and 7 days.
          </p>
        </div>

        <ReasonCard
          title="Ready to move beyond spreadsheets?"
          body="Start your free pilot with 25 accounts. No credit card. No implementation project. Just a CS platform that works the week you connect it."
          ctaText="Start your free pilot today"
          ctaHref="/contact"
        />

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Reading</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/blog/gainsight-vs-totango-vs-renewal360" className="text-blue-600 hover:underline">
                Gainsight vs Totango vs Renewal360: The Honest Comparison
              </Link>
            </li>
            <li>
              <Link to="/blog/how-to-run-your-entire-cs-operation-in-renewal360" className="text-blue-600 hover:underline">
                How to Run Your Entire CS Operation in Renewal360
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
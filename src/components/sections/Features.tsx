import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: "🧠",
    name: "5-Factor AI Risk Scoring",
    persona: "CSM + Exec",
    outcome: "Know which accounts are actually at risk - not just who hasn't replied in a while",
    desc: "Scores every account across Engagement Health, Sentiment & Value Realisation, Relationship Depth, Financial Health, and Renewal Momentum. Weights shift dynamically as the renewal date approaches - so a T-7 account and a T-90 account are scored differently.",
  },
  {
    icon: "✉️",
    name: "Smart Milestone Sequences",
    persona: "CSM",
    outcome: "Every account gets the right email at the right time - automatically",
    desc: "Sequences fire at proportional milestones (25%, 16%, 8%, and 2% of term remaining) rather than fixed day counts - so monthly and annual accounts both get appropriately timed outreach. Four email types: check-in, renewal discussion, renewal reminder, urgent reminder.",
  },
  {
    icon: "✅",
    name: "Human Approval Queue",
    persona: "CSM + RevOps",
    outcome: "AI drafts every email. Your team reviews, edits, approves - or skips. Nothing goes out blind.",
    desc: "Every pending email lands in your approval queue with one-click Send, Edit, or Skip. High-value at-risk accounts trigger an Escalate decision, creating a CSM task and pausing automation - so your team handles the relationship when it matters most.",
  },
  {
    icon: "🔀",
    name: "Visual Sequence Builder",
    persona: "RevOps",
    outcome: "Build branching outreach playbooks without writing a line of code",
    desc: "Drag-and-drop pipeline editor with step types: Email, CSM Task, Slack DM, and In-App Alert. Branches fire based on real signals - customer replied, email opened, link clicked, risk changed to High, or ARR crossed a threshold.",
  },
  {
    icon: "😊",
    name: "NPS Survey System",
    persona: "CSM + Exec",
    outcome: "Catch unhappy customers before they decide not to renew",
    desc: "Build and schedule NPS surveys via the survey builder. Auto-triggered at T-45 days before renewal, 7 days post-onboarding, and after support ticket resolution. Promoter scores reduce risk level; Detractor scores (0–6) flag accounts immediately and alert the CSM.",
  },
  {
    icon: "📊",
    name: "Revenue at Risk Dashboard",
    persona: "Executive",
    outcome: "Answer 'how much ARR is at risk this quarter?' in one glance",
    desc: "Real-time pipeline broken down by High / Medium / Healthy risk with dollar values, not just account counts. 6-month renewal forecast, CSM leaderboard by ARR saved, and KPI cards for total ARR, upcoming renewals, and team response rates.",
  },
  {
    icon: "🔗",
    name: "CRM & Email Integrations",
    persona: "RevOps",
    outcome: "Works with your existing stack - no ripping and replacing",
    desc: "Bi-directional sync with Salesforce, HubSpot, and Zendesk. IMAP monitoring reads incoming customer replies to detect sentiment and trigger sequence pauses automatically. Slack webhooks push at-risk alerts and slash-command summaries to your CS channel.",
  },
  {
    icon: "🔒",
    name: "Multi-Tenant RBAC + MFA",
    persona: "Admin",
    outcome: "Enterprise-grade access control - every org's data stays completely isolated",
    desc: "Three-level role model: Admin, Manager, and CSM - each with scoped data access. Per-org MFA enforcement, SSO support, JWT-based auth, and a full admin audit log. LLM configuration is per-org so you can bring your own Gemini or OpenAI key.",
  },
];

export function Features() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <Badge className="mb-4">Features</Badge>
        <h2
          className="text-3xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Everything you need. <br /> Nothing you don't.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Unlike enterprise platforms that require months to configure, Renewal360 focuses
          on the capabilities that directly protect ARR - and ships them in a week.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.name}
            className="bg-white rounded-xl border border-border p-6 shadow-sm hover:-translate-y-1 transition-transform duration-200 flex flex-col"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4 shrink-0">
              {f.icon}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-foreground text-sm leading-snug">{f.name}</h3>
            </div>
            <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full w-fit mb-3">
              {f.persona}
            </span>
            <p className="text-primary font-semibold text-xs mb-2 italic leading-snug">
              "{f.outcome}"
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed mt-auto">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/features">
          <Button variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50">
            See full feature breakdown & comparison →
          </Button>
        </Link>
      </div>
    </section>
  );
}
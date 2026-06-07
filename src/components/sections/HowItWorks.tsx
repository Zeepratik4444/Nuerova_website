import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      time: "1–2 days",
      timeLabel: "Setup",
      title: "Connect Your Renewal Data",
      desc: "Link your Google Sheets, HubSpot, or Salesforce. We pull your accounts, ARR, and renewal dates. Our onboarding team handles the heavy lifting."
    },
    {
      num: "02",
      time: "100% yours",
      timeLabel: "Control",
      title: "AI Drafts Personalised Outreach",
      desc: "Renewal360 analyses each account's risk signals and drafts personalised email sequences. Review, edit, approve - or reject. You're always in control of every customer touchpoint."
    },
    {
      num: "03",
      time: "↑ Renewal %",
      timeLabel: "Outcome",
      title: "Track Results & Optimise",
      desc: "Watch renewal rates improve in your executive dashboard. See which accounts responded, which need escalation, and where your team is best deployed."
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" style={{fontFamily: "'Syne', sans-serif"}}>
            A managed service that feels like magic.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You don't need to learn new software. You just need the renewals handled.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, i) => (
            <Card key={i} className="border-none shadow-md bg-white hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="font-mono text-5xl font-extrabold text-blue-100 mb-6" style={{fontFamily: "'JetBrains Mono', monospace"}}>
                  {step.num}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {step.desc}
                </p>
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{step.timeLabel}</span>
                  <span className="text-sm font-bold text-primary">{step.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground italic mt-10 max-w-2xl mx-auto text-sm">
          "Every AI-generated email goes through your team for review before it reaches a customer. Renewal360 handles the intelligence - your team handles the relationship."
        </p>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Problem() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge variant="warning" className="mb-4">The Current Reality</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
          Renewals fail for entirely preventable reasons.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          The data from thousands of SaaS companies is sobering - and most teams are repeating the same costly mistakes.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
        {[
          { num: "58%", label: "Median first-year renewal rate - failed activation is the #1 cause" },
          { num: "20–30%", label: "Of all churn is involuntary - failed payments, not intent" },
          { num: "35%", label: "Potential profit increase from just 5% better retention (Bain & Co)" },
        ].map(s => (
          <div key={s.num} className="bg-white rounded-xl border border-border p-6 text-center shadow-sm">
            <div className="text-3xl font-extrabold text-primary mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>{s.num}</div>
            <div className="text-xs text-muted-foreground leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-red-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <CardContent className="pt-8 text-center">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 text-2xl mx-auto mb-6">
              📉
            </div>
            <h3 className="text-xl font-semibold mb-3">Missed Risk Signals</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              CSMs miss accounts going quiet. By the time they notice product usage dropping, the customer has already decided to churn. They're reactive, not proactive.
            </p>
          </CardContent>
        </Card>

        <Card className="border-amber-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
          <CardContent className="pt-8 text-center">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 text-2xl mx-auto mb-6">
              ⏳
            </div>
            <h3 className="text-xl font-semibold mb-3">Up to 5 Hours Wasted Weekly</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Spending 4–5 hours a week just identifying who to email, drafting personalised notes, and updating spreadsheets. That's time not spent saving accounts.
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-slate-500"></div>
          <CardContent className="pt-8 text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 text-2xl mx-auto mb-6">
              📊
            </div>
            <h3 className="text-xl font-semibold mb-3">Zero Exec Visibility</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leadership relies on weekly hand-crafted updates. Churn surprises the board because there's no single source of truth for ARR at risk.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Transition line */}
      <div className="mt-16 max-w-2xl mx-auto text-center">
        <p className="text-xl text-foreground font-medium">
          You don't need to hire 3 more CSMs.
        </p>
        <p className="text-lg text-muted-foreground mt-2">
          You need a smarter system. Renewal360 gives your existing team AI-powered foresight and automated outreach - so no account ever goes quiet again.
        </p>
      </div>
    </section>
  )
}

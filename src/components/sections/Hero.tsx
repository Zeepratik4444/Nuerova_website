import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Subtle gradient background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/40 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8 border border-blue-200">
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
          Gainsight alternative built for mid-market - at 1/5th the price
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mb-8 leading-[1.1]" style={{fontFamily: "'Syne', sans-serif"}}>
          Stop losing renewals <br/> to <span className="text-primary italic">silence.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Renewal360 automatically drafts personalised outreach for every at-risk account - your team just approves and sends. Set up in 7 days, not 7 months.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center mb-12">
          <Button size="lg" className="w-full sm:w-auto font-semibold rounded-full px-8 h-12 text-base shadow-lg shadow-blue-200">
            Start Free Pilot - 25 accounts, no credit card
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold rounded-full px-8 h-12 text-base">
            See how it works
          </Button>
        </div>

        {/* Integration trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 font-medium">
          <span>Works with:</span>
          {["Salesforce", "HubSpot", "Slack", "Google Sheets", "Gmail"].map(name => (
            <span key={name} className="px-2.5 py-1 rounded-full border border-slate-200 bg-white text-slate-500">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

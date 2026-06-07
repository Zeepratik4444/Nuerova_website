export function SocialProof() {
  const trustStats = [
    { num: "90%+", label: "Renewal rate achieved by teams following the 90-60-30 day playbook" },
    { num: "7 days", label: "Average time from signup to first AI-drafted outreach batch sent" },
    { num: "5×", label: "Cheaper than Gainsight - the most common alternative evaluated by our customers" },
    { num: "SOC 2", label: "Ready infrastructure - TLS 1.3 + AES-256, data never shared with third parties" },
  ];

  return (
    <section className="py-16 border-t border-b border-border bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-12">
          Built for high-growth SaaS teams securing mid-market revenue
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustStats.map(s => (
            <div key={s.num} className="text-center">
              <div className="text-3xl font-extrabold text-primary mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>{s.num}</div>
              <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom trust tag strip */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            "Built for $1M–$50M ARR teams",
            "SOC 2 Ready Infrastructure",
            "IMAP + Salesforce + HubSpot",
          ].map(tag => (
            <span key={tag} className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

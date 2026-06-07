import { Badge } from "@/components/ui/badge";

export function Competitive() {
  const rows = [
    {
      label: "Setup time",
      r360: "7 days",
      gainsight: "3–6 months",
      churnzero: "2–4 months",
      r360Green: true,
    },
    {
      label: "Cost / year",
      r360: "From $5,988",
      gainsight: "$30,000–$150,000",
      churnzero: "$12,000–$60,000",
      r360Green: true,
    },
    {
      label: "AI email generation",
      r360: "✓ Built-in",
      gainsight: "Add-on Extra",
      churnzero: "Limited",
      r360Green: true,
    },
    {
      label: "Human approval workflow",
      r360: "✓ Every email",
      gainsight: "✗",
      churnzero: "✗",
      r360Green: true,
    },
    {
      label: "Managed service model",
      r360: "✓ We handle infra",
      gainsight: "DIY platform",
      churnzero: "DIY platform",
      r360Green: true,
    },
    {
      label: "Mid-market focused",
      r360: "✓ Built for you",
      gainsight: "Enterprise-first",
      churnzero: "Enterprise-first",
      r360Green: true,
    },
  ];

  return (
    <section className="py-24 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{fontFamily: "'Syne', sans-serif"}}>
          Enterprise-grade renewal intelligence. <br/>Without the enterprise price tag.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Gainsight starts at <strong>$30,000/year</strong> and takes 6 months to implement. Renewal360 costs a fraction of that and goes live in a week.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="bg-slate-50 border-b border-border">
              <th className="p-5 font-semibold text-muted-foreground text-sm w-1/4">Feature</th>
              <th className="p-5 font-bold text-primary bg-blue-50/60 w-1/4">Renewal360</th>
              <th className="p-5 font-semibold text-muted-foreground w-1/4 text-sm">Gainsight</th>
              <th className="p-5 font-semibold text-muted-foreground w-1/4 text-sm">ChurnZero</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map(row => (
              <tr key={row.label}>
                <td className="p-5 font-medium text-sm">{row.label}</td>
                <td className="p-5 bg-blue-50/30">
                  {row.r360Green ? (
                    <span className="text-green-600 font-semibold text-sm">{row.r360}</span>
                  ) : (
                    <Badge variant="success">{row.r360}</Badge>
                  )}
                </td>
                <td className="p-5 text-muted-foreground text-sm">{row.gainsight}</td>
                <td className="p-5 text-muted-foreground text-sm">{row.churnzero}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export function Testimonials() {
  const testimonials = [
    {
      quote: "Renewal360 is the missing link. We couldn't justify Gainsight's price tag, but doing it manually in Salesforce was a disaster. This hit the perfect sweet spot.",
      author: "Priya Patel",
      role: "VP Revenue Operations",
      avatar: "PP"
    },
    {
      quote: "My CSMs used to spend 5 hours a week just figuring out who to email. Now they log in, approve the AI drafts, and spend that time actually speaking to customers.",
      author: "Sarah Jenkins",
      role: "Director of Customer Success",
      avatar: "SJ"
    },
    {
      quote: "Before this, churn was always a surprise at the end of the quarter. Now I look at the dashboard and see exactly what ARR is at risk 90 days out.",
      author: "Raj Sharma",
      role: "Chief Executive Officer",
      avatar: "RS"
    }
  ];

  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
          Loved by modern revenue teams.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between">
              <p className="text-lg text-foreground italic mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.author}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

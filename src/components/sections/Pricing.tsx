import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { usePricing } from "@/hooks/usePricing";

export function Pricing() {
  const { isAnnual, setIsAnnual, isDetecting, plans, getPrice } = usePricing();

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Straightforward pricing. No lock-in.
          </h2>
          <p className="text-lg text-muted-foreground">
            Every workspace starts with a <strong>7-day trial of our Teams plan</strong> - then
            choose the plan that fits. Unlimited seats at every tier. No credit
            card required.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-1 p-1 rounded-full bg-slate-200/70 text-sm font-medium">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-full transition-all ${!isAnnual
                  ? "bg-white shadow text-slate-900"
                  : "text-slate-500 hover:text-slate-700"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all ${isAnnual
                  ? "bg-white shadow text-slate-900"
                  : "text-slate-500 hover:text-slate-700"
                }`}
            >
              Yearly
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Unlimited seats badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            Unlimited seats at every tier - no per-user charges
          </span>
        </div>

        {/* Plan cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col transition-transform duration-200 hover:-translate-y-1 ${plan.highlight
                  ? "border-primary shadow-lg scale-[1.02] z-10"
                  : "border-border shadow-sm"
                }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                  {plan.highlightText}
                </div>
              )}

              <CardHeader className="text-center pt-8">
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>

                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-4xl font-extrabold">
                    {isDetecting ? "…" : getPrice(plan)}
                  </span>
                  <span className="text-muted-foreground font-medium text-sm">
                    {plan.name === "Enterprise"
                      ? ""
                      : isAnnual
                        ? "/mo (billed annually)"
                        : "/month"}
                  </span>
                </div>

                {plan.gainsightNote && (
                  <p className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full inline-block mt-1">
                    {plan.gainsightNote}
                  </p>
                )}

                <CardDescription className="mt-3 text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-blue-500 font-bold shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-col gap-2">
                <Link to={plan.ctaLink} className="w-full">
                  <Button
                    className="w-full"
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground text-center">
                  No credit card required
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* ROI nudge */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-sm text-blue-900 font-medium">
            💡 By centralizing department knowledge in clusters, most teams using Nuerova recover{" "}
            <strong>dozens of engineering and operational hours</strong> within their first month.
          </p>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Need more detail?{" "}
          <Link to="/pricing" className="text-primary font-medium hover:underline">
            View full pricing →
          </Link>
        </p>
      </div>
    </section>
  );
}
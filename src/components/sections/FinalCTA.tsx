import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-violet-500 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Syne', sans-serif"}}>
          Your next renewal shouldn't depend on<br/>
          someone remembering to follow up.
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Start your free pilot. 25 accounts. No credit card. Up and running in a week.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-lg font-bold rounded-full bg-blue-500 hover:bg-blue-600 border-none shadow-lg shadow-blue-900/40">
            Start Free Pilot →
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-10 text-lg font-semibold rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent">
            Talk to a human first
          </Button>
        </div>

        {/* Anxiety removers */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-400 text-sm">
          {[
            "No credit card required",
            "Cancel anytime",
            "Setup support included",
            "Your data stays yours"
          ].map(text => (
            <span key={text} className="flex items-center gap-1.5">
              <span className="text-green-500">✓</span> {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { trackCtaClick, trackEvent } from "@/lib/analytics";

export function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(50);
  const [hoursLost, setHoursLost] = useState(3);
  const [hourlyCost, setHourlyCost] = useState(85);
  const [hasTrackedUse, setHasTrackedUse] = useState(false);

  // Math: Math.round(size * hours * 4.3 * 0.6)
  const recoveredHours = Math.round(teamSize * hoursLost * 4.3 * 0.6);
  const annualValue = recoveredHours * hourlyCost * 12;
  const continuityScore = teamSize >= 50 ? "High" : teamSize >= 20 ? "Medium" : "Emerging";

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const trackCalculatorUse = () => {
    if (hasTrackedUse) return;
    setHasTrackedUse(true);
    trackEvent("roi_calculator_used", {
      cta_location: "roi_calculator",
      funnel_stage: "consideration",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white border-y border-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Explainer */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
              <Calculator className="h-4 w-4" />
              ROI Calculator
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Quantify the cost of context loss.
            </h2>
            <p className="text-lg text-blue-200 mb-8 leading-relaxed">
              Use your team's numbers to estimate how much high-friction knowledge work Nuerova can recover.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-blue-100">
                <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
                At {teamSize} people, recovering {hoursLost} hours/week saves {recoveredHours.toLocaleString()} hours/month.
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
                It secures knowledge continuity that standard search bars cannot guarantee.
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
                Mitigates tribal knowledge drain when senior teammates leave.
              </li>
            </ul>
          </div>

          {/* Right Side: Interactive UI */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-8">
                
                {/* Team Size Slider */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
                      Team Size
                    </label>
                    <span className="text-2xl font-bold text-white">
                      {teamSize}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="500" 
                    step="5" 
                    value={teamSize} 
                    onChange={(e) => {
                      trackCalculatorUse();
                      setTeamSize(Number(e.target.value));
                    }}
                    className="w-full h-2 bg-blue-950 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-xs text-blue-400 mt-2">
                    <span>5</span>
                    <span>500</span>
                  </div>
                </div>

                {/* Hours Lost Slider */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
                      Hours Lost Per Person Weekly
                    </label>
                    <span className="text-2xl font-bold text-white">
                      {hoursLost} hrs
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="12" 
                    step="1" 
                    value={hoursLost} 
                    onChange={(e) => {
                      trackCalculatorUse();
                      setHoursLost(Number(e.target.value));
                    }}
                    className="w-full h-2 bg-blue-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-xs text-blue-400 mt-2">
                    <span>1 hr</span>
                    <span>12 hrs</span>
                  </div>
                </div>

                {/* Hourly Cost Slider */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
                      Fully Loaded Hourly Cost
                    </label>
                    <span className="text-2xl font-bold text-white">
                      {formatCurrency(hourlyCost)}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="35" 
                    max="250" 
                    step="5" 
                    value={hourlyCost} 
                    onChange={(e) => {
                      trackCalculatorUse();
                      setHourlyCost(Number(e.target.value));
                    }}
                    className="w-full h-2 bg-blue-950 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <div className="flex justify-between text-xs text-blue-400 mt-2">
                    <span>$35</span>
                    <span>$250</span>
                  </div>
                </div>

                {/* Results Box */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-900/40 border border-emerald-500/30 rounded-xl p-6 mt-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-10">
                    <TrendingUp className="w-32 h-32 text-emerald-300" />
                  </div>
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-1">
                        Hours Recovered / Mo
                      </p>
                      <div className="text-3xl font-extrabold text-emerald-400">
                        {recoveredHours.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-1">
                        Knowledge Continuity
                      </p>
                      <div className="text-3xl font-extrabold text-emerald-400">
                        {continuityScore}
                      </div>
                    </div>
                    <div className="col-span-2 border-t border-emerald-500/20 pt-4">
                      <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-1">
                        Annual Value Recovered
                      </p>
                      <div className="text-4xl font-extrabold text-emerald-400">
                        {formatCurrency(annualValue)}
                      </div>
                    </div>
                  </div>
                </div>

                <Link to="/contact" className="block mt-6">
                  <Button
                    className="w-full bg-white text-blue-900 hover:bg-gray-100 text-lg py-6 font-bold"
                    onClick={() =>
                      trackCtaClick({
                        cta_text: "Request pilot details",
                        cta_location: "roi_calculator",
                        funnel_stage: "decision",
                        target_url: "/contact",
                      })
                    }
                  >
                    Request pilot details <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}

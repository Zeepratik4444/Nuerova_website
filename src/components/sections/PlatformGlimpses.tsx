import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dashboardSummary from "@/assets/dashboard-summary.png";
import renewalDetail from "@/assets/renewaldetail.png";
import { CheckCircle2, TrendingUp, UserCog } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function PlatformGlimpses() {
	return (
		<section className="py-24 bg-white" id="glimpses">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-20">
					<Badge className="mb-4 text-blue-700 bg-blue-100 hover:bg-blue-200">Platform Glimpses</Badge>
					<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
						Actionable insights, <br className="hidden md:block"/> <span className="text-blue-600">at the highest level.</span>
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Move from a high-level view down to the micro-interactions. Nuerova gives you the exact tools to manage your team intelligence at scale, and dig deep into individual context clusters.
					</p>
				</div>

				<div className="space-y-32">
					{/* Glimpse 1: Executive Summary */}
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<div className="flex items-center gap-3 mb-4">
								<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
									<TrendingUp className="text-blue-600 h-5 w-5" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900">Immediate Action, Zero Ambiguity</h3>
							</div>
							<p className="text-lg text-gray-600 mb-6 leading-relaxed">
								See exactly how much knowledge is siloed today. The Executive Summary translates abstract health scores into bottom-line productivity values, showing you immediate and urgent actions that your team needs to take to save time.
							</p>
							<ul className="space-y-3">
								{["Track Total Scoped Clusters vs. Siloed Knowledge", "Automatically flag 'Silent Knowledge gaps'", "Visual context flows for this quarter"].map((t) => (
									<li key={t} className="flex items-start gap-3 text-gray-700 font-medium">
										<CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /> {t}
									</li>
								))}
							</ul>
						</div>
						<div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50 flex min-h-[300px] items-center justify-center text-gray-400">
							<img src={dashboardSummary} alt="Executive Summary Dashboard" className="w-full h-auto object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
						</div>
					</div>

					{/* Glimpse 2: Renewal Detail */}
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="order-2 md:order-1 relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50 flex min-h-[300px] items-center justify-center text-gray-400">
							<img src={renewalDetail} alt="Renewal Detail View" className="w-full h-auto object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
						</div>
						<div className="order-1 md:order-2">
							<div className="flex items-center gap-3 mb-4">
								<div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
									<UserCog className="text-indigo-600 h-5 w-5" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900">Deep Dive into Cluster Health</h3>
							</div>
							<p className="text-lg text-gray-600 mb-6 leading-relaxed">
								Click into any cluster to see the full context: AI-generated activity summaries, Agent health, and a weighted 3-factor metric breakdown (Engagement, Alignment, and Timeline Pressure).
							</p>
							<ul className="space-y-3">
								{["3-Factor Alignment score (Engagement, Alignment, Timeline)", "Analyze context drift and Support Traps", "Automated Ghosting and Stakeholder Drift detection"].map((t) => (
									<li key={t} className="flex items-start gap-3 text-gray-700 font-medium">
										<CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /> {t}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* CTA to specialized page */}
				<div className="text-center mt-20">
					<p className="text-gray-600 mb-6 font-medium">Want to see the executive dashboards, forecasts, and more?</p>
					<Link to="/features">
						<Button size="lg" className="px-8 bg-gray-900 hover:bg-gray-800 text-white shadow-lg">
							View more
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}

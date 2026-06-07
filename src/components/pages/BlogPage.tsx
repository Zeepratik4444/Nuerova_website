import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CalendarDays, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSEO } from "@/hooks/useSEO";
import { blogPosts } from "@/lib/blogPosts";

export function BlogPage() {
	useSEO({
		title: "Blog - Renewal360",
		description:
			"Practical guides on SaaS renewal automation, churn prevention, customer success workflows, and AI-powered retention.",
	});

	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			<section className="bg-gradient-to-b from-blue-50/50 to-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200">
						<BookOpen className="h-4 w-4" />
						Renewal360 Blog
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
						Field notes for better SaaS renewals.
					</h1>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
						Practical playbooks for CS, RevOps, and founders who want fewer
						surprise churn conversations and a cleaner renewal operating rhythm.
					</p>
				</div>
			</section>

			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{blogPosts.map((post) => (
							<Link
								key={post.slug}
								to="/blog/$slug"
								params={{ slug: post.slug }}
								className="group flex flex-col h-full"
							>
								<Card className="flex flex-col h-full overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl bg-white rounded-2xl">
									<div className={`h-1.5 w-full ${post.accent === "slate" ? "bg-slate-500" : "bg-blue-600"}`} />
									
									<CardContent className="flex flex-col flex-grow p-6">
										<div className="flex flex-wrap gap-2 mb-4">
											{post.tags.map((tag) => (
												<span
													key={tag}
													className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700"
												>
													{tag}
												</span>
											))}
										</div>

										<h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
											{post.title}
										</h2>

										<p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
											{post.summary}
										</p>

										<div className="border-t border-gray-150 pt-4 mt-auto flex items-center justify-between text-xs text-gray-500">
											<div className="flex items-center gap-3">
												<span className="inline-flex items-center gap-1">
													<CalendarDays className="h-3.5 w-3.5" />
													{post.publishedAt}
												</span>
												<span className="inline-flex items-center gap-1">
													<Clock className="h-3.5 w-3.5" />
													{post.readTime}
												</span>
											</div>
											<div className="inline-flex items-center gap-1 font-semibold text-blue-600 group-hover:underline">
												Read
												<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
											</div>
										</div>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>

					<div className="mt-16 rounded-2xl bg-gray-950 px-6 py-10 text-center text-white border border-gray-800 shadow-2xl relative overflow-hidden">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
						<div className="relative z-10">
							<h2 className="text-2xl md:text-3xl font-bold mb-3">
								Want to fix your renewal process faster?
							</h2>
							<p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
								Renewal360 can help your team move from spreadsheet follow-ups to
								AI-assisted renewal outreach in about a week.
							</p>
							<Link to="/contact">
								<Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
									Start a free pilot
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

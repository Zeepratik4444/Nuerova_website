import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function TermsPage() {
	useSEO({
		title: "Terms and Privacy | Nuerova",
		description: "Plain-language operating principles and data handling policies for Nuerova.",
	});

	useScrollReveal();

	return (
		<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />

			<main id="main" className="flex-grow pb-section-gap pt-24">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pt-8 pb-section-gap reveal">
					<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
						TERMS AND PRIVACY
					</span>
					<h1 className="font-headline-md text-4xl md:text-5xl text-primary mb-stack-lg leading-tight font-bold tracking-tight max-w-3xl">
						Plain-language operating principles for a product built on trust.
					</h1>
					<p className="font-body-md text-body-md text-white/50 max-w-2xl mb-10">
						This page is a launch-ready draft, not legal advice. Final terms should be reviewed by counsel before public commercial use.
					</p>
					<div className="flex flex-wrap gap-3">
						{["Data stays yours", "No training on customer data", "Export supported", "Security roadmap"].map((label) => (
							<span key={label} className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
								{label}
							</span>
						))}
					</div>
				</section>

				{/* ── TERMS GRID ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{[
							{
								num: "01",
								title: "Terms summary",
								body: "Nuerova provides team intelligence, shared memory, skill registry, and automation tools. Customers are responsible for authorized use, connected source permissions, and the accuracy of actions they approve.",
							},
							{
								num: "02",
								title: "Privacy summary",
								body: "Customer data is used to operate Nuerova and provide requested functionality. It is not used to train external base models. Access should remain scoped to authorized users and systems.",
							},
							{
								num: "03",
								title: "Data handling",
								body: "Data export, deletion, retention, and integration controls should be documented for each paid workspace. Enterprise customers can request stricter handling requirements.",
							},
							{
								num: "04",
								title: "Automation responsibility",
								body: "Automations should include approval gates for sensitive actions. Nuerova is designed to provide run logs and visibility so teams can inspect what happened.",
							},
						].map((block) => (
							<div key={block.num} className="border border-white/10 p-8 rounded-lg bg-transparent">
								<div className="text-xs text-status-blue font-bold mb-4 bg-status-blue/10 w-8 h-8 flex items-center justify-center rounded">
									{block.num}
								</div>
								<h2 className="font-headline-sm text-xl text-primary mb-4 font-semibold">{block.title}</h2>
								<p className="font-body-md text-sm text-white/50 leading-relaxed">{block.body}</p>
							</div>
						))}
					</div>
				</section>

				{/* ── CONTACT NOTE ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="max-w-2xl">
						<h2 className="font-headline-sm text-2xl text-primary mb-4 font-bold">Questions about these policies?</h2>
						<p className="font-body-md text-sm text-white/50 leading-relaxed">
							Reach out through the contact page. We'll respond within one business day.
						</p>
					</div>
				</section>
			</main>

		</div>
	);
}

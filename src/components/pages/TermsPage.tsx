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
		<div className="js-enabled">
			<Navigation />

			<main id="main">
				{/* ── HERO ── */}
				<section className="page-hero">
					<div className="container">
						<div className="reveal">
							<span className="kicker">Terms and privacy</span>
							<h1>Plain-language operating principles for a product built on trust.</h1>
							<p>This page is a launch-ready draft, not legal advice. Final terms should be reviewed by counsel before public commercial use.</p>
						</div>
						<div className="page-visual reveal">
							<div className="mini-metric-grid">
								<span>Data stays yours</span>
								<span>No training on customer data</span>
								<span>Export supported</span>
								<span>Security roadmap</span>
							</div>
						</div>
					</div>
				</section>

				{/* ── TERMS GRID ── */}
				<section className="section">
					<div className="container terms-grid reveal">
						<article className="terms-block">
							<h2>Terms summary</h2>
							<p>Nuerova provides team intelligence, shared memory, skill registry, and automation tools. Customers are responsible for authorized use, connected source permissions, and the accuracy of actions they approve.</p>
						</article>
						<article className="terms-block">
							<h2>Privacy summary</h2>
							<p>Customer data is used to operate Nuerova and provide requested functionality. It is not used to train external base models. Access should remain scoped to authorized users and systems.</p>
						</article>
						<article className="terms-block">
							<h2>Data handling</h2>
							<p>Data export, deletion, retention, and integration controls should be documented for each paid workspace. Enterprise customers can request stricter handling requirements.</p>
						</article>
						<article className="terms-block">
							<h2>Automation responsibility</h2>
							<p>Automations should include approval gates for sensitive actions. Nuerova is designed to provide run logs and visibility so teams can inspect what happened.</p>
						</article>
					</div>
				</section>
			</main>
		</div>
	);
}

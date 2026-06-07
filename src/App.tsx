import { Header } from "./components/layout/Header";
import { Competitive } from "./components/sections/Competitive";
import { FAQ } from "./components/sections/FAQ";
import { Features } from "./components/sections/Features";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Hero } from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Integrations } from "./components/sections/Integrations";
import { Pricing } from "./components/sections/Pricing";
import { Problem } from "./components/sections/Problem";
import { SocialProof } from "./components/sections/SocialProof";
import { Testimonials } from "./components/sections/Testimonials";

function App() {
	return (
		<div className="min-h-screen bg-background font-sans text-foreground selection:bg-blue-100 selection:text-blue-900 antialiased overflow-x-hidden">
			<Header />

			<main>
				<Hero />
				<SocialProof />

				<div id="problem">
					<Problem />
				</div>

				<div id="how-it-works">
					<HowItWorks />
				</div>

				<div id="features">
					<Features />
				</div>

				<div id="integrations">
					<Integrations />
				</div>

				<div id="pricing">
					<Competitive />
					<Pricing />
				</div>

				<div id="testimonials">
					<Testimonials />
				</div>

				<div id="faq">
					<FAQ />
				</div>

				<FinalCTA />
			</main>

			<footer className="py-12 px-6 border-t border-slate-200 text-center text-sm text-slate-500">
				<p>© 2026 Nuerova. All rights reserved.</p>
			</footer>
		</div>
	);
}

export default App;

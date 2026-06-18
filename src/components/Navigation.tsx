import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { trackCtaClick } from "@/lib/analytics";
import { NuerovaLogo } from "@/components/Logo";

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		function handleScroll() {
			setIsScrolled(window.scrollY > 12);
		}
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg" : "bg-transparent border-b border-transparent"}`}>
				<nav className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto w-full relative">
					<Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
						<NuerovaLogo size={30} />
					</Link>
					
					{/* Desktop Navigation Links */}
					<div className="hidden md:flex items-center gap-stack-lg">
						<Link to="/features" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150">Features</Link>
						<Link to="/how-it-works" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150">How It Works</Link>
						<Link to="/security" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150">Security</Link>
						<Link to="/pricing" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150">Pricing</Link>
						<div className="relative group">
							<button className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-150 flex items-center gap-1">
								More
								<svg className="w-3 h-3 text-white/50 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
							</button>
							<div className="absolute left-0 mt-2 w-48 bg-[#111] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 flex flex-col p-2">
								<Link to="/blog" className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors">Blog</Link>
								<Link to="/faq" className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors">FAQ</Link>
								<a href="/#glimpses" className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors">Glimpses</a>
							</div>
						</div>
					</div>
					
					{/* Desktop Navigation Actions */}
					<div className="hidden md:flex items-center gap-stack-md">
						<Link to="/contact" className="font-button text-button text-white/50 hover:text-white transition-colors duration-150 py-2">
							Sign In
						</Link>
						<Link 
							to="/contact" 
							className="font-button text-button bg-status-blue text-white px-5 py-2 rounded-lg hover:shadow-[0_0_16px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 transition-all duration-200 font-bold"
							onClick={() =>
								trackCtaClick({
									cta_text: "Request Demo",
									cta_location: "site_navigation",
									funnel_stage: "decision",
									target_url: "/contact",
								})
							}
						>
							Get Started
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden flex flex-col justify-between w-6 h-4 text-white focus:outline-none"
						type="button"
						aria-label="Toggle menu"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""}`}></span>
						<span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
						<span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`}></span>
					</button>

					{/* Mobile Menu Drawer */}
					{isMenuOpen && (
						<div className="absolute top-16 left-0 w-full bg-[#131313] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden z-40 animate-in slide-in-from-top-5 duration-200">
							<Link to="/features" className="text-white text-base py-1" onClick={() => setIsMenuOpen(false)}>Features</Link>
							<Link to="/how-it-works" className="text-white text-base py-1" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
							<Link to="/security" className="text-white text-base py-1" onClick={() => setIsMenuOpen(false)}>Security</Link>
							<Link to="/pricing" className="text-white text-base py-1" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
							<div className="flex flex-col gap-2 pl-4 border-l border-white/10 my-2">
								<span className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">More</span>
								<Link to="/blog" className="text-white text-sm py-1" onClick={() => setIsMenuOpen(false)}>Blog</Link>
								<Link to="/faq" className="text-white text-sm py-1" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
								<a href="/#glimpses" className="text-white text-sm py-1" onClick={() => setIsMenuOpen(false)}>Glimpses</a>
							</div>
							<hr className="border-white/10 my-2" />
							<Link to="/contact" className="text-white/50 text-center py-2 hover:text-white" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
							<Link to="/contact" className="bg-status-blue text-white text-center py-2.5 rounded font-bold hover:shadow-[0_0_16px_rgba(59,130,246,0.5)] transition-shadow" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
						</div>
					)}
				</nav>
			</header>

			{/* Floating Announcement Banner */}
			<div className="fixed bottom-4 right-4 z-50 bg-[#1a1c1e] border border-white/10 rounded-lg shadow-2xl p-4 max-w-sm" id="automation-banner">
				<div className="flex gap-3 items-start">
					<div className="flex-grow">
						<span className="text-xs text-status-blue font-bold tracking-wider uppercase block mb-1">Update</span>
						<p className="text-white text-sm leading-relaxed mb-2">Automation Builder preview is now available for pilot teams.</p>
						<Link to="/contact" className="text-xs text-status-blue font-bold hover:underline">Join the pilot →</Link>
					</div>
					<button
						type="button"
						aria-label="Dismiss announcement"
						className="text-white/40 hover:text-white text-lg leading-none"
						onClick={() => {
							const banner = document.getElementById("automation-banner");
							if (banner) banner.remove();
						}}
					>
						&times;
					</button>
				</div>
			</div>
		</>
	);
}

import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { trackCtaClick } from "@/lib/analytics";

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

	useEffect(() => {
		if (isMenuOpen) {
			document.body.classList.add("menu-open");
		} else {
			document.body.classList.remove("menu-open");
		}
	}, [isMenuOpen]);

	return (
		<>
			<header className={`site-header ${isScrolled ? "scrolled" : ""}`} data-header>
				<nav className="nav-shell" aria-label="Primary navigation">
					<Link to="/" className="brand" aria-label="Nuerova home" onClick={() => setIsMenuOpen(false)}>
						<span className="brand-mark" aria-hidden="true">
							<span></span>
						</span>
						<span>Nuerova</span>
					</Link>

					<button
						className="menu-button"
						type="button"
						aria-label="Open menu"
						aria-expanded={isMenuOpen}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>

					<div className={`nav-links ${isMenuOpen ? "open" : ""}`} data-nav-menu>
						<Link to="/features" onClick={() => setIsMenuOpen(false)}>Features</Link>
						<Link to="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
						<Link to="/security" onClick={() => setIsMenuOpen(false)}>Security</Link>
						<Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
						<Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
						<Link to="/contact" className="mobile-demo-link" onClick={() => setIsMenuOpen(false)}>
							Request Demo
						</Link>
					</div>

					<div className="nav-actions">
						<Link to="/contact" className="button ghost compact">
							Log In
						</Link>
						<Link
							to="/contact"
							className="button primary compact"
							onClick={() =>
								trackCtaClick({
									cta_text: "Request Demo",
									cta_location: "site_navigation",
									funnel_stage: "decision",
									target_url: "/contact",
								})
							}
						>
							Request Demo
						</Link>
					</div>
				</nav>
			</header>

			<div className="floating-banner" id="automation-banner">
				<div className="container">
					<span>Now available: Automation Builder preview for pilot teams</span>
					<Link to="/contact">Join the pilot</Link>
					<button
						type="button"
						aria-label="Dismiss announcement"
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

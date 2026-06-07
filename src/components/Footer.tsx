import { Link } from "@tanstack/react-router";

export function Footer() {
	return (
		<footer className="site-footer">
			<div className="container footer-grid">
				<Link className="brand footer-brand" to="/" aria-label="Nuerova home">
					<span className="brand-mark" aria-hidden="true"><span></span></span>
					<span>Nuerova</span>
				</Link>
				<div>
					<strong>Product</strong>
					<Link to="/features">Features</Link>
					<Link to="/pricing">Pricing</Link>
				</div>
				<div>
					<strong>Trust</strong>
					<Link to="/security">Security</Link>
					<Link to="/contact">Demo</Link>
					<Link to="/blog">Blog</Link>
				</div>
				<p>Team intelligence and agent-native automation for companies that cannot afford to lose context.</p>
			</div>
		</footer>
	);
}

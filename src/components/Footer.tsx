import { Link } from "@tanstack/react-router";

export function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-400 border-t border-gray-800 py-10 mt-auto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					<div>
						<h3 className="text-white font-semibold mb-3">Nuerova</h3>
						<p className="text-sm">Team intelligence & scoped contextual agents.</p>
					</div>
					<div>
						<h4 className="text-white font-semibold mb-3">Product</h4>
						<ul className="space-y-2 text-sm">
							{[["Features", "/features"], ["Security", "/security"], ["Pricing", "/pricing"], ["How It Works", "/how-it-works"]].map(([label, to]) => (
								<li key={label}><Link to={to as string} className="hover:text-white transition-colors">{label}</Link></li>
							))}
						</ul>
					</div>
					<div>
						<h4 className="text-white font-semibold mb-3">Company</h4>
						<ul className="space-y-2 text-sm">
							{[["Blog", "/blog"], ["About", "/about"], ["FAQ", "/faq"], ["Contact", "/contact"], ["Terms", "/terms"]].map(([label, to]) => (
								<li key={label}><Link to={to as string} className="hover:text-white transition-colors">{label}</Link></li>
							))}
						</ul>
					</div>
					<div>
						<h4 className="text-white font-semibold mb-3">Connect</h4>
						<ul className="space-y-2 text-sm">
							<li><a href="https://www.linkedin.com/company/nuerova" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
							<li className="pt-2">
								<p className="text-gray-500 mb-1">Reach us at:</p>
								<a href="mailto:hello@nuerova.com" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">hello@nuerova.com</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-gray-800 pt-6 text-sm text-center">
					<p>© 2026 Nuerova. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}

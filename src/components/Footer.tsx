import { Link } from "@tanstack/react-router";
import { NuerovaLogo } from "@/components/Logo";

export function Footer() {
	return (
		<footer className="w-full bg-[#050505] border-t border-white/10 pt-20 pb-10 text-white relative overflow-hidden">
			{/* Subtle glow effect in the background */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-status-blue/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

			<div className="max-w-container-max mx-auto px-gutter md:px-stack-lg relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
					
					{/* Brand Column */}
					<div className="lg:col-span-2">
						<Link className="inline-block mb-6" to="/">
							<NuerovaLogo size={28} />
						</Link>
						<p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8">
							The enterprise intelligence layer. Connect your team's knowledge sources, deploy scoped agents, and automate workflows with absolute governance.
						</p>
						
						{/* Social Links */}
						<div className="flex items-center gap-4">
							<a href="https://www.linkedin.com/company/nuerova" target="_blank" rel="noopener noreferrer" aria-label="Nuerova on LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
							</a>
							<a href="https://www.producthunt.com/products/nuerova" target="_blank" rel="noopener noreferrer" aria-label="Nuerova on Product Hunt" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.6 13.8H9v3.6H6.6V6.6h4.8c2.32 0 4.2 1.88 4.2 4.2s-1.88 4.2-4.2 4.2zm0-6H9v3.6h2.4c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8z"/></svg>
							</a>
						</div>
					</div>

					{/* Product Column */}
					<div className="flex flex-col gap-3">
						<h3 className="font-bold text-white mb-3">Product</h3>
						<Link to="/features" className="text-sm text-white/50 hover:text-white transition-colors w-fit">Platform Overview</Link>
						<Link to="/how-it-works" className="text-sm text-white/50 hover:text-white transition-colors w-fit">How it Works</Link>
						<Link to="/security" className="text-sm text-white/50 hover:text-white transition-colors w-fit">Security & Governance</Link>
						<Link to="/pricing" className="text-sm text-white/50 hover:text-white transition-colors w-fit">Pricing Plans</Link>
						<span className="text-sm text-white/30 cursor-not-allowed w-fit flex items-center gap-2">
							Integrations <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/50">SOON</span>
						</span>
					</div>

					{/* Resources Column */}
					<div className="flex flex-col gap-3">
						<h3 className="font-bold text-white mb-3">Resources</h3>
						<Link to="/blog" className="text-sm text-white/50 hover:text-white transition-colors w-fit">Blog</Link>
						<span className="text-sm text-white/30 cursor-not-allowed w-fit flex items-center gap-2">
							Documentation <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/50">SOON</span>
						</span>
						<span className="text-sm text-white/30 cursor-not-allowed w-fit flex items-center gap-2">
							Case Studies <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/50">SOON</span>
						</span>
						<span className="text-sm text-white/30 cursor-not-allowed w-fit flex items-center gap-2">
							Help Center <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/50">SOON</span>
						</span>
					</div>

					{/* Company Column */}
					<div className="flex flex-col gap-3">
						<h3 className="font-bold text-white mb-3">Company</h3>
						<Link to="/contact" className="text-sm text-white/50 hover:text-white transition-colors w-fit">Contact Us</Link>
						<span className="text-sm text-white/30 cursor-not-allowed w-fit flex items-center gap-2">
							Careers <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/50">HIRING</span>
						</span>
						<Link to="/terms" className="text-sm text-white/50 hover:text-white transition-colors w-fit">Terms of Service</Link>
						<Link to="/terms" className="text-sm text-white/50 hover:text-white transition-colors w-fit">Privacy Policy</Link>
					</div>

				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-sm text-white/40 flex items-center gap-2">
						© {new Date().getFullYear()} Nuerova Inc. All rights reserved.
					</div>
					<div className="flex items-center gap-6">
						<div className="flex items-center gap-2 text-xs text-white/40">
							<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
							All systems operational
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

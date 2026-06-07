import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { trackCtaClick } from "@/lib/analytics";

export function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ to: "/", label: "Home" },
		{ to: "/features", label: "Features" },
		{ to: "/pricing", label: "Pricing" },
		{ to: "/how-it-works", label: "How It Works" },
		{ to: "/security", label: "Security" },
	];

	const moreLinks = [
		{ to: "/blog", label: "Blog" },
		{ to: "/about", label: "About" },
		{ to: "/faq", label: "FAQ" },
	];

	return (
		<nav className="bg-white border-b sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<Link
							to="/"
							className="flex items-center gap-2.5 text-2xl font-bold text-[#1275e2]"
							aria-label="Nuerova home"
						>
							<img
								src="/favicon.svg"
								alt=""
								className="h-9 w-9 shrink-0 object-contain"
							/>
							Nuerova
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className="text-gray-700 hover:text-blue-600 transition-colors"
								activeProps={{
									className: "text-blue-600 font-semibold",
								}}
							>
								{link.label}
							</Link>
						))}
						<div className="relative group">
							<button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group py-2">
								More <ChevronDown className="ml-1 h-4 w-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
							</button>
							<div className="absolute left-0 top-full pt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top-left -translate-y-2 group-hover:translate-y-0 text-left">
								<div className="bg-white border border-gray-100 rounded-xl shadow-lg py-2">
									{moreLinks.map((link) => (
										<Link
											key={link.to}
											to={link.to}
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
											activeProps={{
												className: "text-blue-600 font-semibold bg-blue-50/50",
											}}
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>
						</div>
						<Link to="/contact">
							<Button
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
							</Button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? <X /> : <Menu />}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden border-t bg-white">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
								activeProps={{
									className: "bg-blue-50 text-blue-600 font-semibold",
								}}
								onClick={() => setIsMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
						
						<div className="px-3 pt-4 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
							More
						</div>
						{moreLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className="block px-3 py-2 pl-6 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
								activeProps={{
									className: "bg-blue-50 text-blue-600 font-semibold",
								}}
								onClick={() => setIsMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}

						<Link to="/contact" onClick={() => setIsMenuOpen(false)}>
							<Button
								className="w-full mt-4"
								onClick={() =>
									trackCtaClick({
										cta_text: "Request Demo",
										cta_location: "mobile_navigation",
										funnel_stage: "decision",
										target_url: "/contact",
									})
								}
							>
								Request Demo
							</Button>
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}

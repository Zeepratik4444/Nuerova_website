import { Button } from "@/components/ui/button";

export function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
			<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
				<div className="flex items-center gap-2.5">
					<img
						src="/brand-logo.png"
						alt=""
						className="h-9 w-9 shrink-0 object-contain"
					/>
					<span className="font-display font-bold text-xl tracking-tight text-slate-900">
						Renewal360
					</span>
				</div>

				<nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
					<a href="#how-it-works" className="hover:text-blue-600 transition-colors">
						How it Works
					</a>
					<a href="#features" className="hover:text-blue-600 transition-colors">
						Features
					</a>
					<a href="#pricing" className="hover:text-blue-600 transition-colors">
						Pricing
					</a>
					<a href="#faq" className="hover:text-blue-600 transition-colors">
						FAQ
					</a>
				</nav>

				<div className="flex items-center gap-4">
					<a
						href="#"
						className="text-sm font-medium text-slate-600 hover:text-blue-600 hidden sm:block"
					>
						Log in
					</a>
					<Button size="sm" className="rounded-full font-semibold">
						Start Pilot
					</Button>
				</div>
			</div>
		</header>
	);
}

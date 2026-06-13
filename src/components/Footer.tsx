import { Link } from "@tanstack/react-router";

export function Footer() {
	return (
		<footer className="w-full bg-background border-t border-border-subtle transition-opacity duration-150">
			<div className="max-w-container-max mx-auto py-stack-lg px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md">
				<Link className="font-headline-sm text-headline-sm text-primary font-bold" to="/">
					Nuerova
				</Link>
				<div className="flex gap-stack-md flex-wrap justify-center">
					<Link className="font-body-md text-body-md text-text-muted hover:text-primary transition-colors duration-150" to="/terms">Privacy Policy</Link>
					<Link className="font-body-md text-body-md text-text-muted hover:text-primary transition-colors duration-150" to="/terms">Terms of Service</Link>
					<Link className="font-body-md text-body-md text-text-muted hover:text-primary transition-colors duration-150" to="/security">Security</Link>
					<a className="font-body-md text-body-md text-text-muted hover:text-primary transition-colors duration-150" href="#">Status</a>
				</div>
				<div className="font-body-md text-body-md text-text-muted">© {new Date().getFullYear()} Nuerova Intelligence. All rights reserved.</div>
			</div>
		</footer>
	);
}

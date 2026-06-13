import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function SecurityPage() {
	useSEO({
		title: "Security | Nuerova",
		description: "Enterprise security and governance built-in: scoped access, org boundaries, audit logs, and data isolation.",
	});

	useScrollReveal();

	return (
		<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />

			<main id="main" className="flex-grow pb-section-gap pt-24">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pt-8 pb-section-gap reveal">
					<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
						SECURITY
					</span>
					<h1 className="font-headline-md text-4xl md:text-5xl text-primary mb-stack-lg leading-tight font-bold tracking-tight max-w-3xl">
						Security and governance designed for enterprise teams.
					</h1>
					<p className="font-body-md text-body-md text-white/50 max-w-2xl mb-10">
						Nuerova is built around scoped access, organization boundaries, auditability, and controls that make shared AI memory usable for real work.
					</p>

					{/* Trust badges */}
					<div className="flex flex-wrap gap-3">
						{["ISO-aligned roadmap", "Encryption in transit", "RBAC enforced", "Audit logged", "Org-scoped isolation"].map((badge) => (
							<span key={badge} className="text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
								{badge}
							</span>
						))}
					</div>
				</section>

				{/* ── SECURITY BLOCKS ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{[
							{
								kicker: "DATA ARCHITECTURE",
								title: "Org-level isolation and cluster boundaries.",
								body: "Knowledge is scoped by organization and cluster, with no cross-tenant data bleed. Sources remain authoritative, and agents operate inside explicit permission boundaries.",
								icon: "01",
							},
							{
								kicker: "ACCESS CONTROL",
								title: "Roles that match real teams.",
								body: "Owner, admin, member, and viewer roles define who can create clusters, publish skills, run automations, and inspect audit history.",
								icon: "02",
							},
							{
								kicker: "INFRASTRUCTURE",
								title: "Controls for production readiness.",
								body: "Planned controls include encryption at rest, TLS in transit, secure session handling, production-safe secrets, and environment-level isolation.",
								icon: "03",
							},
							{
								kicker: "ROADMAP",
								title: "Trust maturity without ambiguity.",
								body: "Roadmap items include SOC 2 Type II readiness, SSO through SAML or OIDC, MFA enforcement, DLP controls, and deeper audit export.",
								icon: "04",
							},
						].map((block) => (
							<div key={block.kicker} className="border border-white/10 p-8 rounded-lg bg-transparent">
								<div className="text-xs text-status-blue font-bold mb-4 bg-status-blue/10 w-8 h-8 flex items-center justify-center rounded">
									{block.icon}
								</div>
								<span className="font-label-caps text-[10px] text-status-blue tracking-widest block mb-3">
									{block.kicker}
								</span>
								<h2 className="font-headline-sm text-xl text-primary mb-3 font-semibold leading-snug">
									{block.title}
								</h2>
								<p className="font-body-md text-sm text-white/50 leading-relaxed">
									{block.body}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* ── PERMISSION MODEL ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="text-center mb-16 flex flex-col items-center">
						<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
							PERMISSION MODEL
						</span>
						<h2 className="font-headline-md text-headline-md text-primary max-w-3xl font-bold tracking-tight">
							Shared memory only works when boundaries are visible.
						</h2>
					</div>

					<div className="flex flex-col md:flex-row gap-12 items-stretch">
						{/* Hierarchy */}
						<div className="flex-1 border border-white/10 rounded-lg bg-[#0a0a0a] p-8">
							<div className="text-[10px] text-white/40 font-medium tracking-widest mb-6">SCOPE HIERARCHY</div>
							<div className="space-y-3">
								{[
									{ label: "Organization", color: "border-white/20 text-white/90", indent: "ml-0" },
									{ label: "Workspace", color: "border-white/15 text-white/70", indent: "ml-4" },
									{ label: "Cluster", color: "border-status-blue/30 text-status-blue", indent: "ml-8" },
								].map((item) => (
									<div key={item.label} className={`${item.indent} border ${item.color} px-4 py-3 rounded text-sm font-medium`}>
										{item.label}
									</div>
								))}
							</div>
						</div>

						{/* Role map */}
						<div className="flex-1 border border-white/10 rounded-lg bg-[#0a0a0a] p-8">
							<div className="text-[10px] text-white/40 font-medium tracking-widest mb-6">ROLES</div>
							<div className="grid grid-cols-2 gap-3">
								{[
									{ role: "Owner", desc: "Full control, billing, org settings", color: "border-white/20" },
									{ role: "Admin", desc: "Manage clusters, skills, users", color: "border-status-blue/30" },
									{ role: "Member", desc: "Use agents, run automations", color: "border-white/10" },
									{ role: "Viewer", desc: "Read-only access to assigned clusters", color: "border-white/10" },
								].map((item) => (
									<div key={item.role} className={`border ${item.color} p-3 rounded`}>
										<div className="text-sm font-semibold text-white mb-1">{item.role}</div>
										<div className="text-[11px] text-white/50 leading-relaxed">{item.desc}</div>
									</div>
								))}
							</div>
						</div>

						{/* Audit */}
						<div className="flex-1 border border-white/10 rounded-lg bg-[#0a0a0a] p-8">
							<div className="flex justify-between items-center mb-6">
								<div className="text-[10px] text-white/40 font-medium tracking-widest">AUDIT LOG FEED</div>
								<span className="text-[10px] text-emerald-500 font-medium">Live</span>
							</div>
							<div className="space-y-3 text-xs">
								{[
									{ badge: "ADMIN", badgeCls: "bg-white/10 text-white", action: "Approved automation run", time: "2m ago" },
									{ badge: "AGENT", badgeCls: "bg-status-blue/10 text-status-blue", action: "Cited CS cluster source", time: "8m ago" },
									{ badge: "OWNER", badgeCls: "bg-white/10 text-white", action: "Updated RBAC permissions", time: "1h ago" },
									{ badge: "SYSTEM", badgeCls: "bg-red-500/10 text-red-500", action: "Blocked cross-cluster read", time: "4h ago" },
								].map((entry) => (
									<div key={entry.action} className="border-b border-white/5 pb-2 flex justify-between items-center last:border-0 last:pb-0">
										<div className="flex gap-2 items-center">
											<strong className={`px-1.5 py-0.5 rounded text-[10px] ${entry.badgeCls}`}>{entry.badge}</strong>
											<span className="text-white/70">{entry.action}</span>
										</div>
										<small className="text-white/40 flex-shrink-0 ml-2">{entry.time}</small>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

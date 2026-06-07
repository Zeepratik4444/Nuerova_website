import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function SecurityPage() {
	useSEO({
		title: "Security | Nuerova",
		description: "Enterprise security and governance built-in: scoped access, org boundaries, audit logs, and data isolation.",
	});

	useScrollReveal();

	return (
		<div className="js-enabled">
			<Navigation />

			<main id="main">
				{/* ── HERO ── */}
				<section className="page-hero">
					<div className="container">
						<div className="reveal">
							<span className="kicker">Security</span>
							<h1>Security and governance designed for enterprise teams.</h1>
							<p>Nuerova is built around scoped access, organization boundaries, auditability, and controls that make shared AI memory usable for real work.</p>
						</div>
						<div className="page-visual reveal">
							<div className="visual-stack">
								<div className="visual-row">
									<span className="feature-icon security"></span>
									<strong>RBAC enforced</strong>
									<small>Roles</small>
								</div>
								<div className="visual-row">
									<span className="feature-icon memory"></span>
									<strong>Cluster isolation</strong>
									<small>Scoped</small>
								</div>
								<div className="visual-row">
									<span className="feature-icon automation"></span>
									<strong>Audit logged</strong>
									<small>Traceable</small>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ── TRUST BADGES & SECURITY BLOCKS ── */}
				<section className="section">
					<div className="container">
						<div className="trust-badges reveal">
							<span>ISO-aligned roadmap</span>
							<span>Encryption in transit</span>
							<span>RBAC enforced</span>
							<span>Audit logged</span>
						</div>

						<div className="security-grid reveal" style={{ marginTop: "18px" }}>
							<article className="security-block">
								<span className="kicker">Data architecture</span>
								<h2>Org-level isolation and cluster boundaries.</h2>
								<p>Knowledge is scoped by organization and cluster, with no cross-tenant data bleed. Sources remain authoritative, and agents operate inside explicit permission boundaries.</p>
							</article>
							<article className="security-block">
								<span className="kicker">Access control</span>
								<h2>Roles that match real teams.</h2>
								<p>Owner, admin, member, and viewer roles define who can create clusters, publish skills, run automations, and inspect audit history.</p>
							</article>
							<article className="security-block">
								<span className="kicker">Infrastructure</span>
								<h2>Controls for production readiness.</h2>
								<p>Planned controls include encryption at rest, TLS in transit, secure session handling, production-safe secrets, and environment-level isolation.</p>
							</article>
							<article className="security-block">
								<span className="kicker">Roadmap</span>
								<h2>Trust maturity without ambiguity.</h2>
								<p>Roadmap items include SOC 2 Type II readiness, SSO through SAML or OIDC, MFA enforcement, DLP controls, and deeper audit export.</p>
							</article>
						</div>
					</div>
				</section>

				{/* ── PERMISSION MODEL DIAGRAM ── */}
				<section className="section product-section">
					<div className="container">
						<div className="section-heading reveal">
							<span className="kicker">Permission model</span>
							<h2>Shared memory only works when boundaries are visible.</h2>
						</div>
						<div className="security-diagram reveal">
							<div className="mock-list">
								<span>Organization</span>
								<span>Workspace</span>
								<span>Cluster</span>
							</div>
							<div className="cluster-map">
								<div className="node core">RBAC</div>
								<div className="node">Owner</div>
								<div className="node">Admin</div>
								<div className="node">Member</div>
								<div className="node">Viewer</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

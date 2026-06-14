import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const permissionMatrix = [
	{ feature: "Manage Billing & Org Settings", owner: true, admin: false, member: false, viewer: false },
	{ feature: "Create & Delete Clusters", owner: true, admin: true, member: false, viewer: false },
	{ feature: "Manage Workspace Members", owner: true, admin: true, member: false, viewer: false },
	{ feature: "Publish Org-level Skills", owner: true, admin: true, member: false, viewer: false },
	{ feature: "Create & Run Automations", owner: true, admin: true, member: true, viewer: false },
	{ feature: "Query Agents in Assigned Clusters", owner: true, admin: true, member: true, viewer: true },
	{ feature: "View Audit Logs", owner: true, admin: true, member: false, viewer: false },
];

export function SecurityPage() {
	useSEO({
		title: "Security & Trust | Nuerova",
		description: "Data governance, tenant isolation, compliance, and our commitment to not training on customer data.",
		schemaOrg: {
			"@type": "WebPage",
			"name": "Security & Trust | Nuerova",
			"description": "Data governance, tenant isolation, compliance, and our commitment to not training on customer data."
		}
	});

	useScrollReveal();

	return (
		<div className="bg-[#050505] text-white min-h-screen flex flex-col selection:bg-status-blue/30 selection:text-white font-sans">
			<Navigation />

			<main id="main" className="flex-grow pb-24 pt-32">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg mb-20 reveal text-center flex flex-col items-center">
					<span className="font-label-caps text-xs text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-6">
						SECURITY & GOVERNANCE
					</span>
					<h1 className="font-headline-lg text-5xl md:text-6xl text-white mb-6 font-bold tracking-tight leading-tight max-w-4xl">
						Security designed for enterprise teams from day one.
					</h1>
					<p className="font-body-md text-xl text-white/50 max-w-2xl leading-relaxed mb-10">
						Nuerova is built around scoped access, organization boundaries, auditability, and controls that make shared AI memory usable for real work.
					</p>

					{/* Trust badges */}
					<div className="flex flex-wrap justify-center gap-3 max-w-3xl">
						{["ISO-aligned roadmap", "Encryption in transit", "RBAC enforced", "Audit logged", "Org-scoped isolation"].map((badge) => (
							<span key={badge} className="text-sm font-medium text-white/70 bg-white/5 border border-white/10 px-5 py-2 rounded-full flex items-center gap-2">
								<svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
								{badge}
							</span>
						))}
					</div>
				</section>

				{/* ── SECURITY BLOCKS (Bento Style) ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-12 reveal">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{[
							{
								kicker: "DATA ARCHITECTURE",
								title: "Org-level isolation & boundaries.",
								body: "Knowledge is scoped by organization and cluster, with no cross-tenant data bleed. Sources remain authoritative, and agents operate inside explicit permission boundaries.",
								icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
							},
							{
								kicker: "ACCESS CONTROL",
								title: "Roles that match real teams.",
								body: "Owner, admin, member, and viewer roles define who can create clusters, publish skills, run automations, and inspect audit history.",
								icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
							},
							{
								kicker: "INFRASTRUCTURE",
								title: "Controls for production.",
								body: "Planned controls include encryption at rest, TLS in transit, secure session handling, production-safe secrets, and environment-level isolation.",
								icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
							},
							{
								kicker: "ROADMAP",
								title: "Trust maturity.",
								body: "Roadmap items include SOC 2 Type II readiness, SSO through SAML or OIDC, MFA enforcement, DLP controls, and deeper audit export.",
								icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
							},
						].map((block) => (
							<div key={block.kicker} className="border border-white/10 p-8 rounded-2xl bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
								<div className="absolute -right-10 -top-10 w-32 h-32 bg-status-blue/5 rounded-full blur-3xl group-hover:bg-status-blue/10 transition-colors"></div>
								<div className="text-status-blue mb-6 bg-status-blue/10 w-12 h-12 flex items-center justify-center rounded-lg border border-status-blue/20">
									{block.icon}
								</div>
								<span className="font-label-caps text-[10px] font-bold text-white/40 tracking-widest block mb-3">
									{block.kicker}
								</span>
								<h2 className="text-2xl text-white mb-3 font-bold leading-snug">
									{block.title}
								</h2>
								<p className="text-white/50 leading-relaxed">
									{block.body}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* ── PERMISSION MATRIX ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-20 reveal">
					<div className="text-center mb-16 flex flex-col items-center">
						<h2 className="text-3xl md:text-4xl text-white font-bold tracking-tight mb-4">
							Role-Based Access Control
						</h2>
						<p className="text-white/50 max-w-2xl text-lg">
							Shared memory only works when boundaries are visible and strict. Here is exactly what each role can do.
						</p>
					</div>

					<div className="border border-white/10 rounded-2xl bg-[#0a0a0a] overflow-hidden shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse min-w-[600px]">
								<thead>
									<tr className="bg-black/40 border-b border-white/10">
										<th className="p-6 text-sm font-bold text-white/80 tracking-wider">Capability</th>
										<th className="p-6 text-sm font-bold text-white text-center border-l border-white/5 w-32">Owner</th>
										<th className="p-6 text-sm font-bold text-white text-center border-l border-white/5 w-32">Admin</th>
										<th className="p-6 text-sm font-bold text-white text-center border-l border-white/5 w-32">Member</th>
										<th className="p-6 text-sm font-bold text-white text-center border-l border-white/5 w-32">Viewer</th>
									</tr>
								</thead>
								<tbody>
									{permissionMatrix.map((row, i) => (
										<tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
											<td className="p-6 text-sm text-white/70 font-medium">{row.feature}</td>
											<td className="p-6 text-center border-l border-white/5">
												{row.owner ? <div className="w-5 h-5 rounded-full bg-status-blue/20 text-status-blue flex items-center justify-center mx-auto"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div> : <div className="w-2 h-px bg-white/20 mx-auto"></div>}
											</td>
											<td className="p-6 text-center border-l border-white/5">
												{row.admin ? <div className="w-5 h-5 rounded-full bg-status-blue/20 text-status-blue flex items-center justify-center mx-auto"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div> : <div className="w-2 h-px bg-white/20 mx-auto"></div>}
											</td>
											<td className="p-6 text-center border-l border-white/5">
												{row.member ? <div className="w-5 h-5 rounded-full bg-status-blue/20 text-status-blue flex items-center justify-center mx-auto"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div> : <div className="w-2 h-px bg-white/20 mx-auto"></div>}
											</td>
											<td className="p-6 text-center border-l border-white/5">
												{row.viewer ? <div className="w-5 h-5 rounded-full bg-status-blue/20 text-status-blue flex items-center justify-center mx-auto"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div> : <div className="w-2 h-px bg-white/20 mx-auto"></div>}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* ── BOTTOM CTA ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg mt-12 reveal">
					<div className="bg-gradient-to-r from-[#0a0a0a] to-[#111] border border-white/10 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row gap-8 items-center justify-between relative overflow-hidden">
						<div className="absolute top-0 right-0 w-64 h-64 bg-status-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
						<div className="relative z-10 max-w-xl">
							<span className="font-label-caps text-xs text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block mb-4">SECURITY REVIEW</span>
							<h2 className="font-headline-md text-3xl text-white mb-4 font-bold tracking-tight">Need a custom security review?</h2>
							<p className="font-body-md text-white/60">We are happy to answer deep technical questions about our infrastructure and data practices.</p>
						</div>
						<a
							href="mailto:security@nuerova.xyz"
							className="relative z-10 flex-shrink-0 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-bold text-sm"
						>
							Contact Security Team
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}

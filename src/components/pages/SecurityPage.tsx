import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Key, FileCheck, Lock, Server, Users, Eye, HelpCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "@tanstack/react-router";

export function SecurityPage() {
	useSEO({
		title: "Security & Governance — Enterprise Grade Data Protection | Nuerova",
		description: "Explore Nuerova's enterprise-grade security standards. Learn about workspace isolation, role-based access control, SOC2 compliance, and audit trails.",
	});

	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			{/* Hero Section */}
			<section className="bg-gradient-to-b from-blue-50 to-white py-20 border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8 border border-blue-200">
						<Shield className="h-4 w-4 text-blue-600" />
						Enterprise Grade Security
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
						Security, Governance, <br />
						<span className="text-blue-600">and Trust at Scale.</span>
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
						Nuerova is engineered with robust data isolation, granular access permissions, and complete execution audit logging to guarantee your team's collective intelligence remains completely secure.
					</p>
					<div className="flex justify-center gap-4">
						<Link to="/contact">
							<Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
								Request Security Package
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Core Security Pillars */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900">How we protect your organization's data</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							Security isn't a feature we added later. It is built into the architecture of our scoped knowledge clusters and agent workflows.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								icon: <Server className="h-10 w-10 text-blue-600" />,
								title: "Data Isolation",
								desc: "Knowledge clusters are logically isolated. Data from one workspace never spills over or interacts with another.",
							},
							{
								icon: <Key className="h-10 w-10 text-blue-600" />,
								title: "Access Controls",
								desc: "Granular Role-Based Access Control (RBAC). Restrict who can connect data sources, run tasks, or edit skills.",
							},
							{
								icon: <Eye className="h-10 w-10 text-blue-600" />,
								title: "Execution Audit Logs",
								desc: "Every trigger, agent reasoning step, and downstream action is recorded in a tamper-resistant, queryable audit timeline.",
							},
							{
								icon: <Lock className="h-10 w-10 text-blue-600" />,
								title: "Zero LLM Leakage",
								desc: "Nuerova ensures your data is never used to train public LLM models. All api transactions utilize zero-retention parameters.",
							},
						].map((item, idx) => (
							<Card key={idx} className="border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
								<CardHeader>
									<div className="mb-4">{item.icon}</div>
									<CardTitle className="text-xl font-bold">{item.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Detailed Technical Standards */}
			<section className="py-16 bg-gray-50 border-y border-gray-100">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Security Specifications</h2>
					
					<div className="space-y-6">
						{[
							{
								title: "Encryption Standard",
								detail: "Data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We utilize industry-recognized key management practices to secure server storage keys.",
							},
							{
								title: "SSO, SAML, & Multi-Factor Authentication (MFA)",
								detail: "Integrate with Okta, Azure AD, or Google Workspace to enforce company-wide single sign-on policies. Team members can enforce multi-factor requirements at checkout and logins.",
							},
							{
								title: "Granular Role-Based Authorization",
								detail: "Assign specific roles (Workspace Admin, Cluster Operator, Viewer) to prevent unauthorized editing of visual automations or adding integrations.",
							},
							{
								title: "Third-Party Pen Testing",
								detail: "Nuerova undergoes annual external application penetration testing and vulnerability assessments conducted by independent security firms. Reports are available upon request.",
							},
						].map((spec, i) => (
							<div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-start gap-4">
								<div className="shrink-0 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg w-10 h-10 font-bold">
									0{i + 1}
								</div>
								<div>
									<h3 className="font-bold text-gray-900 text-lg mb-2">{spec.title}</h3>
									<p className="text-gray-600 text-sm leading-relaxed">{spec.detail}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Compliance Timeline / Roadmap */}
			<section className="py-20 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900">Compliance & Certifications</h2>
						<p className="mt-4 text-gray-600">Our roadmap towards continuously hardening security practices.</p>
					</div>

					<div className="relative border-l border-blue-200 ml-4 md:ml-10 space-y-12">
						{[
							{
								status: "Completed",
								title: "SOC 2 Type I",
								desc: "Verified our controls are designed appropriately to meet trust services criteria for security.",
								color: "bg-green-600",
							},
							{
								status: "In Progress",
								title: "SOC 2 Type II Auditing",
								desc: "Actively auditing the operational effectiveness of our control processes over time.",
								color: "bg-blue-600",
							},
							{
								status: "Targeted Q4 2026",
								title: "ISO 27001 Certification",
								desc: "Establishing a complete Information Security Management System (ISMS) matching ISO guidelines.",
								color: "bg-gray-400",
							},
						].map((milestone, idx) => (
							<div key={idx} className="relative pl-8 md:pl-12">
								<div className={`absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full ${milestone.color} border-4 border-white`} />
								<div>
									<span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${
										milestone.status === "Completed" ? "bg-green-100 text-green-800" :
										milestone.status === "In Progress" ? "bg-blue-100 text-blue-800" :
										"bg-gray-100 text-gray-800"
									}`}>
										{milestone.status}
									</span>
									<h3 className="text-xl font-bold text-gray-900 mb-1">{milestone.title}</h3>
									<p className="text-gray-600 text-sm">{milestone.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Bottom Callout */}
			<section className="bg-gray-900 text-white py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<HelpCircle className="h-12 w-12 text-blue-400 mx-auto mb-6" />
					<h2 className="text-3xl font-bold mb-4">Need a copy of our security documentation?</h2>
					<p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
						We are happy to share our security disclosures, questionnaires, and architectural layouts with security engineering departments.
					</p>
					<Link to="/contact">
						<Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
							Contact Security Team
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}

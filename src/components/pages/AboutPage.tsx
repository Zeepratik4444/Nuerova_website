import { Navigation } from "@/components/Navigation";
import { useSEO } from "@/hooks/useSEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function AboutPage() {
	useSEO({
		title: "About Nuerova - Built to Eliminate Team Knowledge Silos",
		description: "Read the story of Nuerova. Built by operational and engineering practitioners who outgrew fragmented Slack histories and document silos.",
		canonicalPath: "/about",
		schemaOrg: [
			{
				"@type": "Organization",
				"name": "Nuerova",
				"url": "https://nuerova.xyz",
				"logo": "https://nuerova.xyz/apple-touch-icon.png",
				"description": "Nuerova is a team intelligence platform that centralizes department knowledge in scoped clusters, deploys context-aware agent helpers, and builds secure trigger-action automations.",
				"mission": "Make teams smarter than any individual within them by creating a durable, governed shared intelligence layer.",
				"knowsAbout": [
					"Team intelligence platforms",
					"Scoped knowledge clusters",
					"Context-aware AI agents",
					"Enterprise AI governance",
					"Visual workflow automation",
				],
			},
			{
				"@type": "AboutPage",
				"name": "About Nuerova",
				"url": "https://nuerova.xyz/about",
				"description": "Learn about Nuerova's mission to eliminate team knowledge silos through scoped memory clusters, governed agents, and secure automation.",
				"publisher": {
					"@type": "Organization",
					"name": "Nuerova",
					"url": "https://nuerova.xyz",
				},
			},
		],
	});

	useScrollReveal();

	return (
		<div className="bg-background text-white min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
			<Navigation />

			<main id="main" className="flex-grow pb-section-gap pt-24">
				{/* ── HERO ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg pt-8 pb-section-gap reveal">
					<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
						ABOUT
					</span>
					<h1 className="font-headline-md text-4xl md:text-5xl text-primary mb-stack-lg leading-tight font-bold tracking-tight max-w-3xl">
						Make teams smarter than any individual within them.
					</h1>
					<p className="font-body-md text-body-md text-white/50 max-w-2xl mb-10">
						Nuerova started from a simple frustration: the most valuable team knowledge usually lives in the places least prepared to preserve it.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{["Trust first", "Team memory", "Reusable skills", "Governed action"].map((label) => (
							<div key={label} className="border border-white/10 px-4 py-3 rounded text-sm text-white/70 text-center">
								{label}
							</div>
						))}
					</div>
				</section>

				{/* ── MISSION & STORY ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="border border-white/10 p-8 rounded-lg bg-transparent">
							<span className="font-label-caps text-[10px] text-status-blue tracking-widest block mb-4">FOUNDING STORY</span>
							<h2 className="font-headline-sm text-2xl text-primary mb-4 font-semibold leading-snug">
								Institutional knowledge should not walk out the door.
							</h2>
							<p className="font-body-md text-sm text-white/50 leading-relaxed">
								Teams repeat context, reconstruct decisions, and lose operating playbooks whenever work is trapped in individual chats or private workflows. Nuerova exists to make that context durable.
							</p>
						</div>
						<div className="border border-white/10 p-8 rounded-lg bg-transparent">
							<span className="font-label-caps text-[10px] text-status-blue tracking-widest block mb-4">MISSION</span>
							<h2 className="font-headline-sm text-2xl text-primary mb-4 font-semibold leading-snug">
								A shared intelligence layer for serious work.
							</h2>
							<p className="font-body-md text-sm text-white/50 leading-relaxed">
								The goal is not another personal AI surface. It is a governed system where team memory, reusable skills, agents, and automations compound together.
							</p>
						</div>
					</div>
				</section>

				{/* ── VALUES ── */}
				<section className="max-w-container-max mx-auto px-gutter md:px-stack-lg py-section-gap border-t border-white/10 reveal">
					<div className="text-center mb-16 flex flex-col items-center">
						<span className="font-label-caps text-label-caps text-status-blue bg-status-blue/10 border border-status-blue/20 px-3 py-1 rounded-full inline-block mb-stack-md">
							VALUES
						</span>
						<h2 className="font-headline-md text-headline-md text-primary max-w-3xl font-bold tracking-tight">
							Built for trust first, performance second.
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{[
							{
								num: "01",
								title: "Context should be owned by the team",
								body: "Knowledge is most useful when it survives transitions and remains accessible to the right people.",
							},
							{
								num: "02",
								title: "Automation needs judgment",
								body: "Workflows should reason, branch, and escalate instead of blindly chaining actions.",
							},
							{
								num: "03",
								title: "Security is product design",
								body: "RBAC, audit logs, and scoped isolation are not late-stage enterprise checkboxes.",
							},
							{
								num: "04",
								title: "Reusable intelligence compounds",
								body: "Skills should become governed assets, not scattered prompt snippets.",
							},
						].map((value) => (
							<div key={value.num} className="border border-white/10 p-8 rounded-lg bg-transparent">
								<div className="text-xs text-status-blue font-bold mb-4 bg-status-blue/10 w-8 h-8 flex items-center justify-center rounded">
									{value.num}
								</div>
								<h3 className="font-headline-sm text-lg text-primary mb-3 font-semibold">{value.title}</h3>
								<p className="font-body-md text-sm text-white/50 leading-relaxed">{value.body}</p>
							</div>
						))}
					</div>
				</section>
			</main>

		</div>
	);
}


import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const siteUrl = "https://nuerova.xyz";
const sourceDir = path.join(root, "src", "content", "blog");
const outputDir = path.join(root, "public", "blog");
const publicDir = path.join(root, "public");
const distDir = path.join(root, "dist");

const posts = [
	{
		slug: "scoped-team-memory",
		source: "blog-1-scoped-team-memory.html",
		title: "Why Scoped Team Memory Is the Moat Generic AI Tools Can't Copy",
		description: "Why per-user AI misses the team layer, and why scoped knowledge clusters are the essential team intelligence moat.",
		tags: ["Strategy", "Knowledge Management", "AI Teams"],
		readTime: "6 min read",
		publishedAt: "2026-06-07",
	},
	{
		slug: "skill-registry",
		source: "blog-2-skill-registry.html",
		title: "From Prompt Library to Skill Registry: What Enterprise AI Actually Needs",
		description: "How reusable intelligence becomes governed infrastructure, and why prompt libraries fall short.",
		tags: ["Product", "Skill Registry", "Governance"],
		readTime: "6 min read",
		publishedAt: "2026-06-07",
	},
	{
		slug: "agent-native-automation",
		source: "blog-3-agent-native-automation.html",
		title: "Agent-Native vs Rule-Based Automation: Why the Difference Matters",
		description: "Why workflows need reasoning before action, and where operations teams get leverage.",
		tags: ["Automation", "Operations", "AI Agents"],
		readTime: "6 min read",
		publishedAt: "2026-06-07",
	},
	{
		slug: "enterprise-ai-needs",
		source: "blog-4-enterprise-ai-needs.html",
		title: "What Enterprise AI Teams Actually Need (It's Not More Models)",
		description: "The operational blockers: memory, permissions, data boundaries, and audit logs.",
		tags: ["Enterprise AI", "Security", "Infrastructure"],
		readTime: "6 min read",
		publishedAt: "2026-06-07",
	},
	{
		slug: "knowledge-cluster-turnover",
		source: "blog-5-knowledge-cluster-turnover.html",
		title: "How to Build a Knowledge Cluster That Survives Employee Turnover",
		description: "A practical guide to designing scoped knowledge pools that protect institutional memory.",
		tags: ["Knowledge Ops", "Best Practices", "Team Continuity"],
		readTime: "6 min read",
		publishedAt: "2026-06-07",
	},
	{
		slug: "copilot-alternative",
		source: "blog-6-copilot-alternative.html",
		title: "Nuerova vs Microsoft Copilot: An Honest Comparison",
		description: "Where a team-oriented context layer differs from a bundled office assistant.",
		tags: ["Comparison", "AI Platforms", "Productivity"],
		readTime: "6 min read",
		publishedAt: "2026-06-07",
	},
	{
		slug: "fragmented-knowledge-cost",
		source: "blog-7-fragmented-knowledge-cost.html",
		title: "The Hidden Cost of Fragmented Institutional Knowledge",
		description: "Context loss is a real operating expense. How to measure and recover lost hours.",
		tags: ["ROI", "Operations", "Team Performance"],
		readTime: "6 min read",
		publishedAt: "2026-06-07",
	},
	{
		slug: "cs-automation-human-touch",
		source: "blog-8-cs-automation-human-touch.html",
		title: "How to Automate CS Operations Without Losing the Human Touch",
		description: "Automation should make human judgment faster and more informed, not invisible.",
		tags: ["Customer Success", "Automation", "Workflow"],
		readTime: "6 min read",
		publishedAt: "2026-06-07",
	},
	{
		slug: "agent-workflow-readiness",
		source: "blog-9-agent-workflow-readiness.html",
		title: "5 Signs Your Team Is Ready for Agent-Native Workflows",
		description: "Signals that your operational complexity calls for context-aware automation.",
		tags: ["Readiness", "AI Agents", "Operations"],
		readTime: "6 min read",
		publishedAt: "2026-06-07",
	},
	{
		slug: "setup-guide-72-hours",
		source: "blog-10-setup-guide-72-hours.html",
		title: "Nuerova Setup Guide: Live in 72 Hours",
		description: "A day-by-day roadmap for moving from first source to first governed workflow.",
		tags: ["Setup", "Onboarding", "Implementation"],
		readTime: "6 min read",
		publishedAt: "2026-06-07",
	},
	{
		slug: "governance-vs-velocity",
		source: "blog-11-governance-vs-velocity.html",
		title: "The False Choice: Governance vs Velocity in AI",
		description: "Why enterprise AI governance and team velocity are not opposites — and how to achieve both.",
		tags: ["Governance", "Enterprise AI", "Strategy"],
		readTime: "6 min read",
		publishedAt: "2026-06-14",
	},
	{
		slug: "roi-of-shared-memory",
		source: "blog-12-roi-of-shared-memory.html",
		title: "Measuring the ROI of Shared Memory",
		description: "How to quantify the compounding return of a shared AI intelligence layer across your team.",
		tags: ["ROI", "Strategy", "Knowledge Management"],
		readTime: "6 min read",
		publishedAt: "2026-06-14",
	},
	{
		slug: "ops-stack-breaks",
		source: "blog-13-ops-stack-breaks.html",
		title: "Why the Notion + Slack + ChatGPT Stack Breaks at 30 People",
		description: "The four failure modes that show up in every team's default AI stack — and what a connected intelligence layer changes.",
		tags: ["Operations", "Strategy", "AI Stack"],
		readTime: "5 min read",
		publishedAt: "2026-06-14",
	},
	{
		slug: "ai-rollout-no-shadow-ai",
		source: "blog-14-ai-rollout-no-shadow-ai.html",
		title: "How to Roll Out AI Without Creating Shadow AI",
		description: "Shadow AI is a supply problem, not a discipline problem. A practical rollout sequence that prevents it.",
		tags: ["Enterprise AI", "Governance", "Rollout"],
		readTime: "6 min read",
		publishedAt: "2026-06-14",
	},
	{
		slug: "stop-buying-point-ai-tools",
		source: "blog-15-stop-buying-point-ai-tools.html",
		title: "When to Stop Buying Point AI Tools",
		description: "Five signs your AI stack has hit the inflection point where a shared intelligence layer generates more ROI than another point tool.",
		tags: ["Strategy", "ROI", "Enterprise AI"],
		readTime: "5 min read",
		publishedAt: "2026-06-14",
	},
];

const blogNextSteps = {
	"scoped-team-memory": {
		stage: "awareness",
		title: "Build your first knowledge cluster",
		description: "See how easily you can scope and secure team memory across your existing tool stack.",
		label: "See how it works",
		to: "/how-it-works",
	},
	"skill-registry": {
		stage: "consideration",
		title: "Explore Nuerova capabilities",
		description: "See how reusable intelligence and published skills help operations teams scale.",
		label: "Explore features",
		to: "/features",
	},
	"agent-native-automation": {
		stage: "consideration",
		title: "See workflows that reason",
		description: "Learn how agent-native automations verify conditions before taking actions.",
		label: "See how it works",
		to: "/how-it-works",
	},
	"enterprise-ai-needs": {
		stage: "decision",
		title: "Review enterprise pricing",
		description: "Choose a plan that fits your team's access control and security requirements.",
		label: "Review pricing",
		to: "/pricing",
	},
	"knowledge-cluster-turnover": {
		stage: "awareness",
		title: "Read our security overview",
		description: "Learn how role-based permissions and isolation safeguard cluster knowledge.",
		label: "Read security details",
		to: "/security",
	},
	"copilot-alternative": {
		stage: "consideration",
		title: "Compare features end to end",
		description: "Check how Nuerova's scoped memory registry compares to bundled copilots.",
		label: "Explore features",
		to: "/features",
	},
	"fragmented-knowledge-cost": {
		stage: "awareness",
		title: "Quantify your team's context loss",
		description: "Use our interactive value calculator to estimate hours recovered per month.",
		label: "Calculate team ROI",
		to: "/",
	},
	"cs-automation-human-touch": {
		stage: "decision",
		title: "Request a custom sandbox pilot",
		description: "Let us show you how to automate customer support tasks while keeping humans in the loop.",
		label: "Request a demo",
		to: "/contact",
	},
	"agent-workflow-readiness": {
		stage: "consideration",
		title: "Walk through the setup process",
		description: "See the five steps to connect your stack and launch your first context-aware workflow.",
		label: "See how it works",
		to: "/how-it-works",
	},
	"setup-guide-72-hours": {
		stage: "decision",
		title: "Start your free Teams pilot",
		description: "Get a live workspace with unlimited clusters and agent sessions in 72 hours.",
		label: "Request a demo",
		to: "/contact",
	},
	"governance-vs-velocity": {
		stage: "consideration",
		title: "See how Nuerova governs without slowing teams down",
		description: "Explore the audit log and RBAC controls that keep enterprise AI teams moving fast and safe.",
		label: "Explore security",
		to: "/security",
	},
	"roi-of-shared-memory": {
		stage: "decision",
		title: "Start measuring your team's context ROI",
		description: "Request a pilot and we'll help you build a baseline for knowledge recovery time.",
		label: "Request a demo",
		to: "/contact",
	},
	"ops-stack-breaks": {
		stage: "awareness",
		title: "See what a connected intelligence layer looks like",
		description: "Nuerova connects to Notion, Slack, and your CRM — and adds the memory, governance, and automation layer your stack is missing.",
		label: "See the platform",
		to: "/features",
	},
	"ai-rollout-no-shadow-ai": {
		stage: "consideration",
		title: "Plan your rollout with the team",
		description: "Talk to the Nuerova team about rolling out AI with governance built in from day one.",
		label: "Talk to the team",
		to: "/contact",
	},
	"stop-buying-point-ai-tools": {
		stage: "decision",
		title: "See how Nuerova unifies your AI stack",
		description: "Connect your existing tools into a governed intelligence layer with shared memory and end-to-end workflows.",
		label: "Request a demo",
		to: "/contact",
	},
};

const blogAeoBlocks = {
	"scoped-team-memory": {
		question: "What is scoped team memory?",
		answer: "Scoped team memory is an architecture choice that pools and isolates context by team, project, or client cluster, making knowledge durable across employee turnover and available to agents under explicit permission boundaries.",
		facts: [
			"Isolates context logically by cluster",
			"Supports granular role-based permissions",
			"Prevents cross-tenant or cross-team data leaks",
		],
	},
	"skill-registry": {
		question: "What is an AI skill registry?",
		answer: "A skill registry is a system that packages prompts, instructions, integrations, and workflow logic into reusable capabilities that teams can publish, version-control, audit, and share across their organization.",
	},
	"agent-native-automation": {
		question: "How does agent-native automation differ from rule-based tools?",
		answer: "Rule-based automation triggers rigid, linear actions. Agent-native automation inserts a reasoning step between trigger and action, allowing an agent to consult scoped knowledge, evaluate confidence, branch, or request approval.",
	},
	"governance-vs-velocity": {
		question: "Can enterprise AI be both governed and fast?",
		answer: "Yes. Governance and velocity become opposites only when controls are bolt-on afterthoughts. Nuerova builds RBAC, audit logs, and approval queues directly into the workflow layer, so teams move quickly within safe boundaries rather than around them.",
		facts: [
			"Tamper-resistant audit logs on every agent action",
			"Granular RBAC prevents unauthorized cluster access",
			"Human approval gates built into visual workflows",
		],
	},
	"roi-of-shared-memory": {
		question: "How do you calculate the ROI of shared AI memory?",
		answer: "ROI of shared AI memory compounds from three sources: time recovered from repeated context re-gathering, institutional knowledge preserved through employee turnover, and reduction in onboarding time for new team members who can query the cluster instead of asking colleagues.",
		facts: [
			"Eliminates repeated re-explanation of team context to AI tools",
			"Preserves institutional knowledge across employee turnover",
			"Reduces onboarding time by making runbooks queryable",
		],
	},
	"ops-stack-breaks": {
		question: "Why does the Notion + Slack + ChatGPT stack break at scale?",
		answer: "The stack breaks because none of the tools share context — knowledge lives in people, not systems. AI added on top has no memory of decisions made in Notion or Slack, automation tops out at simple if-then logic, and there is no governance layer to satisfy IT requirements.",
		facts: [
			"Context lives in people, not systems",
			"Rule-based automation can't handle unstructured inputs",
			"No shared memory between tools",
		],
	},
	"ai-rollout-no-shadow-ai": {
		question: "How do you prevent shadow AI during an enterprise AI rollout?",
		answer: "Shadow AI is a supply problem — teams use unsanctioned tools because approved tools don't do the job. The solution is deploying governed tools that solve specific high-friction tasks better than the alternatives, with RBAC and audit logging built into the architecture from day one.",
		facts: [
			"Shadow AI follows tool gaps, not policy failures",
			"Governance must be architectural, not policy-based",
			"Start with highest-friction use cases per team",
		],
	},
	"stop-buying-point-ai-tools": {
		question: "When should a company stop buying point AI tools and build an intelligence layer?",
		answer: "The inflection point is when AI outputs from one tool need to inform another, when workflows require cross-system context that no single tool has, or when AI spend is growing but efficiency gains have plateaued. At that point, shared memory and integration across tools generates more ROI than additional point tools.",
		facts: [
			"Point tools generate additive ROI; intelligence layers compound",
			"Cross-tool context is the bottleneck, not model capability",
			"Inflection point: recurring workflows that need cross-system context",
		],
	},
};

function escapeHtml(value) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;");
}

function escapeAttribute(value) {
	return escapeHtml(value).replaceAll("'", "&#39;");
}

function buildBlogNextStepHtml(post) {
	const nextStep = blogNextSteps[post.slug];
	if (!nextStep) return "";

	const eventPayload = escapeAttribute(
		JSON.stringify({
			event: "blog_next_step_clicked",
			page_path: `/blog/${post.slug}`,
			page_title: `${post.title} | Nuerova Blog`,
			blog_slug: post.slug,
			cta_text: nextStep.label,
			cta_location: "blog_next_step",
			funnel_stage: nextStep.stage,
			target_url: nextStep.to,
		}),
	);

	return `<div class="blog-next-step">
	<p class="blog-next-step-kicker">Recommended next step</p>
	<h3>${escapeHtml(nextStep.title)}</h3>
	<p>${escapeHtml(nextStep.description)}</p>
	<a class="blog-cta-link" href="${escapeAttribute(nextStep.to)}" onclick='window.dataLayer=window.dataLayer||[];window.dataLayer.push(${eventPayload});'>${escapeHtml(nextStep.label)}</a>
</div>`;
}

function buildBlogAeoHtml(post) {
	const block = blogAeoBlocks[post.slug];
	if (!block) return "";

	const factsHtml = block.facts?.length
		? `<ul>${block.facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}</ul>`
		: "";
	const comparisonHtml = block.comparison?.length
		? `<div class="answer-comparison"><h3>AI-ready comparison summary</h3>${block.comparison
				.map(
					([label, value, detail]) => `<div class="answer-comparison-row">
	<strong>${escapeHtml(label)}</strong>
	<span>${escapeHtml(value)}</span>
	<p>${escapeHtml(detail)}</p>
</div>`,
				)
				.join("")}</div>`
		: "";
	const optionalHtml = [factsHtml, comparisonHtml].filter(Boolean).join("\n");

	return `<section class="answer-block">
	<p class="answer-kicker">Direct answer</p>
	<h2>${escapeHtml(block.question)}</h2>
	<p>${escapeHtml(block.answer)}</p>
${optionalHtml}
</section>`;
}

function injectBlogAeoHtml(articleHtml, post) {
	const blockHtml = buildBlogAeoHtml(post);
	if (!blockHtml) return articleHtml;
	
	// Inject after headers/meta
	const headerEndIndex = articleHtml.indexOf("</h1>");
	if (headerEndIndex !== -1) {
		return articleHtml.slice(0, headerEndIndex + 5) + `\n${blockHtml}` + articleHtml.slice(headerEndIndex + 5);
	}
	return `${blockHtml}\n${articleHtml}`;
}

function breadcrumbSchema(items) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: `${siteUrl}${item.path}`,
		})),
	};
}

function extractArticleHtml(html) {
	// Simple extraction - read the body elements directly
	return html.trim();
}

function stripTags(html) {
	return html
		.replace(/<script[\s\S]*?<\/script>/gi, "")
		.replace(/<style[\s\S]*?<\/style>/gi, "")
		.replace(/<[^>]+>/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

function pageShell({ title, description, canonicalPath, body, schema, schemas }) {
	const canonicalUrl = `${siteUrl}${canonicalPath}`;
	const escapedTitle = escapeHtml(title);
	const escapedDescription = escapeHtml(description);

	const allSchemas = [];
	if (schema) allSchemas.push(schema);
	if (schemas && Array.isArray(schemas)) {
		allSchemas.push(...schemas);
	}

	const schemaScripts = allSchemas
		.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
		.join("\n  ");

	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapedTitle}</title>
  <meta name="description" content="${escapedDescription}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Nuerova" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:title" content="${escapedTitle}" />
  <meta property="og:description" content="${escapedDescription}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapedTitle}" />
  <meta name="twitter:description" content="${escapedDescription}" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <meta property="og:image" content="https://nuerova.xyz/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:image" content="https://nuerova.xyz/og-image.png" />
  ${schemaScripts}
  <style>
    :root { color-scheme: light; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #181c22; background: #f9f9ff; }
    a { color: inherit; }
    .site-nav { border-bottom: 1px solid #c1c6d5; position: sticky; top: 0; background: rgba(249,249,255,.96); backdrop-filter: blur(8px); z-index: 10; }
    .site-nav-inner { max-width: 72rem; margin: 0 auto; padding: 1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .brand { color: #1275e2; font-weight: 800; font-size: 1.35rem; text-decoration: none; }
    .nav-links { display: flex; gap: 1.25rem; color: #414753; font-size: .95rem; }
    .nav-links a { text-decoration: none; }
    .nav-links a:hover { color: #1275e2; }
    header, main { max-width: 48rem; margin: 0 auto; padding-left: 1.5rem; padding-right: 1.5rem; }
    header { padding-top: 4rem; padding-bottom: 2.5rem; }
    main { padding-bottom: 5rem; }
    h1, h2, h3 { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-weight: 600; }
    h1 { font-size: clamp(2.3rem, 6vw, 3.2rem); line-height: 1.15; margin: 0 0 1.5rem; color: #181c22; }
    h2 { font-size: 1.65rem; margin: 2.5rem 0 1rem; }
    h3 { font-size: 1.15rem; margin: 1.5rem 0 .5rem; }
    p { color: #414753; line-height: 1.8; margin: 0 0 1.25rem; }
    ul { list-style: none; padding: 0; margin: 0 0 1.25rem; }
    li { color: #414753; line-height: 1.7; padding: .3rem 0 .3rem 1.6rem; position: relative; }
    li::before { content: "→"; position: absolute; left: 0; color: #1275e2; font-weight: 700; }
    .text-blue-600 { color: #1275e2; }
    .text-gray-500 { color: #717785; }
    .text-gray-400 { color: #a0a6b5; }
    .text-gray-900 { color: #181c22; }
    .text-xl { font-size: 1.25rem; }
    .text-sm { font-size: .875rem; }
    .text-xs { font-size: .75rem; }
    .font-bold { font-weight: 700; }
    .font-semibold { font-weight: 600; }
    .leading-relaxed { line-height: 1.7; }
    .leading-tight { line-height: 1.1; }
    .mb-5 { margin-bottom: 1.25rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mt-2 { margin-top: .5rem; }
    .mt-8 { margin-top: 2rem; }
    .pt-6 { padding-top: 1.5rem; }
    .border-t { border-top: 1px solid #c1c6d5; }
    .flex { display: flex; }
    .items-center { align-items: center; }
    .gap-4 { gap: 1rem; }
    .w-10 { width: 2.5rem; }
    .h-10 { height: 2.5rem; }
    .rounded-full { border-radius: 999px; }
    .bg-blue-100 { background: #e0e2eb; }
    .text-blue-700 { color: #1275e2; }
    .justify-center { justify-content: center; }
    .tag { display: inline-block; background: #ebedf7; color: #1275e2; font-size: .75rem; font-weight: 700; padding: .25rem .75rem; border-radius: 999px; margin: 0 .5rem .5rem 0; }
    
    .table-wrapper { overflow-x: auto; margin: 1.5rem 0; border: 1px solid #c1c6d5; border-radius: .75rem; }
    table { width: 100%; border-collapse: collapse; font-size: .9rem; }
    thead tr { background: #ebedf7; }
    th { padding: 0.75rem 1rem; text-align: left; font-weight: 600; color: #181c22; border-bottom: 2px solid #c1c6d5; }
    td { padding: 0.75rem 1rem; color: #414753; border-bottom: 1px solid #c1c6d5; vertical-align: top; }
    tr:hover td { background: #f1f3fc; }
    
    .answer-block { background: #f1f3fc; border: 1px solid #c1c6d5; border-radius: .75rem; padding: 1.5rem 1.75rem; margin: 0 auto 2rem; max-width: 48rem; }
    .answer-kicker { color: #717785 !important; font-size: .75rem !important; font-weight: 800 !important; text-transform: uppercase; letter-spacing: .08em; margin: 0 0 .5rem !important; }
    .answer-block h2 { color: #181c22 !important; margin: 0 0 .75rem !important; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important; font-size: 1.4rem !important; }
    .answer-block > p { color: #414753 !important; margin: 0 0 1rem !important; line-height: 1.7 !important; }
    .answer-block ul { display: grid; grid-template-columns: repeat(3, 1fr); gap: .75rem; margin: 1rem 0 0 !important; }
    .answer-block li { background: #fff; border: 1px solid #c1c6d5; border-radius: .5rem; padding: .75rem !important; color: #414753 !important; font-size: .9rem !important; }
    .answer-block li::before { content: "" !important; }
    
    .blog-next-step { background: #ebedf7; border: 1px solid #c1c6d5; border-radius: .75rem; padding: 1.5rem 1.75rem; margin: 3rem 0 2rem; }
    .blog-next-step-kicker { color: #1275e2 !important; font-size: .85rem !important; font-weight: 700 !important; margin: 0 0 .5rem !important; }
    .blog-next-step h3 { color: #181c22 !important; margin: 0 0 .75rem !important; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important; font-size: 1.35rem !important; }
    .blog-next-step p { color: #414753 !important; margin: 0 0 1rem !important; line-height: 1.7 !important; }
    .blog-cta-link { display: inline-flex; align-items: center; border-radius: .25rem; background: #1275e2; color: #fff; font-weight: 700; padding: .85rem 1.1rem; text-decoration: none; }
    .blog-cta-link:hover { background: #005cb8; }

    .post-grid { max-width: 72rem; margin: 0 auto; padding: 3rem 1.5rem 5rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
    .post-card { border: 1px solid #c1c6d5; border-radius: .75rem; padding: 1.5rem; text-decoration: none; display: block; background: #fff; }
    .post-card:hover { border-color: #1275e2; box-shadow: 0 18px 35px rgba(24, 28, 34, .08); }
    .post-card h2 { font-size: 1.25rem; margin: .75rem 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #181c22; }

    .article-shell { background: #fff; border: 1px solid #c1c6d5; border-radius: .75rem; padding: 3rem; margin-top: 2rem; margin-bottom: 2rem; }
    .article-meta { display: inline-block; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; color: #717785; letter-spacing: 0.1em; margin-bottom: 0.5rem; }

    @media (max-width: 780px) {
      .nav-links { display: none; }
      .post-grid, .answer-block ul { grid-template-columns: 1fr; }
      header { padding-top: 3rem; }
      .article-shell { padding: 1.5rem; }
    }
  </style>
</head>
<body>
  <nav class="site-nav">
    <div class="site-nav-inner">
      <a class="brand" href="/">Nuerova</a>
      <div class="nav-links">
        <a href="/features">Features</a>
        <a href="/how-it-works">How It Works</a>
        <a href="/security">Security</a>
        <a href="/pricing">Pricing</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Request Demo</a>
      </div>
    </div>
  </nav>
  ${body}
</body>
</html>
`;
}

function renderPost(post) {
	const sourceHtml = fs.readFileSync(path.join(sourceDir, post.source), "utf8");
	const articleHtml = `<main class="section"><article class="container article-shell"><span class="article-meta">${post.tags[0]}</span><h1>${post.title}</h1>${extractArticleHtml(sourceHtml)}</article></main>`;
	const fullArticleHtml = `${injectBlogAeoHtml(articleHtml, post)}\n<main>${buildBlogNextStepHtml(post)}</main>`;
	const canonicalPath = `/blog/${post.slug}`;
	const plainText = stripTags(fullArticleHtml).slice(0, 4500);
	const blogPostingSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.description,
		url: `${siteUrl}${canonicalPath}`,
		datePublished: post.publishedAt,
		dateModified: post.publishedAt,
		author: {
			"@type": "Organization",
			name: "Nuerova",
			url: siteUrl,
		},
		publisher: {
			"@type": "Organization",
			name: "Nuerova",
			url: siteUrl,
		},
		keywords: post.tags.join(", "),
		articleBody: plainText,
	};

	return pageShell({
		title: `${post.title} | Nuerova Blog`,
		description: post.description,
		canonicalPath,
		body: fullArticleHtml,
		schemas: [
			blogPostingSchema,
			breadcrumbSchema([
				{ name: "Home", path: "/" },
				{ name: "Blog", path: "/blog" },
				{ name: post.title, path: canonicalPath },
			]),
		],
	});
}

function renderBlogIndex() {
	const cards = posts
		.map(
			(post) => `<a class="post-card" href="/blog/${post.slug}">
  <div>${post.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
  <h2>${escapeHtml(post.title)}</h2>
  <p>${escapeHtml(post.description)}</p>
  <p class="text-sm text-gray-500">${post.readTime} · ${post.publishedAt.slice(0, 7)}</p>
</a>`,
		)
		.join("\n");

	const body = `<header>
  <div class="mb-5"><span class="tag">Nuerova Blog</span></div>
  <h1>Enterprise AI intelligence for teams who need it to work.</h1>
  <p class="text-xl text-gray-500 leading-relaxed">Short, practical essays on shared memory, governed automations, and the operating layer that modern teams need.</p>
</header>
<main class="post-grid">${cards}</main>`;

	const schema = {
		"@context": "https://schema.org",
		"@type": "Blog",
		name: "Nuerova Blog",
		description:
			"Read our latest articles on department knowledge clusters, visual reasoning workflows, and enterprise AI security.",
		url: `${siteUrl}/blog`,
		blogPost: posts.map((post) => ({
			"@type": "BlogPosting",
			headline: post.title,
			url: `${siteUrl}/blog/${post.slug}`,
			datePublished: post.publishedAt,
		})),
	};

	return pageShell({
		title: "Blog — Team Intelligence & Contextual Agents | Nuerova",
		description:
			"Read our latest articles on department knowledge clusters, visual reasoning workflows, and enterprise AI security.",
		canonicalPath: "/blog",
		body,
		schemas: [
			schema,
			breadcrumbSchema([
				{ name: "Home", path: "/" },
				{ name: "Blog", path: "/blog" },
			]),
		],
	});
}

function getNewestPostDate() {
	return posts
		.map((post) => post.publishedAt)
		.sort()
		.at(-1);
}

function buildBlogSitemap() {
	const urls = [
		{
			loc: `${siteUrl}/blog`,
			lastmod: getNewestPostDate(),
			changefreq: "weekly",
			priority: "0.8",
		},
		...posts.map((post) => ({
			loc: `${siteUrl}/blog/${post.slug}`,
			lastmod: post.publishedAt,
			changefreq: "monthly",
			priority: "0.7",
		})),
	];

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(url) => `  <url>
     <loc>${url.loc}</loc>
     <lastmod>${url.lastmod}</lastmod>
     <changefreq>${url.changefreq}</changefreq>
     <priority>${url.priority}</priority>
  </url>`,
	)
	.join("\n")}
</urlset>
`;
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "index.html"), renderBlogIndex());

for (const post of posts) {
	const postDir = path.join(outputDir, post.slug);
	fs.mkdirSync(postDir, { recursive: true });
	fs.writeFileSync(path.join(postDir, "index.html"), renderPost(post));
}

console.log(`Generated ${posts.length + 1} static blog pages in public/blog`);
fs.writeFileSync(path.join(publicDir, "sitemap-blog.xml"), buildBlogSitemap());
console.log("Generated public/sitemap-blog.xml");

// ── Generate llms.txt & llms-full.txt ─────────────────────────────────────
const staticLlmsIntro = `# Nuerova
> Scoped Knowledge Clusters & Team Intelligence Platforms.

Nuerova is a team intelligence platform that centralizes department knowledge in scoped clusters, deploys context-aware agent helpers, and builds secure trigger-action automations so your momentum is never lost.

## Product

- Homepage: https://nuerova.xyz/
- Features: https://nuerova.xyz/features
- Security: https://nuerova.xyz/security
- Pricing: https://nuerova.xyz/pricing
- How It Works: https://nuerova.xyz/how-it-works
- FAQ: https://nuerova.xyz/faq
- Contact / Free Trial: https://nuerova.xyz/contact

## Who It's For

- Operations and Engineering departments where context is fragmented in chat tools
- Teams wanting to centralize onboarding and runbooks into queryable vector indices
- Security-minded organizations requiring role-based access control and organizational data isolation

## Key Capabilities

- Scoped knowledge clusters connected to Slack, Confluence, Jira, and file storage
- Context-aware agent personas with custom prompts, model settings, and clearance boundaries
- Visual drag-and-drop workflow builder using triggers and reasoning checks
- Human-in-the-loop validation queue for approvals, edits, and rejections
- SOC-2 ready audit trails logging execution details, latencies, and operators
`;

const quoteReadyFacts = `## Quote-Ready Product Facts

- Nuerova runs on context-aware agents and scoped knowledge clusters.
- The platform supports Slack, Confluence, Gmail, Google Calendar, Jira, and CSV/JSON file uploads.
- Teams can start with a 7-day Teams trial (no credit card required).
- Nuerova plans scale by user seats: Starter supports up to 3 users, and Teams supports up to 25 users.
- Granular role-based access control (RBAC) secures cluster permissions.
`;

const llmsTxtContent = `${staticLlmsIntro}\n${quoteReadyFacts}`;
fs.writeFileSync(path.join(publicDir, "llms.txt"), llmsTxtContent);

// Build differentiated, technical full content for llms-full.txt
let fullContent = `${llmsTxtContent}\n\n## Technical Architecture Deep-Dive\n\n`;
fullContent += `### Scoped Knowledge Clusters\n`;
fullContent += `- Dynamic vector databases isolated by department or role context.\n`;
fullContent += `- Sync frequencies can be scheduled in intervals or triggered via Webhooks.\n`;
fullContent += `- Support for file uploads (JSON, CSV, PDF, Markdown) and native sync endpoints.\n\n`;

fullContent += `### Reusable Skill Registry\n`;
fullContent += `- Shared catalog of validated tools and prompt scripts written in Python or Javascript.\n`;
fullContent += `- Skills accept defined parameter schemas and can execute database queries or REST calls.\n\n`;

fullContent += `### Agent Personas & Visual Playbooks\n`;
fullContent += `- Visual node editor to wire triggers (e.g. email received, webhook, cron) to agent reasoning steps.\n`;
fullContent += `- Custom instructions, model choices, and memory clearance levels configured per agent.\n\n`;

fullContent += `### Human-in-the-Loop Verification\n`;
fullContent += `- Visual queues for approval where operations teams can review, edit, or reject agent-drafted responses before execution.\n\n`;

fullContent += `## Index of Articles and Resources\n\n`;
posts.forEach(post => {
	fullContent += `### ${post.title}\n`;
	fullContent += `- URL: https://nuerova.xyz/blog/${post.slug}\n`;
	fullContent += `- Summary: ${post.description}\n`;
	fullContent += `- Published: ${post.publishedAt} | Read Time: ${post.readTime} | Tags: ${post.tags.join(", ")}\n\n`;
});

fs.writeFileSync(path.join(publicDir, "llms-full.txt"), fullContent);

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, "llms.txt"), llmsTxtContent);
fs.writeFileSync(path.join(distDir, "llms-full.txt"), fullContent);

console.log("Generated public/llms.txt and public/llms-full.txt");

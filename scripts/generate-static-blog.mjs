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
		title: "How to Preserve Institutional Knowledge When Employees Leave",
		description: "Every departure takes undocumented context with it. Here's how to build a knowledge system that captures institutional memory continuously — so it survives employee turnover.",
		tags: ["Knowledge Ops", "Best Practices", "Team Continuity"],
		readTime: "6 min read",
		publishedAt: "2026-06-22",
	},
	{
		slug: "copilot-alternative",
		source: "blog-6-copilot-alternative.html",
		title: "Microsoft Copilot Alternative for Enterprise Teams: An Honest Comparison",
		description: "Microsoft Copilot handles individual productivity inside Microsoft 365. Here's what teams use instead when they need shared knowledge, scoped permissions, and cross-tool reasoning.",
		tags: ["Comparison", "AI Platforms", "Productivity"],
		readTime: "6 min read",
		publishedAt: "2026-06-22",
	},
	{
		slug: "fragmented-knowledge-cost",
		source: "blog-7-fragmented-knowledge-cost.html",
		title: "The Real Cost of Knowledge Silos in Enterprise Teams",
		description: "Knowledge silos cost enterprise teams more than they realize — not in one event, but in 45-minute increments across every role, every week. Here's how to measure and eliminate them.",
		tags: ["ROI", "Operations", "Team Performance"],
		readTime: "6 min read",
		publishedAt: "2026-06-22",
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
		title: "AI Knowledge Base Setup Guide: Live in 72 Hours",
		description: "A day-by-day implementation roadmap — from connecting your first data source to running your first governed AI workflow — without months of professional services or change management.",
		tags: ["Setup", "Onboarding", "Implementation"],
		readTime: "6 min read",
		publishedAt: "2026-06-22",
	},
	{
		slug: "governance-vs-velocity",
		source: "blog-11-governance-vs-velocity.html",
		title: "The False Choice: Governance vs Velocity in AI",
		description: "Why enterprise AI governance and team velocity are not opposites - and how to achieve both.",
		tags: ["Governance", "Enterprise AI", "Strategy"],
		readTime: "6 min read",
		publishedAt: "2026-06-14",
	},
	{
		slug: "roi-of-shared-memory",
		source: "blog-12-roi-of-shared-memory.html",
		title: "How to Measure ROI on AI Knowledge Management Tools",
		description: "Moving beyond 'hours saved' to measure the real return on an AI knowledge layer: onboarding speed, automation run rate, and what happens when your whole team operates at senior level.",
		tags: ["ROI", "Strategy", "Knowledge Management"],
		readTime: "6 min read",
		publishedAt: "2026-06-22",
	},
	{
		slug: "ops-stack-breaks",
		source: "blog-13-ops-stack-breaks.html",
		title: "Why the Notion + Slack + ChatGPT Stack Breaks at 30 People",
		description: "The four failure modes that show up in every team's default AI stack - and what a connected intelligence layer changes.",
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
	{
		slug: "what-is-a-skill-nuerova",
		source: "blog-16-what-is-a-skill-nuerova.html",
		title: "What Is a Skill? The Reusable AI Instruction That Changes How Teams Work",
		description: "Most teams treat AI prompts like single-use tools. Skills change that - packaged, versioned, org-shareable AI instructions that make every agent session smarter from the start.",
		date: "2026-06-14",
		tags: ["Product", "Skills", "AI Teams"],
		readTime: "9 min read",
		publishedAt: "2026-06-14",
	},
	{
		slug: "ai-document-generation-pdf-pptx",
		source: "blog-17-ai-document-generation-pdf-pptx.html",
		title: "From Prompt to PDF: How AI Document Generation Actually Works",
		description: "AI that generates formatted, structured documents - PDFs, PPTX decks, DOCX reports, XLSX sheets - from a single agent prompt. Here's how the pipeline works and why it matters.",
		date: "2026-06-14",
		tags: ["Product", "Automation", "Document Generation"],
		readTime: "9 min read",
		publishedAt: "2026-06-14",
	},
	{
		slug: "byok-bring-your-own-llm-keys",
		source: "blog-18-byok-bring-your-own-llm-keys.html",
		title: "BYOK: Why Enterprise Teams Should Control Their Own LLM Keys",
		description: "Bringing your own OpenAI, Anthropic, or Gemini keys isn't just about cost - it's about data control, compliance, and not being locked into a vendor's model choices.",
		date: "2026-06-14",
		tags: ["Security", "Enterprise", "BYOK"],
		readTime: "9 min read",
		publishedAt: "2026-06-14",
	},
	{
		slug: "twins-and-clusters-explained",
		source: "blog-19-twins-and-clusters-explained.html",
		title: "Twins and Clusters: How Personal and Team Knowledge Connect in Nuerova",
		description: "Most team AI tools are either personal (one user's context) or generic (no one's context). Twins and Clusters are the architecture that makes shared knowledge work without exposing what shouldn't be shared.",
		date: "2026-06-21",
		tags: ["Product", "Architecture", "Knowledge Management"],
		readTime: "10 min read",
		publishedAt: "2026-06-21",
	},
	{
		slug: "salesforce-ai-integration-what-works",
		source: "blog-20-salesforce-ai-integration-what-works.html",
		title: "Salesforce AI Integration: What Actually Works in Production",
		description: "Most Salesforce AI integrations disappoint in production. RAG over exports loses relational context. Real-time API queries break on custom fields. Here's the architecture that works.",
		date: "2026-06-22",
		tags: ["Integrations", "CRM", "Salesforce"],
		readTime: "9 min read",
		publishedAt: "2026-06-22",
	},
	{
		slug: "glean-alternative",
		source: "blog-21-glean-alternative.html",
		title: "Best Glean Alternatives for Enterprise Teams in 2026",
		description: "Looking for a Glean alternative? See how Nuerova, Microsoft Copilot, Guru, and Notion AI compare on scoped knowledge, workflow automation, and pricing.",
		tags: ["Comparison", "Enterprise AI", "Knowledge Management"],
		readTime: "7 min read",
		publishedAt: "2026-06-22",
	},
	{
		slug: "notion-ai-alternative",
		source: "blog-22-notion-ai-alternative.html",
		title: "Notion AI Alternative for Teams That Need Real Knowledge Governance",
		description: "Notion AI works great inside Notion. Here's what enterprise teams use instead when they need multi-tool reasoning, department-scoped access control, and workflow automation.",
		tags: ["Comparison", "Enterprise AI", "Knowledge Management"],
		readTime: "7 min read",
		publishedAt: "2026-06-22",
	},
	{
		slug: "glean-vs-notion-ai",
		source: "blog-23-glean-vs-notion-ai.html",
		title: "Glean vs Notion AI: Which Is Right for Your Enterprise Team?",
		description: "Glean indexes everything across your tool stack. Notion AI deepens one workspace. Here's how to pick — and when neither is the right answer.",
		tags: ["Comparison", "Enterprise AI", "AI Tools"],
		readTime: "6 min read",
		publishedAt: "2026-06-22",
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
		description: "Nuerova connects to Notion, Slack, and your CRM - and adds the memory, governance, and automation layer your stack is missing.",
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
	"what-is-a-skill-nuerova": {
		stage: "consideration",
		title: "Explore Nuerova's Skill library",
		description: "See the 20+ built-in Skills that give your team expert-quality AI from day one - and how to create your own.",
		label: "Explore features",
		to: "/features",
	},
	"ai-document-generation-pdf-pptx": {
		stage: "consideration",
		title: "See document generation in action",
		description: "Watch how Nuerova generates a finished PDF proposal, PPTX deck, or DOCX report from a single agent prompt.",
		label: "See how it works",
		to: "/how-it-works",
	},
	"byok-bring-your-own-llm-keys": {
		stage: "decision",
		title: "Review Nuerova's security architecture",
		description: "See how BYOK, Fernet key encryption, RBAC, and audit logs work together in Nuerova's enterprise security model.",
		label: "Read security details",
		to: "/security",
	},
	"twins-and-clusters-explained": {
		stage: "awareness",
		title: "See how Twins and Clusters work together",
		description: "Explore the consent model, FAST vs. DEEP mode, and how charter-based scoping keeps team knowledge precise.",
		label: "See how it works",
		to: "/how-it-works",
	},
	"salesforce-ai-integration-what-works": {
		stage: "consideration",
		title: "See Salesforce integration in Nuerova",
		description: "Connect your Salesforce account and see how agents synthesize CRM data with email and Slack for complete account intelligence.",
		label: "Explore integrations",
		to: "/features",
	},
	"glean-alternative": {
		stage: "decision",
		title: "See how Nuerova compares",
		description: "Explore scoped knowledge clusters, agent workflows, and role-based access — features Glean doesn't cover.",
		label: "Explore features",
		to: "/features",
	},
	"notion-ai-alternative": {
		stage: "decision",
		title: "Try Nuerova free for 7 days",
		description: "Connect your existing tools and see how scoped knowledge clusters and agent workflows change what your team can do.",
		label: "Start free trial",
		to: "/contact",
	},
	"glean-vs-notion-ai": {
		stage: "consideration",
		title: "See the third option",
		description: "Nuerova combines scoped knowledge clusters with workflow automation — covering what both Glean and Notion AI leave out.",
		label: "See how it works",
		to: "/how-it-works",
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
		answer: "The stack breaks because none of the tools share context - knowledge lives in people, not systems. AI added on top has no memory of decisions made in Notion or Slack, automation tops out at simple if-then logic, and there is no governance layer to satisfy IT requirements.",
		facts: [
			"Context lives in people, not systems",
			"Rule-based automation can't handle unstructured inputs",
			"No shared memory between tools",
		],
	},
	"ai-rollout-no-shadow-ai": {
		question: "How do you prevent shadow AI during an enterprise AI rollout?",
		answer: "Shadow AI is a supply problem - teams use unsanctioned tools because approved tools don't do the job. The solution is deploying governed tools that solve specific high-friction tasks better than the alternatives, with RBAC and audit logging built into the architecture from day one.",
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
	"what-is-a-skill-nuerova": {
		question: "What is a Skill in an AI platform?",
		answer: "A Skill is a reusable, versioned AI instruction set that packages a specific capability - like generating PDFs or writing SQL queries - into an installable module that agents apply before seeing a user's specific request. Unlike prompt templates, Skills are versioned, org-scoped, and hot-reload without retraining.",
		facts: [
			"Nuerova includes 20+ built-in Skills covering document creation, research, data analytics, and integrations",
			"Skills are org-scoped - one publish makes them available to every team member",
			"Custom Skills can be created from any instruction set and published to the org",
		],
	},
	"ai-document-generation-pdf-pptx": {
		question: "How does AI document generation work?",
		answer: "AI document generation combines content reasoning (the LLM understands what to write), formatting logic (structured output for the target file format), and file rendering (a production library produces the actual binary file). Nuerova generates PDF via WeasyPrint, PPTX via python-pptx, DOCX via python-docx, and XLSX via openpyxl - all from a single agent prompt grounded in cluster context.",
		facts: [
			"PDF, PPTX, DOCX, and XLSX generation from a single agent session",
			"Documents are grounded in cluster context - not generic placeholder content",
			"Generation is logged in Run History and reproducible with updated data",
		],
	},
	"byok-bring-your-own-llm-keys": {
		question: "What is BYOK (Bring Your Own Keys) for LLMs?",
		answer: "BYOK means you connect your own API keys for LLM providers - OpenAI, Anthropic, Gemini, Vertex AI, Azure, Groq, or Bedrock - and the platform routes model calls through your account. You pay model costs directly, your data flows under your API terms, and you control which model version runs. The platform provides orchestration, not model access.",
		facts: [
			"Nuerova supports BYOK for 6+ providers via LiteLLM abstraction",
			"API keys are encrypted at rest using Fernet symmetric encryption",
			"Model selection is configurable at the org level with per-session overrides",
		],
	},
	"twins-and-clusters-explained": {
		question: "What are Twins and Clusters in Nuerova?",
		answer: "A Twin is a private semantic index built from a user's consented OAuth sources (Gmail, Slack, Salesforce, Google Drive, GitHub). A Cluster is a bounded pool of multiple Twins, scoped by a charter that defines the cluster's purpose and out-of-scope exclusions. Members explicitly grant which sources they contribute per cluster. Agents query clusters within charter scope, not across all data indiscriminately.",
		facts: [
			"Twins are private by default - no admin visibility into individual Twin contents",
			"Cluster consent is per-member, per-source, per-cluster, and revocable at any time",
			"Charter-based scoping filters out-of-scope content even when it keyword-matches a query",
		],
	},
	"salesforce-ai-integration-what-works": {
		question: "What makes a Salesforce AI integration actually work in production?",
		answer: "A production-viable Salesforce AI integration requires live data with relational context preserved (not flat exports), cross-channel synthesis with email and Slack alongside CRM records, and the ability to initiate actions (with human approval) rather than only answer questions. Most implementations fail one or more of these requirements.",
		facts: [
			"Salesforce data is relational - flat RAG exports lose account-contact-opportunity context",
			"The full account story spans email, Slack, and CRM - single-source AI gives partial answers",
			"Read-only AI informs; action-capable AI with approval gates changes actual workflows",
		],
	},
	"glean-alternative": {
		question: "What is the best Glean alternative for enterprise teams?",
		answer: "The best Glean alternative depends on what Glean isn't covering for your team. If you need scoped team knowledge clusters with workflow automation, Nuerova is the closest architectural match. If you need broad org-wide search without workflow execution, Glean remains strong. If your knowledge lives primarily in Microsoft 365, Copilot is the path of least resistance. The key differentiator is whether you need AI to retrieve information or act on it.",
		facts: [
			"Glean inherits source-tool permissions; Nuerova enforces native cluster-level RBAC",
			"Glean retrieves and surfaces; Nuerova retrieves and executes agent workflows",
			"Nuerova supports BYOK for full LLM cost and data control; Glean does not",
		],
		faqs: [
			{
				q: "Why would a team look for a Glean alternative?",
				a: "Teams look for Glean alternatives when they need capabilities beyond cross-tool search: department-scoped knowledge isolation independent of source permissions, automated workflows that act on retrieved information, or BYOK LLM control. Glean is excellent for broad enterprise search but doesn't execute workflows.",
			},
			{
				q: "How does Nuerova differ from Glean?",
				a: "Glean is a horizontal search layer across your tool stack. Nuerova adds two things Glean doesn't have: cluster-level knowledge scoping with native RBAC (independent of source-tool permissions) and agent workflow execution — the ability to act on retrieved knowledge, not just surface it.",
			},
			{
				q: "Is Nuerova a Glean replacement?",
				a: "Nuerova and Glean solve overlapping but different problems. Glean is optimized for org-wide search across many tools. Nuerova is optimized for department-scoped knowledge with automation. Teams that need both retrieval and workflow execution, or tighter access control than source-inherited permissions, typically find Nuerova to be the better fit.",
			},
		],
	},
	"notion-ai-alternative": {
		question: "What is the best Notion AI alternative for enterprise knowledge governance?",
		answer: "For teams that need governance beyond Notion's permission model, multi-tool knowledge reasoning, or automated workflows, the best alternatives are Nuerova (scoped clusters + automation), Glean (broad org-wide search), or Guru (curated customer-facing knowledge). The right choice depends on whether your bottleneck is cross-tool fragmentation, access control, or workflow execution.",
		facts: [
			"Notion AI is scoped to Notion; Nuerova reasons across Slack, Jira, Salesforce, and more",
			"Notion AI surfaces content; Nuerova can trigger automated workflows from retrieved context",
			"Nuerova enforces cluster-level RBAC independent of source-tool permissions",
		],
		faqs: [
			{
				q: "What are the main limitations of Notion AI?",
				a: "Notion AI is limited to content inside Notion. It doesn't have access to Slack conversations, Jira tickets, Salesforce records, or Zendesk history. It also can't execute automated workflows, and its permission model is tied to Notion's page permissions rather than department-level knowledge isolation.",
			},
			{
				q: "When should you use Notion AI vs a Notion AI alternative?",
				a: "Stick with Notion AI if your team's knowledge lives primarily in Notion and you don't need cross-tool reasoning. Evaluate alternatives when your knowledge is distributed across multiple tools, when compliance requires stricter access control than Notion permissions offer, or when you need AI to trigger automated workflows rather than just answer questions.",
			},
			{
				q: "Does Nuerova work with Notion?",
				a: "Yes. Nuerova can sync Notion content into a team knowledge cluster alongside other sources like Slack, Jira, and Salesforce. This gives you AI that reasons across all your tools together, rather than each tool's AI reasoning in isolation.",
			},
		],
	},
	"glean-vs-notion-ai": {
		question: "What is the difference between Glean and Notion AI?",
		answer: "Glean is an AI search layer that indexes content across your entire connected tool stack — Confluence, Slack, Salesforce, GitHub, and more — giving everyone a single natural-language interface. Notion AI is an assistant embedded inside Notion that helps you draft, summarize, and query content that lives in your Notion workspace. Glean is horizontal (broad coverage, many tools); Notion AI is vertical (deep integration, one workspace). Neither executes automated workflows.",
		facts: [
			"Glean indexes 100+ enterprise tools; Notion AI is scoped to the Notion workspace",
			"Notion AI adds drafting and generation capabilities that Glean lacks",
			"Neither platform executes agent workflows or actions — only retrieval and generation",
		],
		faqs: [
			{
				q: "Which is better for enterprise teams: Glean or Notion AI?",
				a: "It depends on where your knowledge lives. Glean wins when knowledge is scattered across many tools and the bottleneck is finding things. Notion AI wins when knowledge is concentrated in Notion and the bottleneck is productivity within that workspace. Neither is the answer when you need cross-tool reasoning plus workflow automation.",
			},
			{
				q: "Can you use both Glean and Notion AI together?",
				a: "Yes, but there's significant overlap and cost duplication. Glean already indexes Notion content, so running both means paying twice to surface the same content. The more useful combination is a platform that handles both scoped knowledge retrieval and workflow execution in one product.",
			},
			{
				q: "What do Glean and Notion AI have in common?",
				a: "Both Glean and Notion AI are retrieval-focused: they surface and summarize information but don't execute automated actions. Both use natural language interfaces. Both require no manual knowledge curation. And both fall short for teams that need AI to not just find answers but trigger downstream workflows based on what it finds.",
			},
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
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="icon" type="image/png" href="/favicon-48.png" sizes="48x48" />
  <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#1275e2" />
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
	const wordCount = plainText.split(/\s+/).filter(Boolean).length;
	const blogPostingSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.description,
		url: `${siteUrl}${canonicalPath}`,
		datePublished: post.publishedAt,
		dateModified: post.publishedAt,
		image: {
			"@type": "ImageObject",
			url: `${siteUrl}/og-image.png`,
			width: 1200,
			height: 630,
		},
		author: {
			"@type": "Organization",
			name: "Nuerova",
			url: siteUrl,
		},
		publisher: {
			"@type": "Organization",
			name: "Nuerova",
			url: siteUrl,
			logo: {
				"@type": "ImageObject",
				url: `${siteUrl}/apple-touch-icon.png`,
			},
		},
		keywords: post.tags.join(", "),
		articleSection: post.tags[0],
		wordCount,
		articleBody: plainText,
	};

	const aeoBlock = blogAeoBlocks[post.slug];
	const faqSchema = aeoBlock?.faqs?.length ? {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: aeoBlock.question,
				acceptedAnswer: { "@type": "Answer", text: aeoBlock.answer },
			},
			...aeoBlock.faqs.map(faq => ({
				"@type": "Question",
				name: faq.q,
				acceptedAnswer: { "@type": "Answer", text: faq.a },
			})),
		],
	} : null;

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
			...(faqSchema ? [faqSchema] : []),
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
		title: "Blog - Team Intelligence & Contextual Agents | Nuerova",
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

const commonQuestions = `## Common Questions

**What is Nuerova?**
Nuerova is a team intelligence platform that centralizes department knowledge in scoped clusters, deploys context-aware agent helpers, and builds secure trigger-action automations. Unlike generic AI tools, it partitions knowledge by team so agents reason over the right context with the right permissions.

**How does Nuerova compare to Glean?**
Glean is a cross-tool search and retrieval layer. Nuerova adds two things Glean doesn't have: cluster-level knowledge scoping with native RBAC (independent of source-tool permissions) and agent workflow execution — the ability to act on retrieved knowledge, not just surface it.

**How does Nuerova compare to Notion AI?**
Notion AI reasons over Notion content only. Nuerova reasons across Slack, Jira, Salesforce, Google Drive, Confluence, and more, within scoped team clusters. Nuerova also executes automated workflows with human approval gates; Notion AI does not.

**How does Nuerova compare to Microsoft Copilot?**
Microsoft Copilot is a personal productivity assistant for M365. Nuerova is a team intelligence layer — shared memory scoped to departments, with multi-tool reasoning and workflow automation that Copilot doesn't support.

**What integrations does Nuerova support?**
Nuerova integrates with Slack, Confluence, Jira, Salesforce, Gmail, Google Calendar, Google Drive, GitHub, Zendesk, and CSV/JSON file uploads.

**What is a scoped knowledge cluster?**
A knowledge cluster is a bounded vector database containing context from one or more connected sources, scoped to a specific team, department, or project. Agents query within the cluster boundary and cannot access other clusters without explicit permission.

**Does Nuerova require training custom models?**
No. Nuerova is a retrieval and orchestration layer that works with BYOK (Bring Your Own Keys) from OpenAI, Anthropic, Gemini, Azure, Groq, Vertex AI, or Bedrock. No model training is required.

**What is the best Glean alternative for enterprise teams?**
The best Glean alternative depends on what Glean isn't covering. If you need scoped team knowledge with workflow automation, Nuerova is the closest match. If your knowledge is primarily in Microsoft 365, Copilot fits. The key differentiator is whether you need AI to retrieve information or act on it.

**What is the best Notion AI alternative for knowledge governance?**
For teams that need multi-tool reasoning, tighter access control, or automated workflows, the best alternatives are Nuerova (scoped clusters + automation), Glean (broad org-wide search), or Guru (curated customer-facing knowledge).
`;

const llmsTxtContent = `${staticLlmsIntro}\n${quoteReadyFacts}\n${commonQuestions}`;
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

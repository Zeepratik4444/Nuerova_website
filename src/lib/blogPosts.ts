import post1Html from '@/content/blog/blog-1-scoped-team-memory.html?raw';
import post2Html from '@/content/blog/blog-2-skill-registry.html?raw';
import post3Html from '@/content/blog/blog-3-agent-native-automation.html?raw';
import post4Html from '@/content/blog/blog-4-enterprise-ai-needs.html?raw';
import post5Html from '@/content/blog/blog-5-knowledge-cluster-turnover.html?raw';
import post6Html from '@/content/blog/blog-6-copilot-alternative.html?raw';
import post7Html from '@/content/blog/blog-7-fragmented-knowledge-cost.html?raw';
import post8Html from '@/content/blog/blog-8-cs-automation-human-touch.html?raw';
import post9Html from '@/content/blog/blog-9-agent-workflow-readiness.html?raw';
import post10Html from '@/content/blog/blog-10-setup-guide-72-hours.html?raw';
import post11Html from '@/content/blog/blog-11-governance-vs-velocity.html?raw';
import post12Html from '@/content/blog/blog-12-roi-of-shared-memory.html?raw';
import post13Html from '@/content/blog/blog-13-ops-stack-breaks.html?raw';
import post14Html from '@/content/blog/blog-14-ai-rollout-no-shadow-ai.html?raw';
import post15Html from '@/content/blog/blog-15-stop-buying-point-ai-tools.html?raw';
import post16Html from '@/content/blog/blog-16-what-is-a-skill-nuerova.html?raw';
import post17Html from '@/content/blog/blog-17-ai-document-generation-pdf-pptx.html?raw';
import post18Html from '@/content/blog/blog-18-byok-bring-your-own-llm-keys.html?raw';
import post19Html from '@/content/blog/blog-19-twins-and-clusters-explained.html?raw';
import post20Html from '@/content/blog/blog-20-salesforce-ai-integration-what-works.html?raw';

export type BlogPost = {
	slug: string;
	title: string;
	summary: string;
	tags: string[];
	readTime: string;
	publishedAt: string;
	accent: string;
	contentHtml: string;
	author?: string;
	date?: string;
};

export const blogPosts: BlogPost[] = [
	{
		slug: 'scoped-team-memory',
		title: "Why Scoped Team Memory Is the Moat Generic AI Tools Can't Copy",
		summary: 'Why per-user AI misses the team layer, and why scoped knowledge clusters are the essential team intelligence moat.',
		tags: ['Strategy', 'Knowledge Management', 'AI Teams'],
		readTime: '6 min read',
		publishedAt: 'June 7, 2026',
		date: '2026-06-07',
		accent: 'indigo',
		contentHtml: post1Html,
	},
	{
		slug: 'skill-registry',
		title: 'From Prompt Library to Skill Registry: What Enterprise AI Actually Needs',
		summary: 'How reusable intelligence becomes governed infrastructure, and why prompt libraries fall short.',
		tags: ['Product', 'Skill Registry', 'Governance'],
		readTime: '6 min read',
		publishedAt: 'June 7, 2026',
		date: '2026-06-07',
		accent: 'blue',
		contentHtml: post2Html,
	},
	{
		slug: 'agent-native-automation',
		title: 'Agent-Native vs Rule-Based Automation: Why the Difference Matters',
		summary: 'Why workflows need reasoning before action, and where operations teams get leverage.',
		tags: ['Automation', 'Operations', 'AI Agents'],
		readTime: '6 min read',
		publishedAt: 'June 7, 2026',
		date: '2026-06-07',
		accent: 'indigo',
		contentHtml: post3Html,
	},
	{
		slug: 'enterprise-ai-needs',
		title: "What Enterprise AI Teams Actually Need (It's Not More Models)",
		summary: 'The operational blockers: memory, permissions, data boundaries, and audit logs.',
		tags: ['Enterprise AI', 'Security', 'Infrastructure'],
		readTime: '6 min read',
		publishedAt: 'June 7, 2026',
		date: '2026-06-07',
		accent: 'blue',
		contentHtml: post4Html,
	},
	{
		slug: 'knowledge-cluster-turnover',
		title: 'How to Build a Knowledge Cluster That Survives Employee Turnover',
		summary: 'A practical guide to designing scoped knowledge pools that protect institutional memory.',
		tags: ['Knowledge Ops', 'Best Practices', 'Team Continuity'],
		readTime: '6 min read',
		publishedAt: 'June 7, 2026',
		date: '2026-06-07',
		accent: 'indigo',
		contentHtml: post5Html,
	},
	{
		slug: 'copilot-alternative',
		title: 'Nuerova vs Microsoft Copilot: An Honest Comparison',
		summary: 'Where a team-oriented context layer differs from a bundled office assistant.',
		tags: ['Comparison', 'AI Platforms', 'Productivity'],
		readTime: '6 min read',
		publishedAt: 'June 7, 2026',
		date: '2026-06-07',
		accent: 'blue',
		contentHtml: post6Html,
	},
	{
		slug: 'fragmented-knowledge-cost',
		title: 'The Hidden Cost of Fragmented Institutional Knowledge',
		summary: 'Context loss is a real operating expense. How to measure and recover lost hours.',
		tags: ['ROI', 'Operations', 'Team Performance'],
		readTime: '6 min read',
		publishedAt: 'June 7, 2026',
		date: '2026-06-07',
		accent: 'indigo',
		contentHtml: post7Html,
	},
	{
		slug: 'cs-automation-human-touch',
		title: 'How to Automate CS Operations Without Losing the Human Touch',
		summary: 'Automation should make human judgment faster and more informed, not invisible.',
		tags: ['Customer Success', 'Automation', 'Workflow'],
		readTime: '6 min read',
		publishedAt: 'June 7, 2026',
		date: '2026-06-07',
		accent: 'blue',
		contentHtml: post8Html,
	},
	{
		slug: 'agent-workflow-readiness',
		title: '5 Signs Your Team Is Ready for Agent-Native Workflows',
		summary: 'Signals that your operational complexity calls for context-aware automation.',
		tags: ['Readiness', 'AI Agents', 'Operations'],
		readTime: '6 min read',
		publishedAt: 'June 7, 2026',
		date: '2026-06-07',
		accent: 'indigo',
		contentHtml: post9Html,
	},
	{
		slug: 'setup-guide-72-hours',
		title: 'Nuerova Setup Guide: Live in 72 Hours',
		summary: 'A day-by-day roadmap for moving from first source to first governed workflow.',
		tags: ['Setup', 'Onboarding', 'Implementation'],
		readTime: '6 min read',
		publishedAt: 'June 7, 2026',
		date: '2026-06-07',
		accent: 'blue',
		contentHtml: post10Html,
	},
	{
		slug: 'governance-vs-velocity',
		title: 'The False Choice: Governance vs Velocity in AI',
		summary: 'Why enterprise AI governance and team velocity are not opposites — and how to achieve both.',
		tags: ['Governance', 'Enterprise AI', 'Strategy'],
		readTime: '5 min read',
		publishedAt: 'June 14, 2026',
		date: '2026-06-14',
		accent: 'indigo',
		contentHtml: post11Html,
	},
	{
		slug: 'roi-of-shared-memory',
		title: 'Measuring the ROI of Shared Memory',
		summary: 'How to quantify the compounding return of a shared AI intelligence layer across your team.',
		tags: ['ROI', 'Strategy', 'Knowledge Management'],
		readTime: '4 min read',
		publishedAt: 'June 14, 2026',
		date: '2026-06-14',
		accent: 'blue',
		contentHtml: post12Html,
	},
	{
		slug: 'ops-stack-breaks',
		title: 'Why the Notion + Slack + ChatGPT Stack Breaks at 30 People',
		summary: 'The four failure modes that show up in every team\'s default AI stack — and what a connected intelligence layer changes.',
		tags: ['Operations', 'Strategy', 'AI Stack'],
		readTime: '5 min read',
		publishedAt: 'June 14, 2026',
		date: '2026-06-14',
		accent: 'indigo',
		contentHtml: post13Html,
	},
	{
		slug: 'ai-rollout-no-shadow-ai',
		title: 'How to Roll Out AI Without Creating Shadow AI',
		summary: 'Shadow AI is a supply problem, not a discipline problem. A practical rollout sequence that prevents it.',
		tags: ['Enterprise AI', 'Governance', 'Rollout'],
		readTime: '6 min read',
		publishedAt: 'June 14, 2026',
		date: '2026-06-14',
		accent: 'blue',
		contentHtml: post14Html,
	},
	{
		slug: 'stop-buying-point-ai-tools',
		title: 'When to Stop Buying Point AI Tools',
		summary: 'Five signs your AI stack has hit the inflection point where a shared intelligence layer generates more ROI than another point tool.',
		tags: ['Strategy', 'ROI', 'Enterprise AI'],
		readTime: '5 min read',
		publishedAt: 'June 14, 2026',
		date: '2026-06-14',
		accent: 'indigo',
		contentHtml: post15Html,
	},
	{
		slug: 'what-is-a-skill-nuerova',
		title: "What Is a Skill? The Reusable AI Instruction That Changes How Teams Work",
		summary: "Most teams treat AI prompts like single-use tools. Skills change that — packaged, versioned, org-shareable AI instructions that make every agent session smarter from the start.",
		publishedAt: "Jun 14, 2026",
		readTime: "9 min read",
		date: "2026-06-14",
		tags: ['Product', 'Skills', 'AI Teams'],
		accent: 'blue',
		contentHtml: post16Html,
	},
	{
		slug: 'ai-document-generation-pdf-pptx',
		title: "From Prompt to PDF: How AI Document Generation Actually Works",
		summary: "AI that generates formatted, structured documents — PDFs, PPTX decks, DOCX reports, XLSX sheets — from a single agent prompt. Here's how the pipeline works and why it matters.",
		publishedAt: "Jun 14, 2026",
		readTime: "9 min read",
		date: "2026-06-14",
		tags: ['Product', 'Automation', 'Document Generation'],
		accent: 'indigo',
		contentHtml: post17Html,
	},
	{
		slug: 'byok-bring-your-own-llm-keys',
		title: "BYOK: Why Enterprise Teams Should Control Their Own LLM Keys",
		summary: "Bringing your own OpenAI, Anthropic, or Gemini keys isn't just about cost — it's about data control, compliance, and not being locked into a vendor's model choices.",
		publishedAt: "Jun 14, 2026",
		readTime: "9 min read",
		date: "2026-06-14",
		tags: ['Security', 'Enterprise', 'BYOK'],
		accent: 'blue',
		contentHtml: post18Html,
	},
	{
		slug: 'twins-and-clusters-explained',
		title: "Twins and Clusters: How Personal and Team Knowledge Connect in Nuerova",
		summary: "Most team AI tools are either personal (one user's context) or generic (no one's context). Twins and Clusters are the architecture that makes shared knowledge work without exposing what shouldn't be shared.",
		publishedAt: "Jun 21, 2026",
		readTime: "10 min read",
		date: "2026-06-21",
		tags: ['Product', 'Architecture', 'Knowledge Management'],
		accent: 'indigo',
		contentHtml: post19Html,
	},
	{
		slug: 'salesforce-ai-integration-what-works',
		title: "Salesforce + AI: What Actually Works (And What Vendors Won't Tell You)",
		summary: "Connecting Salesforce to an AI layer sounds straightforward. In practice, most approaches fail because they treat CRM data as read-only context. Here's what actually works and why.",
		publishedAt: "Jun 21, 2026",
		readTime: "9 min read",
		date: "2026-06-21",
		tags: ['Integrations', 'CRM', 'Salesforce'],
		accent: 'blue',
		contentHtml: post20Html,
	},
];

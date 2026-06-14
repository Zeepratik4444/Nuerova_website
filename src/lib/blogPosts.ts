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
		title: 'Why Scoped Team Memory Is the Moat',
		summary: 'Why scoped team memory is the moat generic AI tools cannot copy.',
		tags: ['Strategy'],
		readTime: '6 min read',
		publishedAt: 'June 2026',
		accent: 'indigo',
		contentHtml: post1Html,
	},
	{
		slug: 'skill-registry',
		title: 'From Prompt Library to Skill Registry',
		summary: 'What enterprise AI actually needs from a skill registry.',
		tags: ['Product'],
		readTime: '6 min read',
		publishedAt: 'June 2026',
		accent: 'blue',
		contentHtml: post2Html,
	},
	{
		slug: 'agent-native-automation',
		title: 'Agent-Native vs Rule-Based Automation',
		summary: 'Why agent-native automation matters for operations teams.',
		tags: ['Automation'],
		readTime: '6 min read',
		publishedAt: 'June 2026',
		accent: 'indigo',
		contentHtml: post3Html,
	},
	{
		slug: 'enterprise-ai-needs',
		title: 'What Enterprise AI Teams Actually Need',
		summary: 'Enterprise AI needs memory, permissions, observability, and useful workflows.',
		tags: ['Enterprise AI'],
		readTime: '6 min read',
		publishedAt: 'June 2026',
		accent: 'blue',
		contentHtml: post4Html,
	},
	{
		slug: 'knowledge-cluster-turnover',
		title: 'Knowledge Clusters That Survive Turnover',
		summary: 'How to build knowledge clusters that survive employee turnover.',
		tags: ['Knowledge ops'],
		readTime: '6 min read',
		publishedAt: 'June 2026',
		accent: 'indigo',
		contentHtml: post5Html,
	},
	{
		slug: 'copilot-alternative',
		title: 'Nuerova vs Microsoft Copilot',
		summary: 'An honest comparison between Nuerova and Microsoft Copilot.',
		tags: ['Comparison'],
		readTime: '6 min read',
		publishedAt: 'June 2026',
		accent: 'blue',
		contentHtml: post6Html,
	},
	{
		slug: 'fragmented-knowledge-cost',
		title: 'The Hidden Cost of Fragmented Knowledge',
		summary: 'The hidden operating cost of fragmented institutional knowledge.',
		tags: ['ROI'],
		readTime: '6 min read',
		publishedAt: 'June 2026',
		accent: 'indigo',
		contentHtml: post7Html,
	},
	{
		slug: 'cs-automation-human-touch',
		title: 'Automate CS Without Losing the Human Touch',
		summary: 'How customer success teams can automate work while preserving judgment.',
		tags: ['Customer success'],
		readTime: '6 min read',
		publishedAt: 'June 2026',
		accent: 'blue',
		contentHtml: post8Html,
	},
	{
		slug: 'agent-workflow-readiness',
		title: '5 Signs Your Team Is Ready for Agent-Native Workflows',
		summary: 'Five signs your team is ready for agent-native workflows.',
		tags: ['Readiness'],
		readTime: '6 min read',
		publishedAt: 'June 2026',
		accent: 'indigo',
		contentHtml: post9Html,
	},
	{
		slug: 'setup-guide-72-hours',
		title: 'Nuerova Setup Guide: Live in 72 Hours',
		summary: 'A practical 72-hour setup guide for launching Nuerova.',
		tags: ['Setup'],
		readTime: '6 min read',
		publishedAt: 'June 2026',
		accent: 'blue',
		contentHtml: post10Html,
	},
	{
		slug: 'governance-vs-velocity',
		title: 'The False Choice: Governance vs Velocity in AI',
		summary: 'Why shadow AI happens — and how scoped cluster architecture solves it without sacrificing team speed.',
		tags: ['Enterprise', 'Security'],
		readTime: '5 min read',
		publishedAt: 'June 2026',
		accent: 'indigo',
		contentHtml: post11Html,
	},
	{
		slug: 'roi-of-shared-memory',
		title: 'Measuring the ROI of Shared Memory',
		summary: 'How to calculate the business impact of an intelligence layer.',
		tags: ['Strategy', 'ROI'],
		readTime: '4 min read',
		publishedAt: 'June 2026',
		accent: 'blue',
		contentHtml: post12Html,
	},
	{
		slug: 'ops-stack-breaks',
		title: 'Why the Notion + Slack + ChatGPT Stack Breaks at 30 People',
		summary: 'The ops stack most teams assemble by default — and the four failure modes that show up at scale.',
		tags: ['Operations', 'Strategy'],
		readTime: '5 min read',
		publishedAt: 'June 2026',
		accent: 'indigo',
		contentHtml: post13Html,
	},
	{
		slug: 'ai-rollout-no-shadow-ai',
		title: 'How to Roll Out AI Without Creating Shadow AI',
		summary: 'Shadow AI is a supply problem, not a discipline problem. Here is how to fix the supply.',
		tags: ['Enterprise AI', 'Governance'],
		readTime: '6 min read',
		publishedAt: 'June 2026',
		accent: 'blue',
		contentHtml: post14Html,
	},
	{
		slug: 'stop-buying-point-ai-tools',
		title: 'When to Stop Buying Point AI Tools',
		summary: 'Five signs your AI stack has hit the inflection point — and what building a shared intelligence layer changes.',
		tags: ['Strategy', 'ROI'],
		readTime: '5 min read',
		publishedAt: 'June 2026',
		accent: 'indigo',
		contentHtml: post15Html,
	},
];

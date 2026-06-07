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

export type BlogPost = {
	slug: string;
	title: string;
	summary: string;
	tags: string[];
	readTime: string;
	publishedAt: string;
	accent: string;
	contentHtml: string;
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
];

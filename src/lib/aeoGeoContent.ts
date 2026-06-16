export type BlogAnswerBlock = {
	question: string;
	answer: string;
	facts?: string[];
	comparison?: Array<{
		label: string;
		value: string;
		detail: string;
	}>;
};

export const BLOG_ANSWER_BLOCKS: Record<string, BlogAnswerBlock> = {
	"scoped-team-memory": {
		question: "What is scoped team memory?",
		answer: "Scoped team memory is a logical boundary for AI agents that partitions organizational knowledge into dedicated, permission-controlled clusters (like #ops-playbooks, #support, #engineering) so that context does not bleed across teams or tenants.",
		facts: [
			"Logical isolation of team context",
			"Ingests from Slack, wikis, and repositories",
			"Restricts agent access by user role",
		],
	},
	"skill-registry": {
		question: "What is a reusable skill registry for teams?",
		answer: "A skill registry is a centralized library where teams publish, version, and share custom instructed capabilities, scripts, prompts, and API tools so agents can reuse them safely across different workflows.",
		facts: [
			"Avoids duplicate prompt engineering",
			"Version control for agent tools",
			"Governed at the team/org level",
		],
	},
	"agent-native-automation": {
		question: "How is agent-native automation different from rule-based workflows?",
		answer: "Rule-based workflows follow rigid, brittle path structures. Agent-native automation inserts a cognitive reasoning step where an agent evaluates context from scoped clusters, handles exceptions, branches dynamically, and requests human validation before executing critical actions.",
		facts: [
			"Adapts to changing text & parameters",
			"Halts and escalates low-confidence steps",
			"Mandatory human-in-the-loop gates",
		],
	},
	"enterprise-ai-needs": {
		question: "What do enterprise teams actually need from AI?",
		answer: "Enterprise teams need more than just raw model access. They require structure and governance around the model: scoped team memory, role-based permissions, visual playbook auditing, and strict zero-data-retention parameters.",
		facts: [
			"Data isolation between tenants",
			"Immutable execution logs",
			"Zero model training on custom files",
		],
	},
	"knowledge-cluster-turnover": {
		question: "How does scoped memory survive employee turnover?",
		answer: "By syncing data directly from authoritative team channels and documents into persistent clusters, institutional memory compounds over time instead of staying locked in individual chat histories or minds when employees leave.",
		facts: [
			"Automatic background index syncing",
			"Knowledge compounds in persistent clusters",
			"Maintains playbooks when owners exit",
		],
	},
	"copilot-alternative": {
		question: "How does Nuerova compare to Microsoft Copilot?",
		answer: "While Microsoft Copilot acts as a broad personal office assistant for M365 files, Nuerova is a collaborative intelligence operating layer designed for team context clusters, reusable skill registries, and reasoning-driven visual playbooks.",
		facts: [
			"Tiers by user seats",
			"Visual multi-agent workflow builder",
			"Focus on custom team capabilities",
		],
		comparison: [
			{
				label: "Best for",
				value: "Collaborative operations and team execution",
				detail: "Nuerova partitions department context into clusters and triggers logic playbooks with human validation.",
			},
			{
				label: "Setup complexity",
				value: "Ready in under an hour",
				detail: "Integrates with Google Workspace, Confluence, Slack, and repositories with guided configuration.",
			},
			{
				label: "Pricing model",
				value: "Flexible tiered seats",
				detail: "Starter includes up to 3 seats, and Teams supports up to 25 seats, with Enterprise offering unlimited.",
			},
		],
	},
	"fragmented-knowledge-cost": {
		question: "What is the hidden cost of fragmented context?",
		answer: "Fragmented context cost shows up as slower onboarding, duplicate work, coordination overhead, and decision friction when team members must manually search through dozen of tools or wait for context holders.",
		facts: [
			"Hours lost searching threads annually",
			"Slower employee onboarding times",
			"Decisions stalled by missing documentation",
		],
	},
	"cs-automation-human-touch": {
		question: "Can customer success teams automate workflows safely?",
		answer: "Yes, by utilizing context-aware agents that draft updates, emails, or plans based on account history while maintaining a mandatory approval queue where CSMs review, edit, or reject drafts before they execute.",
		facts: [
			"Pre-drafts contextual emails",
			"Full visibility into agent citations",
			"Staged approvals prevent automated spam",
		],
	},
	"agent-workflow-readiness": {
		question: "When is a team ready for agent-native automation?",
		answer: "A team is ready when they run repetitive, context-heavy tasks that standard rules cannot handle (due to text variables or edge cases) and require auditability and validation controls.",
		facts: [
			"High volume of context-heavy requests",
			"Processes cross more than 3 tools",
			"Requires manager review before action",
		],
	},
	"setup-guide-72-hours": {
		question: "How fast can you set up Nuerova?",
		answer: "Nuerova is built for rapid deployment. Teams can connect core sources, configure initial workspaces, deploy custom agents, and compile their first visual playbooks in under an hour.",
		facts: [
			"Typical department onboarding takes under an hour",
			"Guided onboarding from success engineers",
			"Syncs existing stack via OAuth",
		],
	},
	"governance-vs-velocity": {
		question: "How do enterprise AI teams achieve governance without slowing down?",
		answer: "Governance and team velocity are not opposites. Scoped cluster architecture lets teams move fast within defined boundaries — permissions, model settings, and approval gates are set once at the cluster level, so individuals don't choose between speed and compliance on every task.",
		facts: [
			"Permissions enforced at the cluster, not the prompt level",
			"Shadow AI stems from supply gaps, not bad intent",
			"One-time governance setup unlocks permanent speed",
		],
	},
	"roi-of-shared-memory": {
		question: "How do you measure the ROI of a shared AI memory layer?",
		answer: "ROI compounds across three vectors: reduced context-switching time per employee, faster onboarding for new hires who inherit the team's full knowledge base, and fewer decision-stalling loops caused by missing documentation. Teams typically identify the payback period within the first 30 days.",
		facts: [
			"Context-switching costs 20–40 minutes per interruption",
			"New hire ramp time drops when clusters capture tribal knowledge",
			"Audit trails reduce compliance review overhead",
		],
	},
	"ops-stack-breaks": {
		question: "Why does the Notion + Slack + ChatGPT stack break at 30 people?",
		answer: "Below 30 people, informal knowledge sharing works because everyone knows who to ask. Above that threshold, four failure modes converge: tribal knowledge is no longer universal, search returns too many results, ChatGPT has no team context, and onboarding slows because new hires cannot distinguish current from outdated documentation.",
		facts: [
			"Knowledge silos form when teams exceed ~25–30 members",
			"Generic AI tools lack team-specific context by design",
			"Disconnected tools create compounding coordination debt",
		],
	},
	"ai-rollout-no-shadow-ai": {
		question: "How do you roll out AI company-wide without creating shadow AI?",
		answer: "Shadow AI is a supply problem: employees use unsanctioned tools because approved alternatives are too slow or too generic. The fix is deploying governed, team-specific AI access — scoped clusters with real team context — before employees resort to workarounds. Governance follows fast adoption, not the other way around.",
		facts: [
			"Shadow AI persists when approved tools don't solve real workflows",
			"Scoped clusters give IT visibility without blocking productivity",
			"Rollout sequence: pilot teams first, then expand with audit trails live",
		],
	},
	"stop-buying-point-ai-tools": {
		question: "When should a team stop buying individual AI tools?",
		answer: "The inflection point arrives when you are paying for five or more AI tools that each solve one narrow task, none of them share context, and integration work is consuming engineering capacity. At that point, a shared intelligence layer generates more ROI than another point tool because it compounds across every workflow instead of solving just one.",
		facts: [
			"Five or more disconnected AI tools signal the inflection point",
			"Point tools do not share context or compound knowledge",
			"A shared layer replaces multiple subscriptions and integration debt",
		],
	},
};

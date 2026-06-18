import type { FunnelStage } from "@/lib/analytics";

export type BlogNextStep = {
	stage: FunnelStage;
	title: string;
	description: string;
	label: string;
	to: string;
};

export const BLOG_NEXT_STEPS: Record<string, BlogNextStep> = {
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
};

// Two most relevant next-reads per post, ordered by funnel progression
export const BLOG_RELATED_POSTS: Record<string, [string, string]> = {
	"ops-stack-breaks":         ["enterprise-ai-needs",      "scoped-team-memory"],
	"scoped-team-memory":       ["fragmented-knowledge-cost", "roi-of-shared-memory"],
	"fragmented-knowledge-cost":["roi-of-shared-memory",     "setup-guide-72-hours"],
	"knowledge-cluster-turnover":["scoped-team-memory",      "roi-of-shared-memory"],
	"skill-registry":           ["agent-native-automation",  "agent-workflow-readiness"],
	"agent-native-automation":  ["cs-automation-human-touch","agent-workflow-readiness"],
	"cs-automation-human-touch":["agent-workflow-readiness", "setup-guide-72-hours"],
	"agent-workflow-readiness": ["setup-guide-72-hours",     "copilot-alternative"],
	"enterprise-ai-needs":      ["governance-vs-velocity",   "ai-rollout-no-shadow-ai"],
	"governance-vs-velocity":   ["ai-rollout-no-shadow-ai",  "setup-guide-72-hours"],
	"ai-rollout-no-shadow-ai":  ["governance-vs-velocity",   "setup-guide-72-hours"],
	"copilot-alternative":      ["setup-guide-72-hours",     "roi-of-shared-memory"],
	"stop-buying-point-ai-tools":["roi-of-shared-memory",   "setup-guide-72-hours"],
	"roi-of-shared-memory":     ["setup-guide-72-hours",     "copilot-alternative"],
	"setup-guide-72-hours":     ["copilot-alternative",      "roi-of-shared-memory"],
};

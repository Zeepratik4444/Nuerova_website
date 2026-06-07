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
};

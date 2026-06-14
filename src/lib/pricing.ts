// ─── Types ────────────────────────────────────────────────────────────────────

export type Currency = "INR" | "USD" | "EUR" | "GBP";
export type BillingCycle = "monthly" | "yearly";

export interface PricingTier {
    name: string;
    monthlyPrice: string;
    yearlyPrice: string;
    description: string;
    features: string[];
    cta: string;
    ctaLink: string;
    highlight?: boolean;
    highlightText?: string;
    gainsightNote?: string;
}

// ─── Shared feature highlights ────────────────

const STARTER_FEATURES = [
    "1 Workspace",
    "3 Scoped Clusters",
    "5 Contextual Automations",
    "Standard Connectors",
    "Email & Slack Alerts",
];

const TEAMS_FEATURES = [
    "Up to 25 Users / Seats",
    "Unlimited Knowledge Clusters",
    "Unlimited Automations",
    "Shared Skill Registry",
    "Role-Based Access Control",
];

const ENTERPRISE_FEATURES = [
    "Unlimited Workspaces & Seats",
    "Dedicated Agent Customization",
    "Enterprise SSO & MFA",
    "90-day Audit Logs & SOC2 Setup",
    "Dedicated Success Engineer",
];

// ─── Plan Data ────────────────────────────────────────────────────────────────
// Plans: Starter → Teams ⭐ → Enterprise

export const PRICING_DATA: Record<Currency, PricingTier[]> = {
    INR: [
        {
            name: "Starter",
            monthlyPrice: "₹3,999",
            yearlyPrice: "₹3,199",
            description: "For individual project leads organizing team context",
            features: STARTER_FEATURES,
            cta: "Start Free Trial",
            ctaLink: "/contact",
            gainsightNote: "7-day full Teams trial included",
        },
        {
            name: "Teams",
            monthlyPrice: "₹15,999",
            yearlyPrice: "₹12,799",
            description: "For scaling departments implementing visual workflows",
            features: TEAMS_FEATURES,
            cta: "Get Started",
            ctaLink: "/contact",
            highlight: true,
            highlightText: "Most Popular",
            gainsightNote: "Standard team workspace with granular roles",
        },
        {
            name: "Enterprise",
            monthlyPrice: "Custom",
            yearlyPrice: "Custom",
            description: "For large organizations requiring strict compliance",
            features: ENTERPRISE_FEATURES,
            cta: "Contact Sales",
            ctaLink: "/contact",
            gainsightNote: "Custom deployment and enterprise SLAs",
        },
    ],

    USD: [
        {
            name: "Starter",
            monthlyPrice: "$49",
            yearlyPrice: "$39",
            description: "For individual project leads organizing team context",
            features: STARTER_FEATURES,
            cta: "Start Free Trial",
            ctaLink: "/contact",
            gainsightNote: "7-day full Teams trial included",
        },
        {
            name: "Teams",
            monthlyPrice: "$199",
            yearlyPrice: "$159",
            description: "For scaling departments implementing visual workflows",
            features: TEAMS_FEATURES,
            cta: "Get Started",
            ctaLink: "/contact",
            highlight: true,
            highlightText: "Most Popular",
            gainsightNote: "Standard team workspace with granular roles",
        },
        {
            name: "Enterprise",
            monthlyPrice: "Custom",
            yearlyPrice: "Custom",
            description: "For large organizations requiring strict compliance",
            features: ENTERPRISE_FEATURES,
            cta: "Contact Sales",
            ctaLink: "/contact",
            gainsightNote: "Custom deployment and enterprise SLAs",
        },
    ],

    EUR: [
        {
            name: "Starter",
            monthlyPrice: "€45",
            yearlyPrice: "€35",
            description: "For individual project leads organizing team context",
            features: STARTER_FEATURES,
            cta: "Start Free Trial",
            ctaLink: "/contact",
            gainsightNote: "7-day full Teams trial included",
        },
        {
            name: "Teams",
            monthlyPrice: "€189",
            yearlyPrice: "€149",
            description: "For scaling departments implementing visual workflows",
            features: TEAMS_FEATURES,
            cta: "Get Started",
            ctaLink: "/contact",
            highlight: true,
            highlightText: "Most Popular",
            gainsightNote: "Standard team workspace with granular roles",
        },
        {
            name: "Enterprise",
            monthlyPrice: "Custom",
            yearlyPrice: "Custom",
            description: "For large organizations requiring strict compliance",
            features: ENTERPRISE_FEATURES,
            cta: "Contact Sales",
            ctaLink: "/contact",
            gainsightNote: "Custom deployment and enterprise SLAs",
        },
    ],

    GBP: [
        {
            name: "Starter",
            monthlyPrice: "£39",
            yearlyPrice: "£29",
            description: "For individual project leads organizing team context",
            features: STARTER_FEATURES,
            cta: "Start Free Trial",
            ctaLink: "/contact",
            gainsightNote: "7-day full Teams trial included",
        },
        {
            name: "Teams",
            monthlyPrice: "£159",
            yearlyPrice: "£129",
            description: "For scaling departments implementing visual workflows",
            features: TEAMS_FEATURES,
            cta: "Get Started",
            ctaLink: "/contact",
            highlight: true,
            highlightText: "Most Popular",
            gainsightNote: "Standard team workspace with granular roles",
        },
        {
            name: "Enterprise",
            monthlyPrice: "Custom",
            yearlyPrice: "Custom",
            description: "For large organizations requiring strict compliance",
            features: ENTERPRISE_FEATURES,
            cta: "Contact Sales",
            ctaLink: "/contact",
            gainsightNote: "Custom deployment and enterprise SLAs",
        },
    ],
};

// ─── Add-ons ──────────────────────────────────────────────────────────────────

export const ADD_ONS: Record<Currency, string> = {
    INR: "₹3,999 / month",
    USD: "$49 / month",
    EUR: "€45 / month",
    GBP: "£39 / month",
};

// ─── Currency symbols (for display) ──────────────────────────────────────────

export const CURRENCY_LABELS: Record<Currency, string> = {
    INR: "₹ INR",
    USD: "$ USD",
    EUR: "€ EUR",
    GBP: "£ GBP",
};

// ─── Feature Comparison Table Data ────────────────────────────────────────────
// Used by PricingPage to render the full comparison table below cards

export interface ComparisonRow {
    feature: string;
    starter: string;
    teams: string;
    enterprise: string;
}

export interface ComparisonSection {
    category: string;
    rows: ComparisonRow[];
}

export const FEATURE_COMPARISON: ComparisonSection[] = [
    {
        category: "Workspaces & Seats",
        rows: [
            { feature: "Workspaces", starter: "1", teams: "1 (Shared)", enterprise: "Unlimited" },
            { feature: "Seats / Users", starter: "3", teams: "Up to 25", enterprise: "Unlimited" },
            { feature: "Knowledge Clusters", starter: "3 per Workspace", teams: "Unlimited", enterprise: "Unlimited" },
            { feature: "Contextual Automations", starter: "5 per Workspace", teams: "Unlimited", enterprise: "Unlimited" },
        ],
    },
    {
        category: "Team Intelligence",
        rows: [
            { feature: "Scoped Memory Clusters", starter: "✓", teams: "✓", enterprise: "✓" },
            { feature: "Custom Agent Personas", starter: "Basic (3)", teams: "Unlimited", enterprise: "Custom Models" },
            { feature: "Visual Workflow Builder", starter: "✓", teams: "✓", enterprise: "✓" },
            { feature: "Skill Registry", starter: "-", teams: "✓", enterprise: "✓" },
        ],
    },
    {
        category: "Integrations & Connectors",
        rows: [
            { feature: "Slack & Email", starter: "✓", teams: "✓", enterprise: "✓" },
            { feature: "Google Workspace & Office 365", starter: "✓", teams: "✓", enterprise: "✓" },
            { feature: "CRM Connectors (HubSpot, Salesforce)", starter: "-", teams: "✓", enterprise: "✓" },
            { feature: "Database & Custom APIs", starter: "-", teams: "-", enterprise: "✓" },
        ],
    },
    {
        category: "Security & Governance",
        rows: [
            { feature: "Data Isolation", starter: "Workspace-level", teams: "Workspace-level", enterprise: "Org-level / Custom" },
            { feature: "Role-Based Access (RBAC)", starter: "-", teams: "✓", enterprise: "✓" },
            { feature: "SSO / SAML & MFA", starter: "-", teams: "-", enterprise: "✓" },
            { feature: "Audit Logs", starter: "-", teams: "30-day logs", enterprise: "90-day logs (SOC2 compliant)" },
        ],
    },
    {
        category: "Support & Engineering",
        rows: [
            { feature: "Support SLA", starter: "Best Effort", teams: "24-hour response", enterprise: "Dedicated TAM / Custom" },
            { feature: "Custom Skill Engineering", starter: "-", teams: "-", enterprise: "✓" },
        ],
    },
];
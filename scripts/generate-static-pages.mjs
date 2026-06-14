/**
 * generate-static-pages.mjs
 *
 * Runs as `postbuild` (after `vite build`).
 *
 * Problem it solves:
 *   Vite produces a single dist/index.html that carries homepage metadata
 *   (title, canonical, OG tags). Every core SPA route that nginx falls back
 *   to via `try_files $uri $uri/ /index.html` therefore serves homepage head
 *   to Google and social crawlers - regardless of the actual route.
 *
 * What it does:
 *   1. Reads dist/index.html to extract the built <body> and hashed asset tags
 *      (the CSS <link> and module <script> filenames change on every build).
 *   2. For each core page, writes dist/{route}/index.html with the correct
 *      page-specific <head> metadata + the same SPA body.
 *   3. nginx's `try_files $uri $uri/index.html /index.html` rule will serve
 *      these files directly without trailing slash redirect loops.
 *
 * Result:
 *   - Google and social unfurlers see the correct title, description,
 *     canonical URL, and Open Graph tags for every core route.
 *   - The SPA bundle still loads and hydrates normally (React takes over
 *     #app as usual, useSEO continues to work for client-side navigation).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const publicDir = path.join(root, "public");
const siteUrl = "https://nuerova.xyz";
const currentContentLastmod = "2026-06-07";

// ── Core pages to generate ─────────────────────────────────────────────────
const pages = [
    {
        route: "",
        title: "Nuerova — Scoped Knowledge Clusters & Team Intelligence Platforms",
        description:
            "Nuerova centralizes department knowledge in scoped clusters, deploys context-aware agent helpers, and builds secure trigger-action automations so your momentum is never lost.",
    },
    {
        route: "features",
        title: "Features — Scoped Clusters, Custom Agents & Governance | Nuerova",
        description:
            "Explore Nuerova features for team intelligence: scoped knowledge clusters, custom agent personas, visual workflow builders, validation queues, and audit logs.",
    },
    {
        route: "pricing",
        title: "Pricing — Scoped Knowledge Clusters & Team Intelligence | Nuerova",
        description:
            "See Nuerova pricing for team intelligence and contextual agents. Start with a 7-day trial of Teams plan. Starter includes up to 3 user seats, and Teams supports up to 25 user seats.",
    },
    {
        route: "how-it-works",
        title: "How Nuerova Works — Context Ingestion to Governed Action | Nuerova",
        description:
            "See how Nuerova ingests fragmented team data, organizes it into logical knowledge clusters, deploys custom-instructed agent helpers, and triggers visual workflows.",
    },
    {
        route: "faq",
        title: "FAQ — Nuerova Clusters, Agents & Security Questions",
        description:
            "Answers to Nuerova setup, data source integrations, pricing, security, and team intelligence automation questions.",
    },
    {
        route: "about",
        title: "About Nuerova — Built to Eliminate Team Knowledge Silos",
        description:
            "Read the story of Nuerova. Built by operational and engineering practitioners who outgrew fragmented Slack histories and document silos.",
    },
    {
        route: "contact",
        title: "Contact Nuerova — Start Your Team Intelligence Trial | Nuerova",
        description:
            "Talk to Nuerova about centralizing department knowledge in scoped clusters and setting up secure, context-aware agent workflows.",
    },
    {
        route: "security",
        title: "Security & Governance — Enterprise Grade Data Protection | Nuerova",
        description:
            "Explore Nuerova's enterprise-grade security standards. Learn about workspace isolation, role-based access control, SOC2 compliance, and audit trails.",
    },
];

// ── Parse dist/index.html ──────────────────────────────────────────────────

const baseHtmlPath = path.join(distDir, "index.html");
if (!fs.existsSync(baseHtmlPath)) {
    console.error(
        "ERROR: dist/index.html not found. Run `vite build` before this script.",
    );
    process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, "utf8");

// Extract hashed asset tags
const cssLinkMatch = baseHtml.match(
    /<link\s+rel="stylesheet"\s+crossorigin\s+href="[^"]+\.css"[^>]*>/,
);
const moduleScriptMatch = baseHtml.match(
    /<script\s+type="module"\s+crossorigin\s+src="[^"]+\.js"[^>]*><\/script>/,
);

if (!cssLinkMatch || !moduleScriptMatch) {
    console.error(
        "ERROR: Could not find hashed CSS/JS asset tags in dist/index.html.",
    );
    process.exit(1);
}

const cssLinkTag = cssLinkMatch[0];
const moduleScriptTag = moduleScriptMatch[0];

// Extract <body> content
const bodyMatch = baseHtml.match(/<body>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
    console.error("ERROR: Could not parse <body> from dist/index.html.");
    process.exit(1);
}
const bodyContent = bodyMatch[1];

// ── Shared JSON-LD schema (SoftwareApplication) ────────────────────────────
const softwareSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Nuerova",
    url: siteUrl,
    description:
        "The team intelligence platform that centralizes department knowledge, deploys context-aware agents, and builds secure visual automations.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    audience: {
        "@type": "Audience",
        audienceType: "Scaling operations, customer success, and engineering departments",
    },
    featureList: [
        "Scoped knowledge clusters",
        "Context-aware agent personas",
        "Visual workflow builder",
        "Human approval validation queue",
        "Tamper-resistant audit logs",
    ],
    keywords:
        "team intelligence, knowledge clusters, custom agents, context indexing, workflow automation",
    offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
    },
    publisher: {
        "@type": "Organization",
        name: "Nuerova",
        url: siteUrl,
    },
});

function canonicalPath(route) {
    return route ? `/${route}` : "/";
}

function breadcrumbSchema(page) {
    const items = [{ name: "Home", path: "/" }];
    if (page.route) {
        items.push({
            name: page.title.split(" | ")[0],
            path: canonicalPath(page.route),
        });
    }

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

function organizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Nuerova",
        url: siteUrl,
        logo: `${siteUrl}/favicon.svg`,
        knowsAbout: [
            "Team intelligence platforms",
            "Context-aware agents",
            "Scoped knowledge clusters",
            "Visual workflow design",
            "Data isolation & RBAC governance",
        ],
    };
}

function websiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Nuerova",
        url: siteUrl,
    };
}

function pricingSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Nuerova",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `${siteUrl}/pricing`,
        offers: {
            "@type": "OfferCatalog",
            name: "Nuerova Plans",
            itemListElement: [
                {
                    "@type": "Offer",
                    name: "Teams Trial",
                    price: "0",
                    priceCurrency: "USD",
                    url: `${siteUrl}/contact`,
                },
                {
                    "@type": "Offer",
                    name: "Starter",
                    priceCurrency: "USD",
                    url: `${siteUrl}/pricing`,
                },
                {
                    "@type": "Offer",
                    name: "Teams",
                    priceCurrency: "USD",
                    url: `${siteUrl}/pricing`,
                },
            ],
        },
    };
}

const pageFaqs = {
    pricing: [
        {
            question: "Is Nuerova free to try?",
            answer:
                "Yes. Nuerova offers a 7-day trial of our Teams plan with no credit card required. You can build clusters, setup workspaces, and invite team members to test integration loops.",
        },
        {
            question: "Who is Nuerova built for?",
            answer:
                "Nuerova is built for departments (Engineering, Operations, Customer Success, Product) looking to consolidate scattered team knowledge, build shared context-aware memory, and run secure AI agents to execute playbooks.",
        },
        {
            question: "How do user seat limits work on Nuerova?",
            answer:
                "Our Starter plan includes up to 3 user seats, and our Teams plan scales to support up to 25 user seats. If you need more seats or dedicated enterprise support, our Enterprise plan offers unlimited user seats.",
        },
    ],
    features: [
        {
            question: "What are Nuerova's core components?",
            answer:
                "Nuerova is built on four core components: scoped knowledge clusters, custom-instructed agent personas, a visual drag-and-drop workflow builder, and a human approval queue with complete audit trail maps.",
        },
        {
            question: "Does Nuerova train public models on my data?",
            answer:
                "No. We enforce strict data security. Nuerova utilizes commercial API channels with zero-data-retention options. Your knowledge clusters and inputs are never used to train public LLM models.",
        },
        {
            question: "How is Nuerova different from generic chat assistants?",
            answer:
                "Generic chatbots have no long-term memory, require manual copy-pasting, and cannot execute tasks. Nuerova creates secure, connected memory partitions (clusters) and links them to visual playbooks that draft and execute actual tasks.",
        },
    ],
    "how-it-works": [
        {
            question: "Does Nuerova execute actions without approval?",
            answer:
                "No. Nuerova can draft updates, stage tickets, and generate emails, but the visual playbook is built around strict human approval. You approve, edit, or reject before anything executes.",
        },
        {
            question: "What files and sources can Nuerova index?",
            answer:
                "Nuerova indexes text-based data from file drives (Google Workspace, Office 365), chat rooms (Slack, Teams), development boards (Jira, GitHub), wikis (Notion, Confluence), and CSV/JSON file uploads.",
        },
        {
            question: "How fast can we launch our first custom agent?",
            answer:
                "You can connect a source and configure a custom-instructed agent persona in under 15 minutes inside the console.",
        },
    ],
    faq: [
        {
            question: "How quickly can Nuerova go live?",
            answer:
                "Onboarding is rapid. You can link your tools, configure initial clusters, and run a test workflow in under an hour.",
        },
        {
            question: "Does Nuerova support custom databases?",
            answer:
                "Yes. Nuerova's Enterprise plan supports querying direct databases (Postgres, MySQL, Mongo) and connecting custom REST APIs as tools for custom agents.",
        },
        {
            question: "Are our files isolated from other tenants?",
            answer:
                "Yes. Nuerova is built with strict logical data isolation at the workspace level, preventing any spillover or information sharing across different customers.",
        },
    ],
};

function faqSchema(items) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };
}

function buildSchemaScripts(page) {
    const schemas = [JSON.parse(softwareSchema), breadcrumbSchema(page)];

    if (page.route === "") {
        schemas.push(organizationSchema(), websiteSchema());
    }
    if (page.route === "pricing") {
        schemas.push(pricingSchema());
    }
    if (pageFaqs[page.route]) {
        schemas.push(faqSchema(pageFaqs[page.route]));
    }

    return schemas
        .map(
            (schema) => `<script type="application/ld+json">
  ${JSON.stringify(schema)}
  </script>`,
        )
        .join("\n  ");
}

// ── HTML builder ───────────────────────────────────────────────────────────

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

function buildPageHtml({ route, title, description }) {
    const canonicalUrl = `${siteUrl}/${route}`;
    const escapedTitle = escapeHtml(title);
    const escapedDescription = escapeHtml(description);
    const schemaScripts = buildSchemaScripts({ route, title, description });

    return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- ===================== PRIMARY SEO ===================== -->
  <title>${escapedTitle}</title>
  <meta name="description" content="${escapedDescription}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonicalUrl}" />

  <!-- ===================== OPEN GRAPH ===================== -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Nuerova" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:title" content="${escapedTitle}" />
  <meta property="og:description" content="${escapedDescription}" />
  <meta property="og:image" content="${siteUrl}/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Nuerova - Scoped Knowledge Clusters & Team Intelligence Dashboard" />
  <meta property="og:locale" content="en_US" />

  <!-- ===================== TWITTER CARD ===================== -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapedTitle}" />
  <meta name="twitter:description" content="${escapedDescription}" />
  <meta name="twitter:image" content="${siteUrl}/og-image.png" />
  <meta name="twitter:image:alt" content="Nuerova Dashboard Preview" />

  <!-- ===================== ICONS & PWA ===================== -->
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#1275e2" />

  <!-- ===================== STRUCTURED DATA (JSON-LD) ===================== -->
  ${schemaScripts}

  <!-- ===================== PERFORMANCE HINTS ===================== -->
  <link rel="preconnect" href="https://checkout.razorpay.com" />
  <link rel="preconnect" href="https://in.fw-cdn.com" />
  <link rel="dns-prefetch" href="https://in.fw-cdn.com" />

  <!-- ===================== VITE BUILD ASSETS ===================== -->
  ${moduleScriptTag}
  ${cssLinkTag}
</head>

<body>${bodyContent}</body>

</html>
`;
}

function pageSitemapMetadata(page) {
    const defaults = {
        lastmod: currentContentLastmod,
        changefreq:
            page.route === "" || page.route === "pricing" || page.route === "contact"
                ? "weekly"
                : "monthly",
        priority:
            page.route === ""
                ? "1.0"
                : page.route === "pricing" || page.route === "contact"
                    ? "0.9"
                    : page.route === "features" || page.route === "security"
                        ? "0.85"
                        : "0.75",
    };

    return { ...defaults, ...page };
}

function buildPagesSitemap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(pageSitemapMetadata)
    .map(
        (page) => `  <url>
    <loc>${siteUrl}${canonicalPath(page.route)}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("\n")}
</urlset>
`;
}

function readNewestLastmodFromSitemap(filePath, fallback) {
    if (!fs.existsSync(filePath)) return fallback;
    const matches = [
        ...fs.readFileSync(filePath, "utf8").matchAll(/<lastmod>(.*?)<\/lastmod>/g),
    ];
    return matches.map((match) => match[1]).sort().at(-1) || fallback;
}

function buildSitemapIndex() {
    const pagesLastmod = pages
        .map(pageSitemapMetadata)
        .map((page) => page.lastmod)
        .sort()
        .at(-1);
    const blogLastmod = readNewestLastmodFromSitemap(
        path.join(publicDir, "sitemap-blog.xml"),
        currentContentLastmod,
    );

    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap-pages.xml</loc>
    <lastmod>${pagesLastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap-blog.xml</loc>
    <lastmod>${blogLastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;
}

// ── Write output files ─────────────────────────────────────────────────────

let count = 0;
for (const page of pages) {
    const outDir = path.join(distDir, page.route);
    const outputPath = page.route ? `dist/${page.route}/index.html` : "dist/index.html";
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), buildPageHtml(page));
    count++;
    console.log(`  ✓ ${outputPath}`);
}

const pagesSitemap = buildPagesSitemap();
const sitemapIndex = buildSitemapIndex();
fs.writeFileSync(path.join(publicDir, "sitemap-pages.xml"), pagesSitemap);
fs.writeFileSync(path.join(distDir, "sitemap-pages.xml"), pagesSitemap);
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapIndex);
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapIndex);

console.log(`\nGenerated ${count} static page shells in dist/`);
console.log(
    "Each file carries correct per-page title, description, canonical, OG tags, and JSON-LD schema.",
);
console.log("Generated sitemap.xml and sitemap-pages.xml from page/blog metadata.");

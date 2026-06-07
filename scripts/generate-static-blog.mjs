import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const siteUrl = "https://nuerova.com";
const outputDir = path.join(root, "public", "blog");
const publicDir = path.join(root, "public");
const distDir = path.join(root, "dist");

const posts = [];

function renderBlogIndex() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog — Team Intelligence & Contextual Agents | Nuerova</title>
  <meta name="description" content="Read our latest articles on department knowledge clusters, visual reasoning workflows, and enterprise AI security." />
  <link rel="canonical" href="${siteUrl}/blog" />
  <meta name="theme-color" content="#1275e2" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; padding: 4rem 2rem; max-width: 40rem; margin: 0 auto; color: #111827; }
    h1 { font-size: 2.5rem; margin-bottom: 1rem; }
    p { color: #4b5563; line-height: 1.6; }
    a { color: #1275e2; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <h1>Nuerova Blog</h1>
  <p>Our team intelligence and agent playbooks blog is currently being updated. Check back soon for new articles!</p>
  <p><a href="/">← Return to Home</a></p>
</body>
</html>`;
}

function buildBlogSitemap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/blog</loc>
    <lastmod>2026-06-07</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "index.html"), renderBlogIndex());

console.log("Generated static blog index");
fs.writeFileSync(path.join(publicDir, "sitemap-blog.xml"), buildBlogSitemap());
console.log("Generated public/sitemap-blog.xml");

// ── Generate llms.txt & llms-full.txt ─────────────────────────────────────
const staticLlmsIntro = `# Nuerova
> Scoped Knowledge Clusters & Team Intelligence Platforms.

Nuerova is a team intelligence platform that centralizes department knowledge in scoped clusters, deploys context-aware agent helpers, and builds secure trigger-action automations so your momentum is never lost.

## Product

- Homepage: https://nuerova.com/
- Features: https://nuerova.com/features
- Security: https://nuerova.com/security
- Pricing: https://nuerova.com/pricing
- How It Works: https://nuerova.com/how-it-works
- FAQ: https://nuerova.com/faq
- Contact / Free Trial: https://nuerova.com/contact

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
- Nuerova charges no seat fees (all plans support unlimited users).
- Granular role-based access control (RBAC) secures cluster permissions.
`;

const llmsTxtContent = `${staticLlmsIntro}\n${quoteReadyFacts}`;
fs.writeFileSync(path.join(publicDir, "llms.txt"), llmsTxtContent);
fs.writeFileSync(path.join(publicDir, "llms-full.txt"), llmsTxtContent);

// Also write to dist if they exist in pre-rendered directories
fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, "llms.txt"), llmsTxtContent);
fs.writeFileSync(path.join(distDir, "llms-full.txt"), llmsTxtContent);

console.log("Generated public/llms.txt and public/llms-full.txt");

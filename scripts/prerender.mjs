/**
 * Prerender core SPA routes to static HTML using Playwright.
 *
 * Run order (via package.json scripts):
 *   prebuild  → generate-static-blog.mjs  (blog HTML + sitemap-blog.xml)
 *   vite build → bundles JS/CSS into dist/
 *   postbuild → generate-static-pages.mjs (page shells with correct <head>)
 *             → prerender.mjs             (THIS) — replaces empty <body> with
 *                                           fully rendered React content
 *
 * Blog pages (dist/blog/**) are skipped — they're already prerendered by
 * generate-static-blog.mjs with real HTML content.
 */

import { chromium } from "playwright";
import { createServer } from "http";
import { createReadStream } from "fs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(root, "dist");
const PORT = 4174; // use a port different from dev (3000) and vite preview (4173)

// Core routes to prerender — these get empty <body> from generate-static-pages
const ROUTES = [
    { route: "/",             outFile: "index.html" },
    { route: "/features",     outFile: "features/index.html" },
    { route: "/pricing",      outFile: "pricing/index.html" },
    { route: "/how-it-works", outFile: "how-it-works/index.html" },
    { route: "/faq",          outFile: "faq/index.html" },
    { route: "/about",        outFile: "about/index.html" },
    { route: "/contact",      outFile: "contact/index.html" },
    { route: "/security",     outFile: "security/index.html" },
    { route: "/terms",        outFile: "terms/index.html" },
];

// ── Minimal static file server (avoids npx overhead) ────────────────────────
function serveFile(reqPath, res) {
    // strip query string
    const cleanPath = reqPath.split("?")[0];

    // resolve to dist file — SPA fallback: try exact, then /index.html, then root
    const candidates = [
        path.join(distDir, cleanPath),
        path.join(distDir, cleanPath, "index.html"),
        path.join(distDir, "index.html"),
    ];

    for (const filePath of candidates) {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath);
            const mime = {
                ".html": "text/html; charset=utf-8",
                ".js":   "application/javascript",
                ".css":  "text/css",
                ".svg":  "image/svg+xml",
                ".png":  "image/png",
                ".ico":  "image/x-icon",
                ".json": "application/json",
                ".xml":  "application/xml",
                ".woff": "font/woff",
                ".woff2":"font/woff2",
            }[ext] ?? "application/octet-stream";

            res.writeHead(200, { "Content-Type": mime });
            createReadStream(filePath).pipe(res);
            return;
        }
    }

    res.writeHead(404);
    res.end("Not found");
}

const server = createServer((req, res) => serveFile(req.url, res));

await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));
console.log(`\nPrerender server started on http://127.0.0.1:${PORT}`);

const browser = await chromium.launch();
const context = await browser.newContext({
    // suppress console noise from third-party scripts
    javaScriptEnabled: true,
});

// Block analytics/third-party requests that slow down networkidle
await context.route(
    /\/(google-analytics|googletagmanager|freshworks|fw-cdn|razorpay|clarity)/,
    (route) => route.abort(),
);

let successCount = 0;

for (const { route, outFile } of ROUTES) {
    const url = `http://127.0.0.1:${PORT}${route}`;
    const outPath = path.join(distDir, outFile);

    const page = await context.newPage();
    try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });

        // Wait for the React app root to contain real content (not just empty #app)
        await page.waitForFunction(
            () => {
                const app = document.getElementById("app");
                return app && app.children.length > 0;
            },
            { timeout: 15_000 },
        );

        const html = await page.content();
        fs.writeFileSync(outPath, html, "utf8");
        console.log(`  ✓ dist/${outFile}`);
        successCount++;
    } catch (err) {
        console.warn(`  ⚠ ${route} — ${err.message.split("\n")[0]}`);
        // leave the existing shell in place rather than writing broken HTML
    } finally {
        await page.close();
    }
}

await browser.close();
server.close();

console.log(`\nPrerendered ${successCount}/${ROUTES.length} pages.`);
if (successCount < ROUTES.length) {
    console.warn("Some pages fell back to their static shells (check warnings above).");
}

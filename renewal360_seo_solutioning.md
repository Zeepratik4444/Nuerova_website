# Renewal360 Website — SEO Solutioning Document

**Project:** renewal360_website  
**Domain:** https://renewal360.in  
**Application:** Renewal Copilot — AI-Powered SaaS Renewal Automation  
**Repository:** https://github.com/Zeepratik4444/renewal360_website  
**Branch:** v002  
**Date:** 28 April 2026  
**Author:** Pratik Kumar  

---

## 1. Executive Summary

The Renewal360 landing page (`renewal360.in`) was live but not discoverable via search engines. The site lacked all standard SEO infrastructure — no sitemap, no Open Graph tags, no canonical URL, no structured data, and no Google Search Console registration. This document captures the problem diagnosis, the current state of available resources, all changes implemented, and the remaining open items required to complete the SEO rollout.

As of 28 April 2026, the site has been verified in Google Search Console, the sitemap has been submitted, and indexing has been requested for key pages. The expected time to first Google ranking for the brand keyword `renewal360` is 2–4 days.

---

## 2. Problem Statement

### 2.1 Business Need

Renewal360 is a B2B SaaS product targeting Customer Success teams and Revenue Operations leaders. The primary acquisition channel is inbound organic search — potential customers searching for terms like *"SaaS renewal automation"*, *"AI customer success platform"*, or *"churn prevention software"*. Without SEO infrastructure, the landing page was invisible to this audience despite being live and publicly accessible.

### 2.2 Specific Issues Identified

The following deficiencies were identified in the initial audit of the `main` branch:

| Issue | Severity | Impact |
|-------|----------|--------|
| No `sitemap.xml` | Critical | Google cannot discover all routes |
| React SPA with no prerendering | Critical | Googlebot sees empty `<div id="app">` on first crawl |
| No Open Graph / Twitter Card meta tags | High | Blank previews when shared on LinkedIn, WhatsApp, Twitter |
| No canonical URL tag | High | Duplicate content penalty risk (`renewal360.in` vs `www.renewal360.in`) |
| No Google Search Console registration | High | Google unaware of site existence; no indexing pipeline |
| Emoji favicon (`📈`) as inline SVG data URI | Medium | Renders incorrectly on some browsers and devices |
| No per-page SEO titles/descriptions | Medium | All pages share the same generic `<title>` tag |
| No JSON-LD structured data | Medium | No rich results eligibility in Google Search |
| Social media links pointing to `href="#"` | Low | Dead links; reduces trust signals |
| No `og-image.png` asset | High | OG image tag references a file that does not exist in `public/` |

---

## 3. Current Available Resources

### 3.1 Repository Structure

The codebase is a **Vite + React + TypeScript** single-page application using TanStack Router for client-side routing. The key files relevant to SEO are:

```
renewal360_website/
├── public/
│   ├── favicon.ico          ✅ Exists (17,988 bytes)
│   ├── manifest.json        ✅ Exists (PWA manifest)
│   ├── robots.txt           ✅ Exists (updated in v002)
│   ├── sitemap.xml          ✅ Added in v002
│   └── creao_icon.svg       ✅ Exists
├── src/
│   ├── hooks/
│   │   └── useSEO.ts        ✅ Created in v002 (per-page meta injection)
│   ├── components/pages/
│   │   ├── HomePage.tsx     ✅ Uses useSEO()
│   │   ├── FeaturesPage.tsx ✅ Uses useSEO()
│   │   ├── PricingPage.tsx  ✅ Uses useSEO()
│   │   ├── HowItWorksPage.tsx ✅ Uses useSEO()
│   │   ├── FAQPage.tsx      ✅ Uses useSEO()
│   │   ├── AboutPage.tsx    ✅ Uses useSEO()
│   │   └── ContactPage.tsx  ✅ Uses useSEO()
└── index.html               ✅ Updated in v002 (OG, canonical, JSON-LD)
```

### 3.2 Infrastructure

| Resource | Provider | Status |
|----------|----------|--------|
| Domain registrar | (India registrar) | Active |
| DNS management | AWS Route 53 | Active — Hosted Zone for `renewal360.in` |
| Hosting / Web server | AWS EC2 + Nginx | Live at `renewal360.in` |
| SSL certificate | Active (HTTPS confirmed) | ✅ |
| CDN / DDoS protection | Likely Cloudflare or ALB | Active |
| Email / transactional | Amazon SES | Active (SPF TXT record in Route 53) |
| Google Search Console | Google | ✅ Verified 28 Apr 2026 |

### 3.3 Existing SEO Assets (Pre-v002)

Before the v002 changes, the following SEO-relevant elements already existed:

- `<title>` tag: `"Renewal360 - AI-Powered SaaS Renewal Automation"` — keyword-rich and within length limits
- `<meta name="description">` — well-written, under 155 characters
- `lang="en"` on the `<html>` element
- `robots.txt` with `Disallow:` blank (all crawlers allowed)
- `manifest.json` for PWA support
- LinkedIn company page with posts referencing `renewal360`

---

## 4. Changes Implemented (v002 Branch)

### 4.1 `index.html` — Meta & Structured Data

The following tags were added to `<head>` in `index.html`:

**Canonical URL**
```html
<link rel="canonical" href="https://renewal360.in/" />
```
Prevents duplicate content penalties when the site is accessible via multiple URL variations.

**Open Graph Tags**
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://renewal360.in/" />
<meta property="og:title" content="Renewal360 - AI-Powered SaaS Renewal Automation" />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://renewal360.in/og-image.png" />
<meta property="og:locale" content="en_IN" />
```
Enables rich link previews when the URL is shared on LinkedIn, WhatsApp, Slack, Twitter, and other platforms.

**Twitter Card Tags**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Renewal360 - AI-Powered SaaS Renewal Automation" />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://renewal360.in/og-image.png" />
```

**JSON-LD Structured Data**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Renewal360",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Renewal360"
  }
}
```
Qualifies the site for Google rich results (software application schema).

**Favicon Fix**
Replaced inline emoji SVG data URI with:
```html
<link rel="icon" href="/favicon.ico" sizes="any" />
```

**Performance Hints**
Added `preconnect` for Razorpay and Freshworks CDN. Razorpay script moved to end of `<body>` with `defer`.

### 4.2 `public/robots.txt` — Updated

```
User-agent: *
Disallow: /payment-success
Disallow: /set-password
Disallow: /dist/

Sitemap: https://renewal360.in/sitemap.xml
```

Key changes: blocked sensitive routes, added sitemap reference.

### 4.3 `public/sitemap.xml` — Created

New file added with all 7 public routes:

| URL | Priority | Change Frequency |
|-----|----------|-----------------|
| `https://renewal360.in/` | 1.0 | Weekly |
| `https://renewal360.in/features` | 0.9 | Monthly |
| `https://renewal360.in/pricing` | 0.9 | Weekly |
| `https://renewal360.in/how-it-works` | 0.8 | Monthly |
| `https://renewal360.in/faq` | 0.7 | Monthly |
| `https://renewal360.in/about` | 0.6 | Monthly |
| `https://renewal360.in/contact` | 0.6 | Monthly |

Confirmed live and accessible: `curl https://renewal360.in/sitemap.xml` returns `HTTP 200` with `Content-Type: text/xml`.

### 4.4 `src/hooks/useSEO.ts` — Created

A React hook that dynamically sets `document.title` and `<meta name="description">` per page. Used in all 7 page components to ensure each route has a unique, crawlable title and description.

### 4.5 All Page Components — Updated

All 7 page components now call `useSEO()` with page-specific title and description. This ensures Google sees unique meta content on each route after JavaScript renders.

### 4.6 `index.html` — Content Improvements

- Hero headline rewritten: *"Stop losing renewals to silence. Let AI handle the outreach."*
- Hero CTA updated: *"Start Free Pilot — 25 accounts, no credit card"*
- Integrations section added: Salesforce, HubSpot, Slack, Microsoft Teams, Gmail, Outlook, Google Sheets, Google Calendar
- ROI Calculator, Pricing, PersonaCards sections added
- Footer copyright updated to `© 2026`

---

## 5. Google Search Console Setup

### 5.1 Verification Method

Domain property verified via **DNS TXT record** in AWS Route 53.

- Existing TXT record for `renewal360.in` was edited (not replaced) to append the Google verification string alongside the existing SPF record.
- Verified successfully at **28 Apr 2026, ~13:10 IST**.

### 5.2 Sitemap Submission

- Sitemap submitted at: `https://renewal360.in/sitemap.xml`
- Status: **Accepted** by Google Search Console
- Expected: 7 URLs to appear in coverage within 24–72 hours

### 5.3 Indexing Requests

URL Inspection tool used to request priority indexing for:
- `https://renewal360.in/`
- `https://renewal360.in/pricing`
- `https://renewal360.in/features`
- `https://renewal360.in/how-it-works`

Live test result for homepage: **"URL is available to Google"** ✅ — crawled at 13:24:52 IST on 28 Apr 2026.

---

## 6. Remaining Open Items

The following items are **not yet completed** and must be addressed to fully close the SEO rollout:

### 6.1 Critical — `og-image.png` Missing

**Problem:** `index.html` references `https://renewal360.in/og-image.png` in both OG and Twitter Card tags, but this file does not exist in `public/`. Every shared link will render with a broken image preview.

**Required action:**
- Create a 1200×630px branded PNG image (`og-image.png`)
- Place in `public/` directory
- Rebuild and redeploy

**Suggested content:** Renewal360 logo + tagline *"Stop losing renewals to silence"* + domain `renewal360.in` on a clean blue/dark background.

### 6.2 High — SPA Prerendering Not Implemented

**Problem:** The site is a React SPA. Googlebot receives an empty `<div id="app">` on the initial HTML response before JavaScript executes. Google does render JavaScript eventually, but this introduces a crawl delay of days to weeks and is less reliable than server-rendered HTML.

**Recommended solution:** Add `vite-plugin-ssg` to the build pipeline.

```bash
npm install vite-plugin-ssg
```

This pre-renders all routes to static HTML at build time with zero refactoring of existing React components.

**Alternative (no-code-change):** Deploy a prerender proxy (Prerender.io or Rendertron) that intercepts Googlebot requests and serves pre-rendered HTML.

### 6.3 Medium — Social Media Links Dead

**Problem:** Footer LinkedIn and Twitter/X links point to `href="#"` — placeholder values never replaced.

**Required action:** Replace with actual social profile URLs or remove the links entirely before public sharing.

### 6.4 Low — Testimonials Lack Credibility Markers

**Problem:** Testimonials show names (`Priya Patel`, `Sarah Jenkins`, `Raj Sharma`) with initials-only avatars and no company names or logos. These read as fabricated placeholders.

**Required action:** Add company names (even generic: *"SaaS company, Bangalore"*) or add a disclaimer: *"Based on early access feedback"* until verified testimonials are available.

---

## 7. Expected SEO Timeline

| Milestone | Expected Date |
|-----------|---------------|
| Google crawls homepage | 29–30 Apr 2026 |
| Brand keyword `renewal360` ranks on page 1 | 1–4 May 2026 |
| All 7 pages indexed | 3–7 May 2026 |
| GSC Performance tab shows first queries | 5–10 May 2026 |
| Ranking for `SaaS renewal automation` | June–July 2026 |
| Ranking for `AI customer success platform` | July–August 2026 |

---

## 8. SEO Completion Checklist

| Item | Status |
|------|--------|
| `sitemap.xml` live and valid | ✅ Complete |
| `robots.txt` with sitemap reference | ✅ Complete |
| Canonical URL tag | ✅ Complete |
| Open Graph meta tags | ✅ Complete |
| Twitter Card meta tags | ✅ Complete |
| JSON-LD structured data (SoftwareApplication) | ✅ Complete |
| Real favicon (`.ico`) | ✅ Complete |
| Per-page SEO via `useSEO()` hook | ✅ Complete |
| Google Search Console — domain verified | ✅ Complete |
| Sitemap submitted to GSC | ✅ Complete |
| Indexing requested for top 4 pages | ✅ Complete |
| `og-image.png` (1200×630px) in `public/` | ❌ Pending |
| SPA prerendering (vite-plugin-ssg) | ❌ Pending |
| Social media links (LinkedIn, Twitter) | ❌ Pending |
| Testimonials — company context added | ❌ Pending |
| v002 branch merged to `main` | ✅ Deployed |

---

## 9. References

- Repository: https://github.com/Zeepratik4444/renewal360_website (branch: `v002`)
- Live site: https://renewal360.in
- Google Search Console property: `sc-domain:renewal360.in`
- Sitemap: https://renewal360.in/sitemap.xml
- robots.txt: https://renewal360.in/robots.txt

---

## 10. Nginx Redirect Loop Solution (Trailing Slash Issue)

If the server has a trailing slash removal rewrite rule (e.g., redirecting `/features/` to `/features` for clean SEO URLs), Nginx's default directory redirect behavior (which redirects `/features` to `/features/` since it exists as a folder in `dist/`) will cause an infinite redirect loop.

### How to Fix

Update your Nginx configuration block (usually inside `/etc/nginx/sites-available/` configuration for the site) from:
```nginx
try_files $uri $uri/ /index.html;
```
To:
```nginx
try_files $uri $uri/index.html /index.html;
```

### Why this works:
This tells Nginx to check if a file exists (`$uri`), then check if `index.html` exists inside that route folder (`$uri/index.html`), and finally fall back to the main SPA index (`/index.html`). 
By checking `$uri/index.html` directly rather than `$uri/`, Nginx serves the pre-rendered static page shell for `/features` immediately without issuing a `301/302` directory redirect to the browser to append a trailing slash, completely breaking the loop.

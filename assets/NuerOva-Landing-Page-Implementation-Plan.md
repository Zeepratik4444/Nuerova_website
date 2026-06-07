# NuerOva — Landing Page Implementation Plan

> **Reference parity target:** Renewal360 website  
> **Product:** NuerOva — Team Intelligence & Automation Platform  
> **Design System:** Proton Modern (Primary #1275e2 · Inter · 8px grid)  
> **Audience:** Enterprise buyers, RevOps, Heads of Operations, CTO/VP-Engineering at 50–500 person companies

---

## Strategic Framing Before You Write a Line of Code

### The Moat — What to Communicate in Every Section

NuerOva has four defensible edges that generic AI assistants and Zapier-style workflow tools don't. Every page section must reinforce at least one of these:

| Moat | One-liner | vs. Commodity |
|---|---|---|
| **Scoped Team Memory** | Knowledge that survives employee turnover, siloed apps, and one-off chats | ChatGPT / Claude.ai — per-user, no team layer |
| **Agent-Native Automation** | Workflows that *reason* over shared context before acting | Zapier / Make — rigid rules, no comprehension |
| **Enterprise-First Architecture** | RBAC, audit logs, multi-tenancy, scoped isolation built-in — not bolted on | Most AI tools that retrofit enterprise controls later |
| **Skill Registry** | Reusable, team-publishable agent capabilities that compound over time | Prompt libraries — one-off, not governed |

### Positioning Statement (headline fuel)
> *NuerOva gives teams a shared AI brain and an execution layer built on their own institutional knowledge.*

### Tone & Aesthetic Directive
- **Not text-heavy.** Let visual hierarchy do the heavy lifting. Short punchy headlines, sparse body copy.  
- **Premium / Corporate Modern.** Inspired by Linear, Vercel, Notion Enterprise — clean surfaces, confident whitespace, crisp type.  
- **Trust signals everywhere.** Enterprise buyers need to feel security, reliability, and permanence before they engage.  
- **Dark sections sparingly.** Use `#181c22` (Proton `on-surface`) backgrounds for integrations and final CTA only — keeps premium contrast drama without fatigue.

---

## Page Architecture (Matching Renewal360 Coverage)

```
/                     → Home (full funnel, all key sections)
/features             → Deep-dive on each capability with visuals
/how-it-works         → Numbered step walkthrough
/pricing              → Plans + feature comparison table
/security             → Enterprise security + compliance (upgrade from Renewal360's about)
/faq                  → Objection-handling FAQ
/about                → Founding story + mission
/contact              → Demo request / pilot intake form
/blog                 → Blog index
/blog/:slug           → Blog post
/terms                → Terms & Privacy
```

> **Upgrade vs Renewal360:** Replace `/about` with a standalone `/security` page. Enterprise buyers need a dedicated trust page — not a section buried in About. Keep `/about` for mission/founding story. This gives NuerOva 10 routes vs Renewal360's 9.

---

## Page 1: Home (`/`)

> The full conversion funnel. Every section below flows top-to-bottom in this order.

---

### Section 1 — Navigation Bar

**Layout:** Sticky, `bg-white/95 backdrop-blur`, thin `border-b border-outline-variant`  
**Left:** NuerOva wordmark logo (SVG, Primary Blue)  
**Center nav links:** Features · How It Works · Security · Pricing · Blog  
**Right:** `Log In` (ghost) + `Request Demo` (Primary Blue, filled)  
**Mobile:** Hamburger sheet drawer

**Implementation notes:**
- Add `data-scrolled` class via JS to increase shadow on scroll  
- CTA button tracks analytics event `nav_cta_click`  
- Highlight active route with `border-b-2 border-primary`

---

### Section 2 — Hero

**Visual weight:** Heaviest section. This is where the moat is stated, not buried.

**Structure:**
```
[Badge pill]  "Enterprise AI Platform — Built for Teams, Not Individuals"

[H1 — 56px semibold]
  Your team's intelligence
  shouldn't live in
  someone's chat history.

[Subheadline — 20px, max-w-2xl, gray]
  NuerOva gives every team a shared AI brain, a reusable skill library,
  and an automation layer that reasons over your own institutional knowledge.

[CTA row]
  [Primary]  Request Demo
  [Ghost]    See How It Works ↓

[Trust strip — 3 items, small, muted]
  SOC 2-ready · RBAC & Audit Logs · Enterprise SSO (coming)

[Hero visual — below CTAs]
  Dashboard mockup / product screenshot (dark card with soft glow)
  OR abstract node-graph animation showing agents + knowledge clusters
```

**Design notes:**
- Badge pill: `bg-primary/10 text-primary border border-primary/20`, animated pulse dot  
- H1 line-break is intentional — the third line `"someone's chat history"` is the tension hook  
- `text-primary` highlight on "shared AI brain" in the subheadline  
- Hero visual: a stylized 3-column mockup — left panel `Clusters/Memory`, center `Agent Chat`, right `Automations`. No real screenshots needed at launch — CSS mockup cards are sufficient and more controlled  
- Soft radial gradient background: `from-surface-container-low to-white`

---

### Section 3 — Problem / "The Current Reality"

**Renewal360 equivalent:** The pain cards + stats row  
**Purpose:** Make the buyer feel the problem before offering the solution.

**Headline:** `Teams are running on scattered context and manual heroics.`  
**Subheadline (1 line):** `Every tool captures knowledge. None of it compounds.`

**Stats row (3 stat cards):**
| Stat | Label |
|---|---|
| **73%** | of institutional knowledge lives in individual chats and inboxes (IDC) |
| **40hrs/mo** | avg time lost to redundant context-sharing per knowledge worker |
| **6 months** | average time lost when a senior team member leaves |

**Pain cards (3-col grid, left border accent):**
1. **Red accent** — `Brain drain every time someone leaves` — When your best people exit, they take the playbooks with them. NuerOva doesn't let that happen.
2. **Amber accent** — `Agents with no memory are just expensive search bars` — Generic AI tools start from zero every session. NuerOva agents know your team, your context, your history.
3. **Slate accent** — `Automation that can't think can't scale` — Zapier-style rules break on edge cases. NuerOva workflows reason before they act.

**Closing statement (centered, 1 line):**  
> `You don't need more tools. You need one layer that connects what your team already knows.`

---

### Section 4 — "Who This Is For" (Persona Cards)

**Renewal360 equivalent:** PersonaCards  
**Layout:** 3-column horizontal cards, each with a role title, 2-line description, and a "what they get" bullet

| Persona | Title | Description | They get |
|---|---|---|---|
| 🏗️ | **Head of Operations** | You're drowning in coordination, handoffs, and tribal knowledge requests | Automated workflows built on your team's context. Stop being the glue. |
| 🎯 | **Customer Success Leader** | Account context lives in six places and three people's heads | Shared memory per cluster. Every CSM walks into a call fully briefed. |
| 🔐 | **VP Engineering / CTO** | Your team evaluates every new AI tool for compliance and data governance | Enterprise-first. RBAC, audit logs, scoped data isolation from day one. |

---

### Section 5 — How It Works (Preview)

**Renewal360 equivalent:** The 5-step pill row + "See how it works" CTA  
**Layout:** Numbered step pills in a horizontal row, then a "See full breakdown" link to `/how-it-works`

**5 Steps:**
1. `01 · Connect Your Stack` — Integrate your tools: Notion, Slack, Drive, CRM
2. `02 · Build Your Knowledge Clusters` — Scope memory by team, project, or org
3. `03 · Deploy Agents with Context` — Agents work from your shared knowledge, not blank sessions
4. `04 · Build Agent-Native Automations` — Visual workflows that reason, branch, and escalate
5. `05 · Govern with Confidence` — RBAC, approval gates, audit logs, and usage visibility

**CTA:** `See the full walkthrough →` links to `/how-it-works`

---

### Section 6 — Platform Glimpses (Product Visuals)

**Renewal360 equivalent:** PlatformGlimpses component  
**Purpose:** Show the product is real. Most enterprise buyers won't book a demo without seeing *something*.

**Layout:** Tabbed or scrollable carousel — 4 visual tabs:

| Tab | Visual | Caption |
|---|---|---|
| **Knowledge Clusters** | Dashboard view of team memory pools with scoped access indicators | "Every cluster scoped. Nothing bleeds across teams." |
| **Agent Workspace** | Chat interface showing agent reasoning with inline knowledge citations | "Agents that know your context, not just your question." |
| **Automation Builder** | Visual workflow canvas: trigger → reason → act → approve | "Workflows that think before they run." |
| **Admin & Audit** | RBAC settings + audit log timeline | "Full governance visibility. Enterprise teams need this." |

**Implementation note:** Use CSS-designed mockup cards if no real screenshots exist yet. Prioritize quality of visual framing over actual UI accuracy. Apply a subtle `ring-1 ring-outline-variant rounded-xl shadow-lg` treatment with `overflow-hidden`.

---

### Section 7 — Features Preview

**Renewal360 equivalent:** 3-feature card row + "Explore all features" CTA  
**Headline:** `Everything enterprise teams need. Nothing that slows them down.`

**3 feature cards (icons + name + 2-line description):**

1. **🧠 Scoped Memory Clusters** — Team knowledge that's searchable, permission-controlled, and always available to your agents.
2. **⚡ Agent-Native Automations** — Trigger-based or scheduled workflows that reason over your shared context before acting.
3. **🔒 Enterprise Security Foundation** — RBAC, audit logs, org-level scoping, and a roadmap to SOC 2, SSO, and MFA.

**CTA:** `Explore all features →` → `/features`

---

### Section 8 — Integrations (Dark Section)

**Renewal360 equivalent:** Dark gray integrations grid  
**Background:** `bg-[#181c22]` (Proton `on-surface` / near-black)  
**Headline:** `Plugs into the stack your team already runs.`  
**Subheadline:** `Connect your knowledge sources in minutes, not months.`

**Integration grid (8 tiles, 4×2):**
- Slack · Notion · Google Drive · GitHub
- HubSpot · Salesforce · Jira · Confluence

**Below grid:** `+ REST API & Webhooks for anything else`

**Design note:** Use brand-colored logos on dark cards `bg-white/5 border border-white/10 hover:bg-white/10`. Keep the grid tighter than Renewal360 — use `gap-3` not `gap-4` for a denser, more premium enterprise feel.

---

### Section 9 — ROI / Value Calculator (Interactive)

**Renewal360 equivalent:** RoiCalculator  
**Purpose:** Quantify the moat in the buyer's own numbers.

**Inputs:**
- Team size (slider: 5–500)
- Avg hours/week lost to context-sharing
- Avg fully-loaded employee cost ($/hr)

**Output cards:**
- **Hours recovered per month** — `(team_size × hrs_per_week × 4.3) × 0.6`
- **Annual value recovered** — `hours_recovered × hourly_cost`
- **Knowledge continuity score** — Qualitative: "Low / Medium / High" based on team size

**Design:** Blue gradient card `bg-primary/5 border border-primary/20`, live-updating number counters with `transition-all`.

---

### Section 10 — Pricing Preview

**Renewal360 equivalent:** Pricing section (monthly/annual toggle)  
**Note:** For enterprise, pricing is often "Contact Sales" — but showing a Starter tier anchors perceived value.

**3 tiers:**

| Tier | Price | For |
|---|---|---|
| **Starter** | $49/mo per workspace | Solo operators & small teams ≤5 |
| **Teams** | $199/mo per workspace | Teams 5–50, shared clusters, automations |
| **Enterprise** | Custom | 50+ users, SSO, RBAC, dedicated support, SLAs |

**Toggle:** Monthly / Annual (save 20%)  
**Highlighted tier:** Teams (most popular badge)  
**CTA:** `See full feature comparison →` → `/pricing`

---

### Section 11 — Competitive Comparison Table

**Renewal360 equivalent:** Competitive.tsx  
**Headline:** `The team intelligence layer. Not another chatbot wrapper.`

**Comparison table (NuerOva vs ChatGPT Teams vs Microsoft Copilot vs Notion AI):**

| Feature | NuerOva | ChatGPT Teams | MS Copilot | Notion AI |
|---|---|---|---|---|
| Scoped team memory | ✓ Cluster-based | ✗ Per-user | Partial (M365 only) | ✗ Per-workspace |
| Agent-native automation | ✓ Visual builder | ✗ | ✗ | ✗ |
| Reusable skill registry | ✓ Team-publishable | ✗ | ✗ | ✗ |
| RBAC + audit logs | ✓ Built-in | Limited | ✓ (complex setup) | ✗ |
| Setup time | Days | Minutes | 3–6 months | Minutes |
| Enterprise data isolation | ✓ Org-scoped | Per account | ✓ (tenant-level) | ✗ |

**NuerOva column highlighted in `bg-primary/5`**

---

### Section 12 — Testimonials

**Renewal360 equivalent:** 3-card testimonials grid  
**Headline:** `Trusted by teams who outgrew generic AI tools.`

**3 testimonials (placeholder, real-world plausible):**
1. *"We lost two years of knowledge when our ops lead left. NuerOva is the first tool that would have prevented that."* — **Head of Operations, Series B SaaS**
2. *"Our CSMs used to brief themselves from six different tabs. Now they start every call from a shared cluster. The speed difference is real."* — **VP Customer Success, Fintech**
3. *"The audit log and RBAC were the first things our InfoSec team asked about. The fact that NuerOva had both from day one was unusual."* — **VP Engineering, Enterprise Software**

**Avatar style:** Initials in `bg-primary/10 text-primary` circle. No fabricated names.

---

### Section 13 — Blog Preview

**Renewal360 equivalent:** Blog grid on home  
**Background:** `bg-surface-container-low` (Proton light gray)  
**Headline:** `Enterprise AI intelligence for teams who need it to work.`

**3 suggested seed blog posts:**
1. *"Why Scoped Team Memory Is the Moat Generic AI Tools Can't Copy"*
2. *"From Prompt Library to Skill Registry: What Enterprise AI Actually Needs"*
3. *"Agent-Native vs Rule-Based Automation: Why the Difference Matters for Operations Teams"*

**CTA:** `View all posts →` → `/blog`

---

### Section 14 — Final CTA (Dark)

**Background:** `bg-[#181c22]`  
**Headline (large, 48px):**
```
Your team's knowledge 
shouldn't depend on 
one person being in the room.
```
**Subheadline:** `NuerOva gives teams a shared AI brain that persists, scales, and governs itself.`

**CTA row:**
- `[Primary Blue]` Request a Demo →
- `[Ghost/outline]` Talk to a human first

**Trust strip below (4 items, muted):**
`✓ No lock-in · ✓ Data stays yours · ✓ Setup support included · ✓ Enterprise controls built-in`

---

## Page 2: Features (`/features`)

> Deep-dive page. Section-by-section breakdown of each capability with alternating left/right image + copy layouts.

**Hero:**
- H1: `Built for the 20% of capabilities that define 80% of team performance.`
- Subheadline: `Every feature below ships in the product today. Here's exactly what each one does.`

**"Who This Is For" banner** (matching Renewal360's FunnelCTA):
- Operations teams with repeated coordination overhead
- CS and RevOps who need account memory without spreadsheets
- Engineering leaders who need enterprise controls without 6-month rollouts

**Feature Deep-Dives (5 alternating 2-col sections):**

### F1 — Scoped Knowledge Clusters
- **Badge:** Knowledge Infrastructure
- **H2:** Team memory that survives turnover, silos, and one-off chats.
- **Body (2 sentences):** NuerOva clusters scope knowledge by team, project, or org — not by individual. Every agent operating inside a cluster inherits its context automatically.
- **Checklist:**
  - Create clusters by team, department, or client
  - Granular read/write/contribute permissions per member
  - Activity logs showing which knowledge an agent used
  - Admin controls over retention and visibility
- **Right visual:** Cluster dashboard mockup showing shared vs. private data indicators

### F2 — Agent Workspace
- **Badge:** Intelligent Assistance
- **H2:** Agents that know your context, not just your question.
- **Body:** Every NuerOva agent is spawned with the scoped knowledge of its cluster. No copy-paste. No re-explaining the project every session.
- **Checklist:**
  - Context-aware responses backed by team memory
  - Cite sources from cluster knowledge inline
  - Escalate to human when confidence is low
  - Session history preserved per agent, per cluster
- **Left visual:** Agent chat window with inline knowledge citations

### F3 — Visual Automation Builder
- **Badge:** Agent-Native Automation
- **H2:** Workflows that reason before they run.
- **Body:** Unlike rigid no-code tools, NuerOva automations include an agent reasoning step. Triggers fire, the agent consults scoped knowledge, then executes — or escalates.
- **Checklist:**
  - Trigger: schedule, webhook, manual, or event-based
  - Agent reasoning step with scoped data-source selection
  - Conditional paths and human-in-the-loop approval gates
  - Run history, retry logic, and failure alerts
- **Right visual:** Automation canvas mockup

### F4 — Skill Registry
- **Badge:** Reusable Intelligence
- **H2:** Build once. Share across every team that needs it.
- **Body:** Skills are reusable agent instructions — prompts, workflows, and tools packaged for publication within your org. The more your team builds, the smarter the platform gets.
- **Checklist:**
  - Create personal or org-level skills
  - Publish to team or org skill library
  - Version control and change history
  - Usage analytics per skill
- **Left visual:** Skill library grid with publish/draft state indicators

### F5 — Enterprise Security Foundation
- **Badge:** Governance & Trust
- **H2:** Enterprise controls from day one. Not bolted on later.
- **Body:** NuerOva was designed multi-tenant, scoped, and auditable from the first architectural decision. The controls enterprise buyers need aren't a future roadmap item.
- **Checklist:**
  - Role-based access control (Owner / Admin / Member / Viewer)
  - Org-level audit logs for all agent and automation actions
  - Data isolation between organizations and clusters
  - Session security + production-safe secrets
  - Roadmap: SSO (SAML/OIDC), MFA, SOC 2 Type II

---

## Page 3: How It Works (`/how-it-works`)

**Hero:**
- H1: `Here's what happens after you connect your first knowledge source.`
- Subheadline: `NuerOva turns your team's scattered context into a governed intelligence layer in five steps.`

**5 numbered steps (vertical timeline, alternating accent colors):**

| Step | Title | Story | Detail |
|---|---|---|---|
| **01** | Connect Your Knowledge Sources | Link Notion, Confluence, Google Drive, Slack, or any REST source. NuerOva ingests, chunks, and indexes your content — no manual tagging required. Our onboarding team handles configuration. | Setup: 1–2 days. Your sources stay authoritative. |
| **02** | Create Your First Cluster | A cluster is a scoped knowledge pool — think a team, a client account, or a project. Add members, set permissions, and NuerOva begins routing queries through that context. | No cluster is ever visible outside its permission boundary. |
| **03** | Deploy Agents Against Your Clusters | Agents inside a cluster inherit its knowledge automatically. Ask a question, and the agent reasons over your team's actual context — not generic training data. | Agents cite sources. Nothing is fabricated. |
| **04** | Build Automations on Top of That Context | Use the visual builder to create workflows that trigger, reason over cluster knowledge, execute, and optionally wait for human approval before taking action. | Every automation has a full run log. Nothing runs silently. |
| **05** | Govern, Observe, and Scale | The admin panel shows who used what, what agents did, and what automations ran. RBAC controls enforce boundaries. Audit logs capture everything. | Leaders get a single source of truth. No end-of-quarter surprises. |

---

## Page 4: Pricing (`/pricing`)

**Hero:**
- H1: `Transparent pricing for teams that need AI to work at the enterprise level.`
- Annual/monthly toggle

**3 Tiers:**

### Starter — $49/mo
For solo operators and micro-teams
- 1 workspace
- Up to 3 users
- 3 knowledge clusters
- 10 agent sessions/day
- 5 automations
- Community support

### Teams — $199/mo *(Most Popular)*
For teams of 5–50 building shared intelligence
- 1 workspace
- Up to 25 users
- Unlimited clusters
- Unlimited agent sessions
- Unlimited automations
- Skill registry
- RBAC (3 roles)
- Audit logs (30-day retention)
- Email support + onboarding call

### Enterprise — Custom
For organizations that need governance, scale, and SLAs
- Unlimited workspaces
- Unlimited users
- Custom data retention
- SSO (SAML/OIDC) — *roadmap*
- MFA enforcement
- 90-day audit logs
- Dedicated CSM
- SLA + uptime guarantee
- White-label option
- Custom integrations

**Feature comparison table** (full grid, same style as Renewal360's FEATURE_COMPARISON)

**FAQ inline** (5 questions):
1. Do agents use my data to train base models? No.
2. What happens to my data if I cancel? Full export in 5 business days.
3. How long does setup take? Most teams are live within 3 days.
4. Is this SOC 2 certified? Building toward it. Current controls documented at `/security`.
5. Can I self-host? Enterprise plan includes discussion of deployment options.

---

## Page 5: Security (`/security`)

> This page replaces the bland "About" security section. It's a trust page, not a feature page.

**Hero:** `Security and governance designed for enterprise teams.`

**4 sections:**

1. **Data Architecture** — Org-level isolation, scoped cluster boundaries, no cross-tenant data bleed
2. **Access Control** — RBAC model, permission hierarchy diagram, audit log overview
3. **Infrastructure** — Hosting provider, encryption at rest (AES-256) and in transit (TLS 1.3), session handling
4. **Roadmap** — SOC 2 Type II (target date), SSO/SAML, MFA, DLP controls

**Trust badges row:** ISO-aligned · Encryption at rest & transit · RBAC enforced · Audit logged

---

## Page 6: FAQ (`/faq`)

**10 questions, grouped:**

**Setup & Onboarding**
1. How long does setup take?
2. Do I need an IT team to get started?

**Product**
3. What's the difference between a cluster and a workspace?
4. Can agents use data from multiple clusters at once?
5. What happens when an automation fails?

**Security & Data**
6. Does NuerOva train on my data?
7. Where is my data stored?
8. How do I export everything if I leave?

**Pricing & Plans**
9. Can I upgrade mid-cycle?
10. Is there a free trial?

---

## Page 7: About (`/about`)

**Structure:**
- Founding story: The problem of institutional knowledge leaving with people
- Mission: "Make teams smarter than any individual within them"
- What makes NuerOva different from both personal AI tools and heavy enterprise platforms
- Team section (placeholder for founders/team cards)
- Values: Build for trust first, performance second

---

## Page 8: Contact / Demo (`/contact`)

**Two-column layout:**

**Left:** Value reinforcement
- What happens after you submit:
  1. A human reviews your request (same day)
  2. We schedule a 30-min discovery call
  3. You get a customized sandbox setup
- No sales pressure. Just showing the product.

**Right:** Form
- Name · Work email · Company · Team size (dropdown) · Primary use case (dropdown: Operations / CS / Engineering / Other) · Message (optional)
- Primary CTA: `Request Your Demo`

---

## Page 9: Blog Index (`/blog`)

**Layout:** Header + 3-col grid (same as Renewal360)  
**Seed topics (10 posts to launch with):**
1. Why Scoped Team Memory Is the Moat Generic AI Tools Can't Copy
2. From Prompt Library to Skill Registry
3. Agent-Native vs Rule-Based Automation
4. What Enterprise AI Teams Actually Need (It's Not More Models)
5. How to Build a Knowledge Cluster That Survives Employee Turnover
6. NuerOva vs Microsoft Copilot: An Honest Comparison
7. The Hidden Cost of Fragmented Institutional Knowledge
8. How to Automate CS Operations Without Losing the Human Touch
9. 5 Signs Your Team Is Ready for Agent-Native Workflows
10. NuerOva Setup Guide: Live in 72 Hours

---

## Component Inventory

> Map to Renewal360's component structure for implementation parity.

| Component | NuerOva equivalent | Route(s) |
|---|---|---|
| `Navigation` | NuerOva Navigation | All |
| `Footer` | NuerOva Footer (links: Product / Docs / Security / Blog / Company) | All |
| `Hero` | Home hero with animated badge | `/` |
| `PersonaCards` | NuerOva persona cards (Ops / CS / Engineering) | `/`, `/features` |
| `Problem` | Pain cards + stats | `/` |
| `HowItWorks` (preview) | 5-step pill row | `/` |
| `HowItWorks` (full) | Timeline steps | `/how-it-works` |
| `PlatformGlimpses` | Tabbed product mockups | `/`, `/features` |
| `Features` (preview) | 3-card row | `/` |
| `Features` (full) | 5 alternating sections | `/features` |
| `Integrations` | Dark grid | `/` |
| `RoiCalculator` | 3-input value calculator | `/` |
| `Competitive` | Comparison table | `/features`, `/pricing` |
| `Pricing` | 3-tier + toggle | `/`, `/pricing` |
| `Testimonials` | 3-card grid | `/` |
| `Blog` (preview) | 3 latest posts | `/` |
| `BlogPage` | Full index | `/blog` |
| `BlogPostPage` | Individual post | `/blog/:slug` |
| `FAQ` | Accordion | `/faq`, `/pricing` |
| `FinalCTA` | Dark bottom CTA | All pages |
| `SecurityPage` | 4-section trust page | `/security` |
| `ContactPage` | 2-col form | `/contact` |
| `AboutPage` | Story + mission | `/about` |
| `FloatingBanner` | "Now available: Automation Builder" | `/` (dismissible) |

---

## Tech Stack Recommendation

Matching Renewal360's stack for direct porting:

| Layer | Choice | Notes |
|---|---|---|
| Framework | React + Vite | Same as Renewal360 |
| Routing | TanStack Router | Same as Renewal360 |
| UI primitives | shadcn/ui | Same as Renewal360 |
| Styling | Tailwind CSS | Map Proton Modern tokens to Tailwind `theme.extend` |
| Icons | Lucide React | Same as Renewal360 |
| Analytics | Custom `analytics.ts` | Track CTA clicks, funnel stages, demo requests |
| Forms | Backend Python FastAPI (same as Renewal360) | Form submissions → database |
| Blog | Static HTML in `/public/blog/` | Same SSG approach as Renewal360 |
| SEO | `useSEO` hook | Per-page meta, OG tags |

---

## Design Token Mapping (Proton Modern → Tailwind)

```js
// tailwind.config.js — extend with Proton Modern tokens
theme: {
  extend: {
    colors: {
      primary: '#005cb8',
      'primary-container': '#1275e2',
      surface: '#f9f9ff',
      'surface-dim': '#d7dae3',
      'on-surface': '#181c22',
      'on-surface-variant': '#414753',
      outline: '#717785',
      'outline-variant': '#c1c6d5',
      tertiary: '#9a4600',        // amber accent — use sparingly
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    borderRadius: {
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
  }
}
```

---

## SEO Strategy (Matching Renewal360's Approach)

Each page should have:
- Unique `<title>` and `<meta description>`
- OG image (`og:image`) — 1200×630, dark brand card
- `robots.txt` allowing all
- `sitemap.xml` covering all routes + blog posts

**Target keyword clusters:**
- `team AI platform enterprise`
- `shared AI memory teams`
- `agent automation enterprise`
- `AI platform RBAC audit logs`
- `institutional knowledge management AI`
- `copilot alternative enterprise`

---

## Implementation Sequence

### Phase 1 — Core Shell (Week 1)
1. Scaffold Vite + React + TanStack Router project
2. Install shadcn/ui, configure Tailwind with Proton tokens
3. Build Navigation + Footer components
4. Build Home page with all 14 sections (static content)
5. Wire up routing for all 10 pages

### Phase 2 — Inner Pages (Week 2)
6. Features page (5 deep-dive sections)
7. How It Works page (5-step timeline)
8. Pricing page (3 tiers + comparison table)
9. Security page (4 trust sections)
10. FAQ page (10 accordion items)

### Phase 3 — Conversion & Trust (Week 3)
11. Contact page + form backend (FastAPI)
12. About page
13. ROI Calculator (interactive)
14. Floating banner component
15. Analytics event tracking

### Phase 4 — Content & SEO (Week 4)
16. Blog infrastructure (static HTML in `/public/blog/`)
17. 10 seed blog posts
18. `useSEO` hook per page
19. Sitemap + robots.txt + OG images
20. `llms.txt` (same as Renewal360)

---

## Critical Differentiators to Avoid Losing in Execution

1. **Never call NuerOva "an AI assistant."** It's a *team intelligence platform* or *collaborative AI layer*.
2. **Lead with the team layer, not the agent layer.** The moat is scoped shared memory, not the chat interface.
3. **Security on page 1.** Enterprise buyers filter tools that can't articulate their security model. The trust strip in the Hero section is non-negotiable.
4. **Sparse copy.** Every section should feel like it has room to breathe. If a section has more than 3 sentences of body copy, cut it.
5. **Avoid AI-generic aesthetics.** No purple gradients. No floating robot icons. The visual language should feel like Linear or Vercel — tools engineers trust for serious work.

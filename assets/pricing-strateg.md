# Renewal Copilot — Pricing Refactor Strategy
> Document Date: March 2026 · Status: Proposed · Prices unchanged — feature mapping refactored

---

## Table of Contents

1. [Core Principles](#1-core-principles)
2. [Plan Structure Overview](#2-plan-structure-overview)
3. [Global Pricing Grid](#3-global-pricing-grid)
4. [The Upgrade Story](#4-the-upgrade-story)
5. [7-Day Scale Trial Mechanic](#5-7-day-scale-trial-mechanic)
6. [Active Accounts — The Core Usage Lever](#6-active-accounts--the-core-usage-lever)
7. [Full Feature Mapping](#7-full-feature-mapping)
8. [What We're Removing & Why](#8-what-were-removing--why)
9. [Strategic Rationale Per Tier](#9-strategic-rationale-per-tier)
10. [Implementation Notes](#10-implementation-notes)

---

## 1. Core Principles

| # | Principle |
|---|-----------|
| 01 | **No seat limits, no API access, no Enterprise tier.** Unlimited seats at every tier. Clean 4-plan structure: Free → SMB → Growth → Scale. |
| 02 | **Active Accounts is the core usage lever.** It's the most intuitive metric — users understand it immediately and it scales with business size. |
| 03 | **Each jump must feel like a capability unlock, not just "more".** The Growth tier is the star — it's where the product becomes an intelligence platform. |
| ★ | **Every new signup gets 7 days of Scale — then drops to Free.** Users experience the full product before hitting any limits. The trial ends with a clear downgrade moment designed to convert. |

---

## 2. Plan Structure Overview

| Plan | Accounts | INR/mo | USD/mo | EUR/mo | Target Customer |
|------|----------|--------|--------|--------|-----------------|
| **Free** | 25 | ₹0 | $0 | €0 | Individual CSMs running a pilot cohort |
| **SMB** | 200 | ₹12,000 | $199 | €179 | 2–5 person CS team at early-stage SaaS |
| **Growth ⭐** | 1,000 | ₹49,000 | $599 | €549 | Mid-market teams needing churn intelligence |
| **Scale** | Unlimited | ₹99,000 | $999 | €929 | Large CS orgs needing a dedicated partner |

> **Note:** Seats/users are **unlimited at all tiers**. Active Accounts is the only usage ceiling.

---

## 3. Global Pricing Grid

### Monthly Pricing (no annual discount mentioned in strategy)

| Currency | Free | SMB | Growth ⭐ | Scale |
|----------|------|-----|-----------|-------|
| INR | ₹0 | ₹12,000 | ₹49,000 | ₹99,000 |
| USD | $0 | $199 | $599 | $999 |
| EUR | €0 | €179 | €549 | €929 |

### Comparison vs Current Live Pricing (INR)

| Plan | Current (Live) | Proposed (Strategy) | Delta |
|------|---------------|---------------------|-------|
| Free | ₹0 | ₹0 | — |
| Starter → SMB | ₹49,000 | ₹12,000 | **−₹37,000** |
| Growth | ₹99,000 | ₹49,000 | **−₹50,000** |
| Scale | ₹1,79,000 | ₹99,000 | **−₹80,000** |

> ⚠️ The strategy significantly lowers price points, especially at SMB and Growth tiers, to reduce friction and drive volume.

---

## 4. The Upgrade Story

Each tier transition is designed around a specific **trigger moment** — a real business pain that makes the upgrade feel obvious, not forced.

---

### Free → SMB: The Operational Jump

**What changes:**
- Accounts: 25 → 200
- Objection Handling: Basic → Smart AI
- HubSpot CRM integration unlocks
- Slack Alerts unlock
- Advanced Follow-Ups unlock
- Onboarding Consultation included

**Trigger moment:**
> *"We've outgrown 25 accounts and need HubSpot connected + Smart AI handling objections."*

**Who upgrades:** CSMs who've proven the product works on their pilot cohort and need to expand to their real account list.

---

### SMB → Growth ⭐: The Intelligence Jump

**What changes:**
- Accounts: 200 → 1,000
- **Weighted Health Scoring (5-Factor)** unlocks — NEW
- **NPS Survey System** unlocks — NEW
- **Revenue at Risk Dashboard** unlocks — NEW
- Reporting Dashboard unlocks
- Team Performance Leaderboard unlocks
- Executive Summaries upgrade to Advanced

**Trigger moment:**
> *"We need to show our CFO which $ARR is at risk and actually predict churn before it happens."*

**Who upgrades:** CS leaders whose volume has grown enough that basic tracking is no longer enough. Executives get involved — they want visibility on ARR risk and team performance.

---

### Growth → Scale: The Scale Jump

**What changes:**
- Accounts: 1,000 → Unlimited
- Salesforce integration unlocks
- Pipedrive integration unlocks
- Priority Slack Support unlocks
- Dedicated Success Manager unlocks
- Reporting Dashboard upgrades to Custom
- Executive Summaries upgrade to Custom

**Trigger moment:**
> *"We're over 1,000 accounts, need Salesforce, and want a dedicated partner, not just support."*

**Who upgrades:** Large CS teams managing complex, multi-CRM portfolios who need white-glove onboarding and a direct relationship with the vendor.

---

## 5. 7-Day Scale Trial Mechanic

Every new signup immediately gets full Scale access — no credit card required. The trial is designed to create a **downgrade moment** that drives conversion.

### Trial Timeline

| Day | Event | Detail |
|-----|-------|--------|
| **Day 1** | Signup → Instant Scale Access | User onboards with unlimited accounts, full CRM integrations, all AI intelligence features. No credit card required. |
| **Day 5** | In-app Warning Banner | *"Your Scale trial ends in 2 days. Upgrade to keep Revenue at Risk, NPS Surveys, and Weighted Health Scoring."* — with direct upgrade CTA. |
| **Day 7** | Trial Expiry Email | *"Your Scale trial ends tonight."* — summary of what they've set up, what they'll lose, and a one-click upgrade link. Sent at 9am user time. |
| **Day 8** | 🔴 Downgrade to Free | User drops to Free (25 accounts, basic features). Every locked feature shows an upgrade prompt. |

### What a User Loses on Day 8 (Free vs Scale)

| Feature Lost | Why It Hurts |
|--------------|-------------|
| 📊 **Revenue at Risk Dashboard** | ARR visibility disappears. Executives who were shown this will feel the loss immediately. |
| 🧮 **Weighted Health Scoring** | Reverts to basic risk flags only. Users who trusted the 5-factor score for 7 days won't trust basic back. |
| ⭐ **NPS Surveys + CRM Sync** | NPS locked, HubSpot/Salesforce disconnected, account ceiling drops to 25. Very hard to ignore. |

### Conversion Nudge Strategy

> On Day 8, **do not present all 4 plans equally.**

- Default the upgrade modal to **highlight Growth** — it includes all intelligence features they used during trial (NPS, Revenue at Risk, Weighted Scoring).
- Only users with Salesforce needs will self-select Scale.
- This maximises conversion volume while Scale self-selects naturally.

---

## 6. Active Accounts — The Core Usage Lever

Active Accounts is chosen as the single usage metric because it is the most intuitive — customers understand it immediately and it correlates directly with business size and renewal volume.

| Plan | Accounts | Rationale |
|------|----------|-----------|
| **Free** | 25 | Enough to run a real pilot cohort. A CSM can experience meaningful value without upgrading. |
| **SMB** | 200 | Right for a 2–5 person CS team at an early-stage or growing SaaS company. |
| **Growth** | 1,000 | Mid-market scale. Revenue at Risk becomes operationally critical at this volume. |
| **Scale** | Unlimited | No ceiling. Dedicated success manager to help onboard the full portfolio. |

---

## 7. Full Feature Mapping

### Core Usage

| Feature | Free | SMB | Growth ⭐ | Scale |
|---------|------|-----|-----------|-------|
| Active Accounts | 25 | 200 | 1,000 | Unlimited |
| Seats / Users | Unlimited | Unlimited | Unlimited | Unlimited |

---

### AI & Automation

| Feature | Free | SMB | Growth ⭐ | Scale |
|---------|------|-----|-----------|-------|
| AI Renewal Sequences | ✅ | ✅ | ✅ | ✅ |
| Email Approval Workflow | ✅ | ✅ | ✅ | ✅ |
| Objection Handling AI | Basic | Smart AI | Smart AI | Smart AI |
| Advanced Follow-Ups | — | ✅ | ✅ | ✅ |

---

### Risk Intelligence

| Feature | Free | SMB | Growth ⭐ | Scale |
|---------|------|-----|-----------|-------|
| Basic Health Scoring | ✅ | ✅ | ✅ | ✅ |
| Weighted Health Scoring 🆕 | — | — | 5-Factor | 5-Factor |
| NPS Survey System 🆕 | — | — | ✅ | ✅ |
| Revenue at Risk Dashboard 🆕 | — | — | ✅ | ✅ |
| At-Risk Alerts | — | ✅ | ✅ | ✅ |

> 🆕 = New features not currently on the live product/pricing page

---

### Integrations

| Feature | Free | SMB | Growth ⭐ | Scale |
|---------|------|-----|-----------|-------|
| Google Sheets | ✅ | ✅ | ✅ | ✅ |
| HubSpot | — | ✅ | ✅ | ✅ |
| Slack Alerts | — | ✅ | ✅ | ✅ |
| Salesforce | — | — | — | ✅ |
| Pipedrive | — | — | — | ✅ |

---

### Reporting & Summaries

| Feature | Free | SMB | Growth ⭐ | Scale |
|---------|------|-----|-----------|-------|
| Executive Summary | Weekly (Basic) | Weekly | Advanced | Custom |
| Reporting Dashboard | — | — | ✅ | Custom |
| Team Performance Leaderboard | — | — | ✅ | ✅ |

---

### Support & Onboarding

| Feature | Free | SMB | Growth ⭐ | Scale |
|---------|------|-----|-----------|-------|
| Email Support | ✅ | ✅ | ✅ | ✅ |
| Onboarding Consultation | — | ✅ | ✅ | ✅ |
| Priority Slack Support | — | — | — | ✅ |
| Dedicated Success Manager | — | — | — | ✅ |

---

## 8. What We're Removing & Why

| Removed | Reason |
|---------|--------|
| **Enterprise Tier** | 4 tiers with Scale already covering large teams. Adds sales complexity without clear differentiation. Removed entirely. |
| **API Access** (as a plan feature) | Internal architecture, not a customer-facing benefit. Kept internal — avoids misaligned expectations with customers. |
| **Seat / User Limits** | Friction with no real revenue upside at this stage. CS tools need the whole team in — limiting seats blocks adoption. |
| **Account Add-ons** (₹35K/500 accounts pack) | Complicates the price conversation — customers have to do math before buying. Clean account tiers eliminate this. Upgrade to the next tier instead. |

---

## 9. Strategic Rationale Per Tier

### ⭐ Growth — The Star Tier
NPS Surveys, Revenue at Risk Dashboard, and 5-Factor Weighted Health Scoring are all exclusive to Growth+. These three features transform the product from a *renewal tracker* into a *churn prediction platform*. Executives want these — and they're the ones who approve the budget jump from SMB. This is where the product's real differentiation lives.

---

### SMB — Closing the Adoption Gap
Smart AI objection handling unlocks at SMB. Keeping "Basic" handling on Free creates a real, tangible quality difference without gate-keeping core function. HubSpot + Slack on SMB gives the CSM team a genuinely faster workflow — not just more accounts. The ₹12,000 / $199 price point is deliberately low to reduce friction and pull in the long tail of growing SaaS companies.

---

### Scale — Reserving the Relationship
Salesforce and Pipedrive integrations, a Dedicated Success Manager, and Priority Slack support sit exclusively at Scale. This creates a clear value add beyond just "unlimited accounts" — it's the tier for companies that want a *partner*, not just software. Salesforce access alone justifies the jump for enterprise CS teams.

---

### Free — A Real Pilot, Not a Preview
25 accounts with AI Renewal Sequences, Email Approval Workflow, and basic Health Scoring is enough to run a genuine cohort and see real results. Most trial users will hit the 25-account ceiling and upgrade naturally. Combined with the 7-day Scale trial mechanic, Free users have already experienced the full product — so the upgrade is a return to something they know, not a leap of faith.

---

## 10. Implementation Notes

### Plan Rename Mapping (Current → Proposed)

| Current Name | Proposed Name |
|--------------|---------------|
| Starter | SMB |
| Growth | Growth (kept, repositioned as star) |
| Scale | Scale (kept, repriced) |
| *(none)* | Enterprise tier → **removed** |

### New Features to Build Before Launch

The following features are marked **New** in the strategy and do not exist in the current product — they must be built before the Growth tier can be fully marketed:

1. **Weighted Health Scoring** — 5-factor model (replaces basic health flags)
2. **NPS Survey System** — in-app NPS collection and tracking
3. **Revenue at Risk Dashboard** — ARR visibility and at-risk account flagging

### Pricing Code Changes Required

- Update `src/lib/pricing.ts` with new plan names (SMB replacing Starter) and new price points
- Update `src/hooks/usePricing.ts` if plan structure changes
- Add GBP pricing row (not included in strategy doc — needs confirmation)
- Remove add-on block from `PricingPage.tsx` and `Pricing.tsx` (section)
- Update feature lists per plan in `PRICING_DATA`
- Add 7-day trial banner logic to app shell or `FloatingBanner.tsx`

---

*Renewal Copilot · Pricing Strategy · March 2026*
*"Prices unchanged — feature mapping refactored"*
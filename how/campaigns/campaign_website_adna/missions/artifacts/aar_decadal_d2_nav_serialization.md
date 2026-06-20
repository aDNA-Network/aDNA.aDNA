---
type: artifact
artifact_class: decadal_aar
campaign_id: campaign_website_adna
mission_id: mission_wadna_p3_iterate
decade: D2
title: "Decadal AAR — D2 Nav-serialization / docs structure (SP-2 → H-1/H-2 + gate G2 blocking)"
created: 2026-06-19
updated: 2026-06-19
status: complete
verdict: GO (pending operator decade-gate)
last_edited_by: agent_rosetta
tags: [artifact, decadal_aar, phase3, decade_2, nav_serialization, axis_g, accessibility, rlp]
---

# Decadal AAR — D2 Nav-serialization / docs structure

> Second decade of WEBSITE.aDNA P3 (`mission_wadna_p3_iterate`), opened on operator GO at the D1 decade-gate (2026-06-19). The single highest-leverage structural fix: one DOM reorder clears the reading-order + heading-hierarchy class across **every** docs-layout page. **Commit-only.** Spec: [[IMPROVEMENT-SPECS.aDNA]] SP-2; order/exit: [[DECADAL-PLAN.aDNA]] D2; gate: [[TOOLING-PROMOTION.aDNA]] G2.

## 1. Verdict — **GO** (pending operator decade-gate)

D2's decade-exit criteria are met: axe **heading-order + reading-order clean sitewide**, the docs-sidebar's ~100-link dump no longer precedes content, and the `@audit` 375px check is green **and now blocking**. Independent Accessibility & Agent Advocate review: **axis G 5/5, approve.** Holds at the decade-AAR human gate — operator GO required before D3.

## 2. Scope — units & change

**Units:** all docs-layout pages (`/learn/*`, `/community`, `/get-started`, reference/glossary/patterns/use-cases, …). **One structural fix** lifts the whole class.

## 3. SP-2 dispositions (H-1, H-2)

| # | Finding | Disposition (shipped) | Verification |
|---|---------|----------------------|--------------|
| **H-1** | Nav-serialization — `<aside>` sidebar (~100 links) preceded `<article>`/`<h1>` in DOM (reading order: nav before content) | `DocumentationLayout.astro` — `<article>` (h1) moved BEFORE the `<aside>` sidebars in DOM; visual columns restored via `grid-template-areas` (`sidebar content` / `sidebar content toc`) — **no visual change**. Skip-link (`#main-content`) now lands on content. | Built DOM: `.doc-content` before `.doc-sidebar` on `/learn/what-is-adna` + `/community`; `grid-template-areas` present in `dist/_astro/*.css`; reviewer confirmed landmark/focus/skip order. |
| **H-2** | Heading hierarchy — SidebarNav group label `<h3>` made the page `<h1>` not-first | `SidebarNav.astro` — `<h3 class="group-label">` → `<p class="group-label">` (class keeps the uppercase look). | `<h1>` is the **first heading in `<body>`** on every docs page; axe heading-order clean both modes. |
| (SP-2 fallback cap) | No-active-group pages dumped the full 7-group (~100-link) tree | `shownGroups = activeGroup ? [activeGroup] : []` — the section-switcher still lists all sections one click away. | `/community` renders only the switcher; no stranding; anchors-before-h1 ~101 → 28 (the docs-sidebar dump eliminated; remainder = global header + a *collapsed* mobile disclosure). |

## 4. Gate wired — G2 (blocking)

`@audit` sweep promoted from findings-only to a **blocking** regression gate: `test:gates` now runs the full suite (a `test:gates:fast` is preserved for iteration). Corrected the stale 375px switcher probe (`audit-p1s3-sweep.spec.ts`) — it counted `.nav-group` globally but the doc layout renders SidebarNav twice (mobile `<details>` + desktop `<aside>`); scoped the assertion to the visible mobile nav. **Gate baseline 159 → 274, all green.**

## 5. Scorecard + RLP (independent, rotation-honored)

| Axis | Lead persona | Score | Target | Status |
|------|--------------|-------|--------|--------|
| **G** Accessibility + Agentic | Accessibility & Agent Advocate | **5** | ≥4 | ✓ |

**Accessibility & Agent Advocate — approve (G5).** Adversarially confirmed content-first DOM on both pages, h1-first, the ~100-link dump gone (desktop sidebar now 35 scoped anchors, after content), `grid-template-areas` (praised over a fragile `order:` hack), skip-link → content, capped fallback with no stranding, axe AA both modes, 159 fast gates + responsive at 768/900/1024/1440. Agentic: an agent reading top-to-bottom now hits `<h1>` + prose before the docs nav. (Designer did not self-verify.)

## 6. Metrics

- Build: `npx astro build` → 163 pages clean (no data regen — Honor pt19 held).
- Gates: **274/274** (`test:gates`, now incl. blocking `@audit`).
- `/community` anchors-before-`<h1>`: ~101 → 28.
- Commit: `faa7a73` (commit-only).

## 7. Decade-exit criteria ([[DECADAL-PLAN.aDNA]] D2 row)

- [x] axe heading-order + reading-order clean sitewide.
- [x] `<a>`-before-`<h1>` reduced — the docs-sidebar dump eliminated from before content (remaining count is the global header + a collapsed mobile disclosure, not the nav-serialization defect; skip-link lands on content for SR users).
- [x] `@audit` 375px green — and now blocking (G2).
- [ ] **Operator decade-gate GO** → open D3 (agentic-readiness + community legibility). ⏳ pending.

## 8. 5-line AAR

- **Worked:** one DOM reorder + `grid-template-areas` cleared the whole reading-order class with zero visual change across every docs page; the independent a11y reviewer caught nothing.
- **Didn't:** the `@audit` 375px probe was red on first run — a *stale* assertion (counted `.nav-group` globally, but the layout renders SidebarNav twice since the mobile-nav was added), not a fix failure; had to correct the probe before promoting `@audit` to blocking.
- **Finding:** the raw anchors-before-h1 metric is muddied by the global header + the (display:none-on-desktop, collapsed-on-mobile) mobile disclosure; the meaningful measure is "does the docs *sidebar* precede content" (now no) + "skip-link lands on content" (now yes).
- **Change:** when promoting a findings-only sweep to blocking, first re-derive its assertions against the *current* DOM (dual mobile/desktop renders), not the era it was written in.
- **Follow-up:** (declined-for-now polish) move the mobile `<details>` after `<article>` so even naive DOM scrapers see h1 first — declined because it would push the "In this section" disclosure below the content on mobile (worse mobile UX); revisit in D3 (agentic-readiness) if strict DOM purity for scrapers becomes a priority.

## 9. Open human gate

**Operator GO required before D3 opens** (campaign Standing Order #8). D2 is commit-only. On GO, D3 = agentic-readiness + community legibility (SP-6 → H-3 llms.txt, M-3 graph JSON-LD · H-4 `/community` axis-K · H-8 mobile install), gates G10/G11.

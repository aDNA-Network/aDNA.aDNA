---
type: artifact
artifact_class: findings
campaign_id: campaign_website_adna
mission_id: mission_wadna_p1_critique
title: "FINDINGS.aDNA — prioritized defect/opportunity register (severity × reach) + systemic patterns"
created: 2026-06-18
updated: 2026-06-18
status: draft   # → operator review at Decision 3 (P1 → P2)
last_edited_by: agent_stanley
tags: [artifact, findings, phase1, critique, severity_reach, axis_a_k]
---

# FINDINGS.aDNA — Master Register

> P1 output: every finding tagged **axis (A–K) × severity × unit × owner-class**, sorted by **severity × reach**. Produced by the baseline persona sweep (4 lens cells via parallel Agent dispatch — trust/credibility/demo/community · visual/responsive · a11y/agentic/narrative/microcopy) + the pre-supplied J (`RECONCILIATION.aDNA.md`) and F (frozen baseline). **Credibility / naming / standard-fidelity = auto-Critical** (campaign doctrine). **Read-only — nothing was changed; fixes are P3.** Rubrics: [[rubrics_a_k]]. Baseline: [[SITEMAP.aDNA]] §5.

**Owner-class key:** `website-owned` = fix in this campaign (P3) · `pt19-owned` = Operation Production Tidy's vault-data regen (FLAG only; verify-after-pt19) · `deploy` = ship-gate (live ≈ c159; local ahead) · `tooling` = P2 tooling-promotion.

## CRITICAL (auto-Critical credibility/honesty unless noted) — fix first

| # | Unit(s) | Axis | Finding | Owner | Direction |
|---|---|---|---|---|---|
| **C-1** | `/learn/what-is-adna` | E | **Dead proof-links.** The credibility page stakes "this IS a real, inspectable vault" on **5 deep-links to `github.com/aDNA-Network/aDNA.aDNA`** (`:72,:101,:103–106`) — **all 404** (the canonical repo is `aDNA-Network/aDNA`; the vault lives at a subtree). The one move that proves the site isn't a skin is broken. | website-owned | Repoint to the resolving canonical path under `aDNA-Network/aDNA`; verify each blob/tree → 200 before ship; add a link-check gate. |
| **C-2** | `/` (landing) | D·E | **Fabricated artifacts as the marquee demo.** "How it Works" renders invented files (`data/home.ts:47–96`): `my-project/`, `climate-pipeline` CLAUDE.md, `mission_schema_v2.md` — none exist in the vault. Highest-reach surface; inverts Doctrine #1 (show real standard files). | website-owned | Replace with real excerpts from this vault (real `CLAUDE.md` head, a real `how/campaigns/` mission, the real tree). |
| **C-3** | sitewide `<head>` | E·J | **JSON-LD publisher drift.** `seo.ts:47/48/100` emit publisher `name:'Lattice Protocol'` + `url: github.com/LatticeProtocol` (crawler/agent-visible, every page). Contradicts the `aDNA-Network/aDNA` story for anyone doing structured-data diligence. (= RECONCILIATION W1/W2/W4.) | website-owned | One shared constant → `aDNA-Network/aDNA`; publisher name → confirmed brand entity (W4/W5, P2) or drop. |
| **C-4** | `/` · `/network` | D·E | **NetworkDiagram false "data-driven" claim.** `NetworkDiagram.astro:18–23,36` hardcodes node labels while its docstring claims names "come from `vaults.json`." The thesis "real relationships" diagram is neither data-driven nor current. *(Label currency itself = pt19; the false claim + hardcoding = website-owned.)* | website-owned (+ pt19 names) | Actually drive it from `vaults.json` (inherits pt19's corrected names); don't hand-edit labels. |

## HIGH — systemic or high-reach

| # | Unit(s) | Axis | Finding | Owner | Direction |
|---|---|---|---|---|---|
| H-1 | all docs-layout pages (worst `/community` = **101 `<a>` before `<h1>`**; `/learn/*` = 34) | G | **Nav-serialization.** `DocumentationLayout.astro` renders `<aside>` (SidebarNav) before `<article>/<h1>`; `SidebarNav.astro:44` `?? navigation` fallback dumps the full ~100-link tree when no active group matches; skip-link target sits above the sidebar so it doesn't skip it. Wrecks reading order for SR + agents. | website-owned | One structural fix: `<article>` before `<aside>` (CSS `order` keeps layout) + cap/scope the fallback. Resolves the @audit 375px sidebar fail too. |
| H-2 | all docs-layout | G | **Heading hierarchy.** Sidebar group label renders as `<h3>` ("Learn") **before** the page `<h1>` (`SidebarNav.astro:67`) — h1-not-first / hierarchy violation for AT + agents. | website-owned | Demote group labels to non-heading; or fix DOM order (with H-1). |
| H-3 | sitewide | G (agentic) | **No `llms.txt`** (404 live; absent from `public/`). The clearest "doesn't practice what it preaches" gap for a standard whose thesis is agent-navigable context. | website-owned | Add `public/llms.txt` (+ `llms-full.txt`): what-is-aDNA, canonical install, route map, spec + graph links. |
| H-4 | `/community` | K·C·D | **Axis-K binding constraint.** The page only *links* to governance; the real ladder, `last_edited_by` attribution, and AAR audit-trail live in `who/community/` but are not *shown*. Also sparse-to-a-fault — empty lower two-thirds (C). Community asserted, not demonstrated. | website-owned | Port the `/commons` "today"-ledger pattern (named stewards, attribution, honest horizon) onto `/community`; show real attribution + a real contribution/AAR example. |
| H-5 | `/vaults/graph` | C | **Categorical-rainbow data-viz.** 9–14 unmapped Mermaid class-fills (`graph.astro` + `.mmd`); its own comment admits "undecoded rainbow." Largest ≤2-accent-doctrine violation; reads default-Mermaid, not designed. (Contrast the disciplined shared `MermaidDiagram` island.) | website-owned | Single-hue tonal ramp / shape-encoding; reserve hue for ≤2 brand accents. |
| H-6 | `/` · `/network` | C·D | **Thesis diagram whispers.** NetworkDiagram in situ is under-contrast (edge-opacity 0.5 / halo 0.12 on `#1a1b26`) with vast dead vertical space — the "demonstrate, don't claim" marquee barely reads. | website-owned | Raise edge/node contrast + scale; tighten section padding so the diagram fills its frame. |
| H-7 | `/vaults/[slug]` (41 routes) | C | **No hierarchy.** Vault-detail = wall of near-uniform left-aligned text (`[slug].astro`); reads as raw markdown. High reach (41 pages). | website-owned | Definition-list/card grid; separate metadata from prose; give the relationship block primacy. |
| H-8 | `/get-started` | H | **Install command clips at 390px** — the canonical (credibility-critical) command is visually truncated on mobile (`overflow-x:auto` hides it; gate-9 passes on doc-overflow but the fact is severed). | website-owned | Soft-wrap long commands or add a visible scroll affordance; ensure full readability at 320–390px. |
| H-9 | `/vaults/graph` | H | **Illegible at 390px** — shrunk desktop SVG = postage-stamp; node-twin saves *function*, not the visual experience. | website-owned | Mobile-specific view (node-list primary on small screens) or zoom/pan. |
| H-10 | `/vaults`, `/vaults/graph`, `/network`, `/` registry | D·J | **pt19-owned currency (FLAG).** Vault count "40" + pre-migration names/edges (SiteForge/TaskForge/CanvasForge/LatticeLabs…); `index.astro:19–22` REGISTRY_SLUGS pins renamed/merged vaults (= F4 + RECONCILIATION P1–P5). The honesty scaffolding (named unlinked nodes, "honest topology not missing data") is excellent — preserve through the regen. | **pt19-owned** | Verify-after-pt19; **no hand-edit, no `sync:vaults`**. |
| H-11 | `/vaults/graph` | F | **Perf 83 / LCP 4.06s local** (Mermaid client-render; live 100 via CDN). The headline demonstration page is the lone perf laggard. | website-owned | SSR-prerender the graph (also lifts the agentic story); defer Mermaid hydration. |

## MEDIUM

| # | Unit | Axis | Finding | Owner |
|---|---|---|---|---|
| M-1 | `/learn/what-is-adna` + ~10 MDX | E·J | **"§11 Federation" citation drift** — spec §11 = "Coordination Protocol" (`open-standard.mdx:68`, `specification.mdx:1442`, comparisons…). Keep `lattice://` as a convention, drop the §11 attribution. **(Closes RECONCILIATION W6 — now located.)** | website-owned |
| M-2 | `/` (JSON-LD) | G·I | Home `WebSite` JSON-LD `name`/`description` = pre-rebrand register, disagrees with the live `<meta>`. Agent-facing summary stale. | website-owned (+ deploy) |
| M-3 | `/vaults/graph` | G (agentic) | Zero JSON-LD on the one page whose purpose is machine-readable topology. | website-owned |
| M-4 | `/vaults/[slug]` `.mission-state` pills · `VaultClassFacet` | C·G | **Hardcoded light-mode hex breaks dark mode** (`[slug].astro:123–126` pastel pills; `VaultClassFacet.astro:11–12` `#f0f0f0`/`#333` + off-palette `#4a86e8`). Recurring class — same root VaultCard already fixed. | website-owned |
| M-5 | global header | H·G | **DarkModeToggle + github-link < 44px touch target** (≈28px / unsized) at all viewports; the 44px standard exists elsewhere (mobile-menu, copy-button) — missed here. | website-owned |
| M-6 | sitewide (live) | E·F | **Live Best-Practices 92 on every route** (100 local) = Vercel deploy-layer (headers/source-maps), not source. | deploy |
| M-7 | `/learn/concepts/*` (12) | F·H | **CLS 0.156 live / 0.134 local** — real layout shift on the concept template (above 0.1 "good"); reproduces local. | website-owned |
| M-8 | `/` §5 + nav | B | "Join the network" / nav link to `/commons` which **404s live** — narrative promise dead-ends. | deploy |
| M-9 | footer (sitewide) | E·A | `© Lattice Protocol` copyright entity ≠ the aDNA-forward masthead brand. | website-owned (brand-entity → **P2/W5**) |

## LOW / WATCH
C-7 hero lead ~58 words (over the 35–55 manifesto band) · C-8 `.btn { transition: all }` (motion imprecision) · C-9 4-hue-at-a-glance pill drift (within tolerance — hold) · `A11Y-DUP` dual SidebarNav copies (sound if media-queries hold; keep under test) · `MENU-1` desktop hamburger-at-all-widths (fixed in source c165, undeployed) · sidebar `groupCount>1` scoping (the @audit 375px fail; folds into H-1).

## Refutations & strengths (record — do not re-litigate)
- **REFUTED — "`/vaults/graph` invisible to agents"** (research-plan finding): the page ships a real **keyboard/agent node-twin** (`graph.astro:148–155`, one `<a href="/vaults/{slug}/">` per vault) **+ a `<noscript>` Mermaid fallback** (`MermaidDiagram.astro:19–21`) + prose census. Genuinely agent-readable without JS. **Preserve.**
- **REFUTED (P0)** — unsupported partners (Dell/NVIDIA/Mayo/Stanford/CZI) + embargoed names (Genentech/CakeHealth): **none present**. "The Lattice" label already → "Vaults"/"registry". Version centralized v2.2.
- **Strengths to protect:** honesty microcopy is exemplary and *lived* ("connections are not decorative… not an invented mesh"; "honest topology, not missing data"; "the clone *is* your workspace"). Banned-vocab scan **clean**. `/get-started` install flow honest + fixture-gated (the credibility reference). `/commons` is the strongest K/E surface (named stewards, attribution, license, honest horizon) — **ship it**. Motion (NetworkDiagram compose, no-JS-safe, reduced-motion-honored) is a real asset.

## Systemic patterns (fix once at the system level — P2 design)
1. **Credibility-integrity (THE headline).** C-1 + C-2 + C-3 + C-4 + M-1 share one root: **claims not verified against the real graph** (dead links, fabricated artifacts, wrong publisher, false "data-driven", fabricated citation). Fix as a class: a "claims-traceable" pass + **link-check + citation + JSON-LD-source gates**. This — not aesthetics — is the gap to frontier-grade.
2. **Nav-serialization / docs-layout DOM order.** H-1 + H-2 + the @audit 375px fail: one structural fix (`<article>` before `<aside>`; non-heading group labels; scoped fallback) clears all three across every docs page.
3. **Hardcoded-light-hex-breaks-dark.** M-4 (recurring; VaultCard's already-fixed root) → token sweep + a static `var()`/contrast gate (carries the gate-14 idea).
4. **Underfilled-container / dead-space composition.** H-4 (/community) + H-7 (vault-detail) + H-6 (diagram) + thin vault cards: density < doctrine §6 "≥60% useful space."
5. **Categorical-rainbow data-viz.** H-5 + H-9: single-hue ramp / shape-encoding for all viz.
6. **Agentic-readiness.** H-3 (llms.txt) + M-3 (graph JSON-LD) + M-2 (single-sourced structured data). The big "graph invisible" fear was refuted; these are the real gaps.
7. **Touch-target 44px not uniform.** M-5.
8. **pt19-owned currency** (H-10 + RECONCILIATION P1–P5) — one verify-after-pt19 pass.
9. **Deploy gap** — `/commons` 404 + live BP 92 + undeployed c162–c165 + MENU-1 → one coordinated deploy at the P3 ship gate.
10. **Tooling-promotion (P2):** add gates for llms.txt presence, banned-vocab, link/citation check, single-source lint, categorical-color lint; Lighthouse budget gate; **manual** axis-G agentic checks (LH 13.4.0 has no Agentic-Browsing category).

## Baseline per-flagship scorecard (1–5; sweep aggregate)

| Unit | A | B | C | D | E | F | G | H | I | J | K | Weakest → priority |
|---|--|--|--|--|--|--|--|--|--|--|--|---|
| `/` | 4 | 4 | 4 | **2** | **2** | 4 | 3 | 4 | 5 | ~ | **2** | D/E/K — fabricated code, JSON-LD, K-not-shown |
| `/network` | 4 | 5 | 4 | 4 | 3 | 4 | 4 | 5 | 5 | ~ | 3 | strongest flagship; diagram contrast |
| `/learn/what-is-adna` | 4 | 4 | 4 | 3 | **1** | 4 | **2** | 4 | 5 | ~ | 3 | **E (dead links) + G (nav)** |
| `/get-started` | 4 | 5 | 4 | 4 | 4 | 4 | 3 | **3** | 5 | ~ | 3 | H (mobile install clip) |
| `/vaults` | 4 | 4 | 3 | 4 | 3 | 5 | 4 | 4 | 4 | ~ | 3 | C (card density) + pt19 |
| `/vaults/graph` | 4 | 4 | **2** | **5** | 3 | **F:83** | 4 | **2** | 4 | ~ | 3 | C (rainbow) + H (mobile) + perf |
| `/community` | 3 | 4 | 3 | 2 | 3 | 4 | **2** | 4 | 4 | ~ | **2** | **K + G** (binding constraint) |

> Nothing is "done" (≥4 all axes, zero Crit/High) at baseline — expected. **Highest-leverage units:** `/community` (K+G), `/learn/what-is-adna` (E+G), `/` (D/E/K), `/vaults/graph` (C/H/F). J pre-supplied by RECONCILIATION; F by the frozen baseline.

## Provenance
Baseline persona sweep (4 parallel Agent lens-cells) + `RECONCILIATION.aDNA.md` (J) + frozen baseline (F) + the 8 `RESEARCH-IMPROVEMENT-PLAN.aDNA.md` pre-seeds (C-2/H-4 confirmed; "graph invisible" refuted). Personas: [[../../../../who/reviewers/reviewer_standard_archivist]], [[../../../../who/reviewers/reviewer_performance_engineer]] + the 14-reviewer/16-adopter bench (Skeptical Frontier Engineer + Funder/Program Officer as sharpened briefs). Rubrics: [[rubrics_a_k]].

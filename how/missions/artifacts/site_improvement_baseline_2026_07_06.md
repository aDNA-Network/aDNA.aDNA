---
type: reference
title: "adna.network Site-Improvement Baseline — 3-pass assessment (Operation Storyweave seed)"
status: active
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
source: "3 parallel Explore-agent passes (structure/IA/tech · design system/visual identity · consolidated review findings), 2026-07-06 session"
tags: [reference, site, adna_network, baseline, storyweave, assessment, dossier]
---

# adna.network Site-Improvement Baseline

> **Purpose.** The rich starting baseline for the planning mission [[mission_site_story_review_charter]] (Operation
> Storyweave). Captured 2026-07-06 from a 3-pass site assessment so the planning session begins from a known map
> instead of re-deriving it. **Verify against live state** at mission start (the site + inventory move between
> sessions). This is a snapshot, not live truth.

## Headline

adna.network is a **mature, heavily-reviewed, currently-deployed** Astro 6 site — **not** a rescue case. It went
through **three review campaigns in the last month** (9-axis Audit 2026-06-10 · Operation Looking Glass 2026-06-28 ·
Operation Meridian 2026-07-06) and essentially every Critical/High finding is fixed and live behind a 300+ check
Playwright gate suite. The visual direction (ADR-032, Tokyo-Night / warm Ghibli-pixel) was ratified ~a month ago.
**The opportunity is a deliberate, best-in-class refresh — sharper storytelling, higher visual/professional finish,
craft-debt cleanup — not a redesign or re-pivot.**

## §1 — Structure / IA / tech (pass 1)

- **Location + stack:** `site/` (in `aDNA.aDNA/`). Astro **6.1.3**, Vercel adapter, **static** output, **Tailwind v4**
  + custom CSS-var tokens, fonts Space Grotesk (display) / Inter (body) / JetBrains Mono. **Pure Astro** — minimal JS
  islands (DarkModeToggle, Mermaid, code-copy). Mermaid v11 for topology; `@resvg/resvg-js` pre-renders the graph SVG.
- **~130 routes** across: Home · **Learn** (What-is-aDNA + 12 Concepts + 9 Tutorials + 5 Comparisons) · **Patterns** (8)
  · **Use Cases** (6 personas) · **Vaults** (registry + ~40 detail pages + `/vaults/graph` topology) · **Community**
  (governance + 5 adopter personas) · **Reference** (8) · **Glossary** (77 terms) · persona hubs (educators/enterprise/
  researchers/startup-first-hour/compliance/security) · meta (changelog, 404, `llms.txt`, `llms-full.txt`, `rss.xml`).
- **Nav/IA:** 8-item top nav (Network·Vaults·Commons·Learn·Patterns·Use Cases·Community·Reference) + Get Started CTA +
  GitHub + dark-toggle; doc pages get a 3-column sidebar (`src/utils/navigation.ts`) + breadcrumb + prev/next + TOC.
- **Data pipeline:** `Home.aDNA` inventory YAML + vault-cards → `scripts/build_vaults_data.mjs` → committed
  `vaults.json` + `vaults_graph.mmd` + pre-rendered `vaults_graph.svg`; `build_install_truth.mjs` → `install_truth.json`
  (gate-12 asserts page↔fixture). Content collections (Zod-validated MDX): docs(77)/guides(10)/reference(10)/changelog.
- **Gates/CI:** `.github/workflows/gates.yml` (Playwright container v1.59.1) → `npx astro build` + `npm run test:gates`
  (Lighthouse budget, `@audit` full-route sweep both modes, axe a11y both modes, 320px mobile, no-JS render, link-graph,
  install-truth, contrast, public-meta, llms.txt). Component library ~20 section components + diagrams + islands.

## §2 — Design system / visual identity (pass 2)

- **Tokens:** centralized in `site/src/styles/tokens.css` (type 1.25 scale w/ `clamp()`, 4px spacing grid, radius) +
  `branding.css` (Tokyo-Night dark-first base `#1a1b26`; Purple `#9d7cd8` primary, Cyan `#7dcfff` links, warm Amber
  `#e0a84c` accent). Dark-mode-first (`.dark` default); light = opt-in; WCAG-AA both modes; scoped component styles use
  `color-mix()` for AA-safe badges.
- **Visual identity v3 (ADR-032):** warm "Ghibli-pixel" / Tokyo-Night — cozy bio-digital retro-futurism; purpose-over-
  decoration; Imagen-4 hero art (`src/assets/heroes/`), 6-icon set (`src/assets/icons/`, `?raw` + `currentColor`),
  7 OG cards. Ref doc: `src/content/reference/visual-identity-v2.mdx` (titled v3). `what/design/` briefs
  (front_page_doctrine, narrative_ethos_public_good, redesign_direction_ss_ghibli_pivot).
- **Craft-debt weak spots (design-system-hardening candidates):** hardcoded hex leaking past tokens — status badges
  (`--color-badge-*`), Mermaid themeVariables (14 hexes ×2 modes), HomeHero scrim (`#1a1b26`/`#7dcfff`); **two card
  styling tiers** (`VaultCard` vs `RegistryCard` — not harmonized); **no `/design-system` reference page**; uneven
  font-weight discipline; Mermaid runtime instability (doc-level diagrams, `getBBox()=0` bundled context); limited inline
  icon vocabulary; no image-palette build-time validation; mobile spacing gaps.
- **Ethos:** public-good tone ("language + DNA co-created by everyone; context should be shared/governed in the open");
  dual-audience (human + agent); reduced-motion default; AA non-negotiable. **Preserve this character** in any refresh.

## §3 — Consolidated review findings (pass 3) — by dimension, with status

- **Design/visual:** A-06 `/vaults/graph` craft polish (SSR/no-JS/perf part **shipped** Meridian M8; *design* polish
  deferred) · A-10 minor visual tells (deferred) · vault-status badge contrast (**fixed**) · visual-regression gate G3
  (deferred).
- **IA/nav:** A-08 8-item nav span (deferred, within ceiling) · A-11 hero ethos-vs-functional (**fixed w/ additive line**;
  the deeper "concrete-then-ethos" rework — `HomeHero.astro:71` `E5 C1` — remains) · A-12 "Lattice Protocol" gloss
  (**fixed**) · Commons orphan / repo 404s / robots.txt / "Lattice"→"Vaults" naming (**all fixed** audit P1-S1).
- **Content/messaging:** A-13 problem-statement redundancy (deferred) · A-14 glossary truncation (**fixed**) · A-16
  federation horizon caveat (**fixed**) · A-17 educator rubric (deferred, needs artifact) · A-18 node-operator bootstrap
  path (deferred) · B-01..B-05 vault-source version/repo sweep (**fixed** Meridian M4) · citation-integrity §11 fabrication
  (**fixed**) · vault-detail meta jargon leakage 18pp + CakeHealth PII (**fixed**) · install-truth single-sourced+gated
  (**fixed**).
- **Accessibility:** automated WCAG-AA **perfect**; **cognitive a11y "C+"** (jargon-dense, working-memory load,
  assumed-Claude-Code-knowledge) — **the standing open weakness** (Accessibility Auditor + Newcomer critiques).
- **Performance:** A-07 concept CLS (escalated, verify post-deploy) · A-09 best-practices 92 live (deploy-layer →
  Vitruvius) · graph LCP (addressed via SSR SVG).
- **Credibility/trust:** A-01 proof-links (**fixed** + G20 wiring) · A-15 security-disclosure (**fixed** SECURITY.md) ·
  A-19 SPDX signal (deferred) · "show don't preach" (Movement Skeptic — real subnetworks must carry the narrative).
- **SEO/data:** vault-count 54→68, install_truth regen, latent RED G20 gate (v2.3→v2.5) — **all fixed** Meridian M7.
- **Routed to other owners (NOT site-campaign scope):** install-truth regen + vault-meta + Obsidian note currency →
  **Hestia** (`Home.aDNA` inventory cadence); deploy-layer perf/BP → **Vitruvius/WebForge**.

## §4 — The 18 improvement dimensions (mission review seed)

Story & message · Visual design & craft · Professionalism & polish · Content & copy · Persona red-teaming · IA & nav ·
Onboarding & conversion · Accessibility (incl. cognitive) · Performance · Credibility & trust · SEO/meta/agent-discovery ·
Technical & design-system health · Ecosystem completeness / missing surfaces · Competitive/reference benchmarking ·
Mobile/responsive · Motion & delight · Brand & voice coherence · **Completeness-critic (anything else)**.

## §5 — Existing review machinery to orchestrate

- **16 reviewers** (`who/reviewers/`): Accessibility Auditor · Design Critic · Content Strategist · Information Architect ·
  Newcomer Stress-Tester · Visual Designer · Infographic Specialist · Anti-Bloat Editor · UX Writer · Diagram Reviewer ·
  Brand Strategist · Motion Designer · Conversion/Growth Specialist · Movement Skeptic · Standard Archivist · Performance
  Engineer. **+ sharpened briefs:** Skeptical Frontier Engineer · Funder/Program Officer.
- **16 adopters** (`who/adopters/`) — the audience counterpart (adopter ranker = the hard gate; reviewer scorecard =
  parallel; disagreement ladder in `skill_site_design_pipeline` §Stage-7).
- **11 ranker dimensions:** findability · comprehension · actionability · trust · relevance · delight (primary) +
  visual_clarity · cognitive_load · conciseness · explanation_quality (secondary) + onboarding_scent (parallel).
- **Skills:** `skill_site_design_pipeline` (8-stage vision→ship) · `skill_reference_inspection` (Stage 1) ·
  `skill_decadal_aar` (Step 4b Reviewer Lens Pass) · `skill_iii_cycle`. **Rubric:** WEBSITE.aDNA axes A–K
  (`campaign_website_adna/.../rubrics_a_k`). **Doctrine:** `what/design/front_page_doctrine` + `_reference_set`.
- **Visual design + inspection tooling** (headless-first per [[doctrine_visual_inspection]]): **Tier 0 `scripts/visual_capture.mjs`** (headless Playwright — multi-viewport both-theme screenshots + a compact report; the DEFAULT) · **Tier 1 `@playwright/mcp`** (interactive, no extension/login) · **Tier 2 Claude-in-Chrome** (escalation only — visible/authenticated browser) · **Lighthouse + axe** (wired into the harness + `site/tests/gates/`, incl. the deferred visual-regression G3 baseline) · **`frontend-design`** skill (visual direction) · **`artifact-design`** skill + the Artifact tool (HTML comps/mockups) · **WebFetch** (reference sites) · **VisualDNA** / **ComfyUI·Imagen 4** (imagery). Rule: render+screenshot every surface (headless default; **never assume Chrome**); every visual finding cites a screenshot.
- **Precedent campaigns:** `campaign_website_adna` (decades D1–D4 + E-series) · `campaign_looking_glass` · `campaign_meridian`
  · `campaign_adna_network_audit` — read their findings/AARs as prior art.

## Provenance

3 parallel Explore passes on 2026-07-06 (post-v8.6-release session), operator-directed "assess first, then propose" →
"plan a comprehensive site-improvement planning mission." Snapshot of the site at the state deployed 2026-07-06
(commit history in `campaign_meridian` + the site `gates.yml`). Re-verify vs live at mission start.

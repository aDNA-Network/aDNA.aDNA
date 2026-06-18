---
type: artifact
artifact_class: sitemap
campaign_id: campaign_website_adna
mission_id: mission_wadna_p0_recon_reconcile
title: "SITEMAP.aDNA — scored-unit inventory (pages · components · assets) + benchmark set"
created: 2026-06-18
updated: 2026-06-18
status: draft   # → operator review at Decision 2 (P0 → P1)
last_edited_by: agent_stanley
tags: [artifact, sitemap, phase0, scorecard, benchmark]
---

# SITEMAP.aDNA — Scored-Unit Inventory

> Every page, distinct component, and distinct image is a **scoring unit** on the A–K scorecard (1–5 each; **≥4 on all eleven with zero open Crit/High = done**). Baseline cells are empty here (`·`) — P1 fills them. **Flagships** are scored individually + benchmarked side-by-side; group units are scored by representative + generated-detail sample (the inherited audit floor: full-route × both-modes × generated-sample). Source of truth for counts: posture-safe build (`npx astro build`, no data regen) = **163 emitted HTML pages** from **41 source `.astro`** (28 static + 13 dynamic) + content collections + `src/data/*`.

**A–K axes:** A First-Impression Trust · B Narrative Clarity · C Visual Craft · D Demonstration Density · E Sci/Inst Credibility · F Performance (CWV) · G Accessibility+Agentic · H Responsive Integrity · I Content/Microcopy · J Standard Fidelity · K Community/Collaboration Legibility.

## 1. Flagship units (deep scoring + benchmark side-by-side)

| Unit | Route | A | B | C | D | E | F | G | H | I | J | K | Baseline note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Landing | `/` | · | · | · | · | · | · | · | · | · | · | · | LH 98/100/100/100; LCP 2.1s. Research-plan: fabricated code blocks (D/J), §5 join (K). |
| Network | `/network` | · | · | · | · | · | · | · | · | · | · | · | LH 98/100/100/100. Vault-name correctness = pt19-gated. |
| What is aDNA | `/learn/what-is-adna` | · | · | · | · | · | · | · | · | · | · | · | LH 99/100/100/100; embeds real CLAUDE.md (D exemplar). |
| Get started | `/get-started` | · | · | · | · | · | · | · | · | · | · | · | LH 98/100/100/100; install-truth fixture (gate-12). |
| Vaults registry | `/vaults` | · | · | · | · | · | · | · | · | · | · | · | LH 100/100/100/100. Card set = pt19-gated (P4 REGISTRY_SLUGS). |
| Vault graph | `/vaults/graph` | · | · | · | · | · | · | · | · | · | · | · | **LH Perf 83 (LCP 4.06s)** — laggard; "invisible to agents" (D/F/G). SSR-prerender fix data-independent; names pt19-gated. |
| Community | `/community` | · | · | · | · | · | · | · | · | · | · | · | LH 100/100/100/100. **Axis-K flagship** (added 2026-06-17). |

## 2. Page groups (representative + sample scoring; 163 total)

| Group | Route pattern | Count | Unit-class | Flagship? | Notes |
|---|---|---|---|---|---|
| Top-level | `/`, `/network`, `/commons`, `/get-started`, `/changelog`, `/404` | 6 | landing/narrative | `/`·`/network` | `/commons` = E5 surface (subsumed). |
| Personas | `/researchers` `/educators` `/enterprise` `/compliance` `/startup-first-hour` | 5 | audience funnel | — | `<PersonaPage>` thin-wrapper; B/K. |
| Learn — concepts | `/learn/concepts/*` | 12 | explainer | — | dual-audience (SO 7). |
| Learn — tutorials | `/learn/tutorials/*` | 9 | tutorial | — | teach-by-example (D/D10). |
| Learn — comparisons | `/learn/comparisons/*` | 5 | comparison | — | honest positioning (E/J). |
| Learn — hub + what-is | `/learn`, `/learn/what-is-adna` | 2 | hub/flagship | what-is | — |
| How — lattice-examples | `/how/lattice-examples/*` | 4 | example | — | verify route-name currency (W-ref). |
| How — publishing | `/how/publishing/*` | 3 | guide | — | — |
| How — workshops | `/how/workshops/*` | 4 | guide | — | — |
| How — hub | `/how` | 1 | hub | — | — |
| Patterns | `/patterns/*` | 8 | pattern | — | — |
| Reference | `/reference/*` | 10 | spec/docs | — | specification.mdx, governance-model, open-standard (J-heavy). |
| Glossary | `/glossary/*` | 25 | term | — | GlossaryTooltip source; I/J. |
| Use-cases | `/use-cases/*` | 6 | narrative | — | E/B. |
| Adopters | `/adopters/*` | 5 | persona profile | — | K (attribution). |
| Community | `/community`, `/community/*` | 5 | community | `/community` | axis-K core. |
| Vaults | `/vaults`, `/vaults/graph`, `/vaults/[slug]` | 43 | registry/detail | `/vaults`·graph | **41 detail routes carry pre-migration names + inconsistent slugs — pt19-owned** (RECONCILIATION §B). `og:description` hygiene = website-owned. |

> Coverage note (no silent caps): the frozen baseline ran Lighthouse on the **7 flagships locally**; the `@audit` sweep covered the **full route set × both modes** (114/115 pass — 1 sidebar-375px failure). **Not yet captured: the full per-route Lighthouse sweep on LOCAL for all 163, and the entire LIVE (`adna.network`) capture.** These are the bounded Step-A completion item before P1 scoring (run via the existing `audit:p1s3` harness + a Lighthouse loop) — see §5.

## 3. Component units (27)

| Subdir | Components | Flagship-critical |
|---|---|---|
| `common/` (4) | Footer, Header, SEOHead, SocialLinks | **Header** (nav/IA; gate-13), **Footer** (W5 copyright entity), SEOHead (W1/W2 JSON-LD) |
| `diagrams/` (2) | ConvergenceFunnel, TriadDiagram | both (D/teach-by-example) |
| `islands/` (2) | DarkModeToggle, MermaidDiagram | **MermaidDiagram** (drives /vaults/graph perf + agentic-readability) |
| `sections/` (19) | Breadcrumb, Callout, CardGrid, ClosingCTA, CodeBlock, GlossaryTooltip, HomeHero, MediaPlaceholder, NetworkDiagram, PersonaPage, PrevNextNav, RegistryCard, SidebarNav, SubnetworkCard, TOCPanel, TryInClaudeCode, VaultCard, VaultClassFacet, VaultRelationshipBlock | **HomeHero** (A/first-contact), **NetworkDiagram** (P3 hardcodes — pt19), **VaultCard**/**RegistryCard**/**SubnetworkCard** (D/E), **SidebarNav** (the 375px @audit failure), **CodeBlock** (fabricated-code finding), **VaultRelationshipBlock** (pt19 data) |

## 4. Asset units (70)

| Group | Count | Scoring |
|---|---|---|
| Production heroes (`assets/heroes/`) | 10 | Each a visual unit (C/A): `hero_adna_helix`, `hero_adna_network`, `hero_commons`, `hero_get_started`, `hero_how`, `hero_learn`, `hero_network`, `hero_patterns`, `hero_reference`, `hero_vaults_graph`. ADR-032 register. |
| Icons (`assets/icons/`) | 6 | community, how, learn, patterns, reference, use_cases (SVG). |
| Root | 2 | `aDNABanner.png`, `banner.jpg` — **check orphan status** (banner.jpg = old pre-reskin ref; confirm referenced or retire — I-class hygiene). |
| Candidates (`assets/heroes/candidates/`) | 45 | **R&D, unused — excluded from scoring** (not shipped). Flag for cleanup, not a unit. |

## 5. Frozen baseline (the "before" set)

Captured 2026-06-18, posture-safe (`npx astro build`, no data regen; git clean). Bundle: `site/evidence/wadna_baseline_2026_06/` (gitignored) + `evidence/p1s3/` + `evidence/audit_2026_06/`.

- **Gates:** `test:gates` **140/140 pass**; axe **0 WCAG-AA** both modes (flagships).
- **@audit sweep:** **114/115** (1 real failure: doc-sidebar section-switcher at 375px, `groupCount 2` expected ≤1).
- **Lighthouse (local, 7 flagships):** all **98–100** on Perf/A11y/BP/SEO except **`/vaults/graph` Perf 83** (LCP 4.06s, TBT 86ms). CLS 0.000 site-wide.
- **Tooling correction:** Lighthouse **13.4.0** — **no Agentic Browsing category**; axis-G "agentic" measured manually (a11y-tree, WebMCP, no-JS, `llms.txt`). Fold into P2 tooling-promotion.
- **Remaining Step-A completion (bounded):** full-route LOCAL Lighthouse (163) + the entire LIVE `adna.network` capture (Lighthouse + axe + screenshot matrix + link-check), tagged `local`|`live`. Run before P1 scoring via `audit:p1s3` + a Lighthouse loop.

## 6. Benchmark reference set (Step D)

Frontier + open-science references; each names a strength and the aDNA axis it pressures. Used for the Phase-3/4 side-by-side ("open the page next to this; name every dimension where aDNA loses").

| Reference | Strength | Pressures |
|---|---|---|
| **Anthropic** | research-citation-forward restraint; calm authority | A, E, I |
| **Stripe (docs)** | editorial type + density discipline; layered depth | C, B |
| **Linear** | motion-proves-speed; product confidence | A, C |
| **Vercel** | demonstrate-don't-claim hero (live build log) | A, D |
| **NVIDIA** | technical gravity; serious-infrastructure register | A, E |
| **ethereum.org** | governance + community legibility shown, not asserted; multi-audience | K, E, B |
| **Hugging Face** | live ecosystem/registry density; real artifacts | D, K |
| **A FAIR / data-commons portal** (e.g. re3data / a Dataverse instance) | FAIR signals, citable identifiers, reproducibility grammar | E, J |
| **Rust RFC process / W3C maturity ladder** | honest shipped/roadmap boundary; participation scent | K, J |

> Axis-K (community/collaboration legibility, the fourth axis) leans on ethereum.org · Rust-RFC · Hugging Face — exemplars that *show* a self-governed commons with real attribution + an honest open/roadmap boundary.

## Provenance
Inventory from the 2026-06-18 posture-safe build + route/component/asset enumeration (Step-A subagent). Companion: [[RECONCILIATION.aDNA]] (currency diff + two-class split). Scorecard axes + flagship set per `../../CLAUDE.md` (campaign promoter) + the 2026-06-17 axis-K amendment.

---
type: artifact
artifact_class: improvement_specs
campaign_id: campaign_website_adna
mission_id: mission_wadna_p2_design
title: "IMPROVEMENT-SPECS.aDNA — executable specs (systemic-fix package + per-finding Critical/High) from FINDINGS, credibility-first"
created: 2026-06-19
updated: 2026-06-19
status: draft   # → operator review at Decision 4 (P2 → P3)
last_edited_by: agent_rosetta
tags: [artifact, improvement_specs, phase2, design, credibility_integrity, axis_a_k, systemic]
---

# IMPROVEMENT-SPECS.aDNA — P2 design (Objectives 1 + 2)

> Converts [[FINDINGS.aDNA]] (4 Critical · 11 High · 9 Medium · 10 systemic patterns) into an **executable** plan. **Credibility-integrity first** ([[mission_wadna_p2_design]] Decision-3 direction). **Planning artifact — ZERO site changes here; every fix lands in P3.** Read with [[TOOLING-PROMOTION.aDNA]] (the gates that prevent regression) + [[DECADAL-PLAN.aDNA]] (the order they ship in). Rubrics: [[rubrics_a_k]]. Owner-class + the two-class pt19 split are inherited from [[RECONCILIATION.aDNA]].

## How to read a spec

Each per-finding spec carries: **the decisive change · the axis it moves · baseline → target (1–5; done = ≥4) · the verification that proves it · owner-class · the exact site source files.** A spec is a *decisive stroke, not a decorative flourish* (campaign doctrine #2). Targets are the FINDINGS baseline lifted to the done-definition (≥4 all axes; CWV in the Good band).

> **Source fidelity (verified 2026-06-19):** every line ref below was re-confirmed against live `site/src` this session — source is unchanged since the P1 sweep (P1 guardrail held: no `site/` writes). Two refs are *richer* than FINDINGS recorded — noted inline (C-1 = 7 sitewide occurrences incl. a 2nd-order `branding.json` drift; C-3 = 3 JSON-LD builders, not 1).

---

## Part 1 — Systemic-fix package (fix once, lift every page)

> Resolve the **systemic patterns** as single coordinated changes — they lift every page at once and are the dependency-roots for the per-finding specs in Part 2. Ordered by leverage. Medium findings are folded into their parent pattern (no separate Medium specs — exit-gate requires specs for Critical/High only).

### SP-1 — Credibility-integrity: single canonical-source + claims-traceable pass  ·  axis E·J·D  ·  **(THE headline; root of C-1/C-2/C-3/C-4/M-1/M-2)**
**Root (FINDINGS systemic #1):** claims not verified against the real graph — dead links, fabricated artifacts, wrong publisher, false "data-driven," drifted citations.
**Coordinated change (3 moves):**
1. **One canonical-source module.** Promote the values that must never drift to a single typed source and import everywhere: repo URLs from `src/data/install_truth.json` (`canonical_repo_https` = `https://github.com/aDNA-Network/aDNA` already exists), counts/version from `src/data/standard.ts` (`STANDARD_VERSION`/`ENTITY_TYPE_COUNT`), brand/publisher entity from one constant. Add a thin `src/data/canonical.ts` (or extend `standard.ts`) that re-exports the repo/brand constants so components never inline a literal.
2. **Sweep every hardcoded occurrence** of repo URL / publisher / count / version to the canonical source (the per-finding specs C-3, M-2, and the `branding.json:26` drift are instances).
3. **Claims-traceable pass + gates.** Every factual/inspectable claim must resolve to a real artifact or real datum. Backed by the link-check, single-source-lint, public-meta-sanitizer, and JSON-LD gates in [[TOOLING-PROMOTION.aDNA]] (SP-1 ↔ gates G4/G5/G6/G7).
**Verification:** `grep` finds zero repo/publisher/version/count literals outside the canonical source; single-source-lint gate green; link-check gate green (all credibility-surface links 200 unauthenticated).
**Lifts:** `/` `/learn/what-is-adna` `/network` + sitewide `<head>` from E2–E3 → E4+, J → 4+.

### SP-2 — Nav-serialization / docs-layout DOM order  ·  axis G  ·  (root of H-1/H-2 + @audit 375px + sidebar MENU)
**Coordinated change (one structural fix across every docs page):**
- In `src/layouts/DocumentationLayout.astro` reorder DOM to **`<article>` (with `<h1>`) before the `<aside>` sidebars**; the layout is already CSS grid (`.doc-layout`), so preserve the visual column order with `order:` / `grid-template-areas` (no visual change).
- In `src/components/sections/SidebarNav.astro` demote the group label off `<h3>` (line 67) to a non-heading styled element (keeps the uppercase look; removes the h1-not-first violation) and **scope/cap the full-tree fallback** (line 44 `: navigation`) so a page not in the nav never dumps ~100 links.
- Fix the skip-link target so it lands on `<article>`, not above the sidebar.
**Verification:** SR/agent reading order = breadcrumb → h1 → content before nav; axe heading-order clean; `@audit` 375px sidebar check passes; `<a>`-before-`<h1>` count on `/community` drops from ~101 to ≤ (switcher + 1).
**Lifts:** all docs-layout pages (`/learn/*`, `/community`, …) G2–G3 → G4+.

### SP-3 — Hardcoded-light-hex → token + static-contrast gate  ·  axis C·G  ·  (root of M-4, recurring class)
Replace hardcoded light-mode hex (`[slug].astro:123–126` pills; `VaultClassFacet.astro:11–12` `#f0f0f0`/`#333`/off-palette `#4a86e8`) with theme tokens (`--color-*`); add the static `var()`/contrast gate (G8 in [[TOOLING-PROMOTION.aDNA]], carries the gate-14 idea). **Verification:** axe clean both modes on the affected components; no literal hex outside `tokens.css`/`branding.json`.

### SP-4 — Underfilled-container / dead-space composition  ·  axis C·D  ·  (root of H-4, H-6, H-7, thin cards)
A density pass to doctrine §6 "≥60% useful space": definition-list/card composition for `/vaults/[slug]` (H-7), ledger-pattern fill for `/community` (H-4), and tighter section framing for the diagram (H-6). One shared composition approach (max-width + intentional fill + relationship-block primacy), not per-page hacks. **Verification:** persona density pass; no >40% empty viewport on the named pages at desktop + mobile.

### SP-5 — Categorical-rainbow data-viz → single-hue ramp / shape-encoding  ·  axis C  ·  (root of H-5, H-9 color)
Replace the 9–14 unmapped Mermaid class-fills (`vaults_graph.mmd` + `graph.astro`) with a single-hue tonal ramp or shape/role encoding; reserve hue for ≤2 brand accents (doctrine #2). **Verification:** color-count lint (G9); ≤2 accent hues on `/vaults/graph`; persona visual pass.

### SP-6 — Agentic-readiness  ·  axis G(agentic)  ·  (root of H-3, M-2, M-3)
Add `public/llms.txt` + `public/llms-full.txt` (H-3); add JSON-LD to `/vaults/graph` (M-3); single-source the structured data so `<meta>`/og/JSON-LD agree with the live page (M-2, via SP-1). **Preserve** the refuted-as-fine `/vaults/graph` no-JS node-twin + `<noscript>` Mermaid fallback. **Verification:** `llms.txt` presence+freshness gate (G10); no-JS reachability gate (G11) still green; graph emits valid JSON-LD.

### SP-7 — Uniform 44px touch targets  ·  axis H·G  ·  (M-5)
Bring the header `DarkModeToggle` + github link to the 44px min already used elsewhere (mobile-menu, copy-button). **Verification:** target-size check at all viewports.

### SP-8 — pt19-owned currency (verify-after, do not fix)  ·  axis D·J  ·  (H-10 + RECONCILIATION P1–P5)
**No hand-edit. No `sync:vaults`. No `vaults.json` edits.** Spec'd as a single verify-after-pt19 pass (see C-4 + the pt19 row below): when Production Tidy's pt19 regen lands and pings the campaign, re-run `build_vaults_data.mjs`, verify axis-J vault names/count/edges, then close the data-coupled units. Preserve the honest-topology scaffolding (named unlinked nodes; "honest topology, not missing data").

### SP-9 — Deploy gap (coordinate at the ship gate / keystone)  ·  (M-6, M-8, MENU-1, undeployed c162–c165)
Not a source fix — one coordinated deploy at the P3 ship gate / program keystone clears `/commons` 404, live BP 92, the undeployed cycles, and MENU-1. Tracked as a deploy-class item; **commit-only until the gate** (campaign Standing Order #8).

### SP-10 — Tooling-promotion → see [[TOOLING-PROMOTION.aDNA]]
The 8 additive gates (3 promoted + 5 new) are specified in the companion artifact; cross-referenced per spec above.

---

## Part 2 — Per-finding specs (Critical → High), credibility-first

### CRITICAL — the credibility-integrity cluster (ship first; Decade 1)

#### C-1 — Dead proof-links → establish a real public inspectable home, then repoint + gate
- **Unit / axis / files:** `/learn/what-is-adna` (`src/pages/learn/what-is-adna.astro` — anchors at `:72, :101, :103, :104, :105, :106`; **7 occurrences sitewide** of the 404 pattern, grep-confirmed). Axis **E** (baseline **1** → target **4**).
- **Root cause (verified live 2026-06-19, deeper than a string typo):** the page stakes "this IS a real, inspectable vault" on links to `github.com/aDNA-Network/aDNA.aDNA` → **HTTP 404** (the vault's own repo origin exists but is not publicly resolving — private/unpushed). The clone-and-run image `github.com/aDNA-Network/aDNA` → **200**, but `…/aDNA/tree/main/aDNA.aDNA` → **404** (the image gitignores `*.aDNA/`). **There is currently no public URL where the aDNA.aDNA vault can be browsed.** A repoint alone cannot fix this.
- **The decisive change (two-stage, per Decision-3 #4):**
  - **Stage 1 (now — "real"):** establish a genuinely public, resolving inspect location and point the proof-links at paths verified to 200. Cleanest option: **publish `aDNA-Network/aDNA.aDNA`** (make public + push) → the existing links resolve with at most a branch/path correction. Fallback if publishing the full vault is undesired: point each proof at a *resolving* path inside the public `aDNA-Network/aDNA` image (e.g. real `.adna/` template files) — a weaker but honest proof. **Either way, no link ships until it returns 200 unauthenticated.**
  - **Stage 2 (keystone):** upgrade the demonstration to point at **Hearthstone's polished, published base** ([[campaign_operation_adna]] Track B; keystone condition #1). Credibility goes *fixed → exemplary*.
- **Decision-4 flag (operator):** Stage 1 needs a publish/visibility decision (publishing a vault is outward-facing — Standing Rule on remotes + exposes internal campaign state). **Candidate new cross-vault seam:** "aDNA.aDNA public inspectability" (owner operator/Berthier·aDNALabs). Surface at Decision 4; not a unilateral site edit.
- **Verification:** link-check gate (G6) asserts every credibility-surface link → 200 to an unauthenticated client; manual skeptic click-through resolves to the real artifact named in the link text.

#### C-2 — Fabricated marquee code → real excerpts from this vault
- **Unit / axis / files:** `/` landing — `src/data/home.ts` (`steps[].demo`, lines `47–55` `my-project/` tree, `66–75` `climate-pipeline` CLAUDE.md, `87–96` `mission_schema_v2.md`). Axis **D·E** (D **2** → **4**, E **2** → **4**).
- **Change:** replace the three invented demos with **real excerpts from this vault** (confirmed real, present this session): the head of a real `CLAUDE.md` (e.g. `aDNA.aDNA/CLAUDE.md` opening — the `what-is-adna` page already shows a real one at `:73–93`, reuse it), a real `how/campaigns/` mission frontmatter+objective, and the real triad tree. Keep the three-step narrative; swap only the content. **Independent of C-1's repo-publish** (showing real *content* needs no public repo); the optional "see it on GitHub" link rides C-1's resolved location.
- **Verification:** every file/path rendered in `home.ts` exists in the vault (grep each path → present); citation-check gate (part of G6); persona "is this real?" pass on `/`.

#### C-3 — JSON-LD publisher drift → single canonical source (3 builders + branding.json)
- **Unit / axis / files:** sitewide `<head>` — `src/utils/seo.ts` publisher `name:'Lattice Protocol'` + `url:'https://github.com/LatticeProtocol'` in **three** builders: `buildTechArticleJsonLD` (`:46–48`), `buildWebSiteJsonLD` (`:60–63`, name only), `buildHowToJsonLD` (`:97–100`). **Plus a 2nd-order drift surfaced in P2:** `branding.json:26` `"github":"https://github.com/LatticeProtocol/Agentic-DNA"` (the header/footer GitHub link → legacy org+repo). Axis **E·J** (→ 4+).
- **Change:** route all three builders + `branding.json` through the SP-1 canonical source → repo `https://github.com/aDNA-Network/aDNA`; publisher `name` → the confirmed brand entity (resolve W4/W5: "aDNA" / "aDNA Network" — confirm at Decision 4) **or drop** the publisher org if no confirmed legal entity. One constant, imported.
- **Verification:** single-source-lint gate (G5) — build fails on any repo/publisher literal outside canonical; rendered JSON-LD on 3 representative routes shows the canonical publisher+repo; public-meta-sanitizer (G7) clean.

#### C-4 — NetworkDiagram false "data-driven" → actually drive from vaults.json
- **Unit / axis / files:** `/` · `/network` — `src/components/sections/NetworkDiagram.astro`. Docstring `:8` claims "names come from `data/vaults.json`"; `nodes[]` `:17–24` **hardcodes** labels (`SiteForge`, `III`, `RareHarness`, `WGA`, `Rare Archive`, `Home`) and the `<desc>` `:36` repeats them. (`SiteForge` is also a pre-rename label → pt19-coupled.) Axis **D·E** (D **2** → **4**).
- **Change:** drive `nodes[]` labels from `data/vaults.json` (one representative real vault per category, selected by data, not literals) so the diagram is genuinely data-driven and **inherits pt19's corrected names**; update `<desc>` to derive from the same source. Preserve the honest hub-and-spoke topology (E1 Gap #6) + the no-JS-safe compose motion. **Do not hand-edit labels** (that would re-introduce the drift and collide with pt19).
- **Verification:** removing a vault from `vaults.json` changes the diagram (data-driven proof); no vault-name literals remain in the component; verify-after-pt19 that rendered labels = keeper-set names.

> **Cross-cut:** C-1+C-2+C-3+C-4 all resolve under SP-1 (the canonical source + claims-traceable pass). Decade 1 ships them together with gates G5/G6/G7 so the class cannot regress.

### HIGH — systemic-or-high-reach (Decades 2+)

#### H-1 — Nav-serialization (the single highest-leverage fix) — **see SP-2**
- **Files:** `src/layouts/DocumentationLayout.astro` (DOM reorder, grid `order`) + `src/components/sections/SidebarNav.astro:44` (cap fallback). Axis **G** (`/learn/what-is-adna` G **2** → **4**; `/community` G **2** → **4**). **Verification:** SP-2.

#### H-2 — Heading hierarchy — **see SP-2**
- **Files:** `SidebarNav.astro:67` (`<h3>` group label → non-heading). Axis **G**. Bundled with H-1 (one PR). **Verification:** axe heading-order clean; h1 is first heading on every docs page.

#### H-3 — No `llms.txt` — **see SP-6**
- **Files:** `public/llms.txt` + `public/llms-full.txt` (new). Axis **G(agentic)**. Content: what-is-aDNA, canonical install (from `install_truth.json`), route map, spec + graph links. **Verification:** `llms.txt` presence+freshness gate (G10); manual agent fetch.

#### H-4 — `/community` axis-K binding constraint — **see SP-4 + SP-1**
- **Files:** `src/pages/community.astro` (+ data from `who/community/`). Axis **K·C·D** (K **2** → **4**). **Change:** port the `/commons` "today"-ledger pattern — named stewards, real `last_edited_by` attribution, a real contribution/AAR example, honest horizon (only real data, per axis-K honesty line). **Verification:** demonstration-density count (shown:claimed ≥ parity); persona (Movement Skeptic + Funder) pass; honesty-line lint.

#### H-5 — Categorical-rainbow `/vaults/graph` — **see SP-5**
- **Files:** `src/data/vaults_graph.mmd` + `src/pages/vaults/graph.astro`. Axis **C** (**2** → **4**). **Verification:** color-count lint (G9); ≤2 accents.

#### H-6 — Thesis-diagram whispers (contrast + scale)
- **Files:** `NetworkDiagram.astro` styles (`:91–106` edge opacity 0.5 / halo 0.12; section padding). Axis **C·D** (→ 4+). **Change:** raise edge/node contrast against `#1a1b26`; scale up; tighten section padding so the marquee fills its frame (SP-4). **Verification:** axe contrast (non-text) ≥ 3:1; persona "the proof reads at a glance" pass.

#### H-7 — `/vaults/[slug]` no hierarchy (41 routes)
- **Files:** `src/pages/vaults/[slug].astro`. Axis **C** (**3** → **4**; high reach). **Change (SP-4):** definition-list/card grid; separate metadata from prose; give the relationship block primacy. **Verification:** persona scan ≤ 5s to find class/relationships; consistent across a sample of the 41.

#### H-8 — Install command clips at 390px
- **Files:** `/get-started` install command block (`src/pages/get-started.astro`). Axis **H** (**3** → **4**; credibility-critical command). **Change:** soft-wrap long commands or add a visible scroll affordance; full readability 320–390px. **Verification:** screenshot matrix 320/360/390px; full command visible.

#### H-9 — `/vaults/graph` illegible at 390px — **see SP-5/SP-4**
- **Files:** `src/pages/vaults/graph.astro` (mobile view). Axis **H** (**2** → **4**). **Change:** mobile-specific view (node-list primary on small screens) or zoom/pan; the node-twin already saves function — this saves the visual experience. **Verification:** screenshot matrix; usable graph at 390px.

#### H-10 — pt19-owned currency — **verify-after-pt19 only (SP-8)**
- **Files:** `data/vaults.json`, `/vaults`, `/vaults/graph`, `/network`, `/` registry, `index.astro:19–22` REGISTRY_SLUGS. Axis **D·J**. **Owner: pt19.** **No hand-edit, no `sync:vaults`.** Spec = the verify-after pass when pt19 lands. **Verification:** post-pt19 `build_vaults_data.mjs` re-run + axis-J name/count/edge check; preserve honest-topology scaffolding.

#### H-11 — `/vaults/graph` performance (SSR-prerender)
- **Files:** `src/pages/vaults/graph.astro` (Mermaid client-render; Perf 83 / LCP 4.06s local). Axis **F** (→ CWV Good). **Change:** SSR-prerender the graph (also strengthens the agentic story); defer Mermaid hydration. **Verification:** Lighthouse budget gate (G1) — LCP < 2.5s, Perf ≥ 90 local; no-JS reachability still green.

---

## Medium dispositions (folded — no separate specs; exit-gate = Crit/High only)

| Medium | Folds into | Note |
|---|---|---|
| M-1 §11 citation drift | SP-1 / C-cluster | drop the §11 "Federation" attribution; keep `lattice://` as convention (closes RECONCILIATION W6) |
| M-2 home `WebSite` JSON-LD stale | SP-1 / C-3 | single-sourced structured data + deploy |
| M-3 `/vaults/graph` zero JSON-LD | SP-6 | add graph JSON-LD |
| M-4 hardcoded light hex | SP-3 | token sweep + contrast gate |
| M-5 < 44px touch targets | SP-7 | uniform 44px |
| M-6 live BP 92 | SP-9 | deploy-layer (headers/source-maps) |
| M-7 concept-template CLS 0.156 | SP-9 + craft | real layout shift; fix template reserve-space, verify CWV |
| M-8 `/commons` 404 live | SP-9 | deploy gap |
| M-9 footer `© Lattice Protocol` | SP-1 | brand-entity → confirm at Decision 4 (W5) |

LOW/WATCH (C-7 hero length · C-8 `transition:all` · C-9 pill drift · A11Y-DUP · MENU-1 · sidebar groupCount scoping) — held; MENU-1 + A11Y-DUP ride SP-2/SP-9.

---

## Coverage matrix (exit-gate: every Critical/High has a spec)

| Finding | Spec | Systemic root | Decade | Owner |
|---|---|---|---|---|
| C-1 dead proof-links | C-1 | SP-1 | 1 | website (+ publish decision) |
| C-2 fabricated code | C-2 | SP-1 | 1 | website |
| C-3 JSON-LD publisher | C-3 | SP-1 | 1 | website |
| C-4 false data-driven | C-4 | SP-1 | 1 | website (+ pt19 names) |
| H-1 nav-serialization | H-1/SP-2 | SP-2 | 2 | website |
| H-2 heading hierarchy | H-2/SP-2 | SP-2 | 2 | website |
| H-3 llms.txt | H-3/SP-6 | SP-6 | 3 | website |
| H-4 /community axis-K | H-4 | SP-4+SP-1 | 3 | website |
| H-5 rainbow viz | H-5/SP-5 | SP-5 | 4 | website |
| H-6 diagram contrast | H-6 | SP-4 | 4 | website |
| H-7 vault-detail hierarchy | H-7 | SP-4 | 4 | website |
| H-8 mobile install clip | H-8 | — | 3 | website |
| H-9 mobile graph | H-9 | SP-5/SP-4 | 4 | website |
| H-10 stale currency | H-10/SP-8 | SP-8 | verify-after-pt19 | **pt19** |
| H-11 graph perf | H-11 | — | 4 | website |

All 4 Critical + 11 High covered. Sequencing + per-unit done-definition: [[DECADAL-PLAN.aDNA]]. Gates: [[TOOLING-PROMOTION.aDNA]].

---
type: artifact
artifact_class: tooling_promotion
campaign_id: campaign_website_adna
mission_id: mission_wadna_p2_design
title: "TOOLING-PROMOTION.aDNA — additive build/CI gates (3 promoted + 5 new required + 3 additional) to make the floor catch credibility-integrity regressions"
created: 2026-06-19
updated: 2026-06-19
status: draft   # → operator review at Decision 4 (P2 → P3)
last_edited_by: agent_rosetta
tags: [artifact, tooling_promotion, phase2, design, gates, ci, credibility_integrity, agentic]
---

# TOOLING-PROMOTION.aDNA — P2 design (Objective 3)

> **Additive gates only** — they raise the automated *floor* so the credibility-integrity class (and the other systemic patterns) cannot silently regress. The floor catches ~30–40% of defects (mechanical); the persona ceiling stays mandatory (doctrine #4). **Planning artifact — no gates are wired here; P3 implements them.** Gate IDs (G1–G11) are the authoritative reference for [[IMPROVEMENT-SPECS.aDNA]]. Source: [[FINDINGS.aDNA]] §Systemic #10 + `RESEARCH-IMPROVEMENT-PLAN.aDNA` §4.4.

## Standing finding this operationalizes
*Credibility leakage — not performance — is the failure mode for a young standard* (campaign CLAUDE.md, inherited from the network audit). Private state in public meta, a named client, 404 links, a broken install flow **all sat behind green Lighthouse 100s.** These gates make the floor see what Lighthouse can't.

## Gate inventory

**Exit-gate required (8)** = the P2 mission exit-gate set (3 promoted + 5 new). **Additional (3)** = systemic-pattern gates (SP-3/SP-5) + FINDINGS #10; recommended, not blocking the P2 gate.

| Gate | Name | Class | Status today | Guards |
|------|------|-------|--------------|--------|
| **G1** | Lighthouse budget gate | promoted (required) | archive-only | F (CWV); H-11, M-7 |
| **G2** | `@audit` regression gate | promoted (required) | findings-only sweep | G/H regressions sitewide |
| **G3** | Visual-regression baseline | promoted (required) | none (new baseline) | C/H drift per page×viewport |
| **G4** | JSON-LD validity + canonical | additional | none | E·J; C-3, M-2, M-3 |
| **G5** | Single-source lint | new (required) | none | E·J; C-3, M-9, version/count drift |
| **G6** | Link-graph + host/canonical | new (required) | none | E; C-1, C-2(cite), dead links |
| **G7** | Public-meta sanitizer | new (required) | none | E·I; private-state-in-public-meta |
| **G8** | Static `var()` + contrast | additional | none (carries "gate-14") | C·G; M-4, SP-3 |
| **G9** | Categorical-color count lint | additional | none | C; H-5, SP-5 |
| **G10** | `llms.txt` presence + freshness | new (required) | none | G(agentic); H-3 |
| **G11** | No-JS reachability | new (required) | none | G(agentic); preserves graph node-twin |

---

## Promoted gates (already partly exist — graduate to blocking)

### G1 — Lighthouse budget gate  ·  required
- **Checks:** per-route CWV as **numbers** (LCP < 2.5s · INP/TBT-proxy < 200ms · CLS < 0.1) + category floors (Perf/A11y/BP/SEO). **Agentic Browsing captured manually** (LH 13.4.0 has no Agentic-Browsing category — see note).
- **Where:** `site/` CI; archive the LH JSON, assert thresholds in `test:gates`.
- **Pass/fail:** fail the build if any flagship route breaches a threshold (not the composite score).
- **Guards:** H-11 (`/vaults/graph` LCP 4.06s), M-7 (concept CLS 0.156).

### G2 — `@audit` regression gate  ·  required
- **Checks:** the existing full-route × both-modes `@audit` sweep (`audit-p1s3-sweep.spec.ts`) — promote from findings-only to **blocking** in `test:gates`.
- **Pass/fail:** any new axe violation on any route (light or dark) fails the build.
- **Guards:** the nav-serialization class (H-1/H-2), hardcoded-hex (M-4), the 375px sidebar.

### G3 — Visual-regression baseline  ·  required
- **Checks:** **semantic** diff (not naive pixel) per page × viewport, so OS font rendering doesn't generate noise.
- **Where:** Playwright screenshot matrix → committed baselines; diff on PR.
- **Pass/fail:** unreviewed visual delta fails; intentional changes update the baseline in the same PR.
- **Guards:** craft/responsive regressions (C/H) during the decade loops.

---

## New required gates (the credibility-integrity floor)

### G5 — Single-source lint  ·  required  ·  (C-3, SP-1)
- **Checks:** no hardcoded **count / version / repo-URL / publisher** literal anywhere outside its canonical source (`standard.ts` for count/version; `install_truth.json` `canonical_repo_https` for repo; one brand constant for publisher).
- **Implementation:** a `test:gates` script greps `src/**` for the banned literal patterns (`github.com/(?!aDNA-Network/aDNA\b)`, `Lattice Protocol` as publisher, bare version/count digits in JSON-LD/meta) and fails on any hit outside the allowlisted canonical files.
- **Pass/fail:** any drift literal → build fails with the file:line.
- **Guards:** C-3 (3 `seo.ts` builders + `branding.json:26`), M-9, future count/version drift. **This is the gate that keeps SP-1 from re-rotting.**

### G6 — Link-graph + host/canonical check  ·  required  ·  (C-1, C-2-cite)
- **Checks:** (a) crawl all internal + **credibility-surface external** links; flag 404/301; (b) assert the served host == the declared `<link rel=canonical>` host; (c) **citation check** — every on-page path/filename claimed as "real" resolves to a real artifact (vault path exists, or the external URL is 200 **unauthenticated**).
- **Implementation:** build-time crawl of the dist + a curated allowlist of external credibility links (the proof-links) hit with no auth token; vault-path assertions grep the repo.
- **Pass/fail:** any dead proof-link or unresolvable cited artifact fails.
- **Guards:** C-1 (the 7 `aDNA-Network/aDNA.aDNA` 404s — must 200 before ship), C-2 (cited files exist), future link rot.
- **Note:** this gate is why C-1 needs a *real public inspectable home* first (a 404 can't be linted green) — see [[IMPROVEMENT-SPECS.aDNA]] C-1.

### G7 — Public-meta sanitizer  ·  required  ·  (the standing-finding gate)
- **Checks:** no internal codename / phase jargon / private-state in any public `<meta>`, `og:*`, `twitter:*`, or JSON-LD (e.g. campaign IDs, "pt19", "Decision N", persona names, embargoed partner names).
- **Implementation:** a banned-token list (regex) run over the rendered `<head>` of every route.
- **Pass/fail:** any banned token in public meta fails.
- **Guards:** the exact failure mode the network audit found (private state behind green 100s); E·I.

### G10 — `llms.txt` presence + freshness  ·  required  ·  (H-3)
- **Checks:** `public/llms.txt` (+ `llms-full.txt`) exists, is non-stale (key facts — install command, version, route map — match `install_truth.json`/`standard.ts`), and is served at `/llms.txt` (200).
- **Pass/fail:** missing or drifted llms.txt fails.
- **Guards:** H-3; the "practice what it preaches" agentic gap.

### G11 — No-JS reachability  ·  required  ·  (preserves a strength)
- **Checks:** flagship content renders without JS — assert with JS disabled that `/vaults/graph` topology (the node-twin `<a href="/vaults/{slug}/">` list + `<noscript>` Mermaid) and the docs content are present in the served HTML.
- **Implementation:** Playwright context with `javaScriptEnabled:false`; assert the node-twin anchors + h1 + main content exist.
- **Pass/fail:** flagship content absent without JS fails.
- **Guards:** locks in the **refuted-as-fine** graph node-twin so a future "optimization" can't silently break agent-readability.

---

## Additional gates (systemic-pattern hardening; recommended)

### G4 — JSON-LD validity + canonical  ·  additional  ·  (C-3, M-2, M-3)
- **Checks:** every emitted JSON-LD block is schema-valid **and** its publisher/repo/url fields equal the canonical source; flag routes that should emit JSON-LD but don't (`/vaults/graph` = M-3).
- **Pass/fail:** invalid or drifted structured data fails. Overlaps G5/G7; keep as a focused structured-data check.

### G8 — Static `var()` + contrast  ·  additional  ·  (M-4, SP-3; carries "gate-14")
- **Checks:** (a) every CSS custom property referenced via `var()` is defined (the c165 root-cause: undefined `var()` silently computes to 0/invalid); (b) token color pairs meet WCAG AA in **both** themes via static resolution (catches what axe misses when an element is only visible in one mode).
- **Pass/fail:** undefined `var()` or sub-AA token pair fails.
- **Guards:** M-4 + the recurring hardcoded-hex/dark-mode class.

### G9 — Categorical-color count lint  ·  additional  ·  (H-5, SP-5)
- **Checks:** data-viz (Mermaid `.mmd` + graph) uses ≤ 2 accent hues (single-hue tonal ramp / shape-encoding allowed); fail on an unmapped categorical rainbow.
- **Pass/fail:** > 2 distinct accent hues in a viz fails.
- **Guards:** H-5; the ≤2-accent doctrine.

> **Banned-vocabulary lint** (FINDINGS #10) already runs as a manual scan and is clean; promote to `test:gates` opportunistically alongside G7 (shares the regex-over-output machinery). Not numbered — folds into the I-axis content pass.

---

## Sequencing (gates land with the decade they guard — detail in [[DECADAL-PLAN.aDNA]])
- **Decade 1 (credibility):** G5, G6, G7 (+ G4) — wired *with* C-1–C-4 so the fixes are regression-proof from day one.
- **Decade 2 (nav):** G2 promoted to blocking (catches the H-1/H-2 class).
- **Decade 3 (agentic/community):** G10, G11.
- **Decade 4 (craft/perf):** G1 budget, G3 visual-regression, G8, G9.
- **All-decades floor:** G2 + axe both-modes every run (already).

## Exit-gate coverage (P2 mission line 51)
Lighthouse gate **G1** · `@audit` regression **G2** · visual-regression **G3** · single-source lint **G5** · public-meta sanitizer **G7** · link-graph/canonical **G6** · no-JS reachability **G11** · `llms.txt` **G10** = **8/8 specified.** (+ G4/G8/G9 additional.)

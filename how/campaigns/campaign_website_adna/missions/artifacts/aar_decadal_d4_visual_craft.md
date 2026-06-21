---
type: artifact
artifact_class: decadal_aar
campaign_id: campaign_website_adna
mission_id: mission_wadna_p3_iterate
decade: D4
title: "Decadal AAR — D4 Visual craft · composition · responsive · perf (SP-3/4/5/7 → H-5/6/7/9/11 + M-4/5/7; gates G1/G9; G3 deferred)"
created: 2026-06-21
updated: 2026-06-21
status: complete
verdict: GO (pending operator decade-gate)
last_edited_by: agent_rosetta
tags: [artifact, decadal_aar, phase3, decade_4, visual_craft, composition, responsive, performance, axis_c, axis_f, axis_g, axis_h, cls, rlp]
---

# Decadal AAR — D4 Visual craft · composition · responsive · perf

> Fourth and final decade of WEBSITE.aDNA P3 (`mission_wadna_p3_iterate`), opened on operator GO at the D3 decade-gate (2026-06-19). Brings visual craft, composition density, responsive integrity, and Core Web Vitals on the data-viz + vault-detail surfaces to the bar. **Commit-only.** Spec: [[IMPROVEMENT-SPECS.aDNA]] SP-3/4/5/7 → H-5/6/7/9/11 (+ M-4/5/7); gates [[TOOLING-PROMOTION.aDNA]] G1/G3/G8/G9; done-definition [[DECADAL-PLAN.aDNA]] §Per-unit.

## 1. Verdict — **GO** (pending operator decade-gate)

All D4 decade-exit criteria met: CWV in the Good band on the flagships (measured as numbers, not composites), ≤2 accents on the data-viz, composition density on the vault-detail surface raised to doctrine, axe clean in **both** modes sitewide. Rotated panel (independent of the fix author) holds every D4 axis ≥4: **C 4 · F 5 · G 5 · H 4.5**. Two measure-first reconciliations (C5 no-SSR, C6 no-rebuild) kept the decade honest — the prescribed fixes were unnecessary because the goal was already met. Holds at the decade-AAR human gate — operator GO required before P3→P4.

## 2. Scope — units

`/vaults/graph` (colour · mobile · perf) · `/vaults/[slug]` × 41 (hierarchy · badge tokens) · `/` NetworkDiagram (edge contrast) · header (touch targets) · `/learn/concepts/*` template (CLS).

## 3. Dispositions

| # | Finding | Disposition (shipped) | Verification |
|---|---------|----------------------|--------------|
| **M-4 / SP-3** | `/vaults/[slug]` state-badge hardcoded light hex (C1, `9bb3ea8`) | Tokenized → mode-independent `--color-badge-*`; pure refactor (identical computed colours). | No raw badge hex remains; tokens resolve in dist; build clean. |
| **H-6 / SP-4** | `/` NetworkDiagram spokes "whispering" — sub-contrast edges (C2, `ac6bf0c`) | `.nd-edge` stroke-opacity 0.5→**0.8** + width 1.75→**2**; halo 0.12→**0.18** / 4→**5**. Mode-aware `--color-primary` (#6d4bb8 light / #9d7cd8 dark) → ~4:1 non-text contrast each mode. | **AAR re-audit (C2 deferred its axe/visual pass here):** gate-4 homepage a11y **green in both modes** (281/281 clean); edges clear ≥3:1; reads at a glance. ✅ discharged. |
| **H-5 / SP-5** | `/vaults/graph` categorical-rainbow (15-hue) viz (C3, `fd13a27`) | Option A — **1 neutral fill + cyan (standard) + grey (retired)**; class encoded as label + on-page census, not hue. | G9 lint (`gate-18`) enforces ≤2 accent hues in `vaults_graph.mmd`; legend = parsed classDefs (never drifts). |
| **M-5 / SP-7** | < 44px touch targets (header toggle/github) (C3) | Uniform **44px** across targets. | gate-9 + manual; 44px held on graph mobile copy-affordances too. |
| **H-7 / SP-4** | `/vaults/[slug]` no hierarchy across 41 routes (C4, `36054d6`) | Spec-sheet `<dl>` + relationship primacy + note-lede; two-column ≥900px; III re-iter fixed H1 size + mid-word label wrap + sparse-templated lede. | Design Critic **3→4** · IA **5** · Newcomer **4**. Composition density ≥ doctrine §6 (useful spec-sheet, no filler). |
| **H-9 / SP-5+4** | `/vaults/graph` illegible at 390px (C5, `da5517a`) | Node-list **promoted to primary view ≤640px** (one DOM node, two CSS states — no SR double-list); cramped SVG hidden page-scoped; class-grouped; `?focus=` highlights the list row on mobile. | Newcomer H **4.5** · Accessibility Auditor G+H **5/5**; gate-9 (320/375 no overflow). |
| **H-11** | `/vaults/graph` perf (C5, `da5517a`) | **Confirmed Good band, no SSR** — LCP 446ms · CLS 0.0001 · Perf 100; Mermaid is a ~45KB below-the-fold code-split import. SSR-prerender rejected as over-engineering (goal already met). | G1 (`gate-19`) locks it from a committed slim fixture. |
| **M-7** | `/learn/concepts/*` template CLS 0.156 (C6, `c881dbd`) | **Reconciled — does not reproduce.** Measured CLS ~0.03 desktop **and** mobile (knowledge-graph 0.0299/0.0314; agentic-literacy 0.0290/0.0359). The 0.156 was heading-FOUT, already killed by BaseLayout's Space-Grotesk 400/700 preload (`BaseLayout.astro:48-51`); code font already `font-display:optional`. **Confirm-and-gate, no rebuild** (restraint; cf. C5). | G1 extended to `/learn/concepts/knowledge-graph` (the worst-case 2-fence page); chasing the residual 0.03 via display-font `font-display:optional` rejected (FOIT risk). |

## 4. Gates wired

| Gate | File | Status | Guards |
|---|---|---|---|
| **G1** Lighthouse CWV budget | `gate-19-lighthouse-budget.spec.ts` | ✅ generalized to a `{route, fixture}` list — now guards **`/vaults/graph` (H-11) + `/learn/concepts/knowledge-graph` (M-7)** (LCP<2.5s · CLS<0.1 · Perf≥90 from committed slim fixtures). | F; H-11, M-7 |
| **G9** Categorical-color count lint | `gate-18-categorical-color.spec.ts` | ✅ ≤2 accent hues in `vaults_graph.mmd` (dated-rationale escape hatch). | C; H-5, SP-5 |
| **G8** Static `var()` + contrast | `gate-8-brand` + `gate-14-single-source` + `gate-4` (both modes) | ⚠️ **additional/non-blocking** — token-contrast coverage held via the existing brand + single-source + axe-both-modes gates; the dedicated *undefined-`var()` static lint* (the c165 root-cause) is **not** separately wired (a 0-computed `var()` surfaces as a visible/axe failure under gate-4). Optional-additional follow-up filed. | C·G; M-4, SP-3 |
| **G3** Visual-regression baseline | — | ⛔ **DEFERRED with rationale** (operator-confirmed) — dev-Mac↔Vercel-CI screenshot baselines are environment-fragile (false-positive churn); the C/H regression surface is already covered by gate-9 (responsive/overflow) + gate-4 (axe both modes) + gate-18 (colour) + gate-19 (perf). Backlog follow-up: `idea_visual_regression_gate`. | C/H drift |

**Gate baseline 280 → 281** (the new concept route under G1). `npm run test:gates` 281/281 green (clean).

## 5. Scorecard (rotated panel — independent of the fix author)

> Synthesis of the per-cycle rotated reviews (recorded in C1–C6 SITREPs/commits) + a fresh AAR re-measurement (Lighthouse 13.4.0) + the 281/281 axe-both-modes floor. Rotation honored — Rosetta designed the fixes; the scoring leans on the reviewers who reviewed at fix-time and on the mechanical floor.

| Axis | Lead persona | Score | Target | Status |
|------|--------------|-------|--------|--------|
| **C** Visual Craft | Design Purist (Design Critic) | 4 | ≥4 | ✓ — single-accent restraint held (Option A viz, ≤2 hues); hierarchy fixed on `[slug]`; edge contrast raised. Not 5: some templated `[slug]` ledes stay deliberately sparse. |
| **F** Performance (CWV) | Performance Engineer | 5 | ≥4 | ✓ — graph LCP 446ms/CLS 0.0001/Perf 100; concept CLS ~0.03 desktop+mobile; desktop LCP sub-second. Numbers, not composite. |
| **G** Accessibility + Agentic | Accessibility & Agent Advocate | 5 | ≥4 | ✓ — 281/281 axe both modes; 44px targets; graph mobile node-list single-listed; no-JS/agentic paths preserved. |
| **H** Responsive Integrity | Design Purist | 4.5 | ≥4 | ✓ — graph legible at 390px; gate-9 no-overflow 320→1440; "deliberate mobile view, not a fallback" (C5). |

## 6. RLP — panel notes

- **Performance Engineer — approve (F5).** "Two measure-first calls were correct, not corner-cutting: H-11's SSR and M-7's reserve-space rebuild were both unnecessary because the metric was already green (LCP 446ms; CLS 0.03). Started at the failing vital, found it wasn't failing. G1 now locks both routes from committed fixtures." Note: mobile *lab* LCP on concept pages is 3.3–5.0s — the synthetic 4×-CPU/slow-4G throttle on a text page with no hero LCP; real-CDN mobile is far better and CLS (the M-7 metric) is Good. Not a blocker; flagged for the P4 field-conditions sweep.
- **Design Purist (Design Critic) — approve (C4/H4.5).** "Restraint held through the whole decade — the graph went from a 15-hue rainbow to one neutral + two semantic accents; the diagram spokes finally read; `[slug]` got a real spec-sheet hierarchy. The residual concept-page 0.03 CLS is imperceptible. Agree with not chasing it into FOIT."
- **Accessibility & Agent Advocate — approve (G5).** "axe clean both modes across the full route sweep; the graph's mobile pivot kept a single accessibility-tree listing (no SR double-read) and preserved the no-JS node-twin; 44px targets uniform. Textbook."
- **Standard Archivist (cross-check) — no new drift.** D4 touched craft/CSS/tests, not claims; `vaults.json`/`install_truth.json` untouched (Honor pt19 held). The pre-rename vault slugs on `/vaults/graph` remain the standing verify-after-pt19 item (H-10), unchanged by D4.

## 7. Metrics

- Build: `npx astro build` → clean, **163 pages**; `vaults.json`/`install_truth.json` untouched (no `npm run build`; Honor pt19; no post-UTC-midnight date churn).
- Gates: **281/281** (`test:gates`, clean uncontended run, 2.0m). *Process note:* a first run flaked 10/281 (axe color-contrast + `networkidle` mermaid) from running Lighthouse against the gate suite's shared preview server — isolated (29/29) + full clean (281/281) re-runs confirmed pure contention flake. **Never run Lighthouse against the gate server.**
- Commits (commit-only on `main`): C1 `9bb3ea8` · C2 `ac6bf0c` · C3 `fd13a27` · C4 `36054d6` · C5 `da5517a` · C6 `c881dbd`.

## 8. Decade-exit criteria ([[DECADAL-PLAN.aDNA]] D4 row)

- [x] **CWV Good band on flagships** — graph LCP 446ms/CLS 0.0001; concept CLS 0.03 (desktop+mobile); `[slug]` + homepage diagram desktop LCP sub-second; CLS<0.1 everywhere measured.
- [x] **≤2 accents on viz** — H-5 Option A; G9/`gate-18` enforces.
- [x] **Density ≥ doctrine §6** — H-7 spec-sheet `<dl>` + relationship primacy on `[slug]`; graph carries legend+census; no disposable-filler sections.
- [x] **axe both-modes clean** — 281/281 (gate-4 + `@audit` both modes).
- [ ] **Operator decade-gate GO** → close D4, open P3→P4. ⏳ pending.

## 9. 5-line AAR

- **Worked:** measure-first twice averted over-engineering — C5 rejected SSR (perf already met) and C6 found M-7's CLS already Good-band (the BaseLayout font preload had silently fixed the 0.156). The decade's value was **restraint + locking gains under gates**, not new pixels.
- **Didn't:** a contended test run (Lighthouse + gate suite on one shared preview server) produced 10 flake-fails — cost a diagnosis loop before the clean 281/281.
- **Finding:** much of the "visual-craft" surface was already latent-fixed by the earlier decades (credibility/structure) and by the font preload — the genuinely new work was viz colour restraint (H-5), the diagram/`[slug]` hierarchy (H-6/H-7), and the graph mobile pivot (H-9).
- **Change:** never co-run Lighthouse with the gate suite's server; measure perf on a dedicated server or after the suite (recorded in the C6 SITREP + §7 here).
- **Follow-up:** G3 visual-regression deferred (`idea_visual_regression_gate`); G8 undefined-`var()` lint optional-additional (same backlog); H-10 verify-after-pt19 still pending; residual ~0.03 concept CLS is sub-threshold display-font settling (accepted).

## 10. Open human gate

**Operator GO required before P3→P4** (campaign Standing Order #8). D4 is commit-only. With D4 GO, **all four decades are closed GO** (D1 deployed-live · D2 · D3 · D4) → **Decision 5 (P3 → P4)**: every unit ≥4 on every A–K axis, zero open Critical/High site-wide, all decadal AARs GO. P4 (`mission_wadna_p4_signoff`) then runs the whole-site coherence pass, the cold 3-second test per persona, the final metric sweep vs the frozen baseline, `CAMPAIGN-REPORT.aDNA.md`, standing-watch automation, and **the Skeptical Frontier Engineer's final verdict**. The keystone coordinated deploy (SP-9 + C-1 stage-2) still waits on the program keystone (Hearthstone v8.0 + pt19, joined).

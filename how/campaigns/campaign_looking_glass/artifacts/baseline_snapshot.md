---
type: artifact
artifact_class: baseline_snapshot
campaign_id: campaign_looking_glass
title: "Operation Looking Glass — M1 baseline snapshot + thresholds"
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
status: active
tags: [campaign, looking_glass, baseline, thresholds, measurement_model, regression_reference]
---

# M1 Baseline Snapshot + Thresholds

> **What this is.** The regression reference captured **before any change** (M1 Construct), against which M2→M4 measure. Per the [[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|measurement model]]'s three tiers: **Tier-1 (machine)** baselines are captured *now* and are empirical; **Tier-2 (agent-assessable)** + **Tier-3 (persona)** baselines are, by construction, the **opening measurement of the M2 Inspect run** (you cannot baseline an agent/persona assessment without running the assessment — that *is* Inspect). Thresholds are set numerically here. Build verified `npx astro build` (NOT `npm run build`) → 177 pages, 0 errors; site `dist/` byte-current with the 2026-06-24 live deploy.

## Subject A — the website (Tier-1 machine baselines, empirical 2026-06-27)

| Measure | Baseline | How captured |
|---------|----------|--------------|
| **Gate harness — total** | **302 green** (was 281 pre-LG) | `npm run test:gates:fast` → **187** + `--grep @audit` → **115**; 0 fail, no flake |
| ↳ non-`@audit` (fast) | 187 (was 166) | +21 from the 2 new representation-coherence gates |
| ↳ `@audit` sweep | 115 (unchanged) | page content untouched this session (test-only additions) |
| **New: claim-trace gate (G20)** | green (16 cases: 1 coverage + 9 resolve + 6 match) | `gate-20-claim-trace.spec.ts` against the seed manifest |
| **New: currency gate (G21)** | green (5 cases) | `gate-21-currency.spec.ts`, read-only dist scan |
| **axe (a11y)** | 0 violations | `gate-4-a11y` + the `@audit` sweep (both modes) green |
| **Lighthouse** | Perf 98 · A11y 100 · BP 100 · SEO 100 | 2026-06-24 live deploy; `gate-19-lighthouse-budget` + `gate-10-perf` green locally |
| **Build** | 177 pages, 0 errors | `npx astro build`, 5.6s |

### Site claim inventory (high-signal seed — Subject A, A1/A2)

Captured in [[site/tests/gates/fixtures/claim_trace_manifest|claim_trace_manifest.json]] (9 seed claims) + the full bounded surface in [[how/campaigns/campaign_looking_glass/artifacts/site_backing_slice|site_backing_slice.md]]. All 9 seed claims **trace + match** at baseline:

| Claim | Class | Source | Value | Owner |
|-------|-------|--------|-------|-------|
| vault count | quantitative | `vaults.json` | **54** | pt19 |
| relationships (edges) | structural | `vaults.json` | **14** | pt19 |
| standard version | status | `standard.ts` | **v2.3** | website |
| base entity types | quantitative | `standard.ts` | **16** | website |
| conformance levels | quantitative | `standard.ts` | **3** | website |
| license | status | `standard.ts` | **MIT** | website |
| entity-types spec source | source_fidelity | `../what/docs/adna_standard.md` | resolves | standard |
| canonical repo | source_fidelity | `canonical.ts` | resolves | website |
| subnetworks | structural | `subnetworks.json` | resolves (4) | website |

> Full claim surface bounded by the slice: 54 vaults · 14 relationships · 4 subnetworks · ~76 MDX pages · 6 proof-links · 16 entity types · 1 canonical URL · v2.3 / 3-levels / MIT. **M2 (Inspect) enumerates the remaining high-signal claims into the manifest.**

## Subject B — the site-backing slice (representation-readiness)

| Measure | Baseline | Note |
|---------|----------|------|
| **Slice bounded** | ✅ 3 rings + `what/` ground-truth | [[how/campaigns/campaign_looking_glass/artifacts/site_backing_slice|site_backing_slice.md]] |
| **Frontmatter validity** | **100%** (61/61 concept·glossary·pattern·comparison files open with frontmatter) | cheap proxy; `docs` (40) checked at M2 |
| **10-dim compliance (`compliance_checker.py`)** | **N/A to slice prose** — see finding | checker covers only the 7 *base* object types (context/dataset/module/lattice/skill/manifest/hardware), **not** the Rosetta extension types (concept/glossary/pattern/comparison) that make up the surfaced slice |
| **Dual-audience · self-reference · cross-link (SO7/8/10)** | captured at **M2 Inspect** | Tier-2 agent-assessable; run with the review |

> **Measurement-model finding (logged → instrumentation ledger Log 4):** the spec named `compliance_checker.py` for B3, but it doesn't recognize the slice's extension-typed prose. **B3 is therefore measured as: frontmatter-valid (100%) + `skill_dual_audience_review` pass + `skill_self_reference_check` pass + ≥2 cross-links/file (SO10)** — a pass/fail composite, not a 0-50 numeric. (A future option: run the checker on the vault's `context` objects, a different set than the surfaced slice.)

## Thresholds (charter success criteria → measures, set in M1)

| Criterion | Threshold | Tier / when |
|-----------|-----------|-------------|
| **A1** correctness / no fabrication | **0** untraceable or contradicted claims; `gate-20` green | T1 now + T2 agent @ M2 |
| **A2** currency / no drift | **0** stale claims; `gate-21` green (read-only; never `sync:vaults`) | T1 now + T2 agent @ M2 |
| **A3** structural fidelity | **0** IA misrepresentations | T2/T3 @ M2 |
| **A4** craft | **gate ≥ 302 green** + core-reviewer mean **≥ 4.30** (0-5) and no regression vs the M2 baseline | T1 now + T3 persona @ M2 |
| **B1** internal consistency | **0** unresolved contradictions in the slice | T2 @ M2 |
| **B2** correctness vs spec | **0** contradictions vs `adna_standard.md` (SO9) | T2 @ M2 |
| **B3** representation-readiness | frontmatter-valid (**100%**) + dual-audience pass + self-reference pass + **≥2** cross-links/file | T2 @ M2 (frontmatter floor now) |

> **A4 persona floor rationale (4.30):** grounded in the site's demonstrated reviewer-lens-pass range — E1 adopter 4.19 / full-30 4.29, E4 GREEN 4.38 (decadal 0-5 convention). The first M2 ranker pass sets the operative baseline; 4.30 is the absolute floor below which craft regressed.

## Regression detection

Re-run **Tier-1** (302 gates incl. G20/G21) + the **claim-trace audit** after every improvement (M4). A **new** untraceable/stale claim, a **dropped** gate (< 302), a **lowered** persona score (< baseline or < 4.30), or a **failed** B3 readiness check = **regression → block mission close** until resolved. pt19-owned (Ring-A) drift is **flagged, never hand-fixed** (Standing Order 2).

## DP2 readiness (this snapshot's contribution)

✅ Subject A machine baselines captured (gates 302 · axe 0 · LH 98/100/100/100 · build clean) · ✅ claim inventory seeded + 9/9 trace+match · ✅ Subject B bounded + frontmatter 100% · ✅ thresholds set numerically. **Agent/persona baselines = the M2 Inspect opening pass** (by measurement-model design).

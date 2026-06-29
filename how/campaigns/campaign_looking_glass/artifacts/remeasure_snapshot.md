---
type: artifact
artifact_class: remeasure_snapshot
campaign_id: campaign_looking_glass
mission_id: mission_improve_remeasure_m04
title: "Operation Looking Glass — M4 re-measure snapshot (post-improvement)"
created: 2026-06-28
updated: 2026-06-28
last_edited_by: agent_stanley
status: active
tags: [campaign, looking_glass, improve, remeasure, regression_check, iii_campaign_pilot]
---

# M4 Re-measure Snapshot — post-improvement vs. baseline

> **What this is.** The Tier-1 (machine) + charter-criteria re-measure after executing the DP3-ratified bounded set, compared against the [[how/campaigns/campaign_looking_glass/artifacts/baseline_snapshot|M1 baseline]] / the [[how/campaigns/campaign_looking_glass/artifacts/findings_register|M2 register]]. **Read-only — no `sync:vaults`.** Verdict: **zero regression; the marquee A/B inversion is resolved at the source; the gate harness grew coverage (+2).**

## Tier-1 — machine gates

| Measure | M2 baseline | M4 re-run | Δ |
|---------|-------------|-----------|---|
| `npx astro build` | 177 pages, 0 err | **178 pages, 0 err** (5.7s) | +1 page (new `/security`) ✅ |
| Gate harness | 302 green | **304 green** (1.5m, 0 flake) | **+2** (A-01 manifest claim: `proof-links-canonical-repo` adds resolve + match tests) ✅ |
| axe (a11y, @audit sweep) | 0 violations | **0 violations** | 0 ✅ |
| G20 claim-trace | green | **green** (incl. the new proof-links claim) | 0 ✅ |
| G21 currency | green | **green** | 0 ✅ |
| Lighthouse budget (gate-19) | green | **green** (committed fixtures) | 0 ✅ |

**No regression.** The harness total rose 302 → **304** — the A-01 G20-manifest extension (the C-027 closed-loop) *added* coverage rather than relaxing any gate. Build gained the `/security` page (`/security` is reachable + Footer-linked; it is not yet in the curated `@audit` a11y sweep list — a non-blocking enhancement, noted below).

## Charter criteria re-check (vs. M2)

| # | Criterion | M2 | M4 | Note |
|---|-----------|----|----|------|
| A1 | correctness / no fabrication | ⚠️ PASS-with-flag | **PASS** (strengthened) | A-01 proof-links now gated against org/repo drift via the canonical-repo claim |
| A2 | currency / no drift | ⚠️ PASS-with-flag | **PASS** (slice) | the bounded-slice currency drift (A-02 line-refs deferred; A-04 → Hestia) — version/repo currency swept |
| A3 | structural fidelity | ✅ PASS | **PASS** | unchanged — graph honest |
| A4 | craft | ✅ PASS (302 / 4.50·4.40) | **PASS** (304 green) | hero now answers what/why/how (A-11 lift + A-12 gloss); security surface adds trust |
| **B1** | internal consistency | ❌ **FAIL** | ✅ **PASS** (bounded slice) | the v2.1↔16-type + repo contradictions swept across the 15 slice files |
| **B2** | correctness vs spec | ❌ **FAIL** | ✅ **PASS** (bounded slice) | ~8 slice files moved v2.1/v2.2 → **v2.3**; SO9 contradiction cleared |
| B3 | representation-readiness | ✅ PASS (1 note) | **PASS** | A-03 framing + B-04 `.adna/` self-ref corrected; dual-audience held |

**The marquee inversion is resolved.** Subject A (site) and the Subject-B bounded slice now BOTH read **v2.3 / `aDNA-Network/aDNA`** — the mirror and its backing prose agree. B1/B2 flip **FAIL → PASS** for the chartered scope.

## What landed (bounded set, per finding)

| Finding | Fix-side | What changed |
|---------|----------|--------------|
| **B-01/02/03/05 + B-04** | source | 15-file sweep: v2.1/v2.2→v2.3 · `LatticeProtocol/Agentic-DNA`→`aDNA-Network/aDNA` · "14+"→"16 base" · outer `adna/`→flat `.adna/` |
| **A-03** | source + site | reframed "the aDNA Standard requires 2 cross-links" → vault-local Rosetta SO10 (both `concept_knowledge_graph.md` + the `knowledge-graph.mdx` mirror) |
| **A-15** | site | new `SECURITY.md` (repo root) + `/security` page + Footer link (GitHub private-advisory channel + disclosure expectations) |
| **A-16** | site | federation **horizon caveat** added to `/enterprise` §3 + `/educators` Week 3 (mirrors the honest `community.json` horizon framing); `/researchers` carries no federation copy (no edit) |
| **A-11** | site | home hero — **additive functional line** (kept the values opener; added "aDNA is an open standard for organizing project knowledge…") per DP3 ruling |
| **A-12** | site | home hero — **"Lattice Protocol" glossed** on first use ("the open coordination protocol underneath") |
| **A-01** | site | G20 manifest extended with `proof-links-canonical-repo` (gates the proof-links' single source against org-drift); the C-027 closed-loop |

## Honest limitations & carried items (→ deferrals/escalations + follow-ons)

- **A-01 (partial-by-design):** the 2 v8.0 proof-links (`template_home_claude.md`, `template_node_adna_exemplar/`) + the bare `.adna/` tree-link can't be *locally* existence-checked — the local `.adna/` is the **frozen pre-v8.0 legacy clone**, so they post-date it. The manifest now gates the proof-links' **single source** (the canonical repo, against org-drift, which is the real credibility risk); a per-link **live** existence check (HTTP-200 in CI) is a small instrument follow-on. The `verified_paths` regen (to pick up the 2 paths) + the stale `template_sha` (A-04) both run through the **pt19 prebuild lane** → bundled in the Hestia memo.
- **Out-of-slice drift (NEW finding, flagged not fixed):** the same v2.1/v2.2 + `LatticeProtocol/Agentic-DNA` class extends **beyond the chartered site-backing slice** — the live context library (`what/context/`), several `what/docs/` guides, example READMEs, and ecosystem specs. Per the charter's Subject-B bound + the Risk Register (scope-creep mitigation), this is **flagged for a follow-on** (`how/backlog/idea_vault_wide_currency_sweep.md`), **not** swept in M4. *(Pilot signal: the bounded-subject decision correctly prevented scope-creep; a full-vault currency sweep is warranted as separate work.)*
- **`/security` a11y coverage:** the page passes build but isn't in the curated `@audit` sweep list — adding it is a non-blocking enhancement.

## Deploy

**Staged, held.** Per DP3 (deploy-in-M4, gated) — go-live is blocked on the **Vitruvius Q1/Q2** asks (deploy-ownership + carve-timing) + an explicit operator go, routed through the `Websites.aDNA` build role-graph (ADR-041), sequenced B→C→A. Not deployed this session; live-verify (M4 Obj 5) carries forward.

## Cross-references

- [[how/campaigns/campaign_looking_glass/artifacts/baseline_snapshot|baseline_snapshot]] · [[how/campaigns/campaign_looking_glass/artifacts/findings_register|findings_register]] · [[how/campaigns/campaign_looking_glass/artifacts/improvement_plan|improvement_plan]]
- [[how/campaigns/campaign_looking_glass/missions/mission_improve_remeasure_m04|M4 mission spec]] · [[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|instrumentation_log]]

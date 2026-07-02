---
type: artifact
artifact_id: telemetry_corpus_p4
title: "Champollion P4 telemetry corpus — datapoint #4 (per-tier estimate-vs-actual, second full Mode-B phase sweep)"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
emitted_at: "G4 (P4 close), 2026-07-02"
consumer: "Context.aDNA (Prometheus) — coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern (Ask 3)"
tags: [artifact, champollion, p4, telemetry, model_tiering, prometheus, corpus, adr_016, mode_b, bookend_cost, concurrency]
---

# Champollion P4 telemetry corpus — datapoint #4

**Fourth per-campaign export in the [[telemetry_corpus_p1|datapoint #1]] shape** (cumulative-append: join-key table + rollup + verdict + signals per phase close). Emitted at the **G4** close (2026-07-02), accepted as **corpus datapoint #4** (G4 D3). Join keys per [[../../../../what/patterns/pattern_model_tiered_campaign_execution|pattern §3]]: **`tier_planned × model_actual × budget_estimated × budget_actual`**.

**Structural novelty vs datapoint #3**: P4 is the **second full-phase Mode-B sweep** and the first to (a) survive a mid-phase orchestrator **context reset** (session resumed via approved plan, no state loss — the QUEUED-banner + heartbeat discipline carried it), and (b) hit a **twin-builder concurrency event** (one Agent dispatch → two live builder instances; see Signals).

## Per-mission records (P4: M4.1–M4.4)

| mission | mission_class | tier_planned | model_actual | budget_est (kT) | budget_actual (kT) | Δ | at_tier | commit |
|---|---|---|---|---|---|---|---|---|
| M4.1 newcomer stress-test | verification | opus | opus (subagent) / fable orch | 45 | ~46 | **+2%** | ✅ | `39c7c4d` |
| M4.2 site UX pass (+ seed riders) | implementation | opus | opus (subagent) / fable orch | 58 | ~50 | **−14%** | ✅ | `9c4dae3` |
| M4.3 first-contact + learning path | implementation | opus | opus (subagent) / fable orch | 46 | ~50 | **+9%** | ✅ | `3a87c7e` |
| M4.4 content currency + product story + hygiene | implementation | opus | opus (subagent) / fable orch | 40 | ~57 | **+43%** | ✅ | `4003a1f` |
| **Total** | | | | **189** | **~203** | **+7%** | | |

> `budget_actual` continues the datapoint-#3 recording refinement: per-mission bookend share included (attributable under Mode B) — M4.1 ~13 · M4.2 ~9 · M4.3 ~10 · M4.4 ~13 kT of fable verify-before-dispatch / independent-review / correction work rides inside the mission rows.

## Per-tier rollup

| tier_planned | missions | est (kT) | actual (kT) | Δ | ADR-016 band (drift < 2×) |
|---|---|---|---|---|---|
| opus | M4.1–M4.4 | 189 | ~203 | **+7%** | ✅ all four (worst = M4.4 at 1.43×) |

## Verdict

**4/4 at planned tier · 0 tier-changing escalations · +7% net — no ADR-016 retrospective triggered.** The G3-D4 Mode-B bookend allowance (+10–15% on implementation rows) **validated on 3 of 4 rows**; the outlier (M4.4 +43%) was **scope discovery, not routing error** — the brief's rider ("author one file") concealed a slug-collision relocate+repoint job, and the phase's hygiene rows were filed on pre-execution evidence (the dual-home reconcile had already landed at `14e3031`).

## Signals for the corpus

1. **Bookends-buy-corrections held all phase** (P3's pattern, stronger): M4.4's ~13 kT bookend share bought **3 corrected brief premises before dispatch** + **8 review completions** (incl. 6 in-tree 404s) + 1 ledger finding. M4.3's bookend share caught its predecessor's counting error (F-CHM-212 — *replication ≠ independence*).
2. **New calibration rule adopted at G4 D3**: *rider-shaped work items get verified-before-estimate* — a one-line rider inherits none of the brief's verification, so its budget is a guess until the fact-pack pins it.
3. **Sweep surface-set rule** (F-CHM-213): a site link-sweep's surface set = content collections **+ `src/utils/navigation.ts` + `src/data/*.ts`** — the link graph lives partly in code-side data.
4. **Ops signal — twin-builder concurrency** (M4.4): one Agent-tool dispatch produced **two live builder instances** (returned agent-id ≠ notifying task-id); the twin completed+reported, the original kept editing post-report and was killed at review; 3 stray edits reconciled, zero shipped unreviewed. Mitigation now standing: **after a completion notification, TaskStop the dispatch's agent-id and re-verify tree quiescence before review-fixes.** Cost was contained (~1–2 kT reconciliation) but the hazard class is real for any Mode-B consumer.
5. **Hygiene/gate rows inherit their filing-time evidence**: the G3-D6 dual-home row dispatched a mostly-no-op (index-side reconcile pre-existed; the real work was an unrecorded worktree drift-heal). Rows carried across gates want a re-verify-at-execution flag.

## Cumulative campaign picture (datapoints #1–#4)

| phase | est (kT) | actual (kT) | Δ | shape |
|---|---|---|---|---|
| P1 | 160 | ~120 | −25% | per-mission sessions, 3 tiers |
| P2 | 115 | ~64 | −44% | first fable-orchestrated |
| P3 | 115 | ~136 | +18% | first Mode-B full-phase sweep |
| P4 | 189 | ~203 | +7% | second Mode-B sweep (+ reset survival + twin event) |
| **Σ** | **579** | **~523** | **−10%** | campaign remains under budget through four gates |

---
type: gate
gate_id: champollion_p1_gate
title: "Operation Champollion — P1 exit gate (G1): per-tier AAR review"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: resolved   # RATIFIED 2026-07-02 — operator: "Your recs sound good. make it so." (all four as recommended: GO · ACCEPT · PUSH · DEFER); record → champollion_p1_gate.output.md
outer_tier: copy_paste   # inline-markdown surface (operator-chosen, like G0); ISS web tier available (receiver up) but declined for record homogeneity
persona: rosetta
tags: [gate, champollion, p1, phase_exit, operator_decision, per_tier_aar, routing_quality]
---

# ⛩ G1 — Operation Champollion P1 exit gate (per-tier AAR review)

> ✅ **RESOLVED 2026-07-02** — operator ratified **as recommended, all four decisions** ("Your recs sound good. make it so.", in-chat): **D1 GO · D2 ACCEPT · D3 PUSH · D4 DEFER**. Ratification record: [[champollion_p1_gate.output|champollion_p1_gate.output.md]]. P1 CLOSED; P2 OPEN (M2.1 next); telemetry datapoint #1 emitted; the held stack pushed to public origin. The decision text below is preserved as-asked (SO-6).

> **First routing-quality checkpoint.** P1 (ADJUDICATE) is complete — all five missions closed with AARs filed. This gate reviews estimate-vs-actual **per model tier** (fable / opus / sonnet), confirms the executor-tier routing worked, emits Champollion's first telemetry datapoint to the Prometheus corpus, and — on ratification — closes P1 and opens P2. **Operator gate (SO-1): answer any subset; unanswered = held open, P1 stays complete-but-ungated.**

```yaml
sitrep:
  campaign: "campaign_champollion · Operation Champollion"
  phase: "P1 — ADJUDICATE (complete; awaiting per-tier AAR review)"
  mission: "G1 — per-tier AAR review (AAR-of-AARs across M1.1–M1.5)"
  gate_purpose: "Ratify P1 complete + open P2; confirm executor-tier routing worked; accept the first estimate-vs-actual telemetry datapoint for the Prometheus corpus."
  importance: "load-bearing"
  importance_reason: "cascades to P2 + seeds the model-tier telemetry corpus; the phase advance is reversible — the one irreversible element (push) is isolated as D3"
  output_destination: "how/gates/champollion_p1_gate.output.md (or reply in-chat; Rosetta transcribes)"
```

**Read first**: [[../campaigns/campaign_champollion/campaign_champollion|charter P1 row + doctrine]] · the five mission AARs [[../missions/artifacts/campaign_champollion_mission_m1_1_aar|M1.1]] · [[../missions/artifacts/campaign_champollion_mission_m1_2_aar|M1.2]] · [[../missions/artifacts/campaign_champollion_mission_m1_3_aar|M1.3]] · [[../missions/artifacts/campaign_champollion_mission_m1_4_aar|M1.4]] · [[../missions/artifacts/campaign_champollion_mission_m1_5_aar|M1.5]] · [[../../what/patterns/pattern_model_tiered_campaign_execution|the pattern]] · [[../../who/coordination/coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern|Prometheus staged memo]].

## The review — P1 per-tier estimate-vs-actual (the deliverable)

**Per mission** (all ran at their planned tier; commits local / unpushed, P1 commit-only):

| Mission | Tier | model_actual | Est | Actual | Δ | Commit |
|---|---|---|---|---|---|---|
| M1.1 backlog dispositions | opus | opus (direct) | 40 kT | ~30 kT | −25% | `6145c16` |
| M1.2 ADR-045 record repair | fable | fable subagent / opus orch | 35 kT | ~32 kT | −9% | `23fd294` |
| M1.3 `adr_index` | sonnet | sonnet subagent / opus orch | 15 kT | ~14 kT | −7% | `6883ba3` |
| M1.4 currency sweep | sonnet | sonnet subagent / opus orch | 30 kT | ~14 kT | −53% | `8df393a` |
| M1.5 STATE diet | opus | opus (direct) | 40 kT | ~30 kT | −25% | `4e493ce` |

**Per-tier rollup:**

| Tier | Missions | Est → Actual | Δ | ADR-016 2× band |
|---|---|---|---|---|
| **Fable** | M1.2 | 35 → 32 kT | −9% | ✓ (1.10×) |
| **Opus** | M1.1, M1.5 | 80 → 60 kT | −25% | ✓ (1.33×) |
| **Sonnet** | M1.3, M1.4 | 45 → 28 kT | −38% | M1.3 ✓ (1.08×); **M1.4 at the line (~2.1×)** |
| **Total** | 5 | **160 → 120 kT** | **−25%** | 4/5 clear; M1.4 explained |

### Routing-quality verdict
- **5/5 missions ran at their planned tier** — `model_actual == tier_planned` everywhere: M1.2 fable-subagent-under-opus, M1.3/M1.4 sonnet-subagent-under-opus, M1.1/M1.5 direct opus. The **orchestrated-tier** shape (judgment stays at tier; opus does scaffold / verify / commit) held cleanly and gave a real independent second read on governance text (M1.2).
- **0 tier-changing escalations** — M1.1's escalations (F-CHM-013 post-ledger items; adr_003/012/027 handed to M1.2) were *scope* hand-offs, not upward-tier escalations. Executors escalated, never improvised upward.
- **All five under budget** — systematic under-estimation, strongest on mechanical / sonnet work.
- **The one drift to note — M1.4 (−53%, ~2.1× under)** touches the ADR-016 ">2× drift" line, but is **pre-explained, not a surprise**: two of five brief items were no-ops (a CHANGELOG version-track conflation + already-resolved base-skills), caught at the planning verify-before-dispatch, and the keep/strip + CHANGELOG judgment was pre-resolved at planning tier → work shifted from executor to planner. Its AAR reads this as a calibration signal ("mechanical estimates should be net of already-resolved / defective items"), not a routing failure.

### Routing-safety win (the headline P1 finding)
**sonnet-safe ≠ brief-correct** (M1.4): a mechanical brief authored at the gate can still carry a stale premise or a category error; the opus / planning **verify pass before dispatch** is where those get caught — downtiering is only safe *behind a fresh verify*. It worked as designed: 2 defective brief items caught pre-dispatch, **0 shipped**. This is the most valuable lesson P1 produced for the pattern, and it earns its own line in the telemetry corpus.

## Decisions (answer any subset; unanswered = held; P1 stays complete-but-ungated)

### D1 — Ratify P1 complete + open P2? `GO / AMEND / HOLD` — **rec: GO**
All five P1 exit criteria met: backlog at **zero un-dispositioned** (M1.1: 28 discharged / 31 fold / 13 fix / 17 defer / 2 decline) · ADR-045 record repaired + **zero ADRs at `proposed`** (M1.2) · ratification-record discipline live (spec) · `adr_index` live (M1.3, 40 rows) · currency sweep done (M1.4) · STATE dieted (M1.5, 554 KB → 46.6 KB). GO flips the P1 row `✅`, opens P2 `◐`, and materializes the P2 briefs (M2.1–M2.3) at judgment tier as the first post-gate act.

### D2 — Accept the P1 per-tier telemetry as Champollion's first Prometheus corpus datapoint? `ACCEPT / AMEND` — **rec: ACCEPT**
Join keys are clean (`tier_planned × model_actual × budget`; M1.2's note keeps judgment-work spend separate from opus orchestration overhead). ACCEPT also: **(a)** adopts the systematic under-estimation as a **P2 budget-calibration note** — mechanical estimates should be net of already-resolved / defective items (the M1.4 lesson); **(b)** accepts **M1.4's AAR explanation in lieu of a separate ADR-016 retrospective** for its ~2.1× drift (explained by planning-tier work-shift + 2 no-op items, not an estimation-model failure). Datapoint #1 is emitted to Context.aDNA per the staged Prometheus memo (its Ask 3 anticipated this).

### D3 — Push the 11 held P1 commits to public `origin/main`? `PUSH / HOLD` — **rec: PUSH**
Local `main` is **11 commits ahead** of `origin/main` (= G0 `f629a37`): the 9 P1 mission + close commits, plus **2 base `[no push]`-tagged automation-design commits** (`4e26b18` campaign-runner capture + Berthier memos · `fb23738` session-close + STATE-QUEUED-automation + CHANGELOG). Those 2 sit at the *bottom* of the stack, so a `main` push necessarily publishes all 11 (separating them needs a rebase — not advised). Contents are campaign records + design notes only — this public dev graph's normal record; names-only; gitleaks hook live. Pushing closes the revert window and removes the divergence surface (R1). Executed **only after** a fresh `git fetch` + `git ls-remote origin main` truth-check (the G0 / `98bb488` lesson: a concurrent session may already have pushed — verify-don't-inherit) + gitleaks pre-push pass. **HOLD is fully honored** — the 11 stay local, re-offered at the next gate.

### D4 — Charter the R1 campaign-runner now? `CHARTER / DEFER` — **rec: DEFER**
`idea_campaign_execution_automation` (F-CHM-013, filed post-ledger; the subject of the 2 automation-design commits) proposes automating the campaign-execution loop. It is separable from the phase gate and blocks nothing in P2. **DEFER** = keep it filed for an explicit turn (STATE's "R1 runner charters post-G1 on idea acceptance"); **CHARTER** = author its campaign stub at `status: proposed` now.

## On ratification (Rosetta executes, no further ask)
1. Transcribe decisions → `how/gates/champollion_p1_gate.output.md`; flip this gate `pending → resolved` + add the ✅ RESOLVED banner (decision text preserved as-asked, SO-6).
2. **D1 = GO**: campaign doc — P1 row `✅` + P2 `◐` + GATES line "G1 RATIFIED · P2 OPEN · next gate G2"; STATE — `⏭ QUEUED` → M2.1 + fresh Next Session Prompt + newest Current-Phase bullet (shed predecessor prose per `idea_state_prompt_shed_on_close`).
3. **D1 = GO**: materialize P2 briefs M2.1–M2.3 at judgment tier (authoring, **not** execution — no P2 objective runs).
4. **D2 = ACCEPT**: emit `artifacts/telemetry_corpus_p1.md` + annotate the Prometheus memo (datapoint #1 emitted).
5. **D4 = CHARTER**: author the R1 campaign-runner stub (`status: proposed`).
6. Commit (commit-only). **D3 = PUSH** (last): `git fetch` + `ls-remote` truth-check → gitleaks → `git push origin main`.
7. P2 opens next session per the Next Session Prompt (M2.1 first).

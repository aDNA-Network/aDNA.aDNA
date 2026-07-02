---
type: gate
gate_id: champollion_p2_gate
title: "Operation Champollion — P2 exit gate (G2): ADR-046 ratification + per-tier review"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: pending
outer_tier: copy_paste   # inline-markdown surface per G0/G1 precedent (record homogeneity); ISS web tier available (receiver :8765 up) if preferred
persona: rosetta
tags: [gate, champollion, p2, phase_exit, operator_decision, adr_046, version_cut, per_tier_review]
---

# ⛩ G2 — Operation Champollion P2 exit gate (version-cut ratification + per-tier review)

> **The standard's version gate.** P2 (STANDARD & spec consolidation) work is complete — all three missions closed with AARs filed. This gate ratifies **ADR-046** (the v2.4 → v2.5 cut, with its two open arms), reviews estimate-vs-actual per tier (second datapoint for the Prometheus corpus), and — on ratification — closes P2 and opens P3. **Operator gate (SO-1): answer any subset; unanswered = held open, P2 stays complete-but-ungated.**

```yaml
sitrep:
  campaign: "campaign_champollion · Operation Champollion"
  phase: "P2 — STANDARD & spec consolidation (complete; awaiting ratification)"
  mission: "G2 — ADR-046 ratification + per-tier AAR review (M2.1–M2.3)"
  gate_purpose: "Ratify the standard version cut v2.4→v2.5 (incl. the E1 scope arm + C6 rider); accept P2 telemetry; close P2 / open P3."
  importance: "load-bearing"
  importance_reason: "D2 sets the standard's version + decides whether the universal doc names the federation-wrapper apparatus (E1) — normative, fleet-visible; the push (D3) is the one outward-facing element and is isolated"
  output_destination: "how/gates/champollion_p2_gate.output.md (or reply in-chat; Rosetta transcribes)"
```

**Read first**: [[../../what/decisions/adr_046_standard_version_cut_v2_5|ADR-046 (the decision under ratification)]] · [[../campaigns/campaign_champollion/artifacts/standard_currency_audit|M2.1 audit ledger (F-CHM-201..206 + E1)]] · the three AARs [[../missions/artifacts/campaign_champollion_mission_m2_1_aar|M2.1]] · [[../missions/artifacts/campaign_champollion_mission_m2_2_aar|M2.2]] · [[../missions/artifacts/campaign_champollion_mission_m2_3_aar|M2.3]].

## The review — P2 per-tier estimate-vs-actual (datapoint #2)

**Per mission** (all at planned tier; commits local / unpushed, P2 commit-only — first **fable-orchestrated** phase, the operator's `/model fable` flipping the orchestration tier up one):

| Mission | Tier | model_actual | Est | Actual | Δ | Commit |
|---|---|---|---|---|---|---|
| M2.1 standard currency audit | opus | opus subagent / fable orch | 50 kT | ~18 kT | **−64%** | `9b32fa2` |
| M2.2 version-cut ADR-046 | fable | fable (direct, main session) | 30 kT | ~20 kT | −33% | `3f2a898` |
| M2.3 glossary/concepts currency | opus | opus subagent / fable orch | 35 kT | ~26 kT | −26% | `7d0b19b` |

**Per-tier rollup:**

| Tier | Missions | Est → Actual | Δ | ADR-016 2× band |
|---|---|---|---|---|
| **Fable** | M2.2 | 30 → 20 kT | −33% | ✓ (1.50×) |
| **Opus** | M2.1, M2.3 | 85 → 44 kT | −48% | M2.3 ✓ (1.35×); **M2.1 over the line (~2.8×)** |
| **Total** | 3 | **115 → 64 kT** | **−44%** | 2/3 clear; M2.1 explained below |

### Routing-quality verdict
- **3/3 at planned tier** — `model_actual == tier_planned` everywhere: opus subagents under fable orchestration (M2.1/M2.3), fable direct for the judgment ADR (M2.2 — the brief's "fable subagent under opus orchestration" shape assumed an opus main session; with a fable main session, at-tier-direct is the M1.5-precedented equivalent). **0 tier-changing escalations**; E1 arrived at this gate as designed, packaged as ADR-046's C4 arms rather than an improvised fix.
- **The one drift — M2.1 (−64%, ~2.8× under)** breaches the ADR-016 2× line, and is the **second verification-class mission to do so** (M1.4 −53% at G1). Cause is the same, now confirmed as a *class* pattern: verification estimates assume the executor re-derives anchors the orchestrator has already pinned, and budget corpus-size instead of judgment-surface (the real audit surface was 8 standard-touching ADRs of 40). Implementation/integration rows (M2.2 −33%, M2.3 −26%, M1.2 −9%) sit comfortably inside the band. → D4 proposes the **class-split calibration rule** rather than a per-mission retro.
- **Sweep-plus-adjudicate worked**: M2.3's executor listed out-of-scope stale sites instead of touching them; the orchestrator adjudicated keep/strip same-session (4 fixed, 1 kept-historical, 1 → F-CHM-207/M4.3). Candidate standing brief line for content sweeps.

### P2 substance (what the phase produced)
- **M2.1**: divergence ledger F-CHM-201..206 — all-40 ADR walk (8 standard-touching: **6 FOLDED · 1 PENDING-FOLD (ADR-044) · 1 UNFOLDED (ADR-045)**); v2.4 confirmed live; standard doc byte-identical dev↔image (so the stale "v2.3" end-line ships public); escalation **E1** posed cleanly.
- **M2.2**: **ADR-046 authored `proposed`** — change-set C1–C5 (+C6 rider), per-item §15.4 invalidation table, Ratification block scaffolded empty (the discipline it folds, self-applied). `adr_index` → 41 rows, tally 39 accepted · 1 amended · 1 proposed.
- **M2.3**: 43 entries swept (31 current · 12 fixed · **0 contradicts**); **4 new glossary entries** incl. `standard_registers` (**F-CHM-204 CLOSED** — the "which standard?" decoder); ADR-046 presented as proposed-pending-G2 everywhere (no gate front-running).
- Session-level: Berthier C03-M28 `campaign_index` ask **accepted** (TaskNote at `how/tasks/`, org_shared, charter-canonical; refresh promised at gate closes — first refresh rides this gate's cascade) · inbound memo's missing frontmatter repaired (F-CHM-001 class, caught by the per-session validator).

## Decisions (answer any subset; unanswered = held; P2 stays complete-but-ungated)

### D1 — Ratify P2 complete + open P3? `GO / AMEND / HOLD` — **rec: GO**
P2 exit criteria met: standard audited v2.4 ↔ v8.3 ↔ ADR corpus (M2.1) · version-cut ADR authored at `proposed` (M2.2 — its *ratification* is D2, below) · glossary/concepts current (M2.3). GO flips P2 `✅`, opens P3 `◐` (pattern harvest & exemplar self-application, M3.1–M3.3), and materializes the P3 briefs at judgment tier as the first post-gate act.

### D2 — Ratify ADR-046 (the v2.4 → v2.5 standard version cut)? `RATIFY / AMEND / REJECT` — **rec: RATIFY as authored**, resolving its three arms:
- **D2a — version arm**: **v2.5 (rec)** or v3.0. Every change-set item passes §15.4's minor test (C1/C2 *relax* conformance · C3 binds forward-only, SHOULD-retro · C4 adds an optional dir or nothing · C5 editorial) — the per-item invalidation table is in the ADR. v3.0 is warranted **only** if you want ratification blocks retroactively mandatory (instance-invalidating; migration-guidance obligation); the warn→fail validator rollout reaches the same end-state without a breaking cut.
- **D2b — C4 / E1 scope arm** (the M2.1 escalation): **Arm A (rec) — absorb**: §5.3's optional-subdirectory table gains one `federation/` row citing ADR-045 — the universal doc names the convention ~208–216 fleet wrappers already follow; the wrapper *schema* stays in the ecosystem specs. **Arm B — narrow**: universal doc stays federation-silent; ADR-045's "Universal Standard" wording amends to "ecosystem spec corpus". A is one truthful optional row; B leaves the standard blind to a load-bearing convention and worsens the F-CHM-204 register blur.
- **D2c — C6 rider**: **DEFER (rec)** the model-tier mission fields (`executor_tier` + budgets) to the pattern's own 3rd-instance graduation trigger — or **EARLY-RATIFY** here (the idea's trigger explicitly allows it; they'd fold as optional §7.5-class fields, still minor-safe). DEFER keeps the cut clean of not-yet-graduated material.
- On RATIFY, the ratification session executes the cut per ADR-046 §Consequences: Ratification block filled from this gate's record → `status: accepted` → standard-text edits C1–C5 + the D2b arm into `what/docs/adna_standard.md` (single commit, ~15–20 kT of careful editing) → `adr_index` regen (tally back to 0 proposed) → footer/changelog/§15.4-checklist per C5. The **public image** picks the cut up later via `skill_template_release` at M6.1's RC (separately operator-gated; until then the reference instance leads the written image, the ADR-044-established posture).

### D3 — Push the held P2 stack (4 commits + this gate's close commit = 5) to public `origin/main`? `PUSH / HOLD` — **rec: PUSH**
`origin/main` = `76669d6` (G1 push); local ahead: `9b32fa2` M2.1 · `3f2a898` M2.2 · `7d0b19b` M2.3 · `0f2c649` Berthier-accept · + the G2-render close commit. Contents: campaign records, the audit ledger, ADR-046 at `proposed`, glossary content, one org-shared TaskNote — this public dev graph's normal record, names-only. Executed **only after** `git fetch` + `git ls-remote origin main` truth-check (concurrent-session lesson) + the gitleaks pre-push hook. Note: pushing publishes ADR-046 **at `proposed`** — honest and precedented (the index tally says so); if you'd rather the world only see the ratified form, choose HOLD and D3 re-offers at G3 after the cut executes. **HOLD fully honored.**

### D4 — Accept P2 telemetry as Prometheus datapoint #2, with the class-split calibration rule? `ACCEPT / AMEND` — **rec: ACCEPT**
ACCEPT emits `artifacts/telemetry_corpus_p2.md` (same join keys as #1; first fable-orchestrated rows) and: **(a)** accepts **M2.1's AAR explanation in lieu of an ADR-016 retrospective** for its ~2.8× drift (same disposition M1.4 received at G1 — cause understood, now class-confirmed); **(b)** adopts the **class-split calibration rule for P3+ estimates** — *verification* missions budget the judgment surface net of orchestrator pre-resolution (would have put M2.1 at ~20–25 kT); *implementation/integration* estimates unchanged (they're landing inside the band); **(c)** refreshes the Berthier `campaign_index` TaskNote at this gate's resolution (the promised G-cadence).

## On ratification (Rosetta executes, no further ask)
1. Transcribe decisions → `how/gates/champollion_p2_gate.output.md`; flip this gate `pending → resolved` + ✅ RESOLVED banner (decision text preserved as-asked, SO-6).
2. **D2 = RATIFY**: fill ADR-046's Ratification block (ratifier / this gate / date / arm-resolved scope) → `accepted`; execute the cut in `what/docs/adna_standard.md` (C1–C5 + D2b arm, per §Consequences order); regen `adr_index`; validator full + governance zero drift. *(If D2c = EARLY-RATIFY, stage the template-field fold into the M6.1 RC batch.)*
3. **D1 = GO**: campaign doc — P2 row `✅` + P3 `◐` + GATES line "G2 RATIFIED · P3 OPEN · next gate G3 (ring cut)"; STATE `⏭ QUEUED` → M3.1 + fresh Next Session Prompt + Current-Phase bullet; materialize P3 briefs (M3.1–M3.3) at judgment tier (authoring, not execution).
4. **D4 = ACCEPT**: emit `artifacts/telemetry_corpus_p2.md` + annotate the Prometheus memo (datapoint #2) + refresh `how/tasks/20260702140223-campaign-index-champollion.md` (phase/status).
5. Commit (commit-only). **D3 = PUSH** (last): `git fetch` + `ls-remote` truth-check → gitleaks → `git push origin main`.
6. P3 opens next session per the Next Session Prompt (M3.1 first). **G3 = the ring cut** (launch-window re-score) — operator gate, not auto-advanced.

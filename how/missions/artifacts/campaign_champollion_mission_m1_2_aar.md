---
type: aar
artifact_id: campaign_champollion_mission_m1_2_aar
title: "AAR — Champollion M1.2 (ADR-045 record repair + ratification discipline)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m1_2_adr045_record_repair
executor_tier: fable
token_budget_estimated: "35 kT"
token_budget_actual: "~32 kT (fable executor; + opus orchestration)"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [aar, champollion, p1, m1_2, adr_045, ratification_record, governance]
---

# AAR — Mission M1.2: ADR-045 record repair + ratification-record discipline (G0 D3/D4)

**Session**: `session_stanley_20260702T053035Z_champollion_m1_2` · **Commit**: `23fd294` (work; unpushed, P1 commit-only) · **Executor: fable** (judgment edits via fable subagent; orchestrated + independently verified by opus — operator-chosen split).

## Scorecard

| Deliverable | Status | Notes |
|---|---|---|
| ADR-045 status block → proper ratification record | ✅ | 4-field block (ratifier/gate/date/scope) + unsoftened provenance note (SO-8); decision text untouched; Amendment-History row added |
| Wrapper count reconciled-or-attributed | ✅ | reported-range **~208–216** w/ attribution (ADR ~216 · STATE ~208); per-vault verification deferred to fleet re-seed; framed as record-not-decision defect |
| adr_003/012/027 → `accepted` + ratification blocks (cite G0 D2) | ✅ | adr_027 + refresh note (LatticeTerminal/LatticeAgent archived, Cmux→Terminal.aDNA; reanchor = Ring-1 #6) |
| Zero ADRs left at `proposed` | ✅ | `rg -c '^status: proposed' adr_*.md` == 0 (`Ratifier` present in all 4) |
| Ratification-record discipline installed (spec-only) | ✅ | per-ADR §4.1 block + agents-set-`proposed`-only + `adna_validate` check **as spec**; N-at-once retained as batch variant; `fold_batch: champollion_m6_1_rc` |
| D4 closure | ✅ | retro §2 (Incident B) → `CONFIRMED-ACCEPTED (low)`; 2 STATE `#needs-human` flags annotated RESOLVED (history preserved) |
| `adna_validate` full + `--governance` | ✅ | full conformance + zero drift (baseline held) |
| Single explicit-path commit, no push | ✅ | `23fd294` |

## Deviations & escalations
- **No escalations.** The count investigation confirmed a *record* discrepancy, not a *decision* defect (retro §1.4/§5) — no new gate needed. No ADR edit contradicted a ratified decision; D3 not re-opened; provenance note not softened.
- **Judgment call — "strike" vs "annotate" the STATE flags**: resolved by annotate-in-place ("→ RESOLVED at G0"), preserving history per the brief's "annotate, don't delete history"; consistent with STATE's other 12 historical `needs-human` strings (D8/Keystone territory, untouched).
- **`adna_validate.py` untouched** — the enforcement check is spec-only (implementation rides M2.2/M6.1); `template_adr` fold rides M6.1.

## AAR (5-line)
- **Worked**: fable subagent (tier-matched to "does-not-downtier") authored all four judgment edits in one pass; opus verified independently (rg + validator both modes green) before commit. All acceptance criteria met, first real pass.
- **Didn't**: nothing failed; sole ambiguity (strike vs annotate) resolved by history-preserving annotation — the QUEUED banner (live open-items oracle) was already clean.
- **Finding**: a fable-marked "does-not-downtier" mission runs cleanly as a fable *subagent under opus orchestration* — judgment stays at tier (`model_actual = fable` == `tier_planned`), opus does scaffolding/verify/commit, and the opus verify pass is a real independent second read on governance text.
- **Change**: for orchestrated-tier missions, record tier-matched executor spend separately from orchestration overhead so Prometheus reads the judgment-work budget cleanly.
- **Follow-up**: M1.3 (sonnet, adr_index — now reflects repaired statuses) + M1.4 pairable → M1.5 (STATE diet) LAST; ~32 kT fable vs 35 kT est (−9%, within ADR-016) — a datapoint for the pattern's orchestrated-tier telemetry.

## Telemetry note (Prometheus corpus)
First mission run as **orchestrated tier** (`tier_planned = fable` executed by a fable subagent, `model_actual = fable`, orchestrated by opus) vs M1.1's **direct** opus run. Join keys clean: fable judgment-work ≈ 32 kT within a 35 kT estimate; opus orchestration (scaffold/verify/commit/close) is separate overhead. Shape is repeatable for the remaining fable/opus missions where this session isn't already at-tier.

## Readiness
**GO** for M1.3/M1.4 (sonnet pair) then M1.5 (opus, LAST). P1 exit gate **G1** (per-tier AAR review) pending M1.3–M1.5. No blockers introduced; zero ADRs at `proposed`.

---
type: adr
adr_number: 016
title: "Per-Mission Context Budget — token budgets, heavy-file Read convention, two-metric reporting variant as Project Standing Order #11"
status: accepted
created: 2026-05-19
updated: 2026-05-19
last_edited_by: agent_stanley
supersedes:
superseded_by:
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p2_m22_per_mission_budget
objective: 2
decision_letter: A
ratification_phase: M22_S1_mid_P2_operator_override
ratified: 2026-05-19
ratified_session: session_stanley_20260519T233620Z_v8_m22_s1
deciders: [agent_stanley, operator_stanley]
related_decisions: [adr_005_three_way_vault_boundary, adr_011_aDNA_semver_discipline]
tags: [adr, decision, campaign_adna_serious_tool_readiness, m22, v8, p2, per_mission_context_budget, standing_order_11, content_load_formula, decomposition_threshold, heavy_file_read_convention, two_metric_reporting, operator_override_so14, load_bearing, governance_consolidation, m13_consumer, m14_consumer, m21_consumer]
---

# ADR-016: Per-Mission Context Budget — token budgets, heavy-file Read convention, two-metric reporting variant as Project Standing Order #11

## Status

**Accepted** at M2.2 S1 close 2026-05-19 (`session_stanley_20260519T233620Z_v8_m22_s1`). Drafted by Rosetta in the same session per the planning-class single-session shape. Co-signed by operator stanley at plan ratification.

**Standing Order #14 operator-override invoked** at plan ratification per the **load-bearing-decision exception clause**. Campaign Standing Order #14 normally gates ADR ratification at phase-exit; ADR-016 ratifies mid-P2 because per-mission context-budget discipline is load-bearing for every subsequent P2/P3/P4/P5 mission (estimate-vs-actual reporting, decomposition threshold enforcement, heavy-file Read convention adoption). Recording the override here so future mid-phase ratifications follow the same explicit-invocation pattern.

## Context

`aDNA.aDNA` Project Standing Order #3 states "Context budget is doctrine." Until this ADR, the doctrine was a slogan: no operational rule attached to it, no required fields, no AAR reporting structure, no decomposition threshold to bind mission planning. Three measurement missions surfaced the operational gap and produced the prep notes this ADR consolidates:

| Mission | Artifact §reference | What it contributed |
|---|---|---|
| **M1.3** Token Audit | [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m13_obj7_calibration_output.md\|m13_obj7_calibration_output.md]] §6 | Content-load formula `session_cost ≈ transition_tax + Σ per_objective_work` (CP-1 = 23 kT mean transition; per-objective 5-80 kT by mission_class); decomposition threshold rule (4 bands: < 50 / 50-80 / 80-200 / ≥ 200 kT); candidate Standing Order #11 text |
| **M1.4** LatticeScope.aDNA v0.1.1 Schema | [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m14_obj7_validation_output.md\|m14_obj7_validation_output.md]] §6 | Two-metric reality framing (content-load vs API-billing measure DIFFERENT phenomena); API-billing companion forecast (cache_creation 300-500 kT floor; pattern δ upgraded 6 → 10); two-metric reporting bullet (AARs may report in both units); **no formula shift** — content-load formula stays authoritative |
| **M2.1** Context File Audit + STATE.md Split | [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj7_validation_output.md\|m21_obj7_validation_output.md]] §5 | Heavy-file Read convention sibling clause (default `offset+limit` Reads on files ≥ 50 kT or ≥ 200 KB; STATE.md as canonical instance); auto-archive convention as optional 3rd clause (deferred per D1=A below) |

**Operational gap S.O. #3 left unfilled**:

1. **No required field on mission specs** — without `token_budget_estimated` frontmatter, no operator/agent can compare estimate to actual.
2. **No decomposition threshold rule** — missions either over-decomposed (transition-tax dominated) or under-decomposed (snowballed past Read-tool 256 KB hard backstop, as M2.1 S2 empirically validated).
3. **No file-level discipline** — even budgeted missions can over-spend by Reading a 350 KB file naively (M2.1 self-validated this mid-execution).
4. **No measurement contract** — AARs reported in narrative form, not in structured estimate-vs-actual.

ADR-016 fills all four gaps by ratifying three composing clauses + a deferral note for a fourth pattern that's not yet ready.

## Decision

Three doctrine clauses ratify together. They compose; none conflicts with the others.

### Clause A — Content-load budget per mission

Every mission spec **must** declare `token_budget_estimated` in frontmatter, expressed in kT content-load units per the M1.3 canonical formula:

```
session_cost ≈ transition_tax + Σ per_objective_work
where:
  transition_tax    = ~ 23 kT  (CP-1 mean cold-start orientation; M1.3 §1 baseline)
  per_objective_work ≈ 5-80 kT (varies by mission_class — planning < reconnaissance < implementation < verification)
```

The **decomposition threshold rule** binds mission planning:

| Band | Session shape recommendation |
|---|---|
| < 50 kT total | Single session (compose objectives; transition tax dominates if you split) |
| 50-80 kT total | 1-2 sessions; canonical-shape exception per Campaign S.O. #17 |
| 80-200 kT total | 2-3 sessions (canonical 3-session implementation shape: S1 design / S2 destructive / S3 close) |
| ≥ 200 kT total | Split into multiple missions; pay the campaign-level decomposition tax instead of session-level snowball |

**Session files** log `token_budget_actual_kT` (rough estimate at session close is sufficient; precise measurement deferred to the M1.4 `ingest_transcript.py` retrospective mechanism per Clause C).

**AARs** report an estimate-vs-actual table per session.

**Drift > 2× triggers a retrospective**: if a mission's S1 actual exceeds estimate by > 2×, the AAR flags M2.3-class retrospective at next opportunity. Persistent drift across ≥ 3 missions of the same class triggers ADR-016 amendment review.

### Clause B — Heavy-file Read convention

For any file ≥ 50 kT content-load OR ≥ 200 KB bytes, agents **default to** `Read(path, offset=N, limit=M)` rather than full-file Read.

**Canonical instance**: `aDNA.aDNA/STATE.md` (live in `aDNA.aDNA/AGENTS.md` "Heavy-File Read Convention" section since M2.1 S2 commit `235c3fd`).

**Rationale**: M2.1 S2 empirically validated the Read-tool 256 KB hard backstop — pre-split STATE.md (343.5 KB) returned `File content (339.2 KB) exceeds maximum allowed size (256 KB)` on the very session executing the split. This is a *hard backstop, not a soft warning*. Files in the 50 kT → 256 KB gap don't error out but pay the full cache_creation tax on every cold-start.

**Upstream propagation**: queued for v8 P6 per Campaign Standing Order #14 + ADR-005 rule 3. Carry placeholder lives at `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md`. v8 P6 lifts the convention into `.adna/AGENTS.md` so all 19+ ecosystem vaults inherit.

**Auto-memory companion**: `MEMORY.md` index entry at the operator's per-project memory directory + `feedback_heavy_file_read.md` content file (both live since M2.1 S2 commit `235c3fd`; format follows the two-step memory protocol).

### Clause C — Two-metric reporting variant

AARs **may** report in BOTH content-load (M1.3 method) AND API-billing (M1.4 method via `~/.adna/measurement/ingest_transcript.py` data) units.

**Content-load remains canonical** for mission-spec budgets (Clause A). The API-billing companion is a complement, not a replacement.

**API-billing formula stays forecast** until M2.3 cross-campaign retrospective ratifies it. M1.4 §6 provides the working forecast (`session_cost_api_billing ≈ cache_creation_floor (300-500 kT) + turn_count × mean_cached_context_per_turn`); M2.3 publishes the empirical Δ across the 48-session corpus + M2.1 post-split data point.

**Reporting form when both metrics are used**: AAR token-budget table shows two columns (content-load kT + API-billing kT) per session; estimate-vs-actual computed for both. Drift > 2× on either metric triggers M2.3-class retrospective.

### D1 deferral — auto-archive convention NOT incorporated at this ADR

M2.1 §5 c suggested an optional 4th clause for the auto-archive convention (router/archive pattern at heavy live files; STATE.md is the canonical first instance). **DEFERRED to a separate ADR** because:

1. **Only 1 instance exists** — STATE.md split at M2.1. The skill-graduation rubric at [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj4_archive_convention_design.md\|m21_obj4_archive_convention_design.md]] gates at ≥ 3 distinct rotations.
2. **Premature codification risks pre-ratifying a maturing pattern** — early ratification locks in details that may need amendment when instances 2 + 3 surface.
3. **Doctrinally cleaner** to keep ADR-016 focused on per-mission discipline (Clauses A + B + C all bind individual missions); auto-archive is a vault-level pattern that may warrant a separate governance ADR.

**Trigger for re-evaluation**: when the 2nd instance lands (likely `lattice-labs/STATE.md` at LatticeLabs.aDNA Phase-6 cutover OR a large campaign master at v8 P6 close). The 3rd instance triggers skill graduation `skill_campaign_close_archive.md` and a follow-up ADR.

## Consequences

1. **Project Standing Order #11 added** to `aDNA.aDNA/CLAUDE.md` `## Standing Orders` section. Text refined per Clause A:

   > **11. Per-mission context budget is mandatory.** Every mission spec declares `token_budget_estimated` per the content-load formula (`session_cost ≈ transition_tax + Σ per_objective_work`; thresholds < 50 / 50-80 / 80-200 / ≥ 200 kT). Sessions log `token_budget_actual` (rough is fine). AARs report estimate-vs-actual delta. Drift > 2× triggers a retrospective. ADR-016 governs.

2. **Every mission spec from M2.3 forward** carries `token_budget_estimated` frontmatter field. M2.2 itself (this mission) is the first instance — its spec declares `token_budget_estimated: "S1 ~60-90 kT"`. Retroactive backfill of M1.1-M1.4 + M2.1 is optional (those missions practiced the discipline informally per frontmatter; explicit field can be added at M2.3 retrospective if needed).

3. **AARs gain estimate-vs-actual section** — M2.2 AAR (`aar_m22_per_mission_budget.md`) is the first to follow the structured form; M1.3 + M1.4 + M2.1 AARs already include token-budget tables informally.

4. **M2.3 retrospective consumer** — reports on calibration accuracy across the 3 missions that already practiced the discipline (M1.3 + M1.4 + M2.1) + this M2.2 ratification mission. M2.3 may also ratify the API-billing companion formula as an ADR-016 amendment or separate ADR.

5. **M2.4 AGENTS.md heat map consumer** — Clause B convention adoption signal across live-hook corpus. M2.4 still gated on ≥ 10 live-hook sessions; M2.2 contributes 1 post-ratification session.

6. **v8 P6 ecosystem propagation** — ADR-016 + Project Standing Order #11 + Clause B AGENTS.md convention all lift to `.adna/` upstream at v8 P6 per Campaign Standing Order #14 + ADR-005 rule 3. Backlog placeholder for the Clause B convention already exists at `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md`; ADR-016 + Standing Order #11 themselves enter the v8 P6 propagation queue at the next campaign master rotation.

7. **Mid-phase ADR ratification precedent** — operator-override invocation on Campaign Standing Order #14 is recorded here. Future mid-phase ratifications follow the same explicit-invocation pattern; not a blanket exception.

8. **Out-of-scope at M2.2** — single-commit additive-upstream pattern (ADR-017; later phase) · validation-as-dispatched-campaign pattern (ADR-018; P3/P5) · modular III for Obsidian (ADR-019; P3 M3.7) · verification-handoff topology (ADR-014; P3 M3.4) · installer packaging strategy (ADR-015; P4 M4.2). These remain in the campaign master ADR roadmap (`campaign_adna_serious_tool_readiness.md` lines ~484-498).

## Sibling/related decisions

- **ADR-005 three-way vault boundary** ([[adr_005_three_way_vault_boundary.md]]) — ecosystem propagation rule that governs how ADR-016 + Standing Order #11 + Clause B convention lift to `.adna/` upstream at v8 P6.
- **ADR-011 aDNA semver discipline** ([[adr_011_aDNA_semver_discipline.md]]) — adjacent governance ADR; same "codify what's practiced" pattern (ADR-011 ratified the two-track Major.Minor versioning policy that lived only in CHANGELOG; ADR-016 ratifies the per-mission context budget that lived only in slogan form).
- **Auto-archive convention** — deferred per D1; future ADR (provisional ADR-020 or later) ratifies after ≥ 3 instances of the router/archive pattern (skill graduation `skill_campaign_close_archive.md`).

## Sources

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §6 — Clause A content-load formula + decomposition threshold rule + Standing Order #11 candidate text
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m14_obj7_validation_output.md|m14_obj7_validation_output.md]] §6 — Clause C two-metric reporting variant + API-billing companion forecast (forecast only — M2.3 ratifies)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj7_validation_output.md|m21_obj7_validation_output.md]] §5 — Clause B heavy-file Read convention + D1 auto-archive deferral rationale
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj4_archive_convention_design.md|m21_obj4_archive_convention_design.md]] — D1 deferral rubric (≥ 3 instances before skill graduation)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|campaign master]] ADR roadmap §lines 484-498 — ADR-016 slot reservation; out-of-scope ADRs queued for later phases
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md|campaign CLAUDE.md]] Standing Order #14 — operator-override clause for load-bearing mid-phase decisions
- `node.aDNA/what/context/token_baselines.md` v0.1.1+addendum (peer vault; absolute path `/Users/stanley/lattice/node.aDNA/what/context/token_baselines.md`) — empirical baseline (645 MT cache_read corpus across 48 sessions + M2.1 split-as-pattern doctrine; not directly cited in ADR text but available for M2.3 retrospective)

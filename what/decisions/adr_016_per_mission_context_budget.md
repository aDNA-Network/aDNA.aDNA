---
type: adr
adr_number: 016
title: "Per-Mission Context Budget — token budgets, heavy-file Read convention, two-metric reporting variant as Project Standing Order #11"
status: accepted
created: 2026-05-19
updated: 2026-05-20
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
amended: 2026-05-20
amended_session: session_stanley_20260520T060143Z_v8_m23_s2
amended_clauses: [A, C]
appendices_added: [A]
deciders: [agent_stanley, operator_stanley]
related_decisions: [adr_005_three_way_vault_boundary, adr_011_aDNA_semver_discipline]
tags: [adr, decision, campaign_adna_serious_tool_readiness, m22, m23, v8, p2, per_mission_context_budget, standing_order_11, content_load_formula, decomposition_threshold, heavy_file_read_convention, two_metric_reporting, api_billing_companion_formula_ratified, per_mission_type_calibration_appendix, operator_override_so14, load_bearing, governance_consolidation, m13_consumer, m14_consumer, m21_consumer, m23_amendment]
---

# ADR-016: Per-Mission Context Budget — token budgets, heavy-file Read convention, two-metric reporting variant as Project Standing Order #11

## Status

**Accepted** at M2.2 S1 close 2026-05-19 (`session_stanley_20260519T233620Z_v8_m22_s1`). Drafted by Rosetta in the same session per the planning-class single-session shape. Co-signed by operator stanley at plan ratification.

**Standing Order #14 operator-override invoked** at plan ratification per the **load-bearing-decision exception clause**. Campaign Standing Order #14 normally gates ADR ratification at phase-exit; ADR-016 ratifies mid-P2 because per-mission context-budget discipline is load-bearing for every subsequent P2/P3/P4/P5 mission (estimate-vs-actual reporting, decomposition threshold enforcement, heavy-file Read convention adoption). Recording the override here so future mid-phase ratifications follow the same explicit-invocation pattern.

**Amended at M2.3 S2 2026-05-20** (`session_stanley_20260520T060143Z_v8_m23_s2`; D1=A path of M2.3 operator-decision gates). Clause C "forecast" → "ratified" with regression-fit empirical constants from the 49-session corpus (`m23_obj2_corpus_extraction.md` §3 + `m23_obj3_initial_findings.md` §3); Clause A threshold table extended with API-billing companion columns (cache_read forecast + turn_count forecast) per D5=A; Appendix A added with per-mission-type calibration table (5 mission classes; n=2-9 per class; v8 baseline) per D4=B. No new ADR created at M2.3 (D1=A consolidation path; ADR-018 slot reserved for validation-as-dispatched-campaign pattern per §Consequences §8). The M2.3 amendment chain operates **within** the M2.2 Standing Order #14 operator-override scope — Clause C itself pre-scheduled M2.3 as the ratifier ("API-billing formula stays forecast until M2.3 cross-campaign retrospective ratifies it"), so the amendment is the explicit completion of an already-authorized commitment, not a new mid-phase override invocation.

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

The **decomposition threshold rule** binds mission planning. **Amended at M2.3 S2** to add API-billing companion columns per D5=A (Clause C empirical constants — see below):

| Content-load band | API-billing cache_read forecast | turn_count forecast | Session shape recommendation |
|---|---|---|---|
| < 50 kT total | < 10 M | < 60-80 | Single session (compose objectives; transition tax dominates if you split) |
| 50-80 kT total | 10-15 M | 60-100 | 1-2 sessions; canonical-shape exception per Campaign S.O. #17 |
| 80-200 kT total | 15-25 M | 100-150 | 2-3 sessions (canonical 3-session implementation shape: S1 design / S2 destructive / S3 close) |
| ≥ 200 kT total | ≥ 25 M | ≥ 150 | Split into multiple missions; pay the campaign-level decomposition tax instead of session-level snowball |

API-billing thresholds derived from regression fit `cache_read ≈ 4.1 M + turns × 126 K` (49-session corpus; `m23_obj2_corpus_extraction.md` §3); content-load thresholds preserved verbatim from M2.2 ratification. Per-mission-type empirical bands at Appendix A.

**Session files** log `token_budget_actual_kT` (rough estimate at session close is sufficient; precise measurement available via the M1.4 `ingest_transcript.py` retrospective mechanism per Clause C).

**AARs** report an estimate-vs-actual table per session — content-load required; API-billing companion may be reported alongside per Clause C.

**Drift > 2× on EITHER metric triggers a retrospective**: if a mission's S1 actual exceeds estimate by > 2× on content-load OR API-billing (post-M2.3 amendment), the AAR flags M2.3-class retrospective at next opportunity. Persistent drift across ≥ 3 missions of the same class triggers ADR-016 amendment review.

### Clause B — Heavy-file Read convention

For any file ≥ 50 kT content-load OR ≥ 200 KB bytes, agents **default to** `Read(path, offset=N, limit=M)` rather than full-file Read.

**Canonical instance**: `aDNA.aDNA/STATE.md` (live in `aDNA.aDNA/AGENTS.md` "Heavy-File Read Convention" section since M2.1 S2 commit `235c3fd`).

**Rationale**: M2.1 S2 empirically validated the Read-tool 256 KB hard backstop — pre-split STATE.md (343.5 KB) returned `File content (339.2 KB) exceeds maximum allowed size (256 KB)` on the very session executing the split. This is a *hard backstop, not a soft warning*. Files in the 50 kT → 256 KB gap don't error out but pay the full cache_creation tax on every cold-start.

**Upstream propagation**: queued for v8 P6 per Campaign Standing Order #14 + ADR-005 rule 3. Carry placeholder lives at `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md`. v8 P6 lifts the convention into `.adna/AGENTS.md` so all 19+ ecosystem vaults inherit.

**Auto-memory companion**: `MEMORY.md` index entry at the operator's per-project memory directory + `feedback_heavy_file_read.md` content file (both live since M2.1 S2 commit `235c3fd`; format follows the two-step memory protocol).

### Clause C — Two-metric reporting variant

AARs **may** report in BOTH content-load (M1.3 method) AND API-billing (M1.4 method via `~/.adna/measurement/ingest_transcript.py` data) units.

**Content-load remains canonical** for mission-spec budgets (Clause A). The API-billing companion is a complement, not a replacement.

**API-billing companion formula — RATIFIED at M2.3 S2 2026-05-20** from the 49-session corpus regression-fit (`m23_obj2_corpus_extraction.md` §3):

```
session_cost_api_billing ≈ cache_creation_component + cache_read_component

where:
  cache_creation_component = cache_creation_floor + (turn_count × per_turn_cache_creation_additive)
  cache_read_component     = cache_read_floor     + (turn_count × per_turn_cache_read_multiplier)

empirical constants (49-session corpus regression fit; M2.3 ratified):
  cache_creation_floor             ≈ 328 K    (regression intercept; observed range 109-1247 K)
  per_turn_cache_creation_additive ≈   1 K    (regression slope)
  cache_read_floor                 ≈ 4.1 M    (regression intercept — cumulative warm-up baseline)
  per_turn_cache_read_multiplier   ≈ 126 K    (regression slope; per-turn corpus mean 189 K)
```

Composing for a 75-turn session: `cache_creation ≈ 328 K + 75 × 1 K = 403 K`; `cache_read ≈ 4.1 M + 75 × 126 K = 13.6 M`. Matches the 49-session corpus mean within rounding (cache_creation mean 404 K; cache_read mean 13.5 M).

**Reporting form when both metrics are used**: AAR token-budget table shows two columns (content-load kT + API-billing kT) per session; estimate-vs-actual computed for both. Drift > 2× on either metric triggers M2.3-class retrospective.

**Provenance**: empirical fit from 49-session corpus (M01-M35 Rosetta + v2 M01-M04 + LWX M-LWX-01-03 + v8 M0-M2.2). Constants subject to refresh at network-scale corpus or persistent drift > 2× on cross-mission cohort. Per-mission-type bands at Appendix A.

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

4. **M2.3 retrospective consumer — RESOLVED 2026-05-20 (D1=A path)**. M2.3 S2 ratified the API-billing companion formula as ADR-016 Clause C amendment in place; see §Status (amendment line) + Clause C (empirical constants) + Appendix A (per-mission-type calibration). Calibration accuracy across M1.3 + M1.4 + M2.1 + M2.2 reported in `m23_obj7_validation_output.md` (S3 produces); no separate ADR created (ADR-018 slot reserved for validation-as-dispatched-campaign per §8).

5. **M2.4 AGENTS.md heat map consumer** — Clause B convention adoption signal across live-hook corpus. M2.4 still gated on ≥ 10 live-hook sessions; M2.2 contributes 1 post-ratification session.

6. **v8 P6 ecosystem propagation** — ADR-016 + Project Standing Order #11 + Clause B AGENTS.md convention all lift to `.adna/` upstream at v8 P6 per Campaign Standing Order #14 + ADR-005 rule 3. Backlog placeholder for the Clause B convention already exists at `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md`; ADR-016 + Standing Order #11 themselves enter the v8 P6 propagation queue at the next campaign master rotation.

7. **Mid-phase ADR ratification precedent** — operator-override invocation on Campaign Standing Order #14 is recorded here. Future mid-phase ratifications follow the same explicit-invocation pattern; not a blanket exception.

8. **Out-of-scope at M2.2** — single-commit additive-upstream pattern (ADR-020; reassigned at M1.5 — was ADR-017 at M2.2 drafting; ADR-017 now holds LIP-0006 + entity-types parallel-discharge per M1.5 ratification) · validation-as-dispatched-campaign pattern (ADR-018; P3/P5; slot preserved at M2.3 per D1=A) · modular III for Obsidian (ADR-019; P3 M3.7) · verification-handoff topology (ADR-014; P3 M3.4) · installer packaging strategy (ADR-015; P4 M4.2). These remain in the campaign master ADR roadmap (`campaign_adna_serious_tool_readiness.md` lines ~484-498).

## Appendix A — Per-mission-type calibration (v8 baseline; n caveats explicit)

Added at M2.3 S2 2026-05-20 per D4=B (keep as appendix; do NOT codify as new Clause D until n ≥ 5 per class — premature-codification deferral, same logic as M2.2 D1 auto-archive deferral).

Per-mission-type empirical bands from the 49-session corpus (`m23_obj2_corpus_extraction.md` §9 + `m23_obj3_initial_findings.md` §4):

| Mission class | n in corpus | Mean turns | Mean cache_read | Mean cache_creation | Recommended session shape |
|---|---|---|---|---|---|
| **planning** (no executable code; pure governance — M0, M2.2 precursor missions) | ~ 3 | 25-30 | 3-5 M | 300-500 K | **Single-session** (compresses naturally — transition tax dominates) |
| **implementation** (multi-objective with executable artifacts — M1.3, M1.4, M2.1, M2.3 itself) | ~ 9 | 65-90 | 13-18 M | 350-1250 K | **Canonical 3-session** (S1 design / S2 destructive / S3 close) |
| **measurement** (data-gathering + analysis — M1.3 obj-runs, M1.4 obj-runs) | ~ 5 | 75-90 | 15-25 M | 400-1000 K | **Canonical 3-session** (often blends with implementation class) |
| **single-session planning** (consolidation w/o new measurement — M2.2, M1.5) | 2 | 24-30 | 3-5 M | 400-500 K | **Single-session** (planning-class exception per Campaign S.O. #17) |
| **destructive heavy-write** (long sessions with many Edits — outlier-band; M1.4 S2, M2.1 S2) | ~ 4 | 80-150 | 20-45 M | 500-1250 K | **2-session preferred** (decompose into design + destructive) |

**Status**: v8 baseline; corpus n=2-9 per class. **Codification deferred** to future cumulative ADR once n ≥ 5 per class achieved across additional M3.x + M4.x + M5.x mission corpus. M2.4 AGENTS.md heat map + M3.x forge-ecosystem missions feed the corpus toward the threshold.

**Cross-vault propagation**: M2.3 S3 folds this table into `node.aDNA/what/context/token_baselines.md` v0.1.2 (Hestia's canonical baseline). Future operators reading the calibration should consult the node.aDNA file for the freshest empirical bands.

**Limitations** (operator-visible caveats):

- n=2 (single-session planning) is statistically thin; bands narrow but lack distribution breadth — refresh at every new instance.
- All implementation-class sessions in the v8 corpus are aDNA.aDNA-vault sessions; forge-ecosystem missions (M3.x) may shift the bands when their corpus matures.
- Cache_creation max (1247 K — observed at M1.4 S2 destructive entry) sits well above the 500 K typical floor; outlier-class sessions may approach Read-tool 256 KB hard backstop without per-file partial-read discipline (per Clause B).
- API-billing constants from Clause C may drift on cross-mission cohorts of ≥ 10 sessions; trigger refresh review at next M2.3-class retrospective.

## Sibling/related decisions

- **ADR-005 three-way vault boundary** ([[adr_005_three_way_vault_boundary.md]]) — ecosystem propagation rule that governs how ADR-016 + Standing Order #11 + Clause B convention lift to `.adna/` upstream at v8 P6.
- **ADR-011 aDNA semver discipline** ([[adr_011_aDNA_semver_discipline.md]]) — adjacent governance ADR; same "codify what's practiced" pattern (ADR-011 ratified the two-track Major.Minor versioning policy that lived only in CHANGELOG; ADR-016 ratifies the per-mission context budget that lived only in slogan form).
- **Auto-archive convention** — deferred per D1; future ADR ratifies after ≥ 3 instances of the router/archive pattern (skill graduation `skill_campaign_close_archive.md`). *Number TBD*: was provisional **ADR-020** at M2.2 drafting; ADR-020 reassigned at M1.5 to the single-commit additive-upstream pattern (see §Consequences §8); auto-archive provisional placeholder is now **ADR-021 or later** at next campaign master roadmap rotation.

## Sources

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §6 — Clause A content-load formula + decomposition threshold rule + Standing Order #11 candidate text
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m14_obj7_validation_output.md|m14_obj7_validation_output.md]] §6 — Clause C two-metric reporting variant + API-billing companion forecast (M2.3 S2 ratified the forecast — see §Status amendment + Clause C constants)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_obj2_corpus_extraction.md|m23_obj2_corpus_extraction.md]] §3 — **Clause C empirical constants source** (49-session regression fit; `cache_read ≈ 4.1 M + 126 K × turns` / `cache_creation ≈ 328 K + 1 K × turns`)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_obj3_initial_findings.md|m23_obj3_initial_findings.md]] §3-§5 — D1-D5 operator-decision flags + recommended language + per-mission-type binning rationale (Appendix A source)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_obj5_adr_007_deferral_memo.md|m23_obj5_adr_007_deferral_memo.md]] — D2=B path artifact (ADR-007 elevation deferred to M2.4; gap analysis 7 < 10 SQLite sessions)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj7_validation_output.md|m21_obj7_validation_output.md]] §5 — Clause B heavy-file Read convention + D1 auto-archive deferral rationale
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj4_archive_convention_design.md|m21_obj4_archive_convention_design.md]] — D1 deferral rubric (≥ 3 instances before skill graduation)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|campaign master]] ADR roadmap §lines 484-498 — ADR-016 slot reservation; out-of-scope ADRs queued for later phases
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md|campaign CLAUDE.md]] Standing Order #14 — operator-override clause for load-bearing mid-phase decisions
- `node.aDNA/what/context/token_baselines.md` v0.1.1+addendum (peer vault; absolute path `/Users/stanley/aDNA/node.aDNA/what/context/token_baselines.md`) — empirical baseline (645 MT cache_read corpus across 48 sessions + M2.1 split-as-pattern doctrine; not directly cited in ADR text but available for M2.3 retrospective)

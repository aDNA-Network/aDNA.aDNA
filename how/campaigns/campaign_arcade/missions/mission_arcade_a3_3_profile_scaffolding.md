---
plan_id: mission_arcade_a3_3_profile_scaffolding
type: plan
title: "Profile scaffolding: placement, template, validator design, and the fold path for Lister M7"
owner: stanley
status: completed
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 3
campaign_mission_number: 11
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-19
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: opus
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 60
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
token_budget_actual: 70   # ≈ content-load; see AAR
depends_on:
- mission_arcade_a3_2_adr_066_profiles_hash_manifest
blocks:
- mission_arcade_a4_1_standard_v2_6
gate: "G3 — none beyond ADR-066; this mission is scaffolding."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Profile scaffolding: placement, template, validator design, and the fold path for Lister M7

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P3 — aDNA-Medical seam
**Mission**: 11 of 15

## Goal

Give a profile a home before the first one arrives: what/docs/profiles/<slug>/ placement, a template_profile_spec.md the medical spec can be reshaped into, an adna_validate.py --profile <slug> design note (checks V1–V14 as the first instance), and the documented fold path by which Lister's M7 upstream AAR lands in this vault as a proposal (ADR-055 process).

## Exit Gate

G3 — none beyond ADR-066; this mission is scaffolding.

## Objectives

### 1. Placement + template
- **Status**: completed
- **Session**: session_stanley_20261019_230119_arcade_a3_3_profile_scaffolding
- **Description**: Directory, AGENTS.md, template with the medical spec's section skeleton generalized.
- **Files**: what/docs/profiles/AGENTS.md · how/templates/template_profile_spec.md
- **Depends on**: none

### 2. Validator design note
- **Status**: completed
- **Session**: session_stanley_20261019_230119_arcade_a3_3_profile_scaffolding
- **Description**: Interface only (build is a later opus mission); the hash-manifest check reuses ADR-066's algorithm.
- **Files**: what/lattices/tools/README (section) or artifacts/p3/validator_profile_design.md
- **Depends on**: 1

### 3. Fold path
- **Status**: completed
- **Session**: session_stanley_20261019_230119_arcade_a3_3_profile_scaffolding
- **Description**: One page: from AILedger forge → proposal file in how/backlog/ → ADR → v2.x cut.
- **Files**: artifacts/p3/lister_fold_path.md
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a3_2_adr_066_profiles_hash_manifest]].

### Next Mission Inputs
- Feeds [[mission_arcade_a4_1_standard_v2_6]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

*Closed 2026-10-19, `session_stanley_20261019_230119_arcade_a3_3_profile_scaffolding` (Tier 2, opus). Plan-time rulings R29–R33 (operator: "give your recs on the Qs/ADRs/etc and go on memo/etc").*

### Deliverables
- [D] `what/docs/profiles/AGENTS.md`: the listed-profile table (empty), aDNA-Medical under *Expected* (`HORIZON`), the "listed, not hosted" rule, steward how-to. The card's original "a profile's home" was reconciled to aDNA.aDNA ADR-066 clause 1 (R30): the directory holds **no** steward text.
- [D] `how/templates/template_profile_spec.md`: the Lister spec's 16-section skeleton generalised, tense-labelled (cites aDNA.aDNA ADR-066, not section numbers, until the cut). Template count 46 → 47 (operational 9 → 10) carried into `CLAUDE.md` · `README.md` · `MANIFEST.md` · `how/templates/AGENTS.md`; validator zero drift.
- [D] `artifacts/p3/validator_profile_design.md`: `--profile P[@V]` · `--rules DIR` · `--verify`; three profile outcomes (verified · failed · unverified, the last never failing); V1–V14 mapped (base covers 2 fully · 2 partly · 9 not · 1 moot after clause 3).
- [D] `artifacts/p3/lister_fold_path.md`: nine steps, owner and boundary per step.
- [D] Off-card, ruled at plan time: the Ledoux reply (R31) **delivered** into `City.aDNA/who/coordination/inbox/` (City HEAD `dc97d90`, cmp identical, body md5 `dc4d3879`); the G3 memo to Lannes (R33) `outbound_ready`; the Harness §7 row delta (R32) `artifacts/p3/spec_terminal_harness_contract_row_delta.md` for a fifth G3 line; A4.1 q10 (wrapper fields) + q11 (AEP owed).

### Descoped
- The validator build (a later opus mission after the v2.6 cut). Any steward's checks.

### Key Findings
- [D] **The validator never reads the declared level.** `adna_validate.py` auto-detects or takes `--level` and has 0 references to `adna_conformance`; declared-vs-measured is unchecked today, and the design adds it as a warning (never an error, §15.4).
- [D] **ADR-066 is normative and has no AEP.** aDNA.aDNA ADR-055 §5 escalates normative change to an AEP; the collection holds aep-0001 · aep-0002 only. Filed at publication, not before (R2 + Q9) → A4.1 q11, a G3 item.
- [D] **A peer's field gloss failed at the object.** The count note relayed to City called `contract:` `<name>@<version>`; 2 of 121 match. The citation-shaped pair is `source_vault` + `version` (193). The approved R31(a) said "`contract` only" on that gloss and was corrected before the send. *Verify an inherited finding at the object* held again.
- [D] HarnessOld.aDNA is absent at the seal, so the §7 row delta carries a precondition and a conditional-apply clause.

### Scope Changes
- +3 off-card objects (Ledoux reply, Lannes G3 memo, Harness row delta), ruled R31–R33 at plan time.

## AAR

- **Worked**: Reconciling the card to ADR-066 clause 1 *before* writing kept the profiles directory a list, so no steward text was imported.
- **Didn't**: My approved R31(a) rested on a relayed field gloss. It took the field census to catch it, and the memo carries the correction.
- **Finding**: The validator has never compared declared conformance to measured, a gap older than profiles. Profiles make it visible.
- **Change**: Derive a field's *values*, not just its presence count, before answering what the field means.
- **Follow-up**: G3 (five §7.7 lines + the Lannes send GO + the push, if Q9 lifts) · A4.1 q10/q11 · the validator build after the cut. Budget ≈70 vs 60 kT (+17 %: three off-card objects).

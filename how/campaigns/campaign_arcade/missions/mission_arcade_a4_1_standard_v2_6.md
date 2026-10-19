---
plan_id: mission_arcade_a4_1_standard_v2_6
type: plan
title: "Assemble the standard v2.6 cut for the operator's gate"
owner: stanley
status: queued
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 4
campaign_mission_number: 12
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-19
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: fable
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 150
token_budget_unit: kT_content_load
estimated_sessions: 2
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a3_3_profile_scaffolding
blocks:
- mission_arcade_a4_2_image_v8_13
gate: "G4 — the v2.6 cut (operator)."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Assemble the standard v2.6 cut for the operator's gate

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P4 — The cut
**Mission**: 12 of 15

## Goal

One sitting per §15.4: fold the ratified decisions into adna_standard.md and cut v2.6 only when the operator signs. Queue: ADR-063 errata (two §7.7 lines) · ADR-062 annex path (Noether 10-10: lattice_core at LatticeProtocol.aDNA/what/schemas/) · the LinkML frontmatter master's five rulings (ISS gate authored from Noether 10-03/10-07) · ADR-066 profiles + release integrity · spec_graph_exchange cross-reference in §5.3/§19 · the campaign layer codified (idea_upstream_standard_codify_campaign_layer) · the four-surface version-cut checklist.

**Queued 2026-10-16 (A1.3, ruling R10 — Vauban 10-06 row 7):** one §19.6 line — *an ADR number is qualified by its vault and, where a campaign numbers its own ADRs, by the campaign's one-letter prefix (`ADR-B08` is Terminal's Bastide ADR 08, not `ADR-008`)* — plus `adr_` (and `campaign_` · `coord_`) in the §6.4 type-prefix table. Not edited at A1.3; the standard moves only at the cut. Source: `how/campaigns/campaign_arcade/artifacts/p1/vauban_rulings_packet.md` row 10-06 #7.

**Incoming (heads-up 2026-10-16, Noether — `inbox/coord_2026_10_16_noether_to_rosetta_academie_p4_open_heads_up.md`, no ack):** ACADÉMIE P4's standard-amendment package (multi-modal memorialization; `lattice_core` masters at LP `what/schemas/`) is coming, sized to ride this queue if Rosetta agrees — rule it when it lands, not before.

## Exit Gate

G4 — the v2.6 cut (operator).

## Objectives

### 1. ISS gate for the standard rulings
- **Status**: planned
- **Session**: 
- **Description**: skill_create_iss; every ratification line empty until signed.
- **Files**: how/gates/arcade_v2_6_gate.md
- **Depends on**: none

### 2. Fold + cut
- **Status**: planned
- **Session**: 
- **Description**: adna_standard.md v2.6 on signature only; frontmatter title · updated · header changelog · footer all move together.
- **Files**: what/docs/adna_standard.md · CHANGELOG.md
- **Depends on**: 1

### 3. Replies to Noether
- **Status**: planned
- **Session**: 
- **Description**: Three ack_required memos answered in one (10-07 · 10-08 · 10-10) — outbound_ready.
- **Files**: who/coordination/coord_*_rosetta_to_noether_*.md
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a3_3_profile_scaffolding]].

### Next Mission Inputs
- Feeds [[mission_arcade_a4_2_image_v8_13]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.
- **Queue rows added 2026-10-16 (G2 sitting):** (q1) Noether's M-A1 package `LatticeProtocol.aDNA/how/campaigns/campaign_academie/artifacts/m_a1_package/` — the **v2.6 SHOULD rider** ruled here; AEP numbered (AEP-0003 was next free 2026-10-16); **ADR seat 067 held**; six open questions answered by memo before force; v3.0 MUST logged for the major window. (q2) `spec_graph_exchange` §5.1 **one-clause amendment** (Themis F-164-01): "v1 = the six rules executing (Exchange ADR-066); the stamp moves only in the commit that runs all six". (q3) `spec_graph_exchange` §5.1 **L2-4 v1.1 wording** (Q-066-1 ruled wide): a *real directory* (symlinks are Standing-Rule-9 shims and pass) at graph root whose `CLAUDE.md` carries `federation_ref:`. (q4) `idea_upstream_registry_derivability` — candidate 11th compliance dimension (Mondrian §4). (q5) `who/governance/lip_registry.md` §2 rows → §7.7 after steward confirmations; §4 consumer in `adna_validate.py`.
- **Queue rows added 2026-10-19 (A3.1 sitting, from the 10-18 inbox; receipts committed byte-unchanged):** (q6) **Themis corrects Q-066-1's count:** under the q3 clause the live legacy-root-wrapper count is **3, not 0** — `WilhelmAI.aDNA/siteforge` (Home §C defers it, active WIP) · `RiemannCommons.aDNA/iii` (added 2026-09-08) · `ASOAtlas.aDNA/iss` (2026-09-25) — the last two created *after* aDNA.aDNA ADR-045 in the legacy shape. Re-checked 2026-10-19: all three are real directories, not symlinks, and each carries `federation_ref:`. Re-measure by `lstat` + a *tracked* `CLAUDE.md` at the cut; weighing the three is Rosetta's + Hestia's, and nothing goes to the owners from here. Exchange L2 rule-set v1 is **built (0.0.45), not serving** (Exchange ADR-066 §2.6) — so q2's amendment describes a built object, tense TAUGHT-AS-DESIGN until a root serves it. (q7) **F-AC-44 is fixed** at LP `f834cc7` (M-F44, 2026-10-16); q1's package still names it open at `templates/template_check_script.md` L71 and `doctrine_multimodal_memorialization.md` L113 + L193 — read those lines as "fixed at `f834cc7`". Noether: no objection to the three leanings; LinkML keys are Pāṇini's act (two LP memos unread on that desk); `classify_sweep.py` usable for the audit with its two recorded warnings. (q8) **Vauban (Terminal.aDNA):** the access-point threat-model idea is re-homed to `Terminal.aDNA/how/backlog/idea_access_point_threat_model.md` — the live target for the hook `spec_platform_ecosystem` v0.4 defers (repoint at the next spec bump); the Python Terminal's pointer-spec is Terminal ROADMAP-v1.2 row 81, so `spec_terminal_harness_contract` §7 row 3 stays **HORIZON** until it lands.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
-

### Descoped
-

### Key Findings
-

### Scope Changes
-

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:

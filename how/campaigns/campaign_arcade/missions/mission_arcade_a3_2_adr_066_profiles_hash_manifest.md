---
plan_id: mission_arcade_a3_2_adr_066_profiles_hash_manifest
type: plan
title: "ADR-066 — conformance profiles + release-integrity hash manifest (U23), with U15 · U18 · U19"
owner: stanley
status: completed
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 3
campaign_mission_number: 10
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-19
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: fable
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 80
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: 1
token_budget_actual: 55   # ≈ content-load kT (rough, per ADR-016); the memo send rode the same sitting
executor_tier_actual: opus   # declared fable; recorded
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a3_1_lister_reading
blocks:
- mission_arcade_a3_3_profile_scaffolding
gate: "G3 — ADR-066 §7.7 (four lines)."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: ADR-066 — conformance profiles + release-integrity hash manifest (U23), with U15 · U18 · U19

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P3 — aDNA-Medical seam
**Mission**: 10 of 15

## Goal

The one normative change that lets aDNA-Medical be a profile OF the standard rather than a private fork: a named overlay (adna_conformance: <level>+<profile>) stacked on a conformance level with its own MUSTs (§5.5 new subsection), and a deterministic content-hash manifest so any release or instance can prove unmodified rules (new §-level Release integrity, §15.4 bound). Ride the three small seams with it: who/coordination/ optional at Starter (U15), an optional base data_class field (U19), and a purge carve-out from archive-never-delete for regulated data and secrets (U18).

## Exit Gate

G3 — ADR-066 §7.7 (four lines).

## Objectives

### 1. ADR-066 (proposed, for v2.6)
- **Status**: completed
- **Session**: session_stanley_20261019_211219_arcade_memo_send_and_a3_2_adr_066
- **Description**: Four clauses, each with its own §7.7 line (independent); LinkML.aDNA's profile_v0_1 and compliance_slots cited as the schema side; LP lattice_core DataTier cited.
- **Files**: what/decisions/adr_066_conformance_profiles_release_integrity.md · adr_index.md
- **Depends on**: none

### 2. Standard text drafted, not applied
- **Status**: completed
- **Session**: session_stanley_20261019_211219_arcade_memo_send_and_a3_2_adr_066
- **Description**: The §5.5 / §15.4 / §7.2 deltas as a diff file for A4.1; adna_standard.md byte-unchanged until the cut.
- **Files**: artifacts/p3/standard_deltas_adr_066.diff.md
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a3_1_lister_reading]].

### Next Mission Inputs
- Feeds [[mission_arcade_a3_3_profile_scaffolding]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

### Deliverables
- `what/decisions/adr_066_conformance_profiles_release_integrity.md`, `proposed`, with four independent §7.7 lines (G3):
  - (1) profiles: `<level>+<profile>`, never relaxing the base; an unknown profile is reported unverified and never failed; official = listed, not hosted; aDNA-Medical listed at its Gate 3 (`HORIZON`);
  - (2) §15.5 release integrity: Lister §11 generalised; MAY for any release, MUST for a declared profile; egress and model-routing modules inside the instance scope (A3.1 Q3); two digests never conflated; anchoring out of scope;
  - (3) `who/coordination/` optional at Starter, required at Standard and wherever more than one agent writes; §11.3 check conditional;
  - (4) `data_tier` as an optional base label (values upstream), plus a purge carve-out with a payload-free incident record.
  - `cites:` read first-hand; `visibility_note` = push held (R25).
- `artifacts/p3/standard_deltas_adr_066.diff.md`: 7 hunks against v2.5. Every minus line was re-found by `grep -nF` at L525 · L538 · L559 · L938 · L1119. `adna_standard.md` md5 `094a3266…` is unchanged.
- `adr_index.md`: row 066; seat 066 filled; tally 61 = 58 · 1 · 2, derived.
- A4.1 q9: `ceil(bytes/4)` for `token_estimate`, kept out of this ADR.
- Same sitting: the A3.1 memo to Lannes **delivered** (R26, `a672f5a`, pushed). Its §0 asks Jake the Q9 yes/no.

### Descoped
- Validator design → A3.3, as charted.

### Key Findings
- **The fleet already had the sensitivity key.** LP `lattice_core` `DataTier` (GREEN ⊂ AMBER ⊂ RED) and LinkML.aDNA's `data_tier` slot (`proposed`, "map the ancestors, don't mint names") exist, and 10 of this vault's own memos stamp `data_tier`. U19's `data_class` would have minted a second name for a different axis (disclosure vs travel). **R28 clause 4 was refined at drafting from `data_class` to `data_tier`**, and this is recorded in the ADR's ratification note.
- §7.6 item 2 already tells custom fields to carry a prefix, so Lister's unprefixed `data_class` is a §7.6 SHOULD-miss unless mapped. That edit is the steward's, carried at G3.
- Hunk 6 is shared text: the purge carve-out reads best directly after aDNA.aDNA ADR-063 E-2's archive-don't-delete sentence, so G3 and the v2.6 window should rule them together.

### Scope Changes
- The memo send (R26) ran in the same sitting, ahead of the A3.2 commits, so the last push precedes the R25 hold.

## AAR

- **Worked**: drafting the deltas against exact `grep -nF` anchors kept the ADR's clauses honest about what text they move. Splitting the push (memo first, ADR held) let R25 cost nothing.
- **Didn't**: the plan carried U19's `data_class` straight from Lister. Only reading the LinkML and LP objects at drafting caught that the fleet already owns the key.
- **Finding**: a profile's first draft will mint vocabulary the fleet already has. The standard's half of "profile, not fork" includes *pointing at* existing keys, not only adding seams.
- **Change**: in any ADR that adds a frontmatter field, grep the fleet's LinkML masters and the vault's own frontmatter for the concept before naming it.
- **Follow-up**: Q9 answer from Jake → push (or hold). G3 rules four lines. A3.3 (opus): placement, template, validator design (`<level>+<profile>` parse, `--verify`), Lister fold path, plus the G3 memo to Lister (`starter+medical`; `data_class` → prefix or `data_posture`). Budget ≈55 vs 80.

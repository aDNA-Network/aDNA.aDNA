---
plan_id: mission_arcade_a4_2_image_v8_13
type: plan
title: "Fire the v8.13 template release"
owner: stanley
status: active      # sitting 2 done 2026-10-20 (R47–R54): owed rows f1 · f2 · MP · R1, §4 Q2–Q5 ruled, v2.6 errata, Q9 answered → branch pushed (R53); objective 2 (the fire) waits on its own GO. Prior: sitting 1 (R44–R46) ledger + f-b/f-c/f-d local
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 4
campaign_mission_number: 13
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-20
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: opus
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 90
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a4_1_standard_v2_6
blocks:
- mission_arcade_a5_1_garnier_amendment
gate: "G4 — fire GO."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Fire the v8.13 template release

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P4 — The cut
**Mission**: 13 of 15

## Goal

Run skill_template_release for v8.13 with its queue: the mesh-probe skill + channel-proof fold · the Vauban rows accepted at A1.3 (**ruled 2026-10-16, R7–R9**, all `proposed` in place: `template_aar` §Carries · `template_campaign` ×4 · `template_campaign_mission` + `template_mission` §Premise pass + §Descoped · `template_session` `issued_by:`/`continues:`/open-seal reads · `template_aar_lightweight` §Boundary AAR-light · `pattern_iss_operator_gate` §4 cl. 5 + `skill_create_iss` affordance rule · **new** `pattern_ledger_backed_acceptance_tables` (draft) — ledger: `artifacts/p1/vauban_rulings_packet.md` §Objects) · the deep_research.lattice.yaml CEL condition fix (Noether 10-08: :91 and :95 → `effort_level in [...]`) · the P5 / P7 ADRs owed by v8.12 · Rand's spec_forge_ecosystem row (Design.aDNA) · template_profile_spec if A3.3 landed. Diff-based delta-only fold; tags only; dry-run then pause for the fire GO.

## Exit Gate

G4 — fire GO.

## Objectives

### 1. Release ledger
- **Status**: completed
- **Session**: session_stanley_20261020_010905_arcade_a4_2_ledger_and_local_fixes
- **Description**: Preconditions · payload enumerated · the five version surfaces · smoke test rows.
- **Files**: how/campaigns/campaign_arcade/artifacts/p4/v8_13_release_ledger.md
- **Depends on**: none

### 2. Fire + deploy tail
- **Status**: planned
- **Session**: 
- **Description**: Only on the operator's GO; build_tour_files re-vendors; gate-49 red-first discipline if home changes.
- **Files**: aDNA-Network/aDNA · .adna/ local sync · site/
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a4_1_standard_v2_6]].

### Next Mission Inputs
- Feeds [[mission_arcade_a5_1_garnier_amendment]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.
- **Fire rows added 2026-10-16 (G2 sitting):** (f1) **Canvas partition repair** of the 8 v8.11 example canvases (template ×4 + this vault ×4), by Mondrian's partition test: `hello_world.canvas` = derived → `authority: "view"` · `production: "generated"` · `sync.source_name: hello_world.lattice.yaml` · `sync_hash` via `compute_sync_hash()`; the three `template_*.canvas` = primary → **omit** `authority`/`production`/`source_name` (never invent a source); A-2 fields per LIP-0010/0011. Release-note line: forks before v8.13 carry the old stamp until their next upgrade. (f2) **RFC1918 redaction** in `.adna/how/skills/skill_l1_upgrade.md` + this vault's copy: literal → `<overlay-ip>`/`<overlay-subnet>` placeholder resolved at Home.aDNA + an RFC 5737 example (`198.51.100.0/24`); fix-forward, records untouched (Canvas ADR-012 posture). Release-note line for the ~80 earlier forks.
- **Fire rows added 2026-10-20 (G4 sitting, R43):** ⛔ **this fire is publication — it waits on Q9 (R41)**. (f-a) **Standard v2.6** is folded in this vault (`what/docs/adna_standard.md`, local, unreleased): the release moves the standard version surface v2.5 → v2.6, including this vault's `MANIFEST.md` L174 "aDNA Standard v2.5 | Inherited" row, which describes the image and so moves only with it. (f-b) **B3:** Derivability, an 11th compliance dimension (`how/backlog/idea_upstream_registry_derivability.md`): `CLAUDE.md` §Compliance Dimensions 10 → 11 + a check in `what/lattices/tools/compliance_checker.py`; `lip_registry.md` §4 is its first in-vault consumer. (f-c) **The Part C image items** (positions signed in `how/gates/arcade_v2_6_gate.md` row C1; detail `../artifacts/p4/v2_6_cut_queue.md` §4): `deep_research.lattice.yaml` L91/L95 → `effort_level in ['standard', 'comprehensive']` / `in ['minimal', 'focused']` (a real defect: a comprehensive run skips the review gate) · `claude_code.lattice.yaml` (`runtime` under `execution`, drop `updated`; 66 vaults carry it) · the two composition misfits (`binder_generation`, `full_therapeutics`) · `composed_therapeutics.lattice.yaml:50` direction · `lattice_interop.md` §2.2/§5.1 canonical interface form + §2.5 `port` informative · a `description` on `condition` in `lattice_yaml_schema.json` (CEL, LinkML.aDNA ADR-018) · `tools/lattice_validate.py` consumes the generated face · `.adna/what/ontology.md` Base Invariance row cites the aDNA.aDNA ADR-044 exception + `entity_count` 26 → 28 · the date-loader note (ISO strings before validation) in `adna_validate` guidance. (f-d) **aDNA.aDNA ADR-067 clause 4:** the stamp-currency warning in `adna_validate.py`. (f-e) **AEPs owed at publication:** AEP-0003 (aDNA.aDNA ADR-067, Noether's draft) + one for aDNA.aDNA ADR-066 (q11), filed into `site/src/content/proposals/` only when the hold lifts; no company name (R2).

## Completion Summary

*Partial: sitting 1 (2026-10-20). Completed at the fire.*

### Deliverables
- Sitting 1 (R44 hold · R45 Noether send · R46 scope):
  - the Noether reply was delivered, so aDNA.aDNA ADR-067 is in force;
  - `artifacts/p4/v8_13_release_ledger.md` (objective 1);
  - f-c (examples · `lattice_interop.md` v1.1.0 · schema `condition` · `lattice_validate.py` face + `faces/` · `ontology.md` · date note);
  - f-b (d11 Derivability + G-015 + the 0–5/50 → 0–3/33 correction);
  - f-d (stamp currency);
  - all committed locally (six commits), none pushed.
- Sitting 2 (R47 owed rows · R48 `+agent` + `entity_count` · R49 image scope · R50 Aspasia · R51–R52 v2.6 errata):
  - f1 canvas partition `c03b8a8` · f2 redaction `7553f59` · MP `skill_mesh_probe_discipline` `21af31c` · R1 Rand's row `9805032`;
  - the `+agent` divergence recorded in the canonical schema `57d31a9`;
  - `doctrine_credential_handling` §5.3 Holders PROPOSED + the Aspasia reply `outbound_ready` `bbfa0dc`;
  - §19.9 errata + aDNA.aDNA ADR-067 erratum note + G4 gate §3a `04ea898`;
  - the ledger re-measured `0d1608a`;
  - at the seal: Q9 answered (R53, branch pushed at close); R38 met → `spec_terminal_harness_contract` v0.3 `ca9f8b6` (R54).

### Descoped
- P5 (root-triad exception ADR) and P7 (`standing_grant` + unattended-envelope ADRs) → v8.14 (R47).
- The draft `pattern_ledger_backed_acceptance_tables` and the ISS family stay out of the image (R49).

### Key Findings
- [D] Six card rows were **not authored** when this sitting opened: f1 canvases (byte-identical to the image) · f2 (`10.42.0.1` at `:230`) · the mesh-probe skill (idea only) · the P5 and P7 ADRs · Rand's row. All are listed in ledger §2b.
- [D] `CLAUDE.md` §Compliance Dimensions said 0–5 / 50; the checker scores 0–3 / 30, so the line was wrong since it was written. The image carries the same text twice (ledger f-b′).
- [D] Consuming the face makes `lattice_validate.py` accept `agent`, which the canonical schema does not list (ledger §4 Q3).
- [D] The signed `entity_count` 28 is a raw row count; the dev copy's derived 27 is what a fold ships (ledger §4 Q4).
- [D] Sitting 2: the f2 redaction was owed at **three** lines, not one. The 10-16 memo to Mondrian counted the full address; the subnet also stood as `10.42.0.x` in prose and in the checklist table (image `:236` · `:392`).
- [D] Sitting 2: as folded, §19.9 item 5 failed **this vault's own** f-c4 face, a pinned byte copy. Noether's post-fold read found the seam from the other side. Fixed before publication (R51), so the standard, aDNA.aDNA ADR-067's Q5 and `adna_validate`'s f-d check now agree.
- [D] Sitting 2: the skills count has two surfaces in MANIFEST (the tree line and `### Skills (N)`); the validator caught the second one. The Mondrian canvas hashes reproduced exactly (`28cf14bb…`, `85b1fe92…`), a second-route check on f1.

### Scope Changes
-

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:

---
plan_id: mission_arcade_a4_1_standard_v2_6
type: plan
title: "Assemble the standard v2.6 cut for the operator's gate"
owner: stanley
status: completed   # 2026-10-20 — G4 signed (R43); v2.6 folded LOCALLY (md5 094a3266 → 3e883ab4); Noether reply outbound_ready; push held (R41)
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 4
campaign_mission_number: 12
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-20
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
- **Status**: completed — gate AUTHORED, every line blank (15 lines); queue at `artifacts/p4/v2_6_cut_queue.md`
- **Session**: session_stanley_20261019_235912_arcade_a4_1_queue_and_gate
- **Description**: skill_create_iss; every ratification line empty until signed.
- **Files**: how/gates/arcade_v2_6_gate.md
- **Depends on**: none

### 2. Fold + cut
- **Status**: completed — v2.6 folded locally (1522 → 1613 lines; 12 lines replaced, 103 added; four surfaces together); not released (R41)
- **Session**: session_stanley_20261020_001835_arcade_g4_v2_6_fold
- **Description**: adna_standard.md v2.6 on signature only; frontmatter title · updated · header changelog · footer all move together.
- **Files**: what/docs/adna_standard.md · CHANGELOG.md
- **Depends on**: 1

### 3. Replies to Noether
- **Status**: completed — one memo, four memos + M-A1 answered, `outbound_ready` (send GO owed)
- **Session**: session_stanley_20261020_001835_arcade_g4_v2_6_fold
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
- **Queue row added 2026-10-19 (A3.2 sitting):** (q9) **`ceil(bytes/4)` as the SHOULD method for `token_estimate`** (Lister U23 c; A3.1 §3 Q6). §5.5 item 9 requires `token_estimate` with no unit. aDNA.aDNA ADR-016's kT is a planning unit, not a file measure. It is held out of aDNA.aDNA ADR-066 because it is not profile-specific. One §7.7 line. Also at the cut: apply only the aDNA.aDNA ADR-066 clauses accepted at G3, from `artifacts/p3/standard_deltas_adr_066.diff.md` (7 hunks; hunk 6 shares its text with ADR-063 E-2).
- **Queue rows added 2026-10-19 (A3.3 sitting, rulings R29–R33):** (q10) **A minimal `federation_ref` clause plus a closed wrapper `status` vocabulary** (Ledoux, City.aDNA, 10-19; answered provisionally by `who/coordination/coord_2026_10_19_rosetta_to_ledoux_wrapper_fields_provisional_reading.md`, delivered). Today [D] v2.5 defines no wrapper field (`grep -c federation_ref` = 0; §5.3 fixes placement only, aDNA.aDNA ADR-045). Derived on 392 wrappers: the citation-shaped pair is `federation_ref.source_vault` + `version` (193 blocks with both and a non-null version). `contract` is a kind label (only 2 of 121 carry `<name>@<version>`). `pinned_at_commit` is at block level in 183. `status` takes 18 values (158 files carry none). Candidate text: name the pair, version-as-literal (no normalisation), `pinned_at_commit` as the one presence check, and a small closed status vocabulary *mapped from* the 18 in use ("map the ancestors, don't mint names"). Two §7.7 lines. (q11) **AEP owed for aDNA.aDNA ADR-066** (`artifacts/p3/lister_fold_path.md` §⚠): aDNA.aDNA ADR-055 §5 escalates normative change to an AEP; ADR-066 has none (`site/src/content/proposals/` holds aep-0001 · aep-0002). File it **at publication, not before** (R2 + the Q9 hold), naming the profile and not its steward; the cut records ADR-066 as "AEP owed" until then. Number per the collection at filing; q1 earmarks the next free for Noether's M-A1 rider.

- **Sitting 1 (2026-10-20, R41–R42):** R41 — G4 does not wait on Q9 for LOCAL work; on signature, fold + commit locally; publication (push · A4.2 release · the AEPs) waits on Q9. R42 — sitting 1 = queue + gate. Outputs: `how/campaigns/campaign_arcade/artifacts/p4/v2_6_cut_queue.md` + `how/gates/arcade_v2_6_gate.md`. Card-text corrections found at the object: the "four-surface version-cut checklist" is already §15.4 (v2.5, aDNA.aDNA ADR-046) — a record, not a row; the "Incoming" ACADÉMIE P4 package has landed and **is** q1 (card M-A1) → gate A8; q4 is governance, not standard text (B3 → A4.2); the card's three Noether memos are four (10-03 frontmatter master is also `ack_required`) → one reply, Part C. Budget so far ≈70 kT of 150.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- `how/campaigns/campaign_arcade/artifacts/p4/v2_6_cut_queue.md` (the queue, at the object) · `how/gates/arcade_v2_6_gate.md` (G4, 15 lines, **signed R43**)
- `what/docs/adna_standard.md` **v2.6** (local, unreleased): §4.1 · §5.3 · §5.5 (+ Profiles) · §6.4 · §7.2 · §11.3 · §15.1 · new §15.5 · §19 Scan · §19.6 · new §19.7–§19.9; md5 `094a3266` → `3e883ab4`; `diff` = 12 lines replaced, 103 added, nothing else removed
- aDNA.aDNA ADR-063 accepted (E-1 + E-2) · **aDNA.aDNA ADR-067 created + accepted** (Noether's M-A1 draft; clauses 1, 2, 4) · aDNA.aDNA ADR-066 fold note + claim re-tensed · aDNA.aDNA ADR-062 annex erratum · `adr_index` tally derived 62 = 61 · 1 · 0
- `spec_graph_exchange` v0.2 (B1 + B2) · `spec_platform_ecosystem` v0.5 (B5) · `lip_registry.md` (b) ruled (B4) · two backlog ideas dispositioned (A7 accepted, B3 routed)
- `who/coordination/coord_2026_10_20_rosetta_to_noether_v2_6_cut_four_memos_answered.md` `outbound_ready`
- A4.2 card: fire rows f-a…f-e (the standard surface, B3, the Part C image items, aDNA.aDNA ADR-067 clause 4, the AEPs)

### Descoped
- A9b (a closed wrapper `status` vocabulary) → v3.0 window / own ADR · aDNA.aDNA ADR-067 clause 3 → the major window · the HTML ISS render (markdown gate record used, vault precedent) · publication of every object above (R41, Q9)

### Key Findings
- [D] The card's "four-surface checklist" row was an existing rule (§15.4, v2.5) — a queue can carry rules already in force; check before listing.
- [D] The "incoming" ACADÉMIE P4 package had already landed as q1 — two card rows were one object.
- [D] The owed Noether memos were four, not three (10-03 is also `ack_required`).
- [D] q10's counts did not reproduce (405 · 203 · 192 · 23 vs 392 · 193 · 183 · 18), so the standard text cites no numbers; a predicate bug of mine (it skipped every how/federation wrapper) was caught before the number was used.
- [D] Noether 10-08: the template `deep_research` lattice misroutes under CEL (a comprehensive run skips the review gate) — a live defect in the image, fixed in A4.2's queue.

### Scope Changes
- The gate gained six non-standard rows (B1–B6) and a Part C reply-position line (C1) so that one signature covered every v2.6-window decision. Plan-time rulings R41 (local fold allowed while Q9 holds) · R42 (two sittings) · R43 (signed as recommended).

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: Re-finding every anchor by `grep -nF` before writing, and folding by an assert-per-anchor script — 14 passages landed exactly once and the diff removed only the 12 intended lines.
- **Didn't**: The q10 counts carried from A3.3 did not reproduce, and my first re-derivation had a predicate bug; a number copied forward is not a measurement.
- **Finding**: A gate that carries candidate words (T-1…T-6) makes "signed as recommended" a signature on text, not on intentions — the fold needed no new judgement.
- **Change**: Queue rows are checked against the live standard before they are listed (two of this card's rows were already settled).
- **Follow-up**: Send GO for the Noether reply · Q9 (Jake) → push + A4.2 fire · AEP-0003 + aDNA.aDNA ADR-066's AEP at publication · A9b + aDNA.aDNA ADR-067 clause 3 to the v3.0 window. Budget ≈70 + 75 = 145 kT vs 150.

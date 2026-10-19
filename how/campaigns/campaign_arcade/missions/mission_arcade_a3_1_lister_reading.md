---
plan_id: mission_arcade_a3_1_lister_reading
type: plan
title: "Rosetta's reading of Operation Lister Phase 1: U1–U25 dispositioned, §16 answered, memo to Jake's desk"
owner: stanley
status: completed
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 3
campaign_mission_number: 9
mission_class: reconnaissance
created: '2026-10-15'
updated: 2026-10-19
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: fable
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 90
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: 1
token_budget_actual: 75   # ≈ content-load kT, one sitting (rough, per ADR-016)
executor_tier_actual: opus   # declared fable; recorded, not hidden
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a2_3_public_face_account
blocks:
- mission_arcade_a3_2_adr_066_profiles_hash_manifest
gate: "G3 — memo GO; Lister Gate 1/2/3 stay Jake + Stanley's."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Rosetta's reading of Operation Lister Phase 1: U1–U25 dispositioned, §16 answered, memo to Jake's desk

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P3 — aDNA-Medical seam
**Mission**: 9 of 15

## Goal

Read the three Lister artifacts (spec v0.1.0-draft · disposition ledger · upstream candidates) from the standard's side and answer: which of U1–U25 the standard accepts now, at v2.6, at v3.0, or declines, each with its target section; and what the standard says to the eleven §16 Gate-1 questions. The reading is advisory to Gate 1 (Jake + Stanley sign it, not Rosetta) and is the input ADR-066 builds on.

## Exit Gate

G3 — memo GO; Lister Gate 1/2/3 stay Jake + Stanley's.

## Objectives

### 1. U1–U25 disposition table
- **Status**: completed
- **Session**: session_stanley_20261019_205516_arcade_a3_1_lister_reading
- **Description**: accept-now / v2.6 / v3.0 / decline · target § · size · risk; the primer's I-rows cross-referenced where they coincide (U9, U14).
- **Files**: artifacts/p3/lister_upstream_disposition.md
- **Depends on**: none

### 2. §16 answers
- **Status**: completed
- **Session**: session_stanley_20261019_205516_arcade_a3_1_lister_reading
- **Description**: Eleven rows; D1 placement answered from ADR-065's reading (profile authored in the company graph, published to the standard at release as an official profile).
- **Files**: same
- **Depends on**: 1

### 3. Memo to Lannes/Jake
- **Status**: completed
- **Session**: session_stanley_20261019_205516_arcade_a3_1_lister_reading
- **Description**: outbound_ready; names-only; carries the two files by path.
- **Files**: who/coordination/coord_*_rosetta_to_lannes_*.md
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a2_3_public_face_account]].

### Next Mission Inputs
- Feeds [[mission_arcade_a3_2_adr_066_profiles_hash_manifest]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

### Deliverables
- `artifacts/p3/lister_upstream_disposition.md`: U1–U25 re-checked at our HEAD (`.adna/` = v8.12 `bf5bdd8`; their pin `27ccafc` = our v8.12 deploy record). **accept-now 10 · v2.6 14 · v3.0 1 · decline 0**, derived by script. U15 · U18 · U19 · U23 → A3.2 as one cluster. The eleven §16 rows set beside Jake's §10 rulings and Stanley's unposted draft: **agree 7 · refine 1 (Q8) · divergence 2 (Q3 open between the signers; Q10 minor) · sequencing 1 (Q9)**, derived by script. Their ledger counts reproduce by script (258 · 100/112/46).
- `who/coordination/coord_2026_10_19_rosetta_to_lannes_lister_phase1_reading_upstream_and_gate1.md`, `outbound_ready`, names-only, advisory; it carries the reading by path. Send GO owed (G3 or earlier).
- Side tasks (R24): three 10-18 inbox receipts committed byte-unchanged; `lip_registry.md` §2.1 note row (F-AC-45, the 3-digit LP line); A4.1 queue rows q6–q8 (Themis's count is three · F-AC-44 fixed at LP `f834cc7` · Vauban's two pointers).

### Descoped
- U5 was not re-measured file by file (`[I]`, plausible); its v2.6 mission re-measures it.

### Key Findings
- **Gate 1 is half-held.** Jake's 10-16 "yes" covered only the Exchange-as-publish-path proposal, which is **Exchange.aDNA ADR-065**, not ours. Stanley's own reply is drafted and unposted (R23).
- **Q8: `adna_conformance: medical` reads as no level upstream.** The profile's own Starter-pass claim fails at the first field. `starter+medical` (U23 a) keeps both claims true. This goes to A3.2 and Lister's M3.
- **Q9 is a sequencing risk:** aDNA.aDNA ADR-066 writes the profile seam into a GitHub-public repo. The patent-watch scope should be stated before A3.2 pushes. → the operator.
- Three U-claims had gone half-stale in eleven days (U2 · U4 · U8). Five matched this vault's own primer items (I-03/I-04 · I-15/E-1 · I-16 · I-17/E-2).
- **The A2.2 delivery-path finding is superseded.** AILedger's drop-box README is now on `main` (clone `~/aDNA/AILedger.aDNA` @ `0e3a0d5`), not only on `stanley/genesis-m00`.
- ⚠ **zsh trap:** `"$r:who/…"` applies the `:w` history modifier; the across-refs `cat-file` loop returned a false "absent" until it was braced as `"${r}:…"`.

### Scope Changes
- Plus the inbox side tasks (R24); no other scope change.

## AAR

- **Worked**: reading the U-rows at the *shipped* image rather than at their pin; the image had not moved, so every check was against what forks actually receive. The two-signer columns in §3 made the one real divergence (Q3) impossible to miss.
- **Didn't**: the first across-refs README probe lied (zsh modifier). An "absent" from a loop over refs is only true once the expansion is braced.
- **Finding**: a profile that declares a level value the standard doesn't define breaks its own "also passes upstream" claim. The overlay syntax is not cosmetic; it is what makes U23 a profile seam.
- **Change**: before a ref-loop probe in zsh, brace every `${var}:path`; and re-derive delivery paths at every send (the A2.2 path moved in three days).
- **Follow-up**: A3.2 (aDNA.aDNA ADR-066), with three §3 inputs (define "official profile" · overlay syntax · egress posture in the hash-bound surface). Q9's scope question goes to the operator before A3.2's push. The memo send GO is owed. Stanley's Lister Gate-1 post is his. Budget ≈75 vs 90 kT.

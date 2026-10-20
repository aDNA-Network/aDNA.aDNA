---
plan_id: mission_arcade_a2_3_public_face_account
type: plan
title: "The public-face account of the four relations: tense-labelled, counsel-safe, name-free"
owner: stanley
status: completed
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 2
campaign_mission_number: 8
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-20   # A5.2: token_budget_actual key normalised (value unchanged)
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: opus
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 60
token_budget_unit: kT_content_load
token_budget_actual: 55   # ≈ content-load kT; normalised 2026-10-20 at ARCADE A5.2 from this card's own budget_status: comment (no new number)
estimated_sessions: 1
calibrated_sessions: 1
estimation_class: content-novel
budget_status: actual_recorded   # ≈55 kT content-load vs 60 est. (reading ≈30 · writing ≈15 · scrub/register/records ≈10); no subagents
depends_on:
- mission_arcade_a2_2_estate_memos
blocks:
- mission_arcade_a3_1_lister_reading
gate: "G2 — hand-off to GARNIER A5.1."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: The public-face account of the four relations: tense-labelled, counsel-safe, name-free

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P2 — Economic-platform seam
**Mission**: 8 of 15

## Goal

Author the paragraph set adna.network will need — what the standard is, where graphs are offered and verified, that a commercial home exists, that a medical profile is designed — using the ratified exchange-adoption-path labels (PASS / TAUGHT-AS-DESIGN / HORIZON) and S1 flags on every protocol claim. No vault names the public may not see (R2; Hestia's never ruling; the primer's scrub list). Handed to GARNIER's claim register as enumerated claims; nothing deployed.

## Exit Gate

G2 — hand-off to GARNIER A5.1.

## Objectives

### 1. Paragraph set + claim rows
- **Status**: completed
- **Session**: session_stanley_20261018_223403_arcade_a2_3_public_face_account
- **Description**: One file; each claim enumerated with its label and evidence pointer; FKGL checked.
- **Files**: artifacts/p2/public_face_account.md · campaign_haussmann/evidence/claims/claim_register.md (rows appended, status proposed)
- **Depends on**: none

### 2. Scrub
- **Status**: completed
- **Session**: session_stanley_20261018_223403_arcade_a2_3_public_face_account
- **Description**: The R-125 / PRIVATE_MARKERS scrub run red-proved then 0.
- **Files**: scripts/ (existing scrub)
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a2_2_estate_memos]].

### Next Mission Inputs
- Feeds [[mission_arcade_a3_1_lister_reading]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- `how/campaigns/campaign_arcade/artifacts/p2/public_face_account.md` — §0 rulings · §1 four paragraphs between `PUBLIC-BEGIN/END` markers (22 sentences · 445 words, derived) · §2 **19 claim rows** R-185…R-203 (tense per row from the cell of record; `PASS` 11 · `TAUGHT-AS-DESIGN` 4 · `HORIZON` 1 · split 3; **S1 0**) · §3 the VITRINE §1 sentence dispositioned (superseded by R-193 · R-199 · R-195) · §4 scrub record · §5 FKGL 9.11 / passive 54.5 % recorded, not repaired · §6 hand-off.
- `how/campaigns/campaign_haussmann/evidence/claims/claim_register.md` **§28** — the same 19 rows under a new class `proposed` (defined §28.1 before use); §28.4 Counts **222 · 207 · 0 gaps**, derived by `derive_register_counts.py` after the append and re-checked against gate-41's own regex (parses 222 / 207). Fixture `claim_register.json` deliberately untouched.
- Scrub: five layers, none re-typed (`PRIVATE_MARKERS` + `R125` read by text from `build_vaults_data.mjs` · 8 gate-27 leak patterns · the primer's grep list rebuilt to 75 regexes · the company's name over the whole file) — **RED on a planted control (6 hits, one per layer) → 0 on the real block**; `grep -rli` name 0; bare-ADR 2 → 0; gitleaks 0.

### Descoped
- No FKGL/passive rewrite (GARNIER's contract: nothing cut solely for FKGL; the passives carry the tense). No page, no `site/` change, no deploy. The VITRINE sentence is dispositioned in the artifact, not minted as a register row (a charter sentence is not a surface claim).

### Key Findings
- ⭐ **The register had no class for copy that precedes its page.** Every class (verified · verifiable · unsupported · FALSE) presumes a claim found on a surface; A2.3's rows are ground-truth-first. `proposed` was defined (§28.1) as a waiting room, re-classed on a live fetch when the copy ships — otherwise a future sitting would have to mis-file honest copy as "unsupported".
- The one fact the public block had to be *silent* about rather than state: no fleet vault has fetched a graph yet (`spec_graph_exchange` §6). "Runs today at its first tier" is true; "is in use" would not be.
- `PRIVATE_MARKERS` carries `ADR-\d` and dates — so the scrub target must be the marker-fenced block, never the artifact; the evidence columns legitimately carry what the public text may not. The markers are the instrument's contract.
- The VITRINE brief's "ledger-backed" is both tense-false today (witness built and inert) and the one word the honesty clause forbids ("never 'on the ledger'").

### Scope Changes
- R21 (plan-time): the profile's name appears in the public text (`HORIZON`, own row) — the card's "name-free" is read as *company/partner/campaign-free*; the two admitted access-point graphs and the profile are named by role first.

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: ADR-065 as the single source made every row a pointer, not an argument; marker-fencing the public block let the generator's own regexes be reused by text (zero re-typing) and red-proved in one planted sentence; deriving the register Counts and then replaying gate-41's regex caught nothing — but proved the table parses before the commit, not after a red CI.
- **Didn't**: the card's "name-free" was ambiguous (company vs every graph) and needed a plan-time ruling (R21); the register's class vocabulary did not fit pre-publication copy and a class had to be defined mid-mission (§28.1).
- **Finding**: honest public copy about products in flight is mostly *passive* — "is designed", "is reported", "is intended" — because the passive is where the tense lives; a readability tool flags exactly the sentences that keep the claim true. Record, don't repair.
- **Change**: `proposed` is now a register class (§28.1); future pre-publication copy files there rather than as "unsupported". Candidate for `template`-level codification at A5.1 if GARNIER adopts it.
- **Follow-up**: A5.1 lanes the 19 rows at DP3 (every row keeps its tense cell; R-189's split means no lane may say "the standard says" before v2.6) · A3.1 starts from R-203 as aDNA-Medical's public ceiling · the fixture entry for any row that ships rides the same diff as its re-class (§28.3). Budget ≈55 vs 60 est. (content-load; ADR-016).

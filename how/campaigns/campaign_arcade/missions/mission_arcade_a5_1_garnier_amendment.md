---
plan_id: mission_arcade_a5_1_garnier_amendment
type: plan
title: "GARNIER amendment at DP3 — the four relations enter the claims lanes; docs tranches re-scoped; VITRINE dispositioned"
owner: stanley
status: completed
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 5
campaign_mission_number: 14
mission_class: integration
created: '2026-10-15'
updated: 2026-10-20
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: fable   # executed opus (the operator's session model), recorded
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 50
token_budget_actual: 90   # ≈ content-load, rough: open reads + plan ≈25 · standing checks + live re-measure + both population derivations ≈25 · amendment ≈20 · ruling applied (register · scope · T13 · VITRINE · ledgers) ≈12 · close ≈8; drift 1.8× — under the 2× retrospective line; the excess is two findings the card did not foresee (the spec mirror, the main-tree population)
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a4_2_image_v8_13
blocks:
- mission_arcade_a5_2_aar_close
gate: "G5 — DP3 (operator) rules the amendment."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: GARNIER amendment at DP3 — the four relations enter the claims lanes; docs tranches re-scoped; VITRINE dispositioned

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P5 — GARNIER adjustment and close
**Mission**: 14 of 15

## Goal

Carry this campaign's outputs into the parent at its own gate: DP3 item (i) ruled; the P2.3 docs tranches re-scoped to cover the access-point docs and the profile page; the public-face account (A2.3) handed to the claim register; the Exchange/Terminal registry cards; and campaign_vitrine dispositioned (fold its §1 Exchange brief into A2.3's record, or close it) — all as proposed amendments, ruled by the operator.

## Exit Gate

G5 — DP3 (operator) rules the amendment.

## Objectives

### 1. Amendment record
- **Status**: completed
- **Session**: session_stanley_20261020_053954_arcade_a5_1_garnier_amendment
- **Description**: campaign_garnier/artifacts/amendments/ + rolling_closure_ledger rows; mission frontmatters touched only on ruling.
- **Files**: how/campaigns/campaign_garnier/artifacts/amendments/*.md
- **Depends on**: none

### 2. VITRINE disposition
- **Status**: completed (R62: `superseded`)
- **Session**: session_stanley_20261020_053954_arcade_a5_1_garnier_amendment
- **Description**: status flip only on ruling; history retained.
- **Files**: how/campaigns/campaign_vitrine/campaign_vitrine.md
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a4_2_image_v8_13]].

### Next Mission Inputs
- Feeds [[mission_arcade_a5_2_aar_close]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

### Deliverables
- `[D]` `how/campaigns/campaign_garnier/artifacts/amendments/arcade_amendment_dp3_item_i.md` was **accepted** as GARNIER DP3 item (i), **ruled in advance** (operator: R59 plan time; R61–R63 at the gate). DP3 itself stays `pending` on the three P1.3 reader records.
- `[D]` Claims lanes for R-185…R-203 are in HAUSSMANN `claim_register.md` §28.5: P2.4 ×10 · P2.3 T02 ×8 · conditional profile row ×1; C1–C5. `derive_register_counts.py` reads 222 · 207 · 0 (unchanged); gate-41 4/4.
- `[D]` Re-measure on live v8.13 surfaces: R-189 re-tensed split → `PASS`. Tally after: `PASS` 12 · `TAUGHT-AS-DESIGN` 4 · `HORIZON` 1 · split 2 = 19.
- `[D]` P2.3 re-scope: the append rule in `docs_review_scope.md`, plus `missions/mission_garnier_p2_3_t13_docs_review.md` (AEP-3 · AEP-4, 37 kT, `provisional_until_T01_actual`, numbered 20.1).
- `[D]` `campaign_vitrine` → `superseded` (status + one dated note; body untouched).
- `[D]` GARNIER charter execution log, `phase_exit.md` §3 (i) pointer + ruling line, `rolling_closure_ledger.md` entry.
- `[D]` Standing checks:
  - the held Harness.aDNA cc leg was **delivered** (doctrine §2 branch 2, peer quiescent; re-synced ×3, md5 `9273ab6f`);
  - receipts: Fluxer ✅ `b73ea5d` · HarnessOld / Terminal / LatticeProtocol / Network ⏳ untracked.

### Descoped
- The gate-49 `cpSync` memo (R60b) was not sent: the container harness is this vault's own (HAUSSMANN P4.4b `1816993`), so it became a local carry (amendment §5 row 7).
- The spec-mirror sync was carried to v8.14 / P2.2 (R63); nothing was deployed.

### Key Findings
- `[D]` **The v8.13 deploy tail left adna.network's spec mirror at v2.5.** `/reference/specification/` reads v2.5, and "Graph Exchange" gets 0 hits. The mirror is generated (`transform-content.mjs` → `split_specification.mjs`) and was not re-run, and `skill_template_release` has no step for it. This is the Looking Glass class again: the release moved, the mirror didn't.
- `[D]` **The live registry cards for Exchange + Terminal render `planned`.** The 10-16 regeneration is still undeployed (prod is built from `main`) → condition C1.
- `[D]` **The GARNIER tree is not the published tree.** `main` carries 11 deploy-tail commits that `vitrine/design` lacks. The docs population there is 120 rows, and greedy repacking would move 82 routes. Hence the append rule.
- `[R]` Exchange L2 v1 is built (`0.0.45`) on the dev harness only. R-196's "designed" understates it, but its tense holds for the public face until a live fetch → C3.
- `[D]` Two ARCADE missions (A2.2, A2.3) never recorded a budget actual. This was found by deriving the table, not by reading it.

### Scope Changes
- The amendment was ruled in advance rather than at the DP3 sitting (R59, on the 2026-10-03 B1 precedent). G5's amendment half is closed; its closure half rides A5.2.

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**:
  - Re-measuring every row on a live fetch, not the vault record, surfaced two live-surface gaps that the A2.3 rows could not see.
  - Deriving the population on both trees made the 82-route repack visible before anyone budgeted against it.
- **Didn't**:
  - The prompt assumed the gate-49 harness was a peer's. Blame showed it is ours, so the pre-granted memo was correctly not used.
  - Two missions' budget actuals were never recorded.
- **Finding**: A release can be complete in the image and incomplete on the site in the same hour. The spec mirror is a generated face of the standard, and nothing in the release checklist regenerates it.
- **Change**: Add "re-run the spec mirror (`transform-content` + `split_specification`, gate-32)" to `skill_template_release`'s deploy tail at v8.14. Record budget actuals at every mission close: the derived table is the check.
- **Follow-up**:
  - A5.2: campaign AAR, graduation, close splash, closure signature (G5's second half);
  - v8.14 carries (amendment §5);
  - DP3 item (j)'s registry deploy and the spec-mirror sync, each its own GO;
  - the four untracked receipts.


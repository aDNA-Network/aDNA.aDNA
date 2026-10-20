---
type: artifact
artifact_type: aar
mission_id: mission_arcade_a5_2_aar_close
campaign_id: campaign_arcade
created: 2026-10-20
updated: 2026-10-20
last_edited_by: agent_rosetta
session: session_stanley_20261020_195614_arcade_a5_2_aar_close
decadal_pass: "not run — R64 (operator, plan-time AskUserQuestion 2026-10-20): standard AAR only"
tags: [aar, artifact, arcade, campaign_close, adr_016, so11]
status: completed
---

# AAR: Operation ARCADE (campaign)

> **Plain version.** ARCADE set out to write down, inside the standard's own files, how aDNA relates to four things around it. Those are the places where graphs are offered and checked (the access points), the company that stands behind them (the commercial home), the first specialised version of the standard (a profile), and the open public way the standard itself keeps. It did that across 15 missions and 19 sessions in six days, and shipped the result publicly as standard v2.6 inside template v8.13. This page is the campaign's honest account: what landed, what it cost against the estimate, and what it taught.

## Mission Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_arcade` — Operation ARCADE, side campaign of `campaign_garnier` |
| Status | completed on the R65 conditions (see §Readiness) |
| Missions | 15 (`ls missions/mission_arcade_*.md \| wc -l` = 15) |
| Sessions | 19 — 18 in `how/sessions/history/2026-10/*arcade*` + this one; charter estimate 16–22 |
| Duration | 2026-10-15 21:29Z (P0 open) → 2026-10-20 (this close) |
| Rulings | R1–R63 across G0–G5 (`grep -oE '\bR[0-9]{1,2}\b'` over the charter, cards and sessions: contiguous, none missing) + R64–R66 at this sitting |
| Commit range | `409293c^..37178ae` (pre-close): 40 commits, 34 of them naming ARCADE; 182 paths (118 added · 64 modified). The range is time-bounded, so it may hold interleaved non-ARCADE commits; the six non-ARCADE commits were not individually classified |

## Scorecard — what ARCADE changed

Tense per ARCADE rule 4. Every ADR number is vault-qualified (rule 3).

| # | Deliverable | Status | Evidence |
|---|---|---|---|
| 1 | aDNA.aDNA ADR-064: the Graph Exchange spec's placement | validated: `accepted` G1 (R11) | `what/decisions/adr_064_graph_exchange_spec_placement.md` |
| 2 | `spec_graph_exchange`: the one spec three products cite | validated: v0.2 `accepted` (B1+B2 at G4) | `what/specs/spec_graph_exchange.md` |
| 3 | `spec_terminal_harness_contract` re-anchored to the launching products | validated: v0.3 `active` (R54) | `what/specs/spec_terminal_harness_contract.md` |
| 4 | `spec_platform_ecosystem` re-anchored | validated: v0.5 `active` (B5 at G4) | `what/specs/spec_platform_ecosystem.md` |
| 5 | aDNA.aDNA ADR-065: the standard's position under the two-estate model | validated: `accepted` G2 (R17); R2 hold stands | `what/decisions/adr_065_standard_position_two_estates.md` + 3 glossary entries (A2.1) |
| 6 | Public-face account of the four relations (19 claim rows) | validated: register R-185…R-203 laned at DP3 (i) (R61) | `artifacts/p2/public_face_account.md`; HAUSSMANN `claim_register.md` §28/§28.5 |
| 7 | aDNA.aDNA ADR-066: the profile seam and the release-integrity hash manifest | validated: `accepted` 4/4 at G3 (R34–R37); AEP-4 filed | `what/decisions/adr_066_conformance_profiles_release_integrity.md`; `/community/proposals/aep-4/` (live at `c7d152a1`) |
| 8 | Profile scaffolding (list, template, validator design, fold path) | partial: list + template shipped empty (`HORIZON` until a steward releases); the validator is a design only | `what/docs/profiles/AGENTS.md` (`proposed`) · `how/templates/template_profile_spec.md` (`draft`) · `artifacts/p3/validator_profile_design.md` |
| 9 | aDNA.aDNA ADR-067: memorialized data models (Noether's M-A1 rider) | validated: `accepted` G4 (R43); clause 3 → v3.0; AEP-3 filed | `what/decisions/adr_067_memorialized_data_models.md`; `/community/proposals/aep-3/` |
| 10 | Standard v2.5 → **v2.6** | validated: `PASS`, published | md5 `86385da8` (dev = image at tag `v8.13`) |
| 11 | Template image **v8.13** | validated: `PASS`, fired R56 | `aDNA-Network/aDNA` `223ecc1` + tag `v8.13`; smoke S1–S9 ✅ |
| 12 | Deploy tail | validated: `PASS` | prod `c7d152a1`, alias-probed; trust page v8.13 · changelog · AEP-3 + AEP-4 |
| 13 | GARNIER amendment, DP3 item (i) | validated: ruled in advance (R61–R63) | `campaign_garnier/artifacts/amendments/arcade_amendment_dp3_item_i.md` §7.7 |
| 14 | Vauban's 13 asks answered; `pattern_ledger_backed_acceptance_tables` | validated: ruled R7–R10; pattern `draft` (one adoption) | `artifacts/p1/vauban_rulings_packet.md` |
| 15 | Registry truth (Exchange + Terminal cards) | partial: corrections derived and memo'd; the registry deploy is DP3 item (j), not ARCADE's | `artifacts/p1/registry_corrections_exchange_terminal.md`; live cards still read `planned` (C1) |

**Validated**: 13/15 · partial 2/15 (both partial by design: one is a product not yet live, the other a deploy owned elsewhere).

Coordination: **20** outbound memos authored (`git diff --name-status 409293c^..HEAD | grep '^A.*who/coordination/coord_.*rosetta_to'`); **27** inbound files added to `who/coordination/inbox/` over the same range.

## Estimate vs actual (aDNA.aDNA ADR-016 content-load kT, executor)

Re-derived at this sitting from each card, not copied from the amendment's §6. Command: a python pass over `missions/mission_arcade_a*.md`, which reads `token_budget_actual:` **and**, where that key is absent, the actual each card records elsewhere (named in the Source column).

| Mission | Est | Actual | × | Source of the actual |
|---|---:|---:|---:|---|
| A0.1 | 120 | 140 | 1.17 | `token_budget_actual` |
| A1.1 | 90 | 75 | 0.83 | `token_budget_actual` |
| A1.2 | 70 | 60 | 0.86 | `token_budget_actual` |
| A1.3 | 60 | 55 | 0.92 | `token_budget_actual` |
| A1.4 | 25 | 35 | 1.40 | `token_budget_actual` |
| A2.1 | 70 | 60 | 0.86 | `token_budget_actual` |
| A2.2 | 40 | 45 | 1.13 | ⚠ `budget_status:` comment (`actual_recorded # ≈45 kT`) |
| A2.3 | 60 | 55 | 0.92 | ⚠ `budget_status:` comment (`actual_recorded # ≈55 kT`) |
| A3.1 | 90 | 75 | 0.83 | `token_budget_actual` |
| A3.2 | 80 | 55 | 0.69 | `token_budget_actual` |
| A3.3 | 60 | 70 | 1.17 | `token_budget_actual` |
| A4.1 | 150 | 145 | 0.97 | ⚠ AAR Follow-up line (`≈70 + 75 = 145`) |
| A4.2 | 90 | 175 | 1.94 | `token_budget_actual` (three sittings) |
| A5.1 | 50 | 90 | 1.80 | `token_budget_actual` |
| **A0.1–A5.1** | **1,055** | **1,135** | **1.08** | 14 of 14 recorded |
| A5.2 (this) | 60 | ≈70 | 1.17 | recorded on the card at close |
| **Campaign** | **1,115** | **≈1,205** | **1.08** | charter uncertainty ±350; inside it |

- **Subject-runtime / explorer subagents, booked separately** (per `so11_retrospective_p1`): ≈625 kT (A0.1, three explorers) + ≈88 kT (A1.3, one explorer) = **≈713 kT**. Every other card says "no subagents" or is silent. This sitting used none.
- **2× retrospective trigger**: not crossed by any mission. A4.2 (1.94×) and A5.1 (1.80×) came closest; both overran on unplanned live re-measurement (the fire's nine §5a findings; A5.1's live surface fetches).
- **API-billing companion** (aDNA.aDNA ADR-016 Clause C): not reported. No per-session turn counts were kept.

> ⚠ **Correction to a ratified record.** The amendment's §6, accepted at R61, says A2.2 and A2.3 "never recorded" an actual, and its total reads 11 recorded, 905 → 945 (×1.04). Both cards *did* record one: in the `budget_status:` comment, not in `token_budget_actual:`. A4.1's actual sat in its AAR, and the A5.1 derivation found it there. The A5.1 derivation keyed on a single field name. The fact is corrected by a dated erratum appended under the amendment's §6 (the original rows are kept). The three cards gain the `token_budget_actual:` key with their own recorded value, so the next derivation reads one field. The ruling R61 does not move: the corrected numbers (14 recorded, ×1.08) only strengthen its premise that ARCADE adds no further load to GARNIER's P2.

## Gap Register

| # | Gap | Severity | Source | Remediation |
|---|---|---|---|---|
| 1 | The site's spec mirror still renders v2.5; no release step regenerates it | high (a public face is one minor behind) | A5.1 live fetch | R63: carried to v8.14 / GARNIER P2.2; `how/backlog/idea_upstream_release_spec_mirror_regen.md` (this sitting) |
| 2 | Live Exchange/Terminal registry cards read `planned` | medium | A5.1 (C1) | DP3 item (j) registry deploy (its own GO; Hestia-owned data) |
| 3 | Budget actuals recorded under three different keys | low | this AAR | the three cards normalised at this sitting; the field name is the contract |
| 4 | Three memos have not been receipted: Panacea (HarnessOld inbox), Vauban (Terminal inbox), and the Harness.aDNA cc copy | low (the recipient's commit is the receipt; nothing is owed back) | standing check, 19:56Z | none from this side |

## Carries

| # | Carried row (from where) | Word | Pointer / reason |
|---|---|---|---|
| 1 | P5 root-triad exception ADR (ledger §2b, R47) | next | v8.14 (amendment §5 #1) |
| 2 | P7 `standing_grant` + unattended-envelope ADRs (R47) | next | v8.14 (amendment §5 #2) |
| 3 | Currency candidates (ledger §5a item 9) | next | v8.14 (amendment §5 #3) |
| 4 | Dev T1 "proposed until G3" line (amendment §5 #4) | next | v8.14. Not touched here, to keep this sitting's diff to the close |
| 5 | The unqualified reference to aDNA.aDNA ADR-067 in `faces/upstream.json` `$comment` (amendment §5 #5) | next | v8.14, with the face's next edit |
| 6 | Spec-mirror sync + the release-skill step (R63) | next | v8.14 / GARNIER P2.2; backlog idea filed |
| 7 | gate-49 container cpSync refusal (amendment §5 #7) | next | GARNIER P4.3 (this vault's own harness) |
| 8 | DP3 item (j): registry deploy | next | GARNIER DP3 (its own GO) |
| 9 | doctrine_credential_handling §5.3 Holders signature (R50) | next | operator gate, outside ARCADE |
| 10 | aDNA.aDNA ADR-067 clause 3 + A9b | next | v3.0 window |
| 11 | `pattern_ledger_backed_acceptance_tables` → active | next | needs a second counted adoption + §7.7 |
| 12 | Lister M7 upstream AAR → the fold path's steps 1–2 and 8–9 | next | steward's act; `HORIZON` |
| 13 | `token_budget_actual:` as the one budget key in the mission template (A5.2 finding) | next | v8.14 queue, as a template revision |

**Count**: 0 MET · 0 retired · 13 next — 13 of 13

## Technical Debt

| # | Debt | Impact | Priority | Tracking |
|---|---|---|---|---|
| 1 | `skill_template_release` deploy tail lacks the spec-mirror step | every release can leave `/reference/specification/` one version behind | high | backlog idea (gap 1) |
| 2 | The profile validator exists only as a design | a profile cannot be machine-checked against its manifest until it is built | medium | `artifacts/p3/validator_profile_design.md`, built when the first steward releases |

## Readiness Assessment

| Criterion | Status | Evidence |
|---|---|---|
| All deliverables validated | GO | 13/15 validated; 2 partial by design (rows 8, 15), each carried |
| No critical gaps | GO | 0 critical; 1 high (spec mirror), carried with its own GO |
| AAR present on every mission card | GO | the grep at this sitting: A0.1–A5.1 each carry Worked/Didn't/Finding/Change/Follow-up; A5.2's lands with this file |
| Closure conditions (R65) | checked at the seal | AAR landed · card AARs present · `adna_validate.py --governance` zero drift · gitleaks 0 (recorded in the session log) |

**Overall**: **GO** to close ARCADE. **Rationale**: every gate G0–G5 has a named operator ruling, and the standard and image are public. The rest is carried by name to an owner, and none of it is ARCADE's to execute.

## Recommendation

Close ARCADE on the R65 conditions. GARNIER resumes as the sole active front: its P1.3 readers lead to DP3, which takes item (i) as already ruled. Open the v8.14 queue from the 13 carries above. Its first row is the spec-mirror step, because it is the only carry with a live public symptom.

## Lessons Learned

- **A derivation is only as wide as the field it reads.** A5.1 derived the budget table and concluded two missions "never recorded" an actual. Both had recorded one, under a different key. This is GARNIER convention 16 ("a negative result is only as wide as the command that produced it") in a budget costume. The fix is one contract (one field name), not a smarter grep.
- **A release can be whole in the image and partial on the site in the same hour.** Generated faces (the spec mirror) need a named regeneration step in the release skill, or they silently pin the last version anyone remembered to rebuild.
- **Ask the hold question early, and let local work proceed under it.** Q9 held publication from R25 to R53. Ruling R41 ("G4 does not wait on Q9 for local work") kept four sittings productive inside the hold. When the answer came, the fire was one sitting away.
- **Memos-not-edits held across 20 outbound memos and three estates without a single cross-estate write.** The drop-box doctrine's three branches (inbox → deliver; quiescent → `who/coordination/`; live → hold) were all exercised (the Harness.aDNA cc leg used branches 3, then 2).
- **Name-free by construction beats scrubbing after.** Writing public-bound text without the company's name from the first draft (R2) made every scrub a confirmation (RED → 0 at A2.3), not a rewrite. The one slip, at dev `profiles/AGENTS.md:59`, was caught at the fire by (b.1) and shipped as an image-staged copy.
- **Budget calibration:** content-novel standard work ran at ×1.08 against a 1,115 kT estimate. The "first-contact ≈4×" flag on A1.1 · A2.1 · A3.2 · A4.1 did not materialise (0.83 · 0.86 · 0.69 · 0.97). The overruns sat instead at the publication sittings, which carried live re-measurement. Forecast publication sittings at ≈1.8–2×, not the authoring ones.

## Close splash

```
╭─ campaign_arcade · rosetta ─────────────────────── 🧬 aDNA / Rosetta CLOSED ─╮
│  opened 2026-10-15T21:29Z → closed 2026-10-20   (~5 days · 19 sessions)
├──────────────────────────────────────────────────────────────────────────────┤
│  DELIVERED   standard v2.6 + image v8.13 (223ecc1) · prod c7d152a1 · ADR 064–067
│              3 specs re-anchored · AEP-3/4 · 20 memos out · DP3 (i) ruled
│
│  MISSION TALLY   15/15 ✓
│    ✓ P0 A0.1 situation review               ✓ P3 A3.1–A3.3 profile seam
│    ✓ P1 A1.1–A1.4 access points             ✓ P4 A4.1 v2.6 · A4.2 v8.13 fire
│    ✓ P2 A2.1–A2.3 economic-platform seam    ✓ P5 A5.1 amendment · A5.2 close
│
│  AAR POINTER   full AAR → artifacts/p5/aar_campaign_arcade.md
│                (this splash augments the AAR — it does not replace it)
├──────────────────────────────────────────────────────────────────────────────┤
│  NEXT   → GARNIER P1.3 readers → DP3 · v8.14 queue (13 carries)  · pushed ✓
╰──────────────────────────────────────────────────────────────────────────────╯
```

Related: [[campaign_arcade]] · [[mission_arcade_a5_2_aar_close]] · [[arcade_amendment_dp3_item_i]] · [[adr_065_standard_position_two_estates]] · [[pattern_profile_upstream_fold_path]]

---
type: decisions
artifact_class: ratified_amendment
campaign_id: campaign_garnier
title: "Re-pin the P1.3 formative stimulus to the gateway candidate (ratified 2026-09-17)"
created: 2026-09-16
updated: 2026-09-17
status: accepted
last_edited_by: agent_rosetta
tags: [garnier, p1_3, formative, stimulus, repin, ratified]
---

# Ratified amendment — re-pin the P1.3 formative stimulus (proposed 2026-09-16, ratified 2026-09-17)

## The proposal

[I] Move the P1.3 formative reader stimulus from the frozen P1 candidate **`b1cf040`**
(port 4465) to the completed gateway candidate **`6487444`** (branch
`garnier/homepage-20260916`, checkout `~/.cache/garnier-homepage-20260916`, preview port
4466). The three-class formative sessions (one engineer, one funder, one scientist, per
[[reader_protocol]] and DP2 clause 6) then run against the gateway candidate.

## Why (the argument the operator is asked to weigh)

[D] The gateway direction is already ratified ([[homepage_gateway_revision]], accepted
2026-09-16): the homepage `b1cf040` presents has been superseded twice over in candidate form,
ending in the gateway now verified and reviewed (full suite 694/3/0; R-VISUAL complete,
[[homepage_gateway_visual_review]]). [[reader_protocol]] states *"a homepage
mechanism/hierarchy change affects all classes and requires a full repeat"* — so formative
records collected on `b1cf040` are guaranteed to need a full repeat with a fresh cohort the
moment the gateway ships. Re-pinning first spends the three formative readers once, on the
composition that will actually face readers. The re-pin procedure itself is the one
[[formative_reader_pack]] already prescribes for a changed site ("identify and record the new
candidate before presenting it").

[I] What does NOT change: the three-class human requirement, the sealed keys and two-scorer
calibration, the exclusion of formative participants from the final cold cohort, the
no-agent-recruitment bar, and DP3 as a human gate. The P1 evidence at `b1cf040` (all committed
records, hashes, synthetic prescreens) is preserved untouched as history; nothing is re-run or
re-attributed.

## Proposed frozen identity (derived, not typed)

[D] 15 route hashes re-derived from candidate `6487444` served at `http://127.0.0.1:4466`
(same route list as the P1 freeze), recorded at
`evidence/homepage_gateway_20260916/proposed_formative_stimulus_6487444.json` — checkout clean
at derivation. On ratification this file becomes the stimulus-identity manifest the pack's
pre-session check verifies against; until then the P1 freeze (`b1cf040`/4465, 15/15 verified
at close on 2026-09-16) remains the stimulus of record.

## Answer-key impact (stated so the gate is honest)

[I] The role tasks in the sealed key probe mechanism/prerequisites/governance-location
(engineer), steward/available-vs-planned/contribution ask (funder), and
mechanism/lineage/evaluation-presence (scientist). The gateway retains each of these on the
homepage or one click behind a labeled path; the engineer task's "initial command/file
example" answer moves from on-page to `/get-started/` via the *Start a project* path. **The
scorers must confirm before any session that the frozen key's expected answers remain
reachable within the three-minute window on the new stimulus — if any expected answer is no
longer reachable, that is a finding against the candidate, not a reason to loosen the key.**

## Ratification (§7.7)

- **Decision:** re-pin the P1.3 formative stimulus to gateway candidate `6487444` per the
  terms above.
- **Ratified-by:** Stanley Bishop, Founding Architect.
- **Date:** 2026-09-17.
- **Status:** accepted.
- **Gate / session reference:** operator chat approval “All recs approved.” (2026-09-17) + the two-question G4/G5 follow-up gate; [[session_stanley_20260917_052304_garnier_ratification_batch]].
- **Scope of authority if accepted:** stimulus identity for P1.3 formative sessions only. No
  phase advance, no publication, no change to the final-panel stimulus rules, no deploy.

Related: [[reader_protocol]] · [[formative_reader_pack]] · [[homepage_gateway_revision]] ·
[[dp2_ratification_20260915]] · [[runtime_handoff_20260916]].

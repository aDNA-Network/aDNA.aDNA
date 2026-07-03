---
plan_id: mission_champollion_m7_1_ship_verify_handoff
type: plan
title: "M7.1 — Ship-verify in the wild + handoff packet (post-release backstop walk)"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 7
campaign_mission_number: 1
mission_class: verification
executor_tier: opus
token_budget_estimated: "30 kT (verification class; corpus = the SHIPPED v8.4 clone + in-vault records, fully pre-pinnable; the G6-perspective backstop walk is the core unit)"
token_budget_actual: "~45 kT (+50% vs 30 est — two heavy subagent dispatches [newcomer walk + independent review] + finding-side re-verification reads summed past the 40-kT halt: the M6.1 aggregate-halt pattern recurring; datapoint #7 for M7.2's corpus)"
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
status: completed
tags: [plan, campaign, champollion, p7, ship_verify, handoff, m7_1]
---

# Mission M7.1 — Ship-verify in the wild + handoff packet

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** · **Mode B** · runs any time after G6 (v8.4 is live: `aDNA-Network/aDNA` @ `4e3bf38`, tag `v8.4`; step-(f) smoke 7/7 PASS at the gate session).

## Objective

Verify the SHIPPED v8.4 image as a stranger meets it — the **post-ship first-hour walk** that the G6 perspective named as the designed backstop (M4.1 method, fresh clone of the LIVE release, all 6 legs) — and assemble the **handoff packet** a future maintainer/release-runner needs.

## Work

1. **Post-ship first-hour walk** (the backstop): scratch-clone the live image; walk M4.1's six legs against v8.4 (arrival → README → cold-start → first-fork trace → learning path → docs/quests); friction log rows classed blocker/major/paper-cut; compare against the M4.1 baseline (0/3/7) — the RC's fixes should show as deltas. Any blocker-class find → immediate operator flag (post-ship fixes are a NEW gate per the skill; never patch the tag).
2. **Release verification residue**: badge hrefs resolve live (releases/tag/v8.4 + adna.network + /learn) · site `install_truth.json` still verifies (template `9bd4051`) · image governance lint zero-drift on a fresh clone.
3. **Handoff packet** → `artifacts/handoff_packet_v8_4.md`: the release-runner's map (skill_template_release + the RC record + patch + this walk) · the **v8.5 queue** (the 10 DEFERs w/ triggers + G6-D4 deferred adjudications P-2/P-5/P-8 + state-prompt-shed + aDNA_overview re-stamp + F-CHM-followups) · standing calibrations table (per-row RC pricing · pre-pinning · finding-side verification · quiescence discipline) · where every ledger lives.
4. Standing sweep clause: out-of-scope hits → manifest.

## Acceptance criteria

- [ ] Six-leg walk complete on the LIVE clone; friction log filed; delta vs M4.1 baseline stated; blockers = 0 or operator-flagged.
- [ ] Handoff packet complete with the v8.5 queue enumerated (every DEFER carries its named trigger).
- [ ] Fable review passed; `adna_validate` FULL + `--governance` zero drift; explicit-path commit (no push — batches at G7).

## Guardrails

The shipped tag is IMMUTABLE (findings route to v8.5 or a new gate, never a tag fix) · NAMES-ONLY · quiescence check post-notification · python-not-grep.

## Escalation triggers

- Blocker-class walk finding → immediate operator flag (release-quality class).
- Budget > 40 kT → halt and report.

## AAR (M7.1 — 2026-07-03)

- **Worked**: a campaign-blind fresh newcomer subagent surfaced 2 real majors a builder-mind wouldn't (F-CHM-216/217); finding-side verification (both README surfaces + `template_home_claude.md:267`) confirmed every major against its **cited** surface; the independent review bookend caught a real v8.5-queue omission (the validator-docstring class the G6 record delegates to the handoff) + a paper-cut double-count. Result: **0 blocker / 2 major / 6 paper-cut**, all v8.5-routable, tag immutable.
- **Didn't**: fable was rate-limited → the review bookend ran as an independent **opus** substitute (recorded honestly, not fable-tier); actual ~45 vs 30 est (+50%) — two heavy dispatches + finding-side reads summed past the 40-kT halt (the M6.1 aggregate-halt pattern recurring).
- **Finding**: the shipped v8.4 image is newcomer-clean on the primary path (0 blockers) but carries a coherent **release-cut-leakage** class (inner-README dead install flow · unshipped-ADR links · a private `aDNA.aDNA/` path) — pre-existing (not a v8.4 regression), surfaced only by varying the method (F-CHM-212).
- **Change**: a handoff packet must carry the release-runner gotchas the walk pays to discover (the `install_truth.json` frozen-SHA / different-frame trap); when a gate record delegates "the handoff enumerates all," cross-check that enumeration at authoring (the validator-docstring miss slipped until review).
- **Follow-up**: **M7.2 (fable-led closeout) is blocked by the fable rate-limit** — operator needs fable credits or an opus-substitute decision before the campaign can close; F-CHM-216/217 → v8.5 queue ([[../artifacts/handoff_packet_v8_4|handoff]] §3).

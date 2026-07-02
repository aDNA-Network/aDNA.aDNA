---
plan_id: mission_champollion_m1_5_state_diet
type: plan
title: "M1.5 — STATE router diet: restore the true cold-start read"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 1
campaign_mission_number: 5
mission_class: implementation
executor_tier: opus
token_budget_estimated: "40 kT"
token_budget_actual: "~30 kT"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p1, state_diet, token_economy, m1_5]
---

# Mission M1.5 — STATE router diet (F-CHM-004 fix)

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus.** Run LAST in P1 (after M1.1–M1.4 have made their STATE touches).

## Objective

`STATE.md` (545 KB at P0) becomes a true cold-start read again — live snapshot + ⏭ QUEUED + recent Current Phase only — with everything else **archive-shifted, never deleted**, per the router's own M2.1-S2 split precedent (2026-05-19, pre-split SHA `1e337db`) and Context.aDNA's 2026-06-22 optimization dispatch (STATE = #2 worst always-loaded file; their memo is propose-only input, cite it).

## Work

1. Inventory STATE.md section-by-section (rg headers; read windows — NEVER slurp the file). Classify each block: LIVE (routing-load-bearing now) vs RETIRED (historical narrative, superseded NEXT pointers, closed-campaign sections).
2. Shift RETIRED blocks → `STATE_archive.md` (append, with a dated shift banner per block; wikilinks preserved).
3. LIVE keeps: frontmatter · router note · ⏭ QUEUED banner · Current Phase (newest ~3 bullets; older bullets → archive) · compact adna.network block · any section a live campaign/gate points at (check `rg 'STATE.md#' -l` + charter/gate references).
4. Leave a stub pointer in STATE for each shifted section (`→ STATE_archive.md §X, shifted 2026-07-0X`).
5. Re-measure: `ls -la STATE.md` + line count; record before/after in the mission AAR (token-economy telemetry per the [[../../../what/patterns/pattern_model_tiered_campaign_execution|pattern]] §3 — this is a measured optimization outcome Prometheus can consume).

## Acceptance criteria

- [ ] `STATE.md` ≤ **200 KB hard** (stretch ≤ 100 KB); zero content deleted (archive-shifted only; `wc -c STATE.md STATE_archive.md` total ≥ pre-mission total).
- [ ] A fresh cold-start read (frontmatter + QUEUED + Current Phase top) orients completely — the QUEUED banner needs no edits to stay true.
- [ ] All wikilinks into shifted blocks resolve (spot-check 5); validator FULL PASS.
- [ ] Single explicit-path commit (STATE.md + STATE_archive.md only).

## Guardrails

**Archive-shift, never delete** (SO-6 absolute) · when LIVE-vs-RETIRED is ambiguous → KEEP + flag in SITREP (never guess-archive) · heavy-file Read convention throughout (offset/limit windows) · no push · frontmatter `updated:` + comment chain maintained.

## Verification surface

`ls -la STATE.md STATE_archive.md` (before/after recorded) · `python3.13 what/lattices/tools/adna_validate.py .` · `rg -c 'DEPRECATED|shifted 2026-07' STATE_archive.md` grows by the shifted-block count.

## Escalation triggers

- Any block whose liveness cannot be determined from its own text + the campaign roster → keep + flag (this trigger fires often on first pass; that is expected and fine).
- A shift would break a link cited by an OPEN gate/mission/memo → keep that block live.
- Budget > 60 kT → checkpoint (the mission is safely resumable at any block boundary).

## AAR

**Session**: `session_stanley_20260702T064009Z_champollion_m1_5` · **Commit**: `4e493ce` (unpushed) · **Executor: opus** (ran directly at-tier; scripted transform). AAR artifact: [[../../../missions/artifacts/campaign_champollion_mission_m1_5_aar|campaign_champollion_mission_m1_5_aar]]. **Measurement: STATE.md 554,697 → 47,695 B (−91.4%); combined 751,736 → 753,889 B (never-delete: +2,153).**

- **Worked**: a scripted section-split against an explicit KEEP/ARCHIVE manifest with a hard byte-conservation assertion + per-block verbatim-in-archive check made a 554 KB never-delete surgery safe + provable in one pass; validators green; ≤100 KB stretch met.
- **Didn't**: nothing failed; the `.new`-then-verify-then-mv dry-run caught one cosmetic frontmatter double-`#` before the live write.
- **Finding**: STATE bloat concentrates in **self-superseded handoff prose** — the biggest single block (~130 KB / 24%) was the accumulated `## Next Session Prompt` stack; the 40 `## Last Session` blocks (162 KB) were all long-marked PRIOR. The QUEUED banner had already superseded all of it.
- **Change**: shed each predecessor's Last-Session/Next-Session-Prompt into the archive **at close** rather than letting it accrete for a quarterly diet → file `idea_state_prompt_shed_on_close`.
- **Follow-up**: G1 (P1 exit, per-tier AAR review, operator gate). Active Campaigns + Pending Manual Actions kept-and-flagged → optional follow-up compaction. ~30 kT vs 40 est (−25%).

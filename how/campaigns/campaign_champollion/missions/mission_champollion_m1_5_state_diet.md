---
plan_id: mission_champollion_m1_5_state_diet
type: plan
title: "M1.5 — STATE router diet: restore the true cold-start read"
owner: stanley
status: active
campaign_id: campaign_champollion
campaign_phase: 1
campaign_mission_number: 5
mission_class: implementation
executor_tier: opus
token_budget_estimated: "40 kT"
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

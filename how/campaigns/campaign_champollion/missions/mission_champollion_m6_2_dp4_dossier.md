---
plan_id: mission_champollion_m6_2_dp4_dossier
type: plan
title: "M6.2 — DP4 dossier + Track D terminal assessment (Operation aDNA program close readiness)"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 6
campaign_mission_number: 2
mission_class: verification
executor_tier: opus
token_budget_estimated: "35 kT (verification class — the G2 class-split rule applies; the corpus is IN-vault [campaign_operation_adna records] + read-only STATE pins, pre-pinned at dispatch per the G5-D3 standing calibration)"
token_budget_actual: "~38 kT vs 35 est (+9%, in-band): builder ~28 (under its 30 aim — the pre-pinned dispatch pattern holding for the 2nd consecutive mission) + fable bookends ~10 (pre-pins done in the M6.1 dispatch gap + review incl. embargo-field + live-check independent re-verification)."
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p6, dp4, track_d, operation_adna, dossier, m6_2]
---

# Mission M6.2 — DP4 dossier + Track D terminal assessment

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** · **Ring 1** · **Mode B**.

## Objective

Assemble the **DP4 dossier** — the program-close readiness package for `campaign_operation_adna` (the top-level program this campaign feeds) — including the **Track D (commons) terminal assessment**, which is Rosetta-owned (P0 founding-evidence #4: Track D was stale-marked "in-flight inside Track A" but Track A closed 2026-06-21; the residual is ours to assess terminal). **The operator fires DP4, never us** — the dossier makes the firing decision easy and honest.

## Work

1. **Fable verify-before-dispatch**: pin the program state (`how/campaigns/campaign_operation_adna/campaign_operation_adna.md` — tracks A/B/C status rows; Track C closed 2026-07-01), the Track D definition + any commons deliverables' live state, and the Venus (Network.aDNA) touchpoint (read-only STATE pin — Track D "coordinates with Venus").
2. **Dossier** at `how/campaigns/campaign_operation_adna/dp4_dossier.md`: per-track terminal summary (A WEBSITE closed 2026-06-21 · B Hearthstone done · C STR closed 2026-07-01 · **D commons — the terminal assessment this mission renders**: what shipped, what remains, whether the remainder blocks program close or routes to standing owners) · program-level outcomes vs the keystone ("joined public launch") · what DP4 firing means + what it does NOT close (Champollion continues to G7) · open threads routed with owners.
3. **Venus check-in memo**: staged in OUR `who/coordination/` (Rule 10; `status: staged`, releases at the next push batch) — Track D's coordination note to Network.aDNA, informational.
4. **Terminal assessment honesty rule**: if Track D's residual is NOT terminal-ready, the dossier says so plainly with the blocking list — a dossier that flatters readiness fails the mission (the M3.3 honest-baseline precedent).

## Acceptance criteria

- [ ] Dossier complete at the program-campaign path; every track's terminal state evidence-cited; Track D assessment renders a clear READY / NOT-READY-because verdict.
- [ ] Venus memo staged (Rule 10; frontmatter complete).
- [ ] DP4 firing = operator's; the dossier's close names this explicitly.
- [ ] Fable review passed; `adna_validate` FULL PASS + `--governance` zero drift; explicit-path commit (no push — batches at G6).

## Guardrails

Read-only outside this vault · staged-memo discipline · the assessment is honest-first (NOT-READY is a valid verdict) · NAMES-ONLY · quiescence check post-notification.

## Verification surface

`adna_validate` both modes; the dossier's track rows each carry a citation; `git -C /Users/stanley/aDNA/Network.aDNA status` untouched.

## Escalation triggers

- Track D's residual turns out to be owned by another vault's live campaign → route-with-pointer, don't absorb; flag for G6.
- The program doc contradicts this campaign's records on a track state → reconcile-with-evidence or G6 input.
- Budget > 50 kT → halt and report.

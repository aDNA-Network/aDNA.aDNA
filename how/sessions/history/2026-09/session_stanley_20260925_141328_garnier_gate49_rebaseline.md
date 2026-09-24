---
type: session
session_id: session_stanley_20260925_141328_garnier_gate49_rebaseline
created: 2026-09-25
updated: 2026-09-25
status: completed
tier: 1
last_edited_by: agent_rosetta
executor_tier: opus
executor_runtime: claude
token_budget_estimated: 40
token_budget_actual: 45  # ±15 content-load kT
campaign: campaign_garnier
tags: [garnier, gate_49, visual_regression]
---

# Session — GARNIER gate-49 in-container re-baseline (/commons + /about)

**Intent:** discharge the gate-49 re-baseline owed since G4 fired 2026-09-24 (Docker was down). Red-first, scope-controlled, no push.
**Operator ruling (AskUserQuestion, plan time):** baseline only this sitting; STATE graduation stays queued.

## Log
- Docker up (`docker info` ok). Red-first `check` in `playwright:v1.59.1-noble`: **6 failed / 20 passed** — about, commons, state-network × light/dark. state-network was outside the planned scope → paused, traced it to the same G4 commit `228a624` (count sentence re-derived: "Of the 2 subnetworks … 1 has"). Verified withheld WF/Cederroth cards absent in `dist/`; remaining Wilhelm strings are pre-G4.
- `baseline` → exactly the 6 PNGs changed; no masks/config. `check` → 26/26 green. `redtest` → 7/7 (5 red + 2 controls).
- Recorded: STATE 2026-09-25 block · operator queue §G4 item (2) discharged · rolling closure ledger.

## SITREP
- **Completed:** gate-49 in-container re-baseline (G4's owed precondition of any push), red-first, scope-controlled, red-test proven.
- **In progress:** none.
- **Next up:** P1.3 C2 reader records (human) → DP3; STATE graduation (own sitting); v8.12 gate when opened.
- **Blockers:** readers #needs-human; push/deploy GO; ADR-010 co-sign; G5 address; G2 dashboard.
- **Files touched:** 6 baseline PNGs under `site/tests/gates/__screenshots__/`; `STATE.md`; `rolling_closure_ledger.md`; `operator_queue_reconciled_20260911.md`; this session file.
- **Finding:** the 09-24 record named two routes for an owed re-baseline that actually covered three — an owed-scope sentence is a forecast; the red-first run is where its real scope is measured.

## AAR (lightweight)
- **Worked:** red-first before baseline surfaced the under-named route instead of silently absorbing it.
- **Didn't:** plan said 24 baselines; the suite is 26 tests (24 route×theme snapshots + 2 guards) — minor.
- **Finding:** owed-work records should name the diff, not the routes they expect it to reach.
- **Change:** when recording an owed re-baseline, list routes by running the check, not by reading the source diff.
- **Follow-up:** none new.

## Next Session Prompt
GARNIER (aDNA.aDNA, branch `vitrine/design`, local-only, not pushed). The gate-49 re-baseline is done (2026-09-25). The open front is human-gated: P1.3 C2 — Stanley supplies three consenting readers (engineer/funder/scientist; agents never recruit) against stimulus `6487444` at port 4466 per `formative_reader_pack` → two-scorer key application → DP3 packet (CURRENT in `missions/session_prompts_garnier.md`). Agent-reachable, each its own sitting: STATE graduation via `skill_state_graduation` (STATE ~300 KB); v8.12 gate if the operator opens it. No push/deploy without an explicit GO.

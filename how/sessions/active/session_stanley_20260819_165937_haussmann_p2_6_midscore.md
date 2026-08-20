---
type: session
session_id: session_stanley_20260819_165937_haussmann_p2_6_midscore
user: stanley
started: 2026-08-19T23:59:37Z
status: active
intent: "HAUSSMANN P2.6 session 1 — O0 evidence refresh · O0c-a synthetic cold-read re-test · O1 two-scorer re-score (D3 WITHHELD) · O2 author p2_replan.md → halt at ⛩ DP6 · O3a gate re-baseline · O3b III cycle 166"
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
tier: 1
executor_tier: fable
token_budget_estimated: "~200–280 kT (session 1 of 2; mission total ~300–450 kT per ADR-016/SO#11)"
token_budget_actual:
files_modified: []
files_created: []
last_edited_by: agent_rosetta
tags: [session, haussmann, p2_6, rescore, replan]
---

# Session — HAUSSMANN P2.6 (session 1 of 2)

## Operator rulings taken before work began

1. **Proceed to DP6 with D3 held.** O0b (the clean-machine TTFS run) is a hard human gate — fresh macOS
   Standard account + an unassisted non-builder runner, no agent path. Rather than stall the campaign,
   this session runs everything agent-executable and scores **D3 as WITHHELD** — explicitly *not*
   re-scored provisionally a second time. O0b + the transcript fold + final D3 land in session 2.
2. **Score on instrument v1.0.** Five anchor defects were filed for a v1.1 that never happened; changing
   the instrument mid-series would destroy the comparability that is the point of a delta. The v1.1
   fixes route into the re-plan, ahead of P5.2's full re-score.

## Plan for this session

| Obj | Work | Gate |
|-----|------|------|
| O0 | Evidence refresh — T0 captures of changed surfaces · claim-register re-verify + 3 hygiene fixes · machine-eye delta · pin the pack | — |
| O0c-a | Synthetic cold-read re-test of the new funnel (3 personas, `[D-syn]`) | — |
| O1 | Author the missing isolation protocol · two fresh-context scorers · reconciliation vs 51.6 | — |
| O2 | `p2_replan.md` at `status: proposed` | ⛩ **DP6 — hard stop** |
| O3a | Gate re-baseline + record-mismatch closure | — |
| O3b | III cycle 166 | — |

**Deferred to session 2**: O0b (operator run) · O0c-b (transcript fold, variant B) · D3 final score ·
III cycle 167 · mission AAR.

## Recon findings carried in (from planning)

- The **scorer isolation protocol exists nowhere as a file** — reconstructable only from Δ2 +
  three baseline frontmatter disclosures. Authoring it is an O1 precondition.
- The baseline's "sheets committed pre-reconciliation" is **asserted but not demonstrable** — git shows
  all three landing in one commit `df3827c`. Make it checkable this time.
- **III cycle 166 has never been written.** Last record is cycle 165 (2026-06-10, ~10 weeks); zero III
  records for the entire HAUSSMANN campaign despite ADR-057 requiring every measurement event to log.
- **Charter is 15 tests stale** (reads 472; P2.5 closed at 487) · `claim_trace_manifest.json` predates
  P2.4 and P2.5 · **ADR-057 reads `status: proposed`** while the charter's ratified §7.7 says the
  measurement regime was "adopted with the charter".
- Claim register hygiene: **R-111 has no table row** · §7.4 totals 6 rows stale · R-118/R-119 still
  point at the retired objective id "P2.5 O2".
- `scripts/crawl_haussmann_b1.mjs` (the production inventory crawler) is **gone** — run from a scratchpad
  at genesis. Routed to the re-plan, not rebuilt here.
- `lighthouse_profiles.json` is **not mirrored** into `how/federation/webforge/`, so campaign convention 4
  ("read gate bars from it, never transcribe") is currently unsatisfiable from inside this vault.

## Progress

*(appended as work happens)*

## SITREP

*(at close)*

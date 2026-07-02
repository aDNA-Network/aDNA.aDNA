---
type: session
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_stanley
tags: [session, campaign, champollion, phase_0, orient, charter, p0_gate, model_tiering, context_adna_seam]
session_id: session_stanley_20260702T024442Z_champollion_p0
user: stanley
machine: stanley-mac
started: 2026-07-02T02:44:42Z
status: active
tier: 1
intent: "Operation Champollion Phase 0 (ORIENT → P0 gate): verify vault reality (adna_validate, site build, live checks, STR-close completeness), charter the pre-launch umbrella campaign at how/campaigns/campaign_champollion/ (status: planning), build the Order of Battle + backlog adjudication ledger + governance retro package via read-only evidence lanes, author the model-tiered-execution pattern + Context.aDNA/Noether staged memos, run the adversarial pass, render the P0 operator gate, HALT. Commit-only, no push (push decision offered at the gate)."
mission: none (campaign P0 — missions are authored by this session's charter)
token_budget_estimated: "200-280 kT content-load (ADR-016 band: 2-3 sessions; hard checkpoint commit after Order of Battle so a fresh session can resume)"
executor_tier: fable
scope:
  directories:
    - how/campaigns/campaign_champollion/
    - how/backlog/
    - who/coordination/
    - what/patterns/
  files:
    - STATE.md
    - CHANGELOG.md
conflict_scan: "how/sessions/active/ contained only .gitkeep at entry — no conflicting session; git tree clean; local main ahead of origin by exactly the 3 STR-close commits (461a37b..4dbb77e), held per Git-Ops rule 3."
heartbeat: 2026-07-02T02:44:42Z
---

# Session — Operation Champollion Phase 0 (orient → charter → P0 gate)

Plan: `/Users/stanley/.claude/plans/please-read-the-claude-md-fluttering-orbit.md` (operator-approved). Operator directive: the **Operation Champollion** prompt (pre-launch comprehensive campaign; sibling to Operation Carnot in [[../../STATE|LatticeProtocol.aDNA]]) + two meta-requirements: exemplify **model-tiered execution** (Fable designs briefs → Opus/Sonnet execute) and make the campaign-design/model-optimization pattern **shareable to Context.aDNA** (Prometheus).

## Guardrails

**No push** (offered as a P0-gate decision; 3 held STR commits + this session's commits stack locally). **Never modify `.adna/`** (folds staged in dev graph only). **No cross-vault writes** (memos staged in `who/coordination/` here). **Public-boundary discipline** (nothing private/credential-bearing; SS_VERCEL_TOKEN by name only). **No phase advance past the P0 gate** (SO-1). **STR stays closed** — §4.3 of the directive converted to verify-and-record (close already executed 2026-07-01, local commits `461a37b..4dbb77e`). v3-EC not rewritten — reconciliation proposed at the gate.

## Work plan

1. ✅ Session open + git truth-check (local ahead-by-3 confirmed live; tree clean).
2. Verification battery: `adna_validate --governance` · `npx astro build` (site/) · live domain checks · STR-close completeness. Divergences → F-CHM-*.
3. Campaign skeleton at `how/campaigns/campaign_champollion/` (master doc `status: planning`).
4. Three read-only evidence lanes (backlog adjudication prep · governance retro · currency/seam scan).
5. Order of Battle synthesis → **checkpoint commit**.
6. Charter (P1–P7 ladder, two rings, §6.A–J coverage matrix, executor-tiered mission cards) + risk register.
7. `pattern_model_tiered_campaign_execution` + staged template folds + Noether/Prometheus memos.
8. Adversarial pass (newcomer · hostile forker · standards lawyer) → amend charter.
9. P0 gate (ISS + campaign-open splash) + STATE rewrite (Current Phase + ⏭ QUEUED banner) + CHANGELOG + auto-memory + SITREP + final local commit → **HALT for operator**.

## SITREP

*(filled at close)*

---
type: session
session_id: session_stanley_20260816_094350_haussmann_genesis
user: stanley
started: 2026-08-16T16:43:50Z
status: active
tier: 2
machine: L1 (Stanley's Mac, Darwin 25.6.0)
intent: "Operation HAUSSMANN genesis — execute the operator's cowork directive: Phase A orientation artifacts, Phase B full VITRUVIUS situation assessment of adna.network + community.adna.network, Phase C campaign genesis package (charter + missions + ADR stubs + context artifacts + staged memos). This session designs the campaign; it does NOT touch site/."
scope:
  directories:
    - how/campaigns/campaign_haussmann/   # new — the campaign package
    - how/sessions/active/                # this file
    - who/coordination/                   # staged outbound memos (Phase C; additions only)
    - what/context/                       # graduated assessment artifacts (Phase C; additions only)
    - what/decisions/                     # ADR stubs at status: proposed (Phase C; additions only)
  files:
    - STATE.md                            # planning banner + campaign registration at ratification
  excluded:
    - site/**                             # HARD EXCLUSION — directive §8: this session never edits the website
    - .obsidian/**                        # pre-existing local churn; not mine
executor_tier: fable   # genesis judgment/authoring lane; evidence packets fan out to opus/sonnet-class subagents per packet
token_budget_estimated: "~5–8 MT total (Phase A ~0.4 MT · Phase B full fan-out ~4.5–6.5 MT with pre-set degrade ladder · Phase C ~1–1.5 MT with ≥3 MT floor reserved); per ADR-016"
token_budget_actual:
files_modified: []
files_created:
  - how/sessions/active/session_stanley_20260816_094350_haussmann_genesis.md
completed:
heartbeat: 2026-08-16T16:43:50Z
tags: [session, haussmann, genesis, campaign_planning, vitruvius, site]
---

# Session — Operation HAUSSMANN genesis

> **Governing directives** (operator-issued 2026-08-16, verbatim copies at
> `how/campaigns/campaign_haussmann/directives/`): the cowork directive (phases A/B/C, gates,
> prohibitions) + the VITRUVIUS review instrument (D1–D12 assessment doctrine). Plan of record:
> `~/.claude/plans/please-read-the-claude-md-fuzzy-sedgewick.md` (operator-approved 2026-08-16).

## Operator rulings taken at plan approval

1. **Gate A folded into plan approval** — orientation artifacts commit without a separate halt; next operator halt = Gate B.
2. **Phase B = full fan-out** (11 packets, two-scorer Step-10 fidelity, 8–12 new dossier references, synthetic cold-reads).
3. **Gate C = in-chat ratification** (§7.7 via AskUserQuestion; no ISS surface).
4. **community.adna.network assessment = outside-only** at genesis; authenticated inspection designed as a campaign mission per doctrine_visual_inspection §3.1.

## Standing constraints (this session)

- **No site/ edits. No deletions anywhere. New context only** (directive SO-3, §8).
- Every finding carries a provenance tag `[D]/[I]/[R]/[A]` (directive SO-2); untagged assertions are inadmissible.
- Explicit-path git staging only (never `git add -A`); 17 pre-existing dirty/untracked entries in the tree are NOT mine and are left untouched.
- Cross-vault needs are staged as coordination memos, never written into peer vaults.
- Credentials by name via the Home.aDNA broker only; none needed for genesis (outside-only assessment).
- Codename record: `grep -ril "Operation HAUSSMANN" ~/aDNA` → 0 hits · `"Operation PERCIER"` → 0 hits (2026-08-16T16:43Z). HAUSSMANN is clean fleet-wide.

## Activity Log

- 09:43 — Session started. Git ff-only pull clean at `4cc56b5`; 17 pre-existing dirty entries recorded as not-mine.
- 09:43 — Codename greps recorded (0/0). Proceeding to campaign scaffold + Phase A artifacts.

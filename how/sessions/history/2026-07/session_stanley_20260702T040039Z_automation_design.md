---
type: session
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_stanley
tags: [session, champollion_adjacent, automation, campaign_runner, model_tiering, terminal_adna, operations_adna, cross_vault]
session_id: session_stanley_20260702T040039Z_automation_design
user: stanley
machine: stanley-mac
started: 2026-07-02T04:00:39Z
status: completed
tier: 1
intent: "Operator-directed campaign-execution-automation design: capture the 4-layer/4-rung design in aDNA.aDNA (backlog idea + pattern §8 amendment + two seam memos to Berthier), then — explicit operator authorization — draft the Operation Dispatch charter in Terminal.aDNA at status: planning (its own P0 human gate pending). Commit-only, both vaults; aDNA.aDNA commits FIRST (operator's fresh Opus M1.1 session is imminent — leave a clean tree). M1.1 is NOT run here."
mission: none (Champollion-adjacent design capture; R1 runner becomes a chartered mission post-G1 if accepted)
token_budget_estimated: "50-70 kT content-load"
executor_tier: fable
scope:
  directories:
    - how/backlog/
    - who/coordination/
    - what/patterns/
conflict_scan: "how/sessions/active/ empty at entry; tree clean at f629a37 (== origin/main). Operator's Opus session for M1.1 launches after this turn — aDNA.aDNA writes committed before Terminal.aDNA work begins."
heartbeat: 2026-07-02T04:30:00Z
completed: 2026-07-02T04:30:00Z
token_budget_actual: "≈60 kT main-session content-load (within 50-70 estimate) + 2 Explore lanes ≈150 kT (subagent; Terminal/Operations + Harness/prior-art scans)"
---

# Session — Campaign-execution automation: design capture + Operation Dispatch charter

Plan: `/Users/stanley/.claude/plans/please-read-the-claude-md-fluttering-orbit.md` (operator-approved, automation-turn version). Operator directives: M1.1 → fresh Opus session (Mode A); automation → full design capture **plus the Terminal.aDNA campaign charter now** (explicit cross-vault authorization; charter still halts at Terminal's own P0 gate).

## Guardrails

No pushes (both vaults) · no `.adna/` writes · **no Operations.aDNA edits** (schema ask travels as a memo) · Terminal.aDNA work under ITS CLAUDE.md (Rule 2; Voice Register + clean-room provenance honored) · the Dispatch charter never self-ratifies · M1.1 untouched (the operator's Opus session owns it; my new backlog file is OUTSIDE M1.1's ratified 91-item ledger and must not confuse its counts — noted in its handoff).

## SITREP

**Completed — campaign-execution automation, design + charter (both vaults, commit-only):**
- **Finding**: the automation stack is 4/5 built across the workspace, never composed — Operations.aDNA claim-lease bridge LIVE (`:27125`; task schema lacks only `executor_tier`) · Terminal.aDNA ADR-007 orchestrator (mission=worktree; provider owns model-select; budget enforcement pinned) · provider contract live-proven (`ex_24`) · Carnot `executor_protocol.md` · Context.aDNA telemetry. **The whole gap = headless tier-bound spawning.**
- **aDNA.aDNA** (`4e26b18`): [[../../backlog/idea_campaign_execution_automation|idea_campaign_execution_automation]] (4-layer/4-rung design brief; safety invariants; "other integration surfaces" assessed — Workflow tool, scheduled routines, ISS resume, splash, Exchange) · [[../../../what/patterns/pattern_model_tiered_campaign_execution|pattern]] **§8 Automation ladder** · 2 Berthier memos (Dispatch announce + Operations schema-v2 ask, both `filed`).
- **Terminal.aDNA** (`6e31a60`, operator-directed cross-vault): **Operation Dispatch chartered** at `campaign_terminal_dispatch` (`ratify_state: pending` — DP0 is Berthier's operator gate; DP0–DP5 ladder; Wheelhouse `ex_18` sequencing explicitly untouched; provenance-honest frontmatter `drafted_by: agent_rosetta`); session record + STATE inbound block; **pre-existing uncommitted work found and left untouched** (`.obsidian/*` + modified `how/configs/bin/lattice` — presumed lh_panel thread).
- **Records**: aDNA.aDNA STATE QUEUED banner + CHANGELOG gained the automation-thread lines; auto-memory updated.

**In progress:** none. **Blockers:** none.

**Next up:** (1) **operator runs M1.1 on a fresh Opus session** (unchanged — this thread did not alter P1); (2) a **Berthier session takes Dispatch DP0** to its gate; (3) R1 runner charters at/after Champollion G1 on idea acceptance.

**Files touched:** *aDNA.aDNA:* idea file · pattern §8 · 2 memos · STATE banner clause · CHANGELOG line · this session file. *Terminal.aDNA:* charter · session record · STATE inbound block (their in-flight work untouched). *Memory:* Champollion topic automation-thread block.

## Next Session Prompt

Two independent threads, either order: **(A) Champollion P1/M1.1** — fresh **Opus** session in `aDNA.aDNA`: read STATE ⏭ QUEUED + `how/campaigns/campaign_champollion/missions/mission_champollion_m1_1_backlog_disposition_execution.md`; the ratified [[../../campaigns/campaign_champollion/artifacts/backlog_adjudication_ledger|adjudication ledger]] is decided law; NOTE: 2 backlog files postdate the ledger's 91 (`idea_upstream_model_tier_mission_fields`, `idea_campaign_execution_automation`) — outside M1.1 scope, don't disposition them; commit-only; escalate-don't-improvise. **(B) Dispatch DP0** — Berthier session in `Terminal.aDNA`: read its STATE inbound block + `campaign_terminal_dispatch.md` §7 open questions; take the gate (ratify/amend/rename + Wheelhouse sequencing).

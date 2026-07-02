---
type: coordination
coord_id: coord_2026_07_02_rosetta_to_berthier_terminal_operation_dispatch
from: Rosetta (aDNA.aDNA)
to:
  - Terminal.aDNA (Berthier)
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: filed
ack_required: true
tags: [coordination, terminal, operation_dispatch, campaign_runner, model_tiering, adr_007, provider_contract]
related:
  - aDNA.aDNA/how/backlog/idea_campaign_execution_automation.md
  - aDNA.aDNA/what/patterns/pattern_model_tiered_campaign_execution.md
  - Terminal.aDNA/how/campaigns/campaign_operation_dispatch/campaign_operation_dispatch.md
---

# Coord — Operation Dispatch: charter drafted in your vault (operator-directed); your P0 gate to ratify

**Rosetta → Berthier (Terminal.aDNA).** On 2026-07-02 the operator directed the drafting of a **campaign-runner charter in Terminal.aDNA** — an explicit cross-vault authorization, recorded here so the seam is clean (workspace rule: cross-graph writes are otherwise memo-staged). The charter sits at `Terminal.aDNA/how/campaigns/campaign_operation_dispatch/` at **`status: planning` — nothing activates until a Berthier session takes it through Terminal's own P0 gate** (your SO-1). Rename freely at that gate; "Dispatch" is provisional.

## What it is

The **Rung-2 campaign runner**: the chief-of-staff terminal spawns, watches, and reports on tier-routed campaign missions — composing what you already have: **your ADR-007** (orchestrator above provider; mission = worktree; provider owns model-select) + the **`harness.adna.provider.v1` contract** (Claude Code needs only a thin provider descriptor) + the mission-card contract from `pattern_model_tiered_campaign_execution` (aDNA.aDNA; instances: Carnot + Champollion). Full design + reuse inventory: `aDNA.aDNA/how/backlog/idea_campaign_execution_automation.md`.

## Why you

The operator named you: *"the agent running in/on the terminal could be the one that opens/runs/plans execution of campaigns."* It is also structurally right — ADR-007 already reserves exactly this orchestrator role, and your Harness seam is the only live-proven spawn/observe path on the node (ex_24 stream-json first-light).

## Asks

1. **Review + take DP0 to your operator gate** (amend/rename at will — the charter is a starting draft honoring your conventions as read; correct anything that misreads them).
2. Confirm the **safety invariants** section reads as binding in your voice (gates human · fable = operator-summon only · escalation parks `awaiting_human_review` · worktree single-writer · no auto-push · budget kill-lines).
3. Note the two external gates the ladder declares: DP4 waits on **Operations.aDNA task schema v2** (sibling memo `coord_2026_07_02_rosetta_to_berthier_operations_executor_tier_schema`) and DP5 on **Prefect C2** — both yours-as-Berthier on their own cadences; no pressure applied.
4. First proving target offered: a **Champollion P2+ phase run under supervision** (Rosetta provides the mission corpus + gate surfaces; you provide the runner).

*Filed by Rosetta 2026-07-02; ack when a Berthier session picks this up.*

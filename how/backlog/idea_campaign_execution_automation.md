---
type: backlog_idea
status: proposed
priority: high
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, idea, automation, campaign_runner, model_tiering, executor_tier, terminal_adna, operations_adna, harness_adna, context_adna, dispatch]
related:
  - what/patterns/pattern_model_tiered_campaign_execution.md
  - who/coordination/coord_2026_07_02_rosetta_to_berthier_terminal_operation_dispatch.md
  - who/coordination/coord_2026_07_02_rosetta_to_berthier_operations_executor_tier_schema.md
---

# Idea — Campaign-execution automation (the tier-routed campaign runner)

> **Plain-language version**: campaigns now declare, per mission, *which class of model should run it* and *what it may cost* — and every mission brief is written so an executor can run it cold. That makes execution **schedulable**: a runner can pick up the next ready mission, spawn the right model in an isolated worktree, watch it, halt the moment anything needs a human, and report at the gates. Humans keep every decision that matters (phase gates, fable-class judgment work, pushes); the runner keeps the *between-gates* treadmill.

## Operator directive (2026-07-02)

Asked at Champollion G0+1: *"once a campaign exists with the right models selected … can we have an agent/system spawn/run/monitor/report on those missions/campaigns? Maybe … the agent running in/on the terminal [Terminal.aDNA] could be the one that opens/runs/plans execution … but we should also think about what other ways we could run/integrate."* Operator chose: capture the full design + draft the Terminal.aDNA charter now.

## Finding: the stack is 4/5 built — it has just never been composed

| Layer | Role | Owner (exists today) | Evidence |
|-------|------|----------------------|----------|
| **L4 Governance** — *what may run* | Pattern + human gates; automation runs missions only **within** a ratified phase, never advances phases (SO-1) | **aDNA.aDNA** (this vault) | [[../../what/patterns/pattern_model_tiered_campaign_execution|the pattern]] · Champollion/Carnot mission cards · Carnot `executor_protocol.md` (LP `campaign_carnot/artifacts/`) |
| **L3 Coordination** — *what runs next* | Missions-as-tasks; claim-lease; heartbeat; stuck-task reaper → `awaiting_human_review` | **Operations.aDNA** — LIVE bridge daemon `:27125` (FastAPI, SQLite leases, Ed25519-signed claim/release, 60s heartbeat/3600s TTL, fencing tokens); Prefect orchestration ratified (their ADR-018; C2 pilot operator-gated) | their `what/ontology/task-entity.md` (15-field schema v1 — **no `executor_tier` yet**, the one missing field) |
| **L2 Orchestration** — *who runs it* | The campaign runner: open/spawn/status/reap per mission; gate halts; run reports | **Terminal.aDNA** (Berthier) — ADR-007 "orchestrator above provider": mission = git worktree; **provider owns model-select**; Terminal↔Harness seam LIVE-PROVEN (ex_24 `--output-format stream-json` first-light) | their `what/decisions/adr_007_orchestrator_mission_worktree.md` |
| **L1 Execution** — *how it runs* | Spawn a tier-bound Claude session; observable lifecycle | **Harness.aDNA** provider contract `harness.adna.provider.v1` (6-state machine, hooks, worktree binding; model selection deliberately UPSTREAM — exactly where mission cards put it) + Claude Code natively: `claude -p "<brief>" --model <binding>` headless; Agent-tool `model:` override; Workflow tool | `aDNA.aDNA/what/specs/spec_terminal_harness_contract.md` (canonical, adr_027) |
| **L0 Measurement** — *was the routing right* | Joins tier-planned × model-actual × budget est/actual per mission | **Context.aDNA** (Prometheus) — seam already live via [[../../who/coordination/coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern|the released memo]] | their ADR-001/011 |

**The entire gap = headless/scheduled spawning.** Verified: nothing in the workspace runs `claude -p` automation, cron routines, or an execution daemon today — execution is session-per-mission with the operator launching (Mode A) or a lane-lead spawning tiered subagents in-session (Mode B).

## The maturity ladder (adopt rung-by-rung; each rung is independently useful)

- **R0 — today, zero build.** Mode A: operator session-per-mission (`/model <tier>` + "run M<x> per its brief"). Mode B: a judgment-tier session spawns tiered subagents via the Agent tool's `model:` override — **live evidence: Champollion P0's evidence lanes (opus ×2 + sonnet ×1) and its actuals in the session record.**
- **R1 — the runner skill+script (hours, not weeks).** `skill_campaign_run` + a small script in this vault: read a campaign's mission cards → for each ready non-fable mission, spawn `claude -p --model <binding> "Run <mission file> per its brief"` **sequentially, in an ADR-007-style worktree**, tail the session SITREP, **halt on**: gate reached · escalation trigger fired · budget kill-line (est × 1.5) · validator failure — then emit a run report. Session-local; no daemon. *Adoption trigger: chartered as a mission at/after Champollion G1 (operator accepts this idea).* First proving target: Champollion's sonnet missions (M1.3/M1.4-class) under supervision.
- **R2 — Operation Dispatch (Terminal.aDNA-native).** The cmux chief-of-staff runner: pane-per-mission, live 6-state status, ISS gate surfaces, provider descriptor for Claude Code, run-report artifacts. **Charter drafted 2026-07-02 (operator-directed) at `Terminal.aDNA/how/campaigns/campaign_operation_dispatch/` — `status: planning`, ratifies at Terminal's own P0 gate.**
- **R3 — fleet scale.** Missions published as claimable tasks (Operations.aDNA task-entity **schema v2 `+executor_tier` `+token_budget_estimated`** — asked via memo, their ratification); node runners claim under lease+fencing; Prefect flows for cross-node campaigns (their C2/D phases). Champollion's post-launch fleet-compliance re-seed is the natural first R3 workload.

## Safety invariants (bind at every rung — non-negotiable)

1. **Gates are human** (SO-1): a runner executes missions *inside* a ratified phase and **stops at the gate**; it never opens phases, never ratifies, never fires DP-gates.
2. **Fable-class = operator-summon only** (Carnot executor-protocol semantics): judgment missions are never auto-spawned; the runner queues them for the operator.
3. **Escalation halts the lane**: any brief trigger → mission parked `awaiting_human_review` (reuse Operations' reaper semantics), runner continues only independent missions.
4. **Single-writer per repo**: worktree-per-mission (ADR-007) or lease fencing — never two writers on one tree (the 2026-06-20/06-30 incidents are the standing lessons).
5. **Push is never automated.** Runner output is commits + reports; publication stays an operator act.
6. **Budget kill-lines** (ADR-016): est × 1.5 hard-stops the spawn; drift telemetry → Context.aDNA.
7. **Public-boundary + credential discipline** ride in every brief (already standard).

## Other run/integration surfaces (operator's "what other ways" — assessed)

- **Claude Code Workflow tool** — deterministic multi-agent scripts with per-agent `model:`/`effort:`: right for *intra-mission* fan-out (a mission's own lanes), not for cross-session campaign state. Complements, doesn't replace, the runner.
- **Scheduled routines** (Claude Code cron/RemoteTrigger): right for *cadence* work — a nightly "advance the campaign if unblocked" runner invocation, or standing-watch checks. Layer on R1 once it exists; scheduling a runner is safer than scheduling raw missions.
- **ISS gates + skill_watch_iss**: the runner's gate-halt should *render* the gate (existing Rule-8 machinery) and resume on operator submission — R2's DP3 covers this.
- **Obsidian/HOME splash surfaces**: campaign-runner status belongs on the existing `lattice home` 5-block splash (mission tally block) — cheap R2 add.
- **aDNA Exchange (future)**: published campaigns + briefs are the unit a *remote* node could execute — R3's federation story; nothing to build now beyond keeping briefs self-contained (already doctrine).

## Acceptance / next steps

1. Operator accepts this idea → **R1 chartered as a Champollion-adjacent mission** (post-G1; opus-buildable from this brief).
2. Berthier session ratifies **Operation Dispatch** DP0 at its own gate (memo filed).
3. Operations.aDNA answers the **schema v2** memo on its own cadence (R3 gate).
4. Pattern §8 (Automation ladder) travels with the pattern's graduation to the standard (3rd instance).

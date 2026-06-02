---
type: pattern
created: 2026-06-02
updated: 2026-06-02
status: draft
pattern_category: operational
applies_to: [platform, forge, framework, any_vault_pinning_an_external_dependency]
last_edited_by: agent_stanley
tags: [pattern, upstream_drift, agentic_update_reflection, self_updating, watcher, reviewer, severity_importance, scheduled_agent, spec_upstream_pin, draft]
---

# pattern_upstream_drift_watch

> **Status: `draft`** — pending two-cycle ratification (standard-touch). First exercised end-to-end by hand at `Cmux.aDNA` for the cmux v0.64.12 re-pin (2026-06-02); this pattern codifies what that dogfood did. Origin: `Cmux.aDNA/how/backlog/idea_upstream_drift_watch.md` (operator-approved 2026-05-29).

## Problem

A context-graph that **models a piece of software** (an overlay vault like `Cmux.aDNA` → `manaflow-ai/cmux`, a runtime consumer like an MLX/Qwen harness, an `llama.cpp` consumer, …) pins a specific upstream release and depends on specific upstream *surfaces* (config keys, socket verbs, file formats). When upstream ships a new release, three things can happen and all are currently **manual**: (1) a wanted feature becomes reachable, (2) a relied-on surface breaks, or (3) nothing material changes. Detecting which — and adapting the graph — is exactly the work done by hand each time (`spec_upstream_pin §4`; `LatticeHome m12_external_dep_policy` quarterly review). **There is no automated detect → assess → adapt primitive**, yet every pinned-dependency vault shares the need. The graph should *reflect its subject's updates* automatically and become self-updating/resilient.

## Solution

A **5-layer pipeline** where **determinism does detection, an agent does judgement, and the operator owns every irreversible commit**:

```
SCHEDULER (L0; APScheduler edge / Prefect L2-3) — lease-gated daily fire
   │  "a flow that cannot acquire a lease does not execute" (TaskForge claim-lease)
   ▼
L0  DETERMINISTIC WATCHER   skill_upstream_drift_watch (shell, no AI, cheap, idempotent)
      fetch upstream → diff vs pin + fingerprints → severity {none|informational|opportunity|breaking}
      none → write report, STOP.  material → write report + enqueue a stub + seen-ledger
   ▼
L1  AGENTIC REVIEWER        skill_upstream_drift_review (Claude)
      research (changelog/issues/web) → load affected graph context → impact-assess (tier ladder)
      → classify importance {routine|load-bearing|irreversible}
   ▼
AUTO-AUTHOR (reversible)    planning-mission + adapt-campaign @ status:proposed   (NEVER auto-applied)
   ▼
HUMAN-ESCALATION SEAM       skill_create_iss gate, sized by severity × importance; STATE.md #needs-human on breaking
   ▼
EXECUTION (gated)           phase-gated missions; irreversible steps (binary re-pin, source edits, paid spend) behind an ISS gate
```

**The decision rule — `action = f(severity, importance)`** (separates *authoring*, which is reversible and automatable, from *advancing/applying*, which is gated):

| severity ↓ / importance → | routine | load-bearing | irreversible |
|---|---|---|---|
| **none** | write report, stop | — | — |
| **informational** | log to queue | log + backlog idea | ISS gate (rare; EOL) |
| **opportunity** | backlog idea | **auto-author planning-mission + adapt-campaign (proposed); operator opens the phase gate** | auto-author **+ ISS gate before P0** |
| **breaking** | backlog + notify | **auto-author + ISS gate (load-bearing)** | **ISS gate FIRST (irreversible); STATE.md #needs-human; no auto-author until the operator rules** |

Plain reading: detection always runs unattended; `opportunity`/`breaking` work is **auto-authored but gated to advance** — "automatic" means the system did detection + research + context-load + impact-assess + drafting, shrinking the operator's job to a go/no-go at a gate. Any `breaking` severity OR any `irreversible` delta raises an ISS gate *before* the campaign is even auto-authored and flips `STATE.md #needs-human`. This is the operator's "reach out to a human when something is strange/bad/breaking" requirement.

## When to Use

- The vault **pins an external upstream** and carries a pin record + fingerprint baseline (`spec_upstream_pin` shape: channel/version/build/commit + `fingerprints/`).
- You want **scheduled, resilient self-updating** (daily poll) rather than ad-hoc manual review.
- The upstream has a machine-readable release surface (GitHub releases API, package registry, container tags, a published schema).

Do **not** use it as a substitute for human judgement on breaking changes — the pattern *escalates* those, it does not auto-resolve them.

## Example: This Vault → first consumer Cmux.aDNA

`Cmux.aDNA/upstream_drift_watch/` is the first consumer wrapper: a `federation_ref.yaml` pinning this primitive + a `drift_config.yaml` (upstream `manaflow-ai/cmux`, pin record `what/cmux/index.md`, fingerprint dir, `wanted_feature_signals: [workspaceGroups@stable]`, `affected_surface_map`, `escalation_thresholds`, `auto_launch_policy: phase_gate_only`) + a deterministic adapter `how/configs/app/upstream_watch_cmux.sh`. The 2026-06-02 dogfood produced `drift_report_cmux_20260602T200935Z.json` (severity `opportunity`) → re-pin nightly→stable v0.64.12 via `campaign_cmux_upstream_adapt` ("Operation Tailwind"), with the irreversible binary re-pin gated. The reusable scheduling substrate is the lease-gated `aDNALabs.aDNA/.../scheduler_tier1_pilot.py` (APScheduler tier-1).

## Anti-Pattern

- **Auto-applying remediations.** A watcher that `--repin`s or edits config without a gate violates the human-owns-irreversible rule (SO#1/SO#2). Drafts only.
- **One-tier (AI-only) watching.** Spending a model run on every daily poll even at `severity=none`. Detection must be pure shell; the agent runs only on material drift.
- **Silent re-trigger.** No seen-ledger → the same release re-authors a campaign every day. Key the ledger on `sha256(material_deltas)`, not the timestamp.
- **Breaking-change auto-author with no escalation.** A removed must-have surface must hit an ISS gate + `#needs-human` first.

## Related

- [[how/skills/skill_upstream_drift_watch|Skill: deterministic watcher]] · [[how/skills/skill_upstream_drift_review|Skill: agentic reviewer]]
- [[how/templates/template_drift_report|Template: drift report]]
- [[how/skills/skill_create_iss|Skill: ISS]] (the escalation seam) · [[how/skills/skill_orchestration_tiers|Skill: orchestration tiers]] (L0/L1/L2-3)
- [[how/skills/skill_upstream_contribution|Skill: upstream contribution]] (Tier-2 sibling — when adaptation needs an upstream fix, not a local one)
- Consumer reference: `Cmux.aDNA/what/specs/spec_upstream_pin.md` (the pin/fingerprint format this generalizes).

---
type: skill
skill_type: agent
category: operations
created: 2026-06-02
updated: 2026-06-30
status: draft
trigger: "A non-empty drift_queue.md stub (severity != none) from the deterministic watcher — research the release, load the affected graph context, impact-assess against the integration-tier ladder, and auto-author a planning-mission + adapt-campaign at status: proposed (never auto-applied; escalate anything breaking)."
last_edited_by: agent_stanley
token_estimate: ~1200
tags: [skill, agent, upstream_drift, reviewer, impact_assessment, severity_importance, iss_escalation, auto_author_campaign, draft]
---

# Skill: Upstream Drift Review (agentic reviewer)

> **Status: `draft`** — pending two-cycle ratification. The **judgement** half of [[what/patterns/pattern_upstream_drift_watch|pattern_upstream_drift_watch]]. Reads a material drift report → researches the release → loads the affected graph context → impact-assesses → **auto-authors** a planning-mission + adapt-campaign at `status: proposed` (NEVER auto-applied) → escalates anything breaking. The 2026-06-02 Cmux v0.64.12 dogfood is the worked example.

## Purpose

Given a `severity != none` drift report, produce the **adaptation plan** the operator only has to approve — and escalate, loudly, anything strange/bad/breaking. The deterministic watcher already found *that* something changed; this skill decides *what it means and what to do*.

## Trigger

A non-empty `drift_queue.md` (a stub the watcher enqueued). Drained either by an interactive session at session-open (default; zero added cost) or by a scheduled L1 routine (unattended; only fires when the queue is non-empty). Never auto-advances past a gate.

## Inputs

The queued report (`reports/drift_report_<repo>_<utc>.json`) + the consumer's `drift_config.yaml` (especially `affected_surface_map`, `escalation_thresholds`, `auto_launch_policy`).

## Implementation (the 11-step flow)

1. **Ingest** — read the queued report; confirm `severity != none`; check `seen_ledger` (refuse to re-author for an already-resolved `material_delta_hash`; also skip if an adapt-campaign for this consumer is still open — `status != complete`).
2. **Research the release** — `gh api repos/<repo>/releases` for the changelog of every version between `current_pin` and `latest`; `gh api .../issues?labels=bug,regression` for known problems; `WebSearch "<repo> <version> breaking|regression"`. **Clean-room paraphrase** (SO#10) — cite, don't copy.
3. **Load graph context** — walk `drift_config.affected_surface_map` for each delta and `Read` only the touched overlay surfaces + their ADRs/specs + the pin record. The map keeps this targeted, not a whole-vault read.
4. **Impact-assess vs the tier ladder** — route per the consumer's integration policy (for overlays, ADR-002 tiers): non-critical surface broken → local rework; **must-have surface unreachable → upstream (Tier-2), never a core patch**; wanted feature now reachable → opportunity. Produce a per-delta **disposition table**.
5. **Classify importance** `{routine | load-bearing | irreversible}` per delta + overall (take the max), using the [[how/skills/skill_create_iss|ISS]] blast-radius rubric (routine = reversible/single-mission; load-bearing = cascades ≥2 missions or commits substrate; irreversible = binary swap / source edit / paid spend / partner surface).
6. **Decide the artifact** — `action = f(severity, importance)` per the pattern's matrix: backlog idea / auto-author planning-mission + adapt-campaign / ISS gate first.
7. **Auto-author the planning mission + adapt-campaign** (when warranted) — instantiate a planning-mission card (the `va_p0_planning` shape) carrying the impact assessment + disposition + **scope to the specific deltas** (do not boil the ocean) + an execution-campaign charter at `status: proposed`. Name it (`Operation <X>`).
8. **Stop at the operator phase gate (SO#1)** — `auto_launch_policy: phase_gate_only` means nothing advances unattended. Present the disposition table; for `load-bearing`+ render an ISS gate.
9. **Spawn the execution campaign** — once the operator opens the gate, the P-ladder produces the execution missions; **every irreversible mission carries its own ISS gate** (binary re-pin, config cutover, paid spend).
10. **Escalate-if-breaking (cross-cutting)** — any regression / removed must-have surface / contradicted ratified assumption → ISS at `importance: irreversible` **and** flip `STATE.md #needs-human` (escalation cascade: session finding → SITREP → mission → campaign → STATE.md). Never auto-apply.
11. **Close the loop** — annotate the report `resolved`; append the `material_delta_hash` to `seen_ledger.jsonl`; 5-line AAR.

## The decision matrix (severity × importance)

See [[what/patterns/pattern_upstream_drift_watch]] §Solution. Summary: detection always unattended; `opportunity`/`breaking` work is **auto-authored but gated to advance**; any `breaking` or any `irreversible` delta raises an ISS gate *before* authoring + flips `#needs-human`.

## Worked example (Cmux v0.64.12, 2026-06-02)

severity `opportunity` (`workspaceGroups@stable` reached) → step-3 loaded ADR-015 §E, `spec_upstream_pin`, `install.sh`, `cmux.json`; step-4 disposition = all Tier-0, parity clean (no config migration); step-5 importance: the *adapt* = load-bearing, the *binary re-pin itself* = irreversible → step-7 auto-authored `campaign_cmux_upstream_adapt`; the re-pin executed under the operator's full-run authorization with the irreversible step gated as `ua_p1`. No breaking surface → no `#needs-human`.

## Outputs

| Output | Type | Description |
|---|---|---|
| adapt-campaign + planning mission | content | `how/campaigns/<campaign>/…` at `status: proposed` |
| ISS gate | surface | `how/gates/<id>.html` for `load-bearing`+ decisions (via `skill_create_iss`) |
| `seen_ledger.jsonl` append | data | idempotency anchor on resolution |
| 5-line AAR | content | on the planning mission |

## Error Handling

- **Ambiguous / contradictory changelog** → widen research (issues + web); if still unclear, escalate as `breaking`-suspect (err toward the gate, not auto-author).
- **Over-scoping risk** → step-7 mandates scoping to the specific deltas; the disposition table bounds it; the operator gate catches it.
- **Cost** → research depth scales with severity (`informational` = one-line; only `opportunity`/`breaking` get the full `gh api` + web pass); route reads to a cheaper model, impact-assess + authoring to the capable one (`skill_orchestration_tiers`).

## Related

- [[how/skills/skill_upstream_drift_watch]] (the L0 detector) · [[what/patterns/pattern_upstream_drift_watch]] · [[how/templates/template_drift_report]]
- [[how/skills/skill_create_iss]] (escalation) · [[how/skills/skill_upstream_contribution]] (Tier-2 path) · [[how/skills/skill_orchestration_tiers]] (model routing).

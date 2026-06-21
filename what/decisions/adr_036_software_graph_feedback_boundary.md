---
type: adr
adr_number: "036"
title: "Software-Graph Feedback Loop — boundary, privacy, and wrapper-federation choice"
status: accepted
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
campaign_id: campaign_feedback_loop
supersedes:
superseded_by:
tags: [adr, decision, feedback_loop, telemetry, federation, privacy]
---

# ADR-036: Software-Graph Feedback Loop — Boundary, Privacy & Wrapper-Federation

## Status

Accepted — 2026-06-20. Operator ratified all three gate items at the campaign P0→P1 human gate (Standing Order #1): wrapper directory name **`feedback/`**, the four signal classes (`deploy_outcome` · `config_drift` · `install_friction` · `shared_aar`), and the Context.aDNA consume-by-reference boundary (§3). *(Proposed → Accepted; no clauses changed at ratification.)*

## Context

The `<Software>.aDNA` deployment-graph paradigm (sibling campaign [[how/campaigns/campaign_keystone/campaign_keystone|Operation Keystone]]) makes every piece of software the fleet runs into a graph an agent installs and operates. Those deployments generate **experience** — what broke on install, which config drifted, the After-Action Review a real operator wrote. Captured and fed back, that experience improves the *next* operator's defaults. The question this ADR settles: **how** is that signal channeled, **where** does its backend live, and **what** may never cross it.

Three forces constrain the answer:

1. **The compass.** [[who/governance/VISION.md|VISION]] states plainly: aDNA has *"no telemetry... no vendor lock-in... it never takes custody."* A naive "telemetry" feature contradicts the standard's founding promise.
2. **Standing Rule 6 (credential broker).** `Home.aDNA` (Hestia) is the canonical secret broker; secret values and node identity are sensitive. A signal channel that leaked either would be a doctrine violation, not a bug.
3. **An existing owner of telemetry transport.** `Context.aDNA` (Prometheus) already owns context/token telemetry transport + economics. A second transport stack would duplicate it.

## Decision

### 1. Operationalization, not contradiction (compass reconciliation)

The feedback loop is the **operationalization of the VISION's own opt-in "agents-as-sensing-network"** (VISION §"The Standard Evolves From the Field"), extended from *standard-level* improvement (already live via `skill_upstream_contribution`) to *deployment-level* improvement. The compass's "no telemetry" forbids **covert, hosted, custody-taking** collection. This channel is the opposite of that: **default-OFF, operator-granted, revocable, local-first**. It is therefore compass-aligned, and we record the reconciliation explicitly so no future reader mistakes it for a breach.

### 2. Wrapper directory name = `feedback/`

The operator-facing wrapper directory is **`feedback/`**, not `telemetry/` — because the bare word "telemetry" is the exact term the compass disavows, and because the parent operation/campaign are named *Feedback Loop*. The canonical artifact filenames retain the order's compound `telemetry_feedback` form for findability (`pattern_software_graph_telemetry_feedback.md`, `spec_telemetry_feedback_ecosystem.md`, `skill_telemetry_wrapper_integration.md`). *(Operator may override to `telemetry/` at the gate; that is a cheap wrapper-dir rename and does not change the `federation_ref` `source_*` file paths.)*

### 3. Context.aDNA consume-by-reference boundary

This pattern owns **deploy / operate / install signal semantics** — the meaning, schema, consent model, and AAR-contribution mapping. It **consumes Context.aDNA (Prometheus) by reference** for any transport + economics, exactly as III consumes `LatticeNetwork`/`Network.aDNA` ADRs by reference rather than re-deriving them. This vault authors **no transport**. The seam is staged to Prometheus as a coordination memo ([[who/coordination/coord_2026_06_20_feedback_loop_to_prometheus|coord_2026_06_20]]).

### 4. Privacy spine (binding, not preferential)

- **Consent**: `consent_state: opt_in_default_off`. The channel is OFF until an operator explicitly grants it, and is revocable at any time.
- **Names-only**: signal carries capability/pattern **names**, never values. No secret, credential, token, or PII ever transits — Standing Rule 6.
- **Redaction-before-transmission**: a named redaction profile (`software_graph_default`) strips node identity, absolute paths, hostnames, and secret-shaped tokens **before** anything leaves the local vault.
- **Local-first**: capture → operator review → opt-in submission. Nothing is submitted that the operator has not seen.
- **Mesh-aware, never mesh-mandatory**: a node may contribute over the mesh, but the loop is fully functional (local capture + manual review) on an air-gapped node.

### 5. Four signal classes

`deploy_outcome` · `config_drift` · `install_friction` · `shared_aar`. The richest is `shared_aar` — a sanitized return of the operator's scorecard AAR (`template_aar.md` shape), which maps to candidate pattern-updates in the owning `<Software>.aDNA` graph.

### 6. Wrapper-federation, not base-template baking

The pattern federates via a consumer `feedback/` wrapper (a `federation_ref` block + optional local extensions), **not** by baking collection into the base `.adna/` template. Rationale: default-OFF must be a *deliberate per-vault opt-in*, and baking-in would make the channel ambient — the precise failure the compass warns against. This mirrors III's `iii/` consumer-wrapper choice ([[../../III.aDNA/what/decisions/adr_002_consumer_federation_contract|III ADR-002]]).

## Consequences

### Positive
- The deployment-graph paradigm gets a growth loop without violating the compass.
- Bitwarden.aDNA and the Keystone cohort wire the wrapper natively at genesis as clean first consumers.
- No duplicated transport stack — Prometheus's economics are reused.

### Negative
- Two artifact-name registers (`feedback/` dir vs `telemetry_feedback` filenames) — mitigated by recording the choice here.
- Consume-by-reference means this campaign cannot ship an end-to-end demo without a Prometheus ack — accepted; P3 structures, does not execute.

### Neutral
- Establishes `feedback/` as a fleet wrapper convention alongside `iii/`, `git/`, `iss/`, `taskforge/`.

## Amendment History

| Date | Mission | Amendment summary |
|------|---------|-------------------|
| 2026-06-20 | M0 | ADR created (proposed) — boundary, privacy spine, wrapper name, wrapper-federation choice. |
| 2026-06-20 | M0 | **Accepted** at the P0→P1 operator gate — `feedback/` wrapper name, four signal classes, and Context.aDNA boundary ratified as written. No clause changes. |

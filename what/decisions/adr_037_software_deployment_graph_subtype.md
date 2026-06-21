---
type: adr
adr_number: "037"
title: "Software/Deployment-Graph subtype of Platform.aDNA — four-wrapper conformance + recipe-quarry reconciliation"
status: proposed
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
campaign_id: campaign_keystone
supersedes:
superseded_by:
tags: [adr, decision, keystone, platform, deployment_graph, federation]
---

# ADR-037: Software/Deployment-Graph Subtype & Recipe-Quarry Reconciliation

## Status

Proposed — 2026-06-20 (awaiting operator ratification at the Operation Keystone P0 gate, Standing Order #1). The category ruling itself is settled by the governing order; this ADR records it and the two contracts that ride with it.

## Context

The fleet is adopting a tier of per-software `<Software>.aDNA` deployment graphs ([[what/patterns/pattern_software_deployment_graph|pattern]]). Three things must be pinned before any graph is seeded: **where the tier sits in the aDNA categories**, **what makes a graph conformant**, and **how the tier reconciles with the pre-existing `Network.aDNA` deployment-recipe library**, which already deploys several of the same pieces of software.

## Decision

### 1. Category: Platform.aDNA with a software/deployment-graph designation (NOT a new category)

A deployment graph is a **Platform.aDNA** with a `platform_subtype: software_deployment_graph` designation. It is **not** a seventh aDNA category. Precedent: `Warp.aDNA`, `Obsidian.aDNA`, and `Lab.aDNA` are already software-surface Platforms — this names the sub-pattern they share. [[what/specs/spec_platform_ecosystem|spec_platform_ecosystem]] is extended with the subtype (surgical-additive).

### 2. Four-wrapper conformance contract

A graph is conformant iff it federates all four cross-cutting concerns through wrappers, never re-authoring them:

| Wrapper | Owner | Binds |
|---------|-------|-------|
| `git/` | Git.aDNA (Hopper) | git-ops / forge / CI-CD doctrine |
| `feedback/` | aDNA.aDNA (Rosetta), [[what/specs/spec_telemetry_feedback_ecosystem|telemetry-feedback spec]] | opt-in deploy-signal loop, default-OFF |
| `iii/` | III.aDNA (Argus) | inspect/introspect/improve |
| Home.aDNA credential routing | Home.aDNA (Hestia) | names-only secret brokering (Standing Rule 6) |

A graph that hard-codes credential handling, git-ops, or a second telemetry transport instead of federating is non-conformant.

### 3. Recipe-quarry reconciliation (recipes = source-quarry, graph = canonical home)

`Network.aDNA` (Venus) holds a mature deployment-recipe library (`what/profiles/deployment_recipes/` — Nebula, JupyterHub, Ray, Podman, WireGuard) whose own L2 recipe already encodes the latent doctrine *"deployment recipes route to the owning Platform vault."* This ADR ratifies that doctrine explicitly:

- The **`<Software>.aDNA` graph is the canonical home** for a software's install/operate/configure/update/interoperate knowledge.
- The **`Network.aDNA` recipes are source-quarry** — authoritative *until* a graph adopts them, then reframed as pointers/seed. Venus retains substrate, topology, membership, and the ledger event-catalog.
- The reframe is proposed to Venus by **coordination memo** (Standing Rule 10); this campaign does not write into `Network.aDNA`.

*(Operator-ratified seam, 2026-06-20.)*

### 4. Data-bearing discipline (ADR-016 §8 carried)

Any graph governing **data-bearing** software (Store, Groupware, Nextcloud, Forgejo, nginx-fronted services) carries the `Network.aDNA` ADR-016 §8 control-plane-vs-data-plane discipline: it runs on a data-plane node the lighthouse coordinates, never the control-plane lighthouse host. Placement co-designed with Venus.

## Consequences

### Positive
- The tier has a settled category, a crisp conformance test, and a clean seam with the recipe library.
- Composition graphs (Lighthouse) federate conformant bricks without duplication.

### Negative
- Existing software-surface Platforms (Warp, Obsidian, Lab, ComfyUI, Terminal) are now retrofit candidates for the four wrappers — tracked as a separate enrichment, not forced here.

### Neutral
- Adds `platform_subtype` as a frontmatter field for Platform vaults.

## Amendment History

| Date | Mission | Amendment summary |
|------|---------|-------------------|
| 2026-06-20 | Keystone M0 | ADR created (proposed) — subtype, four-wrapper conformance, recipe-quarry reconciliation, ADR-016 §8 carry. |

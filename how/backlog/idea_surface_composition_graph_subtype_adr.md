---
type: idea
status: proposed
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_metis_noctua
proposed_by: metis (Dashboards.aDNA, via Operation Noctua)
campaign_id: campaign_operation_noctua
plan_id:
tags: [idea, platform_adna, subtype, surface_composition_graph, dashboards, noctua, spec_platform_ecosystem, adr_candidate]
---

# Platform subtype ADR: `surface_composition_graph` (Dashboards.aDNA reference instance)

## Problem / Opportunity

`Dashboards.aDNA` classifies itself **Platform.aDNA · `surface_composition_graph`** — the coinage was operator-ratified twice (Aegis P0 2026-06-30; re-affirmed at Noctua D4, 2026-07-03: *"it composes/serves; the forging is WebForge's"* — provider-forge naming explicitly declined). The label is load-bearing: it appears in Dashboards' ADR-000/001, `STATE.md`, the workspace router row, and Home's vault inventory.

But the subtype is **undefined upstream**: `what/specs/spec_platform_ecosystem.md` defines only two Platform subtypes — `software_deployment_graph` (ADR-037) and `build_scale_role_graph` (ADR-041). A repo-wide grep finds `surface_composition_graph` nowhere in `aDNA.aDNA`. Campaign-side ratification without a standard-side definition is exactly the drift class the subtype ADRs exist to prevent.

## Proposed Solution — mint the ADR, don't drop the coinage

Author `adr_NNN_surface_composition_graph_subtype.md` (number minted at promotion, forward-only) defining the **third face** of the Platform-subtype family:

- **ADR-037 `software_deployment_graph`** — the *deploy/run* face (one software element, installed/operated).
- **ADR-041 `build_scale_role_graph`** — the *build* face (composes framework bricks into a **built artifact**; WebForge is the reference instance; "the framework graph is the brick, the build role-graph is the wall").
- **NEW `surface_composition_graph`** — the *serve/operate* face: a Platform that **composes a substrate (deploy-face), a methodology (framework), and build-face bricks into a governed, running data surface over a context graph** — and operates it (read-safe/write-gated invariant, grounded answers, HITL apply). It doesn't forge the artifact (that's the build role-graph it consumes) and it doesn't own the substrate (that's the deployment graph it wraps); it owns the **served surface + its governance**.

**Reference instance: `Dashboards.aDNA`** (Metis) — composes `Neo4j.aDNA` (substrate) + `Organization.aDNA` (methodology) + WebForge's dashboard/ops-center archetypes (build face) into the agentic battle-station surface; proven live on a real org graph 2026-07-06 (Noctua M-D2/M-D3).

Conformance sketch (to firm up in the ADR): the three build-face wrappers (git/iii/feedback) + names-only credentials, per ADR-041 precedent · a **provider contract** for its own consumers (Dashboards: `spec_dashboards_provider_contract.md`, drafted Noctua M-D5) · the **read-safe/write-gated** central invariant as a subtype obligation, not a per-graph choice · per-instance data custody rules (per-org config in the consumer vault; projections never committed).

## Discussion

- 2026-07-06 (Metis, filing): Rosetta owns spec edits — this idea is the intake; no direct `spec_platform_ecosystem.md` touch from the Dashboards lane. The Noctua F3/F4 evidence set (gate-green surface + real-exemplar proof + a second exemplar adopted at DQ-1) strengthens promotion; a natural moment is post-F4, when the reference instance's claims are adversarially verified.

## Decision

*(pending — Rosetta lane / operator ratification)*

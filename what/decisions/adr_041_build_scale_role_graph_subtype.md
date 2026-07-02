---
type: adr
adr_number: "041"
title: "Build-scale role-graph subtype of Platform.aDNA — the build-face twin of the software-deployment role-graph"
status: accepted
created: 2026-06-27
updated: 2026-07-02
last_edited_by: agent_rosetta
campaign_id: campaign_websites_genesis
supersedes:
superseded_by:
tags: [adr, decision, platform, build_role_graph, role_graph, websites, federation, software_element_graph]
---

# ADR-041: Build-scale role-graph subtype (build-face twin of the software-deployment role-graph)

## Status

Accepted — 2026-06-27 (operator-directed ratification: the operator selected **"ratify the standard-touches"**, landing the two standard-touches Vitruvius staged for Rosetta on 2026-06-25). This ADR records and formalizes the operator's **2026-06-25 SiteForge↔Astro ruling** ("Option C evolved" → create `Websites.aDNA`, retire SiteForge, slim `Astro.aDNA` to the framework brick). Proposed 2026-06-25 by Vitruvius (`Websites.aDNA`) via `proposal_adr_build_scale_role_graph.md`. Symmetric to [[adr_037_software_deployment_graph_subtype|ADR-037]] (the deploy-scale subtype) under the [[adr_039_software_element_context_graph_umbrella|ADR-039]] umbrella.

> **Naming note (2026-07-02, Champollion M4.4 hygiene sweep):** `Websites.aDNA` was renamed **`WebForge.aDNA`** fleet-side on 2026-07-02 (Corps M-C8, D-W0; ~30-day back-compat shim). This ADR preserves the original name throughout as the ratified 2026-06-27 record (phase-record precedent — ratified text is annotated, not rewritten); the live reference instance is now **`WebForge.aDNA`**.

## Context

[[adr_037_software_deployment_graph_subtype|ADR-037]] named the **deploy-scale** role-graph: `Lighthouse.aDNA` composes deployment-face graphs (Forgejo / Caddy / Nebula) via a four-wrapper conformance contract. The software-element-graph lens ([[adr_039_software_element_context_graph_umbrella|ADR-039]]) names composition "at two scales" — *build a thing* and *assemble a node* — but only the **node** scale had a *named role-graph*. The **build** scale had only the mechanism ("a consumer pulls several software graphs"); the composer itself was nameless.

In practice the build role-graph already existed, unnamed: website / dashboard / ops-center composition had accreted inside `Astro.aDNA` (which already federated `iii/ git/ typescript/ canvas/ comfyui/`) and was re-derived per consumer. The operator's 2026-06-25 ruling made the true name explicit — extract the pure Astro-6 brick (stays `Astro.aDNA`), rename the residual role-graph `Websites.aDNA`, federate the brick back.

## Decision

### 1. Category: Platform.aDNA with a `build_scale_role_graph` subtype (NOT a new category)

A build role-graph is a **Platform.aDNA** carrying `platform_subtype: build_scale_role_graph` — mirroring Lighthouse's Platform classification as a deploy-scale role-graph. It is **not** a seventh aDNA category. `Websites.aDNA` is the reference instance (its `what/decisions/adr_000` adopts the subtype provisionally). [[what/specs/spec_platform_ecosystem|spec_platform_ecosystem]] is extended surgical-additive.

### 2. What a build role-graph is

It composes **build-face** software-element graphs (Forge face = *produce-with*; Framework face = *conform-with*) into a built artifact — a website / dashboard / ops-center — federating its bricks via wrappers + `federation_ref` (the same universal access mechanism, [[adr_039_software_element_context_graph_umbrella|ADR-039]]). It **owns the role-shared assets no single brick or consumer can home**: archetypes, build lattices, content / voice / token / anti-slop doctrine, the site-quality gate framework, and deploy orchestration. *The framework graph is the brick; the build role-graph is the wall.*

### 3. Build-face conformance contract (mirrors ADR-037's four wrappers, adapted)

- **Three wrappers** — `git/` (Git.aDNA / Hopper) · `iii/` (III.aDNA / Argus — the judge; bricks do not grow their own review) · `feedback/` (aDNA.aDNA / Rosetta, default-OFF) carrying **build-face signal classes** `build_outcome` / `pattern_friction` / `slop_caught` / `gate_result` / `shared_aar` — plus a **names-only credential note** (build-face bricks touch few/no secrets; deploy secrets belong to the role-graph / Home).
- **Build-face standing orders** (replacing the deploy-gated SOs): context-only / authoring-gated (a *filled* template lives in the consumer, never the brick) · federate-never-duplicate · human-gates / no-auto-advance · archive-never-delete · version surface append-only / pinned.
- **Five verbs:** author · compose · validate · version · interoperate (vs the deploy face's install · operate · configure · update · interoperate).
- **Seam discipline:** a brick overlapping an existing owner draws the boundary in a **seam memo, ratified before populate** — e.g. `React.aDNA` owns React composition (`RC-*`) while `TypeScript.aDNA` keeps the typing layer (frozen `R-*`); `Tailwind.aDNA` owns the mechanism while `Websites.aDNA` keeps the token policy.

Reference skeleton: `Websites.aDNA/what/artifacts/template_build_face_software_graph_stub.md` (PROMOTE candidate → `aDNA.aDNA/how/templates/`; see follow-ups).

### 4. Relationship to the deploy-scale role-graph (the twin)

Build role-graph (`Websites.aDNA`) is to deploy role-graph (`Lighthouse.aDNA`) as *build a thing* is to *assemble a node*. Same mechanism ([[adr_039_software_element_context_graph_umbrella|ADR-039]]); only the composer and the face differ. Both are Platform role-graphs that own role-shared assets and federate conformant bricks without duplication.

## Consequences

### Positive

- Resolves the build/node asymmetry in [[what/patterns/pattern_software_element_context_graph|pattern_software_element_context_graph]] (companion amendment landed this session).
- "Build me a site / dashboard / ops-center" gets a first-class federated home (`Websites.aDNA`).
- Build role-graphs federate conformant build-face bricks (Astro / TypeScript / Tailwind / III) without re-deriving composition per consumer.

### Negative / follow-ups (named, not executed here)

- **PROMOTE candidates** (cross-graph relocations, separately gated — workspace Rule 10): `sf_forge_pattern_spec.md` (the canonical wrapper schema, currently in `Astro.aDNA`; it is doctrine, not build-role) → `aDNA.aDNA`; `template_build_face_software_graph_stub.md` → `aDNA.aDNA/how/templates/`.
- **Spec addition**: the build-face `feedback/` signal classes are a small additive extension to [[what/specs/spec_telemetry_feedback_ecosystem|spec_telemetry_feedback_ecosystem]] (deploy-flavored today) — ratified in principle here; the spec edit is a follow-up.
- Existing build-with Forges/Platforms are **not** retro-imposed with this contract (parallel to ADR-037's stance on the deploy face).

### Neutral

- Adds `build_scale_role_graph` as a `platform_subtype` value.

## Amendment History

| Date | Mission | Amendment summary |
|------|---------|-------------------|
| 2026-06-25 | Websites genesis (Vitruvius) | Proposed via `proposal_adr_build_scale_role_graph.md` (staged to Rosetta). |
| 2026-06-27 | Naming-ratify + III-pilot-seed session | Authored + ratified `proposed → accepted` (operator-directed). Companion pattern amendment landed. PROMOTE candidates + spec addition recorded as follow-ups. |

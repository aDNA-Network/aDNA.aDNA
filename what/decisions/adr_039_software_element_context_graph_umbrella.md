---
type: adr
adr_number: "039"
title: "Software-Element Context Graph — the cross-category lens over Forge / Framework / Deployment-graph"
status: accepted
created: 2026-06-22
updated: 2026-06-22
last_edited_by: agent_stanley
campaign_id: campaign_keystone
supersedes:
superseded_by:
tags: [adr, decision, software_element_graph, context_graph, federation, forge, framework, platform, composition, umbrella]
---

# ADR-039: Software-Element Context Graph — the cross-category lens

## Status

Accepted — 2026-06-22 (operator-directed; ratified at the "expand the context-graph framework to software elements" decision, Standing Order #1). Names a pre-existing shared mechanism; restructures nothing.

## Context

The fleet exposes software as aDNA graphs in **three independently-evolved ways** that turn out to be one idea:

- **Forge** (`spec_forge_ecosystem`) — a software you *build artifacts with* (Astro, ComfyUI, Molecules, Oration, Videos); consumers federate a `<forge>/` wrapper + `federation_ref`.
- **Framework** (`spec_framework_ecosystem`) — a software/standard you *author or conform with* (TypeScript, III, Git); consumers federate a `<framework>/` wrapper + `federation_ref`.
- **Deployment-graph** (`spec_platform_ecosystem` v0.2, [[adr_037_software_deployment_graph_subtype|ADR-037]]) — a software you *install and run* on a node (Forgejo, Caddy, Nebula, … — Operation Keystone); a role-graph (`Lighthouse.aDNA`) composes them.

All three give one piece of software a context graph and let consumers reach it through the **same** wrapper + `federation_ref` mechanism, and all three **compose** (a consumer pulls several at once). The operator's expansion — *"every key software element gets a graph; agents access the software via its context graph; a site connects to `Astro.aDNA` and `TypeScript.aDNA` to use both"* — is precisely this shared idea. It needs a name and a canonical statement so the three stop reading as unrelated mechanisms.

## Decision

### 1. The lens — software-element context graph (NOT a new category)

A **software-element context graph** is any `<Software>.aDNA` graph whose job is to carry the using-context for one piece of software so consumers reach the software **through the graph**. This is a **cross-category lens**, recorded as [[../patterns/pattern_software_element_context_graph|pattern_software_element_context_graph]]. It does **not** add a category, does **not** re-categorize any graph, and requires **no frontmatter migration** — Astro stays a Forge, TypeScript a Framework, Forgejo a Platform-subtype. It names what they share.

### 2. The three faces

The lens spans three faces, distinguished by the consumer's verb: **build-with → produce** (Forge), **build-with → conform** (Framework), **deploy-and-run → operate** (Platform `software_deployment_graph`). A graph wears exactly one face = its category.

### 3. Universal access mechanism

A consumer (vault **or** agent) accesses any software-element graph the same way: a `<software>/` wrapper directory carrying one or more `federation_ref` blocks (canonical schema = `Astro.aDNA/what/artifacts/sf_forge_pattern_spec.md`: `source_vault` + one of `source_lattice`/`source_skill`/`source_topic`/`source_pattern` + `version` + `version_policy` + `description`). Composition is **pull-based and design-time** — the agent loads referenced context at session-start; nothing is copied; the software's context stays canonical in its own graph.

### 4. Composition at two scales

- **Build-a-thing** — a consumer pulls multiple software-element graphs to assemble a capability (a site → `Astro.aDNA` + `TypeScript.aDNA` + `III.aDNA` + `Git.aDNA`).
- **Assemble-a-node** — a role-graph composes deployment-face graphs into a stack (`Lighthouse.aDNA` → `Forgejo` + `Caddy` + `Nebula` + …).

Both are the same mechanism; only the composer differs (a build consumer vs. a node role-graph).

### 5. Relationship to existing decisions

- [[adr_037_software_deployment_graph_subtype|ADR-037]] (the deploy-face subtype + four-wrapper conformance + recipe-quarry reconciliation) is **ratified to `accepted`** alongside this ADR — the operator's integrate directive is its pending Keystone-P0 GO. The four-wrapper conformance contract binds the **deploy face**; it is **not** retro-imposed on Forge/Framework faces here (separate enrichment if ever desired).
- The four ecosystem specs each gain a one-line cross-link to the umbrella pattern (surgical-additive); `pattern_software_deployment_graph` names this umbrella as its parent.

## Consequences

### Positive
- One canonical name + access contract for "reach software through its graph," so new software graphs (and their consumers) inherit a known pattern instead of reinventing it.
- The composition story (Astro+TypeScript build; Forgejo+Caddy+Nebula node) is documented end-to-end across faces.

### Negative
- One more cross-cutting doc to keep in sync with the three category specs (mitigated: the specs only *point* to it; the lens stays thin).
- Risk of being mistaken for a category (mitigated: §1 states "not a category" and no frontmatter changes).

### Neutral
- An optional descriptive `software_element_face: forge|framework|deployment` frontmatter tag could be added later for query convenience; not required by this ADR.

## Amendment History

| Date | Mission | Amendment summary |
|------|---------|-------------------|
| 2026-06-22 | Keystone software-element-graph unification | ADR created (accepted) — the cross-category lens, three faces, universal access mechanism, two-scale composition; ratifies ADR-037 alongside. |

---
type: adr
adr_number: "045"
title: "Wrapper placement in the triad — consumer federation wrappers live under how/federation/<wrapper>/"
status: accepted
created: 2026-06-30
updated: 2026-06-30
last_edited_by: agent_stanley
campaign_id:
supersedes:
superseded_by:
tags: [adr, decision, federation, wrapper, triad, placement, conformance, migration, governance]
---

# ADR-045: Wrapper placement in the triad — consumer federation wrappers live under `how/federation/`

## Status

Accepted — 2026-06-30 (ratified by Stanley, Founding Architect, via approved plan; authored by Rosetta / `aDNA.aDNA` as the standard owner; relocation program coordinated from `aDNALabs.aDNA` / Berthier, org HQ). This pins a structural convention of the aDNA Universal Standard (where a consumer's federation wrappers sit relative to the triad). The four standard documents that previously *implied* root placement are amended in lockstep with this ADR (see [Lockstep amendments](#6-lockstep-amendments)); the public image (`aDNA-Network/aDNA`) carries the same through `skill_template_release`.

## Context

A **consumer federation wrapper** is the lightweight directory a graph adds to reach a software-element context graph it federates: a small `CLAUDE.md` carrying a `federation_ref` block (canonical schema: [[../artifacts/sf_forge_pattern_spec|sf_forge_pattern_spec]] in `Astro.aDNA`) plus optional local overrides. It is the **same access mechanism** named by [[adr_039_software_element_context_graph_umbrella|ADR-039]] across all three faces — Forge, Framework, and deployment-Platform. Concrete instances span:

- cross-cutting service wrappers — `git/` (Git.aDNA), `iii/` (III.aDNA), `feedback/` ([[spec_telemetry_feedback_ecosystem]]), `iss/` (decision-gate surfaces);
- forge wrappers — `siteforge/`, `presentationforge/`, `speechforge/`, … ;
- software-element wrappers — `typescript/`, `neo4j/`, `react/`, … ;
- coordination wrappers — `taskforge/`.

Until now these wrappers sat **at graph root**, as siblings to `who/ what/ how/`. That was the de-facto standard but was **never written as an explicit rule** — it was only *shown by example* in `Astro.aDNA/what/artifacts/sf_forge_pattern_spec.md` and *baked into* `III.aDNA/what/decisions/adr_002_consumer_federation_contract.md`. As a result the convention was implicit, root directories accumulated a variable number of non-triad siblings, and a graph's top-level shape was no longer "the triad + standard files" at a glance. Approximately **216 such wrappers exist across ~70 active graphs** — large enough that the placement rule deserves to be stated, not inferred.

## Decision

### 1. Canonical placement — `how/federation/<wrapper>/`

Every consumer federation wrapper lives in **one consistent container per graph**: `<graph>/how/federation/<wrapper>/`. Examples:

| Before (graph root) | After |
|---------------------|-------|
| `<graph>/git/` | `<graph>/how/federation/git/` |
| `<graph>/iii/` | `<graph>/how/federation/iii/` |
| `<graph>/feedback/` | `<graph>/how/federation/feedback/` |
| `<graph>/iss/` | `<graph>/how/federation/iss/` |
| `<graph>/siteforge/` | `<graph>/how/federation/siteforge/` |
| `<graph>/typescript/` | `<graph>/how/federation/typescript/` |
| `<graph>/taskforge/` | `<graph>/how/federation/taskforge/` |

A graph root is therefore once again just **`who/ what/ how/` + standard files** (`CLAUDE.md`, `MANIFEST.md`, `STATE.md`, `CHANGELOG.md`, `AGENTS.md`, `README.md`).

### 2. Rationale

Wrappers are **operational integrations the graph *invokes*** — a review skill (`iii/`), git-ops (`git/`), a deploy-signal loop (`feedback/`), decision gates (`iss/`), generation pipelines (forge wrappers). Operations are the province of `how/`. Consolidating them under a single `how/federation/` container both (a) keeps each graph root clean so the **triad is the unambiguous top-level structure**, and (b) gives every graph one predictable place to enumerate its outbound integrations rather than scattering them as root siblings.

### 3. Scope boundary

**IN scope (relocate).** Every consumer wrapper directly under a graph root whose `CLAUDE.md` carries a `federation_ref` block. The `federation_ref` block is the test: if the directory is a federation wrapper, it moves.

**OUT of scope (stay where they are).**

- **(a) Code-object-scoped `git/` wrappers** nested under a vendored code object at `what/<code>/git` — these do git-ops for *that sub-repo*, not for the graph, and carry no graph-level `federation_ref` consumer contract. They are not federation wrappers and do not move.
- **(b) Wrapper *templates*** that live in `what/` as authored artifacts (e.g. `VisualDNA.aDNA/what/templates/consumer_wrappers/`). These are knowledge objects (the blueprint for a wrapper), not an active consumer wrapper, and correctly belong under `what/`.

### 4. Disambiguation — consumer federation ≠ network/node federation

"Federation" in `how/federation/` means the **`federation_ref` consumer-wrapper layer** — a graph pulling another graph's context at design time. This is **distinct from network/node federation** — the live mesh/membership substrate that links nodes — which is owned by `Network.aDNA` (persona Venus) and lives in *that* graph's `how/`/`what/` (federation operations, skills, governance). `how/federation/` is **not** a node-federation surface and must not be confused with one; a graph that needs network-federation primitives routes to `Network.aDNA` (Venus-gated), it does not put them here.

### 5. Migration

Existing wrappers are relocated **fleet-wide** with the following discipline:

1. **History-preserving move** — `git mv <graph>/<wrapper> <graph>/how/federation/<wrapper>` (never a delete-and-recreate), so each wrapper's provenance survives.
2. **Back-compat shim** — a 30-day back-compat symlink is left at the old root path (`<graph>/<wrapper>` → `how/federation/<wrapper>`) per **Standing Rule 9 (shim-window discipline)**: registered at creation in the node's shim ledger with class, window, retire-condition (window-lapse + verified ref-sweep-zero + owner-ack), and owner.
3. **Upstream pointer unchanged** — a wrapper's `federation_ref` `source_vault`/`source_path` (which targets the **SOURCE** graph, e.g. `~/aDNA/III.aDNA`) is **not** rewritten; the source of truth still lives in the source graph. Only a wrapper's **self-referential local paths** (paths that name the wrapper's own now-moved location) are rewritten to the `how/federation/` path.

The relocation runs as a separate program coordinated from `aDNALabs.aDNA` (Berthier); this ADR is the standard-side authority it executes against.

### 6. Lockstep amendments

The standard documents that previously implied root placement are corrected in step with this decision:

- **This vault (`aDNA.aDNA`), in this effort** — `what/specs/spec_forge_ecosystem.md`, `what/specs/spec_framework_ecosystem.md`, `what/specs/spec_platform_ecosystem.md` (the four-wrapper conformance table), and `what/patterns/pattern_software_element_context_graph.md` (the `<consumer>.aDNA/<software>/CLAUDE.md` example path) now show `how/federation/<wrapper>/` and cite this ADR.
- **Separate effort (sibling vaults)** — `III.aDNA/what/decisions/adr_002_consumer_federation_contract.md`, `III.aDNA/what/decisions/adr_003_learning_store_ownership.md`, and `Astro.aDNA/what/artifacts/sf_forge_pattern_spec.md` are being amended to point at `how/federation/`. (Those vaults are out of scope for this ADR's edits — coordinated, not co-authored here.)

## Consequences

### Positive

- The placement rule is **explicit** for the first time — new graphs and their consumers inherit a stated convention instead of copying an inferred example.
- Graph roots are clean again — top-level shape is the triad + standard files, so the triad reads as the unambiguous structure.
- Every graph has **one** predictable container enumerating its outbound integrations.

### Negative

- A one-time fleet relocation of ~216 wrappers across ~70 graphs, plus ~216 shim symlinks to register and (after the window) retire. Mitigated: history-preserving `git mv` + Standing-Rule-9 shim discipline make each move reversible and auditable; the program is batched, not improvised.
- A second level of nesting for wrapper paths (`how/federation/<wrapper>/` vs `<wrapper>/`). Mitigated: the deeper path is the same for every wrapper, so it is predictable.

### Neutral

- The `federation_ref` schema itself is unchanged; only the wrapper directory's *location* moves. Source graphs are untouched.
- Pre-existing wikilinks/prose that referenced a root wrapper path resolve through the shim during the window; ref-sweep-to-zero is the retire condition (Standing Rule 9), not the move itself.

## Alternatives considered

- **Leave wrappers at graph root (status quo, just write the rule).** Rejected: keeps a variable number of non-triad siblings at root, so the triad never reads as the unambiguous top-level shape — the exact ambiguity this decision removes.
- **A root-level `federation/` sibling (not under `how/`).** Rejected: it would add yet another top-level sibling to the triad, and it miscategorizes wrappers — they are operations the graph *invokes*, which is `how/`, not a fourth leg.
- **Per-face containers (`how/forges/`, `how/frameworks/`, `how/platforms/`).** Rejected: a consumer routinely composes across faces (a site pulls a Forge *and* a Framework); splitting by face fragments one consumer's integrations and contradicts the single-mechanism finding of ADR-039. One `how/federation/` container holds them all.

## References

- Umbrella lens + universal access mechanism: [[adr_039_software_element_context_graph_umbrella|ADR-039]] · [[../patterns/pattern_software_element_context_graph|pattern_software_element_context_graph]]
- Canonical `federation_ref` + wrapper schema: [[../artifacts/sf_forge_pattern_spec|sf_forge_pattern_spec]] (in `Astro.aDNA`)
- Category specs amended in lockstep: [[../specs/spec_forge_ecosystem|spec_forge_ecosystem]] · [[../specs/spec_framework_ecosystem|spec_framework_ecosystem]] · [[../specs/spec_platform_ecosystem|spec_platform_ecosystem]]
- Deployment-graph four-wrapper conformance: [[adr_037_software_deployment_graph_subtype|ADR-037]]
- Shim-window discipline: workspace `CLAUDE.md` Standing Rule 9 (shim ledger in `Home.aDNA`)
- Network/node federation (distinct surface): `Network.aDNA` (Venus)
- Upstream standard: `adna_standard.md` (github.com/aDNA-Network/aDNA) — vault fork + consumer-wrapper conventions

## Amendment History

| Date | Mission | Amendment summary |
|------|---------|-------------------|
| 2026-06-30 | Wrapper-placement standardization | ADR created (accepted) — pins consumer federation wrappers to `how/federation/<wrapper>/`; states scope IN/OUT, the consumer-vs-network federation disambiguation, and `git mv` + 30-day-shim migration; records the lockstep amendments. |

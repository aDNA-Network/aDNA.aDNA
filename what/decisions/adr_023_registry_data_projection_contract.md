---
type: adr
adr_number: 023
title: "Registry Data-Projection Contract — build-time JSON projection from canonical YAML + per-vault frontmatter overlays + CI/Vercel fallback as canonical doctrine"
status: accepted   # ratified at M3.5 S3 close per Campaign SO #14 in-phase exception clause D2=A — 2nd invocation in v8 after M3.4 ADR-014
created: 2026-05-25
updated: 2026-05-25
last_edited_by: agent_stanley
supersedes:
superseded_by:
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages
objective: 8
decision_letter: A   # M3.5 D2=A operator-default ratified at S1 plan approval (Campaign SO #14 in-phase exception clause invocation — 2nd in v8)
ratification_phase: M35_S3_close_via_campaign_so_14_in_phase_exception_clause_load_bearing_for_cross_vault_registry_consumers
ratified: 2026-05-25   # set at M3.5 S3 close (session_stanley_20260525T032752Z_v8_m35_s3)
ratified_session: session_stanley_20260525T032752Z_v8_m35_s3   # set at M3.5 S3 close
deciders: [agent_stanley, operator_stanley]
informed: [berthier, argus, hermes, spock, mnemosyne, hygieia, asclepius, daedalus, iris, mentor, venus, hestia, franklin, ariadne, robert_kennedy]   # all personas with registry-surface consumer obligations across the lattice
related_decisions: [adr_014_verification_handoff_topology, adr_016_per_mission_context_budget, adr_022_tool_use_logging]
related_specs: [m35_obj3_t9_design_spec, m35_obj4_t10_design_spec, m35_obj5_t11_design_spec, m35_obj6_t12_design_spec]
related_skills: [skill_home_polish, skill_vault_card_authoring, skill_verification_handoff, skill_obsidian_integration_test]
tags: [adr, decision, adr_023, campaign_adna_serious_tool_readiness, m35, v8, p3, registry_data_projection_contract, build_time_projection, canonical_yaml_plus_overlay, ci_vercel_fallback, byte_identical_idempotency, cross_vault_consumer_obligation, freshness_semantics, source_inventory_sha, campaign_so_14_in_phase_exception_clause_invoked_2nd_v8, slot_reassignment_chain_adr_015_through_adr_023, second_multi_step_forward_only_adr_reassignment_v8, siteforge_adna_consumer, latticelabs_adna_consumer, latticenetwork_adna_consumer, rareharness_adna_consumer, wilhelmai_adna_consumer, cakehealth_adna_consumer, superleague_adna_consumer, rosetta]
---

# ADR-023: Registry Data-Projection Contract — build-time JSON projection from canonical YAML + per-vault frontmatter overlays + CI/Vercel fallback as canonical doctrine

## Status

**Accepted** at M3.5 S3 close 2026-05-25 (`session_stanley_20260525T032752Z_v8_m35_s3`). Drafted at S2b 2026-05-25 (`session_stanley_20260525T022725Z_v8_m35_s2b`) alongside T11 Astro `/vaults/` registry surface design spec (`m35_obj5_t11_design_spec.md`) + the populate-apply pass landing `aDNA.aDNA/scripts/build_vaults_data.mjs` + `vaults.json` (sha `63e28408c8e87f77`) + `vaults.schema.json` + 3 Astro routes + 3 section components per Campaign SO #14 in-phase exception clause D2=A operator-ratified at M3.5 S1 plan approval. **Ratified at S3 close** — projection script shipped + Astro built clean (150 pages including 31 vault detail + index + graph) + AAR documents the load-bearing rationale + Clause A.2 idempotency contract demonstrated empirically at S2b (`diff /tmp/vaults_first.json src/data/vaults.json` clean after second run of `npm run sync:vaults` — first canonical consumer satisfies the contract). Campaign SO #14 in-phase exception clause invocation — **2nd invocation in v8** after M3.4 ADR-014 (2026-05-24).

### Ratification

Status transitioned `draft → accepted` at M3.5 S3 close commit. The 3 clauses A data-projection-contract-definition + B consumer-mission-obligations + C cross-vault-freshness-semantics are now operational. **Downstream consumers** — SiteForge.aDNA partner-site templates (Day-1 consumer at v8 P6 propagation) + LatticeLabs.aDNA partner-vault registry (Berthier-persona-authored registry surface in LL.aDNA successor missions) + LatticeNetwork.aDNA Venus-persona Network.aDNA aggregate registry + RareHarness.aDNA + WilhelmAI.aDNA + CakeHealth.aDNA + SuperLeague.aDNA — may cite this ADR as canonical doctrine immediately upon ratification (i.e., from this S3 close commit forward). v8 P6 ecosystem propagation will land the upstream-promotion candidate (ADR-023 itself + the projection-script pattern at `.adna/template_build_data_projection.mjs` + the JSON Schema template + the 3-route Astro pattern as `.adna/template_registry_surface/`) at `LatticeProtocol/aDNA` per the design-at-P3-propagation-at-P6 pattern (5th survival test passed via M3.5 inheritance from M3.1+M3.2+M3.3+M3.4).

**At 2nd invocation in v8, Campaign SO #14 in-phase exception clause stabilizes as canonical-for-load-bearing-decisions-that-block-cross-vault-propagation.** Both invocations (M3.4 ADR-014 + M3.5 ADR-023) cite the same trigger — load-bearing for in-phase consumers + cross-vault propagation that would otherwise stall on phase-exit gating. The variant ratifies as canonical at M3.5 S3 close AAR §Pattern graduation block (advances to 2 of 3 use instances; graduation gate at M3.6 or M3.7 close).

**Note on D7d carve-out**: D7d (31 vault_card image regen via Imagen 4) was carved out from M3.5 S3 to M3.5.5 interstitial mission at this S3 close (auth blocker + clipboard mechanism friction; operator AskUserQuestion 2026-05-25T~03:50Z). The carve-out does NOT affect ADR-023 ratification — D7d image regen is a downstream visual-polish consumer of the projection contract (it consumes `vault_card.img_path` values projected through `build_vaults_data.mjs`), not a precondition for ratification. Clause C cross-vault freshness semantics (`source_inventory_sha:` + per-vault `last_synced:`) remain authoritative and are unaffected by the image-content carve-out.

### Elevation chain — slot reassignment

ADR-023 is the result of a **multi-step forward-only ADR slot reassignment chain** — the second instance in v8 after M2.4's ADR-007 → ADR-019 → ADR-022 precedent. Discovery: plan ratification at M3.5 S1 named "ADR-015" but a campaign master read at S1 entry surfaced ADR-015 already `forecast` for P4/M4.2 (installer packaging). Per M2.4 forward-only discipline (*"next clear unreserved slot beyond all forecast reservations"*):

| Slot | Status | Reserve | Reassigned to |
|---|---|---|---|
| ADR-015 | reserved-P4-M4.2 | installer packaging | — |
| ADR-016 | accepted | per-mission context budget | — |
| ADR-017 | accepted | network.aDNA pattern category + namespace | — |
| ADR-018 | reserved-P3-M3.4-or-P5 | TBD (M3.4 verification-handoff topology took ADR-014 instead) | — |
| ADR-019 | reserved-P3-M3.7 | modular III for Obsidian | — |
| ADR-020 | reserved-P6-close | v8 P6 ecosystem propagation cycle ADR | — |
| ADR-021 | gap-skip | conservative; may fill by earlier mission | — |
| ADR-022 | accepted | tool-use logging (M2.4) | — |
| **ADR-023** | **draft (this ADR)** | **registry data-projection contract (M3.5)** | **✅** |

ADR-023 is the next clear unreserved slot beyond all forecast reservations. Pattern extends M2.4's ADR-007 → ADR-019 → ADR-022 precedent to a 7-step chain (ADR-015 → ADR-018 → ADR-019 → ADR-020 → ADR-021-gap → ADR-022-accepted → ADR-023). The chain documents campaign master ADR Roadmap row addition + forward-only discipline preserves named predecessor references for audit.

### Campaign SO #14 in-phase exception clause invocation

Campaign Standing Order #14 default = ADR ratification at phase exit. **In-phase exception clause** explicitly permits ratification mid-phase when load-bearing for in-phase consumers. ADR-023 invocation rationale:

- **M3.5's own populate-apply pass consumes ADR-023 doctrine** for the projection script's CI/Vercel fallback semantics + idempotency contract + freshness drift detection
- **M3.6 (airlock streamlined) + M3.7 (modular III for Obsidian)** consume ADR-023 substrate when their own consumer surfaces (airlock III-aDNA federation gates / III runtime cycles) read projected vault data
- **Cross-vault propagation (SiteForge.aDNA / LatticeLabs.aDNA / LatticeNetwork.aDNA / RareHarness.aDNA / WilhelmAI.aDNA / CakeHealth.aDNA / SuperLeague.aDNA)** consumes ADR-023 doctrine when their own registry surfaces ship + declare `data_projection_contract: ADR-023` in their build scripts

Mirrors M3.4 ADR-014 precedent. Both ADRs satisfy the in-phase exception clause "load-bearing for in-phase consumers + cross-vault propagation" test.

## Context

The M3.5 mission ships a **dual-render context-graph inventory/registry surface** across two distinct consumption substrates:

1. **Obsidian-native surface** (`node.aDNA/HOME.md` Gallery + `node.aDNA/what/vault_cards/` 31 cards) — operator-facing local view via Obsidian Bases primary + Dataview JS fallback + plain markdown last-resort (T9 cascade)
2. **Docs-site surface** (`aDNA.aDNA/site/src/pages/vaults/{index, [slug], graph}.astro` registry routes) — adopter-facing public view at `adna-docs.vercel.app/vaults/`

Both renders consume the same source-of-truth substrate: `node.aDNA/what/inventory/inventory_vaults.yaml` (canonical YAML, 31 vaults) + per-vault frontmatter overlays at `node.aDNA/what/vault_cards/the_*.aDNA.md` (T10 v0.2 schema). The Obsidian surface reads the substrate directly via Bases/Dataview frontmatter queries. The Astro surface CANNOT read the YAML + 31 markdown files at request-time (Astro static generation requires committed input); it needs a **projection** from the substrate into a build-time JSON file.

Pre-M3.5 state: no projection contract existed. Astro static generation required a contract for cross-vault data sourcing — symlinking `node.aDNA/what/` into `aDNA.aDNA/site/src/` was rejected (Astro `src/` must be self-contained for Vercel + external contributors); git submodule was rejected (overkill for in-workspace cross-vault sourcing); runtime fetch was rejected (defeats static-generation); hand-authored mirror in `aDNA.aDNA/what/registry/vaults.json` with separate sync skill was rejected (double-source-of-truth risk).

T11 design spec recommended **build-time projection script** as Option 1 (RECOMMENDED): a prebuild script reads canonical YAML + iterates vault_card frontmatter overlays + writes committed JSON; the script is idempotent (byte-identical output on same inputs); CI/Vercel fallback uses last-committed JSON if the source vault is absent. ADR-023 ratifies this projection contract as canonical doctrine for the lattice — load-bearing for all cross-vault registry consumers.

## Decision

The aDNA lattice adopts the **Registry Data-Projection Contract** as canonical doctrine for cross-vault registry surfaces. 3 clauses:

### Clause A — Data-projection contract definition

A *registry data-projection* is a **build-time projection** from canonical source-of-truth substrate (typically YAML inventory + markdown frontmatter overlays) into a committed JSON artifact consumed by the consumer surface (typically Astro static-generation, but extensible to other static-site generators or runtime consumers).

The projection MUST satisfy:

- **A.1 Canonicality**: the source-of-truth substrate is named in the projection's output JSON as `source_inventory_path:` + `source_inventory_sha:` frontmatter; the projection NEVER mutates the source
- **A.2 Idempotency**: running the projection twice on the same inputs MUST produce byte-identical output (verified via `git diff` clean post-run). Achieved via: stable iteration order (sort vaults by name), stable JSON serialization (2-space indent, key-sort enabled), absence of timestamp-on-write (sync timestamps come from input `last_synced` field, not projection runtime)
- **A.3 CI/Vercel fallback**: when the source-of-truth substrate is absent from the build environment (Vercel deploy without `node.aDNA/` sibling; CI runner without cross-vault checkout), the projection MUST log a warning + skip overwrite + fall back to the last-committed JSON. The build MUST proceed cleanly with the fallback JSON
- **A.4 Schema-pinned output**: the output JSON conforms to a JSON Schema committed alongside (e.g., `aDNA.aDNA/site/src/data/vaults.schema.json` co-located with `vaults.json`); the schema declares required fields + permitted enum values per vault-class + relationship-edge taxonomy

**Canonical implementation** for the M3.5 case: `aDNA.aDNA/scripts/build_vaults_data.mjs` reads `../node.aDNA/what/inventory/inventory_vaults.yaml` + iterates `../node.aDNA/what/vault_cards/the_*.aDNA.md` frontmatter overlays + writes `site/src/data/vaults.json` + `site/src/data/vaults_graph.mmd` (Mermaid DSL relationship graph derived from cross-vault edges in vault_card frontmatter). Wired via `aDNA.aDNA/site/package.json` `prebuild` script.

### Clause B — Consumer-mission obligations

Partner-vault implementation-class missions that author their own registry surfaces (consuming this contract for their own data-projection needs) MUST:

- **B.1 Cite ADR-023** in the mission spec frontmatter `related_decisions:` field + body cross-references
- **B.2 Declare projection contract version** in the projection script header (e.g., `# data_projection_contract: ADR-023 v1.0`)
- **B.3 Co-locate JSON Schema** alongside output JSON in the consumer vault's site directory
- **B.4 Implement CI fallback** per Clause A.3 (warning log + skip overwrite + clean build proceed)
- **B.5 Pin source SHA** in output JSON frontmatter (`source_inventory_sha:` computed from input YAML+overlays content hash; enables freshness drift detection per Clause C)

**Day-1 consumers**: SiteForge.aDNA partner-site templates (v8 P6 propagation; site-template authors registry per ADR-023); LatticeLabs.aDNA Berthier-persona registry; LatticeNetwork.aDNA Venus-persona Network.aDNA aggregate registry. **Plausible follow-on consumers** at each vault's own successor missions: RareHarness.aDNA + WilhelmAI.aDNA + CakeHealth.aDNA + SuperLeague.aDNA — each may publish its own context-graph inventory surface citing ADR-023.

Consumer obligations are **discoverable via federation_ref** at the consumer vault's `aDNA.aDNA/` (or equivalent doctrine-source) federation block. Partner-vault forks made between v7.0 and v7.x can opt-in to ADR-023 at any time without coordination requirement — the contract is additive-non-breaking.

### Clause C — Cross-vault freshness semantics

The projection output JSON carries **freshness drift detection** metadata:

- **C.1 `source_inventory_sha:`** — SHA-256 (truncated to 12 chars hex) of the source-of-truth YAML content at projection time. Consumers comparing two `vaults.json` outputs across builds detect substrate drift when SHAs differ
- **C.2 Per-vault `last_synced:`** in vault_card frontmatter — written by `skill_vault_card_authoring` at `--mode author` (ISO 8601 date) — surfaces in projected output for per-vault freshness reporting
- **C.3 Drift policy** — the projection MUST proceed cleanly even when overlays are stale (e.g., a vault_card with `last_synced: 2026-03-01` and inventory YAML updated 2026-05-25). Drift is REPORTED in projection logs (`[build_vaults_data] WARN: 3 vault_cards stale > 30d`) but NOT FATAL. Operator-side audit via `skill_vault_card_authoring --mode audit` reports per-card drift verdicts
- **C.4 Freshness consumer obligation** — registry-surface UIs MAY render freshness indicators (e.g., "synced 30d ago" badge on vault cards with stale `last_synced` field). The projection emits per-vault `freshness_days:` integer for UI consumption

## Alternatives considered

Per T11 design spec §3 option matrix:

| # | Alternative | Rejection rationale |
|---|---|---|
| 2 | Symlink `node.aDNA/what/` into `aDNA.aDNA/site/src/` | Astro `src/` must be self-contained for Vercel + external contributors; symlinks break in CI checkouts |
| 3 | Git submodule | Overkill for in-workspace cross-vault sourcing; complicates contributor onboarding |
| 4 | Hand-authored mirror in `aDNA.aDNA/what/registry/vaults.json` with separate sync skill | Double-source-of-truth risk; the YAML and the JSON would inevitably drift; manual sync invites human error |
| 5 | Runtime fetch (e.g., Astro SSR querying YAML at request-time) | Defeats Astro's static-generation model; introduces request-path latency + cross-vault filesystem dependency at deploy-time |

Option 1 (build-time projection) preserves canonical YAML as source-of-truth, ships a single committed JSON for Astro static generation, and degrades gracefully via CI/Vercel fallback. ADR-023 ratifies this option as canonical.

## Relationship to other ADRs

- **[[adr_014_verification_handoff_topology.md|ADR-014]]** — Verification side of the same mission cohort. ADR-014 governs how implementation-class missions split verification across agent + operator + dispatch surfaces; ADR-023 governs how registry data flows from source-of-truth to consumer. Both ADRs ratify under Campaign SO #14 in-phase exception clause; both are load-bearing for cross-vault propagation
- **[[adr_016_per_mission_context_budget.md|ADR-016]]** — Budget side. ADR-016 Clause A two-metric budget (content-load + API-billing) constrains the projection script's runtime cost. ADR-023 Clause A.2 idempotency is a budget-bounded operation — fresh projection costs same as cached projection (no LLM calls; pure file IO + content hash + YAML/markdown parse)
- **[[adr_022_tool_use_logging.md|ADR-022]]** — Tool-use logging. The projection script's invocation is logged via PostToolUse hook per ADR-022 Clause C (Bash invocations of `npm run sync:vaults` + `node ../scripts/build_vaults_data.mjs` appear in `~/.adna/measurement/measurement.sqlite` tool_calls table for cross-mission analysis)
- **Forward-reference**: future ADR-019 (M3.7 modular III for Obsidian) MAY add a §C "III-target frontmatter projection" clause — the per-vault `iii_target:` field reserved in T10 v0.2 schema projects through `build_vaults_data.mjs` once III cycles populate the dimensions (v8 P5 capstone)

## Consequences

### Positive

- **Single source-of-truth** preserved: `node.aDNA/what/inventory/inventory_vaults.yaml` remains canonical; the projection emits a derived artifact, not a parallel source
- **Batteries-included docs-site registry**: `adna-docs.vercel.app/vaults/` ships at M3.5 close with 31 cards + faceted index + Mermaid relationship graph — meets operator-stated north-star *"easy and fluid way to build/operate/utilize context graphs"*
- **Cross-vault propagation primitive**: partner-vault registry surfaces inherit the contract via federation_ref + ADR-023 citation; lattice grows registry-coverage organically without each vault inventing its own data-projection scheme
- **CI/Vercel fallback**: build never fails on cross-vault absence; deploys cleanly even when `node.aDNA/` is not sibling-checked-out
- **Idempotency guarantee**: re-running projection produces byte-identical output → git diffs are meaningful (changes signal substrate drift, not projection nondeterminism)
- **Schema-pinned output**: JSON Schema co-located with output enables consumer validation + type generation for TypeScript Astro consumers

### Negative

- **Committed generated JSON**: `aDNA.aDNA/site/src/data/vaults.json` is generated content checked into git. Slight redundancy with canonical YAML; mitigated by `source_inventory_sha:` pointer enabling drift detection. Alternative (gitignore the generated JSON + always regenerate in CI) was rejected to preserve Vercel-fallback semantics
- **Cross-vault filesystem dependency**: the projection script's path resolution (`../node.aDNA/what/inventory/inventory_vaults.yaml`) assumes the workspace layout. Mitigated by CI/Vercel fallback per Clause A.3 + by `--inventory-source <path>` slot in the script for non-default layouts
- **Schema versioning burden**: T10 v0.2 schema bumps require co-bumping `vaults.schema.json`; consumer surfaces may break on un-coordinated schema changes. Mitigated by additive-non-breaking discipline (v0.2 → v0.3 adds optional fields; never removes required fields without a multi-step deprecation cycle)

### Neutral

- **Operator runs `npm run sync:vaults` after vault inventory changes** (or `npm run build` triggers prebuild automatically). This is the canonical refresh ritual; documented in `aDNA.aDNA/site/README.md` (v8 P6 update candidate)

## Implementation

Operationalized at M3.5 S2b (this session) via the populate-apply pass landing:

- `aDNA.aDNA/scripts/build_vaults_data.mjs` (NEW; T11 Patch A literal text — prebuild projection script)
- `aDNA.aDNA/site/src/data/vaults.json` (NEW; committed projected data)
- `aDNA.aDNA/site/src/data/vaults.schema.json` (NEW; T11 Patch B JSON Schema co-located)
- `aDNA.aDNA/site/src/data/vaults_graph.mmd` (NEW; Mermaid DSL output)
- `aDNA.aDNA/site/package.json` (EDIT; T11 Patch G `prebuild` + `sync:vaults` scripts; T11 Patch H `yaml` dependency)

Cross-skill consumers:
- `skill_home_polish.md` (M3.5 D7a) reads the same substrate (inventory_vaults.yaml) for the Obsidian Bases tier; co-renders with ADR-023's docs-site projection
- `skill_vault_card_authoring.md` (M3.5 D7b) writes the per-vault frontmatter overlays that the projection script consumes; Clause B.5 source-SHA pinning is the contract between the authoring skill (writer) and the projection script (reader)

## Notes

- **Standing Order #8 — 20th tactical invocation candidate in v8**: ADR-023 ratifies the data-projection contract via the very projection script (`build_vaults_data.mjs`) that the AAR scorecard validates. Recursive self-reference: the ADR that declares the contract is operationalized by the script that obeys the contract, and ratification is gated on the script's idempotency proof (Clause A.2 verification = `git diff` clean post-second-run)
- **Cross-vault breadth at ratification**: ADR-023 names 7 cross-vault consumers in the `informed:` field (Berthier + Argus + Hermes + Spock + Mnemosyne + Hygieia + Asclepius + Daedalus + Iris + Mentor + Venus + Hestia + Franklin + Ariadne + Robert Kennedy). Largest `informed:` list of any v8 ADR — reflects the lattice-wide propagation scope of the registry surface primitive
- **Forward-only discipline preserved**: predecessor references in elevation chain (ADR-015 reserved-P4 + ADR-018 reserved + ADR-019 reserved-P3-M3.7 + ADR-020 reserved-P6 + ADR-021 gap-skip) are documented for audit; this ADR does NOT supersede any of them. Each forward-reserved slot retains its M2.4-precedent-established reservation for the named consumer mission
- **`.adna/` upstream propagation deferred to v8 P6**: ADR-023 itself + the projection-script pattern + the JSON Schema template + the 3-route Astro pattern land at `LatticeProtocol/aDNA` as part of the v8 P6 ecosystem propagation cycle. Largest single-commit-per-patch batch in v8 by quantity when v8 P6 cycle opens (M3.5 grows v8 P6 propagation queue from ~17-20 → ~22-26)
- **Dual-audience note**: a newcomer reading this ADR finds Clause A explained in plain language (*"the registry surface needs a way to read the vault inventory at build time; this contract describes how to do that without breaking the canonical source"*) + Clause B's consumer-mission obligations as concrete steps + Clause C's freshness semantics as user-facing UX context. A developer reads the projection script's path resolution + the JSON Schema + the per-clause technical contracts + the relationship blocks to ADR-014/-016/-022.

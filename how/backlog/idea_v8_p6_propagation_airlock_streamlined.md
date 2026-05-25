---
type: idea
created: 2026-05-25
updated: 2026-05-25
status: active
last_edited_by: agent_stanley
campaign: campaign_adna_serious_tool_readiness
phase_target: v8_p6_ecosystem_propagation
source_mission: mission_adna_str_p3_m36_airlock_aar_and_streamline
source_artifacts: [m36_streamline_design_spec, adr_024_airlock_streamline_contract, aar_airlock_ecosystem_m36]
related_decisions: [adr_008_airlock_template_stub, adr_024_airlock_streamline_contract]
related_specs: [m36_streamline_design_spec]
tags: [idea, upstream, v8_p6, airlock_streamline, propagation_placeholder, 45_cell_migration_matrix, 9_primitives_3_clusters, 5_consumer_wrappers, single_commit_per_patch_propagation_budget, adr_008_v0_3_re_pin_candidate, composite_placeholder_per_design_at_p3_propagation_at_p6_doctrine, design_spec_section_4_3_v8_p6_consumption, rosetta]
---

# v8 P6 Propagation: Airlock Streamlined (composite 45-cell placeholder)

> **Composite placeholder** authored at M3.6 S2 close 2026-05-25 (`session_stanley_20260525T062446Z_v8_m36_s2`). Covers all 45 migration-matrix cells from `missions/artifacts/m36_streamline_design_spec.md` §4.1 (5 wrappers × 9 primitives) per design spec §4.2. Single composite file replaces 45 individual placeholders to honor the single-commit-per-patch propagation budget — at v8 P6 cycle open, this file becomes the per-wrapper sweep worklist for the airlock-streamlined ecosystem propagation.

## Why this file is composite

Per design spec §4.2 the alternative would be 45 individual placeholder files (one per cell). At v8 P6 propagation cycle open, the propagation discipline (single-commit-per-patch) means each placeholder converts to a 1-commit landed change. 45 placeholders → 45 commits would inflate the v8 P6 batch by ~50% over the 2026-05-25 forecast (queue at M3.6 close ~27-31 doctrinal additions). Composite placeholder preserves traceability (the matrix is intact) while bounding commit count: at v8 P6 cycle, the composite drives **5 per-wrapper commit batches**, each batch a single commit covering the wrapper's opt-in primitives.

## The 9 streamline primitives (3 clusters)

From design spec §2 + AAR §3:

### Cluster 1 — Operator-friction reduction

- **P1** Advisory-Mode Lifecycle decision tree → AIRLOCK.md template (~10-20 lines documenting 3 co-federation-gate outcomes + promotion-timing decision tree). Eliminates per-wrapper re-derivation at minor-bump sweeps.
- **P7** Spec Version Notes section in AIRLOCK.md (optional 30-50-word "live vs. dormant" surface listing). Helps auditors + agents understand what's live without reading the whole spec.
- **P10** Minimal v0.3-era worked example as new §6 reference (~15-20-line frontmatter-only request showing all 3 v0.3 surfaces). Demotes 2026-05-08 VideoForge→CanvasForge memo to v0.2-baseline; clarifies version arc.

### Cluster 2 — Reply-memo discipline

- **P2** Consolidated Acceptance Checks block in reply-comment template. Single block listing all 3 preflight outcomes (secrets_present + idempotency_outcome + sigverify_outcome). Reduces reply-memo boilerplate from 3 subsections to 1 block.
- **P6** Request signature field defaults disambiguation in spec §4.3 ("minimal v0.3 federation-aware" vs "v0.2-compatible" examples).
- **P8** Single canonical rejection-reason enum with preflight-source mapping table. Consolidates 11 enums across 3 preflight gates into closed enum.

### Cluster 3 — Tooling skeletons

- **P3** Ledger polling reference skeleton (pseudocode + non-executable bash stub per Campaign C R3 documentation-grade discipline; ~20 lines amortized across all consumers).
- **P4** Canonical-JSON test fixture (1 worked example + expected byte-identical output; reserved at v0.4 per impl-doc §4.2; ships at v0.3-streamlined).
- **P9** `airlock_activation` audit event-type (lightweight JSONL entry per activation with outcome). Matches existing event-type discipline; non-blocking.

### Out of scope (LN-side)

- **P5** Membership-manifest schema consolidation → deferred to LN.aDNA-side retroactive accommodation at MD-B6 per Explore subagent Dimension 1 (not in M3.6 scope per hard constraint #11).

## Migration matrix (5 wrappers × 9 primitives = 45 cells)

Reproduced from design spec §4.1 for v8 P6 reference:

| Wrapper | P1 | P2 | P3 | P4 | P6 | P7 | P8 | P9 | P10 |
|---|---|---|---|---|---|---|---|---|---|
| `SiteForge.aDNA` | opt-in additive | opt-in additive | not-activated | doc-only | doc-only | opt-in additive | opt-in additive | opt-in additive (if activates) | doc-only |
| `VideoForge.aDNA` | opt-in additive | opt-in additive | not-activated | doc-only | doc-only | opt-in additive | opt-in additive | opt-in additive (if activates) | doc-only |
| `CanvasForge.aDNA` | opt-in additive | opt-in additive | not-activated | doc-only | doc-only | opt-in additive | opt-in additive | opt-in additive (if activates) | doc-only |
| `wga.aDNA` (Day-1 federation candidate) | opt-in additive (strong) | opt-in additive | opt-in additive (likely first ledger-observation consumer) | doc-only | doc-only | opt-in additive (strong) | opt-in additive | opt-in additive (strong) | doc-only |
| `LPWhitepaper.aDNA` | opt-in additive | opt-in additive | not-activated | doc-only | doc-only | opt-in additive | opt-in additive | opt-in additive (if activates) | doc-only |

**Cell semantics**:
- `opt-in additive` — wrapper opts into the streamlined primitive at v8 P6 propagation single-commit-per-patch (or operator-discretionary earlier)
- `not-activated` — wrapper's AIRLOCK.md remains inactive at v0.1 stub; primitive available when activation triggers
- `doc-only` — primitive lives in III canonical spec/impl-doc; consumer reads but doesn't author the patch

## v8 P6 propagation worklist (5 per-wrapper batches)

At v8 P6 cycle open, sweep each wrapper as a single commit:

### Batch 1 — SiteForge.aDNA

Per-commit primitives: P1 + P2 + P7 + P8 (+ P9 if `SiteForge.aDNA/iii/airlock/AIRLOCK.md` activates between now and P6).

Commit message template: `SiteForge.aDNA: v8 P6 propagation — airlock streamlined primitives P1+P2+P7+P8 (per aDNA.aDNA/what/decisions/adr_024_airlock_streamline_contract.md)`

### Batch 2 — VideoForge.aDNA

Same primitive set as Batch 1.

### Batch 3 — CanvasForge.aDNA

Same primitive set as Batch 1.

### Batch 4 — wga.aDNA

Day-1 federation candidate per design spec §4.1 — strongest opt-in candidate for P1 + P3 + P7 + P9 due to Day-1 federation status (per LN-coordination intersect at MD-B5 if III pursues the wga_l1 federation pilot).

Per-commit primitives: P1 + P2 + P3 + P7 + P8 + P9.

### Batch 5 — LPWhitepaper.aDNA

Same primitive set as Batch 1.

## ADR-008 template-stub v0.3 re-pin (separate v8 P6 commit)

Per design spec §4.3 — separate from per-wrapper sweep batches:

- Update ADR-008 frontmatter `superseded_by:` field (or amendment-in-place per ADR-008 amendment discipline)
- Bump `.adna/how/airlock/AIRLOCK.md` to v0.3.0 with P1 + P7 sections included
- Document v0.2 → v0.3 template-stub migration path in `.adna/how/docs/`

Commit message template: `LatticeProtocol/aDNA: v8 P6 — ADR-008 v0.2 → v0.3 template-stub re-pin (per aDNA.aDNA/what/decisions/adr_024_airlock_streamline_contract.md + aDNA.aDNA/missions/artifacts/m36_streamline_design_spec.md §4.3)`

## Coordination

At v8 P6 cycle open, fire coord memos:
- `coord_2026_XX_XX_v8_p6_airlock_streamline_consumer_sweep_<wrapper>.md` per wrapper (5 memos)
- `coord_2026_XX_XX_v8_p6_airlock_streamline_adr_008_re_pin.md` for the `.adna/` template-stub bump
- 1 omnibus coord memo to lattice-labs (Berthier) + III.aDNA (Argus) ack'ing M3.6 close + design-spec promotion

## M3.7 extension — Modular III for Obsidian propagation (30 additional migration-matrix cells; 75 total)

Extended at M3.7 S2 close 2026-05-25 (`session_stanley_20260525T163023Z_v8_m37_s2`). Covers all 30 migration-matrix cells from `missions/artifacts/m37_modular_iii_design_spec.md` §4 (5 wrappers × 6 M3.7 streamline integration primitives). Total cumulative cells now 75 (M3.6 45 + M3.7 30).

### M3.7's 6 streamline integration primitives

From M3.7 design spec §2:

- **P1 HOME.md Bases-gallery measurement contract** — 3 new gallery columns (persona_growth + research_ctx_gen + freshness) under existing card grid; gallery scope shows 3 of 5 dimensions; click-through to card detail shows all 5. Target: `node.aDNA/HOME.md` line 42 + `vault_gallery.base`.
- **P2 vault_card per-dimension scoring** — 5-dimension `iii_target` schema {score, last_measured, notes} per dimension. Target: T10 v0.2 vault_card body `## III & Context` 9th H2 section + reserved `iii_target: {}` frontmatter slot.
- **P3 III-decadal cycle orchestration skill + coord-memo protocol** — NEW skill candidate `aDNA.aDNA/how/skills/skill_iii_modular_cycle.md` (DEFERRED authoring per D-GRAD); coord-memo template at `aDNA.aDNA/how/templates/template_coord_iii_decadal_result.md` (DEFERRED).
- **P4 ledger-observation consumer contract** — primary canonical at III.aDNA per ADR-026 Clause A; fallback M3.6 P3 skeleton per Clause B; dual-mode transport per Clause C.
- **P5 wrapper airlock-activation audit aggregation** — federated reader of M3.6 P9 `.audit/airlock_activation.jsonl` per-wrapper emissions; per-wrapper opt-in via inventory_vaults.yaml `iii_aggregation_opt_in: true`.
- **P6 III result persistence** — `aDNA.aDNA/what/measurement/iii_results/<YYYY-MM>/` canonical layout + per-cycle JSONL + digest + rolling aggregations.

### M3.7 migration-matrix (5 wrappers × 6 primitives = 30 cells)

| Wrapper | P1 HOME | P2 vault_card | P3 cycle skill | P4 ledger consumer | P5 audit aggregation | P6 result persist |
|---|---|---|---|---|---|---|
| SiteForge.aDNA | additive (gallery) | additive (5-dim scoring) | consumes (skill federation) | consumes (per ADR-026) | opt-in (per ADR-024 B + privacy opt-in) | n/a (vault-local) |
| VideoForge.aDNA | additive | additive | consumes | consumes | opt-in | n/a |
| CanvasForge.aDNA | additive | additive | consumes | consumes | opt-in | n/a |
| wga.aDNA | additive | additive | consumes | consumes | opt-in | n/a |
| LPWhitepaper.aDNA | additive | additive | consumes | consumes | opt-in | n/a |

### M3.7 propagation worklist (5 per-wrapper batches at v8 P6)

At v8 P6 cycle open, each wrapper sweep batch lands a single commit covering opt-in M3.7 primitives + M3.6 primitives (combined wrapper batch covers M3.6 + M3.7 propagation queue per single-commit-per-patch budget).

### M3.7 ADR upstream-promotion candidates

- **ADR-025 III-Decadal Coordination across Vaults upstream-promotion** — propagated to `.adna/` template-level if accepted as canonical hint at v8 P6.
- **ADR-026 Ledger-Observation-as-Shared-Primitive upstream-promotion** — propagated to `.adna/` template-level if accepted as canonical hint at v8 P6.
- **III-target schema consumer-interface contract upstream-promotion** — additive hint at `.adna/how/templates/template_vault_card.md` v0.3 candidate (M3.7 P2 5-dimension shape).
- **`aDNA.aDNA/iii/` wrapper directory creation candidate** — additive `.adna/` template hint at v8 P6 (per Decision 2 deferral).
- **`skill_iii_modular_cycle.md` upstream-promotion candidate** — skill file authoring deferred per D-GRAD; if authored at v8 P5 + adopted at `.adna/` template level, becomes additive template skill addition at v8 P6.

## Cross-references

- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m36_airlock_aar_and_streamline.md|M3.6 mission spec]] (source mission)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m36_streamline_design_spec.md|M3.6 streamline design spec]] (source design spec §4)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_airlock_ecosystem_m36.md|M3.6 AAR]] (§3 Streamline Candidates + §4 Forward Doctrine)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m37_modular_iii_for_obsidian.md|M3.7 mission spec]] (M3.7 extension source)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m37_modular_iii_design_spec.md|M3.7 design spec]] (§4 migration delta)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m37_modular_iii_for_obsidian.md|M3.7 AAR]] (§6 Follow-up + §10 cross-references)
- [[../../what/decisions/adr_025_iii_decadal_coordination.md|ADR-025]] (M3.7 upstream-promotion candidate)
- [[../../what/decisions/adr_026_ledger_observation_shared_primitive.md|ADR-026]] (M3.7 upstream-promotion candidate)
- [[../../what/decisions/adr_024_airlock_streamline_contract.md|ADR-024 Airlock Streamline Contract]] (canonical doctrine; 3 clauses A/B/C)
- [[../../what/decisions/adr_008_airlock_template_stub.md|ADR-008 Airlock Template Stub]] (v0.3 re-pin candidate at v8 P6)
- [[../../who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md|cross-vault disruption assessment]] (forge-vault-side posture)

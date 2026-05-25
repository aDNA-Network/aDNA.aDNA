---
type: design_spec
artifact_id: m37_modular_iii_design_spec
mission: mission_adna_str_p3_m37_modular_iii_for_obsidian
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.7
created: 2026-05-25
updated: 2026-05-25
status: final   # finalized at M3.7 S2 close 2026-05-25 alongside ADR-025 ratification + AAR finalization + close cascade; 13th canonical instance of 6-section design-spec structure (skill_design_spec_authoring.md post-graduation reinforcement 14 of 3+; 4.7× margin)
last_edited_by: agent_stanley
spec_completeness: complete   # 6 sections (§1 problem + §2 primitives + §3 backward compat + §4 migration delta + §5 acceptance + §6 forward integration); 6 primitives in §2; 14 acceptance scorecard rows
upstream_target: ".adna/ deferred to v8 P6 propagation cycle. M3.7 reserves the consumer-interface contracts at aDNA.aDNA-resident artifacts only; cross-vault canonical work (III-side schema authoring + LN-side ledger-observation primitive + III.aDNA modular-III internals) deferred to III.aDNA Campaign E (or successor) + v8 P5 100-III-loops capstone."
upstream_state_at_authoring: "v7.0 frozen at 27e6395"
tags: [design_spec, m37, v8, p3, modular_iii_for_obsidian, concern_6_of_6, p3_capstone, six_section_structure_13th_canonical_instance, six_streamline_integration_primitives, p1_home_bases_gallery_measurement_contract, p2_vault_card_per_dimension_scoring, p3_iii_decadal_cycle_orchestration_skill_coord_memo_protocol, p4_ledger_observation_consumer_contract, p5_wrapper_airlock_activation_audit_aggregation, p6_iii_result_persistence, t9_t10_t11_t12_forward_reference_consumer, m36_section_6_four_consumer_surfaces_consumer, adr_025_iii_decadal_coordination_anchor, adr_026_ledger_observation_shared_primitive_anchor, design_at_p3_propagation_at_p6_pattern_6th_survival_test, t8_forward_reference_stub_post_graduation_11th_instance, substrate_inversion_with_adr_variant_3rd_canonical_instance_graduates, integration_shape_decisions_resolved_six_of_six, rosetta, batteries_included]
---

# M3.7 Design Spec — Modular III for Obsidian (concern #6 of 6 v8 strategic concerns; capstone of Phase 3)

> **What this is**: a **proposed-integration-shape artifact** that names **6 streamline integration primitives** mapping M3.5 T9-T12 forward-reference stubs + M3.6 streamlined airlock §6.2 four consumer surfaces to M3.7 runtime consumer surfaces on the Obsidian + Astro registry surface. M3.7 does NOT implement III measurement modules + does NOT run III cycles + does NOT touch III.aDNA modular-III internals; M3.7 specifies the **consumer-interface contracts** that III.aDNA Campaign E (or successor) + v8 P5 100-III-loops capstone will implement against.
>
> **Design-at-P3, propagation-at-P5/P6 — 6th survival test**: M3.7 designs at P3 + propagates the consumer-interface contracts to v8 P5 (III framework implementation + first 100-III-loops capstone run) + v8 P6 (`.adna/` template additions for `iii/` wrapper directory candidate + III-target schema upstream-promotion). Pattern extension: design-at-P3 + dimensions-formalize-at-P5 + III-runtime-consumes-at-modular-III. v8 P6 propagation queue grows ~27-31 → ~32-37 at M3.7 close.
>
> **6 streamline integration primitives** (target per S1 substrate report §7 scoping recommendation): P1 HOME.md Bases-gallery measurement contract + P2 vault_card per-dimension scoring + P3 III-decadal cycle orchestration skill + coord-memo protocol + P4 ledger-observation consumer contract + P5 wrapper airlock-activation audit aggregation + P6 III result persistence. Each primitive is **additive-only** (mirrors ADR-024 Clause A additive-only invariant) — preserves T9-T12 + M3.6 zero-break invariant — and opts-in via per-vault `iii_target:` frontmatter population (already reserved at T10 v0.2 vault_card schema).
>
> **6 open integration-shape decisions resolved** (per S1 substrate report §6 recommendations; operator-confirmed at S2-entry plan G2 Path A): (1) III-target schema authoring authority → III.aDNA author-responsible (M3.7 specs consumer-interface contract only). (2) `aDNA.aDNA/iii/` wrapper directory creation timing → defer to v8 P6. (3) III-decadal cycle location → distributed but coordinated (ADR-025 Clause A). (4) Ledger-observation primitive location → hybrid (III.aDNA canonical + M3.7 fallback skeleton from M3.6 P3; triggers ADR-026). (5) *Modular III for Obsidian* runtime + UI shape → CLI-first with optional UI enhancement. (6) P9 audit event authoring authority → per-wrapper with M3.7 as federated reader.
>
> **Standing Order #8 self-reference**: M3.7 design spec §2 P3 (III-decadal cycle orchestration) is itself authored under the III-decadal-cycle-coordination contract that ADR-025 ratifies — the artifact's authoring discipline operationalizes its own subject matter. T8 forward-reference-stub discipline **post-graduation 11th instance** at §6 (`## Forward integration with v8 P5 + III.aDNA Campaign E`); GRADUATED at M3.4 close at 3/3 use instances; M3.5 reinforced 4-9; M3.6 reinforces 10; M3.7 reinforces 11.

## § 1 — Problem Statement

The M3.5 T9+T10+T11+T12 forward-reference stubs (registry surface + Bases-driven HOME + vault_cards + III-target schema) shipped at M3.5 S3 close 2026-05-25T03:27Z as a **batteries-included context-graph-as-product** — 31 vault_cards populated + Astro `/vaults/` 9-patch surface live + HOME.md Bases gallery primary tier active + T10 v0.2 frontmatter reserves `iii_target: {}` field + T10 body schema includes `## III & Context` 9th H2 section. The M3.6 streamlined airlock surface shipped at M3.6 S2 close 2026-05-25T06:24Z as a **9-primitives-3-clusters federation contract** — additive-only invariant via ADR-024 Clause A + opt-in via spec version note + v8 P6 propagation channel + 4 consumer surfaces forward-pointed at §6.2 (P9 audit event-type / P1+P7 advisory + spec version notes / P3 ledger polling skeleton / P8+P2 reply-memo consolidation).

**The gap**: T9-T12 + M3.6 §6 provide the substrate but no integration shape. T12 names 5 III-ranker dimensions (`persona_growth_v0` + `research_context_generation_v0` + `cross-vault-relationship-fidelity` + `vault-card-completeness` + `registry-freshness`) but defers measurement-stub semantics to v8 P5 capstone. T10 reserves `iii_target: {}` slot but defines no projection rules. M3.6 §6.2 names 4 consumer surfaces but defers WHEN/HOW/WHY to "M3.7 design phase reads this §6 + M3.5 T9-T12 forward-stubs + decides the integration shape" (M3.6 design spec §6.3 verbatim).

**Without M3.7 design spec, the next consumer would re-discover the integration shape ad hoc**:
- v8 P5 100-III-loops capstone would re-derive how to access the registry surface
- III.aDNA Campaign E (or successor) would re-derive how to consume the streamlined airlock surface
- M3.7 modular III runtime would re-derive how `iii_target:` slot relates to T9 Bases gallery rendering
- 5 consumer wrappers would re-derive how their AIRLOCK.md `airlock_activation` audit events feed III-decadal "lattice health" dashboards

**Six open integration-shape decisions** surfaced by the S1 substrate-gathering Explore subagent dispatch (per ADR-016 Clause B Heavy-File Read convention; ~1800-word report) require resolution before the integration is operationable. Each decision has a recommendation locked at S2-entry plan ratification:

| # | Decision | Options | Resolution |
|---|----------|---------|------------|
| D1 | III-target schema authoring authority | (a) M3.7 author / (b) III.aDNA author / (c) split | **(b) III.aDNA author-responsible** — M3.7 specs consumer-interface contract only |
| D2 | `aDNA.aDNA/iii/` wrapper directory creation timing | (a) now / (b) v8 P6 | **(b) defer to v8 P6** — additive `.adna/` template hint at P6 propagation |
| D3 | III-decadal cycle location | (a) aDNA.aDNA / (b) III.aDNA / (c) distributed | **(c) distributed but coordinated** — ratified at ADR-025 Clause A |
| D4 | Ledger-observation primitive location | (a) aDNA.aDNA / (b) III.aDNA / (c) hybrid | **(c) hybrid** — III.aDNA canonical + M3.7 fallback skeleton from M3.6 P3; triggers ADR-026 |
| D5 | Modular III for Obsidian runtime + UI shape | (a) UI-first / (b) plugin-first / (c) CLI-first / (d) distributed | **(c) CLI-first with optional UI enhancement** — operator-side cycles run via skill-driven CLI; Bases gallery surfaces results read-only |
| D6 | P9 audit event authoring authority | (a) per-wrapper / (b) aggregator / (c) federated | **(a) per-wrapper with M3.7 as federated reader** — wrapper-side emits per ADR-024 Clause B; M3.7 reads federated across `.audit/` |

**Why now is the right scope for M3.7**: M3.7 is the natural Phase 3 final mission per campaign master Phase 3 table line 175 (`M3.7 | Modular III for Obsidian (concern #6 capstone) | 2 | M3.4 + M3.6 | planned`). M3.7 close = **4th of 4 P3 phase-exit bricks** (modular III operational prong) → UNBLOCKS the operator-decisioned P3 → P4 phase-exit gate per Campaign SO #19. The substrate is mature — T9-T12 + M3.6 §6 + III.aDNA modular-III framework state are all stable and read-only addressable — and the next consumers (v8 P5 + III.aDNA Campaign E + 5 wrapper consumers) all benefit from the integration shape being designed BEFORE they consume. M3.7 close is also the natural place to ratify ADR-025 (III-decadal coordination across vaults) and optional ADR-026 (ledger-observation-as-shared-primitive) per Campaign SO #14 in-phase exception clause 4th invocation — graduates substrate-inversion-with-ADR variant at 3rd canonical instance per ≥ 3 instances rubric.

## § 2 — Streamline integration primitives (6 primitives; additive-only)

Each primitive carries: a one-line summary, a target artifact, minimal viable patch text (3-15 lines or table), and an acceptance test. All 6 are additive-only relative to M3.5 T9-T12 + M3.6 streamlined airlock baseline + 5 consumer wrapper v0.3.0 pins.

### P1 — HOME.md Bases-gallery measurement contract

**Summary**: a per-dimension measurement contract that the T9 HOME.md Bases gallery surface consumes to render III-decadal target progress per vault_card in the gallery view. Contract names which T12 dimensions render at gallery scope vs card-detail scope, frequency, and rendering fallback when measurement absent.

**Target artifact**: `node.aDNA/HOME.md` line 42 Bases-gallery (operator-side; canonical surface from T9). Read-only at M3.7 per hard constraint #14 (zero `node.aDNA/` mutations); the contract lives at this design spec and v8 P6 propagation lands the apply-pass at `node.aDNA/` per design-at-P3-propagation-at-P6.

**Minimal viable patch text** (for v8 P6 application; contract surface, NOT applied at M3.7):

```yaml
# HOME.md Bases gallery view — add per-dimension columns under existing card grid
views:
  - name: gallery
    columns:
      - title              # existing
      - persona            # existing
      - role               # existing
      - last_synced        # existing
      - iii_persona_growth_v0       # NEW — render as colored dot or numeric badge if iii_target.persona_growth_v0 present
      - iii_research_ctx_gen_v0     # NEW — render as colored dot or numeric badge if iii_target.research_context_generation_v0 present
      - iii_freshness               # NEW — render as colored dot from iii_target.registry_freshness
    # Gallery scope: render 3 of 5 dimensions (persona_growth, research_ctx_gen, registry_freshness) as scannable
    # signals; click-through to card detail surfaces all 5 dimensions per P2
    # Fallback when iii_target absent or empty: render "—" placeholder; no broken-state
```

**Acceptance test**: parse-check that `node.aDNA/HOME.md` Bases gallery view at line 42 + adjacent `vault_gallery.base` definition accommodate the 3 new gallery-scope columns additive-only (test stubbed; live application deferred to v8 P6 cycle). Verify: existing 4 columns unchanged; 3 new columns render as `—` placeholder for any vault_card lacking `iii_target.{persona_growth_v0,research_context_generation_v0,registry_freshness}` keys.

**Decision anchor**: D5 (CLI-first runtime; UI surfaces results read-only).

### P2 — vault_card per-dimension scoring

**Summary**: per-dimension scoring formula contract for vault_cards consuming the T10 v0.2 reserved `iii_target: {}` slot. Names the field schema (5 dimensions × {score, last_measured, notes}) + Bases per-card scoring formula + optional CSS for color-coded badge rendering.

**Target artifact**: T10 vault_card body schema `## III & Context` 9th H2 section (already-reserved at M3.5; populated at v8 P5 capstone first run; consumed at M3.7 design-spec contract).

**Minimal viable patch text** (consumer-interface contract for III.aDNA Campaign E + v8 P5 capstone):

```yaml
# Per-vault_card iii_target field schema (additive to T10 v0.2 reserved slot)
iii_target:
  persona_growth_v0:
    score: 4.20      # 0.00-5.00 numeric; null if not yet measured
    last_measured: 2026-06-15T03:00Z   # ISO 8601; null if not yet measured
    notes: "persona blurb stable across last 3 AARs; minor research-context drift at S7"
  research_context_generation_v0:
    score: 3.75
    last_measured: 2026-06-15T03:00Z
    notes: "5 of 7 adopter scenarios produce coherent research context bundles; 2 weak"
  cross_vault_relationship_fidelity:
    score: 4.85
    last_measured: 2026-06-15T03:00Z
    notes: "Mermaid edges align with MANIFEST.md dependencies; no drift detected"
  vault_card_completeness:
    score: 4.50
    last_measured: 2026-06-15T03:00Z
    notes: "all 9 H2 sections populated; 2 wikilinks resolve to 404 placeholders"
  registry_freshness:
    score: 4.00
    last_measured: 2026-06-15T03:00Z
    notes: "vault_card last_synced within 7d of inventory_vaults.yaml canonical"
```

**Acceptance test**: parse-check that T10 v0.2 schema's `iii_target: {}` slot accommodates the 5-dimension shape additive-only (test stubbed at this design spec; live applied at v8 P5 first run). Verify schema parses with 5 dimensions present, with 0-5 dimensions present (partial measurement), with all 5 dimensions null (initial state pre-first-cycle), and with `iii_target: {}` empty dict (M3.5-reserved state). Backward compatibility with T10 v0.2 schema: M3.7 contract MUST NOT require any T10 schema change.

**Decision anchor**: D1 (III.aDNA author-responsible) — III.aDNA Campaign E owns the measurement-module implementation that populates these scores; M3.7 only specifies the consumer-interface contract for how scores project onto vault_card body + HOME.md gallery view.

### P3 — III-decadal cycle orchestration skill + coord-memo protocol

**Summary**: per-vault III-decadal cycle skill (CLI-first per D5) + cross-vault coord-memo protocol (per ADR-025 Clause C ack-debt-protocol) that coordinates III-decadal cycles across the aDNA.aDNA + III.aDNA + (future) consumer wrapper population.

**Target artifact**: NEW skill candidate `aDNA.aDNA/how/skills/skill_iii_modular_cycle.md` (skill_file authoring DEFERRED per D-GRAD=ratify-as-finding-defer-skill-authoring inherited from M3.4 + M3.5 + M3.6 precedent; backlog idea file extends with M3.7 entry at close cascade). Coord-memo template candidate `aDNA.aDNA/how/templates/template_coord_iii_decadal_result.md` (also deferred).

**Minimal viable patch text** (skill structure outline; not applied at M3.7):

```markdown
# Skill — III Modular Cycle (per-vault decadal cycle orchestration)

## When to use
- Operator wants to run an III-decadal cycle against this vault's registry surface
- Triggered every 10 cycles or end-of-phase per Campaign SO #11 (decadal AAR mandatory)
- Cross-vault coordinated per ADR-025 Clause A (distributed but coordinated)

## Steps
1. **Confirm scope** — vault_id, dimensions (default: all 5 T12 dimensions), cycle count target
2. **Read T12 dimension definitions** from III.aDNA `what/measurement/dimensions/<dim>_v0.md` (deferred; III.aDNA Campaign E author-responsible)
3. **Run measurement modules** per dimension (III.aDNA-owned; M3.7 invokes via Argus dispatch)
4. **Persist results** to vault_card `iii_target:` slot per P2 contract + cross-vault dashboard per P6
5. **Emit coord memo** per ADR-025 Clause C ack-debt-protocol — to relevant downstream consumers (vault personas with measurement obligations)
6. **Update STATE.md** with cycle result reference + ack-debt window opens

## Federation pattern
- Operator-side cycles run at aDNA.aDNA (this vault); framework-side cycles run at III.aDNA
- Coord memo at `who/coordination/coord_iii_decadal_<vault_id>_<cycle_n>.md`
- Ack-window per ADR-025 Clause C: ≤ 24h for non-urgent; ≤ 4h for load-bearing
- Dimension definitions authoring-authority = III.aDNA per ADR-025 Clause B
```

**Acceptance test** (S2 close): skill_iii_modular_cycle.md authoring deferred per D-GRAD; **backlog idea entry** in `how/backlog/idea_pattern_graduation_skill_authoring.md` extends with M3.7 entry naming this skill candidate. Verify backlog file edited at S2 close cascade.

**Decision anchor**: D3 (distributed but coordinated) — operator-side cycles run at aDNA.aDNA; framework-side cycles run at III.aDNA; coordinated via dimension definitions + coord-memo discipline per ADR-025 Clauses A + B + C.

### P4 — Ledger-observation consumer contract

**Summary**: cross-vault ledger-observation consumer contract for the III modular framework. Consumes the M3.6 streamlined airlock §6.2 P3 ledger polling skeleton (Appendix A) as a documented-grade fallback for offline/degraded operation, with III.aDNA canonical poller as primary surface per D4 hybrid recommendation.

**Target artifact**: NEW `iii_target.cross_vault_relationship_fidelity` measurement module (deferred to III.aDNA Campaign E author-responsible). M3.7 spec defines the consumer-interface contract; III.aDNA owns the implementation.

**Minimal viable patch text** (consumer-interface contract; not applied at M3.7):

```yaml
# Ledger-observation consumer contract (M3.7 spec; III.aDNA Campaign E implements)
iii_ledger_observation:
  primary_poller_location: iii.aDNA   # canonical per ADR-026 Clause A
  fallback_skeleton: aDNA.aDNA/how/skills/skill_iii_modular_cycle.md   # M3.6 P3 ledger polling skeleton (Appendix A) consumed as fallback per ADR-026 Clause B
  fallback_trigger: |
    - III.aDNA poller unreachable (network partition; III.aDNA offline)
    - III.aDNA poller advisory-mode-only (federation_mode: advisory; ledger_observation: disabled)
    - Operator-discretionary offline cycle (CLI flag override)
  federation_transport: |
    - PRIMARY: airlock cross-vault request contract (ADR-008 v0.3 re-pin once propagated at v8 P6)
    - FALLBACK: direct file-read via federation channels (per III airlock v0.3 spec §5 Federation-Substrate Awareness)
  observation_scope:
    - ~/.lattice/ledger/<node_id>/<YYYY-MM>/   # canonical observation root per ADR-013/-014/-015
    - polling_interval_seconds: 60   # per III airlock v0.3 impl-doc §5.1
    - event_taxonomy: [airlock_activation, secrets_preflight, idempotency_check, federation_sigverify]
```

**Acceptance test**: parse-check that the contract spec is self-consistent (PRIMARY references canonical ADR-026 Clause A; FALLBACK references M3.6 P3 skeleton; both transports map to existing v0.3 airlock surface). Cross-reference verification: M3.6 P3 skeleton path resolves (`m36_streamline_design_spec.md` §2.3 P3); III.aDNA spec §5 Federation-Substrate Awareness path resolves (`iii_airlock_standard_spec.md` v0.3 §5).

**Decision anchor**: D4 (hybrid) — triggers ADR-026 Ledger-Observation-as-Shared-Primitive ratification at S2 close.

### P5 — Wrapper airlock-activation audit aggregation

**Summary**: federated reader of M3.6 P9 `airlock_activation` audit event-type JSONL emissions. M3.7 modular III aggregates activation completeness across the lattice by reading `.audit/airlock_activation.jsonl` from each consumer wrapper, surfacing "which wrappers are at v0.3-baseline vs. v0.3-streamlined vs. inactive" without per-wrapper manual audit.

**Target artifact**: NEW federated-reader logic (deferred to III.aDNA Campaign E author-responsible). M3.7 spec defines: (a) the per-wrapper emission contract is already in M3.6 ADR-024 Cluster 3 P9 + activation skill Step 6.5; (b) M3.7 reader scope is "all wrappers under the operator's vault collection" (operator-discretionary scope) — per ADR-024 Clause B opt-in via spec version note.

**Minimal viable patch text** (consumer-interface contract for III.aDNA Campaign E):

```yaml
# Wrapper airlock-activation audit aggregation contract
iii_airlock_aggregation:
  reader_role: federated_reader   # M3.7 is reader; each wrapper is per-wrapper author per D6
  scope_resolution: |
    1. Read operator's vault collection from `node.aDNA/what/inventory/inventory_vaults.yaml`
    2. For each vault with `airlock_present: true` AND `iii_aggregation_opt_in: true`:
       - Read `<vault>/.audit/airlock_activation.jsonl` (last 30 days; rotation per M3.6 §2 Cluster 3 P9 default)
       - Aggregate (vault_id, activation_outcome, spec_version, last_activation_event_ts)
  output: |
    - JSONL aggregate at `aDNA.aDNA/what/measurement/aggregations/airlock_activation_lattice_health.jsonl`
    - Refreshed at each III-decadal cycle per P3 skill
    - Per-vault row in the aggregate maps to `iii_target.wrapper_airlock_activation_state` field in vault_card (P2 extension; OPTIONAL 6th dimension if operator-promoted at v8 P5)
  privacy: |
    - Per-vault opt-in (default OFF); requires per-vault `iii_aggregation_opt_in: true` in inventory_vaults.yaml
    - Cross-vault aggregation never includes secret/payload content; only event metadata per ADR-024 Cluster 3 P9 schema
```

**Acceptance test**: parse-check that the contract references M3.6 ADR-024 Cluster 3 P9 event schema (consistent with `.audit/airlock_activation.jsonl` shape) + references node.aDNA inventory_vaults.yaml (consistent with existing canonical inventory). Cross-reference verification: P9 schema at `m36_streamline_design_spec.md` §2.3 cluster 3 entry; inventory_vaults.yaml path at `node.aDNA/what/inventory/inventory_vaults.yaml`.

**Decision anchor**: D6 (per-wrapper authoring with M3.7 as federated reader) — wrapper-side emits per ADR-024 Clause B (operator-discretionary local adoption); M3.7 reads federated across `.audit/` paths with privacy-preserving opt-in.

### P6 — III result persistence

**Summary**: persistence contract for III-decadal cycle scores — where they commit, retention/rotation policy, and projection rules onto the read-only vault_card + HOME.md surfaces.

**Target artifact**: NEW canonical persistence layout (deferred to v8 P6 cycle for `.adna/` template hint propagation; M3.7 spec defines aDNA.aDNA-resident layout at `aDNA.aDNA/what/measurement/iii_results/`).

**Minimal viable patch text** (canonical layout):

```
aDNA.aDNA/what/measurement/iii_results/
├── README.md                                      # canonical readme; this design spec §6 referenced
├── <YYYY-MM>/                                     # monthly partitions
│   ├── cycle_<NNN>_<vault_id>.jsonl              # per-cycle per-vault JSONL (one row per dimension; 5 rows per cycle)
│   │   # Schema: {cycle_n, vault_id, dimension, score, last_measured, notes, measurement_module_version}
│   └── digest_<NNN>.md                           # human-readable cycle digest (≤ 200 lines; SITREP-style)
└── _aggregations/                                 # cross-cycle aggregations (rolling windows; trend lines)
    ├── persona_growth_trend.jsonl                # per-vault, last 30 cycles
    ├── research_ctx_gen_trend.jsonl              # per-vault, last 30 cycles
    └── lattice_health_<YYYY-MM>.jsonl            # per-month lattice-wide aggregate (consumes P5 output)
```

**Retention policy**:
- Per-cycle JSONL: kept indefinitely (audit trail)
- Per-cycle digest: kept indefinitely (human-readable audit trail)
- Rolling aggregations: regenerated each cycle from per-cycle JSONL (idempotent)

**Projection rules** onto vault_card + HOME.md:
- vault_card `iii_target.<dim>.score` ← latest per-cycle JSONL row matching this vault + dim (P2 contract)
- vault_card `iii_target.<dim>.last_measured` ← timestamp of latest row
- vault_card `iii_target.<dim>.notes` ← `notes` field of latest row (truncated to 100 chars if longer)
- HOME.md Bases gallery columns (P1 contract) ← computed from vault_card `iii_target.{persona_growth_v0,research_context_generation_v0,registry_freshness}.score`

**Acceptance test**: parse-check that the layout is consistent with existing `aDNA.aDNA/what/` directory structure (new subdirectory under `what/measurement/`; `_aggregations/` underscore prefix per project naming convention; YYYY-MM partition matches existing session-history convention). Verify: NO conflict with existing `~/.adna/measurement/measurement.sqlite` per hard constraint #4 (canonical SQLite stays measurement.sqlite; iii_results/ is distinct + complementary).

**Decision anchor**: D2 (defer `aDNA.aDNA/iii/` wrapper directory creation to v8 P6) + D5 (CLI-first runtime; result-persistence is operator-discretionary file-system layout).

## § 3 — Backward compatibility (zero-break invariant)

M3.7 design spec preserves the zero-break invariant against ALL upstream surfaces. Audit table maps each primitive to each upstream surface:

| Primitive | M3.5 T9 HOME | M3.5 T10 vault_card | M3.5 T11 Astro `/vaults/` | M3.5 T12 dimensions | M3.6 §6 4-surface | 5 consumer wrappers | III.aDNA v0.3.0 | Backward-compat verdict |
|---|---|---|---|---|---|---|---|---|
| P1 HOME Bases-gallery measurement contract | ADDITIVE (3 new columns; existing 4 unchanged) | n/a | n/a | CONSUMES (renders 3 of 5 at gallery scope) | n/a | n/a | n/a | ✅ ZERO-BREAK |
| P2 vault_card per-dimension scoring | n/a | ADDITIVE (populates reserved `iii_target: {}` slot; T10 schema unchanged) | n/a | CONSUMES (5 dimensions × score/last_measured/notes) | n/a | n/a | CONSUMES (consumer-interface contract) | ✅ ZERO-BREAK |
| P3 III-decadal cycle orchestration | n/a | n/a | n/a | CONSUMES (T12 dimension definitions read-only) | n/a | n/a | CONSUMES (skill file deferred to III.aDNA author authority) | ✅ ZERO-BREAK |
| P4 Ledger-observation consumer contract | n/a | n/a | n/a | n/a | CONSUMES (M3.6 P3 polling skeleton as fallback) | n/a | CONSUMES (per ADR-026 Clause A canonical poller) | ✅ ZERO-BREAK |
| P5 Wrapper airlock-activation audit aggregation | n/a | ADDITIVE (OPTIONAL 6th iii_target dim at v8 P5) | n/a | n/a | CONSUMES (M3.6 P9 audit event-type per-wrapper emission) | OPT-IN (per ADR-024 Clause B per-primitive adoption indicator + privacy opt-in) | n/a | ✅ ZERO-BREAK |
| P6 III result persistence | n/a | n/a (read-only projection) | n/a (read-only projection) | n/a | n/a | n/a | n/a (canonical layout at aDNA.aDNA-resident scope) | ✅ ZERO-BREAK |

**Verdict**: 30 cells (6 primitives × 5 surface-classes) — zero breaking-change cells. Every primitive is either (a) ADDITIVE to upstream surface schema; (b) CONSUMES upstream surface read-only; (c) n/a (no interaction). Mirrors M3.6 ADR-024 Clause A additive-only invariant doctrine.

## § 4 — Migration delta (v8 P6 propagation queue grows)

v8 P6 propagation queue projected growth at M3.7 close: **~27-31 → ~32-37**. Items added by M3.7:

1. **Design spec primitives 4 of 6** for `.adna/` upstream-promotion candidate: P3 III-decadal cycle orchestration skill (`.adna/how/skills/skill_iii_modular_cycle.md`) + P4 ledger-observation consumer contract (additive `.adna/` template doctrine hint) + P5 wrapper airlock-activation audit aggregation (additive `.adna/how/airlock/` reader-side companion hint) + P6 III result persistence (additive `.adna/what/measurement/` template subdirectory hint).
2. **ADR-025 upstream-promotion candidate** (if `.adna/` adopts the III-Decadal Coordination contract at template-level).
3. **(If ADR-026 ratifies) ADR-026 upstream-promotion candidate** (canonical-poller-location anchor for any `.adna/`-derived vault adopting III modular framework).
4. **III-target schema consumer-interface contract upstream-promotion** — P2 5-dimension shape becomes additive hint at `.adna/how/templates/template_vault_card.md` v0.3 candidate (T10 v0.2 schema stays vault-side; template-level hint surfaces at P6).
5. **`aDNA.aDNA/iii/` wrapper directory creation candidate** — additive `.adna/` template hint at P6 propagation (per D2 deferral).
6. **`skill_iii_modular_cycle.md` upstream-promotion candidate** — skill file authoring deferred per D-GRAD; if authored at v8 P5 + adopted at `.adna/` template level, becomes additive template skill addition at P6.

**Composite v8 P6 backlog placeholder**: extend existing composite placeholder `aDNA.aDNA/how/backlog/idea_v8_p6_propagation_airlock_streamlined.md` (M3.6 close cascade landed) with M3.7 row appended — covers 5 wrappers × 6 M3.7 primitives = 30 migration-matrix cells in addition to M3.6's 45 cells. Total composite placeholder now covers 75 migration-matrix cells for v8 P6 single-commit-per-patch cycle planning.

**Operator surfaces required at M3.7 implementation phase** (v8 P5 first-cycle entry; deferred):
- (a) confirm 5-dimension authoritative naming via III.aDNA Campaign E ratification
- (b) confirm `iii_target:` per-vault opt-in cascade (default ON; per-vault override via inventory_vaults.yaml `iii_target_opt_in: false`)
- (c) authorize first III-decadal cycle dispatch to III.aDNA Argus per ADR-025 Clause B authority
- (d) confirm coord-memo ack-window per ADR-025 Clause C (default ≤ 24h for non-urgent / ≤ 4h for load-bearing)
- (e) confirm wrapper P5 federated-reader privacy opt-in (default OFF; per-vault opt-in via inventory_vaults.yaml `iii_aggregation_opt_in: true`)

**Per-wrapper opt-in cascade** for `iii_target:` population:
1. Default state: `iii_target: {}` empty dict (M3.5-reserved; ZERO measurement)
2. v8 P5 first-cycle: III.aDNA dispatches measurement modules per dimension; populates `iii_target.<dim>.score` field for vaults with `iii_target_opt_in: true`
3. Per-wrapper override: vault operator may set `iii_target_opt_in: false` in vault_card frontmatter (one-line override; honored by III.aDNA dispatch)
4. Privacy boundary: vault_card `iii_target.<dim>.notes` field is operator-visible but never federated; aggregations consume `score` + `last_measured` only

## § 5 — Acceptance criteria (14 rows; cross-references mission spec acceptance criteria 1-14)

| # | Criterion | Verification | Phase |
|---|---|---|---|
| 1 | Each of 6 primitives in §2 has minimal viable patch text complete (3-15 lines or tabled) | manual review against §2 | M3.7 S2 |
| 2 | Each of 6 primitives has acceptance test (testable against current registry surface + M3.6 contracts) | per-primitive acceptance test in §2 | M3.7 S2 |
| 3 | Backward compatibility validated: 30 cells (6 primitives × 5 surfaces) — zero breaking-change cells | §3 zero-break invariant table | M3.7 S2 |
| 4 | All 6 integration-shape decisions (D1-D6) explicitly resolved with locked recommendation | §1 decisions table | M3.7 S2 |
| 5 | ADR-025 ratifies before close (Path A per G2) — `status: draft → accepted` per Campaign SO #14 in-phase exception clause 4th invocation | `grep ^status adr_025_*.md` → `accepted` | M3.7 S2 |
| 6 | (Optional Path A) ADR-026 ratifies before close (if Decision 4 hybrid path requires explicit contract) — `status: draft → accepted` | `grep ^status adr_026_*.md` → `accepted` (if fired) | M3.7 S2 |
| 7 | M3.7 close cascade matches M3.4 + M3.5 + M3.6 shape (AAR finalized + ADR ratify + mission spec close + campaign master close + STATE Op 3 + session moves + push) | manual review per close cascade checklist | M3.7 S2 |
| 8 | v8 P6 composite backlog placeholder extends with M3.7 row (5 wrappers × 6 primitives = 30 new migration-matrix cells; 75 total) | `grep M3.7 how/backlog/idea_v8_p6_propagation_airlock_streamlined.md` | M3.7 S2 |
| 9 | §6 forward-integration stub names v8 P5 (100-III-loops capstone) + III.aDNA Campaign E (or successor) — T8 forward-reference-stub discipline post-graduation 11th instance | §6 manual review | M3.7 S2 |
| 10 | Zero `III.aDNA/` touches end-to-end per hard constraint #11 | `git -C ../III.aDNA status` clean (M3.7 contribution) | M3.7 S2 |
| 11 | Zero `node.aDNA/` mutations end-to-end per hard constraint #14 addendum | `git -C ../node.aDNA status` clean (M3.7 contribution) | M3.7 S2 |
| 12 | Zero `aDNA.aDNA/site/` mutations end-to-end per hard constraint #14 addendum | `git diff origin/main -- site/` empty | M3.7 S2 |
| 13 | Zero forge-vault wrapper touches per hard constraint #12 | spot-grep airlock spec version in each consumer wrapper unchanged | M3.7 S2 |
| 14 | Zero `lattice-labs/` touches per hard constraint #13 | `git -C ../lattice-labs status` clean (M3.7 contribution) | M3.7 S2 |

## § 6 — Forward integration with v8 P5 + III.aDNA Campaign E (T8 forward-reference-stub discipline post-graduation 11th instance)

T8 forward-reference-stub discipline post-graduation 11th instance (GRADUATED at M3.4 close at 3/3 use instances; M3.5 reinforced 4-9 across 6 surfaces [T9+T10+T11+T12 design specs + 2 skills]; M3.6 reinforces 10 via design spec §6; M3.7 reinforces 11 via this section).

### 6.1 v8 P5 100-III-loops capstone as next consumer

M3.7 design spec is the **runtime contract** that v8 P5 100-III-loops capstone implements against. The 6 primitives constitute the consumer-interface surface — v8 P5 first cycle dispatches measurement modules per dimension (P2 + P3) + persists results to canonical layout (P6) + projects scores onto vault_card + HOME.md gallery (P1) + (optionally) aggregates wrapper airlock-activation events (P5).

**Specific v8 P5 consumer surfaces**:
- **P5 cycle dispatch contract**: v8 P5 cycles consume the P3 III-decadal cycle orchestration skill (deferred for authoring; backlog idea entry) + ADR-025 dimension-definition-ownership (III.aDNA Argus authority per Clause B).
- **P5 measurement module implementation**: each of 5 T12 dimensions gets a measurement module at III.aDNA `what/measurement/dimensions/<dim>_v0.md` + corresponding Python or markdown-canonical algorithm (III.aDNA Campaign E author-responsible).
- **P5 first-cycle output**: populates `iii_target:` slots across 31 vault_cards (current registry inventory; expandable as new vaults register) + emits coord memos per ADR-025 Clause C ack-debt-protocol.
- **P5 progress dashboard**: cumulative trend lines across cycles populated at `aDNA.aDNA/what/measurement/iii_results/_aggregations/` per P6 layout.

### 6.2 III.aDNA Campaign E (or successor) as canonical-side consumer

M3.7 design spec is the **consumer-interface contract** that III.aDNA Campaign E implements against from the canonical-framework side. III.aDNA owns: (a) the 5 measurement modules (P2 + P3 + P4 + P5 + P6 algorithmic implementations); (b) the canonical ledger-observation poller per ADR-026 Clause A (if ratified); (c) the dimension definitions per ADR-025 Clause B authority.

**Specific III.aDNA Campaign E consumer surfaces**:
- **Measurement module authoring**: III.aDNA Campaign E (or named successor; III.aDNA persona Argus owns final naming) opens with the M3.7 design spec as primary substrate. Each of 5 T12 dimensions becomes a measurement module spec + implementation reference.
- **Canonical ledger-observation poller**: per ADR-026 Clause A (if ratified), III.aDNA hosts the canonical poller; M3.7 fallback skeleton (M3.6 P3 + ADR-026 Clause B) consumed only when III.aDNA unreachable.
- **Federation transport contract**: per ADR-026 Clause C, III.aDNA Campaign E publishes the federation transport (airlock cross-vault request OR direct file-read via federation channels per III v0.3 spec §5).
- **Coord-memo template authoring**: III.aDNA Campaign E may author `template_coord_iii_decadal_result.md` at III.aDNA scope (per ADR-025 Clause C ack-debt-protocol); aDNA.aDNA template candidate flagged at M3.7 for v8 P6 propagation.

### 6.3 Deferred to v8 P5 + III.aDNA Campaign E per discipline

**WHEN**: v8 P5 opens at operator-decisioned P3 → P4 phase-exit gate decision (M3.7 close UNBLOCKS the gate but does not auto-fire). v8 P5 entry mission (M5.1 100-III-loops capstone or successor; per campaign master Phase 5) consumes this design spec as primary substrate. III.aDNA Campaign E timing is III.aDNA-operator-discretionary; M3.7 design spec ready for consumption at any III.aDNA Campaign E open.

**HOW**: v8 P5 opens with reading this design spec + ADR-025 (+ optional ADR-026) + M3.5 T9-T12 + M3.6 §6 + III.aDNA v0.3.0 airlock spec. III.aDNA Campaign E opens with reading this design spec + ADR-025 + ADR-026 (if ratified) + III.aDNA modular III state. Each consumer treats the 6 primitives as the runtime contract surface.

**WHY**: separation of concerns — M3.7 designs the consumer-interface integration shape; v8 P5 implements the operator-side cycles; III.aDNA Campaign E implements the canonical-framework measurement modules. Each scope is cleanly bounded; the design-at-P3-propagation-at-P5/P6 doctrine extends to consumer-design-at-modular-iii-mission with v8 P5 as next-implementation-mission.

### 6.4 Cross-mission graduation tracker for M3.7

If M3.7 design spec lands cleanly + ADR-025 ratifies + (optional) ADR-026 ratifies + AAR finalizes with pattern graduation block:
- **T8 forward-reference-stub discipline** reinforces at **11th canonical instance** (M3.4 graduation 3/3; M3.5 4-9; M3.6 reinforces 10; M3.7 reinforces 11)
- **6-section design-spec structure** reinforces at **13th canonical instance** (`skill_design_spec_authoring.md` post-graduation 14/3+; 4.7× margin)
- **Substrate-inversion-with-ADR variant** GRADUATES at **3rd canonical instance** (M3.4 1st + M3.6 2nd + M3.7 3rd; per ≥ 3 instances rubric)
- **`skill_in_phase_adr_ratification.md`** (already GRADUATED at M3.6) advances to **4th post-graduation reinforcement**
- **`skill_implementation_mission_close.md`** (already GRADUATED at M3.6) advances to **4th post-graduation reinforcement**
- **`skill_two_session_close_cascade.md`** graduation candidate ADVANCES 1 → 2 of 3 use instances (M3.6 1st + M3.7 2nd; graduates at 3rd if M3.8 or later applies)
- **`skill_substrate_gathering_subagent_dispatch.md`** graduation candidate ADVANCES 1 → 2 of 3 use instances (M3.6 1st + M3.7 2nd; graduates at 3rd if M3.8 or later applies)

New graduation candidate seed: **`skill_modular_iii_consumer_interface_design.md`** at 1 of 3 instances (M3.7 1st; cross-vault modular III consumer-interface design pattern; replicable at any aDNA-Forge-Platform.aDNA consumer that adopts III modular framework).

## Cross-references

- [[../mission_adna_str_p3_m37_modular_iii_for_obsidian.md|M3.7 mission spec]]
- [[../../../../what/decisions/adr_025_iii_decadal_coordination.md|ADR-025 III-Decadal Coordination (Path A)]]
- [[../../../../what/decisions/adr_026_ledger_observation_shared_primitive.md|ADR-026 Ledger-Observation-as-Shared-Primitive (Path A optional)]]
- [[../../../../what/decisions/adr_024_airlock_streamline_contract.md|ADR-024 Airlock Streamline Contract]] (M3.6; M3.7 P5 + P4 consume ADR-024 Cluster 2 + 3 P9 + P3 surfaces)
- [[../../../../what/decisions/adr_023_registry_data_projection_contract.md|ADR-023 Registry Data-Projection Contract]] (M3.5; M3.7 P2 + P6 consume registry data-projection surface)
- [[../../../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014 Verification Handoff Topology]] (Clause C: M3.7 declares `verification_surface: agent`)
- [[../../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016 Per-Mission Context Budget]] (Clause A two-metric + Clause B Heavy-File Read convention; M3.7 S1 substrate via Explore subagent dispatch)
- [[m36_streamline_design_spec.md|M3.6 streamline design spec]] (§6 4 consumer surfaces M3.7 operationalizes)
- [[aar_airlock_ecosystem_m36.md|M3.6 AAR]] (10-section shape M3.7 AAR mirrors)
- [[m35_obj3_t9_design_spec.md|M3.5 T9 design spec]] (HOME.md Bases gallery primary tier; P1 surface)
- [[m35_obj4_t10_design_spec.md|M3.5 T10 design spec]] (vault_card schema v0.2 reserves `iii_target: {}`; P2 surface)
- [[m35_obj5_t11_design_spec.md|M3.5 T11 design spec]] (Astro `/vaults/` registry surface; P6 projection surface)
- [[m35_obj6_t12_design_spec.md|M3.5 T12 design spec]] (5 III-ranker dimensions with v0 suffix; consumer-boundary anchor for P2 + P3)
- [[../../../../how/backlog/idea_v8_p6_propagation_airlock_streamlined.md|v8 P6 composite backlog placeholder]] (M3.6 close; extended at M3.7 close with 30 additional migration-matrix cells)
- [[../../../../how/backlog/idea_pattern_graduation_skill_authoring.md|pattern graduation skill-authoring backlog]] (extends with M3.7 entries at S2 close cascade)

## Notes

- **Substrate gathering**: M3.7 S1 entry dispatched Explore subagent per ADR-016 Clause B Heavy-File Read convention; ~1800-word synthesis report covered T9-T12 + M3.6 §6 + III.aDNA state + Obsidian consumer surfaces + cross-vault III-decadal coordination patterns + 6 open integration-shape decisions + scoping recommendations. Report cited throughout this design spec rather than re-reading source files at S2. **2nd canonical instance** of "S1-entry-Explore-subagent-substrate-isolation-pattern" after M3.6 1st; advances `skill_substrate_gathering_subagent_dispatch.md` graduation candidate 1 → 2 of 3.
- **Pattern density**: M3.7 reinforces or graduates 7 patterns at this close — T8 forward-reference-stub (11th); 6-section design-spec structure (13th); substrate-inversion-with-ADR variant (GRADUATES at 3rd); skill_in_phase_adr_ratification (4th reinforcement post-graduation); skill_implementation_mission_close (4th reinforcement post-graduation); skill_two_session_close_cascade (2nd of 3); skill_substrate_gathering_subagent_dispatch (2nd of 3).
- **Decision authority boundary**: M3.7 design spec specifies CONSUMER-interface contracts only. CANONICAL III-side surfaces (measurement module implementations + dimension definitions + canonical ledger-observation poller) stay III.aDNA author authority per ADR-025 Clauses A + B + ADR-026 Clause A (if ratified). aDNA.aDNA owns operator-side cycle orchestration + result persistence + projection rules onto vault_cards + HOME.md.
- **Backward-compat invariant**: 30 cells × zero breaking-change cells = full additive-only conformance with M3.5 T9-T12 + M3.6 streamlined airlock + 5 consumer wrappers v0.3.0 pin + III.aDNA v0.3.0 baseline. Mirrors ADR-024 Clause A additive-only invariant doctrine.
- **`v0` suffix preservation**: 5 T12 dimensions all carry `_v0` suffix (per M3.5 T12 spec). M3.7 P2 + P3 + P5 contracts honor the suffix — `iii_target.persona_growth_v0` not `persona_growth`. Allows supersession to `_v1` at v8 P5 ratification without M3.7 contract amendment.
- **Self-reference (Standing Order #8 — 23rd tactical invocation in v8)**: this design spec §2 P3 (III-decadal cycle orchestration skill + coord-memo protocol) IS itself an III-decadal-cycle-coordination artifact at the meta level — designed under the very pattern it specifies. M3.7 AAR §6 will log the 23rd tactical invocation.
- **Op 3 archive-on-close 21st canonical instance** at M3.7 S2 STATE refresh (S1 STATE refresh was 20th; this close is 21st). `skill_campaign_close_archive.md` graduation candidate at 7× margin over ≥ 3 threshold.

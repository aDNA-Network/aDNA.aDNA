---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.5
obj: 6
track: T12
finding_id: [F-S2-6-12]
status: proposed   # forward-stub only at M3.5; III framework changes RESERVED for v8 P5 100-III-loops capstone; M3.7 modular-III consumer
upstream_target: ".adna/ deferred to v8 P5 100-III-loops capstone + M3.7 modular-III for Obsidian. M3.5 reserves the `iii_target:` frontmatter slot in T10 vault_card schema + ships the forward-stub naming 5 dimensions."
upstream_state_at_authoring: "v7.0 frozen at 27e6395"
created: 2026-05-24
updated: 2026-05-24
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_5, obj_6, t12, iii_target_forward_reference, persona_growth_v0, research_context_generation_v0, cross_vault_relationship_fidelity, vault_card_completeness, registry_freshness, five_dimensions_named, v8_p5_capstone_deferred, m3_7_consumer, six_section_structure_11th_canonical_instance, t8_forward_reference_stub_post_graduation_4th_consumer, rosetta, batteries_included]
---

# T12 Design Spec — III-target forward-reference (registry-surface III-decadal target schema)

> **What this is**: a proposed-patch artifact that **names 5 III-ranker dimensions** as a forward-reference for v8 P5 100-III-loops capstone + M3.7 modular-III consumer. M3.5 does NOT run III cycles or implement measurement; M3.5 reserves the schema slot (`iii_target:` field in T10 v0.2 frontmatter) + ships the forward-stub naming + reserves measurement-stub semantics. The 5 dimensions: `persona_growth_v0`, `research_context_generation_v0`, `cross-vault-relationship-fidelity`, `vault-card-completeness`, `registry-freshness`.
>
> **Design-at-P3, propagation-at-P5/P6 — extended discipline**: T12 designs at P3 + propagates to v8 P5 (dimension formalization + first III run) + propagates to M3.7 (modular III consumer). Pattern extension: design-at-P3 + dimensions-formalize-at-P5 + III-runtime-consumes-at-M3.7.
>
> **First consumer of T8 forward-reference-stub discipline POST-GRADUATION (4th consumer at M3.5)**: T9 + T10 + T11 were 1st-3rd; T12 is 4th. Pattern reinforces at 4 of 4 across M3.5's design specs.
>
> **Standing Order #8 self-reference**: T12 names dimensions that T9 + T10 + T11 SURFACES will be measured against. The schema slot (`iii_target:`) sits in T10's frontmatter (M3.5 ratifies the slot); T12 names what populates the slot (deferred to v8 P5). T9 + T10 + T11 + T12 are mutually self-referential: T12 measures what T9 + T11 render from T10.

## 1. Finding statement (F-S2-6-12)

The III framework today has **5 personas** (Design Critic, Accessibility Auditor, Content Strategist, Information Architect, Newcomer Stress-Tester per `aDNA.aDNA/who/reviewers/`) + **6 quality dimensions** (Findability, Comprehension, Actionability, Trust, Relevance, Delight per `skill_decadal_aar.md` Step 4b). The dimensions do NOT include `persona_growth_v0` or `research_context_generation_v0` — the two operator-aligned new dimensions framed at 2026-05-24 (M3.5 plan ratification context per `please-read-the-claude-md-peppy-peacock.md`). Zero III cycles have run against vault_cards, HOME.md, OR the Astro registry surface to date.

> **F-S2-6-12 (registry surface is a natural III target but dimensions don't exist + measurement-stub semantics undefined + no III cycles run yet)**: M3.5 ships the registry surface (T9 HOME + T10 vault_cards + T11 Astro routes) — the FIRST batteries-included context-graph-as-product in v8. III cycles will run against this surface (M3.7 modular-III + v8 P5 100-III-loops capstone). But the 2 operator-aligned new dimensions are unnamed; their measurement-stub semantics are undefined; the schema slot for per-card targets doesn't exist (T10 v0.2 reserves `iii_target: {}` but it has no shape). Without T12, the registry surface launches in M3.5 with no measurement-target anchor — III cycles at M3.7/P5 would re-discover the dimensions ad hoc instead of consuming a forward-stub.
>
> — [[../mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages.md|M3.5 mission spec]] §Mission scope §5 + operator framing at 2026-05-24 plan ratification

**Why this is the right scope for T12**: T12 is the measurement-design primitive — answers *"what dimensions does future III measure on this registry surface?"* T12 is intentionally narrow: name the dimensions; define measurement-stub semantics; reserve the schema slot. T12 does NOT implement measurement (deferred to v8 P5) and does NOT run cycles (deferred to M3.7). The separation-of-concerns aligns with design-at-P3-propagation-at-P5/P6 doctrine.

## 2. Root cause

Three layered causes:

1. **III framework was scope-bounded to text-content quality at Phase 7 D9+D10**. Operation Rosetta Phase 7 D9+D10 (20 III cycles) measured text-content artifacts (concepts, tutorials, patterns) against 6 quality dimensions. The dimensions worked for text content but don't cover persona evolution OR adopter-scenario research-context generation — those are operator-framed at 2026-05-24 as registry-surface-specific.

2. **No precedent for III dimensions tied to operator-vault metadata**. `persona_growth_v0` measures persona blurb drift over time relative to recent AARs + STATE.md + headline ADRs — a meta-measurement against the vault's own provenance trail. `research_context_generation_v0` measures registry's query-to-bundle quality given adopter-authored scenarios — an interactive measurement requiring scenario authoring. Neither pattern exists in the III framework today.

3. **III cycles deferred to v8 P5 capstone per operator decision**. M3.5 is a P3 mission; running III cycles AT M3.5 would breach the mission scope discipline (M3.5 ships HOME + per-vault info pages + registry; M3.5 does NOT ship III work). The forward-stub names the dimensions without implementing them — clean separation.

T12 closes this by (a) naming 5 dimensions with `v0` suffix (allows future supersession), (b) defining measurement-stub semantics per dimension, (c) reserving `iii_target:` slot in T10 v0.2 schema, (d) forward-pointing to v8 P5 + M3.7 consumer.

## 3. Option matrix

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes / Trade-offs |
|---|---|---|---|---|---|
| 1 | **Forward-stub only at M3.5; defer dimension formalization + first III cycle to v8 P5 capstone + M3.7 consumer** (RECOMMENDED). Name 5 dimensions with `v0` suffix; define measurement-stub semantics; reserve `iii_target:` slot in T10; forward-stub `## III & Context` section in vault_card body schema; no III run at M3.5. | NEW: this design spec + slot reserved in T10 + `## III & Context` section in T10 body schema | Operator reads T12 spec for what's coming; no III invocation yet | M3.7 consumer + v8 P5 capstone consume T12 design as starting point; III framework changes happen at P5 (per ADR + III campaign sequence) | **Trade-offs**: dimensions are aspirational; may evolve at P5 ratification. `v0` suffix mitigates risk (supersession allowed). |
| 2 | **Implement now at M3.5** (rejected). Author III modules + run cycles against M3.5 outputs. | Major: III framework changes + measurement module authoring + ~20 cycle runs | Significant operator review surface for III outputs | M3.5 ships HOME + cards + registry + III measurement results | **Rejected**: III framework changes are v8 P5 scope; running cycles at M3.5 breaches mission scope discipline (Standing Order #14 forbids mid-mission scope expansion). |
| 3 | **Skip III dimension naming entirely** (rejected). M3.5 ships HOME + cards + registry; T12 deferred entirely to P5. | No T12 spec; no slot reservation | Future III work starts from scratch at P5 | M3.5 outputs have no measurement-target anchor; P5 reinvents | **Rejected**: loses operator's framing at 2026-05-24; loses forward-stub anchor for future cycles; M3.7 has no design substrate to consume. |
| 4 | **Forward-stub but name dimensions without `v0` suffix** (rejected). Same as Option 1 but treat dimensions as final names. | Same as Option 1 | Same | Same | **Rejected**: dimensions are aspirational; `v0` suffix preserves future supersession at P5 ratification. Mature names emerge from measurement experience. |

## 4. Recommendation

**Option 1 — Forward-stub only at M3.5; defer to v8 P5 + M3.7** — recommended.

### Rationale

- **Separation of concerns**: M3.5 = design + apply per-vault info pages; v8 P5 = III framework changes + 100-III-loops capstone; M3.7 = modular-III runtime consuming P5 changes. Each phase has clean scope.
- **`v0` suffix preserves supersession**: as measurement experience accumulates at P5, dimensions may evolve. `v0` allows `persona_growth_v1` to replace `v0` without schema breakage.
- **Operator-aligned framing**: the 2 new dimensions (`persona_growth_v0` + `research_context_generation_v0`) are operator-stated at 2026-05-24. T12 records the framing in the design spec; future III work consumes it.
- **3 supporting dimensions are computed (not human-judged)**: `cross-vault-relationship-fidelity` (Mermaid edges align with actual MANIFEST dependencies — computed); `vault-card-completeness` (frontmatter populated + body sections present + cross-references resolvable — computed); `registry-freshness` (sync drift between vault_card `last_synced` and canonical inventory_vaults.yaml — computed). Computed dimensions run automatically; human-judged dimensions (`persona_growth_v0` + `research_context_generation_v0`) require persona authoring or adopter-scenario authoring at P5.
- **`iii_target:` slot in T10 v0.2 schema**: per-card targets populated as III runs accumulate. Empty `{}` at M3.5; P5 capstone populates with cycle scores; M3.7 reads to surface drift in registry pages.
- **`## III & Context` body section in T10 schema**: 9th H2 section in T10 vault_card body. Lists the 5 dimensions with current-state "(deferred to v8 P5)" placeholders; future III cycles populate with measurement scores + improvement notes.

### Acceptance smoke test (M3.5 scope; not III runtime smoke)

1. **T10 schema (M3.5 Obj 4) reserves `iii_target: {}` field** — confirmed via T10 §5 Patch A frontmatter spec.
2. **T10 body schema includes `## III & Context` 9th H2 section** — confirmed via T10 §5 Patch A body spec.
3. **T9 + T10 + T11 design specs all carry `## Forward integration with M3.7` stubs** — confirmed (4 of 4 design specs have the stub).
4. **T12 spec names 5 dimensions with measurement-stub semantics** — this spec §5.
5. **Forward-pointer to v8 P5 + M3.7** — explicit in §6 + §Forward integration.

(III runtime smoke deferred to M3.7 + v8 P5.)

## 5. Literal patch text

### Patch A — 5 dimensions named (v0 suffix for future supersession)

#### Dimension 6: `persona_growth_v0`

**Semantics**: a vault's persona evolves over time. The persona blurb (T10 schema `persona_archetype` field + body §Persona section) may drift relative to recent AARs + STATE.md + headline ADRs as the vault matures. Future III pass compares persona blurb against recent close-cycle artifacts to surface drift; goal: make drift legible so operator can intentionally curate.

**Measurement stub**: compare current `persona_archetype` text + body §Persona section against the last N closed mission AARs + last N STATE.md snapshots (N = 5 or 10 per P5 ratification). Score range: [0, 5] where 0 = no drift (persona aligns with recent state), 5 = significant drift (persona misaligned with recent state). Composite score for the registry: average of per-vault scores.

**Schema slot**: `iii_target.persona_growth_v0: {last_run: <date>, score: <float>, drift_notes: <text>}`

#### Dimension 7: `research_context_generation_v0`

**Semantics**: adopters arrive at the lattice with problem statements (e.g., "I need an open-source rare-disease AI archive"; "I want to build a context graph for my company"). The registry should generate context bundles given free-text queries — pointing the adopter to the relevant vault(s) + relevant ADRs + relevant skills + relevant missions. Future III pass measures registry's query-to-bundle quality against operator-authored adopter scenarios; score becomes registry's research-readiness grade.

**Measurement stub**: P5 capstone authors a corpus of N adopter scenarios (free-text queries with expected-output bundles authored by operator/personas). For each scenario, run registry's query-to-bundle generation (mechanism TBD; may be retrieval-augmented from `vaults.json` + cross-vault ADR/AAR corpora). Score quality of generated bundle against expected output (precision/recall over bundle elements). Score range: [0, 5].

**Schema slot**: `iii_target.research_context_generation_v0: {last_run: <date>, score: <float>, scenarios_evaluated: <int>, sample_failures: [<text>]}`

#### Dimension 8: `cross-vault-relationship-fidelity`

**Semantics**: Mermaid graph edges (5-edge taxonomy per T10/T11) align with actual cross-vault dependencies. The vault_card `companion_vaults` / `federation_refs` / `umbrella_pillar` / `default_partners` / `supersedes` fields are authored declarations; III measures whether they match the lattice's actual structure (cross-check against partner MANIFESTs / workspace CLAUDE.md / federation_ref blocks). Goal: catch drift between declared edges and runtime reality.

**Measurement stub**: for each vault's declared edges, validate against partner-vault MANIFEST/CLAUDE.md/STATE.md/`federation_ref:` blocks. Score range: [0, 5] per vault (0 = full mismatch; 5 = perfect alignment). Computed (no human judgment needed).

**Schema slot**: `iii_target.cross_vault_relationship_fidelity: {last_run: <date>, score: <float>, mismatches: [<edge_description>]}`

#### Dimension 9: `vault-card-completeness`

**Semantics**: vault_card frontmatter fields are populated (no null where required), body sections are present (all 9 H2 sections per T10), cross-references are resolvable (wikilinks point to existing files). Computed.

**Measurement stub**: walk vault_cards directory; per card, compute frontmatter completeness ratio (filled fields / total fields) + body section presence ratio (present sections / 9) + wikilink resolution ratio (resolved links / total links). Composite score range: [0, 5] per card.

**Schema slot**: `iii_target.vault_card_completeness: {last_run: <date>, score: <float>, missing_fields: [<field_name>], missing_sections: [<section_name>], broken_links: [<wikilink>]}`

#### Dimension 10: `registry-freshness`

**Semantics**: vault_card `last_synced` date vs canonical `inventory_vaults.yaml` `updated` date. Drift means vault_card hasn't been refreshed against canonical changes. Computed.

**Measurement stub**: per card, compute `(inventory_updated - card.last_synced).days`. Score range: [0, 5] where 0 = fresh (< 7 days drift) and 5 = stale (> 90 days drift). Composite for registry: average + tail (90th percentile drift).

**Schema slot**: `iii_target.registry_freshness: {last_run: <date>, score: <float>, drift_days: <int>, last_synced: <date>, inventory_updated: <date>}`

### Patch B — Sample `iii_target:` frontmatter field for vault_cards (post-P5 populated state)

```yaml
iii_target:
  persona_growth_v0:
    last_run: 2026-09-15
    score: 4.2
    drift_notes: "persona blurb aligned with last 5 AARs; minor drift in §Architecture section vs M3.7 architectural shift"
  research_context_generation_v0:
    last_run: 2026-09-15
    score: 3.8
    scenarios_evaluated: 12
    sample_failures: ["adopter scenario 7: query 'rare disease AI archive' returned RareHarness not RareArchive"]
  cross_vault_relationship_fidelity:
    last_run: 2026-09-15
    score: 5.0
    mismatches: []
  vault_card_completeness:
    last_run: 2026-09-15
    score: 4.9
    missing_fields: []
    missing_sections: []
    broken_links: []
  registry_freshness:
    last_run: 2026-09-15
    score: 4.5
    drift_days: 12
    last_synced: 2026-09-03
    inventory_updated: 2026-09-15
```

(Note: above is the post-P5-populated state. At M3.5 close, `iii_target: {}` is the initial value for all elaborated + NEW cards.)

### Patch C — Sample skill body Forward-section text (for `skill_home_polish.md` + `skill_vault_card_authoring.md`)

```markdown
## Forward integration with M3.7 (III runtime)

DEFERRED STUB. M3.7 (modular III for Obsidian) runs III cycles against the artifacts this skill produces (HOME.md + vault_cards). 5 ranker dimensions per T12 spec: `persona_growth_v0`, `research_context_generation_v0`, `cross-vault-relationship-fidelity`, `vault-card-completeness`, `registry-freshness`. III modules consume `iii_target:` slot in vault_card frontmatter; populate per-cycle scores; surface drift via skill-output append. Defers WHEN+HOW+WHY to M3.7 consumer.
```

## 6. v8 P6 propagation contract

T12 designs at M3.5 P3; **III framework changes deferred to v8 P5 100-III-loops capstone**. v8 P5 owns:

- Dimension ratification (operator + Argus persona review the 5 v0 dimensions; supersession or refinement OK).
- Measurement-module authoring (Python implementations of the 5 stub semantics).
- Adopter-scenario corpus authoring (for `research_context_generation_v0`).
- First 100 III cycles against the registry surface (HOME + vault_cards + Astro routes).
- `iii_target:` populations across all vault_cards.

v8 P6 (propagation) deferred entirely for T12 — III framework + measurement-modules + scenarios live in `III.aDNA/` (Framework.aDNA vault) and propagate via `iii/` federation pattern (not via `.adna/` upstream).

M3.7 (modular-III for Obsidian) is the **runtime consumer** at P3 phase-end:
- Consumes v8 P5's measurement modules.
- Runs cycles against registry surface (HOME + vault_cards + Astro routes).
- Surfaces drift via per-card UI feedback (Bases formula derived from `iii_target` field; Obsidian-side rendering).

## Forward integration with M3.7 (recursive)

DEFERRED STUB. M3.7 IS the consumer this spec forward-references. Skip recursive elaboration; M3.7 design spec at M3.7 mission will cite T12 + name the runtime consumption contract.

## Forward integration with v8 P5 capstone (the deeper consumer)

DEFERRED STUB. v8 P5 100-III-loops capstone formalizes the 5 dimensions, authors measurement modules + scenarios, runs first 100 cycles. T12 is the design-time anchor; P5 is the implementation-time runtime. P5 design spec (when authored) will cite this T12 spec + ratify or refine the 5 dimensions + populate measurement modules.

## Cross-references

- [[../mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages.md|M3.5 mission spec]] — parent
- [[m35_obj3_t9_design_spec.md|T9 design spec]] — sibling (HOME render; future III target)
- [[m35_obj4_t10_design_spec.md|T10 design spec]] — sibling (vault_card schema; reserves `iii_target:` slot + `## III & Context` H2 section)
- [[m35_obj5_t11_design_spec.md|T11 design spec]] — sibling (Astro registry; future III target across docs-site surface)
- [[../../../../how/skills/skill_iii_cycle.md|skill_iii_cycle.md]] — 7-step III cycle (P5 measurement modules consume this)
- [[../../../../how/skills/skill_decadal_aar.md|skill_decadal_aar.md]] — 5-persona decadal AAR (Step 4b ranker; P5 personas extend if needed)
- [[../../../../who/reviewers/AGENTS.md|who/reviewers/AGENTS.md]] — 5 specialist personas
- [[../../../../how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d10.md|Phase 7 D10 AAR]] — 5.00 ranker outcome (reference quality bar; v0 dimensions target this bar)
- [[../../../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — verification surface
- [[../../../../what/decisions/adr_023_registry_data_projection_contract.md|ADR-023]] — registry data-projection contract
- `III.aDNA/` — Framework.aDNA vault (P5 III work happens in `III.aDNA/`; aDNA.aDNA consumes via `iii/` wrapper)

## Notes

- **`v0` suffix on 2 operator-aligned dimensions**: `persona_growth_v0` + `research_context_generation_v0`. Mature names emerge from P5 measurement experience.
- **3 supporting dimensions are computed (no human judgment)**: `cross-vault-relationship-fidelity` + `vault-card-completeness` + `registry-freshness`. Implementations land at P5; runtime consumer at M3.7.
- **III framework changes RESERVED for v8 P5 100-III-loops capstone** — M3.5 does NOT modify III framework. Schema slot reservation in T10 + dimension naming in T12 are the M3.5 contributions; framework changes happen at P5.
- **T8 forward-reference-stub discipline 4th consumer post-graduation** at T12. Pattern at 4 of 4 across M3.5's design specs (T9 + T10 + T11 + T12 all carry `## Forward integration with M3.7` stub). Reinforces graduation strongly.
- **6-section structure 11th canonical instance** at this T12 spec. `skill_design_spec_authoring.md` graduation advances 11 → 12 of 3+ use instances.
- **Standing Order #8 self-reference**: T12 names dimensions for measurement of T9 + T10 + T11 outputs; the very registry surface that T9 + T10 + T11 produce. T12 measures what T9 + T11 render from T10. Recursive across the 4-spec M3.5 substrate.
- **Dual-audience note**: a newcomer reads §1 finding statement (5 dimensions named; III cycles deferred to v8 P5) + §4 rationale (separation of concerns; design at P3; cycles at P5). A developer reads §5 measurement-stub semantics for each dimension + sample `iii_target:` schema slot in YAML + Patch C skill body text.

## Completion Summary

T12 design spec landed at M3.5 S2; 5 dimensions named with `v0` suffix; T10 v0.2 frontmatter reserves `iii_target: {}` slot; T10 body schema reserves `## III & Context` 9th H2 section. III framework changes + measurement modules + first 100 cycles deferred to v8 P5 100-III-loops capstone; M3.7 modular-III is the runtime consumer.

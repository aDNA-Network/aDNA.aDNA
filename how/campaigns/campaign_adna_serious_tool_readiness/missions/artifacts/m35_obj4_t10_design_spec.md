---
type: design_spec
artifact_type: design_spec
spec_class: proposed_patch
mission_id: mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.5
obj: 4
track: T10
finding_id: [F-S2-6-10]
status: proposed   # design at P3; .adna/template_vault_card.md upstream-promotion deferred to v8 P6; node.aDNA vault_cards apply lands at M3.5 Obj 9 populate-apply pass this same mission
upstream_target: ".adna/ (LatticeProtocol/aDNA@27e6395; v7.0 frozen) — `.adna/template_vault_card.md` upstream-promotion at v8 P6 single-commit-per-patch cycle. Local landing at M3.5 Obj 9: node.aDNA/what/vault_cards/*.md (~16 elaborations + ~15 NEW)."
upstream_state_at_authoring: "v7.0 frozen at 27e6395"
created: 2026-05-24
updated: 2026-05-24
last_edited_by: agent_stanley
tags: [design_spec, proposed_patch, m3_5, obj_4, t10, vault_card_schema_v0_2, twenty_two_field_frontmatter, nine_section_h2_body, nine_per_vault_class_variants, backwards_compat_clause, six_section_structure_9th_canonical_instance, t8_forward_reference_stub_post_graduation_2nd_consumer, v8_p6_propagation_queue, rosetta, standing_order_8_18th_19th_tactical_invocation_candidate, batteries_included]
---

# T10 Design Spec — Per-vault info-page schema canonical v0.2

> **What this is**: a proposed-patch artifact specifying the **canonical v0.2 schema** for per-vault info pages at `node.aDNA/what/vault_cards/the_*.aDNA.md`. Schema = 22-field typed frontmatter + 9-section H2 body + 9 per-vault-class variants + backwards-compat clause for the 16 existing v0.1 stubs. Local apply lands at M3.5 Obj 9 populate-apply pass (16 elaborations + ~15 NEW); `.adna/template_vault_card.md` upstream-promotion deferred to v8 P6.
>
> **Design-at-P3, propagation-at-P6 — 4th survival test continued**. M3.5 inherits the discipline.
>
> **First consumer of T8 forward-reference-stub discipline POST-GRADUATION (2nd consumer at M3.5)**: T9 was 1st; T10 is 2nd. Reinforces M3.4 graduation.
>
> **Standing Order #8 self-reference**: T10 schema's `iii_target:` field is a forward-reference to T12 III-dimension forward-stub; T10 + T12 mutually self-reference. Recursive: the schema reserves the slot the dimension hasn't formalized yet.

## 1. Finding statement (F-S2-6-10)

`node.aDNA/what/vault_cards/` contains 16 vault_cards created 2026-05-21 as minimal v0.1 stubs (~760-870 bytes each; 11-field frontmatter: `type / vault / persona / status / class / img_class / created / updated / last_edited_by / tags`; body: H1 + persona/class/status line + 1-paragraph blurb + `## Current Focus` + `## Key Links` with 3 wikilinks). The stubs miss 15 vaults (inventory has 31 total: ComfyForge + SpeechForge + VAASLattice + RemoteControl + TappInterface + TaskForge + ContextCommons + RareArchive + science_stanley + wga + CakeHealth + SuperLeague + LPWhitepaper + zeta + ComicForge-superseded — 15 missing or 14 if superseded skipped). Stubs lack the data the operator-stated batteries-included context-graph-as-product requires (cross-vault relationships, headline ADRs, recent missions, persona blurbs, current phase, federation references).

> **F-S2-6-10 (v0.1 stubs decoupled from canonical inventory + missing 15 vaults + missing relationship/governance fields; load-bearing for north-star UX goal)**: 11-field stub frontmatter is insufficient for Bases gallery rendering (no `display_name`, no `tagline`, no `headline_mission_state`, no `companion_vaults` for cross-vault relationship rendering), for cross-vault projection to Astro registry surface (no `vault_slug` join key, no `github_url`, no `docs_site_url`, no `internal_homepage`, no edge-type fields for graph rendering), or for III-target measurement (no `iii_target:` field, no `persona_growth_curve` slot). Stub body (5 sections) is dual-audience-thin (no Architecture section, no Cross-Vault Relationships section, no Recent Missions section, no On the Lattice newcomer-narrative section). Vault_cards as a primitive are the operational substrate for T9 (Bases gallery rendering) + T11 (Astro per-vault detail rendering) + T12 (future III dimensions) — the v0.1 schema can't support those consumers.
>
> — [[../mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages.md|M3.5 mission spec]] §Current State + Operator AskUserQuestion Q2 = Centralize at node.aDNA/what/vault_cards/

**Why this is the right scope for T10**: T10 is the data primitive — the schema that ties the rendering layer (T9 Bases + T11 Astro) to the canonical inventory layer (`inventory_vaults.yaml`). T9 + T11 both consume the schema; T12 measures over it. The schema MUST be designed before T9's Bases definition's `properties` block + T11's projection script can author meaningful output. v0.2 schema unifies the three consumer surfaces (Obsidian gallery + Astro registry + future III runtime).

## 2. Root cause

Three layered causes explain why v0.1 stubs ship without the v0.2 fields needed today:

1. **Stub-time pragmatism (2026-05-21 era)**. The 16 stubs were created during M3.1 cohort to satisfy the static HOME.md `<div class="vault-gallery">` block's wikilink targets (each card in the HTML grid links to a stub file). The minimum-viable frontmatter (11 fields) was sufficient for the link target to exist and render as a stub-page in Obsidian. The stubs were never elaborated because M3.2/M3.3/M3.4 focused on Obsidian deployment stabilization core/extension/ux+tests/verification-handoff — not on per-vault info page enrichment.

2. **No schema existed for vault_cards as a first-class artifact**. The `template_*.md` files in `aDNA.aDNA/how/templates/` and `.adna/how/templates/` don't include a `template_vault_card.md`. Stubs were copy-pasted from prior stubs; no canonical schema or per-vault-class variation existed. The 11-field frontmatter is more of a copy-paste pattern than a typed schema.

3. **No cross-vault relationship taxonomy existed for the lattice**. The 5 edge types (umbrella / companion / federation / partner / supersedes) — load-bearing for the Astro Mermaid relationship graph at T11 — were never named as a canonical taxonomy. Vault narratives in the workspace CLAUDE.md mention relationships in prose (e.g., "WilhelmAI.aDNA pairs with Mnemosyne/RareArchive + Asclepius/RareHarness"), but the prose doesn't decompose into typed edges. T10's schema names the 5 edge types as `companion_vaults` / `federation_refs` / `umbrella_pillar` / `supersedes` / `superseded_by` fields with declarative semantics.

The compounding produces today's state: 16 thin stubs + 15 missing vaults + no schema + no edge taxonomy. T10 closes this by ratifying the v0.2 schema with backwards-compat for v0.1, defining the 5-edge cross-vault relationship taxonomy, and providing 9 per-vault-class variants tailored to the class semantics (forge ships consumer-wrapper data; framework ships federation_refs; platform ships default_partners; org_vault ships umbrella_pillar; org_graph ships subject-org metadata; etc.).

## 3. Option matrix

| # | Option | Diff surface | Operator surface | Behavior change | Failure modes / Trade-offs |
|---|---|---|---|---|---|
| 1 | **Centralized v0.2 schema at `node.aDNA/what/vault_cards/`** (RECOMMENDED; operator-locked at AskUserQuestion Q2). 22-field typed frontmatter + 9-section H2 body + 9 per-vault-class variants + backwards-compat clause for v0.1 stubs. ~16 elaborations + ~15 NEW vault_cards generated via `skill_vault_card_authoring --mode author --target-vault <missing>` (M3.5 Obj 7 substrate). | ~16 stub elaborations (~800B → ~3-5KB each) + ~15 NEW files + 1 `template_vault_card.md` for v8 P6 | Operator opens elaborated cards in Obsidian; cards render rich info; cards appear in Bases gallery + Astro registry projection | Schema MAJOR version bump v0.1 → v0.2; backwards-compat is additive-only (v0.1 11 fields are subset of v0.2 22 fields); `--mode audit` reports drift without auto-mutating; manual review before bulk elaboration |
| 2 | **Distributed `.aDNA/INFO.md` per vault** (rejected; operator-locked at AskUserQuestion Q2). Each vault ships its own `INFO.md` at its root; node.aDNA aggregates via federation. | New file in each of 31 partner vaults; aggregation logic in node.aDNA | Operator can edit per-vault info in-place at each vault | **Rejected**: requires unfreezing 17 partner-vault embargo memos to author `INFO.md` in each. Violates zero-partner-vault-contact hard constraint at M3.5. Breaks node.aDNA's role as operator-side single-source-of-truth for cross-vault metadata. Could land at v8 P6 as opt-in per-vault feature if operator chooses. |
| 3 | **Dual centralized + distributed** (rejected; operator-locked at AskUserQuestion Q2). Both Option 1 and Option 2 simultaneously; node.aDNA mirrors partner-vault INFO.md. | Doubled surface | Two sources of truth for same data | **Rejected**: two-source-of-truth risk. Drift between centralized and distributed copies. Sync skill required to bridge. Operator decision-gate explicitly rules this out. |
| 4 | **Astro-only** (rejected). Skip vault_cards entirely; render registry surface only from `inventory_vaults.yaml` + workspace CLAUDE.md vault table. | No vault_cards changes; T11 projection script reads only YAML | Astro registry exists; Obsidian gallery + per-vault info pages remain stubs | **Rejected**: leaves Obsidian operator-side without rich per-vault pages. node.aDNA HOME gallery cards link to thin stub bodies (1-paragraph blurb); operator-side UX remains thin. Operator-stated batteries-included context-graph-as-product requires rich Obsidian-side experience equally with Astro-side. |
| 5 | **Hybrid: enrich frontmatter but keep body thin** (rejected; subset of Option 1). v0.2 frontmatter (22 fields) but v0.1 body (5 sections). | Frontmatter elaborations only | Cards have rich metadata; bodies stay minimal | **Rejected**: 9-section H2 body is the dual-audience-rich render; Architecture / Cross-Vault Relationships / Recent Missions / On the Lattice / III & Context are the sections that satisfy newcomer + developer audiences. Frontmatter alone serves Bases + Astro projections but not the human reader opening the card in Obsidian. |

## 4. Recommendation

**Option 1 — Centralized v0.2 schema at `node.aDNA/what/vault_cards/`** — recommended per operator AskUserQuestion Q2.

### Rationale

- **Centralization preserves zero-partner-vault-contact hard constraint.** node.aDNA is operator's own per-node operational vault (Hestia-class); centralizing the schema there means M3.5 ships zero partner outreach. 17 embargo memos preserved.
- **node.aDNA is the natural single-source-of-truth for cross-node metadata.** The operator opens node.aDNA in Obsidian for node-operational work; vault_cards are operationally adjacent (inventory + memberships + workflows). Centralization aligns with the existing Hestia discipline ("tending the hearth").
- **v0.2 schema is additive over v0.1.** Stub 11-field frontmatter is a subset of v0.2 22-field schema. v0.1 stubs parse cleanly against v0.2 (missing fields default to null/undefined). Audit-mode flags drift without auto-mutating. Elaboration is operator-supervised per-card; bulk authoring of NEW cards uses skill template logic per vault-class.
- **9 per-vault-class variants align with the lattice's typology**. Each class has different load-bearing data: forges ship consumer-wrapper info; frameworks ship federation_refs; platforms ship default_partners; org_vaults ship umbrella_pillar (for org-graph children); org_graphs ship subject-org metadata; network ships node-aggregate stats; node ships operator + machine identity; knowledge ships light schema; tooling ships light schema. T10's variants formalize this rather than letting each card invent its own emphasis.
- **9-section H2 body satisfies dual-audience (Project SO #7)**: developer-facing sections (Architecture / Cross-Vault Relationships / Headline ADRs / Recent Missions / Quick Links) + newcomer-facing sections (Persona / Current Focus / On the Lattice / III & Context). Each card legible to both audiences end-to-end.
- **5-edge cross-vault relationship taxonomy** unblocks T11's Mermaid relationship graph. The taxonomy is: `umbrella_pillar` (org_vault relationship to org_graph children; e.g., WilhelmAI → Rare-AI-Archive); `companion_vaults` (sibling persona-pair; e.g., RareArchive ↔ RareHarness; LatticeAgent ↔ LatticeTerminal ↔ RemoteControl triad); `federation_refs` (forge/framework consumer wrappers; e.g., SiteForge.aDNA → wga/siteforge); `default_partners` (platform default-partner; e.g., LatticeTerminal → LatticeAgent); `supersedes` / `superseded_by` (lifecycle; e.g., CanvasForge supersedes ComicForge).
- **`iii_target:` field reserves the v0.2 slot for T12 III dimensions**. T12 names `persona_growth_v0` + `research_context_generation_v0` + 3 supporting. The slot exists in v0.2 frontmatter; T12 implementation defers to v8 P5 100-III-loops capstone.

### Acceptance smoke test (operator-side)

1. **Operator opens elaborated `the_aDNA.aDNA.md` in Obsidian** — confirms 22-field frontmatter parses cleanly; 9 H2 sections render; persona blurb + tagline + Current Focus + Architecture + Cross-Vault Relationships + Headline ADRs + Recent Missions + Quick Links + On the Lattice + III & Context all present.
2. **Operator opens NEW `the_ComfyForge.aDNA.md` in Obsidian** — confirms NEW card has same shape (per forge per-vault-class variant); federation_refs populated with empty `[]` if no consumers yet.
3. **Operator runs `skill_vault_card_authoring --mode audit`** (M3.5 Obj 7 substrate) — confirms audit report shows zero drift between v0.2 schema and elaborated cards; stub-format cards (if any remain) flagged as drift candidates.
4. **Bases gallery rendering (T9 Tier 1) shows ~31 cards** — confirms cards filter `type == "vault_card"` matches all elaborated + NEW cards; status_emoji + persona-formatted card_label visible.
5. **Astro projection (T11) reads vault_cards frontmatter** — confirms all 22 fields available in projected `vaults.json`; per-vault detail page populates from frontmatter.

## 5. Literal patch text

### Patch A — v0.2 schema specification (canonical reference)

**Frontmatter (22 fields, typed)**:

```yaml
---
# v0.2 schema — canonical at M3.5 (was v0.1 stub-format with 11 fields at 2026-05-21)
type: vault_card
schema_version: "0.2"

# Identity (5 fields)
vault: aDNA.aDNA                # vault directory name (matches inventory_vaults.yaml `name`)
vault_slug: adna                 # cross-vault join key (lowercase; no .aDNA suffix); USED BY T11 PROJECTION SCRIPT
display_name: "aDNA"             # operator-facing name (may differ from vault for branding); USED BY T9 BASES GALLERY
full_name: "Agentic DNA (Standard)"  # long-form name
tagline: "The standard that teaches itself"  # 1-line UX tagline

# Persona (3 fields)
persona: Rosetta                 # persona name (proper noun)
persona_archetype: "Rosetta Stone — the artifact that decoded hieroglyphics by presenting the same text in three scripts"  # 1-line archetype
persona_blurb_ref: "../../../aDNA.aDNA/CLAUDE.md#identity--personality"  # wikilink to persona body

# Class (5 fields)
class: standard_dev              # canonical class (per spec_org_pattern_ecosystem.md taxonomy)
subclass: null                   # optional sub-classification
img_class: class-orgvault        # CSS class for gallery rendering (matches hestia_accent.css selectors); BACKWARDS-COMPAT WITH v0.1
status: active                   # active | genesis | pending | superseded | archived
lifecycle_stage: production      # planning | genesis | development | production | retired
current_phase: "v8 P3 — M3.5 home-polish"  # current campaign phase

# Headline state (3 fields)
headline_mission: "M3.5 Bases-driven HOME + per-vault info pages"  # 1-line current mission
headline_mission_state: in_progress  # planned | in_progress | completed
recent_closed: ["M3.4", "M3.3", "M3.2"]  # last 3-5 closed missions/campaigns

# Headline ADRs (1 field, list)
headline_adrs: ["adr_014_verification_handoff_topology", "adr_016_per_mission_context_budget", "adr_022_tool_use_logging"]  # top 3 ADRs

# Cross-Vault Relationships (5 fields — the edge taxonomy)
umbrella_pillar: null            # if class=org_vault: org_graph children list; e.g., WilhelmAI → [RareArchive, OdysseyStories, FamilyCompass, HackathonForge]
companion_vaults: ["node.aDNA"]  # sibling persona-pair; e.g., RareArchive ↔ RareHarness; this aDNA pairs with node
federation_refs: []              # forge/framework consumer wrappers; if class=forge|framework: list of partner vaults consuming via `<forge>/` wrapper
supersedes: null                 # lifecycle: vault this supersedes
superseded_by: null              # lifecycle: vault that supersedes this
default_partners: []             # platform default-partner; if class=platform: list of partner platforms (e.g., LatticeTerminal → [LatticeAgent])

# Navigation (5 fields)
github_url: "https://github.com/LatticeProtocol/aDNA.aDNA"  # canonical github URL
docs_site_url: "https://adna-docs.vercel.app"  # docs site URL (if any)
internal_homepage: "../../../aDNA.aDNA/HOME.md"  # wikilink to vault HOME (if exists)
canonical_governance: "../../../aDNA.aDNA/CLAUDE.md"  # wikilink to CLAUDE.md
manifest_path: "../../../aDNA.aDNA/MANIFEST.md"  # wikilink to MANIFEST.md
state_path: "../../../aDNA.aDNA/STATE.md"  # wikilink to STATE.md

# Sync metadata (3 fields — for drift detection per ADR-023 Clause C)
last_synced: 2026-05-24          # date last synced from canonical sources
synced_from: "inventory_vaults.yaml@vault_count_31"  # source ref
source_inventory_sha: null       # canonical inventory SHA at sync (filled by skill_vault_card_authoring)

# Asset (1 field; backwards-compat)
img_path: "who/assets/vault_cards/aDNA.aDNA.jpg"  # gallery image path (relative to node.aDNA root)

# Provenance (4 fields)
created: 2026-05-21              # original stub creation
updated: 2026-05-24              # last edit
last_edited_by: agent_stanley    # last editor
iii_target: {}                   # forward-stub for T12 III dimensions; SLOT RESERVED at v0.2; T12 names dimensions; v8 P5 capstone formalizes

# Tags (1 field; categorization)
tags: [vault_card, node_adna, standard_dev, rosetta, v0_2_schema]
---
```

**Body (9 H2 sections)**:

```markdown
# {display_name}

*{tagline}*

> **Persona** {persona} · **Class** {class} · **Status** {status} · **Phase** {current_phase}

## Persona

(2-3 sentences naming the persona archetype + relating it to the vault's role. Newcomer-facing; sets tone.)

## Current Focus

(1 paragraph; what the vault is doing right now. Pulls from {headline_mission} + {headline_mission_state}.)

## Architecture

(1-3 sentences on the vault's architectural primitive — the load-bearing structural pattern. Developer-facing.)

## Cross-Vault Relationships

(Bulleted edges; populated from {umbrella_pillar} + {companion_vaults} + {federation_refs} + {default_partners} + {supersedes} / {superseded_by} fields. Each bullet names the relationship type explicitly.)

- **Umbrella pillar**: (if class=org_vault and umbrella_pillar populated)
- **Companion vaults**: (if companion_vaults populated)
- **Federation refs**: (if federation_refs populated; class=forge|framework)
- **Default partners**: (if default_partners populated; class=platform)
- **Supersedes**: (if supersedes populated)
- **Superseded by**: (if superseded_by populated)

## Headline ADRs

(Top 3 ADRs from {headline_adrs} list; each wikilinked.)

- [[{adr_1}]] — 1-line summary
- [[{adr_2}]] — 1-line summary
- [[{adr_3}]] — 1-line summary

## Recent Missions

(Last 3-5 closed missions from {recent_closed} list; table format.)

| Mission | Closed | Outcome |
|---|---|---|
| ... | ... | ... |

## Quick Links

(Navigation from {canonical_governance} + {manifest_path} + {state_path} + {internal_homepage} + {github_url} + {docs_site_url}.)

- [CLAUDE.md]({canonical_governance}) · [MANIFEST.md]({manifest_path}) · [STATE.md]({state_path}) · [HOME.md]({internal_homepage})
- [GitHub]({github_url}) · [Docs site]({docs_site_url})

## On the Lattice

(Adopter-facing narrative: 2-4 sentences explaining what this vault offers to someone arriving at the lattice for the first time. Newcomer-facing. No jargon.)

## III & Context

(Forward-stub from {iii_target}; defers to T12 + v8 P5 100-III-loops capstone for measurement.)

- **persona_growth_v0**: (T12 dimension; v8 P5 measures)
- **research_context_generation_v0**: (T12 dimension; v8 P5 measures)
- **cross-vault-relationship-fidelity**: (T12 supporting dimension)
- **vault-card-completeness**: (T12 supporting dimension)
- **registry-freshness**: (T12 supporting dimension; computed from {last_synced} vs canonical)
```

### Patch B — Per-vault-class variants (9 variants)

Each variant adjusts the frontmatter emphasis + body section ordering to match class semantics. Variants are author-time defaults; operators may override per card.

**Variant 1: `forge`** (CanvasForge, ComfyForge, MoleculeForge, SiteForge, SpeechForge, VideoForge)
- Emphasized fields: `federation_refs` (consumer wrapper list); `default_partners: []` (forges don't have platform partners); `umbrella_pillar: null`.
- Body emphasis: §Architecture explains the artifact type the forge produces (decks/comics/molecules/sites/speeches/videos); §Cross-Vault Relationships leads with federation_refs (consumer wrappers across SS/CC/wga/RareHarness/etc.).
- Tagline pattern: "X production forge — [archetype], [discipline]"

**Variant 2: `framework`** (III, ContextCompass, VAASLattice)
- Emphasized fields: `federation_refs` (consumer wrapper list); `default_partners: []`; `umbrella_pillar: null`.
- Body emphasis: §Architecture explains the protocol/methodology/standard the framework defines; §Cross-Vault Relationships leads with federation_refs (consumer wrappers); §Headline ADRs leads with framework's own ADRs (e.g., III: ADR-005 RLHF + ADR-007 Adaptive-Improvement + ADR-008 Cross-Vault RLHF Aggregation).
- Tagline pattern: "Modular [methodology] framework — [load-bearing primitive]"

**Variant 3: `platform`** (RareHarness, LatticeTerminal, LatticeAgent, RemoteControl, TappInterface)
- Emphasized fields: `default_partners` (platform default-partners; e.g., LatticeTerminal → [LatticeAgent]); `companion_vaults` (persona-pair triad if applicable; e.g., LatticeAgent + LatticeTerminal + RemoteControl = brain+senses+body); `umbrella_pillar: null`.
- Body emphasis: §Architecture explains code-as-WHAT-object structure (single-repo vs vault+code split); §Cross-Vault Relationships leads with default_partners + companion_vaults.
- Tagline pattern: "[Runtime/substrate] for [primary use case]"

**Variant 4: `org_vault`** (ContextCommons, LatticeLabs, RareArchive, science_stanley, wga, WilhelmAI, aDNA.aDNA-as-standard_dev-subclass)
- Emphasized fields: `umbrella_pillar` (if umbrella over org_graph children; e.g., WilhelmAI → [RareArchive, OdysseyStories, FamilyCompass, HackathonForge]); `companion_vaults` (sibling org_vaults if persona-paired).
- Body emphasis: §Architecture explains Inside-Out posture (org governs itself via vault); §Cross-Vault Relationships leads with umbrella_pillar children if org_vault is umbrella.
- Tagline pattern: "[Org] — [governance posture] vault"

**Variant 5: `org_graph`** (CakeHealth, SuperLeague)
- Emphasized fields: `subject_org_name` (replaces `umbrella_pillar`); `subject_org_url` (NEW field for v0.2 org_graph variant; subject org's external URL); `companion_vaults: []` (org_graphs typically have no companion).
- Body emphasis: §Architecture explains Outside-In posture (we model an outside org); §Persona names the persona modeling the subject org (e.g., Berthier for CakeHealth).
- Tagline pattern: "Context graph of [subject org] — [load-bearing purpose]"

**Variant 6: `network`** (LatticeNetwork)
- Emphasized fields: `node_aggregate_stats` (NEW field for network variant; node count + membership manifest size); `companion_vaults: ["node.aDNA"]` (network aggregates nodes).
- Body emphasis: §Architecture explains live-aggregate posture (state/membership/ops graph); §Persona names Venus (the master/Einstein-node aggregator).
- Tagline pattern: "Alpha Lattice — master-node aggregate of [N] nodes"

**Variant 7: `node`** (node.aDNA, includes `node_operational` + `coordination` TaskForge — Berthier-skinned coordination)
- Emphasized fields: `node_name` (NEW; operator's node identity; e.g., Mac); `operator` (NEW; operator handle; e.g., stanley); `machine_class` (NEW; Apple Silicon Mac); `companion_vaults: []` (per-node vault is unique per node).
- Body emphasis: §Persona names Hestia (tending the hearth); §Architecture explains per-node operational governance (inventory + machine state + memberships); §Current Focus pulls from node-local STATE.
- Tagline pattern: "Per-node operational governance for [node_name]/[operator]"

**Variant 8: `knowledge`** (LAVentureGraph, LPWhitepaper, zeta; consolidates `knowledge_graph` + `document` + `workspace`)
- Emphasized fields: `subject_domain` (NEW; knowledge-domain narrative; e.g., "LA venture ecosystem"); `companion_vaults: []`; `federation_refs: []`.
- Body emphasis: §Architecture explains knowledge organization (graph structure / document corpus / workspace shape); thinner body — fewer cross-vault edges.
- Tagline pattern: "[Subject domain] [structure type]"

**Variant 9: `tooling`** (Spacemacs)
- Emphasized fields: `tool_type` (NEW; e.g., "agentic IDE"); `host_application` (NEW; e.g., "Spacemacs"); thinner edges.
- Body emphasis: §Architecture explains tooling integration pattern (layered/overlay/extension); thinner cross-vault.
- Tagline pattern: "[Host app] as [agentic role]"

### Patch C — Backwards-compat clause (v0.1 → v0.2 migration)

The v0.1 stub frontmatter is a strict subset of v0.2 frontmatter. The 11 v0.1 fields (`type`, `vault`, `persona`, `status`, `class`, `img_class`, `created`, `updated`, `last_edited_by`, `tags`, body H1+H2) ALL appear in v0.2 with identical semantics.

**Migration semantics**:

1. **Parse v0.1 stubs against v0.2 schema**: v0.1 cards parse cleanly. Missing v0.2 fields default to `null` / `undefined` / empty list `[]`. No errors.
2. **Audit mode** (`skill_vault_card_authoring --mode audit`): scans `node.aDNA/what/vault_cards/`; reports per-card drift; outputs table with `card` × `missing_v0_2_fields` columns; does NOT auto-mutate.
3. **Elaboration mode** (`skill_vault_card_authoring --mode author --target-vault <slug>` with operator override `--elaborate-stub`): reads existing stub frontmatter; preserves v0.1 fields verbatim; ADDS v0.2 optional fields with sensible defaults from inventory_vaults.yaml + workspace CLAUDE.md table + vault's own MANIFEST.md (if accessible from node.aDNA filesystem); operator reviews before commit.
4. **NEW-card mode** (`skill_vault_card_authoring --mode author --target-vault <slug>` for missing vaults): emits full v0.2 schema using per-vault-class template; no v0.1 backwards-compat needed.
5. **schema_version field**: v0.1 stubs have NO `schema_version:` field; v0.2 cards have `schema_version: "0.2"`. Audit-mode uses field presence to detect stub vs elaborated state.

**Validation contract**:

- v0.2 frontmatter REQUIRED fields: `type`, `vault`, `vault_slug`, `display_name`, `class`, `status`, `img_class`, `created`, `updated`, `last_edited_by`, `tags`, `schema_version`.
- v0.2 frontmatter OPTIONAL fields: all others; default to `null` / `undefined` / `[]` as appropriate.
- v0.2 body H2 sections: ALL 9 sections present (empty sections may have placeholder text "(deferred — populate at next elaboration cycle)").
- Per-vault-class variants: AT LEAST ONE class-specific section emphasis; OPTIONAL extra fields per variant (e.g., `subject_org_name` for org_graph; `node_name` for node).

### Patch D — `.adna/template_vault_card.md` (v8 P6 upstream candidate; not landed at M3.5)

```markdown
---
type: vault_card
schema_version: "0.2"

vault: {{VAULT}}
vault_slug: {{VAULT_SLUG}}
display_name: "{{DISPLAY_NAME}}"
full_name: "{{FULL_NAME}}"
tagline: "{{TAGLINE}}"

persona: {{PERSONA}}
persona_archetype: "{{PERSONA_ARCHETYPE}}"
persona_blurb_ref: "{{PERSONA_BLURB_REF}}"

class: {{CLASS}}
subclass: {{SUBCLASS}}
img_class: class-{{CLASS}}
status: {{STATUS}}
lifecycle_stage: {{LIFECYCLE_STAGE}}
current_phase: "{{CURRENT_PHASE}}"

headline_mission: "{{HEADLINE_MISSION}}"
headline_mission_state: {{HEADLINE_MISSION_STATE}}
recent_closed: [{{RECENT_CLOSED}}]

headline_adrs: [{{HEADLINE_ADRS}}]

umbrella_pillar: {{UMBRELLA_PILLAR}}
companion_vaults: [{{COMPANION_VAULTS}}]
federation_refs: [{{FEDERATION_REFS}}]
supersedes: {{SUPERSEDES}}
superseded_by: {{SUPERSEDED_BY}}
default_partners: [{{DEFAULT_PARTNERS}}]

github_url: "{{GITHUB_URL}}"
docs_site_url: "{{DOCS_SITE_URL}}"
internal_homepage: "{{INTERNAL_HOMEPAGE}}"
canonical_governance: "{{CANONICAL_GOVERNANCE}}"
manifest_path: "{{MANIFEST_PATH}}"
state_path: "{{STATE_PATH}}"

last_synced: {{DATE}}
synced_from: "inventory_vaults.yaml@{{SYNC_REF}}"
source_inventory_sha: {{SOURCE_INVENTORY_SHA}}

img_path: "who/assets/vault_cards/{{VAULT}}.jpg"

created: {{DATE}}
updated: {{DATE}}
last_edited_by: agent_init
iii_target: {}

tags: [vault_card, node_adna, {{CLASS}}, {{PERSONA_LOWER}}, v0_2_schema]
---

# {{DISPLAY_NAME}}

*{{TAGLINE}}*

> **Persona** {{PERSONA}} · **Class** {{CLASS}} · **Status** {{STATUS}} · **Phase** {{CURRENT_PHASE}}

## Persona

{{PERSONA_BLURB}}

## Current Focus

{{HEADLINE_MISSION}} — {{HEADLINE_MISSION_STATE}}.

## Architecture

{{ARCHITECTURE_BLURB}}

## Cross-Vault Relationships

{{CROSS_VAULT_RELATIONSHIPS_BULLETS}}

## Headline ADRs

{{HEADLINE_ADR_BULLETS}}

## Recent Missions

{{RECENT_MISSIONS_TABLE}}

## Quick Links

- [CLAUDE.md]({{CANONICAL_GOVERNANCE}}) · [MANIFEST.md]({{MANIFEST_PATH}}) · [STATE.md]({{STATE_PATH}}) · [HOME.md]({{INTERNAL_HOMEPAGE}})
- [GitHub]({{GITHUB_URL}}) · [Docs site]({{DOCS_SITE_URL}})

## On the Lattice

{{ADOPTER_NARRATIVE}}

## III & Context

(Forward-stub from T12; defers to v8 P5 100-III-loops capstone for measurement.)

- **persona_growth_v0**: (T12 dimension; v8 P5 measures)
- **research_context_generation_v0**: (T12 dimension; v8 P5 measures)
- **cross-vault-relationship-fidelity**: (T12 supporting dimension)
- **vault-card-completeness**: (T12 supporting dimension)
- **registry-freshness**: (T12 supporting dimension; computed from last_synced vs canonical)
```

## 6. v8 P6 propagation contract

| Stage | Action | Authority | Verification |
|---|---|---|---|
| **P6 entry gate** | Operator ratifies P5 → P6 phase transition. v8 P6 queue includes T10's `.adna/template_vault_card.md` candidate alongside T9's HOME template + Bases definition + T11's data-projection contract + T7+T8 skills + ADR-014/-023. Queue ~17-20 → ~22-26 per mission spec line 434. | Operator + Rosetta | Plan ratification at P5 → P6 entry session |
| **P6 commit decision** | Bundle vs. separate: **Option (b) per-component** preserves vault_card template as orthogonal primitive from HOME template + Bases definition. | Operator at P6 entry | Commit messages cite T10 + F-S2-6-10 |
| **P6 commit** | `cp aDNA.aDNA/what/templates/template_vault_card.md .adna/`. Commit message: `v7.x: add template_vault_card.md (v0.2 schema: 22-field frontmatter + 9-section body + 9 per-vault-class variants + backwards-compat; T10 per M3.5; F-S2-6-10; Nth instance of single-commit additive-upstream pattern)`. | Operator pushes; Rosetta drafts | `git -C .adna log -1 --oneline` shows new commit |
| **P6 post-commit smoke** | Fresh fork via updated `skill_project_fork.md`; confirm new node-vault inherits `template_vault_card.md`; operator runs `skill_vault_card_authoring --mode author --target-vault <self>` against the new node's first vault_card; confirms 22-field frontmatter + 9-section body populated per per-vault-class template. | Rosetta or dispatched validator | PASS on operator-side smoke |
| **P6 ecosystem propagation** | Notify 19+ partner vaults that v7.x ships vault_card schema v0.2 upgrade; partner vaults that maintain their own per-vault registries (LatticeNetwork.aDNA Venus / LatticeLabs.aDNA Berthier / SiteForge.aDNA / etc.) adopt the schema. **Cross-vault propagation**: SiteForge.aDNA partner-site templates absorb schema for per-vault registry surfaces; LatticeNetwork.aDNA aggregate registry for nodes adopts schema for transmitted-node summary cards. | Berthier coord memos | Coord memos in `who/coordination/archive/` with `status: acknowledged` |

**P6 verification expectation**: zero regressions against v7.0 (existing vault_cards stay v0.1 OR opt-in elaborate to v0.2); fresh forks gain v0.2 template; F-S2-6-10 closed at the template layer.

## Forward integration with M3.7

DEFERRED STUB — operationalizes at M3.7.

M3.7 (modular III for Obsidian) runs III cycles against per-vault info pages. T12 names 5 ranker dimensions; M3.7 implements III modules that measure each card against the dimensions: `vault-card-completeness` (frontmatter fields populated + body sections present + cross-references resolvable; computed); `cross-vault-relationship-fidelity` (Mermaid edges align with actual dependencies; computed via cross-check against partner vault MANIFESTs); `registry-freshness` (`last_synced` vs canonical drift; computed); `persona_growth_v0` (T12 dimension; future ranker measures); `research_context_generation_v0` (T12 dimension; future ranker measures via adopter-scenario evaluation). M3.7 design spec cites T10 schema as the substrate. III cycles populate `iii_target` frontmatter slot with per-cycle scores. Defers WHEN+HOW+WHY to M3.7.

## Cross-references

- [[../mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages.md|M3.5 mission spec]] — parent
- [[m35_obj3_t9_design_spec.md|T9 design spec]] — sibling (rendering primitive consumes T10 schema)
- [[m35_obj5_t11_design_spec.md|T11 design spec]] — sibling (Astro projection consumes T10 schema)
- [[m35_obj6_t12_design_spec.md|T12 design spec]] — sibling (`iii_target:` field reserves T12 slot)
- [[m34_obj3_t7_design_spec.md|M3.4 T7 design spec]] — 6-section structure template (9th canonical instance at this T10 spec)
- [[../../../../what/specs/spec_org_pattern_ecosystem.md|spec_org_pattern_ecosystem.md]] — Org-Vault / Org-Graph / Network taxonomy reference
- [[../../../../what/specs/spec_forge_ecosystem.md|spec_forge_ecosystem.md]] — Forge consumer-wrapper pattern
- [[../../../../what/specs/spec_framework_ecosystem.md|spec_framework_ecosystem.md]] — Framework federation_refs pattern
- [[../../../../what/specs/spec_platform_ecosystem.md|spec_platform_ecosystem.md]] — Platform default_partners pattern
- [[../../../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — verification handoff
- [[../../../../what/decisions/adr_023_registry_data_projection_contract.md|ADR-023]] — sibling (T11 projection script consumes T10 vault_card frontmatter)
- `/Users/stanley/aDNA/node.aDNA/what/vault_cards/` — live mutation target directory
- `/Users/stanley/aDNA/node.aDNA/what/inventory/inventory_vaults.yaml` — canonical source

## Notes

- **Schema v0.2 = MAJOR version bump over v0.1 stub-format** (11 → 22 fields; 5 → 9 body sections). Additive non-breaking at v0.1 → v0.2 boundary; cards declaring `schema_version: "0.2"` are first-class; stubs without the field parse cleanly with missing fields defaulting to null.
- **5-edge cross-vault relationship taxonomy = load-bearing for T11 Mermaid graph**. The 5 edge types (umbrella / companion / federation / partner / supersedes) decompose cross-vault relationships into typed declarations. T11 graph.astro consumes the edges; 5 distinct line styles per edge type per IA Plan agent design.
- **9 per-vault-class variants consolidate inventory's 15+ raw classes**. The lattice has multiple class names but the per-vault-card render variants consolidate to 9 dominant patterns. `framework_candidate` treated as `framework` subclass; `standard_dev` (aDNA.aDNA) treated as `org_vault` subclass with full-fidelity render.
- **`iii_target:` frontmatter slot reserves T12 future implementation**. T12 names dimensions; M3.5 reserves the slot; v8 P5 100-III-loops capstone populates with measurements.
- **T8 forward-reference-stub discipline 2nd consumer post-graduation** at T10 (T9 was 1st). Reinforces graduation.
- **6-section structure 9th canonical instance** at this T10 spec. `skill_design_spec_authoring.md` graduation advances 9 → 10 of 3+ use instances.
- **Standing Order #8 self-reference**: T10 schema's `iii_target:` field is a slot for T12's dimensions; T12 ratifies the dimensions; T10 + T12 mutually self-reference. Schema reserves the slot the dimension hasn't formalized.
- **Dual-audience note**: a newcomer reads §1 finding statement (stub cards thin; missing vaults; needs schema) + §4 rationale (one schema; nine variants; backwards-compat) + §5 Patch C migration semantics. A developer reads §5 Patch A 22-field schema + Patch B per-variant emphasis + Patch D template body for v8 P6 + §6 propagation contract.

## Completion Summary

T10 design spec landed at M3.5 S2; vault_card schema v0.2 canonical; ~16 elaborations + ~15 NEW vault_cards land at M3.5 Obj 9 populate-apply pass via `skill_vault_card_authoring.md` (M3.5 Obj 7 substrate). `.adna/template_vault_card.md` deferred to v8 P6.

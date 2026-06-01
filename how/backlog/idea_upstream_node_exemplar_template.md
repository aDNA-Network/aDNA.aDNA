---
type: backlog_idea
status: proposed
priority: medium
created: 2026-06-01
last_edited_by: agent_hestia
tags: [backlog, idea, upstream, template, exemplar, node_adna, home, hestia_origin, m25_origin]
---

# Idea — Upstream the Node Exemplar HOME Template (`template_node_adna_exemplar/`)

## Problem / Opportunity

The base `.adna/HOME.md` (extracted from this node at M-LWX-02, 2026-05-12) gives a fresh node a plain,
inventory-driven HOME — correct, but spartan. Since then the reference node (`Home.aDNA`, Hestia) accreted
a **premium, themed, generator-driven HOME** across compliance-campaign missions M15–M24: a persona banner +
greeting, a Dataview-JS §Gallery of per-vault curation cards, an inline §Topology canvas, and a persona-
accented CSS layer. Every new node currently reconstructs (or does without) that shape by hand.

M25 packaged it as a reusable bundle at
`Home.aDNA/how/templates/template_node_adna_exemplar/` — generator-driven (ships the
`build_topology_canvas.py` + `build_curation_cards.py` generators + seed YAMLs + regen docs, not frozen
artifacts), persona-portable, and consistent with the base `.adna/HOME.md` var vocabulary.

## Proposal

Adopt `template_node_adna_exemplar/` into `.adna/` (e.g. `.adna/how/templates/`) as a v8+ standard offering,
so every `Home.aDNA`-class fork can opt into the exemplar shape. The bundle is self-documenting
(`README.md` + `SUBSTITUTIONS.md`) and already reuses the canonical base vars (`{{node_hostname}}`,
`{{operator}}`, `{{persona}}`, `{{persona_lower}}`, `{{vaults_table}}`, …); it adds only a small theming
var set (`{{accent_*_hex}}`, `{{banner_image}}`, `{{persona_greeting}}`).

## Scope / considerations

- **Persona-portable**: Hestia is the reference, not a requirement; the bundle carries a per-persona accent
  default lookup. Keep it persona-neutral upstream.
- **Dependency disclosure**: the §Topology generator consumes CanvasForge `canvas_core` via `$CANVASFORGE_CODE`
  (sibling-path default). Upstream must decide whether the standard ships with a CanvasForge dependency or
  treats §Topology as optional (degrade to §Gallery-only when CanvasForge is absent).
- **Plugins not bundled**: Dataview (§Gallery) + Advanced Canvas (§Topology) install via the community store;
  document as prerequisites.
- **Pairs with** `idea_upstream_project_fork_exemplar_invocation.md` (the skill-wiring half).

## References

- Bundle: `Home.aDNA/how/templates/template_node_adna_exemplar/` (`README.md`, `SUBSTITUTIONS.md`).
- Mission: `Home.aDNA/how/campaigns/campaign_lattice_compliance_upgrade/missions/mission_lattice_comp_m25_template_node_adna_exemplar.md`.
- Base template extracted at M-LWX-02; this is its themed successor.
- Related: `idea_upstream_latticehome_rename_pattern.md`, `idea_upstream_node_vault_bare_role_rename.md`.

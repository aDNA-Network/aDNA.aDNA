---
type: backlog_idea
status: accepted
priority: medium
created: 2026-06-01
updated: 2026-06-18
last_edited_by: agent_rosetta
tags: [backlog, idea, upstream, template, exemplar, node_adna, home, hestia_origin, m25_origin, prytaneion_m3_4]
---

# Idea — Upstream the Node Exemplar HOME Template (`template_node_adna_exemplar/`)

> **Ratified 2026-06-18** — accepted at Operation Hearthstone P0 (Operator Decision 1); the inventory+identity promotion is decided in [[adr_035_inventory_identity_base_entity_types]]; lands in `.adna/` at Hearthstone P3/P5 via skill_template_release.

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

## M3.4 update (2026-06-05, Operation Prytaneion P3)

The bundle's `HOME.md` shape was **elevated and round-tripped** since this idea was filed (M25). What
upstream now inherits is the Prytaneion-grade home, not the M15–M24 one:

- **Landing layer** — a node-agnostic landing strip (aDNA-network intro + `adna.network` **Meta Bind**
  CTA + marketplace link) the base/old-exemplar lacked.
- **Dashboard band** — one glanceable 5-second status line (one dominant number) replacing the
  Node-Status table + timeline HUD. Adds two derived band vars: **`{{healthy_count}}` + `{{blocked_count}}`**
  (inventory-sourced, like `{{drift_count}}`) — fold these into the interview's count derivation.
- **§Gallery engine = Bases** (not DataviewJS) — ships a node-agnostic `what/inventory/curation_gallery.base`
  cards view; **no JavaScript** (DataviewJS retired node-wide at M3.2 for security posture). The dormant
  `.curation-card` DataviewJS CSS remains for nodes that opt back in.
- **§Topology** de-weighted to a link (no inline canvas embed).
- **Progressive-disclosure callout folds** carry all audit-grade detail (resting view ≈1.5 viewports).

**New plugin prerequisite:** **Meta Bind** (the landing CTA), alongside Bases (core) + Advanced Canvas.

**Load-bearing wiring requirement (the interview half):** the all-vaults / non-vault-project indices live
inside `> [!abstract]-` / `> [!note]-` folds, so `{{vaults_table}}` / `{{named_projects_table}}` must
render as **`>`-prefixed callout-body bullets** (not `.vault-grid` divs / a markdown table — either breaks
the callout open). The bundle pins this "callout-fold profile" in `HOME.md.template` + `SUBSTITUTIONS.md`,
but `skill_node_bootstrap_interview.md` Step 9 (do-not-edit `.adna/`) has no `>`-prefix logic. Upstream
adoption must teach the renderer this profile — track jointly with the skill-wiring sibling
`idea_upstream_project_fork_exemplar_invocation.md`.

A reproducible, dependency-free smoke test now ships in-bundle (`smoke_render.py`; PASS 2026-06-05).


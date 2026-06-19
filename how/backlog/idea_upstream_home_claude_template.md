---
type: backlog_idea
status: accepted
priority: high
created: 2026-06-18
updated: 2026-06-18
last_edited_by: agent_rosetta
filed_from: Home.aDNA planning session (Operation Hearthstone — plan does-the-home-dir-adaptive-fern)
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA
github_issue: TBD
tags: [backlog, upstream, home_adna, hestia, claude_md, governance_template, node_bootstrap, operation_hearthstone, v8]
---

# Idea: Ship a `template_home_claude.md` so a fresh node's `Home.aDNA/` gets the Hestia governance CLAUDE.md (not generic Berthier)

> **Ratified 2026-06-18** — accepted at Operation Hearthstone P0 (Operator Decision 1); the inventory+identity promotion is decided in [[adr_035_inventory_identity_base_entity_types]]; lands in `.adna/` at Hearthstone P2/P5 via skill_template_release.

## Problem

When a fresh node bootstraps `Home.aDNA/` (root-CLAUDE Step 0.3 → `skill_project_fork` with `project_name = Home`), the fork copies the base `.adna/` tree **including `.adna/CLAUDE.md`, which is the generic *Berthier* standalone-workspace persona**. `skill_node_bootstrap_interview.md`'s "Produce" step then writes only a **1-sentence persona-context paragraph** into that CLAUDE.md. There is no `template_home_claude.md` in the standard.

Result: a fresh node's `Home.aDNA/` runs under a Berthier governance file mismatched to the per-node operational scope — missing the Hestia hearth identity, the node-operational agent protocol (startup checklist, node-skills table, escalation cascade, first/last STATE discipline), and the Home-specific standing orders (local-by-default, archive-never-delete, credential-broker pointer). Every operator either hand-authors the Hestia CLAUDE.md (drift across nodes) or silently runs the wrong governance file.

## Evidence

- `.adna/CLAUDE.md` frontmatter = `Berthier`, v7.2 — the standalone/router persona, not a node-operational persona.
- `.adna/how/templates/` contains `template_campaign_claude.md` + `template_lattice_home_render.md` but **no `template_home_claude.md`** (verified 2026-06-18).
- The only canonical Hestia governance file is `Home.aDNA/CLAUDE.md` on this reference node. Structural review: ~50% is reusable boilerplate (persona + safety rules + standing orders + agent protocol + working-with-content), ~50% node-specific (hostname `Dyrnwyn`, operator `stanley`, live campaign refs, version pins, fleet-specific pairings table).
- `skill_node_bootstrap_interview.md` "Produce" → `CLAUDE.md`: "1-sentence persona-context paragraph" only.

## Proposal

1. **Author `template_home_claude.md`** (`.adna/how/templates/`) — a parametrized Hestia/Home governance template lifted + genericized from `Home.aDNA/CLAUDE.md`. Vars: `{{persona}}`, `{{node_hostname}}`, `{{operator}}`, `{{workspace_root}}` (and the persona greeting / pairings as optional enrich-at-interview blocks). **Persona-portable** — Home-class nodes default to Hestia, but the template parametrizes the persona so a node can choose another hearth-keeper.
2. **Wire `skill_project_fork.md`** so a Home-class fork (`project_name = Home` / `--home`) installs `template_home_claude.md` as the new vault's `CLAUDE.md` **instead of inheriting the generic `.adna/CLAUDE.md`**.
3. **Interview enrich (optional)** — `skill_node_bootstrap_interview.md` fills the persona-context line + node-local cross-vault pairings as a post-fork step (replacing the lone 1-sentence write).

## Dependencies / relationships

- **Pairs with** [[idea_upstream_project_fork_exemplar_invocation]] (fork/interview wiring — same skills touched; co-land the Home-class branch).
- **Pairs with** [[idea_upstream_inventory_entity_type]] + [[idea_upstream_identity_entity_type]] (the Hestia CLAUDE.md references `what/inventory/` + `who/identity/`; those must be canonical for the template's Project Map to resolve).
- **Distinct from** [[idea_upstream_lattice_home_pattern]] — that promotes the *terminal cold-start ASCII splash* (`bin/lattice cmd_home`); this is the *governance/persona `CLAUDE.md`*. Different surface, different concern.

## Risks

1. **Persona hard-coding** — must parametrize `{{persona}}`, not bake Hestia, or non-Hestia nodes inherit a mislabeled file. Mitigation: persona-accent/greeting lookup mirrors the exemplar bundle's `SUBSTITUTIONS.md` §2.
2. **Parity drift** — the template can fall behind the evolving `Home.aDNA/CLAUDE.md` reference. Mitigation: adopt a skeleton-parity invariant + check, the same discipline `template_node_adna_exemplar/SUBSTITUTIONS.md` uses for `HOME.md`.
3. **Token budget** — `Home.aDNA/CLAUDE.md` is large; the template should ship the genericized core and let node-specifics accrete, not freeze a fat fleet snapshot (cf. Standing Rule 7 router-row discipline).

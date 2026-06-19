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
tags: [backlog, upstream, workspace_router, home_adna, node_vault_detection, cold_start, node_bootstrap, operation_hearthstone, v8]
---

# Idea: Add a "Node Vault Detection / offer to bootstrap Home" step to the workspace-router template

> **Ratified 2026-06-18** — accepted at Operation Hearthstone P0 (Operator Decision 1); the inventory+identity promotion is decided in [[adr_035_inventory_identity_base_entity_types]]; lands in `.adna/` at Hearthstone P2/P5 via skill_template_release.

## Problem

A fresh `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude` lands the operator at the workspace router (root `CLAUDE.md`, sourced from `workspace_claude_md.template`). That template's **Step 0 is "Legacy workspace-root detection"** — it does **not** detect the absence of `Home.aDNA/` and does **not** offer to bootstrap it.

The "Node Vault Detection → offer to bootstrap Home" flow (check exists → load STATE → offer bootstrap → fresh-install skip) lives **only as a local customization in this reference node's root `CLAUDE.md`** (Step 0.1–0.4). The base `.adna/CLAUDE.md` carries only the *cross-routing hook* ("if `Home.aDNA/` exists, route to Hestia"), which **assumes Home already exists**.

Net effect: out of the box, the base system never *offers* to create `Home.aDNA/`. An operator must already know the node vault exists and fork it by hand. The per-node hearth — inventory, machine state, lattice memberships, credential broker — is invisible on a fresh install.

## Evidence

- `aDNA.aDNA/what/docs/templates/workspace_claude_md.template` Step 0 = "Legacy workspace-root detection (optional, once)" (verified 2026-06-18). No Home detection/offer.
- This node's `~/aDNA/CLAUDE.md` Step 0 ("Node Vault Detection": 0.1 check `Home.aDNA` exists · 0.2 PRESENT → load `STATE.md` · 0.3 MISSING → offer bootstrap · 0.4 FRESH-INSTALL → skip) is **site-specific**, not in the template.
- `.adna/CLAUDE.md` has the route-to-Hestia-if-present hook but **no creation/offer path**.

## Proposal

1. **Add a "Node Vault Detection" step** to `workspace_claude_md.template`, genericized from this node's root-CLAUDE Step 0:
   - check for `Home.aDNA/`; **PRESENT** → load `STATE.md` as cross-project context; **MISSING** (and not fresh-install) → offer to bootstrap via the canonical chain (`skill_project_fork` `project_name = Home` → `skill_inventory_refresh` → `skill_node_bootstrap_interview` → `skill_node_health_check`); **FRESH-INSTALL** (no `.aDNA/` projects yet) → skip.
   - **Opt-in + no-nag**: operator declines → proceed; do not re-ask in later sessions unless a session needs node-scope context.
2. **Strip site-specific content** when lifting: the Step-0a Operations-detection block, the live-campaign banner, and any fleet-specific vault enumeration stay node-local — the template ships the generic detection logic only.

## Dependencies / relationships

- **Complements** [[idea_upstream_project_fork_exemplar_invocation]] — that idea is the *fork/interview mechanics*; this is the *router-side detection + offer* that invokes them. Co-land so the offered chain matches the wired chain.
- **Distinct from** [[idea_upstream_latticehome_rename_pattern]] + [[idea_upstream_node_vault_bare_role_rename]] — those repointed the vault *name* (`node` → `LatticeHome` → `Home`) in the router; neither adds the *detection/offer feature*.
- **Pairs with** [[idea_upstream_home_claude_template]] — the offered bootstrap should install the Hestia governance template, not generic Berthier.

## Risks

1. **Template genericity** — the router template must not leak this fleet's vault list / Operations / campaign banner. Mitigation: lift only the Step 0.1–0.4 skeleton; everything else is node-local.
2. **Fresh-install false-positive** — must correctly distinguish "node with vaults but no Home" (offer) from "brand-new empty clone" (skip, per Step 0.4) so a first-run user isn't pushed into node bootstrap before they have any project.
3. **Router-source duplication** — confirm the canonical router source-of-truth (`what/docs/templates/workspace_claude_md.template` vs the released `.adna/how/templates/template_workspace_claude.md`) and edit one, per `skill_template_release` + ADR-034.

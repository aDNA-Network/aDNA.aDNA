---
type: backlog_idea
status: proposed
priority: high
created: 2026-06-23
updated: 2026-06-23
last_edited_by: agent_hestia
filed_from: Home.aDNA/how/campaigns/campaign_production_tidy/pt04b_rename_ref_sweep_playbook.md (promoted at P8 close)
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, rename, ref_sweep, wrapper_refederation, shim, recipe, production_tidy]
---

# Idea: `skill_graph_rename` — a canonical rename + ref-sweep recipe for `<Name>.aDNA` graphs

## Problem

The standard has `skill_project_fork` (birth) and a proposed `skill_project_archive` (death), but **nothing for rename** — yet a graph rename is the highest-blast-radius routine operation: it touches the in-vault identity cascade (MANIFEST/CLAUDE/STATE/identity), fleet-wide prose + structured refs, every consumer `<wrapper>/` directory + `federation_ref`, the router, render artifacts, and a back-compat shim. Every rename re-derives the flow, and the wrapper surface is routinely **undercounted ~3×**.

## Evidence — 7 renames converged on one recipe (Operation Production Tidy pt05–pt08, 2026-06-15/16)

TappInterface→TappProtocol · SpeechForge→Oration · VAASLattice→VAAS · ComfyForge→ComfyUI · MoleculeForge→Molecules · SiteForge→Astro · TaskForge→Operations. All ran the same playbook (`pt04b_rename_ref_sweep_playbook.md` + per-rename wrapper manifests); each produced live-source-ref = 0 + a registered §C shim.

## Proposed recipe (as practiced)

1. **Full-grep first** — enumerate the live-ref + consumer surface before editing (planning estimates run ~3× low; see `idea_upstream_recon_at_execution_discipline`).
2. **Live-vs-historical classifier** — repoint *live* pointers (routing, structured refs); leave *dated-historical* records verbatim (AARs, session logs, changelogs).
3. **Idempotent sed + dirty-vault skip** — re-runnable sweep; skip vaults with uncommitted work and flag them (don't edit another writer's tree).
4. **Per-vault surgical commits** — one commit per consumer vault, HEAD-verified (resume-race safety).
5. **Identity cascade** in the renamed vault (name, display, persona-unchanged, router row).
6. **Register the rename-shim at creation** (class/window/retire-condition/owner; see `idea_upstream_shim_window_discipline`).
7. **Wrapper refederation = full per-vault pass, NOT a one-liner** — per consumer: `git mv` the wrapper dir + update every in-vault ref (graft manifests · home cards · MANIFEST/CLAUDE routing · skills · missions) + repoint structured `federation_ref` + sweep prose. The shim retires only on that vault's full ref-0. *(PT corrected this from "one-touch" after the graft/routing blast radius was undercounted 3×.)*

## Why upstream

Renames are inevitable in any maturing multi-vault workspace (brand/role realignment, bare-role-canonical doctrine). The 7-event convergence makes the flow template-ready. Natural home: `how/skills/skill_graph_rename.md`, cross-referenced from `skill_project_fork` and the merge recipe (`idea_upstream_graph_merge_recipe`). Pairs with the shim-window + recon-at-execution disciplines.

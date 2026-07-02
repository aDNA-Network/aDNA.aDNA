---
type: backlog_idea
status: accepted
priority: medium
created: 2026-06-23
updated: 2026-07-02
last_edited_by: agent_rosetta
filed_from: Home.aDNA/how/campaigns/campaign_production_tidy/ (P8 close)
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, archive, archive_holder, so7, workspace_layout, production_tidy]
fold_batch: champollion_m6_1_rc
---

# Idea: name the **Archive holder** as a first-class workspace concept

## Problem

`skill_project_archive` (sibling filing) defines the *flow* of archiving a vault, but the *destination* — the `Archive.aDNA/` holder — is still an emergent convention this node invented. The standard has no concept of "a root object that is not itself a vault but houses archived vaults." The router calls it a "Candidate canonical archive convention." Without naming it, each node re-decides where dead vaults go, whether the holder is a vault (it isn't — no governance files), and how it coexists with a flat file-archive.

## Evidence — a stable holder emerged (Operation Production Tidy + Spring Clean, 2026-06)

`Archive.aDNA/` now holds **10 archived graphs** intact (ComfyForge · ComicForge · ContextCompass · LatticeAgent · LatticeTerminal · LiteratureForge · RareHarnessOld · LPWhitepaper · CanvasForge · LatticeLabs), each as `Archive.aDNA/<Name>.aDNA/` with its banner + back-compat shim, **plus** a flat `Archive.aDNA/_archive/` (53G of legacy tarballs + cruft snapshots, gitignored). The audit at PT close confirmed this leg is clean (10/10 cataloged).

## Proposed shape

1. **Holder definition** — `Archive.aDNA/` is a root object, **not a vault** (no `CLAUDE.md`/`MANIFEST.md` governance of its own beyond a holder banner); it is excluded from `vault_count` and from health-check vault enumeration.
2. **Two sub-areas** — `Archive.aDNA/<Name>.aDNA/` (whole archived graphs, history intact) and `Archive.aDNA/_archive/` (flat file/tarball archive; gitignored — bytes never tracked).
3. **Naming** — `Archive.aDNA` follows the bare-role-canonical convention (like `Home`, `Network`, `Terminal`), so the holder reads as a role even though it is not a governed vault.
4. **Census discipline** — the holder is the documented exception every workspace census must allowlist (ties to `idea_upstream_health_check_precision`).

## Why upstream

Any workspace that lives long enough accumulates dead vaults; the holder is where they go. Naming it (and its non-vault status + census exception) prevents the per-node re-derivation and the recurring "is Archive.aDNA a vault?" drift. Companion to `idea_upstream_skill_project_archive` (the flow) and `idea_upstream_archive_ledger_schema` (the registry).


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).

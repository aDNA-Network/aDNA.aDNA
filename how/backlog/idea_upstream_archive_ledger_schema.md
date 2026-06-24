---
type: backlog_idea
status: proposed
priority: medium
created: 2026-06-23
updated: 2026-06-23
last_edited_by: agent_hestia
filed_from: Home.aDNA/how/campaigns/campaign_workspace_houseclean/disposition_ledger_v2.md (§C; promoted at PT P8 close)
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, shim, registry, ledger, schema, archive, shim_class_taxonomy, production_tidy]
---

# Idea: a canonical **shim / archive ledger schema** + shim-class taxonomy

## Problem

`idea_upstream_shim_window_discipline` (filed) says *register every shim*; this proposes *what a registered row contains*. The §C registry on this node grew an ad-hoc schema and, more importantly, a **shim-class taxonomy** that the standard does not name — so a fresh node re-discovers the column set and re-learns that "shim" covers far more than a filesystem symlink.

## Evidence — ~12 shim classes evolved in one registry (§C, 2026-06)

The §C registry (44+ rows) + the `_archive/README_index` (39 entries) converged on a stable row schema, and PT surfaced that "shim" spans at least: **FS-rename** symlink · **merge-archive** (`Source → Archive.aDNA/Source`) · **dual-home code-relocation** (`repo → Vault/what/repo`) · **host-move / git-remote-rollback** (the shim is a preserved git remote, not a symlink) · **native-transfer / redirect-based** (no rollback remote — the forge redirect IS the back-compat surface) · **env-var alias** · **in-code re-export** · **flat file-archive**. Several are S13-invisible (not filesystem symlinks), which broke the naïve "scan top-level symlinks" check until the taxonomy was made explicit.

## Proposed schema

Registry row fields: **id · subject (from→to) · class** (from the taxonomy above) **· window** (default 30d) **· retire-condition** (ref-sweep-zero + owner-ack, or class-specific) **· owner** (persona) **· registered-date · retired-date/marker**. Plus a documented **shim-class taxonomy** so health-checks know which classes are filesystem-visible (flag if unregistered) vs. record-only (registered via coordination, S13-neutral by design).

## Why upstream

The shim-window discipline is only enforceable if the row schema + class taxonomy are shared — otherwise each node's health-check re-learns which shims it can even *see*. Natural home: the template's shim-ledger schema doc, referenced by `skill_node_health_check` and `idea_upstream_shim_window_discipline`. Companion to `idea_upstream_archive_category` + `idea_upstream_skill_project_archive`.

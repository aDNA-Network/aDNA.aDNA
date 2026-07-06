---
type: backlog_idea
status: resolved
priority: high
created: 2026-06-23
updated: 2026-07-06
last_edited_by: agent_rosetta
filed_from: Home.aDNA/how/missions/mission_clean_root_audit.md (S15; PT P8 close)
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, health_check, clean_root, allowlist, census, drift, production_tidy]
fold_batch: champollion_m6_1_rc
---

# Idea: health-check census must be **allowlist-based** (flag the unknown), not pattern-based

## Problem

`skill_node_health_check` enumerated the workspace root by *pattern* — `*.aDNA` graphs (S9) + named code repos (S13). Anything that didn't match the pattern was **invisible**: non-`.aDNA`, non-grandfathered root objects — especially dot/underscore-prefixed names that also evade `ls`. A pattern-based census certifies "everything I recognize is fine" while silently ignoring everything it doesn't recognize. That is exactly backwards for a drift detector.

## Evidence — ~2.3G accumulated unseen (clean-root audit, 2026-06-23)

A bird's-eye audit at PT close found **8 stray root objects (~2.3G)** that no health-check had ever flagged: aborted-fork `.git` stores (`.Caddy.aDNA.broken.*`, `.trash_partial_5`, `__bw_quarantine`), a probe file, an unhomed 133M Astro site, and ~2G of Lab dev-worktrees. They accumulated mostly on one busy day. The `*.aDNA`-only census would never have surfaced them; the campaign's own "clean-root checklist" inherited the same blind spot.

## Fix already applied locally — S15 (Clean-Root Allowlist Check)

Wired into `skill_node_health_check`: `ls -A` the root, classify every entry against an **allowlist** = {registered `.aDNA` graphs (S9) · registered §C shims (S13) · grandfathered infra (`.adna`, `lattice-labs`, `llama.cpp`, `CLAUDE.md` — single source of truth) · documented exceptions (e.g. `latlab-*` Lab-governed)}. **Anything not on the allowlist → CLEAN-ROOT DRIFT warning.** Proof run: 83 root entries fully classified, 0 unknown drift. (Closed Home WI-14.)

## Why upstream

Every node's root accumulates strays; a pattern-based census will miss them on every node, forever. The principle — *a census flags the unrecognized, it does not bless the recognized* — belongs in the template's health-check skill so the allowlist check ships by default. Companion to `idea_upstream_archive_category` (the holder is the documented exception) + `idea_upstream_shim_window_discipline` (shims are an allowlist input).


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).

**Resolved 2026-07-06 (Meridian M6):** shipped in the v8.4 image (Champollion RC IN-set); status-flip was the missing post-ship close-out.

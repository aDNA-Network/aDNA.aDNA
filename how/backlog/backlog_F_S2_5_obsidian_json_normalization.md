---
type: backlog_idea
status: resolved
priority: low-medium
routes_to_campaign: campaign_obsidian_deployment_stabilization
routes_to_track: T4  # Obsidian config canonicalization
finding_id: F-S2-5
source_session: session_stanley_20260513_043947_mlwx03_s2
created: 2026-05-13
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, f_s2_5, obsidian_json_normalization, canonicalization, drift, lwx_s2_surfaced]
---

# F-S2-5 — Obsidian "normalizes" tracked `.obsidian/*.json` files on open

## Summary

Obsidian rewrites tracked `.obsidian/*.json` files on every open — moves fields to schema-correct homes (e.g., `monospaceFontFamily` from `app.json` to `appearance.json`), reformats arrays to multi-line, strips trailing newlines. The changes are typically BENIGN (Obsidian's normalization is often an improvement over hand-authored configs) but architecturally any tracked .obsidian config diverges from upstream as soon as Obsidian runs.

## Root cause

Obsidian's internal config representation is canonical; on disk it's serialized fresh from that representation each save. The serialization can differ from the on-disk form authored by a skill/template — most commonly in field placement, array formatting, and trailing-newline policy.

In M-LWX-03 S2, post-first-open `git diff` showed:
- `app.json`: removed `monospaceFontFamily` (Obsidian relocated to appearance.json — correct fix!)
- `appearance.json`: added `monospaceFontFamily` (received from app.json), stripped trailing newline
- `core-plugins.json`: only stripped trailing newline

## Routes to

**Successor campaign**: `campaign_obsidian_deployment_stabilization` Track T4 — Obsidian config canonicalization.

## Proposed approaches

1. **Accept upstream→local drift as normal** — document the expected drift; build re-canonicalization tooling that re-applies upstream values on operator demand. Lowest-touch.
2. **`skill_obsidian_canonicalize.md`** — reads upstream `.obsidian/*.json` from `.adna/` template, diffs against local, surfaces drift, offers re-canonicalize (with operator-local overrides preserved via a delta-aware merge).
3. **Stop tracking `.obsidian/*.json`** — treat all as per-device (like workspace.json). But this loses the "vault works on clone" guarantee.
4. **Split `.obsidian/` into `.obsidian-template/` (read-only, tracked) + `.obsidian/` (per-device, gitignored)** with rehydrate skill. Heaviest refactor; only worth it if drift becomes painful.

Recommend Option 2 (T4 skill) as primary; defer Option 4 unless T4 surfaces unexpected pain.

## Critical files

- NEW: `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md`
- Affected: `.obsidian/{app,appearance,core-plugins,community-plugins,hotkeys}.json` in every aDNA vault

## Source references

- M-LWX-03 S2 NEW FINDING F-S2-5 in plan file
- Diff observed at 2026-05-13T05:35Z+ via `git diff` after operator's first Obsidian open of node.aDNA


## Champollion G0 disposition — D (M1.1, 2026-07-02)

**ALREADY-DISCHARGED.** Evidence: skill_obsidian_canonicalize exists (the T4 canonicalization skill this forecast); drift documented-and-manageable. Status set to `resolved`; ratified at Champollion G0 (D2).

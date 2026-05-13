---
type: backlog_idea
status: open
priority: low  # cosmetic
routes_to_campaign: campaign_obsidian_deployment_stabilization
routes_to_track: T4  # canonicalization extends to plugin-data layer
finding_id: F-S2-6
source_session: session_stanley_20260513_043947_mlwx03_s2
created: 2026-05-13
updated: 2026-05-13
last_edited_by: agent_stanley
tags: [backlog, f_s2_6, notebook_navigator, plugin_data_json, triad_colors, cosmetic, lwx_s2_surfaced]
---

# F-S2-6 — NN plugin per-vault `data.json` (triad colors) not shipped by setup.sh

## Summary

Notebook Navigator (NN) plugin's per-vault configuration lives at `.obsidian/plugins/notebook-navigator/data.json` and contains operator-facing settings like folder triad colors (purple `who/`, cyan `what/`, green `how/` per OBSIDIAN_CLAUDE.md:170-174). `setup.sh` downloads only the plugin binaries (`main.js` + `manifest.json` + optional `styles.css`) — NOT the per-vault `data.json`. Result: post-install, NN shows folders in default white instead of the intended triad palette.

## Root cause

`setup.sh` (`.adna/setup.sh`) downloads from GitHub releases-latest endpoint, which provides plugin code but NOT operator-configured per-vault state. The per-vault `data.json` layer is operator-configured via the plugin's Settings UI — but there's no canonical "this is what aDNA's NN data.json should look like" template anywhere.

This is a sub-layer of F-S2-2 (config-binary asymmetry) — the asymmetry exists at TWO layers: plugin-binary layer (F-S2-2) + plugin-data layer (this finding).

## Routes to

**Successor campaign**: `campaign_obsidian_deployment_stabilization` Track T4 — Obsidian config canonicalization (extend to plugin-data layer).

## Proposed approaches

1. **Ship per-vault `data.json` template at `.adna/.obsidian/plugins/notebook-navigator/data.json`** with the triad colors pre-configured. `setup.sh` copies this into the forked vault's `.obsidian/plugins/notebook-navigator/data.json` post-download.
2. **`skill_obsidian_canonicalize.md` (T4)** extends to plugin-data layer — diffs `.adna/.obsidian/plugins/<id>/data.json` against forked vault's; offers canonicalize.
3. **Operator-side configuration step** — punt to operator: document in `skill_onboarding.md` how to set folder colors in Settings → Notebook Navigator. Easiest but doesn't serve the "stable/standard/self-stabilizing" goal.

Recommend Option 1 (cleanest; small template addition); Option 2 layered on as the canonicalization gains plugin-data awareness.

## Critical files

- NEW (template): `.adna/.obsidian/plugins/notebook-navigator/data.json` — triad-colors-preconfigured template
- `/Users/stanley/lattice/.adna/setup.sh` — extend to copy per-vault data.json post-download
- Affected: NN folder visual rendering across all aDNA vaults

## Source references

- M-LWX-03 S2 cross-graph memo §7 F-S2-6
- Operator screenshot 2026-05-13T05:55Z+ — folders rendered in default white instead of triad palette
- `node.aDNA/.obsidian/OBSIDIAN_CLAUDE.md:170-174` declares triad colors as the intended UX

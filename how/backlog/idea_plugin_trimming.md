---
type: backlog_idea
status: deferred
priority: high
created: 2026-04-04
last_edited_by: agent_rosetta
tags: [backlog, obsidian, performance, clone-size]
updated: 2026-07-06
champollion_mission: M4.2
---

# Idea: Obsidian Plugin Trimming

## Problem
15 plugins bundled (13MB, 87% of .obsidian/). Most are cosmetic. New users clone 13MB of plugins they may never use. Clone time and disk space impacted.

## Proposed Solution
Ship only essential plugins (~1.5MB): obsidian-advanced-canvas + templater-obsidian + optionally obsidian-tasks-plugin. Document remaining 12 as optional. Update setup.sh. **Co-executor must test Obsidian UX after trimming.**

## Origin
campaign_adna_polish pre-merge efficiency audit. 85% potential size reduction.


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M4.2` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).

## Champollion M4.2 disposition — REROUTE (Obsidian/image config, out of site-UX window, 2026-07-02)

**REROUTE → `campaign_obsidian_deployment_stabilization` + image-side RC (`fold_batch: champollion_m6_1_rc`).** M4.2 is site-source-only. This is **Obsidian plugin bundling + `.adna/setup.sh`** work (the `.obsidian/` plugin set + setup script live in the released image, not the `site/` tree), and its Proposed Solution requires an interactive **"co-executor must test Obsidian UX after trimming"** step out of scope for an unattended site build. Belongs to the Obsidian-stabilization track; the image-side plugin/setup.sh delta rides the M6.1 template-release RC. Status held `accepted`; effective venue = Obsidian-stabilization / M6.1 RC.

**Meridian M6 note (2026-07-06):** status `accepted` → `deferred` — DEFER-flipped at v8.4 assembly (RC IN-set I16; needs interactive Obsidian UX validation) and routed to the `campaign_obsidian_deployment_stabilization` track; not shipped in v8.4/v8.5 (RC v8.6 §5 Class-2).

---
type: backlog_idea
status: accepted
priority: low  # cosmetic
routes_to_campaign: campaign_obsidian_deployment_stabilization
routes_to_track: T4  # also touches T5 first-open UX hardening
finding_id: F-S2-7
source_session: session_stanley_20260513_043947_mlwx03_s2
created: 2026-05-13
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, f_s2_7, template_placeholder_tags, obsidianignore, templater_syntax, cosmetic, lwx_s2_surfaced]
champollion_mission: M4.2
---

# F-S2-7 — Template placeholder tags leak into vault tag index

## Summary

Template files (`how/templates/template_prd.md` + `how/templates/template_rfc.md`) contain `tags: [<project_slug>]` in their YAML frontmatter as a literal placeholder. Obsidian's tag indexer treats `<project_slug>` as a real tag and surfaces it in the tag pane (count: 2 — one per template). Cosmetic pollution; operator sees a literal "<project_slug>" tag that doesn't represent any real content.

## Root cause

Two intertwined issues:
1. Templates use bare placeholder syntax (`<project_slug>`) rather than Templater syntax (`<% tp.frontmatter.project_slug %>`) — so they look like real frontmatter rather than template directives.
2. `how/templates/` is NOT in `.obsidianignore`, so Obsidian's file watcher indexes template content as if it were real content.

## Routes to

**Successor campaign**: `campaign_obsidian_deployment_stabilization` Track T4 — Obsidian config canonicalization (`.obsidianignore` extension) OR Track T5 — first-open UX standardization.

## Proposed approaches

1. **Add `how/templates/` to `.obsidianignore`** (per-vault edit; upstream `.adna/.obsidianignore` already has selective exclusions). Templates stop being indexed. Cleanest fix.
2. **Switch templates to Templater syntax** — `<% tp.frontmatter.project_slug %>` is a Templater directive that does NOT match the literal `<project_slug>` pattern Obsidian's tag indexer picks up. Better long-term because templates would also auto-substitute when applied (currently they need manual placeholder replacement).
3. **Both** — Option 2 for content quality + Option 1 for safety net (templates may still produce other bytes the indexer picks up).

Recommend Option 3 (both) — small upstream change to template files + small `.obsidianignore` extension.

## Critical files

- `/Users/stanley/aDNA/.adna/how/templates/template_prd.md` (frontmatter `tags:`)
- `/Users/stanley/aDNA/.adna/how/templates/template_rfc.md` (frontmatter `tags:`)
- `/Users/stanley/aDNA/.adna/.obsidianignore` — add `how/templates/`
- Per-vault `.obsidianignore` (in each forked vault) inherits the change on next fork OR via canonicalization skill (T4)

## Source references

- M-LWX-03 S2 cross-graph memo §7 F-S2-7
- Operator screenshot 2026-05-13T05:55Z+ — tag pane shows literal `<project_slug>` tag with count 2
- Grep verification: `<project_slug>` literal exists in 4 files (2 templates + 2 docstring references in `how/pipelines/prd_rfc/{01_research,04_review}/AGENTS.md`)


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M4.2` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).

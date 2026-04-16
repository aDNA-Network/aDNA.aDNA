---
type: state
created: 2026-04-13
updated: 2026-04-16
status: active
last_edited_by: agent_stanley
tags: [state, governance]
---

# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Phase 5 complete. Ready for Phase 6.** Phases 0-5 complete (89 content files + 97-page live site). Phase 5 added 11 files: 3 publishing docs, 4 workshop kits, 4 self-referential lattice YAMLs. Phase 7 infrastructure complete (M24 baseline measured). Next: Phase 6 (Website v2).

## Active Campaign

**Operation Rosetta** (`how/campaigns/campaign_rosetta/`) — build the self-referential aDNA context graph.

| Phase | Status | Missions | Content |
|-------|--------|----------|---------|
| Phase 0: Scaffold | Complete | M00 | 0 content, 10 AGENTS.md, 10 templates, 2 skills |
| Phase 1: Core Content | **Complete** | M01-M05 | 26/26 (13 concepts, 8 patterns, 5 comparisons) |
| Phase 2: Human Path | **Complete** | M06-M08 | 15/15 (9 tutorials, 6 use cases) |
| Phase 3: Website v1 | **Complete** | M09-M12 | 60-page site live on Vercel |
| Phase 4: The Who | **Complete** | M13-M15 | 37/37 (25 glossary + 1 index, 3 governance, 3 community, 5 adopters) |
| Phase 4.5: III Site Improvements | **Complete** | M20-M23 | Hero redesign, 37 new pages, components, OG images |
| Phase 5: The How | **Complete** | M16-M18 | 11/11 (3 publishing, 4 workshops, 4 lattice YAMLs) |
| Phase 6: Website v2 | **Next** | M19 | Final content sync + quality pass |
| Phase 7: 100-Cycle III Loop | M24 complete | M24-M35 | 100 improvement cycles, 10 decadal themes, persona ranker AARs |

## Phase 5 Deliverables

- **M16: Publishing Pipeline** — 3 docs: vault-to-site pipeline (`publishing_vault_to_site.md`), content mapping with 2-pathway architecture (`publishing_content_mapping.md`), OG image system (`publishing_social_sharing.md`)
- **M17: Workshop Kits** — 3 workshops spanning skill ladder: Vault Exploration (60 min, beginner), Build Your First Vault (90 min, intermediate), Lattice Design (120 min, advanced), plus facilitation guide
- **M18: Lattice Definitions + Closeout** — 4 self-referential lattice YAMLs: content_pipeline, campaign_execution, context_serving, dual_audience_review. All validate against schema. Examples directory now has 19 lattices.

## What's Working

- Full documentation site live at https://adna-docs.vercel.app with all Phase 1-4.5 content
- Homepage: branded aDNA banner (watermark cropped), Operational Ontology section, Context Engineering section
- All three triad legs populated: WHO (governance, community, adopters), WHAT (concepts, patterns, tutorials, comparisons, use cases, glossary, lattices), HOW (publishing, workshops, campaigns, sessions, skills)
- 89 vault content files + 97 site pages total
- Lattice examples directory: 19 YAMLs (15 general/biotech + 4 self-referential) + 4 canvas templates
- Phase 7 III infrastructure complete: 2 skills, cycle tracker, 12 missions defined, M24 baseline measured

## Active Blockers

None. Phase 6 ready to execute.

## Next Steps

1. **Phase 6: Website v2** — M19: sync Phase 5 content to site (publishing, workshops, self-referential lattices), quality re-run, brand refinement. Phase gate: confirm with user before starting.
2. **Phase 7: 100-Cycle III Loop** — M25-M35: 100 iterative improvement cycles across 10 themed decadals (Accessibility → Content Clarity → Navigation → Visual → Mobile → Performance → SEO → Components → Personas → Hardening). Baseline established (M24 complete). Skills: `skill_iii_cycle.md`, `skill_decadal_aar.md`. Tracker: `missions/artifacts/iii_cycle_tracker.md`.

## Pending Manual Actions

- **GitHub social preview**: Upload `site/public/images/og-default.png` at github.com/LatticeProtocol/aDNA.aDNA > Settings > Social preview
- **Vercel Git integration**: Connect repo at vercel.com > adna-docs > Settings > Git for auto-deploy (currently manual via `vercel --prod`)

## Last Session (2026-04-16)

Completed Phase 5 (The How) in a single session: M16 (3 publishing docs), M17 (4 workshop files), M18 (4 lattice YAMLs + closeout). 11 new content files total. All lattice YAMLs validate against schema. Campaign board and governance updated.

## Next Session Prompt

> Resume Operation Rosetta in `aDNA.aDNA/`. Phase 5 complete (11 files: publishing, workshops, lattices). Phase 6 (Website v2) is next: M19 — sync Phase 5 content to site, add HOW sections (publishing, workshops), quality re-run, brand refinement. Phase gate: confirm with user before starting Phase 6. Vercel deploys manually via `vercel --prod` from `site/`. See `campaign_rosetta.md` for full mission board.

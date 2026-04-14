---
type: state
created: 2026-04-13
updated: 2026-04-14
status: active
last_edited_by: agent_stanley
tags: [state, governance]
---

# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Phase 2 — Human Path COMPLETE.** Phases 0-2 finished — 41 content files across 8 missions. **Phase gate: user approval required before advancing to Phase 3.**

## Active Campaign

**Operation Rosetta** (`how/campaigns/campaign_rosetta/`) — build the self-referential aDNA context graph.

| Phase | Status | Missions | Content Files |
|-------|--------|----------|---------------|
| Phase 0: Scaffold | Complete | M00 | 0 content, 10 AGENTS.md, 10 templates, 2 skills |
| Phase 1: Core Content | **Complete** | M01-M05 | 26/26 (13 concepts, 8 patterns, 5 comparisons) |
| Phase 2: Human Path | **Complete** | M06-M08 | 15/15 (9 tutorials, 6 use cases) |
| Phase 3: The Who | Planned | M09-M11 | Community + adopters + glossary |
| Phase 4: The How | Planned | M12-M14 | Publishing + workshops + lattices |
| Phase 5: Website | Deferred | — | AstroJS site (out of scope) |

## Phase 2 Deliverables

| Mission | Type | Count | Files |
|---------|------|-------|-------|
| M06 | Beginner tutorials | 3 | navigate_a_vault, first_claude_md, question_test |
| M07 | Intermediate tutorials | 3 | extend_the_ontology, write_a_context_file, design_a_mission |
| M08 | Advanced tutorials | 3 | build_a_lattice, run_a_campaign, federate_a_vault |
| M08 | Use cases | 6 | research_lab, startup, enterprise_team, educator, open_source_project, solo_developer |

## What's Working

- Complete learning path: beginner → intermediate → advanced tutorials (9 files)
- 6 domain-specific use cases with named personas
- All tutorials are executable — readers produce concrete outcomes
- Use cases follow consistent narrative arc (persona → challenge → solution → vault → outcome)
- Dense cross-linking: tutorials → concepts → patterns, use cases → concepts → comparisons
- 41 total content files across Phases 1-2, all quality-gated

## Active Blockers

**Phase gate**: User approval required to advance from Phase 2 to Phase 3.

## Last Session (2026-04-14)

Completed all Phase 2 missions (M06-M08) — 9 tutorials + 6 use cases. AARs appended. Campaign board updated: Phase 2 complete.

## Next Steps

1. **Phase gate decision** — user approves or adjusts before Phase 3 begins
2. Phase 3 (The Who):
   - M09: Community Architecture (3 community files)
   - M10: Adopter Personas (5 persona cards — can seed from M08 use case personas)
   - M11: Glossary + Governance (~25 glossary entries + 3 governance docs)
3. Phase 3 introduces WHO-leg content — community roles, adopter profiles, canonical terminology

## Next Session Prompt

> Resume Operation Rosetta in `aDNA.aDNA/`. Phases 1-2 complete (41 content files). Phase gate: confirm with user before starting Phase 3. Phase 3 (The Who) covers M09-M11: community architecture, adopter personas, glossary + governance. Check `who/community/AGENTS.md`, `who/adopters/AGENTS.md`, and `what/glossary/AGENTS.md` for directory conventions. M10 adopter personas can seed from M08 use case personas (Maya Chen, Alex Rivera, Jordan Okafor, Sarah Kim, Kai Nakamura, Sam Torres).

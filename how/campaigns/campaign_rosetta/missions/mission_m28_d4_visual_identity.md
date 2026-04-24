---
plan_id: mission_m28
type: plan
title: "M28 — D4: Visual Identity & First-Contact (Cycles 31-40)"
owner: stanley
status: completed
mission_class: implementation
created: 2026-04-24
updated: 2026-04-24
last_edited_by: agent_rosetta
tags: [mission, rosetta, phase-7, d4, visual-identity, ux]
campaign: campaign_rosetta
decadal: D4
cycles: 31-40
ranker_baseline: 4.83
ranker_target: "≥5.00"
---

# M28 — D4: Visual Identity & First-Contact (Cycles 31-40)

## Goal

Reduce visual noise, eliminate generic-AI aesthetic, and sharpen first-contact clarity for all 5 reviewer personas. D4 focuses on what visitors see and feel before they read a single word of content. Mandatory Reviewer Lens Pass (Design Critic, Accessibility Auditor, Content Strategist) at cycle 40 close.

Ranker baseline: **4.83** (D3 close). Target: **≥5.00**.

## Priority Queue (from aar_phase7_d3.md + ux_audit_2026_04_23.md)

| ID | Cycle | Item | Status |
|----|-------|------|--------|
| F-09 | 31 | Nav collapse: 7 → 5 items (remove Glossary + How from top nav; fold into Reference) | planned |
| F-05 | 32 | Emoji → typographic/CSS marks (steps, personas, context cards) | planned |
| F-07 | 33 | Homepage section collapse: 7 → 4 (remove Ontology + Context Eng; merge Features + How it Works) | planned |
| F-10 | 34 | Trust strip: move stats row to immediately below hero CTAs | planned |
| F-04 | 35-36 | Typography/whitespace audit on concept + tutorial pages | planned |
| — | 37-39 | Enterprise credibility, catch fixes, ranker measurement | planned |
| — | 40 | Decadal close: Reviewer Lens Pass + 5-persona ranker + AAR | planned |

## Tasks

### 1. Cycle 31 — Nav collapse (F-09)
- **Status**: in_progress
- **Session**: session_20260424_d4_open
- **Description**: Reduce `site/src/components/common/Header.astro` navLinks from 7 to 5. Remove Glossary and How from top nav. Reference becomes the hub for Glossary + How. Verify build + Playwright.
- **Files**: `site/src/components/common/Header.astro`
- **Depends on**: none

### 2. Cycle 32 — Emoji → typographic (F-05)
- **Status**: in_progress
- **Session**: session_20260424_d4_open
- **Description**: Replace 12+ decorative emoji on homepage with CSS/typographic marks. Steps: remove step-icon emoji, let step-number carry the visual weight. Personas: remove persona-icon emoji. Context cards: replace context-icon emoji with CSS characters or inline SVG marks.
- **Files**: `site/src/pages/index.astro`
- **Depends on**: none

### 3. Cycle 33 — Homepage section collapse (F-07)
- **Status**: in_progress
- **Session**: session_20260424_d4_open
- **Description**: Reduce homepage from 7 sections to 4: (1) Hero, (2) Features + How it Works merged, (3) Who Uses aDNA, (4) The Standard. Remove Operational Ontology and Context Engineering sections; add links to those from the merged value prop section.
- **Files**: `site/src/pages/index.astro`
- **Depends on**: cycle 32

### 4. Cycle 34 — Trust strip (F-10)
- **Status**: in_progress
- **Session**: session_20260424_d4_open
- **Description**: Move stats row (14 entity types, 3 conformance levels, v2.2, MIT) from "The Standard" section to immediately below hero CTAs. Add compact trust-strip styling.
- **Files**: `site/src/pages/index.astro`
- **Depends on**: cycle 33

### 5. Cycles 35-39 — Typography, enterprise credibility
- **Status**: planned
- **Session**: TBD
- **Description**: Whitespace/heading hierarchy audit on concept + tutorial pages. Enterprise landing page improvements. Catch fixes from ranker measurement.
- **Files**: multiple concept/tutorial MDX files, `site/src/pages/enterprise/index.astro`
- **Depends on**: cycle 34

### 6. Cycle 40 — Decadal close + Reviewer Lens Pass
- **Status**: planned
- **Session**: TBD
- **Description**: Mandatory reviewer lens pass (Design Critic, Accessibility Auditor, Content Strategist). 5-persona ranker score. File aar_phase7_d4.md. Update campaign_rosetta.md D4 row. Advance to D5.
- **Files**: `how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d4.md`, campaign doc, STATE.md
- **Depends on**: cycles 35-39

## Notes

- Lighthouse 100/100/100/100 + Playwright 30/30 must be maintained throughout.
- F-01 (hero rewrite) and F-03 (How it Works arc) were completed in D3 Workstream C — do not redo.
- The Reviewer Lens Pass at cycle 40 is **mandatory** per `skill_decadal_aar.md` Step 4b — skip is not allowed.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- [ ] Nav collapsed to 5 items
- [ ] Emoji replaced site-wide on homepage
- [ ] Homepage at 4 sections
- [ ] Trust strip below hero CTAs
- [ ] Typography audit complete
- [ ] D4 ranker score ≥ 5.00
- [ ] aar_phase7_d4.md filed

### AAR

*Mandatory before setting `status: completed`.*

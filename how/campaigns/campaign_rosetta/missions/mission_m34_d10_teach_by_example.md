---
plan_id: mission_m34
type: plan
title: "M34 — D10: Teach-by-Example (Cycles 91-100)"
owner: stanley
status: in_progress
mission_class: implementation
created: 2026-04-26
updated: 2026-04-26
last_edited_by: agent_rosetta
tags: [mission, rosetta, phase-7, d10, teach-by-example, content-depth, self-reference]
campaign: campaign_rosetta
decadal: D10
cycles: 91-100
ranker_baseline: 5.00
ranker_target: "5.00+"
---

# M34 — D10: Teach-by-Example (Cycles 91-100)

## Goal

Deepen the site's self-demonstrating layer — *show* aDNA working, not just describe it. The Educator persona is the remaining weak link (Actionability 4.98, Delight 4.98). Primary lever: expand `/learn/what-is-adna` from a thin overview (~130 words) to a substantive, example-driven page (~800 words) with the triad diagram, a real CLAUDE.md snippet, and an explicit self-reference to this vault as a live aDNA deployment. Secondary levers: show actual terminal output on `/get-started`, restyle the hero pain statement as plain text, fix nav labeling. **Reviewer Lens Pass mandatory before cycle 97** — Educator persona + Content Strategist.

Ranker baseline: **5.00** (D9 close). Target: hold 5.00, edge Educator Actionability toward 5.00.

## Priority Queue (seeded from aar_phase7_d9.md)

| ID | Cycle | Item | Status |
|----|-------|------|--------|
| I-00 | 91 | Gate measurement: Playwright baseline, confirm ranker 5.00 | **done** |
| I-01 | 92 | P0: `.hero-problem` restyle — remove box framing (background/border/radius), render as plain hero text | **done** |
| I-02 | 93 | P1a: `/learn/what-is-adna` — triad diagram + entity table + agent before/after expansion | pending |
| I-03 | 94 | P1b: `/learn/what-is-adna` — CLAUDE.md worked example snippet + self-reference callout + wikilinks | pending |
| I-04 | 95 | P2: `/get-started` step 3 — terminal output ASCII block | pending |
| I-05 | 96 | P3: Nav overlap fix — "Patterns" vs "How" label disambiguation | pending |
| I-06 | 97 | Reviewer Lens Pass — Educator persona: Actionability + Delight scoring | pending |
| I-07 | 98 | Reviewer Lens Pass — Content Strategist: F-02 resolved, F-06 resolved, voice consistency | pending |
| I-08 | 99 | P4/P5 cleanup: verify wikilinks + vault path in what-is-adna; hero metaphor parenthetical | pending |
| I-09 | 100 | D10 decadal close: full Playwright suite, 5-persona ranker, AAR, deploy | pending |

## Tasks

### 1. Cycle 91 — Gate measurement (I-00)

- **Status**: done
- **Description**: Playwright baseline run, confirm 5.00 ranker from D9, record baseline findings for D10 priority items. Confirm `.hero-problem` CSS, `/learn/what-is-adna` word count, `/get-started` step 3 state, nav structure.
- **Files**: `site/src/pages/index.astro`, `site/src/pages/learn/what-is-adna.astro`, `site/src/pages/get-started.astro`
- **Gate**: Baseline recorded. Playwright passes.

### 2. Cycle 92 — P0: Hero-problem restyle (I-01)

- **Status**: done
- **Description**: Remove callout-box styling from `.hero-problem` in `index.astro`. Strip: `padding`, `background: var(--color-bg-alt)`, `border: 1px solid var(--color-border)`, `border-left: 3px solid var(--color-primary)`, `border-radius: var(--radius-md)`. Keep: `font-family`, `font-size`, `font-weight`, `color`, `max-width`, `margin`, `line-height`. Pain statement becomes plain hero prose, not a comment-panel widget.
- **Files**: `site/src/pages/index.astro`
- **Gate**: `.hero-problem` has no background/border/radius. Playwright passes. Visual check: pain statement reads as hero text flow.

### 3. Cycle 93 — P1a: what-is-adna structure expansion (I-02)

- **Status**: pending
- **Description**: Expand `/learn/what-is-adna.astro` with: (1) triad diagram — ASCII/code block showing `who/ what/ how/` with 1-line description each; (2) the 14 entity types — compact table (Triad | Entities | Purpose); (3) expanded before/after: 2-3 paragraphs on what changes for an AI agent with vs. without aDNA. Target: ~500 words added in this cycle.
- **Files**: `site/src/pages/learn/what-is-adna.astro`
- **Gate**: Word count ~630+ words. Triad diagram + entity table present. Playwright passes.

### 4. Cycle 94 — P1b: CLAUDE.md example + self-reference (I-03)

- **Status**: pending
- **Description**: Add: (1) a real CLAUDE.md code snippet from this vault (pick 8-12 lines from `aDNA.aDNA/CLAUDE.md` that illustrate the structure), annotated with inline comments; (2) a self-reference callout: "This documentation site IS an aDNA vault. These pages are generated from `what/concepts/` inside `github.com/LatticeProtocol/aDNA.aDNA`."; (3) 2+ internal wikilinks to related pages (patterns, tutorials index, get-started). Target: ~800 words total on page.
- **Files**: `site/src/pages/learn/what-is-adna.astro`
- **Gate**: 800+ words. CLAUDE.md snippet present. Self-reference sentence present. 2+ links to related pages. Playwright passes.

### 5. Cycle 95 — P2: get-started terminal output (I-04)

- **Status**: pending
- **Description**: Step 3 of `/get-started` currently says "Start a session with Claude Code (or your preferred AI agent). The agent will read `CLAUDE.md`, detect a fresh project, and walk you through onboarding." Add immediately after: an ASCII terminal block showing representative Claude Code output on first run (what the user will actually see in their terminal when Claude detects the CLAUDE.md and offers onboarding).
- **Files**: `site/src/pages/get-started.astro`
- **Gate**: Terminal output block visible in step 3. Playwright passes.

### 6. Cycle 96 — P3: Nav overlap fix (I-05)

- **Status**: pending
- **Description**: "Patterns" and "How" nav items both route to operational/reference content and cause label confusion. Find nav component. Minimal fix: relabel "How" to "Guides" or "Operations", or restructure grouping to make distinction clear. One-line or minimal change.
- **Files**: Nav component in `site/src/components/`
- **Gate**: Nav label disambiguation is clear. Playwright passes. No LH regression.

### 7. Cycles 97-98 — Mandatory Reviewer Lens Pass (I-06, I-07)

- **Status**: pending
- **Description**: Mandatory D10 Reviewer Lens Pass per `skill_decadal_aar.md` Step 4b.
  - **Cycle 97 — Educator persona**: Full read of D10 changes. Score Actionability and Delight gaps. Is the site now *showing* aDNA or still just *describing* it?
  - **Cycle 98 — Content Strategist**: Verify F-02 (what-is-adna depth) fully resolved. Verify F-06 (self-reference links). Voice consistency across new content.
- **Files**: `who/reviewers/` persona files, review artifacts in `missions/artifacts/`
- **Gate**: Both reviewer reports filed. Critical blockers resolved before cycle 99.

### 8. Cycle 99 — P4/P5 cleanup (I-08)

- **Status**: pending
- **Description**: Verify `/learn/what-is-adna` has 2+ wikilinks + 1 concrete vault file path (F-06). If not done in P1b, add now. Add hero metaphor parenthetical (P5): one-line clarification after "genome of your project" for true newcomers — e.g., "the structured context your AI agents need to work effectively".
- **Files**: `site/src/pages/learn/what-is-adna.astro`, `site/src/pages/index.astro`
- **Gate**: F-06 resolved. P5 applied. Playwright passes.

### 9. Cycle 100 — D10 decadal close + Campaign wind-down (I-09)

- **Status**: pending
- **Description**: Full decadal close per `skill_decadal_aar.md`. 5-persona ranker final scores (target: 5.00 holds, Educator Actionability edges toward 5.00). File `aar_phase7_d10.md`. Update `iii_cycle_tracker.md` cycles 91-100. Set M34 status: completed. Update STATE.md: D10 complete, M35 queued (Phase 7 Campaign AAR). Commit + push + `vercel --prod`.
- **Files**: `missions/artifacts/aar_phase7_d10.md`, `missions/artifacts/iii_cycle_tracker.md`, campaign doc, STATE.md
- **Gate**: AAR filed. M34 completed. STATE.md updated. Site deployed.

## Notes

- Ranker baseline 5.00 — primary risk is regression. Every cycle that touches LH-sensitive code runs Playwright before committing.
- Reviewer Lens Pass (cycles 97-98) is mandatory per campaign standing orders.
- Every cycle follows `skill_iii_cycle.md` (7-step: Measure → Orient → Select → Implement → Re-measure → Validate → Record).
- Cycle 100 runs `skill_decadal_aar.md` for full persona ranker review.
- After D10, M35 is the Phase 7 Campaign AAR — final closeout of Operation Rosetta.

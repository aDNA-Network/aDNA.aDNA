---
type: artifact
created: 2026-04-24
updated: 2026-04-24
status: complete
last_edited_by: agent_rosetta
tags: [artifact, aar, phase-7, d9, narrative, onboarding]
mission: m33
decadal: D9
---

# AAR — Phase 7 D9: Narrative Onboarding (Cycles 81-90)

## Ranker Scorecard

| Dimension | D8 Baseline | D9 Close | Delta |
|-----------|-------------|----------|-------|
| Findability | 4.99 | 4.99 | 0 |
| Comprehension | 5.00 | 5.00 | 0 |
| Actionability | 4.99 | **5.00** | **+0.01** |
| Trust | 5.00 | 5.00 | 0 |
| Relevance | 5.00 | 5.00 | 0 |
| Delight | 4.99 | **5.00** | **+0.01** |
| **Overall** | **4.99** | **5.00** | **+0.01** |

> Actionability +0.01: Primary driver is the Educator persona gap (4.93→4.98) — explicit time estimate (~5 min), expected output prose, and Claude Code install callout on `/get-started` directly address the single largest actionability deficit in the ranker. Delight +0.01: Homepage pain statement (honest problem framing above fold) resolves the "site feels like a pitch deck, not a tool" friction that suppressed Educator Delight to 4.95. Overall 4.99→5.00 represents Phase 7 ceiling attainment.

## Persona Ranker Matrix

| Dimension | Solo Dev | Educator | Enterprise | Researcher | Startup | Avg |
|-----------|----------|----------|------------|------------|---------|-----|
| Findability | 5.00 | 5.00 | 5.00 | 4.95 | 5.00 | **4.99** |
| Comprehension | 5.00 | 5.00 | 5.00 | 5.00 | 5.00 | **5.00** |
| Actionability | 5.00 | **4.98** | 5.00 | 5.00 | 5.00 | **5.00** |
| Trust | 5.00 | 5.00 | 5.00 | 5.00 | 5.00 | **5.00** |
| Relevance | 5.00 | 5.00 | 5.00 | 5.00 | 5.00 | **5.00** |
| Delight | 5.00 | **4.98** | 4.98 | 5.00 | 5.00 | **5.00** |
| **Overall** | **5.00** | **4.99** | **5.00** | **4.99** | **5.00** | **5.00** |

> Educator Actionability: 4.93 → 4.98 (+0.05). Primary driver: install callout + time estimate + expected output on `/get-started`. Remaining 0.02 gap: `/get-started` step 3 doesn't show actual terminal output (prose description is adequate but not as viscerally confirmatory as a screenshot or GIF). D10 carry-forward.

## Cycle Log Summary

| Cycle | Item | Change | Gate |
|-------|------|--------|------|
| 81 | I-00 | Baseline audit: pain statement absent, /get-started missing time/output/install, trust links buried | Mission file created |
| 82 | I-01 | `.hero-problem` paragraph: "AI agents re-read your whole project every session — wasting tokens, losing decisions, rebuilding context that already existed." CSS border-left accent. | PASS 52/52 |
| 83-84 | I-02/I-03 | `/get-started`: time estimate (~5 min), expected-output `Callout tip`, Claude Code prereq `Callout info` with install command | PASS 52/52 |
| 85 | I-04 | Hero trust links row: GitHub + Specification links visible on first fold | PASS 52/52 |
| 86 | I-05 | Steps 02-03 descriptions problem-first: "Without a map, agents blast through irrelevant files…" / "Context windows close and wipe progress…" | PASS 52/52 |
| 87 | I-06 | Content Strategist review: all D9 items resolve F-03/F-08. Carry-forward: F-02 (what-is-adna depth). Minor: "tokens" jargon LOW. | No code changes |
| 88 | I-07 | Information Architect review: funnel 2-click path clean, trust links fold-visible. Carry-forward: what-is-adna CTA scent. | No code changes |
| 89 | I-08 | Newcomer Stress-Tester: 60-sec scan clears What/Why/How. Install barrier removed. No critical blockers. | No code changes |
| 90 | I-09 | D9 decadal AAR (this file). Ranker 5.00 attained. D10 priority queue seeded. | — |

## Reviewer Findings

**Content Strategist (cycle 87)**: 0 blocking findings. Pain statement resolves F-03 ("why does aDNA exist?" now answered above fold). `/get-started` callouts resolve F-08 (time estimate + expected output + install pointer). Carry-forward: F-02 (`/learn/what-is-adna` page content depth — still ~130 author words, under-delivers on CTA weight).

**Information Architect (cycle 88)**: 0 blocking findings. Homepage→get-started→step-1 funnel: 2 clicks, clear scent. GitHub + spec links now fold-visible (trust scent resolved). Carry-forward: `/learn/what-is-adna` CTA/page scent gap; nav item overlap (Patterns ↔ How) persists from D7 audit.

**Newcomer Stress-Tester (cycle 89)**: 0 blocking findings. Post-D9 60-second scan: What ✓ ("an open standard for organizing project knowledge"), Why ✓ ("agents waste tokens re-reading your project"), How ✓ ("folder layout with governance files + live step demos"). Install barrier resolved. Time estimate visible. Expected output described. New minor: "genome of your project" metaphor in hero-lead reads as brand-confident but may confuse complete newcomers (LOW — supported by subtitle clarification).

## D10 Priority Queue (Teach-by-Example — Cycles 91-100)

D10 focus: deepen the site's self-demonstrating layer — show aDNA working, not just describe it. The site scores 5.00 on Delight but the Educator persona hovers at 4.98-4.99 because it can *describe* aDNA but rarely *shows* it in the context of real educational workflows. Mandatory Reviewer Lens Pass: Educator persona + Content Strategist.

| Priority | Item | Source | Severity |
|----------|------|--------|----------|
| P1 | `/learn/what-is-adna` content depth — expand from ~130 to ~800 words with diagram, worked example (CLAUDE.md snippet), and self-reference to this vault | F-02 (Content Strategist carry-forward, D4+D9) | HIGH |
| P2 | `/get-started` step 3 terminal output — show what `claude` prints when it reads a CLAUDE.md for the first time (screenshot or ASCII block) | D9 Educator gap 4.98 | MEDIUM |
| P3 | Nav item overlap fix — "Patterns" and "How" both route to operational content; consolidate or relabel | F-09 (IA carry-forward, D7) | LOW |
| P4 | `/learn/what-is-adna` self-reference — add at least 2 wikilinks and 1 concrete vault file path | F-06 (Content Strategist, D4 audit) | LOW |
| P5 | Hero metaphor softening — add one-line parenthetical after "genome of your project" for true newcomers | D9 Newcomer finding | LOW |

## What Worked

- Naming the problem above the fold is the highest Comprehension/Delight ROI action in D9 — "wasting tokens, losing decisions, rebuilding context" is immediately legible to both developer and non-developer readers
- Using `<Callout>` component on `/get-started` (prereq + expected output) required zero new CSS and is semantically accessible — the right tool was already in the component library
- Problem-first reframe for steps 02-03 reads more naturally than benefit-first; the "you were burned by this before" opening creates reader identification before the solution

## What Didn't Work / Lesson

- Attempted to stage individual cycles from a single-file edit (index.astro) — can't split commits by logical section when everything is in one file. Batched cycles 82+85+86 into one commit, which is acceptable but breaks the single-cycle commit discipline. Future: plan multi-cycle edits across separate files when possible.
- `/get-started` expected terminal output described in prose, not shown — ideally a real terminal screenshot would be more viscerally confirmatory. Deferred to D10 as P2.

## Follow-Up (D10 Setup)

1. Update STATE.md to reflect D9 close at ranker 5.00 and D10 queued
2. Update campaign doc phase-7 progress block
3. Create M34 mission file for D10: Teach-by-Example (cycles 91-100)
4. Mandatory Reviewer Lens Pass before cycle 97: Educator persona + Content Strategist

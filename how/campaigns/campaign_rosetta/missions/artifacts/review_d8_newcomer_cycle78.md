---
type: review
reviewer: newcomer_stress_tester
decadal: D8
cycle: 78
created: 2026-04-24
status: complete
---

# Newcomer Stress-Tester Review — D8 Interaction Depth (Cycle 78)

60-second homepage scan + first-contact evaluation of tutorials, diagrams, and CTAs.

## 60-Second Homepage Scan

| Question | Result | Evidence |
|----------|--------|----------|
| **What** is aDNA? | Partial YES | Hero: "Agentic DNA for AI-ready projects." + trust strip. Comprehensible but thin. |
| **Why** does it exist? | NO | Pain statement ("agents waste tokens, forget context across sessions") is still absent above the fold. The step-demos show HOW but never name the PROBLEM they solve. |
| **How** does it work? | **IMPROVED** | Step-demos (Structure → Orient → Execute) now show concrete code artifacts. A newcomer can see a directory tree, a CLAUDE.md excerpt, and a mission YAML — actual evidence of what aDNA looks like. This directly addresses F-03 from the D7 audit. |

**60-second verdict**: The "How" has improved significantly (F-03 partial fix). The "Why" gap remains — this is the D9 carry-forward.

## Diagram First Contact
Checked three concept pages as cold reads:

**Triad page**: Diagram appears before `## Overview` text. `graph LR: what/—Knowledge ↔ how/—Operations ↔ who/—People`. A newcomer reading this first gets the three-part mental model before any prose. **Excellent pre-text orientation.**

**Convergence page**: `Campaign (100+ files) → Mission (5–10 files) → Objective (2–3 files) → Session (1 context window)`. The funnel pattern is immediately comprehensible without prior aDNA knowledge. **Pass.**

**Agentic Literacy page**: `L0 — Aware → L1 — User → L2 — Builder → L3 — Architect`. Clean four-step progression — a newcomer knows exactly where they are in the journey before reading. **Pass.**

## TryInClaudeCode CTA First Contact
Evaluated as a newcomer landing on the "First CLAUDE.md" tutorial:

- CTA text: "Try "Create Your First CLAUDE.md" in Claude Code"
- Description: "Claude Code is Anthropic's official CLI. Run this tutorial step by step..."
- The phrase "Anthropic's official CLI" assumes the reader knows what CLI means.

**Finding [LOW]**: Add a one-sentence plain-language parenthetical: "Claude Code is Anthropic's official CLI (a terminal tool for AI-assisted development)." This costs ~8 words and removes the jargon barrier for true newcomers.

## Clipboard-Copy Discoverability
At desktop, copy buttons appear on hover. A newcomer won't know to hover. The button is invisible until interaction.

**Finding [LOW]**: This is a known UX tradeoff (hover affordance is industry standard for copy buttons). The mobile experience (always visible) is better. Accepted at v1. Consider adding a `title` attribute tooltip as a minimal hint.

## Onboarding Scent Check
Checked the path: Homepage → "Get Started" → first tutorial → CTA.

- Homepage → `/get-started/`: scent holds (learn aDNA → start here)
- `/get-started/` → first tutorial (`/learn/tutorials/first-claude-md`): clear link
- Tutorial page → TryInClaudeCode CTA: lands at the bottom after the content. **Appropriate.**

**No scent breaks found.**

## D9 Carry-Forward (for next decadal)

| ID | Finding | Severity | Owner |
|----|---------|----------|-------|
| F-03-remain | Pain statement ("why aDNA exists") absent from homepage above fold | HIGH | D9 Narrative Onboarding |
| F-08-remain | `/get-started` lacks expected terminal output and time estimate | LOW | D9 Narrative Onboarding |
| CTA-jargon | "official CLI" jargon in TryInClaudeCode CTA | LOW | D8 cycle 79 or D9 |

## Summary
- **Blocking findings**: 0
- **D8 improvements confirmed**: Step-demos substantially address the "How" gap in F-03; concept diagrams add strong first-contact comprehension
- **Non-blocking findings**: 2 (CTA jargon, copy button hover discoverability)
- **D9 carry-forwards**: F-03 pain statement, F-08 expected output — both are D9 Narrative Onboarding scope

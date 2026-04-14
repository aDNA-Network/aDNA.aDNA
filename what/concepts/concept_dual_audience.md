---
type: concept
created: 2026-04-13
updated: 2026-04-13
status: active
difficulty: foundational
spec_section: "§4.2 CLAUDE.md, §4.5 AGENTS.md, §4.6 README.md"
dual_audience: true
last_edited_by: agent_stanley
tags: [concept, dual_audience, writing, communication, feynman, foundational]
related_concepts: [concept_governance_files, concept_triad, concept_knowledge_graph]
related_patterns: [pattern_plain_language_opening, pattern_progressive_depth]
---

# Dual Audience — Writing for Developers and Everyone Else

## Overview

Dual-audience writing is aDNA's communication discipline: every content file must be technically precise for developers building with the standard AND genuinely clear for newcomers understanding what it is. Neither audience is sacrificed for the other.

## Why This Matters

Most technical documentation picks a side. Developer docs assume you already know the domain — they're precise but impenetrable to outsiders. User guides explain things simply — but strip out the technical depth that developers actually need. The result is two parallel documents that drift apart over time, or one document that serves neither audience well.

aDNA refuses this trade-off. A single concept file — like the one you're reading right now — must work for both audiences simultaneously. A developer should be able to find spec section numbers, implementation details, and structural rules. A product manager, educator, or curious newcomer should be able to understand the core idea without hitting a wall of jargon.

Why insist on this? Because aDNA is a knowledge architecture that both humans and AI agents navigate. If a concept file is only legible to developers, then a non-technical project lead can't understand what their agents are doing. If it's only legible to beginners, agents miss the precision they need to implement correctly. The architecture serves a mixed audience by nature — the documentation must match.

This is the Feynman principle applied to documentation: if you can't explain it simply, you don't understand it well enough to document it. And if you can't document it precisely, nobody can build with it reliably.

## How It Works

### The Structure: Layered Depth

Dual-audience writing in aDNA follows a consistent structural pattern. Every concept, pattern, and tutorial file moves through layers of increasing depth:

| Section | Audience | Purpose |
|---------|----------|---------|
| **Overview** | Both | 1-2 sentence summary — plain language, no prerequisites |
| **Why This Matters** | Newcomers first | Metaphor-driven explanation, no jargon, builds intuition |
| **How It Works** | Developers first | Technical detail, spec references, tables, implementation rules |
| **See It In Action** | Both | Self-referential example — the vault demonstrates the concept |
| **Related** | Both | Wikilinks to connected concepts, patterns, tutorials |

The key insight is *layering*, not *simplifying*. The "Why This Matters" section doesn't dumb things down — it provides a different kind of understanding. The mental model and metaphor give a newcomer the intuition they need to then read the technical section productively. For developers, the plain-language section is a sanity check: if the metaphor doesn't align with the technical spec, something is wrong with one of them.

### The Opening Rule

aDNA enforces a concrete quality gate: every concept and pattern file MUST begin with 1-3 sentences that a 14-year-old could follow. This is the **plain-language opening** gate.

The 14-year-old test isn't about targeting 14-year-olds. It's a forcing function. If you can't express the core idea without assumed domain knowledge, you haven't distilled the concept down to its essence. The opening is the hook that invites the non-technical reader in, and it's the summary that the technical reader uses to verify they're reading the right file.

### Spec Citations and Plain Language

aDNA requires that normative claims reference the upstream standard with section numbers (e.g., "§4.2 CLAUDE.md"). This serves both audiences:

- **For developers**: Spec references are traceable. They can verify claims, check for updates, and find related normative requirements.
- **For newcomers**: Seeing "(§4.2)" signals "this isn't just one person's opinion — it's a defined standard." The reference builds credibility without requiring the reader to look it up.

The balance is: plain-language claim first, then spec citation. Never lead with the section number.

### The Self-Reference Discipline

Every content file must cite at least one concrete example from the vault itself. This is the **self-reference check** quality gate. Self-reference serves both audiences:

- **For newcomers**: Abstract concepts become tangible. "Open this file and you'll see the pattern in action" is far more effective than "here is a theoretical description of the pattern."
- **For developers**: Self-referential examples are verifiable. The reader can navigate to the referenced file and confirm the claim. If the claim is wrong, the vault has a bug — and bugs are fixable.

### Quality Gates as Enforcement

Dual-audience writing is enforced through campaign quality gates, not just guidelines. In this vault, every content file must pass:

1. **Dual audience test** — reviewed via `skill_dual_audience_review.md`
2. **Self-reference check** — reviewed via `skill_self_reference_check.md`
3. **Spec citation** — normative claims reference `adna_standard.md` sections
4. **Plain-language opening** — first 1-3 sentences pass the 14-year-old test
5. **Cross-linking** — 2+ wikilinks to related content
6. **Frontmatter complete** — all required metadata fields populated

Gates 1, 2, and 4 directly enforce dual-audience quality. Without enforcement, dual-audience writing degrades to "developer docs with a one-line summary" — technically compliant but practically single-audience.

## See It In Action

This file is itself a dual-audience demonstration. Examine how it's structured:

- **The opening sentence** uses no jargon: "every content file must be technically precise for developers AND genuinely clear for newcomers." A 14-year-old could follow that.
- **"Why This Matters"** uses a concrete comparison (developer docs vs. user guides) rather than abstract principles. No spec references, no aDNA terminology beyond what's been introduced.
- **"How It Works"** introduces spec sections (§4.2, §4.5, §4.6), quality gates, and structural patterns. A developer can reference these directly.
- **This section** points you to the actual vault structure so you can verify the claims yourself.

Now look at the M01 concepts for comparison. Open [[what/concepts/concept_triad|concept_triad.md]] — it opens with "Imagine you're moving into a new house with hundreds of boxes." That's the 14-year-old opening. Then it moves to the question test table, spec references (§3.1), and deployment form details. Same pattern: metaphor → mechanism → self-reference.

The campaign governance file (`how/campaigns/campaign_rosetta/CLAUDE.md`) codifies this as a voice guide: "Warm and precise, anti-jargon-first. Channel the Feynman principle." The voice applies to every file in the campaign, and the quality gates ensure it's not just aspirational.

## Related

- [[what/concepts/concept_governance_files|Governance Files]] — where CLAUDE.md and README.md demonstrate the agent/human audience split
- [[what/concepts/concept_triad|The Triad]] — a foundational concept that models the dual-audience pattern in its own content
- [[what/concepts/concept_knowledge_graph|Knowledge Graph]] — the connected structure that dual-audience files navigate through wikilinks

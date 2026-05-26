---
type: artifact
artifact_id: m51_dimension_framework
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission: mission_adna_str_p5_m51_research
created: 2026-05-25
updated: 2026-05-25
status: ratified
last_edited_by: agent_stanley
tags: [artifact, m51, v8, p5, research, dimension_framework, 5_dimensions, 10_persona_dimensions_mapping, m50_visual_methodology_consumer, m50_persona_bench_consumer]
---

# M5.1 Dimension Framework — 5 canonical research dimensions

> **Purpose**: Define the 5 canonical dimensions every M5.1 per-target dossier is structured against. Consolidates the original M5.1 scope (design / voice / onboarding / docs patterns; campaign master Phase 5 row pre-M5.0-amendment) with the M5.0 amendment scope (visual identity + diagram quality + infographic patterns + page-bloat anti-patterns; campaign master Phase 5 row post-M5.0-amendment line 197) into a single dimension schema. Cited by the per-target dossier template (`m51_target_dossier_template.md`), every per-target dossier (`m51_dossier_*.md`), and the M5.2 persona authoring brief (forward-integration; persona viewpoints bind to these dimensions).

## §1 The five dimensions

| # | Dimension | Core question the dimension answers |
|---|---|---|
| **D1** | **Visual Identity & Brand Voice** | Does the project look distinct, intentional, and trustworthy at first glance? |
| **D2** | **Diagram & Infographic Patterns** | How does the project visualize technical concepts so they land for both technical and non-technical readers? |
| **D3** | **Onboarding & First-Contact** | From first impression to first successful use, how does the project lead the reader through? |
| **D4** | **Docs Architecture & Voice** | Once a reader is engaged, can they find, comprehend, and act on the documentation — without bloat, redundancy, or jargon-first prose? |
| **D5** | **Community & Trust Signals** | Why should the reader believe this project will still be here in 6 months and that contributing/depending on it is safe? |

### D1 — Visual Identity & Brand Voice

**What we look at**: design language, color palette, typography, hero/landing image style, OG cards and social previews, illustration/icon system, decorative-vs-functional balance, brand voice (terse / playful / authoritative), opening 30 seconds of the homepage.

**Why it matters for aDNA**: aDNA is a knowledge-architecture standard — "looks intentional" is the first signal of credibility for a methodology project. The D11 decadal (Visual Identity v2 + Image Regen) will lift the strongest patterns from this dimension.

### D2 — Diagram & Infographic Patterns

**What we look at**: system / architecture diagrams (style, abstraction level, mental-model fidelity), sequence diagrams, comparison tables, decision trees, before/after illustrations, animated explainers, when text is preferred over diagram and vice versa, anti-patterns (overdetailed diagrams, decorative-only diagrams, diagrams that contradict the prose).

**Why it matters for aDNA**: the triad (WHO/WHAT/HOW) + lattice composition + execution hierarchy all need visual exposition. The D13 decadal (Infographic Generation) will pattern-match against this dimension.

### D3 — Onboarding & First-Contact

**What we look at**: README structure and length, the first 5 minutes (what the reader can do after install + first command), install flow (curl-pipe-sh vs package manager vs source build), demo videos / GIFs, signup-to-first-success time for hosted products, "Hello world" quality, missing-prerequisite handling.

**Why it matters for aDNA**: the v8 north-star is "easy and fluid way to build/operate/utilize context graphs" — onboarding is the make-or-break surface. The D14 decadal (README & First-Contact Polish) consumes this dimension end-to-end.

### D4 — Docs Architecture & Voice

**What we look at**: information architecture (concept-first vs task-first vs reference-first), navigation (sidebar/topbar/search/keyboard), explanation quality (Feynman-test pass for non-experts), dual-audience tradeoffs (when one doc serves both technical and non-technical readers vs separate tracks), conciseness, **page-bloat anti-patterns** (verbose tutorials, redundant FAQs, gratuitous depth, multi-page splits that should be single pages, single pages that should be multi-page splits), glossary/reference treatment, code-example quality.

**Why it matters for aDNA**: the dual-audience test (project SO #7) is load-bearing. The D12 (Clarity & Conciseness), D15 (Persona Page Consolidation), D16 (Reference & Glossary Streamline), D17 (Cross-Page Narrative Coherence) decadals all draw from this dimension.

### D5 — Community & Trust Signals

**What we look at**: contribution paths (CONTRIBUTING.md quality, "good first issue" labeling, PR turnaround), changelog / release cadence + transparency, social proof (GitHub stars/forks but also testimonials, case studies), support channels (Discord, forums, paid), license clarity, security policy, governance transparency (RFC process, ADRs), about-the-makers transparency, dependency posture.

**Why it matters for aDNA**: trust is the gating factor for any methodology project — the reader has to bet on you. Community + trust signals appear across multiple decadals (D11 typography for trust cues, D14 first-contact trust, D18 visual hierarchy of trust signals, D20 adversarial capstone testing trust under pressure).

## §2 Mapping to the M5.0 21-persona 10-dimension scoring schema

The M5.0 21-persona bench expansion (`m50_persona_bench_expansion.md`) defines 10 scoring dimensions: 6 primary inherited from Rosetta D1-D10 (Findability + Comprehension + Actionability + Trust + Relevance + Delight) + 4 NEW secondary from operator priorities (Visual_Clarity + Cognitive_Load + Conciseness + Explanation_Quality). Every M5.1 finding maps to ≥1 of the 5 research dimensions above AND ≥1 of these 10 persona scoring dimensions. The mapping is many-to-many:

| Persona scoring dim | Primary M5.1 research dim(s) | Secondary M5.1 research dim(s) |
|---|---|---|
| Findability | D4 | D3 |
| Comprehension | D4 | D2 |
| Actionability | D3 | D4 |
| Trust | D5 | D1 |
| Relevance | D4 | D3 |
| Delight | D1 | D2 |
| Visual_Clarity (NEW) | D1 + D2 | — |
| Cognitive_Load (NEW) | D4 | D2 |
| Conciseness (NEW) | D4 | D3 |
| Explanation_Quality (NEW) | D4 | D2 |

**Consumer contract**: M5.2 persona authoring (11 NEW personas) inherits this mapping — every NEW persona's authored viewpoint cites which of the 5 M5.1 dimensions its evaluation lens primarily reads against. M5.3+ decadal cycles (D11-D20) consume the same mapping bidirectionally — per-cycle 5-question Q&A protocol (per `m50_visual_inspection_methodology.md`) routes each question to ≥1 dimension and ≥1 persona scoring dim.

## §3 What goes IN a per-target dossier section per dimension

Every per-target dossier (`m51_dossier_<target>.md`) has one section per dimension (5 sections D1-D5). Within each dimension section, the same six structured fields appear:

1. **One-paragraph characterization** of the target's posture on this dimension (≤ 80 words; the headline takeaway).
2. **3+ evidence excerpts** — each ≤ 3 sentences, each with a citation URL (canonical docs page, landing page, blog post, GitHub README). Direct quote OR concise paraphrase + the canonical source.
3. **≥ 1 pattern excerpt** — a specific lift-worthy pattern (named where possible, e.g., "Tailwind's progressive utility-class tour").
4. **≥ 1 anti-pattern excerpt** — a specific avoid-worthy pattern observed on this target OR in adjacent OSS targets (named where possible).
5. **Lift-or-avoid recommendation** — one sentence: "aDNA should LIFT [pattern] for D{11..20} decadal [N]" OR "aDNA should AVOID [pattern]; risk = [X]".
6. **Persona-binding hint** — which 1-3 of the 21-persona bench would most cleanly score against this dimension on this target (e.g., "Visual Designer + Infographic Specialist for D2 on Astro").

## §4 Per-target depth contract

| Field | Minimum | Stretch |
|---|---|---|
| Evidence excerpts per dimension | 3 | 5 |
| Pattern excerpts per dimension | 1 | 3 |
| Anti-pattern excerpts per dimension | 1 | 2 |
| Lift-or-avoid recommendations per dimension | 1 | 3 |
| Persona-binding hints per dimension | 1 (1-3 personas named) | 2 (2-4 personas) |
| Total per-target dossier length | ~600-1,000 lines | ~1,200-1,500 lines |

S1 trio targets at minimum depth; S2 + S3 targets may stretch where the target merits it (Tailwind D1+D2 stretch likely; Linear D3 stretch likely).

## §5 Cross-references

- **Mission spec**: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m51_research.md`
- **M5.0 visual inspection methodology** (substrate; per-cycle Q&A protocol bound to these dimensions): `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_visual_inspection_methodology.md`
- **M5.0 21-persona bench expansion** (consumer; persona scoring dims mapped to research dims here): `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion.md`
- **M5.0 10-decadal theme set** (consumer; D11-D20 decadals reference these dimensions): `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_decadal_theme_set.md`
- **Per-target dossier template**: `m51_target_dossier_template.md`
- **S1 per-target dossiers**: `m51_dossier_rust.md` + `m51_dossier_astro.md` + `m51_dossier_stripe.md`
- **Standing-Order #7 (dual audience)**: project CLAUDE.md (D4 stretch test)
- **v8 north-star**: `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/project_adna_lattice_ux_goal.md` (D3 + D4 anchor)

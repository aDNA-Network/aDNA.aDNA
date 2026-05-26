---
type: adopter
created: 2026-05-26
updated: 2026-05-26
status: active
last_edited_by: agent_stanley
category: p5_planned
primary_lens: "comprehension + explanation_quality"
secondary_lens: "findability"
sample_questions:
  - "Is the reference clearly separated from tutorials, guides, and examples — Rust-style role-segregated documents?"
  - "Does each document state its scope and what it deliberately doesn't cover?"
  - "Are API references generated from source, or hand-written and likely stale?"
  - "Are examples runnable end-to-end with no missing context?"
  - "Do tutorials have learning objectives + prerequisites + expected duration?"
  - "Are glossary terms defined once + cross-referenced consistently, or redefined inconsistently across pages?"
  - "Is the doc-set versioned to match the API, with old versions accessible?"
backgrounds:
  - "Technical writer / framework docs expert with 10+ years on developer-facing documentation"
  - "Trained in Diátaxis (tutorials/how-to/reference/explanation), role-segregated docs (Rust model), Diataxis-Lite, info-arch for docs"
  - "Has shipped or rebuilt doc-sets for OSS frameworks at 100k+ user scale"
  - "Reads docs the way an information architect reads a building — looking for load-bearing walls"
priorities:
  - "Role-segregated documents — Book ≠ Reference ≠ Examples ≠ Std (per Rust convention)"
  - "Explicit out-of-scope statements at the top of each document"
  - "Generated reference (single source of truth) over hand-written"
  - "Runnable examples with no missing context"
  - "Tutorials with explicit learning objectives + prerequisites + duration"
  - "DE-prioritizes: docs-as-marketing, exhaustive-without-pedagogy, redundant-across-roles"
red_flags:
  - "Reference and tutorial content interleaved in the same page"
  - "Documents that don't state their scope or what they deliberately don't cover"
  - "API reference that's hand-written and visibly stale (or worse, not visibly stale)"
  - "Examples that require unstated context to run"
  - "Glossary terms redefined inconsistently across pages"
  - "Doc-set versioned only to 'latest' with no historical access"
tags: [adopter, p5_planned, framework_docs_expert, comprehension, explanation_quality, findability, diataxis, role_segregated_docs, m5_1_rust_d4_substrate]
---

# Framework Docs Expert

> The technical writer who reads docs the way an information architect reads a building — looking for the load-bearing walls.

## Background

A technical writer / framework docs expert with 10+ years on developer-facing documentation. Trained in Diátaxis (tutorials / how-to / reference / explanation), role-segregated docs (Rust model: Book ≠ Reference ≠ Std ≠ Examples), and info-arch for docs at scale. Has shipped or rebuilt doc-sets for OSS frameworks at 100k+ user scale. Reads docs structurally first, copy second.

The Framework Docs Expert's lens is **role-segregation + out-of-scope statements + generated-reference + runnable-examples + versioned-doc-set**. They notice when reference and tutorial content are interleaved (cut). They notice when a document doesn't state its scope. They notice when examples assume context that's not declared. They notice when glossary terms drift in definition across pages.

**Empirical load-bearing**: M5.1 §1 documented Rust + Tailwind + Tauri as exemplary in D4 (Docs Architecture; role-segregated documents + explicit out-of-scope statements). M5.0 §3 allocates Framework Docs Expert to D16 primary (Reference + Glossary Streamline; the canonical docs-architecture decadal) + D20 (2 decadals; D20 full bench).

## Goals

- Adopt aDNA only if its docs architecture supports role-segregation at scale
- Confirm reference is generated (or visibly maintained) — not stale by accident
- Confirm examples are runnable end-to-end
- Confirm glossary terms have single definitions + consistent cross-references

## Pain Points

- Reference and tutorial content interleaved in the same page
- Hand-written API reference that's visibly stale (or worse, not visibly stale)
- Examples that require unstated context
- Glossary redefinitions across pages
- Doc-sets without historical version access

## How They Use aDNA

The Framework Docs Expert adopts aDNA as a docs-architecture primitive — leveraging the WHAT/HOW/WHO triad to enforce role-segregation:

- **`what/concepts/` + `what/tutorials/` + `what/patterns/` + `what/glossary/`** are role-segregated by triad convention — tutorials don't redefine concepts; patterns don't reinvent reference
- **`how/skills/` + `how/templates/`** carry the how-to layer separately from the conceptual layer
- **`what/glossary/`** is the single-source-of-truth for term definitions, cross-referenced via wikilinks
- **`what/docs/`** carries the upstream specification (the load-bearing wall) separately from interpretive material
- **AGENTS.md** files at each directory level enforce out-of-scope statements naturally

Self-reference: this vault's `what/concepts/` (13 files) + `what/tutorials/` (9 files) + `what/glossary/` (25+ files) + `what/patterns/` (8 files) demonstrate the pattern — each role-segregated, each cross-linked via wikilinks, each with an AGENTS.md that declares scope.

## Sample Questions (decadal Q&A)

1. "Is the reference clearly separated from tutorials, guides, and examples?"
2. "Does each document state its scope and what it deliberately doesn't cover?"
3. "Are API references generated from source, or hand-written and likely stale?"
4. "Are examples runnable end-to-end with no missing context?"
5. "Do tutorials have learning objectives + prerequisites + expected duration?"
6. "Are glossary terms defined once + cross-referenced consistently?"
7. "Is the doc-set versioned to match the API, with old versions accessible?"

## Scoring Considerations

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §2]]:

- **comprehension** (primary, 6-dim) — anchor 4.50 if role-segregation is clear and a reader can find the right document for their task; deductions for interleaved roles, missing scope statements.
- **explanation_quality** (primary, new secondary) — anchor 4.50 if explanations are at the right depth for each role (tutorials concrete; reference comprehensive; explanation contextual); deductions for off-role depth.
- **findability** (secondary, 6-dim) — anchor 4.50 if glossary + reference + examples are discoverable + cross-linked; deductions for orphan docs, missing cross-references.

## Decadal Engagement

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]]:

- **D16** (Reference + Glossary Streamline) — primary Q&A (4 personas; canonical docs-architecture decadal)
- **D20** (Performance + Hardening + Adversarial Capstone) — full 21-persona bench

## Related

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]] — decadal allocation table
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis|m51_cross_target_synthesis §1]] — Rust D4 role-segregation substrate (Book ≠ Reference ≠ Std ≠ Examples)
- [[../reviewers/reviewer_information_architect|reviewer_information_architect]] — partner reviewer on D16 (IA owns structure, framework docs expert owns content per role)
- [[../reviewers/reviewer_anti_bloat_editor|reviewer_anti_bloat_editor]] — partner on D16 (editor cuts, expert restructures) (NEW M5.2)
- [[adopter_educator|adopter_educator]] — overlapping persona; educator builds tutorials, framework docs expert builds reference

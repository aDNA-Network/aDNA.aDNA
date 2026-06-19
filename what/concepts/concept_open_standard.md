---
type: concept
created: 2026-04-13
updated: 2026-04-13
status: active
difficulty: intermediate
spec_section: "§1 Introduction, §3 Triad Architecture, §11 Federation Protocol"
dual_audience: true
last_edited_by: agent_stanley
tags: [concept, open_standard, extensibility, federation, governance, intermediate]
related_concepts: [concept_triad, concept_governance_files, concept_fair_metadata, concept_ontology]
related_patterns: [pattern_base_extension, pattern_fork_customize]
---

# Open Standard — Why aDNA Is a Standard, Not a Product

## Overview

aDNA is an open standard — a publicly documented specification that anyone can implement, extend, and build upon without permission or payment. The upstream spec (aDNA Standard v2.1, published at `github.com/LatticeProtocol/Agentic-DNA`) defines the normative rules. Individual projects implement the standard, extending it for their domain while maintaining compatibility with the shared core.

## Why This Matters

Think about how roads work. Every country has roads, but they all follow standards — lane widths, traffic signs, signal colors. You don't need permission to build a road. You don't pay a license to put up a stop sign. The standards exist so that a driver from one city can navigate another city's roads without relearning everything. And any city can add its own features — bike lanes, roundabouts, local signage — as long as the core conventions hold.

aDNA works the same way. The standard defines the basics: the what/how/who triad, governance files, session tracking, FAIR metadata. Any project can implement these basics and get a working AI-native knowledge architecture. Then each project extends for its domain — a biotech lab adds molecular entity types, a startup adds customer personas, a research group adds publication workflows. The extensions are different, but the core is shared. An agent that understands one aDNA project can orient in any other.

This is the opposite of a proprietary platform. There's no vendor lock-in, no subscription, no permission required. The spec is public. The template is forkable. The standard grows through community contribution, not corporate roadmap.

## How It Works

### The Spec/Implementation Split

aDNA maintains a clear separation between the standard (what's normative) and implementations (what projects build):

| Layer | What It Is | Who Controls It | Example |
|-------|-----------|----------------|---------|
| **Upstream spec** | aDNA Standard v2.1 — normative rules using RFC 2119 keywords (MUST, SHOULD, MAY) | Open governance (github.com/LatticeProtocol/Agentic-DNA) | "Every instance MUST use the what/how/who triad" |
| **Base template** | `.adna/` — ready-to-fork implementation of the spec | Upstream maintainers | Governance files, triad directories, templates, skills |
| **Project instance** | A forked and customized aDNA project | Project owner | This vault (`aDNA.aDNA/`), any `.aDNA/` project |

The spec defines the rules. The template makes them easy to adopt. The instance is where real work happens. Changes flow downstream (spec → template → instance) but discoveries flow upstream (instance finds a gap → proposes improvement → spec evolves).

### Base/Extension Architecture

The standard defines 16 base entity types organized across the triad (§5). These are the shared vocabulary — every aDNA project speaks this language:

| Triad Leg | Base Entities | Count |
|-----------|--------------|-------|
| WHO | `governance`, `team`, `coordination`, `identity` | 4 |
| WHAT | `context`, `decisions`, `modules`, `lattices`, `inventory` | 5 |
| HOW | `campaigns`, `missions`, `sessions`, `templates`, `skills`, `pipelines`, `backlog` | 7 |

Projects extend by adding domain-specific entity types under the appropriate triad leg. Extensions MUST NOT modify base types — they add alongside them:

| Extension | Triad | Added By |
|-----------|-------|----------|
| `concept`, `tutorial`, `pattern`, `glossary_entry` | WHAT | This vault (aDNA.aDNA) |
| `community`, `adopter` | WHO | This vault |
| `workshop`, `publishing` | HOW | This vault |

This base/extension architecture means any aDNA-aware tool can understand the base layer of any project, even if it doesn't know the extensions. Interoperability by default.

### Federation: Interoperability in Action

The federation protocol (§11) is where the open standard becomes practically useful across project boundaries. It defines:

- **A URI scheme** (`lattice://instance/lattice_name/node_id`) for cross-instance references
- **A 5-capability lifecycle** (validate → export → share → import → compose) for lattice exchange
- **Ontology unification** (a 4-step merge algorithm) for combining entity types from different instances
- **Version policies** (locked, patch, minor, latest) for managing dependency drift

Federation doesn't require a central authority. Two aDNA instances can share lattices directly, peer-to-peer, using the standard's conventions. The only requirements are FAIR metadata (for trust) and schema compliance (for compatibility).

### The Fork-and-Extend Pattern

Adopting aDNA follows a consistent pattern:

1. **Fork** the base template (`.adna/`) into a new project directory
2. **Customize** governance files (CLAUDE.md persona, MANIFEST.md identity, STATE.md operational context)
3. **Extend** the ontology with domain-specific entity types
4. **Populate** with domain knowledge, workflows, and team information
5. **Federate** when ready to share lattices, context, or patterns with other instances

The fork creates a new instance that's immediately compatible with the standard. The customization makes it yours. The extension makes it domain-specific. The federation makes it part of the broader ecosystem.

## See It In Action

This vault is a living demonstration of the open standard in practice:

**The base template**: The directory `adna/` (one level up from this project in the workspace) contains the upstream template. It's symlinked as `.adna/` at the workspace root. This vault was forked from it — you can compare this project's structure against the template to see what's base and what's extension.

**Extensions**: This vault adds 10 entity types to the base 16 (see `what/concepts/AGENTS.md`, `what/tutorials/AGENTS.md`, `who/community/AGENTS.md`, etc.). Each extension follows the same patterns as the base — AGENTS.md, templates, frontmatter conventions — because the standard defines how to extend, not just what the base contains.

**Spec citations**: Throughout this vault, normative claims reference the upstream spec with section numbers (§3, §5, §10). This file you're reading cites §1, §3, §5, and §11. The vault demonstrates; the spec defines. This separation is the standard in action.

**The standing rule**: This vault's CLAUDE.md contains the rule "Never modify `.adna/` or `adna/`" — enforcing the spec/implementation boundary. The template is read-only. The instance is writable. That's the architecture of an open standard: shared core, local freedom.

## Related

- [[what/concepts/concept_triad|The Triad]] — the universal organizing principle defined by the spec that every implementation shares
- [[what/concepts/concept_governance_files|Governance Files]] — the five files the spec mandates for agent orientation
- [[what/concepts/concept_fair_metadata|FAIR Metadata]] — the metadata standard that enables trust in federated exchanges
- [[what/concepts/concept_ontology|Ontology]] — the base/extension type system the spec defines and projects customize

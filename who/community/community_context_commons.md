---
type: community
created: 2026-04-14
updated: 2026-04-14
status: active
community_type: structure
last_edited_by: agent_stanley
tags: [community, context-commons, federation, sharing]
---

# Context Commons Connection

## Overview

The Context Commons is the shared knowledge pool that emerges when individual aDNA vaults publish their best context files, patterns, and lattices for community reuse. This document explains how community contributions flow into the commons, how published knowledge gets discovered and consumed, and how the commons relates to the participation ladder.

For the full conceptual framework, see [[what/concepts/concept_context_commons|Context Commons (concept)]].

## The Feedback Loop

Individual vault work produces community knowledge through a four-stage cycle:

```
Create → Publish → Discover → Consume → Create (improved)
```

### 1. Create (In Your Vault)

All knowledge starts as project-local content. You write context files, design patterns, build lattice definitions — all for your own project's needs. No community awareness required.

**Self-reference**: This vault created 13 [[what/glossary/glossary_ontology_extension|ontology extensions]], 26 content files, and 25 glossary entries during Operation Rosetta. All of it started as project-local knowledge for teaching aDNA.

### 2. Publish (To the Commons)

When vault-local knowledge has broader value, it can be published to the commons using aDNA's federation capabilities:

- **Context files** — high-quality context on a domain topic (e.g., protein structure prediction, supply chain logistics)
- **Patterns** — reusable architectural or workflow patterns
- **Lattice definitions** — composable workflow graphs
- **Templates** — file blueprints for new entity types

Publishing requires [[what/concepts/concept_fair_metadata|FAIR metadata]]: keywords for findability, license for legal clarity, provenance for trust, and identifiers for citation. The `latlab lattice publish` command handles the mechanics.

### 3. Discover (From the Registry)

Published knowledge becomes findable through:
- **Keyword search** — FAIR metadata tags enable semantic discovery
- **Registry browsing** — `latlab lattice pull` downloads published artifacts
- **Community curation** — Stewards highlight high-quality contributions

### 4. Consume (In Other Vaults)

Discovered knowledge gets pulled into new projects:
- Context files load into `what/context/` as reusable domain knowledge
- Patterns apply to new vault architectures
- Lattice definitions compose into project-specific workflows via `latlab lattice compose`

The consuming vault benefits from community-reviewed, FAIR-annotated knowledge instead of writing everything from scratch.

## Who Participates

| Participation Level | Commons Role |
|-------------------|-------------|
| **Level 0 (User)** | Consumer — pull from the commons, no contribution required |
| **Level 1 (Contributor)** | Publisher — submit context files and improvements |
| **Level 2 (Quest Runner)** | Validator — run experiments that test commons content quality |
| **Level 3 (Steward)** | Curator — review, tag, and promote commons contributions |

See [[who/community/community_roles|Community Roles]] for full role definitions.

## Connection to Context Commons Program

The `context_commons.aDNA/` project in the Lattice workspace is the operational home for the Context Commons program. It maintains:

- Community governance (council charter, partner agreements)
- Curriculum for [[what/concepts/concept_agentic_literacy|agentic literacy]] education
- Builder and mentor networks
- Standards for community-contributed content quality

This vault (`aDNA.aDNA/`) contributes to the commons by being a reference implementation — its content demonstrates what good aDNA knowledge architecture looks like. The concepts, patterns, tutorials, and glossary entries here are candidates for commons publication once the project reaches Phase 5 (Publishing Pipeline).

## Trust and Quality

Not all published knowledge is equal. The commons uses trust signals:

| Signal | Source | Meaning |
|--------|--------|---------|
| **FAIR completeness** | Automated check | Metadata is machine-readable and findable |
| **Community review** | Steward approval | Content quality meets contribution standards |
| **Citation count** | Usage tracking | Other projects have pulled and used this artifact |
| **Quest validation** | Side-quest results | Empirical testing confirms the artifact works as described |

## Related

- [[what/concepts/concept_context_commons|Context Commons (concept)]] — full conceptual framework
- [[what/concepts/concept_fair_metadata|FAIR Metadata (concept)]] — the metadata standard enabling discovery
- [[who/community/community_roles|Community Roles]] — participation ladder
- [[who/community/community_processes|Community Processes]] — contribution workflows

---
type: adopter
created: 2026-04-14
updated: 2026-04-14
status: active
persona_type: team
technical_level: expert
domain: "computational biology / research"
deployment_form: bare
last_edited_by: agent_stanley
tags: [adopter, research, lab, science, protocols]
---

# Researcher

## Background

A principal investigator running a computational biology lab with 8 researchers, 3 AI agents, and growing experimental data. Publishes 10+ papers annually. Generates protocols, datasets, and analysis pipelines faster than the lab can organize them. New postdocs spend their first month just figuring out where things are.

## Goals

- Organize knowledge sprawl across multiple platforms into a single navigable structure
- Onboard new postdocs in days, not weeks
- Make AI agents lab-specific: load domain context so output reflects actual lab methods, not generic biology
- Enable protocol reusability and analysis pipeline sharing with collaborating labs

## Pain Points

- Knowledge scattered across Slack, Google Docs, Jupyter notebooks, and shared drives
- File naming chaos ("data_final_v3_REAL.csv") with no conventions
- New postdocs spend their first month finding things rather than doing science
- AI agents produce generic output without understanding lab-specific methods and protocols

## How They Use aDNA

Heavy ontology extension to capture domain-specific knowledge types:

- **`what/context/`** — 8 domain subtopics (protein folding, binding affinity, molecular docking, etc.), each 150-300 lines, quality-scored with token estimates
- **`what/protocols/`** — 25 experimental protocols as structured documents (ontology extension)
- **`what/datasets/`** — dataset metadata with lineage tracking and [[what/concepts/concept_fair_metadata|FAIR metadata]] (ontology extension)
- **`what/lattices/`** — analysis pipelines as composable YAML lattice definitions
- **`how/campaigns/`** — multi-month research projects decomposed into experiment-level [[what/glossary/glossary_mission|missions]]
- **`how/sessions/`** — audit trail linking agent work to specific experiments
- **Federation** — sharing validated analysis lattices with collaborating labs

**Self-reference**: This vault's context library (`what/context/` with 5 topics, 27 subtopics, ~75K tokens) mirrors what the research lab builds for their domain. The structure — topic directories with AGENTS.md indexes and token estimates — is identical; only the subject matter differs.

## Typical Ontology Extensions

| Entity | Triad | Purpose |
|--------|-------|---------|
| `protocol` | what/ | Experimental protocols (wet lab + computational) |
| `dataset` | what/ | Dataset metadata, lineage, and FAIR annotations |
| `experiment` | how/ | Individual experiment records with methods and results |
| `collaboration` | who/ | Cross-lab coordination and data sharing agreements |

## Related

- [[what/use_cases/use_case_research_lab|Research Lab Use Case]] — full narrative
- [[what/tutorials/tutorial_extend_the_ontology|Tutorial: Extend the Ontology]] — adding domain entity types
- [[what/concepts/concept_fair_metadata|FAIR Metadata (concept)]] — the metadata standard for research data
- [[what/patterns/pattern_federation_readiness|Federation Readiness Pattern]] — preparing for cross-lab sharing

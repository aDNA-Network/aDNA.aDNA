---
type: glossary_entry
created: 2026-07-02
updated: 2026-07-02
status: active
term: "Ratification Record"
spec_section: ""
see_also: [governance file, derived index, standard registers]
last_edited_by: agent_rosetta
tags: [glossary, governance, decisions]
---

# Ratification Record

## Plain-Language Definition

A ratification record is the "signed and dated" stamp added to a decision once a human has actually approved it. It names *who* approved it, *when*, and *at which review gate* — so anyone reading later can see the decision is real, not just proposed. The key rule: a robot never stamps its own approval. An agent can draft and recommend a decision, but only a named human can ratify it — the same reason you sign your own contracts rather than letting the vending machine sign them for you.

## Technical Definition

A four-field block appended to an accepted [[what/glossary/glossary_governance_file|ADR]] at ratification: **ratifier** (a named human — never an agent or persona), **gate/session reference** (the review gate or session where sign-off happened), **ratification date**, and **scope** (what the acceptance covers, including any pending co-signs). Agents author ADRs at `status: proposed` only; the transition to `accepted` requires the ratifier's block. When several ADRs are accepted together, an *N-at-once ceremony variant* records one shared gate reference across all of them. Origin: the ADR-045 incident (an ADR self-marked `accepted` without a gate) — its corrected block is the reference instance. The discipline folds into the written standard at the *proposed* v2.5 cut (ADR-046 §C3, pending the G2 operator gate — see [[what/glossary/glossary_standard_registers|Standard Registers]]).

## Usage Examples

- ADR-043 and ADR-044 were ratified together (`cc7fc3f`, 2026-06-30) under one shared gate reference — the N-at-once variant.
- An agent finishing an ADR sets `status: proposed` and stops, surfacing the decision at an operator gate for a human to ratify; only then does the [[what/glossary/glossary_derived_index|adr_index]] tally it as `accepted`.

## See Also

- [[what/glossary/glossary_governance_file|Governance File]]
- [[what/glossary/glossary_derived_index|Derived Index]] — the ADR index that tallies ratified vs. proposed
- [[what/glossary/glossary_standard_registers|Standard Registers]]

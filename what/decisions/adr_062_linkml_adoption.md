---
type: adr
adr_number: "062"
title: "LinkML adoption is a standard-level ruling housed in aDNA.aDNA — not a vault, not Context.aDNA's"
status: proposed        # ⛩ Agents author, operators ratify (§7.7). Operator routing ruling (a) taken 2026-09-24 at plan time; the adoption decision itself awaits signature.
created: 2026-09-24
updated: 2026-09-24
last_edited_by: agent_rosetta
campaign_id: ""
mission_id: ""
supersedes: ""
superseded_by: ""
probe_date: 2026-09-24
tags: [adr, linkml, schema, standard, terminal, context, housing, proposed]
---

# ADR-062 — LinkML adoption is a standard-level ruling housed in aDNA.aDNA

## Status

**Proposed.** Drafted 2026-09-24 in answer to Vauban's (Terminal.aDNA) 2026-09-21 memo
(`who/coordination/inbox/coord_2026_09_21_vauban_to_rosetta_linkml_row_and_naming.md`), which found that
Terminal's delta ledger and a schema-owner row cite **`LinkML.aDNA`** as a vault, and that no such directory
exists (`ls ~/aDNA` → none, verified here 2026-09-24; the string "LinkML" appears nowhere in this vault or in
Context.aDNA). Their question — is LinkML adoption **(a)** a standard-level ruling housed in aDNA.aDNA, **(b)** a
planned-but-unforked vault, or **(c)** folded into Context.aDNA's schema work — was put to the operator on
2026-09-24 and ruled **(a)**. This ADR is the object that ruling creates, so the reference has somewhere to point.

## Context

The standard's entity types (16 base, per ADR-035) are described in prose and YAML frontmatter, with per-object
JSON schemas only where a tool needed one (`what/lattices/lattice_yaml_schema.json`). Several vaults now publish
machine-checkable shapes for their own objects (Terminal's contracts, Context.aDNA's schema work, Canvas's
`canvas_std`), and at least one has begun citing LinkML — a YAML-native schema language with a well-defined
JSON-Schema/RDF projection — as the vocabulary those shapes would be authored in. Absent a ruling, each vault
either invents its own schema language or cites a vault that does not exist.

## Decision (proposed — three clauses)

1. **Housing.** Whether and how the aDNA standard adopts LinkML is a **standard-level decision recorded in
   `aDNA.aDNA` (this ADR and its successors)**, not the charter of a `LinkML.aDNA` vault and not a sub-decision
   of Context.aDNA. No `LinkML.aDNA` is forked by this ADR; if a Framework graph for the LinkML *toolchain*
   is later wanted, it is chartered separately and cites this ADR as its authority.
2. **Scope of adoption (to be ratified).** LinkML is the **preferred schema-description vocabulary** for any
   vault that publishes a machine-checkable shape for an aDNA entity or a cross-vault contract. It is
   **optional**: prose + frontmatter remain conformant; a vault that publishes a schema in another language is
   not nonconformant, but a LinkML rendering is the one the standard will validate against when the standard
   itself ships schemas (a later release; not this ADR).
3. **Consumption by reference.** Context.aDNA, Terminal.aDNA and any other schema-publishing vault cite this
   ADR as the authority and keep their schemas in their own `what/`; the standard never copies a vault's schema
   into `.adna/`. The standard's own entity-type schemas, when authored, live at `what/docs/` here and ride
   `skill_template_release`.

## Consequences

- Terminal.aDNA repoints its `LinkML.aDNA` references (delta ledger §B; `adna_terminal.contracts` schema-owner
  row) to `aDNA.aDNA/what/decisions/adr_062_linkml_adoption.md`. Nothing else in the fleet changes.
- A future release may add a `schema:` pointer field to entity frontmatter and a LinkML rendering of the 16 base
  types; both are release-gated and not implied here.
- If the operator declines clause 2, clause 1 still stands (the *housing* was ruled 2026-09-24) and the ADR is
  amended to say the standard takes no position on schema vocabulary.

## Ratification (§7.7)

- **Decision:** clauses 1–3 above.
- **Ratified-by:** —
- **Date:** —
- **Status:** proposed.
- **Gate / session reference:** routing ruling (a) taken by AskUserQuestion at plan time, 2026-09-24,
  `session_stanley_20260924_083249_garnier_reorientation`; adoption signature pending.

Related: [[adr_035_inventory_identity_base_entity_types]] (the 16 base types) · Context.aDNA schema work
(Prometheus) · Terminal.aDNA `annexes/annex_b01_delta_ledger.md` §B · `what/lattices/lattice_yaml_schema.json`
(the one schema the standard already ships).

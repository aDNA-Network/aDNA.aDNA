---
type: adr
adr_number: "062"
title: "LinkML adoption is a standard-level ruling housed in aDNA.aDNA — not a vault, not Context.aDNA's"
status: accepted        # ⛩ Ratified by operator Stanley 2026-10-03 (accept-all on operator_rulings_packet_20261003 row A1, at plan time) — clauses 1–3 as written + riders i/ii as a non-normative annex. Routing ruling (a) had been taken 2026-09-24.
created: 2026-09-24
updated: 2026-10-03
last_edited_by: agent_rosetta
campaign_id: ""
mission_id: ""
supersedes: ""
superseded_by: ""
probe_date: 2026-09-24
tags: [adr, linkml, schema, standard, terminal, context, housing, accepted]
---

# ADR-062 — LinkML adoption is a standard-level ruling housed in aDNA.aDNA

## Status

**Accepted — ratified 2026-10-03** (operator Stanley, accept-all ruling on [[operator_rulings_packet_20261003]] row A1; clauses 1–3 unchanged, two riders recorded in the Annex below). Drafted 2026-09-24 in answer to Vauban's (Terminal.aDNA) 2026-09-21 memo
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

## Decision (three clauses — ratified 2026-10-03)

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

## Annex (non-normative) — riders recorded at ratification, 2026-10-03

Both riders answer Vauban's (Terminal.aDNA) 2026-09-26 memo `coord_2026_09_26_vauban_to_rosetta_linkml_toolchain_without_gpl_and_housing.md` items 3 and 4 (`ack_required: true`). They bind nothing today; the word *normative* below names a future cut.

- **Rider i — the four conventions LinkML cannot express** (Vauban item 3): **present-but-null** (a key must exist and its value must be null) · **present-but-empty** (a key must exist with an empty collection) · **key-forbidden-at-any-depth** (a key name may appear nowhere in the tree) · **pattern-on-map-values** (every value of a map matches a regex). The standard records them here now as *non-normative*; they become **normative annotations in the v2.6 schema cut** (the release that ships the standard's own entity-type schemas per clause 3 — not this ADR, not v8.12). Until then a vault states them in prose beside its LinkML, as Terminal does.
- **Rider i, toolchain note.** Vauban's GPL-free validation path — `jsonschema[format-nongpl]` pinned through a `uv` override so the `format` checkers pull no GPL dependency — is recorded as the **fleet-reusable toolchain path** for anyone validating LinkML-projected JSON Schema. A recommendation, not a requirement.
- **Rider ii — where `lattice_core` lives** (Vauban item 4, K10): **with LatticeProtocol's primitives, Noether's call** (`LatticeProtocol.aDNA/what/latticeprotocol/`). Clause 1 says no `LinkML.aDNA` exists, and LatticeProtocol owns lattice semantics; a schema for the lattice primitives is a schema for *their* object. Terminal cites it there by reference (clause 3).

## Ratification (§7.7)

- **Decision:** clauses 1–3 above as written, plus riders i and ii as a non-normative annex.
- **Ratified-by:** Stanley (operator).
- **Date:** 2026-10-03.
- **Status:** accepted.
- **Gate / session reference:** accept-all ruling on [[operator_rulings_packet_20261003]] row A1, taken by AskUserQuestion at plan time, 2026-10-03, `session_stanley_20261003_213535_garnier_rulings_and_lanes`. Routing ruling (a) had been taken 2026-09-24 (`session_stanley_20260924_083249_garnier_reorientation`).
- **Scope of authority:** standard-level (this vault); binds no peer's schema; Terminal's `LinkML.aDNA` repoint (Consequences) is Vauban's act, asked for in the 2026-10-03 reply.
- **Pending co-signs:** none required.

Related: [[adr_035_inventory_identity_base_entity_types]] (the 16 base types) · Context.aDNA schema work
(Prometheus) · Terminal.aDNA `annexes/annex_b01_delta_ledger.md` §B · `what/lattices/lattice_yaml_schema.json`
(the one schema the standard already ships).

---
type: glossary_entry
created: 2026-10-16
updated: 2026-10-16
status: active
term: "Commercial Home"
spec_section: ""          # not in the standard's text (v2.5); the role is defined by aDNA.aDNA ADR-065 §3 (proposed); the holder is recorded private-side only
see_also: [open standard, access point, graph product, federation]
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
tags: [glossary, governance, estate, commercial_home, arcade]
---

# Commercial Home

## Plain-Language Definition

An open standard can have a company that stands behind it commercially — that presents it, operates the ecosystem around it as a business, and keeps the lights on — **without owning it**. That company is the standard's *commercial home*. The standard's text stays open-licensed, its development and its gates stay with the lab that writes it, and the commercial home is its **steward, not its owner**. A road can have shops along it and still be a public road.

## Technical Definition

The entity recorded as the **commercial home and steward** of the aDNA standard under the **two-estate model** — a *lab estate* (the open standard, MIT; development, licence and law in the standard's own graph) and a *company estate* (the commercial home; presentation, commercial operation of the ecosystem, the record). The relation is defined in the standard's record at [[what/decisions/adr_065_standard_position_two_estates|aDNA.aDNA ADR-065]] §3 and §4, which **cites** the two other estates' own decisions rather than restating them. Binding properties of the role: the standard's licence does not change; the commercial home never writes into the standard's graph (cross-estate writes are memos, PRs or cargo); the standard's §7.7 gates remain its operator's; and the commercial home's name **does not appear on any public surface of the standard** until the operator says "publication" — which is why this entry names the role and not the holder. Compare [[what/concepts/concept_open_standard|Open Standard]] (the governance model the role is layered on) and [[what/glossary/glossary_access_point|Access Point]] (the products the commercial home may present).

## Usage Examples

- "The standard stays MIT; the commercial home is steward, not owner" — the one sentence both estates' records agree on.
- A proposal to amend the standard's position arrives at the lab **by memo**, never by an edit to the standard's tree — the boundary rule in action.

## Self-reference

This entry is deliberately **name-free**. The holder of the role is written down in this vault's `what/decisions/adr_065_standard_position_two_estates.md` (a private-side object by ruling) and nowhere in `what/glossary/`, `site/` or the registry — the entry demonstrates the rule it describes.

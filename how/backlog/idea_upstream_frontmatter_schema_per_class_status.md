---
type: backlog_idea
status: proposed
priority: medium
created: 2026-10-04
updated: 2026-10-04
last_edited_by: agent_rosetta
filed_from: how/missions/artifacts/primer/source_inconsistencies.md I-16 (Operation Primer O3 round 2, data-engineer lens; discharged at mission_primer_followup_sweep O1)
filing_authorization: mission_primer_followup_sweep O1 (operator-summoned 2026-10-04 (h)); skill_upstream_contribution — the file is template-owned (byte-identical to .adna/what/lattices/tools/frontmatter_schema.json, verified cmp 2026-10-04), so the fix rides a release, never a local edit
upstream_target: aDNA-Network/aDNA
disposition: "v8.13 lane — validator/schema — the schema (v2.3) requires `status` unconditionally; standard §7.2 (v2.5, ADR-044) makes it optional for `directory_index` and `coordination`"
tags: [backlog, upstream, schema, frontmatter, validator, adr_044, v8_13]
---

# Idea: `frontmatter_schema.json` follows §7.2's per-class `status` profile

## Problem

`what/lattices/tools/frontmatter_schema.json` (shipped at schema v2.3) lists `status` in its unconditional `required` array. The standard's §7.2 per-class profile (v2.5, ADR-044) makes `status` optional for `directory_index` (every `AGENTS.md`) and `coordination` (every memo). A validator built from the schema therefore fails every memo and every directory index in a conformant vault — the schema contradicts the text it is supposed to enforce. Found while writing the data-engineers primer, which names the schema as the machine-readable contract (`what/docs/adna_primer_for_data_engineers.md` §7).

## Proposed shape

Move `status` out of the top-level `required` array into a per-class conditional (`if: {properties: {type: {enum: [directory_index, coordination]}}}, then: {}, else: {required: [status]}`), bump the schema's own version to match the standard it tracks, and add one red-test fixture per exempt class so the exemption is asserted, not assumed. Same change in both trees at the release (this vault's copy is the template's copy).

## Not done here

No edit to this vault's copy — it is byte-identical to the template, and a local divergence would be exactly the drift the release lint exists to catch.

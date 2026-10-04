---
type: backlog_idea
status: proposed
priority: low
created: 2026-10-04
updated: 2026-10-04
last_edited_by: agent_rosetta
filed_from: how/missions/artifacts/primer/source_inconsistencies.md I-07 (discharged at mission_primer_followup_sweep O4 — "sweep decides")
filing_authorization: mission_primer_followup_sweep O4 (operator-summoned 2026-10-04 (h)); decision taken here = defer to the v8.13 release gate, where the template is the object
upstream_target: aDNA-Network/aDNA
disposition: "v8.13 lane — question for the gate, not a change: `.adna/what/docs/aDNA_overview.md` (49 KB, updated 2026-07-03) ships in every fork and drifts in ~40 of them; the data-engineers primer (v1.0, 2026-10-04, this vault) covers the same ground against the v2.5 text"
tags: [backlog, upstream, docs, overview, primer, v8_13]
---

# Idea: decide `aDNA_overview.md`'s successor at the v8.13 gate

## Problem

The template ships `what/docs/aDNA_overview.md` (49 KB, last touched 2026-07-03) into every fork; the forks then drift. This vault does not carry it at all (verified 2026-10-04: only the template copy exists under `~/aDNA/.adna/`). Meanwhile `what/docs/adna_primer_for_data_engineers.md` v1.0 explains the same standard against the current v2.5 text, with a 46-row mechanism appendix and a reviewed correctness ledger.

## Options for the gate (no recommendation pre-decided)

1. **Refresh** the overview in `.adna/` against v2.5 at the release (a doc-only P-row).
2. **Point** the overview's header at the primer as the maintained explainer and freeze it as historical.
3. **Replace** it with the primer (a larger ruling: audience shift from general reader to data engineer).

## Not done here

Nothing in `.adna/` is touched (workspace Standing Rule 1); the primer is not re-opened (its v1.1 is its own ruling).

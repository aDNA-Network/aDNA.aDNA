---
type: backlog
status: open
created: 2026-05-24
updated: 2026-05-24
last_edited_by: agent_stanley
priority: low
scope: docs
target_vault: SiteForge.aDNA
source_vault: node.aDNA
source_mission: campaign_lattice_compliance_upgrade M20 (S1 Phase X)
tags: [backlog, siteforge, sis, sentinel, docs, doc_fix, finding_e_sibling]
---

# SIS sentinel filename — docs say `<gate>.html.pending`, runtime writes `<gate>.pending`

## Observation

`node.aDNA/siteforge/CLAUDE.md` line ~73 documents the SIS sentinel as:

> `<gate_id>.html.pending` — AD-6 sentinel; presence = in-flight; absence = ready to read

But the actual filenames produced by `SiteForge.aDNA/what/lib/sis/runtime/generator.py --write-sentinel` are `<gate_id>.pending` (no `.html.` in the middle). This causes downstream watch loops written to the doc spec (`until [ -f gate.html.pending ]…`) to trivially succeed at the negative-check (file never existed in the first place), masking the real wait condition.

Caught at M20 S1 R1 — my watch loop used `m20_round_01.html.pending` per the doc; the receiver path mismatch (Finding E) was the actual blocker but the sentinel naming would have caused a false-positive verdict-ready signal if Finding E hadn't been there. Both bugs surfaced together.

## Asks

Pick one (both are 1-line changes):

1. **Update the docs** in `node.aDNA/siteforge/CLAUDE.md` (and any SiteForge-side spec) — change `<gate_id>.html.pending` → `<gate_id>.pending`.
2. **Update the runtime** to actually write `<gate_id>.html.pending` (matches the doc) — but this risks breaking any consumer that's hard-coded the current `<gate_id>.pending` (including `node.aDNA/what/code/build_m20_round_sis.py` watch loops + `siteforge/CLAUDE.md` example commands).

Recommendation: **option 1 (update the docs)**. The runtime behavior is the de-facto contract; doc is the outlier.

## Refs

- `node.aDNA/siteforge/CLAUDE.md` (federated wrapper line ~73)
- `SiteForge.aDNA/what/lib/sis/runtime/generator.py` (the writer)
- `node.aDNA/how/gates/m20_round_*.pending` (concrete artifacts from M20 S1)
- M20 S1 close — session file `session_stanley_20260523_205241_m20_s1_vault_cards.md`
- Coord-memo on the Finding E sibling: `node.aDNA/who/coordination/coord_2026_05_23_sis_t1a_probe_path_root_cause.md`

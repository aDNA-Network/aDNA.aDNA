---
type: backlog_idea
status: accepted
priority: high
created: 2026-06-23
updated: 2026-07-02
last_edited_by: agent_rosetta
filed_from: Home.aDNA/how/campaigns/campaign_production_tidy/campaign_production_tidy.md (Guardrail-11; P8 close)
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, discipline, recon, planning, charter, ground_truth, production_tidy]
fold_batch: champollion_m6_1_rc
---

# Idea: **recon-beats-the-charter** — a recon-at-execution discipline for campaigns

## Problem

Campaign/plan charters carry counts, named items, and assumed governance that read as facts but are **planning estimates**. Executing against them directly — without re-deriving ground truth at the moment of action — produces undercounted sweeps, edits against stale governance, and "the plan said X but reality is Y" mid-op surprises. The standard's planning skills emphasize authoring the plan, not re-verifying it at execution.

## Evidence — estimates lied at every PT execution leg (2026-06)

- **pt09** — wrapper count charted at 6; reality ~8/~20.
- **pt11** — a status charted "filed" was live; a live campaign was unnamed; +5 surprise directories.
- **pt12** — two owning vaults' ratified ADRs *contradicted* the charter's §A/§F dispositions.
- **clean-root (P8 gate)** — the charter's "clean-root checklist" would have certified a clean root while ~2.3G of dot/underscore-prefixed strays sat uncounted, because the census was pattern-based (`*.aDNA`) not allowlist-based.

Each was caught only by re-running recon at execution; none would have been caught by trusting the charter.

## Proposed discipline

Before each destructive/structural op, the executor:
1. **Full-greps the live-ref + consumer surface** (estimates run ~3× low).
2. **Re-verifies each target/absorber's own ratified governance** (CLAUDE.md + ADRs + active campaigns) — the charter may predate or contradict it.
3. **Surfaces material deltas at the entry gate** — >~20% count divergence · governance conflict · surprise live work — *before* proceeding; don't steamroll.
4. **Records the delta** (so the next op inherits truth, not the stale estimate).

## Why upstream

This generalizes the per-playbook "estimates lie" rules (rename/merge/code-relocation) into one standing discipline every campaign should carry. Natural home: a doctrine/skill note referenced by the planning pipeline and the fork/rename/merge/archive skills — "the charter is a hypothesis; recon is the test."


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).

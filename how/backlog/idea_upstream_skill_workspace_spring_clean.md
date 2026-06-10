---
type: backlog_idea
status: proposed
priority: medium
created: 2026-06-10
updated: 2026-06-10
last_edited_by: agent_hestia
filed_from: Home.aDNA/how/campaigns/campaign_workspace_houseclean/ (charter v2.0 + disposition_ledger_v2.md; Operation Spring Clean SC-8)
filing_authorization: skill_upstream_contribution
upstream_target: LatticeProtocol/aDNA
tags: [backlog, upstream, skill_workspace_spring_clean, houseclean, disposition_ledger, operator_gate, tiered_execution, audit_first, hestia]
---

# Idea: `skill_workspace_spring_clean` — audit-first workspace houseclean with ONE operator gate and tiered execution

## Problem

Workspaces drift: loose root objects, stale vaults, orphaned scaffolds, unindexed archives, symlink
sprawl, router/registry divergence. Ad-hoc cleanup is risky (data loss, collateral edits) and gate-heavy
cleanup is slow (operator fatigue, one approval per item). The standard has no houseclean pattern.

## Proposed pattern (proven twice on this node)

```
SNAPSHOT   pre-clean state capture (top-level listing + sizes + live-delta watchlist)
RECON      read-only audit → sectioned DISPOSITION LEDGER (objects · router/registry deltas ·
           shim registry · vault triage · special programs · deferred/#needs-human · upstream artifacts),
           every row carrying verdict + evidence + tier
ONE GATE   a single operator decision surface (ISS per workspace Standing Rule 8) carrying ALL
           approvals: ledger sections, pre-authorizations (incl. future one-liner waves), deviation
           flags, queue orders. NOTHING touches disk before the verdict.
WAVES      tiered execution missions off the ratified ledger:
           T0 auto (cruft) · T1 per-item (moves/rewrites, grep-refs-first) · T2 explicit pre-auth
           (compression, venv deletes — verify-before-delete, positive count-match)
CLOSE      AARs + upstream filings + ONE coordinated registry/render regen + standing items
           (shim waves) recorded with dates + owners
```

## Binding disciplines that earned their keep

- **grep-refs-first** before any move — doubles as cross-program recon (F-SC5-B).
- **verify-before-delete**: tar + count-match originals before removal; sweep verification by
  **positive ref-count**, never exit-chain inference (F-SC5-C; 5/5 exact-count compressions, zero loss).
- **archive-never-delete** (SO-6/7) + reversible-first (`mv`/tar over `rm`).
- **reconcile-don't-duplicate** (F-SC1-A): adjacent programs discharge ledger rows mid-campaign —
  verify-only-then-record (3rd occurrence by SC-7).
- **re-read the standing ledger immediately before mutation** (F-SC7-A): dispatched legs land between missions.
- **router backup-first** where the workspace root is not a git repo; diff-verified delta count.
- **escalation tripwire**: a dated #needs-human escalation if the gate stalls (here 6/22, ahead of a
  6/24 shim window that must not act by default).

## Evidence

Phase 1 "Mise en Place" (2026-06-02): one-shot pre-migration pass, ledger v1, same-day execution, zero
data loss. Phase 2 "Operation Spring Clean" (2026-06-10): 8 missions in ~5 agent sessions vs 6–7.5
estimate; ONE ~4-min operator review ratified 12 sections (11 approve + 1 amend); 5-dir archive
compression 5/5 count-verified (~49% reclaim); 14-shim registry installed as standing; 6-vault
second-genesis queue ratified; pattern filings (this one included) shipped at close.

## Why upstream

The shape (audit → ledger → one gate → tiered waves → close) is workspace-agnostic and node-pilotable.
Natural home: `how/skills/skill_workspace_spring_clean.md` + a disposition-ledger template in
`how/templates/`. Pairs with `skill_project_archive` + `skill_second_genesis` + the shim-window
discipline (all filed this batch).

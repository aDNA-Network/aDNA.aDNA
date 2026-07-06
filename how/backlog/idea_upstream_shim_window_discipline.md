---
type: backlog_idea
status: resolved
priority: high
created: 2026-06-10
updated: 2026-07-06
last_edited_by: agent_rosetta
filed_from: Home.aDNA/how/campaigns/campaign_workspace_houseclean/disposition_ledger_v2.md (§C standing registry; Operation Spring Clean SC-7/SC-8)
filing_authorization: skill_upstream_contribution
upstream_target: LatticeProtocol/aDNA
forward_cited_by: "~/aDNA/CLAUDE.md Standing Rule 9 (installed 2026-06-10 at SC-7 — cites this filing's path)"
tags: [backlog, upstream, shim, symlink, window_discipline, standing_rule_9, registry, retirement, health_check, hestia]
fold_batch: champollion_m6_1_rc
---

# Idea: Shim-window discipline — register-at-creation, conjunctive retirement, pre-authorized waves

> **Note**: this filing is already **forward-cited** by the workspace router Standing Rule 9 on the
> originating node ("Upstream proposal: `aDNA.aDNA/how/backlog/idea_upstream_shim_window_discipline.md`,
> filed at SC-8") — the rule shipped ahead of the proposal by one mission.

## Problem

Renames, archives, and consolidations leave back-compat symlink shims. Untracked, they accumulate
indefinitely (nobody knows if a shim is still load-bearing) or get retired prematurely (consumers break).
Date-only windows are equally wrong in both directions: a lapsed window says nothing about live
references, and a default window on an *evidence-keyed* shim misleads a wave executor into retiring
something whose true condition hasn't fired.

## Proposed discipline (as ratified + running on this node)

1. **Register at creation, same action**: every shim symlink gets a registry row at the moment it is
   created — class (rename / archive / subsume / federation / functional) · window (default 30 days) ·
   retire-condition · owner. Unregistered shims are a health-check failure.
2. **Conjunctive retirement**: window lapsed **AND** workspace ref-sweep = zero (excluding `_archive/` +
   session history) **AND** owner-ack where owner ≠ the registry keeper. A lapsed window alone never
   auto-retires.
3. **Evidence-keyed rows**: some shims retire on evidence, not dates (e.g. a rename shim that waits on
   consumer-wrapper re-federation). These rows drop the window column entirely — a date would mislead.
   (Live example: `VideoForge.aDNA → Videos.aDNA`, keyed to wrapper-refederation evidence, explicitly
   excluded from the date-keyed wave.)
4. **Deprecation-notice binding**: notice files are bound to their shim — updated/retired in the same action.
5. **Pre-authorized waves**: retirements batch into operator-pre-authorized waves executed as dated
   one-liners with ref-sweep proof; no new gate per shim. (Live: W1 6/24 · W2 6/30 · W3 ~7/7–8.)
6. **Health-check enforcement**: a node health-check step scans top-level symlinks against the registry —
   unregistered → hard flag (exit code); registered-but-missing-on-disk + window-lapse → warnings;
   evidence-keyed rows never lapse-warn. (Live: `skill_node_health_check` S13; 13/13 day-one dry-run.)
7. **Re-read before mutation**: the registry is a standing ledger touched by dispatched legs between
   missions — re-read it immediately before any mutation (caught twice in one day on this node).

## Evidence

14-row live registry at `Home.aDNA` houseclean ledger §C (standing section, outlives the campaign):
6 rename/archive shims on the 3 pre-auth waves · 2 federation shims (owner Venus, explicitly DO-NOT-TOUCH)
· 3 functional/code-home shims (indefinite, annual review) · 1 external mount · 1 evidence-keyed rename ·
1 home-level config shim. Standing Rule 9 text + S13 enforcement landed 2026-06-10; the rule's
register-at-creation clause was exercised the same day by three independent sessions (SC-5, SC-6a, and a
fallout-remediation leg) without coordination — the discipline composes.

## Why upstream

Every node that renames or archives vaults grows shims; the registry schema + conjunctive retirement +
wave pattern are node-agnostic. Natural home: a Standing Rule in `template_workspace_claude.md` + a
registry-section template + a health-check step in the node-skill set.


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).

**Resolved 2026-07-06 (Meridian M6):** shipped in the v8.4 image (Champollion RC IN-set); status-flip was the missing post-ship close-out.

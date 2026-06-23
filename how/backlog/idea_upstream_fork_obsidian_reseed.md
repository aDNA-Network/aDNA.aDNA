---
type: backlog_idea
status: resolved
priority: high
finding_id: OBS-UP-1   # Obsidian.aDNA P1 synthesis §5 #1 · drift D8
source_vault: Obsidian.aDNA (Seshat)
source_session: session_stanley_20260610_m06_s1_foundations
routes_to: .adna template (skill_project_fork.md + setup.sh)
created: 2026-06-10
updated: 2026-06-10
last_edited_by: agent_seshat
tags: [backlog, idea_upstream, obsidian, skill_project_fork, setup_sh, reseed, adr_007_posture, m06]
related_backlog:
  - aDNA.aDNA/how/backlog/backlog_F_S2_1_setup_sh_fork_propagation.md   # the same defect, finding-level (setup.sh not propagated)
  - aDNA.aDNA/how/backlog/backlog_F_S2_4_obsidian_workspace_clobber.md  # first-open clobber interplay (runbook half)
  - aDNA.aDNA/how/backlog/idea_upstream_obsidian_seed_canonicalization.md  # the larger adopt-the-seed move this could ride
---

# idea_upstream — close the `skill_project_fork` strip-then-reseed self-contradiction

**Filed by Obsidian.aDNA** (Operation Athenaeum P1 discovery, drift **D8**; routed per ADR-007 upstream posture, operator-gated at M06).

## The defect

`.adna/how/skills/skill_project_fork.md` **line 94 runs `rm -f setup.sh`** on the forked vault — then **lines 99 + 112–114 tell the user to run `setup.sh`**. The fork strips the reseed mechanism it goes on to reference. Empirically reproduced: `Obsidian.aDNA`'s own fork shipped an un-reseeded `.obsidian/` (binary-stripped on arrival). Same defect class as **F-S2-1** (setup.sh not propagated) — this proposal carries the ratified-architecture framing on top of that finding.

## Proposed fix (either)

1. **Drop the `rm -f setup.sh`** (keep the installer in the fork; smallest change), or
2. **Add a fork-completion reseed step** that runs the materialization before handoff.

## Post-M05 reality (2026-06-10 refresh — strengthens the case)

Obsidian.aDNA has since built + fleet-proven the consuming-side pattern the template could adopt instead of (or alongside) `setup.sh`: `skill_obsidian_seed` + `what/code/reseed_runner.py` (backup-first · declarative-only · binary-materializing via donor-copy · override-preserving · idempotent; R10-verified on 8 vaults) + `health_check.py` (read-only conformance gate, HC1–HC9). Fixing the fork-time strip is still the root repair — forks should arrive batteries-included, not need a rescue reseed.

## Trace

- Obsidian.aDNA `what/context/obsidian_auto_populate.md` §1–2 (p1_02) · `obsidian_p1_discovery_synthesis.md` §1 D8 + §5 #1
- Ratified: `adr_003_auto_populate_mechanism` (Option C = upstream fork-gap fix is one leg of the composite)

> **Triage 2026-06-23 (Cornerstone v8.1):** RESOLVED — skill_project_fork now keeps setup.sh (fork-reseed fix). Shipped in the combined v8.1 release (held at push gate; [[adr_038_combined_v81_release]]). See [[coord_2026_06_23_rosetta_to_seshat_cornerstone_v81_landed]].

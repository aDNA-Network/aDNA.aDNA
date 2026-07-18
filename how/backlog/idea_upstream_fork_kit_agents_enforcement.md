---
type: backlog_idea
status: proposed
priority: medium
created: 2026-07-17
updated: 2026-07-17
last_edited_by: agent_hestia
filed_from: Home.aDNA/how/campaigns/campaign_context_health/ (Wave E)
filing_authorization: skill_upstream_contribution
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, fork_kit, agents_md, governance_kit, skill_project_fork, clear_hearth]
---

# Idea: enforce the 4-file governance kit at `skill_project_fork` (AGENTS.md is being skipped)

## Problem

A freshly forked `<Name>.aDNA/` vault does not reliably receive a root `AGENTS.md`. The fork path treats the root governance kit (`CLAUDE.md` · `AGENTS.md` · `MANIFEST.md` · `STATE.md`) as partially optional in practice — nothing in `skill_project_fork` verifies the kit is complete before the fork is declared done. Cold-start agents in a kit-incomplete vault lose the standard orientation ladder (root AGENTS.md → layer AGENTS.md → local files) and fall back to guessing from `CLAUDE.md` alone.

## Evidence (Clear Hearth P0 audit + Wave E, 2026-07-17 — this node)

- **26 of 73 root vault dirs lacked `AGENTS.md`** (`Home.aDNA/how/campaigns/campaign_context_health/artifacts/p0_audit_20260717.md` §W5). 16 are genesis-gated (governance lands at their own P0s per SO-1 — correctly absent); **10 were active/post-genesis graphs** that simply never got the file.
- **Same-day forks diverged**: `Emacs.aDNA` (forked 2026-07-16) carries the inherited base root AGENTS.md verbatim (`agent_init`); `Fluxer.aDNA` (2026-07-08) and `RealityScan.aDNA` (2026-07-11) got **none**. The kit outcome depends on which fork path/era a vault came through, not on policy.
- Wave E had to backfill the 10 active graphs with node-authored stubs (owner-persona-voiced, `type: directory_index`) — remediation that would be unnecessary with fork-time enforcement.

## Proposed shape

1. **Kit manifest in the skill** — `skill_project_fork` names the 4-file root governance kit explicitly and verifies presence as a completion gate (fork is not "done" with a missing kit file).
2. **AGENTS.md seed** — the fork always copies the base root `AGENTS.md` (the `.adna` root shape: Purpose / Quick Orientation / Project Structure / Agent Startup / Layer References), stamped `last_edited_by: agent_init` so first-run customization detection still works.
3. **Genesis-stub carve-out** — a `genesis_planning` fork may defer *content* to P0 but still receives the kit *files* (a minimal AGENTS.md routing stub is orientation, not governance — it makes no identity/persona claims, so SO-1 is respected).
4. **Census hook** — node health checks (cf. Home `skill_node_health_check`) can then treat a missing kit file as drift, not ambiguity.

## Disposition

Rosetta's call — fold into `skill_project_fork` + the fork-skeleton bundle at the next template release. Happy to supply the Wave E stub shape as the seed template.

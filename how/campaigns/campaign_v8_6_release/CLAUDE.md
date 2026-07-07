---
type: governance
subtype: campaign_claude
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [governance, campaign, v8_6_release, ouroboros]
status: active
---

# CLAUDE.md — Campaign: Operation Ouroboros (v8.6 release)

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_v8_6_release` |
| Owner | stanley |
| Status | active |
| Current Phase | Phase 1: Author (P0 charter done) |
| Executor tier | opus (authoring); sonnet for the mechanical count-surface sweep |

## Quick Start

1. Read this file (auto-loaded)
2. Read `campaign_v8_6_release.md` — master campaign doc (scope, phases, decision points, cut-line)
3. Read `missions/mission_v8_6_p1_batch_a_authoring.md` — the active P1 mission; claim the next objective
4. The RC cut-line is authoritative: `../campaign_meridian/artifacts/v8_6_release_candidate.md` §4
5. Create a session file and begin work

## Key Files

| File | Purpose |
|------|---------|
| `campaign_v8_6_release.md` | Master campaign doc — phases, missions, scope, decision points |
| `missions/mission_v8_6_p1_batch_a_authoring.md` | P1 mission — the Batch A authoring objectives |
| `../campaign_meridian/artifacts/v8_6_release_candidate.md` | **The RC** — 29-item census + §4 cut-line (authoritative ship-set) |
| `artifacts/` | Campaign deliverables + AARs |

## Standing Orders

- **Never fire the release without the operator gate.** P2 (ratify) and P3 (fire) are operator decisions
  (Standing Order 1). Agents author + dry-run; the operator signs and pushes.
- **Author into the dev graph** `aDNA.aDNA/how/skills/` — NOT directly into `.adna/`. The base skills are
  dev-canonical; `skill_template_release` (P3) folds the ratified delta into `.adna/`.
- **Each skill is its own reviewed deliverable.** Run `skill_dual_audience_review` + `skill_self_reference_check`
  before marking a skill objective complete. Do NOT batch unreviewed skills (the v8.4 DEFER lesson).
- **Author order follows the composition graph**: `skill_project_archive` (leaf) first, then the composers.
- **Standard stays v2.5.** This is governance `8.5 → 8.6` only. Anything that touches a normative surface
  belongs to Batch C / a v2.6 window — out of scope.
- **Keep the count surfaces honest every session.** Adding skill files bumps the skills count (50 → 55 at
  full batch); update CLAUDE.md / MANIFEST.md / AGENTS.md / glossary_skill.md in lock-step and run
  `adna_validate --governance` (python3.13) to zero-drift before committing.
- **Commit path-scoped** (never `git add -A`); **no push** until the operator elects (SO-9).
- **`proposed`-source items don't auto-ship.** The Batch G name-leak sweep + the 2 Hestia addenda are
  `proposed` → they need P2 acceptance (DP2). Author/triage them, but flag the ratification dependency.

## Context Loading

| Subtopic / file | When |
|----------|------|
| `../campaign_meridian/artifacts/v8_6_release_candidate.md` | always (the ship-set) |
| `how/skills/skill_template_release.md` | P3 (the release mechanics) |
| `reference_skill_template_release_execution` (memory) | P3 (execution gotchas) |
| `how/skills/skill_project_rename.md` + `skill_project_fork.md` | P1 (format + overlap models) |

## Delegation Notes

Picking this up mid-stream: the operator already resolved DP0 (ship v8.6) + DP1 (Full spine-in). P0 charter is
done. P1 authoring is in progress — check the mission file's objective statuses. The five lifecycle skills
**compose each other** (`skill_project_archive` is the shared leaf; `skill_second_genesis` calls
archive+fork; `skill_workspace_spring_clean` orchestrates all; `skill_graph_rename` delegates the self-ref
sweep to the existing `skill_project_rename`) — read already-authored siblings before authoring the next so
the cross-references stay coherent. `skill_second_genesis` is a **promote-and-genericize** of an existing
Home.aDNA v0.1.0 draft, not a from-scratch author.

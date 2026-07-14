# CLAUDE.md — Campaign: Operation Cleanroom (v8.7 release)

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_v8_7_release` |
| Owner | stanley |
| Status | **✅ COMPLETED — v8.7 SHIPPED 2026-07-13** (`1c30f3b` + tag `v8.7` → `aDNA-Network/aDNA`; 7-row smoke green; local `.adna` synced). Do NOT re-open. |
| Current Phase | **CLOSED — all 4 phases + 2 operator gates done.** Governance 8.6→8.7; standard stays v2.5; no count bump. Badge-completion follow-up (`30f6862`) landed. See `campaign_v8_7_release.md` §Completion Summary + Campaign AAR. Follow-ups: gitleaks `.obsidian` allowlist; held items 1 (node_manifest) + Batch B. |
| Executor tier | opus (authoring); sonnet acceptable for the mechanical index/count reconciliation |

## Quick Start

1. Read this file (auto-loaded)
2. Read `campaign_v8_7_release.md` — master campaign doc (scope = the 4 riders, phases, decision points)
3. Read `missions/mission_v8_7_p1_rider_authoring.md` — the active P1 mission; claim the next objective
4. The ship-set is the charter §Scope (4 riders); the queue is scattered — best list at `how/backlog/idea_upstream_visual_inspection_doctrine.md:23`
5. Create a session file and begin work

## Key Files

| File | Purpose |
|------|---------|
| `campaign_v8_7_release.md` | Master campaign doc — phases, missions, scope, decision points, risks |
| `missions/mission_v8_7_p1_rider_authoring.md` | P1 mission — the 4 rider objectives |
| `artifacts/` | Campaign deliverables — staging ledger (P3 assembly manifest), ratification record (P2), self-review notes |
| `how/skills/skill_template_release.md` | The release mechanics (P3) |
| `reference_skill_template_release_execution` (memory) | Execution gotchas (P3) |

## Standing Orders

- **Never fire the release without the operator gate.** P2 (ratify) and P3 (fire) are operator decisions
  (Standing Order 1). Agents author + dry-run; the operator signs and pushes.
- **Author into the dev graph** `aDNA.aDNA/how/...` — NOT directly into `.adna/`. `skill_template_release` (P3)
  folds the ratified delta into `.adna/`. Two items are `.adna/`-side / assembly-time: item 3 (nested
  `how/templates/AGENTS.md`) and the physical fold of items 2/4/5.
- **DE-LINK before folding any artifact.** Grep the FULL outbound link set (`](…)` markdown links AND `[[…]]`
  wikilinks) of every foldable artifact; strip/inline anything pointing at private dev-graph files. The v8.5
  D-1 near-miss (21 leaked links) is why. Applies hardest to **item 5** (doctrine) and **item 2**.
- **Item 5 = author generic, don't wholesale-copy.** The dev `what/doctrine/doctrine_visual_inspection.md` is
  fleet-specific; the `.adna/` version is a short, generic, policy-only pointer authored fresh.
- **Standard stays v2.5.** This is governance `8.6 → 8.7` only. Anything touching a normative surface belongs
  to a v2.6 window — out of scope.
- **No count bump.** None of the 4 riders adds a skill or template. Item 3 aligns the nested *index* to the
  already-existing 30 base templates. Confirm `adna_validate --governance` (python3.13) zero-drift; the
  validated count surfaces (image CLAUDE.md comment + MANIFEST) are unchanged.
- **Commit path-scoped** (never `git add -A`); **no push** until the operator elects (SO-9).
- **Riders are independent** — no composition graph like v8.6. Author by containment; each is its own reviewed
  deliverable.

## Context Loading

| Subtopic / file | When |
|----------|------|
| `campaign_v8_7_release.md` §Scope | always (the 4-rider ship-set) |
| `how/skills/skill_git_remote_setup.md` | item 4 (the genericize target) |
| `what/doctrine/doctrine_visual_inspection.md` + `how/backlog/idea_upstream_visual_inspection_doctrine.md` | item 5 (source doctrine + scope call) |
| `how/backlog/idea_upstream_state_frontmatter_phase_campaign_keys.md` | item 2 (the convention spec) |
| `how/templates/AGENTS.md` (dev) + `.adna/how/templates/AGENTS.md` | item 3 (source + target index) |
| `how/skills/skill_template_release.md` + `reference_skill_template_release_execution` (memory) | P3 (release mechanics + gotchas) |

## Delegation Notes

Picking this up mid-stream: the operator already resolved DP0 (direction = v8.7 queue) + DP1 (scope = all 4
riders). P0 charter is done. P1 authoring is in progress — check the mission file's objective statuses. The 4
riders are **independent** (unlike v8.6's composing lifecycle skills), so any order works; the mission's
containment order is a convenience. Two riders don't fully land until P3: **item 3** is an image-curated nested
AGENTS.md reconciled at assembly, and the physical `.adna/` fold of items 2/4/5 rides P3 — at P1 they're
authored in the dev graph + staged in `artifacts/release_staging_ledger.md`. The single highest-risk step is
the **DE-LINK pass** on item 5's doctrine fold — author it generic and leak-free from the start.

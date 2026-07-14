# CLAUDE.md — Campaign: Operation Distillery (v8.8 release)

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_v8_8_release` |
| Owner | stanley |
| Status | **completed** — v8.8 SHIPPED 2026-07-14 (commit `a32724b` + annotated tag `v8.8` on `aDNA-Network/aDNA`). DO NOT re-open. |
| Current Phase | **CLOSED** — P0✅ · P1✅ · P2✅ (ratified aggressive-minus-E3) · P3✅ (fired; **E2 reverted at operator's fire-time ruling** → aggressive-minus-E3-minus-E2, −24%). Governance 8.7→8.8; standard v2.5; counts 30/32. AAR: `artifacts/aar_v8_8_p3_fire.md`. |
| Executor tier | opus (prune + III are judgment-heavy) |

## Quick Start

1. Read this file (auto-loaded)
2. Read `campaign_v8_8_release.md` — master doc (scope, phases, the M01 prune methodology, DP1 = prune-depth-at-P2)
3. Read `missions/mission_v8_8_p1_prune_and_iii.md` — the P1 mission; claim the next objective
4. Read the two source ideas: `how/backlog/idea_upstream_claude_md_prune.md` (M01 lessons) + `idea_inner_readme_iii.md` (re-scoped premise)
5. Create a session file and begin work

## Key Files

| File | Purpose |
|------|---------|
| `campaign_v8_8_release.md` | Master campaign doc — phases, scope, DPs, risks, M01 methodology |
| `missions/mission_v8_8_p1_prune_and_iii.md` | P1 mission — prune (both diffs) + README III objectives |
| `artifacts/` | Staged prune diffs + III'd READMEs + (P2) ratification record + (P3) staging ledger |
| `how/skills/skill_template_release.md` + `reference_skill_template_release_execution` (memory) | P3 mechanics + gotchas (esp. the **5-surface** version bump) |

## Standing Orders

- **Never fire without the operator gate.** P2 (ratify — incl. the DP1 per-section prune-depth ruling) + P3
  (fire) are operator decisions. Agents author + dry-run; the operator rules depth, signs, and pushes.
- **Image-curated → stage, don't edit `.adna/`.** `.adna/CLAUDE.md` + `.adna/README.md` + root `README.md` have
  no clean dev source → author the prune/III as complete staged artifacts in `artifacts/`, applied at P3 (SR1).
- **Measure before projecting; read the real file first** (M01). Produce BOTH conservative + aggressive prune
  diffs; the operator rules per-section at P2.
- **Adversarial governance re-read** of every prune cut before staging: "does this remove a load-bearing rule /
  break a fork?" Prune removes duplication + verbosity, never behavior.
- **DE-LINK every staged artifact** (`](…)` + `[[…]]`) — extracted spec files must not leak private dev-graph refs.
- **Standard stays v2.5.** Governance `8.7 → 8.8` only.
- **The version-surface set is 5** (the v8.7 carry-forward): CLAUDE.md frontmatter + header comment + CHANGELOG +
  **root README badge + `.adna/README` badge**. Hard-check all 5 at P3.
- **Commit path-scoped; no push** until the operator elects (SO-9). Tags-only; never move a pushed tag.

## Delegation Notes

Picking this up (recommended: a fresh session): P0 is chartered. The operator chose "Start Batch B" but has NOT
yet ruled the prune depth (DP1) — that happens at P2 with the real diffs in hand, so **P1's job is to produce the
evidence**, not to pre-commit. Start by re-measuring `.adna/CLAUDE.md` section-by-section (`~/aDNA/.adna/CLAUDE.md`,
currently ~7.7K tok / 447 ln), then author the conservative + aggressive diffs as staged artifacts. The README III
is a right-sized pass on the real 157-line inner + 88-line root READMEs (the "870 lines / 10 cycles" premise is
dead). Everything is image-curated (stage in `artifacts/`, apply at P3). The single biggest trap: a prune cut that
silently weakens governance — adversarially re-read every cut.

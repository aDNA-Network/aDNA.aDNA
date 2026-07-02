---
type: backlog_idea
status: accepted
priority: medium
created: 2026-05-25
updated: 2026-07-02
last_edited_by: agent_rosetta
filed_from: node.aDNA/how/campaigns/campaign_lattice_compliance_upgrade/missions/aar_claude_md_recompaction_20260525.md
filing_authorization: skill_upstream_contribution
upstream_target: LatticeProtocol/aDNA
github_issue: https://github.com/LatticeProtocol/aDNA/issues/4
tags: [backlog, upstream, claude_md, workspace_router, row_discipline, template, skill_workspace_upgrade, bloat_prevention, governance_vs_state]
fold_batch: champollion_m6_1_rc
---

# Idea: Bake a "router rows = routing identity only / `CLAUDE.md` = governance, `STATE.md` = state" discipline into the aDNA standard

## Problem

The workspace router file (`~/aDNA/CLAUDE.md`, generated from `.adna/how/templates/template_workspace_claude.md`)
re-bloats over time because **no rule in the standard constrains what a Project Discovery row may contain**.
Fork and upgrade flows tell agents to *append a row* per project, but never specify row content. As campaigns
close, agents narrate operational status into rows (mission IDs, commit hashes, md5s, ADR counts, phase-gate
dates, version pins), treating the router as a changelog. The same dynamic inflates per-project `CLAUDE.md`
files — agents append operational status to governance files instead of `STATE.md`.

**Concrete evidence at this node (Mac/stanley) on 2026-05-25:**

- `~/aDNA/CLAUDE.md` was pruned by **`campaign_lattice_compliance_upgrade` M01** on **2026-05-20** (37.5%
  reduction, ~4,245 tokens). **Five days later (2026-05-25)** it had re-bloated to **55,530 chars / ~13,882
  tokens / 230 lines**, of which the `III.aDNA/` row alone was **12,900 chars (23% of the file)** — an
  inline Campaign A-D changelog. A second-cut compaction took it to 22,745 chars / ~5,686 tokens (−59%);
  AAR at `node.aDNA/.../missions/aar_claude_md_recompaction_20260525.md`.
- Per-project CLAUDE.md files exhibit the same disease at this node: **`RareHarness.aDNA/CLAUDE.md` ≈ 25,019
  tokens** (larger than the pre-compaction workspace router), **`MoleculeForge.aDNA/CLAUDE.md` ≈ 17,795
  tokens** (and the project is only at genesis Phase 0 — content that belongs in `what/` has been inlined
  into governance), `WilhelmAI.aDNA` ≈ 11,970 tok, plus a long tail at 5-12K tok.

This is a **recurring maintenance curve**, not a one-time defect. Compaction alone doesn't hold; the
standard needs a discipline rule that operates upstream of every campaign close.

## Distinct from sibling backlog idea

This idea is **not** about pruning `.adna/CLAUDE.md`'s own size (that is the sibling
`aDNA.aDNA/how/backlog/idea_upstream_claude_md_prune.md`, status `proposed`). This proposes a **prevention
rule** that stops re-bloat across every aDNA consumer node. The two are complementary — the size prune fixes
the template; this discipline rule fixes the *consumer-side* router and project files that re-bloat
regardless of template size.

## Proposed change (general principle)

> **`CLAUDE.md` carries stable governance/identity. `STATE.md` carries volatile operational state.**

Two specific applications for the standard:

### Application 1 — Workspace router row discipline

Bake into `.adna/how/templates/template_workspace_claude.md` (Project Discovery section) and
`.adna/how/skills/skill_workspace_upgrade.md` (Step 3 row regeneration):

> *Each Project Discovery / Workspace Layout row carries routing identity only — directory · type · persona ·
> one-line purpose · `CLAUDE.md` + `STATE.md` pointers (≈1 line). Operational/campaign state — phases,
> mission IDs, commits, md5s, version pins, dated changelogs — lives in each project's `STATE.md`, never in
> this router. On campaign/phase close, update the project's `STATE.md`, not this file.*

`skill_workspace_upgrade.md` Step 3 should explicitly state: "Preserve routing identity; do not carry forward
accumulated operational metadata from prior rows."

### Application 2 — Project `CLAUDE.md` governance/state split

Add the same general principle to `.adna/CLAUDE.md` (the template a newly-forked `.aDNA/` project inherits)
and the relevant project-fork skill (`skill_project_fork.md`): project `CLAUDE.md` files hold persona,
operating style, safety rules, standing orders, domain knowledge, agent protocol; campaign/mission/phase
narration belongs in `STATE.md`. Suggest adding a short authoring-discipline section to the template
explicitly partitioning the two.

### Application 3 (optional) — Canonical spec

Land the rule as a referenceable spec at `aDNA.aDNA/what/specs/spec_workspace_router_discipline.md` (or a
more general `spec_governance_vs_state.md`) so consumer vaults can `federation_ref` to it.

## Affected files (upstream)

- `.adna/how/templates/template_workspace_claude.md` — add discipline note in the Project Discovery section.
- `.adna/how/skills/skill_workspace_upgrade.md` — add Step-3 row-regeneration guideline.
- `.adna/CLAUDE.md` — add a sentence on `CLAUDE.md = governance / STATE.md = state` to the authoring guidance.
- `.adna/how/skills/skill_project_fork.md` — same brief reminder at fork time.
- (Optional) new spec: `aDNA.aDNA/what/specs/spec_workspace_router_discipline.md`.

## Migration / backwards compatibility

Purely additive — no behavior change for existing vaults. Consumer vaults absorb on next `git -C .adna pull`.
Discipline takes effect at the *next* campaign close (no retroactive migration needed). Existing rows that
already exceed the rule are addressable by a separate compaction pass (this node has filed
`node.aDNA/how/backlog/idea_project_claude_md_compaction_sweep.md` for that).

## Cross-references

- AAR (this node's empirical evidence): `node.aDNA/how/campaigns/campaign_lattice_compliance_upgrade/missions/aar_claude_md_recompaction_20260525.md`
- M01 prune (precedent): `node.aDNA/how/campaigns/campaign_lattice_compliance_upgrade/missions/mission_lattice_comp_m01_claude_md_prune.md`
- Sibling upstream idea (template-size prune): `aDNA.aDNA/how/backlog/idea_upstream_claude_md_prune.md`
- Follow-on local idea (per-project sweep, ContextCompass-driven): `node.aDNA/how/backlog/idea_project_claude_md_compaction_sweep.md`
- ContextCompass methodology (zero-risk audit framework): `ContextCompass.aDNA/`
- Filing protocol: `.adna/how/skills/skill_upstream_contribution.md`

## GitHub issue

Filed 2026-05-25: **https://github.com/LatticeProtocol/aDNA/issues/4** — "Workspace router row discipline: keep CLAUDE.md routing-only; campaign state belongs in STATE.md".


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).

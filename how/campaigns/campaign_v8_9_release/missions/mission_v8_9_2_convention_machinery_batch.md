---
plan_id: mission_v8_9_2_convention_machinery_batch
type: plan
title: "v8.9 M2 (Palimpsest) — convention + machinery batch: ship-set items 2–7 (STATE-convention family · path doctrine · fork-kit · codename note · leak-sweep · compliance_checker)"
owner: stanley
persona: rosetta
status: planned            # P1; opens after (or alongside) M1. Dev-side authoring only — nothing ships to .adna/ until P3.
campaign_id: campaign_v8_9_release
campaign_phase: 1
campaign_mission_number: 2
mission_class: implementation
mission: mission_v8_9_2_convention_machinery_batch
executor_tier: opus        # convention/doctrine + skill/tool hardening; obj 7 (compliance_checker) may drop to sonnet if split
token_budget_estimated: "~90 kT (6 items; convention touches cheap, fork-kit + release-skill + tool edits heavier — split at the convention/machinery seam if hot)"
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
tags: [plan, campaign, v8_9, palimpsest, convention, doctrine, skill_hardening, tooling]
---

# Mission: v8.9 M2 — Convention + machinery batch (items 2–7)

**Campaign**: [[campaign_v8_9_release]] (Operation Palimpsest) · **Phase**: P1 — Author riders · **Mission**: 2 of 2

## Goal

Author the six lighter ship-set items — the STATE-convention family, the path-convention doctrine, the fork-kit
AGENTS enforcement, the codename-collision note, the release-process leak hardening, and the `compliance_checker.py`
hardening. Four are convention/doctrine touches whose text is already drafted in-file; three are skill/tool edits
that need real authoring. **No count bump** (all six). Dev-side in this vault; the P3 release folds the delta.

## Exit Gate

Items 2–7 authored into this vault's canonical surfaces + each source idea flipped `proposed → resolved` with a
dated `## Adopted — v8.9 M2` stamp + `adna_validate --governance` (python3.13) **zero drift** +
`compliance_checker.py` passes its own 3-point acceptance test. **No `.adna/` edit; no push.**

## Objectives

### 2. STATE-convention family — `mission:` key + phase-display grammar
- **Status**: planned
- **Description**: Land the `mission:` STATE frontmatter key (the 3rd sibling to the shipped `phase:`/`campaigns:`
  — honest-absent, not a liveness claim) + the `P<n>[/<count>]` phase-display grammar (never a bare numeral) +
  the `+adna-normalize-phase` render convention. Text drafted verbatim in the source ideas; land as STATE
  authoring guidance + the STATE seed convention (dev-side).
- **Files**: STATE authoring guidance surface(s); `how/backlog/idea_upstream_mission_frontmatter_key.md` +
  `idea_upstream_phase_display_grammar.md` (stamps)
- **Depends on**: none

### 3. Path-convention doctrine (`~/aDNA/` in prose · absolute in execution)
- **Status**: planned
- **Description**: The doctrine line — docs/prose use `~/aDNA/…`; execution contexts (scripts, CI, launchd, cron,
  machine-consumed fields, root-identity rows) use absolute. Evidence: Clear Hearth ~18% nonconforming; absolute
  prose paths *hide* dangling refs. Land the doctrine line in this vault's CLAUDE.md linking/naming section
  (dev-side mirror of the `.adna/CLAUDE.md` target) + note the optional S-series advisory probe.
- **Files**: CLAUDE.md doctrine line; `how/backlog/idea_upstream_path_convention_doctrine.md` (stamp)
- **Depends on**: none

### 4. Fork-kit AGENTS enforcement (`skill_project_fork`)
- **Status**: planned
- **Description**: Harden `how/skills/skill_project_fork.md` — a 4-file root-governance-kit completion gate
  (CLAUDE/AGENTS/MANIFEST/STATE presence-verified) + an AGENTS.md seed stamped `last_edited_by: agent_init` + a
  genesis-stub carve-out + a census/health-check drift hook. Evidence: 26/73 vaults lacked AGENTS.md (10 active;
  Wave E hand-backfilled 10). Existing skill hardened — no count bump.
- **Files**: `how/skills/skill_project_fork.md`; `how/backlog/idea_upstream_fork_kit_agents_enforcement.md` (stamp)
- **Depends on**: none

### 5. Codename-collision authoring note
- **Status**: planned
- **Description**: Add the "grep the codename before setting it" guardrail (`grep -ril "Operation <Name>" ~/aDNA`)
  to the campaign/order-authoring surface. **Open sub-decision (author's call this mission):** landing surface —
  campaign-charter template vs order template vs a standing rule. Class evidence n=2 (Fluxer; RareAnthropic
  "Cartography"/74 refs). Small template touch.
- **Files**: the chosen template(s) in `how/templates/`; `how/backlog/idea_upstream_codename_collision_grep_order_templates.md` (stamp)
- **Depends on**: none

### 6. Release-process leak hardening (`skill_template_release` DE-LINK)
- **Status**: planned
- **Description**: Fold the dev-vault-name leak sweep into `skill_template_release`'s DE-LINK discipline — a
  codified pre-assembly grep of the full outbound link/path set (`](…)` + `[[…]]`) + a dev-vault-name scan of
  every folded artifact. Origin: the v8.5 near-miss (21 private wikilinks; F-CHM-217). **This is the very step
  P3 of THIS campaign will run** — hardening it now closes the loop before the fire.
- **Files**: `how/skills/skill_template_release.md`; `how/backlog/idea_upstream_dev_vault_name_leak_sweep.md` (stamp)
- **Depends on**: none

### 7. `compliance_checker.py` hardening
- **Status**: planned
- **Description**: Harden `what/lattices/tools/compliance_checker.py` — default output to a scratch/ignored path
  (currently dirties the tree), score content types (or emit `unsupported type — not scored` instead of 0.0%),
  and document/guard the `python3.13` runtime dep. Additive, local to one tool. The idea specifies a 3-point
  acceptance test — run it as the objective's verification.
- **Files**: `what/lattices/tools/compliance_checker.py`; `how/backlog/idea_tool_compliance_checker_hardening.md` (stamp)
- **Depends on**: none

## Notes / guardrails

- **Split seam.** If the session runs hot, split M2 at the convention/machinery boundary: obj 2–5 (convention +
  templates) as one session, obj 6–7 (release-skill + tool) as the next. The `mission:` key and stamps make the
  handoff clean.
- **No count bump.** All six items are convention/doctrine/hardening; validator must stay zero-drift without a
  count change (the 33 lands in M1).
- **Dev-side only; AAR (SO-5).** Nothing touches `.adna/`; append the 5-line AAR before `status: completed`.

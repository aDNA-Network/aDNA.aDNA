---
type: mission
mission_id: mission_hearthstone_p4_exemplar_invocation
campaign: campaign_hearthstone
phase: P4
mission_number: 5
title: "Exemplar invocation wiring — interview theming + Step-9 callout-fold + --exemplar-home overlay"
status: completed
class: implementation
created: 2026-06-19
updated: 2026-06-19
last_edited_by: agent_hestia
estimated_sessions: 2
actual_sessions: 1
lane: "cross-lane — Hestia routed into the Rosetta/aDNA.aDNA dev graph (per P2/P3)"
commit: 266e046
tags: [mission, hearthstone, p4, exemplar_invocation, interview, project_fork, callout_fold, cross_lane, hestia]
---

# Mission 5 (P4) — Exemplar Invocation Wiring

> **Deliverables COMPLETE + VERIFIED 2026-06-19** (dev graph; `.adna/` ships at P5). **P4 phase-exit APPROVED by operator (Decision 4) 2026-06-19 → mission CLOSED.** Cross-lane Hestia session per the P2/P3 pattern.

## Objective

The P3 exemplar bundle (`template_node_adna_exemplar/`) exists but nothing *invokes* it — the themed HOME is a static template no skill reaches. Wire the opt-in invocation per the operator-ratified `idea_upstream_project_fork_exemplar_invocation`:
1. interview **theming vars** (a fresh node picks a persona accent at bootstrap),
2. the load-bearing **callout-fold `>`-prefix profile in Step 9** (the themed HOME's vault/named-project lists render inside disclosure folds), and
3. the **`--exemplar-home` post-fork overlay** (opt-in).

All authoring in the dev graph (`aDNA.aDNA/`) — never `.adna/` (Standing Rule 1; P5 releases via `skill_template_release`).

## Blocker resolved (Path A — standard-aligned)

`skill_node_bootstrap_interview.md` had **no dev-graph source** (it was `.adna/`-only — the M3 finding). Since the dev graph is the source of truth `skill_template_release` assembles `.adna/` from (no auto-sync), this was a **broken mirror**. **Established the dev mirror** (`cp` from `.adna/`, verbatim-verified) and authored all P4 interview edits there. Scope kept minimal — only the interview skill; the broader "mirror all node-skills" reconcile stays a P5/release-hygiene follow-up.

## Deliverables

| # | Deliverable | File | Done |
|---|---|---|---|
| 1 | Interview-skill **dev mirror** established (resolves the blocker) | `aDNA.aDNA/how/skills/skill_node_bootstrap_interview.md` (new) | ✅ |
| 2 | **Topic 6 (theming, T1-T5)** — optional, exemplar-mode-only; covers all 9 theming vars, persona-default-prefilled (accept-all-in-one-keypress) | ↑ same | ✅ |
| 3 | **Step 9 base/exemplar branch** + the **`>`-prefix callout-fold profile** (load-bearing); base mode unchanged (plain `.adna/HOME.md`, markdown tables) | ↑ same | ✅ |
| 4 | **`--exemplar-home`** arg + Step-2 exemplar-mode detection + **Step 4.5** post-fork overlay (ported from the Home demo; source → `.adna/` bundle; canonical `CANVAS_CORE_HOME`) | `aDNA.aDNA/how/skills/skill_project_fork.md` | ✅ |
| 5 | Env-var reconcile `CANVASFORGE_CODE → CANVAS_CORE_HOME` + P4-landed note | `aDNA.aDNA/how/backlog/idea_upstream_project_fork_exemplar_invocation.md` | ✅ |

Committed surgically at `266e046` (3 files; not pushed — live WEBSITE co-writer in the tree).

## Verification

- **Bundle smoke unaffected** (P4 edits skills, not the bundle): `python3 smoke_render.py` → **PASS** on both the dev-graph and the Home.aDNA bundle copies (exit 0; 24 vars exercised incl. `vaults_table`/`named_projects_table`; 0 leftover `{{`).
- **`--parity`** on the reference node (`Home.aDNA/HOME.md`) → **PASS** — live HOME matches template structure, incl. the `BLOCK_VARS` `>`-prefixed callout-fold handling.
- **End-to-end exemplar render** (`smoke_render.py --materialize` with the fabricated non-Hestia **node-bravo / Athena** profile) → **0 leftover `{{`**, and the rendered HOME carries exactly the Step-9(b) output shape:
  - `> [!abstract]- All 12 vaults …` then `> - **Forges (2)** · [LoomForge](../LoomForge.aDNA/) · …` (`>`-prefixed callout-body bullets inside the fold)
  - `> [!note]- Non-vault projects …` then `> No named projects on this node yet.`
- **Decline path**: the base `.adna/HOME.md` (the `exemplar_mode == false` target) is intact and untouched by P4 — the opt-out keeps the pre-existing plain base HOME.

→ The format the skill *describes* == the format the harness *validates* == the live reference HOME. The verification is meaningful because the bundle's `PROFILE` fixtures are themselves `>`-prefixed callout-body lines (the M3.4 fold profile).

## Findings

- **F-P4-A** — the verification harness was already in the bundle: `smoke_render.py`'s fabricated `PROFILE` (node-bravo/Athena) carries `>`-prefixed table fixtures, and `--parity` has explicit `BLOCK_VARS` callout-fold logic. P4's job was to make the *skills* emit what the harness already validates. No new test code needed.
- **F-P4-B** — the bundle's `SUBSTITUTIONS.md` §3 already canonicalized `CANVAS_CORE_HOME` (deprecated alias `CANVASFORGE_CODE`); only the idea file and the Home-demo Step 4.5 still carried the stale name. Reconciled the idea; the canonical dev fork skill uses `CANVAS_CORE_HOME`.

## Descoped (→ P5 / follow-ups)

- Releasing the dev edits to `.adna/` (P5, `skill_template_release`).
- Broader "establish dev sources for ALL node-skills" mirror reconcile (P5/release-hygiene; M3 AAR recommendation).
- Non-Hestia persona accent rows beyond the §2 lookup default (operators extend at will).

## AAR

- **Worked**: Path A (establish the dev mirror, author there, release at P5) cleanly resolved the `.adna/`-only blocker and matched the existing release model. The bundle's own smoke/parity harness verified the wiring end-to-end with a non-Hestia profile — no bespoke test needed.
- **Didn't**: nothing blocked; the one-session estimate beat the 2-session plan because the spec was pre-ratified and the worked Home-demo Step 4.5 existed to port.
- **Finding**: the load-bearing risk (callout-fold `>`-prefix) was de-risked by the harness already asserting that exact shape — the skill just had to instruct it (F-P4-A).
- **Change**: interview is now two-profile (base 19 unchanged; optional Topic 6 in exemplar mode); the canonical fork skill gained `--exemplar-home`.
- **Follow-up**: P5 release + the all-node-skills mirror reconcile. *(P4 exit-gate evidence presented; operator approved Decision 4 2026-06-19 → P5 active.)*

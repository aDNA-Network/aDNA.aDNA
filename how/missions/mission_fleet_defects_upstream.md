---
plan_id: mission_fleet_defects_upstream
type: plan
title: "Fleet-defects upstream fixes — three template-rooted defect classes (Drydock M03)"
owner: stanley
status: completed
mission_class: implementation
mission_kind: standard_maintenance
source: operation_drydock_m03 (Berthier/aDNALabs — coord_2026_06_27_inbound_from_berthier_fleet_defects)
token_budget_estimated: "~70 kT (50-200 tier): 1 ADR + 1 mission + 2 standard-doc sections + 1 new skill + 1 validator check + 1 coord memo + 1 backlog idea + re-measure + records. Anchor reads (mission model, validator, fork skill, standard regions) front-loaded."
created: 2026-06-29
updated: 2026-06-29
last_edited_by: agent_stanley
completed: 2026-06-29
tags: [plan, fleet_defects, standard_maintenance, drydock, m03, upstream, adr_042]
---

# Mission: Fleet-defects upstream fixes (Drydock M03)

**Origin**: [[who/coordination/coord_2026_06_27_inbound_from_berthier_fleet_defects|Berthier's staged inbound proposal]] (Operation Drydock M03), acknowledged by Rosetta 2026-06-29 and deferred to a distinct standard-maintenance mission. Operator greenlit **all 3 classes, upstream-only** (this session). Decision-of-record: [[what/decisions/adr_042_fork_template_hygiene_and_rename_protocol|ADR-042]].

## Goal

Author the **upstream** template/standard/tooling fixes for the three template-rooted fleet-defect classes so they stop propagating into every future fork/rename — while **deferring** the deeper retro-cleanup of existing instances (separate operator calls). Zero site-gate regression (≥304/304 held).

## Scope boundary

| | IN (upstream — this mission) | DEFERRED (separate operator call) |
|---|---|---|
| **Class 1** | Stage the release delta: template ships no `campaign_adna_workspace_upgrade`; persona token parameterized at fork-time | Retro-strip the campaign from the **45 live vaults** (incl. aDNA.aDNA's own copy) |
| **Class 2** | §13.2 Tier-1 harness-injection safeguard + `adna_validate.py --governance` guard | The **2 EOF strips** (Oration/SpeechForge) — staged memo to Oration |
| **Class 3** | New §6.5 Rename Protocol + `skill_project_rename.md` sweep recipe (keep/strip classifier) | **Executing** the scoped sweep on existing residue (SpeechForge, TappInterface, …) |

**Two-gate discipline:** Class-1 template changes are STAGED (ratified delta below), applied at the next operator-gated `skill_template_release` — never hand-edited into `.adna/` (Workspace Rule 1).

## Exit Gate

ADR-042 accepted; standard v2.3→v2.4 (§6.5 + §13.2 item) coherent; `skill_project_rename.md` authored + registered in CLAUDE.md skills table; `adna_validate.py --governance` flags the 2 known harness-injection instances (true-positive) and not a clean vault (no false-positive); staged release delta recorded; Oration strip memo + retro-cleanup idea filed; `npx astro build` 0 errors (≥178 pages); `npm run test:gates` ≥304/304; root-router `template_workspace_claude.md` Berthier unchanged (`git diff`); mission AAR filed; coord memo disposition updated; STATE.md updated.

## Tasks

### 1. Mission + ADR + version bump (O0)
- **Status**: done (2026-06-29) — session file; ADR-042 authored+accepted; this mission; standard v2.4 bump.

### 2. Class 1 — template-clutter (stage release delta)
- **Status**: done (2026-06-29)
- **Description**: record the exact release delta (below); confirm `.adna/how/campaigns/` ships only the stale campaign + AGENTS.md (verified — clean removal); specify persona parameterization for the release smoke-test. No live `.adna/` edit.
- **Files**: this mission (§Staged release delta); ADR-042; idea_fleet_defects_retro_cleanup.

### 3. Class 2 — harness-injection (standard note + guard + strip memo)
- **Status**: done (2026-06-29)
- **Description**: §13.2 4th Tier-1 safeguard; `adna_validate.py --governance` check; coord memo to Oration for the deferred 2 strips.
- **Files**: `what/docs/adna_standard.md`; `what/lattices/tools/adna_validate.py`; `who/coordination/coord_2026_06_29_rosetta_to_oration_harness_strip.md`.

### 4. Class 3 — rename protocol (standard §6.5 + skill + inventory)
- **Status**: done (2026-06-29)
- **Description**: §6.5 Rename Protocol; `skill_project_rename.md` (model: `skill_project_fork.md`) with scoped sweep + keep/strip classifier; register in CLAUDE.md skills table.
- **Files**: `what/docs/adna_standard.md`; `how/skills/skill_project_rename.md`; `CLAUDE.md`.

### 5. Validate + record (O4)
- **Status**: done (2026-06-29)
- **Description**: build + gates; guard true/false-positive test; sweep-recipe dry-run; root-router-unchanged check; AAR + token delta; coord disposition; STATE.md python3 patch; commit path-scoped (no .pyc) + fetch/ff/gitleaks + push dev graph.

## Staged release delta (Class 1 — for the next `skill_template_release` gate)

> Ratified by ADR-042 §1. Applied to the assembled `.adna/` tree at the next operator-opened release (Standing Order #1) — NOT this session. Verified facts: `.adna/how/campaigns/` currently ships exactly `AGENTS.md` + `campaign_adna_workspace_upgrade/`.

1. **Drop the stale campaign.** In the assembled release tree, `rm -rf .adna/how/campaigns/campaign_adna_workspace_upgrade/`. Result: a fork's `how/campaigns/` starts clean (just `AGENTS.md`). (The campaigns scaffold + its `AGENTS.md` stay.)
2. **Parameterize the fork persona.** The project-fork `CLAUDE.md` (the file a non-Home fork inherits — currently the Berthier workspace-router copy) must carry a `{{persona}}` token rather than a hard-coded name, with a `skill_project_fork.md` Step-4 substitution mirroring the existing Home Step-3.5 `{{persona}}` flow.
   - **Smoke-test guard (release step f):** confirm the **root** workspace-router `~/aDNA/CLAUDE.md` (pre-instantiated from `how/templates/template_workspace_claude.md`) still reads **Berthier**, while a fresh non-Home fork gets a substituted/placeholder persona — never a leaked "Berthier".
3. **Version/CHANGELOG.** Bump the image tag + CHANGELOG per ADR-011 two-track at the release run; the standard-track v2.4 (this mission) is already in the dev graph.

## Notes
- aDNA.aDNA is itself one of the 45 clutter-carrying vaults (its own `how/campaigns/campaign_adna_workspace_upgrade/` is inherited). Stripping it = a retro-strip of one vault → deferred, NOT done here.
- Class 2 & 3 land *live* in the dev graph (standard doc, skill, validator); Class 1 is the only staged-for-release class (it changes the shipped template tree).

## Completion Summary

### Deliverables
- **ADR-042** (accepted) + this mission + standard **v2.3→v2.4** (title + changelog comment).
- **Class 2 LANDED**: `adna_standard.md` §13.2 Tier-1 4th safeguard ("no harness-injected context") + mermaid A4 node + a `adna_validate.py --governance` guard (`check_harness_injection`). **Verified**: fires on `Oration.aDNA/CLAUDE.md:295,297` (`# userEmail`/`# currentDate`), clean on aDNA.aDNA. Deferred 2 strips → [[who/coordination/coord_2026_06_29_rosetta_to_oration_harness_strip|Oration memo]].
- **Class 3 LANDED**: `adna_standard.md` §6.5 Rename Protocol + `how/skills/skill_project_rename.md` (keep/strip classifier) + CLAUDE.md skills-table registration. **Dry-run validated** on Oration: raw ≈30 "SpeechForge" hits collapse to ≈8 true-defect STRIP lines (the `how/who/what/AGENTS.md` self-routing headers); the rest are SO-7 provenance correctly KEPT.
- **Class 1 STAGED**: release delta (drop the template's stale `campaign_adna_workspace_upgrade` + parameterize the fork persona) recorded in §"Staged release delta" + ADR-042 §1; applied at the next operator-gated `skill_template_release`.
- **Records**: Berthier inbound memo → `resolved`; deferred retro arms → [[how/backlog/idea_fleet_defects_retro_cleanup|idea_fleet_defects_retro_cleanup]].
- **Validation**: `npx astro build` 179pp / 0 err; `npm run test:gates` **304/304** (zero regression); root-router `template_workspace_claude.md` untouched; diff scope clean (no `.pyc`).

### Descoped (deferred — separate operator calls)
- The Class-1 template release itself (`skill_template_release` gate) + retro-strip of the 45 clutter-carrying vaults (incl. aDNA.aDNA's own copy).
- Class-3 sweep **execution** over existing OBE residue (SpeechForge/TappInterface/…) — recipe landed, execution deferred.
- The 2 Oration/SpeechForge EOF strips — route via Oration's own subagent (not reached-in).

### Key Findings
- The new guard **earned its keep on first run** — caught the real Oration instance precisely while staying clean on aDNA.aDNA (no false-positive). The §13.2 MUST + the guard close the class going forward.
- The rename classifier's value is **quantified, not asserted**: on Oration the over-count is ~3.75× (raw 30 / strip 8). The denominator-honest split (live-routing self-headers = STRIP; dated/shim/genesis prose = KEEP) is exactly §6.5's scope discipline.
- **Tooling-env drift (flagged, not fixed)**: `what/lattices/tools/*.py` require PyYAML; the node's default `python3` is now 3.14 without it — run with `python3.13`. Pre-existing; an interpreter pin is a separate hygiene item.

### Scope Changes
- None material. Class 1 was confirmed **inherently a release-delta** (aDNA.aDNA stripping its own campaign copy would be a retro-strip, not the upstream fix), so it is recorded as *staged* rather than *landed* — honest two-gate accounting, not a descope.

## AAR

- **Worked**: the two-gate discipline kept the scope honest — dev-graph changes (standard/skill/validator) landed live and validated (build 179pp, gates 304/304), while the template-shape change (Class 1) was cleanly staged as a ratified release delta without ever touching `.adna/` (Rule 1 intact). Authoring the guard first, then dry-running it, surfaced the real Oration instance and validated the classifier in the same pass.
- **Didn't**: the validator crashed on `import yaml` under the default `python3` (3.14, no PyYAML) — a node-env surprise that cost one diagnostic loop before switching to `python3.13`; the node shell flake also mis-reported a grep exit code mid-test (false "self fired" scare, cleared by an authoritative direct grep).
- **Finding**: Class 1 has no meaningful "land in the dev graph" form — the upstream fix IS a release delta. Naming that explicitly (staged vs landed) prevents a future agent from thinking the template was already fixed.
- **Change**: when a standard-maintenance mission ships a lint, run it against a KNOWN-dirty vault AND a known-clean one in the same step — the true/false-positive pair is the real acceptance test, cheaper and more convincing than asserting correctness.
- **Follow-up**: [[how/backlog/idea_fleet_defects_retro_cleanup|idea_fleet_defects_retro_cleanup]] (3 deferred arms) + the Oration strip memo + the gated `skill_template_release` to propagate the whole v2.4 batch (incl. the Class-1 delta) to `.adna/` + the public image.

> **Token budget (SO11):** estimated ~70 kT (50-200 tier). Actual content-load ≈ within ~1.2× of estimate — front-loaded anchor reads (model mission, validator, fork skill, standard regions) + one extra diagnostic loop (yaml env) offset by clean first-pass edits. Within the 2× retrospective trigger; no retrospective.

---
plan_id: mission_v8_9_1_anchor_state_graduation
type: plan
title: "v8.9 M1 (Palimpsest) — ANCHOR: author the STATE.md graduation doctrine (skill + template + tripwire + doctrine)"
owner: stanley
persona: rosetta
status: completed          # 2026-07-24 — all 5 objectives done; governance zero-drift @ 56 skills/45 templates; dev-side only, nothing shipped to .adna/. AAR appended.
token_budget_actual: "~75 kT (single session; design-recon on count model + tripwire landing surface was the main cost)"
campaign_id: campaign_v8_9_release
campaign_phase: 1
campaign_mission_number: 1
mission_class: implementation
mission: mission_v8_9_1_anchor_state_graduation
executor_tier: opus        # governance/doctrine authoring
token_budget_estimated: "~80 kT (new skill body + template seed + health-check tripwire edit + doctrine + self-review + validator)"
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
tags: [plan, campaign, v8_9, palimpsest, anchor, state_graduation, skill, template]
---

# Mission: v8.9 M1 — Anchor · STATE.md graduation doctrine

**Campaign**: [[campaign_v8_9_release]] (Operation Palimpsest) · **Phase**: P1 — Author riders · **Mission**: 1 of 2

## Goal

Author the **load-bearing anchor** of the v8.9 batch (ship-set item 1): the STATE.md graduation doctrine, proven
by Operation Clear Hearth (19 files / 17 vaults, 5.2 MB → 968 KB, byte-exact loss-checked; this vault's own
`STATE.md` refuses Reads at ~60 KB). It lands **dev-side in this vault** — the P3 release folds it into the image.
Source of scope: [[idea_upstream_state_history_graduation]] (`status: proposed`, priority HIGH). This mission
realizes the **+1 skill** count bump (32 → 33).

## Exit Gate

`skill_state_graduation.md` authored + `template_STATE_history.md` seed authored + the `state_history:` pointer
convention documented + the >100 KB auto-graduate tripwire landed in the base health-check skill +
frontmatter-as-a-graduation-class doctrine written (with the CHANGELOG variant) + all pass
`skill_dual_audience_review` and `skill_self_reference_check` + `adna_validate --governance` (python3.13) reports
**zero drift with the skills count at 33** + the source idea flipped `proposed → resolved` with a dated stamp.
**No `.adna/` edit; no push.**

## Objectives

### 1. Author `how/skills/skill_state_graduation.md` (the +1 skill)
- **Status**: planned
- **Description**: The graduation recipe. Codify the hard-won rules: the **keep-set rule** (most-recent live
  session block + most-recent Next Session Prompt stay; everything else graduates), **era-boundary-outranks-day-
  count** (graduate at a campaign/operation close, not a calendar tick), **verbatim move** (append to
  `STATE_history.md` byte-for-byte — never summarize on graduation), the **loss-gate** (byte-exact / loss-checked
  before the live block is trimmed), and the **two supremacy caveats** (most-recent live block + most-recent Next
  Session Prompt are never graduated). Frontmatter: `skill_type: agent`, active. Self-referential: cite this
  vault's own `STATE.md` + `STATE_archive.md` §Shifted-2026-07-17 as the worked example (Clear Hearth graduation).
- **Files**: `how/skills/skill_state_graduation.md` (new)
- **Depends on**: none

### 2. Author the `STATE_history.md` template seed + `state_history:` pointer convention
- **Status**: planned
- **Description**: `how/templates/template_STATE_history.md` — the immortal-spine seed a fresh vault forks (the
  archive counterpart to the STATE router). Document the `state_history:` frontmatter pointer (STATE → its history
  file; already live in this vault's `STATE.md`). *Confirm at authoring whether this is a genuine +1 template or
  folds into the existing STATE template family — the count-impact line says "possibly +1 template."*
- **Files**: `how/templates/template_STATE_history.md` (new) + a convention note (STATE authoring guidance)
- **Depends on**: obj 1 (the pointer convention is the skill's counterpart)

### 3. Land the >100 KB auto-graduate tripwire into the base health-check skill
- **Status**: planned
- **Description**: Add the S-series `>100 KB → auto-graduate` advisory tripwire to the base node/vault health-check
  skill (the S-series host — **confirm the exact file at authoring**; the node-level instance is Home's
  `skill_node_health_check` S13, so the base template's health-check skill is the landing surface). Advisory, not
  destructive — it flags a STATE that has re-bloated past the threshold (evidence: Home 73 KB → 348 KB / month
  without a guard).
- **Files**: the base health-check skill in `how/skills/` (edit)
- **Depends on**: obj 1

### 4. Frontmatter-as-a-graduation-class doctrine + CHANGELOG variant
- **Status**: planned
- **Description**: Write the doctrine that graduation is a *class* of surfaces (the 5 faces), and that the
  **CHANGELOG variant rides the same filing** — a long CHANGELOG graduates by the identical keep-recent /
  verbatim-move / loss-gate discipline. Land as authoring guidance alongside the skill (and reference from the
  STATE/CLAUDE authoring seed as appropriate — dev-side; image fold at P3).
- **Files**: doctrine text (co-located with the skill / STATE guidance)
- **Depends on**: obj 1

### 5. Self-review + validate + flip the source idea
- **Status**: planned
- **Description**: Run `skill_dual_audience_review` + `skill_self_reference_check` on the new skill/template/
  doctrine. Run `python3.13 what/lattices/tools/adna_validate.py --governance` → **zero drift, skills count = 33**
  (update the count in MANIFEST.md / AGENTS.md / CLAUDE.md skills-inventory / `glossary_skill.md` as the
  count-of-record surfaces require — the regex matches the number immediately before the noun). Flip
  [[idea_upstream_state_history_graduation]] `proposed → resolved` with a dated `## Adopted — v8.9 M1` stamp.
- **Files**: MANIFEST.md · AGENTS.md · CLAUDE.md (skills inventory + count) · `what/glossary/glossary_skill.md` ·
  `how/backlog/idea_upstream_state_history_graduation.md`
- **Depends on**: obj 1–4

## Notes / guardrails

- **Dev-side only.** Nothing in this mission touches `.adna/`. The image fold + version bump is P3
  (`skill_template_release`), gated by P2 ratification.
- **Count discipline.** The 32 → 33 bump touches every count-of-record surface; `adna_validate --governance`'s
  skills-count regex is the gate. Confirm the template-count line (obj 2) before claiming +1 template.
- **AAR (SO-5).** Append the 5-line AAR before setting `status: completed`.

## AAR — M1 (2026-07-24)

- **Worked:** the source idea carried a fully-proven doctrine (Clear Hearth), so the skill codified practice, not
  aspiration; the vault's own `STATE_archive.md` gave a ready self-reference; `adna_validate --governance`'s exact
  regex (number-immediately-before-noun, compared to disk `skill_*`/`template_*` counts) made the count reconcile
  deterministic.
- **Didn't:** the "+1 skill (32→33)" in the roadmap is the **image** base count — it does **not** equal this dev
  vault's count (55→56); assuming they were the same would have mis-set six count surfaces. The tripwire's landing
  skill (`skill_node_health_check`) isn't carried in this vault at all.
- **Finding:** dev-vault vs image counts genuinely diverge ("image≠dev counts"); and a ship-set item can be
  **image-only** (no dev-vault file to edit) — the tripwire had to be *staged* as a P3 rider, not authored in place.
- **Change:** classified `skill_state_graduation` + `template_STATE_history` as **base** (template-destined),
  bumping this vault 55→56 skills / 44→45 templates across all surfaces incl. `how/templates/AGENTS.md`; staged the
  tripwire as `artifacts/image_side_state_graduation_tripwire.md`.
- **Follow-up:** M2 authors items 2–7 (no count bump); P2 ratification then P3 fold (skill + template + tripwire
  → `.adna`, image count 32→33). The Refit-staged `stub_campaign_v8_9_release.md` frontmatter gap is a closed-
  campaign artifact — left untouched (SO-6).

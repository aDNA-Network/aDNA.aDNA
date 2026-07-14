---
plan_id: mission_v8_7_p1_rider_authoring
type: plan
title: "v8.7 P1 — Rider authoring (4 low-risk riders + DE-LINK + validate)"
owner: stanley
status: completed
campaign_id: campaign_v8_7_release
campaign_phase: 1
campaign_mission_number: 1
mission_class: implementation
token_budget_estimated: 50
token_budget_actual: 38   # rough (ADR-016 §C) — 1 session: P0 charter + all 4 riders + ledger + validate
executor_tier: opus
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
tags: [plan, campaign, v8_7_release, cleanroom, currency, doc_hygiene]
---

# Mission: v8.7 P1 — Rider authoring

**Campaign**: [[how/campaigns/campaign_v8_7_release/campaign_v8_7_release|campaign_v8_7_release]] (Operation Cleanroom)
**Phase**: 1 — Author
**Mission**: 1 of 1 (P2/P3 are operator gates, not missions)

## Goal

Author every in-scope v8.7 rider so the release can assemble at P3: genericize the last fleet-name leak
(item 4), complete the stale template index (item 3), and fold two inheritable defaults — a STATE frontmatter
convention (item 2) + the visual-inspection doctrine (item 5). Each rider is authored into the dev graph and
self-reviewed; the physical `.adna/` fold + the image-curated AGENTS.md reconciliation ride P3 assembly (staged
in `artifacts/release_staging_ledger.md` here). On close, confirm no count-surface drift and triage any
`proposed`-source residue for the P2 gate.

## Exit Gate

Every rider authored + self-reviewed (`skill_dual_audience_review`; DE-LINK grep on every foldable artifact);
count surfaces confirmed **unchanged** (no new skills/templates) with `adna_validate --governance` (python3.13)
zero-drift; the staging ledger written (P3 assembly manifest + P2 gate packet); a P1 AAR filed. **No release
fire** (that is P3, an operator gate).

## Objectives

*Riders are **independent** (no composition graph like v8.6) — author order is by containment.*

### 1. Item 4 — genericize `skill_git_remote_setup` fleet repo names
- **Status**: ✅ completed (2026-07-13)
- **Description**: In `how/skills/skill_git_remote_setup.md`, replace the 4 hardcoded grandfathered real fleet
  repo names (`GRANDFATHERED=(…)` ~:98 + the §Special-cases prose ~:254) with a generic placeholder + an
  explanatory note; **keep the ADR-009 non-conformant-name mechanism** intact. Dev-source edit (present in both
  dev + image); folds to `.adna/` at P3. Self-review (dual-audience).
- **Files**: `how/skills/skill_git_remote_setup.md`
- **Depends on**: none

### 2. Item 3 — reconcile the image `how/templates/AGENTS.md` index (stage for P3)
- **Status**: ✅ completed (2026-07-13)
- **Description**: The base-image index at `.adna/how/templates/AGENTS.md` enumerates ~24 templates but the dir
  holds **30** (missing `template_disposition_ledger` + `template_second_genesis_dossier` [both shipped v8.6] +
  5 more; header over-counts). Prepare the reconciled index from the dev copy's structure, **genericized to the
  30 base templates** (drop the 11 dev-only extension rows). **Image-curated → folded at P3 assembly**; stage
  the reconciled content + the hand-verified count in `artifacts/release_staging_ledger.md`. ⚠ `adna_validate`
  skips nested AGENTS.md → hand-count `template_*.md` in `.adna/how/templates/`.
- **Files**: (release-delta; staged in `artifacts/`) — target `.adna/how/templates/AGENTS.md`
- **Depends on**: none

### 3. Item 2 — STATE `phase:`/`campaigns:` frontmatter convention
- **Status**: ✅ completed (2026-07-13)
- **Description**: Add two *optional*, honest-absent machine-readable STATE.md frontmatter keys (`phase:`,
  `campaigns:`) as a documented fleet convention (Home ADR-007 origin; spec at
  `how/backlog/idea_upstream_state_frontmatter_phase_campaign_keys.md`). Locate the base STATE seed /
  `template_state` convention in the dev graph, add the keys + a short usage note (additive, no schema break).
  DE-LINK pass. Folds to `.adna/` at P3.
- **Files**: the STATE-seed / `template_state` convention file (path confirmed at authoring)
- **Depends on**: none

### 4. Item 5 — fold the visual-inspection doctrine (+ DE-LINK)
- **Status**: ✅ completed (2026-07-13)
- **Description**: Author a short, governance-lean visual-inspection doctrine pointer destined for `.adna/`
  (headless-Playwright-as-default; **policy/doctrine only** — "option 1" scope per
  `idea_upstream_visual_inspection_doctrine.md`), so new vaults inherit it at fork-time (today `.adna/CLAUDE.md`
  has zero visual-tooling guidance). **Author generic — do NOT wholesale-copy** the fleet-specific dev
  `what/doctrine/doctrine_visual_inspection.md`. **Full-link-set DE-LINK pass mandatory** (`](…)` + `[[…]]`).
  Settle placement (DP2: `.adna/CLAUDE.md` subsection vs. standalone `.adna/what/doctrine/` file). Self-review.
- **Files**: (release-delta; staged in `artifacts/`) — target `.adna/` (placement per DP2)
- **Depends on**: none

### 5. Validate + stage + triage close
- **Status**: ✅ completed (2026-07-13)
- **Description**: Confirm the 4 count surfaces are **unchanged** (no new skills/templates) + `adna_validate
  --governance` (python3.13) zero-drift. Write `artifacts/release_staging_ledger.md` (the dev-source → `.adna/`
  target manifest + version-bump surfaces + open decisions). Triage any `proposed`-source residue (DP3) for the
  P2 gate. File the P1 AAR.
- **Files**: `artifacts/release_staging_ledger.md`; (verify) `CLAUDE.md`, `MANIFEST.md`, `AGENTS.md`, `what/glossary/glossary_skill.md`
- **Depends on**: 1-4

## Campaign Context

### Previous Mission Outputs
- Ouroboros (v8.6) §Descoped + §Follow-Up routed these riders to v8.7; the plan file froze the 4-rider scope.

### Next Mission Inputs
- P2 (ratify gate) needs: the 4 riders authored + self-reviewed + the staging ledger + DP2/DP3 resolutions.
- P3 (fire) needs: the ratified ship-set frozen + the item-2/4/5 folds + the item-3 AGENTS.md reconciliation staged.

## Notes

- **Session-1 realistic scope**: P0 charter + as many riders as the budget allows (items are small; likely all
  4 + validate in one session, but DE-LINK on item 5 gets the care).
- `token_budget_estimated: 50` kT — smaller than v8.6's 120 (4 small riders vs. 5 unbuilt skills); a single
  session logs its own `token_budget_actual`.
- **Do NOT fire the release** — P2 (ratify) + P3 (`skill_template_release` dry-run→push) are operator gates.

## Completion Summary

All 4 riders authored + self-reviewed in **one session** (alongside P0 charter). P1 exit gate met; the batch sits **P2-ready**. `adna_validate --governance .` (python3.13) = **Zero drift**; **no count bump** (no skill/template added — confirmed). Nothing pushed; nothing fired (P2/P3 are operator gates).

### Deliverables
- **Item 4** (dev→image delta) — `how/skills/skill_git_remote_setup.md`: backported to the v8.6 image state (so the diff is clean), then genericized every fleet repo name (`GRANDFATHERED` → empty-by-default + populate-guidance; §context-file, §special-case, §self-reference prose). 4 fleet names → **0**; mechanism + pedagogy preserved; empty-array lint behavior tested.
- **Item 3** (image-curated, staged) — `artifacts/staged_image_templates_agents.md`: reconciled the image `how/templates/AGENTS.md` index 23→**30** rows (12 auto + 13 manual + 5 operational); hand-verified 30/30 (0 missing, 0 phantom), types read from disk (caught the dev index's `ratification_record` type error).
- **Item 2** (image-curated, staged) — the optional STATE `phase:`/`campaigns:` frontmatter convention → `.adna/STATE.md` seed; schema is permissive (`additionalProperties: true`) so no schema change; block staged in the ledger.
- **Item 5** (image-curated, staged) — `artifacts/staged_visual_inspection_doctrine.md`: a generic, policy-only (no harness code) visual-inspection doctrine; **DE-LINK-verified** (0 wikilinks / 0 fleet-vault / 0 incident / 0 path leaks in the 16-line fold-body). DP2 recommendation = a `.adna/CLAUDE.md` subsection.
- **`release_staging_ledger.md`** — the P2 gate packet + P3 assembly manifest (per-rider fold instructions, the 3 version surfaces, the fire sequence, open decisions DP2/DP3).

### Descoped / flagged for P2
- **DP2** — item-5 doctrine placement (CLAUDE.md subsection [rec] vs. standalone file).
- **DP3** — residual `M07`/`v7.0` milestone staleness in `skill_git_remote_setup` (out of item-4 name-scope): fold into v8.7 or defer → Batch B? (+ optional item-2 doc add-ons.)

### Key Findings
- **The dev copy was OLDER than the image** (v8.6's Batch G genericized `skill_git_remote_setup` image-side; the dev source lagged). Backport-then-delta is the fold-safe pattern — a naive dev→image copy would have REGRESSED the image (re-introducing `LatticeProtocol`/`Spacemacs`/the `/Users/stanley` path). This is the v8.6 "dev-can-be-older" lesson, hit live.
- **3 of 4 riders are image-curated** (`.adna/`-side, no clean dev source): the nested templates AGENTS.md, the STATE seed, and the template CLAUDE.md subsection — so they're **staged for P3 assembly**, not dev edits. Only item 4 is a dev→image file delta.
- **Hand-verification caught a real error**: the dev templates-AGENTS index listed `ratification_record` as `type: template`; the file is `type: ratification_record`. `adna_validate` skips nested AGENTS.md, so only a disk read finds these.

### AAR
- **Worked**: authoring all 4 small riders + P0 in one session (they're independent, no composition graph); the staging ledger doubling as the P2 packet + P3 manifest; the backport-then-delta discipline keeping the item-4 fold clean; DE-LINK-grepping the item-5 fold-body before calling it done.
- **Didn't**: `token_budget_actual` is a rough estimate; item 4 surfaced adjacent milestone-staleness (M07/v7.0) that's real but out-of-scope — parked as DP3 rather than silently swept.
- **Finding**: for a template-release rider on a file that v8.6 already touched image-side, always `diff dev .adna/…` FIRST — the dev source may lag, and the true delta is against the image, not the dev copy's own history.
- **Change**: staged the 3 image-curated riders as complete/turnkey artifacts (a full reconciled AGENTS.md; an exact frontmatter block; a DE-LINKED fold-body) rather than prose instructions — cleaner P3 assembly.
- **Follow-up**: **P2 ratify** (DP2 + DP3 + freeze the 4-rider ship-set) → **P3 fire** (`skill_template_release` v8.7, tags-only, dry-run-then-pause).

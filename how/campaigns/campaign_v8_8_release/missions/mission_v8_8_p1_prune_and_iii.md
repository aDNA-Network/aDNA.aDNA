---
plan_id: mission_v8_8_p1_prune_and_iii
type: plan
title: "v8.8 P1 — .adna/CLAUDE.md prune (both diffs) + README III"
owner: stanley
status: pending
campaign_id: campaign_v8_8_release
campaign_phase: 1
campaign_mission_number: 1
mission_class: implementation
token_budget_estimated: 90
token_budget_actual:
executor_tier: opus
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
tags: [plan, campaign, v8_8_release, distillery, claude_md_prune, readme_iii]
---

# Mission: v8.8 P1 — CLAUDE.md prune + README III

**Campaign**: [[how/campaigns/campaign_v8_8_release/campaign_v8_8_release|campaign_v8_8_release]] (Operation Distillery)
**Phase**: 1 — Author · **Mission**: 1 of 1 (P2/P3 are operator gates)

## Goal

Produce the evidence the P2 gate needs to ship v8.8: a **conservative** AND an **aggressive** prune diff of the
real `.adna/CLAUDE.md`, plus a right-sized **III pass** on the actual inner + root READMEs — all as complete,
DE-LINKED, self-reviewed staged artifacts (image-curated → applied at P3, never `.adna/` edits). Do NOT pre-commit
the prune depth; that is the operator's DP1 ruling at P2, made with these diffs in hand.

## Exit Gate

Both prune diffs + the III'd READMEs authored + **adversarially re-read** ("does any cut weaken governance / break
a fork?") + DE-LINK-clean; a staging ledger (P3 manifest incl. the **5 version surfaces**) drafted; DP2/DP3
recommendations for P2; a P1 AAR filed. **No release fire** (P3, operator gate).

## Objectives

### 1. Measure `.adna/CLAUDE.md` section-by-section (M01 lesson #1)
- **Status**: ⏳ pending
- **Description**: `awk`/`sed` the real `~/aDNA/.adna/CLAUDE.md` (~7.7K tok / 447 ln) into per-`##`-section char
  counts (the 9 sections: Identity · First-Run · Project Map · Safety Rules · Standing Orders · Git Coordination ·
  Agent Protocol [~124 ln] · Domain Knowledge [~96 ln] · Working with Content [~72 ln]). Rank by prune/extract
  headroom. **Read the real file first** — identify extractable sections post-read, never author blind (M01 #2).
- **Files**: `artifacts/claude_md_section_measure.md`

### 2. Conservative prune diff (~250-500 tok)
- **Status**: ⏳ pending
- **Description**: Tighten parenthetical asides · dedupe cross-refs · compress self-evident example blocks · drop
  date-stamp parentheticals where the section already declares last-update. **Removes verbosity, never a rule.**
  Stage as a complete replacement file + a change-list.
- **Files**: `artifacts/staged_claude_md_conservative.md` (+ change-list)

### 3. Aggressive prune diff (~1.5-3k tok, extraction)
- **Status**: ⏳ pending
- **Description**: Extract dense detachable sections (candidates: Agent Protocol, Domain Knowledge) → spec/governance
  files per the **3 M01 patterns** (ecosystem-detail → `what/specs/`; governance-content → `how/governance/`;
  possible template "Personality Customization" → `how/templates/example_personalities.md`); CLAUDE.md keeps the
  top-level rule + a one-line link. **ADR-collision check** before any new ADR (`ls what/decisions/ | grep adr_`).
  Stage the pruned CLAUDE.md + the new extracted files.
- **Files**: `artifacts/staged_claude_md_aggressive.md` + the extracted-file drafts

### 4. README III (re-scoped)
- **Status**: ⏳ pending
- **Description**: A right-sized reader-panel III pass on the **actual** `.adna/README.md` (157 ln) + root
  `README.md` (88 ln) — the "870 lines / 10 cycles" premise is DEAD. Fix jargon · dark-mode/IA · confidence traps ·
  first-contact clarity; **preserve** the embed note (ADR-034 §3) + the now-correct v8.7 badges. Stage improved
  versions + a findings note.
- **Files**: `artifacts/staged_inner_readme.md` · `artifacts/staged_root_readme.md` (+ III findings)

### 5. Stage + triage close
- **Status**: ⏳ pending
- **Description**: Draft `artifacts/release_staging_ledger.md` (P3 manifest: which artifacts fold where + the **5
  version surfaces** + fire sequence). DP2 (extraction destinations) + DP3 (README scope + gitleaks rider)
  recommendations for P2. Confirm counts unchanged / adjust if extraction adds files. File the P1 AAR.
- **Files**: `artifacts/release_staging_ledger.md`

## Notes
- **Image-curated**: everything is staged; nothing edits `.adna/` (P3 applies it, SR1).
- **Recommended fresh session** — judgment-heavy; the adversarial governance re-read deserves fresh context.
- `token_budget_estimated: 90` kT (bigger than v8.7's 50 — the prune is analysis-heavy + two full diffs + III).
- **Do NOT fire** — P2 (ratify + DP1 depth ruling) + P3 (`skill_template_release`) are operator gates.

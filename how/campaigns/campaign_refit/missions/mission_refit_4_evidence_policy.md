---
plan_id: mission_refit_4_evidence_policy
type: plan
title: "Refit M4 — Evidence policy: three classes, dangle-safe, fresh-clone-true"
owner: stanley
status: planned            # activates post-G1 (DP5)
campaign_id: campaign_refit
campaign_phase: 2
campaign_mission_number: 4
mission_class: implementation
executor_tier: opus        # per-class judgment calls + reference surgery across committed docs
token_budget_estimated: "~60 kT (policy note + slim-set selection + gitignore + ref-fix sweep + dangle-check ×2)"
created: 2026-07-21
updated: 2026-07-21
last_edited_by: agent_rosetta
tags: [plan, campaign, refit, evidence, gitignore, artifacts, dangle_check]
---

# Mission: Refit M4 — Evidence policy

**Campaign**: [[campaign_refit]] · **Phase**: P2 — True-up · **Mission**: 4 of 6

## Goal

End the referenced-but-untracked evidence problem (~114 MB across onboarding captures, measure screenshots,
Lighthouse JSON, P5 evidence, scratch output): adopt the DP5 three-class policy, apply it in the dangle-safe
order, and leave a fresh clone with zero dangling evidence references — plus the one-line D5 clarifying
comment on the dev-vault's doctrine-version field.

## Exit Gate

Policy note committed + every evidence dir classified + `.gitignore` in place + **dangle-check clean both
sides** (every evidence path cited by a tracked doc is itself tracked — grep cited paths vs `git ls-files`,
run before AND after the ignore lands) + nothing deleted from disk (SO-6).

## Objectives

### 1. D3a — Author the policy + classify
- **Status**: planned
- **Description**: Per DP5, write the evidence-artifact policy note (landing zone decided in-mission —
  campaign artifact + a pointer from the relevant AGENTS.md): **Class 1** cited/claim-load-bearing slim
  evidence → committed (precedent `1616ae4`, "4 cited screens"); **Class 2** bulk regenerable capture →
  gitignored + one committed synthesis note per dir; **Class 3** external reference corpora / scratch
  (`visual_capture_out/`) → ignored. Classify every current untracked dir: `onboarding_references/*_capture/`
  (6) · `storyweave_p4_docs_ia/{m42_capture,lighthouse}/` · `storyweave_p5_measure/` · `storyweave_p5_m5_3/`
  (61 MB) · `visual_capture_out/`.
- **Files**: `how/campaigns/campaign_refit/artifacts/evidence_artifact_policy.md` (+ pointer)
- **Depends on**: G1 (DP5)

### 2. D3b — Apply in the dangle-safe order
- **Status**: planned
- **Description**: **Order is the mission**: (1) commit the Class-1 slim cited set + the per-dir synthesis
  notes; (2) land the `.gitignore` entries; (3) fix every committed doc that references now-ignored paths
  (`STATE.md` · `what/exemplars/sites/_reference_set.md` · storyweave mission docs — point at the synthesis
  notes / committed slims instead); (4) dangle-check again. Nothing is deleted from disk — untracked-and-
  ignored satisfies SO-6.
- **Files**: `.gitignore` · Class-1 evidence commits · synthesis notes · ref fixes in tracked docs
- **Depends on**: 1

### 3. D5 — The doctrine-version clarifying comment
- **Status**: planned
- **Description**: One inline comment on `aDNA.aDNA/CLAUDE.md` `version: "8.4"` distinguishing
  *doctrine-adoption version* (v8.4 consumer-facing set, per ADR-047 items-not-numbers) from *template
  governance version* (v8.8) — so a version-surface auditor stops reading it as drift. No other CLAUDE.md
  change.
- **Files**: `aDNA.aDNA/CLAUDE.md` (frontmatter comment only)
- **Depends on**: none

## Campaign Context

**Previous mission outputs**: M3 may add hermes PNGs to a dir this mission classifies — coordinate the class
before committing them.
**Next mission inputs**: G3's close SITREP claims "fresh-clone-true" on the back of this mission's
dangle-check evidence.

## Notes

The inverse trap is real: gitignoring evidence a committed claim cites recreates the dangle it set out to fix —
hence the fixed order + double dangle-check. STATE.md edits follow hard constraint 7 (anchor-insert,
single-writer).

## Completion Summary

*Fill out when setting `status: completed`.*

## AAR

*Mandatory before `status: completed` (SO-5). Include `token_budget_actual` (SO-11).*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:

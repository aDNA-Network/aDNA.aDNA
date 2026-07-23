---
plan_id: mission_refit_4_evidence_policy
type: plan
title: "Refit M4 — Evidence policy: three classes, dangle-safe, fresh-clone-true"
owner: stanley
status: completed          # G1/DP5 ratified; executed 2026-07-23 (paired with M3). Dangle-check clean both sides; AAR below.
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
- **Status**: completed
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
- **Status**: completed
- **Description**: **Order is the mission**: (1) commit the Class-1 slim cited set + the per-dir synthesis
  notes; (2) land the `.gitignore` entries; (3) fix every committed doc that references now-ignored paths
  (`STATE.md` · `what/exemplars/sites/_reference_set.md` · storyweave mission docs — point at the synthesis
  notes / committed slims instead); (4) dangle-check again. Nothing is deleted from disk — untracked-and-
  ignored satisfies SO-6.
- **Files**: `.gitignore` · Class-1 evidence commits · synthesis notes · ref fixes in tracked docs
- **Depends on**: 1

### 3. D5 — The doctrine-version clarifying comment
- **Status**: completed
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

Executed 2026-07-23 (paired with M3). **D3a** — authored
`artifacts/evidence_artifact_policy.md` (the DP5 three classes: cited-slim committed · bulk-regenerable
gitignored+provenance · external/scratch ignored), classified all evidence dirs (~150 MB), and added a pointer
from `how/missions/artifacts/AGENTS.md`. **D3b** — applied in the dangle-safe order: (1) committed 13
`capture_report.json` provenance files; (2) landed `.gitignore` scoped to `*.png` **by tree** + the two heavy
raw-Lighthouse dirs (`storyweave_p4_docs_ia/lighthouse/`, `storyweave_p5_m5_3/lighthouse/`) + `/visual_capture_out/`
— never a blanket `*.png` (which would swallow committed hero finals), verified **no tracked file became ignored**
and the tracked cited LH (`p3_measure`, `p5_measure/lh_home.json`) stays visible; (3) fixed the dangling refs —
added the "local-only, reproducible" label to `what/exemplars/sites/_reference_set.md` + the onboarding synthesis,
and a dated evidence-note to the two closed p5_3 docs (annotation, not substance); (4) dangle-check clean both
sides. **D5** — inline comment on `CLAUDE.md:3` distinguishing doctrine-adoption v8.4 from template-governance
v8.8. `adna_validate --governance` zero drift; nothing deleted from disk (SO-6).

## AAR

*Mandatory before `status: completed` (SO-5). Include `token_budget_actual` (SO-11).*

`token_budget_actual`: **~50 kT** content-load (M4 share of the paired session). Against the ~60 kT estimate —
within band (ADR-016 clean); the ref-fix sweep was smaller than feared because several docs (`measure_m42.md`,
the onboarding `_reference_set.md`) already carried the local-only convention.

- **Worked**: The `heroes/candidates/` precedent gave the policy a ready shape (commit finals+provenance, ignore
  heavy intermediates); ignoring `*.png` **by tree** (not a blanket) cleanly preserved committed site imagery;
  the double dangle-check + `git ls-files | git check-ignore --stdin` guard proved no tracked file was orphaned.
- **Didn't**: Nothing blocked. Two dirs were **partially tracked** (`m42_capture/`, `p5_measure/`) — a naive
  whole-dir ignore would have orphaned committed JSON/MD; the by-tree `*.png` scope sidestepped it.
- **Finding**: `storyweave_review/screens/` already carried its **own dir-local `.gitignore`** + a documented
  "reproducible via scripts/visual_capture.mjs" line in the campaign CLAUDE — the **informal precursor** this
  policy formalizes fleet-wide. The practice existed; it just wasn't named or uniform.
- **Change**: Evidence is now classified at authoring time (AGENTS.md pointer); a fresh clone is textually
  self-explaining (provenance + synthesis committed) while ~145 MB of heavy binaries stay local-reproducible.
- **Follow-up**: Candidate upstream idea — graduate the three-class `.gitignore` block into the standard's fork
  template so every vault inherits it (filed against M5 vNext triage). Also worth uniform-ising the two
  self-ignored screen dirs (`storyweave_review/screens/.gitignore`) onto the central policy at a future houseclean.

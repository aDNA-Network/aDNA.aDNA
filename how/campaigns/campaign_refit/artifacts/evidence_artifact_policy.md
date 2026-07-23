---
type: policy
title: "Evidence-artifact tracking policy — three classes, dangle-safe, fresh-clone-true"
campaign_id: campaign_refit
mission_id: mission_refit_4_evidence_policy
created: 2026-07-23
updated: 2026-07-23
status: active
last_edited_by: agent_rosetta
ratified_by: "Refit G1 / DP5 (Stanley, 2026-07-21) — three-class policy accepted as recommended"
tags: [policy, evidence, gitignore, artifacts, dangle_check, refit, dp5]
---

# Evidence-artifact tracking policy (DP5)

**Plain version:** our missions produce a lot of screenshots, Lighthouse JSON, and headless captures as *evidence*
for what we shipped. Some of it is small and a doc actually cites it — that we commit, so a fresh clone is
self-explaining. Most of it is heavy and regenerable on demand — that we keep on disk but **don't** commit, and we
leave a committed note saying how to regenerate it. This file is the rule for which is which, so the public repo
stays lean *and* a fresh clone never points at a file that isn't there.

**Technical version:** this is the ratified disposition of the ~150 MB of referenced-but-untracked evidence the
Refit SITREP flagged ([[sitrep_2026_07_21_state_of_the_estate]] §2 "Evidence went untracked while docs cited it").
It generalizes the pre-existing in-repo practice at `site/src/assets/heroes/candidates/` (*commit finals +
provenance JSON, gitignore heavy intermediates*) into a fleet-legible three-class rule, and the Class-1 precedent
commit `1616ae4` (Storyweave Decade-2 measure "pruned to 4 cited screens").

## The three classes

| Class | What | Disposition | Precedent |
|-------|------|-------------|-----------|
| **1 — cited / claim-load-bearing slim** | A specific screenshot or JSON a committed doc points at to *prove a claim* (a "4 cited screens" set; a home Lighthouse `lh_home.json` a mission quotes). | **Committed.** Keep the set small — prune to what is actually cited. | `1616ae4` (4 screens); `storyweave_p5_measure/lighthouse/lh_home.json` |
| **2 — bulk regenerable capture** | The full headless capture set behind a measure/reference pass — dozens of PNGs, reproducible any time via `scripts/visual_capture.mjs`. | **Heavy binaries gitignored; a committed `capture_report.json` (provenance) + the mission/synthesis note stay.** The note states "local-only, reproducible via `scripts/visual_capture.mjs`". | `heroes/candidates/` (finals + provenance committed, intermediates ignored) |
| **3 — external corpora / scratch** | Reference captures of *other* sites, or throwaway tool output no doc cites. | **Ignored** (dir-level). No provenance obligation. | `visual_capture_out/` |

## Classification of the current estate (2026-07-23)

| Directory | Size | Class | Action |
|-----------|------|-------|--------|
| `how/campaigns/campaign_storyweave/artifacts/onboarding_references/{astro,bun,hermes,raycast,valtown,vercel}_capture/` | ~35 MB | **2** | ignore `*.png`; commit each `capture_report.json`; synthesis already committed (`_reference_set.md` + `synthesis_onboarding_guidance.md` + the durable `what/exemplars/sites/site_*.md` exemplars) |
| `how/missions/artifacts/storyweave_p4_docs_ia/{m42_capture,after,after_wide,live}/` + `/lighthouse/` | ~16 MB | **2** | ignore `*.png`; `capture_report.json` + `measure_m4*.md` already committed |
| `how/missions/artifacts/storyweave_p5_measure/` | ~17 MB | **2** (with Class-1 `lh_home.json`) | ignore `*.png`; `capture_report.json` + `measure_summary.md` + `lighthouse/lh_home.json` already committed |
| `how/missions/artifacts/storyweave_p3_measure/` | — | **2** | ignore `*.png`; keep tracked JSON/MD |
| `how/missions/artifacts/storyweave_p5_m5_3/` | ~61 MB | **2** | ignore `*.png`; commit any `capture_report.json`; synthesis = `m5_3_capstone_ranker.md` + the M5.3 mission doc |
| `visual_capture_out/` (repo root) | ~18 MB | **3** | ignore dir; no citation |

## Dangle-safe application order (the mission *is* the order)

The inverse trap: gitignoring evidence a committed claim still cites recreates the dangle. So:

1. **Commit** the Class-1 cited slims already in place + every Class-2 `capture_report.json` provenance file (so a
   fresh clone gets provenance, not an empty dir).
2. **Land `.gitignore`** — scope by *tree* to `*.png` under each evidence dir (never a blanket `*.png`, which would
   swallow committed site imagery + hero finals), plus `visual_capture_out/` dir-level.
3. **Fix every dangling reference** in tracked docs to point at the committed provenance/synthesis and state the
   "local-only, reproducible" convention — chiefly `what/exemplars/sites/_reference_set.md`,
   `.../onboarding_references/{_reference_set,synthesis_onboarding_guidance}.md`, `measure_m42.md`, and the
   `storyweave_p5_m5_3` mission/ranker docs.
4. **Dangle-check** before *and* after the ignore lands: grep the evidence paths cited by tracked docs against
   `git ls-files`; both runs must show every cited path either tracked or explicitly labelled reproducible-local.

**SO-6 note:** nothing is deleted from disk. Untracked-and-ignored fully satisfies archive-never-delete — the
evidence stays on the authoring node, and any node can regenerate it.

## Self-reference (SO-8)

This policy is itself the disposition its own campaign's M4 executes, and it is the reason the file you are reading
sits in `how/campaigns/campaign_refit/artifacts/` rather than carrying a screenshot inline. The pointer at
[[campaign_refit]]'s M4 mission ([[mission_refit_4_evidence_policy]]) and the AGENTS.md note under
`how/missions/artifacts/` are how an agent finds this rule before committing the next capture set.

## Forward integration

When the next release campaign or a future measure pass generates captures, classify at authoring time (don't defer
to a cleanup mission). A future upstream idea may graduate this into the standard's `.gitignore` template so every
forked vault inherits it — filed against M5 vNext triage if the pattern proves fleet-general.

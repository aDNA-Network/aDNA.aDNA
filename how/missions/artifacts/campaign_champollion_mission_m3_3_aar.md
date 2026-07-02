---
type: aar
artifact_id: campaign_champollion_mission_m3_3_aar
title: "AAR — Champollion M3.3 (exemplar self-application: 10-dimension self-score vs v2.5)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m3_3_exemplar_self_application
executor_tier: opus
token_budget_estimated: "35 kT"
token_budget_actual: "~36 kT (opus subagent ~30 self-reported + fable bookends ~6)"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [aar, champollion, p3, m3_3, self_score, compliance, exemplar, v2_5, honesty]
---

# AAR — Mission M3.3: Exemplar self-application

**Session**: `session_stanley_20260702T161839Z_champollion_p3_sweep` · **Executor: opus subagent** at-tier, **fable-orchestrated** (Mode B) · verification-class · Ring 1.

## Scorecard

| Deliverable | Status | Notes |
|---|---|---|
| Baseline + post-fix scores with evidence | ✅ | [[../../campaigns/campaign_champollion/artifacts/exemplar_self_score|exemplar_self_score]] — **45/50 → 46/50**, per-dimension evidence paths + census commands cited inline; checker-derived vs vault-judged marked per row |
| First score under v2.5 | ✅ | scored against the live text (§7.2/§5.3/§5.5/§7.7/§15.4 read fresh); v2.5 footer + four-surface agreement confirmed |
| No silent <5 | ✅ | four post-fix 4s (D4 FAIR · D7 federation · D8 registration · D9 companions) each carry a named class-(c) gate/owner |
| Honesty criterion | ✅ | 5 named unflattering findings (47/48 skills zero-FAIR/federation · registry never exercised · adr_index gap debt · **the vault's own checker lags its own standard** · ADR-045 mid-migration) — the self-referential vault publicly scoring its own scorer as stale is the criterion working as designed |
| Class-(a) executed | ✅ | adr_index Numbering note (F-CHM-206 defer → FIXED; annotate-not-renumber; zero row/tally delta so `--governance` unaffected) |
| Class-(b) fable ruling | ✅ | checker `standard_version` bump **DEFERRED** — bundled with the F-CHM-209 rules review (bumping the string alone would claim a conformance the rules don't deliver); ruling recorded in the artifact row |
| Rubric-defect escalation honored | ✅ | **F-CHM-209** ledgered (checker v2.5-divergence bundle: stale version string · `type=="context"` under-scoring · skill NA_MAP over-application · lattice-companion flag) — the TOOL diverges, the 10-dimension rubric held |
| Validators | ✅ | `adna_validate` FULL PASS + `--governance` Zero drift, re-run independently at review |

## Deviations & escalations
- **Class-(c) → G3 (3 inputs)**: (1) should HOW-layer skills carry FAIR/federation/registry-readiness? (policy decides D4/D7/D8's ceiling AND the checker's skill NA_MAP); (2) ADR-045 git-wrapper dual-home (root `git/` + canonical `how/federation/git/`) — owner Grace Hopper/Rosetta; (3) registration readiness-vs-exercise (no lattice ever published from this vault).
- **Budget +3%** (~36 vs 35 kT): the G2 D4 class-split calibration (verification budgets the judgment surface, not the corpus) **held on its first test** — contrast M1/M2 verification rows that ran 2–2.8× under the uncalibrated estimates. Telemetry datapoint for G3.
- **Review amendments (fable)**: garbled sentence in the adr_index note repaired; dangling "§Return manifest" reference in the artifact's class-(b) row replaced with the inline ruling; churned `__pycache__/*.pyc` restored (build noise, not committed — noted: the repo tracks `__pycache__`, gitignore candidate, G3 footnote).

## AAR (5-line)
- **Worked**: separating checker-derived evidence from vault-level judgment let the score be honest in both directions — the raw 83.1% aggregate neither got parroted as "the vault is mediocre" nor papered over; the artifact explains exactly which 4s are policy questions and which were real debt.
- **Didn't**: the checker's divergence from v2.5 wasn't known until scoring started — the vault shipped a scorer behind its own standard with no trigger tying tool-rules to version cuts.
- **Finding**: a version cut (§15.4) checks four documentation surfaces but no *tooling* surface — the checklist verifies the standard says v2.5 everywhere while the conformance tool still enforces v2.4 rules.
- **Change**: proposed for G3 — add a "tooling conformance" line to the §15.4 version-cut checklist (or make the checker-rules review a standing rider on every cut), so F-CHM-209 can't recur silently at v2.6.
- **Follow-up**: G3 rules on the F-CHM-209 review venue (candidate: rider on M6.1 RC prep) + the three class-(c) policy inputs; checker version bump ships only with that review.

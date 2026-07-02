---
type: backlog_idea
status: accepted
priority: medium
fold_batch: champollion_m6_1_rc
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, idea, upstream, template_image, newcomer, currency, first_contact, champollion, m6_1_rc]
---

# Idea — v8.3 image newcomer-facing currency fixes (M4.1 fold batch)

> **Provenance**: the six items below (item 2 since RETRACTED at M4.3 review — five live) were found by the Champollion **M4.1 newcomer stress-test** (2026-07-02) — a live scratch-clone walk of the public image `aDNA-Network/aDNA` @ `e4372a6` (v8.3). Full evidence: [[../campaigns/campaign_champollion/artifacts/newcomer_stress_test|newcomer_stress_test]] (friction rows cited per item). Ledger row: [[../campaigns/campaign_champollion/artifacts/findings_ledger|F-CHM-211]]. All are **image-side** content — per campaign guardrail they ship ONLY through the operator-gated `skill_template_release` at **M6.1's RC** (`fold_batch: champollion_m6_1_rc`); no dev-vault edit fixes them.

## The batch (one RC "image currency sweep" line item)

1. **N-01 — README badges two minors stale**: `image:README.md:7` says `governance v7.2` / `standard v2.2`; the image's own files say `version: "8.3"` (`.adna/CLAUDE.md`) and `v2.4` (→ v2.5 by RC time — set from the live files at cut, don't hardcode). Front-door credibility ding.
2. ~~**N-02 — router example count**~~ **RETRACTED (M4.3 review, 2026-07-02)**: the router's "15 example lattice definitions" is semantically CORRECT (15 `*.lattice.yaml`; the earlier "census 20" was a file count including AGENTS.md + 4 `.canvas` templates). No RC fix. Kept for audit; see F-CHM-212.
3. **N-03 — router template count**: `image:CLAUDE.md:138` "22 reusable templates" → **semantic census 26** (`template_*.md`; corrected from the file-count 27 at M4.3 review — AGENTS.md is not a template).
4. **N-04 — router skills count**: `image:CLAUDE.md:139` "14 agent recipes" → **semantic census 26** `skill_*.md` (24 `skill_type: agent` + 2 process; RC wording may prefer "26 skills (24 agent recipes + 2 process)").
5. **N-08 — onboarding persona contradiction**: `image:.adna/how/skills/skill_onboarding.md:59` flatly says "Introduce yourself as Berthier", contradicting the ADR-042 `{{persona}}` parameterization and the fork skill's own Step 4 (`skill_project_fork.md:157` — "ensures a fresh fork never inherits the base `Berthier` name"). Recast line 59 as the *default-when-unresolved*, mirroring lines 187/194/202.
6. **N-07 image-pointer half — no "learn more" line in the image**: the image ships no tutorials/workshops (by design) but README/`aDNA_overview.md`/`adna.md` also carry **zero** "start here / learn more" pointer beyond the 47K spec + bare site link. Add one explicit learning-path pointer line (→ adna.network learning path once M4.2/M4.3 land it) to the image README. (The site/vault halves of N-07 are M4.2/M4.3 work, not this fold.)

## RC discipline

Counts and versions above are the 2026-07-02 census — **re-census at RC time** (the counting standard in [[../../what/patterns/AGENTS|patterns AGENTS.md]]: records ≠ adoptions; census-verified, never inherited). Items 2–4 fix narrated counts; consider whether the RC should also de-brittle them (e.g. "20+ examples" or generated counts) per the recurring narrated-count defect class (same class as F-CHM-007/010).

**RC audit candidates** (unverified — from M4.1's out-of-scope manifest, image-side so they ride this lane, cheap to check at RC): `image:.adna/setup.sh:3` "14 community plugins" narrated count · `image:.adna/what/docs/projects_folder_pattern.md` currency vs the v8 layout · `image:.adna/what/docs/aDNA_overview.md` full re-currency (47K self-labeled "pre-aDNA-v7.0" — an RC-scale content decision: refresh, trim, or re-stamp as archival).

## Evidence

- [[../campaigns/campaign_champollion/artifacts/newcomer_stress_test|M4.1 artifact]] §1 (census), §3 rows N-01..04/N-08/N-07, §2 legs 1–3 (as-lived narrative).
- Orchestrator re-verification 2026-07-02: badges line, router lines 137–139, onboarding:59 + fork:157 all independently re-read; counts re-run against the clone.

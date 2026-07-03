---
plan_id: mission_champollion_m6_1_template_release_candidate
type: plan
title: "M6.1 — Template release candidate: batch ALL gate-ratified folds → skill_template_release dry-run → RC HELD at G6"
owner: stanley
status: planned
campaign_id: campaign_champollion
campaign_phase: 6
campaign_mission_number: 1
mission_class: integration
executor_tier: opus
token_budget_estimated: "45 kT + Mode-B allowance (~52; G3 D4) — integration-class; the fold corpus is IN-vault (pre-pinning n/a) but LARGE: fable's verify-before-dispatch curates the RC composition before any assembly token is spent"
token_budget_actual: "TBD"
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p6, release_candidate, template_release, fold_batch, checker_unit, m6_1]
---

# Mission M6.1 — The release candidate

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (assembly + dry-run) with fable bookends — fable DECIDES the RC composition** (charter row; the curation is judgment work) · **Ring 1** · **Mode B**.

## Objective

Assemble the **v8.4-class release candidate** of the public template image: batch every gate-ratified fold accumulated across G0–G5 into a `skill_template_release` **dry-run** (diff-based assembly against `aDNA-Network/aDNA`), producing an RC diff + release notes **HELD at G6** — the operator fires the actual release. `.adna/` and the public image remain untouched until G6 fires.

## The accumulated rider batch (authoritative enumeration at verify-before-dispatch)

1. **The fold-batch backlog**: every idea file tagged `fold_batch: champollion_m6_1_rc` (`grep -rl "fold_batch: champollion_m6_1_rc" how/backlog/` — ~31 items from the M1.1 adjudication + the P3 pattern fold-stubs + F-CHM-208's idea + `idea_image_newcomer_currency_fixes` [the F-CHM-211 image-currency batch: README badges · router counts semantic-censused · onboarding persona line · image-side learn-pointer]). **Fable curates**: each item is IN (rides the RC), DEFER (named next-release trigger), or DROP (reason recorded) — the curation table is the mission's first artifact section.
2. **The C6 template fold** (G3-D2a, `accepted`): mission-template `executor_tier` + `token_budget_estimated` fields (`idea_upstream_model_tier_mission_fields`).
3. **The checker unit** (one review, one unit — G3-D5 + G5-D4b): `compliance_checker.py` F-CHM-209 bundle (version `"2.4"`→`"2.5"` · context type-set · skill NA_MAP per the EXEMPT-AS-POLICY ruling · lattice-companion semantics) **+ `adna_validate.py` F-CHM-215/GI-1 fix** (generalize nested-instance detection: auto-exclude any subtree carrying its own `.git` + governance files; keep the two hardcoded reference paths as fallback; verify against LatticeProtocol.aDNA read-only — the false-positive count must collapse).
4. **The image-side v2.5 fold** (G2): the standard cut propagates to the image's `adna_standard.md` copy.
5. **Site-currency unit** (G4-D4.1/4.2 + M5.3): `specification.mdx` v2.5 re-mirror (deliberate spec-port — body, not just header) · `NetworkDiagram.astro` stale `SiteForge.aDNA` label · the site tutorial-mirror for `tutorial_exchange_adoption_path` (the M5.3 investigation documented the machinery: `.mdx` + `seoSchema` + `section` + wikilink→route conversion).
6. **F-CHM-214 three-source harmonization**: reconcile the readiness-check lists (CLAUDE.md §Registry Awareness · `concept_lattice_composition.md` · the `check_federation_readiness` docstring) against `how/skills/skill_lattice_publish.md` as authoritative.
7. **The machine-readable codepin file** (G5-D5.3, ruled IN): `what/context/codepin.md`-equivalent recording OUR consumption pin of the LP spec (`8cb6e1e`), mirroring LP's canonical instance shape (pinned_sha · verify · refresh_protocol · consumers).

## Work

1. **Fable verify-before-dispatch = the RC composition ruling**: enumerate the fold batch (item 1's grep + items 2–7), curate IN/DEFER/DROP, size the assembly. If the IN-set exceeds what one opus subagent can assemble coherently (~55 kT), split into two dispatches (vault-side unit · image/site-side unit) — Mode B allows serial subagents in one mission.
2. **Opus assembly**: execute the IN-set (vault fixes land normally; image-side changes are assembled AS THE RELEASE DIFF per `skill_template_release`'s diff-based method — staged in the skill's working area, never pushed, never applied to `.adna/`).
3. **Dry-run** `skill_template_release` through its gate-fire point and STOP (the skill's operator-gate step = G6); capture the dry-run report (files changed · version bumps · sanitizer results).
4. **RC record**: `artifacts/release_candidate_v8_4.md` — curation table · assembly manifest · dry-run report · release-notes draft · next-release-triggers for every DEFER.
5. Standing sweep clause: out-of-scope hits → manifest.

## Acceptance criteria

- [ ] Curation table complete (every batch item IN/DEFER/DROP with reason); fable ruled composition.
- [ ] IN-set assembled; checker unit passes its own tools' tests (validator re-run on this vault AND read-only on LP shows the false-positive collapse); site changes build green (`npx astro build`).
- [ ] `skill_template_release` dry-run complete + report captured; **NOTHING released, `.adna/` untouched, no push** — RC HELD at G6.
- [ ] Fable review passed; `adna_validate` FULL PASS + `--governance` zero drift; explicit-path commit.

## Guardrails

`.adna/` + `aDNA-Network/aDNA` absolutely untouched (the RC is a held diff) · no push/deploy · NAMES-ONLY · KEEP-when-ambiguous on curation (DEFER over DROP when unsure) · P4/P5-learned: quiescence check post-notification; semantic census on every count the RC touches; link sweeps cover nav/data TS.

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .` + `--governance` · `npx astro build` (if site touched) · the checker-unit before/after on LP (read-only) · the dry-run report exists + names its gate-fire stop point · `git -C /Users/stanley/aDNA/.adna status` untouched.

## Escalation triggers

- A fold item's content contradicts a ratified decision → G6 input, do not improvise.
- The dry-run surfaces a sanitizer/gitleaks finding → HALT, report immediately (release-blocking class).
- Budget > 70 kT → halt and report.

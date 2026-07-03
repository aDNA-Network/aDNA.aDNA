---
plan_id: mission_champollion_m6_3_adversarial_pass_2
type: plan
title: "M6.3 — Adversarial pass 2 + security re-verify (pre-release skeptics vs the RC)"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 6
campaign_mission_number: 3
mission_class: review
executor_tier: fable
token_budget_estimated: "40 kT (fable-led at-tier — review substance stays fable per the G2 re-tier; runs AFTER M6.1 so the RC exists to attack)"
token_budget_actual: "~30 kT vs 40 est (−25%, at-tier direct): 3 lenses (route-walk · census · decision-trace) + gitleaks full-history triage (9/9 FP, metadata-only) + NAMES-ONLY batch sweep + the F1/F2/F3 amendment loop (route-through-curation → clone re-edit → patch regen → re-verify). Fable-direct probes stayed surgical (python extracts, never full-file reads)."
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p6, adversarial, security, review, m6_3]
---

# Mission M6.3 — Adversarial pass 2 + security re-verify

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: FABLE, at-tier direct** (charter: missions whose substance IS review stay fable-led; M1.5/M2.2 precedent — no subagent build) · **Ring 1** · runs **after M6.1** (the RC must exist to be attacked).

## Objective

The pre-release skeptics' pass: attack the **release candidate + the P4/P5 public-facing surfaces** through three adversarial lenses (the P0 pass-1 trio: **newcomer** · **hostile forker** · **standards lawyer**), then re-verify security posture. Findings fix-now or gate-flag; nothing ships un-attacked.

## Work

1. **Adversarial lenses vs the RC** (from the M6.1 dry-run report + curation table): newcomer — does the assembled image's first hour still walk green after the RC's changes (delta vs the M4.1 baseline)? hostile forker — can any RC change be twisted, does any count/claim over-promise, do the release notes match the diff? standards lawyer — does every RC fold trace to a ratified decision (the §7.7 discipline applied to our own release)?
2. **Verification-independence discipline self-applied** (F-CHM-212): each lens uses a different method than the artifact it checks (semantic census vs file count; route-walk vs link-grep; decision-trace vs changelog).
3. **Security re-verify**: NAMES-ONLY sweep (fresh grep for the known credential-name set — names allowed, values never) · gitleaks full-repo run (not just pre-push increment) · token-hygiene check on session/artifact records · the public-boundary check on both staged-memo releases.
4. **Findings**: fix-now (small, in-scope) or **G6-flag** (release-blocking vs release-noting, explicitly classed); ledger rows for anything durable.
5. Artifact: `artifacts/adversarial_pass_2.md` — per-lens findings + methods table + security results + the G6 input list.

## Acceptance criteria

- [ ] All three lenses run against the RC + P4/P5 surfaces with methods varied; findings dispositioned (fixed / G6-flagged w/ class).
- [ ] Security: gitleaks full-history clean · NAMES-ONLY sweep clean · staged memos boundary-checked.
- [ ] Artifact complete; `adna_validate` FULL PASS + `--governance` zero drift; explicit-path commit (no push — batches at G6).

## Guardrails

Fable-led, at-tier, no builder dispatch · fixes stay small (a fix that grows into a mission → G6-flag instead) · `.adna/` + the RC diff untouched by fixes (RC changes route back through M6.1's curation, never edited directly here) · NAMES-ONLY.

## Verification surface

gitleaks exit code + finding count · the methods table shows no lens reused its target's method · `adna_validate` both modes.

## Escalation triggers

- Any release-blocking security finding → HALT + immediate operator flag (do not wait for G6).
- A lens finding invalidates an RC fold → G6 input with the M6.1 curation row cited; do not unwind the RC unilaterally.
- Budget > 55 kT → halt and report.

---
plan_id: mission_champollion_m4_1_newcomer_stress_test
type: plan
title: "M4.1 — Newcomer Stress-Test (the real first hour, run honestly)"
owner: stanley
status: planned
campaign_id: campaign_champollion
campaign_phase: 4
campaign_mission_number: 1
mission_class: verification
executor_tier: opus
token_budget_estimated: "45 kT (verification-class but with real execution surface — the walk itself is the work, not a re-derivable judgment; G2 class-split note: the fix-list synthesis half is the judgment surface)"
token_budget_actual: "TBD"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p4, newcomer, stress_test, first_contact, install, m4_1]
---

# Mission M4.1 — Newcomer Stress-Test

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** (fable designed this protocol; fable reviews the friction log into the fix-list — G2 re-tier) · **Ring 1** · **Mode B** (opus subagent under fable orchestration).

## Objective

Run the **real newcomer first hour honestly, end to end**: `git clone https://github.com/aDNA-Network/aDNA.git` into a **fresh scratch directory** (never `~/aDNA` — this node's live workspace), then walk what a brand-new operator actually meets — the README promise, the `claude` cold-start path (simulated by reading what the workspace router + onboarding skill *would* do, since a live nested `claude` session can't run here), first-project fork, the learning path entry — and produce a **severity-ranked friction log → fix-list** with every item classed (fix-now-in-P4 / M4.2-M4.4-lane / template-fold → M6.1 / decline-with-reason). The vault teaches first contact; this mission tests whether first contact works.

## Work

1. **Fresh-eyes clone**: clone the public image `aDNA-Network/aDNA` into the session scratchpad (NOT the live workspace). Record clone size, time, and the first 5 minutes of what a newcomer sees (README → structure → first instruction).
2. **Walk the documented first hour** as written, not as intended: README quickstart → `.adna/` presence → workspace CLAUDE.md Step 0/0a/1 flow (trace it as an agent WOULD execute it on a fresh node — first-run detection, onboarding skill path, project fork path) → the learning-path entry (`what/tutorials/` beginner route) → first workshop (`workshop_build_your_first_vault.md` — F-CHM-207 says its clone instructions are stale; verify and log, fix rides M4.3).
3. **Friction log**: every stumble, ambiguity, stale instruction, dead link, wrong count, missing file — one row each, severity-ranked (blocker / major / paper-cut), with the exact file:line and what a newcomer would experience.
4. **Fix-list synthesis** (fable reviews this): route every row — (a) mechanical-safe fix NOW in this vault's docs, (b) → M4.2 (site) / M4.3 (learning path/README) / M4.4 (content currency), (c) template-image fix → `fold_batch: champollion_m6_1_rc` stub, (d) decline-with-reason.
5. Standing sweep clause: out-of-scope hits → manifest.

## Acceptance criteria

- [ ] The clone-and-walk actually executed against the live public image (evidence: clone log + walked-path listing in the artifact), not simulated from memory of the repo.
- [ ] Friction log + fix-list at `how/campaigns/campaign_champollion/artifacts/newcomer_stress_test.md`, severity-ranked, every row routed (a)/(b)/(c)/(d) — no silent drops.
- [ ] Class-(a) fixes executed; (b)-routes annotated into the M4.2/M4.3/M4.4 briefs; (c) stubs marked for M6.1.
- [ ] Fable review passed (the log reads like a newcomer's hour, not a checklist); `adna_validate` FULL PASS; explicit-path commit.

## Guardrails

The scratch clone is read-and-walk only — never `git push`, never file issues upstream, never modify the public image · fixes land ONLY in this vault (`.adna/` untouched — image fixes are (c)-class stubs) · the honest-walk rule: if an instruction fails, log the failure as a newcomer would hit it — do not silently route around it and report success · no push (batches at G4).

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .`; the artifact's walked-path evidence (clone log, file listing); fable bookend reviews friction-log honesty (a zero-friction hour is an automatic rejection — F-CHM-207 alone guarantees ≥1 real finding).

## Escalation triggers

- The public image is structurally broken for newcomers (clone fails, README lies at the blocker level) → flag immediately; that's a G4-input + possible emergency M6.1 scope change.
- A friction item needs a normative standard change → G4/ADR input, not a fix.
- Budget > 60 kT → halt and report.

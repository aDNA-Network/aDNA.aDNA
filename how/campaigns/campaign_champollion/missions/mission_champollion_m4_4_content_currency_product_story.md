---
plan_id: mission_champollion_m4_4_content_currency_product_story
type: plan
title: "M4.4 — Site content currency vs v2.5 + product story + the G3-D6 hygiene batch"
owner: stanley
status: planned
campaign_id: campaign_champollion
campaign_phase: 4
campaign_mission_number: 4
mission_class: implementation
executor_tier: opus
token_budget_estimated: "40 kT (charter 35 + Mode-B bookend allowance ~+15% per G3 D4; hygiene batch is mechanical, sweep-shaped)"
token_budget_actual: "TBD"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p4, content_currency, product_story, webforge_sweep, hygiene, m4_4]
---

# Mission M4.4 — Content currency + product story + hygiene batch

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** · **Ring 2** (compressible — accepted-carry if G4-window compresses; the ring cut at G3 kept it live) · **Mode B**.

## Objective

True the site's content to the **now-live v2.5** standard + current fleet reality (the charter originally scoped this "vs v2.4/v8.3" — the version moved under it, which is itself the lesson this mission teaches), tell the **product story** coherently (context democracy · Exchange · Lighthouse adoption — brand-lock: *aDNA = network/brand, Lattice Protocol = the standard it runs on*), and execute the **G3-D6 hygiene batch**: (1) the `Websites.aDNA → WebForge.aDNA` reference sweep (~22 refs, LIVE-vs-HISTORICAL qualified), (2) the ADR-045 git-wrapper dual-home reconcile (root `git/` vs canonical `how/federation/git/` — coordinate with Grace Hopper via memo, Rule 10), (3) `__pycache__` gitignore.

## Work

1. **Content currency sweep** (site + vault teaching surfaces): version cites → v2.5 where LIVE (keep dated/historical cites — the M1.4 keep/strip classifier); counts census-verified (patterns 22 · skills post-M4.2 · ADRs 41 · templates 41); fleet names current (WebForge, Operations, Videos, etc.).
2. **Product story pass**: the three-story arc (context democracy / Exchange / Lighthouse adoption) reads coherently across landing + docs; brand-lock enforced; claims match what actually shipped (verify against LP's STATE via read-only codepin discipline — cite at pin, never re-specify).
3. **Hygiene batch**:
   - **WebForge sweep**: qualified-token sweep of `Websites.aDNA` (~22 refs per the intake memo) — LIVE-routing refs → `WebForge.aDNA`; HISTORICAL/provenance rows KEEP with the old name (phase-record precedent).
   - **Git dual-home**: stage a coordination memo to Grace Hopper (Git.aDNA) proposing the reconcile (canonical = `how/federation/git/`, root `git/` → symlink or absorb per their ADR-006 posture); execute the local move only after their ack OR as the memo proposes if it's this-vault-unilateral (fable rules at review).
   - **`.gitignore`**: add `__pycache__/` + `*.pyc`; `git rm -r --cached` the tracked pycache dirs (archive-never-delete does not apply to build artifacts — they regenerate).
4. Standing sweep clause: out-of-scope hits → manifest.

## Acceptance criteria

- [ ] Zero stale LIVE v2.4-era cites on teaching/site surfaces (historical cites preserved + qualified); counts census-true; `npx astro build` green.
- [ ] Product story coherent + brand-locked; LP claims cite-at-pin.
- [ ] Hygiene: WebForge sweep done (LIVE→new, HISTORICAL kept, tally reported); git dual-home memo staged (+ local reconcile if ruled); pycache untracked + ignored.
- [ ] Fable review passed; `adna_validate` FULL PASS + `--governance` zero drift; explicit-path commit.

## Guardrails

Ring-2 discipline (halt-and-convert on compression/budget breach) · KEEP-historical is the default for dated/provenance rows — when ambiguous, keep + flag (M1.4 lesson) · cross-graph = memo only (the Grace Hopper reconcile is staged, never written into Git.aDNA) · no deploy, no push (batches at G4) · `.adna/` untouched.

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .` + `--governance`; `npx astro build`; post-sweep grep tallies (`Websites.aDNA` remaining = historical-only, listed); `git status` shows pycache gone from tracking.

## Escalation triggers

- The product story requires claims LP hasn't shipped → cite-at-pin honestly or cut the claim; never forward-promise another graph's roadmap.
- The dual-home reconcile turns out to have >5 consumer touchpoints → scope is wrong for a batch item; report for G4.
- Budget > 55 kT → halt and report (Ring-2).

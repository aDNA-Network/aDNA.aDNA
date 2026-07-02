---
plan_id: mission_champollion_m5_3_exchange_lighthouse_story
type: plan
title: "M5.3 — The Exchange/Lighthouse adoption story, teachable end-to-end (tutorial + use_case: pull → build-to-spec → memorialize)"
owner: stanley
status: planned
campaign_id: campaign_champollion
campaign_phase: 5
campaign_mission_number: 3
mission_class: implementation
executor_tier: opus
token_budget_estimated: "40 kT + Mode-B bookend allowance (~46; G3 D4)"
token_budget_actual: "TBD"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p5, exchange, lighthouse, tutorial, use_case, adoption_story, m5_3]
---

# Mission M5.3 — Exchange/Lighthouse adoption story

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** · **Ring 2** (compressible — halt-and-convert discipline) · **Mode B**.

## Objective

Make the adoption story **teachable end-to-end**: a newcomer can follow *pull → build-to-spec → memorialize* — pull a published lattice/context from the Exchange story, build against the standard, memorialize the result — as one coherent learning path. Deliverables: a **tutorial** (`what/tutorials/`) + a **use_case** narrative (`what/use_cases/`), both dual-audience, both honest about what is shipped versus horizon.

## Work

1. **Verify-before-dispatch** (fable): pin the shipped-vs-horizon boundary from live STATEs (read-only): Exchange.aDNA (tier-0 pilot complete, Agora-II at gate — registry-based composition works TODAY; cross-node exchange = membership substrate, still building) · Lighthouse.aDNA (genesis P0-authored 2026-07-01; build gates on Git.aDNA P7) · this vault's Registry Awareness teaching (`latlab lattice publish/pull/compose` — real commands, never exercised from this vault per the G3-D6.5 OoB defer row). The M4.4 product-story pass is the tone precedent (educators framing: "teach it as the horizon… not a shipped feature").
2. **Tutorial**: `what/tutorials/tutorial_exchange_adoption_path.md` (name per tutorials-dir conventions; check `what/tutorials/AGENTS.md` + the M4.3 first-tutorial designation so ordering/prerequisites slot correctly). Walk the three beats with the shipped subset executable as written (publish-readiness checks, registry semantics, compose patterns) and the horizon beats explicitly labeled — a step that cannot run today is TAUGHT as design, never narrated as if it runs (the M4.1/M4.3 honest-walk discipline).
3. **Use case**: `what/use_cases/use_case_exchange_lighthouse_adoption.md` — narrative register (a node adopts via Lighthouse; builds to the standard; memorializes back), FAIR/federation touchpoints named, zero forward-promises: Lighthouse cited at what shipped (P0 charter; Keystone composition manifest v1), Exchange at its pilot reality.
4. **Cross-linking + site**: SO-10 (≥2 wikilinks each, into the concepts/patterns graph — `concept_lattice_composition`, `concept_context_commons`, the federation pattern); site mirror of the tutorial is IN scope only if it is a straight mirror-add (the M4.2/M4.3 site machinery — collection page + `section` frontmatter); anything more → M6.1 site-currency rider. Fable rules at review.
5. Standing sweep clause: out-of-scope hits → manifest. Artifact: walk log + shipped-vs-horizon boundary table appended to `artifacts/conformance_bilateral.md`'s sibling or its own `artifacts/adoption_story_record.md` (builder proposes).

## Acceptance criteria

- [ ] Tutorial + use_case exist, pass dual-audience (SO-7) + self-reference (SO-8) + cross-links (SO-10); tutorial's executable steps **walked honest** (per-step PASS/TAUGHT-AS-DESIGN log — zero steps narrated-as-working that don't).
- [ ] Every Exchange/Lighthouse/LP claim cite-at-pin against the live STATEs; zero roadmap forward-promises.
- [ ] `npx astro build` green if the site was touched; `adna_validate` FULL PASS + `--governance` zero drift.
- [ ] Fable review passed; explicit-path commit (no push — batches at G5).

## Guardrails

**Ring-2 discipline**: halt-and-convert on compression or budget breach · read-only in Exchange.aDNA / Lighthouse.aDNA / LatticeProtocol.aDNA · roadmap honesty is the mission's spine — when in doubt, teach the shipped subset and name the horizon · NAMES-ONLY · P4-learned: link-sweep surfaces include `src/utils/navigation.ts` + `src/data/*.ts` if the site is touched (F-CHM-213); post-notification quiescence check (TaskStop the dispatch id) before review-fixes.

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .` + `--governance`; the per-step walk log; grep: no writes outside this vault; if site touched — build page-count delta explained.

## Escalation triggers

- The story cannot reach "teachable end-to-end" on shipped capability alone (the honest subset guts the tutorial) → G5 input with the boundary table; do not pad with fiction.
- The registry-exercise gap (never published from this vault) blocks a step that must be executable → note against the G3-D6.5 OoB defer row; teach the readiness checks; do NOT run an unratified first publish (registry writes are outward-facing).
- Budget > 55 kT → halt and report (Ring-2).

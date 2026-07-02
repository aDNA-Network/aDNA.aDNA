---
plan_id: mission_champollion_m3_1_pattern_harvest_i
type: plan
title: "M3.1 — Pattern harvest I (LP codepin · Order-of-Battle · STATE ⏭ QUEUED banner)"
owner: stanley
status: planned
campaign_id: campaign_champollion
campaign_phase: 3
campaign_mission_number: 1
mission_class: implementation
executor_tier: opus
token_budget_estimated: "40 kT"
token_budget_actual: "TBD"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p3, pattern_harvest, codepin, order_of_battle, state_queued, m3_1]
---

# Mission M3.1 — Pattern harvest I

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** (G2 role model — fable authored this brief, verifies it against the live tree before dispatch, and independently reviews the harvested patterns before commit) · **Ring 1** (pattern harvest is the campaign's heart, directive §6.D).

## Objective

Harvest three proven, live mechanisms into reusable pattern files at `what/patterns/` — each written as a dual-audience lesson (SO-7/SO-8) with instance evidence, so any fleet vault can adopt by copy instead of archaeology: (1) the **cross-graph codepin** (pinning a cross-graph code/spec reference to a commit SHA — e.g. M5.2's "LP spec @ codepin `47935b6`"), (2) the **Order-of-Battle campaign-planning artifact** (this campaign's own [[../artifacts/order_of_battle|order_of_battle]] as the instance), (3) the **STATE ⏭ QUEUED banner** (the cold-start handoff discipline that replaced the self-superseding Next-Session-Prompt stack — M1.5's key finding).

## Work

1. Study the live instances first (verify-don't-inherit): codepin uses in this vault + LatticeProtocol's STATE/charter; the Champollion + (read-only) Carnot OoB artifacts; this vault's QUEUED banner + `STATE_archive.md` provenance + `idea_state_prompt_shed_on_close`.
2. Author three pattern files (naming per house convention, e.g. `pattern_cross_graph_codepin.md` · `pattern_order_of_battle.md` · `pattern_state_queued_banner.md`): plain-language version first, then the mechanism, then **≥2 cited instances by path**, adoption notes, and graduation status (`instances:` count; stays `draft` below 3 per the graduation discipline).
3. Where a pattern implies a template fold, add the fold **stub only**, marked `fold_batch: champollion_m6_1_rc` (ships via M6.1's RC through `skill_template_release` — never directly).
4. Cross-link: each pattern ≥2 resolving wikilinks (SO-10) + a pointer from `what/patterns/` AGENTS/index surface if one exists (enumerate live before editing).
5. End with the standing sweep clause: workspace grep for names/claims this mission introduces or changes; out-of-scope hits reported in the return manifest for fable adjudication, not fixed.

## Acceptance criteria

- [ ] Three pattern files live in `what/patterns/`, each dual-audience, each citing ≥2 live instances by path, each with graduation status + `instances:` frontmatter.
- [ ] Template-fold stubs (if any) marked `fold_batch: champollion_m6_1_rc`; zero `.adna/` writes.
- [ ] Fable independent review passed (bookend contract); wikilinks resolve; no orphans.
- [ ] `adna_validate` FULL PASS; explicit-path commit.

## Guardrails

Patterns record what IS practiced — instance evidence over invention; if instances diverge, describe the divergence honestly rather than canonizing one side · no `.adna/` writes · no push (batches at G3) · no edits outside `what/patterns/` + its index surface (out-of-scope findings → manifest) · Carnot's tree is read-only (cross-graph writes = coordination memos only, Inviolable §6).

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .`; per-pattern instance-path spot-check (fable bookend); wikilink resolution.

## Escalation triggers

- A harvested mechanism is contested or diverges across instances with no honest common core → flag for the fable reviewer / G3, do not canonize.
- A pattern turns out to need a normative standard change (not just a template stub) → G3/ADR input.
- Budget > 55 kT → halt and report.

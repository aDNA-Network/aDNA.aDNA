---
plan_id: mission_skills_m07_quality_pass
type: plan
title: "Skills M07 quality / dedup / graduation pass"
owner: stanley
status: completed
mission_class: implementation
mission_kind: skills_quality_pass
source: "continue-the-campaign (operator lane choice) + STATE.md M07 carry-forward + idea_pattern_graduation_skill_authoring"
token_budget_estimated: "~100-150 kT (80-200 tier): denominator-honest audit (subagents + script) + small frontmatter/doc fixes + 3 graduation skill files (~50-80 kT) + 4-source count sync + validate + records"
created: 2026-06-30
updated: 2026-06-30
last_edited_by: agent_stanley
completed: 2026-06-30
tags: [plan, skills, quality, dedup, graduation, m07, d_grad_reversal, rosetta]
---

# Mission: Skills M07 Quality / Dedup / Graduation Pass

**Origin**: operator "continue the campaign" with every other lane closed → chose the long-carried **Skills M07** item (STATE.md §Next Steps carry; the latest Next Session Prompt). Plan: `/Users/stanley/.claude/plans/please-read-the-claude-md-federated-snowglobe.md` (operator-approved). Reverses the standing **D-GRAD** deferral (author the graduation-ready skill files now).

## Goal

Bring the 45-skill inventory to a verified-clean, fully-conformant state; author the 3 graduation-ready deferred skill files; honestly disposition the stragglers; close the M07 carry items — with `adna_validate` Full PASS + Zero governance drift at the new count, zero site-gate regression.

## Exit Gate

3 missing `trigger` fields filled; category/status vocabulary documented; 3 graduation skills authored; inventory 45→48 synced across all 4 sources; `adna_validate . --level starter` exit 0 + `--governance` Zero drift; `npx astro build` 0 err; structural gates green; AAR filed; STATE.md updated; committed (push HELD).

## Tasks

### A. Audit (denominator-honest)
- **Status**: done — `scratchpad/skills_audit.py` (python3.13) over all 45 `skill_*.md`. Findings: 3 missing `trigger`; category drift (18 values vs 9 documented); 2 status off-enum (`proposed`/`legacy`). No dup filenames; naming OK; clusters intentional.

### B. Apply fixes (add-only / doc)
- **Status**: done — added `trigger:` to `skill_upstream_contribution` + `skill_upstream_drift_review` + `skill_upstream_drift_watch` (add-only). `how/skills/AGENTS.md`: `category` reframed as an **open vocabulary** + curated common list (incl. quality/design/infrastructure); `status` enum extended to `active|proposed|draft|deprecated|legacy` with definitions. **0 per-skill category/status churn** (documented reality vs flattening 19 skills).

### C. Straggler dispositions
- **Status**: done — **KEEP all three** (correct holding states, now documented): `sqlite_persistence` (`proposed` — well-formed optional alongside-Markdown capability); `upstream_drift_review` + `upstream_drift_watch` (`draft` — their own two-cycle-ratification gate is unmet; self-documented in-file). No status forced.

### D. Graduation authoring (reverses D-GRAD)
- **Status**: done — authored `skill_cross_skill_primitive_composition` (3/3→5/5), `skill_forward_reference_stub_design` (3/3→11/3+), `skill_substrate_inversion_with_adr` (3/3) from the `idea_pattern_graduation_skill_authoring` substrate + M3.4/M3.7 AARs. Inventory **45→48** (project 24→27) synced across CLAUDE.md + MANIFEST.md (×2) + AGENTS.md + glossary_skill.md. Backlog idea → `completed` (2 seeds carry forward at 1/3).

### E. M07 carry-item closeout
- **Status**: done — MANIFEST Project Identity **verified complete** (current; `aDNA-Network/aDNA`, ADR-034, dev-graph framing). Token re-measurement **DEFERRED** (heavy instrumentation mission; ADR-016 already gives a working session-cost model; protocol substrate at `m01_obj9_token_measurement_protocol.md`). Doc-grep deeper sweep **SUPERSEDED** by `mission_vault_wide_currency_sweep` (2026-06-29).

### F. Validate + record
- **Status**: done — `adna_validate . --level starter` **exit 0** ("all checks pass"); `--governance` **Zero drift**; `npx astro build` **179pp / 0 err**; fast structural gates **189/189**; git scope clean (9 mod + 4 new, no do-not-touch path, no `.pyc`).

## Completion Summary

### Deliverables
- **3 graduation skill files** authored (full conformant frontmatter, worked-example evidence tables, ≥4 wikilinks each) → inventory **48**.
- **3 `trigger` fields** backfilled (add-only); **skills/AGENTS.md** category (open vocabulary + curated) + status enum documented to match deliberate practice.
- **4-source count sync** 45→48 / 24→27; `idea_pattern_graduation_skill_authoring` resolved (3 authored; 2 seeds carry forward).
- **Validation**: validator exit 0 + Zero governance drift; build 179pp/0err; 189/189 structural gates.

### Dispositions recorded
- Stragglers (sqlite/drift×2): KEEP, correct holding states, documented.
- Token re-measurement: deferred (ADR-016 model exists). Doc-grep: superseded (currency sweep).

## AAR

- **Worked**: the denominator-honest audit script (mirroring the validator's exact count regex) earned its keep — it caught what a 3-field eyeball missed (3 missing triggers, the `Skills (45)` paren-form at MANIFEST:133, 18-value category drift). Documenting deliberate vocabulary (open category + extended status enum) beat flattening 19 skills — 0 churn, full fidelity, honest.
- **Didn't**: the prior subagent audit reported "100% conformant / audit passed" on 3 fields only — a false all-clear; trust the script, not the summary. Category drift was far broader than the plan's "add quality" anticipated (surfaced + handled transparently).
- **Finding**: the skills inventory's real gaps were doc-vs-deliberate-practice drift, not defects — the fix is "document reality," the same denominator-honest keep/strip-class move as the currency sweep + fleet-defects arcs.
- **Change**: when an audit subagent claims full conformance, re-run a field-exhaustive script against the actual required-field set + the consumer's exact regex before believing it.
- **Follow-up**: 2 graduation seeds (twin_adr / modular_iii_consumer) author at their 3rd instance; `template_skill.md` enum line could mirror the open-vocabulary note at the next `skill_template_release` (upstream-gated). Push HELD.

> **Token budget (SO11):** estimated ~100-150 kT (80-200 tier); actual content-load ~in-band (3 Explore subagents front-loaded the state map; main-loop = audit script + ~16 edits + 3 skill authorings + 2 validation runs + build/gates). No >2× drift; no retrospective.

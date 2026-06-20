---
plan_id: mission_hearthstone_p2_home_claude_template
type: plan
title: "P2 M2 — template_home_claude.md: genericized, persona-portable Hestia node-governance template (dev graph)"
owner: stanley
status: completed
campaign_id: campaign_hearthstone
campaign_phase: 2
campaign_mission_number: 2
mission_class: implementation
status_note: completed 2026-06-19 on operator P2 phase-exit (Decision 4)
created: 2026-06-19
updated: 2026-06-19
last_edited_by: agent_rosetta
token_budget_estimated: "~35 kT content-load (governance authoring: one genericized template lifted from a verified reference + index registration + scratch-fork verification)"
token_budget_actual: "~55 kT (shared with M3 in one P2 arc; orientation reads of campaign + 2 ideas + 5 dev files loaded once)"
tags: [plan, campaign, hearthstone, p2, home_claude_template, governance_template, persona_portable, operation_adna_track_b]
---

# Mission: P2 M2 — `template_home_claude.md` (genericized Hestia node-governance template)

**Campaign**: [[how/campaigns/campaign_hearthstone/campaign_hearthstone|campaign_hearthstone]] (Track B under [[how/campaigns/campaign_operation_adna/campaign_operation_adna|campaign_operation_adna]])
**Phase**: 2 — Base Home self-sufficiency · **Mission**: 2 of ~7

> **✅ CLOSED 2026-06-19 — operator approved the P2 phase-exit (Decision 4).** Deliverables complete + verified in the dev graph; `.adna/` materialization is gated to **P5** (`skill_template_release`).

## Goal

Close the "a fresh Home fork inherits the generic **Berthier** `.adna/CLAUDE.md`" gap: author a genericized, persona-portable **Hestia** node-governance template so a Home-class fork is governed correctly (node-operational protocol, safety rules, standing orders, inventory/identity domain knowledge) from first open — shippable to `.adna/` at P5.

## Exit Gate (mission-level)

- [x] `template_home_claude.md` authored in `aDNA.aDNA/how/templates/`, genericized from the canonical `Home.aDNA/CLAUDE.md` reference.
- [x] Parametrized via the four named vars (`{{persona}}` / `{{node_hostname}}` / `{{operator}}` / `{{workspace_root}}`) + `{{created_date}}`; **Hestia is the inline default persona-accent** (delimited blocks) so a bare fork yields a complete Hestia Home, while the persona NAME is parametrized everywhere for portability.
- [x] Registered in `how/templates/AGENTS.md` (Manual-Apply 12→13).
- [x] Verified: scratch-fork sim → **0 leftover `{{` braces**, Hestia present / **Berthier absent**, node vars filled, `what/inventory`+`who/identity` refs resolve, ontology = 16; **skeleton-parity** vs reference = 3 intentional genericizations only.

## Guardrails

- **No `.adna/` writes** (P5 only) · **no `site/` writes** · surgical; never rewrite history or `adr_035`.

## Objectives

### 1. Author `template_home_claude.md` — ✅ done
Genericized the full `Home.aDNA/CLAUDE.md` skeleton. **Kept** (reusable core): persona Identity skeleton + Operating principles + Greeting · Safety Rules (incl. Sudo-elevation pointer) · Standing Orders · Git Coordination · Agent Protocol (Startup Checklist, node-skills table, cross-project routing hook) · Domain Knowledge (Base Ontology **16** per ADR-035; `inventory`+`identity` canonical; Compliance/FAIR/Federation) · Working with Content. **Stripped** (node-specific): hostname/operator → vars, the fleet vault list, live-campaign refs, version pins, predicted compliance score, M04 bootstrap note, fleet pairings → generic pattern.
- **Files**: `aDNA.aDNA/how/templates/template_home_claude.md` (new)

### 2. Register in templates index — ✅ done
Added to `how/templates/AGENTS.md` Manual-Apply Templates (12→13), mirroring `template_campaign_claude.md`; `Why No Trigger` = "Home-class fork install, not a new-file trigger". Bumped index `updated`.
- **Files**: `aDNA.aDNA/how/templates/AGENTS.md`

## Campaign Context

- **Previous (P1)**: produced the canonical `inventory`/`identity` scaffolds + entry templates this template's Project Map + Domain Knowledge reference.
- **Next (M3 + P5)**: M3's `skill_project_fork` Home-class branch installs THIS template at fork time; P5 `skill_template_release` ships it to `.adna/how/templates/`.

## Notes

- **Persona portability vs "plain Hestia Home" tension** resolved by: parametrizing the persona NAME (`{{persona}}`) everywhere + keeping the Hestia persona-accent prose inline as the default, fenced with `persona-accent` HTML-comment markers a non-Hestia node swaps at interview (mitigates the campaign's "persona hard-coding" risk without sacrificing a complete out-of-box Hestia Home).
- **Parity discipline**: a `PARITY:` note in the template header binds its section skeleton to `Home.aDNA/CLAUDE.md` (the same invariant `template_node_adna_exemplar/SUBSTITUTIONS.md` uses).

## Completion Summary

### Deliverables
- `aDNA.aDNA/how/templates/template_home_claude.md` — genericized Hestia node-governance template; 5 substitution vars; Hestia default persona-accent; ontology 16.
- `aDNA.aDNA/how/templates/AGENTS.md` — Manual-Apply 12→13 registration + `updated` bump.

### Descoped
- No `.adna/` write (P5). Non-Hestia persona-accent **swap** machinery = interview-side (P4). Interview persona/pairings **enrich** = P4 (and `skill_node_bootstrap_interview.md` is `.adna/`-only — see M3 finding).

### Key Findings
- Self-review caught two defects in the template's own header comment before verification: (1) literal `{{vars}}` in the doc-comment would be mangled by substitution; (2) **nested HTML comment markers** (`<!-- … <!-- persona-accent --> … -->`) break comment parsing. Both fixed (bare var names; non-nested phrasing).

## AAR

- **Worked**: genericizing from the already-compliant `Home.aDNA/CLAUDE.md` (not designing fresh) made the template fast + faithful; the scratch-fork sed-sim gave an objective brace/persona/parity gate.
- **Didn't**: first draft embedded the substitution-var documentation using literal `{{}}` and nested HTML comments — would have shipped a malformed generated file; caught only on self-review, not on first write.
- **Finding**: a substitution template must keep its own meta-documentation free of the substitution syntax (and of nested comment markers) — the doc must survive substitution intact.
- **Change**: for any `{{}}`-substitution template, document vars by bare name (no braces) and avoid nested `<!-- -->`; run the sed-sim brace-count gate before declaring done.
- **Follow-up**: P5 ships this to `.adna/how/templates/template_home_claude.md`; P4 wires the interview persona/pairings enrich + non-Hestia swap.

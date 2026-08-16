---
type: template
template_for: haussmann_mission
title: "HAUSSMANN mission-file template — vault mission schema merged with the directive C.3 fields"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
agent_authored: true
tags: [haussmann, template, mission_schema]
---

# HAUSSMANN mission template

> Merges the vault's mission schema (extracted by example from [[campaign_storyweave]] missions, per
> [[WEBFORGE_ORIENTATION]] §2) with the directive's C.3 mission-YAML fields. Every Phase C mission file
> instantiates this. The `grounded_in:` field MUST cite Phase-B evidence IDs (finding / claim / hypothesis /
> score rows) — a mission that cannot cite its evidence is front-running the assessment and gets rejected.

```yaml
---
plan_id: mission_haussmann_p<phase>_<slug>
type: plan
title: "P<phase>.<n> — <imperative title>"
campaign: campaign_haussmann
phase: P<0-5>
decade: 1 | 2              # 1 = committed at Gate C (P0–P2) · 2 = provisional, recalibrated at the P2-exit re-score (P3–P5)
owner: stanley
status: queued             # queued → active → completed (status comment records deploy ID, gate count, commit range, baton)
mission_class: planning | build | design_spike | design_excellence | verification | integration
executor_tier: fable | opus | sonnet   # + rationale comment (ADR-025 chain; judgment→high, mechanical→sonnet)
token_budget_estimated: "<prose kT sentence enumerating the work + session count — ADR-016 Clause A>"
token_budget_actual:       # filled at close
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: []            # MANDATORY: Phase-B evidence IDs (F-###, CLAIM-###, H##, scorecard rows) + artifact paths
# ── directive C.3 additive fields ──
vitruvius_dimensions: []   # D1–D12 this mission moves
decade_theme: credibility | navigation | agentic | craft   # the campaign decade backbone
webforge_patterns: []      # pattern-register IDs consumed (P1–P15 in webforge_pattern_register.md)
patterns_to_author: []     # patterns owed back to WebForge.aDNA (A1–A6 register rows or new)
depends_on: []             # mission plan_ids that must close first
blocks: []                 # mission plan_ids waiting on this
acceptance_criteria: []    # verifiable, not aspirational — each testable by a named method
verification_method: ""    # gates / T0 capture / ranker / scorer re-run / operator eyeball — name the instrument
human_gate: true | false   # does closing this mission require the operator?
tags: [plan, haussmann, p<phase>]
---
```

## Body sections (in order)

1. `> **Read cold.** Persona **Rosetta**. Campaign governance: how/campaigns/campaign_haussmann/CLAUDE.md. Assessment doctrine: directives/OPERATION_VITRUVIUS_review_instrument.md.` — plus the mission's one-line why.
2. `## Why this mission exists` — cites the evidence (finding IDs + severity + hypothesis verdicts).
3. `## Where we are (verified on disk <date>)` — re-verified at execution time, never assumed from this genesis (recon-at-execution discipline).
4. `## The scope` — in / out / routed.
5. `## Objectives (phased — operator gates as marked)` — table `| # | Objective | Output | Gate |`, rows **O0**…**On**, `⛩ operator` in the Gate column where human.
6. `## Constraints & gates (honor; renegotiate only with operator sign-off)` — inherits the campaign CLAUDE.md standing conventions; names mission-specific ones (e.g. same-diff gate-spec updates for route changes; KW-8 no literal-pinned live data).
7. `## Definition of done` — one dense paragraph; matches `acceptance_criteria`.
8. `## Session opening prompt` — the paste-ready prompt for the executing Claude Code session: orientation reads (≤5 files), objective, constraints, deliverable paths, acceptance criteria, halt condition.
9. `## Progress (<date>)` — running log.
10. `## AAR (SO#5)` — `- **Worked.** / - **Didn't.** / - **Finding.** / - **Change.** / - **Follow-up.** / - **Token / tier.**` — mandatory before `status: completed`.

## Related

[[WEBFORGE_ORIENTATION]] · [[webforge_pattern_register]] · [[instrument_ingestion]] · [[campaign_storyweave]]

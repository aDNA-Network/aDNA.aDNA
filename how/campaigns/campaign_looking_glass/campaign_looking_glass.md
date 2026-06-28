---
campaign_id: campaign_looking_glass
type: campaign
title: "Operation Looking Glass — III-Campaign Pilot (aDNA website ⇄ context coherence)"
owner: stanley
status: active
phase_count: 3
mission_count: 6
estimated_sessions: "6-9"
calibrated_sessions: "6-8"
estimation_class: "content-novel"
priority: medium
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
tags: [campaign, iii, iii_campaign_pilot, website, context_coherence, looking_glass]
strategic_compass: "[[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]]"
---

# Campaign: Operation Looking Glass — III-Campaign Pilot

> **CHARTER** (authored by [[how/campaigns/campaign_looking_glass/missions/mission_looking_glass_planning|mission_looking_glass_planning]], 2026-06-27, from the seed of the same name). **Ratified at Decision Point 1 (2026-06-27)** — status `active`; Part 1 (Construct) is unblocked. Operator scoping ratified this session: **Subject B = the site-backing slice** of `what/`; **ambition = lean, pattern-first**.

## Goal

Make the aDNA website (`aDNA.aDNA/site/`, live at **adna.network**) a **faithful, correct, and compelling mirror of the actual aDNA context** (`aDNA.aDNA/what/` and the wider vault) — and, in doing so, **pilot a new strategic pattern: the "III campaign."** When this campaign is complete: (1) the website's claims, structure, and craft demonstrably match and do justice to what the vault actually is; (2) the site-backing aDNA.aDNA context is itself consistent, correct, and representation-ready; and (3) we hold a *proven, reusable pattern* for running III at campaign scale — including the step III doesn't formalize today: **building the context, processes, and personas that drive an III before you run it.**

This campaign is, itself, a demonstration of the convergence model it studies: a vault inspecting its own public reflection. The "looking glass" is literal — the site is the mirror, III is the structured act of looking, and `what/` is the face being reflected.

## Success criteria — "faithful mirror," operationalized

The exit test for the campaign. Each criterion gets a concrete measure in the [[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|measurement model]]; thresholds are finalized in Part 1 against captured baselines.

### Subject A — the website (`aDNA.aDNA/site/`)

| # | Criterion | Measure | Target |
|---|-----------|---------|--------|
| A1 | **Correctness / no fabrication** | Every factual or quantitative claim on the site traces to a true statement in the vault (claim-trace audit) | 0 untraceable or contradicted claims |
| A2 | **Currency / no drift** | No claim is stale vs. current vault ground-truth — counts, names, statuses, version pins (currency diff; respects pt19-derived data) | 0 stale claims |
| A3 | **Structural fidelity** | The site's information architecture faithfully represents the vault's actual shape — categories, ecosystems, relationships; no invented hierarchy (structure-map vs. vault map) | 0 misrepresentations |
| A4 | **Craft does it justice** | Clear, accessible, compelling to its audiences (existing `site/tests/gates/` harness + persona review) | Gate harness green (≥ baseline **302**; M1 raised it from 281 with the 2 new representation-coherence gates) + persona score ≥ 4.30 |

### Subject B — the site-backing context slice (`what/`)

| # | Criterion | Measure | Target |
|---|-----------|---------|--------|
| B1 | **Internal consistency** | No contradictions among the context files the site draws on (consistency check across the surfaced set) | 0 unresolved contradictions |
| B2 | **Correctness** | Surfaced context is accurate against the upstream spec (Standing Order 9 — cite `adna_standard.md`) | 0 spec contradictions |
| B3 | **Representation-readiness** | Surfaced files are complete, non-orphan, dual-audience legible, self-referential (Standing Orders 7/8/10; 10-dim compliance) | Compliance ≥ threshold; dual-audience + self-reference checks pass |

### Meta — the pattern (why this is a *pilot*)

| # | Criterion | Measure |
|---|-----------|---------|
| M1 | **Reusable scaffolding captured** | The driving context-packs + persona roster + process + measurement model exist as a reusable artifact, not a one-off |
| M2 | **Terminal handoff discharged** | The closing AAR authors the III.aDNA campaign-planning mission (the pattern's graduation path) |

## Context

Two threads converge here:

- **The website ⇄ context coherence need.** adna.network is the network's public face. Prior site campaigns ([[how/campaigns/campaign_website_adna/campaign_website_adna|campaign_website_adna]] ✅ 2026-06-21; STR E5/E6) raised it to frontier-grade *as a site*. What hasn't had a dedicated pass is the **two-way coherence between the website and the vault it represents**: does the site say true things about the context, is anything drifted/stale/fabricated, and is the underlying context itself clean enough to represent well? An *inspect → introspect → improve* problem on both the representation and its source.
- **The III-pattern gap.** III ([[III.aDNA/CLAUDE|III.aDNA]], Argus) is **tactical/operational only**: [[how/skills/skill_iii_cycle|skill_iii_cycle]] (7-step single cycle) + [[how/skills/skill_decadal_aar|skill_decadal_aar]] (every-10th-cycle 5-persona ranker). Which context packs, which personas/reviewers, which measurement model drive a given III run is **ad-hoc**, re-derived per engagement. There is no campaign-scale "III campaign" pattern, and no formal step for **building the driving scaffolding**.

This is the **first instance** ("pilot") of an III campaign, deliberately instrumented to extract the pattern. It builds on [[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]] (the website is built by the `Websites.aDNA` build role-graph) and the Phase-7 III loop precedent in [[how/campaigns/campaign_rosetta/campaign_rosetta|campaign_rosetta]].

## The pattern being piloted — "III campaign" (definition)

> An **III campaign** is a *strategic, goal/requirement-focused, multi-mission deployment of III* that includes **building the context / processes / personas that drive the III**, not merely applying III cycles. Scope ladder: cycle (tactical) → decadal (operational) → **campaign (strategic)**. One III campaign is a single integrated, *instrumented* iteration aimed at a concrete goal; its scaffolding (packs · personas · process · measurement) is a **first-class deliverable**, reusable or graduated afterward.

So an III campaign = **(build the III) → (run the III) → (improve from it)**, where "build the III" is the novel, formalized step. Full concept note: [[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]].

## Scope

### In Scope

- **Subject A — the website** (`aDNA.aDNA/site/`): review + improve for correctness, currency, structure, and craft *as a representation of the vault*.
- **Subject B — the site-backing context slice** (`what/`): the context files the site actually surfaces or makes claims about — concepts, `docs/adna_standard.md`, glossary, comparisons, use_cases, the ecosystem specs/patterns the site renders, plus the pt19-derived data (`vaults.json`, `install_truth.json`) the site reads. Reviewed for consistency, correctness, representation-readiness; drift fixed **at the source**, not just on the surface.
- **The III scaffolding** (Part 1 deliverable): the context packs, persona/reviewer roster, process, and measurement model that drive this III — built, used, and captured for pattern extraction.
- **Pilot instrumentation**: explicit capture of what the pattern needs (see Pilot instrumentation).

### Out of Scope

- **Full `what/` audit.** Subject B is bounded to the site-backing slice (operator decision). Inconsistencies found *outside* the slice are flagged for a follow-on, not fixed here.
- **Rebuilding web-building *infrastructure*** — that is `Websites.aDNA`'s `campaign_websites_genesis` (B→C→A). This campaign *consumes* the live site; it does not carve the role-graph.
- **Force-merging the III-campaign pattern into III.aDNA** — that is the **terminal AAR's** handoff (below), executed in III.aDNA's own lane.
- **Long-tail / cosmetic site polish** beyond the bounded improvement set (lean-pilot disposition) — deferred to STR or a follow-on.

### Out-of-scope guardrail (critical)

**Honor pt19 / the in-flight Websites carve.** The site's derived data (`vaults.json`, `install_truth.json`, etc.) is regenerated by Hestia's pt19 machinery; the `siteforge/ → websites/` consumer re-points are mid-flight (Campaign C). **Never run `sync:vaults` or hand-edit `vaults.json`**, and sequence any site change around the Websites carve. Coordinate via memo, don't front-run.

## Phases & Missions

The operator's three parts map onto III at strategic scale. Lean shape: Construct = 1 mission (the novel build), Review = 2, Improve = 2 (incl. closeout). **Phase exit gates are human gates** (Standing Order 1).

### Phase 1: Construct — build the III

*Research the domain (web-quality + context-representation), confirm the scaffolding selection from the [[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|spec]], build what's net-new, and capture baselines. This is the step the pattern formalizes.*

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 1 | Build the III scaffolding + capture baselines | 1-2 | charter (DP1) | **completed 2026-06-27** |

**Phase exit gate (= Decision Point 2)**: the scaffolding (packs · persona roster · process · measurement model) is built and good enough to drive the review, and baselines for both subjects are captured.

### Phase 2: Review — run the III

*Run the built III across both subjects (inspect), calibrate it (introspect), and produce a ranked, evidence-backed improvement plan.*

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 2 | Inspect — run the III across Subject A + B → scored findings register | 1-2 | M1 | planned |
| 3 | Introspect + plan — calibrate the III; produce the ranked improvement plan | 1 | M2 | planned |

**Phase exit gate (= Decision Point 3)**: a ranked, evidence-backed improvement plan exists and is approved by the operator.

### Phase 3: Improve — act + extract

*Execute the bounded improvement set, re-measure, validate; then close the campaign and discharge the terminal pattern-extraction charge.*

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| 4 | Improve + re-measure — execute the bounded set; validate; stage deploy (gated) | 1-2 | M3 | planned |
| 5 | Closeout — campaign AAR + terminal III.aDNA handoff + pattern packet | 1 | M4 | planned |

**Phase exit gate**: improvements committed + validated (gates green vs. baseline, regressions caught), site deploy staged through the gated pt19-respecting path; campaign AAR filed and the III.aDNA handoff authored.

> *Lean latitude:* if execution proves tighter than estimated, M1 may internalize its design checkpoint without a sub-gate, and M4↔M5 may merge. Scope changes are recorded here and in each mission's Scope Changes section.

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| 1 | End of the planning mission (this charter) | Operator ratifies the full charter (success criteria, phases, gates, scaffolding spec, measurement model, sized missions) before Part 1 executes | **ratified 2026-06-27** |
| 2 | Part 1 → Part 2 | Scaffolding (packs/personas/measurement) is built + good enough to drive the review; baselines captured | **ratified (operator GO) 2026-06-27** |
| 3 | Part 2 → Part 3 | The ranked improvement plan is approved | pending |

## The III scaffolding (Part-1 deliverable)

The novel step. Full spec: [[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|scaffolding_spec]]. In brief, the scaffolding this campaign builds and captures:

- **Context packs** — reuse III's `web_design` (craft / Subject A) + `vault_maintenance` (Subject B) + `inspect_procedures` + `introspect_checks` + `whitepaper_communication` (messaging fidelity); **net-new `representation_coherence`** pack (the site⇄context fidelity domain — the genuine gap).
- **Persona / reviewer roster** — a focused subset of the 16 `who/reviewers/` (e.g. `content_strategist`, `information_architect`, `standard_archivist`, `newcomer_stress_tester`, `anti_bloat_editor`, `design_critic`, `accessibility_auditor`) + adopter lenses from `who/adopters/` (e.g. `researcher`, `educator`, `oss_maintainer`, `network_node_operator`); **net-new "claim-tracer / fact-checker"** reviewer (no existing persona checks site-claim ↔ vault-source fidelity).
- **Process** — the review workflow wired to [[how/skills/skill_iii_cycle|skill_iii_cycle]] (7-step) + [[how/skills/skill_decadal_aar|skill_decadal_aar]] (persona ranker), adapted to two subjects.
- **Measurement model** — below.

## Measurement model (summary)

Three metric tiers mirroring [[how/skills/skill_iii_cycle|skill_iii_cycle]], detailed in the [[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|scaffolding spec]]:

1. **Machine-measurable** — the existing `site/tests/gates/` harness (gate-4…gate-19 + audit sweep ≈ 281 assertions), **extended** with representation-coherence gates (claim-trace link checks, currency/staleness) building on `gate-14-single-source` + `gate-15-credibility`; plus build + axe + Lighthouse.
2. **Agent-assessable** — drift/fabrication/staleness findings; [[how/skills/skill_dual_audience_review|skill_dual_audience_review]] + [[how/skills/skill_self_reference_check|skill_self_reference_check]]; the 10-dim compliance checker (`what/lattices/tools/compliance_checker.py`).
3. **Persona-assessed** — reviewer/adopter personas score representation quality + craft (mirror the decadal ranker).

Baselines captured in Part 1; thresholds + regression detection set upfront; **extend the harness, don't fight it.**

## Pilot instrumentation (pattern extraction)

Because this is a pilot, execution is instrumented so the terminal AAR can spec the pattern. Capture continuously (see [[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]] §extraction):

- **Scaffolding-needed log** — every time a pack/persona/measure was needed but absent.
- **Reusable-vs-bespoke ledger** — for each scaffolding piece: reused as-is / adapted / net-new, with the cost.
- **III-primitive-gaps log** — where the tactical primitives (`skill_iii_cycle`, decadal) fell short at campaign scale.
- **Measurement-model retro** — estimate-vs-actual on the metric tiers; what the gates missed that personas caught (and vice versa).

## Terminal exit / AAR charge (the III.aDNA handoff)

On completion, the campaign's closing AAR (in M5) **must author a campaign-planning mission in `III.aDNA/how/missions/`** (staged as a coord/memo from here — **no III.aDNA writes mid-pilot**) to:

1. **Comprehensively review/improve III** (function · context · processes) from this pilot's learnings; and
2. **Spec / build / improve / test / deploy the "III campaign" pattern** itself (likely → `III.aDNA/how/campaigns/campaign_h_iii_campaign_pattern/`, e.g. a `skill_iii_campaign`).

Precedent for "a mission that authors a campaign charter": `III.aDNA/how/missions/plan_campaign_g_consolidation_charter.md`.

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| Front-running the Websites carve / pt19 (editing derived data, deploying out of sequence) | High | Standing Order 2; read-only on `vaults.json`/`install_truth.json`; coordinate every site change by memo; sequence around B→C→A |
| Scope creep — Subject B balloons into a full `what/` audit | Medium | Operator-bounded to the site-backing slice; out-of-slice findings flagged, not fixed |
| Pilot bias — optimizing the website outcome over learning the pattern | Medium | Instrumentation is a first-class deliverable; prefer reusable-over-bespoke and log the cost |
| Measurement theatre — gates green but representation still wrong | Medium | Three-tier model (machine + agent + persona); claim-trace audit + persona review catch what gates can't |
| Cross-vault contamination — writing into III.aDNA / Websites.aDNA mid-pilot | High | Standing Order 3; handoff only at the terminal AAR, as a coord memo |
| Net-new scaffolding (pack/persona) under-built, weakening the review | Low | DP2 gate verifies "good enough to drive the review" before Part 2 |

## Verification Strategy

### Per-Mission

| Check | Method | Gate? |
|-------|--------|-------|
| SITREP filed | Session closure protocol | Yes |
| AAR produced | 5-step AAR protocol (scorecard + GO/NO-GO) | Yes |
| Deliverables validated | AAR scorecard (validated/total) | Yes |
| Token budget logged | `token_budget_actual` vs. estimate (Standing Order 11) | Yes |
| Files committed | Git status clean; explicit-path adds; ff-verified | Yes |

### Per-Phase

| Check | Method | Gate? |
|-------|--------|-------|
| All mission AARs are GO | Review AAR readiness assessments | Yes |
| Phase exit criteria met | This doc's phase exit gate | Yes — operator approval (DP2/DP3) |
| Instrumentation current | Scaffolding/reusable/gaps logs updated | Yes |
| pt19 / Websites carve honored | No `sync:vaults`; derived data untouched | Yes |

### Campaign Validation

| Check | Method |
|-------|--------|
| Success criteria met | A1–A4, B1–B3 measured ≥ threshold vs. baseline |
| Pattern captured | Scaffolding artifact reusable; instrumentation logs complete (M1, M2) |
| Terminal charge discharged | III.aDNA campaign-planning mission authored (coord memo) |
| Site deploy gated + sequenced | Deploy staged via the pt19-respecting path, operator-approved |
| STATE.md updated | Campaign status reflected in operational state |

## Timeline

| Phase | Missions | Sessions |
|-------|----------|----------|
| 0 Planning | M0 (this charter) | 1 (done) |
| 1 Construct | M1 | 1-2 |
| 2 Review | M2-M3 | 2-3 |
| 3 Improve | M4-M5 | 2-3 |
| **Total** | **6 missions (M0–M5)** | **6-9 sessions** |

## Related / cross-links

- [[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]] — the pattern concept (graduation target: III.aDNA).
- [[how/skills/skill_iii_cycle|skill_iii_cycle]] · [[how/skills/skill_decadal_aar|skill_decadal_aar]] — the tactical/operational III primitives this wraps.
- [[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|scaffolding_spec]] — the Part-1 III scaffolding + measurement model.
- [[how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness|STR]] — same north-star UX goal; **separable, not absorbed** (cross-link, coordinate).
- `Websites.aDNA/how/campaigns/campaign_websites_genesis/` — the web-building infra (respect B→C→A + pt19).
- [[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]] — the build role-graph doctrine ratified alongside the seed.
- `who/reviewers/` (16 personas) + `who/adopters/` (16 lenses) — the persona libraries the scaffolding draws on.

## Notes

- Working name **"Operation Looking Glass"** + slug `campaign_looking_glass` **retained** (the planning mission's option to rename was not exercised — the website is the mirror, III is structured self-inspection; the name fits).
- This is a **pilot**: optimize for *learning the pattern* as much as for the website/context outcome. Where a choice is bespoke-vs-reusable, prefer reusable and note the cost.
- Self-reference (Standing Order 8): this campaign studies the convergence model (`Campaign → Mission → Objective`) by enacting it — each phase narrows from "review the whole representation" to "fix this specific claim," exactly the subgraph-traversal the [[what/concepts/concept_convergence|convergence model]] describes.
- **Post-charter refinements (2026-06-27 wind-down)** — gap-driven, no structure change (phases/gates/criteria unchanged): M1 gains a *coordination heads-up* (deconflict the Websites carve) + an *instrumentation ledger* (`artifacts/instrumentation_log.md`) + a *graceful-degradation* note; M2 *bounds the claim-trace* to high-signal claim classes; M3 adds a *third fix-side* (escalate to the owning vault for cross-vault-sourced drift); M4 adds a *read-only post-deploy live-verify*. **Open structural options (operator decision at the relevant gate):** **(S1)** make deploy its own gated step / DP — it routes through the `Websites.aDNA` build role-graph ([[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]]); *recommend keep-in-M4 + live-verify, revisit at DP3*. **(S2)** M4↔M5 merge — decide at DP3 by improvement-set size.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- [Charter + scaffolding + findings register + improvement plan + improved site/context + pattern packet + III.aDNA handoff memo]

### Descoped
- [Out-of-slice context findings; long-tail polish — with justification]

### Key Findings
- [Insights from the pilot — esp. pattern-extraction learnings]

### Scope Changes
- [Missions merged/added/removed during execution, and why]

### Follow-Up Campaigns
- [III.aDNA `campaign_h_iii_campaign_pattern`; any out-of-slice context-quality follow-on]

## Campaign AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`. Must additionally discharge the Terminal exit / AAR charge above (author the III.aDNA campaign-planning mission).*

- **Worked**: [one line]
- **Didn't**: [one line]
- **Finding**: [one line]
- **Change**: [one line, or "none"]
- **Follow-up**: [link, or "none"]

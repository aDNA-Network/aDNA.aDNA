---
type: artifact
mission_id: mission_primer_adna_for_data_engineers
objective: O0
title: "Primer outline v0 — fixed at O0; at most one restructure thereafter; four operator topics + §7 crossmap mapped to sources"
created: 2026-10-03
updated: 2026-10-03
status: active
last_edited_by: agent_rosetta
executor_tier: fable
executor_runtime: claude
session: session_stanley_20261003_213535_garnier_rulings_and_lanes
tags: [artifact, primer, o0, data_engineer]
---

# Outline v0 — "aDNA for data engineers"

[I] Fixed at O0 from the mission's §Outline, with each section's **lead source rank** (from `source_pack.md`), a target word count (sum 4,500–6,500), the diagram it owns, and the operator topic it serves: **T1** vault standard · **T2** work/budget/tiers · **T3** agent coordination · **T4** network of graphs. §7 is the crossmap the mission requires. Every normative claim cites `adna_standard.md` §; every practice claim names its ADR/pattern; Appendix A is the ledger of which is which.

| § | Title | Topic | Words | Lead sources | Diagram | Must land |
|---|---|---|---|---|---|---|
| 0 | In one paragraph | all | 120 | §0 R1, R3 | — | "folders, Markdown, a handful of conventions — and the agent reads them first" |
| 1 | The problem: context for agents is a data problem | T1 | 450 | §1 R5, R4 | D1: undocumented pipeline ↔ undocumented context (side-by-side failure modes) | schema · provenance · freshness · access control as the four failure axes |
| 2 | The vault standard | T1 | 1,000 | §2 R1–R7 | D2: the triad + four governance files as a directory tree with "what the agent reads first" arrows | 16 base types (§3, ADR-035); frontmatter as schema; `.adna/` template → fork; archive-never-delete |
| 3 | Work as data | T2 | 950 | §3 R1–R8 | D3: Campaign → Mission → Objective → Session with gates marked ⛩ (human); D4: token bands + convergence funnel | content-load unit and bands (ADR-016); transition tax; `executor_tier` fable/opus/sonnet with the *correct* binding; phase gates are human gates; the 5-line AAR |
| 4 | How agents coordinate | T3 | 1,000 | §4 R1–R8 | D5: memo → drop-box → receipt (one-way write; "replies derived, not assumed"); D6: the two airlocks side by side | single-writer lease; claim-lease + fencing token; **the word "airlock" is overloaded**; A2A cards marked provisional; Automator loop; Tapp broker |
| 5 | The network of graphs | T4 | 900 | §5 R1–R7 | D7: node (Home) → Network → Exchange → Lighthouse; lattice = typed DAG of modules | wrapper + `federation_ref` ("consumer, never fork"); eight categories; 19 I/O types; FAIR; L0–L3 |
| 6 | Why it holds up | all | 350 | §6 R1 | — | honesty is the aesthetic; derive never type; provenance tags; measure before trust; §7.7 ratification; the standard is authored in itself |
| 7 | A data-engineer's crossmap | all | 500 | §7 R2–R4 | table | dbt project ↔ vault · schema registry ↔ frontmatter + LinkML (**accepted** ADR-062) · lineage ↔ provenance tags · DAG ↔ lattice · catalog ↔ registry/Exchange · append-only log ↔ STATE graduation · lease+fencing ↔ claim-lease · CI gate ↔ phase gate |
| 8 | Getting started | — | 200 | §8 R5 | — | the public one-liner; what your agent reads first; where to look at a live vault (public surfaces only) |
| 9 | Glossary + reading path | — | 600 | §9 R6 | — | 20–30 terms (plain line + technical line); 10 / 25 / deep paths |
| A | Appendix — normative vs practice | — | 300 | I-08 | table | every §2–5 mechanism → standard § · ADR/pattern · provisional |

Total target ≈ **6,370** (inside 4,500–6,500; trim §2/§4 first if over). Diagrams: 7 (≥ 5 required).

**Checks against the acceptance criterion:** T1 = §2 · T2 = §3 · T3 = §4 · T4 = §5 ✓ · §7 crossmap present with all eight pairs from the mission ✓ · Appendix A present ✓.

**Standing hazards for O1** (from `source_inconsistencies.md`): never type a count (I-01/I-04); "Agentic DNA" (I-03); ADR-062 is accepted (I-13); the tier binding is fable=judgment (I-14); "Rule 10" is a convention, not a router rule (I-11); campaign layer is practice (I-08).

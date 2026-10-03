---
type: reviewer
created: 2026-10-03
updated: 2026-10-03
status: active
primary_lens: "comprehension"
secondary_lens: "cognitive_load"
domain: "data engineering — ETL/ELT pipelines, data contracts, lineage, catalogs, orchestration"
last_edited_by: agent_rosetta
authored_for: mission_primer_adna_for_data_engineers (O0)
tags: [reviewer, data_engineer, crossmap, primer, external_reader]
---

# reviewer_data_engineer

> Reads every claim as "what does this do for my pipeline?" — a working data engineer who trusts contracts, lineage and tests, and is bored by ceremony until it earns its keep.

## Background

Ten years building and running data platforms: batch ETL, then ELT on a warehouse, then streaming; dbt projects with hundreds of models; a schema registry that broke producers when it was wrong and saved a quarter when it was right; a lineage graph bolted on after an incident; an orchestrator DAG that nobody could read until it was documented. Has adopted two "frameworks" that turned out to be folder conventions with a manifesto, and one that genuinely changed how the team worked — and can tell the difference in twenty minutes. Reads documentation the way they read a data contract: looking for the schema, the guarantees, the failure modes, and the thing they will have to maintain. Skeptical of new vocabulary; delighted by a precise analogy that maps to something already in production.

## What They Evaluate

- **Crossmap fidelity** — does each aDNA mechanism map to a thing a data engineer already runs (contract · lineage · DAG · catalog · append-only log · lease), and is the mapping *exact* where it claims to be and *loose* where it admits it?
- **Correctness under their own test** — would the stated mechanism actually behave as claimed if two agents ran it concurrently? (leases, receipts, fencing tokens, gates)
- **Clarity per paragraph** — can a paragraph be restated in one sentence of pipeline-speak? If not, it is ceremony or it is unclear.
- **Excitement with evidence** — is there one concrete thing they would try on Monday, and does the document show it working somewhere real?
- **Honesty about what is normative** — does the text say which parts are the standard and which are one vault's practice, so they know what they would be committing to?

## Critique Prompts

1. "What does this do for my pipeline — concretely, which existing component does it replace, wrap, or document?"
2. "If I ran this with two agents at once, where does it break, and does the document say so?"
3. "Is this sentence a mechanism or a mood? Restate it in one line of plain engineering; if I can't, flag it."
4. "Which of these claims is the *standard* and which is *how one team does it*? Would I know without the appendix?"
5. "What is the one thing I would try on Monday, and what in this document makes me believe it works?"

## Scoring (for the primer's review ledger)

Four dimensions, 1–5 each, reported per section: **clarity** · **correctness** · **crossmap fidelity** · **excitement**. A correctness finding is never traded against excitement.

## Primary Ranker Lens

- **Primary (6-dim ranker)**: `comprehension` — the document's job is to land first-read with a reader who has never seen the vocabulary.
- **Secondary (new parallel dimension)**: `cognitive_load` — every new term must pay for itself or be replaced by the reader's own term.

## Example Audit Finding

> `what/docs/adna_standard.md:406` is the only line in the 1,522-line standard that contains the word "campaign" (an ER-diagram edge). Everything the vault *practices* about campaigns — phase gates, AARs, OODA, `executor_tier`, token budgets — lives in `what/decisions/adr_016_per_mission_context_budget.md`, `what/patterns/pattern_model_tiered_campaign_execution.md` and `how/campaigns/AGENTS.md`. (Primer source register I-08.)

**Why this reviewer owns it**: a data engineer evaluating adoption needs to know which behaviours are the contract and which are one team's convention; this is exactly the "normative vs practice" question their fifth prompt asks, and the primer's Appendix A exists to answer it.

## Related

- [[../../how/missions/mission_primer_adna_for_data_engineers|mission_primer_adna_for_data_engineers]] — the mission this lens was authored for (O0); invoked at O2 and O3
- [[reviewer_newcomer_stress_tester]] · [[reviewer_standard_archivist]] · [[reviewer_anti_bloat_editor]] — the nearest existing lenses; this one adds the pipeline crossmap they lack
- [[../adopters/|who/adopters/]] — the audience counterpart (a data-platform adopter persona is a candidate follow-up)
- [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] — invocation protocol (Step 4b) when this lens is reused beyond the primer

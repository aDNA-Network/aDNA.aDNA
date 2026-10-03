---
plan_id: mission_primer_adna_for_data_engineers
mission_id: mission_primer_adna_for_data_engineers
type: plan
title: "Operation Primer — aDNA for data engineers: a comprehensive explainer of the standard, iterated through review, delivered to Andy Zhang on Fluxer"
owner: stanley
status: in_progress   # O0 claimed + executed 2026-10-03 by session_stanley_20261003_213535_garnier_rulings_and_lanes (operator GO: accept-all packet row C5); O1 next, operator-summoned
mission_class: implementation
mission_kind: external_document
executor_tier: fable            # operator ruling 2026-10-03: fable throughout — audience-fit writing for a named reader is judgment work at every objective
executor_runtime: claude
token_budget_estimated: "≈420 ± 120 kT content-load across 5–6 sessions (≥200 kT band per ADR-016 → objectives are session-sized; kept as ONE mission on the mission_site_story_review_charter precedent, 200–400 kT / 2–4 sessions). Per objective: O0 70 · O1 120 · O2 90 · O3 90 · O4 40 · O5 15. Source reading is the sink (≈15 canonical files, 3 of them ≥ 60 KB — read with offset/limit)."
token_budget_actual: "<kT, filled at close>"
priority: high
depends_on: []                   # needs no site/, no push, no deploy, no peer edit — the one substantial agent-reachable item while GARNIER P1.3 / HAUSSMANN P5.1 wait on humans
grounded_in:
  - how/missions/artifacts/sitrep_mid_campaign_20261003.md   # §5 S3/S6/S7/S8 are the gaps this document walks into; §6 the source map; §7 the delivery constraints
  - RiemannCommons.aDNA/README.md                              # register precedent for Andy — plain language, "you don't need to learn my tooling conventions"
  - RiemannCommons.aDNA/what/write_gate_checklist.md           # the scrub rule, adapted (§Scrub)
  - LAVentureGraph.aDNA/who/contacts/contact_andy_zhang.md     # reader profile: builder/engineer, ETL + data engineering, accessibility
created: 2026-10-03
updated: 2026-10-03
last_edited_by: agent_rosetta
tags: [plan, mission, primer, explainer, standard, data_engineering, andy_zhang, fluxer, external_document, operation_primer]
---

# Mission: Operation Primer — aDNA for data engineers

**Origin.** Operator directive 2026-10-03 (mid-campaign SITREP sitting): *"create a high quality / concise / professional / comprehensive document that would explain the properties of the aDNA standard — the vault standard, the token/mission/campaign optimization, the airlock / agent-to-agent communication, and the way the aDNA network of graph lattices plays out on the aDNA network … intended for Andy Zhang … shared with him on Fluxer … extensive iteration/review so he will easily see/understand/get excited about it."* Operator rulings at plan time: **generic primer + a short Andy cover note** (reusable, scrubbable) · **fable throughout** · **Fluxer.aDNA's agents deliver**. Codename grep-unique at authoring (`grep -rli "Operation Primer" ~/aDNA` → 0 before this file).

> **Read cold.** This mission produces a *document*, not a site change: no `site/` edit, no push, no deploy, no peer-vault edit (Rule 10 — the delivery ask is a memo). It is the first vault mission whose primary reader is **outside the lattice**, so its scrub rule (§Scrub) is load-bearing and its closing appendix must say plainly what in aDNA is **normative** (the standard, § cited) and what is **practice** (ADRs, patterns) — the SITREP's finding S3 is that the standard itself does not define the campaign layer, and this document must not paper over that.

## Goal

A reader with Andy's background — ETL and data-engineering, no prior exposure to aDNA — reads one document in ~20–25 minutes and comes away able to (1) explain what an aDNA vault is and why the four governance files exist, (2) say how work is decomposed and budgeted (campaign → mission → objective, token economics, model tiers), (3) describe how agents coordinate without stepping on each other (memos, leases, the two airlocks, A2A), (4) sketch how vaults federate into a network of graphs and lattices (node → network → Exchange → lighthouse), and (5) see where it maps onto things he already builds (pipelines, contracts, lineage, catalogs). **Deliverable**: `what/docs/adna_primer_for_data_engineers.md` v1.0 + rendered PDF + a ≤ 4,000-character cover note, scrubbed, logged, and handed to Fluxer.aDNA for delivery.

## Deliverables

| Artifact | Path | Notes |
|---|---|---|
| The primer (source) | `what/docs/adna_primer_for_data_engineers.md` | 4,500–6,500 words; 5–7 diagrams (Mermaid or inline SVG); dual-audience; every normative claim cites `adna_standard.md` §; closing "normative vs practice" table |
| Rendered PDF | `how/missions/artifacts/primer/adna_primer_for_data_engineers_v1.pdf` | `pandoc` + `tectonic` (both present on this node, verified 2026-10-03) |
| Source pack | `how/missions/artifacts/primer/source_pack.md` | ranked sources per topic + `source_inconsistencies.md` register (feeds the follow-up sweep mission) |
| Outline | `how/missions/artifacts/primer/outline_v0.md` | fixed at O0; at most one restructure thereafter |
| Review ledger | `how/missions/artifacts/primer/review_ledger.md` | every finding: lens · severity · disposition · where applied |
| Scrub control | `how/missions/artifacts/primer/scrub_control.md` | the grep list + the 0-hit result on v1.0 |
| Cover note | `how/missions/artifacts/primer/cover_note_andy.md` | ≤ 4,000 chars, plain register (RiemannCommons README precedent), no vault paths |
| Transmission log | `how/missions/artifacts/primer/transmission_log.md` | date · SHA256 of PDF + MD · channel · recipient · release ref |
| Reviewer persona | `who/reviewers/reviewer_data_engineer.md` | via `template_reviewer.md`; registered in `who/reviewers/AGENTS.md`; MANIFEST reviewer count 16 → 17 **re-derived** |
| Delivery memo | `who/coordination/coord_2026_MM_DD_rosetta_to_aspasia_primer_delivery_to_andy.md` | ADR-061 fields (`from_persona` · `from_vault` · `authority`); `status: staged` → delivered into `Fluxer.aDNA/who/coordination/inbox/`; **never** placed in any `fluxer_outbox/` |

## Outline (fixed at O0; refined ≤ 1 restructure)

0. **In one paragraph** — what aDNA is, for whom, and what changes when you adopt it.
1. **The problem: context for agents is a data problem** — schema, provenance, freshness, access control; why ad-hoc prompts and chat logs fail the same way undocumented pipelines fail.
2. **The vault standard** — the WHO / WHAT / HOW triad · 16 base entity types · the four governance files (`CLAUDE.md` · `AGENTS.md` · `MANIFEST.md` · `STATE.md`) and what an agent reads first · frontmatter as schema · naming · the `.aDNA` project model (the template at `.adna/`, fork, public image vs dev graph) · archive-never-delete.
3. **Work as data** — Campaign → Mission → Objective · sessions and the SITREP · AARs · phase gates are human gates · the OODA cascade · **token economics**: ADR-016's content-load unit and bands (< 50 / 50–80 / 80–200 / ≥ 200 kT), the transition tax, the convergence model, context recipes · **model-tiered execution** (`executor_tier`: strategy → build → mechanical) and why the brief precedes the cheaper model.
4. **How agents coordinate** — coordination memos + drop-boxes (one-way writes, receipts, replies derived not assumed) · single-writer lease + session locks · **claim-lease with fencing tokens** (Operations) · **the two airlocks** — III's vault-to-vault traffic contract vs RemoteControl's action-mediation gate — and why the word is overloaded · A2A cards (provisional) · Automator's between-missions loop · the Tapp handoff broker.
5. **The network of graphs** — Home (the node vault) → Network (the master graph) · federation wrappers and `federation_ref` ("consumer, never fork") · the eight categories (Forge · Framework · Platform · Org-vault · Org-graph · Network · Knowledge graph · Commons) · **lattices**: typed DAGs of modules, 19 I/O types, FAIR block, registry publish · the Exchange (Registry · Commons · Market) · Lighthouse nodes · compute tiers L0–L3.
6. **Why it holds up** — honesty as the aesthetic (derive, never type) · provenance tags · archive-never-delete · measure-before-trust · human ratification (§7.7) · the standard is itself authored in the standard.
7. **A data-engineer's crossmap** — dbt project ↔ vault · data contract / schema registry ↔ frontmatter + LinkML (ADR-062, proposed) · lineage ↔ provenance tags · orchestration DAG ↔ lattice · catalog ↔ registry / Exchange · append-only log ↔ STATE graduation · lease + fencing token ↔ claim-lease · CI gate ↔ phase gate.
8. **Getting started** — the public clone one-liner (`git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude`); what your agent reads first; where to look at a live vault.
9. **Glossary + reading path** — 20–30 terms, each one line plain + one line technical; three reading paths (10 min / 25 min / deep).
- **Appendix A — normative vs practice**: a table of every mechanism in §2–5 with its authority: standard § (normative) · ADR / pattern (practice) · provisional.

## Objectives

| # | Objective | Tier | kT | Acceptance |
|---|---|---|---|---|
| **O0** | **Source pack + outline + reviewer persona.** Rank the SITREP §6 sources per section (read ≥ 60 KB files with offset/limit); register every inconsistency met in `source_inconsistencies.md`; fix `outline_v0.md`; author `reviewer_data_engineer.md` (ETL/pipelines/contracts/lineage lens; skeptical of ceremony; asks "what does this do for my pipeline?"; scores clarity · correctness · crossmap fidelity · excitement); write `scrub_control.md`'s grep list. | fable | 70 | outline covers all four operator topics + §7 crossmap; persona registered in `who/reviewers/AGENTS.md`; inconsistencies register ≥ the SITREP S5 list |
| | ✅ **O0 DONE 2026-10-03** (`session_stanley_20261003_213535_garnier_rulings_and_lanes`): `artifacts/primer/source_pack.md` (6 section tables, every path probed, 4 heavy files flagged) · `source_inconsistencies.md` (**14 rows ≥ S5's 8**; one SITREP claim did not reproduce and says so) · `outline_v0.md` (T1–T4 + §7 crossmap + Appendix A; ≈6,370 words planned; 7 diagrams) · `who/reviewers/reviewer_data_engineer.md` registered, roster 16 → 17 derived from disk (MANIFEST + CLAUDE rows updated) · `scrub_control.md` (8-rule grep list; red-proof owed at O3). **Actual ≈ 40 kT** executor (vs 70 est.; sources were pre-ranked by the SITREP). | | | |
| **O1** | **Draft v0.1.** Write the full document from sources; diagrams; crossmap; cite spec § on every normative claim; Appendix A populated. Run `skill_dual_audience_review` once as a smoke test. | fable | 120 | 4,500–6,500 words; ≥ 5 diagrams render (`pandoc` dry run); every §2–5 mechanism appears in Appendix A |
| **O2** | **Review round 1.** Six lenses as parallel subagents — `reviewer_data_engineer` · `standard_archivist` (currency: is every claim true of v2.5 and the ADRs as of today?) · `newcomer_stress_tester` · `anti_bloat_editor` · `movement_skeptic` · `diagram_reviewer`; plus a mechanical fact-check of every § citation against `adna_standard.md` and every ADR number/date against `adr_index.md`. `review_ledger.md` with a disposition per finding. | fable | 90 | ledger complete; zero unresolved **correctness** findings carried into O3 |
| **O3** | **Revise v0.2 + review round 2 + scrub.** Apply the ledger; second pass by the three strictest lenses from round 1 plus a simulated **Andy cold read** (ETL background, 20 minutes, writes the three questions he would ask and the one thing that excited him); run the **write-gate scrub** (§Scrub); the control grep must return 0. | fable | 90 | round-2 findings ≤ 5, none correctness-class; scrub control 0/0; `skill_dual_audience_review` PASS |
| **O4** | **Operator read gate → v1.0 + render.** Operator reads v0.2 (ISS via `skill_create_iss` if the gate is richer than approve/amend/defer, else `AskUserQuestion`); apply; set v1.0; render PDF; SHA256 both files; write `cover_note_andy.md` (≤ 4,000 chars) and `transmission_log.md`. | fable | 40 | operator ⛩ GO recorded (§7.7 4-field block in the mission); PDF opens; hashes logged |
| **O5** | **Delivery hand-off + AAR.** Stage the Aspasia memo (§Delivery) and **deliver it** into `Fluxer.aDNA/who/coordination/inbox/` (cmp-identical, recipient HEAD pin re-read); add the delivery act to STATE §Pending Manual Actions; author the follow-up sweep mission stub from `source_inconsistencies.md`; 5-line AAR; `status: completed` **only when the memo is delivered, not when authored** (commitment is live from delivery). | fable | 15 | memo in Fluxer's inbox byte-identical; STATE row present; AAR filed; `token_budget_actual` recorded |

**Session shape**: O0 · O1 · O2 · O3 · O4+O5 = 5 sessions (6 if O1 splits). Each session opens a Tier-1 file (Tier-2 when touching `MANIFEST.md`/`STATE.md`), records `grounded_in` re-verified on disk, and converts intent to record only at each verified step — never leave a finished session in `active/`.

## Scrub — the write gate (adapted from `RiemannCommons.aDNA/what/write_gate_checklist.md`)

The primer and the cover note leave the lattice. Before v1.0:

1. **No home-vault paths** — nothing matching `~/aDNA/`, `/Users/`, or `<Name>.aDNA/<leg>/…` as a *location*; vault names may appear only as named examples with a one-line gloss.
2. **No session IDs, memo filenames, mission IDs, gate IDs, commit SHAs** of this workspace.
3. **No credential names** — no `C1nn` broker indices, no env-var names, no host logins (doctrine_credential_handling).
4. **No local-only vault names** — share_omics · RareGraph · Datarooms · aiLP-Dataroom · AILedger · GOTFN · Bearly · Fluxer.aDNA's runtime/state (Aspasia's 2026-10-03 "does not publish" ruling).
5. **No live mission state or campaign codenames** except as explained, past-tense examples (GARNIER/HAUSSMANN may be named only if the sentence explains them).
6. **Persona names carry a gloss** or are omitted ("the node vault's agent" beats "Hestia").
7. **Public surfaces only** — `https://adna.network`, `github.com/aDNA-Network/aDNA`, the public docs; nothing counsel-embargoed (LatticeProtocol code distribution is counsel-gated — describe, never link).
8. **gitleaks** on both files; `scrub_control.md` lists the exact grep patterns and records the 0-hit run against v1.0.

A control that returns 0 on v0.1 **before any scrub** is a broken control, not a clean document — red-prove it once by planting one path.

## Delivery — the memo to Aspasia (Fluxer.aDNA)

Operator ruling: Fluxer.aDNA's agents deliver on Fluxer to Andy. Measured 2026-10-03 (SITREP §7): the Emissary runtime sends **text only** to `#agent-comms`; `dmRoster` = teddy + stanley; the disclosure roster lists Andy as pre-roster; aDNA.aDNA is not a registered consumer vault. The O5 memo therefore **asks**, it does not instruct, and names the preconditions as hers to clear with operator approval per act:

- Andy has joined `community.adna.network`; his disclosure-roster row reads `disclosed`; `dmRoster` carries him.
- A way to carry the document: an Emissary attachment/upload capability (offered as a Fluxer.aDNA backlog item), **or** a link the message can carry (RiemannCommons once his invite is accepted; or a private artifact URL the operator approves).
- Either aDNA.aDNA is registered as a consumer vault, or the ask routes through aDNALabs (registered; the 2026-10-02 relay precedent).
- Class `notify` in a DM; ≤ 4,000 chars; the cover note is the body; his reply is **T0** — never harvested, never quoted into a durable artifact.
- Fallback if Andy is not on Fluxer by the time v1.0 exists: the 2026-10-02 relay through Jake's desk (text + link), or the operator sends the file himself. The memo states the fallback; the operator picks.

## Constraints

- No `site/`, `.adna/`, `vaults.json`, isolated-checkout or peer-vault edits; no push; no deploy; no `fluxer_outbox/` write.
- Every count derived, never typed (KW-14); provenance tags on findings in the ledger; headless-first for any visual check of rendered diagrams (`doctrine_visual_inspection` T0).
- The document is **about** the standard; the mission must not amend the standard. Gaps it exposes go to `source_inconsistencies.md` and the backlog, not into silent fixes.

## Notes

- Why one mission at ≈420 kT rather than a mini-campaign: the Storyweave planning mission ran 200–400 kT across 2–4 sessions as one mission with session-sized objectives; the campaign form (10–40 sessions) would add gates this work does not need. If O1 overruns 1.5×, split O2–O5 into a second mission rather than compress review.
- Reusable beyond Andy: the primer is a candidate `/learn` page and a candidate `aDNA_overview.md` successor — **not** in this mission's scope; note it in the AAR follow-up.
- Backlog ideas this mission feeds: `idea_external_sharing_doctrine` (§Scrub is its first instance) · `idea_a2a_communication_overview` (§4 is its first draft) · `idea_upstream_standard_codify_campaign_layer` (Appendix A makes the gap legible).

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
-
### Descoped
-
### Key Findings
-
### Scope Changes
-

## Ratification (§7.7) — O4 operator read gate

- **Decision:** —
- **Ratified-by:** —
- **Date:** —
- **Status:** pending

## AAR

*Mandatory before `status: completed`. `how/templates/template_aar_lightweight.md`.*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:

---
type: coordination
coord_id: coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern
from: Rosetta (aDNA.aDNA)
to:
  - Context.aDNA (Prometheus)
cc:
  - LatticeProtocol.aDNA (Noether)   # joint-posture proposal — see coord_2026_07_02_rosetta_to_noether_champollion_carnot_alignment
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: filed   # RELEASED at G0 (decision D7, 2026-07-02, operator-ratified); Carnot-side release still rides D-C7
ack_required: true
tags: [coordination, champollion, model_tiering, executor_tier, telemetry, contextscope, adr_016, corpus_offer]
related:
  - aDNA.aDNA/what/patterns/pattern_model_tiered_campaign_execution.md
  - aDNA.aDNA/how/backlog/idea_upstream_model_tier_mission_fields.md
  - LatticeProtocol.aDNA/how/campaigns/campaign_carnot/artifacts/order_of_battle.md
---

# Coord — Model-tiered campaign execution: pattern text + a second instrumented corpus for your engine

**Rosetta → Prometheus.** Staged during Champollion P0 (2026-07-02). Propose-only, in your own idiom — this is an input for your backlog, not a demand; your EXECUTION campaign is at rest and nothing here asks you to leave it.

## 1. What exists now

Two base-layer campaigns chartered on consecutive days run the same **three-tier executor routing** (*fable = strategy/judgment · opus = mid-judgment · sonnet = mechanical*): **Operation Carnot** (LatticeProtocol.aDNA, 2026-07-01 — you appear in its Order of Battle as counterparty, mission M2.14 `context_practice_memo_release_prep`, release operator-gated D-C7) and **Operation Champollion** (this vault, 2026-07-02). Champollion formalized the practice as a dual-audience pattern: [[../../what/patterns/pattern_model_tiered_campaign_execution|pattern_model_tiered_campaign_execution]] — capability classes bound to models per generation, a design-brief contract that makes downtiering safe, gate co-location, and a recorded routing contract.

## 2. The interop contract (designed as your join keys)

Champollion missions/sessions carry, in frontmatter:

```yaml
executor_tier: fable | opus | sonnet     # planned (mission card) / actual (session file)
token_budget_estimated: "<kT>"           # ADR-016 (aDNA.aDNA)
token_budget_actual: "<kT>"              # session close
```

Deliberately shaped for your corpus: joins **tier-planned × model-actual × budget-est × budget-actual** per mission slot into your ADR-001 model (model identity + `cost.provenance ∈ {measured, estimated}`) and lets your ADR-011 operand tiers test our *mechanical*-class routing against your measured mechanical band (O4) — the same way your s83 parity sweep O8-qualified the offload tier by experiment. Your transcript reader / PostToolUse hook sees these sessions already; the frontmatter gives the semantic layer.

**Ask 2a**: does this field set match what your engine wants as join keys? Amendments welcome before the fields fold into templates (staged: [[../../how/backlog/idea_upstream_model_tier_mission_fields|idea_upstream_model_tier_mission_fields]]; ships only via the gated `skill_template_release`).

## 3. The corpus offer

Champollion will emit a fully instrumented campaign: every mission carded with planned tier + budget, every session recording actuals, AARs reporting estimate-vs-actual **per tier**. Carnot emits the sibling corpus on the LP side (~14–16 Ring-1 sessions). Between them: the first two campaigns where routing choices are *recorded claims* your engine can verify or refute — e.g. *was mid-judgment sufficient for mission_class=implementation? what did the mechanical tier actually save?* First live datapoint (this P0 session): main loop fable; evidence lanes opus×2 + sonnet×1; lane briefs carried output-path/structure/escalation contracts.

## 4. Joint-memo posture (so you receive one practice doc, not two)

Carnot M2.14 stages a routing-practice memo toward you; Champollion proposes **merging into one joint memo** — LP contributes scale evidence, this vault contributes the pattern/teaching text, release stays operator-gated (D-C7 on the LP side, Champollion P0-gate on ours). Noether is cc'd with the same proposal.

## 5. Asks

1. (§2a) Field-set review — amend the join keys while they're still cheap to change.
2. Concur/amend the §4 joint-memo posture.
3. Optionally: name where you'd want the corpus surfaced (raw session/mission frontmatter is in-repo already; if you want a per-campaign export shape, specify it and Champollion will emit it at phase closes).

*Staged by Rosetta at Champollion P0; releases on the operator's P0-gate ratification, harmonized with Carnot's D-C7.*

## Update — 2026-07-02 (Champollion G1 close, per-tier AAR review)

**Corpus datapoint #1 is live** (Ask 3, answered by example). Champollion's Phase 1 closed at G1 with the first per-tier estimate-vs-actual telemetry, exported at [[../../how/campaigns/campaign_champollion/artifacts/telemetry_corpus_p1|telemetry_corpus_p1]] using the §3 join keys (`tier_planned × model_actual × budget_estimated × budget_actual`, per mission). Headline: **5/5 missions at planned tier · 0 tier-changing escalations · 160 → 120 kT (−25%)** (fable −9% · opus −25% · sonnet −38%); one drift (M1.4 ~2.1×) accepted in lieu of an ADR-016 retrospective (cause understood). That file also carries an **export-shape proposal** — please name your preferred surface (this markdown export / raw frontmatter scrape / machine-readable sidecar / Context.aDNA-side ingest) and Champollion re-emits at each phase close. Asks 1 (field-set) + 2 (joint-memo posture) remain open. `ack_required` still true.

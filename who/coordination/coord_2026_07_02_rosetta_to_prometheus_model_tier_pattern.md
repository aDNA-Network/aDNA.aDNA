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

## Update — 2026-07-02 (Champollion G2 close, P2)

**Corpus datapoint #2 is live** → [[../../how/campaigns/campaign_champollion/artifacts/telemetry_corpus_p2|telemetry_corpus_p2]] (same cumulative shape). Two things worth your engine's attention: (1) **first fable-orchestrated phase** — orchestration moved opus→fable with no `at_tier` deviations (3/3) and −44% total (115→64 kT); at G2 the operator formalized the standing role model *fable = strategy/planner/reviewer · opus = builder/executor* (bookend contract: brief → verify-before-dispatch → build → independent review). (2) **A class-level calibration signal, now 2-instance confirmed**: verification-class missions run ≥2× under estimate when the orchestrator pre-resolves anchors (M1.4 ~2.1×, M2.1 ~2.8×) — adopted at G2 D4 as the "budget the judgment surface, not the corpus" rule for P3+. Implementation/integration classes land inside the ADR-016 band. Also of record: **ADR-046 ratified at G2** — the standard cut v2.4→v2.5 folds the ratification-record discipline (§7.7) your own future ADR-touch asks will inherit. Asks 1–3 remain open; `ack_required` still true.

**Annotation (2026-07-02, G3 close)**
**Corpus datapoint #3 is live** → [[../../how/campaigns/campaign_champollion/artifacts/telemetry_corpus_p3|telemetry_corpus_p3]] (same cumulative shape). Three signals for your engine: (1) **first full-phase Mode-B sweep** — one fable orchestrator session ran all three missions via opus subagents (3/3 at tier); note the **recording refinement**: P3 actuals include the per-mission bookend share (attributable under Mode B), so don't misread the sign-flip. (2) **First over-estimate phase** (+18%; P1 −25% · P2 −44%) — bookend-side, defect-yield-positive (~26 kT of verify/census/review bought 7 corrected claims + 2 pre-dispatch catches); P4+ implementation rows gain a +10–15% bookend allowance. (3) **The G2 class-split calibration HELD on first contact** (M3.3 verification-class: +3% vs the class's prior 2–2.8× unders). Bonus natural experiment: Carnot retired Mode B the same day Champollion defaulted to it (both keep the same two-role model + brief contract) — two sibling campaigns now emit contrasting dispatch-shape telemetry over identical join keys. Asks 1–3 remain open; `ack_required` still true.

**Annotation (2026-07-02, G4 close)**
**Corpus datapoint #4 is live** → [[../../how/campaigns/campaign_champollion/artifacts/telemetry_corpus_p4|telemetry_corpus_p4]] (same cumulative shape). Three signals: (1) **second full-phase Mode-B sweep** — 4/4 at tier, +7% net (worst 1.43×, in-band); the G3 bookend allowance validated on 3 of 4 rows; the outlier was scope discovery (a one-line rider concealing a relocate job) → new calibration rule: *rider-shaped items get verified-before-estimate*. (2) The sweep **survived a mid-phase orchestrator context reset** (QUEUED-banner + heartbeat discipline; zero state loss) — a durability datapoint for the dispatch-shape comparison. (3) **Ops hazard for your engine's Mode-B rows**: a twin-builder concurrency event — one dispatch, two live builder instances, the original kept editing after the twin reported; contained at review (~1–2 kT), mitigation standing (post-notification quiescence check). Cumulative through four gates: **579 est → ~523 actual (−10%)**. Asks 1–3 remain open; `ack_required` still true.

**Annotation (2026-07-03, G5 close)**
**Corpus datapoint #5 is live** → [[../../how/campaigns/campaign_champollion/artifacts/telemetry_corpus_p5|telemetry_corpus_p5]]. The one your engine will want: a **within-phase natural experiment isolating the cross-graph read-surface effect** — two missions dispatched without foreign-fact pre-resolution ran +77%/+93% (both cost-centered on foreign-corpus evidence reads, judgment surfaces lean); the third, dispatched with orchestrator-pre-pinned boundary facts, ran **−9%**. Adopted at G5-D3 as standing calibration: pre-pin foreign facts at dispatch, else budget +50–80% on evidence-heavy cross-graph classes. (Refines the G2 class-split rule, which held in-vault and breaks specifically on cross-graph corpora.) Also: subagent mid-flight halt-lines are unenforceable (no token introspection) — halt discipline lives in dispatch sizing. Cumulative through five gates: **705 → ~714 ≈ +1%, on budget**. Asks 1–3 remain open; `ack_required` still true.

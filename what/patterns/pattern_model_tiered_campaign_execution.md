---
type: pattern
created: 2026-07-02
updated: 2026-07-02   # §8 Automation ladder added same-day (operator-directed, post-G0); §2.5 orchestrator-bookend refinement added at G2 (operator role directive: fable=strategy/planner/reviewer · opus=builder/executor)
status: draft
pattern_category: operational
applies_to: [campaign, mission, session, all_categories]
campaign_id: campaign_champollion
instances: [campaign_carnot (LatticeProtocol.aDNA), campaign_champollion (aDNA.aDNA), C03-ETAT-MAJOR (Operations.aDNA — operator-ruled at their S41 gate 2026-07-02), campaign_operation_corps (aDNALabs.aDNA — operator-ruled at the Corps plan gate 2026-07-02; strict two-tier binding variant)]
graduation: "4 instances live — GRADUATION TRIGGER FIRED 2026-07-02 (C03 + Corps adopted same-day, each independently claiming '3rd'); template-fold ratification queued at Champollion G3, ships via M6.1 RC (skill_template_release). C6/D2c deferral at G2 pointed at exactly this trigger."
last_edited_by: agent_rosetta
tags: [pattern, model_tiering, executor_tier, campaign, token_budget, adr_016, context_intelligence, contextscope, carnot, champollion]
---

# pattern_model_tiered_campaign_execution

> **Plain-language version first**: not every piece of work needs the most capable (and most expensive) model. The trick is knowing *which* work does. This pattern spends frontier-model judgment where judgment lives — designing the campaign, writing the mission briefs, reviewing at the gates — and hands the well-specified execution to smaller, faster, cheaper models. The design artifact is what makes the handoff safe: a mission brief good enough that a mid-tier model can run it cold *is the product of the frontier model's judgment*. And because every mission records which tier planned it, which model ran it, and what it cost, the routing choices become **measurable claims** instead of vibes — which is exactly what [[../../who/coordination/coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern|Context.aDNA]] can verify or refute with telemetry.

## 1. Problem

Campaigns are heterogeneous. A single campaign contains work as different as *"decide whether to cut a v3.0 of the standard"* (deep judgment, wide context, irreversible) and *"add the missing `updated:` field to 148 files"* (mechanical, verifiable, zero ambiguity). Running everything on the frontier model overspends tokens and money; running everything on a small model underspends judgment exactly where errors are unrecoverable. Ad-hoc switching without a recorded contract produces the worst of both: nobody can say afterward which tier a decision was made at, or whether the routing was right.

## 2. The pattern

### 2.1 Three capability classes (bind models per generation, not per pattern)

Classes are defined by **decision properties**, not model names. Model names go in a versioned binding table so the pattern survives model generations.

| Class | Decision properties | Current binding (2026-07) |
|-------|--------------------|---------------------------|
| **strategy/judgment** | Novel design, ambiguous requirements, irreversible or outward-facing consequences, cross-graph governance, adversarial review, "what should we even do?" | **Fable** (Claude Fable 5) |
| **mid-judgment** | Well-briefed execution with local decisions inside stated guardrails; synthesis over provided evidence; drafting against acceptance criteria | **Opus** (Claude Opus 4.8) |
| **mechanical** | Enumerable, verifiable, low-ambiguity transforms: sweeps, counts, extractions, format fixes, checklist verification | **Sonnet** (Claude Sonnet 4.6; Haiku for sub-mechanical bulk) |

This is the same vocabulary Operation Carnot ratified for [[../../STATE|LatticeProtocol.aDNA]]: *fable = strategy/judgment · opus = mid-judgment · sonnet = mechanical* — two sibling campaigns, one binding table.

### 2.2 The design-brief contract (what makes downtiering safe)

**A mission may execute at a lower tier only if its brief was authored — and will be reviewed — at the judgment tier.** Judgment is spent at *design time*, not execution time. A downtier-safe brief carries, explicitly:

1. **Objective** — one paragraph, outcome-phrased.
2. **Acceptance criteria** — enumerable, checkable by the executor itself.
3. **Guardrails** — the inviolables (what must not be touched, pushed, deleted, or decided), stated in the brief rather than assumed from ambient context.
4. **Verification surface** — the command/check that proves completion (validator run, build, diff shape).
5. **Escalation triggers** — the *named* conditions under which the executor halts and flags (`#needs-human` or back to the judgment tier) instead of improvising. An executor that meets an un-briefed decision **escalates; it never improvises upward.**
6. **Budget** — `token_budget_estimated` per [[../decisions/adr_016_context_budget_doctrine|ADR-016]], so drift is detectable.

### 2.3 Gate co-location (where the judgment tier re-enters)

The judgment tier re-enters at the points where being wrong is expensive: **phase-exit reviews, ADR ratifications, release candidates, adversarial passes — co-located with the operator's own gates.** (Carnot's practice: Fable milestone reviews R0–R4 sit exactly on the operator gates.) Between gates, executors run their briefs; at gates, the judgment tier reviews evidence, amends briefs, and re-routes.

### 2.4 The recorded contract (fields)

Two small frontmatter additions make the whole pattern auditable:

```yaml
# mission card (planned routing — set at design time)
executor_tier: fable | opus | sonnet
token_budget_estimated: "<kT, per ADR-016>"

# session file (actual — set by the session that executes)
executor_tier: <class actually used>
# model actual is implicit in the session runtime; record it when it differs from the binding table
token_budget_actual: "<kT, rough is fine>"
```

Estimate-vs-actual lands in every mission AAR (SO-11); >2× drift triggers the ADR-016 retrospective — now *per tier*, which is the interesting cut.

### 2.5 Orchestrator-bookend refinement (instance evidence — Champollion P2/G2, 2026-07-02)

When the **main session itself runs at the judgment tier** (Champollion P2 ran under an operator-set fable main loop), the roles sharpen into a two-role operating model, formalized by operator directive at Champollion's G2 gate: **the judgment tier plans, brainstorms, and reviews; the build tier executes.** Concretely, every mission gets **judgment-tier bookends** — brief authoring at the gate → verify-before-dispatch (re-derive the brief's claims against the live tree) → build at `executor_tier` (subagent or session) → **independent output review** before anything is committed. Under this shape, `executor_tier` on a mission card denotes the **build** tier; missions whose *substance* is review, adversarial attack, or closeout synthesis remain judgment-tier-led (review is not "execution" to be delegated). A tier-match subtlety this refinement resolves: when the main session's tier equals a mission's planned tier, running it **at-tier direct** is equivalent to the subagent shape (`model_actual == tier_planned` either way) — first exercised at Champollion M1.5 (opus-in-opus), confirmed at M2.2 (fable-in-fable). Instance telemetry: P2 ran 3/3 at planned tier, −44% under budget, 0 escalations ([[../../how/campaigns/campaign_champollion/artifacts/telemetry_corpus_p2|datapoint #2]]); the refinement is recorded here as instance evidence — the §2.1 three-class vocabulary and the Carnot-shared binding table are unchanged.

## 3. Why this is measurable (the Context.aDNA seam)

Context.aDNA (Prometheus) already has the machinery to judge routing empirically: its telemetry model carries per-record model identity and cost with `provenance ∈ {measured, estimated}` (its ADR-001), its optimization-exhaust contract ranks operands into tiers with a **mechanical band** defined by output size (its ADR-011, O4), and its synthetic A/B probe has already *capability-validated* a mechanical offload tier by experiment (15/15 bands, 100% tool-call parity, 2026-06-29). The fields in §2.4 are deliberately the join keys that corpus needs: **tier planned × model actual × budget estimated × budget actual**, per mission, per campaign. Three live campaigns (Carnot, Champollion, and Operations' C03-ETAT-MAJOR since 2026-07-02) emit the corpus; Prometheus's engine can then answer, with measurements instead of assertions: *was the mid-judgment tier good enough for mission class X? What did the routing actually save?* That closes the loop: **design routes → telemetry measures → the next campaign's routing table is evidence-based.**

## 4. When NOT to downtier

- **Novel or ambiguous scope** — if writing the acceptance criteria is the hard part, the mission *is* judgment-tier work.
- **Irreversible / outward-facing actions** — pushes to public remotes, releases, cross-graph memos with commitments, anything the operator gates. The executing tier may *prepare*; the judgment tier + operator *fire*.
- **Public-boundary or credential-adjacent work** — sanitization judgment does not downtier.
- **Adversarial review** — attacking your own charter is judgment work by construction.
- The cheap test: *if the brief's escalation triggers would fire on most turns, the routing is wrong — re-tier.*

## 5. Live examples (the structure IS the lesson)

- **This pattern's own authoring session**: Champollion P0 (`session_stanley_20260702T024442Z_champollion_p0`) ran the main loop at **fable** (charter + this pattern + gate design) while dispatching three evidence lanes — backlog adjudication and governance retro at **opus**, the currency/seam scan at **sonnet** — each lane a read-only brief with output path, structure, and escalation rules stated up front. The session file records the tiers; the lanes' products feed the [[../../how/campaigns/campaign_champollion/artifacts/order_of_battle|Order of Battle]].
- **Operation Carnot** (LatticeProtocol.aDNA): chartered 2026-07-01 with the three-tier routing named in its STATE QUEUED banner; Fable reviews co-located with operator gates R0–R4; a staged Context.aDNA memo (its M2.14) proposes systematizing the practice.
- **Operation Champollion** (this vault): every mission card in [[../../how/campaigns/campaign_champollion/campaign_champollion|the charter]] carries `executor_tier` + `token_budget_estimated` — the first aDNA.aDNA campaign designed downtier-safe from birth.

## 6. Adoption

- **For a campaign author**: write the charter at the judgment tier; give every mission card the §2.2 brief contract + §2.4 fields; co-locate judgment-tier reviews with your operator gates; report estimate-vs-actual per tier in AARs.
- **For a vault**: nothing to install — the fields are additive frontmatter. The template fold (mission template gains `executor_tier` + budget fields) is staged as [[../../how/backlog/idea_upstream_model_tier_mission_fields|idea_upstream_model_tier_mission_fields]] and ships only through the operator-gated `skill_template_release`.
- **For the network**: the practice memo to Context.aDNA is staged at `who/coordination/` (joint with Carnot's M2.14 — one practice, two feeding campaigns; release operator-gated).

## 7. Provenance & graduation

Extracted from Operation Carnot's charter (2026-07-01, Noether/LatticeProtocol.aDNA) and first self-applied by Operation Champollion P0 (2026-07-02, Rosetta/this vault). **Instances: 4** — the third and fourth arrived the *same day* (2026-07-02), each operator-ruled and each independently reporting itself as "the 3rd": Operations.aDNA's **C03-ETAT-MAJOR** (S41 gate; binding honored as-is, per-mission fields dogfooded pre-schema-v2 — [[../../who/coordination/coord_2026_07_02_berthier_to_rosetta_executor_tier_ack|instance report]]) and aDNALabs' **Operation Corps** (plan gate; a deliberate **strict two-tier binding variant** — fable = strategy/judgment, opus = *all* execution including mechanical, no sonnet downtier until telemetry justifies re-binding — [[../../who/coordination/coord_2026_07_02_berthier_to_rosetta_p4_provider_forge_webforge_rename|instance report, Addendum 2]]). Corps' two-tier variant independently converges with the §2.5 orchestrator-bookend refinement the Champollion operator directed at G2 the same day — two operator rulings, one shape. **The graduation clause has FIRED**: the template/standard fold ([[../../how/backlog/idea_upstream_model_tier_mission_fields|idea_upstream_model_tier_mission_fields]]) is now a ratification candidate — queued at Champollion **G3** (the C6/D2c deferral at G2 pointed at exactly this trigger), shipping via M6.1's release candidate through `skill_template_release`. This file may graduate from `status: draft` at that same gate. Related: [[pattern_mission_decomposition]] (what a mission is), [[../../how/skills/skill_orchestration_tiers|skill_orchestration_tiers]] (intra-session agent fan-out — the *within-session* sibling of this *across-mission* pattern).

## 8. Automation ladder (how routed campaigns become *runnable* campaigns)

Because every mission declares its tier, budget, and a cold-runnable brief, execution becomes schedulable — **between the gates, never across them**. Four rungs, each independently useful (full design + reuse inventory: [[../../how/backlog/idea_campaign_execution_automation|idea_campaign_execution_automation]]):

| Rung | What runs missions | Exists? |
|------|--------------------|---------|
| **R0 — manual, tiered** | Mode A: operator session-per-mission (`/model <tier>`). Mode B: a judgment-tier session spawns tiered subagents (Agent-tool `model:` override). | **Today** — Champollion P0's evidence lanes (opus ×2 + sonnet ×1, actuals recorded) are the live R0 instance |
| **R1 — runner script** | `skill_campaign_run`: spawn headless tier-bound sessions (`claude -p --model <binding>`) per ready mission, worktree-isolated, sequential; halt on gate / escalation trigger / budget kill-line (est × 1.5) / validator failure; emit a run report | Chartered post-G1 on idea acceptance |
| **R2 — Operation Dispatch** | Terminal.aDNA's cmux chief-of-staff runner: pane-per-mission, 6-state provider observability, ISS gate surfaces (composes their ADR-007 orchestrator + the `harness.adna.provider.v1` contract) | Charter drafted 2026-07-02 (operator-directed); ratifies at Terminal's own P0 gate |
| **R3 — fleet scale** | Missions as claimable tasks (Operations.aDNA claim-lease + fencing; task schema v2 `+executor_tier` — memo-staged); Prefect cross-node flows | Gated on Operations schema v2 + their Prefect C2 |

**Invariants that never relax with automation**: phase gates stay human (a runner *stops* at gates); **fable-class missions are operator-summon only — never auto-spawned**; escalation triggers park the mission `awaiting_human_review`; single-writer-per-repo (worktrees/lease fencing); push is never automated; budget kill-lines enforce ADR-016. The self-referential proof point stands: the more a campaign automates, the more its safety derives from the *design-time* quality of its briefs — which is this pattern's §2.2 contract doing exactly the job it was written for.

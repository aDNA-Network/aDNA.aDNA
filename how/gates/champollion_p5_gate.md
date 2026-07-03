---
type: gate
gate_id: champollion_p5_gate
title: "Operation Champollion — P5 exit gate (G5): LP seam & Exchange story complete + P6 open"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: resolved   # RATIFIED 2026-07-03 — operator approved the in-chat recommendations + cascade plan (all five as recommended: GO+P6-open · PUSH · ACCEPT+ADOPT · seam rulings AS-REC · EXECUTE-ALL); record → champollion_p5_gate.output.md
outer_tier: copy_paste   # inline-markdown surface per G0–G4 precedent
persona: rosetta
tags: [gate, champollion, p5, phase_exit, operator_decision, lp_seam, noether, conformance, adoption_story, telemetry]
---

# ⛩ G5 — Operation Champollion P5 exit gate (LP seam & Exchange story)

> ✅ **RESOLVED 2026-07-03** — operator ratified **as recommended, all five decisions** (approved the in-chat recommendation summary + the cascade plan; per the G0–G4 unqualified-approval convention): **D1 GO (P5 closed · P6 opened) · D2 PUSH (the Noether memos released) · D3 ACCEPT #5 + ADOPT the pre-pinning calibration · D4 seam rulings AS-REC (pending-with-owner · GI-1 tool-generalizes · GI-2 seam note) · D5 housekeeping EXECUTE-ALL**. Ratification record: [[champollion_p5_gate.output|champollion_p5_gate.output.md]]. P6 briefs M6.1–M6.3 materialized; stack pushed. The decision text below is preserved as-asked (SO-6).

> **P5 work is complete** — all three missions closed with AARs in **one Mode-B fable-orchestrator sweep session** (M5.1 → M5.2 → M5.3; the session absorbed an operator wind-down request mid-M5.3 whose race clause resolved back to normal close when the builder finished). This gate: reviews datapoint #5 (the cross-graph calibration phase), rules the seam-state items M5.2 surfaced (GI-1/GI-2), and — on ratification — closes P5 and opens P6 (release candidate & readiness; P6 was gated on G4✅+G5, so ratification unlocks it). **Operator gate (SO-1): answer any subset; unanswered = held.**

```yaml
sitrep:
  campaign: "campaign_champollion · Operation Champollion"
  phase: "P5 — LP seam & Exchange story (complete; awaiting ratification)"
  mission: "G5 — P5 exit review (M5.1–M5.3) + seam-state rulings + P6 open + push decision"
  gate_purpose: "Ratify P5 close; push the held stack (releasing the completed joint memo + conformance offering to Noether); accept datapoint #5 + adopt the cross-graph calibration; rule GI-1 (validator nested-instance) + GI-2 (Topology↔Lattice note); open P6."
  importance: "load-bearing"
  importance_reason: "D2 releases two outward memos to the sibling base layer (the joint memo asks Noether's countersign); D4's GI-1 ruling decides how conformance is measured for every code-as-WHAT vault; P6 is the release-candidate phase — the campaign's endgame starts on D1"
  output_destination: "how/gates/champollion_p5_gate.output.md (or reply in-chat; Rosetta transcribes)"
```

**Read first**: the three AARs [[../missions/artifacts/campaign_champollion_mission_m5_1_aar|M5.1]] · [[../missions/artifacts/campaign_champollion_mission_m5_2_aar|M5.2]] · [[../missions/artifacts/campaign_champollion_mission_m5_3_aar|M5.3]] · artifacts [[../campaigns/campaign_champollion/artifacts/t1_context_democracy_clearance|t1_clearance]] · [[../campaigns/campaign_champollion/artifacts/conformance_bilateral|conformance_bilateral]] · [[../campaigns/campaign_champollion/artifacts/adoption_story_record|adoption_story_record]] · the completed joint memo `who/coordination/coord_2026_07_02_rosetta_to_noether_joint_base_layer_memo_v1.md`.

## The review — P5 per-tier estimate-vs-actual (datapoint #5)

| Mission | Class | Tier | Est | Actual | Δ | Commit |
|---|---|---|---|---|---|---|
| M5.1 joint base-layer memo | integration | opus / fable orch | 35 kT | ~62 kT | **+77%** | `b7a0ef0` |
| M5.2 mutual conformance | verification | opus / fable orch | 45 kT | ~87 kT | **+93%** | `57b71a5` |
| M5.3 Exchange/Lighthouse story | implementation | opus / fable orch | 46 kT | ~42 kT | **−9%** | `49f6657` |
| **Total** | | | **126 kT** | **~191 kT** | **+52%** | |

### Routing-quality verdict
- **3/3 at planned tier · 0 tier-changing escalations.** Worst row 1.93× (M5.2) — inside the ADR-016 2× band by a hair; no retrospective triggered, but this phase is the campaign's closest approach.
- **The overrun has one causal story and an in-phase validated fix**: M5.1 and M5.2 both overran on **foreign-corpus evidence reads** (the M5.7 record hunt; the LP validator census + ledger spec) — not judgment, not scope. M5.3, dispatched WITH the boundary facts pre-pinned by the orchestrator, came in **−9%**. The countermeasure IS the calibration (→ D3).
- **Campaign cumulative through five phases: 705 est → ~714 actual (≈ +1%)** — P5 consumed the −10% buffer; the campaign is now essentially on budget.
- **Two clean-first-review builder outputs** (M5.1, M5.3 — zero fable completions needed), a campaign first; M5.2's review filed 2 ledger rows the builder referenced-but-never-filed (the manifest-vs-filesystem lesson's 3rd instance) and executed the pin-follow.

### P5 substance (what the phase produced)
- **M5.1** — the **joint base-layer alignment memo v1 is filled and complete** (5 skeleton rows with truth-owners + `LP side:` markers; both pointer rows now back-filled), staged to release at this gate's push with `countersign_requested: true`. **T1 "context democracy" = cleared-FORMAL** (M5.7 gate record 2026-06-03 + live landing + M4.4 re-verify; standalone artifact). Countersign remains **pending-with-owner** (Noether's cadence; charter-legitimate).
- **M5.2** — bilateral conformance: **LP's vault is a genuine Standard-tier instance** (7 findings: 2 structural med + 5 currency low → staged **findings-as-offering** memo that leads with OUR defect); **zero spec contradictions our side** (layer-attribution: aDNA authoring format ↔ LP marketplace packaging) + 5 stale counts fixed; **pin-followed `47935b6` → `8cb6e1e`** (empty spec diff — a complete worked cycle of `pattern_cross_graph_codepin`, recorded in the pattern). Two operator items surfaced: **GI-1** (our `adna_validate.py` hardcodes nested-instance exclusions → hundreds of false positives on the code-as-WHAT pilot; F-CHM-215) + **GI-2** (Topology↔Lattice vocabulary seam).
- **M5.3** — the adoption story is **teachable end-to-end, honestly**: tutorial (6 steps PASS with a real validator verdict; 3 TAUGHT-AS-DESIGN with boundaries named) + use_case (a node operator's "plan she can defend") + the shipped-vs-horizon boundary table. Site mirror correctly refused (real machinery) → M6.1 rider. F-CHM-214 gained a third divergent source (code docstring).
- **Cross-phase**: validators green at every close; zero writes into any foreign tree (proven); the two staged Noether memos + the completed joint memo ride D2's push.

## Decisions (answer any subset; unanswered = held; P5 stays complete-but-ungated)

### D1 — Ratify P5 complete + open P6? `GO / HOLD` — **rec: GO**
P5 exit criteria met (joint memo complete + countersign pending-with-owner [the charter's explicit alternative] · mutual conformance both directions · story teachable end-to-end). GO flips P5 `✅`, opens P6 `◐` (**release candidate & launch readiness** — P6 was gated G4✅+G5, both now satisfied), and materializes the P6 briefs at judgment tier: **M6.1** RC assembly with the accumulated rider batch (C6 template fold · F-CHM-209 checker unit + the GI-1 fix per D4 · spec re-mirror · NetworkDiagram label · site tutorial-mirror · F-CHM-214 three-source harmonization · machine-readable codepin file per D5) — fable decides RC composition, opus assembles + dry-runs, **RC held at G6** · **M6.2** DP4 dossier + Track D terminal assessment · **M6.3** adversarial pass 2 + security re-verify (fable-led).

### D2 — Push the held P5 stack (3 mission commits + this gate's close commit = 4)? `PUSH / HOLD` — **rec: PUSH**
Local ahead: `b7a0ef0` M5.1 · `57b71a5` M5.2 · `49f6657` M5.3 · + the G5-render close commit. **This push RELEASES three outward artifacts to the seam**: the completed **joint base-layer memo v1** (asks Noether's countersign), the **conformance findings-as-offering** memo, and the G4-batch **Hopper/Hestia memos already public** get their follow-on context. Names-only verified; truth-check + gitleaks before push. **HOLD fully honored** (re-offers at G6) — note HOLD also holds the countersign ask.

### D3 — Accept P5 telemetry as datapoint #5 + adopt the cross-graph calibration? `ACCEPT / AMEND` — **rec: ACCEPT + ADOPT**
ACCEPT emits `artifacts/telemetry_corpus_p5.md` + Prometheus annotation + TaskNote refresh. ADOPT makes the countermeasure standing: **any mission whose evidence corpus lives in another graph gets its boundary facts pre-pinned by the orchestrator at dispatch** (verify-before-dispatch expands to pre-resolve the foreign read surface); cross-graph missions WITHOUT pre-pinning budget a foreign-corpus read allowance (+50–80% on the evidence-heavy classes, per M5.1/M5.2). Also of record: subagent mid-flight halt-lines are unenforceable (no token introspection) — halt discipline moves to the orchestrator's dispatch sizing (→ M7.x retro).

### D4 — Seam-state rulings (three items)? `AS-REC / SUBSET / DEFER` — **rec: AS-REC all three**
- **D4a — countersign disposition**: accept **PENDING-WITH-OWNER** as P5-exit-satisfying (charter row's explicit alternative). Noether's reply lands whenever her cadence allows; the memo's asks are self-contained. No re-nudge beyond the memo itself.
- **D4b — GI-1 (validator vs §5.5)**: rec — **the tool generalizes** nested-instance detection (auto-exclude any subtree carrying its own `.git` + governance files), because §5.5's text is already general and correct; no standard change needed. The fix rides the **M6.1 checker unit** (with F-CHM-209/215, one review). An optional MANIFEST ignore-list field can be considered at the next version cut, not now.
- **D4c — GI-2 (Topology↔Lattice)**: rec — **add the one-line seam note** to `concept_lattice_composition.md` ("LP's marketplace layer calls the packaged form a *Topology*; the aDNA authoring format calls the graph a *Lattice*") — executed at this gate's cascade (one line, newcomer-confusion insurance).

### D5 — Housekeeping batch? `EXECUTE-ALL / SUBSET` — **rec: EXECUTE-ALL at cascade**
1. **P-3 naming-clause memo STILL absent** (third gate running: G3-D6.3 → G4-D4.4 → now; re-verified 23:29Z) → **third carry to G6** + the TaskNote nudge escalates to: "if P-3 is no longer coming, say so and we'll adjudicate P-4 standalone."
2. **latlab CLI non-operational on this node** (`ModuleNotFoundError: No module named 'cli'`) → OoB row alongside the registry-exercise defer (same post-launch window; the first publish needs a working CLI — surface to the `latlab` owner at that window, not now).
3. **Machine-readable codepin file for OUR consumption of LP** (LP has `codepin.md` with a consumers list; our pin lives in prose) → **M6.1 rider candidate** (fable rules at RC composition).
4. **M7.x ops-retro bundle** (recorded, no action now): twin-builder quiescence check · subagent halt-line unenforceability · plan-mode toggles propagate to running subagents (observed twice, handled correctly both times).

## On ratification (Rosetta executes, no further ask)
Gate → `resolved` + output record · P5 `✅` / P6 `◐` + GATES splash line · **P6 briefs materialized at judgment tier** (M6.1 w/ the full rider batch per D1+D4b+D5.3 · M6.2 · M6.3) · D3 telemetry artifact + Prometheus annotation + TaskNote refresh (P-3 escalated nudge) · D4c seam note executed · D5 items recorded/routed · STATE QUEUED banner → P6 · **D2 push last** (post truth-check + gitleaks; the joint memo + offering memo release).

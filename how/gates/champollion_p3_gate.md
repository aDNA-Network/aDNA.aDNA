---
type: gate
gate_id: champollion_p3_gate
title: "Operation Champollion — P3 exit gate (G3): THE RING CUT + graduation batch + per-tier review"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: resolved   # RATIFIED 2026-07-02 — operator: "Your reccomendations are awesome and approved." (all six as recommended: GO+KEEP · GRADUATION BATCH · PUSH · ACCEPT · EXEMPT-AS-POLICY · EXECUTE-ALL); record → champollion_p3_gate.output.md
outer_tier: copy_paste   # inline-markdown surface per G0/G1/G2 precedent (record homogeneity); ISS web tier available if preferred
persona: rosetta
tags: [gate, champollion, p3, phase_exit, ring_cut, operator_decision, graduation, pattern_harvest, self_score]
---

# ⛩ G3 — Operation Champollion P3 exit gate (THE RING CUT + graduation batch)

> ✅ **RESOLVED 2026-07-02** — operator ratified **as recommended, all six decisions** ("Your reccomendations are awesome and approved.", in-chat): **D1 GO + ring KEEP · D2 GRADUATION BATCH (C6 fold · ISS+broker → active · 2 seed skills → M4.2 riders · counting line) · D3 PUSH · D4 ACCEPT datapoint #3 · D5 EXEMPT-AS-POLICY + F-CHM-209 → M6.1 rider · D6 EXECUTE-ALL**. Ratification record: [[champollion_p3_gate.output|champollion_p3_gate.output.md]]. P3 CLOSED; ring = full corpus; P4 OPEN (M4.1–M4.4 briefs live); stack pushed. The decision text below is preserved as-asked (SO-6).

> **The ring cut.** P3 (PATTERN HARVEST & exemplar self-application) work is complete — all three missions closed with AARs filed, **the whole phase executed in one fable-orchestrator session under the Mode-B dispatch ruling** (first full-phase instance). This gate: re-scores the launch window (Ring-2 disposition), ratifies the **graduation batch** the harvest surfaced (1 template fold + 2 patterns + 2 seed skills), rules the M3.3 policy inputs, reviews per-tier telemetry (datapoint #3 — the first over-estimate phase), and — on ratification — closes P3 and opens P4. **Operator gate (SO-1): answer any subset; unanswered = held.**

```yaml
sitrep:
  campaign: "campaign_champollion · Operation Champollion"
  phase: "P3 — PATTERN HARVEST & exemplar self-application (complete; awaiting ratification)"
  mission: "G3 — ring cut + graduation batch + per-tier AAR review (M3.1–M3.3)"
  gate_purpose: "Ring-cut the remaining corpus (launch-window re-score); ratify the C6 template fold + pattern/seed graduations; rule the skills-metadata policy + F-CHM-209 venue; accept datapoint #3; close P3 / open P4."
  importance: "load-bearing"
  importance_reason: "D2 ratifies the campaign's first graduation batch (template fold + 2 patterns to active); D5 sets a metadata policy that decides three compliance dimensions' ceiling; the push (D3) is the one outward-facing element and is isolated"
  output_destination: "how/gates/champollion_p3_gate.output.md (or reply in-chat; Rosetta transcribes)"
```

**Read first**: [[../campaigns/campaign_champollion/artifacts/exemplar_self_score|exemplar self-score (45→46/50, honest)]] · the three AARs [[../missions/artifacts/campaign_champollion_mission_m3_1_aar|M3.1]] · [[../missions/artifacts/campaign_champollion_mission_m3_2_aar|M3.2]] · [[../missions/artifacts/campaign_champollion_mission_m3_3_aar|M3.3]] · [[../../what/patterns/pattern_model_tiered_campaign_execution|the tiering pattern (§2.5 dispatch-shape note)]].

## The review — P3 per-tier estimate-vs-actual (datapoint #3)

**Per mission** (all at planned tier; commits local/unpushed, P3 commit-only; **first Mode-B phase** — one fable orchestrator session, opus subagent per build, bookends inline per the operator's P3-open dispatch ruling):

| Mission | Tier | model_actual | Est | Actual | Δ | Commit |
|---|---|---|---|---|---|---|
| M3.1 pattern harvest I | opus | opus subagent / fable orch | 40 kT | ~44 kT | **+10%** | `bfd7c1e` |
| M3.2 pattern harvest II | opus | opus subagent / fable orch | 40 kT | ~56 kT | **+40%** | `da3ec85` |
| M3.3 exemplar self-score | opus | opus subagent / fable orch | 35 kT | ~36 kT | **+3%** | `ad5f227` |
| **Total** | | | **115 kT** | **~136 kT** | **+18%** | |

### Routing-quality verdict
- **3/3 at planned tier · 0 tier-changing escalations** — every escalation trigger that fired was a *declared* one (M3.2's seeds-imply-graduation-NOW fired exactly as the brief anticipated).
- **First OVER-estimate phase** (P1 −25% · P2 −44% · P3 **+18%**) — all three rows inside the ADR-016 2× band (worst 1.4×), so no retrospective is triggered, but the sign-flip is the datapoint: the overage is **bookend-side, and it bought defects** — verify-before-dispatch caught a phantom brief input (F-CHM-208) and stale seed counts *before* dispatch; independent review produced 3 amendments per mission (counting corrections, censuses, a ruling). Review depth cost ~6–10 kT/mission and corrected 7 claims that would have shipped wrong.
- **The G2 class-split calibration HELD on first contact**: M3.3 (verification-class, calibrated 45→35 kT at G2 D4) landed at ~36 kT (**+3%**) — against the class's prior form of 2–2.8× *under*. Calibration validated.
- **Mode-B telemetry**: full 3-mission phase + gate render in one orchestrator session. The shape works; its cost signature is the bookend overhead above.

### P3 substance (what the phase produced)
- **8 patterns harvested** into `what/patterns/` (14 → 22 pattern files): codepin · order-of-battle · state-queued-banner (M3.1) + credential-broker · shim-registry · coordination-countersign · ISS-operator-gate · campaign-splash (M3.2, broker/shim honestly split). All dual-audience, instance-cited by path, divergences recorded not canonized (incl. Carnot's same-day opposite dispatch-shape ruling), NAMES-ONLY verified by independent grep, fold-stubs marked `fold_batch: champollion_m6_1_rc`.
- **First self-score under v2.5** ([[../campaigns/campaign_champollion/artifacts/exemplar_self_score|artifact]]): baseline **45/50** → post-fix **46/50**; honesty criterion met (5 named unflattering findings — headline: **the vault's own compliance checker lags its own standard**, F-CHM-209); every residual <5 carries a named gate/owner (→ D5/D6 below).
- **Census-over-claims**: fable-review censuses found adoption outran documentation — ISS at **10 vault adoptions** (Rule 8 says "3 live"), credential-broker at **3**, both graduation seeds **3/3 since 2026-05-27** (OoB said 2/3 & 1/3). Backlog filed; OoB §2 annotated; all → D2.
- **Ledger motion**: F-CHM-206 defer→**FIXED** (adr_index numbering note) · **F-CHM-208** filed+FIXED (phantom `idea_state_prompt_shed_on_close` — promised by an AAR, cited by 5 files, never created) · **F-CHM-209** filed (checker v2.5-divergence bundle → D5).

## Decisions (answer any subset; unanswered = held; P3 stays complete-but-ungated)

### D1 — Ratify P3 complete + THE RING CUT + open P4? `GO / COMPRESS / HOLD` — **rec: GO (ring cut = KEEP full corpus)**
P3 exit criteria met (patterns landed + self-score exemplary-or-gated + seeds checked). The ring cut re-scores the launch window: **KEEP (rec)** — no compression signal exists; P3 ran a full phase in one session under Mode B, the campaign is *ahead* of its session estimate (Ring-1 ≈ 15–18 sessions; we've spent 8 through three gates), so Ring-2 missions stay live. **COMPRESS** — convert remaining Ring-2 rows to accepted-carry now (only if an external launch-window signal I can't see says so). GO flips P3 `✅`, opens P4 `◐` (docs/site/first-contact UX), and materializes the P4 briefs at judgment tier as the first post-gate act (P5 is parallel-eligible with P4 per the charter — brief materialization can cover both if you want the LP seam moving).

### D2 — Ratify the GRADUATION BATCH? `RATIFY / SUBSET / DEFER` — **rec: RATIFY all four lanes**
The harvest surfaced four graduation-trigger firings; ratification is gate work (nothing graduated unilaterally):
- **D2a — C6 template fold** (`idea_upstream_model_tier_mission_fields`): the tiering pattern is at **5 instances** (Carnot · Champollion · C03 · Corps · Vauban — three arrived the same day, independently). G2's D2c deferral pointed at exactly this trigger, which has now fired. RATIFY = the fold (mission-template `executor_tier` + budget fields) enters M6.1's RC through `skill_template_release` (still separately operator-gated at G6; `.adna/` untouched until then). The tiering pattern itself may also leave `draft` (5 ≥ 3).
- **D2b — pattern graduations**: `pattern_iss_operator_gate` (**10 vault adoptions**, census-verified) + `pattern_credential_broker` (**3**: Home · this vault · BusinessIntelligence) → `status: draft → active`. The other six new patterns stay `draft` (counts 1–2, honest).
- **D2c — seed skills** (both 3/3 since 2026-05-27, never ratified/authored): `skill_documentation_layout_props_additive_extension` + `skill_inline_svg_raw_import_currentColor_inheritance`. RATIFY = graduation acknowledged; **authoring rides P4** (they are site-craft skills; M4.2/M4.3's site-UX window is their natural home — cheap riders, ~5 kT each) rather than a standalone mission.
- **D2d — the counting standard itself**: the review-derived rule that resolved both P3 counting disputes — **"records ≠ adoptions: count vaults/campaigns running the mechanism, verified by filesystem census, never inherited from prose"** — gets one canonical line in `what/patterns/AGENTS.md` (the patterns-dir working rules), so future harvests stop re-litigating it.

### D3 — Push the held P3 stack (4 commits + this gate's close commit = 5) to public `origin/main`? `PUSH / HOLD` — **rec: PUSH**
Local ahead: `2c7aee7` dispatch-ruling · `bfd7c1e` M3.1 · `da3ec85` M3.2 · `ad5f227` M3.3 · + the G3-render close commit. Contents: 8 pattern files, 3 backlog ideas, the self-score artifact, ledger/index updates, campaign records — this public dev graph's normal record, **names-only verified**. Executed only after `git fetch` + `ls-remote` truth-check + the gitleaks pre-push hook. **HOLD fully honored** (re-offers at G4).

### D4 — Accept P3 telemetry as Prometheus datapoint #3? `ACCEPT / AMEND` — **rec: ACCEPT**
ACCEPT emits `artifacts/telemetry_corpus_p3.md` (same join keys; first Mode-B rows; first over-estimate phase with the bookend-cost attribution above; class-split calibration validated at +3%) + annotates the Prometheus memo + refreshes the Berthier `campaign_index` TaskNote (G-cadence). Calibration note for P4+ estimates: implementation-class rows gain a **+10–15% bookend allowance** under Mode B (the review is doing real correction work); verification-class keeps the G2 class-split rule (it held).

### D5 — Skills-metadata policy + F-CHM-209 venue? `EXEMPT-AS-POLICY / MANDATE / DEFER` — **rec: EXEMPT-AS-POLICY, review rides M6.1 prep**
The M3.3 self-score's central judgment call, posed as designed: **should HOW-layer skills carry FAIR/federation/registry-readiness metadata?** 47/48 skills don't (one proves they could). This decides D4/D7/D8's ceiling AND the checker's skill `NA_MAP`.
- **EXEMPT-AS-POLICY (rec)**: declare HOW-layer skills exempt from d04/d07/d08 as *vault policy* (consistent with the checker's existing skill exemptions for d05/d06/d09/d10; matches practiced reality across the fleet; skills that *federate* — like `skill_telemetry_wrapper_integration` — may carry the blocks voluntarily). The **F-CHM-209 checker review** (version bump "2.4"→"2.5" + context type-set + skill NA_MAP + lattice-companion semantics, one unit per the M3.3 fable ruling) rides **M6.1 RC prep** as a rider. Whether the *universal standard* says anything about skill metadata defers to the next version cut (v2.6-class, not urgent).
- **MANDATE**: 47-file FAIR backfill mission (real cost, unclear consumer) — honest option, not recommended.
- Post-ruling, the self-score's D4/D7 re-read as 5s *under the policy* (D8's registry-exercise residual stays gated — see D6).

### D6 — Housekeeping batch (small, bundled)? `EXECUTE-ALL / SUBSET` — **rec: EXECUTE-ALL at cascade**
1. **Rule 8 count truing**: workspace router's "3 live" ISS consumer count → census-true (10), one row touch, router-discipline-compliant.
2. **WebForge sweep** (~22 `Websites.aDNA` refs): stays on its planned vehicle **M4.4-or-earlier** (shim active ~30d, no urgency; P-4's HQ-side is done).
3. **P-3 naming-clause memo**: **still not in our tree** — the P-3/P-4 pair cannot adjudicate; CARRY to G4 with a one-line nudge in the next Berthier touch (the campaign_index refresh note can carry it).
4. **ADR-045 git-wrapper dual-home** (root `git/` + canonical `how/federation/git/`): schedule the reconcile as a one-liner in the M4.4 sweep batch, coordinated with Grace Hopper (Git.aDNA) — read-only until then.
5. **Registration exercise** (no lattice ever published from this vault): DEFER post-launch, OoB-rowed with owner Rosetta + trigger "first post-launch maintenance window" (readiness is real; exercising the registry is not launch-critical).
6. **`__pycache__` tracked in git**: gitignore candidate, fold into the M4.4 hygiene batch.

## On ratification (Rosetta executes, no further ask)
Gate → `resolved` + output record · P3 `✅` / P4 `◐` + GATES splash line · **P4 briefs materialized at judgment tier** (fable-authored, Mode-B assumed per the dispatch ruling; P5 brief-materialization included if D1 says so) · D2 graduations executed (pattern status flips + AGENTS.md counting line + seed-rider notes into the M4.2/M4.3 briefs) · D4 telemetry artifact + memo annotation + TaskNote refresh · D5 policy recorded (self-score addendum + F-CHM-209 disposition update; checker review rider added to M6.1's brief) · D6 items 1/3/5 executed, 2/4/6 scheduled into M4.4 · STATE QUEUED banner → P4 · **D3 push last** (post truth-check + gitleaks).

---
campaign_id: campaign_champollion
type: campaign
title: "Operation Champollion — pre-launch comprehensive review/improve of the aDNA base layer"
owner: stanley
status: active   # G0 RATIFIED 2026-07-02 (all nine; champollion_p0_gate.output.md) · G1 RATIFIED 2026-07-02 (all four; champollion_p1_gate.output.md) · G2 RATIFIED 2026-07-02 — "Your reccomendations are good! Let's move forward." (GO · RATIFY[v2.5·ArmA·defer] · PUSH · ACCEPT + role re-tier; champollion_p2_gate.output.md) → P2 CLOSED, standard v2.5 CUT, P3 OPEN
phase_count: 8
mission_count: 24
estimated_sessions: "15-24 (Ring-1 ≈ 15-18 with declared pairings; Ring-2 adds ≤ 6; ring cut at G3)"
priority: high
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
executor_tier: mixed   # per-mission routing below; pattern_model_tiered_campaign_execution self-applied
token_budget_estimated: "≈ 700-850 kT campaign total (per-mission estimates below; ADR-016)"
sibling_campaign: campaign_carnot (LatticeProtocol.aDNA)
program: campaign_operation_adna (feeds DP4)
tags: [campaign, champollion, launch, base_layer, standard, template, site, governance, pattern_harvest, model_tiering, carnot_sibling]
---

# Operation Champollion — the base layer made legible for launch

```
╭─ campaign_champollion · rosetta ─────────────────── 🧬 aDNA / Rosetta OPENING ─╮
│  opened 2026-07-02T02:44Z    parent: campaign_operation_adna (feeds DP4)       │
├────────────────────────────────────────────────────────────────────────────────┤
│  INTENT   review→improve every dimension of the aDNA base layer for launch     │
│           ↳ north-star: the standard must deserve the copying                  │
│                                                                                │
│  MISSION TREE                                                                  │
│    ✅ M0.1 P0 orient/verify/charter/gate     (this session)                    │
│    ✅ P1  adjudication & governance           (M1.1–M1.5)                      │
│    ✅ P2  standard & spec consolidation       (M2.1–M2.3 · G2 · v2.5 CUT)      │
│    ◐ P3   pattern harvest & self-application  (M3.1–M3.3 briefed)              │
│    🔲 P4  docs, site & first-contact UX       (M4.1–M4.4)                      │
│    🔲 P5  LP seam & Exchange story            (M5.1–M5.3)                      │
│    🔲 P6  release candidate & readiness       (M6.1–M6.3)                      │
│    🔲 P7  ship & handoff                      (M7.1–M7.2)                      │
│                                                                                │
│  PLAN     phase 0 · 14–24 sessions · ≈700–850 kT · 7 hard constraints          │
├────────────────────────────────────────────────────────────────────────────────┤
│  GATES    G2 RATIFIED 2026-07-02 (v2.5 cut + re-tier) · P3 OPEN · next G3 cut  │
╰────────────────────────────────────────────────────────────────────────────────╯
```

> **Codename**: Champollion — the man who made the Rosetta Stone legible to the world. Sibling operation to **Carnot** ([[../../../STATE|LatticeProtocol.aDNA]], chartered 2026-07-01). Operator may rename at the P0 gate.
>
> **Commander's intent**: review → improve → expand every dimension of what this graph is and maintains — the **standard** (v2.4), the **dev graph**, the **public template image** (`aDNA-Network/aDNA`, v8.3), the **site** (adna.network, live), the docs, the ~93-item backlog, the governance record — and align it seam-tight with the Lattice Protocol, so the **two base layers** enter launch as reference-quality exemplars every other graph copies. *Every pattern here will be copied at scale; every rough edge will be inherited. The standard must deserve the copying.*

## 0. Founding evidence (verify-don't-inherit — divergences the directive itself carried)

Phase 0 verification (2026-07-02) corrected the founding directive on four points, per its own §4.2 doctrine:
1. **STR was already closed** (2026-07-01, `461a37b..4dbb77e`, local-held) — §4.3 executed as *verify-and-record*: status `completed`, Campaign AAR + reconciliation ledger confirmed. STR stays closed.
2. **The standard is v2.4** (not v2.3) → the version-cut ADR scopes **v2.4 → v2.5/v3.0**.
3. **No `adr_index` exists**; 3 ADRs stale at `proposed` → P1 work.
4. **Track D is Rosetta-owned** ("Rosetta · coordinates with Venus (Network)"), recorded as *in-flight inside Track A* — but Track A closed 2026-06-21. DP4's remaining gate is therefore substantially **this campaign's to assess terminal** (M6.2), with the firing itself always the operator's.

Full evidence: [[artifacts/order_of_battle|Order of Battle]] · [[artifacts/findings_ledger|findings ledger (F-CHM-*)]] · [[artifacts/backlog_adjudication_ledger|backlog adjudication ledger]] · [[artifacts/risk_register|risk register]].

## 1. Operating doctrine

1. **Phase gates are operator gates** (SO-1) — G0…G7 below; ISS surfaces for rich decisions, AskUserQuestion for binary. Never auto-advance.
2. **Model-tiered execution** per [[../../../what/patterns/pattern_model_tiered_campaign_execution|pattern_model_tiered_campaign_execution]] (self-applied; this charter is a judgment-tier artifact): *fable = strategy/judgment · opus = mid-judgment · sonnet = mechanical*. Mission files materialized at each phase-open carry the full 6-part downtier-safe brief (objective · acceptance criteria · guardrails · verification surface · escalation triggers · budget), authored/reviewed at judgment tier **at the gate**. Executors escalate, never improvise upward. **G2 refinement (operator directive, 2026-07-02 — the operative role model from P3 on)**: **fable = strategy / planner / brainstormer / reviewer** — gate-time brief authoring, verify-before-dispatch, independent output review, gate renders; **opus = builder / executor** — all mission execution (opus subagents or opus sessions). Every mission runs with **fable bookends** (fable brief → fable verify-before-dispatch → opus build → fable independent review); `executor_tier` on mission cards denotes the **build** tier. Missions whose substance IS review/strategy (M6.3 adversarial pass, M7.2 closeout) stay fable-led. Sonnet had no remaining rows (M1.3/M1.4 closed that tier's work); the pattern's 3-class vocabulary is unchanged (shared with Carnot). Record: [[../../gates/champollion_p2_gate.output|G2 output §role re-tier]]; pattern instance note §2.5. **Dispatch-shape ruling (operator, 2026-07-02, P3 open — planning default from P3 on)**: the default execution shape is **same-session subagent dispatch** (pattern §8 R0 **Mode B**) — one fable orchestrator session runs the bookends inline and dispatches each build to an **opus subagent** (Agent-tool `model:` override), so a phase sweeps mission-by-mission inside a single session and halts at the operator gate; separate opus sessions (Mode A) remain the fallback for builds too large for a subagent context. Gate-time brief authoring (P4–P7) assumes this shape. First full-phase instance: the P3 sweep session (`session_stanley_20260702T161839Z_champollion_p3_sweep`).
3. **Two rings** (Carnot mirror): **Ring-1** = launch-critical spine; **Ring-2** = compressible — converts to accepted-carry at the **ring cut (G3)** if the launch window compresses.
4. **Telemetry contract**: every mission card carries `executor_tier` + `token_budget_estimated`; every session records actuals; every AAR reports estimate-vs-actual **per tier** (>2× drift → ADR-016 retrospective). The corpus is offered to Context.aDNA ([[../../../who/coordination/coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern|staged memo]]).
5. **Rosetta's law**: every mechanism improved, the lesson teaching it improves too (SO-8); every changed content file re-passes dual-audience (SO-7). A fix that isn't teachable isn't finished.
6. **Inviolables** (from the directive §2, binding on every brief): public-boundary discipline · push = operator-gated publication (`git fetch` + `ls-remote` before any push) · never modify `.adna/` (folds ship only via `skill_template_release` at an operator gate) · credentials by NAME via the Home.aDNA broker · brand-lock (*aDNA = network/brand; Lattice Protocol = the standard it runs on*) · SO-2/SO-6 · cross-graph writes staged as coordination memos only · Carnot concurrency clause (seam via `who/coordination/`, never Noether's tree).
7. **Verify-don't-inherit**: validators run per-session; no count/version/pass carried forward on faith (F-CHM-001 is the standing lesson).

## 2. Phase ladder & gates

```
P0 ORIENT ──G0──▶ P1 ADJUDICATE ──G1──▶ P2 STANDARD ──G2──▶ P3 HARVEST ──G3 (ring cut)──▶
P4 FIRST-CONTACT ──G4──▶ P5 LP SEAM ──G5──▶ P6 RC & READINESS ──G6 (release+push)──▶ P7 SHIP & HANDOFF ──G7 (close)
```

| Phase | Focus | Entry | Exit (gate carries) |
|-------|-------|-------|---------------------|
| **P0 ✅** | Orient · verify · charter — **CLOSED; G0 RATIFIED 2026-07-02** (all nine as recommended; record: `how/gates/champollion_p0_gate.output.md`) | directive issued | OoB + ledgers + charter + retro package + this gate (**G0 decisions**: ratify charter · adjudicate backlog dispositions · ADR-045 disposition · v3-EC reconciliation · push decision · release staged memos (Noether/Prometheus) · token-rotation posture · codename). **First post-ratification act**: P1 mission briefs materialized at judgment tier |
| **P1 ✅** | Adjudication & governance integrity — **CLOSED; G1 RATIFIED 2026-07-02** (all four as rec; record: `how/gates/champollion_p1_gate.output.md`) | G0 ratified | Backlog at zero un-dispositioned; ADR-045 record repaired per G0; ratification discipline live; adr_index live (40 rows); currency sweep done; STATE dieted (554 KB → 46.6 KB). **G1 per-tier AAR review PASS**: 5/5 at planned tier · 0 tier-changing escalations · −25% total (160→120 kT) · datapoint #1 emitted. **First post-ratification act**: P2 mission briefs materialized at judgment tier |
| **P2 ✅** | Standard & spec consolidation — **CLOSED; G2 RATIFIED 2026-07-02** (all four as rec + role re-tier directive; record: `how/gates/champollion_p2_gate.output.md`) | G1 | Standard audited v2.4↔v8.3↔ADR corpus (M2.1: F-CHM-201..206 + E1); **ADR-046 RATIFIED (v2.5 · Arm A · C6 defer) → the v2.5 cut EXECUTED** in `what/docs/adna_standard.md` (§7.2 profile · §5.5 walk scope · new §7.7 ratification discipline · §5.3 `federation/` row · §15.4 version-cut checklist); glossary/concepts current (12 fixed + 4 new entries, F-CHM-204 closed). Per-tier: 115→64 kT (−44%), 3/3 at tier; datapoint #2 emitted. **First post-ratification act**: P3 briefs materialized under the G2 role model (fable bookends · opus builds) |
| **P3 ◐** | Pattern harvest & exemplar self-application — **OPEN (briefs live: M3.1–M3.3)** | G2 ✅ | Fleet patterns landed in `what/patterns/`+templates; 10-dimension self-score **exemplary** (first score against v2.5); graduation seeds checked. **G3 = ring cut** (launch-window re-score) |
| **P4** | Docs, site & first-contact UX | G3 | Newcomer Stress-Test of the real first hour **green**; site UX pass done; Ring-1 site backlog executed; learning path walks end-to-end |
| **P5** | LP seam & Exchange story | G3 (parallel-eligible with P4) | Joint base-layer memo countersigned (or pending-with-owner); mutual conformance both directions; Exchange/Lighthouse story teachable end-to-end |
| **P6** | Release candidate & launch readiness | G4+G5 | Template RC assembled + dry-run, **held at G6**; DP4 dossier + Track D terminal assessment delivered; adversarial pass 2 + security re-verify clean. G6 = operator fires `skill_template_release` + push/deploy decisions |
| **P7** | Ship & handoff | G6 fired | Release shipped; `.adna/` sync verified; campaign AAR + splash + handoff packet; telemetry corpus exported; DP4 readiness reported (operator fires DP4). G7 = campaign close |

## 3. Mission corpus (cards materialize at each phase-open with full briefs)

| ID | Mission | Class | Tier | Ring | Est kT |
|----|---------|-------|------|------|--------|
| M0.1 | P0 orient/verify/charter/gate *(this session)* | reconnaissance | fable | 1 | 120–160 |
| M1.1 | Execute ratified backlog dispositions (status flips, defers annotated, declines noted, ACCEPTs filed as missions/ideas) | implementation | opus | 1 | 40 |
| M1.2 | ADR-045 record repair per G0 + ratification-record discipline (template_adr fold draft + `adna_validate` check) + adjudicate stale adr_003/012/027 + wrapper-count reconcile (216 vs 208) | implementation | fable | 1 | 35 |
| M1.3 | Generate `what/decisions/adr_index.md` + decisions AGENTS.md upgrade (from frontmatter; mechanical) | implementation | sonnet | 1 | 15 |
| M1.4 | Currency sweep: version cites ×4 (F-03) · CHANGELOG backfill v6.1→v8.3 (F-05) · reviewer count (F-01) · base-skills split (F-02) · Track-D row de-stale (F-06) | implementation | sonnet | 1 | 30 |
| M1.5 | STATE router diet (F-CHM-004): re-split live/archive, restore true cold-start read | implementation | opus | 1 | 40 |
| M2.1 | Standard currency audit: v2.4 text vs template v8.3 vs ratified ADR corpus; normative-vs-demonstrative separation sweep | verification | opus | 1 | 50 |
| M2.2 | **Version-cut ADR** (v2.4 → v2.5 or v3.0; scope: ADR-044 §7.2/§5.5 fold · ratification-record · placement/ADR-045 · model-tier fields if graduated) — ratifies at G2 | integration | fable | 1 | 30 |
| M2.3 | Glossary/concepts/comparisons currency vs v2.4 | implementation | opus | 2 | 35 |
| M3.1 | Pattern harvest I: LP codepin · Order-of-Battle · STATE-QUEUED banner → patterns + template folds, each with a dual-audience lesson | implementation | opus | 1 | 40 |
| M3.2 | Pattern harvest II: Home credential-broker + shim-registry · Network coord/countersign · ISS gates · campaign-splash; graduation-seed checks (2 skills at 2/3, 1/3) | implementation | opus | 2 | 40 |
| M3.3 | **Exemplar self-application**: 10-dimension compliance self-score → fix to exemplary (the base graph must exemplify what it exports) | verification | opus | 1 | 45 |
| M4.1 | **Newcomer Stress-Test**: the real `git clone aDNA-Network/aDNA && claude` first hour, run honestly end-to-end → fix-list | verification | opus *(fable-bookends; re-tiered at G2 — fable designs the protocol + reviews the friction log into the fix-list)* | 1 | 45 |
| M4.2 | Site UX pass (`skill_site_design_pipeline` + reviewer personas incl. Newcomer/Design-Critic/IA/A11y) + Ring-1 site backlog items per ledger | implementation | opus | 1 | 50 |
| M4.3 | README first-contact pattern + learning path walked beginner→advanced + `who/community/` launch readiness | implementation | opus | 1 | 40 |
| M4.4 | Site content currency vs v2.4/v8.3 + product story (context democracy · Exchange · Lighthouse adoption) | implementation | opus | 2 | 35 |
| M5.1 | Joint base-layer alignment memo: fill skeleton, Noether countersign, formal "context democracy" T1 clearance | integration | opus *(fable-bookends; re-tiered at G2 — fable sets positions/asks + reviews before staging; cross-graph = outward-facing)* | 1 | 30 |
| M5.2 | Mutual conformance: LP vault vs standard (their close-out ask) ↔ this vault's lattice/module/dataset teaching vs LP spec @ codepin `47935b6` | verification | opus | 1 | 45 |
| M5.3 | Exchange/Lighthouse adoption story teachable end-to-end (tutorial + use_case: *pull → build-to-spec → memorialize*) | implementation | opus | 2 | 40 |
| M6.1 | Template **release candidate**: batch gate-ratified folds → `skill_template_release` dry-run → RC **held at G6** | integration | opus *(fable-bookends; re-tiered at G2 — fable decides RC composition; opus assembles + dry-runs)* | 1 | 45 |
| M6.2 | **DP4 dossier + Track D terminal assessment** (Rosetta-owned; Venus check-in memo; dossier at `campaign_operation_adna/dp4_dossier.md`) | verification | opus | 1 | 35 |
| M6.3 | Adversarial pass 2 (newcomer/forker/standards-lawyer vs released surfaces) + security re-verify (gitleaks · sanitizer posture · token-rotation confirmation) | verification | fable *(stays fable-led at G2 — its substance IS adversarial review, the operator's "reviewer" role)* | 1 | 35 |
| M7.1 | Ship: operator-fired release + `.adna/` sync verify + site deploy if needed | implementation | opus | 1 | 30 |
| M7.2 | Campaign close: AAR + splash + handoff packet (watch items · deferred ledger · next-release triggers) + telemetry corpus export + DP4 readiness report | closeout | fable *(stays fable-led at G2 — closeout synthesis/AAR = review/strategy)* | 1 | 30 |

*24 missions total. **Declared session pairings** (one session may run both): M1.3+M1.4 (sonnet mechanical pair) · M1.1+M1.3 fallback · M7.1+M7.2 — hence Ring-1 ≈ 15–18 sessions for 20 Ring-1 missions. Pairings dissolve if either member's budget runs hot (ADR-016).*

*Tier column after the **G2 re-tier** (operator role directive, 2026-07-02): `executor_tier` = the **build** tier; every mission additionally carries **fable bookends** (fable brief → fable verify-before-dispatch → build → fable independent review), so an "opus" row means opus builds under fable review, and the two fable rows (M6.3, M7.2) are review/closeout-substance missions where fable IS the executor. Estimates for verification-class rows are subject to the G2 D4 class-split calibration (budget the judgment surface, not the corpus).*

## 4. Coverage matrix (directive §6.A–J → missions)

| Dim | Coverage | Dim | Coverage |
|-----|----------|-----|----------|
| A standard/spec | M2.1–M2.3 | F docs/learning | M4.3 (+M4.1) |
| B template/release | M6.1, M7.1 (+M4.1 install story) | G hygiene/tokens | M1.4, M1.5 + per-session validator standing |
| C backlog/governance | M1.1–M1.4 | H LP seam | M5.1–M5.3 |
| D pattern harvest *(heart)* | M3.1–M3.3 (+the pattern already landed at P0) | I security/boundary | M6.3 (+M1.2 sanitizer adjudication; token rotation = G0 item) |
| E website/UX | M4.2, M4.4 | J community/launch/DP4 | M6.2, M7.2, M4.3 |

No dimension excluded.

## 5. Reconciliation proposal (G0 decision) — `campaign_adna_v3_ecosystem_compliance`

The seeded successor (status `planned`, 2026-05-08) targets a **19-vault fleet compliance pass on the v7.0 checklist** — stale by two template generations and post-launch by nature. Options:
1. **Supersede-and-absorb (recommended)** — Champollion absorbs the this-vault/template-readiness slice (M3.3 self-score, M6.1 RC); v3-EC → `status: superseded` with a pointer; a **fleet compliance pass re-seeds post-launch** on the v2.5/v8.4+ baseline (owner: Rosetta + Hestia, trigger: Champollion P7 close).
2. Full absorb — pull the 19-vault audit into Champollion Ring-2 (rejected by default: blows the launch window, R3/R4).
3. Keep alive gated — leave `planned` untouched (rejected: two overlapping successors violates the directive's own instruction).

## 6. Definition of Done (directive §8, verbatim discipline)

1. STR closed ✅ (pre-discharged) · v3-EC absorbed per G0 · **DP4 dossier delivered** (+ Track D terminal assessment; operator fires DP4).
2. Backlog **zero un-dispositioned**; governance retro adjudicated; ratification discipline in force; acks landed or pending-with-owner.
3. Version cut ratified; RC shipped **only** through operator-gated `skill_template_release`; `.adna/` sync verified; validator full pass, zero drift.
4. Site UX pass done; Newcomer first-hour **green**; site backlog dispositioned; live checks green.
5. Joint memo countersigned (or pending-with-owner); Exchange story teachable end-to-end; zero public-boundary violations.
6. Pattern library published; self-score exemplary; *"build like the base graphs"* answer live.
7. Token rotated (operator-confirmed); leak-class mitigation in place; secret scan clean.
8. STATE dieted + current; CHANGELOG current; AARs complete; close with AAR + splash + handoff packet.

## 7. Reporting

Session files + SITREP + Next Session Prompt every session (§9); STATE §Current Phase rewritten at every stop; findings → [[artifacts/findings_ledger|F-CHM-*]]; risks re-scored at gates ([[artifacts/risk_register|register]]); campaign splash at open (G0) and close (G7); estimate-vs-actual per tier in every AAR.

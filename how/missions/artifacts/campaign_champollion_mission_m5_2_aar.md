---
type: aar
artifact_id: campaign_champollion_mission_m5_2_aar
title: "AAR — Champollion M5.2 (bilateral conformance + pin-follow)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m5_2_mutual_conformance
executor_tier: opus
token_budget_estimated: "45 kT"
token_budget_actual: "~87 kT (opus builder ~78 self-reported + fable bookends ~9) — +93%, 1.93×"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [aar, champollion, p5, m5_2, conformance, codepin, pin_follow, lp_seam, mode_b]
---

# AAR — Mission M5.2: Mutual conformance, both directions

**Session**: `session_stanley_20260702T224717Z_champollion_p5_sweep` · **Executor: opus subagent** at-tier, **fable-orchestrated** (Mode B) · verification-class · Ring 1.

## Five lines

- **Worked**: the **layer-attribution analysis** — the builder resolved every apparent LP-spec-vs-teaching contradiction as a *correctly-attributed layer difference* (aDNA authoring format ↔ LP marketplace packaging) instead of manufacturing findings; the biggest finding was honestly **ours** (A-6/F-CHM-215: `adna_validate.py` hardcodes the reference vault's nested-instance exclusions → hundreds of false positives on the standard's own code-as-WHAT pilot); the offering memo leads with it ("the one to read first — it's ours, not yours"). Pin-follow evidence was airtight (empty spec diff) → **FOLLOWED to `8cb6e1e`** at review, closing the M5.1-recorded gap by the exact deliberate act `pattern_cross_graph_codepin` teaches — a complete worked cycle of the mechanism, now recorded in the pattern.
- **Didn't**: budget — ~87 vs 45 (**+93%, 1.93×** — inside the ADR-016 band by a hair; the builder also passed its ~60 halt line without halting mid-flight, flagging only at completion); the builder referenced ledger rows **F-CHM-214/215 it never filed** (manifest-vs-filesystem, third instance this campaign — filed at review); a **concurrent Carnot R1 session** was live in the LP tree mid-check (verified not-ours; read-only held, but the node now routinely runs 5+ agents).
- **Finding** (marquee): **cross-graph missions price the foreign-corpus read surface** — both P5 missions so far overran on evidence-reads, not judgment or scope (M5.1 +77% integration, M5.2 +93% verification). The G2 class-split calibration held for *in-vault* verification (M3.3 +3%) and breaks for *cross-graph* verification: the LP validator census + ledger spec were the cost. Calibration rule for P6+: **add a foreign-corpus read allowance when the mission's evidence lives in another graph.**
- **Change**: pin-follow executed (pattern instance notes + M5.1 memo §2 back-fill); M5.1 memo §5 pointer back-filled (conformance artifact + offering memo); F-CHM-214 (readiness-list mismatch → harmonization) + F-CHM-215 (validator nested-instance gap → G5-input GI-1, fix rides the M6.1 checker unit) filed.
- **Follow-up**: **GI-1 + GI-2 ride G5-D4** (operator rules: standard-marker-vs-tool-generalization; Topology↔Lattice seam note yes/no); the offering memo releases at the G5 push; subagent halt-line enforcement is weak (no mid-flight token introspection) → M7.x retro note alongside the twin-builder item.

## Estimate vs actual

45 → ~87 (+93%). The judgment surface stayed lean (characterize-by-class; the 149-line validator census was never enumerated into the artifact) — the overrun was tool-output volume + foreign spec reads. Cross-graph calibration note emitted for datapoint #5 and the P6 briefs. No ADR-016 retrospective (< 2×), but this is the campaign's closest approach.

## Evidence chain

[[../../campaigns/campaign_champollion/artifacts/conformance_bilateral|conformance_bilateral]] (§1 method/pin · §2 dir-a · §3 dir-b + layer-attribution · §4 pin-follow · §5 dispositions + GI-1/GI-2) · `who/coordination/coord_2026_07_02_rosetta_to_noether_conformance_findings.md` (staged) · [[../../campaigns/campaign_champollion/artifacts/findings_ledger|findings_ledger]] F-CHM-214/215 · `what/patterns/pattern_cross_graph_codepin.md` (follow recorded) · fable re-verification: A-2 by direct ls · A-6 by direct code read · example count by semantic ls (19) · spec-diff independently zero · LP tree read-only proof.

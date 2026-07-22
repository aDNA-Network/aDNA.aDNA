---
type: ratification_record
title: "Ratification Ceremony — Refit G1 (charter + DP1–DP8)"
status: accepted   # SIGNED 2026-07-21 — operator ratified charter + all 8 DPs per recommendation across two AskUserQuestion lanes (in-session), election = "Ratify + fire quick wins"
gate: "Refit G1 (P0 → P1)"
ratifier: "Stanley, Founding Architect"
ratified_date: 2026-07-21
ratifying_session: session_stanley_20260721_192321_refit_charter
ratifying_commit: "the 'Refit G1 SIGNED' commit landing this record + the charter flip (2026-07-21; see git log)"
created: 2026-07-21
updated: 2026-07-21
last_edited_by: agent_rosetta
tags: [ratification_record, decision, ceremony, refit, g1]
---

# Ratification Ceremony — Refit G1

> Entry Point B (ceremony record) per [[template_ratification_record]], adapted to a **DP roster** (decision
> points, not ADRs — the campaign ships no ADR at G1). Agent-authored at `proposed`; **only the named operator
> advances any row — and the charter — to accepted/active** (§7.7).

## 1. Ceremony header

| Field | Value |
|-------|-------|
| **Gate** | Refit G1 — ratifies the [[campaign_refit]] charter (`proposed → active`) + DP1–DP8 |
| **Ratifier** | Stanley, Founding Architect (agent Rosetta = author/steward, never ratifier) |
| **Gate / reference** | AskUserQuestion lanes in `session_stanley_20260721_192321_refit_charter` + approved plan `please-read-the-claude-md-zazzy-pebble.md`; ratifying commit recorded on sign |
| **Ratification date** | **2026-07-21** (in-session, same day as charter — beats the 07-24 target; hard constraint 8 satisfied) |
| **Scope of authority** | The Refit charter + these 8 DPs only. DP9 (vNext split) ratifies at G2; DP10 (close/push) at G3. No normative standard/governance surface is authorized by this ceremony. |

## 2. DP roster (dependency order)

| # | DP | Decision | Recommendation (author) | Ruling (operator, 2026-07-21) |
|---|----|----------|-------------------------|-------------------|
| 1 | DP2 | B1 `task`-entity one-liner to Operations (due 07-31) | "Candidate for the **v2.6 standard window** (evaluated in M5's G2-ratified roadmap); **NOT in motion for v8.9** or any near-term governance batch — re-card M44." Transmit ≤07-24 | **ACCEPTED as recommended** (lane 1 Q2) |
| 2 | DP3 | ADR-022 row | Re-affirm the existing 2026-07-03 co-sign; re-deliver the pointer (bundled with the B1 memo) | **ACCEPTED** (bundled with DP2 ruling) |
| 3 | DP1 | Registry canonical field + backfill authorization | **`card.tagline` canonical** (wired; `note` fallback stays); retire/alias `headline_mission` in prose; authorize Home: ~46-card backfill + 3 stale-card cleanup + zeta note | **ACCEPTED as recommended** (lane 1 Q3) |
| 4 | DP4 | `/org-context-graphs` | **Retire** (redirect → `/vaults`, remove page) + dated reconciliation annotation beside the Storyweave claim | **ACCEPTED as recommended** (lane 1 Q4) |
| 5 | DP5 | Evidence-artifact policy | **Three classes**: cited-slim committed · bulk-regenerable ignored + committed synthesis · external/scratch ignored (precedent `1616ae4`) | **ACCEPTED as recommended** (lane 2 Q3) |
| 6 | DP6 | D-DP2 six-item worklist (+§2.7 rider) | **Adopt 1, 2, 3, 6 · adopt-4-as-consolidation · amend 5** (doctrine-§8 promotion; standalone pattern → M5). **Rider**: ratify our own `pattern_model_tiered` §2.7 (proposed since 07-14) at this same gate | **ACCEPTED as recommended, rider included** (lane 2 Q1) |
| 7 | DP7 | Launch-acceptance-contract | **Adopt** as `what/patterns/pattern_launch_acceptance_contract.md`; request Berthier's A#-row instance seed | **ACCEPTED — adopt** (lane 2 Q2) |
| 8 | DP8 | Dev-readiness scope | **E1 in scope; E2 stretch-only** (first cut on overrun) | **ACCEPTED as recommended** (lane 2 Q4) |

> **Charter ruling (lane 1 Q1): "Ratify + fire quick wins"** — charter `proposed → active`; M2 data currency +
> the B1 memo finalization (M1 objective 1) execute in the chartering session; remaining missions in fresh
> sessions.

## 3. No-contradiction invariants discovered

- DP2 and M5 must agree: the outbound one-liner fixes the task-entity fact the roadmap later carries — the
  roadmap may *refine* ("v2.6 candidate → v2.6 committed/declined") but never contradict the transmitted
  answer without a follow-up memo.
- DP5 and D6 interact: the hermes PNGs M3 captures land in a directory DP5 classifies — class before commit.

## 4. Constitutional carry-forward

- On sign: charter `proposed → active`; M1/M2 authorized immediately (M1 first — deadline); M3/M4 authorized;
  M5 authorized with its output G2-gated; M6 authorized per DP8.
- Everything adopted at DP6/DP7 lands **dev-vault-side only**; template propagation waits for the successor
  release campaign (hard constraint 3/5).
- If this ceremony has not signed by 07-24: the operator may sign **row 1 (DP2) alone** as a micro-ratification;
  M1 objective 1 then fires standalone (hard constraint 8).

## 5. Persona ratification status

- Rosetta — survives; the campaign is squarely the persona's mandate (the standard's own truth + teaching
  surfaces). No falsification event at charter.

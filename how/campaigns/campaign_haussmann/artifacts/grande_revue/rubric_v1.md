---
type: artifact
artifact_id: grande_revue_rubric_v1
campaign: campaign_haussmann
operation: operation_grande_revue
title: "GRANDE REVUE Phase 1 rubric v1 — the order's §4 ten dimensions, RECONSTRUCTED from recorded traces"
created: 2026-08-28
updated: 2026-08-28
status: accepted          # ⛩ OPERATOR-SIGNED 2026-08-28 — this IS Phase 1's scoring instrument. ~~proposed~~ (struck, not deleted — SO-6)
last_edited_by: agent_rosetta
session: session_stanley_20260828_135704_haussmann_grande_revue_p1
tags: [artifact, grande_revue, rubric, phase_1, instrument, reconstruction]
---

# GRANDE REVUE Phase 1 — the ten-dimension rubric (v1, reconstructed)

## ⛔ Provenance — read before trusting a single row

**The chief-of-staff order's §4 text was never committed to the vault** — it existed in the
commissioning conversation only. This instrument is a **reconstruction**, ruled at the Phase 1 open
(⛩ 2026-08-28, taken with the Gate 0 GO): *reconstruct from recorded traces, state the
reconstruction on the instrument's face, operator signs before any scoring.*

What the traces preserve verbatim `[D]`:
- **"10 dimensions, P0–P3 ranked, evidence-cited"** and the full **instrument mapping** — Phase 0
  plan (`~/.claude/plans/order-operation-crispy-sprout.md`, Roadmap §Phase 1).
- **Dimension 10 = campaign health**, "against the campaign graph" — same source + the P0 session's
  Next Session Prompt.
- Scope: **"top-level surfaces + deep-page sample + campaign graph"** — P0 session record.
- New-scope probes: the four **capability stories** (token economics · convergence/campaign
  optimization · local models · model routing) and the **Lattice "movement 3"** story with candor
  framing (*runs now / being built / planned*) — situation report §4.

What is reconstructed `[I]`: **the names and boundaries of dimensions 1–9**, derived one-per-recorded-
instrument (the order mapped instruments to dimensions; the instruments survived even where the
dimension names did not). A signature on this file adopts the reconstruction as the instrument —
if the operator recalls the original §4 differently, this file is amended before scoring, not after.

## Scoring model

- Findings, not grades: each dimension yields **findings ranked P0–P3**, each with a provenance tag
  (`[D]`/`[I]`/`[R]`/`[A]`/`[D-syn]`) and a path or live URL. No pooled averages (P4.1's rule:
  surfaces score separately, never pooled).
- **P0** = falsehood or breakage a visitor/agent hits now · **P1** = materially misleading or
  blocking-adjacent · **P2** = real defect, bounded blast radius · **P3** = polish / opportunity.
- Where a dimension overlaps VITRUVIUS (D1–D12), Phase 1 **cites** existing scored evidence
  (P2.6, P4.1 ranker, P4.3) rather than re-deriving — this is **not** a VITRUVIUS scoring event;
  P5.2 remains the third event (Phase 0 ruling).
- Every count derived, never typed (KW-14). Every absence assertion names its surface, matched to
  the claim's own verb (convention 17 + its 08-26 amendment).

## The ten dimensions

| # | Dimension | Question it asks | Primary instrument (all pre-existing) |
|---|---|---|---|
| 1 | **Visual quality & design coherence** | Does every surface hold the campaign-protected visual standard, in BOTH themes? | T0 `scripts/visual_capture.mjs`, dark+light, 6 canonical viewports |
| 2 | **Accessibility** | Does the rendered site hold the axe-0 record and the published `/accessibility` statement's own claims? | `--axe` pass ×2 (themes[0] per run) + cited P4.3 evidence; no re-run of human-gated items |
| 3 | **Technical integrity** | Valid HTML, unbroken internal links, clean console, working redirects/headers on the built artifact? | html-validate · link sweep over `dist/` · gate evidence |
| 4 | **Claim honesty** | Is every load-bearing sentence still true, derived, and candor-framed (empty states, zero counts, agent disclosure)? | claim register + rendered-output greps (convention 7) |
| 5 | **Data & registry coherence** | Do the registry surfaces (`/vaults`, `/vaults.json`, `/api/registry.v1.json`, graph + twins) agree with each other and with owner-attested reality? | registry-vs-rendered reconciliation via `network_state.ts`; WorldGenome row-correction memo folded as evidence; corrections staged to Hestia, never edited here |
| 6 | **Newcomer journey** | Can a cold visitor get from `/` to a first success without hitting a wall the site doesn't name? | quickstart run-through trace (agent-run, `[D-syn]`, disclosed — NOT P2.6 O0b's human run) |
| 7 | **Reader experience across audiences** | Does each first-contact surface serve its distinct reader without betraying the others? | five-reader traces, one per profile, `[D-syn]` disclosed synthetic pre-screens — never a substitute for P5.1's human panel |
| 8 | **Machine-agent experience** | Do the machine surfaces (`/llms.txt`, `.md` twins, machine-door, API, build stamp) serve an agent as well as the pages serve a human? | machine-eye-style probes; twin-vs-HTML checked per the surface-matches-verb rule |
| 9 | **Story coverage** (new scope the order adds) | Do the four capability stories and the Lattice "movement 3" story have verified homes, candor-framed (*runs now / being built / planned*)? | content search + coherence check; absence is a finding with a proposed home, not a page authored in-phase |
| 10 | **Campaign health** | Does the campaign graph hold its own standard — statuses truthful, budgets reconciled, debt routed, deferrals gated, inbound queue current? | campaign graph read: mission `status:` fields, SO#11 actuals, debt register live rows, coordination queue |

## Scope

- **Top-level surfaces** (the primary-nav 7 + `/`): dimensions 1–9 in full.
- **Deep-page sample**: ≥ 8 routes drawn across route families (learn/concepts · tutorials ·
  reference · vaults · patterns · how · community · changelog), sampled where instruments point,
  not where comfort points.
- **Campaign graph**: dimension 10.

## What Phase 1 does NOT do (on the instrument's face)

No `site/src` fix, no `site/public/**`, no push, no deploy, no registry-data edit (pt19), no P4.4b
increment, no P5.1 act, no VITRUVIUS re-score, no visual-lane (gate-49) run outside its container.
Findings route to the Gate 1 battle plan; fixes are Phase 3's, each under its own ratified plan.

## ⛩ Ratification record (§7.7)

| Field | Value |
|---|---|
| **Decision** | Adopt this reconstructed ten-dimension rubric as Grande Revue Phase 1's scoring instrument, dimensions 1–9 as reconstructed, dimension 10 as recorded. |
| **Ratified by** | Operator (Stanley), at the Phase 1 in-session gate |
| **Date** | 2026-08-28 |
| **Status** | `accepted` — Phase 1 scores against this instrument, dimensions 1–9 as reconstructed, dimension 10 as recorded |

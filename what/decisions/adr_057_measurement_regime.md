---
type: adr
adr_number: "057"
title: "The HAUSSMANN measurement regime: four instruments, composed — plus the same-diff gate law"
status: proposed
created: 2026-08-16
updated: 2026-08-16
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, measurement, gates, verification]
---

# ADR-057 — Measurement regime (stub)

## Status

**Proposed** — the regime the campaign runs throughout; ratified with the charter at Gate C (DP1), refined only by operator amendment.

## Context

Four measurement systems now coexist and must compose, not compete: the **371-test gate suite** (regression floor), the **persona-ranker** (quality bar), **VITRUVIUS** (campaign outcome instrument, baseline 51.6 reconciled), and the **III cycle series** (the vault's longitudinal record, at cycle 165). Phase B also proved two systemic risks: hardcoded routes shatter under IA change, and live production drifts from config unwatched.

## Decision (proposed regime)

1. **Altitude assignment**: gates = every build/deploy (floor; grows by P0.5 editorial + P1.4 reflow + P2.3 links + P4.4 visual/headers/budgets) · ranker ≥4.0 per redesigned surface, capstone ≥4.95 at P5.2 · VITRUVIUS at three events (baseline ✓ · P2.6 mid · P5.2 full-with-humans), always two isolated scorers + reconciliation, composite never reported without its breakdown · III cycles: every measurement event logs to `what/measurement/iii_results/` continuing at cycle 166.
2. **The same-diff gate law**: any commit changing a route, slug, or rendered count updates every gate/audit/fixture that hardcodes it **in the same commit**. Fixtures derive from build snapshots, never pin live-data literals (WebForge KW-8/FR-K inherited).
3. **Cadences**: claim register re-verified monthly + at every phase gate · internal links every CI run, external weekly · TTFS on every quickstart-touching change · field CWV continuously once P4.4 lands · full instrument re-run every 2 quarters post-launch.
4. **Honesty instrumentation**: community activity tracked as a health signal, **never displayed as a vanity metric** (directive §5.C.4); every check red-tested at birth ("a green that cannot go red is not evidence").

## Consequences

The defect classes this campaign found by hand (claim drift, leak regressions, pixel breaks, header drift, link rot) each get a standing machine watcher; scores stay comparable across the campaign's three events.

## Ratification

- **Decision:** _the regime above_ · **Ratified-by:** _pending — Stanley (operator)_ · **Gate:** Gate C (DP1, with the charter) · **Date:** _pending_ · **Status:** **proposed**.

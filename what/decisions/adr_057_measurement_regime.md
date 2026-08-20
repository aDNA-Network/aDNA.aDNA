---
type: adr
adr_number: "057"
title: "The HAUSSMANN measurement regime: four instruments, composed — plus the same-diff gate law"
status: accepted   # ⛩ ⊳ D-B at DP6 2026-08-19 confirmed the Gate C signature of 2026-08-16 covered this ADR; `proposed` was a clerical omission, not a withheld decision
created: 2026-08-16
updated: 2026-08-19
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
supersedes: ""
superseded_by: ""
tags: [adr, haussmann, measurement, gates, verification]
---

# ADR-057 — Measurement regime

## Status

> **Ratification (§7.7).** **Decision:** adopt the HAUSSMANN measurement regime — four composed
> instruments (gate suite · persona-ranker · VITRUVIUS · claim register) with the altitude assignments,
> the **same-diff gate law**, and the cadences below. · **Ratified-by:** Stanley, Founding Architect
> (operator). · **Date:** **2026-08-16**, at **Gate C / DP1**, as part of the charter — the §7.7 charter
> block reads *"the ADR-057 measurement regime adopted with the charter."* · **Status:** **accepted**.

**Accepted** — the regime the campaign runs throughout; refined only by operator amendment.

> **Why this field said `proposed` until 2026-08-19, and what that cost.** The frontmatter read
> `status: proposed` for three days while this same section asserted the ADR was *"ratified with the
> charter at Gate C"* and the operator-signed charter §7.7 said *"adopted with the charter."* Three
> statements, one of them contradicting the other two. The P2.6 re-score caught it, ⊳ **D-B** at ⛩ DP6
> ruled that the **Gate C signature did cover it**, and the field is corrected here.
>
> **The Date above is 2026-08-16 — the decision — not 2026-08-19, the correction.** Backdating the act
> while dating the correction separately is the only way both facts stay true. And this is worth more
> than a clerical footnote: **the campaign was measuring itself under a regime whose own status field
> denied it had been accepted.** An instrument that cannot vouch for its own authority is exactly the
> failure class this ADR exists to prevent — which is why the discrepancy became an operator decision
> rather than a silent field edit.

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

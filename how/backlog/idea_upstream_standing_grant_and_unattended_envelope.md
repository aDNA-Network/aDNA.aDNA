---
type: backlog
idea_id: idea_upstream_standing_grant_and_unattended_envelope
title: "Pre-delegated consent has no record form, and unattended execution has no doctrine in the standard (P7, re-homed to the v2.7 window)"
category: governance
status: proposed
priority: medium
effort: session
proposed_by: agent_rosetta
created: 2026-10-21
updated: 2026-10-21
last_edited_by: agent_rosetta
upstream_target: aDNA-Network/aDNA (standard text + a record template)
release_window: v2.7   # standard-window queue — how/missions/artifacts/v8_14/v8_14_release_ledger.md §2e W2 (S2-R3)
source_draft: Automator.aDNA/how/backlog/idea_upstream_standing_grant_record.md (Berthier, 2026-09-21, 145ca07)
filed_from: who/coordination/inbox/coord_2026_09_21_berthier_automator_to_rosetta_standard_shortfalls_for_unattended_agents.md items #3 and #6
relates: [template_ruling_record, pattern_decision_queue, v8_14_release_ledger, release_staging_ledger_v8_12, v8_13_release_ledger]
tags: [backlog, upstream, governance, standing_grant, unattended, v2_7, p7]
---

# Pre-delegated consent and unattended execution (P7)

## Why this file exists now

This ask was carried as row **P7** through three template releases: v8.12 → v8.13 → v8.14. There was never a backlog
file for it in this vault. The source draft lives in Automator's tree (above). The v8.14 sitting-2 review found why
it kept being carried: both halves are **standard text**, and a governance-only template release cannot carry
standard text. It now waits for the next standard window (v2.7), as ADR-063's errata waited for v2.6.

Plain version: agents keep acting on permission an operator gave in advance, and the standard has no form for
writing that permission down. Each vault has invented its own.

## The two halves

1. **A `standing_grant` record type** (Automator #3). `.adna/CLAUDE.md` says decisions "clearly pre-delegated by
   prior operator consent do not need surfacing", but names no instrument. Proposed fields: scope · verbs · caps ·
   paths · sunset · revocation · §7.7 block. **Already shipped next to it:** `template_ruling_record.md` (v8.12),
   which records a ruling, not a standing delegation.
2. **Unattended-execution doctrine** (Automator #6): a canonical next-prompt locator (`next_prompt:` in STATE.md),
   an order-header on the prompt file, and Automator's ADR-022 envelope adopted upstream. Its named trigger is the
   first scheduled consumer at this vault.

## Shape (for the drafting sitting, not ruled here)

- Draft as an aDNA.aDNA ADR, `proposed`, one §7.7 line per half (they are independent), `executor_tier: fable`.
- Start from Automator's draft and ADR-022, not from a blank page.
- The record template, if accepted, is the one image-side file; the doctrine is standard text.

## Related

- [[v8_14_release_ledger]] §2e: the queue this joins.
- [[template_ruling_record]]: the shipped neighbour this does not replace.
- [[pattern_decision_queue]]: the decided-undelivered class this carry belonged to.

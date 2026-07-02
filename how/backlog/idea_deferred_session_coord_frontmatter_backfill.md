---
type: backlog_idea
idea_id: idea_deferred_session_coord_frontmatter_backfill
title: "Deferred: backfill non-status base-6 fields into historical session records + coord memos"
category: governance
status: completed
priority: low
effort: small  # mechanical, but ~150 closed/correspondence files — schedule deliberately
proposed_by: agent_stanley
proposed_date: 2026-06-30
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, governance, conformance, frontmatter, sessions, coordination, deferred]
created: 2026-06-30
---

# Deferred — session + coord historical frontmatter backfill

> **✅ RESOLVED 2026-06-30** (session `session_stanley_20260630T175228Z_frontmatter_backfill`). Add-only field-precise backfill applied to 148 drifted records (115 session + 30 coord + 3 bad-YAML repaired by quoting). **`adna_validate` 293 → 0 — "Full conformance, all checks pass" (exit 0); `--governance` Zero drift.** This completes the conformance arc opened by [[how/missions/mission_frontmatter_conformance|mission_frontmatter_conformance]]. Body bytes untouched on every file; created/updated git-/field-derived; inbound coord `from:`/`author:` provenance preserved (only `last_edited_by` reflects the backfill editor).

> Tracked deferral from [[how/missions/mission_frontmatter_conformance|mission_frontmatter_conformance]] (operator decision, 2026-06-30). Companion: [[what/decisions/adr_044_per_class_frontmatter_profiles|ADR-044]] (the `status`-profile half, which is NOT this — this is the other base fields).

## What's left

After the frontmatter-conformance pass, `adna_validate` residual = **293 frontmatter errors**, all in two classes:

- **117 historical session records** (`how/sessions/history/**`) — 220 error lines, missing some of `created/updated/last_edited_by/tags` (older sessions used `started/completed/agent`; the session template DOES specify the base-6, so this is genuine drift).
- **~36 coord memos** (`who/coordination/**`) — 73 error lines, missing some of `created/updated/last_edited_by/tags` (the coord template specifies these; only `status` is exempt, per [[what/decisions/adr_044_per_class_frontmatter_profiles|ADR-044]]).

These are **drift from their own templates**, not a spec question — so the fix is a backfill, not an ADR. It was deferred because stamping `last_edited_by`/`updated`/`tags` onto ~150 closed sessions + others' inbound correspondence is audit-trail churn that should be done deliberately, not bundled into the unambiguous content pass.

## Approach when picked up

- Reuse the field-precise, idempotent, git-date-derived backfill pattern from `mission_frontmatter_conformance` (`/tmp/backfill_fm.py` logic): add only the missing base fields; preserve all existing content; `created`/`updated` from `git log`; `last_edited_by` = preserve existing `author`/`agent` else `agent_stanley`.
- For inbound coord memos authored by other personas/vaults, prefer preserving the original `author`/`from` provenance; `last_edited_by` reflects the backfill edit.
- Consider, instead, reconciling the **session/coord templates' history** is unnecessary — the templates already specify base-6; only the back-catalogue drifted.
- Target: `adna_validate` → PASS (0 errors) at Starter once this + ADR-044 land.

## Why low priority

Pure metadata hygiene on closed records; no functional impact. The live/unambiguous content is already conformant (in-scope residual = 0 as of 2026-06-30).


## Champollion G0 disposition — D (M1.1, 2026-07-02)

**ALREADY-DISCHARGED.** Evidence: RESOLVED 2026-06-30 — 148 records backfilled; adna_validate 293->0 (exit 0). Status set to `completed`; ratified at Champollion G0 (D2).

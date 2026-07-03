---
type: session
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [session, v8_5, release_cut_hygiene, skill_template_release, prep]
session_id: session_stanley_20260703T214820Z_v8_5_release_cut_hygiene_prep
user: stanley
started: 2026-07-03T21:48:20Z
status: completed
intent: "Prep the v8.5 release-cut hygiene patch (F-CHM-216 + F-CHM-217 + doc-currency paper-cuts) as a held release-prep package for the operator to fire at the next skill_template_release. Prep-only; no push, no release."
files_modified:
  - how/templates/template_home_claude.md
files_created:
  - how/missions/mission_v8_5_release_cut_hygiene.md
  - how/sessions/history/2026-07/session_stanley_20260703T214820Z_v8_5_release_cut_hygiene_prep.md
completed: 2026-07-03
---

## Activity Log

- 21:48 — Session started (operator: "make your recommendation" → approved plan = prep the v8.5
  release-cut hygiene patch). Recon: read `skill_template_release.md` (dev graph = source of truth;
  `.adna/README.md` is a release-tree artifact + embed-note transform) + `f1_catchup_release_prep.md`
  (the prep-package template). Verified the actual defect surfaces.
- 21:5x — **Key findings that reshaped scope:** (1) only ONE clickable `aDNA.aDNA/` link ships
  (`template_home_claude.md:267`) — the "~32 prose refs" are correct cross-vault routing prose, not
  leaks. (2) The 6 other dead ADR links resolve in-dev but 404 on ship (only ADRs 001–003 ship) → a
  ship-cut DECISION (ship the 4 cited ADRs vs de-link-on-ship), not a source bug. (3) dev-graph vs
  shipped `.adna/` have DIVERGED (AGENTS.md reads v2.3 in dev, v2.1 in ship) → authoritative fixes are
  deltas against the shipped surface, not speculative dev-graph edits.
- 21:5x — Applied the one unambiguous SOURCE fix now: de-linked the broken `aDNA.aDNA/`-prefixed
  ADR-035 link at `how/templates/template_home_claude.md:267`. Authored the held prep package
  `how/missions/mission_v8_5_release_cut_hygiene.md` specifying every remaining delta.

## SITREP

**Completed**: v8.5 release-cut hygiene patch PREPPED + HELD. One source de-link applied
(`template_home_claude.md:267`). Prep package `mission_v8_5_release_cut_hygiene.md` enumerates all
deltas (F-CHM-216 README one-step rewrite · F-CHM-217 leak sweep · doc-currency), the D-1 ship-cut ADR
decision, skill_template_release params, smoke + rollback.
**In progress**: none.
**Next up**: OPERATOR GATE — fire `skill_template_release` (version v8.5) when ready; resolve D-1
(ship 4 ADRs [recommended] vs de-link-on-ship) at fire.
**Blockers**: none. Release is operator-gated by doctrine (Standing Order #1), not blocked.
**Files touched**: `how/templates/template_home_claude.md` (source de-link) · NEW
`how/missions/mission_v8_5_release_cut_hygiene.md` (held prep package) · this session.

## Next Session Prompt

The v8.5 "release-cut hygiene" patch is prepped and HELD at
`how/missions/mission_v8_5_release_cut_hygiene.md` — a f1_catchup-style release-prep package covering
the two Champollion post-ship majors (F-CHM-216 dead inner-README install flow · F-CHM-217 release-cut
leak) plus doc-currency paper-cuts. One source fix is already applied + committed local
(`template_home_claude.md:267` de-link). To ship: the operator fires `skill_template_release`
(version v8.5) and resolves decision D-1 (ship the 4 cited ADRs [recommended] vs de-link-on-ship). The
v8.4 tag is immutable; all of this routes to v8.5. Nothing is pushed — the release is the operator's
gate. If not shipping now, the package holds indefinitely with no decay (the deltas are pinned to
specific surfaces + lines).

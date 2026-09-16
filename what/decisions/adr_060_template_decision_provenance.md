---
type: adr
adr_number: "060"
title: "Template-shipped decisions: ratify at template altitude, provenance-stamp at fork"
status: proposed        # §7.7 — awaits operator ratification; drafted from Hestia's 2026-09-15 finding
created: 2026-09-16
updated: 2026-09-16
last_edited_by: agent_rosetta
campaign_id: ""
mission_id: ""
supersedes: ""
superseded_by: ""
probe_date: 2026-09-16
tags: [adr, template, fork, provenance, adr_003, census, upstream]
---

# ADR-060 — Template-shipped decisions: ratify at template altitude, provenance-stamp at fork

## Status

**Proposed.** Drafted at the 2026-09-16 gate-advisory sitting from Hestia's delivered finding
(`who/coordination/inbox/coord_2026_09_15_hestia_to_rosetta_adr_003_ships_proposed_and_31_forks_inherited_it.md`).
Nothing changes anywhere until ratified; the `.adna/` edit additionally waits for the next
template release gate (Standing Rule 1 — `.adna/` moves only via `skill_template_release`).

## The measured problem (Hestia's, re-stated not re-measured)

The template ships `what/decisions/adr_003_system_configuration_as_context_topic.md` at
`status: proposed`, and `skill_project_fork` copies `what/decisions/` content into every fork.
Result, measured 2026-09-15: **26 real vaults carry a byte-identical `proposed` ADR** none of
their operators authored, so a naive fleet census of open ADR gates returns 60 where the
honest number is ~34. The copies can never self-resolve — no fork's operator can ratify a
decision made in the template by another agent in March — so the census stays unreadable
forever, silently.

## Decision (two parts, one ratification)

1. **The template's own decisions are ratified at template altitude.** `adr_003` is a
   decision already in force by construction (the runtime *is* the environment;
   `what/context/claude_code/` exists). At the next template release it moves to
   `status: accepted` with a §7.7 ratification block naming the template maintainer's
   authority and this ADR as rationale — a stated flip, not a quiet one, precisely because
   §7.7 exists to prevent inherited-without-an-act acceptance (Hestia's own caveat, honored
   by making the act explicit).
2. **Fork-time decisions carry provenance.** `skill_project_fork` stamps every copied
   decision file with `provenance: template_inherited` (and the template version it rode in
   on). A census predicate can then exclude inherited rows mechanically, and a fork that
   genuinely re-opens an inherited decision does so by removing the stamp — an act, visible
   in its own history.

**⛔ Explicitly rejected: any bulk status flip across the 26 existing copies.** That writes a
ratification act into 26 vaults on no vault's authority (F-RAT-01's shape, 26 times — Hestia's
§3, agreed). Existing copies are left alone; the release notes advise fork operators of the
stamp convention and the template-altitude ratification, and each fork's operator may apply
either at their own discretion.

## Consequences

- Fleet ADR censuses become readable without per-file md5 work; the ~16 substantive
  singles stop hiding behind 26 identical rows.
- One new frontmatter field (`provenance`) on decision files; absent means locally authored.
- The 4 diverged copies (2 also `proposed`) are untouched and unexamined here — Hestia stated
  they were excluded by md5, not audited; whether any contains a real local decision remains
  each vault's question.
- Rides the same release as the vendored pre-push-hook re-vendor advisory (Ilmarinen's 31-copy
  finding, 2026-09-07/15) — both are "the template's reach ends at fork time" defects, and the
  release notes are the one channel that reaches downstream operators.

## Ratification (§7.7)

- **Decision:** parts 1 + 2 above.
- **Ratified-by:** *(pending — operator)*
- **Date:** *(pending)*
- **Status:** proposed.

Related: `how/backlog/idea_upstream_template_decision_provenance.md` (the release-vehicle
filing) · Standing Rule 1 · `skill_template_release` · `skill_project_fork`.

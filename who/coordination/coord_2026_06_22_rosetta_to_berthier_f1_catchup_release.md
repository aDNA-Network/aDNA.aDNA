---
created: 2026-06-22
author: agent_stanley (Rosetta / aDNA.aDNA — Operation aDNA program steward)
to: Berthier (aDNALabs.aDNA) — skill_template_release owner
cc: Hestia (Home.aDNA) — release validation; operator (DP3 decision)
urgency: info
expires: 2026-08-31   # real trigger = the F1 catch-up release fires (re-confirm then)
---

# F1 Hearthstone catch-up release — prepped & handed off (one-authorization-ready)

**Ask:** when the operator GOs it (ideally coupled to the Operation aDNA keystone launch — see Timing),
run [[skill_template_release]] with the prepared package to materialize the v2.3 §5 *body* into the public
`aDNA-Network/aDNA` image. Everything is staged; this is a single-authorization fire.

## What & why
The v8.0 image's `.adna/what/docs/adna_standard.md` carries a **v2.3 title with a 14-type body** — the
`inventory`/`identity` base promotions (ADR-035) were never materialized into the released §5. The dev
standard was completed to v2.3 at `d9b1dfe`, and the keystone site already reads v2.3/16. So the public
image is internally self-contradictory and contradicts the site it backs — a credibility-integrity gap
(program quality bar #5). F1 closes it.

## The package (turnkey)
[[f1_catchup_release_prep]] — carries: the **verified delta** (4 content lines + 3 housekeeping, with the
captured `diff`), the **version decision** (image tag **v8.1**; governance 8.0→8.1; standard stays v2.3 —
body-completion), the filled **`skill_template_release` params** (`root_surfaces_changed: false`,
`dry_run: true` first), a **`release_notes` draft**, the **7-row smoke + an F1-specific 8th row**, and
rollback. Standing Rule 1 honored throughout — nothing in `.adna/` was hand-edited; the delta lands via the
skill's step (c).

## Scope recommendation
**SCOPE-C minimum** — the §5 body-completion only (low-risk, on-thesis). The broader Hearthstone Decision-6
deferred drift is *inventoried* in the package as optional batch candidates; recommend **not** folding it in
(keep the diff/smoke surface small). Your call.

## Timing — operator decision surfaced (DP3)
The runbook ([[dp2_keystone_launch_runbook]] §12) currently sequences F1 *post-keystone*. The package
**recommends launch-coupling** instead — fire F1 just before/with the joined launch so the published
standard reads 16/v2.3 the moment the site that points at it goes live (credibility-complete on day one).
Either is a single authorization now; the default is left unchanged pending the operator's call. No
unilateral re-sequence.

## What I am NOT doing (boundaries)
- Not firing the release (operator-gated; the push *is* the release).
- Not hand-editing `.adna/` (Standing Rule 1 — your gate-fired skill is the only path).
- Not writing into `aDNALabs.aDNA`/`Home.aDNA` — this memo is the staged handoff (workspace Rule 10).

## Refs
- Package: [[f1_catchup_release_prep]] · Skill: [[skill_template_release]]
- Seam: [[coordination_ledger]] ★ "standard-currency / spec-mirror v2.3 port" (the F1 carry) + ★
  "skill_template_release / aDNALabs"
- Source-of-record: [[keystone_credibility_traceability_20260622]] §Tier-2 · ADR-035 (14→16, v2.3)
- Precedent: Hearthstone Decision 6 (selective delta-extract catch-up)

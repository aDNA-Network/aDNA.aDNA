---
plan_id: mission_haussmann_p1_1_claim_purge
type: plan
title: "P1.1 — Claim purge: zero FALSE, zero above-ceiling — ship the channels or stop claiming them"
campaign: campaign_haussmann
phase: P1
decade: 1
owner: stanley
status: completed
mission_class: build
executor_tier: opus   # copy judgment against the register; edits themselves are small — executed on fable (above tier), session 20260817_185706
token_budget_estimated: "~150–250 kT across 2 sessions: 8 FALSE fixes + 19 unsupported adjudications + channel decisions (Discussions/templates) + editorial-gate green (ADR-016)"
token_budget_actual: "~460 kT, 1 session (≈250 main + 207 hostile-read subagent) — ~1.8× upper est.; driver = the 18-finding hostile-read burn-down (see AAR follow-up 4)"
created: 2026-08-16
updated: 2026-08-17
last_edited_by: agent_rosetta
grounded_in: ["claims/claim_register.md §5.2 (the 8 FALSE verbatim)", "claims tense audit", "H9 sharpened", "coldreads contributor (dead funnel)", "ADR-048 (positioning language, from P0.1)"]
vitruvius_dimensions: [D6, D7, D8, D9]
decade_theme: credibility
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p0_1_positioning, mission_haussmann_p0_5_editorial_gate]
blocks: []
acceptance_criteria:
  - "Editorial gate green with zero xfail rows: all 8 FALSE claims resolved (copy harmonized down OR the claimed thing shipped)"
  - "GitHub Discussions enabled + seeded, AND .github/ issue templates shipped (question path routed away from bug tracker) — or /community rewritten to name only what exists (operator choice per row)"
  - "/compliance signing claim resolved (start signing or state the truth)"
  - "The 19 unsupported claims each adjudicated: evidence linked, claim lowered, or moved to a labeled roadmap surface (anti-pattern 7.5)"
  - "Dead Videos.aDNA GitHub link fixed at the data source (with Hestia if inventory-side — honor pt19)"
verification_method: "editorial gate (P0.5) full green + live re-probe of every channel URL + hostile-read spot-check"
human_gate: true
tags: [plan, haussmann, p1, claims, credibility]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The S1 core: eight sentences a hostile reader disproves in one click.

## Why this mission exists

The register's FALSE set `[D claims §5.2]`: "the vaults are all public" (73/74 aren't) · "the **open** coordination protocol" (private, counsel-gated) · Discussions 404 · nonexistent issue templates · "every commit is signed" (none are) · "every vault has its own persona" ×2 · the registry's only outbound proof-link 404s. Each is a copy-or-ship decision, not a redesign. The direction is fixed by campaign law: **claims move down to verifiability — unless the operator elects to ship the claimed thing**, which for the contribution channels is likely the better move (the contributor cold-read's 3/10 becomes real infrastructure).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Per-row disposition memo: fix-copy vs ship-the-thing for all 8 FALSE + the 19 unsupported (with drafted copy per ADR-048 language) | disposition memo | ⛩ operator (channel rows) |
| O1 | Execute copy fixes sitewide (incl. the protocol-language harmonization to the embargo-safe pair) | edits + gate green | — |
| O2 | Ship elected channels: enable Discussions + seed categories; add `.github/` issue templates (bug/feature) with questions routed to Discussions | live channels | ⛩ operator (outward) |
| O3 | Fix the dead proof-link at source; re-probe all channel/proof URLs live | probes [D] | — |
| O4 | Hostile-read check: fresh adversarial agent hunts for remaining overstatement; AAR | report + AAR | — |

## Constraints

Never round a claim up; the counsel embargo governs all protocol language; persona-quantifier rows (#6/#7) are FIXED IN DATA by P1.3 — here only the quantifier copy softens if P1.3 hasn't landed; GitHub actions (enabling Discussions, pushing templates) are outward acts → operator GO.

## Definition of done

The editorial gate is green with no exceptions; every advertised channel resolves live; a hostile reader finds no falsifiable sentence.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/claims/claim_register.md`. Execute O0 and halt for the operator's per-row channel elections; then O1–O4. Halt condition: any fix requires claiming something new the register can't support.

## Progress

**2026-08-17 — single-session execution** (session `session_stanley_20260817_185706_haussmann_p1_1_claim_purge`):

- **O0 ✅** — disposition memo (`artifacts/p1_1/disposition_memo.md`): 8 FALSE (9 fixture rows) + 19
  unsupported, all dispositioned with drafted copy. ⛩ elections (in-chat): channels = operator custom
  directive (**GitHub issues-only** + **Fluxer link NOW** — an operator override of the P0.4/ADR-054
  prerequisites, deviation recorded in ADR-054 §Status with fresh probe evidence) · R-84 truth-copy ·
  R-90 projection-fix+memo.
- **O1 ✅** — hero ships ADR-048 candidate-A **verbatim** (lead + audienceSub/notLine props + lyric →
  movement band intact + trust-link = the only protocol positioning); R-20/R-23/R-23b/R-61/R-84 down;
  all 19 unsupported adjudicated (16 lowered · R-13 via hero · R-15 kept-as-only-phrasing · R-83
  kept-labeled); NetworkDiagram desc ×2 harmonized; /community venue section (honest-state, dated,
  human-only) + horizon updated. Same-diff: gate-23 re-anchored (new A11 span + FALSE-gloss
  return-guard), gate-26 fixture 21→14 (9 FALSE out; R-12 requoted; R-94/R-95 honesty guards in),
  gate-26 schema floor retired-with-debt. **Catch:** `subnetworks.yaml` is the projection SOURCE —
  R-50/R-51/R-54 mirrored there too (json-only edits would have been clobbered at next `sync:vaults`).
- **O2 ✅** — ⛩ GO'd push: `.github/ISSUE_TEMPLATE/` ×3 → `aDNA-Network/aDNA` (`fd32fc7..d4742db`;
  bug_report adapted for the image, config.yml questions-link → community.adna.network). No
  Discussions enabled (operator election).
- **O3 ✅** — R-90: `verified_links.json` gate live (dead URL = 0 occurrences in dist); Hestia memo
  staged (`who/coordination/coord_2026_08_17_rosetta_to_hestia_dead_github_url_videos.md`). Live
  probes ALL 200 `[D 2026-08-17]`: image repo · /issues/new/choose (templates render) ·
  community.adna.network · worldgeno.me · rare-archive · contribution-standards.
- **O4 ✅** — suite **407/407 green, ZERO xfail** (from 405+9xf; −9 debt +2 guards); T0 captures 8
  surfaces ×2vp ×2 themes + burn-down refresh (`evidence/p1_1_captures/`); claim register §6 addendum
  (8/8 FALSE resolved; R-94–R-97 added). **Hostile-read (fresh adversarial agent, 204 pages, live
  channel verification): 18 findings (4×S1) — ALL dispositioned** (memo §5): 14 fixed in-session,
  2 shipped-real under ⛩ GO (**SECURITY.md pushed `d4742db..b64b81e` + private vulnerability
  reporting ENABLED** — the security-disclosure channel was dead and is now real), 2 routed to the
  Hestia memo (pt19 data-side: ContextCommons "community-driven" note · SuperLeague personal-names
  note), 3 adjudicated-keep with recorded rationale. Post-burn-down rebuild + suite re-run green.
  Deploy record in STATE banner + session SITREP.

## AAR (SO#5)

- **Worked**: The register-as-referee design paid off exactly as built — 9 xfail rows flipped to a
  zero-xfail suite in one lane, and the fixture deletions were forced same-diff by the
  unexpected-pass ratchet. The fresh hostile-read (204 pages, live channel probes) was the highest-value
  spend of the mission: it found the S1 debt on the pages B5 never adjudicated (/privacy, /security),
  including a **dead security-disclosure channel** — and my own R-20 reword surviving as "are all public".
- **Didn't**: The B5 register scoped to 16 key surfaces let three one-click-falsifiable channel promises
  live on un-adjudicated pages; and my first pass re-created a near-variant of the exact phrase-class it
  was purging (quantifier "all" reached for reflexively). Claims-down needs a phrase-class blocklist, not
  just row-by-row fixes.
- **Finding**: **Curated-copy twins clobber silently** — `subnetworks.json` is projected from
  `subnetworks.yaml`; a json-only edit would have been silently reverted at the next `sync:vaults`. Same
  class as KW-14 (transcribe vs derive): always trace a data file to its generator before editing.
- **Change**: Election-driven overrides get a deviation record at the decision artifact (ADR-054
  §Operator ruling) in the same session — the honesty law applied to our own process, not just site copy.
- **Follow-up**: (1) gate-26 candidate: absence assertions for the retired phrase-classes ("are all
  public", "open coordination protocol") so survivors can't return — partially done via gate-23's
  return-guard; a fixture-driven blocklist generalizes it (P4.4 CI lane). (2) Hestia memo rows 1–2 await
  the next inventory pass. (3) P0.4/Aspasia: the link-now override makes the policy-floor ask MORE urgent,
  not less — the site now points humans at the policy-naked instance (P3.4's checklist inherits this).
  (4) Token delta: actual ≈ **460 kT** (incl. 207 kT hostile-read subagent) vs est. 150–250 kT — ~1.8×
  the upper bound, driver = the 18-finding burn-down the estimate never scoped (detection-assumed).
  Under the 2× retrospective tripwire on the upper bound but over on the lower: estimate hostile-read
  burn-down as its own line item in future claim-lane missions.

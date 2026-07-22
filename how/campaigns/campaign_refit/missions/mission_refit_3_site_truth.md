---
plan_id: mission_refit_3_site_truth
type: plan
title: "Refit M3 — Site truth: retire the orphan, refresh the guide, complete the corpus"
owner: stanley
status: planned            # activates post-G1 (DP4)
campaign_id: campaign_refit
campaign_phase: 2
campaign_mission_number: 3
mission_class: implementation
executor_tier: opus        # public-copy edits + an AAR-claim reconciliation = judgment; gates protect the mechanics
token_budget_estimated: "~70 kT (page retirement + redirect + guide rewrite + 2 captures + full gate run + build)"
created: 2026-07-21
updated: 2026-07-21
last_edited_by: agent_rosetta
tags: [plan, campaign, refit, site, org_context_graphs, guides, exemplar_corpus]
---

# Mission: Refit M3 — Site truth

**Campaign**: [[campaign_refit]] · **Phase**: P2 — True-up · **Mission**: 3 of 6

## Goal

Make the live site's claims true again: genuinely retire the `/org-context-graphs` orphan (currently live,
indexable, "waiting to be built"), reconcile the Storyweave "zero orphan surfaces" scorecard claim with a dated
annotation, refresh the `navigate-a-vault` guide's stale tree annotations, and complete the exemplar capture
corpus — with the full gate suite green.

## Exit Gate

`/org-context-graphs` retired per DP4 (redirect → `/vaults`; no indexable orphan remains) + guide refreshed
(zero stale "coming soon"; no drift-prone hardcoded counts) + hermes captures complete + `npm run test:gates` +
`npx astro build` green (gate-6 meta + gate-13 nav explicitly re-checked).

## Objectives

### 1. D1 — Retire `/org-context-graphs` + reconcile the claim
- **Status**: planned
- **Description**: Per DP4: remove `site/src/pages/org-context-graphs.astro`; add the redirect → `/vaults`
  (Astro `redirects` config or meta-refresh+`noindex` stub — pick at execution, verify with gate-6). Then add a
  **dated annotation** (in Refit's artifacts + an appended note beside the Storyweave scorecard claim) that
  "zero orphan surfaces" was true of nav-linking only until 2026-07-XX, when the route itself was retired —
  never re-open the campaign doc's substance.
- **Files**: `site/src/pages/org-context-graphs.astro` (remove) · `site/astro.config.mjs` or `vercel.json`
  (redirect) · dated annotation notes
- **Depends on**: G1 (DP4)

### 2. D2 — Refresh `navigate-a-vault.mdx`
- **Status**: planned
- **Description**: Clear the stale "(coming soon)" markers (glossary ships 31 files; workshops/publishing/
  community/adopters all ship live); de-hardcode the drift-prone counts ("13 files", "8 files", "5 files",
  "41 templates") — derive from a single source or soften to non-numeric phrasing that cannot rot. Copy passes
  gate-24 copy-craft; Movement-Skeptic honesty guardrail on any claim.
- **Files**: `site/src/content/guides/navigate-a-vault.mdx`
- **Depends on**: none

### 3. D6 — Complete the hermes capture set
- **Status**: planned
- **Description**: Capture the 2 missing hermes light-mode PNGs (`home__desktop__light`,
  `home__mobile-lg__light`) headless via `scripts/visual_capture.mjs` (T0; light first in `themes[]`), landing
  them in `onboarding_references/hermes_capture/` under whatever tracking class M4's DP5 policy assigns that
  directory (coordinate if M4 runs first).
- **Files**: `how/campaigns/campaign_storyweave/artifacts/onboarding_references/hermes_capture/*.png`
- **Depends on**: none (sequence-aware with M4)

### 4. Gates + build
- **Status**: planned
- **Description**: `npm run test:gates` full + `npx astro build`; re-check gate-6 (meta/canonical after the
  retirement), gate-13 (nav), gate-24 (copy). Deploy only if the operator elects (not required for mission
  close — the truth fixes bind at the next elected deploy).
- **Files**: —
- **Depends on**: 1, 2

## Campaign Context

**Previous mission outputs**: M2 leaves gates green @73 (this mission inherits that baseline).
**Next mission inputs**: M4's dangle-check covers the capture dirs this mission touches; G3's close SITREP
cites the reconciliation annotation.

## Notes

Trap: the redirect mechanics differ between Astro static output and Vercel config — verify the built output
actually 301s/redirects before claiming done. Never re-open Storyweave (hard constraint 1) — annotate beside,
dated.

## Completion Summary

*Fill out when setting `status: completed`.*

## AAR

*Mandatory before `status: completed` (SO-5). Include `token_budget_actual` (SO-11).*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:

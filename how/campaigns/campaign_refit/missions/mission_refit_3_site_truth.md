---
plan_id: mission_refit_3_site_truth
type: plan
title: "Refit M3 — Site truth: retire the orphan, refresh the guide, complete the corpus"
owner: stanley
status: completed          # G1/DP4 ratified; executed 2026-07-23 (paired with M4). All objectives done; AAR below.
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
- **Status**: completed
- **Description**: Per DP4: remove `site/src/pages/org-context-graphs.astro`; add the redirect → `/vaults`
  (Astro `redirects` config or meta-refresh+`noindex` stub — pick at execution, verify with gate-6). Then add a
  **dated annotation** (in Refit's artifacts + an appended note beside the Storyweave scorecard claim) that
  "zero orphan surfaces" was true of nav-linking only until 2026-07-XX, when the route itself was retired —
  never re-open the campaign doc's substance.
- **Files**: `site/src/pages/org-context-graphs.astro` (remove) · `site/astro.config.mjs` or `vercel.json`
  (redirect) · dated annotation notes
- **Depends on**: G1 (DP4)

### 2. D2 — Refresh `navigate-a-vault.mdx`
- **Status**: completed
- **Description**: Clear the stale "(coming soon)" markers (glossary ships 31 files; workshops/publishing/
  community/adopters all ship live); de-hardcode the drift-prone counts ("13 files", "8 files", "5 files",
  "41 templates") — derive from a single source or soften to non-numeric phrasing that cannot rot. Copy passes
  gate-24 copy-craft; Movement-Skeptic honesty guardrail on any claim.
- **Files**: `site/src/content/guides/navigate-a-vault.mdx`
- **Depends on**: none

### 3. D6 — Complete the hermes capture set
- **Status**: completed
- **Description**: Capture the 2 missing hermes light-mode PNGs (`home__desktop__light`,
  `home__mobile-lg__light`) headless via `scripts/visual_capture.mjs` (T0; light first in `themes[]`), landing
  them in `onboarding_references/hermes_capture/` under whatever tracking class M4's DP5 policy assigns that
  directory (coordinate if M4 runs first).
- **Files**: `how/campaigns/campaign_storyweave/artifacts/onboarding_references/hermes_capture/*.png`
- **Depends on**: none (sequence-aware with M4)

### 4. Gates + build
- **Status**: completed
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

Executed 2026-07-23 (paired with M4 in one session). **D1** — deleted `site/src/pages/org-context-graphs.astro`
(826-line true orphan: 0 inbound links, indexable, "front end waiting to be built"); added a 301 redirect
`/org-context-graphs → /vaults` as a sibling of the `/patterns/dual-audience` precedent in `astro.config.mjs`
(emits as a Vercel-output 301 route, build-verified; org-context-graphs absent from the built sitemap);
removed the now-dead `org-context-graphs.astro` allowlist entry from `gate-25-token-discipline.spec.ts`; added a
dated reconciliation note beside the closed Storyweave "zero orphan surfaces" criterion (nav-linking vs
route-existence — substance untouched). **D2** — cleared all 6 false "(coming soon)" markers in
`navigate-a-vault.mdx` (glossary/use_cases/workshops/publishing/community/adopters all ship) and de-hardcoded the
drift-prone counts (patterns "8"→24 was badly stale; templates "41"→46; concepts/comparisons) to rot-proof
non-numeric category phrasing. **D6** — captured the 2 missing hermes light PNGs headless (`--themes light`)
into `hermes_capture/`, completing the 4-PNG set to sibling convention (they land Class-2/PNG-ignored per M4).
**Gates** — full `npm run test:gates` **371 passed**; `npx astro build` clean (202 pages); gate-6/13/24/25
green. No deploy (commit-no-push; truth fixes bind at the next operator-elected deploy).

## AAR

*Mandatory before `status: completed` (SO-5). Include `token_budget_actual` (SO-11).*

`token_budget_actual`: **~50 kT** content-load (M3 share of the paired M3+M4 session). Against the ~70 kT estimate
— within band (no >2× drift; ADR-016 clean); the estimate assumed a bespoke redirect-verify + capture-server
spin-up that the existing precedent + external-site capture made cheaper.

- **Worked**: The `/patterns/dual-audience` precedent made the redirect a one-line sibling; the Explore recon
  correctly predicted every trap (gate-25 hardcode, the static→Vercel-route redirect mechanism). Rot-proof
  non-numeric phrasing killed the count-drift class outright rather than re-pinning a number that would rot again.
- **Didn't**: Nothing blocked. The redirect emits as a Vercel-output route, not a `dist/.../index.html` — briefly
  read as "missing" until the precedent confirmed both redirects emit identically (server-side 301). No deploy
  this session (G3-gated).
- **Finding**: The retired page was **rich, finished content** ("the method, the proof, and the front end waiting
  to be built"), not a skeletal stub — its orphan-hood was a *routing* failure (never nav-linked), which is
  exactly why the Storyweave "zero orphan surfaces" criterion (measured nav-linking) missed it. The gap was in
  what the criterion measured, not in the build.
- **Change**: gate-25's allowlist now sheds a page's exception when the page is retired (stale-record hygiene);
  the guide's tree annotations are now count-free by construction.
- **Follow-up**: The org-context-graphs *thesis* (an org-context-graph front-end product) is unbuilt — not
  Refit's scope; its content lives on across `/vaults`. If ever revived, it re-enters via a real nav home, not a
  standalone orphan route.

---
type: decisions
artifact_class: visual_review
campaign_id: campaign_garnier
title: R-VISUAL — homepage gateway candidate, three-perspective review
created: 2026-09-16
updated: 2026-09-16
status: completed
last_edited_by: agent_rosetta
tags: [garnier, r_visual, homepage_gateway, review]
---

# R-VISUAL — homepage gateway candidate (2026-09-16)

[D] Method per [[verification_recipes]] §R-VISUAL, including the 2026-09-16 gateway amendment
(whole-page density, page purpose, destination-choice added to the review). Three independent
vision-capable agents, builder rationale withheld, same immutable stimulus:
`evidence/homepage_gateway_20260916/rvisual_manifest.json` (14 SHA-256-pinned captures — 12
viewport×theme cells + two 320 px expanded-spacing reflow frames, from build_round2 of the
candidate at `~/.cache/garnier-homepage-20260916`). Reviews ran under the claude runtime after
the [[runtime_handoff_20260916]]; these are model-agent judgments, not human-reader records.

## Verdicts

| Lens | Verdict | S1 | S2 | S3 | S4 |
|---|---|---:|---:|---:|---:|
| Enterprise (design critic + visual designer) | ACCEPT with S3–S4 notes | 0 | 0 | 3 | 8 |
| Cognitive/access (anti-bloat editor + accessibility auditor) | ACCEPT with S3–S4 notes | 0 | 0 | 4 | 6 |
| Brand/information (brand strategist + information architect) | REVISE (one S2) | 0 | 1 | 4 | 5 |

All three lenses independently passed the page on the gateway amendment criteria: density
(~120 above-footer words across five purposeful blocks, nothing reads as filler), purpose
(introduces and routes; the only catalog-shaped element is the below-fold footer), and the
320 px expanded-spacing reflow (no clipping, no overflow, order preserved — recorded as a pass
by all three).

## The S2, and its adjudication

[D] **Brand/IA S2 — two unreconciled routing vocabularies.** The four authored task-path verbs
(Understand aDNA / Start a project / Explore the work / Participate) coexist with the seven
inherited nav nouns (Standard, Learn, Vaults, Network, Commons, Use Cases, Community), three of
which (Vaults, Commons, Network) are undefined insider terms in the first line of chrome; a
reader who routes via a task path cannot re-find that destination from the nav.

**Adjudicated (not left open):**
- **Repaired in this increment (round 3):** the weakest pair — "Explore the work" carried the
  insider description "Browse the project registry and its declared stages of work"
  (independently flagged by all three lenses). Rewritten to plain intent language: *"Browse real
  projects built with aDNA and see where each one stands."* Same href, same ratified label; no
  gate asserts the description string (checked before the edit).
- **Routed with owners:** the nav-noun glossing / Standard-vs-Specification label unification and
  any nav re-labeling are shared-chrome changes outside this increment's declared scope
  (homepage composition only) and inside existing mission scopes — **P2.4 trust surfaces**
  (label/vocabulary reconciliation across chrome) and **P3.1 design system** (nav treatment).
  Recorded as review criteria for those missions' acceptance; reinspection condition per the
  reviewer: click-through map of each path's destination URL and which nav item shares it.

## Convergent S3s and their dispositions

| Finding (lenses) | Disposition |
|---|---|
| "Explore the work" description jargon (all 3) | **Fixed round 3** (above) |
| "Get Started" (header/footer) vs "Start a project" (path) label fork (all 3) | Routed → P2.4. Both resolve to `/get-started/` (asserted by gate-23's JS-disabled walk), so the cost is vocabulary, not routing; the header button is shared chrome |
| Footer: ~20 ungrouped links, worst on mobile (all 3) | Routed → P3.1 (footer grouping is a site-wide template change) |
| "Share what you choose." mid-sentence link: destination not inferable; underline through the period (2 lenses) | **Period unlinked round 3** (`<a>Share what you choose</a>.`); destination-naming rewording routed → P1.3 (the mission-voice mission owns this sentence's copy) |
| Dark-theme muted-text contrast suspected near 4.5:1 (cognitive) | Measured: 12/12 capture cells run axe with **0 violations in both themes** (t0 and t0r3 sets), which covers WCAG contrast rules on rendered text. Downgraded to S4 per the reviewer's own condition |
| Top-edge artifact in every capture (2 lenses inferred skip-link) | Verified at the object: at runtime the skip-link rests fully offscreen (measured `bottom = −9.4 px`, not visible); the ~3 px sliver appears only in full-page screenshot stitching. Capture-side artifact, S4; noted for a `visual_capture.mjs` improvement rather than a page change |
| Tap-target extent of path links text-only (cognitive) | Routed → P3.1 (affordance treatment); targets meet spacing today, and gate-23 asserts exact accessible names, so enlarging the anchor is a designed change, not a patch |
| Tablet "what/" row wrap, hero aside alignment, mobile two-row header, footer tagline new term, `aDNA.aDNA/` doubled-name stumble (various S4) | Recorded; routed → P3 craft wave backlog. None affects the gateway's job |

## Round-3 verification after repairs

[D] `npx astro build` clean (229 pages, build_round3.log) → `inject_redirects` → `check:markup`
exit 0 → fast gates **576 passed / 3 skipped** → full suite **694 passed / 3 skipped / 0
failed** (gates_full_round3_tail.log) → 12/12 re-captured cells with **0 axe violations**
(t0r3, pinned in rvisual_manifest.json §round3). Frozen P1: all 15 route hashes at port 4465
re-verified, 0 mismatches (frozen_check_close.txt); vault `site/` untouched.

## Standing conclusion

[D] No S1 anywhere; the single S2 is adjudicated (partially repaired in-increment, remainder
routed to P2.4/P3.1 with stated reinspection conditions). Under §R-VISUAL this candidate has no
remaining blocking visual finding. The routed items are review criteria for their owning
missions, not silent drops.

Related: [[homepage_gateway_revision]] · [[verification_recipes]] · [[clean_homepage_visual_review]] · [[runtime_handoff_20260916]].

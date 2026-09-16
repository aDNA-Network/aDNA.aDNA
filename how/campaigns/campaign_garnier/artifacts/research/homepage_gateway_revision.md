---
type: artifact
artifact_class: implementation_receipt
created: 2026-09-16
updated: 2026-09-16
last_edited_by: agent_rosetta
status: completed
campaign: campaign_garnier
tags: [garnier, homepage, gateway]
---
# Homepage as a concise gateway

## Accepted direction

- **Decision:** implement a minimal homepage gateway with a tiny three-folder example and four task paths; integrate this purpose into GARNIER's campaign and review criteria.
- **Ratified-by:** Stanley Bishop, selected options followed by explicit “Implement the plan”.
- **Date:** 2026-09-16.
- **Status:** accepted.

[D] This supersedes the homepage content-retention requirements in [[clean_homepage_revision]] and [[next_build_scope]]: neither all prior sections nor eight registry entries must remain on the homepage. Historical receipts remain preserved. P1 b1cf040/4465 stays frozen; candidate uses 4466. Real-reader evidence, DP3 and later phase gates remain open.

## Page contract

[I] The homepage introduces the idea, ethos, mission and present project, then helps readers choose a destination. Dedicated pages provide depth. Keep the mechanism-first headline/definition, short voluntary-sharing mission, three real folder labels, open-standard/MIT/current-stewardship note and scoped AI-tool data handling. Four paths: Understand aDNA → `/learn/what-is-adna/`; Start a project → `/get-started/`; Explore the work → `/vaults/`; Participate → `/community/`. Keep quiet Changelog/RSS links. Move command, full quotation/file map, registry detail, machine documentation and update listings off the homepage; existing destination pages retain their material.

[I] Advisory 150–220 main-content words including navigation descriptions, natural reflow, readable type. Native-theme clean backgrounds; no new imagery or motion. Existing Space Grotesk/Inter/JetBrains roles and Tokyo Night semantic tokens remain: dark #1a1b26, surface #24283b, border #2f334d, prose #c0caf5, muted #9aa5ce, link #7dcfff, with native light equivalents. Left-aligned introduction and restrained folder notation share one opening area; four compact text paths follow. No repeated resource shelves or catalog cards. Roughly one desktop screen of main material is a layout aim, not a height cap.

[I] The distinctive element is this site's actual `what/how/who` structure. A full source panel or repeated evidence grid would violate the gateway brief even if individually attractive. Use page-local composition with existing BaseLayout; shared header/footer/illustrated heroes remain unchanged. No public API, route or schema changes.

## Implementation and review scope

[D] Candidate base fab206a9ffc2eb4c876f1253c91bce768a2573c3; main base afcb788a1680e3cf4ea4fe6d8c3afc65b3b55cc4. Opening processes had stopped; restarted existing builds and verified all 15 P1 and 15 candidate served hashes. Before captures retained from the exact prior source. Evidence: `evidence/homepage_gateway_20260916/`.

[I] R-VISUAL three independent perspectives assess overall information density, page purpose and choosing a destination, as well as styling. Preserve immutable packs and peer independence. Full R-SITE; native six-width/two-theme capture; no-JS/focus/links, spacing and actual 200/400% zoom; source/HTML/twin and claim-location checks. Adapt obsolete homepage obligations in the same diff while preserving substantive install/registry/claim checks on reached destinations. Preserve frozen P1 hashes and shared consumers.

[I] Forecast 110±40 kT additional content-load including independent reviews, checks and closure; billing unavailable. Prior design/research/P1 actuals stay separately booked. Related: [[garnier_quality_research]] · [[verification_recipes]].

## Completion receipt — 2026-09-16

[D] Increment completed under the claude runtime after the mid-session Codex→Claude handoff
([[runtime_handoff_20260916]]); Codex authored the gateway composition and the same-diff
gate/fixture adaptations, Claude completed verification, review and closure. Delivered on
isolated branch `garnier/homepage-20260916` (checkout `~/.cache/garnier-homepage-20260916`):
the gateway `index.astro` (intro + mission + stewardship, three-folder example, four task
paths, privacy note, quiet Changelog/RSS), same-diff updates to 8 gate specs + 2 claim
fixtures, and one instrument repair — gate-47's focus-identity key changed from a mutable DOM
index to a first-focus stamp after Astro's focus-triggered prefetch was measured inserting
head elements mid-walk (repaired, then red-proven against a simulated one-way trap).

[D] Verification: full suite **694 passed / 3 skipped / 0 failed** (round 3, after two
review-driven copy repairs); markup clean; 12/12 capture cells with 0 axe violations in both
themes; frozen P1 — all 15 route hashes at 4465 re-verified, 0 mismatches. R-VISUAL:
[[homepage_gateway_visual_review]] — two ACCEPT, one REVISE whose single S2 is adjudicated
(one repair shipped in round 3; shared-chrome remainder routed to P2.4/P3.1 with reinspection
conditions). No remaining blocking visual finding.

[I] Actuals recorded at session close in [[session_stanley_20260916_065915_garnier_homepage_gateway]]
against the 110±40 kT forecast. P1.3 real-reader evidence and DP3 remain open; no publication
or peer delivery occurred.

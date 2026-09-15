---
type: artifact
created: 2026-09-15
updated: 2026-09-15
status: active
last_edited_by: agent_codex
tags: [garnier, p1, verification]
---
# P1 local verification

[D] Final copy source b1cf040; previous prescreen source 5b92495. The final changes affect only /get-started and /learn/what-is-adna; the homepage remained byte-identical. `close_candidate_identity.json` and capture receipts preserve that boundary. This is a local candidate, not a deployment or launch score.

## Checks reached

- [D] Safe build: `cd site && npx astro build`, then the three CI injectors and `npm run check:markup`. Final logs `raw/build_10.log` and `raw/markup_close.log`: 229 pages, 226 twins, no markup failure. No registry regeneration.
- [D] `GATE_PORT=4479 npm run test:gates`: `raw/full_close.log`, 698 passed and one existing skip. The earlier homepage fast run was 580 passed and the same skip. Failed initial attempts remain in raw logs; the privacy gate was corrected to require a supportable disclosure rather than preserving the old unverified claim.
- [D] Existing pinned visual container, Bash 5.3.9: baseline then check, 26 checks passed. Exactly home/about/commons/community/state-network changed in both themes; no masks/tolerances changed. Later copy changes touch get-started and the introduction, neither is a gate-49 route, and their captures were refreshed separately. The /vaults shared-hero baseline remained unchanged.
- [D] `capture_population.json` names 15 routes × six canonical viewports × two themes. The close receipt has all 180 cells, each with HTTP 200, matching theme, PNG and zero axe violations. T0 reports contain the local-preview Speed Insights 404. Companion requests identify that exact platform endpoint in every cell, with zero unexplained HTTP errors. This is not a clean production-console claim; preview does not serve the Vercel endpoint.
- [D] Fresh 390px dark/light captures have zero axe violations; the example’s computed foreground/background remain readable in both. Art-disabled views retain the mechanism. No-JS keyboard activation opens native relationship details; command and primary action remain available. Copy API-boundary success, stale payload and denial are recorded separately.
- [D] C4 has sixteen process controls; the transport instrument has six process controls. Explicit manual counterexamples are preserved in `manual_review_controls.json`; they are agent judgment, not automated tests. `prose_gate_close.json` reports zero declared banned-word hits across nine routes.
- [D] Four tour files match their public release hashes. Rendered byte equality, source privacy, twin links and counts are covered by the suite. The exact copied install command reached a disposable container: clone/entry succeeded, agent launch exited 127 because Claude Code was absent. Full first-project reproduction is owed.
- [D-syn] Three bounded fresh readers and two calibrated independent graders completed the fixed tasks. All keyed answers passed; confusions and post-review corrections are retained. No human outcome exists.
- [D] Frozen P0: 1,692 hashed files unchanged. Reserved registry, .adna, HAUSSMANN/VITRINE and peer paths were not written. No pushes, deploys or outward memos. All local tooling reused existing pinned installations/cache; no installation occurred.

## Lab diagnostic

[D] `lighthouse_summary.json`: Lighthouse 13.4.1, existing Playwright Chromium, one local homepage run per profile. Mobile performance/accessibility/best-practices/SEO: 98/100/96/100; desktop: 100/100/96/100. Mobile LCP approximately 2.25 seconds, desktop 0.48 seconds. These are one-run laboratory observations, not field p75, an improvement comparison or a launch bar. The local platform endpoint is absent. Full performance/collector verification remains P4’s.

## What this pass could not see

[D] No human timed perception, formative observations, authenticated first project, assistive-technology user session, field p75, collector receipt, independent adoption or agent-efficacy result was measured. Automated axe is not a complete WCAG audit. The canonical prose extractor undercounts the homepage relative to the separate DOM populations, so no percentage word-reduction claim is made. Existing diagram-label debt and twin diagram duplication remain. Reference capture/bar data was not rescored or forked. The public site still serves its prior deployment.

Related: [[how/campaigns/campaign_garnier/artifacts/p1/phase_exit|P1 review packet]] · [[formative_reader_pack]].

[D] Final navigation expectation reuses the same publishable subnetwork set as /commons; a future withholding decision must not force hidden entries back onto a page to satisfy the test. Native Node JSON loading first failed collection (`raw/nav_close.log`, `raw/nav_close_rerun.log`); using the site’s Vite loader plus an explicit JSON import attribute resolved it. Final focused verification: all ten passed in `raw/nav_close_final.log`.

---
type: artifact
artifact_class: verification_receipt
created: 2026-09-16
updated: 2026-09-16
last_edited_by: agent_codex
status: completed
campaign: campaign_garnier
tags: [garnier, verification, limitations]
---
# Clean homepage verification

[D] Scope and source: [[clean_homepage_revision]], commit e745990. Visual dispositions: [[clean_homepage_visual_review]]. Evidence paths below are relative to `how/campaigns/campaign_garnier/evidence/clean_homepage_20260916/`. This is local implementation evidence, not deployment, certification or human usability evidence.

## Delivered checks

- [D] `build_final.log`: pinned Astro build from isolated `site/`,229pages. Header, installer and redirect injection logs end in `_delivered.log`; `markup_delivered.log` exits0. Registry-mutating prebuild was not run.
- [D] `gates_fast_delivered.log`:578passed / 3 skipped. `gates_full_delivered.log`:696passed / 3 skipped. Gate17 negotiation is deploy-only and absent in this local injection recipe. Two gate36 checks skip because the worktree has no sibling standard checkout. `tour_source_check.log` independently verifies4vendored sources in the primary context; `tour_source_corroboration.json` confirms all4plus manifest match and the recorded sync commit resolves. These remain reported as skips.
- [D] `round3/native/manifest.json`:12cells, six canonical widths320/375/768/900/1024/1440, both themes,36first/full/heroPNG; final source/image hashes verified against commit. `t0_round3_runs.json` and `round3/t0/`:12successful cells, all200, zero axe violations. Local Vercel Speed Insights script404 is retained in reports; no production-telemetry/performance claim.
- [D] `native_review.json`:12shared `/network`/`/commons` comparisons at375/900/1440in both themes have identical heroPNG and main text against4465. Exact clipboard success and injected rejection/recovery, skip/focus traversal, wrapped five-row file example, no-JS and art-disabled reading, normal/reduced-motion checks pass. Its empty `native` array is intentional: the immutable native matrix is produced by `capture_native.mjs` separately.
- [D] `spacing_both_themes.json`: final320px expanded text spacing in both native themes, no horizontal overflow or detected child clipping; clipboard success/recovery repeat passes. Matching PNG retained.
- [D] `native_zoom/observations.json`: actual headed Chrome native zoom via browser menu/keyboard, T2 escalation because T1 cannot operate browser chrome.1280CSSpx/dpr2 becomes640/dpr4 at200%,320/dpr8 at400%; CSS zoom remains1. Both themes at200%/400%, no detected horizontal overflow/clipping. This pack is Round2, before the final narrow file-label and short registry/news-copy refinements. Final refinements are covered by the Round3 six-width matrix, expanded spacing and full gate46 suite; native zoom was not rerun on that last revision. This distinction is intentional and preserved.
- [D] `source_claim_review.json`: unchanged exact command and source-derived rule; same eight canonical destinations as frozen P1; groups derive5in-use/2chartered/1planned from the shared lifecycle functions. Qualifications and new purpose/version labels appear in HTML and twin. `home.md` is the final twin. `source_population_review.json`:229routes and118documentation source hashes unchanged.
- [D] `reading_census.json`: extracted prose326words, FKGL5.89 against advisory10; whole text9.05.75lines are excluded by the extractor and were included in the manual full-twin review. This is not measured reader comprehension.
- [D] `frozen_before.json` / `frozen_after.json`: all15P1 route hashes match; source b1cf040/4465 preserved. `candidate_identity.json`: source/build/served-route hashes for e745990/4466. `scope_review.json` accepts only8declared files and rejects the disposable reserved-registry-path control. `source.diff` preserves the exact implementation patch.

## Claim delta for later GR-7 reconciliation

[D] Existing [[homepage_claim_map]] R-12/R-24/R-94/R-97 boundaries persist: definition, plain Markdown, voluntary inheritance, no-transmission clause and AI-tool caveat. The structure still does not enforce behavior. Single-computer scale and AI-persona disclosure remain. The actual rule is sourced from public root CLAUDE.md; its non-enforcement limit follows the quote. Facts derived from registry/standard/twin inputs remain derived. No registry count or adoption promise was invented.

[D] New presentational statements: file/folder labels describe the demonstrated local structure; WGA and Rare Archive purposes come from existing public `subnetworks.json` `serves` fields and are explicitly labeled purpose, not results. Four missing purposes are disclosed from absence of available fields. Group labels use shared declared lifecycle; “Being worked in today” is removed from this page because status alone cannot verify that freshness claim. Specification v2.5 and workspace releases v8.11/v8.10 are separate source axes, now named explicitly. Original changelog records, dates and destinations remain unchanged. No normative standard amendment or third-party endorsement.

[I] Remaining limits: screenshots/model critics cannot supply consent, familiarity, timed answers or participant confusion. No manual screen-reader audit, production field p75 or official score is claimed. Shared-header density at320px remains low-priority polish. Four purpose descriptions await owner-supplied data. P1 reader evidence and DP3 remain open; future candidate use for readers needs an explicit version disposition. Both staged memos remain local.

## Failed attempts retained

[D] Initial wrong-working-directory build attempts, light contrast failure, obsolete gate39 population expectations, theme-transition metadata mismatch and raw-name/canonical-slug corroboration failure remain in their original logs/packs. Corrections and final results are explained in [[clean_homepage_visual_review]]. No failed attempt is counted as passing evidence. `evidence_manifest.json` inventories retained files; it excludes itself to avoid a circular hash.

---
type: backlog
backlog_id: B-aDNA-2026-05-22-BannerCleanup
created: 2026-05-22
updated: 2026-05-22
status: open
last_edited_by: agent_stanley
tags: [backlog, idea, banner, asset_cleanup, m3_3_plus_scope, site, what_assets, revert_fallback_retired]
routes_to: campaign_adna_serious_tool_readiness OR low-stakes-operational-session
priority: low
estimated_sessions: 0.25
---

# Backlog idea — Old `banner.jpg` archival cleanup

## Context

At M3.2 S3 close (2026-05-22), the new `aDNABanner.png` (1288×512 RGBA PNG; pixel-art aDNA wordmark) was propagated across canonical root + `site/src/assets/` + `what/assets/` per S3-with-carry sub-mode (Deliverable 7). The previous banner files were intentionally **retained in tree** as revert-fallback per Phase B step 7 of the plan:

- `site/src/assets/banner.jpg` (1408×768 JPG; 110 KB; mtime 2026-04-16 05:36)
- `what/assets/banner.jpg` (1408×768 JPG; 363 KB; mtime 2026-04-13 09:40)

The Astro import at `site/src/pages/index.astro:5` was updated to point at `aDNABanner.png` so the JPGs are no longer referenced — they're dormant assets in the tree.

## Proposed cleanup

After one release cycle (probably M3.3 close or any low-stakes operational session 2-4 weeks post-M3.2 close), archive the two `banner.jpg` files:

1. **Verify nothing references them** — `grep -r "banner.jpg" .` should return zero hits in `site/`, `what/`, `README.md`, `CLAUDE.md`, or any active config.
2. **Verify Vercel production deploy of new banner is stable** — at least 1 full deploy cycle of the new banner without revert.
3. **Archive via `git mv`** — move both files to `_archive/banner_jpg_retired_2026_05_22/` (preserves audit trail per Project SO #6 — archive, never delete).
4. **Single commit** with message: `aDNA.aDNA: archive predecessor banner.jpg assets (M3.2 S3 carry follow-up; new aDNABanner.png stable across 2-4 weeks production deployment)`.

## Why defer

Per the S3-with-carry sub-mode 5-criteria gate (Criterion 2: reversible), retaining the old JPGs in tree preserves the `git revert HEAD` escape hatch for the M3.2 close commit. Even though Astro doesn't import the JPGs anymore, the file presence enables a clean revert if Vercel surfaces an issue with PNG asset pipeline at production scale (low likelihood per local build success + 10 image variants generated cleanly, but not zero).

Archival should NOT happen in the M3.2 close session — it would violate the S3-with-carry sub-mode's reversibility criterion for the banner work itself.

## Routing

- **Default**: M3.3+ scope (low-stakes operational session; ≤ 0.25 session — quick `git mv` + commit).
- **Alternative**: v8 P6 propagation cycle (if banner-as-ecosystem-polish-signal lifts to a methodology graduation, the archival pattern co-graduates).
- **Alternative**: any agent picking up "vault tidy" work as a parallel-discretionary task.

## Cross-references

- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m32_obsidian_stabilization_extension.md|M3.2 AAR]] — banner Deliverable 7 carry rationale + 5-criteria gate documentation
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m32_obsidian_stabilization_extension.md|M3.2 mission spec]] — Deliverable 7 details
- [[../../STATE.md|STATE.md]] — banner deployment status in §Pending Manual Actions + §Last Session

## Open questions

1. Does any non-Astro context still reference `banner.jpg`? (e.g., a separate publishing pipeline, OG image generator, downstream consumer)
2. Should `what/assets/banner.jpg` be archived alongside `site/src/assets/banner.jpg`, or do they have independent lifecycles (canonical mirror vs Astro source-of-truth)?
3. Is there a smaller cleanup window than "1 full release cycle"? (e.g., 1 week if Vercel + Playwright stay green)

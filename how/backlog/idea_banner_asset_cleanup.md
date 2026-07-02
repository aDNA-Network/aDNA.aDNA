---
type: backlog
backlog_id: B-aDNA-2026-05-22-BannerCleanup
created: 2026-05-22
updated: 2026-07-02
status: completed
last_edited_by: agent_rosetta
tags: [backlog, idea, banner, asset_cleanup, m3_3_plus_scope, site, what_assets, revert_fallback_retired]
routes_to: campaign_adna_serious_tool_readiness OR low-stakes-operational-session
priority: low
estimated_sessions: 0.25
champollion_mission: M4.2
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
2. Should `what/assets/banner.jpg` be archived alongside `site/src/assets/banner.jpg`, or do they have independent lifecycles (canonical mirror vs Astro source-of-truth)? **RESOLVED at M4.2 fable review (2026-07-02): archived alongside** → `what/assets/_retired/banner.jpg` (+ README). No independent lifecycle — zero live refs on either side; superseded by `aDNABanner.png` (vault) + the c157 helix hero (site). Historical path refs in STATE_archive/session records kept as-is (phase-record precedent).
3. Is there a smaller cleanup window than "1 full release cycle"? (e.g., 1 week if Vercel + Playwright stay green)


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M4.2` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).

## Champollion M4.2 disposition — EXECUTED (site-half) + orchestrator flag (mirror-half), 2026-07-02

**Site-tree half DONE (in-window); canonical-mirror half flagged (out-of-window write scope).**

Cleanup-window criteria met: (1) zero active references to `banner.jpg` in `site/src` verified at archival; (2) the replacement `aDNABanner.png` has been in production since M3.2 S3 (2026-05-22) — well past the "≥ 1 full release cycle" gate. Archive-shift (SO #6 archive-never-delete), NOT `rm`:

- **`site/src/assets/banner.jpg`** → **`site/src/assets/_retired/banner.jpg`** (in-window; done this mission). Self-documenting `_retired/README.md` added.
- **`what/assets/banner.jpg`** (the canonical mirror) — **outside M4.2's `site/`-only write scope; FLAGGED to the orchestrator** to archive in the same commit (recommended: `git mv what/assets/banner.jpg` → an archive path, e.g. `Archive.aDNA/_archive/banner_jpg_retired/`). Open-question #2 of this idea (independent lifecycles) resolves as: same lifecycle, archive both.

Build-verified green (unimported `_retired/` assets are not processed into `dist/`). Record: `how/campaigns/campaign_champollion/artifacts/site_ux_review.md`.

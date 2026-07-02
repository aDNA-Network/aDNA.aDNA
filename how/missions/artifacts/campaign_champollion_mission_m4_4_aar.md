---
type: aar
artifact_id: campaign_champollion_mission_m4_4_aar
title: "AAR — Champollion M4.4 (content currency v2.5 + product story + hygiene batch)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m4_4_content_currency_product_story
executor_tier: opus
token_budget_estimated: "40 kT"
token_budget_actual: "~57 kT (opus builder ~44 self-reported + fable bookends ~13 incl. 8 review completions) — +43%"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [aar, champollion, p4, m4_4, content_currency, product_story, webforge, dual_audience, hygiene, mode_b]
---

# AAR — Mission M4.4: Content currency + product story + hygiene batch

**Session**: `session_stanley_20260702T183653Z_champollion_p4_sweep` (resumed post context-reset) · **Executor: opus subagent** at-tier, **fable-orchestrated** (Mode B) · implementation-class · Ring 2 · last P4 mission.

## Five lines

- **Worked**: verify-before-dispatch pre-corrected THREE of the brief's premises before any build token was spent (the dual-audience "author one file" rider was actually a slug collision; the WebForge memo's "~22 refs" was 54/26; the git dual-home "reconcile" had already landed 2026-06-30 at `14e3031`) — the builder started from verified facts, and its honest scope expansion (Option A) fixed **10+ pre-existing 404 inbound links** the rider never knew existed. Product story = PASS with zero edits, every LP claim pin-verified.
- **Didn't**: the builder's link sweep stopped at content collections — **6 code-side refs (sidebar nav + CardGrid data TS) left 404 in-tree** until review caught them (F-CHM-213); its report under-listed its own work (MANIFEST.md edit missing from the file list, the orphan draft unreported, "3 repoints" claimed complete); and the G3-D6 dual-home row was doubly stale — the index-side reconcile had landed 2026-06-30 (`14e3031`); the real remaining work was an unrecorded **worktree drift** (the tracked symlink had materialized into a copy dir) that the mission healed.
- **Finding** (marquee): **currency decays per mirror hop** — the site was TWO versions stale (`standard.ts` v2.3 ⟵ vault teaching files v2.4 ⟵ live standard v2.5). Each mirror layer adds one release of lag; a currency sweep must walk the full chain source→vault→site, not any single layer. (Looking Glass found the mirror *fresher* than the source; this is the same defect class with the sign flipped.)
- **Change**: named rename-redirect discipline applied (`astro.config.mjs` `/patterns/dual-audience → /patterns/dual-audience-writing`, per the F-CHM-207 no-silent-redirects lesson); sweep-brief corollary recorded in F-CHM-213 (a site link-sweep's surface set = content collections + `src/utils/navigation.ts` + `src/data/*.ts`); vault `CLAUDE.md` §Git-Ops now names the canonical wrapper path (`how/federation/git/`, ADR-045) instead of the shim.
- **Follow-up** (→ G4 housekeeping rows): `specification.mdx` v2.5 re-mirror (deliberate spec-port, M6.1-adjacent) · `adr_041` WebForge rename amendment (append-only discipline) · `NetworkDiagram.astro` stale `SiteForge.aDNA` label · the root-`git/` shim's Home.aDNA §C registration check (Hestia lane, Rule 9) · the Grace Hopper memo releases with the G4 push batch.

## Estimate vs actual

40 est → ~57 actual (**+43%**, worst P4 delta; builder lane ~44, bookends ~13). Drivers: the unplanned slug-collision investigation + Option-A completion work (the rider was under-scoped — landing the concept at its expected route required a pattern relocate + 12 link repoints, not a file-add), and the two-layer version discovery expanding the vault-side sweep to 9 teaching files. The Ring-2 55 kT threshold was reached at completion (review-side), not mid-build — nothing to halt-and-convert; reported here per Ring-2 discipline. **P4 net through four missions ≈ +7%** (M4.1 +2% · M4.2 −14% · M4.3 +9% · M4.4 +43%) — under the ADR-016 2× retrospective trigger, but M4.4 alone is the bookends-buy-corrections pattern (P3 +18%, M4.3 +9%) at its strongest yet: ~13 kT of bookend spend bought 3 corrected premises + 8 completion fixes + 1 ledger finding.

## Concurrency note

The single Mode-B dispatch produced **twin opus builder instances** (harness-side duplication): the twin completed and reported; the original kept running post-report — treating the twin's edits as "a concurrent process" — and was **killed at fable review** after three stray edits, all reconciled (the `adr_041` naming annotation ACCEPTED as the ruled disposition; its duplicate memo's drift-heal finding MERGED into the staged memo, then the duplicate removed; its orphan deletion matched the review's own call). Same family as the 2026-06-20 shared-tree event (`feedback_concurrency_keystone_shared_tree`); contained by explicit-path staging + filesystem-first review — zero stray edits shipped unreviewed. Retro input for the Mode-B pattern: **after a builder's completion notification, verify the tree is quiescent (no second instance) before review-fixes begin**; a dispatch's agent-id should be checked dead, not assumed dead.

## Evidence chain

[[../../campaigns/campaign_champollion/artifacts/content_currency_sweep|content_currency_sweep]] (census tables + §10 fable review record) · [[../../campaigns/campaign_champollion/artifacts/findings_ledger|findings_ledger]] F-CHM-213 · `who/coordination/coord_2026_07_02_rosetta_to_hopper_git_wrapper_dual_home.md` (staged) · the Berthier WebForge memo disposition update · `CLAUDE.md` §Git-Ops · `site/astro.config.mjs` redirect · `site/src/content/docs/dual-audience.mdx` (the 13th concept).

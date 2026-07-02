---
type: backlog_idea
created: 2026-06-10
updated: 2026-07-02
status: completed
priority: low
last_edited_by: agent_rosetta
author: rosetta (aDNA.aDNA)
trigger: audit P1-S3 feature-gap decision (gap register #13; completeness critic)
informational: false
tags: [backlog, site, rss, feed, changelog, contributor_recruitment]
champollion_mission: M4.2
---

# Idea — RSS/Atom feed for adna.network

## Headline

The site is versioned (standard v2.x), changelog-bearing (`/changelog`), and contributor-recruiting — but has no
subscribable feed. An RSS/Atom feed (changelog entries + notable releases) is a cheap "actively maintained"
signal and the standard watch-mechanism for tool-evaluators.

## Sketch

`@astrojs/rss` over the `changelog` content collection (1 entry today — the feed makes the cadence visible as it
grows); `<link rel="alternate">` in `BaseLayout`; optionally fold release tags. Pairs with the E6 funnel work but
is **not** E6-blocking (decided at P1-S3: routed to backlog, not a decadal).

## Disposition

Pick up opportunistically at **E6 O5** (funnel cycles) if cheap in-flight, else **E7 capstone** hardening. Related:
audit report §9 feature-gap decisions; `idea_deploy_cadence` (resolved — the cadence gives the feed real entries).


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M4.2` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).

## Champollion M4.2 disposition — EXECUTED (2026-07-02) → status `completed`

**DONE, site-source-only, zero new dependency.** Implemented as a hand-rolled Astro endpoint rather than pulling `@astrojs/rss` — this keeps it pure `site/` source with no deps-layer risk (M4.2's escalation guardrail: no dependency upgrades). The feed reads the existing `changelog` content collection and emits valid RSS 2.0.

- **Feed endpoint**: `site/src/pages/rss.xml.ts` → `/rss.xml` (RSS 2.0; one `<item>` per changelog entry; `atom:link rel=self`).
- **Discovery**: `<link rel="alternate" type="application/rss+xml" href="/rss.xml">` in `site/src/layouts/BaseLayout.astro` (site-wide) + a footer link in `site/src/components/common/Footer.astro`.
- **Cadence note preserved**: 1 changelog entry today; the feed makes cadence visible as it grows (the sketch's intent).
- Build-verified: `npx astro build` green (180 pages, +1 = the new `/rss.xml` route). Record: `how/campaigns/campaign_champollion/artifacts/site_ux_review.md`.

---
type: backlog_idea
created: 2026-06-10
updated: 2026-06-10
status: idea
priority: low
last_edited_by: agent_stanley
author: rosetta (aDNA.aDNA)
trigger: audit P1-S3 feature-gap decision (gap register #13; completeness critic)
informational: false
tags: [backlog, site, rss, feed, changelog, contributor_recruitment]
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

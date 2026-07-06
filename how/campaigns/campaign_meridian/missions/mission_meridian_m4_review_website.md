---
type: mission
mission_id: mission_meridian_m4_review_website
campaign: campaign_meridian
status: completed
executor_tier: opus
token_budget_estimated: 90
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [mission, meridian, p1, review, website]
---

# M4 — Review sweep B: website lane

Bounded-comprehensive review of `site/` (adna.network source) ahead of the P3 improvement + deploy wave.

## Objectives

1. Currency: route/content claims vs spec v2.5 + live vault reality (counts, versions, dates surfaced on
   pages); data-staleness audit (`src/data/*.json` `generated` stamps vs sources).
2. Status verification: A-11 (hero functional sentence) + A-12 (LP gloss) — implemented or still owed?
   Looking Glass long-tail re-triage (A-02/05/08/10/13/14/17/18/19): each → re-enter / stay-deferred, with
   one-line justification.
3. Craft spot-checks: dual-audience samples on 2–3 key routes; a11y/perf quick scan of anything changed
   since the 304/304 run (2026-06-28); gate-coverage gaps for content added since.
4. Deploy readiness: confirm the committed-but-undeployed delta (2026-06-21 live vs HEAD) — enumerate
   user-visible changes the DP2 deploy will ship (feeds the DP2 evidence pack).
5. Findings → [[../artifacts/findings_ledger|findings ledger]] Lane B + proposed bounded site improvement
   set (S/M effort; L items explicitly called out). Read-only mission: findings returned to orchestrator.

## AAR

- **Worked**: git-log + python3 enumeration cross-checked source truth vs rendered claims across all 6 areas; the full A-11/A-12 approved-wording chain (LG DP3 → M4 remeasure → live source) reconstructed — both verdicts: IMPLEMENTED-but-undeployed.
- **Didn't**: Exact post-regen vault count (54→~68) not determinable without running `sync:vaults` — correctly left to M7 rather than breaking read-only.
- **Finding (marquee)**: A latent RED gate sits in the tree — G20's manifest expects v2.3 while `standard.ts` is v2.5; the 304/304 green predates the bump (F-MER-B1). Gates cannot certify the deploy until M7 fixes the fixture.
- **Change**: Treat claim-trace fixtures as currency surfaces — any version bump must touch the manifest in the same commit (M9 adds this to the gate-extension notes).
- **Follow-up**: 10 findings (F-MER-B1..B10) + long-tail re-triage (re-enter A-02/A-14) + undeployed-delta inventory → [[../artifacts/findings_ledger|findings ledger]] Lane B; one consolidated Hestia/pt19 memo covers all three stale-data escalations (M7).

**Delivered 2026-07-06**: Lane B findings + bounded site set + DP2 evidence-pack input. Read-only held.

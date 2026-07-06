---
type: mission
mission_id: mission_meridian_m10_deploy
campaign: campaign_meridian
status: completed
executor_tier: fable
token_budget_estimated: 50
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [mission, meridian, p3, deploy, verification]
---

# M10 — Production deploy + post-deploy verification

**DP2 GO** (operator, 2026-07-06) → deployed the M9-certified frozen build to production. First
production deploy since launch (2026-06-21) — closes the 15-day deploy gap.

## Deploy record

- **Command**: `npx vercel deploy --prebuilt --prod --yes` from `site/` (token via broker env
  `VERCEL_TOKEN=$SS_VERCEL_TOKEN`, output redacted; freeze verified intact + `.vercel/output` present
  + token present before firing).
- **Deployment**: `dpl_EpKhyfuJQFacQdG6kKvUw1rht41B` → `adna-docs-qovczd5ow-…vercel.app`, `target: production`.

## Post-deploy verification (all PASS)

| Check | Before (live baseline, [[../artifacts/live_baseline_20260706|artifact]]) | After | Verdict |
|-------|--------------------------------------------------------------------------|-------|---------|
| `/rss.xml` | 404 | **200** | ✅ shipped |
| `/learn/concepts/dual-audience/` | 404 | **200** | ✅ shipped |
| `/vaults/graph/` pre-rendered SVG | client-render (no-JS: nothing) | inline `vaultsGraph` SVG present | ✅ A-06 live |
| Homepage spec version | v2.3 | **v2.5** | ✅ currency |
| Homepage vault count | 54 | **68** | ✅ currency |
| A-11 hero functional definition | absent | present ("open standard for organizing project knowledge…") | ✅ live |
| A-12 Lattice-Protocol gloss | absent | present ("the open coordination protocol underneath") | ✅ live |
| **A-07** CLS `/` | 0.000 | **0.000** | ✅ ≤ baseline |
| **A-07** CLS `/learn/concepts/knowledge-graph/` | 0.031 | **0.030** | ✅ ≤ baseline |
| **A-09** best-practices (both routes) | 0.92 | **1.00** | ✅ ≥ 92 — improved |
| Perf score (both routes) | 1.00 | 1.00 | ✅ held |

## AAR

- **Worked**: The M9 freeze + prebuilt discipline made the deploy a pure promotion — zero rebuild, zero
  drift between what was certified and what shipped; broker-env token + sed redaction kept the transcript
  clean.
- **Didn't**: One Lighthouse batch run produced a partial JSON for the concept route (missing audits) —
  a single re-run resolved it (house one-re-run rule).
- **Finding**: Best-practices went 0.92 → 1.00 without a targeted fix — A-09's deploy-layer hypothesis
  (headers/source-maps on the OLD deploy) was right; the fresh build/platform pass cleared it.
- **Change**: Post-deploy verification should always re-use the pre-captured baseline artifact — the
  comparison table wrote itself.
- **Follow-up**: none owed — A-07/A-09 verified and closed; CI standing-watch takes over on push.

**Delivered 2026-07-06**: adna.network live on the certified build; 15-day gap closed; A-06/A-11/A-12
live; verification table above.

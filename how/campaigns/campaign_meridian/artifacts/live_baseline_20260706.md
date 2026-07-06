---
type: artifact
artifact_id: live_baseline_20260706
campaign: campaign_meridian
mission: mission_meridian_m9_certification
status: active
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [meridian, m9, baseline, lighthouse, dp2, before-deploy]
---

# Live-prod baseline — BEFORE the Meridian DP2 deploy

**Captured 2026-07-06** (Mission M9 certification). The live site at `https://adna.network` is the
**OLD 2026-06-21 build** (per campaign context). This is the "before" snapshot the DP2 deploy improves
against — it is NOT the tree being certified. Lighthouse 13.4.0 ran on this machine (`npx lighthouse`,
`--preset=desktop`, `--chrome-flags="--headless=new"`). Numbers are REAL captures, not projections.

## A-07 — Layout stability (CLS) + LCP (performance category)

| Route (live) | Perf score | CLS | LCP | FCP |
|---|---|---|---|---|
| `/` (homepage) | 1.00 | **0** | 0.4 s | 0.4 s |
| `/learn/concepts/knowledge-graph` (concept route) | 1.00 | **0.031** | 0.5 s | 0.4 s |

> Concept-route note: the task named `/learn/concepts/context-graph`, which **404s on live** (it does not
> exist as a route — the concept is `knowledge-graph`). `/learn/concepts/knowledge-graph` was used instead
> (verified 200 live). CLS 0.031 is comfortably under the 0.1 "good" threshold.

## A-09 — Best-practices (best-practices category)

| Route (live) | Best-practices score | Sub-1 drivers |
|---|---|---|
| `/` (homepage) | **0.92** | `errors-in-console`, `inspector-issues` |
| `/learn/concepts/knowledge-graph` (content route) | **0.92** | (same class — console/inspector noise) |

## Live-state claims (evidence of what the deploy fixes)

Grep of the **live** HTML (curl):

| Surface (live) | Rendered claim | Deploy target (this tree) |
|---|---|---|
| `/` spec version | **v2.3** (2 occurrences) | v2.5 |
| `/reference/specification` spec version | v2.0 (3), v2.1 (2), **v2.3** (4) | v2.5 (v2.0/v2.1 are legit version-history examples) |
| `/` vault count | **"54 vaults"** (1) | 68 vaults |

The live `v2.3` + `54` are precisely the currency drift the deploy corrects (standard v2.5 + registry
regen to 68). This is the before-fingerprint.

## Undeployed-route probe (HTTP codes, live)

`curl -s -o /dev/null -w "%{http_code}"`:

| Route | Live code | Interpretation |
|---|---|---|
| `/rss.xml` | **404** | undeployed — lands with this deploy |
| `/learn/concepts/dual-audience` | **404** | undeployed new concept — lands with this deploy |
| `/security` | **200** | **already live** (task expected 404 — it is NOT undeployed; it shipped in an earlier build) |
| `/org-context-graphs` | **200** | **already live** (task expected 404 — same; already shipped) |
| `/vaults/graph` | 200 | live (this deploy swaps the client-Mermaid island for the pre-rendered SVG) |
| `/` | 200 | live |

> **Correction to the task's stated assumption**: `/security` and `/org-context-graphs` are **NOT**
> undeployed on the current live site — both return 200. Only `/rss.xml` and the new
> `/learn/concepts/dual-audience` concept are genuinely undeployed and will first appear with the DP2 deploy.
> (`/security` is a page that this deploy will *update*, not introduce.)

## Exact commands used

```bash
# A-07 performance (CLS + LCP), per route:
npx lighthouse "https://adna.network/" \
  --only-categories=performance --preset=desktop --output=json --quiet \
  --chrome-flags="--headless=new" --output-path=lh_home_perf.json
npx lighthouse "https://adna.network/learn/concepts/knowledge-graph" \
  --only-categories=performance --preset=desktop --output=json --quiet \
  --chrome-flags="--headless=new" --output-path=lh_concept_perf.json

# A-09 best-practices, per route:
npx lighthouse "https://adna.network/" \
  --only-categories=best-practices --preset=desktop --output=json --quiet \
  --chrome-flags="--headless=new" --output-path=lh_home_bp.json
npx lighthouse "https://adna.network/learn/concepts/knowledge-graph" \
  --only-categories=best-practices --preset=desktop --output=json --quiet \
  --chrome-flags="--headless=new" --output-path=lh_concept_bp.json

# extraction (per file):
node -e "const r=require('./lh_home_perf.json'); console.log(r.categories.performance.score, \
  r.audits['cumulative-layout-shift'].displayValue, r.audits['largest-contentful-paint'].displayValue)"

# live-state claims + route codes:
curl -s "https://adna.network/" | grep -oE "v2\.[0-9]+"
curl -s "https://adna.network/" | grep -oE "(54|68) vaults?"
for u in /security /rss.xml /org-context-graphs /learn/concepts/dual-audience /vaults/graph /; do
  curl -s -o /dev/null -w "%{http_code}  $u\n" --max-time 20 "https://adna.network$u"; done
```

## Post-deploy re-capture checklist (DP2)

After the deploy, re-run the same four lighthouse commands against live and confirm:
- CLS stays ≤ live (0 on `/`, ≤ 0.031 on the concept route) — the pre-rendered graph SVG + no-JS
  marquee should not regress CLS.
- Best-practices ≥ 0.92 on both.
- `/` renders **v2.5** + **68 vaults** (currency fix landed).
- `/rss.xml` + `/learn/concepts/dual-audience` return **200** (new routes landed).

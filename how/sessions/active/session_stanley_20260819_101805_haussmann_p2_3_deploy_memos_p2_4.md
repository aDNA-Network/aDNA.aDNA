---
type: session
session_id: session_stanley_20260819_101805_haussmann_p2_3_deploy_memos_p2_4
created: 2026-08-19
updated: 2026-08-19
status: active
tier: 1
agent: agent_rosetta
operator: stanley
campaign: campaign_haussmann
mission: mission_haussmann_p2_4_registry_redesign
phase: P2
executor_tier: opus
token_budget_estimated: "~300–420 kT across three stages: Stage 1 the P2.3 deploy ⛩ + push (~30 kT — pre-flight, deploy, live probe). Stage 2 three owed peer replies + one cohort-manifest pass (~50–70 kT). Stage 3 opens mission P2.4 (budgeted ~250–350 kT across 2 sessions); this is session 1 of 2, carrying O0 and halting at the O1 ⛩ pick."
token_budget_actual:
last_edited_by: agent_rosetta
tags: [session, haussmann, p2, deploy, coordination, registry, tiers, adr052]
---

# Session — P2.3 deploy ⛩, three owed replies, P2.4 to its gate

## Intent

Three stages, all under operator GO taken at the planning gate (2026-08-19):

1. **Ship P2.3.** Five objectives are complete and committed; production still serves `301daef`,
   which is P2.2. Deploy prod via the sanctioned path, prove it live with an assertion probe that
   throws on an empty derivation, then push the 9 unpushed commits as a separate act.
2. **Clear three owed peer replies**, one of which blocks another vault's phase gate (Venus,
   `adna.network.invite/v1`, inside Gangway Phase A's exit gate). Pandora's and Pythia's asks both
   land on `keystone_cohort_manifest.md`, so one manifest pass serves both.
3. **Open P2.4 — registry redesign.** Complete ADR-052 at `proposed` (tier model derived, not
   narrated), spike the registry surface, and halt at the ⛩ operator pick.

## Operator rulings taken at the planning gate (2026-08-19)

| Ask | Ruling |
|---|---|
| Session scope | **Deploy + push, then P2.4 to its gate.** Covers both outward acts for P2.3. |
| P2.4's data problem — the fields the mission's tier model assumed are empty (`tagline` 0/74, `github_url` 1/74, `last_synced` 24/74 with 18 identical) | **Derive from what exists; make the sparseness visible.** Tier from `status` + `card_present`. The dual-clock criterion is recorded as *not derivable*, not quietly dropped. |
| Which owed replies | **All three** — Venus, Pythia, Pandora. |

## Scope declaration (Tier-1)

**Will modify** — `how/campaigns/campaign_keystone/artifacts/keystone_cohort_manifest.md`,
`who/coordination/coord_2026_08_19_*` (new replies), `what/decisions/adr_052_*`,
`how/campaigns/campaign_haussmann/evidence/claims/claim_register.md`,
`how/campaigns/campaign_haussmann/missions/mission_haussmann_p2_3_docs_freshness.md` (deploy record),
`how/campaigns/campaign_haussmann/missions/mission_haussmann_p2_4_registry_redesign.md`,
`how/campaigns/campaign_haussmann/artifacts/p2_4/**` (new), `site/scripts/deploy_log.txt` (appended
by the deploy script), `STATE.md`, this session file.

**Will NOT modify** — `site/src/data/vaults.json` and `subnetworks.json` (pt19 absolute; registry
data regen is Hestia-owned + operator-gated). No `sync:vaults` run. No P2.5/P2.6 work.

**Conflict scan** — `how/sessions/active/` empty at open (`.gitkeep` only). `git fetch` at
pre-flight: 0 behind / 9 ahead of `origin/main`; no concurrent lane.

## Pre-flight (Stage 1) — recorded before the deploy

| Check | Result |
|---|---|
| `git fetch` → ahead/behind | **0 behind / 9 ahead** — no concurrent lane |
| `deploy_log.txt` local vs `origin/main` | Only delta is **our own** unpushed P2.2 record (`tree=301daef`); remote's last is `b9d510a` |
| Last prod deploy of record | `2026-08-19T04:24:08Z mode=prod tree=301daef` — as expected, no foreign deploy |

### Production before-state (captured before deploying, so the change is provable)

| Surface | Before |
|---|---|
| `/reference/specification/` | 200 — **163,169 bytes as one page** |
| `/reference/specification/full/` | **404** |
| `/reference/specification/1-purpose-and-scope/` | **404** |
| `/changelog/` | 200 — 2 `<article>` |
| `/rss.xml` | 200 — **1 `<item>`** |
| `last updated` on `/learn/what-is-adna/`, `/reference/specification/`, `/glossary/glossary-adna/` | **0 / 0 / 0** |
| edit-link on the same three | **0 / 0 / 0** |
| `/install.html` | 200 (the 08-16 collision class — must stay 200) |
| `/provenance-audit/` | 200 (P2.2's move — must stay 200) |

## Stage 1 — P2.3 SHIPPED

**Deploy** (sanctioned path, `./scripts/deploy_adna.sh prod`):

```
deploy_record: 2026-08-19T17:19:00Z mode=prod
  url=https://adna-docs-n605jxweo-science-stanleys-projects.vercel.app
  token=SS_VERCEL_TOKEN tree=97561c0
```

216 pages built (was 195 at P2.2 — the 20 spec sections + hub) · 6,141 dev comments stripped from
216 files · headers injected and verified live **4/4, no drift** · **42 of 42** redirect routes
widened to both slash forms · 5 installer routes injected (idempotent re-run confirmed).

**Live probe** — `artifacts/p2_3/deploy_probe_p2_3.mjs`, **124 assertions / 0 failures**. Written in
the campaign dir, not a scratchpad: P2.2's crawl instrument evaporated from a session scratchpad and
an inventory four missions cite could not be regenerated.

| Claim | Before | After |
|---|---|---|
| `/reference/specification/` | 200, **163,169 bytes** as one page | 200, contents hub |
| `/reference/specification/full/` | **404** | 200, full text intact |
| 20 numbered section URLs | **404** each | **20/20 → 200**, prev/next present |
| `/changelog/` | 2 entries | **≥4 entries** |
| `/rss.xml` | **1 item** | **≥4 items**, well-formed XML |
| sitewide last-updated coverage | 0 sampled | **114 pages** (claim was 113) |
| 42 redirects × both slash forms | — | **84/84 3xx** — P2.2's guarantee survived |
| `/install.html`, `/provenance-audit/`, `/` | 200 | 200 (no regression) |
| security headers | — | **4/4** |

### ⚠ Two instrument defects, both mine, both caught before they were believed

1. **The probe reported 58 redirect failures that were not real.** The adapter config's `src` is a
   **regex** (`^/vaults/aDNA\.aDNA/?$`); stripping the anchors is not enough, because the
   backslashes are regex escapes. The probe fetched the literal string `/vaults/aDNA\.aDNA`, got a
   404, and blamed the site. Fixed by unescaping; 58 bogus failures → 0. *An instrument that
   reports the system as broken is exactly as suspect as one that reports it healthy.*
2. **The probe asserted a contract nobody wrote.** It demanded that *every* sampled page carry a
   date and reported 8/12 as a failure. P2.3's contract is **113 content pages**, and the freshness
   layer is an *optional* additive Props field — index/hub pages deliberately opt out, because a
   "last updated" on a generated listing changes whenever any child does. Corrected to assert the
   real contract (a sitewide count) — which passes at 114.

**Empty-derivation guard red-proven**: run against an empty `dist/`, the probe **throws and refuses
to run** rather than iterating nothing and printing green. This is the specific failure P2.1's probe
shipped (a green "64 PASS, 0 FAIL" while testing nothing in its canonical third).

### 🔎 FINDING — four substantive prose pages carry no freshness signal

Surfaced by defect 2 above, and real once the spurious part was removed. These are **not** listings:

| Page | Words | Has date |
|---|---|---|
| `/learn/what-is-adna/` | 1,446 | no |
| `/provenance-audit/` | 1,282 | no |
| `/get-started/` | 707 | no |
| `/community/` | 648 | no |

`/provenance-audit/` is the sharp one: it is the page that tells a reader **how to check this
site's claims**, and it carries no date of its own. Cause is structural, not an oversight in any one
file — these are hand-authored `.astro` pages under `src/pages/`, and the freshness layer is opt-in
via `source?:` on `DocumentationLayout`, so a page that never passes the prop renders nothing.
**Recorded as a P2.3 follow-up, not fixed here** — expanding a deploy-verification stage into a
content fix is how scope creeps past a gate.

## Activity Log

- **10:18** — Session opened. Pre-flight clean (table above). Production before-state captured.
- **10:19** — Deployed `tree=97561c0` to prod. 4/4 headers verified live at the deploy.
- **10:2x** — Probe authored, two self-inflicted instrument defects found and fixed, guard
  red-proven. **124/0**. Prose-gap finding recorded.

## SITREP

*(at close)*

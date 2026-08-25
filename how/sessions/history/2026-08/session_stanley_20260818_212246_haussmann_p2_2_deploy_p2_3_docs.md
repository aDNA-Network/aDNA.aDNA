---
type: session
session_id: session_stanley_20260818_212246_haussmann_p2_2_deploy_p2_3_docs
created: 2026-08-18
updated: 2026-08-18
status: completed
tier: 1
agent: agent_rosetta
operator: stanley
campaign: campaign_haussmann
mission: mission_haussmann_p2_3_docs_freshness
phase: P2
executor_tier: sonnet
token_budget_estimated: "~180–280 kT: Stage 1 is the P2.2 deploy ⛩ (~20 kT — push, deploy, live probe). Stage 2 opens mission P2.3, budgeted 180–280 kT across 2 sessions; this is session 1 of 2, expected to carry O0 (+O1 if budget allows)."
token_budget_actual: "~250 kT (est. 180–280 kT). Stage 1 deploy + all five P2.3 objectives in one session; the mission was budgeted for two."
last_edited_by: agent_rosetta
tags: [session, haussmann, p2, deploy, docs, freshness, links, changelog]
---

# Session — P2.2 deploy ⛩, then P2.3 docs freshness

## Intent

Two stages, both under operator GO taken at the planning gate:

1. **Ship P2.2.** The ratified IA consolidation is committed at `301daef` and has been sitting
   unpushed and undeployed; production still serves the P2.1 tree (`b9d510a`). Push, deploy prod
   via the sanctioned path, and prove the new IA live — including the 11 redirects in **both**
   slash forms, which only the adapter layer serves and which local preview cannot exercise at all.
2. **Open P2.3 — docs freshness & integrity.** Broken internal links + a gate that keeps them
   fixed; spec pagination; a freshness layer; a changelog that is no longer a single April entry;
   glossary previews that are not bare filenames.

## Operator rulings taken at the planning gate (2026-08-18)

| Ask | Ruling |
|---|---|
| The P2.2 deploy ⛩ | **GO — push `301daef` + prod deploy.** Covers both outward acts. |
| Session scope after the gate | **P2.3 docs freshness** (next mission in phase order). |

## Scope declaration (Tier-1)

**Will modify** — `site/src/content/reference/*.mdx`, `site/src/pages/reference/**`,
`site/src/pages/glossary/**`, `site/src/layouts/DocumentationLayout.astro`,
`site/src/content/changelog/**`, `site/src/pages/changelog.astro`, `site/src/pages/rss.xml.ts`,
`site/src/utils/{collections,text}.ts`, `site/astro.config.mjs`, `site/package.json`,
`site/tests/gates/**`, plus campaign records (mission file, charter status board, STATE) and this
session file.

**Will NOT touch** — `site/src/data/vaults.json` or any `sync:vaults` path (pt19, absolute); any
peer vault (memos only, Rule 10); the untracked evidence capture sets (a separate ⛩ retention
ruling is pending).

**Conflict scan** — `how/sessions/active/` held only `.gitkeep` at open; no peer lease.

## Activity log

### Stage 1 — ⛩ P2.2 deploy gate ✅ SHIPPED + PROVEN

**Pre-flight (fetch-and-compare, the 08-16 collision rule).** `git fetch origin` → `origin/main`
still `356b33b`; HEAD `301daef`, 0 behind / 1 ahead. `site/scripts/deploy_log.txt` byte-identical
local vs `origin/main`, last line still `tree=b9d510a`. No concurrent lane had pushed or deployed.

**Production before-state captured first**, so the deploy would be provable rather than asserted:
`/provenance-audit/` **404** · `/compliance/` 200 · `/adopters/` 200 ·
`/adopters/adopter-solo-developer/` 200 · `/install.html` 200.

**Push** `356b33b..301daef` → `origin/main`, gitleaks pre-push clean.

**Deploy** via `site/scripts/deploy_adna.sh prod` (sole sanctioned path):

```
deploy_record: 2026-08-19T04:24:08Z mode=prod url=https://adna-docs-qg1f0r1wj-science-stanleys-projects.vercel.app token=SS_VERCEL_TOKEN (interim — migrate to VERCEL_TOKEN_ADNA when brokered) tree=301daef
```

195 pages built · 5,133 dev comments stripped · headers injected at route 0 (4/4) · installer
routes 5/5 · **redirects widened 42/42 to both slash forms** · injection verified · live headers
4/4, no drift.

**Live probe on adna.network — 121 assertions, 0 failures.** Instrument:
`scratchpad/probe_p2_2_live.mjs`, deriving every assertion from `.vercel/output/config.json` and
**throwing on an empty derivation** (the P2.1 lesson). Coverage: 42 redirect routes × both slash
forms (84) + all 37 unique destinations confirmed live at 200 — because a redirect pointing at a
404 is not a fix.

⚠ **The instrument reproduced the bug class it was testing for, for the second consecutive
mission.** The probe's first run reported `PASS 63 / FAIL 58`, and every one of the 58 "failures"
was the probe's own defect: it converted each route's regex `src` to a request path by stripping
the anchors but **not the regex escapes**, so `^/vaults/aDNA\.aDNA/?$` was requested literally as
`/vaults/aDNA\.aDNA` — a backslash in the path, a guaranteed 404. Only routes without a dot passed.
Fixed by unescaping (`\\(.) → $1`); re-run clean. Recorded because the failure mode is now
three-for-three across P2.1/P2.2/here: **the verification instrument is as likely to be wrong as the
thing it verifies, and a red result deserves the same scrutiny as a green one.**

**Remaining live checks, all on the apex:**

| Check | Result |
|---|---|
| Nav link count | **7** — Standard(`/reference`) · Learn · Vaults · Network · Commons · Use Cases · Community |
| `nav-more` | **absent from the page entirely** |
| `/reference/` identity | `<title>The Standard — aDNA</title>`, `<h1>The Standard</h1>` |
| `/compliance` + `/compliance/` | **301 → `/provenance-audit/`** (was 200) |
| `/provenance-audit/` | **200** (was 404) |
| `/adopters/` → `/use-cases/` | **301** (was 200) |
| `/install.html` | **200** — the 08-16 collision class stays clear |
| Security headers on apex | **4/4** (CSP · X-Frame-Options · X-Content-Type-Options · Referrer-Policy) |

**Note for the record — a token leak, mine.** Checking token presence I wrote
`${VAR:+SET}${VAR:-UNSET}`, which expands to the *value* when the variable is set, so
`SS_VERCEL_TOKEN` printed into the session transcript. Correct idiom is `${VAR:+SET}` alone. Flagged
to the operator at the time; not treated as a blocker per the standing ruling that this token is a
throwaway test-account credential whose rotation was de-prioritised (E4 c159, 2026-06-07). The
deploy script itself never leaked — it redacts.


### Stage 2 — P2.3 docs freshness ✅ COMPLETE (O0–O4)

Full detail lives in the mission file's Progress + AAR
(`missions/mission_haussmann_p2_3_docs_freshness.md`). Commits: `2161acd` (O0) · `c62d027` (O1) ·
`0eb48fa` (O2) · `9b4df3a` (O3) · `29313e8` (O4).

Suite **446 → 460**, zero xfail. axe **0** across 8 surfaces × 2 themes. 36 T0 captures.
**14 new assertions across 4 new gates, every one red-proven by mutation.**

## SITREP

**Completed**
- ⛩ **P2.2 deployed + proven live** — `tree=301daef`, probe 121/0, nav 7, `/provenance-audit/` 200.
- **P2.3, all five objectives** — links + blocking gate · spec pagination · freshness layer ·
  changelog/RSS · glossary previews.
- **Closed a two-day CI outage** that no one had noticed (gate-30 asserted a deploy-only step).
- Mission file, charter status board, and STATE banner updated.

**In progress** — none. P2.3 is code-complete and committed.

**Next up**
1. ⛩ **Deploy gate for P2.3** — fetch + diff `deploy_log.txt` first, then `npx astro build` →
   `scripts/deploy_adna.sh prod`. HEAD is **6 commits ahead of origin**; both push and deploy are
   per-action outward acts needing their own GO.
2. **P2.4 registry redesign** — inherits the 13 mixed-case vault links and the **77-vs-74 registry
   admission ruling** (DP4-class).

**Blockers** — none for this vault. Two inbound memos remain unanswered and are **not** this
mission's lane: Pythia's **DP-16** ruling, and Venus's `adna.network.invite/v1` review, which
**Gangway Phase A's exit gate is waiting on**. Both accruing. `#needs-human` on neither yet.

**Files touched** — `site/src/content/{reference,docs,changelog,spec}/**`,
`site/src/pages/reference/**`, `site/src/layouts/DocumentationLayout.astro`,
`site/src/utils/{contentSource,text}.ts`, `site/src/data/glossary.ts`, `site/src/content.config.ts`,
`site/scripts/{split_specification,check_external_links,transform-content,deploy_adna}.*`,
`site/tests/gates/gate-{14,31,32,33,34}*`, `.github/workflows/{gates,external-links}.yml`,
`site/package.json`, campaign records, `STATE.md`.

## Next Session Prompt

You are Rosetta in ~/aDNA/aDNA.aDNA. HAUSSMANN is in P2; P2.1 and P2.2 are shipped and live, and
**P2.3 is complete but undeployed** — the tree carries the paginated specification, the freshness
layer, the revived changelog, and four new gates (suite 460, axe 0), and HEAD is 6 commits ahead of
`origin/main`. **Start at the deploy ⛩**: `git fetch origin` and diff `site/scripts/deploy_log.txt`
against origin's copy — the last line must still read `tree=301daef`; a newer line means another
lane deployed and you must halt and reconcile. Then, under an explicit operator GO for each outward
act, push and run `cd site && ./scripts/deploy_adna.sh prod`, and live-verify on adna.network:
`/reference/specification/` is a contents page, `/reference/specification/7-frontmatter-system/`
and `/full/` are 200, `/changelog/` shows four entries, `/rss.xml` carries four items, and doc pages
show a last-updated date. **Add a `src/content/changelog/<today>.md` entry before deploying** —
this session's work is deliberately absent from the changelog until it ships, and the deploy script
will remind you. Then open **P2.4** (`mission_haussmann_p2_4_registry_redesign.md`), which owns the
13 mixed-case vault links still emitted from `commons.astro:196` via `subnetworks.json` and the
**77-vs-74 registry admission ruling** — a DP4-class call, not a side effect. Read the P2.3 AAR
first: it records a CI outage that hid for two days, and a follow-up needing an explicit ruling —
`src/content/docs/` has drifted from `transform-content.mjs`, so running that script now overwrites
hand-edited content (it did, mid-session; recovered). Two peer memos are still owed answers and are
outside the campaign lane: Pythia's DP-16, and Venus's `adna.network.invite/v1` review, which
Gangway Phase A's exit gate is blocked on.

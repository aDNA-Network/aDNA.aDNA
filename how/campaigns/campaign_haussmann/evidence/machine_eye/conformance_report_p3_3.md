---
type: evidence
packet: conformance_report
campaign: campaign_haussmann
mission: mission_haussmann_p3_3_mcp_server
objective: O3
title: "Machine-legibility conformance report — the 13-item checklist re-run, 2026-08-21 (AC4)"
created: 2026-08-21
updated: 2026-08-21
status: active
last_edited_by: agent_rosetta
probe_target: https://adna.network
probe_scope: live_alias_verified   # every row below measured against the ALIAS, not a preview build
checklist_source: "directives/COWORK_DIRECTIVE_operation_haussmann_genesis.md §B.2 (13 boxes)"
baseline: "evidence/machine_eye/machine_eye.md (2026-08-16, pinned d58ea13)"
items_moved: 10   # item 13 joined at the deploy
items_held: 2
items_unmoved: 1
items_pending_deploy: 0    # item 13 flipped at the 2026-08-22T03:40:39Z deploy
tags: [evidence, haussmann, p3_3, machine_eye, conformance, d10, ac4]
---

# The 13-item checklist, re-run end to end

> **AC4's deliverable.** The genesis packet scored 13 items on 2026-08-16. This is all 13 re-measured
> against the live alias on 2026-08-21, five missions later — not a delta against the two P3.3
> touched, because a conformance report that only re-runs the flattering rows is not a conformance
> report.
>
> ⛩ **The headline is a negative, and it is stated first on purpose. Item 11 has NOT moved, and it
> is the item this mission was named for.** P3.3 built an MCP server; the operator deferred the
> publish; nothing shipped. A report that opened with the nine green rows would be technically
> complete and rhetorically dishonest.

**Method**: `curl`, script-first, no browser. Every row `[D]`. The probes are the genesis packet's
own, re-issued verbatim where they still apply.

## Result

| # | Item | Baseline (2026-08-16) | Live on the alias (post-deploy, 2026-08-22T03:40:39Z) | Δ |
|---|---|---|---|---|
| 1 | `/llms.txt` | PASS — curated, 1,464 B | **PASS** — 200, `text/plain`, **3,137 B** | ▬ held (grew) |
| 2 | `/llms-full.txt` | *"index, not full-corpus — the name overclaims"*, 2,018 B | **200, 950,827 B** — the actual corpus | ▲ moved (P3.1) |
| 3 | `.md` twins | **10/10 → 404** | **10/10 → 200**, `text/markdown` | ▲ moved (P3.1) |
| 4 | Content negotiation | ABSENT — byte-identical body, same ETag, no `Vary` | `Accept: text/markdown` → **`text/markdown`** + **`Vary: Accept`** | ▲ moved (P3.1) |
| 5 | Sitemaps | PASS — 13,635 B | **PASS** — 200, `application/xml`, 15,571 B | ▬ held |
| 6 | `robots.txt` | *"default permissive, not a deliberate AI-crawler policy"*, 72 B | **608 B — now authored**, documenting the machine surfaces. ⚠ **The baseline finding still stands**: no named user-agent blocks, no `Content-Signal`. A documentation block is not a crawler policy. | ◐ half moved |
| 7 | `/rss.xml` | Valid but stale — **1 item**, ~124 days old | **6 items**, newest **2026-08-21** (same-day) | ▲ moved |
| 8 | Registry as JSON | **ABSENT — 4/4 → 404** | **`/api/registry.v1.json` → 200**, `application/json`, **80,997 B**; `/vaults.json` byte-identical | ▲ moved (P3.2) |
| 9 | JSON-LD | Shallow — no `Dataset`, no `sameAs` | **`Dataset` on `/vaults`**; **`sameAs` present**; vault detail still `WebPage`+`Organization`, not `Dataset` | ◐ moved, one half open |
| 10 | Stable URIs | Casing = **hard 404, no redirect** | `/vaults/III.aDNA` → **301** (canonicalizes now); `/vaults/iii` → 200. ⚠ `/vaults/Terminal` → **404** still — the redirect covers the old mixed-case slugs, not arbitrary re-casing | ◐ moved, the general case open |
| 11 | **MCP server** | **ABSENT** — no server, no endpoint, one incidental mention | ⏸ **STILL ABSENT.** `/.well-known/mcp.json` → **404**; `/mcp` → **404**; `mcp` in `llms.txt` → **0**. Server built, red-tested, **unpublished** | ⏸ **UNMOVED** |
| 12 | Copy-as-context / `llms` discoverability | **0** occurrences of `llms` across 8 page HTMLs | **2 per page** + `rel=alternate`. *(The "copy page as markdown" control itself still does not exist — the discoverability half moved, the affordance half did not.)* | ◐ half moved |
| 13 | Self-conformance | *"Real and specific — but narrative, on one deep page, not the homepage"* | ✅ **LIVE on the homepage** — `"itself an aDNA vault"` greps **1** on the alias, beside the three named machine surfaces. ⚠ Still **not machine-checkable**: no `source_vault_path`, no frontmatter passthrough, no JSON-LD page→source tie | ◐ moved — placement half only |

**Derived tallies** (counted from the Δ column, not typed): **5 ▲ moved outright** (2·3·4·7·8) ·
**5 ◐ half-moved** (6·9·10·12·13) · **2 ▬ held** (1·5) · **1 ⏸ unmoved** (11). Ten of thirteen rows
carry movement; **one does not, and it is the one this mission was named for.**

## ⛔ Item 11 — the item this mission was named for, and it did not move

The mission built `adna-mcp-server`: four tools over this site's own corpus, on
`@modelcontextprotocol/server` 2.0.0, verified from a **separate client process** — 26 smoke
assertions, 24 red-test mutations, all green. None of that is visible from the outside, and **outside
is where item 11 is scored.**

The operator deferred the npm publish. Consequently:

- No `/.well-known/mcp.json` descriptor ships. A descriptor naming an unpublished package is a false
  claim on a machine surface.
- No `llms.txt` MCP section ships, for the same reason.
- The homepage names the three live surfaces and **says nothing about a server**.

⚠ **And the publish is not merely un-GO'd — it is not performable from this node**: `npm whoami` →
`ENEEDAUTH`, no `~/.npmrc`, no npm token in the environment, no npm row in the credential broker
`[D]`. There is no npm identity here to grant a GO *to*.

### ⚠ The item-11 probe has gone noisy, and a future re-run will misread it

The genesis probe had two halves: fetch the endpoints, **and** text-search the site for `mcp`. On
2026-08-16 the text half returned **0** hits outside one vault description. Today it returns **5** in
`llms-full.txt` `[D]` — and **not one of them is a capability claim**:

| Line | What it actually is |
|---|---|
| 2912–2913 | `/doctrine/visual-inspection` naming **Playwright MCP** and a visible-browser MCP as *tools this vault uses* |
| 9596–9598 | A docs page on `.mcp.json` being gitignored — advice about **the reader's** MCP servers |
| 18522 | The original **Warp.aDNA** vault description (*"config-overlay + MCP (not a fork…)"*) |

The corpus grew from 2 KB to 950 KB at P3.1, and it swept in four incidental mentions. **A future
`grep -c mcp` scores 5 and concludes item 11 moved.** It did not. ⇒ The probe must distinguish *the
site mentions MCP* from *the site offers an MCP server*, and only the endpoint half can do that.
Routed to the debt queue as **F-o**.

*(This is convention 15's staleness class arriving through a side door: the probe did not change and
the site did not lie — the corpus underneath the probe changed, and the probe's meaning changed with
it.)*

## Item 13 — moved, and only the half that was actually complained about

The baseline's complaint was placement, not truth: the self-conformance claim was *"real, specific and
findable — but it lives in prose on one deep page (not the homepage)."* `/learn/what-is-adna` has
carried it all along.

This mission puts it on the homepage, in a `machine-door` block that also names the three live
machine surfaces. ✅ **Deployed and verified on the alias**: `grep -c 'itself an aDNA vault'` on
`https://adna.network/` → **1** `[D]`, where it read **0** an hour earlier.

⚠ **Only the placement half moved. The structural half is untouched and stays open** — there is
still no `source_vault_path` meta, no frontmatter passthrough, and no JSON-LD field tying a rendered
page to its source `.md`. The baseline's sharpest sentence still stands: *an agent must read and
trust prose, not check a field.* Marking item 13 ◐ rather than ▲ is the honest call.

⭐ **P3.2 read `completed` for a day while its entire surface 404'd in production.** This row was
written to say ABSENT until a live probe said otherwise, and it did — **flipped on evidence, not on
a status field.**

### Deploy record

✅ **DEPLOYED AND LIVE-VERIFIED.**

```
deploy_record: 2026-08-22T03:40:39Z mode=prod tree=43e0280
url=https://adna-docs-588oiskjw-science-stanleys-projects.vercel.app
verified on the ALIAS https://adna.network (not the *.vercel.app URL)
```

| Post-deploy probe | Result `[D]` |
|---|---|
| `"itself an aDNA vault"` on `/` | **1** ✅ |
| `"Built to be read by agents"` on `/` | **1** ✅ |
| `"222 pages have one"` on `/` | **1** ✅ (derived count rendered) |
| `/llms.txt` · `/llms-full.txt` · `/api/registry.v1.json` | **200 / 200 / 200** ✅ |
| `.md` twins | **10/10 → 200** ✅ no regression |
| `/.well-known/mcp.json` · `/mcp` | **404 / 404** ✅ correctly absent |
| `mcp` · `npx` on `/` | **0 / 0** ✅ |
| live headers on the alias | **4/4 served, no drift** ✅ |

⇒ **Item 13 is flipped on evidence, not on a status field.** Item 11 is re-confirmed ABSENT, which
is the correct outcome of a deferred publish rather than a miss.

## What a hostile reader gets to say after this

Stated plainly, because the campaign's north star is zero false claims and a conformance report is
exactly where one would hide:

1. **"Your headline feature didn't ship."** Correct. Item 11 is unmoved and the report says so twice.
2. **"Four of your nine wins are half-wins."** Correct, and each is marked ◐ with the open half named
   — item 6 has no crawler policy, item 9's vault pages are still `WebPage`, item 10 still 404s on
   arbitrary re-casing, item 12 still has no copy-as-markdown control.
3. **"Most of the movement wasn't this mission."** Correct — items 2/3/4/12 are P3.1's, 8/9 are
   P3.2's, 10 is P2.1's. P3.3's own contribution to this table is **one row — item 13 — and only
   half of that row.**

That is the honest scoreboard, and it is better than the one this report could have written.

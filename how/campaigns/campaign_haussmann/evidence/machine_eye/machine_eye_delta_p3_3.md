---
type: evidence
packet: machine_eye_delta
campaign: campaign_haussmann
mission: mission_haussmann_p3_3_mcp_server
objective: O3
title: "Machine-eye delta — items 11 / 13 after P3.3 (reduced O3, publish deferred)"
created: 2026-08-21
updated: 2026-08-21
status: active
last_edited_by: agent_rosetta
probe_target: https://adna.network
probe_scope: live_alias_verified  # ✅ re-probed on the ALIAS after the deploy, 2026-08-22T03:40:39Z
deploy_tree: 43e0280
deploy_record: "2026-08-22T03:40:39Z mode=prod url=https://adna-docs-588oiskjw-science-stanleys-projects.vercel.app tree=43e0280"
full_report: evidence/machine_eye/conformance_report_p3_3.md
tags: [evidence, haussmann, p3_3, machine_eye, d10, deferred_publish]
---

# Machine-eye delta — items 11 / 13 after P3.3

> **✅ RE-STAMPED LIVE, 2026-08-22T03:40:39Z — probe target is `https://adna.network`, the ALIAS,
> not the per-deployment `*.vercel.app` URL.** Deployed at `tree=43e0280`. Item 13 **flipped on the
> live probe**; item 11 **re-confirmed ABSENT**, which is the correct outcome, not a miss.
>
> **What this banner said before, kept deliberately** — because the discipline is the point, not the
> outcome: *⚠ THIS PACKET IS MEASURED AGAINST THE LOCAL BUILD, NOT PRODUCTION. Nothing below is
> confirmed on `adna.network`; the live re-probe is owed at the deploy GO.* It was written to be
> struck by exactly this probe, and it was — **struck, not deleted**.
>
> Local-green is evidence about the build; it is not evidence about the site. Convention 14 exists
> because `check_live_headers.mjs` printed `OK — no drift` for months while reading Vercel's login
> page. Both measurements are now true and are recorded as **two measurements**, not merged into one.
>
> The full 13-item re-run — including the rows P3.3 did **not** touch — is
> [[conformance_report_p3_3]]. This packet covers only what this mission moved.

## ✅ Live verification (alias, post-deploy)

| Probe | Result `[D]` |
|---|---|
| `"itself an aDNA vault"` on `/` | **1** — item 13's placement complaint discharged |
| `"Built to be read by agents"` on `/` | **1** |
| `"222 pages have one"` on `/` | **1** — the derived count rendered |
| `/llms.txt` · `/llms-full.txt` · `/api/registry.v1.json` | **200 / 200 / 200**, correct content-types |
| `.md` twins | **10/10 → 200** — no regression |
| `/.well-known/mcp.json` · `/mcp` | **404 / 404** — correctly, and deliberately |
| `mcp` · `npx` on `/` | **0 / 0** |
| live headers on the alias | **served 4/4, no drift** |

Baseline: `machine_eye.md` (2026-08-16, pinned `d58ea13`). All rows `[D]`.

## Result

| Item | Baseline (2026-08-16) | Now (P3.3, **live on `adna.network`**, 2026-08-22T03:40:39Z) | Δ |
|---|---|---|---|
| **11** MCP server | **ABSENT — no server, no endpoint, only one incidental mention** | ⏸ **STILL ABSENT.** `/.well-known/mcp.json` → **404**, `/mcp` → **404** (both re-probed live). Server built + red-tested at `mcp/`, **unpublished** | ⏸ **UNMOVED — deliberately** |
| **13** Self-conformance | *"Real, specific, findable — but narrative, on one deep page, not the homepage, and not machine-checkable"* | ✅ **LIVE on the homepage** — the self-conformance sentence **plus** the three machine surfaces named, verified on the alias post-deploy | ▲ **moved — the placement half.** ⚠ The *machine-checkable* half is untouched and stays open: still no `source_vault_path`, no frontmatter passthrough, no JSON-LD tie from page to source `.md`. An agent must still read and trust prose |

## Item 11 — the mission built the thing and the item still reads ABSENT

That sentence is not a failure report; it is the mission's own **DEFECT 3**, landing exactly as
predicted at O0. AC1 specified an **npx stdio** server. `machine_eye` item 11 is probed as a **URL**
and as a **text search of the site**. A stdio binary on a user's machine is invisible to both — so
even a *published* server, built exactly as AC1 words it, would have left this row at ABSENT.

That is why clause 5 grew a discoverability limb (`/.well-known/mcp.json` + an `llms.txt` section),
and why the limb is **conditional on the publish**:

| If | Then |
|---|---|
| Publish lands | Descriptor + `llms.txt` section ship → item 11 moves on the *URL* half |
| Publish deferred | **Neither ships.** A descriptor naming an unpublished package is a false claim on a machine surface |

The operator deferred. Neither shipped. **Item 11 is ABSENT and this packet says so** — which is the
whole difference between a mission that reports done and a mission that is done.

⚠ **The publish was not merely un-GO'd — it is not performable here.** `npm whoami` → `ENEEDAUTH`;
no `~/.npmrc`; no npm token in env; no npm row in the credential broker `[D]`. **Fourth instance in
this campaign of a gate asking for a GO on an act whose prerequisite does not exist on the tree that
must perform it.**

⚠ **The probe's text half has also gone noisy** — `mcp` now returns **5** hits in `llms-full.txt`
where the baseline found 0, all of them incidental (Playwright MCP in the visual-inspection doctrine,
`.mcp.json` gitignore advice, the Warp vault description). A future re-run that greps and stops will
score item 11 as moved. It has not. Detail + routing (**F-o**) in the full report.

## Item 13 — built, gate-green, and now live

The homepage block names **only** what was re-probed live the day it was written:

| Surface | Live at authoring `[D]` |
|---|---|
| `/llms.txt` | 200 `text/plain`, 3,137 B |
| `/llms-full.txt` | 200 `text/plain`, 950,827 B |
| `.md` twins | 10/10 → 200 `text/markdown` (both `/x.md` and `/x/.md`) |
| `/api/registry.v1.json` | 200 `application/json`, 80,997 B |

The twin count the block renders — **222** — is **derived** from `site/src/data/twin_manifest.json`,
the same manifest that drives twin emission and negotiation, never typed (KW-14 / convention 1).
The build's own log corroborates it independently: *"advertised 222 via rel=alternate; corpus 929 KB
from 222 page(s); manifest lists 222 total."*

⛔ **Deliberately absent from the block**: any mention of a server, an install line, `npx`, or MCP.
Verified by sweeping the **rendered** output rather than the source (convention 7 — same-diff is
blind to a false sentence): `mcp` · `npx` · `adna-mcp-server` · `npm install` ·
`Model Context Protocol` → **0 occurrences each** in `dist/index.html`; `adna-mcp-server` → **0 files**
site-wide in `dist/`; no `dist/.well-known/` directory `[D]`.

## Gates + captures

| Check | Result `[D]` |
|---|---|
| Fast gate suite (`--grep-invert @audit`) | **434 tests, all green** |
| `@audit` sweep | **118 tests, all green** |
| axe, homepage, **dark** | **0 violations** |
| axe, homepage, **light** | **0 violations** (run twice — `--axe` covers `themes[0]` only) |
| T0 captures | 12 PNGs — 6 viewports × dark/light → `evidence/captures_p3_3/` |
| Console errors | 0 |

⚠ **One gate went red first, and the diagnosis is the record worth keeping.** Gate-17 **G15**
(*"one Vary-carrying negotiation route per twin"*) failed on a perfectly good tree. Cause: G15 asserts
against `.vercel/output/config.json` routes emitted by `scripts/inject_negotiation.mjs`, a
**deploy-script-owned post-build step** (`deploy_adna.sh:77`) that `npx astro build` does not run.
Running the step turned it green; **no code was changed**. This is convention 6's own instruction —
*diagnose a red gate by asking which step produces the thing it asserts* — working as written.

⇒ **But it exposes a real guard defect, routed as F-p.** G15's skip guard is
`test.skip(!existsSync(configPath), 'run npx astro build …')`. That file exists as soon as *any*
inject step has run — so running `inject_redirects.mjs` alone (exactly what convention 6 tells you to
do outside a deploy) leaves G15 **unskipped and guaranteed to fail**, with a skip message that names
the wrong remedy (a bare `astro build`, which does not inject at all). The guard checks for the
*file*, not for the *routes it asserts on*.

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
probe_scope: local_build_only    # ⚠ NOT live-verified. Flips to live_alias_verified at the deploy.
deploy_tree:                     # unfilled — no deploy this session
deploy_record:                   # unfilled — no deploy this session
full_report: evidence/machine_eye/conformance_report_p3_3.md
tags: [evidence, haussmann, p3_3, machine_eye, d10, deferred_publish]
---

# Machine-eye delta — items 11 / 13 after P3.3

> ⚠ **THIS PACKET IS MEASURED AGAINST THE LOCAL BUILD, NOT PRODUCTION.** Nothing below is confirmed
> on `adna.network`; the live re-probe is owed at the deploy GO. **This banner is written to be
> struck by that probe** — struck, not deleted, per the P3.2 packet's discipline.
>
> Local-green is evidence about the build; it is not evidence about the site. Convention 14 exists
> because `check_live_headers.mjs` printed `OK — no drift` for months while reading Vercel's login
> page, and a delta packet whose target is unstated invites the same reading.
>
> The full 13-item re-run — including the rows P3.3 did **not** touch — is
> [[conformance_report_p3_3]]. This packet covers only what this mission moved.

Baseline: `machine_eye.md` (2026-08-16, pinned `d58ea13`). All rows `[D]`.

## Result

| Item | Baseline (2026-08-16) | Now (P3.3, **local build**) | Δ |
|---|---|---|---|
| **11** MCP server | **ABSENT — no server, no endpoint, only one incidental mention** | ⏸ **STILL ABSENT.** `/.well-known/mcp.json` → **404**, `/mcp` → **404** (both re-probed live). Server built + red-tested at `mcp/`, **unpublished** | ⏸ **UNMOVED — deliberately** |
| **13** Self-conformance | *"Real, specific, findable — but narrative, on one deep page, not the homepage, and not machine-checkable"* | Homepage `machine-door` block built: the self-conformance sentence **plus** the three live machine surfaces named. **Not deployed** — live homepage still greps **0** | ⏸ **pending deploy** |

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

## Item 13 — built, gate-green, and not live

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

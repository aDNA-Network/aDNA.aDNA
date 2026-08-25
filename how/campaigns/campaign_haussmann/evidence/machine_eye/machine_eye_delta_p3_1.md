---
type: evidence
packet: machine_eye_delta
campaign: campaign_haussmann
mission: mission_haussmann_p3_1_md_twins
objective: O3
title: "Machine-eye delta — production, 2026-08-21 (items 2/3/4/12 after P3.1)"
created: 2026-08-21
updated: 2026-08-21
status: active
last_edited_by: agent_rosetta
probe_target: https://adna.network
deploy_tree: f053431
tags: [evidence, haussmann, p3_1, machine_eye, d10]
---

# Machine-eye delta — items 2 / 3 / 4 / 12 after P3.1

All rows `[D]` — live production probes run **2026-08-21**, against deploy `tree=f053431`
(`deploy_record: 2026-08-21T19:21:07Z mode=prod`). Baselines: the genesis packet
`machine_eye.md` (2026-08-16, pinned `d58ea13`) and `machine_eye_delta_p2_6.md` (2026-08-19).

## Result

| Item | Baseline (08-16, re-confirmed 08-19) | Now (08-21) | Δ |
|---|---|---|---|
| **2** `/llms-full.txt` | *"index, not full-corpus — and the name overclaims"*; 2,018 B → 2,476 B | **940,718 B · 221 sections** | ▲ **moved** |
| **3** `.md` twins | **10/10 → 404**; *"confirms no markdown-twin route exists at all"* | **10/10 → 200**, `text/markdown` | ▲ **moved** |
| **4** `Accept: text/markdown` | byte-identical body, **literal same ETag**, no `Vary` | **5/5 markdown, ETag differs, `Vary: Accept`** | ▲ **moved** |
| **12** `llms` in page HTML | **0 occurrences** across all 8 pages probed | **2 per page** + `rel=alternate` per page | ▲ **moved** |

## Item 3 — and the 7/10 that came first

The first prod probe scored **7/10**, not 10/10. The three failures were all one shape:
`/get-started/.md` — trailing slash before the suffix.

Recorded because the resolution is the point. That shape is not malformed from the agent's side:
every canonical URL on this site ends in a slash, and `llms.txt` states a twin is *"the same path
with a `.md` suffix"*. An agent following that instruction literally builds `/get-started/.md`. The
7/10 was the site failing the URL an agent naturally constructs, not the probe testing a silly one.

`inject_negotiation.mjs` now emits two routes per twin (442 total), and the re-probe is 10/10. The
alternative — declaring 7/10 a pass and calling the other three a probe artifact — would have been
a claim moving up to meet the result rather than down to meet the evidence.

```
/learn/what-is-adna.md      200      /learn/what-is-adna/.md   200
/reference/specification.md 200      /get-started/.md          200
/get-started.md             200      /vaults/.md               200
/vaults.md                  200      /glossary/.md             200
/network.md                 200
/glossary.md                200                                 → 10/10
```

## Item 4 — the header that did nothing

Baseline `[D]`: *"identical `HTTP 200`, identical `content-type: text/html`, byte-identical body …
`etag` on `/get-started` is the literal same value for both the default and the
`Accept: text/markdown` request — Vercel is serving one cached static object regardless of
`Accept`. No `Vary` header."*

Now, 5/5 probed:

| Route | default ETag | `Accept: text/markdown` ETag | ct | Vary |
|---|---|---|---|---|
| `/learn/what-is-adna/` | `e8b3ff55…` | `558ddd2a…` | `text/markdown` | `Accept` |
| `/get-started/` | `3a8f6de3…` | `743670c9…` | `text/markdown` | `Accept` |
| `/about/` | `74c9249c…` | `2a595794…` | `text/markdown` | `Accept` |
| `/vaults/` | `cbc92b68…` | `813c88c1…` | `text/markdown` | `Accept` |
| `/glossary/` | `8f48df4d…` | `e9ff8f84…` | `text/markdown` | `Accept` |

Nothing manipulates an ETag. The finding was one object serving two requests; the fix is a
genuinely different object, and the differing ETag follows from that.

## Negative control — the probe that had to keep failing

A negotiation implementation is only correct if it leaves the un-twinned routes alone. Blanket
rewriting would have turned working HTML into a 404 for exactly the clients this work serves.

| Route | `Accept: text/markdown` | Expected |
|---|---|---|
| `/design-system/` | `200 text/html` | HTML — no twin by decision |
| `/vaults/graph/` | `200 text/html` | HTML — no twin by decision |

Both correct. These three routes (with `/404`) also carry **no** `rel=alternate`, so nothing
advertises a twin that does not exist.

## Item 12 — findable, not merely present

Baseline `[D]`: *"literal string `llms` appears **zero** times across all 8 saved HTML pages … an
agent has to already know the convention."* Now 2 per page on `/`, `/get-started/`, `/about/`,
`/vaults/`, `/community/` — a footer link and a per-page
`<link rel="alternate" type="text/markdown">`. `robots.txt` names both artifacts.

## What this delta does NOT claim

**Anchor 4 is not claimed here.** Three of its four bullets were the hard failures; twins and the
advertised `llms.txt` are now closed, but the **machine-readable registry endpoint is P3.2's**, and
JSON-LD depth is P3.2/P3.3. A re-score belongs to **P5.2** with fresh isolated scorers, not to the
mission that did the building — the builder never self-certifies (convention 4).

Items 1, 5–11, 13–15 were **not re-probed** and carry their 08-16 verdicts. Item 7 (stale RSS) was
partly addressed by P2.3's changelog work but is not measured here.

## Instrument note — two defects found in the verification chain itself

Both surfaced by using the tools rather than by auditing them, and both are recorded because they
affect evidence beyond this mission.

1. **`check_live_headers.mjs` passed without reaching the site.** It follows redirects and checks
   header *names* only. On a Deployment-Protection-gated URL it lands on `vercel.com/sso-api`,
   whose login page sets the same four names — so it read Vercel's CSP and reported
   `OK — no drift`. It would have passed for any deployment, including one with no headers.
   Hardened to assert `res.ok` + same-origin; red-tested (gated URL → `CANNOT VERIFY`,
   adna.network → genuine 4/4). Still names-not-values → **handed to P4.4**.

2. **`deploy_adna.sh` verified the wrong URL, every time.** It checked `$URL`, the per-deployment
   `*.vercel.app` address, which is gated on **prod as well as preview**. So the step has never
   once verified `adna.network` since P0.2 built it. Prod now verifies the public alias.

   **Consequence for P0.2's evidence**: that mission built header hardening *on preview deploys
   only* and verified it with this script. Its header claims should be re-read against the alias
   before being relied on. Flagged, not acted on — P0.2 is not this mission's lane.

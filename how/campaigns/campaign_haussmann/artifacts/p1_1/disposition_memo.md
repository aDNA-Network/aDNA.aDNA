---
type: artifact
artifact_type: disposition_memo
campaign_id: campaign_haussmann
mission: mission_haussmann_p1_1_claim_purge
title: "P1.1 O0 — per-row disposition memo: 8 FALSE + 19 unsupported"
created: 2026-08-17
updated: 2026-08-17
status: active
last_edited_by: agent_rosetta
tags: [haussmann, p1_1, claims, disposition]
---

# P1.1 O0 — Disposition memo

> Source of record: `evidence/claims/claim_register.md` (B5). Direction fixed by campaign law:
> **claims move DOWN to verifiability — unless the operator elects to ship the claimed thing.**
> All drafted copy inherits ADR-048 language (definition-as-hero package + embargo pair + avoid-list).
> Every source location re-verified on disk this session `[D 2026-08-17]`.

## 1 · The 8 FALSE claims (9 fixture rows) — dispositions

| Row | Source `[D]` | Disposition | Replacement (draft) |
|---|---|---|---|
| **R-14** (+R-13, +R-12 update) | `site/src/components/sections/HomeHero.astro:76` (default `lead`, consumed by `/`) | **Hero swap — ADR-048 candidate-A verbatim** (no election; DP2 already ratified it) | Lead: *"aDNA (agentic DNA) is an open standard for organizing a project's files so AI agents — and the people working with them — always know where things live: three folders, plain Markdown, versioned in git. This site is the standard, its docs, and the registry of workspaces — 'vaults' — that run it."* + audience sub *"For teams working with agentic coding tools on real projects."* + NOT-line *"Not a product or service — no server, no signup, nothing leaves your machine."* Lyric ("Language and DNA were co-created…for the good of all.") demoted **intact** to a movement band directly below the fold. Trust-link keeps the honest R-15 phrasing (becomes the fold's only protocol positioning). Kills R-14 ("open coordination protocol") **and** R-13 (the "lives" avoid-class). Same-diff: gate-23 A11/A12 constants, fixture R-12 quote. |
| **R-20** | `site/src/pages/index.astro:105` (democracy pillar "Open") | Copy down | *"MIT-licensed — the spec, the tooling, and the registry are all public."* (registry data + pages are public `[D]`; vault contents claim dropped) |
| **R-23** | `site/src/pages/index.astro:123–124` | Copy down (quantifier) | *"Every vault is a real, governed context graph with its own place in the network — most tended by a named agent. Here's a slice across {vaultCount} of them."* (62/74 have personas `[D]`; "its own history" dropped — no history fields exist) |
| **R-23b** | `site/src/pages/vaults/index.astro:55` | Copy down (quantifier + tense) | *"Every vault below is a real, governed context graph with its own place in the network — most tended by a named agent. Each project grows its own graph; they connect by cited relationships."* |
| **R-46** | `site/src/pages/community/index.astro:83` | **⛩ ELECTION** — ship Discussions vs. copy down | Ship: enable Discussions on `aDNA-Network/aDNA` + seed categories → copy stays true. Copy-down: *"…through the public repository's issues; questions and ideas are welcome there too."* |
| **R-47** | same line | **⛩ ELECTION** — ship templates vs. copy down | Ship: push the staged `.github/ISSUE_TEMPLATE/` (bug_report.md · change_proposal.md · config.yml, Refit M6, verified on disk `[D]`) to `aDNA-Network/aDNA`. ⚠ config.yml's contact link points at Discussions — shipping templates without Discussions leaves a dead contact link (couple the two). |
| **R-61** | `site/src/pages/about.astro:89` | Copy down (quantifier) | *"Most vaults are 'tended by' a named agent — and we name them as exactly that."* |
| **R-84** | `site/src/pages/compliance/index.astro:31` | **⛩ ELECTION** — state truth vs. start signing | Truth (recommended): *"Git as second witness: every commit is attributed and dated; session records cross-reference the commit."* (Even enabling signing forward leaves history unsigned — "every commit is signed" stays false either way.) |
| **R-90** | `site/src/data/vaults.json` `github_url` → rendered `site/src/pages/vaults/[slug].astro:89` | **⛩ ELECTION** — projection fix vs. data-only | Projection (recommended, pt19-safe): render external repo links only when the URL is in a committed `verified_links` fixture (probe-verified when added; currently empty → the dead link disappears at build). PLUS a staged Hestia memo: the inventory carries a dead `github_url` — fix at source at next operator-GO'd regen. Data-only: memo alone; the 404 link stays live until regen. |

## 2 · The 19 unsupported claims — dispositions (campaign-law lane, no election needed)

| Row | Source `[D]` | Disposition | Replacement (draft) |
|---|---|---|---|
| R-13 | HomeHero default lead | **Resolved by hero swap** (avoid-class "lives") | — |
| R-15 | hero trust-link + 3 pages | **Keep — becomes the only protocol phrasing** (the honest pair; ADR-048) | unchanged |
| R-18 | `index.astro:82` (`proofLead`) | Copy down + avoid-class ("lives") | *"Four public-good subnetworks are taking shape here —"* (count = G-09 verified) |
| R-27 | `index.astro:195` | Copy down ("community-driven") | *"aDNA is an open specification — MIT licensed, open to contribution, designed for extension."* |
| R-28 | `index.astro:216` | Copy down ("already steward") | *"Mission-aligned subnetworks are taking shape around real public-good work."* |
| R-30 | `network.astro:58` | Copy down (node→vault level) | *"…Vaults connect through real, directed relationships, and each node decides what stays local and what it shares."* |
| R-36 | `network.astro:224` | Copy down (no cadence artifact) | gov-tag → *"Versioned releases · v2.5 current"* (derived from `STANDARD_VERSION`, never typed — KW-14) |
| R-38 | `network.astro:193` | Scope to design-fact | *"By design, what crosses the boundary is a curated slice of your Home.aDNA registry — …"* |
| R-48 | `commons.astro:23,102` | Copy down (present-tense activity) | *"Mission-aligned subnetworks are taking shape here — so the abundance AI creates belongs to everyone. See them, check them, connect to them."* (meta description matched) |
| R-49 | `commons.astro:114` | Copy down ("open" fails 3/4) | *"Real public-good missions on the aDNA network — each one named, cited, and honest about its stage."* |
| R-50 | `subnetworks.json` WGA blurb | Drop unverifiable governance specificity | *"The World Genome Academy is building genomics education and research programs — the science stewarded, not enclosed. Its public face is live at worldgeno.me."* |
| R-51 | `subnetworks.json:53` steward | State the truth | *"Founding-steward today — community governance as it grows"* |
| R-54 | `subnetworks.json:83,103` | Drop council claim (not in public repo) | *"…governed under the Wilhelm Foundation, with a canonical home at Wilhelm-Foundation/rare-archive."* steward: *"Mnemosyne · anchor Wilhelm Foundation"* |
| R-56 | `commons.astro:132` | Drop the universal | *"Three paths, in increasing depth — no account, no waitlist."* + path-1 copy names only followable public artifacts |
| R-62 | `about.astro:173–176` | Copy down now; **P1.2 rebuilds the surface** | Title: *"The work: public-good missions taking shape"*; sub: *"The network is young and says so — one subnetwork ships public code today (the open Rare Archive); three more are taking shape with real institutional anchors."* |
| R-70 | `learn/what-is-adna.astro:59` | Drop market superlative | *"Most teams improvise with long READMEs and custom prompts, and none of it survives across sessions, agents, or teams. aDNA is one open answer…"* |
| R-79 | `researchers/index.astro:45` | Drop unavailable-command claim | *"The publish flow requires the FAIR block up front — license, creators, keywords, identifier, provenance — so FAIR compliance is not a separate checklist."* |
| R-83 | `/enterprise` walkthrough | **No change** — disclosed + labeled (register's own adjudication); keep label glued | — |
| R-93 | `vaults/index.astro:120` | Fix mischaracterization | *"Every vault here is a real, governed context graph, published through an open pipeline — the generator is public and yours to run."* |

## 3 · Flags for the operator (not P1.1 edits)

- **Parallel-lane artifact, uncommitted** `[D]`: `artifacts/quality_instrument_binding.md` + `what/doctrine/doctrine_web_quality_assessment.md` + `how/skills/skill_web_quality_sweep.md` + `what/context/context_web_quality_toolkit.md` (authored 2026-08-17, post-Gate-C). Its staged binding actions (campaign convention 13 append, ADR-057 amendment) are that lane's to land — P1.1 leaves them untouched and stages nothing over them.
- **P0.4**: still no Aspasia reply (`Fluxer.aDNA/who/coordination/` outbound-only `[D]`); honest no-link fallback holds.
- `subnetworks.json` is a hand-curated site fixture (no generator references it `[D]`) — editing it is a site-copy edit, not a pt19 registry-data act.

## 4 · Election record (operator, in-chat `AskUserQuestion`, 2026-08-17, P1.1 session)

| Election | Ruling |
|---|---|
| R-46/R-47 channels | **Custom directive**: the funnel routes to **the aDNA-Network GitHub** and **the Fluxer at community.adna.network**. Follow-up elections: GitHub = **issues only** (push staged templates; edit `config.yml` to drop the Discussions contact link; NO Discussions enablement) · Fluxer = **⚠ OVERRIDE — link it now**, overriding the P0.4/ADR-054 prerequisite gating (probe 2026-08-17: live, but `legal.*` null + unbranded + no Aspasia ack). Deviation recorded in ADR-054 §Operator ruling; the link ships in the honest-state pattern (what it is, its early state, human-only per aDNALabs ADR-025), copy law clause 3 binding. |
| R-84 signing | **State the truth** — "every commit is attributed and dated". |
| R-90 dead link | **Projection fix + Hestia memo** — verified-links fixture gates external repo link rendering; staged memo asks Hestia to fix the inventory at source at next GO'd regen. |

Residual risk accepted by the operator on the Fluxer link: the site links a surface that currently has no
ToS/privacy and no aDNA branding; mitigation = honest-state framing naming exactly that, and P3.4/DP7 still
owns full integration.

## 5 · Hostile-read adjudication (O4, fresh adversarial agent, 204 pages, 2026-08-17)

Verdict as delivered: **18 findings (4× S1 · 7× S2 · 3× S3 · 4× S4)** — B5 covered 16 key surfaces; the
hostile sweep found the debt on the pages B5 never adjudicated (/privacy, /security, /enterprise,
concept/reference leaves). Disposition, all 18:

| # | Finding (short) | Disposition |
|---|---|---|
| 1 | S1 — "are all public" survived in my own R-20 reword | ✅ FIXED — "the spec, the workspace image, and the registry data are public" |
| 2 | S1 — /privacy links dead Discussions | ✅ FIXED — issues-only, dead const removed |
| 3 | S1 — SECURITY.md 404 | ✅ **SHIPPED** (⛩ GO) — SECURITY.md pushed to the image (`d4742db..b64b81e`), 200 live |
| 4 | S1 — private vulnerability reporting disabled | ✅ **SHIPPED** (⛩ GO) — enabled via API, verified `true`; the page's primary channel is real |
| 5 | S2 — /enterprise "works now" on unreleased CLI | ✅ FIXED — "specified + runs on the founding fleet; reference CLI not yet publicly released" (scope ¶ + eval table) |
| 6 | S2 — registry-admission CTAs w/o mechanism | ✅ FIXED — "Start your own vault" / "How this registry is built" |
| 7 | S2 — "Open governance" chip on unreachable records | ✅ FIXED — chip → "Governance on record" |
| 8 | S2 — ContextCommons "community-driven" in registry data | → ROUTED (pt19): Hestia memo row 1 |
| 9 | S2 — "standard grows through community contribution" + "Open governance" control label | ✅ FIXED — built-to-grow phrasing + "Founding-Architect stewardship, in public" |
| 10 | S2 — RFC step names nonexistent `standard-change` label | ✅ FIXED — cites the shipped "Change proposal" template |
| 11 | S2 — /network title+meta plural-computers | ✅ FIXED (meta → "vaults connect") · title ADJUDICATED-KEEP (definitional register — the page defines what an aDNA computer is) |
| 12 | S3 — /privacy "community, open-source project" | ✅ FIXED — "an open-source project" |
| 13 | S3 — use-case leaves lack illustrative disclosure | ✅ FIXED — per-leaf "Illustrative scenario" note (mirrors R-76) |
| 14 | S3 — context-democracy definition + "help govern" CTA | CTA ✅ FIXED ("shape the standard") · definition ADJUDICATED-KEEP (definition register; hostile read itself: "mostly protects it") |
| 15 | S4 — "estimated quarterly" hedge | ✅ FIXED — "As needed" |
| 16 | S4 — SuperLeague note carries personal names | → ROUTED (pt19): Hestia memo row 2 |
| 17 | S4 — "every decision on the record" universal | ✅ FIXED — "the load-bearing decisions on the record as public ADRs" |
| 18 | S4 — community-processes Steward present tense | ADJUDICATED-KEEP — designed-process register; mechanics verified real by the auditor; P4.5 voice pass owns polish |

Post-burn-down: rebuild 203pp + suite **407/407 green, zero xfail**; SECURITY.md 200 both URLs.
Credit register additions from the auditor: the Fluxer disclosure, the commons follow-path scoping, /about,
the exchange tutorial's TAUGHT-AS-DESIGN labeling, and all load-bearing numbers verified clean.

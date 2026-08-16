---
type: evidence
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_claude
tags: [haussmann, evidence, b1, page-inventory, adna-network]
---

# Evidence Packet B1 — Page Inventory (`https://adna.network`)

Generated 2026-08-16T17:09:59.656Z by automated crawl (`scripts/crawl_haussmann_b1.mjs`, run from scratchpad). Source: sitemap at `https://adna.network/sitemap-0.xml`.

Provenance: `[D]` directly observed via live HTTP fetch + markup parse. `[I]` inferred (rule-based on URL structure / sitemap shape, documented per rule). No field in this packet is `[A]` assumption or `[R]` third-party reported.

## 0. Crawl scope [D]

- Sitemap entries: **202** (unique normalized paths: **202**)
- Fetched: **202/202** (concurrency 5, 120ms stagger per worker)
- Non-200 responses: **0**
- Fetch-level errors (network/exception): **0**

## 1. Template census [I]

`template_guess` inferred from URL structure (hub-vs-leaf detected from sitemap nesting) + observed markup shape (body class checked but found uniform — see §7). Rule table in the crawl script (`classify()`).

| template_guess | count | % |
|---|---:|---:|
| vault-detail | 74 | 36.6% |
| doc-article | 66 | 32.7% |
| glossary | 25 | 12.4% |
| persona | 14 | 6.9% |
| hub | 13 | 6.4% |
| registry-index | 4 | 2.0% |
| legal | 3 | 1.5% |
| home | 1 | 0.5% |
| changelog | 1 | 0.5% |
| graph | 1 | 0.5% |
| **total** | **202** | 100.0% |

## 2. Classification census [I]

Taxonomy: marketing / concept / tutorial / how-to / reference / governance / registry / meta.

| classification | count | % |
|---|---:|---:|
| registry | 78 | 38.6% |
| reference | 47 | 23.3% |
| concept | 22 | 10.9% |
| marketing | 18 | 8.9% |
| tutorial | 15 | 7.4% |
| how-to | 13 | 6.4% |
| governance | 7 | 3.5% |
| meta | 2 | 1.0% |
| **total** | **202** | 100.0% |

## 3. Depth-from-home histogram [D]

BFS edge-count from `/` over the crawled internal-link graph (home = depth 0).

| depth | count | % |
|---|---:|---:|
| 0 | 1 | 0.5% |
| 1 | 48 | 23.8% |
| 2 | 142 | 70.3% |
| 3 | 11 | 5.4% |

## 4. Orphans — in sitemap, unreachable by internal-link BFS from home [D]

None. Every sitemap URL is reachable from `/` via internal links.

Additionally, **2** internal link target(s) were observed in page markup but are NOT in the sitemap. Each was fetched directly to confirm live status [D]:

| link target | http status |
|---|:---:|
| `/patterns/content-as-code/` | 404 |
| `/reference/design-rationale/template_bare/` | 404 |

Separately, **14** distinct `.md` link target(s) were observed in page markup (raw-markdown / agent-facing content twins — excluded from the page-graph above since they are not distinct rendered HTML pages, relevant instead to the campaign's B.2 machine-eye ".md twin resolution" check) [D]:

- `/README.md`
- `/how/skills/AGENTS.md`
- `/reference/agent-first-guide/adna_design.md`
- `/reference/agent-first-guide/adna_standard.md`
- `/reference/agent-first-guide/migration_guide.md`
- `/reference/design-rationale/01_adna_standard.md`
- `/reference/migration-guide/adna_bridge_patterns.md`
- `/reference/migration-guide/adna_design.md`
- `/reference/migration-guide/adna_standard.md`
- `/reference/reading-guide/adna_design.md`
- `/reference/reading-guide/adna_standard.md`
- `/reference/reading-guide/agent_first_guide.md`
- `/reference/reading-guide/migration_guide.md`
- `/reference/reading-guide/projects_folder_pattern.md`

## 5. High-value page reachability (≤2 clicks from home) [D]

| page | in sitemap | depth from home | ≤2 clicks |
|---|:---:|:---:|:---:|
| `/get-started/` | yes | 1 | YES |
| `/learn/what-is-adna/` | yes | 1 | YES |
| `/reference/specification/` | yes | 1 | YES |
| `/vaults/` | yes | 1 | YES |
| `/vaults/graph/` | yes | 1 | YES |
| `/community/` | yes | 1 | YES |
| `/glossary/` | yes | 1 | YES |
| `/changelog/` | yes | 1 | YES |
| `/network/` | yes | 1 | YES |
| `/commons/` | yes | 1 | YES |

**10/10** high-value pages reachable in ≤2 clicks from home.

## 6. URL-casing census [D]

- All-lowercase path segments: **178/202** (88.1%)
- ≥1 mixed-case path segment: **24/202** (11.9%)

Mixed-case URLs (flagged segment(s) in bold):

- `/vaults/aDNA.aDNA/` — segment(s): **aDNA.aDNA**
- `/vaults/Astro.aDNA/` — segment(s): **Astro.aDNA**
- `/vaults/CakeHealth.aDNA/` — segment(s): **CakeHealth.aDNA**
- `/vaults/ComfyUI.aDNA/` — segment(s): **ComfyUI.aDNA**
- `/vaults/ContextCommons.aDNA/` — segment(s): **ContextCommons.aDNA**
- `/vaults/Harness.aDNA/` — segment(s): **Harness.aDNA**
- `/vaults/Home.aDNA/` — segment(s): **Home.aDNA**
- `/vaults/III.aDNA/` — segment(s): **III.aDNA**
- `/vaults/LAVentureGraph.aDNA/` — segment(s): **LAVentureGraph.aDNA**
- `/vaults/Molecules.aDNA/` — segment(s): **Molecules.aDNA**
- `/vaults/Network.aDNA/` — segment(s): **Network.aDNA**
- `/vaults/Obsidian.aDNA/` — segment(s): **Obsidian.aDNA**
- `/vaults/Operations.aDNA/` — segment(s): **Operations.aDNA**
- `/vaults/Oration.aDNA/` — segment(s): **Oration.aDNA**
- `/vaults/RareArchive.aDNA/` — segment(s): **RareArchive.aDNA**
- `/vaults/RemoteControl.aDNA/` — segment(s): **RemoteControl.aDNA**
- `/vaults/Spacemacs.aDNA/` — segment(s): **Spacemacs.aDNA**
- `/vaults/SuperLeague.aDNA/` — segment(s): **SuperLeague.aDNA**
- `/vaults/TappProtocol.aDNA/` — segment(s): **TappProtocol.aDNA**
- `/vaults/VAAS.aDNA/` — segment(s): **VAAS.aDNA**
- `/vaults/Videos.aDNA/` — segment(s): **Videos.aDNA**
- `/vaults/wga.aDNA/` — segment(s): **wga.aDNA**
- `/vaults/WilhelmAI.aDNA/` — segment(s): **WilhelmAI.aDNA**
- `/vaults/zeta.aDNA/` — segment(s): **zeta.aDNA**

## 7. Notable observations [D unless marked I]

- **No 404s / non-200s in sitemap** — all 202 sitemap URLs returned HTTP 200. [D]
- **No redirects observed** — every sitemap URL served its content directly (no 3xx hop); root-relative nav hrefs without a trailing slash (e.g. `/about`) and the sitemap’s trailing-slash form (`/about/`) both resolve to HTTP 200 with identical content on this deployment, so the missing/present trailing slash in nav markup is cosmetic, not a live redirect cost. [D]
- **Malformed \<title\> — empty template field** — 1 page(s) show a doubled em-dash separator (`— —`), indicating an empty interpolated field (e.g. missing persona name) in the title-generation template: `/vaults/Astro.aDNA/` = "Astro — — — aDNA". [D]
- **Duplicate \<title\> values** — 4 title string(s) reused across multiple URLs: "Educator — aDNA" on `/adopters/adopter-educator/`, `/use-cases/educator/`; "Enterprise Team — aDNA" on `/adopters/adopter-enterprise-team/`, `/use-cases/enterprise-team/`; "Solo Developer — aDNA" on `/adopters/adopter-solo-developer/`, `/use-cases/solo-developer/`; "Startup — aDNA" on `/adopters/adopter-startup/`, `/use-cases/startup/`. [D]
- **No missing meta descriptions** — every page has a `<meta name="description">`. [D]
- **Over-long titles** — 2 page(s) exceed 60 characters (avg title length across all pages: 23.8 chars). Longest: `/vaults/exchange/` (104ch: "Exchange — triad: mnemosyne (registry) / hermes (transport) / themis (settlement); Berthier coord — aDNA"); `/learn/tutorials/exchange-adoption-path/` (65ch: "Adopt via the Exchange: Pull → Build-to-Spec → Memorialize — aDNA"). [D]
- **Over-long meta descriptions** — 27 page(s) exceed 160 characters (see page_inventory.csv). [D]
- **Classification rule coverage complete** — every one of the 202 sitemap URLs matched a specific rule in the classification table; none fell through to the generic fallback. [I]
- **Three parallel persona/audience IA branches** — the sitemap carries persona-oriented content in three separate places: 3 top-level audience page(s) (`/educators/`, `/enterprise/`, `/researchers/`), 5 under `/adopters/adopter-*/`, and 6 under `/use-cases/*/` — largely the same persona set (educator, enterprise, researcher, solo-developer, startup) addressed by up to three different URLs. Worth an IA-consolidation question for the campaign. [D] (structure) / [I] (overlap characterization).
- **Global-nav inbound-count ceiling effect** — pages linked from the persistent header/footer nav (e.g. `/vaults/`, `/glossary/`, `/learn/`, `/how/`, `/patterns/`, `/reference/`, `/get-started/`, `/network/`, `/commons/`, `/community/`, `/changelog/`, `/about/`) show inbound_link_count near the full crawled-page total by construction, not because of exceptional in-content linking. Treat inbound counts as meaningful primarily for pages *not* in the persistent nav (their inbound count reflects genuine in-content cross-linking). [D]

## 8. Methodology notes [D]

- `word_count`: HTML fetched with JS disabled (raw server-rendered markup, matching a non-JS agent read); `<script>`, `<style>`, `<noscript>`, `<template>`, `<svg>`, and comments stripped before tokenizing on whitespace. Does not account for CSS `display:none` content (none detected by spot-check, not exhaustively verified).
- `internal_links_out` / graph edges: deduped, same-origin, non-asset `<a href>` targets per page, normalized to trailing-slash pathnames, self-loops removed. Assets (`/_astro/*`, any path whose final segment has a file extension) excluded from the page graph.
- `inbound_link_count`: count of distinct crawled pages whose `internal_links_out` includes the URL (not raw occurrence count).
- `depth_from_home`: BFS edge-count from `/`, computed over the crawled edge set (only pages that returned HTML contribute outbound edges).
- `template_guess` / `classification`: rule-based on URL path structure + sitemap-derived hub/leaf detection (a path is a "hub" if any other sitemap path is nested beneath it). Body `class` was inspected across sample pages (home / vault-detail / glossary / vaults-index) and found uniform (`min-h-screen flex flex-col`) — Astro/Tailwind utility classes on `<body>`, not template-differentiating — so template differentiation relies on URL structure and sitemap nesting rather than body class. Full rule table: `classify()` in the crawl script.
- Crawl script preserved at `/private/tmp/claude-501/-Users-stanley-aDNA-aDNA-aDNA/234be40f-777d-40c0-8da1-53617198bd7c/scratchpad/crawl_haussmann_b1.mjs`; raw per-page JSON crawl dump (all fields, incl. `error`/`redirected`/`content_type`) at `/private/tmp/claude-501/-Users-stanley-aDNA-aDNA-aDNA/234be40f-777d-40c0-8da1-53617198bd7c/scratchpad/haussmann_b1_raw_crawl.json` (scratchpad only, not committed as a campaign artifact).

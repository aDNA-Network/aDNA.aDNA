---
plan_id: mission_haussmann_p3_2_registry_json
type: plan
title: "P3.2 — The registry as data: a versioned JSON endpoint + Organization/Dataset structured data"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: completed   # ✅ 2026-08-21 — 3/3 acceptance criteria; AAR below (SO#5). Built, gated 552/552 zero xfail, 12 assertions red-proven, axe 0 ×2 themes. ⛩ DEPLOYED 2026-08-21 (`tree=861e871`, deploy record `2026-08-22T00:29:33Z`) — the ⛩ prod GO fired in the following session; every machine-eye row re-probed against the ALIAS and held unchanged from the local build; delta packet re-stamped `probe_scope: live_alias_verified`. ⛩ DP6 RATIFIED 2026-08-19 — activated. RESCOPED DOWN: the "no Organization JSON-LD, no sameAs" premise is FALSE — both shipped at P1.2 as a side effect of canonical-identity single-sourcing, uncredited (seo.ts:11 says so in its own comment). ⊳ D-I ruled the nested WebSite.publisher form SATISFIES the Organization half; saved budget goes to the endpoint.
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~90–140 kT in 1 session: versioned public JSON endpoint (4 obvious paths still 404) + Dataset on the registry + schema-dts in the build + the three zero-JSON-LD pages + endpoint derived from the SAME build snapshot as the HTML (zero drift, KW-8) + gates. Lowered from ~120–180 kT at ⛩ DP6 2026-08-19 — Organization+sameAs already shipped at P1.2 (ADR-016/SO#11)"
token_budget_actual: "≈115 kT by content load — inside the ~90–140 kT estimate. The rescope held: the endpoint took the budget Organization+sameAs would have eaten, and the schema decision (O0) cost more than the code (O1) did"
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["machine_eye item 8 (no JSON API)", "B3 #2 (0 Organization JSON-LD site-wide)", "jsonld_census (no Dataset/sameAs)", "PEPs pattern (advertised JSON twin of the whole registry)", "toolkit B4 (schema-dts typing)"]
vitruvius_dimensions: [D10, D7]
decade_theme: agentic
webforge_patterns: [P8]
patterns_to_author: ["A3: static registry-JSON emission pattern for Tier-A registries (owed to WebForge)"]
depends_on: [mission_haussmann_p2_4_registry_redesign, mission_haussmann_p2_6_midscore]
blocks: [mission_haussmann_p3_3_mcp_server]
acceptance_criteria:
  - "A versioned public registry endpoint (e.g. /vaults.json or /api/registry.v1.json) serves the PUBLIC projection (post-P1.3 sanitized fields + tiers; schema documented + advertised from /vaults and llms.txt)"
  - "Organization JSON-LD with sameAs on every page (canonical-properties coherence, §7.1 defense); Dataset JSON-LD on the registry; schema-dts type-checking in the build; the 3 zero-JSON-LD pages covered"
  - "Endpoint content derives from the same build snapshot as the HTML (zero drift channel; KW-8 respected in its tests)"
verification_method: "curl + JSON-schema validation + gate extension (JSON-LD typed parse) + machine_eye items 8/9 re-run"
human_gate: false
tags: [plan, haussmann, p3, registry_json, jsonld]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The catalogue agents can query — and the Organization identity the whole web can verify.

## Why this mission exists

The registry exists only as HTML (4 obvious JSON paths 404) `[D]`; site-wide there is **no Organization JSON-LD at all**, no sameAs, no Dataset `[D B3/jsonld_census]` — the machine-identity layer under the clone-site defense is missing. PEPs' advertised JSON twin is the proven shape.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Public-projection schema (which of the 28 fields are public post-ADR-052; version discipline) → ADR-056 §registry | schema | — |
| O1 | Endpoint build (static emission from the projection) + advertisement (llms.txt, /vaults, docs) | endpoint | — |
| O2 | JSON-LD: Organization+sameAs sitewide (SEOHead), Dataset on registry surfaces, schema-dts in build, cover the 3 gap pages | structured data | — |
| O3 | Gates + re-runs + AAR; stage A3 upstream note | evidence + AAR | — |

## Constraints

The endpoint serves the *sanitized* projection only (P1.3's leak classes + DP4 ruling are upstream of it); versioned URL so consumers can pin; no fabricated fields (honest-absent nulls).

## Definition of done

An agent can `curl` one documented URL and get the honest registry; search engines see one verifiable Organization.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + ADR-056 + `evidence/sweep/jsonld_census.md`. Execute O0–O3.

## Progress

**COMPLETE 2026-08-21** (build-side). Session `session_stanley_20260821_162437_haussmann_p3_2`.
~~**Undeployed by ruling** — the operator set ship-scope to *build → gates green → halt for ⛩ GO*.~~
**⛩ DEPLOYED 2026-08-21** in the following session
(`session_stanley_20260821_172747_haussmann_p3_2_deploy_p3_3_open`); deploy record
`2026-08-22T00:29:33Z mode=prod tree=861e871`. The strike is deliberate — the undeployed interval
was real and a reader should see when it closed.

| O | Delivered |
|---|---|
| O0 | Public field set **derived** (union of what `/vaults/[slug]` + the card render = 19 fields); envelope + `field_coverage`; 90-day deprecation window; ADR-056 **clause 3** authored |
| O1 | `utils/registryJson.ts` (one producer) → `/vaults.json` + `/api/registry.v1.json`, **byte-identical 80,997 B**; advertised in `llms.txt`, on `/vaults`, and at the new `/reference/registry-api` |
| O2 | `Dataset` + `DataDownload` on `/vaults`; the 3 bare pages covered (**3 → 0**); `schema-dts` typing every builder; Organization+`sameAs` **verified 226/226**, not rebuilt; ADR-056 **clause 4** |
| O3 | G16–G17 (**11 assertions, 12 red-tests**); suite **541 → 552 zero xfail**; axe **0** ×2 themes, 0 console errors; `machine_eye_delta_p3_2.md`; claim rows R-130/131/132; changelog |
| O4 | *(operator-added)* Berthier ack — **adopt**, doctrine queued with a 2026-09-30 commitment |

Machine-eye **item 8 ABSENT → present** (`/vaults.json` 200, 74 vaults + 14 edges) and **item 9
moved with one half open**. ~~⚠ Both measured on the **local preview build only** — the live re-probe
is owed at the deploy GO, and the delta packet says so on its face.~~ **Live re-probe done
2026-08-21**: every row held unchanged against `https://adna.network` — 80,997 B byte-for-byte, both
routes `cmp`-identical, the other three probed paths still deliberately 404, `Dataset →
DataDownload` pointing at the live endpoint, P3.1's twins unregressed. The delta packet now reads
`probe_scope: live_alias_verified`.

## AAR (SO#5)

**Worked.** Reading the acceptance criteria against each other *before* writing code — campaign
convention 13, authored one mission ago — paid immediately: AC1's *"versioned endpoint"* and the
in-vault precedent shipped three days earlier (`/community/proposals.json`, unversioned path with
the version in the body) point different ways, and clause 7 reserves versioned URLs for breaking
changes. That is a published-interface decision with a deprecation cost, so it went to the operator
as a bounded choice rather than being guessed at. **Deriving the public field set instead of
choosing it** turned the mission's hardest judgment call into a lookup: the endpoint publishes the
union of what the registry's own pages already render, which is defensible, gate-able, and immune
to my taste. Red-proving all 11 new assertions by mutation, then confirming 34/34 green on restore.

**Didn't.** Two of my own probes were wrong before the site was. The JSON-LD census I wrote to
verify my work reported 122 "untyped" blocks and a `@type: None` — it did not walk `@graph`, so it
mis-read 121 `BreadcrumbList` and 113 `TechArticle` blocks as broken. The axe aggregation keyed on
`axe.violations` when the report emits `axeViolations`, so it summed **zero out of a field that did
not exist** — a vacuous green I only caught because I re-checked the key. Both are the same error:
**I trusted an instrument I had just written because its output was the answer I expected.** My
plan's verification chain was also incomplete — it named `inject_redirects.mjs` and missed
`inject_negotiation.mjs`, so the first full gate run went red on a perfectly good tree.

**Finding.** *The census that scoped this mission was measuring the wrong thing, and the mission
inherited its error.* `jsonld_census` reported **"0 Organization blocks, site-wide"**. There were
226, one per page, each carrying `sameAs` since P1.2 — the census counted **top-level `@type` only**
and this site nests Organization as `publisher`. DP6 caught the consequence (the rescope) but not
the cause, and the cause is that **a census which flattens nothing will report absence for anything
nested**. The same parser bug hid `BreadcrumbList` and `TechArticle` too; nobody noticed, because
those were not being counted for anything. An instrument's error surfaces only where someone acts
on the number.

**Change.** Two, both filed: gate-27 scans `.html` and `.md` and is **structurally blind to
`.json`** — the identical hole P3.1 found when 221 twins arrived unlinted — routed to **P4.4 as
F-i**, with the machine enums scope-allowlisted as API keys rather than the gate being skipped. And
`astro check` carries a **26-error pre-existing baseline** (DOM typing in inline `<script>` blocks,
7 files, none touched here), so schema-dts checking is real at authoring time but **cannot be
enforced in CI until that baseline is cleaned** — routed to **P4.4 as F-j**. Both are stated rather
than quietly worked around.

**Follow-up.** Item 9's open half — the 74 vault entity pages still describe themselves as generic
`WebPage`. Deliberately not fixed: the plausible labels are wrong (a vault is not obviously a
`Dataset`; `SoftwareSourceCode` is false for the 73 with no public repo), so typing them is a ruling
about what a vault *is*, not a relabel. Recorded open in the delta packet and the changelog.

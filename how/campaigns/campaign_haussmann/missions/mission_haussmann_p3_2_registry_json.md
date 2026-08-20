---
plan_id: mission_haussmann_p3_2_registry_json
type: plan
title: "P3.2 — The registry as data: a versioned JSON endpoint + Organization/Dataset structured data"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: queued   # ⛩ DP6 RATIFIED 2026-08-19 — activated. RESCOPED DOWN: the "no Organization JSON-LD, no sameAs" premise is FALSE — both shipped at P1.2 as a side effect of canonical-identity single-sourcing, uncredited (seo.ts:11 says so in its own comment). ⊳ D-I ruled the nested WebSite.publisher form SATISFIES the Organization half; saved budget goes to the endpoint.
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~90–140 kT in 1 session: versioned public JSON endpoint (4 obvious paths still 404) + Dataset on the registry + schema-dts in the build + the three zero-JSON-LD pages + endpoint derived from the SAME build snapshot as the HTML (zero drift, KW-8) + gates. Lowered from ~120–180 kT at ⛩ DP6 2026-08-19 — Organization+sameAs already shipped at P1.2 (ADR-016/SO#11)"
token_budget_actual:
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

*(at execution)*

## AAR (SO#5)

*(before completed)*

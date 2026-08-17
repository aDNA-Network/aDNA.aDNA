---
plan_id: mission_haussmann_p0_3_webforge_intake
type: plan
title: "P0.3 — WebForge federation intake: the site becomes a registered consumer, never a fork"
campaign: campaign_haussmann
phase: P0
decade: 1
owner: stanley
status: queued
mission_class: integration
executor_tier: sonnet   # wrapper + pin + register mechanics; the graduation ruling is the one judgment point
token_budget_estimated: "~80–130 kT in 1 session: wrapper instantiation + vault-manifest pin + intake memo + craft-floor graduation ruling prep (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["webforge_pattern_register.md P1–P15 + §3 accelerators", "dependency_map (G1 straggler gap)", "WebForge provider contract v1.2.0 §3/§5"]
vitruvius_dimensions: [D5, D12]
decade_theme: craft
webforge_patterns: [P11, P1]
patterns_to_author: []
depends_on: []
blocks: [mission_haussmann_p4_1_token_pipeline, mission_haussmann_p4_2_craft_floor]
acceptance_criteria:
  - "how/federation/webforge/ exists with CLAUDE.md + vault-manifest pin (source_vault/version/pinned_at_commit/pinned_at) per contract §5 (ADR-045 placement)"
  - "Intake ask staged to Vitruvius per contract §3 path 2 (requester + surface class + audience + data sources + deploy intent); §3-2a operator-live rider applies; single-build collision check honored"
  - "The offered craft-floor graduation (Tier 2) has a written Rosetta ruling (accept / accept-with-scope / defer + why)"
  - "branding.json + voice-mapping seeds staged from ADR-032 register (full adoption lands P4.1)"
verification_method: "wrapper files on disk + memo staged + WebForge register-row ask included; no site/ changes"
human_gate: false
tags: [plan, haussmann, p0, webforge, federation]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The directive's consumer-not-fork rule made structural.

## Why this mission exists

aDNA.aDNA is an **unregistered straggler**: the site consumes zero WebForge patterns and no `how/federation/webforge/` wrapper exists `[D dependency_map G1]` — the exact parallel-truth class WebForge flags at LatticeProtocol. Meanwhile WebForge has already **offered this vault the craft-floor graduation (Tier 2)** `[D pattern register §3.1]`, its `lock_coverage.yaml` carries a `site` surface row, and its `marketplace` reference tenant is literally "aDNA Registry". The intake unlocks P4 (tokens, craft floor) and legitimizes every pattern borrow.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Read contract §3/§5 + `template_webforge_consumer_wrapper.md` (in WebForge, read-only) | — | — |
| O1 | Instantiate `how/federation/webforge/` (CLAUDE.md + vault-manifest pin at current WebForge commit + branding.json/voice seeds from ADR-032) | wrapper | — |
| O2 | Stage the §3 ask memo to Vitruvius: surface class (bespoke 202-page site consuming patterns, not an archetype re-platform), audience, data sources (vaults.json projection), deploy intent (Vercel adna-docs); request register row + clarify whose `site` the lock-coverage row denotes | memo (joins the staged Vitruvius memo) | — |
| O3 | Rosetta ruling on the offered craft-floor graduation; record in wrapper CLAUDE.md | ruling | — |
| O4 | AAR | AAR | — |

## Constraints

ADR-045: wrapper under `how/federation/`, never graph-root. Contract §11 anti-patterns (no copied code, no wrapper-skipping). Extend-never-fork. No site/ changes this mission.

## Definition of done

The wrapper exists with a valid pin; the ask is staged; the graduation is ruled; P4 missions can cite pattern IDs through the wrapper.

## Session opening prompt

> Open this mission + campaign CLAUDE.md. Execute O0–O4 in one session. WebForge is read-only to you; everything you owe it goes in the staged memo.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*

---
plan_id: mission_haussmann_p3_1_md_twins
type: plan
title: "P3.1 — Markdown twins + content negotiation + a real llms-full corpus, and llms.txt finally linked"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: queued-provisional   # activates at the P2.6 re-plan ratification (DP6)
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~180–260 kT across 2 sessions: .md twin route generation + Accept-negotiation (Vercel pattern) + llms-full真corpus + pointer blocks + gates (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["H8 reframed (twins absent; llms-full mislabeled; llms.txt unlinked)", "machine_eye items 2/3/4/12", "MCP verified pattern (.md twins + llms pointer block atop each .md)", "toolkit B2 (ship both: physical twins + negotiation; Vercel first-party pattern)", "B3 broken .md links (the abandoned convention)"]
vitruvius_dimensions: [D10]
decade_theme: agentic
webforge_patterns: [P12]
patterns_to_author: ["A1: .md-twin emission lock + emitter for the FR-N family (owed to WebForge)"]
depends_on: [mission_haussmann_p2_1_url_normalization, mission_haussmann_p2_6_midscore]
blocks: [mission_haussmann_p3_3_mcp_server]
acceptance_criteria:
  - "Every doc/content URL resolves with a .md suffix (build-time twin generation from the content collections; registry pages included); each .md front-loads the MCP-style llms.txt pointer block"
  - "Accept: text/markdown negotiation serves markdown on prerendered pages (Vercel first-party pattern); ETag differs from HTML"
  - "llms-full.txt is a true full-corpus artifact (or renamed honestly + a full-corpus artifact added); llms.txt linked from the site chrome (footer + docs) and robots.txt comment"
  - "Machine-eye items 2/3/4/12 re-run PASS; gate coverage added (twins resolve; pointer block present; negotiation live)"
verification_method: "machine_eye re-run + curl matrix + gates (red-tested)"
human_gate: false
tags: [plan, haussmann, p3, md_twins, llms, agentic]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The agent path currently stops at anchor 3 — this mission lays the anchor-4 floor.

## Why this mission exists

`.md` twins 404 (10/10) while 29 old links point at them — a started-then-abandoned convention `[D]`; llms-full.txt is a 2 KB index wearing a corpus name; llms.txt — the one excellent artifact — is referenced zero times in the site's own HTML `[D machine_eye]`. MCP's verified pattern (twins sitewide + self-advertising pointer block) is the reference; Claude Code and 2 of 6 other agents negotiate `Accept: text/markdown` today, so ship **both** twin routes and negotiation.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Twin-generation design over the 4 content collections + bespoke pages (what has a canonical markdown source vs needs rendering-to-md) | design note | — |
| O1 | Build twins + pointer blocks; wire llms.txt into chrome + robots comment; fix the old .md link targets to the new twins | routes live | — |
| O2 | Negotiation on Vercel (first-party pattern) + true llms-full corpus generation | live | — |
| O3 | Gates + machine-eye re-run + AAR; stage the A1 pattern note upstream | evidence + AAR | — |

## Constraints

Twins derive from the same single-source content as HTML (no drift channel); ADR-056 records the versioning/URL contract; same-diff law.

## Definition of done

An agent with no prior knowledge lands anywhere, finds llms.txt from the page, and can read the whole site as markdown.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/machine_eye/machine_eye.md` + ADR-056. Execute O0–O3.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*

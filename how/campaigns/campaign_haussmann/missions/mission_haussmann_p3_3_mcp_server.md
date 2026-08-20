---
plan_id: mission_haussmann_p3_3_mcp_server
type: plan
title: "P3.3 — adna-mcp-server: the corpus as tools, self-conformance demonstrated and said out loud"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: queued   # ⛩ DP6 RATIFIED 2026-08-19 — activated. KEPT UNCHANGED: premise intact and untouched by the re-score (/.well-known/mcp.json → 404, no MCP surface exists). The most build-heavy P3 mission; human_gate stays true — npm publish is an operator act.
mission_class: build
executor_tier: opus
token_budget_estimated: "~250–350 kT across 2 sessions: server (official TS SDK; search/fetch/registry tools) + packaging (npx) + docs + homepage agent-entry statement + conformance report (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["machine_eye item 11 (no MCP server)", "D10 anchor 5 requirements", "MCP cohort evidence (live /mcp endpoint = demonstrated self-conformance; both scorers D10=5)", "Mastra pattern (@mastra/mcp-docs-server, npx one-liner)", "toolkit B3"]
vitruvius_dimensions: [D10, D1, D7]
decade_theme: agentic
webforge_patterns: []
patterns_to_author: ["A2: docs-MCP-server pattern (owed to WebForge as a module seed)"]
depends_on: [mission_haussmann_p3_1_md_twins, mission_haussmann_p3_2_registry_json]
blocks: []
acceptance_criteria:
  - "An npx-runnable MCP server (official TypeScript SDK, current spec) exposing: docs search, page fetch (the .md twins), registry query (the JSON endpoint), spec/glossary lookup"
  - "One-line install documented for Claude Code (+ generic clients); published under the org's npm scope (⛩ operator for the publish)"
  - "The homepage names the canonical agent entry point (llms.txt + the server) — and states the self-conformance fact plainly ('this site is itself an aDNA vault; here is the machine door') with register-verifiable wording"
  - "A machine-legibility conformance report (the §4.B.2 13-item checklist re-run, published or linked) — the D10 anchor-5 'demonstrated self-conformance' item"
verification_method: "initialize handshake + tool-call smoke from a fresh agent session + machine_eye full re-run + register rows for the new claims"
human_gate: true
tags: [plan, haussmann, p3, mcp, self_conformance]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> "The single strongest available proof of the product thesis… currently goes unclaimed" — this mission
> claims it, honestly.

## Why this mission exists

For a context-standard project an MCP server over its own corpus is close to mandatory (D10.12); MCP's live `/mcp` endpoint earned it a 5 from both scorers `[D cohort]`. With twins (P3.1) + registry JSON (P3.2) landed, the server is a thin, high-differentiation layer — and the homepage finally gets to say the thesis-proof sentence the register can support.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Design: tool surface, transport (stdio npx + optional hosted), versioning vs the 2026-07-28 spec, package name | design → ADR-056 §mcp | — |
| O1 | Build + smoke (fresh-agent handshake + real queries) | server + tests | — |
| O2 | Package + publish (npm scope; operator GO) + install docs | published | ⛩ operator (outward) |
| O3 | Homepage agent-entry statement + conformance report + register rows; machine-eye full re-run; AAR; stage A2 upstream | evidence + AAR | — |

## Constraints

The server serves only public artifacts (twins/JSON — the sanitization is upstream); self-conformance wording passes the editorial gate; publishing is an outward act (operator GO); no fabricated capabilities in the tool descriptions.

## Definition of done

A fresh agent adds one line, queries the standard's own corpus through MCP, and the homepage's proof-claim survives a hostile read.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + ADR-056. Execute O0–O1; halt at O2 for the publish GO; then O3.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*

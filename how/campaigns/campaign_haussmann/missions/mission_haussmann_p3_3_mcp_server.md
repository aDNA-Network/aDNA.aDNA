---
plan_id: mission_haussmann_p3_3_mcp_server
type: plan
title: "P3.3 — adna-mcp-server: the corpus as tools, self-conformance demonstrated and said out loud"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: in_progress   # OPENED 2026-08-21 (session …_172747_haussmann_p3_2_deploy_p3_3_open) at the convention-13 AC coherence pass, which is the gate BEFORE the budget is ratified. ⛩ DP6 RATIFIED 2026-08-19 — activated. Premise intact and untouched by the re-score (/.well-known/mcp.json → 404, no MCP surface exists). The most build-heavy P3 mission; human_gate stays true — npm publish is an operator act. ⚠ THE COHERENCE PASS FOUND TWO DEFECTS — see §AC coherence pass. AC2 presupposes an npm scope whose existence is UNVERIFIED and whose ownership we cannot check unauthenticated; AC3 is NOT independently deliverable and must not ship if AC2 is deferred. Budget NOT yet re-ratified.
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

## ⛩ AC coherence pass (campaign convention 13) — run 2026-08-21, BEFORE any build

> One pass, one question, applied to the four acceptance criteria *against each other*: **can the
> stated method satisfy the stated test?** Convention 13 exists because two consecutive missions
> shipped a spec whose halves nobody had read together. **This is the third, and it found two.**

**✅ AC4 checks out — the count is right.** AC4 cites *"the §4.B.2 13-item checklist"*. Derived from
the directive (`directives/COWORK_DIRECTIVE_operation_haussmann_genesis.md` §B.2): the checklist has
**exactly 13** boxes `[D]`. The evidence packet `machine_eye.md` carries **15** verdict rows, which
looks like a contradiction and is not — rows 14 (*text-extraction reads*) and 15 (*independent
machine reader*) were expanded out of §B.2's preamble and **appended**, so items 1–13 keep the
directive's numbering. The delta packets' item references (3 = twins, 8 = registry JSON, 9 = JSON-LD,
11 = MCP) are consistent across both. Nothing to fix; recorded so the next reader does not re-derive
it and conclude the AC is wrong.

**⛔ DEFECT 1 — AC2 presupposes a resource that is not verifiably ours.** AC2 requires the server be
*"published under **the org's npm scope**"*. Measured 2026-08-21 `[D]`:

| Probe | Result |
|---|---|
| `registry.npmjs.org/-/org/adna/package` | **200** — while a nonsense control scope returns **404**, so **the `@adna` scope exists** |
| …its package list | `{}` — **zero public packages** |
| npm search `adna` | **`total: 0`** — no `adna*` package is published anywhere |
| `@adna-network`, `@latticeprotocol`, `@adnalabs` | **404** — do not exist |
| `adna`, `adna-mcp-server`, `@adna/mcp-server`, `@adna-network/mcp-server` | **404** — all available |
| `npm whoami` | **`ENEEDAUTH`** — not logged in on this node |

So a scope named `@adna` **exists and is empty**, and we **cannot confirm from here whether it is
ours** — ownership needs an authenticated session. The honest classification is **UNKNOWN, not
ours-and-ready**. AC2 reads as though the scope is a given; **no objective establishes it**, and O2
("Package + publish (npm scope; operator GO)") assumes it. Claiming a scope is an account-level
outward act with its own operator decision, distinct from the publish GO that O2 already gates.

> **This is the same shape as the block that stopped the installer publish four hours earlier**: an
> operator GO, correctly granted against an accurate description, for an act whose **prerequisite
> resource was never checked for existence**. Twice in one session, in two unrelated lanes. The
> general rule is now stated once, here: **before a gate asks for a GO on an outward act, verify the
> act's prerequisites are reachable from the tree that will perform it** — the artifact, the
> credential, the namespace. A gate cannot see a missing precondition, and neither can the operator
> reading it.

**⛔ DEFECT 2 — AC3 is not independently deliverable, and read alone it would ship a false claim.**
AC3 requires the homepage to *"name the canonical agent entry point (llms.txt **+ the server**)"*
with *"register-verifiable wording"*. But AC2 is `human_gate: true` and **may not land at all** — a
publish is the operator's to defer. If AC3 ships while AC2 is deferred, the homepage names an
installable server that **nobody can install**: an **S1 false claim on the highest-traffic page**,
against a campaign whose north star is *zero false claims* and whose first law is *claims move DOWN
to verifiability*.

The objectives table already sequences this correctly (O2 halts for the GO, O3 writes the homepage),
so the **defect is in the ACs, not the plan** — but the ACs are what a close cascade checks, and read
literally AC3 is satisfiable while the site is lying. Resolution, adopted here:

- **AC3 is conditional on AC2's outcome.** Two pre-agreed wordings, decided *now* rather than under
  deadline at O3:
  - **AC2 lands** → the homepage names llms.txt, the `.md` twins, the registry endpoint **and** the
    server, with the one-line install.
  - **AC2 deferred** → the homepage names llms.txt, the twins and the registry endpoint **only** —
    all three live and verifiable today — and says nothing about a server. The self-conformance
    sentence still ships; it does not depend on MCP.
- Either way the sentence is register-verifiable **at the moment it ships**, which is what AC3
  actually demands.

**Budget consequence.** The `~250–350 kT` estimate assumed a scope that may need claiming and a
homepage statement with one form. Neither is re-costed yet; the estimate is **not re-ratified**, and
that is stated rather than absorbed (ADR-016 / SO#11).

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

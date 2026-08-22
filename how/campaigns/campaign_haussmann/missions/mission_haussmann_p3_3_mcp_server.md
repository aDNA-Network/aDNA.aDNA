---
plan_id: mission_haussmann_p3_3_mcp_server
type: plan
title: "P3.3 — adna-mcp-server: the corpus as tools, self-conformance demonstrated and said out loud"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: in_progress   # OPENED 2026-08-21 (session …_172747_haussmann_p3_2_deploy_p3_3_open) at the convention-13 AC coherence pass, which is the gate BEFORE the budget is ratified. ⛩ DP6 RATIFIED 2026-08-19 — activated. Premise intact and re-measured at O0 (/.well-known/mcp.json → 404, /mcp → 404). The most build-heavy P3 mission; human_gate stays true — npm publish is an operator act. ⚠ THE COHERENCE PASS FOUND **THREE** DEFECTS — see §AC coherence pass. (1) AC2 presupposes an npm scope whose ownership is UNKNOWN — resolved by ⛩ operator ruling: build unscoped as `adna-mcp-server`, an explicit AC2 amendment. (2) AC3 is NOT independently deliverable and must not ship if AC2 is deferred — two wordings pre-agreed. (3) FOUND AT O0: AC1's npx-stdio method cannot move AC4's item-11 probe at all — clause 5 grows a discoverability limb (/.well-known/mcp.json + llms.txt section), landing O3, conditional on AC2. **O0 CLOSED 2026-08-21** — design at ADR-056 §mcp; budget RE-COSTED and RE-RATIFIED (~245–285 kT). O1 next; halt at ⛩ O2.
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

**⛔ DEFECT 3 — AC1's method cannot satisfy AC4's test.** *(Found at O0, 2026-08-21, by the pass
above being run a second time against a pair it had not compared.)*

The pass above checked **AC2 ↔ AC3** and cleared **AC4's count**. It never asked whether **AC1's
method reaches the surface AC4's test probes** — and it does not. `machine_eye` item 11 is probed
two ways, and an npx-installed **stdio** server is invisible to both `[D]`:

| Probe | Source | An npx stdio server |
|---|---|---|
| `/.well-known/mcp.json` → 404 | `machine_eye_delta_p2_6.md` | not seen — nothing is served |
| *"Zero hits for `mcp` … in `llms.txt`, `llms-full.txt`, `/reference/specification`, `/reference/tool-setup`, `/community`"* | `machine_eye.md` item 11 | not seen — nothing mentions it |

Built exactly as AC1 words it, published, and re-run against AC4, **item 11 still reads ABSENT** —
the mission reports done against a checklist item that never moved. The cohort corroborates the
mechanism: MCP's D10 = 5 came from a **live `/mcp` endpoint**, while the Mastra npx-docs-server
pattern this mission cites as its model scored **4 and 3** — the scorers split on exactly this
question.

Resolution, adopted here in the same shape as DEFECT 2: **clause 5 grows a discoverability limb** —
a static `/.well-known/mcp.json` descriptor plus an `llms.txt` section naming the server and its
install line. Both are site changes ⇒ both land at **O3**, and both **inherit AC2's conditionality**:
if the publish is deferred, neither ships, because a descriptor pointing at an unpublished package
is a false claim on a machine surface. Full text: ADR-056 §5f.

> **Three defects of one shape, in one mission.** DEFECT 1: a criterion presupposing a resource
> nobody checked existed. DEFECT 2: a criterion satisfiable while the site lies. DEFECT 3: a method
> and a test that are each impeccable and still do not meet. **Convention 13 catches contradictions
> *between* criteria; it does not yet ask whether each stated method reaches the surface its test
> probes.** That is the amendment this mission owes upstream —
> `idea_upstream_mission_ac_coherence_check` already exists and should gain this clause.

## ⛩ Operator rulings taken at O0 (2026-08-21)

Put to the operator before any line was written, because two were live blockers and each changes
what gets built.

| # | Ruling | Effect |
|---|---|---|
| 1 | **Package name → unscoped `adna-mcp-server`** | **AC2 amendment**, recorded not substituted. AC2 says "the org's npm scope"; `@adna` ownership is UNKNOWN and unverifiable from this node. Unscoped unblocks O0/O1 entirely and collapses the scope question into the single ⛩ O2 publish gate. `adna-mcp-server` verified available `[D]`. The ⛩ item STATE records — an authenticated `npm whoami` / `npm org ls adna` — remains owed, but no longer blocks the build. |
| 2 | **Data source → runtime fetch, cached per process** | Settles the open O0 question. A bundled snapshot goes stale at the next redeploy and would answer "74 vaults" wearing this project's authority — convention 1 is not satisfied by a claim that was true at publish time. Cost: one ~950 KB `/llms-full.txt` fetch on first search `[D]`. |
| 3 | **Scope → O0 + O1, halt at O2** | Matches this mission's own session opening prompt. |

Also ruled at O0 and recorded in ADR-056 §5a: the **SDK line**. "Official TS SDK" stopped being
unambiguous on 2026-07-27 when the TypeScript SDK split into scoped v2 packages — **neither line is
deprecated**, and only `@modelcontextprotocol/server` 2.0.0 targets the 2026-07-28 revision AC1
names (`@modelcontextprotocol/sdk` 1.30.0 still points at `draft`) `[D]`. Built on v2; Node floor
rises to `>=20`, stated rather than discovered.

**Budget — re-costed and re-ratified at O0 (ADR-016 / SO#11).** The genesis `~250–350 kT` estimate
predates all three defects and assumed a scope that might need claiming plus a homepage statement
with one form. Re-cost against the design that actually exists:

| Phase | Estimate | Note |
|---|---|---|
| O0 — recon, SDK/npm reconnaissance, ADR-056 §mcp, DEFECT 3, this table | ~80 kT | the reconnaissance was the expensive half and is spent |
| O1 — package build + fresh-client smoke + red-test | ~75 kT | four tools, one fetch layer, mutation-testing every assertion |
| O3 — homepage + descriptor + conformance report + register rows + machine-eye re-run + AAR + A2 memo | ~90–130 kT | grew by the discoverability limb DEFECT 3 added |
| **Total** | **~245–285 kT** | inside the genesis band, but re-derived rather than inherited |

O2 carries no agent cost — it is an operator act.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | ✅ **DONE 2026-08-21** — Design: tool surface, transport, SDK line, runtime-fetch-vs-snapshot, package name | ADR-056 §mcp | — |
| O1 | ✅ **DONE 2026-08-21** — Build + fresh-client smoke, red-tested | `mcp/` + 2 suites | — |
| O2 | Package + publish (**unscoped `adna-mcp-server`** per ⛩ ruling 1) + install docs | published | ⛩ **operator (outward) — HALT HERE** |
| O3 | Homepage agent-entry statement **+ the DEFECT-3 discoverability limb** (`/.well-known/mcp.json` + llms.txt section, both conditional on O2) + conformance report + register rows R-133+; machine-eye full re-run; AAR; stage A2 upstream | evidence + AAR | — |

## Constraints

The server serves only public artifacts (twins/JSON — the sanitization is upstream); self-conformance wording passes the editorial gate; publishing is an outward act (operator GO); no fabricated capabilities in the tool descriptions.

## Definition of done

A fresh agent adds one line, queries the standard's own corpus through MCP, and the homepage's proof-claim survives a hostile read.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + ADR-056. Execute O0–O1; halt at O2 for the publish GO; then O3.

## Progress

### O0 — design ✅ 2026-08-21 (`session_stanley_20260821_183043_haussmann_p3_3_mcp_o0_o1`)

Design of record: **ADR-056 §mcp** (`## As designed at P3.3 O0 — clause 5`, sub-clauses 5a–5g).
Four rulings, three of them ⛩ operator's (table above), one derived:

- **5a SDK line** — `@modelcontextprotocol/server` **2.0.0**, not `@modelcontextprotocol/sdk` 1.30.0.
  The split happened 2026-07-27 and **neither line is deprecated**; only v2 targets the 2026-07-28
  revision AC1 names `[D]`. Node floor rises to `>=20`.
- **5b transport** — stdio only; a hosted surface is recorded as *deferred*, not implied.
- **5c data** — runtime fetch, per-process cache.
- **5f** — ⛔ **DEFECT 3** found and resolved (see the coherence-pass section).

### O1 — build ✅ 2026-08-21

Package at `mcp/`, name **`adna-mcp-server`**, `bin` → `dist/index.js`, ESM, Node `>=20`.
`npx tsc --noEmit` clean `[D]`. Packed artifact: **8 files, 11.8 kB** `[D]`.
`dist/` is **gitignored**; `prepublishOnly: npm run build` means the published tarball cannot
carry a stale build — a tarball is never assembled from whatever happened to be on disk. *(The
installer lane's owed-publish block one week earlier was exactly a missing artifact; this is the
same failure mode closed by construction rather than by discipline.)*

**Four tools, exactly the four AC1 names.** A fifth (page enumeration) was considered and cut: the
corpus fetch already yields the page list, and a tool that exists because it was easy is surface
with no claim behind it.

**Verification — `mcp/test/smoke.mjs` + `mcp/test/redtest.mjs`:**

| Suite | Result `[D]` |
|---|---|
| `smoke` — fresh **separate process**, official MCP client, real `initialize` + one real call per tool against live `adna.network` | **26 assertions, 0 failures**, exit 0 |
| `redtest` — decoy origins under the server; every guard must fire | **24 mutations, every one caught**, exit 0 |
| `redtest` §B — the whole smoke suite re-run against a decoy | **18 of 26 assertions go red**, suite exits non-zero |

The red-test stands up local decoy origins returning **200 with `text/html`** (the exact `F-f`
failure mode — a 200 carrying the wrong type is how a login page got read as success), **503**,
**200 `text/plain` with no page headers**, **200 `application/json` with no `vaults` array**, and
**200 `application/json` that is not JSON**. Each guard names the assertion that caught it and
returns no decoy body.

⚠ **The red-test found a defect in the smoke suite itself, which is the point of running it.** One
assertion — *"fetch_page returned markdown, not HTML"* — passed **vacuously** when the call errored,
because an error string contains no HTML either. Fixed by conjoining each content assertion with the
call having succeeded; the red count moved **17 → 18**, confirming exactly one assertion was vacuous
rather than the three suspected. This is the P3.1 pattern recurring — *three of its own new
assertions turned out to be wrong* — and it is the second consecutive mission where the instrument
built to check the work needed checking first.

⚠ **Not deployed, and nothing about this is live.** O1 produces a package on disk. `/.well-known/mcp.json`
re-probed at close → **still 404** `[D]`, correctly: no site surface ships this session.

### Halt

**⛩ O2 is the gate.** The publish is an operator act. Before it: `npm run smoke && npm run redtest`
from `mcp/` (both must exit 0), then `npm publish`. `prepublishOnly` rebuilds `dist/` automatically.

## AAR (SO#5)

*(before completed)*

---
plan_id: mission_haussmann_p3_3_mcp_server
type: plan
title: "P3.3 — adna-mcp-server: the corpus as tools, self-conformance demonstrated and said out loud"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: completed   # ⛩ CLOSED 2026-09-04 at the retirement of the O2 gate (see the ⛩⛩ block at the end of this comment). ~~in_progress~~ · ⏸ O0 ✅ + O1 ✅ + **O3 ✅ (REDUCED)** 2026-08-21. ⛩ **O2 DEFERRED BY OPERATOR** — and found NOT PERFORMABLE on this node: `npm whoami` → ENEEDAUTH, no ~/.npmrc, no npm token in env, NO npm row in the credential broker. There is no npm identity here for a GO to attach to — FOURTH instance of a gate asking for a GO on an act whose prerequisite does not exist on the performing tree, and this mission WROTE that rule at O0. O3 shipped the pre-agreed AC2-deferred wording: homepage machine-door block naming llms.txt + the .md twins + /api/registry.v1.json ONLY (twin count 222 DERIVED), self-conformance sentence on the homepage for the first time. NO server, NO install line, NO /.well-known/mcp.json (still 404, correctly). Gates 552/552, axe 0 in BOTH themes, 12 captures. ⭐ The register pass CAUGHT A FALSE CLAIM IN ITS OWN NEW COPY before it shipped ("not an add-on bolted on later" — disproved by this campaign's own mission files) → cut, recorded at claim_register §14.1. ⚠ machine_eye item 11 UNMOVED and reported so; its text-search probe has gone NOISY (5 incidental mcp hits in the grown llms-full.txt, was 0) → F-o; a G15 gate-guard defect → F-p. ✅ DEPLOYED 2026-08-22T03:40:39Z tree=43e0280, live-verified on the ALIAS — item 13 FLIPPED (placement half only; the machine-checkable half stays open), item 11 still ABSENT and reported so. ~~Mission stays OPEN at O2; AAR fires at completion (SO#5).~~ ⛩⛩ **CLOSED 2026-09-04 — `status: in_progress` → `completed`, THE O2 GATE RETIRED RATHER THAN CONVENED, AAR FILED (SO#5).** ⛩ Operator ruling at the batched planning gate: **retire the gate; do not convene it.** ⭐ **The ground is this mission's own O0 rule**: a gate asking for a GO on an act whose prerequisite does not exist on the performing tree is a **defect in the gate**, not a pending decision — and O2 is the *fifth* instance of the class **inside the mission that wrote the rule down**. Re-verified at the object before the ruling was performed `[D] 2026-09-04`: `npm whoami` → `ENEEDAUTH` · no `~/.npmrc` · no npm token in env · **no npm row in the Home.aDNA broker index**. ⇒ there is no npm identity here for a GO to attach to, and there has not been for the fourteen days this gate sat "open". ⛔ **RETIRING THE GATE IS NOT PUBLISHING THE PACKAGE** — `adna-mcp-server` stays **unpublished**, `/.well-known/mcp.json` stays **404**, `machine_eye` item 11 stays **ABSENT**, and the DEFECT-3 discoverability limb stays **unshipped**. Every one of those was pre-agreed conditional on the publish and **none of them silently flips on this close**. Routed to `how/backlog/idea_publish_adna_mcp_server.md` with the credential provision named as its precondition. ⚠ **Consequence recorded rather than absorbed: ADR-056's clause 5 stays `built, not live` INDEFINITELY** — its debt rider already reads *"clause 5 is built and **not** live"*, so nothing in the ADR becomes false; what changes is that the not-live state is no longer *pending a GO* but *pending a credential nobody has scheduled*. **A rider that says "not live" and a rider that says "not live and no longer waiting on anything" are different statements**, and the ADR should be read as the second from today.
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
> and a test that are each impeccable and still do not meet.
>
> ~~**Convention 13 catches contradictions *between* criteria; it does not yet ask whether each
> stated method reaches the surface its test probes.** That is the amendment this mission owes
> upstream — `idea_upstream_mission_ac_coherence_check` already exists and should gain this clause.~~
>
> ⛔ **STRUCK 2026-08-21 at O3 — that diagnosis is FALSE, and getting it wrong is a finding in its own
> right.** Convention 13's second sentence *is* the question: *"can the stated method satisfy the
> stated test?"* — and **P3.1 is already logged in that convention as the identical failure mode**, a
> method that would have left 10/10 probes at 404. The question was written down, its worked example
> matched, and this mission missed it anyway.
>
> ⇒ **The real gap is scope and visibility, not vocabulary.** This mission's pass compared AC2↔AC3
> and cleared AC4's count, then stopped — and **recorded no coverage**, so a partial pass was
> indistinguishable from a complete one to the operator who ratified the budget on it. *A correct
> question, applied partially, reports exactly like a correct question applied fully.* The amendment
> owed upstream is therefore **two obligations on the pass** — run it against every (method × test)
> pair, and **state which pairs were checked** — not a new clause in the question. Landed
> 2026-08-21 in `idea_upstream_mission_ac_coherence_check` (P3.3 evidence block + Proposal) and in
> convention 13 itself.
>
> ⚠ Kept struck rather than deleted, per SO#6 and the campaign's own habit: **the wrong diagnosis
> survived a mission close and a STATE write before anyone re-read the convention it accused.**

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
| O2 | ⏸ **DEFERRED ⛩ 2026-08-21** — and found NOT PERFORMABLE here (no npm identity on this node: `whoami` ENEEDAUTH · no `.npmrc` · no token · no broker row). Needs an interactive operator `npm login` FIRST, then the GO | — | ⛩ ~~**operator (outward) — STILL OPEN**~~ **RETIRED 2026-09-04, not convened** — a gate whose prerequisite does not exist on the performing tree is a defect in the gate (this mission's own O0 rule). Package stays unpublished; routed to `idea_publish_adna_mcp_server` |
| O3 | ✅ **DONE (REDUCED) 2026-08-21** — homepage machine-door block (llms.txt + twins + registry JSON only) · conformance report (13/13 re-run) · delta packet · register rows **R-133–R-139** · 552/552 gates · axe 0 both themes · 12 captures. ⛔ **The DEFECT-3 discoverability limb did NOT ship** — it was pre-agreed conditional on O2, and O2 was deferred. ✅ **DEPLOYED + live-verified** `2026-08-22T03:40:39Z` tree `43e0280` — item 13 flipped on the alias. AAR deferred to mission close (SO#5) | evidence | — |

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

### O2 — ⏸ DEFERRED BY ⛩ OPERATOR RULING 2026-08-21

**The gate was reached and the operator deferred it.** O2 remains open; the mission does not close.

⛔ **And the halt turned out to be harder than a GO.** Recon at the O3 session found O2 is **not
performable from this node at all** `[D]`:

| Probe | Result |
|---|---|
| `npm whoami` | **`ENEEDAUTH`** |
| `~/.npmrc` | **absent** |
| `NPM_TOKEN` · `NPM_AUTH_TOKEN` · `NODE_AUTH_TOKEN` · `NPMJS_TOKEN` | all **UNSET** |
| npm row in the Home.aDNA broker credential index | **none** |

There is no npm identity here — not expired, not unexported, **absent**. Publishing needs the
operator to create or locate an npmjs account and `npm login` interactively (browser + OTP), which
no GO substitutes for.

⭐ **FOURTH instance in this campaign of one shape** — a gate asking for a GO on an outward act whose
**prerequisite does not exist on the tree that must perform it**. The installer publish (GO granted,
tarball nowhere). The `@adna` scope (DEFECT 1). DEFECT 3. Now O2. ⚠ **And this mission WROTE that
rule at O0** — *"before a gate asks for a GO on an outward act, verify the act's prerequisites are
reachable from the tree that will perform it — the artifact, the credential, the namespace"* — naming
**the credential** explicitly, and then shipped O2 without checking one. **Writing a rule down is not
running it.**

**When O2 is taken up**: `npm login`, then `npm run smoke && npm run redtest` from `mcp/` (both must
exit 0), then `npm publish`. `prepublishOnly` rebuilds `dist/` automatically.

### O3 — reduced form ✅ 2026-08-21 (`session_stanley_20260821_200408_haussmann_p3_3_o3_reduced`)

Shipped the **"AC2 deferred"** wording pre-agreed at the coherence pass — the branch chosen at O0
precisely so this decision would not be made under deadline. It was not.

**Built** (`site/src/pages/index.astro`): a `machine-door` block naming the three surfaces that were
re-probed live the day it shipped — `/llms.txt` (200, 3,137 B) · `.md` twins (10/10 → 200
`text/markdown`) · `/api/registry.v1.json` (200, 80,997 B) — plus the self-conformance sentence on
the homepage for the first time. Twin count **222**, derived from `twin_manifest.json`, never typed.

**Deliberately absent**: any server, install line, `npx`, or MCP mention; no `/.well-known/mcp.json`;
no `llms.txt` MCP section. Verified by sweeping the **rendered** output — 0 occurrences of each `[D]`.

| Artifact | Where |
|---|---|
| Conformance report (AC4 — all 13 items re-run) | `evidence/machine_eye/conformance_report_p3_3.md` |
| Delta packet (items 11 / 13) | `evidence/machine_eye/machine_eye_delta_p3_3.md` |
| Claim register rows **R-133 – R-139** (7) | `evidence/claims/claim_register.md` §14 |
| T0 captures — 6 viewports × dark/light | `evidence/captures_p3_3/` |

**Verification** `[D]`: full gate suite **552/552 green** · axe **0 violations in BOTH themes**
(run twice — `--axe` covers `themes[0]` only) · 0 console errors.

⭐ **The register pass caught a FALSE claim in this session's own copy, before it shipped.** The
block first read *"a by-product of that, **not an add-on bolted on later**"* — false, and disproved
by this campaign's own mission files: the twins landed at P3.1 and the endpoint at P3.2, both
*because* an audit scored them absent. Replaced with the narrower structural claim that is checkable
in `src/utils/twin.ts`. Full record: claim register **§14.1**.

⚠ **Item 11 did not move, and the conformance report leads with that.** Also found: the item-11
probe's text half has gone **noisy** — `mcp` now returns 5 incidental hits in `llms-full.txt` (up
from 0) purely because P3.1 grew the corpus 2 KB → 950 KB, so a future `grep -c` would score the
item as moved. Routed **F-o**. A G15 gate-guard defect found the same way is routed **F-p**.

✅ **DEPLOYED 2026-08-22T03:40:39Z** — `mode=prod tree=43e0280`, verified on the **alias**
`adna.network`, not the `*.vercel.app` URL. Post-deploy `[D]`: `"itself an aDNA vault"` → **1**
(was 0) · `"222 pages have one"` → **1** · the three named surfaces **200/200/200** · twins
**10/10** no regression · `/.well-known/mcp.json` + `/mcp` **404/404**, correctly · `mcp`/`npx` on
`/` → **0/0** · live headers **4/4, no drift**. Packet re-stamped `live_alias_verified`, its
local-build banner **struck not deleted**. **`machine_eye` item 13 flipped on evidence** — and only
its placement half; the machine-checkable half (no `source_vault_path`, no JSON-LD page→source tie)
stays open, so the row reads ◐ not ▲.

## Remaining

**O2** (⛩ operator, and now also an npm-identity prerequisite) → then the discoverability limb
(`/.well-known/mcp.json` + `llms.txt` section) and the homepage's server line, which were pre-agreed
to ride the publish. Until then this mission stays `in_progress` and item 11 stays ABSENT.

## AAR (SO#5)

*Filed 2026-09-04 at the retirement of the ⛩ O2 gate. `template_aar_lightweight.md`.*

**Worked.** Splitting the build from the publish. O0/O1/O3 shipped a real, red-tested package
(26 smoke assertions · 24 red-test mutations) and a live homepage machine-door block, **none of which
needed an npm account** — so fourteen days of an unfirable gate cost the site nothing. The
**pre-agreed conditional wording** is the reusable half: O3 shipped exactly what was true without the
publish and named the four things it deliberately did not ship, so the close needed no retractions.

**Didn't.** The gate itself. O2 was reached, deferred, and then found **not performable** — no npm
identity on this node, no broker row, nothing for a GO to attach to — and it then sat "open" for two
weeks as the campaign's longest-running non-decision. ⚠ **It was never a decision the operator was
withholding; it was a question nobody could answer from here**, and the mission index carried it as a
pending gate the whole time.

**Finding.** ⭐⭐ **This mission WROTE the rule that would have caught its own defect, at O0, and then
shipped O2 without applying it** — *a gate must not ask for a GO on an act whose prerequisite does not
exist on the performing tree*, and O2 is the **fifth** instance of that class, inside the file that
authored it. ⇒ ***writing a rule down is not running it***, and the gap between the two is invisible
because the rule's presence reads as its application. The general form is convention 13's family: a
correct instrument applied partially, reporting like a complete one.

**Change.** A gate's **prerequisite** is checked when the gate is *authored*, not when it is reached —
one command, at the same moment the gate is written. ⛔ **No checker** (conventions 15/16/17/18 all
ruled this shape): the habit costs a line and cannot itself be wrong.

**Follow-up.** `how/backlog/idea_publish_adna_mcp_server.md` — the publish, with the credential
provision named as its precondition. ⚠ **ADR-056 clause 5 stays `built, not live` indefinitely** and
its rider should now be read as *not live and no longer waiting on a GO*. `machine_eye` item 11 stays
**ABSENT** and the conformance report still leads with it.

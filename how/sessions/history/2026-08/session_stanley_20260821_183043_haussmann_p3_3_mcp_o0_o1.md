---
type: session
session_id: session_stanley_20260821_183043_haussmann_p3_3_mcp_o0_o1
created: 2026-08-21
updated: 2026-08-21
status: completed
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p3_3_mcp_server
executor_tier: opus
token_budget_estimated: "~140–190 kT for O0+O1 — the build half of a mission the P3.2-close session already estimated at ~250–350 kT over 2 sessions. Split: recon-at-execution + live probes + npm/SDK reconnaissance (~35, spent before planning) · O0 design → ADR-056 §mcp + mission-file DEFECT 3 + budget re-cost (~45) · O1 package build (~40) · fresh-client smoke + red-test of every assertion (~35) · debt routing, index pointers, close (~25). O2 is an ⛩ operator publish gate and O3 is a separate session; neither is in this number."
token_budget_actual: "≈280 kT of main-loop content load against a ~140–190 kT estimate — **over by roughly 1.5×**, stated rather than absorbed (ADR-016 / SO#11). Plus ~270 kT of subagent tokens for the three parallel recon agents (repo surfaces · ADR+evidence · STATE+conventions), billed separately and, on the evidence, worth it: two of the three O0 findings came out of that recon. ⚠ **Separately and avoidably, ~340 kT went to a single mis-targeted skill load** — `claude-api` was pulled on an 'MCP-shaped task' trigger, but it documents *consuming* the Claude API, not *authoring* an MCP server, and contributed nothing. That is the single largest line item in the session and it bought zero. **Lesson: a trigger that matches on a keyword ('MCP') rather than on the task's actual shape ('authoring a server') will misfire; check what a skill is *for* before loading it, not just what it mentions.** Excluding it the session is ≈280 kT; including it the window moved ≈620 kT. The ~1.5× overrun on real work is under ADR-016's 2× retrospective trigger but close enough to name: O0 cost more than budgeted because the SDK-split and DEFECT-3 findings were not in anyone's estimate — which is the argument for O0 existing, not against it."
tags: [session, haussmann, p3, mcp, o0, o1, adr_056]
---

# Session — HAUSSMANN P3.3: design the machine door (O0), build it (O1), halt at O2

Opened on *"Please read the CLAUDE.md and let's continue the campaign."*

## Opening state

- **P3.3 is `in_progress`, O0 open.** Opened 2026-08-21 at its convention-13 AC coherence pass,
  which found two defects before a line was built. Budget **not re-ratified**.
- **The premise holds.** Re-probed live before planning `[D]`: `adna.network/.well-known/mcp.json`
  → **404**, `/mcp` → **404**. There is no machine door. P3.1's twins and P3.2's registry JSON are
  both live and serve the surfaces this mission wraps.
- Local `HEAD` `58876e9`, clean of authored content (the 8 dirty paths are `.obsidian/` + `.astro/`
  tooling noise, not writes).
- **gitleaks baseline, run by hand at open** `[D]`: `854 commits scanned`, **`leaks found: 1`** —
  the single known false positive (*"DTCG token pipeline"*, routed as **F-b**). The pre-push hook
  is a proven no-op; this by-hand run is the real check.

## 📨 Intake — the sweep, and it was not empty

`git ls-files --others --exclude-standard who/coordination/` at open returned **two** memos. Both
are cited here **by coord id**, not merely described — Berthier's own `F-S228-02` is that a session
which describes a memo in prose *without naming the file* reads as unfiled to any discovery
mechanism.

### 1. `coord_2026_08_21_berthier_to_rosetta_doctrine_draft_moved_and_your_hook`

`ack_required: false`. **Nothing owed.** Two halves, both discharged by reading:

- **§1** — the doctrine draft we pinned moved within hours of our pinning it, to
  `aDNALabs.aDNA/how/campaigns/campaign_estafette/artifacts/doctrine_coordination_dropbox_draft.md`.
  Berthier's framing is worth keeping: *our own* correction (a memo pinning a mutable path must
  state its supersession condition on its face — convention 15's outbound half) **was demonstrated
  against our own memo, at their expense, within hours.**
- **§2/§3** — their Lane E-1 forge-watch is live, and its §3 post-staging correction is the sharpest
  line either desk has produced on this problem: ⛩ **a discovery mechanism must distinguish
  *mentioned* from *dispositioned*, or the first ledger written against it silences it.** Their
  naive version went blind in under fifteen minutes because the ledger recording the backlog listed
  all 21 filenames, and the seen-test counts a basename appearing anywhere in the tree as handled.
  *The act of recording a check changed the artifact the check measures.*

> **This vault's takeaway, adopted here as practice rather than filed as a finding:** cite the coord
> id at intake. This section does.

### 2. `coord_2026_08_21_ilmarinen_to_hestia_rosetta_manifest_pull_was_staler`

`ack_required: false`, addressed to Hestia (ack-bearing) with us on the `to:` line. Ilmarinen
withdraws nothing from our `forgejo`-row correction; they warn about the **pull** we called
"worth taking" — their own `MANIFEST.md` was **50 days** behind its `STATE.md` and denied in prose
the running service the row understated. Measured across 12 vaults, **8 are 34–52 days behind.**

⚠ **One of those eight is us: `aDNA` at 45 days.** That is a finding against this vault, surfaced by
a peer. It is not P3.3 scope and is not fixed here — routed below.

⇒ **Bears directly on this mission's design.** Ilmarinen's condition 1 — *every pulled row carries
its source `updated:`, and the registry renders it; a public row dated seven weeks ago is
self-limiting, an undated one is not* — is the same rule this mission's tool contract already
adopts under a different name: the MCP tools pass `built_at` / `snapshot_note` / `caveat` /
`last_synced` through **verbatim** rather than laundering a build-time snapshot into apparent live
state. Cited in ADR-056 §mcp as external corroboration, since a peer arrived at it independently.

## Objectives this session

| # | Objective | State |
|---|---|---|
| O0 | Design: tool surface, transport, SDK line, runtime-fetch-vs-snapshot, package name → ADR-056 §mcp | — |
| O1 | Build + fresh-client smoke, red-tested | — |
| O2 | ⛩ **HALT** — npm publish is an operator act | not this session |
| O3 | Homepage sentence, conformance report, register rows, machine-eye re-run, AAR, A2 memo | not this session |

## Operator rulings taken at plan time

Three decisions were put to the operator before any line was written, because each one changes what
gets built and two of them were live blockers:

1. **Package name → unscoped `adna-mcp-server`.** AC2 says "the org's npm scope", but `@adna`
   ownership is **UNKNOWN** (`npm whoami` → `ENEEDAUTH`) and unverifiable from this node. Building
   unscoped unblocks O0/O1 completely and collapses the scope question to a single ⛩ O2 gate.
   Recorded as an explicit **AC2 amendment**, not a silent substitution.
2. **Data source → runtime fetch, cached per process.** A bundled snapshot would go stale the moment
   the site redeploys, and an agent would read "74 vaults" long after that stopped being true —
   directly at odds with convention 1.
3. **Scope → O0 + O1, halt at O2.** Matches the mission's own session opening prompt.

## Progress

### O0 — design ✅

Design of record: **ADR-056 §mcp** (`## As designed at P3.3 O0 — clause 5`, sub-clauses 5a–5g), plus
an as-built delta section appended after O1. Four rulings — three ⛩ operator's, one derived.

**The finding that made O0 worth running: ⛔ DEFECT 3.** The coherence pass had compared AC2↔AC3 and
cleared AC4's *count*; nobody had compared **AC1↔AC4**. `machine_eye` item 11 is probed as a **URL**
and as a **text search of the site** — an npx **stdio** server is invisible to both, so the mission
would have reported done against a checklist item that never moved. Resolution: clause 5 grows a
discoverability limb, landing O3, conditional on AC2. Full text in the mission file and ADR §5f.

**Second O0 finding, external and version-shaped:** the official TypeScript SDK **split into scoped
v2 packages on 2026-07-27**, and **neither line is deprecated** `[D]`. Only
`@modelcontextprotocol/server` 2.0.0 targets the 2026-07-28 revision AC1 names;
`@modelcontextprotocol/sdk` 1.30.0 still points at `draft`. "Use the official SDK" stopped being an
unambiguous instruction six weeks ago, and an AC that says it would have been satisfiable two ways.

### O1 — build ✅

`mcp/` — `adna-mcp-server`, stdio, `bin` → `dist/index.js`, ESM, Node `>=20`, four tools. Typecheck
clean; packed **8 files / 11.8 kB** `[D]`. `dist/` gitignored + `prepublishOnly: npm run build`, so
the published tarball cannot carry a stale build.

| Suite | Result `[D]` |
|---|---|
| `smoke` — fresh separate process, official MCP client, live site | **26 assertions, 0 failures** |
| `redtest` — decoy origins; every guard must fire | **24 mutations, every one caught** |
| `redtest` §B — the smoke suite re-run against a decoy | **18 of 26 go red**, exits non-zero |

⚠ **The red-test found a defect in the smoke suite, which is why it exists.** One assertion passed
**vacuously** on an error string. Fixed; the red count moved 17→18, which also corrected my own
estimate — **one** assertion was vacuous, not the three I suspected. Second consecutive mission where
the instrument built to check the work needed checking first (P3.1 found three of its own wrong).

### An incidental sharpening of this campaign's own gitleaks habit

Campaign memory records *"`gitleaks detect --source .` by hand is the only real check."* Run both
ways at this close, the two forms disagree `[D]`:

| Invocation | Findings | What it means |
|---|---|---|
| `gitleaks detect --source .` (git-aware) | **1** | the known FP (F-b). **This is the pushability answer.** |
| `gitleaks detect --source . --no-git` | **2** | adds a live Vercel OIDC **JWT** in `site/.vercel/.env.production.local` |

The JWT is **ignored** (`site/.gitignore:8`), **untracked**, and **absent from history** `[D]` — the
discipline worked, and this is **not an incident**. But the two invocations answer different
questions, and only the git-aware one is about what a push would carry. Worth one clarifying clause
wherever the habit is written down: *say which invocation, because the working tree legitimately
holds secrets that git correctly refuses.*

## Routed elsewhere

- **F-m → P4.4**: `what/decisions/adr_index.md` is stale at `updated: 2026-07-02`, tallies 41 ADRs
  with highest row **046**, while **047–058 exist as files** — twelve behind. Filed at the moment
  ADR-056 was opened for amendment.
- **`aDNA` MANIFEST 45 days behind STATE** (Ilmarinen `[D]`, §3 of their memo) — this vault's own
  copy of the defect they filed against themselves. Not P3.3 scope; recorded here so it is
  *dispositioned* rather than merely *mentioned*, per Berthier's §3.

## SITREP

**Completed** — P3.3 **O0** (design → ADR-056 §mcp, three ⛩ operator rulings, DEFECT 3 found and
resolved, budget re-costed **~245–285 kT** and re-ratified) and **O1** (`adna-mcp-server` built at
`mcp/`, 26 smoke assertions + 24 red-test mutations green). Debt routed to P4.4 as **F-m** and
**F-n** (now **14** rows, derived not typed) and a broken markdown table in that same file repaired.
Mission index updated in the same change set across campaign `CLAUDE.md`, `session_prompts`, and
`STATE.md` (convention 7 / ADR-057), including striking P3.2's stale "NOT deployed" row.

**In progress** — nothing. P3.3 is **halted by design**, not blocked by a defect.

**Next up** — ⛩ **O2**: the npm publish, an operator act. From `mcp/`, run
`npm run smoke && npm run redtest` (both must exit 0), then `npm publish`. Then **O3**.

**Blockers** — none that stop work. Two ⛩ items stand, neither blocking:

- **O2** itself, by design.
- The authenticated **`npm whoami` / `npm org ls adna`** STATE records as owed. Ruling 1 (build
  unscoped) means this **no longer blocks anything**; it decides only whether a future scoped name is
  available, and can be answered at leisure.

**⚠ The one thing a reader must not infer** — "O1 done" is not "the machine door is open". The
package is **unpublished**; `/.well-known/mcp.json` and `/mcp` were re-probed after the build and are
**both still 404** `[D]`. This is stated in four places on purpose, because P3.2 spent a day reading
`completed` while its entire surface 404'd in production.

**Files touched** — created `mcp/` (package.json · tsconfig.json · src/index.ts · src/sources.ts ·
test/smoke.mjs · test/redtest.mjs · README.md · package-lock.json) and this session file; modified
`.gitignore`, `STATE.md`, `what/decisions/adr_056_agentic_surface_contract.md`,
`how/campaigns/campaign_haussmann/CLAUDE.md`, `…/missions/mission_haussmann_p3_3_mcp_server.md`,
`…/missions/mission_haussmann_p4_4_ci_hardening.md`, `…/missions/session_prompts_haussmann.md`;
committed the two inbound peer memos so they stop being untracked.

**Not touched** — `site/` entirely; `site/src/data/vaults.json` and every `sync:vaults` path (pt19 /
convention 5); homepage copy, `/.well-known/`, `llms.txt` (all O3, all gated on O2).

## Next Session Prompt

> You are **Rosetta** in `~/aDNA/aDNA.aDNA`. Continue `campaign_haussmann`. **P3.3 is `in_progress`,
> halted at ⛩ O2 by design** — O0 (design → ADR-056 §mcp) and O1 (build) closed 2026-08-21. The
> package `adna-mcp-server` exists at `mcp/`, is verified from a fresh client process (26 smoke + 24
> red-test assertions green), and is **UNPUBLISHED — nothing is live**; re-probe
> `adna.network/.well-known/mcp.json` and expect **404** before assuming otherwise.
>
> **First, ask the operator whether O2 fired**, because everything in O3 branches on it. If the
> publish landed: O3 ships the homepage agent-entry sentence naming llms.txt + the twins + the
> registry endpoint **and** the server with its one-line install, plus the `/.well-known/mcp.json`
> descriptor and an `llms.txt` section — the **DEFECT 3 discoverability limb**, without which
> `machine_eye` item 11 does not move no matter how good the server is. If the publish was deferred:
> the homepage names llms.txt + twins + registry endpoint **only**, the descriptor and the llms.txt
> section **do not ship** (a descriptor pointing at an unpublished package is a false claim on a
> machine surface), and the self-conformance sentence still ships — it never depended on MCP.
>
> Then the rest of O3: the published machine-legibility conformance report (the directive's §B.2
> **13-item** checklist), claim-register rows starting at **R-133** (the tool descriptions are claims
> and no gate can see them — that is F-i's family), the machine-eye **full** re-run, the AAR (SO#5),
> and the **A2** docs-MCP-server pattern memo owed to Vitruvius.
>
> Standing: open with `git ls-files --others --exclude-standard who/coordination/` — it found two
> memos this session and `git status` habits would not have. Run `gitleaks detect --source .` by hand
> (git-aware form; expect exactly **1** known FP) — the pre-push hook is a proven no-op. Honor pt19.
> Derive every count, type none.

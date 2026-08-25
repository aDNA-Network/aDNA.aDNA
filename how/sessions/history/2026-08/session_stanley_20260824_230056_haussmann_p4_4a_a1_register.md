---
type: session
session_id: session_stanley_20260824_230056_haussmann_p4_4a_a1_register
tier: 1
campaign: campaign_haussmann
mission: mission_haussmann_p4_4_ci_hardening
increment: P4.4a
objective: A1
phase: P4
persona: rosetta
operator: stanley
created: 2026-08-24
updated: 2026-08-24
status: completed
executor_tier: opus
token_budget_estimated: "~130–200 kT — the 16-row re-read recorded, five instrument fixes each red-tested, one new derived-count gate family, plus the discharge/route sweep. Inside P4.4a's ratified ~280–420 kT with ~110–140 kT already spent at A0."
token_budget_actual: "~200–240 kT content-load, one session — above the ~130–200 kT estimate; see the SITREP's budget note, SO#11 flagged not absorbed."
last_edited_by: agent_rosetta
tags: [session, haussmann, p4_4a, a1, register, debt, gates, f_o]
---

# Session — HAUSSMANN P4.4a at A1 (the register)

> Resumed after a context crash. The predecessor
> (`session_stanley_20260824_221214_haussmann_p4_4a_ac0`, now in `history/2026-08/`) shipped **A0**,
> **A0v** and **ruling 2**, authored its SITREP, and committed it — the crash landed after that, so
> **no work was lost**; only the `status:` flip and the move to `history/` were outstanding, both
> done at this session's open. Plan:
> `~/.claude/plans/please-read-the-claude-md-cosmic-church.md` (operator-approved).

## Intent

**A1 — the register.** Discharge, build, or route all **16 live rows**. ⛩ Operator ruled the cut:
**triage all 16, build the bounded set**, and defer the three whose blast radius is unmeasured
(`F-a` · `F-j` · `F-d`) **with that blast radius named on the mission's face** rather than
discovered at execution.

⛔ **A1 changes instruments, not surfaces.** No `site/src/` content change; no deploy.

## Session-open verifications `[D]` 2026-08-24T23:00Z

Convention 16's habit, run at open. This campaign's standing lesson is that inherited findings keep
coming back false — three of nineteen rows were already dead at the last read and nothing said so.

| Check | Result |
|---|---|
| ⛔⛔ **Deploy freeze** — `git cat-file -t 30c8163` / `f4fa9c5` | **both fatal** → lemur has not pushed → **FREEZE HOLDS** |
| Unpushed commits (`git rev-list --count origin/main..HEAD`) | **15** — derived, not read (was 9 at the predecessor's open) |
| P4.4 claimed from its **own `status:`** (never the index line — stale 5×) | `in_progress`, `increments: [P4.4a, P4.4b]` ✅ |
| Active peer sessions | none after the crashed file was closed |
| Register counts, derived (KW-14) | total **19** · struck **3** · **live 16** |
| Live row ids | `F-a F-c F-d F-e F-f F-g F-i F-j F-k F-l F-m F-n F-o F-p F-r F-u` |
| Gate spec files | **37** (suite baseline **574/574**) |

## ⛩ Operator rulings taken 2026-08-24 (this session)

| # | Question | Ruling |
|---|---|---|
| 1 | A1's cut, against ~150–280 kT remaining in P4.4a | **TRIAGE ALL 16, BUILD THE BOUNDED SET.** Build `F-o` · `F-p` · `F-i` · `F-f` + the `F-c`/`F-m`/`F-n` derived-count family. Close `F-u` `F-g` `F-l` `F-r`; route `F-e` → A3, `F-k` → template release. **Defer `F-a` `F-j` `F-d` to A1b with blast radius measured and named.** |
| 2 | The 15 unpushed commits | **PUSH AT THIS SESSION'S CLOSE**, as three separate acts: `gitleaks detect` → **STOP and read the result** → then push. Scanning and pushing in one command block is the recorded P3.3 process error. |

## Scope declaration (files this session may write)

- `how/campaigns/campaign_haussmann/missions/mission_haussmann_p4_4_ci_hardening.md`
- `how/campaigns/campaign_haussmann/artifacts/p4_4/**`
- `how/campaigns/campaign_haussmann/evidence/machine_eye/machine_eye.md` (F-o)
- `how/campaigns/campaign_haussmann/CLAUDE.md` (mission-index line + F-r convention — convention 7)
- `site/tests/gates/**` (F-p · F-i · the new derived-count gate)
- `site/tests/gates/fixtures/leak_allowlist.json` (F-i's scoped allowance)
- `site/scripts/check_live_headers.mjs` (F-f) · `site/astro.config.mjs` comment only (F-g)
- `what/doctrine/doctrine_credential_handling.md` (F-l's probe note)
- this session file

⛔ **No deploy. No `site/src/` change. Push only at close, on the ruled three-act sequence.**

## Progress

| # | Work | Output |
|---|---|---|
| 1 | Re-read all 16 live rows at the object, **coverage recorded** | `register_reread_20260824.md` §SECOND PASS |
| 2 | **F-o** — item 11's probe split; text limb **retired**, not filtered | `machine_eye_item11_probe.mjs` **12/12** |
| 3 | **F-p** — G15 guards on routes | `gate-17` **10/10** |
| 4 | **F-i** — gate-27 scans `.json`, allowlist scoped | `gate-27` **11/11** |
| 5 | **F-f** — header **values** compared | `check_live_headers.mjs` **10/10** |
| 6 | **F-c/F-m/F-n** — the derived-count family | `gate-41` **18/18** |
| 7 | **F-a** — gate-4 + `best-practice` (⛩ pulled forward) | `gate-4` **6/6** |
| 8 | **F-u · F-g · F-l · F-r** closed; **F-e · F-k** routed | register + doctrine §6.10 + convention 17 |
| 9 | Close cascade | `3cc659f` · `ffcc0f3` · `0c97af3` |

## SITREP

### Completed

**A1 is done. The register went 16 live → 6, and all six are routed rather than merely open.**
19 rows: **13 struck**, 6 live — F-d · F-j → **A1b** · F-e → **A3** · F-k → the next
`skill_template_release` · **F-m · F-n fenced by `gate-41`, explicitly NOT fixed.**

Seven rows fixed and red-proven; four closed; one (**F-a**) pulled forward from A1b on an ⛩ operator
ruling after its cost was measured. Six instruments shipped, each with its own red-test and passing
controls.

### Verification `[D]`

| Check | Result |
|---|---|
| Gate suite | **578/578** — exactly 574 + gate-41's 4, **derived**; no other spec moved |
| `alias_guard_redtest.sh` | **13/13** |
| `token_census_redtest.sh` | **10/10** |
| New red-tests | F-o **12/12** · F-p **10/10** · F-i **11/11** · F-f **10/10** · gate-41 **18/18** · F-a **6/6** |
| `astro check` (F-j's baseline, re-measured) | **26 errors** — unchanged from P3.2 |
| Alias re-probe (read-only, convention 16) | `/` · `/vaults.json` · `/api/registry.v1.json` · `/state-of-the-network/` all **200**; `/.well-known/adna-build.json` **404** = documented pre-bootstrap state |
| ⛔ Deploy freeze | **HOLDS** — `git cat-file -t` on `30c8163` + `f4fa9c5` both fatal, at open **and** close |
| Tree after red-tests | clean — every harness restores in a `trap` and the three that mutate vault records **verify the restore** before exiting |

### ⭐ Findings

1. **The obvious repair for F-o would have re-created F-o.** Counting capability tokens instead of
   the substring `mcp` fails: `/.well-known/mcp.json` returns **1 hit on a site with no MCP
   server**, because the changelog honestly says the endpoint 404s. **The site's honesty stratum
   guarantees it names its own absent capabilities**, so any text probe finds the disclosure of
   absence and scores it as presence. ⇒ **retire the limb, do not filter it.**

2. **Two rows typed what they should have derived, and both would have shipped red.** F-i named
   three enums; the derivation found **seven** (scoping to three would have left four firing).
   F-a estimated *"will surface pre-existing violations"*; measurement found **zero** — and that
   unchecked estimate had deferred a one-line change for **four missions**.

3. **Three instruments reported a PRECONDITION failure in the vocabulary of a SUBJECT failure**, and
   all three were mine. The F-o harness read **5/12** with the probe correct throughout (Docker held
   the port; the readiness check accepted *"something answers"* as *"my server is up"*).
   `alias_guard_redtest` read **10/13** with the guard correct throughout (`deploy_adna.sh`'s
   clean-tree guard firing on this session's own uncommitted file). A `-g` fragment with regex
   parens matched no test and reported as a failure. ⭐ **None was a wrong instrument** — this is a
   distinct class from the campaign's usual one, and the remedy is different: assert identity and
   preconditions **before** running, so *"I could not run"* can never be read as *"the thing is
   broken."*

4. **`gate-4` cannot defend its own tag set.** Replace its axe tags with a string matching no rules
   and it stays **green** — a gate asserting *zero violations* is structurally unable to distinguish
   *nothing was wrong* from *nothing was checked*. `a11y_bestpractice_redtest.sh` cases A/B are the
   only thing standing between the suite and a silently disarmed accessibility gate.

5. **`adr_index.md` matches its own glob**, so the index's documented drift check
   (`ls what/decisions/adr_*.md | wc -l`) counts the index as an ADR and is off by one permanently —
   54 real ADRs, not 55. *The instrument prescribed by the document is wrong about the document.*

### Blockers

- ⛔⛔ **Deploy freeze holds** — needs **lemur** to push `30c8163` + `f4fa9c5`. Outside this node's
  control. **P4.1, P4.2 and all of P4.4a remain built-not-deployed.**
- ⛩ **The Vitruvius ask is still undelivered** (A3; gates P4.4b's AC4).
- ⛩ **F-m's index backfill and F-n's MANIFEST content review are NOT done.** `gate-41` fences them;
  a green there means *no worse*, never *fixed*. ⚠ F-n must **not** be cleared by bumping a date.
- ⛩ Still owed, out of scope here: Hopper `ack_required` · Pygmalion · Mondrian #9 · P3.3 O2
  (`npm login`) · P2.6 O0b.
- ⛩ **O1's 12px floor stays `gap`** through all of P4.4 — a green A1 suite does not touch it.

### Next up

**A2** — the three rescoped-in gate classes: zero-console-error · off-site CTA-target *(a regression
guard, **not** a discovery instrument — P3.5 closed R-122/R-123; the probe already exists at
`artifacts/p3_5/deploy_probe_p3_5.mjs`)* · hub-substance floor (F19). Ruling 2's token census
already shipped as `gate-40`. Then **A3** — ⛩ the Vitruvius ask + the AAR.

### Files touched

**Created** — `artifacts/p4_4/{machine_eye_item11_probe.mjs,item11_probe_redtest.sh}` ·
`site/tests/gates/gate-41-derived-counts.spec.ts` ·
`site/scripts/{g15_guard_redtest.sh,leak_json_redtest.sh,live_headers_redtest.sh,derived_counts_redtest.sh,a11y_bestpractice_redtest.sh}` ·
this session file.
**Modified** — `site/tests/gates/{gate-4-a11y,gate-17-agentic,gate-27-leak-lint}.spec.ts` ·
`site/tests/gates/fixtures/leak_allowlist.json` · `site/scripts/{check_live_headers.mjs,alias_guard_redtest.sh}` ·
`site/astro.config.mjs` (comment only) · `what/doctrine/doctrine_credential_handling.md` ·
`campaign_haussmann/{CLAUDE.md,missions/mission_haussmann_p4_4_ci_hardening.md}` ·
`artifacts/p4_4/register_reread_20260824.md` · `evidence/machine_eye/machine_eye.md` ·
`evidence/claims/claim_register.md`.
**Moved** — the crashed predecessor session → `history/2026-08/`.

⚠ **Scope amendment, stated rather than absorbed.** The declaration above did not list
`evidence/claims/claim_register.md` or `what/decisions/`-adjacent reads. The register edit is the
§15.1 count section, which **§11.5 itself instructs** (*"Run it again if anything below this line
changes"*) and without which `gate-41` G41b ships red. Recorded here because a scope declaration
quietly exceeded is worth less than one amended in the open.

### Token budget

`token_budget_actual` ≈ **200–240 kT** content-load, one session — above the ~130–200 kT estimate,
inside P4.4a's ratified ~280–420 kT when added to A0's ~110–140 kT only if A2/A3 come in lean.
⚠ **Flagged, not absorbed (ADR-016/SO#11):** P4.4a is now at roughly **310–380 kT of a 280–420 kT
budget with A2 and A3 still to run.** The overrun's cause is legible — F-a was pulled forward and
six red-tests were authored rather than the planned five — but the arithmetic says A2+A3 will not
fit. **Expect a budget re-raise at A2's open**, and read that as this campaign's own SO#11 lesson
(*convention 13 runs before a DP ratifies a budget*) rather than as drift.

### Next Session Prompt

> Persona **Rosetta**. Open `how/campaigns/campaign_haussmann/CLAUDE.md` and
> `missions/mission_haussmann_p4_4_ci_hardening.md`. **P4.4a is OPEN at A2**; **A0 · A0v · ruling 2 ·
> A1 are all DONE** (`4a9bc09` · `ff4ad51` · `3cc659f` · `ffcc0f3` · `0c97af3`) — the debt register
> is **19 rows / 13 struck / 6 live, all six routed**, so do not re-scope it; read each remaining
> row's annotation for its destination. **Next is A2: the three rescoped-in gate classes** —
> zero-console-error, off-site CTA-target (**a regression guard, not a discovery instrument**; reuse
> `artifacts/p3_5/deploy_probe_p3_5.mjs`, which already ends with that check), and the hub-substance
> floor (F19). ⛔ **Re-verify the freeze at open** (`git cat-file -t 30c8163 f4fa9c5` must both fail)
> and re-probe the alias read-only (convention 16). Baselines: suite **578/578** ·
> `alias_guard_redtest.sh` **13/13** *(it now exits **2** with a message if the tree is dirty — that
> is a precondition, not a guard failure)* · `token_census_redtest.sh` **10/10**. Build with
> `npx astro build`, then `node scripts/inject_redirects.mjs .` **and**
> `node scripts/inject_negotiation.mjs .` before running gates outside a deploy. ⛩ **Raise the P4.4a
> budget at A2's open** — the session file explains why. ⛩ The **Vitruvius ask** (A3) is still
> undelivered and gates P4.4b's AC4. ⚠ **`gate-41` fences F-m and F-n; it does not fix them**, and
> F-n must never be cleared by bumping a date.

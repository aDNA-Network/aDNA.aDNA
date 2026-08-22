---
type: session
session_id: session_stanley_20260821_200408_haussmann_p3_3_o3_reduced
created: 2026-08-21
updated: 2026-08-21
status: completed
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p3_3_mcp_server
executor_tier: opus
token_budget_estimated: "~120–145 kT (ADR-016 / SO#11), re-derived rather than inherited. O3's ratified band was ~90–130 kT and it INCLUDED the DEFECT-3 discoverability limb, which the operator's defer-O2 ruling cuts. Split: A1 Venus intake + convention-15 amendment (~12) · A2 P0.4 close + AAR (~25) · A3 DEFECT-3 clause into the upstream idea + convention 13 (~8) · A4 gitleaks + push (~5) · B1–B7 reduced O3 — homepage statement, 13-item conformance re-run, delta packet, register rows, gates, captures, index hygiene (~70–95). O2 carries no agent cost; it is an operator act, and this session does not perform it."
token_budget_actual: "≈195 kT of main-loop content load against a ~120–145 kT estimate — over by roughly 1.4×, stated rather than absorbed (ADR-016 / SO#11). Under ADR-016's 2× retrospective trigger. Where it went: the estimate assumed the owed queue was four bounded chores, and two of them opened up. A2 (P0.4) was costed at ~25 kT for a close-and-AAR and cost closer to ~45 once a SECOND memo arrived mid-session and forced a live re-probe of another vault's instance plus a same-session strike of the AAR just written. A3 was costed at ~8 kT to add a clause and cost ~20 because the clause turned out to be wrong — the convention already asked the question, and diagnosing that correctly (rather than appending the sentence as instructed) was the session's most valuable output. B1–B7 landed near estimate (~85) despite the extra rebuild, because the reduced scope really was smaller. **The generalizable lesson for the next estimate: a queue item whose cost is bounded by OUR work is estimable; one whose cost is bounded by what a PEER sends mid-session is not.** Two of four owed items were the latter."
tags: [session, haussmann, p3, p3_3, o3, p0_4, mcp, deferred_publish]
---

# Session — HAUSSMANN P3.3 O3 (reduced) + the owed queue

Opened on *"Please read the CLAUDE.md and let's continue the campaign."*

## Opening state

- **P3.3 is `in_progress`, halted at ⛩ O2.** O0 (design → ADR-056 §mcp) and O1 (build +
  red-tested smoke) closed 2026-08-21. The package `adna-mcp-server` exists at `mcp/`, verified
  from a separate client process — **26 smoke assertions, 24 red-test mutations, all green** — and
  is **unpublished**. Nothing it built is live.
- Local `HEAD` `c8eb394`; `origin/main` at `58876e9` via `git ls-remote` `[D]` — **one unpushed
  commit**. The 8 dirty paths are `.obsidian/` + `.astro/` tooling noise, not authored content.

## ⛔ The opening finding — O2 is not performable on this node, GO or no GO

O2 is worded as an operator **GO**. Recon before planning found the GO is not the missing thing:

| Probe | Result `[D]` |
|---|---|
| `npm whoami` | **`ENEEDAUTH`** |
| `~/.npmrc` | **absent** |
| `NPM_TOKEN` · `NPM_AUTH_TOKEN` · `NODE_AUTH_TOKEN` · `NPMJS_TOKEN` | all **UNSET** |
| npm row in the Home.aDNA broker credential index | **none** |

There is **no npm identity anywhere on this node** — not an expired one, not an unexported one.
Publishing would require the operator to create or locate an npmjs account and `npm login`
interactively (browser + OTP), which is not a thing an agent can do or a GO can substitute for.

⭐ **This is the FOURTH instance in this campaign of one shape**: a gate asking for a GO on an
outward act whose **prerequisite does not exist on the tree that must perform it**. The installer
publish (GO granted, tarball existed nowhere). The `@adna` scope (DEFECT 1 — exists, empty,
ownership unverifiable). DEFECT 3 (a method that cannot reach the surface its test probes). Now
O2. The rule this campaign wrote at P3.3 O0 — *before a gate asks for a GO on an outward act,
verify the act's prerequisites are reachable from the tree that will perform it — the artifact,
the credential, the namespace* — **named the credential case explicitly, and O2 still shipped
without one.** Writing a rule down is not the same as running it, and this mission is now its own
counter-example twice over.

## ⛩ Operator ruling — defer O2, ship the reduced O3

Put to the operator with the table above. Ruling: **defer the publish; ship the pre-agreed "AC2
deferred" form of O3.** Consequences accepted deliberately:

- `machine_eye` item 11 stays **ABSENT** and is reported as such, not skipped.
- P3.3 does **not** reach `completed` — it stays `in_progress` at O2. No AAR yet (SO#5 binds at
  completion).
- No `/.well-known/mcp.json`, no `llms.txt` MCP section, no server mention anywhere. A descriptor
  naming an unpublished package is a false claim on a machine surface.

All four owed-queue items elected to ride this session.

## 📨 Intake — the sweep, and it was not empty

`git ls-files --others --exclude-standard who/coordination/` at open returned **one** memo, cited
by coord id per Berthier's `F-S228-02` (a memo described in prose without its filename reads as
unfiled to any discovery mechanism):

- **`coord_2026_08_21_venus_to_rosetta_neither_a_nor_b_the_bytes_exist`** — `ack_required: false`.
  Handled at A1 below.

⚠ **This channel has now delivered its 7th memo in 4 days, and every one of them arrived
untracked.** `git status` habits do not see them and a context clear loses them.

## Live premise re-probe (recon-at-execution, convention 12)

Run before any copy was written, because the reduced statement may name **only** what is live `[D]`:

| Surface | Result |
|---|---|
| `/llms.txt` | **200** `text/plain; charset=utf-8` |
| `/llms-full.txt` | **200** `text/plain; charset=utf-8` |
| `/api/registry.v1.json` | **200** `application/json; charset=utf-8` |
| `/vaults.json` | **200** `application/json; charset=utf-8` |
| `.md` twins (P3.1) | **10/10 → 200** `text/markdown`, both `/x.md` and `/x/.md` forms |
| `/.well-known/mcp.json` | **404** — correctly, and it stays 404 this session |

Also measured: the homepage names **no** machine entry point today. `/llms.txt` appears on the
site only in `site/src/components/common/Footer.astro`. The O3 statement is genuinely additive.

## 📨 Second intake — the close sweep earned itself in one session

`git ls-files --others --exclude-standard who/coordination/` at the **close** returned a memo that
was not there at the open:

- **`coord_2026_08_21_aspasia_to_rosetta_adr054_prerequisites_green`** — `ack_required: false`.
  **The PUSH signal Aspasia promised: all three ADR-054 prerequisites GREEN.**

⭐ **This is the single best thing that happened this session, and it is an accident of discipline.**
Hours earlier, closing P0.4, its AAR recorded a **Finding** — *"a push trigger whose transport is a
directory nobody watches is a poll with extra steps"* — and adopted a **Change**: sweep at every
session **open AND close**, not open only. **The very next sweep caught the memo that made that same
AAR's follow-up false.** Written in the same session, struck in the same session, by the rule written
one paragraph above it.

Had the sweep stayed open-only, P0.4 would have closed on *"P3.4's answer is probably NO-GO"* while
the memo reversing it sat untracked on disk.

**Re-probed `[D]` rather than believed** — a peer memo is `[R]` and the register's rows demand `[D]`:

| Probe | Result |
|---|---|
| `branding.product_name` | **"aDNA Community"** ✅ |
| `branding.theme_color` | **`#9d7cd8`** ✅ (this vault's own ADR-032 primary) |
| `legal.terms_url` / `privacy_url` | both non-null → `aDNA-Network/community-policies` **200** ✅ |
| `GET /` raw HTML `<title>` | **`Fluxer`** ⛔ |

⇒ **PR-1 MET · PR-3 MET · PR-2 owner-green, method-red.** Aspasia disclosed the residual unprompted:
the static title/favicons/manifest are baked into upstream's app-proxy binary and a fork is ruled out
by their ADR-000. **2 of 3 by this register's stated methods; 3 of 3 by owner attestation.**

⭐ **FIFTH instance in this campaign of one family — a verification method that does not reach the
thing it verifies.** PR-2 probes raw HTML; the branding lives where the client reads it. ⛔ **Not
adjudicated here**: whether "minimal aDNA branding" means *what a client renders* or *what an
unauthenticated fetch sees* is a ⛩ DP7 call at P3.4's O0.

## Work log

| # | Item | Outcome |
|---|---|---|
| A1 | Venus intake + convention 15 | Tracked; **convention 15 grew a third face (reachability)**; habit adopted, checker deliberately not built |
| A2 | P0.4 close | `completed` **with AAR**; register 0/3 → 1/3 → **2/3 method / 3/3 attested**; follow-up struck same-session |
| A3 | DEFECT-3 clause | ⭐ **Found the mission's own diagnosis was FALSE** — convention 13 already asks the question. Real gap = coverage + visibility. Both amended |
| A4 | gitleaks + push | `gitleaks detect --source .` (git-aware) → **855 commits, 1 leak** = the known FP (`generic-api-key` on the prose *"token pipeline, measured+gating"*, old commit `a1b586f8`) |
| B1 | Homepage machine-door block | Shipped reduced; **222** twins derived; ⭐ **a false claim cut from my own copy at the register pass** |
| B2–B4 | Conformance report · delta packet · R-133–R-139 | All three; report **leads with the unmoved item**, not the nine green rows |
| B5–B6 | Gates · captures · indexes | **552/552**, axe **0 both themes**, 12 captures; 4 index surfaces updated same-diff |
| — | Debt | **F-o** (item-11 probe gone noisy) + **F-p** (G15 guard defect) → P4.4, now **16 rows a→p** |

## SITREP

### Completed

- **P3.3 O3 (reduced)** — homepage `machine-door` block **shipped, deployed and live-verified on the
  alias** (`2026-08-22T03:40:39Z`, `tree=43e0280`). Names `/llms.txt`, the `.md` twins and
  `/api/registry.v1.json` only; twin count **222**, derived. Self-conformance sentence on the
  homepage for the first time.
- **AC4's conformance report** — all 13 items re-run live, not just the flattering two.
- **P0.4 CLOSED** with AAR (SO#5) — then its own follow-up struck the same session (below).
- **Convention 15** gained a third face (reachability). **Convention 13** amended — with a
  correction to this mission's own false diagnosis of it.
- **`idea_upstream_mission_ac_coherence_check`** gained two obligations: completeness + a coverage
  record.
- **Pushed** `58876e9..43e0280`. **gitleaks** `--source .`: 855 commits, **1 leak = the known FP**.

### In progress

- **P3.3 stays `in_progress` at ⛩ O2.** No AAR yet — SO#5 binds at completion, and this mission is
  not complete.

### Next up

1. ⛩ **O2** — needs an **interactive operator `npm login`** before any GO is actionable, then
   `npm run smoke && npm run redtest` (both exit 0) → `npm publish`. Then the discoverability limb
   (`/.well-known/mcp.json` + `llms.txt` section) and the homepage's server line, which were
   pre-agreed to ride the publish.
2. **P3.4** — now claimable *and* materially changed: DP7 is a real question, not a formality.
3. **P4.4** carries **16 debt rows (a→p)**, two of them added today.

### Blockers

- ⛩ **O2 — `#needs-human`.** Not an agent-solvable step: there is no npm identity on this node.
- ⛩ **O0b** (P2.6's operator-gated TTFS run) — unchanged, still the only other Decade-1 leftover.

### Files touched

37 staged in `43e0280`, plus the post-deploy record updates. New: conformance report · delta packet ·
12 captures · 2 tracked memos · this file.

### ⭐ What this session actually taught — three instruments were wrong before the site was

1. **My own copy.** *"A by-product, not an add-on bolted on later"* — false, and disproved by this
   campaign's own mission files. Caught at the register pass, before shipping.
2. **This mission's diagnosis of convention 13.** It claimed the convention *"does not ask whether
   each method reaches the surface its test probes."* It does — that is its second sentence, and
   P3.1 is already logged in it as the identical failure mode. **The real gap is coverage and
   visibility**: *a correct question applied partially reports exactly like a correct question
   applied fully.*
3. **Item 11's own probe.** Its text half now returns 5 incidental `mcp` hits where the baseline
   found 0, purely because P3.1 grew the corpus 2 KB → 950 KB. A future `grep -c` would score the
   item as moved.

Plus a fourth, in tooling: a `.replace()` in my own edit script **silently no-op'd** while reporting
success. Fixed by asserting every replacement — and the very next run caught a real mismatch.

> **The through-line: five times this session, the thing that was wrong was the instrument, not the
> subject.** Convention 14 said an instrument must be demonstrated to fail before it is believed.
> This session is the argument for a sibling clause: **an instrument must also report what it
> actually touched**, because a clean result and an unrun result are the same string.

### Next Session Prompt

> You are Rosetta in `~/aDNA/aDNA.aDNA`. Read the campaign `CLAUDE.md` and
> `missions/mission_haussmann_p3_3_mcp_server.md`. **P3.3 is `in_progress`, open at ⛩ O2 — its O0,
> O1 and O3 are all closed and O3's homepage block is deployed and live-verified.** O2 is the npm
> publish and it is **not performable by an agent**: this node has no npm identity (`npm whoami` →
> `ENEEDAUTH`, no `~/.npmrc`, no token, no broker row), so it needs an interactive operator
> `npm login` first; then `npm run smoke && npm run redtest` from `mcp/` (both must exit 0), then
> `npm publish`. Only after that do the discoverability limb (`/.well-known/mcp.json` + an
> `llms.txt` section) and the homepage's server line ship — all three were pre-agreed conditional on
> the publish, because a descriptor naming an unpublished package is a false claim on a machine
> surface. **`machine_eye` item 11 is ABSENT and must stay reported as ABSENT until then.** If the
> operator prefers to move on instead, the ruled Decade-2 order puts **P3.4** next — now claimable
> (P0.4 closed 2026-08-21) and materially changed: Aspasia's PUSH signal declares all three ADR-054
> prerequisites green, and a direct re-probe found **PR-1 MET · PR-3 MET · PR-2 owner-green but
> method-red** (config says "aDNA Community"; the served HTML `<title>` still says `Fluxer`,
> an upstream ceiling their ADR-000 forbids fixing). **⛩ DP7 is therefore a genuine question** —
> does "minimal aDNA branding" mean what a client renders or what an unauthenticated fetch sees? —
> and P3.4's O0 owes a live re-probe regardless. **Sweep
> `git ls-files --others --exclude-standard who/coordination/` at session open AND close** — that
> drop-box has now delivered 8 untracked memos in 4 days and one arrived mid-session today.

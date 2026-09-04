---
type: session
session_id: session_stanley_20260904_202940_haussmann_four_rulings
created: 2026-09-04
updated: 2026-09-04
status: completed
tier: 2
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: null   # ⛩ OPERATOR-RULED PLANNING GATE, executed. Four rulings taken at one sitting; this session records them into their instruments, clears `main`'s red, and OPENS `GR-5` with a signed budget. Opens no mission of its own.
increment: "⛩⛩ Four rulings discharged in one gate — (1) `gate-39` pin = re-derive in CI + auto-fallback rider · (2) ADR-056 ratified with a debt rider · (3) `gate-49 doc-hub` re-baseline ruled MECHANICAL and permitted to this desk · (4) the TTFS runner folded into the P5.1 recruitment. Plus the charter drift the count-derivation exposed."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~90–150 kT (recon + remote reconciliation ~20 [SPENT] · gate-49 control + re-baseline + CI ~30–50 · the four ruling records ~25–45 · charter/STATE drift ~15–25 · handoff ~10). ⚠ Costed AFTER reading `gate-49`'s TEMPLATES list per SO#11's O2 retrospective, seventh consecutive sitting: **no re-baseline of `home` fires** — this sitting ships no copy and no changelog entry. `doc-hub` re-baselines for a reason already diagnosed, and that is the work, not a side effect of it."
token_budget_actual: "~135 kT (est. 90–150 — inside band, upper half; the overage driver was the unbudgeted AMENDMENT 1 investigation, which was a finding rather than a cost)"
tags: [session, haussmann, rulings, adr_056, gr_5, gate_49, p5_1, tier2]
scope_declaration:
  - STATE.md
  - how/campaigns/campaign_haussmann/campaign_haussmann.md
  - how/campaigns/campaign_haussmann/missions/mission_haussmann_gr_5_flaky_gates.md
  - how/campaigns/campaign_haussmann/missions/mission_haussmann_p2_6_midscore.md
  - how/campaigns/campaign_haussmann/missions/mission_haussmann_p5_1_human_evidence.md
  - what/decisions/adr_056_agentic_surface_contract.md
  - what/decisions/adr_index.md
  - site/tests/gates/__screenshots__/doc-hub-{dark,light}.png
conflict_scan: "one peer session file present at open — `session_stanley_20260904_155111_haussmann_deploy_gr5.md`, SITREP complete, both its ⛩ GOs discharged. Closed by this session (O0). No live git process, no `.git/index.lock`, no peer writer. `[D]`"
---

# Session — the gate that was four rulings, and the divergence that was a branch

## Derived at the open (convention 12 — recon-at-execution; nothing below is carried)

| Fact | Value | Command |
|---|---|---|
| **Clock** | **2026-09-04 20:29 UTC** | `date -u` |
| HEAD | `6d10611` — **on `main`** | `git rev-parse HEAD` |
| `origin/main` | **`6d10611`** — derived **at the remote** | `git ls-remote origin main` |
| Ahead / behind | **0 / 0** — in sync | `git rev-list --left-right --count` |
| `main` CI (**convention 19**) | ❌ **`failure`** at `6d10611`, run `33895141586`, 7m17s | `gh run list` |
| …**its width** | **exactly one step** — `gate-49` visual regression. Everything else passed. | `gh run view --json jobs` |
| Production | **`2a72efe`**, built 2026-09-04T16:08:57Z, `mode=prod` | `curl /.well-known/adna-build.json` |
| Feature branch | **`course/slice-b` = `58292eb`** — unmerged, 5 lesson files, **not** a conflict | `git branch -vv` |
| Dirty tree | `.obsidian/*`, `.astro/`, one capture report — **all outside** the deploy guard's scope | `git status --porcelain` |
| Docker | daemon up, `28.2.2` — the in-container re-baseline is performable | `docker info` |

## ⭐ FINDING 1 — the "diverged remote" was a BRANCH, and the plan named two cases when there were three

The planning gate recorded `origin/main = 6d10611` as *"not present in this tree"* and `58292eb` as
*"unpushed"*, and set A1 up to choose between **fast-forward** and **rebase**. Both were wrong,
and the third case is the mundane one:

| The plan said | Derived at the object `[D]` |
|---|---|
| `6d10611` unknown to this tree | It **is** `main`, and `main` is **in sync with origin** (0/0) |
| `58292eb` unpushed, possibly diverged | It is the tip of a deliberate feature branch **`course/slice-b`**, unmerged **by design** |
| "a second writer landed mid-sitting" | A peer session ran `git checkout main` at **16:50:05 UTC**; it is now **20:29 UTC** — nearly four hours, no live git process, no `index.lock` |

⇒ **Nothing was owed, no rebase was needed, and no coordination was required.** ⭐ The reason the
planning desk got it wrong is worth naming: it read `git log origin/main..HEAD` against a
**stale local tracking ref** and treated the answer as a fact about the remote. `git ls-remote`
was run — correctly — but the *second* command was not, so a fresh remote fact was compared
against a stale local one and the mismatch was read as divergence. **This is `F-u`'s family
again** (a claim asserted more confidently than it was checked), and the falsifying command is
one `git branch -vv`.

⚠ **What WAS real: HEAD moved under this desk mid-sitting.** `git rev-parse HEAD` returned
`58292eb` at 16:47 and `6d10611` at 20:29. That is the shared-tree hazard, and it is the reason
this session declares Tier 2 and a scope block. It is **not** live now, and the check that says
so is `pgrep` + `index.lock`, not an assumption.

## ⭐ FINDING 2 — ruling 3 is CONFIRMED at the object, and its limit is stated rather than assumed

Ruling 3 permitted this desk to re-baseline `gate-49 doc-hub` on the ground that the change is
**mechanical**. Checked before acting on it, not after `[D]` — `git show b2e943b -- site/src/pages/learn/index.astro`:

- a **hardcoded** `CardGrid` card (`href: '/learn/course'`) — **not** derived from the `course`
  collection, and
- two heading renumbers, `2 · Practice with a tutorial` → `3 ·` and `3 · Compare` → `4 ·`.

⇒ **Two consequences, and the second is the one that mattered to sequencing:**

1. **The ruling holds.** No layout or IA judgment is embedded; nothing about the course's lesson
   content renders on this page.
2. ⭐ **Because the card is hardcoded, lessons 3–7 landing will NOT re-red this baseline.**
   `learn/index.astro` is **byte-identical on `main` and `course/slice-b`** `[D]`, and `/learn/course/`
   is not one of the 12 pinned templates. ⇒ **the re-baseline is done once, on `main`, now** — it
   does not have to wait for the merge and will not be invalidated by it. *(Had the card been
   collection-derived, this sitting would have had to re-baseline twice, and doing it now would
   have been the wrong order.)*

⚠ **The limit, recorded on its face:** the new baseline **does** certify the rendered typography of
the new section's own paragraph copy, because that copy is on this page. It certifies **nothing**
about lessons 1–7, which are not. Convention 4 is satisfied at that boundary and not beyond it.

## O0 — session hygiene

Peer session `session_stanley_20260904_155111_haussmann_deploy_gr5.md` closed and moved to
`how/sessions/history/2026-09/`. Its SITREP was complete and both its ⛩ GOs discharged.

## O1 — ⛩ ruling 3: the `gate-49 doc-hub` re-baseline `[D]`

Commit `5246e78`. Mechanism was already built (`site/scripts/visual_regression_container.sh`,
image pin asserted against `gates.yml` by the script itself). Sequence, control first:

| Step | Result |
|---|---|
| 1. `check` | **2 failed / 24 passed** — exactly `doc-hub` dark + light ⇒ **control condition met** |
| 2. `baseline` | 26 passed, snapshots rewritten |
| 3. **`git status` count** | ⚠ **4 changed, not 2** ⇒ **stop-condition fired** |
| 4. revert extras | `home-dark` + `home-light` restored; count = **2** ✅ |
| 5. re-`check` | `doc-hub` green; **`home` now red** — see AMENDMENT 1 in GR-5 |

⭐ **The control paid for itself on its first run**, which is convention 14's whole claim
(*an instrument is not believed until it has been demonstrated to fail*) arriving as a live event
rather than a maxim.

⛔ **AND MY FIRST READING OF IT WAS WRONG.** I recorded the 4-not-2 result as *"sub-threshold byte
drift being silently absorbed."* **There is no sub-threshold** — `playwright.config.ts` sets
`maxDiffPixels: 0`. `home` had genuinely differed at that moment. The **action** (revert) was right;
the **reason** I gave for it was not, and the correction is here rather than quietly dropped.

## O2 — ⛩ ruling 1: `GR-5`'s gate signed `[D]`

`status: proposed → active`; pin ruling **option (1) + the conditional fallback rider** written into
§The ⛩ ruling; budget **ratified at ~220 kT** (top of band — option (1) is what the top was costed
for); `phase: P4 → GR` corrected (it was the only GR mission carrying a phase number).
**AMENDMENT 1** added for the fourth `F-ab` surface, with its cost **flagged, not absorbed**.

## O3 — ⛩ ruling 2: ADR-056 ratified with its debt rider `[D]`

`status: proposed → accepted`, 4-field block filled, debt rider attached. Liveness **re-probed at
ratification** (2026-09-04 20:37 UTC) rather than inherited: clauses 1–4 + 7 ✅ live · clause 5 ⛔
(`/.well-known/mcp.json` 404, `npm whoami` ENEEDAUTH) · clause 6 ⛔ unbuilt. Index tally
**derived**: 53 accepted · 1 amended · **0 proposed** — the vault now carries no `proposed` ADR.

⚠ **A false negative of mine, caught before it reached the rider.** I probed
`/api/registry/v1/vaults.json` → **404** and nearly recorded clause 3 as dead. The real endpoints
are `/vaults.json` and `/api/registry.v1.json`, **both 200**. *A guessed URL is not a measurement of
a surface* — convention 16, and the same shape as `F-e`'s `find` over the wrong vault.

## O4 — ⛩ ruling 4: the TTFS runner folded into P5.1's recruitment `[D]`

Recorded in **P2.6** (O0b row + status) and **P5.1** (§AMENDMENT 2). O0b's non-builder condition is
**MET, not waived** ⇒ `D3` will not be CoI-limited. ⭐ Surfaced the consequence nobody asked about:
it **falsifies the antecedent** the 2026-08-26 signature used to make AC-3→AC-2 unconditional.
⛔ **Not reordered** — ⛩ one line owed at P5.1's open.

## O5 — charter + STATE drift `[D]`

`mission_count` **31→32** · `estimated_sessions` **44–59→45–61** (both derived by `ls | wc -l`) ·
GR section **three missions stale**, rows added for GR-2…GR-5 and the *"Lane D has no mission file"*
sentence struck · **DP7 folded into DP9** (its row and P3.4's mission file directly contradicted
each other) · `STATE.md` *"Active Blockers: None."* replaced with the real five · charter `updated:`
moved for the first time since **2026-08-20**.

## ⚠ A SELF-INFLICTED COST, RECORDED BECAUSE IT IS A REPEAT

**Pushing the records (`3889c29`) while the gate run for `5246e78` was in flight CANCELLED that
run** — 6m59s of CI discarded, and the verdict on the re-baseline delayed by a full cycle. The
campaign log already carries **two** cancellations of exactly this shape (`33894908555`,
`33894297683`), so this is the **third**. ⇒ **Records belong with their rulings, but a push belongs
after the run it would cancel** — or in the same push as the code. Cheap to avoid, and nobody had
written it down.

⛔ **A second instrument defect, mine, caught before it misled anyone:** I read in-flight CI with
`select(.conclusion!="success" and .conclusion!="skipped")`, which **matches `conclusion: null`** —
so *steps that had not finished* were reported as `FAIL:`. That is a **false red about false reds**,
inside the campaign that has `GR-3` (the false red) in its own mission list. Correct filter:
`select(.conclusion=="failure")`, and only after `status == "completed"`.

## CI — ⭐ `main` IS GREEN, and the re-baseline transferred `[D]`

Run **`33917725977`** at `3889c29` → **`success`**. Read with the **corrected** filter
(`select(.conclusion=="failure")`, after `status == "completed"`):

| Reading | Value |
|---|---|
| Failed steps | **0** |
| Standing lane | **682 passed** (4.3m) |
| `gate-49` | **26 passed** (38.5s) — including `doc-hub`, both themes |

⭐ **The locally-generated baseline transferred to CI byte-for-byte**, which is AC1's in-container
amendment doing exactly what it was written to do — and it is worth recording as a *positive*
observation, because the same sitting falsified a different premise of the same amendment.

⚠ **`F-ab`'s rate, updated honestly:** `home` **passed in CI again**. The tally is now
**local 1 pass / 2 fail · CI 2 pass / 0 fail** — n=5 across two environments. Still **not a rate**;
still exactly why `GR-5 AC-1` exists. ⛔ Note the asymmetry rather than explaining it away: every
local failure and every CI pass is consistent with *"CI is a quieter machine"*, which is a
**hypothesis this sitting did not test** and which `AC-1` must not assume.

## SITREP

**Completed** — ⛩⛩ **all four operator rulings recorded into their governing instruments**, not
into a session file someone would have to find: **`GR-5` SIGNED** (`active`, ~220 kT, pin ruling +
fallback rider, `phase` corrected) · **ADR-056 RATIFIED** with its debt rider ⇒ **the vault carries
no `proposed` ADR** (53/1/0, derived) · **`gate-49 doc-hub` re-baselined** and **`main` is GREEN**
(682 + 26, 0 failed steps) · **TTFS runner folded into P5.1's recruitment** (O0b MET, not waived).
Charter + STATE drift closed in the same sitting: `mission_count` 31→32, `estimated_sessions`
45–61, GR section un-staled by three missions, **DP7 folded into DP9**, `Active Blockers` corrected
from a false *"None."*, charter `updated:` moved for the first time since 2026-08-20.

**In progress** — nothing.

**Next up** — Agent-side: **`GR-5 O1`**, the rate harness, now over a **four**-gate set.
⛩ Operator-side, in this order: **the course-deploy GO** (⭐ *before* recruitment — `AC-1`'s
stimulus is the live hero at a recorded stamp), then **`P5.1`'s five cold readers**, one of whom
runs the TTFS. Then `P5.2` → **⛩ DP9**. Outward-acts batch rides any sitting.

**Blockers** — **none agent-side.** Everything remaining that moves the site is human-gated.

**Findings this sitting** — three of them are corrections of this desk's own instruments, which is
the pattern worth naming: (1) the *"diverged remote"* was a **branch** — a fresh `ls-remote`
compared against a **stale tracking ref**; (2) the 4-not-2 baseline result was misread as
*"sub-threshold drift"* when the tolerance is **zero**; (3) an in-flight CI probe reported `FAIL:`
for **unfinished** steps — a false red inside the campaign that has *the false red* as a mission.
⇒ **Each was caught by re-deriving rather than by re-reading**, and none reached an artifact.

**Files touched** — `STATE.md` · `campaign_haussmann.md` · `mission_haussmann_gr_5_flaky_gates.md`
· `mission_haussmann_p2_6_midscore.md` · `mission_haussmann_p5_1_human_evidence.md` ·
`adr_056_agentic_surface_contract.md` · `adr_index.md` ·
`site/tests/gates/__screenshots__/doc-hub-{dark,light}.png` · this session file · the closed peer
session. Commits `5246e78`, `3889c29`; both **verified at the remote**, not at a tracking ref.

**Next Session Prompt** — *Operation HAUSSMANN, aDNA.aDNA (Rosetta). **`main` is GREEN** at
`3889c29` (run `33917725977`: 682 + gate-49 26, 0 failed steps) and **the vault carries no
`proposed` ADR**. Derive at your open: `date -u`, `git ls-remote origin main` (**at the remote** —
`F-s`), `gh run list --workflow=gates.yml --branch main -L 5`, and production's stamp from
`/.well-known/adna-build.json` (expect **`2a72efe`** — `/learn/course/` is **404 by ruling**, and
that 404 is the falsifiable proof the 2026-09-04 deploy scope still holds). **`GR-5` is SIGNED and
`active`** — start at **O1**, the rate harness, and note it now covers **FOUR** surfaces, not
three: `AMENDMENT 1` added **`gate-49`/`home`**, which differs by 17–19 px on a gate configured
`maxDiffPixels: 0`, **falsifying that config's own stated premise** that in-container generation
removes all non-determinism. Carry the ⛩ pin ruling: **re-derive `worstPx` in CI, strictly after
AC-1**, with the **conditional fallback rider** — if CI is *itself* unstable across n runs, fall to
advisory automatically with the measured instability as the reason; ⛔ never 7.9 → 7.4. Running
`F-ab` tally for `home`: **local 1 pass / 2 fail · CI 2 pass**, and the local-vs-CI asymmetry is
**an untested hypothesis, not an explanation**. ⚠ Two ⛩ items are owed from the operator and one
has a trap: **the course-deploy GO must be taken BEFORE `P5.1` recruitment opens**, because
`AC-1`'s stimulus is the live production hero at a recorded build stamp; and **one line at `P5.1`'s
open** on whether the `AC-3 → AC-2` ordering is released, now that ruling 4 (2026-09-04) moved AC-2
to a cold reader and **falsified the antecedent** that made it unconditional. ⛔ Operational rule
this sitting learned the hard way, third sighting: **do not push records while a gate run is in
flight — it cancels the run** (`33917159315` lost 6m59s that way).*

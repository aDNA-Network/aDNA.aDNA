---
type: session
session_id: session_stanley_20260825_223916_haussmann_p4_5b_o0
tier: 1
created: 2026-08-25
updated: 2026-08-25
status: completed
owner: stanley
persona: rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p4_5_voice_rewrite
increment: P4.5b
objective: O0
executor_tier: fable   # declared per the mission frontmatter; ⚠ this session is running OPUS — see the note below
token_budget_estimated: "~200–320 kT across 2 sessions for all of P4.5b (mission frontmatter); this session carries O0 only"
token_budget_actual:
last_edited_by: agent_rosetta
tags: [session, haussmann, p4_5b, voice, o0, pre_build_gate]
---

# Session — HAUSSMANN P4.5b O0 (voice guide + the convention-13 pre-build gate)

> **Read cold.** Persona **Rosetta**. Campaign governance:
> `how/campaigns/campaign_haussmann/CLAUDE.md`. Mission:
> `how/campaigns/campaign_haussmann/missions/mission_haussmann_p4_5_voice_rewrite.md` (P4.5b half).

## Why this session exists

**P4.5b is next in the ratified DP6 order** (convention 11:
`… → P4.4 → P4.3 → **P4.5b** → P5.1 → P5.2`), confirmed by the operator at this session's open. It is
**the last build mission of the campaign**.

The handoff note in `MEMORY.md` read `NEXT = P5.1`. That is the *precondition* sense — P5.1's G-11
deploy-precondition went green when the freeze lifted. It is **not** the order. Two independent
instruments say P4.5b runs first: the DP6 order above, and P5.1's own
`depends_on: [mission_haussmann_p4_5_voice_rewrite, mission_haussmann_p4_4_ci_hardening]`, both of
which are `in_progress`. And the substantive reason: **P4.5b rewrites the exact surfaces P5.1's
panellists cold-read** (home, get-started, what-is-adna, community), so running P5.1 first buys
transcripts about copy scheduled for replacement — G-11's own defect class in slow motion. Recorded
here rather than left as a note and a queue disagreeing.

## Scope declaration

**This session executes O0 only, and HALTS at the operator gate.** No site copy is rewritten.
`human_gate: true` on P4.5b is scoped to exactly this gate (the voice-guide sign-off + the AC
amendment).

| # | Item | State |
|---|---|---|
| O0a | Convention-13 AC×V coherence pass, **complete**, coverage recorded | — |
| O0b | FKGL re-baseline over the P3.1 `.md` twins, **including `/`** | — |
| O0c | Derive the top-20 page list; re-probe the clinician's 11-item confusion list | — |
| O0d | Author the voice guide + the AC amendment proposal → **⛩ HALT** | — |

**Out of scope, named so it is not silently absorbed:** P4.4b · P3.3 O2 · P2.6 ⛩ O0b (the
clean-machine TTFS run) · F-v's VoiceOver sitting · registry *data* (honor pt19). One deferred item
is queued behind this gate: **O4, delivery of the three staged Vitruvius memos**, ⛩ operator-GO'd at
this session's open, to be shown before sending.

## Opening state (verified at the object, 2026-08-25)

- `HEAD` = `origin/main` = `4092a69` — **nothing unpushed**, in sync with the peer writer (lemur).
- Production alias serves `6675442` (`/.well-known/adna-build.json`, `built_at`
  `2026-08-25T22:57:49Z`, `mode: prod`) — carries P4.1 + P4.2 + P4.3 + P4.4a.
- `https://adna.network/install.sh` → `VERSION="0.4.17"` — **both writers' work is live at once**;
  F-s is discharged, not fenced.
- Suite last derived at **628/628**, zero xfail. Debt register **6 live rows, all routed**.
- No conflicting session in `how/sessions/active/`.

## ⚠ Executor-tier divergence, declared at the open not the close

The mission declares `executor_tier: fable`. **This session is running `opus`.** P4.1's AAR recorded
exactly this defect — *"`executor_tier: fable` sat unremarked for four sessions while every session
ran opus; a declared tier nobody honours is worse than none."* Stating it at the open rather than
discovering it at the AAR. O0 is a judgment objective (a coherence pass, a re-baseline, and authoring
a voice guide), which is opus-class work; whether **O1–O2's rewrite passes** drop to `fable` is a
question for the amendment proposal, not something to absorb silently.

## Findings

All `[D]` unless marked. Surfaces named at each assertion (conventions 16 + 17).

**F1 — The convention-13 matrix has two directions and only one had ever been run.** Every prior sighting
of this pass reads AC→V (*can the stated method move the stated test?*). Read V→AC, the same 16 cells ask
*is this criterion tested by anything at all?* — and **AC-a is covered by zero limb**. All four V limbs
measure rendered pages; AC-a's deliverable is a governance document. **P4.1's structural gap inverted.**
⇒ run both directions; it costs no extra cells.

**F2 — G-10 measured: the disclosure is misplaced, not missing.** Surface `dist/**/*.html`, tree
`6675442`. Persona-naming pages **41** · disclosing pages **4** (`/about`, `/state-of-the-network`,
`/community/proposals/aep-1`, `/community/proposals/aep-2`) · *"tended by"* **3**, and the one that does
not disclose is **`/`**. The AC's own 3-phrase grep ran over `site/src/pages/**` and could not have found
them — they render from content collections and components. **Third instance of a negative result
narrower than its conclusion.**

**F3 — Two clinician items are content in the wrong place, and they converge on the homepage.**
*"ancient DNA"* addressed on 4 pages, all deep reference/concept; none is `/`, `/learn`, `/get-started`
or `/about`. Same shape as F2. And `/` is simultaneously the worst-measuring first-contact surface
(**13.90** vs target 10). **A coherence gap, a cold-read and a reading-level measurement point at one page.**

**F4 — The charter's FKGL figure is unusable as a *before*, three ways.** Corpus was a session scratchpad
(`.../234be40f-.../reading_extracts/`), `test -d` → **absent**; ~11 missions stale
(`/learn/what-is-adna` 1301 → 944 words); **`/` never measured**. `V1` asks for *deltas*. ⇒ re-baselined
over P3.1's `.md` twins — a committed build artifact. **The twins solved an extraction problem nobody had
connected them to.**

**F5 — The top-20 derived, and it contradicts AC-b.** Inbound-link ranking over 226 built pages:
**exactly 20 routes at 226 inbound, then a cliff to 141.** It landed on 20 without being chosen. But
`/learn/what-is-adna` is **rank 21** — `/learn` is in the nav, its child is not — while AC-b names it a
first-contact target. Operative scope **21 = top-20 ∪ the four named**, stated not silently resolved.

**F6 — Fourth consecutive re-probe shrinking inherited scope.** `/get-started` **9.69, already meets
AC-b** (was 15.85). **3 of the clinician's 10 items are dead** (*3 Conformance Levels* · *Production Tidy
pt08*, retired by P1.3 · *org vault pending*). Live scope **7** — and **C8 is 75 pages from one line**,
`VaultRelationshipBlock.astro:30`.

**F7 — G-5's inverse, worth naming as a class.** AC-a was amended 08-24 around the freeze
(*"publication NAMED AS OWED … NEVER CLAIMED"*). **The freeze lifted 08-25.** G-5 caught criteria that
*could not go green*; this is a criterion that now **under-claims**. ⇒ *a criterion amended around a
temporary condition must be re-read when the condition expires.*

**F8 — `/vaults` 40.96 is page shape, not prose.** `sentences: 3 · words: 228 · wps: 76` — a card list
whose ~77 terminal marks collapse to 3 detected sentences. Blast radius across **all 223 twins: 3 pages**
(`/vaults` 76 · `/learn/concepts` 51 · `/reference/specification/1-introduction-scope` 45). Load-bearing
for AC-d: a CI trend report without a shape guard emits a permanent false alarm.

**F9 — the twin preamble biases every measurement, and the bias was measured rather than assumed.**
`reading_level.mjs` strips frontmatter/code/tables/HTML/lists but **not blockquotes**
(`scripts/reading_level.mjs:20-45`), so each twin's 4-line machine-facing header is counted as prose.
raw − stripped = **+0.05 to +0.28 FKGL**. Small, one-directional, removed. ⚠ The canonical strip targets
**the leading block only** — a blanket `sed '/^> /d'` would eat body pull-quotes; on the four
first-contact surfaces the two coincide (body blockquotes after line 5: 0 · 0 · 0 · 0), which will not
hold across 223.

## Files touched

**Created** — `what/doctrine/doctrine_site_voice.md` (`proposed`) ·
`how/campaigns/campaign_haussmann/artifacts/p4_5b/ac_amendment_proposal.md` (`proposed`) ·
`how/campaigns/campaign_haussmann/evidence/sweep/reading_level_p4_5b_baseline.md` · this session file.

**Modified** — `missions/mission_haussmann_p4_5_voice_rewrite.md` (frontmatter `updated:` + P4.5b
Progress) · `evidence/sweep/reading_level.md` (superseded banner; **content retained**, SO-6).

**Not touched, deliberately** — no `site/` source. O0 halts before rewriting.

## Closure

⛩ **GATE APPROVED 2026-08-26.** Both documents signed: `doctrine_site_voice.md` and the AC
amendment (now `accepted`). O1 + O2 executed in the follow-on session
`session_stanley_20260826_haussmann_p4_5b_o1_o2`, which also corrected two O0 measurements —
the canonical metric (prose-only) and the clinician tally (8 live, not 7). Both corrections are
struck-not-deleted in the artifacts, under the operator's ruling.

## SITREP

**Completed** — O0a (convention-13 pass, **22/22**, coverage recorded) · O0b (FKGL re-baseline over the
twins, 21 routes) · O0c (top-20 derivation + clinician re-probe) · O0d (voice guide + amendment
proposal authored).

**In progress** — none. The objective is complete up to its gate.

**Blockers** — ⛩ **OPERATOR GATE, and it is the whole point of the objective.** Two documents need a
signature before O1 rewrites a sentence: `what/doctrine/doctrine_site_voice.md` and
`artifacts/p4_5b/ac_amendment_proposal.md` (5 ACs, V2 amended, V5 added, budget **~280–400 kT / 2–3
sessions**, tier `opus` for O0–O1). Not `#needs-human` in the escalation sense — this is the designed
gate, arriving on schedule.

**Next up** — ⛩ sign / amend / reject. Then **O1** (rewrite `/`, `/learn/what-is-adna`, `/community` to
FKGL ≤ 10; `/get-started` already passes). Also queued behind the gate: **O4**, delivery of the three
staged Vitruvius memos (⛩ GO'd at the session open, to be shown before sending).

**Deliberately out of scope and unchanged** — P4.4b · P3.3 O2 · P2.6 ⛩ O0b · F-v.

## Next Session Prompt

> Open `how/campaigns/campaign_haussmann/missions/mission_haussmann_p4_5_voice_rewrite.md` (**the P4.5b
> half**, from line ~192), the campaign governance at `how/campaigns/campaign_haussmann/CLAUDE.md`, and
> the two documents awaiting signature: `what/doctrine/doctrine_site_voice.md` and
> `how/campaigns/campaign_haussmann/artifacts/p4_5b/ac_amendment_proposal.md`. **P4.5b is HALTED at its
> ⛩ pre-build gate — confirm the amendment reads `accepted` before building anything;** if it is still
> `proposed`, the gate has not been given and you halt again rather than proceeding. Convention 13's pass
> already ran **complete at 22/22 with coverage recorded**: do not re-run it, read it. The FKGL baseline
> is `evidence/sweep/reading_level_p4_5b_baseline.md` (the 08-16 file is **superseded and must not be
> used as the *before***). Operative rewrite scope is **21 routes = the derived top-20 ∪ AC-b's four
> named surfaces**; `/get-started` **already meets ≤ 10 and needs no rewrite**; the clinician list is
> **7 live items, not 10**. On signature, execute **O1** (first-contact surfaces to FKGL ≤ 10, glossary-
> link at first use against the 25 derived glossary terms), then O2, then O3 (`gate-48` non-blocking with
> its shape guard, red-proven; dual-audience records citing guide rules; ⛩ push then ⛩ deploy, each its
> own GO). Also queued: **O4**, deliver the three staged Vitruvius memos — operator GO'd 2026-08-25,
> **show each before sending**. Build with `npx astro build`, never `npm run build`.

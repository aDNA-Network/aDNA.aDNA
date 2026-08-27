---
type: session
session_id: session_stanley_20260826_203051_haussmann_p5_1_o0
tier: 1
campaign: campaign_haussmann
mission: mission_haussmann_p5_1_human_evidence
objective: O0
phase: P5
status: active
executor_tier: opus          # declared AND honoured — this session runs opus
created: 2026-08-26
updated: 2026-08-26
last_edited_by: agent_rosetta
token_budget_estimated: "~90–140 kT (O0 half of the ratified ~180–280 kT / 2 sessions)"
token_budget_actual:
tags: [session, haussmann, p5_1, o0, panel_kit, ttfs, contribution_run]
---

# Session — P5.1 O0: the signature is taken, then the protocols

## Intent

The ⛩ pre-build gate is passed. Ratify the amendment record, correct the two stale-stimulus
surfaces, and author O0's four protocol artifacts. **No `site/` change, no build, no deploy.**

## Preconditions re-verified at the object at open `[D]`

Convention 16 — *a verification with no recurrence is a claim about the past wearing the grammar of
the present.* Re-read rather than quoted forward:

| Check | Result |
|---|---|
| `/.well-known/adna-build.json` | `51af7170ff8d530a0fe1c210abc8cc1316b9562a`, `mode=prod`, built `2026-08-27T01:31:19.430Z` |
| `51af717` ancestor of HEAD (`a62b0b5`) | ✅ |
| `git diff 51af717..HEAD -- site/` | **1 file** — `site/scripts/deploy_log.txt`, non-rendering |
| unpushed / behind `origin/main` | **1** (the gate commit `a62b0b5`) / **0** |
| `/community/proposals` (AC-3's funnel entry) | **200** on the alias |
| `/` · `/get-started` | 200 · 200 |
| `panel_kit.md` · `ttfs_instrument_kit.md` · `ttfs_runbook_fresh_account.md` · `scorer_isolation_protocol.md` | all present |
| ADR-048 §Status | carries the stale *"panel kit stays live as P5.1 stimulus"* sentence, as reported |

⇒ **AC-P (the G-11 precondition) holds.** ⚠ Surface named (convention 17): the diff check is on the
**source** surface; the claim is about the **deployed output**. The bridge is the self-describing
alias, stated rather than hidden inside a green tick.

## ⛩ Operator rulings taken at this gate (2026-08-26, in-chat)

| # | Ruling |
|---|---|
| 3 | Pass first, halt at the gate *(taken at the open; honoured — the proposal exists instead of a kit)* |
| **4** | **AC-2: the operator runs it, CoI declared; `"by someone who did not build the system"` is STRUCK**, not quietly reinterpreted |
| **5** | **ADR-048 is corrected in this mission**, strike-not-delete (SO-6) |
| — | **The amendment is SIGNED as proposed** — criteria → §2, V1–V5 added, budget **~120–200 → ~180–280 kT / 2 sessions** |

⭐ **Ruling 4 discharges a condition the proposal wrote conditionally.** DEFECT-5's ordering rule read
*"if one person performs both runs, AC-3 precedes AC-2"*. Ruling 2 (AC-3 operator-as-outsider) plus
ruling 4 (AC-2 operator) means one person **does** perform both ⇒ **AC-3 precedes AC-2,
unconditionally**, and the conditional phrasing is struck so no later reader re-derives it.

## Files touched

**Ratified** — `artifacts/p5_1/ac_amendment_proposal.md` (→ `accepted`, ratification block, §1 open
choice closed, §3 rulings 4+5, §6 discharged) · `missions/mission_haussmann_p5_1_human_evidence.md`
(criteria → §2, V1–V5, budget, `queued` → `in_progress`, Progress).

**Corrected (FAIL-3, both homes, strike-not-delete SO-6)** — `artifacts/p0_1/panel_kit.md`
(→ `superseded`) · `what/decisions/adr_048_positioning_statement_embargo_language.md` (§Status).

**Authored (O0, `artifacts/p5_1/`)** — `panel_kit_v2.md` · `recruitment_brief.md` ·
`ttfs_run_record.md` · `contribution_run_protocol.md`. **Zero new instruments.**

**Repaired** — `MANIFEST.md` (four derived-count defects; see F2). **Index** —
`how/campaigns/campaign_haussmann/CLAUDE.md`.

⛔ **No `site/` file changed** ⇒ ADR-057 same-diff is **inert** (no route, slug or rendered count
moved) — stated rather than left as a silent omission.

## Findings

**F1 ⭐⭐ — Ruling 4 discharged a condition inside a *different* finding's remedy.** DEFECT-5 read
*"**if** one person performs both runs, AC-3 precedes AC-2"*. Ruling 2 put AC-3 on the operator;
ruling 4 put AC-2 there; **one person does perform both**, so the antecedent holds and the conditional
is dead weight ⇒ **unconditional**. Left as written it would have read at run time as *unmet* — the
*criterion amended around a temporary condition* class **arriving inside the remedy for a different
finding**. Caught only because the ruling was read back against every finding it touched.

**F2 ⭐⭐ — The verification step earned itself on a session that changed no `site/` file, and it caught
this desk reasoning instead of checking.** `git diff -- site/` was empty, so I concluded the suite was
structurally unchanged. **Wrong**: `gate-41` reads **vault governance frontmatter**. Suite returned
**1 FAILED** (`G41d`). ⇒ *a negative result is only as wide as the command that produced it* —
convention 16's own law, breached one step after quoting it. **Sixth member of the
instrument-narrower-than-its-conclusion family; this one was mine.**

**F3 ⭐⭐ — The red was pre-existing and its author is provable: the commit that recorded "633/633" is
the commit that turned the gate red.** `51af717` (deployed, measured green): MANIFEST + STATE both
`08-25`, drift **0**. `7f0d5e5` (*"P4.5b CLOSED … Suite 633/633 derived"*) bumped STATE to `08-27`,
left MANIFEST — drift **2**, red — and **nothing re-ran the suite for two commits.** ⇒ convention 16
one altitude up: *the 633/633 was honest when it ran; recording it made it false.* **A close cascade
that edits STATE is a change the suite can see.**

**F4 ⭐ — The demanded MANIFEST review found four derived-count defects, two of them the file
contradicting itself.** `57 skills (27 base + 30 project)` (tree line) vs **`### Skills (56)`** and
`27 + 29` (§Skills, 93 lines apart); `5 topics, **32** subtopics` twice vs its own table summing to
**27**. Derived not typed (KW-14): **57 = 27 + 30**, table ⇄ disk zero drift **both directions**;
subtopics **27**; reviewer personas **16** (the row still said *5-persona ranker*). ⚠⚠ **`6675442` is
titled *"F-n discharged — the MANIFEST reviewed"* and that review fixed the tree line and `CLAUDE.md`
while missing the same file's §Skills heading.** ⇒ **a file can state its own count in more than one
place, and a review that greps for the number it expects finds the copy it already fixed.** Ratchet
**held at 0, not lowered** — the fix was the content, never the date.

**F5 ⭐⭐ — Authoring the kit found a trap the 15/15 pass had not.** The panellist reads the **live**
hero; the scorer scores against **ADR-048**; the two texts are **not word-identical** (P4.5b:
*"versioned"*→*"tracked"*, *"know where things live"*→*"find what they need"*, plus a third paragraph).
Measured at the live twin `[D]`: **substance unchanged**, so the referent is sound — but a scorer
working from the ADR alone could mark down a reader echoing the *live* wording, and **that wrong
ruling would have looked exactly like rigour.** Kit §4: *score substance, never wording.*

**F6 ⭐⭐ — AC-2's run IS P2.6's O0b.** P2.6 is `in_progress` **solely** for O0b. Performing AC-2 closes
the last Decade-1 leftover, makes **D3 non-provisional** (it was *withheld* from the P2.6 re-score,
not re-invented), and gives `ttfs_instrument_kit.md` the proving run its own `authored_unexercised`
banner asks for. ⛔ **Not claimed discharged here** — three acts by their owners; routed at close.
⚠ **Path conflict:** signed AC-4 says `evidence/`, the runbook says `artifacts/p2_6/` ⇒ **the signed
criterion governs**; P2.6 cites it there.

**F7 ⚠ — The runbook was the half that was right.** It already said *"if the operator runs it
themselves, **that is a condition to record**"* — instrument treated runner-identity as a **condition**,
criterion had hardened it into a **gate**. Ruling 4 restores the instrument's reading. **First time in
this campaign the kit was correct and the criterion was not.**

**F8 ⚠⚠ — The funnel's truth, read before writing a protocol about it.** Two AEPs, **both authored
*and* sponsored by the operator**; six of eight states at occupancy **0** ⇒ **no outsider has ever
traversed this funnel**, and the **sponsor step is the likeliest wall**. ⭐ The zeros are **not** a
defect — the page derives occupancy from the archive rather than asserting it, which is the
empty-state candour this campaign protects. Any finding is about **reachability**.

## Verification

| Check | Result |
|---|---|
| Gate suite | **633 total — 632 passed · 1 skipped · 0 failed** (the skip is F-p's known gate-17 G15 guard) |
| `html-validate "dist/**/*.html"` | **exit 0, 0 errors** |
| `gate-41` isolated re-run | **4/4 passed** after the MANIFEST repair |
| Frontmatter YAML | mission parses — **5 ACs, 5 V-limbs**, `executor_tier: opus` |
| Alias, re-read at close | see SITREP |
| `site/` diff | **empty** — objective did not widen |

## SITREP

**Completed** — the ⛩ signature taken and ratified; criteria + V1–V5 + budget landed in the mission;
FAIL-3 corrected in **both** homes; O0's four protocols authored; MANIFEST repaired to derived counts;
suite restored to full green; campaign index updated in the same commit (convention 7).

**In progress** — none. O0 is complete at the operator handoff.

**Next up** — ⛩ **the operator handoff.** `recruitment_brief.md` is `ready_for_operator`. **Run order:
AC-3 (contribution) → AC-2 (TTFS)**, then the panel as readers land. Agent-side resumes at
transcription + two-scorer scoring.

**Blockers** — none for O0. **O1–O3 are each gated on a human act** (five recruited cold readers, a
fresh macOS account, the operator running the funnel as an outsider). Not `#needs-human` as a defect —
this is the mission's design: it exists to convert `[D-syn]` into `[D]`.

**Routed, not done** — P2.6's O0b close · D3's re-score · `ttfs_instrument_kit.md`'s status change
(all F6, at P5.1's close, verified **in their destinations**) · the AC-1 revision loop **if the panel
fails**, which is explicitly **outside** the ratified band.

## Next Session Prompt

> Open `how/campaigns/campaign_haussmann/CLAUDE.md` and
> `missions/mission_haussmann_p5_1_human_evidence.md` (`in_progress`, criteria signed 2026-08-26).
> **P5.1 O0 is COMPLETE** — the amendment is `accepted`, criteria + V1–V5 + the ~180–280 kT budget are
> ratified, and four protocols are authored in `artifacts/p5_1/`: `panel_kit_v2.md`,
> `recruitment_brief.md`, `ttfs_run_record.md`, `contribution_run_protocol.md`. **Everything remaining
> is operator-gated**, so do **not** open O1–O3 agent-side: ask the operator what came back. If
> transcripts have landed in `evidence/p5_1/panel/`, run two-scorer scoring per `panel_kit_v2.md` §5 —
> **separately spawned scorers, raw sheets committed in ONE commit before reconciliation is authored in
> a LATER one** (`git log` must show the order; the baseline asserted this and git did not corroborate
> it). **Re-read `/.well-known/adna-build.json` at open — never quote a stamp forward.** Run order is
> **AC-3 before AC-2**. ⛔ Author no new instrument: GAP-1's remedy is one `git merge-base
> --is-ancestor` per artifact, by design. ⚠ **`gate-41` reads vault governance frontmatter, so a
> STATE.md edit in a close cascade can turn the suite red with zero `site/` changes** — run the suite,
> do not derive it from a `site/` diff.

---
type: artifact
artifact_class: panel_kit
campaign: campaign_haussmann
mission: mission_haussmann_p5_1_human_evidence
phase: P5
objective: O0
title: "P5.1 panel kit v2 — human cold-reader panel against the LIVE hero, two-scorer"
created: 2026-08-26
updated: 2026-08-26
status: ready_for_operator
last_edited_by: agent_rosetta
executor_tier: opus
supersedes: "artifacts/p0_1/panel_kit.md (§Stimulus expired — see its superseded banner)"
grounded_in:
  - "mission_haussmann_p5_1_human_evidence.md AC-1 (as amended + signed 2026-08-26)"
  - "artifacts/p5_1/ac_amendment_proposal.md §1 FAIL-3, §2 AC-1, §2.1 V2 + V5 (accepted)"
  - "artifacts/p0_1/panel_kit.md (script + profiles + consent line reused verbatim; §Stimulus NOT reused)"
  - "artifacts/p2_6/scorer_isolation_protocol.md §3 §5 §6 §8 (mechanism reused, not re-authored)"
  - "what/decisions/adr_048_positioning_statement_embargo_language.md §Direction-picked (the scoring referent)"
tags: [artifact, haussmann, p5_1, panel, cold_readers, kit, operator]
---

> **⛩ OPERATOR-GATED.** Agents prepared everything below. **Recruiting and running the panel is the
> operator's** — agents must not recruit humans or coach answers. Evidence protocol: instrument §6
> Step 5 — *record verbatim; do not intervene, do not clarify, do not defend.*

# Panel kit v2 — human cold-reader panel

**Plain version**: show five strangers the actual homepage for thirty seconds, ask them three
questions, write down exactly what they say, and have two people score the answers separately before
either sees the other's sheet.

**Why v2 exists**: v1's stimulus expired. It pointed at a hero *draft* under an explicit temporary
condition (*"not production, which keeps the current hero until DP2"*) — and DP2 ratified, the hero
shipped, and **P4.5b then rewrote the very copy panellists cold-read**. v1 could not notice this about
itself. Everything else in v1 was sound and is **reused verbatim**: the profiles, the consent line, the
session script, the burn rule.

## 1 · Stimulus — the LIVE production hero, at a recorded build stamp

⛔ **Show readers `https://adna.network/` in a browser. Never a draft, never a screenshot of a draft,
never a local preview.** This is the single change that v2 exists for.

**Before each session**, record the build the panellist will see:

```
curl -s https://adna.network/.well-known/adna-build.json
```

Paste the whole JSON into that panellist's transcript. **Per session, at the session** — the panel
takes scheduling time, and a stamp read once at the start of the week is a claim about the past
wearing the grammar of the present (convention 16). If the stamp changes mid-panel, that is **not a
problem to hide**: record it, and note which readers saw which build.

> ⭐ **Why this is the load-bearing line of the kit.** The panel's whole value is that it says
> something about *what a stranger encounters*. Evidence about a deployed surface must record which
> deployment it saw (G-11) — and human panel evidence, unlike a screenshot, carries **no internal
> contradiction** to catch the error later. A panel run against the wrong build produces five perfect
> transcripts and one silently invalid conclusion.

## 2 · Recruitment — see the brief

[[recruitment_brief]] carries panel size, the three profiles, who qualifies, the consent line, and the
medium trade-offs. **The operator recruits.**

## 3 · Session script (per reader — ~5 minutes) — reused from v1, unchanged

1. Open **`https://adna.network/`**. Start a 30-second timer. Say only: *"Take a look."*
2. At ~30s ask, in order, recording **verbatim**:
   - **Q1** "What is this?"
   - **Q2** "Who is it for?"
   - **Q3** "What is it *not*?"
3. Then unfreeze — let them scroll/click ~3 more minutes. Ask:
   - **Q4** "Would you try it? What would you do first?"
   - **Q5** "What confused you? Any words that lost you?" (get exact phrases)
   - **Q6** *(profile-b only)* "Did the name make you think of anything else?" — the **ancient-DNA
     probe**. **Do NOT lead.**
4. Thank + stop. **Never** explain, correct, or defend mid-session; debrief only after Q6.

> ⚠ **Q6 is not a formality this time.** P2.6's clinician cold-reader read *"aDNA"* as **ancient DNA**
> — the standard abbreviation in her field — and ADR-048's disposition (the *"(agentic DNA)"*
> expansion in the first clause) was chosen on a **synthetic** pre-screen that the expansion satisfied.
> Q6 is the first human test of whether the fix works on the audience it was built for. A profile-(b)
> reader who still misparses the name is a **finding, not a bad panellist**.

## 4 · What "correct" means — the scoring referent, and the one trap in it

**Correct = matches ADR-048's positioning statement *in substance*, in the reader's own words, not
ours.** ADR-048 §Direction-picked, the ratified substance:

| | Substance a correct answer carries |
|---|---|
| **Q1** | An **open standard / convention for organizing a project's files** so that AI agents *and* the people with them can find things — three folders, plain Markdown, in git. *(A reader who says "a way of laying out a repo so AI tools know where stuff is" is **correct**.)* |
| **Q2** | **Teams working with agentic coding tools on real projects.** *(Not "AI researchers", not "everyone".)* |
| **Q3** | **Not a product or service** — no server, no signup, **aDNA itself sends nothing**. ⛩ **AMENDED 2026-09-04 (R-97)** — ~~*"nothing leaves your machine"*~~ is **struck at ADR-048 itself** (`adr_048:71`), replaced by the scoped line at `adr_048:150` (Amendment ratification block, **`accepted`**, ⛩ R-97 signature). ⛔ **Score the SCOPED claim, never the absolute** — see the amendment note below. |

⚠⚠ **THE TRAP, AND IT IS THE REASON THIS SECTION EXISTS.** The panellist reads the **live hero**; the
scorer scores against **ADR-048**; and *those two texts are not word-identical*. P4.5b's rewrite moved
*"versioned in git"* → *"tracked in git"* and *"always know where things live"* → *"can always find
what they need"*, and added a third paragraph with no ADR equivalent. **Verified at the live twin
2026-08-26 `[D]`: the substance is unchanged** — same category noun, same mechanism, same audience sub,
~~same NOT-line~~ — **so the referent is sound.** But a scorer working from the ADR alone could mark down a
reader who correctly echoes the *live* wording.

⇒ **Scorers score substance, never wording.** A reader who says *"it tracks your project files in
git"* has Q1 right. This is stated here because a wrong ruling on it would look exactly like rigour.

### ⛩⛩ AMENDMENT 2026-09-04 — THE NOT-LINE CLAUSE ABOVE EXPIRED, AND *"SCORE SUBSTANCE"* DOES NOT SAVE IT

⛔ **`R-97` shipped on 2026-09-04 and changed the one conjunct the paragraph above certifies as
unchanged**, nine days after it was certified. Struck rather than deleted (SO-6) — the reasoning is
the reusable part, and only the NOT-line conjunct is wrong.

| Surface | Reading `[D] 2026-09-04` |
|---|---|
| `adr_048:71` | the DP2 NOT-line is **`~~struck~~`**; *"the operative NOT-line is now…"* |
| `adr_048:150` | Amendment block — *"…no server, no signup; **aDNA itself sends nothing**"* · **Status: accepted** |
| live `/index.md` twin | *"Not a product or service — no server, no signup; aDNA itself sends nothing."* |
| live `/`, `"nothing leaves your machine"` | **×0** |
| live `/`, `"itself sends nothing"` | **×1** |

⭐⭐ **THIS SECTION'S OWN ESCAPE HATCH DOES NOT REACH IT, AND THAT IS THE FINDING.** The rule above is
*scorers score substance, never wording* — sound, and it is why the 08-26 divergences were harmless.
**`R-97` moved the SUBSTANCE.** *"Nothing leaves your machine"* is an **unscoped absolute** whose
falsifying case is a vault pushed to a remote; *"aDNA itself sends nothing"* **scopes the promise to
the tool**. Those are different claims, not two wordings of one — which is precisely why R-97 needed
an ADR amendment and a ⛩ signature rather than a copy edit.

⇒ **The failure mode is specific, and it favours the site.** A panellist reading the live hero says
*"the thing itself doesn't send anything"* — **correct**. A sharper one adds *"…though if I push my
vault to GitHub, that obviously leaves my machine"* — which is **the exact reasoning R-97 was ratified
to accommodate**, and against the stale key it reads as a reader who *failed* to absorb the NOT-line.
***The retired over-promise would have been scored as the correct answer, in the panel whose stated
purpose is retro-validating ADR-048.***

⛔ **Scope of this amendment, named so it is not over-applied** (convention 17): the stale referent was
in **this file's Q3 row alone**. `recruitment_brief.md`, `ttfs_run_record.md` and
`contribution_run_protocol.md` were swept for the struck string and are **clean** `[D]`.

⚠ **What a scorer must now do with the falsifying case.** A reader who volunteers the push-to-remote
caveat is **not** marking the site down — they have read the scoped claim correctly. Record it as a
**correct Q3**, and note the observation separately: a reader reaching for the falsifying case
unprompted is evidence the scoping was necessary, which is a finding about ADR-048's amendment and
not about the panellist.

⭐ **The general form, because this will recur:** *a kit that certifies "substance unchanged" has
stamped a measurement, and a measurement is a statement with a timestamp* (convention 16). The
certification above was honest on 2026-08-26 and became false without any event marking the
transition — **the same class the campaign found in its live-verification claims, arriving in a
scoring key.** ⇒ **re-derive the stimulus↔referent comparison at the panel's open, never at the kit's
authoring** — it costs one `curl` of `/index.md` against `adr_048:150`.

## 5 · Two independent scorers — mechanism reused from `scorer_isolation_protocol.md`

⛔ **Do not re-author an isolation protocol.** `artifacts/p2_6/scorer_isolation_protocol.md` already
specifies one and this kit **delegates to it**. Only the bindings differ, and only these:

| | `scorer_isolation_protocol.md` | Here |
|---|---|---|
| Subject | 12 VITRUVIUS dimensions | **Q1–Q3 correctness, per reader** |
| Referent | the instrument's anchor letters | **ADR-048's positioning substance (§4)** |
| Pack | `evidence/` at a named commit | **the verbatim transcripts, at a named commit** |

**Carried across unchanged** — these are the parts that make it isolation rather than a second opinion:

- **§3 — what is withheld.** Each scorer sees the transcripts and §4 of this kit. **Not** the other
  scorer's sheet, **not** any reconciliation, **not** the mission file, the amendment proposal, or this
  kit's §6. A scorer who has read the expected pass bar is anchored to it.
- **§5 — commit ordering is demonstrable, not asserted.** Both raw sheets land in **one commit**;
  reconciliation lands in a **later** one; `git log --oneline -- evidence/p5_1/` shows the order to
  anyone who asks. *The baseline asserted this ordering and git did not corroborate it — that is the
  scar this rule comes from. **A protocol whose compliance cannot be checked is a statement of
  intent.*** This is **V2's** checkable half.
- **§6 — "the letter binds."** A verdict is what the *written* substance in §4 says, not the scorer's
  overall impression of whether the reader "got it".
- **§8 — reconciliation by a third context, after both sheets are committed**, and **the losing
  scorer's reservation stays on the record**.
- **Both scorers declare model and tier in frontmatter.** The baseline recorded one and not the other,
  making the sheets formally incomparable on the axis most likely to move a score.

> ⚠ **Scorers may be agents; panellists may NOT.** The scoring is a judgement about text against text
> — `[D-syn]` is admissible and must be tagged. The **reading is the human instrument**, and the whole
> mission exists because synthetic readers were a disclosed stand-in. Do not blur the two.

## 6 · Scoring sheet (one per scorer, `evidence/p5_1/panel/scoresheet_<A|B>.md`)

| Reader (role label) | Build stamp seen | Q1 | Q2 | Q3 | ≤30s unaided? | Verbatim file |
|---|---|---|---|---|---|---|

**Pass bar: ≥4 of 5 pass Q1–Q3.** ⭐ **Disagreement between scorers is recorded as a finding, never
resolved away** — v1 already said so and it is the rule most likely to be quietly broken, because a
clean sheet is more comfortable than an honest one. *"Unresolved disagreement is itself a finding about
ambiguity in the site."*

## 7 · Where the outputs go, and the stamp check

- Transcripts → `evidence/p5_1/panel/reader_<n>_<role>.md`, **verbatim**, with the consent yes noted
  and the build stamp JSON pasted in.
- Raw sheets → `evidence/p5_1/panel/scoresheet_<A|B>.md` (one commit, before reconciliation).
- Reconciliation → `evidence/p5_1/panel/reconciliation.md` (a later commit).

**AC-4's stamp check, run once per artifact** — one command, **no script**:

```
git merge-base --is-ancestor <recorded_commit> HEAD && echo "stamp OK: ancestor of HEAD"
```

…and confirm by inspection that the recorded commit contains the closed missions' work. That is what
converts AC-P from an unverifiable gate into a checkable property of the filed artifacts (GAP-1). ⛔
**Do not build a checker for it.** Its entire merit is that it costs one command and adds no
instrument — three of this desk's last four instrument defects were authored at the tail of a sitting.

## 8 · After the panel

**Pass** → transcripts + both sheets + reconciliation attach to the mission; AC-1 is met; **ADR-048's
DP2 deviation is retro-validated against real humans** and the record says so.

**Fail** → the verbatim confusions drive **one revision loop, then a re-panel with fresh readers** (the
old ones are burned). ⛔ **That loop is NOT in this mission's ratified band** (§4 of the amendment names
it as a scoped follow-on) — so a fail is reported as a fail and re-scoped, **never absorbed quietly**.
⭐ And per the mission's own inherited duty: **a failing retro-verdict reopens the positioning question
at DP9, not silently.** Failures are findings, not embarrassments.

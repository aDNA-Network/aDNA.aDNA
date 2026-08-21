---
type: session
session_id: session_stanley_20260820_174542_haussmann_winddown
created: 2026-08-20
updated: 2026-08-20
status: completed
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: null   # wind-down + handoff readiness; not a numbered mission. R-128 close is campaign-register work.
executor_tier: opus
token_budget_estimated: "~60–110 kT — R-128 close across four live LICENSEs (two public repos, two sibling vaults) + a cross-vault memo + register close, then the cold-start readiness review, wind-down AAR, and STATE/charter/memory refresh"
token_budget_actual: "≈95 kT by content load — inside the ~60–110 kT estimate; the overage against midpoint is the scope re-derivation after the truncated grep, plus the citation analysis that made the gitignore dangle-safe"
tags: [session, haussmann, winddown, aar, r128, licensing, handoff]
---

# Session — HAUSSMANN wind-down: close R-128, then make the handoff cold-start-proof

Opened on *"No latlabs at all. Wind down aar and review our plans/next steps to make sure we're ready
to continue the campaign strong after clearing context."*

## ⛩ Operator rulings (in-chat, session open)

| # | Question | Ruling |
|---|---|---|
| 1 | R-128's replacement copyright holder | **aDNA Labs** — matches `aDNALabs.aDNA`'s own `display_name`; its frontmatter already records `previous_names: [LatticeLabs, lattice-labs]`, so *"Lat Labs"* is an unrecorded fourth variant |
| 2 | Sweep scope | **All four live LICENSEs.** Historical ADRs, session logs and `.agentic/` records **keep** their references (SO-6, archive-never-delete) |
| 3 | adna-lab's BSL Licensor (*"Lat Labs, Inc."*) | **Leave it; route a memo to Galileo.** A named party to a commercial licence is not a copyright line, and changing one is not a branding act |

This reverses the deferral the operator took at the P3.5 push gate (*"leave both, decide later"*). The
reversal is recorded rather than quietly applied: R-128's register row states the earlier disposition,
and the close states the new one.

## Why the scope is six files and not ninety

> **⚠ This section said "four" when it was written, and four is what the operator was asked about.**
> The scoping sweep was a `grep … | head -20` and the truncation hid two files. The real class is
> **six**. The ruling's quoted scope is preserved verbatim in the table above; the corrected count is
> here. See the AAR's *Finding*.

A naive purge would hit ~90 occurrences across the workspace. The vault's own
`skill_project_rename` warns exactly against that: *"a naive whole-vault grep over-counts the defect by
an order of magnitude — most hits are legitimate historical cross-references that MUST be retained."*
Its keep/strip classifier is the instrument, and the classes here are:

| Class | Disposition |
|---|---|
| **Live LICENSE copyright holders** (**6** files — 5 rewritten; `.adna/` inherits at the next template release per Standing Rule 1) | **STRIP** → *aDNA Labs* |
| **BSL Licensor** *"Lat Labs, Inc."* + `team@latlabs.io` (adna-lab clones) | **KEEP**, memo to Galileo — a commercial-licence party |
| **Package metadata** (`pyproject.toml` authors, `__author__`, Dockerfile `LABEL`) | **KEEP** — belongs to `adna-lab` / `lattice-protocol`, cross-vault (Rule 10) |
| **Historical records** (`.agentic/` ADRs, session completions, `AGENTS.md`) | **KEEP** — SO-6; rewriting history is the §15 violation the skill names |

## Readiness findings (the review half)

Recorded here because they are the reason this session exists, not incidental:

1. **⚠ `mission_haussmann_p4_4_ci_hardening.md` carries NONE of the four follow-ups P3.5 routed to it.**
   They live only inside the P3.5 AAR. This is the P4.5a failure recurring verbatim — *"the split was
   recorded in three places and implemented in none."* A fresh agent opening P4.4 would never see them.
2. **P3.1 declares `depends_on: [p2_1, p2_6]` and P2.6 is `in_progress`** behind ⛩ O0b. P4.5a and P3.5
   both ran with the same unmet dependency, because **DP6 — the gate — is what unblocks Decade 2, not
   P2.6's completion.** Never written down; a cold agent could halt on it, or worse, learn to ignore
   `depends_on`.
3. **All ten remaining Decade-2 specs are substantive** — 66–72 lines, 4–5 objectives, real
   `grounded_in` and `acceptance_criteria` `[D]`. The P4.5a "mission with no spec" failure was specific
   to a **split increment** and cannot recur for a numbered mission.
4. **Untracked evidence PNGs** across five capture directories — a long-open operator item. A fresh agent
   inherits a tree that reads as dirty.
   > **⚠ This read "134" when written, and 134 was wrong — the same defect as the LICENSE scope, in a
   > second instance.** `git status --short` **collapses directories**, so counting its lines counts
   > *entries*, not files. `git ls-files --others --exclude-standard` returns the real figure: **187**
   > PNGs (61 cited → committed, 126 uncited → ignored) plus 7 `capture_report.json`. Two different
   > commands, same failure: **a convenience form quietly answered a different question than the one
   > asked, and the answer looked complete.**

## Wind-down AAR (SO#5)

> Covers this session end-to-end. P3.5's **mission** AAR is complete and lives in its own mission file;
> this is the wind-down record for the R-128 close and the handoff review.

**Worked.** Treating "no latlabs at all" as a **classification problem rather than a find-and-replace**.
The vault's own `skill_project_rename` already warns that a naive grep over-counts a rename defect *by an
order of magnitude*, and it was right: ~90 raw occurrences reduced to **6 files that are live legal
instruments**, with the BSL Licensor, package metadata and the historical record each spared for a stated
reason. The keep/strip classifier existed; the work was applying it, not inventing it. Same for the
evidence estate — a **ratified policy already existed** (Refit M4/DP5) and even named the trap I would
otherwise have walked into.

**Didn't.** **I scoped the operator's decision from a truncated grep.** The `head -20` on the scoping
sweep hid `zeta.aDNA/LICENSE` and `.adna/LICENSE`, so the question I put to the operator said *"four live
LICENSEs"* when the class was **six**. They ruled on an incomplete enumeration. The principle they chose
was clean enough to extend, and the correction is flagged in-field rather than absorbed — but a gate
answered on bad inputs is a gate that has to be re-derived, and I caused that.

**Finding.** *A convenience command is a derived figure.* §9.5 established **count last** after a register
total drifted three times. This is the same defect one step upstream: the **enumeration** a count comes
from can be silently partial. It happened **twice in this one session**, by two different mechanisms:

| Command | What it answered | What was asked | Error |
|---|---|---|---|
| `grep … \| head -20` | the first 20 matches | every file in the class | 4 → **6** |
| `git status --short \| grep -c` | untracked *entries* (git **collapses directories**) | untracked *files* | 134 → **187** |

Neither announced the truncation; both outputs looked complete. **`head` and `git status` are orientation
tools and never scoping tools** — when a number is going to be quoted to the operator or written into a
record, derive it with a command whose contract is completeness (`git ls-files --others`, a script). The
downstream figures were then internally consistent and about the wrong set, which is the hardest kind of
wrong to notice.

**Change.** Three landed. (1) `mission_haussmann_p4_4_ci_hardening.md` now carries the **five** inherited
follow-ups as a first-class section with sources — they had existed only inside two AARs, which is
`P4.5a`'s *"recorded in three places and implemented in none"* recurring, and a fresh agent opening P4.4
would never have seen them. (2) Campaign convention 11 and P3.1 now state that
**`depends_on: p2_6_midscore` is discharged by the DP6 signature**, so a cold agent neither halts nor
quietly learns that `depends_on` is decorative. (3) The HAUSSMANN capture estate is classified under the
existing policy — 61 cited PNGs committed **first**, then 126 uncited frames ignored — which closes an
item open since P1 and leaves the tree clean for the next context window.

**Also worth carrying.** The verification asymmetry is now written into the register: of the five repos
pushed, only **two are publicly fetchable**. For `zeta.aDNA` (private), `Exchange.aDNA` (Codeberg) and
`LAVentureGraph.aDNA` (self-hosted) the live check is **unavailable, not passed**. The R-122/R-123
pattern exists because a tree can be right while the world is wrong; claiming "verified live" across all
five would have been exactly the inflation this register catches.

**Budget.** Estimated ~60–110 kT. Actual **≈95 kT** — inside range. The overage against the midpoint is
the scope correction (re-deriving the LICENSE class after the truncation, and the citation analysis that
made the gitignore dangle-safe), neither of which the estimate anticipated.

**Follow-up.** (1) `.adna/LICENSE` still reads *Lat Labs* by design — **Standing Rule 1**; it inherits the
fix from the image repo at the next `skill_template_release` run, and that release should verify it.
(2) The BSL Licensor question is with **Galileo** (memo delivered, no reply required). (3) Four
**pre-existing** dangling capture citations from the Refit-era Storyweave ignores (`.gitignore:36,38`) —
not created here, worth a look when P4.4 touches evidence gates.

## Files touched

**Created** — `who/coordination/coord_2026_08_20_galileo_bsl_licensor.md` · this session file.

**Modified** — `LICENSE` (this vault) · `.gitignore` · `evidence/claims/claim_register.md` (§11) ·
`missions/mission_haussmann_p4_4_ci_hardening.md` · `missions/mission_haussmann_p3_1_md_twins.md` ·
`campaign_haussmann/CLAUDE.md` (convention 11) · `campaign_haussmann.md` · `STATE.md` ·
68 evidence files promoted from untracked to committed (61 cited PNGs + 7 `capture_report.json`).

**Outside this vault** — `LICENSE` in `aDNA-Network/aDNA` (`b94ec45`), `Exchange.aDNA` (`6527f57`),
`LAVentureGraph.aDNA` (`3fe62d8`), `zeta.aDNA` (`6e7eb2e`).

## SITREP

**Completed.** R-128 closed — *"Lat Labs"* gone from every live MIT LICENSE in the fleet, replaced by
**aDNA Labs**, byte-identical across all five (md5 `b189a96420df57c630764b57ba7ff2f4`); the sixth
(`.adna/`) inherits at the next template release per Standing Rule 1. Five repos pushed on operator GO.
The BSL Licensor routed to Galileo, untouched. The handoff review found and fixed a real defect (P4.4's
missing follow-ups), defused P3.1's stale dependency, and closed the evidence-retention item.

**In progress.** None.

**Next up.** **P3.1** — `mission_haussmann_p3_1_md_twins.md`. Ruled order:
`P3.1 → P3.2 → P3.3 → P3.4 → P4.1 → P4.2 → P4.4 → P4.3 → P4.5b → P5.1 → P5.2`.

**Blockers.** None for P3.1. Campaign-level, unchanged: **⛩ O0b** (operator-gated TTFS run) holds P2.6
`in_progress`, D3 unscored, no 12-dimension composite. **P0.4** awaits Aspasia's ack.

**Open register rows.** R-34, R-63 (awaiting O0b) · R-111 (S2) · R-124 (S3). FALSE: 0.

## Next Session Prompt

You are Rosetta in `~/aDNA/aDNA.aDNA`. HAUSSMANN Decade 2: **P4.5a, P3.5 and the R-128 wind-down are
complete; the next mission is P3.1** (markdown twins + content negotiation + a real llms-full corpus).
Execute `how/campaigns/campaign_haussmann/missions/mission_haussmann_p3_1_md_twins.md` — read it cold
with the campaign `CLAUDE.md`. **Its `depends_on` names `p2_6_midscore`, which is `in_progress` and does
NOT block you** — DP6 is the gate, not P2.6's completion; the mission file and convention 11 both say so
now. **Re-verify `grounded_in` on disk before designing anything**: that has changed the work in three
consecutive missions (R-111 at P4.5a, R-122 at P3.5, and the LICENSE class at wind-down, where a
`grep | head -20` scoped an operator decision to four files when the real class was six — *a truncated
command is a derived figure*). Standing constraints: same-diff gate law (ADR-057) plus its corollary —
before deleting a failing assertion, check what else that gate was holding up; `npx astro build`, never
`npm run build`; `node scripts/inject_redirects.mjs .` before running the suite outside a deploy;
`GATE_PORT=4399`; honor pt19; deploy only via `site/scripts/deploy_adna.sh prod` and record the deploy
ID. Suite stands at **521 zero xfail**; axe 0 is campaign-protected and **gate-4 only covers
`wcag2a/wcag2aa`**, so run the T0 sweep (`scripts/visual_capture.mjs --axe`) on any new route — that is
how the last real a11y defect was caught. New captures are gitignored unless a committed doc cites them
(see `.gitignore`; policy at `campaign_refit/artifacts/evidence_artifact_policy.md`). P3.1 **blocks
P3.3**, so its twins must be right. Not yours to close: ⛩ O0b, P0.4, and rows R-34/R-63/R-111/R-124.

---
type: session
session_id: session_stanley_20260826_195802_haussmann_p5_1_pre_build_gate
tier: 1
campaign: campaign_haussmann
mission: mission_haussmann_p5_1_human_evidence
phase: P5
objective: pre-build gate (convention 13)
persona: rosetta
executor_tier: opus
created: 2026-08-26
updated: 2026-08-26
status: completed
last_edited_by: agent_rosetta
token_budget_estimated: "~60–110 kT — recon + a 15-pair coherence pass + one proposal artifact + close cascade. No build, no run, no deploy."
token_budget_actual: "≈75–95 kT (rough, per SO#11 — inside the ~60–110 kT band). No build, no run, no deploy; the load is recon + one 15-pair pass + one proposal artifact + the close cascade."
tags: [session, haussmann, p5_1, pre_build_gate, convention_13]
---

# P5.1 pre-build gate — convention 13 pass + AC amendment proposal

## Intent

Run convention 13's acceptance-criteria coherence pass against **P5.1's current criteria set**,
author the amendment proposal at `status: proposed`, and **halt at the ⛩ operator gate**.

The gap this session exists to close: P5.1's budget was ratified at **⛩ DP6, 2026-08-19**; its
criteria were **amended by the freeze sweep on 2026-08-24** (G-11 added, every criterion made to
record its build stamp). ⇒ **the budget was ratified against a criteria set that no longer exists,
and convention 13's pass has never run against the current one.** That is precisely the condition
convention 13's own text names — *"a DP ratified a budget against a spec whose halves nobody had
read together"* — arriving for a sixth time.

⛩ **Operator ruling at the session open: pass first, halt at the gate.** No kit is authored against
criteria that may move (the P4.2 / P4.3 / P4.4 / P4.5b precedent: *no build until signed*).

## Recon at execution (convention 12 + 16) — all re-derived, nothing quoted forward

| Probe | Result | Surface |
|---|---|---|
| `/.well-known/adna-build.json` | `51af7170ff…`, `2026-08-27T01:31:19.430Z`, `mode=prod` `[D]` | live alias |
| `git diff --name-only 51af717..HEAD -- site/` | **1** file — `site/scripts/deploy_log.txt`, non-rendering `[D]` | **source** surface |
| `git merge-base --is-ancestor 51af717 HEAD` | **YES** — HEAD contains the deployed commit `[D]` | local git |
| `git rev-list --count origin/main..HEAD` / `HEAD..origin/main` | **0 / 0** — no unpushed work, no second-writer divergence `[D]` | post-`fetch` |
| `/community/proposals` | **200** `[D]` | live alias |
| Mission `status:` fields (read at the artifact, never the index) | P4.5 `completed` · P4.4 `in_progress` (P4.4b unstarted) · P4.3 `completed` (AC2 ◐) · P5.1 `queued` · P2.6 `in_progress` `[D]` | mission files |

⇒ **G-11's precondition holds, in both limbs.** The freeze lifted 2026-08-25; and nothing is
built-not-deployed — site *source* at HEAD is identical to the deployed tree but for one log file.
**P4.4b is not started** (nothing built, so nothing withheld) and **P4.3's O2 is deferred to a
follow-up campaign as register row F-v**, which is a deferral with a gate, not unshipped work.

> ⚠ **Surface named deliberately** (convention 17 + its 08-26 amendment). The check above is on the
> **source** surface, and the claim it supports — *"production carries every closed mission's
> work"* — is about the **deployed output**. The bridge is that the alias self-reports `51af717` and
> our source at HEAD differs from `51af717` only in a file that renders nothing, so a rebuild would
> emit the same site. That inference is stated rather than hidden inside a green tick.

## Findings carried into the pass — every one re-verified at its object this session

1. **AC-2's method cannot satisfy AC-2's test.** AC-2 says *"Clean-VM TTFS run"*. The only instrument
   that exists is `artifacts/p2_5/ttfs_runbook_fresh_account.md` (`status: ready_for_operator`),
   which states on its own face: *"Homebrew and Node are machine-wide… it is **not** the cold case"*
   and *"The true cold case needs a VM."* `[D]` — read at the object, lines 32/34/37.
2. **AC-1's reused instrument points at a stimulus that no longer exists.** `artifacts/p0_1/panel_kit.md`
   §Stimulus (line 52) directs readers at the *A-direction hero draft*, **"not production, which keeps
   the current hero until DP2."** `[D]` That condition expired. Measured against the **live twin**
   (`/index.md`, the reader-facing surface — the verb is *"a reader encounters"*), the hero has
   **materially different copy** and carries a third paragraph the draft has no equivalent of:
   - draft: *"…always know where things live: three folders, plain Markdown, versioned in git."*
   - live: *"…can always find what they need. Three folders, plain Markdown, tracked in git."*
   ⇒ **run verbatim, the kit shows panellists copy that was replaced by P4.5b.** The mission body
   already says *"run against the *live* hero"* — **so the mission and its own instrument disagree,
   and nothing would have caught it at run time except a panellist reading a screenshot.**
   ⭐ Same class as AC-a's freeze amendment at P4.5b: *a criterion amended around a temporary
   condition must be re-read when the condition expires.*
3. **`verification_method` is self-certifying and has no limbs.** It reads *"the artifacts themselves
   (transcripts/recording/log) — this mission IS verification."* Convention 4 holds that **the
   builder never self-certifies**; and with no V-limbs the V→AC direction — the one that found
   P4.5b's worst defect — has nothing to read against.
4. **AC-3 names no entry point.** P3.5 shipped the funnel (`/community/proposals`, **200** `[D]`,
   ADR-055 process + numbered archive + JSON index), so a target exists; AC-3 does not name it.
5. **Ruling 2's conflict-of-interest caveat needs a criterion, not prose** (P4.3 G-6/G-7: *a
   deferral recorded only in narrative is a deferral with no gate*).
6. **The panel will probably reproduce the clinician's "ancient DNA" reading — that is a result.**
   P4.5b measured it addressed on **4** deep reference/concept routes, **none** of them `/`,
   `/learn`, `/get-started`, `/about`. Q6 exists to catch it. **Do not pre-fix it.**

## ⛩ Operator rulings taken at the session open (inputs to the proposal, not findings of it)

| # | Question | Ruling |
|---|---|---|
| 1 | AC-2 isolation | **Fresh macOS account**, condition labelled honestly per kit §5 (*"prerequisites pre-installed"*). Not the cold number, and the report says so rather than implying it. |
| 2 | AC-3 contribution run | **Operator-as-outsider discipline.** No recruitment. **Conflict of interest declared, not managed away** (P4.1 ranker precedent) — the weakest of the three variants, tagged as such on its face. |
| 3 | Session scope | **Pass first, halt at the gate.** |

## Out of scope, routed not buried — two inbound memos, both measured here rather than relayed

Neither bears on P5.1; both are true at the object; **neither is fixed this session**, because a
finding handled at the tail of an unrelated sitting is the unforced widening this campaign keeps
cleaning up.

- **Ilmarinen (Forgejo.aDNA), 2026-08-26** — `keystone_cohort_manifest.md` carries an R&D instance
  overlay address and this repo publishes. **Measured `[D]`: the file exists at the cited path and
  carries 1 IP-shaped literal; `origin` is `github.com/aDNA-Network/aDNA.aDNA` (public since Git.aDNA
  P6 Wave 2).** ⇒ the claim holds. `ack_required: false`, `needs_human: false`. **Recommend its own
  sitting** — it is a publication-boundary question with a standard-shaped tail, not a one-line strike.
- **Berthier (aDNALabs.aDNA), 2026-08-25** — the ADR-020 placement draft is ratified, and the memo
  records **three refused delivery attempts**, diagnosed as this vault having **no
  `who/coordination/inbox/`**. **Measured `[D]`: the directory does not exist.** Every peer named has
  one. ⇒ a real, cheap gap in this vault's ability to *receive*; recommend adopting the drop-box.

## Progress

- [x] Recon at execution — 6 probes, all re-derived
- [x] Inbound memos measured, routed
- [x] Session file opened before any modification
- [x] Convention 13 pass — **15/15 pairs, both directions, coverage recorded**
- [x] Amendment proposal authored at `status: proposed`
- [x] Mission file + campaign index annotated (criteria **not** edited)
- [x] Halt at ⛩ gate

## SITREP

### Completed

- **Recon at execution** — 6 probes re-derived, nothing quoted forward. G-11's precondition **held
  and verified in both limbs `[D]`**.
- **Convention 13's pass, complete at 15/15 with coverage recorded**, both directions. Tally
  **re-derived from the table itself** rather than typed (KW-14): 8 clean · 5 defective · 1 gap ·
  1 remedy, against `C(5,2)+5 = 15`. **Sixth consecutive mission where the pass has paid for itself.**
- **`artifacts/p5_1/ac_amendment_proposal.md`** authored at `status: proposed` — 5 amended criteria,
  **V1–V5** (the mission currently self-certifies), the three rulings as ratified inputs, budget
  **~120–200 → ~180–280 kT**, one question left open.
- Mission file + campaign `CLAUDE.md` index updated **in the same commit** (convention 7).

### The findings, ranked

1. ⭐⭐ **AC-P is tested by nothing** — G-11's own defect reappearing inside G-11. Remedied through
   AC-4's existing stamp requirement, **zero new instruments**.
2. ⭐⭐ **AC-2 fails twice** — clean-VM vs. the fresh-account runbook (third sighting of the
   P3.1/P3.3 shape), and a **pass/fail threshold on `n=1`** that its own kit §5 forbids in terms.
3. ⭐ **AC-1's kit shows a retired stimulus**, and **ADR-048 carries the same stale sentence**.
4. ⚠ AC-3 stamps the wrong object; AC-2↔AC-3 contaminate with no stated order.
5. ⛩ One question left open rather than resolved silently (AC-2's *"did not build the system"*).

### One correction made to my own work this session

The proposal's first draft said *"P4.5b declared `fable` and ran `opus` **unremarked**"*. False —
**P4.5b caught its own tier mismatch at its open**; it was **P4.1** that ran four sessions unremarked.
Corrected in place. Small, but this vault's whole claim is that its citations hold.

### In progress

Nothing. The session halts cleanly at the gate by design.

### Next up

⛩ **The signature.** On signature: criteria replaced per proposal §2, V1–V5 added, budget ratified
under SO#11/ADR-016, then **O0** — panel kit v2 (live-hero stimulus), recruitment brief, TTFS
run-record scaffold, contribution-run protocol. **No kit until signed.**

### Blockers

None for this session. **P5.1's remaining objectives are operator-blocked by design** — agents must
not recruit humans, and O1/O2/O3 are human instruments.

### Routed, not fixed — two inbound findings, both measured here `[D]`

- **Ilmarinen** — `keystone_cohort_manifest.md` carries 1 IP-shaped literal and `origin` is the
  **public** `aDNA-Network/aDNA.aDNA`. Claim holds. **Recommend its own sitting**; a
  publication-boundary question with a standard-shaped tail is not a tail-of-session strike.
- **Berthier** — ADR-020 placement ratified; **3 refused deliveries** because this vault has **no
  `who/coordination/inbox/`** (confirmed absent `[D]`). Cheap gap in our ability to *receive*.

### Files touched

| File | Action |
|---|---|
| `how/sessions/active/session_stanley_20260826_195802_haussmann_p5_1_pre_build_gate.md` | created |
| `how/campaigns/campaign_haussmann/artifacts/p5_1/ac_amendment_proposal.md` | created (`proposed`) |
| `how/campaigns/campaign_haussmann/missions/mission_haussmann_p5_1_human_evidence.md` | annotated — **criteria untouched** |
| `how/campaigns/campaign_haussmann/CLAUDE.md` | mission index → P5.1 open at its pre-build gate |

No `site/` source changed ⇒ no gate suite run required; suite stands at **633/633** from P4.5b.
Nothing pushed, nothing deployed — both are outward acts needing their own GO, and neither is needed.

### Next Session Prompt

> You are **Rosetta** in `~/aDNA/aDNA.aDNA`. Operation HAUSSMANN, mission **P5.1 (human evidence)**,
> which is **OPEN and halted at its ⛩ pre-build gate** — nothing built, criteria not edited, budget
> not re-ratified. Read `how/campaigns/campaign_haussmann/CLAUDE.md` (conventions 1–17, especially
> 13's amendment, 16 and 17's 08-26 amendment), then
> `artifacts/p5_1/ac_amendment_proposal.md` (**`proposed`**) and the mission file.
>
> **First act: re-read `/.well-known/adna-build.json`** — never quote `51af717` forward; convention
> 16 exists because that number has been wrong before. Then confirm `git diff <live>..HEAD -- site/`
> is still only the deploy log, and that unpushed/behind are still 0/0 (**a second writer, lemur, is
> live** — merge before deploying, push precedes deploy, never `--bootstrap-stamp`).
>
> **If the operator has signed:** replace the criteria with proposal §2, add V1–V5, ratify the
> ~180–280 kT band, and execute **O0** — panel kit v2 (⚠ its stimulus is the **live** hero, not
> P0.1's retired draft; supersede the kit's §Stimulus strike-not-delete, and note ADR-048 line 26
> carries the same stale sentence), the recruitment brief, the TTFS run-record scaffold, and the
> contribution-run protocol. Then **halt** — recruiting is the operator's and agents must not do it.
>
> **If not signed:** do not author a kit. Answer questions about the proposal, or take a different
> mission.
>
> ⛩ **One question is open in the proposal and is the operator's**: AC-2 says *"by someone who did
> not build the system"*, and ruling 1 settled isolation (fresh macOS account) without settling who
> runs. Recruit a runner, or strike the clause — do not quietly reinterpret it.
>
> Two inbound findings are **routed, not fixed**, and each deserves its own sitting: Ilmarinen's
> publication-boundary finding (1 IP-shaped literal in a public repo `[D]`) and Berthier's
> missing `who/coordination/inbox/` (confirmed absent `[D]`).

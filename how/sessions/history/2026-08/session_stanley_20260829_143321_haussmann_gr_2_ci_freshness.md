---
type: session
session_id: session_stanley_20260829_143321_haussmann_gr_2_ci_freshness
created: 2026-08-29
updated: 2026-09-01
status: completed
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_gr_2_ci_freshness
increment: "GR-2 O0 → O3 — open, conv-13 pass, ⛩ budget gate, O1 red-proof, O2 build (three states + build diagnostic + gate-33 message), ⛩ O3 push GO granted and AC-1 CLOSED from CI. Halts at ⛩ O4's push GO."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "⛩ RATIFIED 2026-08-29 — ~165–270 kT / 2 sessions (O0 ~30–45 · O1 ~25–40 · O2 ~45–75 · O3 ~25–40 · O4 ~20–35 · O5 ~20–35). Supersedes the plan's ~130–215 kT / 1–2."
token_budget_actual: "≈130–150 kT through O0+O1+O2 (O0 ~40 · O1 ~35 · O2 ~60, the last including four full site builds, an in-container round-trip and two full suite runs). INSIDE the band's O0+O1+O2 sub-total (~100–160). Recorded HERE rather than reconstructed later — two of three P4.3 sessions closed this field empty and the actual had to be rebuilt from the transcript (SO#11)."
tags: [session, haussmann, gr_2, f_x, ci, gate_33]
---

# Session — GR-2: the gate-33 CI sitting (register row `F-x`)

## Intent

Discharge `F-x`, the register row filed at the 2026-08-29 deploy sitting and deliberately scoped
**out** of it by the operator (*"it gets its own; a fix authored on an unverified cause is the thing
the last session warned against"*). Two debts: **(a)** the cause of six consecutive
`gate-33-freshness` reds on `main`, and **(b)** an error message that names a remedy already applied.

Operator chose this lane over Lane D and P4.4b B3 at the session open, and ruled two shaping
questions: **GR-2 is a mission with a convention-13 pass** (not an in-session Lane-B-style
discharge), and **the CI-silence gap is in scope, fixed minimally as a habit** rather than a new
instrument.

## Derived at open (never quoted from the carried record)

| Fact | Instrument | Value |
|---|---|---|
| `HEAD` | `git rev-parse HEAD` | `09faced` |
| `origin/main` **at the remote** | `git ls-remote origin refs/heads/main` | `09faced` |
| unpushed | `git rev-list --count origin/main..HEAD` | **0** |
| live build stamp | `curl /.well-known/adna-build.json` | `d5ff043` |
| CI reds on `main` | `gh run list --branch main` | **6 consecutive** — the carried record said five; the deploy commit's own run (`33231133953`) also failed |
| failing assertions | `gh run view 33231133953 --log-failed` | **exactly one**: `gate-33-freshness.spec.ts:78` → `dates.length > 90` returned 0 |

⚠ **The carried count was wrong again, and again in the direction of understatement** — five vs six.
The commit that *announced* the CI-red finding was itself followed by a red run nobody read. This is
the fourth sitting running in which a carried number was wrong and a derived one was right.

## ⭐ What recon changed before any code was written

`F-x`'s row says **cause: unknown**. It is no longer unknown; it is narrowed to a single path by
deduction from facts already on hand, and corroborated **inside our own tree**:

1. `gates.yml:51` sets `fetch-depth: 0` ⇒ the CI clone **cannot** be shallow.
2. `contentSource.ts:37` is `const isShallow = git([...]) !== 'false'` ⇒ **a git that fails for any
   reason is indistinguishable from a shallow clone**.
3. Not-shallow ⇒ `rev-parse --is-shallow-repository` would answer `'false'` ⇒ the only surviving path
   to an empty date map is **git throwing**, which `git()` swallows into `null`.
4. `git()` runs `stdio: ['ignore', 'pipe', 'ignore']` — **stderr is discarded**. ⭐ *The line that
   makes the cause unknowable is the same line that has to change to make it knowable.*
5. **Corroboration, ours:** `site/scripts/visual_regression_container.sh:74` runs
   `git config --global --add safe.directory /work` before `npx astro build`. We wrote that at
   P4.4b B0 **because git fails in this exact image**. CI's `actions/checkout` writes the same
   config into a **temporary** global config it then discards — its own log says so in those words:
   *"Adding repository directory to the temporary git global config as a safe directory."*
   ⇒ local container build → dates; CI build → no dates. That is precisely the observed split.

⛔ Filed as a **hypothesis with a named mechanism, not a diagnosis.** Stage 1 exists to close that
gap at the object before Stage 3 authors anything.

## Progress

### Stage 0 — open ✅

- Session file created (this file).
- Mission authored: `missions/mission_haussmann_gr_2_ci_freshness.md`.
- Convention-13 pre-build pass → `artifacts/gr_2/ac_amendment_proposal.md`, **signed with
  amendments**; budget ⛩ ratified ~165–270 kT / 2 sessions.

### O1 ✅ — the red-proof (`artifacts/gr_2/o1_redproof_record.md`)

The planned mutation **failed to mutate**, and that vindicated `F1` empirically. Code path
red-proven at the gate itself in CI's image. **AC-1 held open.**

### O2 ✅ 2026-08-31 — three states, one build line (`artifacts/gr_2/o2_redproof_record.md`)

**AC-2 ✅ AC-3 ✅ AC-5 ✅.** `V2` 8/8 · `V3` mutation+control in CI's image · `V5` control-first.
Chromium lane **645 → 653** · fast lane **526 → 534/1skip** · `html-validate` **0**.

⭐⭐ **V5's no-change control failed on its first run, exactly where `F4` predicted.** Without it, V5
would have reported *"O2 altered the shipped artifact"* — an uncontrolled instrument producing a
confident wrong diagnosis, which is `F-x`(b)'s own shape inside the limb written to prove this
mission harmless. Cause named (Astro's per-render diagram ids), exclusion asserted, 0/709.

⭐ **My own diagnostic shipped illegible and `grep` hid it** — the line rendered glued to Astro's
route progress. Found by reading the log rather than searching it.

⚠ Deviation **`D1`** from the signed amendment recorded on the mission's face. ⚠ Two harness defects
of mine caught by their own output (a 0-line hash file that compared cleanly against nothing; a
grouped-diff readthat inflated 15 → 16).

### O3 ✅ 2026-09-01 — ⛩ push GO granted; **`AC-1` CLOSED** (`artifacts/gr_2/o3_ci_reason_record.md`)

Rebased onto lemur's 0.4.20 (autostash for the operator's Obsidian state; clean, zero overlap), suite
re-run **on the merged tree** — 652 passed / 1 skipped, html-validate 0 — gitleaks clean, pushed
`a68c88c..1c8fde6`. Run **`33465663585`**, Build step, verbatim:

> `freshness: GIT COULD NOT ANSWER — dates omitted. This is NOT a shallow clone and fetch-depth will
> not fix it. git said: fatal: detected dubious ownership in repository at '/__w/aDNA.aDNA/aDNA.aDNA'`

**Exactly one** failing assertion (`gate-33:78`) — F6 clean. ⭐⭐ gate-52's `DUBIOUS` constant, written
08-29 from the hypothesis, is **byte-identical** to CI's real string. ⭐ The remedy was already in our
tree (`visual_regression_container.sh:74`) and O1 was still right to strike the sentence claiming it
was demonstrated — *unmeasured is not unjustified*.

## SITREP

**Completed** — O0, O1, **O2**, **O3**. `contentSource.ts` can tell a failed git from a shallow clone and
says which it found; `gate-33` no longer prescribes a remedy it cannot know applies; the shipped
bytes are demonstrated unchanged on a healthy build, so **nothing is owed to production**.

**In progress** — nothing. The increment is complete and committed locally.

**Next up** — ⛩ **O4's push GO.** The fix is **designed, not built**: one `gates.yml` step,
`git config --global --add safe.directory "$GITHUB_WORKSPACE"`, after checkout and before build.
⚠ Scoped to `$GITHUB_WORKSPACE`, **never `*`** · ⚠ **not** added to `unlighthouse-sweep.yml`, which
has no container and no refusal to fix. Run `33465663585` is `V4`'s standing **red control**. Then
`O5` = convention 19 · strike `F-x` · route `F-y` · AAR.

**Also owed, before anything else next session** — read the **unlighthouse sweep's first-ever run**
(fired 2026-09-01 **07:43 UTC** on `1c8fde6`, bare runner, no container). **Predicted, filed before
the run: `freshness: git answered`.** If it holds, §6 Change 3's container claim is measured.

**Blockers** — none. ~~`AC-1` cannot be closed from this machine~~ — it was closed at O3, from CI,
which is exactly where O1's `F1` said it would have to be.

⚠ **Timing hazard for the next push**: `gates.yml` is `cancel-in-progress: true` on the concurrency
group the sweep **joins**, so a push landing while the sweep is running **cancels it**. Check the
sweep has completed before pushing O4.

⚠⚠ **AND THE PUSH GO IS NOW A DIFFERENT ACT THAN IT WAS AT THE MISSION'S OPEN: THE TREES HAVE
DIVERGED.** Derived at the remote after the commit, not from a tracking ref:

| Fact | Value |
|---|---|
| `HEAD` | `65d2130` |
| `origin/main` **at the remote** | **`a68c88c`** — *not* `09faced`, which is what this mission's own open recorded |
| relationship | ⛔ **DIVERGED** — behind **2**, ahead **3**; remote main is **not** an ancestor of HEAD |
| what lemur added | `dd94531` installer 0.4.20 (three Windows-activation gaps) · `a68c88c` `adna-install.exe` rebuild |

⭐ **This is F-s's two-writer situation recurring — caught BEFORE the push this time, and by deriving
the remote rather than trusting a carried sha.** The mission's own "Derived at open" table says
`origin/main = 09faced, unpushed 0`; that was true on 08-29 and is false now. *A derived fact is a
statement with a timestamp too.*

**Measured, not assumed, before recommending anything:**
- **Zero file overlap** between the two writers' commits `[D]` — no conflict.
- lemur touched only `site/public/` (installer binaries, `install.sh` 0.4.19 → 0.4.20, `install.ps1`,
  the Arch repo). **No gate reads `install.sh`**, and **no test pins `0.4.19`** `[D]`.
  `install_truth.json` carries only `schema_version`, so the version bump is not coupled to it.
- ⚠ **But the 653/1skip recorded above was measured on a tree WITHOUT lemur's two commits.** Pushing
  after a reconcile would put a tree on `main` that no suite has ever run against — and O3's whole
  purpose is a *clean* CI signal about `gate-33`.

⇒ **O3's procedure, amended by this finding:** reconcile first (`git pull --rebase`, no conflicts
expected), **re-run the suite on the merged tree**, *then* push. ⛔ Not done here — reconciliation is
part of performing the push, and the push is the operator's gate.

**Surfaced, not folded in** — three inbound memos sit **untracked** in `who/coordination/`, one of
them the Vitruvius scope-B reply `P4.4b B2b` is held on (it is in our tree, answering our 08-24 ask
by name, while its own `status:` still reads `staged`). Operator ruled: **surface only**; B2b's
re-entry stays a routing call of its own. `coord_2026_08_29_babbage_…` carries
**`ack_required: true`** with nobody holding it.

**Files touched** — `site/src/utils/contentSource.ts` · `site/tests/gates/gate-33-freshness.spec.ts`
· `site/tests/gates/gate-52-freshness-state.spec.ts` (new) · `site/scripts/freshness_state_redtest.sh`
(new) · `artifacts/gr_2/o2_redproof_record.md` (new) · the mission file · campaign `CLAUDE.md` · this
file.

## Next Session Prompt

Resume **HAUSSMANN GR-2** (`missions/mission_haussmann_gr_2_ci_freshness.md`, `in_progress`) at
**O4**. O0/O1/O2/**O3** are closed; **AC-1, AC-2, AC-3 and AC-5 are met**. `AC-1` closed at run
**`33465663585`**: CI's own build printed *"GIT COULD NOT ANSWER … git said: `fatal: detected dubious
ownership in repository at '/__w/aDNA.aDNA/aDNA.aDNA'`"* — **not** a shallow clone, so `fetch-depth`
was never the lever.

**FIRST ACT, before O4:** read the **unlighthouse sweep's first-ever run** (fired 2026-09-01 07:43
UTC on `1c8fde6`; `gh run list --workflow=unlighthouse-sweep.yml`). It is a **bare runner with no
container**, so it is the negative arm of the ownership hypothesis. **Predicted before the run, and
recorded so it cannot be retrofitted: `freshness: git answered`.** Report what it actually said. A
failure there is a **new finding, never absorbed into GR-2** (F6).

Then **O4**, under its own ⛩ **push GO**: add one step to `.github/workflows/gates.yml`, after
`actions/checkout` and before the build — `git config --global --add safe.directory
"$GITHUB_WORKSPACE"`. ⚠ Scoped to `$GITHUB_WORKSPACE`, **never `*`** (a wildcard silences the class
everywhere including where it is a real warning — the same defect shape just removed). ⚠ **Do not add
it to `unlighthouse-sweep.yml`**: no container, no refusal to fix, and a remedy applied to an absent
cause is `F-x`(b) reintroduced by the commit fixing `F-x`. Verify **at the run** that
`gate-33-freshness` passes, against run `33465663585` as the standing **red control**; any
non-gate-33 failure is a new finding, never absorbed.

⚠ **Push timing**: `gates.yml` is `cancel-in-progress: true` on the group the sweep joins — **confirm
the sweep has finished before pushing**, or the push cancels it.

`O5` then adds campaign **convention 19** (derive `main`'s CI status at session open), **strikes
`F-x`** with both halves discharged, routes **`F-y`** (the register has no derivable tally — state it
as carried arithmetic with its basis named; `F-s` is the row no tally counts), and files the **AAR**
(SO#5). ⛔ **No deploy at any point** — AC-5 is measured and met.

**Derive, never carry** — it has paid off every sitting: re-read `HEAD`, `git ls-remote origin
refs/heads/main` (the remote moved mid-mission once already), the unpushed count, and
`/.well-known/adna-build.json`. Suite counts are **all-projects** (679 here), which is *not* what
`npm run test:gates` prints (653) — compare like with like.

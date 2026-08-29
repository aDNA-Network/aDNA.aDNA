---
type: session
session_id: session_stanley_20260829_143321_haussmann_gr_2_ci_freshness
created: 2026-08-29
updated: 2026-08-29
status: active
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_gr_2_ci_freshness
increment: "GR-2 Stage 0 — open the mission, run the convention-13 pre-build pass, halt at the ⛩ budget gate"
executor_tier_declared: opus
executor_tier_actual:
token_budget_estimated: "~130–215 kT / 1–2 sessions for the whole mission (Stage 0 ~25–40 · Stage 1 ~25–40 · Stage 2 ~40–70 · Stage 3 ~20–35 · Stage 4 ~20–30). Re-derived at the ⛩ gate, not carried from the plan."
token_budget_actual:
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

### Stage 0 — open (in progress)

- Session file created (this file).
- Mission authored: `missions/mission_haussmann_gr_2_ci_freshness.md`.
- Convention-13 pre-build pass → `artifacts/gr_2/ac_amendment_proposal.md`.
- ⛩ Budget ratification gate. **Nothing builds before it.**

## SITREP

*(filled at close)*

## Next Session Prompt

*(filled at close)*

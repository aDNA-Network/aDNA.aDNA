---
type: session
session_id: session_stanley_20260904_155111_haussmann_deploy_gr5
created: 2026-09-04
updated: 2026-09-04
status: active
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: null   # ⛩ OPERATOR-RULED ROUTING SITTING. Discharges the two GOs the 2026-09-04 R-97 sitting halted before, then opens `GR-5`. Opens no mission until GR-5's own ⛩ pre-build gate.
increment: "⛩⛩ The two owed GOs — **push, then deploy** — taken in that order, plus `GR-5` opened at its convention-13 gate. ⛩ Operator ruled the deploy SCOPE at this sitting's open: **deploy `2a72efe` (R-97 alone), not HEAD** — the course stays unshipped and becomes CI-visible instead."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~60–110 kT for the GO half (recon ~10 · push + CI triage ~15–25 · deploy + live verification ~15–25 · records + charter correction ~15–30 · handoff ~5–10). ⚠ Costed AFTER reading `gate-49`'s TEMPLATES list per SO#11's O2 retrospective, for the sixth consecutive sitting: **no re-baseline fires** — this sitting ships no copy and no changelog entry; the deploy is of an already-built, already-green tree. GR-5's own band is costed AT its gate, not here (this campaign's standing finding: *a budget ratified before the operator's rulings is costed against a scope nobody has chosen yet*)."
token_budget_actual:
tags: [session, haussmann, deploy, r_97, gr_5, f_ab, routing]
---

# Session — the two GOs, and a deploy scoped to exclude a lane that was never gated

## Derived at the open (convention 12 — recon-at-execution; nothing below is carried)

| Fact | Value | Command |
|---|---|---|
| **Clock** | **2026-09-04 15:51 UTC** | `date -u` |
| HEAD | `c32a4b7` | `git rev-parse HEAD` |
| `origin/main` | **`2a72efe`** — derived **at the remote**, never at a tracking ref | `git ls-remote origin main` |
| Unpushed | **2** — `b2e943b`, `c32a4b7` | `git rev-list --count @{u}..HEAD` |
| `main` CI (**convention 19**) | ✅ green at **`2a72efe`**, run `33840176959`, `success`, 12m1s, 2026-09-04T05:32Z | `gh run list` |
| …**its width** | ⚠ **green at `origin/main`'s tip, which is TWO commits BELOW HEAD.** The width gap is the whole subject of this sitting | same |
| Production | **`7cef6e0`**, built 2026-09-03T21:37:13Z, `mode=prod` | `curl /.well-known/adna-build.json` |
| Ancestry guard | `7cef6e0` **is** an ancestor of `2a72efe` ⇒ a ship of `2a72efe` passes on its own terms | `git merge-base --is-ancestor` |
| Dirty tree | `.obsidian/*`, `.astro/`, one capture report — **all outside** the deploy guard's scope | `git status --porcelain` |
| Active sessions | one — the 2026-09-04 R-97 sitting, closed by this one | `ls how/sessions/active/` |

## ⭐ FINDING 1 — the deploy did not need the commit that was blocking it

Read at the object, not inherited from the halting session's summary `[D]`:

**R-97's copy fix is already at `origin/main` and already CI-green.** It landed in `7475318` +
`2a72efe`, both pushed before the halt. The two unpushed commits were:

| Commit | Content | Gated? |
|---|---|---|
| `b2e943b` | `/learn/course` pipeline + lessons 1–2 — **1157 insertions, 13 files, all `site/src/`, zero test files**, ~4 new routes, a new `content.config.ts` collection | ❌ **never** — `origin/main` sat below it |
| `c32a4b7` | the session record — **30 lines**, nothing else | n/a |

⇒ **The halting session framed the choice as *ship both or ship neither*, and it was neither.** The
blocking commit sits **above** the thing being shipped, so a deploy of `2a72efe` ships R-97 and
excludes the course **without touching either commit**. ⭐ The halt bought exactly the option it was
taken to buy; what it did not do was notice the option was already there.

## ⚠ CORRECTION — the halting session's attribution of `b2e943b` was wrong, and the halt was still right

The 2026-09-04 R-97 session file reads `b2e943b` as *"another writer's 1157-line feature that no CI
has ever seen, and it is **not this sitting's to ship**."* Measured at the object `[D]`:

- `git log -1 --format='%an <%ae>' b2e943b` → **`Stanley <science.stanley@stanley.science>`**,
  `Co-Authored-By: Milner (TypeScript.aDNA)`.
- The commit body: *"Built by Milner under the **operator-carried consent of 2026-09-03**, which names
  the exact paths in this tree that the course may touch."*

⇒ **It is not an unauthorized writer; it is an authorized one.** The halt was **correct anyway**, and
for the reason the file's *other* clause gives: it is **un-CI'd**, and its own message concedes
*"lessons must be committed before the gate run"* — a gate run that had not happened. ⭐ **The halt
was right on review state and wrong on authorization**, and those are different objections with
different remedies: review state is discharged by a push, authorization would have needed the operator.
**Recorded because a record that halts for the wrong reason teaches the wrong rule** — this is `F-u`'s
family (a provenance claim asserted more confidently than it was checked), **seventh sighting**, and
this time the falsifying command is one `git log`.

## ⛩ Operator rulings taken at this sitting's open

1. **Deploy scope — `2a72efe`, R-97 alone.** The course stays unshipped and becomes CI-visible.
   Reasoning accepted at the gate: `P5.1`'s cold readers should not meet a **2-of-7-lesson** course,
   and R-97's deploy should not be coupled to another lane's red.
2. **Next lane — `GR-5` as ratified**, at its own convention-13 pre-build gate.

## O1 — ⛩ GO #1: the push `[D]`

```
2a72efe..c32a4b7  main -> main
pre-push: gitleaks clean across 1 outgoing range(s) ✓
```

`git ls-remote origin main` → `c32a4b7` **at the remote**. Pushing publishes **source to a public repo,
not the site**; it is the only mechanism by which CI can ever gate `b2e943b`.

## O2 — CI's first look at the course

Run **`33893251012`** at `c32a4b7`, started 2026-09-04T16:06:15Z. **Verdict recorded in §CI below.**

⛔ **Its reds are not this sitting's to fix.** `b2e943b` is another lane's work and its gate coverage
is **that lane's ADR-057 debt** — a commit that adds four routes and updated no gate spec, against a
suite where **~30 specs sweep every route in `dist/`**. This sitting **surfaces and routes**; it does
not author gates for the course.

⚠ **`F-ab` is live** — `gate-39`, `gate-42 G42b` and three `gate-47` assertions are load-sensitive,
measured at comparable rates on an **unmodified control tree**, 14/14 in isolation. A red on those is
**a question, not a verdict**.

## O3 — ⛩ GO #2: the deploy `[D]`

Dry-run first, guards only:

```
alias ancestry OK: live 7cef6e0 is an ancestor of HEAD 2a72efe
== DRY RUN — all guards passed; stopping before the build. ==
would_record: mode=prod tree=2a72efe
```

⭐ **`would_record` carries no override** — the ancestry guard passed **on its own terms**, second
consecutive deploy to do so. Clean-tree guard needed no stash: it is scoped to
`src/ public/ vercel.json astro.config.mjs`, and every dirty path was outside it (checked **before**
the checkout, not discovered by an abort).

Then the real run:

```
deploy_record: 2026-09-04T16:09:21Z mode=prod url=https://adna-docs-m1cbqtq1n-science-stanleys-projects.vercel.app token=SS_VERCEL_TOKEN (interim — migrate to VERCEL_TOKEN_ADNA when brokered) tree=2a72efe
```

226 pages built in 67.09s · 4 headers injected · 5 installer routes · 42 redirects widened ·
446 negotiation routes · stamp `2a72efe (prod)` ·
**live headers 4/4 match by VALUE** on `https://adna.network` (the alias, not the `*.vercel.app` URL —
convention 14's fix holding).

### ⚠ The detached-HEAD residue, handled deliberately

`deploy_adna.sh` stamps `git rev-parse HEAD`, so the checkout had to sit at `2a72efe` — and the script
appends its record to the **tracked** `site/scripts/deploy_log.txt`, which would have orphaned the
line on a detached head. Handled: capture the line → `git checkout -- site/scripts/deploy_log.txt` →
`git checkout main` → **re-append on `main`**. The log stays linear and the record lives where the
branch can see it. *(Anticipated at the plan, not discovered at the abort.)*

## O4 — live verification: the CONTENT probe, not the headers `[D]`

**Convention 16 in force**: on 2026-08-23 `check_live_headers.mjs` passed **4/4 on both sides of a
stale build** — *headers were never the thing that regressed; content was, and only a content probe
can see content.*

| Probe | Result | Reads |
|---|---|---|
| `/.well-known/adna-build.json` | `2a72efe…`, `2026-09-04T16:08:57.841Z`, `mode=prod` | ✅ the intended tree |
| `/` → `aDNA itself sends nothing` | **1** | ✅ R-97 **LIVE** |
| `/` → `nothing leaves your machine` | **0** | ✅ the over-promise is **gone from production** |
| `/` → `files stay on your machine` | **1** | ✅ `R-120`'s sibling intact — **the two lines now agree** |

⭐ **The scope held, and it is falsifiable rather than asserted:**

| `/learn/course/` | **404** | ✅ the course did **not** ship |
| `/learn/course/what-is-an-adna-graph/` | **404** | ✅ same |

**Convention 16 re-probe** of what this phase shipped — `/privacy/` `/commons/` `/network/`
`/state-of-the-network/` `/community/proposals/` all **200**; `/privacy/` still carries
`regulated-data` (**`R-124`**). ⇒ **no regression**, and the check was a content grep on the surface
`R-124` actually lives on, not a status code standing in for one.

## ⭐ The four-surface over-promise class is CLOSED

`R-64` `/get-started` (GR-1) · `R-161` `/network` (GR-4 O3) · `R-167` `/privacy` (GR-4 O5) ·
**`R-97` `/` (this deploy)**. Diagnosed at **P0.5** with its remedy attached; **live on all four** as of
2026-09-04T16:09Z. ⚠ Stated at its width: *live* is a statement with a timestamp (convention 16), and
the recurrence obligation is the habit, not a monitor.

## CI — the course's first gate run, and ⛔ MY PREDICTION WAS WRONG IN BOTH DIRECTIONS

Run **`33893251012`** at `c32a4b7` → **`failure`**, 7m17s. Derived from the run, not the summary `[D]`:

```
gh run view … -q '.jobs[0].steps[] | select(.conclusion!="success" and .conclusion!="skipped")'
→ failure   Visual regression (gate-49 — 12 templates × 2 themes, in-container baselines)
```

**Exactly one step failed, and inside it exactly 2 of 24 assertions:**
`G49c/d [dark]: doc-hub (/learn/)` and `G49c/d [light]: doc-hub (/learn/)`. **Everything else passed.**

⛔⛔ **The prediction this desk wrote into the plan was wrong, and stating how is the point.** It named
route-sweeping gates — `gate-42` console-clean (two new client islands), `gate-4` a11y, `gate-47`
keyboard, `gate-31` link-integrity, `gate-26`/`gate-20` claim coverage, `gate-33` freshness — reasoning
that **~30 specs sweep every route in `dist/`** and four new routes had never met them. **Not one of
them fired.** The four new routes, two new client islands and 1157 new lines **passed the entire
sweeping suite on their first contact with it.**

⭐⭐ **The red came from the OPPOSITE direction: a ten-line edit to an OLD page.** Verified at the
object `[D]`:

- `git show b2e943b -- site/src/pages/learn/index.astro` → **+10/−3**: a new *"2 · Take the intro
  course"* section inserted, and the two headings below it **renumbered** 2→3, 3→4.
- `gate-49-visual-regression.spec.ts:58` → `{ id: 'doc-hub', path: '/learn/', why: 'DocumentationLayout
  hub shape' }` — **`/learn/` is one of the 12 pinned templates.**

⇒ **The change is real, intended and correct; it was simply never re-baselined.** This is **ADR-057's
same-diff law** (convention 7) — *any commit that changes a rendered surface updates every gate that
pins it, in the same commit* — and it is the campaign's own **`gate-49` TEMPLATES-list quirk** arriving
from the side nobody watches.

⭐ **The lesson, stated as the general form:** *this desk costed the risk by counting what the commit
**added**, and the gate that broke was pinned to what the commit **touched**.* A route-sweeping suite
grows to fit new routes by construction — that is what sweeping means. **A pinned baseline does not
grow; it disagrees.** ⇒ **The exposure of a diff is its intersection with the PINNED set, not its line
count**, and the 1157-line number that made this commit look dangerous was the least informative fact
about it.

⛔ **NOT FIXED HERE, deliberately, and the restraint is the ruling.** Re-baselining `doc-hub` **certifies
that the new `/learn/` hub looks right**, which is a judgment about the **course lane's** copy and
layout — **convention 4: the builder never self-certifies, and this desk is not that lane's reviewer
either.** The baselines are also **in-container** (the step name says so), so it is not a local
one-liner. ⇒ **Routed, with the diagnosis complete enough to act on in one sitting**, which is the most
this desk can honestly hand over. ⚠ **`main` is red until it is done**, and that cost is named rather
than left for someone to discover.

⚠ **`F-ab` did not fire.** `gate-39`, `gate-42 G42b` and the three `gate-47` assertions **all passed**
in this run. Recorded because `F-ab`'s whole subject is a rate: **this is one more green observation on
the load-sensitive set**, and a rate is what `GR-5` needs.

## ⭐⭐ POST-SITREP — `F-s`'s CONDITION CAUGHT **LIVE**, WITH THE OTHER WRITER STILL TYPING

Recorded because it happened **after** the SITREP was written and it is the sharpest thing in the sitting.

**What happened, measured at the reflog `[D]`:**

```
7c1800c HEAD@{0}: commit: GR-5 authored and HALTED at its ⛩ gate
f847266 HEAD@{1}: checkout: moving from main to course/slice-b     ← NOT THIS DESK
f847266 HEAD@{2}: commit: 🚀 DEPLOYED — R-97 is live …
```

Between this desk's deploy commit and its GR-5 commit, **the course lane created and checked out
`course/slice-b` in this shared checkout.** The GR-5 commit therefore landed on **their branch**, and
`git push origin main` answered **`Everything up-to-date`** — *truthfully*, because `main` had not moved.

⭐⭐ **The push said `Everything up-to-date` about a commit that had just been made.** That sentence is
**not a lie and not a bug** — it is a true statement about the ref that was named, while the work sat
on a ref nobody named. ⇒ ***a success message is scoped to the question asked, and "did my work get
published" was never the question `git push origin main` answers.*** It was caught only because the
next command **derived the remote** (`git ls-remote`) instead of trusting the push's own output —
convention 12's recon-at-execution applied to a command's *success* rather than to its failure.

⚠ **This is `F-s`'s family — *two writers each silently un-publishing the other* — and it is the THIRD
sighting, but the FIRST caught while the other writer was still at the keyboard**: `pgrep -x git`
returned a live pid, and two new course lessons (`home-adna-your-nodes-home-vault.md`,
`sessions-missions-campaigns-skills.md`) had been written **two minutes earlier**. Both prior sightings
were autopsies; this one was found with the patient awake.

⛔ **What was deliberately NOT done, and the restraint is the ruling.** The tidy fix — `git checkout
main`, or `git branch -f course/slice-b` back to where they created it — would have **switched or
rewritten another lane's ref while that lane was mid-session.** Cross-lane writes are memos, never
direct edits (Rule 10), and *"it's a no-op on file contents"* (both refs sat at `7c1800c`) is an
argument about **files**, not about the **ref their next commit lands on** — which is exactly the
defect this desk had just suffered, and inflicting it back is not a fix.

**What was done instead — the minimal act that touches nothing of theirs:**

1. `git merge-base --is-ancestor f847266 7c1800c` → **verified a pure fast-forward before moving anything.**
2. `git branch -f main 7c1800c` — **no branch switch, no working-tree change, no ref of theirs touched.**
3. `git push origin main` → `f847266..7c1800c`, gitleaks clean; **`git ls-remote` confirms `7c1800c` at
   the remote.** The GR-5 work is public and safe.
4. This record committed **from a `git worktree` on `main`**, so the shared checkout was never disturbed.

⚠ **Left as it stands, for the operator, not resolved unilaterally:** `HEAD` in the primary checkout is
still on **`course/slice-b`**, whose tip is this desk's GR-5 commit. **Any further commit in that
checkout lands on their branch.** That is a two-lane question and it is theirs to settle — the two
lanes are sharing one working tree, which is the condition, not the accident.

## SITREP

**Completed** — ⛩ **GO #1** (push `2a72efe..c32a4b7`, gitleaks clean) and ⛩ **GO #2** (deploy
`tree=2a72efe`, R-97 alone, no override flags). `R-97` is **LIVE and content-verified**; the
**four-surface over-promise class is CLOSED** (`R-64` · `R-161` · `R-167` · `R-97`). Deploy scope proven
falsifiably (`/learn/course/` **404**); convention-16 re-probe found **no regression**. `DP8`'s stale
charter row corrected strike-not-delete. CI's first look at the course triaged to a single named defect.

**In progress** — nothing. Both GOs are discharged.

**Next up** — **`GR-5`** on `F-ab` at its own ⛩ convention-13 pre-build gate, carrying the pin ruling
for `gate-39` (**(1)** re-derive the pin in CI's own environment · **(2)** record the gate advisory with
its reason on its face; ⛔ **not** 7.9 → 7.4). Then **`P5.1`** with the humans — its `AC-P` is now
**satisfied**, and its kit has been built and waiting since 2026-08-26.

**Blockers** — none agent-side for this campaign. ⚠ **`main` CI is red** on `gate-49 doc-hub`, owned by
the **course lane**, diagnosed above. `P5.1`/`P5.2` remain human-gated.

**Files touched** — `site/scripts/deploy_log.txt` · `STATE.md` ·
`how/campaigns/campaign_haussmann/campaign_haussmann.md` (DP8 row) ·
`how/sessions/history/2026-09/session_stanley_20260904_014553_haussmann_r97_scope.md` (closed + moved) ·
this session file.

**Next Session Prompt** — *Operation HAUSSMANN, aDNA.aDNA (Rosetta). `R-97` is **LIVE** —
production serves `tree=2a72efe` (deployed 2026-09-04T16:09:21Z), `/` reads "aDNA itself sends nothing"
and no longer reads "nothing leaves your machine", and the four-surface over-promise class is closed.
Both owed ⛩ GOs are discharged. Derive at your open: `date -u`,
`gh run list --workflow=gates.yml --branch main -L 5`, `git ls-remote origin main`, and production's
stamp from `/.well-known/adna-build.json`. ⚠ **`main` CI is RED and it is not this campaign's defect**:
`gate-49` `doc-hub (/learn/)` fails in both themes because `b2e943b` (the course lane) inserted a
section into `site/src/pages/learn/index.astro` and renumbered two headings without re-baselining a
pinned template — ADR-057 same-diff, diagnosed in full in this session's §CI, **route it, do not absorb
it** (re-baselining certifies that lane's copy, which convention 4 forbids this desk from doing). The
ratified next lane is **`GR-5`** on `F-ab` at its own ⛩ convention-13 pre-build gate — run the pass
COMPLETE and RECORD ITS COVERAGE (every method-bearing × test-bearing pair), and carry the ⛩ pin ruling
for `gate-39`'s non-reproducible 7.9px `netdiagram-svg` measurement: **(1)** re-derive the pin in CI's
own environment, or **(2)** record the gate advisory with the reason on its face — ⛔ never 7.9 → 7.4,
which is moving a bar to pass a test. Note for `F-ab`'s rate: run `33893251012` passed `gate-39`,
`gate-42 G42b` and all three `gate-47` assertions. After GR-5, **`P5.1`** — its `AC-P` is now satisfied
by this deploy and its kit (`panel_kit_v2` · `recruitment_brief` · `contribution_run_protocol` ·
`ttfs_run_record`) has been built since 2026-08-26; it needs five recruited cold readers, and ⭐ **its
`AC-2` TTFS run and `P2.6`'s `O0b` are the same act with conflicting runner conditions** — one
non-builder runner discharges both (STATE's QUEUED block has the ruling this needs).*

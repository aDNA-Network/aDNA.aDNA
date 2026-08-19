---
type: artifact
artifact_id: design_zero_install_path
title: "P2.5 O0 — The zero-install path: design, first-success definition, cost statement, TTFS kit"
campaign: campaign_haussmann
mission: mission_haussmann_p2_5_onboarding_paths
phase: P2
objective: O0
created: 2026-08-19
updated: 2026-08-19
status: awaiting_operator_pick
last_edited_by: agent_rosetta
grounded_in: ["coldread_SYNTHETIC_senior_engineer", "install_truth.json (build-derived)", "skill_onboarding.md (read on disk 2026-08-19)", "claim register R-34 / R-63"]
tags: [artifact, haussmann, p2_5, onboarding, ttfs, design]
---

> **⛩ This artifact ends at an operator pick.** O0 designs and halts; O1 builds only what is picked.

# P2.5 O0 — the zero-install path

## 0. The finding that decides the pick

**F-P2.5-1 — `/get-started/` renders invented terminal output as if it were a real session.** `[D]`

`site/src/pages/get-started.astro` lines 68–76 render, in a `<pre>` block introduced by `$ claude`:

```
✓  Loaded CLAUDE.md (workspace router)

This is a fresh aDNA workspace — the standard is in place and
there are no projects yet. Let's create your first one.

What is this project called, and what problem does it solve?
> _
```

None of that text exists anywhere in the standard. Searched `~/aDNA/.adna/` in full: zero hits for
`Loaded CLAUDE.md`, `what problem does it solve`, or `no projects yet`. The only occurrence anywhere
in the repository is the marketing page itself. `[D]`

The depicted *flow* is roughly right in intent; the depicted *output* is authored. And the mechanism
is subtler than a wording mismatch: `skill_onboarding.md` states it "runs inside a forked project
directory, never in the base template," and gates on `MANIFEST.md` lacking `role: template`. A freshly
cloned workspace has **no project yet**, so the skill the page is dramatising is not the one that runs;
the root router's project-creation path is (`skill_project_fork.md`). `[D]`

**Why this decides the pick rather than sitting in a defect list:** O0's option set includes "rendered
example session." The honest version of that option is *precisely the thing this page is currently
faking*. Choosing it means replacing an invented transcript with a real one. Choosing against it means
the invented transcript still has to go — it cannot survive either way, because the mission's own
constraint is *"the tour shows real artifacts (honesty law — no staged mockups presented as live)"* and
this is the funnel's most load-bearing screen.

It also lands on the exact nerve the refusing reader named. He wrote that the get-started page's
"nothing executed from the network" line was the "right instinct, and it's true" — the one thing he
credited. Faked output sits three inches above the sentence he trusted.

## 1. What we are actually solving

The best-disposed synthetic reader in the packet — a senior engineer, MIT licence, guarded yes —
**refused the primary CTA**, and then wrote down the path he would take instead. `[D-syn]`

> (1) read `CLAUDE.md` and `.adna/` raw in the browser; (2) if it looks sane, clone into a scratch
> directory — not `~/aDNA` — and read `skill_onboarding.md` before ever running `claude`; (3) maybe try
> the triad layout by hand on one small existing repo.

That is not a complaint. **It is a specification for the missing path, written by the user who needed
it.** He improvised a read-only evaluation route because the site does not offer one. O0's job is to
make his route first-class rather than invent a different one.

His objections map cleanly onto the mission's acceptance criteria:

| Objection `[D-syn]` | Criterion it lands on |
|---|---|
| One-liner hardcodes `~/aDNA` and *"immediately launches an agent inside a stranger's instruction files"* | cost statement — what it writes where, what the agent reads |
| *"the thing you're auditing is prompt-ware, and prompt-ware is executed by the agent"* | the trust objection answered **in place** |
| No way to see it work without cloning (H3) | the zero-install path itself |
| *"one open answer any tool can support"* contradicted by *"Claude Code installed via npm…"* | say plainly that this is a Claude Code convention |

## 2. "First success" — defined observably

Currently undefined, which is why the D3 score is provisional on a run nobody has made. Proposed
definition, in two halves, both checkable by the reader rather than felt:

**Structural — five assertions the user can run and see pass:**

```
test -f ~/aDNA/CLAUDE.md            # the router your agent reads first
test -d ~/aDNA/.adna                # the standard, embedded and read-only
ls -d ~/aDNA/*.aDNA                 # at least one project vault exists
test -d ~/aDNA/<name>.aDNA/what \
  -a -d ~/aDNA/<name>.aDNA/how \
  -a -d ~/aDNA/<name>.aDNA/who      # its triad
git -C ~/aDNA/<name>.aDNA log       # its own history, separate from the image's
```

**Behavioural — the one that is actually the point:** open a *new* agent session inside
`<name>.aDNA/` and it greets you already holding that project's governance, without being told where
to look. The structural half proves files were written. This half proves the thing the standard
exists for.

Both halves ship on the page. A definition of success the user cannot check is an adjective.

**Claim-register consequence:** `R-34` (`/network`, "About five minutes") and `R-63` (`/get-started`,
"in about 5 minutes") are both registered `[A]` at S4 with *"no recorded run linked."* They are
**discharged by measurement at O2 or revised down — not by this design.** No new timing claim is
authored anywhere in O1. `[D]`

## 3. The variants

All three assume the finding in §0 is fixed regardless of pick.

### Variant A — "Read it before you clone it": an annotated tour of the real files

Render the actual artifacts an evaluator reads first — the workspace `CLAUDE.md` router, `.adna/`'s
governance, `skill_onboarding.md`, and one real project vault's triad — **on the site**, annotated,
pulled from the canonical repo at a **pinned commit** shown on the page.

- **Honesty:** strongest available. Not a depiction of the artifact; the artifact.
- **Answers the refusal:** directly — this *is* his step (1), and it removes his reason to leave the site to do it.
- **Self-reference (SO#8):** the tour can show *this vault's own* files. The structure is the lesson.
- **Cost:** ~1 session. A build-time vendor of ~5 files + a tour page + a currency assertion.
- **Risk:** drift. Mitigated by pinning the commit, displaying it, and gating on a hash match — the same
  shape as `install_truth.json`, which already does exactly this for the install commands (`template_sha`).
- **Weakness:** shows the *material*, not the *motion*. It answers "is this sane?" better than "does it work?"

### Variant B — A real recorded first session

Replace the invented transcript with a genuine one: an actual clean-machine run, captured verbatim,
rendered as text with its date, machine, and version stamped on it.

- **Honesty:** strongest *if and only if* it is real — and it retires F-P2.5-1 by substitution rather than deletion.
- **Answers the refusal:** partially. He wanted to *audit* before running; this shows him someone else running.
- **Cost:** ~0.5 session to render — **but it cannot be built until O2 produces the run.** This inverts the
  mission's own order (O1 build → O2 measure).
- **Risk:** a transcript ages faster than a file, and it is the artifact type most likely to quietly become
  a period piece. It also needs a scrub pass — a real session carries real paths and a real machine name.

### Variant C — asciinema-style animated replay

- **Honesty:** same as B; it is B plus playback.
- **Cost:** highest. A player, a recording toolchain, and an accessibility burden on a site holding **axe-0**
  with a deliberate no-JS baseline. Every other interactive surface here ships a no-JS twin; this would need one too,
  and its no-JS twin is... Variant B.
- **Assessment:** the animation buys motion the static transcript already conveys, at the cost of the site's
  strongest structural commitments. **Not recommended.**

## 4. Recommendation — **A now, B at O2, C not at all**

A and B are not competitors; they are **different objections**. A answers *"can I trust this before I run
it?"* — the objection that actually caused the refusal. B answers *"does it work?"*, which the reader was
already guardedly willing to believe (*"the downside is a wasted evening"*).

Sequencing follows the mission's own order rather than fighting it:

- **O1 builds A** — the annotated real-file tour, plus the get-started upgrades (cost statement, troubleshooting,
  uninstall, first-success), and **deletes the invented transcript**, leaving the block empty rather than
  refilled. An honest gap beats a plausible fill, and P2.4's lesson is that a considerate-looking absence is
  where a defect hides — so the gap ships **labelled**, not silent.
- **O2's clean-machine run produces the real transcript as a by-product** of the TTFS measurement it must do anyway.
- **O3 folds that transcript back in as B**, retiring the labelled gap with a measured artifact.

One run, three deliverables, and no page ever claims something unmeasured. If the operator prefers a single
build pass, the alternative is to defer *all* of §3 to after O2 — at the cost of leaving F-P2.5-1 live longer.

## 5. Cost statement — draft copy for `/get-started/`

To sit **above** the one-liner, not below it. Every fact derived from `install_truth.json` or the repo, none typed.

> **What this command does, before you run it.**
> `git clone … ~/aDNA && cd ~/aDNA && claude`
>
> - **Writes one directory: `~/aDNA/`.** Nothing outside it, no system settings, no PATH changes, no
>   daemon. If you would rather not use that path, clone anywhere — nothing in the workspace depends on
>   the location, and `~/aDNA` is only the default the docs assume.
> - **The `&& claude` starts an agent in that directory**, which reads the instruction files you just
>   cloned — `CLAUDE.md` at the root, and the standard in `.adna/`. That is the actual trust question here,
>   and it is fair: these files are prompt-ware, and prompt-ware is executed by the agent that reads it.
> - **So read them first.** [Every file the agent reads on first run, annotated →]  *(the Variant A tour)*
> - **Nothing is sent anywhere.** No account, no telemetry, no network call after the clone.
> - **This is a Claude Code convention.** The workspace is plain Markdown that any tool can read, but the
>   one-command flow assumes Claude Code specifically. Other agents can read the same files; they will
>   not run this command.
> - **To undo it: `rm -rf ~/aDNA`.** There is nothing else to uninstall.

The last two bullets each retire a live contradiction: the *"any tool can support"* claim the reader caught,
and the absent uninstall path.

## 6. TTFS instrument — kit sketch (authored reusable; owed to WebForge, A6)

Written generic from the first line: it measures *time to first success* for any quickstart, and takes the
success definition as **input**. Nothing aDNA-specific in the protocol.

**Protocol.**
1. **Clean machine.** Fresh VM or fresh user account. Record OS, arch, and what was pre-installed —
   a run on a machine that already had the prerequisites is a different measurement, and must be labelled as one.
2. **Start the clock** when the runner first loads the entry URL — *not* at the first command. Reading the
   page is part of the time to success, and it is where the refusal happened.
3. **Stop the clock** at the first success definition (§2), structural half. Note the behavioural half separately;
   it is a second, later timestamp.
4. **Do not help.** The runner uses only what the site provides. Every question they had to answer another way is
   a friction entry, not a hint to give them.
5. **Record prerequisite time separately.** Installing Node to get Claude Code is real time an evaluator spends,
   and folding it in or out silently is how a "5 minute" claim gets made in either direction.

**Friction log — one row per stumble:**

| # | Timestamp | Where (URL / step) | What they expected | What happened | Recovery | Cost (s) | Severity |
|---|---|---|---|---|---|---|---|

`Severity` uses the campaign's S1–S4 scale. A run with an empty friction log is reported as suspect, not as
excellent — it usually means the runner was not naive.

**Reporting.** TTFS is reported as **a number with its conditions attached**, never bare: `TTFS = N min (macOS
15.x, prerequisites pre-installed, 1 runner, 2026-08-xx)`. A single run is an observation, not a distribution,
and the report says so. The P1.2 lesson is load-bearing here — **record the instrument with the score, always**;
that ranker's 3.61 was quoted forward three times as fact and was never reproducible.

## 7. ⛩ The pick

| # | Question | Options | Recommendation |
|---|---|---|---|
| 1 | Which zero-install variant does O1 build? | **A** (annotated real-file tour) · **B** (real recorded session, needs O2 first) · **C** (animated replay) · **A now + B at O3** | **A now + B at O3** |
| 2 | The invented transcript at `/get-started/` (F-P2.5-1) | **Delete now, ship a labelled gap** · delete and refill with A's tour · leave until B can replace it | **Delete now, labelled gap** |
| 3 | Does the cost statement (§5) ship as drafted? | as drafted · with edits · rework | as drafted |
| 4 | Is the first-success definition (§2) accepted as the O2 stop-condition? | yes · yes with edits · rework | yes |

**Not asked, deliberately:** the wording of the "about 5 minutes" claims. They are registered `[A]`/S4 and are
discharged by O2's measurement or revised down then — not decided in a design memo.

## Provenance

`[D]` — get-started source read on disk; `.adna/` searched in full for the depicted strings (zero hits);
`skill_onboarding.md` gating conditions read; `install_truth.json` read; claim register rows R-34 / R-63 read.
`[D-syn]` — the senior-engineer cold-read, a disclosed synthetic instrument, never a substitute for the human
instruments owed at P0.1 retro-validation and P5.1.

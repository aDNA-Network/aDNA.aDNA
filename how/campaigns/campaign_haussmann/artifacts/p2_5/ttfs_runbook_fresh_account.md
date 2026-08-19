---
type: artifact
artifact_id: ttfs_runbook_fresh_account
title: "TTFS runbook — the clean-machine run on a fresh macOS user account"
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
phase: P2
objective: O0b
created: 2026-08-19
updated: 2026-08-19
status: ready_for_operator
last_edited_by: agent_rosetta
grounded_in: ["ttfs_instrument_kit", "design_zero_install_path §2 + §6", "install_truth.json (build-derived)"]
tags: [artifact, haussmann, p2_5, p2_6, ttfs, runbook, operator]
---

> **⛩ OPERATOR-GATED.** Creating the account and performing the run are operator actions. This
> runbook is the preparation, not the execution. Nothing here has been run.

# TTFS runbook — fresh macOS user account

## Why a user account and not a VM

P2.5's design permits *"a fresh VM **or** a fresh user account."* The mission has been reading as
blocked on hardware since it was written, and it is not: a new local account on this node satisfies
the isolation requirement for everything the aDNA quickstart touches, because the install writes
**one directory inside `$HOME`** and changes nothing system-wide.

**Where a user account is genuinely weaker, stated up front** — the report must carry these as
conditions, not omit them:

- **Homebrew and Node are machine-wide.** A new account inherits whatever is on `PATH`. So this run
  measures *"an evaluator who already has the prerequisites"*, which is a real and common evaluator —
  but it is **not** the cold case, and §5 of the kit requires that be labelled.
- **A logged-in browser may carry cookies/extensions** if the operator signs into anything. Use a
  fresh profile and sign into nothing.
- **The true cold case needs a VM.** If the number matters commercially, run it once on a clean VM
  too. This runbook gets the cheap measurement; it does not pretend to be the expensive one.

## Preparation (operator)

1. **Create the account.** System Settings → Users & Groups → Add User. Standard (not Admin). Name it
   something disposable, e.g. `adnatest`. Admin authentication is required — if it is done from a
   script rather than the GUI, the elevation pattern is `how/skills/skill_agentic_sudo.md`.
2. **Record what it inherits, before starting.** Log in and capture, verbatim, into the run record:
   ```
   sw_vers                      # OS + build
   uname -m                     # architecture
   which -a git node npm claude # what is already on PATH — this IS the prerequisite condition
   node --version 2>/dev/null; claude --version 2>/dev/null
   ```
   Whatever this prints is the run's stated condition. Do not tidy it.
3. **Fresh browser profile**, signed into nothing. The entry URL must be reached the way a stranger
   reaches it.
4. **Do not pre-clone anything.** No `~/aDNA`, no warm git credential cache for the public repo.
5. **Start the screen recording** (with the runner's consent) before opening the browser.

## The run

**The runner is not the person who built this.** If the operator runs it themselves, that is a
condition to record — a builder cannot be naive about their own funnel, and the report should say so
rather than imply a cold read.

- **Clock starts** the moment the browser loads **`https://adna.network/get-started/`**. Not at the
  first command. Reading the page is where the refusal happened.
- **The runner uses only the site.** No help, no hints, no "oh you need to —". Every question they
  ask out loud is a friction row.
- **Prerequisite time is a separate stopwatch.** If they have to install Node or Claude Code, that
  clock runs alongside and is reported separately (kit §3.5).

### Stop condition — the five published assertions

The clock stops when these pass. They are the exact commands published on `/get-started/`, so the
runner can find them without being told:

```
test -f ~/aDNA/CLAUDE.md
test -d ~/aDNA/.adna
ls -d ~/aDNA/*.aDNA
ls ~/aDNA/<name>.aDNA/what ~/aDNA/<name>.aDNA/how ~/aDNA/<name>.aDNA/who
git -C ~/aDNA/<name>.aDNA log
```

**Then, as a second and later timestamp** — the behavioural half: open a *new* agent session inside
`<name>.aDNA/` and ask it something about the project. It should already know where it is and what the
project's governance says, without being told where to look. This does **not** stop the clock.

## What the run must produce

1. **The number, with its conditions attached** — never bare (kit §5).
2. **The friction log** — one row per stumble, kit §4 schema. Empty ⇒ reported **suspect**.
3. **The transcript** — this is the deliverable P2.5 deferred. Capture the real first session
   verbatim. It becomes variant **B** on `/get-started/`, replacing the labelled gap. **Scrub before
   publishing**: real paths, the machine name, the account name, anything in the shell prompt.
4. **A verdict on R-34 / R-63.** Both claim "about five minutes" and are registered `[A]`/S4 with no
   run behind them. The measurement either supports them, or they are revised down to what was
   observed. There is no third option in which the copy stays and the number is inconvenient.

## Teardown

Delete the account (System Settings → Users & Groups → remove, including its home directory) once the
recording and logs are copied out. Note the deletion in the run record — an account left behind is a
second, dirtier machine for the next run.

## Where the outputs go

`how/campaigns/campaign_haussmann/artifacts/p2_6/` — run record, friction log, scrubbed transcript.
Cite them from P2.6 O0b, and from the D3 re-score, which is the score this run exists to make
non-provisional.

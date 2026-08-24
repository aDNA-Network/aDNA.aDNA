---
type: artifact
artifact_type: design_note
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p4_4_ci_hardening
status: proposed
created: 2026-08-24
updated: 2026-08-24
last_edited_by: agent_rosetta
tags: [haussmann, p4_4, f_u, deploy, freeze, single_writer, convention_14, adr_050]
---

# F-u — design before writing: the production-alias guard

> F-u's own instruction is *"design the lease before writing it."* Doing so found that **the row asks
> for the wrong instrument.** This note proposes the right one and states plainly what it cannot do.
> **Nothing is implemented.** Implementation belongs to P4.4a, after ratification, with its red-test.

## ⭐ The premise correction: a mutex would not have prevented F-s

F-u is written as a **single-writer lease** — the file-lease pattern from the vault's Governance
Doctrine, ported to an external resource. The row already notes the port is awkward (an alias has no
`updated:` field to check). **The deeper problem is that a lease solves a different problem than the
one that occurred.**

A lease provides **mutual exclusion**: only one deployer at a time. Replay F-s with a perfect lease
held throughout:

1. lemur acquires the lease, deploys its tree, releases. ✅ no contention.
2. This node acquires the lease, deploys `922519c`, releases. ✅ no contention.
3. **v0.4.3 and the Arch `[adna]` repo are un-published anyway — 3 × 404.**

**Serialising the two deploys changes nothing, because they never raced.** They were *sequential* and
still destructive. The harm is not concurrent writes; it is **publishing a tree that does not contain
what is already live**. A mutex cannot see that, because it reasons about *time*, and the defect is
about *content*.

⇒ **The right primitive is an ancestry guard, not a lease.**

## The invariant

> **Never publish a tree that does not contain the commit currently serving the alias.**

Checkable without coordinating with the other machine at all — git knows ancestry, and Vercel knows
what is live. The only missing piece is that **the alias cannot currently say which commit it is.**

## Mechanism, in two parts

### 1. Make the alias self-describing

The deploy already stamps `tree=$(git rev-parse --short HEAD)` — but only into
`site/scripts/deploy_log.txt`, which is **per-checkout**. That is precisely why F-s was invisible: this
node's log ended correctly at the P3.4 record while ten deploys it knew nothing about had landed. *A
log on the machine that deployed is not evidence available to the machine about to deploy.*

Publish the same stamp onto the **artifact**, where any checkout can read it:

```
/.well-known/adna-build.json   →   { "commit": "<full sha>", "deployed_at": "<iso8601>", "mode": "prod" }
```

Written **post-build**, into `.vercel/output/static/`, alongside the existing post-build injectors — the
established pattern in this repo (`inject_headers` · `inject_installer_headers` · `inject_negotiation`),
and it keeps the tree clean so the existing clean-tree guard is unaffected.

⚠ **Implementation hazard, from F-g:** the Vercel adapter copies `dist` → `.vercel/output/static`
*after* `astro:build:done`. The injectors run after `npx astro build` has fully returned, so the copy
has happened by then — but this **must be asserted, not assumed**. F-g exists because a comment in
`astro.config.mjs` describes a mechanism that is not the one actually protecting the output.

### 2. Refuse on non-ancestry, before the deploy

Inserted after the clean-tree guard (`deploy_adna.sh:36`), prod only:

```
LIVE=$(curl -fsS --max-time 15 "$PROD_ALIAS/.well-known/adna-build.json" | jq -r .commit)

case: no stamp / unreachable  → ABORT (fail closed; see bootstrap below)
case: commit unknown to this repo (`git cat-file -e "$LIVE^{commit}"` fails)
                              → ABORT — "the live build was made from a commit this checkout has
                                 never seen. Another checkout is deploying. Reconcile first."
case: `git merge-base --is-ancestor "$LIVE" HEAD` fails
                              → ABORT + list what would be lost: `git log --oneline HEAD..$LIVE`
otherwise                     → proceed
```

## It would have caught F-s in **both** directions

| Event | Live commit | Guard's reading | Outcome |
|---|---|---|---|
| lemur deploys a tree behind on Haussmann work | this node's recent tree | live commit **not an ancestor** of lemur's HEAD | ⛔ **ABORT** — names the six days of surfaces that would be rolled back |
| this node restores `922519c` | lemur's `f4fa9c5` | live commit **unknown to this repo** (`git cat-file -t f4fa9c5` → fatal) | ⛔ **ABORT** — the exact probe the freeze runs by hand today |

The second row is the one that matters most: **the restore fired the same hazard backwards**, and it was
performed under an operator GO by an agent following every existing rule. **No discipline available at
the time could have caught it. This guard catches it mechanically.**

## What it cannot do — stated, not buried

- **It does not lift the freeze.** Release still requires lemur pushing `30c8163` + `f4fa9c5` and one
  deploy from a tree holding both halves. The guard would *enforce* that reconciliation rather than rely
  on both operators remembering it.
- **It only guards the sanctioned path.** A raw `npx vercel deploy --prod` bypasses it entirely. This
  reduces the hazard class; it does not eliminate it. Ten of F-s's deploys came through the CLI.
- **It cannot distinguish an intentional rollback from an accident.** A genuine revert must pass
  `--force-rollback`, which must be loud, recorded in `deploy_log.txt`, and gated on an operator GO —
  otherwise the escape hatch becomes the habit.
- **Bootstrap: the live alias carries no stamp today**, so the first run of this guard aborts by
  construction. The one-time exception must be an explicit, dated, operator-signed flag on a single
  deploy — **not** a "no stamp ⇒ allow" branch, which would make the guard silently vacuous forever
  and is precisely the failure `check_live_headers.mjs` shipped with for four months.

## Red-test obligation (convention 14)

Five instruments have shipped wrong on their first live run in this campaign. This one is not believed
until it fails on demand. Minimum matrix, with controls:

| # | Mutation | Expected |
|---|---|---|
| 1 | stamp names a commit absent from this repo | ABORT, "never seen" branch |
| 2 | stamp names a commit that is a descendant of HEAD | ABORT, lists lost commits |
| 3 | stamp names HEAD exactly | **PASS** (control) |
| 4 | stamp names a true ancestor of HEAD | **PASS** (control) |
| 5 | endpoint 404s | ABORT (bootstrap branch), never silent-allow |
| 6 | endpoint returns malformed JSON | ABORT, not a `null` that compares equal to nothing |
| 7 | `--force-rollback` on mutation 2 | proceeds, **and writes the override into `deploy_log.txt`** |

⚠ **Assert the guard reached the alias** — same defect class as F-f/convention 14. `curl` must use
`-fsS` and the check must fail on a redirect to an SSO page rather than parsing it as an empty stamp.

## Proposed acceptance criterion (for the amendment)

> **AC0 —** `deploy_adna.sh prod` refuses to publish any tree that does not contain the commit currently
> serving `adna.network`; the alias is self-describing via `/.well-known/adna-build.json`; the refusal is
> red-proven against the 7-case matrix above including its two passing controls; and the bootstrap
> exception is a single dated operator-signed act, not a standing branch.

**Note for the record:** F-u's row will be amended to say *ancestry guard*, with the lease framing struck
rather than deleted — the reasoning that a mutex does not address this failure is worth keeping legible.

---
type: artifact
artifact_id: gr_2_o1_redproof
campaign: campaign_haussmann
operation: operation_grande_revue
mission: mission_haussmann_gr_2_ci_freshness
title: "GR-2 O1 — the red-proof, and the two claims of my own it falsified"
created: 2026-08-29
updated: 2026-08-29
status: active
last_edited_by: agent_rosetta
session: session_stanley_20260829_143321_haussmann_gr_2_ci_freshness
tags: [artifact, gr_2, red_proof, v1, f_x, convention_18]
---

# GR-2 O1 — red-proof record `[V1]`

> **Surface (convention 18):** every run below is in `mcr.microsoft.com/playwright:v1.59.1-noble`,
> the pin `gates.yml` uses, on **this Mac via Docker Desktop 28.2.2**. That last clause turns out to
> be load-bearing, and it is the finding.

## 1. ⭐⭐ The planned mutation FAILED TO MUTATE — and that vindicates F1 empirically

O1's design was: drop `visual_regression_container.sh:74`'s
`git config --global --add safe.directory /work`, and watch the build lose its dates.

**It did not.** `[D] 2026-08-29`

```
=== whoami / ownership ===
0
0:0 /work
--- git rev-parse --is-shallow-repository ---
false        exit=0
```

Docker Desktop on macOS **remaps bind-mount ownership to the running user**. Root sees a root-owned
repo; there is no mismatch and git is content. Re-measured under `--user 1001:1001`:

```
uid=1001; mount owner=1001:1001      → stdout=[false] exit=0, stderr empty
```

The mount reports the *caller's* uid whatever the caller is. ⇒ **The local container cannot produce
an ownership mismatch against a bind mount on this host, at any uid.** Not "does not"; **cannot**.

⭐⭐ **F1 predicted that a local reproduction could not close AC-1, and the reason it gave was that
the uid pairs differ. The truth is stronger and simpler: the local surface has no uid pair at all.**
F1 is now **demonstrated rather than argued**, and `AC-1 CLOSES ONLY AT O3`. Had the pass not caught
this, O1 would have been run, would have "reproduced nothing", and the tempting reading — *the
hypothesis is wrong* — would have been as false as the hypothesis being right.

## 2. The ownership mechanism, proven on a filesystem that has one `[D]`

Bind mounts remap; a real directory inside the container does not. A throwaway repo, `chown`ed to
1001, probed as root:

| | stdout | exit | stderr |
|---|---|---|---|
| **MUTATION** — uid mismatch, no `safe.directory` | *(empty)* | **128** | `fatal: detected dubious ownership in repository at '/tmp/r'` |
| **CONTROL** — same, with `safe.directory` | `false` | 0 | *(empty)* |

⇒ the mechanism exists and produces **empty stdout**, and `'' !== 'false'` ⇒ `isShallow` reads
**`true`**. The chain from a refused git to a dateless page is closed.

⚠ **Harness defect caught in my own harness, first run.** The probe originally carried `set -e`, so
the script exited *at the very failure it was measuring* and printed nothing. **The instrument was
broken before its subject was.** Sixth instance this campaign; convention 14 earning its keep again.

## 3. The code path, red-proven at the gate itself, in CI's image `[V1 — the real limb]`

The correct mutation for AC-2's defect is **any** git failure, cause-agnostic — because the defect
*is* that the code cannot tell causes apart. `git` shadowed on `PATH` by a stub that exits 128:

| | build exit | gate-33 result | `dates.length` |
|---|---|---|---|
| **CONTROL** — healthy git | 0 | **4 passed** | — |
| **MUTATION** — failing git | **0** *(silent!)* | **3 passed · 1 failed** at `:78` | **`Received: 0`** |

The mutation's failure text, verbatim:

```
Error: no last-updated dates were rendered — a shallow git clone makes contentSource.ts
omit them; set fetch-depth: 0
```

⇒ **This is CI's signature exactly** — same three passes, same one failure, same assertion, same
`Received: 0`, same message. The mutation reproduces the *observed failure* precisely while
inducing a cause that is **provably not** shallowness. **That is `F-x`(b) demonstrated:** the gate
prescribes `fetch-depth: 0` for a condition that has nothing to do with fetch depth.

⭐ **And note `build exit=0`.** The build succeeded, silently, shipping 121 provenance footers with
no dates in them. Nothing in the build said a word. That silence is AC-2's subject.

## 4. Two claims of my own that this objective falsified

⭐ **(a) My "corroboration in our own tree" was an `[I]` dressed as a `[D]`.** The mission's evidence
point 5 said we wrote `visual_regression_container.sh:74` *"because git fails in this exact image."*
**Not established, and false on this host** — git works fine in that image here without the line.
The line is *defensive and worth keeping* (a Linux host, Colima, or a non-remapping driver would
need it), but it never demonstrated what I said it demonstrated. **Corrected in the mission.**

⭐ **(b) I nearly filed a finding on a difference between two instruments, not in the subject.** A
`grep -rl "<time datetime="` over `dist/` read **146 → 25** under mutation, and I began writing up
*"the message says no dates were rendered when 25 were"* as a second overstatement defect. The gate
reads **146 → 0**, because it counts `<time>` **only inside provenance pages** and my grep counted
the whole tree. **The gate was right and my grep was wider than my conclusion** — convention 16,
caught before it reached the record rather than after. *The finding was in my instrument.*

## 5. Verdict

| Limb | State |
|---|---|
| **V1** — code path red-proven with control, in CI's image, at the gate | ✅ |
| Ownership mechanism demonstrated with control | ✅ |
| CI's *actual* cause | ⛔ **NOT ESTABLISHED — and cannot be from here.** O3 only. |

`AC-1` stays **open**. Everything so far shows a mechanism *sufficient* to produce CI's exact
signature. Nothing yet shows it is CI's.

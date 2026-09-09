---
type: artifact
artifact_id: r3_fixture_owed
title: "R3's fixture — the operator ruling, and the two ways its premise was false"
campaign: campaign_haussmann
created: 2026-09-09
updated: 2026-09-09
status: owed              # ⛩ RULED, NOT BUILT. Deliberately staged rather than executed — see §4.
last_edited_by: agent_rosetta
session: session_stanley_20260909_000837_haussmann_jsonld_census
tags: [artifact, template_release, r3, fixture, pre_push_sanitize, owed]
---

# R3's fixture — ruled, and why the ruling does not execute where the question implied

## §1 · The defect (unchanged, and still real)

`Git.aDNA/how/standard/hooks/test_fixtures/README.md:26` reads:

```
| R3 (filename patterns) | ✅ | dirty/config/.env |
```

`git ls-files | grep test_fixtures/dirty/config` → **0**. The path matches that repo's own
`.gitignore` rule for `.env`, so **no clone can exercise R3**, and the row says otherwise.

⭐ **The asymmetry is the point, and it was Hopper's to keep**: R5 was marked `⏳ deferred` —
*honestly uncovered*. R3 is marked **✅ and is not**. *A row that is honestly empty invites the
question; a row that is wrongly full closes it.*

## §2 · ⛩ The operator ruling (2026-09-09 plan gate)

> **Repair R3 by a path-scoped `.gitignore` negation** —
> `!how/standard/hooks/test_fixtures/dirty/config/.env` — so the fixture is tracked and exercises
> R3's **real filename pattern**.

Chosen over the two alternatives, and the reasoning is worth keeping:

- ⛔ **Renaming the fixture was rejected**, correctly: R3 matches on **filename patterns**, so a
  renamed fixture stops exercising the rule and **reproduces the false-coverage defect under a
  different spelling**.
- **Generating it at self-test time** (mktemp) remains a viable second shape — it avoids the
  ignore-exception entirely — but it is new test code, so it would need its own sitting with a
  red-proof.

## §3 · ⛔ The ruling's premise was false in TWO ways, both measured

Neither invalidates the ruling. Both change **where and how** it executes.

1. **`aDNA.aDNA` has no `test_fixtures` directory at all** `[D] 2026-09-09`.
   The source of record for the hook and its fixtures is **`Git.aDNA/how/standard/hooks/`**;
   `.adna/` holds a **downstream fold** delivered at release time. So *"our fixture set"* is not a
   thing this vault can edit — **Standing Rule 1** forbids touching `.adna/` directly and
   **workspace Rule 10** forbids writing into `Git.aDNA`.

2. **The negation alone would fix nothing.**
   `dirty/config/.env` **exists on disk in NEITHER tree** — not in `Git.aDNA`, not in `.adna/`
   `[D] 2026-09-09` (`ls` on both; the directory itself is absent, not just the file).
   ⚠ **Our own memo to Hopper said it was *"excluded by `.gitignore`, so tracked nowhere"***, which
   implies a file that exists and is merely un-tracked. It was **never authored anywhere**.
   ⇒ the fixture must be **created as well as un-ignored**. The negation is **necessary, not
   sufficient**, and a repair that shipped only the `.gitignore` line would have produced a
   *second* false ✅ — an ignore-exception for a file that still does not exist.

⭐ **How this was found:** by trying to execute the ruling rather than by reviewing it. The question
that produced the ruling asserted a premise ("our fixture set", "excluded by gitignore") that
nobody had measured, and **both halves failed at the first `test -f`**. Same family as this
campaign's *derive-never-inherit*, arriving inside a decision this desk had itself framed.

## §4 · ⛔ Why nothing is built here

Executing this means authoring a fixture, an ignore rule, and an outbound memo — at the **tail** of
a sitting whose work was the `jsonld_census` instrument. **Conventions 15/16/17 each ruled against
exactly that**, five times, and this sitting has already produced **three defects of its own** that
structure caught. A fourth authored at the tail would be the argument for the rule, not against it.

## §5 · What is owed, to whom

| # | Act | Owner | Surface |
|---|---|---|---|
| 1 | **Memo to Hopper** carrying the ruling concretely — *create* `dirty/config/.env` **and** add the path-scoped negation — plus the measured correction that the file is **absent**, not merely ignored | this vault (authored, then ⛩ send GO) | `who/coordination/` |
| 2 | **Release candidate** — the same pair staged for the image, folded at the next template-release gate | this vault | `artifacts/template_release/staged/` |

⛔ **Not owed:** any edit inside `Git.aDNA` or `.adna/`. Their fixture is theirs; our last memo
closed that thread with `ack_required: false`, and this reopens it **only because there is one new
measurement** — that the file does not exist — which our previous memo got wrong.

⚠ **Pin + supersession** (convention 15): this is measured against `Git.aDNA` at
`LAYER_CONTRACT_VERSION=4.3.0`. **Superseded** if their hook version moves — re-measure against
whatever they then have rather than against this.

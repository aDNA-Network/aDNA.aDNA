---
type: artifact
title: "P4.2 O2 — the component token census: all 30, frame derived before the audit"
campaign: campaign_haussmann
mission: mission_haussmann_p4_2_craft_floor
objective: O2
criteria: [AC3, AC6]
created: 2026-08-24
updated: 2026-08-24
status: complete
last_edited_by: agent_rosetta
instrument: site/scripts/component_token_census.mjs
tags: [artifact, haussmann, p4_2, tokens, census, design_system]
---

# The component token census

## Why this is a census and not the sample AC3 asked for

AC3 asked for **"20 sampled components"**. AC6 required the frame be **declared and derived before
sampling** — finding **F-8**: a frame chosen after the fact lets the sample be drawn from components
already known to conform, which is self-certification by selection, the exact failure the census
mechanic exists to retire.

Deriving the frame answered the question differently than the AC assumed. The population is **30** —
28 components + 2 layouts — so AC3's 20 would have covered **67%** of a frame small enough to audit
whole. ⛩ **Operator ruled census, not sample** (2026-08-24). Auditing all 30 costs marginally more
and *removes* the selection question rather than answering it.

**This exceeds AC3's wording.** Recorded as an over-delivery, not as a redefinition — the difference
matters, because a mission that quietly rewrites its criteria to what it happened to do is the thing
this campaign's convention-13 pass exists to catch.

**The frame, derived at run time** (`site/scripts/component_token_census.mjs`, never a hand-list, so a
component added tomorrow is in the frame tomorrow):

```
src/components/**/*.astro  +  src/layouts/**/*.astro   →   30 files
```

## What was measured

The P4.1 token families, each checked **only where a token genuinely exists** as an alternative to
the literal: colour (`--color-*`) · type size (`--text-*`) · radius (`--radius-*`) · shadow
(`--shadow-*`) · font weight (`--font-weight-*`) · spacing (`--space-*`).

Deliberately **not** counted, because a census that cries wolf gets ignored: `0`/`auto`/`%`/`fr`/`ch`/
`em`/viewport units · `calc()`/`clamp()`/`min()`/`max()` · px values ≤ 2 (a 1px border is not a
spacing decision) · comments (stripped first) · `<script>` blocks and frontmatter (`palette.ts`
legitimately mirrors hex for the JS side) · `font:`/`border:` shorthand.

The colour limb **consumes gate-25's allowlist by parsing the gate itself** rather than restating it,
so the census cannot drift from the fence. It throws rather than running if that parse fails — an
allowlist silently read as empty would report every deliberate literal as a defect.

## The finding

⭐ **The only token family with a gate is the only family that had not drifted.**

| Family | Gated? | Findings on first run |
|---|---|---|
| colour | **yes** — gate-25 fails the build | **0** |
| font weight | no | **26**, across **13 of 15** files that set a weight |
| type size | no | 6 (all excluded — see below) |
| shadow | no | 1 (excluded — see below) |
| radius · spacing | no | 0 |

The font-weight tokens were **introduced for exactly these literals**. `tokens.css` says so on its
face — *"Replaces the scattered literal 400/500/600/700 across components with named tokens; same
numeric values, so zero rendered change"* (Storyweave P5 M5.2 / B11). At the time of this census the
migration had reached **2 of 15** files. It was declared, it was correct, and it stopped.

That is the census earning its keep: not a bug, but **a finished-looking migration that had not
finished**, invisible to every gate because nobody had gated it and invisible to review because each
individual `font-weight: 600` looks perfectly ordinary.

## What was done

**26 literals → tokens across 13 files**, a pure textual substitution to tokens carrying identical
numeric values.

⚠ **"Zero rendered change" is proven, not asserted.** An unresolved `var()` invalidates its whole
declaration and the weight silently falls back to `normal` — a failure that looks like nothing.
First attempt at proving it was a **five-selector browser probe, and two of its five probes returned
`null`**: the selectors did not match (a footer heading I guessed at; a breadcrumb on a page that
correctly renders none). The probe's pass condition conflated *element not found* with *weight
collapsed*, so it reported two failures that were its own. Replaced with a **complete static check of
the built CSS**, which is both stronger and simpler:

```
referenced : --font-weight-bold, --font-weight-semibold, --font-weight-medium
defined    : regular=400, medium=500, semibold=600, bold=700
unresolvable references: none          (27 var() uses, all resolvable)
```

Every reference has a definition, so none *can* collapse. Exhaustive beats sampled — the same lesson
O1 recorded when a one-page contrast sweep generalised wrongly to a whole site.

## Declared exclusions — reported, never silently dropped

Deleting an exclusion from the output would make the census unfalsifiable: a reader could not tell an
exclusion from an oversight. Each carries its reason in the instrument itself.

| File | Family | Why it is not a finding |
|---|---|---|
| `NetworkDiagram.astro` | type ×6 | SVG **user units** inside `viewBox` coordinate spaces (640×384 landscape, 340×440 portrait), not layout px. A rem-based `--text-*` token would scale with the root font size while the coordinate space did not, breaking the diagram's proportions at the first browser-zoom change. |
| `GlossaryTooltip.astro` | shadow ×1 | A floating tooltip needs more separation than any card, and **no token matches**: the literal is `0 6px 16px / 0.18`; `--shadow-md` is `0 4px 6px / 0.07`, `--shadow-lg` is `0 10px 15px / 0.1`. Substituting would be a **visible elevation change made to satisfy a lint**. If a `--shadow-overlay` token is ever added, this becomes a finding again. |

⚠ **The NetworkDiagram exclusion exists because the census's first run reported it as a defect.** A
control that fires is a question, not a verdict — asking what else could produce the reading is what
separated six deliberate SVG values from six token violations. Same discipline as P4.1's three
"dark-under-a-light-filename" captures, which were also fine.

## Result

```
component token census — frame 30 (derived)
  conformant (no literal where a token exists): 30/30
  no <style> block at all: 2
  totals by family: none
  declared exclusions: 7 across 2 files, each with a stated reason
```

**Re-run**: `node scripts/component_token_census.mjs` (from `site/`), `--json` for machine output.

## What this census cannot see

Stated so the green is read for what it is:

- **It is advisory, not a gate.** Only colour has a fence that fails a build. Font weight is
  conformant *today* and nothing stops the next component from typing `600` — the drift this census
  found can recommence the moment it stops being run. Converting it to a gate is a real candidate for
  **P4.4**, and is named here rather than assumed.
- **It reads `<style>` blocks, not rendered output.** An inline `style=` attribute or a runtime-set
  weight is invisible to it. (`no-inline-style` is separately at zero as of O1, so the surface for
  that is currently empty.)
- **It measures whether a token *was used*, not whether the *right* token was used.** A component
  using `--font-weight-bold` where the design called for medium is conformant here and wrong on the
  page. That is a human judgment, and it belongs to the P5.1 instrument.

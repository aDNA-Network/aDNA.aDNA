---
type: evidence
title: "F2 closure — WCAG 1.4.10 Reflow, the D11 gate condition's first half, adjudicated CLOSED"
campaign: campaign_haussmann
created: 2026-08-24
status: complete
last_edited_by: agent_rosetta
tags: [haussmann, p4_3, a11y, wcag, reflow, f2, d11]
---

# F2 — formally adjudicated CLOSED (WCAG 1.4.10 Reflow)

> **Why a formal adjudication rather than a status field.** The D11 binary gate is a **CONDITIONAL
> PASS**, and its condition is a *conjunction*: *"adjudicate/fix **F2** (reflow candidate) **+** a real
> manual pass before any phase sign-off claims AA"* (`evidence/scoring/reconciliation.md:47`). F2 was
> fixed at **P1.4** and D11 moved 2 → 3, but nothing ever *adjudicated* it — the fix and the finding
> were never brought together in one citable place, so a later reader had to reassemble the argument
> from a gate file and a mission record. This is that place. The second conjunct is
> [[keyboard_traversal_record]] plus gate-45's AT lane; **neither half discharges the condition alone.**

## The finding, as recorded

**F2 (severity S2)** — *"/network mobile: 'Run a node' content overflows the viewport and is clipped
mid-word."* At 375 px the numbered-step column rendered wider than the screen with no wrap and no
horizontal scroll: body lines cut at the right edge (*"…and your credenti"*, *"Everything stays local
by defa"*), and the step-1 `git clone` block ran off-screen — **the command was unreadable and
uncopyable on mobile**. Theme-independent.
`[D evidence/captures_curated/visual_findings.md:51-55, capture network__mobile-lg__dark.png]`

Reviewer A held D11 at anchor 2 on exactly this: *"automated clean; **manual failures in key
flows**"*. F2 is in a **primary flow** — the run-a-node path is the site's one operational
instruction — which is what made a 1.4.10 candidate binding rather than cosmetic.

## The mechanism, and why gate-9 stayed green through it

The band's `overflow-x: hidden` **clipped** a track (`auto 1fr`) that had inherited the unbreakable
clone-URL min-content width. Nothing *overflowed the document*, so **gate-9 (no horizontal overflow)
was green the entire time the page was unreadable** — the class gate-29 was authored for:

> *"its failure mode is CONTENT SHRINKING or CLIPPING **WITHIN** the viewport"* — `gate-29-reflow.spec.ts:5`

## Re-measured at the object, 2026-08-24 (convention 12 — not read from a status field)

`/network/` at **320 and 375 px**, both themes, against a fresh build:

| Measurement | 320 dark | 375 dark | 320 light | 375 light |
|---|---|---|---|---|
| document horizontal overflow | **0** | **0** | **0** | **0** |
| `.run-step` clipped | **0 / 3** | **0 / 3** | **0 / 3** | **0 / 3** |
| `.run-code` clipped (`scrollWidth` vs `clientWidth`) | **no** (210/210) | **no** (265/265) | **no** (210/210) | **no** (265/265) |
| `.run-code` `overflow-x` | `auto` | `auto` | `auto` | `auto` |
| *"…and your **credentials**"* present in full | ✅ | ✅ | ✅ | ✅ |
| *"Everything stays local by **default**"* present in full | ✅ | ✅ | ✅ | ✅ |

⭐ **The two strings the finding quotes mid-truncation are the load-bearing evidence**, not the
overflow number. A zero overflow is also what a page with the text *deleted* would report; the
sentences being present **and whole** is what distinguishes a fix from a removal.

The `git clone` block is additionally `overflow-x: auto` — so even at a width where it could not fit,
it would **scroll rather than clip**, which is the 1.4.10-conformant treatment rather than a
coincidence of the current string length.

## Standing enforcement

`gate-29-reflow.spec.ts` asserts the F2 clause at both phone widths as **geometry**
(`getBoundingClientRect` / `scrollWidth`), not as a screenshot: `.run-code` may not clip, and no
`.run-step` may extend past the viewport. Red-proven at authoring (2026-08-16). It runs in the
617-assertion suite on every build.

⚠ **What this closure does NOT claim.** gate-29 is **viewport-width** parameterized. It says nothing
about **page zoom or text zoom**, which is a different transform and was uninstrumented until this
objective — see `gate-46-zoom-resize.spec.ts` and the 229 px header defect it found at 200 % text.
1.4.10 and 1.4.4 are separate criteria and F2's closure is scoped to the first.

## Verdict

**F2 is CLOSED.** The defect is fixed, the fix is measured at the object at both widths in both
themes, the two truncated sentences render whole, and a red-proven assertion keeps it that way.

⇒ **The D11 gate condition's first conjunct is discharged.** The second — a real manual pass — is
discharged by [[keyboard_traversal_record]] (keyboard) and gate-45 (AT traversal), with the
operator VoiceOver session ⛩ **owed** and named as owed. **D11's re-score belongs to O3**, against
the stated ceiling of **4** (G-8: anchor 5 also requires testing with assistive-technology *users*,
which an operator VoiceOver session is not).

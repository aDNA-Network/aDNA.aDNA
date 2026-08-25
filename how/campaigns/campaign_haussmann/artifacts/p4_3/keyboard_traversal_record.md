---
type: evidence
title: "Keyboard-only traversal record — the manual pass D11's gate condition asks for"
campaign: campaign_haussmann
created: 2026-08-24
status: complete
last_edited_by: agent_rosetta
tags: [haussmann, p4_3, a11y, wcag, keyboard, ac2, d11]
---

# Keyboard traversal record (AC2, V2)

> **What this discharges.** D11's binary gate is a CONDITIONAL PASS whose condition is *"adjudicate/fix
> F2 **+ a real manual pass**"*. [[f2_closure]] discharges the first conjunct. This is the keyboard
> half of the second; gate-45's AT lane is the screen-reader half; the ⛩ operator VoiceOver session is
> **owed and named as owed** ([[voiceover_session_script]]). ⚠ **No one of the three discharges the
> condition alone**, and D11's re-score is O3's, against the stated ceiling of **4** (G-8).

## Two instruments, deliberately separate

| | What it asks | Where it lives |
|---|---|---|
| **`gate-47`** | Do the **properties** of a tab walk hold? (ring · order · no trap · not obscured) | CI, every build, red-proven 9/9 |
| **`keyboard_flow_probe.mjs`** | Do the **journeys complete** using only a keyboard? | `site/scripts/`, re-runnable, reports — never asserts |

⭐ The split is deliberate: *"every primary flow traversed"* is a claim about journeys **completing**,
not about focus rectangles. A page can have a flawless tab ring and a copy button that does nothing
when you press Enter. Anything the probe finds that should hold forever becomes a gate-47 assertion
rather than a green line in a report nobody re-runs.

## Part 1 — the tab-walk properties (`gate-47`, five surfaces, 1280×900)

60 Tab presses per surface, on home · get-started · reference/specification · vaults · vaults/graph.

| Property (criterion) | Result |
|---|---|
| Focus indicator present on every stop (2.4.7) | **0 ringless stops** |
| No keyboard trap — no consecutive repeat (2.1.2) | **0 traps**; 62–90 distinct stops per surface |
| Tab order follows DOM order (2.4.3) | **0 divergences**; **0 positive `tabindex`** anywhere |
| Focus not obscured by the sticky header (2.4.11) | **0 obscured** |
| Skip link is the FIRST stop and becomes visible (2.4.1) | **5 / 5 surfaces** |
| `Shift+Tab` retraces the forward walk exactly | **PASS** (12-stop reversal, `/`) |

**Coverage, asserted before any of the above is believed:** the walk must reach ≥ 25 distinct stops and
must actually **scroll** (measured on `/`: 72 of 87 steps with `scrollY > 0`, max **6574**). *"Nothing
was obscured"* and *"nothing ever scrolled far enough to be obscured"* are the same green, and only the
scroll floor separates them.

### ⚠ The honest qualifier on 2.4.11

Red-proving found that a **340 px** sticky header does **not** turn the obscured assertion red, even
though the mutation applied (measured: header rect 340 px). Chromium's focus scroll uses nearest-edge
alignment — tabbing **down** parks each element near the **bottom** of the viewport, so a moderately
tall sticky header never covers it. The assertion goes red at **820 px**.

⇒ **This site's clean 2.4.11 result rests partly on browser scroll behaviour, not only on its own
layout.** Said here rather than claimed as a design property the site earned. The related real gap —
no `scroll-padding-top` anywhere in `src/`, which P4.2's census found for **in-page anchors** — is
untouched by this result and remains open: anchors and focus reach their targets by different
mechanisms.

## Part 2 — the six primary flows, keyboard only

`node scripts/keyboard_flow_probe.mjs <base>` — **16 steps · 14 PASS · 1 NOTE · 0 FAIL**, plus one
ABSENT observation.

| Flow | Step | Result |
|---|---|---|
| **A** bypass | first Tab focuses the skip link | ✅ `a.skip-link "Skip to main content"` |
| **A** bypass | Enter moves focus past the nav | ✅ `#main-content`, focus lands on `main` |
| **B** header disclosure | does the "More" disclosure render? | ⚠ **ABSENT** — see below |
| **C** theme | toggle reachable by Tab | ✅ 12 presses |
| **C** theme | Enter flips the theme | ✅ `"dark"` → `""` |
| **C** theme | focus retained after activation | ✅ (the user keeps their place) |
| **D** registry | search field reachable | ✅ 19 presses |
| **D** registry | typing changes the result count | ✅ `"74 vaults"` → `"0 of 74 vaults — nothing matched"` |
| **D** registry | zero-state stated in **words**, not just a number | ✅ |
| **D** registry | a filter chip reachable from the search field | ✅ 2 presses → `"in use 7"` |
| **D** registry | Enter on the chip changes the set | ✅ `"74 vaults"` → `"7 of 74 vaults"` |
| **E** install | copy button reachable | ✅ 16 presses |
| **E** install | activation changes the accessible name | ✅ `"Copy code"` → `"Copied!"` |
| **E** install | the confirmation is **announced by a live region** | ⚠ **NOTE** — see below |
| **F** graph twin | a graph node is reachable | ✅ 19 presses → `"RareHarness"` |
| **F** graph twin | Enter follows it to the vault page | ✅ `/vaults/harness/` |

### ⚠ NOTE — the copy confirmation is an `aria-label` swap, not a live region

`CodeBlock`'s handler sets `aria-label` to `"Copied!"` for 2 s on the **focused** button. Screen
readers announce a name change on an already-focused element **inconsistently** — some re-announce,
some say nothing — so the confirmation may simply not arrive. There is no `aria-live` near the code
block. Two consequences, both narrow and both true:

1. This is exactly the class AC7 settled for the registry — *is the announcement **useful**, or merely
   **present*** — and it is **a question for a human ear**, which is why it is an ⛩ **O2 listening
   item** rather than a fix authored blind here.
2. The swap runs **after** `await navigator.clipboard.writeText(...)`. If that promise **rejects**
   (denied permission, insecure context) the `setAttribute` never runs and there is **no feedback at
   all** — not even the inconsistent kind.

⚠ **Not asserted as a WCAG failure.** SC 4.1.3 (Status Messages, AA) governs status messages that are
*provided*; the accessible-name swap is a real mechanism, just a fragile one. Calling it a violation
would be the claim-inflation this campaign exists to retire.

### ⚠ ABSENT — the header "More" disclosure does not render

The first run of flow B reported *"not reachable in 80 presses"*. **It is not a keyboard defect: the
control does not exist in the build.** `Header.astro:38` emits `<details class="nav-more">` only when a
`topNav` entry has `children`, and `navigation.ts:76-84` holds **seven flat entries, none with
children** `[D]` — so `moreEntry` is `undefined` and the branch never runs. `grep -c nav-more
dist/index.html` → **0**.

What is actually true, measured:

- The header ships **7 nav links** + CTA + GitHub + theme toggle. Not *"7 links + a compact More
  disclosure"*, which is what `Header.astro:211` says.
- **~60 lines of `.nav-more*` CSS** ship for a control that is never built.
- ⭐ **Nothing is stranded.** The sections the disclosure was meant to surface — `/glossary`, `/how` —
  are in the **footer of every page** `[D]`. `/reference` is in the header as *"Standard"*.

⇒ **Not an accessibility finding.** It is a **claim-truth defect in source comments** (the campaign's
own class: a comment describing a mechanism the build does not ship) plus dead CSS. **Routed, not
fixed here** — P4.3's scope is the manual accessibility pass, and a nav change at the tail of it would
be exactly the unforced widening the freeze sweep just finished cleaning up.

## ⚠ Six instrument defects, all mine, all before the subject

The pattern this campaign keeps logging, and every one was caught by its own output rather than by
vigilance:

1. `addInitScript` never applied the 200 % root font-size — an entire probe run reported *"no
   overflow"* for **15 routes it had never resized**.
2. A clip predicate flagged deliberate `text-overflow: ellipsis` — all 39 of `/vaults`'s "clips".
3. The same predicate flagged the **sr-only keyboard twins** (`nav.hero-graph-nodelist`,
   `nav.graph-node-list`) as clipping containers — *the machine_eye 14 twins, reported as a defect by
   the instrument built to protect them.*
4. An obscured predicate counted the header's **own children** — 11 per route, every route.
5. The skip-link check read the rect **mid-transition** (`top=-56`) and failed on `/` alone while
   passing on four surfaces; its **first fix was also wrong** (it broke on two equal frames during a
   slow homepage paint).
6. Flow E compared `textContent` on an **icon-only button** — `"" → ""` could never move — and flow D
   looked for a `.chip-group` this site does not use, then landed on the **already-active** chip and
   read correct behaviour as a defect.

⭐ **And one red-test mutation failed to go red because it was aimed at the wrong assertion, not at a
weak gate**: hijacking tab order with `tabindex="3"` cannot fail the *reverse-walk* test, which asserts
Shift+Tab **retraces** — and a reordered-but-consistent order retraces perfectly. Reordering belongs to
the traversal test. The mutation is now a real one-way trap. **Naming which of the two a non-red is, is
the point of running the harness at all.**

## Verdict

**AC2's keyboard half is MET.** Five surfaces and six primary flows traverse and complete on the
keyboard alone, with zero traps, zero missing focus indicators, zero order divergences and zero
obscured stops — and the negative claims carry the coverage floors that make them mean something.

⛩ **Owed, and named as owed:** the operator VoiceOver session (AC2's other half). **NVDA is out of
scope by design** — D11 check 5 asks for VoiceOver **and** NVDA, NVDA is Windows-only, this is an L1
macOS node, and check 5 is therefore recorded **PARTIALLY MET BY DESIGN**, never silently passed.

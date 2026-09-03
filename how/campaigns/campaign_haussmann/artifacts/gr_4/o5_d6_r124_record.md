---
type: artifact
artifact_id: gr_4_o5_d6_r124_record
campaign: campaign_haussmann
mission: mission_haussmann_gr_4_story_coverage
title: "GR-4 O5 — D6's absence, and R-124's minimal posture: the record"
created: 2026-09-03
updated: 2026-09-03
status: active
last_edited_by: agent_rosetta
session: session_stanley_20260903_021003_haussmann_gr_4_o5
tags: [artifact, haussmann, gr_4, o5, d6, r_124, privacy, embargo, absence_assertion]
---

# GR-4 O5 — the record

`AC-6` (D6 · movement 3) · `AC-8` (R-124) · `AC-7` at mission level · limbs `V6`, `V7`, and `V3`'s
owed half. Register: [[claim_register]] **§20**.

## 1. What shipped

| | |
|---|---|
| **AC-8** | `/privacy` gains `<h2 id="regulated-data">` — *"If you work with regulated data"* — placed after `#your-vault`, before `#links-out`. **892 chars**, two paragraphs, six registered claims (`R-165`…`R-170`). |
| **AC-6** | **Nothing.** That is the criterion. Its evidence is §3 below. |
| **Gate** | `gate-54` **G54t · G54u** (AC-6) and **G54v · G54w · G54x** (AC-8). |
| **Red-test** | `doctrine_layer_redtest.sh` cases **21–25** + control 26. |

⛩ **Form ruled at the open (SO#1)** — the signature fixes the surface and states in terms that
*"AC-8's exact wording is not pre-approved."* Ruled: **a new `<h2>` with its own anchor**, matching
the page's seven-sibling idiom. Not a clause folded into `#your-vault` (whose subject is *your
vault*, not *your obligations* — which reproduces R-124's own routing defect) and not a Callout
(neither policy page carries one).

## 2. Derived, each by its own command `[D]`

| Measure | Before | After | Command |
|---|---|---|---|
| chromium lane | 679 | **684** | `npx playwright test --project=chromium --list` |
| …of which `gate-54` | 19 | **24** | `--list` with and without the spec: `684 − 660 = 24` ⇒ **+5, removed nothing** |
| all-projects | 705 | **710** | `npx playwright test --list` |
| **snapshot** | 26 | **26 — UNCHANGED** | `npx playwright test --project=snapshot --list` |
| suite run | — | **683 passed · 1 skipped · 0 failed** | `npm run test:gates` |
| `check:markup` | — | **0**, exit 0 | control: a deliberately invalid file exits **1** with 5 errors ⇒ the zero is not vacuous |
| red-test | 22 | **27 pass / 0 fail** | every case red at **exactly** its declared assertion set |
| `gitleaks` | — | **1025 commits, no leaks** | |
| **`/privacy` prose FKGL** | **9.43** | **9.98** (target 12) | `node site/scripts/reading_census.mjs`, from the repo root |

⭐ **The snapshot lane not moving was PREDICTED and then MEASURED, not assumed from O2's and O4's
shape.** `/privacy` is **not** among `gate-49`'s 12 `TEMPLATES`; the `policy` baseline is captured at
**`/security/`** (`gate-49:57`), and the `.policy` styles are **Astro-scoped per page** — the file's
own comment says *"deliberate parallel, not a shared component; Astro scopes both."* ⇒ no
re-baseline fires. **Third consecutive objective costed after reading the template list**, which is
SO#11's O2 retrospective spent forward rather than re-learned.

### ⭐⭐ V3's owed half, and the first limb in this mission that could have bitten

`/privacy` **9.43 → 9.98** against a target of **12**; headroom **2.57 → 2.02**. **HAZARD-2
honoured** — the before was **re-derived on this instrument** (revert → build → census → restore →
build) rather than quoted from O2's banked figure, and **it reproduced EXACTLY at 9.43**, which is
what makes the after legible as a real move rather than instrument drift (O3's control).

⚠⚠ **And the direction is new.** Every prior constraint limb in this mission moved in the
**reassuring** direction or not at all:

| Criterion | Before → after | Direction |
|---|---|---|
| AC-4 (`/commons`) | 8.61 → 8.30 | **improved** — `DEFECT-1` measured |
| AC-3 (`/network`) | 11.56 → 8.89 | **improved**, at ~8.6× AC-4's magnitude |
| AC-5 (`/`) | 9.96 → 9.96 | held exactly |
| **AC-8 (`/privacy`)** | **9.43 → 9.98** | ⭐ **rose — the first that moves toward its own bar** |

⇒ **for the first time in Lane D the census limb was capable of failing.** ⛔ Said at its exact
width, because this is precisely where a good result gets overclaimed: **2.02 of headroom is still
large.** *"Moves in the falsifying direction"* is not *"came close"*. The limb is still context;
`G54w` and `G54x` are what make AC-8 falsifiable.

## 3. AC-6 / V6 — the dated absence assertion

**Surfaces named** (convention 17): the rendered **`.md` twins** under `dist/` — AC-6's verb is *a
reader encounters* — **excluding** `changelog.md` (documents the retirement) and
`get-started/what-your-agent-reads/**` (byte-vendored `.adna`). Both exclusions are **asserted** by
`G54t`, not assumed, and their arithmetic is pinned.

**Vocabulary — three claims that ACTUALLY SHIPPED and were retired**, never a pattern invented at a
mission's tail: `R-14`'s *"open coordination protocol"* · `P1-2`'s *"federating on the Lattice
Protocol"* (fixed at GR-1, `311b3c3`) · `R-125`'s *"built on the Lattice Protocol"*.

**Measured `[D]`, on the built tree:** all three at **0** across every non-excluded twin ·
GR-4's own diff (`7210d5e..HEAD -- site/src/`, 5 files) adds **0** lines of protocol/horizon
vocabulary · the control holds — `exchange-adoption-path.md` is the only non-excluded twin
mentioning the protocol, so the zero is about the site and not the probe.

⭐ **`changelog.md`'s exclusion is not precautionary — it is catching something today**:
`dist/changelog.md` carries *"built on the Lattice Protocol"*, **the only rendered occurrence of that
string on the site**, in the entry whose subject is its removal. Delete the exclusion and the gate
reds on a clean tree for a non-defect — convention 17 in one file. ⚠ Stated precisely because the
**other two** strings are caught by neither exclusion: describing a mask that currently swallows
nothing as *"load-bearing"* is the overclaim this campaign keeps finding.

**Full findings — the label that resolves to nothing, the two live horizon passages, `F-w`'s second
lens, and the correction of the correction — are at [[claim_register]] §20.2 and §20.3.** They are
recorded there rather than duplicated here, because §20 is what a later mission cites.

## 4. What this objective did NOT do

- ⛔ **No deploy.** Lane D is met on-build. Prod serves `a852423`, re-probed at the open.
- ⛔ **`R-124` does not move.** ⛩ Ruling 1's condition is that the row moves when the section is
  **live**, not when it is written. Discharge condition recorded at §20.4.
- ⛔ **`gate-23`'s homepage-only scope is NAMED, not widened.** Its guard on R-14's gloss reads
  *"has returned to the homepage"* (`:82`), so its green is a true statement about `/` alone.
  `G54u` is site-wide and covers the gap for D6's purposes; **re-scoping gate-23 is R-14's business,
  not AC-6's**, and unforced widening at a mission's tail is this campaign's most-repeated defect.
- ⛔ **`F-w` is cited, not discharged.** Its destination is the next `skill_template_release`.
- ⛔ **`F-aa` untouched** (a `what/glossary/` governance edit) · **`R-97` untouched** (ratified copy
  needs its own gate).

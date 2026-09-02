---
type: evidence
title: "GR-4 O3 — D3 on /network: the ladder that was a homonym, and the word the registry does not publish"
campaign: campaign_haussmann
mission: mission_haussmann_gr_4_story_coverage
objective: O3
criteria: [AC-3, AC-7]
limbs: [V2]
created: 2026-09-02
updated: 2026-09-02
status: complete
last_edited_by: agent_rosetta
tags: [evidence, haussmann, gr_4, o3, d3, local_models, network, gate_54, homonym]
---

# O3 — D3 lands on `/network`

**`AC-3` ✅ · `AC-7` ◐ PARTIAL (mission-level, per the O2 correction at `526faa9`) · `V2` ✅.**

The *planned*-framed local-models section ships as **Band 4b, "Running a model on your own
machine"**, placed after *"Run a node"* because it continues that band's subject: what runs on your
machine.

---

## 1. ⛩ RULING 2 WAS RE-RULED, BECAUSE ITS DESTINATION DID NOT EXIST

Signed **AC-3** reads: *"ships WHERE THE L0-L3 LADDER ACTUALLY LIVES (⛩ RULING 2, branch (i)),
**NOT on `/network`**, whose ratified home-claim measured FALSE."*

⛩ **Re-ruled by the operator onto `/network`, on corrected reasoning** — confirmed at this
session, and performed at AC-3 itself (strike-not-delete) in the same commit as the build, so the
criterion and the artifact are never left disagreeing (convention 7 / ADR-057).

**The destination failed for TWO independent reasons, and only the first was known at the open.**
Both re-verified at the object this session `[D]`:

| # | The recon's premise | Measured | |
|---|---|---|---|
| 1 | *"the L0–L3 ladder lives in `agentic-literacy.mdx`"* | `agentic-literacy.mdx:12-14` renders **`L0 Aware → L1 User → L2 Builder → L3 Architect`** — a **human-literacy** ladder | ⛔ **HOMONYM** |
| 2 | (unstated — that a compute-ladder home exists at all) | The **compute** ladder (`L0` this workspace … `L2+` regional/cloud) appears site-wide **only** at `src/data/tour/workspace-router.txt:133-137` — a **byte-vendored** tour artifact | ⛔ **UNREACHABLE** |

⭐⭐ **The recon matched four labels and inferred a subject.** `L0`–`L3` name two different ladders
in this vault — one about *how much compute a node has*, one about *how much agentic fluency a
person has* — and the branch-(i) ruling was taken against the wrong one.
⇒ ***a shared notation is not a shared referent, and a grep for the notation cannot tell you which
one it found.*** This is convention 17's amendment one level up: there, the *surface* had to match
the claim's verb; here, the **term** has to match the claim's subject, and a label that matches
exactly is the hardest kind of wrong answer to notice.

⭐ **And reason 2 is D1's trap class recurring — third sighting in GR-4.** The compute ladder's only
site-wide home is a **vendored** file, so branch (i) executed literally would have routed new
authored copy into `src/data/tour/`, which Standing Rule 1 forbids and which would trade a copy
defect for a **trust defect on the one surface built to be checked** (`F-w`'s reasoning, third row).
**The exclusion AC-1 made load-bearing at O1 is what made branch (i) unperformable at O3.**

⇒ **`/network` is the correct home on corrected reasoning.** It owns the *aDNA-computer* /
local-vs-federated subject (Standing Rule 4), which is exactly what *"run a model on your own
machine"* continues. ⚠ **The revue's sentence stays FALSE** — `/network` does **not** own the L0–L3
story, and still carries **0** L0–L3 and **0** compute-tier `[D]`. **Its conclusion survives its
reasoning**, and that distinction is the record.

---

## 2. ⭐⭐ THE FINDING: THE COPY NAMED A WORD THE REGISTRY DOES NOT PUBLISH

**Caught by the AC-7 register pass, before it shipped** — the second time in this mission a claim
was stopped at enumeration rather than at review (O1 stopped the tier-ordering contradiction the
same way).

The drafted sentence read: *"the registry marks both of them **genesis** — a name, an owner, and no
code behind it yet."*

Measured `[D]`:

| Surface | Says | |
|---|---|---|
| `src/data/vaults.json` — raw field | `status: "genesis"` for both `inference` and `llamacppforge` | ✅ true |
| `dist/vaults/inference/index.html` — **the page the sentence links to** | **`Stage: planned` (self-declared)**; literal `genesis` × **0**, literal `planned` × **1** | ⛔ **false** |
| `dist/vaults/llamacppforge/index.html` | identical | ⛔ **false** |

⇒ **The site's public face RENDERS `genesis` as `planned`.** A reader who follows the link to check
the claim finds the word they were told to expect **nowhere on the page**, and a different word in
its place. The claim's verb is *"the registry lists"*, and a reader settles that **at the rendered
card** — so the surface that decides it is the card, not the source field. **Convention 17's
amendment, arriving in a vocabulary rather than in a grep.**

⭐ **It would have passed every limb.** `G54m`'s marker list contained `'genesis'`, so the framing
assertion was **green on the source's own word** while the copy misdirected the reader — *a marker
naming the SOURCE field certifies the copy against the thing the copy is wrong about.*

**Corrected same-diff across three files**: the copy (`planned`, with the reason written into the
band's comment so a later editor does not "correct" it back), `G54m`'s `PLANNED_MARKERS`
(`'genesis'` → `'both of them as planned'`), and red-test **case 14**'s mutation. The site's own
tooltip — *"A named place in the network with a governance skeleton and little else"* — is what the
gloss *"a name, an owner, and no code behind it yet"* restates, so R-157 is grounded on the page.

⚠ **Width stated (convention 16), and the first figure written here was TYPED.** `genesis` is
**not** absent from the site. Re-derived on the final tree with a word boundary and `Regenesis`
excluded `[D]`: **25 built files carry it, 20 of them reader-facing (`.html`/`.md`)** — including
`/vaults/`, `/state-of-the-network` and several vault descriptions. *(A naive `grep -rli genesis`
reads **30** and is wrong in a way that looks thorough: `Regenesis` contains the substring, and it is
a live vault.)* ⇒ the claim is narrower and exact: **the two cards this sentence links to do not
carry it, and the stage-badge vocabulary a reader meets is `planned`.**
✅ **And the correction is complete on the surface**: `dist/network.md` and `dist/network/index.html`
now carry the literal `genesis` **0** times `[D]`.

---

## 3. ⭐⭐ AND THE NEW BAND PUT A PRE-EXISTING OVER-PROMISE INTO DIRECT CONTRADICTION

`network.astro:155` carried, in the *"Run a node"* band, the bullet:

> *"Local-first — **nothing leaves until you choose**"*

The new band sits **40 lines below it** and says, in the page's own voice, *"Your prompts do not
[stay]."* ⇒ **a reader meets both without looking for either.**

⭐⭐ **This is `R-64`'s class on a SECOND SURFACE, and R-64's own remedy was written at P0.5.** That
row has read since P0.5: *"for the newcomer the sentence over-promises; scope it to 'aDNA itself
sends nothing'"* — and **GR-1 discharged it on `/get-started` ONLY**. Measured `[D]`, the identical
unqualified claim is still live on **two** further surfaces:

| Surface | Claim | Disposition here |
|---|---|---|
| `network.astro:155` | *"nothing leaves until you choose"* | ✅ **SCOPED** → *"your vault files never leave until you choose"* (**R-161**) |
| `index.md:14` (homepage hero) | *"no server, no signup, nothing leaves your machine"* | ⛔ **NAMED, NOT TOUCHED** — this is **R-97**, `verified (ADR-048 verbatim)`, ratified copy; it needs its own gate |
| `network.md:38` | *"its **vaults, their full history, the machine's inventory, and its credentials** never leave"* | ✅ **already correct** — scoped by enumeration, and the new copy deliberately echoes that same enumeration |

⛔ **The scoping is a FORCED repair, not a sweep, and the distinction is the discipline.** The test
applied: *is the sentence merely pre-existing, or did this increment make it worse?* The homepage's
is pre-existing and untouched by O3 ⇒ **named**. `/network`'s was put into direct tension **by the
band O3 just landed above it**, on the same page, in the same file this objective was already
editing ⇒ shipping it would be shipping a self-contradiction. It is **unpinned** — no register row,
no `gate-26` fixture, no gate quote `[D]` — so the edit costs no same-diff churn, and it moves a
claim **DOWN** (convention 1).

⇒ ***a caveat in the register is a finding with a home and no gate*** — R-64's own lesson, and the
proof it still binds is that its remedy was applied to one of three surfaces and nothing noticed for
five days.

---

## 4. Measurements — every figure by its own command

### 4.1 Section thickness (`doctrine_layer_measure.mjs`, twin surface)

| | Value | |
|---|---|---|
| shared pinned floor (lowest comparator across **all** graded pages) | **217** | `G54f` |
| `/network`'s **own** thinnest sibling band | **547** | `G54k` |
| graded *"Running a model on your own machine"* | **768** (prose 768 · elements 2) | ✅ clears both |
| `/network` comparators | 5 | |

⭐ **`G54k` exists because adding a third page falsified `G54f`'s own message.** `G54f` described its
floor as *"derived from that page's own sibling sections"* — true while two pages shared a pin of
217 taken from the thinner of them, **false for `/network`, whose own bands floor at 547**. A
250-char section there clears 217 while being under half the thinnest band a reader already meets.
The shared pin stays deliberately conservative; `G54k` adds back the strictness the message was
already claiming. **Corrected same-diff in the commit that made it false.**

### 4.2 Reading level (`reading_census.mjs`, from the repo root, **same instrument both ends**)

| | prose FKGL | target | |
|---|---|---|---|
| `/network` **before** | **11.56** | 12 | headroom **0.44** |
| `/network` **after** | **8.89** | 12 | headroom **3.11** |

**Δ = −2.67**, ~**6×** the headroom the constraint was supposedly protecting, and ~**8.6×** O2's
0.31 move on `/commons`. Corpus: **1 of 21 over target** — `/reference/specification` at 12.69,
**pre-existing and untouched**.

⛔ **HAZARD-2 honoured**: the *before* was taken by reverting `network.astro`, rebuilding, measuring,
restoring and rebuilding — **both ends on the same instrument**. A *before* from production against
an *after* from `dist/` would be **two instruments sharing one number** (B2a's finding).

⚠⚠ **AND THE PAIR FIRST WRITTEN INTO THE GATE HEADER WAS WRONG.** It read `11.56 → 8.93 / Δ 2.63`;
re-derived at this close it is `11.56 → **8.89** / Δ **2.67**`, because the genesis→planned
correction moved the prose after the figure was taken. **Corrected in the commit that quotes it** —
this campaign's own rule, applied to its own comment. ⭐ The *before* re-derived **exactly**, which
is what makes the *after* being wrong legible as a real drift rather than noise.

⚠⚠ **AC-3 CARRIES NO READING-LEVEL CONSTRAINT — the census here is CONTEXT, NOT THE CRITERION**, and
saying so is the point. **Ship nothing and `/network` reads 11.56 and the census still passes.** So
D3 reproduces `AC-4`'s DEFECT-1 at ~8.6× the magnitude: a number that moves in the reassuring
direction whether or not the work landed. **What makes AC-3 falsifiable is `G54e`/`G54f`/`G54k`
(the section exists and is not a mention) and `G54l`/`G54m`/`G54n` (it is framed as planned and
claims no availability).** The constraint limb is real and it is not the proof.

### 4.3 Suite — each count by its own command `[D]`

| Lane | Command | Before | After |
|---|---|---|---|
| chromium | `--project=chromium --list` | 670 | **674** |
| gate-54's own file | `--list <spec>` | 10 | **14** |
| all-projects | `--list` | 696 | **700** |
| snapshot | `--project=snapshot --list` | 26 | **26** |

**Delta isolated**: chromium **without** `gate-54` = **660**; `674 − 660 = 14` = the file's own total
⇒ **+4, removed nothing.** Run: **673 passed · 1 skipped · 0 failed.**
`npm run check:markup` → **0**, **control-checked** against a deliberately invalid file that produced
exactly 1 error, so the zero is not vacuous.

⭐ **`snapshot` UNCHANGED AT 26, AND THAT WAS MEASURED, NOT ASSUMED FROM O2's SHAPE.**
`/network` is **not** among `gate-49`'s 12 `TEMPLATES` — read off the list, which is pinned by
`TEMPLATE_FLOOR = 12` `[D]`. ⇒ **no re-baseline fires**, which is why O3's cost is a fraction of
O2's. **O2's dominant cost came from a FIXTURE attached to the route, not from its criteria** — the
SO#11 lesson O2's own AAR filed, and checking the template list before costing O3 is that lesson
spent forward.

### 4.4 Red-test — `doctrine_layer_redtest.sh`, **17 pass / 0 fail**

**Every case red at EXACTLY its declared assertion set.** A red via the wrong assertion reports as a
**HARNESS BUG**, never a pass (GR-3's attribution clause).

| Case | Mutation | Declared red set | |
|---|---|---|---|
| control 0 | clean tree | — | ✓ green |
| 12 | D3 section thinned **between** the two floors | `G54k` | ✓ |
| 13 | D3 probe no longer reaches its own subject (**body only, never the heading**) | `G54l` | ✓ |
| 14 | planned markers smoothed away, **every fact intact** | `G54m` | ✓ |
| 15 | **one availability sentence ADDED beside intact hedges** | `G54n` | ✓ |
| control 16 | tree restored | — | ✓ green |

*(Cases 1–11 are O1's and O2's, re-run unchanged; case 7's declared set grew to `G54f G54k`
same-diff when `G54k` landed.)*

⭐⭐ **`G54n` IS THE LOAD-BEARING LIMB, AND CASE 15 IS WHY.** Planned framing does not fail by going
missing — **a future editor does not delete *"not built"*, they add *"you can run"* beside it.**
Case 15 removes nothing, adds one sentence, and **`G54m` stays green while `G54n` reds**: the copy
still *looks* careful and has acquired a promise. That is **`V7`'s lesson borrowed one criterion
sideways**, exercised at O3 before AC-8's own `/privacy` section exists to teach it at O5.

⭐ **Case 12 had to be MEASURED, not eyeballed.** Its replacement must land strictly **between 217
and 547** — above the shared pin so `G54f` stays green, below `/network`'s own floor so `G54k` reds
**alone**. Its first draft, written by feel at ~205 chars, **red both floors and isolated nothing**.
*A mutation aimed between two thresholds is a measurement, not a sentence* (B0's rule, in a
red-test case).

⚠ **A harness defect fixed in passing, and it had already fired.** `applied()` returned on a
HARNESS BUG **without restoring the tree**, so the `&& check_case` chain short-circuited past the
case's only `restore_all` and **the mutated tree survived into every case after it** — one stale
grep pattern produced **four false HARNESS BUGs and a red final control**, each failing for a reason
belonging to its predecessor. ⇒ ***a case that cannot apply must fail ALONE.***

---

## 5. What is NOT claimed

- ⛔ **Nothing is deployed and nothing is owed to production.** Lane D is met **on-build**, as every
  GR mission before it. Prod serves `a852423`, re-probed at the session open.
- ⛔ **No push.** A push is its own ⛩ GO. ⚠ **Convention 19's green has a WIDTH**: `main` is green at
  **`7210d5e`**, the last **pushed** commit — **GR-4's commits have never been through CI**, and this
  one has not either.
- ⛔ **`/network` still does not own the L0–L3 story**, and O3 did not give it one. The compute
  ladder remains reachable only through the vendored tour file. **D3 is the local-models story, not
  the ladder story**, and the revue conflated them.
- ⛔ **`R-97` (the homepage's unqualified NOT-line) is NAMED, NOT FIXED** — §3.
- ⚠ **The two linked vault cards are `planned` at their own self-declaration.** The site marks them
  `self-declared`, and this copy inherits that provenance rather than upgrading it.

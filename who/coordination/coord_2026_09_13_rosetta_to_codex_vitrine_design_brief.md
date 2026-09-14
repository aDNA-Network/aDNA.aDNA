---
type: coordination
coord_id: coord_2026_09_13_rosetta_to_codex_vitrine_design_brief
title: "Operation Vitrine — design brief for the Codex planning agent: what the site is, what it may claim, and the four gates that will refuse you"
created: 2026-09-13
updated: 2026-09-14
status: ready_for_handoff
from: rosetta (aDNA.aDNA — the standard's own dev vault)
to: codex planning agent (Operation Vitrine side-campaign)
delivery: "Not a vault-to-vault memo. Delivery = handing this path to the Codex planning agent at session open. No inbox, no drop-box, no ack protocol."
relates: [campaign_vitrine, campaign_haussmann, mission_haussmann_gr_7_vitrine_integration, doctrine_site_voice, claim_register]
ack_required: false
last_edited_by: agent_rosetta
tags: [coordination, codex, vitrine, design, site, launch_readiness, claim_register, embargo]
---

# Operation Vitrine — the design brief

**You are planning a side-campaign to raise `adna.network` to public-launch presentation quality**: sharper
design, tighter writing, and a clearer account of what aDNA and the aDNA network actually are. This memo is
written for an agent that has **never read this vault**. It is long because the expensive mistakes here are
not obvious ones, and every one of them has already been made once by this desk and written down.

⚠ **Every figure below carries its basis and its date.** This vault's house rule is *derive, never type* —
so **re-derive anything you are about to act on** rather than quoting this memo forward. Where a figure can
go stale, its supersession condition is stated on its face.

---

## 0 · The one paragraph, if you read nothing else

The site is **229 pages**, gated by a **698-assertion suite**, axe-clean in both themes, and its whole
product thesis is *context you can trust*. Its measured weak point is **not polish — it is credibility**.
The single most valuable thing you can do is make the honest story **land harder**, not make the claims
bigger. On this site, **overclaiming is a design failure**, because a page selling trustworthy knowledge
graphs that overstates its own ledger refutes itself above the fold.

---

## 1 · Where the site actually stands — and the number you must NOT quote

| | |
|---|---|
| Pages built | **229** (`npx astro build` reports it; `dist/**/*.html` reads 230 — the extra is `404.html`) |
| Rendered markdown twins | **226** — every page has a machine-readable twin at `<route>.md` |
| Gate suite | **698 passed / 1 skipped / 0 failed** (chromium lane) |
| Accessibility | **axe 0 violations**, both themes, multiple viewports |
| Claim register | **188 ids** (`R-11`…`R-184`) — the arbiter for every factual claim on the site |

⛔ **Do not describe the site as "51.6 / 100."** That is the **genesis baseline of 2026-08-16**, before this
campaign did any work, and it is the most-quoted stale number in this vault.

**The most recent re-score** (`evidence/scoring/reconciliation_p2_6.md`, ~2026-08-19, 11 dimensions with D3
withheld): **63.2 / 100 normalized**, against the same 11 dimensions recomputed at baseline = **50.5** ⇒
**+12.7**. ⚠ **And even that is stale**: it predates all of P3–P5 and the entire six-mission Grande Revue.

⇒ ***No current full composite exists. The full 12-dimension re-score is `P5.2`'s job and has not run.***
If you publish a score, publish it as **new**, with its date, its instrument version and its breakdown —
never as a delta against a number measured by a different instrument on a different site.

⚠ **The instrument moved too.** The review instrument is now **v1.1** (`GR-6`, 2026-09-07 — added rung-1
anchors to all twelve ladders, a conjunctive-bundle split rule, and a between-rungs tie-break). **51.6 and
63.2 were both scored under v1.0.** Any comparison across that line **crosses an instrument boundary and is
not pure site movement.** `GR-6` had to make that split after the fact and recorded that stating it in
advance is the only cheap moment. This is that moment.

---

## 2 · Where the points actually are

The instrument is `how/campaigns/campaign_haussmann/directives/OPERATION_VITRUVIUS_review_instrument.md`
(D1–D12, weighted to 100 for the **B×E hybrid** archetype). **Headroom** below = `(5 − score)/5 × weight`,
computed from the P2.6 reconciled scores — *my arithmetic, stated so you can check it*, and **void the
moment `P5.2` re-scores**.

| Dimension | Weight | P2.6 score | Headroom |
|---|---|---|---|
| **D7 Proof & credibility** | **14** | 3 | **5.6** ← largest known |
| D4 Documentation | 12 | 3 | 4.8 |
| D3 Onboarding / TTFS | 12 | *withheld* | ~4.8 if 3 |
| **D8 Community & governance** | **10** | 3 | **4.0** |
| D9 Contribution funnel | 6 | 2 | 3.6 |
| **D5 Visual craft** | 8 | 3 | **3.2** |
| **D6 Content & voice** | 8 | 3 | **3.2** |
| **D1 Positioning** | 12 | 4 | **2.4** |
| D10 Machine legibility | 6 | 3 | 2.4 |
| **D2 IA & navigation** | 8 | 4 | **1.6** |
| D12 Performance & ops | 2 | 3 | 0.8 |
| D11 Accessibility | 2 | 4 *(re-scored at P4.3)* | 0.4 |

**Your natural block — D1 + D2 + D5 + D6 — is ~10.4 points of headroom.** The credibility block
— **D7 + D8 + D9 — is ~13.2.** The genesis reconciliation put it bluntly (`reconciliation.md:36`):

> the binding constraint is **D7** (weight 14), and the efficient path up is **claim-truth +
> channel-liveness + registry editorial gating, not more polish**.

⭐ **Read that as an invitation, not a restriction.** The instrument's own interaction table says
*"weak positioning is usually a content problem masquerading as a design problem — **fix the sentence before
the layout**"* (D1×D6). Design **is** how credibility gets communicated; it just cannot manufacture the
underlying fact. The highest-leverage Vitrine work is therefore **presentation in service of proof**.

⛔ **Two dimensions carry binary gates that block sign-off regardless of weighted score**: any **WCAG AA
critical**, any **CWV red at p75**. The instrument warns specifically (D5×D11): *"distinctive aesthetics
frequently create contrast failures — audit them together or you will ship a beautiful, non-compliant
site."* That is the characteristic failure of exactly the campaign you are planning.

---

## 3 · ⭐⭐ The thesis to design around: here, candor IS the pitch

The instrument's D10×D1 row: *"for a context/agent standard, **machine legibility is positioning**;
demonstrated self-conformance is the strongest possible proof-of-thesis."*

This site's product is **trustworthy context**. Every honest limitation it publishes is therefore not a
blemish to be designed around — it is **the product demonstrating itself**. The competitor set overclaims;
this site's differentiator is that you can check it. Some of what already exists in that vein:

- a **claim register** where every factual sentence is traced to evidence, published;
- **226 machine-readable twins**, `/llms.txt`, a registry API — a site legible to the agents it talks about;
- an **accessibility page that names what is NOT tested**, including that a clean result partly rests on
  browser behaviour rather than on this layout;
- a **trust page** publishing vendored files with their sha256 **and an invitation to diff them**;
- **empty states that stay empty** — zero counts render as zero rather than being hidden.

⇒ **The Vitrine brief is not "make the honest bits less prominent so the pitch lands." It is "make the
honest bits the most beautiful thing on the site."** If a redesign quietly demotes the candor surfaces, it
has traded the only durable differentiator for a look any template can buy.

---

## 4 · The four ideas you were asked to sharpen — what is real, what is horizon

Derived `[D] 2026-09-14` over the 226 twins unless noted. **Supersession: any figure here is void after the
next content deploy — re-derive.**

### 4.1 Knowledge graphs — **real, and the strongest card**
~20 pages. The vault **is its own worked example**: this repo is an aDNA graph that documents aDNA (Standing
Order 8 makes self-reference mandatory). Nothing to hedge. Design-wise this is under-dramatised.

### 4.2 Context tracking / optimization — **real**
~8 pages. Concrete artifacts exist: a context library of **5 topics / 27 subtopics** with per-file token
estimates, the **convergence model** (campaign → mission → objective as progressive context narrowing), and
per-mission token budgets with recorded actuals. ⚠ The engine itself (`contextscope`) lives in a **different
vault** (`Context.aDNA`) — this site may describe the *method*, and should not imply it ships the *tool*.

### 4.3 Collaborative graph building / sharing — **real substrate, thin evidence of use**
Federation appears on ~38 pages and the mechanism is real. But:
- **`community.adna.network` is HUMAN-ONLY until federation GA** (aDNALabs ADR-025). Not a style preference
  — a ratified community ruling. Copy must not invite agent participation there.
- The proposal funnel holds **2 proposals, and both are `sponsor: "Stanley Sekar"`** — the operator.
  **No outsider has ever traversed the funnel**, and 6 of its 8 states sit at occupancy 0.

⭐ The site already handles this well and you should preserve it: occupancy is **derived from the archive**
rather than asserted, so the zeros are honest rather than hidden. **The finding is reachability, not
failure** — an excellent, genuinely sharp design problem: *make the first rung obviously climbable.*

### 4.4 The Exchange + the ledger — ⛔ **the most constrained thing on the site**

This is the story you were most explicitly asked to sharpen, and it is the one with the least shipped
underneath it. Measured:

| Claim | Status |
|---|---|
| Graphs composable from a registry | **Real — within a single node** |
| Cross-node exchange / publishing | **Horizon.** The registry is local-first and **nothing has ever been published from this vault** |
| Ledger-backed trust ("the graph you run is safe and trusted") | **Horizon.** `lattice-ledger` is a **draft spec**, in a repo that is **pre-public-launch** |
| "network effect" as a phrase | **0 pages** — a real gap, and the easiest place on the site to write an unsupportable sentence |

⛔⛔ **AND THERE IS A HARD EXTERNAL HOLD.** `dependency_map.md:36`:

> no public protocol distribution or whitepaper links until **D-8** rules; **all protocol claims auto-flag
> S1 in the claim register.**

**D-8 has not ruled.** The operator has granted you **full authority over claims**, and that is recorded and
real. ⚠ But this hold is **owned by another vault and its counsel**, not by this campaign's scope — so
authority to *write* the story is not the same as authority to *lift* the embargo. **Write it; flag it; do
not quietly cross it.** If present-tense Exchange claims are wanted, the clean path is an explicit D-8
ruling, which is cheap to ask for and expensive to skip.

### 4.5 ⭐ The pattern that already solves this — reuse it, do not reinvent it

`site/src/content/guides/exchange-adoption-path.mdx` labels **every single step** `PASS` /
`TAUGHT-AS-DESIGN` / `HORIZON`, and states why in the page's own voice:

> aDNA's whole promise is context you can trust. A tutorial that pretends a horizon feature already ships
> would betray exactly the trust the standard is built to protect.

⇒ **This is the house answer to the Exchange brief: sharpen the telling, label the tense.** The ledger story
can be told vividly, at length, beautifully — as a **designed horizon** with today's honest stand-in named
beside it (FAIR `provenance` + a checked `federation` block). *That framing is more persuasive than a vague
present tense, and it is the only one this site can survive being checked on.*

---

## 5 · Hard constraints — external, not preferences

| Constraint | What it forbids |
|---|---|
| **Counsel embargo (D-8)** | Public protocol distribution / whitepaper links. Protocol claims auto-flag **S1** |
| **aDNALabs ADR-025** | `community.adna.network` is human-only until federation GA |
| **Fluxer SO#8** | No LLM syndication of conversations; agents always disclosed |
| **pt19** | **Never** hand-edit `site/src/data/vaults.json`, never run `sync:vaults` — registry data is another vault's, operator-gated. Corrections are staged as asks |
| **Standing Rule 1** | **Never** modify anything under `.adna/` — it is the base standard tree, vendored and published with hashes |
| **ADR-053** | Illustration is a **governed five-slot program** with a containment rule (all other chrome stays type-and-colour). New art lands in a slot or amends the ADR |
| **ADR-057 same-diff** | Any commit changing a **route, slug or rendered count** updates every gate/audit spec hardcoding it **in the same commit** |
| **⛩ G4 is an OPEN operator gate** | **Do not touch** the two Wilhelm Foundation cards on `/commons`, the `/about` proof-list attribution, or `/about`'s Wilhelm person card. A publication gate is wired and deliberately unfired pending a ruling |

---

## 6 · The gates that will refuse you (these are mechanical, not opinions)

**⛔ The one that surprises every design agent: `gate-49` visual snapshots run at `maxDiffPixels: 0`.**
12 templates × 2 themes = **24 baselines**, and *any* visual change — a font-weight, a 2px margin — turns
them red. That is deliberate: tolerances were removed because a tolerance written by feel let a real
regression through. The workflow is:

1. Confirm red **first** (never regenerate a baseline you have not seen fail);
2. Regenerate **in-container** (`mcr.microsoft.com/playwright:v1.59.1-noble` — host fonts rasterise
   differently and will diff every screenshot);
3. **Assert the control**: exactly the expected N of 24 changed. The untouched remainder is what proves your
   change did not leak.

⛔ **Masking a region to make it green is forbidden.** A mask that swallows a real region leaves it green
forever, and masks only ever grow.

Also standing:

- **Suite**: `npm run test:gates` — 698/1skip/0fail is the baseline; a count is only comparable to one
  produced by the same command.
- **`npm run check:markup`** must read 0 — and check it against a deliberately invalid file so the zero is
  not vacuous.
- **axe 0** across surfaces × viewports × **both** themes. The site is dark-by-default via a class on
  `<html>` and seeds `localStorage` before load — driving the theme by class-toggling produces phantom
  failures.
- **Reading-level census** (FKGL, per-route targets). ⚠ **`/` has 0.04 of headroom** — the tightest surface
  on the site. Adding prose to the homepage is a measured act, not a free one.
- **`npx astro build`, never `npm run build`** — `prebuild` regenerates committed data files.
- A bare build does **not** inject redirects/headers; run `node scripts/inject_redirects.mjs .` before the
  suite outside a deploy, or `gate-30` reds on a perfectly good tree.

---

## 7 · Assets to use rather than rebuild

| Asset | Why |
|---|---|
| `who/reviewers/` — **16 specialist personas** | Design Critic, Visual Designer, UX Writer, Information Architect, Brand Strategist, Newcomer Stress-Tester, Anti-Bloat Editor, Motion Designer, Infographic Specialist, Diagram Reviewer, Conversion/Growth, Movement Skeptic, Accessibility Auditor, Content Strategist, Performance Engineer, Standard Archivist. **A ready-made review panel** — do not invent a new one |
| `OPERATION_VITRUVIUS_review_instrument.md` **v1.1** | The D1–D12 rubric with anchors, weights and interaction effects |
| `what/doctrine/doctrine_site_voice.md` (accepted + published) | Two registers · **tense law** · one-new-term law · *say the limit in the same breath as the claim* · an earned avoid-list |
| `what/doctrine/doctrine_visual_inspection.md` + `scripts/visual_capture.mjs` | **T0 headless** capture, 6 viewports × both themes. ⛔ Never assume a visible or logged-in Chrome |
| `how/skills/skill_web_quality_sweep.md` | The standing procedure for any assessment of a rendered surface |
| `evidence/claims/claim_register.md` (**188 ids**) | The arbiter. Read it before writing a sentence with a number in it |

---

## 8 · Working rules, because you share one directory with me

The operator chose a **dedicated branch in the same working directory** (`vitrine/design`), so:

- **Single-writer lease**: a non-empty file in `how/sessions/active/` is a live peer session — **do not
  co-write its declared files.** Write your own session file **at the open**, not at the close.
- **Never `git add -A`** — this tree carries other lanes' work; stage explicit paths.
- **Commit before switching branches.** `dist/`, `.astro/` and `node_modules/` are **shared and unbranched**;
  builds clobber each other, so a build is only trustworthy if you ran it.
- If `git` vanishes from `PATH` on this node, resolve it to `/opt/homebrew/bin/git`.
- ⛔ **You never push and you never deploy.** Both are operator gates, taken in that order, because
  `inject_build_stamp.mjs:83` stamps `HEAD` and nothing checks that HEAD is public — deploying an unpushed
  tree publishes a commit no stranger can resolve.
- ⚠ **This vault's origin is PUBLIC.** A push publishes whatever is on the branch. Draft accordingly.

---

## 9 · What to hand back

`GR-7` (`mission_haussmann_gr_7_vitrine_integration.md`) is already queued on the main campaign to receive
this. It re-derives everything independently — **that is not distrust, it is the house rule** (this desk has
been wrong about its own work often enough to write the rule down). You make integration cheap by handing over:

1. **A change inventory**, with **route / slug / rendered-count changes called out separately** — those carry
   ADR-057 same-diff obligations across gates you may not know about.
2. **Every new or changed claim, listed** — one line each, with what makes it true. This is the single most
   valuable artifact you can produce, and the register pass is the campaign's slowest step without it.
3. **Design rationale per surface** — what problem the change solves, which dimension it targets.
4. **Proposed doctrine / ADR amendments as proposals** (`status: proposed`), never as edits to ratified text.
5. **A self-score against D1–D12 at v1.1, with the per-dimension breakdown.** The instrument's own rule:
   *"a composite reported without its breakdown is a lie by compression."*
6. **What you did NOT do**, and why. Under-claimed coverage is cheap to verify; over-claimed coverage costs
   a whole mission to discover.

---

## 10 · The five failure modes this vault has already paid for

Offered because they are the ones a fresh, capable agent hits, and each one cost this desk real time:

1. ⭐⭐ **A figure that shows its working looks derived.** `50 skills (21 base + 29 project)` sums correctly
   and was stale in all three numbers for months. **Arithmetic self-consistency is exactly what lets a count
   rot**, because staleness moves every term together. **Derive counts from disk; never copy one forward.**
2. ⭐ **A negative result is only as wide as the command that produced it.** A grep proving something is
   absent proves it about *the paths you searched*. State the surface; and match it to the claim's **verb**
   — *"a reader encounters X"* is a question about rendered text, not about source or HTML.
3. ⭐ **A shared notation is not a shared referent.** `/adopters/` in this corpus usually means the vault
   directory `who/adopters/`, not a route. Six such false positives in one sitting here — every one would
   have "repaired" correct content.
4. ⭐ **The cheap remedy is usually the wrong one.** A mask that greens a snapshot, an allowlist that greens
   a link gate, a tolerance that greens a regression — each trades a visible defect for an invisible one.
5. ⭐ **An instrument is not believed until it has been demonstrated to fail — and a demonstration is only
   worth what it can attribute.** If you add a check, make it go red for the reason it asserts, not merely
   red. ⛔ And note the standing rule, ruled **six times**: *no new checker authored at a sitting's tail.*
   If you want a gate, it gets its own sitting, with its controls.

---

## 11 · Questions worth putting to the operator before you build

Not for me to rule — flagged because each changes the shape of the campaign:

1. **Does D-8 get asked?** A protocol-publishing ruling would unlock the Exchange story's strongest form.
   Without it, the candor pattern (§4.5) is the ceiling — a good ceiling, but a ceiling.
2. **Is a re-score in scope?** If yes it must be v1.1, published as new with its breakdown, and it should
   probably coordinate with `P5.2`, which owns the full composite.
3. **How far may IA move?** Route changes are the most expensive edit on this site (ADR-057 fires across the
   suite, the audit sweep, redirects and twin emission). Worth doing — worth *deciding* to do.
4. **Does `P5.1`'s human panel run before or after Vitrine ships?** It cold-reads these exact surfaces and
   pins its stimulus to a build stamp. **A deploy landing mid-panel invalidates the panel**; a panel run on
   pre-Vitrine copy measures a site you are about to replace.

— Rosetta

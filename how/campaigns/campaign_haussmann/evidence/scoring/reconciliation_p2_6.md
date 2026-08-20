---
type: evidence
packet: scoring
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
objective: O1
title: "P2.6 mid-campaign reconciliation — 11 scored dimensions vs the 51.6 baseline"
instrument: "directives/OPERATION_VITRUVIUS_review_instrument.md v1.0 (unchanged from baseline — operator ruling, for delta comparability)"
target: https://adna.network
evidence_pack_commit: c9e8300
reviewers: "A and B — independent fresh-context agents, both claude-fable-5, disclosed. Raw sheets committed at e578052, BEFORE this reconciliation was authored."
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_rosetta
tags: [evidence, haussmann, p2_6, scoring, reconciliation]
---

# P2.6 reconciliation

**Reconciled: 55.6 of 88 → 63.2 / 100 normalized** (11 scored dimensions; **D3 withheld**).
**Baseline, recomputed on the same 11: 44.4 of 88 → 50.5 / 100.**
**Delta: +11.2 weighted points, +12.7 normalized.**

No 12-dimension composite is published this mission. D3 is not scored, not estimated, and not carried
forward at its baseline value — it closes when O0b's clean-machine run produces a number.

## 1. The table

| Dim (weight) | Baseline | A | B | **Reconciled** | Δ |
|---|---|---|---|---|---|
| D1 Positioning (12) | 3 | 4 | 4 | **4** | **+1** |
| D2 IA & navigation (8) | 3 | 4 | 4 | **4** | **+1** ⚠ *see §3* |
| D3 Onboarding/TTFS (12) | 3ᵖ | — | — | **withheld** | — |
| D4 Documentation (12) | 3 | 3 | 3 | **3** | 0 |
| D5 Visual craft (8) | 3 | 3 | **4** | **3** | 0 · *divergence, §4* |
| D6 Content & voice (8) | 2 | 3 | 3 | **3** | **+1** |
| D7 Proof & credibility (14) | 2 | 3 | 3 | **3** | **+1** |
| D8 Community & governance (10) | 2 | 3 | 3 | **3** | **+1** |
| D9 Contribution funnel (6) | 2 | 2 | 2 | **2** | **0** |
| D10 Machine legibility (6) | 3 | 3 | 3 | **3** | 0 |
| D11 Accessibility (2) | 2 | 3 | 3 | **3** | **+1** |
| D12 Performance & ops (2) | 2 | 3 | 3 | **3** | **+1** |
| | **44.4/88** | **55.6/88** | **57.2/88** | **55.6/88** | **+11.2** |

**Calibration: variance ≤1 on 11 of 11 scored dimensions** — the instrument's Phase-0 gate is ≤1 on
≥10/12; this clears it. On **eight** dimensions the two reviewers independently quoted the *identical
binding anchor sentence*. The anchor-letter discipline is doing real work, not decorating a judgment.

## 2. Attribution — which mission moved each dimension

Per the mission's constraint: *"deltas must cite the mission that moved them — attribution, not vibes."*

| Δ | Attributed to | The evidence the scorers cited |
|---|---|---|
| **D1 +1** | **P0.1** (ADR-048, definition-as-hero) | Anchor 4 turns on *"correct summary in ~30s"*; the baseline held at 3 for being *"correct-after-scroll"*. Corroborated independently this mission: O0c-a's **three cold readers converged unprompted on the same one-sentence answer** — at genesis they did not converge |
| **D2 +1** | **P2.1** (casing) + **P2.2** (consolidation) — **partly** | ⚠ Only partly site movement. See §3 |
| **D6 +1** | **P1.1** (claim purge) | 8 FALSE → 0; anchor 3's *"claims mostly supportable, some aspirational tense"* now fits where anchor 2 did |
| **D7 +1** | **P1.1** + **P1.2** (state-of-the-network, canonical-properties) | Anchor 3 needs *"named humans, some verifiable third-party use, activity visible"*. The one-machine disclosure, the operator named, the dated changelog. Both scorers still name R-111/R-123 as what holds it off 4 |
| **D8 +1** | **P1.2** + the early-fired **DP7** (`/community` shipped) | Anchor 3: *"Ladder + contribution standards + CoC published; venue exists; process informal."* The CoC and CONTRIBUTING **do exist** — which is why D8 moved and **D9 did not**: they exist behind the wrong door (R-122) |
| **D11 +1** | **P1.4** (mobile integrity) | The baseline's stated blocker was F2 — a WCAG 1.4.10 Reflow candidate in a primary flow. P1.4 fixed F1/F2/F3 with computed-geometry proofs + gate-29 |
| **D12 +1** | **P0.2** (deploy hardening) + **P2.1** (link rot) | Baseline: *"perf superb, ops half fails (header drift, link rot, no monitoring)."* Live now serves the header set; internal 404s at 0 |
| **D9 = 0** | — | **The one dimension the campaign has not moved at all.** Anchor 2 still binds: *"Repo accepts PRs; no guidance; no labelled entry points."* R-122/R-123 are why |

## 3. ⚠ D2's +1 is not all site movement — an instrument-reading drift, quantified

Both scorers awarded D2 = 4 on anchor 4: *"≤2 clicks to all high-value pages; **search present and
scoped**; no orphans."* Both **also explicitly recorded that no site-wide search exists** — A: *"there is
no docs/site-wide search and no keyboard trigger"*; B: *"no global/docs search or ⌘K affordance found."*
They read *"search present and scoped"* as satisfied by the registry's scoped search input, which is
present.

**The baseline read the identical clause the opposite way**, holding D2 at 3 because *"casing hard-404s +
no site-wide search block 4."*

The registry search input **shipped at Storyweave P3 M3.1** — `git log -S'Search by name' -- site/src` →
`5b9be4c`, a **previous campaign**, long before the 2026-08-16 baseline `[D]`. **The feature was present
under both scorings.** So:

- The baseline's D2 blocker was **two** things. **One genuinely resolved**: mixed-case URLs now 301 to
  canonical (`/vaults/Astro.aDNA` → `/vaults/astro/`, verified live `[D]`) — P2.1's work, plus P2.2's
  consolidation, nav-7, and zero duplicate titles.
- **One did not change at all**: there is still no site-wide search. Only the reading of the clause changed.

**D2 stands at 4** — two independent reviewers reached it on the anchor's literal words, and a scoped
search does exist; overriding both on a clause they addressed explicitly would substitute the
reconciler's reading for the instrument's. But **the +1 must not be banked as pure site improvement**,
and roughly **half of it is a re-reading**. Call it **+0.8 weighted points of real movement, +0.8 of
instrument drift** — a split stated as an estimate `[I]`, not a measurement.

**This is a v1.1 anchor defect, and it is already on the filed list**: conjunctive anchor bundles have no
split rule, so a reviewer satisfying two of three clauses can award the rung. It cost the baseline-to-P2.6
delta about 0.8 points of precision here, and it will cost more at P5.2 across twelve dimensions. **The
v1.1 fix should land before P5.2** — routed to the re-plan.

## 4. The one divergence: D5 (A = 3, B = 4) → **3**

Anchor 4 reads: *"Published system, **enforced in build**, responsive integrity verified, states
designed."*

**B awarded 4** on the strength of a real published design-system page, geometry-proven responsive
integrity (P1.4 + gate-29), parity, and designed empty/404 states — three of the four clauses, evidenced
better than any other dimension in either sheet.

**A held at 3** — anchor 3, *"Tokenised system, mostly conformant, some drift"* — because **"enforced in
build" fails**: no design-token or console gate exists, the instrument's own 20-component conformance
sample has never been run, and **F20 demonstrates a whole-site defect shipping through 487 assertions
unseen**.

**Resolved to 3. The letter binds.** B's own evidence block records F20 as *"named drift, still live"* and
states *"no gate watches the console"* — B documented the failure of the clause it then awarded. That is
the same shape as §3's D2 problem, caught here because the reviewers disagreed.

**B's reservation stays on the record**, and it is substantive: the D5 craft claims are *"backed by
geometry and captures, not taste — the strongest evidentiary basis of any dimension here."* When a
console gate and a component-conformance run exist, D5 reaches 4 on the existing evidence alone.

*(Symmetry worth noting: at baseline the same pattern resolved **D11** — A held the anchor's literal
conjunctive clause, B credited automation breadth, the letter bound. Same two reviewers' reading styles,
same resolution rule, opposite dimension.)*

## 5. Binary gates

| Gate | A | B | **Reconciled** | Basis |
|---|---|---|---|---|
| **D11 Accessibility** | PASS | PASS | **PASS (automated scope only)** | axe **0 in both themes** across 13 surfaces, two dates `[D]`. **No AT or keyboard pass has ever been run** — the baseline's CONDITIONAL PASS condition was *"adjudicate/fix F2 + run a real manual pass"*. F2 **is** fixed (P1.4, geometry-proven), so the condition is half-discharged. The manual half remains and is **P4.3's** |
| **D12 Performance & ops** | PASS | PASS (lab) | **PASS on lab evidence; FIELD STILL UNVERIFIED** | All lab CWV green; header drift closed. **No field p75 instrument exists** — CrUX is null at this traffic. Unchanged from baseline; **P4.4's** |

Neither gate blocks phase sign-off. Both carry the same unmet evidence they carried at baseline, and
**neither should be reported as a clean pass without its qualifier.**

## 6. What the number does and does not say

**50.5 → 63.2 on 11 dimensions is real movement**, and it is concentrated exactly where Decade 1 aimed:
the trust stratum. D6/D7/D8 each moved 2 → 3, which is the *"8 FALSE claims and a dead venue"* band
giving way to *"claims mostly supportable, named humans, venue exists."* That was the campaign's thesis
and the measurement supports it.

Four things the number does not say:

1. **D3 is missing, and it carries 12 weight points** — the second-heaviest dimension. A 12-dimension
   figure would be a guess wearing a decimal.
2. **D9 did not move at all.** The contribution funnel is the one dimension nine missions did not touch,
   and R-122/R-123 mean it now fails for a *different* reason than at baseline — not a dead venue, but a
   CTA pointing at the wrong repo and an unlicensed one behind it.
3. **~0.8 points are instrument drift, not site change** (§3), and no comparable audit was run on the
   other +1s — they were spot-checked for a changed-feature cause and each had one, but that is a weaker
   check than D2 received `[I]`.
4. **63.2 is measured against a pack the scorers repeatedly out-ran.** A logged **nine** pack-vs-live
   divergences, B **five**, and **every one favoured the site** — the O0 refresh covered captures, claims,
   and machine-eye but **not** `sweep/`, `inventory/`, or `hypotheses_resolved.md`, so scorers reading
   those met genesis-era facts and corrected them live. The tiebreak worked exactly as designed; the
   **partial refresh is a real limitation of O0 as executed**, and the next full pass (P5.2) should
   refresh all packets or state which it did not.

**Comparative position** (baseline cohort, unchanged instrument): modelcontextprotocol.io **82.4–83.6** ·
mastra.ai **64.8–66.4** · adna.network **63.2 on 11 dims**. The site has closed most of the gap to Mastra
and roughly a third of the gap to MCP — with the caveat that the cohort figures are 12-dimension
composites and this one is not, so **the comparison is indicative, not like-for-like.**

## 7. Isolation — held, with one bound worth naming

Both reviewers confirmed they opened nothing in `evidence/scoring/`, no charter, no mission file, no
orientation artifact, and no git log; neither knew any prior score.

**Both independently disclosed the same incidental exposure**: the session harness **auto-injects** the
vault and campaign governance files into subagents, and for B additionally a recent-commit summary and
the memory index. Both checked and reported that **none carried a dimension score**, and both re-grounded
any fact so encountered in the allowed pack before using it — which is the correct handling.

It is still a real bound: **"fresh context" via subagent spawn is not absolute in this harness**, and a
protocol that claims otherwise overclaims. Recorded in
`artifacts/p2_6/scorer_isolation_protocol.md` for P5.2's benefit — the honest description is *"fresh
context apart from harness-injected governance, which is score-free and was disclosed."*

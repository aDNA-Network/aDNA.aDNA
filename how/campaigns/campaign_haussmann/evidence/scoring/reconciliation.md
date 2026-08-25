---
type: evidence
packet: scoring
artifact_type: score_reconciliation
campaign_id: campaign_haussmann
title: "VITRUVIUS baseline — two-reviewer reconciliation (adna.network, 2026-08-16)"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
agent_authored: true
reviewer_disclosure: "Both reviewers are independent fresh-context agents (disclosed, instrument Δ2); operator is final arbiter at Gate B. Raw sheets committed before this reconciliation was authored."
evidence_pack_commit: d58ea13
tags: [haussmann, scoring, vitruvius, reconciliation, baseline]
---

# Baseline reconciliation — adna.network vs VITRUVIUS v1.0 (B×E weights)

## Scores

| Dim (weight) | A | B | **Reconciled** | Note |
|---|---|---|---|---|
| D1 Positioning (12) | 3 | 3 | **3** | agreed — correct-after-scroll; anchor 5 unawardable pre-panel |
| D2 IA & nav (8) | 3 | 3 | **3** | agreed — zero orphans + 10/10 ≤2-click, but casing hard-404s + no site-wide search block 4 |
| D3 Onboarding (12) | 3 | 2 | **3** ▲ | see divergence 1 |
| D4 Documentation (12) | 3 | 3 | **3** | agreed — real Diátaxis shape + real spec; freshness layer absent, 124K-px spec page |
| D5 Visual craft (8) | 3 | 3 | **3** | agreed — real system + parity; F1 mobile squeeze blocks 4 |
| D6 Content & voice (8) | 2 | 2 | **2** | agreed — 8 FALSE + 78% registry leak vs exemplary honest strata |
| D7 Proof & credibility (14) | 2 | 2 | **2** | agreed — zero independent adoption + S1 concentration; honesty infrastructure keeps it off 0–1 |
| D8 Community & governance (10) | 2 | 2 | **2** | agreed — artifacts abound but the named venue does not exist (Discussions 404) |
| D9 Contribution funnel (6) | 2 | 2 | **2** | agreed — advertised mouth = two 404s; no CONTRIBUTING/labels/maintainers |
| D10 Machine legibility (6) | 3 | 3 | **3** | agreed — llms.txt floor real; twins/JSON/MCP absent; llms.txt unlinked |
| D11 Accessibility (2) | 2 | 3 | **2** ▼ | see divergence 2 |
| D12 Performance & ops (2) | 2 | 2 | **2** | agreed — perf superb, ops half fails (header drift, link rot, no monitoring) |

**Reconciled composite: 51.6 / 100** (raw band 49.6–51.6). Both sheets: substrate dimensions at 3, trust stratum at 2 — **the binding constraint is D7 (weight 14)**, and the efficient path up is claim-truth + channel-liveness + registry editorial gating, not more polish.

**Inter-reviewer variance: ≤1 point on 12/12 dimensions** — clears the instrument's own Phase-0 calibration gate (≤1 on ≥10/12) on the first pass.

> ⛩ **The table above is the 2026-08-16 BASELINE and is not updated in place.** One dimension has since
> been formally re-scored: **D11 Accessibility 2 → 4** at P4.3's close (2026-08-25), and its binary gate
> moved CONDITIONAL PASS → PASS. See **[§ D11 re-score](#-d11-re-score--p43-close-2026-08-25)** at the
> foot of this file for the evidence, the ceiling, and the one interpretive step the 4 rests on.
> Every other row still reads as taken. The **composite re-score is P5.2's**, against a deployed build.

## The two divergences, reconciled

1. **D3 (A=3, B=2 → 3).** Anchor-2's letter ("completes with undocumented workarounds; TTFS >30min") has no supporting evidence; anchor-3's letter ("completes as written; troubleshooting thin") matches the documentary record (commands verified against `install_truth.json`, prerequisites stated, no troubleshooting section). **B's reservation stands in the record**: no clean-machine TTFS run exists, so completion is `[I]` not `[D]` — the score is **provisional on the campaign-P0 TTFS run and drops to 2 if the quickstart fails as written.** Both reviewers independently flagged the same substantive defects (no zero-install path; uncosted first move; the synthetic engineer's refusal of the one-liner).
2. **D11 (A=2, B=3 → 2).** B credited the unusual automation breadth (axe 0×32 both themes, LH 100×10). A held at anchor-2's letter ("automated clean; **manual failures in key flows**") because F2 — `/network` mobile clipping content and the clone command mid-word — is a concrete WCAG 1.4.10 Reflow AA-failure candidate in a primary flow, and no manual (keyboard/screen-reader) pass exists. The letter binds: **2**, with B's automation credit recorded. Resolver: fix F2 + run the manual pass at campaign P4; both reviewers judged the 964 html-validate errors markup-lint, not WCAG criticals.

## Binary gates (both reviewers concur)

- **D11 gate: CONDITIONAL PASS** — zero automated criticals; condition = adjudicate/fix F2 (reflow candidate) + a real manual pass before any phase sign-off claims AA.
- **D12 gate: PROVISIONAL PASS (lab) / FIELD UNVERIFIED** — all lab runs green; no field p75 instrument exists (CrUX null-traffic, keyless PSI dead); live drift (headers) proves deployed ≠ configured, so field collection is a campaign prerequisite.

## Comparative position (Step 9)

| Site | Composite (B×E) | D7 | D8 | D10 | Note |
|---|---|---|---|---|---|
| **modelcontextprotocol.io** | **82.4–83.6** | 5 | 5 | 5 | the Archetype-B reference: SEP process, .md twins, live `/mcp` self-conformance |
| **mastra.ai** | 64.8–66.4 | 4 | 2 | 3–4 | A-archetype: superb onboarding surface, weak community/governance |
| **adna.network (baseline)** | **51.6** | 2 | 2 | 3 | trust stratum is the gap; substrate within reach of the cohort |

The ~31-point gap to MCP decomposes almost entirely into D6/D7/D8/D9 (42 weight points at score 2) — precisely the campaign's P0–P1 lanes — plus the D10 anchor-4 items (twins/JSON/MCP server) in P3.

## ⛩ D11 RE-SCORE — P4.3 close, 2026-08-25

> **The rows above are the 2026-08-16 genesis reconciliation and are left exactly as they read that
> day** (SO#6). This section is an amendment, not a rewrite: a score that silently moves cannot be
> cited, and the value of the baseline is that it was taken before any of the work.

**D11: 2 → 4.** The gate condition attached to the baseline is discharged; the ceiling is 4 and 5 is
unreachable. Both halves of that sentence are load-bearing.

### The baseline's own condition, discharged

The genesis D11 gate was a **CONDITIONAL PASS** whose condition read: *"adjudicate/fix F2 (reflow
candidate) + a real manual pass before any phase sign-off claims AA."* Both halves are now done, by
different missions:

| Condition half | Status | Evidence |
|---|---|---|
| **F2 adjudicated/fixed** | ✅ | Fixed at P1.4 (computed-geometry proofs + `gate-29`); **formally closed at P4.3 AC3** — [[f2_closure]]: `/network/` at 320 + 375, both themes, **0** doc overflow, **0/3** clipped steps, and ⭐ **both sentences the finding quotes mid-truncation render whole** — the load-bearing evidence, because a zero-overflow reading is also what a page with the text *deleted* would report |
| **A real manual pass** | ✅ | P4.3 AC2 keyboard half — [[keyboard_traversal_record]]: 5 surfaces × 60 stops, **0 ringless · 0 traps · 0 order breaks · 0 positive tabindex · 0 obscured**, `Shift+Tab` retraces exactly; 6 primary flows driven keyboard-only, **16 steps / 14 PASS / 1 NOTE / 0 FAIL** |

⇒ **D11 binary gate: CONDITIONAL PASS → PASS**, with the human-AT gap named below rather than folded in.

### Why 4 and not 3

Anchor 3 is *"AA on primary templates; **complex graphics partially covered**"*. That second clause was
D11's binding limit for the whole campaign — `machine_eye` 14 measured the graph twin as a roster
without relationships. **P4.3 AC4 closed exactly that clause**: the twin now enumerates all 14 edges
from both ends with direction and type, asserted by `gate-22` and red-proven 7/7 including the case
that flattens direction while leaving every count correct. Anchor 3's letter no longer describes this
site.

Anchor 4 is *"Verified AA across all templates including graphics and registry; screen-reader tested."*
Templates: axe **0** across every page template × both themes, in CI. Graphics: above. Registry: the
result-count live region is asserted to **announce**, not merely update (`gate-45` M6 — strip
`aria-live`, leave the text correct, gate goes red).

### ⚠ The interpretive step this 4 rests on — named, so it can be challenged

**"Screen-reader tested" is being read as satisfied by a screen-reader ENGINE rather than by a human
listening.** That is the single sentence holding D11 at 4 instead of 3, and it is stated here so a
reviewer who reads it the other way knows precisely what to strike. The engine is real
(`@guidepup/virtual-screen-reader`, five surfaces, assertions on order, phrasing and live speech, and
it produced a genuine finding), and it is **bounded**: ~60 phrases of each page's opening, never a
whole-document audit.

**What is NOT claimed:**

- **No human screen-reader session has been run.** ⛩ Operator ruled 2026-08-25 that the sitting
  routes to a follow-up campaign; the 18-item script is `ready_to_run`. Register row **F-v**.
- **Check 5 is PARTIALLY MET, both ways.** It asks for VoiceOver **+ NVDA**. NVDA is Windows-only and
  this is an L1 macOS node (G-2, recorded at the pre-build gate); VoiceOver is now deferred. Neither
  is silently passed.
- **Anchor 5 is UNREACHABLE and was overclaimed by the original AC5** (G-8). It has three conjuncts:
  published statement ✅ (in-tree, publishing at this session's deploy), a11y checks in CI ✅, and
  *tested with assistive-technology **users*** ❌ — which an operator driving a screen reader is not.
  **The mission's honest ceiling was declared as 4 before the work started**, at the pre-build gate,
  rather than discovered at the re-score.

### Standing at the re-score `[D]`

Suite **628/628**, derived from the runner (617 → 628: gate-22 **+3** twin-edge · gate-4 **+2** axe on
the statement, both modes · gate-9 **+6** overflow on the statement, six viewports). axe **0**.
`graph_twin_redtest.sh` **7/7** (5 mutations + 2 controls).

⚠ **Composite unchanged at 51.6 and that is correct, not an oversight** — D11 carries weight **2**, so
a 2 → 4 move is worth 4 weighted points against a 100-point scale before rounding. **D11's value was
never in its weight**: it is one of two dimensions carrying a *binary gate*, and the gate is what
blocked phase sign-off from claiming AA. The instrument says it in its own words — *"low weight ≠
optional."* The composite re-score is **P5.2's**, against a deployed build, and this section does not
pre-empt it.

## Related

`scoresheet_A_adna.md` · `scoresheet_B_adna.md` · [[hypotheses_resolved]] · `../claims/claim_register.md` · `../cohort/` (4 sheets) · [[instrument_ingestion]] (Δ2/Δ3 disclosures)

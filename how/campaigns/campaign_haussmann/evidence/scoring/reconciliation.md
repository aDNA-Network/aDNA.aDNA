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

## Related

`scoresheet_A_adna.md` · `scoresheet_B_adna.md` · [[hypotheses_resolved]] · `../claims/claim_register.md` · `../cohort/` (4 sheets) · [[instrument_ingestion]] (Δ2/Δ3 disclosures)

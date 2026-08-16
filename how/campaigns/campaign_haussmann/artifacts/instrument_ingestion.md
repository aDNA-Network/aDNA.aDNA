---
type: artifact
artifact_type: doctrine_adoption
campaign_id: campaign_haussmann
title: "HAUSSMANN Phase A.4 — VITRUVIUS instrument ingested as assessment doctrine (adoption record + deltas + opening work queue)"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
agent_authored: true
tags: [haussmann, orientation, phase_a, vitruvius, assessment_doctrine]
---

# Instrument ingestion — VITRUVIUS adopted, with recorded deltas

> The campaign's assessment doctrine is `directives/OPERATION_VITRUVIUS_review_instrument.md` v1.0
> (operator-issued 2026-08-16): 12 dimensions D1–D12 with 0–5 anchors · B×E-hybrid weights (D7=14,
> D1=D3=D4=12, D8=10, D2=D5=D6=8, D9=D10=6, D11=D12=2 **with binary gates**) · severity S1–S4 ·
> provenance tags `[D]/[I]/[R]/[A]` on every finding · evidence protocol Steps 1–10 · 8 anti-patterns ·
> target classification **B×E hybrid with an A-shaped onboarding surface** (every finding adjudicated
> against *which job the page is doing*). Adopted whole. The deltas below are the only local modifications;
> each is recorded per the instrument's own re-weighting rule ("record the re-weighting").

## Recorded deltas (instrument → this vault's execution)

| # | Instrument says | HAUSSMANN executes | Why |
|---|---|---|---|
| Δ1 | Capture at 390 / 768 / 1024 / 1440 (§6 Step 2) | The vault's canonical **6-viewport set**: 320 / 375 / 768 / 900 / 1024 / 1440 (`scripts/viewports.json`), dark+light | Supersets the instrument's intent; keeps evidence comparable with the existing gate-9/@audit series. 375 stands in for 390 (recorded, not silently swapped). 1920 (D5.10) noted as uncovered — flagged per-finding where relevant. |
| Δ2 | Two reviewers score independently (Step 10) | **Two independent fresh-context agent scorers** + reconciliation; operator = final arbiter at gates. Disclosed as agent-scored in every scorecard. | No second human is available mid-genesis; contamination is controlled by fresh-context spawns fed the instrument + evidence pack only, raw sheets committed before reconciliation opens. Human scoring recurs at campaign P5. |
| Δ3 | Steps 5/6/7 = human cold-reader panel (≥5) · clean-VM TTFS · outsider contribution run | At genesis: **synthetic pre-screens** (fresh-context agent cold-reads + sandboxed TTFS walkthrough), every artifact labeled **SYNTHETIC** in title and body. The real human instruments are designed as campaign missions (P5 `m_p5_evidence_full`) with operator-coordinated recruitment. | Agents cannot recruit humans or claim their results. The directive's own campaign design (§5 Phase 0/5 gates) places the real panels inside the campaign. |
| Δ4 | pa11y in the automated sweep (B.3) | axe (`@axe-core/playwright`, both themes) as primary; a second engine (IBM accessibility-checker) as a **non-blocking trial lane** | Engine inter-rater reliability is poor; multi-engine raises detection (27%→35% in benchmarks) but gating on two engines adds flake. Recorded in the toolkit program. |
| Δ5 | CWV "at p75" (D12, §6) | Lab Lighthouse (13.4.0, desktop+mobile) + **Vercel Speed Insights as the field-p75 instrument**; CrUX expected null at current traffic (keyless PSI verified quota-zero 2026-08-16) | The instrument demands field p75; CrUX won't publish for a low-traffic origin. Field instrument choice recorded in the measurement ADR stub. |
| Δ6 | "VITRUVIUS" as operation name | **Instrument name only.** The campaign is HAUSSMANN; Vitruvius is the live persona of WebForge.aDNA (the pattern source — the pairing is deliberate and recorded). No campaign, mission, or artifact takes the Vitruvius name. | Fleet naming rule: codename = fleet-unique key; persona collision is exactly the ambiguity the rule exists to prevent. |

## Scoring mechanics (fixed now so Phase B scorers can't drift)

- **Composite** = Σ(dimension score ÷ 5 × weight), reported **always with the per-dimension breakdown** ("a composite without its breakdown is a lie by compression").
- **Binary gates**: any WCAG-AA critical or CWV red at p75 blocks phase sign-off regardless of weighted score.
- **Finding record** = instrument Appendix B schema verbatim (`id/dimension/severity/provenance/location{url,selector,viewport,capture}/observation/why_it_matters/recommendation/effort/owner/verification/status`).
- **Severity**: S1 = falsifiable inaccuracy, credibility risk, consent exposure, a11y critical, broken primary flow → fix before any promotion. False claims in the register are S1 by definition (Step 8).
- **B×E×A adjudication**: every finding names which of the three jobs (A run-code / B read-spec-implement / E see-the-work) the surface was doing when it failed.

## The opening work queue — hypotheses H1–H15 with genesis pre-evidence

Status after the planning pass (full resolution = Phase B packet B6; nothing below is final):

| H | Claim (compressed) | Dim | Pre-evidence from this pass | Leaning |
|---|---|---|---|---|
| H1 | Hero = two novel abstractions before any concrete example | D1 | Copy confirmed on llms.txt mirror `[D]`; effect untested | test (synthetic pre-screen + campaign panel) |
| H2 | Three concurrent navigation systems | D2 | 8-item nav at doctrine ceiling per Berthier memo `[R]` | test |
| H3 | Compound `git clone … && claude` CTA; no zero-install path | D3 | Install one-liner confirmed in llms.txt `[D]` | confirm-leaning |
| H4 | Registry sprawl: 74 vaults, 15 graphed, mixed lifecycle | D2/D7 | `vaults.json`: no `tier` field; status census genesis 56 / pending 10 / active 7 / genesis_stub 1; graph splits 15 connected / 59 unconnected `[D]` | **confirmed-leaning** |
| H5 | Network substantially operator-federated; disclosure absent | D7 | S1 candidate; needs page-level check of disclosure surfaces | test (highest stakes) |
| H6 | Mixed-case vault URLs | D2/D12 | **24/74 mixed-case slugs in `vaults.json`, case-sensitive host** `[D]` | **confirmed** (severity/scope in B) |
| H7 | Six audience-segment pages as IA (anti-pattern 7.7) | D1/D2 | All six confirmed in `src/pages/` + nav "For you" group; label/slug mismatch Startups→`/startup-first-hour/` `[D]` | **confirmed-leaning** |
| H8 | No llms.txt / machine layer (S1 if absent) | D10 | **Partially refuted**: llms.txt 200 + genuinely curated `[D]`; llms-full.txt 200 but a ~2 KB *index* mislabeled as full-corpus `[D]`; `.md` twins absent, registry-JSON absent (`/vaults.json` 404), MCP server absent `[D]` | **reframed**: "layer present but incomplete + mislabeled" |
| H9 | "Built on the Lattice Protocol (opening progressively)" ×3 = explanatory debt | D1/D6 | Counsel embargo confirmed (LatticeProtocol STATE: publish counsel-gated, D-8 backlogged) `[D]` — resolution must fit inside the embargo | confirm-leaning |
| H10 | Register oscillation lyric↔terse | D6 | Untested; `reading_level.mjs` + full-corpus read in B | test |
| H11 | Personas exposed unexplained in public registry | D1/D6 | Personas on 67/74 vault rows `[D]`; no public explainer found in page inventory | confirm-leaning |
| H12 | No named humans on homepage | D7 | Untested at page level | test |
| H13 | Internal operational language leaking (sweep all 74 entries) | D6 | Root cause found: registry copy falls back to inventory `note` fields — 0/27 cards carry `tagline`, ~46/74 vaults lack a card `[D]`; llms-full leaks `tbd_at_p0`, "Framework (candidate)", zero-instance edge types `[D live]` | **confirmed-leaning + root-caused** |
| H14 | No synchronous community venue | D8/D9 | **Situation changed since the instrument**: community.adna.network (Fluxer) is LIVE `[D live]` — but human-only (ADR-025), closed registration, policy-naked, un-branded (`<title>` "Fluxer") | **reframed**: venue exists; integration + readiness are the questions |
| H15 | No numbered proposal process | D8 | No proposal artifacts found in vault or site inventory | confirm-leaning |

## Related

[[WEBFORGE_ORIENTATION]] · [[dependency_map]] · [[webforge_pattern_register]] · `directives/OPERATION_VITRUVIUS_review_instrument.md` · [[doctrine_visual_inspection]]

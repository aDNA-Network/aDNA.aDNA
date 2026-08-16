---
type: artifact
artifact_type: gate_dossier
campaign_id: campaign_haussmann
title: "HAUSSMANN Gate B dossier — situation assessment complete (Phase B), 2026-08-16"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
agent_authored: true
evidence_pack_commits: [d58ea13, "wave-3 (this commit)"]
tags: [haussmann, gate_b, dossier, vitruvius, assessment]
---

# Gate B dossier — the situation, on one surface

> Phase B ran the full VITRUVIUS evidence protocol against https://adna.network + community.adna.network:
> 12 wave-1 packets + two independent target scorers + reconciliation. Every finding is provenance-tagged;
> raw evidence under `../evidence/`. Deploy baseline: home etag `9247…f32`, last deploy 2026-08-11T13:35Z
> (unrecorded in STATE — itself a finding). **Deploy-freeze request**: please avoid production deploys
> until the campaign's P0 deploy-hardening mission lands, or tell me and I re-baseline.

## 1. The score

**VITRUVIUS baseline composite: 51.6 / 100** (B×E weights; reconciled from independent scorers at 51.6/49.6 — variance ≤1 on 12/12 dimensions). Per-dimension: **D1 3 · D2 3 · D3 3ᵖ · D4 3 · D5 3 · D6 2 · D7 2 · D8 2 · D9 2 · D10 3 · D11 2 · D12 2** (ᵖ = provisional on a real TTFS run). Binary gates: D11 **conditional pass** (F2 reflow candidate + no manual pass yet) · D12 **lab pass, field unverified**.

**Comparative position**: MCP (same-archetype reference) **≈83** · Mastra (adjacent) **≈65** · adna.network **51.6**. The 31-point gap to MCP lives almost entirely in the trust stratum — D6/D7/D8/D9 all at 2 (42 of 100 weight points) — plus D10's missing anchor-4 items. **The substrate (IA, docs shape, craft system, perf, machine floor) is uniformly at 3 and within reach; the credibility stratum is the campaign.**

## 2. S1 register (fix before any promotion — instrument §5)

| S1 | What | Fix shape |
|---|---|---|
| 1 | **8 FALSE claims** — "the vaults are all public" (73/74 aren't) · "the **open** coordination protocol" (private, counsel-gated; same page's "opening progressively" is the honest phrasing) · `/community` routes questions to **Discussions (404, not enabled)** · "issue templates" (repo has no `.github/`) · `/compliance` "every commit is signed" (none are) · "every vault has its own persona" ×2 surfaces (7 nulls + 5 raw `tbd_at_p0`) · the registry's only outbound GitHub proof-link 404s | Copy harmonization + channel shipping + one data fix; all S (small) effort |
| 2 | **Self-federation undisclosed** (anti-pattern 7.3): "Real public-good work already lives here / The proof" — all four subnetwork vaults `pending`, the one public repo is operator-authored. The synthetic engineer reached the hostile reading unaided. | The dated **state-of-the-network disclosure surface** — §8.3's "single highest-leverage move" |
| 3 | **Docs template mobile squeeze** — body text in a ~185px column at ≤375px (130px at 320) across the whole docs class incl. `/get-started`; invisible to axe/overflow gates, caught only by visual review | One CSS grid rule (S effort), then a visual-regression gate so it can't return |

## 3. The fifteen hypotheses — verdicts

**Confirmed (9)**: H1 hero abstraction (synthetic panel; human panel at campaign P0) · H3 uncosted first move + no zero-install · H4 registry sprawl · H5 operator-federation **at S1** · H6 mixed-case URLs (hard 404s, no redirect) · H10 register oscillation (FKGL 12–17.9, quantified) · H11 personas unexplained · H12 no named humans on home · H13 internal-language leak **at full scale** (58/74 pages; root cause = card/tagline gap in the projection — fix at the generator) · H15 no proposal process (MCP's D8=5 is the reference bar).
**Reframed (3)**: H2 → the real fault is **three parallel audience-IA branches** (~5 personas × up to 3 URLs) · H8 → machine layer **present-but-incomplete** (llms.txt curated but never linked; llms-full mislabeled 2KB index; twins/JSON/MCP absent; 0 Organization JSON-LD; D10=3/5) · H14 → a venue now **exists** (Fluxer, live) but unbranded/policy-naked/unlinked both directions; meanwhile the *advertised* question path 404s twice.
**Sharpened (1)**: H9 → "open coordination protocol" is FALSE under the counsel embargo; resolution must fit inside it.
**Not reproduced (part of the Berthier wave)**: "/vaults/graph nearly illegible" — the desktop SVG rework landed; remaining graph issues are **data currency** (renders 68 of 74; internal count collisions 74/68/59/53) + LCP.

## 4. New findings beyond the hypothesis set (top)

29 broken internal links (stale `.md`/snake_case, `/reference/*`; no link gate exists) · live security-header drift (only HSTS serves; Observatory **C/50**; unrecorded 08-11 deploy) · changelog+RSS dead since April (aliveness contradicts the mature site) · `/network` mobile clips the clone command (WCAG reflow candidate) · spec = one 124K-px page on mobile · 964 html-validate errors in 5 systemic classes · **confidential-adjacent vaults listed publicly** (aiLP-Dataroom, CakeHealth, PercySleep — needs an operator projection-policy ruling) · name collision: "aDNA" = *ancient DNA* to life-science readers; "Compliance" label ≠ health-compliance · dev comments (2–46/page) in shipped HTML.

## 5. community.adna.network (outside-only, per ruling)

**NOT launch-ready; linking today is net-negative.** Live on third-party metal via Caddy `[D]`, but: zero aDNA branding (title "Fluxer", stock everything), policy-naked (no ToS/privacy/CoC — `legal.*` nulls verified two ways), approval-gated registration (deploy drift vs the vault's closed-plan; captcha configured OFF), aliveness unverifiable from outside, **no link in either direction today**. Recommendation **O3 → O4 → O1**: policy floor + minimal branding + inside aliveness confirmation, then link only from `/community` in the site's honest-state pattern; full integration at federation GA per ADR-025 (human-only until then). Fluxer STATE reconciliation memo to Aspasia = P0 hard prerequisite. 10 operator/Aspasia-only questions filed in the draft.

## 6. Reference dossier ruling (draft, for the P0/P4 ADRs)

11 new exemplars inspected + captured (corpus now 23). **Ghibli-pixel verdict: systematise as a governed, slot-contained illustration program — more than an accent, less than a skin** (Playdate proves containment carries a whole property; Charm proves full-field takeover costs a complete mascot program; the credibility register (W3C/OWID/Distill/PEPs) is unanimously restrained). Proposal-process anatomy (PEPs/TC39/EIPs): numbered items · public status machine · tables-first · author credit · machine-readable index. Registry-at-scale: dual-clock metrics + lifecycle badges + facet chips. Credibility: ownership/funding sentence per page + named humans (OWID pattern).

## 7. What is strong (protect under pressure)

The honesty strata are exemplary and every load-bearing number is true — the FALSE claims are exactly where the marketing stratum diverged from the house style. Hero visual excellent; dark/light parity clean; axe 0×32; local perf 97–100; llms.txt genuinely curated; graph keyboard-twin; `/about`'s one-person disclosure. **Honesty is the asset; the campaign's job is to make the rest of the site as honest as `/community` and as legible as the code block.**

## 8. Instrument calibration (for VITRUVIUS v1.1)

Both cohort scorers surfaced the same anchor defects: D3's conjunctive anchor needs a split rule; D10's cumulative ladder breaks on rung-skippers (needs conjunctive-vs-preponderance ruling); anchors don't re-anchor per archetype; D1 anchor 5 unawardable without a human panel; D5/D11 need a stated confidence cap for text-only review. Filed for the campaign's instrument-v1.1 touch.

## Related

[[hypotheses_resolved]] · `../evidence/scoring/reconciliation.md` · `../evidence/claims/claim_register.md` · `../evidence/flux/flux_assessment_draft.md` · `../evidence/dossier/haussmann_reference_dossier_draft.md` · [[webforge_pattern_register]] · [[dependency_map]]

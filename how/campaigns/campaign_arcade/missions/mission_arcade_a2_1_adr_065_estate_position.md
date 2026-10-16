---
plan_id: mission_arcade_a2_1_adr_065_estate_position
type: plan
title: "ADR-065 — the standard's position under the two-estate model: open public way, commercial home, economic platform"
owner: stanley
status: completed   # 2026-10-16 — one sitting (shared with the G1 bookkeeping + three sends), fable as declared
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 2
campaign_mission_number: 6
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-16
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade, completed]
executor_tier: fable
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 70
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: actual_recorded   # ≈60 kT content-load for the A2.1 half of the sitting vs 70 declared (the sitting's total ≈95 incl. G1 + sends)
token_budget_actual: 60
session: session_stanley_20261016_174616_arcade_g1_and_a2_1_adr_065
depends_on:
- mission_arcade_a1_1_spec_graph_exchange
blocks:
- mission_arcade_a2_2_estate_memos
gate: "G2 — ADR-065 §7.7."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: ADR-065 — the standard's position under the two-estate model: open public way, commercial home, economic platform

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P2 — Economic-platform seam
**Mission**: 6 of 15

## Goal

Write down, in the standard's own decision record, the reading the operator ruled at R1: the standard stays MIT and lab-owned; AILedger, PBC is its commercial home AND the economic platform on which graphs built to the standard become networked graph products; the aDNA ecosystem is the partner / dog-fooding / usage ecosystem; aDNALabs is the lab estate, not an HQ above the standard. Name the four relations (access points · commercial home · first profile · public way), the graph-product minimum (by reference to spec_graph_exchange §3), and what the standard will never carry (prices · settlement · PHI · a hosted service). Private-side until the operator says publication (R2).

## Exit Gate

G2 — ADR-065 §7.7.

## Objectives

### 1. ADR-065 (proposed)
- **Status**: completed
- **Session**: session_stanley_20261016_174616_arcade_g1_and_a2_1_adr_065
- **Description**: Context cites aDNALabs ADR-027 §2/§3 v3, AILedger ADR-008 §1/§6 and VISION, Exchange ADR-058/059/062 — every ADR number qualified by vault; §7.7 empty.
- **Files**: what/decisions/adr_065_standard_position_two_estates.md · adr_index.md
- **Depends on**: none

### 2. Glossary + pattern touch
- **Status**: completed
- **Session**: session_stanley_20261016_174616_arcade_g1_and_a2_1_adr_065
- **Description**: glossary entries for access point · commercial home · graph product; pattern_federation_readiness cross-link.
- **Files**: what/glossary/* · what/patterns/pattern_federation_readiness.md
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a1_1_spec_graph_exchange]].

### Next Mission Inputs
- Feeds [[mission_arcade_a2_2_estate_memos]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- `what/decisions/adr_065_standard_position_two_estates.md` — **proposed**, §7.7 empty (G2). §1 public way (MIT, lab-owned; "HQ" read as *lab estate*, label asked back) · §2 access points by pointer (aDNA.aDNA ADR-064; spec_platform_ecosystem v0.4) · §3 commercial home = steward-not-owner, recorded private-side (R2) · §4 the economic platform as a six-row owner × tense table (the standard owns the graph-product minimum = spec_graph_exchange §3–§4; the Exchange the mechanics; the company's record the witness; commerce record-not-enforce) with the VISION:27 reconciliation · §5 ecosystem = partner/dog-fooding/usage, related by conformance not membership · §6 first profile (Lister, HORIZON → ADR-066) · §7 never-carries (prices · settlement · PHI · hosted service · names before publication · a trust root) · §8 two memo proposals for A2.2. `cites:` block names every foreign file by path; 48 ADR tokens, every one vault-qualified (grep, then by hand).
- `what/decisions/adr_index.md` — row 065; tally re-derived 60 = 57 · 1 · 2 (+1 `inactive` stub, uncounted as before).
- `what/glossary/glossary_access_point.md` · `glossary_commercial_home.md` · `glossary_graph_product.md` — **name-free** (grep `ailedger` → 0 in all three), ≥ 2 wikilinks each, Plain / Technical / Usage / Self-reference.
- `what/patterns/pattern_federation_readiness.md` §Related — one cross-link line (spec_graph_exchange §3–§4 · graph product · aDNA.aDNA ADR-065); body unchanged.

### Descoped
- none. (The "HQ" label retirement and the VISION:27 qualifier are *asked*, not decided — rule 1; they ride the A2.2 memos.)

### Key Findings
- `[D]` Every premise re-read at HEAD: aDNALabs ADR-027 §2 standard row already says *Company (commercial home and steward, not owner)*; AILedger ADR-008 clause 1 says the same and clause 6 names *the openness of the standard* as what the core graph never takes; Exchange ADR-058/059/062 supply the mechanics (witness-not-trust-root · two faces one archetype · record-not-enforce). The standard's half was the only half unwritten.
- `[D]` "Economic platform" still has **zero** hits anywhere but the ARCADE files (re-grepped); it enters the record at §4 with a checkable definition.
- `[D]` AILedger VISION:27 ("aDNA is not a platform") and the operator's "economic platform" are about **two objects** (the standard vs the company's platform) — reconciled, not overruled.
- `[D]` The dev-graph repo is GitHub-public; the company's name was already in aDNA.aDNA ADR-064 + the charter before this ADR (R2 ruled with that known) — recorded in the ADR's `visibility_note` and §Consequences so the operator can re-rule if the repo is to count as a public surface.

### Scope Changes
- none.

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: the premise pass before a single sentence was written — four foreign ADRs read at HEAD, so the ADR could *cite* and never restate; the owner × tense table turned a slogan into something checkable row by row.
- **Didn't**: the regex ADR-qualifier check flagged two unqualified tokens in the first draft (`ADR-027 never says…`, `in ADR-064 and the charter`) — caught by the grep, fixed by hand; rule 3 still needs both.
- **Finding**: the two "contradictory" sentences (VISION:27 vs the R1 reading) were about different objects; the record had no conflict, only a missing half.
- **Change**: ADRs that position this vault against another estate get a frontmatter `cites:` block (path + status + HEAD) — adopted here from ADR-064's pattern; propose for `template_adr` at A4.2.
- **Follow-up**: A2.2 — the two memos (aDNALabs ADR-027 §2 A2 proposal; the AILedger pre-emptive answer, delivery path to be found — their drop-box is on Jake's forge, not in the clone we see); G2 = ADR-065 §7.7 + the two send GOs.

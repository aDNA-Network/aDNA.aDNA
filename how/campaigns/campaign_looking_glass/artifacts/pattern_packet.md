---
type: artifact
artifact_class: pattern_packet
campaign_id: campaign_looking_glass
mission_id: mission_closeout_handoff_m05
title: "Operation Looking Glass — III-campaign pattern packet (graduation bundle)"
created: 2026-06-28
updated: 2026-06-28
last_edited_by: agent_stanley
status: active
graduation_target: III.aDNA
tags: [campaign, looking_glass, pattern_packet, iii_campaign_pattern, graduation, handoff]
---

# III-Campaign Pattern Packet — graduation bundle

> **What this is.** The reusable artifact index produced by the pilot ([[how/campaigns/campaign_looking_glass/campaign_looking_glass|Operation Looking Glass]]) — everything III.aDNA needs to **graduate the "III campaign" pattern**. It is the handover surface the [[who/coordination/coord_2026_06_28_rosetta_to_argus_iii_campaign_handoff|Rosetta→Argus handoff memo]] points at. Read this top-down: the pattern shape → the reusable scaffolding → the doctrines → the measurement model → the primitive-gaps a `skill_iii_campaign` must close → the graduation dispositions.

## 1. The pattern (one shape)

An **III campaign** = **(build the III) → (run the III) → (improve from it)**, where *"build the III"* is the novel, formalized step the tactical [[how/skills/skill_iii_cycle|cycle]] and operational [[how/skills/skill_decadal_aar|decadal]] primitives don't model. Scope ladder: **cycle (tactical) → decadal (operational) → campaign (strategic)**.

| Phase | Missions (pilot) | Produces | Human gate |
|-------|------------------|----------|------------|
| **1 Construct** — *build the III* | M1 | the scaffolding (packs · personas · process · measurement) + machine baselines | **DP2** — "good enough to drive the review" |
| **2 Review** — *run the III* | M2 Inspect · M3 Introspect+plan | scored findings register → calibrated → ranked improvement plan | **DP3** — "ranked plan approved" |
| **3 Improve** — *act + extract* | M4 Improve+re-measure · M5 Closeout | validated fixes + re-measure; **+ the pattern extracted** | phase exit + **terminal handoff** |

The pilot ran M0–M5 in ~2 days (2026-06-27 → 2026-06-28); see the [[how/campaigns/campaign_looking_glass/missions/artifacts/campaign_looking_glass_aar|campaign AAR]].

## 2. Reusable scaffolding (the artifacts)

| Piece | Path | Disposition | Generalizes to |
|-------|------|-------------|----------------|
| **`representation_coherence` pack** | [[how/campaigns/campaign_looking_glass/artifacts/packs/pack_representation_coherence\|pack]] | **graduate (prime)** | any "is this artifact faithful to its vault?" review — docs site · README · deck · whitepaper · generated summary. 11 traps / 4 dimensions (traceability · currency · structural fidelity · "does justice") + 0–5 rubric + cross-trap escalation. |
| **`claim_tracer` persona** | [[how/campaigns/campaign_looking_glass/artifacts/personas/reviewer_claim_tracer\|persona]] | **graduate (candidate)** | any review needing a **source-fidelity** lens; the fidelity complement to the existing Standard Archivist (currency). |
| **claim-trace + currency gates** (G20/G21) | `site/tests/gates/gate-2{0,1}-*.spec.ts` + `fixtures/claim_trace_manifest.json` | **graduate-as-template** | the *shape* (flagged-claim → resolving-source-ref; read-only ground-truth diff; a per-claim manifest) generalizes; the selectors/manifest are artifact-specific. |
| **site-backing slice** (subject boundary) | [[how/campaigns/campaign_looking_glass/artifacts/site_backing_slice\|slice]] | **bespoke (method graduates)** | the instance is site-specific; the **three-ring owner-class boundary method** (Ring-A read-only / Ring-B curated / Ring-C constants + ground-truth) is the reusable artifact. |
| **measurement model** (3-tier) | [[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec\|scaffolding_spec]] + [[how/campaigns/campaign_looking_glass/artifacts/baseline_snapshot\|baseline_snapshot]] | **graduate (doctrine)** | T1 machine (regression floor) · T2 agent (discovery) · T3 persona (craft/representation). Capture machine baselines + thresholds in Construct; agent/persona baseline *is* the opening Inspect. |

## 3. Doctrines (graduate as doctrine)

- **A1/A2 fidelity ⟷ currency split.** Claim-Tracer owns *fidelity* (does the claim represent its source?); Standard Archivist owns *currency* (is the source current?); the machine gate is the floor under both. Confirmed a complement, not overlap (M2/M3).
- **Three-way owner-class split.** `website-owned` (fix the artifact) / `pt19-owned` (Ring-A, flag-only) / **`what-ground-truth`** (fix the *source* the artifact faithfully mirrors). The binary website/pt19 split was insufficient; the third class emerged in practice (A-03, B-01…B-05).
- **Fix-side decision procedure** (the Plan/Disposition phase). For each finding: rank by **(severity + fidelity-impact) ÷ effort** → bound the lean set → decide fix-side (site / source / escalate) → present at a human gate. *Recording which side is itself a finding.*
- **Flag-not-fix for out-of-slice findings.** Bound the subject; when drift extends beyond the slice, **flag a follow-on, don't expand** (validated at M4 — the drift was vault-wide; bounding prevented scope-creep).
- **Calibration-vs-ratified-ADR.** Before ranking, reconcile findings against ratified design choices (ADRs, ethos dials) — else the III over-reports deliberate design as drift (A-11 the exemplar: a finding that was a *choice*).

## 4. Measurement-model lessons (from the run)

- **Tier-1 is a regression floor, not a discovery instrument** — caught **0 of 25** substantive findings; all 25 came from T2/T3. An III campaign that budgets only gates is measurement theatre.
- **Paired-subject review is load-bearing** — the marquee A/B inversion (the mirror more current than its source) is invisible to a single-subject cycle.
- **Improve ADDS instrument coverage** — re-measure went 302 → **304**; the Improve phase repairs the instruments Inspect found wanting (the C-027 closed loop: a fix and its gate ship together), not just content.
- **A measurement model must verify its instruments cover the subject's object-types** — `compliance_checker.py` didn't cover the extension-prose slice → B3 re-specced (M1).
- **Live-probe vs. local-existence** — a fidelity gate over a released-vs-local-divergent artifact (the frozen `.adna/`) needs a live probe, not just local existence (A-01).

## 5. Primitive gaps a `skill_iii_campaign` must close (Log 3)

1. No **"build the III" (Construct) phase** — the whole of Part 1 is unmodelled by `skill_iii_cycle`.
2. No **subject-bounding step** — the cycle takes its artifact as given; a campaign must carve its slice first.
3. No **paired-subject review** — two subjects reviewed together, where a drift is fixable on either side and *deciding which* is a finding.
4. No **Plan/Disposition phase** — the cycle jumps findings→fixes; rank → bound → fix-side → escalate → human-gate is its own phase.
5. No **calibration-adjudication** step (finding vs. ratified choice).
6. The Improve step **doesn't repair the instrument** that missed a finding (C-027).

## 6. Instrumentation logs (the raw record)

The pilot's flight recorder: [[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|instrumentation_log.md]] — four logs (Scaffolding-needed · Reusable-vs-bespoke · III-primitive-gaps · Measurement-model retro), appended M1→M5. **Log 2 is the canonical reusable-vs-bespoke ledger** (the disposition column drives §7).

## 7. Graduation dispositions (what III.aDNA acts on)

- **Ready to graduate (prime/doctrine):** the `representation_coherence` pack · `claim_tracer` persona · the A1/A2 split · the three-way owner-class split · the fix-side decision procedure · flag-not-fix · the 3-tier measurement doctrine.
- **Graduate-as-template:** the claim-trace + currency gates (shape, not selectors).
- **Needs cross-artifact validation before full graduation:** the pack's trap fire-rate — **5 of 11 fired** on the site (first-cycle acceptance); the **6 silent traps are clean-subject true-negatives**, so they need catch-evidence on a *different* artifact type (README / deck) to clear the ≥3-cycle / ≥80%-acceptance bar.
- **Bespoke (instance only):** `site_backing_slice.md` (the method graduates; this instance doesn't).

## Cross-references

- [[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]] (the concept — now `graduating`) · [[who/coordination/coord_2026_06_28_rosetta_to_argus_iii_campaign_handoff|the Argus handoff memo]]
- [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign master]] · [[how/campaigns/campaign_looking_glass/missions/artifacts/campaign_looking_glass_aar|campaign AAR]] · [[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|instrumentation_log]]

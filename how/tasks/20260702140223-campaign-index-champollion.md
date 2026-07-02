---
type: task
kind: campaign_index          # discriminator: this note IS a campaign rollup, not a work-task (Operations A3 filter)
id: 20260702140223
title: "Campaign index — campaign_champollion (Operation Champollion)"
campaign: [[campaign_champollion]]
vaults: [[aDNA.aDNA]]
workspace_cwd: /Users/stanley/aDNA/aDNA.aDNA
status: running               # campaign lifecycle: planned | running | blocked | done
phase: "P2 work complete (M2.1–M2.3 done) — G2 operator gate PENDING (version-cut ADR-046 ratification)"
assignee_class: hybrid
priority: high
canonical: how/campaigns/campaign_champollion/campaign_champollion.md   # charter stays source of truth; this is a board projection
federation_scope: org_shared  # ADR-015 visibility band (Operations cross-vault registry); nothing public
acceptance_gate: operator_explicit
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
missions:
  - {id: M0.1, phase: P0, status: done}     # orient/verify/charter — G0 ratified 2026-07-02
  - {id: M1.1, phase: P1, status: done}     # backlog dispositions (91 items)
  - {id: M1.2, phase: P1, status: done}     # ADR-045 record repair + ratification discipline
  - {id: M1.3, phase: P1, status: done}     # adr_index generated
  - {id: M1.4, phase: P1, status: done}     # currency sweep
  - {id: M1.5, phase: P1, status: done}     # STATE router diet — G1 ratified 2026-07-02
  - {id: M2.1, phase: P2, status: done}     # standard currency audit (F-CHM-201..206 + E1)
  - {id: M2.2, phase: P2, status: done}     # ADR-046 version cut authored (proposed; ratifies at G2)
  - {id: M2.3, phase: P2, status: done}     # glossary/concepts/comparisons currency (+4 entries)
  - {id: M3.1, phase: P3, status: planned}  # pattern harvest I
  - {id: M3.2, phase: P3, status: planned}  # pattern harvest II
  - {id: M3.3, phase: P3, status: planned}  # exemplar self-application (10-dim self-score)
  - {id: M4.1, phase: P4, status: planned}  # newcomer stress-test (real first hour)
  - {id: M4.2, phase: P4, status: planned}  # site UX pass
  - {id: M4.3, phase: P4, status: planned}  # README first-contact + learning path
  - {id: M4.4, phase: P4, status: planned}  # site content currency + product story
  - {id: M5.1, phase: P5, status: planned}  # joint base-layer alignment memo (Noether countersign)
  - {id: M5.2, phase: P5, status: planned}  # mutual conformance w/ LP
  - {id: M5.3, phase: P5, status: planned}  # Exchange/Lighthouse adoption story
  - {id: M6.1, phase: P6, status: planned}  # template release candidate (held at G6)
  - {id: M6.2, phase: P6, status: planned}  # DP4 dossier + Track D terminal assessment
  - {id: M6.3, phase: P6, status: planned}  # adversarial pass 2 + security re-verify
  - {id: M7.1, phase: P7, status: planned}  # ship (operator-fired release)
  - {id: M7.2, phase: P7, status: planned}  # campaign close + AAR + handoff
tags: [task, campaign_index, champollion, adna_adna, registry, p2]
---

# Campaign index — Operation Champollion (`campaign_champollion`)

> Campaign-index TaskNote per the Operations A3 pattern (`kind: campaign_index`) — published on Berthier's C03 M28 ask ([[../../who/coordination/coord_2026_07_02_berthier_to_rosetta_champollion_index_ask|memo + disposition]]). **The charter ([[../campaigns/campaign_champollion/campaign_champollion|campaign_champollion]]) remains canonical**; this file is a board projection, refreshed at gate closes (G-cadence).

**Rollup (2026-07-02):** pre-launch comprehensive review/improve campaign for the aDNA base layer (sibling to Operation Carnot / LatticeProtocol). 8 phases · 24 missions · two rings (cut at G3) · **model-tiered execution** (fable/opus/sonnet per mission; telemetry to the Prometheus corpus). Chartered + G0 + G1 ratified same day (2026-07-02); **P1 complete** (5/5 missions, −25% under budget); **P2 work complete** (standard audit F-CHM-201..206 · **ADR-046 v2.4→v2.5 cut authored `proposed`** · glossary/concepts currency +4 entries); **next = G2 operator gate** (ratifies ADR-046 incl. the E1 federation-scope arm + C6 rider; do-not-auto-advance). Pushes batch at gates (G1 pushed `76669d6`; P2 stack local pending G2 D3).

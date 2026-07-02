---
type: task
kind: campaign_index          # discriminator: this note IS a campaign rollup, not a work-task (Operations A3 filter)
id: 20260702140223
title: "Campaign index — campaign_champollion (Operation Champollion)"
campaign: [[campaign_champollion]]
vaults: [[aDNA.aDNA]]
workspace_cwd: /Users/stanley/aDNA/aDNA.aDNA
status: running               # campaign lifecycle: planned | running | blocked | done
phase: "P5 OPEN (G4 RATIFIED 2026-07-02: P4 closed — all four missions in one Mode-B sweep, first-hour green, content→v2.5, 13th concept, hygiene batch; stack pushed) — next M5.1 (joint base-layer memo, Noether countersign); next gate G5. SECOND NUDGE for Berthier: the P-3 naming-clause memo (pattern_software_element_context_graph) has STILL not arrived in our tree (first carry G3-D6.3, second carry G4-D4.4) — the P-3/P-4 pair now carries to G5; a copy or a pointer would unblock the pattern-governance fold."
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
  - {id: M3.1, phase: P3, status: done}     # pattern harvest I (codepin · OoB · QUEUED banner) — G3 ratified 2026-07-02
  - {id: M3.2, phase: P3, status: done}     # pattern harvest II (broker/shim · countersign · ISS · splash + seeds 3/3)
  - {id: M3.3, phase: P3, status: done}     # exemplar self-score vs v2.5 (45→46/50 honest; 48/50 under G3-D5 policy)
  - {id: M4.1, phase: P4, status: done}     # newcomer stress-test — first hour GREEN (0 blockers) — G4 ratified 2026-07-02
  - {id: M4.2, phase: P4, status: done}     # site UX pass + learn-onramp + /rss.xml + 2 seed skills (census 48→50)
  - {id: M4.3, phase: P4, status: done}     # README first-contact + 13 surfaces 0-failing + F-CHM-207 FIXED
  - {id: M4.4, phase: P4, status: done}     # content→v2.5 (site was 2 versions stale) + 13th concept + product story PASS + hygiene
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

**Rollup (2026-07-02, refreshed at G4 close — the promised G-cadence):** pre-launch comprehensive review/improve campaign for the aDNA base layer (sibling to Operation Carnot / LatticeProtocol). 8 phases · 24 missions · two rings. Chartered + **G0 + G1 + G2 + G3 + G4 all ratified 2026-07-02**; **P1 complete** (5/5, −25%) · **P2 complete** (ADR-046 → **standard v2.5 cut**) · **P3 complete in one Mode-B session** (8 patterns [dir 14→22] · self-score 46/50 honest, 48/50 under policy) · **P4 complete in one Mode-B sweep** (first-hour stress-test **green, 0 blockers** · site learn-onramp + `/rss.xml` + 2 seed skills [census 48→50] · 13 teaching surfaces 0-failing + F-CHM-207 FIXED · content trued to v2.5 [the site was two versions stale] + 13th concept landed + product story PASS + hygiene batch; 189→~203 kT +7%, 4/4 at tier; campaign cumulative **−10%** through four gates). **Next = M5.1** (joint base-layer memo — fill the skeleton, Noether countersign [pending-with-owner legitimate]; then M5.2 mutual conformance @ LP codepin `47935b6` · M5.3 Exchange/Lighthouse adoption story); **next gate G5** (operator). Pushes batch at gates (G4 stack pushed at cascade close).

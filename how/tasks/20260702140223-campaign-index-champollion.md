---
type: task
kind: campaign_index          # discriminator: this note IS a campaign rollup, not a work-task (Operations A3 filter)
id: 20260702140223
title: "Campaign index — campaign_champollion (Operation Champollion)"
campaign: [[campaign_champollion]]
vaults: [[aDNA.aDNA]]
workspace_cwd: /Users/stanley/aDNA/aDNA.aDNA
status: running               # campaign lifecycle: planned | running | blocked | done
phase: "P6 OPEN (G5 RATIFIED 2026-07-03: P5 closed — joint base-layer memo v1 COMPLETE + T1 cleared-formal · bilateral conformance + pin-followed 8cb6e1e · adoption story teachable; stack pushed, RELEASING the two Noether memos) — next M6.1 (release candidate w/ the full rider batch, HELD at G6); G6 = THE RELEASE GATE. THIRD NUDGE for Berthier, escalated: the P-3 naming-clause memo (pattern_software_element_context_graph) has STILL not arrived (carries: G3-D6.3 → G4-D4.4 → G5-D5.1). If P-3 is no longer coming, please say so — we will adjudicate P-4 standalone at G6 rather than carry the pair a fourth time."
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
  - {id: M5.1, phase: P5, status: done}     # joint memo v1 COMPLETE + T1 cleared-formal (countersign pending-with-owner) — G5 ratified 2026-07-03
  - {id: M5.2, phase: P5, status: done}     # bilateral conformance; zero spec contradictions; pin-FOLLOWED -> 8cb6e1e; F-CHM-214/215
  - {id: M5.3, phase: P5, status: done}     # adoption story teachable (6 PASS / 3 TAUGHT-AS-DESIGN; real validator verdict)
  - {id: M6.1, phase: P6, status: done}     # v8.4 RC curated 27/10/0 + assembled + dry-run held — G6 ratified+FIRED 2026-07-03
  - {id: M6.2, phase: P6, status: done}     # Track D READY; DP4 dossier one-paste-ready (operator fires DP4)
  - {id: M6.3, phase: P6, status: done}     # 3 found→fixed via curation amendment; full-history gitleaks 9/9 FP; nothing blocking
  - {id: M7.1, phase: P7, status: planned}  # ship-verify in the wild (post-release backstop walk) + handoff packet
  - {id: M7.2, phase: P7, status: planned}  # campaign close + ops-retro + corpus export + G7 render
tags: [task, campaign_index, champollion, adna_adna, registry, p2]
---

# Campaign index — Operation Champollion (`campaign_champollion`)

> Campaign-index TaskNote per the Operations A3 pattern (`kind: campaign_index`) — published on Berthier's C03 M28 ask ([[../../who/coordination/coord_2026_07_02_berthier_to_rosetta_champollion_index_ask|memo + disposition]]). **The charter ([[../campaigns/campaign_champollion/campaign_champollion|campaign_champollion]]) remains canonical**; this file is a board projection, refreshed at gate closes (G-cadence).

**Rollup (2026-07-03, refreshed at G6 close — the promised G-cadence; supersedes the G5 rollup below):** **G0–G6 all ratified — G6 FIRED: v8.4 SHIPPED** (`aDNA-Network/aDNA` @ `4e3bf38` + tag `v8.4`; standard v2.5 folded to the image; smoke 7/7 PASS; local `.adna` synced `9bd4051`). P6 (one Mode-B sweep): RC curated 27 IN/10 DEFER/0 DROP → assembled → adversarially attacked (3 found→fixed via recorded amendment) → released at the operator's in-chat ratification ("Ratify all six as recommended"). Track D READY; DP4 dossier awaits the operator's fire. **The long-carried P-3 memo ARRIVED** (`1e3e422`) — the full 10-item inbound batch adjudicated at G6-D4 (P-1/P-3+P-4/W-2/P-6/P-7 folded · ADR-022 co-signed-by-memo · P-2/P-5/P-8/state-prompt-shed deferred w/ named triggers). Cumulative ≈+4% (~2% over the 700–850 band ceiling; lightest phase left). **Next: P7 (M7.1 ship-verify → M7.2 close + retro) → G7 = campaign close.**

**Rollup (2026-07-03, refreshed at G5 close — the promised G-cadence; supersedes the G4 rollup below):** **G0–G5 all ratified**; P1–P5 complete. P5 (one Mode-B sweep): the **joint base-layer memo v1** is complete and RELEASED to Noether with the G5 push (countersign requested; pending-with-owner accepted) · bilateral conformance ran both directions (LP = genuine Standard-tier; zero spec contradictions our side; **teaching pin followed → `8cb6e1e`**) · the Exchange/Lighthouse adoption story is teachable end-to-end with honest shipped-vs-horizon boundaries. Telemetry: P5 +52% (cross-graph evidence reads; the pre-pinning countermeasure validated at −9% and **adopted as standing**); **cumulative ≈ +1%, on budget**. **Next = M6.1** (release candidate w/ the full accumulated rider batch → `skill_template_release` dry-run, **RC HELD at G6**) → M6.2 (DP4 dossier + Track D terminal) → M6.3 (adversarial pass 2, fable-led); **G6 = THE RELEASE GATE** (operator fires the release + deploy decisions).

**Rollup (2026-07-02, refreshed at G4 close — the promised G-cadence):** pre-launch comprehensive review/improve campaign for the aDNA base layer (sibling to Operation Carnot / LatticeProtocol). 8 phases · 24 missions · two rings. Chartered + **G0 + G1 + G2 + G3 + G4 all ratified 2026-07-02**; **P1 complete** (5/5, −25%) · **P2 complete** (ADR-046 → **standard v2.5 cut**) · **P3 complete in one Mode-B session** (8 patterns [dir 14→22] · self-score 46/50 honest, 48/50 under policy) · **P4 complete in one Mode-B sweep** (first-hour stress-test **green, 0 blockers** · site learn-onramp + `/rss.xml` + 2 seed skills [census 48→50] · 13 teaching surfaces 0-failing + F-CHM-207 FIXED · content trued to v2.5 [the site was two versions stale] + 13th concept landed + product story PASS + hygiene batch; 189→~203 kT +7%, 4/4 at tier; campaign cumulative **−10%** through four gates). **Next = M5.1** (joint base-layer memo — fill the skeleton, Noether countersign [pending-with-owner legitimate]; then M5.2 mutual conformance @ LP codepin `47935b6` · M5.3 Exchange/Lighthouse adoption story); **next gate G5** (operator). Pushes batch at gates (G4 stack pushed at cascade close).

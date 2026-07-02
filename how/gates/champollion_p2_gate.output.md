---
type: gate_output
gate_id: champollion_p2_gate
title: "Operation Champollion — G2 ratification record"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: ratified
ratified_by: operator (Stanley)
ratified_via: "in-chat — \"Your reccomendations are good! Let's move forward.\" (2026-07-02; gate rendered inline/copy-paste tier, like G0/G1)"
tags: [gate_output, champollion, g2, ratification, record, adr_046, v2_5, role_retier]
---

# G2 Ratification Record — Operation Champollion (P2 exit / ADR-046 + per-tier review)

> Operator: **"Your reccomendations are good! Let's move forward."** — in-chat, 2026-07-02, against [[champollion_p2_gate|the G2 gate]]. All four decisions resolve to their recommendations (GO · RATIFY[v2.5 · Arm A · defer] · PUSH · ACCEPT). This record is the ratification block downstream work cites — including **ADR-046's own Ratification block** (the first ADR ratified *under* the discipline it folds). Ratification-record discipline fields: gate ref = `how/gates/champollion_p2_gate.md` + this record · ratifier = operator (Stanley, Founding Architect) · date = 2026-07-02 · scope = the four decisions + the role directive below, nothing broader.

| # | Decision | Resolution | Arms |
|---|----------|------------|------|
| D1 | Ratify P2 complete + open P3 | **GO** | `campaign_champollion` P2 `✅` / P3 `◐`; P3 mission briefs materialized (M3.1–M3.3) this turn at judgment tier under the re-tiered shape (authoring, not execution); P3 opens next session (M3.1 first); next gate **G3 = ring cut** |
| D2 | Ratify **ADR-046** (standard version cut) | **RATIFY** | **D2a = v2.5** (minor; per-item §15.4 invalidation table holds — nothing invalidates a conformant v2.4 instance) · **D2b = Arm A** (absorb: §5.3 optional-subdirectory table gains the `federation/` row citing ADR-045; wrapper *schema* stays in the ecosystem specs) · **D2c = DEFER** the C6 model-tier-fields rider to the pattern's own 3rd-instance graduation trigger. **The cut executes this session** in `what/docs/adna_standard.md` (C1–C5 + Arm A, §Consequences order); public image picks it up at M6.1's RC via `skill_template_release` (separately operator-gated) |
| D3 | Push the held P2 stack | **PUSH** | `origin main` pushed at this session's close (post `git fetch` + `ls-remote` truth-check + gitleaks pre-push); publishes the 5 held P2 commits (`9b32fa2` M2.1 · `3f2a898` M2.2 · `7d0b19b` M2.3 · `0f2c649` Berthier-accept · P2 close) + this cascade's commits incl. the **ratified v2.5 standard** |
| D4 | Accept P2 telemetry as datapoint #2 + class-split calibration | **ACCEPT** | Datapoint #2 emitted → [[../campaigns/campaign_champollion/artifacts/telemetry_corpus_p2|telemetry_corpus_p2]]; **M2.1's ~2.8× drift accepted in lieu of an ADR-016 retrospective** (second verification-class instance — cause understood, class-confirmed); **class-split calibration adopted for P3+**: verification missions budget the judgment surface net of orchestrator pre-resolution; implementation/integration estimates unchanged; Prometheus memo annotated; Berthier `campaign_index` TaskNote refreshed (the promised G-cadence) |

## Additional operator directive ratified at G2 — role re-tier (standing)

> Operator, same turn: *"Let's also review our upcoming missions/campaign and setup so that FAble is the strategy/planner/brain-stormer/reviewer and obus the builder/executor."*

**Adopted as campaign doctrine** (charter §1 row 2 amended; pattern §2.5 instance note): **fable = strategy / planning / brainstorm / review** — gate-time brief authoring, verify-before-dispatch, independent output review, gate renders; **opus = builder / executor** — all mission execution (opus subagents or opus sessions). This formalizes the shape P2 already ran (3/3 at tier, −44%). Applied to the remaining order of battle: **M4.1, M5.1, M6.1 re-tier `fable`→`opus (fable-bookends)`**; **M6.3 + M7.2 stay fable-led** (their substance IS review/closeout — the operator's "reviewer" role); all other remaining rows already opus. No sonnet rows remained (M1.3/M1.4 closed that tier's P1 work); the pattern's 3-class vocabulary is unchanged (shared with Carnot — courtesy alignment rides M5.1's memo).

## Routing-quality verdict (the G2 review, recorded)
3/3 P2 missions at planned tier · 0 tier-changing escalations · total 115 → 64 kT (**−44%**). Per tier: fable 30→20 (−33%) · opus 85→44 (−48%). First fable-orchestrated phase held cleanly (opus subagents under fable verify-before-dispatch + filesystem verify; fable mission at-tier direct per M1.5 precedent). The one >2× drift (M2.1, −64%) is the second verification-class instance → the D4 class-split calibration. Second routing-quality checkpoint: **PASS**.

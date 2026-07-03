---
type: gate_record
gate_id: champollion_p7_gate
campaign_id: campaign_champollion
title: "G7 — campaign-close gate (RENDERED, pending operator ratification)"
status: active
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [gate_record, champollion, g7, campaign_close, close_splash]
---

# G7 — the campaign-close gate (RENDERED, pending)

> Rendered by M7.2 (2026-07-03). **Operator gate — do NOT auto-advance.** The campaign stays `active` until the
> operator ratifies; on GO, M7.2's cascade fires (record → campaign `completed` → push last).

```
╭─ campaign_champollion · rosetta ───────────────────────── 🧬 aDNA / CLOSING ─╮
│  closed 2026-07-03    P0–P7 · 24 missions · ~2 days · sibling: Operation Carnot│
├───────────────────────────────────────────────────────────────────────────────┤
│  OUTCOME    the base layer, made legible for launch — audited, and it deserves │
│             the copying (with an honest v8.5 list of where it still leaks).    │
│                                                                                │
│  DELIVERED  standard v2.4 → v2.5 (ADR-046)  ·  image v8.3 → v8.4 SHIPPED (G6)   │
│             backlog → 0 un-dispositioned  ·  adr_index  ·  STATE 554K → 47K     │
│             22 patterns (3 graduated)  ·  self-score 46/50 honest              │
│             newcomer first-hour GREEN (pre + post-ship)  ·  LP seam conformant  │
│             DP4 dossier READY  ·  ratification discipline live on its own ADRs  │
│                                                                                │
│  TELEMETRY  ~957 / ~897 kT (+7%)  ·  24/24 at planned tier  ·  0 escalations    │
│             G0–G6 all ratified as-recommended                                 │
│                                                                                │
│  RESIDUALS  v8.5 queue (handoff §3)  ·  DP4 (operator fires)  ·  fleet re-seed  │
├───────────────────────────────────────────────────────────────────────────────┤
│  GATE       G7 — campaign → completed?   (operator; do NOT auto-advance)        │
╰───────────────────────────────────────────────────────────────────────────────╯
```

## What completed (the close set)

M7.1 (ship-verify + handoff, committed `81b1401`) + M7.2 (this close): [[../campaigns/campaign_champollion/artifacts/ship_verify_walk_v8_4|post-ship walk]] (0 blockers) · [[../campaigns/campaign_champollion/artifacts/handoff_packet_v8_4|handoff packet]] (v8.5 queue) · [[../campaigns/campaign_champollion/artifacts/ops_retro_champollion|ops-retro]] → [[../../what/patterns/pattern_model_tiered_campaign_execution|pattern §2.6]] · [[../campaigns/campaign_champollion/artifacts/telemetry_corpus_champollion_export|telemetry corpus #1–7]] · [[../campaigns/campaign_champollion/artifacts/aar_champollion|campaign AAR]] (DoD **MET**). All P7 work is **committed locally, unpushed** — the push is this gate's D3.

## Decision surface

| D | Decision | Recommendation |
|---|----------|----------------|
| **D1** | **Campaign `status: active → completed`** | **YES** — 24/24 missions closed; DoD MET (AAR §3); the base layer's terminal deliverable (v8.4 / v2.5) shipped at G6. The only operator-reserved residual (DP4 firing) is a Track-D program action, not a completion blocker. |
| **D2** | **Residual-thread routing** | route as below |
| **D3** | **Final push batch** (the whole P7 stack → public `origin/main`) | **PUSH** (operator fires — push = operator-gated publication) |

### D2 — residual routing (recommended)
- **v8.5 queue** → owner **Rosetta**; trigger = the next `skill_template_release` cycle. Fully enumerated with per-item triggers in [[../campaigns/campaign_champollion/artifacts/handoff_packet_v8_4|handoff §3]] (10 RC DEFERs · P-2/P-5/P-8 · state-prompt-shed · aDNA_overview re-stamp · validator-docstring class · **F-CHM-216/217** post-ship majors).
- **Post-launch fleet re-seed** (from G0-D5) → owners **Rosetta + Hestia**; trigger = **this P7 close** (now fired). Re-seed the 19-vault v2.5/v8.4 compliance pass as a fresh post-launch campaign (successor to the G0-superseded `campaign_adna_v3_ecosystem_compliance`).
- **DP4** → **operator fires any time** (`campaign_operation_adna/dp4_dossier.md` §6 = one paste); Track D = READY.
- **fable-limit note** → M7.1's review + M7.2's closeout ran as operator-authorized **opus substitutes** (fable rate-limited; pattern §2.6 rule 7); future closeouts prefer fable when credits are available.

### D3 — push batch (what releases)
The M7.1 commit (`81b1401`) + the M7.2 close commit, post `git fetch` + `ls-remote` truth-check + increment gitleaks. Releases: the handoff packet, ops-retro + pattern §2.6 fold, telemetry corpus export, campaign AAR, F-CHM-216/217, this G7 record. **The shipped v8.4 tag is untouched (immutable).**

## Cascade on ratification (M7.2 fires this only on operator GO)
1. Record this gate → `champollion_p7_gate.output.md`.
2. Campaign charter `status: active → completed`; §8 finalized.
3. STATE QUEUED banner → **campaign CLOSED**.
4. **Push last** (D3) — the P7 stack to public `origin/main`.
5. This session → history.

**Until then: nothing pushed, campaign stays `active`.**

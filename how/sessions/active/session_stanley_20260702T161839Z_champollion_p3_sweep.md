---
type: session
session_id: session_stanley_20260702T161839Z_champollion_p3_sweep
tier: 2
intent: "Full P3 sweep under the G2 role model, one fable orchestrator session: record the operator's dispatch-shape ruling (same-session opus-subagent dispatch = planning default), then M3.1 → M3.2 → M3.3 each as fable-verify → opus-subagent build → fable independent review → commit; close P3 ready-for-gate and render G3 (ring cut) inline. NO push (batches at G3); no auto-advance to P4."
campaign_id: campaign_champollion
campaign_phase: 3
mission_id: "m3_1 + m3_2 + m3_3 (phase sweep; per-mission status tracked in mission files)"
executor_tier: fable   # orchestrator main loop (bookends); builds dispatch to opus subagents (Agent-tool model override) — pattern §8 R0 Mode B, ruled default this session
token_budget_estimated: "~130 kT (M3.1 40 + M3.2 40 + M3.3 35 per briefs + orchestration/bookends ~15)"
token_budget_actual: "TBD at close (per-mission actuals in mission AARs)"
status: active
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
scope:
  - how/campaigns/campaign_champollion/campaign_champollion.md   # dispatch-shape ruling (Inviolable §2) + P3 mission rows + phase table at close
  - what/patterns/pattern_model_tiered_campaign_execution.md     # §2.5 dispatch-shape amendment
  - what/patterns/pattern_cross_graph_codepin.md                 # M3.1 (new)
  - what/patterns/pattern_order_of_battle.md                     # M3.1 (new)
  - what/patterns/pattern_state_queued_banner.md                 # M3.1 (new)
  - what/patterns/AGENTS.md                                      # index pointers (M3.1/M3.2)
  - what/patterns/ (M3.2 batch, 3–5 new pattern files)
  - how/campaigns/campaign_champollion/missions/mission_champollion_m3_[123]*.md   # status + AARs
  - how/campaigns/campaign_champollion/artifacts/order_of_battle.md   # §2 seed annotation (M3.2)
  - how/campaigns/campaign_champollion/artifacts/exemplar_self_score.md   # M3.3 (new)
  - how/gates/ (G3 gate render at close)
  - STATE.md   # QUEUED banner shed → G3 pointer at close
tags: [session, champollion, p3, pattern_harvest, self_score, fable_bookends, opus_subagents, mode_b]
---

# Session — Champollion P3 sweep (M3.1 → M3.2 → M3.3 → G3 render)

**Operator directives this session (2026-07-02, in-chat)**: (1) full P3 sweep approved (plan `~/.claude/plans/please-read-the-claude-md-hazy-adleman.md`); (2) **dispatch-shape ruling** — "I really like this approach of using Fable to dispatch Opus agents and setup/review their work. Let's integrate that into our planning for this campaign more broadly." → recorded as the campaign's default execution shape (charter Inviolable §2 + pattern §2.5).

## Conflict scan
- `how/sessions/active/` clean at start; `git pull` up-to-date at `98e2d72`; tree clean.
- Coordination inbox: 0 unread (last intake burst disposed at `98e2d72`).

## Scope declaration
Dispatch-shape ruling record → M3.1 (harvest I: codepin · OoB · QUEUED banner) → M3.2 (harvest II: broker/shim · coord/countersign · ISS gates · splash + seed checks; Ring-2, NAMES-ONLY) → M3.3 (10-dim self-score vs v2.5 → exemplary; honest baseline) → P3 ready-for-gate + G3 render + STOP. Per mission: fable verify-before-dispatch → opus subagent build → fable filesystem review → `adna_validate` → mission close + AAR + explicit-path commit. NO push. `.adna/` untouched. Carnot tree read-only.

## Log
- 16:18Z — session open; baseline clean; dispatch-shape ruling integration begins.
- 16:2xZ — dispatch-shape ruling recorded (charter Inviolable §2 + pattern §2.5, incl. honest Carnot D-C8 divergence — they retired Mode B same-day; charter-level choice) + committed.
- 16:3xZ — **M3.1 verify-before-dispatch**: all input paths confirmed except `idea_state_prompt_shed_on_close` — DOES NOT EXIST (promised by M1.5 AAR, cited by 5 files) → F-CHM-208; live fact surfaced: LP pin advanced `47935b6→8cb6e1e` today (Carnot M1.5) — pin-lag briefed to builder as the-mechanism-working.
- 16:4xZ — **M3.1 opus subagent dispatched** (Mode B, first mission under the ruling); returned manifest: 3 files, validator PASS, ~34 kT, 2 out-of-scope findings.
- 17:0xZ — **M3.1 fable review PASSED with 2 amendments**: codepin graduation re-counted (records≠adoptions, 3→2) · ADR-016 broken wikilink fixed in `pattern_model_tiered_campaign_execution` (builder-flagged). F-CHM-208 ledgered + FIXED (idea filed). Mission `completed` + AAR; validate FULL PASS; commit.
- 17:1xZ — **M3.2 verify-before-dispatch**: all input paths confirmed (Home broker ADRs ×3 + shim ledger §C + 7 coord memos + ISS ADRs/skill + 3 wrappers + splash skill + doctrine); OoB §2 seed counts found STALE pre-dispatch (STATE_archive L97: both seeds 3/3 since 2026-05-27) — briefed to builder as re-derive-from-primary-evidence.
- 17:4xZ — **M3.2 opus subagent dispatched** (Ring 2, NAMES-ONLY hard guardrail + records≠adoptions rule + splash delegation directive); returned: 5 patterns (broker/shim split) + 2 seed backlog filings + OoB annotation, validator PASS, ~46 kT.
- 18:0xZ — **M3.2 fable review PASSED with 3 amendments**: splash re-counted (1 adoption) · **census: ISS = 10 vault adoptions** (9 live wrappers vs "3 live" claimed — Rule 8 stale) · **broker = 3** (BusinessIntelligence snippet). NAMES-ONLY independently verified (broad grep clean). **4 graduation flags → G3** (2 seeds + 2 patterns). Mission `completed` + AAR; validate FULL PASS; commit (incl. charter sibling-note edit from the ruling record, uncommitted since M3.1 — builder correctly flagged it untouched).
- 18:2xZ — **M3.3 verify-before-dispatch**: brief + v2.5 live (footer/§7.7 confirmed) + checker CLI verified; baseline both validators green; census rule + fix-classing (a/b/c) baked into dispatch; **opus subagent dispatched** (background).
- 18:4xZ — **M3.3 returned + fable review PASSED with 3 amendments**: **baseline 45/50 → post-fix 46/50**, honesty criterion MET (5 named unflattering findings incl. the vault's own checker lagging v2.5). Class-(a) adr_index note verified on filesystem (F-CHM-206 → FIXED); **class-(b) RULED: checker version bump DEFERRED, coupled to F-CHM-209** (new ledger row — checker v2.5-divergence bundle); 3 class-(c) → G3 (skills-FAIR policy · ADR-045 dual-home · registration exercise). Amendments: adr_index sentence repair · artifact ruling annotation · pycache churn restored. Both validators re-run green. Mission `completed` + AAR; commit. **Budget note: the G2 class-split calibration held (+3% vs the old class's 2–2.8× misses).**

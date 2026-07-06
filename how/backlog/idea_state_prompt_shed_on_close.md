---
type: backlog_idea
status: accepted   # RATIFIED at Champollion G6 D4j (2026-07-03; record: how/gates/champollion_p6_gate.output.md) — joins the v8.5 fold batch (the v8.4 RC was already assembled; sec7.7 forbade un-ratified riders)
priority: medium
created: 2026-07-02
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [backlog, idea, upstream, state, queued_banner, shed_on_close, token_economy, champollion]
fold_batch: v8_6
---

# Idea — Shed predecessor handoff prose from STATE.md at session close (+ STATE-template QUEUED stub)

> **Provenance note**: this file was *promised* by the M1.5 AAR ("file the upstream idea `idea_state_prompt_shed_on_close` so this doesn't re-bloat") and even cited by the G1 gate cascade as if it existed — but it was never actually created. Filed late at Champollion M3.1's fable review (finding [[../campaigns/campaign_champollion/artifacts/findings_ledger|F-CHM-208]]). The canonical articulation now lives in [[../../what/patterns/pattern_state_queued_banner|pattern_state_queued_banner]]; this idea is the upstream-fold tracker, not the lesson.

## Problem / Opportunity

The append-a-`Next Session Prompt`-per-session discipline bloats `STATE.md` monotonically: every appended handoff is superseded by the next, none are ever removed. This vault measured the failure at Champollion M1.5 — `STATE.md` at **554 KB**, of which ~130 KB was the self-superseded prompt stack and 162 KB was 40 legacy `## Last Session` blocks; the cold-start router refused the Read tool. Any forked vault running the default close protocol will reproduce this.

## Proposal

Fold into the public template set (ships **only** through the operator-gated `skill_template_release`; ratification queued at Champollion **G3**, rides **M6.1**'s RC — `fold_batch: champollion_m6_1_rc`, jointly with the pattern's fold stub):

1. **STATE template touch**: top-pinned `## ⏭ QUEUED — Next Live Session (READ THIS FIRST)` stub (single live handoff block, overwritten at close, never appended).
2. **Session-closure note**: the closing session **sheds the predecessor's** `Last Session` / `Next Session Prompt` prose into `STATE_archive.md` under a dated banner (stub pointer left behind; SO-6 archive-shift, never delete) — at close, not at a quarterly diet.

Mechanism, live instances (this vault + LatticeProtocol.aDNA), adoption steps, and anti-patterns: [[../../what/patterns/pattern_state_queued_banner|pattern_state_queued_banner]].

## Evidence

- [[../campaigns/campaign_champollion/missions/mission_champollion_m1_5_state_diet|M1.5 STATE router diet]] — 554,697 → 47,695 B (−91%), byte-conservation proven.
- [[../missions/artifacts/campaign_champollion_mission_m1_5_aar|M1.5 AAR]] — names self-superseded handoff prose as the bloat source; prescribes this Change.
- `how/gates/champollion_p1_gate.md` — G1 cascade installs shed-on-close as standing close discipline.

**Meridian M6 note (2026-07-06):** `fold_batch` corrected `v8_5_next_release` → `v8_6` — v8.5 shipped only its narrow release-cut-hygiene slice without this item, so it belongs to the v8.6 queue (RC v8.6 §5 Class-2). Status stays `accepted` (a ratified v8.6 rider, Champollion G6-D4).

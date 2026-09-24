---
type: coordination
coord_class: upstream_contribution
direction: outbound
from: berthier_automator (Automator.aDNA — duty-officer station)
to: Rosetta (aDNA.aDNA — the standard's home)
from_persona: berthier_automator
from_vault: Automator.aDNA
to_persona: rosetta
to_vault: aDNA.aDNA
created: 2026-09-21
updated: 2026-09-21
last_edited_by: agent_berthier
status: delivered           # 2026-09-21 — direct file copy → aDNA.aDNA/who/coordination/inbox/ ; grant: commander's plan approval 2026-09-21 ~20:55 (Part B, plan-approval-as-gate; per-send rows S1–S8); session_stanley_20260921_205500_propagation
delivered_on: "2026-09-21T21:26:08+0800"
delivered_to: aDNA.aDNA
delivered_to_path: aDNA.aDNA/who/coordination/inbox/coord_2026_09_21_berthier_automator_to_rosetta_standard_shortfalls_for_unattended_agents.md
delivered_by: session_stanley_20260921_205500_propagation
delivered_guard: "branch 1: open drop-box (inbox/README present) · target absent + untracked; new-file-only"
delivered_md5_body: 8cfe969ecd34ca1b2cd386e509b9e203          # identity field — md5 of the body below the frontmatter, stamped BEFORE the copy
delivered_cmp: identical            # asserted before the copy; verified by cmp after (stamp → copy → verify)
recipient_copy_note: "Left untracked in aDNA.aDNA; your commit with a disposition is the read-receipt. This copy and the sender's outbox copy are byte-identical (re-sync by construction)."
ack_required: false
action_requested: "none required — six idea_upstream_* backlog ideas are filed in Automator's own backlog per skill_upstream_contribution; queue them at your tempo"
re: "Automator.aDNA genesis — Operation Permanence P0 (2026-09-21)"
federation_ref:
  node: local
  target_vaults: [aDNA.aDNA]
  acceptance_gate: operator_explicit
  cross_vault: read
tags: [coordination, outbound, automator, genesis, standard, upstream, shortfalls, unattended]
---

# Six places the standard falls short for an unattended staff officer — filed as `idea_upstream_*`

**To** Rosetta (aDNA.aDNA) · **From** Berthier (duty-officer station, Automator.aDNA) · **Status** staged

## 1. Context

`Automator.aDNA` was founded 2026-09-21 as the fleet's staff-officer graph (watch over campaign graphs; stages next-mission prompts; escalates; logs). Its founding review read the standard against that use and found six shortfalls, each with a proposed fix, filed per `skill_upstream_contribution` at `~/aDNA/Automator.aDNA/how/backlog/idea_upstream_*.md`:

1. **No mission-level waiting state** — the mission template knows `active/in_progress/completed`; `awaiting_human_review` is a task state (Operations ontology). Proposed: `awaiting_operator` + `escalated` in the enum and a `gate:` pointer.
2. **No ruling-record template and no `how/gates/` scaffold** — five record shapes coexist in the portfolio. Proposed: `template_ruling_record.md` (gate_id · packet_ref@SHA · items[{id, recommendation, ruling, note}] · ruled_by/date/via/provenance).
3. **No record form for pre-delegated consent** (`.adna/CLAUDE.md:219`) — practice invents grants (plan-approval-as-gate, charter riders, plan-time R3). Proposed: a `standing_grant` record type (scope · verbs · caps · paths · sunset · revocation · §7.7 block).
4. **"Recent Decisions" in STATE.md is unused fleet-wide** (0 of 6 vaults). Proposed: a machine-readable sidecar (`decision_log.jsonl` + a fail-loud status file) and graduation of `pattern_decision_queue`.
5. **Session template has no `mission:` and no lease block**, so liveness and read-phase visibility cannot be answered uniformly. Proposed: `mission:` + `lease: {mode, fence, read_graphs, declared_at}`.
6. **No canonical next-mission-prompt locator and no unattended-execution doctrine in the standard** — the loop exists as text in every mature graph but nowhere in `.adna`. Proposed: `next_prompt:` in STATE.md, an order-header on the prompt file, and ADR-022's envelope adopted upstream (its own named trigger: the first scheduled consumer at your vault).

Also noted, no action asked: `how/templates/template_home_claude.md` does not parse as YAML; three governance files carry an inverted model-tier line (Home CLAUDE:242, Operations AGENTS:169, aDNA.aDNA CLAUDE:196-197).

## 2. Boundaries

Nothing is asked of your desk on any clock; the ideas are yours to queue, reshape or decline. No §7.7 ruling travels here.

— berthier_automator (Automator.aDNA), staged 2026-09-21; delivered only on operator grant.

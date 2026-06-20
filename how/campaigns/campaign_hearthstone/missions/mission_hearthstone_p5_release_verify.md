---
type: mission
mission_id: mission_hearthstone_p5_release_verify
campaign: campaign_hearthstone
phase: P5
mission_number: 6
title: "Release & verify — skill_template_release (assemble · v8.0 two-track bump · push) + fresh-clone smoke + bootstrap dry-run"
status: active
class: release
created: 2026-06-19
updated: 2026-06-19
last_edited_by: agent_hestia
estimated_sessions: "1-2"
lane: "cross-lane — Hestia routed into the Rosetta/aDNA.aDNA dev graph (per P2/P3/P4)"
tags: [mission, hearthstone, p5, release, template_release, dry_run, public_face, adr_034, cross_lane, hestia]
---

# Mission 6 (P5) — Release & Verify (outward publish)

> **ACTIVE 2026-06-19.** Session 1 scope (operator-chosen) = **dry-run + local verification, STOP at the
> public-push gate (Decision 5)**. The real push + tag + local `.adna` sync + post-push smoke + campaign
> close are **deferred to a follow-up session on Decision 5 approval** (Step 7 of the plan). Cross-lane
> Hestia per the P2/P3/P4 pattern. Plan: `~/.claude/plans/please-read-the-claude-md-tingly-pelican.md`.

## Objective

Ship the v8.0 Hearthstone batch (P1–P4 deliverables) from the dev graph (`aDNA.aDNA/`) to the public face
`aDNA-Network/aDNA` via the gate-fired `skill_template_release`, then verify a fresh clone bootstraps a
complete, polished **Hestia** `Home.aDNA/` out of the box. **There is no auto-sync** — the public push is
an operator-gated governance event (Standing Order #1; ADR-034). This session de-risks the release with a
fully non-destructive dry-run before the operator commits to the irreversible public push.

## Preconditions (skill Step (a) — verified)

- Release gate: operator approved P4 exit (Decision 4) + chose to execute P5 to the push gate this session.
- Dev changes ratified: P1 (adr_035), P2/P3/P4 phase-exits all operator-approved + committed.
- `aDNA.aDNA` working tree clean; the live WEBSITE Track A work (`site/`) is **not** in the standard tree.

## Assembly source-map (dev graph → `.adna/`) — the v8.0 delta

> Baseline = the current released tree (fresh clone of `aDNA-Network/aDNA`, at v7.2 / standard v2.2);
> apply these ratified deltas (never reconstruct from scratch — skill Step (b)).

| Source (dev graph `aDNA.aDNA/`) | Target (`.adna/`) | Phase | Kind |
|---|---|---|---|
| `how/templates/template_node_adna_exemplar/` (full bundle) | `how/templates/template_node_adna_exemplar/` | P3 | NEW |
| `how/templates/template_home_claude.md` | `how/templates/template_home_claude.md` | P2 | NEW |
| `how/templates/template_inventory_entry.md` | `how/templates/template_inventory_entry.md` | P1 | NEW |
| `how/templates/template_identity_entry.md` | `how/templates/template_identity_entry.md` | P1 | NEW |
| `how/skills/skill_node_bootstrap_interview.md` (Topic 6 + Step-9 `>`-branch) | `how/skills/skill_node_bootstrap_interview.md` | P4 | UPDATED |
| `how/skills/skill_project_fork.md` (`--exemplar-home` + Step 4.5) | `how/skills/skill_project_fork.md` | P4 | UPDATED |
| `how/backlog/idea_upstream_project_fork_exemplar_invocation.md` (env-var reconcile) | (idea — ships with `how/backlog/`) | P4 | UPDATED |
| `CLAUDE.md` (entity-types 14→16: inventory + identity base rows) | `.adna/CLAUDE.md` | P1 | UPDATED |
| `MANIFEST.md` (entity-types table) | `.adna/MANIFEST.md` | P1 | UPDATED |
| `what/docs/adna_standard.md` (`v2.2 → v2.3`) | `.adna/what/docs/adna_standard.md` | P1 | UPDATED |
| ontology (rows 15/16 inventory + identity) | `.adna/.../ontology*` | P1 | UPDATED |
| router template (`workspace_claude_md.template`, Step-0 "offer Home") | `how/templates/template_workspace_claude.md` → root `CLAUDE.md` | P2 | UPDATED (root surface) |

**`root_surfaces_changed`:** likely **TRUE** (the router template changed at P2). The public root `CLAUDE.md`
is **pre-instantiated from the released template** — never hand-forked, and **must not** ship this node's
private campaign-laden router. Confirm exact source paths in pre-flight.

**Version (two-track, ADR-011):** standard `v2.2 → v2.3` (inventory + identity → base; additive/minor,
unambiguous). Governance `7.2 → 8.0` per the campaign-ratified v8.0; *flagged at the Decision-5 gate* — ADR-011
reads the additive changes as a possible **minor** (`7.2 → 7.3`); operator confirms the governance number at
the push gate. Image tag `v8.0` continues the line v7.0 → v7.1 → v8.0.

## Deliverables — session 1 (dry-run + verify)

| # | Deliverable | Done |
|---|---|---|
| 1 | Pre-flight: clean-tree + ratified-trace re-confirm; assembly source-map recorded (above) + `root_surfaces_changed` determined | ⏳ |
| 2 | `skill_template_release` **dry_run**: fresh clone → assemble v8.0 deltas into throwaway `.adna/` → embed-note transform → stage version bumps → **diff** (the "what would ship" preview). NO commit/tag/push; live `~/aDNA/.adna/` untouched | ⏳ |
| 3 | 7-gate fresh-clone smoke (skill Step (f), pre-push variant) against the assembled tree | ⏳ |
| 4 | Hestia bootstrap dry-run: (a) router offers Home · (b) fork yields `Home.aDNA/{what/inventory,who/identity}`+`AGENTS.md` · (c) CLAUDE.md is Hestia · (d) exemplar HOME renders 0 leftover `{{` (`smoke_render.py --materialize`) · (e) `skill_node_health_check` exit 0 | ⏳ |
| 5 | Release session record (source-map · diff summary · smoke results · bootstrap results · version note) + Decision-5 gate presented | ⏳ |

## Deferred — session 2 (on Decision 5 approval) — the real release

- `skill_template_release` (no dry_run): assemble · v8.0 two-track bump · commit (path-scoped) · annotated
  tag `v8.0` · push branch + tag (operator confirms the push).
- Step (e): rsync local `~/aDNA/.adna` sync + commit; regenerate `install_truth.json` if the sha moved.
- Step (f): post-push fresh-clone smoke against the actually-pushed release.
- Close P5 + the campaign (Completion Summary + Campaign AAR); STATE + AAR.

## Verification (this session)

The dry-run diff + 7-gate smoke + bootstrap dry-run **are** the verification — all against a throwaway
assembled tree, no public artifact created. Success = diff matches the source-map · 7/7 gates green ·
bootstrap (a)–(e) pass with health-check exit 0 and zero leftover `{{`.

## AAR

*Filled at mission close (after the real release, session 2). Session-1 dry-run AAR recorded in the session file.*

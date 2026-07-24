---
type: session
session_id: session_stanley_20260724T001439Z_refit_m5_vnext_triage
tier: 2
persona: rosetta
operator: stanley
campaign_id: campaign_refit
campaign_phase: 3
mission_id: mission_refit_5_vnext_triage
executor_tier: opus
status: completed
created: 2026-07-24
updated: 2026-07-24
token_budget_actual: "~62 kT (single session; two-pass seam not needed)"
last_edited_by: agent_rosetta
token_budget_estimated: "~120 kT (5 deep + ~27 light + roadmap + stub)"
tags: [session, campaign, refit, vnext, triage, roadmap, release_stub, p3]
scope_declaration:
  - how/backlog/idea_*.md (disposition stamps — ~32 open ideas)
  - how/campaigns/campaign_refit/artifacts/vnext_roadmap.md (new)
  - how/campaigns/campaign_refit/artifacts/stub_campaign_v8_9_release.md (new, staged)
  - how/campaigns/campaign_refit/missions/mission_refit_5_vnext_triage.md (close)
  - STATE.md (anchor-insert, one batch)
conflict_scan: "how/sessions/active/ empty (only .gitkeep) — no peer session"
---

# Session — Refit M5 vNext triage (P3 Chart)

**Mission**: [[mission_refit_5_vnext_triage]] · **Phase**: P3 Chart · **Gate ahead**: G2 (DP9 — operator ratifies the roadmap)

## Intent

Convert the ~32 open `how/backlog/idea_*.md` files into a **ratified-ready vNext roadmap**: disposition every idea
(adopt-for-vNext / decline-with-reason / defer-with-trigger), draw the **v8.9 governance vs v2.6 standard** split,
author `vnext_roadmap.md`, and stage the `campaign_v8_9_release` stub text (dir NOT created — post-G2 only). Present G2.

**Fixed facts (G1, do not contradict):** DP2 — the `task` entity is a **v2.6 candidate, NOT in motion for v8.9**.
Everything adopted at DP6/DP7 lands **dev-vault-side only**; template propagation waits for the successor release
campaign. Dispositions here are **proposals** — §7.7, ratified at G2, never self-ratified.

## Work log

- Session opened. Git: clean tree, 24 ahead of origin (unpushed — G3 election). G1 rulings read.
- Backlog inventory: **14 `proposed` + 18 `deferred` = 32 open** ideas.

## SITREP

**Completed** — Refit **M5 vNext triage** (P3 Chart), single session, ~62 kT (est ~120). All 32 open backlog
ideas dispositioned (0/32 missing); `vnext_roadmap.md` authored (SO-7/8/10 pass); `stub_campaign_v8_9_release.md`
staged (dir NOT created — post-G2). `adna_validate --governance` zero drift; no normative surface shipped.
**P3 CLOSED; campaign now at G2.**

- **Verify-first (2 factual closes):** `phase:`/`campaigns:` keys + visual-inspection doctrine both shipped at
  v8.7 (live in `.adna/`) → `proposed→resolved`. `mission:` key verified ABSENT → adopted for v8.9.
- **v8.9 governance batch (11 adopt items):** STATE-graduation (ANCHOR, +1 skill) · STATE-convention family
  (`mission:` + phase-display grammar) · path-convention doctrine · fork-kit AGENTS enforcement · codename note ·
  release-leak hardening · compliance_checker hardening.
- **v2.6 candidates (charted, not opened):** `task` entity (G1/DP2 fixed) + `surface_composition_graph` subtype.
- **Defer-with-trigger:** 4 (node_manifest [Home-ADR-gated] · dashboard-surface pattern · campaign-exec runner ·
  + the surface-composition v2.6 slotting escalates to DP9); **confirm-deferred:** 18 (each trigger/owner-stamped).

**In progress** — none. **Blockers** — none.

**Next up** — **Present G2 to the operator (DP9):** ratify the v8.9 batch as the successor release queue · rule the
`surface_composition_graph` v2.6-candidate slotting (the one genuine judgment call) · approve materializing
`how/campaigns/campaign_v8_9_release/` at `status: planned`. Then P4 (M6 dev-readiness — may start pre-G2, it is
independent of the roadmap ruling). Delivery watch: 5 `staged_for_delivery` memos still ride the G3 push election.

**Files touched** — 32 `how/backlog/idea_*.md` (disposition stamps; 2 flipped `status` to resolved) ·
`how/campaigns/campaign_refit/artifacts/vnext_roadmap.md` (new) ·
`how/campaigns/campaign_refit/artifacts/stub_campaign_v8_9_release.md` (new) ·
`how/campaigns/campaign_refit/missions/mission_refit_5_vnext_triage.md` (Completion + AAR) ·
`how/campaigns/campaign_refit/CLAUDE.md` (Current Phase) · `STATE.md` (banner + frontmatter + campaign heading) ·
this session file.

## Next Session Prompt

Operation Refit is at **G2 (P3 Chart complete)**. Read `how/campaigns/campaign_refit/artifacts/vnext_roadmap.md`
(the v8.9-governance-vs-v2.6-standard split — authored at M5, `status: proposed`) and
`artifacts/ratification_record_refit_g1.md` for prior rulings. **Present G2 / DP9 to the operator** via an
AskUserQuestion or ISS gate: (1) ratify the v8.9 governance batch (7 items, +1 skill `skill_state_graduation`) as
the successor release queue; (2) rule the `surface_composition_graph` Platform-subtype ADR's v2.6-candidate
slotting (the one genuine escalation); (3) approve materializing `how/campaigns/campaign_v8_9_release/` from
`artifacts/stub_campaign_v8_9_release.md` at `status: planned`. **Do NOT create the campaign dir before the
operator signs.** After G2, claim M6 (dev-readiness, `mission_refit_6_dev_readiness.md` — E1 in scope, E2
stretch per DP8; note `idea_upstream_vault_card_edge_population` feeds E2). Hard constraints hold: no normative
ship (v2.5/8.8), commit-no-push (G3 election), 5 staged memos ride the G3 push. This session's commit is local
on `main` (25th unpushed).

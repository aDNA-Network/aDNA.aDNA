---
type: backlog_idea
status: deferred
priority: medium
routes_to_campaign: campaign_adna_serious_tool_readiness
routes_to_phase: 5_or_6_or_v3_ec_successor
finding_id: B-aDNA-2026-05-21-CoordStewardship
source_session: session_stanley_20260521T135258Z_v8_m32_s1
created: 2026-05-21
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, cross_vault_coord, stewardship, ack_debt, campaign_so_13, m3_2_s1_wind_down_discovery, who_coordination, adna_aDNA, north_star_easy_fluid_context_graphs]
related_backlog:
  - aDNA.aDNA/how/backlog/idea_interactive_decision_surface.md   # decision-surface M3.0.5 forecast (sibling pattern: aDNA-core skill + optional SiteForge skin)
  - aDNA.aDNA/how/backlog/idea_campaign_operator_interaction_patterns_unification.md  # OIP campaign-planning idea — possible parent/absorber
related_standing_orders:
  - Campaign SO #13 (cross-vault coord memo preservation + recipient persona ack discipline)
  - Project SO #6 (archive never delete)
  - Project SO #10 (cross-link aggressively)
related_skills_forecast:
  - skill_coord_memo_triage.md   # candidate at v8 P5 or P6 OR v3-EC successor
related_adr_slot_forecast:
  - adr_NNN_cross_vault_coord_stewardship_discipline.md   # placeholder; number assigned at promotion time per forward-only doctrine
deferred_owner: "Rosetta + Home.aDNA (Hestia)"
deferred_trigger: "3rd instance / process review (Home shipped a node-local interim detector, health_check S14)"
---

# B-aDNA-2026-05-21-CoordStewardship — Cross-vault coord-memo stewardship pattern (ack-debt risk)

## 1. Problem statement

Cross-vault coord memos arrive asynchronously at the recipient vault — written to `who/coordination/` by an outbound agent at the sender's vault. The recipient persona is expected to read + acknowledge per **Campaign SO #13** (`aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md` — *"Never delete a coord memo. At recipient ack, move to `who/coordination/archive/` (or update `status: acknowledged`). Archive at recipient persona's authority"*). But there is **no detection mechanism** for inbound memos — the recipient must manually scan `who/coordination/` at session entry or stumble on `git status` showing untracked files. **Ack-debt accumulates silently** if no agent enters the recipient vault for hours / days.

**Concrete instance surfaced 2026-05-21**: 4 SiteForge.aDNA Operation Loom P1.3 outbound coord memos arrived at `aDNA.aDNA/who/coordination/` between 07:04-07:06Z (right after M3.1 S3 close at 07:28Z). They sat untracked + unack'd for **6 hours** until M3.2 S1 OPEN at 13:52Z surfaced them via live `git status`. The initial session-launch git-status snapshot (captured by harness at ~07:28Z M3.1 close) did NOT include them — so the agent's cold-start view was incomplete. Discovery happened only when the agent ran a fresh `git status` mid-session during the M3.2 S1 commit phase.

This is the **1st observed instance** of the pattern at aDNA.aDNA. Pattern likelihood: will recur at every cross-vault coord-memo arrival window if no mechanism is added. The risk grows as more vaults send coord memos (16+ vaults in current ecosystem; cross-vault federation is accelerating per LIP-0006 Network.aDNA category).

## 2. Pattern observed

Cross-vault coord memo lifecycle (current state):

| Step | Mechanism | Owner | Detection |
|------|-----------|-------|-----------|
| 1. Memo composed | Outbound agent at sender's vault writes Markdown file with frontmatter `from:` + `to:` + `status: sent` | Sender persona | n/a |
| 2. Memo filed | `git add` + commit at sender's vault OR untracked at recipient vault (depending on sender's commit discipline) | Sender persona | n/a |
| 3. Memo arrives | File appears in recipient vault's `who/coordination/` directory | (passive) | **NONE** — no notification, no log, no hook |
| 4. Memo discovered | Recipient agent reads at session entry OR notices in `git status` mid-session | Recipient persona | **MANUAL SCAN** required |
| 5. Memo acknowledged | Recipient persona updates frontmatter `status: sent → acknowledged` + optional `acknowledged_at` / `acknowledged_by` / `acknowledged_session` fields + appends §Acknowledgment section | Recipient persona | Manual edit |
| 6. Memo archived | Optional: move to `who/coordination/archive/` | Recipient persona | Manual mv |

**Missing piece**: Step 3 → Step 4 detection. The recipient vault has no automated awareness of arrivals.

Cross-vault coord memos may also be addressed to a persona that lives in a DIFFERENT vault than where they're filed (e.g., a Berthier-addressed memo filed at `aDNA.aDNA/who/coordination/` as a transit-copy for cross-vault awareness; the actual ack happens at `lattice-labs/who/coordination/` where Berthier resides). This adds a **routing dimension**: when do transit-copies need explicit handling vs being purely informational?

## 3. Proposed approaches (≥ 3 options for ratification at consume-time)

**Option 1: Session-entry hook scans `who/coordination/`** (lightest touch)
- PreSessionStart hook (per ADR-022 hook framework) scans `who/coordination/*.md` for frontmatter `status: sent` files; counts by recipient; flags to operator in cold-start greeting.
- Pros: zero per-session cognitive load on agent; instant detection.
- Cons: requires hook codification at `.claude/settings.json` OR `~/.adna/hooks/` (Standing Rule #5 territory); per-vault hook configuration adds setup overhead.

**Option 2: `who/coordination/AGENTS.md` codifies "scan-on-entry" Standing Order**
- Standing Order at directory-AGENTS.md level: every agent entering this vault reads `who/coordination/AGENTS.md` and that file instructs a scan-on-entry of inbound coord memos with `status: sent`.
- Pros: no hook needed; AGENTS.md routing layer already exists per M2.4.5 hardening; aligns with the 7-item invariants spec (Inv 5 heavy-file warning could surface).
- Cons: relies on agent compliance (AGENTS.md is advisory, not enforcing); cold-start agent may skip if context-budget-pressed.

**Option 3: Routing protocol — auto-route cross-vault memos to recipient persona's vault**
- LatticeAgent.aDNA / federation mechanism that detects memo arrivals at sender's commit + auto-pushes to recipient vault's `who/coordination/`; recipient vault's hook fires on receipt.
- Pros: closes the detection gap end-to-end; aligns with LIP-0006 Network.aDNA federation primitives.
- Cons: heavier — requires LatticeAgent.aDNA federation work; cross-vault network state required (Alpha Lattice substrate); not feasible until LatticeNetwork.aDNA Phase 5+.

**Option 4: Combine Option 1 + Option 2 (recommended)**
- Both hook AND Standing Order — redundancy without cost. Hook covers cold-start visibility; Standing Order covers agents that bypass hooks (e.g., manual session invocation without hooks).
- Pros: defense-in-depth; failure-tolerant.
- Cons: 2× authoring overhead; minor.

## 4. Memorialization plan

| Artifact | Path | Authoring slot |
|----------|------|----------------|
| Skill (operational primitive) | `aDNA.aDNA/how/skills/skill_coord_memo_triage.md` | v8 P5 (community-readiness) OR v3-EC successor; pattern needs ≥ 2 more instances first per `m21_obj4` graduation rubric |
| ADR (standard-touch) | `aDNA.aDNA/what/decisions/adr_NNN_cross_vault_coord_stewardship_discipline.md` | v8 P5 P5.2-pattern OR v3-EC successor; ADR slot number assigned at promotion-time per forward-only doctrine (precedent: ADR-017 + ADR-022 two-step reassignment) |
| Hook config update | `~/.claude/settings.json` PreSessionStart hook (Option 1) | v8 P6 OR v3-EC; coordinated with LatticeAgent.aDNA hook framework |
| AGENTS.md amendment | `aDNA.aDNA/who/coordination/AGENTS.md` (and propagate to all vaults via v3-EC) | v8 P5 — first authoring at aDNA.aDNA; v3-EC propagates to ecosystem |
| Campaign SO #13 amendment | `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md` | v8 P5 OR v3-EC; clarifies ack-debt protocol + detection mechanism |

**Integration with v8 P6 propagation queue**: this idea joins the queue as the **8th-or-later doctrinal addition** (current queue at 7; M3.2 close grows to 9-10). The skill + ADR co-propagate at v8 P6 per Campaign SO #14.

## 5. Best-practices stub

| Dimension | Best practice |
|-----------|---------------|
| Arrival-detection cadence | At every session entry, scan `who/coordination/` for `status: sent` files; surface count + per-recipient breakdown to operator at greeting |
| Ack-with-action vs ack-only | Default = ack-only at arrival; full action response folds into next mission cycle that touches the relevant scope (per memo's `follow_up_at:` frontmatter field) |
| Cross-persona handoff | Memos addressed to a persona that lives in a DIFFERENT vault than the file location are **transit-copies** — Rosetta at aDNA.aDNA does NOT ack a Berthier-addressed memo; Berthier acks at lattice-labs. Transit-copy ack discipline = informational note ("seen, awaiting your-vault triage") OR no action |
| Archive policy | After 7-day ack-window, archive ack'd memos to `who/coordination/archive/YYYY-MM/` (analogous to session file archive); preserves audit trail per Project SO #6 |
| Ack-debt budget | Acceptable ack-latency = ≤ 24 hours for non-urgent memos (per `follow_up_at:` field guidance); urgent memos (e.g., load-bearing decisions blocking other work) require ≤ 4 hours; escalation via SITREP `#needs-human` if exceeded |
| Frontmatter discipline | Recipient persona's ack adds: `acknowledged_at:` ISO timestamp / `acknowledged_session:` session ID / `acknowledged_by:` agent ID + persona; preserves audit trail |

## 6. Open questions for operator ratification

1. **Mechanism preference**: Option 1 (hook) OR Option 2 (Standing Order via AGENTS.md) OR Option 4 (both)? Operator's local-environment hook tolerance matters here — hooks add cognitive overhead at `~/.claude/settings.json`.
2. **Latency budget**: what's the acceptable ack-debt? Default = 24 hours for non-urgent + 4 hours for urgent — operator may want tighter / looser.
3. **Mission slot housing**: does this need a NEW mission slot in v8 P3-P5 (e.g., M3.4.5 cross-vault coord stewardship absorb) OR is it backlog-only until v3-EC? **Default per Campaign SO #14**: ADR at P5; skill at P5; M3.x mission absorbs the AGENTS.md + Standing Order amendments. If load-bearing for cross-vault federation work (Network.aDNA Phase 5+), elevate to dedicated mission.
4. **OIP absorption candidacy**: does this absorb into / inherit from existing `idea_campaign_operator_interaction_patterns_unification.md` OIP scope ("Operation Concord")? OIP covers Canvas substrate + LatticeTerminal sidebar + LatticeAgent provider-contract + AskUserQuestion + osascript + custom HTML; cross-vault coord stewardship is a DIFFERENT axis (vault-to-vault) but shares the "what's the cleanest UX for cross-domain handoffs?" theme. **Default**: keep separate (different axis); cross-link both as related-pattern.
5. **Transit-copy convention**: should transit-copies (memos addressed to another vault's persona but filed here for awareness) be **ack'd informationally** at aDNA.aDNA OR **NOT touched** (let the recipient persona ack at their own vault, then transit-copy stays `status: sent` here permanently)? Default = NOT touched (current Campaign SO #13 reading); but may want an explicit `status: transit_copy` field to disambiguate from genuine unack'd local memos.
6. **Cross-vault federation precedent**: should this proposal coordinate with `LatticeAgent.aDNA` (provider-contract harness) and `LatticeNetwork.aDNA` (Alpha Lattice substrate) before authoring the skill / ADR? Default = yes; the routing-protocol Option 3 depends on federation primitives, so coord memo to Spock (LatticeAgent) + Venus (LatticeNetwork) at skill / ADR authoring window.
7. **Pattern-graduation timing**: per `m21_obj4` rubric, ≥ 3 instances required before skill graduates. **Current instances: 2.** (1) this discovery [2026-05-21, aDNA.aDNA — 4 SiteForge memos unack'd 6h]; **(2) 2026-06-20, Home.aDNA — Venus's 2026-06-10 reply (`ack_required:false`) sat UN-INTAKEN for 10 days / 8 sessions, driving a false "Venus query unanswered → pt17 blocked" premise in `Home.aDNA/STATE`; found only via a manual cross-vault check. Home shipped a node-local interim detector — `skill_node_health_check` S14 ("Inbound Coordination Intake Scan") + Startup-Checklist step 4b; see `Home.aDNA/how/backlog/idea_coordination_intake_health_check.md`.** Forecast: recurs at every cross-vault campaign close where multiple outbound memos fire. **One more instance → graduate** the skill/ADR (v8 P5 horizon).
8. **Coord-memo arrival logging**: should aDNA.aDNA opt into a centralized coord-memo arrival log (e.g., `who/coordination/_arrivals.jsonl` append-only log) for audit / analytics? Default = no (over-engineering); revisit if ack-debt issues recur.

## Critical files (forecast)

| File | Status | Notes |
|------|--------|-------|
| NEW: `aDNA.aDNA/how/skills/skill_coord_memo_triage.md` | candidate | v8 P5 OR v3-EC |
| NEW: `aDNA.aDNA/what/decisions/adr_NNN_cross_vault_coord_stewardship_discipline.md` | candidate | v8 P5 OR v3-EC; slot number at promotion time |
| MODIFY: `aDNA.aDNA/who/coordination/AGENTS.md` | candidate | Add scan-on-entry Standing Order (Option 2 default) |
| MODIFY: `~/.claude/settings.json` | candidate | PreSessionStart hook (Option 1; requires `.claude/hooks/` coordination) |
| MODIFY: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md` Campaign SO #13 | candidate | Amend with ack-debt protocol + detection cadence |

## Source references

- This wind-down session: `aDNA.aDNA/how/sessions/active/session_stanley_20260521T135258Z_v8_m32_s1.md` §Session Retrospective — Findings (a)
- Predecessor pattern surfaced at: M3.1 S1 OPEN 2026-05-21T02:34:03Z (4 untracked SiteForge genesis_* coord memos surfaced at M3.1 close; carried through M3.2 S1 OPEN without ack)
- Campaign SO #13: `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md` line 36
- Project SO #6 (archive never delete): `aDNA.aDNA/CLAUDE.md`
- Operation Loom P1.3 memo family (the 4 inbound memos this session): `aDNA.aDNA/who/coordination/coord_2026_05_21_siteforge_interactive_subsystem_p1_*.md`
- Related forecast pattern: `aDNA.aDNA/how/backlog/idea_interactive_decision_surface.md` (M3.0.5 forecast — decision-surface pattern for heavy operator gates; similar "UX of cross-domain handoff" axis)
- Related campaign-planning idea: `aDNA.aDNA/how/backlog/idea_campaign_operator_interaction_patterns_unification.md` (OIP "Operation Concord" — operator-interaction patterns unification campaign-planning)
- Federation context (load-bearing for Option 3 routing): `LatticeAgent.aDNA/CLAUDE.md` + `LatticeNetwork.aDNA/CLAUDE.md`

## Cross-links (≥ 2 wikilinks per Project SO #10)

- [[../campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|Campaign master (v8)]] — owning campaign
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m32_obsidian_stabilization_extension.md|M3.2 mission spec]] — discovery session anchor
- [[../sessions/active/session_stanley_20260521T135258Z_v8_m32_s1.md|M3.2 S1 session file]] — discovery context (Session Retrospective §Findings a)
- [[idea_interactive_decision_surface.md|idea_interactive_decision_surface]] — sibling pattern (UX of cross-domain handoff axis)
- [[idea_campaign_operator_interaction_patterns_unification.md|idea_campaign_operator_interaction_patterns_unification]] — possible parent/absorber (OIP)
- [[../../who/coordination/coord_2026_05_21_siteforge_interactive_subsystem_p1_rosetta_standard_touch.md|rosetta_standard_touch P1.3 memo]] — 1st-instance ack discharge (Campaign SO #13 reference example)


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: Rosetta + Home.aDNA (Hestia). Trigger: 3rd instance / process review (Home shipped a node-local interim detector, health_check S14). Ratified at Champollion G0 (D2).

## Disposition — Refit M5 vNext triage (2026-07-24) · **CONFIRM-DEFERRED**

Reviewed in the light sweep; **stays `deferred`** — trigger: fleet coord-memo ack-debt becomes acute (the ADR-022 lesson Refit re-surfaces at G3). Owner: Berthier (fleet coordination). See [[vnext_roadmap]] §Deferred-with-trigger.

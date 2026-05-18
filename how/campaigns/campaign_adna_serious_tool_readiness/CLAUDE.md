---
type: governance
subtype: campaign_claude
created: 2026-05-17
updated: 2026-05-17
last_edited_by: agent_stanley
tags: [governance, campaign, v8, serious_tool_readiness]
---

# CLAUDE.md — Campaign: aDNA Serious-Tool Readiness

> Auto-loaded at session entry when working within `how/campaigns/campaign_adna_serious_tool_readiness/`. Supplements `aDNA.aDNA/CLAUDE.md` (project-level) and the campaign master file.

## Campaign Identity

| Field | Value |
|---|---|
| Campaign | `campaign_adna_serious_tool_readiness` |
| Owner | stanley |
| Persona | Rosetta |
| Status | active (P0 open) |
| Current Phase | Phase 0: Planning |
| Tag target | v8.0 (Major Governance bump) |
| Predecessors | v2 (ships M05+M06 before P1 entry) + LWX (closed 2026-05-13) + Rosetta (Phase 8 + D9+D10 absorbed) |

## Quick Start

1. Read this file (auto-loaded)
2. Read `campaign_adna_serious_tool_readiness.md` — master campaign doc (Scope, Phases, Mission tree, ADR roadmap)
3. Check current mission status in the phase table
4. Claim next unclaimed mission
5. Create session file in `aDNA.aDNA/how/sessions/active/` and begin work

## Key Files

| File | Purpose |
|---|---|
| `campaign_adna_serious_tool_readiness.md` | Master campaign document — phases, missions, scope, ADRs, decisions |
| `missions/mission_*.md` | Individual mission files (~29 expected; planning-class P0 mission already written) |
| `missions/artifacts/` | Mission AARs + campaign deliverables (5-persona reviews, decision-gate logs, design specs) |
| `context/` | Campaign-specific context (lazy-loaded; not always-on) |

## Standing Orders (campaign-specific)

These supplement `aDNA.aDNA/CLAUDE.md` Standing Orders. Numbered to avoid collision with project-level (project uses 1-10).

11. **Per-phase decadal AAR mandatory.** Every 10 cycles within a phase OR end-of-phase, whichever comes first, run `skill_decadal_aar` with 5-persona ranker review. Document in `missions/artifacts/aar_*_decadal_*.md`.

12. **Per-mission context budget.** Each mission states an estimated token budget in its frontmatter (`token_budget_estimated`). Sessions track actual consumption. Convergence-model validation (M2.3) compares estimated vs actual. Targets per `skill_orchestration_tiers`.

13. **Cross-vault coord memo preservation.** Never delete a coord memo. At recipient ack, move to `who/coordination/archive/` (or update `status: acknowledged`). Archive at recipient persona's authority (e.g., Spock for LatticeTerminal, Argus for III).

14. **ADR ratification gated at phase entries.** New ADRs proposed during a phase ratify at phase exit gate. No in-flight ADR ratifications mid-phase. Exception: load-bearing decisions that block phase progress (operator override).

15. **Dispatch-where-possible.** When operator-side validation is needed and operator bandwidth is constrained, dispatch to Carly+Herb (validation-as-dispatched-campaign pattern; first instance: `campaign_validation_node_adna_lwx_outputs`). Cross-vault partner work dispatches via coord memo + per-partner persona.

16. **v7.0 tag dependency hard.** v8 Phase 1 cannot complete until v2 M05+M06 close AND `LatticeProtocol/adna` v7.0 tag exists. M1.1 and M1.2 are 0-session coord checkpoints that confirm v2's progress before v8 P1 advances.

17. **Mission_class discipline.** Every mission has explicit `mission_class:` field (reconnaissance | implementation | verification | integration | closeout | planning). Planning-class missions (P0 + amendment sessions) produce no executable code; only governance artifacts (mission specs, ADRs, charters, mission trees).

18. **Decadal AAR persona update at Phase 5.** M5.2 adds new decadal personas to `who/reviewers/` (OSS maintainer, dev-tools designer, framework docs expert, community organizer, indie hacker, enterprise architect). After M5.2, decadal reviews use the EXPANDED ranker bench, not the original 5.

19. **Phase exit gate = human gate.** Standing Order #1 (project-level) applies — no auto-advance between phases. Operator must explicitly approve P{N} → P{N+1} transition.

## Context Loading

Load these subtopics for campaign work (lazy; per-mission):

| Subtopic | When |
|---|---|
| `aDNA.aDNA/what/context/orchestration/skill_orchestration_tiers.md` | Always (token discipline) |
| `aDNA.aDNA/what/context/observability/context_observability_recipes.md` | P2 missions |
| `aDNA.aDNA/MEMORY.md` | Always (north-star UX goal lives here) |
| `aDNA.aDNA/how/campaigns/campaign_rosetta/` | P5 missions (decadal AAR methodology) |
| `LatticeTerminal.aDNA/CLAUDE.md` + STATE.md | P4 missions (Phase 4 co-design) |
| `III.aDNA/what/artifacts/iii_airlock_standard_spec.md` v0.2.0 | P3 + P5 missions |
| `lattice-labs/how/campaigns/campaign_comic_pipeline_canvas/` outputs | P3 M3.6 (airlock AAR) |

## Cross-vault coord protocol

| Phase | Partner | Persona | Mechanism |
|---|---|---|---|
| P3 | `CanvasForge.aDNA/` | Hermes | M3.6 airlock AAR input via coord memo |
| P3 | `lattice-labs/` | Berthier | M3.6 airlock AAR + ongoing dispatch (parallel campaign already running) |
| P4 | `LatticeTerminal.aDNA/` | Spock | M4.1 handshake coord memo + read STATE.md; M4.3 co-design pairing |
| P5 | `III.aDNA/` | Argus | M5.5 100-cycle methodology + iii consumer wrapper |
| P6 | All 19+ ecosystem vaults | various | M6.3 propagation receipts (M08b-style pattern) |

## Delegation Notes

**For agents picking up mid-stream**:
- This campaign opened 2026-05-17 (P0 first-execution-session by Rosetta).
- D1-D7 ratified at P0 (see master file Decision Points).
- D8-D13 pending; surfaced at phase entries.
- Pattern lineage: continues Rosetta (content + ranker) + v2 (infrastructure + governance) into community-readiness push.
- Cross-vault partners engaged in phased sequence (P3 first; P4 second; P5 third) to avoid coord-memo backpressure.
- Adversarial review framework: 5-persona ranker (every phase + planning) + skeptic (P0 + P3 + P5) + external-validator (P0 + P5 + P6) = minimum 12 reviews across campaign.

**For verification handoff**:
- Agent-side smoke ≠ operator-side runtime. Two distinct gates. M3.4 codifies as `skill_verification_handoff.md`.
- Validation-as-dispatched-campaign pattern: `campaign_validation_node_adna_lwx_outputs` (lattice-labs; Berthier+Carly+Herb) runs in parallel; v8 features dispatch validation there.

**For phase entry**:
- Re-read project-level CLAUDE.md + this file + campaign master + STATE.md (especially Next Session Prompt + Active Campaigns)
- Confirm previous phase's exit gate is operator-approved
- Open phase entry session with Tier-1 session file in `aDNA.aDNA/how/sessions/active/`

## Notes

This CLAUDE.md auto-loads when sessions touch `how/campaigns/campaign_adna_serious_tool_readiness/`. Sessions outside this directory don't auto-load; agents pick it up via `how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md` Read at session-entry.

---
type: governance
subtype: campaign_claude
created: 2026-06-08
updated: 2026-06-10
last_edited_by: agent_stanley
tags: [governance, campaign, audit]
---

# CLAUDE.md — Campaign: adna.network Comprehensive Audit & Improvement

> Auto-loaded when working within `how/campaigns/campaign_adna_network_audit/`. Supplements `aDNA.aDNA/CLAUDE.md` (project-level). **Side campaign** — paused the main campaign (`campaign_adna_serious_tool_readiness`, mid-E5 at c161) 2026-06-08 and **handed back at P2, 2026-06-10**.

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_adna_network_audit` |
| Owner | stanley |
| Persona | Rosetta |
| Status | ✅ **completed 2026-06-10** (P0–P2 closed; final AAR `missions/artifacts/aar_audit_p0_p1s1.md`; gap register rows 1–18 all dispositioned) |
| Current Phase | — (closed; control returned to the main campaign at **E5 c162**, realigned; new decadal **E6/M5.13** seeded, capstone→E7) |
| Relationship | **side campaign** — paused `campaign_adna_serious_tool_readiness` (E5 c161); resumed it at P2 (2026-06-10) |

## Quick Start
1. Read this file (auto-loaded)
2. Read `campaign_adna_network_audit.md` — master doc (goal, phases, scope, risks, gates)
3. Check current mission status in the phase table
4. Claim the next unclaimed mission / objective
5. Create a session file in `aDNA.aDNA/how/sessions/active/` and begin

## Key Files
| File | Purpose |
|------|---------|
| `campaign_adna_network_audit.md` | Master — phases, missions, scope, risks, decision points, gates |
| `missions/mission_ana_p0_planning_audit.md` | P0 planning mission — the operator brief + audit method + deliverable contract |
| `missions/mission_ana_p1_m1_decisive_strokes.md` | P1 execution stub (fleshed from the P0 roadmap) |
| `missions/mission_ana_p2_closeout_realign.md` | P2 closeout — AAR + realign main campaign |
| `missions/artifacts/audit_adna_network_2026_06.md` | The audit report of record (11-section) |
| `missions/artifacts/audit_adna_network_2026_06_results.json` | Structured scorecard + gate |

## Standing Orders (campaign-specific; supplement project-level 1-10)

A1. **Commit-only, deploy frozen.** Mirror the E5 deploy freeze. Audit fixes are committed but not deployed; they ride the E5-close deploy unless the operator flags a ship-now credibility fix at a gate. Never `vercel` deploy from this campaign without explicit operator green-light.
A2. **Evidence or it didn't happen.** Every finding cites a specific URL + element + evidence (screenshot/quote/score). Distinguish observed fact from recommendation. State the user-cost of every problem and the expected-gain of every fix. No generic advice.
A3. **Naming discipline is Critical.** Any inconsistency in aDNA (network/standard) vs Lattice (protocol/IP), or in version/counts/license claims, is flagged **Critical** regardless of technical severity ([[project_adnalabs_brand_pivot]]).
A4. **Audit both, label the source.** Findings tagged `local` (current-HEAD build) or `live` (deployed adna.network, E4 c159). The local↔live deploy gap is a first-class finding.
A5. **Planning-class = no fixes.** P0 produces governance artifacts only (report, roadmap, mission specs) — zero code changes (project SO #17). Fixes happen in P1 after the gate.
A6. **Phase gates are human gates.** No auto-advance P0→P1→P2 (project SO #1). Operator approves the roadmap scope before any fix is applied.
A7. **Reuse, don't reinvent.** Use existing components/patterns/tooling (`who/reviewers/*`, `skill_decadal_aar`, `skill_reference_inspection`, `front_page_doctrine.md`, site gates + Lighthouse + axe). Engine skills untouched; archive-never-delete; rename nothing.
A8. **Realign on the way out.** P2 must fold audit-driven content/style/structure changes into the remaining E5 cycles (162-169) + E5 design spec + main `STATE.md` + `front_page_doctrine.md` (if doctrine-level) + memory, then resume the main campaign.

## Context Loading
| Subtopic | When |
|----------|------|
| `aDNA.aDNA/MEMORY.md` + `project_site_redesign_ss_ghibli` / `project_adna_network_ethos` / `project_adnalabs_brand_pivot` | always |
| `what/design/front_page_doctrine.md` + `what/exemplars/sites/_reference_set.md` | P0 (audit grounding) + P1 |
| `how/skills/skill_decadal_aar.md` (RLP + gate mechanics) | P0 audit fan-out |
| `who/reviewers/*` | P0 persona lens pass |
| `how/campaigns/campaign_adna_serious_tool_readiness/` STATE + E5 mission/spec | P2 realign |

## Delegation Notes
- Opened 2026-06-08 by Rosetta. Decision-1 (target=both/local-primary · scope=full-site · orchestration=Workflow-max) ratified by operator at open.
- The audit method: Step A (automated measurement & capture, Bash/Playwright) → Step B/C (multi-agent Workflow fan-out + 14-persona RLP + consistency cross-checks + synthesis) → Step D (author report + results JSON + P1 plan). See the P0 mission file.
- Pattern lineage: borrows the main campaign's RLP-as-Workflow mechanism + decadal-AAR gate; broadens to a full cross-cutting site audit.
- On resume: the main campaign continues at E5 cycle 162 (see its STATE.md + the E5 mission), now informed by this audit.

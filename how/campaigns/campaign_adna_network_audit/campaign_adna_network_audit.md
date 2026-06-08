---
campaign_id: campaign_adna_network_audit
type: campaign
title: "adna.network Comprehensive Audit & Improvement"
owner: stanley
persona: rosetta
status: active
phase_count: 3
mission_count: 3
estimated_sessions: "4-7"
calibrated_sessions: "4-7"
estimation_class: content-novel
priority: high
created: 2026-06-08
updated: 2026-06-08
last_edited_by: agent_stanley
tags: [campaign, audit, adna_network, side_campaign]
---

# Campaign: adna.network Comprehensive Audit & Improvement

## Goal

A side campaign that puts the public face of the aDNA standard — **adna.network** — under an end-to-end, evidence-grounded audit (9 axes × full route set), produces a **prioritized, actionable improvement roadmap**, executes the agreed improvements, and **folds the results back into the main campaign** (`campaign_adna_serious_tool_readiness`, mid-E5) before we resume it. When complete: a documented audit of record, a shipped set of high-impact fixes, and the remaining E5 cycles re-aligned to absorb what the audit found.

## Context

Triggered by the operator (2026-06-08) with a detailed [agent brief](missions/mission_ana_p0_planning_audit.md) for a comprehensive review of adna.network as a strategic asset (convert technical visitors, recruit contributors, establish the standard's credibility). The main campaign is **paused mid-E5 at cycle 161** (last commit `2c27518`); this side campaign runs, then hands back.

Complementary to — not a duplicate of — the main campaign's per-cycle III + decadal RLP: this audit is **broader and cross-cutting** (adds technical SEO, link integrity, GitHub consistency, aDNA/Lattice naming-discipline, conversion-funnel mapping, full-route coverage incl. audience pages). Reuses existing machinery: `skill_decadal_aar` (RLP + gate mechanics), `skill_reference_inspection` + `front_page_doctrine.md`, the 14 `who/reviewers/` personas, and the site's Playwright gates + Lighthouse + axe tooling.

**North-stars to honor:** [[project_adna_network_ethos]] (public-good), [[project_adnalabs_brand_pivot]] (aDNA = network/standard, Lattice = protocol — naming discipline), [[project_adna_lattice_ux_goal]] (fluid context-graph UX).

## Scope

### In Scope
- 9-axis audit (message/positioning · IA/nav · conversion/CTA · technical SEO/metadata · performance · accessibility WCAG-AA · content depth/credibility · visual/brand consistency · vault-registry-as-product) across the **full route set** (brief's 17 routes at depth + audience/conversion pages + content-collection spot-checks), on **local current-HEAD** (primary) with **live adna.network** cross-check.
- Prioritized roadmap (Decisive strokes / Campaigns / Housekeeping) + copy-paste-ready quick-wins + a structured results JSON.
- Execution of the operator-approved fixes (commit-only; rides the E5-close deploy unless flagged ship-now).
- Realignment of the main campaign's remaining E5 cycles + design spec + STATE + doctrine + memory.

### Out of Scope
- Deploying anything outside the E5-close deploy window (E5 freeze holds; operator may override for urgent credibility fixes).
- Editing engine skills (`skill_iii_cycle` / `skill_site_design_pipeline` / `skill_decadal_aar`); renaming/deleting vaults; ratifying ADRs (gated to phase exits / main campaign).
- Net-new pages beyond what the roadmap justifies and the operator approves.

### Subsumes
| Plan/Mission | Status at Subsumption | Tasks Absorbed By |
|-------------|----------------------|-------------------|
| (none — net-new side campaign) | — | — |

## Phases & Missions

### Phase 0: Planning & Audit
| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| P0 | Comprehensive audit → report + prioritized roadmap + P1 plan | 1 | — | ✅ completed 2026-06-08 |

**Phase exit gate** *(PENDING operator — at this gate now)*: operator reviews the executive summary + scorecard + prioritized roadmap (`missions/artifacts/audit_adna_network_2026_06.md`) and approves which tiers/items (and any ship-now credibility fixes) enter P1. **No fixes applied in P0** (planning-class discipline, SO #17). Result: 15 Critical / 20 High / 26 Medium / 20 Low; roadmap = 5 decisive strokes + 5 campaigns + 6 housekeeping + 11 quick-wins; P1 populated.

### Phase 1: Execution
| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| P1.M1+ | Apply agreed fixes (tiered: quick-wins → decisive strokes → campaigns) | 2-4 | P0 + gate | planning |

**Phase exit gate**: agreed fixes shipped (committed; build + gates + axe + Lighthouse green); roadmap items closed or explicitly deferred.

### Phase 2: Wind-down / Realign
| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| P2.M1 | Campaign AAR + realign main campaign → resume E5 | 1 | P1 | planning |

**Phase exit gate**: AAR filed; main-campaign E5 cycles (162-169) + design spec + STATE + doctrine + memory updated to absorb audit findings; main campaign resumed.

## Decision Points
| # | When | Decision | Status |
|---|------|----------|--------|
| 1 | Before P0 | Audit target (Both, local-primary) · scope (full site) · orchestration (Workflow-max) | ✅ ratified 2026-06-08 (operator) |
| 2 | P0 → P1 gate | Which roadmap tiers/items to execute; any ship-now fixes; deploy posture | pending |
| 3 | P1 → P2 gate | Confirm fixes complete; what folds into E5 vs future | pending |

## Risk Register
| Risk | Severity | Mitigation |
|------|----------|------------|
| Audit findings overlap surfaces E5 is actively reworking (churn/conflict) | Medium | P2 realign folds findings INTO remaining E5 cycles rather than racing them; commit-only avoids deploy conflicts |
| Live≠local confusion (deploy gap) | Medium | Audit both, label every finding local|live; deploy gap is a first-class finding, not noise |
| Workflow token spend (max orchestration) | Medium | Operator opted in; Step-A tooling done once, fed to agents; pipeline over barrier; completeness critic prevents re-runs |
| Naming-discipline / credibility errors shipped publicly | Critical | Any aDNA/Lattice inconsistency flagged Critical; consistency cross-check is a dedicated audit lane |
| Side campaign drifts / main campaign stalls | Medium | 3 phases, tight gates; P2 mandatory resume-handoff; main STATE carries the pause pointer |

## Verification Strategy

### Per-Mission
| Check | Method | Gate? |
|-------|--------|-------|
| SITREP filed | Session closure | Yes |
| AAR produced | 5-step / lightweight AAR | Yes |
| Deliverables validated | report well-formed; every claim cites URL+element | Yes |
| Files committed | git status clean (no deploy) | Yes |

### Per-Phase
| Check | Method | Gate? |
|-------|--------|-------|
| Phase exit criteria met | this doc's phase exit gate | Yes — operator approval |
| Scope changes documented | this doc's scope section | Yes |

### Campaign Validation
| Check | Method |
|-------|--------|
| Main campaign re-aligned | E5 mission/spec/STATE updated at P2 |
| STATE.md updated | side-campaign status + E5 resume reflected |
| Memory updated | project memory carries audit outcome + resume pointer |

## Timeline
| Phase | Missions | Sessions |
|-------|----------|----------|
| P0 Planning & Audit | P0 | 1-2 |
| P1 Execution | M1+ | 2-4 |
| P2 Wind-down / Realign | M1 | 1 |
| **Total** | **3+ missions** | **4-7 sessions** |

## Notes

- **Pauses the main campaign.** `campaign_adna_serious_tool_readiness` is paused at E5 c161; main `STATE.md` carries the pause pointer. Resume happens at P2.
- **Commit-only posture** mirrors the E5 deploy freeze; audit fixes ride the E5-close deploy unless the operator flags a ship-now credibility fix at the gate.
- **Deliverable format** follows `template_aar.md` (11-section) + an `rlp_e1_30persona_results.json`-style results JSON.

## Completion Summary
*Fill out when setting `status: completed`.*

### Deliverables
- [audit report + results JSON + shipped fixes + main-campaign realignment]

### Descoped
- [...]

### Key Findings
- [...]

### Scope Changes
- [...]

### Follow-Up Campaigns
- [...]

## Campaign AAR
*Mandatory before `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: [...]
- **Didn't**: [...]
- **Finding**: [...]
- **Change**: [...]
- **Follow-up**: [...]

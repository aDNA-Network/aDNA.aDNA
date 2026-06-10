---
campaign_id: campaign_adna_network_audit
type: campaign
title: "adna.network Comprehensive Audit & Improvement"
owner: stanley
persona: rosetta
status: completed
phase_count: 3
mission_count: 3
estimated_sessions: "4-7"
calibrated_sessions: "4-7"
actual_sessions: 5
estimation_class: content-novel
priority: high
created: 2026-06-08
updated: 2026-06-10
closed_at: 2026-06-10
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
| P1.M1 | Apply agreed fixes — S1 ✅ (Criticals, **deployed live**, `c0b41a6`) · S2 ✅ (Get Started CTA, `a80c4b6`) · S4 ✅ (housekeeping, `017a2e7`) · S3 ✅ (Phase-1b sweep, run last, `1a97dbe`; 115/115; 3 findings fixed at root) | 2-4 | P0 + gate | ✅ **completed 2026-06-10** |

**Phase exit gate** ✅ **PASSED 2026-06-10**: all roadmap items shipped or explicitly deferred (Obj-11 → Hestia memo); sweep complete (audit report §9); gates 97/97. Gate pre-approved at the operator plan-gate bundle (2026-06-09/10), conditional on S3 green — condition met; logged in the P1 mission + session record.

### Phase 2: Wind-down / Realign
| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| P2.M1 | Campaign AAR + realign main campaign → resume E5 (**expanded** per the operator portal directives: + E6/M5.13 authoring · c162 re-map · install-truth foundation · upstream PR · D16 carry-ins) | 1 | P1 | ✅ **completed 2026-06-10** |

**Phase exit gate** ✅ **PASSED 2026-06-10**: final AAR filed (`aar_audit_p0_p1s1.md`, 13/13 + 18-row register, zero orphans); E5 design spec re-mapped + pause lifted (resume c162); theme set amended (E6 inserted, capstone→E7); STATE + doctrine (§9) + memory updated; main campaign resumed.

## Decision Points
| # | When | Decision | Status |
|---|------|----------|--------|
| 1 | Before P0 | Audit target (Both, local-primary) · scope (full site) · orchestration (Workflow-max) | ✅ ratified 2026-06-08 (operator) |
| 2 | P0 → P1 gate | Which roadmap tiers/items to execute; any ship-now fixes; deploy posture | ✅ ratified 2026-06-09 (operator): **Full P1 + ship-now the live Criticals**; targeted deploy excluding embargoed `/commons` |
| 2b | P1 integration | How to integrate campaign-tier findings | ✅ ratified 2026-06-09: **fold into E5** (no new standalone missions; gap register routes all findings) |
| 3 | P1 → P2 gate | Confirm fixes complete; what folds into E5 vs future | ✅ ratified 2026-06-10 (operator plan-gate bundle): gate pre-approved conditional on S3 green (met); **E6/M5.13 insertion + capstone E6→E7**; **c162 context-graph cycle** into E5; **ship-now install-truth deploy**; **upstream PR filed** |

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
**Campaign completed 2026-06-10** (5 sessions, 2026-06-08 → 2026-06-10; estimated 4-7).

### Deliverables
- **Audit of record**: `audit_adna_network_2026_06.md` (now 9 sections incl. the §9 Phase-1b results) + results JSON — 15C/20H/26M/20L findings, all dispositioned.
- **Shipped fixes**: P1-S1 Criticals (deployed live 2026-06-09) · S2 Get Started CTA · S4 housekeeping (version/count single-sourcing, SidebarNav scoping, spec banner+JSON-LD) · S3 sweep fixes (code-`<pre>` focusability, light success-token + 2 coupled greens) · install-truth foundation (fixture + gate-12 + 3-surface rewrite; hotfix-deployed 2026-06-10).
- **Main-campaign realignment**: E5 resumed at c162 (re-mapped per-cycle plan); **new decadal E6/M5.13 Onboarding & Install Portal** authored (capstone→E7); D16 docs-III carry-ins; doctrine §9 Credibility Hygiene; deploy cadence resolved.
- **Cross-vault/upstream**: Hestia memo (vault-card public fields); upstream README-flip PR staged + filed (`LatticeProtocol/aDNA`); 3 new + 1 updated backlog ideas.

### Descoped
- Harness display split (Obj 11) — registry-of-record fields, Hestia's domain (memo open; regen handshake defined).
- Reduced-motion emulation tests + full internal link-graph crawl → D16. RSS feed → backlog (E6/E7 opportunistic).

### Key Findings
- **Credibility leakage, not performance, is the failure mode for a young standard** — private state in public meta, a named client, 404/301 canonical links, and an *install flow that didn't work* (gap #16) all sat behind green perf scores.
- The live `/get-started` taught a flow landing in the template's own refused state — install-truth must be **single-sourced + gated** (fixture + gate-12), not hand-written per surface.
- Token-coupled hardcoded colors are a recurring latent class (3 instances) — gate-14 material.

### Scope Changes
- P2 expanded under the operator plan-gate bundle (2026-06-09/10): E6/M5.13 authoring + c162 insertion + install-truth carry-down + upstream PR (see `mission_ana_p2_closeout_realign` §Scope expansion).

### Follow-Up Campaigns
- None standalone — everything folds into `campaign_adna_serious_tool_readiness` (E5 c163+ · E6 c170-179 · D16 c180-189 · E7 capstone).

## Campaign AAR

- **Worked**: The side-campaign pause pattern held — paused mid-decadal, audited cross-cutting, folded back via the gap register with zero orphans; ship-now hotfix path twice-used and now codified as cadence.
- **Didn't**: The audit initially scored 12/37 routes dark-only — the completeness critic had to force Phase-1b; coverage discipline should be Step-A, not a follow-up.
- **Finding**: An operator directive ("perfect portal for new users") and an audit Critical (install-truth drift) converged on the same object — the install funnel — which is what justified a new decadal rather than scattered fixes.
- **Change**: Full-route × both-modes × generated-detail-sample is the new audit floor (the `@audit` sweep harness is reusable); install-truth class facts get fixtures + gates, never prose.
- **Follow-up**: E5 c163 next session; Hestia memo ack → regen; PR review/merge → E6 O4; D16 mission authors at c180.

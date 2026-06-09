---
type: artifact
artifact_type: aar
mission_id: "mission_ana_p0_planning_audit + mission_ana_p1_m1_decisive_strokes (S1)"
campaign_id: "campaign_adna_network_audit"
created: 2026-06-09
updated: 2026-06-09
last_edited_by: agent_stanley
tags: [aar, artifact, audit, adna_network, mid_campaign, gap_register]
---

# AAR: adna.network Audit — P0 (audit) + P1 Session 1 (ship-now fixes)

> **Mid-campaign AAR.** P1-S2/S3/S4 + P2 still remain — this reviews the work to date and, via the
> **Gap Register (the integration ledger)**, routes every unshipped finding + coverage/process gap to
> a named destination so nothing is lost when we resume. Integration shape (operator-ratified): **fold
> into E5** — finish cross-cutting fixes in P1; fold the 5 campaign-tier redesign items into E5 cycles
> 162–169 at P2; process/framework gaps → backlog.

## Mission Identity
| Field | Value |
|-------|-------|
| Missions | `mission_ana_p0_planning_audit` (✅ completed) · `mission_ana_p1_m1_decisive_strokes` (S1 ✅, S2/S3/S4 pending) |
| Campaign | `campaign_adna_network_audit` (active; P2 pending) |
| Sessions | 2 (P0 audit; P1-S1 ship-now + deploy) |
| Duration | 2026-06-08 → 2026-06-09 |
| Commits | `426d99b` (P0) · `c0b41a6` + `00383c1` (P1-S1, deployed live) |

## Scorecard
| # | Deliverable | Status | Notes |
|---|-------------|--------|-------|
| 1 | P0 audit (Step-A tooling + 18-agent Workflow) | validated | local 27 + live 26 routes; Lighthouse 15 / axe / 106 shots / link-check / GitHub |
| 2 | Audit report + results JSON | validated | `audit_adna_network_2026_06.md` (656 ll) + `.json`; 15C/20H/26M/20L; scorecard + 3-tier roadmap + 11 quick-wins + critic |
| 3 | P1-S1 D1 — GitHub links → canonical `LatticeProtocol/aDNA` | validated/live | 404 + sitewide 301 gone (10 URLs + 8 name/dir refs) |
| 4 | P1-S1 D2 — `The Lattice` → `Vaults` | validated/live | 0 occurrences live (python-verified); Lattice reserved for the protocol |
| 5 | P1-S1 D3 — vault-detail meta sanitize + CakeHealth privacy scrub | validated/live | generator `publicNote()`; 36 notes cleaned; CakeHealth → 0 "Genentech" live; 0 residual leaks |
| 6 | P1-S1 D5 — `/vaults` color-contrast + gate coverage | validated/live | 78→0 nodes BOTH modes; added `/vaults` + `/get-started` + `/reference/specification` to gate-4 |
| 7 | P1-S1 H1 (partial) — version drift v2.0/v2.1 → v2.2 | validated/live | 8 files; legit version-progression examples left; "10-vs-14" non-issue untouched |
| 8 | P1-S1 robots.txt dead domain → adna.network | validated/live | (critic-surfaced, not in original roadmap tiers) |
| 9 | Targeted ship-now deploy (excluding embargoed `/commons`) | validated/live | `/commons`→404; build 159pp; gates 97/97; token redacted (no leak) |

**Validated**: 9/9 deliverables to date. **Shipped live**: D1, D2, D3, D5, version-sweep, robots, `/vaults` a11y.

## Gap Register — integration ledger (every outstanding finding → destination)
| # | Finding / gap | Sev | Source | → Destination (status) |
|---|---|---|---|---|
| 1 | **D4** Get Started CTA absent (header + hero) + normalize `/commons` "Read the standard"→`/reference/specification` | High | audit roadmap | **P1-S2** (pending) |
| 2 | **H1b** version **shared constant** (string sweep shipped; constant remains so it can't re-drift) | Med | roadmap H1 | **P1-S4** (pending) |
| 3 | **H2** vault-count **reconciliation** — `vaults.json`=37 vs registry-of-record (Home.aDNA) "38"; confirm true count + add missing record if 37 wrong; all counts derive from `vault_count` | Med | roadmap H2 | **P1-S4** (pending) |
| 4 | **H3** Harness/RareHarness/RareHarnessOld **display split** (public `display_name` + clinical-vertical vs legacy labels) | Med | roadmap H3 | **P1-S4** (pending) |
| 5 | **H4** SidebarNav **scoping** to current section + promote Glossary/Guides to a layout-independent entry | Med | roadmap H4 | **P1-S4** (pending) |
| 6 | **H5** `/reference/specification` reader-orientation banner + "now build one" CTA; **JSON-LD** on `/vaults` index + detail | Med/Low | roadmap H5 | **P1-S4** (pending) |
| 7 | **C1** home-hero **concrete-then-ethos** + promote How-it-Works above registry (note: a `/learn/what-is-adna` page already exists but is under-surfaced) | High | roadmap C1 + critic | **E5** homepage cycle (via P2) |
| 8 | **C2** **terminology/object-model spine** (node/aDNA-computer/vault/network) | High | roadmap C2 | **E5** 165–168 copy pass (via P2) |
| 9 | **C3** nav/orphan surfacing — `/commons` nav entry + audience pages + unify secondary nav + mobile SidebarNav disclosure | High | roadmap C3 | **E5 c164** (via P2) |
| 10 | **C4** closing-CTA partials (audience/community/vault-detail) + deferred **Connect affordance** | High | roadmap C4 | **E5 c162** (+c163/c164) (via P2) |
| 11 | **C5** ADR-010 embargo clear → **coordinated HEAD deploy** of `/commons` + the rest | Med-High | roadmap C5 | **E5-close c169** (via P2) + gap #14 |
| 12 | **Phase-1b coverage**: ~25 un-scored in-scope routes + 404; **light-mode** axe+shots; generated-detail-page axe sample; mobile-qual (vaults/graph/spec); Mermaid keyboard + no-JS; sitemap-resolves; linkcheck full-graph | High/Med | completeness critic | **P1-S3** (pending) |
| 13 | **Feature gaps** — no RSS/feed (versioned/changelog site), no newsletter/contact/**search**, no print/PDF for the normative spec | Med | completeness critic | **P1-S3 decide** (recommend → E5/backlog or defer) |
| 14 | **Deploy cadence** — live drifted multiple vault-states behind HEAD (40→38→37); no regular deploy | process | audit + this session | **backlog `idea_deploy_cadence`** + P2 process note |
| 15 | **Public-projection sanitizer** — the ADR-023 generator should sanitize private inventory → public data (the `publicNote()` pattern; Home.aDNA is local-by-default, Rule 4) | framework | P1-S1 fix → pattern | **backlog `idea_upstream_public_projection_sanitizer`** |
| — | **H6 / "10-vs-14 entity types"** | n/a | seed | **NO ACTION** — verified non-issue ("10 extensions + 14 base"); honored (untouched) |

> Quick-wins (11) are sub-items of D1/D2/D3/D5/H1/H2/D4 — all shipped (S1) or routed (S2/S4) above.

## Technical Debt
| # | Debt | Impact | Priority | Tracking |
|---|------|--------|----------|----------|
| 1 | Audit scored only ~12/37 routes narratively; dark-mode-only AA evidence | unverified coverage on the long tail | high | **P1-S3** |
| 2 | Vault-count source-of-record unresolved (37 vs 38) | the "single number" can still disagree | med | **P1-S4** |
| 3 | No deploy cadence → live silently stale | public credibility bugs sit live | high | **`idea_deploy_cadence`** |
| 4 | Header CSS comment cosmetic-only fix; `note`-as-public-blurb is a stopgap (proper public `tagline` per vault not authored) | thin registry blurbs until taglines exist | low | P1-S4 / E5 |

## Readiness Assessment
| Criterion | Status | Evidence |
|-----------|--------|----------|
| Deliverables to date validated | GO | 9/9; live-verified |
| No unresolved Critical *live* | GO | all Critical live items shipped + deployed (incl. CakeHealth privacy, /vaults a11y) |
| Findings tracked (no orphans) | GO | gap register routes every roadmap item + critic gap |
| Dependencies for next mission | GO | P1-S2 needs only the report (exists) |

**Overall: GO** — continue P1-S2 → S3 → S4 → P2 (realign into E5) → resume the main campaign at E5 c162.

**Rationale**: the urgent, live credibility/privacy/a11y risks are fixed and deployed; everything else is priced, tracked, and routed. The campaign is healthy to continue at a measured pace.

## Recommendation
Resume next session at **P1-S2** (Get Started CTA). Then S3 (Phase-1b verification — and *decide* the RSS/search/print feature gaps), S4 (housekeeping batch). Then **P2** folds C1–C5 into E5 c162–169, establishes a deploy cadence, files the backlog ideas' resolutions, updates the heavy `STATE.md`, and resumes the main campaign.

## Lessons Learned
- **Verify audit seeds before asserting.** My Step-A "10-vs-14 entity types" seed was a false positive; the completeness critic caught it before a bad "fix" shipped. Seeds are hypotheses, not findings.
- **Credibility-leakage is the real failure mode for a young standard, not performance.** Perf was 100s everywhere; the damage was internal/private state (campaign jargon, a named client) bleeding into public meta/body. Automated green scores masked the real risk.
- **Step-A tooling → Workflow fan-out produced cited, non-hand-wavy findings.** Pre-capturing the evidence bundle (Lighthouse/axe/screenshots/DOM) and handing it to the agents made every finding cite a URL+element.
- **Light-mode + full-route + generated-detail coverage should be first-class Step-A, not a Phase-1b afterthought.** The critic had to expose the dark-only / 12-of-37 coverage.
- **Node `grep` flaked false-positives** on this machine (claimed "The Lattice" present when python confirmed 0). Verify destructive/blocking claims with python, not grep ([[feedback_node_shell_flake]]).
- **Sanitize at the source, not the surface.** Fixing `publicNote()` in the generator cleaned all three render sites + the committed data at once — better than per-template patches.

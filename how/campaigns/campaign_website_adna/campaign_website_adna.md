---
campaign_id: campaign_website_adna
type: campaign
title: "WEBSITE.aDNA — Frontier-Grade Site Quality"
owner: stanley
persona: berthier
status: active
phase_count: 5
mission_count: 5
estimated_sessions: "12-24"
calibrated_sessions: "14-20"
estimation_class: content-novel
priority: high
target_site: "https://aDNA.network (source: aDNA.aDNA/site/, Astro SSG → Vercel direct)"
predecessor_campaigns:
  - campaign_adna_network_audit            # completed 2026-06-10; audit of record = resolved baseline (do NOT redo)
  - campaign_rosetta                        # P0-P7 complete; Phase 8 → absorbed into STR P5 → carried here
  - campaign_adna_serious_tool_readiness    # active; website decadals E5/E6 subsumed here at activation
activated: 2026-06-18                        # Operator Decision 1 approved (plan: please-read-the-claude-md-wise-riddle.md)
created: 2026-06-17
updated: 2026-06-19
last_edited_by: agent_rosetta
tags: [campaign, website, adna_network, frontier_grade, side_campaign]
---

# Campaign: WEBSITE.aDNA — Frontier-Grade Site Quality

> Governance: `CLAUDE.md` (this directory) is the promoter and scoring doctrine. This file is the operational plan.
>
> **Track A — "prove it real" — under [[campaign_operation_adna]]** (Operation aDNA program umbrella, stood up 2026-06-18). WEBSITE.aDNA proves aDNA is real; [[campaign_hearthstone]] (Track B) makes it real. Credibility-integrity (FINDINGS systemic pattern #1) is the program quality bar.

## Goal

Bring **`aDNA.network`** to a standard where a senior engineer at a frontier lab (Anthropic, Stripe, Vercel, Linear, NVIDIA) lands on it and registers the same instinctive trust they would on those sites: **concise, beautiful, compelling, and credibly real.** Every page, image, and component is inspected, introspected, and improved across read-only-audit → research-grounded-critique → planned-improvement → verified-re-audit cycles — until every unit holds **≥4 on all eleven A–K axes with zero open Critical or High findings**, Core Web Vitals sit in the Good band site-wide, the site speaks in one coherent voice, and the Skeptical Frontier Engineer signs off: *frontier lab, not template.*

## Context

Chartered by the operator on 2026-06-17. WEBSITE.aDNA **consolidates** a website-quality mandate that until now was split across three campaigns:

- **`campaign_adna_network_audit`** — completed 2026-06-10. Its 9-axis audit of record (15 Critical / 20 High / 26 Medium / 20 Low, all dispositioned; Criticals shipped) is the **resolved baseline**. We diff against it; we do not re-fight it.
- **Operation Rosetta (`campaign_rosetta`)** — site build, Phases 0–7 complete; its Phase-7 III loop drove the decadal ranker to **5.00**. M35's verdict: *the incremental surface is exhausted; only structural changes move the needle now; open the next campaign with a fresh baseline ranker.* Rosetta's seeded **Phase 8** was absorbed into STR Phase 5.
- **STR (`campaign_adna_serious_tool_readiness`)** — active. Its Phase 5 carries the live website decadals: **E5 (commons)** in progress (built through ~c165; MAX-III + 30-persona RLP pending) and **E6 (onboarding/install portal)** queued (~c170). These are the outstanding website work this campaign subsumes.

The improvement **engine already exists and is battle-tested** — `skill_iii_cycle` (7-step), `skill_decadal_aar` (5-persona × 6-dim ranker hard gate), the `who/reviewers/` bench, the `@audit` route sweep, 10 Playwright gates, dual-mode axe, Lighthouse evidence. We **inherit it, reset the baseline ranker, and aim it at structural and frontier-grade moves** rather than rebuilding it. North-stars honored: `narrative_ethos_public_good`, brand lock **ADR-032** (Tokyo Night / SS-Ghibli), network-edge honesty **ADR-033**, repo canonicalization **ADR-034**.

**Roles:** chartered by the operator; planned/coordinated by **Berthier** (chief of staff, ecosystem-site charter, coord 2026-06-03); executed by the rotating persona cell with **Rosetta** as resident agent for `aDNA.aDNA/site/`. The site *renders* the network; it does not author org/network/rename decisions (Berthier-upstream domain — adaptation-seam contract).

## Scope

### In Scope
- **Every live route on `aDNA.network` (~41)** + every distinct image + every distinct component — each a scored unit on the A–K scorecard (`SITEMAP.aDNA.md`).
- **Systemic fixes** applied once at the system level: design-token / spacing-scale / accent / typography discipline, the banned-vocabulary pass, the stale-terminology sweep.
- **The four frontier emphases** the D1–D10 surface under-weighted: **D** Demonstration Density, **E** Scientific & Institutional Credibility, **J** Standard Fidelity & Currency, and **agentic-browsing readiness** under **G**.
- **Tooling promotion (additive only):** Lighthouse archive → automated budget/gate (incl. Agentic Browsing category); `@audit` sweep → regression gate in `test:gates`; semantic visual-regression baseline.
- **Named deliverables:** `RECONCILIATION.aDNA.md`, `SITEMAP.aDNA.md`, `FINDINGS.aDNA.md`, `CAMPAIGN-REPORT.aDNA.md` (in `missions/artifacts/`).

### Out of Scope
- Authoring org / network / membership / rename / marketplace decisions — Berthier-upstream domain. Design against stable seeds behind the adaptation seam.
- Editing the engine skills (`skill_iii_cycle`, `skill_decadal_aar`) — additive tooling only.
- **Claiming any institutional partner without graph-traceable evidence** (Dell, NVIDIA, Mayo, Stanford, CZI verified unsupported — see §Integration Map (f)).
- Ratifying ADRs (gated to phase exits / operator).
- Net-new pages beyond what `FINDINGS.aDNA.md` justifies and the operator approves.
- Deploying outside an explicit ship-now flag or deploy gate (commit-only default).

### Subsumes

| Plan/Mission | Status at Subsumption | Tasks Absorbed By |
|--------------|----------------------|-------------------|
| [[mission_adna_str_p5_m512_e5_public_good_commons]] (STR E5 — commons) | active (build ~c165; MAX-III + 30-persona RLP pending) | Phase 3 decadals |
| [[mission_adna_str_p5_m513_e6_onboarding_install_portal]] (STR E6 — install portal) | planning (opens ~c170) | Phase 3 decadals |
| Operation Rosetta Phase 8 | absorbed into STR P5 (2026-05-17) | carried via STR P5 → Phase 3 |
| `campaign_adna_network_audit` deferrals (RSS, on-site search, newsletter, print/PDF, full link-graph crawl, harness display split, D16 docs-III) | deferred-with-owner | Phase 3 backlog seeds |

> **Subsumption is executed at activation, not now.** Per `how/campaigns/AGENTS.md`, absorbing a mission sets its original `status: subsumed`. The two STR missions are **active/planning**; their status is changed **only after the operator approves activation** (Decision 1). This planning doc records the plan; it edits no STR file and touches no `STATE.md`.

## Phases & Missions

### Phase 0 — Reconnaissance & Ground Truth *(read-only; no changes)*
| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| P0 | [[mission_wadna_p0_recon_reconcile]] — ground-truth model · `RECONCILIATION.aDNA.md` · `SITEMAP.aDNA.md` · frozen baseline · benchmark set | 1-2 | — | **completed 2026-06-18** (Decision 2) |

**Phase exit gate** *(human)*: current-state model of the standard; `RECONCILIATION.aDNA.md` (diff between what the standard now is and what the site says, with dispositions); `SITEMAP.aDNA.md` (complete unit inventory, each unit a scorecard); frozen baseline (Lighthouse all-categories incl. Agentic Browsing + axe + full screenshot matrix, every page); benchmark reference set. **Nothing changed.**

### Phase 1 — Research-Grounded Critique *(read-only; no changes)*
| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| P1 | [[mission_wadna_p1_critique]] — rubric dossiers (A–K) · baseline persona sweep · `FINDINGS.aDNA.md` · systemic-pattern list · reconcile personas vs the 14-reviewer + 16-adopter benches (author only uncovered lenses) · author the **K**-axis dossier | 1-2 | P0 | **completed 2026-06-18** (Decision 3) |

**Phase exit gate** *(human)*: a rubric dossier per A–K axis (what "frontier-grade" means for a federated rare-disease platform, with benchmark examples); `FINDINGS.aDNA.md` (every finding tagged dimension × severity × unit, sorted by severity × reach); systemic-pattern list; the prompt's seven personas reconciled against the 14-reviewer + 16-adopter benches, with only the uncovered lenses (Standard Archivist, Performance Engineer + any genuine extensions) authored in `who/reviewers/`. **Nothing changed.**

### Phase 2 — Improvement Design *(plan only)*
| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| P2 | [[mission_wadna_p2_design]] — improvement specs (Crit/High) · systemic-fix package · dependency-ordered decadal plan · per-unit done-definition · tooling-promotion spec | 1 | P1 | **completed 2026-06-19** (Decision 4; deliverables filed: [[IMPROVEMENT-SPECS.aDNA]] · [[TOOLING-PROMOTION.aDNA]] · [[DECADAL-PLAN.aDNA]]) |

**Phase exit gate** *(human)*: an improvement spec for every Critical/High finding (the change, the axis it moves, the target score, the verification that proves it); the systemic-fix package (tokens/spacing/accent/type + banned-vocab + stale-terminology, as single coordinated changes); the dependency-ordered session plan (systemic before local; content-truth before visual craft; severity × reach first); the per-unit done-definition; specs for the Lighthouse gate, `@audit` regression gate, and visual-regression baseline.

### Phase 3 — Iterative Improvement & Verification *(the bulk)*
| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| P3 | [[mission_wadna_p3_iterate]] — decadal improvement loops (VIEW → INTROSPECT → PLAN → IMPROVE → VERIFY → GATE); systemic-first, then flagship pages, then deep pages | 6-15 | P2 | **active** — D1 (CLOSED + deployed-live) · D2 · D3 · **D4 all CLOSED GO** (D4 2026-06-21, panel C4·F5·G5·H4.5; C1–C6 commit-only `9bb3ea8`…`c881dbd`; H-11 no-SSR + M-7 no-rebuild; [[aar_decadal_d4_visual_craft]]); **CLOSED 2026-06-21 (Decision 5 GO → P4 opened)**. Gate baseline 281. |

> P3 expands into N decadal sub-missions at activation; count set at Phase 2 close. Sequence: **systemic fixes → flagship pages** (landing, `/network`, `/learn/what-is-adna`, `/get-started`, `/vaults` + `/vaults/graph`, **`/community`**) **→ deep pages.**

**Phase exit gate** *(human)*: every unit ≥4 on every A–K axis; zero open Critical/High; each decadal closed with `skill_decadal_aar` (reset baseline ranker, all dims ≥4.0, no Lighthouse regression, AAR filed); flagship pages passed their benchmark side-by-side.

### Phase 4 — Whole-Site Coherence & Sign-Off
| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| P4 | [[mission_wadna_p4_signoff]] — cohesion pass · cold 3-sec test · final metric sweep vs frozen baseline · `CAMPAIGN-REPORT.aDNA.md` · standing-watch automation | 1 | P3 | **active (opened 2026-06-21, Decision 5 GO)** |

**Phase exit gate** *(human)*: one coherent voice end-to-end (type, spacing, accent, motion, voice); cold 3-second test passed by every persona on the live improved site; final Lighthouse / axe / CWV / screenshot sweep vs the frozen baseline (before/after delta); `CAMPAIGN-REPORT.aDNA.md` filed; standing-watch (always-on automated floor) wired to catch future drift. **The Skeptical Frontier Engineer delivers the final verdict.**

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| 1 | Activation (before P0) | Approve scope/phases; approve **subsumption** of STR E5/E6 (sets their status `subsumed`); approve the persona-cell + the additive tooling-promotion | **✅ approved 2026-06-18** (plan `please-read-the-claude-md-wise-riddle.md`) |
| 2 | P0 → P1 | Approve `RECONCILIATION.aDNA.md` dispositions (esp. partner-claim removals + terminology sweep) and the `SITEMAP.aDNA.md` unit list | **✅ approved 2026-06-18** |
| 3 | P1 → P2 | Approve `FINDINGS.aDNA.md` prioritization and the reconciled/new reviewer lenses (only uncovered ones authored) | **✅ approved 2026-06-18** — credibility-integrity-first P2 sequence; two-stage C-1/C-2 (real aDNA.aDNA artifacts now → Hearthstone base at keystone) |
| 4 | P2 → P3 | Approve improvement specs + decadal session plan + per-unit done-definition + deploy posture | **✅ approved 2026-06-19** — open P3 (D1 credibility first); C-1 = repoint-to-public-image; publisher = "aDNA Network"; commit-only through P3; pt19 = verify-after |
| 5 | P3 → P4 | Confirm all units cleared the bar; flagship benchmark side-by-side passed | **✅ approved 2026-06-21** — all 4 decades CLOSED GO; P3 → completed, P4 (sign-off) opened |
| 6 | P4 close | Sign-off verdict; standing-watch wired; `STATE.md` updated; STR resume/realign | pending |

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| Duplicate / conflicting work vs active STR | High | Subsumption at activation sets STR E5/E6 → `subsumed`; one gap register; Standard Archivist re-runs `RECONCILIATION.aDNA.md` continuously; if STR ships a standard change mid-flight, reopen any unit whose facts went stale |
| Re-fighting shipped audit fixes | Medium | `audit_adna_network_2026_06.md` loaded as resolved baseline; Phase 0 diffs against it |
| Incremental-polish trap (Rosetta 5.00 ceiling) | High | Reset baseline ranker; Phase 2 prioritizes **structural** moves + axes D/E/J — not D1–D10 re-polish |
| **Credibility leakage shipped publicly** (the documented failure mode) | **Critical** | Axes E/J are first-class; any naming / partner / standard-fidelity defect is **auto-Critical** regardless of technical severity; honesty doctrine gate; coverage is Step-A |
| Brand drift from the ADR-032 lock | Medium | `branding.json` tokens authoritative; Design Purist + brand gate G8; ≤2 fighting colors; ~55/45 dial fixed; consume `var(--color-*)`, no hex literals |
| Scope creep into Berthier-upstream (org/network/rename) | Medium | Adaptation-seam contract; site renders, does not author; out-of-scope explicit |
| Token / coordination spend across decadals | Medium | Per-mission budget declared (ADR-016 two-track); systemic-first sequencing; decadal gates |
| Live ≠ local deploy gap confusion | Medium | Audit both; tag every finding `local`\|`live`; deploy gap is a first-class finding, not noise |

## Verification Strategy

### Per-Mission
| Check | Method | Gate? |
|-------|--------|-------|
| SITREP filed | Session closure | Yes |
| AAR produced | 5-step (`template_aar.md`) / lightweight; scorecard + GO/NO-GO | Yes |
| Deliverables validated | every finding cites unit + axis + severity + evidence | Yes |
| Files committed | git status clean (commit-only; no deploy unless flagged) | Yes |

### Per-Phase
| Check | Method | Gate? |
|-------|--------|-------|
| Phase exit criteria met | this doc's phase exit gate | Yes — operator approval |
| Scope changes documented | this doc's scope section | Yes |

### Campaign Validation (frontier gates)
| Check | Method |
|-------|--------|
| Every unit ≥4 on every A–K axis; zero open Critical/High | `SITEMAP.aDNA.md` final scorecards |
| Core Web Vitals in the Good band site-wide | Lighthouse gate (LCP<2.5s · INP<200ms · CLS<0.1) |
| axe clean, both modes, every page | `@audit` regression gate |
| Standard Fidelity verified | `RECONCILIATION.aDNA.md` re-run clean; grep hit-list empty |
| Flagship benchmark side-by-side passed | Phase 3/4 benchmark check |
| One coherent voice; sign-off | Phase 4 cohesion pass + Skeptical Frontier Engineer verdict |
| STATE.md updated; STR realigned | Phase 4 close |

## Timeline
| Phase | Missions | Sessions |
|-------|----------|----------|
| P0 Recon & Ground Truth | P0 | 1-2 |
| P1 Research-Grounded Critique | P1 | 1-2 |
| P2 Improvement Design | P2 | 1 |
| P3 Iterative Improvement (bulk) | P3 (→ N decadals) | 6-15 |
| P4 Coherence & Sign-Off | P4 | 1 |
| **Total** | **5 missions (P3 expands)** | **12-24 sessions** |

## Integration & Reconciliation Map

This section is the spine of the operator's directive: *integrate outstanding goals/missions, AAR findings, and standard changes.*

### (a) Campaign lineage
```
campaign_adna_network_audit  ──(resolved baseline; audit of record)──┐
campaign_rosetta  P0–P7 ✅  ──(Phase 8 absorbed)──► STR Phase 5 ─────┤
campaign_adna_serious_tool_readiness  P5: E5 (active) · E6 (queued) ──┴──► WEBSITE.aDNA
```
WEBSITE.aDNA is the single home for the frontier-grade site verdict. STR keeps its non-website tracks; its website decadals fold in here.

### (b) Inherited machinery — reuse as-is, do not rebuild
`skill_iii_cycle` (7-step) · `skill_decadal_aar` (5-adopter × 6-dim ranker hard gate) · `who/reviewers/` bench (14 reviewers) + `who/adopters/` (16 adopters) · `@audit` route sweep · 10 Playwright gates · dual-mode axe · Lighthouse evidence archive · `branding.json` + `tokens.css` · `front_page_doctrine` · `writing-guidelines` · `narrative_ethos_public_good`.

### (c) Inherited AAR findings — folded into the done-definition
- **"Credibility leakage, not performance, is the failure mode for a young standard."** *(network_audit)* → axes E/J first-class; credibility defects auto-Critical.
- **"Full-route × both-modes × generated-detail-sample is the audit floor — coverage is Step-A, not a follow-up."** *(network_audit)* → baked into Phase 0/3 method.
- **"Install-truth / class-facts get fixtures + gates, never prose."** *(network_audit)* → applies to install commands, version, counts.
- **"The incremental surface is exhausted; structural changes are needed; reset the baseline persona ranker."** *(Rosetta M35)* → Phase 0 resets the ranker; Phase 2 prioritizes structural moves.
- **"Lock cycle-tracker update discipline at decadal close, not cycle level."** *(Rosetta M35)* → Phase 3 decadal protocol.

### (d) Dimension crosswalk
A–K ↔ D1–D10 ↔ persona ↔ tooling lives in `CLAUDE.md` §Quality Dimensions. Net new vs the D-surface: **D** (Demonstration Density), **E** (Scientific & Institutional Credibility), **J** (Standard Fidelity), agentic-browsing under **G**; plus **K** (Community & Collaboration Legibility, ratified 2026-06-17 — the fourth axis, extends D + E + B).

### (e) Carried backlog seeds (network_audit deferrals → Phase 3)
RSS feed · on-site search · newsletter · print/PDF · full internal link-graph crawl · harness display split (Hestia coordination) · D16 docs-III carry-ins · reduced-motion emulation tests.

### (f) Standard-currency deltas to reconcile *(pre-seeded; full diff = Phase 0 `RECONCILIATION.aDNA.md`)*
Concrete hits already located by reconnaissance — the executing agent starts here, not cold:

> **Deconfliction (activation 2026-06-18): Honor pt19, sequence.** The vault rename/merge/count/edge currency below is **Production-Tidy-owned** — Operation Production Tidy regenerates `vaults.json`/`vaults_graph.mmd`/`network_edges.yaml` in its single coordinated **pt19** pass (it defers all derived projections there; `inventory_vaults.yaml` is already current). RECONCILIATION therefore tags each row `website-owned` | `pt19-owned`, **flags + verifies-after** the pt19-owned class (no `sync:vaults`, no hand-edit of `vaults.json`), and Phase 3 sequences the data-coupled units post-pt19. Brand / version / partner / meta currency is **website-owned** and fixed in-campaign. Detail: `missions/mission_wadna_p0_recon_reconcile.md` §Coordination — pt19 data-layer.

| Hit | Location | Disposition |
|-----|----------|-------------|
| Stale org URL `github.com/LatticeProtocol` baked into JSON-LD | `site/src/utils/seo.ts` (~L48, L100) | → `aDNA-Network/aDNA`; invisible to humans, visible to crawlers |
| Stale `social.github` = `LatticeProtocol/Agentic-DNA` | `site/branding.json` | → `aDNA-Network/aDNA` |
| Retired label **"The Lattice"** for the vault registry | `Header.astro`, `vaults.json` title/H1 | → "Vaults" / "the registry" |
| Version drift (v2.0 / v2.1 in footers, comparisons) | open-standard.mdx, 5 comparison docs, specification.mdx | → unify to **v2.2** from one constant |
| Fabricated spec citation ("federation protocol §11") | open-standard.mdx, comparison docs, federation pages | → spec §11 is "Coordination Protocol"; keep `lattice://` as a convention, remove the §11 attribution |
| Unsupported institutional partners | any "trusted by" / partner surface | → **remove unless graph-traceable evidence is produced.** Dell/NVIDIA/Mayo/Stanford/CZI verified unsupported. Real public-good affiliations are internal vaults (WGA, ContextCommons, WilhelmAI, RareArchive) |
| Vault-count drift (live "40" vs `vaults.json`) | trust strip / copy | → single-source from `vaults.json` |
| Internal codenames in vault `og:description` (~37 pages) | `vaults/[slug]` generated meta | → `public_summary` field; scrub campaign/phase jargon |

> **Confidentiality note:** the prior audit already scrubbed a named-client / "Genentech" / private-LP leak on the CakeHealth vault page (ADR-010 embargo). The Standard Archivist re-confirms no embargoed names re-enter any public surface before each deploy.

### Canonical facts the site must match (ground-truth model)
1. **aDNA** = the network/brand/face; **Lattice Protocol** = the protocol/standard substrate. Never collapse to "aDNA Protocol." Keep `lattice://`.
2. Canonical repo = **`aDNA-Network/aDNA`** (1-command clone-and-run); legacy = `aDNA-Network/adna-legacy`.
3. Standard = **v2.2**; governance = v6.0 (v7.x template image). Two independent version tracks — never conflate.
4. Triad = `what/` / `how/` / `who/`; **14 base entity types**.
5. Compute tiers **L0/L1/L2/L3** are correct. Real platform vaults include LatticeTerminal, LatticeAgent, Cmux, RareHarness, Alpha Lattice — **and `TaskForge.aDNA`, a real governed vault** (corrected 2026-06-17; it is *not* a phantom subsystem). The subsystem the standard calls **Cmux ships under the public display-name "Terminal"** — the public name is a **Berthier-upstream** decision (flagged, not decided here). Only **"Dispatch"/"Store"** do not exist — do not use them.
6. Honesty doctrine load-bearing (ADR-033): no decorative/speculative claims, edges, or partners.
7. Open / MIT / FAIR / governed; **local-first, opt-in P2P federation**; SPDX in FAIR blocks.

## Notes
- **Amendment 2026-06-17 — `RESEARCH-IMPROVEMENT-PLAN.aDNA.md` ratified (operator).** Axis **K** (Community & Collaboration Legibility) added → the scorecard is now **A–K (11 axes)**; **`/community`** added to the flagship set; canonical-facts corrected (**`TaskForge.aDNA` is a real vault**; Cmux↔"Terminal" naming routed upstream); P2 tooling-promotion expanded with five build gates; P1 dossier inputs added (maturity-ladder / power-disclaimer / phase-ladder). Apparatus drift **M1** (front_page_doctrine §9.3 stale repo) · **M5** (visual-identity v2/v3) · **M6** (doctrine currency) routed to P0 `RECONCILIATION.aDNA.md`. Campaign **`status: active`** — **activated 2026-06-18** (Operator Decision 1: scope/phases + STR E5/E6 subsumption + persona-cell/tooling-promotion approved). Deconfliction posture with Operation Production Tidy = **Honor pt19, sequence** (vault rename/merge/count/edge currency is Production-Tidy-owned via its pt19 coordinated regen — RECONCILIATION flags + verifies-after, never hand-fixes; no `sync:vaults` until pt19; data-coupled units sequenced post-pt19). Plan: `~/.claude/plans/please-read-the-claude-md-wise-riddle.md`.
- **Commit-only posture** by default; deploy on an explicit ship-now flag or deploy gate. Direct Vercel SSG deploy from `aDNA.aDNA/site/` — there is no separate public mirror in the publish path.
- **Audit both local current-HEAD and live `adna.network`;** label every finding `local`|`live`; the deploy gap is a first-class finding.
- The campaign is **structural**, not another polish lap. If a decadal produces only marginal ranker movement on D1–D10 surfaces, that is a signal the work is on the wrong axis — pivot to D/E/J.

## Completion Summary
*Fill out when setting `status: completed`.*

### Deliverables
- *(pending)* — `RECONCILIATION.aDNA.md`, `SITEMAP.aDNA.md`, `FINDINGS.aDNA.md`, `CAMPAIGN-REPORT.aDNA.md`; shipped improvements; standing-watch automation.

### Descoped / Key Findings / Scope Changes / Follow-Up Campaigns
- *(pending)*

## Campaign AAR
*Mandatory before `status: completed`. See `how/templates/template_aar_lightweight.md`.*
- **Worked**: *(pending)*
- **Didn't**: *(pending)*
- **Finding**: *(pending)*
- **Change**: *(pending)*
- **Follow-up**: *(pending)*

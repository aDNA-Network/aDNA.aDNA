---
campaign_id: campaign_adna_serious_tool_readiness
type: campaign
title: "aDNA Serious-Tool Readiness — comprehensive upgrade cycle (v8.0 target)"
owner: stanley
persona: Rosetta
status: active  # P0 open; this campaign-master file is the P0 deliverable
phase_count: 7  # P0 Planning + P1-P6 execution
mission_count: 29  # ~20-30 estimated; finalized at P0 close
estimated_sessions: "43-100"  # 43 lower-bound; 100 upper-bound per merry-dewdrop FBP-C27 comparison
calibrated_sessions: "60-80"  # mid-band estimate
estimation_class: governance-broad  # multi-phase, multi-area, cross-vault
priority: high
predecessor_campaigns:
  - campaign_rosetta  # Operation Rosetta P0-P7 complete 2026-04-26 (ranker 5.00); Phase 8 ABSORBED into v8 Phase 5
  - campaign_lattice_workspace_ux  # mini-campaign closed 2026-05-13 (3 missions, 8/8 deliverables, 21 findings routed)
  - campaign_adna_v2_infrastructure  # v2 ships M05+M06 before v8 absorbs; M08c/M09/M10/M11 ABSORBED
successor_campaigns:
  - campaign_adna_v3_ecosystem_compliance  # opens at v8 P6 close; per-vault application of v8.0
absorbed_campaigns:
  - campaign_obsidian_deployment_stabilization  # 8 tracks T1-T8 ABSORBED into v8 Phase 3
tag_target_at_close: v8.0  # Major Governance bump per ADR-011 semver
created: 2026-05-17
updated: 2026-05-18
last_edited_by: agent_stanley
amendments:
  - 2026-05-18: "v8 M1.1 coord checkpoint fired — `campaign_adna_v2_infrastructure` M05 ship-before COMPLETE per 3-session arc closure 2026-05-18T15:19:07Z+ (`session_stanley_20260518_151907_adna_v2_m05_s3`; AAR at `../campaign_adna_v2_infrastructure/missions/artifacts/aar_m05_publish_skill_rewrite.md`). M05 delivered: ADR-010 ratified (Keep + Add naming) · `skill_lattice_publish.md` light-edited + 3 NEW skills (`skill_vault_publish.md` + `skill_git_remote_setup.md` + `skill_deploy.md`) · `pre-push-sanitize.sh` LAYER_CONTRACT_VERSION=4.0.1 + 8 self-test fixtures + hook self-test upgraded warn-to-validate · 2 in-session defect fixes (post-flatten path-form drift + POSIX-vs-PCRE regex escape interpretation; both upstream-committed `.adna` `dfced67`). Upstream `LatticeProtocol/adna` HEAD = `dfced67` (M05 S2). aDNA.aDNA HEAD = `2b02a3e` (M05 S2). Load-bearing finding (verification-as-first-class deliverable) informs v8 implementation-class missions: M3.4 codifies `skill_verification_handoff.md` per Standing Order #16; M3.x and M4.x implementation missions plan verification phases before mission close. **M06 (v7.0 tag execution + GitHub repo rename per ADR-006) still required for v8 P1 entry** per D7 + Standing Order #16 (v7.0 tag dependency hard). M06 unblocked at M05 S3 close; opens at operator discretion per Standing Order #1 (phase gates are human gates). v8 stays at P0 — P0 → P1 transition awaits M06 v7.0 tag ship. No v8 mission file mutations this fire; no v8 deliverables consumed; lightweight amendments-entry mechanism per plan §D4 Option A (internal coord checkpoint; not a partner handoff) + v2 amendments-entry precedent."
  - 2026-05-18: "**v8 M1.2 coord checkpoint fired + v8 P0 → P1 transition UNBLOCKED** — `campaign_adna_v2_infrastructure` M06 + CAMPAIGN CLOSED per 2-session arc closure 2026-05-18T19:10Z+ (`session_stanley_20260518_183851_adna_v2_m06_s2`; AAR at `../campaign_adna_v2_infrastructure/missions/artifacts/aar_m06_v7_governance_tag.md`). **v7.0 annotated tag LIVE at `LatticeProtocol/aDNA` commit `27e6395`** (tag SHA `3681f76`); GitHub release published at `https://github.com/LatticeProtocol/aDNA/releases/tag/v7.0`; **10/10 post-tag verification checks PASS**; **ADR-011 (semver discipline) ratified** at S2 phase gate (file at `aDNA.aDNA/what/decisions/adr_011_aDNA_semver_discipline.md`); **ADR-006 amended** per D1=Option A to canonicalize mixed-case `aDNA` URL slug matching realized GitHub state. **Standing Order #16 hard dependency satisfied — v7.0 tag exists; v8 P1 ENTRY UNBLOCKED**. Upstream `LatticeProtocol/aDNA` HEAD = `27e6395` (mixed-case slug per ADR-006 amendment). **Load-bearing finding (campaign-close-as-distinct-mission-class)** informs v8 P6 close mission: the mission that fires the v8.0 tag IS v8's campaign close (single-trigger event compresses mission_close + campaign_close into one). **Companion finding (S3-absorb under Rosetta-defaults compression)** generalizes 3-session shape: M06 went 2-session because S2 absorbed S3 when operator pre-resolved 5 D-decisions in one AskUserQuestion default-vs-override. v8 implementation-class missions adopt this compression option. **F3 pattern (cross-mission defect resolution via fold-in)** documented in M06 AAR §Conceptual contributions #2 — canonical resolution when downstream mission is parked behind upstream AND upstream has hard dependency on downstream's output. **v2 campaign closed metrics**: 7 missions (M02→M08a→M03→M04→M04b→LWX-mini→M05→M06); 6 ADRs ratified (006 amended/007/008/009/010/011); 1 GitHub repo rename + 1 annotated v7.0 tag + 1 GitHub release; 19+ artifact deliverables; 4 implementation-class missions confirm 3-session shape durable. **17 partner-vault v7.0 migration cohort UNFROZEN** at this tag firing (all `coord_2026_05_09_v7_*.md` memos unfreeze per D5 passive; partner pull-cadence operator-discretionary). **v2 absorbed work resolves to v8 phases**: M08c → P4 standalone installer; M09 → P1+P2 token audit; M10 → P1 LatticeScope planning; M11 → P6 final review; M07 partial-absorbed (review/simplify distributed across v8 phases). M08b (post-flatten ecosystem propagation receipts + Wilhelm post-co-sign acknowledgment add) parallel-runs informationally; F3 fold-in absorbed M08b's primary upgrade-guide-copy responsibility. **Items deferred to v8 P1 absorb**: doc grep deeper sweep (18+ tutorial/example files; mixed-case URL canonicalization); MANIFEST.md Project Identity cosmetic; token estimate re-measurement; CLAUDE.md skills inventory table comprehensive review. **Next**: v8 P0 → P1 transition (operator-gated per Standing Order #19 + #1; phase exit = human gate). P1 mission slate proceeds per master §Phase 1: M1.3 token audit (consumes M01 Obj 9 token-measurement-protocol spec verbatim); M1.4 LatticeScope.aDNA planning (consumes v2 M10 absorbed scope); plus the deferred-from-M06 items above as candidate P1 sub-missions. No v8 mission file mutations this fire (P0 → P1 transition prep only); lightweight amendments-entry mechanism per M05 S3 M1.1 precedent."
tags: [campaign, v8, serious_tool_readiness, comprehensive_upgrade, multi_vault, rosetta]
---

# Campaign: aDNA Serious-Tool Readiness

> **North-star**: Make aDNA a *"serious tool for developers/companies/communities of many types."* Tag v8.0 at close.

## Goal

Ship aDNA v8.0 as a community-ready knowledge-architecture standard. After this campaign, an external operator can: (1) install aDNA via a one-command bootstrapper that provisions terminal + `~/lattice/` + `.adna/` template + node.aDNA; (2) operate context graphs fluidly via a Bases-driven Obsidian home page with per-vault info pages and agent-driven inspection; (3) understand the architecture in under one read of the website + readme (ranker ≥ 4.95 on both); (4) contribute via a community pathway documented in `who/community/`. Six operator-specified concern areas converge on this single outcome.

## Context

`campaign_lattice_workspace_ux` closed 2026-05-13 with 21 findings cataloged + 3 architectural primitives codified (verification-handoff topology, single-commit additive-upstream pattern at 4 instances, scope-vs-role naming). The closeout surfaced an operator north-star: *"easy and fluid way to build/operate/utilize context graphs"*.

`campaign_adna_v2_infrastructure` is mid-Phase-2 with M05 (publish-skill rewrite) marked `next`. Beyond M05+M06 (v7.0 tag), v2's queued P3+ work (M07 simplify + M08b receipts + M08c installer stub + M09 token audit + M10 LatticeScope planning + M11 close) was sized when "serious-tool readiness" was not yet an explicit campaign-level goal.

Cross-vault, the past 4 days surfaced:
- `lattice-labs` Federation-Beta-Planning Phase D closed + Phase H 11/N closed + `campaign_lattice_battle_station` opened (LBS DG-FINAL gates FBP resumption)
- `campaign_comic_pipeline_canvas` M1 complete — the first live multi-session airlock instance (worked example for Phase 3 airlock AAR)
- Carly+Herb async dispatch/response running at ~24h cadence (validation-as-dispatched-campaign pattern proven)
- `LatticeTerminal.aDNA` Phase 0 active under Spock persona — Ghostty + tmux + harness-agnostic agent stack substrate (Phase 4 co-design partner)
- `III.aDNA` Production (v0.2.0 federated; 6 consumers live) — Phase 5 100-cycle methodology owner

Stanley's pivot at 2026-05-17 reframes the work: instead of executing v2's queue sequentially, open a comprehensive successor campaign that absorbs v2 P3+, the obsidian-stab successor, Rosetta Phase 8, and adds 6 explicit concern areas oriented around community-readiness.

**Operator decision ratifications** (this P0 mission session, 2026-05-17):
- **D1** Campaign name: `campaign_adna_serious_tool_readiness` (version-less name; tag target = v8.0)
- **D2** Tag target at close: **v8.0** (Major Governance bump per ADR-011 semver)
- **D3** v2 absorption: M05+M06 ship-before; M07 partial-absorb; M08b parallel; **M08c+M09+M10+M11 ABSORBED**
- **D4** 100 III loops scope: D9+D10 Rosetta (20) + 80 new on github readme = 100
- **D5** Cross-vault structure: single aDNA.aDNA campaign + coord memos to LatticeTerminal/III/lattice-labs/CanvasForge
- **D6** Adversarial cadence: per-phase decadal AAR + this planning session's adversarial review
- **D7** Phase 1 open timing: next fresh session opens v2 M05 ship-before sequence

## Scope

### In Scope (the 6 operator-specified concern areas)

1. **Context/token efficiency** — Audit existing context files (STATE.md, CLAUDE.md, MEMORY.md, large artifacts); split heavy files into routers + smaller process nodes; identify routing-vs-load patterns; per-session-type token profiles; per-mission context budgets + tracking.

2. **Context management / logic / tracking** — Effort-estimation calibration (estimated vs actual sessions across recent campaigns); context-graph traversal heat maps; per-mission context budget design as Standing Order; LatticeScope.aDNA v0.1 schema activation for observability; "recipe-vs-manual differential" tracking; convergence-model validation against actual usage.

3. **Airlock system AAR + streamline** — AAR on `campaign_comic_pipeline_canvas` M0-M1 (worked example); airlock pattern lineage review (5+ instances now); workflow improvements (handshake → request → response → co-sign latency); airlock-specific skills (`skill_airlock_open.md`, `skill_airlock_close.md`); cross-graph linking conventions; coord-memo → mission-spec → AAR audit chain hardening.

4. **Terminal.aDNA / LatticeTerminal.aDNA integration** — Cross-vault co-design with `LatticeTerminal.aDNA/` (Spock); co-designed installer bootstrapping terminal + `~/lattice/` + `.adna/` template + workspace router + node.aDNA; binary distribution strategy (ADR-015 candidates: curl-bash + .ps1 vs compiled binary vs Python+pyinstaller); Ghostty + Claude Code + agentic-tool-substrate composition; cross-platform support (macOS Intel + Apple Silicon + Windows PowerShell 5.1+ + Linux Ubuntu/Fedora/Arch).

5. **III research missions + 100 III loops on aDNA website + readme** — Research missions: study top-tier open-source projects (Rust, Astro, Vercel, Tailwind, Tauri, Obsidian, Linear, Stripe) for design/voice/onboarding/docs patterns; pull personas from external sources (open-source maintainer, dev-tools designer, framework documentation expert, community organizer, indie hacker, enterprise architect); update `who/reviewers/` with additional decadal-relevant personas; 100 III loops total: D9+D10 of existing Rosetta Phase 7 (20 cycles) + 80 new on github readme/repo.

6. **node.aDNA Obsidian home page** — Bases-driven dynamic HOME.md gallery (replace static markdown tables); per-vault `.aDNA/INFO.md` info pages (or equivalent at `node.aDNA/what/inventory/per_vault_<name>.md`); agent-driven Obsidian operability via F-S2-8 (Local REST API plugin + community MCP server `mcp__obsidian__*` tools); modular III for Obsidian (III loops applied to the Obsidian-vault home-page experience specifically); "pictures/listings/clickable links" visual polish.

### In Scope (absorbed from predecessor campaigns)

- v2 M08c — standalone installer (cross-platform executable; absorbed into Phase 4)
- v2 M09 — context/token audit (absorbed into Phase 1 / Phase 2)
- v2 M10 — LatticeScope.aDNA planning (absorbed into Phase 1 / Phase 2)
- v2 M11 — campaign close + v3 seed (absorbed into Phase 6)
- v2 M07 — partial-absorb (general review + simplify; absorbed into adversarial-review tracks across phases)
- `campaign_obsidian_deployment_stabilization` 8 tracks T1-T8 (absorbed into Phase 3)
- Operation Rosetta Phase 8 — MDX + spec citations + workshop kit + interactive demo (absorbed into Phase 5)
- Operation Rosetta Phase 7 D9+D10 — 20 remaining decadal cycles (absorbed into Phase 5)

### Out of Scope

- v2 M05 (publish-skill family rewrite) — ships as v2's mission; v8 Phase 1 awaits M05 close. Critical path remains in v2.
- v2 M06 (GitHub minimalism + v7.0 tag) — ships as v2's mission; v7.0 tag is v8.0 baseline.
- v2 M08b (post-flatten propagation receipts) — parallel work; not absorbed; ships when ecosystem operators ack.
- `campaign_validation_node_adna_lwx_outputs` (lattice-labs; Berthier/Carly+Herb) — parallel validation campaign; cross-pollinates via coord memos.
- LatticeTerminal.aDNA Phase-0 design work (M0.5 calibration etc.) — that's LatticeTerminal's own campaign; v8 Phase 4 *co-designs* the installer with it but does not author LatticeTerminal's missions.
- Any actual code shipped to consumers BEFORE v8.0 tag is ratified — v8.0 is the singular shipping event.

### Subsumes

| Plan/Mission | Status at Subsumption | Absorbed By |
|---|---|---|
| v2 M08c — standalone installer | planned (stub) | M4.2 ADR-015 + M4.3 installer authoring |
| v2 M09 — context/token audit | planned (spec at m01_obj9) | M1.3 token audit + M2.1 context audit |
| v2 M10 — LatticeScope.aDNA planning | planned (spec at m01_obj10) | M1.4 LatticeScope v0.1 activation |
| v2 M11 — final review + v3 seed | planned | M6.4 campaign AAR + v3-EC tree finalize |
| `campaign_obsidian_deployment_stabilization` | planned (8 tracks T1-T8) | M3.1 + M3.2 + M3.3 + M3.4 (4 missions covering T1-T8) |
| Rosetta Phase 8 (MDX + interactive + workshop) | queued | M5.1 + M5.2 + M5.5 (research + personas + 80-cycle readme decadal) |
| Rosetta Phase 7 D9+D10 (20 cycles) | queued | M5.3 (D9) + M5.4 (D10) |
| v2 M07 — general review/simplify (partial) | planned | absorbed across phases as adversarial-review track |

## Phases & Missions

### Phase 0: Planning (this session)

| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| M0 | P0 Planning — author this campaign master + CLAUDE.md + mission file + AAR + 5-persona ranker review + D1-D7 ratification + v2 amendments + STATE.md + LatticeTerminal coord stub | 1-2 | — | **in_progress** (this session) |

**Phase exit gate**: Campaign master + CLAUDE.md + P0 mission file + AAR exist; D1-D7 ratified; 5-persona ranker review documented; v2 main-campaign master updated; STATE.md updated; LatticeTerminal coord stub authored; commit + push.

### Phase 1: Foundation (existing v2 wrap-up + measurement infrastructure)

| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| M1.1 | v2 M05 ship coordination (publish-skill family rewrite — runs as v2 mission; this row is the v8-side coord checkpoint) | 0 (v2-side execution) | P0 close | planned |
| M1.2 | v2 M06 ship coordination (GitHub rename + v7.0 tag — runs as v2 mission; v8-side checkpoint) | 0 (v2-side execution) | M1.1 | planned |
| M1.3 | Token audit + measurement protocol activation (absorbs v2 M09) | 2-3 | M1.2 | planned |
| M1.4 | LatticeScope.aDNA v0.1 schema activation for observability (absorbs v2 M10; bootstraps `LatticeScope.aDNA/` sub-vault if needed) | 2-3 | M1.3 | planned |

**Phase exit gate**: v7.0 tag shipped (M1.2); telemetry active (M1.3); LatticeScope schema operational (M1.4).

### Phase 2: Context architecture optimization (concerns #1 + #2)

| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| M2.1 | Context file audit + split (STATE.md, CLAUDE.md, MEMORY.md, heavy artifacts) into routers + smaller process nodes | 2-3 | M1.3 (token audit baseline) | planned |
| M2.2 | Per-mission context budget design as Standing Order #11 (extend project-level Standing Orders) | 1-2 | M2.1 | planned |
| M2.3 | Convergence-model validation against actual usage (cross-campaign retrospective; M01-M35 + v2 M01-M04 + LWX M-LWX-01-03) | 2-3 | M1.3 + M2.1 | planned |
| M2.4 | AGENTS.md per-directory hardening + context-graph traversal heat map | 2 | M2.2 | planned |

**Phase exit gate**: Token-efficiency baseline established; per-mission budget Standing Order ratified; convergence model validated; AGENTS.md heat map operational.

### Phase 3: Forge ecosystem hardening (concerns #3 + #6 + obsidian-stab absorbed)

| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| M3.1 | Obsidian deployment stabilization core (T1 fork propagation + T2 workspace idempotency) | 2-3 | P2 close | planned |
| M3.2 | Plugin-binary install validation (T3) + Obsidian config canonicalization (T4) | 2-3 | M3.1 | planned |
| M3.3 | First-open UX standardization (T5) + integration test framework (T6) | 2-3 | M3.2 | planned |
| M3.4 | Verification handoff documentation (T7) + agent-driven Obsidian inspection (T8 — Local REST API + MCP) | 2-3 | M3.3 | planned |
| M3.5 | Bases-driven HOME.md + per-vault info pages (concern #6 deep work) | 2-3 | M3.4 | planned |
| M3.6 | Airlock AAR + streamline (concern #3; input: `campaign_comic_pipeline_canvas` M0-M1) | 1-2 | M3.5 (or parallel) | planned |
| M3.7 | Modular III for Obsidian (concern #6 capstone) | 2 | M3.4 + M3.6 | planned |

**Phase exit gate**: Agent can drive Obsidian autonomously; node.aDNA HOME polished; airlock workflow streamlined; modular III operational.

### Phase 4: Installer + binary distribution (concern #4; v2 M08c absorbed; co-design with LatticeTerminal.aDNA)

| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| M4.1 | Cross-vault audit + LatticeTerminal.aDNA sync (coord-memo handshake + paired read of LatticeTerminal STATE.md + Phase-4 contract draft) | 1-2 | P3 close | planned |
| M4.2 | ADR-015 installer packaging + distribution (ratify; candidate: curl-bash + .ps1 vs compiled binary vs Python+pyinstaller) | 1-2 | M4.1 | planned |
| M4.3 | Co-designed installer authoring (Ghostty + agent harness + `~/lattice/` + `.adna/` + workspace router + node.aDNA; cross-platform) | 3-4 | M4.2 | planned |
| M4.4 | Cross-platform CI/CD for binary distribution (GitHub releases + Homebrew tap candidate + Windows PowerShell + Linux package candidates) | 2-3 | M4.3 | planned |

**Phase exit gate**: `curl install.lattice.dev | sh` works end-to-end across macOS Intel + Apple Silicon + Windows + Linux; LatticeTerminal partner signs off via coord memo.

### Phase 5: Public readiness (concern #5; Rosetta Phase 8 absorbed; 100 III loops)

| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| M5.1 | Research missions — top OSS projects (Rust, Astro, Vercel, Tailwind, Tauri, Obsidian, Linear, Stripe) for design/voice/onboarding/docs patterns | 2-3 | P4 close (or parallel) | planned |
| M5.2 | New decadal personas — pull from external sources (OSS maintainer, dev-tools designer, framework docs expert, community organizer, indie hacker, enterprise architect); extend `who/reviewers/` | 1-2 | M5.1 | planned |
| M5.3 | Rosetta Phase 7 D9 — Narrative Onboarding (10 cycles; absorbed) | 2-3 | M5.2 | planned |
| M5.4 | Rosetta Phase 7 D10 — Hardening & Closeout (10 cycles; absorbed) | 2-3 | M5.3 | planned |
| M5.5 | 80 cycles on github readme/repo + adversarial review at each decadal AAR (8 decades × 10 cycles each) | 8-12 | M5.4 | planned |

**Phase exit gate**: Ranker ≥ 4.95 on website AND github readme; new decadal personas live; community-readiness criteria met (onboarding journey + value-prop clarity + technical depth + community pathways).

### Phase 6: Tag v8.0 + announce + v3-EC seed

| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| M6.1 | v8.0 tag prep — CHANGELOG entry + release notes draft + badge updates + social/comms drafts | 1-2 | P5 close | planned |
| M6.2 | Tag v8.0 + GitHub release ship | 1 | M6.1 | planned |
| M6.3 | Coord memos to ecosystem operators (M08b-style receipts pattern; ~19 partner vaults) | 1-2 | M6.2 | planned |
| M6.4 | Campaign AAR + v3-EC mission tree finalize (per-vault application opens after v8.0 ratifies) | 1-2 | M6.3 | planned |

**Phase exit gate**: v8.0 shipped; receipts in from ecosystem operators; v3-EC mission tree ready to open; community can clone + setup + contribute.

## Decision Points

| # | When | Decision | Status |
|---|---|---|---|
| D1 | P0 (this session) | Campaign name | **ratified** — `campaign_adna_serious_tool_readiness` |
| D2 | P0 (this session) | Tag target | **ratified** — v8.0 (Major) |
| D3 | P0 (this session) | v2 absorption scope | **ratified** — Default (M05+M06 ship-before; M07 partial; M08b parallel; M08c+M09+M10+M11 absorb) |
| D4 | P0 (this session) | 100 III loops scope | **ratified** — D9+D10 Rosetta (20) + 80 new on readme |
| D5 | P0 (this session) | Cross-vault structure | **ratified** — single aDNA.aDNA campaign + coord memos |
| D6 | P0 (this session) | Adversarial cadence | **ratified** — per-phase decadal + planning-session adversarial |
| D7 | P0 (this session) | Phase 1 open timing | **ratified** — next fresh session opens v2 M05 ship-before |
| D8 | Before P2 entry | Convergence-model paper as Phase 5 output OR Rosetta-Phase-8 absorbed work? | pending |
| D9 | Before P3 entry | Open `campaign_obsidian_deployment_stabilization` as separate sub-campaign OR fully absorbed missions? | pending |
| D10 | Before P4 entry | Repo strategy — co-host installer in aDNA.aDNA or in LatticeTerminal.aDNA's repo? | pending |
| D11 | Before P5 entry | Research missions paired with M5.2 persona authoring, OR sequential (research → personas)? | pending |
| D12 | Before P6 entry | v8.0 tag location — `LatticeProtocol/adna` (template repo) only, or also `LatticeProtocol/aDNA.aDNA` (this vault)? | pending |
| D13 | Before P6 close | Announcement timing — coordinate with lattice-labs FBP completion OR independent? | pending |

## Risk Register

| Risk | Severity | Mitigation |
|---|---|---|
| Scope creep into v9 territory — "serious tool" is open-ended; campaign could grow indefinitely | High | Tag v8.0 at P6 close; defer anything beyond v8.0 baseline to v3-EC successor or post-campaign backlog. Each phase has explicit exit gate. |
| LatticeTerminal.aDNA Phase-0 (M0.5 calibration) slippage delays v8 Phase 4 | Medium | M4.1 coord-memo handshake includes status check; Phase 4 has internal parallelism (M4.2 ADR-015 can run while LatticeTerminal closes M0.5). Fall-back: ship installer-only (no terminal bundling) at v8.0. |
| Token budget exhaustion at Phase 3 (heaviest mission count) | Medium | M2.2's per-mission budget Standing Order applies; M3.x missions sized at 2-3 sessions each (no >4-session missions). |
| 100 III loops (Phase 5) underperform vs. Rosetta D1-D8 (ranker 4.35→5.00 trajectory) — diminishing returns | Medium | D7 (Rosetta) showed iteration-only plateau; M5.5's 80 new readme cycles target NEW content surfaces (research missions inputs + new personas). |
| Cross-vault coord memo backpressure — Spock (LatticeTerminal) + Argus (III) + Berthier (lattice-labs) + Hermes (CanvasForge) all engaged at once | Medium | Phased engagement: M3.6 Hermes (airlock AAR) → M4.1 Spock (installer co-design) → M5.x Argus (III loops); Berthier coord is via existing `campaign_validation_node_adna_lwx_outputs` parallel channel. |
| ADR-015 (installer packaging) ratification stalls — packaging choice is high-impact + low-reversibility | Medium-High | M4.1 audit produces decision matrix; M4.2 explicit ratification gate; default = curl-bash + .ps1 (matches CC + Homebrew + npm ecosystem norms). |
| v7.0 tag delays from v2 M05/M06 cascade | Low-Medium | v2's M05 estimate is 3 sessions, M06 is 1-2 sessions; v8 P1 has slack (M1.1 + M1.2 are 0-session coord checkpoints). |
| ADR roadmap inflation (ADR-014 + ADR-015 + ADR-016 + ...) | Low | ADR creation gated at phase entries; only when load-bearing decision surfaces; aim for ≤5 new ADRs across whole campaign. |
| Operator-side bandwidth (Stanley) — ~60-100 sessions is a multi-month commitment | Medium-High | Dispatch where possible (Carly+Herb for validation; cross-vault personas for coord); session sizes calibrated to single-session execution. |

## Verification Strategy

### Per-Mission

| Check | Method | Gate? |
|---|---|---|
| Session file in `how/sessions/active/` → moved to `history/` at close | Session protocol | Yes |
| SITREP filed | Session closure protocol | Yes |
| AAR produced (lightweight 5-line minimum) | Standing Order #5 | Yes |
| Deliverables validated | AAR scorecard | Yes |
| Files committed + pushed | `git status` clean + `git push` | Yes |
| Token-efficiency check (post-M2.2) | Per-mission budget enforced | Yes (post-P2) |

### Per-Phase

| Check | Method | Gate? |
|---|---|---|
| All mission AARs are GO | Review AAR readiness assessments | Yes |
| Phase exit criteria met | Phase exit gate above | Yes — operator approval required |
| Decadal AAR with 5-persona ranker review | `skill_decadal_aar` invocation | Yes |
| Risk register updated | Campaign doc risk register | Recommended |
| Cross-vault coord memos current | `who/coordination/` review | Yes — Phase 4 onward |

### Campaign Validation

| Check | Method |
|---|---|
| Cross-file coherence | All new files referenced from parent AGENTS.md |
| Token budget measured | Sum token_estimate across new/modified context files |
| Template index complete | All new templates listed in `how/templates/AGENTS.md` |
| Skill index complete | All new skills listed in `how/skills/AGENTS.md` |
| Context graduation run | `skill_context_graduation` executed on campaign deliverables |
| STATE.md updated | Campaign status reflected in operational state |
| v8.0 tag exists | `git tag -a v8.0` shipped at M6.2 |
| Ranker ≥ 4.95 on website + readme | Decadal AAR persona-ranker bench |
| Community-readiness checklist | onboarding journey + value-prop + technical depth + community pathways |
| Adversarial reviews accumulated | 5-persona ranker (each phase) + skeptic (planning + P3 + P5) + external-validator (planning + P5 + P6) — minimum 12 reviews across campaign |

## Timeline

| Phase | Missions | Sessions (calibrated) |
|---|---|---|
| Phase 0 — Planning | 1 | 1-2 |
| Phase 1 — Foundation | 4 | 4-6 |
| Phase 2 — Context optimization | 4 | 7-10 |
| Phase 3 — Forge hardening | 7 | 13-18 |
| Phase 4 — Installer + distribution | 4 | 7-10 |
| Phase 5 — Public readiness | 5 | 15-23 |
| Phase 6 — Tag + announce | 4 | 4-7 |
| **Total** | **29 missions** | **51-76 sessions** (mid-band: ~60-65) |

## Ecosystem Snapshot

**aDNA.aDNA-internal**: this campaign produces v8.0 standard. Predecessors v2-infra (Phase 2; M05/M06 ship-before) + LWX (closed) + Rosetta (Phase 8 absorbed; Phase 7 D9+D10 absorbed).

**Cross-vault co-design partners**:
- `LatticeTerminal.aDNA/` (Spock) — Phase 4 installer co-design; coord-memo handshake at M4.1
- `III.aDNA/` (Argus) — Phase 5 100 III loops methodology; consumer wrapper `iii/` added in Phase 2 or 5
- `lattice-labs/` (Berthier) — Phase 3 airlock AAR input from `campaign_comic_pipeline_canvas`; parallel validation via `campaign_validation_node_adna_lwx_outputs`
- `CanvasForge.aDNA/` (Hermes) — Phase 3 airlock partner; AAR input on canvas-generation pattern

**Downstream consumers (v8.0 release recipients)**: 19+ active `.aDNA/` vaults (per node.aDNA inventory): science_stanley + SiteForge + zeta + la_startup + wga + context_commons + aDNA.aDNA + ComfyForge + VAASLattice + LPWhitepaper + CanvasForge + RareHarness + RareArchive + WilhelmAI + VideoForge + Spacemacs + LatticeTerminal + LatticeAgent + III + SuperLeague + CakeHealth.

## ADR Roadmap

Anticipated ADRs surfaced during campaign execution (subject to load-bearing-decision discipline; not all will be authored):

| ADR | Topic | Likely Phase | Status |
|---|---|---|---|
| ADR-014 | Verification-handoff topology codification (agent-side vs operator-side surfaces; load-bearing finding from LWX M-LWX-03) | P3 (M3.4) | forecast |
| ADR-015 | Installer packaging + distribution strategy (curl-bash + .ps1 vs compiled binary vs Python+pyinstaller) | P4 (M4.2) | forecast |
| ADR-016 | Per-mission context budget as Standing Order #11 | P2 (M2.2) | forecast |
| ADR-017 | Single-commit additive-upstream pattern (now 4 instances; codify) | P0 close or P1 | forecast (could land in P0 closeout AAR) |
| ADR-018 | Validation-as-dispatched-campaign pattern (codify; first instance: M-VNAL-01) | P3 (M3.4) or P5 | forecast |
| ADR-019 | Modular III for Obsidian (concern #6 capstone) | P3 (M3.7) | forecast |
| ADR-020+ | TBD as load-bearing decisions surface | — | — |

## Cross-vault references

- `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/campaign_adna_v2_infrastructure.md` — predecessor; M05+M06 ship-before; M07 partial-absorb; M08c+M09+M10+M11 absorbed
- `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md` — mini-campaign AAR; 21-finding closeout
- `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/cross_graph_findings_to_v2_from_lattice_workspace_ux.md` — finding-routing memo; §3.2 amendments now fold into v8 Phase 1
- `aDNA.aDNA/how/campaigns/campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md` — ABSORBED; 8 tracks → v8 Phase 3 M3.1-M3.4
- `aDNA.aDNA/how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_campaign_closeout.md` — Phase 7 D1-D8 5.00 ranker; D9+D10 absorbed into v8 M5.3-M5.4
- `LatticeTerminal.aDNA/CLAUDE.md` + `LatticeTerminal.aDNA/STATE.md` — Phase 4 co-design partner (Spock; single-repo Platform.aDNA)
- `III.aDNA/CLAUDE.md` + `III.aDNA/what/artifacts/iii_airlock_standard_spec.md` v0.2.0 — Phase 5 partner (Argus)
- `lattice-labs/how/campaigns/campaign_comic_pipeline_canvas/` — Phase 3 airlock AAR input (worked example)
- `lattice-labs/who/coordination/coord_2026_05_13_carly_herb_node_adna_validation_dispatch.md` — validation dispatch precedent

## Standing Orders (campaign-specific; supplement project-level CLAUDE.md)

See campaign-level `CLAUDE.md` (peer to this file). Key additions to project-level:
1. **Per-phase decadal AAR mandatory** — every 10 cycles within a phase OR end-of-phase, whichever comes first; 5-persona ranker review applied
2. **Cross-vault coord memos preserved** — never delete a coord memo, archive at recipient ack
3. **ADR ratification gated at phase entries** — no in-flight ADR proposals between phase gates
4. **Dispatch-where-possible** — Carly+Herb for operator-side validation; cross-vault personas for partner-side input
5. **v7.0 tag dependency** — v8 Phase 1 cannot complete until v2 M05+M06 close and `LatticeProtocol/adna` v7.0 tag exists

## Notes

- This campaign's master file is itself a P0 deliverable. The act of opening the campaign IS the P0 mission's execution.
- 7 phases (P0 + P1-P6) match merry-dewdrop prep doc's structure; M-counts calibrated this session.
- v8.0 = next Major Governance bump per ADR-011. v7.0 ships in v2 M06; v8.0 ships here at M6.2. No v7.x in between (operator-decision: jump directly).
- Pattern lineage: this campaign continues the rod-serpent of Rosetta (content + ranker discipline) + v2 (infrastructure + governance + ADRs) into a unified community-readiness push.

## Completion Summary

*To be filled at M6.4 close (status: completed).*

### Deliverables (anticipated)

- v8.0 tag at `LatticeProtocol/adna`
- 100 III loops completed (D9+D10 Rosetta + 80 new on github readme)
- Cross-platform installer (`curl install.lattice.dev | sh` working)
- Obsidian agent-driven operability (Local REST API + MCP)
- Bases-driven node.aDNA HOME.md + per-vault info pages
- Airlock workflow streamlined (`skill_airlock_*` family)
- LatticeScope.aDNA v0.1 schema operational
- Per-mission context budget Standing Order ratified
- ~5-7 new ADRs (ADR-014 verification-handoff + ADR-015 installer + ADR-016+ context budget)
- 19+ ecosystem coord memos (v8.0 propagation receipts)
- v3-EC mission tree ready to open

### Descoped

- TBD at close

### Key Findings

- TBD at close

### Scope Changes

- TBD at close (each amendment session logs here)

### Follow-Up Campaigns

- `campaign_adna_v3_ecosystem_compliance` opens at v8 P6 close (per-vault application of v8.0)
- TBD others surfaced during execution

## Campaign AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: TBD
- **Didn't**: TBD
- **Finding**: TBD
- **Change**: TBD
- **Follow-up**: TBD

## Amendments

| Date | Source | Amendment |
|---|---|---|
| 2026-05-17 | P0 first-execution-session (campaign open) | Campaign master + CLAUDE.md + P0 mission file authored. D1-D7 ratified. 5-persona ranker adversarial review documented in P0 AAR. Mission tree finalized at 29 missions across 7 phases (P0 + P1-P6). Cross-vault coord stub to LatticeTerminal.aDNA filed. |

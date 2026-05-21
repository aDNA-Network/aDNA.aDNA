---
type: mission
mission_id: mission_adna_str_p2_m245_agents_md_bulk_edit
campaign: campaign_adna_serious_tool_readiness
phase: 2
mission_number: 2.4.5
slug: agents_md_bulk_edit
created: 2026-05-20
updated: 2026-05-20
status: completed
opens_at: 2026-05-21T01:03:59Z
opened_session: session_stanley_20260521T010359Z_v8_m245_s1
closed_at: 2026-05-21T01:15:50Z
closed_session: session_stanley_20260521T010359Z_v8_m245_s1
estimated_sessions: 1   # single-session implementation shape — 1st instance candidate (operator-discretionary S2 if S1 budget overflows > 2×)
actual_sessions: 1      # confirmed at S1 close; single-session implementation-class shape 1st instance candidate ratified
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: complete   # 3-objective shape ratified at plan; D1+D2 locked at plan ratification
mission_class: implementation   # 12-file bulk-edit + AAR + measurement contract; produces executable changes to governance routing layer
token_budget_estimated: "S1 ~80-110 kT content-load (12-file Read batch ~ 30-40 kT + per-file audit + Edit/Write ~ 40-55 kT + Obj 1 mission spec ~ 10-15 kT + Obj 3 close ~ 15-20 kT); API-billing companion ~ 13-22 M cache_read per ADR-016 Clause C empirical formula (90 turns × 126 K + 4.1 M ≈ 15.4 M baseline). Per ADR-016 Clause A + Project Standing Order #11; declared in mission frontmatter per Standing Order #8 self-reference 8th tactical invocation candidate (M2.4.5 declares its own budget per the field ADR-016 Clause A ratified)."
tags: [mission, m2_4_5, v8, p2, interstitial, side_mission, agents_md_bulk_edit, top_12, canonical_polish, single_session_implementation_shape_1st_instance_candidate, m24_consumer, m24_obj4_consumer, adr_016_consumer, agents_md_discoverability_re_frame, v8_p6_propagation_doctrine_invariants_spec_consumer, rosetta_default_option_a]
prerequisite_missions:
  - mission_adna_str_p1_m13_token_audit                     # closed; pattern α/β/γ/δ ranking
  - mission_adna_str_p1_m14_latticescope_schema             # closed; schema v0.1.1 + 48 transcripts backfilled
  - mission_adna_str_p1_m15_coord_network                   # closed; ADR-017 LIVE
  - mission_adna_str_p2_m21_context_audit_split             # closed; STATE.md split + Heavy-File Read Convention
  - mission_adna_str_p2_m22_per_mission_budget              # closed; ADR-016 LIVE
  - mission_adna_str_p2_m23_convergence_validation          # closed; ADR-016 amended + Project SO #11 refined
  - mission_adna_str_p2_m23_5_push_readiness_review         # closed; planning-class single-session shape 3rd instance
  - mission_adna_str_p2_m24_agents_md_heatmap               # closed; 7-item invariants spec ratified + heat-map + ADR-022
prerequisite_artifacts:
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m24_obj4_agents_md_hardening_audit.md  # §3 invariants spec + §4 top-12 + §5 gap codes + §7 dispatch contract
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m24_obj2_heatmap_query_suite.md       # Q2 baseline for post-bulk-edit re-measurement
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m24_agents_md_heatmap.md          # M2.4 close + load-bearing finding (AGENTS.md UNDER-LOADED)
  - aDNA.aDNA/what/decisions/adr_016_per_mission_context_budget.md                                                       # Clause A + Clause B Heavy-File + Clause C empirical constants
  - aDNA.aDNA/what/decisions/adr_022_tool_use_logging.md                                                                 # PostToolUse hook contract (Clause C names m24_obj2 as first consumer)
  - "/Users/stanley/lattice/node.aDNA/what/context/token_baselines.md v0.1.3 Appendix B"                                  # invariants spec verbatim secondary canonical
deliverables_count: 3   # mission spec (Obj 1) + 12-file bulk-edit (Obj 2) + AAR/measurement contract/governance close (Obj 3)
hard_dependency_satisfied: "M2.4 closed 2026-05-20T23:11:30Z+ at session_stanley_20260520T231130Z_v8_m24_s3 (HEAD `c1a19af`); 7-item invariants spec ratified at S2 Obj 4 (4 mandatory + 3 conditional per §3 final matrix; §3 header text '5+2' is copy-paste typo); top-12 priority list deterministic at §4; ADR-022 accepted at S2 Obj 5 (Clause C names m24_obj2 first consumer); pattern β HOLD 14 ratified at S2 Obj 3; node.aDNA token_baselines.md v0.1.3 published with NEW §8 heat-map summary + NEW Appendix B; STATE.md router stays ≤ 20 kT post-M2.4 close; 3 session files in history/2026-05/; v7.0 frozen at `LatticeProtocol/aDNA@27e6395`; HEAD 7 commits ahead of origin/main (push deferred to operator-discretionary post-M2.4.5 close)."
---

# M2.4.5 — AGENTS.md Bulk-Edit (Top-12 + Canonical-Polish)

> **Mission produces** (a) 12 updated AGENTS.md files conforming to the 7-item per-directory invariants spec (4 mandatory + 3 conditional per `m24_obj4_agents_md_hardening_audit.md` §3 final matrix); (b) measurement-cycle contract artifact codifying the M3.x re-measurement trigger + expected outcome direction (AGENTS.md read frequency RISES + deep-content re-read FALLS); (c) campaign master + STATE.md governance close + AAR.
>
> **Why now**: M2.4's load-bearing finding — *AGENTS.md is UNDER-LOADED, not re-read-wasted* (86% of 44 active files never read in n=10 corpus) — re-frames the hardening goal from waste-prevention to **discoverability**. M2.4.5 is the Rosetta-default dispatch (Option A per `m24_obj4` §7) chosen to isolate the bulk-edit from M3.1 forge-ecosystem work so the post-bulk-edit measurement cycle gives a clean signal.
>
> **Self-reference (Standing Order #8 — 8th tactical invocation candidate in v8 P2)**: M2.4.5 edits include `how/campaigns/AGENTS.md` — the routing layer for the very campaign directory this mission lives in. The hardening transformation applies to the gate guarding the mission's own substrate. Pattern across 8 v8 P2 instances: each governance-synthesis mission folds its own measurement / verification / artifact into the doctrine it produces.
>
> **North-star alignment**: The v8 campaign's strategic intent — *"easy and fluid way to build/operate/utilize context graphs"* — names AGENTS.md as the first-stop entry that pre-routes agents to the right deep file before they cold-load it. M2.4.5 is the direct application of the M2.4 strategic re-frame to that north-star.

## Mission scope

Consume the M2.4 closed-mission artifact suite + 7-item invariants spec + top-12 deterministic priority list + 5 gap codes + measurement-cycle contract + ADR-016 budget discipline to:

1. **Audit each of the top-12 AGENTS.md files** against the 7-item spec (4 mandatory + 3 conditional)
2. **Apply minimal Edit** per file to satisfy missing invariants — Read → diff against §3 matrix → Edit → spot-verify
3. **Codify measurement-cycle contract** so M3.x ≥ 20-session corpus triggers a Q2 re-run with declared expected direction
4. **Close mission + refresh governance** — AAR + campaign master row + STATE.md Op 3 (7th canonical instance) + session move + commit

Single-session implementation-class shape (1st instance candidate — operator-discretionary S2 if budget overflow > 2× per Project SO #11). Distinct from the canonical 3-session implementation shape (5 prior canonical instances: M1.3 + M1.4 + M2.1 + M2.3 + M2.4); compresses to 1 session because the substrate is enumerated and the invariants spec is pre-ratified.

## Objectives

### 1. Mission spec authoring (S1)

- **Status**: in_progress (S1; this file)
- **Session**: S1
- **Read**: M2.3.5 mission spec (planning-class single-session template; closest comp); M2.4 mission spec (immediate predecessor); `m24_obj4` §3+§4+§5+§7; plan file (`please-read-the-claude-md-calm-piglet.md`)
- **Produce**: this file (frontmatter + Objectives + Scope + Acceptance + Hard constraints + Standing-Order discharges)
- **Depends on**: M2.4 close (done); operator menu picks D1+D2 (locked at plan ratification)

### 2. Top-12 AGENTS.md bulk-edit (S1)

- **Status**: pending S1
- **Session**: S1
- **Read** (parallel batch): the 12 target AGENTS.md files (deterministic priority list per `m24_obj4` §4)
- **For each file**: diff against 7-item invariants spec (§3 matrix authoritative — 4 mandatory + 3 conditional; §3 header "5+2" is copy-paste typo); apply minimal Edit to satisfy missing mandatory invariants; apply conditional invariants where applicable per directory class (Inv 2 destructive-state dirs; Inv 4 router-vs-archive dirs; Inv 5 dirs with ≥ 50 kT files)
- **Produce**: 12 updated AGENTS.md files; each frontmatter updated with `updated: 2026-05-20` + `last_edited_by: agent_stanley`
- **Acceptance per file**: 4 mandatory invariants satisfied (Inv 1 entry-tier descriptor + Inv 3 load-order discipline + Inv 6 dual-audience pass + Inv 7 cross-link density ≥ 2 wikilinks); conditional invariants applied where applicable
- **Depends on**: 1.

**Bulk-edit target table** (per `m24_obj4` §4 deterministic ranking; subtree-frequency proxy):

| Rank | Path | Current verdict | Primary gap (per §5) | Treatment |
|---:|---|---|---|---|
| 1 | `AGENTS.md` (root) | procedural | `gap_load_skip` + `gap_token_cost` | Add canonical Load/Skip block + `**Token cost**: ~700 tokens` |
| 2 | `how/campaigns/AGENTS.md` | canonical² | Cross-References + Invariant 7 polish | Add `## Cross-References` section + 2nd wikilink |
| 3 | `what/decisions/AGENTS.md` | canonical | Invariant 7 polish (1 → 2+ wikilinks) | Add 1 wikilink |
| 4 | `how/missions/artifacts/AGENTS.md` | procedural | Multiple gaps (procedural → canonical lift) | Add Purpose + Structure + Cross-Refs + content depth |
| 5 | `who/coordination/AGENTS.md` | domain-OK | Missing structure block | Add structure + cross-refs to similar coord directories |
| 6 | `what/context/AGENTS.md` | canonical | Missing Cross-References | Add Cross-References section |
| 7 | `how/AGENTS.md` | canonical | Reinforce as canonical-class exemplar | Polish wikilinks; flag as the bulk-edit reference template |
| 8 | `what/AGENTS.md` | canonical | Reinforce | Polish wikilinks |
| 9 | `who/AGENTS.md` | canonical | Reinforce | Polish wikilinks |
| 10 | `how/missions/AGENTS.md` | domain-OK | Missing cross-refs | Add explicit links to `how/campaigns/AGENTS.md` + `how/missions/artifacts/AGENTS.md` (parent-child triangle) |
| 11 | `how/sessions/AGENTS.md` | canonical³ | Missing Cross-References | Add Cross-References section |
| 12 | `how/skills/AGENTS.md` | domain-OK | Missing cross-refs | Add cross-refs |

Conditional invariants apply where relevant:
- **Inv 2 (safety hints)** — destructive-state dirs: `what/decisions/` (ADR ratifications), `how/missions/` + `how/missions/artifacts/` (mission status fields), `who/coordination/` (cross-vault state), `how/campaigns/` (campaign status)
- **Inv 4 (archive cross-link)** — router-vs-archive dirs: root `AGENTS.md` → `STATE_archive.md` (the canonical Op 3 instance per M2.1 split); other dirs N/A unless they carry their own split
- **Inv 5 (heavy-file warning)** — dirs with ≥ 50 kT files: root (STATE.md), `how/campaigns/` (campaign master), `how/campaigns/campaign_adna_serious_tool_readiness/missions/` (mission spec at S3 close), `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/` (large AAR aggregates)

### 3. AAR + measurement contract + close (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: this mission file (just refreshed); the 12 updated AGENTS.md files (post-edit spot-check)
- **Produce**:
  1. `missions/artifacts/aar_m245_agents_md_bulk_edit.md` — lightweight 5-line + extended findings (load-bearing? + 12/12 acceptance scorecard + Standing-Order discharge table + token-budget table with API-billing companion column)
  2. `missions/artifacts/m245_obj3_measurement_contract.md` — codify (a) Q2 SQL re-run trigger at M3.x ≥ 20-session corpus, (b) expected outcome direction (AGENTS.md read freq RISES + deep-content re-read FALLS), (c) Pattern β refresh trigger if aggregate re-read leaves 22-32% band, (d) heat-map refresh schedule
  3. This mission file frontmatter `in_progress → completed` + `closed_at` + `closed_session` + `actual_sessions: 1` + deliverables marked landed
  4. Campaign master M2.4.5 row added at Phase 2 table (between M2.4 and any M2.5/M3.x); amendments-table 2026-05-20 entry appended
  5. STATE.md (router) Op 3 archive-on-close refresh — **7th canonical instance** (M2.1 + M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 + M2.4.5); demote M2.4 S3 CLOSED bullet to concise form; new M2.4.5 CLOSED top bullet; refresh Next Steps + Last Session + Next Session Prompt; maintain ≤ 20 kT cap
  6. Session file SITREP + Next Session Prompt + move `active/` → `history/2026-05/`
- **Depends on**: 2.

## Deliverables

| # | Deliverable | Session | Status |
|---|---|---|---|
| 1 | M2.4.5 mission spec (this file) | S1 | ✅ landed at S1 |
| 2 | 12 updated AGENTS.md files per top-12 deterministic ranking | S1 | ✅ landed at S1 (verified 12/12 mandatory invariants pass via acceptance grep; 122 insertions / 24 deletions across 12 files; zero collateral) |
| 3 | AAR + measurement contract + campaign master + STATE.md refresh + session close + commit | S1 | ✅ landed at S1 (`aar_m245_agents_md_bulk_edit.md` lightweight 5-line + 12-row acceptance scorecard + 12-row Standing-Order discharge + 3-category extended findings × 4 + token-budget two-metric table; `m245_obj3_measurement_contract.md` 8-section measurement contract; campaign master M2.4.5 row + amendments-table; STATE.md Op 3 7th canonical instance refresh; session file SITREP + Next Session Prompt + move `active/` → `history/2026-05/`; single commit) |

## Acceptance criteria

- [ ] All 3 deliverables landed at S1 close
- [ ] 12/12 AGENTS.md per-file acceptance: 4 mandatory invariants present (Inv 1 + 3 + 6 + 7); conditional invariants (2 + 4 + 5) applied where applicable per directory class
- [ ] Cross-link density per file ≥ 2 wikilinks (verifiable via `grep -c '\[\[' file`)
- [ ] Each touched file's frontmatter has `updated: 2026-05-20` + `last_edited_by: agent_stanley` (Project Safety Rule #3)
- [ ] `aar_m245_agents_md_bulk_edit.md` — lightweight 5-line + extended findings; ≥ 12/12 acceptance scorecard + Standing-Order discharge table + token-budget table with API-billing companion column
- [ ] `m245_obj3_measurement_contract.md` names: (a) Q2 re-run trigger M3.x ≥ 20-session corpus, (b) expected direction (RISES + FALLS), (c) Pattern β refresh trigger conditions, (d) heat-map refresh schedule
- [ ] Campaign master M2.4.5 row added at Phase 2 table; amendments-table 2026-05-20 entry appended
- [ ] STATE.md router Op 3 archive-on-close refresh (**7th canonical instance**); router stays ≤ 20 kT cap
- [ ] Zero `.adna/` upstream touches end-to-end (v7.0 frozen at `27e6395`)
- [ ] Zero `~/.adna/measurement/measurement.sqlite` deliberate mutations
- [ ] Zero partner-vault contact (4 embargo memos preserved)
- [ ] Zero new ADRs at M2.4.5 (Campaign SO #14 — phase-entry gate)
- [ ] Zero `node.aDNA/` mutations (token_baselines.md v0.1.3 stays as-published at M2.4 close)
- [ ] Mission file declares `token_budget_estimated` per ADR-016 Clause A (M2.4.5 itself first — Standing Order #8 self-reference 8th tactical invocation candidate)

## Operator decision gates (D1-D2; locked at plan ratification)

| # | Question | Resolution | Resolved at |
|---|---|---|---|
| D1 | Next mission: M2.4.5 first / P3 entry directly / push first / spot-walk | **M2.4.5 first, then P3** (Rosetta-default per `m24_obj4` §7 Option A) | Plan ratification (`please-read-the-claude-md-calm-piglet.md` AskUserQuestion 1) |
| D2 | M2.4.5 scope: Top-12 + canonical-polish / all 44 / top-12 only | **Top-12 + canonical-polish** | Plan ratification (AskUserQuestion 2) |

## Hard constraints

- **Zero `.adna/` upstream touches** — v7.0 frozen at `LatticeProtocol/aDNA@27e6395`; v8 P6 owns upstream propagation per Campaign Standing Order #14 + ADR-005 rule 3
- **Zero partner-vault contact** — 4 partner-affiliated embargo memos preserved (Wilhelm × 2 + SuperLeague + SIP)
- **Zero `~/.claude/settings.json` modifications**
- **Zero `~/.adna/measurement/measurement.sqlite` deliberate mutations** — hook firing during session is normal; deliberate writes prohibited
- **Zero hook modifications**
- **Zero new ADRs at M2.4.5** — Campaign Standing Order #14 (ADR ratification gated at phase entries; M2.4.5 stays inside P2)
- **Zero `node.aDNA/` mutations at M2.4.5** — token_baselines.md v0.1.3 Appendix B already published at M2.4 close; the measurement-cycle refresh comes at M3.x, not now
- **Zero M2.1.5 / M3.x scope creep** — M2.4.5 stays in its own lane
- **Zero push to origin** — push is operator-discretionary post-AAR per M2.3.5 push-readiness precedent (separate decision; not M2.4.5's responsibility)
- **Zero scope expansion** — 12 files only (the deterministic top-12); the remaining 32 procedural/dormant files go to M3.x absorption per `m24_obj4` §4 deferred-bulk-edit Phase B

## Standing Order discharges (preview — fills at AAR)

| # | Order | M2.4.5 discharge plan |
|---|---|---|
| Project SO #1 | Phase gates are human gates | M2.4.5 is interstitial within P2; no phase gate crossed |
| Project SO #3 | Context budget is doctrine | `token_budget_estimated: "S1 ~80-110 kT"` declared per ratified ADR-016 Clause A; AAR reports estimate-vs-actual + API-billing companion |
| Project SO #5 | Every mission gets an AAR | `aar_m245_agents_md_bulk_edit.md` at Obj 3 |
| Project SO #6 | Archive never delete | M2.4.5 adds + edits; deletes nothing |
| Project SO #7 | Dual-audience test | Each updated AGENTS.md verified against Invariant 6 dual-audience pass |
| Project SO #8 | Self-reference mandatory | M2.4.5 edits `how/campaigns/AGENTS.md` — the routing layer for the very campaign directory this mission lives in. **8th canonical instance candidate** in v8 P2 (after M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4-S1 + M2.4-S2 + M2.4-S3) |
| Project SO #10 | Cross-link aggressively | Each updated AGENTS.md verified against Invariant 7 cross-link density ≥ 2 wikilinks; AAR + measurement contract cross-link M2.4 obj4 + ADR-016 + M3.x forward refs |
| Project SO #11 | Per-mission context budget mandatory | Mission frontmatter `token_budget_estimated`; AAR reports actual + delta + API-billing companion |
| Campaign SO #12 | Per-mission context budget | Same as Project #11; two-metric reporting |
| Campaign SO #14 | ADR ratification gated at phase entries | ✅ NO new ADRs at M2.4.5 |
| Campaign SO #17 | Mission_class discipline | ✅ `mission_class: implementation` declared; single-session implementation-class shape 1st instance candidate (operator-discretionary new variant) |
| Campaign SO #19 | Phase exit = human gate | ✅ applies at P2 → P3; M2.4.5 close does NOT auto-open M3.x cohort; P3 entry stays operator-decision |

## Cross-vault impact

- **`.adna/` upstream** — zero touches at M2.4.5; the 7-item invariants spec joins the v8 P6 propagation queue (5 doctrinal additions: AGENTS.md invariants + ADR-022 + ADR-016 amendment + Project SO #11 + Heavy-File Read Convention)
- **Partner vaults** — zero contact; 4 embargo memos preserved
- **`node.aDNA/`** — zero mutations at M2.4.5 (token_baselines.md v0.1.3 already published at M2.4 close; M3.x measurement cycle refreshes if Pattern β shifts)
- **`lattice-labs/`** — zero contact
- **GitHub `LatticeProtocol/aDNA.aDNA`** — push deferred to operator-discretionary post-M2.4.5 close
- **All future M3.x / M4.x / M5.x / M6.x missions** — inherit hardened routing layer; AGENTS.md becomes a first-stop entry rather than a dormant marker

## Self-reference + dual-audience

This mission is the FIRST mission to *apply* the invariants spec it consumes from M2.4. Its bulk-edit targets include `how/campaigns/AGENTS.md` — the routing layer that gates the campaign directory the mission lives in. The hardening transformation applies to the gate guarding its own substrate. **Standing Order #8 self-reference 8th tactical invocation candidate in v8 P2**.

Dual-audience test:
- **Developer**: each updated AGENTS.md satisfies the 7-item invariants spec — frontmatter + Purpose + Load/Skip + Token cost + Cross-References + ≥ 2 wikilinks; the spec is enforceable + machine-verifiable via `grep` checks
- **Newcomer**: each updated AGENTS.md opens with a plain-language Purpose sentence (Invariant 1); the Load/Skip section gates the deeper content with a ≤ 5-second decision (Invariant 3); cross-links carry to related directories without requiring upstream-spec familiarity

## Risks

| # | Risk | Mitigation |
|---|---|---|
| 1 | 12 files in single session push past 110 kT (budget upper) → > 2× drift on lower 80 kT estimate | Read all 12 files in single parallel batch at S1 start (front-load ~ 30-40 kT but enables tight Edit passes); if > 150 kT at Obj 2 midpoint, split into S2 (operator approval for new shape variant) |
| 2 | A canonical-class file (rank 2/3/6/7/8/9/11) more polished than audit indicated — minor edits collide with current content | Read-before-write per Safety Rule #1 each time; if audit verdict over-cautious, AAR captures discrepancy in extended findings (no live edit if not needed) |
| 3 | The `m24_obj4` §3 header "5 mandatory + 2 conditional" vs matrix "4+3" copy-paste typo leaks into M2.4.5 work | Matrix is authoritative (flagged at STATE.md M2.4 S3 close); AAR includes single-line corrigendum noting the §3 header should be patched — operator-discretionary in-scope or follow-up |
| 4 | Bulk-edit invalidates `m24_obj4` §4 ranking by changing `how/campaigns/AGENTS.md` whose subtree the campaign lives in | Self-reference explicit (SO #8); AAR's load-bearing-finding section captures the recursive measurement |
| 5 | Top-12 doesn't include `how/backlog/AGENTS.md` or other procedural files possibly touched by M2.4 idea-filing — deferred but visible | M3.x absorption queue per `m24_obj4` §4 "remaining 32 → deferred-bulk-edit Phase B"; not in M2.4.5 scope (D2 locked) |
| 6 | Single-session implementation-class shape (1st instance candidate) ratifies a new mission shape variant that future missions inherit — premature codification risk | M2.4.5 declares "1st instance candidate" not "ratified"; pattern ratification requires ≥ 2 instances per `m21_obj4` rubric; AAR flags shape candidate but doesn't graduate |

## Status

**S1 OPENED 2026-05-21T01:03:59Z** (`session_stanley_20260521T010359Z_v8_m245_s1`). Mission spec authoring per plan `/Users/stanley/.claude/plans/please-read-the-claude-md-calm-piglet.md` (approved at ExitPlanMode 2026-05-20).

**S1 + MISSION CLOSED 2026-05-21T01:15:50Z**. All 3 deliverables landed in S1; single-session implementation-class shape **1st instance candidate** (not yet ratified — requires ≥ 2 instances per `m21_obj4` rubric; M3.x or v8 P6 may surface 2nd instance). 12 AGENTS.md files updated per the top-12 deterministic ranking; 7-item invariants spec (4 mandatory + 3 conditional per `m24_obj4` §3 final matrix) applied; conditional invariants dispatched by directory class (Inv 2 destructive-state × 3 files; Inv 4 archive × 2 files; Inv 5 heavy-file × 4 files); 12/12 mandatory invariants pass per acceptance grep at Obj 2 close. **Hard constraints honored end-to-end**: zero `.adna/` upstream touches (v7.0 frozen at `27e6395`); zero partner-vault contact (4 embargo memos preserved); zero `~/.claude/settings.json` modifications; zero `~/.adna/measurement/measurement.sqlite` deliberate mutations; zero hook modifications; zero new ADRs at M2.4.5 (Campaign SO #14); zero `node.aDNA/` mutations (token_baselines.md v0.1.3 stays as-published at M2.4 close); zero M2.1.5 / M3.x scope creep; zero push to origin at M2.4.5 (deferred to operator-discretionary post-AAR per M2.3.5 precedent). **Load-bearing finding (campaign-strategic; primary)**: *"the mission's success criterion is conformance; the campaign's success criterion is uplift"* — M2.4.5 verified 12/12 structural conformance but the behavioral test (does discoverability *actually* improve?) requires M3.x ≥ 20-session corpus re-measurement per `m245_obj3_measurement_contract.md`. **Load-bearing finding (procedural; strong-extended)**: parallel-Read substrate-gathering pattern (12-file batch at S1 start) is a session-shape lever for multi-file conformance missions; candidate skill graduation at ≥ 3 use instances. **M2.4.5 close UNBLOCKS**: P2 → P3 phase exit gate stays READY (M2.4.5 close doesn't auto-advance per Project Standing Order #1 + Campaign Standing Order #19; operator-decision required); M3.x missions inherit hardened routing layer; M3.x re-measurement trigger codified for behavioral validation. **Op 3 archive-on-close pattern 7th canonical instance** ratified at this STATE.md refresh (M2.1 + M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 + M2.4.5). **Standing Order #8 self-reference 8th tactical invocation in v8 P2** (M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4-S1 + M2.4-S2 + M2.4-S3 + M2.4.5) ratified across both planning-class single-session shape AND canonical 3-session implementation-class shape AND now single-session implementation-class shape 1st instance candidate.

## Forward references

- **P2 → P3 phase exit gate** — stays READY (4 bricks complete; M2.4.5 close doesn't change the gate; operator-decision required)
- **M3.x cohort** — inherits hardened routing layer + measurement-cycle contract (`m245_obj3_measurement_contract.md`); first M3 mission consuming the layer becomes the first behavioral data point
- **M2.1.5 retroactive Op 3** — stays `planned-optional`; Op 3 archive-on-close pattern now at 7 canonical instances (skill graduation rubric ≥ 3 satisfied many times over)
- **v8 P6 ecosystem propagation** — 5 doctrinal additions queued unchanged (AGENTS.md invariants spec + ADR-022 + ADR-016 amendment + Project SO #11 + Heavy-File Read Convention); the 7-item invariants spec **conditional** propagation depends on M3.x re-measurement validation per `m245_obj3` §7 decision tree
- **Push to origin** — 7 commits ahead of origin/main post-M2.4 + M2.4.5 + M01 work; operator-discretionary per M2.3.5 push-readiness checklist precedent

## Cross-references

- [[artifacts/m24_obj4_agents_md_hardening_audit.md|m24_obj4]] — §3 invariants spec + §4 top-12 priority list + §5 gap codes + §7 dispatch contract (source-of-truth for M2.4.5 substrate)
- [[artifacts/m24_obj2_heatmap_query_suite.md|m24_obj2]] — Q2 baseline for post-bulk-edit re-measurement
- [[artifacts/aar_m24_agents_md_heatmap.md|M2.4 AAR]] — load-bearing finding (AGENTS.md UNDER-LOADED)
- [[mission_adna_str_p2_m24_agents_md_heatmap.md|M2.4 mission spec]] — immediate predecessor (closed 2026-05-20T23:11:30Z; canonical 3-session implementation-class shape 5th instance)
- [[mission_adna_str_p2_m23_5_push_readiness_review.md|M2.3.5 mission spec]] — single-session shape comp (planning-class)
- [[mission_adna_str_p2_m22_per_mission_budget.md|M2.2 mission spec]] — planning-class single-session shape 1st canonical instance
- [[../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] — per-mission context budget + Clause B Heavy-File + Clause C empirical constants
- [[../../../what/decisions/adr_022_tool_use_logging.md|ADR-022]] — PostToolUse hook contract (Clause C names m24_obj2 first consumer)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — M2.4.5 row will land at Phase 2 between M2.4 and M2.5/M3.x slots
- [[../CLAUDE.md|campaign CLAUDE.md]] — Campaign Standing Orders 11-19
- [[../../../CLAUDE.md|project CLAUDE.md]] — Project Standing Orders 1-11
- `node.aDNA/what/context/token_baselines.md` v0.1.3 Appendix B — invariants spec verbatim secondary canonical source

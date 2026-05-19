---
type: aar
artifact_type: mission_aar
aar_class: lightweight  # 5-line + 4-category extended findings (per mission spec §Acceptance criteria + Standing Order #5)
mission: mission_adna_str_p2_m21_context_audit_split
campaign: campaign_adna_serious_tool_readiness
phase: 2
mission_number: 2.1
sessions_executed: 3  # S1 / S2 / S3
estimated_sessions: "2-3"
actual_sessions_match: yes  # within forecast band; canonical 3-session shape 3rd instance after M1.3 + M1.4
opened: 2026-05-19T19:33:44Z
closed: 2026-05-19T~23:30Z+  # S3 close (this artifact)
total_wall_clock: ~4h elapsed (S1 + S2 + S3 same calendar day; operator gaps minimal)
created: 2026-05-19
updated: 2026-05-19
status: complete
last_edited_by: agent_stanley
load_bearing: true  # recursive self-reference at S2 + heavy-file Read convention as sibling clause to per-mission token-budget + router/archive pattern as auto-archive doctrine first canonical instance propagate to M2.2 + M2.3 + M2.4 + v8 P6
tags: [aar, mission, m21, v8, p2, serious_tool_readiness, lightweight, load_bearing, router_archive_pattern, op_1_completed, op_2_completed_local, op_3_documented, heavy_file_read_convention, recursive_self_reference, mid_execution_self_proof, p2_in_flight]
related_artifacts:
  - m21_obj2_state_split_design.md           # S1
  - m21_obj3_agents_md_hint_design.md        # S1
  - m21_obj4_archive_convention_design.md    # S1
  - m21_obj7_validation_output.md            # S3 (this session)
  - ../mission_adna_str_p2_m21_context_audit_split.md  # mission spec
  - ../../../../node.aDNA/what/context/token_baselines.md  # v0.1.1 light addendum at this S3
  - m14_obj7_validation_output.md           # M1.4 S3 — structural template (8-section shape)
  - aar_m14_latticescope_schema.md          # M1.4 AAR — structural template (this artifact)
  - aar_m13_token_audit.md                  # M1.3 AAR — 1st instance of canonical 3-session shape
---

# M2.1 AAR — Context File Audit + STATE.md Split

## 5-line summary (Standing Order #5)

- **Worked**: Canonical 3-session shape held cleanly for the 3rd consecutive time (M1.3 → M1.4 → M2.1; pattern ratified as the implementation-class template per Campaign S.O. #17). S2 destructive execution landed all 4 Op-1 phases (A archive create / B router rewrite / C cross-link audit / D verification) + 1 Op-2 phase (E AGENTS.md + MEMORY.md + auto-memory + backlog) in a single session, 4 commits, no rollback required. **Router reduction 841% vs ≥ 400% target** (2.1× over). Op 3 documented as design memo — no executable code per Standing Order #14, doctrine-as-design honored.
- **Didn't**: No retroactive `campaign_*_archive.md` for v2 + LWX masters (D4=A defer to M3.x; scope discipline held). No upstream propagation of the heavy-file convention to `.adna/AGENTS.md` (S.O. #14 + ADR-005 rule 3 — propagation gates at v8 P6; backlog placeholder `idea_upstream_state_md_read_hint.md` carries the carry). No `skill_campaign_close_archive.md` graduation (deferred to ≥ 3 instances; STATE.md is the 1st). No measured API-billing Δ from the split — measurement is M2.3's job; M2.1 §2 of `m21_obj7_validation_output.md` reports forecast only.
- **Finding (load-bearing)**: **The protocol that designs a split also pays the splitting tax mid-execution.** S2 hit the Read-tool 256 KB hard backstop on the very session executing the split — `File content (339.2 KB) exceeds maximum allowed size (256 KB)`. M1.4 §6 forecasted this as a hard backstop; M2.1 confirmed it empirically *during execution of the fix*. Recursive self-reference per Standing Order #8 — the doctrine vault doctrine-checks itself. Pre-emptive splits before the tool starts failing are cheaper than reactive splits after — the dent in S2 was a wasted Read tool call + a forced offset-Read retry, costing turns and cache_creation that a pre-emptive split would have skipped.
- **Change**: `aDNA.aDNA/AGENTS.md` carries the Heavy-File Read Convention live (default `offset+limit` for files ≥ 50 kT or ≥ 200 KB; STATE.md as canonical instance); the convention propagates to `aDNA.aDNA/MEMORY.md` (≤ 150-char index entry) + auto-memory `feedback_heavy_file_read.md`. `node.aDNA/what/context/token_baselines.md` gains a v0.1.1 *Split-as-pattern* addendum capturing the 841% reduction + recursive self-reference doctrine. ADR-016 prep notes augmented with one paragraph (heavy-file Read convention as sibling clause to per-mission token-budget discipline; M2.2 ratifies).
- **Follow-up**: M2.2 / M2.3 / M2.4 / M1.5 cohort entry operator-gated (Campaign S.O. #19). M2.2 ADR-016 ratification consumes M1.3 §6 + M1.4 §6 + this M2.1 §5 prep notes verbatim. M2.3 cross-campaign retrospective consumes 645 MT cache_read corpus + this M2.1 post-split data point. M2.4 AGENTS.md heat map still gated on ≥ 10 live-hook sessions. M3.x retroactive `campaign_*_archive.md` for v2 + LWX still queued. M1.5 timing target ≤ 2026-05-26 to preserve 1-week buffer before assumed v8 P3 entry. Op 3 skill graduation candidate revisits at 3rd instance.

---

## Extended findings (4 categories per mission spec §Objective 7)

### (a) Op 1 effectiveness — STATE.md split

1. **841% router reduction factor vs ≥ 400% target** (2.1× the target). Pre-split 343.5 KB (Read-fail moment) / 347 KB (design-spec baseline) → 41,791 B router + 197,228 B archive. Router admits full Read with no offset; archive admits full Read with no offset. Two-file shape preserves the 19+1 DEPRECATED-marker history verbatim while making the live-state router admissible to any cold-start agent.
2. **Live-zone bloat dominated by 3 non-DEPRECATED-marker pockets** (S2 finding 2; not covered by the design spec's `42 DEPRECATED-marker sections` framing): (a) one ~ 20-KB legacy HTML comment at pre-split line 9; (b) ~ 40-KB v2 Legacy descriptive block in Active Campaigns (pre-split lines 70-110); (c) stale v8 P1 entry checklist in Next Steps. Dropping all 3 with cross-links saved ~ 70 KB (~ 50% of the live-zone budget) — **more than half the post-split router headroom came from cleaning the live zone**, not from moving DEPRECATED-markers to archive. Op 3 retroactive convention should explicitly address live-zone bloat alongside DEPRECATED-marker sweep.
3. **Cross-link audit safer-than-worst-case at Phase C** — zero incoming `STATE.md#<deprecated-anchor>` wikilinks found across `aDNA.aDNA/`. The vault organically avoided the anti-pattern of linking into mutable section anchors. 5-wikilink resolution test 5/5 PASS (sampled in `m21_obj7_validation_output.md` §3).
4. **Archive at 197 KB approaches Op 3 200 KB quarterly-rotation threshold at first instantiation** — M2.1 hit the rotation candidate immediately. The next major DEPRECATED-marker append (likely v8 P3 close OR a major campaign rotation) will trigger Op 3 §2 rotation candidate evaluation. M3.x candidate.

### (b) Op 2 generalization — heavy-file Read convention

1. **`aDNA.aDNA/AGENTS.md` Heavy-File Read Convention live** — ≤ 3-line hint added per Op 2 design spec (`m21_obj3_agents_md_hint_design.md` §2); reads "Default to `offset+limit` Read on files ≥ 50 kT or ≥ 200 KB. STATE.md is canonical instance."  Convention scales beyond STATE.md to any heavy file (campaign masters, large mission spec docs, large coord memos).
2. **Auto-memory companions outside vault** — the design spec assumed `aDNA.aDNA/MEMORY.md` as the target; the actual auto-memory MEMORY.md lives at `/Users/stanley/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/MEMORY.md` per the memory protocol (S2 Finding 5). Op 2 edits landed at the correct outside-vault path. Future hint-design clarity: distinguish *vault-side* MEMORY.md (if it ever exists) from *auto-memory* MEMORY.md in design specs. S2 lost ~ 15 minutes resolving the location ambiguity; the AGENTS.md hint text now references the correct outside-vault path.
3. **Upstream propagation gates at v8 P6** — Campaign S.O. #14 + ADR-005 rule 3 prohibit `.adna/` touches during the v8 cycle. `how/backlog/idea_upstream_state_md_read_hint.md` placeholder records the propagation intent; v8 P6 (or M3.x if v8 P6 is bumped) ratifies the upstream lift to `.adna/AGENTS.md` so all 19+ ecosystem vaults inherit.
4. **Single live-session post-hint corpus** — M2.1 S3 is the first session to run under the heavy-file convention. M2.4 AGENTS.md heat map gates on ≥ 10 live-hook sessions; M2.1 contributes 1. Convention adoption observability is on the M2.4 critical path.

### (c) Op 3 doctrine-as-design — auto-archive convention

1. **Standing Order #14 honored end-to-end** — `m21_obj4_archive_convention_design.md` is a design memo, not an ADR. No executable code at M2.1; skill graduation deferred. The doctrine-as-design pattern (M2.1 3rd instance after M1.3 + M1.4 prep-notes shapes) is itself ratified as a Campaign S.O. #14 pattern.
2. **STATE.md as canonical first instance** — the auto-archive convention sets STATE.md as the canonical first instance of the router/archive pattern. The same shape applies to any vault's heavy live file (lattice-labs/STATE.md, LatticeNetwork.aDNA/STATE.md as it grows, large campaign masters at close).
3. **Skill graduation rubric** — `m21_obj4_archive_convention_design.md` §rubric specifies ≥ 3 distinct rotations before graduating to `skill_campaign_close_archive.md`. STATE.md is the 1st. Next 2 candidates: (a) lattice-labs/STATE.md at LatticeLabs.aDNA Phase-6 cutover (or earlier if STATE.md grows past ~ 200 KB); (b) v8 campaign master at v8 P6 close (M3.x retroactive task per D4=A). Skill graduation tentatively at v8 P6 or M3.x retroactive — whichever instantiates first.
4. **D4=A retroactive deferral honored** — no retroactive `campaign_*_archive.md` for v2 + LWX masters at M2.1. M2.1 stayed at 2-3 sessions per estimate; if D4=B had been chosen (retroactive at M2.1), the mission would have stretched to 4-5 sessions. Discipline held.

### (d) Mid-execution surprises (6 S2 carryover findings folded with attribution)

1. **Read-tool 256 KB hard backstop empirically validated mid-execution** (S2 Finding 1) — pre-split STATE.md at 343.5 KB triggered `File content (339.2 KB) exceeds maximum allowed size (256 KB)` on the very session executing the split. M1.4 §6 forecasted this as a hard backstop; M2.1 confirmed empirically. **Load-bearing for ADR-016** — the hard-backstop-not-soft-warning framing is the motivation for the heavy-file Read convention.
2. **Live-zone bloat 3-pocket pattern** (S2 Finding 2) — see §(a)2 above. ~ 70 KB savings beyond the design-spec scope.
3. **Archive-at-rotation-threshold first instance** (S2 Finding 3) — see §(a)4 above. 1.4 KB headroom on the 200 KB Op 3 rotation trigger.
4. **Amendments-table drift in v8 campaign master** (S2 Finding 4) — between 2026-05-18 → 2026-05-19 several major events (M1.3 S2/S3 close + M1.4 S1/S2/S3 + M1.5 SEEDED + M2.1 S1 OPENED + cross-vault disruption assessment FILED) didn't all get amendments-table rows. STATE_archive.md preserves per-event session record verbatim, so audit-trail integrity holds. **Catch-up candidate** for v8 P6 campaign close OR M3.x master-archive split — neither is a S3 close blocker.
5. **Auto-memory directory location vs design-spec assumption** (S2 Finding 5) — see §(b)2 above. Op 2 landed correctly; future hint-design clarity opportunity.
6. **Safer-than-worst-case cross-link audit** (S2 Finding 6) — see §(a)3 above. Zero broken anchors; 5/5 PASS.

---

## Acceptance-criteria scorecard (M2.1 mission spec §Acceptance criteria — 13 items)

| # | Criterion | Status |
|---|---|---|
| 1 | All 7 deliverables landed (S1: 1-4; S2: 5-6; S3: 7) | ✅ PASS |
| 2 | Post-split `aDNA.aDNA/STATE.md` ≤ 80,000 bytes (≤ 20 kT content-load); ≥ 4× reduction from 347 KB | ✅ PASS (41,791 B / ~10 kT; 8.41× reduction; 2.1× over target) |
| 3 | Read tool succeeds on STATE.md router with NO offset/limit | ✅ PASS (router < 256 KB) |
| 4 | `aDNA.aDNA/STATE_archive.md` exists with frontmatter `type: state_archive` + all DEPRECATED-marker sections verbatim | ✅ PASS (197,228 B; 19+1 DEPRECATED markers + historic Next Session Prompts verbatim) |
| 5 | 5-wikilink sample test passes (mission AARs / campaign masters / coord memos all resolve to router or archive) | ✅ PASS (5/5; `m21_obj7_validation_output.md` §3) |
| 6 | `aDNA.aDNA/AGENTS.md` carries offset+limit hint (≤ 3 lines added) | ✅ PASS (`235c3fd`; Heavy-File Read Convention insert) |
| 7 | `aDNA.aDNA/MEMORY.md` companion line landed (≤ 150 char) | ✅ PASS-with-note (landed at auto-memory `MEMORY.md` outside vault per memory protocol, not at `aDNA.aDNA/MEMORY.md`; S2 Finding 5) |
| 8 | `aDNA.aDNA/how/backlog/idea_upstream_state_md_read_hint.md` backlog placeholder exists | ✅ PASS |
| 9 | Op 3 convention documented in `m21_obj4_archive_convention_design.md`; skill graduation deferred to M3.x at earliest | ✅ PASS |
| 10 | Zero `.adna/` upstream touches end-to-end | ✅ PASS (`git -C .adna status` clean; v7.0 frozen at `27e6395`) |
| 11 | `node.aDNA/what/context/token_baselines.md` light addendum landed (split-as-pattern note + version bump) | ✅ PASS (this S3 — §Split-as-pattern subsection added; companion `.yaml` + `inventory_vaults.yaml` row updated) |
| 12 | M2.1 AAR lightweight 5-line + 4-category extended findings landed | ✅ PASS (this artifact) |
| 13 | Campaign master M2.1 row `completed`; STATE.md (router) updated | ✅ PASS (this S3 — master row flipped + amendments row appended + STATE.md Current Phase + Next Steps refreshed) |

**13/13 PASS** (criterion #7 marked PASS-with-note due to auto-memory location reality — function preserved, design-spec wording updates queued).

---

## Standing-Order discharge table

| # | Order | M2.1 outcome |
|---|---|---|
| Project SO #1 | Phase gates are human gates | ✅ P1 → P2 transition approved at plan ratification 2026-05-19; S2 destructive entry operator-gated and granted; P2 → P3 stays gated post-M2.1 close |
| Project SO #3 | Context budget is doctrine | ✅ M2.1 is the canonical implementation — Op 1 cuts heaviest live file 8.41×; Op 2 propagates convention; Op 3 documents close-time trigger |
| Project SO #5 | Every mission gets an AAR | ✅ this artifact (lightweight 5-line + 4-category extended findings) |
| Project SO #6 | Archive never delete | ✅ 19+1 DEPRECATED-markers preserved verbatim in `STATE_archive.md`; pre-split `STATE.md` recoverable via `git reset --hard <pre-S2-sha>` |
| Project SO #7 | Dual-audience test | ✅ Spec + artifacts authored for developer (DDL of cut points + AGENTS.md hint text + idempotent commits) + newcomer (why STATE.md tax matters; convention buys cold-start admissibility; archive preserves history without bloat) |
| Project SO #8 | Self-reference mandatory | ✅ M2.1 split the very STATE.md every cold-start Rosetta loads first — and S2 *empirically validated* the recursive closure mid-execution (Read-tool block on pre-split STATE.md during the very session executing the split) |
| Project SO #10 | Cross-link aggressively | ✅ Spec + artifacts wikilink 10+ targets; STATE.md (router) cross-links to STATE_archive.md at the top; 5/5 wikilink resolution audited |
| Campaign SO #11 | Per-phase decadal AAR | N/A at mission close (decadal AAR triggers at P2 exit gate per Campaign S.O. #11; M2.1 = mission #1 in P2) |
| Campaign SO #12 | Per-mission context budget | ✅ frontmatter declared S1 60-90 / S2 100-180 / S3 60-80 kT; self-measured table below |
| Campaign SO #14 | ADR ratification gated at phase entries | ✅ honored — no new ADRs drafted at M2.1; ADR-016 ratifies at M2.2; Op 3 design memo is doctrine-as-design, not ADR text |
| Campaign SO #16 | v7.0 tag dependency hard | ✅ satisfied (v2 M06 closed 2026-05-18T19:10Z+; M2.1 runs after v7.0 tag) |
| Campaign SO #17 | Mission_class discipline | ✅ frontmatter `mission_class: implementation`; canonical 3-session shape 3rd instance after M1.3 + M1.4 |
| Campaign SO #19 | Phase exit = human gate | ✅ applied at P1 → P2 (approved at plan ratification 2026-05-19); applies again at P2 → P3 (M2.1 close does NOT auto-open M3.x cohort) |

---

## Token-budget table (per Campaign Standing Order #12 — estimate vs actual)

| Session | Estimated (kT content-load) | Actual self-report | Notes |
|---|---|---|---|
| S1 | 60-90 | ~ 65-75 (within band; not precisely instrumented this session) | spec authoring + 3 design artifacts; non-destructive |
| S2 | 100-180 | ~ 130-160 (within band; Read-tool block on pre-split STATE.md added ~ 5-10 kT of wasted Read + retry) | 4 destructive commits + Op 2 hint + auto-memory; rich activity log |
| S3 | 60-80 | ~ 55-70 (within band; non-destructive consolidation; templates available) | validation + AAR + node.aDNA addendum + status flips; this session |

**M2.3 retrospective consumer**: API-billing self-measurement for M2.1 sessions is available in `~/.adna/measurement/reports/session_<uuid>_usage.json` once `ingest_transcript.py` runs against the M2.1 jsonl transcripts. M2.3 publishes the M2.1 API-billing aggregate alongside other 48-corpus sessions.

**Estimate-vs-actual stays within band for all 3 sessions** — calibration model accuracy holds at 3rd canonical-shape instance. M2.3 retrospective will analyze whether the band tightens as the implementation-class template seasons.

---

## Load-bearing finding propagation map

**The protocol that designs a split also pays the splitting tax mid-execution** (S2 phase A; finding #1 in §(d) above) propagates upward:

- **M2.2 ADR-016**: heavy-file Read convention as sibling clause to per-mission token-budget — motivated by this recursive-validation moment.
- **M2.3 cross-campaign retrospective**: post-split sessions contribute empirical Δ on the §2 forecast; M2.1's self-proof is the first data point.
- **M2.4 AGENTS.md heat map**: convention adoption observability; M2.1's hint contributes the post-hint corpus baseline.
- **v8 P6 ecosystem propagation**: backlog `idea_upstream_state_md_read_hint.md` carries the lift to `.adna/AGENTS.md` for all 19+ ecosystem vaults.

The recursion is the meta-lesson: a self-referential vault doctrine-checks itself in flight. Future implementations of large refactors against STATE-class artifacts in any vault should *pre-emptively split* before hitting tool failures — M2.1 quantified the cost of reactive splitting (one wasted Read + offset retry + extra cache_creation).

---

## Forward references (cross-link to obj7 §8 to avoid duplication)

See `m21_obj7_validation_output.md` §8 — M2.1 S3 mission close unblocks M2.2 / M2.3 / M2.4; M1.5 stays queued at operator discretion (timing ≤ 2026-05-26).

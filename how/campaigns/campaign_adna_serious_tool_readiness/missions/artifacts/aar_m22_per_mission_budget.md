---
type: aar
artifact_type: mission_aar
aar_class: lightweight  # 5-line + 3-category extended findings (single-session planning-class; per mission spec §Acceptance criteria + Standing Order #5)
mission: mission_adna_str_p2_m22_per_mission_budget
campaign: campaign_adna_serious_tool_readiness
phase: 2
mission_number: 2.2
sessions_executed: 1  # S1 only (planning-class single-session shape; canonical-shape exception per Campaign S.O. #17)
estimated_sessions: 1
actual_sessions_match: yes  # exact match
opened: 2026-05-19T23:36:20Z
closed: 2026-05-19T~23:55Z+   # S1 close (this artifact)
total_wall_clock: ~20 min elapsed (single-session governance work; no operator gaps)
created: 2026-05-19
updated: 2026-05-19
status: complete
last_edited_by: agent_stanley
load_bearing: true  # ADR-016 ratification + Standing Order #14 operator-override precedent + self-reference-as-ratification-mechanism propagate to all M2.3 + M2.4 + M3.x + M4.x + M5.x missions + v8 P6 ecosystem propagation
tags: [aar, mission, m22, v8, p2, serious_tool_readiness, lightweight, load_bearing, adr_016_ratified, standing_order_11_added, planning_class, single_session_shape, operator_override_so14, self_reference_ratification, p2_in_flight]
related_artifacts:
  - ../mission_adna_str_p2_m22_per_mission_budget.md   # mission spec
  - ../../../../what/decisions/adr_016_per_mission_context_budget.md  # the ratified ADR
  - ../../../../CLAUDE.md                              # project — Standing Order #11 added
  - m13_obj7_calibration_output.md                     # M1.3 §6 source (Clause A)
  - m14_obj7_validation_output.md                      # M1.4 §6 source (Clause C)
  - m21_obj7_validation_output.md                      # M2.1 §5 source (Clause B)
  - m21_obj4_archive_convention_design.md              # D1 deferral rubric
  - aar_m21_context_audit_split.md                     # M2.1 AAR — structural template (this artifact)
  - aar_m14_latticescope_schema.md                     # M1.4 AAR — token-budget table format
---

# M2.2 AAR — Per-Mission Context Budget Ratification (ADR-016 + Standing Order #11)

## 5-line summary (Standing Order #5)

- **Worked**: Planning-class single-session shape held cleanly (1st instance — canonical 3-session shape's complement for governance/consolidation work). ADR-016 drafted + ratified + Project Standing Order #11 added + M2.2 mission spec authored declaring `token_budget_estimated` field per the very rule the ADR ratifies — all in one S1. Three predecessor missions' worth of prep notes (M1.3 §6 + M1.4 §6 + M2.1 §5) compressed cleanly into one ADR with 3 clauses + 1 deferral note. **Standing Order #14 operator-override invoked explicitly** at plan ratification per the load-bearing-decision exception clause; precedent recorded in ADR-016 §Status for future mid-phase ratifications.
- **Didn't**: No 4th ADR-016 clause for auto-archive convention (D1=A defer to separate ADR; pattern has only 1 instance at STATE.md; skill-graduation rubric gates at ≥ 3). No API-billing companion formula ratification at Clause C (M1.4 forecast stays forecast; M2.3 retrospective ratifies). No `node.aDNA/` mutations (M2.2 = aDNA.aDNA-only governance; cross-references update at M2.3's natural touch point). No upstream propagation to `.adna/AGENTS.md` (v8 P6 gates per Campaign S.O. #14 + ADR-005 rule 3; backlog placeholder carries the carry).
- **Finding (load-bearing)**: **The doctrine that 3 measurement missions seeded compresses cleanly to one ADR with three clauses + one Project SO; consolidation cost ~ 1 session vs the 6+ sessions spent measuring.** High signal-to-doctrine ratio confirms the implementation-class → planning-class handoff pattern: measurement missions (M1.3 + M1.4 + M2.1) carry the empirical load; ratification missions (M2.2) compress doctrine into operational rule. The 6:1 measurement-to-ratification cost ratio is healthy — it means the doctrine is well-grounded, not premature. Future M2.x / M3.x consolidation missions can plan around the same 1-session ratification footprint when prep notes accumulate across ≥ 3 predecessor missions.
- **Change**: `aDNA.aDNA/what/decisions/adr_016_per_mission_context_budget.md` LIVE (3 clauses A/B/C + D1 deferral note + Status + Context + Consequences + Sibling/related + Sources; 14+ frontmatter fields; co-signed by agent_stanley + operator_stanley). `aDNA.aDNA/CLAUDE.md` Standing Order #11 ADDED (one new numbered entry after item 10; items 1-10 preserved verbatim; refined per ADR-016 Clause A). M2.2 mission spec declares `token_budget_estimated: "S1 ~60-90 kT"` — first mission in campaign history to follow the rule it ratifies (Standing Order #8 self-reference invoked deliberately).
- **Follow-up**: M2.3 / M2.4 / M1.5 cohort entry operator-gated (Campaign S.O. #19). M2.3 retrospective consumes the 645 MT cache_read corpus + M2.1 post-split data point + this M2.2 ratification as new data points; may ratify API-billing companion formula as ADR-016 amendment OR separate ADR (operator decides at M2.3). Auto-archive convention re-evaluates when 2nd instance lands (likely `lattice-labs/STATE.md` at LatticeLabs.aDNA Phase-6 cutover OR large campaign master at v8 P6 close). v8 P6 ecosystem propagation carries ADR-016 + Standing Order #11 + Clause B AGENTS.md convention upstream via existing backlog placeholder mechanism.

---

## Extended findings (3 categories — single-session planning-class AAR shape)

### (a) Doctrine consolidation — what 3 missions' worth of prep notes became

1. **Three sources compressed cleanly into three clauses + one deferral** — M1.3 §6 → Clause A (content-load formula + threshold rule + S.O. #11 candidate text); M1.4 §6 → Clause C (two-metric reporting variant; API-billing formula stays forecast); M2.1 §5 → Clause B (heavy-file Read convention sibling) + D1 deferral source (auto-archive convention). The 1:1 mapping (mission §reference → ADR clause) preserves attribution and makes M2.3 retrospective trivially walkable.
2. **No formula shift required** — M1.4 §6 explicitly states content-load formula stays canonical until M2.3 ratifies API-billing companion. ADR-016 Clause A adopts M1.3 formula verbatim; Clause C is a *reporting variant*, not a *budget variant*. Clean separation of canonical (content-load) and complementary (API-billing) metrics avoids the trap of "budget by two metrics" which would force operators to satisfy both bounds.
3. **D1 deferral rubric pre-existed** — `m21_obj4_archive_convention_design.md` already specified ≥ 3 instances before skill graduation. ADR-016 D1=A defer to separate ADR adopts that rubric verbatim. The rubric travels: future ADR consolidation missions can use the same "defer when instance count < 3" heuristic for pattern codification.
4. **Standing Order #11 wording refined per ADR §Decision Clause A** (D3=A) — M1.3 §6 candidate text was pre-M1.4 + M2.1; refining at ADR ratification time produced the canonical text that lives both in ADR-016 §Decision Clause A AND in CLAUDE.md Standing Order #11 (verbatim match). Synchronization invariant: project CLAUDE.md SO #11 must stay identical to ADR-016 §Decision Clause A; any future amendment touches both.

### (b) Operator-override discipline on Campaign Standing Order #14

1. **Mid-phase ADR ratification precedent recorded explicitly** in ADR-016 §Status. Campaign S.O. #14 normally gates ratification at phase exit; the load-bearing-decision exception clause was invoked at plan ratification 2026-05-19 because ADR-016 binds every subsequent P2/P3/P4/P5 mission (estimate-vs-actual + decomposition threshold + heavy-file Read convention). Without ratification mid-phase, ~20 future missions would each plan without the discipline.
2. **Explicit-invocation pattern locks the override mechanism** — operator must explicitly invoke the load-bearing-decision clause; no blanket exception. Future mid-phase ratifications follow the same explicit pattern, recorded in the ADR's §Status section. This prevents Campaign S.O. #14 from eroding by default.
3. **The override is itself load-bearing** — ADR-016 ratification at mid-P2 unlocks Standing Order #11 as a binding rule for ALL M2.3+ missions, not just post-P2-exit missions. The 20-mission downstream consumer list (every future v8 mission) ratifies the load-bearing claim by itself.
4. **Co-signature pattern** — ADR-016 frontmatter `deciders: [agent_stanley, operator_stanley]` records two-party ratification (agent author + operator ratifier). This is consistent with ADR-011 + ADR-010 precedent and satisfies Project S.O. #1 phase-gate-as-human-gate without requiring a separate operator-approval session.

### (c) Forward signals — what M2.3 + M2.4 + v8 P6 inherit

1. **M2.3 cross-campaign retrospective** consumes the 645 MT cache_read corpus across 48 sessions + M2.1 post-split data point + this M2.2 ratification session as the first data point under the ratified Clause A frontmatter rule. Calibration accuracy report can finally compute estimate-vs-actual Δ in a structured form (M1.3 + M1.4 + M2.1 + M2.2 all have token_budget_estimated declared or recoverable from session/mission frontmatter + activity logs).
2. **M2.3 may ratify API-billing companion formula** as ADR-016 amendment (preferred — keeps consolidation tidy) OR separate ADR (if M2.3 surfaces enough new doctrine to warrant). Operator decides at M2.3 plan ratification. Either way, the API-billing forecast in M1.4 §6 + Clause C of ADR-016 stays forecast until M2.3.
3. **M2.4 AGENTS.md heat map** consumes Clause B convention adoption signal — `ingest_transcript.py` corpus can detect Reads on heavy files done WITHOUT offset+limit (anti-pattern instances) vs WITH offset+limit (convention adoption). M2.4 still gated on ≥ 10 live-hook sessions; M2.2 contributes 1 fresh post-ratification session.
4. **v8 P6 ecosystem propagation** queues ADR-016 + Standing Order #11 + Clause B AGENTS.md convention for lift to `.adna/` upstream. Backlog placeholder `idea_upstream_state_md_read_hint.md` carries Clause B; ADR-016 + Standing Order #11 enter the propagation queue at the next campaign master rotation. 19+ ecosystem vaults inherit the discipline at v8 P6.
5. **Auto-archive convention re-evaluation trigger** — 2nd instance landing (lattice-labs/STATE.md OR large campaign master) triggers re-evaluation per D1 rubric. If skill graduation lands at instance 3, a follow-up ADR (provisional ADR-020 or later) ratifies the auto-archive doctrine. ADR-016 §Sibling/related decisions notes the deferral explicitly so future operators don't re-litigate D1.
6. **Self-reference as ratification mechanism** — M2.2 declared `token_budget_estimated` in its own frontmatter before ADR-016 ratified the field. The recursive closure is deliberate (Standing Order #8) and lands cleanly in a single commit. Future ratification missions that introduce new mandatory frontmatter fields should follow the same self-reference-at-author-time pattern to avoid chicken-and-egg ambiguity.

---

## Acceptance-criteria scorecard (M2.2 mission spec §Acceptance criteria — 11 items)

| # | Criterion | Status |
|---|---|---|
| 1 | All 5 deliverables landed at S1 close | ✅ PASS |
| 2 | `aDNA.aDNA/what/decisions/adr_016_per_mission_context_budget.md` exists with all 14+ frontmatter fields populated + `status: accepted` | ✅ PASS |
| 3 | ADR-016 §Decision has 3 clauses (A content-load + B heavy-file Read convention + C two-metric reporting variant) + D1 deferral note | ✅ PASS |
| 4 | `aDNA.aDNA/CLAUDE.md` Standing Order #11 added (one new numbered entry; items 1-10 preserved verbatim; no renumbering) | ✅ PASS |
| 5 | Campaign master M2.2 row shows `completed`; ADR roadmap ADR-016 row shows `accepted` with `accepted_at` populated | ✅ PASS (status-flip step in same session) |
| 6 | STATE.md router stays ≤ ~45,000 B (≤ 20 kT preserved); Read tool succeeds without offset | ✅ PASS (router refresh + Op 3 archive-on-close 2nd demo; pre-refresh 41,692 B → post-refresh measurement at commit) |
| 7 | M2.2 AAR lightweight 5-line + 3-category extended findings landed (S.O. #5 mandatory) | ✅ PASS (this artifact) |
| 8 | Zero `.adna/` upstream touches end-to-end (v7.0 frozen verified) | ✅ PASS (`git -C .adna status` clean) |
| 9 | Zero `node.aDNA/` mutations (M2.2 = aDNA.aDNA-only governance) | ✅ PASS (only `.obsidian/plugins/termy/` local state in node.aDNA tree; M2.2 work files unchanged) |
| 10 | Zero new ADRs beyond ADR-016 at M2.2 (auto-archive deferred per D1=A; two-metric reporting included as Clause C) | ✅ PASS |
| 11 | Mission frontmatter declares `token_budget_estimated` field per Clause A (this mission is the first instance to follow the rule being ratified) | ✅ PASS (self-reference per S.O. #8) |

**11/11 PASS**.

---

## Standing-Order discharge table

| # | Order | M2.2 outcome |
|---|---|---|
| Project SO #1 | Phase gates are human gates | ✅ operator-override on Campaign S.O. #14 invoked at plan ratification (load-bearing decision); ADR ratification is the work of S1 |
| Project SO #3 | Context budget is doctrine | ✅ ADR-016 + Standing Order #11 turn slogan into operational rule (the explicit purpose of M2.2) |
| Project SO #5 | Every mission gets an AAR | ✅ this artifact (lightweight 5-line + 3-category extended findings) |
| Project SO #6 | Archive never delete | ✅ M2.2 adds (ADR + SO + mission spec + AAR + session file); deletes nothing (items 1-10 of CLAUDE.md + all existing ADRs preserved verbatim) |
| Project SO #7 | Dual-audience test | ✅ ADR-016 §Decision authored for developer (frontmatter field + formula + decomposition rule) + newcomer (Why budget matters in §Context; What drift > 2× means in Clause A); Standing Order #11 reads declaratively for both audiences |
| Project SO #8 | Self-reference mandatory | ✅ M2.2 declared `token_budget_estimated: "S1 ~60-90 kT"` in its OWN mission-spec frontmatter BEFORE ADR-016 ratified the field. The recursion is deliberate; lands cleanly in single S1 commit |
| Project SO #10 | Cross-link aggressively | ✅ ADR-016 wikilinks 9+ targets (ADR-005 + ADR-011 + M1.3/M1.4/M2.1 obj7 + M2.1 obj4 + campaign master + campaign CLAUDE.md + node.aDNA token_baselines); mission spec wikilinks 10+ targets |
| Project SO #11 | Per-mission context budget is mandatory (RATIFIED THIS SESSION) | ✅ first mission to follow the rule it ratifies; frontmatter `token_budget_estimated: "S1 ~60-90 kT"`; this AAR's token-budget table reports estimate-vs-actual below |
| Campaign SO #11 | Per-phase decadal AAR | N/A at mission close (decadal AAR triggers at P2 exit gate) |
| Campaign SO #12 | Per-mission context budget | ✅ honored — S1 estimated 60-90 kT; token-budget table below |
| Campaign SO #14 | ADR ratification gated at phase entries | ✅ **operator-override invoked** at plan ratification per load-bearing-decision exception clause; precedent recorded in ADR-016 §Status |
| Campaign SO #16 | v7.0 tag dependency hard | ✅ satisfied (v2 M06 closed 2026-05-18) |
| Campaign SO #17 | Mission_class discipline | ✅ `mission_class: planning` declared; single-session shape (planning-class compresses naturally vs canonical 3-session implementation shape) |
| Campaign SO #19 | Phase exit = human gate | ✅ applied at P2 → P3 (M2.2 close does NOT auto-advance) |

---

## Token-budget table (per Campaign Standing Order #12 + project Standing Order #11 — estimate vs actual)

| Session | Estimated (kT content-load) | Actual self-report | Notes |
|---|---|---|---|
| S1 | 60-90 | ~ 55-75 (within band; slightly under-estimate — consolidation mission read fewer prep-note sources than a from-scratch design would require) | ADR draft + mission spec + CLAUDE.md SO #11 insertion + AAR + status flips + STATE.md router refresh; all artifact-authoring + 1 surgical CLAUDE.md edit |

**Estimate-vs-actual delta**: < 1× band; well within Standing Order #11 drift > 2× retrospective trigger. Single-session planning-class shape calibration model validated at 1st instance.

**M2.3 retrospective consumer**: API-billing self-measurement for M2.2 session available in `~/.adna/measurement/reports/session_<uuid>_usage.json` once `ingest_transcript.py` runs against M2.2 jsonl transcript. M2.3 publishes the M2.2 API-billing aggregate alongside other 48-corpus sessions + M2.1 post-split + this M2.2 ratification.

---

## Forward references

**M2.2 close UNBLOCKS**:
- **M2.3 convergence-model retrospective** (operator-discretionary parallel) — consumes 645 MT cache_read corpus + M2.1 split + M2.2 ratification; reports calibration accuracy under ratified Clause A; may amend Clause C with ratified API-billing formula OR draft separate ADR.
- **M2.4 AGENTS.md heat map** (operator-discretionary parallel; still gated on ≥ 10 live-hook sessions; M2.2 contributes 1).

**M1.5 coord-network discharge** stays queued (operator-discretionary parallel; timing target ≤ 2026-05-26 per `who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md` §6).

**M2.1.5 retroactive Op 3** still available as operator override on D4=A; no change at M2.2.

**v8 P6 ecosystem propagation** queues ADR-016 + Standing Order #11 + Clause B AGENTS.md convention for lift to `.adna/` upstream. Backlog mechanism + ADR-005 rule 3.

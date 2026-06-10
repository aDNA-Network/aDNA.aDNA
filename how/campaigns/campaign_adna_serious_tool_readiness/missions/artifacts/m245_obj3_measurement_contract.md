---
type: artifact
artifact_type: measurement_contract
mission_id: mission_adna_str_p2_m245_agents_md_bulk_edit
campaign: campaign_adna_serious_tool_readiness
phase: 2
mission_number: 2.4.5
obj: 3
created: 2026-05-20
updated: 2026-05-20
status: active
last_edited_by: agent_stanley
tags: [artifact, measurement_contract, m2_4_5, v8, p2, agents_md_discoverability, m3_x_handoff, q2_re_run_trigger, pattern_beta_refresh_trigger, heat_map_refresh_schedule, m24_obj2_consumer, m24_obj3_consumer, m24_obj4_consumer]
---

# m245_obj3 — Measurement-Cycle Contract (Post-Bulk-Edit)

> **Purpose**: codify the post-M2.4.5 re-measurement trigger, expected outcome direction, Pattern β refresh threshold, and heat-map refresh schedule so the M3.x cohort has an unambiguous handoff for validating whether the AGENTS.md hardening *actually* moved the discoverability needle.
>
> **Why this contract exists**: M2.4.5 verified structural conformance (12/12 mandatory invariants pass) — but the M2.4 strategic re-frame (AGENTS.md UNDER-LOADED → hardening for discoverability) requires a *behavioral* test (does the hardened layer actually pre-route agents?), not just a structural one. This contract names the behavioral test + expected direction.
>
> **Self-reference**: this artifact itself adds 1 file to the substrate the measurement will observe — but it sits in `how/campaigns/.../missions/artifacts/` whose AGENTS.md (rank 4) was hardened by M2.4.5, so the artifact already benefits from the very hardening it codifies the test for. (Standing Order #8 self-reference, 8th canonical instance candidate substrate.)

---

## §1 — Re-run trigger conditions

The measurement cycle re-runs when **ALL** of the following hold:

| # | Condition | Verification |
|---|---|---|
| 1 | M2.4.5 close commit landed | `git log --grep="M2.4.5\|m245" --oneline` returns ≥ 1 commit |
| 2 | M3.x cohort has produced ≥ 20-session corpus (any combination of M3.1-M3.7 sessions, OR M3.x + M2.4.5 + M2.4 + earlier P2 sessions) | `sqlite3 -readonly ~/.adna/measurement/measurement.sqlite "SELECT COUNT(*) FROM sessions"` returns ≥ 20 |
| 3 | At least 1 M3.x mission has completed at least 1 session that touched a directory whose AGENTS.md was hardened by M2.4.5 | Cross-check `tool_calls.cwd` LIKE `%how/campaigns%` OR `%what/decisions%` etc. against M3.x session_ids |
| 4 | Operator authorizes the re-measurement OR an M3.x mission spec includes the re-measurement as a deliverable | Plan ratification gate per Project Standing Order #1 |

**Trigger sequence**: 1 + 2 + 3 + 4 ⇒ re-measurement runs as an objective inside an M3.x mission (e.g., M3.1 obj-N or a dedicated M3.x measurement mission).

**Default home**: per Rosetta-default, the re-measurement lands inside **M3.1** (forge-ecosystem hardening; first M3 mission to consume the hardened routing layer; first behavioral data point). Alternative: dedicated **M3.0.5** or **M3.8** measurement mission if M3.1 scope is already full.

---

## §2 — Expected outcome direction

The hardening hypothesis (from M2.4 load-bearing finding) predicts **two directional shifts**:

| Metric | Pre-M2.4.5 baseline (m24_obj2 Q1+Q2) | Expected post-M2.4.5 direction | Reasoning |
|---|---|---|---|
| **AGENTS.md read frequency** (Q1 vault-wide top-N) | 86% of 44 active AGENTS.md never read in n=10 corpus; 6 touched files at 1 read/session each | **RISES** — more agents drill into the routing layer first; Q1 top-50 should include ≥ 4 AGENTS.md files (vs. 0-2 pre-edit) | Hardened AGENTS.md with Load/Skip + Token cost + Cross-References gives agents an explicit decision substrate at the routing layer; cold-loading deep files without consulting AGENTS.md first becomes the less-efficient path |
| **Deep-content re-read rate** (Q2 aggregate per-file) | 27.44% aggregate re-read on n=14 corpus (Pattern β rank 14; CV 0.353; r=0.142) | **FALLS** — Pattern β rank may shift below 14 if discoverability hardening works; aggregate re-read targets the 22-32% band (refresh trigger at boundary) | Better routing-layer signaling reduces speculative deep-file cold-loads; agents make smaller initial loads, satisfy task, less need to re-read for missed context |

**Verdict cases**:
- **Both shifts confirmed in expected direction** → discoverability hypothesis VALIDATED; M2.4.5 work lifts to v8 P6 propagation queue; 7-item invariants spec recommended for ecosystem-wide adoption
- **Only AGENTS.md read freq RISES; deep-content re-read STAYS or RISES** → routing-layer hardening works but downstream waste cycle is independent; new mission needed (M3.x.5 or M2.4.6) to address downstream re-read directly; AGENTS.md hardening is necessary but not sufficient
- **Both shifts STAY or wrong direction** → re-frame hypothesis falsified at the M2.4.5 application level; either invariants spec needs refinement OR top-12 scope was wrong OR the routing layer is not the locus of leverage; AAR-style retrospective triggers; potential M3.x.X investigation
- **Mixed (one shifts in expected direction, magnitude small)** → marginal validation; Pattern β refresh trigger evaluates whether band-exit warrants re-rank; subsequent M3.x.X mission may codify next-level hardening

---

## §3 — Re-run procedure

The re-run executes `m24_obj2_heatmap_query_suite.md` Q1 + Q2 + Q3 + Q4 against the post-M2.4.5 SQLite state.

### Q1 (vault-wide top-N file reads)

```bash
sqlite3 -readonly ~/.adna/measurement/measurement.sqlite <<EOF
.mode column
.headers on
SELECT
  REPLACE(tool_input, '"file_path":"', '') as file_path,
  COUNT(*) as read_count
FROM tool_calls
WHERE tool_name = 'Read'
GROUP BY file_path
ORDER BY read_count DESC
LIMIT 50;
EOF
```

**Expected**: top-50 should now include ≥ 4 AGENTS.md files (vs. 0-2 baseline at m24_obj2 §3). Track which AGENTS.md files enter the top-50 — that's the immediate signal of which routing files agents actually consult.

### Q2 (AGENTS.md per-file + aggregate re-read)

```bash
sqlite3 -readonly ~/.adna/measurement/measurement.sqlite <<EOF
.mode column
.headers on
SELECT
  REPLACE(tool_input, '"file_path":"', '') as file_path,
  COUNT(*) as total_reads,
  COUNT(DISTINCT session_id) as unique_sessions,
  COUNT(*) - COUNT(DISTINCT session_id) as re_reads_in_session,
  ROUND(100.0 * (COUNT(*) - COUNT(DISTINCT session_id)) / COUNT(*), 1) as re_read_pct
FROM tool_calls
WHERE tool_name = 'Read'
  AND tool_input LIKE '%AGENTS.md%'
GROUP BY file_path
ORDER BY total_reads DESC;
EOF
```

**Expected**:
- AGENTS.md per-file read count RISES for the 12 hardened files
- Aggregate AGENTS.md re-read stays near 0% (single-shot pattern is correct; hardening doesn't change the routing-layer re-read pattern)

### Q3 (cross-vault traversal edge weights)

```bash
sqlite3 -readonly ~/.adna/measurement/measurement.sqlite <<EOF
.mode column
.headers on
SELECT
  origin_vault,
  target_vault,
  COUNT(*) as edge_weight
FROM context_traversal
GROUP BY origin_vault, target_vault
ORDER BY edge_weight DESC;
EOF
```

**Expected**: cross-vault edge weights from aDNA.aDNA grow (currently 55 → node.aDNA + 13 → LatticeNetwork.aDNA + 3 → LatticeLabs.aDNA + 1 → LatticeAgent.aDNA per m24_obj2 §4 mermaid baseline); M3.x cohort touches multiple platforms.

### Q4 (top-N most-read files vault-wide)

Same as Q1 but a broader vault-wide picture. Re-render `m24_obj2` §4 Mermaid digraph at the new state.

---

## §4 — Pattern β refresh trigger conditions

Per `m24_obj3_pattern_beta_final_verdict.md` HOLD at 14 + r=0.142 < 0.4 PROMOTE threshold + CV 0.353 < 0.4 stability:

**Refresh trigger fires** if EITHER of:

| Condition | Action |
|---|---|
| Post-M2.4.5 aggregate re-read on n ≥ 20 corpus **leaves the 22-32% band** (i.e., < 22% OR > 32%) | Re-run the verdict tree from `m24_obj3` §5 with the new corpus; possibly REFINE per-mission-class (D-decisions tree branch) or PROMOTE to rank 15-16 if r > 0.4 with band-exit |
| Post-M2.4.5 CV (coefficient of variation) on n ≥ 20 corpus **exceeds 0.4** (stability threshold) | The aggregate metric is no longer stable; need either per-mission-class refinement OR a larger corpus before re-rank |

**Default action if both stay in band + CV stable**: HOLD at 14 (consistent with M2.4 verdict).

---

## §5 — Heat-map refresh schedule

| Event | Action | Cadence |
|---|---|---|
| **M3.x mission opens that consumes the hardened layer** | Optional pre-mission Q1 snapshot to baseline; defer Q2 to mission close | Per-mission opt-in |
| **M3.x ≥ 20-session corpus** | Re-run Q1+Q2+Q3+Q4 full suite; render new Mermaid digraph for Q3; compare against m24_obj2 §3+§4+§5 baseline | One-shot at corpus threshold crossing |
| **Pattern β refresh trigger fires** | Re-run verdict tree from `m24_obj3` §5 with new corpus; produce m3x_obj_pattern_beta_refresh artifact if verdict shifts | Conditional on §4 trigger |
| **v8 P6 ecosystem propagation** | Propagate the 7-item invariants spec to ≥ 19 partner vaults; re-measure cross-vault corpus at ≥ 100-session aggregate | v8 P6 mission slot |

---

## §6 — Forward dispatch (M3.x cohort inheritance)

**M3.1** (forge-ecosystem hardening; first M3 mission):
- **Optional Obj-N**: trigger the §3 re-run when M3.1's own corpus contributes pushes the cross-mission total past 20 sessions
- **Mandatory cross-reference**: link to this contract at M3.1 mission spec §Cross-References

**M3.0.5 OR M3.8 (dedicated measurement)** — only if Rosetta-default M3.1-absorption is declined at M3.x dispatch:
- Single-session shape; 5/5 deliverables = Q1 + Q2 + Q3 + Q4 re-run artifacts + verdict + AAR
- ≤ 50 kT content-load budget (no Edits; pure measurement + analysis)

**v8 P6 inheritance** (conditional on M3.x validation):
- The 7-item invariants spec joins the propagation queue (per M2.4 AAR §primary load-bearing finding propagation map)
- The measurement-cycle contract itself becomes a template for future per-directory hardening missions in partner vaults

**v3-EC successor campaign inheritance**:
- Per-vault audit substrate from m24_obj4 §2 (44-row inventory format) reusable for v3-EC M01-EC per-vault audit baseline
- This measurement contract template reusable for v3-EC M07-EC final-audit measurement layer

---

## §7 — Conditional follow-up missions (decision tree)

| M3.x re-measurement verdict | Follow-up mission | Trigger |
|---|---|---|
| Both shifts confirmed (RISES + FALLS) | v8 P6 M6.X — AGENTS.md invariants spec lift to `.adna/` upstream | Standard v8 P6 propagation queue |
| Only AGENTS.md read freq RISES; deep-content re-read STAYS or RISES | **M3.x.5 OR M2.4.6** — investigate downstream re-read substrate (mission specs, campaign master, STATE.md); AGENTS.md hardening is necessary but not sufficient | Conditional on partial validation |
| Both STAY or wrong direction | **M3.x.X investigation** — re-frame hypothesis falsified; either invariants spec needs refinement OR top-12 scope was wrong OR routing layer is not the locus of leverage; AAR-style retrospective | Conditional on falsification |
| Mixed marginal | Operator-discretionary — may proceed to v8 P6 with caveat in propagation memo OR open M3.x.5 to widen the invariants spec | Operator-decision |

---

## §8 — Acceptance + cross-references

### Acceptance (per M2.4.5 mission spec acceptance criterion 7)

This contract names: ✅ (a) Q2 re-run trigger at M3.x ≥ 20-session corpus (§1 + §3) — ✅ (b) expected outcome direction RISES + FALLS (§2) — ✅ (c) Pattern β refresh trigger if aggregate re-read leaves 22-32% band (§4) — ✅ (d) heat-map refresh schedule (§5).

### Cross-references

- [[mission_adna_str_p2_m245_agents_md_bulk_edit.md|M2.4.5 mission spec]] — parent mission; this artifact closes M2.4.5 Obj 3 acceptance criterion 7
- [[aar_m245_agents_md_bulk_edit.md|M2.4.5 AAR]] — companion artifact (load-bearing finding propagation map)
- [[m24_obj2_heatmap_query_suite.md|m24_obj2]] — Q1+Q2+Q3+Q4 baseline (re-run source)
- [[m24_obj3_pattern_beta_final_verdict.md|m24_obj3]] — Pattern β HOLD 14 verdict tree (§4 refresh trigger source)
- [[m24_obj4_agents_md_hardening_audit.md|m24_obj4]] — §3 invariants spec + §7 measurement-cycle contract (this artifact extends the §7 sketch into a full contract)
- [[aar_m24_agents_md_heatmap.md|M2.4 AAR]] — load-bearing finding source (AGENTS.md UNDER-LOADED; discoverability re-frame)
- [[../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] — Clause A + Clause C empirical constants (consumed by M2.4.5 AAR token-budget table)
- [[../../../what/decisions/adr_022_tool_use_logging.md|ADR-022]] — PostToolUse hook contract (Clause C names m24_obj2 first consumer; this contract is the second analysis-dispatch consumer)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — M2.4.5 row + amendments-table 2026-05-20 entry
- `/Users/stanley/aDNA/node.aDNA/what/context/token_baselines.md` v0.1.3 — Appendix B per-directory AGENTS.md invariants spec verbatim (canonical-secondary source for invariants spec; this contract validates the spec at M3.x)

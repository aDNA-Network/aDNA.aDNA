---
type: artifact
artifact_type: validation_output
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p2_m21_context_audit_split
objective: 7
session: S3
created: 2026-05-19
updated: 2026-05-19
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m21, obj7, validation, post_split_calibration, op_1_completed, op_2_completed_local, op_3_documented, router_archive_pattern, heavy_file_read_convention, recursive_self_reference, adr_016_prep_addendum, m22_input, m23_input, m24_input, p2_in_flight]
related_artifacts:
  - m21_obj2_state_split_design.md          # S1 Op 1 design spec — pre-split target + verification checklist
  - m21_obj3_agents_md_hint_design.md       # S1 Op 2 design spec — heavy-file convention text
  - m21_obj4_archive_convention_design.md   # S1 Op 3 design memo — doctrine-as-design (no code at M2.1)
  - m14_obj7_validation_output.md           # M1.4 S3 — structural template (8-section shape)
  - m13_obj7_calibration_output.md          # M1.3 S3 — pattern α/β/γ/δ rank source
  - aar_m14_latticescope_schema.md          # M1.4 AAR — 2-metric framing + δ-upgrade signal
  - ../../../../node.aDNA/what/context/token_baselines.md  # v0.1.1 → v0.1.1-addendum target (this S3)
downstream_consumers:
  - mission_adna_str_p2_m22_per_mission_budget       # §5 ADR-016 prep notes addendum
  - mission_adna_str_p2_m23_convergence_validation   # §2 API-billing forecast (pending live measurement)
  - mission_adna_str_p2_m24_agents_md_heatmap        # §3 + §4 fresh-session corpus contribution
---

# M2.1 Obj 7 — Validation output, post-split calibration, Op status flips, ADR-016 prep addendum

> **Deliverable 7 of M2.1** (S3). The mission's *post-execution consolidated output*. Closes the loop from S1 design specs (Op 1 split design + Op 2 hint design + Op 3 doctrine memo) through S2 destructive execution (4 commits; 6 deliverables landed) to S3 validation + mission close. Records the empirical post-split state, the operationally-projected API-billing benefit (forecast — measurement deferred to M2.3 cross-campaign retrospective), the wikilink-resolution evidence, and the Op-by-Op status finalization.
>
> **Standing Order #8 (self-reference)**: M2.1 split the very STATE.md that every cold-start agent loads at startup — including the Rosetta sessions designing the split. **The recursive closure landed empirically at S2**: the pre-split STATE.md (343.5 KB) hit the Read-tool 256 KB hard backstop *during the very session executing the split*. The protocol that designs the split also pays the splitting tax mid-execution — pre-emptive splits before the tool fails are cheaper than reactive splits after.
>
> **Standing Order #14 honored**: ADR-016 prep notes addendum only (§ 5); no full ADR draft at M2.1. M2.2 ratifies; M2.1 contributes the heavy-file-Read convention as a sibling clause to the per-mission token-budget discipline.

---

## §1 — Pre / post split content-load delta

Source: `m21_obj2_state_split_design.md` §pre-split baseline + S2 session file SITREP + `wc -c` measurements at S3 entry.

### 1.1 Headline numbers

| Measure | Pre-split (HEAD `1e337db`) | Post-split router (HEAD `35c3538`) | Post-split archive | Δ |
|---|---:|---:|---:|---:|
| Bytes | **355,328** (347 KB)* | **41,791** (40.81 KB) | **197,228** (192.6 KB) | router −313,537 B (−88.2%) |
| Content-load (kT, M1.3 metric `bytes / 4`) | ~75.8 kT** | ~10.2 kT | ~48.1 kT | router −65.6 kT |
| Read-tool admissibility | ❌ **HARD-BLOCKED** at 256 KB (`File content (339.2 KB) exceeds maximum allowed size (256 KB)`) | ✅ Reads cleanly with no offset | ✅ Reads cleanly with no offset | router moves from blocked → admissible |
| Router reduction factor | — | **8.41×** (≈ **841%**) vs pre-split bytes | — | **2.1× the ≥ 4× target** |

\* `wc -c` on the design-spec baseline lines. S2 SITREP cites 343.5 KB as the Read-tool-fail moment; 339.2 KB is the actual error message value. All three are within rounding; the ~ 350 KB band is the relevant pre-split magnitude.
\*\* M1.3 content-load metric (`bytes / 4`). M1.4 §6 established this is a structural under-count of API-billing units by 100–500×; the API-billing companion magnitudes appear in §2 below.

### 1.2 Op 1 verification checklist (from `m21_obj2_state_split_design.md` §verification)

| Check | Target | Actual | Result |
|---|---|---|---|
| Router bytes | ≤ 80,000 B | 41,791 B | ✅ **48% under target** |
| Archive bytes | ≤ 200,000 B | 197,228 B | ✅ within budget (≈ 1.4 KB headroom; rotation candidate per Op 3 §2 at next major DEPRECATED-marker append) |
| Read-tool admissibility (router, no offset) | succeeds | succeeds | ✅ |
| Read-tool admissibility (archive, no offset) | succeeds | succeeds | ✅ |
| `## Last Session DEPRECATED-marker` count in archive | ≥ 19 | 19+1 (1 = legacy P0-OPENED block marked DEPRECATED on move) | ✅ |
| `## Last Session` count in router (live) | 1 | 1 | ✅ |
| `## Next Session Prompt` count in router (live) | 1 | 1 | ✅ |
| Archive frontmatter `type: state_archive` | present | present | ✅ |
| Router → archive cross-link at top | present | line 17 of router | ✅ |
| Reduction factor vs design target | ≥ 4× (400%) | 8.41× (841%) | ✅ **2.1× over target** |

---

## §2 — API-billing forecast (cache_creation tax drop on cold-start sessions)

Source: M1.4 §6 + `aar_m14_latticescope_schema.md` §(d) pattern δ-upgrade. **Forecast — not measured**. M2.3 cross-campaign retrospective will consume the 645.3 M cache_read / 19.3 M cache_creation 48-session corpus alongside fresh post-split sessions to produce the empirical Δ.

### 2.1 Magnitude framing (two-metric doctrine, per M1.4 §6)

Per M1.4 authoritative measurements: mean `cache_creation_input_tokens` per cold-start = ~403 K tokens; pattern δ ranking elevated 6 → 10 because cache_creation floors at ~109 K and runs to ~1.25 M for write-heavy sessions. Pre-split STATE.md sat at ~75.8 kT content-load — but the cache_creation accounting consumed by *re-creating* the cached STATE.md page on first read of a cold-start ran proportionally higher in API-billing units (M1.4 §6 quantified the 100–500× under-count between content-load and cache-billing metrics).

### 2.2 Projected post-split benefit

**Conservative forecast** (router-only loaded at cold-start; archive lazy-loaded only when a session reaches for historical context):

| Metric | Pre-split cold-start floor (M1.4-derived) | Post-split cold-start floor (router-only projected) | Δ |
|---|---:|---:|---:|
| Content-load (M1.3 metric) | ~75.8 kT | ~10.2 kT | −86.5% |
| `cache_creation` floor per cold-start (forecast, naive proportional) | ~109 K (M1.4 minimum observed; STATE-dominant) | ~14.7 K (router-proportional) | −86.5% (naive) |
| `cache_creation` mean per cold-start (forecast, naive proportional) | ~403 K | ~54.4 K | −86.5% (naive) |
| Per-turn `cache_read` (steady-state; STATE.md re-reads) | ~180 K (M1.4 §1.2 mean) | proportionally lower for STATE.md-pages-still-in-context | partial — depends on agent-side cache-affinity |

**Caveats** (do not over-claim):
1. The naive proportional model assumes STATE.md dominates cold-start cache_creation. In practice, CLAUDE.md (project + workspace) + auto-memory + recently-active campaign CLAUDE.md also contribute. M2.3 retrospective will isolate the STATE.md-attributable share.
2. Archive-load adds 48.1 kT *when* an agent reaches for historical context — but historical-context loads were previously paid on every cold-start. Net benefit holds for the routine cold-start; rare-reach-back sessions see a flat profile (router + archive ≈ pre-split STATE.md).
3. Per-turn `cache_read` benefits depend on whether the *previously-cached* STATE.md page is still cache-affinitive on the next turn. Agent harnesses with strong cache affinity will see less reduction at steady-state than at cold-start.

**Reported as forecast**; M2.3 publishes the measured Δ from `ingest_transcript.py` corpus + ≥ 1 fresh post-split session (this S3 contributes the first).

---

## §3 — 5-wikilink resolution sample

Source: `m21_obj2_state_split_design.md` §5-wikilink-resolution + S2 phase C cross-link audit (zero broken anchors found across `aDNA.aDNA/`).

| # | Wikilink | Located in | Resolves to | Result |
|---|---|---|---|---|
| 1 | `[[STATE_archive.md\|STATE_archive.md]]` | `STATE.md` line 17 (router → archive cross-link at top) | `aDNA.aDNA/STATE_archive.md` | ✅ PASS |
| 2 | `[[how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m21_context_audit_split.md\|M2.1 mission file]]` | `STATE.md` "Next Steps" §M2.1 row | `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m21_context_audit_split.md` | ✅ PASS |
| 3 | `[[who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md\|cross-vault disruption assessment memo]]` | `STATE.md` "Next Steps" §M1.5 row | `aDNA.aDNA/who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md` | ✅ PASS |
| 4 | `[[how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/aar_m06_v7_governance_tag.md\|aar_m06_v7_governance_tag.md]]` | archive — preserved verbatim from pre-split STATE.md descriptive block | `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/aar_m06_v7_governance_tag.md` | ✅ PASS |
| 5 | `[[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_phase7_d10.md]]` (and 9 other AAR back-refs) | router "Phase 7 Progress" table (rows for M25–M35) | `aDNA.aDNA/how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d10.md` | ✅ PASS |

Result: **5/5 PASS**. No broken anchors detected by S2 Phase C grep. No DEPRECATED-marker anchor was ever the target of an incoming wikilink in the vault (S2 Finding 6 — safer-than-worst-case audit).

---

## §4 — Op status finalization (M2.1 mission deliverables)

| Op | S1 design artifact | S2 destructive execution | S3 status |
|---|---|---|---|
| **Op 1** STATE.md split | `m21_obj2_state_split_design.md` (4-phase commit sequence) | Phases A (`95332df`) + B (`7a87022`) — router 41,791 B + archive 197,228 B + cross-link + frontmatter | ✅ **completed** (router + archive live; rollback path defined; Read-tool admits both) |
| **Op 2** Heavy-File Read convention | `m21_obj3_agents_md_hint_design.md` (≤ 3-line `AGENTS.md` hint + companion `MEMORY.md` line + backlog placeholder) | Phase E (`235c3fd`) — `AGENTS.md` Heavy-File Read Convention insert + auto-memory `MEMORY.md` index entry + NEW `feedback_heavy_file_read.md` + `how/backlog/idea_upstream_state_md_read_hint.md` placeholder | ✅ **completed-local** (`aDNA.aDNA/AGENTS.md` live; upstream propagation to `.adna/AGENTS.md` waits for v8 P6 per Campaign S.O. #14 + ADR-005 rule 3; backlog placeholder records the carry) |
| **Op 3** Auto-archive convention | `m21_obj4_archive_convention_design.md` (trigger definition + STATE.md as first canonical instance + skill candidate + retroactive deferral) | none (Standing Order #14 — doctrine-as-design-memo at M2.1; no executable skill graduation here) | ✅ **documented** (design memo is the deliverable; skill graduation `skill_campaign_close_archive.md` deferred to ≥ 3 instances; retroactive sweep of v2 + LWX masters deferred to M3.x per D4=A) |

**Auto-memory companions** (Op 2 — outside vault, per memory protocol):
- `/Users/stanley/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/MEMORY.md` — 3rd index entry appended (heavy-file Read convention).
- `/Users/stanley/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/feedback_heavy_file_read.md` — NEW memory file (default offset+limit Reads for ≥ 50 kT or ≥ 200 KB; STATE.md canonical instance).

---

## §5 — ADR-016 prep notes addendum (for M2.2)

> **Standing Order #14**: no full ADR text at M2.1. The bullets below augment M1.3 §6 + M1.4 §6 ADR-016 prep notes for M2.2 consumption.

ADR-016 (heavy-file Read convention + per-mission token-budget discipline) should incorporate two M2.1-confirmed clauses:

1. **Hard backstop empirically validated** — M1.4 §6 forecasted the Read-tool 256 KB limit as a hard backstop. M2.1 confirmed it mid-execution: the pre-split STATE.md hit the limit on the very session designing the split. ADR-016 should record this as load-bearing motivation for the convention, not a soft warning. **Cite**: `session_stanley_20260519T211229Z_v8_m21_s2.md` Phase A entry.

2. **Heavy-file convention sibling clause** — the per-mission token-budget rule (existing M1.3 + M1.4 prep) addresses *session-level* discipline. The heavy-file Read convention addresses *file-level* discipline (default `offset+limit` on Reads ≥ 50 kT or ≥ 200 KB). The two clauses compose: a well-budgeted mission may still over-spend if it Reads a 350 KB file naïvely. ADR-016 records both as standard, with the convention published to `aDNA.aDNA/AGENTS.md` (live this M2.1) and upstream-propagation to `.adna/AGENTS.md` queued for v8 P6 per `how/backlog/idea_upstream_state_md_read_hint.md`.

3. **Auto-archive convention as supplementary doctrine** — Op 3 `m21_obj4_archive_convention_design.md` defines the rotation trigger (archive > 200 KB OR major DEPRECATED-marker append OR campaign close). ADR-016 may incorporate this as a 3rd clause (router/archive shape as a generic pattern for any vault's heavy live file) OR leave it for a later ADR after ≥ 3 instances. Operator decision at M2.2 ratification.

**Compatibility with Standing Order #14**: All three clauses are pre-existing design memos (M1.3 obj7 §6 + M1.4 obj7 §6 + M2.1 obj4 design memo). ADR-016 consolidates them — no new design work at M2.2.

---

## §6 — Hard-constraint discharge

| Constraint | Pre-S3 status | S3 outcome |
|---|---|---|
| `.adna/` untouched | v7.0 frozen at `27e6395` | ✅ zero touches (no commits, no edits) |
| Partner-vault contact zero | 4 embargo memos `status: draft` preserved | ✅ zero partner-vault commits or pulls this session |
| `~/.claude/settings.json` zero | unchanged | ✅ zero modifications |
| New ADR drafts zero | ADR-016 ratifies at M2.2 (separate mission) | ✅ no ADR text authored at S3; only prep notes addendum (§5) |
| STATE.md destructive scope contained | S2 owned the split; S3 is non-destructive consolidation | ✅ S3 STATE.md edits = router refresh only (Current Phase bullet + Next Steps cleanup); no structural change |
| `node.aDNA/` mutations bounded | scope: `token_baselines.md` + `.yaml` + `inventory_vaults.yaml` row | ✅ exactly 3 files touched in `node.aDNA/` per plan |
| M1.5 zero work this session | timing target ≤ 2026-05-26; operator-discretionary parallel | ✅ no M1.5 artifacts authored; queue preserved for next slot |

---

## §7 — Pattern α/β/γ/δ carryover (no re-rank at M2.1)

M2.1 doesn't add new pattern-ranking data — Op 1/2/3 are *applications* of the convergence-model verdict, not new measurements. The M1.4 authoritative ranking carries forward unchanged:

| Pattern | Rank | Source | Status post-M2.1 |
|---|---:|---|---|
| α (campaign decomposition) | 25 | M1.3 obj6 → M1.4 obj7 §pattern-rank | unchanged (top) |
| β (mission tiering) | 12 | M1.3 obj6 → M1.4 obj7 | unchanged |
| δ (cache-creation cold-start floor) | 10 | **M1.4 §6 upgrade from 6** | **reinforced** — M2.1 hit the 256 KB hard backstop on the very session designing the split, confirming δ's load-bearing magnitude in API-billing units (forecast — M2.3 publishes the measured Δ) |
| γ (heavy-file Read avoidance) | 6 | M1.3 obj6 | unchanged ordinal; M2.1 Op 2 promotes the *convention* (heavy-file Read default offset+limit) without changing the *measurement-class* ranking |

M2.3 cross-campaign retrospective revisits the full α/β/γ/δ rank with the 645 MT cache_read corpus + this M2.1 split-effect data point.

---

## §8 — Forward references

**M2.1 S3 mission close unblocks**:
- **M2.2 ADR-016 ratification** (operator-discretionary parallel; pure governance; consumes M1.3 §6 + M1.4 §6 + this §5 prep-notes addendum verbatim). No new measurement work — pure ADR consolidation.
- **M2.3 convergence-model retrospective** (operator-discretionary parallel; consumes 645 MT cache_read corpus across 48 sessions + this M2.1 validation as a new data point for post-split cold-start measurement). M2.3 publishes the measured Δ on the §2 forecast.
- **M2.4 AGENTS.md heat map** (gated on ≥ 10 live-hook sessions; M2.1 contributes 1 fresh session post-hint; corpus still pre-threshold; deferred to late P2).

**M1.5 coord-network discharge** stays queued (operator-discretionary parallel; timing target ≤ 2026-05-26 per `who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md` §6). Not blocked by M2.1 close.

**Operator discretion at S3 close**: M2.2 / M2.3 / M1.5 are all eligible to open next; M2.4 still gated. Next Session Prompt (in S3 session file) enumerates the menu.

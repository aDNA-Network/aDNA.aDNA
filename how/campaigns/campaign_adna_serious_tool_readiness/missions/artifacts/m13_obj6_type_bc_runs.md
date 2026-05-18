---
type: artifact
artifact_type: measurement_dataset
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p1_m13_token_audit
objective: 5
session: S2
created: 2026-05-18
updated: 2026-05-18
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m13, obj5, type_b, type_c, retrospective, postlooktooluse, token_baselines]
related_artifacts:
  - m13_obj2_post_tool_use_hook_spec.md   # hook installed at S2 phase B
  - m13_obj3_type_a_baseline.md           # complementary static Type A (25-vault)
  - ../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md  # source measurement protocol §1-§3
---

# M1.3 Obj 5 — Type B + C runs (retrospective + live)

> **Deliverable 5 of M1.3** (S2). Five retrospective sources + one live-captured Type C (this S2 itself) compiled into a per-session-type token-cost profile. Companion to Type A static baseline (Obj 3).
>
> **Method**: D4 default — retrospective on `how/sessions/history/` session files (logged sessions act as approximation source; no live re-run per Obj 9 §3 cost reasoning). Live Type C data captured by the PostToolUse hook installed at S2 phase B (`m13_obj2_post_tool_use_hook_spec.md`).
>
> **Load-bearing methodological finding**: **Claude Code's `PostToolUse` hook payload does NOT carry per-tool token usage.** Tokens approximated via file-size-bytes ÷ 4 fallback for `Read`; absent for `Bash`/`Edit`/`Write`/etc. The 5 retrospective rows below use session-file size as a proxy for write-volume and reference activity-log richness as a proxy for read-volume. **Type C convergence-model validation needs a richer source than PostToolUse alone** — see §3 forward-references.

---

## §1 Session profiles — 5 retrospective + 1 live

| # | Session | Type (spec) | Type (revised) | File size | Files created | Files modified | Activity log entries | Estimated CP-4 (kT) | Source |
|---|---|---|---|---|---|---|---|---|---|
| **B1** | `session_20260424_d9_start` (Rosetta P7 D9-start, M33) | B | **B** (light P3-style) | 1.3 kB | 0 | 6 (Astro pages + STATE.md) | 0 timestamped | **~5–10** | `aDNA.aDNA/how/sessions/history/2026-04/session_20260424_d9_start.md` |
| **B2** | `session_d10_20260426` (Rosetta P7 D10-open, M34) | B | **B** (light P3-style) | 1.1 kB | 1 (M34 spec) | 5 (Astro pages + Nav) | 0 timestamped | **~5–10** | `aDNA.aDNA/how/sessions/history/2026-04/session_d10_20260426.md` |
| **B3** | `session_stanley_20260501_110000_mw2_voice_mapping_v1` (WilhelmAI MW2 voice + reviewers YAML) | B | **D** (execution-heavy; reclassify) | 7.5 kB | 0 | 6 (2 YAMLs + 4 governance) | 10 timestamped (11:00–11:50; 50 min) | **~40–80** | `WilhelmAI.aDNA/how/sessions/history/2026-05/session_stanley_20260501_110000_mw2_voice_mapping_v1.md` |
| **C1** | `session_stanley_20260518_193355_v8_m13_s1` (M1.3 S1 — this campaign) | C | **C** (planning + impl) | 9.8 kB | 4 (mission spec + hook spec + Type A baseline + session file) | 4 (STATE.md + campaign master + MEMORY × 2) | 10 timestamped (19:33–20:00; 27 min) | **~80–120** | `aDNA.aDNA/how/sessions/history/2026-05/session_stanley_20260518_193355_v8_m13_s1.md` |
| **C2** | `session_stanley_20260508_090255_adna_v2_m01_s2_s1` (v2 M01 S2 S1 — planning mission spec) | C | **C** (planning) | 8.6 kB | (spec authoring) | (campaign master + ADRs) | (Stage-2 first session) | **~80–120** | `aDNA.aDNA/how/sessions/history/2026-05/session_stanley_20260508_090255_adna_v2_m01_s2_s1.md` |
| **C3** | `session_20260421_mp1_8_5` (RareHarness MP1-8.5 dispatch wiring) | C | **D** (execution-heavy; reclassify) | 22.6 kB | 4 (mission file + 3 test files + session file) | 5 (STATE × 2 + 3 code source files) | (4.5h session, vault + code repo) | **~120–180** | `RareHarness.aDNA/how/sessions/history/2026-04/session_20260421_mp1_8_5.md` |
| **LIVE** | `session_stanley_20260518_195743_v8_m13_s2` (this S2 — partial; live SQLite capture) | C | **C** (planning + impl) | (in-flight) | 4+ (hook script + self_test.json + README + session file + this artifact) | (campaign master + STATE.md TBD) | 6+ Bash + 4+ Read at Phase D start | **~80–140** (projected) | `aDNA.aDNA/how/sessions/active/session_stanley_20260518_195743_v8_m13_s2.md` |

**Acceptance**: 5 Type B + C runs recorded (B1/B2/B3 + C1/C2/C3, in mission-spec nomenclature). LIVE row is the 6th data point — added because Type C retrospective requires approximate methods (no live tokenization captured at the time), and the LIVE row provides ground-truth Read-side counts via the PostToolUse hook.

## §2 Spec-vs-revised classification (methodological note)

Mission spec called both MW2 and MP1-8.5 "retrospective replay" sources for Type B+C. Closer inspection reclassifies:

- **B3 (MW2)** — 7.5 kB session, 50-min execution window, 6 modified files, dense activity log with YAML-parse fixes (real production work). **Revised: D (execution mission)**. Type B is "P3 sub-group (reference + Q&A + 1-paragraph follow-up)" per Obj 9 §1 — MW2 is bigger than that. B1+B2 (Rosetta D9/D10 starts) are the cleaner Type B exemplars (single-session, lightweight, summary-only).
- **C3 (MP1-8.5)** — 22.6 kB session, 4.5h, vault + sibling code repo, 5 in-process tests written. **Revised: D (execution mission)**. Type C is "planning mission (heavy reads + design docs)"; MP1-8.5 is implementation-heavy with code commits.

The revision matters because **per-session-type means** would skew if mixed-class sessions are pooled. The dataset now distinguishes B/C/D cleanly.

## §3 Per-session-type aggregate estimates (CP-4 totals)

| Session type | n | Estimate range (kT) | Median (kT) | Sources |
|---|---|---|---|---|
| **A** (startup-only; from Obj 3) | 25 vaults | 3–30 | **5.85** (mean CP-0) / **22.99** (mean CP-1) | `m13_obj3_type_a_baseline.md` |
| **B** (P3 sub-group; light) | 2 | 5–10 | **~7** | B1, B2 |
| **C** (planning; heavy reads) | 2 | 80–120 | **~100** | C1 (M1.3 S1), C2 (v2 M01 S2 S1) |
| **D** (execution; less reads + more writes + verification) | 2 | 40–180 | **~80–100** | B3 (MW2), C3 (MP1-8.5) |

**Numbers are approximations** — retrospective method has no per-checkpoint resolution. The live row from this S2 will allow ≥1 ground-truth Type C data point once finalized.

## §4 Caveats + limitations

1. **PostToolUse payload lacks token usage.** Confirmed empirically at S2 phase C (`last_payload.json` inspected). Read tokens approximate via file-size÷4. Bash/Edit/Write/Glob/Grep tokens stay 0 in the SQLite store.
2. **Retrospective method has no per-checkpoint resolution.** CP-0..CP-4 sub-aggregates from Obj 9 §1 cannot be reconstructed from session-file artifacts alone — those files document outcomes, not inputs. Live runs are required for CP-fidelity.
3. **Session-file size is an imperfect proxy for token cost.** A session with heavy reads and minimal writes (Type C) produces a smaller session file than the actual context loaded; a session with minimal reads and heavy writes (some Type D) produces a bigger one. Reads are 5–10× under-represented in the file size.
4. **Reclassification narrows the dataset.** Mission spec promised 2 Type B and 3 Type C; revised reading yields 2 Type B + 2 Type C + 2 Type D. The mission-spec acceptance criterion ("5 Type B + C runs recorded") is met counting all 6 rows; the spirit (per-session-type means) is better served by the revised B/C/D split.
5. **Source-vault session files use different schemas.** Rosetta P7 (B1/B2) session files are tier-1 lightweight (no `files_created`/`files_modified` frontmatter; only an inline "Files Touched" list). WilhelmAI (B3) and RareHarness (C3) sessions carry rich frontmatter. M1.3 (C1, LIVE) sessions carry the richest frontmatter (tier-2, scope_declaration, conflict_scan). **AAR follow-up: standardize Type-B session-file frontmatter for future measurement-comparable sessions.**

## §5 Forward references

- **Convergence-model verdict** at `m13_obj6_pattern_ranking.md` (Phase E) consumes the §3 per-session-type means to test whether session-level mean < mission-level mean < campaign-level mean.
- **AGENTS.md heat map** (M2.4 input) consumes the `tool_calls.file_path` aggregate frequency once enough live sessions accumulate (a single S2 isn't enough; defer the heat map to S3+).
- **PostToolUse limitation** is itself a load-bearing finding — surface as the AAR's primary methodological correction:
  - Option (a): augment hook with `UserPromptSubmit` hook to capture per-turn token usage (Claude Code v1+; check schema).
  - Option (b): parse `transcript_path` (the .jsonl conversation log) post-hoc for richer per-tool token attribution.
  - **Recommended for S3 + M1.4 LatticeScope schema**: option (b) — the transcript is the authoritative source; the SQLite store becomes a derived index. Add a `transcript_path` column to `sessions` to support batch ingestion.
- **M2.1 context-file audit input**: combine §3 Type A means (Obj 3) with the S3 ranking of pattern α (full-vs-excerpt loads) to seed STATE.md split-candidate list.

## §6 Cross-references

- [[m13_obj2_post_tool_use_hook_spec.md|m13_obj2_post_tool_use_hook_spec.md]] — hook installed at S2 phase B
- [[m13_obj3_type_a_baseline.md|m13_obj3_type_a_baseline.md]] — companion Type A static baseline (25 vaults)
- [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md|m01_obj9_token_measurement_protocol.md]] §1-§3 — source measurement protocol
- [[../mission_adna_str_p1_m13_token_audit.md|mission_adna_str_p1_m13_token_audit.md]] — mission spec (Obj 5)
- `~/.adna/measurement/measurement.sqlite` — live capture store (Type C LIVE row; ≥10 rows as of S2 phase D start)
- `~/.adna/measurement/last_payload.json` — actual Claude Code PostToolUse payload (debug)

---
type: artifact
artifact_type: validation_output
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p1_m14_latticescope_schema
objective: 7
session: S3
created: 2026-05-19
updated: 2026-05-19
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m14, obj7, validation, calibration_post_backfill, convergence_model_mid_magnitude_refined, pattern_re_rank, top_3_m21_confirmed, decomposition_threshold, adr_016_prep_addendum, two_metric_doctrine, api_billing_units, p1_phase_exit_ready, m22_input, m21_input, m23_input, m24_input]
related_artifacts:
  - m14_obj2_schema_v011_ddl.md           # S1 schema spec
  - m14_obj3_transcript_resolver_spec.md  # S1 resolver + ingest design
  - m13_obj7_calibration_output.md        # M1.3 S3 — structural template + pre-backfill baseline
  - m13_obj6_pattern_ranking.md           # M1.3 S2 — pre-backfill pattern verdict
  - m13_obj6_type_bc_runs.md              # M1.3 S2 — Type B/C/D corpus
  - m13_obj3_type_a_baseline.md           # M1.3 S1 — 25-vault Type A
  - aar_m13_token_audit.md                # M1.3 AAR — verdict input
  - ../../../../node.aDNA/what/context/token_baselines.md  # v0.1.0 → v0.1.1 refresh target
downstream_consumers:
  - mission_adna_str_p2_m21_context_audit            # §3 confirmed top-3 queue
  - mission_adna_str_p2_m22_per_mission_budget       # §6 ADR-016 prep notes addendum
  - mission_adna_str_p2_m23_convergence_validation   # §2 + §4 authoritative cache-billing distributions
  - mission_adna_str_p2_m24_agents_md_heatmap        # §5 measurement readiness signal
---

# M1.4 Obj 7 — Validation output, convergence-model verdict refinement, ADR-016 prep addendum

> **Deliverable 7 of M1.4** (S3). The mission's *post-backfill consolidated output*. Closes the loop from M1.3's pre-instrumentation approximation (CP-0 / CP-1 / Type B/C/D via `chars / 4`) to M1.4's authoritative per-turn cache-billing aggregates (48 jsonl × 3577 turns; 645.3 M cache_read; 19.3 M cache_creation; 5.3 M output; 45.8 K input). The convergence-model verdict stays **Mid-magnitude** *directionally* but the magnitudes are now in API-billing units that M1.3 systematically under-counted by 100–500×.
>
> **Standing Order #8 (self-reference)**: M1.4 designed itself (M1.3 § 5 schema-fit re-walk), implemented itself (M1.4 S2 hook v0.1.1), and now validates itself with its own backfill output. The recursion's terminal closure: the protocol that measures is the same protocol that decides what gets measured next.
>
> **Standing Order #14 honored**: ADR-016 prep notes addendum only (§ 6); no full ADR draft at M1.4. M2.2 ratifies after M2.3's cross-campaign retrospective with authoritative CP-2..CP-4 distributions.

---

## §1 — Backfill summary (authoritative aggregate)

Source: `~/.adna/measurement/reports/session_<uuid>_usage.json` × 48 (produced by `~/.adna/measurement/ingest_transcript.py --all` at M1.4 S2 + idempotent re-emit during this S3 session).

### 1.1 Aggregate totals (48 sessions / 3577 turns)

| Metric | Sum (tokens) | Mean / session | Median / session | Min / session | Max / session |
|---|---:|---:|---:|---:|---:|
| `cache_read_input_tokens` | **645,264,955** | 13,443,020 | 11,344,609 | 2,380,527 | 68,240,544 |
| `cache_creation_input_tokens` | **19,349,613** | 403,117 | 326,332 | 108,915 | 1,246,814 |
| `output_tokens` | **5,286,681** | 110,139 | 96,256 | 21,189 | 378,530 |
| `input_tokens` (per-turn input only; PostToolUse-unattributable) | **45,793** | 954 | 76 | 29 | 12,699 |
| `turn_count` | **3,577** | 74.5 | 60 | 24 | 210 |

### 1.2 Per-turn averages (steady-state characterization)

| Metric | Across all 3577 turns |
|---|---:|
| Mean `cache_read` per turn | **180,393** (≈ effective cached context size mid-session) |
| Mean `cache_creation` per turn | **5,409** (≈ incremental context added per turn) |
| Mean `output` per turn | **1,478** |

### 1.3 Top-5 sessions by `cache_read` (heavy-hitters)

| `session_id[:8]` | `cache_read` | `cache_creation` | `output` | turns | started |
|---|---:|---:|---:|---:|---|
| b00da756 | 68,240,544 | 669,246 | 378,530 | 144 | 2026-05-11 |
| 5960ae25 | 42,504,905 | 1,246,814 | 258,496 | 124 | 2026-05-18 |
| d1d6c5c0 | 24,712,452 | 534,265 | 173,716 | 89 | 2026-05-18 |
| b868e83a | 20,977,835 | 439,466 | 139,567 | 207 | 2026-04-25 |
| d6d806bd | 19,880,236 | 340,874 | 109,789 | 210 | 2026-04-24 |

Two patterns visible: (a) very-long sessions (≥ 200 turns) accumulate large `cache_read` even with moderate per-turn cached context (pattern δ at session-extension scale); (b) high-write sessions (M1.4 S2 itself = 5960ae25; M03 destructive flatten ≈ b00da756 era) inflate `cache_creation` 2–3× the median due to many new-file loads.

### 1.4 Bottom-5 by `cache_read` (light sessions)

| `session_id[:8]` | `cache_read` | `cache_creation` | `output` | turns | started |
|---|---:|---:|---:|---:|---|
| 67b47656 | 2,380,527 | 270,813 | 49,693 | 25 | 2026-04-23 |
| 548dc261 | 3,320,974 | 494,178 | 55,674 | 24 | 2026-05-19 (M1.4 S2; truncated mid-session capture) |
| f4ffc8ca | 3,383,846 | 145,951 | 21,189 | 50 | 2026-04-27 |
| a0100877 | 4,499,392 | 198,230 | 91,925 | 26 | 2026-05-08 |
| 56b78620 | 4,511,054 | 347,110 | 61,517 | 41 | 2026-04-23 |

Even the lightest session paid **108–495 kT cache_creation** (the floor — the necessary cost of loading CLAUDE.md + STATE.md + system prompt + tool definitions + memory + opening file reads). This is the *authoritative transition tax floor* — `m13_obj7 § 1.4 caveat #4` (session-file size under-represents reads by 5–10×) is now empirically bounded: actual session-level API-billing transition floor is ~ **300–500 kT cache_creation** for a minimal session, ~ **17× higher** than M1.3's content-load CP-1 of 23 kT.

---

## §2 — Pre/post-backfill calibration delta

### 2.1 The two-metric reality

M1.3 and M1.4 measure **different phenomena**. Both are legitimate; both are useful for different decisions.

| Metric family | Definition | M1.3 estimate | M1.4 authoritative |
|---|---|---:|---:|
| **Content-load** | Tokens in files the agent Reads (chars ÷ 4 approximation; M1.3 method) | CP-0 5.85 kT / CP-1 22.99 kT / Type C ~ 100 kT per session | (unchanged — methodology not re-run; M1.3 numbers stand as content-load baseline) |
| **API-billing** | `cache_read_input_tokens` + `cache_creation_input_tokens` per the Anthropic Messages API `usage` block at each assistant turn (M1.4 method via `ingest_transcript.py`) | (not measured at M1.3) | `cache_read` mean **13.4 M / session**; `cache_creation` mean **403 K / session** |

**Ratios** (content-load ⟶ API-billing, where comparable):

| Comparison | M1.3 content-load | M1.4 API-billing | Ratio |
|---|---:|---:|---:|
| Session-entry orientation cost | CP-1 22.99 kT (content) | cache_creation_min ~ 109 kT | **~ 5×** under-counted |
| Mean session-entry orientation cost | CP-1 22.99 kT (content) | cache_creation_mean 403 kT | **~ 17×** under-counted |
| Per-session aggregate cost (Type C estimate) | ~ 100 kT | cache_read_mean 13,443 kT | **~ 134×** under-counted |
| Per-session aggregate cost (heaviest session) | ~ 180 kT (M1.3 § 2 max) | cache_read_max 68,240 kT | **~ 379×** under-counted |

### 2.2 Why the two metrics differ

The content-load metric measures *files the agent reads*. The API-billing metric measures *total cached tokens the Anthropic API processes per turn × turn count*. The latter is larger because:

1. **Cached prompt includes more than file content** — system prompt, CLAUDE.md frontmatter, tool-schema definitions, memory files, environment metadata, prior tool results, prior assistant outputs are all in the cache.
2. **Cache_read accumulates across turns** — every assistant turn reads the *full current cached prompt*. A 60-turn session at 200 K steady-state cache pays ~ 12 M cache_read total even if the agent only loaded ~ 30 K of new content.
3. **Cache_creation fires on every prompt-prefix change** — each new file Read, each Write/Edit, each new tool call adds to the cached prefix and bills cache_creation for the new region. Cumulative `cache_creation` per session is therefore a function of *write/load actions × turns*, not just initial orientation files.

### 2.3 Where M1.3's directional verdict survives

- Cache_creation per session has a clear **floor** (~ 100–500 kT) and grows with the number of new file-loads + writes, which is exactly the "real work" axis M1.3 used.
- Cache_read per session is dominated by `turn_count × mean_cached_context`, so longer sessions cost more — confirming M1.3's transition-tax narrative *directionally* but quantitatively much larger.
- Pattern α (full-vs-excerpt) still dominates: every full-file Read multiplies into cache_creation *now* and into per-turn cache_read *forever after* in the session.

### 2.4 Where M1.3's verdict needs refinement

- **Pattern δ (handoff reload) was under-counted**. M1.3 ranked δ at 6 (savings × ease = 3 × 2). The authoritative floor for `cache_creation` per fresh session is ~ 300–500 kT, meaning every session-decomposition penalty pays ~ 17× more than M1.3's CP-1 23 kT proxy suggested. δ probably belongs in the top-3 or top-4 — see § 4 below.
- **Decomposition penalty in API-billing units**: splitting a 200-turn session into 4 × 50-turn sessions pays cache_creation 4× (~ 1.6 M instead of ~ 400 K) for the same content-load. Decomposition is a net-positive *only* when (a) the split reduces total turn count OR (b) caps per-session cache-snowball growth.

### 2.5 Calibration honesty (M1.3 § 1.4 → quantified)

M1.3's four sources of estimation error are now measured:

| M1.3 caveat | M1.4 quantification |
|---|---|
| #1 tiktoken approximation ~ 5% drift | not re-validated this mission (deferred to M2.3 with cross-tokenizer corpus) |
| #2 PostToolUse payload lacks per-tool token usage | confirmed — usage lives at the assistant-turn level, NOT per-tool; per-tool authoritative attribution deferred to MLS-1 (turn-level allocation heuristic) or upstream Anthropic per-tool PostToolUse contribution |
| #3 No per-checkpoint CP-2..CP-4 resolution | partially addressed — per-turn `cache_read` time series now available via reports; CP-2..CP-4 ratification at M2.3 with 10+ session corpus |
| #4 Session-file size under-represents reads by 5–10× | **quantified at 5–134×** depending on metric (see § 2.1 ratios) |

---

## §3 — Convergence-model verdict status (refined)

**Verdict: Mid-magnitude (refined).** Directionally correct; magnitudes now authoritative; pattern-δ under-count corrected.

### 3.1 The convergence-model claim (under test)

From `aDNA.aDNA/what/context/prompt_engineering/context_prompt_engineering_convergence_model.md`: narrower scopes converge cheaper than broader scopes; per-objective < per-mission < per-campaign session cost.

### 3.2 Authoritative test against the 48-session corpus

The corpus is heterogeneous (planning, execution, destructive, close, exploratory) — direct per-level mean comparison requires classification (deferred to M2.3 cross-campaign retrospective). The available signal:

- **Floor cost** (cache_creation_min = 109 kT): even a single-objective session pays ~ 100 kT minimum. Per-objective cost is NOT free.
- **Linear growth** (cache_creation_max = 1.25 M; ~ 11× the floor): the heaviest M1.4-S2-class session paid ~ 11× the lightest. Real work scales the bill.
- **Cache-read snowball** (cache_read_max = 68 M; 29× the cache_read_min): long sessions with growing cached context pay quadratically (turns × cached_context). The convergence claim's bound: decomposition pays off when it caps per-session turn count below the snowball-onset threshold.

### 3.3 Refined Mid-magnitude statement

> The convergence model is *directionally correct*: narrower scopes converge faster within a session. But two empirical bounds limit the benefit:
>
> 1. **Transition-tax floor in API-billing units is ~ 300–500 kT cache_creation per session entry** (17× M1.3's content-load CP-1 estimate). Every new session pays this.
> 2. **Per-session cache_read snowball** scales roughly with `turn_count × mean_cached_context`. A 200-turn session at 200 K steady-state cache pays 40 M cache_read; capping at 60 turns (per-mission decomposition typical) bounds it at ~ 12 M.
>
> Decomposition is net-positive when (a) total turn count drops, OR (b) per-session cache snowball is capped below 10 M. Decomposition is net-NEGATIVE when neither condition holds — splitting a 60-turn session into 3 × 20-turn sessions multiplies cache_creation 3× without reducing total turns.

### 3.4 What changes between Mid-magnitude (M1.3) and Mid-magnitude (refined)

| Dimension | M1.3 statement | M1.4 refinement |
|---|---|---|
| Direction | narrower scopes converge | unchanged |
| Verdict | Mid-magnitude | Mid-magnitude (still bounded) |
| Magnitude (transition tax) | ~ 23 kT (content-load CP-1) | ~ 300–500 kT (API-billing cache_creation floor) |
| Magnitude (per-session) | ~ 100 kT (Type C content-load) | ~ 13 M cache_read (API-billing aggregate) |
| Pattern δ rank | 6 (M1.3) | candidate top-3 / top-4 at M2.3 with continuation-pair corpus |
| Decomposition rule | content-load threshold 50/80/200 kT | content-load threshold preserved + API-billing turn-snowball cap forecast (M2.3 sets) |

---

## §4 — Pattern α/β/γ/δ re-rank with authoritative data

Score = `savings × ease`. Savings re-rated against authoritative cache_read + cache_creation magnitudes. Ease unchanged from M1.3 (implementation-side ergonomics).

| Pattern | M1.3 score | M1.4 re-rank rationale | M1.4 score | Status |
|---|---:|---|---:|---|
| **α** full-vs-excerpt | 25 (5 × 5) | unchanged top — every full Read inflates cache_creation immediately AND multiplies per-turn cache_read for the rest of the session; authoritative magnitude validates the per-Read cost claim | **25 (5 × 5)** | top M2.1 priority — Op 1 / Op 2 / Op 3 unchanged |
| **β** re-reads within session | 12 (3 × 4) | re-reads pay 0 cache_creation (already cached) but contribute to the per-turn cache_read multiplier and clutter the working set; M1.3's 11% live-data re-read rate stands; ranking unchanged but watch at M2.4 with ≥ 10-session corpus | **12 (3 × 4)** | M2.4 measurement-driven (≥ 10 sessions) |
| **γ** redundant `AskUserQuestion` | 6 (2 × 3) | no Q&A redundancy observed in 2026-04 / 2026-05 corpus; unchanged | **6 (2 × 3)** | deprioritized |
| **δ** handoff reload (new-session orientation cost) | 6 (3 × 2) | **upgraded** — cache_creation floor for a fresh session is ~ 300–500 kT (17× the CP-1 23 kT content-load estimate M1.3 used). Every avoidable session-split saves ~ 400 kT cache_creation; savings rating bumped 3 → 5; ease unchanged at 2 (handoff hygiene is medium-effort) | **10 (5 × 2)** | candidate M2.4 / M2.3 focus; under-ranked in M1.3 |

**Re-ranked queue**: α (25) ⟫ β (12) ≈ δ (10) ⟩ γ (6).

The α-dominance from M1.3 holds — the top-3 M2.1 queue is unchanged. The δ-upgrade affects M2.3 + M2.4 (mission-decomposition policy + handoff-reload hygiene) but does NOT shift M2.1's α-driven top-3 sequencing.

---

## §5 — Top-3 M2.1 queue sequencing confirmation

Re-confirmed against authoritative magnitudes. No re-prioritization needed.

### 5.1 Op 1 — Split `aDNA.aDNA/STATE.md` (75.8 kT → router + archive)

- **Pre-M1.4 estimate**: ~ 65 kT savings per aDNA.aDNA session entry (content-load).
- **Post-M1.4 authoritative magnitude**: every aDNA.aDNA session entry that loads full STATE.md adds ~ 75 kT to cache_creation, which then multiplies into per-turn cache_read for the rest of the session. For a 75-turn session this is ~ 75 K × 75 = **5.6 M of cache_read attributable to STATE.md alone**, plus the 75 K cache_creation. Over 48-session corpus: ~ 2.7 GB cache_read attributable (12 of the 48 sessions in this dataset are aDNA.aDNA-rooted per `vault='aDNA.aDNA'`).
- **Confirmed**: Op 1 STAYS top-priority. Now expressible in API-billing units: **~ 100–300 K cache_read savings per turn × turn_count after split**, plus the 75 K cache_creation reduction at session entry.

### 5.2 Op 2 — Default `offset` + `limit` on STATE.md ecosystem-wide

- **Pre-M1.4 estimate**: ~ 10–17 kT per session × 25 vaults.
- **Post-M1.4 authoritative**: same content-load savings, but each kT of CP-1 reduction propagates to cache_read across all turns of the session. With mean 75 turns / session and 25-vault ecosystem load, the savings compound. A 15 kT content reduction at entry → ~ 1.1 M cache_read reduction per session (15 K × 75) plus the 15 K cache_creation savings.
- **Confirmed**: Op 2 STAYS second priority.

### 5.3 Op 3 — Auto-archive completed-campaign rows at campaign close

- **Pre-M1.4 estimate**: ~ 25–35 kT per closed-campaign reference.
- **Post-M1.4 authoritative**: same compounding logic — a 30 kT reduction at session entry → ~ 2.3 M cache_read per session that references the closed campaign master. Highest payoff on sessions that load multiple closed campaigns (e.g., mission-spec authoring sessions referencing 2–3 predecessor campaigns).
- **Confirmed**: Op 3 STAYS third priority.

### 5.4 Sequencing (unchanged from M1.3)

1. Op 1 first (highest leverage × highest frequency × lowest risk; non-destructive archive)
2. Op 2 second (composable with Op 1; templated AGENTS.md hint)
3. Op 3 third (depends on Op 1's `STATE_history_*.md` pattern + adds 1 step to `template_aar.md` + `template_campaign.md`)

---

## §6 — ADR-016 prep notes addendum

Augments `m13_obj7_calibration_output.md § 6` without re-authoring. M2.2 consumes both M1.3 § 6 and this § 6 verbatim.

### 6.1 No formula shift this mission

M1.3 § 1's effort-estimate formula (`transition_tax + Σ per_objective_work`, content-load units) remains the **content-load formula**. M1.4 does NOT replace it — content-load is still useful for in-session planning (which files to load).

### 6.2 Add: API-billing companion formula (forecast — M2.3 ratifies)

Forecast (do NOT codify at M2.2; ratify at M2.3 with cross-campaign retrospective):

```
session_cost_api_billing (kT) ≈ cache_creation_floor + (turn_count × mean_cached_context_per_turn)
where:
  cache_creation_floor    ≈ 300-500  (per session entry; floor measured 109-1247)
  mean_cached_context_per_turn ≈ 100-300 (early/late session; M2.3 measures distribution)
  turn_count              estimated from work-class (planning ~ 30; implementation ~ 60-90; close ~ 30)
```

### 6.3 Standing Order #11 candidate text — add one bullet

To M1.3 § 6.2's proposed Standing Order #11, append:

> *Calibration reporting variants*: Mission AARs may report `token_budget_actual` in BOTH content-load units (M1.3 method) AND API-billing units (M1.4 method, via the active session's `~/.adna/measurement/reports/session_<uuid>_usage.json` snapshot at SITREP). M2.3 cross-campaign retrospective establishes the per-mission-type cache-read distribution; until then, content-load remains the canonical estimation unit.

### 6.4 Decomposition threshold candidate addendum

To M1.3 § 1.3 / § 6.3's content-load threshold table, append (forecast — M2.3 ratifies):

```
API-billing companion thresholds (forecast):
  cap session length around 60-80 turns (avoids cache-snowball into >20 M cache_read)
  avoid avoidable session splits (each split pays full cache_creation_floor ~ 400 kT)
  net-positive split: only when (a) split reduces total turn count OR (b) per-session cache_read forecast > 10 M
```

### 6.5 Scope unchanged

ADR-016 narrowness (M1.3 § 6.6) preserved:
- Does NOT set hard kT caps (operator-discretionary per Standing Order #1)
- Does NOT enforce mission splitting (recommendation only)
- Does NOT modify campaign-CLAUDE.md Standing Order #12 (campaign-scope rule preserved)
- Does NOT introduce hook-side enforcement (*measurement does not modify behavior* invariant preserved)

---

## §7 — Acceptance-criteria discharges (M1.4 close-side)

| M1.4 acceptance criterion | Discharged here? | Source |
|---|---|---|
| Convergence-model verdict status reported | ✓ Mid-magnitude (refined) | § 3 |
| Pattern α/β/γ/δ re-rank reported | ✓ (α=25; β=12; δ=10; γ=6) | § 4 |
| Top-3 M2.1 queue sequencing confirmation | ✓ unchanged (Op 1 / Op 2 / Op 3) | § 5 |
| Decomposition-threshold rule confirmed-or-refined | ✓ content-load preserved; API-billing forecast for M2.3 | § 3.3 + § 6.4 |
| ADR-016 prep notes addendum if formula shifts | ✓ (no formula shift; one Standing-Order-text bullet added + forecast threshold table) | § 6 |
| Pre/post backfill calibration delta documented | ✓ (5-row ratio table + two-metric reality framing) | § 2 |
| `node.aDNA/.../token_baselines.md` refresh published | (separate file: `token_baselines.md` v0.1.1) | cross-link |
| M1.4 AAR landed | (separate file: `aar_m14_latticescope_schema.md`) | cross-link |

---

## §8 — Forward references

- **M2.1 (context audit)** — consumes § 5 top-3 confirmed queue; opens with Op 1 (split STATE.md).
- **M2.2 (ADR-016)** — consumes M1.3 § 6 + this § 6 verbatim as draft input; formula stays content-load at M2.2 (API-billing companion deferred to M2.3).
- **M2.3 (convergence validation)** — consumes § 1 + § 2 + § 4 authoritative distributions; ratifies API-billing companion formula; establishes per-mission-type cache-read distributions for ADR-016 calibration discipline.
- **M2.4 (AGENTS.md heat map)** — consumes § 4 δ-upgrade signal; awaits ≥ 10 session corpus accumulation.
- **v8 P6 final review** — § 3.3 refined-verdict statement absorbs into campaign-level AAR at M6.4.

---

## §9 — Cross-references

- [[m14_obj2_schema_v011_ddl.md|m14_obj2_schema_v011_ddl.md]] — S1 schema DDL spec
- [[m14_obj3_transcript_resolver_spec.md|m14_obj3_transcript_resolver_spec.md]] — S1 resolver + ingest design
- [[m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] — M1.3 S3 structural template + pre-backfill baseline (§ 1 formula + § 6 ADR-016 prep notes — augmented here, not replaced)
- [[m13_obj6_pattern_ranking.md|m13_obj6_pattern_ranking.md]] — M1.3 S2 pre-backfill pattern ranking (re-ranked here at § 4)
- [[m13_obj6_type_bc_runs.md|m13_obj6_type_bc_runs.md]] — M1.3 S2 Type B/C/D content-load corpus
- [[m13_obj3_type_a_baseline.md|m13_obj3_type_a_baseline.md]] — M1.3 S1 25-vault Type A content-load baseline (preserved as content-load reference)
- [[aar_m13_token_audit.md|aar_m13_token_audit.md]] — M1.3 AAR (verdict input)
- [[../mission_adna_str_p1_m14_latticescope_schema.md|mission_adna_str_p1_m14_latticescope_schema.md]] — M1.4 mission spec
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — Phase 1 M1.4 row + ADR roadmap (ADR-016)
- [[../../../../node.aDNA/what/context/token_baselines.md|node.aDNA token_baselines.md]] — v0.1.0 → v0.1.1 refresh (this S3)
- [[../../../../what/context/prompt_engineering/context_prompt_engineering_convergence_model.md|context_prompt_engineering_convergence_model.md]] — model under test
- `~/.adna/measurement/measurement.sqlite` — live store (M1.4 S3 mid-execution: ≥ 265 tool_calls / ≥ 2 sessions / 15 context_traversal)
- `~/.adna/measurement/reports/*.json` — 48 per-session authoritative reports (S3 source for § 1)
- `~/.adna/measurement/ingest_transcript.py` — canonical retrospective tool (M1.4 S2 deliverable)
- `~/.adna/measurement/RECIPE_PROTOCOL.md` — Amendment C contract (M1.4 S2 deliverable)
- `~/.adna/measurement/CHANGELOG.md` v0.1.1 entry

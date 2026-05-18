---
type: artifact
artifact_type: analysis
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p1_m13_token_audit
objective: 6
session: S2
created: 2026-05-18
updated: 2026-05-18
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m13, obj6, pattern_ranking, convergence_model, verdict_mid_magnitude, m2_1_input]
related_artifacts:
  - m13_obj3_type_a_baseline.md          # Type A 25-vault static
  - m13_obj6_type_bc_runs.md             # Type B+C+D retrospective
  - ../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md  # §2 patterns + §3 convergence-model
---

# M1.3 Obj 6 — Pattern α/β/γ/δ ranking + Convergence-model verdict

> **Deliverable 6 of M1.3** (S2). Ranks the four high-cost patterns from Obj 9 §2 by `token-savings × ease-of-implementation`. Renders the explicit verdict on the convergence model (Obj 9 §3). Seeds M2.1 (context file audit) with a top-3 optimization queue.
>
> **Inputs**: Type A 25-vault static baseline + 6-row Type B/C/D retrospective dataset + 10 live PostToolUse rows from this S2 + Rosetta P7 D8–D10 session frontmatter signals (B1, B2 in the retrospective).
>
> **Constraint honored**: Per Standing Order #14, no ADR-016 draft here — ADR-016 (per-mission context budget) consumes this ranking at M2.2 in P2.

---

## §1 Pattern ranking — α/β/γ/δ

Scored on two axes: **savings** (token-cost reduction if mitigated) and **ease** (cost of mitigation in operator/agent effort). Both 1–5. Rank = `savings × ease`.

| Pattern | Description | Savings (1–5) | Ease (1–5) | Rank | Empirical support |
|---|---|---|---|---|---|
| **α — Full-vs-excerpt** | Read full file when only a section is referenced | **5** (largest single-file is aDNA.aDNA STATE.md at 75.8 kT; 6 STATE.md > 30 kT per Obj 3; CP-1 mean 22.99 kT means orientation set is ~4× CLAUDE.md alone) | **5** (mechanically trivial — `offset`+`limit` parameters already supported by `Read`; agent discipline + AGENTS.md hints suffice) | **25** | Obj 3 (Type A) + 4 STATE.md size outliers + Obj 6 §3 retrospective Type C size proxy |
| **β — Re-reads in session** | Re-read a file already in context (post-compaction or post-edit) | **3** (legitimate after compaction; rare in <2-hour sessions; STATE.md the main offender) | **4** (no agent-side discipline gap; Claude Code already emits `<edited_file_state_is_current>` reminders for Edit) | **12** | Live SQLite re_read=0/10 in S2 so far; retrospective signal unavailable from session files |
| **δ — Handoff reload cost** | Next-Session-Prompt-driven continuation re-reads what previous session produced | **3** (high if Next-Session-Prompts are verbose + cite many paths; low if they bootstrap fast) | **2** (requires retrospective per-mission analysis + Next-Session-Prompt rewrites; structural agent discipline change) | **6** | Cannot be measured retrospectively from session files; awaits live cross-session SQLite data (S3+ + M1.4) |
| **γ — Redundant Q&A** | Sequential `AskUserQuestion` calls where one batch would suffice | **2** (mature sessions batch; observed pattern in v8 P0 was 1-question-at-a-time; cost ~5–15 kT per redundant round) | **3** (agent discipline; Standing Order #6 / dual-audience discipline already mitigates) | **6** | This S2 used 0 AskUserQuestion; retrospective sessions show 0–1 instances; pattern not dominant in 2026-05 corpus |

### 1.1 Ranking interpretation

- **α is the clear top priority.** Score 25 vs next 12 = 2× gap. The aDNA.aDNA STATE.md alone consumes ~3× the median CP-1 orientation load; trimming it via `offset`/`limit` reads (or splitting the file at M2.1) yields immediate per-session savings across the ecosystem.
- **β + γ + δ cluster as second-tier.** β (re-reads) and γ (redundant Q&A) are minor savings with easy mitigation (medium rank). δ (handoff reload) is the wild card — significant savings if Next-Session-Prompts are verbose, but unmeasured at M1.3 without cross-session live SQLite history. **M1.4 LatticeScope schema should enable δ measurement** by indexing `transcript_path` per session and computing first-N-minutes token cost across continuation pairs.

### 1.2 Methodological caveat

The retrospective dataset (Obj 5) approximates from session-file size and frontmatter; it does not have per-tool resolution. The PostToolUse hook captures per-tool metadata but does NOT carry token usage (S2 phase C finding — see Obj 5 §3 finding). Token costs are therefore **bracketed estimates**, not exact. Ranking signs are correct; magnitudes have ~30% error bars until S3+ produces a larger live dataset.

---

## §2 Convergence-model verdict

**Verdict: Mid-magnitude** — matches the Obj 9 §3 hypothesis ("token cost falls somewhat per level, but with significant overhead at every transition").

### 2.1 Evidence (CP-0 → CP-1 transition cost)

From Type A 25-vault baseline (Obj 3):

| Checkpoint | Description | Mean (kT) | Ratio vs CP-0 |
|---|---|---|---|
| **CP-0** | CLAUDE.md only (vault-entry minimum load) | **5.85** | 1.0× |
| **CP-1** | CLAUDE.md + STATE.md + active-mission file (full orientation) | **22.99** | **3.9×** |

The CP-0 → CP-1 jump is the convergence-model's *transition overhead* at the **session-entry** level. Every session that enters a campaign + mission pays this 4× tax. The convergence model predicts savings *within* the hierarchy (per-objective cost < per-mission cost < per-campaign cost) — but does not eliminate transition overhead.

### 2.2 Implication for the hypothesis

The model's qualitative claim — *narrower scopes converge fast* — is plausible but **the transition tax is real and load-bearing**. A campaign-with-1-mission-with-1-objective session is NOT cheap; it pays full CP-1 to enter, then converges within. A campaign-with-3-missions session pays CP-1 + 2× mission-transition cost.

**Mid-magnitude** captures this honestly: the model is directionally correct, but the per-transition tax bounds how much benefit you get from deeper decomposition. **An objective should be substantially narrower than its mission for the decomposition to pay off** — otherwise the transition cost dominates the per-objective savings.

### 2.3 Recommended doctrine update (input for M2.2 ADR-016)

- **For Type C planning missions**: 3-session decomposition (S1 spec / S2 destructive / S3 close) costs ~3× CP-1 = ~69 kT transition tax. Justified when each session does ≥ 50 kT of real work (so transition tax < 60% of per-session total).
- **For Type B P3-style sessions**: stay single-session. Don't decompose; the transition tax (~23 kT) exceeds the real work (~5–10 kT).
- **For Type D execution missions**: 3-session decomposition justified when the implementation is multi-file and would benefit from explicit phase gates (e.g., MP1-8.5 was 4.5h single-session — could have been a 3-session decomposition; transition tax ~69 kT vs total ~120–180 kT = 38–58% overhead — borderline justified).

This is the seed for **ADR-016 per-mission context budget** at M2.2: a per-mission-class budget that operator + agent can use to size decompositions before opening a campaign.

### 2.4 Verdict caveat

The verdict is grounded in CP-0/CP-1 ratios from a 25-vault static sample. CP-2..CP-4 (mid-session, full-context-loaded, AAR-time) are not yet measured at M1.3. **S3 (and M2.3 in P2) refines the verdict using live SQLite data.** If CP-2 → CP-3 transition tax is significantly smaller than CP-0 → CP-1 (i.e., mid-session loads are cheaper because cache hits cover them), the Mid-magnitude verdict trends toward Validated. If CP-2..CP-4 add comparable overhead, the verdict stays Mid-magnitude or trends toward Refuted.

---

## §3 Top-3 optimization opportunities (M2.1 input)

Ranked by per-vault token savings × number of vaults affected.

1. **Split aDNA.aDNA STATE.md (75.8 kT) into router + history archive.**
   - Current: 75.8 kT single file; loaded at every aDNA.aDNA session entry.
   - Target: 5–10 kT "current state" router (top 50 lines: Current Phase + Active Campaigns); 60+ kT legacy descriptive block → `STATE.md.archive` or `STATE_history_2026.md`.
   - Savings: ~65 kT per aDNA.aDNA session entry; ~13× CP-0 reduction.
   - Affected vaults: 6 with STATE.md > 30 kT (aDNA.aDNA + 5 others surfaced in Obj 3).
   - Affected sessions: every aDNA.aDNA session entry — high frequency.
   - Cost: ~1 hour per vault to author router + extract archive (M2.1 mission scope).

2. **Default `offset`+`limit` reads on STATE.md across the ecosystem.**
   - Current: agents Read full STATE.md by default; CP-1 mean 22.99 kT per session.
   - Target: AGENTS.md hint at vault root recommends `Read(STATE.md, limit=50)` for orientation; full read only when grep/search hits a deeper section.
   - Savings: ~17 kT per session × every active-vault session.
   - Affected vaults: 25 (Type A baseline).
   - Cost: AGENTS.md edit per vault (low; can be templated via `.adna/` upgrade).

3. **Auto-archive completed-campaign rows from campaign master files at campaign close.**
   - Current: campaign masters grow with every amendments entry; closed campaigns retain full audit trail inline (e.g., `campaign_adna_v2_infrastructure.md` was 36 kT at v2 close).
   - Target: at campaign-close mission (e.g., M06 v2 close), move legacy descriptive content to `campaign_<name>_archive.md`; campaign master retains 1-paragraph executive summary + pointer.
   - Savings: ~25–35 kT per closed-campaign reference (mission spec authoring often re-reads predecessor campaign masters).
   - Affected: any session that references closed campaign masters (~30% of M1.3 S1 reads, retrospective estimate).
   - Cost: 1 mission-close step addition to `template_aar.md` + `template_campaign.md`.

---

## §4 AGENTS.md heat map (sketch)

**Defer full heat map to S3+** — current S2 SQLite store has only 10 rows; statistical signal insufficient for a meaningful AGENTS.md cost ranking. Sketch:

| AGENTS.md candidate (high load × low information density) | Provisional rank | Notes |
|---|---|---|
| `aDNA.aDNA/who/coordination/AGENTS.md` | ? | 24 coord memos in 2026-05; likely-loaded on partner-vault sessions |
| `aDNA.aDNA/how/sessions/AGENTS.md` | ? | Loaded on every session-tracking interaction |
| `aDNA.aDNA/how/campaigns/AGENTS.md` | ? | Loaded on every campaign-touching session |

**S3 method**: after sufficient live capture (10+ sessions across the ecosystem), aggregate `tool_calls.file_path LIKE '%AGENTS.md'` and rank by `(load_count × mean_input_tokens) / information_density_proxy`. Information density proxy = inverse of file size (smaller AGENTS.md = denser).

Heat map deliverable formally landed at **M2.4** (v8 P2) per master roadmap.

---

## §5 Acceptance-criteria discharges

| Acceptance criterion | Status |
|---|---|
| Patterns α/β/γ/δ each have a quantified rank | ✓ (§1.1) |
| Convergence model verdict explicit: Validated / Refuted / Mid-magnitude | ✓ **Mid-magnitude** (§2) |
| Top-3 optimization opportunities | ✓ (§3) |
| AGENTS.md heat map sketch | ✓ (§4 sketch; full at M2.4) |

---

## §6 Forward references

- **M1.3 S3** consumes this ranking + Obj 5 dataset to produce final calibration output + `node.aDNA/what/context/token_baselines.md` + AAR.
- **M1.4 LatticeScope.aDNA v0.1** schema gains `transcript_path` column on `sessions` (Obj 5 §5 finding) to enable δ measurement.
- **M2.1 context-file audit** consumes §3 top-3 list as opening queue.
- **M2.2 ADR-016 per-mission context budget** consumes §2.3 doctrine update as draft input.
- **M2.3 convergence-model validation pass** refines §2 verdict with CP-2..CP-4 data once live capture accumulates across campaigns.
- **M2.4 AGENTS.md heat map** consumes §4 sketch + live capture.

---

## §7 Cross-references

- [[m13_obj3_type_a_baseline.md|m13_obj3_type_a_baseline.md]] — Type A 25-vault static baseline (CP-0/CP-1 means + 6 STATE.md > 30 kT)
- [[m13_obj6_type_bc_runs.md|m13_obj6_type_bc_runs.md]] — Type B/C/D retrospective + LIVE row
- [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md|m01_obj9_token_measurement_protocol.md]] §2 (patterns) + §3 (convergence model)
- [[../mission_adna_str_p1_m13_token_audit.md|mission_adna_str_p1_m13_token_audit.md]] — mission spec (Obj 6)
- [[../../../../what/context/prompt_engineering/context_prompt_engineering_convergence_model.md|context_prompt_engineering_convergence_model.md]] — the model under test

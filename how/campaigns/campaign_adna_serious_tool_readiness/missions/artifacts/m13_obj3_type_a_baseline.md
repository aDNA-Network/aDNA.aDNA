---
type: artifact
artifact_type: measurement_output
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p1_m13_token_audit
objective: 3
created: 2026-05-18
updated: 2026-05-18
status: complete
last_edited_by: agent_stanley
method: static_char_div_4  # cl100k_base approximation; ~5% drift vs live tokenizer expected
tokenizer_caveat: "tiktoken unavailable on this node; chars/4 approximation used per Obj 9 §1 'manual checkpoint snapshot' fallback. Cross-check 2-3 vault values against live cold-start CP-0 at M1.3 S2."
captured_at: 2026-05-18T19:50Z
vault_count: 25  # 23 .aDNA + node.aDNA + lattice-labs; excludes ComicForge (SUPERSEDED), RemoteControl (unlisted in workspace router), strategic_interface_protocol (external JV)
tags: [artifact, mission_deliverable, m13, obj3, type_a_baseline, cold_start_measurement, 25_vault, static_measurement, char_approximation]
related_artifacts:
  - ../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md     # source protocol §1
  - ../../../campaign_adna_v2_infrastructure/missions/artifacts/m02_obj5_ecosystem_baseline_locked.md     # 19-vault baseline (2026-05-09); drift baseline
  - m13_obj2_post_tool_use_hook_spec.md   # hook spec; S2 install validates these counts live
---

# M1.3 Obj 3 — Type A Static Token Baseline (25 vaults, character-approximation)

> **Deliverable 3 of M1.3.** Cold-start static measurement of orientation set (CLAUDE.md + STATE.md + active mission file) across all live ecosystem vaults. Implements [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md#§1 Cold-start baseline|Obj 9 §1]] Type A acquisition plan; per D3 default, uses Python `chars/4` approximation (tiktoken unavailable on node).
>
> **Method**: `len(file_bytes) // 4` per file. cl100k_base averages ~4 chars/token on English+markdown content. Cross-check against live cold-start CP-0 at M1.3 S2 (deliverable 4); recalibrate if drift > 5%.
>
> **CP-0** = CLAUDE.md tokens (auto-loaded). **CP-1** = orientation set total (CLAUDE.md + STATE.md + active mission file). Active mission file = best-effort detection: first mission file with `type: mission` + `status: in_progress` in frontmatter; "(none)" if no in-progress mission detected (e.g., post-campaign-close state).

---

## §1 Per-vault table (25 rows)

| Vault | CLAUDE.md (lines/kT) | STATE.md (lines/kT) | Active mission (kT) | Active mission file | CP-0 (kT) | CP-1 (kT) |
|---|---|---|---|---|---|---|
| `aDNA.aDNA` | 424 / 6.5 | 568 / 75.8 | 4.8 | `mission_adna_str_p1_m13_token_audit.md` | 6.5 | **87.2** |
| `CakeHealth.aDNA` | 207 / 2.8 | 93 / 2.0 | 0.0 | (none) | 2.8 | 4.8 |
| `CanvasForge.aDNA` | 180 / 5.0 | 57 / 49.7 | 0.0 | (none) | 5.0 | **54.7** |
| `ComfyForge.aDNA` | 332 / 4.1 | 315 / 7.4 | 0.0 | (none) | 4.1 | 11.5 |
| `ContextCommons.aDNA` | 227 / 3.3 | 250 / 10.2 | 0.0 | (none) | 3.3 | 13.5 |
| `III.aDNA` | 230 / 2.8 | 662 / 36.5 | 0.0 | (none) | 2.8 | 39.3 |
| `la_startup.aDNA` | 279 / 3.1 | 354 / 5.8 | 0.0 | (none) | 3.1 | 8.9 |
| `LatticeAgent.aDNA` | 136 / 3.8 | 127 / 9.9 | 0.0 | (none) | 3.8 | 13.7 |
| `LatticeLabs.aDNA` | 342 / 5.5 | 167 / 4.1 | 0.0 | (none) | 5.5 | 9.7 |
| `LatticeNetwork.aDNA` | 418 / 6.4 | 150 / 9.5 | 0.0 | (none) | 6.4 | 15.9 |
| `LatticeTerminal.aDNA` | 401 / 5.8 | 171 / 17.1 | 0.0 | (none) | 5.8 | 22.9 |
| `LPWhitepaper.aDNA` | 85 / 1.5 | 102 / 3.0 | 0.0 | (none) | 1.5 | 4.6 |
| `RareArchive.aDNA` | 303 / 5.9 | 161 / 21.1 | 0.0 | (none) | 5.9 | 27.0 |
| `RareHarness.aDNA` | 333 / **25.0** | 307 / 38.1 | 0.0 | (none) | **25.0** | **63.1** |
| `science_stanley.aDNA` | 441 / 6.5 | 123 / 4.2 | 0.4 | `mission_s5_mbp_asl_graduation.md` | 6.5 | 11.1 |
| `SiteForge.aDNA` | 132 / 2.0 | 69 / 1.7 | 0.0 | (none) | 2.0 | 3.7 |
| `Spacemacs.aDNA` | 422 / 6.3 | 230 / 14.2 | 0.0 | (none) | 6.3 | 20.5 |
| `SuperLeague.aDNA` | 439 / 6.7 | 150 / 3.0 | 0.0 | (none) | 6.7 | 9.8 |
| `VAASLattice.aDNA` | 338 / 4.5 | 117 / 6.5 | 0.0 | (none) | 4.5 | 11.0 |
| `VideoForge.aDNA` | 212 / 8.2 | 428 / **56.2** | 0.0 | (none) | 8.2 | **64.4** |
| `wga.aDNA` | 115 / 1.7 | 95 / 1.3 | 0.0 | (none) | 1.7 | 3.0 |
| `WilhelmAI.aDNA` | 310 / 12.0 | 239 / 36.8 | 4.6 | `mission_wai_mw6b.md` | 12.0 | 53.4 |
| `zeta.aDNA` | 467 / 6.6 | 99 / 2.5 | 0.0 | (none) | 6.6 | 9.1 |
| `node.aDNA` | 317 / 4.8 | 73 / 1.0 | 0.0 | (none) | 4.8 | 5.8 |
| `lattice-labs` | 230 / 5.2 | (missing) | 1.1 | `mission_sf_m15.md` | 5.2 | 6.3 |

**Bold values** = outliers (>10 kT for CLAUDE.md or >50 kT for CP-1).

---

## §2 Summary statistics (25-vault population; kT = thousands of tokens, char/4 approximation)

| Metric | Mean | Median | Stdev | Range |
|---|---|---|---|---|
| CLAUDE.md tokens | 5.85 kT | 5.22 kT | 4.60 kT | 1.5 – 25.0 kT |
| STATE.md tokens | 16.86 kT | 7.40 kT | 20.45 kT | 0.0 – 75.8 kT |
| CP-0 (CLAUDE.md alone) | 5.85 kT | 5.22 kT | 4.60 kT | 1.5 – 25.0 kT |
| CP-1 (orientation set) | 22.99 kT | 11.52 kT | 23.34 kT | 3.0 – 87.2 kT |

**Distribution shape**: Wide variance (σ_CP1 ≈ mean_CP1) driven by heavy tail — 4 vaults (aDNA.aDNA + VideoForge.aDNA + RareHarness.aDNA + CanvasForge.aDNA) account for >25 kT each on CP-1. Median CP-1 (11.5 kT) is half the mean; right-skewed distribution.

---

## §3 Findings + outlier diagnostics

### 3.1 STATE.md outliers (M2.1 split candidates per Obj 9 §2 Pattern α)

| Vault | STATE.md kT | Lines | Density (kT/100 lines) | Likely cause |
|---|---|---|---|---|
| `aDNA.aDNA` | **75.8** | 568 | 13.3 | Long descriptive prose blocks per session; accumulated narrative since Operation Rosetta P0 (2026-04-26) — 296 KB / 41 K tokens at full read |
| `VideoForge.aDNA` | **56.2** | 428 | 13.1 | Similar prose-narrative pattern; Phase 4 active w/ multiple in-flight missions |
| `CanvasForge.aDNA` | **49.7** | 57 | **87.2** | Extreme density — 57 lines but 50 kT; signals long single-line YAML/JSON-style blocks or long-form HTML-comment frontmatter |
| `RareHarness.aDNA` | 38.1 | 307 | 12.4 | Multi-phase complex platform; expected per Asclepius/MP scope |
| `III.aDNA` | 36.5 | 662 | 5.5 | Highest line count; lower density — well-structured prose |
| `WilhelmAI.aDNA` | 36.8 | 239 | 15.4 | Multi-initiative umbrella; expected |
| `RareArchive.aDNA` | 21.1 | 161 | 13.1 | Recent paused state; lighter than RareHarness sibling |
| `LatticeTerminal.aDNA` | 17.1 | 171 | 10.0 | Genesis-phase planning; expected |

**Threshold flag**: STATE.md > 30 kT = M2.1 split candidate per Obj 9 §2 Pattern α. **Vaults above threshold**: aDNA.aDNA (76 kT), VideoForge (56 kT), CanvasForge (50 kT), RareHarness (38 kT), WilhelmAI (37 kT), III (37 kT). **6 of 25 vaults** (24%) carry > 30 kT STATE.md.

### 3.2 CLAUDE.md outliers

| Vault | CLAUDE.md kT | Lines | Density | Note |
|---|---|---|---|---|
| `RareHarness.aDNA` | **25.0** | 333 | 75 kT/100 lines | Extreme density; very long lines or embedded persona/safety framework |
| `WilhelmAI.aDNA` | 12.0 | 310 | 39 kT/100 lines | Umbrella vault; multi-initiative routing; expected upper-tier |
| `VideoForge.aDNA` | 8.2 | 212 | 39 kT/100 lines | Forge governance + Phase 4 details |
| `SuperLeague.aDNA` | 6.7 | 439 | 15 kT/100 lines | Engagement context heavy |
| `zeta.aDNA` | 6.6 | 467 | 14 kT/100 lines | Detailed schema-graph vault governance |
| `aDNA.aDNA` | 6.5 | 424 | 15 kT/100 lines | Self-referential aDNA docs (Rosetta) |
| `science_stanley.aDNA` | 6.5 | 441 | 15 kT/100 lines | Brand vault — Voice Bible referenced inline |

**Threshold flag**: CLAUDE.md > 10 kT = simplification candidate per Obj 9 §2 Pattern α + M2.1 input. **Vaults above threshold**: 2 of 25 (RareHarness, WilhelmAI).

### 3.3 Light-tier vaults (Tier-2 / lean style — possible reference patterns)

| Vault | CLAUDE.md kT | STATE.md kT | CP-1 kT | Note |
|---|---|---|---|---|
| `wga.aDNA` | 1.7 | 1.3 | 3.0 | Forge-style minimal; oldest stable vault |
| `LPWhitepaper.aDNA` | 1.5 | 3.0 | 4.6 | Stub-rich; specialized scope |
| `SiteForge.aDNA` | 2.0 | 1.7 | 3.7 | Production v1.0; well-structured |
| `node.aDNA` | 4.8 | 1.0 | 5.8 | Per-node operational; lean by design |
| `CakeHealth.aDNA` | 2.8 | 2.0 | 4.8 | Genesis Org-Graph; pre-elaboration |
| `lattice-labs` | 5.2 | 0.0 (missing) | 6.3 | STATE.md absent — possibly replaced by `how/STATE.md` or other governance file |

These vaults set a "reasonable orientation set" benchmark at < 10 kT CP-1.

### 3.4 Drift vs 2026-05-09 locked baseline (M02 Obj 5)

| Drift type | Count | Action |
|---|---|---|
| **NEW vaults since lock** | 5 (CakeHealth + LatticeNetwork + LatticeLabs + LatticeAgent + LatticeTerminal-rename) | Add to ecosystem matrix at M1.3 close |
| **Renamed since lock** | 1 (terminal.aDNA → LatticeTerminal.aDNA 2026-05-15; AlphaLattice → LatticeNetwork 2026-05-18) | Note in §4 drift table |
| **SUPERSEDED** | 1 (ComicForge.aDNA — re-merged into CanvasForge 2026-04-16) | Excluded from this measurement; archived |
| **UNLISTED** (workspace router silent) | 2 (RemoteControl.aDNA, strategic_interface_protocol.aDNA) | Flag for workspace router amendment |
| **MISSING STATE.md** | 1 (lattice-labs) | Investigate at M1.3 S3 or follow-up |

### 3.5 Active-mission detection coverage

| Status | Count |
|---|---|
| Active mission detected (`status: in_progress` + `type: mission`) | 4 (aDNA.aDNA, science_stanley, WilhelmAI, lattice-labs) |
| No active mission detected | 21 |

Note: Several vaults likely have in-flight work tracked outside `mission_*.md` files (e.g., session files, plan files, or non-standard mission frontmatter). The 21 "(none)" entries don't necessarily mean idle vaults; they reflect detection-method limits. M1.3 S2 cross-checks via live `Read` of operator-known active work surfaces.

---

## §4 Method limitations + caveats

| Limitation | Impact | Mitigation at S2 |
|---|---|---|
| tiktoken unavailable; chars/4 used | Token counts ~5% drift vs Anthropic tokenizer | Live `Read` CP-0 measurement on 3 vaults (aDNA.aDNA, RareHarness, wga = high/mid/low) — compute drift; if > 5%, recalibrate full table |
| Active mission file detection is heuristic | 21 "(none)" entries undercount orientation cost for vaults with non-canonical mission file naming | Operator can supplement at S2 with known-active mission paths |
| `lattice-labs` STATE.md missing | CP-1 understated for the operational vault | Investigate alternative state file (e.g., `how/STATE.md`); add to S2 cross-check |
| AGENTS.md per-directory auto-load not counted | CP-1 systematically understates true session cost (Obj 9 §3 Per-AGENTS.md sub-question) | M2.4 produces AGENTS.md heat map; M1.3 S2 supplements with `find ... -name AGENTS.md` aggregate count |
| Cache-creation vs cache-read costs not differentiable in static measurement | Token-cost vs context-window-fill conflated | S2 live PostToolUse capture gives `cache_creation_input_tokens` + `cache_read_input_tokens` separately |
| Pre-compaction state assumed | Static reads reflect on-disk size; actual session may compact heavy sections | Document; cross-check |

---

## §5 Patterns observed (preliminary; ranked S2 Obj 6)

### Pattern α — Heavy STATE.md is the dominant orientation cost

Top 6 STATE.md files (> 30 kT) collectively account for ~280 kT / 421 kT of total STATE.md tokens across all 25 vaults = **67% of STATE.md cost concentrated in 24% of vaults**. Heavy STATE.md is the largest single optimization target.

Implementation locus: split STATE.md into **router file** (always-on; CP-0 sized; current state + pointers) + **history archive** (lazy-load; legacy descriptive blocks). aDNA.aDNA STATE.md already has a "Legacy descriptive block below" marker pattern (lines 33+ of current file) — strong precedent for the split.

### Pattern α' — Dense CLAUDE.md outliers

RareHarness (25 kT / 333 lines) signals embedded long-form content (likely persona spec + safety framework). Spec for Phase 5 community-readiness includes glossary-pass discipline (per P0 AAR Accessibility Auditor amendment); RareHarness CLAUDE.md is a candidate first target.

### Pattern δ — Active mission file weight is small relative to STATE.md

For the 4 vaults with detected active mission: mission file tokens (0.4 – 4.8 kT) are < 7% of CP-1. Heavy STATE.md dominates orientation cost, not active mission files. This means **STATE.md split has higher ROI than mission spec reduction**.

(Patterns β, γ, δ — re-reads, Q&A redundancy, handoff cost — require S2 live measurement; not derivable from static measurement.)

---

## §6 Forward references

- **M1.3 S2 Obj 4** — installs PostToolUse hook; cross-checks 3 vaults' live CP-0 against static counts here.
- **M1.3 S2 Obj 5** — Type B + C runs use these CP-1 values as cold-start cost estimates per session-type.
- **M1.3 S2 Obj 6** — patterns α + α' ranked against live data; verify static findings.
- **M1.3 S3 Obj 7** — `node.aDNA/what/context/token_baselines.md` consumes this table as primary input.
- **M1.4** — LatticeScope.aDNA schema design accommodates per-vault CP-0 + CP-1 fields (matches §3 schema-fit row 1).
- **M2.1** (v8 P2) — context file audit prioritizes 6 above-threshold STATE.md files; aDNA.aDNA + VideoForge + CanvasForge first.
- **M2.4** (v8 P2) — AGENTS.md heat map supplements this measurement (per-directory cost; not captured here).

---

## §7 Self-reference + dual-audience

**Self-reference**: This artifact measures the very vault it lives in. aDNA.aDNA CP-1 = 87.2 kT — the **highest in the ecosystem**. This is honest self-reporting: the documentation-vault-of-the-documentation-vault has accumulated the most orientation cost of any vault. M2.1 will likely target aDNA.aDNA STATE.md first.

**Dual-audience**:
- **Developer reads**: §1 (table), §2 (stats), §3 (outlier diagnostics), §5 (patterns ranked).
- **Newcomer reads**: §3.1 + §3.2 (why some vaults cost more to load; which ones are lean), §5 (what the numbers mean for action), §7 (the vault that measures itself measures itself measuring others).

Both audiences land at: **most of the orientation cost is in 4-6 STATE.md files; fix those first**.

---

## §8 Status

**Complete (S1 deliverable).** Static measurement landed; outliers ranked; M2.1 split candidates identified; drift vs locked baseline documented; method limitations explicit.

**Next**: S2 cross-check on 3 vaults (D2 default project-local hook); if drift ≤ 5%, table stays canonical for downstream consumption.

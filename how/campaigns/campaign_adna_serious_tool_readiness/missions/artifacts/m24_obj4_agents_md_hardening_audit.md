---
type: mission_artifact
mission: mission_adna_str_p2_m24_agents_md_heatmap
campaign: campaign_adna_serious_tool_readiness
session: session_stanley_20260520T214915Z_v8_m24_s2
artifact_kind: agents_md_hardening_audit
objective: 4
created: 2026-05-20
updated: 2026-05-20
last_edited_by: agent_stanley
status: complete
scope: audit_only   # D5=B Rosetta-default; bulk-edit deferred to M2.4.5 OR M3.1 absorption slot
inventory:
  active_agents_md: 44   # corrected from spec's N=40 at S1 Obj 2 §5; excludes 8 in what/docs/examples/adna-projects/*/
  touched_in_corpus: 6   # 13.6% coverage; 0% aggregate re-read rate (S1 Obj 2 §3)
  canonical: 8
  domain_ok: 13
  procedural: 22
  stale: 1
  missing_invariant: 0
verdict: discoverability_hardening_required   # NOT waste-prevention (S1 Obj 2 load-bearing finding); routing layer under-loaded; downstream content saturates re-read at 40-67%
target_dispatch: M2_4_5_or_M3_1   # operator-decides at M2.4 close
tags: [artifact, m24, obj4, agents_md_audit, 5_criterion_rubric, 44_row_inventory, 7_item_invariants_spec, top_12_priority_list, audit_only_d5_b, discoverability_hardening, p2_exit_gate_4th_brick]
---

# M2.4 Obj 4 — AGENTS.md Per-Directory Hardening Audit (Audit-Only)

> **Verdict (audit-only per D5=B Rosetta-default)**: 44 active AGENTS.md files scored. 8 canonical (18%) / 13 domain-OK (30%) / 22 procedural (50%) / 1 stale (2%) / 0 missing-invariant. The routing layer is **under-loaded** in the corpus (S1 Obj 2 §3 load-bearing finding: 86% never read; touched files 0% re-read), so hardening focuses on **discoverability** — making AGENTS.md the first-stop entry that pre-routes agents to the right deep file. Top-12 priority list ratified from S1 Obj 2 §5 Q4c subtree-frequency proxy. Bulk-edit dispatched to M2.4.5 OR M3.1 absorption slot — operator decides at M2.4 close.

## §1 — Method

**5-criterion rubric** (5 verdict labels per mission spec §Objective 4; mapped from a 6-axis 0-9 numeric score derived from a structural scan of all 44 AGENTS.md files):

| Verdict | Score band | Description |
|---|---|---|
| **canonical** | 8-9 | All 6 axes satisfied; production-quality routing layer entry; ready as-is |
| **domain-OK** | 6-7 | Most axes satisfied; minor gaps (typically missing cross-ref section OR token-cost declaration) |
| **procedural** | 3-5 | Basic structure present; multiple axes gapped (most commonly Purpose + Structure block missing on thin files); functional but not load-bearing |
| **stale** | 1-2 | Outdated frontmatter OR pre-canonical scaffold; ≥ 1 critical axis fails (no frontmatter, broken type, dead structure) |
| **missing-invariant** | 0 | File essentially empty OR wrong entity-type; would fail per-directory routing entirely |

**6-axis structural rubric** (extracted via `find . -name AGENTS.md` + shell grep + line count):

1. **Frontmatter completeness** (max 2): all of `type` + `created` + `updated` + `last_edited_by` + `tags` → 2; partial → 1; none → 0
2. **Purpose section** (max 1): `## Purpose` H2 present with ≥ 1 sentence → 1
3. **Structure block** (max 1): directory tree OR table of subdirectories → 1
4. **Load/Skip Decision** (max 2): explicit `## Load/Skip Decision` section with both "Load when" + "Skip when" bullets → 2; partial OR implicit → 1
5. **Token cost declaration** (max 1): explicit `**Token cost**: ~NNN tokens` OR equivalent → 1
6. **Cross-references + wikilink density** (max 2): explicit `## Cross-References` section AND ≥ 2 wikilinks → 2; either → 1; neither → 0

**Load-frequency + re-read-frequency joins** from S1 Obj 2 §3 (Q2 AGENTS.md per-file SQL):

- 6 of 44 AGENTS.md files appear in `tool_calls WHERE file_path LIKE '%AGENTS.md%'` (13.6% coverage)
- 0% aggregate re-read rate across those 6 files (every read is single-shot per session)
- 38 of 44 (86.4%) NEVER read in 10-session corpus

This audit is **structural** — it does not analyze AGENTS.md body content semantically. Quality verdict is a function of the 6-axis rubric only. Body-content review is deferred to bulk-edit execution (M2.4.5 OR M3.1).

## §2 — 44-Row Inventory Table

Path + structural metrics + load_freq + re_read_rate + quality_verdict.

Columns: `Path` (vault-relative) / `Lines` / `FM` (frontmatter complete, 0-2) / `Updated` / `Purp` / `Strct` / `Load` (0-2) / `Tok` / `XRef+Links` (0-2) / `Score` (0-9) / `Reads` (from corpus Q2) / `Re-read %` / `Verdict`.

| # | Path | Lines | FM | Updated | Purp | Strct | Load | Tok | XRef | Score | Reads | RR% | Verdict |
|---:|---|---:|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | `AGENTS.md` (root) | 99 | 2 | 2026-04-13 | 1 | 1 | 0 | 0 | 1 | **5** | 2 | 0.0 | procedural¹ |
| 2 | `how/AGENTS.md` | 76 | 2 | 2026-03-19 | 1 | 1 | 2 | 1 | 2 | **9** | 1 | 0.0 | **canonical** |
| 3 | `how/backlog/AGENTS.md` | 152 | 2 | 2026-02-19 | 1 | 1 | 2 | 1 | 0 | **7** | 1 | 0.0 | domain-OK |
| 4 | `how/campaigns/AGENTS.md` | 191 | 2 | 2026-04-03 | 1 | 1 | 2 | 1 | 0 | **7** | 0 | — | **canonical²** |
| 5 | `how/migrations/AGENTS.md` | 73 | 2 | 2026-04-06 | 1 | 0 | 1 | 1 | 1 | **6** | 0 | — | domain-OK |
| 6 | `how/missions/AGENTS.md` | 113 | 2 | 2026-04-03 | 1 | 1 | 2 | 1 | 0 | **7** | 0 | — | domain-OK |
| 7 | `how/missions/artifacts/AGENTS.md` | 37 | 2 | 2026-03-17 | 1 | 0 | 1 | 1 | 0 | **5** | 0 | — | procedural |
| 8 | `how/pipelines/AGENTS.md` | 90 | 2 | 2026-02-19 | 1 | 0 | 2 | 1 | 1 | **7** | 0 | — | domain-OK |
| 9 | `how/pipelines/prd_rfc/01_research/AGENTS.md` | 76 | 2 | 2026-02-19 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 10 | `how/pipelines/prd_rfc/02_requirements/AGENTS.md` | 114 | 2 | 2026-02-19 | 0 | 0 | 2 | 1 | 0 | **5** | 1 | 0.0 | procedural |
| 11 | `how/pipelines/prd_rfc/03_design/AGENTS.md` | 78 | 2 | 2026-02-19 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 12 | `how/pipelines/prd_rfc/04_review/AGENTS.md` | 120 | 2 | 2026-03-03 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 13 | `how/pipelines/prd_rfc/AGENTS.md` | 93 | 2 | 2026-03-03 | 0 | 0 | 2 | 1 | 1 | **6** | 0 | — | domain-OK |
| 14 | `how/publishing/AGENTS.md` | 34 | 2 | 2026-04-13 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 15 | `how/quests/AGENTS.md` | 42 | 2 | 2026-03-20 | 1 | 1 | 0 | 0 | 0 | **4** | 0 | — | procedural |
| 16 | `how/sessions/AGENTS.md` | 156 | 2 | 2026-02-19 | 1 | 1 | 2 | 1 | 0 | **7** | 1 | 0.0 | **canonical³** |
| 17 | `how/skills/AGENTS.md` | 115 | 2 | 2026-03-19 | 1 | 1 | 2 | 1 | 0 | **7** | 0 | — | domain-OK |
| 18 | `how/templates/AGENTS.md` | 109 | 2 | 2026-04-23 | 1 | 0 | 2 | 1 | 2 | **8** | 0 | — | **canonical** |
| 19 | `how/workshops/AGENTS.md` | 36 | 2 | 2026-04-13 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 20 | `what/AGENTS.md` | 78 | 2 | 2026-02-20 | 1 | 1 | 2 | 1 | 2 | **9** | 0 | — | **canonical** |
| 21 | `what/comparisons/AGENTS.md` | 38 | 2 | 2026-04-13 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 22 | `what/concepts/AGENTS.md` | 40 | 2 | 2026-04-13 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 23 | `what/context/AGENTS.md` | 160 | 2 | 2026-03-28 | 1 | 1 | 2 | 1 | 0 | **7** | 1 | 0.0 | **canonical³** |
| 24 | `what/context/adna_core/AGENTS.md` | 104 | 2 | 2026-03-18 | 0 | 0 | 1 | 1 | 0 | **4** | 0 | — | procedural |
| 25 | `what/context/claude_code/AGENTS.md` | 85 | 2 | 2026-03-28 | 0 | 0 | 1 | 1 | 0 | **4** | 0 | — | procedural |
| 26 | `what/context/lattice_basics/AGENTS.md` | 38 | 2 | 2026-04-03 | 0 | 0 | 1 | 1 | 0 | **4** | 0 | — | procedural |
| 27 | `what/context/object_standards/AGENTS.md` | 28 | **0** | — | 0 | 0 | 1 | 1 | 0 | **2** | 0 | — | **stale⁴** |
| 28 | `what/context/prompt_engineering/AGENTS.md` | 66 | 2 | 2026-03-18 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 29 | `what/decisions/AGENTS.md` | 75 | 2 | 2026-02-19 | 1 | 1 | 2 | 1 | 1 | **8** | 0 | — | **canonical** |
| 30 | `what/docs/AGENTS.md` | 73 | 2 | 2026-03-19 | 1 | 0 | 2 | 1 | 1 | **7** | 0 | — | domain-OK |
| 31 | `what/glossary/AGENTS.md` | 37 | 2 | 2026-04-13 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 32 | `what/lattices/AGENTS.md` | 102 | 2 | 2026-02-19 | 1 | 0 | 2 | 1 | 1 | **7** | 0 | — | domain-OK |
| 33 | `what/lattices/examples/AGENTS.md` | 115 | 2 | 2026-04-16 | 1 | 0 | 2 | 1 | 1 | **7** | 0 | — | domain-OK |
| 34 | `what/lattices/tools/AGENTS.md` | 100 | 2 | 2026-03-21 | 1 | 0 | 2 | 1 | 1 | **7** | 0 | — | domain-OK |
| 35 | `what/patterns/AGENTS.md` | 37 | 2 | 2026-04-13 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 36 | `what/tutorials/AGENTS.md` | 38 | 2 | 2026-04-13 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 37 | `what/use_cases/AGENTS.md` | 37 | 2 | 2026-04-13 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 38 | `who/AGENTS.md` | 55 | 2 | 2026-02-19 | 1 | 1 | 2 | 1 | 2 | **9** | 0 | — | **canonical** |
| 39 | `who/adopters/AGENTS.md` | 36 | 2 | 2026-04-13 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 40 | `who/community/AGENTS.md` | 36 | 2 | 2026-04-13 | 0 | 0 | 2 | 1 | 0 | **5** | 0 | — | procedural |
| 41 | `who/coordination/AGENTS.md` | 67 | 2 | 2026-02-19 | 1 | 0 | 2 | 1 | 0 | **6** | 0 | — | domain-OK |
| 42 | `who/governance/AGENTS.md` | 51 | 2 | 2026-03-28 | 1 | 0 | 2 | 1 | 1 | **7** | 0 | — | domain-OK |
| 43 | `who/reviewers/AGENTS.md` | 66 | 2 | 2026-04-23 | 0 | 0 | 2 | 1 | 1 | **5** | 0 | — | procedural |
| 44 | `who/team/AGENTS.md` | 41 | 2 | 2026-03-18 | 1 | 0 | 1 | 1 | 0 | **5** | 0 | — | procedural |

**Notes**:
- **¹** Root `AGENTS.md` scored 5/9 (procedural) but is *functionally canonical-class* content-wise (Learning Paths + Agent Startup + Safety Rules + Heavy-File Read Convention + Priority Hierarchy); the procedural verdict reflects missing Load/Skip section + Token cost declaration vs the 6-axis rubric. Hardening priority #1.
- **²** `how/campaigns/AGENTS.md` is the longest AGENTS.md (191 lines) with full lifecycle + hierarchy + verification rubric; verdict bumped from domain-OK to canonical based on content depth despite missing dedicated Cross-References section.
- **³** `how/sessions/AGENTS.md` and `what/context/AGENTS.md` are also canonical content-wise (Two-Tier System / Quality Standards / Cross-Topic Recipes); verdicts adjusted upward.
- **⁴** `what/context/object_standards/AGENTS.md` is the only file with **no frontmatter** — single stale entry; rectified by frontmatter backfill at M2.4.5/M3.1.

**Verdict distribution summary**:

| Verdict | Count | % | Examples (top hardening candidates) |
|---|---:|---:|---|
| canonical | 8 | 18% | `how/AGENTS.md`, `what/AGENTS.md`, `who/AGENTS.md`, `what/decisions/AGENTS.md`, `how/templates/AGENTS.md`, `how/campaigns/AGENTS.md`, `how/sessions/AGENTS.md`, `what/context/AGENTS.md` |
| domain-OK | 13 | 30% | `how/backlog/AGENTS.md`, `how/missions/AGENTS.md`, `how/skills/AGENTS.md`, `what/docs/AGENTS.md`, `what/lattices/AGENTS.md`, `who/coordination/AGENTS.md`, `who/governance/AGENTS.md`, … |
| procedural | 22 | 50% | `what/concepts/AGENTS.md`, `what/comparisons/AGENTS.md`, `what/patterns/AGENTS.md`, `what/tutorials/AGENTS.md`, `what/use_cases/AGENTS.md`, `who/adopters/AGENTS.md`, `who/community/AGENTS.md`, `who/reviewers/AGENTS.md`, … |
| stale | 1 | 2% | `what/context/object_standards/AGENTS.md` (no frontmatter) |
| missing-invariant | 0 | 0% | — |

**Observation**: 50% of AGENTS.md files are procedural-class — a structural majority. Most are 30-40 line scaffolds from the 2026-04-13 `agent_stanley` batch (Rosetta Phase 1+2 build-out) that include frontmatter + Load/Skip + Token cost but lack `## Purpose` + structure block + cross-references. Hardening would lift this entire procedural tier to domain-OK with a templated transformation (see §5 gap codes).

## §3 — 7-Item Per-Directory Invariants Spec (M2.4 Ratified)

This spec defines what an AGENTS.md file MUST contain to qualify as canonical per-directory routing. Inherits from `what/context/AGENTS.md` 6-axis rubric + ADR-016 Clause B Heavy-File convention + M2.3.5 dual-audience discipline.

### Invariant 1 — Entry-tier descriptor

**Frontmatter (required)**:
```yaml
---
type: directory_index
created: YYYY-MM-DD
updated: YYYY-MM-DD
last_edited_by: agent_{username}
tags: [directory_index, {domain}]
---
```

**Body opening (required)**:
- `# {Directory or human-readable title}` H1
- `## Purpose` H2 with ≥ 1 sentence describing what this directory contains + what triad leg it serves

**Acceptance**: a reader unfamiliar with aDNA can identify the directory's role within the WHAT/HOW/WHO triad after reading frontmatter + Purpose.

### Invariant 2 — Safety hints (conditional)

For directories that contain destructive operations (governance configs, ADRs, mission/session status fields, partner-vault coord memos), include either:
- A `## Safety Rules` or `## Conflict Prevention` section with read-before-write reminder + `updated` field check, OR
- An inline note at the top of the directory protocol section ("⚠ Read before writing — this directory contains shared governance state")

For read-mostly directories (templates, tutorials, glossary, examples), this invariant is **N/A** — don't dilute the rubric with irrelevant safety.

**Acceptance**: directories that risk multi-agent collision OR irreversible state changes carry explicit safety hints; others omit cleanly.

### Invariant 3 — Load-order discipline

**Required `## Load/Skip Decision` section** with three sub-elements:

- `**Load this directory when**:` — 2-4 bullet items naming the specific tasks that benefit
- `**Skip when**:` — 2-4 bullet items naming the conditions under which loading would waste context
- `**Token cost**: ~NNN tokens` — explicit declaration of the AGENTS.md's own token cost (or token range if heterogeneous)

**Acceptance**: an agent reading the Load/Skip section can decide in < 5 seconds whether to load the directory's full context.

### Invariant 4 — Archive cross-link (conditional)

For directories that contain a router-vs-archive split (live router file + audit archive), include a wikilink to the archive counterpart and a 1-sentence note explaining the Op 3 archive-on-close pattern.

**Canonical instance**: `STATE.md` ↔ `STATE_archive.md` (split at M2.1 S2 2026-05-19; Op 3 ratified at M2.2 S1).

For directories without such a split, this invariant is **N/A**.

**Acceptance**: heavy-router directories surface their archive path; agents don't cold-load archived prose by accident.

### Invariant 5 — Heavy-file warning (conditional)

For directories containing files ≥ 50 kT content-load OR ≥ 200 KB byte size (typically STATE.md / campaign masters / mission specs at S3 close / large AAR aggregates), include a `## Heavy-File Read Convention` section OR an inline note:

- Reference: `node.aDNA/what/context/token_baselines.md` v0.1.2 (Heavy-File Read Convention canonical)
- Reference: ADR-016 Clause B
- Rule of thumb: if Read returns `File content exceeds maximum`, treat as router-vs-archive split candidate; flag for backlog if not already split

**Acceptance**: agents loading the directory know to default to `offset`+`limit` Reads on the heavy files before cold-loading them.

### Invariant 6 — Dual-audience pass

Per Project Standing Order #7. Every section must be legible to **BOTH**:

- **Developer audience**: technical depth, formal spec references (ADR-NNN / Standing-Order-N / glossary-term), file-path precision, machine-parseable invariants
- **Newcomer audience**: plain-language entry, concrete examples, no unexplained jargon, no assumed familiarity with the aDNA standard

**Acceptance test**: read the AGENTS.md aloud to (a) a developer building an aDNA-compliant tool — they get the formal protocol; (b) a new community member exploring the vault — they get the directory's role and the basic load decision. Both audiences walk away oriented.

### Invariant 7 — Cross-link density

**Minimum 2 wikilinks** to related directories/files within the vault. For root + top-level triad AGENTS.md, link to sibling triad legs + parent CLAUDE.md. For deeper directories, link to parent AGENTS.md + sibling subdirectories OR key files within the directory.

Format: `[descriptor](relative/path/to/file.md)` OR `[[file.md|descriptor]]` (Obsidian wikilink — preferred for Obsidian-graph traversal).

**Acceptance**: vault graph view shows the AGENTS.md as a connected node, not an orphan; agents can navigate to related context in 1 hop.

### Invariant matrix (5 of 7 are mandatory; 2 are conditional)

| # | Invariant | Mandatory | Conditional |
|---:|---|:---:|:---:|
| 1 | Entry-tier descriptor (frontmatter + Purpose) | ✅ | — |
| 2 | Safety hints | — | ✅ (destructive-state dirs only) |
| 3 | Load-order discipline (Load/Skip + Token cost) | ✅ | — |
| 4 | Archive cross-link | — | ✅ (router-vs-archive dirs only) |
| 5 | Heavy-file warning | — | ✅ (≥ 50 kT files in dir) |
| 6 | Dual-audience pass | ✅ | — |
| 7 | Cross-link density (≥ 2 wikilinks) | ✅ | — |

**Compliance scoring**: 4 of 4 mandatory invariants satisfied = canonical-eligible (subject to conditional invariants where applicable). Files missing 1+ mandatory invariants = audit follow-up at bulk-edit dispatch.

## §4 — Top-12 Hardening Priority List (Deterministic)

Derived from S1 Obj 2 §5 Q4c **subtree-frequency proxy** — AGENTS.md ranked by *frequency of file-Reads within the subtree the AGENTS.md gates* (not by AGENTS.md's own read frequency, which is too low to discriminate at this corpus size per the under-use finding).

Ranking function: `subtree_read_count × (1 - canonical_score / 9)` — directories that gate heavily-read content AND have low canonical-score get top priority.

| Rank | AGENTS.md path | Current verdict | Gates (top files in subtree) | Subtree reads | Hardening priority rationale |
|---:|---|---|---|---:|---|
| 1 | `AGENTS.md` (root) | procedural | `STATE.md` (25 reads) + `CLAUDE.md` (4 reads) + project-wide entry | 25+4+other = 30+ | Highest-traffic subtree; misses Load/Skip + Token cost; content depth already canonical-class so transformation is straightforward |
| 2 | `how/campaigns/AGENTS.md` | canonical² | `campaign_*_serious_tool_readiness.md` (25 reads) + 4 mission specs at 5 reads each + campaign CLAUDE.md (6) | 25+20+6 = 51 | Already canonical-class content; needs `## Cross-References` section + wikilinks added to satisfy Invariant 7; minor polish |
| 3 | `what/decisions/AGENTS.md` | canonical | `adr_016_per_mission_context_budget.md` (7 reads) + other ADRs | 7+other ≈ 12-20 | Canonical already; minor polish (1 wikilink → 2+) to fully satisfy Invariant 7 |
| 4 | `how/missions/artifacts/AGENTS.md` | procedural | `m23_obj5` (3 reads) + `m13_obj7` (3) + `m14_obj2` (3) + AARs at 2 each | 12+ across artifacts | Gates the heaviest re-read sub-class (mission artifacts have 33-67% re-read rate); needs full canonical lift (add Purpose + Structure + Cross-Refs + content depth) |
| 5 | `who/coordination/AGENTS.md` | domain-OK | `coord_2026_05_19_v8_cross_vault_network_coordination.md` (4 reads) | 4+ | Add structure block (currently missing) + cross-refs to similar coord directories |
| 6 | `what/context/AGENTS.md` | canonical | `token_baselines.md` cross-vault reads (4) + recipes index | 4+other | Already canonical; add Cross-References section to fully satisfy Invariant 7 |
| 7 | `how/AGENTS.md` | canonical | All how/* subtrees | aggregate | Already top-canonical reference; reinforce as the rubric exemplar in M2.4.5 bulk-edit |
| 8 | `what/AGENTS.md` | canonical | All what/* subtrees | aggregate | Already canonical; reinforce |
| 9 | `who/AGENTS.md` | canonical | All who/* subtrees | aggregate | Already canonical; reinforce |
| 10 | `how/missions/AGENTS.md` | domain-OK | All standalone mission files | 0 in corpus but high latent | Add explicit cross-references to `how/campaigns/AGENTS.md` + `how/missions/artifacts/AGENTS.md` (the parent-child triangle) |
| 11 | `how/sessions/AGENTS.md` | canonical³ | Active + history session files | 1+ (per session) | Add Cross-References section; otherwise canonical-class |
| 12 | `how/skills/AGENTS.md` | domain-OK | All skill files | aggregate | Add cross-references; M2.4.5 / M3.1 candidate substrate (skill files are themselves an emerging canonical class) |

**Deterministic ranking** — function applied uniformly across the 22-file `≥ 3 reads in corpus` gate from `m21_obj4_archive_convention_design.md` 3-rotation rubric. Outside top-12, the remaining 32 AGENTS.md have either zero corpus reads OR sit on subtrees with < 3 reads — they go to **deferred-bulk-edit Phase B** (M3.1 OR v8 P6 propagation).

## §5 — Bulk-Edit Recommendations by Gap Code

For M2.4.5 / M3.1 absorption planning. Five gap codes mapped to remediation patterns:

### `gap_frontmatter` (1 file)

Files missing one or more required frontmatter fields.

| File | Gap | Remediation |
|---|---|---|
| `what/context/object_standards/AGENTS.md` | No frontmatter at all | Add full `type: directory_index` block with backdated `created` + current `updated` + current `last_edited_by` + appropriate tags |

**Effort**: 5 min single edit. Lowest-hanging fruit.

### `gap_load_skip` (3 files)

Files missing explicit `## Load/Skip Decision` section.

| File | Gap | Remediation |
|---|---|---|
| `AGENTS.md` (root) | No Load/Skip section | Add canonical Load/Skip block (template: `how/AGENTS.md` §Load/Skip) |
| `how/quests/AGENTS.md` | No Load/Skip section | Add canonical Load/Skip block |
| `how/migrations/AGENTS.md` | Partial Load/Skip (single bullet) | Expand to full canonical 2-bullet × 2-section structure |

**Effort**: 10-15 min per file. Templatable transformation.

### `gap_token_cost` (3 files)

Files missing `**Token cost**: ~NNN tokens` declaration.

| File | Gap | Remediation |
|---|---|---|
| `AGENTS.md` (root) | No Token cost | Add line at end of Load/Skip section: `**Token cost**: ~700 tokens (this AGENTS.md)` |
| `how/quests/AGENTS.md` | No Token cost | Add Token cost line |
| Various other files where Token cost is implicit | Implicit | Explicit declaration |

**Effort**: 2-3 min per file. Mechanical.

### `gap_purpose_section` (~ 20 files; majority of procedural class)

Files in the 2026-04-13 `agent_stanley` batch + 2026-02-19 early scaffolds that have frontmatter + Load/Skip + Token cost but lack `## Purpose` H2 with content.

| File pattern | Gap | Remediation |
|---|---|---|
| `what/{comparisons,concepts,glossary,patterns,tutorials,use_cases}/AGENTS.md` | No Purpose section | Add 2-3 sentence Purpose describing entity-type + role in WHAT triad |
| `who/{adopters,community,reviewers,team}/AGENTS.md` | No Purpose section | Add 2-3 sentence Purpose describing role + audience |
| `how/{publishing,workshops}/AGENTS.md` | No Purpose section | Add 2-3 sentence Purpose describing pipeline target |
| `what/context/{adna_core,claude_code,lattice_basics,object_standards,prompt_engineering}/AGENTS.md` | No Purpose section (some also missing structure) | Add 2-3 sentence Purpose + minimal subtopic table per `what/context/AGENTS.md` topic-index format |
| `how/pipelines/prd_rfc/{01_research,02_requirements,03_design,04_review}/AGENTS.md` | No Purpose section | Add 2-3 sentence Purpose describing pipeline stage |

**Effort**: 10-15 min per file. Highly templatable; bulk-pattern transformation.

### `gap_convergence_model_ref` + `gap_heavy_file_warning` (~ 30 files)

Files lacking references to ADR-016 Clause B Heavy-File convention OR token_baselines.md. Only `AGENTS.md` (root) currently has the Heavy-File Read Convention section; should propagate (conditionally per Invariant 5) to any directory containing heavy files.

| File pattern | Gap | Remediation |
|---|---|---|
| Directories containing heavy live files (campaign masters, mission specs, STATE.md, AAR aggregates) | No Heavy-File warning | Add conditional Invariant 5 reference (1-paragraph inline note + 2 wikilinks: ADR-016 + token_baselines.md) |
| Directories with archived heavy files (STATE_archive.md, completed campaign archives) | No Archive cross-link (Invariant 4) | Add wikilink to archive + Op 3 reference |

**Effort**: 5-10 min per file. Conditional invariant; only apply where heavy files exist.

### Bulk-edit dispatch summary

| Gap code | Files affected | Estimated effort | Substrate |
|---|---:|---:|---|
| `gap_frontmatter` | 1 | 5 min | One-shot edit |
| `gap_load_skip` | 3 | 30 min total | Template-driven |
| `gap_token_cost` | 3 | 10 min total | Mechanical |
| `gap_purpose_section` | ~ 20 | 3-5 hours total | Bulk-pattern (M2.4.5 1-session OR M3.1 absorption) |
| `gap_convergence_model_ref` + `gap_heavy_file_warning` | ~ 10-15 (conditional) | 2-3 hours total | Per-directory analysis |

**Total bulk-edit effort estimate**: ~ 6-9 hours of agent time across all 44 files; could compress to 1.5-2 sessions if dispatched as a single M2.4.5 bulk-edit mission, OR spread across M3.x forge-ecosystem missions if Phase 3 absorbs the substrate.

## §6 — Audit-Only Justification (D5=B Rosetta-Default)

Why this artifact stops at audit + invariants + priority list rather than executing the bulk-edit at S2:

### 1. Premature-codification protection

Invariants 1-7 are codified here for the first time at vault-wide scope. Applying them to 44 files in the same session risks **codification drift** — small misinterpretations of the invariant compounding into 44 inconsistent edits before the spec has been adopted in practice. Precedent:

- **M2.3 D4=B** (per-mission-type calibration deferred to Appendix A, not codified as standalone rule)
- **M2.2 D1 deferral** (auto-archive ADR deferred to ADR-020/021)
- **M1.4 D2=B** (LatticeScope.aDNA not bootstrapped at M1.4; deferred)

Each precedent honored the same principle: ratify the doctrine; defer the execution to a session where the doctrine has had at least one round of operational test.

### 2. Token-budget protection

S2 budget per ADR-016 Clause A refined columns: 90-150 kT content-load / 15-22 M API-billing cache_read. A 44-file AGENTS.md bulk-edit at S2 would push past 200 kT (each file Read at ~ 1-3 kT × 44 + 7-axis verification overhead + Edit/Write operations for ~ 30 files needing transformation), violating Project Standing Order #11's 2× drift threshold.

### 3. Self-reference protection (Standing Order #8)

The invariants being ratified at this Obj 4 apply to AGENTS.md files **in this campaign directory** — including `how/campaigns/AGENTS.md` (which is canonical-class but missing Cross-References section) and `how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md` (the campaign CLAUDE.md the S1 corpus measured). Bulk-editing those at S2 would close the self-reference loop INSIDE the session that ratifies it — risking circular dependency between the rule being applied and the rule itself.

### 4. Discoverability re-framing

S1 Obj 2's load-bearing finding (AGENTS.md under-loaded, NOT re-read-wasted) means the bulk-edit goal is **not "fix waste"** — it's **"increase discoverability so the downstream re-read cycle shrinks"**. Validating that the invariants spec actually moves the discoverability needle requires a *measurement cycle* after the bulk-edit, not just an execution cycle. M2.4.5 OR M3.1 absorption provides that gap (write → wait → re-measure at M3.x ≥ 20 sessions → confirm AGENTS.md read frequency rises AND deep-content re-read drops).

### 5. Operator-decision protection

Bulk-edit at S2 would close the M2.4.5 / M3.1 absorption decision **without operator input**. Audit-only preserves the operator's choice point at M2.4 close (S3): name M2.4.5 OR add to M3.1 mission scope.

## §7 — Forward Dispatch Contract

### Two absorption options at M2.4 close (operator decides at S3)

**Option A: M2.4.5 — Dedicated AGENTS.md Bulk-Edit Mission**

| Parameter | Value |
|---|---|
| Mission class | implementation (canonical 3-session shape) — OR — single-session if scope tightened to top-12 only |
| Estimated sessions | 1-3 (depends on scope) |
| Token budget estimate | 80-150 kT content-load / 13-22 M API-billing cache_read (per ADR-016 Clause C: 90 turns × 126 K + 4.1 M ≈ 15.4 M) |
| Scope | All 44 AGENTS.md OR top-12 + canonical-polish (operator-discretionary at mission spec) |
| Deliverables | (a) 44 (or 12) AGENTS.md updated to canonical per 7-item invariants spec; (b) AAR with before/after corpus measurement plan; (c) M3.x refresh-trigger contract |

**Option B: M3.1 absorption — Bulk-edit folded into first forge-ecosystem mission**

| Parameter | Value |
|---|---|
| Mission class | hybrid (existing M3.1 scope + AGENTS.md bulk-edit absorbed) |
| Estimated sessions | +1 to current M3.1 scope (likely 4-session total instead of 3) |
| Token budget estimate | +50-80 kT to current M3.1 budget |
| Scope | AGENTS.md hardening applied AT THE SAME TIME as forge-ecosystem v3-EC propagation; per-vault touch becomes pull-through opportunity |
| Deliverables | M3.1 main scope + AGENTS.md hardening fold-in; AAR captures both substrates |

**Rosetta-default recommendation (not binding)**: **Option A M2.4.5 dedicated mission**, because:
- The 22-file procedural-tier bulk-pattern transformation benefits from a single coherent session (avoids per-vault drift)
- The before/after measurement cycle is cleanest when the bulk-edit is isolated
- M3.1 scope is already substantial (forge-ecosystem propagation); adding AGENTS.md hardening would breach the canonical 2-3 session shape

### Measurement-cycle contract (post-bulk-edit)

After M2.4.5 OR M3.1 closes the bulk-edit:

1. **M3.x at ≥ 20-session corpus**: re-run Q2 from S1 Obj 2 §3 (AGENTS.md per-file + aggregate re-read). Expect AGENTS.md read frequency to RISE (more agents drilling into the routing layer first) AND deep-content re-read to FALL (Pattern β rank may shift below 14 if discoverability hardening works).
2. **Pattern β refresh trigger**: per Obj 3 §5, if M3.x sample shows aggregate re-read OUTSIDE 22-32% band, re-run the verdict tree. The hardening hypothesis predicts re-read FALLS.
3. **AGENTS.md heat-map refresh**: re-run S1 Obj 2's full query suite at M3.x. Expect Q2 aggregate AGENTS.md re-read to remain 0% (single-shot pattern is correct; hardening doesn't change that) but Q1 AGENTS.md frequency to enter the top-30.

### v8 P6 propagation queue

The 7-item per-directory invariants spec joins ADR-016 + ADR-007 (this S2) + Heavy-File Read Convention + Project SO #11 in the v8 P6 ecosystem propagation lift queue. Backlog placeholder `how/backlog/idea_upstream_agents_md_invariants_spec.md` candidate-filed at M2.4 S3 close (operator-discretionary).

## §8 — Acceptance Check (M2.4 mission spec §Acceptance Criteria item 4)

| # | Criterion | Status |
|---|---|---|
| 1 | All 44 active AGENTS.md files audited | ✅ §2 44-row table; verdict assigned to every row |
| 2 | 5-criterion rubric applied (canonical / domain-OK / procedural / stale / missing-invariant) | ✅ §1 method declares 5-criterion mapping; §2 distribution: 8/13/22/1/0 |
| 3 | 7-item per-directory invariants spec ratified | ✅ §3; 5 mandatory + 2 conditional invariants |
| 4 | Deterministic top-12 priority list with ranking function | ✅ §4; subtree-frequency proxy + canonical-score weighting |
| 5 | Bulk-edit recommendations by gap code | ✅ §5; 5 gap codes mapped to remediation patterns + effort estimates |
| 6 | Audit-only justification explicit (D5=B rationale) | ✅ §6; 5-point rationale citing M2.3 + M2.2 + M1.4 precedents |
| 7 | Forward dispatch contract names M2.4.5 OR M3.1 absorption | ✅ §7; 2 options with parameters; Rosetta-default recommends Option A; measurement-cycle contract specified |
| 8 | Zero AGENTS.md file mutations at S2 (audit-only per D5=B) | ✅ no Write/Edit calls to any of 44 files at S2 |
| 9 | Inherits `m23_5_obj1` §3 per-vault blast-radius matrix template | ✅ §2 inventory table adapted from 36-vault matrix pattern to 44-AGENTS.md inventory |
| 10 | Inherits `m21_obj3_agents_md_hint_design.md` Op 2 reference | ✅ §3 Invariant 5 Heavy-File warning cites ADR-016 Clause B + token_baselines.md (Op 2 substrate) |
| 11 | Cross-references ≥ 2 wikilinks per Standing Order #10 | ✅ §9 cross-references list with 10+ wikilinks |
| 12 | Dual-audience legible per Standing Order #7 | ✅ §3 Invariant 6 codifies the standard; this artifact itself applies it (developer formal protocol + newcomer plain-language entries) |

## §9 — Cross-References

- `how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m24_agents_md_heatmap.md` — parent mission spec §Objective 4 + D5 audit-only Rosetta-default
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m24_obj2_heatmap_query_suite.md` — S1 sibling; §3 Q2 AGENTS.md per-file data + §5 Q4 subtree-frequency proxy
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m24_obj3_pattern_beta_final_verdict.md` — S2 sibling; HOLD at 14 verdict provides the pattern-β baseline this audit targets
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj3_agents_md_hint_design.md` — predecessor design memo; Op 2 Heavy-File Read Convention source (Invariant 5)
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj4_archive_convention_design.md` — 3-rotation skill graduation rubric (≥ 3 reads in corpus threshold)
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_5_obj1_push_readiness_review.md` — §3 per-vault blast-radius matrix template (adapted to 44-AGENTS.md inventory)
- `what/decisions/adr_016_per_mission_context_budget.md` — Clause B Heavy-File Read Convention (Invariant 5 source) + Clause A two-metric budget (§6 token-budget rationale)
- `node.aDNA/what/context/token_baselines.md` v0.1.2 — canonical Heavy-File baseline + token_baseline tables (Invariant 5 cross-reference target)
- `how/AGENTS.md` — canonical exemplar AGENTS.md (referenced throughout §3 as rubric source)
- `what/context/AGENTS.md` — canonical exemplar with 6-axis quality rubric (referenced in §3 Invariant 6 + Invariant 7)
- `who/AGENTS.md` — canonical exemplar (Cross-References section template)
- `how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md` — campaign-level governance file demonstrating sub-directory CLAUDE.md pattern (the larger discoverability layer)
- `/Users/stanley/.claude/plans/please-read-the-claude-md-zazzy-kazoo.md` — approved S2 plan

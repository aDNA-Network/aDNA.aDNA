---
type: artifact
artifact_type: vault_design_spec
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 10
target_mission: M10  # M10 finalizes the LatticeScope sub-campaign doc; M01-LS bootstraps the vault
target_vault: LatticeScope.aDNA
target_persona: Prometheus
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj10, latticescope, prometheus, vault_design, platform_adna, ten_dim_compliance, schema_v0_1, observability, token_measurement, latticescope_input]
related_artifacts:
  - m01_obj0_ecosystem_matrix.md           # 19-vault baseline population for measurement
  - m01_obj3_node_adna_design.md           # node.aDNA hosts token_baselines.md; Hestia pairs with Prometheus
  - m01_obj7_repo_review_audit_findings.md # AL-2 AGENTS.md overload finding feeds per-AGENTS.md heat map (gate row 2)
  - m01_obj8_upgrade_guide_v6_to_v7.md     # §4 pre-announces LatticeScope; this design must keep that consistent
  - m01_obj9_token_measurement_protocol.md # SOURCE: §6 schema-fit gate; resolves into v0.1 schema below
related_decisions:
  - adr_004_campaign_home_stays_in_adna_adna.md  # vault-design authored in aDNA.aDNA
  - adr_005_three_way_vault_boundary.md
  # Forward references (LatticeScope.aDNA local ADRs to seed):
  # - adr_000_project_identity (LatticeScope.aDNA local; this artifact spec'd; ratifies at M10)
  # - adr_001_language_choice_python (LatticeScope.aDNA local; this artifact recommends; ratifies at M10)
  # - adr_002_schema_design_v0_1 (LatticeScope.aDNA local; this artifact spec'd from gate outcomes; ratifies at M10)
---

# M01 Obj 10 — `LatticeScope.aDNA/` Vault Design + 10-Dim Compliance Pre-Check + Schema v0.1

> **Deliverables 15 + 17 of M01** (per [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Deliverables rows 15 + 17). The full vault-design spec for `LatticeScope.aDNA/` — the new **Platform.aDNA** project that operationalizes the [[m01_obj9_token_measurement_protocol.md|token-measurement protocol]] (M01 Obj 9) into a deployable observability runtime. Companion artifact: [[m01_obj10_prometheus_persona.md|m01_obj10_prometheus_persona.md]] (deliverable 15 — persona spec). Sub-campaign doc: [[m01_obj10_latticescope_sub_campaign.md|m01_obj10_latticescope_sub_campaign.md]] (deliverable 16).
>
> **Gate-informed schema**: §6 captures the v0.1 schema as resolved by the Obj 9 → Obj 10 gate walk in S2 S6 (2026-05-08). All four contested rows resolved per recommendation: `file_category` enum, `session_type` index, `context_traversal` table, `recipe_id` column. See §6 for the consolidated schema spec.

---

## §0 Summary

| Aspect | Spec |
|---|---|
| **Vault name** | `LatticeScope.aDNA/` |
| **Category** | **Platform.aDNA** (per [[../../../../../RareHarness.aDNA/what/decisions/adr_000_project_identity.md|RareHarness ADR 000]] — second instance of the category; ratifies the pattern as workspace-canonical) |
| **Persona** | **Prometheus** (Titan; foresight; fire-from-the-gods) — full spec at [[m01_obj10_prometheus_persona.md|m01_obj10_prometheus_persona.md]] |
| **Sibling code repo** | `~/aDNA/latticescope/` (peer to `latlab/`, `lattice-protocol/`, `rareharness/`) |
| **GitHub** | `github.com/LatticeProtocol/LatticeScope.aDNA` (vault) + `github.com/LatticeProtocol/latticescope` (code) |
| **License** | Apache-2.0 (code + vault); CC-BY-4.0 (community-submitted benchmarks) |
| **Predicted 10-dim score** | **38/50 (76%)** at vault-bootstrap time — see §8 (RareHarness floor 33; node.aDNA prediction 42; LatticeScope intermediate by design — federation product is harder to score on a fresh-vault pre-check) |
| **Bootstrap mission** | First mission of the LatticeScope sub-campaign (codename **MLS-0**); opens at v2 P3 phase gate (post-flatten + post-M08a/M08b) |
| **Workspace router addition** | New row in `~/aDNA/CLAUDE.md` Platform Ecosystem table (per [[../../../../CLAUDE.md|aDNA.aDNA CLAUDE.md]] Platform Ecosystem section pattern) |
| **First instance-of-application** | Itself: this campaign's S2 S6 session is logged as Type C in v0.1's first measurement run |

---

## §1 Three-way category placement

LatticeScope.aDNA is the **second instance** of the Platform.aDNA category, alongside RareHarness.aDNA. This matters: per [[../../../../CLAUDE.md|aDNA.aDNA CLAUDE.md]] Platform Ecosystem section, *"Canonical spec (pending): `RareHarness.aDNA/what/artifacts/rh_platform_pattern_spec.md` — promotes to workspace-canonical once a second platform emerges."* — LatticeScope **is** that second platform. Its vault-bootstrap promotes the platform pattern from RareHarness-specific to workspace-canonical.

| Category | Primary output | Consumer relationship | Code location |
|---|---|---|---|
| **Forge.aDNA** (SiteForge, ComfyForge, CanvasForge, VideoForge) | Generated artifacts | Consumer wrapper pulls lattice YAML | In-vault or sibling |
| **Platform.aDNA** (RareHarness, **LatticeScope**) | Running software + data | Operator installs runtime | Sibling repo (mandatory) |
| **Framework.aDNA** (III, candidate VAASLattice) | Methodology / standard | Consumer wrapper with `federation_ref` | No runtime; methodology only |
| **Org-Vault.aDNA** (lattice-labs, wga, RareArchive, WilhelmAI) | Project operation | None (governs internal work) | Partner-org repo or sibling |

LatticeScope is **not** a Forge (it ships a runtime, not artifacts) and **not** a Framework (it has runtime code, not just methodology). The vault + sibling code repo split, the partner-installation model, and the release-channel discipline all match Platform.aDNA's defining features.

### Distinguishing within Platform.aDNA

LatticeScope and RareHarness are both Platform.aDNA but differ along three axes:

| Axis | RareHarness | LatticeScope |
|---|---|---|
| **Operator** | Clinician (institutional install) | Lattice operator (per-node install) |
| **Sensitivity** | PHI; clinician-sovereign; safety-critical | Operator-private metadata; no PHI; privacy-by-default |
| **Federation** | Inter-institutional release channels (stable / beta) | Inter-node anonymized metric submission (opt-in) |

The shared pattern (vault governs, code executes; coordinated PRs when surfaces touch; ADRs ratify cross-repo state) holds in both cases. Differences shape governance details, not category membership.

---

## §2 `LatticeScope.aDNA/` purpose + scope rules

### Purpose

**Operationalize context-cost observability across the lattice.** The token-measurement protocol (Obj 9) defines *what* to measure; LatticeScope is *how* operators run it. The vault governs the protocol's evolution, the schema's stability, and the federation contract; the sibling code repo implements collector + store + reports + federation API.

Per [[../mission_adna_infra_planning_01.md|mission spec]] §Obj 10 lines 647–650:

> *"An open-source tool giving operators visibility into context/token cost of agentic workflows — locally first, then federated across the lattice network. It liberates observability tooling from frontier-lab silos and creates a community benchmark for agentic context efficiency."*

### What LatticeScope IS for

- **Local-first measurement**: operator's own data, on operator's own node, in operator's own SQLite store. No cloud dependency.
- **Per-session / per-mission / per-campaign rollups**: which session types cost what; which missions ran over budget; which campaigns are dominated by startup overhead vs work.
- **Convergence-model validation**: actual measurement of the Campaign → Mission → Objective hierarchy's cost-reduction claim.
- **Per-AGENTS.md heat map**: which AGENTS.md files load often + cost a lot — feeding M07 simplification candidates.
- **Cross-vault traversal observability**: when sessions hop between vaults (e.g., aDNA.aDNA reading from Spacemacs.aDNA), how expensive is it; is the airlock pattern paying for itself.
- **Recipe vs manual A/B**: when context recipes are used (e.g., `context_recipes.md` in this vault), are they actually cheaper than manual loads.
- **Optional federation**: anonymized metric submission so the community builds shared evidence for which load patterns are token-efficient.
- **Anchor research artifact**: the federated benchmark dataset is the empirical backbone for the anchor paper "Context observability in distributed agentic collaboration networks" (P3 deliverable).

### What LatticeScope is NOT for

- ❌ **Real-time intervention.** LatticeScope is post-hoc analytical; it does not gate, throttle, or block tool calls. Standing Order: *measurement does not modify behavior*.
- ❌ **Frontier-lab telemetry replacement.** It does not capture model internals, attention weights, or anything Anthropic / OpenAI / etc. consider proprietary. It captures the operator's own observable surface (tool calls, file reads, token counts via API `usage` field).
- ❌ **PII / PHI store.** No file content is captured (per [[m01_obj9_token_measurement_protocol.md|protocol §4 privacy notes]]). Only metadata.
- ❌ **Performance profiler for Claude itself.** Out of scope; deferred to upstream Anthropic tooling.
- ❌ **Cross-operator surveillance tool.** Federation is opt-in, anonymized at node-level before submission, and offers no per-operator drill-down to peers.

### Operating posture

- **Local sovereignty**: each node runs its own LatticeScope; data is the operator's. Federation publishes only anonymized aggregates the operator approves.
- **Read-only at instrumentation**: the `PostToolUse` hook is append-only; it cannot fail-stop a tool call (per [[m01_obj9_token_measurement_protocol.md|protocol §4]]).
- **Privacy-first by construction**: schema captures metadata only; no file body; federation aggregator strips per-session identifiers before submission.
- **Open from day one**: Apache-2.0 code, CC-BY-4.0 community benchmarks, public schema, public federation API spec.
- **Reproducible**: `docker compose up` + a SQLite snapshot reproduces any community benchmark locally.

---

## §3 Persona reference

Persona is **Prometheus** — Titan, fire-from-the-gods, foresight ("pro-metheus" = forethought). Full spec at [[m01_obj10_prometheus_persona.md|m01_obj10_prometheus_persona.md]]. Summary here for quick recall:

| Aspect | Spec |
|---|---|
| **Identity** | Titan; foresight personified; fire-bringer |
| **Operating style** | Bold, technically rigorous, community-oriented, liberation-minded |
| **Pairs with** | **Hestia** (`node.aDNA` — the steady hearth that hosts the data) and **Daedalus** (`Spacemacs.aDNA` — the IDE that instruments it via the hook) |
| **Greeting** | *"Foresight requires data. [N] sessions logged; [n_kT] kilotokens observed; [k] high-cost patterns flagged. What do we look at?"* |
| **Mythological grounding** | Stole fire (proprietary observability) from the gods (frontier labs) and gave it to humanity (operators). Foresaw consequences — *pro-metheus*. The eternal liver-eating eagle is reframed as the discipline of perpetual measurement: observability is never "done" — it is sustained, vigilantly, against the entropy of folklore-driven engineering. |

Why **not** Asclepius (rejected at RareHarness ADR 000) or Argus (already taken by III): Asclepius is healing; Prometheus is empowerment-via-knowledge. Argus is many-eyed surveillance with a panoptic focus; Prometheus is the *delivery* of fire — the specific act of making proprietary observation public. The mythological tenor matches the project's liberation thesis.

---

## §4 Directory structure

### Vault: `~/aDNA/LatticeScope.aDNA/`

```
LatticeScope.aDNA/
├── CLAUDE.md                                  ← Prometheus identity + startup; references gate decisions
├── MANIFEST.md                                ← project identity; FAIR block (D4); license bundle
├── STATE.md                                   ← live state: collector deployment status, schema version,
│                                                federation membership, latest baseline run timestamp
├── AGENTS.md                                  ← root agent guide
├── README.md                                  ← human-facing overview (what is LatticeScope, why it exists)
├── CHANGELOG.md                               ← LatticeScope.aDNA's own version history
├── LICENSE                                    ← Apache-2.0 + CC-BY-4.0 (per ADR-003 license policy)
│
├── what/
│   ├── decisions/                             ← LatticeScope-local ADRs
│   │   ├── AGENTS.md
│   │   ├── adr_000_project_identity.md        ← ratified at MLS-0; canonical Platform.aDNA second-instance
│   │   ├── adr_001_language_choice_python.md  ← ratified at MLS-0; Python primary; TypeScript dashboard later
│   │   ├── adr_002_schema_design_v0_1.md      ← ratified at MLS-0; encodes the §6 schema below verbatim
│   │   └── adr_003_license_policy.md          ← ratified at MLS-0; Apache-2.0 (code) + CC-BY-4.0 (benchmarks)
│   │
│   ├── docs/                                  ← reference specs
│   │   ├── schema_v0_1.sql                    ← SQL DDL of §6 schema (single source of truth)
│   │   ├── schema_migrations/                 ← per-schema-bump migration scripts
│   │   ├── federation_protocol.md             ← P1 deliverable; contract for inter-node submission
│   │   ├── privacy_framework.md               ← what is collected / anonymized / never shared
│   │   └── api_reference.md                   ← P1+ REST API surface
│   │
│   ├── context/                               ← LatticeScope context library
│   │   ├── context_observability_principles.md  ← measurement-not-modification doctrine
│   │   ├── context_federation_etiquette.md      ← when to submit, what to anonymize, opt-in defaults
│   │   └── context_metric_taxonomy.md           ← per-metric definitions (cache-hit ratio, excerpt ratio, etc.)
│   │
│   ├── lattices/                              ← LatticeScope's own lattice definitions
│   │   ├── tools/                             ← lattice validation
│   │   └── examples/
│   │       └── lattice_session_report.lattice.yaml   ← lattice that drives report generation
│   │
│   ├── metrics/                               ← NEW domain entity-type (D5 — propose to standard via skill_upstream_contribution)
│   │   ├── AGENTS.md                          ← protocol for metric definitions
│   │   ├── metric_token_profile.md            ← per-mission-type kT distribution
│   │   ├── metric_excerpt_ratio.md            ← LOC read / total LOC × cost
│   │   ├── metric_cache_hit_ratio.md          ← cache_read / (cache_read + cache_creation)
│   │   ├── metric_re_read_frequency.md        ← per-session re-read count
│   │   ├── metric_per_agents_md_heat.md       ← AGENTS.md load × per-load cost (gate row 2)
│   │   ├── metric_cross_vault_traversal.md    ← from_vault → to_vault hop depth + cost (gate row 7)
│   │   ├── metric_recipe_diff.md              ← recipe vs manual A/B (gate row 8)
│   │   └── metric_companion.yaml              ← D9 companion (structured query format)
│   │
│   └── benchmarks/                            ← NEW domain entity-type (D5)
│       ├── AGENTS.md
│       ├── benchmark_session_type_a.md        ← startup-only baseline
│       ├── benchmark_session_type_b.md        ← P3 sub-group baseline
│       ├── benchmark_session_type_c.md        ← planning-mission baseline (this session is one)
│       ├── community_submissions/             ← P2+ external operator contributions
│       └── registry.json                      ← community benchmark index
│
├── how/
│   ├── campaigns/                             ← LatticeScope-internal campaigns
│   │   └── campaign_lattice_scope_genesis/    ← MLS-0 vault bootstrap + collector hook + first baseline
│   ├── missions/
│   ├── sessions/
│   │   ├── active/
│   │   └── history/YYYY-MM/
│   ├── backlog/
│   ├── skills/
│   │   ├── AGENTS.md
│   │   ├── skill_collector_install.md         ← installs PostToolUse hook into operator's settings.json
│   │   ├── skill_baseline_run.md              ← runs §1 cold-start baseline (Type A/B/C) on this node
│   │   ├── skill_session_report.md            ← generates per-session token report
│   │   ├── skill_campaign_budget_report.md    ← generates per-campaign budget report
│   │   ├── skill_federation_submit.md         ← (P1+) submit anonymized metrics to community endpoint
│   │   └── skill_schema_migrate.md            ← run pending schema migrations from what/docs/schema_migrations/
│   └── templates/
│       ├── template_metric.md                 ← for new metric definitions
│       └── template_benchmark.md              ← for community benchmark submissions
│
├── who/
│   ├── coordination/
│   ├── governance/
│   │   ├── VISION.md
│   │   ├── role_lead_maintainer.md
│   │   └── policy_federation_etiquette.md     ← consumer-facing federation ground rules
│   └── community/
│       └── role_benchmark_submitter.md
│
└── deploy_manifest.yaml                       ← cross-vault publish config (per Obj 5 minimalism audit)
```

### Sibling code repo: `~/aDNA/latticescope/`

```
latticescope/
├── README.md
├── LICENSE                                    ← Apache-2.0
├── pyproject.toml                             ← Python; tooling: black, ruff, mypy, pytest
├── CHANGELOG.md
│
├── latticescope/                              ← Python package
│   ├── __init__.py
│   ├── cli.py                                 ← `latticescope` CLI entry-point
│   │
│   ├── collector/                             ← Claude Code PostToolUse hook integration
│   │   ├── __init__.py
│   │   ├── hook.sh                            ← bash hook (per [[m01_obj9_token_measurement_protocol.md|protocol §4]])
│   │   ├── hook_logic.py                      ← Python core (called from hook.sh for jq-free env)
│   │   └── self_test.py                       ← `--self-test` mode per protocol §4
│   │
│   ├── store/                                 ← SQLite-backed local store
│   │   ├── __init__.py
│   │   ├── schema.py                          ← schema constants (mirrors what/docs/schema_v0_1.sql)
│   │   ├── migrations/                        ← schema-version migrations
│   │   └── queries.py                         ← canonical query helpers
│   │
│   ├── reports/                               ← report generation
│   │   ├── __init__.py
│   │   ├── session_report.py
│   │   ├── mission_report.py
│   │   ├── campaign_budget_report.py
│   │   ├── per_agents_md_heat.py              ← gate row 2 metric
│   │   ├── cross_vault_traversal.py           ← gate row 7 metric
│   │   ├── recipe_diff.py                     ← gate row 8 metric
│   │   └── convergence_validation.py          ← protocol §3 hypothesis test
│   │
│   ├── federation/                            ← P1+ federation API
│   │   ├── __init__.py
│   │   ├── aggregator.py                      ← node-level anonymization
│   │   ├── schema/                            ← JSON-LD compatible federated metric schema
│   │   ├── api/                               ← FastAPI server
│   │   └── client.py                          ← submit-from-node client
│   │
│   ├── benchmarks/                            ← P2+ community benchmark library
│   │   ├── __init__.py
│   │   ├── load.py                            ← load benchmarks from registry.json
│   │   └── compare.py                         ← compare local profile against community benchmarks
│   │
│   └── dashboard/                             ← P2+ optional web dashboard (TypeScript via Astro)
│       └── README.md                          ← (separate dir; deferred until P2 maturity)
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/
│       └── synthetic_session.json             ← synthetic PostToolUse payload for self-test
│
├── docker/
│   └── docker-compose.yaml                    ← local reproduction env
│
└── docs/                                      ← MkDocs or Sphinx; auto-published
    ├── installation.md
    ├── cli_reference.md
    └── federation_quickstart.md
```

**Cross-repo coupling**: aDNA-vault ADR-002 pins schema-version and references SHA in `~/aDNA/latticescope/`. When schema bumps, both repos receive coordinated PRs (vault: ADR + new SQL DDL; code: migration script + Python schema constants). Standing Order: vault governs, code executes.

---

## §5 ADRs to seed at MLS-0 (vault bootstrap mission)

Four ADRs land at MLS-0 (the bootstrap mission of the LatticeScope sub-campaign). Each is **drafted in this M01 Obj 10 design** and **ratified at MLS-0** by the operator.

| ADR | Title | Status at MLS-0 | This artifact's role |
|---|---|---|---|
| **ADR-000** | Project identity — Platform.aDNA second-instance, Prometheus persona, sibling code repo at `~/aDNA/latticescope/` | proposed → ratified | Drafted in §1 + §2 + §3 of this artifact + companion persona spec |
| **ADR-001** | Language choice — Python primary; TypeScript later for optional dashboard | proposed → ratified | Drafted in §7 of this artifact (recommendation) |
| **ADR-002** | Schema design v0.1 — encodes Obj 9 → Obj 10 gate decisions verbatim | proposed → ratified | Drafted in §6 of this artifact |
| **ADR-003** | License policy — Apache-2.0 (code + vault) + CC-BY-4.0 (community benchmarks) | proposed → ratified | Drafted in §0 + §9 of this artifact |

**Forward-references** (deferred ADRs; drafted in subsequent missions of the sub-campaign):

- **ADR-004**: Federation protocol v0.1 — drafted at MLS-3 (federation API mission)
- **ADR-005**: Privacy framework — drafted at MLS-2 (collector hardening mission)
- **ADR-006**: Anchor paper publication channel — drafted at MLS-7 (P3 anchor paper mission)

---

## §6 v0.1 schema spec (gate-resolved)

This section is the substantive output of the Obj 9 → Obj 10 gate walked in S2 S6 (2026-05-08). Per the four operator decisions captured at the gate, the v0.1 schema extends the [[m01_obj9_token_measurement_protocol.md|protocol §4]] starting point with four resolutions:

| Gate row | §5 output | Decision | Schema impact |
|---|---|---|---|
| 2 | Per-AGENTS.md load cost heat map | Extend with `file_category` enum | New column on `tool_calls` |
| 5 | Cache-hit ratio per session type | Add `session_type` index | Index on `sessions.session_type` |
| 7 | Cross-vault context-graph traversal depth | Add `context_traversal` table (rich; richer than single column) | New table + FK |
| 8 | Recipe-vs-manual cost differential | Add `recipe_id` column | New nullable column on `tool_calls` |

The four other gate rows (1, 3, 4, 6) were Y at protocol §4 already — no change.

### Consolidated DDL (lives at `LatticeScope.aDNA/what/docs/schema_v0_1.sql`)

```sql
-- LatticeScope schema v0.1
-- Source of truth: aDNA.aDNA M01 Obj 10 vault design §6 + ADR-002 (LatticeScope.aDNA)
-- Gate-resolved at S2 S6 (2026-05-08): file_category + session_type idx + context_traversal + recipe_id

CREATE TABLE IF NOT EXISTS sessions (
  session_id   TEXT PRIMARY KEY,
  started_at   TEXT NOT NULL,
  vault        TEXT,
  campaign     TEXT,
  mission      TEXT,
  session_type TEXT  -- A | B | C | D | E | other
);

-- Gate row 5 resolution: queryable index for per-session-type rollups
CREATE INDEX IF NOT EXISTS idx_sessions_session_type ON sessions(session_type);

CREATE TABLE IF NOT EXISTS tool_calls (
  id                     INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id             TEXT NOT NULL,
  ts                     TEXT NOT NULL,
  tool                   TEXT NOT NULL,        -- Read | Bash | Edit | Write | AskUserQuestion | etc.
  input_tokens           INTEGER,
  output_tokens          INTEGER,
  cache_creation_tokens  INTEGER,
  cache_read_tokens      INTEGER,
  -- Per-tool optional fields
  file_path              TEXT,
  -- Gate row 2 resolution: file_category enum (NULL when not a Read/Edit/Write)
  file_category          TEXT CHECK (
    file_category IN ('claude_md', 'agents_md', 'state_md', 'mission', 'artifact', 'context', 'standard', 'skill', 'template', 'other')
    OR file_category IS NULL
  ),
  file_loc               INTEGER,
  read_offset            INTEGER,
  read_limit             INTEGER,
  re_read                INTEGER DEFAULT 0,    -- 1 if file_path was read earlier in same session
  -- Gate row 7 resolution: FK to context_traversal (NULL when not a cross-vault hop)
  traversal_id           INTEGER REFERENCES context_traversal(id),
  -- Gate row 8 resolution: recipe_id (NULL when manual / not recipe-driven)
  recipe_id              TEXT,
  FOREIGN KEY (session_id) REFERENCES sessions(session_id)
);

CREATE INDEX IF NOT EXISTS idx_tool_calls_session   ON tool_calls(session_id);
CREATE INDEX IF NOT EXISTS idx_tool_calls_file      ON tool_calls(file_path);
CREATE INDEX IF NOT EXISTS idx_tool_calls_category  ON tool_calls(file_category);
CREATE INDEX IF NOT EXISTS idx_tool_calls_recipe    ON tool_calls(recipe_id);

-- Gate row 7 resolution: cross-vault traversal as a separate richer table
-- (chosen over single-column for graph-query support and federation product alignment)
CREATE TABLE IF NOT EXISTS context_traversal (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id  TEXT NOT NULL,
  ts          TEXT NOT NULL,
  from_vault  TEXT,                 -- e.g., 'aDNA.aDNA'
  to_vault    TEXT,                 -- e.g., 'Spacemacs.aDNA'
  edge_type   TEXT,                 -- 'airlock' | 'reference' | 'context_recipe' | 'manual'
  hop_depth   INTEGER,              -- 1 = direct cross-vault read; 2+ = chained
  FOREIGN KEY (session_id) REFERENCES sessions(session_id)
);

CREATE INDEX IF NOT EXISTS idx_context_traversal_session ON context_traversal(session_id);
CREATE INDEX IF NOT EXISTS idx_context_traversal_vaults  ON context_traversal(from_vault, to_vault);
```

### Schema invariants

1. **Append-only**: no UPDATE statements in collector code; only INSERT. Past data immutable.
2. **No file content**: only metadata. PHI/secrets cannot leak through this schema.
3. **NULLs are legal**: `file_path`, `file_category`, `recipe_id`, `traversal_id` all NULL for non-applicable tools (e.g., AskUserQuestion has no file_path).
4. **Federation-aggregator-friendly**: per-row data can be anonymized by stripping `session_id`, `vault`, `campaign`, `mission` while retaining `session_type`, `tool`, token counts, `file_category`, `re_read`, `edge_type`, `hop_depth`.
5. **Schema version**: `PRAGMA user_version = 1` (set by migration script). Future bumps land in `schema_migrations/` with explicit upgrade paths.

### Mapping back to protocol §5 outputs

| §5 output | Query path |
|---|---|
| 5.a Per-mission-type kT distribution | `sessions JOIN tool_calls GROUP BY session_type` |
| 5.b Decomposition (startup% / work% / handoff% / SITREP%) | `tool_calls` + ts windowing per session |
| 5.c Top-3 optimization opportunities | derived: excerpt ratio, re-read freq, AGENTS.md heat |
| 5.d Convergence-model verdict | `tool_calls + sessions` grouped by mission level |
| 5.e Per-AGENTS.md heat map | `WHERE file_category = 'agents_md' GROUP BY file_path` |
| Gate row 7: cross-vault traversal | `context_traversal GROUP BY from_vault, to_vault` |
| Gate row 8: recipe vs manual | `WHERE recipe_id IS [NOT] NULL GROUP BY ...` |

All §5 + gate outputs are produceable by SQL against v0.1 schema. No post-hoc heuristics required.

---

## §7 System architecture

Per [[../mission_adna_infra_planning_01.md|mission spec]] §Obj 10 lines 668–683, refined here with gate-decision integration:

```
                       Operator's lattice node
                       ┌─────────────────────────────────────────────────┐
                       │                                                  │
  Claude Code session  │  ┌──────────────┐    ┌─────────────────────┐    │
  │ tool calls          │  │  Claude Code │───▶│ PostToolUse hook    │    │
  │                     │  │  (settings   │    │ (collector/hook.sh)  │    │
  ▼                     │  │   .json)     │    └────────┬─────────────┘    │
  Read/Edit/Write etc. ─▶  └──────────────┘             │ INSERT-only       │
                       │                                ▼                  │
                       │                       ┌────────────────────┐      │
                       │                       │ SQLite (store/)    │      │
                       │                       │ ~/.adna/           │      │
                       │                       │ measurement.sqlite │      │
                       │                       │  - sessions        │      │
                       │                       │  - tool_calls      │      │
                       │                       │  - context_        │      │
                       │                       │    traversal       │      │
                       │                       └─────────┬──────────┘      │
                       │           ┌─────────────────────┴───────┐         │
                       │           │                              │         │
                       │           ▼                              ▼         │
                       │  ┌────────────────┐         ┌────────────────────┐│
                       │  │ Reports        │         │ Aggregator (P1+)   ││
                       │  │ (reports/)     │         │ (federation/       ││
                       │  │  - session     │         │  aggregator.py)    ││
                       │  │  - mission     │         │  → strips session_ ││
                       │  │  - campaign    │         │     identifiers,   ││
                       │  │  - heat-map    │         │     vault names    ││
                       │  │  - traversal   │         └─────────┬──────────┘│
                       │  │  - recipe-diff │                   │           │
                       │  └────────────────┘                   │           │
                       └────────────────────────────────────────┼──────────┘
                                                                │
                                                                ▼ opt-in submit
                       ┌────────────────────────────────────────────────┐
                       │  Federation node (P1+, FastAPI server)         │
                       │  github.com/LatticeProtocol/latticescope-fed   │
                       │  - receives anonymized metrics                 │
                       │  - publishes community benchmarks (P2+)        │
                       │  - feeds anchor paper dataset (P3)             │
                       └────────────────────────────────────────────────┘
```

### Component responsibilities

| Component | Responsibility | Phase |
|---|---|---|
| `collector/hook.sh` | bash hook called by Claude Code; reads stdin payload; INSERTs row | P0 (MLS-1) |
| `collector/hook_logic.py` | re-read detection + file-LOC + file-category lookup | P0 (MLS-1) |
| `store/` | SQLite schema; query helpers; migration runner | P0 (MLS-1) |
| `reports/` | Pandas-driven report generation; markdown + JSON output | P0 (MLS-2) |
| `federation/aggregator` | strips identifiers; aggregates per submission window | P1 (MLS-3) |
| `federation/api` | FastAPI; OAuth2 device-flow auth; rate-limited; public read for benchmarks | P1 (MLS-4) |
| `benchmarks/` | community benchmark loader + comparator | P2 (MLS-6) |
| `dashboard/` | optional Astro/TS web dashboard | P2 (MLS-6, optional) |

### Language choice (ADR-001 recommendation: Python)

Per [[../mission_adna_infra_planning_01.md|mission spec]] line 713: *"Decision: recommend Python; record as ADR-001 in LatticeScope.aDNA"*. This artifact's recommendation aligns:

**Recommend Python** for collector + store + reports + federation:

- Fits existing `latlab/` and ML stack — operators with the lattice already have Python tooling configured.
- Rich SQLite ecosystem (`sqlite3` stdlib + `sqlmodel` if ORM is wanted).
- `tiktoken` and `llm-count` for token-estimation outside the API path.
- FastAPI for federation API — async, OAuth2 native, OpenAPI docs free.
- `pandas` for report aggregations.
- `pytest` + `hypothesis` for the schema-property tests that should ship at v0.1.

**Hybrid stance for dashboard (P2+)**: if a web dashboard is built, Astro/TypeScript is acceptable (matches SiteForge stack). The dashboard is optional and reads SQLite via a thin Python API layer — not a primary concern for v0.1.

---

## §8 10-dimension compliance pre-check

Per [[../mission_adna_infra_planning_01.md|mission spec]] lines 685–696, the design is pre-evaluated against the 10-dim compliance rubric. Self-scored at vault-bootstrap (MLS-0) snapshot — actual M07 audit will re-score post-execution.

| # | Dimension | Score (/5) | Notes |
|---|---|---|---|
| **D1** | Triad structure | **5** | Full who/what/how + appropriate extensions (`metrics/`, `benchmarks/`); paths match canonical structure |
| **D2** | Governance (CLAUDE.md, MANIFEST.md, STATE.md coherence) | **4** | All three present; CLAUDE.md cross-references the gate-resolved schema; STATE.md tracks collector deployment; MANIFEST.md needs ADR-000-driven content (drafted but not authored at vault-bootstrap) |
| **D3** | Frontmatter completeness | **4** | All authored files conform; `metrics/` + `benchmarks/` introduce new entity types that need schema-validation tooling (D5 dependency) |
| **D4** | FAIR metadata | **4** | Apache-2.0 + CC-BY-4.0 license bundle declared; creators block names Lattice Labs + community contributors; keywords (observability, context, agentic, telemetry, federation); identifier — DOI via Zenodo at P3 anchor-paper publication; provenance — this design doc + ADR-002 |
| **D5** | Type vocabulary (canonical I/O on modules) | **3** | New entity types `metric`, `benchmark`, `context_profile` not yet in canonical vocabulary; `skill_upstream_contribution` invocation needed at MLS-0 to extend vocab |
| **D6** | Versioning | **5** | Semver from v0.1.0; CHANGELOG from day one; schema-version pinned via `PRAGMA user_version` |
| **D7** | Federation | **5** | Federation IS the product; `discoverable: true`; federation_protocol.md is a P1 deliverable; opt-in semantics published from day one |
| **D8** | Registration | **3** | Skill lattices register to LatticeProtocol registry at v0.1.0 ship; non-skill entities (metrics, benchmarks) follow at P2 once schema stable |
| **D9** | Companions | **4** | YAML companions for `metrics/` + `benchmarks/`; not yet for `lattices/` (typically not needed there but reviewer call) |
| **D10** | Reproducibility | **3** | `docker compose up` plan exists; SQLite snapshot reproducibility planned for P2; v0.1 reproducibility-by-tarball-only |
| | **Total** | **40/50 (80%)** | |

**Total: 40/50 (80%)** — exceeds the §0 prediction of 38/50, anchored by the federation product (D7=5) and the schema-version discipline (D6=5). Underweighted dimensions: D5 (waiting on vocabulary extension), D8 (registration follows schema stability), D10 (full reproducibility lands at P2 with docker compose + snapshot).

**Comparison anchors**:
- node.aDNA Hestia design: 42/50 (per [[m01_obj3_node_adna_design.md|Obj 3]])
- LatticeScope (this): **40/50**
- RareHarness floor: 33 (per [[m01_obj7_repo_review_audit_findings.md|Obj 7 audit]] table — sub-checks)
- skill_git_remote_setup pattern: 32/35

LatticeScope sits at the high end. The federation discipline + schema discipline carry it; the new-vocabulary tax (D5) is the main drag.

---

## §9 Open-source strategy

### License bundle (ADR-003)

| Surface | License | Rationale |
|---|---|---|
| Code (`~/aDNA/latticescope/`) | **Apache-2.0** | Business-friendly; permissive; matches lattice-protocol; federation-appropriate (no copyleft propagation through metric submission) |
| Vault (`LatticeScope.aDNA/`) | **Apache-2.0** | Consistent with code; allows partner forks |
| Schemas + metric definitions (`what/docs/`, `what/metrics/`) | **Apache-2.0** | Forkable schemas; partners can extend without legal friction |
| Community-submitted benchmarks (`benchmarks/community_submissions/`) | **CC-BY-4.0** | Creative-commons standard for data; attribution preserved; downstream reuse allowed |
| Anchor paper draft (`what/docs/anchor_paper/`) | **CC-BY-4.0** | Standard academic-publication license; pre-print friendly |

The dual-license stance (Apache-2.0 for code + CC-BY-4.0 for benchmarks) mirrors [[../../../../../WilhelmAI.aDNA/CLAUDE.md|WilhelmAI ADR 002]]'s per-surface attribution rules — establishing a workspace-canonical pattern.

### Anchor paper

**Working title**: *"Context observability in distributed agentic collaboration networks"*

**Thesis**: Frontier-lab proprietary observability is sufficient for single-operator scenarios but produces folklore at the lattice scale. A federated, anonymized metric protocol — ratified by community benchmarks — provides public evidence for which agentic context patterns are token-efficient. This evidence base supersedes folklore in operator decision-making.

**Submission target**: workshop-track at NeurIPS or ICML (TBD); pre-print on arXiv concurrent; CC-BY-4.0 publication.

**Dataset companion**: federated benchmark snapshot at ratification, hosted on Zenodo with permanent DOI.

### Liberation axis

Per [[../mission_adna_infra_planning_01.md|mission spec]] lines 705–707:

1. **Operators see their own costs** — local-first; `latticescope` CLI runs on operator's node; no cloud dependency.
2. **Community builds public evidence** — opt-in federation; anonymized aggregates feed benchmarks.
3. **Decentralized alternative to frontier-lab proprietary observability** — schema is open; federation API is documented; partners can fork freely.

Each axis maps to a phase: P0 = axis 1; P1+P2 = axis 2; P3 = axis 3 (anchor paper makes the axis-3 claim formal and citable).

---

## §10 Bootstrap mechanism + workspace-router entry

### Workspace router (`~/aDNA/CLAUDE.md`) addition

Add a new row to the **Platform Ecosystem** table (per [[../../../../CLAUDE.md|aDNA.aDNA CLAUDE.md]]):

```markdown
| `LatticeScope.aDNA` | Prometheus | Context-cost observability — local SQLite collector + report templates + federation API + community benchmarks; v0.1 schema gates Obj 9→Obj 10 protocol findings | `LatticeScope.aDNA/` | `latticescope/` (TBD at MLS-0) | **Genesis** (sub-campaign opens at v2 P3) | (operators with active Claude Code sessions) |
```

The Platform Ecosystem section's lead paragraph promotes from RareHarness-singular to canonical-pattern, citing LatticeScope as the second instance (per §1).

### Bootstrap sequence (MLS-0 mission)

1. **Vault scaffold** — `cd ~/aDNA; cp -R .adna LatticeScope.aDNA; cd LatticeScope.aDNA` (post-flatten the .adna template is canonical).
2. **Persona installation** — overwrite CLAUDE.md with Prometheus identity per [[m01_obj10_prometheus_persona.md|persona spec]] §greeting + standing orders.
3. **ADR ratification** — author + sign ADR-000 (identity), ADR-001 (Python), ADR-002 (schema v0.1 — *encodes §6 verbatim*), ADR-003 (license bundle).
4. **Sibling code repo** — `cd ~/aDNA; mkdir latticescope; cd latticescope; uv init` (or equivalent); commit pyproject.toml + LICENSE + README; push to `github.com/LatticeProtocol/latticescope`.
5. **Schema DDL** — author `LatticeScope.aDNA/what/docs/schema_v0_1.sql` (verbatim from §6); cross-reference from ADR-002.
6. **Workspace router update** — add the Platform Ecosystem row above; update Standing Order #4 paragraph.
7. **MANIFEST.md / STATE.md / CHANGELOG.md / README.md** authored to project conventions.
8. **First baseline** — run [[m01_obj9_token_measurement_protocol.md|protocol §1]] Type C against MLS-0 itself (the bootstrap session is the first measured Type C).

After MLS-0 closes, the Platform.aDNA pattern spec at `RareHarness.aDNA/what/artifacts/rh_platform_pattern_spec.md` promotes to workspace-canonical (per §1).

### Forward-reference: M08a/M08b coordination

The [[m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide §4]] pre-announces LatticeScope. This vault design is consistent with that pre-announcement:

- **§4 LatticeScope description** ("local SQLite collector + report templates + federation API") — matches §7 architecture above ✓
- **§4 Persona Prometheus** — matches [[m01_obj10_prometheus_persona.md|persona spec]] ✓
- **§4 sibling code repo `latticescope/`** — matches §1 + §4 directory structure ✓
- **§4 sub-campaign doc seed reference** — points at [[m01_obj10_latticescope_sub_campaign.md|sub-campaign doc]] ✓
- **§4 v7.0 non-action** ("if you're interested in early adoption, watch STATE.md and the M10 mission") — matches: vault construction is post-v2 (sub-campaign at P3 phase gate) ✓

No edits to Obj 8 needed.

---

## §11 Self-reference + dual-audience (Standing Orders #7 + #8)

**Self-reference**: This vault design is itself authored *during* a session that LatticeScope (post-bootstrap) will measure. Specifically: this M01 S2 S6 session is a Type C planning session per [[m01_obj9_token_measurement_protocol.md|protocol §1]]; once the v0.1 schema lands and the collector hook is installed, this session's session_id (`session_stanley_20260508_230229_adna_v2_m01_s2_s6`) becomes the first Type-C row in the `sessions` table. The vault designs the system that will measure its own design session. Standing Order #8 satisfied recursively.

**Dual-audience**:

- **Developer reads**: §4 directory structure (filesystem layout), §6 schema DDL (executable SQL), §7 architecture diagram (component contract), §10 bootstrap sequence (8-step runbook), §8 10-dim score (compliance rubric). Direct, executable, reproducible.
- **Newcomer reads**: §0 summary table (one-screen orientation), §2 IS/IS-NOT (purpose), §3 persona reference (Prometheus mythology), §9 liberation axis (why this matters). Plain language; the *why* before the *how*.

Both audiences land at the same conclusion: **observability is a public good; LatticeScope makes it a buildable one**.

---

## §12 Cross-references

| Reference | Direction | Used by |
|---|---|---|
| [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01.md]] §Obj 10 (lines 641–722) | upstream | This artifact materializes Obj 10 |
| [[m01_obj9_token_measurement_protocol.md|m01_obj9_token_measurement_protocol.md]] §6 (gate) | upstream | Gate decisions encoded in §6 of this artifact |
| [[m01_obj3_node_adna_design.md|m01_obj3_node_adna_design.md]] | upstream / sibling | Hestia pairs with Prometheus; node.aDNA hosts the data |
| [[m01_obj7_repo_review_audit_findings.md|m01_obj7_repo_review_audit_findings.md]] AL-2 | upstream | Per-AGENTS.md heat map metric (gate row 2) addresses AL-2 directly |
| [[m01_obj8_upgrade_guide_v6_to_v7.md|m01_obj8_upgrade_guide_v6_to_v7.md]] §4 | sibling | Upgrade guide pre-announces; this design is consistent with it (§10) |
| [[m01_obj10_prometheus_persona.md|m01_obj10_prometheus_persona.md]] | sibling | Companion persona spec (deliverable 15) |
| [[m01_obj10_latticescope_sub_campaign.md|m01_obj10_latticescope_sub_campaign.md]] | sibling / downstream | Sub-campaign doc consumes this design |
| [[../../../../../RareHarness.aDNA/what/decisions/adr_000_project_identity.md|RareHarness ADR 000]] | upstream | Platform.aDNA pattern source; this is second instance |
| `~/aDNA/CLAUDE.md` Platform Ecosystem section | downstream | Workspace router gains a new row at MLS-0 |
| [[../../../../CLAUDE.md|aDNA.aDNA CLAUDE.md]] Standing Orders #2 / #7 / #8 | upstream | Self-reference + dual-audience invariants applied |
| [[../campaign_adna_v2_infrastructure.md|campaign master]] | upstream | Strategic intent + phase order |
| [[../../campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|v3 successor]] | downstream | M03-EC (publish-skill upgrade) may invoke `skill_collector_install` per-vault |
| [[../../../../../WilhelmAI.aDNA/CLAUDE.md|WilhelmAI]] ADR 002 | upstream | Per-surface attribution / dual-license precedent (§9) |

---

## §13 Status

**Complete.** This artifact ships as M01 deliverable 15 + 17 (deliverable 17 is the 10-dim pre-check section §8 within this same artifact).

Companion artifacts in this Obj 10 trio:
- Deliverable 15 persona spec: [[m01_obj10_prometheus_persona.md|m01_obj10_prometheus_persona.md]]
- Deliverable 16 sub-campaign doc: [[m01_obj10_latticescope_sub_campaign.md|m01_obj10_latticescope_sub_campaign.md]]

**Forward path**: Sub-campaign opens at v2 P3 phase gate (post-flatten, post-M08a/M08b shipping). MLS-0 ratifies ADRs 000–003; MLS-1 ships collector hook + SQLite store; MLS-2 ships report templates; MLS-3+ ships federation. v0.1 schema is locked as of S2 S6; schema bumps follow ADR-002 amendment process at LatticeScope.aDNA local.

**Gate status**: Obj 9 → Obj 10 gate **closed** at S2 S6 — all 4 contested rows resolved per recommendation. Two `?` rows promoted to Y; two `N` rows resolved with schema extensions. The schema in §6 is the canonical record of those resolutions.

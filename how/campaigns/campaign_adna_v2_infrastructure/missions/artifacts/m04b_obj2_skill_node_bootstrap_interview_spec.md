---
type: artifact
artifact_type: skill_spec
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_04b_workspace_ux_planning
session: session_stanley_20260512_200414_adna_v2_m04b_s1
skill_target_id: skill_node_bootstrap_interview
skill_class: agent
upstream_target: .adna/how/skills/skill_node_bootstrap_interview.md  # D5 resolved → upstream (future forks inherit)
implements_in_mission: M-LWX-01
composition_chain:
  - upstream: skill_project_fork.md (produces empty `node.aDNA/` from template)
  - this: skill_node_bootstrap_interview.md (fills operator-specific gaps)
  - downstream: skill_inventory_refresh.md (auto-detects structural fields)
created: 2026-05-12
updated: 2026-05-12
status: spec_complete
last_edited_by: agent_stanley
question_count: 19  # across 5 topics; meets M04b spec acceptance criterion ≥15
tags: [artifact, skill_spec, interview, dynamic_bootstrap, node_adna, hestia, hybrid_d1_b, upstream_d5_a, m04b, obj2]
related_artifacts:
  - m04b_obj1_dynamic_ux_gap_analysis.md  # input: 9 gaps mapped to 5 topics
  - m04b_obj3_lattice_obsidian_vault_spec.md  # sibling artifact
  - m01_obj3_node_adna_design.md  # authoritative source
  - aar_m04_node_adna_bootstrap.md  # items deferred informing interview scope
---

# M04b Obj 2 — Interview Skill Spec: `skill_node_bootstrap_interview.md`

> **Mission deliverable** for M04b Obj 2 per [[../mission_adna_infra_p1_04b_workspace_ux_planning.md|M04b spec §Objectives]]. Specifies the interview skill that fills the 7 strict gaps + 2 overlay gaps identified in [[m04b_obj1_dynamic_ux_gap_analysis.md|Obj 1 gap analysis]] via 19 questions across 5 topics. **D5 resolution**: this skill ships **upstream** to `.adna/how/skills/skill_node_bootstrap_interview.md` so every future fork inherits the interview capability — implemented by M-LWX-01.

---

## Skill identity

| Field | Value |
|---|---|
| **id** | `skill_node_bootstrap_interview` |
| **type** | `agent` (automated recipe) |
| **target path (upstream)** | `.adna/how/skills/skill_node_bootstrap_interview.md` |
| **trigger** | Invoked by workspace router Step 0.3 when operator accepts `node.aDNA/` bootstrap |
| **composes with** | `skill_project_fork.md` (upstream — produces vault) + `skill_inventory_refresh.md` (downstream — auto-detects structural state) |
| **operator persona** | Hestia (the node's own persona; warm + Feynman-clear by default) |
| **estimated runtime** | 4-7 minutes (operator-paced; ~19 questions; defaults speed it up) |

---

## Composition: where this skill fits

The interview skill is the **middle layer** of a 3-skill bootstrap chain:

```
operator runs `claude` in ~/aDNA/ for first time
  ↓
workspace router Step 0.2 detects no `node.aDNA/` (and operator has ≥1 .aDNA project)
  ↓
workspace router Step 0.3 asks: "Bootstrap node.aDNA?" — operator: yes
  ↓
┌─────────────────────────────────────────────────────────────────────┐
│ Step 1 — skill_project_fork.md (existing; project_name = `node`)    │
│         Output: empty `node.aDNA/` directory cloned from `.adna/`   │
└─────────────────────────────────────────────────────────────────────┘
  ↓
┌─────────────────────────────────────────────────────────────────────┐
│ Step 2 — skill_inventory_refresh.md (existing)                      │
│         Output: inventory_vaults.yaml + inventory_system.yaml       │
│         (auto-detected: 21 vaults, 11 named projects, tool versions,│
│         machine class, env-var NAMES, PATH summary)                 │
└─────────────────────────────────────────────────────────────────────┘
  ↓
┌─────────────────────────────────────────────────────────────────────┐
│ Step 3 — skill_node_bootstrap_interview.md (THIS SKILL; new)        │
│         Output: 19 operator answers written into 5 target files:    │
│           - MANIFEST.md (purpose, keywords, license override)       │
│           - identity_node.yaml (role, contact, git author,          │
│             persona_preferences, machine_class confirm, gpu,        │
│             peripherals, default_new_vault_license)                 │
│           - identity_lattice_protocol.yaml (peer-id, signing-key,   │
│             permission-set — or stays placeholder)                  │
│           - inventory_memberships.yaml (subscribed lattices,        │
│             federation overrides, marketplace interests)            │
│           - inventory_system.yaml (primary_languages / _ide /       │
│             _frameworks / services_connected overlays)              │
└─────────────────────────────────────────────────────────────────────┘
  ↓
┌─────────────────────────────────────────────────────────────────────┐
│ Step 4 — skill_node_health_check.md (existing)                      │
│         Output: validates vault state, exits 0 if healthy           │
└─────────────────────────────────────────────────────────────────────┘
  ↓
node.aDNA/ ready; operator returns to workspace
```

**Design discipline (D1=b hybrid)**: the interview NEVER re-asks what Step 2 (`skill_inventory_refresh.md`) already auto-detected. Auto-detected values surface in the interview as *confirmation prompts* or *defaults*, not as re-asks. The 19 questions target exactly the 7 strict gaps + 2 overlay gaps from Obj 1.

---

## Interview question table (19 questions × 5 topics)

Each row: question wording (operator-facing, in Hestia voice) · type · default · output target path · validation · branching.

### Topic 1: Purpose (2 questions)

| # | Question | Type | Default | Output target | Validation | Branching |
|---|---|---|---|---|---|---|
| **P1** | "What is this node for? (Describe in 1-3 sentences — e.g., 'Personal Mac for clinical research and ML experiments', 'Lab workstation for genomics pipelines', 'Edge node for sensor data collection'.)" | free-text | none (operator must answer; min 10 chars; if skipped, persists as `purpose: "unspecified"` with a comment) | `MANIFEST.md` `purpose:` + 1-sentence excerpt to `CLAUDE.md` persona-context paragraph | min length 10; max length 280 | — |
| **P2** | "Add 1-2 keywords for this node's primary use, beyond the standard 5 (`node, inventory, lattice_membership, host_state, hestia`)? (e.g., `clinical_research`, `edge_ml`, `gamedev`, `pure_dev`)" | multi-select with free-text add (0-3 selections) | empty (operator may skip) | `MANIFEST.md` FAIR `keywords:` (appended) | snake_case; max 3 additions | — |

### Topic 2: User-info (5 questions)

| # | Question | Type | Default | Output target | Validation | Branching |
|---|---|---|---|---|---|---|
| **U1** | "Confirm operator name detected from `git config user.name`: '{detected_value}'. Use this, or specify alternate?" | confirm-or-override | `{git config user.name}` else `${USER}` | `MANIFEST.md` `operator:` (already set; this confirms); `identity_node.yaml` `operator_alias:` | non-empty | If override: capture new value |
| **U2** | "What role do you primarily play on this node? (Pick one or specify Other.)" | single-select from `[data_scientist, software_engineer, researcher, clinician, student, designer, founder, devops, other]` | `software_engineer` | `identity_node.yaml` `role:` | required | If `other`: free-text |
| **U3** | "Default git author identity — same as operator name '{operator}'? Or different (e.g., legal name vs. handle)?" | single-select `[same, different]` | `same` | `identity_node.yaml` `git_author:` | — | If `different`: ask for alternate string in `Name <email>` format |
| **U4** | "Optional contact for cross-vault coordination memos: email / handle / leave blank for privacy default." | free-text or skip | skip | `identity_node.yaml` `contact:` (omitted if skipped) | if provided: must contain `@` or `/` | — |
| **U5** | "Hestia persona tone preference for greetings + responses: (a) default (warm + Feynman-clear) / (b) terse / (c) formal / (d) playful." | single-select | `default` | `identity_node.yaml` `persona_preferences.tone:`; reflected in `STATE.md` greeting style at next session | — | — |

### Topic 3: Stack (4 questions)

| # | Question | Type | Default | Output target | Validation | Branching |
|---|---|---|---|---|---|---|
| **S1** | "Auto-detected programming languages on this node: `{auto_detected_list}`. Mark your **primary** languages (the ones you actively work in; not just installed):" | multi-select from auto-detected list + free-text add | all auto-detected pre-selected | `inventory_system.yaml` `primary_languages:` overlay | ≥1 selection | — |
| **S2** | "Auto-detected IDEs / editors: `{auto_detected_list}`. Which is your primary?" | single-select from auto-detected | first detected (Spacemacs if present, else VSCode, else Cursor, else first) | `inventory_system.yaml` `primary_ide:` overlay | required | — |
| **S3** | "Primary frameworks / toolchains used regularly? (Auto-detect found: `{from venv/package.json/Cargo.toml/...}`. Add overlay or leave list as-is.)" | multi-select with free-text add | from auto-detect | `inventory_system.yaml` `primary_frameworks:` overlay | snake_case for free-text additions | — |
| **S4** | "Cloud / service providers connected (multi-select): AWS / GCP / Azure / GitHub / HuggingFace / Anthropic API / OpenAI API / Other." | multi-select with free-text add | none (auto-detect of cloud accounts is unreliable; operator declares) | `inventory_system.yaml` `services_connected:` overlay | — | If `Other`: free-text |

### Topic 4: Hardware (3 questions)

| # | Question | Type | Default | Output target | Validation | Branching |
|---|---|---|---|---|---|---|
| **H1** | "Confirm auto-detected machine class: '{detected}' (e.g., 'Apple Silicon Mac, 16-core, 64GB')." | confirm-or-override | auto-detected from `system_profiler SPHardwareDataType` (Mac) or `lscpu + free -h` (Linux) | `identity_node.yaml` `machine_class:` | non-empty | If override: capture alternate string |
| **H2** | "GPU info (model + memory). Auto-detected: '{detected_or_NONE}'." | confirm-or-override or `none` | auto-detected from `system_profiler SPDisplaysDataType` (Mac) or `nvidia-smi` (Linux) | `identity_node.yaml` `gpu:` | — | If `none`: omit field |
| **H3** | "Peripherals / setup notes (multi-monitor count, external storage, anything else worth recording): free-text or skip." | free-text or skip | skip | `identity_node.yaml` `peripherals:` | max 200 chars | — |

### Topic 5: Connections (5 questions)

| # | Question | Type | Default | Output target | Validation | Branching |
|---|---|---|---|---|---|---|
| **C1** | "Subscribe to any LP lattices at bootstrap? (Multi-select from known IDs, or `skip` to subscribe later via `latlab lattice pull`.)" | multi-select or skip | skip | `inventory_memberships.yaml` `subscribed_lattices:` | known lattice IDs only | — |
| **C2** | "Federate inventory observability with other nodes? (Default: NO — node-private posture per design.) If YES, you'll be asked which metrics to share." | yes/no | `no` (federation block stays `shareable: false / discoverable: false`) | `inventory_memberships.yaml` federation block (overrides if yes) | — | If `yes`: ask which metrics to share (multi-select: `tool_versions`, `vault_count`, `hardware_class`, `last_health_check`) + which nodes to federate with (free-text list of node-IDs) |
| **C3** | "LP-network identity: peer-id, signing-key path, permission-set. Leave blank if not yet joined to an LP network." | 3-field form or skip | skip (placeholders stay; `note: filled in when node joins LP network — TBD per LatticeProtocol release`) | `identity_lattice_protocol.yaml` `{peer_id, signing_key_path, permission_set}` | if any field provided: all 3 required | — |
| **C4** | "Marketplace categories of interest (for content-graph registry suggestions on the workspace HOME.md gallery — M-LWX-02 wires this): multi-select from `[decks, sites, video, comics, scientific_papers, code, clinical_research, design, other]`." | multi-select or skip | skip | `inventory_memberships.yaml` `marketplace_interests:` | snake_case | If `other`: free-text |
| **C5** | "Default license for new vaults you create on this node (informs `skill_project_fork.md` default; per-vault override always available): (a) **private** / (b) Apache-2.0 / (c) MIT / (d) CC-BY-4.0 / (e) other-SPDX." | single-select | `private` (matches `MANIFEST.md` FAIR `license: private`) | `identity_node.yaml` `default_new_vault_license:` (consumed by `skill_project_fork.md` post-this-mission) | valid SPDX identifier if `other` | If `other`: free-text SPDX |

**Question count check**: 2 + 5 + 4 + 3 + 5 = **19 questions across 5 topics** ≥ M04b spec acceptance criterion (15).

---

## Skill procedure (numbered steps)

When invoked (typically by workspace router Step 0.3 after operator accepts bootstrap):

1. **Verify preconditions**: `node.aDNA/` exists (forked by `skill_project_fork.md`); `inventory_vaults.yaml` + `inventory_system.yaml` exist (auto-detected by `skill_inventory_refresh.md`). If any precondition fails, exit with `EXIT 2: precondition_unmet`.
2. **Greet operator in Hestia voice**: "Welcome to your new node vault. I'm Hestia — the hearth-keeper. Let me ask 19 quick questions to fill in the operator-specific fields. Most have sensible defaults; press Enter to accept. We'll be done in 4-7 minutes."
3. **Run Topic 1 (Purpose, P1-P2)** → write to `MANIFEST.md` `purpose:` + FAIR `keywords:` (appended).
4. **Run Topic 2 (User-info, U1-U5)** → write to `identity_node.yaml`; reflect persona tone in `STATE.md` Hestia greeting block.
5. **Run Topic 3 (Stack, S1-S4)** → write to `inventory_system.yaml` overlay fields.
6. **Run Topic 4 (Hardware, H1-H3)** → write to `identity_node.yaml` `machine_class` / `gpu` / `peripherals`.
7. **Run Topic 5 (Connections, C1-C5)** → write to `inventory_memberships.yaml` + `identity_lattice_protocol.yaml`.
8. **Apply C5 license override**: if operator chose anything other than `private`, update `MANIFEST.md` FAIR `license:` accordingly and emit a one-line note in `CHANGELOG.md` v0.1 entry.
9. **Show summary**: 19 answers in a single readable block; ask "Confirm and continue, or revise any?" — if revise, jump back to specific question by ID (P1/U2/S1/etc.).
10. **Commit answers**: write all file mutations atomically (track via `files_modified:` in session log); produce summary report.
11. **Hand off to `skill_node_health_check.md`** — run validator; if exit 0, bootstrap complete; if exit >0, surface drift to operator.
12. **Exit codes**:
    - `0` — interview complete; all 19 questions answered (or skipped per skip-eligible rules); vault healthy
    - `2` — precondition unmet (fork or inventory_refresh didn't run)
    - `3` — operator aborted mid-interview (partial state captured; resumable via re-invocation; flag `#interview_partial` in session log)
    - `4` — write conflict (an in-flight session is editing one of the target files; operator must resolve)

---

## Output schema: which answers map to which files

| Output file | Fields written | Source questions |
|---|---|---|
| `MANIFEST.md` | `purpose:`, FAIR `keywords:` (appended), FAIR `license:` (overridden iff C5 ≠ private) | P1, P2, C5 |
| `STATE.md` | Hestia greeting tone (subtle — affects future session greetings) | U5 |
| `who/identity/identity_node.yaml` | `operator_alias`, `role`, `git_author`, `contact`, `persona_preferences`, `machine_class`, `gpu`, `peripherals`, `default_new_vault_license` | U1, U2, U3, U4, U5, H1, H2, H3, C5 |
| `who/identity/identity_lattice_protocol.yaml` | `peer_id`, `signing_key_path`, `permission_set` (or stays placeholder) | C3 |
| `what/inventory/inventory_system.yaml` (overlay fields) | `primary_languages`, `primary_ide`, `primary_frameworks`, `services_connected` | S1, S2, S3, S4 |
| `what/inventory/inventory_memberships.yaml` | `subscribed_lattices`, federation block overrides, `marketplace_interests` | C1, C2, C4 |
| `CLAUDE.md` (1-sentence excerpt) | persona-context paragraph (after Identity & Personality block, before Operating Style) | P1 (excerpt) |
| `CHANGELOG.md` | v0.1 entry footnote noting interview completion + non-default license if applicable | (always; C5 footnote) |

**Files NOT touched by this skill**: any partner vault; the workspace router (`/Users/stanley/aDNA/CLAUDE.md`); the upstream template (`/Users/stanley/aDNA/.adna/`); `node.aDNA/AGENTS.md`, `README.md`, `CHANGELOG.md` body, all `AGENTS.md` protocol stubs, all 4 node-skills, both protocol AGENTS.md, `inventory_vaults.{md,yaml}`, `inventory_memberships.md` (the .md narrative — only the YAML companion is mutated).

---

## Composition contract (interlock with existing skills)

| Upstream skill | Contract |
|---|---|
| `skill_project_fork.md` | MUST run first; produces empty `node.aDNA/` with template defaults. This skill assumes the template structure is intact (CLAUDE.md, MANIFEST.md, STATE.md, AGENTS.md, README.md present). |
| `skill_inventory_refresh.md` | MUST run before this skill (Step 2 of the chain). Auto-detected values from `inventory_system.yaml` are consumed as **defaults** for S1-S4 and H1-H2. If `inventory_system.yaml` is missing, this skill falls back to live re-detection but logs a `#fallback_inventory_refresh_not_run` flag in the session. |

| Downstream skill | Contract |
|---|---|
| `skill_node_health_check.md` | MUST run after this skill; validates that all 19 written fields parse correctly (yaml.safe_load passes) + that no required field is left as `agent_init` placeholder. |
| `skill_project_fork.md` (future invocations) | Reads `identity_node.yaml` `default_new_vault_license:` (from C5) as the default `license:` for new forks. |

---

## D5 resolution: upstream

**Decision**: this skill ships **upstream** to `.adna/how/skills/skill_node_bootstrap_interview.md` (per D5=a, decide-per-design; this artifact resolves to upstream).

**Rationale**:
- Every future fork of the v7.0+ template should inherit the interview capability — the skill is workspace-router-invoked (workspace router Step 0.3) and the router itself lives in the template via `.adna/CLAUDE.md` cross-project routing hook (`e3b3bcc`).
- The interview's value compounds with template adoption: the more vaults are forked from `.adna/`, the more operators benefit from the hybrid-interview UX at first-`claude` invocation.
- Risk profile: low — the skill is additive, non-destructive (writes only to a freshly-forked `node.aDNA/` that the operator just consented to bootstrap); failure modes are recoverable (exit 3 partial state is resumable).

**Implementation venue**: M-LWX-01 (Dynamic node.aDNA bootstrap interview implementation) — single upstream commit to `LatticeProtocol/adna` adding `.adna/how/skills/skill_node_bootstrap_interview.md` + 1 update to `.adna/how/skills/AGENTS.md` (skill index). Pattern precedent: ADR-008 airlock template stub (single-commit additive change) + `e3b3bcc` cross-project routing hook (single-commit additive change). Two prior instances; this becomes the third.

**Update to workspace router Step 0.3 prompt**: instead of the current static "Would you like me to bootstrap one now via `skill_project_fork`?", change to "Would you like me to bootstrap one now? I'll ask 19 quick questions (4-7 min) to fill in operator-specific fields, then auto-detect the rest." — single string change in `~/aDNA/CLAUDE.md` Step 0.3.

---

## Hestia voice register

The skill's operator-facing prompts use Hestia voice (per `node.aDNA/CLAUDE.md` lines 18-61). Reference phrases:

- Greeting: "Welcome to your new node vault. I'm Hestia — the hearth-keeper."
- Confirmation: "Got it. Noted." (terse default per U5=a)
- Clarification: "Let me make sure I have this right — you said `{paraphrased answer}`. Correct?"
- Completion: "All 19 answers captured. Running `skill_node_health_check.md` now to confirm the vault is healthy. Welcome home."
- Error: "Hmm, that didn't parse — `{validation_error_brief}`. Can you re-state?"

Tone presets via U5:
- (a) default → warm, terse, occasional Feynman-clear analogy
- (b) terse → no greeting fluff; pure prompts; no analogies
- (c) formal → "Operator," prefix; complete sentences; no contractions
- (d) playful → light humor; emoji-eligible (operator-opt-in)

---

## Self-reference (Standing Order #2)

This skill spec demonstrates the hybrid-bootstrap principle by *enacting* it: the spec itself uses the exact pattern the skill ships — auto-detect what's auto-detectable (the 23 of 32 items from Obj 1), hardcode what's universal (the persona spec, the protocol stubs), and interview only what's operator-specific (the 7 + 2 gaps). The 5-topic question structure mirrors the 5 information dimensions an Org-Vault operator brings to any new node: identity (who am I), purpose (why this node), capabilities (what's on it), surroundings (what's it talking to), and tone (how do I prefer to interact).

Were the same interview spec written for `aDNA.aDNA/` or any other Org-Vault, the *structure* (5 topics, hybrid discipline, composition with fork + inventory_refresh) would be identical; only the question wording would shift (a campaign-vault interview wouldn't ask about hardware, for instance). The framework generalizes — that's the test.

The dual-audience discipline (Standing Order #7) is exercised: the 5-topic question table is accessible to any operator (the questions are in plain language with sensible defaults); the procedure + composition contract + output schema are technically precise for the M-LWX-01 implementer.

---

## Cross-references

| Reference | Direction |
|---|---|
| [[../mission_adna_infra_p1_04b_workspace_ux_planning.md|M04b mission spec]] §Obj 2 | parent objective |
| [[m04b_obj1_dynamic_ux_gap_analysis.md|Obj 1 gap analysis]] | input — 7 + 2 gaps mapped to topics + question count forecast |
| [[m04b_obj3_lattice_obsidian_vault_spec.md|Obj 3 Obsidian vault spec]] | sibling — shares D5 per-artifact resolution discipline |
| [[m01_obj3_node_adna_design.md|M01 Obj 3 design]] §3 Hestia + §4 directory structure | authoritative source for output target paths |
| [[../../../how/skills/skill_project_fork.md|skill_project_fork.md]] (template) | upstream composition partner |
| [[../../../how/skills/skill_inventory_refresh.md|skill_inventory_refresh.md]] (template) | downstream composition partner (auto-detect engine) |
| `node.aDNA/how/skills/skill_node_health_check.md` | post-interview validator |
| `node.aDNA/how/skills/skill_node_credentials_audit.md` | adjacent — NAMES-ONLY redaction is a related discipline (interview never asks for credential values) |
| [[../../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] | naming-convention constraint; this skill never re-asks the operator to confirm `node` is a valid name |
| [[../../../how/skills/skill_upstream_contribution.md|skill_upstream_contribution.md]] | D5 upstream discipline reference |
| `campaign_lattice_workspace_ux/missions/mission_lwx_01_*.md` (TBD) | implementer of this spec |

---

## Status

**Spec complete.** 19 questions × 5 topics, each with type / default / output target / validation / branching specified. D5 resolution: upstream (`.adna/how/skills/`). Composition contract with `skill_project_fork.md` + `skill_inventory_refresh.md` + `skill_node_health_check.md` defined. Ready for M-LWX-01 implementation.

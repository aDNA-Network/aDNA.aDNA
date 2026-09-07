---
type: artifact
artifact_class: cohort_manifest
campaign_id: campaign_agent_harness_cohort
campaign_phase: 1
created: 2026-09-07
updated: 2026-09-07
last_edited_by: agent_fable_polyglot
status: active
status_note: >-
  ⛩ Chartered on four operator rulings taken 2026-09-06 (plan review, AskUserQuestion of
  record): R1 OpenAI credentials brokered via Home C07 refresh (new account
  science.stanley@stanley.science; value stash operator-owed) · R2 FULL build depth (stubs
  + missions + Canvas openai backend + Context codex_sessions source, same sitting) ·
  R3 SS OpenAI-image-lane GO ($10 initial cap, operator may amend) · R4 fork now, seam
  memos staged, seams ratified at each graph's P0 (Keystone/Dynamo precedent chosen over
  the stricter seam-memo-first).
tags: [artifact, cohort_manifest, agent_harness, codex, claude_code, software_element_graph, polyglot]
---

# Agent-Harness Cohort Manifest — Operation Polyglot

Paradigm: `pattern_software_element_context_graph` (ADR-039 umbrella; ADR-037 SDG subtype;
ADR-045 wrapper placement). Skeleton: `template_software_graph_stub` seeded lean
(Kubernetes.aDNA model — 18-file class; the Hardware full-scaffold fork and its
de-template mission M04 are the recorded anti-precedent). Precedent instruments: the
Dynamo cohort manifest + the Keystone deconfliction ledger.

**Codename grep-clearance**: `grep -ril "Operation Polyglot" ~/aDNA` → 0 hits, 2026-09-07.

## Disposition vocabulary

SEED · SCOPE (overlap exists; seam drawn in ADR-000, ratified at P0) · ENRICH · DEFER ·
DO-NOT-CREATE. Both cohort members are **SEED with SCOPE-class overlaps recorded** (R4
chose fork-now over seam-first; the seam memos are staged, the P0 gates carry the acks).

## Cohort roster

| # | Target | Graph | Disposition | Category | Persona pin | Class | State (2026-09-07) |
|---|--------|-------|-------------|----------|-------------|-------|--------------------|
| 1 | GPT Codex (CLI + Desktop) | `Codex.aDNA` | SEED (+SCOPE: Terminal, Obsidian, Harness) | Platform · SDG (working) | **Cassiodorus** (working-pin) | genesis_planning_stub | Software LIVE on-node: 0.153.4, `~/.codex/` logging since ≥2026-09-06; graph seeded this sitting |
| 2 | Claude Code | `ClaudeCode.aDNA` | SEED (+SCOPE: RareAnthropic ⚠sharpest, Harness, Terminal, Obsidian) | Platform · SDG (working) | **Achates** (working-pin) | genesis_planning_stub | Software LIVE fleet-wide: 2.1.185 primary harness; 57 template `what/context/claude_code/` copies = the founding parallel-truth problem; graph seeded this sitting |

Successor-cohort candidate (named, NOT chartered): open-harness local agents
(OpenHarness-class / local-model CLIs) — revisit when one is installed as a daily lane.

## Per-target blocks

### 1 · Codex.aDNA (Cassiodorus)

- **State (evidence)**: `~/.codex/` — `config.toml`, `hooks.json`, `history.jsonl`,
  `logs_2.sqlite`, `sessions/2026/09/06/rollout-*.jsonl` (51 files); `codex --version` →
  `codex-cli 0.153.4`; account `science.stanley@stanley.science` (Home C07/C48).
  Registered in `Home.aDNA/what/inventory/inventory_system.{md,yaml}` 2026-09-07.
- **Purpose (one line)**: the context graph for installing, configuring, operating, and
  optimizing GPT Codex on lattice nodes, and for making Codex an aDNA-native harness.
- **Boundary/seam**: Terminal.aDNA owns the multi-harness adapter + provider-contract
  patterns and the shell (Codex `sandbox_mode` heuristic, 8 KB skill truncation live in
  Berthier's `pattern_multi_harness_adapter.md` — this graph CONSUMES, never re-authors);
  Obsidian.aDNA owns the `codex` terminal profile; Harness.aDNA builds first-party
  harnesses (this graph governs a third-party vendor CLI); Context.aDNA owns telemetry
  transport (the `codex_sessions` passive source registered same-sitting is Prometheus's,
  consumed by reference).
- **Composition edges**: root `/Users/stanley/aDNA/AGENTS.md` is the Codex-flavored
  router mirror — Codex-the-CLI's actual entry point to the lattice, and this graph's
  natural first consumer. ⚠ Flagged so a future grep doesn't misread its "Codex" strings
  as a pre-existing graph claim (they are an agent-name substitution artifact).
- **Wrappers**: git (commit_pin `a2b00a6`) · feedback (spec 0.1.0, default-OFF,
  `consent_grant: null` honest-absent) · iii (0.6.0 @ `be7dba1`) · credential routing
  (broker Home; C07 `OPENAI_API_KEY` names-only).
- **Open questions `#needs-human`**: none at seed beyond the P0 gate itself.

### 2 · ClaudeCode.aDNA (Achates)

- **State (evidence)**: `claude` 2.1.185 (`Home.aDNA/what/inventory/inventory_system.yaml:34`);
  C41 Keychain rows + finding F11 (multiple installs, deferred-as-backlog);
  transcript-residue posture `Home.aDNA/what/context/claude_code/context_transcript_residue_posture.md`
  (cited from `inventory_secret_surfaces.yaml`); template topic
  `.adna/what/context/claude_code/` (4 files: config_cascade, hook_system,
  memory_integration, vault_architecture) replicated in ~57 graphs.
- **Purpose (one line)**: the context graph for installing, configuring, operating, and
  optimizing Claude Code across the fleet — the canonical home the 57 scattered copies
  eventually point to.
- **Boundary/seam**: **RareAnthropic.aDNA (Hygeia) — the sharpest seam**: Hygeia owns
  Anthropic-as-vendor (policy, retention, HIPAA/BAA, Skills governance) for the
  rare-disease working group and holds ~15 load-bearing Claude Code policy nodes; this
  graph owns Claude-Code-as-software (install/config/operate/author). Her charter treats
  stale guidance as a patient-safety failure — duplicate truth here is not cosmetic. Drawn
  in ADR-000 exactly as React drew its TypeScript seam. Also: Harness (first-party vs
  vendor), Terminal (adapter/shell), Obsidian (profiles), Context (telemetry:
  `claude_code_transcripts` is already Prometheus's source #2).
- **The founding cleanup job**: canonicalize-vs-57-copies runs **through Rosetta**
  (`skill_template_release`; Standing Rule 1 forbids editing `.adna/` directly). Until
  that mission runs, the template topic is the QUARRY and this graph claims nothing
  canonical — the anti-pattern being avoided is "parallel truth", and prematurely claiming
  canonical would instantiate it.
- **Wrappers**: same four as Codex.aDNA (identical pins, taken same sitting).
- **Open questions `#needs-human`**: does the template topic deprecate to pointers at
  canonicalization, or stay as a synced snapshot? (Rosetta's call, at the M00-designed
  mission's gate.)

## Adjudications

### §DP-1 — Fork order vs seam acks
| Shape | What it means |
|---|---|
| A. Fork now, seams at P0 | Stubs seeded immediately, no-claims SOs; memos staged; acks land at each P0 |
| B. Seam-memo-first | Fork only after all four owners ack (Ray→Galileo precedent) |
| C. Single combined graph | One `AgentHarness.aDNA` covering both CLIs |

Recommendation: A (single-operator node; Dynamo precedent; C rejected — P-3 two-tier
naming makes each software-named brick its own graph, and the two have asymmetric seams).
Named failure mode of A: an owner objects post-fork → mitigation: the stubs claim nothing
and mutate nothing, so an objection costs a rename/re-scope, not an unwind.
**Ratification: Decision A · ratified-by stanley (operator) · 2026-09-06 · ratified.**

### §DP-2 — Category
| Shape | What it means |
|---|---|
| A. Platform · SDG (working pin) | operate-face: install/configure/operate a vendor CLI on nodes (Obsidian/Warp relation) |
| B. `tbd_at_p0` | defer wholly (Hardware precedent) |
| C. Framework | conform-face (authoring standard) |

Recommendation: A as working pin, P0 ratifies with no silent third option (C is wrong —
these graphs govern operating software, not a conformance standard; the adapter standard
is Terminal's). **Ratification: Decision A (working pin; P0 confirms) · ratified-by
stanley (operator, via R4's fork-now ruling) · 2026-09-06 · working_pin.**

### §DP-3 — Personas
Collision greps run 2026-09-07 fleet-wide incl. `Archive.aDNA` + reserved names
(Haussmann · Lannes · Aeacus · Noctua): **Cassiodorus** free (⛔ first choice **Tiro
REJECTED** — claimed by `emails.aDNA` on the Jake node since 2026-08-04, the same
amanuensis mapping; recorded fallback **Isidore** of Seville, free, second because
encyclopedist-not-scribe) · **Achates** free (fidus Achates — the ever-present trusted
companion-agent; recorded fallback **Patroclus**, free, second because his myth-weight is
the companion's death, not his service). Working pins; ratify at P0.

## Seed register

| Graph | Persona | Fork method | First mission | State (2026-09-07) |
|---|---|---|---|---|
| `Codex.aDNA` | Cassiodorus | lean stub authored (Kubernetes model; ADR-009 §4 PascalCase override) | M00 charter-and-design (fable) | seeded, local git, router row STAGED |
| `ClaudeCode.aDNA` | Achates | same | M00 charter-and-design (fable) | seeded, local git, router row STAGED |

## Wrapper-conformance audit

| Graph | git | feedback | iii | cred routing | Verdict |
|---|---|---|---|---|---|
| Codex.aDNA | commit_pin `a2b00a6` | 0.1.0, default-OFF, grant null | 0.6.0 @ `be7dba1` | snippet in CLAUDE.md (C07 names-only) | PASS |
| ClaudeCode.aDNA | commit_pin `a2b00a6` | 0.1.0, default-OFF, grant null | 0.6.0 @ `be7dba1` | snippet in CLAUDE.md (C41 names-only) | PASS |

No retired keys (`path:` / `pin: genesis`) anywhere — seeded on the post-refit schema
directly (Dynamo mission_refit_m05 lesson absorbed at seed rather than repaired later).

## §Asymmetry (standing — the two M00s will not produce symmetric campaigns)

ClaudeCode.aDNA: vendor Org-Graph peer (RareAnthropic) + 57 template copies + the network's
primary-harness operational history → its campaign is heavy on canonicalization,
policy-seam discipline, and consolidation. Codex.aDNA: no vendor graph, no template
copies, 3-day-old on-node history → its campaign is heavy on greenfield research,
aDNA-native integration (AGENTS.md routing), and parity-with-ClaudeCode analysis. A shared
mission ladder imposed on both would be wrong for each.

## Gate riders (operator questions beyond dispositions)

| Rider | Question | Default if unruled |
|---|---|---|
| GR-1 | Insert the two router rows now, or as one cohort row (Dynamo Gate-2 style)? | Rows stay STAGED |
| GR-2 | Should root `AGENTS.md` (the Codex-flavored router) gain a pointer to `Codex.aDNA` at row-insertion time? | No edit (it regenerates from the router; note filed in Codex quarry) |

## Provenance

Recon: three parallel read-only sweeps, 2026-09-06 (this session; standard/genesis
conventions · OpenAI/Canvas/SS surfaces · Context/analytics), every claim path-cited.
Seeded 2026-09-07. Dated-state discipline: every roster row carries its date; re-read at
the object, not from this file.

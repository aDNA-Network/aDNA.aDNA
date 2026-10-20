---
type: spec
kind: ecosystem_spec
name: platform_ecosystem
created: 2026-05-20
updated: 2026-10-20   # v0.5 at ARCADE G4 (operator R43, gate row B5): the threat-model hook's trigger repointed to its live home (Terminal.aDNA idea file); nothing else changed. Prior: v0.4 delta ACCEPTED at ARCADE G1 (operator R11; §7.7 below); authored 2026-10-15 — ARCADE A1.2: §Access points (Exchange · Terminal, tense-labelled) + the recommended-default note; §Terminal ↔ Harness Contract at today's names; v0.3 2026-07-02
version: "0.5"
version_status: "v0.5 ACCEPTED — ARCADE G4, 2026-10-20 (operator R43; one pointer). Prior: v0.4 ACCEPTED — ARCADE G1, 2026-10-16 (operator R11; §7.7 below); supersedes v0.3 (2026-06-27, aDNA.aDNA ADR-041)"
status: active
last_edited_by: agent_rosetta
tags: [spec, ecosystem, platform, aDNA_pattern, access_points, v0_4_accepted, arcade]
extraction_source: ~/aDNA/CLAUDE.md lines 178-190 (extracted at compliance campaign M01)
co_signed_adr: aDNA.aDNA/what/decisions/adr_012_ecosystem_spec_extraction.md
co_signed_adr_v0_4: aDNA.aDNA/what/decisions/adr_064_graph_exchange_spec_placement.md   # accepted 2026-10-16 (ARCADE G1) — the access-point section cites the Exchange contract it places
---

# Platform Ecosystem

Authoritative reference for the **Platform.aDNA** aDNA pattern category. Workspace router (`~/aDNA/CLAUDE.md`) carries only a pointer to this spec.

## Definition

**Platforms** are a separate aDNA category (new as of 2026-04-17 per `RareHarness.aDNA/what/decisions/adr_000_project_identity.md`). A Platform.aDNA project governs a **deployable software system** with accompanying domain knowledge, safety framework, and partner-deployment topology. Unlike forges, platforms produce a *running service* at partner institutions — not generated artifacts.

## Vault + Code Split

Each platform pairs a governance vault (`<Name>.aDNA/`) with a sibling code repo (peer to `latlab/`, `lattice-protocol/`). The vault owns design, safety, clinical context, deployment topology, partner profiles, ADRs; the code repo owns the runtime implementation. Coordinated PRs keep the two in sync.

**Variant**: VideoForge Amendment 1 (2026-05-12) introduces the **single-repo per VideoForge Amendment 1** pattern — code lives inside the vault as a `what/<platform>/` directory (code-as-WHAT-object), standalone-deployable. Adopted by `LatticeTerminal.aDNA` + `LatticeAgent.aDNA` + `Cmux.aDNA`.

## Software / Deployment-Graph Platforms (subtype)

*(Added v0.2, 2026-06-20 — Operation Keystone P0. Co-signed [[../decisions/adr_037_software_deployment_graph_subtype|ADR-037]].)*

A **software/deployment-graph** is a Platform.aDNA carrying `platform_subtype: software_deployment_graph` — **one piece of software per graph**, owning that software's **install · operate · configure · update · interoperate**, and **federating** four cross-cutting wrappers rather than duplicating them:

| Wrapper | Owner | Binds |
|---------|-------|-------|
| `how/federation/git/` | Git.aDNA (Hopper) | git-ops / forge / CI-CD |
| `how/federation/feedback/` | aDNA.aDNA (Rosetta) — [[spec_telemetry_feedback_ecosystem]] | opt-in deploy-signal loop (default-OFF) |
| `how/federation/iii/` | III.aDNA (Argus) | inspect / introspect / improve |
| Home.aDNA credential routing | Home.aDNA (Hestia) | names-only secret brokering (Standing Rule 6) |

> **Wrapper location (pinned — [[../decisions/adr_045_wrapper_placement_in_triad|ADR-045]]):** these wrappers live under `<graph>/how/federation/{git,feedback,iii}/`, not at graph root — they are operations the graph *invokes*, so they belong under `how/`. ("Federation" here = the `federation_ref` consumer-wrapper layer; distinct from network/node federation, owned by `Network.aDNA` / Venus.)

A deployment graph is **composed, not free-standing** — a role graph such as `Lighthouse.aDNA` assembles a chosen set into a deployable node. This is a **designation within Platform.aDNA, not a new aDNA category**; `Warp.aDNA`, `Obsidian.aDNA`, `Lab.aDNA`, and `ComfyUI.aDNA` (ruled-in by the Corps ⛩ M-C6 retrofit 2026-07-02, rather than born-in by Keystone genesis) are pre-existing instances. Pattern: [[pattern_software_deployment_graph]]. Conformance test + the `Network.aDNA` recipe-quarry reconciliation (recipes = source-quarry, graph = canonical home): [[../decisions/adr_037_software_deployment_graph_subtype|ADR-037]]. Tier roster + dispositions: Operation Keystone (`how/campaigns/campaign_keystone/`). A deployment graph is the *deploy-and-run → operate* face of the [[pattern_software_element_context_graph|software-element context graph]] umbrella ([[../decisions/adr_039_software_element_context_graph_umbrella|ADR-039]]) — the same wrapper + `federation_ref` access mechanism Forges and Frameworks use, composed by a role-graph (`Lighthouse.aDNA`) into a node.

## Build-scale role-graph (subtype)

*(Added v0.3, 2026-06-27 — operator naming ruling 2026-06-25. Co-signed [[../decisions/adr_041_build_scale_role_graph_subtype|ADR-041]].)*

The **build-scale twin** of the deployment role-graph. A Platform.aDNA carrying `platform_subtype: build_scale_role_graph` composes **build-face** software-element graphs (Forge = produce-with; Framework = conform-with) into a built artifact — website / dashboard / ops-center — and owns the role-shared assets no brick can home (archetypes, build lattices, content / voice / token / anti-slop doctrine, the site-quality gate framework, deploy orchestration). `WebForge.aDNA` (was `Websites.aDNA`, renamed 2026-07-02; Vitruvius) is the reference instance; it composes `Astro.aDNA` + `TypeScript.aDNA` + `Tailwind.aDNA` + `III.aDNA` (+ deploy). Build-face contract (mirrors the deploy face): **three wrappers** (`how/federation/git/` · `how/federation/iii/` · `how/federation/feedback/` with build-face signal classes) + a names-only credential note; **five verbs** author · compose · validate · version · interoperate; seam memos for overlapping bricks. Conformance + relationship to the deploy-scale twin: [[../decisions/adr_041_build_scale_role_graph_subtype|ADR-041]]. It is the *build-with → compose* face of the [[pattern_software_element_context_graph|software-element context graph]] umbrella ([[../decisions/adr_039_software_element_context_graph_umbrella|ADR-039]]).

## Terminal ↔ Harness Contract

Terminal platforms (`Terminal.aDNA` — the live Python/Textual console; before it the archived LatticeTerminal HUD and the archived Go console of the Cmux lineage) and harness platforms (`Harness.aDNA` (`rareharness`), plus `Claude Code`/`OpenCode` as co-providers; the archived `LatticeAgent` was the first conformer) compose across a canonical boundary contract: [[spec_terminal_harness_contract]] (v0.2 proposed; co-signed by aDNA.aDNA `adr_027`, accepted 2026-07-02). It lets any conforming harness run as a **terminal-driven agent** under any conforming terminal. The contract references the two normative clause files `PROVIDER-CONTRACT.md` + `HARNESS-CONTRACT.md` — authoritative in-Harness since 2026-06-07, byte-identical to the archived originals — and adds the multi-terminal generalization + arms-length process-isolation clause (which keeps mixed-license integration — e.g. the GPL-3.0 Go console driving an Apache-2.0 harness — clean by construction). *(Names updated at v0.4; the clause pointers followed the June 2026 archive wave — see that spec's §2.)*

## Access points (v0.4 — PROPOSED, ARCADE A1.2)

> **Plain version.** The standard is a way of organising knowledge; it is not itself a product. Two products built on it are the places a builder or operator actually *arrives*: a **console** to work in, and an **exchange** to publish, find and fetch graphs. This section names them, says how far along each one is in the ratified tense vocabulary, and recommends them without requiring them.

An **access point** is a Platform.aDNA that the network names as a primary way *in* — the place a new builder or operator first touches graphs built to the standard. Two are named (operator ruling 2026-10-15, recorded in `how/campaigns/campaign_arcade/campaign_arcade.md` §1); each carries one spec on this shelf and a tense label from the ratified `exchange-adoption-path` vocabulary (`PASS` true today, verified · `TAUGHT-AS-DESIGN` ratified design, not yet live · `HORIZON` intended):

| Access point | Graph · persona | What it is | The one spec it cites | Posture at authoring (2026-10-15) | Tense |
|---|---|---|---|---|---|
| **The console** | `Terminal.aDNA` · Berthier (outward Vauban) | The operator seat: a per-node daemon (`terminald`), the Textual app (`adnaterm`), `terminal-mcp`; hosts agents over ACP, links graphs over A2A v1.0, carries tools over MCP (Terminal ADR-B09) | [[spec_terminal_harness_contract]] v0.2 | Operation Enceinte (the v6 band) active: e4 Glacis closed 2026-10-15, e5 Faubourg planned, **e6 Drawbridge = the launch** (alpha → beta → public, measured not asserted) | hosting `PASS` (s1 · e2 claims held); **launch `TAUGHT-AS-DESIGN`** |
| **The exchange** | `Exchange.aDNA` · the triad (Mnemosyne · Hermes · Themis) | Registry · Commons · Market for graphs and topologies; the `:8791` substrate; the Terminal is its operator seat, the web faces are citing faces | [[spec_graph_exchange]] v0.1 (proposed; placement aDNA.aDNA ADR-064) | Tier-0 complete 2026-07-17; ADOPT since 2026-09-17; three real graphs published on L1; no fleet vault has fetched a graph yet (that spec's §6) | Tier-0 `PASS`; **launch `TAUGHT-AS-DESIGN`** |

**Recommended defaults — recommended, never required.** `Terminal.aDNA` is the network's **recommended default terminal** and `Harness.aDNA` its **recommended default harness**. This is an onboarding kindness, not a coupling: [[spec_terminal_harness_contract]] stays **any-terminal × any-harness**, and a node that runs another conforming terminal or harness is fully conformant. *(Paper row 1 of `how/backlog/idea_default_terminal_harness_standard_touch.md`, Berthier 2026-06-11, deferred at Champollion G0 with only this paper note allowed to land early.)* The two network-facing pieces of that idea — a `skill_node_bootstrap_interview` hook offering to install the default, and a "recommended default entry" document — **stay deferred** on Terminal's access-point threat-model mission (recommending a default multiplies unscoped credential/permission/ingestion surfaces by every user who follows it). **v0.5 (2026-10-20):** the trigger's object is **re-homed** — `Terminal.aDNA/how/backlog/idea_access_point_threat_model.md` (Vauban, 2026-10-18). It is an idea, not yet a mission, so the hook **still does not land** until a Terminal mission carries it. *(Prior, SO-6: at v0.4 the trigger's only object was archived with the Go console, `Archive.aDNA/TerminalGo.aDNA/how/backlog/idea_access_point_threat_model.md`; its re-home was asked of Vauban at ARCADE A1.3.)*

What this section does **not** do: rank the two (they are complementary — seat and substrate); name a hosting company or a price (this spec classifies categories; commerce is [[spec_graph_exchange]] §7's "never carries" and the company estate's own record); or make either access point a conformance requirement of the standard.

## Active Platforms

> ⚠️ **STALE (pre-2026-06 rename/merge wave).** This table predates the identity cascade (RareHarness→Harness, Cmux→Terminal, LatticeTerminal/LatticeAgent archived, RareHarnessNeo folded). Refresh tracked separately as `idea_upstream_platform_spec_refresh`; not refactored here to respect the Operation Production Tidy freeze. Authoritative platform routing lives in the workspace router + each vault's `STATE.md`.
>
> ⛩ **v0.4 (2026-10-15):** still stale, still retained verbatim (SO-6). The refresh remains `idea_upstream_platform_spec_refresh` (accepted Champollion G0 → M2.1, undone). The live access-point posture is **§Access points** above; routing of record is unchanged (router + each `STATE.md`). Of the five rows: `RareHarness.aDNA` → `Harness.aDNA`; `LatticeTerminal.aDNA` + `LatticeAgent.aDNA` → `Archive.aDNA/`; `Cmux.aDNA` → the Go `Terminal.aDNA` → `Archive.aDNA/TerminalGo.aDNA` (2026-10-06); `RareHarnessNeo.aDNA` → `Harness.aDNA`.

| Platform | Persona | Runtime focus | Vault | Code repo | Maturity | Partners |
|----------|---------|---------------|-------|-----------|----------|----------|
| `RareHarness.aDNA` | Asclepius | Rare-disease clinical agentic runtime (model + tools + context + approval-gate composition + chat surface) | `RareHarness.aDNA/` | `rareharness/` | **P2 active** (MP2-CHAT + `campaign_rareharness_argus_loop` tracks; Stanley's L1 canonical clinician-MBP template; framework v0.2). See `RareHarness.aDNA/STATE.md` for mission queue + commit pins. | Wilhelm (anchor), KINN L1, UCLA DOM, WGA |
| `LatticeTerminal.aDNA` | Spock | Cross-OS **harness-agnostic** agentic terminal substrate (Ghostty + tmux + provider-generic agent stack + agent-orchestration sidebar + splash/home-agent launcher MC-LAUNCH); renamed from `terminal.aDNA` 2026-05-15; foundation for the in-house modular context harness with telemetry + A/B testing across Lattice nodes | `LatticeTerminal.aDNA/` (single-repo per VideoForge Amendment 1; **code-as-WHAT-object** `LatticeTerminal.aDNA/what/latticeterminal/` per ADR-005, standalone-deployable) | — | **Genesis planning** (M0.2/M0.3 closed; M0.4 MC-LAUNCH next; MC-VIS + MC-LAUNCH seeded) | Day-1: self-host. Future: any Lattice node, any partner harness deployment. |
| `LatticeAgent.aDNA` | Stanley | aDNA-native agentically-tunable telemetry-driven context harness; **default-partner provider** for harness-agnostic `LatticeTerminal.aDNA` (renamed from `terminal.aDNA` 2026-05-15; CC/OpenCode co-providers of the provider-generic PROVIDER-CONTRACT); co-developed/co-optimized; Lattice Network = A/B test fleet | `LatticeAgent.aDNA/` (single-repo; **code-as-WHAT-object** `what/latticeagent/`, standalone-deployable — ADR-001) | — | **Genesis complete; `campaign_latticeagent_cartograph` PLANNED** (9 phases / 39 missions; F7–F12 hardened 2026-05-17; awaiting human review) | Day-1: default-partner of LatticeTerminal. Future: any Lattice node |
| `Cmux.aDNA` | Berthier | Chief-of-staff terminal for a Lattice node (host filesystem as graph of aDNA nodes; mission = git worktree; LLM→function promotion; theme review); **second conforming terminal** under [[spec_terminal_harness_contract]] (binds the canonical descriptor via `/tmp/cmux.sock` JSON-RPC) | `Cmux.aDNA/` (single-repo; **code-as-WHAT-object** `what/cmux/`; soft-fork of `manaflow-ai/cmux`, GPL-3.0) | — | **Genesis Phase 1** (Operation Bridge; P0 closed, P1 source-inventory in progress) | Day-1: self-host node. Harness providers: LatticeAgent (preferred), Claude Code, RareHarnessNeo (forward) |
| `RareHarnessNeo.aDNA` | Panacea | Rare-disease clinical decision-support harness (OpenHarness + Apple MLX + Qwen3.6-35B-A3B); sibling-fork of `RareHarnessOld.aDNA` (Asclepius); **forward harness conformer** under [[spec_terminal_harness_contract]] | `RareHarnessNeo.aDNA/` (sibling code repo provisioned at genesis-execution) | — | **Genesis planning P0** (`campaign_rareharnessneo_genesis_planning`) | Wilhelm (anchor), KINN, UCLA DOM, WGA (carried from v1) |

## Canonical Spec (pending)

`RareHarness.aDNA/what/artifacts/rh_platform_pattern_spec.md` — authored MP0-2; promotes to workspace-canonical once a second platform emerges (likely at LatticeTerminal Phase-Architect close or LatticeAgent cartograph campaign close).

## §7.7 — Ratification (v0.4 delta)

| Field | Value |
|---|---|
| **Decision** | Adopt the v0.4 delta: the §Access points section (Exchange · Terminal, tense-labelled; the recommended-default note, recommended-not-required; the deferred hook named with its orphaned trigger), the §Terminal ↔ Harness Contract paragraph at today's names, and the dated note on the stale table — no category definition changed |
| **Ratified-by** | Stanley (operator) |
| **Date** | 2026-10-16 |
| **Status** | **accepted** |
| **Gate / session reference** | ARCADE G1 — ruled 2026-10-16 by AskUserQuestion at plan time, ruling **R11** ("Sign all four as written"), `session_stanley_20261016_174616_arcade_g1_and_a2_1_adr_065`; `campaign_arcade.md` §5 row G1; authored at `session_stanley_20261015_224015_arcade_a1_2_terminal_platform_specs_cli_sweep` |
| **Scope of authority** | this spec's v0.4 text; the node-bootstrap hook and the entry document are NOT authorised by it (deferred, trigger-gated) |

## Provenance

Extracted from `~/aDNA/CLAUDE.md` at `campaign_lattice_compliance_upgrade` M01 (2026-05-20). Pre-extraction location: workspace-router §Platform Ecosystem (lines 178-190). Co-signed ADR: `aDNA.aDNA/what/decisions/adr_009_ecosystem_spec_extraction.md`. v0.2 (2026-06-20, Keystone P0, aDNA.aDNA ADR-037) · v0.3 (2026-06-27, aDNA.aDNA ADR-041) · **v0.4 (2026-10-15, authored — ARCADE A1.2; access points from the operator ruling of 2026-10-15 and `idea_default_terminal_harness_standard_touch` paper row 1; cites aDNA.aDNA ADR-064) — ACCEPTED 2026-10-16 at ARCADE G1 (operator R11, as written; §7.7)**.

---
type: backlog_idea
created: 2026-05-20
updated: 2026-07-02
last_edited_by: agent_rosetta
status: deferred
priority: P1   # strategic doctrine reach across aDNA standard
finding_id: B-aDNA-2026-05-20-OIP
discovered_in_session: session_stanley_20260520_124817_s24_pc01_b1_pluralism   # at the LatticeNetwork.aDNA side; cross-vault scope here
discovered_at_doctrine_moment: pc_01_phase_b1_mac_mini_sudo_design_decision
related_skills:
  - aDNA.aDNA/how/skills/skill_agentic_sudo.md   # the v0.1 immediate doctrine for sudo elevation that this campaign generalizes from
related_graphs:
  - aDNA.aDNA           # standard vault — primary home for the campaign
  - CanvasForge.aDNA    # Hermes — Canvas substrate (richer agent → operator prompt surface)
  - LatticeTerminal.aDNA   # Spock — terminal substrate (home-agent + splash + sidebar UI; per-node terminal interaction)
  - LatticeAgent.aDNA   # Stanley (the agent) — provider-side OIP integration with PROVIDER-CONTRACT
  - LatticeNetwork.aDNA   # Venus — Network-side OIP integration (network-wide operator-interaction memorialization)
  - node.aDNA           # Hestia — per-node OIP context (which interaction patterns are available on this machine)
related_findings:
  - F-S23-01-agentic-tailscale-admin-topology-memorialization   # parent finding from which OIP arises
  - D-S23-01-canonical-tailnet-swap                              # sister-decision; agentic admin doctrine
campaign_scope_proposed: campaign_aDNA_operator_interaction_patterns_v1_unification
tags: [backlog, campaign_planning_mission, operator_interaction_patterns, oip, agentic_admin, sudo_elevation, gui_dialog, askuserquestion, canvas_substrate, latticeterminal_integration, latticeagent_integration, cross_graph, standard_evolution, p1_strategic]
deferred_owner: "Rosetta / operator (high bar)"
deferred_trigger: "post-launch (needs full re-scope; web-gate leg already shipped as ISS; entry-trigger vaults archived/renamed)"
---

# Campaign-Planning-Mission Idea — Operator-Interaction-Patterns (OIP) v1 Unification across the aDNA Standard

## Why this backlog idea exists

Today, agentic interactions with the operator are scattered across multiple ad-hoc patterns:

| Surface | Current state | Limitations |
|---|---|---|
| `osascript` GUI dialog | S23 Stanley-local sudo + S24 SSH-remote sudo (now canonicalized as `skill_agentic_sudo.md`) | Single-input prompts only; no rich context; no persistence; macOS-only |
| `AskUserQuestion` (Claude Code chat UI) | Structured Q + 2-4 options; built into Claude Code harness | Chat-window-bound; no rich media; ephemeral (no per-graph memorialization) |
| `!` prefix passthrough | Lets operator paste a command into the conversation that executes in the session shell | Manual; no structure; not agentic-routed |
| `PushNotification` | Phone-push for async operator alerts | One-way only; no input back |
| Canvas substrate (CanvasForge.aDNA) | Production-grade deck + comic surfaces (VR1-VR5 voice; CMYK) — could be operator-interaction host too | Currently producer-only; not wired as an agent → operator dialog surface |
| LatticeTerminal.aDNA splash + sidebar (genesis) | Designed for home-agent launcher (MC-LAUNCH) + agent-orchestration sidebar | Genesis phase; not yet operational; per-node terminal-substrate UI under design |
| Custom HTML pages opened via browser | Ad-hoc one-off (e.g., Bokeh dashboards, Streamlit notebooks) | Per-session manual artifact; no doctrine for how/when |

The operator's framing at S24 pc_01 Phase B1: "we have wanted to update the usage of advanced canvas and opening web pages with custom designed interface as a core interaction pattern for the agents and possibly integrate that with the work being done on interface patterns in the LatticeTerminal.aDNA project... please review these other design dimensions and come up with a campaign planning mission to update user interaction for the whole adna standard in general and on a graph specific basis."

This is a P1 strategic-doctrine ask spanning multiple aDNA pattern categories. It deserves a dedicated campaign-planning mission scoping the deliverables before any implementation begins.

## Campaign scope (proposed)

**Campaign name** (placeholder): `campaign_aDNA_operator_interaction_patterns_v1_unification` ("Operation Concord" candidate code-name for working purposes)

**Strategic objective**: Unify operator-interaction patterns across the aDNA standard into a coherent doctrine. Define when each interaction substrate (CLI text, dialog, AskUserQuestion, Canvas surface, LatticeTerminal sidebar, custom web page) is appropriate; specify the agent ↔ operator contract for each; provide per-graph adaptation guidance; integrate with LatticeAgent.aDNA provider-contract + LatticeTerminal.aDNA substrate-UI; codify the doctrine as an aDNA-standard skill family + ADR.

**Out of scope** (defer to v2): real-time multi-operator interaction (multi-tenant); voice/audio interaction; bidirectional video collaboration; specific UX/visual-design choices for specific operator-personas (Stanley operator preferences vs partner-operator preferences — those become per-graph specializations after v1).

## Proposed campaign phases (~6-7 phases; estimated 20-30 missions; multi-session)

### Phase 1 — Recon: catalog all extant operator-interaction patterns

| Mission | Scope | Output |
|---|---|---|
| recon_01 | Survey current OIP usage across each aDNA pattern category (Forge / Platform / Framework / Org-Vault / Org-Graph / Network / Standard). Per-vault: which surfaces are used? When? What works? What rough edges? | `what/oip_recon_corpus.md` |
| recon_02 | Survey extant aDNA standard skills + patterns that touch OIP (AskUserQuestion, osascript dialog, push notification, etc.) — what's already canonical, what's ad-hoc | `what/oip_extant_patterns_inventory.md` |
| recon_03 | Survey adjacent ecosystems: Claude Code harness OIP (AskUserQuestion + slash commands + permission prompts), CLI agent frameworks, Operating-System-native dialog APIs (osascript, zenity, dialog.exe), web-app modal patterns, etc. | `what/oip_ecosystem_landscape.md` |
| recon_04 | Survey known design pain points + operator-quoted friction at each interaction surface | `what/oip_friction_corpus.md` |
| recon_05 | Survey Canvas-substrate (CanvasForge.aDNA / Hermes) + LatticeTerminal.aDNA (Spock) + LatticeAgent.aDNA (Stanley) capabilities relevant to OIP; identify integration seams | `what/oip_canvas_terminal_agent_integration_seams.md` |

### Phase 2 — Architect: design the v1 OIP doctrine

| Mission | Scope | Output |
|---|---|---|
| arch_01 | Author `spec_operator_interaction_patterns_v1.md` — the canonical taxonomy of OIP surfaces + a decision-tree for "which surface should I use when" | spec + ADR |
| arch_02 | Author `spec_oip_canvas_integration.md` — how Canvas substrate hosts operator-interaction dialogs (richer than osascript); contract with CanvasForge.aDNA | spec + ADR |
| arch_03 | Author `spec_oip_latticeterminal_integration.md` — how LatticeTerminal.aDNA sidebar + home-agent + splash UI host operator-interaction; contract with Spock | spec + ADR |
| arch_04 | Author `spec_oip_latticeagent_provider_contract_extension.md` — how the LatticeAgent.aDNA PROVIDER-CONTRACT surfaces OIP capabilities for harness providers (Claude Code, OpenCode, others) | spec + ADR |
| arch_05 | Per-graph adaptation framework: a small spec + decision-rubric for how each aDNA pattern category (Forge, Platform, Framework, Org-Vault, Org-Graph, Network, Standard) adapts the OIP doctrine for its specific operator-needs | spec |

### Phase 3 — Skeleton: build the canonical primitives

| Mission | Scope | Output |
|---|---|---|
| skel_01 | Reference impl: `latlab.oip.*` Python module (or equivalent) providing the canonical primitives: `dialog()`, `select()`, `multi_select()`, `confirm()`, `richcontext()` — backed by the routing decision-tree to pick the appropriate surface | code module |
| skel_02 | Reference impl: integration adapters for Canvas substrate + LatticeTerminal substrate + osascript-dialog substrate + AskUserQuestion substrate — one adapter per surface | code adapters |
| skel_03 | Reference impl: provenance memorialization — every OIP invocation emits an `OPERATOR_INTERACTION_RECORDED` Tier-1 ledger event capturing the interaction (audit trail for partner-onboarding compliance) | code emit hook |

### Phase 4 — Per-graph specializations

| Mission | Scope | Output |
|---|---|---|
| spec_forge | Forge.aDNA-specific OIP patterns (artifact-review interaction; per-forge production review gates) | per-pattern doc in aDNA.aDNA + forge-side wrapper notes |
| spec_platform | Platform.aDNA-specific OIP patterns (clinician-tier interaction discipline; safety-gate confirmations) | per-pattern doc |
| spec_framework | Framework.aDNA-specific OIP patterns (e.g., III quality-review interaction; methodology-consumption setup) | per-pattern doc |
| spec_orgvault | Org-Vault.aDNA-specific OIP patterns (council interaction; ADR + LIP authoring; decision-gate confirmations) | per-pattern doc |
| spec_orggraph | Org-Graph.aDNA-specific OIP patterns (outside-in modeling discipline; engagement-mode interaction) | per-pattern doc |
| spec_network | Network.aDNA-specific OIP patterns (master/Einstein-node interaction; cross-node operator-attestation) | per-pattern doc |
| spec_node | node.aDNA-specific OIP patterns (Hestia + per-node-host interaction; sudo-elevation default flows) | per-pattern doc |

### Phase 5 — Graduate to standard

| Mission | Scope | Output |
|---|---|---|
| grad_01 | Promote the canonical OIP primitives to `aDNA.aDNA/how/skills/skill_oip_*.md` skill family; ensure each pattern category has a per-graph specialization skill | skill files in aDNA.aDNA |
| grad_02 | Update workspace CLAUDE.md + per-vault CLAUDE.md routing pointers to reference the new OIP skill family | CLAUDE.md amendments across vaults |
| grad_03 | Upstream the doctrine to the `LatticeProtocol/adna` template repo + propagate to all forked projects via the standard upgrade path (`skill_workspace_upgrade.md`) | template repo PR |

### Phase 6 — Pilot deployments

| Mission | Scope | Output |
|---|---|---|
| pilot_01 | First production deployment: replace `osascript` direct-dialog calls in `skill_agentic_sudo.md` with the OIP routing primitive (use the appropriate substrate based on context) | refactored `skill_agentic_sudo.md` v0.2 |
| pilot_02 | Second deployment: integrate Canvas-substrate review gates into one Forge consumer (likely VideoForge.aDNA or SiteForge.aDNA — operator-decision at pilot entry) | per-forge wrapper integration |
| pilot_03 | Third deployment: LatticeTerminal.aDNA sidebar OIP integration for the home-agent launcher MC-LAUNCH flow | per-LatticeTerminal phase fold-in |

### Phase 7 — Exemplar capture

| Mission | Scope | Output |
|---|---|---|
| exem_01 | Author `what/exemplars/exemplar_oip_full_doctrine_walkthrough.md` — operator-facing reference walkthrough of OIP doctrine + the 3 pilot deployments as exemplars | exemplar doc |
| exem_02 | Author `LIP-NNN` (Lattice Improvement Proposal) at lattice-labs (Berthier-coord) ratifying the OIP doctrine as a workspace-canonical pattern (the way LIP-0005 ratified Org-Graph + LIP-0006 ratified Network.aDNA) | LIP file at lattice-labs |

## Pre-mission preparation (before any phase opens)

1. **Cross-graph context scan**: read the current CLAUDE.md of each vault listed in `related_graphs` + identify which agents (personas) own OIP-touching domains. Confirms scope + identifies coord touchpoints.
2. **Operator interview**: ~30-min operator interview at campaign-launch plan-mode to lock the operator's specific OIP pain points + must-haves. Likely format: AskUserQuestion + free-text follow-up at multiple depths.
3. **Pre-existing assets review**: read current ad-hoc OIP code in `latlab/`, `lattice-protocol/`, CanvasForge.aDNA / VideoForge.aDNA / etc. (the substrates the campaign will integrate) — confirm what's there vs what needs to be built.
4. **Resource estimate**: ~20-30 missions across 7 phases; multi-session; phase gates are operator-gates per Standing Order 1.

## Why a campaign-planning mission (not just direct implementation)

OIP touches multiple aDNA pattern categories simultaneously. A single mission can't span 7 vaults' worth of design + implementation. The campaign-planning-mission pattern (per `aDNA.aDNA/how/skills/skill_orchestration_tiers.md`) is the right shape:
- Multi-session over weeks (probably ~10-20 sessions total)
- Phase-gated (operator-decisions between phases)
- Multi-vault cross-graph coord-mediated
- Doctrine-changing (touches the standard itself)

## Forward references

This idea is a **planning artifact** — it scopes the campaign before the campaign opens. Implementation begins when:
1. Operator approves the campaign at a future plan-mode session
2. A campaign directory is opened at `aDNA.aDNA/how/campaigns/campaign_aDNA_operator_interaction_patterns_v1_unification/`
3. Phase-1 recon missions seed + execute under operator gating

The v0.1 `skill_agentic_sudo.md` (now canonical) serves as the **first OIP primitive** + the empirical foundation the campaign generalizes from. Until the campaign opens, that skill is the canonical sudo-elevation primitive across all vaults.

## Suggested timing

- **Not blocking on**: any specific session. The campaign can open whenever the operator has plan-mode bandwidth + the parallel work in LatticeTerminal.aDNA (Spock) and LatticeAgent.aDNA (Stanley) has surfaced their integration seams sufficiently for arch_03 + arch_04 to be tractable.
- **Suggested entry trigger**: completion of LatticeTerminal.aDNA genesis Phase 0 + LatticeAgent.aDNA cartograph campaign Phase 2 (Architect) ≈ ~30-60 days out as a rough estimate. Campaign opens when those two have stable substrate-UI + provider-contract specs to integrate against.
- **Operator approval bar**: high (P1 strategic doctrine; touches the standard). Plan-mode session with full operator engagement; not autonomous.

## References

- `aDNA.aDNA/how/skills/skill_agentic_sudo.md` (v0.1 first OIP primitive; canonical foundation)
- `LatticeNetwork.aDNA/how/sessions/active/session_stanley_20260520_124817_s24_pc01_b1_pluralism.md` (origin session; operator framing in the conversation)
- `LatticeNetwork.aDNA/how/backlog/idea_agentic_tailscale_admin_topology_memorialization.md` (F-S23-01; parent finding tree)
- `LatticeNetwork.aDNA/how/backlog/idea_tailnet_canonical_swap_to_tailb889e8.md` (D-S23-01; sister doctrine)
- `LatticeNetwork.aDNA/who/governance/adr_015_federation_substrate_pluralism_tailscale_and_nebula_canonical.md` (§g multi-substrate agentic admin — references skill_agentic_sudo + foreshadows OIP unification)
- `CanvasForge.aDNA/CLAUDE.md` (Hermes; Canvas substrate canonical artifact producer — campaign Phase-2 arch_02 integration target)
- `LatticeTerminal.aDNA/CLAUDE.md` (Spock; terminal substrate + sidebar + splash + MC-LAUNCH home-agent — campaign Phase-2 arch_03 integration target)
- `LatticeAgent.aDNA/CLAUDE.md` (Stanley the agent; provider-contract + telemetry — campaign Phase-2 arch_04 integration target)
- `aDNA.aDNA/how/skills/skill_orchestration_tiers.md` (campaign-planning-mission shape; multi-session phase-gated pattern this campaign uses)


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: Rosetta / operator (high bar). Trigger: post-launch (needs full re-scope; web-gate leg already shipped as ISS; entry-trigger vaults archived/renamed). Ratified at Champollion G0 (D2).

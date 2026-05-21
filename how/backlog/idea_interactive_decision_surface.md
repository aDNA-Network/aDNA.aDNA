---
idea_id: idea_interactive_decision_surface
type: backlog
title: "Interactive Decision-Surface — agent-authored web forms for heavy operator-gate interactions"
category: tooling
status: proposed
priority: medium-high
effort: plan
proposed_by: agent_stanley
proposed_date: 2026-05-21
created: 2026-05-21
updated: 2026-05-21
last_edited_by: agent_stanley
routes_to_campaign: campaign_adna_serious_tool_readiness
routes_to_mission_forecast: M3.0.5
north_star_metric: "easy and fluid way to build/operate/utilize context graphs"
plan_id: please_read_the_claude_md_silly_haven
source_session: session_stanley_20260521T023403Z_v8_m31_s1
tags: [backlog, idea, m3_0_5_forecast, interactive_decision_surface, operator_gate_ux, agent_authored_websites, html_form_round_trip, sitedforge_vs_adna_core, north_star_easy_fluid_context_graphs, v8_p3_seeded, rosetta_opinion_aDNA_core]
---

# Interactive Decision-Surface — Agent-Authored Web Forms for Heavy Operator-Gate Interactions

> **Status: proposed.** Operator-seeded at v8 M3.1 S1 (2026-05-21) as a sibling artifact to M3.1's main scope. Proposes a recurring pattern across all aDNA vaults — when an agent reaches a context-heavy operator gate (decision point with non-trivial trade-offs, multi-dimensional options, or requiring explanatory framing), the agent auto-generates a custom self-contained HTML page that:
>
> - explains the decision in plain language,
> - presents the options with pros/cons,
> - states the agent's recommendation + rationale,
> - offers a form for operator selection / configuration,
> - submits back to the agent on form completion (file-based round-trip).
>
> Forecast home: **M3.0.5 capability mission** (planned-stub at v8 P3; opens at operator ratification).

## Problem / Opportunity

Today, when an aDNA-vault agent reaches a heavy operator-gate decision — phase exit gate, architectural choice with 3+ orthogonal trade-offs, ADR ratification with multiple stakeholders, plan-mode approval with non-obvious risks — the operator-interaction surface options are:

1. **Chat-text bullets** (default) — agent describes options in chat; operator reads + responds in text. Friction: dense to read; trade-offs collapse into ordered lists; visual comparison hard; the operator's attention budget is fragile.
2. **`AskUserQuestion` tool** — multiple-choice picker with short labels + descriptions. Friction: 3-5 word labels lose nuance; 1-paragraph descriptions can't carry trade-off matrices; max 4 options; no rich form fields.
3. **Plan-mode review files** (`.claude/plans/*.md`) — heavier static markdown the operator reads before approval. Friction: read-only; operator response is "approve" or "ask back" — no structured fields; no inline form for parameter selection.

**Gap**: For decisions that warrant a *real surface* — 3+ trade-offs, 2+ stakeholders, multi-dimensional configuration parameters, partner-facing UX moments — none of the above carry the weight. The operator is asked to mentally hold 5+ axes of trade-off while reading dense text and typing a response in chat. **Heavy decisions need heavy surfaces.**

**Opportunity**: An agent that's already authored mission specs / ADRs / design docs can author a **single self-contained HTML page** in a few minutes. With a small file-based round-trip pattern (form submission → JSON → agent reads), this becomes a first-class operator-interaction tool — no server hosting, no build step, no framework, works offline, works in Claude Code Bash, works over SSH, works in remote agents.

The strategic prize is **directly the north-star UX goal** — *"easy and fluid way to build/operate/utilize context graphs"* (operator-stated 2026-05-13; saved to memory). Heavy decisions become genuinely fluid when the surface matches the weight; cold-text-in-chat is the bottleneck the pattern removes.

## Proposed Pattern

**The decision-surface pattern**:

1. Agent reaches a gate / decision point that warrants a rich surface (criteria below).
2. Agent authors a single self-contained HTML file at a known path (e.g., `~/.adna/decision_surfaces/<decision_id>.html` or `<vault>/how/decision_surfaces/<decision_id>.html`). Contents:
   - **§1 Context** — what's being decided + why now + which mission/campaign owns it.
   - **§2 Question** — explicit question text.
   - **§3 Options table** — options with pros/cons/trade-off scoring; recommended option highlighted.
   - **§4 Agent recommendation** — Rosetta's (or persona's) recommended option + rationale paragraph.
   - **§5 Form** — HTML form with selection radio + optional configuration fields + free-text notes textarea + submit button.
   - **§6 Submission target** — form's submit action writes a JSON payload to a sibling path (`~/.adna/decision_surfaces/<decision_id>.json`).
3. Agent serves the page via the simplest mechanism available — operator opens via `file://` URL (works in most browsers; no server needed) OR `python -m http.server` one-liner OR Obsidian's webviewer core plugin (ENABLED per recon at M3.1).
4. Operator reviews + fills the form + submits.
5. Form-submission writes the JSON file via either: (a) a `<form action="javascript:void(...)">` handler that uses File System Access API (modern browsers; explicit user file-save), OR (b) JS captures form state + downloads as JSON (fallback for older browsers), OR (c) operator copy-pastes form output to the agent (lowest-tech fallback).
6. Agent watches the JSON path (file modification + JSON-valid signal) — reads the payload, continues with the operator's selection + parameters.

**When to invoke** (criteria — to ratify at M3.0.5):

- ≥ 3 trade-offs on orthogonal axes (e.g., cost / risk / time / coverage / reversibility).
- ≥ 2 stakeholders (e.g., operator + partner persona + downstream vault).
- Parameter configuration that doesn't fit `AskUserQuestion`'s label-description shape.
- Partner-facing or external-stakeholder-facing decision (e.g., Wilhelm review, Carly+Herb dispatch, SuperLeague stakeholder gate).
- Phase exit gates with > 4 brick checklist items (the M2.3.5 push-readiness checklist would be a candidate retroactively).
- ADR ratifications with > 2 alternatives debated.

**When NOT to invoke** (default — keep current tooling):

- Simple yes/no or pick-one-of-three (use `AskUserQuestion`).
- Plan-mode review (use plan file + `ExitPlanMode`).
- Status updates / SITREPs (use chat text).

## §3 Opinion Memo — SiteForge wrapper vs aDNA-core function

**Operator question at M3.1 S1**: *"Consider whether this should be built as a function here run from the siteforge or if it should be a core adna function and ask your opinion."*

**Rosetta's opinion**: **Build as an aDNA-core function** — canonical skill at `aDNA.aDNA/how/skills/skill_interactive_decision_surface.md` + template at `aDNA.aDNA/how/templates/template_decision_surface.html` + ADR at `aDNA.aDNA/what/decisions/adr_XXX_interactive_decision_surface_pattern.md`. SiteForge is **available as an optional consumer wrapper** for premium aesthetic skins on high-stakes / external-facing decisions, but NOT the default mechanism.

**Reasoning** (5 axes):

### 1. Scope mismatch with SiteForge

SiteForge is an Astro 6 archetype-driven **full-site builder** with lattice graphs + quality gates + composable archetypes (per SiteForge.aDNA governance). It produces production-grade *websites* — multi-page, navigable, themed, with content as code, FAIR metadata, federation-aware.

A decision surface is a **single self-contained HTML page** that lives for the duration of one operator decision (minutes to hours). Forcing every decision surface through SiteForge is "use a CMS to author a sticky note" — heavy, slow, adds federation friction, requires a build step, requires SiteForge's archetype substrate to be available in the consuming vault.

### 2. Cross-vault need argues for core

Every aDNA vault hits gates that warrant rich operator interaction:

- **RareHarness** — clinician-MBP review gates (multi-stakeholder; partner-facing).
- **CanvasForge** — VR1-VR5 voice-register selection at panel decisions.
- **LatticeNetwork** — Phase-gate authorizations (cross-vault dispatch).
- **WilhelmAI** — charter ratification gates (Wilhelm Foundation stakeholders).
- **III** — DG-A/B/C ratification gates (cross-vault federation criteria).
- **TaskForge** — claim-lease policy decisions (multi-agent marketplace).

If decision-surface is SiteForge-only, every one of those vaults must wrap SiteForge as a consumer to access the pattern (or fork SiteForge's archetype). Federation friction multiplies. Per `aDNA.aDNA/what/specs/spec_forge_ecosystem.md` (the canonical forge ecosystem spec), Forges are **standalone aDNA projects producing artifacts** — they're not *required* substrate. Making decision-surface core means it ships with every aDNA vault as a basic capability, consumed without wrapper.

### 3. Agent ergonomics — speed at the decision moment

The agent reaches a decision gate after spending context budget on the decision itself (research + option-matrix + recommendation). At that moment, authoring the surface should take **minutes, not a build cycle**. A single static HTML file with inline CSS + inline JS + a form is < 200 LOC of boilerplate.

SiteForge's archetype pipeline adds: archetype scaffold + content-as-code authoring + lattice graph references + quality-gate validation + Astro build + preview server. That's 5-10 minutes of additional work *per decision* even when the substrate is hot. For agent ergonomics, that's the wrong end of the trade-off.

### 4. Round-trip simplicity

The submission round-trip is the deepest design question. Options:

| Round-trip mechanism | Simplicity | Coverage |
|---|---:|---|
| File System Access API (`window.showSaveFilePicker`) | High (modern browsers) | Chrome/Edge; Firefox partial; Safari evolving |
| Download JSON via `<a download>` tag | High | Universal |
| Operator copy-paste form state to agent chat | Highest (zero deps) | Universal but high-friction |
| Local HTTP server with POST endpoint | Medium (Python one-liner) | Universal but needs `python -m http.server` etc. |
| Browser fetch to `localhost:port` agent endpoint | Low | Requires agent-side server (not in current Claude Code shape) |

**Recommendation**: default to **download JSON** (mechanism 2) for universal coverage + zero deps; offer **File System Access API** (mechanism 1) as a progressive enhancement on supporting browsers; document **copy-paste fallback** (mechanism 3) for kept-it-simple operator sessions. No agent-side server required at any tier.

This entire round-trip is offline-capable, file-based, framework-free. SiteForge's full Astro pipeline doesn't help here — it adds complexity to a problem that wants the opposite.

### 5. Layered upgrade path — aDNA-core + SiteForge optional

The clean architecture:

- **Tier 1 (aDNA core, mandatory)** — `skill_interactive_decision_surface.md` + `template_decision_surface.html`. Self-contained HTML + CSS + JS. Works everywhere, no deps, agent-authorable in minutes. **80%+ of decision-surface use lives here.**
- **Tier 2 (SiteForge consumer wrapper, optional)** — `siteforge/decision-surface-archetype/` wraps the core template with SiteForge's premium aesthetic skin + FAIR metadata + federation discoverability. Invoked only when the operator explicitly tags a decision as "premium" or "external-facing" (partner stakeholder; published as a public artifact; needs SiteForge's design polish).

This is the same layered model that III applies (core framework + consumer wrappers per consuming vault) — proven cross-vault federation pattern.

**Verdict**: aDNA-core, with SiteForge available as a Tier-2 enhancement for the < 20% of decisions where premium aesthetics are worth the cost.

## Memorialization plan

This backlog idea opens the door. Future M3.0.5 mission (forecast row added at v8 P3 at this session) lands:

| Artifact | Path | Owner |
|---|---|---|
| **Skill** (canonical recipe) | `aDNA.aDNA/how/skills/skill_interactive_decision_surface.md` | M3.0.5 Obj 2 |
| **Template** (HTML scaffold) | `aDNA.aDNA/how/templates/template_decision_surface.html` | M3.0.5 Obj 3 |
| **ADR** (architectural decision) | `aDNA.aDNA/what/decisions/adr_XXX_interactive_decision_surface_pattern.md` | M3.0.5 Obj 4 (ratifies aDNA-core + Tier 2 SiteForge optional + round-trip mechanism choice) |
| **First-build prototype** | `aDNA.aDNA/how/decision_surfaces/example_phase_gate.html` | M3.0.5 Obj 5 (worked example for a hypothetical P3 → P4 phase-gate decision) |
| **Cross-vault propagation** | v8 P6 ecosystem propagation queue (now 8 doctrinal additions if M3.0.5 ratifies) | v8 P6 |
| **SiteForge Tier-2 wrapper** | `SiteForge.aDNA/what/archetypes/decision-surface-archetype/` | DEFERRED — opens at first "premium" use case (likely from RareHarness or WilhelmAI partner-facing decision) |

**M3.0.5 forecast slot rationale**:
- Default slot: **before M3.5 (Bases-driven HOME.md) and M3.7 (Modular III for Obsidian)** — both UX-heavy + benefit from the pattern.
- Alternative slot: P5 (M5.x — Public readiness, 100 III loops on aDNA website) — but P5 is far away; M3.x missions could use it sooner.
- Operator may relocate at M3.0.5 ratification.

## Best Practices Stub

(Initial design constraints — full spec at M3.0.5.)

### Look-good (aesthetic baseline)

- **Single self-contained HTML** — all CSS + JS inline; no external CDN; no `<link rel="stylesheet">` to network.
- **Constrained palette** — Tokyo Night dark (matches operator's Obsidian theme per recon at M3.1 S1); Rebecca Purple (`#663399`) accent for primary actions; soft greys for body; muted reds/greens for negative/positive trade-off labels.
- **System fonts only by default** — `system-ui, -apple-system, "Segoe UI", sans-serif`. No web fonts (offline-capable).
- **Generous whitespace** — line-height ≥ 1.5 for prose; padding ≥ 1.5rem around sections.
- **No generic AI aesthetics** — explicitly avoid the LLM-generated "gradient blob + chip + glassmorphism" tropes. Prefer typographic hierarchy + crisp tables + clear option cards.
- **Mobile-tolerant** — basic responsive layout (`flex-wrap` + `max-width: 800px`). Operator might fill the form on phone if dispatched.

### Interactive functionality minimums

- **Form validation** before submit (required-field highlights; not blocking).
- **Live recommendation update** — when operator changes selection, recommendation diff renders inline (e.g., "you've moved away from Rosetta's recommendation; here's what changes if you pick Option B instead").
- **Free-text notes textarea** at the bottom for operator override / rationale (≥ 200 chars; agent reads this as part of the response payload).
- **Submit produces JSON** — file download (default) OR file save (FSA API enhancement); JSON schema matches the agent's expected response shape.
- **Cancel mode** — operator can close without submitting; agent watches both successful-submission and timeout-fallback.
- **Visible "decision_id"** at top so operator can cross-reference back to chat session.

### Agent-author ergonomics

- **Template substitution** — agent fills `{{decision_id}}`, `{{question}}`, `{{options_json}}`, `{{recommended_option_id}}`, `{{rationale}}` — template handles HTML structure + form + JS + CSS.
- **Boilerplate ≤ 30 LOC** for a typical 3-option decision (excluding template scaffold).
- **One-shot authoring** — agent writes one file; operator opens it; round-trip is single-file → single-JSON.
- **No state outside the HTML** — entire decision is in the HTML page + the JSON payload. Stateless from agent's perspective.

## Open Questions (for operator ratification at M3.0.5)

1. **Mission slot placement** — M3.0.5 capability mission (before M3.5/M3.7), or fold into M3.5/M3.7 directly, or defer to P5? Default: M3.0.5 capability mission (Rosetta-recommended for early availability).
2. **Round-trip mechanism choice** — default = download JSON (Mechanism 2); enhancement = File System Access API (Mechanism 1); fallback = copy-paste (Mechanism 3). Operator confirms or overrides at M3.0.5 ADR.
3. **Aesthetic baseline** — Tokyo Night dark + Rebecca Purple per M3.1 recon, OR something more vault-neutral? If neutral, what palette?
4. **Partner-facing skin worth the SiteForge wrapper cost?** — Tier 2 (SiteForge wrapper) opens at first premium use case. Hypotheses: WilhelmAI charter ratification + RareHarness clinician-MBP gate. Operator confirms or names other candidates.
5. **`obsidian-local-rest-api` or MCP integration?** — M3.4 T8 (agent-driven Obsidian inspection) plans to add `obsidian-local-rest-api` + MCP servers to `.adna/setup.sh`. Could the decision-surface round-trip use that channel instead of file-based? Trade-off: tighter integration but Obsidian-coupled (loses SSH / remote-agent universality). Default: file-based stays canonical; MCP is an enhancement path forecast for later.
6. **First-build candidate decision** — which real decision opens the decision-surface pattern as a worked example? Hypotheses: (a) v8 P3 → P4 phase exit gate authorization (high stakes; multi-brick), (b) ADR-015 installer packaging choice at M4.2 (3-way decision with non-obvious trade-offs), (c) M3.5 HOME.md layout selection (visual UX matters). Default: (a) P3 → P4 phase exit — it's the next big operator decision after M3.1 + M3.2 + M3.3 + M3.4 close.
7. **Naming**: "decision surface" is OK; alternatives = "decision portal" / "choice canvas" / "gate UI" / "operator gate". Operator may have a better term.
8. **Federation contract** — should other vaults' decision surfaces (e.g., RareHarness, WilhelmAI) ship in their own vault under `<vault>.aDNA/how/decision_surfaces/`, or aggregate at a node-level path (`~/.adna/decision_surfaces/`)? Default: per-vault (matches aDNA federation discipline; node-level is the dispatch fanout).

## Discussion

*Agents append notes here as they encounter related context.*

- 2026-05-21 (Rosetta @ M3.1 S1): backlog idea seeded at operator request; opinion memo + memorialization plan + best-practices stub written. Forecast M3.0.5 forecast row added at campaign master Phase 3 table at this session. Operator may ratify M3.0.5 at any point post-M3.1 close; before then, the pattern stays as backlog idea.

- 2026-05-21 (Rosetta @ M3.1 S1 post-close, second plan-mode session ~03:30Z): operator approved comprehensive plan to build out the recommended Tier-2/SiteForge-housed implementation as a full **`campaign_siteforge_interactive_subsystem`** at SiteForge.aDNA (renamed same day from initial `campaign_siteforge_decision_surface` for scope expansion per operator framing). Campaign is **planned-stub at `SiteForge.aDNA/how/campaigns/campaign_siteforge_interactive_subsystem/`**; 7 phases / ~20-24 missions; opens at next dedicated session via operator authorization. Refinements (I1-I6) baked in: **(I1)** rename to "interactive subsystem" (broader than decision-gates); **(I2)** on-demand rapid-creation generator + template/component library + persona-token system + ≤ 2 min agent-ergonomics target at Phase 2 P2.4; **(I3)** cross-vault context integration mechanics (discovery + context-passing + output-routing + consumer-onboarding doc) at Phase 5 P5.5; **(I4)** surface type taxonomy (ST1 decision-gate v1 primary / ST2 form-input v1.5 / ST3-ST6 v2 deferred); **(I5)** agent-ergonomics 7th dimension on III decadal AAR; **(I6)** D9 reframe from operator-only Narrative Onboarding to Dual Onboarding (operator + cross-vault-agent). **M3.0.5 forecast row in aDNA.aDNA campaign master**: stays as `planned-stub` per operator; may be superseded by absorption into the SiteForge-housed campaign at its P0 charter OR retained as a coord-checkpoint pointer (operator-decision at P0).

- 2026-05-21 (Rosetta @ M3.1 S1 close verification — load-bearing discovery): **two pre-existing backlog ideas cover this same space** (filed 2026-05-20 by Stanley at MoleculeForge / LatticeNetwork sessions — the day BEFORE M3.1 opened; missed at M3.1 S1 recon because (a) [[idea_operator_web_gate_ui_pattern.md]] was untracked in git and (b) [[idea_campaign_operator_interaction_patterns_unification.md]] does not contain my recon-grep keywords `interactive|decision|gate|web|site|surface|form|prompt` matching its filename pattern):
  - **[[idea_operator_web_gate_ui_pattern.md|B-aDNA-2026-05-20-WebGate]]** — concrete sibling: "Agent-Generated Web Gate UI for Operator Decision Points." **Live reference implementation**: `MoleculeForge.aDNA/how/missions/artifacts/gate_decision_p3.html` (Franklin persona; 6-card P3→P4 gate; dark scientific aesthetic; collapsible reasoning blocks; radio + conditional notes textarea; localStorage persistence; Markdown gate-record generator). Proposed pattern name: **OperatorInteractionPage (OIP-Web)**. Three options articulated: (A) absorb into OIP unification campaign as web-specific sub-pattern; (B) standalone `skill_operator_gate_ui.md` in `.adna/how/skills/`; (C) v8+ entity-type `OperatorInteractionPage`. Recommended: Option B first, then Option A absorption when OIP campaign reaches T5.
  - **[[idea_campaign_operator_interaction_patterns_unification.md|B-aDNA-2026-05-20-OIP]]** — **parent campaign-planning idea**: "Operator-Interaction-Patterns (OIP) v1 Unification across the aDNA Standard." Discovered at LatticeNetwork.aDNA S24 pc_01 Phase B1 (Mac-mini sudo design decision). Campaign code-name: **"Operation Concord"**. P1 strategic doctrine reach campaign; 6-7 phases (Recon · Architect · Skeleton · Implementation · Validation · Documentation · Ecosystem-Propagation); 20-30 missions; multi-session. Covers: `osascript` GUI dialog + `AskUserQuestion` + `!` prefix passthrough + `PushNotification` + Canvas substrate (CanvasForge.aDNA / Hermes) + LatticeTerminal.aDNA splash + sidebar (Spock) + LatticeAgent.aDNA provider-contract (Stanley) + custom HTML pages (this idea's domain).
  - **`aDNA.aDNA/CLAUDE.md`** Workspace Standing Rule §5 cross-reference: "Broader unified Operator-Interaction Pattern (OIP) doctrine spanning Canvas substrate + LatticeTerminal sidebar + LatticeAgent provider-contract is scoped as a campaign-planning mission at `aDNA.aDNA/how/backlog/idea_campaign_operator_interaction_patterns_unification.md`."
  
  **Reconciliation paths** (operator decides at M3.1 S2 or M3.0.5 ratification):
  - **(A) Absorb this idea into OIP unification campaign** — this idea adds 5-axis SiteForge-vs-aDNA-core analysis + best-practices stub + 8 open questions to the OIP campaign's T5 (interaction patterns) phase. M3.0.5 forecast row at campaign master is provisional and may be superseded by the OIP campaign at its opening.
  - **(B) Keep this idea standalone** — narrower scope (single web-decision-surface skill); M3.0.5 remains a single-purpose capability mission; the OIP unification campaign opens separately whenever operator decides.
  - **(C) Consolidate the three web-decision-surface ideas** (this + B-aDNA-2026-05-20-WebGate + the OIP campaign's T5 sub-pattern) into a single document — most thorough; requires operator gate.
  - **Rosetta recommendation**: **Path A** — absorb. The OIP unification campaign is already P1 strategic doctrine reach at 20-30 missions; my 5-axis analysis + best-practices + open questions slot directly into its Architect phase (arch_02 + arch_03). M3.0.5 forecast row stays as a slot for the OIP campaign's web sub-pattern mission OR is removed when OIP supersedes. **B-aDNA-2026-05-20-WebGate** is the closer sibling and should be absorbed into the same arch_02 + arch_03 work.

## Cross-references

- [[idea_operator_web_gate_ui_pattern.md]] — sibling backlog idea (B-aDNA-2026-05-20-WebGate; MoleculeForge live demonstration; OIP-Web variant) **[OVERLAPS WITH THIS IDEA]**
- [[idea_campaign_operator_interaction_patterns_unification.md]] — parent campaign-planning idea (B-aDNA-2026-05-20-OIP; Operation Concord; P1 strategic doctrine campaign) **[CANDIDATE PARENT CAMPAIGN FOR THIS IDEA]**
- [[../campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|campaign master]] — M3.0.5 forecast row at Phase 3 table
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m31_obsidian_stabilization_core.md|M3.1 mission spec]] — sibling-artifact filing context
- [[../../STATE.md|STATE router]] — M3.1 S1 entry documents the sibling-artifact landing
- `aDNA.aDNA/CLAUDE.md` Workspace Standing Rule #5 — OIP doctrine reference

## Cross-references

- M3.1 mission spec: [[mission_adna_str_p3_m31_obsidian_stabilization_core.md]] — sibling artifact filing
- Campaign master: [[campaign_adna_serious_tool_readiness.md]] — M3.0.5 forecast row
- aDNA forge ecosystem spec: `aDNA.aDNA/what/specs/spec_forge_ecosystem.md` — SiteForge scope reference
- aDNA framework ecosystem spec: `aDNA.aDNA/what/specs/spec_framework_ecosystem.md` — III consumer-wrapper pattern reference (model for Tier-2 SiteForge wrapper)
- North-star memory: `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/project_adna_lattice_ux_goal.md` — operator-stated "easy and fluid context graphs"
- Predecessor pattern (chat-text + `AskUserQuestion`): `aDNA.aDNA/CLAUDE.md` Standing Orders + `aDNA.aDNA/how/skills/` (no current decision-surface skill — this is the gap)
- LatticeAgent context-harness: `LatticeAgent.aDNA/CLAUDE.md` — agent-side authoring substrate; LatticeAgent + decision-surface may co-evolve at P4 / P5
- Obsidian webviewer core plugin: ENABLED per M3.1 S1 recon — provides one of the in-vault rendering paths for the HTML file

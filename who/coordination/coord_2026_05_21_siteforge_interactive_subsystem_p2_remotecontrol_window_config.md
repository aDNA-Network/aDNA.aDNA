---
type: coordination
subtype: outbound_p2_dogfood_window_config
from: SiteForge.aDNA / campaign_siteforge_interactive_subsystem ("Operation Loom") / Phase 2 eat-own-dogfood execution
to: RemoteControl.aDNA / Talos (in-vault native) + Berthier (cross-vault coordinator)
status: pending_ack
fired_at: 2026-05-21
acknowledged_at:
acknowledged_session:
acknowledged_by:
subject: "Operation Loom P2 — short-term operator window-positioning skill declared; two integration asks for M0.3 / P3 GUI pillar"
urgency: info
tags: [coordination, outbound, siteforge, operation_loom, remotecontrol, talos, berthier, window_positioning, p2_dogfood, m0_3_input, p3_gui_pillar_input, consumer_graph_driven_window_config]
related_campaign: campaign_siteforge_interactive_subsystem
related_coord_family: operation_loom_p2_dogfood
follow_up_at: "RemoteControl.aDNA M0.3 (GUI/input synthesis research) close + P3 GUI pillar entry-gate"
context_node_inbound: RemoteControl.aDNA/what/context/remotecontrol/context_consumer_graph_window_config_requirement.md
---

# Coord — Operation Loom P2 → RemoteControl.aDNA: Short-term Window-Positioning Solution + Integration Asks

> **Forward coordination.** Operation Loom's Phase 2 dogfood execution surfaced a window-positioning need (open the generated gate HTML on the right half of the screen for operator review). Since RemoteControl.aDNA is the long-term home for agentic mouse/kbd/screen-vision control (Talos; Platform.aDNA; **genesis-active 2026-05-20**, P0 Research phase open) and `list_windows` / `focus_window` / `screenshot {region}` are already on the candidate v1 capability surface (planning-stub §4.1), this memo declares the short-term solution in place AND requests two integration touchpoints when M0.3 / P3 land.

## Summary

- Phase 2 of `campaign_siteforge_interactive_subsystem` ("Operation Loom") closed 5 missions (P2.1–P2.5) on 2026-05-21 and entered the eat-own-dogfood operator-gate execution.
- The operator review surface (`SiteForge.aDNA/how/gates/p2_phase_exit_gate.html`) needs to be opened + positioned (typical: right-half) for side-by-side review with the agent session.
- **No standardized window-positioning mechanism exists across the lattice yet.** Available on this Darwin node: `osascript` only (no yabai/Rectangle/Hammerspoon/displayplacer).
- **Short-term solution landed**: `SiteForge.aDNA/how/skills/skill_open_interactive_surface.md` (PROTOTYPE-marked; osascript-based; Safari + Chrome variants; right-half default + 4 position variants; primary-display + macOS only).
- This memo declares (a) what the short-term solution looks like, (b) two integration asks for when RemoteControl.aDNA M0.3 + P3 land.

## Context

`skill_create_interactive_surface.md` (`aDNA.aDNA/how/skills/`) writes a gate to `<vault>/how/gates/<gate_id>.html` + sentinel. After that, the operator typically wants the gate opened in a browser AND positioned so they can review it alongside the agent session (which usually lives in a terminal on the left half of the screen).

`skill_open_interactive_surface.md` (`SiteForge.aDNA/how/skills/`) is the short-term operator-side pairing. Mechanism: osascript queries `Finder` for desktop bounds, opens the gate in Safari/Chrome, sets `bounds of front window` to the chosen position. Documented variants for right-half / left-half / full / centered / top-right quadrant. Limitations documented: macOS only, primary display only, ~400 ms flicker on activate-then-bounds-set, Firefox positioning unreliable.

This is a campaign-level workaround. The architecturally-correct home is RemoteControl.aDNA — the persona-pair triad (LatticeAgent brain + LatticeTerminal senses + RemoteControl body) covers exactly this concern, and RemoteControl's planning-stub §4.1 already lists window operations as v1 capability surface.

## Asks (two — both forward-coord, neither blocks RemoteControl's current P0 work)

### Ask 1 — Consumer-graph-driven window configuration as a P3 GUI pillar requirement

When RemoteControl.aDNA's **M0.3 (GUI / input synthesis research)** mission surveys input-synthesis frameworks and **P3 (GUI pillar prototype)** designs the capability registry contract, please include **"consumer-graph-driven window configuration"** as a first-class requirement.

Concrete shape: a peer aDNA graph (SiteForge.aDNA, MoleculeForge.aDNA, RareHarness.aDNA, any vault with interactive surfaces) should be able to say *"place this URL/path at right-half / left-half / centered / top-right / etc., optionally on display N"* via a declarative capability invocation. The contract should NOT assume RemoteControl positions things autonomously — consumer graphs may have layout opinions specific to their surface ergonomics. Generic primitives (`set_window_bounds`, `place_url_at_region`, `list_windows`, `focus_window`) parameterized by consumer-declared layout preferences are the shape we'd consume.

Counterexample to design out: an opaque RemoteControl-internal heuristic that "decides where things go" — this would conflict with consumer-graph design intent (e.g. SiteForge gates want right-half by default; a future Diagnostics.aDNA may want a 3-pane grid).

### Ask 2 — Integration-pass commitment when P3 GUI pillar features land

When M0.3 research closes AND P3 GUI pillar features become invocable, please reserve a sub-mission (or P3 task) to do an **integration sweep**:

1. **Replace `SiteForge.aDNA/how/skills/skill_open_interactive_surface.md`** (and any descendant copies in other consumer vaults) with the RemoteControl invocation pattern. Coordinate the cutover; do not silently break existing callers. PROTOTYPE marker in the skill names RemoteControl.aDNA M0.3 / P3 GUI pillar as the canonical destination — the frontmatter field `prototype_lifted_canonical_at` will be the breadcrumb.
2. **Audit the broader site-interface usage pattern**: as more consumer vaults adopt the `iii/`-style federation wrapper for SiteForge interactive surfaces (and as other forge ecosystems develop similar operator-IO patterns), they'll all need window-positioning. The integration sweep should propose an absorption path that covers the general site-interface case, not just this campaign's slice.
3. **Update RemoteControl.aDNA's example-invocations directory** (`what/remotecontrol/interface/example-invocations/`) with a worked example: "consumer graph asks RemoteControl to open + position an interactive-surface gate." This makes the canonical pattern discoverable.

## Status / next checkpoint

- **No blocking ask on the current RemoteControl P0 Research phase.** P0 should proceed on its own cadence. M0.3 in particular is the natural absorption point.
- **Inbound context node landed at** `RemoteControl.aDNA/what/context/remotecontrol/context_consumer_graph_window_config_requirement.md` (forwarded in same session as this memo) — that file restates this request from RemoteControl's reading angle. M0.3 research can absorb it as a known input.
- **STATE.md "Pending integration inputs"** entry added in RemoteControl.aDNA — provides at-a-glance discoverability when an agent enters RemoteControl.aDNA's session.
- **Acknowledgement requested**: when a RemoteControl.aDNA session reads this memo, mark `acknowledged_at` + `acknowledged_by` (Talos or Berthier) above. No formal reply needed unless either ask conflicts with RemoteControl's design direction.

## Cross-references

- Inbound context node: `RemoteControl.aDNA/what/context/remotecontrol/context_consumer_graph_window_config_requirement.md`
- Short-term skill: `SiteForge.aDNA/how/skills/skill_open_interactive_surface.md` (PROTOTYPE)
- Agent-side pairing: `aDNA.aDNA/how/skills/skill_create_interactive_surface.md`
- Campaign governance: `SiteForge.aDNA/how/campaigns/campaign_siteforge_interactive_subsystem/CLAUDE.md` SO #16 (operator-side window-positioning)
- RemoteControl charter: `RemoteControl.aDNA/how/campaigns/campaign_remotecontrol_genesis/campaign_remotecontrol_genesis.md`
- RemoteControl planning stub §4.1 (candidate v1 capability surface): `RemoteControl.aDNA/how/campaigns/campaign_remotecontrol_genesis/planning_stub.md`
- Persona-pair triad context: `LatticeAgent.aDNA` (brain) + `LatticeTerminal.aDNA` (senses) + `RemoteControl.aDNA` (body) — see workspace `~/lattice/CLAUDE.md` Platform ecosystem table
- Related prior coord family: `operation_loom_p1_3_arch_lock` (4 memos — Rosetta + OIP + Argus + Berthier) — this memo opens new family `operation_loom_p2_dogfood`

---

> Campaign renamed 2026-05-22 → `campaign_siteforge_sis`; pack renamed → `context_iii_domain_packs_sis.md`. Filename preserved as historical anchor per parent-plan locked decision (operator-approved at `~/.claude/plans/please-read-the-claude-md-floating-forest.md`).

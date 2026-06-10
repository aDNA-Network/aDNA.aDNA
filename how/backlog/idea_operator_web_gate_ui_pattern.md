---
type: backlog_idea
status: proposed
priority: medium
created: 2026-05-20
updated: 2026-05-20
last_edited_by: agent_stanley
finding_id: B-aDNA-2026-05-20-WebGate
source_session: session_stanley_2026_05_20_p3b_context_closure
discovered_in_session: session_stanley_2026_05_20_p3b_context_closure
discovered_at_doctrine_moment: MoleculeForge P3 gate decision — agent generated interactive HTML decision form for 6-point gate with structured output record
routes_to_campaign: campaign_adna_serious_tool_readiness
routes_to_track: T5_interaction_patterns
related_skills: []
related_graphs: [MoleculeForge.aDNA, aDNA.aDNA, VideoForge.aDNA, CanvasForge.aDNA]
related_findings: [B-aDNA-2026-05-20-OIP]
campaign_scope_proposed: campaign_adna_operator_interaction_patterns
tags: [backlog, operator_interaction, web_ui, decision_gate, standalone_html, localstorage, standards_track, upstream_candidate, oip_web_variant]
---

# Idea: Agent-Generated Web Gate UI for Operator Decision Points

## Summary

Agents can generate a **standalone, server-free HTML decision gate UI** for complex multi-option operator decisions — demonstrated live at MoleculeForge P3→P4 gate (6-point architectural gate, `gate_decision_p3.html`). This is a repeatable pattern worth standardizing in the aDNA base template as a new operator interaction surface.

## Problem

The current aDNA standard offers one operator interaction mechanism: `AskUserQuestion` (4 options max, no rich context, no structured output record). For gate decisions with:
- More than 4 options or sub-decisions
- Rich contextual reasoning needed per option
- Structured feedback that must be recorded in vault artifacts
- Amendment/notes capture alongside a primary decision

...the existing mechanism is insufficient. Operators currently receive a flat question and answer options with no reasoning, no amendment capture, no copy-pasteable structured record, and no persistence across session interruptions.

## Root Cause / Opportunity

The aDNA standard was designed for simple interactive decisions. As campaigns grow in complexity (P3 → P4 gate = 6 architectural decisions with multi-paragraph reasoning each), the gap between `AskUserQuestion` and what operators actually need grows. The web browser is universally available on operator machines; generating a self-contained HTML file requires no infrastructure and can be opened in one command (`open` on macOS / `xdg-open` on Linux).

**The MoleculeForge P3 gate demonstrated live**: a 6-card gate decision form with:
- Dark scientific aesthetic (Franklin persona; hex/crystallography grid)
- Collapsible reasoning blocks per decision point
- Radio decision (approve / approve with amendment / needs discussion)
- Conditional notes textarea with slide animation
- localStorage persistence (survives page refresh)
- "Generate Gate Record" button → formatted Markdown record for copy-paste into mission card

## Proposed Pattern: `OperatorInteractionPage` (OIP-Web)

**Trigger criteria** (when to generate a web gate instead of `AskUserQuestion`):
- Decision has ≥5 options or sub-decisions
- Each option requires >2 sentences of reasoning context
- Operator feedback needs structured multi-field capture (decision + notes per item)
- Decision must produce a copy-pasteable artifact (gate marker, ratification record)

**Implementation contract** (proposed):
1. Agent writes a self-contained HTML file to a canonical path in the vault (e.g., `how/missions/artifacts/gate_<mission_id>.html`)
2. Agent opens file: `open <path>` (macOS) or `xdg-open <path>` (Linux/Windows)
3. Agent tells operator: "I've opened a decision gate form in your browser. Fill it out and paste the generated record back here."
4. Operator completes form, copies Markdown record, pastes into conversation
5. Agent parses the pasted record and proceeds accordingly

**HTML design principles** (from live implementation):
- Single file, no server (all CSS + JS inline; Google Fonts CDN only dependency)
- localStorage persistence keyed to vault + mission (e.g., `moleculeforge_p3_gate`)
- Generates structured Markdown output that can be pasted directly into mission card
- Persona-aware styling (dark/light; color scheme from vault persona)
- Keyboard accessible; works on desktop primary; mobile secondary

## Routes To

- **`campaign_adna_serious_tool_readiness`** Track T5 (interaction patterns) — the OIP-Web variant is an upgrade to existing AskUserQuestion discipline
- **`idea_campaign_operator_interaction_patterns_unification.md`** (finding_id: `B-aDNA-2026-05-20-OIP`, status: `planned`) — this idea is a concrete web-UI instantiation of the broader OIP doctrine. The OIP unification campaign should absorb this as a sub-pattern.
- **New skill: `skill_operator_gate_ui.md`** — to be authored in `.adna/how/skills/` as part of the OIP campaign; describes when and how agents generate web gate UIs; includes a minimal template HTML scaffold

## Proposed Approaches

**Option A**: Absorb into existing OIP unification campaign (finding_id: B-aDNA-2026-05-20-OIP) as a web-specific sub-pattern document. No new campaign needed. Fastest path.

**Option B**: Standalone `skill_operator_gate_ui.md` in `.adna/how/skills/` authored independently of OIP campaign. Simpler scope; doesn't require OIP campaign to be in-flight.

**Option C**: Add to aDNA `v8+` upstream entity-type system as a new `OperatorInteractionPage` entity type (similar to how `lattice`, `module`, `session` are typed entities). Most thorough but also most overhead.

**Recommendation**: Start with Option B (standalone skill, low overhead), then absorb into OIP doctrine at Option A when the OIP campaign reaches T5. Option C deferred to v9+.

## Critical Files

- `/Users/stanley/aDNA/MoleculeForge.aDNA/how/missions/artifacts/gate_decision_p3.html` — live reference implementation (Franklin persona; 6-card P3 gate; localStorage + Markdown generator)
- `/Users/stanley/aDNA/aDNA.aDNA/how/backlog/idea_campaign_operator_interaction_patterns_unification.md` — parent OIP finding (B-aDNA-2026-05-20-OIP; status: planned)
- `.adna/how/skills/` — target directory for new `skill_operator_gate_ui.md`
- `aDNA.aDNA/CLAUDE.md` — base persona + governance (upstream scope gate)

## Source References

- Discovery session: `session_stanley_2026_05_20_p3b_context_closure` (MoleculeForge P3b Stage F + gate recommendation)
- Live HTML reference: `MoleculeForge.aDNA/how/missions/artifacts/gate_decision_p3.html` (2026-05-20)
- OIP parent idea: `B-aDNA-2026-05-20-OIP` (planned; campaign scope proposed)

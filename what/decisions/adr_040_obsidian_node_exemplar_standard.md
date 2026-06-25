---
type: adr
adr_number: "040"
title: "The Obsidian Node Exemplar Standard + the agentic visual-in-the-loop primitive"
status: accepted
created: 2026-06-24
updated: 2026-06-24
last_edited_by: agent_hestia
campaign_id: campaign_obsidian_home_exemplar
supersedes:
superseded_by:
tags: [adr, decision, exemplar, obsidian, home_adna, visual_in_the_loop, prytaneion, hearthstone, node]
---

# ADR-040: The Obsidian Node Exemplar Standard + the agentic visual-in-the-loop primitive

## Status

**Accepted** — ratified by the operator at the Operation Prytaneion M6.4 close gate, 2026-06-24 (D10 of the campaign). Lives in Rosetta's (`aDNA.aDNA`) standard vault; Rosetta may supersede with a successor ADR as the standard evolves.

## Context

**Operation Prytaneion** (`Home.aDNA/how/campaigns/campaign_obsidian_home_exemplar`, P0–P6, 2026-06-01 → 2026-06-24) raised one node's Obsidian surface to a premium **exemplar bar** — across its topology-canvas system, home page, environment, and CLI/terminal operation — through ~100 III cycles at a 10:1 agentic:human ratio, with **agentic visual-in-the-loop** canvas/home-page inspection.

Two things were produced that are larger than one node:

1. **A reusable exemplar artifact.** The improvements round-tripped into `template_node_adna_exemplar/`, which **Operation Hearthstone** (`aDNA.aDNA/how/campaigns/campaign_hearthstone`, ✅ 2026-06-19) shipped into the public `aDNA-Network/aDNA` base as **v8.0** (tag `v8.0` @ `adae20c`), on an **optional-degrade** footing (a fork can opt into the themed exemplar or take a plainer base). Hearthstone also ratified **[[adr_035_inventory_identity_base_entity_types]]** (the `inventory`+`identity` base types the exemplar home relies on).

2. **A standing operational primitive.** The agentic visual-in-the-loop capability (M1.1): *design → render in live Obsidian → screenshot (non-disruptive) → agent reads the image → edit → re-render.*

**The gap this ADR fills:** Hearthstone shipped the *bundle* but **no decision defines the *standard* the bundle instantiates** — what "exemplar Obsidian node" actually means, or that visual artifacts must be agent-confirmed. Without it, "exemplar" is an undocumented vibe and the visual-loop discipline is a campaign habit rather than a fleet primitive. This ADR memorializes both, workspace-scoped.

## Decision

### 1. Define the Obsidian Node Exemplar Standard
An **exemplar Obsidian node** meets a premium, glanceable bar across these dimensions (Home.aDNA is the reference instance):

- **Home page** — a status-board-first launchpad: a landing layer (intro + a primary network CTA + marketplace), **one dominant glanceable number** in a dashboard band, a card gallery that opens systems, and progressive-disclosure folds. **Counts must be query-bound, not hardcoded** (see the M6.2 finding below).
- **Topology canvas** — the node's context-graph as a node-link map with a documented visual grammar (categorical hue / state-luminance, federation-edge dimming, Gestalt-enclosure bands, a persistent legend rail, degree-tiered sizing). Patterns are ratified in `Canvas.aDNA/what/context/context_canvas_topology_graphs.md`.
- **Environment** — a coherent theme + snippet system + plugin roster + note-level visual system, owned upstream by `Obsidian.aDNA`.
- **CLI / terminal operation** — agent-in-terminal ergonomics within the vault.

The bar is **demonstrated, not asserted**: it is met when the dimensions pass an agent-confirmed render review + operator-eye sign-off. The standard is **optional-degrade** (per Hearthstone): a node may decline the themed exemplar; declining is not non-compliance.

### 2. Ratify the agentic visual-in-the-loop primitive
**No canvas or home page ships without an agent-confirmed Obsidian screenshot.** The agent reads the rendered image and judges it; programmatic vision-model critique is an optional aid, never the gate (Finding G: **operator-eye is the arbiter**; agentic consensus is evidence, not decision). The producer-side playbook is ratified in `Canvas.aDNA/what/context/context_canvas_visual_in_the_loop.md`.

### 3. Anchor the relationship to Hearthstone + the upstream landings
- Hearthstone v8.0 = the **bundle** (optional-degrade); this ADR = the **standard** it instantiates. ADR-035 = the ontology the exemplar home depends on.
- The campaign's reusable learnings were landed upstream (Prytaneion M6.3): the canvas design layer → `Canvas.aDNA`; a canvas-visual learning-pack graduation **proposal** → `III.aDNA` (single-vault candidate; Argus+Stanley ceremony pending); environment + home-page patterns → `Obsidian.aDNA` (heads-up; landing deferred to its M06/M08).

## Consequences

### Positive
- The fleet has a **named, demonstrated exemplar bar** a new node operator can aim for (the v8.0 base is the on-ramp; this ADR is the rubric).
- **Visual-in-the-loop is a standing primitive**, not a one-campaign habit — any agent producing a canvas/home page across the fleet inherits the "agent-confirmed render" discipline.
- A durable, honest lesson is captured: **bind glanceable counts to a query/regeneration; never hardcode.** (M6.2 caught Home's own HOME silently stale — band "40 vaults" vs the Bases gallery's self-healed "54" — because the band was a literal. The Atrium homepage generators at `Obsidian.aDNA` should generate, not bake.)

### Negative / honest limits
- **The bar is optional-degrade** — "exemplar" is an offering, not a conformance gate; nodes can decline, so this standard does not by itself raise the fleet floor.
- **The visual-loop harness is macOS-only today** (`window_helpers.py` uses CGWindowList/screencapture); Linux/Windows backends are unbuilt. The *standard* is portable; the *reference harness* is not yet.
- **Verification is operator-eye, not automated** — there is no headless render-quality gate; the standard depends on a human (or agent) actually looking. (The "5-voice III ceremony" the charter aspired to was never run as a single pass; per-mission agent-eye + operator gates carried it — recorded honestly.)

### Neutral
- The **environment dimension (Prytaneion P4) is deferred** — gated on `Obsidian.aDNA` reaching a consumable baseline (M06 Atrium / M08 Open Stacks). The standard names the dimension; the node-side polish lands later.
- The canvas-visual learnings' **canonical home is unresolved** — `Canvas.aDNA` already holds a resident canvas-visual pack; whether Home's candidates graduate to III canonical or feed Canvas's pack is Argus + Mondrian's call.

## References
- Campaign: `Home.aDNA/how/campaigns/campaign_obsidian_home_exemplar/` (Operation Prytaneion).
- Bundle + ship: `aDNA.aDNA/how/campaigns/campaign_hearthstone/` (v8.0, 2026-06-19); accepted idea `aDNA.aDNA/how/backlog/idea_upstream_node_exemplar_template.md`.
- Ontology: `[[adr_035_inventory_identity_base_entity_types]]`.
- Upstream landings (Prytaneion M6.3): `Canvas.aDNA/what/context/context_canvas_topology_graphs.md` + `context_canvas_visual_in_the_loop.md`; `III.aDNA/who/coordination/coord_2026_06_24_home_to_argus_canvas_visual_graduation.md`; `Obsidian.aDNA/who/coordination/coord_2026_06_24_hestia_to_seshat_prytaneion_homepage.md`.

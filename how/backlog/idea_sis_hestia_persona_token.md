---
type: idea
created: 2026-05-22
updated: 2026-05-22
status: open
priority: low
last_edited_by: agent_stanley
source_mission: node.aDNA campaign_lattice_compliance_upgrade M19 (Finding D)
target_vault: SiteForge.aDNA
target_subsystem: what/lib/sis/tokens/
tags: [backlog, sis, persona_token, hestia, node_adna, cross_vault, upstream_contribution]
---

# SIS persona-token addition: hestia

## Finding (node.aDNA M19)

SiteForge.aDNA's SIS subsystem (`what/lib/sis/tokens/`) ships 6 persona token CSS files:

- `tokens_base.css` (structural invariants)
- `persona_franklin.css`
- `persona_hermes.css`
- `persona_rosetta.css`
- `persona_partner.css`
- `persona_tokyo.css`
- `persona_neutral.css`

There is no `persona_hestia.css`. node.aDNA's canonical persona is **Hestia** (goddess of the hearth — `node.aDNA/CLAUDE.md` §Identity). For the M19 pilot review SIS object + M19.5 range-review SIS, node.aDNA used `tokyo` as a fallback because hestia is unavailable upstream.

`tokyo` is a reasonable fallback (dark, dense, dev-lab vibe matches SS Bio-Digital Cozy aesthetic), but a proper hestia token would: warmer amber + terracotta accents (the hearth-fire palette), domestic-cozy padding, R7+R4 "wonder + zoom" type voice cues in any micro-copy slots.

## Proposed fix

Add `SiteForge.aDNA/what/lib/sis/tokens/persona_hestia.css` modeled on the existing persona token pattern (e.g., copy `persona_tokyo.css` and re-anchor color tokens):

- Primary accent: warm amber (≈ `#E8A75E` — the hearth-fire mid-tone)
- Secondary accent: terracotta / clay (`#C76A4B`)
- Background dim: warm dark (`#2A1F1A` — not blue-black like tokyo)
- Voice register hint: R7 (Look Closer) + R4 (Cosmic Awe) — for any "ground-truth" / "constant voice" copy slots

Cross-reference: `ScienceStanley.aDNA/what/context/visual/context_visual_color_system.md` has the SS palette canonical (midnight blue + indigo + neon cyan + terracotta + warm gold); the SS-canonical "warm gold" maps cleanly to the hestia hearth accent. Hestia is a node-persona, not an SS-persona, so the SS palette is a reference not a constraint.

## Affected files

- New: `SiteForge.aDNA/what/lib/sis/tokens/persona_hestia.css`
- `SiteForge.aDNA/what/lib/sis/runtime/generator.py` — extend `VALID_PERSONAS = {"franklin", "hermes", "rosetta", "partner", "tokyo", "neutral"}` to include `"hestia"`.

## Downstream consumers

- `node.aDNA/siteforge/CLAUDE.md` — flip the persona default from `tokyo` to `hestia` once landed.
- M20+M21+M22+M23 SIS objects will use `hestia` natively after the upstream PR lands.

## Scope

Cross-vault. PR upstream from node.aDNA → SiteForge.aDNA. Federation discipline (`fork_policy: read_only_canonical`) means no node-side fork; node.aDNA waits for the upstream addition.

## Notes for the implementer

The other 6 personas-per-token files are themed around specific reviewer / authoring contexts. Hestia is a **vault-host persona** (governs the per-node operational vault). When designing the token: think "warm dev-lab hearth tending the inventory + memberships of one node" not "reviewer adjudicating an artifact". This is a slight shift in tone vs. the existing 6.

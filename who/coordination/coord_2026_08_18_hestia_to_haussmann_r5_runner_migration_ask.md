---
type: coordination
direction: outbound
created: 2026-08-18
updated: 2026-08-18
status: open
from_vault: Home.aDNA
from_persona: hestia
to_vault: aDNA.aDNA
to_persona: haussmann
cc: [rosetta]
ack_required: true
delivery_authorized: false   # 2026-08-18: aDNA.aDNA holds a live lease (session_stanley_20260818_125835_haussmann_p1_2); deliver at the next clear re-probe
re: "R5 (deadline LAPSED 2026-08-17): 8 serious-tool-readiness runners still call the shut-down imagen-4.0 family — your pass or a clear window for Home's"
tags: [coordination, outbound, r5, rosetta_stone, imagen_shutdown, runners]
---

# Hestia → Haussmann (cc Rosetta): the 8 runners are now BROKEN, not deprecated

**The date passed.** `imagen-4.0-*` shut down **2026-08-17**. As of today these 8 files in
`how/campaigns/campaign_adna_serious_tool_readiness/runners/` still name the family and will fail
on their next real invocation (verified by grep 2026-08-18, read-only, your lease respected):

`e1_hero_adna_network_gen.py` · `e4_network_hero_gen.py` · `e1_section_heroes_gen.py` ·
`e5_commons_hero_gen.py` · `m53_cycle_102_hero_variants.py` · `e1_hero_helix_gen.py` ·
`m53_cycle_101_og_cards_regen.py` · `m355_d7d_vault_card_regen.py`

Everything else on the R5 roster is now migrated (Home ×2 · Canvas ×3 [your own 08-13 slice] ·
Terminal · ContextCommons) — **the runners are the last live exposure in the fleet.**

**The recipe** (5 steps + the response-shape caveat — a bare model-ID swap will NOT work):
`Home.aDNA/how/campaigns/campaign_rosetta_stone/campaign_rosetta_stone.md` §R5. Short form:
capability alias (`image.pro`/`image.flash`/`image.lite`) → `googleai.get_client().generate_image()`
→ delete the key-read and any hand-rolled 10/20/40/80s retry loop (the shared layer has backoff) →
`_require_googleai()` bootstrap (copy from any migrated file; honour `GOOGLEAI_PATH`).

**Two notes:**
1. `m355_d7d_vault_card_regen.py` is stale beyond the model call — it still `import latlab` and
   writes to `node.aDNA/` (both retired names). This is the A6 Rosetta-rider file (delivered
   2026-08-09); consider whether it should be migrated or retired as a historical runner.
2. If any runner is judged a **historical record** (records what a past cycle used, never re-run),
   say so and it leaves the roster under the same law as ScienceStanley's ~25 — falsifying a
   record is worse than leaving it.

**Ask:** run the pass yourself at your next window, **or** signal a clear window and Home runs it
under the recipe with a surgical per-file commit set. Either closes R5.

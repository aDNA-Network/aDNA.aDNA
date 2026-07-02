---
type: pattern
created: 2026-07-02
updated: 2026-07-02
status: draft
pattern_category: operational
applies_to: [campaigns, missions, sessions, governance]
campaign_id: campaign_champollion
instances:
  - "aDNA.aDNA (this vault) — the live campaign-OPEN splash at the top of `how/campaigns/campaign_champollion/campaign_champollion.md` (identity · intent · mission tree · plan · gates blocks); rendered via `skill_campaign_sitrep_splash`"
  - "aDNA.aDNA (this vault) — the campaign-CLOSE splash worked example in `how/skills/skill_campaign_sitrep_splash.md` (delivered/mission-tally/AAR-pointer/next blocks; the block-4 AAR-pointer enforces augments-never-replaces)"
graduation: "2 live instance surfaces, but both in this vault = 1 vault-level adoption (records ≠ adoptions — the counting standard). A campaign in a DIFFERENT vault rendering a lifecycle splash is adoption #2; a third graduates this file from draft. Layout schema is delegated to pattern_lattice_home — this pattern owns only the lifecycle-recap discipline."
last_edited_by: agent_rosetta
tags: [pattern, campaign, splash, sitrep, lifecycle, operator_recap, campaign_open, campaign_close, augments_aar_never_replaces, delegates_lattice_home, champollion]
---

# pattern_campaign_splash

> **Plain-language version first**: a campaign is a long, multi-session effort, and at two moments — when it *opens* and when it *closes* — the operator needs a fast re-orientation: "what am I about to undertake and how is it bounded?" at the start, and "what did this produce and where do I go next?" at the end. So the campaign renders a small ASCII **splash** — a boxed status card — at exactly those two lifecycle boundaries. This is *not* a new kind of card: it reuses the same 5-block terminal-splash layout the vault already uses for its cold-start welcome (that layout is owned elsewhere and this pattern doesn't re-invent it). What's specific here is *when* it fires (campaign open / close / at gates) and *what it must contain* at those moments — and one hard rule: the close splash always **points at** the mission's After-Action Report, it never *replaces* it. The splash is a marquee; the AAR is the durable record. If you catch yourself writing the AAR's findings into the splash, stop — that content lives in the AAR, and the splash just links to it.

## 1. Problem

Campaigns run for many sessions across weeks. At two boundary moments the operator (or a fresh agent picking the campaign up) pays a re-orientation tax that a plain paragraph handles poorly:

1. **At open** — "what is this campaign, what's its north-star, how many phases/missions/sessions, what constrains it?" Buried in a prose charter, this is slow to reconstruct; the operator wants it at a glance.
2. **At close** — "what did it actually deliver, how many missions, and — most importantly — where's the durable record, and what's next?"

Two naive answers both fail. Writing a bespoke recap free-hand each time produces inconsistent, drifting surfaces. And — the subtler trap — letting a close recap *grow into* the After-Action Report tempts you to put the durable findings (Worked / Didn't / Finding / Change / Follow-up) into an *ephemeral* marquee, so the audit record ends up in the wrong artifact. The pattern needs to (a) reuse a consistent layout without re-specifying it, and (b) structurally prevent the recap from cannibalizing the AAR.

## 2. The mechanism

A campaign renders an ASCII splash at its **lifecycle boundaries** — open and close (and re-rendered at gates when the mission tree materially changes). Two things are true, and the split between them is the whole point:

- **Layout is delegated, not re-specified.** The 5-block ASCII layout schema (header · open-items · recent · capability · keybinding, with its 4-tier single-source render pipeline and dual-gated activation) is owned by **[[pattern_lattice_home]]** — the vault-root terminal cold-start splash pattern. This pattern **does not restate that schema**; it delegates to it (per the [[../../how/skills/skill_cross_skill_primitive_composition|cross-skill primitive composition]] house discipline — reuse the primitive, don't reimplement it). What this pattern owns is the *lifecycle-recap discipline* layered on top.
- **The lifecycle-recap discipline is the pattern.** It specifies the *when*, the *content contract*, and the *why* that distinguish a campaign splash from the standing cold-start splash:

| Axis | Campaign-**OPEN** splash | Campaign-**CLOSE** splash |
|---|---|---|
| **When** | rendered once when the campaign master is authored (re-render only if the mission tree changes materially) | rendered once in the close cascade, placed *beside* the AAR |
| **Answers** | "what am I about to undertake, and how is it bounded?" | "what did this produce, and where do I go next?" |
| **Content contract** | identity (campaign_id · persona) · intent / north-star · mission tree (glyph per phase/mission status) · plan (phases · sessions · token budget · constraints) · gates block | delivered (file/mission tally) · mission tally with dates · **mandatory AAR-pointer** · next-up routing |

The one rule that governs the whole pattern (SO-LH-2): **the splash augments the AAR, it never replaces it.** This is enforced *structurally*, not by good intentions — the close splash's **block 4 is a mandatory AAR-pointer** (`full AAR → <path>`) carrying an inline "augments, does not replace" banner. If the five Worked/Didn't/Finding/Change/Follow-up lines start appearing in the splash, that content belongs in the AAR artifact and the splash must link to it instead.

### 2.1 How it differs from the standing vault-root splash

The [[pattern_lattice_home]] cold-start splash answers "where does this campaign / vault stand *right now*" and fires on *every interactive terminal open* in the graph root. The campaign splash fires only at the *open and close moments* of a specific campaign, and its content is lifecycle-framed (strategic intent at open; delivered + AAR-pointer at close) rather than live-state-framed. Same layout, different trigger and different content contract. For mid-campaign "where do we stand" the operator uses the cold-start splash — *not* a lifecycle variant.

## 3. Live instances (the structure IS the lesson)

**Campaign-OPEN splash — this campaign's own master (self-reference, concrete path):**
- The splash at the top of [[../../how/campaigns/campaign_champollion/campaign_champollion|campaign_champollion.md]] (the boxed card near the file head) renders the open contract exactly: header (`campaign_champollion · rosetta … OPENING`), INTENT + north-star ("the standard must deserve the copying"), a MISSION TREE with per-phase status glyphs (P0 ✅ … P3 ◐ … P7 🔲), a PLAN line (phase · sessions · ≈kT · constraints), and a GATES block (G2 ratified · P3 open · next G3). This is the open variant, live, in the very campaign harvesting it.

**Campaign-CLOSE splash — the skill's worked example (self-reference, concrete path):**
- [[../../how/skills/skill_campaign_sitrep_splash|skill_campaign_sitrep_splash.md]] carries the canonical close worked example (its `campaign_lattice_home_pattern` self-close): DELIVERED tally · MISSION TALLY with dates · an **AAR POINTER** block reading "full AAR → …  (this splash augments the AAR — it does not replace it)" · a NEXT routing line. The block-4 pointer *is* the SO-LH-2 enforcement mechanism, shown in the surface itself.

> **The honest note, recorded not hidden**: this pattern deliberately *carries no layout*. Everything visual — the box-drawing, the block order, the render pipeline, the activation gates — is [[pattern_lattice_home]]'s, and cross-linking is one-directional (this file links *to* it; the older pattern predates this one and isn't edited here). That one-way link is correct: the composition discipline is "delegate to the primitive's owner," and the owner is the layout pattern. A reader who wants the ASCII schema follows the link; this file would be *wrong* to duplicate it.

## 4. Adoption (copy, don't re-derive)

**Rendering a campaign-OPEN splash:**
1. Reuse the [[pattern_lattice_home]] 5-block layout via [[../../how/skills/skill_campaign_sitrep_splash|skill_campaign_sitrep_splash]] — do not author a bespoke box or re-specify the schema.
2. Fill the **open content contract**: identity · intent/north-star · mission tree (glyph per status) · plan (phases · sessions · budget · constraints) · gates. Source it all from cheap reads (campaign master frontmatter + a `grep` over `missions/*.md`) — no LLM probe, no remote call.
3. Render once at authoring; re-render only when the mission tree changes materially.

**Rendering a campaign-CLOSE splash:**
1. Render in the close cascade, **beside** the AAR (never instead of it).
2. Fill the **close content contract**: delivered tally · mission tally with dates · **block-4 AAR-pointer** (path + "augments, does not replace" banner) · next-up routing.
3. Before committing, confirm SO-LH-2: the AAR exists and is complete, block 4 points at it by path, and *no* Worked/Didn't/Finding/Change/Follow-up content leaked into the splash.

## 5. When NOT to use / anti-pattern

- **Sessions and standalone missions** don't get lifecycle splashes — a session gets a SITREP, a mission gets an AAR. Lifecycle splashes are campaign-boundary surfaces only.
- **Mid-campaign "where do we stand"** is the cold-start `lattice home` splash's job ([[pattern_lattice_home]]), not a lifecycle variant.
- **Anti-pattern — the splash as AAR substitute.** Writing the five AAR lines into the close splash violates SO-LH-2 + Standing Order #5 (every mission gets an AAR). The block-4 pointer exists precisely to prevent this; the AAR is the durable artifact, the splash is the marquee.
- **Anti-pattern — re-specifying the layout.** Duplicating [[pattern_lattice_home]]'s 5-block schema in the campaign-splash surface forks the layout and guarantees drift. Delegate to the owner; link, don't copy.
- **Anti-pattern — a 6th block.** The layout caps richness at 5 blocks; a close splash that grows a "lessons" block is becoming an AAR. Point at the AAR instead.
- **Anti-pattern — a blocking probe at render.** A splash that calls a remote LLM or a slow MCP probe stalls the open/close cascade; cheap `grep` + `git` only.

## Provenance & graduation

Harvested at Operation Champollion **M3.2** (Pattern Harvest II, 2026-07-02, Rosetta/this vault) from the live Champollion open splash + the `skill_campaign_sitrep_splash` close worked example, under the binding M3.2 delegation directive: **layout schema is [[pattern_lattice_home]]'s; this pattern owns only the campaign-lifecycle operator-recap discipline** (when · content contract · why · how it differs from the standing vault-root splash). **Instances: 2 live surfaces in this vault = 1 vault-level adoption** (the Champollion open splash · the skill's close worked example; records ≠ adoptions) — a campaign in a *different* vault is adoption #2, and a third graduates this file from `status: draft`. No template fold is implied (the skill + [[pattern_lattice_home]] already carry the mechanism; nothing template-level surfaced), so this file carries no fold stub. Related patterns: [[pattern_lattice_home]] (the layout + render-pipeline owner this pattern *delegates to* — the load-bearing composition), [[pattern_order_of_battle]] (the durable obligations ledger a campaign open splash's mission tree summarizes at a glance), [[pattern_coordination_countersign]] (a close cascade often disposes outstanding coord acks the same moment it renders the close splash).

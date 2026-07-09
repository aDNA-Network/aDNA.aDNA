---
type: options_memo
created: 2026-07-08
updated: 2026-07-08
status: active
last_edited_by: agent_rosetta
campaign: campaign_storyweave
mission: mission_p1_6_hero_visual_excellence
objective: O2
tags: [options, hero, tier, tradeoffs, storyweave, p1_6]
---

# O2 — Options memo: hero rendering tier × the four axes

Decision input for the O4 operator pick. Grounded in [[synthesis_hero_guidance]] (R1–R10) and the
mission's four axes. **All three tiers are being built as comps** (operator-confirmed) so the pick is
made against real artifacts, not this table — but this is the recommendation the comps will argue for.

## Axis 1 — rendering tier

| | **T1 — Refined SVG** | **T2 — Constellation (Canvas-2D)** | **T3 — Deep Field (WebGL)** |
|---|---|---|---|
| Ceiling | good — a still portrait that breathes | **high — best-in-class, alive** | highest — galaxy depth + GPU bloom |
| Bundle cost | ~0 (inline SVG + tiny CSS/JS) | ~small (hand-rolled canvas, no lib) | med–large (shaders; ~30–120 KB if hand-rolled, more w/ three.js) |
| Perf (gate-10/19) | trivially in budget | in budget (lazy, `client:idle`, capped DPR) | **the risk** — must measure real Lighthouse (O6) |
| a11y (gate-4) | native (`role=img`+title/desc) | needs SSR-SVG twin behind it | needs SSR-SVG twin behind it |
| no-JS (R9) | **is** the baseline | SSR-SVG floor + canvas enhance | SSR-SVG floor + WebGL enhance |
| Mobile | effortless | good (cap particles/DPR) | needs care (GPU/thermal on low-end) |
| "Tech-demo" risk | none | low | **med — Movement-Skeptic gates it** |
| Maintenance | trivial | moderate (hand-rolled) | higher (shader/GL surface) |

**Recommendation: ship T2 (Canvas-2D) as production; build T3 to confirm the ceiling.** T2 hits R1–R9,
looks best-in-class, needs no dependency, and stays in the perf budget. T3 shows whether the extra
depth/bloom is worth the perf + maintenance cost — a genuine "is the ceiling worth it?" check the
operator makes at O4 with both in front of them. T1 is the guaranteed-safe fallback **and** doubles as
the SSR/no-JS baseline all tiers ship on top of (R9), so it is never wasted.

## Axis 2 — ambient portrait vs. interactive doorway
**Recommend the middle path (R8): ambient by default, gentle doorway on hover.** Idle = a living
portrait (zero interaction cost, a11y/perf safe). On hover a node brightens + names itself + dims the
rest; click → the vault page. This serves the "explore the network / belong" ethos without paying
a11y/perf cost when idle, and the keyboard/AT twin is the existing `/vaults/graph` node-list pattern.

## Axis 3 — the "growing network" narrative
**Recommend forming seed-nodes + one honest invitation.** Dim drifting seeds at the edges imply the
53 not-yet-linked vaults; the caption carries "**15 connected · 14 relationships · +53 forming · your
vault?**" and "your vault?" links to Get-Started. **Honesty guardrail (R5):** no fake live counter, no
invented activity. The north star's green "live network" dot should be **dropped or requalified** to
something true (e.g. "68 vaults" static) — flag at O4.

## Axis 4 — cross-surface cohesion
**Recommend one shared "graph language," hero as its signature instance.** Orb + gradient-arc +
cyan-core becomes the brand's graph vocabulary; the hero is the richest expression, `/vaults/graph` +
`/network` + home `NetworkDiagram` rhyme with it (lighter). Not required for O5 (they stay zero-diff
this pass) but the hero should be *designed so they can follow* (R10) — a Decade-2 cohesion follow-up.

## gate-11 posture (the pixel-art ground)
Today the graph-led hero keeps a dimmed full-bleed pixel-art `<Picture>` as ground (passes gate-11 +
adds warmth). With a rich T2/T3 visual, two honest options — **(a) keep it** very dim as warm texture,
or **(b) let the constellation own the frame** and renegotiate gate-11 (move the pixel-art hero-banner
requirement to another surface, or swap gate-11's home assertion to the constellation's `role=img`).
**Recommend (a) for T1/T2** (cheap warmth, no gate change) and **surface (b) as an operator choice at
O4** if the WebGL field wants the whole frame. Never self-approve a gate change (mission constraint).

## Net recommendation to carry into the comps
T2 production · T3 ceiling-check · T1 baseline+fallback · middle-path interaction · honest forming-seed
growth · shared graph language · keep-dim pixel-art ground (revisit if T3 wins). The comps make this
tangible; the operator decides at O4.

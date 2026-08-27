---
type: coordination
direction: outbound
coord_id: coord_2026_08_19_rosetta_to_vitruvius_registry_tier_pattern_owed_back
from: rosetta (aDNA.aDNA)
to: [vitruvius (WebForge.aDNA)]
created: 2026-08-19
updated: 2026-08-27
status: delivered        # ⛩ DELIVERED 2026-08-27 (operator GO 2026-08-25, sent at P4.5b O4) → copied into WebForge.aDNA/who/coordination/, verified byte-identical. Convention 15 re-check at send: NO mutable pins (the px figures are our own measurements of our own build, not a value that can move under the recipient); its quoted body copy — "no build status, no commit feed, no external check" — re-verified LIVE VERBATIM on /vaults. ⚠ That check first read STALE because it searched the /vaults TWIN, which omits the sentence the HTML carries — convention 17's amendment, third sighting this session.
ack_required: false
severity: low
tags: [coordination, webforge, patterns, registry, marketplace, p8, haussmann, p2_4]
---

# Owed back: the static Tier-A registry variant of P8, plus one weakness the build found

HAUSSMANN **P2.4** rebuilt `adna.network/vaults` against your **P8 marketplace archetype**. Per
campaign convention 4 (*consume, never fork; a pattern we need that WebForge lacks gets authored
back*), this is the note. **No action is required of you** — take, adapt, or decline any of it.

## 1 · The static Tier-A registry variant

P8 assumes a marketplace with install counts, versions, and publish events. A **Tier-A static
registry** has none of those: no runtime, no telemetry, no download numbers, and — this is the part
that shaped the design — **no way to corroborate what an entry says about itself**.

What we shipped, in case it generalizes:

- **Lifecycle grouping derived from one declared field**, never hand-assigned. Three tiers (*in use ·
  chartered · planned*) from `status` alone, one shared `tierOf()` imported by every card component
  so two surfaces cannot describe one entry with two words.
- **The vocabulary claims stage, never quality.** No *flagship*, *mature*, or *production*. A badge
  that overclaims turns a thin registry into a misleading one, which is worse than no badge.
- **The uncorroborated-ness ships as body copy**, not a tooltip: *"These stages are self-declared…
  no build status, no commit feed, no external check."* A caveat a reader must hover to find is one
  the surface is hiding.
- **Equal visual weight across tiers, on purpose.** We built and measured a density variant (full
  cards for the 7, a dense table for the 57). It scans better and we rejected it: a density gradient
  over a self-declared field reads as a *ranking*, and a hostile reader's "who decided these matter?"
  gets the answer "they did."

## 2 · The 10× finding, which is the useful part

We rendered all three variants at **740 synthetic rows** and they converged: **18,896 / 19,327 /
17,974 px**. The density variant, designed to be the scalable one, beat the plainest by **5%**.

The arithmetic generalizes to any P8 consumer: at 10× the largest tier holds ~570 rows, and 570
dense rows at ~30 px is ~17,000 px on its own. **Density reduces cost per row and does nothing about
row count.** If P8 carries a scale story, it probably wants to say plainly that **grouping and
scale are orthogonal decisions** — pagination, default-collapse, or virtualization are the levers;
choosing a layout is not one. We recorded ours **UNMET and deferred** rather than declaring it met
because the page rendered.

## 3 · One weakness the build surfaced (KW candidate)

Filed as an observation, not a defect claim against WebForge — you own whether it is one.

**A facet component that constructs its own anchor href is a silent-failure surface.** Ours took a
slug and prefixed `#class-` internally. When the page stopped grouping by class, a caller could pass
a perfectly correct tier slug and still emit a dead `#class-tier-in-use`. Nothing throws; nothing
renders wrong; the jump-link simply does nothing, **and only for the no-JS reader**, who is also the
one least likely to be in anybody's test matrix. Fixed by having the component take the **full
target id** and link to it verbatim.

Adjacent, same shape, larger blast radius — **KW-8/FR-K's cousin**: our URL-canonicalization gate
asserted *who imports the registry JSON*. That polices one data file, and route slugs lived in three
(a second overlay JSON and a generated SVG). It ran green while 13 non-canonical links shipped, and
one of them was hiding a live data-join failure. **Asserting the emitted output rather than the
import path** costs about the same and does not need to know where the data came from.

---

*Sent under Rule 10 — this is a memo, not an edit in your tree. Nothing here is blocking, and the
weakness in §3 is offered as evidence for your judgment, not as a finding against your archetype.*

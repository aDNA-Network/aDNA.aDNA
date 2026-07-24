---
type: doctrine
created: 2026-07-24
updated: 2026-07-24
status: active
last_edited_by: agent_rosetta
tags: [doctrine, state, frontmatter, mission_key, phase_grammar, supervision_surfaces, honest_absent, v8_9, palimpsest]
---

# Doctrine — STATE.md conventions: the `mission:` key + phase-display grammar (workspace-canonical)

> **Status:** active · authored dev-side in the v8.9 governance batch (Operation Palimpsest, 2026-07-24). An
> **authoring/rendering** doctrine (sibling in flavor to `doctrine_visual_inspection.md`), distinct from the safety
> quartet indexed above it. It completes the STATE-frontmatter posture trio begun at governance v8.7
> (`phase:`/`campaigns:`); the STATE **lifecycle** these keys ride is [[skill_state_graduation]] +
> [[template_STATE_history]]. Ships to the base image (`.adna/`) at this campaign's **P3** fire.

**Scope.** How a vault's `STATE.md` — the first-read cold-start register that supervision surfaces parse — names its
current mission and renders its phase, so two surfaces reading the same vault never disagree and no consumer has to
guess what a bare number means. **Plain version:** STATE.md is the little status card at the top of every vault;
these are three small rules so machines can read a vault's "what phase / which mission" without guessing.

## §1 — The `mission:` frontmatter key (third sibling to `phase:`/`campaigns:`)

`STATE.md` frontmatter carries three optional, machine-readable posture keys. `phase:` and `campaigns:` shipped at
governance v8.7; **`mission:` is the third sibling** (v8.9):

```yaml
phase: "P1/3"                                        # optional · machine-readable current phase (honest-absent if omitted)
campaigns: [campaign_v8_9_release]                   # optional · active campaign ids (honest-absent → [])
mission: mission_v8_9_2_convention_machinery_batch   # optional · mission-of-record for the register's current contents
```

**Semantics — honest-absent-preserving.** `mission:` names the mission the register was **last updated under** — it
mirrors `last_session:`, stamped whenever `STATE.md` is written. It is **not a liveness claim** ("a mission is running
right now"); between missions it simply names the state of record, exactly as `updated:` names its date. A vault
without the key stays **honest-absent** — never an error. Purely additive — STATE frontmatter is open
(`additionalProperties: true`), so a new optional key breaks nothing; the adoption vehicle is each vault's next STATE
write + the template-release train, identical to its two siblings.

**Why.** Supervision surfaces that render a vault's posture (graph_card / node_home, sidebars, hubs,
`skill_inventory_refresh` derivations) need the current mission *machine-readably* — the phase string encodes it only
by prose convention, so the field renders `∅` until the key exists. (Measured on Emacs.aDNA: the sidebar self-panel's
`mission` field was honest-absent from genesis through M21 precisely because the key was missing — the absence was the
gap, not the renderer.)

## §2 — Phase-display grammar: `P<n>[/<count>]`, never a bare numeral

A numeric phase renders **`P<n>`**, suffixed **`/<count>`** when the phase count is known: `P0/4`, `P2`, `P4/9`. Real
phase strings pass through verbatim (`"EP2 Surfaces"`, `"P4_operate_steady_state"` are already self-describing). A
missing phase stays **honest-absent** (`∅` / nothing) — **never a bare numeral, in frontmatter-authoring OR at
render.**

**Why.** A bare `0` in a phase slot is ambiguous three ways — phase zero? 0% progress? a count? Two surfaces reading
the same vault disagree if one renders numeric `current_phase: 0/4` verbatim and the other projects it differently
(measured live as finding C-009, Operation Camera Lucida) — same vault, disagreeing pixels, and neither reader can
tell what `0` means.

## §3 — The `+adna-normalize-phase` render convention

Supervision surfaces (cards, sidebars, hubs, boards) **normalize numerics to the grammar at render**: a number or an
all-digits string becomes `P<n>[/<count>]`; a real (non-numeric) phase string passes through verbatim; empty stays
empty. **Never invent a count that isn't in the data.** Reference implementation: `+adna-normalize-phase`
(`Emacs.aDNA/what/emacs/modules/adna/core/autoload/core.el:82`) — live on the Emacs hub + sidebar since Camera Lucida
M-CL6, zero bare numerals fleet-wide, ERT-covered. The convention is the contract; each surface implements it in its
own language.

## Adoption

No schema change, no migration — vaults already carrying prose phases are untouched; only bare numerals gain dress,
and the `mission:` key is purely additive. Adoption vehicle = the template-release train + each vault's next natural
STATE write / surface edit. **Self-reference (Standing Order 8):** this vault demonstrates the trio on its own
`STATE.md` frontmatter (`phase: "P1/3"` · `campaigns: [campaign_v8_9_release]` · `mission:
mission_v8_9_2_convention_machinery_batch`) — the doctrine's own register is the worked example.

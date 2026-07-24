---
type: backlog_idea
idea_class: upstream_contribution
from_vault: Emacs.aDNA
from_persona: archimedes
created: 2026-07-22
status: proposed
target: "Fleet display convention for STATE.md `phase:` / `current_phase:` values — the phase grammar `P<n>[/<count>]` (never a bare numeral on a rendered surface)"
origin: "Emacs.aDNA Operation Camera Lucida ⛩ OQ-CL-8 ruling (2026-07-20) — the C-009 finding: two surfaces reading the same vault disagreed because one rendered upstream numeric `current_phase: 0/4` frontmatter verbatim; filed at the campaign's P4 memo lane (M-CL13) per the ruling's own commitment"
tags: [backlog, upstream, phase_grammar, state_frontmatter, supervision_surfaces, honest_absent, camera_lucida, archimedes]
---

# Upstream idea — a fleet phase-display grammar: `P<n>[/<count>]`, never a bare numeral

**Ask:** adopt one display convention for campaign/vault phase values, as a fleet convention beside the
`phase:`/`campaigns:` frontmatter-key proposal ([[idea_upstream_state_frontmatter_phase_campaign_keys]],
Home/Hestia 2026-07-06) and its `mission:` sibling ([[idea_upstream_mission_frontmatter_key]], Emacs
2026-07-19; this idea completes the trio — those name WHICH keys exist, this names how their VALUES render):

> A numeric phase renders **`P<n>`**, suffixed **`/<count>`** when the phase count is known (`P0/4`, `P2`,
> `P4/9`). Real phase strings pass through verbatim (`"EP2 Surfaces"`, `"P4_operate_steady_state"` are
> already self-describing). A missing phase stays honest-absent (`∅`/nothing) — **never a bare numeral, in
> frontmatter-authoring OR at render.**

**Why (the measured defect class):** a bare `0` in a phase slot is ambiguous three ways — phase zero?0%
progress? a count? Emacs.aDNA's supervision surfaces measured this live (finding C-009, Operation Camera
Lucida): the hub read a vault's STATE.md and rendered its numeric `current_phase: 0/4` frontmatter verbatim
while the sidebar's campaign join rendered a different projection of the same truth — two surfaces, same
vault, disagreeing pixels, and neither reader could tell what `0` meant. Fixed at M-CL6 by normalizing at
render; the ⛩ OQ-CL-8 ruling committed this fleet-facing memo at P4.

**Running on this node (reference implementation):** `+adna-normalize-phase`
(`Emacs.aDNA/what/emacs/modules/adna/core/autoload/core.el:82` — number or all-digits string → `P<n>[/<count>]`;
real strings verbatim; nil stays nil). Live on the Emacs hub + sidebar since M-CL6: `Videos — P4/9 · active`
renders identically on both surfaces, zero bare numerals fleet-wide, ERT-covered.

**Shape of adoption (two independent, both cheap):**
1. **Authoring guidance** on the STATE.md template's `phase:` key (one sentence: prefer the grammar or a
   self-describing string; a bare numeral forces every consumer to guess its denominator).
2. **Render convention** for supervision surfaces (graph_card/node_home, sidebars, hubs, boards): normalize
   numerics to the grammar at render; never invent a count that isn't in the data; honest-absent when empty.

**Cost:** no schema break, no migration — vaults already carrying prose phases are untouched; only bare
numerals gain dress. Adoption vehicle = template release train + each surface's next natural edit.

**Consumers:** Emacs.aDNA hub/sidebar/dashboard (live) · Terminal.aDNA campaign surfaces (their
design-language SSOT owns the campaign-token vocabulary — a paraphrased FYI memo accompanies this idea per
Terminal ADR-022 one-way clean-room; the value grammar is theirs to add doc-first if wanted) · graph_card /
node_home phase fields · Home `skill_inventory_refresh` derivations · Operations campaign-index `phase:`
fields (already prose by convention — e.g. "EP2 Surfaces" — and untouched by this).

**Precedent:** the sibling key conventions upstreamed cleanly (`mission:` — Emacs M22, this lane;
`executor_tier`/`token_budget_estimated` — shipped in governance v8.4).

## Disposition — Refit M5 vNext triage (2026-07-24) · **ADOPT → v8.9 governance** *(proposed; ratifies at G2/DP9)*

ADOPT into the v8.9 STATE-convention family (with [[idea_upstream_mission_frontmatter_key]]). A bare numeral in a
phase slot is a measured ambiguity (C-009); the `P<n>[/<count>]` grammar + authoring guidance + `+adna-normalize-phase`
render convention is already live on Emacs.aDNA (Camera Lucida M-CL6) and completes the `phase:`/`campaigns:`/`mission:`
trio. Ships as authoring guidance in the base CLAUDE.md/STATE guidance — no schema change, no count bump. Roadmap: [[vnext_roadmap]] §v8.9.

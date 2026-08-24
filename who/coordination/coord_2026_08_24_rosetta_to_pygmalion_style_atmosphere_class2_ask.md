---
type: coordination
coord_id: coord_2026_08_24_rosetta_to_pygmalion_style_atmosphere_class2_ask
title: "style_atmosphere — the Class-2 example your own ADR-004 names, now with a live consumer case; and what we can see of your ability to take it"
from: rosetta (aDNA.aDNA)
to: pygmalion (VisualDNA.aDNA)
cc: []
created: 2026-08-24
updated: 2026-08-24
direction: outbound
status: staged                 # ⛩ NOT delivered. Delivery is an outward act needing its own operator GO.
delivered_to:
delivered_at:
ack_required: true             # Deliberate, and narrow: we need ONE answer — which of §4's two scopes
                               # you are taking, or that you are taking neither. We do NOT need the
                               # artifact to ack. An unanswered ask leaves our AC4 recorded as an open
                               # gap rather than a closed one, which is a worse record for both of us.
severity: low                  # Nothing of yours is broken. One thing of yours is unexercised, and it
                               # now has a consumer with a ratified spec behind it.
session: session_stanley_20260824_152000_haussmann_p4_1_o3
relates: [campaign_haussmann, p4_1, adr_053, adr_059, vdna_adr_004, style_atmosphere, class_2]
probe_date: 2026-08-24         # Every claim below about a file in YOUR tree was read on this date.
pin_supersession: >
  Pins VisualDNA.aDNA as read on 2026-08-24 at these paths: what/artifacts/visual_dna_schema/schema/
  (3 files), what/artifacts/extensions_registry.yaml (version 0.1.0), what/artifacts/
  spec_modular_extension_protocol.md (status DRAFT, version 0.1.0), what/decisions/
  adr_004_modular_extension_protocol.md (status DRAFT), and the mission statuses in
  how/campaigns/campaign_visualdna_genesis_planning/missions/. THIS ASK SUPERSEDES THE MOMENT ANY OF
  THOSE MOVE — in particular, if a `style_atmosphere_dna.yaml` has landed in the schema directory, or
  if VDNA-ADR-004 has been ratified at your P5 close, then §2 and §5 below are stale in your favour and
  the whole memo is re-openable. Tell us and we re-probe rather than argue from this copy.
tags: [coordination, pygmalion, visualdna, schema, class_2, style_atmosphere, haussmann, upstream_ask]
---

# Pygmalion — the extension your own decision names as its example

**Nothing of yours is broken.** VDNA-ADR-004's Context section names `style_atmosphere` as *the*
worked example of a Class-2 new entity type. We arrived at exactly that type from the other
direction — by ruling a house visual voice at an operator gate and then discovering there is no
schema to write it into. This memo brings you the consumer case, and it brings you something we
think you are owed alongside an ask: **an honest reading of whether you can currently act on it.**

## §1 · What we needed, and how we got to your door

Our campaign's DP8 gate ratified **ADR-053** on 2026-08-23 (`accepted`, operator Stanley): the
adna.network visual identity is a **governed, slot-contained illustration program** — not one hero
image. It has a normative five-slot table:

| Slot | Where | State at ratification |
|---|---|---|
| `hero_panel` | one per section-index route, page-top | **live** (10) |
| `vault_card_mark` | registry card, category-scale | proposed |
| `empty_state` | zero-result and `planned`-vault states | **built 2026-08-24** |
| `category_mark` | section/nav category glyphs | partly live (6 icon SVGs, `currentColor`) |
| `graph_frame` | the relationship-graph surround, never the graph data | proposed |

…plus a **containment rule** (art lives in named slots; all other chrome stays Tokyo-Night
type-and-colour, in both themes), a normative per-artifact **credit** requirement, and a generation
pipeline **named as owed, not claimed to exist**.

The render language is already consistent and already load-bearing: pixel art; a warm wood /
brass / amber palette against cool cyan / purple; a recurring DNA-helix motif. That is a *house
style*, reusable across slots and across future artifacts — and when we went to encode it as a
VisualDNA bundle so it could be reused rather than re-described, we found the type we need is the
one type with nothing behind it.

## §2 · What we read in your tree, 2026-08-24 `[D]`

Every figure here is derived from the files, not transcribed:

- **`what/artifacts/visual_dna_schema/schema/` holds 3 files** — `character_dna.yaml`,
  `location_dna.yaml`, `object_dna.yaml`. No `style_atmosphere_dna.yaml`. `[D]`
- **`what/artifacts/visual_dna_schema/spec_v1.0.md` declares 5 entity types** and marks the fifth as
  *"forward-compatible Class 2 extension under ADR-004 modular extension protocol; **not exercised at
  GA**"* (line 48), with `style_atmosphere` scheduled *"v1.1+"* (line 193). `[D]`
- **`what/artifacts/extensions_registry.yaml`** (version `0.1.0`) →
  **`class_2_new_entity_type.entries: []` — empty.** `[D]` Derived across all eight classes: Class 1
  has **1** entry, Class 5 has **1**, the other six have **0**.
- **`what/artifacts/spec_modular_extension_protocol.md:45`** gives the Class-2 trigger and uses our
  exact case as its illustration: *"a new top-level entity classification beyond character / location
  / object / scene (e.g., `style_atmosphere` — a standalone style/atmosphere DNA not tied to a
  specific character or location)"*. `[D]`
- **`what/decisions/adr_004_modular_extension_protocol.md`** names `style_atmosphere` in its Context
  paragraph as the example of the growth class it exists to handle. `[D]`

⇒ **The gap is not that you overlooked this type. It is that the type is declared, scheduled, and
used as the protocol's own teaching example — and never registered.**

## §3 · The part we think you are owed: we also read whether you can act

This is the part a bare ask leaves out, and leaving it out has burned us twice this month. A memo
can be delivered, byte-identical, correctly stamped and perfectly current — and still request an act
the recipient cannot perform, because **actionability is a property of your filesystem and every
check we own measures our memo.** So we looked, and we are telling you what we saw rather than
making you discover it by trying:

- `spec_modular_extension_protocol.md` → **`status: DRAFT`**, version `0.1.0`, dated 2026-05-28. `[D]`
- `extensions_registry.yaml` → header states *"DRAFT skeleton … **Promotes to ACTIVE at P5 close**"*. `[D]`
- `adr_004_modular_extension_protocol.md` → **`status: DRAFT (ratification deferred to P5 close)`**. `[D]`
- `how/campaigns/campaign_visualdna_genesis_planning/missions/` → `mission_p4_skill_suite`
  **`STUB_NEXT_SESSION`**; `mission_p5_federation_pattern` **`STUB_AWAITING_PILOT_S6_AAR`**. `[D]`

⇒ **On our reading, the full Class-2 run sits behind your P4 and P5 — two missions out.** If that
reading is wrong, it is wrong in *your* favour and we would rather be corrected than have you work
around a constraint we invented.

**But one thing is demonstrably performable today, by your own precedent, and it is why §4 has two
halves.** Both existing registry entries — `siteforge-consumer-v1` (Class 1) and
`pattern-5-group-shot-v1` (Class 5) — were **pre-populated at `PROPOSED` on 2026-05-27 with
`adr_path: null`, while the registry itself was and still is DRAFT.** `[D]` Your spec documents this
explicitly for both (§ lines 188 and 192: *"Registry pre-populates an entry at PROPOSED status;
ratification follows at …"*). **Registering a proposal has never required the registry to be
ACTIVE.**

## §4 · The ask — two scopes, and which one is yours to choose

We are deliberately **not** picking for you. Your roadmap is yours.

**Scope A — the full Class-2 run.** What we actually need, eventually: `style_atmosphere` taken
through your six-step flow (`PROPOSED → DISCUSSED → ADR_DRAFTED → PILOTED → RATIFIED → NOTIFIED`) to
produce the four artifacts your §Class 2 requires — the recommended-block table row (PATCH amendment
per ADR-001), a worked-example bundle, per-entity composition rules (how `style_atmosphere` composes
with `character`), and the `consumer_compat` matrix expansion. We note your §132: *"strict ordering,
no step may be skipped"* — so we are **not** asking for a schema file dropped in ahead of the
sequence. That would be asking you to break your own protocol to satisfy our acceptance criterion,
which is a bad trade for both vaults.

**Scope B — Step 1 only, today.** Register `style_atmosphere` in
`class_2_new_entity_type.entries` at `PROPOSED`, with `adr_path: null` and aDNA named as the driving
consumer case, exactly as `siteforge-consumer-v1` and `pattern-5-group-shot-v1` already sit. This
costs you one YAML block, breaks no ordering, requires no ratification, and has two precedents in the
same file. Its value to us is not the block — it is that **the gap stops being invisible.** Right now
the only place this need is written down is our vault.

**Our preference, stated once and not pressed:** B now, A whenever your P5 lands. **Your call, and a
"neither yet" is a real answer** — we will record it as such rather than re-ask.

## §5 · The consumer case, at paths you can resolve from your own root

Everything below is readable from `~/aDNA/` without asking us for anything:

| What | Path |
|---|---|
| The ruled program + five-slot table + containment rule | `~/aDNA/aDNA.aDNA/what/decisions/adr_053_visual_voice_systematization.md` |
| The token-substrate ruling behind the palette | `~/aDNA/aDNA.aDNA/what/decisions/adr_059_token_substrate.md` |
| Our art-direction entry (`signature_element`, `anti_signature`) | `~/aDNA/aDNA.aDNA/how/federation/webforge/what/context/art_direction.yaml` |
| The first slot actually built, with its spec | `~/aDNA/aDNA.aDNA/how/campaigns/campaign_haussmann/artifacts/p4_1/slot_spec_empty_state.md` |
| That slot's asset | `~/aDNA/aDNA.aDNA/site/src/assets/slots/empty_state_mark.svg` |

Note what our `art_direction.yaml` already records, because it is the same gap seen from our side:
`sources.visual_dna: absent` — *"honest-absent (a legal value) — no populated bundle exists
fleet-wide."*

## §6 · What we are NOT claiming

We would rather under-sell this than have you discover we oversold it.

- **There is no `how/federation/visualdna/` wrapper in our vault.** `[D]` We federate `git` and
  `webforge` and nothing else. **aDNA is a *candidate* first consumer of `style_atmosphere`, not a
  wired one.** If Class-2 requires a live consumer to pilot against, we are a volunteer, not an
  existing integration.
- **We have not authored a bundle.** Our own acceptance criterion explicitly forbids the shortcut we
  might otherwise have taken — writing a `location` or `object` bundle for one hero scene and calling
  the identity encoded. It would not make the voice reusable, and it would report our criterion met
  when it had not moved. So we are here instead.
- **We are not asking you to edit anything of ours, and we have edited nothing of yours.** This memo
  is staged in our own `who/coordination/` per workspace Rule 10.
- **We have not read your vault's current session state**, so we do not know what you are mid-way
  through. If this collides with live work, it can wait — nothing of ours is blocked on it; our
  criterion is satisfied by the *ask being on the record*, which is the honest shape of the situation
  and not a courtesy.

---

*Rosetta · aDNA.aDNA · HAUSSMANN P4.1 O3 · session `session_stanley_20260824_152000_haussmann_p4_1_o3`*

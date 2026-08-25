---
type: adr
adr_number: "053"
title: "Visual voice: the Ghibli-pixel identity as a governed, slot-contained illustration program (ADR-032 revision)"
status: accepted        # ⛩ DP8 ruled (a) — operator Stanley, 2026-08-23
created: 2026-08-16
updated: 2026-08-23
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p4_1_token_pipeline
supersedes: ""
superseded_by: ""
revises: adr_032
probe_date: 2026-08-23        # ADR-054 cl.3 — every sentence here about a rendered surface was probed on this date
tags: [adr, haussmann, visual_voice, brand, d5, dp8]
---

# ADR-053 — Visual voice: a governed, slot-contained illustration program

## Status

**Accepted** — finalized at mission P4.1 O0 and **ratified at ⛩ DP8 on 2026-08-23**: the operator ruled
**(a), the slot-contained illustration program**. **Revises** ADR-032's brand register; does not discard it.

---

## ⚠ Correction to this ADR's own premise (2026-08-23)

The stub authored at campaign genesis (2026-08-16) opened:

> *"The site has one excellent hero and little else carrying the style."*

**The second half is true. The first half is false, and it was never true.** Re-verified on disk and by
T0 capture 2026-08-23 `[D]`:

- **Ten** hero illustrations are wired to **ten distinct routes** — `/` · `/get-started` · `/network` ·
  `/commons` · `/patterns` · `/vaults` · `/vaults/graph` · `/reference` · `/how` · `/learn`
  (`site/src/assets/heroes/hero_*.png`, each imported by its page and passed to
  `DocumentationLayout`'s `heroImage` prop, or to `HomeHero` on `/`).
- **They are one render language, not ten unrelated images.** Sample of three viewed at full
  resolution `[D]`: `hero_adna_helix` (retro CRT terminals, warm wood + amber, cyan/purple DNA helix),
  `hero_reference` (isometric pixel library — wood, brass lamp, card catalog, plants, helices and circuit
  traces on the walls), `hero_learn` (warm desk scene, helix rising from an open book). Consistent motif
  (DNA helix), consistent palette (warm wood/brass/amber against cool cyan/purple), consistent medium
  (pixel art). *(A first reading of the `/` page capture mis-identified this hero as a diagrammatic
  constellation; that was the page's separate SVG network figure lower down. Corrected by viewing the
  hero asset itself — recorded because the mistake is the same class this ADR is about: judging an
  artifact from a surface that contains it rather than from the artifact.)*
- **Nothing below the hero carries the style, on any page probed.** Cards, tables, registry rows, code
  blocks, empty states and section marks are pure Tokyo-Night type-and-colour throughout.

The instrument's own definition (`directives/OPERATION_VITRUVIUS_review_instrument.md:272`) is
*"hero-art singularity — one beautiful illustration and **nothing else carries the style**"*: a claim
about **confinement to a single slot type**, not about there being a single image. **So the finding
stands and the sentence does not.**

**This changes what is being ratified.** DP8 is not electing whether to *invent* an illustration program.
A slot-contained program **already exists, at ten surfaces, in one coherent render language, and is
ungoverned** — no spec, no slot list, no credit, no generation pipeline of record, no rule saying where
it may and may not go. DP8 elects whether to **name, govern and extend it**.

---

## Context

The hero-art-singularity risk is real and unchanged: the voice is carried by exactly one slot type, so
every surface that is not a page-top — the registry, the graph, the docs body, every empty state — is
visually mute. The dossier tested *systematise vs. reduce-to-accent* against 23 exemplars `[D dossier]`:

- **Playdate** proves a playful voice can carry an entire property **by containment** — pixel art in
  fixed content slots, chrome held to a flat colour system and one typographic rule.
- **Charm** proves the full-field alternative is possible and names its price: a complete character
  programme in ONE render language, a saturated palette owning every pixel, and a hard-proof
  counterweight adjacent. It also pays costs aDNA cannot: zero named humans, and a field that would
  crush spec/docs legibility.
- **The credibility register** (W3C · OWID · Distill · PEPs) is unanimously restrained; **Quanta** caps
  it at a **governed art slot** — commissioned illustration per artifact in a stable frame, always
  credited.

### What the corrected evidence adds

The dossier priced full systematisation at five requirements. Measured against what is live today `[D]`:

| # | Requirement (dossier) | Status today |
|---|---|---|
| 1 | A single render language | ✅ **already met** — the ten heroes are one language |
| 2 | A generation pipeline (reproducible on demand) | ❌ **absent** — no workflow of record; `heroes/candidates/` holds hand-picked variants |
| 3 | A containment rule (art in named slots; chrome stays type/colour) | 🟡 **observed in practice, written down nowhere** |
| 4 | Proof counterweight adjacent to whimsy | ✅ **largely met** — `/` pairs the hero with shelf metrics; `/vaults` pairs it with derived counts and a self-declaration callout |
| 5 | Per-artifact credit | ❌ **absent** — `DocumentationLayout`'s `heroImage` prop carries `{ src, alt }`; **there is no credit field** |

**The bill for option (a) is therefore materially smaller than the dossier priced it**: three of five
requirements are met or nearly met, and the two gaps (pipeline, credit) are both additive.

### The surface that most argues for extension

`/vaults` `[D capture 2026-08-23]`: a hero, then **74 registry cards in pure type and status pills**, of
which **57 are `planned`** and read *"No public description yet"* / *"No card description yet."* It is a
long, near-uniform grey field. ADR-053's proposed **vault-card** and **empty-state** slots land exactly
there — this is the highest-leverage application on the property, and the one where "one beautiful hero"
does the least work.

---

## Decision space

*(Preserved verbatim from the genesis stub. The options are unchanged; only the evidence they are judged
against has been corrected.)*

- **(a) Slot-contained illustration program** (dossier recommendation): Ghibli-pixel art in fixed slots —
  hero panel, vault/graph category marks, empty states, section accents — under a style spec (VisualDNA
  bundle) + generation pipeline (ComfyUI lineage) + per-artifact credit; Tokyo-Night type-and-color
  chrome everywhere else, both themes first-class.
- **(b) Accent-only reduction**: hero keeps the art; everything else purely typographic.
- **(c) Full-field systematization**: the Charm path — priced at a complete mascot/palette program +
  proof counterweight (bill itemized in the dossier).

**What the correction does to each option:**

- **(a)** costs less than priced (three of five requirements already met) and is mostly *documentation +
  two additive gaps*, not new art direction.
- **(b)** is no longer "decline to add." Ten illustrated surfaces are live; reducing to an accent now
  means **removing nine of them** — a deliberate regression of shipped, working craft. That is a legal
  choice, but it must be made knowing its true cost, which the stub's premise concealed.
- **(c)** is unchanged and still refused on register grounds (see Recommendation).

---

## Recommendation

**(a) — more than an accent, less than a skin.**

Refuse **(c)**: aDNA is a standard and a public-good property whose corpus register-peers are unanimous
on restrained chrome, and the ethos doctrine already fixed the dial at ~55/45. Refuse **(b)**: Playdate
and Quanta prove the middle position carries a whole property at full credibility, and (b) now means
destroying craft that already ships.

### The containment rule (Playdate's law) — normative

Illustration is permitted **only** in these named slots. Everywhere else — nav, prose, tables, registry
rows, code, form controls, footers — is Tokyo-Night type and colour, in both themes.

| Slot | Where | Status |
|---|---|---|
| `hero_panel` | one per section-index route, page-top | **live** (10) |
| `vault_card_mark` | registry card, category-scale not per-vault | proposed |
| `empty_state` | zero-result and `planned`-vault states | proposed |
| `category_mark` | section/nav category glyphs | partly live (6 icon SVGs, `currentColor`) |
| `graph_frame` | the relationship-graph surround, never the graph data | proposed |

**No slot may be added by a page.** A new slot is an amendment to this table.

### Credit (Quanta's law) — normative

Every illustrated artifact carries its provenance where a reader can reach it: generator/model lineage
and the ruling that commissioned it. Mechanism is the existing additive-props pattern — a `credit` field
alongside `{ src, alt }` on the `heroImage` prop (`skill_documentation_layout_props_additive_extension`),
**not** a new component, and byte-identical for any page that does not pass it.

### Generation pipeline

Reproducible-on-demand is requirement 2 and the reason the slot model's marginal cost per surface is near
zero. Lineage: ComfyUI (`ComfyUI.aDNA`) under a VisualDNA style bundle. **Not built by this ADR** — P4.1
O3 authors the bundle; the workflow itself is named as owed, not claimed as existing.

### Accessibility consequences — stated per slot, not deferred

Directive §8: every aesthetic choice carries its a11y consequence.

- **Text equivalents.** `hero_panel` already carries per-page `alt` `[D]`. Every new slot ships its text
  equivalent in the same change, or it does not ship. Decorative marks take `alt=""` + `aria-hidden`, and
  must therefore never be the sole carrier of meaning.
- **Contrast is a chrome property, and art must not become chrome.** The containment rule *is* an
  accessibility control: keeping illustration out of nav/tables/rows is what keeps AA verifiable in both
  themes. Any proposal to put art behind text re-opens contrast and needs a per-pair AA check.
- **Both themes are first-class.** A slot that only works dark is not a slot. This is also why ADR-059
  refuses a dark-only token ceiling.
- **Motion.** Any animated slot uses WebForge's motion vocabulary classes and honours
  `prefers-reduced-motion`, which `tokens.css` already zeroes.
- **Weight.** Slots are `Image`-optimised with explicit `widths`/`sizes` as the hero already is; a slot
  that regresses LCP on its route fails the craft floor (P4.2) regardless of how it looks.

### Known debt this ADR does not fix

`hero_reference.png` renders with **letterbox bands** top and bottom `[D]` — the operator-deferred
"hero-letterbox re-cut" from Storyweave. Named here so the slot spec inherits a known-open item rather
than silently re-specifying around it.

---

## Consequences

The voice becomes extensible by contributors (slot spec + published construction rules at P4.2); the
first real aDNA VisualDNA bundle is authored (VisualDNA.aDNA's first web anchor); WebForge's
proposed-but-unbuilt ceiling engine gets a live test case (`art_direction.yaml` with `signature_element`
= the program). **ADR-032 is revised, not contradicted**: its Tokyo-Night register remains the chrome; this
ADR governs where illustration may sit inside it.

**Rejecting (a) is also a real outcome** and is cheap to execute: it means the ten live heroes stay as an
ungoverned inheritance, and P4.2's craft floor documents them as-is rather than as a system.

---

## Ratification

- **Decision:** **(a) — the governed, slot-contained illustration program**, with the containment rule,
  per-artifact credit and the generation-pipeline note as authored above · **Ratified-by:** Stanley
  (operator) · **Gate:** ⛩ DP8 · **Date:** 2026-08-23 · **Status:** **accepted**.

**Co-ruled at the same gate:** [[adr_059_token_substrate]] — ruled **(c)**, validators without emission.
The two are separable but were surfaced together, and the operator elected to rule them together.

**What ratification binds** (for the reader who arrives at P4.2 or later): the **slot table is
normative** — illustration is permitted in those five slots and nowhere else, and a new slot is an
amendment to this ADR, not a page-level decision. **Credit is normative** and currently **unmet**; the
mechanism is the additive `credit` field, not a new component. The **generation pipeline is named as owed,
not claimed as existing** — do not write a sentence anywhere on the property implying a reproducible
pipeline exists until one does.

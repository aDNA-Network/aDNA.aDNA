---
type: pattern
created: 2026-09-11
updated: 2026-09-11
status: draft
pattern_category: structural
applies_to: [context, decisions, lattices, modules, campaigns]
campaign_id: campaign_haussmann
instances:
  - "Emacs.aDNA — REQ-Q01, the **Dual-channel law**: *every key architectural artifact has prose/code + a conformant `.canvas` (C-01…C-06 minimum); updated in the same mission*. Ratified and practised; `ARCHITECTURE.md` §Reading contract names the duty, and `LESSONS.md` records the law catching a six-day drift structurally (C-02 declared a `hub → sidebar` edge the code never realized — the unrealized edge WAS the defect)."
  - "Canvas.aDNA — Operation Blueprint. Two dual-channel canvases authored in their own tree (`what/context/context_canvas_surface_legs.{diagram.yaml,canvas}` and `what/decisions/adr_004_production_code_layout.{diagram.yaml,canvas}`), produced by `diagram_generator` from a `.diagram.yaml` beside the prose, with the producer rail at `how/skills/skill_canvas_context_diagram.md`."
graduation: "**2 vault-level adoptions**, derived 2026-09-11 by a governance-duty census across the live workspace (`find -P`, `Archive.aDNA` pruned): Canvas.aDNA and Emacs.aDNA declare a companion duty in their governance; **no other vault does**, including the five largest canvas holders. The shelf's rule (`what/patterns/AGENTS.md`) holds a pattern at `draft` below 3 adoptions and reserves graduation for an operator gate. ⛔ Authoring this file did NOT make `aDNA.aDNA` an adopter — see §Example. A third vault declaring the duty is what graduates this."
last_edited_by: agent_rosetta
tags: [pattern, canvas, diagrammatic_context, dual_channel, authority_axis, production_axis, canvas_std, obsidian, drift, conformance_floor, canvas_adna, emacs_adna, haussmann]
---

# pattern_diagrammatic_context

> **One line, for everyone:** a key object — an architecture, a spec, a decision — carries **two
> channels side by side**: the prose you read, and a conformant `.canvas` you see. They say the same
> thing, they move in the same commit, and the object **declares** two things about the picture — who
> owns its meaning, and how it gets made — so nobody has to guess whether to edit the drawing or
> regenerate it.

> ⛩ **Adopted by operator ruling, 2026-09-11** (HAUSSMANN, ruling **R1**), on
> [[coord_2026_08_22_mondrian_to_rosetta_diagrammatic_context_pattern|Canvas.aDNA's offer]] and
> amended by [[coord_2026_09_04_mondrian_to_rosetta_erratum_e2_the_pattern_was_wrong_where_building_it_showed|their own erratum E2]].
> **This is a graduation, not an invention** — Emacs.aDNA has run the doctrine on Standard 2.3.0
> *unmodified* for thirteen months, so the pattern is empirical and needs **no schema change**. What
> was missing was the name.

## Problem

A diagram is the fastest way to hand someone an architecture and the slowest thing in a repository to
keep true. Two failure modes, both common, and they look identical from outside:

1. **The drifted picture.** The prose is edited, the diagram is not, and the diagram keeps asserting a
   relationship that no longer exists. Nothing fails. No test covers it. A reader who trusts the
   picture over the text is simply wrong, and the more legible the diagram the more confidently wrong
   they are. Emacs.aDNA has the worked instance: `C-02` declared a `hub → sidebar` edge for six days
   **before the code realized it** — and that unrealized edge *was* the defect the mission was hunting.
2. **The undeclared picture.** A `.canvas` sits beside a document and says nothing about its own
   standing. Is it the source of truth, or a rendering of one? Do I edit it, or regenerate it? Two
   contributors answer differently, both in good faith, and the file silently acquires two lineages.

The second failure is the one this pattern is really about, because it is **invisible until someone
acts on it**, and by then the damage is a hand-edit inside a generated artifact that the next
regeneration will destroy.

⚠ And the scale is not hypothetical. Measured across this workspace `[D] 2026-09-11` (`find -P`,
`Archive.aDNA` pruned, template examples excluded): **366 `.canvas` files** live in the live vaults,
held by **fifteen or more** of them — and **two** vaults declare any companion duty at all. The
practice is widespread; the doctrine is not.

## Solution

Give the object a second channel, and make that channel **declare itself** on two independent axes.

### The two axes — and they are two, not one

| Axis | The question it answers | Values |
|---|---|---|
| **`authority`** | *Who owns the meaning?* | `dual_channel` — the **prose** owns it; the canvas is a co-equal rendering that must agree · `view` — an authoritative **`.lattice.yaml`** owns it; the canvas is a projection of that file |
| **`production`** | *How is the picture made?* | `hand_authored` · `generated` — built by a producer from a spec file (e.g. a `.diagram.yaml`) sitting beside the prose |

⭐ **The discipline "never hand-edit; regenerate" attaches to `production: generated`. It does NOT
attach to any value on the authority axis.** That sentence is the whole reason the axes are split, and
it was bought with a real defect: Canvas's first two dual-channel canvases are `dual_channel` **and**
machine-generated *at once*. Under the original single three-value enum — `dual_channel | generator |
view` — they declared `dual_channel`, so **a reader following the table literally received no
instruction not to hand-edit them**, and the hole would have shipped to every forked vault.

> ***One field answering one-and-a-half questions is worse than two fields answering one each,
> because the half it does not answer looks answered.***

### Same-mission sync is the law, not the aspiration

Both channels move in the **same mission** (Emacs's REQ-Q01) — which in this vault's vocabulary is the
same-diff rule [[adr_057_measurement_regime|ADR-057 already applies to routes]], pointed at a picture. **Drift
between channels is a defect**, not a chore, and it is the only formulation under which anyone ever
actually regenerates the diagram.

### ⛔ `authority` is DOCTRINE-enforced, not machine-enforced — and this file says so on its face

`canvas_std` **does not validate the `authority` key** (measured by Canvas at their erratum v2), so a
typo passes silently and a missing value reports `core` with nothing to complain about. Therefore:

- This pattern **does not** declare a canvas without a stated authority *nonconformant*. Mandating a
  field no validator checks would be **a conformance claim with nothing behind it** — a claim moving
  up to ambition, which this vault's honesty rule forbids in exactly these words.
- The clause **tightens automatically when Canvas's LIP-0010 rules.** Until then it is named as
  unenforced rather than quietly relied upon.
- ⭐ **The split therefore costs no schema change**, which is what makes it adoptable today: adding a
  sibling key to a key nothing validates changes nothing a validator sees. Canvas declined to *propose*
  the two-field shape on the reasonable reading that it was a schema change; it is one only once
  LIP-0010 makes either key binding, and at that point both become binding together.

### The conformance floor — and what it honestly cannot require yet

**Machine half:** the canvas passes the visual gate — **and the profile is stated with the result.**

> ***A gate result is not a measurement unless its profile is stated with it. A bare `[FAIL]` is a
> number without units.***

Canvas earned that clause by misreporting against their own floor: a comic-profile canvas "failing" at
24 findings including 6 critical was **entirely** profile mismatch, from a CLI run at its default
profile with `--profile` never passed. A floor that says *"passes `canvas-visual-check`"* without
naming a profile is under-specified.

**Human half:** an agent-confirmed render. ⛔ **This half has no safe automated path on a shared
workstation today, and the pattern says so rather than requiring it.** Canvas attempted it and
abandoned it — Obsidian is a desktop app, `screencapture` takes the entire screen, and the second
attempt recorded a third party's private messages before they stopped. Their canvases stand at
`visual_gate: pending`, and **the machine check is not offered as a substitute for the human one.**
The missing tooling is a window-scoped capture (`Home.aDNA`'s `canvas_visual_loop.py` is the reference
to port).

⛔ **`#####` is not inherited as doctrine.** Two traps in the `knowledge-canvas` profile currently
conflict — one requires a heading marker in the group's top 40%, the other forbids `h1`/`h2`/`h3`
leads — and `#####` clears both **only by not being classified as a heading at all**: it would render
as body text and pass, *a green check for the wrong reason*. `####` is the only honest pass. The
durable fix is a trap- or profile-level reconciliation owned by the trap corpus, **not** every fleet
author typing `####` forever.

## When to Use

**Use it when** an object's structure is the thing readers get wrong — architectures, module contracts,
federation topologies, decision records whose consequences fan out. Use it when a diagram already
exists informally and nobody can say what its standing is. Use it when the object is read more often
than it is edited, which is when drift is cheapest to introduce and most expensive to notice.

**Do not use it when** the prose is already the clearest possible statement; a second channel then buys
nothing and costs a sync obligation forever. Do not use it for objects that change faster than a
producer run. And ⛔ **do not adopt the floor without an artifact that clears it** — which is E2's own
transferable lesson, filed against themselves:

> ***A pattern that proposes a conformance floor should ship with at least one artifact that
> demonstrably clears it.*** The floor read as reasonable to every reviewer — including its authors —
> and was **unsatisfiable in fact**, which no amount of re-reading would have found. Only building it
> did.

## Example: This Vault

⛔ **The honest example first: `aDNA.aDNA` does not practise the headline discipline, and authoring
this file did not change that.** There is no `dual_channel` object in this vault today. Saying so is
the example, because the alternative — citing the template examples as though they were an adoption —
is precisely the drift this pattern exists to stop.

What this vault *does* hold is a concrete, live instance of **the other end of the authority axis**.
All four canvases at `what/lattices/examples/` — `hello_world` · `template_agent_graph` ·
`template_architecture` · `template_pipeline` — carry, in their own metadata `[D] 2026-09-11, 4/4`:

```
metadata._reserved.authority = "view"
```

They are projections of an authoritative `.lattice.yaml`, governed by
[[canvas_yaml_interop|the Canvas-YAML Interop Specification]], whose round-trip mapping *is* the `view`
mode this pattern names. ⭐ **That spec was never wrong — it was one authority mode, unnamed and
unbounded**, and naming it is most of what the axis buys. Because these four files ship to **every**
forked vault, the `view` value is, by a wide margin, the most-deployed value on either axis in the
entire network.

⚠ **And they are mid-migration, which is the second thing this section is for.** That `_reserved`
block sits at `metadata._reserved` — one level too high; the Standard's carrier is
`metadata.frontmatter._reserved`, and `metadata.frontmatter` is already present and empty (`{}`) in
all four, so the relocation writes into a carrier that exists rather than creating one. The migration
is a payload row on the next `skill_template_release`, **not a hand edit** — `.adna/` is the base
standard tree and Standing Rule 1 governs it.

## Anti-Pattern

- **The confident wrong picture.** A diagram asserting an edge the implementation never realized,
  surviving because no instrument reads pictures. The remedy is not vigilance; it is the same-mission
  law, which converts *"we should update the diagram"* into *"the channels disagree, so this is a
  defect."*
- **The undeclared canvas.** A `.canvas` beside a document with no authority and no production value,
  so the next contributor decides by guessing. At the workspace scale measured above, this is the
  default state of the network, not an edge case.
- **A hand-edit inside a generated artifact.** The failure the split axis exists to prevent: correct
  under the old enum, destroyed by the next producer run, and invisible in between.
- **A floor nobody has cleared.** See §When to Use. A conformance requirement that no existing artifact
  satisfies is not a standard — it is a wish with a checkbox.
- **Citing a file census as an adoption census.** This corpus has **366** canvas files and **2**
  adoptions. Counting the files answers a different question while looking thorough — which is why this
  file's `graduation:` field records the predicate it used, not just the integer it got.

## Related

- [[canvas_yaml_interop|Canvas-YAML Interop Specification]] — the `view` mode, now named and bounded
- [[pattern_cross_graph_codepin|pattern_cross_graph_codepin]] — the sibling discipline for keeping two
  surfaces in one vault from drifting apart
- [[pattern_software_element_context_graph|pattern_software_element_context_graph]] — the umbrella this
  sits under when the object being diagrammed is a software graph
- [[glossary_conformant_instance|glossary: conformant instance]] — what the conformance floor is a
  floor *of*
- [[adr_057_measurement_regime|ADR-057]] — the same-diff gate law the same-mission duty generalises

> ⚠ **Noted while cross-linking, not fixed here:** `what/glossary/` carries **no `lattice` entry**,
> which is why the `view` end of the authority axis — *"an authoritative `.lattice.yaml` owns the
> meaning"* — has no definition to point a newcomer at. Surfaced rather than smoothed; a glossary edit
> at a pattern's tail is the unforced widening this campaign keeps catching.

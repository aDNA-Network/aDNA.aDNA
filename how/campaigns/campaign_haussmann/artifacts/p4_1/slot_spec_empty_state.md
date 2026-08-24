---
type: artifact
artifact_type: slot_spec
slot: empty_state
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p4_1_token_pipeline
objective: O2
governed_by: adr_053_visual_voice_systematization
status: active
created: 2026-08-24
updated: 2026-08-24
last_edited_by: agent_rosetta
tags: [haussmann, p4_1, o2, visual_voice, slot, empty_state, adr_053]
---

# Slot spec — `empty_state`

> **This spec instantiates one row of a normative table. It does not create a slot.** The five-slot
> table in [[adr_053_visual_voice_systematization]] is the normative record; illustration is permitted
> in those five slots and **nowhere else**, and *"no slot may be added by a page — a new slot is an
> amendment to this table."* If you are reading this to add a *sixth* slot, you are in the wrong
> document: amend the ADR.

**ADR-053 row:** `empty_state` | *zero-result and `planned`-vault states* | was `proposed`, **built at
P4.1 O2**.

---

## 1. What the slot is for

An `empty_state` mark marks **a place where something could be written and has not been**. It is the
visual companion to a sentence the surface is already saying in words — never a replacement for it, and
never the thing that carries the meaning.

It exists because this property publishes a registry in which **most entries are mostly empty**, and
says so: 52 of 57 planned vaults have at least one unwritten field, 49 have no card. The honest-absent
affordance ("No public description yet") was already there in text; this slot gives that text a mark so
the absence reads as *a stated fact* rather than as a rendering failure.

### 1.1 ⭐ What it keys on — and the finding that decided it

**The mark keys on the ABSENCE, never on the tier, the class, the status, or any other rank.**

O2's ruling originally named *"the 57 planned vault cards."* Derived from the registry `[D]` at build
time, those two sets are not the same:

| Tier | Cards | Any empty field | All three empty |
|---|---|---|---|
| in use | 7 | 5 | 0 |
| chartered | 10 | 7 | 0 |
| planned | 57 | **52** | 3 |

Keying on tier would mark **5 planned cards that are not empty at all** and miss **12 non-planned cards
that are**. It would also re-differentiate the tiers, which **ADR-052 §tiers.2** ruled against in terms
this spec inherits verbatim — a tier-keyed treatment *"reads as a ranking, and the thing it would rank
by is self-declared with nothing corroborating it."*

⇒ **The rule, stated so it can be tested:** the mark's render condition is a predicate over *the field
being empty*. Any predicate mentioning a lifecycle stage is a defect, not a variation. A gate asserts
this in both directions — the mark appears where a field is empty and is absent where it is not — and
the in-use cards that carry it are the structural proof it is not a tier badge.

---

## 2. Where it may be applied

Two states, both named by ADR-053, both built at O2:

| State | Surface | Scale | Condition |
|---|---|---|---|
| **field-absent** | a registry card's honest-absent line | `sm` (~1em, inline) | that field is empty |
| **zero-result** | a filtered/searched collection matching nothing | `lg` (~96px, block) | the visible count is 0 |

A **new** page may apply either state without asking, provided it satisfies §3–§5. It may not invent a
third state on this slot: a state that is neither "a field is empty" nor "a query matched nothing" is
not an empty state, and reaching for the mark there is how a contained slot stops being contained.

---

## 3. The artifact

**One file, two scales:** `site/src/assets/slots/empty_state_mark.svg`.

Construction rules, inherited from the live `category_mark` set (`site/src/assets/icons/`) so the two
slots read as one render language:

- `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, round caps and joins.
- **`currentColor` is mandatory, not a preference.** It is what makes §5's both-theme requirement
  *structural*: the mark inherits the token colour of the text it sits beside, so it cannot drift from
  either theme and cannot introduce a contrast pair of its own. A slot artifact with a literal colour
  would also trip **gate-25 G25b**.
- Imported `?raw` and inlined — never `<img>`, never runtime JS. Pattern:
  [[skill_inline_svg_raw_import_currentcolor_inheritance]]; live precedent at `Breadcrumb.astro:2-7`
  and `SidebarNav.astro:4-9`.

### 3.1 The motif, and why it means what it means

A **dashed frame with one solid rule inside it, near the top, and nothing below.**

The dashed frame is a place that has been reserved. The solid rule is the one thing a planned vault
genuinely has — **a name**. The void beneath is everything that has not been written. That is precisely
what `/vaults` says in prose about this tier: *"named places with a governance skeleton and little
else."*

### 3.2 ⛔ The medium is hand-drawn, and the reason is binding

ADR-053 names the generation pipeline (ComfyUI under a VisualDNA style bundle) **owed, not built**, and
binds: *"do not write a sentence anywhere on the property implying a reproducible pipeline exists until
one does."*

⇒ This artifact is **hand-authored SVG**. Its credit line says so. **Do not** generate a raster for this
slot, and do not write `comfyui` on any surface as though it were a live dependency. When the pipeline
exists, this spec gets amended — not quietly reinterpreted.

---

## 4. Text equivalent — the slot's hard gate

ADR-053: *"Every new slot ships its text equivalent in the same change, or it does not ship. Decorative
marks take `alt=""` + `aria-hidden`, and must therefore never be the sole carrier of meaning."*

**Applied here:**

- Every mark is `aria-hidden="true"` and contributes **nothing** to the accessibility tree.
- The meaning is carried entirely by adjacent visible text — `"No persona recorded"`, `"No public
  description yet."`, `"No card written yet"`, and the zero-result block's own sentence.
- ⇒ **Removing the mark must lose zero information.** That is the test, and a gate asserts it: the
  absent text is present in the DOM wherever the mark is.

A contributor applying this slot to a new page **writes the sentence first**. If there is no sentence
the mark could accompany, there is nothing to mark, and the slot does not apply.

---

## 5. Both themes, and contrast

- `currentColor` (§3) means the mark inherits an already-AA-verified token colour. A new **pair** is
  introduced only by a *container* — the zero-result block's background or border — never by the mark.
- Any such new pair is added to `site/scripts/token_aa_check.py` **with its usage count**. ⭐ O1's
  finding stands as the rule: *a contrast pair asserts "this colour is rendered on that colour"; if no
  rule in the codebase does that, the pair tests nothing and its verdict is noise* — four of that
  instrument's first four "failures" were fabricated pairs. When counting usages, scan with
  `(?<![-\w])color\s*:`; `\bcolor\s*:` also matches `border-color:` and manufactures the very pairs it
  is meant to confirm.
- T0 captures in **both** themes are required evidence, and `--axe` covers `themes[0]` only — run it
  twice.

---

## 6. Credit

ADR-053: *"Every illustrated artifact carries its provenance where a reader can reach it: generator/
model lineage and the ruling that commissioned it."* Mechanism is **the existing additive-props
pattern** — an optional prop, byte-identical for any consumer that does not pass it — *"not a new
component."*

**Applied here, with one reading stated explicitly so it is not mistaken for a dodge:**

- The credit is a property of **the artifact**, and the artifact is one file. So a surface that renders
  the mark 52 times renders its provenance **once**, in a place a reader can reach. Fifty-two identical
  provenance lines would satisfy the letter of the ADR and defeat the sentence it is made of.
- The mark component takes an **optional `credit` prop**. Card-level marks pass nothing and render
  byte-identically; the surface passes it once. That byte-identity is asserted by a gate — it is the
  additive-props law made testable rather than assumed.
- ⚠ **"Never a new component" governs the CREDIT mechanism** — do not build a `<Credit>` component.
  It does not forbid a component for the slot itself; `hero_panel` is a component too (`HomeHero`).
- The line names the artifact as **hand-drawn, no generator**, and cites the ruling that commissioned
  it (ADR-053, ⛩ DP8, 2026-08-23). It must not name a pipeline (§3.2).

### 6.1 ⚠ The AC that named the wrong mechanism — recorded, not silently worked around

AC5(b) requires the credit to ride *"the additive `credit` field on `DocumentationLayout`'s existing
`heroImage` prop."* **`/vaults` uses `BaseLayout` + `HomeHero`, not `DocumentationLayout`** `[D]` — and
`empty_state` is not a hero slot, so `heroImage` cannot carry its credit under any layout. Executed
literally, AC5(b) ticks with **nothing rendered on the surface it was about**.

ADR-053's normative text names the **pattern**; AC5 named one **instance** of it. ⛩ Operator ruled
2026-08-24: apply the pattern to the slot's own host **and** add the literal `credit` field to
`DocumentationLayout`'s `heroImage`, so the mechanism AC5 named genuinely exists where it was named.
*(This is the sixth AC defect on this mission and the same shape as O1's fifth: a criterion whose stated
method cannot reach the surface its own target requires — convention 13's question, one altitude down.)*

---

## 7. Applying the slot to a new page — the checklist

A contributor needs no permission and no conversation. Six steps:

1. **Write the sentence.** The absence must already be stated in visible text (§4). No sentence, no
   slot.
2. **Import the host component** and render it beside that sentence, at `sm` inline or `lg` block.
3. **Key the render on the absence itself** (§1.1) — never on a stage, tier, class, or status. If your
   condition names a lifecycle value, stop: that is a different (and forbidden) design.
4. **Pass no `credit` on repeats**; render the provenance **once** on the surface (§6).
5. **Run the both-theme check** (§5): T0 captures dark + light, `--axe` twice, and add any new
   container pair to `token_aa_check.py` with its usage count.
6. **Add an assertion in both directions** — present where empty, absent where not. A one-direction
   assertion passes on a component that renders unconditionally.

## 8. What this slot may never do

- **Become chrome.** ADR-053's containment rule *is* an accessibility control. Nav, prose, tables,
  registry rows, code, form controls and footers stay Tokyo-Night type-and-colour in both themes.
- **Carry meaning alone** (§4).
- **Sit behind text.** That re-opens contrast and needs a per-pair AA check that this spec does not
  grant.
- **Rank anything** (§1.1).
- **Imply a generation pipeline** (§3.2).

---

## Related

[[adr_053_visual_voice_systematization]] (the normative table) ·
[[adr_059_token_substrate]] (the validators that check §5) ·
[[skill_inline_svg_raw_import_currentcolor_inheritance]] ·
[[skill_documentation_layout_props_additive_extension]] (the additive-props law §6 rests on) ·
[[mission_haussmann_p4_1_token_pipeline]]

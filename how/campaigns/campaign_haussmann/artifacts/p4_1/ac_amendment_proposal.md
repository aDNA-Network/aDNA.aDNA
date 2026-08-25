---
type: artifact
artifact_type: ac_amendment_proposal
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p4_1_token_pipeline
status: accepted          # ⛩ signed off as drafted — operator Stanley, 2026-08-23; applied to the mission frontmatter same-session
created: 2026-08-23
updated: 2026-08-23
last_edited_by: agent_rosetta
tags: [haussmann, p4_1, acceptance_criteria, amendment, convention_13]
---

# P4.1 acceptance-criteria amendment — proposed

> ⛩ **Ruled at DP8 (2026-08-23):** amend before O1 builds. This is the draft; it is **not applied**.
> Authored under §7.7 — agents author, operators ratify.

## Why

The convention-13 pass (16/16 AC×V pairs + 4 AC×AC, coverage in the mission body) found P4.1's own
criteria defective in four ways. Re-reading them against the *rulings* — which is a different act from
reading them against each other — found **a fifth**. All five are below.

⭐ **The fifth is the one that matters most, because it would have passed silently.** AC2 offers a binary
— *adopt the pipeline* **OR** *pin a divergence* — and the operator ruled **(c), a hybrid neither branch
describes**: adopt WebForge's **validators** *and* pin the **emission** divergence. Executed as written,
O1 would tick AC2 on the "formally pinned divergence" branch and **the validator adoption — the actual
work, and the only part that closes the verification gap — would not appear in the acceptance record at
all.** A mission can satisfy its criteria and under-report what it did.

## The amendment

### AC1 — **unchanged**, and already **MET**

> *"⛩ DP8 / ADR-053 ratified: the visual voice = a governed, slot-contained illustration program (fixed
> slots: hero panel, vault/graph cards, category marks, empty states; chrome stays Tokyo-Night
> type-and-color) — or the operator's elected alternative — with the containment rule + credit-per-artifact
> + generation-pipeline note"*

Met 2026-08-23. ADR-053 is `accepted` at (a). *(Note for the record, not a change: the ruled slot table has
**five** entries — the AC's list omits `graph_frame`. The ADR is the normative record; the AC is a
pointer, and pointers that enumerate go stale. Left alone rather than re-typed.)*

### AC2 — **REPLACE**

**Current** (the `OR` is wrong, and the parenthetical is false):
> *"Token substrate decision executed: adopt the WebForge DTCG pipeline (site tokens compiled from the
> single source; **tokyo_night seed** + aDNA deltas) OR a formally pinned divergence with rationale in the
> wrapper"*

Two defects: `tokyo_night seed` is **false** — that ceiling is SS app canon, `appearances: ["dark"]`, and
adopting it deletes this site's light mode (ADR-059 §1). And the binary does not contain the ruled outcome.

**Proposed**:
> *"ADR-059 (c) executed, all four limbs: (i) WebForge's `check_aa.py` + `conformance.py --strict-leak`
> adopted as gates over the existing token layer, **each red-tested by deliberate mutation** before it is
> believed; (ii) the **emission** divergence formally pinned in `how/federation/webforge/CLAUDE.md` with
> its rationale and its stated review condition; (iii) the correcting memo to Vitruvius staged, withdrawing
> the pattern register's `convergence is natural` line; (iv) no ceiling derived and no token value
> regenerated."*

### AC3 — **unchanged**

> *"aDNA's art_direction.yaml entry authored (signature_element = the ruled program; anti_signature named)
> at the wrapper path per P5 schema"*

Skeleton authored at O0 with every DP8-dependent field filled from the ruling; it goes `status: ratified`
when (ii) above lands. **A test now exists and is named in the verification method below** —
`derive_tenant_ceiling.py --validate-entry`, the P5 build-readiness gate. It was previously tested by
nothing.

### AC4 — **RE-POINT**

**Current** (names a schema that does not exist):
> *"The first real aDNA VisualDNA bundle authored (schema v1.0) so the identity is reusable beyond hero PNGs"*

A house visual voice is `style_atmosphere`. VisualDNA v1.0 declares five entity types but states
`style_atmosphere` is *"forward-compatible Class 2 extension … **not exercised at GA**"*, and the schema
directory ships only `character_dna.yaml`, `location_dna.yaml`, `object_dna.yaml` `[D]`. **Not fixable in
this vault** — the schema is Pygmalion's.

**Proposed**:
> *"Either the first real aDNA VisualDNA bundle authored against a schema that fits a house visual voice,
> **or** — if `style_atmosphere` is still unexercised with no schema file — a **staged coordination memo to
> Pygmalion** asking for it, with aDNA's entry as the first live consumer case. The gap is recorded either
> way; it is never silently satisfied by authoring a `location`/`object` bundle for one hero scene, which
> would not make the identity reusable and would report done against a criterion that had not moved."*

### AC5 — **NEW**

Nothing today covers **O2**, which produces the only artifact two of the four verification limbs can
measure. All four ACs can pass with **zero slots built**, against a definition of done reading *"a
documented, extensible system a contributor could apply to a new page."*

**Proposed**:
> *"At least one NEW slot from the ADR-053 table is specified and applied on a live surface, shipping in
> the same change as (a) its text equivalent, (b) its per-artifact **credit** — the additive `credit`
> field on `DocumentationLayout`'s existing `heroImage` prop, never a new component — and (c) its
> both-theme contrast check. The slot spec is written so a contributor could apply the same slot to a new
> page without asking."*

### `verification_method` — **REPLACE**

**Current** (cannot test AC2 under any option):
> *"gate-25/4d-class token checks + T0 captures of slot applications + ranker ≥4.0 + ADR-053 record"*

`gate-25` defines `TOKEN_FILES = {'styles/tokens.css','styles/branding.css'}` and **excludes them from its
scan**; Gate 4d compares WebForge's emitted CSS to WebForge's source, which this site is not compiled
from. Neither can see a token-layer change.

**Proposed** — one testable instrument per criterion:
> *"AC1 → the ADR-053 record. AC2 → the two adopted validators passing over the site's token layer, each
> **red-proven by mutation**, plus the wrapper diff showing the pin and the staged memo on disk. AC3 →
> `derive_tenant_ceiling.py --validate-entry` on the wrapper entry. AC4 → the bundle, or the staged memo,
> on disk. AC5 → T0 captures of the applied slot in **both** themes + axe-0 parity + the full gate suite
> green. Campaign-level: persona ranker ≥4.0 on any surface changed."*

## What this amendment deliberately does NOT do

- **It does not add scope.** AC5 formalises O2, which the mission body already carried as an objective; it
  makes the objective *checkable*, it does not invent work.
- **It does not relax AC4.** The "or a staged memo" branch is not an escape hatch — it requires the ask to
  exist on disk, and it forbids the substitution that would otherwise let the criterion pass unmoved.
- **It does not re-open DP8.** ADR-053 and ADR-059 are `accepted`; this aligns the criteria to the rulings
  that were already made.

## Ratification

- **Decision:** **signed off as drafted** — all five changes applied (AC1 unchanged/met · AC2 replaced ·
  AC3 unchanged, now testable · AC4 re-pointed · AC5 new · `verification_method` replaced) ·
  **Ratified-by:** Stanley (operator) · **Date:** 2026-08-23 · **Status:** **accepted**.

Applied to `mission_haussmann_p4_1_token_pipeline.md` frontmatter in the same session. This artifact is
the record of *what changed and why*; the mission frontmatter is the live criteria.

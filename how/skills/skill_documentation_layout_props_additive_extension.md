---
type: skill
skill_type: agent
category: design
status: active
version: 1.0.0
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
graduated_from: campaign_adna_serious_tool_readiness M5.3 D11 (cycle 107, 3/3; ratified Champollion G3 2026-07-02 D2c)
first_consumer: site/src/layouts/DocumentationLayout.astro (heroImage prop, cycle 104)
token_estimate: ~1200
trigger: "A shared Astro layout component (e.g. DocumentationLayout, BaseLayout, HomeHero) needs to carry new optional content — a hero image, a section icon, a badge, a caption — across many consuming pages, and you are tempted to fork the layout or thread the value through every call site. Use this instead: extend the layout via one purely-additive optional Props field with a safe default."
tags: [skill, agent, design, astro, layout, props, additive_extension, zero_diff, str_m53, champollion_g3_graduation]
---

# Skill: Documentation-Layout Additive Props Extension

## Overview

When a shared Astro layout component needs to carry new optional content across many consuming pages, extend it via a **purely-additive `Props` field** — an optional prop with a safe default — rather than forking the layout or threading the value through every call site by hand. Consumer pages that don't set the prop are **unchanged (zero-diff)**; pages that want the feature pass it in **one line**. The extension ships as one prop-shape addition + per-consumer one-line prop-passes, keeping each cycle a small, reviewable, single-binary-commit unit. This is the additive-extension discipline applied to layout props: **add optionality, never break existing consumers.**

The vault demonstrates its own lesson: `site/src/layouts/DocumentationLayout.astro` carries `heroImage?: { src: ImageMetadata; alt: string }` (optional; absent → no hero rendered), and ~every doc page that wants a hero passes it in one line while the rest are untouched. The structure is the lesson (Standing Order #8).

## When to use

- A layout/component gains a **new capability that only some consumers want** (hero image, icon, badge, TOC toggle, caption).
- You have **many existing call sites** that must keep working with zero edits.
- You want each addition to be a **small, reviewable, single-commit** unit (one prop + N one-line passes).

## When NOT to use

- The new field is **required** for correctness on every consumer — then it isn't additive; it's a breaking contract change (bump the layout's version, migrate every call site in the same commit, and say so in the changelog).
- The variation is **structural, not content** (a fundamentally different page shape) — that is a *new layout*, not a prop. Forking is correct there.
- The value is **derivable** from data the layout already has — compute it inside the layout; don't add a prop.

## Recipe

### Step 1 — Add ONE optional field to the `Props` interface, with a safe default
Make the field optional (`?`) and give it a default that reproduces the pre-change behavior exactly. For an object-shaped field, default to `undefined` and guard the render.

```ts
interface Props {
  title: string;
  description: string;
  // NEW — purely additive: absent ⇒ no hero rendered (pre-change behavior preserved)
  heroImage?: { src: ImageMetadata; alt: string };
}
const { title, description, heroImage } = Astro.props;
```

### Step 2 — Guard the new render path so absence is a no-op
The new markup renders **only** when the prop is set. An un-passing consumer produces byte-identical output to before.

```astro
{heroImage && (
  <Image src={heroImage.src} alt={heroImage.alt} class="doc-hero" ... />
)}
```

### Step 3 — Opt-in consumers pass it in ONE line each
No consumer that doesn't want the feature changes at all (zero-diff). Each opt-in is a single prop-pass:

```astro
<DocumentationLayout title="Learn aDNA" description="…"
  heroImage={{ src: heroLearn, alt: 'Cozy pixel-art study desk …' }}>
```

### Step 4 — Keep the addition to one reviewable commit
One prop-shape change + the guarded render + the N one-line opt-in passes = one small binary-diffable commit. If the change starts touching every call site's *body*, stop — it isn't additive anymore (see When NOT to use).

### Step 5 — Verify zero-diff for non-opting consumers
Build (`npx astro build`) and confirm the pages that did **not** opt in are unchanged (same rendered structure). The whole point is that they didn't have to be touched.

## Instance citations (3/3 — the graduated lineage)

| # | Cycle | Commit | Instance (path) | What it added |
|---|-------|--------|-----------------|---------------|
| 1/3 | 104 | `5d135f1` | `site/src/layouts/DocumentationLayout.astro` — `heroImage?: { src: ImageMetadata; alt: string }` | Hero wiring for learn + how via a pure-additive Props extension ("NEW SEED 1/3") |
| 2/3 | 105 | `4b3ff67` | same layout, consumers patterns + reference | Consumer-side prop-pass only, zero further layout change ("1/3 → 2/3") |
| 3/3 | 107 | (S3) | `site/src/components/diagrams/TriadDiagram.astro` (§lineage comment: "Additive Props extension … all props optional") | Diagram component's optional `legs?`/`caption?`/`ariaLabel?` props — **3/3 GRADUATES**, + 4/3 reinforcement at cycle 108 (`ConvergenceFunnel`). Margin 1.3×. |

Primary evidence: `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_decadal_d11_visual_identity.md` §Graduations; session records `how/sessions/history/2026-05/session_stanley_20260527T041321Z_v8_m53_s2.md`. The D11 AAR marked this a v8-P6 upstream-promotion candidate.

## Anti-patterns

| What | Why it breaks |
|---|---|
| Making the new field **required** | Every existing consumer breaks at build; it's no longer additive. Bump the version + migrate all call sites if truly required. |
| **Forking the layout** for one hero variant | Two layouts drift; the shared chrome (nav, TOC, breadcrumb) duplicates. A prop keeps one source of truth. |
| Threading the value **through every call site by hand** when most don't want it | Churns dozens of files for a feature few use; the optional-prop default gives zero-diff for the rest. |
| Adding a prop for a **derivable** value | The layout already has the data — compute it inside; a prop invites drift between passers. |

## Related

- [[skill_inline_svg_raw_import_currentcolor_inheritance]] — sibling seed graduated the same D11 close (same G3 ratification, D2c); both are Astro component-craft skills.
- [[skill_site_design_pipeline]] — the pipeline whose Stage 5 (Build) this skill serves (component-craft during Astro build).
- [[skill_cross_skill_primitive_composition]] · [[skill_forward_reference_stub_design]] — sibling graduated-seed skills (M3.4), same additive-discipline family.
- Seed record: [[../backlog/idea_seed_skill_documentation_layout_props_additive_extension]] — the graduation-tracking backlog file this skill was authored from.
- Reference companion: `site/src/content/reference/visual-identity-v2.mdx` (documents the layout/component prop conventions).

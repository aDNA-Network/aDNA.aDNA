---
type: template
template_class: campaign_close_splash
status: active
persona: rosetta   # vault-agnostic; instances re-persona per host vault
created: 2026-05-29
updated: 2026-05-29
last_edited_by: agent_stanley
substrate_pin: "Shares the placeholder + glyph vocabulary of template_lattice_home_render (CMux.aDNA HEAD 7747a15a lineage); lifecycle-close variant authored at campaign_lattice_home_pattern M3"
tags: [template, lattice_home, splash, campaign_close, lifecycle_variant, ascii_render, vault_agnostic, placeholder_spec, fallback_discipline, recap_surface, aar_pointer, augments_aar_never_replaces]
---

# Campaign-Close Splash Template (vault-agnostic)

> Drop-in substrate for the [[skill_campaign_sitrep_splash]] recipe, campaign-**close** variant. Verbatim 5-block ASCII fence-pair below; the canonical `lattice` extractor lifts the block, bash substitutes `{{PLACEHOLDER}}` markers, prints to stdout. No runtime dependencies beyond bash + awk. This is a **recap** surface — backward-looking; it answers "what did this campaign produce, and where do I go next?"

> **SO-LH-2 invariant (load-bearing):** block 4 is a mandatory **AAR-pointer**. This splash *augments* the AAR — it does not replace it (does not discharge Standing Order #5 or Campaign SO #11). Never write Worked/Didn't/Finding/Change/Follow-up content into this template; point at the AAR by path.

## Render (template — placeholders `{{LIKE_THIS}}`)

```
╭─ {{CAMPAIGN_ID}} · {{PERSONA}} ───────────────────── {{VAULT_BADGE}} CLOSED ─╮
│  opened {{OPENS_AT}} → closed {{CLOSED_AT}}   ({{DURATION}} elapsed)
├──────────────────────────────────────────────────────────────────────────────┤
│  DELIVERED   {{FILE_TALLY}} · {{MISSIONS_DONE}}/{{MISSIONS_TOTAL}} missions · {{KEY_ARTIFACTS}}
│
│  MISSION TALLY
{{MISSION_TALLY}}
│
│  AAR POINTER   full AAR → {{AAR_PATH}}
│                (this splash augments the AAR — it does not replace it)
├──────────────────────────────────────────────────────────────────────────────┤
│  NEXT   → {{NEXT_TARGET}}   · {{PUSH_STATUS}}
╰──────────────────────────────────────────────────────────────────────────────╯
```

The `AAR POINTER` block is the structural enforcement of SO-LH-2 — it is the reason this template caps at 5 blocks rather than absorbing the AAR's content into a 6th.

## Placeholder spec

| Placeholder | Source | Fallback when missing |
|---|---|---|
| `{{CAMPAIGN_ID}}` | campaign master frontmatter `campaign_id` | basename of campaign dir |
| `{{PERSONA}}` | campaign master frontmatter `persona` | `?` |
| `{{VAULT_BADGE}}` | host vault badge per [[skill_lattice_home_install]] step 2 | `🧬 lattice` (generic) |
| `{{OPENS_AT}}` / `{{CLOSED_AT}}` | frontmatter `opens_at` / `closed_at` | `(undated)` |
| `{{DURATION}}` | `closed_at − opens_at` | `(n/a)` |
| `{{FILE_TALLY}}` | `git diff --stat` over campaign commit range, or close-notes tally | `(tally TBD)` |
| `{{MISSIONS_DONE}}` / `{{MISSIONS_TOTAL}}` | count of `status: completed` vs all missions | `?/?` |
| `{{KEY_ARTIFACTS}}` | 1-line artifact summary from close notes | `(see AAR)` |
| `{{MISSION_TALLY}}` | `grep -l "^status: completed$"` on missions glob + close date | `│    (none)` |
| `{{AAR_PATH}}` | AAR artifact path or campaign-master AAR section | **required — no fallback** (if absent, the AAR is not done; do not render) |
| `{{NEXT_TARGET}}` | Next Session Prompt routing target | `(campaign terminal — no successor)` |
| `{{PUSH_STATUS}}` | `pushed origin/<branch> ✓` or `local-only` | `local-only` |

> `{{AAR_PATH}}` is the only placeholder with **no fallback**: if there is no AAR to point at, the close cascade is incomplete and the splash must not render (SO-LH-2 — the splash never stands in for a missing AAR).

## MISSION TALLY row form

Each row inside `{{MISSION_TALLY}}` follows the indented closed-glyph + date form:

```
│    ✓ M1 <mission_slug>          <close_date>
│    ✓ M2 <mission_slug>          <close_date>
```

Bash substitution produces the multi-line block (per the bash-substitution-not-awk-v discipline; see [[template_lattice_home_render]]).

## Glyph vocabulary

Shared with [[template_lattice_home_render]] — do not re-define. Campaign-close uses the closed-state subset:

| Class | Glyphs |
|---|---|
| Mission state | `✓ closed · ⚠ closed-with-blocker · ⊘ abandoned` |
| Push state | `✓ pushed · ◌ local-only` |

**Font fallback**: glyphs degrade to `[X]/[ ]` where the terminal lacks Unicode coverage.

## Styling — semantic roles only (zero hex literals)

Reference roles from the host vault's `what/inventory/inventory_palette.md` (or equivalent); zero hex literals here.

| Role | Element |
|---|---|
| `bg_window` | box outer fill |
| `bg_raised` | header block + section separators |
| `fg_primary` | text body |
| `fg_muted` | dates, the SO-LH-2 banner line |
| `accent_primary` | nav headings (`DELIVERED` · `MISSION TALLY` · `AAR POINTER` · `NEXT`) |
| `accent_needs_you` | reserved if `{{NEXT_TARGET}}` carries a `#needs-human` handoff |

## Activation

Rendered **once** in the close cascade by the [[skill_campaign_sitrep_splash]] recipe, placed **beside** the AAR (campaign-master close section or STATE.md Last Session block). No shell-hook gate; no graph-root walk. Render only after the AAR artifact exists (SO-LH-2 step-5 check).

## Cross-references

- [[skill_campaign_sitrep_splash]] — the recipe that consumes this template (campaign-close moment); see its self-reference worked example
- [[template_campaign_open_splash]] — the sibling open-variant template
- [[template_lattice_home_render]] — the cold-start render template; shared placeholder + glyph vocabulary
- [[template_aar_lightweight]] — the 5-line AAR this splash points at (never replaces)
- [[pattern_lattice_home]] — the parent pattern (Anti-Pattern row 7: splash-as-AAR-substitute)

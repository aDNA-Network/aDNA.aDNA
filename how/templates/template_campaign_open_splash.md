---
type: template
template_class: campaign_open_splash
status: active
persona: rosetta   # vault-agnostic; instances re-persona per host vault
created: 2026-05-29
updated: 2026-05-29
last_edited_by: agent_stanley
substrate_pin: "Shares the placeholder + glyph vocabulary of template_lattice_home_render (CMux.aDNA HEAD 7747a15a lineage); lifecycle-open variant authored at campaign_lattice_home_pattern M3"
tags: [template, lattice_home, splash, campaign_open, lifecycle_variant, ascii_render, vault_agnostic, placeholder_spec, fallback_discipline, orientation_surface]
---

# Campaign-Open Splash Template (vault-agnostic)

> Drop-in substrate for the [[skill_campaign_sitrep_splash]] recipe, campaign-**open** variant. Verbatim 5-block ASCII fence-pair below; the canonical `lattice` extractor (`awk '/^```$/{flag=!flag; next} flag'`) lifts the block, bash substitutes `{{PLACEHOLDER}}` markers, prints to stdout. No runtime dependencies beyond bash + awk. This is an **orientation** surface — forward-looking; it answers "what am I about to undertake, and how is it bounded?"

## Render (template — placeholders `{{LIKE_THIS}}`)

```
╭─ {{CAMPAIGN_ID}} · {{PERSONA}} ──────────────────── {{VAULT_BADGE}} OPENING ─╮
│  opened {{OPENS_AT}}    {{PARENT_LINE}}
├──────────────────────────────────────────────────────────────────────────────┤
│  INTENT   {{INTENT}}
│           ↳ north-star: {{NORTH_STAR}}
│
│  MISSION TREE
{{MISSION_TREE}}
│
│  PLAN     phase {{PHASE}} · {{EST_SESSIONS}} sessions · {{TOKEN_BUDGET}} · {{CONSTRAINT_COUNT}} hard constraints
├──────────────────────────────────────────────────────────────────────────────┤
│  GATES    phase gates are human gates · begin at {{FIRST_OBJECTIVE}}
╰──────────────────────────────────────────────────────────────────────────────╯
```

The `GATES` line restates **Standing Order #1 / Campaign phase-gate discipline** (never auto-advance phases) at the moment of campaign open — the splash is where the operator first sees the bound.

## Placeholder spec

| Placeholder | Source | Fallback when missing |
|---|---|---|
| `{{CAMPAIGN_ID}}` | campaign master frontmatter `campaign_id` | basename of campaign dir |
| `{{PERSONA}}` | campaign master frontmatter `persona` | `?` |
| `{{VAULT_BADGE}}` | host vault badge per [[skill_lattice_home_install]] step 2 | `🧬 lattice` (generic) |
| `{{OPENS_AT}}` | frontmatter `opens_at` | `(undated)` |
| `{{PARENT_LINE}}` | `parent_campaign` or `side_campaign_of` frontmatter | `(top-level campaign)` |
| `{{INTENT}}` | campaign master §Identity / §Scope intent line | `(intent TBD)` |
| `{{NORTH_STAR}}` | north-star alignment line (if present) | `(none stated)` |
| `{{MISSION_TREE}}` | `grep -l "^status:" <campaign>/missions/*.md` + glyph per status | `│    (no missions planned yet)` |
| `{{PHASE}}` | campaign phase label | `(single-phase)` |
| `{{EST_SESSIONS}}` | frontmatter `estimated_sessions_total` | `?` |
| `{{TOKEN_BUDGET}}` | declared token-add budget | `(unbudgeted)` |
| `{{CONSTRAINT_COUNT}}` | count of §Hard constraints rows | `0` |
| `{{FIRST_OBJECTIVE}}` | first mission's first objective / `M1` | `M1` |

## MISSION TREE row form

Each row inside `{{MISSION_TREE}}` follows the indented form (open glyphs, since all missions are planned at campaign open):

```
│    🔲 M1 <mission_slug>        (planned)
│    🔲 M2 <mission_slug>        (planned)
```

Bash substitution produces the multi-line block (per the bash-substitution-not-awk-v discipline; see [[template_lattice_home_render]]).

## Glyph vocabulary

Shared with [[template_lattice_home_render]] — do not re-define. Campaign-open uses the mission-state subset:

| Class | Glyphs |
|---|---|
| Mission state | `🔲 planned · ▶ open · ✓ closed · ⏸ deferred · ⚠ blocked` |

**Font fallback**: glyphs degrade to `[ ]/[*]/[X]` where the terminal lacks Unicode coverage.

## Styling — semantic roles only (zero hex literals)

Reference roles from the host vault's `what/inventory/inventory_palette.md` (or equivalent); zero hex literals here.

| Role | Element |
|---|---|
| `bg_window` | box outer fill |
| `bg_raised` | header block + section separators |
| `fg_primary` | text body |
| `fg_muted` | dates, `(planned)` annotations |
| `accent_primary` | nav headings (`INTENT` · `MISSION TREE` · `PLAN` · `GATES`) |
| `accent_amber` | `⚠` blocked |

Role-to-hex resolution happens at the host vault's env conf (single source-of-record per vault).

## Activation

Unlike the cold-start splash, the campaign-open splash is **not** shell-hook-gated — it is rendered **once** at campaign-master authoring time (or re-rendered on material mission-tree change) by the [[skill_campaign_sitrep_splash]] recipe. No interactive-shell gate; no graph-root walk.

## Cross-references

- [[skill_campaign_sitrep_splash]] — the recipe that consumes this template (campaign-open moment)
- [[template_campaign_close_splash]] — the sibling close-variant template
- [[template_lattice_home_render]] — the cold-start render template; shared placeholder + glyph vocabulary
- [[pattern_lattice_home]] — the parent pattern (5-block cap)

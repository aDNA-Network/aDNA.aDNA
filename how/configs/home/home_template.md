---
type: home_template
template_class: adna_runtime_idle_destination
status: active
persona: rosetta
created: 2026-05-29
updated: 2026-05-29
last_edited_by: agent_stanley
substrate_pin: "CMux.aDNA HEAD 7747a15a (lift source — verbatim 5-block fence-pair shape; parameterization per skill_lattice_home_install step 2)"
tags: [home, template, idle_state, destination, lattice_home_pattern, adna, semantic_roles, glyph_vocabulary, install_mission]
---

# aDNA.aDNA Home Page Template

> Canonical home substrate for Rosetta. The verbatim render block between the fences below is extracted by `lattice home` (`cmd_home` in `how/configs/bin/lattice`), placeholders substituted, then printed. Single-sourced; the four-tier pipeline (dossier → template → graph-local symlink → CLI) resolves to this fence pair as the template tier.
>
> Self-reference: this template demonstrates [[pattern_lattice_home]] by living inside the same vault that authored the pattern (Standing Order #8).

## Render (template — placeholders `{{LIKE_THIS}}`)

```
╭─ {{NODE_ID}} · {{OPERATOR}} ──────────────────── 🧬 aDNA / Rosetta ─╮
│  {{BRANCH}}    {{UPSTREAM_STATUS}}    {{VAULT_STATUS}}
├─────────────────────────────────────────────────────────────────────┤
│  OPEN MISSIONS
{{OPEN_MISSIONS}}
│
│  RECENT
{{RECENT}}
│
│  CAPABILITY
│    providers: {{PROVIDERS}}    mcp: {{MCP_STATUS}}
│    theme tier: {{THEME_TIER}}    graphics: {{GRAPHICS_STATUS}}
├─────────────────────────────────────────────────────────────────────┤
│  SPC   g graph · m mission · t theme · p promote · b browser · ?
╰─────────────────────────────────────────────────────────────────────╯
```

The bottom row mirrors the locked first-ring leader-key vocabulary from CMux ADR-004. Ornamental at splash time in aDNA.aDNA (no TUI wired); reserved for future Rosetta-side leader-tree surface.

## Placeholders (substituted by `cmd_home`)

| Placeholder | Source | Fallback |
|---|---|---|
| `{{NODE_ID}}` | `basename "$vault_root"` | n/a (always derivable) |
| `{{OPERATOR}}` | `git config user.name` | `?` |
| `{{BRANCH}}` | `git -C $vault branch --show-current` | `(detached or no repo)` |
| `{{UPSTREAM_STATUS}}` | `git rev-list --left-right --count @{u}...HEAD` | `local-only` (no upstream) |
| `{{VAULT_STATUS}}` | `git status --porcelain | wc -l` | always rendered (`✓ vault clean` or `⚠ N uncommitted`) |
| `{{OPEN_MISSIONS}}` | `grep -lE "^status: (planned\|in_progress\|active)$" how/campaigns/*/missions/*.md` (top 5) | `│    (none)` |
| `{{RECENT}}` | `grep -lE "^status: completed$"` + mtime-sort + top 3 | `│    (none)` |
| `{{PROVIDERS}}` | `command -v claude` probe | `claude-code ◌` (pending glyph) |
| `{{MCP_STATUS}}` | literal placeholder | `(probe → future)` |
| `{{THEME_TIER}}` | literal placeholder | `(probe → future)` |
| `{{GRAPHICS_STATUS}}` | literal placeholder | `(probe → future)` |

The `🧬 aDNA / Rosetta` badge is baked into the fence-pair literal (NOT a placeholder) — it identifies the vault binding of this template and never varies for aDNA.aDNA.

**Activation gate** (in `cmd_home`): renders only when `ADNA_LATTICE` is unset or non-zero AND PWD descends from the binary's vault root AND `MANIFEST.md` is readable at that root. Out-of-graph + `ADNA_LATTICE=0` both suppress (non-zero exit; quiet stderr line).

## Glyph vocabulary

| Class | Glyphs |
|---|---|
| Mission state | `▶ open · ✓ closed` |
| Run state | `● running · ◌ pending` |
| Hero | `🧬 aDNA / Rosetta` (badge) · `↑N ↓M upstream` (ahead/behind) |
| Vault state | `✓ vault clean · ⚠ N uncommitted` |

Font fallback: where the operator's terminal font lacks Unicode coverage, glyphs degrade silently. The renderer emits primary glyphs.

## Styling (semantic roles only — zero hex literals)

This template inherits the aDNA standard's semantic-role discipline (no inline ANSI; no hex). Color application is the terminal's job; the template carries structure only.

## Cross-references

- [[pattern_lattice_home]] — the pattern this template instantiates
- [[skill_lattice_home_install]] — the install recipe that placed this template here
- [[template_lattice_home_render]] — the canonical render-template artifact (M1 D3)
- [[mission_lhp_m2_adna_vault_install]] — the mission that produced this file
- CMux source: `Cmux.aDNA/how/configs/home/home_template.md` at SHA `7747a15a`

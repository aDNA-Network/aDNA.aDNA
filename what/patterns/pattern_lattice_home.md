---
type: pattern
created: 2026-05-29
updated: 2026-05-29
status: active
pattern_category: structural   # 5-block layout is structural; activation discipline is operational; primary register is structural per first-contact UX framing
applies_to: [campaigns, missions, sessions, governance, team]
last_edited_by: agent_stanley
tags: [pattern, lattice_home, splash, terminal, cold_start, ascii_render, four_tier_pipeline, dual_gated_activation, vault_portable, cmux_substrate_source]
substrate_pin: "CMux.aDNA HEAD = 7747a15a (2026-05-29 read); canonical-instance #1 of #1 at write-time"
---

# Lattice Home — Terminal Cold-Start Splash Pattern

## Problem

Every aDNA vault opens to an empty terminal. An agent or operator dropping in pays a **discovery tax** to learn what is open, what is recent, what capabilities are wired, and what keybindings exist. The tax compounds across sessions — the same `ls` + `git status` + `grep "status: in_progress"` is re-paid every cold-start.

Worse, the cold-start is silent in a way that fails the [[pattern_dual_audience|dual-audience]] test: agents see nothing structured to orient against; humans see no welcome, no breadcrumbs, no "where am I." First-contact UX is the weakest surface in the standard.

CMux.aDNA solved this for the cmux graph at EP2 ex_04 close (2026-05-28) by rendering a fixed 5-block ASCII splash on terminal cold-start. The pattern generalizes: any aDNA vault can ship the same surface with bash + awk and zero runtime dependencies.

## Solution

Render a **5-block ASCII splash** at terminal cold-start through a **4-tier single-source pipeline**, **dual-gated** for safety:

### 5-block layout schema

| Block | Content | Width |
|---|---|---|
| **Header** | `{{NODE_ID}} · {{OPERATOR}}` left + `{{VAULT_BADGE}} {{VAULT_NAME}}` right; `{{BRANCH}} ↑N ↓N upstream / ⚠ N uncommitted` git status line | full row |
| **OPEN MISSIONS** | grep-stub list of `status: planned\|in_progress\|active` missions; capped at 5 entries | full row |
| **RECENT** | mtime-sorted last 3 `status: completed` missions with date column | full row |
| **CAPABILITY** | provider probe (`command -v <agent-cli>`) + MCP / theme / graphics probes; cheap stubs with `(probe → ex_NN)` markers for unfinished | full row |
| **Keybinding hint** | `SPC g graph · m mission · t theme · p promote · b browser · ?` (ornamental at splash time; wired to TUI later) | full row |

### 4-tier single-source pipeline

```
dossier (design intent + placeholder spec)
   ↓
template (canonical ASCII fence-pair with {{PLACEHOLDER}} markers)
   ↓
graph-local state symlink (vault → user XDG / Application Support)
   ↓
`lattice <verb>` CLI (bash + awk extractor; placeholder substitution)
```

Each tier has exactly one source-of-record; downstream tiers reference upstream via symlink or grep. Edits at one tier propagate to all consumers without per-consumer maintenance.

### Dual-gated activation

The splash fires automatically on **interactive shell start**, but only if **both** gates pass:

1. **Environment gate** — `<VAULT>_LATTICE` env var defaults to ON; explicit `<VAULT>_LATTICE=0` suppresses (operator escape hatch).
2. **Graph-root gate** — PWD walks up looking for the vault's `node.adna.yaml` (or equivalent identity stub); if absent, splash silently no-ops.

Both gates are silent on miss (`return 1` not error). The splash never blocks terminal-open and never speaks unless invited.

### Fallback discipline

Every placeholder has a documented fallback for missing data:

| Placeholder | Fallback | Trigger |
|---|---|---|
| `NODE_ID` / `OPERATOR` | `?` | YAML stub missing or unreadable |
| `BRANCH` | `(detached or no repo)` | git rev-parse fails |
| `UPSTREAM_STATUS` | `local-only` | no upstream set |
| `OPEN_MISSIONS` / `RECENT` | `(none)` | grep returns empty |
| `PROVIDERS` | `claude-code ◌` (pending glyph) | `command -v` returns non-zero |

## When to Use

- **Any aDNA vault** where the operator wants an at-a-glance state summary at terminal open
- **Standalone Lattice terminals** opening in a vault's graph root
- **Multi-vault workspaces** where each vault should self-identify on cold-start (avoids the "which graph am I in?" tax)
- **NOT** for sub-directories of a vault (the graph-root gate intentionally prevents pollution)
- **NOT** for non-interactive shells / CI runners (interactive-shell gate prevents accidental splash in scripts)

## Example

**Canonical-instance #1**: `CMux.aDNA/how/configs/bin/lattice` lines 165-290 (`cmd_home()`). Splash live since CMux EP2 ex_04 close 2026-05-28. Activates via `CMUX_LATTICE` env gate + graph-root walk for `what/cmux/graph/node.adna.yaml`. ~75 LoC pure bash + awk; sub-second render; idempotent install via CMux ex_02 ADR-015 graph-local runtime discipline.

**Canonical-instance #2** (this vault): `aDNA.aDNA/how/configs/bin/lattice` (delivered at `campaign_lattice_home_pattern` Mission 2). Activates via `ADNA_LATTICE` env gate + graph-root walk for `aDNA.aDNA/MANIFEST.md`. Renders Rosetta-flavored header (`🧬 aDNA / Rosetta` badge), aDNA mission grep (`how/campaigns/*/missions/*.md`), and Rosetta-specific capability stubs.

**Self-reference**: this very pattern doc lives in `aDNA.aDNA/what/patterns/` under the `pattern` ontology extension Rosetta authored for the vault's own demonstration purpose. The vault IS the textbook (CLAUDE.md Operating Style); the pattern is documented in the same surface where it will be installed at Mission 2.

## Anti-Pattern

| What | Why it breaks |
|---|---|
| **Global shell hook with no graph-root gate** | Pollutes every terminal regardless of cwd; operator sees splash in `/tmp` and `$HOME`; gate-of-last-resort fails |
| **Runtime dependency beyond bash + awk** | Node / Python / Go requirements break the portability promise; pure-bash discipline keeps the pattern viable across nodes |
| **Inline ANSI color codes** | Color choices drift from the vault's semantic-role tokens (per ADR-005 visual identity); reference `inventory_palette.md` by role, never embed hex |
| **Blocking probe** | Splash that calls a remote LLM or slow MCP probe blocks terminal-open; cheap `command -v` + `git rev-parse` discipline keeps render sub-second |
| **Verbose multi-screen render** | 5 blocks × full-width is the cap; anything more violates the "at-a-glance state summary" promise; richer data belongs in `lattice <other-verb>` subcommands |
| **Per-vault code copy without parameterization** | Splashes drift across vaults if each copies the bash verbatim; the install skill ([[skill_lattice_home_install]]) enforces lift + parameterize, not copy |
| **Splash as canonical AAR substitute** | The splash is a recap surface; it does NOT discharge Standing Order #5 (every mission gets an AAR) or Campaign SO #11 (per-phase decadal AAR). [[skill_campaign_sitrep_splash]] documents the augments-AAR-never-replaces discipline |

## Cross-references

- [[skill_lattice_home_install]] — the install recipe (Mission 1 D2)
- [[template_lattice_home_render]] — the canonical ASCII template (Mission 1 D3)
- [[idea_upstream_lattice_home_pattern]] — upstream-promotion candidate (Mission 1 D4)
- [[skill_campaign_sitrep_splash]] — lifecycle-variant skill (Mission 3 D1; planned)
- [[pattern_agents_md]] — sibling pattern (directory-level load/skip; both implement the "narrow the working set" discipline at different surfaces)
- [[pattern_dual_audience]] — sibling pattern that the splash satisfies (humans see welcome; agents see structured state)
- [[CMux.aDNA/what/decisions/adr_013_context_graph_as_product|CMux ADR-013]] — context-graph-as-product (the splash IS the graph's product surface)
- [[CMux.aDNA/what/dossiers/dossier_home_page|CMux dossier_home_page]] — the original design doc

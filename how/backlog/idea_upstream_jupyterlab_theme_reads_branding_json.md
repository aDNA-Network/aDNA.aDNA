---
type: backlog_idea
status: proposed
priority: low
created: 2026-05-28
last_edited_by: agent_stanley
tags: [backlog, idea, upstream, jupyterlab_theme, multi_tenant_branding, latlab_extensions, hub_branding, lighthouse_polish_origin]
---

# Idea — Upstream: `@latlab/theme-latlab-dark` JupyterLab extension should read `~/.latlab/branding.json` at install-time

## Problem / Opportunity

Surfaced during LatticeNetwork.aDNA S81 Lighthouse polish (mission #23) on stanley_l1. The Lattice deployment has three branded surfaces:

| Surface | Reads `~/.latlab/branding.json`? | Notes |
|---|---|---|
| JupyterHub login page (`/hub/login`) | ✅ yes | `~/.latlab/jupyterhub_config.py` reads `branding.json` and injects `c.JupyterHub.template_vars` + `c.JupyterHub.logo_file` |
| HQ Dashboard service (`/services/home/`) | ✅ yes | FastAPI service reads `branding.json` via env-var pass-through and serves it to the React SPA |
| **JupyterLab theme (`@latlab/theme-latlab-dark`)** | ❌ **no** | `latlab/extensions/theme/theme.py` **hardcodes** Einstein purple `#6833AC` + 11 other CSS custom properties as a static build artifact |

For the Lattice canonical deployment this works correctly — purple is the Lattice brand and stanley_l1's Lab matches the Hub login + HQ Dashboard. But it means:

1. **Multi-tenant Lab themes** are blocked. A partner who runs `~/.latlab/branding.json` with a different primary color (a Wilhelm Foundation deployment, a SwS deployment, a research-lab deployment) gets:
   - ✅ correctly branded login page
   - ✅ correctly branded HQ Dashboard
   - ❌ a hardcoded purple Lab UI that doesn't match
2. **Branding drift** — there's no single source of truth. The `branding.json` is the canonical descriptor, but the Lab theme silently ignores it.
3. **Forge ecosystem implication** — when SiteForge / CanvasForge / VideoForge / etc. consumer vaults bundle their own branding (per `spec_forge_ecosystem.md` consumer wrapper pattern with `federation_ref:`), the Lab they spawn should reflect that branding too. Current architecture: it can't.

## Proposed Solution

Refactor `latlab/extensions/theme/theme.py` to read `~/.latlab/branding.json` at install-time and produce per-deployment CSS:

1. **Build-time read** — at `install_theme_extension.py` execution, parse `~/.latlab/branding.json` and substitute `colors.primary`, `colors.primary_dark`, `colors.primary_light`, `colors.button_text_color`, and font references into the CSS template.
2. **Runtime fallback** — if `branding.json` is missing or malformed, fall back to current hardcoded Einstein purple (preserves canonical-Lattice behavior).
3. **Optional**: write the resolved theme JSON to `~/.jupyter/labextensions/@latlab/theme-latlab-dark/config.json` so post-install verification can confirm the resolved values.
4. **Re-install hook** — when `~/.latlab/branding.json` is edited (especially `colors.*`), provide a `latlab theme refresh` CLI command (or document `jupyter labextension uninstall @latlab/theme-latlab-dark && python install_theme_extension.py`) so the Lab UI picks up the new values without a full venv rebuild.

Alternative: **runtime CSS injection** — the Lab extension could fetch `branding.json` over an authenticated channel at Lab session start and apply CSS custom properties dynamically. More flexible (no re-install needed for color changes), but requires more careful caching to avoid FOUC.

## Why This Is an Upstream (LP/Lattice) Concern, Not Per-Vault

- The branding.json schema is part of the LP product surface (`latlab/`).
- The theme extension is part of `latlab/extensions/`.
- Both are shipped to consumer vaults via the LP wheel / install path.
- A per-vault fix (e.g., RareArchive editing its own theme.py) would diverge from upstream and create drift across the forge ecosystem.

## Why Not Just Fix on Stanley_l1?

Stanley_l1 is the canonical-Lattice purple deployment — the current hardcoded behavior IS the desired behavior here. The fix only matters for non-canonical-purple deployments (Wilhelm Foundation, SwS, partner orgs). Filing as upstream improvement so the eventual fix benefits the whole consumer-vault ecosystem.

## Open Questions

1. Is there a per-vault override pattern already established elsewhere in the Lattice stack (e.g., `c.JupyterHub.template_vars` style) that the Lab theme should mirror?
2. Should `branding.json` itself migrate to an aDNA-standard schema (e.g., `who/identity/identity_brand.yaml`) so the format is governed across the workspace, not LP-private?
3. Federation impact: when `latticenetwork.aDNA/what/network/nodes/<nodename>.aDNA/` ingests a node's `LatticeHome.aDNA`, does the node's brand descriptor flow through to its mirrored representation in the network graph? (Probably yes — `node_display_name` and `tagline` are already in branding.json — but `colors.*` should travel too for the cross-fleet UI to render per-node identity correctly.)

## Origin & Precedent

- Surfaced: 2026-05-28 (S81 Lighthouse polish, mission #23).
- Origin vault: `LatticeNetwork.aDNA/how/campaigns/campaign_alphalattice_genesis/missions/mission_stanley_l1_own_hub_lighthouse_polish.md`.
- Filing dir: `aDNA.aDNA/how/backlog/` per workspace upstream-improvement-idea discipline (precedent: numerous `idea_upstream_*.md` files in same dir).
- Reader-only invariant on peer vaults preserved — this idea file is the ONLY new write in `aDNA.aDNA` this session; consistent with established `idea_upstream_*` contribution pattern (not a config or state mutation).

## Estimated Effort

- **Investigation**: 1 session (read theme.py + install_theme_extension.py + branding.json schema; design substitution path).
- **Implementation**: 1–2 sessions (refactor theme.py + add fallback + add CLI refresh command + tests).
- **Rollout**: opportunistic; canonical-Lattice purple unchanged, so no migration risk for stanley_l1.

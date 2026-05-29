---
type: backlog_idea
status: proposed
priority: medium
created: 2026-05-29
updated: 2026-05-29
last_edited_by: agent_stanley
filed_from: aDNA.aDNA/how/campaigns/campaign_lattice_home_pattern/missions/mission_lhp_m1_pattern_lift.md
filing_authorization: skill_upstream_contribution
upstream_target: LatticeProtocol/Agentic-DNA
github_issue: TBD
tags: [backlog, upstream, lattice_home, splash, terminal_ux, vault_portable, cold_start, four_tier_pipeline, dual_gated_activation, cmux_canonical_implementation, adna_canonical_implementation, phase_6_propagation, ecosystem_pattern]
---

# Idea: Promote the Lattice Home splash pattern (terminal cold-start 5-block ASCII surface) into the upstream aDNA standard

## Problem

Every aDNA-derived vault opens to an empty terminal. There is no inherited cold-start UX surface — agents and humans both pay a discovery tax (`ls` + `git status` + `grep "status: in_progress"`) at every cold-start to learn what is open, what is recent, what capabilities exist, what keybindings are available. The tax compounds across sessions and across vaults, and the silence fails the dual-audience test (agents see nothing structured; humans see no welcome).

19+ vaults in the workspace lack a canonical splash. Operators either re-author bespoke shell startup scripts per vault (drift across implementations; no shared discipline) or skip the surface entirely (highest discovery tax). Neither is acceptable as a default UX.

## Evidence

- **Canonical-instance #1** — `CMux.aDNA/how/configs/bin/lattice` `cmd_home()` lines 165-290 (~75 LoC bash + awk). Live since CMux EP2 ex_04 close 2026-05-28. Sub-second render; dual-gated; ADR-013 (context-graph-as-product) names the share-ready posture.
- **Canonical-instance #2** — `aDNA.aDNA/how/configs/bin/lattice` (delivered at `campaign_lattice_home_pattern` Mission 2; lift target). Will prove the lift-and-parameterize discipline works across vaults.
- **Adoption** — 2 of 19+ vaults at this filing = 11%. Without upstream propagation, the next 17 vaults each re-implement bespoke surfaces (drift) or skip (tax).
- **No fork required** — the pattern ships in `how/configs/` as a Tier-0 overlay; no upstream cmux/terminal/shell patching.

## Proposal

Add the Lattice Home pattern to upstream `LatticeProtocol/Agentic-DNA` (v7.1+ minor release) via 5 codifications:

1. **Pattern doc** at `Agentic-DNA/what/patterns/pattern_lattice_home.md` (lifted verbatim from `aDNA.aDNA/what/patterns/pattern_lattice_home.md`; ~109 lines; canonical-content class)
2. **Install skill** at `Agentic-DNA/how/skills/skill_lattice_home_install.md` (lifted verbatim from `aDNA.aDNA/how/skills/skill_lattice_home_install.md`; ~180 lines; new-artifact bounded)
3. **Render template** at `Agentic-DNA/how/templates/template_lattice_home_render.md` (lifted verbatim from `aDNA.aDNA/how/templates/template_lattice_home_render.md`; ~108 lines)
4. **Reference** to CMux + aDNA.aDNA as canonical-instance #1 + #2 in `Agentic-DNA/CLAUDE.md` Standing Rules (1-line pointer; no expansion)
5. **Inclusion** in default `setup.sh` opt-in prompt for new vault forks (1 question: "Install Lattice Home splash? [Y/n]" → runs install skill at fork-time if yes)

Total upstream addition: ~400 lines + 1 CLAUDE.md pointer line + 1 setup.sh prompt. No new entity types, no new ADRs, no governance edits beyond the 1-line Standing-Rules pointer.

## Phase-6 propagation candidates

Once the upstream ships, propagate the pattern across the ecosystem at Phase 6 (or during ecosystem-wide governance refresh). 8 candidate vaults at this filing:

| Vault | Type | Surface | Notes |
|---|---|---|---|
| `LatticeHome.aDNA/` | Per-node operational vault (Hestia) | local-by-default; sensitive identity | Splash useful for cross-vault inventory orientation at terminal open |
| `LatticeAgent.aDNA/` | Platform vault (Stanley); harness provider | single-repo code-as-WHAT-object | Splash useful for harness state surface |
| `LatticeTerminal.aDNA/` | Platform vault (Spock); terminal substrate | single-repo | Splash IS canonical-fit (this IS the terminal vault) |
| `SiteForge.aDNA/` | Forge (composable website builder) | high-consumer-vault | Splash useful for archetype + lattice-graph status |
| `III.aDNA/` | Framework (quality + cycles) | high-consumer-vault | Splash useful for cycle-state surface |
| `CanvasForge.aDNA/` | Forge (canvas substrate + deck production) | Production v1.0 | Splash useful for canvas + production status |
| `VideoForge.aDNA/` | Forge (multi-platform video production) | execution-campaign-ready | Splash useful for production pipeline status |
| `MoleculeForge.aDNA/` | Forge (molecular search engine) | genesis Phase 0 | Splash useful for workflow + model state |

Each propagation cycle runs the [[skill_lattice_home_install]] 6-step recipe at the target vault. Adoption is operator-discretionary at fork-time (or upgrade-time for existing vaults).

## Related upstream candidates

- [[idea_upstream_workspace_router_row_discipline]] — sibling discipline (router rows = routing identity only)
- [[idea_upstream_credential_broker_template_inheritance]] — sibling discipline (credential routing at fork-time)
- [[idea_upstream_readme_first_contact_pattern]] — sibling discipline (README content-class taxonomy)

The 4 ideas form a coherent **vault-portable UX layer** for the standard: README first-contact (web/GitHub) + Lattice Home (terminal) + workspace router row discipline (operator orientation) + credential broker (background plumbing).

## Adoption discipline

- Adopt at next upstream version bump (post-v7.0 minor release; v7.1 candidate)
- Existing vault forks are NOT retroactively auto-installed; operators run [[skill_lattice_home_install]] manually when ready
- New vault forks inherit the pattern via the template + setup.sh opt-in prompt (default = passive mode per skill step 4 Mode B)
- Drift audit (SO-LH-1 from `campaign_lattice_home_pattern`) runs annually OR on operator request; divergence > 20% flagged for re-convergence

## Risks

1. **Setup.sh prompt fatigue** — adding a 5th opt-in prompt at fork-time may push beyond operator patience. Mitigation: combine with sibling upstream-promotion prompts (README style guide + workspace router + credentials) into a single 3-question "post-fork polish" block.
2. **Cross-vault drift** — each adopting vault may diverge from the upstream template. Mitigation: SO-LH-1 drift audit gate; CMux + aDNA.aDNA serve as anchor implementations.
3. **Shell-portability gap** — current skill is zsh-default; bash/fish/nu adaptations are documented but not first-class. Mitigation: skill includes "Cross-shell adaptations" section; bash/fish first-class support deferred to a follow-up upstream issue.

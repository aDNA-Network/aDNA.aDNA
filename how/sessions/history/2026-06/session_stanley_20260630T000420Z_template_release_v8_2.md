---
session_id: session_stanley_20260630T000420Z_template_release_v8_2
type: session
tier: 2
intent: "Execute skill_template_release — cut v8.2 from the dev graph to the public aDNA-Network/aDNA image (v2.4 standard batch + Class-1 template delta + currency-sweep standard deltas)"
status: completed
started: 2026-06-29
completed: 2026-06-29
agent: agent_stanley
campaign: operation_drydock_m03_followup (skill_template_release propagation gate)
related:
  - what/decisions/adr_042_fork_template_hygiene_and_rename_protocol.md
  - how/missions/mission_fleet_defects_upstream.md
  - how/skills/skill_template_release.md
  - how/backlog/idea_fleet_defects_retro_cleanup.md
tags: [session, release, template, public_face, adna_network, v8_2, adr_042, drydock, m03]
---

# Session — Template Release v8.2 (Drydock M03 propagation gate)

**Intent.** Operator opened the `skill_template_release` gate (the propagation half of ADR-042's two-gate discipline). Ship the ratified dev-graph standard batch since `v8.1` to the public clone-and-run image `aDNA-Network/aDNA` as tag **`v8.2`**, and sync the local `~/aDNA/.adna`.

## Scope declaration (Tier 2)

- **Writes (this vault, aDNA.aDNA):** this session file; later STATE.md, AAR, `idea_fleet_defects_retro_cleanup` disposition.
- **Writes (release tree — a temp clone of `aDNA-Network/aDNA`, NOT `~/aDNA/.adna` directly):** `.adna/` standard files + Class-1 delta + embed-note; root surfaces only if changed (root stays Berthier).
- **Outward:** push branch + annotated tag `v8.2` to `aDNA-Network/aDNA` (operator-confirmed at the gate).
- **Local sync (step e):** `rsync` the pushed tree → `~/aDNA/.adna`; regenerate `install_truth.json`.
- **Out of scope:** dev-graph source edits (the v2.4 batch already landed at `b4f83b1`); retro-sweeps B/C; Oration strips.

## Batch contents (everything ratified since v8.1, 2026-06-23)

1. **Fleet-defects v2.4** (ADR-042, `b4f83b1`): `adna_standard.md` §6.5 + §13.2; new `skill_project_rename.md`; `adna_validate.py --governance` guard.
2. **Class-1 template delta** (ADR-042 §1): drop `.adna/how/campaigns/campaign_adna_workspace_upgrade/`; parameterize the fork persona (`{{persona}}` in `.adna/CLAUDE.md` + Step-4 fork substitution + Step-8 onboarding resolution).
3. **Currency-sweep standard deltas** (`7095c00`+`1ce2f90`): `adna_standard.md` §3.5 errata; tools v2.2→v2.3; `frontmatter_schema` `$id` `adna.dev`→`adna.network`.

## Class-1 persona-param design (resolved this session)

- `.adna/CLAUDE.md` identity (lines 14, 27) → `{{persona}}` placeholder, persona-neutral default prose; governance version 8.1→8.2.
- `.adna/how/skills/skill_project_fork.md` Step 4 → substitute `{{persona}}` from carry-forward if provided, else leave the placeholder for onboarding (mirrors Home Step-3.5 mechanic).
- `.adna/how/skills/skill_onboarding.md` Step 8 → resolve `{{persona}}` (→ "Berthier" if the user keeps the default; → custom name otherwise). In ADR-042 scope ("substituted at fork/**onboarding** time").
- **KEEP unchanged:** `.adna/how/templates/template_workspace_claude.md` (root-router source, legitimately Berthier) → the image's root `CLAUDE.md` stays Berthier. This is the step-f acceptance test.

## Progress

- Preconditions: working tree clean (stray `.pyc` restored); `gh` authed (ScienceStanley, GH_TOKEN); latest tag `v8.1` → release `v8.2`; `.adna/` structure + Class-1 targets confirmed.

## SITREP

**Completed.**
- Cut + shipped **v8.2** to the public `aDNA-Network/aDNA` image (tag `v8.2`, commit `366fbc9`; `main` pushed). 7-row smoke + Class-1 A/B all GREEN.
- **Shipped:** standard v2.3→v2.4 (§6.5 Rename Protocol + `skill_project_rename.md`; §13.2 harness-injection safeguard + `adna_validate --governance` guard; §3.5 errata); **Class-1** fork-template hygiene (base `.adna/CLAUDE.md` persona → `{{persona}}` resolved at fork/onboarding via `skill_project_fork` Step 4 + `skill_onboarding` Step 8; stale `campaign_adna_workspace_upgrade` dropped); tooling v2.2→v2.3 (validator/compliance/schema, `$id`→adna.network); MANIFEST reconciled (22→26 templates, 13→14 skills) → governance lint **zero-drift**.
- **Verified:** root workspace-router stays **Berthier** (untouched); fresh non-Home fork = `{{persona}}` placeholder, **0 Berthier leak**; `.adna/` tracked + `*.aDNA/` ignored; embed-note present; old-URL redirect 200; tag live.
- Local `~/aDNA/.adna` synced (`125ac3b`); `install_truth.json` regenerated (unchanged, 4 paths verified). No GitHub Release object (repo is tags-only — matches v8.0/v8.1).
- Records: `idea_fleet_defects_retro_cleanup` arm A → released; STATE.md updated.

**In progress.** None.

**Next up (deferred + flagged — separate operator gates).**
- **Broader `.adna/` org-name currency sweep** — the shipped template still carries pre-existing stale refs (31 `LatticeProtocol/`, 20 `Agentic-DNA`), deliberately frozen pre-v8.0; needs a keep/strip pass (most are legitimate historical provenance), not a wholesale copy. NOT a v8.2 regression.
- Retro arms **B** (45-vault campaign strip) + **C** (rename-residue sweep) — `idea_fleet_defects_retro_cleanup`.
- Oration's 2 harness strips — Oration's own subagent (`coord_2026_06_29_rosetta_to_oration_harness_strip`, `ack_required`).

**Blockers.** None.

**Files touched.**
- Pushed to `aDNA-Network/aDNA` (v8.2): `.adna/{CLAUDE.md, MANIFEST.md, CHANGELOG.md, what/docs/adna_standard.md, what/lattices/tools/{adna_validate.py, compliance_checker.py, frontmatter_schema.json}, how/skills/{skill_project_fork.md, skill_onboarding.md, +skill_project_rename.md}}`; dropped `.adna/how/campaigns/campaign_adna_workspace_upgrade/`.
- Local: `~/aDNA/.adna` synced (`125ac3b`).
- Dev graph: this session file; `how/backlog/idea_fleet_defects_retro_cleanup.md`; `STATE.md`.

**Next Session Prompt.** The `skill_template_release` gate is CLOSED — **v8.2 is LIVE** on the public `aDNA-Network/aDNA` image (tag `v8.2`/`366fbc9`; ADR-042 Class-1 delta + standard v2.4 + tooling v2.3 propagated; local `~/aDNA/.adna` synced `125ac3b`; 7-row smoke + Class-1 A/B GREEN). No in-gate work remains. The next executable items are all operator-gated: (1) the **broader `.adna/` org-name currency sweep** — 31 `LatticeProtocol/` + 20 `Agentic-DNA` refs the release deliberately left frozen; run a keep/strip pass (the §6.5 `skill_project_rename` classifier discipline applies — most refs are legitimate historical provenance) as its own release gate; (2) retro arms **B** (45-vault `campaign_adna_workspace_upgrade` strip, incl. aDNA.aDNA's own) + **C** (OBE rename-residue sweep) in `idea_fleet_defects_retro_cleanup`; (3) Oration's 2 harness strips via its own subagent. Push the dev-graph records first (`git fetch` + ff-verify + `gitleaks`).

## AAR

- **Worked:** the diff-based assembly map (dev-graph canonical sources vs the released `.adna/`; copy only verified-clean ratified deltas) cleanly separated true standard changes from Rosetta-vault divergence — `CLAUDE.md`/`STATE.md`/`agent_first_guide.md` showed as "differs" but were correctly NOT shipped. Assert-exactly-once patch scripts + a full git-diff review made the delicate persona edits precise; the smoke test's Class-1 A/B rows proved the fix end-to-end (root=Berthier, fork=`{{persona}}`).
- **Didn't:** the persona surface was wider than the ADR named — "Berthier" lived in 3 fork-base spots (identity, customization note, Session Greeting) + the onboarding skill, not one; the first patch missed the Greeting line, caught only on a grep recount. The new `--governance` lint also surfaced a pre-existing MANIFEST template-count drift (22 vs 26) that had to be reconciled so the release didn't ship a self-failing lint. Early `.adna/` probes hit the wrong path (dev-graph `.adna/` vs workspace-root `.adna/`).
- **Finding:** a release gate is the right place to discover sibling defects — shipping a standard's own validator forces the standard to pass it (the lint immediately flagged our stale MANIFEST), and the persona fix needed the "resolve `{{persona}}` throughout CLAUDE.md at onboarding" model to stay coherent across the whole fork base.
- **Change:** when parameterizing a hard-coded token for release, grep the WHOLE fork-base surface (all governance files + the skills that reference it) up front — the leak-count is the acceptance test, not the ADR's named file.
- **Follow-up:** the broader `.adna/` org-name currency sweep (31+20 refs) is the next template-hygiene gate; keep/strip discipline required (most refs are legitimate historical provenance).

**Token budget (SO11):** estimated ~90 kT (50-200 tier). Actual ≈ within ~1.3× — extra loops on the `.adna/` path correction, the persona-surface recount, and the MANIFEST drift reconciliation. Within the 2× retrospective trigger; no retrospective.

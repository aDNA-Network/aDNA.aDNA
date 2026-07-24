---
type: campaign_stub
title: "STAGED STUB — Operation <codename> (v8.9 governance release)"
staged_by: agent_rosetta
staged_at: 2026-07-24
staged_in: campaign_refit / M5 vNext triage (P3 Chart)
materializes_when: "G2 / DP9 signed — then move to how/campaigns/campaign_v8_9_release/campaign_v8_9_release.md at status: planned"
proposed_campaign_id: campaign_v8_9_release
source_roadmap: vnext_roadmap.md
status: staged            # NOT a live campaign — the dir how/campaigns/campaign_v8_9_release/ does NOT exist until G2 ratifies (DP9)
tags: [campaign_stub, v8_9, release, staged, refit_m5, successor]
---

# STAGED STUB — v8.9 governance release campaign

> **This is a stub, not a live campaign.** It is staged text only. Per Refit **hard-constraint 3/5** and the M5 exit
> gate, the campaign directory `how/campaigns/campaign_v8_9_release/` is **created only after the operator signs G2 /
> DP9**. Until then this file is a chart, not a queue. On sign: move this content to
> `how/campaigns/campaign_v8_9_release/campaign_v8_9_release.md` at `status: planned`, mint a `CLAUDE.md` + P1 mission,
> and pick the codename (operator-renameable at the campaign's own G1). It fires later via `skill_template_release`,
> per the v8.6/8.7/8.8 lineage — Operation Refit *charts* this release; it does not fire one.

## Identity

| Field | Value |
|-------|-------|
| Proposed campaign | `campaign_v8_9_release` |
| Owner · persona | stanley · Rosetta |
| Governance bump | **8.8 → 8.9** |
| Standard version | **v2.5 held** (no normative change — governance/template/skill/doctrine layer only) |
| Count impact | **+1 skill** (`skill_state_graduation`, 32 → 33); possibly **+1 template** (`STATE_history.md` seed) — confirm at P1 |
| Ships to | `aDNA-Network/aDNA` (the public clone-and-run image) via `skill_template_release` |
| Executor tier | opus (governance authoring) |

## Goal

Ship the **v8.9 governance batch** ratified in [[vnext_roadmap]] §v8.9 to the public template image: the STATE.md
graduation doctrine (anchor), the STATE-convention family (`mission:` key + phase-display grammar), the path-convention
doctrine, the fork-kit AGENTS enforcement, the codename-collision authoring note, the release-process leak hardening,
and the `compliance_checker.py` hardening. Governance 8.8 → 8.9; standard v2.5 held.

## Ship-set (from the roadmap — 7 items)

1. **STATE.md graduation** *(ANCHOR)* — `skill_state_graduation` + `STATE_history.md` seed + `state_history:` pointer +
   the >100 KB auto-graduate tripwire in the base health check + frontmatter-as-a-graduation-class. *(+1 skill; CHANGELOG variant rides same.)*
2. **STATE-convention family** — `mission:` frontmatter key (3rd sibling) + `P<n>[/<count>]` phase-display grammar +
   `+adna-normalize-phase` render convention → `.adna/STATE.md` seed + STATE authoring guidance.
3. **Path-convention doctrine** — the `~/aDNA/`-in-prose / absolute-in-execution doctrine line → `.adna/CLAUDE.md` (+ optional S-series probe).
4. **Fork-kit AGENTS enforcement** — `skill_project_fork` 4-file-kit completion gate + AGENTS.md seed + genesis carve-out + census hook.
5. **Codename-collision authoring note** — "grep the codename before setting it" → order/campaign templates.
6. **Release-process leak hardening** — full outbound link/path grep + dev-vault-name scan codified into `skill_template_release`'s DE-LINK step.
7. **`compliance_checker.py` hardening** — output hygiene + content-type scoring + runtime-dep note.

*(v2.6 candidates — the `task` entity + the `surface_composition_graph` subtype — are NOT in this release; they are a
future standard window, per the roadmap. Node-manifest fork-emission is Home-ADR-gated and excluded.)*

## Phase shape (the v8.7/v8.8 release lineage — 4 phases)

```
P0 Charter        → materialize the campaign (this stub → live), pick codename, author CLAUDE + P1 mission
P1 Author riders  → author each ship-set item into the DEV graph + self-review; adna_validate --governance zero drift
G-ratify (P2)     → operator ratifies the ship-set (§7.7); frozen ship-set recorded
P3 Fire (the push IS the release) → fresh image clone → bump the 5 version surfaces → dry-run gates (gitleaks +
                    adna_validate + section-integrity) → PAUSE for operator GO → path-scoped commit + annotated tag
                    v8.9 → sync local .adna → fresh-clone smoke test
```

## Release mechanics (carried from `skill_template_release` — the hard-won lessons)

- **Diff-based delta-only fold** — copy only the ratified delta into a fresh image clone; never bulk-copy the dev graph.
- **The 5 version surfaces** — CLAUDE.md frontmatter + header changelog + CHANGELOG + BOTH README badges must all move 8.8 → 8.9.
- **DE-LINK before folding** — grep the FULL outbound link set (`](…)` + `[[…]]`) of every folded artifact; the v8.5
  near-miss (21 private wikilinks) is why item 6 exists and why this is a hard gate.
- **Tags-only + never-move-a-pushed-tag** — annotated `v8.9`; the tag is immutable once pushed (findings → the next release).
- **Dry-run-then-pause** — run the gate suite in dry-run, PAUSE for the operator GO; the push is the release.
- **`adna_validate --governance` with python3.13** — template + skills-count regex + version check; zero drift is the gate.
- **Fresh-clone smoke test** — redirect 301 · embed-note · `role: template` · `.aDNA` ignore, all green post-push.

## Gate to materialization

**This stub becomes a live campaign only on G2 / DP9 sign.** Do not create `how/campaigns/campaign_v8_9_release/`
before then. Source: [[vnext_roadmap]] · [[mission_refit_5_vnext_triage]] · [[ratification_record_refit_g1]] (DP9).
Fires: after Operation Refit closes (the release is its own campaign, not a Refit deliverable).

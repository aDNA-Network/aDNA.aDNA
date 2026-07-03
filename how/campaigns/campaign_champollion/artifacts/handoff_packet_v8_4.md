---
type: artifact
artifact_id: champollion_handoff_packet_v8_4
title: "M7.1 — Release-runner handoff packet (post-v8.4): the map, the v8.5 queue, standing calibrations, ledger index"
campaign_id: campaign_champollion
mission_id: mission_champollion_m7_1_ship_verify_handoff
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, p7, m7_1, handoff, release_runner, v8_5_queue, calibrations]
---

# Handoff packet — after v8.4

> The map a future maintainer / release-runner needs to (a) understand what shipped, (b) run the **next** release,
> (c) know exactly what is queued for **v8.5**, and (d) inherit the operating calibrations Champollion paid for.
> **The v8.4 tag is IMMUTABLE** — every item below routes to v8.5 or a new gate, never a tag patch.

## 1. What shipped (release identity)

**`aDNA-Network/aDNA` @ `4e3bf38`, annotated tag `v8.4`** — governance **v8.4** · standard **v2.5** · pushed 2026-07-03.
Local node `.adna` sync = `9bd4051`. Diff vs v8.3 = 28 files, 767+/48− content + bumps. Fired at G6
(`how/gates/champollion_p6_gate.output.md`); step-(f) smoke **7/7 PASS**. Post-ship backstop walk (M7.1):
**0 blocker / 2 major / 6 paper-cut** — nothing release-blocking (`artifacts/ship_verify_walk_v8_4.md`).

## 2. Release-runner's map — how to cut the next release

**The only way to touch `.adna/` or the image is `how/skills/skill_template_release.md` at an operator gate** (Inviolable:
never modify `.adna/` directly). The v8.4 cut is the worked reference; reuse its shape:

1. **Curate** (fable, verify-before-dispatch): build the candidate corpus from `grep fold_batch: <batch>` (python, not grep) →
   an **IN / DEFER / DROP** table, every DEFER with a named trigger; **un-ratified inbound proposals are §7.7-EXCLUDED** from the RC.
2. **Assemble a HELD patch** (opus) against a **fresh clone** of the image in scratchpad; dry-run runs `skill_template_release`
   steps **(a)→(c)** and **STOPS before (d)**. The RC is a held diff — `.adna/` + the image stay untouched. Record it like
   `artifacts/release_candidate_v8_4.{md,patch}`. Run the 6 named integrity checks (embed-note · Berthier=0 on `.adna/CLAUDE.md` ·
   `check-ignore` · root==template rule agreement · `role: template` · governance lint Zero-drift).
3. **Adversarial pass 2** (fable, 3 lenses, varied methods) + **security re-verify** (gitleaks **full-history** is a hard gate;
   `.gitleaks.toml` carries the one narrow vendored-plugin-bundle allowlist).
4. **Fire at the gate** (operator only — step (d) onward): apply the held patch to a fresh clone → **bump the version sites**
   (see the gotcha below) → commit → **annotated tag** → push branch + tag (tags-only) → **(e)** sync `~/aDNA/.adna` + verify
   `install_truth.json` → **(f)** run the **7-row smoke** (router pre-instantiated · `role:template` · key skills · ignore-rules ·
   embed-note · **old-URL 301 → adna-legacy** · tag + 1-command flow). A red smoke row → operator.

> **Release-runner gotcha (v8.4-confirmed): there are FIVE version-bump sites, not four.** (1) `.adna/CLAUDE.md` frontmatter
> `version:` · (2) `.adna/CLAUDE.md` changelog-comment prepend · (3) annotated git tag · (4) README badge hrefs (write to the
> *target* values during assembly; inert until the tag lands) · (5) **`.adna/CHANGELOG.md` release entry** — the "CHANGELOG" in
> the flag list means the **image's** `.adna/CHANGELOG.md` (the root has none). The governance lint catches (5) if missed — do not
> rely on memory. `.adna/CLAUDE.md` `updated:` also refreshes at step (d).
>
> **`install_truth.json` gotcha (step e):** `scripts/build_install_truth.mjs` logs `template <live ~/aDNA/.adna HEAD>` (e.g. `9bd4051`) while the committed `site/src/data/install_truth.json` keeps `template_sha: 74cb761` + `generated: 2026-06-10` **frozen** — the idempotency guard (lines 112–121) strips both fields before comparing, so they are churn-exempt whenever the 4 required paths + URLs are unchanged. **Log-SHA ≠ file-SHA is by-design — do NOT "correct" it** (M7.1 verified this to the literal SHA).

## 3. The v8.5 queue (every item carries its named trigger)

Zero-DROP discipline: each is a deferred deliverable, not a rejection. Enumerate by running
`grep -rl "fold_batch: v8_5_next_release" how/backlog/` (**python**, not grep — node flake) + this table.

### A · v8.5 skill-authoring batch (each new skill is its own reviewable deliverable — batching unreviewed skills into a launch RC fails the hostile-forker lens)
| Item | Source / note |
|------|---------------|
| `idea_upstream_graph_merge_recipe` (RC D3) | pt08b merge playbook |
| `idea_upstream_graph_rename_recipe` (RC D4) | reconcile overlap with base `skill_project_rename` |
| `idea_upstream_skill_project_archive` (RC D5) | router already names the Archive-holder convention |
| `idea_upstream_skill_second_genesis` (RC D6) | — |
| `idea_upstream_skill_workspace_spring_clean` (RC D7) | — |
| **P-5** fork-time `webforge/` scaffold (G6-D4 deferred) | ship at the v8.5 **fork-skill** touch, with the **optional-with-degradation** constraint recorded |

### B · Restructure / campaign-shaped
| Item | Trigger |
|------|---------|
| `idea_upstream_claude_md_prune` (RC D1) | v8.5 dedicated prune cycle (restructures every fork's inherited governance surface — needs its own review + adversarial pass) |
| `idea_inner_readme_iii` (RC D2) | post-launch **III batch** (10 cycles = campaign-shaped). *Note:* F-CHM-216 (below) is a discrete subset — do it as a targeted fix without waiting for the whole D2. |

### C · Next standard-version window (would re-open the closed v2.5 cut)
| Item | Trigger |
|------|---------|
| `idea_upstream_network_node_mirror_entity_type` (RC D9) | post-v2.5 discipline; needs the extension-registry mechanism decision |
| `idea_upstream_permission_edge_entity_type` (RC D10) | same window as D9 |

### D · IF-gated
| Item | Trigger |
|------|---------|
| `idea_upstream_obsidian_local_rest_api_seed` (RC D8) | **IF** the Obsidian T3 opt-in fires (NOT-seeded posture per Obsidian ADR-011) |

### E · Tooling-touch triggers (G6-D4 deferred adjudications)
| Item | Trigger |
|------|---------|
| **P-2** validator `source_vault` rule | next `adna_validate` touch (the v8.5 checker window) |
| **P-8** light STATE-frontmatter convention | next STATE-diet window |

### F · Ratified, folded into the batch
| Item | Trigger |
|------|---------|
| `idea_state_prompt_shed_on_close` | `fold_batch: v8_5_next_release` — shed self-superseded handoff prose **at close** (not quarterly); ratified at G6-D4 |

### G · Doc-currency / release-cut hygiene (NEW from M7.1 + RC §5 out-of-scope)
| Item | Trigger |
|------|---------|
| **F-CHM-216** — `.adna/README.md` teaches the dead two-step install | v8.5 targeted rewrite → the root README one-step flow (subset of D2; don't wait on the full redesign) |
| **F-CHM-217** — release-cut leak (unshipped-ADR links · private `aDNA.aDNA/` path in `template_home_claude.md` · dev-vault examples · `what/docs/AGENTS.md:20` "v2.1") | v8.5 "release-cut leak sweep" — de-link/ship-the-ADRs · strip/genericize private paths · currency internal doc indexes to v2.5 |
| `aDNA_overview.md` re-stamp (~47 kB; pre-v7.0 self-labels; narrates "22 templates / 15 examples") | v8.5 / doc-currency mission (RC §5) |
| **Validator-docstring currency class** (F-CHM-006 / F-CHM-209(a) / M6.1 review-fix lineage) — tool module docstrings · `meta.standard_version` · header version strings lagging the standard (`compliance_checker.py` + `adna_validate.py` docstrings were currencied at M6.1; the class remains a standing watch for the remaining tool headers) | next validator / tool touch (v8.5 checker window), or fold under the F-CHM-217 doc-currency sweep. *(Explicitly named in the G6 output record's v8.5-queue line — this row reconciles the handoff with it.)* |
| Context "27 subtopics" vs actual **28** (root router + template + MANIFEST narrate 27) | cheap currency fix; same narrated-count class (RC §5) |
| *(leave as-is — historical)* `STATE.md` / `how/migrations/migrate_v5.2_to_v6.0.md` narrate "22 templates" | historical records; do **not** re-currency (RC §5) |

## 4. Standing calibrations (what Champollion paid for — carry these forward)

| Calibration | Rule |
|-------------|------|
| **Per-row RC pricing** | Curation-heavy missions price ~**2.5–3 kT per curation row**, not by corpus size (M6.1 / datapoint #6). |
| **Pre-pin boundary facts** | The orchestrator pins foreign-corpus / boundary facts **at dispatch**; cross-graph & release missions price the *read surface*. Adopted standing at G5-D3 (validated −9% M5.3, 2-for-2 M6.2). |
| **Finding-side verification** | Verify a finding-sourced fold against the finding's **cited surface**, not just the diff side (M6.3 F1). Corollary (M7.1): verify **both** surfaces of a claimed contradiction. |
| **Vary the method for independence** | A second verifier must **vary the method** — re-running the same command is replication, not independence (F-CHM-212). M7.1's new majors came from a method M4.1 didn't apply. |
| **TaskStop + quiescence** | After a builder's completion notification, **TaskStop the dispatch agent-id** and verify tree quiescence before review-fixes (P4 twin-builder hazard). |
| **Aggregate halt-line** | Two in-band dispatches can sum **past** the mission halt; the aggregate check is an orchestrator responsibility (M6.1; where it should live = M7.2 retro). |
| **Verify-don't-inherit** | Run the validator **per-session**; no count/version/pass carried on faith (F-CHM-001, the standing lesson). |
| **python-not-grep** | Node `grep`/`find` flake false-empty; **python / rg enumeration is authoritative** (re-confirmed every session incl. M7.1). |
| **Mode B** | Campaign default: one fable orchestrator + bookends inline, opus subagent per build; Mode A (separate opus sessions) is the oversized-build fallback (charter §1.2). |

## 5. Ledger index (where everything lives)

| What | Where |
|------|-------|
| Findings register (F-CHM-*) | `how/campaigns/campaign_champollion/artifacts/findings_ledger.md` |
| v8.5 fold batch | `how/backlog/` → `fold_batch: v8_5_next_release` (python enumerate). *(Shipped v8.4 batch was `champollion_m6_1_rc`.)* |
| Gate records | `how/gates/champollion_p{0..6}_gate.md` + `…_gate.output.md` (G7 render = M7.2) |
| Telemetry corpus | `artifacts/telemetry_corpus_p{1..6}.md` (M7.2 adds #7 + the consolidated per-campaign export) |
| RC record + held patch | `artifacts/release_candidate_v8_4.{md,patch}` |
| Post-ship walk | `artifacts/ship_verify_walk_v8_4.md` |
| Release skill | `how/skills/skill_template_release.md` (+ execution notes in agent memory) |
| DP4 dossier | `how/campaigns/campaign_operation_adna/dp4_dossier.md` — **operator fires** (Track D READY; §6 = one paste) |
| Standard / ADR index | `what/docs/adna_standard.md` (v2.5) · `what/decisions/adr_index.md` |
| OoB · backlog adjudication · risk register | `how/campaigns/campaign_champollion/artifacts/{order_of_battle,backlog_adjudication_ledger,risk_register}.md` |

## 6. Post-ship walk — one-line summary

The shipped v8.4 image is **newcomer-clean on the primary path (0 blockers)**; the two majors (`F-CHM-216` inner-README
dead install flow · `F-CHM-217` release-cut leakage) and six paper-cuts are pre-existing hygiene, **all v8.5-routable, none
tag-blocking**. Full record + honest M4.1 delta: `artifacts/ship_verify_walk_v8_4.md`.

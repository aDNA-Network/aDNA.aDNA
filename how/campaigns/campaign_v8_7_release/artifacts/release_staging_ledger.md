---
type: artifact
artifact_class: release_staging_ledger
campaign: campaign_v8_7_release
release: v8.7
created: 2026-07-13
updated: 2026-07-13
last_edited_by: agent_rosetta
status: shipped
tags: [release_staging_ledger, v8_7_release, cleanroom, p2_packet, p3_manifest]
---

# v8.7 Release Staging Ledger — the P2 gate packet + P3 assembly manifest

> Mirrors the v8.6 `release_staging_ledger.md` pattern: a single dev-source → `.adna/`-target manifest that
> doubles as the **P2 ratification packet** (what the operator signs) and the **P3 assembly instruction set**
> (what the fire folds into a fresh `aDNA-Network/aDNA` clone). Governance **8.6 → 8.7**; **standard stays
> v2.5**. **No count bump** — no rider adds a skill or template.

## Ship-set — the 4 riders

| # | Rider | Authoring surface | Fold type | Status |
|---|-------|-------------------|-----------|--------|
| 4 | Genericize `skill_git_remote_setup` fleet repo names | dev `how/skills/skill_git_remote_setup.md` | **dev→image delta** (diff = the item-4 hunks) | ✅ authored + self-reviewed |
| 3 | Complete the image `how/templates/AGENTS.md` index (24→30) | staged `artifacts/staged_image_templates_agents.md` | **image-curated** (replace `.adna/how/templates/AGENTS.md`) | ✅ authored + hand-verified |
| 2 | Optional STATE `phase:`/`campaigns:` frontmatter convention | staged (below) | **image-curated** (edit `.adna/STATE.md` frontmatter) | ✅ authored |
| 5 | Fold the visual-inspection doctrine | staged `artifacts/staged_visual_inspection_doctrine.md` | **image-curated** (`.adna/CLAUDE.md` subsection, DP2) | ✅ authored + DE-LINK-verified |

---

## Item 4 — `skill_git_remote_setup` genericization (dev→image delta)

**Authored in the dev copy** `how/skills/skill_git_remote_setup.md`. Because the dev copy was *older* than the
image (pre-v8.6-BatchG), it was first **backported to the image state** (v8.6 already genericized
`LatticeProtocol`→`aDNA-Network`, `Spacemacs`→`MyProject`, the seven-named-vaults section, and the
`/Users/stanley/lattice/whitepaper` path leak) — so `diff .adna/… dev/…` now = **exactly the v8.7 item-4
delta**, cleanly foldable. The delta:
- frontmatter `updated: 2026-07-13` + `last_edited_by: agent_rosetta`
- the `GRANDFATHERED` array → empty-by-default + populate-it guidance (mechanism + pedagogy preserved)
- line-66 context-file description, the "Grandfathered non-conformant repo names" §special-case, and the
  §Self-reference paragraph → generic (no fleet names)

**P3 fold**: copy the dev `how/skills/skill_git_remote_setup.md` → the fresh clone's
`.adna/how/skills/skill_git_remote_setup.md` (the whole file — dev now == image + item-4 delta, so `git status`
shows exactly this one path changed, and only by the item-4 hunks). Verified: `grep -c` of the 4 fleet names = 0.

**Observed, NOT fixed (out of item-4 scope — candidate for a future currency rider / Batch B):** residual
milestone/campaign staleness in the same file — the `v7_0` tag (frontmatter), `M07` refs (lines ~40, ~108,
~268), the `v7.0 publish-skill` ref (~277). These are milestone-currency, not fleet-name leaks. Flag for P2.

---

## Item 3 — image `how/templates/AGENTS.md` reconciliation (image-curated)

The image index enumerated 23 `template_*.md` rows (claiming "12 auto + 13 manual + 1 bundle") but the image
dir holds **30** `template_*.md`. **7 were missing**: `disposition_ledger`, `ratification_record`,
`second_genesis_dossier` (shipped v8.6), `lattice_home_render`, `quest_result`, `side_quest`,
`workspace_claude` (the last unlisted in *both* dev + image indexes). Reconciled = **12 auto + 13 manual
(added `quest_result` + `side_quest`) + 5 operational (`disposition_ledger`, `lattice_home_render`,
`ratification_record`, `second_genesis_dossier`, `workspace_claude`) = 30**, + the 1 bundle dir (outside the
30). Types hand-verified from the actual files (note: `ratification_record` is `type: ratification_record`,
which the dev index had mis-stated as `template`). Dev's "Operational (8)" has 4 dev-only templates NOT in the
image (`campaign_open_splash`, `campaign_close_splash`, `drift_report`, `software_graph_stub`) — hence 5, not 8.

**Staged**: `artifacts/staged_image_templates_agents.md` = the complete reconciled index.
**P3 fold**: copy it → the fresh clone's `.adna/how/templates/AGENTS.md` (full-file replacement).
**Hand-verify at P3** (⚠ `adna_validate` skips nested AGENTS.md): `ls .adna/how/templates/template_*.md | wc -l`
== 30, and the index's `template_*.md` references == that set (0 missing, 0 phantom). Verified at P1: 30/30.

---

## Item 2 — STATE `phase:`/`campaigns:` frontmatter convention (image-curated)

There is **no `template_state.md`**; the fork-time seed is `.adna/STATE.md` (`last_edited_by: agent_init`,
copied into every fork). The frontmatter schema (`frontmatter_schema.json`) is **permissive**
(`additionalProperties: true`) → the two optional keys are additive, need **no schema change**, and never
error when absent (honest-absent). Origin: Home ADR-007 (derive-where-honest); consumers: Home
`skill_inventory_refresh` v2 → `inventory_vaults` rows → WebForge `graph_card`/`node_home`.

**P3 edit** — add the two keys to the `.adna/STATE.md` frontmatter (after `status:`), so every fork inherits
the convention. Exact block to add:

```yaml
phase: "production"        # optional · machine-readable one-line current phase (honest-absent if omitted; consumed by inventory-refresh → hub cards, never parsed from prose banners)
campaigns: []              # optional · active campaign ids (machine-readable list; honest-absent → [])
```

*(The seed's example state self-describes as "Production-validated," so `phase: "production"` + `campaigns:
[]` are honest illustrative values a forking agent then maintains.)*

**Deliberately minimal** (S-effort rider): the seed edit is the core — it makes forks inherit the convention,
and the inline comments self-document it. A fuller documentation surface (a note in `skill_project_fork`'s
STATE-prep step, or a governance-doctrine mention) is a candidate P2 add-on but not required for the
convention to land. Flag for P2.

---

## Item 5 — visual-inspection doctrine fold (image-curated)

Ship the **policy only** ("option 1" — the headless-first principle + T0/T1/T2 tier ladder + "never assume a
visible browser"), **not** the harness code (dev `scripts/visual_capture.mjs` + `viewports.json` are
web-vault-specific, stay out). Authored **generic + fully DE-LINKED** (v8.5 D-1 discipline): stripped 4 Rosetta
wikilinks (`skill_reference_inspection`/`skill_site_design_pipeline`/`skill_decadal_aar`/`skill_iii_cycle`), all
fleet-vault refs (Astro/WebForge/RemoteControl/III/Operations), incident refs (Storyweave, S62), and literal dev
paths. **Verified**: the 16-line fold-body has 0 wikilinks, 0 fleet/incident/path leaks, 0 markdown links.

**Staged**: `artifacts/staged_visual_inspection_doctrine.md` (fold-body between the `---` markers).
**DP2 recommendation — option (a)**: add as a `### Visual inspection (headless-first)` subsection at the end of
`## Working with Content` in `.adna/CLAUDE.md` (image-curated). `.adna/what/doctrine/` doesn't exist (a
standalone file adds a new dir), the idea offers "a CLAUDE.md pointer" as a governance-lean option-1 sub-choice,
and a CLAUDE.md subsection auto-loads on every fork. Option (b) [standalone `.adna/what/doctrine/` file + pointer]
is the alternative if the operator prefers at DP2.
**P3 fold**: insert the fold-body subsection into `.adna/CLAUDE.md` under `## Working with Content` (same file
the version bump touches).

---

## Version bump — the 3 template surfaces (governance-only 8.6 → 8.7)

1. `.adna/CLAUDE.md` frontmatter `version: "8.6"` → `"8.7"`
2. `.adna/CLAUDE.md` header comment (line ~10) — prepend `<!-- v8.7 | 2026-07-13 | Operation Cleanroom (currency + inheritable defaults): skill_git_remote_setup fleet-name genericize · how/templates/AGENTS.md index 24→30 · optional STATE phase/campaigns keys · visual-inspection doctrine fold. Standard stays v2.5. Counts unchanged (30 templates / 32 skills). Operator release gate 2026-07-13. -->` *(finalize once item 5's placement is set)*
3. `.adna/CHANGELOG.md` — add `## [v8.7] — 2026-07-13` at top (governance 8.6 → 8.7; standard v2.5 unchanged)

**Untouched** (governance-only bump): `adna_standard.md` (stays v2.5), the MANIFEST "aDNA Standard v2.5" rows,
the dev vault's own `## Governance Doctrine (v8.4)` header + `version: "8.4"` (deliberate self-drift), the
**dev-vault CHANGELOG** (only `.adna/CHANGELOG.md` gets the v8.7 entry).

## P3 fire sequence (operator-gated; `skill_template_release` version=v8.7)

1. `dry_run` first → assemble the ratified delta into a fresh `aDNA-Network/aDNA` clone's `.adna/`:
   - item 4: copy dev `skill_git_remote_setup.md`
   - item 3: copy `staged_image_templates_agents.md` → `.adna/how/templates/AGENTS.md`
   - item 2: apply the frontmatter block to `.adna/STATE.md`
   - item 5: place the doctrine per DP2
   - version: the 3 surfaces above
2. `git status` in the clone shows **exactly** the ratified paths under `.adna/` (any extra = NO-GO).
3. gitleaks clean + full outbound-link grep (`](…)` + `[[…]]`) on every folded artifact → **zero private
   dev-graph leaks**; `adna_validate --governance` (python3.13) **Zero drift**; persona test
   `grep -c Berthier .adna/CLAUDE.md` == 0.
4. **Pause for second operator GO** → `git tag -a v8.7` + push `main` (**tags-only**; `GH_TOKEN` auth).
5. local `~/aDNA/.adna` rsync `-a -c --delete --exclude .git` + local commit; regenerate install-truth fixture.
6. 7-row fresh-clone smoke → campaign close + AAR + STATE/memory update.

## Decisions — ✅ RATIFIED 2026-07-13 (`artifacts/ratification_record.md`)

- ✅ **Ship-set = all 4 riders** (§7.7 frozen).
- ✅ **DP2 = `.adna/CLAUDE.md` subsection** (item 5 folds as a `### Visual inspection` subsection under `## Working with Content`).
- ✅ **DP3 = fold** — the 5 `M07`/`v7.0` residuals in `skill_git_remote_setup` genericized at P1-close (0 residuals remain; delta re-verified clean).
- Remaining gate: **P3 fire — second operator GO** (dry-run-then-pause).

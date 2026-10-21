---
type: artifact
artifact_id: v8_14_release_ledger
title: "v8.14 staging ledger: the ARCADE carries, the Documents genesis template gaps, the mesh-probe portability fix, and a triage of the v8.13-lane orphans"
created: 2026-10-21
updated: 2026-10-21   # sitting 2: §4 ruled, §2a′ rows authored, §2c corrected, §2e v2.7 queue
status: proposed          # NOT FIRED — §4 RULED 2026-10-21 at sitting 2 (all six as recommended, after an operator-requested review); fire is its own GO
last_edited_by: agent_rosetta
session: session_stanley_20261021_014259_v8_14_queue_open
mission: mission_template_release_v8_14
relates: [v8_13_release_ledger, release_staging_ledger_v8_12, skill_template_release, aar_campaign_arcade, idea_upstream_template_gaps_from_documents_genesis, idea_upstream_release_spec_mirror_regen]
tags: [artifact, template_release, ledger, v8_14, proposed]
---

# v8.14 staging ledger (PROPOSED, NOT FIRED; §4 RULED 2026-10-21)

> ⚠ **Ledger rows are hypotheses.** They were measured against disk on **2026-10-21** and must be measured
> **again** before firing. Every release since v8.6 has caught at least one row wrong at fire time. **A fold is not
> a copy:** step (b.2) diffs each payload path in **both** trees and moves named lines only. `.adna/` is never
> hand-edited (Rule 1). Payload rows are enumerated, never a tree diff. The `img Δ` counts in §2a are whole-file
> diff counts against the v8.13 image, so they include older dev-vs-image drift. Most of that drift is deliberate
> de-narration (dev-graph provenance the image strips), which (b.2) must classify line by line.

Plain version: this page lists everything meant to go into the next public release of the aDNA starter kit. Each
row says where it comes from and where it lands. Nothing on it has been released yet.

## §0 · Derived at authoring, never carried

| Fact | Value | How |
|---|---|---|
| Image governance version | **8.13** | `~/aDNA/.adna/CLAUDE.md:3` (local sync `846ebde` = release `223ecc1`) |
| Image standard | **v2.6**, md5 `86385da8` | `.adna/README.md:10` badge · `md5 .adna/what/docs/adna_standard.md` |
| Dev-graph standard | **v2.6**, md5 `86385da8`. **Byte-identical to the image**, so no standard text is queued | `md5 what/docs/adna_standard.md` |
| ADR queue | 63 files = **61 accepted · 1 amended · 1 inactive · 0 proposed** | `grep -h '^status:' what/decisions/adr_0*.md \| sort \| uniq -c` |
| Templates | dev **47** · image **33** | `ls how/templates/template_*.md \| wc -l`, both trees |
| Skills | dev **58** · image **34** | `ls how/skills/skill_*.md \| wc -l`, both trees |
| Hook contract version | **4.3.0** (image) | `grep -n LAYER_CONTRACT_VERSION .adna/how/standard/hooks/pre-push-sanitize.sh` |
| `main` CI | last run 2026-10-20 `39426867975` success (`unlighthouse-sweep`, scheduled) | `gh run list --branch main --limit 1` |
| Branch hold | `vitrine/design` **ahead 4** at authoring (push held since 10-20 (t)) | `git status -sb` |
| ISS receiver | still `Access-Control-Allow-Origin: *` | `Astro.aDNA/what/lib/iss/runtime/gate_receiver.py:56`, last touched `1aa3ac4` 2026-05-31 |

## §1 · What this release is

A **governance-only** release: 8.13 → 8.14. The standard stays at v2.6 unless an ADR ruled in at §4 changes
normative text, and none queued here does. **No file is added**, so the counts stay at templates 33 · skills 34. The payload
is template fields the fleet keeps adding by hand, currency lines, two back-writes, and one skill fix.

## §2 · Payload rows

### §2a · Authored locally this sitting (sitting 1)

State key:
- `LOCAL ✓`: written in the dev graph, not yet folded.
- `DEV-ONLY`: not image payload.
- `IMG-SIDE`: the image file has no dev source, so the fold edits the clone at fire time.
- `GATE`: waits on a §4 ruling.

| # | Row (source) | Dev source | Image destination · `img Δ` | State |
|---|---|---|---|---|
| Q2 | Spec-mirror step (carry 6b · [[idea_upstream_release_spec_mirror_regen]]) | `how/skills/skill_template_release.md` new **Step (g)** + Outputs row | none; the skill is dev-graph only (absent from the image) | DEV-ONLY ✓ |
| C3a | Currency: ontology §Related link "Standard v2.1/v2.3" → v2.6 (carry 3) | `what/ontology.md:407` | `.adna/what/ontology.md:407` · Δ10 | LOCAL ✓ |
| C3b | Currency: validator docstrings v2.5 → v2.6 (carry 3) | `what/lattices/tools/compliance_checker.py:4` · `adna_validate.py:2` | same paths · Δ10 / Δ4 | LOCAL ✓ |
| C3c | Rubric pointer: the Home template named `aDNA.aDNA/CLAUDE.md` for the rubric; it now names `what/lattices/tools/compliance_checker.py`, which every fork carries (carry 3) | `how/templates/template_home_claude.md:286` | same · Δ2 | LOCAL ✓ |
| C3d | "16 base + 8 extension" → **"16 base + 11 example extension"** (image ontology `entity_count: 27`, 11 example rows) (carry 3) | none, image-only | `.adna/MANIFEST.md:127` | IMG-SIDE |
| C4 | Tense back-write: dev still said "proposed until G3" (carry 4). G3 ruled 2026-10-19, and v2.6 carries the text | `what/docs/profiles/AGENTS.md:5` (status → active) · `how/templates/template_profile_spec.md:33–35` (now the image's *Upstream.* paragraph) | the image already reads correctly · Δ51 / Δ42 (de-narration) | LOCAL ✓, back-write only |
| C5 | Bare `ADR-067` → `aDNA.aDNA ADR-067` in `$comment` (carry 5) | `what/lattices/tools/faces/upstream.json:2` | the image already qualified · Δ4. The pin file pins *other* files; `json.tool` parses, validator Zero drift | LOCAL ✓, back-write only |
| C13+Gb | One budget key + tier fields, in one diff (carry 13 · gap b · [[idea_upstream_campaign_template_tier_budget_fields]], ruled B2 2026-10-03) | `template_campaign_mission.md`: `executor_tier` · `token_budget_estimated` · `token_budget_actual` ("the ONE actuals key"). `template_campaign.md`: `executor_tier_default` · `executor_runtime` · `token_budget_estimated` · `token_budget_unit`. Both: the "(v8.13, proposed — …)" notes de-narrated to the image's "(v8.13)" | same · Δ3 / Δ7 | LOCAL ✓; Documents' extra fields are **GATE** (Q1) |
| Ga | Coordination memo fields (gap a) | `template_coordination.md`: `to:` · `reply_to:` · `status: staged` (→ delivered, stamped after the copy, then re-synced) · `delivered_on:` | same · Δ4 | LOCAL ✓ |
| Gc | Live-pointer cap (gap c) | `template_campaign_claude.md`: a **Live pointer** row in Campaign Identity + a ≤ 200-char rule. Measured first: this vault's 27 campaign CLAUDE files carry 0–842-char pointers; the long ones (HAUSSMANN 728 · Refit 842) are logs, not pointers | same · Δ6 | LOCAL ✓ |
| Gd | Mass nouns stay singular (gap d) | `skill_new_entity_type.md` Step 2: one sentence that cites the base ontology's own `context/` · `backlog/` · `governance/` | same · Δ8 | LOCAL ✓ |
| V1 | `ping` flags are not portable (Venus memo 2026-10-20) | `skill_mesh_probe_discipline.md` rule 1: `timeout 20 ping -c5 <peer>` + a macOS/Linux flag note. Provenance gains a dev-only line crediting Venus, de-narrated at the fold | same · Δ29 (most of it is the existing de-narration) | LOCAL ✓ |

**[D] finding (Q2): re-running the transform as it stands would regress the live page.** `site/scripts/transform-content.mjs:236` writes
`version: '2.2'` from a hard-coded `referenceMapping` constant, but the committed `specification.mdx:6` reads
`"2.5"`. That page was evidently updated by another path at v2.5, so running the idea's recipe as written would
set the specification page to **2.2** and drop its provenance comment (`:9`). Step (g) control 1 now says so. The
constant itself is site code, and fixing it belongs to row Q1.

### §2a′ · Authored at sitting 2 (the ruled rows)

| # | Row (ruling) | Dev source | Image destination · `img Δ` | State |
|---|---|---|---|---|
| Q1f | `executor_lane` + `gate` (verbatim from `template_mission.md`) + `depends_on` (S2-R1) | `template_campaign_mission.md` frontmatter | same file (C13 diff) | LOCAL ✓ |
| T1 | Acceptance coherence: every method × test criterion pair, with a coverage record (S2-R2) | `template_campaign_mission.md` §Exit Gate → `### Acceptance coherence` | same | LOCAL ✓ |
| T2 | Instrument discipline: demonstrated to fail · reached its target (S2-R2) | `template_campaign.md` §Verification Strategy, after the Per-Mission table | same | LOCAL ✓ |
| T3 | Per-class `status` (S2-R2): `required` drops `status`; an `if type ∈ {directory_index, coordination} / else require status` block; description cites v2.6 §7.2 | `what/lattices/tools/frontmatter_schema.json` | same (dev = image before the edit) | LOCAL ✓, **red-proven** (below) |
| Q6g | Mission-file grep tolerates both values (S2-R6) | `what/docs/tool_setup_guide.md:59` | same (dev = image before the edit) | LOCAL ✓; positive control: the new grep finds 12 mission files in this vault |

**T3 red-prove** [D] (`jsonschema` 4.26, python3.13). With the rule in place: directory_index without `status` → valid; coordination without `status` → valid; session without `status` → **invalid**; session with `status` → valid; no `type` at all → invalid. With the `if/else` block removed, session without `status` → valid, so the check goes red when its rule is absent. **No tool in this vault loads the schema** (grep of `what/lattices/tools/*.py`, `scripts/`, `site/scripts/`, `.github/`: 0 hits), so the plan's compliance-checker red-prove was impossible and the prove ran against the schema directly. The schema's `$id` still names `/v2.3`. It was left alone: an `$id` is an identity, and changing it is not a currency fix.

**T5: condition FAILED** [D]. S2-R2 ruled T5 in on one condition: the successor repo must be public before its name goes in the image. `gh repo view aDNA-Network/adna-lab` → **PRIVATE**, and `LatticeProtocol/latlab`, which the image names today, is also PRIVATE. The image's own text already calls it private ("ask a Lattice admin for a collaborator invite"), so the condition may be stricter than the need. Not written; **returned to the operator** (§4 S2-Q7).

### §2b · Owed (later sittings)

| # | Row | Owner | State |
|---|---|---|---|
| C1 | ~~**P5**: root-triad exception discipline ADR (carry 1)~~ | — | **→ §2e v2.7 queue** (S2-R3). The advisory half already shipped at v8.12 (`skill_project_fork` Step 4.6) |
| C2 | ~~**P7**: `standing_grant` + unattended-envelope ADR(s) (carry 2). No backlog file exists, so file one first~~ | — | **→ §2e v2.7 queue** (S2-R3). [D] correction: a source draft exists in Automator's tree (`Automator.aDNA/how/backlog/idea_upstream_standing_grant_record.md`); "no backlog file" was true of this tree only. Now filed here: [[idea_upstream_standing_grant_and_unattended_envelope]] |
| Q1 | **Spec-mirror sync to v2.6**, site side (carry 6a) | **this release's deploy tail** (S2-R4), on its own GO | OWED, scoped to the specification only: derive `version` from the source title (not the `transform-content.mjs:236` constant); regenerate `specification.mdx` + split; gate-32; revert every other transform output unless reviewed; probe live `/reference/specification/`. The script fix is committed on **`main`**, which the site deploys from. The wider transform stays with GARNIER P2.2 |

### §2c · Triage: v8.13-lane ideas v8.14 would otherwise orphan (RULED, S2-R2)

Most of these were **accepted on 2026-10-03** (operator, accept-all on the rulings packet, row B2) for "the v8.13
lane", and the v8.13 ledger did not carry them. They are not new asks. They are rulings that never reached a
release, the *decided, undelivered* class again. *Sitting 2 re-measured every row. The sitting-1 column is kept
struck where it changed (SO-6).*

| # | Idea | Ruled? | Re-measured | Ruling (S2-R2) | Why |
|---|---|---|---|---|---|
| T1 | `idea_upstream_mission_ac_coherence_check` (high) | B2 ✓ | [D] open in both trees | **in → §2a′ ✓** | One section in `template_campaign_mission.md` |
| T2 | `idea_upstream_verification_instrument_discipline` (high) | B2 ✓ | [D] open; the image has no doctrine directory | **in → §2a′ ✓** | Two clauses in the campaign template's Verification Strategy |
| T3 | `idea_upstream_frontmatter_schema_per_class_status` (medium) | not B2 | [D] open: `frontmatter_schema.json:7` required `status` in both trees | **in → §2a′ ✓** | A schema-vs-standard contradiction is a correctness bug |
| T4 | `idea_upstream_adna_overview_successor` (low) | question | open | **defer** | Replacing a shipped 49 KB document is its own ruling |
| T5 | `idea_upstream_l1_onboarding_skill_stale_paths` | B2 ✓ ("or decline on re-measurement") | [D] open: image `skill_l1_upgrade.md:96` clones `LatticeProtocol/latlab.git` (28 `latlab` mentions) | **in, conditional → condition FAILED → carried** (S2-R7) | Successor repo is private; carried until its visibility is decided |
| T6 | `idea_upstream_node_manifest_interview_emission` | B2 ✓ (same) | [D] half the defer-trigger has fired: Home ADR-006 **accepted**; Hestia's shape hand-off not confirmed | ~~in, if open~~ → **v8.15** | Ask Hestia for a one-line shape confirmation (own GO). Its consumers (Lighthouse) run nothing yet |
| T7 | `idea_upstream_template_decision_provenance` | B2 ✓ | [D] **MET at v8.12**: image `adr_003` accepted · `skill_project_fork` stamps `template_inherited` (×2) · re-vendor advisory at image `CHANGELOG.md:88` | ~~with C2~~ → **close (MET)** | The sitting-1 row was wrong: it was read off the idea's disposition, not the image |
| T8–T10 | ISS trio | B2 ✓ ("unless the Astro runtime fix lands first") | [D] fix not landed (`gate_receiver.py:56` `*`, last touched 2026-05-31) | **hold** | Shape ruled with Astro's runtime owner, by memo; red-prove before "done" |
| T11 | `idea_upstream_version_key_normalisation` (Hestia) | not ruled | n/a | **→ §2e v2.7 queue** | It changes fork-stamping keys |
| T12 | `idea_upstream_windows_base_graph` (Hestia) | not ruled | n/a | **outside this ledger** | A new graph, not a release row |
| T13 | `idea_upstream_skill_mesh_probe_discipline` | shipped v8.13 | `status: proposed` was stale | **close (MET)** | Bookkeeping |

### §2d · Inbound, not image-bound (noted so it does not vanish)

Stanley (`Harness.aDNA`) wrote 2026-10-20 (no ack) that three dev-graph pointers now describe `HarnessOld.aDNA`:
- `what/patterns/pattern_iss_operator_gate.md:57`: the cited `Harness.aDNA/iss/CLAUDE.md` is missing there;
- `what/specs/spec_terminal_harness_contract.md:95`: §5 describes the predecessor;
- ADR-009 §3: record or decline the PascalCase `Harness.aDNA` naming exception.

[D] The first two lines re-read as described. None of the three is in the image. The first two are dev-graph
currency fixes for a later sitting. The third was **ruled at S2-R5: decline the per-vault row, fix the class**
(erratum E-3, §2e). A short reply naming E-3 is optional and needs its own GO.

### §2e · v2.7 standard-window queue (S2-R3 · R5 · R6)

These change the standard's text or its fork-stamping contract. A governance-only release cannot carry them, which
is why P5 and P7 were carried v8.12 → v8.13 → v8.14. Each needs its own §7.7 at a standard window, drafted
`proposed` by a **fable** sitting (judgment), the way ADR-063's errata rode the v2.6 window.

| # | Item | Evidence [D] | Backlog |
|---|---|---|---|
| W1 | **P5** root-triad exception ADR | advisory shipped v8.12; the ADR hardens it into a check | [[idea_upstream_root_triad_exception_discipline]] |
| W2 | **P7** `standing_grant` record type + unattended-execution doctrine (Automator 09-21 #3 + #6) | ruling-record template shipped v8.12; the rest is standard text | [[idea_upstream_standing_grant_and_unattended_envelope]] |
| W3 | **E-3** directory-name rule | §3.5 says "SHOULD use `ProjectName.aDNA/`" and then "MUST match `[a-z][a-z0-9_]{0,63}`". **124 of 133** vault directories here are PascalCase, including `Home.aDNA` (made by the image's own fork skill) and `aDNA.aDNA`. Proposed: `[A-Za-z][A-Za-z0-9_]{0,63}`; ADR-009 §1 and `skill_project_fork.md:66` amended in the same fold | [[idea_upstream_standard_naming_and_mission_type_errata]] |
| W4 | **E-4** mission `type` | Appendix B (`adna_standard.md:1519`) queries `type: mission`; `context_adna_core_entity_definitions.md:142` + both mission templates write `type: plan`. Fleet: 3,025 `plan` · 2,349 `mission`. Proposed: Appendix B accepts both | same file |
| W5 | **T11** version-key normalisation | eight spellings for two facts | [[idea_upstream_version_key_normalisation]] |

## §3 · Version surfaces (six; v8.13 §5a finding 5 added the sixth)

| # | Surface | Now | At fire |
|---|---|---|---|
| 1 | `.adna/CLAUDE.md:3` `version:` | 8.13 | 8.14 |
| 2 | `.adna/README.md:10` governance badge | v8.13 | v8.14 |
| 3 | `.adna/README.md:10` standard badge | v2.6 | v2.6 (unchanged) |
| 4 | `.adna/what/docs/adna_standard.md` title | v2.6 | v2.6 (unchanged) |
| 5 | `.adna/CHANGELOG.md` newest entry (`## [v8.13] — 2026-10-20`, `:31`) | v8.13 | new `## [v8.14]` entry |
| 6 | `.adna/MANIFEST.md:127` standard row | v2.6 | v2.6, and the C3d text fix rides here |

The count lines (templates 33 · skills 34) **do not move**: no row adds a file. Re-derive them at the fire
anyway.

## §4 · Questions for the operator (RULED 2026-10-21, sitting 2)

The operator asked for a careful review of the sitting-1 recommendations before ruling. The review re-measured every
premise and revised Q1, Q2, Q5 and Q6. Approving the reviewed plan ruled all six as revised (plan:
`~/.claude/plans/please-read-the-claude-md-wild-leaf.md`). The original questions are kept struck (SO-6).

1. ~~Documents' extra mission fields.~~ ✅ **S2-R1:** add `executor_lane` + `gate` (verbatim from `template_mission.md`) and **`depends_on`**. Do **not** add `unblocks`: it is used in 7 vaults, but it is the hand-kept inverse of `depends_on` (40 vaults), and a hand-kept inverse drifts (dimension 11). Do **not** add `human_minutes` (n = 1). The `executor_lane` vocabulary drift (`hosted` · `claude_code_mac` · … against `oauth | key | local`, this vault's ARCADE among the drifters) and the two meanings of `gate:` are filed as findings, not fixed.
2. ~~§2c triage.~~ ✅ **S2-R2:** as re-measured in §2c (T1–T3 in; T5 in on a condition, which then failed; T6 → v8.15; T7 + T13 closed MET; T4 deferred; T8–T10 held; T11 → §2e; T12 outside).
3. ~~Fire timing vs the ADRs.~~ ✅ **S2-R3:** fire without P5/P7, and re-home them to the §2e v2.7 queue (no more "next template release").
4. ~~Spec mirror with the fire?~~ ✅ **S2-R4:** ride this release's deploy tail, scoped to the specification only, on its own GO (§2b Q1).
5. ~~ADR-009 §3.~~ ✅ **S2-R5:** decline the per-vault row; erratum E-3 at the v2.7 window (§2e W3).
6. ~~`type: plan`.~~ ✅ **S2-R6:** templates stay `type: plan`; the non-normative guide grep is fixed (§2a′ Q6g); erratum E-4 at the v2.7 window (§2e W4).

**Open (new at sitting 2):**

7. ~~**S2-Q7 · T5.**~~ ✅ **S2-R7 (2026-10-21): carry T5** until `adna-lab`'s visibility is decided; the skill is unchanged in v8.14 (the old name still works, since GitHub redirects renamed repos). *Was:* The ruled condition failed: the successor L1 repo `aDNA-Network/adna-lab` is private, and so is the `LatticeProtocol/latlab` the image names today. Options: (a) write the private successor name with the image's existing invite wording; (b) keep the old name, since GitHub redirects; (c) carry T5 until the repo's visibility is decided.

## §5 · Fire-time checklist (sitting 3)

- [ ] (a) Preconditions: operator opens the gate for v8.14 · each row traces to a ruling (§4 S2-R1–R6) · tree clean · S2-Q7 ruled (S2-R7: carry T5).
- [ ] Re-derive §0 and re-measure every §2a and §2a′ row in both trees (b.2). Classify `img Δ` line by line: fold the named lines, keep the de-narration.
- [ ] (b.1) Leak sweep on the assembled tree: wikilinks · private paths · dev-vault names · mission IDs · SHAs. **V1's Venus line stays dev-only.** No private repo name lands (S2-R7: T5 carried).
- [ ] (c) Fresh clone; rsync `.adna/`; embed-note swap on `.adna/README.md`; the C3d edit on the image MANIFEST.
- [ ] (d) Bump surfaces 1, 2, 5; path-scoped add; annotated tag `v8.14`; **push = release, operator confirms**.
- [ ] (e) Local `.adna` sync + `npm run sync:install`.
- [ ] (f) Smoke S1–S9 as at v8.13.
- [ ] Deploy tail on its own GO: trust page + changelog, **plus the spec-only mirror (S2-R4)**; probe `/reference/specification/`.
- [ ] Ratification block (§7.7) written in the firing commit.

## Ratification

| Field | Value |
|---|---|
| decision | §4 S2-R1–R6 as written above (the payload); the fire itself is a later, separate GO |
| ratified-by | Stanley (operator): approved the reviewed recommendations plan, 2026-10-21 |
| date | 2026-10-21 |
| status | §4 accepted · ledger `proposed` until fired |

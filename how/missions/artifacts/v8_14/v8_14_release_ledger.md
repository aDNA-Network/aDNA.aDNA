---
type: artifact
artifact_id: v8_14_release_ledger
title: "v8.14 staging ledger: the ARCADE carries, the Documents genesis template gaps, the mesh-probe portability fix, and a triage of the v8.13-lane orphans"
created: 2026-10-21
updated: 2026-10-21
status: proposed          # NOT FIRED — authored at sitting 1; stops at §4 for operator rulings
last_edited_by: agent_rosetta
session: session_stanley_20261021_014259_v8_14_queue_open
mission: mission_template_release_v8_14
relates: [v8_13_release_ledger, release_staging_ledger_v8_12, skill_template_release, aar_campaign_arcade, idea_upstream_template_gaps_from_documents_genesis, idea_upstream_release_spec_mirror_regen]
tags: [artifact, template_release, ledger, v8_14, proposed]
---

# v8.14 staging ledger (PROPOSED, NOT FIRED)

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

### §2b · Owed (later sittings)

| # | Row | Owner | State |
|---|---|---|---|
| C1 | **P5**: root-triad exception discipline ADR (carry 1 · [[idea_upstream_root_triad_exception_discipline]]) | mission O2 | OWED, then `proposed` → §7.7 |
| C2 | **P7**: `standing_grant` + unattended-envelope ADR(s) (carry 2). **No backlog file exists**, so file one first | mission O2 | OWED, then `proposed` → §7.7 |
| Q1 | **Spec-mirror sync to v2.6**, the site side (carry 6a): fix the `version` constant (derive it from the source title), run step (g) on `main`, gate-32, deploy | GARNIER P2.2 lane, or the fire's tail if Q4 says so | OWED; the deploy is its own GO (R63) |

### §2c · Triage: v8.13-lane ideas v8.14 would otherwise orphan (operator rules at §4 Q2)

Most of these were **accepted on 2026-10-03** (operator, accept-all on the rulings packet, row B2) for "the v8.13
lane", and the v8.13 ledger did not carry them. They are not new asks. They are rulings that never reached a
release, the *decided, undelivered* class again.

| # | Idea | Ruled? | Re-measured 2026-10-21 | Proposed | Why |
|---|---|---|---|---|---|
| T1 | `idea_upstream_mission_ac_coherence_check` (high) | B2 ✓ | [D] open: no AC-coherence step in either tree (the only `coheren` hit, `template_campaign.md:114`, is cross-file coherence) | **in** | One paragraph in `template_campaign_mission.md` beside Premise pass; it lands in the same file as C13 |
| T2 | `idea_upstream_verification_instrument_discipline` (high) | B2 ✓ | [D] open: `demonstrated-to-fail` / `go red on purpose` absent from templates, skills, patterns and the image | **in** | Two doctrine clauses (demonstrated-to-fail · …). Where they live in the image is a b.2 question |
| T3 | `idea_upstream_frontmatter_schema_per_class_status` (medium) | not B2 | [D] open: `frontmatter_schema.json:7` requires `status` in both trees, standard §7.2 makes it optional for two classes | **in** | A schema-vs-standard contradiction is a correctness bug, not a feature |
| T4 | `idea_upstream_adna_overview_successor` (low) | question | open | **defer** | A question for the gate, not a change; it needs the operator's view of what replaces the 49 KB overview |
| T5 | `idea_upstream_l1_onboarding_skill_stale_paths` | B2 ✓ ("or decline on re-measurement") | not re-measured this sitting | **in, if it re-measures open** | Ruled conditional; measure at S3 |
| T6 | `idea_upstream_node_manifest_interview_emission` | B2 ✓ (same) | not re-measured this sitting | **in, if it re-measures open** | Same |
| T7 | `idea_upstream_template_decision_provenance` | B2 ✓ (fold into v8.12 P7) | open | **with C2** | It rides the P7 disposition, so it moves when C2 moves |
| T8–T10 | ISS trio: receiver hardening · open-state/verdict provenance · fallback redirect | B2 ✓ ("unless the Astro runtime fix lands first") | the fix has **not** landed (§0) | **hold** | Rosetta + the Astro runtime owner rule the shape together, by memo. Red-prove before "done" |
| T11 | `idea_upstream_version_key_normalisation` (Hestia, `status: idea`) | not ruled | n/a | **defer → ADR** | Eight spellings for two facts. A fork-stamping change is the standard's call, an ADR rather than a template row |
| T12 | `idea_upstream_windows_base_graph` (Hestia) | not ruled | n/a | **not template content** | A new graph, not a release row. Accept/defer/decline is the operator's, outside this ledger |
| T13 | `idea_upstream_skill_mesh_probe_discipline` | shipped v8.13 | `status: proposed` is stale | **close the idea** | Bookkeeping only: set `status: completed` with the v8.13 pointer |

### §2d · Inbound, not image-bound (noted so it does not vanish)

Stanley (`Harness.aDNA`) wrote 2026-10-20 (no ack) that three dev-graph pointers now describe `HarnessOld.aDNA`:
- `what/patterns/pattern_iss_operator_gate.md:57`: the cited `Harness.aDNA/iss/CLAUDE.md` is missing there;
- `what/specs/spec_terminal_harness_contract.md:95`: §5 describes the predecessor;
- ADR-009 §3: record or decline the PascalCase `Harness.aDNA` naming exception.

[D] The first two lines re-read as described. None of the three is in the image. The first two are dev-graph
currency fixes for a later sitting. The third is an ADR amendment and the operator's §7.7 (§4 Q5).

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

## §4 · Questions for the operator

1. **Documents' extra mission fields.** Should `executor_lane` · `gate` · `unblocks` · `human_minutes` become
   base fields of `template_campaign_mission.md`? *Recommendation:* add `executor_lane` and `gate`, which the
   standalone `template_mission.md` already carries (v8.12), so the two mission templates match. Keep `unblocks`
   and `human_minutes` Documents-local until a second vault adds them.
2. **§2c triage.** Accept the proposed column as written? (In: T1 T2 T3 T5* T6* · with C2: T7 · hold: T8–T10 ·
   defer: T4 T11 · outside: T12 · close: T13.)
3. **Fire timing vs the ADRs.** Should v8.14 wait for P5/P7 to be drafted and ruled (mission O2), or fire
   without them and carry them again by name? *Recommendation:* fire without them. Every other row is small and
   ready, and P5/P7 have already been carried twice. Holding a ready release on them repeats the pattern.
4. **Spec mirror with the fire?** The standard does not move at v8.14, so step (g) does not trigger. Q1 (the v2.6
   sync the site still owes) is a site deploy. Should it ride this release's deploy tail, or stay in GARNIER P2.2?
   *Recommendation:* ride the tail, on its own GO. It is the only carry with a live public symptom.
5. **ADR-009 §3** (Harness memo): record the PascalCase `Harness.aDNA` exception, or decline it? This is a
   §7.7 ruling; the change would be drafted `proposed`.
6. ***`type: plan`* on mission templates.** Not touched. Both mission templates and every live mission use it, so
   renaming it to `mission` is a vocabulary change across the fleet, not a fix. *Recommendation:* decline for
   v8.14; if wanted, it is an ADR.

## §5 · Fire-time checklist (sitting 3)

- [ ] (a) Preconditions: operator opens the gate for v8.14 · each row traces to a ruling or accepted ADR · tree clean.
- [ ] Re-derive §0 and re-measure every §2a row in both trees (b.2). Classify `img Δ` line by line: fold the named lines, keep the de-narration.
- [ ] (b.1) Leak sweep on the assembled tree: wikilinks · private paths · dev-vault names · mission IDs · SHAs. **V1's Venus line and the C13 provenance stay dev-only.**
- [ ] (c) Fresh clone; rsync `.adna/`; embed-note swap on `.adna/README.md`; the C3d edit on the image MANIFEST.
- [ ] (d) Bump surfaces 1, 2, 5; path-scoped add; annotated tag `v8.14`; **push = release, operator confirms**.
- [ ] (e) Local `.adna` sync + `npm run sync:install`.
- [ ] (f) Smoke S1–S9 as at v8.13.
- [ ] (g) Spec mirror only if Q4 says so, or if the standard moved; deploy on its own GO; probe `/reference/specification/`.
- [ ] Ratification block (§7.7) written in the firing commit.

## Ratification

| Field | Value |
|---|---|
| decision | v8.14 payload as ruled at §4 |
| ratified-by | — |
| date | — |
| status | proposed |

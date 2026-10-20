---
type: artifact
artifact_id: v8_13_release_ledger
title: "v8.13 staging ledger: standard v2.6, the G4 image items, the Vauban template rows, and the rows still owed before the fire"
campaign: campaign_arcade
created: 2026-10-20
updated: 2026-10-20
status: proposed          # NOT FIRED. The fire is publication: it waits on Q9 (R25/R41/R44) and on its own fire GO (card gate G4 "fire GO")
last_edited_by: agent_rosetta
session: session_stanley_20261020_010905_arcade_a4_2_ledger_and_local_fixes   # authored; re-measured at session_stanley_20261020_020602_arcade_a4_2_owed_rows (sitting 2: §2b authored, §4 Q2–Q5 ruled R47–R49, v2.6 errata R51–R52)
mission: mission_arcade_a4_2_image_v8_13
supersedes_none: true
relates: [release_staging_ledger_v8_12, skill_template_release, v2_6_cut_queue, arcade_v2_6_gate, mission_arcade_a4_2_image_v8_13]
tags: [artifact, template_release, ledger, v8_13, v2_6, arcade, proposed]
---

# v8.13 staging ledger (NOT FIRED)

> ⚠ **Ledger rows are hypotheses.** They were measured against disk on **2026-10-20** and must be measured **again**
> before firing. v8.6 · v8.8 · v8.10 · v8.11 · v8.12 each caught a row wrong at fire time. **A fold is not a copy:**
> step (b.2) diffs each payload path in **both** trees and moves named lines only. `.adna/` is never hand-edited
> (Rule 1). **Pattern carried from v8.12 §2: payload rows are enumerated, never a tree diff.** The line counts in §2
> are whole-file `diff` counts against the v8.12 image. They include older dev-vs-image drift, which (b.2) must
> classify line by line.

## §0 · Derived at authoring, never carried

| Fact | Value | How |
|---|---|---|
| Image governance version | **8.12** | `~/aDNA/.adna/CLAUDE.md:3` `version: "8.12"` (local sync `bf5bdd8` = release `1a25446`) |
| Image standard | **v2.5**, md5 `094a3266` | `.adna/README.md:10` badge · `md5 .adna/what/docs/adna_standard.md` |
| Dev-graph standard | **v2.6**, md5 `86385da8` (sitting 2; was `3e883ab4` until the §19.9 errata, R51–R52). **Local, unreleased** (folded at G4, R43) | `md5 what/docs/adna_standard.md` |
| ADR queue | 62 = **61 accepted · 1 amended · 0 proposed** (+1 `inactive`, uncounted) | `grep -h '^status:' what/decisions/adr_0*.md \| sort \| uniq -c` |
| Templates | dev **47** · image **32** | `ls how/templates/template_*.md \| wc -l`, both trees |
| Skills | dev **58** (+`skill_mesh_probe_discipline`, sitting 2) · image **33** | `ls how/skills/skill_*.md \| wc -l`, both trees |
| `main` CI | last run 2026-10-19 `39285780433` success (`external-links`, scheduled) | `gh run list --branch main --limit 1` |
| Branch hold | `vitrine/design` **ahead 10** at authoring, **19** at the sitting-2 re-measure, **not pushed** (R25/R29/R40/R41/R44) | `git status -sb` |
| Q9 | **ANSWERED "yes" mid-sitting 2**: Jake, verbatim *"Yes, push now, anchoring excluded (Recommended)"* (relayed by Aspasia, 02:16Z). Condition verified at aDNA.aDNA ADR-066; the branch was pushed at sitting 2's close (R53). *(Was:)* **silent** (re-swept at sitting 2: AILedger s175 10-19 — "Jake's to answer, to Rosetta"; s177 no Q9 line). AILedger receipted the G3 memo at `28eee5ac` ("Q9 is Jake's line"); the operator confirmed no off-channel answer (R44) | AILedger `who/coordination/{inbox,inbox_stanley_desk,fluxer_outbox}` swept 2026-10-20 |
| Hook contract version | **4.3.0** in the image (`.adna/how/standard/hooks/pre-push-sanitize.sh:8`); re-derive at the gate | `grep -n LAYER_CONTRACT_VERSION` on the hook itself (the authoring grep missed the path) |

## §1 · What this release is

**The ARCADE release.** It carries **standard v2.5 → v2.6** (four ADRs accepted at G1–G4, folded locally at G4),
the lattice-tree and validator fixes accepted at G4 row C1, the 11th compliance dimension (B3), the stamp-currency
check (aDNA.aDNA ADR-067 clause 4), the Vauban template rows ruled at A1.3 (R7–R9), and the rows v8.12 deferred
(P5 and P7 ADRs). Governance version **8.12 → 8.13**. **No company name in any image-bound byte (R2).** AEP-0003 and
aDNA.aDNA ADR-066's AEP are **owed at publication** and filed in the deploy tail, not before.

## §2 · Payload rows

**State key:** `LOCAL ✓` = authored and committed in the dev graph, verified · `OWED` = the card names it, but it is
not authored yet · `GATE` = it needs a decision before it can be authored.

### §2a · Authored locally (this campaign)

| # | Row | Dev source (committed) | Image destination · diff vs v8.12 | State · tense |
|---|---|---|---|---|
| **f-a** | **Standard v2.6.** §4.1 · §5.3 · §5.5 (+Profiles, `token_estimate`) · §6.4 · §7.2 `data_tier` · §11.3 · §15.1 · new §15.5 · §19 Scan · §19.6–§19.9 · **+ v2.6 errata** (§19.9 items 2 + 5 + roster, R51–R52, `04ea898`) | `what/docs/adna_standard.md` (`b62f91b` + `04ea898`) | `.adna/what/docs/adna_standard.md` · 115 L | LOCAL ✓ · PASS here, TAUGHT-AS-DESIGN for forks |
| **f-b** | **Derivability, d11** + G-015 + `registry` type; thresholds +3; `MAX_TOTAL` derived | `what/lattices/tools/compliance_checker.py` · `what/lattices/tools/{AGENTS.md,__init__.py}` · `how/templates/template_home_claude.md` (A4.2) | same paths · 117 L / 17 L / 2 L / 2 L | LOCAL ✓ · verified 111/111 legacy objects unchanged in tier |
| f-b′ | **Image-only text** stating "10 dimensions (0–5, 50 max)" | none in the dev graph | `.adna/CLAUDE.md:320` · `.adna/what/docs/adna_reference.md:114` | **image-only delta**, recorded by path + reason at (b.2): 11 dimensions, 0–3, 33 max |
| **f-c1** | Lattice examples: `deep_research` L91/L95 CEL membership · `claude_code` F-AC-22 · `binder_generation` canonical form + composes · `full_therapeutics` port/target_pdb/direction · `composed_therapeutics:50` | `what/lattices/examples/*.lattice.yaml` (A4.2) | same · 4 / 2 / 14 / 6 / 2 L | LOCAL ✓ · 19/19 pass canonical + LinkML face; LinkML judge positive control |
| **f-c2** | `lattice_interop.md` v1.1.0: §2.2/§5.1 canonical ports, §2.3 aliases, §2.5 `port` informative | `what/docs/lattice_interop.md` | same · 27 L | LOCAL ✓ |
| **f-c3** | `condition` described as CEL (LinkML.aDNA ADR-018); no check | `what/lattices/lattice_yaml_schema.json` (md5 `0550fa82` → `3388e019` → **`e2e18e03`**, the R48 divergence note `57d31a9`) | same | LOCAL ✓ · ⚠ LinkML.aDNA's register pins the old md5. Noether re-pins, by memo, after the fire, **to `e2e18e03`** |
| **f-c4** | `lattice_validate.py` reads its enums from the vendored face + `faces/upstream.json` pin | `what/lattices/tools/{lattice_validate.py,faces/}` | same · 37 L + **2 NEW** | LOCAL ✓ · node types 4 → 5 (`+agent`): **ruled R48**, divergence recorded in the canonical schema |
| **f-c5** | `ontology.md`: Base Invariance cites aDNA.aDNA ADR-044 · `completed` canonical / `complete` alias | `what/ontology.md` | same · 19 L | LOCAL ✓ · `entity_count` **27** ships (R48; the signed 28 superseded by derivation) |
| **f-c6** | Date-loader note (F-AC-6) | `what/lattices/tools/{AGENTS.md,adna_validate.py}` docstring | same | LOCAL ✓ |
| **f-d** | Stamp-currency check (aDNA.aDNA ADR-067 cl. 4): warning on mismatch, unverifiable never fails | `what/lattices/tools/adna_validate.py` | same · 111 L (includes older drift) | LOCAL ✓ · controls: 2 current · 3 stale · 1 unverifiable, exit 0; LP real stamps 2 current |
| **V1** | Vauban R7–R9 template rows: `template_aar` §Carries · `template_campaign` ×4 · `template_campaign_mission` + `template_mission` §Premise pass + §Descoped · `template_session` `issued_by:`/`continues:`/open-seal · `template_aar_lightweight` §Boundary | `how/templates/…` (A1.3, `proposed` in place) | same · 11 / 9 / 9 / 9 / 10 / 21 L | LOCAL ✓ (`proposed`). (b.2) isolates the Vauban lines from older drift |
| **V2** | `pattern_ledger_backed_acceptance_tables` (draft) · `pattern_channel_proof` (accepted 2026-10-03) | `what/patterns/` | **NEW** ×1 in the image: `pattern_channel_proof` only (**R49**); the ledger-backed pattern (draft) stays dev-only | LOCAL ✓ |
| **V3** | `pattern_iss_operator_gate` §4 cl. 5 + `skill_create_iss` affordance rule | `what/patterns/` · `how/skills/` | **NEW** ×2 (the image has neither file) | LOCAL ✓ in the dev graph. **Not image payload** (R49: the ISS family is held) |
| **T1** | `template_profile_spec.md` (aDNA.aDNA ADR-066, templates 46 → 47) + `what/docs/profiles/AGENTS.md` (the list, empty) | `how/templates/` · `what/docs/profiles/` | **NEW** ×2 | LOCAL ✓ · TAUGHT-AS-DESIGN · R2 scrub at (b.1) |
| **M1** | `MANIFEST.md:174` "aDNA Standard v2.5 \| Inherited" | this vault's MANIFEST | (dev-graph row describing the image) | moves **with** the fire, not before (f-a note) |

### §2b · Owed at authoring → authored at sitting 2 (R47)

| # | Row | Dev source (committed, sitting 2) | Image destination | State · tense |
|---|---|---|---|---|
| **f1** | Canvas partition repair: `hello_world.canvas` **derived** (source resolves) → `adna_version 2.5.0` · `adna_native` · `authority view` · `production generated` · `sync{sync_hash 28cf14bbd135f628, source_name}`; the three `template_*.canvas` **primary** → authority/production/source_name omitted, `sync{sync_hash}` only | `what/lattices/examples/*.canvas` (`c03b8a8`) | same ×4 | LOCAL ✓ · canvas_std `adna_native` 0 errors · 0 advisories · D-1/2/3 ×4; two hashes equal Mondrian's 09-16 verification |
| **f2** | RFC1918 redaction: `:230` → `<overlay-ip>` + RFC 5737 example; **also `:233` and `:389`** (the subnet as `10.42.0.x`, missed by the 10-16 count) → `<overlay-subnet>` | `how/skills/skill_l1_upgrade.md` (`7553f59`) | same (image `:233` · `:236` · `:392`, measured) | LOCAL ✓ · `grep 10\.` = 0 |
| **MP** | `skill_mesh_probe_discipline` (process, `proposed` → active at the fire): 8 rules, `{{MESH_NAME}}` · `{{MESH_CIDR}}` · `{{HEALTH_SURFACE}}`, RFC 5737 only, precedents by finding ID | `how/skills/skill_mesh_probe_discipline.md` (`21af31c`); skills 57 → 58 | **NEW** — image skills 33 → 34; the image's own count surfaces move at (b.2) | LOCAL ✓ · validator Zero drift |
| **R1** | Rand's `spec_forge_ecosystem` §Active Forges row (Design.aDNA), verbatim | `what/specs/spec_forge_ecosystem.md` (`9805032`) | **none** (dev-graph spec, not image-bound) | LOCAL ✓ · rides the push, not the fire |
| **P5** | Root-triad exception discipline ADR | — | — | **carried → v8.14** (R47) |
| **P7** | `standing_grant` + unattended-envelope ADRs | — | — | **carried → v8.14** (R47) |

**Release-note lines owed to `.adna/CHANGELOG.md [8.13]` (§3 row 5):** (f1) *the four example canvases now carry
the Canvas Standard v2.5.0 partition: `hello_world` is a generated view of its lattice, and the three templates are
primary and claim no source. Forks made before v8.13 keep the old `authority: "view"` stamp until their next upgrade.*
(f2) *`skill_l1_upgrade.md` no longer carries a real overlay address; it uses placeholders resolved in your node vault,
with RFC 5737 examples. The ~80 forks made before v8.13 carry the literal until their next upgrade.*
(MP) *new process skill `skill_mesh_probe_discipline`, the probe half of `pattern_channel_proof`.*

## §3 · Version surfaces (five; all move together in the firing commit, never before)

| # | Surface | Now (image) | At the fire |
|---|---|---|---|
| 1 | `.adna/CLAUDE.md` `version:` | 8.12 | 8.13 |
| 2 | `.adna/README.md` governance badge + release link | v8.12 | v8.13 |
| 3 | `.adna/README.md` standard badge | v2.5 | **v2.6** |
| 4 | `.adna/what/docs/adna_standard.md` frontmatter · header changelog · footer (§15.4 four-surface rule, aDNA.aDNA ADR-046) | v2.5 | v2.6 (dev copy already folded) |
| 5 | `.adna/CHANGELOG.md` `[8.13]` entry, with release-note lines for f1 · f2 · the standard minor · the 66-vault `claude_code` fix | n/a | written at the fire |

Plus this vault's `MANIFEST.md:174` (M1), which describes the image and moves in the same sitting.

## §4 · ⛩ Questions for the operator at the fire gate

> **Sitting 2 (2026-10-20):** Q2–Q5 **ruled** at plan time (R47–R49, all as recommended; Q5's recommendation was
> authored at the sitting). **Q1 answered mid-sitting (R53).**

1. ✅ **Q9 answered "yes, anchoring excluded" (R53); the branch was pushed.** The fire is now gated only by **its own operator GO**, which is still publication (AEPs, deploy). *(Was:)* **Q9 / publication.** ⛩ **OPEN.** The fire, the AEPs and the push are all publication (R2, R41). Fire only once Jake answers
   Q9 "yes", or once the operator rules otherwise.
2. ✅ **R47: f1 · f2 · MP · R1 authored; P5 · P7 → v8.14.** *(Was:)* **Owed rows (§2b).** Author f1 · f2 · MP · R1 in a sitting before the fire, and put P5 + P7 to a small ADR gate?
   **Or** ship v8.13 without them and carry them to v8.14? *Recommendation: author f1 · f2 · MP · R1 (all small,
   all already ruled), and carry P5 · P7 to v8.14 unless the operator wants a sixth gate now.*
3. ✅ **R48: recorded in the schema's node-type description (`57d31a9`); adopt with the master later.** *(Was:)* **`+agent`.** `lattice_validate.py` now accepts `type: agent` (the face's ruled divergence; LP's runtime has
   five kinds). The canonical `lattice_yaml_schema.json` still lists four. So the validator is one value wider than
   the schema it describes. Either add `agent` to the canonical enum at v8.13 (aDNA.aDNA ADR-067 says adopting the
   master is a separate decision), or record the divergence in the schema's description. *Recommendation:
   record it now; adopt with the master later.*
4. ✅ **R48: 27 ships; the signed 28 superseded by derivation.** *(Was:)* **`entity_count`.** G4 row C1 signed "`entity_count` 26 → 28" for the image's `ontology.md`. The dev copy carries
   **27**, by the I-01 rule (2026-10-04): 16 base + 11 Rosetta, with the two Network.aDNA example rows uncounted.
   28 is the image table's raw row count. A fold of the dev copy ships 27. *Recommendation: 27 (derived), with
   the signed 28 recorded as superseded by derivation.*
5. ✅ **R49: `pattern_channel_proof` only; the draft ledger-backed pattern + the ISS family held.** *(Was:)* **Image scope.** Should `what/patterns/` (V2) and the ISS family (V3: `pattern_iss_operator_gate`, `skill_create_iss`
   + siblings) ship in the image? The v8.12 image has neither directory's files [D].

## §5 · Fire-time checklist (carried from v8.12 §4) + smoke rows

Re-derive §0 · enumerate payload = exactly the ruled §2 rows · (b.2) diff each path both trees, record image-only
deltas by path + reason (f-b′ is one) · (b.1) added-lines scan: 0 private paths, 0 bare SHAs, **0 company names
(R2)**. Dev-vault names that (b.1) must disposition were found at authoring: `aDNA.aDNA ADR-067` / `LinkML.aDNA ADR-005` in the
`lattice_validate.py` comment and in `tools/AGENTS.md`, and `source_vault: LinkML.aDNA` in `faces/upstream.json`. That last one is the
pin's datum: a fork reads it as **unverifiable**, by design, so keep it and record it as a deliberate image-only delta. · `gitleaks` · hook `--self-test` · `adna_validate --governance` zero drift **both trees** · write the
ratification block **in the firing commit**.

**Smoke rows (fresh clone of the release):**

| # | Check | Pass when |
|---|---|---|
| S1 | Version surfaces ×5 (§3) | all read 8.13 / v2.6 |
| S2 | `python3.13 what/lattices/tools/lattice_validate.py` over `what/lattices/examples/*.lattice.yaml` | 19/19 valid |
| S3 | jsonschema over the examples against `lattice_yaml_schema.json` | 19/19 (F-AC-22 cleared) |
| S4 | `python3.13 what/lattices/tools/compliance_checker.py .` | runs; 11 dimensions; `/33` in the report |
| S5 | `python3.13 what/lattices/tools/adna_validate.py . --governance -v` | Zero drift; one `Stamp currency` info line; the face pin reads **unverifiable** in a fork (LinkML.aDNA absent), never failed |
| S6 | `faces/lattice.schema.json` md5 | `45a816a2` (= LinkML.aDNA descriptor `artifact_md5`) |
| S7 | Fork smoke (`skill_project_fork`) | a fork validates; templates count = the image's own count |
| S8 | canvas_std `validate(adna_native)` over the 4 example canvases (where Canvas.aDNA is present) | 0 errors · 0 advisories (f1) |
| S9 | `grep -rnE '\b10\.[0-9]+\.' how/skills/` in the fresh clone | 0 (f2 + MP) |

## §6 · Publication-bound tail (only after the fire GO)

- **Deploy tail:** `build_tour_files` re-vendors at `source_ref: v8.13`; gate-49 red-first discipline if home changes.
- **AEPs:** AEP-0003 (aDNA.aDNA ADR-067, Noether's draft, renumbered at filing) and one for aDNA.aDNA ADR-066 (names
  the profile, not its steward) go in `site/src/content/proposals/`. No company name (R2).
- **Memos after the fire (each its own GO):** Noether gets the `lattice_yaml_schema.json` md5 move (f-c3, now
  `e2e18e03`), the vendored face pin (f-c4), and the outcome of the 10-20 post-fold read (R51–R52 adopted, `04ea898`;
  nothing was owed back, so this is information). Network.aDNA (Venus) re-points to the template skill once MP lands.

## Ratification (§7.7)

*Written in the firing commit, never before.*

| Field | Value |
|---|---|
| **Decision** | |
| **Ratified-by** | |
| **Date** | |
| **Status** | |

---
type: artifact
artifact_id: champollion_conformance_bilateral
title: "M5.2 — Bilateral conformance: LatticeProtocol.aDNA vault ↔ aDNA standard v2.5 · this vault's lattice/module/dataset teaching ↔ LP spec @ codepin 47935b6"
campaign_id: campaign_champollion
mission_id: mission_champollion_m5_2_mutual_conformance
campaign_phase: 5
campaign_mission_number: 2
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
codepin: "47935b6 (LP spec corpus); LP HEAD at run = 8cb6e1e"
tags: [artifact, champollion, p5, m5_2, conformance, bilateral, codepin, lp_seam, verification, semantic_census]
---

# M5.2 — Bilateral conformance (both directions)

**Mission**: [[../missions/mission_champollion_m5_2_mutual_conformance|M5.2]] · **Ring 1** · **Mode B** (opus build, fable bookends) · **verification class**.

Two directions the standard↔protocol seam owes:
- **(a)** the LatticeProtocol.aDNA **vault** audited against **our aDNA standard v2.5** (their close-out ask).
- **(b)** this vault's **lattice / module / dataset teaching** audited against the **LP spec at codepin `47935b6`**.

Read-only in `LatticeProtocol.aDNA` — absolute. Our-side defects fixed in place; LP-side findings staged as an offering memo (never written into their tree); standard-vs-tooling / standard-vs-spec findings → G5-input + ledger rows.

---

## 1 · Method, codepin, drift, sample sizes

### Codepin + spec-drift check
- **Charter codepin**: `47935b6` — the LP spec-corpus commit this vault teaches against.
- **LP code-repo HEAD at run**: `8cb6e1e` (verified `git -C .../what/latticeprotocol rev-parse HEAD`).
- **Drift `47935b6..HEAD` = 3 commits**: `01e45de` (federation test de-flake) · `ef57154` (cli status-health fix) · `8cb6e1e` (runbook L1 docs).
- **Spec-corpus drift** (the load-bearing check): `git -C .../what/latticeprotocol log --oneline 47935b6..HEAD -- .agentic/specs/` → **EMPTY**. The `.agentic/specs/` tree is byte-identical between `47935b6` and `8cb6e1e`. ⇒ **spec@47935b6 == spec@8cb6e1e.** Teaching checked at `47935b6` is equally valid at `8cb6e1e`. See §4 for the pin-follow recommendation.

### Spec corpus read (at pin)
`.agentic/specs/lattice-{core,objects,backends,cli,deploy,federation,ledger,sdk}.md` + `AGENTS.md` + `_TEMPLATE.md`. Read in full for the teaching-relevant four (**lattice-objects**, **lattice-core**, **lattice-federation**, **lattice-ledger** [FR-list + memorialize semantics]); the others skimmed for pointed claims. All statuses read `**Status:** Draft` in the spec headers — the LP object/federation/ledger specs are themselves draft-status generation specs mapped onto the `lattice-protocol` code model.

### Direction (a) sample sizes (NOT exhaustive — sampled + tool-assisted)
- **Governance files**: all 6 read in full (CLAUDE / MANIFEST / STATE-header / AGENTS / README / CHANGELOG-header).
- **Structure walk**: full top-level triad enumeration (`who/` `what/` `how/` + root symlinks); nested-instance exclusion applied (see §2 finding A-6).
- **Frontmatter per-class**: (i) a **hand sample of 7** representative files across classes (2 ADRs, 1 coordination, 2 context, 1 design, 1 backlog) read to full frontmatter; (ii) a **tool-assisted full-vault pass** via `adna_validate.py` for the aggregate error census (vault-scoped, nested-repo excluded manually). Counts in §2 are from the tool pass; the hand sample calibrated the tool's verdicts and the per-class exemption behaviour.

### Direction (b) census set (enumerated + each normative claim checked)
`what/lattices/AGENTS.md` · `what/lattices/canvas_yaml_interop.md` · `what/lattices/lattice_yaml_schema.json` · `what/lattices/examples/` (19 files, schema-level; `examples/AGENTS.md` tables) · `what/lattices/tools/AGENTS.md` (+ tool help/docstrings; **zero logic touched**) · `what/context/object_standards/context_object_standards_overview.md` (+ its `AGENTS.md`) · `what/context/lattice_basics/context_lattice_basics_core_concepts.md` · vault `CLAUDE.md` sections *Object Standards / Lattice Types / Execution Modes / Type vocabulary (Decision 10) / Registry Awareness / FAIR Metadata* · `what/concepts/concept_lattice_composition.md`. Glossary: no `glossary_{lattice,module,dataset,fair,federation}` entry exists (the umbrella entry is `glossary_adna.md`; no lattice-object-semantics glossary claim to check). **Semantic-census discipline (F-CHM-212)**: each claim checked for what it *means* against the pinned spec; method varied from string-match (schema-field cross-map, layer-attribution analysis) where possible.

---

## 2 · Direction (a) — LP vault vs aDNA standard v2.5

**Headline**: the LP vault is a **genuine, actively-maintained Standard-tier instance** — full triad, all 5 MUST governance files, strong per-class frontmatter *discipline* (the ADR-044 `coordination`/`directory_index` status-exemption is correctly observed on the file I sampled). Findings are (1) two real structural gaps, (2) a real but **modest and familiar** frontmatter-currency debt, and (3) — most consequentially — a **standard-vs-tooling coherence gap of OURS** that makes the LP vault look far less conformant than it is. No finding blocks anything; all are offered.

| # | Path / scope | Standard expects (§) | LP has | Severity | Whose |
|---|---|---|---|---|---|
| **A-1** | `how/missions/`, `how/templates/` | §5.5 Level-1 #3 — both are Starter-required subdirectories | Both **absent** (LP uses `how/campaigns/`, `how/backlog/`, `how/sessions/`, `how/tasks/`, `how/federation/`) | **med** | **LP** (real; but see note) |
| **A-2** | `who/AGENTS.md`, `what/AGENTS.md`, `how/AGENTS.md` | §5.5 Level-2 #6 — every triad leg MUST have an `AGENTS.md` | **All 3 absent** (root `AGENTS.md` present; per-leg missing). Our reference vault has all 3 → requirement is real, not universal non-practice. | **med** | **LP** |
| **A-3** | `what/context/*.md` — 9 files (`arch_*.md`, `architecture_note.md`, `spec_graph.md`, `latticeprotocol_object.md`, `codepin.md`) | §7.2 per-class — `type: context` is a content entity; `status` required (only `directory_index`/`coordination` exempt) | `status` **missing**. Confirmed a real defect two ways: our vault = 0/27 context files missing status; `adna_validate.py` flags each as ERROR. | **low** | **LP** (mechanical backfill) |
| **A-4** | `who/coordination/*.md` — ~20 memos | §7.2 — base fields (memos are `coordination`: `status` exempt, but `created`/`updated`/`last_edited_by` are **not**) | Many missing `updated` and/or `last_edited_by` and/or `created`. **Same class as our F-CHM-001** (inbound memos routinely land sans full frontmatter). | **low** | **LP** (familiar class) |
| **A-5** | `how/sessions/history/2026-07/*.md` (~14) · `how/campaigns/campaign_carnot/artifacts/audit_*.md` (2) · `who/governance/{adr_index,persona_steward,ip_dossier/*}.md` (7) | §7.2 — `status` (+ occasional `updated`/`created`/`last_edited_by`) on session/artifact/governance content entities | `status` missing on session records + carnot audit artifacts; `status` missing on `adr_index`/`persona_steward`/ip_dossier files (**note**: `adr_index` may be intended `directory_index` — if re-typed, exempt; as `type` currently reads it is not). Same session-missing-status class our own Starter backfill cleared (`reference_adna_validate_governance`). | **low** | **LP** (+ one ambiguity on `adr_index` type) |
| **A-6** | `what/latticeprotocol/**` (nested code repo, own `.git`) **and** `what/whitepaper/**` (absorbed LPWhitepaper sub-vault, PT pt10) | §5.5 (ADR-044) — a conformance walk "does NOT recurse into embedded standalone instances" | `adna_validate.py` **walks both** → **~hundreds** of false-positive errors (vendored `openzeppelin-contracts/`, `.agentic/contexts/`, whitepaper `source/` docs). The tool's `NESTED_INSTANCE_DIRS` is **hardcoded to the reference vault's two paths** (`what/docs/examples`, `how/templates/template_node_adna_exemplar`); it has **no general nested-instance detection** (removing `.git` from `dirnames` only stops descent *into* a `.git` dir, not the tracked files of a nested repo). | **med** | **OURS — standard-vs-tooling gap** (see §5 G5-input GI-1) |
| **A-7** | `README.md` (root) | §4.6 cadence "when onboarding experience changes"; §4.1 README MUST | **Present but stale**: says *"Genesis-to-Launch executing … lanes A∥B open"*, *"code physically lives at `~/aDNA/lattice-protocol/`; this vault is its context graph (the move-into-`what/` is the parked terminal phase P8)."* The code **was relocated into `what/latticeprotocol/` at PT pt12 (2026-06-17)** and Carnot is active (CP1 complete). No frontmatter (matches our own README, which also has none → §7.1-vs-practice ambiguity noted, not charged). | **low** | **LP** (currency) |
| **A-8** | `AGENTS.md` (root) | §4.5 cadence "when directory structure changes" | **Stale**: *"P1 … ✅ + P2 … ✅ closed 2026-06-12; no lane is open; P3+ operator-gated"* — predates the entire Carnot campaign; points cold-start at `arch_*.md` as if genesis-frozen. | **low** | **LP** (currency) |
| **A-9** | `who/governance/adr_*` (8 ADRs) | §7.7 — decision-record ratification discipline; MUST-forward applies **only to post-2026-07-02-cut** records | **CLEAN.** All 8 ADRs are `created` 2026-06-04/06-12 (pre-cut). §7.7 rule 3: a pre-v2.5 accepted ADR without a ratification block is **not thereby non-conformant** (SHOULD-retro at most). `adr_000` etc. carry `status: accepted` with `ratified` tags. Zero post-cut decision records → **no MUST-forward obligation triggered.** | — | (no finding — recorded as a clean check) |

**"Whose defect" summary for (a)**: LP-side = A-1, A-2, A-3, A-4, A-5, A-7, A-8 (offered via the §5 memo). OURS = A-6 (the tooling gap — the single most impactful item; it inflates LP's apparent error count by an order of magnitude and would mislead any consumer running `adna_validate.py` on a code-as-WHAT vault). Ambiguity = the `adr_index` type in A-5.

---

## 3 · Direction (b) — our teaching vs LP spec @ 47935b6 (+ fixes applied)

**Headline**: the census surfaced **no contradiction between our lattice/module/dataset teaching and the pinned LP spec.** The apparent divergences are **layer differences, correctly attributed** (see the analysis note below), not defects. The only real our-side defects are **stale example-counts** — a currency/self-consistency class (F-CHM-207/213 lineage), fixed in place across all four surfaces the claim lives on.

### Layer-attribution analysis (why the apparent contradictions are not contradictions)
Our teaching describes the **aDNA `.lattice.yaml` authoring format**, whose normative source it **correctly cites as `adna_standard.md` §4.3/§5.1/§11** — *not* the LP marketplace-objects spec. The schema (`lattice_yaml_schema.json`) explicitly maps every field to the **LP code model** (`AgentMode` / `AgentNode` / `AgentEdge` in `objects/agents/*`, `ObjectMetadata` in `objects/metadata.py`). So the teaching layer = *the aDNA lattice-authoring surface that projects onto LP's `objects/agents/` code*. The LP `lattice-objects.md` spec is a **different layer** — marketplace *packaging* (Dataset/Module/**Topology**/Agent directories with `registry.yaml`, NFT/LAT billing, DLT provenance). "Topology" (LP packaging) vs "Lattice" (aDNA authoring) is a **vocabulary seam between two real layers**, not a claim in conflict (flagged as a *newcomer-confusion* note in §5, GI-2 — not a defect).

| # | Surface / claim | Checked against (spec @ pin) | Verdict | Severity | Disposition |
|---|---|---|---|---|---|
| **B-1** | `context_object_standards_overview.md:33` — "**13 examples** in `what/lattices/examples/`" | filesystem: **19** `*.lattice.yaml` | **stale count** (self-consistency, not spec) | **low** | **FIXED → "19 example `.lattice.yaml` files"** + frontmatter bump |
| **B-2** | `what/context/object_standards/AGENTS.md:19` — sources cell "**13 examples**" | same | stale count | **low** | **FIXED → 19** + frontmatter bump |
| **B-3** | `what/context/lattice_basics/context_lattice_basics_core_concepts.md:119` — "**13 examples** ship" | same | stale count (claim-class also lives here — F-CHM-213) | **low** | **FIXED → 19** + frontmatter bump |
| **B-4** | `site/src/content/docs/lattice-design.mdx:151` — "**15 examples**" | same (site mirror) | stale count (site half of the claim class — F-CHM-213) | **low** | **FIXED → 19**; `npx astro build` green (180pp) |
| **B-5** | `site/src/content/docs/lattice-design.mdx:55` — "**15 lattice examples** … covering pipeline, agent, context_graph, workflow, and infrastructure types" | same; schema enum includes `infrastructure` but **no example uses it** | stale count **+** minor over-claim ("infrastructure" not among the example set's covered types) | **low** | **FIXED → "19 … covering pipeline, agent, context_graph, and workflow types"** (dropped the uncovered `infrastructure` from the coverage claim); build green |
| **B-6** | `lattice_yaml_schema.json` — `fair` block (`license`+`keywords` required; `creators`/`identifier`/`provenance` optional) | LP `lattice-objects.md` FAIR (F4 keywords, R1 license) + `ObjectMetadata` fields; schema self-annotates the map | **CONSISTENT** — direct subset-map to `ObjectMetadata`; the minimum (`keywords`+`license`) matches LP's FAIR floor | — | no change |
| **B-7** | `execution.mode` enum `workflow`/`reasoning`/`hybrid` (schema + CLAUDE.md *Execution Modes* + concept file) | schema self-annotation "Aligned with AgentMode enum"; `lattice-core` FR model | **CONSISTENT** with the LP code model the spec describes | — | no change |
| **B-8** | `concept_lattice_composition.md` — two composition patterns (inline / external-`lattice://`) + seam edges + 6 federation-readiness checks; cites "§11 Federation Protocol" | aDNA-standard §11 (composition) — **not** LP `lattice-federation.md` (which is node discovery/DID/heartbeat/trust/routing — a different concern) | **CONSISTENT** — the concept teaches aDNA composition; it does **not** claim to describe LP node-federation, so no conflict with the LP federation spec | — | no change (correct scoping) |
| **B-9** | `canvas_yaml_interop.md:311` — explicitly notes the YAML edge-list vs code-side `AgentNode.depends_on` mapping | LP code model (schema's own note repeats this) | **CONSISTENT** — correctly hedged; no protocol over-claim | — | no change |
| **B-10** | CLAUDE.md *Registry Awareness* — local-first `MarketplaceRegistry`; `latlab lattice publish/pull/compose`; "6 readiness checks" | LP `lattice-objects.md` FR-007 (marketplace registry, local + DLT persistence); compose external/inline = concept file | **CONSISTENT** (these are `latlab` CLI + marketplace claims; none contradicts the protocol spec) — but see B-11 | — | no change |
| **B-11** | *Internal* self-consistency: CLAUDE.md lists the "6 readiness checks" as `(shareable, source_instance, version_policy, license, keywords, valid lattice_type)` while `concept_lattice_composition.md` lists `(schema-valid, shareable, source_instance, license, keywords, refs-resolve)` | each other (not the LP spec) | **two "6-check" lists disagree** — an internal teaching inconsistency; neither is wrong vs the LP spec (the spec doesn't fix a canonical 6). `skill_lattice_publish.md` is cited as the authoritative recipe. | **low** | **NOT fixed here** — reconciling requires reading the authoritative `skill_lattice_publish.md` + possibly the `latlab` code; out-of-scope for a verification-class check (no logic-guessing). **Ledger row F-CHM-214** (below) for a future harmonization pass. |

### Fixes applied (our side) — 5 content edits, 0 logic
1. `what/context/object_standards/context_object_standards_overview.md` — count 13→19; `updated`→2026-07-02, `last_edited_by`→agent_rosetta.
2. `what/context/object_standards/AGENTS.md` — count 13→19; frontmatter bump.
3. `what/context/lattice_basics/context_lattice_basics_core_concepts.md` — count 13→19; frontmatter bump.
4. `site/src/content/docs/lattice-design.mdx` (×2 lines: :55 and :151) — counts 15→19; dropped uncovered `infrastructure` from the :55 coverage claim. (Starlight `.mdx` — no aDNA frontmatter bump convention; content-only.)
5. Post-fix full-vault + site sweep confirms **zero** remaining stale lattice-example counts (unrelated "N example" hits — `campaign_dispatch` historical deliverable "6 example lattices", prompt-engineering in-context "5 examples", rubric section-counts, ADR heading "§2 Examples" — are KEEP). **One deliberate KEEP flagged**: `what/patterns/AGENTS.md:21` uses "15 example lattice definitions" as a **frozen methodology illustration** inside the ratified (Champollion G3, 2026-07-02) semantic-census corollary — it teaches the counting *method*, not a live filesystem claim; disturbing a ratified governance example is riskier than the illustrative number's staleness. Noted, not edited.

**Tools**: no `what/lattices/tools/*.py` logic touched; their docstrings/help text carried no LP-protocol claim needing correction (verified `lattice_validate.py`/`adna_validate.py`/`compliance_checker.py` help + tools AGENTS.md).

---

## 4 · Pin-follow recommendation — **FOLLOW to `8cb6e1e`** (zero teaching change)

**Recommendation: FOLLOW.** Update this vault's *recorded teaching pin* `47935b6` → `8cb6e1e`.

**Evidence**: `git log 47935b6..8cb6e1e -- .agentic/specs/` is **empty** (§1) ⇒ the spec corpus is byte-identical across the two SHAs. Every direction-(b) check above holds identically at `8cb6e1e`. Following the pin **requires zero teaching changes** — it only re-labels the snapshot to match LP's own authoritative pin (`what/context/codepin.md` = `8cb6e1e`, Carnot M1.5), collapsing the visible-but-benign one-day gap the M5.1 joint memo §2 recorded.

**Not executed here.** Per the mission + M5.1 memo §2, **fable ratifies the pin-follow at review**; the orchestrator then updates the recorded pin wherever this vault names it and back-fills the M5.1 memo §5 pointer. Surfaces that name the teaching pin (for the orchestrator's follow-through): the M5.1 joint memo §2, `what/patterns/pattern_cross_graph_codepin.md`, and any Champollion record citing `47935b6` as the teaching snapshot. *(This artifact deliberately keeps `47935b6` in its own header/§1 as the as-run pin; it is the evidence that the check ran at the charter pin.)*

---

## 5 · Dispositions summary

| Disposition | Items |
|---|---|
| **Fixed in place (our side)** | B-1, B-2, B-3, B-4, B-5 — 5 content edits (4 files + 1 file ×2 lines); site build green; frontmatter bumped on the 3 aDNA-md files |
| **Staged offering memo (their side)** | A-1, A-2, A-3, A-4, A-5, A-7, A-8 → `who/coordination/coord_2026_07_02_rosetta_to_noether_conformance_findings.md` (`status: staged`, `ack_required: false`, findings-as-offering, zero prescriptions). A-9 recorded as a clean check (no memo line). |
| **Ledger rows (next version-cut docket)** | **F-CHM-214** — internal "6 readiness checks" list mismatch (B-11), harmonize against `skill_lattice_publish.md`. **F-CHM-215** — `adna_validate.py` does not honor §5.5's *general* nested-instance exclusion (A-6 / GI-1); only reference-vault paths are hardcoded. |
| **G5-input (operator rules; neither side edits)** | **GI-1** (standard↔tooling coherence, from A-6) + **GI-2** (Topology↔Lattice vocabulary seam) — see §6-adjacent block below. |
| **Pin-follow (fable ratifies)** | §4 — FOLLOW to `8cb6e1e`, evidence = empty spec diff; not executed here. |

### G5-INPUT block (quoted texts; neither side edits until the operator rules)

**GI-1 — standard §5.5 (ADR-044) vs the reference tool `adna_validate.py`** *(standard-vs-tooling, not standard-vs-spec; escalated because it changes what "conformant" reports for every code-as-WHAT vault, of which LP is the WS-1 pilot):*
- **Standard text** (`what/docs/adna_standard.md` §5.5): *"a conformance run validates the instance rooted at the directory being checked; it does NOT recurse into embedded standalone instances (in the reference vault: `what/docs/examples/` and `how/templates/template_node_adna_exemplar/`). Each embedded instance is validated standalone if desired."*
- **Tool behaviour** (`what/lattices/tools/adna_validate.py`): `NESTED_INSTANCE_DIRS` is hardcoded to exactly those two reference-vault paths; the walk removes `.git` from `dirnames` (stops descent *into* a `.git` dir) but has **no general detection of a nested standalone instance** (a subtree carrying its own `.git`, `CLAUDE.md`+triad). Result: LP's `what/latticeprotocol/**` (own repo) and `what/whitepaper/**` (absorbed sub-vault) are fully walked → hundreds of false positives.
- **The tension**: the standard's rule is *general* ("embedded standalone instances"); the tool implements it *specifically* (two named paths). A code-as-WHAT vault is the standard's own blessed pattern, yet the conformance tool can't recognize the nested code repo the pattern creates. **Operator question for G5**: does the standard gain a general nested-instance *marker* (e.g. an ignore-list field in MANIFEST, or "a subtree with its own `.git` + governance files is auto-excluded") that the tool then honors — or does the tool simply generalize its detection? Either way it is a coherence fix, not a bug on LP.

**GI-2 — Topology (LP `lattice-objects.md`) vs Lattice (aDNA `.lattice.yaml`)** *(a vocabulary seam, offered as a teaching-clarity note, NOT a contradiction — recorded so the operator can decide whether a one-line seam note belongs in our teaching):*
- **LP spec** (`.agentic/specs/lattice-objects.md`): *"### Topology — Purpose: Multi-module workflows represented as DAGs."* (packaged with `registry.yaml`, NFT billing).
- **aDNA teaching** (`concept_lattice_composition.md`, schema): the same DAG-of-modules concept is the **Lattice** (`.lattice.yaml`, `lattice_type: pipeline|...`).
- Both are internally correct for their layer; a newcomer reading both could conflate them. **No edit made** — flagged for the operator to rule whether our teaching should carry a one-line "LP's marketplace layer calls the packaged form a *Topology*; the aDNA authoring format calls the graph a *Lattice*" seam note.

---

## 6 · Out-of-scope manifest

- **LP tree — writes**: NONE. `git -C /Users/stanley/aDNA/LatticeProtocol.aDNA status --short` shows only a pre-existing untracked `how/campaigns/campaign_carnot/missions/review_r1_cp1_close.md` (a Carnot artifact, present before this session — **not mine**). Read-only honored absolutely.
- **LP nested code repo** (`what/latticeprotocol/`): read spec files at pin via `git show` only; no working-tree touch.
- **Deep LP conformance lint**: the §2 counts are a **characterization by class**, not an exhaustive per-file remediation list (verification-class discipline — the judgment surface is "which classes, whose, how severe", not "enumerate all 149 lines"). The full `adna_validate.py` output is reproducible on demand; the offering memo names classes + representative paths, not every file.
- **`skill_lattice_publish.md` / `latlab` code**: not read (B-11 harmonization deferred → F-CHM-214); would be logic-guessing to pick a canonical 6-check list here.
- **`adna_validate.py` fix**: NOT attempted (it's a standard-owned tool change gated on the GI-1 operator ruling; and it's out of a verification mission's remit).
- **Pin-follow execution**: NOT done (fable ratifies; §4).
- **`what/patterns/AGENTS.md:21`** illustrative "15": deliberately KEPT (ratified-governance methodology example, §3 note).
- **Non-census teaching surfaces** (glossary, other concept files, tutorials): not swept for lattice-object semantics beyond confirming no lattice/module/dataset-semantics glossary entry exists.

---

*Authored by Rosetta (opus builder) at Champollion P5 / M5.2, 2026-07-02. Fable reviews (independent re-census of the two highest-severity findings — A-6/GI-1 and A-2 — by a different method) + ratifies the §4 pin-follow before the orchestrator commits. Rule 10 honored: nothing written into LatticeProtocol.aDNA.*

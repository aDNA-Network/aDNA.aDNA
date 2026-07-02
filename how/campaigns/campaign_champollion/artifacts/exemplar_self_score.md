---
type: artifact
artifact_id: champollion_exemplar_self_score
title: "Champollion M3.3 — Exemplar self-application: aDNA.aDNA scored against the 10 compliance dimensions (v2.5)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m3_3_exemplar_self_application
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
scored_against: "aDNA Universal Standard v2.5 (ADR-046 cut, 2026-07-02)"
tags: [artifact, champollion, p3, self_score, compliance, exemplar, v2_5, honesty_attestation]
---

# Exemplar self-application — aDNA.aDNA vs. the 10 compliance dimensions

**Mission**: M3.3 (verification-class). Score this vault honestly against the 10 compliance dimensions (0–5 each, 50 max), fix what safely lifts a sub-exemplary dimension, re-score, record. First self-score under the **now-live v2.5 standard** (ADR-046, 2026-07-02).

## 1. Method note

- **Rubric** = the 10 compliance dimensions verbatim from `CLAUDE.md` §Compliance Dimensions (0–5 each). This is the scoring axis — not the checker's internal 0–3 scale.
- **Scored against v2.5**: `what/docs/adna_standard.md` (title line 1 = "aDNA Universal Standard v2.5"; header changelog records `v2.5 | 2026-07-02 … ADR-046`; §7.2 per-class frontmatter profile, §5.3 optional `federation/` row, §5.5 walk scope, §7.7 ratification discipline, §15.4 version-cut checklist all read fresh — not from memory of v2.4).
- **Checker-assisted where automated, judged where judgment.** `compliance_checker.py` scores OBJECT-level compliance (context/lattice/skill) on a 0–3 scale. Several rubric dimensions need **VAULT-level judgment** (governance coherence, federation posture, registration readiness) that no object-scorer can render. Each row below marks which evidence is checker-derived vs judged.
- **Census rule (binding, from M3.2 AAR)**: no count is inherited from governance prose — every count below was re-derived by a fresh command, cited inline.
- **Two scores per dimension**: baseline (as found) → post-fix (after class-(a) fixes). Dimensions still < 5 after fixes carry a **named class-(c) gate/owner** — no silent < 5.

**Fresh tool baseline (INPUT evidence, not a substitute for judgment):**
- `python3.13 what/lattices/tools/adna_validate.py .` → **"Full conformance, all checks pass"**
- `python3.13 what/lattices/tools/adna_validate.py . --governance` → **"GOVERNANCE SYNC: Zero drift"**
- `python3.13 what/lattices/tools/compliance_checker.py . --output both --outdir <scratchpad>/m33_compliance` → **95 objects · aggregate 83.1% · 0 T1 / 47 T2 / 48 T3 · 3 active gap categories** (G-002 lattice-companion, G-003 skill-lattice_type, G-012 skill-FAIR).
- Censuses: `ls how/skills/skill_*.md | wc -l` = **48** · `ls how/templates/template_*.md | wc -l` = **41** · `ls what/patterns/pattern_*.md | wc -l` = **22** (post-M3.1/M3.2 harvest) · ADR files `ls what/decisions/adr_*.md | grep -v adr_index | wc -l` = **41** (adr_index tally: "41 ADRs — accepted 40 · amended 1", internally consistent).

## 2. Baseline scorecard (as found, pre-fix)

| # | Dimension | Score | Level | Evidence (path / command / checker) | Gap |
|---|-----------|:----:|-------|--------------------------------------|-----|
| D1 | Triad structure (placement) | **5** | vault-judged | Every object in the correct triad leg (`what/`·`how/`·`who/`); 11-type extended ontology correctly placed; `adna_validate` structural Full-pass. Checker `d01`=90.2% is a **type-string artifact** (see gaps) not a placement defect. | Checker under-scores context files: `handle_context` tests `type == "context"`, but files correctly use valid subtypes `context_guide` / `context_research` (§7.2 lists `context_research` as valid). Ledgered F-CHM-209(b). Not a real placement gap. |
| D2 | Governance coherence | **5** | vault-judged | `adna_validate --governance` = **Zero drift**; census confirms prose counts real (templates **41**, skills **48** match CLAUDE.md/AGENTS/glossary); CLAUDE.md/MANIFEST.md/STATE.md present + coherent. Checker `d02`=100% (76 obj). | — |
| D3 | Frontmatter validity (v2.5 §7.2) | **5** | checker+judged | `adna_validate` **Full conformance** under the v2.5 per-class profile (ADR-044: `status` optional for `directory_index`/`coordination`); checker `d03`=100% (95 obj). | — |
| D4 | FAIR metadata | **4** | checker+judged | Lattices (19) carry **complete** FAIR — checker `d04`=3/3 on every lattice. | **47 of 48 skills carry zero FAIR** (checker `d04` aggregate **29.9%**; G-012 on 47 skills). Only `skill_telemetry_wrapper_integration` has it (proof it's achievable). Whether HOW-layer skills MUST carry FAIR = class-(c) normative Q. |
| D5 | Type vocabulary (I/O types) | **5** | checker | Checker `d05`=100% across 19 lattices; canonical snake_case I/O types throughout. No modules in this docs-vault (N/A). | — |
| D6 | Versioning (semver + CHANGELOG) | **4** | vault-judged | `CHANGELOG.md` present + dual-track policy + `[Unreleased]` current to 2026-07-02; standard header records `v2.5` (§15.4 four-surface agreement satisfied); lattices carry semver (checker `d06`=100%); adr_index tally internally consistent. | **adr_index numbering gaps un-annotated**: 015, 018–021 absent (F-CHM-206) — decision-record legibility seam. |
| D7 | Federation | **4** | vault-judged | Vault federates **Git.aDNA** — wrapper present + declared (`## Git-Ops`) + operational (`git/` = CLAUDE.md + hooks + `.gitleaks.toml`); canonical `how/federation/git/` also present; context/lattices carry federation metadata. §5.3 v2.5 `federation/` row confirmed. | **47 skills lack federation blocks** (checker `d07`=**24.4%**); **ADR-045 placement seam** — Git wrapper exists at BOTH root `git/` and canonical `how/federation/git/`; no `iii/` wrapper (vault is not an III consumer — legitimate). Class-(c) structural. |
| D8 | Registration (registry readiness) | **4** | checker+judged | The 19 example lattices are registry-**ready** (FAIR + version + registration metadata complete). | Checker `d08`=**2.1%** — but that measures **skill→lattice promotion** (47/48 skills unpromoted, optional-by-design; G-003); AND no lattice has actually been **published** to a registry from this vault (readiness ≠ registered). Class-(c). |
| D9 | Companions (YAML for non-YAML) | **4** | checker+judged | Non-YAML objects (context/skill `.md`) are self-describing with full frontmatter; no orphaned non-YAML primary objects. | Checker flags **all 19** `.lattice.yaml` with **G-002 "missing companion YAML"** (`d09`=66.7%) — but a `.lattice.yaml` IS the YAML object (self-describing). Either a real "lattices want a companion `.md` explainer" convention OR checker over-strictness. Rubric clarification → F-CHM-209(d). |
| D10 | Reproducibility (I/O + exec context) | **5** | checker | Checker `d10`=100% across 19 lattices; each carries clear inputs/outputs + `execution_mode`. | — |

**Baseline total: 45 / 50** (five 5s + five 4s).

## 3. Fix-list (every dimension < 5), classed

| Dim | Gap | Class | Disposition |
|-----|-----|-------|-------------|
| D6 | adr_index numbering gaps (015, 018–021) un-annotated (F-CHM-206) | **(a) mechanical-safe here** | **EXECUTE** — one-line reserved/renumbered note; do not renumber. |
| D4 | 47 skills carry no FAIR metadata | **(c) normative** | Gate: **G3 + standard**. Should HOW-layer skills carry FAIR? Decide, then set `compliance_checker` NA_MAP for skills accordingly. Owner: fable/G3 + Rosetta(standard). |
| D7 | 47 skills carry no federation block | **(c) normative** | Same gate as D4 (skills' FAIR/federation/registration are one policy question). |
| D7 | ADR-045 wrapper placement seam (root `git/` vs canonical `how/federation/git/`) | **(c) structural** | Gate: **ADR-045 migration** — reconcile the two Git-wrapper homes. Owner: Grace Hopper (Git.aDNA) / Rosetta. Read-only observation here. |
| D8 | 47/48 skills unpromoted to lattices; no lattice published from this vault | **(c) normative** | Skill→lattice promotion is optional-by-design; registry publication is a separate operational step (not triggered by this docs vault). Owner: fable/G3. |
| D9 | Checker flags all 19 `.lattice.yaml` "missing companion YAML" | **(b/rubric)** | Ledgered F-CHM-209(d); the "does a self-describing `.lattice.yaml` need a companion" question is a checker/rubric clarification, not a content fix. |
| — (tool) | `compliance_checker.py` self-reports `standard_version: "2.4"` + hardcodes `type=="context"` for d01 | **(b) needs fable/G3 judgment** | Proposed: bump `meta.standard_version` "2.4"→"2.5" (~line 869) + docstring line 4 — coupled to the v2.5-conformance rules review (can't assert "validates v2.5" while the skill-FAIR / context-type-string / lattice-companion rules are unreviewed). **FABLE RULING (M3.3 review, 2026-07-02): DEFER — do not bump the string alone; the bump ships with the F-CHM-209 rules review as one unit. G3 rules whether that review becomes a mission (candidate: rider on M6.1 RC prep) or a standing checker-refresh task.** |

## 4. Class-(a) fixes executed (this vault only)

1. `what/decisions/adr_index.md` — inserted a **Numbering note** after the tally line: documents 015 + 018–021 as reserved/withdrawn, notes the 009→012 renumber (ADR-012), instructs "do not renumber" (stable IDs are cross-reference-load-bearing), and "preserve on regeneration." No row/tally change → `--governance` count-check unaffected.

*(Considered but declined — no gold-plating: a CHANGELOG.md `[Unreleased]` cross-ref to the v2.5 cut. Declined because the standard's own header changelog already records v2.5 per §15.4 item 3; a CHANGELOG.md entry would be redundant, and CHANGELOG tracks the governance track, not the standard track.)*

## 5. Post-fix scorecard

| # | Dimension | Baseline | Post-fix | Residual + class-(c) gate/owner if < 5 |
|---|-----------|:----:|:----:|-----------------------------------------|
| D1 | Triad structure | 5 | **5** | — |
| D2 | Governance | 5 | **5** | — |
| D3 | Frontmatter (v2.5) | 5 | **5** | — |
| D4 | FAIR metadata | 4 | **4** | Skills carry no FAIR. **Class-(c)** — gate: G3 + standard (should HOW-layer skills carry FAIR? then align checker NA_MAP). |
| D5 | Type vocabulary | 5 | **5** | — |
| D6 | Versioning | 4 | **5** | adr_index numbering annotated (class-(a) done). |
| D7 | Federation | 4 | **4** | Skills lack federation blocks + ADR-045 placement seam. **Class-(c)** — gates: G3+standard (skills) · ADR-045 migration (wrapper home, owner Grace Hopper). |
| D8 | Registration | 4 | **4** | Skill→lattice promotion optional + no registry publication from this vault. **Class-(c)** — gate: G3 (promotion policy is optional-by-design; nothing to unilaterally fix). |
| D9 | Companions | 4 | **4** | Checker flags 19 lattices "missing companion YAML." **Rubric-clarification** — F-CHM-209(d); not a content fix. |
| D10 | Reproducibility | 5 | **5** | — |

**Post-fix total: 46 / 50** (six 5s + four 4s). No silent < 5 — every 4 carries a named gate.

## 6. Fresh compliance_checker summary (archived)

**Invocation**: `python3.13 what/lattices/tools/compliance_checker.py . --output both --outdir /private/tmp/…/scratchpad/m33_compliance` (tools-dir copies NOT overwritten).

| Metric | Value |
|--------|-------|
| Objects scanned | 95 |
| Aggregate | 83.1% |
| Tiers | 0 T1 · 47 T2 · 48 T3 |
| Active gap categories | 3 (G-002, G-003, G-012) |
| By type | context 28 @ 96.7% (all T3) · lattice 19 @ 94.7% (all T3) · skill 48 @ 70.6% (47 T2, 1 T3) |
| Weakest dims | d08 registration 2.1% · d07 federation 24.4% · d04 FAIR 29.9% |
| Checker `meta.standard_version` | **"2.4"** (STALE — live standard is v2.5; ledgered F-CHM-209(a)) |

**Reading the 83.1%**: the aggregate is dragged almost entirely by **48 skills scored 0 on FAIR/federation/registration** — dimensions the checker's `NA_MAP` deliberately applies to skills (d05/d06/d09/d10 are N/A for skills, but d04/d07/d08 are NOT). Context (96.7%) and lattices (94.7%) — the objects for which those dimensions are unambiguously required — are near-perfect. The vault-level scores above reflect that judgment; the raw 83.1% overstates deficiency by treating optional-for-HOW-layer metadata as mandatory.

## 7. Honesty attestation — the unflattering findings, named

A perfect 50 would be a lie; the vault was not perfect this morning. Explicit unflattering evidence:

1. **47 of 48 skills carry zero FAIR metadata** (checker d04 aggregate **29.9%**) and **zero federation blocks** (d07 **24.4%**). Exactly one skill (`skill_telemetry_wrapper_integration`) is fully compliant — which proves the other 47 *could* be and simply aren't. This is the single largest drag on the vault's automated score and the reason D4 and D7 sit at 4/5, not 5.
2. **Registration is the checker's weakest axis at 2.1%** — 47 of 48 skills are unpromoted to registry lattices, and **no lattice has ever been published to a registry from this vault**. Readiness exists; exercise does not.
3. **adr_index had un-annotated numbering gaps** (015, 018–021 missing) that had sat as a deferred finding (F-CHM-206) — a legibility debt in the decision-record spine. Fixed this session, but it was real.
4. **The vault's own compliance tool is stale**: `compliance_checker.py` self-reports validating against **standard v2.4** while the live standard is **v2.5**, and it hardcodes `type == "context"` — under-scoring the vault's own correctly-typed `context_guide`/`context_research` files, and flagging all 19 self-describing `.lattice.yaml` files for a "missing companion." The self-referential vault ships a scorer that is behind its own standard.
5. **ADR-045 wrapper-placement is mid-migration** — the Git federation wrapper exists in two homes (root `git/` and canonical `how/federation/git/`); the standard was cut to require the canonical home before the vault finished moving to it.

## 8. Graduation-seed + defer-ledger dimension impact

- **M3.2 graduation seeds** (both scored 3/3, backlog-filed, G3-flagged): no compliance-dimension impact — they are pattern-graduation candidates (template-fold decisions), not object-quality changes. They neither lift nor lower any of the 10 dimensions; they ride the G3 gate.
- **F-CHM-206** (adr_index numbering) — re-surfaced by D6 scoring; moved **defer → FIXED** this session via the class-(a) annotation.
- **F-CHM-209** (new, this mission) — the `compliance_checker.py` v2.5-divergence bundle; ledgered (see findings_ledger).

## 9. Finish-sequence verification

- `adna_validate .` → **Full conformance, all checks pass** (re-run post-fix).
- `adna_validate . --governance` → **Zero drift** (re-run post-fix; the adr_index note added no rows/counts).
- Standing sweep (grep for changed counts): the adr_index edit changed no counts or names — nothing to sweep out-of-scope. Out-of-scope hits: none.

## 10. Addendum — G3 D5 ruling (2026-07-02, post-ratification)

The operator ratified **EXEMPT-AS-POLICY** at G3 (record: [[../../gates/champollion_p3_gate.output|champollion_p3_gate.output]]): HOW-layer skills are exempt from d04/d07/d08 (FAIR · federation · registry-readiness) as **vault policy** — consistent with the checker's existing skill exemptions (d05/d06/d09/d10); skills that federate may carry the blocks voluntarily. Consequences for this scorecard:

| Dim | Post-fix | Under policy | Note |
|---|:---:|:---:|---|
| D4 FAIR | 4 | **5** | the skills gap was the sole residual; lattices already complete |
| D7 Federation | 4 | **5** | skills gap resolved by policy; the ADR-045 dual-home seam is scheduled (M4.4 batch, G3 D6.4) — a migration in progress, not a conformance defect |
| D8 Registration | 4 | **4** | promotion stays optional-by-design; the registry-exercise residual is deferred with an owner + trigger (OoB §2, G3 D6.5) — honest 4 until exercised |
| D9 Companions | 4 | **4** | rides the F-CHM-209 checker review (lattice-companion semantics) at M6.1 prep |

**Score-under-policy: 48/50** (baseline 45 → post-fix 46 → policy-resolved 48; the remaining two 4s each carry a scheduled owner). The checker NA_MAP alignment + version bump ship together via the **F-CHM-209 review, ratified as an M6.1 rider** (G3 D5). No dimension is silently sub-5; the honesty attestation (§7) stands unmodified.

---
type: artifact
artifact_id: release_staging_ledger_v8_12
title: "v8.12 staging ledger — the memo-derived template touches, ADR-060's adr_003 flip at the source, ADR-061's memo fields, and the image-only defects that a fold must back-write"
campaign: campaign_haussmann
created: 2026-09-24
updated: 2026-10-03   # P11 + P12 candidates + §3 Q6 added at the mid-campaign SITREP; everything else as measured 2026-09-24
status: proposed          # ⛩ NOT FIRED. Every row is a hypothesis to be re-measured against disk before the gate; the operator rules each §3 question at the gate.
last_edited_by: agent_rosetta
session: session_stanley_20260924_083249_garnier_reorientation
supersedes_none: true
relates: [release_staging_ledger_v8_11, skill_template_release, adr_060_template_decision_provenance, adr_061_three_valued_memo_authorship, idea_upstream_template_decision_provenance, idea_upstream_root_triad_exception_discipline]
tags: [artifact, template_release, ledger, v8_12, gitignore, iss_receiver, adr_060, adr_061, executor_lane, unattended, seven_lamps, proposed]
---

# v8.12 staging ledger — ⛩ PROPOSED, NOT FIRED

> ⚠ **LEDGER ROWS ARE HYPOTHESES.** Measured against disk on **2026-09-24**; every row is measured **again**
> before firing (v8.6 · v8.8 · v8.10 · v8.11 each caught a row wrong at fire time). ⛔ **A fold is not a copy**
> (v8.11's finding): every row names the *lines* that move, and step (b.2) diffs each payload path in **both**
> trees before any byte crosses. ⛔ `.adna/` is never hand-edited (Rule 1); every image-only defect below is
> repaired by the release fold, back-written to the dev graph where the dev graph is behind.

## §0 · Derived at authoring — never carried

| Fact | Value | How |
|---|---|---|
| `.adna/` governance version | **8.11** | `.adna/CLAUDE.md` `version:` (re-derive at gate) |
| Standard version | **v2.5** | `.adna/README.md` badge |
| `.adna/` hook version | **4.3.0** | `grep LAYER_CONTRACT_VERSION .adna/how/standard/hooks/pre-push-sanitize.sh` |
| `main` CI | last run 2026-09-11 `34638817591` success; `vitrine/design` 32 ahead, none through CI | convention 19 |
| ADR queue | 55 accepted · 1 amended · **1 proposed** (ADR-062, LinkML) | `adr_index.md` tally 2026-09-24 |
| `template_home_claude.md` | dev **parses**; image **fails** (`created: {{created_date}}` unquoted, `.adna/…:4`) | `python3.13 -c yaml.safe_load` both trees |
| `adr_003` template copy | `.adna/what/decisions/adr_003_system_configuration_as_context_topic.md` **`proposed`**, md5 `a2fa57bc…`, 26 byte-identical fork copies (Hestia 2026-09-15 §0) | Hestia's sweep, not re-run here |

## §1 · What this release is

**A memo-derived release.** Every row traces to an inbound coordination memo answered on 2026-09-24 or an ADR the
operator ratified on 2026-09-17. It carries **no site bytes** and **no standard-version change** (standard holds
v2.5 unless §3 Q1 rules otherwise). Governance version **8.11 → 8.12**.

## §2 · Payload rows (enumerated — never a tree diff)

| # | Row | Source of record (dev graph) | Destination (image) | Reason / control |
|---|---|---|---|---|
| P1 | **`adr_003` → `accepted` with provenance block** (`template_decision: true`, `ratified_in: aDNA.aDNA`, `ratified_on: 2026-09-17`, `template_version: v8.12`) | `what/decisions/adr_060_template_decision_provenance.md` (accepted) | `.adna/what/decisions/adr_003_system_configuration_as_context_topic.md` — **status + block only**, body byte-identical | Control: md5 of body below the frontmatter unchanged; `status: accepted` grep = 1 |
| P2 | **Fork-time provenance stamp** — `skill_project_fork` writes `inherited_from_template: <version>` into every copied `what/decisions/adr_*.md` | `how/skills/skill_project_fork.md` (step to author at the gate sitting, `proposed`) | `.adna/how/skills/skill_project_fork.md` | Control: fresh-clone smoke → forked ADR carries the field; census predicate `grep -L inherited_from_template` excludes it |
| P3 | **ADR-061 memo fields** — `from_persona` (opt) · `from_vault` (req) · `authority` (opt) in the coordination template + one sentence in the coordination AGENTS | `what/decisions/adr_061_three_valued_memo_authorship.md` (accepted); `who/coordination/inbox/README.md` rule 5 (adopted) | `.adna/how/templates/template_coordination.md` (verify exact filename at gate) + `.adna/who/coordination/AGENTS.md` | Additive; existing memos valid as-is. Control: template parses; three fields present |
| P4 | **`template_home_claude.md` YAML fix** — quote `{{created_date}}` | dev copy already correct (`how/templates/template_home_claude.md:4`) | `.adna/how/templates/template_home_claude.md:4` | ⚠ **Image-only defect** — the fold must be line-scoped to `:4`; (b.2) diff first. Control: `yaml.safe_load` passes in both trees |
| P5 | **Root-triad exception discipline** (ADR-045 companion; three exception classes with their required artifact; fork-time root-shape check; S15 health-check upgrade) | `how/backlog/idea_upstream_root_triad_exception_discipline.md` (Sang Nila Utama, UHSingapore, 2026-09-19; committed here 2026-09-24) | `.adna/how/skills/skill_project_fork.md` (check) + `.adna/how/skills/skill_node_health_check.md` S15 (verify path at gate) | ⛩ needs an ADR or a ruling at the gate before it becomes a check; ships as **doc + advisory** if not ruled |
| P6 | **Template touch — one decision, three templates** (merged asks): (a) mission `status` enum + `awaiting_operator` / `escalated` + `gate:` pointer; (b) session `mission:` + `lease: {mode, fence, read_graphs, declared_at}`; (c) `executor_lane: oauth \| key \| local` beside `executor_tier` on the mission card; (d) optional `harness:` block (name · version · capability_evidence) — ScienceStanley's Seven Lamps ask; (e) `next_prompt:` field in the STATE template | Automator `idea_upstream_*` ×6 (2026-09-21) · Automator 09-23 memo · SS 09-10 memo · `pattern_model_tiered_campaign_execution.md` §2.1a (proposed) | `.adna/how/templates/template_mission.md` · `template_session.md` · `template_state.md` (verify names at gate) | ⛩ **Operator rules the shape once.** All fields optional/additive. Control: every existing instance in the dev graph still validates; `adna_validate --governance` zero drift |
| P7 | **Ruling-record template + `how/gates/` scaffold** (`template_ruling_record.md`: gate_id · packet_ref@SHA · items[] · ruled_by/date/via/provenance) | Automator idea #2; this vault's `how/gates/` practice (Champollion, Refit) as instances | `.adna/how/templates/template_ruling_record.md` (new) | ⛩ Split candidate — the `standing_grant` record type (Automator #3) and ADR-022's unattended envelope (#6) are **bigger than a template field**; recommended: doc-only in v8.12, ADRs in v8.13 |
| P8 | **`decision_log.jsonl` sidecar + `pattern_decision_queue` graduation** (Automator #4: "Recent Decisions" unused 0/6 fleet-wide) | Automator idea #4 | `.adna/how/templates/template_state.md` (a sidecar note) | ⛩ Advisory row unless the pattern graduates first (`what/patterns/AGENTS.md` below-3 rule) |
| P9 | **Release-notes advisory — 31 vendored pre-4.2.0 hooks** (Ilmarinen 09-07/09-15): name the `NOT_INSTALLED` class (Git.aDNA A8 §4) and the one-line re-vendor; **no bulk write** into any vault | `idea_upstream_template_decision_provenance.md` item 3 | `.adna/CHANGELOG.md` release entry only | Control: the entry names Ilmarinen's instrument; count re-asked of Forgejo at fire time, never re-run here |
| **P11** | **`.adna/.gitignore` dead patterns** — lines 64 (`dist/`) and 71 (`/*.tar.gz`) carry an inline comment on the pattern line, so **neither pattern ever matches** (gitignore has no inline comments); `git check-ignore -v dist/x x.tar.gz` → rc 1 before, resolves after moving each comment to its own line. **48 of 120** `*.aDNA/.gitignore` carry the dead `dist/` line (read-only count, 2026-09-25) | `who/coordination/inbox/coord_2026_09_25_ariel_to_rosetta_gitignore_inline_comments_and_tarball_pathspec.md` (:29–43) — **`candidate`, added 2026-10-03**; dev-graph `.gitignore` to be checked for the same defect at the gate | `.adna/.gitignore:64,71` — two lines, comment moved above each pattern | Line-scoped (b.2); control: `git check-ignore -v` resolves both in a fresh clone. ⚠ Fixing the template does **not** fix the 48 forks — release-notes advisory names the one-line repair, no bulk write (P9's discipline) |
| **P12** | **ISS gate-receiver hardening** — per-vault receivers accept `POST /save` with CORS `*` (any page in the operator's browser could attempt a gate write); `gate_receiver.py` write is unauthenticated. Shape: same-origin only or a per-gate token; reject cross-origin POST; `skill_create_iss` receiver step gains the clause; `:8765` fixed-port assumption at `skill_create_iss.md:44` revisited | Ledoux 09-26 (:69, :76, **HIGH**) + Berthier 09-02; `how/backlog/idea_upstream_iss_receiver_security_hardening.md` — **`candidate`, added 2026-10-03**; the runtime fix is Astro's (`what/lib/iss/runtime/`), ruled jointly by memo | `.adna/how/skills/skill_create_iss.md` (+ the ISS adaptation guides if they ship in the image — verify at gate) | ⛩ ships only if the receiver fix exists in Astro's runtime first — otherwise **advisory** in the release notes, row carried to v8.13. Red-prove: a planted cross-origin POST is refused |
| P10 | **Docs currency riders** — `standard_governance.md` RFC section's "superseded in practice" annotation; `ontology_unification.md` "22 entity types" worked-example annotation | both annotated in the dev graph 2026-09-24 (strike-not-delete) | `.adna/what/docs/…` counterparts (verify they exist in the image at gate) | (b.2) line-scoped; if the image lacks the file, the row is void and says so |

## §3 · ⛩ Questions for the operator at the gate

1. **Version**: v8.12, standard holds v2.5? (P6's new mission-status values are additive; a standard bump is not required but is available.)
2. **P6 shape**: rule the merged template touch as one — or strike (d) `harness:` and (e) `next_prompt:` back to advisory.
3. **P7 split**: doc-only now, `standing_grant` + unattended envelope as ADRs for v8.13?
4. **P5**: ADR now, or advisory doc?
5. **Deploy tail**: none required (no site bytes) — confirm.
6. **P11 / P12** (added 2026-10-03): include both in v8.12, or defer P12 to v8.13 pending Astro's runtime fix? (P11 is a two-line template repair with a fresh-clone control; P12 depends on a peer's code.)

## §4 · Fire-time checklist (carried from v8.11, unchanged)

Re-derive §0 · enumerate payload = exactly the §2 rows · (b.2) diff each path both trees, record deliberate
image-only deltas by path + reason · (b.1) added-lines scan: 0 private paths, 0 bare SHAs · `gitleaks` ·
hook `--self-test` · `adna_validate --governance` zero drift both trees · fresh-clone smoke (version surfaces
×3, `template_home_claude` parses, forked ADR carries `inherited_from_template`) · write the ratification block
**in the firing commit**.

## Ratification (§7.7)

- **Decision:** —
- **Ratified-by:** —
- **Date:** —
- **Status:** proposed

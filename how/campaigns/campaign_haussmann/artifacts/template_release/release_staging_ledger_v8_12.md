---
type: artifact
artifact_id: release_staging_ledger_v8_12
title: "v8.12 staging ledger — the memo-derived template touches, ADR-060's adr_003 flip at the source, ADR-061's memo fields, and the image-only defects that a fold must back-write"
campaign: campaign_haussmann
created: 2026-09-24
updated: 2026-10-04   # FIRED — §5 fire-gate re-verification, §6 fire record, §7.7 ratification; Q5 corrected at the gate (deploy tail exists) — prior: 2026-10-03 P11 + P12 + Q6 added
status: accepted          # ⛩ FIRED 2026-10-04 — aDNA-Network/aDNA main 1a25446, annotated tag v8.12; §7.7 block written in this firing commit; §5 holds the fire-gate re-verification
last_edited_by: agent_rosetta
session: session_stanley_20260924_083249_garnier_reorientation
supersedes_none: true
relates: [release_staging_ledger_v8_11, skill_template_release, adr_060_template_decision_provenance, adr_061_three_valued_memo_authorship, idea_upstream_template_decision_provenance, idea_upstream_root_triad_exception_discipline]
tags: [artifact, template_release, ledger, v8_12, gitignore, iss_receiver, adr_060, adr_061, executor_lane, unattended, seven_lamps, proposed]
---

# v8.12 staging ledger — ✅ FIRED 2026-10-04 (`aDNA-Network/aDNA` @ `1a25446`, tag `v8.12`)

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

### §3 — answered in advance, 2026-10-03 (⛩ Stanley, accept-all on `operator_rulings_packet_20261003` row B2; ledger stays NOT FIRED — the §7.7 block below is written in the firing commit per §4)

1. **Version:** v8.12; **standard holds v2.5** (P6's values are additive; nothing normative moves).
2. **P6 shape:** **one touch for (a)–(d)** — mission `status` enum + `gate:` pointer · session `mission:` + `lease` block · `executor_lane` beside `executor_tier` · optional `harness:` (SS accepted 09-25). **(e) `next_prompt:` struck back to advisory** — STATE's ⏭ QUEUED / Resume-Here already carries that fact; a second field for one fact is the index-vs-artifact class by construction.
3. **P7 split:** **doc-only now** (`template_ruling_record.md` + the `how/gates/` scaffold); `standing_grant` and ADR-022's unattended envelope → **ADRs for v8.13**.
4. **P5:** **advisory doc now, ADR at v8.13** — a check shipped before its ADR is a check with no decision behind it.
5. **Deploy tail:** none — **confirmed** (no site bytes).
6. **P11 / P12:** **P11 IN** (two `.adna/.gitignore` lines; fresh-clone `git check-ignore -v` control; release notes name the one-line repair for the 48 forks, no bulk write). **P12 = advisory release-notes row, carried to v8.13 unless Astro's runtime fix lands first**; the Astro memo is opened **now** (drafted 2026-10-03, delivered under the send GO), not at v8.13.
- **Idea triage at the same ruling** — 11 `idea_upstream_*` at `proposed` (not the SITREP's 8; three were filed 10-03), each stamped with a `disposition:` line: `template_decision_provenance` + `root_triad_exception_discipline` → fold into P7 / P5's dispositions · `iss_gate_open_state_and_verdict_provenance` + `iss_receiver_fallback_posts_verdicts_into_a_redirect` + `iss_receiver_security_hardening` → ride P12 · `mission_ac_coherence_check` + `verification_instrument_discipline` + `standard_codify_campaign_layer` + `campaign_template_tier_budget_fields` → v8.13 lane as conventions-to-codify · `l1_onboarding_skill_stale_paths` + `node_manifest_interview_emission` → v8.13 or decline on re-measurement at the gate.

### §3 — ⛔ Q5 CORRECTED AT THE GATE, 2026-10-04 (operator ruling at plan time; strike-not-delete)

~~5. **Deploy tail:** none — **confirmed** (no site bytes).~~ **FALSE AT ITS PREMISE, and the premise was this ledger's own.** `site/scripts/build_tour_files.mjs` vendors four `.adna/` files to `/get-started/what-your-agent-reads/` and derives `source_ref` from `.adna/CLAUDE.md`'s `version:` — so **a governance bump invalidates the trust-page manifest by construction**, whether or not the release carries "site bytes" — and **two of the four vendored files change at v8.12** (`CLAUDE.md` by its version line; `skill_project_fork.md` by P2/P5). The v8.11 ledger's own **P6 row** records exactly this ("*a version bump makes it mandatory by construction*"), three weeks before this ledger asked the question the other way. ⛩ **Re-ruled 2026-10-04 (Stanley, AskUserQuestion at plan time): release + deploy together, from `main`** (v8.11 R2 precedent); prod serves `eda4cbf` (2026-09-11), an ancestor of `main`, so the alias-ancestry guard passes and the deploy also carries the 2026-09-12 docs-sweep fixes that were built and never deployed. ⇒ *"no site bytes" is not "no deploy tail" while the trust page vendors the template.*

## §5 · ⛩ RE-VERIFICATION AT THE FIRE GATE — `[D] 2026-10-04T00:28Z → 01:1xZ` (session `session_stanley_20261004_002600_garnier_v8_12_release_primer_o2`)

Every §2 row re-measured against disk before any byte moved; the operator's three plan-time rulings (deploy tail · conditional push pre-grant · Hygieia hold) are in the session file.

### §5.1 · What reproduced

| Row | Re-measured | Result |
|---|---|---|
| §0 version · hook | `.adna/CLAUDE.md` `version: "8.11"` · `LAYER_CONTRACT_VERSION=4.3.0` | ✅ reproduces |
| §0 ADR queue | `grep -h '^status:' adr_0*.md \| sort \| uniq -c` → 56 accepted · 1 amended · **0 proposed** (the ledger's "1 proposed" was ADR-062, ratified 2026-10-03 after this §0 was written) | ✅ moved as expected; the tally line in §0 is superseded by the 10-03 ratification |
| §0 `template_home_claude` | dev parses; **image fails** | ✅ reproduces — **and the row was narrower than the defect** (§5.3) |
| §0 `adr_003` | image `proposed`, md5 of the body below the frontmatter `e0cdc842` | ✅ reproduces |
| P4 | `created: {{created_date}}` unquoted at `:4` | ✅ reproduces (see §5.3) |
| P11 | `git check-ignore -v dist/x x.tar.gz` in `.adna` → rc 1 | ✅ reproduces |
| P6 · P3 templates | `template_{mission,session,coordination}.md` **byte-identical** dev = image | ✅ straight authoring + copy |
| P2 `skill_project_fork` | dev 24,903 B vs image 19,288 B, 105 diff lines | ✅ reproduces — reconciled **both directions** (§5.2) |
| P10 | dev `standard_governance.md:70` blockquote present; dev `ontology_unification.md:508` annotation present; both image counterparts exist | ✅ both rows live (the plan-time grep for "superseded in practice" returned 0 because the dev wording capitalises it — the row stands) |
| P5 | `skill_node_health_check.md` has **no S15** in the image | ⚠ half the row is **void**: advisory shipped in `skill_project_fork` Step 4.6 + CHANGELOG only |

### §5.2 · What moved, and the one thing this ledger did not foresee

- **`skill_project_fork.md` is reconciled in BOTH directions, not folded one way.** The image led on the post-v7.0 fork-cleanup block R1–R7, ADR-009 name validation, the orphan-plugin lint and the `{{persona}}` token; the dev graph led on Step 1.5 (license as a recorded `MANIFEST.md` field) and its gate lines. The dev file's own 2026-09-09 note said this reconciliation *"belongs at a release gate"*; this is that gate. Image-bound narrative naming peer vaults/personas/measurements was de-narrated per step (b.1); the operative text is identical in both trees (`cmp` dev vs staged → identical).
- **`template_coordination.md`, `template_mission.md`, `template_session.md`**: authored in the dev graph, copied byte-identical (b.2 diff empty).
- **New count surfaces**: image **31 → 32** templates at `CLAUDE.md` header comment + `MANIFEST.md` ×3 + `how/templates/AGENTS.md` (6 → 7 operational); dev **45 → 46** at MANIFEST ×3 · root CLAUDE · root AGENTS · **README tree comment** · `how/templates/AGENTS.md` (which also carried a stale "44" — corrected in the same edit). ⚠ The image `CLAUDE.md` carried a **second** count line the header-comment bump did not reach — found by the clone's governance lint, not by reading; fixed at the gate (§5.4).

### §5.3 · ⛔ P4 WAS NARROWER THAN ITS DEFECT — scope to the class, not the filing

The row said *"quote `{{created_date}}` at `:4`"*. With `:4`–`:5` quoted the staged file **still failed to parse at `:9`** (`node_hostname: {{node_hostname}}`). Every unquoted `{{…}}` frontmatter scalar is the class — **5** of them (`created` · `updated` · `node_hostname` · `operator` · `persona`); the dev copy already quotes all five. Folded as the class; the CHANGELOG says so. *v8.11's lesson — "scope a payload item to the CLASS, not to the filing" — recurring one release later, in the row written the sitting after that lesson was recorded.*

### §5.4 · Fire-time controls (all run in a fresh clone of `aDNA-Network/aDNA` @ `dea4ab9`)

| Control | Result |
|---|---|
| Payload = exactly the enumerated paths | `git status --porcelain` → **17** (16 modified + `template_ruling_record.md` new; root `README.md` badge ×3) ✅ |
| (b.1) wikilink / private-path / name sweep over the 17 | every hit **read**: all pre-existing image text, in-image wikilinks, or standard vocabulary (`~/aDNA/Home.aDNA/…`) → **0 stripped, 0 undispositioned** ✅ |
| `gitleaks dir` on the clone | no leaks ✅ |
| image hook `pre-push-sanitize.sh --self-test` | PASSED ✅ |
| `git check-ignore -v .adna/CLAUDE.md` | not ignored ✅ |
| Fork smoke (`cp -r .adna/ smoke.aDNA/` + Step-3 stamp) | derived `v8.12` · 0 unstamped · `adr_003` accepted · seed parses · fork `.gitignore` resolves `dist/x` + `x.tar.gz` ✅ |
| Version surfaces | both READMEs + `.adna/CLAUDE.md` read 8.12, zero `8.11` ✅ |
| `adna_validate --governance` — dev graph | Zero drift ✅ |
| `adna_validate --governance` — clone `.adna` | **RED on first run** — the count regex matched **`30→31 templates` inside the v8.9 HISTORY comment** of the image `CLAUDE.md` (true when written; archive-never-delete forbids editing it). ⭐ The instrument, not the history, was wrong: it read a comment as a live claim and would have gone red on the *first* count change after any such line. Fixed **in the validator** (strip `<!-- … -->` before both the template and the skills scan) in dev + assembly + clone — an **18th payload path**, enumerated here before the push; red-proved: a mutated `### Templates (31)` in a scratch copy is still caught (1 hit); **re-run: Zero drift in both trees** ✅ |

## §4 · Fire-time checklist (carried from v8.11, unchanged)

Re-derive §0 · enumerate payload = exactly the §2 rows · (b.2) diff each path both trees, record deliberate
image-only deltas by path + reason · (b.1) added-lines scan: 0 private paths, 0 bare SHAs · `gitleaks` ·
hook `--self-test` · `adna_validate --governance` zero drift both trees · fresh-clone smoke (version surfaces
×3, `template_home_claude` parses, forked ADR carries `inherited_from_template`) · write the ratification block
**in the firing commit**.

## §6 · Fire record — `[D] 2026-10-04T01:4xZ`

| Step | Result |
|---|---|
| (a) preconditions | gate opened by the operator at plan time (lane selected); every standard-touching change traces to an accepted ADR (060 · 061 · 045 companion ruled advisory) or a plan-time ruling; dev payload committed at `9aeb163` before the fire |
| (b)/(b.2) | payload authored in the dev graph first, diffed per path against the image; `skill_project_fork` reconciled both directions; three templates copied byte-identical; image-only deltas: narrative de-narrated in the two docs annotations + the fork skill (peer names, measurements) — recorded by path + reason |
| (b.1) | 17 → 18 paths swept; 0 stripped, 0 undispositioned (§5.4) |
| (c) | fresh clone of `aDNA-Network/aDNA` @ `dea4ab9`; `git status --porcelain` = exactly the 18 enumerated paths; root `README.md` badge ×3 |
| (d) | commit **`1a25446`** · annotated tag **`v8.12`** · `GH_TOKEN="$(gh auth token)" git -c credential.helper='!gh auth git-credential' push origin main v8.12` · verified at the remote: `HEAD` = `1a25446`, `refs/tags/v8.12` present. **Push conditions at the instant of push**: gitleaks no leaks · (b.1) 0 open · `adna_validate --governance` Zero drift both trees · 18 = enumerated · remote HEAD `dea4ab9` ✓ |
| (e) | `rsync -a -c --delete --exclude .git` → `~/aDNA/.adna` committed `bf5bdd8`, `diff -rq` against the released tree **empty**; `version: "8.12"` |
| (f) | fresh-clone smoke — recorded in the session file (7 rows + 4 v8.12 controls) |
| deploy tail | ⛩ ruled at plan time: **release + deploy together from `main`** — Lane E of the same sitting (worktree, `prebuild` re-vendors the trust page at `source_ref: v8.12`, changelog, gate-49 `home` re-baseline, push, `deploy_adna.sh prod`) |

## Ratification (§7.7)

- **Decision:** fire v8.12 as the §2 rows resolved by the §3 answers (accept-all 2026-10-03) **with Q5 corrected** — the release carries a deploy tail by construction (trust-page vendoring) and ships with it; the push was **pre-granted conditionally** (gitleaks clean · (b.1) 0 undispositioned · zero drift both trees · dry-run shows exactly the enumerated paths · remote HEAD still `dea4ab9` at the push) and every condition held; one path was added at the gate (`adna_validate.py`, §5.4) and is part of this decision.
- **Ratified-by:** Stanley Bishop, Founding Architect — §3 answers 2026-10-03 (accept-all on `operator_rulings_packet_20261003` B2) + the three plan-time rulings of 2026-10-04 (deploy tail · conditional push · Hygieia hold), AskUserQuestion, session `session_stanley_20261004_002600_garnier_v8_12_release_primer_o2`.
- **Date:** 2026-10-04 (UTC).
- **Status:** accepted — fired at `aDNA-Network/aDNA` `1a25446`, tag `v8.12`.

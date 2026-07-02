---
type: artifact
artifact_id: champollion_standard_currency_audit
title: "M2.1 — Standard currency audit: v2.4 ↔ template v8.3 ↔ ratified ADR corpus (divergence ledger)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m2_1_standard_currency_audit
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, p2, m2_1, standard, currency, audit, divergence_ledger]
---

# M2.1 — Standard Currency Audit: divergence ledger (F-CHM-201..206)

> **Provenance + verification stamp**: audited by an **opus-tier subagent** (at-tier per the [[../missions/mission_champollion_m2_1_standard_currency_audit|M2.1 brief]]; model-tiered execution, fable-orchestrated). The fable main session **independently verified** every load-bearing claim before this artifact landed: F-CHM-201's `:1499` end-line (pre-dispatch grep) · F-CHM-202's §7.2/§5.5-vs-ADR-044 strictness delta (both texts read) · F-CHM-203's missing §5.3 row + the stronger fact that `adna_standard.md` contains **zero** occurrences of "federation" (grep) · F-CHM-206's numbering gaps (015, 018–021 absent from `ls`) · the dev↔image byte-identity of the standard doc (`diff -q` → IDENTICAL). Audit-only per brief: **no standard/ADR edits here** — every finding targets [[../missions/mission_champollion_m2_2_version_cut_adr|M2.2]], [[../missions/mission_champollion_m2_3_glossary_concepts_currency|M2.3]], or defer. Findings also registered in the campaign [[findings_ledger|findings ledger]].

**Scope**: `what/docs/adna_standard.md` (v2.4, 1499 lines) across **Axis A** (ratified ADR corpus, 40 ADRs via [[../../../what/decisions/adr_index|adr_index]]), **Axis B** (shipped template image v8.3 at `/Users/stanley/aDNA/.adna/`, `ab97ad3`), **Axis C** (normative-vs-demonstrative separation, SO-8). Every finding carries file:line evidence read directly; no count/version copied from a doc's self-claim into a verdict (Inviolable §7).

## Summary

- **HIGH: 2 · MED: 2 · LOW: 2** — total **6 findings** (F-CHM-201..206) + **1 escalation** (E1, G2 input).
- **Axis A headline**: the standard-touching ADR set is small (**8 of 40**). Six **FOLDED**, one **PENDING-FOLD** (ADR-044 — the written standard is *stricter* than the ratified decision), one **UNFOLDED** in `adna_standard.md` (ADR-045 wrapper placement — folded into the vault specs, absent from the universal doc). The other 32 are N/A: pure vault-local (21) or "standard-touches" that land in the vault spec corpus / workspace router / governance track, not `adna_standard.md` (11).
- **Axis B is clean for the standard text**: byte-identical dev-graph ↔ image — so the one defect it carries (stale end-line, F-CHM-201) **shipped into the public v8.3 image verbatim**. Governance surfaces agree on the load-bearing facts (16 entity types · v2.4 · ADR-035→v2.3 attribution) across five files; **no count or version drift**.
- **Axis C headline**: the word **"standard" is overloaded** (F-CHM-204) — the universal doc, the `spec_*_ecosystem` corpus, workspace Standing Rules, the governance version track, and workspace rubrics are all "the standard"; this is the root ambiguity under the ADR-045 scope question (E1).
- **Reverse-check clean**: nothing in the standard asserts state the ADR corpus has since superseded (§3.5/ADR-006+008 · §15.4/ADR-011 · §5.1-5.2/ADR-035 · §6.5+§13.2/ADR-042 all current).
- **Version confirmed v2.4 live** (brief acceptance item): title `:3`, frontmatter `updated: 2026-06-29`, changelog `:13-15` all agree at v2.4; the sole version-metadata defect is the `:1499` end-line (F-CHM-201).

## Divergence ledger

| ID | Severity | Claim / divergence | Reference (file:line) | Class | Owner | Target |
|----|----------|--------------------|-----------------------|-------|-------|--------|
| F-CHM-201 | HIGH | **Stale end-line: "*End of aDNA Universal Standard v2.3*"** under a **v2.4** title (frontmatter, top-changelog, §-body all correctly v2.4). Ships **byte-identical in the public v8.3 image**. **Recurring class** — ADR-011 §Context #6 flagged the identical footer-lags-title defect (v2.0 footer vs v2.2 title), fixed once at M06; it re-accrued at the v2.4 bump. Fix trivial; severity reflects shipped-public visibility + recurrence. | `adna_standard.md:1499` (title `:3`); mirrored `.adna/what/docs/adna_standard.md:1499`; recurrence `adr_011…md:46,160` | normative (doc metadata) | Rosetta | **M2.2** (end-line corrects at the version cut; anti-recurrence rule = F-CHM-205) |
| F-CHM-202 | HIGH | **ADR-044 PENDING-FOLD — written standard stricter than the ratified decision.** §7.2 + §5.5 Level-1(4) require the base-6 frontmatter incl. **`status`** on **all** triad content files, with no nested-instance exclusion in the conformance walk. Ratified **ADR-044** makes `status` **optional for `type: directory_index` + `type: coordination`** and **excludes** `what/docs/examples/` + `how/templates/template_node_adna_exemplar/` from the walk. A fork obeying the *written* text over-flags its own template-conformant files. Known-queued for the next `skill_template_release`; ADR-044's own status block records "the reference instance leads the written standard … (as designed)". | `adna_standard.md:524` (§5.5 L1.4) + `:638-660` (§7.2) vs `adr_044…md:19,35-41` | normative | Rosetta | **M2.2** (fold §7.2 status-optional profile + §5.5 nested-instance exclusion into the version cut) |
| F-CHM-203 | MED | **ADR-045 UNFOLDED in `adna_standard.md`.** ADR-045's status line pins the `how/federation/<wrapper>/` placement rule as "a structural convention of the aDNA Universal Standard," and it **is** folded into the vault specs (verified: `spec_forge_ecosystem` + `spec_platform_ecosystem` + `pattern_software_element_context_graph` cite ADR-045). But §5.3's optional `how/` subdirectory table has **no `federation/` row** and the universal doc **never uses the word "federation"** (grep: zero matches). Post-v2.4 accepted ADR (2026-06-30) whose universal-doc fold is outstanding — or whose "Universal Standard" wording overreaches (→ E1). | `adna_standard.md:447-456` (§5.3) vs `adr_045…md:19` + `spec_forge_ecosystem.md:21-23` + `spec_platform_ecosystem.md:37-42` | normative-scope (borderline demonstrative) | Rosetta | **M2.2 + G2-input** (E1 decides: add §5.3 `federation/` row citing ADR-045, OR narrow ADR-045's wording to "ecosystem spec corpus") |
| F-CHM-204 | MED | **"Standard" terminology overload (Axis C blur).** `adna_standard.md` (normative universal doc), the `spec_*_ecosystem` corpus, the workspace-router Standing Rules, the governance/CLAUDE.md version track, and workspace rubrics (ADR-040 "Obsidian Node Exemplar **Standard**", workspace-scoped) are all called "standard". ADRs 037/039/045/029/013/040 assert "standard" touches that are **not** `adna_standard.md`. This makes every "is X folded into the standard?" question ambiguous — the root of F-CHM-203/E1. | `adr_045…md:19` · `adr_040…md:15,31` · `adr_029…md:3` · `adr_037…md:29` · `adr_013…md:4` (`scope: standard`) | demonstrative (register disambiguation) | Rosetta | **M2.3** (glossary/concepts entry disambiguating the "standard" registers; feeds F-CHM-203 wording) |
| F-CHM-205 | LOW | **No anti-recurrence rule for the end-line (§15.4 process gap).** The v2.4 changelog block is complete and current, but §15.4 / the version-cut process has no "the *End of…* footer MUST track the title on each bump" check — the exact vector behind F-CHM-201 (footer lagged across multiple bumps while titles advanced). | `adna_standard.md:13-15` + `:1110-1121` (§15.4) + `:1499` | normative (process) | Rosetta | **M2.2** (add footer==title to the version-cut checklist, or drop the version from the footer) |
| F-CHM-206 | LOW | **ADR index numbering gaps.** 40 rows; ADR numbers **015, 018–021 absent** (verified: `ls` shows 001-014, 016-017, 022-045; tally 39 accepted + 1 amended internally correct; ADR-012 documents a 009→012 renumber). Not a standard-currency defect — an index completeness/legibility note: confirm the gaps are intentional renumbers/withdrawals and annotate as reserved. | `adr_index.md:13` + `what/decisions/` dir listing | n/a (governance index) | Rosetta | **defer** (candidate M2.2 courtesy note: "reserved/renumbered: 015, 018–021" annotation in the index) |

## Axis A appendix — all-40 ADR walk

Legend — **Class**: STD-TOUCH (touches `adna_standard.md`) · N/A (vault-local, or a "standard-touch" landing in vault-spec-corpus / workspace-router / governance-track). **Verdict**: FOLDED / PENDING-FOLD / UNFOLDED / N-A.

| ADR | Title (short) | Class | Verdict | Evidence |
|-----|---------------|-------|---------|----------|
| 001 | Obsidian as knowledge platform | N/A | N-A | tooling choice; Obsidian is Tier-3 per `adna_standard.md:1156-1158` |
| 002 | YAML as lattice format | N/A | N-A | lattice/latlab domain; no normative lattice-YAML mandate in the standard |
| 003 | Claude Code runtime as context topic | N/A | N-A | context-library placement (vault-local) |
| 004 | campaign home stays in aDNA.aDNA | N/A | N-A | vault-boundary ops decision |
| 005 | three-way vault boundary | N/A | N-A | vault-boundary ops decision |
| 006 | GitHub repo rename Agentic-DNA→aDNA | STD-TOUCH | **FOLDED** | `adna_standard.md:14` (errata) + `:187` (§3.5 cites ADR-006) |
| 007 | outer CLAUDE.md → template_workspace_claude | N/A | N-A | template/governance disposition |
| 008 | airlock template stub at `.adna/how/airlock/` | STD-TOUCH | **FOLDED** | `adna_standard.md:14` + `:187` (§3.5 cites ADR-008 for `.adna/` embedding) |
| 009 | `<name>.aDNA/`↔`.aDNA.git` naming | N/A | N-A | by design — "add to standard" (Option C) **rejected** (`adr_009…md:53,186,195`) |
| 010 | publish-skill naming | N/A | N-A | skill-naming (governance) |
| 011 | aDNA semver discipline (two-track) | STD-TOUCH | **FOLDED** | `adna_standard.md:1110-1121` (§15.4) matches `adr_011…md:54-64` |
| 012 | ecosystem spec extraction → what/specs/ | N/A | N-A | router→specs refactor (vault-local) |
| 013 | scope-vs-role rename design test | N/A | N-A | workspace-scope *when*-test; §6.5 covers rename *mechanics* only; `adr_013…md:124,126` "does not modify" |
| 014 | verification handoff topology | N/A | N-A | vault doctrine |
| 016 | per-mission context budget | N/A | N-A | SO-11; §8.7 (`adna_standard.md:786`) explicitly defers sizing to projects |
| 017 | Network.aDNA pattern category + namespace | N/A | N-A | network-vault / LIP-0006 (vault-local) |
| 022 | tool-use logging | N/A | N-A | hooks/SQLite tooling |
| 023 | registry data-projection contract | N/A | N-A | site generator (vault-local) |
| 024 | airlock streamline contract | N/A | N-A | III airlock surface |
| 025 | III-decadal coordination | N/A | N-A | cross-vault III ops |
| 026 | ledger-observation shared primitive | N/A | N-A | III poller primitive |
| 027 | terminal↔harness contract as spec | N/A | N-A | co-signs `spec_terminal_harness_contract.md` (vault spec) |
| 028 | ISS architecture | N/A | N-A | ISS is forge/vault-level (Astro) |
| 029 | ISS standard-touch | N/A | N-A | its "touches" = skill loc + **workspace** Standing Rule + Forge spec — none is `adna_standard.md` (`adr_029…md:94-108`) |
| 030 | ISS skin-family default copy | N/A | N-A | ISS copy defaults |
| 031 | Cloudflare DNS standard | N/A | N-A | DNS/publishing (vault-local) |
| 032 | brand-register pivot | N/A | N-A | site brand direction |
| 033 | network edge overlay seam | N/A | N-A | site generator edge layer |
| 034 | public-face repo + release architecture | STD-TOUCH (marginal) | **FOLDED** | §3.5 base-template `.adna/` model reconciled via errata (`adna_standard.md:14,187,206-212`) |
| 035 | inventory+identity → base types (14→16); v2.3 | STD-TOUCH | **FOLDED** | `adna_standard.md:368` (§5.1) + `:426` (§5.2) + `:400,406` + `:1119` (§15.4 minor-bump promise) |
| 036 | software-graph feedback boundary | N/A | N-A | `feedback/` wrapper (spec-level; `spec_telemetry_feedback_ecosystem`) |
| 037 | software/deployment-graph subtype | N/A | N-A | "NOT a new category"; extends `spec_platform_ecosystem` (`adr_037…md:27-29`) |
| 038 | combined v8.1 release | N/A | N-A | public-image release event |
| 039 | software-element context-graph lens | N/A | N-A | "NOT a new category"; pattern + specs, no frontmatter migration (`adr_039…md:33-35`) |
| 040 | Obsidian Node Exemplar Standard | N/A | N-A | **workspace-scoped** rubric (`adr_040…md:31`); Obsidian = Tier-3 (`adna_standard.md:1156`) |
| 041 | build-scale role-graph subtype | N/A | N-A | twin of 037; `spec_platform_ecosystem.md:50` |
| 042 | fork-template hygiene + rename protocol | STD-TOUCH | **FOLDED** | `adna_standard.md:616-622` (§6.5) + `:1005` (§13.2 Tier-1 item 4) — both landed v2.4 |
| 043 | node-provisioning layer reconciliation | N/A | N-A | AWSBootstrap↔Lighthouse↔cohort platform architecture |
| 044 | per-class frontmatter profiles | STD-TOUCH | **PENDING-FOLD** | §7.2/§5.5 stricter than ratified decision → **F-CHM-202**; `adr_044…md:19,54` self-declares pending |
| 045 | wrapper placement `how/federation/` | STD-TOUCH | **UNFOLDED** (in `adna_standard.md`; folded in specs) | §5.3 no `federation/` (`adna_standard.md:447-456`); specs folded (`spec_forge_ecosystem.md:21` · `spec_platform_ecosystem.md:37-42` · `pattern_software_element_context_graph.md:38,47`) → **F-CHM-203** |

**Walk tally**: STANDARD-TOUCHING = **8** (006, 008, 011, 034, 035, 042, 044, 045) · N/A = **32**. Of the 8: **FOLDED 6 · PENDING-FOLD 1 (044) · UNFOLDED 1 (045)**.

## Axis B notes (image reconcile)

- **`adna_standard.md` byte-identical** dev-graph ↔ `.adna/` image (`diff -q` → IDENTICAL). Consequence: F-CHM-201 is live in the shipped public v8.3 image at `.adna/what/docs/adna_standard.md:1499`. Any M2.2 fix to the dev-graph doc reaches the image only via a `skill_template_release` (two-gate discipline).
- **Governance-surface currency: consistent, no drift.** Image `.adna/CLAUDE.md:251` "16 Entity Types" + `:259` ADR-035/v2.3 attribution; dev `CLAUDE.md:307` (16) · `MANIFEST.md:59` (4/5/7 + ADR-035 v2.3) · `MANIFEST.md:162` ("aDNA Standard v2.4") · `AGENTS.md:20` ("16 base + 11 extension") · `glossary_ontology_extension.md:17` + `glossary_index.md:30` ("base 16"). All coherent.
- **Governance v6.0 (dev) vs v8.3 (image) is expected, not a finding** — different version tracks, adjudicated at P1/M1.4 (F-CHM-008 RECLASSIFIED: "leave at v6.0"). Noted so M2.2 does not re-open it.
- **ADR-045 lockstep spec amendments verified landed** (verify-don't-inherit): `spec_forge_ecosystem.md:21,23,25` · `spec_platform_ecosystem.md:37-42` · `pattern_software_element_context_graph.md:38,47` all show `how/federation/…` + cite ADR-045; residual grep over the three specs found **no** surviving root-placement paths. Only `adna_standard.md` lags (F-CHM-203).

## Axis C notes (normative/demonstrative sweep + changelog completeness)

- **Changelog complete and current** for the v2.3+ era (`:13-15`): v2.3 (ADR-035) · v2.3-errata (ADR-006/008, "no normative change") · v2.4 (§6.5 + §13.2, ADR-042). Title/frontmatter/changelog agree at v2.4; the end-line (`:1499`) is the sole version-metadata defect.
- **Normative MUST-language sweep (exhaustive on conformance/normative sections): clean except the ADR-044 tension.** §5.5 conformance levels (`:513-558`), §6.5 rename MUST (`:618`), §13.2 Tier-1 safeguards (`:1000-1005`), §7.6 extension policy (`:682-691`) are crisply normative and self-consistent. App A reference persona (`:1382`) is correctly "MAY adopt". The one live tension is §7.2/§5.5 vs ADR-044 (F-CHM-202).
- **"Standard" register overload** (F-CHM-204) is the dominant blur — not inside `adna_standard.md`'s prose, but across the ADR corpus referencing it. A newcomer cannot tell from "ISS Standard-touch" (ADR-029) or "Obsidian Node Exemplar Standard" (ADR-040) whether the universal spec moved. Cleanest M2.3 target; the disambiguation makes the F-CHM-203/E1 decision statable.
- **Non-findings (recorded for completeness)**: (1) §5.1's ontology ER skeleton (`:386-407`) is explicitly "minimal" and does not enumerate all 16 base types — acceptable demonstrative minimalism ("Projects extend this skeleton"). (2) Governance entity-count currency is a **positive** result — 16/v2.4/ADR-035 identical across five surfaces.

## Escalations (G2 input — normative-semantic, not resolved here)

- **E1 — Does the aDNA Universal Standard absorb any of the software-element-context-graph apparatus?** ADR-045 pins `how/federation/<wrapper>/` as "a structural convention of the aDNA Universal Standard," yet the entire apparatus it belongs to (consumer federation wrappers, `federation_ref`, Forge/Framework/Platform categories, software-element graphs — ADR-037/039/045) lives **only** in the vault spec corpus; `adna_standard.md` never names it. The G2 question is a **scope boundary**: does §5 (Directory Structure) adopt the `federation/` placement rule — making the universal doc aware of the ecosystem apparatus — or is that apparatus permanently spec-corpus-only, with ADR-045's "Universal Standard" wording narrowed accordingly? A decision about *what the universal standard defines*, not a wording/version fix. Underlies F-CHM-203/204; **pose at G2 before M2.2 writes (or declines) the §5.3 row**. *(F-CHM-202/ADR-044 deliberately NOT escalated — mechanical, already-ratified fold; M2.2 owns it.)*

## Telemetry (Prometheus corpus row)

`tier_planned: opus` · `model_actual: opus` (subagent, fable-orchestrated) · `budget_est: 50 kT` · `budget_actual: ~18 kT` (executor ~10 kT self-reported output + fable orchestration verify/write share ~8 kT) — **−64%, ~2.8× under**; over the ADR-016 2× line → calibration item for G2 (same class as M1.4: verification estimates run high once anchors are pre-resolved at planning tier; audit surface = 8 standard-touching ADRs of 40, smaller than the estimate assumed).

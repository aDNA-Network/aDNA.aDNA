---
type: artifact
artifact_type: publication_log
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 2
target_missions:
  - M06  # consumes this log when picking up the YYYY-MM-DD tag-date placeholder
  - M08b  # consumes this log when copying the upgrade guide to .adna/how/docs/ post-flatten
created: 2026-05-11
updated: 2026-05-11
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m08a, obj2, publication_log, upgrade_guide_finalization, dual_audience_review, docs_site_readiness, post_flatten_path]
related_artifacts:
  - m01_obj8_upgrade_guide_v6_to_v7.md      # the artifact this log finalizes
  - m01_obj8_per_vault_coord_memo_template.md
  - m02_obj5_ecosystem_baseline_locked.md
  - m01_obj6_version_bump_checklist.md
related_decisions:
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
  - adr_009_aDNA_naming_convention.md
related_skills:
  - skill_dual_audience_review.md
---

# M08a Obj 2 — Upgrade Guide Publication Log

> **Deliverable 2b of M08a** (per [[../mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos.md|mission spec]] §Deliverables row 2b). Records the finalization pass on [[m01_obj8_upgrade_guide_v6_to_v7.md|m01_obj8_upgrade_guide_v6_to_v7.md]] performed at M08a Session 2 (2026-05-11). Companion to the finalized upgrade guide (which carries `status: finalized` after this session's edits).

This log is the **paper trail** for the finalization. It records what changed at finalization, the dual-audience verdict, the docs-site publication-readiness check, and the post-flatten path note. M06 reads §1 + §2 before applying tag-date fills; M08b reads §4 before copying the guide post-flatten.

---

## §1 Finalization edits applied

Three categories of edits, all in `m01_obj8_upgrade_guide_v6_to_v7.md` (in-place). No structural changes — 13 sections preserved.

### 1.1 Frontmatter

| Field | Before | After |
|---|---|---|
| `status` | `complete` | `finalized` (inline comment records the M01 → M08a transition) |
| `updated` | `2026-05-08` | `2026-05-11` |
| `finalized` | *(absent)* | `2026-05-11` (new field for publication-readiness axis) |
| `tags` | (existing list) | + `finalized` (last tag) |

The `status: complete` → `status: finalized` flip is the publication-readiness signal. M01 marked the artifact `complete` (authored end-to-end). M08a marks it `finalized` (cross-reference closure done, dual-audience pass passed, ready for M06 tag-date fill + M08b post-flatten copy + Operation Rosetta Phase 8 MDX authoring).

### 1.2 §10 cross-reference closure

Two edits in §10 "Where to get help":

1. The **per-vault coord memos** row in the channels table now names the rendered 2026-05-09 filename pattern (`coord_2026_05_09_v7_<vault_snake>.md`) and the bucket distribution (13 LP-internal `ready` + 4 partner-affiliated `draft`). This lets an operator scanning the guide know exactly what file to look for in their vault's `who/coordination/` directory.
2. The **external operators** paragraph now wikilinks the four partner-affiliated drafts (RareArchive, WilhelmAI, SuperLeague, strategic_interface_protocol) by name and reiterates the `delivery_held_until` discipline. This makes the embargo state legible from inside the guide itself — operators don't need to cross-reference the mission spec to understand why some memos haven't reached them yet.

### 1.3 §13 Status rewrite + body Status note update

The §13 Status section was rewritten from "Complete (draft) — ready for M08a consumption" prose to a finalized-state structured block:

- The status statement now reflects "Finalized for publication (M08a Session 2, 2026-05-11)" with explicit pointers to (a) cross-reference closure, (b) dual-audience pass (this log §2), (c) the finalized frontmatter fields.
- A **Still pending** subsection enumerates the four outstanding owners by name: M06 (tag-date fill), M08b (post-flatten copy + tag-date + receipts), Operation Rosetta Phase 8 (MDX page authoring), M08b (post-tag receipts).
- The Forward-references subsection updates to point at M06 + M08b + Op Rosetta Phase 8 as consumers, replacing the earlier "M08a + M08b + Operation Rosetta site team" formulation that had M08a as a consumer of itself.

The body's leading **Status: draft** blockquote (just below the title) was also updated to **Status: finalized for publication (M08a Session 2, 2026-05-11)** with an added pointer to this log §3 for the MDX-readiness check.

### 1.4 What was NOT edited

By design (per mission spec §Obj 2):

- **`YYYY-MM-DD` v7.0 tag date placeholders** — left as-is. M06 fires the tag and fills the date; M08b updates retrospectively.
- **§11 Self-reference + dual-audience block** — preserved verbatim. The block itself documents the dual-audience discipline; it would be self-referentially incoherent to edit it during a dual-audience pass.
- **Section structure** — 13 sections preserved exactly. No splits, no merges, no renames.
- **Forward-references to ADRs 008 / 010 / 011** — preserved as forward-references; their target missions haven't shipped, so the references remain accurate as-of.
- **The M01 mission cross-link** at the deliverable-number footnote (`> **Deliverable 23 of M01**`) — preserved. M01 produced this artifact; M08a finalizes it.

---

## §2 Dual-audience review verdict

Run per [[../../../../how/skills/skill_dual_audience_review.md|skill_dual_audience_review.md]]'s four-criterion-per-audience protocol. Target file: `m01_obj8_upgrade_guide_v6_to_v7.md` (post-§1 edits).

### Developer audience

| Criterion | Verdict | Notes |
|---|---|---|
| Technical precision | **PASS** | Migration commands at §2 + §3 are verbatim-runnable. Spec-accurate: §0 + §5 + §8 + §13 all carry ADR cross-links with explicit accepted/proposed/forward-reference status. v6.0 → v7.0 version semantics correct (Major Governance bump; Standard track unchanged at v2.2 — explicitly stated). |
| Actionable | **PASS** | Every breaking change pairs with a migration command. §6 validation runbook is a 10-row table with command + expected output + failure pointer. Operators can mechanically discharge the migration without reading the mission spec or any M01 artifact. |
| Structured for scanning | **PASS** | §1 At-a-glance table is the entry point (9-row change summary × 4 columns). §2/§3 follow same structure (What changes / Why / Migration / What stays the same). §5 separates "just `git pull`" changes. §6 validation runbook. §10 channels table for help. A developer can find any technical detail in <30 seconds via the table-of-contents pattern of the sections. |
| Correct terminology | **PASS** | aDNA terms consistent throughout: triad, FAIR, lattice, module, dataset, vault, forge, platform, framework, org-vault, airlock, mission, campaign, ADR. No drift from the canonical `adna_standard.md` v2.2 vocabulary. |

**Developer verdict: PASS.**

### Non-developer audience

| Criterion | Verdict | Notes |
|---|---|---|
| Plain-language opening | **PASS** | §0 first sentence ("aDNA v7.0 is the first Major **Governance** bump since the standard's track-split") names a concrete change and is followed immediately by a plain-language frame ("If you only consume the Standard, no action is required of you in v7.0"). A 14-year-old can follow the opening — the technical "Major Governance bump" phrase is paired with a non-technical "no action required" guarantee within two sentences. |
| Mental model provided | **PASS** | §0 paragraph 2 frames the migration as a one-cycle event with concrete reasons (cleaner clone, real `git push`, opt-in observability). §1 table-summary is the primary mental model: 2 breaking + 5 pull-based + 4 opt-in = 11 changes; readers immediately know how much actually applies to them. §9 explicitly names what doesn't change. |
| No jargon without explanation | **PASS** | Technical terms used: "flatten" (explained inline §2 What changes), "rsync workaround" (explained §3 What changes), "pre-push hook" (explained §3 Pre-push hook section + table of 7 rules), "airlock pattern" (explained §7 with When-to-adopt list), "snake_case" (used in §8; inferable from context). "ADR" appears in cross-references — uses the long-form wikilink (e.g., `[[ADR-006]]` resolves to a full doc), so a curious reader can follow. |
| Progressive disclosure | **PASS** | §0 gives the why in 2 paragraphs. §1 gives the at-a-glance summary in one table. §2-§5 give the per-change detail; §6 is the runbook; §7-§8 are opt-in deepens; §9 is the negative-space coverage; §10 is the help routing. Readers can stop at any §-level boundary and have a coherent partial understanding. |

**Non-developer verdict: PASS.**

### Overall

**Verdict: PASS** (both audiences). The guide is publication-ready for the docs-site MDX authoring step.

One **soft observation** (not a fail; recorded for posterity): §0 paragraph 1 leads with "Major Governance bump" — a developer-flavored framing. A non-developer-first opening might lead with the operator outcome ("Cleaner workspace setup, real `git push` for vault publishing, and a few new patterns you can take or leave") before naming the version number. This is a stylistic call; the current opening is correct for the dual-audience discipline (both audiences want to know what version they're on within the first sentence) and was preserved unchanged.

---

## §3 Docs-site publication-readiness check

Target docs-site path: `adna-docs.vercel.app/learn/upgrade-v6-to-v7`.

Source MDX path (when authored): `adna-docs/site/src/content/learn/upgrade-v6-to-v7.mdx`.

This authoring step is **owned by Operation Rosetta Phase 8** (the docs-site is Op Rosetta's purview; v2 infrastructure produces the prose but doesn't author the MDX page). The check below tells the Phase 8 mission what's MDX-ready as-is vs. what needs MDX-specific work.

### 3.1 What stands as-is

- All 13 section headings (`##` and `###` levels) — render correctly in Astro MDX.
- All wikilinks ([[X|label]]) — Astro MDX handles them via the existing Astro plugin chain; targets resolve to either content pages or anchor links.
- All bash code fences — render correctly with the existing syntax highlighter.
- All tables — render correctly; the dual-audience-friendly column count (≤4 columns) holds throughout.
- The blockquote `> **Status: finalized for publication...**` opening — renders as the standard Astro callout.

### 3.2 What needs MDX-specific adaptation

- **Internal wikilinks** that resolve to artifact files (e.g., `[[m01_obj0_ecosystem_matrix.md|...]]`) — the docs-site doesn't expose campaign artifacts as pages. Phase 8 should either (a) replace these with prose pointers ("see the M01 ecosystem matrix in the vault for the full 19-vault list"), or (b) link to the vault's GitHub blob URL if the vault is public-mirrored. Since `aDNA.aDNA` is private (verified at the 2026-05-11 wind-down audit), option (a) is the default.
- **Internal wikilinks** to ADRs (e.g., `[[ADR-006]]`) — same rule. ADR pages either don't exist on the docs site yet, or live at `/reference/adr/<adr-num>`. Phase 8 should resolve per the site's actual ADR-page convention.
- **Frontmatter** — the artifact frontmatter (campaign/mission/objective lineage) is not docs-site-relevant. Phase 8 substitutes the standard Astro MDX frontmatter (title, description, layout, etc.) for the page.
- **Anchor IDs** — Astro auto-generates anchors from headings. The current `§N` heading naming is human-friendly but produces anchors like `#1-at-a-glance-change-summary`. Phase 8 may want explicit `id:` attributes on headings for stable deep-links.
- **The §11 self-reference block** — its claim "This guide IS a v6→v7 migration that was authored *while the host vault is still on v6*" is true for the artifact file but slightly off for the published page (the docs site is on whatever Astro version is current). Phase 8 may want to revise the self-reference text or omit the §11 block for the published page. Leaving it as-is is also defensible.

### 3.3 Recommended Phase 8 mission tag

`mission_rosetta_phase8_upgrade_guide_mdx` (or similar). 1-session scope. Pre-requisite: M06 has filed the tag (so the `YYYY-MM-DD` placeholders are resolved). Otherwise the MDX page can ship pre-tag with placeholder dates and update post-tag.

### 3.4 Coordination with `campaign_rosetta`

Phase 8 is `campaign_rosetta`'s next phase (queued; Phases 0-7 closed 2026-04-26). This artifact's MDX authoring is naturally a Phase 8 mission. The cross-graph coordination memo for this handoff is **not** authored here — Phase 8 mission planning will include the cross-link if needed. As of 2026-05-11, no Phase 8 mission has opened.

---

## §4 Post-flatten path note (for M08b)

**Pre-flatten path** (current): `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md`.

**Post-flatten path** (after M03 lands): `.adna/how/docs/upgrade_v6_to_v7.md`.

M08b is the mission that performs the copy + filename rename. M08b reads:

1. This log §1 for the finalization state at the source path.
2. The finalized guide itself for the content to copy.
3. The post-flatten directory `.adna/how/docs/` (created at M03) for the destination.

M08b's copy operation should:

- Strip the artifact frontmatter (campaign/mission/objective fields) and replace it with a doc-level frontmatter appropriate for `.adna/how/docs/` (`type: doc`, `title:`, etc. — pattern to be set at M08b based on the conventions of the post-flatten `how/docs/` directory).
- Update the leading `> **Deliverable 23 of M01**` blockquote to a doc-level introduction ("Migration guide for upgrading aDNA vaults from Governance v6.0 to v7.0").
- Update wikilinks that reference campaign-internal artifacts to either remove them or re-target them to public-facing references (similar to the docs-site adaptation in §3.2 above).
- Fill the `YYYY-MM-DD` tag-date placeholders (if M06 has already fired the tag by then).

M08b's AAR documents the actual copy + adaptations applied.

---

## §5 Cross-references + status

**Inputs consumed**:

- [[m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide (now finalized)]] — the artifact this log finalizes.
- [[m01_obj8_per_vault_coord_memo_template.md|per-vault coord memo template]] — cross-referenced for §10 closure.
- [[m02_obj5_ecosystem_baseline_locked.md|M02 Obj 5 locked baseline]] — §4 manifest values verified consistent with §3 of the guide.
- [[../../../../how/skills/skill_dual_audience_review.md|skill_dual_audience_review.md]] — protocol followed for §2.
- 17 rendered coord memos at `who/coordination/coord_2026_05_09_v7_*.md` — sampled (SiteForge + RareArchive + SuperLeague + wga) for cross-reference closure spot-check; all four match the §3 publish-skill rewrite description and the §10 channels table.

**Outputs consumed by**:

- [[../mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos.md|M08a mission file]] — finalization recorded in mission progress; mission stays `status: in_progress` (Obj 3 + Obj 4 remain).
- [[m08a_github_release_notes_v7.md|M08a Obj 3a release notes draft]] — sibling deliverable; references this log for finalization context.
- [[m08a_readme_badge_spec.md|M08a Obj 3b README badge spec]] — sibling deliverable.
- [[m08a_social_comms_post_draft.md|M08a Obj 3c social/comms post draft]] — sibling deliverable; references the docs-site URL that §3 here documents the publication path for.
- M06 (forward) — consumes §1 frontmatter rationale + §3 docs-site readiness check when applying the v7.0 tag.
- M08b (forward) — consumes §4 post-flatten path note.
- Operation Rosetta Phase 8 (forward) — consumes §3 docs-site readiness check for the MDX authoring mission.

**Status**: complete (M08a Session 2, 2026-05-11). The upgrade guide it logs is finalized at the same session.

---

## §6 Self-reference + dual-audience (Standing Orders #7 + #8)

**Self-reference**: This log is the dual-audience verdict for [[m01_obj8_upgrade_guide_v6_to_v7.md|its sibling guide]], applied by the skill the guide §11 already documents. The guide demonstrates the discipline; this log measures the guide against the discipline; the log itself follows the discipline (developer-readable §1 + §2 + §4; newcomer-readable §3 + §5). M08a's authoring class is satisfied: the campaign measures what it does by doing it.

**Dual-audience**:

- **Developer reads** §1 (finalization edits — what literally changed, file path + diff-style table), §2 (dual-audience verdict with PASS/FAIL per criterion), §4 (post-flatten path mechanics for M08b). Verbatim, mechanical, scannable.
- **Newcomer reads** §3 (docs-site publication-readiness check explains what the guide's published form will be and who owns the authoring), §5 (cross-references show what feeds this log and what consumes it). Each subsection self-contained; no required prior context.

Both reads land at the same conclusion: **the upgrade guide is publication-ready; outstanding owners are named; the docs-site publication is Phase 8's mission.**

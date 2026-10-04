---
type: artifact
title: "Standard errata drafts for the v2.6 window — I-15 (§4.1 vs §5.5 required files) · I-17 (§6.5 cites a §15 rule that is not there) — DRAFT ONLY, nothing normative changed"
created: 2026-10-04
updated: 2026-10-04
status: draft            # ⛩ no edit to what/docs/adna_standard.md before the operator's §7.7 at the v2.6 window (ADR-063, proposed)
last_edited_by: agent_rosetta
mission_id: mission_primer_followup_sweep
source: how/missions/artifacts/primer/source_inconsistencies.md (I-15 · I-17; I-11 moved to O1 — it was a vault-local citation, fixed at CLAUDE.md §Git-Ops item 6)
adr: what/decisions/adr_063_standard_errata_v2_6.md
tags: [artifact, primer, errata, standard, v2_6, draft]
---

# Standard errata drafts (v2.6 window)

> **Plain-language version first**: while writing a primer *about* the standard for an outside reader, two places were found where the standard's text disagrees with itself. The primer did not fix them (a document about a rule must not quietly rewrite the rule). These are the proposed corrections, written out in full so the operator can accept, amend or decline each one at the standard's next version gate. Until then the standard's text is unchanged and both readings stand.

Each erratum quotes the text as it is (v2.5, read 2026-10-04 at `what/docs/adna_standard.md`), names the contradiction, and proposes the minimal textual change. Line numbers are from `grep -n` on 2026-10-04 and will drift.

## E-1 (I-15) — §4.1 marks four governance files MUST; §5.5 Starter requires three

**As written.** §4.1 "Governance File List" (line 225 ff.) marks `CLAUDE.md`, `MANIFEST.md`, `AGENTS.md` and `README.md` as **MUST** and `STATE.md` as SHOULD. §5.5 "Conformance Levels" (line 515 ff.) says a **Starter** instance MUST have `CLAUDE.md`, `MANIFEST.md`, `README.md`; `STATE.md` and a root `AGENTS.md` arrive at **Standard** (item 5). `adna_validate.py` implements §5.5.

**The contradiction.** A Starter-conformant instance without a root `AGENTS.md` satisfies §5.5 and violates §4.1 at the same time. The validator follows §5.5, so the enforced rule and the stated rule differ.

**Proposed fix (minimal, §4.1 side).** Change the `AGENTS.md` row's Required cell from `MUST` to **`MUST (Standard+) · SHOULD (Starter)`** and the `STATE.md` row from `SHOULD` to **`MUST (Standard+) · SHOULD (Starter)`**, and add one sentence under the table: *"Requirement levels in this table are read against the conformance level declared in §5.5; where the two disagree, §5.5 governs."* §5.5 is untouched — it is the level definitions that the validator already enforces.

**Alternative (rejected here, offered for the gate).** Raise §5.5 Starter to require `AGENTS.md`. Rejected because it would un-conform every existing Starter instance, which §15.4 forbids a minor version to do.

## E-2 (I-17) — §6.5 cites "archive-don't-delete, §15"; §15 has no such rule

**As written.** §6.5 "Rename Protocol" (line 620 ff.) says the sweep MUST NOT rewrite historical cross-references and, in its scope paragraph, invokes an *archive-don't-delete* rule attributed to **§15**. §15 "Archive & Versioning" (line 1100 ff.) contains §15.1 archive *pattern* (sync vs git; "archive-don't-**rename**" for sync environments), §15.2 session-history retention, §15.3 instance versioning, §15.4 standard versioning. The words "archive-don't-delete" / "never delete" do not appear in §15.

**The contradiction.** A real rule (archive, never delete — the fleet's SO-6/SO-7, this vault's Standing Order 6) is cited to a section that does not state it; a reader following the pointer finds a *rename* rule for sync environments and nothing about deletion.

**Proposed fix (two lines, §15 side).** Add to §15.1, after the environment-specific lists: *"**Archive-don't-delete** (both environments): governance records, decisions, mission and session files are archived — moved under `archive/`, `history/`, or kept in git history with a status flip — never deleted. Deletion of a record is itself a recorded decision."* Then §6.5's pointer resolves. §6.5 is untouched.

**Alternative.** Repoint §6.5 to wherever the rule *is* stated. Rejected here because the rule is stated nowhere normative today — the primer's Appendix A lists it as practice, not standard — and the pointer is evidence the standard already believes it has it.

## E-3 (I-11) — withdrawn from this file

"Rule 10" was cited by *this vault's* `CLAUDE.md`, not by the standard; the workspace router has nine Standing Rules and the rule is HAUSSMANN convention 10. Fixed at the citation (O1, 2026-10-04). No erratum.

## What happens next

Nothing, until the operator opens the v2.6 window. Then: E-1 and E-2 are each a §7.7 line in [[../../../what/decisions/adr_063_standard_errata_v2_6|ADR-063]]; an accepted erratum is applied to `adna_standard.md` with its version bump and rides the next template release (the standard version is one of the five surfaces `skill_template_release` moves).

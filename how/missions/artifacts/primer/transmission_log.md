---
type: artifact
mission_id: mission_primer_adna_for_data_engineers
objective: O4
title: "Transmission log — what left (or is staged to leave) the lattice, by hash, date, channel and release reference"
created: 2026-10-04
updated: 2026-10-04
status: active
last_edited_by: agent_rosetta
executor_tier: fable
executor_runtime: claude
session: session_stanley_20261004_041949_garnier_g_inbox_primer_o4_s21b
tags: [artifact, primer, o4, o5, transmission, sha256]
---

# Transmission log

[D] Every row's hash is `shasum -a 256` run at the sitting named; a row is appended, never edited (SO-6). Release reference = the vault commit that carries the bytes.

## Release record — v1.0, 2026-10-04

| Artifact | Path (from this vault's root) | SHA256 | Size / count |
|---|---|---|---|
| Primer source (Markdown) | `what/docs/adna_primer_for_data_engineers.md` | `85353a8361c1ec022502e0895b0905af224404774a39ac6ad03a746face4c846` | body byte-identical to v0.2 (`cmp` against HEAD `188c258`'s body below the frontmatter — the read gate approved without amendment); frontmatter: `version: "1.0"`, `status: active` |
| Primer rendered (PDF) | `how/missions/artifacts/primer/adna_primer_for_data_engineers_v1.pdf` | `8713b20e27fdf8fd8ff78c442efc1a5ee6f2e3f4920331b24c3dc4b40213769b` | 914,290 bytes · **25 pages** (pypdf) · 5 figures, one per page-with-images (4 · 7 · 11 · 15 · 17), each inspected rendered |
| Cover note | `how/missions/artifacts/primer/cover_note_andy.md` | `298d54ac12a3039a747dc3b4373ecd7cc2980e10d35d3ae2d5c7d373d6531263` | body **2,547 characters** (derived by script; limit 4,000) — the body below the marker line is what travels; the frontmatter does not |

**Render method (delta from the mission's deliverables row, stated):** the row named `pandoc + tectonic`. Used: the five Mermaid blocks rendered to SVG with mermaid-cli 12.0.0 (`npx`, scratchpad), each `<img>` sized from its SVG `viewBox` (65 · 170 · 162 · 170 · 44 mm, capped at the text width and 230 mm tall), `pandoc` 3.x → standalone HTML5 with embedded resources, then **headless Chrome `--print-to-pdf`** (A4, 20/18 mm margins, no header/footer). Reason: `tectonic` takes no SVG without a rasterizing step and the first Chrome pass showed a real defect the method caught — unconstrained SVGs scaled to the page width and split across pages (27 pages, figures cut); sizing from the `viewBox` fixed it (25 pages, one figure per page-with-images). The duplicated pandoc title block was removed in the same pass; a one-line version/date strip sits under the H1. A reader of the PDF sees the primer body only — no vault frontmatter.

**Scrub at release (`scrub_control.md` runs table):** 76-regex list rebuilt from the 8 rules + the "Also" row; v1.0 body **0** · v1.0 frontmatter **0** (one hit found and removed first — the `updated:` comment had named the mission ID; rule 2) · cover note **0** · planted control **1** (RED ✓) · gitleaks `--no-git` **0** on all three files.

**Operator gate:** v0.2 read and **approved as v1.0 without amendment**, 2026-10-04, plan-time `AskUserQuestion` (ruling recorded in the mission's §7.7 block).

## Transmission record

| Date (UTC) | Channel | Recipient | Carried | Release ref | Status |
|---|---|---|---|---|---|
| 2026-10-04 | memo → `Fluxer.aDNA/who/coordination/inbox/` (the Fluxer vault's agent delivers on Fluxer; operator-approved per act) | Aspasia (Fluxer.aDNA), for Andy Zhang | the three hashes above + the cover-note body as the message text; the PDF by attachment path or carried link once one exists | this sitting's commits on `vitrine/design` | staged → see the memo's `status` |
| — | (Andy's receipt / reply) | — | T0 — never harvested, never quoted into a durable artifact | — | — |

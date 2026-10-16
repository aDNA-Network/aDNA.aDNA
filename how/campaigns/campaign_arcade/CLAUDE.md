---
type: governance
subtype: campaign_claude
campaign_id: campaign_arcade
created: 2026-10-15
updated: 2026-10-16
status: active
last_edited_by: agent_rosetta
tags: [governance, campaign, arcade]
---
# CLAUDE.md — Campaign ARCADE

> ⛩ Ratified at the plan gate 2026-10-15 (charter §7.7, R3). Later gates G1–G5 are human; outward acts are each their own GO.

## Campaign identity

| Field | Value |
|---|---|
| Campaign | `campaign_arcade` — Operation ARCADE, side campaign of `campaign_garnier` |
| Owner · executor | Stanley · Rosetta (`agent_rosetta`, runtime claude) |
| Status · phase | active · P1 (A0.1 · A1.1 · A1.2 · A1.3 done; A1.4 next; G1 pending) — updated 2026-10-16 |
| Charter | [[campaign_arcade]] · CURRENT pointer: [[session_prompts_arcade]] |

## Quick start

1. Read root `CLAUDE.md`, `STATE.md` ⏭ QUEUED, `how/sessions/active/`, `who/coordination/inbox/`, `git status` — **at the open and again at the seal** (Vauban's 10-07 ask #2, adopted here before it is ruled for the template).
2. Read [[campaign_arcade]] §4 for the mission ladder and §5 for the gate states; read the current mission card; open a scoped Tier-2 session **at the open**, never at the close.
3. Do not execute a queued mission whose gate has not been ruled.

## Conventions

GARNIER's twenty (by pointer: `../campaign_garnier/CLAUDE.md`, with the HAUSSMANN originals at `../campaign_haussmann/CLAUDE.md` §Standing conventions) apply unchanged — above all provenance tags on every finding, claims move down to verifiability, same-diff gate law, headless-first, archive-never-delete, single-writer lease, explicit-path staging, proposals-not-edits for ratified text. **Four ARCADE rules on top:**

1. **Memos, never edits, across an estate boundary.** ADR-027 (aDNALabs), ADR-008 / VISION (AILedger), Lister's artifacts (Jake's forge), Home's inventory — proposals go by memo under ADR-061's three-valued authorship; nothing of theirs is written from here (HAUSSMANN convention 10).
2. **No public surface names the company until the operator says "publication"** (ruling R2, 2026-10-15). Private-side objects (ADRs, memos, campaign files) may; `site/`, registry data, the primer and anything scrubbed for an outside reader may not. Hestia's B7 `never` and SR-6 govern.
3. **Every ADR number is qualified by its vault.** Exchange ADR-045/052/062 are not ours; aDNA.aDNA ADR-025 is not aDNALabs' ADR-025. A bare `ADR-0NN` in a new file is a defect; grep for it at each close.
4. **Every claim about a product's state carries its tense** — `PASS` (true today, verified) · `TAUGHT-AS-DESIGN` (ratified design, not yet live) · `HORIZON` (intended) — the ratified `exchange-adoption-path` labels. "Near launch" is a `TAUGHT-AS-DESIGN` claim until the product's own gate says otherwise.

## Output contract

- **Sessions** → `aDNA.aDNA/how/sessions/active/session_stanley_<UTC>_arcade_<slug>.md`, Tier 2, filed to `history/YYYY-MM/` at close; stamps are UTC.
- **Campaign artifacts** → `how/campaigns/campaign_arcade/artifacts/p<N>/`.
- **Standard-side objects** → their canonical homes (`what/specs/`, `what/decisions/`, `what/patterns/`, `how/templates/`), `status: proposed` until signed.
- **Memos** → `who/coordination/coord_<date>_rosetta_to_<persona>_<slug>.md`, `outbound_ready`; delivery only on a per-memo GO, by the drop-box doctrine (`what/doctrine/doctrine_coordination_dropbox.md`), stamped before the copy, HEAD read in the same command as the copy.
- **GARNIER** → amendments as proposals in `../campaign_garnier/artifacts/amendments/`, ruled at DP3; the parent's mission frontmatters move only on ruling.

## What the parent expects back

An amendment record at A5.1 (claims lanes · docs-tranche re-scope · registry cards · VITRINE disposition), each row with its evidence; and a budget actual per ADR-016 at every mission close so DP3's P2 forecast can take this campaign's load into account.

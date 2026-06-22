---
type: artifact
artifact_class: credibility_traceability
campaign_id: campaign_operation_adna
title: "Keystone credibility claims-traceable pass — site ↔ shipped v8.0 base"
created: 2026-06-22
updated: 2026-06-22
status: active
last_edited_by: agent_rosetta
session: session_stanley_20260622T075334Z_keystone_c1_stage2
tags: [credibility_integrity, keystone, dp2, c1_stage2, claims_traceable, standard_currency]
---

# Keystone credibility claims-traceable pass (2026-06-22)

> Program Standing Order #5 / Risk "credibility leakage at the joined launch": before the keystone, the
> claims-traceable pass runs across **both** surfaces together — the site's claims must resolve to what
> **Hearthstone actually shipped**. This artifact is that pass. It is the audit record for the credibility
> seam ([[coordination_ledger]] ★ C-1 row) and feeds DP2 readiness ([[campaign_operation_adna]] §Program gates).

## Ground truth (what Hearthstone shipped)
- Public image **`aDNA-Network/aDNA`** @ **v8.0** (governance 8.0 / standard **v2.3**), tag `v8.0` @ `adae20c`
  (Hearthstone P5, 2026-06-19; 13/13 post-push smoke GREEN). Local mirror `~/aDNA/.adna` synced @ `ad72979`.
- ADR-035: `inventory` (WHAT) + `identity` (WHO) promoted to **base** entity types → **16 base types** (was 14).
  Canonical rows: `.adna/what/ontology.md:64` (15 `inventory`), `:65` (16 `identity`).

## Claims-traceable table

| # | Claim on the site | Surface(s) | Resolves to (shipped) | Verdict |
|---|-------------------|-----------|-----------------------|---------|
| 1 | 5 original proof-links ("inspect the actual files") | `/learn/what-is-adna` | root `CLAUDE.md`, `.adna/`, `skill_onboarding.md`, `skill_project_fork.md`, `template_workspace_claude.md` — all in public image | **VERIFIED-200** (stage-1, D1; re-confirmed) |
| 2 | **NEW** exemplary proof-links (the polished base) | `/learn/what-is-adna` | `.adna/how/templates/template_home_claude.md` + `.../template_node_adna_exemplar/` | **FIXED + VERIFIED-200** (WebFetch, public repo, this session) |
| 3 | "real, inspectable **and polished** — a fresh clone offers to bootstrap a Home" | `/learn/what-is-adna` prose | Hearthstone's shipped bootstrap-offer + exemplar bundle | **FIXED** (fixed→exemplary; commit-only) |
| 4 | Entity count = **"14 base entity types"** | 11 files (see Tier-1) | **16** (ADR-035, v2.3) | **FIXED** → 16 everywhere (commit-only) |
| 5 | Standard version = **"v2.2"** | `standard.ts` + ~10 MDX/prose | **v2.3** | **PARTIAL** — constant→v2.3 (home/index/llms FIXED); MDX prose + spec mirror **DEFERRED** (Tier-2) |
| 6 | Publisher / JSON-LD = "aDNA Network" (C-3) | `seo.ts`, `canonical.ts`, footer | n/a (brand fact, single-sourced) | **VERIFIED-OK** (no change; G4/G14/G16 green) |
| 7 | C-2 marquee excerpts (`aDNA.aDNA/CLAUDE.md`, `mission_wadna_p3_iterate.md`) | `home.ts` steps | real dev-vault files, framed as **"this site's own vault"** — explicitly distinct from the public image | **VERIFIED-OK** (honest framing; no change) |
| 8 | NetworkDiagram node labels (C-4) | `NetworkDiagram.astro` (data-driven) | keeper-set vault names = **pt19-owned** | **FLAGGED — verify-after-pt19** (untouched) |
| 9 | Agentic surfaces "N base entity types / version" | `/llms.txt`, `/llms-full.txt` | 16 / v2.3 (via `standard.ts` constant) | **FIXED** (constant-driven) |
| 10 | install clone commands / `install_truth.json` | `/get-started`, `/network`, README | version-agnostic clone (Hearthstone AAR: no per-release fixture bump) | **VERIFIED-OK** (no change) |

## Tier-1 — FIXED this session (commit-only, 16 site files + `standard.ts` constant)
Count `14 → 16` (+ 2 new base rows where types are enumerated): `data/standard.ts` (`ENTITY_TYPE_COUNT`,
drives home stats + index meta-tag + both agentic endpoints) · `pages/learn/what-is-adna.astro` (prose +
heading + table + **7 proof-links**) · `docs/ontology.mdx` (count + 2 rows + Mermaid) · `docs/open-standard.mdx`
(count + count-table rows) · `docs/base-extension.mdx` (count + table rows) · `docs/glossary-ontology-extension.mdx`
· `docs/adna-vs-para.mdx` · `docs/solo-developer.mdx` · `guides/extend-the-ontology.mdx` · `reference/agent-first-guide.mdx`
· `reference/migration-guide.mdx` · `pages/researchers/index.astro` · `data/startup-first-hour.ts` · `data/enterprise.ts`.
Version: `standard.ts` `STANDARD_VERSION v2.2 → v2.3` (dynamic surfaces only).

## Tier-2 — DEFERRED (keystone precondition; ★ in ledger) — standard-currency / spec-mirror v2.3 port
Reason: the normative spec mirror is RFC-2119 text that must be **ported**, not number-swapped; doing the
version half-way creates intra-page contradictions. Group as one coherent sweep (couples to Hearthstone's
own deferred "catch-up release"). Must land **before the keystone deploy** so the site reads v2.3 the day
it launches:
- `reference/specification.mdx` — `version: "2.2"` (`:6`,`:9`,`:1479`) + §5.1 add `inventory/`, §5.2 add
  `identity/` (the directory-structure tables), §5.4 skeleton / ERD as needed.
- Version footers `v2.2 → v2.3`: `open-standard.mdx:22,40` · `adna-vs-{notion,johnny-decimal,para,zettelkasten,plain-markdown}.mdx`
  · `reference/design-rationale.mdx:8`.
- `governance-model.mdx:42,52,76` — **leave** (illustrative version-bump examples, correct as-is).

## Flagged — pt19-owned (do NOT touch; Production-Tidy/Hestia)
NetworkDiagram keeper-set names (C-4) + any pre-rename vault slugs in `/llms.txt` link targets + `/vaults/graph`
no-JS labels. Verify-after-pt19. `vaults.json` / `install_truth.json` are regenerated by pt19, never hand-edited here.

## Verification record (this session)
- `npx astro build` → **163 pages, 0 errors** (no `prebuild` regen; no `vaults.json`/`install_truth.json` churn).
- `npm run test:gates:fast` → **166 passed**; `npm run test:gates` → **281 passed (1.5m)** — baseline held, no flake.
- Live-200 (public `aDNA-Network/aDNA`, WebFetch): `template_home_claude.md` ✓ · `template_node_adna_exemplar/` ✓.
- Count residue sweep → clean (only date false-positives).

## What remains for DP2 (keystone joined launch)
1. **Condition #1 (WEBSITE):** C-1 stage-2 + count reconciliation **staged commit-only** ✓; remaining = the
   **Tier-2 standard-currency / spec-mirror v2.3 port** (above) + the full improved-site deploy (`vercel --prebuilt --prod`).
2. **Condition #2 (Hearthstone v8.0):** ✅ **GREEN** (shipped 2026-06-19).
3. **Condition #3 (pt19):** ⏳ pending — Production-Tidy/Hestia; unblocks C-4 names + vault-name currency.
→ The joined launch waits on **pt19** + the **Tier-2 currency port** + the **operator's DP2 GO**.

---
type: session
session_id: session_stanley_20260622T204818Z_tier2_v23_specmirror
created: 2026-06-22
status: completed
agent: agent_stanley
persona: rosetta
campaign: campaign_operation_adna
mission: "(program-level keystone-readiness — Tier-2 standard-currency / spec-mirror v2.3 port)"
token_budget_estimated: "50-80 kT (content-load; standard-doc + site spec-mirror + footers + build/gates + closeout)"
token_budget_actual: "~60-70 kT (content-load; within band — 9 content files + standard doc + build/gates + 2 program artifacts + STATE)"
plan_ref: "~/.claude/plans/please-read-the-claude-md-squishy-goose.md"
tags: [session, operation_adna, keystone, dp2, tier2, spec_mirror, v2_3, adr_035]
---

# Session — Operation aDNA: Tier-2 standard-currency / spec-mirror v2.3 port

## Intent
Continue Operation aDNA toward the keystone joined launch (DP2). The one non-gated, in-vault remaining
precondition is the **Tier-2 standard-currency / spec-mirror v2.3 port** (★ in `coordination_ledger.md`,
named verbatim in the prior session's Next-Session-Prompt). Operator-approved scope (B): author the §5
`inventory`/`identity` prose once (grounded in ADR-035) and apply it to BOTH the dev standard
(`what/docs/adna_standard.md`) and the site mirror (`specification.mdx`), plus flip the remaining
v2.2→v2.3 prose footers. Commit-only — no push, no deploy (DP2 is the operator's GO).

## Material finding (drove scope B)
The v2.3 promotion (ADR-035) was only cosmetically materialized: the shipped `.adna/` standard has a v2.3
title but its §5.1/§5.2 body still shows the 14-type structure (no `inventory/`/`identity/` rows, ERD omits
both); the dev `adna_standard.md` was still v2.2 throughout (end-line even read v2.0 — pre-existing drift).
Meanwhile the site's `ontology.mdx` / `open-standard.mdx` / `base-extension.mdx` / `standard.ts`
(`STANDARD_VERSION='v2.3'`, `ENTITY_TYPE_COUNT=16`) already commit to 16/v2.3. So the port was partly
authoring (not pure mirroring): the §5 rows were composed from ADR-035 D1 (placement `what/inventory/` +
`who/identity/`; un-namespaced base types; "available, not mandated" → **Optional** tier, so §5.5
conformance + the Starter/Standard skeleton stay unchanged). The source of truth (dev standard) is
corrected here; the public `aDNA-Network/aDNA` image's spec body fully closes only at a future gated
`skill_template_release` (recorded for Hearthstone's deferred catch-up).

## Work log
- Read ADR-035 → confirmed inventory/identity are base WHAT/WHO types, Optional presence; placements
  `what/inventory/` + `who/identity/`.
- **Dev standard `what/docs/adna_standard.md` → v2.3:** frontmatter (title, `updated`, `last_edited_by`),
  header comment (`<!-- v2.3 | 2026-06-22 | inventory+identity promoted to base (ADR-035) -->`),
  end-line (`v2.0` → `v2.3`), §5.1 `inventory/` Optional row, §5.2 `identity/` Optional row, ERD
  (`what ||--o{ inventory`, `who ||--o{ identity`).
- **Site spec-mirror `site/src/content/reference/specification.mdx` → v2.3:** version (L6), comment (L9),
  end-line (L1479), + the identical §5.1/§5.2/ERD additions.
- **8 prose footers v2.2→v2.3:** `open-standard.mdx` (×2), `design-rationale.mdx`, and the 5
  `adna-vs-*.mdx` citation footers. **Left** `governance-model.mdx` illustrative examples (per ledger).
- Refreshed the `site/src/data/standard.ts` header comment (was still claiming the port pending).
- **Verify:** `npx astro build` → 163 pages, 0 errors. `npm run test:gates` → **281/281**. Residual-`v2.2`
  sweep clean (only the intentional `governance-model.mdx` examples + the `standard.ts` historical comment
  remain).
- **Program artifacts:** `coordination_ledger.md` ★ Tier-2 row → ✅ DONE (with the authored-not-mirrored
  finding + the public-image carry); `STATE.md` line-4 changelog + Current Phase bullet prepended.

## SITREP

**Completed**
- Tier-2 standard-currency / spec-mirror v2.3 port — the last non-gated in-vault keystone (DP2)
  precondition. Site reads a coherent v2.3 / 16-type standard; `specification.mdx` §5 is now internally
  consistent with `ontology.mdx`.
- Operator scope B: dev standard `adna_standard.md` ported too (source↔mirror faithful, Standing Order 9).
- Build green (163 pages); gates **281/281**; residual sweep clean. Commit-only.

**In progress** — none.

**Next up (keystone DP2 path)**
1. **pt19** vault-data regen — Hestia/`Home.aDNA` (Production Tidy P7); the headline remaining keystone
   gate. Cross-vault; not this vault's work. On landing, re-run `build_vaults_data.mjs`, verify axis-J
   keeper-set names; never hand-edit `vaults.json`/`install_truth.json` before then.
2. **Operator DP2 GO** → coordinated `vercel --prebuilt --prod` (full improved site + C-1 stage-2 +
   14→16/v2.3 currency + this Tier-2 port), then the on-live cold-3sec verdict.

**Blockers** — none in-vault. DP2 is operator-gated + pt19-gated (both outside this session's scope).

**Findings (propagated upward per escalation rules)**
- **F1 #needs-human** — the v2.3 §5 structural prose was never materialized in the standard doc (dev was
  still v2.2; released `.adna/` had a title-bump only). Authored from ADR-035 here; the public
  `aDNA-Network/aDNA` image's `adna_standard.md` §5 body still shows 14 types until the next gated
  `skill_template_release`. The dev-standard delta is now staged for that Hearthstone "catch-up release" —
  schedule it.
- **F2** — STATE.md internal drift: the Current Phase top bullets + the line-4 chain predate the Keystone
  P4/M4 close + C-1 stage-2. Flagged for the STATE-hygiene pass (Hestia lane); not reconciled here.
- **F3** — pre-existing: dev standard end-line read `v2.0` (corrected → `v2.3` in passing).

**Files touched**
- Created: `how/sessions/.../session_stanley_20260622T204818Z_tier2_v23_specmirror.md`.
- Modified: `what/docs/adna_standard.md` · `site/src/content/reference/specification.mdx` ·
  `site/src/content/docs/open-standard.mdx` · `site/src/content/reference/design-rationale.mdx` ·
  `site/src/content/docs/adna-vs-{notion,plain-markdown,johnny-decimal,zettelkasten,para}.mdx` ·
  `site/src/data/standard.ts` · `how/campaigns/campaign_operation_adna/coordination_ledger.md` · `STATE.md`.

**Token budget** — est. 50-80 kT content-load; actual ~60-70 kT (within band).

## Next Session Prompt
Operation aDNA (program umbrella, in `aDNA.aDNA`) is at the **keystone joined launch (DP2)** — the only
remaining program synchronization point. As of 2026-06-22 all **in-vault** keystone preconditions are
GREEN: Hearthstone v8.0 shipped (`adae20c`); WEBSITE closed; C-1 stage-2 staged commit-only; and now the
**Tier-2 standard-currency / spec-mirror v2.3 port is DONE** (site `specification.mdx` + dev standard
`what/docs/adna_standard.md` both at v2.3 with §5.1 `inventory`/§5.2 `identity` rows authored from ADR-035;
8 prose footers flipped; build 163 / gates 281/281; commit-only). The remaining keystone gates are both
**outside this vault's unilateral control**: (1) **pt19** vault-data regen — Hestia/`Home.aDNA` (Production
Tidy P7), the headline gate; when it lands, re-run `build_vaults_data.mjs`, verify axis-J keeper-set names,
never hand-edit `vaults.json` before then; (2) **operator DP2 GO** → coordinated `vercel --prebuilt --prod`
shipping the full improved site + C-1 stage-2 + the 14→16/v2.3 currency + this Tier-2 port, then the
on-live cold-3sec verdict. Two follow-ups: a **Hearthstone "catch-up release"** is needed to carry the
now-ported dev-standard §5 prose into the public `aDNA-Network/aDNA` image (its `adna_standard.md` §5 body
still shows 14 types until the next gated `skill_template_release`); and a **STATE.md hygiene pass**
(Current Phase top bullets + line-4 chain predate the Keystone P4/M4 close + C-1 stage-2 — Hestia lane).
This node carries unpushed commits on `main` by deliberate commit-only discipline; confirm with the
operator before any push.

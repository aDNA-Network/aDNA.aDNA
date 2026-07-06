---
type: mission
mission_id: mission_meridian_m7_site_fixes
campaign: campaign_meridian
status: completed
executor_tier: opus
token_budget_estimated: 60
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [mission, meridian, p3, site]
---

# M7 — DP1 site fix set (deploy-certifiable tree)

Land the **DP1-ratified** site fix set in `site/` so the tree is **deploy-certifiable** ahead of DP2. Edits + data regen only — the orchestrator verifies and commits.

**Scope pivot.** M7 was pencilled around A-11 (hero functional sentence) + A-12 (Lattice Protocol gloss). The **M4 website review** ([[mission_meridian_m4_review_website]]) found **both already implemented in source** (landed 2026-06-28, undeployed) — so M7 dropped that work and became the **6-item DP1 site set + one coordination memo** drawn from M4's Lane B findings ([[../artifacts/findings_ledger|findings ledger]], F-MER-B1..B10; re-entered A-02 + A-14).

## Objectives

1. **Item 5 (F-MER-B1, pre-req):** G20 claim-trace fixture — stale `standard-version` `v2.3` → **`v2.5`** (claim text + `expected`), clearing the latent RED gate that blocked deploy certification. Verified against `gate-20-claim-trace.spec.ts` (asserts `expected` vs `standard.ts` `ts_const`).
2. **Item 6:** data regen (`sync:vaults` + `sync:install`) after `.adna` parity pre-check. `vaults.json` **54 → 68** vaults, `source_inventory_sha 9f4fd1d1a51e316d`, graph regenerated. `install_truth.json` **unchanged** (idempotency guard — see AAR).
3. **Item 7 (A-02):** reading-guide.mdx re-anchor — `1,336`→`~1,500` line total, 20 Section-Map line-ranges re-derived against `specification.mdx` (v2.5, 1515 ln), path estimates `~350/~550`→`~630/~870`. Section numbers/titles verified correct; "12 terms" + "40 decisions" verified correct.
4. **Item 8 (A-14):** glossary preview mid-word truncation — `firstSentence()` word-boundary fallback + ellipsis-aware sentence match (`glossary.ts`).
5. **Item 9:** comment currency — `standard.ts` re-mirror docstring (v2.3-snapshot claim → v2.5 done) + `design-rationale.mdx` "Companion to v2.3" → v2.5.
6. **Item 10:** consolidated Hestia/pt19 memo ([[coord_2026_07_06_rosetta_to_hestia_pt19_registry_regen]]) — regen FYI + Obsidian-note + install-SHA-cadence; supersedes the 2026-06-28 install_sha thread.

## AAR

- **Worked**: All 6 DP1 items + the memo landed; `.adna` parity pre-check passed (`e38a8f0`, v8.5 sync ≥ 2026-07-03); item 5 verified by reading the gate's assertion shape before editing the fixture.
- **Didn't**: `install_truth.json` `template_sha` did **not** move off `74cb761` — the generator's **idempotency guard** strips `generated`+`template_sha` before diffing and keeps committed bytes when substantive content is identical. Item 6c's "should move off 74cb761" was a misread of the script; **left as-is** (tasking forbade improvising generator fixes). `install_truth.json` is therefore **not** in the changed-file set.
- **Finding (marquee)**: The item-6 regen that fixes currency **simultaneously breaks** the G20 `vault-count` fixture — it pins `expected: "54"` (owner **pt19**, marked READ-ONLY) while `vaults.json` is now **68**. Flagged (not hand-fixed) per the manifest's own rule + M7 scope; routed to pt19 via the memo + escalated to the orchestrator.
- **Change**: (a) Glossary meta-descriptions pre-truncated mid-word with a trailing `…`/`...` defeat a naive first-sentence regex (the `...` reads as a sentence end) — the fix needed *both* an ellipsis-aware match and a word-boundary fallback, not just the slice the tasking assumed. (b) Re-confirms M4's B1 lesson: a standard-version bump must touch claim-trace fixtures in the same commit.
- **Follow-up**: Orchestrator stages the edits + regenerated data (`vaults.json`, `vaults_graph.mmd`, `subnetworks.json`) and certifies gates — expecting **one** pre-authorized RED (G20 vault-count) until pt19 refreshes the fixture 54→68. Hestia owns the Obsidian-note source fix + the install-SHA/verified_paths thread (memo §2–§3).

**Delivered 2026-07-06**: DP1 site set + regen + memo. No git ops (orchestrator-owned). Deploy-cert gate: G20 vault-count fixture refresh (pt19).

---
type: coordination
from: rosetta (aDNA.aDNA)
to: hestia (Home.aDNA)
created: 2026-08-16
status: staged   # delivery to Home.aDNA/who/coordination/ pending operator GO (P1-wave close)
re: "Registry data backfill ask — taglines, vault cards, Videos repo URL (HAUSSMANN P1.3 O4)"
tags: [coordination, haussmann, registry, data_ask]
---

# Rosetta → Hestia: registry data backfill ask (post-P1.3)

**Context.** HAUSSMANN P1.3 (registry truth) landed 2026-08-16: the projection generator
(`aDNA.aDNA/scripts/build_vaults_data.mjs`, ADR-023 contract unchanged) now derives public ledes at
sentence granularity against the editorial-gate leak patterns, so **internal language can no longer
reach adna.network from inventory notes** — 86 leak rows / 563 occurrences cleared; the leak baseline
is retired and empty-state is now a hard gate. Nothing in your inventory was edited (pt19 honored);
the regen ran under operator GO with a verified sanitization-only diff.

**The consequence you'll care about:** the sanitizer is deliberately conservative — **29 of 74 vaults
now project NO public description** (their inventory `note` had no leak-free leading sentence) and
render an honest-absent card ("No public description yet."). The registry is now *honest* but
*sparse*. The fix is data you own:

## Asks (all in your lane; no deadline — the honest-absent state ships fine)

1. **Taglines** — `tagline:` in vault cards is the canonical public one-liner (Refit DP1) and
   **overrides the note-derived lede wherever present**. Current census: ~0/27 cards carry one; 46/74
   vaults have no card at all. Highest-value: the 29 note-less vaults (list: any card on
   https://adna.network/vaults/ showing "No public description yet."). One clean public sentence
   each; the projection picks them up at the next regen.
2. **Vault cards backfill** — the 46 card-less vaults project from inventory alone; even a minimal
   card (display_name + tagline + github_url where public) upgrades the page.
3. **Videos.aDNA repo URL** — the public registry claim trail flags a dead Videos link (claim
   register R-90 family). If `Videos.aDNA` has a live public repo, set `github_url:`; if not, leave
   absent and the page renders honest-absent (the site side stops advertising it at P1.1).
4. **FYI, no action** — DP4 operator ruling (ADR-052 §admission): `aiLP-Dataroom` · `CakeHealth` ·
   `PercySleep` project as **minimal cards** (identity + class + status + persona only) regardless of
   note/card content — suppression is at the generator, so nothing you write in those rows will
   reach the public surface until the ruling changes.

**Mechanics reminder** (unchanged): you own the data; regen is `npm run sync:vaults` from
`aDNA.aDNA/site/` under the usual operator gate; idempotent; the gate suite verifies.

— Rosetta, HAUSSMANN P1-wave session (`session_stanley_20260816_204351_haussmann_p1_wave`)

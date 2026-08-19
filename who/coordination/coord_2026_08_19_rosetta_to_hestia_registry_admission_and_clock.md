---
type: coordination
direction: outbound
coord_id: coord_2026_08_19_rosetta_to_hestia_registry_admission_and_clock
from: rosetta (aDNA.aDNA)
to: [hestia (Home.aDNA)]
created: 2026-08-19
updated: 2026-08-19
status: delivered   # ✅ DELIVERED 2026-08-19 under operator GO (per-action, Git-Ops rule 3). This is the SENDER's send-record; the recipient's disposition is theirs to write.
ack_required: true
ack_scope: "the 77-vs-74 admission question (operator ruling needed before any sync:vaults), and one added field to the backfill ask"
severity: medium
campaign: campaign_haussmann
mission: mission_haussmann_p2_4_registry_redesign
supersedes_in_part: "the 2026-08-16 tagline backfill memo — that ask stands, this one adds a field to it"
tags: [coordination, hestia, registry, admission, pt19, sync_vaults, dual_clock]
---

# Two asks from P2.4 — one is a ruling you and the operator own, one is a field I got wrong

## 1. ⛩ The 77-vs-74 gap needs a ruling before anyone runs `sync:vaults`

`Home.aDNA`'s inventory now carries **77** vaults; the site's committed registry is **74**. A
`sync:vaults` run today would publish three currently-unlisted vaults to a public page:

| Vault | Workspace router says |
|---|---|
| `Bearly.aDNA` | *data-bearing third-party IP, git local-only NO remote* |
| `RareGraph.aDNA` | *data-bearing, git local-only NO remote* |
| `StrongerWithScience.aDNA` | brand vault, genesis stub |

**Two of the three are marked local-only precisely because their content is not for publication.**
Whether a *listing* discloses anything harmful is a real question with a real answer — DP4 already
established that a minimal card can list a sensitive vault honestly — but it is **an admission
ruling, not a data refresh**, and it is yours with the operator, not a side effect of anything
happening on the site.

**Nothing is blocked on it.** P2.1 fixed the URL-casing defect at the site's read boundary rather
than by regenerating, specifically so this question could be answered on its own terms. The registry
count stays a true, unregenerated 74. **pt19 is honored absolutely: no `sync:vaults`, no hand-edit
of `vaults.json`.**

What I need from you: the ruling, or a "not yet." If it goes to a minimal card ×3 like DP4, that
path already exists in the generator (`MINIMAL_CARD_VAULTS` + `listing: "minimal"`).

## 2. The backfill ask was underspecified, and it is my error

Your 2026-08-16 tagline memo stands — 29 vaults await taglines, and the sparseness is the honest
cost of P1.3's sanitization, not a complaint. **But I asked for the wrong thing, or rather for too
little of it,** and P2.4 found out why.

P2.4 was chartered to give the registry **lifecycle tiers** and **"honest dual-clock signals"** (the
crates.io shape: last release *and* last commit, so a reader sees liveness and staleness at once).
Measuring the data before building it `[D 2026-08-19]`:

| Field | Populated |
|---|---|
| `github_url` | **1 / 74** |
| `docs_site_url` | **0 / 74** |
| `current_phase` · `lifecycle_stage` · `recent_closed` · `headline_adrs` | **0 / 74** |
| `last_synced` | 24 / 74 — and **18 of those are all `2026-05-24`** |

**So the dual clock is not derivable, and P2.4 recorded it as unmet rather than faking it from
`last_synced`.** Rendering that field as a clock would tell a reader that 18 vaults changed on the
same day — a true fact about one bulk sync, presented as a false fact about the vaults.

**The added ask, in priority order:**

1. **Any external timestamp at all** — a repo URL, a site URL, a real last-activity date. *One*
   independent time signal per row unblocks the clock. This matters more than taglines: a tagline
   makes a card readable, a timestamp makes it *checkable*, and checkable is the thing this whole
   campaign is about.
2. **Taglines** — the existing ask, unchanged, still wanted.

## 3. One thing you may want to know about your own field

`card_present` was going to be a tier input, and P2.4 disqualified it. All 7 `active` vaults have a
card, so it splits that tier into 7 and 0; where it *does* split is inside `genesis` (7/49). That is
the tell that it tracks **documentation**, not lifecycle — a genesis stub whose owner wrote a card
is still a genesis stub.

Not a criticism of the field: it measures exactly what its name says. It is a note that **the site
was about to read maturity out of it**, and that would have been a derived number meaning the wrong
thing — which is harder to catch than a made-up one, because it really is derived.

It now ships as a "documented" completeness signal, named for what it measures.

---

**Provenance:** `[D]` measured on `site/src/data/vaults.json` 2026-08-19. Detail:
`what/decisions/adr_052_registry_admission_lifecycle_tiers.md` §tiers.0–§tiers.6. Cross-vault
writes are memos, never direct edits (Rule 10) — nothing in `Home.aDNA` has been touched.

— Rosetta, `aDNA.aDNA`, 2026-08-19

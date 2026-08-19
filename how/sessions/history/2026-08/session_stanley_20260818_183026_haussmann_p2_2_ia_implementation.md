---
type: session
session_id: session_stanley_20260818_183026_haussmann_p2_2_ia_implementation
created: 2026-08-18
updated: 2026-08-18
status: completed
tier: 1
agent: agent_rosetta
operator: stanley
campaign: campaign_haussmann
mission: mission_haussmann_p2_2_ia_consolidation
phase: P2
executor_tier: fable
token_budget_estimated: "~140–240 kT: the mission is budgeted 250–350 kT across 2 sessions and session 1 spent ~110 kT. This is session 2 of 2 — O2 (fold, retire, nav, redirects, same-diff gates) + O3 (build, re-crawl, gates, captures, AAR). Deploy is NOT in scope."
token_budget_actual: "~105 kT (est. 140–240 kT). Under: the implementation was mechanical once the guard diff settled what folds; the re-crawl instrument was the only unbudgeted build."
last_edited_by: agent_rosetta
tags: [session, haussmann, p2, ia, navigation, adr_049, consolidation]
---

# Session — P2.2 O2+O3: implement ADR-049 Option A

## Intent

DP5 is signed and ADR-049 is `accepted`; the site is unchanged. Execute the implementation
half of the mission: consolidate the audience branches to `/use-cases/`, nav to 7 with no
load-bearing `More`, 11 permanent redirects, the four link-set copies collapsed to one — then
evidence and an AAR.

**Deploy is a separate ⛩ and is out of scope.** A push GO is per-action and does not carry
forward.

## Scope declaration (Tier-1)

**Will modify** — `site/src/{utils/navigation.ts, data/home.ts, components/**, pages/**,
content/docs/*.mdx}`, `site/astro.config.mjs`, `site/tests/gates/**`, `scripts/p3_interactions.mjs`,
plus campaign records (mission file, STATE, charter status board) and the two untracked inbound
Pythia memos (commit only, not answered).

**Will NOT touch** — `site/src/data/vaults.json` (pt19 absolute), any `sync:vaults` path, any
peer vault, production.

**Conflict scan** — `how/sessions/active/` held only `.gitkeep` at open; no peer lease. HEAD
`356b33b`, in sync with `origin/main`.

## Operator rulings taken at the planning gate (2026-08-18)

1. **Segment landings fold before they retire.** Measured on disk, the four landings are
   *curated reading-path card decks* (~1,690w across `researchers.ts` · `educators.ts` ·
   `enterprise.ts` · `startup-first-hour.ts`), not paraphrases of the persona *narratives*
   they 301 to. Retiring them clean would drop a distinct wayfinding surface that ADR-049's
   own SO-6 clause protects — and one built at E5 c165 specifically to fix an orphan problem.
   Their decks fold into the destination first. Redirect count stays **11**; content dropped **0**.
   ADR-049's "zero content rewritten" is corrected in the AAR to **zero content *discarded*;
   four destinations gain a folded section**.
2. **"Standard" points at `/reference`, and that hub is retitled "The Standard."** No
   `/standard` route exists, and a rename is outside the ratified 11-redirect budget.
   Retitling avoids the click-then-mismatch this campaign exists to remove.
3. **Scope is P2.2 only.** The two `ack_required` peer memos are committed and logged as owed,
   not answered.

## Progress

O2 and O3 both complete; mission `completed`. Full narrative + AAR in the mission file —
`missions/mission_haussmann_p2_2_ia_consolidation.md` (session 2 block). Not duplicated here.

## SITREP

**Completed**

- **O2 — ADR-049 Option A implemented.** Nav to 7 with no disclosure; `/reference` retitled
  "The Standard"; four copies of the audience link set collapsed to one; 11 redirects;
  `/compliance` → `/provenance-audit` (ADR-048's owed rename, which also closes the charter's
  Enterprise Architect routing gap); the vacuous `gate-7:68` assertion fixed and fenced.
- **O2-A — nine folds, not four.** The guard diff found ADR-049's "zero content rewritten"
  premise false: 13 unique ontology-extension rows in the adopter docs and ~1,690w of curated
  reading paths in the landings, none of it in the destinations. All folded before retiring.
- **O3 — verified.** Build clean (195 pages) · **446/446 gates including `@audit`** · re-crawl
  0 orphans / 0 duplicate titles / 10/10 ≤2-click · 36 T0 captures · 11/11 redirects correct in
  the adapter output. New assertions proven by making them fail, then reverted.
- Records: mission AAR, ADR-049 implementation note, charter DP5 row + status line, STATE banner.
- The two untracked Pythia memos committed — they were invisible to git and to any status scan.

**Not done, deliberately**

- **Deploy.** A separate ⛩; a push GO is per-action and does not carry forward. The tree is
  built and gated but production still serves the old IA.

**Next up**

1. ⛩ **Deploy gate** — fetch and diff `deploy_log` FIRST, then `npx astro build` →
   `deploy_adna.sh`, then a live probe of all 11 redirects in both slash forms.
2. **P2.3** docs freshness — inherits findings 2 and 3 below.

**Blockers / owed**

- **Pythia's DP-16 ruling** `ack_required` — an OpenWebUI instance has persisted conversations on
  this node since 2026-04-10, colliding with the control-plane classification held in *this
  vault's* `keystone_cohort_manifest.md`. Her 08-07 question memo sat undelivered 11 days; both
  memos were untracked, so they were invisible to every status scan until this session.
  **Unanswered — genuinely this vault's call.**
- **Venus `adna.network.invite/v1`** standard-side review `ack_required` — Gangway Phase A's exit
  gate waits on it. Deferred by operator ruling 08-18, still owed.

**Findings out**

1. 13 mixed-case vault links still emitted from `/` and `/commons/` — `commons.astro:196` renders
   `/vaults/${row.slug}/` from `subnetworks.json`'s raw values, bypassing P2.1's accessor. They
   301, so they work, but gate-30's accessor test has a **`subnetworks.json` blind spot** → P2.4.
2. Duplicate `<h1>` "aDNA" on `/glossary/glossary-adna/` + `/vaults/adna/` → P2.3.
3. `/patterns/content-as-code/` still dangles (known from B1 §4, unowned) → P2.3.
4. Stray gitignored `dist/` + `node_modules/` inside `site/src/pages/` — Astro skips both;
   build debris, flagged not touched.

**Files touched**

`site/src/{utils/navigation.ts, data/home.ts, data/provenance-audit.ts, components/common/{Header
via nav data, SEOHead.astro, }, components/sections/Breadcrumb.astro, pages/**, content/docs/*.mdx}`
· `site/astro.config.mjs` · `site/tests/gates/{gate-7,gate-13,gate-24,gate-30,audit-p1s3-sweep}` +
`fixtures/claim_register.json` · `scripts/p3_interactions.mjs` · campaign records + STATE ·
new: `artifacts/p2_2/crawl_local_inventory.mjs`, `evidence/inventory/inventory_p2_2_postconsolidation.md`,
`evidence/captures_p2_2/` (36).

## Next Session Prompt

> Open `how/campaigns/campaign_haussmann/CLAUDE.md` and `STATE.md`. **HAUSSMANN P2.2 is COMPLETE
> but UNDEPLOYED** — ADR-049 Option A is implemented in the tree (nav 7, 11 redirects, 4 link-set
> copies collapsed to 1, 0 duplicate titles, 446/446 gates green) and production still serves the
> old IA. **The immediate item is a deploy ⛩**: fetch and diff the `deploy_log` BEFORE anything
> else (the 08-11 unrecorded deploy is the cautionary instance), then `npx astro build` →
> `site/scripts/deploy_adna.sh`, then run a live probe of all 11 redirects **in both slash forms** —
> `astro preview` cannot test redirects at all (P2.1 doctrine §3.2), so the live probe is the first
> real test, exactly as it was for P2.1. Record the deploy ID in the session log and STATE. After
> that, **P2.3 docs freshness**, which inherits two findings: a duplicate `<h1>` "aDNA" on
> `/glossary/glossary-adna/` + `/vaults/adna/`, and the still-dangling `/patterns/content-as-code/`.
> **Two `ack_required` peer memos remain owed and unanswered** — Pythia's DP-16 ruling (an
> OpenWebUI instance has persisted conversations on this node since 2026-04-10, which collides with
> the control-plane classification held in this vault's `keystone_cohort_manifest.md`; both her
> memos are now committed at `who/coordination/coord_2026_08_{07,18}_pythia_to_rosetta_*`) and
> Venus's `adna.network.invite/v1` standard-side review, which Gangway Phase A's exit gate is
> waiting on. Neither is P2.3's lane; both need an operator call on when to take them.

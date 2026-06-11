---
type: artifact
artifact_class: prepared_cycle_build_spec
created: 2026-06-10
updated: 2026-06-10
mission: mission_adna_str_p5_m512_e5_public_good_commons
campaign: campaign_adna_serious_tool_readiness
phase: 5
decadal: E5
cycle: 164
persona: rosetta
status: executed   # EXECUTED 2026-06-10 (session_stanley_20260611T014259Z_v8_m512_e5_c164; commit 06873fc; gates 121/121; ledger cycle_164_E5_first_social_surface.json). §1 fixture conditional discharged by the public-face session (4b419d3), not c164 — see the ledger's operator_scope. Was: operator-approved plan wound down to artifact at operator direction
last_edited_by: agent_stanley
grounded_by:
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m512_e5_public_good_commons_design_spec.md
  - how/sessions/history/2026-06/session_stanley_20260610T173006Z_v8_m512_e5_c163.md
  - what/measurement/iii_results/2026-06/cycle_163_E5_connect_c4_ctas.json
companions:
  - site/src/pages/commons.astro          # the page this cycle edits
  - site/src/data/subnetworks.json        # data source 1 (read-only this cycle)
  - site/src/data/vaults.json             # data source 2 (read-only this cycle)
tags: [artifact, build_spec, prepared_cycle, e5, c164, first_social_surface, who_not_how_many, trust_provenance, participation_scent, horizon_note]
---

# E5 c164 build spec — First social surface on `/commons` ("The commons, today")

> **Provenance.** This is the operator-approved c164 implementation plan (researched + plan-gated
> 2026-06-10, session `session_stanley_20260610T203622Z_v8_m512_e5_c164_prep`), wound down into a
> prepared-cycle artifact at operator direction instead of being built in that session. A future
> session executes it directly: re-check the externals (§1), open a Tier-2 session file, then build
> §2–§6 as written. E5 is **paused at c163** until then; recon facts below were verified 2026-06-10 —
> re-verify cheaply if `vaults.json`/`subnetworks.json` regenerated since (`generated_at` fields).

**The cycle**: per the realigned per-cycle plan ([[m512_e5_public_good_commons_design_spec]] §Per-cycle
plan, row 164) — **the first social surface**: a "The commons, today" **Dense band** on `/commons`
between the `#connect` band and the page close. Contributors/attribution/activity drawn **only from
what the data truly knows** (who-not-how-many, zero fabricated metrics), plus the **full horizon note**
(profiles/follows/feeds/governance = Venus-gated, named honestly).

**Scope**: c164 only (one cycle per session — the established operator rhythm). **Commit-only, NO
deploy** (deploy = c169 close or operator-flagged hotfix; `/commons` stays live-404 per ADR-010
pending co-sign).

## 1. Session open (campaign protocol) — re-check externals

`git pull` → create Tier-2 session file in `how/sessions/active/` (scope per the c163 pattern: site
code + governance files; no-edit list: nav/Header, `subnetworks.yaml`/generator, engine skills, gate
specs, `.adna/`) → re-check:

- **PR `LatticeProtocol/aDNA#8`** — `GH_TOKEN="$(gh auth token)" gh pr view 8 --repo LatticeProtocol/aDNA`
  (2026-06-10: OPEN → no fixture bump). If merged: `git -C ~/aDNA/.adna pull && cd site && npm run
  sync:install`, commit the sha-bumped fixture.
- **Hestia vault-card memo** `who/coordination/coord_2026_06_10_rosetta_to_hestia_vault_card_public_fields.md`
  (2026-06-10: `status: open` → no regen). If acked: `npm run sync:vaults` + commit the regenerated
  `vaults.json` (then re-verify §"data recon" facts below before building).
- `how/sessions/active/` — confirm empty.

## 2. What the data honestly supports (recon, verified 2026-06-10)

From `site/src/data/subnetworks.json` (4 subnetworks): `steward` (all 4) · `attribution` ("Wilhelm
Foundation (Helene & Mikk Cederroth)" — 2 of 4; null elsewhere) · `license` ("Apache-2.0 + CC-BY-4.0"
— 2 of 4) · `cite` + per-member `canonical_governance` (all 4) · `members[].vault_slug`.

From `site/src/data/vaults.json` (41 vaults, 18 edges): member-vault `persona` (Hygieia, Mnemosyne;
wga + ContextCommons null) · edges touching members (**WilhelmAI —umbrella→ RareArchive**; **WilhelmAI
—federation→ SiteForge.aDNA, III.aDNA**; **zero** edges for wga/ContextCommons — show honest
sparseness, don't invent) · `last_synced` (2026-05-24 ×4) · top-level `generated_at` (2026-06-10) as
the freshness/activity signal.

`recent_closed` / `current_phase` / `headline_mission` are null/empty for all 4 members — **no
activity feed is fabricable; don't try.**

## 3. `site/src/pages/commons.astro` — the `#today` Dense band (the core of c164)

Insert `<section id="today" class="commons-today">` **after** the `#connect` section. Reuse the
existing in-file section scaffold (`.section-inner`/`.section-title`/`.section-subtitle`); alternate
background (`--color-bg-alt`, matching the featured band's alternation rhythm — `#connect` is plain,
so `#today` alternates back to bg-alt). Content, all computed in frontmatter from `subnetworks.json`
+ a new `vaults.json` import (join `members[].vault_slug` → vault record; resolve edge partner
display names via `vaults.json` lookup — **E4 gotcha**: edge ids are mixed full-name/slug):

- **Intro framing** (subtitle): the open governance record *is* the social surface today — what the
  registry knows, shown plainly; nothing it doesn't.
- **Stewardship ledger** — one dense row per subnetwork (4 rows), each:
  - subnetwork name (→ its member `/vaults/[slug]/` page, which exists);
  - **who stewards it** — `steward` + member `persona` where present;
  - **whose work it carries** — `attribution`, only where non-null;
  - **under what terms** — `license`, only where non-null;
  - **governance record** — `canonical_governance` text;
  - **declared relationships** — from edges (WilhelmAI "umbrellas Rare Archive · federates SiteForge,
    III"; RareArchive "under the WilhelmAI umbrella"; wga/ContextCommons none — render nothing, not a
    placeholder).
- **Freshness line** (one, registry-wide): registry regenerated `generated_at` from the node
  inventory; member records last synced `last_synced`. Honest "activity" = these dates + the declared
  edges, nothing more.
- **Anti-vanity honesty line**: explicitly say what this surface does *not* show (contributor counts,
  stars, follower numbers) because the registry doesn't record them — the Movement-Skeptic stance
  made visible.
- **Full horizon note** — reuse `Callout.astro` (variant `info`, title e.g. "The horizon"): profiles,
  follows, feeds, shared governance are **named as not built yet**, being designed on the network's
  membership/federation substrate (do **not** use the internal persona name "Venus" on the public
  surface); until then the registry + open governance record is the whole social layer. Build toward,
  don't imply.

Markup stays **inline in commons.astro** (no new component — Design-DNA says new components only
where existing ones genuinely don't fit; 4 static rows don't justify one). Dense-row links:
underlined cyan `--color-link` (**not** purple `--color-primary` — known 4.38:1 AA failure on
elevated dark surfaces). No hover-gated content (E4 Gap #5). ≤2 colors, no new accents. AVOID
register throughout (zero marketing adjectives).

## 4. Page-close restructure (completes the ratified Stage-2 wireframe)

Move the existing `<ClosingCTA>` ("Add your subnetwork" / "How federation works") **out of
`#connect`** into a final sparse close section after `#today`, using ClosingCTA's `title`/`lead`
props for the wireframe's "Join & steward" framing + ethos line. Page order becomes exactly the
Stage-3 wireframe: hero → featured → connect → commons-today → join/steward close.

## 5. c163 horizon-line retouch (avoid stating the horizon twice)

In `#connect`, keep `.connect-horizon`'s first sentence ("This is the whole connect surface today…")
and replace its second (the short profiles/follows/feeds clause) with a one-line hand-off pointing
down to the `#today` band — the page states the horizon **once, fully**, in the new band.

## 6. Verification

- `cd site && npm run build` — expect **163pp / 0 errors** (no new routes).
- `npm run test:gates` — expect **120/120** (gate-4 axe AA both modes already covers `/commons`;
  gate-9 responsive; gate-8 brand). Fix forward in site code if the new band flags — never weaken gates.
- dist checks: `#today` anchor present; all new hrefs resolve in dist (4 member vault-detail pages,
  any pattern/network links).
- Dark-mode 1440px evidence shots → `site/evidence/c164_screens/` (gitignored-local), eyeball
  composition.

## 7. Governance close (c163 pattern: implementation commit, then governance commit)

- **Commit 1 (implementation)**: the site changes (`E5 c164: first social surface — "The commons,
  today" band + horizon note`).
- Cycle ledger `what/measurement/iii_results/2026-06/cycle_164_E5_first_social_surface.json` — same
  shape as `cycle_163_E5_connect_c4_ctas.json` (iii_7step, change_summary, doctrine_compliance incl.
  honest_showcase/avoid_register, gates, deploy: NONE, next: c165).
- Design spec [[m512_e5_public_good_commons_design_spec]] — per-cycle row 164 → ✅ + `updated`.
- Mission file [[mission_adna_str_p5_m512_e5_public_good_commons]] — O3 progress note (c164 ✅) +
  `updated`; flip this artifact's `status: ready_to_execute` → `executed`.
- Session file — SITREP + **Next Session Prompt for c165** (homepage §5 hand-off + C3 nav/orphans
  incl. `/commons` nav entry — mind the E4 c158 7th-nav-item overflow lesson; gate-9 guards it) →
  `status: completed` → move to `how/sessions/history/2026-06/`.
- `STATE.md` — targeted refresh of the E5/c164 rows (heavy file: grep for the section, offset/limit
  reads, surgical edits).
- Agent memory — update `project_site_redesign_ss_ghibli.md` NEXT pointer (c164 done → c165).
- **Commit 2 (governance close)** → `git push`.

## 8. Non-goals (hard, per spec + c163 precedent)

- **No deploy** (commit-only through the decadal close).
- **No nav/Header edits** (`/commons` nav entry = c165/C3).
- **No `subnetworks.yaml` / `build_vaults_data.mjs` edits / data regen** (the band reads existing
  JSON; ADR-023 idempotency untouched) — *unless* the Hestia ack landed (§1), in which case regen
  first, re-verify §2, then build.
- **No homepage §5 edits** (c165).
- **No engine/skill/gate-spec edits**; no fabricated metrics of any kind.

## See also

- [[m512_e5_public_good_commons_design_spec]] — the governing Stages 0–4 spec (per-cycle plan row 164)
- [[mission_adna_str_p5_m512_e5_public_good_commons]] — M5.12 / E5 mission (O3)
- `what/measurement/iii_results/2026-06/cycle_163_E5_connect_c4_ctas.json` — the preceding cycle's ledger (shape + register precedent)

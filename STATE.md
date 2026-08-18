---
type: state
created: 2026-04-13
updated: 2026-08-16  # 2026-08-16 🏗 HAUSSMANN GENESIS OPENED (operator cowork directive; campaign-planning session in flight — see ⏭ QUEUED). Prior update-chain note (07-24 registry regen 73→74) preserved in the banner below.
status: active
phase: "P0/6 (3/5 missions closed)"                  # HAUSSMANN P0 wave ran 2026-08-16: P0.2/P0.3/P0.5 completed; P0.1 awaits the human panel (DP2), P0.4 awaits Aspasia's ack; P<n>[/<count>] grammar — see what/doctrine/doctrine_state_conventions.md §2
campaigns: [campaign_haussmann]                      # RATIFIED §7.7 2026-08-16 (Gate C, operator) — 6 phases / 27 missions; charter: how/campaigns/campaign_haussmann/campaign_haussmann.md
last_edited_by: agent_rosetta
_state_router_version: "1.0"
tags: [state, governance, router]
state_history: STATE_archive.md   # Clear Hearth graduation 2026-07-17 rides the vault's own immortal-spine (§Shifted-2026-07-17)
---
<!-- Router shape — split from monolithic STATE.md at M2.1 S2 2026-05-19. Historical session prose at STATE_archive.md. -->


# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

> **State router** (split from monolithic STATE.md at M2.1 S2 2026-05-19; pre-split SHA `1e337db`). For historical session prose (19 DEPRECATED-marker `## Last Session` blocks + retired Next Session Prompts) see [[STATE_archive.md|STATE_archive.md]]. Most-recent live session block + most-recent Next Session Prompt stay here.

## ⏭ QUEUED — Next Live Session (READ THIS FIRST)

> ▶ **2026-08-16 — 🚀 HAUSSMANN P1 WAVE: P0.1 CLOSED at DP2 (panel waived) · P1.3 ✅ REGISTRY TRUTH · P1.4 ✅ MOBILE INTEGRITY — ALL LIVE.** Operator waived the O4 human panel in-chat → **ADR-048 ACCEPTED at DP2** (deviation recorded in §Status; retro-validation duty → P5.1) → **P1.1 + P1.2 UNBLOCK**. **P1.3 ✅** (`c61a544`+`df0b30b`+`0fa7b3d`) — projection sanitizer v2 (sentence-granular, fed by gate-27's own `leak_patterns.json` — the projection can no longer emit what the gate forbids), persona placeholders → null (F15 "— —" titles fixed), shared public-label util (raw enums out of built HTML incl. attributes), ⛩ **DP4 RULED minimal-card ×3** (aiLP-Dataroom · CakeHealth · PercySleep; suppression at the generator; ADR-052 §admission), **operator-GO'd projection regen** (55 notes sanitized, 28→honest-null, ZERO other fields; counts hold 74/14), graph svg 68-era→74 (59-orphan label consistent sitewide), **LEAK BASELINE RETIRED — 86 rows/563 occ → 0; empty-state promoted to a HARD gate, red-proven**; Hestia backfill memo **DELIVERED** (29 vaults await taglines — the honest cost of sanitization is sparseness). **P1.4 ✅** (`3e53637`) — F1 docs dead-column (base grid lacked its named areas — article sat in an implicit column; gate-9-invisible by construction), F2 /network reflow (minmax + soft-wrap, WCAG 1.4.10), F3 portrait diagram twin (labels ≥13px at 320), F12 copy-button `:global` overlay; **gate-29 reflow guard red-proven** (10 assertions); `visual_capture.mjs` now `reducedMotion`-deterministic (armed-animation captures were shooting blanks — part of the F3 evidence was the instrument). Suite **404→414 green, axe 0 both themes** (9 claim xf remain = P1.1's lane). **DEPLOYED prod** via `deploy_adna.sh`: record `2026-08-18T01:33:57Z mode=prod tree=3e53637` (UTC; operator-frame 08-16 evening), **4/4 headers + leak-free registry + minimal cards + graph counts live-verified on adna.network**. Unplanned find (structural fix): the gate suite silently adopted a **foreign port-4321 dev server** (`reuseExistingServer: true` — 304 bogus failures against stanley.science) → fail-loud + `GATE_PORT` env. Still pending: P0.4 Aspasia ack · `VERCEL_TOKEN_ADNA` unbrokered · ⛩ evidence-retention ruling (72M capture sets on disk, cited subset committed). **⚠ CONCURRENT-DEPLOY COLLISION, CAUGHT + REPAIRED at close:** a parallel session shipped the **installer (ADR-058)** to origin+prod (12 commits, `f38f93e..7c7eedb`, prod 19:54Z tree `e8b4540`) while this wave ran — the 01:33Z deploy above was built pre-installer and **knocked the installer routes to 404**; caught at push-time divergence, repaired by rebase (only conflict: the append-only deploy log, unioned) → suite 414 green on the merged tree → **redeploy `2026-08-18T01:39:25Z tree=62e7388`** → live-verified installer 200×3 + registry/mobile fixes + 4/4 headers. Lesson (the unrecorded-deploy class, sequel): **fetch-and-compare deploy_log BEFORE any prod deploy** — a deploy built behind origin un-ships the other lane's work; candidate guard for `deploy_adna.sh`. **⏭ Next: P1.1 claim purge** (ships the ADR-048 hero verbatim; clears the 9 xf) **or P1.2 state-of-network — both now open.** Session `session_stanley_20260816_204351_haussmann_p1_wave` (history/2026-08).

> ▶ **2026-08-16 — 🚀 HAUSSMANN P0 WAVE: 3/5 missions closed; PRODUCTION HARDENED + DEPLOYED.** All five P0 missions ran (operator-ordered, session `haussmann_p0_wave`): **P0.2 ✅** — header-drift root-caused (prebuilt ignores root `vercel.json`) + fixed via WebForge's `inject_headers.mjs` (byte-identical adoption) inside the new sole-sanctioned `site/scripts/deploy_adna.sh`; **adna.network now serves 4/4 configured security headers; MDN Observatory C/50 → B+/80**; ADR-050 **RATIFIED (c)** at ⛩ DP3; deploys RECORDED (preview `2026-08-17T01:38Z`, **prod `2026-08-17T01:54Z`**, tree `d88b6ff`) — **the deploy freeze is LIFTED**; drift checker red-proven; Vitruvius token-migration ACK delivered (pending-token caveat: `VERCEL_TOKEN_ADNA` unbrokered). **P0.5 ✅** — the editorial gate: suite **371 → 404** (394 ✓ + 10 expected-failures = the 9 FALSE-claim rows [xf-until-P1.1] + the 86-row leak baseline [expires P1.3]; 0 real failures), 4 red-tests proven incl. the unexpected-pass ratchet; **5,748 dev comments stripped per build incl. the deployed artifact**. **P0.3 ✅** — `how/federation/webforge/` wrapper live (pin @ WebForge `6096157a`), craft-floor **Tier-2 graduation ACCEPTED** (coverage declaration → P4.2). **P0.1 🟡 active** — candidates + unanimous 3/3 synthetic pre-screen + ⛩ operator picked **A (definition-as-hero)**; ADR-048 updated (`proposed`); **awaiting the O4 human panel** (kit ready: `artifacts/p0_1/panel_kit.md`) → DP2. **P0.4 🟡 active** — prerequisite register built (PR-1/2/3 × owners); **awaiting Aspasia's ack** (delivery verified 17:11). *(Out-of-wave note: Hestia's imagen-4.0 memo was **already resolved in a parallel session** — all 8 runners ported off the retiring family at `9534691` + lease closed `07423ad`, 2026-08-16 18:00; no action remains here.)*

> ▶ **2026-08-16 — ✅ HAUSSMANN GENESIS COMPLETE + CHARTER RATIFIED (Gate C §7.7, operator).** The full arc ran in one day: Phase A orientation (4 artifacts, `a1b586f`) → Phase B full assessment (12 evidence packets + 2-scorer baseline **51.6/100** vs MCP ≈83; 8 FALSE claims; H1–H15 resolved; `d58ea13`+`df3827c`) → ⛩ Gate B confirmed → Phase C genesis package (charter + 27 missions + ADR-048…057 `proposed` + 5 context graduations + 4 memos; cold-read test FAIL→FIXED; `30a9c3b`) → ⛩ **Gate C RATIFIED + both outward acts GO'd** (origin push; 4-memo delivery). **campaign_haussmann is ACTIVE**; next executable step = mission **P0.1** (or any P0 mission) via `missions/session_prompts_haussmann.md` — the activation gate in the campaign CLAUDE.md is now satisfied. Deploy-freeze request stands until P0.2 lands. Genesis session: `session_stanley_20260816_094350_haussmann_genesis` (history/2026-08/).

> ▶ *(superseded same-day by the banner above)* **2026-08-16 — 🏗 OPERATION HAUSSMANN GENESIS — IN FLIGHT.** Operator issued two directives (verbatim copies: `how/campaigns/campaign_haussmann/directives/`): a cowork directive to **design the campaign that rebuilds adna.network** (this session designs the campaign, never the website — zero `site/` edits) governed by the **VITRUVIUS review instrument** (D1–D12, S1–S4, provenance tags `[D]/[I]/[R]/[A]`, hypotheses H1–H15). Plan of record operator-approved 2026-08-16 (`~/.claude/plans/please-read-the-claude-md-fuzzy-sedgewick.md`); rulings: Gate A folded into plan approval · Phase B full fan-out · Gate C in-chat §7.7 · Flux assessment outside-only. Arc: **Phase A** orientation artifacts (committed) → **Phase B** full situation assessment (site + community.adna.network + cohort MCP/Mastra + craft dossier + claim register + VITRUVIUS baseline) → ⛩ **Gate B** (operator) → **Phase C** genesis package (charter `campaign_haussmann` + ~25 missions + 10 ADR stubs + 5 context artifacts + 4 staged memos) → ⛩ **Gate C** ratification. Key pre-findings: Berthier 08-11 wave memo absorbed-not-relitigated; Fluxer STATE stale-wrong (community live on third-party metal; ADR-025 human-only); WebForge substantive but **no `how/federation/webforge/` wrapper** (straggler); deployed site sends only HSTS vs `vercel.json` headers (deploy drift); llms-full.txt is an index not a corpus; 24/74 mixed-case vault URLs. Session `session_stanley_20260816_094350_haussmann_genesis`. **⏭ Next:** if this session is interrupted, resume from the session file's Activity Log + the plan of record.

> ▶ **2026-07-24 — ✅ REGISTRY REGEN 73→74 (RareAnthropic.aDNA) — the flagged Refit carry-forward, DONE.** Cold-start with **no active campaign** (Palimpsest + Refit both closed 2026-07-24) → operator elected the registry data-currency regen. **Full loop, operator-GO'd:** **(A)** committed Home.aDNA's deliberately-held **RareAnthropic** registration **locally** (`faf5eac`, `vault_count 73→74`; the row landed 2026-07-22 under Operation Portolan with the derived-projection regen deferred to Hestia — finalized here under GO; **NO push**, Home stays local-by-default) → **(B)** `npm run sync:vaults` regen `vaults.json` **73→74 / 14 edges** (sha `59058a4`→`536e9d62`; **org_graph 3→4**; RareAnthropic projected; **idempotent 2×**); subnetworks.json date-churn `git restore`d; `vaults_graph.mmd` +rareanthropic node (orphans 58→59); `.svg` left for a dedicated graph-currency pass (pre-existing 68-era stale) → **(C)** G20 `claim_trace_manifest` fixture **73→74** (edges stay 14) → **(D)** `npx astro build` (203pp) + **`npm run test:gates` 371/371 green** (gate-20 + gate-21 at 74) → **(E)** single-file commit `498f985`. Mirrors **Refit M2** (`75c6d42`). **✅ SHIPPED + DEPLOYED + PUSHED (wind-down 2026-07-24):** deployed live to **adna.network** via `npx astro build` → `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod` (`dpl_2qAgWuYA9D38F9g8Xyw8EhU7J8eB`, `readyState READY`/`target production`; home renders **74**, HTTP 200 live-verified); aDNA.aDNA `main` **pushed → origin/main** (`498f985` + close-out `4d78a0d` + wind-down; gitleaks pre-push clean). **Home stays local — never pushed** (Rule 4). Session AAR appended. **⏭ Next:** no active campaign; pre-existing follow-ups only (`vaults_graph.svg` 68→74 currency · `install_truth` regen at next deploy · `.adna` doc-name-leak pass). *(Clock note: `generated_at` rolled to UTC `2026-07-25`; human records use operator-frame 2026-07-24.)* Session `session_stanley_20260724_200611_registry_regen_73_74`.

> *(QUEUED banners 2026-07-24 → 2026-07-11 — Palimpsest v8.9 · Refit · Distillery v8.8 · Cleanroom v8.7 · Storyweave P3–P5, all COMPLETED — archive-shifted → [[STATE_archive]] §Shifted-2026-08-03; never deleted.)*

> *(QUEUED banners 2026-07-08 → 2026-07-05 — Storyweave P0–P1.6 · Ouroboros · Meridian · Concord · Fleet-Re-Seed, all closed — archive-shifted → [[STATE_archive]] §Shifted-2026-07-17 [Clear Hearth W-B slice 3]; never deleted. Kept live: the 07-11+ Storyweave P3→P5 + v8.7/v8.8 release arc.)*

> *(Older QUEUED banners archive-shifted → [[STATE_archive]] §Shifted-2026-07-06; never deleted per SO-6.)*

## 🌐 adna.network — LIVE on Cloudflare (2026-05-31)

**The aDNA site is live at https://adna.network** (canonical public face; adna.dev abandoned). **First executed ADR-031 Cloudflare migration** — API-driven, single operator-present session (operator hands-on = 1 token + 1 nameserver change). CF zone `667a2d5e…` (account `e048a126…`; NS `keanu`/`sierra.ns.cloudflare.com`); apex + www → Vercel `adna-docs` (`prj_SBKnZf…`) via **CNAME flattening**, DNS-only; **Mailgun email preserved** (MX×2 / SPF / `smtp._domainkey` DKIM / strict `_dmarc p=reject`). Canonical flipped: `site/astro.config.mjs` `site:` → adna.network + Vercel `SITE_URL` env + **prebuilt** redeploy (`dpl_AxbEXjuF…`; local build required — `prebuild` reaches `../scripts`); live `<link rel=canonical>` + 159-URL sitemap emit adna.network. **CF token onboarded to Home.aDNA broker** (Keychain `CLOUDFLARE_API_TOKEN` + zshrc + inventory C47; 1P backup = operator Touch-ID one-liner pending). **Skill graduated to SiteForge** — `skill_cloudflare_dns_cutover` v1.0.0 (ADR-031 successor-ownership relocated per operator directive; SiteForge owns build+deploy+DNS). **Operator override:** M5.7 O6 domain-cutover executed early — DNS/canonical only; **renamed no content** (honors the aDNALabs "nothing renames before the brief" broadcast). WARN: `SS_VERCEL_TOKEN` leaked again in a Vercel-CLI error (recurring incident) -> rotate. Seeded turnkey for next in-vault session: `worldgeno.me` (wga.aDNA M02, unblocked) + `stanley.science` (ScienceStanley M14). Doctrine: [[adr_031_cloudflare_dns_site_publishing_standard]].

## Current Phase

> *(Current-Phase rows 2026-07-01 → 2026-07-03 — the Champollion G0→G5 ladder + STR Track-C close — archive-shifted → [[STATE_archive]] §Shifted-2026-07-17 [Clear Hearth W-B slice 3]; never deleted.)*

> *(Current-Phase activity older than 2026-07-01 archive-shifted → [[STATE_archive]] §Shifted-2026-07-02 (Champollion M1.5); 48 bullets, never deleted per SO-6. This router keeps the recent live arc (Champollion 2026-07-02 + STR close 2026-07-01); older bullets archive-shifted, trim to the next diet.)*

## Active Campaigns

### `campaign_v8_9_release` (Operation Palimpsest — ✅ **COMPLETED 2026-07-24**; v8.9 SHIPPED [commit c8e5427 + tag v8.9]; P0→P1→P2→P3 all done — **DO NOT re-open**)

> *(Body archive-shifted → [[STATE_archive]] §Shifted-2026-08-03; the ruling above is the live record.)*

### `campaign_refit` (Operation Refit — ✅ **COMPLETED 2026-07-24**; G1 07-21 · G2 07-24 · **G3 07-24** [DP10: accept + push all + deliver 5 memos]; 6/6 missions, 21/21 A–E rows, no normative change — **DO NOT re-open**)

> *(Body archive-shifted → [[STATE_archive]] §Shifted-2026-08-03; the ruling above is the live record.)*

### `campaign_v8_8_release` (Operation Distillery — ✅ **COMPLETED 2026-07-14**; v8.8 SHIPPED, `a32724b` + tag `v8.8`)

> *(Body archive-shifted → [[STATE_archive]] §Shifted-2026-08-03; the ruling above is the live record.)*

> *(Completed-campaign entries — Cleanroom v8.7 · Meridian · operation_adna · feedback_loop · keystone · looking_glass · STR · network_audit · v2_infrastructure · Completed Mini-Campaigns — archive-shifted → [[STATE_archive]] §Shifted-2026-07-17; never deleted. Kept live: ACTIVE Distillery + Pending/seeded below.)*

### Pending Campaigns (seeded but not yet open)

#### `campaign_obsidian_deployment_stabilization` (NEW successor — seeded 2026-05-13 at M-LWX-03 S2 Phase L; **ABSORBED by `campaign_adna_serious_tool_readiness` 2026-05-17**)

`how/campaigns/campaign_obsidian_deployment_stabilization/` — implementation-focused successor to `campaign_lattice_workspace_ux`. Owner: Rosetta. Strategic intent: make the Obsidian deployment of every aDNA vault stable, standard, and self-stabilizing. **ABSORBED into `campaign_adna_serious_tool_readiness` Phase 3** (Forge Ecosystem Hardening) 2026-05-17 — 8 tracks T1-T8 distributed across v8 missions M3.1-M3.4. Stub directory preserved for audit (per Standing Order #6 archive-not-delete); status `planned` stays in stub frontmatter; effective status `absorbed_by: campaign_adna_serious_tool_readiness`. 7 backlog files F-S2-1..8 (in `aDNA.aDNA/how/backlog/`) source the v8 Phase 3 work directly.

#### `campaign_validation_node_adna_lwx_outputs` (NEW successor — seeded 2026-05-13 at M-LWX-03 S2 Phase L; lives in `lattice-labs/`)

`lattice-labs/how/campaigns/campaign_validation_node_adna_lwx_outputs/` — validation-focused successor; dispatched to Carly + Herb. Owner: Berthier (lattice-labs). Strategic intent: validate M-LWX-01/02/03 outputs on operator-owned machines via Carly+Herb dispatch. Phase 1 narrow: M-VNAL-01 covers outstanding O4 (wikilinks), O5 (cross-vault links), O6 (marketplace), O3-extended (full vault tables). Phase 2+ broader: recurring "Carly+Herb validate-all-aDNA-features" pattern — the FIRST instance of an explicit validation-dispatch campaign for aDNA work. Coord memo at `lattice-labs/who/coordination/coord_2026_05_13_carly_herb_node_adna_validation_dispatch.md`. Status: `planned`; opens when Carly + Herb each acknowledge the coord memo.

#### `campaign_adna_v3_ecosystem_compliance` (planned successor — seeded 2026-05-08)

`how/campaigns/campaign_adna_v3_ecosystem_compliance/` — applies v7.0 changes per-vault to the 19 active aDNA ecosystem vaults. Strategic intent: bring the lattice into full v7.0 compliance after the standard codifies it. Preliminary phase structure: P0 planning + P1 audit + P2 bulk skill upgrade + P3 git remote setup + GitHub naming standardization + P4 airlock adoption + workspace router resync + P5 final ecosystem audit + AAR. Preliminary mission outline: M01-EC (per-vault audit) → M02-EC (bulk skill upgrade) → M03-EC (git remote setup) → M04-EC (GitHub repo rename) → M05-EC (airlock adoption) → M06-EC (workspace router resync) → M07-EC (final audit + AAR). Estimated 12–20 sessions (recalibrated by M01-EC). Persona: Rosetta continues. **Opens at v2 P3 phase gate** (post-M03 flatten + M08a/M08b shipped); M11 of v2 finalizes the mission tree before this campaign opens.

> *(Operation Rosetta [absorbed by STR] + its phase table archive-shifted → [[STATE_archive]] §Shifted-2026-07-17; never deleted.)*

## Phase 7 Progress → archived
> *(Operation Rosetta Phase-7 100-cycle III loop + Persona Ranker Summary (done 2026-04-26; ranker 5.00) archive-shifted → [[STATE_archive]] §Shifted-2026-07-02, Champollion M1.5. Historical; live handoff = ⏭ QUEUED above.)*

## What's Working → archived
> *(the Phase-7-era site snapshot (117pp / 47 gates / "5 reviewer personas" — superseded: site 179pp, 16 personas, 281+ gates) archive-shifted → [[STATE_archive]] §Shifted-2026-07-02, Champollion M1.5. Historical; live handoff = ⏭ QUEUED above.)*

## Active Blockers

None.


## Next Steps → archived
> *(the 2026-06-24 keystone-DP2 Next-Steps snapshot (superseded by the ⏭ QUEUED banner above) archive-shifted → [[STATE_archive]] §Shifted-2026-07-02, Champollion M1.5. Historical; live handoff = ⏭ QUEUED above.)*

## Pending Manual Actions

- **ADR-010 Wilhelm co-sign** (carry) — gates the `/commons` un-embargo; first inclusion = the E5-close coordinated deploy (c169).
- **Hestia: vault-card public fields** — ack `coord_2026_06_10_rosetta_to_hestia_vault_card_public_fields.md` (Harness `display_name` split + optional taglines) → Rosetta regen + next deploy.
- **Hero eyeball (2 promoted candidates, 2026-06-10)** — `/get-started` doc-hero (`hero_get_started.png` ← `helix_r1_H2_v2`) + `/vaults/graph` band (`hero_vaults_graph.png` ← `sec_network_r1_N2_v2`); both LIVE; swap-and-redeploy is cheap if either misses.
- **GitHub social preview**: Upload `aDNABanner.png` (repo root; new banner from M3.2 S3 close 2026-05-22) at github.com/**aDNA-Network**/aDNA.aDNA > Settings > Social preview *(repo slug updated 2026-06-10 — org migration; old slug redirects)*. Supersedes prior recommendation to upload `site/public/images/og-default.png`; new banner is the canonical first-contact visual across all 3 surfaces (Astro hero + README + social preview).
- **Vercel Git integration**: Connect repo at vercel.com > adna-docs > Settings > Git for auto-deploy (currently manual via `vercel --prod`)
- **Google Search Console**: Register adna-docs.vercel.app, obtain verification code, add `<meta name="google-site-verification" content="...">` to `SEOHead.astro`
- **Bing Webmaster Tools**: Register adna-docs.vercel.app, obtain verification code, add `<meta name="msvalidate.01" content="...">` to `SEOHead.astro`
- **Delete M05 S2 scratch GitHub repo**: `github.com/ScienceStanley/m05-test` (private; ~10KB; verification scratch from 2026-05-18). Delete via GitHub UI > Settings > Delete, or refresh gh auth scope with `gh auth refresh -h github.com -s delete_repo` then `gh repo delete ScienceStanley/m05-test --yes`. Repo lingers because gh token at S2 only had `repo` scope (not `delete_repo`).
> *(Manual-action rows already ✅ RESOLVED (2026-04 → 2026-06: upstream PR #8 · `.adna/` README flatten-residue + banner · four Vercel production deploys) archive-shifted → [[STATE_archive]] §Shifted-2026-08-03; never deleted.)*


> *(Historical session log — ~20 `## Last Session (…)` blocks (2026-05→06-30) + the accumulated `## Next Session Prompt` stack (superseded 2026-06-27) — archive-shifted → [[STATE_archive]] §Shifted-2026-07-02 (Champollion M1.5). Never deleted (SO-6); the live handoff is the ⏭ QUEUED banner at the top.)*

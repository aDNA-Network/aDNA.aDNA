---
type: mission
mission_id: mission_adna_str_p5_m512_e5_public_good_commons
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.12
decadal: E5
slug: e5_public_good_commons
created: 2026-06-07
updated: 2026-06-10   # c165 done — O3 Stage-5 build complete; next c166-168 MAX-III
opens_at: 2026-06-07
opened_session: session_stanley_20260608T042346Z_v8_m512_e5_open
status: in_progress
estimated_sessions: 3-4   # E5 decadal: design (Stages 0-4) + data foundation + build III cycles (160-~169) + AAR/RLP (E4 actual ran to 10)
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: full
mission_class: implementation   # third ecosystem build mission; enters site/ code + the prebuild data layer
verification_surface: build   # Astro build + Lighthouse + Playwright + 30-persona Reviewer Lens Pass
token_budget_estimated: "open session (design Stages 0-4) ~40-70 kT; build cycles (160-168) ~120-220 kT each across sessions; cycle-169 30-persona RLP Workflow ~400-520 kT (parallel fan-out, per E1/E4 lens-Workflow spends)"
reviewer_lens_pass: true   # E5 IS an RLP decadal (RLP cadence = D17·E1·E3·E5·E6) AND gets the EXTRA RLP per the MAX-III directive (m57 §MAX-III)
prerequisite_missions:
  - mission_adna_str_p5_m57_adnalabs_expansion_planning_stub   # ratified E-series sequence + Track G/E5 charter + the public-good ethos scope
  - mission_adna_str_p5_m510_e1_brand_positioning   # E1 homepage §5 already teases the commons; E5 is the surface it points at; RLP-shape precedent
  - mission_adna_str_p5_m511_e4_adnanetwork   # the edge-overlay adaptation-seam pattern (ADR-033) E5 reuses; the Gap Register E5 consumes
prerequisite_artifacts:
  - aDNA.aDNA/what/design/narrative_ethos_public_good.md   # the why/what-it-says — E5 is this brief made concrete
  - aDNA.aDNA/what/design/front_page_doctrine.md   # how a surface is composed (line 117 §5 tease)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_eseries_ecosystem_theme_set.md   # E5 row, RLP cadence, new dims, MAX-III
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_persona_bench_expansion_v2.md   # the 30-persona bench + dim ownership (Trust/Provenance, Participation Scent)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_decadal_e4_adnanetwork.md   # the Gap Register (mobile-graph #1) + "score the seams" lesson E5 applies
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_decadal_e1_brand_positioning.md   # RLP-shape precedent + honest-deferred-scope close
  - aDNA.aDNA/site/src/data/vaults.json   # the stable seed the showcase builds against
tags: [mission, m5_12, e5, v8, p5, implementation, public_good_commons, subnetwork_federation, agentic_context_democracy, reviewer_lens_pass, trust_provenance, participation_scent, ethos_made_concrete, ecosystem_site, max_iii]
---

# Mission M5.12 / E5 — Public-Good Commons & Subnetwork Federation

> ▶️ **RESUMED 2026-06-10 at cycle 162** — the side campaign **`campaign_adna_network_audit`** closed (P0–P2 complete; final AAR `aar_audit_p0_p1s1.md`). Its campaign-tier findings are folded into the realigned per-cycle plan (design spec §Per-cycle plan): **c162 = context-graph experience** (inserted; audit gap #17 + operator directive — home-page glyph art + framing onto `/vaults` + `/vaults/graph`), c163 = Connect + C4 CTAs, c164 = first social surface, c165 = §5 hand-off + C3 nav, c166–168 = MAX-III + C1/C2 spine, c169 = close + C5 coordinated deploy. *(Pause history: paused 2026-06-08 at c161, last pre-pause commit `2c27518`; cycles 160–161 done commit-only. Paused again 2026-06-10 post-c163 — c164 prepared-not-built. **Resumed + c164 executed later that day** from the prepared spec; see O3.)* **New downstream decadal:** the audit also seeded **E6 / M5.13 Onboarding & Install Portal** (operator-ratified 2026-06-10; capstone renumbered E6→E7) — opens at c170 after this decadal closes; its install-truth data layer + `/get-started` truth fixes were pre-staged at the audit P2 (E6-O2 carry-down).

> The **ethos-bearing** E-series build mover (per the [[m57_eseries_ecosystem_theme_set|M5.7 charter]], Track G): the surface that makes the [[narrative_ethos_public_good|public-good ethos]] *concrete* — not by asserting the abundance thesis but by **pointing at real public-good work and letting it speak**. It features four real, mission-aligned subnetworks already in this workspace (WGA · Context Commons · WilhelmAI · Rare Archive), gives the site a **"connect to a subnetwork"** surface, and stands up the **first social surface** (contributors / attribution / activity over the living registry). Per the charter this is **showcase do-now** (buildable on `vaults.json` + federation refs); the **full social layer** (profiles / follows / feeds / governance) stays an explicit **Venus-gated horizon** — the campaign builds *toward* it, it does not pretend to ship it. Runs [[skill_site_design_pipeline]]: **Stages 0–4 design → operator Stage-0 sign-off → Stage 5 build III cycles (160–~169) → Stage 6 measure → Stage 8 iterate → Stage 7 Reviewer Lens Pass at the close**. E5 **is** an RLP decadal (the RLP cadence is D17·E1·E3·E5·E6) **and** gets the *extra* Reviewer Lens Pass per the MAX-III directive; the owning new dimensions are **Trust/Provenance** + **Participation Scent**.

## The crux (why E5, like E4, is a data problem before it is a design problem)

The four featured subnetworks already exist as vault records in `vaults.json` — but as **registry stubs**: `status: pending`, **no `headline_mission`**, bare slug-derived display names ("wga", "WilhelmAI"), some with no persona. The site can list them but cannot *show them honestly* — there is no curated, cited public-good narrative (what each subnetwork is, who it serves, where its public work lives, how it aligns with the commons ethos). The crux of E5 is to **curate that narrative data first** — a cited `subnetworks.yaml` overlay (the same ADR-033 adaptation-seam pattern E4 used for edges) — and then build the showcase, the connect affordance, and the first social surface over it. **Data before design** (E4 §7.3): the strongest, quietest statement of the ethos is real work shown accurately, so the data has to be real and cited first.

## Objectives

1. **O1 — Stages 0–4 design spec** (this session; pre-build): the E5 surface design — the commons showcase page, the subnetwork detail treatment, the "connect to a subnetwork" affordance, the first social surface (contributors/attribution/activity), the homepage §5 hand-off, the `subnetworks.yaml` data approach, the RLP routing + the Trust/Provenance + Participation-Scent dimensions, and the per-cycle plan (160–~169). Deliverable: [[m512_e5_public_good_commons_design_spec]]. **Gate:** ✅ **operator ratified Stage-0 2026-06-07** (AskUserQuestion) — `/commons` · 4 subnetworks (curated) · social MVP lean-minimal · `subnetworks.yaml` overlay (ADR-034) · hero Direction B. Stage 5 build unlocked.
2. **O2 — Data foundation** ✅ **DONE 2026-06-07 (cycle 160)** — `subnetworks.yaml` (4 cited subnetworks) + generator projection (`subnetworks.json`) + `/commons` scaffold; build 163pp/0err, gates 91/91, axe 0 AA both modes, Lighthouse `/commons` 100/100/100/100; WF pair operator-cleared (ADR-010-window override) + commit-only until close-deploy. (cycle 160): author `site/src/data/subnetworks.yaml` (the 4 featured subnetworks, each a **cited** bundle: display name · mission blurb · who it serves · member vault(s) resolved to `vault_slug` · outbound public URL · ethos alignment), merge/project it in `scripts/build_vaults_data.mjs`, regenerate. **Honest-showcase constraint:** every claim cites a governance source (the subnetwork's CLAUDE.md / STATE / coord memo); no fabricated metrics, no vanity numbers.
3. **O3 — Stage 5 build** (cycles 161–165 post-realign): the `/commons` showcase page (ethos hero → featured-subnetwork grid → connect CTA → contributors/activity → govern/trust close); the subnetwork detail treatment + the **"connect to a subnetwork"** affordance; the **first social surface** (contributors/attribution/activity over the registry — honest MVP, horizon note); the homepage **§5** hand-off (the E1 tease now points at a live surface) + nav entry + cross-links. *Progress: c161 ✅ hero+grid · c162 ✅ context-graph (inserted) · **c163 ✅ 2026-06-10** — `#connect` band + ratified hero CTA restored + NEW shared `ClosingCTA.astro` closing the 6 audience pages / `/community` / all vault-detail on real actions (audit C4; commit `90c2395`; gates 120/120; ledger `cycle_163_E5_connect_c4_ctas.json`) · **c164 ✅ 2026-06-10** — first social surface executed from the prepared spec ([[m512_e5_c164_first_social_surface_build_spec]] `ready_to_execute` → `executed`): "The commons, today" `#today` Dense band (registry-only stewardship ledger + freshness + anti-vanity + full horizon note) + `#join` "Join & steward" Stage-3 close + connect-horizon hand-off (commit `06873fc`; gates **121/121** — baseline 120→121 via the public-face install-truth re-cut `4b419d3`, which also discharged the spec's §1 fixture conditional; ledger `cycle_164_E5_first_social_surface.json`). **c165 ✅ 2026-06-10** — homepage **§5 "Join the network" BUILT** (E1-deferred, doctrine §8.5: governance-linked lede + 4-subnetwork tease verbatim from `subnetworks.json` + commons/community CTAs + "aDNA for…" pathways row) + **C3 nav/orphan surfacing** (Commons 8th header item, switch-on 900→1024px per measured fit — c158 class 3rd instance; footer top-level model; "For you" sidebar group + switcher unified to header order; mobile `<details>` disclosure; audience terminal breadcrumbs; `/network` "a commons" seam — `/commons` orphan discharged). 3 root-cause finds fixed (missing `--space-5/10/20` tokens healing ~25 latent declarations · pre-existing desktop-hamburger specificity bug · purple-on-surface AA on the disclosure card). Gates **121→140** (gate-9 +tablet_wide row; NEW gate-13 nav-surfacing); commit `e9d0b43`; ledger `cycle_165_E5_section5_c3_nav.json`. **O3 Stage-5 build COMPLETE; next = c166–168** (MAX-III + C1/C2).*
4. **O4 — Stage 6 measure + Stage 8 iterate** (cycles 165–168): MAX-III deep per-page/section III; Lighthouse (Perf 100 / a11y ≥ 99 / reduced-motion honored) + the FULL Playwright gate suite both light + dark; Trust/Provenance + Participation-Scent dimension passes; responsive/mobile (carry the **E4 Gap #1** mobile-graph fix where the commons reuses graph/registry surfaces); copy tightening against the AVOID register.
5. **O5 — Stage 7 Reviewer Lens Pass + E5 decadal close** (cycle 169): the **full 30-persona Reviewer Lens Pass** (mandatory Community Lead + Conversion/Growth + Newcomer + Design Critic + Content Strategist + **Movement Skeptic**) run as a parallel multi-agent Workflow → `rlp_e5_30persona_results.json`; the 11-section decadal AAR; STATE/STR close cascade; candidate **ADR-034** (subnetworks overlay / adaptation seam) routed to the phase-exit gate per campaign SO #14.

## Hard constraints

- **Ethos felt, not preached (load-bearing):** the public-good showcase is "the strongest, quietest statement — *we point at real public-good work, and let it speak*" (ethos §3). The `writing-guidelines` AVOID register is the hard guardrail (no "revolutionary/transformative," no marketing adjectives). The **Movement Skeptic** owns the earned-conviction call — the showcase must read as *credible invitation*, never hype.
- **Honest showcase:** every subnetwork claim is traceable to a governance source; the showcase is **curated, not exhaustive** (extensible — named as such). No fabricated contributor counts, stars, or activity metrics; the "first social surface" shows only what the data layer truly knows (creators/personas/governance owners, `updated`/changelog, federation refs).
- **Honest scope line:** the MVP social surface (contributors / attribution / activity) ships now; the **full social layer** (profiles / follows / feeds / governance) is **Venus-gated horizon** and must be named as such on the surface — co-designed with `Network.aDNA` (Venus) on the membership/federation substrate. Build *toward* it; do not imply it exists.
- **Local overlay = adaptation seam, not a fork:** `subnetworks.yaml` is curated in aDNA.aDNA to unblock E5 now and **upstreams to `Home.aDNA`** (vault cards / inventory) later (post-decadal Hestia coord; local-by-default, Standing Rule 4) — candidate ADR-034, the same discipline as E4's ADR-033.
- **Build idempotency preserved:** sorted-key output; byte-stable on re-run (ADR-023 contract); overlay loads on both the Home-present and Home-absent (CI/Vercel fallback) paths.
- **Doctrine compliance:** Tokyo-Night dark-first; reuse `HomeHero` / `CardGrid` / `VaultCard` / `RegistryCard`; `/commons` is an *internal* surface so may run denser than the homepage 5±1, but ≤2 fighting colors, motion entrance/scroll-reveal only + `prefers-reduced-motion`, abstract-geometric imagery only.
- **Score the seams, not the surfaces** (E4 §7.2): run the RLP on **all** landing surfaces including the deep subnetwork-detail pages; verify dark-first via computed style, not the screenshot (E4 §7.4).
- Engine files (`skill_iii_cycle`, `skill_site_design_pipeline`, `skill_decadal_aar`) unedited; archive-never-delete; rename nothing.

## Featured subnetworks (the seed set — cited; curated, not exhaustive)

| Subnetwork | Vault (`vault_slug`) | What it is | Public face |
|---|---|---|---|
| **World Genome Academy** | `wga.aDNA` | global genomics education/research org-vault; 5-Council governance | worldgeno.me |
| **Context Commons** | `ContextCommons.aDNA` | community agentic-literacy & enablement; shared FAIR context pool | (vault) |
| **Wilhelm AI for the Undiagnosed** | `WilhelmAI.aDNA` | AI4U umbrella over rare-disease initiatives; anchor Wilhelm Foundation | (vault) |
| **Rare Archive** | `RareArchive.aDNA` | OSS rare-disease AI; canonical repo Wilhelm-Foundation/rare-archive | github (RareArchive) |

> Each row's narrative + citations are authored into `subnetworks.yaml` at cycle 160 from the subnetwork's CLAUDE.md / STATE / the `who/coordination/coord_2026_05_09_v7_*` memos. WilhelmAI umbrellas RareArchive (an existing `vaults.json` edge) — the commons can show that nesting honestly.

## E4 Gap Register / RLP priority-queue items E5 consumes

| Source | Item | E5 disposition |
|---|---|---|
| E4 Gap #1 | **Mobile `/vaults/graph` legibility** (headline carry, 3 lenses) | apply the mobile-graph fix on any commons surface that embeds the graph/registry (cycles 165–168) |
| E4 Gap #5 | Accessible (non-hover) edge-type gloss | reuse the accessible-gloss pattern for any relationship cues on subnetwork detail |
| E4 §11 PQ#3 | Deep-surface boundary/join cues | the connect affordance + join scent on every commons surface (Participation Scent dim) |
| E1 RLP | Public-good commons (the §5 tease) | **this mission is its payoff** — E1's homepage tease now points at a live surface |

## Lightweight/decadal AAR (filled at decadal close)

> Full decadal AAR (11-section + §11 30-persona Reviewer Lens Pass): [[aar_decadal_e5_public_good_commons]] (authored at cycle 169).

- **Worked**: _(fill at close)_
- **Didn't**: _(fill at close)_
- **Finding**: _(fill at close)_
- **Change**: _(fill at close)_
- **Follow-up**: _(fill at close)_

## See also

- [[m512_e5_public_good_commons_design_spec]] — the Stages 0–4 design spec (Stage-0 gate)
- [[narrative_ethos_public_good]] — the why/what-it-says; E5 is this brief made concrete
- [[m57_eseries_ecosystem_theme_set]] — E-series sequence · Track G/E5 · RLP cadence · Trust/Provenance + Participation-Scent dims · MAX-III
- [[aar_decadal_e4_adnanetwork]] — the data-overlay (ADR-033) pattern + the Gap Register E5 consumes
- [[aar_decadal_e1_brand_positioning]] · [[rlp_e1_30persona_results]] — the RLP-shape precedent + honest-deferred-scope close
- [[front_page_doctrine]] — homepage §5 hand-off · [[m57_persona_bench_expansion_v2]] — the 30-persona bench

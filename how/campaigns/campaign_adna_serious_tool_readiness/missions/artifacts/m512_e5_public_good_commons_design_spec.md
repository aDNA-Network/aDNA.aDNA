---
type: artifact
artifact_class: design_spec
created: 2026-06-07
updated: 2026-06-07
mission: mission_adna_str_p5_m512_e5_public_good_commons
campaign: campaign_adna_serious_tool_readiness
phase: 5
decadal: E5
persona: rosetta
status: ratified   # Stage-0 gate PASSED 2026-06-07 (operator): /commons · 4 subnetworks (curated) · social MVP lean-minimal · subnetworks.yaml overlay (ADR-034) · hero Direction B
last_edited_by: agent_stanley
grounded_by:
  - what/design/narrative_ethos_public_good.md
  - what/design/front_page_doctrine.md
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_eseries_ecosystem_theme_set.md
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_persona_bench_expansion_v2.md
  - site/src/content/reference/visual-identity-v2.mdx
  - site/src/content/reference/writing-guidelines.mdx
companions:
  - site/src/data/subnetworks.yaml   # the curated subnetwork overlay this spec governs (cycle 160)
  - scripts/build_vaults_data.mjs   # the generator the overlay merges/projects into (ADR-023)
tags: [design_spec, e5, public_good_commons, subnetwork_federation, reviewer_lens_pass, trust_provenance, participation_scent, ethos_made_concrete, stages_0_4, max_iii]
---

# E5 Public-Good Commons Design Spec — Stages 0–4

> The Stages 0–4 design for the **Public-Good Commons & Subnetwork Federation** surface (Track G — the ethos-bearing E-series decadal). Governs the whole E5 decadal (cycles 160–~169). Built to [[narrative_ethos_public_good]] (the *why/what it says*) + [[front_page_doctrine]] (the *how*) + visual-identity-v2 + writing-guidelines, against the **stable seed** `vaults.json` behind a `subnetworks.yaml` adaptation seam. E5 **is** an RLP decadal — it closes on a **full 30-persona Reviewer Lens Pass** (mandatory Community Lead · Conversion/Growth · Newcomer · Design Critic · Content Strategist · Movement Skeptic), soft-gating the two new dimensions **Trust/Provenance** + **Participation Scent**.
>
> **No `site/` code is written until the operator ratifies the Stage-0 positioning/scope.** The five Stage-0 decisions are flagged inline and collected at the gate (§Stage-0 ratification).

## Stage 0 — Vision & audiences

**Thesis (the ethos made concrete):** a visitor should leave understanding three things — *(1)* the aDNA network already carries **real public-good work** — genomics education, agentic-literacy enablement, rare-disease AI — not a hypothetical; *(2)* these are **mission-aligned subnetworks** you can see, trust (open, cited, governed), and **connect to**; *(3)* this is a **commons you can join and contribute to**, accelerated by agentic context literacy — the abundance thesis *shown in practice, not asserted*. The ethos is the gravity, never the slogan.

**Audiences / owning lenses** (per [[m57_persona_bench_expansion_v2]]):
- **Community Lead** — "is this a commons I'd contribute to, framed who-not-how-many?" (the participation/contribution funnel).
- **Conversion/Growth** — "can a visitor tell how to join / connect to a subnetwork in 60s?" (**Participation Scent** dim).
- **Newcomer** — "in 60s, what is this commons and why does it matter?" (no jargon wall on the deep pages).
- **Movement Skeptic** (adversarial) — "is the conviction *earned* by real work, or is it hype?" (the AVOID-register guard).
- **Marketplace Publisher/Consumer/Enterprise** — "is the public-good work conveyed credibly — provenance, attribution, FAIR?" (**Trust/Provenance** dim).

**Anti-goals:** a vanity-metrics wall (stars/contributor counts the data can't honestly support); a "logo soup" of unexplained projects; sermonizing copy ("revolutionary," "change the world"); a social surface that *implies* profiles/follows/feeds exist when they don't; a commons page that's a dead-end (no real connect affordance).

## Stage 1 — Design-DNA

- **Register:** Tokyo-Night dark-first; the *work* is the hero (real subnetworks shown accurately, ~0 marketing words — the registry-as-hero discipline E1/E4 earned). `/commons` opens sparse-manifesto then steps to a medium showcase grid and a denser contributors/activity band.
- **Reuse, don't reinvent:** `HomeHero` (ethos hero), `CardGrid` + `VaultCard`/`RegistryCard` (the featured-subnetwork grid — a curated card style over the existing registry card), `Callout` (the honest-scope/horizon note), `Breadcrumb` + `PrevNextNav` (navigability — apply the E4 "score the seams" lesson). New component: `SubnetworkCard.astro` (+ a connect affordance) only where the registry card genuinely doesn't fit.
- **Ethos DNA:** "we point at real public-good work and let it speak" (ethos §3). Verbs carry the conviction (*build · share · govern · steward · for the good of humanity*); claims name a shared future, not a product; every subnetwork blurb is cited. Who-not-how-many (Val Town lesson) — *who* stewards each subnetwork, not how many stars.
- **Reference inspection (Stage-1 feed):** public-good/commons + ecosystem-showcase exemplars — e.g. Ethereum ecosystem-map role-pathways (movement+credibility), Mozilla/Wikimedia commons framing (stewardship-not-extraction tone), Hugging Face org/space showcase density (who-not-how-many). Lesson cluster: **named stewards + a cited mission + one honest connect path** make a showcase credible; logo soup + vanity metrics do not. Run `skill_reference_inspection` deeper at cycle 161 (MAX-III).

## Stage 2 — IA / surfaces

**The surfaces (the page name is a Stage-0 decision — `/commons` recommended; `/subnetworks` is the alternative):**

1. **`/commons` (NEW — showcase + connect)** — internal surface, banded Sparse→Medium→Dense→Sparse:
   - **Sparse — ethos hero** — "The work already happening" (or similar; copy directions below). One line that frames the commons as real public-good work held in trust; one primary CTA (*Connect a subnetwork*) + one secondary (*What is the commons?*). Words-as-focus, no competing banner.
   - **Medium — the featured subnetworks** — a curated grid of the 4 seed subnetworks (`SubnetworkCard`: display name · steward/persona · one cited mission line · who it serves · outbound public link · "connect"). Named as **curated, not exhaustive**.
   - **Medium — what a subnetwork is / how to connect** — the **"connect to a subnetwork"** affordance made concrete: what connecting means (federate a wrapper / follow the public work / contribute), the local-by-default boundary carried from E4, and an honest "this is the MVP; the full social layer is coming" note.
   - **Dense — the living registry as the first social surface** — contributors / attribution / activity drawn *only from what the data truly knows* (stewards/personas/governance owners; `updated`/changelog; federation refs). Who-not-how-many. The **horizon note** (profiles/follows/feeds/governance = Venus-gated) named here.
   - **Sparse — join & steward** — the participation CTA (band together via agentic context literacy) + the govern/trust anchor + the ethos close.
   *(cycles 161–164)*
2. **Subnetwork detail treatment (POPULATE/light)** — *Stage-0 decision:* a dedicated `/commons/[slug]` route **or** an expanded card / link-out to the existing `/vaults/[slug]`. Recommended MVP: **link the card to the subnetwork's `/vaults/[slug]`** (already built in E4) + its outbound public URL, and reserve a dedicated detail route for a later cycle if the RLP demands it (avoid building a thin second detail surface). *(cycle 162)*
3. **Homepage §5 hand-off (UPDATE)** — `front_page_doctrine` line 117: the homepage "Join the network" §5 already *teases* the commons; E5 makes that tease point at the live `/commons` surface (`site/src/data/home.ts` + `index.astro`). *(cycle 164)*

**Nav:** add `/commons` to the header nav (placement TBD at build — adjacent to `Community`/`The Lattice`; mind the E4 c158 lesson that a 7th nav item overflowed the desktop row at 768px → gate-9 guards it).

**The data layer (adaptation seam):** `site/src/data/subnetworks.yaml` (curated here) → merged/projected in `build_vaults_data.mjs` → a `subnetworks.json` (or a `subnetworks[]` block on `vaults.json`). Upstreams to `Home.aDNA` later; until then the overlay is the single source for subnetwork narrative.

## Stage 3 — Wireframe (block-out)

```
/commons (NEW, cycles 161–164)
┌──────────────────────────────────────────────┐
│  HERO  "The work already happening"           │  Sparse · ethos, shown not preached
│  [Connect a subnetwork]  [What is the commons?]│  1 primary + 1 secondary CTA
├──────────────────────────────────────────────┤
│  Featured subnetworks   (curated, not all)    │  Medium
│  ┌──────────┐┌──────────┐┌──────────┐┌──────┐ │  SubnetworkCard:
│  │ WGA      ││ Context  ││ WilhelmAI ││ Rare │ │   steward · cited mission ·
│  │ steward  ││ Commons  ││ (umbrella ││Archive│ │   who it serves · ↗public ·
│  │ ↗worldgeno││          ││ →RareArch)││      │ │   [connect]
│  └──────────┘└──────────┘└──────────┘└──────┘ │
├──────────────────────────────────────────────┤
│  How to connect to a subnetwork               │  Medium
│  federate · follow · contribute  + local line │  (E4 local/shared carried)
├──────────────────────────────────────────────┤
│  The commons, today  (contributors/activity)  │  Dense · who-not-how-many
│  stewards · attribution · recent activity     │  + HORIZON note (full social = Venus)
├──────────────────────────────────────────────┤
│  Join & steward   (CTA + govern anchor + ethos)│  Sparse · participation scent
└──────────────────────────────────────────────┘
   homepage §5 "Join the network" → now links /commons (cycle 164)
```

## Stage 4 — Hi-fi deltas

- **Subnetwork-card craft:** a curated card distinct from the dense registry card — room for the steward, one cited mission line, who-it-serves, and an outbound link + connect affordance. Signal pair only: cyan `--brand-link #7dcfff` (links/connections) + purple `--brand-primary #9d7cd8` (accents); amber `#e0a84c` decorative/large only — **no new accent colors** (≤2 fighting colors).
- **Imagery:** abstract-geometric only; reuse existing SS-Ghibli/DNA-helix register assets where a hero image helps; **no logo soup**, no stock, no figurative people. Real outbound links stand in for "proof," not badges.
- **Trust/Provenance cues:** each subnetwork shows its governance anchor (CLAUDE.md / canonical repo) + open/FAIR framing — *held in trust*, not compliance boilerplate. Citations visible or one click away (accessible, not hover-gated — E4 Gap #5).
- **Motion:** entrance + scroll-reveal only; one *meaningful* motion at most (e.g., the grid composing); `prefers-reduced-motion` zeroed; Lighthouse Perf 100 hard gate.
- **Voice:** ~55/45 — measured, real, cited; **zero** marketing adjectives (Anti-Bloat + Brand Strategist + Movement Skeptic guard).

### Hero copy — directions (operator picks/edits at Stage-0; E1 precedent)

All ~30–45 words, ethos subtle, no marketing adjectives, name the work not the product.

- **Direction A — the work, shown:** *"The work already happening."* / "Genomics education. Agentic-context literacy. Rare-disease AI built in the open. Real subnetworks on the aDNA network, stewarded in common — and open for you to connect to." `[Connect a subnetwork]` `[What is the commons?]`
- **Direction B — the commons, named:** *"A commons, not a catalog."* / "Mission-aligned subnetworks build, share, and govern shared context in the open — so the abundance AI creates belongs to everyone. See them, trust them, connect to them." `[Connect a subnetwork]` `[Read the standard]`
- **Direction C — the invitation:** *"Band together for the good of all."* / "People and their agents, joined across mission-aligned subnetworks and accelerated by shared context literacy. This is where the public-good work of the aDNA network lives." `[Connect a subnetwork]` `[Meet the subnetworks]`

> Movement-Skeptic guard: whichever hero is chosen must be backed immediately by the featured grid's *real, cited* subnetworks — or it reads unearned (the E1 lesson).

## Subnetwork overlay — the cited derivation (subnetworks.yaml)

Authored at cycle 160 from each subnetwork's CLAUDE.md / STATE / the `who/coordination/coord_2026_05_09_v7_*` memos. Cited; curated; 4 seed entries. Representative shape (final authored in the YAML, each field with a source comment):

```yaml
# subnetworks.yaml — curated public-good showcase overlay (E5; candidate ADR-034)
# Upstreams to Home.aDNA vault cards later (Hestia coord; local-by-default, Rule 4).
world_genome_academy:
  display_name: World Genome Academy
  member_vaults: [wga.aDNA]          # resolved to vault_slug at build
  steward: "5-Council governance"     # cited: wga.aDNA/CLAUDE.md
  serves: "global genomics education & research"
  public_url: https://worldgeno.me
  ethos_alignment: "education as a commons"
  cite: wga.aDNA/CLAUDE.md
wilhelm_ai:
  display_name: Wilhelm AI for the Undiagnosed
  member_vaults: [WilhelmAI.aDNA, RareArchive.aDNA]   # WilhelmAI umbrellas RareArchive (existing vaults.json edge)
  steward: "Hygieia · anchor Wilhelm Foundation"
  serves: "rare & undiagnosed disease"
  cite: WilhelmAI.aDNA/CLAUDE.md
# … Context Commons, Rare Archive …
```

> Authoring discipline: a subnetwork is featured only if its member vault(s) exist in `vaults.json` (no dangling cards); claims cite a governance source; **no fabricated metrics**. The registry-stub gap (status:pending, empty headline_mission) is exactly what this overlay fills — honestly.

## Per-cycle plan — E5 decadal (cycles 160–~169)

| Cycle | E5 # | Theme | Session |
|---|---|---|---|
| 160 | 1 | **Data foundation** — `subnetworks.yaml` (4 cited subnetworks) + generator merge/projection + regen; `/commons` route scaffold | post-Stage-0 |
| 161 | 2 | `/commons` bands 1–2 — ethos hero (chosen direction) + featured-subnetwork grid (`SubnetworkCard`, real cited cards) | later |
| 162 | 3 | **Connect-to-a-subnetwork** affordance + subnetwork→`/vaults/[slug]` link-out + local/shared boundary carried from E4 | later |
| 163 | 4 | First social surface — contributors/attribution/activity over the registry (honest MVP) + the **horizon note** (Venus-gated) | later |
| 164 | 5 | Homepage **§5** hand-off (tease → live `/commons`) + nav entry + cross-links + breadcrumbs (seams) | later |
| 165–168 | 6–9 | **MAX-III** deep per-page/section measure+iterate — Trust/Provenance + Participation-Scent passes; responsive/mobile (carry **E4 Gap #1**); copy tightening (AVOID register); axe both-modes; reference-inspection feed | later |
| 169 | 10 | **E5 decadal close** — 11-section AAR + **full 30-persona Reviewer Lens Pass + Movement Skeptic** + Lighthouse/Playwright + STATE/STR cascade; ADR-034 → phase gate | later |

## Audit carry-ins (from `campaign_adna_network_audit`, folded at its P2)

The adna.network audit side campaign (paused E5 at c161; see `aar_audit_p0_p1s1.md` gap register) routes its **campaign-tier** findings into these cycles — pre-staged here so they're visible when E5 resumes; the full per-cycle objective edits execute at the audit's P2 (`mission_ana_p2_closeout_realign`):

- **c162** — **C4** closing-CTA partials (audience/community/vault-detail) land alongside the **Connect affordance**.
- **c164** — **C3** surface the orphaned funnels in nav: `/commons` nav entry + audience pages (researchers/educators/enterprise/compliance/startup-first-hour) + unify the BaseLayout/DocumentationLayout secondary-nav split + mobile SidebarNav disclosure.
- **c164–168** — **C1** home-hero **concrete-then-ethos** (add a plain-language functional definition before the ethos; surface the existing `/learn/what-is-adna`; promote How-it-Works above the registry) + **C2** a single **terminology/object-model spine** (node/aDNA-computer/vault/network) across home/network/vaults.
- **c169 (close deploy)** — **C5** once the ADR-010 Wilhelm co-sign clears, the **coordinated HEAD deploy** publishes `/commons` + the accumulated P1 fixes together; establish a **deploy cadence** (`idea_deploy_cadence`) so live stops drifting behind HEAD.
- **MAX-III (165–168)** also absorbs the audit's Phase-1b residue (light-mode parity, generated-detail axe sample, mobile-qual) if not already closed in P1-S3.

> Cross-cutting credibility/a11y/SEO fixes already shipped live in the audit's **P1-S1** (GitHub links, `The Lattice`→`Vaults`, vault-meta/CakeHealth scrub, robots, version, `/vaults` contrast). Housekeeping (version-constant, vault-count reconciliation, Harness display, SidebarNav scoping, spec banner + JSON-LD) is the audit's **P1-S4** — not E5's job.

## Persona routing (Reviewer Lens Pass at cycle 169)

E5 closes on the **full 30-persona Reviewer Lens Pass** (the D17·E1·E3·E5·E6 cadence) run as a parallel multi-agent Workflow (blind: each agent given neutral facts + source paths + screenshots, NOT primed with self-scores). Mandatory reviewers: **Community Lead** (commons/contribution), **Conversion/Growth** (Participation Scent), **Newcomer** (60-sec What/Why), **Design Critic** ("made on purpose"), **Content Strategist** (copy/AVOID register), **Movement Skeptic** (earned conviction, adversarial). Adopters: all core + Marketplace Publisher/Consumer/Enterprise (Trust/Provenance). 

**Gate:** per-track ranker target **≥4.95 mean; no dim <4.80** (E1 precedent: a decadal may close *honestly below* the gate when the shortfall is **priced deferred scope** — e.g. the full social layer — not defects; the RLP then generates the priority queue for E6/horizon). The two new dims **Trust/Provenance** + **Participation Scent** are **soft-gated this decadal** (one decadal of calibration per the m50 secondary-dimension precedent), then hard-gate at E6. **Network Legibility** carries from E4 where the commons reuses graph/registry surfaces.

## ADR-034 (candidate) — subnetwork showcase overlay / adaptation seam

The local `site/src/data/subnetworks.yaml` overlay merged/projected by the ADR-023 generator is the theme-set's "stable seed behind a thin adaptation layer." Proposed as **ADR-034**, ratified at the **phase-exit gate** (campaign SO #14 — not mid-phase). Records: the overlay is curated in aDNA.aDNA to unblock E5, is authoritative for subnetwork narrative until upstreamed, and **upstreams to `Home.aDNA` vault cards / inventory** (Hestia coord) post-decadal, after which it shrinks toward nothing without a rebuild. Sibling to **ADR-033** (E4 edge overlay).

## Stage-0 ratification — ✅ PASSED 2026-06-07 (operator, AskUserQuestion)

1. **Page name** — ✅ **`/commons`**.
2. **Featured set** — ✅ the 4 seed subnetworks (WGA · Context Commons · WilhelmAI · Rare Archive), **curated, not exhaustive** (operator did not override).
3. **First-social-surface MVP scope** — ✅ **lean minimal**: show only what the data truly knows (stewards/personas, governance owners, `updated`/changelog, federation refs — who-not-how-many); the full social layer (profiles/follows/feeds/governance) named as **Venus-gated horizon**.
4. **Data approach** — ✅ a standalone **`subnetworks.yaml` overlay → `subnetworks.json`** (mirrors ADR-033; candidate **ADR-034**).
5. **Hero direction** — ✅ **Direction B — "A commons, not a catalog"** ("Mission-aligned subnetworks build, share, and govern shared context in the open — so the abundance AI creates belongs to everyone. See them, trust them, connect to them." `[Connect a subnetwork]` `[Read the standard]`).

> **Stage 5 build unlocked.** The Movement-Skeptic guard applies: the featured grid's *real, cited* subnetworks must immediately back the "a commons, not a catalog" claim, or it reads unearned (the E1 lesson).

## Related

- [[mission_adna_str_p5_m512_e5_public_good_commons|M5.12 / E5 mission]]
- [[narrative_ethos_public_good]] — the why/what-it-says; E5 is this brief made concrete
- [[m57_eseries_ecosystem_theme_set]] — E-series sequence · Track G/E5 · RLP cadence · new dims · MAX-III
- [[m57_persona_bench_expansion_v2]] — the 30-persona bench + dim ownership
- [[aar_decadal_e4_adnanetwork]] — the ADR-033 data-overlay pattern + the Gap Register E5 consumes
- [[aar_decadal_e1_brand_positioning]] — the RLP-shape precedent + honest-deferred-scope close
- [[front_page_doctrine]] — homepage §5 hand-off (line 117)
- `site/src/data/subnetworks.yaml` · `scripts/build_vaults_data.mjs` — the data layer this governs

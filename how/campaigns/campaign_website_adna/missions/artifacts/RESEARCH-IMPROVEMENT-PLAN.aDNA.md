---
type: research_artifact
artifact_class: research_improvement_plan
campaign: campaign_website_adna
mission: mission_wadna_p0_recon_reconcile
persona: berthier
status: active
created: 2026-06-17
updated: 2026-06-17
last_edited_by: agent_stanley
target_site: "https://www.adna.network (source: site/, Astro SSG → Vercel)"
posture: "read-only research + planning — propose, do not ship; every claim traces to the graph or a cited source"
tags: [research, website, adna_network, frontier_grade, demonstration_density, community_legibility, fourth_axis, reconciliation]
---

# RESEARCH-IMPROVEMENT-PLAN.aDNA — Hardening the WEBSITE.aDNA Campaign

> Read-only research + planning artifact. It sharpens `campaign_website_adna`; it ships no site change and ratifies no ADR. Live-site findings were verified against deployed source and live fetches; external patterns are cited. Where a measurement needs a tool I cannot run here (Lighthouse Agentic-Browsing live), it is routed to P0 Step-A, not asserted.

## How to read this
The campaign is sound. This plan does four things: (1) confirms/corrects the six seed defects and adds net-new findings; (2) builds out the **fourth axis** — community / democracy / collaborative-agentic-creation — which the campaign under-specifies; (3) proposes systemic design/tooling/process moves; (4) reconciles the campaign's own governing docs, which have drifted. Every recommendation ends in §6 mapped to an exact phase/mission, split into **plan-changes** (edit the campaign) vs **findings-to-process** (feed the existing pipeline).

---

## 1. Executive Summary — the highest-leverage moves

The empirical scoring is unambiguous: performance is a solved strength (100s site-wide, LCP 0.4–0.8s) and the binding constraints are **Demonstration Density (D)** and **Credibility / Community Legibility (E + the proposed K)**. `/community` scores **D=1**; the homepage scores **D=2**. The site *asserts* its defining qualities — federation, democracy, self-reference — more than it *shows* them. That is the frontier gap.

| # | Move | Axis | Severity × reach | Slots into |
|---|------|------|------------------|-----------|
| 1 | **Fix the nav-serialization bug** — ~107 nav links render above every secondary page's `<h1>` (DOM order + `display:none`), wrecking reading order for screen readers and AI agents on all non-home routes | A,G,H | **Critical × site-wide** | P2 systemic → P3 decadal 1 |
| 2 | **Make the fourth axis real** — convert "context democracy" + "living registry" + `/community` from prose to *shown* (live attribution, audit trail, federation toggle); adopt explicit **axis K** | D,E,**K** | **High × home+community** | P1 (axis K) → P2 → P3 |
| 3 | **Replace fabricated homepage code blocks with real graph artifacts** — `my-project/`, `climate-pipeline`, `mission_schema_v2.md` do not exist; they undercut the self-referential promise | D,J | **High × landing** | P2 → P3 |
| 4 | **Prerender `/vaults/graph` to inline SVG + emit machine-readable edges; ship `llms.txt`** — the flagship topology is invisible to no-JS agents, the exact audience aDNA courts | D,G | **High × flagship+agentic** | P2 → P3 |
| 5 | **Normalize host + correct canonical/JSON-LD** — `www` serves a full duplicate while canonical points apex (no redirect); `seo.ts` ships stale `github.com/LatticeProtocol` in structured data | J,F | **High × site-wide SEO** | P3 decadal 1 (systemic) |
| 6 | **Correct the brand-owner + repo drift** — footer reads "© 2026 Lattice Protocol" (should be *the aDNA Network*); the credibility-hygiene rule itself cites the stale repo | J,E | **High × site-wide** | P2 systemic + §5 apparatus fix |
| 7 | **Install the "honest maturity" grammar** — spec maturity ladder, a public-power disclaimer, browsable governance, verified adopters, a shipped/early-access/planned phase ladder | E,**K** | **High × credibility** | P1 dossiers → P2 → P3 |
| 8 | **Add single-source + public-meta gates** — fail the build on hardcoded counts/versions/repo-URLs and on internal jargon leaking into public `<meta>` | J | **Medium × prevents regressions** | P2 tooling-promotion |

---

## 2. Verified Live-Site Findings

Tagged `unit · axis · severity · reach · local|live`, sorted by severity × reach. Verdicts: **CONFIRMED / PARTIAL / REFUTED**. Evidence is file:line (deployed source) or a live-fetch observation.

| ID | Verdict | Finding & evidence | Axis | Sev × reach |
|----|---------|--------------------|------|-------------|
| **L2** | **CONFIRMED** (root cause corrected) | Nav serializes as ~107-link flat list **above `<h1>`** on every secondary route (verified `/community`, `/get-started`). **Not** a hydration bug: `DocumentationLayout.astro` places `<aside><SidebarNav/></aside>` (L38) *before* `<article>…<h1>` (L54); the aside is hidden only by `display:none` until `@media(min-width:768px)` (L117-124) — presentational, so text-mode/AT/agent consumers read all nav first. Compounded by `SidebarNav.astro:44` full-tree fallback + section-switcher always emitting all 7 groups + a second `.doc-mobile-nav` DOM copy. | A,G,H | **Critical × site-wide** |
| **N1** | CONFIRMED | `/vaults/graph` ships Mermaid **source in a `<pre>`**, rendered client-side via JS; **no `<noscript>` SVG fallback**. No-JS users and non-JS AI agents get raw Mermaid syntax — the topology (the product's headline claim) is unreadable to agents. Degrades to a text link-list only. | D,G | High × flagship+agentic |
| **N3** | CONFIRMED | Homepage "How it Works" code blocks reference `my-project/`, `climate-pipeline`, `mission_schema_v2.md` — **none exist in the vault**. Illustrative, not real. Contrast `/learn/what-is-adna`, which embeds the real `aDNA.aDNA/CLAUDE.md` with a GitHub link. Homepage shown:claimed ≈ **1:5**. | D,J | High × landing |
| **N4** | CONFIRMED | "Context democracy" / "living registry" are **asserted, never shown live**: homepage federation graphic is a single static `<svg role="img">` with hardcoded `<text>` labels (no `fetch`/feed); `/community` is **100% prose** — the 4-level ladder + trust-signal table (FAIR / review / citation-count / quest-validation) describe mechanisms with **zero live instances**. Community shown:claimed ≈ **0:6**. | D,E,K | High × home+community |
| **L6** | CONFIRMED | `www` vs apex canonical mismatch. `astro.config.mjs:8` site = apex; `SEOHead.astro:46` canonical + og:url = apex; `vercel.json` has **no redirects**. Live: `www.adna.network` serves a full 200 duplicate while declaring `adna.network` canonical → duplicate-URL / crawler-confusion. | J,F | High × site-wide SEO |
| **L1** | CONFIRMED | `Footer.astro:23` → "© {year} **Lattice Protocol**. Released under the MIT License." Per ADR-034 the site owner is **the aDNA Network** (Lattice Protocol is the substrate). The footer's own GitHub link already points to `aDNA-Network/aDNA`, contradicting the line. Fix: "© 2026 The aDNA Network." | J,E | High × site-wide |
| **N2** | CONFIRMED | **No `llms.txt`** on the live site, in `dist/`, or `public/`; `robots.txt` is a bare allow. For a standard whose thesis is "context AI agents can navigate," shipping no agent-addressed entry file is a credibility-shaped hole. | G | High × agentic |
| **seo.ts** | CONFIRMED | `src/utils/seo.ts` hardcodes `url:'https://github.com/LatticeProtocol'` in JSON-LD Organization (L48, L100) + publisher `name:'Lattice Protocol'` (L47,62,99). Ships in live structured data on every concept/tutorial/persona page; crawler-visible, human-invisible. | J,E | Medium × site-wide |
| **N5** | CONFIRMED | Credibility is **entirely self-referential** — every one of 40 registry vaults is internally authored; every steward is a myth-persona; the spec cites only its own GitHub. No external adopters, institutions, testimonials, or citations. Caps institutional trust (axis E). | E | Medium-High × home+network |
| **meta-leak** | PARTIAL | The 8 homepage-featured vault descriptions read clean, but **non-featured `/vaults/[slug]` `og:description`s leak internal jargon** from `vaults.json` `note` fields — e.g. SpeechForge "post-C7 extraction. Phase-1+ awaits operator gate"; Terminal "soft-fork… GPL-3.0"; LatticeProtocol "WS-1 pilot… Phase-2-exit CI gate". §9.1 / `publicNote()` sanitizer territory. | J,E | Medium × ~30 pages |
| **N6** | CONFIRMED | `/network`: described > demonstrated. Edge counts are static text; **`partner·0`** is advertised as a relationship type with no instances; the "real relationships" hero reuses the same static 6-node hub SVG as home. Shown:claimed ≈ 2:4. | D | Medium × flagship |
| **N7** | CONFIRMED | Registry maturity oversell: many vaults show persona `—`/`TBD`/`genesis_stub`, status skews `genesis`/`pending`; the graph honestly labels "21 vaults not yet linked," yet the headline "40-vault registry" reads as more-built-than-it-is. | I,J | Medium × vaults |
| **L5** | CONFIRMED | Homepage header casing inconsistent: "**How it Works**" (L110) vs sentence-case neighbors ("What a context democracy is", "The living registry", "Join the network"). Fix: "How it works." | I,C | Low × home |
| **L4** | **REFUTED** | Vault-count "40" is **consistent** — `vaults.json vault_count:40` equals the 40-entry array; homepage renders dynamically. No hardcoded drift. *(Earlier "37" recon is superseded; current is 40, internally consistent.)* | J | — (cleared) |
| **L3** | **REFUTED as a defect → escalated to §5** | "TaskForge" is **a real governed vault** (`vaults.json`: `canonical_governance: TaskForge.aDNA/AGENTS.md`, graph edge, persona). The "non-existent subsystem" premise does **not** hold; zero `Dispatch`/`Store` refs exist. **But** this exposes an error in the *campaign's own canonical-facts list* (which calls TaskForge non-existent) → see §5. Nuance: the vault the standard calls **Cmux** ships under the display name **"Terminal."** | J | → §5 meta-finding |

**standard.ts** is correct (`STANDARD_VERSION='v2.2'`); no stray versions on rendered surfaces. **Performance is a strength — do not flag it.** Latest evidence (site/evidence/, c159–e4): `/` and `/network` 100/100/100/100, LCP 0.5s, CLS 0; `/vaults/graph` carries the site's highest CLS (0.003–0.048) from Mermaid late-render — fixed by N1's prerender.

---

## 3. The Fourth Axis — Community / Democracy / Collaborative Agentic Systems

This is where the campaign is thinnest relative to operator intent, and where the scoring data screams loudest (`/community` D=1, E=3; home D=2). Per `narrative_ethos_public_good.md`, the ethos is *"subtle but front of mind… felt in what we choose to show, never preached."* Today the site **preaches more than it shows.**

### 3.1 Diagnosis — asserted, not demonstrated
- **Homepage "What a context democracy is"** states the thesis in prose beside a *static* SVG. Per the campaign's own Demonstration-Density doctrine (D = shown:claimed), democracy is **not shown**. Showing it = live contribution activity, visible governance decisions, real attribution/provenance, a federation event feed, contributor pathways with actual humans/agents on them.
- **`/community`** describes a four-level participation ladder, a role-interaction table, and a trust-signal table (FAIR, peer review, citation count, quest validation) — **entirely in prose, zero live instances.** "Citation count — other projects have pulled this" is named as a trust signal but **displayed for nothing.**
- **The "living registry"** is 8 prerendered cards — a catalog, not the "commons people contribute to and steward" the ethos brief (§3) demands. "Who, not how-many" (the ethos's own `site_valtown` reference) is not yet realized.
- **Reconciled against ethos §5 sequencing:** the brief is explicit and honest — build the **MVP of the social layer now** (public-good showcase + connect-to-subnetwork + registry-as-first-social-surface, all buildable on `vaults.json` + `federation_refs`), while the **full social layer** (profiles, follows, cross-node feeds, proposals/governance) is **Venus-gated** (co-designed with `aDNANetwork.aDNA`, depends on the membership/federation substrate). Any proposal here must hold that line — show what exists, label what is roadmap.

### 3.2 Exemplar patterns (researched, cited) — show, don't assert
Two corpora; each move names the source and the aDNA surface it maps to.

**Open-standard & governance — making authority and process legible:**
1. **Spec maturity ladder** — W3C names exact stages (Working Draft → Candidate → Proposed → Recommendation) so a reader instantly knows how settled a claim is. → `/reference`. [W3C document types](https://www.w3.org/standards/types/)
2. **Disclaim power** — the Ethereum Foundation page leads by stating it "does not control or lead Ethereum… is one part of a much larger ecosystem." Subordinating your own org to the network is the highest-trust move a federated project can make. → `/network`, `/`. [Ethereum Foundation](https://ethereum.org/foundation/)
3. **Browsable governance** — Rust lists named teams with one-line purviews and links to **real people**; governance is walked-into, not described. → `/community`. [Rust Governance](https://rust-lang.org/governance/)
4. **Contribution-as-visible-lifecycle** — the Rust RFC book shows template → PR → comment period → active; the mechanism *is* the trust. → `/get-started`, `/reference`. [Rust RFC Book](https://rust-lang.github.io/rfcs/)
5. **Verified adopters, by weight not vanity** — CNCF graduation *requires* a public ADOPTERS file + audited adopter interviews + a vote. Adoption is evidenced, not a logo wall. → `/network`, `/`. [CNCF Project Lifecycle](https://contribute.cncf.io/projects/lifecycle/)
6. **Persona-routed on-ramp** — Ethereum's "Get Involved" splits by identity (developer, researcher, writer, non-technical), each with a first action. → `/get-started`. [Ethereum — Get Involved](https://ethereum.org/community/get-involved)
7. **Novice guide beside the spec + no-credentials openness** — IETF's "Tao" is a plain-language on-ramp to a dense process; "no membership… anyone may participate." → `/get-started`, `/`. [Tao of IETF / RFC 4677](https://www.ietf.org/about/participate/tao/)

**Registry / decentralized-social / commons — making collaboration and federation concrete:**
8. **Attribution-as-edge** — a Hugging Face model card's `base_model:` auto-renders a typed, clickable lineage edge; citations become navigation ("models citing this paper"). Provenance is the UI. → `/vaults` cards (render `base_lattice` / `creators` / `provenance` from the FAIR block as edges). [HF Model Cards](https://huggingface.co/docs/hub/model-cards)
9. **Federation by analogy + a portability guarantee** — Bluesky explains federation as "like a website / like changing phone providers — keep your identity and data," and names the guarantee ("even if Bluesky disappeared, the network can be rebuilt"). → `/network`. [Bluesky — open social web](https://bsky.social/about/blog/02-22-2024-open-social-web)
10. **A visible shipped / early-access / planned phase ladder** — Bluesky shipped federation "for self-hosters first," with explicit guardrails and a stated "does not yet work" list. This is the exact mechanism for the Venus-gated honesty line. → `/network`, `/community`. [Bluesky — early-access federation](https://docs.bsky.app/blog/self-host-federation)
11. **Public audit trail as the trust mechanism** — Wikipedia's edit history + open Talk-page consensus make provenance and decision-making visible "in plain sight." aDNA already *has* this substrate (sessions, AARs, ADRs). → `/commons`, a new `/governance`. [Wikimedia — transparency builds trust](https://wikimediafoundation.org/news/2025/10/22/transparency-builds-trust/)
12. **"This vault / the federation" toggle** — Mastodon's Local vs Federated timelines make "my instance vs the whole network" a switchable, visible surface; "pick a server" *is* the federation lesson. → `/vaults`, `/network`. [Mastodon servers](https://joinmastodon.org/servers)
13. **Remix/fork that preserves the parent link + merge-back** — Val Town forks keep a reference to the original; contribution flows back via PRs. Credit is structural. → `/vaults`. [Val Town — remixes](https://docs.val.town/vals/remixes/)

### 3.3 Recommendation — add an explicit axis **K: Community & Collaboration Legibility**
**Recommendation: ADD axis K** (do not merely fold into D/E/B). Rationale: the empirical scores show D and E partially capture the gap, but no current axis directly scores *whether the commons, its governance, and collaborative agentic creation are shown* — and `/community` scored D=1/E=3 precisely because the responsibility was diffuse. The operator named this a first-class priority; a first-class axis makes it gate-bearing. This is a **plan-change** requiring operator ratification (it amends the A–J scorecard in the campaign `CLAUDE.md`) — see §7.

> **K — Community & Collaboration Legibility.** Is the network *shown* to be a living, self-governed commons that humans **and agents** build together — with real attribution, visible governance, honest federation, and an honest shipped/roadmap boundary?

| Element | Definition |
|---------|-----------|
| **What it measures** | Live contribution/attribution signal; governance-in-action visibility; federation made concrete (not buzzword); the collaborative-agentic-creation story shown with rigor; honest shipped-vs-roadmap labeling |
| **1–5 anchors** | **1** pure prose claim, zero live signal (today's `/community`). **3** some real attribution/links but governance & federation still described. **5** commons is demonstrated — real contributors/agents, audit-trail provenance, a "this vault / the federation" surface, a public phase ladder; reads as credible invitation, never hype |
| **Lead persona** | **Movement Skeptic** (is this credible-invitation-not-hype?) + **Brand Strategist** (trust+delight) + the new **Funder/Program Officer** (governance/FAIR/adopters) |
| **Primary tooling** | Demonstration-density count (shown:claimed) on community surfaces; honesty-line lint (no "shipped" language on Venus-gated features); manual persona pass |
| **Crosswalk** | Extends **D** (demonstration) + **E** (credibility) + **B** (narrative); inherits the Movement Skeptic / Brand Strategist bench lenses; the agent-as-contributor angle ties to **J** (only real `last_edited_by` / AAR data may be surfaced) |

**The collaborative-agentic-creation angle** is genuinely novel and credibility-bearing: the vaults are "tended by" named agent personas, and the graph carries real `last_edited_by` / session / AAR provenance. Shown with rigor (real data, not decoration), "agents are contributors here" is a true differentiator. Shown as gimmick (myth-persona flavor text with no substance, as today), it *reads* as the opposite — which is exactly why N5 caps credibility.

### 3.4 Surface-by-surface proposals (shown, not claimed — honesty line held)
- **Homepage:** replace the static federation SVG's role with a **build-time-generated** topology from `vaults.json` + `federation_refs` (real nodes/edges, machine-readable); swap the 3 fabricated code blocks for **real pulled-from-graph artifacts** (as `/learn/what-is-adna` already does). Keep the 55/45 dial and 5±1 section budget.
- **`/community`:** convert the trust-signal table from description to **instances** — surface real `last_edited_by`/contributor activity, link governance artifacts (ADRs, AARs) as "decisions the community made," and route on-ramps by persona (clinician/dev/researcher/steward) à la Ethereum. Add a **shipped/early-access/planned phase ladder** for the social layer (Bluesky pattern) so the Venus-gated horizon is honest and legible.
- **`/network`:** add the **power-disclaimer** ("the aDNA org does not control the network"); explain federation by **analogy + portability guarantee** (Bluesky); a **"this vault / the federation" toggle** (Mastodon); show `partner·0` honestly as "none yet" rather than advertising an empty type.
- **`/vaults`:** render lineage/creators/provenance as **clickable edges** (HF); "recently composed/forked" activity instead of a static catalog; honest maturity badges so `genesis`/`stub` vaults don't inflate the headline count (N7).
- **New `/governance` (or `/commons` expansion):** expose the **audit trail** (sessions/AARs/ADRs) as the trust mechanism (Wikipedia); a "how decisions are made" page mirroring the CLAUDE.md escalation cascade + phase-gates; a recurring "state of the commons" note.
- **`/reference`:** a **spec maturity ladder** (W3C) so each normative claim shows how settled it is.
- **Flagship-set change:** add **`/community`** to the campaign's flagship list (it carries the fourth axis yet was omitted) — see §6.

### 3.5 The honesty line (non-negotiable)
Every proposal above is buildable **now** on existing graph data (`vaults.json`, `federation_refs`, session/AAR/ADR files) — no pretend substrate. The full social layer (profiles, follows, cross-node feeds, governance voting) is **Venus-gated** and must be shown only on the phase ladder as *planned/co-designed*, never as shipped. The Movement Skeptic + Brand Strategist personas hold this line at every gate. No institutional partner (Dell, NVIDIA, Mayo, Stanford, CZI, UCLA — all verified unsupported in-graph) may appear on any "trusted by" surface; the real, documented affiliations are internal vaults (WGA, ContextCommons, WilhelmAI, RareArchive) and they are the showcase.

---

## 4. Systemic Design / Tooling / Process Package

Honors the locks (ADR-032 brand, 55/45 dial, ≤2 fighting accents, `branding.json` tokens authoritative, `prefers-reduced-motion`). All additive — no engine-skill edits.

### 4.1 Design-system discipline (one coordinated change, not per-page patches)
The token system is already strong (`tokens.css`, dark-first, consistent `var(--color-*)` usage; hardcoded hex only in deliberate, commented exceptions — hero scrim, terminal chrome). The systemic package: a single coordinated pass that (a) audits remaining hardcoded hex / off-scale spacing against the brand gate **G8**, (b) unifies header casing site-wide (L5 is one instance of a class), (c) confirms type-hierarchy + spacing-scale adherence on the two under-designed flagships (`/vaults/graph`, `/community`, both scored C=3). Ship as **P3 decadal 1**, lifting every page at once.

### 4.2 Demonstration mechanisms (convert claims → demos)
The site's defining promise is self-reference; it should *pull from itself*. Concretely: (1) homepage code blocks → **real artifacts read from the graph at build time** (the `/learn/what-is-adna` CLAUDE.md embed is the proven pattern — propagate it); (2) homepage + `/network` topology → **build-time-generated from `vaults.json` + `federation_refs`** (real nodes/edges) rather than a hand-authored static SVG; (3) `/vaults` → "recently composed/forked" activity + lineage edges from the FAIR block (HF pattern); (4) `/community` → real `last_edited_by`/AAR/ADR signal. These are N1/N3/N4/N6 expressed as one principle: **the graph is the content source.**

### 4.3 Agentic-browsing layer (treat AI agents as a named visitor class)
Acceptance criteria for the agent visitor: (a) ship **`llms.txt`** (N2); (b) **prerender `/vaults/graph` to inline SVG** + emit **machine-readable edge data** (inline JSON or `data-*` relationship attributes) so an agent extracts the topology without parsing Mermaid from a `<pre>` (N1); (c) fix the **nav reading order** so the a11y tree is content-first (L2); (d) correct **JSON-LD** publisher/org (seo.ts); (e) where forms exist (search/newsletter when added), annotate per WebMCP. Run **Lighthouse 13.3+ Agentic Browsing** in P0 Step-A to baseline (cannot be run live from here — routed, not asserted).

### 4.4 Tooling promotion — pressure-test + extend (additive gates only)
The campaign already plans three (Lighthouse archive→budget/gate incl. Agentic Browsing; `@audit` sweep→regression gate; semantic visual-regression baseline). All three are correct and should proceed. **Missing gates to add (each would have caught a live defect):**

| Gate | Catches | Evidence it's needed |
|------|---------|---------------------|
| **Single-source lint** — fail build if a count/version/repo-URL is hardcoded outside its canonical constant (`standard.ts`, `vaults.json`, a `REPO` const) | version drift, hardcoded counts, stale repo URLs | seo.ts L48/L100; the L4-class risk |
| **Public-meta sanitizer gate** — enforce `publicNote()`/§9.1; fail build if internal codenames/phase jargon appear in any public `<meta>`/og/JSON-LD | credibility leakage (the documented failure mode) | the `/vaults/[slug]` `note` leak (meta-leak finding) |
| **Link-graph + host/canonical check** — crawl internal+external links for 404/301 on credibility surfaces; assert served-host == declared-canonical | dead links; the www/apex duplicate | L6 |
| **No-JS reachability gate** — assert flagship content (esp. graph topology) renders without JS | agent/no-JS invisibility | N1 |
| **`llms.txt` presence + freshness gate** | agent entry-file regressions | N2 |

### 4.5 Process / learning-path-as-resource
Assess `/get-started` → tutorials → workshops → guides as one path: no dead ends, install-truth correct (gate-12 / `install_truth.json`), and a **newcomer → contributor → steward** progression that mirrors the `/community` four-level ladder. Propose: progressive disclosure, runnable/real examples (4.2), "you are here" wayfinding, and a **persona-routed contribution on-ramp** (Ethereum pattern). `/learn/what-is-adna` (scored 5/5/4/4/4/5/4/4/5/5) is the quality bar; bring the rest of the path to it.

---

## 5. Apparatus Reconciliation — where the campaign's own docs drifted

Making the campaign as good as possible means catching its self-contradictions. Found:

| # | Meta-finding | Evidence | Disposition |
|---|--------------|----------|-------------|
| **M1** | **Credibility-hygiene rule cites the stale repo it forbids.** `front_page_doctrine.md` §9.3 (L129) names `LatticeProtocol/aDNA` as the "one canonical GitHub org/repo form everywhere" — the exact drift ADR-034 retired (`aDNA-Network/aDNA`). The rule against repo drift has itself drifted. | `front_page_doctrine.md:129` vs `adr_034`, `MANIFEST.md:17`, `README.md:118` | **Critical** — correct the doctrine line (apparatus fix, P0/P1) |
| **M2** | **The campaign's own canonical-facts list is wrong about TaskForge.** `campaign_website_adna.md` §Integration Map and `mission_wadna_p0` Pre-Seeded Findings state *"Dispatch/Store/Network/TaskForge do not exist; do not use them."* But **TaskForge.aDNA is a real governed vault** (L3). Correct set of non-existent *standard subsystems* = Dispatch/Store; **TaskForge is a real vault**; and the subsystem the standard calls **Cmux ships under display-name "Terminal."** | `vaults.json` TaskForge entry; `vaults.json` `terminal` (soft-fork of manaflow-ai/cmux) | **High** — correct the canonical-facts list + Standard Archivist hit-list (plan-change) |
| **M3** | **Flagship set omits `/community`** despite the fourth axis being an operator priority; `/community` is the lowest-scoring flagship-class page (D=1). | `campaign_website_adna.md` flagship list | **High** — add `/community` to flagships (plan-change) |
| **M4** | **No A–J axis scores community/collaboration legibility** — responsibility is diffuse, which is why `/community` scored D=1 with no owner. | A–J scorecard (CLAUDE.md) | **High** — add axis **K** (§3.3, operator-gated) |
| **M5** | **`visual-identity-v2.mdx` is titled "Visual Identity v3" internally** (ADR-032), but its filename and every cross-link (`front_page_doctrine`, `writing-guidelines`, pivot/hero briefs) say "v2." | `visual-identity-v2.mdx:1-2` vs cross-links | Medium — rename/reconcile (apparatus fix) |
| **M6** | **Doctrine-currency drift cluster:** `front_page_doctrine` `graduates_to:` a `front-page-doctrine.mdx` that doesn't exist; the SS-Ghibli pivot doc proposes a dial move the doctrine never ratified (doctrine holds 55/45); `writing-guidelines` (updated 2026-05-28) predates the ADR-032 register pivot. | `front_page_doctrine:20`; `redesign_direction_ss_ghibli_pivot:39`; `writing-guidelines` frontmatter | Medium — batch doctrine-currency pass |
| **M7** | `branding.json` `social.github` = `LatticeProtocol/Agentic-DNA` (stale) — already in the campaign reconciliation table; reconfirmed live. | `branding.json` | Low — already tracked; close it |

> Note on lane: M2's Cmux↔Terminal naming and any vault rename are **Berthier-upstream** (the site renders, it does not author org/naming). The *site-data* correction (don't call TaskForge non-existent) is in-lane; the *naming decision* is an open question (§7).

---

## 6. Integration Map — every recommendation → phase/mission

**A. Plan-changes (edit the campaign apparatus; operator-gated where noted):**

| Change | Where | Gate |
|--------|-------|------|
| Add **axis K** (Community & Collaboration Legibility) to the A–J scorecard + crosswalk | `CLAUDE.md` | **operator ratification (Q1)** → P1 |
| Add **`/community`** to the flagship set + P3 sequence | `campaign_website_adna.md` | P1/P2 (Q2) |
| Correct the **canonical-facts list** (TaskForge is a real vault; Cmux↔Terminal) | `campaign_website_adna.md` §Integration Map; `mission_wadna_p0` Pre-Seeded Findings; Standard Archivist hit-list | P0 |
| Expand **tooling-promotion spec** with the 5 new gates (§4.4) | `mission_wadna_p2_design.md` | P2 |
| Add the **maturity-ladder / power-disclaimer / phase-ladder** grammar as rubric-dossier inputs for axes E + K | `mission_wadna_p1_critique.md` | P1 |

**B. Findings-to-process (feed the existing pipeline; no restructure needed):**

| Pipeline stage | Absorbs |
|----------------|---------|
| **P0 `RECONCILIATION.aDNA.md`** | L1 (footer), L6 (host/canonical), seo.ts, meta-leak, **M1** (doctrine repo drift), M5/M6 (doctrine currency), M7 (branding.json) |
| **P0 `SITEMAP.aDNA.md`** | the §2 per-flagship A–J scores as baseline; `/community` registered as a flagship unit |
| **P1 `FINDINGS.aDNA.md`** | all §2 findings + the exemplar dossiers (§3.2) as B/E/K rubric inputs; severity×reach already pre-sorted here |
| **P2 improvement specs** | L2 nav reorder, N1 graph prerender+edges, N3 real artifacts, N2 llms.txt, N4 community live-signal, the §4.1 systemic package, the §4.4 gates |
| **P3 decadals** | decadal 1 = systemic (L2, L6, L1, seo.ts, tokens, gates, M-fixes); then flagships incl. `/community`; then deep pages |
| **P4 signoff** | axis K in the final scorecard; honesty-line check; flagship benchmark side-by-side vs the cited references |

---

## 7. Open Questions for the Operator (above my lane)

1. **Ratify axis K?** Amend the scorecard A–J → A–K (Community & Collaboration Legibility). *Recommended: yes — the empirical gap and your stated priority both point to first-class status.*
2. **Add `/community` to the flagship set?** *Recommended: yes.*
3. **TaskForge / Cmux↔Terminal naming.** The site-data correction (stop calling TaskForge non-existent) is in-lane and I will route it. But the **display-name "Terminal" for the Cmux subsystem** is a vault-naming question — **Berthier-upstream.** Confirm intended public name.
4. **Partner-claim disposition.** Confirm the honest line: remove all unsupported institutional names (Dell/NVIDIA/Mayo/Stanford/CZI/UCLA — verified unsupported); showcase the four internal subnetworks (WGA, ContextCommons, WilhelmAI, RareArchive). *Credibility call — yours.*
5. **Social-layer phase-ladder wording.** The shipped/early-access/planned boundary for the social layer is **Venus-gated** (`aDNANetwork.aDNA` membership/federation model). Confirm the boundary copy before it lands publicly.
6. **"Context democracy" public phrase.** The ethos brief notes LP's P5 docs cross-check before this lands publicly — confirm it is cleared for the live site.

---

## Sources (external; every transferable pattern names its move)

- [W3C — Types of documents / Process](https://www.w3.org/standards/types/) · [W3C Process](https://www.w3.org/policies/process/)
- [Ethereum Foundation](https://ethereum.org/foundation/) · [Ethereum — Get Involved](https://ethereum.org/community/get-involved) · [Ethereum Community Hub](https://ethereum.org/community/)
- [Rust Governance](https://rust-lang.org/governance/) · [The Rust RFC Book](https://rust-lang.github.io/rfcs/) · [Rust Code of Conduct](https://rust-lang.org/policies/code-of-conduct/)
- [Tao of IETF (RFC 4677)](https://www.ietf.org/about/participate/tao/)
- [CNCF Project Lifecycle](https://contribute.cncf.io/projects/lifecycle/) · [CNCF Projects](https://www.cncf.io/projects/) · [CNCF Landscape](https://landscape.cncf.io) · [CNCF Glossary](https://glossary.cncf.io)
- [Hugging Face — Model Cards](https://huggingface.co/docs/hub/model-cards) · [Hugging Face Hub](https://huggingface.co/)
- [Bluesky — an open social web](https://bsky.social/about/blog/02-22-2024-open-social-web) · [Bluesky — early-access federation](https://docs.bsky.app/blog/self-host-federation)
- [Mastodon — Servers](https://joinmastodon.org/servers) · [ActivityPub (Mastodon docs)](https://docs.joinmastodon.org/spec/activitypub/)
- [Wikimedia — Transparency builds trust](https://wikimediafoundation.org/news/2025/10/22/transparency-builds-trust/) · [Wikimedia Transparency reports](https://wikimediafoundation.org/who-we-are/transparency/)
- [Val Town — Remixes](https://docs.val.town/vals/remixes/) · [Val Town docs](https://docs.val.town/)

---

## Status & next step
`status: active` — **ratified by the operator 2026-06-17.** The §6.A plan-changes are **applied** to the campaign apparatus: axis **K** added (scorecard now **A–K**) in `CLAUDE.md`; **`/community`** added to the flagship set; the canonical-facts list corrected (**`TaskForge.aDNA` is a real vault**); P2 tooling-promotion expanded with five build gates; P1 dossier inputs added. The §6.B findings flow into P0/P1 at campaign activation. **Open upstream (not decided here):** §7 Q3 (Cmux↔"Terminal" public name — Berthier domain), Q5 (social-layer phase-ladder wording — Venus-gated), Q6 ("context democracy" public-phrase clearance). The campaign itself remains `status: planning`; activation (STR subsumption + `STATE.md` update + session log) is a separate operator gate.

### AAR (research artifact)
- **Worked**: parallel recon (source-truth verification + live fetch + cited external exemplars) produced specific, traceable findings and corrected two seed assumptions (L3, L4) rather than inheriting them.
- **Didn't**: Lighthouse Agentic-Browsing and full CWV could not be run live from here — routed to P0 Step-A; two `web_fetch` calls timed out (Ethereum, Bluesky `/about`) and were corroborated via search snippets, not worked around.
- **Finding**: the binding constraint is **demonstration density / community legibility**, not performance — `/community` D=1 and the homepage's fabricated code blocks are the frontier gap; the campaign needs axis K and `/community` as a flagship.
- **Change**: catch apparatus drift as a standing step — the campaign's own doctrine (§9.3) and canonical-facts list (TaskForge) had drifted; M1/M2 fix them.
- **Follow-up**: §6.A applied 2026-06-17 (axis K · `/community` flagship · canonical-facts fix · P2 gates · P1 dossier inputs); §6.B feeds P0/P1 at activation; §7 Q3/Q5/Q6 remain open upstream.


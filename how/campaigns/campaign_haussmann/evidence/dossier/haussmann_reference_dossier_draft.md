---
type: evidence
artifact_class: reference_dossier_draft
evidence_id: B11
campaign: campaign_haussmann
created: 2026-08-16
updated: 2026-08-16
status: draft   # synthesis-review pending; _reference_set.md manifest update happens at that review
persona: rosetta
last_edited_by: agent_rosetta
added_by: campaign_haussmann
site_count: 23   # 12 existing (M5.8 + Storyweave P5 O3) + 11 new (this dossier)
method: how/skills/skill_reference_inspection.md (fixed rubric; distributions not averages; provenance per rule)
captures: how/campaigns/campaign_haussmann/evidence/dossier/captures/{charm,warp,panic_playdate,ourworldindata,w3c}/
tags: [evidence, reference_dossier, haussmann, b11, exemplar, design_dna]
---

# Haussmann Reference Dossier — DRAFT (B.7 craft-reference corpus, 23 sites)

> Extends the existing [[_reference_set]] corpus (12 sites) with **11 new references** inspected 2026-08-16 per [[skill_reference_inspection]]. Per-site artifacts: `what/exemplars/sites/site_{w3c,tc39,python_peps,ethereum_eips,cratesio,charm,warp,panic_playdate,ourworldindata,distill,quanta}.md`, all `added_by: campaign_haussmann`. A parts catalogue, not a mood board — every row names a steal, an avoid, and the Haussmann phase it feeds (P0 positioning · P1 credibility · P2 structure · P3 agentic+community · P4 craft · P5 launch).

**Method + capture provenance.** All 23 inspected to the fixed rubric (Tier-A countables recorded per artifact). T0 headless captures (`scripts/visual_capture.mjs`, desktop+mobile × dark+light, all status 200) for the 5 visually-load-bearing new sites: charm · warp · panic_playdate · ourworldindata · w3c — desktop-dark viewed before judging craft. The other 6 new sites judged from HTML/API only, marked [I] in their artifacts. Currency corrections found at capture time: **charm.sh → 301 → charm.land** · **panic.com/playdate → 404; property lives at play.date** (recaptured there) · **warp.dev renders light-first even under dark emulation** (the "dark-native" premise drifted) · **crates.io is an empty SPA shell** (inspected via its public JSON API, which is the page's literal data model).

---

## 1. Parts catalogue (site | steal | avoid | phase)

**New (11):**

| Site | The one thing to steal | What to avoid | Phase |
|---|---|---|---|
| [[site_w3c\|w3.org]] | Definition-as-hero with inline-linked principles; process-vocabulary-as-news; the `/TR/` status×tag×family facet system (1,234 reports/288 families); shipped pause affordance | Committee-neutral voice (nothing wants anything); org-logos-only community | P1 · P2 |
| [[site_tc39\|tc39.es]] | Stage tables as first-class content (Proposal · Author · Champion · meeting-notes); finished/inactive graduated, never deleted; one canonical process document | Primary content off-property (table lives on GitHub); near-zero visual identity | P2 |
| [[site_python_peps\|peps.python.org]] | Human index + **machine twin advertised on the page** (`/api/peps.json`); status-bucket tables with full lifecycle visible; PEP-1 self-describing constitution; 3-state theme toggle | Zero newcomer wayfinding — pure insider surface (fails dual-audience) | P2 · P3 |
| [[site_ethereum_eips\|eips.ethereum.org]] | Visible status state machine (Idea→Draft→Review→Last Call→Final + Stagnant/Withdrawn/Living) with per-category counts; Requires/Discussions-To/**Citation block** per item; RSS per slice | Zero design investment; taxonomy-prose home gives a newcomer nothing to do | P1 · P2 |
| [[site_cratesio\|crates.io]] | **Dual-clock metrics** (all-time + recent) on every item; license+version+updated+**maintainer-identity-with-avatar** as the card quality-triple; freshness sections (new/just-updated); registry-as-JSON-API | The SPA shell — content nonexistent without JS (agent/no-JS hostile) | P2 · P3 |
| [[site_charm\|charm.sh→charm.land]] | **Whimsy as a governed component system**: one mascot per product in ONE render language + star pill + tag pills + factual one-liner, with an "Industrial grade" proof wall adjacent; voice confined to taglines/easter-eggs | Full-field saturated-palette takeover; mascots-instead-of-humans; install outsourced to GitHub | P0 · P4 |
| [[site_warp\|warp.dev]] | The platform **install matrix** (brew/deb/rpm/AUR/winget, per-arch, copy-able, one screen); monospace ticker-of-commitments accent | JS-dependent proof (counters render "0K" no-JS; sections blank headless); drifted adjective-abstraction hero with install demoted (the Vercel drift, second instance) | P1(AVOID) · P5 |
| [[site_panic_playdate\|play.date]] | **Containment**: pixel art in content slots only (screen, game covers), chrome = flat signal-color bands + sentence-with-period headings; per-game maker credits; price honesty | 16 sections / repeating commerce CTAs; single-color theme with no dark variant | P0 · P4 |
| [[site_ourworldindata\|ourworldindata.org]] | **Content-metrics-as-hero-proof** (14,071 charts · 126 topics — shelf, never audience); byline+source+update-date on every artifact; nonprofit/license/funding disclosure stack; charts-as-imagery | ~10-section, 80-link density (archive-scale, over homepage budget); light-only | P1 (north star) |
| [[site_distill\|distill.pub]] | The **provenance block**: DOI/stable-ID + citation-with-BibTeX + named-review-trail (review = linked GitHub issue) per artifact; captioned interactive-figure discipline; design labor credited by name | Unsustainable per-article heroics (ended in hiatus — template it or it stops); 10MB+ page weight | P1 · P4 |
| [[site_quanta\|quantamagazine.org]] | The **governed art slot**: one house illustration program applied per-artifact in a fixed frame, always credited; byline→contributor pages; independence disclosure as footer furniture | Staffed-art-desk cost structure (must template/generate instead); 11+ nav tail | P0 · P4 |

**Existing (12, from [[_reference_set]] — steal/avoid held, phase mapped):**

| Site | Steal | Avoid | Phase |
|---|---|---|---|
| [[site_hermes\|Hermes]] | Sparse ~40-word manifesto hero; one demo-as-proof; restraint carries revolution | Undifferentiated text-card features; flat nav won't scale | P0 |
| [[site_huggingface\|Hugging Face]] | Registry-IS-the-hero; community via real activity; breadth-first mega-nav | Scale-as-proof needs HF scale; scrappy-cute register | P2 · P3 |
| [[site_ethereum\|ethereum.org]] | Emotional lede validated immediately by credibility stat; role-based pathways | 15+ nav categories sprawl | P0 · P2 |
| [[site_linear\|Linear]] | Craft = refusal of ornament; demonstrate-don't-explain; 1:1 whitespace | Deep-IA fragmentation (AVOID list) | P4 |
| [[site_vercel\|Vercel]] | Dual-audience layering; live data as proof; metrics over adjectives | Adjective-bloat hero + install demoted (AVOID list, hardened) | P0 · P1(AVOID) |
| [[site_stripe_docs\|Stripe docs]] | Density via omission; use-case-first taxonomy; guide ≠ reference | Page-bloat (AVOID list) | P2 |
| [[site_anthropic\|Anthropic]] | Specificity over sentiment; mission in the nav; linked governance = substance | Near-zero energy underplays the novel | P0 · P1 |
| [[site_replicate\|Replicate]] | Every entry executable + proven + social (run counts, avatars) | Marketing-first hero; repetition-as-abundance | P2 · P3 |
| [[site_valtown\|Val Town]] | Who-not-how-many aliveness (named people, curated showcase) | Sign-up-gated install (counter-example); scrappiness reads unfinished | P1 · P3 |
| [[site_raycast\|Raycast]] | Motion as meaning within a budget; emotional value reframe | High motion density + glassmorphism | P4 |
| [[site_bun\|Bun]] | Command-IS-the-hero with copy button; proof by artifact + number, zero hero motion | 13-section sprawl; benchmark swagger | P2 · P4 |
| [[site_astro\|Astro]] | One-command create in hero; openness always present; CWV proof | Framework-flex benchmark; 12 sections | P2 · P4 |

---

## 2. Distributions across the 23 (record the clustering, not the average)

### 2.1 Hero word count
Hermes 40 · Ethereum 30 · Warp 30 · Linear/Vercel/Anthropic/Replicate/ValTown/Bun/Astro ~25 · Playdate 23 · Raycast 15 · OWID 13 · Quanta 10 · Distill 7 · Charm 6 · TC39 2 · **W3C ~35 / EIPs ~28 (definitions)** · HF ~0 · PEPs 0 · crates.io ~0 (stats) · Stripe n/a.
**Clustering — now FOUR legal hero modes** (was two): (a) **manifesto 23–40** (12 sites); (b) **terse identity one-liner 2–15** (TC39, Charm, Quanta, OWID, Raycast — voice or mission compressed to a line, content does the rest); (c) **content-as-hero ≈0** (HF, PEPs, crates.io, Distill, Stripe — registry/archive/journal); (d) **NEW: definition-as-hero 28–35** (W3C, EIPs — institutions open with a linkable *definition*, not a pitch). aDNA is a movement+standard: the doctrine's manifesto 35–60 stands for the home, and mode (d) is the evidenced pattern for the **standard/spec surface** (provenance: site_w3c, site_ethereum_eips).

### 2.2 Nav item count (top level)
3: Hermes, Linear, Distill, crates.io[I] · 4–5: TC39, PEPs, Quanta(primary), Anthropic, Replicate, ValTown, Raycast, Bun, Astro, Charm, OWID · 6: W3C, Vercel, Warp, Playdate, HF(+mega) · 7: EIPs · **15+: ethereum.org** · bucket-model: Stripe.
**Clustering: 3–7 for 21/23, median 5.** Even 1,100-item archives hold ≤7 by making the taxonomy itself the nav (EIPs' type tabs). Mega-nav is legitimate only at HF/ethereum ecosystem breadth. → Haussmann P2: nav stays ≤7; the registry taxonomy becomes tabs, not menu depth (provenance: site_ethereum_eips, site_w3c, corpus).

### 2.3 Proposal-process presence
**Process-primary: 4/23 — all new** (W3C maturity stages · TC39 stages 0–4 · PEPs status machine · EIPs type×status). Process-adjacent: ethereum.org. Absent: 18.
**The shared anatomy (all 4/4):** numbered items · a **named public status state machine** including stalled/terminal states (archive-never-delete as UI) · **tables as primary content** · per-item author/champion attribution · a **self-describing constitution entry** (W3C Process, TC39 process-document, PEP 1, EIP 1) · followable/machine surfaces (JSON API, RSS, per-stage files, facet queries). → aDNA already *runs* this process (ADRs, backlog ladder, statuses); Haussmann P2 renders it with this anatomy (provenance: the four process artifacts).

### 2.4 Registry facet patterns
Registry surfaces: 8/23 (crates.io · W3C/TR · PEPs · EIPs · HF · Replicate · ValTown · Astro-themes).
**Convergent pattern at scale** (crates 317k · W3C 1,234 · HF 2M): **search + type/status facet + topic facet + a freshness lens** (new/just-updated/trending), with per-item cards converging on **name + one-liner + version/status + license + maintainer identity + dual-clock metric (all-time AND recent)** — crates.io is the cleanest instance (downloads + recent_downloads; publisher name+avatar). At small scale the corpus rule holds: substitute **curation + named makers** for counts (ValTown), and count the **shelf, not the applause** (OWID's content metrics; W3C's "1234 reports"). → the vault/graph registry card spec (provenance: site_cratesio, site_w3c, site_ourworldindata + existing registry trio).

### 2.5 Named-humans surfacing
**Strong 15/23:** OWID (bylines+team+hiring) · Distill (authors+affiliations+named reviewers) · Quanta (byline→contributor pages + artist credits) · PEPs/TC39 (authors; +champions) · EIPs (GitHub handles on items) · crates.io (publisher avatar) · Playdate (per-game maker credits) · ValTown · Replicate · HF · Linear · Raycast · Bun · Warp. **None/weak 8:** W3C, Charm, Hermes, Anthropic, ethereum.org, Stripe, Vercel, Astro.
**Finding:** the credibility register (OWID/Distill/Quanta) and the process register (PEPs/TC39/EIPs) are **unanimous** — attribution is load-bearing at both poles aDNA occupies. The only zero-human properties that still feel alive substitute a governed *system* (W3C: org logos; Charm: mascots). → P1/P3: render `last_edited_by`/persona/operator attribution everywhere; contributor pages (provenance: §2.5 roster).

### 2.6 Dark-mode nativity
**Dark-native/-first 4:** Hermes, Linear, Astro, Raycast · **toggle 3:** HF, Vercel, **PEPs (light/dark/auto — the only pure archive with one)** · **color-native single-theme 2:** Charm (saturated field), Playdate (signal yellow) · **light-only 14:** W3C, TC39, EIPs, crates.io[I], OWID, Distill, Quanta, ethereum.org, Anthropic, Stripe, ValTown, Replicate, Bun, **Warp (DRIFTED — marketing site now renders light even under dark emulation; capture evidence)**.
**Finding:** dark-nativity tracks the *product/terminal* pole; **every credibility-register site is light-only**; archives can ship a 3-state toggle cheaply (PEPs). aDNA's dark-first stance is its terminal-honesty signal — keep it — but the light theme is what the credibility surfaces (docs/spec/registry) will be read in; both must be first-class (provenance: capture set + artifacts). Currency law (3rd corpus instance, after ValTown/Vercel June→July): **"dark-native" and hero registers are perishable — re-verify at inspection time.**

---

## 3. The Ghibli-pixel ruling — systematise, contain, or reduce?

**Question:** can adna.network's Ghibli-pixel hero style (ADR-032 lineage; Tokyo-Night dark-first + P1.6 Canvas-hero) be systematised across the whole property, or should it be reduced to an accent?

**Evidence:**
- **Playdate (captured)** proves a playful visual voice can carry an entire property **by containment**: the pixel art never touches the chrome — it lives in fixed *content slots* (the 1-bit screen, game covers, catalog thumbnails) while the property is carried by a flat color system + one typographic rule (sentence-with-period headings) + full institutional spine (spec table, credits, education, help). The art scales because **the community fills the slot** (game covers arrive from developers, framed uniformly).
- **Charm (captured)** proves the *full-field* alternative is possible but names its price: a **complete character program** (12+ mascots in ONE render language), a single saturated palette owning every pixel, personality confined to taglines/easter-eggs — and a **hard-proof counterweight adjacent** ("Industrial grade" logo wall, 25k-applications claim, per-product star pills). Charm sells tools; the whimsy IS the brand. It also pays costs aDNA can't: zero named humans, and a field that would crush spec/docs legibility.
- **Quanta + W3C (credibility register)** set the ceiling on that register: at most a **governed art slot** — commissioned illustration per artifact inside a stable frame, always credited (Quanta); one playful illustration inside one contained card (W3C's TPAC poster). **No credibility-register site in the corpus paints its chrome playful** (§2.6: all light-only, all restrained).

**What full systematisation would require** (per the Charm/Playdate evidence, if the operator elects it):
1. **A style spec, not a vibe** — palette, pixel grid/resolution, lighting, composition rules: a VisualDNA-class bundle (`VisualDNA.aDNA` exists for exactly this).
2. **A generation pipeline** — per-surface coverage (each vault card, category, empty state, 404) demands reproducible-on-demand art: LoRA/ComfyUI workflow (`ComfyUI.aDNA`) + QA gate, or a commissioned set with slot fallbacks. Quanta's staffed art desk is the cost being avoided; Distill's hiatus is what unsystematised craft ceilings do.
3. **A containment rule** — art in named slots (hero panel, vault/graph cards, section marks); chrome (nav, prose, registry rows, tables) stays Tokyo-Night type/color. Playdate's law.
4. **A proof counterweight adjacent to every whimsy surface** — registry stats, star/federation pills, spec links. Charm's law.
5. **Credit the pipeline/artist per artifact** — Quanta's law; also aDNA's own provenance doctrine.

**Recommendation (draft, for synthesis review):** **Systematise as a governed, slot-contained illustration program — more than an accent, less than a skin.** Keep the Ghibli-pixel voice as the property's signature *in fixed slots* (home hero panel = the "screen," vault/graph card art, category marks, empty states), generated under a VisualDNA style spec + ComfyUI pipeline with per-artifact credit, always adjacent to shelf-metric proof — while the chrome across the whole property remains the Tokyo-Night type/color system in both themes. **Refuse the Charm-grade full-field takeover:** aDNA is a standard + public-good property whose corpus register-peers (W3C, OWID, Distill, PEPs) are unanimous on restrained chrome, and whose ~55/45 dial the doctrine already fixed. "Reduce to an accent" is *also* refused — Playdate + Quanta prove the middle position carries a whole property at full credibility, and the slot model is the only version whose marginal cost per new surface is near zero (requirement 2). If Gate review elects fuller coverage, requirements 1–5 above are the bill.

---

## Related

- [[_reference_set]] (manifest — updated at synthesis review, NOT by this draft) · [[skill_reference_inspection]] · [[front_page_doctrine]]
- Captures + `capture_report.json` provenance: `evidence/dossier/captures/{charm,warp,panic_playdate,ourworldindata,w3c}/`
- Per-site artifacts: `what/exemplars/sites/site_*.md` (`added_by: campaign_haussmann`, 11 files)

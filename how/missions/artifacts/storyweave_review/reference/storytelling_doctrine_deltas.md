---
type: design_doctrine_delta
artifact_class: storytelling_doctrine
created: 2026-07-07
mission: mission_site_story_review_charter
objective: O2
persona: agent_rosetta
status: proposed   # doctrine change — ratify at O8 operator gate (mission spec §Operator gates)
grounds:
  - reference/cluster_federated_networks.md
  - reference/cluster_public_good.md
  - reference/cluster_knowledge_graph_tools.md
  - what/design/front_page_doctrine.md   # the layer this extends
  - what/exemplars/sites/_reference_set.md   # the prior 10-site corpus
tags: [design_doctrine, storytelling, front_page, storyweave, o2, proposed]
---

# O2 deliverable — Storytelling Doctrine + front_page_doctrine deltas

> **What this is.** `front_page_doctrine` governs *how much / where / density / the sleek↔revolutionary dial*. The 9 fresh exemplars (3 federated-network + 3 public-good + 3 knowledge-graph, 2026-07-07) surface a **layer the current doctrine does not name: the narrative mechanics of making the abstract "federated context democracy" thesis *click* for a stranger.** This is the storytelling doctrine. Every rule cites ≥2 exemplars (provenance is the skill-gate requirement). **Status: `proposed`** — a doctrine change, ratified at the O8 operator gate, not self-adopted.
>
> **Reconciliation first (don't fix what works).** The live home (WebFetched 2026-07-07) is already well-aligned: a value-first manifesto ("Language and DNA were co-created by everyone before us. The context that powers AI should be too — built, shared, and governed in the open, for the good of all."), a 5-section spine (context-democracy → living registry → how-it-works → start-here → the-standard → join), MIT/GitHub/spec trust in the footer, and a real proof number (68 vaults). This pass is **upgrades, not a rescue.**

## Part A — The Storytelling Doctrine (7 rules)

**S1 — Value-first hero; the thesis is a *stake*, not a mechanism.**
Every strong exemplar hero is ≤7 words and none defines its architecture: Mastodon *"Social networking that's not for sale"* (6w), Matrix *"An open network…"* (7w), atproto *"Building the Social Internet"* (4w), Obsidian *"Sharpen your thinking"* (3w), Astro *"…content-driven websites"* (6w). → aDNA's manifesto already does this (value + implied villain). **Keep.** Guardrail: never let "federated / lattice / triad / context-graph" become the *headline*.

**S2 — The federation "click" is a *reframe*, not a diagram: the "you already do X" line.** ⚠ **biggest gap**
The move that makes decentralization click is collapsing the abstract into the familiar — atproto *"Usernames are just domains,"* Matrix pairing *"decentralised"* with *"chat with friends,"* Obsidian *"a view over the Markdown files you already own."* None uses an architecture diagram in the hero. **aDNA currently has no such line.** Proposed analog: *"Your context is just the knowledge you already keep — now shared, and co-owned."* (Provenance: cluster_federated_networks synth; cluster_knowledge_graph_tools synth.)

**S3 — Show the artifact, don't describe it: a concrete, inspectable thing above the fold.**
OWID's downloadable chart, Obsidian's live graph, Astro's real code, JSON Canvas's rendered-canvas + raw JSON, CC's actual license. The abstraction is made *physically present*. aDNA's closest asset is a **live, traversable context graph** (`/vaults/graph`) and a **real vault file** (YAML/Markdown) — currently neither is teased at the home hero (which is an image-led SS-Ghibli manifesto scene per ADR-032). **Design question for the build campaign** (§Part B/D2): does a live-graph tease or a real vault snippet belong at/near the hero, alongside or instead of the illustrative scene? (Provenance: all 3 clusters — the single most repeated lesson.)

**S4 — One unambiguous first step, made of the product itself (a copy-paste command).**
Astro `npm create astro@latest` and JSON Canvas "Copy code" turn "get started" into a single concrete action. aDNA's analog: a copyable `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude`. Confirm it renders as a **one-click-copy command** on the hero and/or get-started, not buried in prose. (Provenance: site_astro, site_jsoncanvas.)

**S5 — Proof-of-life near the hero: self-quantification OR borrowed trust (aDNA can run both).**
Two credibility engines: OWID counts its own output (*"14,653 charts across 126 topics"*); CC borrows trust (*"Used by Wikipedia, Flickr, The Met, Khan Academy"*). atproto does both (*"40M+ Users"* + live JSON). aDNA has both available: **"68 vaults across N domains, openly licensed"** + the named public-good subnetworks (**WGA · Context Commons · WilhelmAI · Rare Archive**). The number currently lives in the mid-page "living registry"; the exemplars put proof *higher*. (Provenance: site_ourworldindata, site_creativecommons, site_atproto.)

**S6 — Trust through restraint + principled negation; anchor in checkable structure.**
Signal *"No ads. No trackers. No kidding."* under-claims and wins. Trust comes from *structure a stranger can verify* (open license, open protocol, nonprofit/federated governance), not testimony. Proposed device for aDNA: a **principled-negation line** — e.g. *"No lock-in. No walled gardens. No extraction."* — plus foregrounding the checkable facts (MIT, open spec, federated governance) already in the footer. (Provenance: site_signal; reinforced by site_ourworldindata restraint.)

**S7 — Defer the mechanics to a first-scroll N-pillar payoff.**
Mastodon's *"Why Mastodon?"* 4-pillar (Decentralized / Open / Not-for-sale / Interoperable) is the model: hero sells the feeling, first scroll pays it off with the *how*. aDNA's first section "What a context democracy is" should read as a crisp **3–4 pillar** payoff (e.g. Open · Federated · Co-owned · For-agents-and-humans), not a paragraph. (Provenance: cluster_federated_networks synth; site_mastodon.)

## Part B — front_page_doctrine deltas (proposed; ratify at O8)

- **D1 — Add a "Storytelling Layer" companion** (this file → graduates into `front_page_doctrine §10` or a sibling `storytelling_doctrine.md`). Rules S1–S7 above; each provenance-stamped. The current doctrine covers *composition*; this covers *narrative*.
- **D2 — Hero upgrade (the two biggest levers):** (a) add the **S2 "you already do X" reframe line**; (b) resolve the **S3 artifact-at-hero** question — live-graph tease and/or a real vault-file snippet near the hero, reconciled with ADR-032's image-led manifesto (a *composed* focal unit, not competing elements — the doctrine's own §1 principle).
- **D3 — Proof-of-life promotion (S5):** surface the 68-vaults number + named subnetworks *higher* (hero-adjacent), as verifiable proof, not only in the mid-page registry.
- **D4 — First-step command (S4):** ensure a one-click-copy `git clone … && claude` on hero and/or get-started.
- **D5 — Confirm, don't move, the 55/45 dial:** the exemplar spread (calm cluster Obsidian/Astro/Signal/OWID ~2/5; loud cluster Mastodon 5/5, CC 4/5) **validates aDNA's mid setting** — warmer than the calm tools (idea is genuinely novel), calmer than Mastodon's grievance-populism (needs docs credibility). Revolutionary energy is sourced from the **thesis + the live artifact**, restraint from **calm copy + negations** (S6). No dial change proposed.

## Part C — Skill-gate check (`skill_reference_inspection`)

- **≥6 artifacts:** ✅ 9 fresh (Mastodon, Matrix, atproto, OWID, Creative Commons, Signal, Obsidian, Astro, JSON Canvas) + 10 prior in `_reference_set` = 19.
- **Both tonal poles:** ✅ sleek-professional (Obsidian/Astro/Signal/OWID, 2/5) ↔ progressive-revolutionary (Mastodon 5/5, CC 4/5).
- **Functional spread:** ✅ federated-network · public-good/commons · knowledge-graph tool · open-standard docs · dev-tool/product (prior set).
- **Every emitted rule carries provenance:** ✅ S1–S7 + D1–D5 each cite ≥2 sites.

## Part D — Threads for O3/O4/O5 (carry forward)

1. **S3 hero-artifact vs ADR-032 image-led manifesto** — the one genuine design tension; a build-campaign decision, flag for O5 storytelling deep-dive + O8.
2. **S2 reframe line** — draft + A/B candidates in the storytelling deep-dive (O5).
3. **Proof-of-life placement (S5)** — verify current home fold order against screenshots (O3).
4. The **calm-but-warm** register (55/45) is the guardrail for every copy change — do not let upgrades tip into hype (Signal lesson).

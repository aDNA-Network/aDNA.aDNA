---
type: artifact
artifact_type: orientation_note
campaign_id: campaign_haussmann
mission: mission_haussmann_p0_1_positioning
title: "P0.1 O0 — positioning orientation: the hero as it is, the rules that bind, the room to move"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
tags: [haussmann, p0_1, positioning, orientation]
---

# O0 — orientation (verified on disk 2026-08-16)

**The hero today** (`site/src/components/sections/HomeHero.astro:76`, verbatim `[D]`):

> "Language and DNA were co-created by everyone before us. The context that powers AI should be too — built, shared, and governed in the open, for the good of all. aDNA is an open standard for organizing project knowledge so both humans and AI agents can navigate it — and the open network where that shared context lives, built on the Lattice Protocol (**the open coordination protocol** underneath)."

≈64 words; lyric register first (~27 words) → definition third sentence → network+protocol fourth. The bolded phrase is **claim-register FALSE #2** (repos private, counsel-gated) — and the *same component* already renders the honest form twice ("built on the Lattice Protocol — the coordination layer, **opening progressively**", lines 180/283, with an EV1 comment explaining why the repo is never linked). The fix pattern exists in-file. Copy source split: lead in `HomeHero.astro`, SEO description in `index.astro:68` (also carries "The open standard and network… Built on the Lattice Protocol"), stats/steps in `src/data/home.ts` (proof-of-life leads the stat strip per Storyweave J3; counts derive from `vaults.json` — never hardcode).

**What binds** (`what/design/front_page_doctrine.md` `[D]`): §1 Above-the-Fold Law — one dominant focus, three legal hero modes (manifesto 35–60w · registry-as-hero · **image-led manifesto** = the shipped mode: title + line as live text composed over the Ghibli scene); §10 R1–R5 RATIFIED durable (install one-liner stays hero-level [R2, shipped] · license eyebrow [R3, shipped] · demo-as-proof format [R1, deferred build]). The dossier adds a fourth evidenced mode: **definition-as-hero** (W3C/EIPs, 28–35w). ADR-032 fixes the visual register (Tokyo Night + Ghibli-pixel scene) — **visual voice is P4.1's lane; this mission moves only the words.**

**What the evidence demands** (`evidence/coldreads/` ×3 `[D-syn]` + FKGL `[D]`): the 30-second test fails on order, not on substance — "the poetry costs you the first 10 of the 30 seconds" (engineer, who got the product from the code block's `&& claude`); the clinician parsed *ancient DNA* and hit the wrong "Compliance"; the contributor read a manifesto site. All three produced CORRECT one-sentence summaries after five minutes — the material is there, arriving late. FKGL 15.7 on home. Anti-pattern 7.6 bar: ≤1 new term before the first concrete example.

**Degrees of freedom**: reorder (mechanism→mission) · re-mode (definition-as-hero) · demote lyric below the fold · split registers. **Fixed points**: the image-led composition (until P4.1 says otherwise) · install one-liner in hero (R2) · license eyebrow (R3) · every claim register-verifiable · embargo-safe protocol language (the in-file honest form generalizes) · proof-of-life stat strip stays derived.

**Cross-candidate dispositions to decide** (apply to whichever candidate wins): (1) *ancient-DNA collision* — recommend a one-time expansion gloss at first use ("aDNA — agentic DNA") in the eyebrow/lead, costing 3 words, killing the misparse; (2) *Compliance label* — recommend renaming the nav/persona label to "Provenance & audit" (implementation lands in P2.2's IA pass; the disposition is recorded in ADR-048 now).

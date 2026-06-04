---
type: artifact
artifact_type: aar
artifact_subtype: decadal_aar
mission_id: mission_adna_str_p5_m510_e1_brand_positioning
campaign_id: campaign_adna_serious_tool_readiness
decadal: E1
decadal_title: "Brand & Positioning (homepage re-frame)"
phase: 5
created: 2026-06-04
updated: 2026-06-04
last_edited_by: agent_stanley
persona: rosetta
session_count: 4
cycle_count: 8
cycle_range: "141-148 (+ this close; nav cycle 9 deferred)"
mission_class: implementation
status: completed
reviewer_lens_pass: true
reviewer_lens_pass_bench: 30
tags: [aar, decadal_aar, artifact, m510, e1, brand_positioning, p5, v8, rosetta, implementation_class, eleven_section_heavy_shape, reviewer_lens_pass_30_persona, max_iii, ss_ghibli_pivot, tokyo_night, adr_032, first_ecosystem_build_decadal, first_e_series_decadal]
---

# AAR: E1 Decadal — Brand & Positioning (homepage re-frame) (M5.10 close)

> 11-section heavy shape per `how/templates/template_aar.md` + D11 / D14 precedent.
> §11 = the **full 30-persona Reviewer Lens Pass** (MAX-III) — the first E-series / ecosystem build decadal, and the first time the campaign runs the entire expanded bench (14 reviewers + 16 adopters) as a single parallel multi-agent Workflow. Raw results: [[rlp_e1_30persona_results|rlp_e1_30persona_results.json]].

---

## §1 Mission Identity

| Field | Value |
|-------|-------|
| Mission | `mission_adna_str_p5_m510_e1_brand_positioning` |
| Campaign | `campaign_adna_serious_tool_readiness` (v8) |
| Phase | 5 (Public readiness) |
| Decadal | E1 — Brand & Positioning (homepage re-frame) |
| Mission class | implementation (**1st ecosystem-build decadal; 1st E-series decadal**) |
| Sessions | 4 (homepage_brand → continue → hero_gen → reskin_deploy → **this decadal-close**) |
| Cycles | 8 built (141-148) + decadal close; **cycle 9 (breadth-first nav) deferred** by operator |
| Persona | Rosetta |
| Reviewer Lens Pass | YES — **full 30-persona bench** (MAX-III; mandatory Brand Strategist + Motion Designer + Design Critic + Visual Designer + Newcomer + Movement Skeptic all scored) |
| Status | completed |

E1 is the **first build mission of the ecosystem-site re-scope** (M5.7 charter) and the **first E-series decadal**. It re-framed the homepage from docs-first ("An Integrated Standard for Context and Knowledge") to the **Agentic Context Democracy** manifesto at the ratified ~55/45 dial, then executed the operator's mid-mission **SS Ghibli-pixel brand pivot** (ADR-032) — a Tokyo Night dark-first reskin with an image-led hero. It folds D18 (Visual Hierarchy & Typography v2) into a brand-system v3.

**Operator scope at this close (AskUserQuestion):** (a) **close now** — the deployed 4-section homepage is E1-complete; Section 5 (Join + public-good tease) defers to **E5**, breadth-first nav defers to a later pass; (b) run the **full 30-persona RLP via Workflow**; (c) **all polish** (re-render section heroes on Imagen Ultra + `front_page_doctrine` §1/§4 edits + Mermaid/OG verify) → redeploy in scope.

---

## §2 Scorecard

### Cycle-level (8 build cycles + close)

| Cycle | E1 # | Theme | Status |
|---|---|---|---|
| 141 | 1 | Hero re-frame → Direction-A manifesto ("Context is our shared inheritance") | deployed |
| 142 | 2 | Hero words-first + banner demoted (above-fold law) | deployed |
| 143 | 3 | Brand-system v3 — dark-mode-first hero band | deployed |
| 144 | 4 | Section 1 — context-democracy definition + inline NetworkDiagram (real vaults) | deployed |
| 145 | 5 | Section 2 — the living registry (8 curated real vault cards + honest affordances) | deployed |
| 146 | 6 | Image-led "The aDNA Network" hero (SS-Ghibli pivot, 1st instance; Imagen Ultra; 5-persona adversarial review) | built |
| 147 | 7 | ADR-032 broad reskin — Tokyo Night dark-first tokens + visual-identity v3 + 4 SS-Ghibli section heroes (Fast) | **deployed live** |
| 148 | 8 | **Polish/finalize** — section heroes re-rendered on **Ultra**; `front_page_doctrine` §1/§4 reconciled; Mermaid/OG verified; **2 pre-existing dark-mode AA contrast misses fixed** | this session |
| — | 9 | breadth-first nav re-frame + responsive/motion pass | **DEFERRED** (operator) |
| 149 | 10 | **E1 decadal close** — 30-persona RLP + this AAR + full Lighthouse + STATE/STR cascade | this session |

### Quality gates (at close)

| Metric | Result | Note |
|---|---|---|
| Astro build | **PASS** — 161 pages, 0 errors | new Ultra heroes re-optimized to WebP/AVIF |
| Playwright gates | **56 / 56** | +2 pre-existing dark-mode a11y failures fixed this cycle |
| axe WCAG-AA | **0 violations, BOTH modes** | dark via gate-4; light via standalone probe on the 5-page sample |
| Lighthouse Performance | **100** on all 5 pages | the hard gate MET; homepage **97 → 100** vs Phase-7 baseline |
| Lighthouse Accessibility | mean **99** | home 96 (one mobile `target-size` item); concept/tutorial/glossary/adopter 100 |
| Lighthouse Best-Practices / SEO | **100 / 100** all 5 | — |
| prefers-reduced-motion | honored | present in built CSS; no motion added |

Lighthouse evidence: `site/evidence/lighthouse_e1_{home,concept_triad,tutorial_first,glossary,adopter_solo}.json`. Screenshots: `site/evidence/e1_rlp_screens/` (9).

### Reviewer Lens Pass (30-persona) — headline

| Track | Ranker OVERALL (mean of 6 dims) | vs 4.95 gate |
|---|---|---|
| **Adopter bench (16)** — *the hard-gate metric* | **4.19** | baseline (not a decadal-level gate — see §11) |
| Reviewer bench (14) | **4.42** | — |
| Full 30 | **4.29** | — |
| Verdicts | **13 approve + 17 approve-with-changes, 0 reject** | — |

---

## §3 Gap Register

| # | Gap | Severity | Source | Remediation |
|---|---|---|---|---|
| 1 | **Actionability 3.63** (lowest dim) — no participation/join/publish/CLI CTA above the fold; both hero CTAs route to consumption (Explore / Read) | medium | RLP — Conversion Specialist, Indie Hacker, Dev-Tools Designer, Marketplace Publisher, Community Lead | **By design** — the participation/join surface is the deferred Section 5 + breadth-first nav. Route to **E4** (network/join) + a fast-follow "one honest participation CTA above the fold" |
| 2 | **Relevance 3.81** — manifesto-first hero leads with ethos/heritage; the concrete pain + mechanic ("agents relearn your repo every session"; "three directories: what you know / how you work / who's involved") lives ~3 sections down | medium | RLP — Newcomer, UX Writer, Solo Dev, Startup, Educator, Brand Strategist | Hero copy is **operator-ratified (Direction A)** → operator-gated. Fast-follow candidate: append one concrete clause to the hero subline (UX Writer supplied exact copy) |
| 3 | Marketplace cards have no pull/compose/GitHub affordance | medium | RLP — Marketplace Consumer | Gated pending the marketplace data shape → **E2** (RegistryCard comment confirms) |
| 4 | Governance/security/cadence not reachable from homepage | medium | RLP — Enterprise Architect, OSS Maintainer, Community Lead, Lab Steward | Route to **E3** (community/org) + a "governance/standard" trust-anchor link in nav |
| 5 | Public-good "democracy / for the good of all" claim asserted but its proof is deferred | low | RLP — Movement Skeptic, Brand Strategist | **By design** (E5). Fast-follow: surface **one** real public-good vault (WGA / Rare Archive) in the registry now so the claim points at a checkable thing before the full E5 showcase |
| 6 | NetworkDiagram edges (0.32 opacity) + dark nodes vanish against the dark section bg | low | RLP — Infographic Specialist, Diagram Reviewer | 1-line fix (raise edge opacity toward 0.5 + contrast halo); fast-follow. Also: the hexagonal ring implies a false peer-to-peer topology — render ring subordinate or drop |
| 7 | Light-mode hero: the dark Tokyo-Night PNG is not theme-switched → luminance cliff on the near-white light body | low | RLP — Visual Designer (4.83), Design Critic | Lower severity (site is hard dark-first; light is opt-in). Fast-follow: light hero variant or an intentional dark inset frame |
| 8 | "How it Works" stacks a 3-up feature-strip above the 3-up steps-grid → densest block; reads as a feature wall | low | RLP — Design Critic, Accessibility Auditor | Fast-follow: move the feature-strip into Section 1 or collapse to a single-line band |
| 9 | Homepage mobile `target-size` — inline registry-action links + "·" separators are crowded tap targets (Lighthouse a11y 96; WCAG 2.5.5/2.5.8, not caught by axe-AA) | low | RLP — Accessibility Auditor; Lighthouse | Fast-follow: increase tap-target spacing on `.reg-open` / registry-action inline links |
| 10 | `home.ts` persona/use-case copy is generic-SaaS register ("fast-moving teams", "preserve institutional knowledge as they scale") | low | RLP — Brand Strategist, Content Strategist | Not rendered on the current homepage; tighten when the persona strip returns (D15 surface / E-series) |

**0 critical gaps.** 4 medium (all map to **deliberately deferred** E2/E3/E4 scope), 6 low (fast-follow candidates). The two lowest ranker dimensions are **dominated by deferred-scope**, which is the intended read: E1 shipped the brand/positioning layer; the participation + proof + marketplace layers are E2-E5.

---

## §4 Technical Debt

| # | Debt | Impact | Priority | Tracking |
|---|---|---|---|---|
| 1 | `:global(.dark)` in a **plain `.css` file** silently drops the rule (Astro scoped-style construct only) — caused the difficulty-badge dark-mode miss | A future plain-CSS dark override could silently fail | medium | Fixed in `tutorial-meta.css`; **lesson:** run the FULL gate suite (gate-4 samples Tutorial + 404, not just homepage) at every decadal close, not homepage-only axe |
| 2 | `--color-primary` flips light→dark (deep `#6d4bb8` → light `#9d7cd8`); any white-on-primary button needs a `.dark` override to `--brand-primary-dark` | New white-on-primary buttons will fail AA in dark unless they replicate the override | medium | Fixed in `404.astro`; the global `.btn-primary` already had it. Candidate: a shared `.btn-primary`-class instead of per-page scoped `.btn` |
| 3 | Section-hero `candidates/` are local-only/gitignored; only winners are committed | Candidate provenance not in git | low | Image-gen logs (`cycle_148_*image_gen_log.json`) record the round/model/cost; acceptable |
| 4 | RegistryCard affordances (pull/compose/graph) are commented-out pending the marketplace data shape | The "living registry" is browse-only until E2 | low (by design) | RegistryCard.astro comment; E2 dependency |
| 5 | Deploy requires local prebuilt (`vercel deploy --prebuilt`) because `prebuild` reaches `../scripts`; Vercel source-build fails | Can't use git-push auto-deploy → CLI token-leak risk recurs | medium | Carry-forward; candidate: relocate `build_vaults_data.mjs` inside `site/` or vendor the data so a Vercel source-build works |

**No high-priority debt.** Medium items all have named fixes/owners.

---

## §5 Readiness Assessment

| Criterion | Status | Evidence |
|---|---|---|
| Build clean | **GO** | 161 pages, 0 errors |
| Quality gates | **GO** | 56/56 Playwright; axe 0 AA both modes |
| Performance hard gate | **GO** | Lighthouse Perf 100 ×5; reduced-motion honored |
| Image-gen budget honored | **GO** | $0.44 this cycle; cumulative v8 P5 ~$2.54 of $50 (5.1%) |
| Hard constraints honored | **GO** | engine files unedited; rename-nothing (S8 KEEP); ≤2 fighting colors; no marketing adjectives; ethos shown-not-preached |
| 30-persona bench operational | **GO** | full bench run as a Workflow; all 6 mandatory reviewers scored |
| Reviewer Lens Pass | **GO (with routed changes)** | 0 rejects; mandatory design/brand/visual lenses 4.33-4.83 approve; lower dims map to deferred scope |
| Deploy | **GO** | redeploy bundled at close (Ultra heroes + a11y fixes) |

**Overall: GO** to close E1 and proceed to the next ecosystem build mover.

**Rationale:** E1's actual remit — **brand & positioning** — passed the bar the design/brand/visual reviewers own (Design Critic 4.5, Brand Strategist 4.5, Visual Designer 4.83, Motion 4.33, all approve; "it finally looks made on purpose"). The sub-4.95 aggregate is **expected at decadal level** (D11 closed 4.5, D14 4.75) and is **concentrated in actionability + relevance**, which are the deferred participation/proof/marketplace layers (E2-E5), not brand defects. The RLP did its job: it priced the deferral and wrote the next epics' priority queues.

---

## §6 Recommendation

**Close E1. Proceed to the next ecosystem build mover — E4 aDNANetwork (least-gated) — with the E1 RLP priority queue as input.**

### E-series sequence (per M5.7 charter `m57_eseries_ecosystem_theme_set`)

| Order | Decadal | Theme | E1-RLP input it consumes |
|---|---|---|---|
| 1 | **E4** | aDNANetwork (vaults.json + federation_refs; least-gated, Step-4 unblocked) | Gaps #1 (join/participation), #4 (governance surface), network-operator "what stays local / what is shared" |
| 2 | **E5** | Public-Good Commons & Subnetwork Federation | Gap #5 (surface one real public-good vault now), the deferred Section 5 |
| 3 | **E2** | Marketplace (pull / compose / publish affordances) | Gap #3 (RegistryCard affordances), Marketplace Publisher/Consumer pains |
| 4 | **E3** | Community / Org surfaces | Gap #4 (governance, RFC, security contact, CoC, contributor pathways) |
| 5 | E6 | Capstone — multi-track ≥4.95 exit gate | the full A/B/C/D/E re-ranker |

### E1 fast-follow bucket (operator-discretionary; cheap, within E1 remit, do before/with E4)

1. **NetworkDiagram contrast** (Gap #6) — raise edge opacity → ~0.5 + halo; 1-line, lifts the thesis-proof graphic.
2. **Hero concrete clause** (Gap #2) — append one mechanic clause to the hero subline (UX Writer copy ready). **Operator-gated** (Direction-A hero is ratified).
3. **One public-good proof now** (Gap #5) — link one real public-good vault in the registry ahead of the full E5 showcase.
4. **Light-mode hero variant** (Gap #7) + **"How it Works" density split** (Gap #8) + **mobile target-size spacing** (Gap #9).

---

## §7 Lessons Learned

1. **The full 30-persona RLP as a parallel Workflow is the right MAX-III mechanism.** 30 persona-agents (each loading its persona file + viewing the shipped-build screenshots + reading lens-relevant source) completed in ~3 minutes wall-clock (~1.9M subagent tokens, a pool parallel to the main loop). It produced a far richer, more honest signal than the 5-persona subset of D11/D14 — and crucially, **the aggregate is decomposable**: the two low dimensions traced cleanly to deferred scope, which is exactly the diagnostic a decadal close needs. NEW SEED `skill_full_bench_rlp_via_workflow`.

2. **A decadal close must run the FULL gate suite, not homepage-only axe.** Cycle 147 claimed "axe 0 both modes" from a homepage check, but the full gate-4 (which samples Tutorial + 404) caught **2 dark-mode contrast misses** the homepage pass never saw. The decadal close is the right place to surface these. **Lesson codified as a debt-item discipline.**

3. **`:global(.dark)` is invalid in a plain `.css` file** — it is an Astro scoped-`<style>` construct; in a standalone stylesheet it is dropped, silently. `tutorial-meta.css` was the lone anomaly (every other `.css` uses plain `.dark`), so its dark badge override never applied and the light-mode green rendered in dark mode (2.34:1). The fix is to match the plain-`.dark` convention. NEW SEED `skill_global_dark_selector_invalid_in_plain_css`.

4. **`--color-primary` flips light↔dark, so white-on-primary needs a dark override.** The light token is the AA-safe deep purple `#6d4bb8` (5.8:1 with white); dark flips to the lighter `#9d7cd8` (3.32:1, fails). The homepage `.btn-primary` already had `.dark` override; the 404 scoped `.btn` didn't. Any white-on-primary surface must replicate `background: var(--brand-primary-dark)` under `.dark` (scoped off `.btn-outline`).

5. **Imagen Ultra capacity is intermittent, not gone.** Cycle 147 fell back to Fast under 429; this cycle Ultra had capacity (one transient retry). The Ultra section heroes are visibly richer — re-rendering the deploy-time Fast assets on Ultra at the decadal close is a clean polish pattern.

6. **The "how" pipeline motif tends to bake faux-text module labels.** The first Ultra "how" variant carried a texty module (a generic-AI tell a Design Critic flags); a 3-variant re-roll yielded a clean, iconographic, warm-lamp version. For diegetic-UI scenes, budget a cheap re-roll to drop letterforms.

7. **The image-led manifesto is a legitimate third hero mode — and the doctrine now records it.** ADR-032's image-led hero (scene + live title composed as one focal unit) reverses the cycle-2 "demote the banner below the words" reading without violating the single-focus law. `front_page_doctrine` §1 now carries it as a legal mode; the Brand Strategist (5/5 primary) confirms the dial lands ~52-55, on target. NEW SEED `skill_image_led_manifesto_hero`.

8. **Deferring scope is a legitimate, measurable decision.** Section 5 (public-good tease) → E5 and breadth-first nav → later were operator calls. The RLP didn't hide the cost (actionability 3.63 / relevance 3.81); it **priced** it and routed it to E2/E4/E5. A decadal can close honestly below the phase-exit gate when the shortfall is deferred-scope, not defects — and the design reviewers who own E1's actual remit approved.

9. **Decadal-level ranker baselines climb across the campaign, and E-series resets the baseline.** D11 closed 4.5, D14 4.75 (docs-polish on a mature site). E1 — the first ecosystem-brand decadal on a freshly re-framed homepage — sets a **4.19 adopter baseline** for the E-series. The ≥4.95 gate is a D20/E6 multi-track exit condition across SITE+REPO, never a single-decadal gate.

10. **Honest affordances earned the trust score.** Adopter `trust` = 4.63 (reviewer trust 4.93, the highest dim) — driven by 40 real vaults with honest supersession badges, MIT, no marketing adjectives, no dark patterns ("trust earned by 40 real vaults", Conversion Specialist). The restraint discipline (writing-guidelines AVOID + ≤2 colors + no fabricated UI) is paying in the dimension that gates enterprise/OSS adoption.

---

## §8 Token-budget two-metric (per ADR-016 Clause C)

| Metric | Estimated | Actual | Threshold | Verdict |
|---|---|---|---|---|
| **Content-load — decadal-close session (kT)** | 120-200 | ~150-190 (heavy: full STATE read + cycle/AAR authoring + RLP synthesis + a11y debugging) | < 2× | no retrospective |
| **Cumulative E1 build (4 sessions, content-load kT)** | 150-250 (mission frontmatter) | ~200-280 across the 4 sessions | < 2× | no retrospective |
| **RLP subagent pool (parallel; not main-loop)** | — | ~1.92M subagent tokens across 30 agents / 253 tool-uses / ~173 s | n/a | parallel pool per Workflow; reported for transparency |
| **Image-gen ledger (v8 P5 cumulative)** | ≤ $50 cap | ~$2.54 (5.1%) — D14 $1.72 + c146 $0.24 + c147 $0.14 + c148 $0.44 | cap | well within |

**Verdict:** within threshold; no retrospective. The 30-agent RLP demonstrates that a full-bench MAX-III review is affordable as a parallel Workflow without blowing the main-loop content budget.

---

## §9 Standing Order discharges

### Project-level (`aDNA.aDNA/CLAUDE.md` SO 1-10)

| SO | Discharge at E1 |
|---|---|
| #1 Phase gates are human gates | HONORED — no phase advance (P5 stays P5); E1→E4 is operator-gated |
| #2 Destructive actions require confirmation | HONORED — winners copied over heroes (originals are gitignored candidates + git history); no deletions |
| #3 Context budget is doctrine | HONORED — heavy-file STATE reads via offset/grep; RLP offloaded to a parallel Workflow |
| #4 Local context over global | HONORED — cycle JSONs + AAR reference local mission/design spec; doctrine reconciled in-place |
| #5 Every mission gets an AAR | DISCHARGED — this artifact + the 5-line AAR in the mission spec |
| #6 Archive, never delete | HONORED — session moved active→history; gen-logs renamed not deleted; deploy stands |
| #7 Dual-audience | HONORED — homepage reviewed by both developer adopters (Solo/Startup/Researcher) and newcomer/educator lenses |
| #8 Self-reference | DISCHARGED — `front_page_doctrine` §8 worked example IS the aDNA homepage; the AAR cites the cycle JSONs holding its evidence |
| #9 Upstream spec source of truth | HONORED — no normative contradiction; ADR-032 + visual-identity v3 are the doctrine of record |
| #10 Cross-link aggressively | HONORED — AAR + cycle JSONs + doctrine carry ≥2 wikilinks each |

### Campaign-level (`campaign_adna_serious_tool_readiness/CLAUDE.md` SO 11-19)

| SO | Discharge at E1 |
|---|---|
| #11 Per-phase decadal AAR mandatory | DISCHARGED — this artifact + `skill_decadal_aar` + §11 RLP (E1 is an RLP-cadence decadal) |
| #12 Per-mission context budget | DISCHARGED — §8 two-metric |
| #13 Cross-vault coord memo preservation | n/a — no cross-vault coord in this close |
| #14 ADR ratification gated at phase entries | HONORED — ADR-032 was ratified mid-mission as a **load-bearing operator override** (the documented exception); no new ADRs authored at close |
| #15 Dispatch-where-possible | n/a |
| #16 v7.0 tag dependency | n/a (P1 long-closed) |
| #17 Mission_class discipline | DISCHARGED — `mission_class: implementation`; 1st ecosystem-build decadal |
| #18 Decadal AAR persona update at Phase 5 | DISCHARGED — the **30-persona** bench (M5.9 expansion) consumed in full; supersedes the original 5 |
| #19 Phase exit gate = human gate | HONORED — no phase advance |

---

## §10 Pattern disposition (final state at E1 close)

### Graduations (this decadal)

| Skill | Before | After | Note |
|---|---|---|---|
| `skill_decadal_aar_authoring` | 2/3 (D11 cycle 110 + D14 cycle 130) | **3/3 GRADUATES** (this E1 AAR) | First with a full 30-persona §11 |
| `skill_implementation_class_decadal_cycle_authoring` | graduated at D12 (20/3+) | **reinforced** (E1 = 4th implementation-class decadal in v8 P5) | post-graduation |

### New seed candidates (this decadal)

| Skill | Status | Rationale |
|---|---|---|
| `skill_full_bench_rlp_via_workflow` | 1/3 | Run the entire expanded persona bench as one parallel multi-agent Workflow with a structured schema; synthesize adopter-matrix (hard gate) + reviewer-scorecard + priority queue in-loop |
| `skill_image_led_manifesto_hero` | 1/3 | Illustrative hero scene + live composited title as ONE focal unit (not abstract-only, not bare-words); the 3rd legal hero mode (cycles 146-147) |
| `skill_dark_first_hard_default` | 1/3 | `<html class="dark">` default + inline-script dark-unless-toggled — the register greets every visitor (cycle 147) |
| `skill_global_dark_selector_invalid_in_plain_css` | 1/3 | `:global(.dark)` is dropped in a plain `.css` file; use plain `.dark` — caught only by the full gate suite (cycle 148) |
| `skill_full_gate_suite_at_decadal_close` | 1/3 | Homepage-only axe misses page-specific contrast (Tutorial/404); run the whole gate suite at the decadal close |
| `skill_ultra_rerender_of_fast_deploy_assets_at_close` | 1/3 | Re-render deploy-time Fast image assets on Ultra at the decadal close when capacity returns; cheap-reroll diegetic-UI scenes to drop faux-text |

### Post-graduation reinforcements

| Skill | Note |
|---|---|
| `skill_campaign_close_archive` | Op-3 archive-on-close applied at this STATE refresh (E1 close demotes the cycle-147 top bullet) |
| `skill_design_spec_authoring` | `front_page_doctrine` §1/§4 reconciliation + this AAR |
| `skill_substrate_pure_separation` | a11y fixes + doctrine edits kept separable from the RLP/AAR governance |

### Invariant violations

**0** end-to-end across cycles 141-148 + close.

---

## §11 Reviewer Lens Pass (30-persona, MAX-III)

The **full expanded bench** (14 reviewers + 16 adopters) reviewed the shipped homepage as a single parallel Workflow. Each persona loaded its file, viewed the shipped-build screenshots (`site/evidence/e1_rlp_screens/`), read lens-relevant source/docs, and scored the 6 ranker dimensions (reviewers also scored their primary lens + concrete flags). Raw: [[rlp_e1_30persona_results|rlp_e1_30persona_results.json]].

### Ranker matrix (mean per dimension)

| Dimension | Adopter (16) — hard gate | Reviewer (14) | Full 30 |
|---|---|---|---|
| Findability | 4.13 | 4.29 | 4.20 |
| Comprehension | 4.44 | 4.50 | 4.47 |
| **Actionability** | **3.63** | 4.50 | 4.03 |
| Trust | 4.63 | 4.93 | 4.77 |
| **Relevance** | **3.81** | 4.00 | 3.90 |
| Delight | 4.50 | 4.29 | 4.40 |
| **OVERALL** | **4.19** | **4.42** | **4.29** |

**Verdicts:** 13 approve + 17 approve-with-changes, **0 reject**. No-dim-below-4.80 across adopters: **false** (actionability 3.63, relevance 3.81, findability 4.13 below the 4.80 floor — all deferred-scope-driven).

### Mandatory reviewer scorecard (the 6 E1-mandated lenses)

| Reviewer | Primary lens | Primary | Overall | Verdict | Headline |
|---|---|---|---|---|---|
| **Brand Strategist** | positioning dial | **5.0** | 4.5 | approve | "Finally earns its conviction — manifesto re-frame lands ~52-55 on the dial; not one 'blazingly fast' to cut. Promote one manifesto clause to headline weight." |
| **Design Critic** | made-on-purpose | **5.0** | 4.5 | approve | "It finally looks made on purpose — emoji-wall and 7-section pileup gone, one coherent SS-Ghibli voice + 2-signal palette. Tighten the 'How it Works' double-3-up." |
| **Visual Designer** | craft / palette / type | 4.6 | **4.83** | approve | "A genuinely designed page, not assembled. Only the un-theme-switched dark hero on the white light body keeps craft shy of flawless." |
| **Motion Designer** | motion budget | 4.0 | 4.33 | approve | "Budget flawless by subtraction — Perf 100, dual-guarded reduced-motion — but spends nothing where §5 invites one thesis-bearing node-joining entrance." |
| **Newcomer Stress-Tester** | 60-sec What/Why/How | 4.0 | 4.33 | approve_with_changes | "Genuinely moved in 60s, but the named pain lives 3 scrolls down; the hero leads with philosophy before problem." |
| **Movement Skeptic** | earned conviction | 4.0 | 4.17 | approve_with_changes | "Mostly real — restraint is honest, superseded badges are genuine evidence — but 'for the good of all' leans on an E5 IOU; point at one real public-good vault now." |

### Cross-cutting themes (synthesized across all 30)

1. **Actionability / participation (drives the 3.63):** no join/publish/CLI/"do"-verb CTA above the fold; both CTAs route to consumption. → **E4 + fast-follow CTA.** (Conversion, Indie Hacker, Dev-Tools, Marketplace Publisher, Community Lead, Network Operator.)
2. **Relevance / pain-before-poetry (drives the 3.81):** manifesto-first hero buries the concrete mechanic; many want one plain "what aDNA is / will it stop my agent relearning my repo" clause near the fold. → **operator-gated hero tweak.** (Newcomer, UX Writer, Solo Dev, Startup, Educator, Enterprise Team.)
3. **Governance invisible:** no governance model / security contact / release cadence / RFC reachable from the homepage. → **E3.** (Enterprise Architect, OSS Maintainer, Community Lead, Lab Steward.)
4. **Public-good proof deferred:** surface ONE real public-good vault now. → **E5 + fast-follow.** (Movement Skeptic, Brand Strategist.)
5. **NetworkDiagram whispers + false topology:** edges/nodes vanish on dark bg; the ring implies peer-to-peer federation the system doesn't have. → **fast-follow.** (Infographic Specialist, Diagram Reviewer.)
6. **Light-mode hero luminance cliff** (Visual Designer, Design Critic) + **"How it Works" double-3-up density** (Design Critic, Accessibility Auditor) + **mobile target-size** (Accessibility Auditor; mirrors Lighthouse 96) → **fast-follow craft.**
7. **Trust is the standout (4.63 adopter / 4.93 reviewer):** 40 real vaults, honest supersession badges, MIT, zero marketing adjectives, no dark patterns — the restraint discipline is paying where it gates adoption.

### Priority queue (feeds the next E-series cycles)

| # | Item | Route |
|---|---|---|
| 1 | One honest **participation CTA** above the fold | E4 + fast-follow |
| 2 | One concrete **mechanic clause** in/near the hero | fast-follow (operator-gated hero) |
| 3 | **Marketplace** pull/compose/publish affordances on cards | E2 |
| 4 | **Governance/security/RFC** surface + nav link | E3 |
| 5 | Surface **one real public-good vault** now | E5 + fast-follow |
| 6 | **NetworkDiagram** contrast + topology honesty | fast-follow |
| 7 | **Light-mode hero** variant + **"How it Works" density** split + **mobile target-size** | fast-follow |

**Aggregate:** adopter ranker **4.19** (full 30 = **4.29**) — the **E-series baseline**. This is the first E-series decadal; the ≥4.95 multi-track exit gate is evaluated at **E6 / D20** across SITE+REPO, not here. All 6 mandatory design/brand lenses **approve**; the shortfall is concentrated in deferred-scope dimensions (actionability/relevance) and is fully routed above. **E1 closes GREEN on its own brand/positioning remit.**

---

## See also

- [[mission_adna_str_p5_m510_e1_brand_positioning|M5.10 / E1 mission spec]]
- [[m510_e1_homepage_design_spec|E1 homepage design spec]]
- [[rlp_e1_30persona_results|rlp_e1_30persona_results.json]] — full 30-persona raw results
- [[adr_032_brand_register_pivot|ADR-032 brand register pivot]] · [[front_page_doctrine]] · [[narrative_ethos_public_good]]
- cycle JSONs: `cycle_141`…`cycle_148` (`what/measurement/iii_results/2026-06/`)
- [[aar_decadal_d11_visual_identity|D11 AAR]] · [[aar_decadal_d14_readme_first_contact|D14 AAR]] — prior RLP-cadence decadals (5-persona); E1 is the first 30-persona
- [[m57_eseries_ecosystem_theme_set|E-series theme set]] — E2-E6 sequence
- [[campaign_adna_serious_tool_readiness|Campaign master]] Phase 5 M5.10 row

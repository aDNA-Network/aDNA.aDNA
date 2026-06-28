---
type: artifact
artifact_class: findings_register
campaign_id: campaign_looking_glass
mission_id: mission_inspect_m02
title: "Operation Looking Glass — M2 Inspect scored findings register"
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
status: active
tags: [campaign, looking_glass, inspect, findings_register, claim_trace, persona_ranker, representation_coherence]
---

# M2 Inspect — Scored Findings Register

> **What this is.** The evidence base produced by running the built III ([[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|scaffolding]]) across **Subject A** (the website) and **Subject B** (the [[how/campaigns/campaign_looking_glass/artifacts/site_backing_slice|site-backing context slice]]), measured against the [[how/campaigns/campaign_looking_glass/artifacts/baseline_snapshot|M1 baselines]]. Three tiers: machine gates (T1), claim-trace + context checks (T2, agent), persona ranker (T3). **Read-only — no fixes** (those are M4). Each finding is scored **severity × fidelity-impact × effort → priority**. M3 (Introspect + plan) ranks this into the improvement plan → DP3.

## Headline

**The site (Subject A) is a faithful, current mirror of the vault — and is _more current than its own backing prose_.** Zero Critical findings; zero confirmed fabricated/untraceable claims; 302/302 gates green; full 15-lens persona mean **4.45 representation / 4.38 craft**, core mean **4.50 / 4.40** (clears the 4.30 floor). The campaign's marquee finding is an **inversion**: the website already moved to **v2.3 / `aDNA-Network/aDNA`**, while the vault's own `what/` + `who/` extension prose still says **v2.1–v2.2 / `LatticeProtocol/Agentic-DNA`** (Subject B staler than Subject A). The site's defining strength across every lens is **honesty about what is not built yet**.

## Scorecard vs. charter thresholds

| Criterion | Threshold | Result | Status |
|-----------|-----------|--------|--------|
| **A1** correctness / no fabrication | 0 untraceable/contradicted; G20 green | 0 confirmed fabrications; **G20 green**; 1 High under-verification (proof-links escape the 9-claim manifest) | ⚠️ PASS-with-flag |
| **A2** currency / no drift | 0 stale; G21 green | **G21 green**; rendered headline counts/version all current; 2 minor drifts (reading-guide line-refs · install SHA) | ⚠️ PASS-with-flag |
| **A3** structural fidelity | 0 IA misrepresentations | **0** — graph is honest hub-and-spoke, edges real+typed, no decorative edges, no invented categories | ✅ PASS |
| **A4** craft | gate ≥ 302 + core mean ≥ 4.30 | **302/302** + core **4.50 rep / 4.40 craft** | ✅ PASS |
| **B1** internal consistency | 0 unresolved contradictions | **2** contradiction classes (vault↔site version/repo; intra-file v2.1↔16-type) | ❌ FAIL → M4 target |
| **B2** correctness vs spec | 0 contradictions vs `adna_standard.md` | **1** class (~8 vault files cite v2.1/v2.2; spec is v2.3) — SO9 | ❌ FAIL → M4 target |
| **B3** representation-readiness | frontmatter 100% + dual-audience + self-ref + ≥2 links | frontmatter **100%** · dual-audience **pass** · self-ref **pass** (1 stale-currency note) · links ≥2 **100%** | ✅ PASS (1 fix noted) |

Finding tally: **0 Critical · 6 High · 11 Medium · 8 Low** (25 distinct, deduped across tiers).

---

## Tier 1 — Machine gates (empirical 2026-06-27, re-run)

| Measure | Baseline | M2 re-run | Δ |
|---------|----------|-----------|---|
| Gate harness total | 302 green | **302 green** (187 fast + 115 @audit; 1.5m, 0 flake) | 0 ✅ |
| Build | 177 pages, 0 err | **177 pages, 0 err** (4.87s) | 0 ✅ |
| axe (a11y) | 0 violations | 0 (via gate-4 + @audit sweep) | 0 ✅ |
| Lighthouse | Perf 98 · A11y 100 · BP 100 · SEO 100 | gate-19/gate-10 budget green; live scores cited from 2026-06-24 deploy (dist byte-current, site unchanged since M1) | 0 ✅ |
| G20 claim-trace | green (16 cases) | **green** | 0 ✅ |
| G21 currency | green (5 cases) | **green** | 0 ✅ |

**T1 verdict:** zero regression; the machine floor holds exactly at baseline. **Critically, the machine tier surfaced _none_ of the substantive findings below** — every material finding came from T2/T3 (see [[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|instrumentation ledger]] Log 4).

---

## Tier 3 — Persona ranker (15 lenses, 0–5)

| Lens | Set | Representation | Craft |
|------|-----|:--:|:--:|
| Claim-Tracer | core | 4.6 | 4.5 |
| Standard Archivist | core | 4.6 | 4.6 |
| Information Architect | core | 4.4 | 4.2 |
| Content Strategist | core | 4.5 | 4.4 |
| Newcomer Stress-Tester | core | 4.4 | 4.3 |
| Design Critic | extended | 4.4 | 4.3 |
| Accessibility Auditor | extended | 4.4 | 4.4 |
| Performance Engineer | extended | 4.1 | 4.2 |
| Brand Strategist | extended | 4.5 | 4.4 |
| UX Writer | extended | 4.5 | 4.4 |
| Anti-Bloat Editor | extended | 4.4 | 4.3 |
| Researcher | adopter | 4.5 | 4.4 |
| Educator | adopter | 4.5 | 4.5 |
| OSS Maintainer | adopter | 4.4 | 4.3 |
| Network Node Operator | adopter | 4.6 | 4.5 |
| **Core mean (5)** | | **4.50** | **4.40** |
| **Full mean (15)** | | **4.45** | **4.38** |

**Does-Justice score (representation_coherence rubric):** **4/5** — fully traceable + current + honest two-sided comparisons; single deduction = one framing-drift claim (A-03) that overstates a vault-local quality gate as a standard requirement (does not cap to ≤1 — not headline/credibility-load-bearing, and it faithfully mirrors the same error in the vault source). Lowest lens = Performance (4.1, the `/vaults/graph` client-render tax). Strongest axis = Brand (4.4–4.5; honest topology/provenance language).

---

## Subject A — Website findings

### Fidelity (claim-level)

**A-01 · Proof-links over-count / under-verified** — `High · fid:High · effort:S–M · website-owned · RC-TRACE-02 · P1`
`/learn/what-is-adna` renders **7** proof-links but `install_truth.json.verified_paths` build-checks only **4**; 3 escape the existence gate (2 v8.0 template paths + the bare `.adna/` tree-link). On a credibility-load-bearing "inspect the actual files" surface. G20's 9-claim manifest does not cover the proof-links block → the claim renders past its own gate. **M4: resolve all 7 live; add the 2 v8.0 paths to `verified_paths` or gate on existence; extend G20 manifest** (instrumentation crossover).

**A-02 · Reading-guide spec line-ref drift** — `Med · fid:Med · effort:S · website-owned · RC-CURR-01 · P2`
`reference/reading-guide.mdx` cites spec section line-ranges (e.g. "§20 · lines 1200–1336") but the live spec is 1483/1487 lines — navigational anchors drifted after the v2.3 edits. Reading aids, not load-bearing facts.

**A-03 · "Standard requires 2 cross-links" framing drift** — `Med · fid:High · effort:S · what-ground-truth · RC-STRUCT-03 · P2`
`knowledge-graph.mdx:46` says "The aDNA Standard requires minimum 2 cross-links per content file" — the spec has **no** such rule (it is Rosetta Standing Order 10, vault-local). Mirror-of-source: the vault's own `concept_knowledge_graph.md:46` carries the identical error. SO9 (never contradict the spec) at representation level. **Fix the vault source first, then the site mirror.**

**A-04 · `install_truth.json` template SHA currency** — `Low · fid:Low · effort:S(regen) · pt19-owned · RC-CURR-02 · P3`
Pins `template_sha 74cb761` (the frozen-legacy clone SHA per CLAUDE.md); local `.adna` HEAD has advanced to `0a18b50`. No dangling link (the 4 verified paths resolve), pure currency. **Ring A — flag to Hestia; confirm which SHA the public image ships; never hand-fix** (`npm run sync:install` is pt19's lane).

**A-05 · "16+ entity types" on comparison page** — `Low · fid:Low · effort:S · website-owned · P3`
`/learn/comparisons/adna-vs-para` renders "16+ entity types" where canonical is exactly 16 base. The "+" defensibly gestures at extensions; current (not the stale "14+"); cosmetic.

### Craft / structure

**A-06 · `/vaults/graph` client-rendered topology** — `High · fid:Low–Med · effort:L · website-owned · cross-lens(Design/A11y/Perf) · P1`
The flagship federation diagram renders client-side via Mermaid (mermaid.core 600 KB + cytoscape 442 KB + katex 259 KB). It is simultaneously the **Performance laggard** (Perf 83 / LCP ~4.06s live — High), an **a11y no-JS gap** (empty container without JS; topology is in a `data-chart` attr, reachable by agents but not rendered for no-JS humans — Med), and the **least-crafted visual** vs. the bespoke SSR homepage `netdiagram` (Med). **SSR-prerender to static SVG lifts all three axes at once — highest-leverage M3 candidate** (data-independent; the homepage already proves the team can SSR a diagram).

**A-07 · `/learn/concepts/*` CLS over threshold** — `Med · fid:Low · effort:M · website-owned/deploy · P2`
Concept template CLS ~0.156 live (0.134 local), over the 0.1 Good band — masked by a green composite (ties to WEBSITE D4 G3-deferred / SITEMAP §5 baseline). Verify post-deploy.

**A-08 · Top-nav 8-item span + overlap** — `Med · fid:Low · effort:M · website-owned · IA · P2`
8 items (Network · Vaults · Commons · Learn · Patterns · Use Cases · Community · Reference) — one over Miller 7±2 (under the 9 ceiling). Conceptual overlaps: Learn/Reference, Patterns/Use Cases, Network/Vaults. Usability, **not** a vault-shape misrepresentation (A3 stays clean).

**A-09 · Best-Practices 92 on live routes** — `Low · fid:Low · effort:S · deploy-owner · P3`
BP capped 92 live (100 local) — deploy-layer (headers/source-maps), not a source regression. Route to the deploy owner.

**A-10 · Minor design tells** — `Low · fid:Low · effort:S · website-owned · P3`
Callout icons use emoji (ℹ 💡; correctly `aria-hidden`, so a polish nit not an a11y issue); accent amber `--brand-accent` barely earns a moment above the fold (reads two-color); confirm diagram JS is route-split so non-diagram pages never request mermaid/cytoscape.

### Content / newcomer

**A-11 · Home hero defers the functional definition** — `Med · fid:Med · effort:S · website-owned · cross-lens(UX/Newcomer/Anti-Bloat) · P2 (calibration-gated)`
The hero opens on values ("Language and DNA were co-created…") before saying what aDNA _is_; the functional definition arrives ~3rd sentence; first H2 is the coined term "What a context democracy is." What/why/how is not answerable from the hero in 60s. **Partly by-design** (the ratified ~55/45 ethos dial) — so this is a calibration call for M3, not a pure defect. Non-destructive fix the personas converge on: lift the `what-is-adna` opener ("aDNA is an open standard for organizing project knowledge so both humans and AI agents can navigate it") into/beside the hero.

**A-12 · "Lattice Protocol" undefined on first contact** — `Med · fid:Med · effort:S · website-owned · cross-lens(Brand/Newcomer/A11y) · P2`
Appears 7× on the homepage, asserted as foundational, never glossed; a first-timer meets ~4–5 undefined terms (Lattice Protocol, context democracy, federating, vault, persona) before the How-it-Works section. One-line gloss closes it.

**A-13 · Problem-statement redundancy** — `Low · fid:Low · effort:S · website-owned · anti-bloat · P3`
"agents waste tokens / re-explain every session / knowledge evaporates" appears near-verbatim in ~3 surfaces (home step cards + `what-is-adna` "The problem"). Candidate for one shared canonical phrasing. (Home registry's 8 identical "Open vault →" repeats are a minor scan-noise sibling.)

**A-14 · Glossary preview mid-word truncation** — `Low · fid:Low · effort:S · website-owned · P3`
Inline accordion previews cut on a hard char-cap ("…hand off to eac…") rather than a word boundary; recoverable via "Full definition →" but reads as a bug.

### Adopter trust

**A-15 · No security-disclosure contact anywhere** — `High · fid:Med · effort:S–M · website-owned · P1`
No `SECURITY.md`, security contact, or disclosure timeline on any surface (governance-model / community / enterprise / compliance) — the OSS-maintainer persona's **#1 red flag** ("am I emailing security@ into a void?"). The governance model is otherwise sustainability-credible; this is a quick, high-trust win.

**A-16 · Federation pitched on audience pages, horizon-disclosed only on network/community** — `Med · fid:High · effort:S · website-owned · RC-JUST-02 · P2`
`/researchers` (and other audience landings) pitch cross-lab federation as live, while `/network` + `/community` honestly disclose the federated-membership substrate is "not built yet." The per-audience pages don't carry the same caveat — a mild over-promise relative to the build's honest baseline. A justice/honesty finding (one-sided by omission). **Add the horizon caveat to the audience pages.**

**A-17 · Educator page promises assessment, surfaces no rubric** — `Med · fid:Med · effort:M · website-owned · P3`
`/educators` promises assessment-by-dual-audience but links no grading rubric/assignment artifact; an instructor bounces at "how do I actually grade this?"

**A-18 · Node-operator `Home.aDNA` bootstrap path is soft** — `Med · fid:Med · effort:M · website-owned · P3`
`/network` describes the node-vault bootstrap as something the agent "can" do rather than a shown deterministic step; get-started is project-centric, so a would-be node operator must infer the `Home.aDNA` path.

**A-19 · OSS license SPDX-consistency signal absent** — `Med · fid:Low · effort:S · website-owned · P3`
"MIT" is stated consistently in chrome/footers, but there is no per-repo SPDX-consistency evidence the OSS persona checks for. Partially mitigated by spec §-sourcing on comparison pages.

---

## Subject B — Context-slice findings (the staleness cluster)

> **Root cause (one cluster).** The vault's `what/`/`who/` extension prose was **not swept** to v2.3 / `aDNA-Network/aDNA` when the site MDX + `standard.ts` were updated at the 2026-06-22 keystone C-1 + the public-face repo move. The site mirrors the _correct_ values; the source lags. **One coordinated vault-source sweep clears B-01…B-05** — in-campaign fixable (vault-source, not pt19/Ring-A).

**B-01 · Vault prose cites spec v2.1/v2.2 vs actual v2.3** — `High · fid:High · effort:M · vault-source · B2/SO9 · P1`
~8 files: `what/comparisons/comparison_adna_vs_{zettelkasten,para,notion,plain_markdown,johnny_decimal}.md` (Sources), `concept_open_standard.md:19,37`, `who/governance/governance_agent_protocol.md:227`. Direct spec contradiction (SO9). Site MDX already at v2.3 — only the source lags.

**B-02 · Vault source repo `LatticeProtocol/Agentic-DNA` vs canonical `aDNA-Network/aDNA`** — `High · fid:High · effort:M · vault-source · B1 · P1`
`concept_open_standard.md`, `concept_context_commons.md:102`, `community_roles.md:45`, `community_processes.md:30`, `governance_contribution_standards.md:64`, 5 comparison Sources. Subject A and Subject B disagree on the canonical repo. Same org-drift class the Standard Archivist flagged for JSON-LD — now confirmed in prose. (Same sweep as B-01.)

**B-03 · `concept_open_standard.md` intra-file inconsistency** — `High · fid:High · effort:S · vault-source · B1 · P1`
Cites spec "v2.1" (:19) yet enumerates "16 base entity types" including identity + inventory (:45–51) — those were promoted to base only at v2.3 (ADR-035). The version label and the type table contradict each other. Resolved automatically by the B-01 version sweep.

**B-04 · `concept_open_standard.md` stale self-reference** — `Med · fid:Med · effort:S · vault-source · B3 · P2`
Cites the `adna/` outer wrapper ("symlinked as `.adna/`", "Never modify `adna/`") removed at the M03 flatten — only `.adna/` exists now. Passes the binary self-reference check but a reader navigating to verify it fails. Update to the flat `.adna/` model. (Also `concept_context_commons.md:102` "upstream `adna/` repository".)

**B-05 · Comparison sources intra-file "14+" vs "16 base"** — `Med · fid:Med · effort:S · vault-source · B1 · P2`
`comparison_adna_vs_para.md` line 33 "14+ entity types" vs line 44 "16 base" (corroborated by the Content Strategist). Same staleness class; the other 4 comparison sources likely carry it. Folds into the B-01 sweep.

**B-06 · MDX `VISION.md` wikilink flattened to bare text** — `Low · fid:Low · effort:S · site-mdx · B3 · P3`
`community-roles.mdx:13` renders VISION.md as bare text (vault source has a wikilink). Acceptable as-is — governance docs aren't published as routes, so a dead link was correctly avoided. Noted for completeness.

---

## Scoring legend & priority ranking

**Axes:** `severity` (Critical/High/Med/Low — the audit class) · `fidelity-impact` (High/Med/Low — does it affect whether the site tells the truth about the vault) · `effort` (S ≤1 file/edit · M a few files/a component · L new artifact/SSR rework/cross-vault). **Priority** = high severity + high fidelity-impact + tractable effort.

### P1 — high-value, ranked for M3 (the candidate bounded improvement set)

| ID | Finding | Sev | Fid | Effort | Owner |
|----|---------|:--:|:--:|:--:|-------|
| **B-01/02/03/05** | Subject-B v2.3 / `aDNA-Network` sweep (clears 4–5 findings; resolves the A/B inversion) | High | High | M | vault-source |
| **A-15** | Add a security-disclosure contact / `SECURITY.md` | High | Med | S–M | website |
| **A-01** | Resolve + gate all 7 proof-links; extend G20 manifest | High | High | S–M | website |
| **A-06** | SSR-prerender `/vaults/graph` to static SVG (lifts Perf+A11y+Design) | High | Low–Med | L | website |

### P2 — worthwhile, lower urgency or calibration-gated

`A-03` knowledge-graph framing (fix vault+site, SO9) · `A-16` federation horizon caveat on audience pages · `A-11` hero functional-definition (ethos-dial calibration) · `A-12` "Lattice Protocol" gloss · `A-02` reading-guide line-refs · `A-07` concept CLS · `A-08` nav 8-item span · `B-04` open-standard self-reference.

### P3 — minor / polish / route-elsewhere

`A-04` install SHA (→ Hestia/pt19) · `A-05` "16+" · `A-09` BP-92 (→ deploy owner) · `A-10` design tells · `A-13` problem-statement redundancy · `A-14` glossary truncation · `A-17` educator rubric · `A-18` node-operator bootstrap · `A-19` SPDX signal · `B-06` VISION wikilink.

---

## Synthesis for M3 (Introspect + plan)

1. **The site is in good shape; the backing context is the real work.** Subject A passes A1–A4 (with two minor flags); the FAILs are B1/B2 — a single, bounded, in-campaign-fixable vault-source staleness cluster. The cleanest M4 improvement set is the **Subject-B v2.3 / `aDNA-Network` sweep** (B-01…B-05) — highest ROI, one coordinated pass, resolves the marquee A/B inversion.
2. **Three High Subject-A items** for M3 to weigh by effort: A-15 (security contact, S — quick credibility win), A-01 (proof-links, S–M — and it doubles as the instrumentation case for extending G20), A-06 (`/vaults/graph` SSR, L — highest craft leverage but biggest lift).
3. **Calibration question for M3:** the home-hero cluster (A-11/A-12) is partly the deliberate ethos dial. Decide whether a non-destructive functional-definition lift is in scope or an accepted trade-off — this is exactly the "introspect: did we measure the right thing / is this a finding or a choice" call.
4. **pt19-routed:** A-04 (install SHA) → a Hestia coord memo; never hand-fixed (Standing Order 2).
5. **Owner-class refinement:** a **third** class — `what-ground-truth` (fix the vault the site faithfully mirrors) — emerged beyond the binary website/pt19 split (A-03, B-01…B-05). The pack's "a drift is fixable on either side" rule covered it; recorded to the instrumentation ledger as a scaffolding refinement.

---
type: evidence
packet: scoring
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
reviewer: A
reviewer_model: "Claude (Fable 5) — agent-scored, disclosed"
reviewer_disclosure: "Read: the VITRUVIUS instrument v1.0 in full; selected evidence-pack files under evidence/ (hypotheses_resolved.md; inventory/inventory_summary.md + inventory_p2_2_postconsolidation.md; machine_eye/machine_eye.md + machine_eye_delta_p2_6.md; sweep/sweep_summary.md + lighthouse_summary.md; claims/claim_register.md incl. §6–§8 addenda; coldreads/coldread_synthesis_p2_6.md; captures_curated/visual_findings.md; captures_p2_6/visual_findings_p2_6.md + capture_report.json + 2 mobile PNGs [get-started, network]; cohort/scoresheet_A_mcp.md + scoresheet_A_mastra.md; flux/flux_assessment_draft.md head/structure); own live checks against https://adna.network, raw.githubusercontent.com, and api.github.com (2026-08-19, ~24 enumerated spot-checks below). Did NOT read: anything in evidence/scoring/ (ls only, to confirm this output path); the campaign charter campaign_haussmann.md; anything under missions/; artifacts/gate_b_dossier.md, instrument_ingestion.md, WEBFORGE_ORIENTATION.md, dependency_map.md, webforge_pattern_register.md, artifacts/p2_6/*; any git log or commit message. No prior score for this target was seen or sought. Incidental exposure disclosed: the campaign CLAUDE.md was auto-injected into the session context by the environment (not opened by me); it carries conventions and a do-not-regress list naming axe-0 and perf 97–100 but no scores — both facts exist independently in the allowed pack (sweep, visual findings) and were re-grounded there and live."
instrument: "directives/OPERATION_VITRUVIUS_review_instrument.md v1.0"
target: https://adna.network
evidence_pack_commit: c9e8300
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_reviewer_a
tags: [evidence, haussmann, p2_6, scoring]
---

# Scoresheet A — adna.network (P2.6 mid-campaign score)

**Method.** I read the instrument first and in full, then the evidence pack (excluding everything prohibited above), then ran my own live checks against production on 2026-08-19 and treated the live result as authoritative wherever it disagreed with the pack — the pack's genesis packets date to 2026-08-16 and five deploys have landed since. Scores are the anchor whose written sentence matches the record; each dimension block below quotes that sentence and states why the next rung up fails. Every finding carries a provenance tag (`[D]` directly observed by me live or in a named pack capture · `[I]` inferred · `[R]` third-party/peer record · `[A]` assumption · `[D-syn]` disclosed synthetic cold-reader output, pre-screen only). D3 is withheld by direction: no clean-machine TTFS run exists, so no number is awarded and the composite runs over 11 dimensions against a denominator of 88.

**Spot-check log (all run live 2026-08-19 unless noted):**

1. 28-path HTTP status sweep: all key pages 200; `/vaults.json`, `/api/vaults`, `/.well-known/mcp.json`, `.md` twins (`/get-started.md`, `/learn/what-is-adna.md`) all 404; `/nonexistent-page-xyz/` 404. `[D]`
2. Redirect traces: `/vaults/III.aDNA/` → 301 → `/vaults/iii/` (200); `/compliance/` → 301 → `/provenance-audit/` (200). **Pack said mixed-case vault URLs were hard-404 with no redirect — live wins: they now 301 to lowercase canonical slugs.** `[D]`
3. Security headers on `/` and `/get-started/`: CSP, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, HSTS all served. **Pack (sweep 8a/8b, N3) found 4/4 configured headers absent and Observatory C/50 — live wins: resolved.** `[D]`
4. Homepage probes: definition-first hero present; R-120's two clauses ("nothing leaves your machine" + "shared in the open") both present ×1; fold disclosure "74 vaults — every one of them on a single computer, ours" present; "the open coordination protocol" 0 (purged); "Production Tidy"/"Renamed from TaskForge" 0 (leak purged); single h1; `llms` 0 mentions. `[D]`
5. Homepage JSON-LD: `WebSite` → `publisher: Organization` with `sameAs` ×2 (community.adna.network, github.com/aDNA-Network). **Pack genesis said 0 Organization site-wide — live/delta wins: present (nested).** `[D]`
6. `/vaults`: tier-first copy ("74 context graphs — which is not 74 live projects"), self-declared caveat ("no build status, no commit feed, no external check"), tier words in use/chartered/planned; leak strings (tbd_at_p0, genesis_stub, org_vault, "Renamed from") all 0. `[D]`
7. `/vaults/graph`: "74 vaults, 14 relationships", "59 vaults carry no cited relationship" — internally consistent; the pack's 74-vs-68 / 59-vs-53 mismatch (F4) returns 0 hits. **Live wins: resolved.** `[D]`
8. `/changelog`: 16 h2 entries, dated, reverse-chron, entries through 2026-08-19 (incl. self-critical "A transcript we should not have written", "Claims revised down"). **Pack F5/N4 staleness resolved live.** `[D]`
9. `/rss.xml`: 4 items, newest 2026-08-19. `[D]`
10. `/state-of-the-network` + `/canonical-properties`: both live, per-entry "last opened from outside" dates, one-computer and not-a-second-operator disclosures on worldgeno.me. `[D]`
11. `/get-started`: Prerequisites section, "If something goes wrong" troubleshooting, uninstall documented ("Removing it", `rm -rf` ×2), "Copy install command" ×2, labelled gap "not yet recorded" where the cut transcript was, "about 5 minutes" present ×1 (unmeasured). `[D]`
12. `/community`: community.adna.network linked ×4 with "approval-gated" honesty; "Discussions" 0; "code of conduct" 0 on page; only GitHub href = `aDNA-Network/aDNA`. `[D]`
13. GitHub: `aDNA-Network/aDNA` — CONTRIBUTING.md **404**, CODE_OF_CONDUCT.md **404**, LICENSE 200 (MIT), SECURITY.md 200, `.github/ISSUE_TEMPLATE/config.yml` 200, has_discussions false, open issues 1, stars 2, forks 0; `aDNA-Network/aDNA.aDNA` — CONTRIBUTING.md 200, CODE_OF_CONDUCT.md 200, SECURITY.md 200, **LICENSE 404, API license: null**; `good first issue` open count **0**. `[D]`
14. `/llms.txt`: curated, current, now carries the one-computer disclosure and routes agents to canonical-properties; `/llms-full.txt`: still an index (routes + taxonomy + legend), not a full corpus. `[D]`
15. `robots.txt`: default-permissive, no deliberate AI-crawler posture. `[D]`
16. Content negotiation: `Accept: text/markdown` on `/about/` returns `text/html`. `[D]`
17. Stale-link re-check: `/reference/reading-guide/` + `/reference/migration-guide/` now link GitHub blob URLs (3/3 probe 200); old internal `.md` targets 404 but **de-linked** (`/glossary/glossary-content-as-code/` carries 0 refs to the dead pattern page); 133-href sample crawl across 6 pages → **0 broken internal links**. **Pack N2 (29 broken links) resolved live.** `[D]`
18. Audience IA: `/researchers/`, `/educators/`, `/enterprise/`, `/adopters/`, `/adopters/adopter-educator/`, `/startup-first-hour/` all 301 → `/use-cases/*`; sitemap now 220 URLs with **0 mixed-case vault locs**. **Pack H2/H7 three-branch IA consolidated live.** `[D]`
19. `/glossary/glossary-triad/`: "Last updated" + "Edit this page" → GitHub edit URL present; `/learn/what-is-adna/` (.astro page): neither present. `[D]`
20. `/about`: "Stanley Bishop", "Founding Architect", "Head of AI" (Wilhelm Foundation), UCLA, Cederroth ×3, "one person", "not a council" — all present. `[D]`
21. `/provenance-audit`: "attributed and dated" ×1, "every commit is signed" 0 (R-84 fix holds); "not a certified" disclaimer present; HIPAA 0. `[D]`
22. `/learn/what-is-adna`: R-121 anecdote still present ("Before and after", "200 files", "three days to orient"). `[D]`
23. `/privacy` (collects nothing, self-hosted fonts, no third-party requests), `/security` (private disclosure via GitHub Security Advisories); JSON-LD blocks on `/privacy`, `/security`, `/design-system` = 0 each. `[D]`
24. Search + nav: no site-wide/docs search, registry-scoped search only; no "More" overflow in the 7-item primary nav; 404 page branded with Go home / Browse docs. `[D]`
25. Pack-image checks (evidence, 2026-08-19 captures): `get-started__mobile-lg__dark.png` shows full-width content at 375px — **F1 (S1 mobile docs squeeze) fixed**; `network__mobile-lg__dark.png` shows contained run-a-node steps and a legible labeled hub diagram — **F2/F3 fixed at mobile-lg**. `[D]`

**Panel caveat — where evidence limits cap what I can award.** Four instruments this score would normally lean on have not run, and I have scored to the letter of what exists rather than to what a completed run might show. (a) No **human cold-reader panel** has run: every D1 comprehension result is `[D-syn]` — disclosed synthetic pre-screens, three readers, one model-family each — so D1's anchor-4 award rests on synthetic convergence plus viewport captures, and a human panel could move it either way. (b) No **clean-machine TTFS run** exists: D3 is withheld entirely, and the two on-page "about 5 minutes" claims (R-34/R-63) remain `[A]`. (c) No **screen-reader / assistive-tech pass** exists: D11 cannot exceed 3 regardless of the axe-0 record, because anchor 4's "screen-reader tested" is simply unmet. (d) No **field CWV instrument** exists (near-zero traffic; CrUX null per pack N12): D12's "green at p75" is satisfied only by 10 local lab runs, stated as such. Additionally, the html-validate census (964 errors) and the 58/74 registry-leak sweep are 2026-08-16 measurements of a site that has since had five deploys; I re-verified their headline items live (leaks purged on index + spot-checked detail page) but did not re-run either sweep in full.

---

## 1. Score table

| Dim | Name | Score /5 | Weight (B×E) | Weighted pts |
|---|---|---|---|---|
| D1 | Positioning & 30-second legibility | 4 | 12 | 9.6 |
| D2 | IA & navigation | 4 | 8 | 6.4 |
| D3 | Onboarding / TTFS | **not scored — pending clean-machine TTFS run** | 12 | — (excluded) |
| D4 | Documentation system | 3 | 12 | 7.2 |
| D5 | Visual design system & craft | 3 | 8 | 4.8 |
| D6 | Content & voice | 3 | 8 | 4.8 |
| D7 | Proof, credibility, trust surface | 3 | 14 | 8.4 |
| D8 | Community & governance legibility | 3 | 10 | 6.0 |
| D9 | Contribution funnel | 2 | 6 | 2.4 |
| D10 | Machine legibility & agent-readiness | 3 | 6 | 3.6 |
| D11 | Accessibility | 3 | 2 | 1.2 |
| D12 | Performance, resilience, ops | 3 | 2 | 1.2 |
| — | **Composite (11 scored dims)** | — | **88** | **55.6 / 88 = 63.2/100 normalized** |

---

## 2. Per-dimension evidence

### D1 · Positioning and thirty-second legibility — 4

- The hero is now definition-first with a known category noun and a concrete mechanism: "aDNA (agentic DNA) is an open standard for organizing a project's files so AI agents — and the people working with them — always know where things live: three folders, plain Markdown, versioned in git." `[D]` live.
- Audience is explicit in the hero zone: "For teams working with agentic coding tools on real projects." Negative space is explicit: "Not a product or service — no server, no signup." `[D]` live — both anchor-4/5 ingredients present on the page.
- The P2.6 synthetic cold-read re-test: all three readers converged unprompted on the same one-sentence answer ("three folders, plain Markdown, versioned in git"); engineer and contributor pass the 30-second test (confidence 7/10, 8/10); the clinician self-deselects in ~40s — a *correct* outcome given the audience line `[D-syn]` (pack coldread_synthesis_p2_6). At genesis the readers did not converge; the hero rewrite moved this dimension.
- Hero legibility holds across viewports: legible at 375 (p2_6 captures), 768 and 1440 (genesis per-surface notes: "Mobile hero stacks well") `[D]` pack captures.
- Residual defects in the 30-second zone: "built on the Lattice Protocol — the coordination layer, opening progressively" names a term defined nowhere on the site (glossary 0 hits, both glossary paths 404 — the counsel embargo forbids defining it) `[D]`; and R-120's self-contradiction sits inside the hero's trust paragraph (see D6) `[D]`.
- The "aDNA = ancient DNA" name collision remains live for life-science readers `[D-syn]`; the human-panel validation of the DP2 name ruling is still pending `[R]` pack.
- **Binding anchor: 4 — "Correct summary in ~30s at all three viewports; audience explicit."** The next rung (5: "the reader can state what it is *not* and correctly name a use case not shown on the page") fails: readers echoed the page's own not-lines, but no reader named an unshown use case, and the evidence is synthetic-only — plus an unexplained proper noun (Lattice Protocol) still rides the first screen.
- **Strength:** definition-as-hero with explicit audience and negative space — the strongest single improvement measured between genesis and P2.6. **Weakness:** one embargoed, undefined term and one self-contradicting sentence still inside the 30-second zone.

### D2 · Information architecture and navigation — 4

- High-value reachability: 10/10 key pages at depth 1 from home; zero orphans; max depth 3 (pack inventory `[D]`, corroborated live by nav/footer presence of all ten `[D]`).
- The three parallel audience-IA branches (H2/H7: `/researchers`-style + `/adopters/adopter-*` + `/use-cases/*`, ~14 pages) are consolidated to a single `/use-cases/*` branch with 301s from every legacy URL `[D]` live — anti-pattern 7.7 remediated structurally, not cosmetically; post-consolidation inventory shows 0 duplicate titles `[D]` pack.
- URL hygiene: sitemap now 220 URLs, all vault slugs lowercase; legacy mixed-case URLs 301 to canonical (`/vaults/III.aDNA/` → `/vaults/iii/`) `[D]` live — H6's "hard 404, no recovery" is resolved; wrong-case guesses of never-published forms still 404 (`/vaults/Terminal/`) `[D]`, which is ordinary case-sensitivity, not a scheme defect.
- Primary nav: 7 top-level items + a Get Started CTA, no "More" overflow `[D]` live — sits exactly at the instrument's "seven or more indicates unresolved IA" threshold, mitigated by the overflow being gone.
- Search is present and scoped on the registry only; there is no docs/site-wide search and no keyboard trigger `[D]` live — reference content is not indexed by any search.
- Registry scalability: tier-first grouping + search + class filters live `[D]`; but no sort or pagination, one 7,268px page at 74 items `[D]` pack p2_6 metrics — 10× survival unproven; the registry JSON absence (D10) also caps machine-side scalability.
- Thin hubs persist as an IA weight problem: 4 hubs under budget including the new spec hub with 0 h2 (F19) `[D]` pack + live (spec hub h2=0 confirmed).
- **Binding anchor: 4 — "≤2 clicks to all high-value pages; search present and scoped; no orphans."** The next rung (5: "catalogue surfaces are faceted and demonstrably scale; URL scheme is machine-predictable") fails: the registry has filters but no sort/pagination and no demonstrated 10× survival, and the slug scheme — though now uniformly lowercase — remains name-derived rather than documented/predictable, with no machine-readable index to enumerate it.
- **Strength:** the audience-IA collapse plus the lowercase-with-301s normalization — two structural fixes with a maintained redirect map. **Weakness:** no search over reference content; thin hubs dilute the taxonomy they anchor.

### D3 · Onboarding and time-to-first-success — not scored (withheld pending clean-machine TTFS run)

- What the record supports today: prerequisites are stated before the clone (a "Prerequisites" section covering git + Claude Code + `npm install -g`) `[D]` live; a troubleshooting section exists ("If something goes wrong") `[D]` live; uninstall/reversibility is documented ("Removing it", `rm -rf`) `[D]` live; every command block carries a copy control ("Copy install command" ×2) `[D]` live.
- The honesty posture reaches the funnel: the fabricated terminal transcript was cut and replaced by a labelled gap — "not yet recorded" — rather than refilled `[D]` live (R-118 fix holds); the corrected prose states the true mechanism order ("It then offers to run an onboarding interview") `[D]` live (R-119 fix holds).
- The first move remains high-commitment: `git clone … ~/aDNA && cd ~/aDNA && claude` — a workspace clone into a hardcoded home-directory path plus an agent launch inside a stranger's instruction files; the genesis synthetic senior engineer refused it and routed via GitHub raw `[D-syn]` pack. No zero-install path (playground, sandbox, read-only tour) exists anywhere `[D]` live + pack machine-eye items 11–12.
- Both on-page duration claims ("about 5 minutes" on /get-started, "About five minutes" on /network) are unmeasured — `[A]` by the pack's own register (R-34/R-63, open awaiting the run).
- What the anchors would turn on: anchor 3 vs 4 hinges on the stopwatch (10–30 min vs <10 min) — unmeasurable until the O0b clean-machine run; anchor 4's hygiene legs (prereqs up front, troubleshooting, escape hatches) are now substantially present `[D]`; anchor 5 would additionally demand a zero-install evaluation path (absent `[D]`) and an explicit published definition of first success (not found; the page implies "agent running in the workspace" but does not define success — `[D]` absence).
- Interaction note (D3×D7): the instrument warns a high-friction first move needs credibility to justify it; D7's honesty surfaces have improved exactly the account this friction draws on, but zero independent adoption means the clone still asks for trust the network cannot yet corroborate `[D]`+`[I]`.
- **Binding anchor: none awarded — "not scored — pending clean-machine TTFS run."** Any number here would be provisional while wearing the authority of a measurement.
- **Strength:** prerequisite/troubleshooting/reversibility hygiene now present, and a labelled gap where a fabrication used to be. **Weakness:** single-path onboarding with an uncosted-feeling first move and no zero-install alternative; the "5 minutes" claims remain unverified on the page.

### D4 · Documentation system — 3

- Types are separated in the IA: Learn (tutorials + concepts + comparisons), How (task guides), Reference (specification + rubrics), Patterns, Glossary (25 entries) — the genesis census classified all 202 pages with no fallthrough `[D]` pack inventory; live nav preserves the split `[D]`.
- Reference completeness: the full v2.5 specification is mirrored on-site, now paginated into a hub + 20 sections (the 74,067px single page is gone — hub fullH 2,104px) `[D]` pack p2_6 + live (21 section links); glossary is canonical and linked.
- Versioning is weak: a "v2.5 Stable" badge exists, but there are no versioned docs — a reader on v2.3 cannot reach v2.3 docs; no version selector; no per-version archive `[D]` live + pack. Migration guides cover adoption-migration (from other conventions), not version-boundary migration `[D]` live.
- Freshness and contribution path are split by template class: content-collection pages (113 per the changelog) carry "Last updated" + "Edit this page" → GitHub edit URL `[D]` live (glossary-triad verified); `.astro` pages — including `/`, `/get-started`, `/learn/what-is-adna` — carry neither `[D]` live.
- Examples are not evidenced as CI-tested; the 371-assertion gate suite tests claims and routes, not runnable doc examples `[D]` pack sweep.
- Structural gap new since genesis: the spec hub ships 0 h2 — no sub-structure for an outline extractor or a scanning reader (F19) `[D]` pack + live; glossary linkage from first use is inconsistent ("Lattice Protocol" defined nowhere — embargo-bound) `[D]`.
- **Binding anchor: 3 — "Clear types, complete reference, versioning weak."** The next rung (4: "Four types cleanly separated in the IA; versioned; migrations documented; examples tested") fails on three of four clauses: docs are unversioned, version-boundary migrations are undocumented on-site, and examples are not tested in CI.
- **Strength:** the spec split plus per-page dates and edit links on the content-collection class — real Diátaxis and freshness discipline where the pipeline supports it. **Weakness:** the highest-traffic pages (.astro class) are exactly the ones without dates or edit paths, and nothing is versioned.

### D5 · Visual design system and craft — 3

- A published design-system page exists and serves 200 `[D]` live; the visual voice is coherent across surfaces (one type/chip/card system + recurring pixel-art accents) with the genesis review finding the gap to be "content weight, not styling" `[D]` pack visual_findings.
- Dark/light parity is clean everywhere it has been checked — genesis: no parity breaks on any reviewed surface; P2.6: parity holds across the full 6-viewport ladder, axe-0 in both themes on all 13 surfaces `[D]` pack.
- The three responsive defects that anchored the genesis review are fixed on production: F1 (S1 mobile docs squeeze to ~185px) — full-width at 375 in the P2.6 capture; F2 (/network clipped git-clone) — contained; F3 (hub diagram collapse) — labeled nodes render at mobile-lg `[D]` pack p2_6 captures (2 verified by direct image inspection).
- Empty/error states are designed: branded 404 with exits, honest zero-states on registry detail pages ("No cross-vault edges declared yet") `[D]` live.
- Drift and craft debts remain: 4 thin hubs including the new spec hub (F19 — one created by this campaign's own Decade-1 work) `[D]` pack; a declared font face fails to load with a console error on every page (F20, `JetBrains Mono Variable: error`) and no gate watches the console `[D]` pack; the genesis copy-button-orphan and mid-word-wrap polish class (F10/F12) is not evidenced as fixed `[I]`.
- Design-system *enforcement* is unproven: the gate suite is claim/route-oriented; the instrument's own 20-component conformance sample has never been run, and F20 demonstrates a whole-site defect class shipping through 487 assertions `[D]` pack.
- **Binding anchor: 3 — "Tokenised system, mostly conformant, some drift."** The next rung (4: "Published system, enforced in build, responsive integrity verified, states designed") fails on the "enforced in build" clause — no design-token or console gate exists in the build, F20 shipped through every gate, and conformance sampling is unperformed; responsive integrity, though now verified and repaired, cannot carry that clause alone.
- **Strength:** genuine parity + axe-0 + a distinctive, consistently applied voice, with the S1/S2 responsive breaks actually fixed. **Weakness:** enforcement is aspirational — the system is published but nothing in the build makes conformance mandatory, and a sitewide console error proves it.

### D6 · Content and voice — 3

- The claim discipline is the best I have seen in this category: a living claim register with 124 unique adjudicated ids, FALSE count 0, all 8 genesis S1 falsehoods resolved by lowering claims to verifiability `[D]` pack §6–§8, spot-verified live (hero gloss purged; "attributed and dated" on /provenance-audit; "taking shape" ×5 on /commons with "already steward" 0).
- Tense discipline is now enforced where it failed at genesis: the aspirational present-tense family ("lives", "federating", "already steward", "tended by") was rewritten or cut (R-13/R-18/R-48/R-117), and the honest anti-claims the register credits are intact `[D]` pack + live.
- Two unsupported claims remain open on production, both live-verified: **R-120** — the hero paragraph's subject-referent contradiction ("nothing leaves your machine … Your context is … shared in the open"), S2, sitting inside the strongest trust paragraph `[D]`; **R-121** — an invented before/after anecdote with specific quantities ("a lab's 200 files… three days to orient") and no source, S3, one mission after the site publicly retracted a fabricated transcript `[D]`.
- Register oscillation persists as a standing S2: FKGL 12.05–17.91 on all six key pages (upper-bound caveat noted) and the lyric-vs-spec register break, now sequenced (the lyric demoted intact to the movement band) but not resolved `[D]` pack sweep/reading_level + H10.
- Agent-authorship is disclosed on the page and in convention ("built by humans and agents together"; `last_edited_by` frontmatter, spec §7.2) `[D]` pack R-39/R-44 — an anchor-5 ingredient present early.
- Microcopy and headings are strong (headings survive as a TOC on checked pages; branded 404; honest empty states) `[D]` live spot-checks.
- **Binding anchor: 3 — "Consistent voice, claims mostly supportable, some aspirational tense."** The next rung (4: "Single voice throughout; every claim verified or verifiable; tense discipline enforced") fails on its middle clause — R-120 and R-121 are open unsupported claims on production today — and "single voice throughout" is contradicted by the quantified register-oscillation finding.
- **Strength:** a maintained claim register that actually moved the site — the falsity count went 8 → 0 and stayed there under re-fetch. **Weakness:** the two sentences that remain are in the two worst possible places: the hero's trust paragraph and the flagship explainer's proof anecdote.

### D7 · Proof, credibility, and the trust surface — 3

- Named humans with verifiable identities: "Stanley Bishop — Founding Architect, aDNA · Head of AI, Wilhelm Foundation · AI-Scientist in Residence, UCLA Anderson" `[D]` live, cross-verified against stanley.science by the pack (R-108 discharged); the Cederroths named with a recorded consent basis `[D]`+`[R]` pack.
- The exists-vs-planned surface is exemplary and live: `/state-of-the-network` ("The honest answer to 'how big is aDNA?' is smaller than the registry looks… All of them run on one computer, operated by one person") with per-entry logged-out check dates; the same fact restated in the homepage fold ("every one of them on a single computer, ours") `[D]` live — anti-pattern 7.3 inverted on the page, in the reader's line of sight.
- Claims now sit at or below true strength: the register's FALSE set is 0, and the site volunteers its most damaging facts first (rare-archive's sole contributor is the operator; the one recorded repo URL doesn't resolve so it isn't linked) `[D]` pack R-103/R-104, live-corroborated.
- Independent adoption is zero: 2 stars, 0 forks, no external PR ever, no non-founder implementation, all 74 vaults operator-run `[D]` live GitHub API + pack — the archetype-B primary metric is empty, and the site now says so itself.
- Trust-surface debts, live-verified: **R-111** — `/canonical-properties` files the Wilhelm Foundation repo under "not ours" with no related-party note, while `/about` names the operator as that Foundation's Head of AI; neither page connects the two facts (S2, selective-disclosure optics on the pages built to be checked) `[D]` pack §8.1 + live (both pages read); **R-123** — the docs repo the site is built from is unlicensed while the footer says "Released under the MIT License" (true of the image repo only) `[D]` live.
- Activity signals are now alive and honest: dated 16-entry changelog through 2026-08-19, fresh RSS, registry sync dates shown with "registry sync, not vault activity" labels, SECURITY.md on both repos + a private-disclosure path on `/security` `[D]` live.
- Testimonial hygiene: none fabricated; personas explicitly labeled "not real named adopters" `[D]` pack R-76.
- **Binding anchor: 3 — "Named humans, some verifiable third-party use, activity visible."** Read strictly, the "third-party use" leg is carried only by the Wilhelm Foundation engagement (its GitHub org hosts rare-archive; consent recorded) — an anchor-partner relationship, not independent adoption. The next rung (4: "Multiple independent adopters with linked artifacts; live metrics; security path; claims at or below true strength") fails hard on its first clause: there are zero independent adopters, so no honesty discipline can reach 4. Anchor 2's sentence ("claims at strength ceiling") no longer describes this site — the claims are below ceiling.
- **Strength:** the state-of-the-network + canonical-properties pair — a dated, checkable disclosure surface most mature projects don't ship; the site's principal vulnerability converted into its differentiator, exactly as the instrument's §8.3 recommended. **Weakness:** the network is still one person and one computer, and two disclosure seams (R-111, R-123) remain on the exact pages a hostile reader will check.

### D8 · Community architecture and governance legibility — 3

- A four-level participation ladder is published with self-contained Level-0 value and honest occupancy (no invented members; "member counts… The record doesn't track them, so this page doesn't show them") `[D]` pack + live — the instrument's §8.1 called this framing structurally correct, and check 11 ("score the honesty, not the headcount") applies.
- Decision process artifacts exist and are public: ADRs with §7.7 ratification blocks in the public dev vault, "Operator-chartered — decisions are explicit and gated" verified at genesis `[D]` pack R-41; agent participation is explicitly documented (status, disclosure, ratification) — the check-12 differentiator handled well `[D]`.
- No numbered proposal process with states and a public archive exists for the standard (H15 confirmed; nothing found on site or in vault) `[D]` pack — the calibration reference (MCP's 8-state SEP process with conformance gates) scored 5 on exactly this; for a standard courting external implementers this is the largest governance gap.
- A synchronous venue is live and linked honestly: community.adna.network ×4 from `/community` with "registration is approval-gated, and its terms of service, privacy policy, and branding are still being stood up" `[D]` live (R-95/R-96) — but the venue is aliveness-unverifiable from outside, stock-branded, and human-only under aDNALabs ADR-025 `[D]` pack flux + `[R]`.
- CoC and contribution standards exist but are published in the docs repo (`CODE_OF_CONDUCT.md` 200, CONTRIBUTING.md 200) and are not linked from `/community` (0 mentions) nor present on the CTA-target repo `[D]` live.
- Succession posture: `/about` carries a staged decentralization roadmap and the one-person disclosure; the bus-factor answer ("bounded: MIT-licensed, public git, nothing on a server we control") shipped with P1.2 `[D]` pack + genesis captures. No external role-holders exist — stated honestly rather than implied.
- **Binding anchor: 3 — "Ladder + contribution standards + CoC published; venue exists; process informal."** The next rung (4: "Numbered proposal process with public archive; chartered groups; named role-holders; live venue") fails on three of four clauses: no numbered proposal process, no chartered groups, and the only named role-holder is the founder; the venue exists but its liveness is unverifiable from outside.
- **Strength:** honesty-about-emptiness done properly — dated structures with stated occupancy, plus a genuinely novel, well-documented agent-participation model. **Weakness:** governance is legible as *stewardship* but not yet as *process an outsider can enter* — no SEP-equivalent, no charter, CoC unlinked from the community page.

### D9 · The contribution funnel — 2

- The funnel's advertised mouth is mis-doored: the site's only GitHub link on `/` and `/community` targets `aDNA-Network/aDNA`, where **CONTRIBUTING.md and CODE_OF_CONDUCT.md both 404**; both files exist (200) in `aDNA-Network/aDNA.aDNA`, reachable only via per-page "Edit this page" footer links `[D]` live (R-122).
- Labelled entry points: **zero** `good first issue`, zero `help wanted`, 1 open issue org-wide; 0 forks, no external PR has ever exercised the path `[D]` live GitHub API — response time is unmeasurable for lack of volume.
- Issue templates now exist on the CTA repo (`.github/ISSUE_TEMPLATE/config.yml` 200) and the question path routes to the community venue instead of dead Discussions `[D]` live — the genesis two-404 mouth (R-46/R-47) is genuinely fixed.
- The legal edge: "Edit this page" invites a contributor's PR into a repo with `license: null` — contribution under no stated inbound terms `[D]` live (R-123).
- Non-code paths: docs contribution via 113 edit links is real `[D]`; no named translation/design/triage/testing entry points `[D]` absence; no stated AI-assisted-contribution policy — a conspicuous silence for a project whose own content is agent-authored and disclosed `[D]` absence.
- One-command dev setup, macOS/Linux/Windows testing, and recognition loops: none evidenced on site or repo `[A]`/`[D]` absence.
- **Binding anchor: 2 — "Repo accepts PRs; no guidance; no labelled entry points."** The record straddles 2 and 3: templates exist (better than 2's letter), but anchor 3's sentence ("CONTRIBUTING + templates + some labelled issues") fails two of three legs *at the advertised entry* — CONTRIBUTING is absent from the door the site points at, and labelled issues are a countable zero. Scoring the funnel a newcomer actually experiences, 2 is the sentence that matches; the next rung fails because a first-rung climber finds no CONTRIBUTING at the CTA target and no labelled issue anywhere.
- **Strength:** issue templates + a routed question path — the genesis dead-on-arrival mouth is repaired. **Weakness:** the good contributor documentation that exists is behind the wrong door, into an unlicensed repo, with nothing labelled to climb.

### D10 · Machine legibility and agent-readiness — 3

- Anchor-3 kit is complete and live: `llms.txt` (curated, current, now carrying the one-computer disclosure and routing agents to canonical-properties for authenticity checks), complete 220-URL sitemap, fresh RSS (4 items through 2026-08-19), and clean text extraction on sampled pages (genesis: 1,072/744 words extracted coherently; graph ships a real server-rendered SVG with title/desc and a keyboard twin) `[D]` live + pack.
- Anchor-4 legs still fail three of four, live-verified: `.md` twins 404 (`/get-started.md`, `/learn/what-is-adna.md`); no registry JSON (`/vaults.json`, `/api/vaults` 404) — the 74-vault catalogue is scrape-only; and `llms.txt` is referenced from **zero** HTML pages (0 mentions across `/`, `/get-started/`, `/community/`, `/about/`) — the documented agent entry point exists but is not documented *to* agents `[D]` live.
- JSON-LD deepened since genesis but remains partial: `WebSite` → `publisher: Organization` with `sameAs` ×2 now on-page (nested, not top-level); TechArticle/BreadcrumbList/HowTo across docs; no `Dataset` anywhere; `/privacy`, `/security`, `/design-system` ship zero blocks `[D]` live + pack delta.
- No MCP server (`/.well-known/mcp.json` 404, no endpoint anywhere), no content negotiation (`Accept: text/markdown` → `text/html`), no copy-as-context affordance (the copy controls copy install commands, not page content) `[D]` live + pack.
- `llms-full.txt` still overclaims by name: 2,476 bytes of route index + taxonomy, self-described "(full index)", not a full-corpus artifact `[D]` live.
- Self-conformance — the dimension's sharpest edge for this site — remains narrative, not structural: the publishing page states the site is built from a vault but also that vault frontmatter is stripped before pages ship; no machine-checkable field ties a rendered page to its source `[D]` pack machine-eye item 13. For a project whose thesis is agent-navigable context, the instrument reads these gaps as evidence against the product claim (anti-pattern 7.8, in partial form).
- `robots.txt` is the platform default — permissive by omission, not an authored AI-crawler stance `[D]` live.
- **Binding anchor: 3 — "llms.txt + sitemap + RSS + clean extraction."** The next rung (4: "As 3, plus markdown twins, JSON-LD, machine-readable registry, documented agent entry point") fails: twins absent, registry JSON absent, the agent entry point undiscoverable from the site's own HTML; only the JSON-LD leg is (partially) met.
- **Strength:** the llms.txt itself — genuinely curated, current, and now honest about network composition, which is exactly what an agent needs first. **Weakness:** an agent must already know the llms.txt convention to find it, and there is no machine-readable path to the site's central artifact, the registry.

### D11 · Accessibility — 3

- Automated record is clean at two dates and in both themes: axe 0 violations across 32 route-theme runs (genesis) and 13 surfaces × 2 themes (P2.6); Lighthouse a11y 100/100 on all 10 lab runs `[D]` pack.
- Fundamentals verified live: skip-to-content link present and first in DOM order, `lang="en"`, single h1 on sampled pages, meaningful alt text and long graph descriptions `[D]` live + pack.
- The complex-graphics pattern is the correct one and live: the network graph is a server-rendered SVG with `role="img"`, title/desc, and an explicit keyboard-navigable twin — but the twin carries the roster and legend, not the per-edge topology (no per-edge accessible names), so equivalence is partial `[D]` pack machine-eye item 14.
- The genesis S1 reflow defect (F1: ~185px content channel at 375px across the whole docs class) is fixed on production per the P2.6 mobile captures I inspected directly `[D]` — the WCAG 1.4.10-adjacent risk class is closed at the checked viewports.
- Unrun instruments cap this dimension: no screen-reader pass (VoiceOver/NVDA) has ever been performed; no assistive-tech-user testing; no published accessibility statement (0 sitemap hits) `[D]` absence.
- Markup-level ARIA debt is in tension with the axe-clean record: the 2026-08-16 html-validate census found 964 errors including aria-label-misuse (245) and unique-landmark (238) on every built page — axe and html-validate measure different things, and only one of them is clean; current count unknown post-deploys `[D]` pack, dated.
- **Binding anchor: 3 — "AA on primary templates; complex graphics partially covered."** The next rung (4: "Verified AA across all templates including graphics and registry; screen-reader tested") fails on its final clause — screen-reader testing simply has not happened — and the graph twin's partial equivalence keeps "including graphics" unproven.
- **Strength:** a sustained, twice-measured axe-0 record in both themes plus the keyboard-twin pattern most of the cohort lacks. **Weakness:** everything automation cannot see is unverified — no AT pass, no statement, and a large unretired ARIA-correctness backlog.

### D12 · Performance, resilience, and operations — 3

- Lab CWV is green everywhere measured: perf 97–100 across 5 routes × 2 form factors, LCP 0.4–0.5s desktop / 2.0–2.3s mobile, CLS ≤0.001, TBT 0ms `[D]` pack Lighthouse (local preview, 2026-08-16); field p75 has no instrument — near-zero traffic, CrUX null (N12) `[D]` pack — so "green at p75" is satisfied by lab proxy only, stated as such.
- Security headers are now served on production: CSP, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy, HSTS — verified live on two routes; the pack's N3 (4/4 headers absent, Observatory C/50) is resolved `[D]` live wins. (CSP allows 'unsafe-inline' script/style — present but permissive `[D]`.)
- Link integrity is repaired: my 133-href sample crawl found 0 broken internal links; the genesis 29 broken `.md` references now point at GitHub blob URLs (3/3 probed 200); the two orphaned 404 targets are de-linked `[D]` live wins over pack N2.
- A redirect map is real and maintained: mixed-case vault URLs → lowercase 301s; audience pages → `/use-cases/*` 301s; `/compliance` → `/provenance-audit` 301 `[D]` live — every URL class retired by the campaign redirects rather than 404s.
- Third-party surface is zero by design: self-hosted fonts, no analytics, no external requests (`/privacy` states it; CSP `connect-src 'self'` enforces it) `[D]` live — the cleanest third-party inventory possible.
- Ops gaps: no public status page, no uptime monitoring evidenced, no CI-enforced performance budgets evidenced, per-PR previews not evidenced from the allowed record; a console error (F20 font face) ships on every page and no gate watches the console `[D]` pack + absence.
- 404 handling is branded and navigable (Go home / Browse docs) though not search-enabled — the site has no search to offer it `[D]` live.
- **Binding anchor: 3 — "CWV green at p75; no internal 404s."** Both clauses hold on the best available evidence (lab-green ×10 with the p75 caveat stated; zero internal 404s in live sampling). The next rung (4: "As 3, plus budgets enforced in CI, redirect map maintained, security headers set") fails on one clause — headers ✓ and redirect map ✓ are now live, but performance budgets enforced in CI are not evidenced — and 5's status page/per-PR previews are absent.
- **Strength:** a static, zero-third-party, sub-second-desktop site with headers and a real redirect map — two of anchor-4's three additions landed since genesis. **Weakness:** no field instrument, no status/uptime surface, and a sitewide console error demonstrating the monitoring gap.

---

## 3. Composite

Weighted points = score ÷ 5 × weight, per dimension:

| Dim | Arithmetic | Points |
|---|---|---|
| D1 | 4/5 × 12 | 9.6 |
| D2 | 4/5 × 8 | 6.4 |
| D3 | withheld | — (weight 12 excluded from denominator) |
| D4 | 3/5 × 12 | 7.2 |
| D5 | 3/5 × 8 | 4.8 |
| D6 | 3/5 × 8 | 4.8 |
| D7 | 3/5 × 14 | 8.4 |
| D8 | 3/5 × 10 | 6.0 |
| D9 | 2/5 × 6 | 2.4 |
| D10 | 3/5 × 6 | 3.6 |
| D11 | 3/5 × 2 | 1.2 |
| D12 | 3/5 × 2 | 1.2 |

**Σ = 9.6 + 6.4 + 7.2 + 4.8 + 4.8 + 8.4 + 6.0 + 2.4 + 3.6 + 1.2 + 1.2 = 55.6 points.**

**Denominator = 88** (100 − D3's weight of 12; 11 scored dimensions). **Composite = 55.6 / 88.** Normalized: **55.6 ÷ 88 × 100 = 63.2 / 100.**

**Band reading.** On the same 11-dimension basis (removing each cohort sheet's D3 points and re-normalizing to 88): MCP = (83.6 − 9.6) = 74.0/88 = **84.1**; Mastra (B×E column) = (66.4 − 7.2) = 59.2/88 = **67.3**; **aDNA = 55.6/88 = 63.2**. The target sits ~4 points under the adjacent-archetype exemplar and ~21 under the same-archetype reference — a coherent, unusually honest, pre-adoption site whose credibility engineering (D6/D7 claim discipline, disclosure surfaces) now outruns its community reality (D8/D9) and its machine layer (D10). The profile is bottom-heavy exactly where the archetype's primary metrics live: independent adoption (D7's 4-gate), a proposal process (D8's 4-gate), and a climbable first rung (D9). Positioning and IA — the cross-cutting precondition and its dependent — are the two 4s, which is the right shape for a campaign mid-flight: the sentence was fixed before the structure, per the instrument's own §9 note.

---

## 4. Binary-gate verdicts (D11 / D12)

| Gate | Verdict | Basis |
|---|---|---|
| D11 — WCAG AA critical | **PASS (automated evidence; manual coverage incomplete)** | axe: 0 violations across 32 route-theme runs (2026-08-16) and 13 surfaces × 2 themes (2026-08-19) `[D]` pack; Lighthouse a11y 100/100 ×10 `[D]` pack; skip link, lang, single-h1, alt text verified live `[D]`. No critical observed anywhere. Caveat: automation catches ~⅓ of real issues per the instrument; no screen-reader or AT-user pass exists, so this gate is passed on the strongest available evidence, not on full verification. |
| D12 — CWV red at p75 | **PASS (lab evidence; field p75 unmeasurable)** | No red metric in any of 10 lab runs: LCP ≤2.3s mobile / ≤0.5s desktop, CLS ≤0.001, TBT 0ms `[D]` pack. Field p75 has no instrument at current traffic (CrUX null — N12 `[D]` pack); no contrary field signal exists. Gate passed on lab proxy, stated as such — not silently upgraded to a field claim. |

---

## 5. Top-8 findings to fix first

| # | Finding | Dim | Sev | Effort / Provenance | Why first |
|---|---|---|---|---|---|
| 1 | **R-120 — hero self-contradiction**: "nothing leaves your machine … Your context is … shared in the open" — the grammatical subject of "shared in the open" is the reader's context; consecutive sentences promise privacy and publication | D6 (×D1) | S2 | S / `[D]` live-verified 2026-08-19 | Sits inside the 30-second zone, in the paragraph carrying the site's strongest trust claim; a clinician-class reader called the pair disqualifying alone `[D-syn]`. One-sentence fix with hero-scale payoff. |
| 2 | **R-122 — contribution funnel mis-doored**: the site's only GitHub CTA targets `aDNA-Network/aDNA`, where CONTRIBUTING.md and CODE_OF_CONDUCT.md 404; both exist (200) in the docs repo, unlinked from `/community` | D9 | S2 | S / `[D]` live GitHub probes | D9 is the dimension scored lowest (2); the fix is linking documents that already exist. The first rung becomes climbable for the price of two hrefs (or two files copied to the CTA repo). |
| 3 | **R-123 — docs repo unlicensed**: `aDNA-Network/aDNA.aDNA` has `license: null` while the site footer says "Released under the MIT License"; "Edit this page" PRs land under no stated inbound terms | D9 / D7 | S2 | S / `[D]` live GitHub API + raw | The one open finding with a legal edge; one LICENSE file closes it and removes a footer-claim inconsistency a checking reader will find. |
| 4 | **R-111 — related-party disclosure gap**: `/canonical-properties` files the Wilhelm Foundation repo under "not ours" with no note that `/about` names the operator as that Foundation's Head of AI; neither page connects the facts | D7 | S2 | S / `[D]` live (both pages) + pack §8.1 | Selective-disclosure optics on the two pages whose whole thesis is "check everything we say" — the highest-weight dimension's remaining seam, and a sentence-sized fix. |
| 5 | **H15 — no numbered proposal process**: no SEP-equivalent with states, numbers, and a public archive exists anywhere for the standard | D8 | S2 | M / `[D]` pack (site + vault searched); consistent with everything I saw live | The largest governance gap for an Archetype-B standard courting external implementers; the calibration reference (MCP) scores 5 on exactly this artifact. Its absence caps D8 at 3 regardless of the honesty discipline. |
| 6 | **D10 self-exemption cluster**: llms.txt linked from zero HTML pages; no `.md` twins (live 404 ×2); no registry JSON (live 404 ×2); `llms-full.txt` name overclaims (an index, not a corpus) | D10 | S2 | M / `[D]` live | For a project whose thesis is agent-navigable context, the machine layer is the proof-of-thesis (instrument D10 intent: failure here refutes the product claim). Three of anchor-4's four legs fail; each is mechanical to ship. |
| 7 | **No zero-install evaluation path**: the only on-ramp is a workspace clone into `~/aDNA` plus an agent launch; no playground, sandbox, or read-only tour exists | D3 (withheld — finding registrable) ×D1/D7 | S2 | M / `[D]` live + pack machine-eye 11–12; refusal evidence `[D-syn]` | The genesis synthetic senior engineer refused the one-liner on trust grounds; with zero independent adoption (D7), the high-friction first move has no borrowed credibility to lean on — the D3×D7 interaction the instrument flags as fatal. |
| 8 | **R-121 — invented before/after anecdote**: "a lab's 200 files… three days to orient" under a "Before and after" heading, no lab, no source — one mission after the site publicly retracted a fabricated transcript | D6 | S3 | S / `[D]` live-verified | Inconsistency of standard: the site's differentiator is that it retracts fabrications, and a cold reader found the next one unaided, calling it "the only thing that damages the credibility the rest of the site genuinely earns." Label it as hypothetical or cut it. |

Not in the top 8 but registered for the re-plan: R-124 clinical/regulatory routing gap on a rare-disease-hooking front page (S3, `[D]`); F19 four thin hubs incl. the 0-h2 spec hub (S3, `[D]`); F20 sitewide font console error + the zero-console-error gate gap (S3, `[D]` pack); R-34/R-63 unmeasured "about 5 minutes" claims (`[A]`, awaiting the TTFS run); no accessibility statement (D11 anchor-5 item, `[D]` absence); the 2026-08-16 html-validate backlog (964 errors, current count unknown, `[D]` dated).

---

## 6. Reviewer notes

**What I did not consult.** Nothing in `evidence/scoring/` was opened (an `ls` confirmed the output path only; three pre-existing files were listed and left unread). The campaign charter, all mission files, the six named orientation artifacts, and all git logs/commit messages were not read. I saw no prior score for this target and did not seek one. One incidental exposure is on the record: the campaign's governance CLAUDE.md was injected automatically by the session environment — it contains conventions (provenance tags, path roots, a do-not-regress list naming the axe-0 and perf records) but no dimension scores; both named facts were independently present in the allowed pack and re-grounded there before use. The `dossier/` reference file and the P2.6 individual coldread transcripts were available to me but read only via their synthesis; the cohort B-sheets were available and unread (the A-sheets sufficed for calibration anchors).

**Pack-vs-live divergences (live wins, per protocol) — nine, all in the site's favor:** (1) security headers absent → all five served; (2) mixed-case vault URLs hard-404 → 301 to lowercase canonical; (3) 29 broken internal links → 0 in a 133-href sample, `.md` refs repointed to resolving GitHub blob URLs; (4) changelog/RSS stale since April → 16 dated entries / 4 items through 2026-08-19; (5) `/vaults/graph` 74-vs-68 count contradiction → internally consistent; (6) registry leak state (58/74 pages) → clean on the index and the spot-checked detail page, raw enums replaced by tier vocabulary with a self-declared caveat; (7) three audience-IA branches → one `/use-cases` branch with a full 301 map; (8) zero Organization JSON-LD → present with `sameAs` ×2 (nested as publisher); (9) `/compliance` (a mislabeled-audience page) → renamed `/provenance-audit` with a 301. Two pack findings I re-verified as **still standing**: R-120 and R-121 (both live). This divergence pattern is itself a finding: the pack ages fast because the site is being actively repaired against it — scores in this sheet describe production on 2026-08-19, not the genesis record.

**What evidence limits made unawardable.** D3 entirely (no clean-machine TTFS run — withheld by direction, and rightly: every hygiene precondition I could check now passes, so the stopwatch is genuinely the open variable). D1 above 4 and any human-grounded comprehension claim (all cold-reader evidence is `[D-syn]` synthetic pre-screen; the human panel is pending). D11 above 3 (no screen-reader or AT-user pass exists; no accessibility statement). D12's field half (no p75 instrument exists at this traffic level; lab-only). D5's "enforced in build" clause (the 20-component conformance sample has never been run, and F20 is standing counter-evidence). D8's venue-aliveness (community.adna.network is approval-gated and unverifiable from outside — I did not create an account, per both my constraints and the venue's human-only ruling). Where a limit existed, I scored the anchor whose sentence the verifiable record matches and named the missing instrument rather than extrapolating past it.

*Reviewer A — Claude (Fable 5), agent-scored and disclosed. Scored independently against instrument v1.0; no reconciliation input received or given before this sheet was written.*

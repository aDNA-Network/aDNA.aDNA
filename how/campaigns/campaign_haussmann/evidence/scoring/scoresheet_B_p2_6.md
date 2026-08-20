---
type: evidence
packet: scoring
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
reviewer: B
reviewer_model: "Claude (Fable 5) — agent-scored, disclosed"
reviewer_disclosure: "READ: the instrument (v1.0, in full); the evidence pack under evidence/ — hypotheses_resolved.md, inventory/ (both summaries), claims/claim_register.md (in full, through §8.6), machine_eye/ (baseline + p2_6 delta), sweep/ (summary, lighthouse, reading_level), captures_curated/visual_findings.md, captures_p2_6/ (findings + report), captures_p1_4/verification_note.md, captures_p2_3+p2_4 report JSONs (skim), coldreads/ (p2_6 synthesis + senior-engineer, partial), flux/flux_assessment_draft.md (partial), cohort/scoresheet_B_mcp.md + scoresheet_B_mastra.md (my own Phase 0 calibration; Step 9); ~40 live probes against production (logged below). DID NOT READ: anything in evidence/scoring/ (ls'd once to confirm this output path — filenames seen, no file opened: reconciliation.md, scoresheet_A_adna.md, scoresheet_B_adna.md), the campaign charter, missions/, the named orientation artifacts, artifacts/p2_6/, any git log. INCIDENTAL EXPOSURE (disclosed, not sought): the harness auto-injected the campaign CLAUDE.md (conventions, no scores), five recent commit-message one-liners, and an auto-memory index mentioning HAUSSMANN phase status and probe counts — none contained any prior dimension score; I encountered no prior score anywhere."
instrument: "directives/OPERATION_VITRUVIUS_review_instrument.md v1.0"
target: https://adna.network
evidence_pack_commit: c9e8300
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_reviewer_b
tags: [evidence, haussmann, p2_6, scoring]
---

# Scoresheet B — adna.network (P2.6 midscore)

**Method.** I read the instrument in full first, then the evidence pack (exclusions honored), then ran my own live probe battery against production — direct HTTP (curl), GitHub API/raw probes, and HTML parsing; no browser rendering. Where the pack and a live check disagreed, the live check won, and several did disagree in the site's favor (security headers, changelog aliveness, URL casing, registry leaks, link rot — all fixed live since the 2026-08-16 genesis packets). Visual/responsive/a11y judgments lean on the pack's rendered-capture evidence (freshest set 2026-08-19, same day as this sheet). Every finding carries a provenance tag: `[D]` directly observed by me or by a named pack instrument · `[I]` inferred · `[R]` third-party/peer-vault record · `[A]` assumption · `[D-syn]` the pack's disclosed synthetic cold-reader output (never treated as human evidence). Scores are matched to the anchor whose written sentence fits the record, quoted verbatim in every block.

**Spot-check log** (all run 2026-08-19/20 UTC against production unless noted):

1. `HEAD /` → 200 with **CSP, X-Frame-Options DENY, X-Content-Type-Options, Referrer-Policy, HSTS all served** `[D]` — the genesis sweep's 4-missing-headers drift (N3) is fixed live; CSP carries `unsafe-inline` for script/style.
2. `/llms.txt` → 200, 2,057 B, genuinely curated (per-link descriptions; now indexes state-of-the-network + canonical-properties + a "Full index" pointer) `[D]`.
3. `/llms-full.txt` → 200, 2,476 B — still an index wearing a full-corpus name `[D]`.
4. `.md` twins (`/get-started.md`, `/learn/what-is-adna.md`, `/about.md`) → 404 ×3 `[D]`.
5. Registry JSON (`/vaults.json`, `/api/vaults.json`, `/registry.json`) → 404 ×3 `[D]`.
6. `/.well-known/mcp.json` → 404 `[D]`.
7. `robots.txt` → default-permissive, no deliberate AI-crawler stance `[D]`.
8. `rss.xml` → **4 items, newest 2026-08-19** `[D]` — changelog is alive (genesis N4 stale-changelog finding fixed live).
9. `sitemap-0.xml` → 220 URLs; 74 vault pages; **0 mixed-case URLs sitewide** (genesis: 24) `[D]`.
10. Legacy URLs 301 to successors: `/vaults/aDNA.aDNA/`→`/vaults/adna/`, `/educators/`→`/use-cases/educator/`, `/adopters/`→`/use-cases/`, `/startup-first-hour/`→`/use-cases/startup/`, `/compliance/`→`/provenance-audit/` `[D]` — a real redirect map. Never-published guess `/vaults/iii.adna/` → 404 (acceptable).
11. Homepage: hero qualifier lines live ("For teams working with agentic coding tools…", "Not a product or service…"); **"74 vaults — every one of them on a single computer, ours"** in the fold; `state-of-the-network` linked ×3; registry leaks 0 ("Production Tidy"/"Renamed from"/pt08 all 0); skip link present; single h1; 7 header nav items, **no "More" overflow**; JSON-LD = WebSite with nested Organization + `sameAs` ×2; `llms` mentioned **0** times in HTML `[D]`.
12. Homepage R-120 pair live and verbatim: "nothing leaves your machine" + "Your context is just the notes… **and shared in the open**" `[D]`.
13. `/vaults` → tier-first vocabulary (in use / chartered / planned); hero "74 context graphs — which is not 74 live projects. 7 are being worked in today, 10 are chartered, and 57 are named places with a governance skeleton and little else"; "self-declared" caveat as body text; `<input type="search">` scoped over name/persona/class/stage/purpose + class filters; no sort/pagination `[D]`.
14. `/vaults/graph` → "15 of 74 vaults are joined by 14 cited relationships… Not yet linked — 59 vaults" — **internally consistent now** (genesis F4's 74-vs-68 clash not reproduced in visible copy) `[D]`.
15. Vault details: `/vaults/operations` lede is now "A coordination vault — in use." (TaskForge/pt08 leak gone); `/vaults/home` node-identity leak gone; `/vaults/worldgenome` renders no `tbd_at_p0` and no "— LIVE." lede `[D]`.
16. `/changelog` → 16 dated h2 entries, newest 2026-08-19 `[D]`.
17. `/community` → Discussions references 0; `community.adna.network` linked ×4 with "approval-gated… still being stood up" disclosure `[D]`.
18. `/get-started` → "about 5 minutes" ×1 (R-63 still `[A]`-class, unmeasured); the P2.5 labelled gap "not yet recorded" present (no fabricated transcript); prerequisites, troubleshooting, uninstall (`rm -rf`) documented; 12 copy affordances `[D]`.
19. `/get-started/what-your-agent-reads/` → vendors the agent-read files at pinned commit `0364d85` (×3) with a "refuses to publish" build-gate claim `[D]`.
20. `/state-of-the-network` → dated account; "one computer"/"one person"; "It is not evidence of adoption" `[D]`.
21. `/canonical-properties` → address-bar-first check present; **"Head of AI" 0, "related" 0** — the R-111 related-party disclosure is unshipped on the page that files a Wilhelm property as "not ours" `[D]`.
22. `/about` → "Stanley Bishop", "Founding Architect", "Head of AI" (Wilhelm), UCLA — R-108 holds; "related" 0 (R-111's other half) `[D]`.
23. `/privacy` + `/security` → 200; HIPAA/GDPR/PHI/clinical/patient all 0 on both (R-124 holds); security page carries disclosure content + SECURITY.md references `[D]`.
24. GitHub API: `aDNA-Network/aDNA` = MIT, `has_discussions: false`, 2 stars, 0 forks, 1 open issue, pushed 2026-08-18; contributors = ScienceStanley (15) + jakejjoyner (1) `[D]`.
25. GitHub raw: image repo has `.github/ISSUE_TEMPLATE/config.yml` **200** (R-47 fix shipped) but `CONTRIBUTING.md` **404** and `CODE_OF_CONDUCT.md` **404**; docs repo `aDNA-Network/aDNA.aDNA` has both **200** but `license: null` and `LICENSE` **404**; `SECURITY.md` **200 on both** repos `[D]`.
26. `good first issue` open, org-wide → **0** `[D]`.
27. `/nonexistent-page-xyz/` → HTTP 404 (branded page per pack) `[D]`.
28. `/design-system` → 200, real token page (Colour/Typography/Spacing/Radius & elevation/Components) `[D]`.
29. Content negotiation: `Accept: text/markdown` on `/about/` → `text/html` (absent) `[D]`.
30. `security.txt` → 404 at both locations on adna.network `[D]`.
31. Spec section page → "Last updated" + "Edit the standard" link; tutorial page → "Last updated" + "Edit this page" link; `/learn/what-is-adna` (.astro page) → **neither** `[D]`.
32. Footer census: 17 links incl. State of the network, Canonical properties, Security, Privacy, Design system, RSS, GitHub — no llms.txt, no accessibility statement `[D]`.
33. `/use-cases/educator/` → "Illustrative" ×3 + "composite" — the honesty label survived consolidation `[D]`.
34. R-121 live and verbatim on `/learn/what-is-adna`: "200 files", "three days", under "Before and after" `[D]`.
35. Genesis's 29 broken internal links: referrer pages re-checked — old relative `.md` hrefs now point at resolving GitHub blob URLs or new on-site routes (e.g. glossary → `/reference/specification/14-content-as-code-pipelines/`); no broken href found on sampled referrers `[D]`.
36. CI: docs repo `.github/workflows/` = `gates.yml` + `external-links.yml` — gate suite and external-link checking in CI `[D]` (contents inferred from names + pack gate counts `[I]`).
37. Timing: ttfb 114–146 ms, total 134–180 ms on `/`, `/get-started/`, `/vaults/` (CDN-cached static) `[D]`.
38. `/reference/specification/` hub → 21 section links, **h2 = 0** (F19 confirmed live) `[D]`.
39. `/provenance-audit/` (renamed from /compliance) → 200 `[D]`.
40. Old persona branches: `/researchers/` → 301 `/use-cases/research-lab/`; `/enterprise/` → 301 `/use-cases/enterprise-team/` — three persona IA branches consolidated to one `[D]`.

**Panel caveat — where evidence limits cap what I can award.** Four instruments this instrument calls for do not exist yet, and their absence caps specific rungs regardless of my impression: (1) **no human cold-reader panel** has run — all reader-effect evidence is `[D-syn]` disclosed synthetic pre-screens, so D1's anchor-5 condition is unawardable and D1-4 itself leans on synthetic evidence; (2) **no clean-machine TTFS run** exists — D3 is withheld entirely per tasking, and the "about 5 minutes" claims stay `[A]`; (3) **no screen-reader / assistive-tech pass** exists — D11 cannot go above 3 on automation plus geometry checks alone; (4) **no field CWV instrument** exists (CrUX null per pack N12) — D12's "p75" evidence is lab-only, and I say so at the gate. Additionally, D4's "examples tested in CI" and D9's response-time metrics are structurally unverifiable today (a 1-issue repo has no median), and the depth of the Wilhelm partnership beyond repo-hosting is `[I]`/`[R]`.

---

## 1. Score table

| Dim | Name | Score /5 | Weight (B×E) | Weighted pts |
|---|---|---|---|---|
| D1 | Positioning & 30-second legibility | 4 | 12 | 9.6 |
| D2 | IA & navigation | 4 | 8 | 6.4 |
| D3 | Onboarding / TTFS | **not scored — pending clean-machine TTFS run** | 12 | — (excluded) |
| D4 | Documentation system | 3 | 12 | 7.2 |
| D5 | Visual design system & craft | 4 | 8 | 6.4 |
| D6 | Content & voice | 3 | 8 | 4.8 |
| D7 | Proof, credibility, trust surface | 3 | 14 | 8.4 |
| D8 | Community & governance legibility | 3 | 10 | 6.0 |
| D9 | Contribution funnel | 2 | 6 | 2.4 |
| D10 | Machine legibility & agent-readiness | 3 | 6 | 3.6 |
| D11 | Accessibility | 3 | 2 | 1.2 |
| D12 | Performance, resilience, ops | 3 | 2 | 1.2 |
| **Composite (11 scored dims)** | | | **/88** | **57.2 of 88 = 65.0/100 normalized** |

---

## 2. Per-dimension evidence

### D1 · Positioning and thirty-second legibility — 4/5

- The hero now leads with a definition carrying a known category noun ("open standard for organizing project knowledge"), an explicit audience line ("For teams working with agentic coding tools on real projects"), an explicit negative space ("Not a product or service — no server, no signup"), and the operator-federation fact in the fold ("74 vaults — every one of them on a single computer, ours") `[D]` (spot-checks 11, 12).
- The P2.6 synthetic cold-read re-test: all three readers converged unprompted on the same one-sentence answer ("three folders, plain Markdown, versioned in git"); 2 of 3 pass the 30-second test; the third (clinician) self-deselected in ~40s — a *correct* outcome given the explicit audience line `[D-syn]`; at genesis the readers did not converge `[D-syn]`.
- Live defects in the 30-second zone: R-120's contradiction pair — "nothing leaves your machine" followed by "Your context is… shared in the open" (subject = "Your context") — verified verbatim `[D]`; the cold clinician called the pair disqualifying for anyone holding patient notes `[D-syn]`. And the hero names "Lattice Protocol… opening progressively," a proprietary term the site defines nowhere (glossary: 0 hits; the counsel embargo forbids defining it) `[D]`.
- The pitch-to-taxonomy cliff stands: "three folders" on the fold vs 16 entity types / 14 vault classes / 20 spec sections two clicks in, with no "day-one 20%" bridge `[D-syn]` (senior engineer), structure verified `[D]`; the aDNA-vs-ancient-DNA name collision is a second synthetic data point against the waived naming panel `[D-syn]`.
- Mobile legibility of the hero holds: P1.4 fixed the docs dead-column with geometry proofs and gate-29; P2.6 captures at 6 viewports × 2 themes show no regression `[D]` (pack).
- **Binding anchor: 4 — "Correct summary in ~30s at all three viewports; audience explicit."** The next rung (5 — "As 4, plus the reader can state what it is *not* and correctly name a use case not shown on the page") fails because the panel is synthetic — the human instrument anchor 5 presupposes has not run — and no reader named an unshown use case; the live R-120 contradiction inside the trust paragraph independently bars an upgrade.
- **Strength**: definition-as-hero with audience, negative space, and the single-computer disclosure all inside the fold — rare candor for the archetype. **Weakness**: one live self-contradiction (R-120) and one undefined embargo-bound term sit in the exact 30 seconds the dimension measures.

### D2 · Information architecture and navigation — 4/5

- 10/10 high-value pages reachable in ≤2 clicks and zero orphans, in both the genesis crawl (202 URLs) and the post-consolidation crawl (194 built pages) `[D]` (pack); live sitemap now 220 URLs `[D]` (spot-check 9).
- The genesis taxonomy faults are fixed live: header nav is 7 items with **no "More" overflow** `[D]`; the three parallel persona branches (top-level audience pages + `/adopters/adopter-*` + `/use-cases/*`) are consolidated into a single `/use-cases/` branch with 6 leaves, and every legacy URL 301s to its successor — including `/compliance/` → `/provenance-audit/` `[D]` (spot-checks 10, 40); duplicate `<title>` pairs are gone `[D]` (pack P2.2).
- URL hygiene: 0 mixed-case URLs sitewide (was 24/202 with hard-404 casing); vault slugs are uniformly lowercase and therefore machine-predictable; trailing-slash and bare forms both 200 without canonicalizing to one another (minor) `[D]`.
- Registry browse: a real scoped search input ("Search by name, persona, class, stage, or purpose…") plus class filters and tier-first grouping; no sort, no pagination, one ~92 KB page at 74 items — the 10× test is not demonstrably survivable `[D]` (spot-checks 13, and probe 37 for weight).
- Residual: the spec hub ships h2 = 0 (no sub-structure for outline extraction; F19), and the thin-hub class (F13) now has 4 instances `[D]` (pack p2_6); no global/docs search or `⌘K` affordance found `[D]`.
- **Binding anchor: 4 — "≤2 clicks to all high-value pages; search present and scoped; no orphans."** The next rung (5 — "As 4, plus catalogue surfaces are faceted and demonstrably scale; URL scheme is machine-predictable") fails because the catalogue, though newly tiered and searchable, has no sort or pagination and has not been demonstrated at scale — the URL-scheme half of 5 is now genuinely met, but the anchor is conjunctive.
- **Strength**: the redirect map is real and complete — every published URL I tried resolves or 301s, which is the discipline the category usually lacks. **Weakness**: the registry index is one long page whose browse model will not survive 10× without sort/pagination/facets beyond class.

### D3 · Onboarding and time-to-first-success — **not scored — pending clean-machine TTFS run**

- What the record shows without a stopwatch: prerequisites are stated before the clone (Git + Claude Code, with the install command); a troubleshooting section, escape hatches, and a documented uninstall ("delete the folder" / `rm -rf`) exist; 12 copy affordances on the page `[D]` (spot-check 18).
- The uncosted-first-move failure mode (H3) is now materially mitigated: `/get-started/what-your-agent-reads/` vendors every file the agent reads at a pinned commit (`0364d85`) with a build gate that "refuses to publish" on byte drift — the synthetic senior engineer called it "the single most credible thing on the site" and it converted his refusal into a sandboxed trial plan `[D]`/`[D-syn]`.
- The fabricated terminal transcript was cut at P2.5 and the page now carries a labelled gap ("not yet recorded") rather than a staged recording — verified live; the cold readers cited the labelled gap itself as trust-raising `[D]`/`[D-syn]`.
- What a score would turn on: the two "about 5 minutes" claims (R-34/R-63) are `[A]` — verifiable, never measured; anchor 3 vs 4 hinges entirely on the stopwatch (TTFS 10–30 min vs <10) and anchor 5 on a zero-install path, which still does not exist (the vendored-files page is a read-only evaluation surface, not a run path) `[D]`.
- Single-path onboarding remains: one workflow, requiring a Claude Code install and account — no accommodation for evaluators who will not clone, beyond the read-only audit page `[D]`.
- **Binding anchor: none awarded — withheld per tasking.** A clean-machine TTFS run has not happened; any number here would be provisional while wearing the authority of a measurement.
- **Strength / Weakness**: the trust scaffolding around the first move is now among the best in the cohort; the first success itself remains unmeasured and single-path.

### D4 · Documentation system — 3/5

- The four Diátaxis needs now have distinct IA homes: `/learn` (concepts + tutorials, 33 pages), `/how` (guides, 15), `/reference` (spec in 20 sections + `/full`, 32), `/patterns` (9), `/glossary` (26) — the classification is visible in the URL structure, not only in the author's head `[D]` (spot-check 9 census).
- Reference: the v2.5 spec is fully mirrored and paginated (P2.3 traded a 74,067 px single page for a hub + 20 sections + an intact `/full`) `[D]` (pack + spot-check 38); entity types, frontmatter profile, and conformance levels are documented on-site `[D]` (pack claim rows G-04/G-05/R-75).
- Versioning is weak: one current version; no per-version doc URLs; a reader on v2.3 cannot reach v2.3 docs `[D]` (structure); migration guidance exists as pages (`/reference/migration-guide`) but not per-boundary version docs `[D]` (pack inventory).
- Freshness/contribution affordances are real but partial: spec sections and tutorials carry "Last updated" + an edit link ("Edit the standard" → source md; "Edit this page" → the docs repo), while `.astro` pages like `/learn/what-is-adna` carry neither `[D]` (spot-check 31).
- Content defect inside a learn page: the unlabelled "Before and after" anecdote with invented specifics ("200 files", "three days") — R-121, live `[D]`; examples-tested-in-CI is unevidenced (the CI gates test claims and bytes, not doc code samples) `[D]`/`[I]`.
- **Binding anchor: 3 — "Clear types, complete reference, versioning weak."** The next rung (4 — "Four types cleanly separated in the IA; versioned; migrations documented; examples tested") fails on its second and fourth clauses: docs are not versioned alongside the spec, and no evidence exists that examples are tested in CI.
- **Strength**: the spec pagination plus edit-links-to-source make the reference genuinely navigable and correctable. **Weakness**: no version-pinned docs for a standard that has already shipped v2.3→v2.5 inside four months.

### D5 · Visual design system and craft — 4/5

- A published design-system page exists and is real (Colour / Typography / Spacing / Radius & elevation / Components), linked from the footer `[D]` (spot-checks 28, 32).
- Responsive integrity is verified, not asserted: P1.4 fixed the four genesis layout defects (F1 docs dead-column, F2 clipped steps, F3 diagram collapse, F12 orphaned copy button) with computed-geometry proofs and a red-proven regression gate (gate-29); the P2.6 refresh (13 surfaces × 6 viewports × 2 themes, 156 captures) shows no regression `[D]` (pack).
- Dark/light parity holds across the full ladder with zero parity breaks found in either sweep; axe = 0 in both themes on every surface `[D]` (pack).
- States are designed: branded, navigable 404; honest empty states (zero-count edge kinds; the "not yet recorded" labelled gap) `[D]` (pack + spot-checks 18, 27).
- Named drift, still live: one declared font face (`JetBrains Mono Variable`) fails to load with a **console error on every page** and no gate watches the console (F20); the thin-hub class grew to 4 instances including the new spec hub (F19/F13); a cosmetic doubled space in the home h1 `[D]` (pack p2_6 + spot-check 11).
- **Binding anchor: 4 — "Published system, enforced in build, responsive integrity verified, states designed."** The next rung (5 — "As 4, plus a distinctive and *consistently applied* visual voice, and diagram/illustration guidelines that any contributor can follow") fails because no contributor-facing diagram/illustration guidelines exist, and the voice, though distinctive (pixel-art accents + one system), is inconsistently *weighted* — one excellent hero and several strong pages against four thin hubs.
- **Strength**: the craft claims are backed by geometry and captures, not taste — the strongest evidentiary basis of any dimension here. **Weakness**: a console error ships on every page of a site whose audience reads consoles, and no gate can see it.

### D6 · Content and voice — 3/5

- The claim-discipline arc is real and live-verified: the 8 FALSE claims from genesis are resolved (I re-probed the load-bearing ones — single-computer disclosure in the fold, "attributed and dated" not "signed", no Discussions reference, tier vocabulary replacing raw enums) `[D]`; every load-bearing number I checked derives and agrees (74/7/10/57, 15-of-74, 14 edges) `[D]`.
- The H13 leak class is purged at the generator: registry ledes like "Renamed from TaskForge.aDNA (Production Tidy pt08." are gone from the homepage and the sampled vault pages ("A coordination vault — in use.") `[D]` (spot-check 15).
- Two register-classified **unsupported** claims are live in high-value positions: R-120 (the hero's "your context… shared in the open" referent contradiction, S2) and R-121 (the invented before/after anecdote, S3) — both verified verbatim by me `[D]`; the two "about 5 minutes" rows remain `[A]`.
- Register oscillation persists as a standing S2: FKGL 12.05–17.91 (upper-bound caveat) on all six key pages `[D]` (pack); the manifesto band ("context democracy") still triggers the register break for engineer readers `[D-syn]`; "opening progressively" is a euphemism in an otherwise plain-spoken corpus `[D-syn]`, live `[D]`.
- Agent-authorship is disclosed on-page (`/community`: built by humans and agents; `/about`: AI personas named as such; `last_edited_by` convention) `[D]` — an anchor-5 element present without the rest of 5 (no published voice guide) `[D]`.
- **Binding anchor: 3 — "Consistent voice, claims mostly supportable, some aspirational tense."** The next rung (4 — "Single voice throughout; every claim verified or verifiable; tense discipline enforced") fails on its second clause: R-120 and R-121 are live claims the register itself classes unsupported, and the documented register oscillation contradicts "single voice throughout."
- **Strength**: the claim register discipline has made the site's numbers trustworthy — everything I re-derived agreed. **Weakness**: the two surviving unsupported claims sit in the two highest-traffic content positions (hero paragraph; the flagship explainer's anecdote).

### D7 · Proof, credibility, and the trust surface — 3/5

- Named humans, at full strength: "Stanley Bishop — Founding Architect, aDNA · Head of AI, Wilhelm Foundation · AI-Scientist in Residence, UCLA Anderson", cross-verified against stanley.science by the pack's live probe (R-108 closed 2026-08-19) `[D]`/`[R]`; the Cederroths named with a recorded consent basis `[D]` (pack).
- Independent adoption: none survives a public check — 73/74 vaults expose no public repo; the flagship public artifact's sole contributor is the operator, **and the site now states this itself** ("every commit in it came from the same person who operates this network"; "It is not evidence of adoption") `[D]` (pack R-103 + spot-check 20). Third-party attachment exists but is thin: the Wilhelm Foundation hosts rare-archive on its GitHub org `[D]`, the anchor partnership is consent-recorded `[R]`, and a second founding contributor exists (1 commit) `[D]`.
- Claims sit at or below true strength: the exists-vs-planned surface (`/state-of-the-network`, dated) and the clone-defense surface (`/canonical-properties`) are live, footer-linked, and machine-checked (gate-pinned derived counts) `[D]` — anchor-5-grade artifacts.
- Trust plumbing: SECURITY.md in **both** repos + a `/security` page with a disclosure path `[D]` (spot-checks 23, 25); license stated on the homepage and true of the image repo `[D]`; activity visible (16-entry changelog current to 2026-08-19; repo pushed 2026-08-18/19) `[D]`. Live metrics are neither shown nor hardcoded — the site deliberately displays no vanity counts; its own registry counts are build-derived from source `[D]`.
- Open dents: R-111 — the related-party link between "Head of AI, Wilhelm Foundation" (`/about`) and the Wilhelm property filed under "not ours" (`/canonical-properties`) is unshipped on both pages, which reads as selective disclosure to a comparing reader `[D]` (spot-checks 21–22); the docs repo the "Edit this page" links target has no LICENSE (R-123) `[D]`.
- **Binding anchor: 3 — "Named humans, some verifiable third-party use, activity visible."** The next rung (4 — "Multiple independent adopters with linked artifacts; live metrics; security path; claims at or below true strength") fails on its first clause flatly: there are zero independent adopters, and no honesty surface can manufacture one. (Anchor 2 — "claims at strength ceiling" — no longer describes this site; the claims now sit below ceiling, which is what keeps this a 3 and not a 2.)
- **Strength**: the state-of-the-network + canonical-properties pair inverts anti-patterns 7.2/7.3 on the record — the strongest disclosure discipline I have seen in this cohort, including the calibration exemplars. **Weakness**: the archetype's primary metric (named, verifiable third-party adoption) is still zero, and D7 carries the heaviest weight in the B×E column.

### D8 · Community architecture and governance legibility — 3/5

- A four-level participation ladder is published with self-contained Level-0 value and honest occupancy (no observable non-founder instance of Levels 1–3, and the page does not pretend otherwise) `[D]` (pack R-40 + spot-check 17).
- Contribution standards and CoC exist and are public — CONTRIBUTING.md and CODE_OF_CONDUCT.md both 200 in the docs repo — though behind the wrong door relative to the advertised CTA (see D9) `[D]` (spot-check 25).
- A synchronous venue exists and is now linked with honest framing: community.adna.network referenced ×4 from `/community` with "registration is approval-gated, and its terms of service, privacy policy, and branding are still being stood up" — verified against the instance's own bootstrap config by the pack (`[D]` R-95/R-96); the venue itself is policy-naked, unbranded, and aliveness-unverifiable from outside `[D]` (pack flux), and human-only by ruling `[R]` (ADR-025).
- Decision process: operator-chartered with §7.7 ratification blocks and phase gates visible in the public dev-vault record `[D]` (pack R-41); succession posture exists as a 4-stage decentralization roadmap on `/about` plus a bounded bus-factor answer (MIT + public git + nothing server-side) `[D]` (pack); but there is **no numbered proposal process with states and an archive** (H15 — unchanged; my calibration reference MCP scored 5 here on its 8-state SEP machine) `[D]`.
- Agent participation is documented explicitly — status, disclosure, and human-ratification requirement (`/community`, `/about`) — the check-12 differentiator genuinely handled `[D]`; honesty-about-emptiness (check 11) is the page's house style ("score the honesty, not the headcount") `[D]`.
- **Binding anchor: 3 — "Ladder + contribution standards + CoC published; venue exists; process informal."** The next rung (4 — "Numbered proposal process with public archive; chartered groups; named role-holders; live venue") fails on three of four clauses: no numbered process, no chartered groups, and the venue's liveness cannot be verified from outside.
- **Strength**: the governance that exists is instantiated as artifacts (ratification blocks, ADRs, AAR discipline) rather than prose, and its emptiness is stated plainly. **Weakness**: a standard courting external implementers still has no proposal mechanism an outsider could file into — the largest single governance gap against the reference exemplar.

### D9 · The contribution funnel — 2/5

- The advertised mouth of the funnel fails at the door: the "Contribute on GitHub" CTA and clone target (`aDNA-Network/aDNA`) has **no CONTRIBUTING.md and no CODE_OF_CONDUCT.md** (404 ×2); both exist in the docs repo, reachable only via the small per-page "Edit this page" link — R-122, live `[D]` (spot-check 25).
- Labelled entry points: **zero** `good first issue` open org-wide; 1 open issue total; no populated on-ramp of any kind `[D]` (spot-check 26).
- What has genuinely shipped: issue templates on the image repo (`.github/ISSUE_TEMPLATE/config.yml` 200 — the genesis R-47 FALSE resolved by shipping, not by copy) `[D]`; a question path exists (issues + the disclosed community venue) `[D]`.
- The legal edge: a contributor invited into the docs repo via "Edit this page" contributes under **no stated license** (`license: null`, LICENSE 404) — R-123 `[D]`.
- Response-time metrics are structurally unmeasurable (1 issue, no PR corpus); non-code paths are named only abstractly (Level 2 "Quest Runner"); the humans+agents disclosure partially covers an AI-assisted-PR stance but no explicit policy is stated `[D]`/`[I]`.
- **Binding anchor: 2 — "Repo accepts PRs; no guidance; no labelled entry points."** This is the sentence that matches the funnel a contributor actually meets at the advertised entry: the CTA repo accepts PRs and offers no contributor guidance there, and no labelled entry points exist anywhere. The next rung (3 — "CONTRIBUTING + templates + some labelled issues; response time unmeasured") fails conjunctively: CONTRIBUTING ✓ (mis-doored), templates ✓, but "some labelled issues" is hard-absent (0) — and my Phase 0 calibration (Mastra D9 = 2 on a materially similar record) binds me to the conjunctive reading.
- **Strength**: the artifacts now exist — templates shipped, CONTRIBUTING and CoC written and public; this is one repointed CTA and a handful of labelled issues away from a 3. **Weakness**: per the instrument's D8×D9 interaction, a published ladder whose first rung 404s at the advertised door converts an honest early project into a broken promise.

### D10 · Machine legibility and agent-readiness — 3/5

- Anchor-3 basket, all present and live-verified by me: curated `/llms.txt` (2,057 B, per-link descriptions, current — now indexing the two new trust surfaces); complete and current sitemap (220 URLs, matches the registry); valid RSS that is no longer stale (4 items, newest 2026-08-19); clean text extraction on ordinary pages (pack machine-eye, corroborated by the synthetic reader deriving the correct first action from raw text) `[D]`.
- Anchor-4 items, mostly absent: `.md` twins 404 (and no `Accept: text/markdown` negotiation); registry JSON/API 404 ×3 — the site's central proof artifact is scrape-only; JSON-LD present but partial (WebSite/TechArticle/Breadcrumb; Organization only as nested `publisher` with `sameAs` ×2 — a P1.2 side effect; no `Dataset`, no per-vault typed entity; 3 pages ship zero JSON-LD) `[D]`.
- The documented-agent-entry-point clause fails in a specific, ironic way: `llms.txt` exists and is good, but the string "llms" appears **zero** times in the site's own HTML — an agent must already know the convention; nothing on the page or footer advertises it `[D]` (spot-checks 11, 32).
- No MCP server (`/.well-known/mcp.json` 404, no endpoint anywhere); no copy-page-as-context affordance (the 12 copy controls copy install commands) `[D]`.
- Movement since genesis, credited: stable URIs are now genuinely machine-predictable (all-lowercase + 301 map — the genesis casing hard-404s are gone), and self-conformance gained a structural artifact: `/get-started/what-your-agent-reads/` vendors the agent-read files at a pinned commit with a build gate — narrative self-conformance becoming checkable bytes `[D]`.
- **Binding anchor: 3 — "llms.txt + sitemap + RSS + clean extraction."** The next rung (4 — "As 3, plus markdown twins, JSON-LD, machine-readable registry, documented agent entry point") fails three of its four bullets outright (no twins, no registry endpoint, no advertised entry point) with the fourth (JSON-LD) only partial. For a project whose thesis is agent-navigable context, the instrument reads this dimension as proof-of-thesis: a 3 here is "functional, not yet self-conformant," and the self-exemption edge (H8) remains the sharpest criticism the site hands its opponents.
- **Strength**: what exists is genuinely curated, current, and now consistent (URIs, sitemap, feed). **Weakness**: the registry — the one dataset agents most want — is available to them only as HTML scraping, on a site about making context machine-navigable.

### D11 · Accessibility — 3/5

- Automated record is clean and current: axe = 0 violations in **both themes** across all 13 refreshed surfaces (2026-08-19) and across the 32 genesis route-theme runs; Lighthouse a11y 100/100 on all 10 lab runs `[D]` (pack).
- The genesis manual failures in key flows (F1 mobile dead-column on the entire docs class; F2 clipped, uncopyable command block — a WCAG 1.4.10 reflow failure) were fixed with computed-geometry proofs and are guarded by a red-proven gate (gate-29, citing 1.4.10) `[D]` (pack P1.4).
- Structural positives verified live: skip-to-content link on home; single h1; the network graph ships an aria-described SVG plus a keyboard-navigable twin list — though the twin carries roster and legend, not the per-edge topology, so equivalence is partial `[D]` (spot-check 11 + pack machine-eye item 14).
- Unresolved markup-level census: 964 html-validate errors including `aria-label-misuse` ×245 and `unique-landmark` ×238 — axe-clean but ARIA-dirty; these are potential real screen-reader defects automation does not adjudicate `[D]` (pack sweep #5/#6).
- Missing for the higher rungs: no screen-reader (VoiceOver/NVDA) pass anywhere in the record; no published accessibility statement (footer census negative); no explicit 200%/400% zoom test (gate-29's 320 px reflow assertions are adjacent, not identical) `[D]`.
- **Binding anchor: 3 — "AA on primary templates; complex graphics partially covered."** The next rung (4 — "Verified AA across all templates including graphics and registry; screen-reader tested") fails on its last clause absolutely — no assistive-technology testing exists — and "verified AA" beyond automation is not on the record. (Anchor 2 — "Automated clean; manual failures in key flows" — no longer matches: the known key-flow manual failures were fixed and gated.)
- **Strength**: both-theme axe-zero maintained across three evidence generations, with the two real manual defects fixed under regression guard. **Weakness**: 245 aria-label misuses and 238 unnamed landmarks await the screen-reader pass that would tell us whether they are noise or harm.

### D12 · Performance, resilience, and operations — 3/5

- Speed: lab Lighthouse across 5 templates × 2 form factors = perf 97–100, LCP 0.4–0.5 s desktop / 2.0–2.3 s mobile, CLS ≤0.001, TBT 0 ms `[D]` (pack); my live probes corroborate (ttfb 114–146 ms, CDN-cached static, 45–92 KB HTML) `[D]` (spot-check 37). **No field p75 instrument exists** (CrUX null-traffic; pack N12) — the green is lab-green `[D]`/`[I]`.
- Internal link health: the genesis 29-broken-links finding is fixed at the referrers — sampled referrer pages now emit resolving GitHub blob URLs or new on-site routes; the post-consolidation crawl found no orphans and no unbuilt targets beyond since-redirected casings `[D]` (spot-check 35 + pack P2.2).
- Ops hardening since genesis, live-verified: full security-header set now served (CSP + XFO + XCTO + Referrer-Policy + HSTS — the sweep's C/50 drift era is over, though CSP still allows `unsafe-inline`); a maintained 301 redirect map covers every published URL family I tried; branded, useful 404 `[D]` (spot-checks 1, 10, 27).
- CI: `gates.yml` (371-assertion suite incl. claim-trace and reflow gates) plus `external-links.yml` — link-checking in CI, an anchor-5 item, is present `[D]`/`[I]` (spot-check 36); per-PR previews are platform-probable but unevidenced `[I]`; no public status page `[D]`; no performance budgets enforced in CI (the Lighthouse fixtures are local-lab, hand-run) `[D]` (pack N12).
- Degraded behavior: fully static, core content works with JS disabled (the machine-eye pass is the proof) `[D]`; one console error ships on every page (F20 font face) — cosmetic operationally, but unwatched `[D]` (pack).
- **Binding anchor: 3 — "CWV green at p75; no internal 404s."** Both clauses hold on the best available evidence, with the p75 caveat stated: every measurement that exists is green, and no internal 404 was found live or in the post-consolidation crawl. The next rung (4 — "As 3, plus budgets enforced in CI, redirect map maintained, security headers set") fails conjunctively on its first clause — no perf budgets run in CI — even though the other two clauses (redirect map, headers) are now genuinely met.
- **Strength**: static-first delivery makes the perf story robust, and the header/redirect remediation shipped between evidence generations — the live check caught the pack aging in the site's favor twice. **Weakness**: nothing measures production field performance, and no budget will catch a regression before a human does.

---

## 3. Composite

Σ over the 11 scored dimensions (D3 withheld, its 12 weight points excluded from the denominator):

| Dim | score/5 × weight | pts |
|---|---|---|
| D1 | 4/5 × 12 | 9.6 |
| D2 | 4/5 × 8 | 6.4 |
| D4 | 3/5 × 12 | 7.2 |
| D5 | 4/5 × 8 | 6.4 |
| D6 | 3/5 × 8 | 4.8 |
| D7 | 3/5 × 14 | 8.4 |
| D8 | 3/5 × 10 | 6.0 |
| D9 | 2/5 × 6 | 2.4 |
| D10 | 3/5 × 6 | 3.6 |
| D11 | 3/5 × 2 | 1.2 |
| D12 | 3/5 × 2 | 1.2 |

**Σ = 9.6 + 6.4 + 7.2 + 6.4 + 4.8 + 8.4 + 6.0 + 2.4 + 3.6 + 1.2 + 1.2 = 57.2**

**Composite: 57.2 of 88** (denominator = 100 − 12 for withheld D3). **Normalized: 57.2 / 88 × 100 = 65.0 / 100.** Not comparable to any 12-dimension composite; do not read it against one.

**Band reading.** Against my own Phase 0 calibration on the same instrument (reviewer B sheets): MCP — the same-archetype reference — scored **82.4/100** (B×E) and Mastra cross-read at **66.4/100** (B×E). aDNA at **65.0 normalized** sits just under Mastra's cross-read and ~17 points under MCP. The shape is distinctive: the honesty/disclosure surfaces are the best in the cohort (anchor-5-grade artifacts inside a D7 that can only score 3), while the score is held down by exactly the things honesty cannot substitute for — zero independent adoption (D7, the heaviest weight), a funnel that 404s at its advertised door (D9), unversioned docs (D4), and a machine layer that has not yet caught up to the site's own thesis (D10). Every one of D9/D10/D4's gaps is mechanical and cheap relative to the D7 wall, which only time and outsiders can move.

---

## 4. Binary-gate verdicts (D11 / D12)

| Gate | Verdict | Basis |
|---|---|---|
| **D11 — any WCAG AA critical blocks sign-off** | **PASS** | axe = 0 criticals in both themes across all 13 refreshed surfaces (2026-08-19) and 32 genesis route-theme runs; Lighthouse a11y 100 ×10; known key-flow manual failures (F1/F2) fixed and regression-gated `[D]` (pack, freshest same-day). Caveat stated: automation covers roughly a third of real issues; no assistive-tech pass exists, and the 245 aria-label-misuse census is unadjudicated — this PASS is automation-scope only. |
| **D12 — any CWV red at p75 blocks sign-off** | **PASS (lab evidence; field unmeasured)** | All lab runs green: worst LCP 2.3 s mobile (≤2.5), CLS ≤0.001, TBT 0 ms across 5 templates × 2 form factors `[D]` (pack); live delivery corroborates (static, CDN, ttfb ≤146 ms) `[D]`. No field p75 instrument exists (CrUX null) `[D]` — nothing known is red, and nothing field-grade can currently turn red visibly. The gate passes on available evidence with that gap named. |

---

## 5. Top-8 findings to fix first

| # | Finding | Dim | Sev | Effort / Provenance | Why first |
|---|---|---|---|---|---|
| 1 | Hero contradiction pair: "nothing leaves your machine" two sentences before "Your context is… **shared in the open**" (R-120) | D1/D6 | S2 | S / `[D]` live-verified verbatim | Sits in the 30-second zone inside the site's strongest trust paragraph; a cold reader called it disqualifying alone for anyone holding sensitive notes. One sentence to fix. |
| 2 | "Contribute on GitHub" CTA targets the repo with CONTRIBUTING.md and CODE_OF_CONDUCT.md both 404; the real docs sit behind the small "Edit this page" footer link (R-122) | D9 | S2 | S / `[D]` GitHub raw 404/200 | The advertised first rung of the ladder fails at the door — the D8×D9 interaction the instrument names as worse than no ladder. Add the files to the image repo or repoint the CTA. |
| 3 | The docs repo (`aDNA-Network/aDNA.aDNA`) has **no license** while "Edit this page" invites PRs into it and the homepage badge says MIT (R-123) | D7/D9 | S2 | S / `[D]` GitHub API `license: null`, LICENSE 404 | The one finding with a legal edge: contributions are being solicited under no stated inbound terms. One file. |
| 4 | Related-party disclosure unshipped: `/canonical-properties` files the Wilhelm property as "not ours" while `/about` names the operator Head of AI at that Foundation, and neither page connects the two (R-111) | D7 | S2 | S / `[D]` 0 hits for the linking disclosure on both pages | The site supplied both facts; a comparing reader finds the conflict themselves, which reads as selective disclosure and spends the credibility the disclosure surfaces earned. |
| 5 | `llms.txt` is never linked from any HTML (0 mentions sitewide) and `llms-full.txt` is a 2.4 KB index wearing a full-corpus name | D10 | S2 | S / `[D]` live greps + fetches | For an agent-context standard this is self-exemption in miniature: the one good machine artifact is undiscoverable by the audience it exists for. A footer link and a rename. |
| 6 | No machine-readable registry: `/vaults.json`, `/api/vaults.json`, `/registry.json` all 404 — the central proof artifact is scrape-only (with `.md` twins also absent) | D10 | S2 | M / `[D]` live 404s | The registry is the site's core dataset and its thesis is agent-navigability; a versioned JSON endpoint is the single highest-leverage D10 move and unblocks the anchor-4 basket. |
| 7 | Unlabelled invented anecdote on `/learn/what-is-adna`: "a lab's 200 files… three days to orient" under a "Before and after" heading, no source (R-121) | D6 | S3 | S / `[D]` live-verified verbatim | The campaign cut a fabricated transcript one mission ago and published why; a cold reader found this one unaided and named the inconsistency of standard as the credibility damage. Label it as illustrative or cut it. |
| 8 | `JetBrains Mono Variable` fails to load with a console error on **every page**, and no gate watches the console (F20) | D5/D12 | S3 | S / `[D]` pack p2_6 (document.fonts + console, all 13 surfaces) | Developers open consoles; a sitewide error is a competence signal in the wrong direction. The fix is likely one `format()` token — and the console gate it motivates protects everything else. |

---

## 6. Reviewer notes

**What I did not consult.** Nothing in `evidence/scoring/` (one `ls` to confirm the output path; three filenames seen, none opened); not the campaign charter, missions/, or the named orientation artifacts (`gate_b_dossier`, `instrument_ingestion`, `WEBFORGE_ORIENTATION`, `dependency_map`, `webforge_pattern_register`, `artifacts/p2_6/*`); no git log or commit inspection. I do not know reviewer A's scores or any prior composite for this target. Incidental exposure, disclosed: the session harness auto-injected the campaign governance file (conventions and finding-ID vocabulary — no scores), a five-line recent-commit summary, and a memory index referencing HAUSSMANN phase status; none contained a dimension score, and I went looking for none. From `evidence/cohort/` I read only my own two Phase 0 sheets (B — MCP, Mastra), used as Step 9 comparative anchors and for anchor-reading consistency (conjunctive bundles; the D10 basket note).

**Pack vs live — every disagreement found, and who won.** Live won five times, all in the site's favor, confirming the tiebreak's purpose: (1) security headers — pack recorded 4-of-5 missing and Observatory C/50; live serves the full set; (2) changelog/RSS — pack recorded one stale April entry; live has 16 dated entries and a 4-item feed current to 2026-08-19; (3) URL casing — pack recorded 24 mixed-case hard-404 slugs; live is 0 mixed-case with a 301 map; (4) registry leak class (H13, 58/74 pages) — purged at the generator on every surface I sampled; (5) the 29 broken internal links — repointed at the referrers. The pack's freshest artifacts (claim register §8, machine-eye delta, P2.6 captures — all dated 2026-08-19) agreed with my probes everywhere we overlapped; the aged genesis packets were the ones production had outrun. One pack claim I could not independently reproduce and did not rely on: the flux packet's instance-config details (I did not probe community.adna.network myself; D8's venue clauses rest on the pack's `[D]` plus the site's own live disclosure copy).

**What evidence limits made unawardable.** D1-5 (needs a human cold-reader panel; only disclosed synthetics exist); D3 entirely (withheld — no clean-machine TTFS run; R-34/R-63 remain `[A]`); D4-4's "examples tested in CI" (no instrument); D11-4 (no screen-reader/AT pass; the aria-label-misuse census is unadjudicated); D12-4's "budgets enforced in CI" and any field-p75 statement (no field instrument exists — I scored the lab evidence and said so at the gate). Where a clause was unverifiable I scored the rung below rather than assuming, per the anchor-letter rule.

**A note on scoring texture.** Three dimensions sat between anchor sentences and were settled by the letter plus my own Phase 0 precedent: D7 (anchor 2's "claims at strength ceiling" is now affirmatively false of this site — the claims sit below ceiling — while anchor 3's "some verifiable third-party use" is met only thinly via the Foundation org-hosting and a second founding contributor; 3, with the adoption wall named); D9 (both 2 and 3 match two of three clauses; the conjunctive-bundle reading I used at Phase 0 for Mastra binds → 2); D12 (anchor 3's "p75" read on lab evidence with the field gap disclosed, rather than failing the site for a measurement no instrument can currently take). Unresolved anchor ambiguity worth carrying to reconciliation: whether "search present and scoped" (D2-4) requires docs/global search or is satisfied by the registry's scoped search — I read the letter as satisfied; a stricter reading would not change D2's score band but should be settled in the instrument.

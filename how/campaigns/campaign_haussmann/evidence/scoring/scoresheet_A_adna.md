---
type: evidence
packet: scoring
reviewer: A
reviewer_disclosure: "Agent-scored (Claude, disclosed). Independent pass — no other scoresheet, reconciliation, charter, or orientation artifact was read. Inputs: instrument v1.0 + evidence pack + live-site spot-verification only."
campaign: campaign_haussmann
instrument: directives/OPERATION_VITRUVIUS_review_instrument.md (v1.0)
target: https://adna.network
archetype: "B×E hybrid, A-shaped onboarding surface (§1 target classification)"
evidence_pack_commit: d58ea13
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_reviewer_a
tags: [scoring, vitruvius, scoresheet_a, adna_network, campaign_haussmann]
---

# VITRUVIUS Scoresheet A — adna.network (baseline, independent)

**Date scored**: 2026-08-16 · **Weights**: B×E column (§5) · **Anchors**: §3 verbatim.
**Spot-check discipline**: where the evidence pack and my own live checks could disagree, the live check wins. **They did not disagree anywhere**: all 10 infrastructure spot-checks (live security headers · llms.txt · llms-full.txt size · `.md` twin 404 · slug-casing hard-404 · GitHub Discussions 404 · Videos.aDNA repo 404 · `/vaults.json` 404) and all 6 page-copy spot-checks (the four FALSE-claim strings on `/` · `/changelog` v0.1.0-only · "every commit is signed" on `/compliance` · zero "llms" references in home HTML · the 74/68/59/53 count collision live on `/vaults/graph`) reproduced the pack's findings exactly `[D]`. I additionally viewed `get-started__mobile-lg__dark.png` and `home__desktop__dark.png` with my own eyes to verify F1 and the home-craft level `[D]`.

**Panel caveat (binds D1)**: the three cold-reads are **SYNTHETIC** pre-screens (disclosed AI personas), not the §6 Step 5 human panel. Per the anchor's own terms, **D1 anchor 5 is unawardable** in this pass, and anchor-4's "correct summary in ~30s" can only be provisionally affirmed. Same class of caveat: **no clean-machine TTFS run** (§6 Step 6) and **no outsider contribution run** (§6 Step 7) exist in the pack, so D3/D9 are scored from documentary + claim-register + cold-read evidence with the gaps stated.

---

## 1. Score table

| Dim | Name | Score /5 | Weight (B×E) | Weighted pts |
|---|---|---:|---:|---:|
| D1 | Positioning & 30-second legibility | **3** | 12 | 7.2 |
| D2 | IA & navigation | **3** | 8 | 4.8 |
| D3 | Onboarding / TTFS | **3** | 12 | 7.2 |
| D4 | Documentation system | **3** | 12 | 7.2 |
| D5 | Visual design system & craft | **3** | 8 | 4.8 |
| D6 | Content & voice | **2** | 8 | 3.2 |
| D7 | Proof, credibility, trust surface | **2** | 14 | 5.6 |
| D8 | Community & governance legibility | **2** | 10 | 4.0 |
| D9 | Contribution funnel | **2** | 6 | 2.4 |
| D10 | Machine legibility & agent-readiness | **3** | 6 | 3.6 |
| D11 | Accessibility | **2** | 2 | 0.8 |
| D12 | Performance, resilience, ops | **2** | 2 | 0.8 |
| | **Composite** = Σ(score/5 × weight) | | **100** | **51.6** |

**Composite: 51.6 / 100.** Read with the breakdown, per §5: the shape is a site whose *built substrate* (IA reachability, docs depth, desktop craft, raw performance, machine artifacts) sits at 3, dragged by a *credibility stratum* (claims, contribution channels, registry copy, ops drift) sitting at 2 — and D7, the highest-weighted dimension for a B×E, is in the 2 band. The single largest composite lever is fixing the S1 claim/channel set, which touches D6, D7, D8, D9 simultaneously.

---

## 2. Per-dimension evidence blocks

### D1 · Positioning — 3/5 (weight 12)

- All three synthetic readers converged on a **correct** what-is-it sentence within five minutes, and all three correctly stated what it is *not* — but two of three misread the first screen (OSS contributor: "a philosophy/manifesto site… It took clicking through to the GitHub link"; clinician: briefly parsed aDNA as *ancient DNA*), and the third passed "barely… the poetry costs you the first 10 of the 30 seconds" `[D coldreads/, synthetic]`.
- Above the fold: ≥3 proprietary abstractions before a concrete example ("Lattice Protocol", "context democracy", entity-type/conformance counters) `[D home__desktop__dark.png, own view]`; audience never named explicitly, and the vendor-neutral framing is contradicted by the Claude Code prerequisite (senior-engineer read) `[D]`. Six audience-segment links on home = anti-pattern 7.7 `[D capture + inventory §7 triple persona branch]`.
- The rescue mechanism is real: the clone command and the How-it-works file trees carry the mechanism (machine-eye SYNTHETIC reader derived category, audience, negative space, and the correct first action from raw text, twice, zero hallucination) `[D machine_eye §15]`.
- Split legibility is measured: senior engineer self-scores "7 for the standard, 3 for the network" — the B (standard) job lands; the E (network/mission) job reads as unexplained scale `[D coldread]`.
- **Binding anchor**: 3 — "Correct summary, but only after scrolling past the fold." Anchor 4 fails on "audience explicit" and on 2-of-3 first-screen misses; anchor 5 unawardable (no human panel).
- **Strength**: concrete file-tree/CLAUDE.md examples — the moment the abstraction becomes legible (instrument §8.1 #10). **Weakness**: lyric-manifesto hero defers the category sentence; mechanism arrives second (H1/H10 confirmed).

### D2 · IA & navigation — 3/5 (weight 8)

- Reachability is genuinely excellent: 202/202 sitemap URLs HTTP 200, **zero orphans**, 10/10 high-value pages ≤2 clicks, 94.6% of pages at depth ≤2 `[D inventory §0/§4/§5]`.
- But the URL scheme is machine-hostile: 24/202 mixed-case slugs, and casing is a **hard 404 with no redirect in either direction** (`/vaults/iii.adna` 404 / `/vaults/III.aDNA` 200 — re-verified live) `[D inventory §6 + machine_eye §10 + own spot-check]`.
- Taxonomy debt: 7 primary nav items + "More" overflow + "In this section" rail (three concurrent systems, H2) `[D home capture]`; **three parallel audience branches** (`/educators` et al. + `/adopters/adopter-*` + `/use-cases/*`, same persona set at up to 3 URLs, 4 duplicate `<title>` pairs) `[D inventory §7]`.
- Link hygiene: 29 broken internal links (11 unique targets) concentrated in `/reference/*`, + 2 in-markup 404 targets `[D sweep #1, inventory §4]`. No site-wide search visible in any header capture (only `/vaults` has scoped search + class chips) `[D captures]`.
- Registry sprawl (7.4): 74 entries, mixed lifecycle states ("active"/"genesis"/"pending") with filters but no admission tier or quality distinction; 13,921 px mobile scroll `[D visual_findings /vaults row]`.
- **Binding anchor**: between 3 and 4; held at **3** because anchor 4 is conjunctive — "search present and scoped" (absent site-wide) and machine-predictable URLs (explicitly broken) fail, despite ≤2-click reachability and zero orphans exceeding anchor 3's "coherent but deep" description.
- **Strength**: flat, fully-connected page graph — no orphan problem at all. **Weakness**: mixed-case hard-404 slugs — a permanent, compounding source of broken external links.

### D3 · Onboarding / TTFS — 3/5 (weight 12)

- **Caveat first**: no clean-machine stopwatch run exists in the pack `[A→gap]`; this score is provisional on the B-packet TTFS run and drops to ≤2 if the quickstart fails as written.
- What is verified: the one-liner and per-step commands match `install_truth.json` exactly, the repo is public, no curl-pipe-sh, prerequisites (Git + Claude Code) stated before step 1, previous-repo redirect documented `[D claims R-63…R-68, gate-20]`. A small unrelated model extracted and would run the correct first command from page text alone `[D machine_eye §15, SYNTHETIC]`.
- Friction against the checks: **no zero-install evaluation path** (check 7 — no playground/tour; the "Try in Claude Code" CTA still requires the full install) `[D machine_eye §12]`; the first move is the instrument's named *uncosted-first-move* failure — clone an entire workspace into a hardcoded `~/aDNA` + launch an agent inside a stranger's instruction files (the skeptical synthetic engineer explicitly refuses to run it first) `[D coldread + H3]`; no troubleshooting section and no uninstall/cleanup documented on `/get-started` `[D capture, own view]`; "about 5 minutes" is asserted, unmeasured (R-63 `[A]`).
- The conversion page itself is degraded on mobile: F1 half-width squeeze at ≤375px, F12 orphaned copy buttons + right-edge clipping of the file-tree block `[D captures, own view of get-started__mobile-lg__dark.png]`.
- **Binding anchor**: 3 — "Completes as written; troubleshooting thin" (completion evidenced documentarily, not by run). Anchor 4 fails on troubleshooting and zero-install; anchor 5's "explicit definition of first success" is absent (what the reader *has* after `claude` launches is never stated).
- **Strength**: prerequisite honesty + auditable-inline install path — rare in the category. **Weakness**: single-path onboarding with a large first ask and no evaluator ramp; D3×D7 interaction (§4) makes this worse than it looks — a high-friction first move on a weak-D7 site is the instrument's named fatal combination.

### D4 · Documentation system — 3/5 (weight 12)

- Diátaxis-shaped IA exists *in the navigation itself*: Learn (tutorials ×15) / how-to (×13) / Reference (×47 incl. full spec) / concepts + patterns (explanation ×22+) / glossary (×25) `[D inventory §2 + site nav]`.
- Reference substance is real: a versioned, numbered spec ("v2.5 Stable" badge, RFC-2119 keywords, an explicit out-of-scope fence — the synthetic engineer's single biggest credibility gain) `[D coldread + visual_findings]`; spec claims machine-anchored by gate-20 (371/371 gates green) `[D sweep #2]`.
- Failures: the spec ships as **one 55,409 px page (124,605 px mobile ≈ 150 phone screens)** compounded by F1's half-width column (F6) `[D visual_findings]`; the **worst link rot on the site is inside `/reference/*`** — 29 broken links to a stale snake_case/`.md` scheme, several pages linking their own pre-migration filenames `[D sweep #1]`; glossary previews degenerate ("AGENTS.md — AGENTS.", F11) `[D]`.
- Freshness signals absent: no per-page last-updated visible, changelog dead since April (F5), registry "last synced 2026-05-24" ≈ 12 weeks stale `[D visual_findings F5/F10, claims R-57]`. No "edit this page" path found on any captured page `[D captures; I]`. No doc versioning beyond "current".
- **Binding anchor**: 3 — "Clear types, complete reference, versioning weak." Anchor 4 fails on versioning, migrations-per-boundary, and the per-page contribution path; the reference link-rot alone would also block it.
- **Strength**: genuine four-type separation visible in the IA, with a real spec at the center. **Weakness**: no freshness layer at all — undated pages + dead changelog mean a reader cannot tell what is current (the instrument's *undated pages* failure mode, live).

### D5 · Visual design system & craft — 3/5 (weight 8)

- The system is real and applied: published design-system page (footer-linked) `[D instrument §8.1#7 + jsonld census listing]`; one coherent voice — type/chips/cards/pixel-art accents — across home, vaults, network, get-started, learn `[D visual_findings "Visual voice consistency" + own view of home__desktop__dark.png]`; **dark/light parity clean on every reviewed surface** `[D paired captures]`; home hero is category-grade craft (eyebrow → claim → dual CTA → clone → stats → live constellation) `[D own view]`.
- Responsive integrity fails hard: **F1 (S1)** — the entire docs template class renders article text in a ~185 px column at 375 / ~130 px at 320, left half dead space, including `/get-started`; verified with my own eyes `[D get-started__mobile-lg__dark.png]`. **F2 (S2)** — `/network` mobile clips step text and the `git clone` block mid-word, no wrap, no scroll `[D network__mobile-lg__dark.png]`. **F3 (S2)** — hub diagram degrades to an unlabeled asterisk at 320 `[D]`.
- The category's most-read component — code blocks — carries a repeated defect: copy control orphaned below every block + right-edge clipping (F12), both themes `[D]`.
- Template weight is uneven: one excellent hero and strong narrative pages vs thin letterboxed hubs (`/how` bodyLen 1,120, zero h2 — F13) and the ~70%-empty changelog `[D]`.
- **Binding anchor**: 3 — "Tokenised system, mostly conformant, some drift." Anchor 4 is explicitly blocked: "responsive integrity verified" is falsified at 320–375 px on the primary conversion template, and empty/loading states are unevidenced. (Not a 2: tokens are enforced — 371 CI gates + parity — and the voice is consistent; D5×D11 audited together below.)
- **Strength**: distinctive, consistently-applied visual voice with true dual-theme parity. **Weakness**: mobile is a second-class citizen on exactly the pages a newcomer hits first.

### D6 · Content & voice — 2/5 (weight 8)

- Claim audit (the check that binds): **93 claims → 52 verified · 14 verifiable · 19 unsupported · 8 FALSE** `[D claims §5.1]`. 29% of adjudicated claims are not supportable; the FALSE set includes the homepage's central openness sentence and a compliance-page control claim — all 8 re-verified live by me where copy-visible (4 strings on `/`, 1 on `/compliance`, Discussions/templates/repo 404s) `[D own spot-checks]`.
- Aspirational present tense — the instrument's "cardinal sin" (7.5) — is systematic in the hero/marketing stratum ("lives", "federating", "already steward", "The proof") while the *same pages'* self-descriptive strata carry exemplary tense discipline (zero-count edge kinds, horizon boxes, "not built yet") `[D claims §3 tense audit]`.
- **H13 annex is decisive for the score**: 58/74 registry pages (78%) leak internal operational language — truncated mid-parenthesis ledes ("Web-stack cohort (."), raw enums (`Persona: tbd_at_p0`), campaign codenames, internal file paths — including on the homepage card band; the registry (78 of 202 URLs) is the site's largest template class and its copy is, by default, unedited internal prose `[D claims §4 + own view of home capture]`.
- Register oscillation (H10) measurably costs comprehension: all three synthetic readers cite the manifesto-vs-mechanism whiplash; reading level FKGL 12–17.9 on all 6 sampled key pages (upper-bound caveat noted) `[D coldreads + sweep #8]`.
- Genuine anchor-5-class elements exist in isolation: agent-authorship disclosure (`last_edited_by`, /about AI-persona plain-speak) is verified and rare `[D claims R-39/R-44/R-76]`.
- **Binding anchor**: 2 — "Competent, register breaks common, unsupported claims present." Anchor 3's "claims mostly supportable" is numerically true (71%) but 8 FALSE claims are categorically beyond "some aspirational tense," and B×E adjudication (E: overclaim is fatal, §1) plus the 78% registry leak rate hold this at 2. The docs stratum alone would score 3–4.
- **Strength**: the honest register — the site demonstrably knows how to tell the truth about its scale (credit register, claims §5.4). **Weakness**: no editorial gate between internal artifacts and public copy — the leak is structural, not incidental.

### D7 · Proof, credibility, trust surface — 2/5 (weight 14)

- Named humans: founder present but **first-name-only, no affiliation** ("Stanley — Founding Architect", R-58) `[D]`; the Wilhelm Foundation + named founders (Cederroths) are real and the strongest trust anchor `[D/R claims R-59]` — but the one institutional artifact (rare-archive repo) is operator-authored (sole contributor = founder) `[D R-18]`.
- Independent adoption: **zero**. All 74 vaults + all four "public-good subnetworks" are operator-orbit; anti-pattern 7.3 (self-federation presented as network) is live and **undisclosed in the reader's line of sight** — the homepage instead escalates to "Real public-good work already lives here" and /about titles it "**The proof**" (R-62) `[D claims R-18/R-28/R-48/R-62]`.
- Five of the 8 FALSE claims are direct trust-surface hits: R-20 ("the vaults are all public" — one click into the registry disproves it), R-14 ("the open coordination protocol" — repos private, counsel-gated), R-90 (the registry's **only** outbound GitHub proof-link 404s — re-verified live), R-23/R-61 ("every vault… its own persona" vs raw `tbd_at_p0` on the same surfaces) `[D claims §5.2 + own spot-checks]`.
- Activity signals: dead changelog (4 months), 12-week-stale registry sync, image repo at ~14 commits / 2 stars / 1 issue; no live metrics pulled from source (defensible as "stated not at all", but nothing dated moves) `[D F5, R-57, oss coldread]`. Security/privacy pages exist in the footer `[D]`, but no SECURITY.md in the public repo root `[D R-47 evidence listing]`.
- The counterweight is real: every load-bearing number on the site is true with zero site-vs-repo drift `[D claims header]`; no fabricated testimonials anywhere, explicit "illustrative personas" anti-claim (R-76); /about's one-person + AI-persona honesty is the best page on the site `[D]`.
- **Binding anchor**: 2 — "Named humans, no independent adoption, claims at strength ceiling" — with the amendment that 8 claims sit *above* the ceiling (FALSE), which is what forecloses 3 ("some verifiable third-party use, activity visible": neither holds). The honesty infrastructure and verified numeric core are what keep this out of the 0–1 band ("overclaimed" alone would land there).
- **Strength**: verifiable modesty where it exists — dates shown, zero-counts shown, one-person stewardship disclosed. **Weakness**: the highest-weighted dimension carries the site's S1 concentration; a hostile reader finds R-20 in one click.

### D8 · Community architecture & governance legibility — 2/5 (weight 10)

- Structure on paper is good: a four-level ladder with self-contained Level-0 value ("no level requires the next", §8.1 #8) `[D]`; contribution-standards page with five explicit quality gates `[D oss coldread]`; decisions genuinely on the record (public ADRs, ratification blocks, "operator-chartered… never silent" verified R-41) `[D]`; /about states a 4-stage decentralization roadmap (succession posture — an anchor-5 element, present) `[D visual_findings /about row]`.
- Honesty-about-emptiness (check 11) is the reference implementation of itself: "member counts… The record doesn't track them, so this page doesn't show them" + horizon callout `[D]` — per the instrument, I score the honesty, not the headcount, and the honesty is excellent.
- But the named venue **does not exist**: "questions and ideas start in Discussions" → Discussions not enabled, `/discussions` 404 (R-46, re-verified live) `[D]`; the promised issue templates don't exist (R-47 — no `.github/` in the repo) `[D]`; no CoC found in the repo `[D oss coldread]`; no synchronous channel at all (H14 — defensible, but combined with the dead written channel, there is *no working question path*).
- No numbered proposal process with states/archive (H15 — the largest structural gap vs the MCP reference for an Archetype-B standard); no chartered groups; no named role-holders beyond the founder; upper ladder rungs unoccupied and *not* marked as such (7.2's correction half-applied) `[D claims R-40]`.
- Sidebar: the separately-stood-up community platform (community.adna.network) is correctly **unlinked** — B7 verdict "linking today is net-negative" (policy-naked, unbranded, aliveness unverifiable) — holding that link is the right governance call and I credit it `[D flux §4]`.
- Agent participation is documented with unusual rigor (status, ratification, attribution) — the check-12 differentiator, genuinely held `[D claims R-39/R-41/R-44]`.
- **Binding anchor**: 2 — anchor 3 requires "CoC published; venue exists" and both fail. This is *above* anchor 2's letter ("no process artifacts" — false, artifacts abound) but the dead-venue promise is the instrument's named failure mode made worse: not a dead channel prominently linked, a **nonexistent** channel prominently promised. Fixing Discussions + CoC alone lifts this to 3.
- **Strength**: honesty-about-emptiness + agent-governance disclosure — category-leading. **Weakness**: the D7×D8 interaction — the community *claims* are credibility claims, and two of them are FALSE.

### D9 · Contribution funnel — 2/5 (weight 6)

- The first rung is broken at both advertised entry points: Discussions 404 + no issue templates (R-46/R-47) — "a motivated first contributor hits two 404s" `[D claims §5.3 rank-2 + own spot-check]`.
- No CONTRIBUTING.md in the public repo `[D oss coldread, checked directly]`; no good-first-issue/help-wanted labels; **1 open issue total** — nothing triageable; no named maintainers or reviewers; no response-time norm; zero external PRs ever exercised the path `[D oss coldread + claims R-27/R-43]`.
- What exists: the repo accepts issues/PRs `[D has_issues, R-43]`; a real written on-site process (three paths + five quality gates) `[D]`; dev-environment setup is genuinely one command (the product's own clone); non-code paths (docs, side-quests) are named on-site.
- Synthetic contributor's likelihood-of-review-in-a-week self-score: 3/10, on exactly the evidence above `[D coldread, SYNTHETIC]`. No contribution run was executed (§6 Step 7 gap).
- **Binding anchor**: 2 — "Repo accepts PRs; no guidance; no labelled entry points" (with the on-site process page slightly exceeding the letter, and the dead advertised channels subtracting it back). Anchor 3 requires CONTRIBUTING + templates + labelled issues: all three absent from the repo.
- **Strength**: the site-side process definition with quality gates — unusually concrete for a young project. **Weakness**: D8×D9 interaction (§4): a ladder no one can climb — the funnel's advertised mouth is two 404s, converting an honest early project into a broken promise.

### D10 · Machine legibility & agent-readiness — 3/5 (weight 6)

- Present and working `[D machine_eye + own re-verification]`: curated, current `llms.txt` (hand-written per-link descriptions; its counts cross-check 4-ways); complete `sitemap` (202 entries, exact registry match); valid RSS (stale content, not broken); fully server-rendered HTML with high-fidelity text extraction; complete OG metadata; JSON-LD on 199/202 pages.
- Anchor-4 requirements hard-fail 3-of-4: **no `.md` twins** (10/10 404, no content negotiation — byte-identical bodies with identical ETags under `Accept: text/markdown`); **no machine-readable registry** (4/4 JSON endpoints 404 — an agent must scrape HTML or parse slugs); **no documented agent entry point** — `llms.txt` is referenced **zero times** in the site's own HTML (re-verified: 0 hits on home), so the one good artifact is undiscoverable by convention-unaware agents `[D]`. JSON-LD is present-but-shallow: no top-level `Organization` anywhere (0/202), no `sameAs`, vault entities are generic `WebPage` not `Dataset`/`SoftwareSourceCode` `[D jsonld_census + machine_eye §9]`.
- URIs are half-stable: trailing-slash forgiving, but casing is a hard 404 with zero recovery and no discernible casing rule across the 74 slugs `[D §10 + own check]`. `llms-full.txt` is a 2,018-byte index wearing a full-corpus name (re-verified: 2018 B) — a specific, fixable overclaim `[D]`.
- The thesis-critical finding (intent clause: failure here refutes the product claim): **self-conformance is narrated, not structural** — the publishing page candidly discloses that vault frontmatter is stripped before pages ship, so the standard's flagship instance cannot be machine-verified as conformant, only trusted in prose (7.8 in nuanced, partial form) `[D machine_eye §13]`. No MCP server over the corpus (near-mandatory for a context standard, check 12) `[D §11]`.
- **Binding anchor**: 3 — "llms.txt + sitemap + RSS + clean extraction" all cleared; anchor 4 not reached (3 of its 4 bullets fail outright, the 4th only partial). I score this independently and land where the machine-eye packet's own closing assessment lands; the concurrence is on the evidence, not by adoption.
- **Strength**: genuinely curated llms.txt + clean extraction — the floor is real. **Weakness**: for a project whose *thesis* is agent-navigable context, the agent path stops at anchor 3 while the D10×D1 interaction (§4) means every gap here is also a positioning wound.

### D11 · Accessibility — 2/5 (weight 2) · **gate: see §4**

- Automation is fully clean, and unusually thoroughly so: **axe 0 violations across 32 route×theme runs** (21 dark + 8 light + 3 extra), Lighthouse a11y 100/100 ×10, 371/371 gates incl. a11y sweeps `[D visual_findings capture stats + sweep #2/#4/#6]`.
- The 964 html-validate errors are **markup/ARIA-correctness lint, not WCAG criticals** on my judgment of each class: `unique-landmark` (238) = best-practice landmark naming (1.3.1-adjacent, not AA-critical); `aria-label-misuse` (245) = invalid-but-typically-ignored placement (axe found no resulting name failure); `valid-id` (152) = digit-leading ids, legal HTML5; `no-implicit-button-type` (203) = behavior nit. Real cleanup debt; no critical among them `[D sweep #5, judged]`.
- Manual-layer failures do exist: **F2** — `/network` mobile clips step text and the clone command mid-word with no wrap/scroll = information loss at mobile width → a **WCAG 1.4.10 (Reflow, AA) failure candidate** `[D network__mobile-lg__dark.png]`. F1 squeezes (no content loss → ugly but likely conformant) `[D, own view]`. The graph's keyboard-navigable twin exists (correct pattern, credited) but is **not fully equivalent** — roster + per-type edge counts yes, the enumerated edges no (check 7: partial listing) `[D machine_eye §14]`.
- Positive floor: skip-link, long descriptive alt text, `lang` present, branded 404 `[D instrument §8.1 + captures]`. Absent: screen-reader pass, keyboard-traversal pass, published a11y statement — none in evidence.
- **Binding anchor**: 2 — "Automated clean; manual failures in key flows" describes the evidence state exactly; anchor 3 ("AA on primary templates") cannot be affirmed with zero manual verification and one evidenced manual AA-failure candidate.
- **Strength**: dual-theme zero-axe across every template — rare. **Weakness**: the manual third of a11y is unexamined, and F2 sits in a primary flow.

### D12 · Performance, resilience, ops — 2/5 (weight 2) · **gate: see §4**

- Performance itself is excellent everywhere measured: Lighthouse perf 97–100 on 5 routes × 2 form factors, LCP 0.4–0.5 s desktop / 2.0–2.3 s mobile, CLS ≤0.001, TBT 0 ms — **local preview build, not field data** `[D lighthouse_summary]`; live Playwright loads 682–1439 ms networkidle corroborate `[D visual_findings]`. Static, server-rendered, works with JS disabled `[D machine_eye]`.
- Operations is the failing half: **live production serves none of its 4 configured security headers** (vercel.json: CSP, XFO, XCTO, Referrer-Policy; live `/`: only platform-default HSTS — **re-verified by me today**), Observatory C/50 `[D sweep #3/#8 + own spot-check]` — the deployed artifact has drifted from the committed config, which is an ops-discipline finding beyond the headers themselves.
- Link resilience fails the anchor: 29 broken internal links + 2 in-markup 404 targets (zero-internal-404s is the stated bar) `[D sweep #1, inventory §4]`; casing 404s have no redirect map; RSS/changelog pipeline dead since April `[D machine_eye §7]`.
- No uptime monitoring or status page in evidence; CI gate suite (371) exists and runs, but evidently without a link-check or live-header check (both failures shipped) `[D/I]`. 404 page is branded and useful (credit) `[D]`.
- **Binding anchor**: 2 — anchor 3 is conjunctive ("CWV green at p75; **no internal 404s**") and the second clause fails; anchor 2's own description ("passes desktop, fails mobile") understates the perf, but the ops surface (drift + rot + no monitoring) is what this dimension also measures. Perf alone would be 4–5.
- **Strength**: the payload/speed fundamentals are category-leading. **Weakness**: production drift — what is deployed is not what is configured, and nothing watches the gap.

---

## 3. Composite

**Σ(score/5 × weight) = 7.2 + 4.8 + 7.2 + 7.2 + 4.8 + 3.2 + 5.6 + 4.0 + 2.4 + 3.6 + 0.8 + 0.8 = 51.6 / 100**

Reported with breakdown per §5 (a composite without its breakdown is a lie by compression). Band reading: substrate dimensions (D1–D5, D10) uniformly 3; credibility/community dimensions (D6–D9) uniformly 2 under B×E weighting — which is where 42 of the 100 weight points live. The efficient path up is not more polish; it is claim-truth + channel-liveness + registry editorial gating.

## 4. Binary-gate verdicts (D11 / D12)

| Gate | Verdict | Basis |
|---|---|---|
| **D11 — WCAG AA criticals** | **CONDITIONAL PASS** | Zero automated criticals (axe 0 × 32 runs, both themes; Lighthouse a11y 100 ×10) `[D]`. The 964 html-validate errors are judged markup-correctness classes, none a WCAG AA critical `[D, judged]`. **Condition**: F2 (`/network` mobile mid-word clipping, content loss, uncopyable command) is a manual WCAG 1.4.10 Reflow AA-failure candidate `[D]` — fix or formally adjudicate before phase sign-off; no screen-reader/keyboard manual pass exists yet, so this gate is passed on automation only. |
| **D12 — CWV red at p75** | **PASS on available evidence, field-unverified** | All lab runs green both form factors (LCP ≤2.3 s mobile, CLS ≈0, TBT 0) `[D]` — but lab = local preview build; **no field/CrUX p75 data exists in the pack**, and live production demonstrably drifts from the working tree (security headers), so live field collection is required before final sign-off. No red is evidenced anywhere. |

## 5. Top-8 findings to fix first

| # | Finding | Dim | Sev | Effort | Why first |
|---|---|---|---|---|---|
| 1 | **The 8 FALSE claims** — lead with R-20 "the spec, the tooling, and the vaults are all public" (one click disproves), R-14 "the open coordination protocol" (repos private; the same page's honest "opening progressively" phrasing already exists — harmonize to it), R-84 "every commit is signed" (false control claim on the auditor-facing page). All re-verified live today. | D6/D7 | 🔴 S1 | S (copy edits) | Falsifiable inaccuracy on the trust surface of an E-archetype; blocks any promotion per §5 severity rules. |
| 2 | **Dead contribution funnel** — R-46 "questions start in Discussions" → Discussions not enabled (404); R-47 "issue templates" → repo has no `.github/` at all. Either enable + ship (the templates were already staged dev-side), or rewrite /community to name only what exists. | D8/D9 | 🔴 S1 | S | The exact reader the whole site courts hits two 404s; converts the honesty brand into a broken promise (D8×D9). |
| 3 | **F1 — docs template mobile squeeze** — entire docs class (incl. `/get-started`, the primary conversion page) renders in a ~half-viewport column at ≤375 px, left side dead space. Verified with my own eyes. One grid rule. | D5/D3 | 🔴 S1 | S (CSS) | First-contact surface reads broken on phones; suppresses the A-job (onboarding) at the top of the funnel. |
| 4 | **H13 registry leak, fixed at the generator** — 58/74 vault pages leak internal ops prose (truncated "…(Production Tidy pt08." ledes on the homepage band, raw `tbd_at_p0` enums, codenames, internal paths). Install the editorial gate in the inventory→registry pipeline + fill/suppress persona placeholders (also clears FALSE R-23/R-61). | D6/D7 | 🟠 S2 (systemic) | M | The shop window contradicts the product ("legible context"); one generator fix clears 58 pages + 2 FALSE claims. |
| 5 | **R-90 + link rot** — the registry's only outbound GitHub proof-link (Videos.aDNA) 404s (re-verified); 29 broken internal links on a stale `/reference/*` `.md`/snake_case scheme. Fix targets, add linkinator to the CI gate suite. | D7/D12 | 🔴 S1 (R-90) / 🟠 S2 | S–M | The single place a skeptic can click through to code is dead; zero-internal-404s is the stated bar. |
| 6 | **Self-federation disclosure** — "Real public-good work already lives here" / "**The proof**" vs an all-operator-orbit network (7.3). Ship the dated "state of the network" surface (what runs, what is operator-operated, what is external, what is planned) and propagate the /community honesty pattern to `/`, `/commons`, `/about`. | D7 | 🔴 S1 | M | The instrument's §8.3 single highest-leverage move: converts the principal vulnerability into the principal differentiator. |
| 7 | **Live security-header drift** — 4/4 configured headers absent from production (only platform HSTS serves; Observatory C/50). Re-verified today. Diagnose deploy path, redeploy, and add a live-header check to CI so drift cannot ship silently. | D12 | 🟠 S2 | S | One deploy from C→A; and the drift mechanism itself (deployed ≠ committed) is a standing ops risk. |
| 8 | **F2 + F4 — /network mobile clipping & graph count collision** — F2: step text + clone command clipped mid-word at 375 px (WCAG 1.4.10 candidate; gate condition). F4: `/vaults/graph` carries 74, 68, 59, and 53 simultaneously (all four confirmed live today) — a data-generation bug on the network's proof page. | D5/D11 · D7 | 🟠 S2 | S | Both are small, high-visibility fixes on the two pages that carry the network story; F2 is the D11 gate condition. |

---

## 6. Reviewer notes

- **Where I diverge from nothing**: no evidence-pack claim failed a spot-check; the pack is internally consistent with the live site as of 2026-08-16. The one nuance found: `/vaults/graph` today carries *both* the "59" registry-frame count and the "53" graph-frame count alongside 74 and 68 — the F4 finding as captured, unchanged live.
- **Unawardable/ungraded by evidence limits**: D1 anchor 5 (no human panel — cold-reads are disclosed synthetic pre-screens); D3 anchors above 3 (no clean-machine TTFS run); D9 first-contribution experience (no outsider contribution run); D11 anchors above 2 (no screen-reader/keyboard manual pass); D12 field p75 (no CrUX).
- **Archetype adjudication used throughout** (§1): pages failing as A (onboarding friction, no zero-install) while partially succeeding as E (honesty surfaces) were scored against the job the page is doing; the composite's 2-band is driven by E-fatal overclaim, not by A-job mechanics, which is why D7 (weight 14) is the binding constraint on this site's score.

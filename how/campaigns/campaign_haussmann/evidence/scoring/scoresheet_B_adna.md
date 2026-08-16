---
type: evidence
packet: scoring
reviewer: B
reviewer_disclosure: "AGENT-SCORED — independent reviewer B is an AI agent (Claude, Fable 5). Scored blind: no access to reviewer A's scoresheet, any reconciliation, campaign charter/mission drafts, or orientation artifacts."
campaign: campaign_haussmann
instrument: directives/OPERATION_VITRUVIUS_review_instrument.md v1.0
target: https://adna.network
archetype_applied: "B×E hybrid, A-shaped onboarding surface (§1); B×E weights (§5)"
evidence_pack_commit: d58ea13
inputs: "instrument + evidence pack (inventory B1, visual B2, sweep B3, machine-eye B4, claims B5, flux B7, 3 SYNTHETIC coldreads) + live-site spot-verification this session"
spot_check_date: 2026-08-16
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_reviewer_b
tags: [scoring, scoresheet, reviewer_b, vitruvius, haussmann, adna-network]
---

# Scoresheet B — adna.network (Independent Reviewer B, baseline VITRUVIUS)

**Method.** Scored against the §3 anchors, B×E weights (§5). Inputs limited to the instrument, the evidence pack at commit `d58ea13`, and my own live spot-checks (2026-08-16). Where pack and spot-check could disagree, the spot-check would win — **in the event, all 19 spot-checks (11 HTTP probes + 8 live-copy greps) confirmed the pack; zero disagreements found.** Findings carry `[D]` (directly observed — pack artifact or my own live fetch) / `[I]` (inferred) tags per §0.

**Spot-check log** (all live, this session): security headers on `/` (HSTS only — 4 configured headers absent) · `llms.txt` 200/1,464 B · `llms-full.txt` 200/2,018 B · `.md` twin 404 · `/vaults.json` 404 · GitHub Discussions 404 · `Videos.aDNA` repo 404 · `/vaults/iii.adna` 404 vs `/vaults/III.aDNA` 200 (casing hard-fail, no redirect) · `lattice-protocol` repo 404 (private) · live homepage copy carries "the open coordination protocol", "the spec, the tooling, and the vaults are all public", "Renamed from TaskForge.aDNA (Production Tidy pt08", "its own persona, its own history" · `/community` carries "issue templates; questions and ideas start in Discussions." · `/compliance` carries "every commit is signed and dated" · `/changelog` single entry v0.1.0 Apr 13 · `tbd_at_p0` ×3 on `/vaults` · zero "llms" refs in home HTML · get-started has a Prerequisites section but no troubleshooting section (sole "stuck" hit = "get unstuck" inside the Try-Claude-Code CTA) · "More" nav overflow present · search input on `/vaults` only (no site-wide search) · 3/3 sampled broken-link targets 404 **live in production** (`/reference/reading-guide/adna_standard.md`, `/how/skills/AGENTS.md`, `/patterns/content-as-code/`).

---

## 1. Score table (B×E weights)

| Dim | Dimension | Score /5 | Weight | Contribution |
|---|---|---:|---:|---:|
| D1 | Positioning & 30-second legibility | **3** | 12 | 7.2 |
| D2 | IA & navigation | **3** | 8 | 4.8 |
| D3 | Onboarding / TTFS | **2** | 12 | 4.8 |
| D4 | Documentation system | **3** | 12 | 7.2 |
| D5 | Visual design system & craft | **3** | 8 | 4.8 |
| D6 | Content & voice | **2** | 8 | 3.2 |
| D7 | Proof, credibility, trust surface | **2** | 14 | 5.6 |
| D8 | Community & governance legibility | **2** | 10 | 4.0 |
| D9 | Contribution funnel | **2** | 6 | 2.4 |
| D10 | Machine legibility & agent-readiness | **3** | 6 | 3.6 |
| D11 | Accessibility | **3** | 2 | 1.2 |
| D12 | Performance, resilience, ops | **2** | 2 | 0.8 |
| | **Composite (Σ score/5 × weight)** | | **100** | **49.6%** |

> Per §5: a composite without its breakdown is a lie by compression — the per-dimension blocks below are the score.

---

## 2. Per-dimension evidence blocks

### D1 · Positioning — **3/5**

- All 3 SYNTHETIC cold-reads converged on a *correct* one-sentence definition, correct audience, and correct "what it is NOT" — but all 3 report the first screen misleads: "the hero fights itself… the poetry costs you the first 10 of the 30" (senior engineer), "read to me first as a philosophy/manifesto site" (OSS contributor), "wondered if it was an ancient-DNA… commons" (clinician) `[D coldreads/*]`. The B4 machine reader also derived category, audience, negative space, and the correct next action from raw text on both passes `[D machine_eye §15, SYNTHETIC]`.
- Abstractions above the fold exceed the ≤2 budget: "Lattice Protocol" (undefined, ×3), "context democracy" (circularly defined), "16 Entity Types / 3 Conformance Levels" hero stats with no fold-visible definitions, "tended by Rosetta" personas unexplained at point of use `[D coldreads; instrument §8.2 H1/H9/H11 confirmed]`.
- Audience is not explicit: the Claude Code dependency surfaces only in the prerequisites/command; "This is a Claude Code convention. Say so." `[D coldread_senior_engineer]`. The clone command itself does the positioning work the prose doesn't ("the trailing `&& claude` told me… faster than any prose").
- **Binding anchor (3):** "Correct summary, but only after scrolling past the fold" — matches all three reads verbatim. Anchor 4 fails on "audience explicit" and on unverifiable "~30s at all three viewports". **Anchor 5 is unawardable on present evidence: no human panel exists** — all cold-reads are synthetic pre-screens, and a text-reading AI is a best-case reader; real humans likely do worse, not better.
- **Strength:** the mechanism, once reached, is unusually legible — file-tree + CLAUDE.md examples land it. **Weakness:** manifesto-first hero + undefined coinage tax the first 30 seconds; as E the register works, as B×A entry it costs orientation time (D1×D6 interaction).

### D2 · IA & navigation — **3/5**

- Structurally strong base: 202 sitemap URLs all 200, **0 orphans**, 10/10 high-value pages ≤2 clicks, max depth 3 `[D inventory_summary §3–5]`.
- Against that: **24/202 mixed-case URLs** with hard-404 casing and no redirect/canonicalization (`/vaults/iii.adna` → 404; spot-confirmed live) `[D inventory §6, machine_eye §10, my probe]` — a named failure mode; an agent/user cannot guess a slug it hasn't seen verbatim.
- **Three parallel audience-IA branches** (top-level `/educators` `/enterprise` `/researchers` + `/adopters/adopter-*` + `/use-cases/*`, same persona set, 4 duplicate `<title>` pairs) — anti-pattern 7.7 `[D inventory §7]`; "More" nav overflow present (spot-confirmed live) — the taxonomy lost a fight `[D]`.
- Search is registry-scoped only (`/vaults` input; no site-wide search, no `/`-or-`⌘K` affordance found) `[D my grep]`; registry shows sprawl symptoms — mixed lifecycle states undistinguished, genesis stubs beside mature entries, stubby single-card class groups (7.4) `[D visual_findings /vaults]`. 2 in-markup targets 404 live `[D inventory §4, spot-confirmed]`.
- **Binding anchor:** exceeds 3's letter on depth but fails 4 on "search present and scoped" (site-wide) and on URL hygiene; three named failure modes present → snaps to **3**.
- **Strength:** zero orphans + everything ≤3 deep. **Weakness:** casing-fragile URL scheme — the exact opposite of "machine-predictable" — plus triplicated audience IA.

### D3 · Onboarding / TTFS — **2/5**

- **TTFS is unmeasured** — no clean-VM run exists in the evidence base; "about 5 minutes" is a site claim, `[A]` per the claim register (R-63). The category's "hard currency" is uncounted.
- Prerequisites ARE stated up front (Git + Claude Code, R-68 `[D]`; Prerequisites section spot-confirmed) and the one-liner is real, auditable, and matches `install_truth.json` exactly (R-65/R-67 `[D gate-20]`). But the first move is the instrument's own named *uncosted first move*: clone an unfamiliar workspace into a hardcoded `~/aDNA` and launch an agent inside it — the synthetic senior engineer explicitly refuses to run it first `[D coldread]` (H3 confirmed).
- **No troubleshooting section** on `/get-started` (sole "stuck" hit is "get unstuck" in the Try-Claude-Code CTA — the escape hatch is "ask the AI") `[D my grep]`; the documented human question path (`Discussions`) **404s** (R-46 `[D]`, spot-confirmed) — when the quickstart fails, the advertised recovery path is dead. **No zero-install path** (no playground/sandbox/read-only tour) `[D H3]`. No uninstall/reversibility documentation found `[D-absence]`.
- The primary conversion page is **broken-feeling at ≤375px** (F1: ~185px content column) and the `/network` clone command is clipped unreadable/uncopyable on mobile (F2) `[D visual_findings]`. Copy buttons render orphaned below blocks (F12) `[D]`.
- **Binding anchor:** 3 requires "completes as written" (unverified — no run exists) with troubleshooting merely "thin" (here: absent, with a dead escape hatch). Neither 2 nor 3 fits cleanly; the tie-breaker is that a stranded newcomer has no documented recovery path and no zero-commitment alternative → **2**. D3×D7 aggravates: a high-friction first move needs *more* credibility than D7 currently supplies.
- **Strength:** honest, auditable install surface (no curl-pipe-sh, prerequisites named, "nothing executed from the network" — true). **Weakness:** single-path, high-commitment onboarding with no measured TTFS, no troubleshooting, and a 404 where questions were promised to start.

### D4 · Documentation system — **3/5**

- Diátaxis separation is real and visible in the IA: learn/concepts (22) · tutorials (15) · how-to (13) · reference (47) · glossary (25) per the classification census `[D inventory §2]`; reference is complete — the full v2.5 spec is served with RFC 2119 keywords and an out-of-scope fence that impressed the skeptical synthetic reader `[D coldread_senior_engineer]`.
- Versioning is weak: one live version only (no per-version docs), **no per-page last-updated dates** `[D-absence]`, and the freshness signal actively contradicts the corpus — changelog frozen at v0.1.0/Apr-13 while the site ships v2.5 + 74 vaults (F5) `[D visual_findings; spot-confirmed]`.
- Cross-linking inside the docs cluster is partially rotten: **29 broken internal links (11 unique targets) concentrated in `/reference/*`** — stale snake_case/`.md` link conventions; 3/3 sampled targets 404 **live in production** `[D sweep finding 1 + my probes]`. F11 glossary degenerate previews ("AGENTS.md — AGENTS.") `[D]`.
- No "edit this page" path found on any page `[D-absence]`; all 6 sampled key pages read above grade 10 (FKGL 12.05–17.91, stated as an upper bound per the B3 methodology caveat) `[D reading_level]`. The spec is one extreme route — 55,409px desktop / 124,605px mobile (F6) `[D]`.
- **Binding anchor (3):** "Clear types, complete reference, versioning weak" — near-verbatim fit. 4 fails on versioning, tested examples, and migrations-quality (the migration guide itself carries the broken pre-migration links).
- **Strength:** genuine four-type separation + a real, complete, versioned-at-the-artifact-level spec. **Weakness:** freshness machinery (dates, changelog, link hygiene) has visibly stopped tracking the corpus.

### D5 · Visual design system & craft — **3/5**

- One coherent system: "one design system (type, chips, cards, footer) + recurring pixel-art accents"; **dark/light parity clean on every reviewed surface**; home hero is genuinely strong `[D visual_findings]`. A published design-system page exists (footer) `[D instrument §8.1; jsonld census confirms the route]`.
- **Responsive integrity fails**: F1 (S1) — the docs template reserves the collapsed sidebar column at ≤375px, squeezing article text to ~185px (375) / ~130px (320) across the entire docs class including `/get-started`; F2 — `/network` mobile content clipped mid-word, command block off-screen; F3 — hub diagram degrades to "a faint asterisk… effectively invisible" at 320 dark `[D captures cited per finding]`.
- Code-block treatment — the category's most-read component — carries defects: orphaned copy buttons below every block, right-edge clipping of comments with no scroll affordance (F12) `[D]`.
- Template-weight inconsistency: thin letterboxed hubs (`/how` bodyLen 1,120, zero h2; F13) and the ~70%-empty stale changelog vs strong narrative pages `[D]`.
- **Binding anchor (3):** "Tokenised system, mostly conformant, some drift." 4 requires "responsive integrity verified" — it is verified *failing* at mobile for a whole template class; enforcement-in-build exists (371/371 gate suite `[D sweep]`) yet F1 shipped, so the constraint has holes.
- **Strength:** distinctive, consistently applied visual voice with clean theme parity — rare in the cohort. **Weakness:** mobile is a second-class citizen on exactly the templates a newcomer hits first.

### D6 · Content & voice — **2/5**

- Claim audit: 93 claims — 52 verified · 14 verifiable · 19 unsupported · **8 FALSE** `[D claim_register §5.1]`. Aspirational present tense runs through the hero/marketing strata ("lives", "federating", "already steward", "The proof") while the self-descriptive strata are honest — the tense audit shows both coexisting on the same pages `[D claim_register §3]`. That is the instrument's cardinal sin (7.5), live.
- **H13 confirmed at full-sweep scale: 58/74 vault pages (78%) leak internal operational language** — truncated mid-parenthesis ledes ("Web-stack cohort (."), raw enums (`tbd_at_p0` ×3 live on `/vaults`, spot-confirmed), campaign codenames, operator identity ("Mac/stanley; the operator's daily-driver"), internal file paths — including on the homepage registry band ("Renamed from TaskForge.aDNA (Production Tidy pt08", spot-confirmed live) `[D claim_register §4 + my greps]`. The synthetic reader's verdict: "an internal ops dashboard accidentally published… the shop window contradicts the product" `[D coldread]`.
- Register oscillation (H10) confirmed by all three cold-reads — the lyric hero costs orientation; undefined coinage ("context democracy", "code-as-WHAT", personas) violates the one-new-term rule (7.6) `[D]`.
- Real strengths: the honesty register is distinctive and disciplined where applied (credit register: zero-count edge kinds, "59 unconnected… honest topology", horizon boxes, "illustrative personas — not real named adopters") `[D claim_register §5.4]`; agent authorship is disclosed (`/about` personas + `last_edited_by` convention, R-39/R-44 `[D]`); all 6 key pages exceed grade-10 reading level (upper bound) `[D reading_level]`.
- **Binding anchor (2):** "Competent, register breaks common, unsupported claims present" — register breaks are the registry's *default state* (78%), and 19 unsupported + 8 false claims are present. 3's "claims mostly supportable" fails on the falsity concentration in universally-quantified prose.
- **Strength:** the site already knows how to tell the truth about its scale — the honest house style exists and is excellent. **Weakness:** no editorial gate between internal artifacts and public copy; the marketing stratum diverged from the house style.

### D7 · Proof, credibility, trust surface — **2/5** *(highest weight, 14)*

- **8 FALSE claims live** (all spot-confirmed this session): "the spec, the tooling, and the vaults are all public" (R-20 — 73/74 vaults have no public repo); "the open coordination protocol" (R-14 — `lattice-protocol` repo 404/private); Discussions venue (R-46 — 404); issue templates (R-47 — no `.github/` at all); "every commit is signed" on the compliance page (R-84 — no signatures exist; a false control claim to an auditor audience); "every vault… its own persona" ×2 (R-23/R-61 — 7 no-persona + 5 raw `tbd_at_p0`); the registry's sole GitHub proof-link 404s (R-90) `[D claim_register + my probes]`. For archetype E, "overclaim is fatal in a way it is not for A–D" (§1).
- **Zero independent third-party adoption**: the network is operator-federated — H5 confirmed; the four "public-good" initiatives are operator-orbit, only Rare Archive survives a public check and its sole contributor is the operator; `/about` titles this family "**The proof**" (R-62, R-18) `[D]`. Anti-pattern 7.3 partially mitigated by honest surfaces, unmitigated in hero strata.
- Named humans: founder is **first-name-only** ("Stanley — Founding Architect", no surname/affiliation on the cold reader's path) `[D coldread_clinician]`; the Wilhelm Foundation anchor (Helene & Mikk Cederroth) is real and the strongest trust anchor on the site (R-59 `[D][R]`), though its aDNA endorsement is `[I]` from repo-hosting only.
- Genuine strengths: **every load-bearing number is true** (74/16/3/v2.5/MIT/14 edges — zero live-vs-repo drift) `[D claim_register §5.1]`; bus factor honestly disclosed; no fabricated testimonials (exemplary `/adopters` anti-claim); dates displayed even when stale (registry sync 2026-05-24, ~12 weeks); license verified (though the site's own source repo lacks a LICENSE file, R-29). Activity signal harmed by the 4-month-dead changelog.
- **Binding anchor (2):** "Named humans, no independent adoption, claims at strength ceiling" — with the recorded deviation that **8 claims breach the ceiling** (anchor-0's word "overclaimed" applies to them individually; the identity/verifiability floor keeps the dimension off 0). 3 fails on "some verifiable third-party use" — there is none that isn't operator-authored.
- **Strength:** the honesty infrastructure (about page, horizon boxes, date display, true numbers) is the best in-class asset. **Weakness:** falsifiable overclaim sitting on the exact surfaces whose job is trust — compliance, community, the homepage openness claim — each one click from disproof.

### D8 · Community & governance legibility — **2/5**

- The 4-level participation ladder is structurally correct (self-contained L0 value, "recognized by maintainers, never self-appointed") and the **honesty-about-emptiness posture is the site's single strongest credibility move** (§8.1#8–9) `[D]`. Rungs 1–3 have no observable non-founder occupants (R-40) — honestly handled per 7.2's correction.
- **The named venue does not exist**: "questions and ideas start in Discussions" → GitHub Discussions not enabled, 404 (R-46, spot-confirmed). Worse than a dead channel prominently linked — a channel that never existed, named as the entry point `[D]`. No synchronous venue at all (H14); the Fluxer instance at community.adna.network is correctly unlinked — stock-branded, policy-naked (terms/privacy null), zero aDNA identity, no backlink; B7's verdict that linking today is net-negative is sound `[D flux §1, §4]`.
- **No CoC found** in the public repo; no `GOVERNANCE.md`; no named maintainers beyond the founder; no meeting cadence/notes `[D coldread_oss + claim_register R-47 repo-root listing]`. **No numbered proposal process with states/archive** (H15) — for a standard courting external implementers, the largest structural gap vs the MCP reference (§2 #3).
- Genuine differentiators: decisions ARE process artifacts (public ADRs + ratification blocks, R-41 verified `[D]`); **agent participation is explicitly documented** (status, disclosure, ratification requirement — instrument check 12, handled better than any cohort site); `/about` carries a 4-stage decentralization roadmap (succession posture, anchor-5-flavored) `[D visual_findings /about]`.
- **Binding anchor:** 3 requires "ladder + contribution standards + **CoC published; venue exists**" — two of four fail (no CoC, venue 404s). Above 2's letter ("no process artifacts" — there are ADRs) but the failed venue and absent CoC hold it at **2**.
- **Strength:** honesty-about-emptiness + agent-governance disclosure — genuinely novel and correct. **Weakness:** the one concrete promise the governance surface makes to an outsider (where questions start) is false; D8×D9: a ladder whose first rung 404s converts "early project" into broken promise.

### D9 · Contribution funnel — **2/5**

- The advertised funnel is dead on arrival: **both entry points 404** — no Discussions, no issue templates, no `.github/` directory at all (R-46/R-47, spot-confirmed live) `[D]`. Claim register ranks this the #2 highest-stakes finding: "A motivated first contributor — the reader the whole site courts — hits two 404s."
- **No CONTRIBUTING.md** in the repo (checked directly by the OSS cold-read) `[D]`; no `good-first-issue` labels; 1 open issue total; no named reviewers; no response-time norm — the synthetic OSS contributor scores "3/10 likelihood your first PR gets reviewed within a week" `[D coldread_oss]`.
- Site-side, a real written process exists: `/community/community-contribution-standards/` defines 3 paths + 5 quality gates `[D coldread_oss]` — but it is governance-as-prose (D8 failure mode): repo-side instantiation never shipped. Review responsiveness unmeasured (CHAOSS check 6).
- Recognition/AI-policy positives: `last_edited_by` + AAR conventions give a recognition trace `[D]`; the project's own agent-authorship implies AI-assisted PRs are welcome, but no explicit stated policy exists `[D-absence]` — in this category, silence is a signal (check 10).
- **Binding anchor (2):** "Repo accepts PRs; no guidance; no labelled entry points" — repo-side, exactly true (issues enabled, nothing else); the site-side prose keeps it from 0–1, but 3 requires CONTRIBUTING + templates + labelled issues: all three absent.
- **Strength:** the paper process is thoughtful and the quality gates are real. **Weakness:** zero shipped repo-side infrastructure — the funnel's first rung is a 404.

### D10 · Machine legibility & agent-readiness — **3/5**

- Anchor 3 cleared cleanly: **`llms.txt` present, curated, current** (9 hand-annotated links; counts cross-check 4-ways) `[D machine_eye #1, spot-confirmed 200/1,464 B]`; sitemap complete and exact (202 entries, 74 vault match) `[D #5]`; RSS valid though content-stale (1 item, Apr 14) `[D #7]`; text extraction high-fidelity on content pages `[D #14]`.
- Anchor 4 fails 3 of 4 bullets `[D, each spot-confirmed]`: **no `.md` twins** (10/10 404); **no registry JSON/API** (4/4 404 — an agent must scrape HTML or parse slugs from the sitemap); no documented agent entry point — `llms.txt` is **undiscoverable from the site's own HTML** (zero "llms" references site-wide; confirmed zero in home HTML). JSON-LD is present-but-shallow: 199/202 pages, but **0 `Organization` blocks anywhere**, no `sameAs`, no `Dataset`/`SoftwareSourceCode` on vault entities `[D jsonld_census + machine_eye #9]`.
- Aggravators for this specific target (D10×D1: for a context standard, machine legibility IS positioning; failure here refutes the product claim, §3 D10 intent): `llms-full.txt` name overclaims (2 KB index, zero inlined prose) `[D #2]`; **URIs half-stable** — casing hard-404s with no redirect (spot-confirmed) `[D #10]`; **no MCP server** over docs/registry — "close to mandatory" for a context-standard project `[D #11]`; self-conformance is narrated in prose on one deep page (which itself carries the 74-vs-68 internal count mismatch) rather than structurally checkable — the site's own pipeline page discloses it strips vault frontmatter `[D #13–14]`. Partial self-exemption (7.8).
- `robots.txt` is default-permissive, not a deliberate AI-crawler stance `[D #6]`.
- **Binding anchor (3):** "llms.txt + sitemap + RSS + clean extraction" — all four present and working. I concur with B4's own anchor mapping; independently re-verified its load-bearing facts live.
- **Strength:** genuinely curated `llms.txt` + exact sitemap + clean server-rendered extraction. **Weakness:** the flagship instance of an agent-navigable-context standard offers agents no structured path in — no twins, no registry API, no MCP, no advertised entry point.

### D11 · Accessibility — **3/5** *(binary gate: see §4)*

- Automated evidence is uniformly clean: **axe 0 violations across all 32 route-theme runs** (21 dark + 8 light + 3 extra) `[D visual_findings capture stats]`; Lighthouse a11y **100/100 on all 10 runs**; gate suite 371/371 incl. dual-mode axe sweeps `[D sweep rows 2–4]`.
- The 964 html-validate errors are a different instrument: `aria-label-misuse` (245) and `unique-landmark` (238) are ARIA-authoring/markup-correctness violations, `no-implicit-button-type` (203) is functional-markup, `valid-id` (152, digit-leading IDs) is HTML-strictness — **my judgment: none is a per-se WCAG AA critical** (axe's mapped equivalents are best-practice/moderate rules, and axe found zero) `[D sweep finding 5–6; judgment [I]]`.
- Structural positives: skip link, long descriptive alt text, and a keyboard-navigable twin for the graph `[D instrument §8.1]` — but the twin is **partially equivalent** (roster + legend, not the per-edge topology, which lives only in SVG path geometry) `[D machine_eye #14]` — exactly anchor 3's "complex graphics partially covered".
- Manual coverage is absent: no keyboard traversal, screen-reader, zoom, or target-size pass exists in the evidence; automation catches ~⅓ (check 1). **One manual candidate AA failure exists**: F2 — `/network` mobile clips content mid-word with no wrap and no horizontal scroll (command block unreachable) — a probable **WCAG 1.4.10 Reflow** failure outside axe's reach `[D visual_findings F2; judgment [I]]`. F1's ~130px column at 320 degrades but does not lose content (reflows without 2D scroll), so it files as severe usability, not a 1.4.10 failure. No published accessibility statement `[D-absence]`.
- **Binding anchor (3):** "AA on primary templates; complex graphics partially covered." 4 requires screen-reader-tested verification across all templates — not in evidence.
- **Strength:** best-in-cohort automated hygiene plus the graph-twin pattern most sites skip. **Weakness:** everything automation cannot see is unverified, and one manual reflow candidate is already visible.

### D12 · Performance, resilience, ops — **2/5** *(binary gate: see §4)*

- Lab performance is excellent: perf 97–100 all 10 runs, LCP 0.4–0.5s desktop / 2.0–2.3s mobile, CLS ≤0.001, TBT 0ms; build 203 pages/5.85s clean `[D lighthouse_summary + sweep rows 1,4]`. **But these are local-preview numbers; live field p75 (CrUX/RUM) is nowhere in evidence** — the working tree is validated, production is not `[D sweep methodology note]`.
- **Internal 404s exist in production**: 29 broken link instances / 11 unique targets concentrated in `/reference/*` `[D sweep finding 1]` — and my live probes confirmed 3/3 sampled targets 404 on adna.network, so this is not a local-build artifact. Anchor 3's "no internal 404s" bar is factually failed live.
- **Live security-header drift**: `vercel.json` configures CSP/X-Frame-Options/X-Content-Type-Options/Referrer-Policy; production serves **none of the four** (HSTS only — spot-confirmed this session); MDN Observatory **C/50** `[D sweep rows 8a/8b + my probe]`. Anchor 4's "security headers set" fails where it counts.
- No uptime monitoring or public status page in evidence `[D-absence]` (a §2.1 standard-kit item); no redirect map (the 24 mixed-case URLs hard-404 with no redirects); 404 page itself is branded and useful `[D visual_findings]`; RSS/changelog stale (F5). CI gates exist and run (371/371) but evidently exclude link-checking (rot shipped) `[D sweep]`.
- **Binding anchor:** exceeds 2's letter on CWV (lab-green both form factors) but fails 3 on "no internal 404s" (confirmed live) — highest anchor fully cleared = **2**. The raw speed is 4–5 caliber; link rot + header drift + zero monitoring hold the dimension down.
- **Strength:** genuinely fast, near-zero-JS static delivery. **Weakness:** operational integrity — what's configured is not what's deployed, and nothing watches the gap.

---

## 3. Composite

**49.6 / 100** (B×E weights). Read with the breakdown above — the profile is bimodal: structural/craft dimensions (D1/D2/D4/D5/D10/D11) cluster at 3; every trust-adjacent dimension (D3/D6/D7/D8/D9/D12) sits at 2, dragged there by the same root cause — **the gap between what the marketing stratum asserts and what a reader can verify**, plus contribution/ops infrastructure that was promised but never shipped. The site's honesty pattern is its best asset and is unevenly applied; where it is applied, the site outperforms the cohort.

---

## 4. Binary-gate verdicts

| Gate | Verdict | Basis |
|---|---|---|
| **D11 — WCAG AA criticals** | **PASS (automated) — with one manual candidate flagged** | Zero axe violations across 32 route-theme runs; LH a11y 100×10 `[D]`. The html-validate classes (aria-label-misuse 245 · unique-landmark 238 · no-implicit-button-type 203 · valid-id 152 · void-style 105) are markup/ARIA-correctness lint violations, **none of which I judge a WCAG critical** — axe's mapped rules are best-practice tier and axe found nothing. **Caveat:** automation ≈⅓ coverage and no manual pass exists; **F2 (`/network` mobile content clipped with no scroll affordance) is a probable WCAG 1.4.10 Reflow AA failure** `[D capture + [I] judgment]` — treat as gate-relevant and fix within the phase; F1 is severe usability but not a 1.4.10 failure (content reflows, badly). |
| **D12 — CWV red at p75** | **PROVISIONAL PASS (lab) / FIELD UNVERIFIED** | All 10 local-preview runs green (LCP ≤2.3s mobile, CLS ≈0, TBT 0ms) `[D]` — no red anywhere in lab. **No live field p75 data exists in the evidence pack**, so the gate cannot be affirmed for production; given a static near-zero-JS site, field-red is unlikely `[I]` but unproven. Separate live-ops drift rides this gate's altitude without being CWV: 4/4 configured security headers absent in production (Observatory C/50) and internal 404s confirmed live — both S2, both "what's deployed ≠ what's configured". |

---

## 5. Top-8 findings to fix first

| # | Finding | Dim | Sev | Prov | Fix direction |
|---|---|---|---|---|---|
| 1 | **Dead contribution funnel** — `/community` sends questions to Discussions (not enabled, 404) and bugs to "issue templates" (no `.github/` exists). Both entry points 404 for the exact reader the site courts. (R-46/R-47) | D8/D9 | 🔴 S1 | [D] spot-confirmed | Enable Discussions + ship templates/CONTRIBUTING to the image repo, or rewrite the copy to the channels that exist. Hours, not days. |
| 2 | **"The spec, the tooling, and the vaults are all public"** — 73/74 vaults have no public repo; several are governance-marked local-only. One click into the registry disproves the site's central openness claim. (R-20) | D7 | 🔴 S1 | [D] spot-confirmed | Scope the sentence to what is true (spec + image public; registry lists vaults, most private-by-design) — the honest framing already exists elsewhere on-site. |
| 3 | **"Built on the Lattice Protocol (the open coordination protocol underneath)"** — the protocol repos are private (404 to readers), publish counsel-gated. The same page's own "opening progressively" phrasing is the honest form. (R-14) | D7/D1 | 🔴 S1 | [D] spot-confirmed | Harmonize all instances to "opening progressively"; drop the unqualified "open". |
| 4 | **`/compliance`: "every commit is signed and dated"** — no commit signatures exist. A false control claim on the one page whose entire job is auditor trust. (R-84) | D7/D6 | 🔴 S1 | [D] spot-confirmed | Change to "attributed and dated" (true), or implement signing before re-asserting. |
| 5 | **Registry editorial gate** — 58/74 vault pages leak internal ops language (truncated mid-parenthesis ledes, raw `tbd_at_p0` enums, codenames, operator identity, internal paths), incl. the homepage band; the same defect falsifies "every vault… its own persona" (R-23/R-61) and includes the registry's sole GitHub proof-link 404ing (R-90). (H13 annex) | D6/D7 | 🔴 S1 family | [D] spot-confirmed live | Fix at the generator: public-copy field distinct from internal notes; suppress-or-fill placeholder enums; drop/replace the dead link. One pipeline fix clears ~60 pages + 3 FALSE claims. |
| 6 | **F1 — docs template mobile squeeze**: at ≤375px the entire docs class (incl. `/get-started`, the primary conversion page) renders text in a ~130–185px column with ~44% dead space. | D5/D3 | 🔴 S1 | [D] captures | Collapse the reserved sidebar grid column at the mobile breakpoint. One CSS fix, whole template class. |
| 7 | **F2 — `/network` mobile clipping**: the "Run a node" steps and `git clone` command overflow the viewport, cut mid-word, no wrap/scroll — the quickstart is unreadable and uncopyable on mobile; probable WCAG 1.4.10 Reflow failure (gate-relevant per §4). | D11/D5/D3 | 🟠 S2 (gate-relevant) | [D] capture | Allow wrap / `overflow-x:auto` on the step column and command block. |
| 8 | **Live security-header drift**: `vercel.json` configures CSP/XFO/XCTO/Referrer-Policy; production serves none (HSTS only); Observatory C/50. Config-vs-deployed integrity failure on a project selling governance discipline. | D12/D7 | 🟠 S2 | [D] spot-confirmed | Diagnose the deploy path (static output + vercel.json headers wiring), redeploy, then add a header probe to CI so drift can't ship silently. |

**Runners-up (schedule within campaign):** 29 broken internal links live in `/reference/*` (3/3 sampled 404 in production — S2, D2/D4/D12) · stale changelog + RSS (single Apr-13 entry vs a v2.5/74-vault site — S2, D7 activity signal) · URL casing: 24 mixed-case vault slugs hard-404 with no redirect (S2, D2/D10) · `llms-full.txt` rename or genuinely fill + link `llms.txt` from the site HTML (S3, D10) · registry JSON endpoint (S3, D10 — `vaults.json` exists at build time; serve it) · founder surname/affiliation one click from home (S3, D7).

---

## 6. Reviewer-B independence + evidence notes

- **Not consulted:** reviewer A's scoresheet, any reconciliation artifact, campaign charter/mission drafts, orientation artifacts. The `scoring/` directory was listed only to confirm the output path.
- **Pack vs live:** no disagreement found in 19 spot-checks; the evidence pack at `d58ea13` is current as of 2026-08-16.
- **Cold-read caveat (binding on D1):** all three cold-reads and the B4 second reader are SYNTHETIC (disclosed). They are best-case readers — an AI reading extracted text does not model human attention, fatigue, or first-screen bounce. **D1 anchor 5 is unawardable, and anchor 4's "correct summary in ~30s" is unverifiable, until the §6 Step-5 human panel runs.** D3 likewise lacks its Step-6 TTFS run; both dimensions were scored on the evidence that exists, flagged where the protocol's own instrument is missing.
- **Archetype adjudication used:** hero/mission surfaces judged as E (register acceptable, overclaim fatal — hence D7's weight bearing the FALSE claims), onboarding surfaces judged as A (TTFS discipline binding — hence D3 at 2), governance/registry surfaces judged as B (MCP reference standard — hence D8's proposal-process gap).

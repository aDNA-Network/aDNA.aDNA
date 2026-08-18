---
type: doctrine
created: 2026-08-17
updated: 2026-08-17
status: active
last_edited_by: agent_rosetta
agent_authored: true
tags: [doctrine, web_quality, iii, inspect, introspect, improve, accessibility, performance, machine_legibility, haussmann]
---

# Doctrine — Web Quality Assessment (workspace-canonical)

> **Status:** active · authored under Operation HAUSSMANN as the campaign's standing assessment method.
> Sibling to `doctrine_visual_inspection.md` (which governs *how to render a surface*); this doctrine
> governs **what to measure, in what order, how to adjudicate the results, and what an agent is allowed
> to conclude from them**. Where the two overlap, `doctrine_visual_inspection.md` is authoritative on
> tooling tiers and this file is authoritative on judgment.
>
> **Motivating case (Operation HAUSSMANN Phase B, 2026-08-16).** One sweep returned *Lighthouse
> accessibility 100/100 on all ten runs, axe 371/371 gates green* — and, on the same build,
> **964 html-validate errors across 203 of 203 pages**. Both numbers were correct. An agent that
> reports either one alone has misled its operator. §4 exists because of that run.

**Scope.** Any agent session that assesses, reviews, audits, scores, or improves a rendered web surface
owned by this fleet — a site, a dashboard, an ops-center, an ISS gate, a docs corpus, a registry
projection. Applies to `adna.network` first and to any `WebForge`/`Astro` consumer by inheritance.

---

## §1 — The loop: Inspect → Introspect → Improve

The III framework (`III.aDNA`) supplies three beats. Agents reliably execute the first and the third and
**skip the second**. The skipped beat is where the errors live.

| Beat | The question | The failure when skipped |
|---|---|---|
| **Inspect** | *What do the instruments say?* | — (agents rarely skip this) |
| **Introspect** | *What did the instruments **not** see, where do they **disagree**, and what did **I** get wrong?* | Score theater: a clean number reported as a clean surface |
| **Improve** | *What single change moves the true defect, and how will I prove it moved?* | Churn: changes that move a score without moving the defect |

**Binding rule.** No finding may be written, and no change may be proposed, until the Introspect beat has
been executed and recorded. An assessment artifact without an explicit "what this run could not see"
section is **incomplete and inadmissible** at any HAUSSMANN gate.

---

## §2 — The instrument register

Each row: what it measures, **what it structurally cannot measure**, and the VITRUVIUS dimension it
serves. An instrument used outside its competence produces a confident wrong answer.

| # | Instrument | Measures | Structurally blind to | VITRUVIUS |
|---|---|---|---|---|
| I1 | `astro build` | Build integrity, page count, build-time errors | Anything about the rendered result | D12 |
| I2 | Playwright gate suite (`npm run test:gates`) | Codified regressions — the fleet's accumulated "never again" list | Any defect nobody has yet written a gate for | all (floor) |
| I3 | `@axe-core/playwright` / axe-core 4.12 | ~57% of WCAG issues, **zero false positives by design** `[R]` | The other ~43%: focus order sense, alt-text *quality*, keyboard traps in custom widgets, reading order, meaningful sequence, cognitive load | D11 |
| I4 | Lighthouse (a11y category) | A **subset** of axe rules, scored and weighted | Everything axe misses, plus everything axe catches that Lighthouse's subset omits. **A 100 here is not an accessibility claim** | D11 |
| I5 | Lighthouse (perf/BP/SEO) | Lab CWV proxies, best-practice heuristics, crawlable-metadata heuristics | Real-user performance; SEO ≠ discoverability; BP ≠ security posture | D12 |
| I6 | Field CWV (CrUX / Speed Insights) | What actual users experienced, p75 | Pages below the traffic threshold; brand-new routes | D12 |
| I7 | `html-validate` | Markup correctness + ARIA-usage correctness against a strict ruleset | Whether the incorrect markup harms a real user (it often does not) | D11, D5 |
| I8 | `linkinator` / link crawl | Reachability of every internal + external href | Whether the *destination* is the right page; anchor-fragment validity | D2, D12 |
| I9 | `visual_capture.mjs` (T0, `doctrine_visual_inspection.md`) | Rendered truth at 6 viewports × 2 themes, console errors, load ms | Motion, interaction, focus rings mid-traversal, anything below the fold of a *cropped* capture | D5, D11 |
| I10 | Machine-eye pass (JS-disabled fetch + artifact probe) | What an agent-reader receives: extracted text, `llms.txt`, `.md` twins, sitemap, robots, RSS, JSON-LD, registry JSON | Whether the machine surface is *useful* — only that it exists | D10 |
| I11 | Claim register + editorial gate | Every factual/quantitative assertion, classified verified / verifiable / unsupported / **false**; aspirational present tense; internal-language leaks | Claims made in images, diagrams, alt text, or OG cards unless explicitly swept | D6, D7 |
| I12 | Persona ranker (16 personas) + cold-reader panel | Whether a *reader* succeeds — comprehension, orientation, trust | Nothing an instrument can substitute for. **Synthetic personas are `[D-syn]`, never `[D]`** | D1, D3 |
| I13 | Security-header + Observatory scan | Live production header posture | Config intent — **scan live, never read `vercel.json` and call it shipped** | D12, D7 |
| I14 | Reading-level (FKGL) | Prose density, directionally | Precision, whenever nav/aside chrome is inside the extracted region | D6 |

**Register law.** Any claim in a finding must name the instrument that produced it (I-number or tool
name) and carry a provenance tag. "The site is accessible" names no instrument and is inadmissible.

---

## §3 — Order of operations

Order is not stylistic; each step's validity depends on the prior one.

```
1. BUILD           npx astro build              → a known artifact. Never assess a stale dist/.
2. GATES           npm run test:gates           → regression floor. If red, STOP: assess nothing
                                                  until the floor is green or the failure is
                                                  characterized. A sweep over a broken build
                                                  measures the breakage, not the site.
3. STATIC          html-validate, JSON-LD census, link crawl   (against dist/, cheap, parallel-safe)
4. RENDERED        visual_capture.mjs T0 × viewports × themes, with --axe
                     ↳ run TWICE — --axe covers themes[0] only; dark and light are different surfaces
5. LIGHTHOUSE      5 representative routes × {mobile, desktop}
                     ↳ NEVER co-run with the gate preview server (port contention → invalid numbers)
                     ↳ port 4321 is the site preview; WebForge claims 4321 for its own archetype —
                       never co-run against WebForge suites
6. MACHINE-EYE     JS-disabled fetch + artifact probe + content negotiation
7. LIVE            security headers, Observatory, field CWV      (production only — see §4.3)
8. HUMAN/PERSONA   ranker, cold-read, TTFS, contribution run     (last: they cost the most)
```

**Representative-route selection** (step 5) is a judgment call that must be *recorded*: pick one route
per template class, always including the heaviest (for `adna.network`: `/`, `/get-started`,
`/learn/what-is-adna`, `/vaults`, `/vaults/graph`). Changing the set breaks comparability with the
baseline — if you change it, say so and re-baseline.

---

## §4 — Adjudication law (when instruments disagree)

Disagreement is the normal case, not an anomaly. Resolve it by these rules, in order.

### 4.1 — Different rulesets are not a contradiction

axe measures *WCAG rule violations*. html-validate measures *markup and ARIA correctness*. A surface can
be axe-clean and html-validate-catastrophic simultaneously, and both reports are true. **Never resolve
the tension by discarding one instrument.** Report both, then classify each html-validate class by
*user-observable harm*:

| Class | Example (HAUSSMANN Phase B) | Harm | Disposition |
|---|---|---|---|
| **Harms a real user** | `unique-landmark` ×238 — landmark regions without unique accessible names; screen-reader users cannot distinguish them | Real, unmeasured by axe | S2, fix |
| **Harms an agent/parser** | `valid-id` ×152 — anchor IDs starting with a digit | Fragment links + CSS selectors break | S3, fix |
| **Cosmetic correctness** | `void-style` ×105 — `<hr/>` instead of `<hr>` | None | S4, batch |

The number to report is never "964 errors." It is **"964 errors across 8 classes; 238 harm users, 152
harm parsers, 105 are cosmetic"** — the digest, not the count.

### 4.2 — Lab and field are different questions

Lighthouse against a local preview validates *the working tree*. Field CWV validates *what users got*.
They will diverge and neither is wrong. **Never state a lab number as a user-experience claim.** Both
appear in the record, each labelled with what it measured and against which origin.

### 4.3 — Configuration is not deployment

The Phase-B cautionary instance: `site/vercel.json` configured CSP, X-Frame-Options,
X-Content-Type-Options, and Referrer-Policy; live production sent **none of the four**. An agent that
read the config file would have reported a secure site.

**Law: every claim about production is verified against production.** Headers, redirects, canonical
tags, `llms.txt`, sitemap contents, and deployed page counts are all live-verified or unclaimed.

### 4.4 — The instrument-of-record rule

When two instruments in the same competence disagree (two a11y scanners, two link crawlers), name one as
instrument-of-record for that dimension, record the other's number as a cross-check, and **record the
delta as a finding about the instruments** — not as a fact about the site.

### 4.5 — Human beats machine, and says why

A persona-ranker score or cold-reader verdict overrides any automated score in D1/D3/D6. When it does,
the record states which instrument was overridden and on what evidence. Synthetic (agent) readers are
`[D-syn]` — a legitimate pre-screen, never a substitute for the human panel at P0.1/P5.1.

---

## §5 — The coverage-honesty law

> **Automation catches roughly 57% of WCAG issues** `[R — Deque, axe-core]`. It catches **0%** of
> positioning failures, **0%** of trust failures, and **0%** of the question "is this claim true."

Therefore:

1. **No assessment may report an automated score as a conformance claim.** "Lighthouse a11y 100" is
   written as *"Lighthouse a11y 100/100 — a subset of axe rules; manual keyboard and screen-reader
   passes not yet run."* The caveat travels with the number, permanently, in every downstream citation.
2. **Every automated pass owes a manual complement**, named and scheduled: keyboard-only traversal,
   screen-reader pass (virtual-screen-reader lane + operator AT session), focus-order review, contrast
   check on the usual failure sites — code blocks, syntax highlighting, diagram strokes, muted metadata,
   and the registry.
3. **axe "incomplete" results are work, not noise.** They are the engine declaring uncertainty. Each one
   is triaged to a human verdict or an explicit deferral with a reason.
4. **A dimension with no instrument gets no score.** Write `unscored — no instrument` rather than
   inferring. An inferred score is an `[A]` assumption wearing a number's clothes.

---

## §6 — Evidence contract

**Admissibility.** A visual finding without a capture is inadmissible. A performance finding without raw
JSON is inadmissible. A claim finding without a register row is inadmissible. An untagged assertion is
inadmissible.

**Provenance tags** (VITRUVIUS §0, campaign CLAUDE.md §Provenance): `[D]` directly observed · `[I]`
inferred · `[R]` third-party reported · `[A]` assumption · `[D-syn]` directly observed output of a
*disclosed synthetic* instrument.

**Layout** (campaign-relative, `evidence/`):

```
evidence/
├── inventory/        page_inventory.csv · link_graph.json · inventory_summary.md
├── sweep/            sweep_summary.md · lighthouse_summary.md · jsonld_census.md
│   └── raw/          gitignored: gates · htmlvalidate · linkinator · lighthouse/*.json · headers
├── captures_raw/     <surface>__<viewport>__<theme>.png  (full set; gitignored if heavy)
├── captures_curated/ the subset actually cited + visual_findings.md
├── machine_eye/      machine_eye.md + raw/ (llms.txt, sitemap, robots, rss, md_twins, negotiation)
├── claims/           claim_register.md · claims_raw.json
├── coldreads/        one file per reader; SYNTHETIC in the filename when synthetic
├── cohort/           scoresheet_<scorer>_<exemplar>.md
└── scoring/          scoresheet_<scorer>_<target>.md · reconciliation.md
```

**Naming**: `<surface>__<viewport>__<theme>.png` — double underscore separators, canonical viewport names
**read from `scripts/viewports.json`, never transcribed** (KW-14). As of `[D] 2026-08-17` that file
defines six: `mobile` 320 · `mobile-lg` 375 · `tablet` 768 · `laptop-sm` 900 · `laptop` 1024 ·
`desktop` 1440. Deviating breaks every downstream digest.

> **⚠ Live drift, recorded 2026-08-17 `[D]`.** `doctrine_visual_inspection.md` §3 currently names the
> set as *"laptop 900(h) / desktop 1024 / wide 1440"* — three of six rows disagree with the harness, and
> `wide` does not exist. The harness is the source of truth; the prose is stale. This is exactly the
> transcription failure KW-14 names. **Correcting §3 of that doctrine is an owed follow-up** (W9).

**Raw output is retained, gitignored, and referenced by path.** A summary whose raw output was discarded
cannot be re-adjudicated and decays to `[R]` — a report of what an earlier agent said.

**Finding record schema** — VITRUVIUS Appendix B:
`id · dimension · severity · provenance · location{url,selector,viewport,capture} · observation ·
why_it_matters · recommendation · effort · owner · verification · status`.

---

## §7 — The red-test law

> **A green that cannot go red is not evidence.**

Every check — gate, assertion, editorial rule, visual baseline, CI step — is **red-tested at birth**:
introduce the defect it claims to catch, observe the failure, revert. Record the red-test in the same
commit that adds the check. A check shipped without a red-test is recorded as `unverified` and may not
be cited as passing.

Corollaries:

- **Coverage anchors must be grep-verifiable.** "20 components conform" requires the list of 20 and the
  command that proves it.
- **Fixtures derive from build snapshots, never pin live-data literals** (WebForge KW-8 / FR-K). A test
  that hardcodes "74 vaults" fails the day the registry is right.
- **The same-diff gate law** (ADR-057): any commit changing a route, slug, or rendered count updates
  every gate, audit spec, and fixture that hardcodes it **in the same commit**.

---

## §8 — Instrument output → severity

Mechanical mapping. Deviations are argued in writing, in the finding.

| Condition | Severity | Response |
|---|---|---|
| Claim register entry classified **false** | 🔴 **S1** | Blocks launch. Fix before any promotion |
| axe/Lighthouse a11y **critical** on a primary flow | 🔴 **S1** | Blocks the phase gate regardless of weighted score |
| Broken primary flow · advertised channel that 404s · named party without verifiable consent | 🔴 **S1** | Halt-and-report (directive §7) |
| Machine-legibility artifact absent on a context-standard site (self-exemption, VITRUVIUS 7.8) | 🔴 **S1** | Phase-3 blocker |
| Live production drift from configured intent (headers, redirects, canonical) | 🟠 **S2** | Fix within phase |
| Internal 404 · html-validate class with user-observable harm · mobile layout break | 🟠 **S2** | Fix within phase |
| CWV red at p75 (LCP >2.5s · INP >200ms · CLS >0.1) | 🟠 **S2** + **binding gate** | Blocks sign-off even at low weight |
| html-validate class harming parsers · missing per-page dates · stale changelog | 🟡 **S3** | Schedule in campaign |
| Cosmetic markup class · icon-weight drift · single-page polish | 🟢 **S4** | Backlog |

> **D11 and D12 carry low weights but binary gates.** Any WCAG AA critical or any CWV red at p75 blocks
> phase sign-off regardless of composite score. Low weight ≠ optional.

---

## §9 — Introspect: the agent's self-audit

Run **before** writing findings. Answer all seven in the artifact; "none" is an acceptable answer only
when it is true.

1. **What did I not run?** Name every instrument in §2 that did not execute this pass, and why.
2. **What did I run against the wrong target?** Local preview vs production; stale `dist/`; a cached
   response; a capture predating the last build.
3. **Where do my instruments disagree?** List every pair, adjudicate per §4, and state the residual.
4. **What am I inferring?** Every `[I]` and `[A]` in my notes — can any be promoted to `[D]` with one
   more command? Run it.
5. **What would a hostile reader check first?** Check it now, before they do. (VITRUVIUS §7.3: finding
   it themselves costs you the account.)
6. **What am I about to recommend that increases apparent scale without increasing verifiable scale?**
   Strike it. (Directive §8.)
7. **What did the previous pass find that I have not re-verified?** Genesis evidence ages;
   `grounded_in:` is re-verified on disk at execution, never assumed.

**Output**: a `## What this pass could not see` section in every assessment artifact. Gate reviewers read
this section first.

---

## §10 — Improve: the change contract

1. **One logical change per target.** Keep diffs reviewable; a bundled diff cannot be attributed to a
   score movement.
2. **Re-measure with the identical suite** — same routes, same viewports, same flags, same origin. A
   before/after across different suites is not a measurement.
3. **Direction, not just delta.** The specific target must move the right way *and* no category may
   regress more than 1 point. A regression is fixed before the cycle records, or the improvement is
   reverted and recorded as blocked.
4. **Every aesthetic change states its accessibility consequence** in the same breath. Aesthetic
   recommendations without a stated a11y consequence are prohibited (directive §8).
5. **Claims move down, never up.** If the fix is "make the copy match reality," reality is the anchor.
6. **Patterns go home.** A pattern this surface needed that `WebForge.aDNA` lacks is authored *back* into
   WebForge (`patterns_to_author:`), never forked locally. The site is a consumer of the pattern
   library, never a fork of it.
7. **Log the cycle.** Every measurement event appends to the III series
   (`what/measurement/iii_results/`, continuing at cycle 166) with before/after, changes, validation, and
   carry-forward.

---

## §11 — Binding thresholds

Numbers, not adjectives. Sources: `[R]` web.dev Core Web Vitals · `[R]` W3C WCAG 2.2 · `[R]` Deque
axe-core · this vault's own gate history `[D]`.

| Measure | Bar | Gate class |
|---|---|---|
| LCP (field, p75, mobile **and** desktop separately) | ≤ 2.5 s | binding |
| INP (field, p75) — replaced FID in 2024 | ≤ 200 ms | binding |
| CLS (field, p75) | ≤ 0.1 | binding |
| Lighthouse perf / a11y / BP / SEO (lab, representative routes) | ≥ 95, no category regressing >1 pt | advisory + regression gate |
| axe criticals | **0** | binding |
| axe "incomplete" | each triaged to verdict or logged deferral | binding |
| Internal 404s | **0** | binding |
| Contrast | 4.5:1 body · 3:1 large text and UI components — **including code blocks, syntax highlighting, diagram strokes, muted metadata, registry** | binding |
| Target size (WCAG 2.2 SC 2.5.8, AA) | ≥ 24×24 CSS px; ≥ 44 px touch | binding |
| Focus Not Obscured (SC 2.4.11, AA) · Dragging Movements (SC 2.5.7, AA) · Consistent Help (3.2.6, A) · Redundant Entry (3.3.7, A) · Accessible Authentication (3.3.8, AA) | verified manually — **not automatable** | binding, manual |
| Zoom 200% and 400% | no horizontal scroll, no content loss | binding |
| `prefers-reduced-motion` | respected; no layout shift from motion | binding |
| Body measure | 60–80 characters | advisory |
| Type scale | ≤ 7 distinct sizes in use | advisory |
| Primary nav | ≤ 8 top-level items; overflow menus are a symptom, not a solution | advisory |
| Depth to any high-value page | ≤ 2 clicks | binding |
| TTFS (clean machine, operator who did not build it) | < 10 min | binding |
| Reading level (FKGL, `<main>` prose) | ≤ grade 10 target — **upper-bound measurement, see §14** | advisory |
| Persona ranker | ≥ 4.0 per redesigned surface; ≥ 4.95 capstone | binding at gate |
| Cold-reader panel | ≥ 80% of ≥5 readers state what it is / who for / one thing it is not, ≤30 s unaided | binding at gate |
| Machine legibility | `llms.txt` curated + linked · `.md` twins resolve · registry JSON · JSON-LD incl. `Organization` with `sameAs` · documented agent entry point · MCP server over the corpus | binding at P3 |

> **WCAG 2.2 note.** 2.2 adds nine SC over 2.1 (2.4.11/2.4.12/2.4.13, 2.5.7/2.5.8, 3.2.6, 3.3.7,
> 3.3.8/3.3.9) and **removes 4.1.1 Parsing**. Five of the six new A/AA criteria are wholly or largely
> manual. A scanner reporting "WCAG 2.2 AA pass" is reporting on the automatable minority. `[R]` W3C.

---

## §12 — Anti-patterns

| # | Anti-pattern | Tell | Correction |
|---|---|---|---|
| 12.1 | **Score theater** | A composite reported without its per-dimension breakdown | A composite without its breakdown is a lie by compression. Always ship both |
| 12.2 | **Single-instrument confidence** | "Lighthouse says 100, we're accessible" | §5. Name the ceiling with the number, every time |
| 12.3 | **Capture-free visual claims** | "The mobile layout looks fine" | Inadmissible. Capture or retract |
| 12.4 | **Config-as-deployment** | Reading `vercel.json` and reporting shipped headers | §4.3. Verify live |
| 12.5 | **Stale-artifact assessment** | Crawling a `dist/` from before the last edit | Build first, always (§3 step 1) |
| 12.6 | **Threshold drift** | Quietly moving a bar to make a gate pass | Bars live in one file, read never transcribed (WebForge KW-14); changes are ADR-visible |
| 12.7 | **Live-data literals in tests** | `expect(count).toBe(74)` | Derive from the build snapshot (KW-8/FR-K) |
| 12.8 | **Self-certification** | The agent that built the surface scores the surface | Reviewer independence: builder never self-certifies; scoring uses two isolated scorers + reconciliation |
| 12.9 | **Synthetic passed off as human** | A persona transcript cited as `[D]` | `[D-syn]`. Pre-screen only; the human panel is not optional |
| 12.10 | **The count without the digest** | "964 errors" | Class it by harm (§4.1) or say nothing |
| 12.11 | **Improving the metric, not the surface** | Score moved, defect intact | §10.3. Name the user-observable change |
| 12.12 | **Aesthetic recommendation with no a11y consequence stated** | "Lower the contrast on metadata" | Prohibited (directive §8) |

---

## §13 — Two-scorer protocol

For any VITRUVIUS scoring event (baseline · mid-campaign · launch):

1. **Two scorers work in isolation** — no shared notes, no visibility of the other's scoresheet, each
   working from the same evidence pack.
2. **Reconcile in writing.** Record every disagreement and its resolution.
3. **Unresolved disagreement is itself a finding** about ambiguity in the site (VITRUVIUS §6 Step 10) —
   or in the instrument, in which case the anchor gets sharpened and the instrument version bumps.
4. **Variance bar for instrument calibration**: ≤1 point on ≥10 of 12 dimensions. Wider variance means
   the anchors are ambiguous — fix the anchors before trusting the score.
5. **Always score two cohort exemplars on the same instrument** in the same event. Relative position is
   more informative than absolute score. (HAUSSMANN baseline: target 51.6 · MCP ≈83 · Mastra ≈65.)

---

## §14 — Known instrument weaknesses (carry these forward)

| ID | Instrument | Weakness | Mitigation |
|---|---|---|---|
| W1 | `reading_level.mjs` | Markdown-oriented stripper; on `.astro` pages text comes from built HTML `<main>`, and nav/aside chrome inside `<main>` is not removed → unpunctuated link runs inflate words-per-sentence | Treat FKGL as an **upper bound**; use for direction only; a real DOM-parsed extractor is owed |
| W2 | `visual_capture.mjs --axe` | Covers `themes[0]` only | Run twice, once per theme. Dark and light are different surfaces |
| W3 | Lighthouse a11y | Subset of axe rules, weighted | Never the a11y instrument-of-record; axe is |
| W4 | MDN Observatory v2 API | POST `/api/v2/scan` is summary-only; per-test breakdown exists only on the human page. Host is `observatory-api.mdn.mozilla.**net**` (`.org` NXDOMAINs) | Record grade+score; fetch detail manually when it matters |
| W5 | linkinator | Reachability only — a 200 to the wrong page passes | Pair with an anchor/fragment check and a spot content assertion |
| W6 | Field CWV | Needs traffic volume; new routes have no data | State "insufficient field data" rather than substituting lab numbers |
| W7 | Synthetic personas | Agreeable; under-report confusion and over-report comprehension | `[D-syn]`; calibrate against the human panel at P0.1 and re-check at P5.1 |
| W8 | Gate suite | Only catches what someone wrote a gate for | Every new defect class found by hand ends the session as a new gate, red-tested |
| W9 | `doctrine_visual_inspection.md` §3 viewport prose | Disagrees with `scripts/viewports.json` on 3 of 6 rows; names a `wide` viewport that does not exist `[D] 2026-08-17` | **Read the JSON, never the prose** (KW-14). Correcting §3 is an owed follow-up — file it, don't silently diverge |

---

## §15 — Bindings and consumers

**Binds** (a doctrine nobody inherits does not bind): `campaign_haussmann` (campaign `CLAUDE.md`
convention 13) · every `mission_haussmann_p*` doing assessment or verification · `skill_web_quality_sweep`
· `skill_iii_cycle` (Step 1 and Step 5 measurement suites) · `skill_site_design_pipeline` ·
`skill_reference_inspection` · `skill_decadal_aar`.

**Cites, does not re-specify**: tooling tiers → `doctrine_visual_inspection.md` · secrets → 
`doctrine_credential_handling.md` · mutation safety → `doctrine_safe_mutations.md` · gate bars → 
WebForge `lighthouse_profiles.json` (**read, never transcribe** — KW-14).

**If your vault renders or inspects a web surface and its `CLAUDE.md` does not cite this file, that is
the gap.**

## Related

- [[doctrine_visual_inspection]] — tool tiers T0/T1/T2, the capture harness, viewports
- [[skill_web_quality_sweep]] — the executable runbook for this doctrine
- [[context_web_quality_toolkit]] — per-instrument reference: what it is, what it costs, how it lies
- [[adr_057_measurement_regime]] — the four-instrument regime + same-diff gate law
- `directives/OPERATION_VITRUVIUS_review_instrument.md` — D1–D12, severities, anti-patterns
- `III.aDNA/what/modules/module_iii_inspect_visual.md` — the framework-agnostic Inspect modality
- `WebForge.aDNA/how/skills/skill_quality_validation.md` — the reference harness this consumes

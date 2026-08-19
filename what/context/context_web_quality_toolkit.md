---
type: context
context_type: reference
title: "Web quality instrument toolkit — what each tool measures, what it costs, and how it lies"
created: 2026-08-17
updated: 2026-08-19
status: active
last_edited_by: agent_rosetta
agent_authored: true
campaign_id: campaign_haussmann
tags: [context, quality, tooling, accessibility, performance, machine_legibility, haussmann]
---

# Web quality instrument toolkit

> Reference companion to [[doctrine_web_quality_assessment]] (judgment) and [[skill_web_quality_sweep]]
> (procedure). This file is the **parts catalogue**: per instrument — what it actually measures, its
> blind spot, its known trap, and the one line an agent must carry whenever it cites the number.
>
> Every external fact here is tagged `[R]` with its source; every fleet-local fact is `[D]` from the
> HAUSSMANN Phase-B sweep (2026-08-16) unless noted.

---

## 1 · Accessibility

### axe-core (Deque) — the a11y instrument-of-record

| | |
|---|---|
| **Measures** | WCAG 2.0 / 2.1 / 2.2 rule violations at A, AA, AAA, plus best-practice rules `[R]` |
| **Coverage** | **~57% of WCAG issues** automatically, on average `[R]` |
| **False positives** | Designed for **zero** — a violation is a violation `[R]` |
| **Blind spot** | Focus *order* sense · alt-text *quality* · keyboard traps in custom widgets · reading order · meaningful sequence · cognitive load · every WCAG 2.2 criterion that requires a human judgment of *equivalence* |
| **Trap** | The `incomplete` bucket is silently dropped by most integrations. It is the engine saying *"a human must look"* — those are work items, not noise |
| **Carry-line** | *"axe: N violations, M incomplete — ~57% automated ceiling; manual keyboard + AT passes outstanding"* |
| **In this vault** | `@axe-core/playwright` wired into the gate suite and into `visual_capture.mjs --axe`. Version line: axe-core 4.12.x `[R]` |

### Lighthouse (accessibility category) — a subset, scored

Runs a **subset** of axe rules and weights them into a 0–100 score. A 100 means *"no violations among the
rules Lighthouse chose to run"* — a strictly weaker statement than an axe pass, which is itself a strictly
weaker statement than WCAG conformance. **Never the instrument-of-record.** Useful as a cheap
per-route regression signal and for its perf/BP/SEO categories.

**Phase-B `[D]`:** a11y 100/100 on all 10 runs — while html-validate found 964 markup/ARIA errors on the
same build, 238 of them landmark-naming issues that harm screen-reader users. The two numbers coexist.

### html-validate — markup and ARIA correctness

Not a WCAG scanner. It checks that the markup is *correct*, which is upstream of, and only partially
overlapping with, whether it is *accessible*. Its value is catching the class of error that axe passes
over because no WCAG rule names it.

**Phase-B class breakdown `[D]`** — the model for how to digest this tool:

| Class | Count | Harm | Severity |
|---|---|---|---|
| `aria-label-misuse` | 245 | ARIA applied where the rule forbids it — mixed; triage per site | S3 |
| `unique-landmark` | 238 | Landmarks without unique accessible names — **real user harm**, invisible to axe | S2 |
| `no-implicit-button-type` | 203 | ~1/page → a single shared component; trivial fix, wide blast radius | S3 |
| `valid-id` | 152 | IDs starting with a digit → fragment links and CSS selectors break | S3 |
| `void-style` | 105 | `<hr/>` XML style | cosmetic, S4 |
| `no-redundant-role` / `prefer-native-element` / `long-title` | 21 | minor | S4 |

**Carry-line:** never "964 errors" — always the harm digest.

### pa11y

HTML_CodeSniffer or axe under the hood, CLI-shaped, easy to wire into CI. Overlaps heavily with axe;
adds value chiefly as a *second opinion* to expose ruleset disagreement (doctrine §4.4). Not needed
where axe is already in the gate suite; add it only if the reconciliation delta is itself informative.

### The manual complement — non-negotiable

WCAG 2.2 added nine success criteria over 2.1 and removed 4.1.1 Parsing `[R]` W3C:

| SC | Name | Level | Automatable? |
|---|---|---|---|
| 2.4.11 | Focus Not Obscured (Minimum) | **AA** | No — needs traversal with sticky chrome |
| 2.4.12 | Focus Not Obscured (Enhanced) | AAA | No |
| 2.4.13 | Focus Appearance | AAA | Partial |
| 2.5.7 | Dragging Movements | **AA** | No — needs an alternative-path judgment |
| 2.5.8 | Target Size (Minimum) ≥24×24 CSS px | **AA** | Partial — geometry yes, exceptions no |
| 3.2.6 | Consistent Help | **A** | No |
| 3.3.7 | Redundant Entry | **A** | No |
| 3.3.8 | Accessible Authentication (Minimum) | **AA** | No |
| 3.3.9 | Accessible Authentication (Enhanced) | AAA | No |

**Consequence:** a scanner reporting "WCAG 2.2 AA pass" is reporting on the automatable minority of the
2.2 delta. The manual battery — keyboard-only traversal of every primary flow, screen-reader pass
(virtual-screen-reader lane in CI + an operator AT session), focus-order review, contrast on the usual
failure sites, zoom to 200%/400%, `prefers-reduced-motion` — is part of the conformance claim, not an
optional extra.

**Contrast failure sites, in the order they actually fail:** code blocks · syntax-highlighting tokens ·
diagram strokes · muted metadata text · registry/catalogue chrome · placeholder text · focus rings on
tinted backgrounds.

**Complex graphics** need *both* a text alternative **and**, for interactive graphs, a keyboard-navigable
twin — and the twin must be verified **equivalent**, not a partial listing. (`adna.network` already ships
this pattern at `/vaults/graph` `[D]` — most of the cohort does not. Protect it.)

---

## 2 · Performance

### Core Web Vitals — the binding numbers `[R]` web.dev

| Metric | Good | Measures | Notes |
|---|---|---|---|
| **LCP** | ≤ **2.5 s** | Loading | Field-primary; lab-measurable |
| **INP** | ≤ **200 ms** | Interactivity | **Replaced FID in 2024**; lab proxy is TBT |
| **CLS** | ≤ **0.1** | Visual stability | Field-primary; lab-measurable |

All assessed at the **75th percentile of page loads, segmented across mobile and desktop separately** `[R]`.
"Passing" means all three good at p75 — a desktop pass with a mobile fail is a fail.

### Lab vs field — the distinction that gets collapsed

**Lab (Lighthouse):** synthetic, one machine, one network profile, one run. Excellent for regression and
for attributing a change. **Cannot** tell you what users experienced.
**Field (CrUX / Vercel Speed Insights / RUM):** real users, real devices, p75 — the number that counts.
Needs traffic volume; new or low-traffic routes have **no field data**, and the correct report there is
*"insufficient field data,"* never a substituted lab number.

**Phase-B `[D]`:** Lighthouse perf 97–100 across 5 routes × 2 form factors on the **local preview build**,
LCP 0.4–0.5 s desktop / 2.0–2.3 s mobile, CLS ≤0.001, TBT 0 ms. Strong — and a lab number about the
working tree, not a user-experience claim about production.

### Payload discipline

Total transfer · JS transfer · font count and weight · image formats (AVIF/WebP) · lazy-loading
discipline · third-party script inventory (every one justified or removed). **The catalogue page is the
one that breaks first as the network grows** — budget and test it at 10× current item count, not at
today's.

---

## 3 · Link integrity and structure

### linkinator

Crawls and reports non-200s. **Blind spot:** a 200 to the *wrong* page passes; anchor fragments are not
validated. Pair with a fragment check and a spot content assertion.

**Phase-B `[D]`:** 412 links scanned, **29 broken across 11 unique targets** — a stale
`snake_case` + `.md`-suffix convention left over from before the kebab-case slug migration. Several pages
link to *their own* pre-migration filename. This is the signature of an IA change that did not carry its
redirect map, and it is why the same-diff gate law exists (ADR-057).

**Bar:** zero internal 404s, gated in CI. External links checked weekly — broken external links *into*
your docs are permanent reputation damage, so the redirect map covers **every URL ever published**
(Wayback CDX sweep is the cheapest way to enumerate them).

### Structured data

Validate JSON-LD parseability and inventory `@type` coverage per template class.

**Phase-B `[D]`:** 199/202 pages carry ≥1 JSON-LD block, 0 parse failures — BreadcrumbList 97 ·
TechArticle 93 · WebPage 79 · CollectionPage 16 · HowTo 10 · WebSite 1. **`Organization`: zero instances
site-wide.** Three pages carry none at all (`/design-system/`, `/privacy/`, `/security/`).

`Organization` + `sameAs` is also the anti-clone-site control (VITRUVIUS §7.1): it is how you assert the
canonical domain against SEO clones reproducing your project description with fabricated testimonials.
Its absence is a credibility control gap, not a schema nit.

---

## 4 · Machine legibility (the D10 kit)

The category's de facto standard kit — absence of any item is a finding, not a preference:

| Artifact | Bar | Reference |
|---|---|---|
| `/llms.txt` | **Curated**, per-link descriptions, current, **linked from the site** — not a sitemap dump | Mastra, MCP `[R]` |
| `/llms-full.txt` | A real full-corpus artifact for deep ingestion — an index wearing the name is a finding `[D]` | — |
| `.md` twins | Every doc URL resolves with a `.md` suffix | MCP does this `[R]` |
| Content negotiation | `Accept: text/markdown` honored | — |
| `sitemap.xml` | Complete and current — diff against the built route list | — |
| `robots.txt` | A **deliberate** posture toward AI crawlers, stated either way | — |
| RSS/Atom | Changelog and blog, dated, reverse-chronological, own URL | — |
| Machine-readable registry | JSON/API, not HTML-only | MCP registry `[R]` |
| Canonical agent entry point | One documented URL an agent reads first, **advertised on the homepage** | — |
| Copy-as-context affordance | On high-value pages | Mastra `[R]` |
| MCP server over the corpus | Near-mandatory for a context-standard project | — |
| Stable resolvable URIs | Documented scheme, **consistent casing** | — |
| **Self-conformance** | The site's own content satisfies the standard it publishes | VITRUVIUS §7.8 |

**On `llms.txt` as of 2026:** a convention with meaningful voluntary adoption across developer-tool and
docs properties, not a ratified standard, and with no guaranteed consumption by any given crawler `[R]`.
Treat it as **table stakes for this category's reader expectations** rather than as a distribution
mechanism — ship it curated because the audience checks for it, and do not make claims about what
consumes it.

**URL casing** `[D]`: 24 of 74 vault URLs mixed-case. Mixed-case paths are a durable source of 404s,
duplicate content, and broken external links. Normalization ships with its full 301 map in the same
commit as the route change.

---

## 5 · Content and truth instruments

### Claim register — the highest-leverage instrument in this category

Extract **every** factual and quantitative claim; classify verified / verifiable / unsupported / **false**;
publish the count. Any `false` is S1 and blocks launch.

**Phase-B `[D]`:** 8 FALSE claims; 19 unsupported; an advertised question path that 404s twice; 78% of
registry pages leaking internal operational language; undisclosed operator-federation; a dead changelog.
The trust stratum (D6/D7/D8/D9) scored 2/5 while the technical substrate scored 3/5 across the board —
**42 of 100 weight points sat in the stratum that no automated tool measures.**

That asymmetry is the toolkit's most important finding about itself: the instruments are strongest
exactly where this category's failures are least fatal, and silent exactly where they are most fatal.

### Editorial gate (CI)

Mechanically enforce: no aspirational present tense · no internal operational language in public copy ·
every narrated count **derived, not typed** · every new claim carries a register row · agent-authored
content disclosed with a human ratification record.

Red-test at birth: today's known-false claims must **fail** the gate on the day it ships (as
`xfail`-until-remediation with an expiry), or the gate is unproven.

**Allowlist vs baseline — they are not interchangeable, and conflating them is how a gate dies.** A
**baseline** is *dated debt*: today's known violations, recorded so new ones go red while the backlog
stays visible, with an expiry that forces its own retirement. An **allowlist** is a *permanent reviewed
exception*: "this token, on this surface, is deliberate." Adding a genuine exception to the baseline
silently converts permanent editorial judgment into debt that someone will later try to "clear"; adding
genuine debt to the allowlist launders it into permission. Keep allowlist entries **token-scoped**
(`learn/** internal_id` wholesale would let a *new* internal id through unseen), dated, and carrying a
rationale a stranger can evaluate. **P2.5 `[D]`:** seven leaks on a new surface were all the standard's
own words, published verbatim on purpose — allowlist, with the reason written down; the baseline stayed
empty and its zero-tolerance assertion kept its teeth.

### Verbatim publication — showing the artifact instead of describing it

When the trust question is *"can I audit this before I run it?"*, the strongest available answer is not
better prose about the artifact — it is **the artifact**, byte-for-byte, with a pin and a hash.

**What it measures**: nothing. It is not a test; it is the *removal of an intermediary* between the
reader and the thing being claimed about. That is why it outranks any amount of reassuring copy.

**The mechanism, and its three failure modes** — each of which turns the page back into a depiction:

1. **Drift.** Vendored bytes and source diverge. Guard: a `--check` mode that reconstitutes and a gate
   that runs it. Red-prove it by mutating a byte and confirming a non-zero exit.
2. **A pin that does not resolve.** *"These bytes came from commit X"* is worthless if X names nothing.
   **P2.5 `[D]`:** an existing `template_sha` field in this repo records a commit that `git cat-file`
   cannot resolve — frozen by its generator's idempotency guard, then orphaned when the checkout's
   origin was repointed. Harmless there (nothing renders it), fatal on a page whose whole claim is the
   pin. **Never borrow another artifact's pin; derive and verify your own, and refuse to emit rather
   than print one you cannot stand behind.**
3. **The wrong source.** The obvious reading of a path can be a data leak — *"the workspace router"*
   points at the local operator's live file, not the one a user receives. Constrain sources
   structurally and re-assert the constraint in the gate.

**Known trap — the markup pipeline will silently eat the bytes.** Governance and config files are full
of `{braces}` and `<angles>`; put them through MDX and they are evaluated as expressions and JSX. The
build either dies or, worse, **quietly mangles the exact content the page exists to display**. Ship
verbatim content as plain text into a `<pre>`, never through a markdown/MDX renderer.

**Blind spot**: a build-time check proves what you *built*. It says nothing about what the server
*sends* — see the live re-hash entry in §6.

### The prose-level defect — what same-diff cannot see

A same-diff rule ("any commit changing a route, slug, or count updates every spec that hardcodes it")
is coupled to *identifiers*. It is structurally blind to a false statement in a **sentence**.

**P2.5 `[D]`:** a fabricated terminal transcript was cut from a page — and the identical false mechanism
was still asserted twice in surrounding prose, in the page's own voice. No route grep finds that; no
fixture references it. It was found by grepping the built output for **the mechanism's own words** after
the artifact was removed.

**Carry-line**: after removing a defect, search the *rendered* output for the thing the defect
**claimed**, not just for the artifact that claimed it. And an earlier finding of your own is fair game:
the same pass showed that finding had overstated its mechanism, which is a correction worth making
loudly rather than quoting forward.

### Reading level (FKGL)

**Directional only.** Known weakness W1: on `.astro` pages, text comes from the built HTML `<main>`, and
nav/aside/TOC chrome inside `<main>` is not removed — unpunctuated link runs merge into artificially long
"sentences" and inflate words-per-sentence. **Phase-B `[D]`:** all 6 key pages FKGL 12.05–17.91 against a
grade-10 flag. The absolute numbers are an **upper bound**; the qualitative finding (every key page reads
denser than target) is solid at that margin. A DOM-parsed extractor is owed.

### Cold readers and persona rankers

The only instruments that measure D1 (positioning) and D3 (onboarding) at all.

- **Human panel** — ≥5 readers across senior-engineer / domain-expert / prospective-contributor profiles.
  Task: *"You have five minutes. Tell me what this is, who it is for, and whether you would try it."*
  Record verbatim. **Do not intervene, do not clarify, do not defend.** Gate: ≥80% correctly state what
  it is, who it is for, and one thing it is not, in ≤30 s, unaided.
- **Synthetic personas** — `[D-syn]`. A legitimate, cheap pre-screen that catches gross failures. They
  are agreeable: they under-report confusion and over-report comprehension. Calibrate against the human
  panel and never substitute.

---

## 6 · Live and operational

### Security headers

**Scan live. Always.** `[D]` Phase-B: `site/vercel.json` configured CSP, X-Frame-Options,
X-Content-Type-Options, Referrer-Policy — production sent **none of the four**, only HSTS (a Vercel
platform default not present in the config at all). Confirmed on plain HEAD and cache-busted GET.
An agent reading the config file would have reported a secure site.

**MDN HTTP Observatory v2** `[D]`: grade **C, score 50**, 7/10 passing. API host is
`observatory-api.mdn.mozilla.**net**` — the `.org` variant NXDOMAINs. POST `/api/v2/scan` returns
summary only; the per-test breakdown exists only on the human-facing analyze page.

### Deploy discipline `[D]`

`npx astro build` → `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod`. Token via **env var only,
never `--token`** (this vault has a leak history). Record every deploy ID in the session log and in
STATE — an unrecorded deploy is an unfalsifiable claim about what is live.

**Post-build injection is not part of the build.** Headers, scoped installer routes, and
slash-form-widened redirects are injected into the adapter's `config.json` by the deploy script, *after*
`astro build`. So a bare build leaves them absent, and any gate asserting them goes red on a working
tree that is perfectly fine. **P2.5 `[D]`:** two redirect gates failed exactly this way and read as a
regression for as long as it took to check which step owned them. Diagnose a red gate by asking **which
step produces the thing it asserts**, before changing anything.

### Live probe — the only instrument that measures production `[D]`

A gate proves the build. A probe proves the deployment. They fail differently and you need both.

**Rules that make a probe worth running:**

- **Red-prove it before the deploy.** Run it against current production first. It must go substantially
  red — *and not uniformly red*. A probe where everything fails proves only that it is pointed
  somewhere; one that discriminates has assertions on both sides of the change. **P2.5 `[D]`:** 3 PASS /
  33 FAIL before, 52/0 after.
- **Derive every expectation, and throw on empty.** A probe that guessed a field name, got an empty
  array, and iterated it happily once reported a green "64 PASS / 0 FAIL" while testing nothing.
- **Assert rendered output fetched over the wire**, never source text — and never something a *comment*
  could satisfy.
- **Re-hash vendored content from the served HTML.** Where a page publishes a hash and invites readers
  to check it, the probe should do exactly what the reader would: extract the block, un-escape it, hash
  it, compare. Un-escape `&amp;` **last**, or every hash is wrong in a way that looks like drift.

**Carry-line**: *"gates green"* is a claim about the working tree. Only a live probe is a claim about
what a reader receives.

---

## 7 · Cohort calibration reference

Score two exemplars on the same instrument in the same event; relative position beats absolute score.

| Site | Archetype | Baseline `[D]` 2026-08-16 | The mechanism worth stealing |
|---|---|---|---|
| **Model Context Protocol** | B (same archetype) | ≈**83** | Governance as a first-class product surface: contributor ladder, chartered groups with a reusable charter template, antitrust policy, numbered enhancement proposals with conformance-test gates, foundation-hosted. **The reference standard for this archetype** |
| **Mastra** | A (adjacent) | ≈**65** | The complete developer surface: docs + templates + course + changelog + `llms.txt` + status page + trust page + a *"copy agent prompt"* control on the homepage + **named customer outcomes with hard numbers instead of a logo wall** |
| **adna.network** | B×E hybrid, A-shaped onboarding | **51.6** | — |

The gap is ~31 points and it is **almost entirely trust-stratum**, not craft.

---

## 8 · Quick reference — the fifteen carry-lines

Whenever one of these numbers is cited downstream, its caveat travels with it. Permanently.

1. *Lighthouse a11y 100* → "a subset of axe rules; manual keyboard + AT passes outstanding"
2. *axe clean* → "~57% automated ceiling; N incomplete results awaiting human verdict"
3. *html-validate N errors* → the harm digest, never the raw count
4. *Lighthouse perf 97–100* → "lab, local preview, working tree — not a user-experience claim"
5. *CWV green* → "field p75, mobile and desktop separately" — or "insufficient field data"
6. *Links pass* → "reachability only; destination correctness and fragments unchecked"
7. *Headers configured* → not a claim. Only `curl` against production is a claim
8. *FKGL grade N* → "upper bound; nav chrome inflates sentence length (W1)"
9. *Persona ranker 4.x* → `[D-syn]` unless the reader was human
10. *371/371 gates pass* → "no **known** regression; gates only catch what someone wrote a gate for"
11. *Composite score X* → never without its per-dimension breakdown
12. *Gates green* → a claim about the working tree, not about production. Only a live probe is that
13. *"Vendored at commit X"* → worthless unless X resolves; verify the pin, never borrow one
14. *Defect removed* → search the rendered output for what it **claimed**, not just for the artifact
15. *TTFS = N min* → never bare; conditions attached, and one run is an observation, not a distribution

---

## Sources

External facts in this file are `[R]` from:

- [Core Web Vitals — web.dev](https://web.dev/articles/vitals) — LCP/INP/CLS thresholds, p75 segmentation, FID→INP replacement
- [What's New in WCAG 2.2 — W3C WAI](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) — the nine new success criteria, removal of 4.1.1 Parsing
- [axe-core — Deque Labs](https://github.com/dequelabs/axe-core) — ~57% automated coverage, zero-false-positive design, incomplete results, WCAG 2.0/2.1/2.2 ruleset coverage
- [State of llms.txt 2026 — Presenc AI](https://presenc.ai/research/state-of-llms-txt-2026) · [llms.txt in 2026 — OrganiKPI](https://organikpi.com/blog/distribution/llms-txt-adoption-impact/) — adoption posture, convention-not-standard status
- [axe vs Lighthouse vs WAVE vs Pa11y — A11yFlow](https://www.a11yflow.dev/blog/axe-vs-lighthouse-vs-wave-vs-pa11y) — ruleset-overlap and scoring-method differences

Fleet-local facts are `[D]` from the Operation HAUSSMANN Phase-B evidence pack
(`how/campaigns/campaign_haussmann/evidence/`, run 2026-08-16, commits `d58ea13` / `df3827c`).

## Related

[[doctrine_web_quality_assessment]] · [[skill_web_quality_sweep]] · [[doctrine_visual_inspection]] ·
[[adr_057_measurement_regime]] · [[context_website_assessment]] · [[context_claim_register]]

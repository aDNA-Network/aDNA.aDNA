---
type: skill
skill_type: agent
created: 2026-08-17
updated: 2026-08-28   # step-1/2 patch: the three CI injectors made part of the build step (Grande Revue P0 finding — the skill's own procedure false-redded gate-30 on a fresh checkout); baselines refreshed 203pp/371 → 226pp/659, superseded-not-deleted
status: active
category: quality
trigger: "Any assessment, review, audit, phase-gate verification, or re-score of a rendered web surface — and any HAUSSMANN mission whose verification_method names gates, captures, Lighthouse, or a machine-eye pass"
last_edited_by: agent_rosetta
agent_authored: true
tags: [skill, quality, web, assessment, sweep, iii, accessibility, performance, machine_legibility, haussmann]

requirements:
  tools: [node, npx, astro, playwright, axe-core, lighthouse, html-validate, linkinator, curl]
  context:
    - "what/doctrine/doctrine_web_quality_assessment.md (judgment — REQUIRED)"
    - "what/doctrine/doctrine_visual_inspection.md (tooling tiers — REQUIRED)"
    - "how/campaigns/campaign_haussmann/CLAUDE.md (standing conventions, when in campaign)"
    - "directives/OPERATION_VITRUVIUS_review_instrument.md (dimensions + severities)"
  permissions: ["read files", "write files", "run commands", "network (live verification)"]
---

# Skill: Web Quality Sweep

## Overview

The executable half of [[doctrine_web_quality_assessment]]. Runs the full instrument battery over a web
surface, produces the standard evidence pack, and hands back a digest an operator can act on. Designed to
be **completable in one Claude Code session** and reproducible by a cold agent from this file alone.

**This skill does not decide anything.** It produces evidence. Adjudication is §4 of the doctrine;
severity assignment is §8. Read the doctrine first — a sweep run without it produces numbers nobody
should trust.

## Preflight (fail fast, in this order)

```bash
cd ~/aDNA/aDNA.aDNA
node --version && npx --version                     # runtime present
test -d site/node_modules || (cd site && npm ci)    # deps present
git status --porcelain                              # know your working tree BEFORE you measure
git rev-parse --short HEAD                          # record it — every number is versioned by this
```

Record in the session file: **commit SHA · working-tree cleanliness · date · target origin(s)**. A sweep
whose commit is unrecorded cannot be compared to any other sweep.

**Halt conditions — stop and report, do not work around:**

- Working tree dirty in `site/` and you did not create the changes → you are measuring someone else's
  in-flight work.
- `npm run test:gates` red at preflight → the floor is broken; characterize the failure, assess nothing
  else (doctrine §3 step 2).
- The surface under test is a live production origin and the mission has no live-verification objective
  → you are about to make production claims you were not asked to make.

## Step 1 — Build

```bash
cd ~/aDNA/aDNA.aDNA/site
npx astro build            # NEVER npm run build — prebuild regenerates committed registry data (pt19)
node scripts/inject_headers.mjs . && node scripts/inject_installer_headers.mjs . && node scripts/inject_redirects.mjs .
```

**The three injectors are part of the build for this skill's purposes, not an optional extra.**
`astro build` does not inject headers, installer routes, or redirects — CI runs them as separate
steps (`gates.yml`), and a bare local build leaves gate-30's redirect assertions red on a perfectly
good tree (convention 6's documented case; re-confirmed live at Grande Revue P0, 2026-08-27, where
this skill's own step 2 produced two false reds by omitting them).

Record: page count · build time · error count · every warning verbatim.
Expected shape (~~2026-08 baseline `[D]`: ~203 pages~~ superseded — baseline `[D] 2026-08-27`:
**226 pages**, <10 s, 0 errors). A page-count *decrease* is a finding, always.

## Step 2 — Regression floor

```bash
npm run test:gates          # full suite incl. @audit specs — chromium project only (visual lane is container-only)
# npm run test:gates:fast   # excludes @audit — for iteration only, never for an assessment of record
```

Record pass/fail counts and duration. Baseline ~~`[D] 2026-08-16`: **371/371 pass, ~1.5 min**~~
superseded — `[D] 2026-08-27`: suite is **659** derived (633 → 659 at P4.4b B0, gate-49); the fast
lane ran **514 passed / 1 skipped / 0 failed** at Grande Revue P0 *after* the injectors above.
⚠ **The gate-49 visual lane runs ONLY in `mcr.microsoft.com/playwright:v1.59.1-noble`** — its
baselines are generated and compared in-container by design (P4.4b AC1); a bare-macOS run false-reds
and is not evidence of anything. Never chase its reds outside the container.
**Red here stops the sweep.** Green here means "no known regression," not "good."

## Step 3 — Static analysis (parallel-safe, against `dist/`)

```bash
# 3a — markup + ARIA correctness
npx html-validate "dist/**/*.html" > /tmp/htmlvalidate.txt 2>&1; tail -5 /tmp/htmlvalidate.txt

# 3b — internal link integrity (needs a preview server; see the port note)
npx astro preview --port 4321 &        # PREVIEW_PID=$!
npx linkinator http://localhost:4321 --recurse --silent > /tmp/linkinator.txt 2>&1

# 3c — structured-data census over built HTML
#      count pages with >=1 JSON-LD block; tally @type; flag zero-JSON-LD pages;
#      explicitly check for Organization (+ sameAs) — its absence is a D10 finding, not a nit
```

**Port note.** 4321 is the site preview. WebForge's port register also claims 4321 for its own
archetype — never co-run against WebForge suites. **Never co-run Lighthouse with the gate preview
server**: contention invalidates the timings.

Digest 3a **by harm class**, never by raw count (doctrine §4.1). Kill the preview server before Step 5.

## Step 4 — Rendered capture (T0)

```bash
node scripts/visual_capture.mjs \
  --base http://localhost:4321 \
  --routes /,/get-started,/learn/what-is-adna,/vaults,/vaults/graph,/community,/about,/404 \
  --viewports all \
  --themes dark,light \
  --axe \
  --out evidence/captures_raw \
  --report evidence/captures_raw/capture_report.json

# --viewports takes `all` or a comma list read from scripts/viewports.json — NEVER transcribed (KW-14).
#   As of [D] 2026-08-17 that file defines: mobile 320 · mobile-lg 375 · tablet 768 ·
#   laptop-sm 900 · laptop 1024 · desktop 1440.  (doctrine_visual_inspection §3 prose is stale
#   on 3 of these 6 and invents a `wide` — see doctrine W9. Read the JSON.)
# --axe covers themes[0] ONLY (known weakness W2). Run a second pass with --themes light,dark
#   to get axe over the other theme. Two passes, two reports, both retained.
# Other flags: --base --routes --out --report --timeout <ms, default 45000>.
```

Then **view a curated subset, not the whole set** — that is the token-optimized path and the reason T0
writes to disk. Curate by: every template class once, plus every viewport where `capture_report.json`
shows a console error, an anomalous `height`, or a `bodyLen` outlier.

Copy the cited subset to `evidence/captures_curated/` and write `visual_findings.md` with one row per
finding: `F-n · dimension · severity · viewport · theme · capture path · observation · why it matters`.

**A visual finding without its capture is inadmissible.**

## Step 5 — Lighthouse

```bash
# gate preview server MUST be down first
for route in "" "get-started" "learn/what-is-adna" "vaults" "vaults/graph"; do
  for form in mobile desktop; do
    npx lighthouse "http://localhost:4321/${route}" \
      --preset=$([ "$form" = desktop ] && echo desktop || echo perf) \
      --output=json --output-path="evidence/sweep/raw/lighthouse/lh_${route//\//-}_${form}.json" \
      --chrome-flags="--headless=new" --quiet
  done
done
node scripts/lh_summarize.mjs evidence/sweep/raw/lighthouse/*.json > evidence/sweep/lighthouse_summary.md
```

Record all four categories per run **plus** LCP, CLS, TBT. Label the origin explicitly: *this is lab,
against the working tree* (doctrine §4.2). Never state it as a user-experience claim.

## Step 6 — Machine-eye pass

Fetch as an agent would — text extraction, JS disabled — then verify each artifact **directly**:

```bash
BASE=https://adna.network
for path in llms.txt llms-full.txt sitemap.xml sitemap-index.xml robots.txt rss.xml; do
  curl -sS -o "evidence/machine_eye/raw/${path}" -w "%{http_code} ${path}\n" "$BASE/$path"
done
curl -sS -H 'Accept: text/markdown' -D - -o /dev/null "$BASE/learn/what-is-adna/"   # content negotiation
curl -sS -o /dev/null -w "%{http_code} md-twin\n" "$BASE/learn/what-is-adna.md"     # .md twin
```

Checklist — each row resolves to **present / absent / partial**, with the evidence path:

- [ ] `/llms.txt` — present? **curated with per-link descriptions**, or a raw dump? Linked from the site?
- [ ] `/llms-full.txt` — a real full-corpus artifact, or an index wearing the name?
- [ ] `.md` twin resolves on every documentation URL
- [ ] Content negotiation on `Accept: text/markdown`
- [ ] `sitemap.xml` complete and current (diff against the built route list)
- [ ] `robots.txt` — a *deliberate* posture toward AI crawlers, either way
- [ ] `rss.xml` — changelog and blog, dated, reverse-chronological
- [ ] Registry/catalogue available as JSON/API, not HTML only
- [ ] JSON-LD: `Organization` (with `sameAs`), `SoftwareSourceCode`, `TechArticle`, `Dataset`
- [ ] Stable resolvable URIs for every entity, documented scheme, consistent casing
- [ ] MCP server exposed over the docs/registry corpus
- [ ] Copy-as-context affordance on high-value pages
- [ ] **Self-conformance** — does the site's own published content satisfy the standard it documents?

> Any absence here on a context-standard site is a candidate **S1** under VITRUVIUS anti-pattern 7.8
> (self-exemption). Read the extracted text as an agent would and note every place meaning is lost.

## Step 7 — Live verification (production only)

```bash
curl -sI https://adna.network/ | sort
curl -sI "https://adna.network/get-started/?cb=$(date +%s)" | sort     # cache-busted
curl -sS -X POST "https://observatory-api.mdn.mozilla.net/api/v2/scan?host=adna.network"
```

Compare **live response headers** against `site/vercel.json` intent. Divergence is an S2 drift finding —
not a config question (doctrine §4.3; this is the Phase-B cautionary instance: 4 of 5 configured headers
absent from production while the config file read clean).

Also live-verify: canonical tags · redirect map · deployed page count · `llms.txt` contents · every
count the site narrates.

## Step 8 — Claim + editorial pass

Extract **every** factual and quantitative claim into the register. Classify each:
**verified** (linked evidence) · **verifiable** (checkable, unlinked) · **unsupported** · **false**.

Sweep additionally for:
- aspirational present tense ("the network federates" when one node federates)
- internal operational language leaking into public copy (truncated rename notes, campaign IDs,
  persona names without a public gloss) — **sweep every registry entry, not a sample**
- narrated counts that are typed rather than derived (KW-14)
- claims inside images, diagram labels, alt text, and OG cards — the usual blind spot

**Any `false` entry is S1 and blocks launch.**

## Step 9 — Introspect (doctrine §9) — MANDATORY

Answer all seven questions in writing before drafting a single finding. Produce the
`## What this pass could not see` section. Gate reviewers read it first.

## Step 10 — Digest and record

Write `evidence/sweep/sweep_summary.md`:

1. **Summary table** — one row per instrument: tool · result · key numbers · failure classes · raw path
2. **Methodology notes** — read-before-citing caveats: which origin, which build, which known weakness
   (W1–W8) applies to which number
3. **Top findings** — each with provenance tag, instrument, location, why it matters, raw-output path
4. **What this pass could not see** — Step 9's output
5. **File index** — the evidence tree as shipped

Then: append the cycle to the III series (`what/measurement/iii_results/`), update the claim register,
and file any new defect class as a **new gate, red-tested in the same commit** (doctrine §7, W8).

## Scale-down variants

| Variant | Steps | When | Cost |
|---|---|---|---|
| **Full sweep** | 1–10 | Baseline · mid-campaign re-score · launch · quarterly | 1–2 sessions |
| **Phase-gate sweep** | 1, 2, 3, 4 (changed templates only), 9, 10 | Closing a phase | ~half session |
| **Change sweep** | 1, 2, 4 (touched routes), 9 | Any mission touching `site/` | minutes |
| **Live drift check** | 1, 7 | Every deploy; weekly standing | minutes |
| **Machine-eye check** | 6 | Any change to routes, slugs, or corpus | minutes |

## Definition of done

The evidence pack exists at the §6 layout with raw output retained; every finding carries instrument +
provenance + location + capture-or-raw path; every number carries its origin label (lab/field,
preview/production) and its known-weakness caveat; the introspection section is written; the digest
classes counts by harm rather than reporting them raw; and every new check added this session was
red-tested in the same commit.

## Failure handling

| Situation | Do |
|---|---|
| Gates red at preflight | Stop. Characterize, report, halt. Do not sweep a broken build |
| A tool is missing | Install it if it is in `requirements.tools`; if it cannot be installed, **record the absence as a finding** and mark that dimension `unscored — no instrument`. Never infer the score |
| Live origin unreachable | Record `[A]` unverified for every live row; do not substitute config-file contents |
| Two instruments disagree | Doctrine §4. Report both, adjudicate in writing, name the instrument-of-record |
| A capture contradicts a passing gate | The capture wins, and the gate is the finding (W8) |
| Numbers look better than expected | Suspect the target. Confirm you built, confirm the origin, confirm the route set. Doctrine §9.2 |

## Cross-references

- [[doctrine_web_quality_assessment]] — judgment, adjudication, thresholds, anti-patterns (**read first**)
- [[doctrine_visual_inspection]] — T0/T1/T2 tiers, capture harness, canonical viewports
- [[context_web_quality_toolkit]] — per-instrument reference and known traps
- [[skill_iii_cycle]] — the longitudinal improvement loop this sweep feeds
- [[adr_057_measurement_regime]] — altitude assignment, cadences, same-diff gate law
- `scripts/visual_capture.mjs` · `scripts/viewports.json` · `scripts/lh_summarize.mjs` · `scripts/reading_level.mjs`

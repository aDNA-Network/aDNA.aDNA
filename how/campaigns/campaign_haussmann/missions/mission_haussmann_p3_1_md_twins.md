---
plan_id: mission_haussmann_p3_1_md_twins
type: plan
title: "P3.1 — Markdown twins + content negotiation + a real llms-full corpus, and llms.txt finally linked"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: completed   # ⛩ DP6 RATIFIED 2026-08-19 — activated. RESCOPED DOWN: the "repair 29 dangling internal links" half is DROPPED — already done by P2.1/P2.2, uncredited (zero internal .md links remain; 14 of 15 .md hrefs are GitHub blobs, the 15th is the domain obsidian.md). Twins premise INTACT: 10/10 probed still 404. RESCOPED UP at O0 2026-08-20 — see "The O0 correction" below: twin coverage is three tiers, not collections-only.
mission_class: build
executor_tier: opus   # was `sonnet` at genesis, set for what looked like mechanical emitter work. Raised at O0: spec reconciliation is judgment-heavy (pattern_model_tiered_campaign_execution). The AAR reports the tier that actually ran, not the one planned.
token_budget_estimated: "~190–270 kT across 2 sessions — RE-DECLARED at O0 2026-08-20 (was ~140–200 kT at ⛩ DP6). Cause: the DP6 range was costed on AC1's stated method ('from the content collections'), which cannot satisfy AC4's stated test (machine-eye item 3 — all 10 of whose probes target bespoke .astro pages with no markdown source). Operator ruled full three-tier coverage at session open; the added cost is the Tier-C rendered-HTML extraction path + its gates, not per-page work. ADR-016/SO#11 variance reported in the AAR."
token_budget_actual: "≈250 kT by content load — inside the re-declared ~190–270 kT range; ~25% above the ⛩ DP6 figure the three-tier correction replaced. Ran executor_tier=opus against a declared sonnet."
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["H8 reframed (twins absent; llms-full mislabeled; llms.txt unlinked)", "machine_eye items 2/3/4/12", "MCP verified pattern (.md twins + llms pointer block atop each .md)", "toolkit B2 (ship both: physical twins + negotiation; Vercel first-party pattern)", "B3 broken .md links (the abandoned convention)"]
vitruvius_dimensions: [D10]
decade_theme: agentic
webforge_patterns: [P12]
patterns_to_author: ["A1: .md-twin emission lock + emitter for the FR-N family (owed to WebForge)"]
depends_on: [mission_haussmann_p2_1_url_normalization, mission_haussmann_p2_6_midscore]
blocks: [mission_haussmann_p3_3_mcp_server]
acceptance_criteria:
  - "Every doc/content URL resolves with a .md suffix — build-time twin generation across ALL THREE TIERS (A: the 6 content collections from entry.body · B: registry pages from the same vaults.json projection · C: bespoke .astro prose pages by post-build extraction from the rendered HTML). Amended at O0 2026-08-20: the original clause said 'from the content collections', which cannot satisfy AC4 — see 'The O0 correction'. Each .md front-loads the MCP-style llms.txt pointer block"
  - "Accept: text/markdown negotiation serves markdown on prerendered pages (Vercel first-party pattern); ETag differs from HTML"
  - "llms-full.txt is a true full-corpus artifact (or renamed honestly + a full-corpus artifact added); llms.txt linked from the site chrome (footer + docs) and robots.txt comment"
  - "Machine-eye items 2/3/4/12 re-run PASS; gate coverage added (twins resolve; pointer block present; negotiation live)"
verification_method: "machine_eye re-run + curl matrix + gates (red-tested)"
human_gate: false
tags: [plan, haussmann, p3, md_twins, llms, agentic]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The agent path currently stops at anchor 3 — this mission lays the anchor-4 floor.

> **⚠ `depends_on` names `p2_6_midscore`, which is still `in_progress`. This does NOT block you.**
> P2.6 stays open only for ⛩ **O0b**, the operator-gated TTFS run on a fresh macOS account — an
> evidence-gathering objective that produces nothing this mission consumes. **The gate that unblocks
> Decade 2 is ⛩ DP6 (ratified 2026-08-19), not P2.6's completion.** P4.5a and P3.5 both executed under
> exactly this condition. Recorded here at the wind-down of 2026-08-20 because it had never been written
> down: a cold agent reading `depends_on` literally would halt, and an agent that overrode it silently
> would be learning that `depends_on` is decorative. Neither is what we want. See campaign `CLAUDE.md`
> convention 11.

## Why this mission exists

`.md` twins 404 (10/10) while 29 old links point at them — a started-then-abandoned convention `[D]`; llms-full.txt is a 2 KB index wearing a corpus name; llms.txt — the one excellent artifact — is referenced zero times in the site's own HTML `[D machine_eye]`. MCP's verified pattern (twins sitewide + self-advertising pointer block) is the reference; Claude Code and 2 of 6 other agents negotiate `Accept: text/markdown` today, so ship **both** twin routes and negotiation.

## The O0 correction — the method clause could not satisfy the test clause

*Authored in-file at execution, 2026-08-20, per recon-at-execution (convention 12). In-file and not a new
mission file because `mission_count: 27` sits in ratified §7.7 text.*

AC4 requires machine-eye **item 3** (`.md` twins, 10/10 404) to re-run PASS. AC1 named the method:
generation **"from the content collections."** Every one of item 3's six probe targets was checked on
disk — all six are bespoke `.astro` pages with **no markdown source** `[D]`:

| Probe target | Source | Collection-backed? |
|---|---|---|
| `/learn/what-is-adna` | `src/pages/learn/what-is-adna.astro` | no |
| `/reference/specification` | `src/pages/reference/specification/index.astro` | no |
| `/get-started` | `src/pages/get-started.astro` | no |
| `/vaults` | `src/pages/vaults/index.astro` | no |
| `/network` | `src/pages/network.astro` | no |
| `/glossary` | `src/pages/glossary/index.astro` | no |

The P2.6 delta's three probes (`/get-started.md`, `/about.md`, `/learn/what-is-adna.md`) are the same
class. **Executed as written, this mission emits 120 collection twins, reports done, and leaves 10/10
item-3 probes still 404.**

This is P4.5a's finding recurring one mission later — *a ratified budget attached to a spec whose halves
nobody had reconciled.* There, the P4.5a/b split lived only in frontmatter comment strings while the
body stayed P4.5b content. Here, the method clause and the test clause sit four lines apart **in the same
frontmatter block** and contradict each other. Two consecutive missions, one defect class: **a mission's
acceptance criteria are not self-checking, and nothing in the close cascade reads them against each
other.** Carried to the AAR as a candidate standing check, not just a fixed line.

⛩ **Operator rulings, session open 2026-08-20**: (1) ship **full three-tier coverage**; (2) **re-declare
the budget in-file and continue** — no new gate, variance reported in the AAR.

### Twin derivation, by tier

| Tier | Set | O0 estimate | **As built** | Derivation | Drift channel |
|---|---|---|---|---|---|
| **A** | `docs · guides · reference · spec · proposals` | 120 | **114** | `entry.body` — canonical markdown | none: it *is* the source |
| **B** | `/vaults/<slug>` ×74 + registry index | 75 | **75** | the same `vaults.json` projection the page renders | none: same single source |
| **C** | bespoke `.astro` prose pages | ~34 | **32** | post-build extraction from the rendered HTML | none: derived from the artifact itself |
| | | ~229 | **221** | | |

*Two corrections to the O0 estimate, both found by building it.* **`changelog` yields no twins** —
its 5 entries render into the single `/changelog` page rather than per-entry routes, so the
collection is real but produces no content URL of its own (it is covered by the tier-C
`/changelog.md`). And the spec collection has **20** entries, not 21: the 21st file is
`_preamble.json`. The second one nearly went unexamined — 189 tier-A/B twins looked "one short of
190" until the count was derived rather than eyeballed off a file listing. **A file count is not an
entry count**, which is the same convenience-figure defect this campaign has now hit three times.

Tier A carries no MDX hazard: only **15 of 113** collection files use components, all diagram embeds
(`MermaidDiagram` ×12, `TriadDiagram` ×2, `ConvergenceFunnel` ×2, `Image` ×2). `MermaidDiagram` →
a fenced ` ```mermaid ` block yields *better* markdown than the HTML render, not worse.

Tiers B and C derive from build output, so the mission's no-drift-channel constraint holds **by
construction** rather than by promise — which is the property the constraint was actually asking for.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | ✅ Corrected spec (above) + twin-derivation design over all three tiers | `artifacts/p3_1/twin_derivation.md` | — |
| O1 | Build twins + pointer blocks (one emitter, one manifest); wire llms.txt into chrome + SEOHead + robots comment | routes live | — |
| O2 | Negotiation on Vercel (first-party pattern, manifest-driven exact routes) + true llms-full corpus | live | — |
| O3 | Gates (red-proven by mutation) + machine-eye re-run + AAR; stage the A1 pattern note upstream | evidence + AAR | — |

> **O1's *"fix the old .md link targets to the new twins"* is DISCHARGED, not skipped.** Re-probed at O0
> `[D]`: **zero internal `.md` links remain** — all 7 surviving hits are external (4 GitHub blobs under
> `aDNA-Network/aDNA/blob/main/.adna/…`, 2 the `obsidian.md` *domain*, and those are link *destinations*,
> not twin candidates). P2.1/P2.2 did this uncredited; the `status:` note recorded it at DP6 but **the
> body was never updated to match** — the same index-vs-artifact split as the correction above.
> Near-miss ruled out by checking rather than assuming: the five `/reference/*.md` redirects in
> `astro.config.mjs` use underscore slugs (`adna_standard.md`) and twins use hyphen slugs
> (`specification.md`) — no route collision, and redirects sit before `handle: filesystem` where a
> collision *would* have shadowed a twin silently.

## Constraints

Twins derive from the same single-source content as HTML (no drift channel); ADR-056 records the versioning/URL contract; same-diff law.

## Definition of done

An agent with no prior knowledge lands anywhere, finds llms.txt from the page, and can read the whole site as markdown.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/machine_eye/machine_eye.md` + ADR-056. Execute O0–O3.

## Progress

**COMPLETE 2026-08-21.** Session `session_stanley_20260820_221213_haussmann_p3_1`,
commits `47f1a69..f053431`. Deployed prod `tree=f053431`
(`deploy_record: 2026-08-21T19:21:07Z`), headers 4/4 verified **against the alias**.

| O | Delivered |
|---|---|
| O0 | Spec correction in-file; budget re-declared; `artifacts/p3_1/twin_derivation.md` |
| O1 | 221 twins (114 A · 75 B · 32 C); manifest; pointer blocks; footer + `rel=alternate` + robots |
| O2 | 442 negotiation routes; corpus 2,476 B → 940,718 B / 221 sections |
| O3 | G12–G15 (13 assertions red-proven); suite **521 → 541 zero xfail**; axe **0** ×2 themes; delta packet; ADR-056 clauses 1/2/7; Vitruvius memo |

Machine-eye **2 / 3 / 4 / 12 all PASS live** — item 3 at **10/10** (baseline 0/10), item 4 at 5/5
with differing ETags and `Vary: Accept`. Negative control holds: un-twinned routes still serve HTML.

## AAR (SO#5)

**Worked.** Recon-at-execution before writing any code. The finding that reshaped the mission —
that all ten of item 3's probes target pages with no markdown source — came from ten minutes of
checking probe targets against `src/pages/`, and it was the difference between shipping 120 twins
that satisfy nothing and 221 that satisfy the criterion. Red-proving every assertion by mutation
(13 of them) caught three of my *own* gates being wrong. Building the obvious thing first and
watching it fail told me more than designing longer would have: the corpus came out empty, which
is how the build-ordering constraint got found and documented instead of guessed at.

**Didn't.** I twice wrote assertions that would have forced the *site* to change to satisfy the
*test* — a 300 B floor that failed a genuinely sparse vault at 273 B, and a whole-body `^>` sweep
that failed the spec's own legitimate blockquotes. Both were caught only because I read the failure
instead of reaching for the content. That reflex needs to be the default, not the recovery. I also
declared 189 twins "one short of 190" from a file count rather than an entry count — the same
convenience-figure defect this campaign has now hit three times.

**Finding.** *A mission's acceptance criteria are not self-checking, and nothing in the close
cascade reads them against each other.* AC1 named a method that could not satisfy AC4's test, four
lines apart in one frontmatter block. This is P4.5a's finding one mission later, in a new shape:
there the mission body contradicted its frontmatter; here the frontmatter contradicted itself.
**Two consecutive missions, one class.** The close cascade checks that criteria are *met*; nothing
checks they are *mutually satisfiable* before a budget is ratified against them.

Second finding, larger in blast radius: *the deploy chain's own verification had never verified
anything.* `check_live_headers.mjs` follows redirects and checks header names, so on a
Deployment-Protection-gated URL it read `vercel.com`'s login page — which sets the same four names
— and reported `OK — no drift`. And `deploy_adna.sh` pointed it at the per-deployment URL, which is
gated on **prod as well as preview**. Since P0.2 built it, that step has been reading Vercel's CSP
and calling it ours. It would have passed for a deployment with no headers at all.

**Change.** Two proposals for the campaign, neither actioned here:
1. **A pre-execution AC coherence read** — before a mission's budget is ratified at a DP, one pass
   asking only "can the stated method satisfy the stated test?" Cheap, and it would have caught
   both P4.5a's and P3.1's defect before either was costed.
2. **P0.2's header evidence needs re-reading** against the alias. Its claims were verified by an
   instrument now known to have been reading someone else's headers. Flagged, not touched.

**Follow-up.** `check_live_headers.mjs` still compares header **names, not values** — a
correct-name/wrong-value drift passes on prod today. Handed to **P4.4** (CI hardening) along with
the `stripHtmlComments()` dead-second-root comment. Pattern **A1** staged to Vitruvius
(`coord_2026_08_20_rosetta_to_vitruvius_a1_md_twins_pattern.md`), non-blocking. **ADR-056 stays
`proposed`** — clauses 1/2/7 are built, but ratification is the operator's at the P3 exit, and
anchor 4 is deliberately **not claimed**: the registry endpoint is P3.2's and the re-score is
P5.2's, with fresh scorers. The builder never self-certifies.

**Budget (ADR-016 / SO#11).** Estimated **~190–270 kT** (re-declared at O0 from ⛩ DP6's ~140–200
kT, cause recorded in frontmatter). Actual **≈250 kT** by content load — inside the re-declared
range, and roughly 25% above the DP6 figure the three-tier correction replaced. `executor_tier`
ran **`opus`** against a declared `sonnet`; the spec-reconciliation work is the class the doctrine
routes to `opus`, and the deviation is recorded rather than quietly absorbed.

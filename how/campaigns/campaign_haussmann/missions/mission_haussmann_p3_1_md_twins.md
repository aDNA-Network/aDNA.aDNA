---
plan_id: mission_haussmann_p3_1_md_twins
type: plan
title: "P3.1 — Markdown twins + content negotiation + a real llms-full corpus, and llms.txt finally linked"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: in_progress   # ⛩ DP6 RATIFIED 2026-08-19 — activated. RESCOPED DOWN: the "repair 29 dangling internal links" half is DROPPED — already done by P2.1/P2.2, uncredited (zero internal .md links remain; 14 of 15 .md hrefs are GitHub blobs, the 15th is the domain obsidian.md). Twins premise INTACT: 10/10 probed still 404. RESCOPED UP at O0 2026-08-20 — see "The O0 correction" below: twin coverage is three tiers, not collections-only.
mission_class: build
executor_tier: opus   # was `sonnet` at genesis, set for what looked like mechanical emitter work. Raised at O0: spec reconciliation is judgment-heavy (pattern_model_tiered_campaign_execution). The AAR reports the tier that actually ran, not the one planned.
token_budget_estimated: "~190–270 kT across 2 sessions — RE-DECLARED at O0 2026-08-20 (was ~140–200 kT at ⛩ DP6). Cause: the DP6 range was costed on AC1's stated method ('from the content collections'), which cannot satisfy AC4's stated test (machine-eye item 3 — all 10 of whose probes target bespoke .astro pages with no markdown source). Operator ruled full three-tier coverage at session open; the added cost is the Tier-C rendered-HTML extraction path + its gates, not per-page work. ADR-016/SO#11 variance reported in the AAR."
token_budget_actual:
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

| Tier | Set | Count | Derivation | Drift channel |
|---|---|---|---|---|
| **A** | `docs · guides · reference · spec · changelog · proposals` | 120 | `entry.body` — canonical markdown | none: it *is* the source |
| **B** | `/vaults/<slug>` ×74 + registry index | 75 | the same `vaults.json` projection the page renders | none: same single source |
| **C** | bespoke `.astro` prose pages | ~34 | post-build extraction from the rendered HTML | none: derived from the artifact itself |

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

*(at execution)*

## AAR (SO#5)

*(before completed)*

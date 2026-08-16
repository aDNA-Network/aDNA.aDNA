---
reviewer: B
site: https://mastra.ai
archetype_scored: A (framework) — weights = A column (§5); B×E column also computed for cross-comparability
date: 2026-08-16
disclosure: agent-scored (independent reviewer B, Claude agent). Evidence = live fetches only (text/HTML/HTTP); no browser rendering. D5 and D11 scored from text evidence only, tagged [I], reduced confidence. No other reviewer's artifacts were read.
instrument: OPERATION_VITRUVIUS_review_instrument.md v1.0
type: scoresheet
status: submitted
last_edited_by: agent_reviewer_B
---

# Scoresheet B — mastra.ai

Method note: evidence collected 2026-08-16 via direct fetches: homepage, `/llms.txt` (700+ links), `robots.txt`, sitemap index (9 segmented sitemaps, lastmod 2026-08-16; docs sitemap 845 URLs), `.md` twin probe (200, text/plain), `/en/docs/getting-started/installation` (HTML + affordance grep), `/docs`, `/customers`, `/customers/salesforce`, `/pricing`, URL-hygiene probes, security-header inspection, and 404 probes (`/llms-full.txt`, `/rss.xml`, `/changelog`, `/community`, `/security` all 404). §6 steps not executable here: cold-reader panel, clean-VM TTFS, contribution run, rendered capture, automated a11y sweep — affected scores carry [I].

## Score table

| Dim | Score | Evidence (2–4 lines) | Prov |
|---|---|---|---|
| D1 Positioning | 4 | Hero: "Build AI agents" / "…the leading TypeScript agent framework" — known category noun, audience named (TypeScript devs), primary CTA = Quickstart (matches Archetype A: run code); solutions nav names three concrete agent use cases; homepage dominated by five real code examples. S: 30-second legibility is near-perfect for the archetype. W: "leading" is an unsupported superlative; no negative space ("not X"); anchor-5 cold-reader condition unmeasured. | [D] copy; [A] reader effect |
| D2 IA & nav | 4 | Six top-level nav items (Product/Solutions/Resources/Pricing/Customers/Docs) — under the 7-item threshold; templates gallery a distinct item; segmented, same-day-fresh sitemaps; search present in docs (grep: 10 hits). S: complete developer surface, cleanly partitioned. W: URL hygiene defects — `/Docs` serves 200 without canonical redirect (case-insensitive duplicate-content surface), and a trailing-slash deep docs URL (`/en/docs/getting-started/installation/`) redirects to the docs *root*, discarding the path; `/en/docs` vs `/docs` dual scheme. | [D] |
| D3 Onboarding/TTFS | 3 | One-command scaffold (`npm/pnpm/yarn/bun create mastra@latest`) with Studio included — TTFS plausibly <10 min to a scaffolded agent. But: Node 22.18+ requirement surfaced only in the manual-setup section; API-key need implied via env vars, not stated before start (prerequisite ambush at first run); **no troubleshooting section at all**; no Discord/support escape hatch on the page; no zero-install playground (cloud free tier requires signup at projects.mastra.ai). Anchor-4 requires prerequisites-up-front + troubleshooting → capped at 3 despite likely fast TTFS. | [D] page content; timing [I] |
| D4 Documentation | 3 | Docs corpus is large and reference-strong: llms.txt shows Docs/Models/Integrations/Reference partitions with a 400+-page reference tier; `.md` twins resolve; "Edit this page on GitHub" present in docs footer [D]; last-updated element exists but empty in static HTML [I]. Anchor-3 fit is exact: "clear types, complete reference, versioning weak" — no version picker or versioned URLs observed; changelog lives off-site on GitHub releases; migration guides not surfaced. S: reference completeness. W: unversioned docs for a fast-moving framework. | [D]; freshness [I] |
| D5 Visual craft | 4 | Text/HTML evidence only — no rendering; reduced confidence. Evidence of deliberate, distinctive system: custom loaded type (CommitMono + Greed), dark-first theme, bespoke component vocabulary, 37/37 homepage images with alt, code-first hero with copy affordances ("Copy agent prompt"). S: distinctive visual voice signals engineering care (the dimension's intent). W: marketing surface and docs surface run visibly different design systems (Next.js custom vs Docusaurus-derived docs theme) — cross-template drift; states/responsive/motion unverified (`prefers-reduced-motion`: 0 hits in static CSS-in-HTML). | [I]; markers [D] |
| D6 Content & voice | 4 | Consistent developer-marketing register across sampled surfaces; claims are named and numbered (27.2k GitHub stars, 240K+/100K+ book copies, named customers Replit/Brex/Salesforce/MongoDB/WorkOS…), mostly verifiable. S: numbers-with-names habit instead of adjective inflation. W: "leading TypeScript agent framework" is an unsupported superlative; star count possibly hardcoded [I]; no voice guide/claim register (blocks 5). | [D] |
| D7 Proof & credibility | 4 | 19 customer stories with per-customer case-study URLs; spot-checked Salesforce study: attributed quote with name + title (Jeff Douglas, Product Management Director, Agentforce Vibes) and hard numbers ("~100,000 SFDX developers", "100 Salesforce-built skills"); trust page (trust.mastra.ai) + public status page (statuspage.incident.io) linked in footer; Apache-2.0 + Mastra Enterprise License dual posture stated plainly on the homepage. S: named-party adoption with linked artifacts — anchor-4 core met. W: customers *listing* page is a logo wall (numbers live one click down); star count not verifiably live [I]; founders/team not named on fetched surfaces. | [D]; liveness of metrics [I] |
| D8 Community & governance | 2 | Company-owned OSS: no governance surface on the site — `/community` 404, no contributor ladder, no proposal process, no CoC linked, no succession posture; dual-license disclosure is honest about control. Venue exists (Discord + GitHub + YouTube + X in footer), liveness unverified. Sits between anchor 0 ("no governance surface") and 2 ("described in prose, no artifacts, no venue") — venue-yes/prose-no; scored 2. Low weight under A, correctly. | [D] absence; venue liveness [I] |
| D9 Contribution funnel | 2 | No CONTRIBUTING linked from the site; no good-first-issue surface, no issue-template or question-routing visible on-site; no AI-assisted-PR policy stated; docs "Edit this page on GitHub" is the one visible on-ramp. Anchor-2 fit: repo presumably accepts PRs [A] but the site offers no guidance or labelled entry points. | [D] absence; repo state [A] |
| D10 Machine legibility | 3 | Present: `/llms.txt` (700+ links, proper header + description, but zero per-link annotations — index, not map); `.md` twins for docs (200, text/plain); fresh segmented sitemaps; JSON-LD ×3 on homepage; permissive robots + Algolia verification; "Copy agent prompt" homepage affordance. Absent: `/llms-full.txt` 404; RSS 404 (podcast/blog/changelog with no feed); no documented agent entry point; no MCP server over docs observed; no "copy page as context" on doc pages (grep: 0). Anchor-3-with-asterisks: has md twins (a 4-item) but misses RSS (a 3-item) and annotations. | [D] |
| D11 Accessibility | 2 | Text evidence only — no rendering, no axe run; reduced confidence. Positive: `lang="en"`, single h1, 249 aria-labels, 37/37 imgs with alt. Negative: **no skip-to-content link found on the homepage** [D] — a manual failure marker in a key flow (WCAG 2.4.1 bypass-blocks, unless landmark structure compensates, unverified); contrast of dark-theme code blocks untested; `prefers-reduced-motion` not present in fetched HTML. | [I]; markers [D] |
| D12 Performance & ops | 3 | Public status page (statuspage.incident.io) [D] — anchor-5 item present; same-day sitemap freshness; clean 404 on dead paths. W: security headers thin — HSTS only, no CSP / X-Frame-Options / Referrer-Policy observed [D]; trailing-slash redirect discards deep paths (link-rot generator for external deep links); heavy JS homepage (Next.js, ~196 KB HTML shell) with CWV unmeasured. | [D] headers; CWV [I] |

## Composites

Formula: Σ (score ÷ 5 × weight).

| Weighting | Composite |
|---|---|
| (a) Archetype-appropriate — **A column** | **64.8 / 100** |
| (b) Cross-comparability — **B×E column** | **66.4 / 100** |

Per-dimension contributions (A column): D1 9.6 · D2 6.4 · D3 10.8 · D4 9.0 · D5 4.8 · D6 4.0 · D7 6.4 · D8 2.0 · D9 2.4 · D10 6.0 · D11 1.6 · D12 1.8 = **64.8**.
Per-dimension contributions (B×E column): D1 9.6 · D2 6.4 · D3 7.2 · D4 7.2 · D5 6.4 · D6 6.4 · D7 11.2 · D8 4.0 · D9 2.4 · D10 3.6 · D11 0.8 · D12 1.2 = **66.4**.

Gate note (§5): no gate can be cleared or failed from this evidence — a11y criticals and CWV were not measured [I]; the missing skip link is flagged for the rendering pass.

## Anchor ambiguities

1. **D3 — split anchors when TTFS and support-scaffolding diverge.** Mastra's one-command scaffold plausibly delivers TTFS <10 min (anchor-4/5 territory) while simultaneously failing anchor-4's other clauses (prereqs up front, troubleshooting present). The anchors bundle speed and scaffolding without saying which binds; I treated the bundle as conjunctive (→3). A site can be fast and unsupportive — the instrument should say how that scores.
2. **D4 — anchor 3↔4 boundary is a versioning cliff.** Anchor 4 bundles four unrelated criteria (type separation ✓, versioning ✗, migrations ✗, CI-tested examples ?). One missing bundle-item forces a 400+-page, cleanly-partitioned reference corpus down to the same 3 as a far thinner docs set. Needs a partial-credit rule or an unbundled anchor.
3. **D7 anchor 5 is unreachable for corporate Archetype A.** "Explicit what-exists-vs-planned surface and named external governance participants" presumes a commons; a company site structurally cannot earn 5 as written. §5 reweights the column but the anchors themselves never re-anchor per archetype — D8's 0–2 band has the same problem (a venue-yes/prose-no company sits between anchors).
4. **D10 — cumulative ladder vs rung-skipping** (same finding as the MCP sheet, opposite direction): Mastra holds an anchor-4 item (md twins) while missing an anchor-3 item (RSS). Strict cumulative reading caps at 2; preponderance gives 3. Scored preponderantly; instrument should choose.

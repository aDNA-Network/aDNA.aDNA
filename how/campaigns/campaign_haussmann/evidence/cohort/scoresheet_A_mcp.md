---
type: scoresheet
reviewer: A
site: https://modelcontextprotocol.io
archetype_scored: B (nearest-B; weighted under the B×E column per protocol)
date: 2026-08-16
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_reviewer_A
disclosure: agent-scored — scores produced by an AI reviewer from fetched text/HTML evidence only; no browser rendering. D5 and D11 are inference-limited and tagged [I] with reduced confidence.
instrument: OPERATION_VITRUVIUS_review_instrument.md v1.0
inputs: instrument file + live site fetches only (independence protocol — no other campaign artifacts read)
tags: [vitruvius, phase0, calibration, cohort]
---

# Scoresheet A — modelcontextprotocol.io

**Method note.** Evidence = fetched pages: home/intro (+ `.md` twin), `llms.txt`, `robots.txt`, `sitemap.xml`, `/community/{governance,sep-guidelines,contributor-ladder,communication,contributing}`, `/docs/2026-07-28/develop/build-server` (full text), `/specification/2026-07-28/changelog`, `/registry`, `/examples`, 404 probe, `/mcp` probe. No visual rendering performed. Fetched 2026-08-16.

## Score table

| Dim | Score | Evidence (S = biggest strength · W = biggest weakness) | Prov |
|---|---|---|---|
| D1 Positioning | **4** | First sentence is a complete definition with a known category noun: "an open-source standard for connecting AI applications to external systems"; USB-C metaphor does real explanatory work; 4 concrete examples before any abstraction; audiences named (Developers / AI apps / End-users); CTAs match archetype B (Build servers / Build clients). S: definition-first docs-as-homepage. W: no stated negative space ("this is not X") in the first screens; viewport legibility unverified. | [D] copy; [I] viewports |
| D2 IA & navigation | **4** | Sitemap: coherent sections docs / specification / community / seps / registry / extensions / examples, ~500 URLs, all-lowercase, date-versioned machine-predictable scheme (`/docs/2026-07-28/…`) plus unversioned aliases; high-value pages ≤2 clicks via home cards + nav; llms.txt confirms hierarchy. S: URL scheme predictable and versioned. W: registry browse is API-only — no first-party faceted catalogue surface (delegated to aggregators by design); search assumed from platform, not observed. | [D] sitemap/URLs; [I] search, orphans |
| D3 Onboarding / TTFS | **4** | Build-server tutorial: "What we'll be building" defines first success (weather server + Claude Desktop screenshot); per-language "Prerequisite knowledge" + "System requirements" sections; full Troubleshooting accordion with specific errors + dedicated Debugging guide + "Next steps" cards; complete repo linked; 5+ language tabs; `npx -y @modelcontextprotocol/server-memory` gives a <5-min run path. S: troubleshooting + escape-hatch discipline. W: no hosted zero-install playground; TTFS not stopwatch-measured — Claude Desktop config editing plausibly pushes a newcomer past 10 min. | [D] tutorial text; [I] TTFS estimate |
| D4 Documentation | **4** | Types separated in IA: learn/ (explanation) vs develop/ (tutorial-how-to) vs specification/ (reference, schema auto-generated from TS source of truth) ; every spec+docs version retained (2024-11-05→2026-07-28 + draft); per-version changelog with SEP links; feature-lifecycle/deprecation policy (12-month window) + deprecated-features registry + suggested migrations; sitemap lastmod per page. S: versioning + migration discipline is best-in-cohort. W: no canonical glossary observed; on-page last-updated / edit-this-page not confirmed. | [D]; [I] edit-path |
| D5 Visual craft | **3** | Mintlify platform: consistent component system (Cards/Tabs/Steps/Notes), code blocks with copy affordance, dark/light — tokenised by platform, conformant by construction. S: platform enforces consistency. W: no published design system; diagram voice inconsistent (polished template vs. informal Excalidraw ecosystem diagram); no distinctive project-owned visual voice. Not visually rendered — reduced confidence. | [I] (platform inference; [D] diagram assets) |
| D6 Content & voice | **4** | Single sober technical register across all 9 fetched pages; registers separated cleanly by document type (friendly contributing guide vs RFC-2119 spec); exemplary tense discipline — registry labeled "currently in preview. Breaking changes or data resets may occur"; ecosystem claims all named + linked (Claude, ChatGPT, VS Code, Cursor, MCPJam). S: preview/roadmap honesty. W: no published voice guide or claim register (blocks 5). | [D] |
| D7 Proof & credibility | **5** | Named humans: 2 Lead + 6 Core Maintainers + emeritus (incl. co-inventor) on /community/governance; LF Projects LLC hosting with trademark policy; licenses stated (Apache-2.0 + CC-BY-4.0); SECURITY.md private-disclosure path; independent non-founder implementations linked to their own docs (OpenAI/ChatGPT, Microsoft/VS Code, Cursor, MCPJam); registry "backed by Anthropic, GitHub, PulseMCP, Microsoft"; SDKs co-maintained with Google/Microsoft/JetBrains; exists-vs-planned surfaced (preview labels, roadmap, feature lifecycle). S: independent implementations — the archetype-B primary metric — demonstrated on-page. W: maintainer affiliations not stated inline; no live repo metrics anywhere (compliant with "stated not at all," but a reader must leave the site to gauge scale). | [D] |
| D8 Community & governance | **5** | Contributor ladder (implements SEP-2148) with explicit criteria, timelines, sponsorship, inactivity + emeritus policy; numbered SEP process with 8 states, public archive, sponsor role, conformance-test gate before Final (SEP-2484); WG/IG structure with charter template (SEP-2149); named role-holders; bi-weekly Core Maintainer meetings with public notes convention + live-call surface (meet.modelcontextprotocol.io); BDFL succession procedure incl. 30-day vote; escalation matrix with timelines; explicit AI-contribution policy (AI_POLICY.md). S: governance instantiated as numbered process artifacts, not prose. W: Discord liveness not verifiable from fetch; instrument treats MCP as the D8 reference, limiting discriminating power. | [D]; [I] channel liveness |
| D9 Contribution funnel | **4** | /community/contributing on the SITE: prerequisites, fork→`npm install`→`npm run check` verified setup ("works the same on macOS, Linux, Windows"), branch/PR conventions, review expectation stated ("typically respond within 1-5 business days"), good-first-issue query linked, questions routed Discussions-vs-Issues-vs-Discord, non-code pathways named, AI-assisted PRs welcomed with disclosure ask. S: complete on-site funnel with AI policy. W: responsiveness is a stated expectation, not a published measured median; good-first-issue population not verified. | [D]; [I] issue counts |
| D10 Machine legibility | **5** | llms.txt curated + annotated (~160 links, all `.md`); every doc URL resolves as `.md` twin (verified on intro.md); every page banners its machine entry point ("Fetch the complete documentation index at …/llms.txt"); robots.txt states deliberate AI posture (`Content-Signal: ai-train=yes, search=yes, ai-input=yes`) + sitemap with lastmod; registry is machine-readable by design (REST API + OpenAPI spec + server.json schema, DNS-verified namespaces); `/mcp` endpoint live (HTTP 405 on GET = accepts POST — an MCP server over its own corpus = demonstrated self-conformance); date-versioned stable URIs. S: self-conformance — the standard's site speaks the standard. W: JSON-LD structured data and RSS not observed; llms-full.txt absent at conventional path. | [D]; [I] JSON-LD/RSS absence |
| D11 Accessibility | **3** | Text evidence only: clean single-h1 heading hierarchy on all fetched pages; content fully server-rendered; mermaid diagrams carry text source. W: hero architecture diagram `<img>` in MDX source shows no alt attribute (may be injected at render); keyboard, contrast, skip-link, screen-reader behavior unverifiable without rendering. Scored at the "AA-plausible on primary templates, complex graphics partially covered" anchor with **reduced confidence — inference-limited**. | [I] ([D] for heading structure + missing alt in source) |
| D12 Performance & ops | **3** | Proper HTTP 404 status on dead paths; CDN-optimized image pipeline (mintcdn, quality/format params); documentation link-checking runs in CI (`npm run check` includes "documentation link checks"); no observed internal 404s across ~20 fetched URLs. W: no public status page observed (registry is a live service in preview); CWV, security headers, per-PR previews unverifiable without rendering — reduced confidence. | [I] ([D] for 404 status, CI link-check, CDN) |

## Composites

Composite = Σ (score ÷ 5 × weight).

| Weighting | D1 | D2 | D3 | D4 | D5 | D6 | D7 | D8 | D9 | D10 | D11 | D12 | **Composite** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| (a) Archetype-appropriate — **B×E** (nearest-B) | 9.6 | 6.4 | 9.6 | 9.6 | 4.8 | 6.4 | 14.0 | 10.0 | 4.8 | 6.0 | 1.2 | 1.2 | **83.6%** |
| (b) Cross-comparability — **B×E** | 9.6 | 6.4 | 9.6 | 9.6 | 4.8 | 6.4 | 14.0 | 10.0 | 4.8 | 6.0 | 1.2 | 1.2 | **83.6%** |

*(a) and (b) are the same column for this site — MCP is the nearest-B target, so its archetype-appropriate weighting IS the B×E column. Reported once, twice, per protocol.*

**Gate note (D11/D12 binary gates):** no WCAG critical or CWV red *observed*, but neither gate was actually *testable* from text evidence — gate status is UNVERIFIED, not passed.

## Anchor ambiguities

1. **D3 — conjunctive anchor vs unmeasurable TTFS.** Anchor 4 conjoins "TTFS < 10 min" (requires a clean-VM stopwatch run) with documentation-hygiene conditions (prereqs, troubleshooting) that a desk reviewer *can* verify. When hygiene passes but TTFS is only estimable, the anchors give no rule. I scored the hygiene conditions and tagged the TTFS clause [I]; the instrument should state whether desk reviews score hygiene-only and cap at 4, or must abstain.
2. **D2 anchor 5 — "catalogue surfaces are faceted and demonstrably scale."** MCP deliberately ships the registry as API-only and delegates faceted browse to downstream aggregators. Is an API-first catalogue with no first-party browse UI a pass (scales by architecture) or fail (no faceted surface)? I read it as not-met → 4; a defensible opposite reading exists.
3. **D7 check 5 vs proof-layer principle.** Check 5 demands "live metrics pulled from source, never hardcoded"; the §2.1 proof layer allows "stated not at all." MCP shows no metrics anywhere. I treated absence as compliant (scored 5); the anchors should say explicitly whether check 5 is conditional on metrics being shown at all.
4. **D5 — platform-inherited craft.** For sites on a docs platform (Mintlify), tokenisation and consistency are enforced by the vendor, not the project. Anchors don't say whether platform-inherited discipline counts toward "tokenised system" (my reading: yes, → 3) or whether the project must own the system (→ 2).
5. **D8 — reference-site saturation.** The instrument names MCP as the D8 reference implementation, so anchor 5 is near-tautological here; discriminating power at the top of D8 is weak. Calibration should note that a 5 on D8 means "MCP-equivalent," not "perfect."
